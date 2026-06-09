import PremiumBrandPage from "@/components/brand/premium/PremiumBrandPage";
import { greePremiumContent } from "@/content/brand-gree";

export default function GreeBrandPage({ item, faqItems, structuredData }) {
  return (
    <PremiumBrandPage
      content={greePremiumContent}
      item={item}
      faqItems={faqItems}
      structuredData={structuredData}
    />
  );
}
