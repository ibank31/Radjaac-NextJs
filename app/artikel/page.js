import Link from "next/link";
import { routes } from "@/content/routes";
import { articleItems } from "@/content/articles";
import { buildMetadata } from "@/lib/seo";
import WhatsappLink from "@/components/ui/WhatsappLink";
import { typography } from "@/lib/typography";

export const metadata = buildMetadata({
  title: "Artikel Panduan Beli AC | Radja AC",
  description:
    "Pusat artikel Radja AC untuk panduan membeli AC, memilih PK, cek daya listrik, pilihan brand, pengiriman, pemasangan, dan pengadaan banyak unit.",
  path: routes.artikel,
});

const featuredLinks = [
  ["Katalog AC", routes.katalog, "Mulai dari tipe AC rumah, low watt, inverter, dan komersial."],
  ["Kalkulator PK AC", routes.kalkulatorPkAc, "Hitung kebutuhan PK sebelum memilih unit."],
  ["Jual AC Purwokerto", routes.jualAcPurwokerto, "Lanjut ke halaman pembelian utama Radja AC."],
];

const guideStats = [
  ["PK", "Mulai dari ukuran ruangan"],
  ["Daya", "Cek listrik sebelum pilih unit"],
  ["WA", "Kirim brief yang lebih lengkap"],
];

export default function ArtikelPage() {
  const featuredArticle = articleItems[0];
  const otherArticles = articleItems.slice(1);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f4f8fb] text-slate-950">
      <section className="relative overflow-hidden border-b border-slate-200 bg-[linear-gradient(135deg,#061727_0%,#0f3f57_44%,#e9fbff_100%)] px-4 pb-12 pt-12 text-white sm:px-6 lg:px-8 lg:pb-18 lg:pt-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.22),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(37,211,102,0.22),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14">
          <div>
            <p className={`inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 ${typography.eyebrow} text-blue-100 backdrop-blur`}>
              Artikel Radja AC
            </p>
            <h1 className={`mt-6 max-w-4xl ${typography.pageTitle}`}>
              Panduan beli AC yang tidak bikin bingung sebelum chat Radja AC
            </h1>
            <p className="mt-6 max-w-3xl text-sm leading-7 text-blue-50/90 sm:text-base">
              Mulai dari PK, ukuran ruangan, daya listrik, inverter vs low watt, instalasi, sampai tanda kapan AC lama perlu dievaluasi. Baca dulu, lalu kirim brief WhatsApp yang lebih jelas.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <WhatsappLink
                className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-4 font-bold text-slate-950 shadow-[0_18px_50px_rgba(37,211,102,0.24)] transition hover:-translate-y-0.5 hover:bg-[#20BA5A]"
                source="Artikel Index"
                intent="konsultasi setelah membaca panduan beli AC"
              >
                Kirim Ukuran Ruangan
              </WhatsappLink>
              <Link
                href={routes.kalkulatorPkAc}
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-4 font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15"
              >
                Cek Kalkulator PK
              </Link>
              <Link
                href={routes.katalog}
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white px-6 py-4 font-semibold text-slate-950 shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-50"
              >
                Lihat Katalog AC
              </Link>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-white/20 bg-white/12 p-5 shadow-[0_28px_80px_rgba(2,8,23,0.28)] backdrop-blur sm:p-6 lg:p-7">
            <p className={`${typography.eyebrow} text-blue-100`}>
              Mulai dari masalah user
            </p>
            <h2 className={`${typography.sectionTitle} text-white`}>
              Baca singkat, lalu ambil keputusan lebih cepat.
            </h2>
            <div className="mt-5 grid gap-3">
              {guideStats.map(([label, text]) => (
                <div key={label} className="rounded-2xl border border-white/15 bg-white/12 p-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-blue-300 text-sm font-bold text-slate-950">
                      {label}
                    </span>
                    <p className="text-sm font-semibold leading-6 text-blue-50">{text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-2xl bg-white p-4 text-slate-950">
              <p className="text-sm font-bold">Brief WA yang bagus berisi:</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                ukuran ruangan, daya listrik, kota, anggaran awal, jumlah unit, dan butuh pemasangan atau tidak.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {featuredArticle ? (
        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
          <Link
            href={featuredArticle.path}
            className="group grid overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_22px_70px_rgba(15,39,66,0.10)] transition hover:-translate-y-1 hover:shadow-[0_28px_90px_rgba(15,39,66,0.16)] lg:grid-cols-[1fr_0.82fr]"
          >
            <div className="p-6 sm:p-8 lg:p-10">
              <p className={`mb-4 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 ${typography.eyebrow} text-blue-700`}>
                Artikel Utama
              </p>
              <h2 className={`${typography.sectionTitle} text-slate-950`}>
                {featuredArticle.h1}
              </h2>
              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                {featuredArticle.intro}
              </p>
              <span className="mt-7 inline-flex rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition group-hover:bg-blue-700">
                Baca panduan →
              </span>
            </div>
            <div className="flex flex-col justify-between bg-[linear-gradient(160deg,#083449_0%,#0ea5b7_100%)] p-6 text-white sm:p-8 lg:p-10">
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="rounded-full border border-white/20 bg-white/15 px-3 py-1 font-semibold text-blue-50">
                  {featuredArticle.eyebrow}
                </span>
                <span className="rounded-full border border-white/20 bg-white/15 px-3 py-1 text-blue-50">
                  {featuredArticle.readTime}
                </span>
              </div>
              <div className="mt-12 rounded-[1.35rem] border border-white/15 bg-white/12 p-5 backdrop-blur">
                <p className="text-sm font-bold text-blue-50">Tujuan artikel</p>
                <p className="mt-2 text-sm leading-6 text-blue-50/90">
                  Membantu pembeli mengirim data yang tepat sebelum tanya stok, PK, pengiriman, dan pemasangan.
                </p>
              </div>
            </div>
          </Link>
        </section>
      ) : null}

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="mb-8 max-w-3xl">
          <p className={`mb-3 ${typography.eyebrow} text-blue-700`}>Semua Artikel</p>
          <h2 className={`${typography.sectionTitle} text-slate-950`}>Pilih panduan sesuai masalah pembelian AC</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {otherArticles.map((article, index) => (
            <Link
              key={article.slug}
              href={article.path}
              className="group relative overflow-hidden rounded-[1.55rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_22px_60px_rgba(15,39,66,0.12)]"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-emerald-400" />
              <div className="mb-5 flex items-start justify-between gap-3 text-xs text-slate-500">
                <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 font-bold text-blue-700">
                  {article.eyebrow}
                </span>
                <span className="rounded-full border border-slate-200 bg-[#f8fbff] px-3 py-1 font-semibold">
                  {article.readTime}
                </span>
              </div>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className={`${typography.cardTitle} text-slate-950`}>{article.h1}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{article.description}</p>
              <span className="mt-6 inline-flex text-sm font-semibold text-blue-700 transition group-hover:translate-x-1">
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
              className="rounded-[1.45rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(15,39,66,0.10)]"
            >
              <h2 className={`${typography.sectionTitle} text-slate-950`}>{title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-20">
        <div className="rounded-[2rem] border border-[#25D366]/20 bg-[linear-gradient(135deg,rgba(37,211,102,0.14),rgba(34,211,238,0.10))] p-6 text-center shadow-[0_20px_60px_rgba(15,39,66,0.08)] sm:p-10">
          <h2 className={`mx-auto mb-5 max-w-3xl ${typography.sectionTitle} text-slate-950`}>
            Sudah baca? Lanjutkan dengan data ruangan
          </h2>
          <p className="mx-auto mb-7 max-w-2xl text-sm leading-7 text-slate-600">
            Kirim ukuran ruangan, daya listrik, kota, anggaran, dan brand yang diminati. Tim Radja AC cocokkan pilihan dari data itu.
          </p>
          <WhatsappLink
            className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-4 font-bold text-slate-950 shadow-[0_16px_40px_rgba(37,211,102,0.20)] transition hover:-translate-y-0.5 hover:bg-[#20BA5A]"
            source="Artikel Index - Final CTA"
            intent="konsultasi setelah membaca artikel Radja AC"
          >
            Kirim Ukuran Ruangan
          </WhatsappLink>
        </div>
      </section>
    </main>
  );
}
