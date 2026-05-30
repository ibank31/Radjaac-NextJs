import Link from "next/link";
import { routes } from "@/content/routes";
import { siteConfig } from "@/content/site";
import { legalEntityCopy } from "@/content/policies";
import { buildMetadata } from "@/lib/seo";
import { staticPageMetadata } from "@/content/static-pages";
import WhatsappLink from "@/components/ui/WhatsappLink";

export const metadata = buildMetadata(staticPageMetadata.tentangKami);

const values = [
  "Fokus pada penjualan AC original multi-brand.",
  "Admin membantu cek kebutuhan PK, daya listrik, pilihan brand, stok, pengiriman, dan opsi pemasangan.",
  "Informasi stok, harga, pengiriman, dan pemasangan dikonfirmasi sebelum pembelian.",
  "Pengadaan banyak unit bisa dibicarakan sesuai kebutuhan proyek, lokasi, jumlah unit, dan jadwal.",
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
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <section className="relative mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_28%)]" />
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
          Tentang RADJA AC
        </p>
        <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight text-white md:text-5xl">
          Website resmi penjualan AC original multi-brand
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
          {siteConfig.name} berbasis di {siteConfig.businessBase}. Fokus utama kami adalah membantu pembeli
          memilih AC yang sesuai untuk rumah, kost, toko, kantor, hotel, dan proyek melalui konsultasi PK,
          cek stok, pengiriman unit, opsi pemasangan, dan pengadaan banyak unit.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <WhatsappLink
            className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-4 text-sm font-black text-slate-950 transition hover:bg-[#20BA5A]"
            source="Tentang Kami"
            intent="konsultasi pembelian AC original multi-brand"
          >
            Chat Admin RADJA AC
          </WhatsappLink>
          <Link
            href={routes.katalog}
            className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-4 text-sm font-bold text-white transition hover:bg-white/[0.05]"
          >
            Lihat Katalog AC
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <h2 className="text-xl font-black text-white">Cara kerja kami</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-white/65">
              {values.map((value) => (
                <li key={value} className="rounded-2xl border border-white/10 bg-slate-950/45 p-4">
                  {value}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <h2 className="text-xl font-black text-white">Legalitas & dokumen brand</h2>
            <p className="mt-5 rounded-2xl border border-white/10 bg-slate-950/45 p-4 text-sm leading-6 text-white/65">
              {legalEntityCopy}
            </p>
            <p className="mt-3 rounded-2xl border border-white/10 bg-slate-950/45 p-4 text-sm leading-6 text-white/65">
              Dokumen brand tertentu dapat berbeda sesuai kerja sama dan ketentuan brand. Informasi detail tetap dikonfirmasi admin.
            </p>
          </section>
        </div>

        <section className="mt-8 rounded-3xl border border-cyan-300/15 bg-cyan-300/[0.055] p-6">
          <h2 className="text-xl font-black text-white">Mulai dari halaman utama</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {mainLinks.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="rounded-full border border-cyan-300/15 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-200 transition hover:bg-cyan-300/15"
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
