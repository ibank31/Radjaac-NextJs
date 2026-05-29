import Link from "next/link";
import { notFound } from "next/navigation";
import { routes } from "@/content/routes";
import { buildMetadata } from "@/lib/seo";
import { brandItems, featuredBrandItems, getBrandItem } from "@/content/brands";
import { warrantyHighlights } from "@/content/policies";
import WhatsappLink from "@/components/ui/WhatsappLink";

export const dynamicParams = false;

export function generateStaticParams() {
  return brandItems.map((item) => ({
    slug: item.slug,
  }));
}

export function generateMetadata({ params }) {
  const item = getBrandItem(params.slug);

  if (!item) {
    return {};
  }

  return buildMetadata({
    title: item.title,
    description: item.description,
    path: item.path,
  });
}

export default function BrandDetailPage({ params }) {
  const item = getBrandItem(params.slug);

  if (!item) {
    notFound();
  }

  const relatedBrands = brandItems.filter((brandItem) => brandItem.slug !== item.slug);

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <Link href={routes.katalog} className="text-sm font-bold text-slate-500 hover:text-slate-950">
          ← Kembali ke Katalog AC
        </Link>

        <p className="mt-8 text-sm font-bold uppercase tracking-[0.22em] text-slate-500">
          {item.eyebrow}
        </p>
        <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
          {item.h1}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          {item.intro}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <WhatsappLink
            className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-4 text-sm font-black text-white transition hover:bg-slate-800"
            source={`Brand ${item.name}`}
            intent={item.waIntent}
            brand={item.waBrand}
          >
            {item.ctaLabel}
          </WhatsappLink>
          <Link
            href={routes.katalog}
            className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-4 text-sm font-bold text-slate-950 transition hover:bg-slate-50"
          >
            Lihat Katalog AC
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <section className="rounded-3xl border border-slate-200 p-6">
            <h2 className="text-xl font-black text-slate-950">Pilihan tipe</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
              {item.variants.map((variant) => (
                <li key={variant} className="rounded-2xl bg-slate-50 p-4">
                  {variant}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-3xl border border-slate-200 p-6">
            <h2 className="text-xl font-black text-slate-950">Cocok untuk</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
              {item.suitableFor.map((point) => (
                <li key={point} className="rounded-2xl bg-slate-50 p-4">
                  {point}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-3xl border border-slate-200 p-6">
            <h2 className="text-xl font-black text-slate-950">Garansi & klaim</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
              {warrantyHighlights.map((point) => (
                <li key={point} className="rounded-2xl bg-slate-50 p-4">
                  {point}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-xl font-black text-slate-950">Catatan brand</h2>
          <p className="mt-4 text-sm leading-6 text-slate-600">{item.trustNote}</p>
          {item.certificateHolder ? (
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Dokumen brand terkait: {item.certificateHolder}.
            </p>
          ) : null}
          {item.highlightedNote ? (
            <p className="mt-4 text-sm leading-6 text-slate-600">{item.highlightedNote}</p>
          ) : null}
        </section>

        {item.otherBrands?.length ? (
          <section className="mt-8 rounded-3xl border border-slate-200 p-6">
            <h2 className="text-xl font-black text-slate-950">Brand yang bisa dicek</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {item.otherBrands.map((brand) => (
                <span key={brand} className="rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-slate-700">
                  {brand}
                </span>
              ))}
            </div>
          </section>
        ) : null}

        <section className="mt-12 rounded-3xl bg-slate-950 p-6 text-white">
          <h2 className="text-2xl font-black">Belum yakin pilih brand apa?</h2>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300">
            Kirim ukuran ruangan, daya listrik, budget, kota, dan preferensi brand. Admin RADJA AC bantu cek pilihan yang sesuai, stok yang tersedia, dan opsi pemasangan sebelum Anda deal.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {relatedBrands.map((relatedBrand) => (
              <Link
                key={relatedBrand.slug}
                href={relatedBrand.path}
                className="rounded-full border border-white/15 px-4 py-2 text-sm font-bold text-white transition hover:bg-white/10"
              >
                {relatedBrand.label}
              </Link>
            ))}
            <Link
              href={routes.katalog}
              className="rounded-full border border-white/15 px-4 py-2 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Katalog AC
            </Link>
          </div>
        </section>

        {item.slug === "lainnya" ? (
          <section className="mt-8 rounded-3xl border border-slate-200 p-6">
            <h2 className="text-xl font-black text-slate-950">Brand utama RADJA AC</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {featuredBrandItems.map((brand) => (
                <Link
                  key={brand.slug}
                  href={brand.path}
                  className="rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-200"
                >
                  {brand.label}
                </Link>
              ))}
            </div>
          </section>
        ) : null}
      </section>
    </main>
  );
}
