import PremiumBrandPage from "@/components/brand/premium/PremiumBrandPage";
import { sansuiPremiumContent } from "@/content/brand-sansui";

export default function SansuiBrandPage({ item, faqItems, structuredData }) {
  return (
    <PremiumBrandPage
      content={sansuiPremiumContent}
      item={item}
      faqItems={faqItems}
      structuredData={structuredData}
    />
  );
}
