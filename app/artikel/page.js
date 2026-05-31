import Link from "next/link";
import { routes } from "@/content/routes";
import { articleItems } from "@/content/articles";
import { buildMetadata } from "@/lib/seo";
import WhatsappLink from "@/components/ui/WhatsappLink";

export const metadata = buildMetadata({
  title: "Artikel Panduan Beli AC | RADJA AC",
  description:
    "Pusat artikel RADJA AC untuk panduan membeli AC, memilih PK, cek daya listrik, pilihan brand, pengiriman, pemasangan, dan pengadaan banyak unit.",
  path: routes.artikel,
});

const featuredLinks = [
  ["Katalog AC", routes.katalog, "Mulai dari tipe AC rumah, low watt, inverter, dan komersial."],
  ["Kalkulator PK AC", routes.kalkulatorPkAc, "Hitung kebutuhan PK sebelum memilih unit."],
  ["Jual AC Purwokerto", routes.jualAcPurwokerto, "Lanjut ke halaman pembelian utama RADJA AC."],
];

export default function ArtikelPage() {
  const featuredArticle = articleItems[0];
  const otherArticles = articleItems.slice(1);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7fbff] text-slate-950">
      <section className="relative overflow-hidden border-b border-cyan-100 bg-[linear-gradient(180deg,#f8fdff_0%,#eefbff_100%)] px-4 pb-10 pt-12 sm:px-6 lg:px-8 lg:pb-16 lg:pt-20">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(37,211,102,0.12),transparent_28%)]" />

        <p className="inline-flex rounded-full border border-cyan-100 bg-cyan-50 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-cyan-700">
          Artikel RADJA AC
        </p>
        <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
          Panduan beli AC sebelum chat admin
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
          Baca panduan singkat tentang PK, ukuran ruangan, inverter vs low watt, instalasi, dan tanda kapan AC lama perlu dievaluasi. Artikel ini jadi panduan awal sebelum mengirim brief WhatsApp ke admin.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <WhatsappLink
            className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-4 font-bold text-slate-950 shadow-[0_18px_50px_rgba(37,211,102,0.2)] transition hover:-translate-y-0.5 hover:bg-[#20BA5A]"
            source="Artikel Index"
            intent="konsultasi setelah membaca panduan beli AC"
          >
            Kirim Ukuran Ruangan
          </WhatsappLink>
          <Link
            href={routes.kalkulatorPkAc}
            className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-4 font-semibold text-slate-700 transition hover:border-cyan-200 hover:bg-slate-50"
          >
            Cek Kalkulator PK
          </Link>
          <Link
            href={routes.katalog}
            className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-4 font-semibold text-slate-700 transition hover:border-cyan-200 hover:bg-slate-50"
          >
            Lihat Katalog AC
          </Link>
        </div>
      </section>

      {featuredArticle ? (
        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
          <Link
            href={featuredArticle.path}
            className="group grid gap-8 rounded-[1.7rem] border border-cyan-100 bg-cyan-50 p-6 transition hover:-translate-y-1 hover:border-cyan-200 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10"
          >
            <div>
              <p className="mb-4 inline-flex rounded-full border border-cyan-100 bg-cyan-50 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-cyan-700">
                Artikel Utama
              </p>
              <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                {featuredArticle.h1}
              </h2>
              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                {featuredArticle.intro}
              </p>
            </div>
            <div className="flex flex-col justify-between rounded-[1.45rem] border border-slate-200 bg-[#f7fbff]/45 p-6">
              <div className="flex flex-wrap gap-2 text-xs text-slate-600">
                <span className="rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1 font-semibold text-cyan-700">
                  {featuredArticle.eyebrow}
                </span>
                <span className="rounded-full border border-slate-200 bg-white px-3 py-1">
                  {featuredArticle.readTime}
                </span>
              </div>
              <span className="mt-8 inline-flex text-sm font-black text-cyan-700 group-hover:text-cyan-700">
                Baca panduan →
              </span>
            </div>
          </Link>
        </section>
      ) : null}

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="mb-8 max-w-3xl">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-cyan-700">Semua Artikel</p>
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Pilih panduan sesuai masalah pembelian AC</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {otherArticles.map((article) => (
            <Link
              key={article.slug}
              href={article.path}
              className="group rounded-[1.45rem] border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-cyan-200 hover:bg-slate-50"
            >
              <div className="mb-4 flex flex-wrap gap-2 text-xs text-slate-500">
                <span className="rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1 font-semibold text-cyan-700">
                  {article.eyebrow}
                </span>
                <span className="rounded-full border border-slate-200 bg-white px-3 py-1">
                  {article.readTime}
                </span>
              </div>
              <h3 className="text-xl font-black leading-tight text-slate-950">{article.h1}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{article.description}</p>
              <span className="mt-6 inline-flex text-sm font-black text-cyan-700 group-hover:text-cyan-700">
                Baca artikel →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="grid gap-4 md:grid-cols-3">
          {featuredLinks.map(([title, href, text]) => (
            <Link
              key={href}
              href={href}
              className="rounded-[1.35rem] border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-cyan-200"
            >
              <h2 className="text-xl font-black text-slate-950">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-20">
        <div className="rounded-[1.7rem] border border-[#25D366]/20 bg-[#25D366]/10 p-6 text-center sm:p-10">
          <h2 className="mx-auto mb-5 max-w-3xl text-3xl font-black tracking-tight sm:text-4xl">
            Sudah baca? Lanjutkan dengan data ruangan
          </h2>
          <p className="mx-auto mb-7 max-w-2xl text-sm leading-7 text-slate-600">
            Kirim ukuran ruangan, daya listrik, kota, budget, dan brand yang diminati. Admin RADJA AC cocokkan pilihan dari data itu.
          </p>
          <WhatsappLink
            className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-4 font-bold text-slate-950 transition hover:bg-[#20BA5A]"
            source="Artikel Index - Final CTA"
            intent="konsultasi setelah membaca artikel RADJA AC"
          >
            Kirim Ukuran Ruangan
          </WhatsappLink>
        </div>
      </section>
    </main>
  );
}
