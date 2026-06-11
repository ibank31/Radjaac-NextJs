import { banyumasAreas } from "@/content/areas/banyumas";
import { kebumenAreas } from "@/content/areas/kebumen";
import { cilacapAreas } from "@/content/areas/cilacap";
import { purbalinggaAreas } from "@/content/areas/purbalingga";
import { banjarnegaraAreas } from "@/content/areas/banjarnegara";
import { tegalAreas } from "@/content/areas/tegal";
import { regionalAreas } from "@/content/areas/regional";
import { areaClusterMap } from "@/content/areas/cluster-map";

export { areaClusterMap };

// Aggregated area dataset. Items are grouped by kabupaten/region across the
// region modules. Page output does not depend on array order: generateStaticParams
// only needs the set of slugs, and every item defines its own nearbyAreaLinks and
// relatedLinks (so the order-based fallback in app/[slug]/page.js never runs).
export const areaItems = [
  ...banyumasAreas,
  ...kebumenAreas,
  ...cilacapAreas,
  ...purbalinggaAreas,
  ...banjarnegaraAreas,
  ...tegalAreas,
  ...regionalAreas,
];

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
    relatedLinks: item.relatedLinks ?? item.relatedLinksOverride,
  };
}
