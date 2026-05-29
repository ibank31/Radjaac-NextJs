import Link from "next/link";
import { notFound } from "next/navigation";
import { routes } from "@/content/routes";
import { buildMetadata } from "@/lib/seo";
import { procurementItems, getProcurementItem } from "@/content/procurement";
import { warrantyHighlights } from "@/content/policies";
import WhatsappLink from "@/components/ui/WhatsappLink";

export const dynamicParams = false;

const parentLinks = [
  ["Pengadaan AC", routes.pengadaanAc],
  ["Katalog AC", routes.katalog],
  ["Brand AC", routes.brandGree],
  ["Jual AC", routes.jualAc],
  ["Kontak", routes.kontak],
];

export function generateStaticParams() {
  return procurementItems.map((item) => ({
    slug: item.slug,
  }));
}

export function generateMetadata({ params }) {
  const item = getProcurementItem(params.slug);

  if (!item) {
    return {};
  }

  return buildMetadata({
    title: item.title,
    description: item.description,
    path: item.path,
  });
}

export default function ProcurementDetailPage({ params }) {
  const item = getProcurementItem(params.slug);

  if (!item) {
    notFound();
  }

  const relatedItems = procurementItems.filter((procurementItem) => procurementItem.slug !== item.slug);

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <Link href={routes.pengadaanAc} className="text-sm font-bold text-slate-500 hover:text-slate-950">
          ← Kembali ke Pengadaan AC
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
            category={item.waProjectType}
          >
            Chat Admin RADJA AC
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
            <h2 className="text-xl font-black text-slate-950">Kebutuhan pengadaan</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
              {item.commonNeeds.map((point) => (
                <li key={point} className="rounded-2xl bg-slate-50 p-4">
                  {point}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-3xl border border-slate-200 p-6">
            <h2 className="text-xl font-black text-slate-950">Data yang dicek admin</h2>
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
          <h2 className="text-xl font-black text-slate-950">Koordinasi proyek</h2>
          <p className="mt-4 text-sm leading-6 text-slate-600">{item.segmentContext}</p>
          <p className="mt-4 text-sm leading-6 text-slate-600">{item.coordinationNote}</p>
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

        <section className="mt-8 rounded-3xl border border-slate-200 p-6">
          <h2 className="text-xl font-black text-slate-950">Link terkait</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {item.suggestedLinks.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-200"
              >
                {label}
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-3xl bg-slate-950 p-6 text-white">
          <h2 className="text-2xl font-black">Belum yakin kebutuhan proyeknya?</h2>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300">
            Kirim jumlah ruangan, ukuran ruangan, lokasi, estimasi jumlah unit, daya listrik, brand yang diminati,
            dan kebutuhan unit saja atau opsi pemasangan. Admin RADJA AC bantu cek pilihan yang paling masuk akal.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {parentLinks.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="rounded-full border border-white/15 px-4 py-2 text-sm font-bold text-white transition hover:bg-white/10"
              >
                {label}
              </Link>
            ))}
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
