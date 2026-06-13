import { register } from "node:module";
import { pathToFileURL } from "node:url";

// Data-aware validator for the article system (Phase B2A.1 hardening).
// Read-only: imports the real modules + the article-graph engine and inspects
// them; never mutates files or page output. The engine is the single source of
// truth for relationships and health signals — this script gates on integrity
// (FAIL), tracks content debt (WARN), and prints architecture reports
// (inbound / cluster coverage / quality / imbalance) for scaling decisions.
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
const pad = (v, n) => String(v).padEnd(n);

let fails = 0;
let warns = 0;
const ok = (m) => console.log("[OK]   " + m);
const warn = (m) => { warns++; console.log("[WARN] " + m); };
const fail = (m) => { fails++; console.log("[FAIL] " + m); };
const section = (t) => console.log("\n=== " + t + " ===");

console.log("=== VALIDATE ARTICLES ===");

const { articleItems } = await import("@/content/articles");
const { areaItems } = await import("@/content/areas");
const { routes } = await import("@/content/routes");
const {
  VALID_CLUSTERS,
  VALID_ROLES,
  VALID_INTENTS,
  getInboundReport,
  getClusterStats,
  getHierarchyIssues,
  getArticleQuality,
} = await import("@/lib/article-graph");

const slugs = articleItems.map((a) => a.slug);
const bySlug = new Map(articleItems.map((a) => [a.slug, a]));
const routeValues = new Set(Object.values(routes).filter((v) => typeof v === "string"));
const areaSlugSet = new Set(areaItems.map((a) => a.slug));
const usedClusters = [...new Set(articleItems.map((a) => a.cluster))];

// ---------------------------------------------------------------------------
// GATES (FAIL) — structural integrity
// ---------------------------------------------------------------------------
section("INTEGRITY CHECKS");

// 1. Unique slugs
const dupSlugs = [...new Set(slugs.filter((s, i) => slugs.indexOf(s) !== i))];
dupSlugs.length ? fail(`Duplicate article slugs: ${dupSlugs.join(", ")}`) : ok(`Article slugs unique (${slugs.length})`);

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

// 3. cluster / role / intent valid enums
const badCluster = [], badRole = [], badIntent = [];
for (const a of articleItems) {
  if (!VALID_CLUSTERS.includes(a.cluster)) badCluster.push(`${a.slug}:${a.cluster}`);
  if (!VALID_ROLES.includes(a.role)) badRole.push(`${a.slug}:${a.role}`);
  if (!VALID_INTENTS.includes(a.intent)) badIntent.push(`${a.slug}:${a.intent}`);
}
badCluster.length ? fail(`Invalid cluster: ${badCluster.join(", ")}`) : ok("All clusters valid");
badRole.length ? fail(`Invalid role: ${badRole.join(", ")}`) : ok("All roles valid");
badIntent.length ? fail(`Invalid intent: ${badIntent.join(", ")}`) : ok("All intents valid");

// 4. Exactly one pillar per non-empty cluster (via engine cluster stats)
const clusterStats = getClusterStats();
const noPillar = usedClusters.filter((c) => clusterStats[c].pillars === 0);
const multiPillar = usedClusters.filter((c) => clusterStats[c].pillars > 1);
noPillar.length
  ? fail(`Clusters without a pillar: ${noPillar.join(", ")}`)
  : ok(`Every non-empty cluster has exactly one pillar (${usedClusters.length} clusters)`);
multiPillar.length
  ? fail(`Clusters with more than one pillar: ${multiPillar.join(", ")}`)
  : ok("No cluster has more than one pillar");

// 5. Hierarchy integrity (via engine) — missing/self/circular/broken/invalid-cluster/orphan-child
const hierarchyIssues = getHierarchyIssues();
if (hierarchyIssues.length) {
  for (const i of hierarchyIssues) fail(`Hierarchy issue [${i.type}]: ${i.slug}`);
} else {
  ok("Hierarchy intact (no missing/self/circular/broken/cross-cluster/orphan-child)");
}

// 6. Money links well-formed and pointing to a live route
const badMoney = [], noMoney = [];
for (const a of articleItems) {
  if (!Array.isArray(a.moneyLinks) || a.moneyLinks.length === 0) { noMoney.push(a.slug); continue; }
  for (const l of a.moneyLinks) {
    if (!Array.isArray(l) || !nonEmpty(l[0]) || !nonEmpty(l[1])) badMoney.push(`${a.slug}:${JSON.stringify(l)}`);
    else if (!routeValues.has(l[1])) badMoney.push(`${a.slug} -> ${l[1]} (not a live route)`);
  }
}
noMoney.length ? fail(`Articles without money links: ${noMoney.join(", ")}`) : ok("All articles have money links");
badMoney.length ? fail(`Broken money links: ${badMoney.join(" | ")}`) : ok("All money links well-formed and point to live routes");

// 7. Content quality gate: >= 3 sections each
const thinSections = articleItems.filter((a) => !Array.isArray(a.sections) || a.sections.length < 3).map((a) => `${a.slug}(${a.sections?.length || 0})`);
thinSections.length ? fail(`Articles with fewer than 3 sections: ${thinSections.join(", ")}`) : ok("All articles have at least 3 sections");

// 8. Title / description uniqueness
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

// 9. Anti-cannibalization: no area-slug collision, no transactional pattern
const areaCollision = slugs.filter((s) => areaSlugSet.has(s));
const txPattern = slugs.filter((s) => /^jual-ac-/.test(s));
areaCollision.length ? fail(`Article slug collides with an area slug: ${areaCollision.join(", ")}`) : ok("No article slug collides with an area slug");
txPattern.length ? fail(`Article slug uses transactional money-page pattern (jual-ac-*): ${txPattern.join(", ")}`) : ok("No article slug uses the transactional money-page pattern");

// ---------------------------------------------------------------------------
// REPORT A — ARTICLE INBOUND (data-driven; orphan => FAIL, weak => informational)
// ---------------------------------------------------------------------------
section("ARTICLE INBOUND REPORT");
const inbound = getInboundReport();
console.log(`${pad("slug", 44)}${pad("cluster", 26)}${pad("inbound", 9)}status`);
for (const r of [...inbound].sort((a, b) => a.inboundCount - b.inboundCount || a.slug.localeCompare(b.slug))) {
  console.log(`${pad(r.slug, 44)}${pad(r.cluster, 26)}${pad(r.inboundCount, 9)}${r.status}`);
}
const orphans = inbound.filter((r) => r.status === "orphan");
const weakInbound = inbound.filter((r) => r.status === "weak");
orphans.length
  ? fail(`Orphan articles (0 inbound in graph): ${orphans.map((r) => r.slug).join(", ")}`)
  : ok("No orphan articles (every article has graph inbound)");
console.log(`inbound summary: healthy=${inbound.filter((r) => r.status === "healthy").length} weak=${weakInbound.length} orphan=${orphans.length}`);
if (weakInbound.length) console.log(`note (informational): weak inbound (single-article clusters / few links): ${weakInbound.map((r) => r.slug).join(", ")}`);

// ---------------------------------------------------------------------------
// REPORT B — CLUSTER COVERAGE
// ---------------------------------------------------------------------------
section("CLUSTER COVERAGE REPORT");
console.log(`${pad("cluster", 26)}${pad("articles", 10)}${pad("pillars", 9)}${pad("children", 10)}supporting`);
for (const c of VALID_CLUSTERS) {
  const s = clusterStats[c];
  console.log(`${pad(c, 26)}${pad(s.articles, 10)}${pad(s.pillars, 9)}${pad(s.children, 10)}${s.supporting}`);
}

// ---------------------------------------------------------------------------
// REPORT C — ARTICLE QUALITY
// ---------------------------------------------------------------------------
section("ARTICLE QUALITY REPORT");
console.log(`${pad("slug", 44)}${pad("sections", 10)}${pad("faqs", 6)}${pad("cta", 5)}${pad("money", 7)}meta`);
for (const a of articleItems) {
  const q = getArticleQuality(a);
  console.log(`${pad(q.slug, 44)}${pad(q.sections, 10)}${pad(q.faqs, 6)}${pad(q.hasCta ? "yes" : "no", 5)}${pad(q.moneyLinks, 7)}${q.metadataComplete ? "complete" : "partial"}`);
}

// ---------------------------------------------------------------------------
// REPORT D — CLUSTER IMBALANCE (informational; structural pillar gaps already FAIL above)
// ---------------------------------------------------------------------------
section("CLUSTER IMBALANCE REPORT");
const imbalance = [];
for (const c of usedClusters) {
  const s = clusterStats[c];
  if (s.pillars === 0) imbalance.push(`${c}: no pillar`);
  if (s.supporting === 0) imbalance.push(`${c}: no supporting article (pillar-only)`);
  if (s.children >= 4 && s.children / Math.max(s.pillars, 1) >= 4) imbalance.push(`${c}: child-heavy (${s.children} children under ${s.pillars} pillar)`);
}
if (imbalance.length) {
  console.log("informational imbalance notes:");
  for (const m of imbalance) console.log("  - " + m);
} else {
  console.log("no notable cluster imbalance");
}

// ---------------------------------------------------------------------------
// CONTENT DEBT (WARN) — gated for regression once cleared
// ---------------------------------------------------------------------------
section("CONTENT DEBT");
const thinFaq = articleItems.filter((a) => !Array.isArray(a.faqs) || a.faqs.length < 3).map((a) => a.slug);
thinFaq.length ? warn(`FAQ < 3: ${thinFaq.join(", ")}`) : ok("All articles have at least 3 FAQ");
const noCta = articleItems.filter((a) => !nonEmpty(a.ctaLabel) || !nonEmpty(a.waIntent)).map((a) => a.slug);
noCta.length ? warn(`Missing ctaLabel/waIntent: ${noCta.join(", ")}`) : ok("All articles have ctaLabel + waIntent");

// ---------------------------------------------------------------------------
// SUMMARY
// ---------------------------------------------------------------------------
const dist = {};
for (const a of articleItems) dist[a.cluster] = (dist[a.cluster] || 0) + 1;
section("SUMMARY");
console.log(`articles=${slugs.length} clusters=${usedClusters.length}`);
console.log("cluster distribution: " + Object.entries(dist).sort().map(([c, n]) => `${c}=${n}`).join(" "));
console.log(`FAIL=${fails} WARN=${warns}`);

if (fails > 0) {
  console.log("RESULT: FAIL");
  process.exit(1);
}
console.log("RESULT: OK");
