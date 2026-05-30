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

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = getProcurementItem(slug);

  if (!item) {
    return {};
  }

  return buildMetadata({
    title: item.title,
    description: item.description,
    path: item.path,
  });
}

export default async function ProcurementDetailPage({ params }) {
  const { slug } = await params;
  const item = getProcurementItem(slug);

  if (!item) {
    notFound();
  }

  const relatedItems = procurementItems.filter((procurementItem) => procurementItem.slug !== item.slug);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7fbff] text-slate-950">
      <section className="relative overflow-hidden border-b border-cyan-100 bg-[linear-gradient(180deg,#f8fdff_0%,#eefbff_100%)] px-4 py-12 lg:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.08),transparent_32%)]" />

        <div className="relative mx-auto max-w-7xl">
          <Link href={routes.pengadaanAc} className="text-sm font-black text-cyan-700 transition hover:text-cyan-900">
            ← Kembali ke Pengadaan AC
          </Link>

          <p className="mt-8 inline-flex rounded-full border border-cyan-100 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-cyan-800 shadow-sm backdrop-blur">
            {item.eyebrow}
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-[-0.04em] text-slate-950 md:text-5xl">
            {item.h1}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            {item.intro}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsappLink
              className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-4 text-sm font-black text-slate-950 shadow-[0_14px_34px_rgba(37,211,102,0.20)] transition hover:-translate-y-0.5 hover:bg-[#20BA5A]"
              source={item.label}
              intent={item.waIntent}
              category={item.waProjectType}
            >
              Chat Admin RADJA AC
            </WhatsappLink>

            <Link
              href={routes.katalog}
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-4 text-sm font-black text-slate-900 shadow-sm transition hover:bg-slate-50"
            >
              Lihat Katalog AC
            </Link>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <section className="rounded-[1.7rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-black text-slate-950">Kebutuhan pengadaan</h2>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
                {item.commonNeeds.map((point) => (
                  <li key={point} className="rounded-2xl border border-slate-200 bg-[#f8fbff] p-4">
                    {point}
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-[1.7rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-black text-slate-950">Data yang dicek admin</h2>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
                {item.buyingChecks.map((point) => (
                  <li key={point} className="rounded-2xl border border-slate-200 bg-[#f8fbff] p-4">
                    {point}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <section className="mt-8 rounded-[1.7rem] border border-cyan-100 bg-cyan-50 p-6">
            <h2 className="text-xl font-black text-slate-950">Koordinasi proyek</h2>
            <p className="mt-4 text-sm leading-7 text-slate-700">{item.segmentContext}</p>
            <p className="mt-4 text-sm leading-7 text-slate-700">{item.coordinationNote}</p>
          </section>

          <section className="mt-8 rounded-[1.7rem] border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black text-slate-950">Garansi & bantuan klaim</h2>
            <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-700 md:grid-cols-3">
              {warrantyHighlights.map((point) => (
                <li key={point} className="rounded-2xl border border-slate-200 bg-[#f8fbff] p-4">
                  {point}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-8 rounded-[1.7rem] border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black text-slate-950">Link terkait</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {item.suggestedLinks.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="rounded-full border border-slate-200 bg-[#f8fbff] px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-800"
                >
                  {label}
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-12 rounded-[1.7rem] border border-[#25D366]/20 bg-[#25D366]/10 p-6 shadow-[0_18px_50px_rgba(15,39,66,0.08)]">
            <h2 className="text-2xl font-black text-slate-950">Belum yakin kebutuhan proyeknya?</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-700">
              Kirim jumlah ruangan, ukuran ruangan, lokasi, estimasi jumlah unit, daya listrik, brand yang diminati, dan kebutuhan unit saja atau opsi pemasangan. Admin RADJA AC bantu cek pilihan yang paling masuk akal.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {parentLinks.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-800"
                >
                  {label}
                </Link>
              ))}

              {relatedItems.map((relatedItem) => (
                <Link
                  key={relatedItem.slug}
                  href={relatedItem.path}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-800"
                >
                  {relatedItem.label}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
