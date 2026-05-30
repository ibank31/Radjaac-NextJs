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
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <section className="relative mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(37,211,102,0.12),transparent_28%)]" />
        <Link href={routes.pengadaanAc} className="text-sm font-bold text-cyan-300 hover:text-cyan-200">
          ← Kembali ke Pengadaan AC
        </Link>

        <p className="mt-8 text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
          {item.eyebrow}
        </p>
        <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight text-white md:text-5xl">
          {item.h1}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
          {item.intro}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <WhatsappLink
            className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-4 text-sm font-black text-slate-950 transition hover:bg-[#20BA5A]"
            source={item.label}
            intent={item.waIntent}
            category={item.waProjectType}
          >
            Chat Admin RADJA AC
          </WhatsappLink>
          <Link
            href={routes.katalog}
            className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-4 text-sm font-bold text-white transition hover:bg-white/[0.05]"
          >
            Lihat Katalog AC
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <h2 className="text-xl font-black text-white">Kebutuhan pengadaan</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-white/65">
              {item.commonNeeds.map((point) => (
                <li key={point} className="rounded-2xl border border-white/10 bg-slate-950/45 p-4">
                  {point}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <h2 className="text-xl font-black text-white">Data yang dicek admin</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-white/65">
              {item.buyingChecks.map((point) => (
                <li key={point} className="rounded-2xl border border-white/10 bg-slate-950/45 p-4">
                  {point}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="mt-8 rounded-3xl border border-cyan-300/15 bg-cyan-300/[0.055] p-6">
          <h2 className="text-xl font-black text-white">Koordinasi proyek</h2>
          <p className="mt-4 text-sm leading-6 text-white/65">{item.segmentContext}</p>
          <p className="mt-4 text-sm leading-6 text-white/65">{item.coordinationNote}</p>
        </section>

        <section className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
          <h2 className="text-xl font-black text-white">Garansi & bantuan klaim</h2>
          <ul className="mt-5 grid gap-3 text-sm leading-6 text-white/65 md:grid-cols-3">
            {warrantyHighlights.map((point) => (
              <li key={point} className="rounded-2xl border border-white/10 bg-slate-950/45 p-4">
                {point}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
          <h2 className="text-xl font-black text-white">Link terkait</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {item.suggestedLinks.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="rounded-full border border-cyan-300/15 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-200 transition hover:bg-cyan-300/15"
              >
                {label}
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-[#25D366]/20 bg-[#25D366]/10 p-6 text-white">
          <h2 className="text-2xl font-black">Belum yakin kebutuhan proyeknya?</h2>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-white/70">
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
