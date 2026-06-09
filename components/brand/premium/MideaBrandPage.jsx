import PremiumBrandPage from "@/components/brand/premium/PremiumBrandPage";
import { mideaPremiumContent } from "@/content/brand-midea";

export default function MideaBrandPage({ item, faqItems, structuredData }) {
  return (
    <PremiumBrandPage
      content={mideaPremiumContent}
      item={item}
      faqItems={faqItems}
      structuredData={structuredData}
    />
  );
}
