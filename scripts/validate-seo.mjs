import { register } from "node:module";
import { pathToFileURL } from "node:url";
import fs from "node:fs";
import path from "node:path";

// SEO infrastructure validator. READ-ONLY: imports the real modules and scans
// source text; never writes, modifies, or generates files (audit output only).
//
// Inline alias loader so "@/..." resolves under plain Node (dir -> index.js).
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

const TITLE_MIN = 15;
const DESC_MIN = 50;

// ---- Pure check engine: takes a normalized model, returns findings. ----
export function runChecks(model) {
  let fails = 0;
  let warns = 0;
  const lines = [];
  const ok = (m) => lines.push("[OK]   " + m);
  const warn = (m) => { warns++; lines.push("[WARN] " + m); };
  const fail = (m) => { fails++; lines.push("[FAIL] " + m); };

  const { pages, sitemapPaths, liveRoutes, links, inbound, redirects } = model;
  const liveSet = liveRoutes instanceof Set ? liveRoutes : new Set(liveRoutes);

  // 1. ROUTE COVERAGE
  const sitemapSet = new Set(sitemapPaths);
  const dupSitemap = [...new Set(sitemapPaths.filter((p, i) => sitemapPaths.indexOf(p) !== i))];
  const liveNotSitemap = [...liveSet].filter((p) => !sitemapSet.has(p)).sort();
  const sitemapNotLive = [...sitemapSet].filter((p) => !liveSet.has(p)).sort();
  dupSitemap.length ? fail(`Duplicate sitemap paths: ${dupSitemap.join(", ")}`) : ok("No duplicate sitemap paths");
  liveNotSitemap.length ? fail(`Live routes missing from sitemap: ${liveNotSitemap.join(", ")}`) : ok("All live routes are in sitemap");
  sitemapNotLive.length ? fail(`Sitemap paths that are not live: ${sitemapNotLive.join(", ")}`) : ok("All sitemap paths are live routes");

  // 2. METADATA COVERAGE
  const metaMissing = [];
  const metaShort = [];
  for (const pg of pages) {
    if (!pg.title || !pg.title.trim()) metaMissing.push(`${pg.path}.title`);
    if (!pg.description || !pg.description.trim()) metaMissing.push(`${pg.path}.description`);
    if (!pg.canonical || !pg.canonical.trim()) metaMissing.push(`${pg.path}.canonical`);
    if (pg.title && pg.title.trim().length < TITLE_MIN) metaShort.push(`${pg.path} title(${pg.title.trim().length})`);
    if (pg.description && pg.description.trim().length < DESC_MIN) metaShort.push(`${pg.path} desc(${pg.description.trim().length})`);
  }
  metaMissing.length ? fail(`Missing metadata fields: ${metaMissing.join(", ")}`) : ok(`All ${pages.length} routes have title/description/canonical`);
  if (metaShort.length) warn(`Short metadata (title<${TITLE_MIN} / desc<${DESC_MIN}): ${metaShort.join(", ")}`);

  // 3. CANONICAL
  const byCanon = {};
  const canonMismatch = [];
  for (const pg of pages) {
    if (pg.canonical) (byCanon[pg.canonical] = byCanon[pg.canonical] || []).push(pg.path);
    if (pg.expectedCanonical && pg.canonical && pg.canonical !== pg.expectedCanonical) {
      canonMismatch.push(`${pg.path}: ${pg.canonical} != ${pg.expectedCanonical}`);
    }
  }
  const dupCanon = Object.entries(byCanon).filter(([, v]) => v.length > 1);
  dupCanon.length ? fail(`Duplicate canonical: ${dupCanon.map(([c, v]) => `${c} <- [${v.join(", ")}]`).join(" | ")}`) : ok("No duplicate canonical URLs");
  canonMismatch.length ? fail(`Canonical not matching route: ${canonMismatch.join(" | ")}`) : ok("All canonical URLs match their route");

  // 4. INTERNAL LINKS
  const broken = links.filter((l) => !l.targetExists);
  broken.length
    ? fail(`Broken internal route references: ${broken.map((l) => `${l.source} -> ${l.ref}`).join(" | ")}`)
    : ok(`All internal route references resolve (${links.length} checked)`);
  const orphans = [...liveSet].filter((p) => (inbound[p] || 0) === 0).sort();
  const weak = [...liveSet].filter((p) => (inbound[p] || 0) === 1).sort();
  orphans.length ? warn(`Orphan pages (0 inbound internal links): ${orphans.join(", ")}`) : ok("No orphan pages");
  if (weak.length) warn(`Weak pages (only 1 inbound internal link): ${weak.join(", ")}`);

  // 5. REDIRECT SAFETY
  const sourceSet = new Set(redirects.map((r) => r.source));
  // Only check internal destinations (starting with "/") against liveRoutes.
  // Absolute URLs to the site's own domain (https://www.radjaac.com/...) are
  // canonical domain redirects and are always valid — do NOT flag them as dead.
  const deadDest = redirects.filter(
    (r) =>
      r.destination.startsWith("/") && !liveSet.has(r.destination)
  );
  const chains = redirects.filter((r) => sourceSet.has(r.destination));
  deadDest.length ? fail(`Redirect destinations not live: ${deadDest.map((r) => `${r.source} -> ${r.destination}`).join(" | ")}`) : ok(`All ${redirects.length} redirect destinations are live`);
  chains.length ? fail(`Redirect chains: ${chains.map((r) => `${r.source} -> ${r.destination} (also a source)`).join(" | ")}`) : ok("No redirect chains");

  return { fails, warns, lines, stats: { routes: liveSet.size, sitemap: sitemapPaths.length, orphans: orphans.length, broken: broken.length, canonical: Object.keys(byCanon).length } };
}


// ---- File scanning helpers ----
const root = process.cwd();
const read = (f) => fs.readFileSync(path.join(root, f), "utf8");

function listFiles(dir) {
  const full = path.join(root, dir);
  if (!fs.existsSync(full)) return [];
  const out = [];
  for (const name of fs.readdirSync(full)) {
    if (["node_modules", ".next", ".git"].includes(name)) continue;
    const rel = path.join(dir, name);
    const st = fs.statSync(path.join(root, rel));
    if (st.isDirectory()) out.push(...listFiles(rel));
    else if (/\.(js|jsx|mjs)$/.test(name)) out.push(rel);
  }
  return out;
}

function extractInlineMeta(text) {
  const start = text.indexOf("buildMetadata(");
  const block = start >= 0 ? text.slice(start, start + 800) : text;
  const t = block.match(/title:\s*"([^"]+)"/);
  const d = block.match(/description:\s*"([^"]+)"/);
  return { title: t ? t[1] : "", description: d ? d[1] : "" };
}

// ---- Instrumentation helper ----
function makeStepLogger() {
  const t0 = Date.now();
  let last = t0;
  return (label) => {
    const now = Date.now();
    const ts = new Date(now).toISOString();
    const sinceStart = now - t0;
    const sinceLast = now - last;
    last = now;
    console.log(`[${ts}] ${label}  (+${sinceLast}ms, total ${sinceStart}ms)`);
  };
}

// ---- Build the model from the real repo ----
async function buildModel(step = () => {}) {
  step("STEP 1 load routes — start");
  const R = await import("@/content/routes");
  step("STEP 1 load routes — done");

  step("STEP 2 load sitemap — start");
  const sitemapPaths = R.sitemapRoutes.map((r) => r.path);
  step(`STEP 2 load sitemap — done (${sitemapPaths.length} entries)`);

  step("STEP 3 load areas + collections — start");
  const A = await import("@/content/areas");
  const B = await import("@/content/brands");
  const C = await import("@/content/catalog");
  const P = await import("@/content/procurement");
  const Ar = await import("@/content/articles");
  const S = await import("@/content/static-pages");
  const { buildMetadata } = await import("@/lib/seo");
  const { absoluteSiteUrl } = await import("@/lib/url");
  step("STEP 3 load areas + collections — done");

  step("STEP 4 build model — start");
  const collections = {
    areaItems: { items: A.areaItems, renderer: "app/[slug]/page.js" },
    brandItems: { items: B.brandItems, renderer: "app/brand/[slug]/page.js" },
    catalogItems: { items: C.catalogItems, renderer: "app/katalog/[slug]/page.js" },
    procurementItems: { items: P.procurementItems, renderer: "app/pengadaan-ac/[slug]/page.js" },
    articleItems: { items: Ar.articleItems, renderer: "app/artikel/[slug]/page.js" },
  };

  // metadata per path
  const meta = new Map();
  for (const m of Object.values(S.staticPageMetadata)) meta.set(m.path, { title: m.title, description: m.description });
  for (const { items } of Object.values(collections)) for (const it of items) meta.set(it.path, { title: it.title, description: it.description });
  const artIdx = extractInlineMeta(read("app/artikel/page.js"));
  meta.set(R.routes.artikel, artIdx);

  const liveRoutes = new Set(meta.keys());

  const pages = [...liveRoutes].map((p) => {
    const m = meta.get(p) || {};
    const built = buildMetadata({ title: m.title, description: m.description, path: p });
    return {
      path: p,
      title: m.title,
      description: m.description,
      canonical: built.alternates.canonical,
      expectedCanonical: absoluteSiteUrl(p),
    };
  });
  step(`STEP 4 build model — pages built (${pages.length} routes)`);

  // links + inbound — RENDER LAYER ONLY.
  // Internal links are emitted from app/** and components/**. We deliberately do
  // NOT scan content/** (data modules, incl. staged drafts), docs/**, scripts/**,
  // .next/**, node_modules/**, or .git/** — counting data references as links
  // would mask real orphans (e.g. a related-link array in content/articles.js).
  const scanFiles = [...listFiles("app"), ...listFiles("components")];
  step(`STEP 4 build model — scan file list resolved (${scanFiles.length} files, render layer: app/ + components/)`);
  const links = [];
  const inboundSets = new Map(); // path -> Set(sourceFiles)
  const credit = (target, source) => {
    if (!inboundSets.has(target)) inboundSets.set(target, new Set());
    inboundSets.get(target).add(source);
  };

  let scanned = 0;
  for (const file of scanFiles) {
    const text = read(file);
    scanned++;
    if (scanned % 10 === 0 || scanned === scanFiles.length) {
      step(`STEP 4 build model — scanning files ${scanned}/${scanFiles.length} (current: ${file})`);
    }
    // literal routes.<key>
    const seen = new Set();
    for (const m of text.matchAll(/routes\.([A-Za-z0-9_]+)/g)) {
      const key = m[1];
      const id = key;
      if (seen.has(id)) continue;
      seen.add(id);
      const exists = Object.prototype.hasOwnProperty.call(R.routes, key);
      const target = exists ? R.routes[key] : undefined;
      const targetExists = exists && liveRoutes.has(target);
      links.push({ source: file, ref: "routes." + key, target, targetExists });
      if (targetExists) credit(target, file);
    }
    // dynamic collection .path listing (exclude that collection's own renderer)
    for (const [name, { items, renderer }] of Object.entries(collections)) {
      if (file === renderer) continue;
      if (new RegExp(`\\b${name}\\b`).test(text) && /\.path\b/.test(text)) {
        for (const it of items) credit(it.path, file);
      }
    }
  }
  const inbound = {};
  for (const p of liveRoutes) inbound[p] = inboundSets.has(p) ? inboundSets.get(p).size : 0;

  // redirects from next.config
  const cfgFile = ["next.config.mjs", "next.config.js"].find((f) => fs.existsSync(path.join(root, f)));
  const cfg = cfgFile ? read(cfgFile) : "";
  const redirects = [];
  const re = /source:\s*"([^"]+)"[\s\S]*?destination:\s*"([^"]+)"/g;
  let mm;
  while ((mm = re.exec(cfg))) redirects.push({ source: mm[1].replace(/\/+$/, "") || "/", destination: mm[2] });

  step(`STEP 4 build model — done (links=${links.length}, redirects=${redirects.length})`);
  return { pages, sitemapPaths, liveRoutes, links, inbound, redirects };
}

// ---- Negative self-test: prove the engine is not a rubber stamp ----
function selfTest() {
  const broken = {
    pages: [
      { path: "/a", title: "Good title here", description: "A sufficiently long description for the page okay.", canonical: "https://x/a", expectedCanonical: "https://x/a" },
      { path: "/b", title: "", description: "desc", canonical: "https://x/b", expectedCanonical: "https://x/b" }, // missing title + short desc
      { path: "/c", title: "Another good title", description: "Another sufficiently long description here for testing.", canonical: "https://x/a", expectedCanonical: "https://x/c" }, // dup canonical + mismatch
    ],
    sitemapPaths: ["/a", "/a", "/ghost"], // dup + non-live; /b,/c missing
    liveRoutes: new Set(["/a", "/b", "/c"]),
    links: [{ source: "f.js", ref: "routes.typo", target: undefined, targetExists: false }],
    inbound: { "/a": 2, "/b": 0, "/c": 1 }, // /b orphan, /c weak
    redirects: [
      { source: "/old", destination: "/dead" }, // dead dest
      { source: "/x", destination: "/y" },
      { source: "/y", destination: "/a" }, // /y is a source -> chain
    ],
  };
  const res = runChecks(broken);
  const must = [
    ["duplicate sitemap", /Duplicate sitemap paths/i],
    ["live-not-sitemap", /missing from sitemap/i],
    ["sitemap-not-live", /not live/i],
    ["missing metadata", /Missing metadata fields/i],
    ["duplicate canonical", /Duplicate canonical/i],
    ["canonical mismatch", /Canonical not matching route/i],
    ["broken link", /Broken internal route references/i],
    ["orphan", /Orphan pages/i],
    ["redirect dead", /Redirect destinations not live/i],
    ["redirect chain", /Redirect chains/i],
  ];
  console.log("=== SEO VALIDATOR SELF-TEST (negative) ===");
  let missingCat = 0;
  for (const [label, rx] of must) {
    const hit = res.lines.some((l) => l.startsWith("[FAIL]") && rx.test(l)) || (label === "orphan" && res.lines.some((l) => l.startsWith("[WARN]") && rx.test(l)));
    console.log(`  ${hit ? "PASS" : "MISS"}  ${label}`);
    if (!hit) missingCat++;
  }
  console.log(`self-test FAIL findings=${res.fails} WARN findings=${res.warns}`);
  if (missingCat > 0 || res.fails === 0) {
    console.log("SELF-TEST RESULT: FAIL (validator did not trigger expected detections)");
    process.exit(1);
  }
  console.log("SELF-TEST RESULT: OK (all broken categories detected)");
}

// ---- Main ----
const VERBOSE = process.argv.includes("--verbose");

if (process.argv.includes("--selftest")) {
  const step = VERBOSE ? makeStepLogger() : () => {};
  step("STEP 5 selftest — start");
  selfTest();
  step("STEP 5 selftest — done");
} else {
  const step = VERBOSE ? makeStepLogger() : () => {};
  console.log("=== VALIDATE SEO ===");
  const model = await buildModel(step);
  step("STEP 6 validation — start");
  const res = runChecks(model);
  step("STEP 6 validation — done");
  res.lines.forEach((l) => console.log(l));
  console.log("\n=== SUMMARY ===");
  const s = res.stats;
  console.log(`Route Count: ${s.routes}`);
  console.log(`Sitemap Count: ${s.sitemap}`);
  console.log(`Orphan Count: ${s.orphans}`);
  console.log(`Broken Link Count: ${s.broken}`);
  console.log(`Canonical Count: ${s.canonical}`);
  console.log(`FAIL: ${res.fails}  WARN: ${res.warns}`);
  if (res.fails > 0) {
    console.log("RESULT: FAIL");
    process.exit(1);
  }
  console.log("RESULT: OK");
}
