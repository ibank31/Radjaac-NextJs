import { routes } from "@/content/routes";
import { buildMetadata } from "@/lib/seo";
import ProofGalleryClient from "@/components/proof/ProofGalleryClient";

export const metadata = buildMetadata({
  title: "Gallery RADJA AC | Foto Showroom, Stok & Pengiriman",
  description:
    "Lihat foto asli showroom, gudang, stok AC, display produk, pengiriman, material instalasi, dan pemasangan RADJA AC. Dokumentasi aktivitas nyata sebelum konsultasi.",
  path: routes.buktiPengirimanProyek,
  image: "/photos/showroom/showroom-gree-radja-ac-purwokerto-01.webp",
});

export default function BuktiPengirimanProyekPage() {
  return <ProofGalleryClient />;
}
