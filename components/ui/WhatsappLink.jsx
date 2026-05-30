import { buildWhatsAppUrl } from "@/lib/whatsapp";

export default function WhatsappLink({
  children = "Chat Admin RADJA AC",
  className = "",
  intent = "konsultasi beli AC",
  source = "Website RADJA AC",
  area = "",
  brand = "",
  category = "",
  pageType = "",
  waLabel = "",
}) {
  const href = buildWhatsAppUrl({
    intent,
    source,
    area,
    brand,
    category,
  });

  const safeWaLabel = waLabel || (typeof children === "string" ? children : "WhatsApp link");

  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      data-wa-source={source}
      data-wa-label={safeWaLabel}
      data-intent-type={intent}
      data-city-target={area}
      data-brand-target={brand}
      data-category-target={category}
      data-page-type={pageType}
    >
      {children}
    </a>
  );
}
