import { buildWhatsAppUrl } from "@/lib/whatsapp";

export default function WhatsappLink({
  children = "Chat Admin RADJA AC",
  className = "",
  intent = "konsultasi beli AC",
  source = "Website RADJA AC",
  area = "",
  brand = "",
  category = "",
}) {
  const href = buildWhatsAppUrl({
    intent,
    source,
    area,
    brand,
    category,
  });

  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
