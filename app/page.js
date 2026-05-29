import { routes } from "@/content/routes";
import { buildMetadata } from "@/lib/seo";
import HomepageLegacyParity from "@/components/home/HomepageLegacyParity";

export const metadata = buildMetadata({
  title: "RADJA AC | Jual AC Original Multi-Brand Purwokerto & Banyumas",
  description:
    "RADJA AC membantu pembelian AC original multi-brand untuk rumah, kost, toko, kantor, hotel, dan proyek. Konsultasi PK, cek stok, pengiriman, dan opsi pemasangan di Purwokerto, Banyumas, Sokaraja, dan area sekitar.",
  path: routes.home,
  image: "/photos/showroom/showroom-multibrand-radja-ac-purwokerto-01.webp",
});

export default function HomePage() {
  return <HomepageLegacyParity />;
}
