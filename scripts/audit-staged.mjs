import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

const stagedFiles = [
  "content/area-drafts.js",
  "content/area-child-drafts.js",
  "content/procurement-next.js",
];

const liveSearchFiles = [
  "app",
  "components",
  "lib",
  "content/routes.js",
  "content/areas.js",
  "content/procurement.js",
  "app/sitemap.js",
];

const riskyWords = [
  "termurah",
  "paling murah",
  "ready semua",
  "stok pasti",
  "harga pasti",
];

let review = 0;

function exists(file) {
  return fs.existsSync(path.join(root, file));
}

function read(file) {
  return fs.readFileSync(path.join(root, file), "utf8");
}

function walk(target) {
  const full = path.join(root, target);
  if (!fs.existsSync(full)) return [];

  const stat = fs.statSync(full);
  if (stat.isFile()) return [target];

  const out = [];
  for (const name of fs.readdirSync(full)) {
    if (["node_modules", ".next", ".git"].includes(name)) continue;
    const child = path.join(target, name);
    const childFull = path.join(root, child);
    const childStat = fs.statSync(childFull);
    if (childStat.isDirectory()) out.push(...walk(child));
    else out.push(child);
  }
  return out;
}

function extractSlugs(text) {
  return [...text.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);
}

function countField(text, field) {
  const escaped = field.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return (text.match(new RegExp(escaped, "g")) || []).length;
}

function checkFileExists(file) {
  if (!exists(file)) {
    review++;
    console.log(`[REVIEW] Missing staged file: ${file}`);
    return false;
  }
  console.log(`[OK] Found staged file: ${file}`);
  return true;
}

function checkNotImported() {
  console.log("\n=== IMPORT SAFETY ===");

  const needles = [
    "area-drafts",
    "areaDraftItems",
    "area-child-drafts",
    "areaChildDraftItems",
    "procurement-next",
  ];

  const files = liveSearchFiles.flatMap(walk).filter((file) => /\.(js|jsx|mjs|ts|tsx)$/.test(file));

  for (const file of files) {
    const text = read(file);
    for (const needle of needles) {
      if (text.includes(needle)) {
        review++;
        console.log(`[REVIEW] Staged reference found in live file: ${file} -> ${needle}`);
      }
    }
  }

  console.log("[OK] Import safety scan finished");
}

function checkSlugCollisions() {
  console.log("\n=== SLUG COLLISION CHECK ===");

  const liveAreas = exists("content/areas.js") ? read("content/areas.js") : "";
  const liveRoutes = exists("content/routes.js") ? read("content/routes.js") : "";

  const stagedAreaFiles = [
    "content/area-drafts.js",
    "content/area-child-drafts.js",
  ];

  for (const file of stagedAreaFiles) {
    if (!exists(file)) continue;

    const text = read(file);
    const slugs = extractSlugs(text);

    console.log(`${file}: ${slugs.length} staged area slugs`);

    for (const slug of slugs) {
      const inAreas = liveAreas.includes(`slug: "${slug}"`);
      const inRoutes = liveRoutes.includes(`/${slug}`);

      if (inAreas || inRoutes) {
        review++;
        console.log(`[REVIEW] ${slug} already live or routed. inAreas=${inAreas} inRoutes=${inRoutes}`);
      }
    }
  }

  if (exists("content/procurement-next.js")) {
    const procurementText = read("content/procurement-next.js");
    const slugs = extractSlugs(procurementText);
    console.log(`content/procurement-next.js: ${slugs.length} staged replacement slugs`);
    console.log("[OK] procurement-next slugs may match live routes because it is a staged replacement file");
  }
}

function checkRequiredFields() {
  console.log("\n=== REQUIRED FIELD CHECK ===");

  const areaFactoryFiles = [
    "content/area-drafts.js",
    "content/area-child-drafts.js",
  ];

  for (const file of areaFactoryFiles) {
    if (!exists(file)) continue;

    const text = read(file);
    const slugs = extractSlugs(text);
    const factoryFields = ["slug:", "title:", "description:", "h1:", "intro:", "waIntent:"];

    console.log(`${file}: ${slugs.length} slugs`);

    for (const field of factoryFields) {
      const count = countField(text, field);
      if (count < 1) {
        review++;
        console.log(`[REVIEW] ${file} missing factory/template field ${field}`);
      } else {
        console.log(`[OK] ${file} factory/template field ${field} count=${count}`);
      }
    }
  }

  const procurementCheck = {
    file: "content/procurement-next.js",
    fields: [
      "slug:",
      "title:",
      "description:",
      "h1:",
      "intro:",
      "segmentContext:",
      "coordinationNote:",
      "commonNeeds:",
      "buyingChecks:",
      "suggestedLinks:",
      "waIntent:",
      "waProjectType:",
    ],
  };

  if (exists(procurementCheck.file)) {
    const text = read(procurementCheck.file);
    const slugs = extractSlugs(text);
    console.log(`${procurementCheck.file}: ${slugs.length} slugs`);

    for (const field of procurementCheck.fields) {
      const count = countField(text, field);
      if (count < slugs.length) {
        review++;
        console.log(`[REVIEW] ${procurementCheck.file} field ${field} count=${count}, expected>=${slugs.length}`);
      } else {
        console.log(`[OK] ${procurementCheck.file} field ${field} count=${count}`);
      }
    }
  }
}

function checkRiskyWords() {
  console.log("\n=== RISKY WORDING CHECK ===");

  for (const file of stagedFiles) {
    if (!exists(file)) continue;

    const text = read(file).toLowerCase();

    for (const word of riskyWords) {
      if (text.includes(word)) {
        review++;
        console.log(`[REVIEW] Risky wording in ${file}: ${word}`);
      }
    }
  }

  console.log("[OK] Risky wording scan finished");
}

function checkImagePaths() {
  console.log("\n=== IMAGE PATH CHECK ===");

  const imagePattern = /"\/(photos|images|brand-logos|icons|certificates|og|video-thumbnails|videos)\/[^"]+\.(webp|png|jpg|jpeg|avif|mp4)"/g;

  for (const file of stagedFiles) {
    if (!exists(file)) continue;

    const text = read(file);
    const paths = [...text.matchAll(imagePattern)].map((m) => m[0].slice(1, -1));
    const uniquePaths = [...new Set(paths)];

    console.log(`${file}: ${uniquePaths.length} literal asset paths`);

    for (const assetPath of uniquePaths) {
      const publicPath = path.join(root, "public", assetPath.slice(1));
      if (!fs.existsSync(publicPath)) {
        review++;
        console.log(`[REVIEW] Missing asset referenced in ${file}: ${assetPath}`);
      }
    }
  }
}

console.log("=== RADJA AC STAGED DRAFT AUDIT ===");

for (const file of stagedFiles) {
  checkFileExists(file);
}

checkNotImported();
checkSlugCollisions();
checkRequiredFields();
checkRiskyWords();
checkImagePaths();

console.log("\n=== RESULT ===");
console.log(`Review: ${review}`);

if (review > 0) {
  console.log("Staged audit found items to review.");
  process.exit(1);
}

console.log("OK: staged drafts are safe and not live.");
