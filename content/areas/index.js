import { banyumasAreas } from "@/content/areas/banyumas";
import { kebumenAreas } from "@/content/areas/kebumen";
import { cilacapAreas } from "@/content/areas/cilacap";
import { purbalinggaAreas } from "@/content/areas/purbalingga";
import { banjarnegaraAreas } from "@/content/areas/banjarnegara";
import { tegalAreas } from "@/content/areas/tegal";
import { regionalAreas } from "@/content/areas/regional";
import { areaClusterMap } from "@/content/areas/cluster-map";

export { areaClusterMap };

// Slug kecamatan yang dikonsolidasikan (301) ke halaman induk karena tidak punya
// demand pencarian untuk namanya sendiri (analisis GSC, 6 Jul 2026). Dihentikan
// dari generasi statis DI SINI supaya Cloudflare Pages tidak lagi meng-emit HTML
// di path tsb — kalau HTML statisnya masih ada, aturan 301 di public/_redirects
// bisa kalah oleh aset statis. WAJIB sinkron dengan public/_redirects dan
// `legacyRedirects` di next.config.mjs.
export const foldedAreaSlugs = new Set([
  // Ring Banyumas -> /jual-ac-purwokerto
  "jual-ac-cilongok",
  "jual-ac-wangon",
  "jual-ac-sokaraja",
  "jual-ac-sumbang",
  "jual-ac-rawalo",
  "jual-ac-kembaran",
  "jual-ac-karanglewas",
  "jual-ac-patikraja",
  "jual-ac-ajibarang",
  "jual-ac-baturraden",
  "jual-ac-kedungbanteng",
  "jual-ac-kalibagor",
  // Ring Kebumen -> /jual-ac-kebumen
  "jual-ac-gombong",
  "jual-ac-karanganyar-kebumen",
  "jual-ac-kutowinangun",
]);

const foldedAreaPaths = new Set([...foldedAreaSlugs].map((slug) => `/${slug}`));

// Buang internal link yang menunjuk ke slug yang sudah dilipat, supaya tidak ada
// link internal yang mengarah ke URL ber-301 (Google lebih suka link langsung).
function stripFoldedLinks(links) {
  if (!Array.isArray(links)) return links;
  return links.filter((link) => {
    const path = Array.isArray(link) ? link[1] : link?.path ?? link?.href;
    if (typeof path !== "string") return true;
    return !foldedAreaPaths.has(path.replace(/\/+$/, ""));
  });
}

// Aggregated area dataset. Items are grouped by kabupaten/region across the
// region modules. Page output does not depend on array order: generateStaticParams
// only needs the set of slugs, and every item defines its own nearbyAreaLinks and
// relatedLinks (so the order-based fallback in app/[slug]/page.js never runs).
const allAreaItems = [
  ...banyumasAreas,
  ...kebumenAreas,
  ...cilacapAreas,
  ...purbalinggaAreas,
  ...banjarnegaraAreas,
  ...tegalAreas,
  ...regionalAreas,
];

export const areaItems = allAreaItems.filter(
  (item) => !foldedAreaSlugs.has(item.slug),
);

export function getAreaItem(slug) {
  const item = areaItems.find((entry) => entry.slug === slug);
  if (!item) return undefined;

  // Normalize the item: resolve clusterType and activate any dormant
  // *Override fields so child-area content is no longer ignored.
  return {
    ...item,
    clusterType: item.clusterType ?? areaClusterMap[item.slug] ?? "trade",
    keywordVariants: item.keywordVariants ?? item.keywordVariantsOverride,
    trustBullets: item.trustBullets ?? item.trustBulletsOverride,
    localFaq: item.localFaq ?? item.localFaqOverride,
    relatedLinks: stripFoldedLinks(
      item.relatedLinks ?? item.relatedLinksOverride,
    ),
    nearbyAreaLinks: stripFoldedLinks(item.nearbyAreaLinks),
  };
}
