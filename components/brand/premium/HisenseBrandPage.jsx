import PremiumBrandPage from "@/components/brand/premium/PremiumBrandPage";
import { hisensePremiumContent } from "@/content/brand-hisense";

export default function HisenseBrandPage({ item, faqItems, structuredData }) {
  return (
    <PremiumBrandPage
      content={hisensePremiumContent}
      item={item}
      faqItems={faqItems}
      structuredData={structuredData}
    />
  );
}
