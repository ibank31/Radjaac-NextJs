import Link from "next/link";
import { notFound } from "next/navigation";
import { routes } from "@/content/routes";
import { buildMetadata } from "@/lib/seo";
import { areaItems, getAreaItem } from "@/content/areas";
import { warrantyHighlights } from "@/content/policies";
import WhatsappLink from "@/components/ui/WhatsappLink";

export const dynamicParams = false;

const primaryLinks = [
  ["Katalog AC", routes.katalog],
  ["Brand Gree", routes.brandGree],
  ["Brand Daikin", routes.brandDaikin],
  ["Pengadaan AC", routes.pengadaanAc],
  ["Kontak", routes.kontak],
];

export function generateStaticParams() {
  return areaItems.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = getAreaItem(slug);

  if (!item) {
    return {};
  }

  return buildMetadata({
    title: item.title,
    description: item.description,
    path: item.path,
  });
}

export default async function AreaPage({ params }) {
  const { slug } = await params;
  const item = getAreaItem(slug);

  if (!item) {
    notFound();
  }

  const relatedAreas = areaItems.filter((areaItem) => areaItem.slug !== item.slug);
  const pageLinks = item.relatedLinks?.length ? item.relatedLinks : primaryLinks;

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <Link href={routes.jualAc} className="text-sm font-bold text-slate-500 hover:text-slate-950">
          ← Kembali ke Jual AC
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
            source={item.label}
            intent={item.waIntent}
            area={item.waArea}
          >
            {item.ctaLabel ?? "Chat Admin RADJA AC"}
          </WhatsappLink>
          <Link
            href={routes.katalog}
            className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-4 text-sm font-bold text-slate-950 transition hover:bg-slate-50"
          >
            Lihat Katalog AC
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <section className="rounded-3xl border border-slate-200 p-6">
            <h2 className="text-xl font-black text-slate-950">Kebutuhan yang sering ditanyakan</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
              {item.commonNeeds.map((point) => (
                <li key={point} className="rounded-2xl bg-slate-50 p-4">
                  {point}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-3xl border border-slate-200 p-6">
            <h2 className="text-xl font-black text-slate-950">Yang dicek sebelum pembelian</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
              {item.buyingChecks.map((point) => (
                <li key={point} className="rounded-2xl bg-slate-50 p-4">
                  {point}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-xl font-black text-slate-950">Catatan area</h2>
          <p className="mt-4 text-sm leading-6 text-slate-600">{item.localContext}</p>
          <p className="mt-4 text-sm leading-6 text-slate-600">{item.coverageNote}</p>
        </section>

        <section className="mt-8 rounded-3xl border border-slate-200 p-6">
          <h2 className="text-xl font-black text-slate-950">Garansi & bantuan klaim</h2>
          <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-600 md:grid-cols-3">
            {warrantyHighlights.map((point) => (
              <li key={point} className="rounded-2xl bg-slate-50 p-4">
                {point}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12 rounded-3xl bg-slate-950 p-6 text-white">
          <h2 className="text-2xl font-black">Mulai dari area, brand, atau kebutuhan AC</h2>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300">
            Sampaikan ukuran ruangan, daya listrik, lokasi, budget, dan kebutuhan unit saja atau sekalian opsi pemasangan.
            Admin RADJA AC bantu cek pilihan yang masuk akal sebelum Anda deal.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {pageLinks.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="rounded-full border border-white/15 px-4 py-2 text-sm font-bold text-white transition hover:bg-white/10"
              >
                {label}
              </Link>
            ))}
            {relatedAreas.map((area) => (
              <Link
                key={area.slug}
                href={area.path}
                className="rounded-full border border-white/15 px-4 py-2 text-sm font-bold text-white transition hover:bg-white/10"
              >
                {area.label}
              </Link>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
