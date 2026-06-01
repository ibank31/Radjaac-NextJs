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

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-8 max-w-3xl text-center">
      <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-blue-700">
        {eyebrow}
      </p>
      <h2 className="mb-4 text-3xl font-black tracking-[-0.03em] text-slate-950 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default async function CatalogDetailPage({ params }) {
  const { slug } = await params;
  const item = getCatalogItem(slug);

  if (!item) {
    notFound();
  }

  const relatedItems = catalogItems.filter((catalogItem) => catalogItem.slug !== item.slug);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7fbff] text-slate-950">
      <section className="relative overflow-hidden border-b border-blue-100 bg-[linear-gradient(180deg,#f8fdff_0%,#eefbff_100%)] px-4 pb-10 pt-12 sm:px-6 lg:px-8 lg:pb-14 lg:pt-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.08),transparent_32%)]" />

        <div className="relative mx-auto max-w-7xl">
          <Link href={routes.katalog} className="mb-7 inline-flex text-sm font-black text-blue-700 transition hover:text-blue-900">
            ← Kembali ke Katalog AC
          </Link>

          <div className="grid gap-10 lg:grid-cols-[1fr_0.88fr] lg:items-start lg:gap-16">
            <div>
              <p className="mb-5 inline-flex rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-blue-800 shadow-sm backdrop-blur">
                {item.eyebrow}
              </p>

              <h1 className="mb-5 max-w-4xl text-4xl font-black leading-tight tracking-[-0.04em] text-slate-950 md:text-6xl">
                {item.h1}
              </h1>

              <p className="mb-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                {item.intro}
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <WhatsappLink
                  className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-4 font-black text-slate-950 shadow-[0_18px_42px_rgba(37,211,102,0.20)] transition hover:-translate-y-0.5 hover:bg-[#20BA5A]"
                  source={`Katalog ${item.label}`}
                  intent={item.waIntent}
                  category={item.waCategory}
                >
                  {item.ctaLabel}
                </WhatsappLink>

                <Link href={routes.kalkulatorPkAc} className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-4 font-black text-slate-900 shadow-sm transition hover:bg-slate-50">
                  Cek Kalkulator PK
                </Link>

                <Link href={routes.kontak} className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-4 font-black text-slate-900 shadow-sm transition hover:bg-slate-50">
                  Kontak RADJA AC
                </Link>
              </div>
            </div>

            <aside className="rounded-[1.7rem] border border-slate-200 bg-white p-5 shadow-[0_22px_60px_rgba(15,39,66,0.10)] sm:p-6">
              <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-blue-700">
                Sebelum pilih unit
              </p>
              <h2 className="text-2xl font-black tracking-[-0.03em] text-slate-950">
                Data singkat yang membantu admin.
              </h2>

              <div className="mt-5 grid gap-3">
                {checklist.map((point) => (
                  <div key={point} className="rounded-2xl border border-slate-200 bg-[#f8fbff] p-4 text-sm font-semibold leading-6 text-slate-700">
                    <span className="mr-2 text-blue-700">✓</span>
                    {point}
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="grid gap-6 lg:grid-cols-2">
          <section className="rounded-[1.7rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-blue-700">
              Cocok untuk
            </p>
            <h2 className="mb-5 text-3xl font-black tracking-[-0.03em] text-slate-950">
              Kebutuhan yang paling dekat
            </h2>
            <ul className="space-y-3">
              {item.bestFor.map((point) => (
                <li key={point} className="rounded-2xl border border-slate-200 bg-[#f8fbff] p-4 text-sm font-semibold leading-6 text-slate-700">
                  {point}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-[1.7rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-blue-700">
              Yang perlu dicek
            </p>
            <h2 className="mb-5 text-3xl font-black tracking-[-0.03em] text-slate-950">
              Jangan hanya lihat harga unit
            </h2>
            <ul className="space-y-3">
              {item.concerns.map((point) => (
                <li key={point} className="rounded-2xl border border-slate-200 bg-[#f8fbff] p-4 text-sm font-semibold leading-6 text-slate-700">
                  {point}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </section>

      {item.useCases?.length ? (
        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
          <div className="rounded-[1.7rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <SectionTitle
              eyebrow="Use case"
              title={`Kapan pilih ${item.label}?`}
              description="Gunakan tabel ini sebagai patokan awal. Keputusan akhir tetap perlu cek ukuran ruangan, daya listrik, panas ruangan, stok, dan kebutuhan pemasangan."
            />
            <div className="overflow-hidden rounded-[1.35rem] border border-slate-200">
              {item.useCases.map(([useCase, fit, note]) => (
                <div key={useCase} className="grid gap-3 border-b border-slate-200 bg-[#f8fbff] p-5 last:border-b-0 lg:grid-cols-[0.8fr_1.2fr_1.2fr]">
                  <div className="font-black text-slate-950">{useCase}</div>
                  <div className="text-sm leading-6 text-slate-600">{fit}</div>
                  <div className="text-sm leading-6 text-blue-800">{note}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {item.pricingBands?.length ? (
        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
          <div className="rounded-[1.7rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,39,66,0.08)] sm:p-8 lg:p-10">
            <SectionTitle
              eyebrow="Estimasi Paket"
              title="Paket AC 1/2 PK + pemasangan standar"
              description={item.pricingIntro}
            />

            <div className="grid gap-4 lg:grid-cols-4">
              {item.pricingBands.map((band) => (
                <article key={band.label} className="rounded-[1.45rem] border border-slate-200 bg-[#f8fbff] p-5">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-700">{band.label}</p>
                  <h3 className="mt-3 text-xl font-black text-slate-950">{band.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{band.value}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {band.brands.map((brand) => (
                      <span key={brand} className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-600">
                        {brand}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-[1.45rem] border border-slate-200 bg-[#f8fbff] p-5">
                <h3 className="text-xl font-black text-slate-950">Paket standar dapat mencakup</h3>
                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  {item.standardPackage.map((point) => (
                    <div key={point} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700">
                      {point}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.45rem] border border-blue-200 bg-blue-50 p-5">
                <h3 className="text-xl font-black text-slate-950">Admin cek rincian harga</h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">{item.pricingNote}</p>
                <WhatsappLink
                  className="mt-5 inline-flex rounded-full bg-[#25D366] px-5 py-3 text-sm font-black text-slate-950 shadow-[0_14px_34px_rgba(37,211,102,0.18)] transition hover:-translate-y-0.5 hover:bg-[#20BA5A]"
                  source={`Katalog ${item.label} - Pricing Band`}
                  intent="cek estimasi paket AC 1/2 PK dan pemasangan standar"
                  category={item.waCategory}
                >
                  Cek Estimasi via WhatsApp
                </WhatsappLink>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-blue-700">
              Panduan PK
            </p>
            <h2 className="mb-4 text-3xl font-black tracking-[-0.03em] text-slate-950 sm:text-4xl lg:text-5xl">
              Cek kapasitas sebelum pilih kategori
            </h2>
            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              Tabel ini hanya patokan awal. Ruangan panas, sering terbuka, plafon tinggi, atau banyak orang bisa membutuhkan kapasitas lebih besar.
            </p>
          </div>

          <div className="overflow-hidden rounded-[1.7rem] border border-slate-200 bg-white shadow-sm">
            <div className="divide-y divide-slate-200">
              {pkGuide.map(([pk, area, note]) => (
                <div key={pk} className="grid grid-cols-[70px_1fr] gap-4 px-5 py-4 sm:grid-cols-[0.8fr_1fr_1.4fr] sm:items-center">
                  <div className="text-xl font-black text-blue-700">{pk}</div>
                  <div className="text-sm font-black text-slate-950 sm:text-base">{area}</div>
                  <div className="col-start-2 text-sm leading-6 text-slate-600 sm:col-auto">{note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
        <div className="rounded-[1.7rem] border border-slate-200 bg-white p-6 text-center shadow-[0_18px_50px_rgba(15,39,66,0.08)] sm:p-8 lg:p-10">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-blue-700">
            Brand & kategori lain
          </p>
          <h2 className="mx-auto mb-5 max-w-3xl text-3xl font-black tracking-[-0.03em] text-slate-950 sm:text-4xl">
            Bandingkan dengan kategori dan brand lain sebelum pembelian
          </h2>

          <div className="mb-6 flex flex-wrap justify-center gap-2.5">
            {brandLinks.map(([label, href]) => (
              <Link key={href} href={href} className="rounded-full border border-slate-200 bg-[#f8fbff] px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-800">
                {label}
              </Link>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-2.5">
            {relatedItems.map((relatedItem) => (
              <Link key={relatedItem.slug} href={relatedItem.path} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-800">
                {relatedItem.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-20">
        <div className="rounded-[1.7rem] border border-[#25D366]/20 bg-[#25D366]/10 p-6 text-center shadow-[0_18px_50px_rgba(15,39,66,0.08)] sm:p-10 lg:p-14">
          <h2 className="mx-auto mb-5 max-w-3xl text-3xl font-black tracking-[-0.03em] text-slate-950 sm:text-4xl">
            Cocokkan kategori dengan data ruangan
          </h2>
          <p className="mx-auto mb-6 max-w-2xl leading-7 text-slate-700">
            Kirim ukuran ruangan, daya listrik, kota, budget, dan kebutuhan unit saja atau sekalian pemasangan. Admin RADJA AC cocokkan pilihan AC dari ukuran ruangan, daya listrik, budget, dan stok.
          </p>
          <WhatsappLink
            className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-4 font-black text-slate-950 shadow-[0_14px_34px_rgba(37,211,102,0.20)] transition hover:-translate-y-0.5 hover:bg-[#20BA5A]"
            source={`Katalog ${item.label} - Final CTA`}
            intent={item.waIntent}
            category={item.waCategory}
          >
            Kirim Data Ruangan
          </WhatsappLink>
        </div>
      </section>
    </main>
  );
}
