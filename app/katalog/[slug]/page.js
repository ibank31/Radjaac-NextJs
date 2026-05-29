import Link from "next/link";
import { notFound } from "next/navigation";
import { routes } from "@/content/routes";
import { buildMetadata } from "@/lib/seo";
import { catalogItems, getCatalogItem } from "@/content/catalog";
import WhatsappLink from "@/components/ui/WhatsappLink";

export function generateStaticParams() {
  return catalogItems.map((item) => ({
    slug: item.slug,
  }));
}

export function generateMetadata({ params }) {
  const item = getCatalogItem(params.slug);

  if (!item) {
    return {};
  }

  return buildMetadata({
    title: item.title,
    description: item.description,
    path: item.path,
  });
}

export default function CatalogDetailPage({ params }) {
  const item = getCatalogItem(params.slug);

  if (!item) {
    notFound();
  }

  const relatedItems = catalogItems.filter((catalogItem) => catalogItem.slug !== item.slug);

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
            source={`Katalog ${item.label}`}
            intent={item.waIntent}
            category={item.waCategory}
          >
            {item.ctaLabel}
          </WhatsappLink>
          <Link
            href={routes.kontak}
            className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-4 text-sm font-bold text-slate-950 transition hover:bg-slate-50"
          >
            Kontak RADJA AC
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <section className="rounded-3xl border border-slate-200 p-6">
            <h2 className="text-xl font-black text-slate-950">Cocok untuk</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
              {item.bestFor.map((point) => (
                <li key={point} className="rounded-2xl bg-slate-50 p-4">
                  {point}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-3xl border border-slate-200 p-6">
            <h2 className="text-xl font-black text-slate-950">Yang perlu dicek sebelum beli</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
              {item.concerns.map((point) => (
                <li key={point} className="rounded-2xl bg-slate-50 p-4">
                  {point}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="mt-12 rounded-3xl bg-slate-950 p-6 text-white">
          <h2 className="text-2xl font-black">Belum yakin kategori mana yang cocok?</h2>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300">
            Kirim ukuran ruangan, daya listrik, kota, budget, dan kebutuhan unit saja atau sekalian pemasangan.
            Admin RADJA AC bantu arahkan pilihan AC yang paling masuk akal sebelum Anda deal.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {relatedItems.map((relatedItem) => (
              <Link
                key={relatedItem.slug}
                href={relatedItem.path}
                className="rounded-full border border-white/15 px-4 py-2 text-sm font-bold text-white transition hover:bg-white/10"
              >
                {relatedItem.label}
              </Link>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
