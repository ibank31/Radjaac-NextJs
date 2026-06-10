import { siteConfig } from "@/content/site";

export function buildWhatsAppMessage({
  source = "Website Radja AC",
  intent = "Konsultasi beli AC",
  area = "",
  brand = "",
  category = "",
} = {}) {
  const lines = [
    `Halo Radja AC, saya ingin ${intent}.`,
    "",
    `Sumber: ${source}`,
  ];

  if (area) lines.push(`Area: ${area}`);
  if (brand) lines.push(`Brand yang diminati: ${brand}`);
  if (category) lines.push(`Kategori AC: ${category}`);

  lines.push(
    "",
    "Mohon bantu cek:",
    "- Rekomendasi PK",
    "- Stok unit",
    "- Estimasi harga",
    "- Pengiriman",
    "- Opsi pemasangan bila tersedia"
  );

  return lines.join("\n");
}

export function buildWhatsAppUrl(options = {}) {
  const message = buildWhatsAppMessage(options);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
