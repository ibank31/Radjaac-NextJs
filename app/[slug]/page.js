import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { routes } from "@/content/routes";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { areaItems, getAreaItem } from "@/content/areas";
import { resolveAreaContent } from "@/content/area-content-templates";
import WhatsappLink from "@/components/ui/WhatsappLink";
import JsonLd from "@/components/seo/JsonLd";
import SectionTitle from "@/components/area/SectionTitle";
import AreaFaq from "@/components/area/AreaFaq";
import AreaFinalCta from "@/components/area/AreaFinalCta";
import AreaProcess from "@/components/area/AreaProcess";
import {
  areaPageLinkOverrides,
  brandLinks,
  categoryLinks,
  packageIncludes,
  pricePackages,
  primaryLinks,
  proofImages,
} from "@/components/area/area-page-data";

export const dynamicParams = false;


export function generateStaticParams() {
  return areaItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = getAreaItem(slug);

  if (!item) return {};

  return buildMetadata({
    title: item.title,
    description: item.description,
    path: item.path,
    image: "/photos/showroom/showroom-multibrand-radja-ac-purwokerto-01.webp",
  });
}

export default async function AreaPage({ params }) {
  const { slug } = await params;
  const item = getAreaItem(slug);

  if (!item) notFound();

  const isPurwokerto = item.slug === "jual-ac-purwokerto";
  const relatedAreas = item.nearbyAreaLinks?.length
    ? item.nearbyAreaLinks.map(([areaName, path]) => ({ areaName, path }))
    : areaItems.filter((areaItem) => areaItem.slug !== item.slug).slice(0, 5);
  const rawPageLinks = areaPageLinkOverrides[item.slug] ?? (item.relatedLinks?.length ? item.relatedLinks : primaryLinks);
  const pageLinks = rawPageLinks.slice(0, 15);
  const keywordVariants =
    item.keywordVariants ?? [
      `jual AC ${item.areaName}`,
      `toko AC ${item.areaName}`,
      `beli AC ${item.areaName}`,
      `pengiriman AC ${item.areaName}`,
      `pemasangan AC ${item.areaName}`,
    ];
  const trustBullets =
    item.trustBullets ?? [
      "Showroom dan gudang RADJA AC berada di Pamijen, Sokaraja, Banyumas.",
      "Ada dokumentasi pengiriman, stok fisik, dan aktivitas pemasangan sebagai bukti operasional.",
      "Kebutuhan PK, daya listrik, stok, pengiriman, dan opsi pemasangan dicek sebelum pembelian.",
    ];
  const paymentNote =
    item.paymentNote ??
    "Pembayaran fleksibel: COD, DP, atau transfer. Detail pembayaran dikonfirmasi bersama tim RADJA AC sebelum pengiriman atau pemasangan.";

  const heroChips = isPurwokerto
    ? ["Showroom Pamijen", "Stok dicek hari ini", "Unit + pemasangan", "Mulai 3 jutaan"]
    : ["Cek stok dulu", "COD / DP / Transfer", "Area pengiriman dicek", "Konsultasi pemasangan"];

  const bulkCards = [
    ["Rumah & Kamar", `Cek AC untuk kamar tidur, ruang keluarga, dan rumah tinggal di ${item.areaName}.`],
    ["Toko, Ruko & Usaha", `Bantu pilih AC untuk ruang usaha, area pelanggan, kantor, atau ruko di ${item.areaName}.`],
    ["Kost & Banyak Unit", "Untuk banyak kamar, tim RADJA AC cek daya listrik, pilihan unit, stok, dan jadwal bertahap."],
  ];

  const valueItems = [
    ["Cek stok & anggaran dulu", "Tim RADJA AC cek unit yang tersedia, pilihan brand, dan estimasi awal sebelum konfirmasi pembelian."],
    ["Bantu pilih PK", "Ukuran ruangan, daya listrik, jumlah orang, panas matahari, dan jam pemakaian ikut dipertimbangkan."],
    ["Pemasangan berdasarkan lokasi", "Panjang pipa, posisi outdoor, akses lokasi, dan tambahan material dibahas di awal."],
  ];

  const processSteps = [
    ["Kirim info awal", `Sebutkan area ${item.areaName}, ukuran ruangan, daya listrik, jumlah unit, anggaran, dan brand yang diminati.`],
    ["Tim RADJA AC cek & rekomendasikan", "Stok dicek, PK dicocokkan, pilihan brand dibandingkan, dan estimasi dijelaskan."],
    ["Foto lokasi bila perlu", "Foto titik indoor dan outdoor membantu memperkirakan jalur pipa dan posisi outdoor."],
    ["Jadwal disusun setelah data cocok", "Setelah stok, estimasi, alamat, dan kebutuhan jelas, tim menyusun pengiriman atau opsi pemasangan."],
  ];

  const faqItems = [
    ...(item.localFaq ?? []),
    ["Belum tahu butuh berapa PK?", "Kirim ukuran ruangan, daya listrik, jumlah orang, dan pola pemakaian; kapasitas PK dicocokkan dari data itu."],
    ["Brand AC apa saja yang tersedia?", "Stok bisa dicek untuk Gree, Daikin, Midea, Hisense, Sharp, Panasonic, Samsung, Aqua, TCL, dan brand lain sesuai ketersediaan."],
  ];

  const areaContent = resolveAreaContent(item);

  const structuredData = [
    breadcrumbSchema([
      ["Beranda", routes.home],
      ["Jual AC", routes.jualAc],
      [item.label, item.path],
    ]),
    serviceSchema({
      name: item.label,
      description: item.description,
      url: item.path,
      serviceType: "Penjualan & pemasangan AC",
      areaServed: item.areaName,
    }),
    faqSchema(faqItems),
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7fbff] text-slate-950">
      <JsonLd data={structuredData} />
      <section className="relative overflow-hidden border-b border-blue-100 bg-[linear-gradient(180deg,#f8fdff_0%,#eefbff_100%)] px-4 pb-10 pt-12 sm:px-6 lg:px-8 lg:pb-16 lg:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:gap-16">
          <div>
            <Link href={routes.jualAc} className="mb-5 inline-flex text-sm font-black text-blue-700 transition hover:text-slate-950">
              ← Kembali ke Jual AC
            </Link>
            <div className="mb-5 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm text-blue-700">
              {item.eyebrow}
            </div>
            <h1 className="mb-3 max-w-3xl text-2xl font-black leading-[1.08] tracking-[-0.03em] sm:text-3xl md:text-4xl xl:text-5xl">
              {item.h1}
            </h1>
            <p className="mb-5 max-w-2xl text-sm font-bold leading-6 text-blue-700">
              Cek stok, anggaran, PK, pembayaran, dan jadwal sebelum pembelian.
            </p>
            <p className="mb-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">{item.intro}</p>
            <div className="mb-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:flex-wrap">
              <WhatsappLink className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-4 font-bold text-slate-950 shadow-[0_18px_50px_rgba(37,211,102,0.2)] transition hover:-translate-y-0.5 hover:bg-[#20BA5A]" source={item.label} intent={item.waIntent} area={item.waArea} pageType="area">
                {item.ctaLabel ?? `Cek AC ${item.areaName}`}
              </WhatsappLink>
              <a href="#estimasi-anggaran" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-4 font-black text-slate-900 shadow-sm transition hover:bg-slate-50">
                Lihat Estimasi Anggaran
              </a>
              <Link href={routes.katalog} className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-4 font-black text-slate-900 shadow-sm transition hover:bg-slate-50">
                Lihat Katalog AC
              </Link>
            </div>
            <p className="mb-5 max-w-2xl text-center text-sm leading-6 text-slate-500 lg:text-left">
              Mulai konsultasi dari data ruangan. Kirim ukuran ruangan, daya listrik, anggaran, lokasi, dan jumlah unit.
            </p>
            <div className="mb-5 flex flex-wrap justify-center gap-2 text-sm text-slate-600 lg:justify-start">
              {heroChips.map((chip) => <span key={chip} className="rounded-full border border-slate-200 bg-white px-3 py-1">{chip}</span>)}
            </div>
            <div className="text-center text-xs leading-6 text-slate-400 sm:text-sm lg:text-left">
              Area terkait: {relatedAreas.map((area, index) => (
                <span key={area.path}>
                  <Link href={area.path} className="font-semibold text-blue-700/80 hover:text-blue-700">{area.areaName}</Link>{index < relatedAreas.length - 1 ? <span>, </span> : null}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[520px] lg:mr-0">
            <div className="overflow-hidden rounded-[1.7rem] border border-slate-200 bg-[#f7fbff]/75 p-3 shadow-[0_30px_90px_rgba(8,20,47,0.42)]">
              <Image src="/photos/showroom/showroom-multibrand-radja-ac-purwokerto-01.webp" alt={`Showroom RADJA AC untuk konsultasi jual AC ${item.areaName}`} width={900} height={1100} className="h-[340px] w-full rounded-[1.35rem] object-cover object-center sm:h-[430px]" sizes="(min-width: 1024px) 520px, 100vw" priority />
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2.5 sm:gap-3">
              {proofImages.map(([label, src, alt]) => (
                <div key={src} className="group relative overflow-hidden rounded-[18px] border border-slate-200 bg-white shadow-[0_18px_45px_rgba(8,20,47,0.24)] sm:rounded-[22px]">
                  <Image src={src} alt={alt} width={420} height={300} sizes="(min-width: 1024px) 250px, 50vw" className="h-[118px] w-full object-cover transition duration-300 group-hover:scale-105 sm:h-[140px] lg:h-[136px]" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/70 to-transparent px-2 pb-2 pt-7 text-center text-[11px] font-black text-white sm:text-xs">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {(areaContent.localContext ||
        areaContent.benefits.length ||
        areaContent.cases.length ||
        areaContent.landmarks.length ||
        areaContent.buyerGuide ||
        areaContent.clusterFaq.length) ? (
        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
          <SectionTitle
            eyebrow={`SEPUTAR ${item.areaName.toUpperCase()}`}
            title={`Konteks lokal AC di ${item.areaName}`}
            description={areaContent.localContext ?? undefined}
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {areaContent.benefits.length ? (
              <div className="rounded-[1.45rem] border border-slate-200 bg-white p-6">
                <h3 className="mb-4 text-lg font-black text-slate-950">{`Kenapa relevan di ${item.areaName}`}</h3>
                <ul className="space-y-3">
                  {areaContent.benefits.map((benefit) => (
                    <li key={benefit} className="rounded-2xl border border-slate-200 bg-[#f8fbff] p-4 text-sm font-semibold leading-6 text-slate-700">
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {areaContent.cases.length ? (
              <div className="rounded-[1.45rem] border border-slate-200 bg-white p-6">
                <h3 className="mb-4 text-lg font-black text-slate-950">{`Contoh kebutuhan dari ${item.areaName}`}</h3>
                <ul className="space-y-3">
                  {areaContent.cases.map(([caseTitle, caseDetail]) => (
                    <li key={caseTitle} className="rounded-2xl border border-slate-200 bg-[#f8fbff] p-4 text-sm leading-6 text-slate-700">
                      <span className="block font-black text-slate-950">{caseTitle}</span>
                      {caseDetail ? <span className="mt-1 block text-slate-600">{caseDetail}</span> : null}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {areaContent.landmarks.length ? (
              <div className="rounded-[1.45rem] border border-slate-200 bg-white p-6">
                <h3 className="mb-4 text-lg font-black text-slate-950">Landmark &amp; titik lokal yang sering dilayani</h3>
                <div className="flex flex-wrap gap-2">
                  {areaContent.landmarks.map((landmark) => (
                    <span key={landmark} className="rounded-full border border-slate-200 bg-[#f8fbff] px-3 py-2 text-xs font-bold text-slate-700">
                      {landmark}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          {areaContent.buyerGuide ? (
            <div className="mt-6 rounded-[1.7rem] border border-blue-100 bg-blue-50/60 p-6 sm:p-8">
              <h3 className="mb-2 text-xl font-black text-slate-950">{areaContent.buyerGuide.title}</h3>
              {areaContent.buyerGuide.intro ? (
                <p className="mb-5 max-w-3xl text-sm leading-7 text-slate-600">{areaContent.buyerGuide.intro}</p>
              ) : null}
              <div className="grid gap-4 md:grid-cols-3">
                {areaContent.buyerGuide.points.map(([heading, detail]) => (
                  <div key={heading} className="rounded-[1.25rem] border border-slate-200 bg-white p-5">
                    <h4 className="mb-2 text-base font-black text-slate-950">{heading}</h4>
                    <p className="text-sm leading-6 text-slate-600">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {areaContent.clusterFaq.length ? (
            <div className="mt-6">
              <h3 className="mb-4 text-lg font-black text-slate-950">{`Pertanyaan seputar AC di ${item.areaName}`}</h3>
              <div className="grid gap-3 md:grid-cols-2">
                {areaContent.clusterFaq.map(([question, answer]) => (
                  <details key={question} className="group rounded-[1.25rem] border border-slate-200 bg-white p-5">
                    <summary className="cursor-pointer list-none text-sm font-black text-slate-950">{question}</summary>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{answer}</p>
                  </details>
                ))}
              </div>
            </div>
          ) : null}
        </section>
      ) : null}

      <section id="estimasi-anggaran" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="rounded-[1.7rem] border border-blue-100 bg-blue-50 p-5 sm:p-6 lg:p-8">
          <h2 className="mb-3 text-center text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">Estimasi Anggaran AC + Pasang</h2>
          <p className="mx-auto mb-4 max-w-2xl text-center text-sm leading-7 text-slate-600">Gunakan tabel ini sebagai patokan awal. Angka akhir tetap mengikuti brand, PK, stok, alamat, opsi pembayaran, dan kondisi pemasangan di area {item.areaName}.</p>
          <div className="mx-auto mb-4 grid max-w-5xl gap-3 sm:grid-cols-3">
            {pricePackages.map(([priceRange, brands, description]) => (
              <div key={priceRange} className="rounded-[22px] border border-slate-200 bg-[#f7fbff]/45 p-4 text-center">
                <p className="mb-3 text-xl font-black text-slate-950 sm:text-2xl">{brands}</p>
                <p className="rounded-2xl border border-slate-200 bg-white px-3 py-3 text-sm font-semibold leading-6 text-slate-600">{description}</p>
                <p className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-blue-700/80">{priceRange}</p>
              </div>
            ))}
          </div>
          <div className="mx-auto mb-4 max-w-5xl rounded-[22px] border border-blue-100 bg-blue-50 p-4">
            <p className="mb-3 text-center text-xs font-black uppercase tracking-[0.18em] text-blue-700">Paket standar termasuk</p>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {packageIncludes.map((packageItem) => <div key={packageItem} className="flex items-center gap-2 text-sm font-semibold text-slate-600"><span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-black text-white">✓</span>{packageItem}</div>)}
            </div>
          </div>
          <div className="mt-5 flex justify-center">
            <WhatsappLink className="inline-flex w-full items-center justify-center rounded-full bg-[#25D366] px-5 py-3 text-sm font-black text-slate-950 transition hover:bg-[#20BA5A] sm:w-auto" source={`${item.label} - Estimasi Anggaran`} intent={item.waIntent} area={item.waArea} pageType="area">Cek Anggaran Area Ini</WhatsappLink>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <SectionTitle eyebrow="KEBUTUHAN BANYAK UNIT" title={`Butuh AC banyak unit di ${item.areaName}? Jangan cari stok satu-satu.`} description={`Untuk toko, kost, ruko, kantor, rumah banyak ruangan, proyek, pengadaan, atau kebutuhan banyak unit di ${item.areaName}, RADJA AC mengecek stok, menyusun pilihan brand, estimasi anggaran, pengiriman, dan opsi pemasangan.`} />
        <div className="grid gap-5 md:grid-cols-3">
          {bulkCards.map(([title, description]) => <div key={title} className="rounded-[1.45rem] border border-slate-200 bg-white p-6 text-center"><div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-2xl text-blue-700">✓</div><h2 className="mb-3 text-xl font-black text-slate-950">{title}</h2><p className="text-sm leading-7 text-slate-600">{description}</p></div>)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <SectionTitle eyebrow="KONSULTASI PEMBELIAN" title="Anggaran murah tidak ada artinya kalau PK salah dan biaya pasang belum dihitung" description="Yang sering jadi masalah: PK tidak sesuai ruangan, biaya pasang belum jelas, atau stok kosong saat mau beli. RADJA AC kerja sebaliknya — stok dicek dulu, kebutuhan dihitung, estimasi dijelaskan sebelum pembelian." />
        <div className="grid gap-5 md:grid-cols-3">
          {valueItems.map(([title, description]) => <div key={title} className="rounded-[1.45rem] border border-slate-200 bg-white p-6 text-center"><div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-2xl text-blue-700">✓</div><h2 className="mb-3 text-xl font-black text-slate-950">{title}</h2><p className="text-sm leading-7 text-slate-600">{description}</p></div>)}
        </div>
      </section>

      <AreaProcess item={item} processSteps={processSteps} />

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <SectionTitle eyebrow="PILIHAN AC" title="Mulai dari brand atau kebutuhan" description="Saat memilih merek, mulai dari ukuran ruangan, daya listrik, anggaran, dan jam pemakaian." />
        <div className="mb-5 grid grid-cols-2 gap-4 lg:grid-cols-3">{brandLinks.map(([title, href]) => <Link key={href} href={href} className="group rounded-[22px] border border-slate-200 bg-white p-4 transition hover:-translate-y-1 hover:border-blue-200"><h3 className="mb-2 text-lg font-black text-slate-950">{title}</h3><span className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 sm:text-sm">Lihat pilihan →</span></Link>)}</div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{categoryLinks.map(([title, href, description]) => <Link key={href} href={href} className="rounded-[1.35rem] border border-slate-200 bg-white p-5 text-center transition hover:-translate-y-1 hover:border-blue-200"><h3 className="mb-3 text-base font-black text-slate-950 sm:text-lg">{title}</h3><p className="text-xs leading-6 text-slate-500">{description}</p></Link>)}</div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <SectionTitle eyebrow="LINK PENTING" title="Halaman pendukung sebelum chat" />
        <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3">{pageLinks.map(([label, href]) => <Link key={href} href={href} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-black text-slate-700 transition hover:-translate-y-1 hover:border-blue-300/40 hover:text-blue-700">{label}</Link>)}</div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="rounded-[1.7rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-blue-700">
                TRUST & PEMBAYARAN
              </div>
              <h2 className="mb-4 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                Bukti aktivitas RADJA AC dan pembayaran yang bisa dikonfirmasi dulu
              </h2>
              <p className="mb-5 text-sm leading-7 text-slate-600 sm:text-base">{paymentNote}</p>
              <Link href={routes.buktiPengirimanProyek} className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-black text-slate-950 transition hover:bg-slate-100">
                Lihat Bukti Pengiriman
              </Link>
            </div>
            <div className="grid gap-3">
              {trustBullets.map((point) => (
                <div key={point} className="rounded-[1.15rem] border border-slate-200 bg-[#f8fbff] p-4 text-sm font-semibold leading-6 text-slate-700">
                  {point}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 rounded-[1.25rem] border border-blue-100 bg-blue-50/50 p-4">
            <h3 className="mb-3 text-sm font-black uppercase tracking-[0.14em] text-blue-700">Kebutuhan lokal yang sering dicek</h3>
            <div className="flex flex-wrap gap-2">
              {keywordVariants.map((keyword) => (
                <span key={keyword} className="rounded-full bg-white px-3 py-2 text-xs font-bold text-slate-700 shadow-sm">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>

        <AreaFaq areaName={item.areaName} faqItems={faqItems} />
      </section>

      <AreaFinalCta item={item} />
    </main>
  );
}
