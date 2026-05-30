import Link from "next/link";
import { notFound } from "next/navigation";
import { routes } from "@/content/routes";
import { buildMetadata } from "@/lib/seo";
import { catalogItems, getCatalogItem } from "@/content/catalog";
import WhatsappLink from "@/components/ui/WhatsappLink";

export const dynamicParams = false;

const pkGuide = [
  ["½ PK", "± 9–12 m²", "Kamar kecil, kost, atau ruang kerja pribadi"],
  ["¾ PK", "± 12–15 m²", "Kamar sedang atau ruang santai"],
  ["1 PK", "± 15–20 m²", "Kamar besar atau ruang keluarga kecil"],
  ["1.5 PK", "± 20–30 m²", "Ruang keluarga, kantor kecil, atau toko"],
  ["2 PK", "± 30–40 m²", "Ruangan besar atau kebutuhan usaha"],
];

const checklist = [
  "Ukuran ruangan dan tinggi plafon bila ada",
  "Daya listrik rumah atau tempat usaha",
  "Jam pemakaian dan jumlah orang di ruangan",
  "Budget, preferensi brand, dan pilihan tipe",
  "Alamat pengiriman dan kebutuhan pemasangan",
];

const brandLinks = [
  ["Gree", routes.brandGree],
  ["Daikin", routes.brandDaikin],
  ["Midea", routes.brandMidea],
  ["Hisense", routes.brandHisense],
  ["Sharp", routes.brandSharp],
  ["Brand Lainnya", routes.brandLainnya],
];

export function generateStaticParams() {
  return catalogItems.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = getCatalogItem(slug);

  if (!item) {
    return {};
  }

  return buildMetadata({
    title: item.title,
    description: item.description,
    path: item.path,
  });
}

export default async function CatalogDetailPage({ params }) {
  const { slug } = await params;
  const item = getCatalogItem(slug);

  if (!item) {
    notFound();
  }

  const relatedItems = catalogItems.filter((catalogItem) => catalogItem.slug !== item.slug);

  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <section className="relative mx-auto max-w-7xl px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pb-14 lg:pt-24">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_28%)]" />
        <Link href={routes.katalog} className="mb-7 inline-flex text-sm font-black text-cyan-300 transition hover:text-cyan-200">
          ← Kembali ke Katalog AC
        </Link>

        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start lg:gap-16">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-cyan-200">
              {item.eyebrow}
            </p>
            <h1 className="mb-5 max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
              {item.h1}
            </h1>
            <p className="mb-6 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">
              {item.intro}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <WhatsappLink
                className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-4 font-bold text-slate-950 shadow-[0_18px_50px_rgba(37,211,102,0.2)] transition hover:-translate-y-0.5 hover:bg-[#20BA5A]"
                source={`Katalog ${item.label}`}
                intent={item.waIntent}
                category={item.waCategory}
              >
                {item.ctaLabel}
              </WhatsappLink>
              <Link href={routes.kalkulatorPkAc} className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-4 font-semibold text-white/90 transition hover:border-cyan-300/30 hover:bg-white/[0.05]">
                Cek Kalkulator PK
              </Link>
              <Link href={routes.kontak} className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-4 font-semibold text-white/90 transition hover:border-cyan-300/30 hover:bg-white/[0.05]">
                Kontak RADJA AC
              </Link>
            </div>
          </div>

          <aside className="rounded-[34px] border border-cyan-300/15 bg-cyan-300/[0.055] p-6 shadow-[0_28px_80px_rgba(8,20,47,0.42)]">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-cyan-200">Sebelum pilih unit</p>
            <h2 className="text-2xl font-black text-white">Data singkat yang membantu admin</h2>
            <div className="mt-5 grid gap-3">
              {checklist.map((point) => (
                <div key={point} className="rounded-2xl border border-white/10 bg-slate-950/45 p-4 text-sm font-semibold leading-6 text-white/70">
                  <span className="mr-2 text-cyan-300">✓</span>
                  {point}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="grid gap-6 lg:grid-cols-2">
          <section className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-cyan-300">Cocok untuk</p>
            <h2 className="mb-5 text-3xl font-black tracking-tight text-white">Kebutuhan yang paling dekat</h2>
            <ul className="space-y-3">
              {item.bestFor.map((point) => (
                <li key={point} className="rounded-2xl border border-white/10 bg-slate-950/45 p-4 text-sm font-semibold leading-6 text-white/70">
                  {point}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-cyan-300">Yang perlu dicek</p>
            <h2 className="mb-5 text-3xl font-black tracking-tight text-white">Jangan hanya lihat harga unit</h2>
            <ul className="space-y-3">
              {item.concerns.map((point) => (
                <li key={point} className="rounded-2xl border border-white/10 bg-slate-950/45 p-4 text-sm font-semibold leading-6 text-white/70">
                  {point}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-cyan-300">Panduan PK</p>
            <h2 className="mb-4 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">Cek kapasitas sebelum pilih kategori</h2>
            <p className="text-sm leading-7 text-white/60 sm:text-base">
              Tabel ini hanya patokan awal. Ruangan panas, sering terbuka, plafon tinggi, atau banyak orang bisa membutuhkan kapasitas lebih besar.
            </p>
          </div>
          <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04]">
            <div className="divide-y divide-white/10">
              {pkGuide.map(([pk, area, note]) => (
                <div key={pk} className="grid grid-cols-[70px_1fr] gap-4 px-5 py-4 sm:grid-cols-[0.8fr_1fr_1.4fr] sm:items-center">
                  <div className="text-xl font-black text-cyan-300">{pk}</div>
                  <div className="text-sm font-semibold text-white sm:text-base">{area}</div>
                  <div className="col-start-2 text-sm leading-6 text-white/55 sm:col-auto">{note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
        <div className="rounded-[34px] border border-white/10 bg-white/[0.035] p-6 text-center sm:p-8 lg:p-10">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-cyan-300">Brand & kategori lain</p>
          <h2 className="mx-auto mb-5 max-w-3xl text-3xl font-black tracking-tight text-white sm:text-4xl">Bandingkan dengan kategori dan brand lain sebelum deal</h2>
          <div className="mb-6 flex flex-wrap justify-center gap-2.5">
            {brandLinks.map(([label, href]) => (
              <Link key={href} href={href} className="rounded-full border border-cyan-300/15 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-300/15">
                {label}
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-2.5">
            {relatedItems.map((relatedItem) => (
              <Link key={relatedItem.slug} href={relatedItem.path} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white/75 transition hover:border-cyan-300/30 hover:text-cyan-200">
                {relatedItem.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-20">
        <div className="rounded-[34px] border border-[#25D366]/20 bg-[#25D366]/10 p-6 text-center sm:p-10 lg:p-14">
          <h2 className="mx-auto mb-5 max-w-3xl text-3xl font-black tracking-tight sm:text-4xl">Belum yakin kategori ini cocok?</h2>
          <p className="mx-auto mb-6 max-w-2xl leading-7 text-white/70">
            Kirim ukuran ruangan, daya listrik, kota, budget, dan kebutuhan unit saja atau sekalian pemasangan. Admin RADJA AC bantu arahkan pilihan AC yang paling masuk akal sebelum Anda deal.
          </p>
          <WhatsappLink
            className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-4 font-bold text-slate-950 transition hover:bg-[#20BA5A]"
            source={`Katalog ${item.label} - Final CTA`}
            intent={item.waIntent}
            category={item.waCategory}
          >
            Chat Admin RADJA AC
          </WhatsappLink>
        </div>
      </section>
    </main>
  );
}
