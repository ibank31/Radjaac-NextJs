import Link from "next/link";
import { routes } from "@/content/routes";
import { siteConfig } from "@/content/site";
import { legalEntityCopy } from "@/content/policies";
import { buildMetadata } from "@/lib/seo";
import WhatsappLink from "@/components/ui/WhatsappLink";

export const metadata = buildMetadata({
  title: "Tentang RADJA AC | Dealer AC Original Multi-Brand",
  description:
    "Tentang RADJA AC, website resmi penjualan AC original multi-brand berbasis di Pamijen, Sokaraja, Banyumas. Fokus pada konsultasi PK, cek stok, pengiriman, opsi pemasangan, dan pengadaan banyak unit.",
  path: routes.tentangKami,
});

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
    <main className="bg-white">
      <section className="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-slate-500">
          Tentang RADJA AC
        </p>
        <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
          Website resmi penjualan AC original multi-brand
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          {siteConfig.name} berbasis di {siteConfig.businessBase}. Fokus utama kami adalah membantu pembeli
          memilih AC yang sesuai untuk rumah, kost, toko, kantor, hotel, dan proyek melalui konsultasi PK,
          cek stok, pengiriman unit, opsi pemasangan, dan pengadaan banyak unit.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <WhatsappLink
            className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-4 text-sm font-black text-white transition hover:bg-slate-800"
            source="Tentang Kami"
            intent="konsultasi pembelian AC original multi-brand"
          >
            Chat Admin RADJA AC
          </WhatsappLink>
          <Link
            href={routes.katalog}
            className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-4 text-sm font-bold text-slate-950 transition hover:bg-slate-50"
          >
            Lihat Katalog AC
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <section className="rounded-3xl border border-slate-200 p-6">
            <h2 className="text-xl font-black text-slate-950">Cara kerja kami</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
              {values.map((value) => (
                <li key={value} className="rounded-2xl bg-slate-50 p-4">
                  {value}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-3xl border border-slate-200 p-6">
            <h2 className="text-xl font-black text-slate-950">Legalitas & dokumen brand</h2>
            <p className="mt-5 rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-600">
              {legalEntityCopy}
            </p>
            <p className="mt-3 rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-600">
              Dokumen brand tertentu dapat berbeda sesuai kerja sama dan ketentuan brand. Informasi detail tetap dikonfirmasi admin.
            </p>
          </section>
        </div>

        <section className="mt-8 rounded-3xl border border-slate-200 p-6">
          <h2 className="text-xl font-black text-slate-950">Mulai dari halaman utama</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {mainLinks.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-200"
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
