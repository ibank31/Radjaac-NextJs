import PremiumBrandPage from "@/components/brand/premium/PremiumBrandPage";
import { sharpPremiumContent } from "@/content/brand-sharp";

export default function SharpBrandPage({ item, faqItems, structuredData }) {
  return (
    <PremiumBrandPage
      content={sharpPremiumContent}
      item={item}
      faqItems={faqItems}
      structuredData={structuredData}
    />
  );
}
