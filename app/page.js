import Link from "next/link";
import { routes } from "@/content/routes";
import { buildMetadata } from "@/lib/seo";
import WhatsappLink from "@/components/ui/WhatsappLink";

export const metadata = buildMetadata({
  title: "RADJA AC | Jual AC Original Multi-Brand & Pengadaan",
  description:
    "RADJA AC membantu pembelian AC original multi-brand untuk rumah, usaha, kantor, hotel, dan proyek. Konsultasi PK, cek stok, pengiriman unit, opsi pemasangan, dan pengadaan banyak unit.",
  path: routes.home,
});

const primaryLinks = [
  {
    label: "Jual AC",
    href: routes.jualAc,
    description: "Mulai dari kebutuhan rumah, usaha, kantor, dan area prioritas.",
  },
  {
    label: "Katalog AC",
    href: routes.katalog,
    description: "Bandingkan kebutuhan AC 1/2 PK, split rumah, inverter, low watt, dan komersial.",
  },
  {
    label: "Pengadaan AC",
    href: routes.pengadaanAc,
    description: "Untuk kost, hotel, kantor, kontraktor, developer, dan pembelian banyak unit.",
  },
  {
    label: "Kontak",
    href: routes.kontak,
    description: "Chat admin untuk cek stok, rekomendasi PK, pengiriman, dan opsi pemasangan.",
  },
];

const trustPoints = [
  "Berbasis di Pamijen, Sokaraja, Banyumas.",
  "Fokus pada penjualan AC original multi-brand.",
  "Admin bantu cek kebutuhan PK, stok unit, area pengiriman, dan opsi pemasangan.",
  "Melayani kebutuhan rumah, usaha, kantor, hotel, proyek, dan pembelian banyak unit.",
];

export default function Home() {
  return (
    <main>
      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-slate-400">
              Website Resmi RADJA AC
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
              Jual AC original multi-brand untuk rumah, usaha, kantor, hotel, dan proyek.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              RADJA AC membantu pembelian AC original multi-brand. Admin bantu cek kebutuhan PK,
              stok unit, area pengiriman, opsi pemasangan, dan pengadaan banyak unit sebelum Anda deal.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsappLink
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-4 text-sm font-black text-slate-950 transition hover:bg-slate-200"
                source="Homepage Hero"
                intent="konsultasi pembelian AC original multi-brand"
              >
                Chat Admin RADJA AC
              </WhatsappLink>
              <Link
                href={routes.katalog}
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-4 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Lihat Katalog AC
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">
              Fokus Layanan
            </p>
            <ul className="mt-5 space-y-4 text-sm leading-6 text-slate-200">
              {trustPoints.map((point) => (
                <li key={point} className="rounded-2xl bg-white/[0.06] p-4">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
              Mulai dari kebutuhan Anda
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
              Pilih jalur yang paling sesuai sebelum chat admin.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Struktur website baru RADJA AC dibuat bertahap supaya setiap halaman punya fungsi jelas:
              penjualan AC, katalog, pengadaan, area, brand, dan konsultasi WhatsApp.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {primaryLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-lg font-black text-slate-950">{item.label}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
