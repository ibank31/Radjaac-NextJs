import PremiumBrandPage from "@/components/brand/premium/PremiumBrandPage";
import { samsungPremiumContent } from "@/content/brand-samsung";

export default function SamsungBrandPage({ item, faqItems, structuredData }) {
  return (
    <PremiumBrandPage
      content={samsungPremiumContent}
      item={item}
      faqItems={faqItems}
      structuredData={structuredData}
    />
  );
}
