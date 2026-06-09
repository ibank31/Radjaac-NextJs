import Link from "next/link";
import { notFound } from "next/navigation";
import { routes } from "@/content/routes";
import { articleItems, getArticleItem } from "@/content/articles";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/content/site";
import { absoluteSiteUrl } from "@/lib/url";
import JsonLd from "@/components/seo/JsonLd";
import WhatsappLink from "@/components/ui/WhatsappLink";

export const dynamicParams = false;

const defaultMoneyLinks = [
  ["Jual AC Purwokerto", routes.jualAcPurwokerto, "Pusat konsultasi beli AC, cek brand, stok, harga, dan rekomendasi PK."],
  ["Kalkulator PK AC", routes.kalkulatorPkAc, "Cek estimasi kebutuhan PK sebelum memilih unit dan paket pemasangan."],
];

const moneyLinksBySlug = {
  "panduan-beli-ac-baru": [
    ["Jual AC", routes.jualAc, "Mulai dari halaman penjualan utama untuk cek AC original multi-brand."],
    ["Katalog AC", routes.katalog, "Lihat kategori AC rumah, low watt, inverter, dan kebutuhan komersial."],
    ["Kalkulator PK AC", routes.kalkulatorPkAc, "Cek estimasi kebutuhan PK sebelum memilih unit."],
    ["Pengiriman & Pemasangan", routes.pengirimanPemasangan, "Pahami kebutuhan lokasi, material, garansi pasang, dan jadwal sebelum order."],
  ],
  "ac-1-pk-untuk-ruangan-berapa": [
    ["Kalkulator PK AC", routes.kalkulatorPkAc, "Hitung estimasi kebutuhan PK sebelum memilih 3/4 PK, 1 PK, atau 1.5 PK."],
    ["AC 1 PK", routes.katalogAcSatuPk, "Lihat pilihan AC 1 PK untuk kamar besar, ruang kerja, ruang tamu kecil, atau toko kecil."],
    ["AC 1.5 PK", routes.katalogAcSatuSetengahPk, "Bandingkan jika ruangan panas, lebih besar, atau sering dipakai banyak orang."],
    ["Pengiriman & Pemasangan", routes.pengirimanPemasangan, "Cek kebutuhan lokasi, material, garansi pasang, dan jadwal sebelum order."],
  ],
  "ac-inverter-vs-low-watt": [
    ["AC Inverter", routes.katalogAcInverter, "Cek pilihan AC inverter untuk pemakaian rutin dan suhu stabil."],
    ["AC Low Watt", routes.katalogAcLowWatt, "Cek pilihan AC untuk rumah dengan daya listrik terbatas."],
    ["Kalkulator PK AC", routes.kalkulatorPkAc, "Hitung estimasi PK agar pilihan tipe tidak salah kapasitas."],
    ["Pengiriman & Pemasangan", routes.pengirimanPemasangan, "Cek kebutuhan lokasi, material, garansi pasang, dan jadwal sebelum order."],
  ],
  "cara-memilih-ac-untuk-kamar-3x4": [
    ["Kalkulator PK AC", routes.kalkulatorPkAc, "Cek apakah kamar 3x4 cukup 1/2 PK, 3/4 PK, atau perlu kapasitas lain."],
    ["AC Split Rumah", routes.katalogAcSplitRumah, "Panduan pilihan AC untuk kamar tidur, ruang keluarga, kos, dan rumah tinggal."],
  ],
  "panduan-instalasi-ac-baru": [
    ["Pengiriman & Pemasangan", routes.pengirimanPemasangan, "Lihat informasi pemasangan AC baru yang rapi dan berdasarkan kondisi lokasi."],
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

  const articleUrl = absoluteSiteUrl(item.path);
  const structuredData = [
    breadcrumbSchema([
      ["Beranda", routes.home],
      ["Artikel", routes.artikel],
      [item.h1, item.path],
    ]),
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `${articleUrl}#article`,
      mainEntityOfPage: articleUrl,
      url: articleUrl,
      headline: item.h1,
      description: item.description,
      inLanguage: siteConfig.language,
      articleSection: item.eyebrow,
      image: [absoluteSiteUrl("/og/radjaac-showroom-og.webp")],
      ...(item.keywords?.length ? { keywords: item.keywords.join(", ") } : {}),
      author: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.baseUrl,
      },
      publisher: {
        "@id": `${siteConfig.baseUrl}/#organization`,
      },
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#f4f8fb] text-slate-950">
      <JsonLd data={structuredData} />
      <article>
        <section className="relative overflow-hidden border-b border-slate-200 bg-[linear-gradient(135deg,#061727_0%,#0f3f57_48%,#e9fbff_100%)] px-4 pb-12 pt-12 text-white sm:px-6 lg:px-8 lg:pb-16 lg:pt-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.22),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(37,211,102,0.20),transparent_28%)]" />
          <div className="relative mx-auto max-w-5xl">
            <Link href={routes.artikel} className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-black text-blue-50 backdrop-blur transition hover:bg-white/15">
              ← Kembali ke artikel
            </Link>

            <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-blue-50">
              <span className="rounded-full border border-white/15 bg-white/12 px-3 py-1 font-bold backdrop-blur">
                {item.eyebrow}
              </span>
              <span className="rounded-full border border-white/15 bg-white/12 px-3 py-1 backdrop-blur">
                {item.readTime}
              </span>
              <span className="rounded-full border border-white/15 bg-white/12 px-3 py-1 backdrop-blur">
                Update terbaru
              </span>
            </div>

            <h1 className="max-w-5xl text-3xl font-black leading-tight tracking-[-0.035em] sm:text-4xl lg:text-5xl">
              {item.h1}
            </h1>

            <p className="mt-6 max-w-3xl text-sm leading-7 text-blue-50/90 sm:text-base">
              {item.intro}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <WhatsappLink
                className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-4 font-black text-slate-950 shadow-[0_18px_50px_rgba(37,211,102,0.24)] transition hover:-translate-y-0.5 hover:bg-[#20BA5A]"
                source={`Artikel ${item.slug} - Hero`}
                intent={item.waIntent}
              >
                {item.ctaLabel}
              </WhatsappLink>
              <Link
                href={routes.kalkulatorPkAc}
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-4 font-black text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15"
              >
                Cek Kalkulator PK
              </Link>
              <Link
                href={routes.katalog}
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white px-6 py-4 font-black text-slate-950 shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-50"
              >
                Lihat Katalog AC
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
          <div className="mb-8 flex flex-wrap gap-2">
            {keywords.map((keyword) => (
              <span key={keyword} className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 shadow-sm">
                {keyword}
              </span>
            ))}
          </div>

          <div className="space-y-6">
            {item.sections.map((section, index) => (
              <section key={section.heading} className="relative overflow-hidden rounded-[1.7rem] border border-slate-200 bg-white p-6 shadow-[0_16px_45px_rgba(15,39,66,0.07)] sm:p-8">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-emerald-400" />
                <div className="mb-5 flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-sm font-black text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="pt-1 text-2xl font-black tracking-[-0.03em] text-slate-950 sm:text-3xl">
                    {section.heading}
                  </h2>
                </div>

                <div className="space-y-4 text-[15px] leading-8 text-slate-650 sm:text-base sm:leading-8">
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="text-slate-600">{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <section className="mt-10 overflow-hidden rounded-[1.7rem] border border-slate-200 bg-white shadow-[0_18px_55px_rgba(15,39,66,0.08)]">
            <div className="bg-[linear-gradient(135deg,#083449_0%,#0ea5b7_100%)] p-6 text-white sm:p-8">
              <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-blue-100">
                Lanjutkan ke halaman terkait
              </p>
              <h2 className="max-w-3xl text-2xl font-black tracking-[-0.03em] sm:text-3xl">
                Pilih halaman lanjutan sesuai kebutuhan ruangan
              </h2>
            </div>
            <div className="grid gap-4 p-5 sm:grid-cols-2 sm:p-6">
              {moneyLinks.map(([label, href, description]) => (
                <Link
                  key={href}
                  href={href}
                  className="group rounded-[1.35rem] border border-slate-200 bg-[#f8fbff] p-5 transition hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-[0_16px_40px_rgba(15,39,66,0.10)]"
                >
                  <h3 className="mb-2 text-lg font-black text-slate-950">{label}</h3>
                  <p className="mb-4 text-sm leading-6 text-slate-600">{description}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-black text-blue-700 transition group-hover:translate-x-1">
                    Buka halaman →
                  </span>
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-10 rounded-[2rem] border border-[#25D366]/20 bg-[linear-gradient(135deg,rgba(37,211,102,0.14),rgba(34,211,238,0.10))] p-6 text-center shadow-[0_18px_55px_rgba(15,39,66,0.08)] sm:p-8">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#25D366] text-sm font-black text-slate-950">
              WA
            </div>
            <h2 className="mb-3 text-2xl font-black tracking-[-0.03em] text-slate-950 sm:text-3xl">
              Mulai pilih AC dari data ruangan
            </h2>
            <p className="mx-auto mb-6 max-w-2xl text-sm leading-7 text-slate-600">
              Kirim data ruangan, daya listrik, anggaran, jumlah unit, dan kebutuhan pemasangan untuk cek stok,
              rekomendasi PK, pilihan tipe AC, garansi, pembayaran, dan pengiriman.
            </p>
            <WhatsappLink
              className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-4 font-black text-slate-950 shadow-[0_16px_40px_rgba(37,211,102,0.20)] transition hover:-translate-y-0.5 hover:bg-[#20BA5A]"
              source={`Artikel ${item.slug} - Bottom CTA`}
              intent={item.waIntent}
            >
              {item.ctaLabel}
            </WhatsappLink>
          </section>

          {relatedArticles.length > 0 ? (
            <section className="mt-12">
              <h2 className="mb-5 text-2xl font-black tracking-[-0.03em] text-slate-950">Artikel terkait</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {relatedArticles.map((article) => (
                  <Link
                    key={article.slug}
                    href={article.path}
                    className="rounded-[1.35rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_16px_40px_rgba(15,39,66,0.10)]"
                  >
                    <p className="mb-2 text-xs font-bold text-blue-700">{article.eyebrow}</p>
                    <h3 className="mb-2 text-lg font-black text-slate-950">{article.h1}</h3>
                    <p className="text-sm leading-6 text-slate-500">{article.description}</p>
                  </Link>
                ))}
              </div>
            </section>
          ) : null}
        </section>
      </article>
    </main>
  );
}
