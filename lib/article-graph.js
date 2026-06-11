import { articleItems } from "@/content/articles";

// Article Graph Engine — single source of truth for article relationships.
//
// Pure data layer (no React, no rendering). Given the article dataset, it
// resolves cluster/parent/child/sibling relationships and the per-article
// money-link list. The article renderer and the article validator both read
// from here so relationship logic lives in exactly one place.
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

// Parent pillar of an article (via parentSlug). Returns null for pillars or
// when the parent cannot be resolved.
export function getParent(article) {
  if (!article || !article.parentSlug) return null;
  return bySlug(article.parentSlug);
}

// Direct children of an article (articles whose parentSlug points to it).
export function getChildren(article) {
  if (!article) return [];
  return articleItems.filter((a) => a.parentSlug === article.slug);
}

// Siblings = same cluster, excluding the article itself.
export function getSiblings(article) {
  if (!article || !article.cluster) return [];
  return articleItems.filter(
    (a) => a.cluster === article.cluster && a.slug !== article.slug,
  );
}

// Related articles for the "Artikel terkait" block.
// Legacy behavior preserved verbatim (source order, exclude self, first N) so
// the rendered output stays identical to the pre-engine renderer. Cluster-aware
// ordering is intentionally a later phase.
export function getRelatedArticles(article, limit = 4) {
  if (!article) return articleItems.slice(0, limit);
  return articleItems
    .filter((a) => a.slug !== article.slug)
    .slice(0, limit);
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

// Pillar article for a given cluster (first article with role "pillar").
export function getClusterPillar(cluster) {
  if (!cluster) return null;
  return articleItems.find((a) => a.cluster === cluster && a.role === "pillar") || null;
}

// Best article to feature for a money route — preferring a pillar, then any
// article that links to that route via its money links. Returns null if none.
// Foundation helper for future "related article" blocks on money pages.
export function getFeaturedArticleForRoute(routePath) {
  if (!routePath) return null;
  const linksTo = (a) =>
    Array.isArray(a.moneyLinks) && a.moneyLinks.some((l) => l[1] === routePath);
  return (
    articleItems.find((a) => a.role === "pillar" && linksTo(a)) ||
    articleItems.find(linksTo) ||
    null
  );
}
