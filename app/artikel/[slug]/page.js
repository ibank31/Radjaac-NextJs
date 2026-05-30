import Link from "next/link";
import { notFound } from "next/navigation";
import { routes } from "@/content/routes";
import { articleItems, getArticleItem } from "@/content/articles";
import { buildMetadata } from "@/lib/seo";
import WhatsappLink from "@/components/ui/WhatsappLink";

export const dynamicParams = false;

const defaultMoneyLinks = [
  ["Jual AC Purwokerto", routes.jualAcPurwokerto, "Pusat konsultasi beli AC, cek brand, stok, harga, dan rekomendasi PK."],
  ["Kalkulator PK AC", routes.kalkulatorPkAc, "Cek estimasi kebutuhan PK sebelum memilih unit dan paket pemasangan."],
];

const moneyLinksBySlug = {
  "panduan-beli-ac-baru": [
    ["Katalog AC", routes.katalog, "Lihat kategori AC rumah, low watt, inverter, dan kebutuhan komersial."],
    ["Kalkulator PK AC", routes.kalkulatorPkAc, "Cek estimasi kebutuhan PK sebelum memilih unit."],
  ],
  "ac-1-pk-untuk-ruangan-berapa": [
    ["Kalkulator PK AC", routes.kalkulatorPkAc, "Hitung estimasi kebutuhan PK sebelum memilih 3/4 PK, 1 PK, atau 1.5 PK."],
    ["AC Split Rumah", routes.katalogAcSplitRumah, "Lihat pilihan AC untuk kamar, ruang keluarga, kos, dan toko kecil."],
  ],
  "ac-inverter-vs-low-watt": [
    ["AC Inverter", routes.katalogAcInverter, "Cek pilihan AC inverter untuk pemakaian rutin dan suhu stabil."],
    ["AC Low Watt", routes.katalogAcLowWatt, "Cek pilihan AC untuk rumah dengan daya listrik terbatas."],
  ],
  "cara-memilih-ac-untuk-kamar-3x4": [
    ["Kalkulator PK AC", routes.kalkulatorPkAc, "Cek apakah kamar 3x4 cukup 1/2 PK, 3/4 PK, atau perlu kapasitas lain."],
    ["AC Split Rumah", routes.katalogAcSplitRumah, "Panduan pilihan AC untuk kamar tidur, ruang keluarga, kos, dan rumah tinggal."],
  ],
  "panduan-instalasi-ac-baru": [
    ["Pengiriman & Pemasangan", routes.pengirimanPemasangan, "Lihat informasi pemasangan AC baru yang rapi dan sesuai kondisi lokasi."],
    ["AC 1/2 PK", routes.katalogAcSetengahPk, "Pahami harga unit vs paket pasang sebelum memilih AC kamar atau kos."],
  ],
  "ac-kurang-dingin-belum-tentu-freon-habis": [
    ["Jual AC Purwokerto", routes.jualAcPurwokerto, "Konsultasi AC baru kalau unit lama sudah tidak efisien."],
    ["Kalkulator PK AC", routes.kalkulatorPkAc, "Cek apakah masalah kurang dingin bisa berawal dari kapasitas PK yang tidak sesuai."],
  ],
};

function pickRelatedArticles(current) {
  return articleItems
    .filter((article) => article.slug !== current.slug)
    .slice(0, 4);
}

export function generateStaticParams() {
  return articleItems.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = getArticleItem(slug);

  if (!item) {
    return {};
  }

  return buildMetadata({
    title: item.title,
    description: item.description,
    path: item.path,
  });
}

export default async function ArticleDetailPage({ params }) {
  const { slug } = await params;
  const item = getArticleItem(slug);

  if (!item) {
    notFound();
  }

  const relatedArticles = pickRelatedArticles(item);
  const moneyLinks = moneyLinksBySlug[item.slug] || item.relatedLinks?.map(([label, href]) => [label, href, "Buka halaman terkait untuk lanjut dari artikel ke kebutuhan pembelian."]) || defaultMoneyLinks;
  const keywords = item.keywords?.length ? item.keywords : [item.eyebrow, "AC", "RADJA AC"];

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7fbff] text-slate-950">
      <article className="mx-auto max-w-4xl px-4 pb-12 pt-16 sm:px-6 lg:px-8 lg:pb-16 lg:pt-24">
        <Link href={routes.artikel} className="mb-7 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 transition hover:text-cyan-700">
          ← Kembali ke artikel
        </Link>

        <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-slate-500">
          <span className="rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1 font-semibold text-cyan-700">
            {item.eyebrow}
          </span>
          <span className="rounded-full border border-slate-200 bg-white px-3 py-1">
            {item.readTime}
          </span>
          <span className="rounded-full border border-slate-200 bg-white px-3 py-1">
            Update terbaru
          </span>
        </div>

        <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          {item.h1}
        </h1>

        <p className="mb-8 text-lg leading-8 text-slate-600">
          {item.intro}
        </p>

        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <WhatsappLink
            className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-4 font-bold text-slate-950 transition hover:bg-[#20BA5A]"
            source={`Artikel ${item.slug} - Hero`}
            intent={item.waIntent}
          >
            {item.ctaLabel}
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

        <div className="mb-10 flex flex-wrap gap-2">
          {keywords.map((keyword) => (
            <span key={keyword} className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-600">
              {keyword}
            </span>
          ))}
        </div>

        <div className="space-y-10">
          {item.sections.map((section) => (
            <section key={section.heading} className="rounded-[1.55rem] border border-slate-200 bg-white p-6 sm:p-8">
              <div className="mb-4 flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-600 text-xs font-black text-white">✓</span>
                <h2 className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                  {section.heading}
                </h2>
              </div>

              <div className="space-y-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-10 rounded-[1.55rem] border border-cyan-100 bg-cyan-50 p-6 sm:p-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700">
            Lanjutkan ke halaman terkait
          </p>
          <h2 className="mb-5 text-2xl font-black tracking-tight sm:text-3xl">
            Pilih halaman yang paling sesuai dengan kebutuhan Anda
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {moneyLinks.map(([label, href, description]) => (
              <Link
                key={href}
                href={href}
                className="group rounded-[1.35rem] border border-slate-200 bg-[#f7fbff]/45 p-5 transition hover:-translate-y-1 hover:border-cyan-200 hover:bg-slate-50"
              >
                <h3 className="mb-2 text-lg font-black text-slate-950">{label}</h3>
                <p className="mb-4 text-sm leading-6 text-slate-600">{description}</p>
                <span className="inline-flex items-center gap-2 text-sm font-bold text-cyan-700 group-hover:text-cyan-700">
                  Buka halaman →
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-[1.7rem] border border-[#25D366]/20 bg-[#25D366]/10 p-6 text-center sm:p-8">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#25D366] text-slate-950">
            WA
          </div>
          <h2 className="mb-3 text-2xl font-black tracking-tight sm:text-3xl">
            Masih bingung pilih AC?
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-sm leading-7 text-slate-600">
            Chat RADJA AC untuk cek stok, tanya rekomendasi PK, dan pilih tipe AC yang sesuai kebutuhan ruangan.
          </p>
          <WhatsappLink
            className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-4 font-bold text-slate-950 transition hover:bg-[#20BA5A]"
            source={`Artikel ${item.slug} - Bottom CTA`}
            intent={item.waIntent}
          >
            {item.ctaLabel}
          </WhatsappLink>
        </section>

        {relatedArticles.length > 0 ? (
          <section className="mt-12">
            <h2 className="mb-5 text-2xl font-black tracking-tight">Artikel terkait</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {relatedArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={article.path}
                  className="rounded-[1.35rem] border border-slate-200 bg-white p-5 transition hover:border-cyan-200 hover:bg-slate-50"
                >
                  <p className="mb-2 text-xs font-semibold text-cyan-700">{article.eyebrow}</p>
                  <h3 className="mb-2 text-lg font-black text-slate-950">{article.h1}</h3>
                  <p className="text-sm leading-6 text-slate-500">{article.description}</p>
                </Link>
              ))}
            </div>
          </section>
        ) : null}
      </article>
    </main>
  );
}
