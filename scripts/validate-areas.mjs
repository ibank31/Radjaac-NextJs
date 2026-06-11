import { register } from "node:module";
import { pathToFileURL } from "node:url";
import fs from "node:fs";
import path from "node:path";

// Single validator for the area dataset. Read-only: it imports the real
// modules and inspects them; it never mutates files or page output.
//
// We register an inline loader so the "@/..." path alias (resolved by Next.js
// via jsconfig paths) also resolves under plain Node, including directory ->
// index.js resolution for content/areas/.
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

const root = process.cwd();
const read = (f) => fs.readFileSync(path.join(root, f), "utf8");
const nonEmpty = (v) => typeof v === "string" && v.trim() !== "";

let fails = 0;
let warns = 0;
const ok = (m) => console.log("[OK]   " + m);
const warn = (m) => { warns++; console.log("[WARN] " + m); };
const fail = (m) => { fails++; console.log("[FAIL] " + m); };


console.log("=== VALIDATE AREAS ===");

const { areaItems, areaClusterMap } = await import("@/content/areas");
const { routes, sitemapRoutes } = await import("@/content/routes");

const slugs = areaItems.map((i) => i.slug);
const slugSet = new Set(slugs);
const clusterKeys = new Set(Object.keys(areaClusterMap));
const routeValues = new Set(Object.values(routes).filter((v) => typeof v === "string"));
const sitemapPaths = new Set(sitemapRoutes.map((r) => r.path));
const areaPaths = new Set(areaItems.map((i) => i.path));

// 1. Unique slugs
const dupes = [...new Set(slugs.filter((s, i) => slugs.indexOf(s) !== i))];
dupes.length
  ? fail(`Duplicate slugs: ${dupes.join(", ")}`)
  : ok(`Slugs unique (${slugs.length})`);

// 2. Required fields title/description/h1
const missing = [];
for (const it of areaItems) {
  for (const f of ["title", "description", "h1"]) {
    if (!nonEmpty(it[f])) missing.push(`${it.slug}.${f}`);
  }
}
missing.length
  ? fail(`Missing/empty required fields: ${missing.join(", ")}`)
  : ok("All areas have non-empty title/description/h1");

// 3. Every area slug exists in cluster-map
const noCluster = slugs.filter((s) => !clusterKeys.has(s));
noCluster.length
  ? fail(`Area slugs missing from cluster-map: ${noCluster.join(", ")}`)
  : ok("All area slugs present in cluster-map");

// 4. Every cluster-map key maps to a live area
const orphanCluster = [...clusterKeys].filter((k) => !slugSet.has(k));
orphanCluster.length
  ? fail(`cluster-map keys without a live area: ${orphanCluster.join(", ")}`)
  : ok("All cluster-map keys map to a live area");

// 5. Every area has a route value matching "/" + slug (and item.path agrees)
const noRoute = [];
for (const it of areaItems) {
  const expected = "/" + it.slug;
  if (!routeValues.has(expected)) noRoute.push(it.slug);
  if (it.path !== expected) warn(`Area ${it.slug} path "${it.path}" != "${expected}"`);
}
noRoute.length
  ? fail(`Areas without a matching route: ${noRoute.join(", ")}`)
  : ok("All areas have a route entry");

// 6. Every area route has a sitemap entry
const noSitemap = slugs.filter((s) => !sitemapPaths.has("/" + s));
noSitemap.length
  ? fail(`Area routes missing from sitemap: ${noSitemap.join(", ")}`)
  : ok("All area routes have a sitemap entry");


// 7 & 8. nearbyAreaLinks / relatedLinks must not be broken
const linkBroken = (t) => typeof t !== "string" || t.trim() === "" || !t.startsWith("/");
const brokenNearby = [];
const brokenRelated = [];
const unknownTargets = [];
for (const it of areaItems) {
  for (const l of it.nearbyAreaLinks || []) {
    if (!Array.isArray(l) || linkBroken(l[1])) brokenNearby.push(`${it.slug}:${JSON.stringify(l)}`);
    else if (!routeValues.has(l[1])) unknownTargets.push(`${it.slug} nearby -> ${l[1]}`);
  }
  for (const l of it.relatedLinks || []) {
    if (!Array.isArray(l) || linkBroken(l[1])) brokenRelated.push(`${it.slug}:${JSON.stringify(l)}`);
    else if (!routeValues.has(l[1])) unknownTargets.push(`${it.slug} related -> ${l[1]}`);
  }
}
brokenNearby.length
  ? fail(`Broken nearbyAreaLinks: ${brokenNearby.join(" | ")}`)
  : ok("nearbyAreaLinks all resolve to a path");
brokenRelated.length
  ? fail(`Broken relatedLinks: ${brokenRelated.join(" | ")}`)
  : ok("relatedLinks all resolve to a path");
if (unknownTargets.length) warn(`Link targets not found in routes (possible typo): ${unknownTargets.join(" | ")}`);

// 10 & 11. Hub coverage and footer subset (parse route refs from source text)
const routeKeysIn = (text) => [...text.matchAll(/routes\.(jualAc[A-Za-z]+)/g)].map((m) => m[1]);
const pathsFromKeys = (keys) => new Set(keys.map((k) => routes[k]).filter(Boolean));
const hubPaths = pathsFromKeys(routeKeysIn(read("app/jual-ac/page.js")));
const footerPaths = pathsFromKeys(routeKeysIn(read("components/layout/Footer.jsx")));

const hubMissing = [...areaPaths].filter((p) => !hubPaths.has(p));
hubMissing.length
  ? fail(`Areas missing from hub /jual-ac: ${hubMissing.join(", ")}`)
  : ok(`Hub /jual-ac covers all ${areaPaths.size} live areas`);

const footerExtra = [...footerPaths].filter((p) => !areaPaths.has(p));
footerExtra.length
  ? fail(`Footer area links not in live areas: ${footerExtra.join(", ")}`)
  : ok(`Footer area links (${footerPaths.size}) are a subset of live areas`);

// 9. No orphan slug (must be wired to cluster + route + sitemap + hub)
const orphans = slugs.filter(
  (s) => !clusterKeys.has(s) || !routeValues.has("/" + s) || !sitemapPaths.has("/" + s) || !hubPaths.has("/" + s),
);
orphans.length
  ? fail(`Orphan slugs (missing cluster/route/sitemap/hub wiring): ${orphans.join(", ")}`)
  : ok("No orphan slugs (all wired to cluster/route/sitemap/hub)");

console.log("\n=== SUMMARY ===");
console.log(
  `areaItems=${slugs.length} cluster=${clusterKeys.size} ` +
    `sitemap(area)=${[...sitemapPaths].filter((p) => p.startsWith("/jual-ac-")).length} ` +
    `hub=${hubPaths.size} footer=${footerPaths.size}`,
);
console.log(`FAIL=${fails} WARN=${warns}`);

if (fails > 0) {
  console.log("RESULT: FAIL");
  process.exit(1);
}
console.log("RESULT: OK");
