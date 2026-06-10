import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { routes } from "@/content/routes";
import { buildMetadata } from "@/lib/seo";
import { serviceSchema, faqSchema } from "@/lib/schema";
import { procurementItems, getProcurementItem } from "@/content/procurement";
import { warrantyHighlights, legalEntityCopy } from "@/content/policies";
import WhatsappLink from "@/components/ui/WhatsappLink";
import JsonLd from "@/components/seo/JsonLd";

export const dynamicParams = false;

const processSteps = [
  ["01", "Kirim jumlah unit & lokasi", "Jumlah unit/titik, jenis bangunan, lokasi, daya listrik, dan kapan unit dibutuhkan."],
  ["02", "Cek stok & opsi brand", "RADJA AC cek ketersediaan unit di gudang, pilihan brand, dan estimasi PK per ruangan."],
  ["03", "Konfirmasi & jadwal kirim", "Spesifikasi unit, jadwal pengiriman, dan kebutuhan pemasangan dikunci sebelum order jalan."],
  ["04", "Kirim & pasang", "Unit dikirim pakai armada RADJA AC; pemasangan bergaransi 1 bulan bila dikerjakan tim kami."],
];

const heroTrust = [
  ["Stok banyak unit", "Ready di gudang Sokaraja, restock rutin terdokumentasi."],
  ["Pengiriman sendiri", "Armada RADJA AC, bisa sekaligus atau bertahap."],
  ["Pemasangan bergaransi", "Garansi pemasangan 1 bulan bila dikerjakan tim kami."],
];

const proofImages = [
  {
    title: "Satu truk muat banyak unit AC siap kirim",
    label: "Pengiriman banyak unit",
    image: "/photos/delivery/truk-radja-ac-muat-banyak-unit-ac-aqua-2026-06.webp",
  },
  {
    title: "Restock unit indoor dan outdoor di gudang",
    label: "Gudang & restock",
    image: "/images/gallery/restock-mide-tcl-lg.webp",
  },
  {
    title: "Stok unit beberapa brand siap di gudang",
    label: "Stok",
    image: "/images/gallery/stock-sansui-gree.webp",
  },
];

const briefChecklist = [
  ["Lokasi proyek", "kota atau area pengiriman"],
  ["Jumlah unit / ruangan", "estimasi total kebutuhan"],
  ["Ukuran dan fungsi ruangan", "untuk hitung estimasi PK"],
  ["Daya listrik", "total atau per titik jika tersedia"],
  ["Timeline", "kapan unit atau pemasangan dibutuhkan"],
];

export function generateStaticParams() {
  return procurementItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = getProcurementItem(slug);

  if (!item) return {};

  return buildMetadata({
    title: item.title,
    description: item.description,
    path: item.path,
  });
}

export default async function ProcurementDetailPage({ params }) {
  const { slug } = await params;
  const item = getProcurementItem(slug);

  if (!item) notFound();

  const relatedItems = procurementItems.filter((procurementItem) => procurementItem.slug !== item.slug);

  const structuredData = serviceSchema({
    name: item.label,
    description: item.description,
    url: item.path,
    serviceType: "Pengadaan AC",
  });

  const faqStructuredData = item.faqs?.length ? faqSchema(item.faqs) : null;

  return (
    <main className="min-h-screen bg-white text-slate-800">
      <JsonLd data={structuredData} />
      {faqStructuredData ? <JsonLd data={faqStructuredData} /> : null}
      <section className="relative overflow-hidden border-b border-blue-100 bg-[linear-gradient(155deg,#ffffff_0%,#f1f5ff_52%,#e0f0ff_100%)]">
        <div className="pointer-events-none absolute -right-32 -top-24 h-[30rem] w-[30rem] rounded-full bg-blue-300/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-28 bottom-0 h-80 w-80 rounded-full bg-red-200/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-6 lg:grid-cols-[1.04fr_0.96fr] lg:px-8 lg:py-20">
          <div className="flex flex-col justify-center">
            <Link href={routes.pengadaanAc} className="mb-6 inline-flex w-fit text-sm font-black text-blue-900 transition hover:text-red-600">
              ← Kembali ke Pengadaan AC
            </Link>

            <div className="mb-6 inline-flex w-fit items-center gap-3 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-blue-900 shadow-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-red-600" />
              {item.eyebrow}
            </div>

            <h1 className="max-w-4xl text-3xl font-black tracking-[-0.04em] text-blue-950 sm:text-4xl lg:text-5xl">
              {item.h1}
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              {item.intro}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <WhatsappLink
                className="inline-flex items-center justify-center rounded-2xl bg-red-600 px-7 py-4 text-base font-black text-white shadow-xl shadow-red-600/20 transition hover:-translate-y-0.5 hover:bg-red-700"
                source={item.label}
                intent={item.waIntent}
                category={item.waProjectType}
              pageType="procurement"
              >
                Kirim Kebutuhan via WhatsApp
              </WhatsappLink>

              <Link
                href={routes.buktiPengirimanProyek}
                className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-7 py-4 text-base font-black text-blue-950 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-900"
              >
                Lihat Bukti Pengiriman
              </Link>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {heroTrust.map(([title, desc]) => (
                <div key={title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="text-base font-black text-blue-950">{title}</div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.7rem] border border-blue-100 bg-white p-5 shadow-2xl shadow-blue-900/10">
            <div className="mb-4 flex items-center justify-between gap-4 rounded-2xl bg-blue-950 px-5 py-4 text-white">
              <h2 className="text-sm font-black uppercase tracking-[0.16em]">Alur order banyak unit</h2>
              <span className="rounded-full bg-red-600 px-3 py-1 text-xs font-black">B2B</span>
            </div>
            <div className="grid gap-3">
              {processSteps.map(([number, title, desc]) => (
                <div key={number} className="flex gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-950 text-xs font-black text-white">
                    {number}
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-blue-950">{title}</h3>
                    <p className="mt-1 text-xs leading-5 text-slate-600">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-5 lg:grid-cols-2">
            <section className="rounded-[1.7rem] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-red-600">Kebutuhan segmen</p>
              <h2 className="mt-3 text-2xl font-black tracking-tight text-blue-950">Kebutuhan pengadaan</h2>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
                {item.commonNeeds.map((point) => (
                  <li key={point} className="flex gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-950 text-xs font-black text-white">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-[1.7rem] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-red-600">Brief teknis</p>
              <h2 className="mt-3 text-2xl font-black tracking-tight text-blue-950">Data yang perlu disiapkan</h2>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
                {item.buyingChecks.map((point) => (
                  <li key={point} className="flex gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-50 text-xs font-black text-red-700">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="mb-8 grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-red-600">Bukti operasional</p>
              <h2 className="mt-3 text-2xl font-black tracking-tight text-blue-950 sm:text-4xl">
                Stok dan pengiriman banyak unit yang bisa dilihat fotonya.
              </h2>
            </div>
            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              Foto diambil dari aktivitas gudang dan pengiriman RADJA AC di Sokaraja, Banyumas.
              Ketersediaan tipe dan jumlah unit dikonfirmasi saat order.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {proofImages.map((proof) => (
              <figure key={proof.image} className="overflow-hidden rounded-[1.6rem] border border-slate-200 bg-white shadow-sm">
                <div className="relative">
                  <Image src={proof.image} alt={proof.title} width={520} height={420} sizes="(min-width: 1024px) 360px, 100vw" className="h-52 w-full object-cover" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-black text-blue-950 shadow-sm">
                    {proof.label}
                  </span>
                </div>
                <figcaption className="p-4 text-sm font-black leading-6 text-blue-950">{proof.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-red-600">Stok, kirim & pasang</p>
              <h2 className="mt-3 text-2xl font-black tracking-tight text-blue-950 sm:text-4xl">
                Stok, pengiriman, dan pemasangan dari gudang sendiri.
              </h2>
            </div>
            <div className="rounded-[1.7rem] border border-blue-100 bg-white p-6 shadow-sm">
              <p className="text-sm leading-7 text-slate-700">{item.segmentContext}</p>
              <p className="mt-4 text-sm leading-7 text-slate-700">{item.coordinationNote}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-red-600">Garansi & bantuan klaim</p>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-blue-950 sm:text-3xl">
              Garansi pemasangan 1 bulan, garansi unit resmi brand, dan bantuan klaim.
            </h2>
          </div>
          <ul className="grid gap-4 text-sm leading-6 text-slate-700 md:grid-cols-3">
            {warrantyHighlights.map((point) => (
              <li key={point} className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
                <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-blue-950 text-xs font-black text-white">✓</span>
                {point}
              </li>
            ))}
          </ul>
          <div className="mt-4 rounded-[1.5rem] border border-blue-100 bg-white p-5 text-sm leading-7 text-slate-600 shadow-sm">
            Authorized Dealer Daikin, Midea, Hisense, dan Sansui. {legalEntityCopy}
          </div>
        </div>
      </section>

      {faqStructuredData ? (
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
            <div className="mb-8 max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-red-600">FAQ pengadaan</p>
              <h2 className="mt-3 text-2xl font-black tracking-tight text-blue-950 sm:text-3xl">
                Pertanyaan yang sering masuk untuk {item.label.toLowerCase()}.
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {item.faqs.map(([question, answer]) => (
                <div key={question} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-base font-black text-blue-950">{question}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-red-600">Link terkait</p>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-blue-950 sm:text-3xl">
              Katalog dan segmen pengadaan lain.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {item.suggestedLinks.slice(0, 6).map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="rounded-[1.4rem] border border-slate-200 bg-white p-5 text-sm font-black text-blue-950 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                {label} →
              </Link>
            ))}
            {relatedItems.slice(0, 3).map((relatedItem) => (
              <Link
                key={relatedItem.slug}
                href={relatedItem.path}
                className="rounded-[1.4rem] border border-slate-200 bg-white p-5 text-sm font-black text-blue-950 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                {relatedItem.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-blue-950">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[1fr_0.82fr] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-white/40">Mulai order</p>
            <h2 className="mt-4 text-2xl font-black tracking-tight text-white sm:text-4xl">
              Kirim jumlah unit dan lokasi, kami cek stok dan jadwal kirim.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
              Siapkan brief singkat untuk {item.label.toLowerCase()}. Stok banyak unit siap di gudang Sokaraja, Banyumas,
              dengan pengiriman pakai armada sendiri dan pemasangan bergaransi 1 bulan.
            </p>
          </div>

          <div className="rounded-[1.7rem] bg-white p-6 text-slate-950 shadow-2xl">
            <h3 className="text-xl font-black text-blue-950">Data yang perlu dikirim</h3>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
              {briefChecklist.map(([title, desc]) => (
                <li key={title} className="flex gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs font-black text-green-700">✓</span>
                  <span><strong className="text-blue-950">{title}</strong> — {desc}</span>
                </li>
              ))}
            </ul>
            <WhatsappLink
              className="mt-6 inline-flex w-full justify-center rounded-2xl bg-red-600 px-6 py-4 font-black text-white shadow-lg shadow-red-600/20 transition hover:-translate-y-0.5 hover:bg-red-700"
              source={`${item.label} - Final CTA`}
              intent={item.waIntent}
              category={item.waProjectType}
              pageType="procurement"
            >
              Kirim Data via WhatsApp
            </WhatsappLink>
          </div>
        </div>
      </section>
    </main>
  );
}
