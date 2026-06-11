import { register } from "node:module";
import { pathToFileURL } from "node:url";
import path from "node:path";

// Data-aware validator for the article system (Phase B2A foundation).
// Read-only: imports the real modules and inspects them; never mutates files
// or page output. Enforces the article graph's integrity (cluster / role /
// intent, pillar-child wiring, money-link validity, content quality, and
// anti-cannibalization) so the system stays sound as articles scale.
//
// Inline alias loader so "@/..." resolves under plain Node (dir -> index.js),
// mirroring validate-areas.mjs / validate-seo.mjs.
const loaderSrc = `
import { pathToFileURL } from "node:url";
import path from "node:path";
import fs from "node:fs";
const root = process.cwd();
function res(p) {
  if (fs.existsSync(p) && fs.statSync(p).isFile()) return p;
  for (const e of [".js", ".mjs", ".jsx"]) if (fs.existsSync(p + e)) return p + e;
  if (fs.existsSync(p) && fs.statSync(p).isDirectory()) {
    const q = path.join(p, "index.js");
    if (fs.existsSync(q)) return q;
  }
  return p;
}
export async function resolve(spec, ctx, next) {
  if (spec.startsWith("@/")) return next(pathToFileURL(res(path.join(root, spec.slice(2)))).href, ctx);
  return next(spec, ctx);
}
`;
register("data:text/javascript," + encodeURIComponent(loaderSrc), pathToFileURL("./"));

const nonEmpty = (v) => typeof v === "string" && v.trim() !== "";

let fails = 0;
let warns = 0;
const ok = (m) => console.log("[OK]   " + m);
const warn = (m) => { warns++; console.log("[WARN] " + m); };
const fail = (m) => { fails++; console.log("[FAIL] " + m); };

console.log("=== VALIDATE ARTICLES ===");

const { articleItems } = await import("@/content/articles");
const { areaItems } = await import("@/content/areas");
const { routes } = await import("@/content/routes");
const { VALID_CLUSTERS, VALID_ROLES, VALID_INTENTS } = await import("@/lib/article-graph");

const slugs = articleItems.map((a) => a.slug);
const slugSet = new Set(slugs);
const bySlug = new Map(articleItems.map((a) => [a.slug, a]));
const routeValues = new Set(Object.values(routes).filter((v) => typeof v === "string"));
const areaSlugSet = new Set(areaItems.map((a) => a.slug));

// 1. Unique slugs
const dupSlugs = [...new Set(slugs.filter((s, i) => slugs.indexOf(s) !== i))];
dupSlugs.length
  ? fail(`Duplicate article slugs: ${dupSlugs.join(", ")}`)
  : ok(`Article slugs unique (${slugs.length})`);

// 2. Required base fields
const missingBase = [];
for (const a of articleItems) {
  for (const f of ["slug", "path", "title", "description", "h1"]) {
    if (!nonEmpty(a[f])) missingBase.push(`${a.slug || "?"}.${f}`);
  }
}
missingBase.length
  ? fail(`Missing/empty required fields: ${missingBase.join(", ")}`)
  : ok("All articles have non-empty slug/path/title/description/h1");

// 3. cluster / role / intent are valid enum values
const badCluster = [];
const badRole = [];
const badIntent = [];
for (const a of articleItems) {
  if (!VALID_CLUSTERS.includes(a.cluster)) badCluster.push(`${a.slug}:${a.cluster}`);
  if (!VALID_ROLES.includes(a.role)) badRole.push(`${a.slug}:${a.role}`);
  if (!VALID_INTENTS.includes(a.intent)) badIntent.push(`${a.slug}:${a.intent}`);
}
badCluster.length ? fail(`Invalid cluster: ${badCluster.join(", ")}`) : ok("All clusters valid");
badRole.length ? fail(`Invalid role: ${badRole.join(", ")}`) : ok("All roles valid");
badIntent.length ? fail(`Invalid intent: ${badIntent.join(", ")}`) : ok("All intents valid");

// 4. Exactly one pillar per non-empty cluster
const pillarsByCluster = {};
for (const a of articleItems) {
  if (a.role === "pillar") {
    (pillarsByCluster[a.cluster] = pillarsByCluster[a.cluster] || []).push(a.slug);
  }
}
const usedClusters = [...new Set(articleItems.map((a) => a.cluster))];
const noPillar = usedClusters.filter((c) => !(pillarsByCluster[c] || []).length);
const multiPillar = usedClusters.filter((c) => (pillarsByCluster[c] || []).length > 1);
noPillar.length
  ? fail(`Clusters without a pillar: ${noPillar.join(", ")}`)
  : ok(`Every non-empty cluster has a pillar (${usedClusters.length} clusters)`);
multiPillar.length
  ? fail(`Clusters with more than one pillar: ${multiPillar.map((c) => `${c} [${pillarsByCluster[c].join(", ")}]`).join(" | ")}`)
  : ok("No cluster has more than one pillar");

// 5. parentSlug resolves, points to same cluster, and pillars have no parent
const badParent = [];
const crossClusterParent = [];
const pillarWithParent = [];
const orphanChild = [];
for (const a of articleItems) {
  if (a.role === "pillar") {
    if (a.parentSlug) pillarWithParent.push(`${a.slug} -> ${a.parentSlug}`);
    continue;
  }
  // supporting article must have a resolvable parent
  if (!nonEmpty(a.parentSlug)) {
    orphanChild.push(a.slug);
    continue;
  }
  const parent = bySlug.get(a.parentSlug);
  if (!parent) badParent.push(`${a.slug} -> ${a.parentSlug}`);
  else if (parent.cluster !== a.cluster) crossClusterParent.push(`${a.slug}(${a.cluster}) -> ${a.parentSlug}(${parent.cluster})`);
}
badParent.length ? fail(`parentSlug does not resolve: ${badParent.join(", ")}`) : ok("All parentSlug references resolve");
orphanChild.length ? fail(`Supporting articles without parentSlug (child orphan): ${orphanChild.join(", ")}`) : ok("No child orphans (every supporting article has a parent)");
crossClusterParent.length ? fail(`Child points to a parent in another cluster: ${crossClusterParent.join(" | ")}`) : ok("All children share their parent's cluster");
pillarWithParent.length ? fail(`Pillar must not have a parent: ${pillarWithParent.join(", ")}`) : ok("No pillar has a parent");

// 6. No parent loops (follow parentSlug chain, detect cycle / over-deep)
const loops = [];
for (const a of articleItems) {
  const seen = new Set([a.slug]);
  let cur = a;
  let depth = 0;
  while (cur && cur.parentSlug) {
    if (seen.has(cur.parentSlug)) { loops.push(a.slug); break; }
    seen.add(cur.parentSlug);
    cur = bySlug.get(cur.parentSlug);
    if (++depth > slugs.length) { loops.push(a.slug); break; }
  }
}
loops.length ? fail(`Parent loops detected starting at: ${[...new Set(loops)].join(", ")}`) : ok("No parent loops");

// 7. Money links: well-formed and pointing to a live route
const badMoney = [];
const noMoney = [];
for (const a of articleItems) {
  if (!Array.isArray(a.moneyLinks) || a.moneyLinks.length === 0) { noMoney.push(a.slug); continue; }
  for (const l of a.moneyLinks) {
    if (!Array.isArray(l) || !nonEmpty(l[0]) || !nonEmpty(l[1])) badMoney.push(`${a.slug}:${JSON.stringify(l)}`);
    else if (!routeValues.has(l[1])) badMoney.push(`${a.slug} -> ${l[1]} (not a live route)`);
  }
}
noMoney.length ? fail(`Articles without money links: ${noMoney.join(", ")}`) : ok("All articles have money links");
badMoney.length ? fail(`Broken money links: ${badMoney.join(" | ")}`) : ok("All money links are well-formed and point to live routes");

// 8. Content quality: >= 3 sections each
const thinSections = articleItems.filter((a) => !Array.isArray(a.sections) || a.sections.length < 3).map((a) => `${a.slug}(${a.sections?.length || 0})`);
thinSections.length
  ? fail(`Articles with fewer than 3 sections: ${thinSections.join(", ")}`)
  : ok("All articles have at least 3 sections");

// 9. Title / description uniqueness
const dupBy = (key) => {
  const seen = new Map();
  for (const a of articleItems) {
    const v = (a[key] || "").trim();
    if (!v) continue;
    seen.set(v, [...(seen.get(v) || []), a.slug]);
  }
  return [...seen.entries()].filter(([, v]) => v.length > 1);
};
const dupTitle = dupBy("title");
const dupDesc = dupBy("description");
dupTitle.length ? fail(`Duplicate titles: ${dupTitle.map(([t, v]) => `"${t}" <- [${v.join(", ")}]`).join(" | ")}`) : ok("All titles unique");
dupDesc.length ? fail(`Duplicate descriptions: ${dupDesc.map(([, v]) => `[${v.join(", ")}]`).join(" | ")}`) : ok("All descriptions unique");

// 10. Anti-cannibalization: article slugs must not collide with area slugs and
//     must not use the transactional money-page pattern (jual-ac-*).
const areaCollision = slugs.filter((s) => areaSlugSet.has(s));
const txPattern = slugs.filter((s) => /^jual-ac-/.test(s));
areaCollision.length
  ? fail(`Article slug collides with an area slug: ${areaCollision.join(", ")}`)
  : ok("No article slug collides with an area slug");
txPattern.length
  ? fail(`Article slug uses transactional money-page pattern (jual-ac-*): ${txPattern.join(", ")}`)
  : ok("No article slug uses the transactional money-page pattern");

// 11. Content depth WARNINGS (non-blocking, tracked for legacy upgrade)
const thinFaq = articleItems.filter((a) => !Array.isArray(a.faqs) || a.faqs.length < 3).map((a) => a.slug);
if (thinFaq.length) warn(`FAQ < 3 (legacy articles to upgrade): ${thinFaq.join(", ")}`);
const noCta = articleItems.filter((a) => !nonEmpty(a.ctaLabel)).map((a) => a.slug);
if (noCta.length) warn(`Missing ctaLabel: ${noCta.join(", ")}`);

// Cluster distribution (informational only)
const dist = {};
for (const a of articleItems) dist[a.cluster] = (dist[a.cluster] || 0) + 1;

console.log("\n=== SUMMARY ===");
console.log(`articles=${slugs.length} clusters=${usedClusters.length}`);
console.log("cluster distribution: " + Object.entries(dist).sort().map(([c, n]) => `${c}=${n}`).join(" "));
console.log(`FAIL=${fails} WARN=${warns}`);

if (fails > 0) {
  console.log("RESULT: FAIL");
  process.exit(1);
}
console.log("RESULT: OK");
