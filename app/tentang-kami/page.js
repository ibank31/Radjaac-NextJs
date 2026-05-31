import Link from "next/link";
import { routes } from "@/content/routes";
import { siteConfig } from "@/content/site";
import { legalEntityCopy } from "@/content/policies";
import { buildMetadata } from "@/lib/seo";
import { staticPageMetadata } from "@/content/static-pages";
import WhatsappLink from "@/components/ui/WhatsappLink";

export const metadata = buildMetadata(staticPageMetadata.tentangKami);

const values = [
  "Fokus pada penjualan AC original multi-brand, termasuk Proshop Gree RADJA AC.",
  "Admin mengarahkan kebutuhan PK, daya listrik, pilihan brand, stok, pengiriman, dan opsi pemasangan.",
  "Informasi stok, harga, pengiriman, dan pemasangan dikonfirmasi sebelum pembelian.",
  "Pembelian satuan hingga pengadaan ratusan unit dibahas berdasarkan kebutuhan proyek, lokasi, jumlah unit, stok, dan jadwal.",
];

const mainLinks = [
  ["Jual AC", routes.jualAc],
  ["Katalog AC", routes.katalog],
  ["Brand Gree", routes.brandGree],
  ["Brand Daikin", routes.brandDaikin],
  ["Pengadaan AC", routes.pengadaanAc],
  ["Kontak", routes.kontak],
];

export default function TentangKamiPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7fbff] text-slate-950">
      <section className="relative overflow-hidden border-b border-cyan-100 bg-[linear-gradient(180deg,#f8fdff_0%,#eefbff_100%)] px-4 py-12 lg:py-20">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_28%)]" />
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-700">
          Tentang RADJA AC
        </p>
        <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
          Website resmi penjualan AC original multi-brand
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          {siteConfig.name} berbasis di {siteConfig.businessBase}. Fokus utama kami adalah membantu pembeli
          memilih AC yang sesuai untuk rumah, kost, toko, kantor, hotel, dan proyek melalui konsultasi PK,
          cek stok, pengiriman unit, kebutuhan pemasangan, pembelian satuan hingga pengadaan ratusan unit, garansi pemasangan 1 bulan, dan bantuan klaim unit sesuai ketentuan brand.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <WhatsappLink
            className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-4 text-sm font-black text-slate-950 transition hover:bg-[#20BA5A]"
            source="Tentang Kami"
            intent="konsultasi pembelian AC original multi-brand"
          >
            Konsultasi Pembelian AC
          </WhatsappLink>
          <Link
            href={routes.katalog}
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-4 text-sm font-black text-slate-900 shadow-sm transition hover:bg-slate-50"
          >
            Lihat Katalog AC
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <section className="rounded-[1.45rem] border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-black text-slate-950">Cara kerja kami</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
              {values.map((value) => (
                <li key={value} className="rounded-2xl border border-slate-200 bg-[#f7fbff]/45 p-4">
                  {value}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-[1.45rem] border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-black text-slate-950">Legalitas & dokumen brand</h2>
            <p className="mt-5 rounded-2xl border border-slate-200 bg-[#f7fbff]/45 p-4 text-sm leading-6 text-slate-600">
              {legalEntityCopy}
            </p>
            <p className="mt-3 rounded-2xl border border-slate-200 bg-[#f7fbff]/45 p-4 text-sm leading-6 text-slate-600">
              Dokumen brand tertentu mengikuti kerja sama dan ketentuan brand. Informasi detail tetap dikonfirmasi admin.
            </p>
          </section>
        </div>

        <section className="mt-8 rounded-[1.45rem] border border-cyan-100 bg-cyan-50 p-6">
          <h2 className="text-xl font-black text-slate-950">Mulai dari halaman utama</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {mainLinks.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="rounded-full border border-cyan-100 bg-cyan-50 px-4 py-2 text-sm font-bold text-cyan-700 transition hover:bg-cyan-50"
              >
                {label}
              </Link>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
