import Link from "next/link";
import { routes } from "@/content/routes";
import { buildMetadata } from "@/lib/seo";
import WhatsappLink from "@/components/ui/WhatsappLink";

export const metadata = buildMetadata({
  title: "Artikel Panduan Beli AC | RADJA AC",
  description:
    "Pusat artikel RADJA AC untuk panduan membeli AC, memilih PK, cek daya listrik, pilihan brand, pengiriman, pemasangan, dan pengadaan banyak unit.",
  path: routes.artikel,
});

const articleTopics = [
  {
    title: "Panduan memilih AC dari ukuran ruangan",
    description: "Mulai dari ukuran ruangan, kebutuhan PK, daya listrik, dan pola pemakaian.",
    href: routes.katalog,
  },
  {
    title: "Memilih brand AC sesuai kebutuhan",
    description: "Bandingkan brand berdasarkan stok, budget, tipe unit, dan kebutuhan ruangan.",
    href: routes.brandGree,
  },
  {
    title: "Pengadaan AC banyak unit",
    description: "Untuk kost, apartemen, hotel, guest house, kontraktor, developer, dan proyek.",
    href: routes.pengadaanAc,
  },
];

export default function ArtikelPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-slate-500">
          Artikel RADJA AC
        </p>
        <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
          Panduan beli AC sebelum chat admin
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Halaman artikel ini disiapkan sebagai pusat panduan pembelian AC. Untuk tahap awal, artikel detail belum
          dimigrasikan; gunakan link panduan utama di bawah untuk mulai dari katalog, brand, atau pengadaan.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <WhatsappLink
            className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-4 text-sm font-black text-white transition hover:bg-slate-800"
            source="Artikel"
            intent="konsultasi setelah membaca panduan beli AC"
          >
            Chat Admin RADJA AC
          </WhatsappLink>
          <Link
            href={routes.katalog}
            className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-4 text-sm font-bold text-slate-950 transition hover:bg-slate-50"
          >
            Mulai dari Katalog
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {articleTopics.map((topic) => (
            <Link
              key={topic.title}
              href={topic.href}
              className="rounded-3xl border border-slate-200 p-6 transition hover:bg-slate-50"
            >
              <h2 className="text-xl font-black text-slate-950">{topic.title}</h2>
              <p className="mt-4 text-sm leading-6 text-slate-600">{topic.description}</p>
            </Link>
          ))}
        </div>

        <section className="mt-12 rounded-3xl bg-slate-950 p-6 text-white">
          <h2 className="text-2xl font-black">Butuh rekomendasi cepat?</h2>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300">
            Kirim ukuran ruangan, daya listrik, kota, budget, dan brand yang diminati. Admin RADJA AC bantu arahkan pilihan sebelum Anda deal.
          </p>
        </section>
      </section>
    </main>
  );
}
