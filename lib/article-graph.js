import { articleItems } from "@/content/articles";

// Article Graph Engine — single source of truth for article relationships.
//
// Pure data layer (no React, no rendering). Given the article dataset, it
// resolves cluster/parent/child/sibling relationships, the per-article
// money-link list, and the data-driven health/quality signals used by the
// article validator. The renderer and validator both read from here so
// relationship logic lives in exactly one place.
//
// Backward-compatible: articles that have not yet been migrated still work —
// helpers degrade gracefully (return empty arrays / null) instead of throwing.

export const VALID_CLUSTERS = [
  "informational",
  "commercial-investigation",
  "capacity-sizing",
  "comparison",
  "brand-evaluation",
  "troubleshooting",
  "b2b",
];

export const VALID_ROLES = ["pillar", "supporting"];

export const VALID_INTENTS = ["informational", "commercial", "transactional"];

function bySlug(slug) {
  if (!slug) return null;
  return articleItems.find((a) => a.slug === slug) || null;
}

// Stable sort by optional `priority` field (higher first). Articles without a
// priority default to 0, so when no priorities are set the original source
// order is preserved (keeps existing helper output unchanged).
function byPriority(list) {
  return [...list]
    .map((a, i) => [a, i])
    .sort((x, y) => (Number(y[0]?.priority) || 0) - (Number(x[0]?.priority) || 0) || x[1] - y[1])
    .map(([a]) => a);
}

// Parent pillar of an article (via parentSlug). Returns null for pillars or
// when the parent cannot be resolved.
export function getParent(article) {
  if (!article || !article.parentSlug) return null;
  return bySlug(article.parentSlug);
}

// Direct children of an article (articles whose parentSlug points to it).
export function getChildren(article) {
  if (!article) return [];
  return byPriority(articleItems.filter((a) => a.parentSlug === article.slug));
}

// Siblings = same cluster, excluding the article itself.
export function getSiblings(article) {
  if (!article || !article.cluster) return [];
  return byPriority(
    articleItems.filter((a) => a.cluster === article.cluster && a.slug !== article.slug),
  );
}

// Related articles for the "Artikel terkait" block — now cluster-aware.
// Priority order: siblings in the same cluster, then parent, then children,
// then a global fallback to top up to `limit`. De-duplicated and self-excluded.
// Always returns up to `limit` items (fills from the global pool), so the
// rendered grid keeps the same shape and never collapses to empty.
export function getRelatedArticles(article, limit = 4) {
  if (!article) return articleItems.slice(0, limit);

  const ordered = [];
  const seen = new Set([article.slug]);
  const add = (candidates) => {
    for (const a of candidates) {
      if (a && !seen.has(a.slug)) {
        seen.add(a.slug);
        ordered.push(a);
      }
    }
  };

  add(getSiblings(article)); // 1. siblings in the same cluster
  add([getParent(article)]); // 2. parent pillar
  add(getChildren(article)); // 3. children
  add(articleItems); // 4. global fallback (source order)

  return ordered.slice(0, limit);
}

// Per-article money links (the "Lanjutkan ke halaman terkait" block).
// Returns the migrated data array, or null so the render layer can fall back to
// its per-cluster constant (which holds the route literals the SEO validator
// scans for). Never invents links here.
export function getMoneyLinks(article) {
  if (article && Array.isArray(article.moneyLinks) && article.moneyLinks.length) {
    return article.moneyLinks;
  }
  return null;
}

// Pillar article for a given cluster (highest-priority pillar, else source order).
export function getClusterPillar(cluster) {
  if (!cluster) return null;
  const pillars = byPriority(articleItems.filter((a) => a.cluster === cluster && a.role === "pillar"));
  return pillars[0] || null;
}

// Best article to feature for a money route — prefer the highest-priority
// pillar that links to it, then any highest-priority article that links to it.
// Returns null if none. Foundation for "related article" blocks on money pages.
export function getFeaturedArticleForRoute(routePath) {
  if (!routePath) return null;
  const linksTo = (a) => Array.isArray(a.moneyLinks) && a.moneyLinks.some((l) => l[1] === routePath);
  const pillars = byPriority(articleItems.filter((a) => a.role === "pillar" && linksTo(a)));
  if (pillars.length) return pillars[0];
  const any = byPriority(articleItems.filter(linksTo));
  return any[0] || null;
}

// ---------------------------------------------------------------------------
// Validator helpers (data-driven signals consumed by validate-articles.mjs)
// ---------------------------------------------------------------------------

// Set of slugs that are the chosen "featured" article for at least one money
// route across the whole dataset. Cached because it is pure over the dataset.
let _featuredSlugsCache = null;
function getFeaturedSlugs() {
  if (_featuredSlugsCache) return _featuredSlugsCache;
  const routePaths = new Set();
  for (const a of articleItems) {
    for (const l of a.moneyLinks || []) if (l && l[1]) routePaths.add(l[1]);
  }
  const slugs = new Set();
  for (const r of routePaths) {
    const f = getFeaturedArticleForRoute(r);
    if (f) slugs.add(f.slug);
  }
  _featuredSlugsCache = slugs;
  return slugs;
}

// Data-driven inbound count for an article from the article graph itself
// (independent of the file-scan SEO validator). Sources:
//   +1 listed on the /artikel index
//   +1 inbound from its parent (parent -> child)
//   +N inbound from each child (child -> parent)
//   +N inbound from each sibling (sibling cross-links)
//   +1 if featured for any money route (featured relationship)
export function getInboundCount(article) {
  if (!article) return 0;
  let inbound = 1; // /artikel index lists every article
  if (getParent(article)) inbound += 1;
  inbound += getChildren(article).length;
  inbound += getSiblings(article).length;
  if (getFeaturedSlugs().has(article.slug)) inbound += 1;
  return inbound;
}

export function getInboundStatus(article) {
  const n = getInboundCount(article);
  if (n <= 0) return "orphan";
  if (n === 1) return "weak";
  return "healthy";
}

// Full inbound report (one row per article).
export function getInboundReport() {
  return articleItems.map((a) => ({
    slug: a.slug,
    cluster: a.cluster,
    inboundCount: getInboundCount(a),
    status: getInboundStatus(a),
  }));
}

// Per-cluster coverage stats (every valid cluster is represented, even empty).
export function getClusterStats() {
  const stats = {};
  for (const c of VALID_CLUSTERS) stats[c] = { articles: 0, pillars: 0, children: 0, supporting: 0 };
  for (const a of articleItems) {
    if (!stats[a.cluster]) stats[a.cluster] = { articles: 0, pillars: 0, children: 0, supporting: 0 };
    const s = stats[a.cluster];
    s.articles += 1;
    if (a.role === "pillar") s.pillars += 1;
    if (a.role === "supporting") s.supporting += 1;
    if (a.parentSlug) s.children += 1;
  }
  return stats;
}

// Hierarchy integrity issues across the dataset. Each entry: { slug, type }.
// Types: self-reference, pillar-with-parent, orphan-child, missing-parent,
// invalid-cluster-parent, circular-reference.
export function getHierarchyIssues() {
  const issues = [];
  const map = new Map(articleItems.map((a) => [a.slug, a]));
  for (const a of articleItems) {
    if (a.parentSlug && a.parentSlug === a.slug) issues.push({ slug: a.slug, type: "self-reference" });
    if (a.role === "pillar" && a.parentSlug) issues.push({ slug: a.slug, type: "pillar-with-parent" });
    if (a.role === "supporting" && !a.parentSlug) issues.push({ slug: a.slug, type: "orphan-child" });
    if (a.parentSlug && a.parentSlug !== a.slug && !map.has(a.parentSlug)) {
      issues.push({ slug: a.slug, type: "missing-parent" });
    }
    if (a.parentSlug && map.has(a.parentSlug)) {
      const p = map.get(a.parentSlug);
      if (p.cluster !== a.cluster) issues.push({ slug: a.slug, type: "invalid-cluster-parent" });
    }
    // cycle detection following the parent chain
    const seen = new Set([a.slug]);
    let cur = a;
    let depth = 0;
    while (cur && cur.parentSlug) {
      if (seen.has(cur.parentSlug)) { issues.push({ slug: a.slug, type: "circular-reference" }); break; }
      seen.add(cur.parentSlug);
      cur = map.get(cur.parentSlug);
      if (++depth > articleItems.length) { issues.push({ slug: a.slug, type: "circular-reference" }); break; }
    }
  }
  return issues;
}

// Per-article quality signals (content depth + metadata completeness).
export function getArticleQuality(article) {
  if (!article) return null;
  const sections = Array.isArray(article.sections) ? article.sections.length : 0;
  const faqs = Array.isArray(article.faqs) ? article.faqs.length : 0;
  const moneyLinks = Array.isArray(article.moneyLinks) ? article.moneyLinks.length : 0;
  const hasCta =
    typeof article.ctaLabel === "string" && article.ctaLabel.trim() !== "" &&
    typeof article.waIntent === "string" && article.waIntent.trim() !== "";
  const metaFields = ["title", "description", "h1", "cluster", "role", "intent"];
  const metadataComplete = metaFields.every(
    (f) => typeof article[f] === "string" && article[f].trim() !== "",
  );
  return { slug: article.slug, sections, faqs, hasCta, moneyLinks, metadataComplete };
}
