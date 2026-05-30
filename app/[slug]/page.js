import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { routes } from "@/content/routes";
import { buildMetadata } from "@/lib/seo";
import { areaItems, getAreaItem } from "@/content/areas";
import WhatsappLink from "@/components/ui/WhatsappLink";

export const dynamicParams = false;

const brandLinks = [
  ["Daikin", routes.brandDaikin],
  ["Gree", routes.brandGree],
  ["Midea", routes.brandMidea],
  ["Hisense", routes.brandHisense],
  ["Sharp", routes.brandSharp],
  ["Brand Lainnya", routes.brandLainnya],
];

const categoryLinks = [
  ["AC Split Rumah", routes.katalogAcSplitRumah, "Untuk kamar, ruang keluarga, kost, kontrakan, dan toko kecil."],
  ["AC Inverter", routes.katalogAcInverter, "Untuk pemakaian lama dan suhu lebih stabil."],
  ["AC Low Watt", routes.katalogAcLowWatt, "Untuk rumah dengan daya listrik terbatas."],
  ["AC Kantor & Komersial", routes.katalogAcKantorKomersial, "Untuk ruko, cafe, kantor, showroom, gedung, dan proyek."],
];

const budgetPackages = [
  ["Hemat", "Mulai 3 jutaan", "Untuk kamar kecil, kost, atau ruangan sederhana."],
  ["Populer", "3–4 jutaan", "Untuk rumah, toko kecil, dan pemakaian harian normal."],
  ["Inverter / Premium", "Mulai 4 jutaan", "Untuk pemakaian panjang atau ruangan lebih besar."],
];

const packageIncludes = [
  "Unit AC + instalasi standar",
  "Pipa 2 meter",
  "Kabel 5 meter",
  "Bracket 1 set",
  "Duct tape",
  "Selang pembuangan",
  "Vacuum AC",
];

const proofImages = [
  ["Showroom", "/photos/showroom/showroom-multibrand-radja-ac-purwokerto-01.webp", "Showroom RADJA AC"],
  ["Gudang Stok", "/photos/stock/gudang-stok-ac-radja-ac-purwokerto-01.webp", "Gudang stok AC RADJA AC"],
  ["Pengiriman", "/photos/delivery/radja-ac-persiapan-pengiriman.webp", "Persiapan pengiriman AC RADJA AC"],
  ["Material", "/photos/installation/material-instalasi-ac-radja-ac-01.webp", "Material instalasi AC RADJA AC"],
];

const primaryLinks = [
  ["Katalog AC", routes.katalog],
  ["Kalkulator PK AC", routes.kalkulatorPkAc],
  ["AC Gree", routes.brandGree],
  ["AC Daikin", routes.brandDaikin],
  ["Pengadaan AC", routes.pengadaanAc],
  ["Bukti Pengiriman", routes.buktiPengirimanProyek],
  ["Kontak", routes.kontak],
];

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-9 max-w-3xl text-center">
      <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-cyan-700">{eyebrow}</p>
      <h2 className="mb-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">{title}</h2>
      {description ? <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">{description}</p> : null}
    </div>
  );
}

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
  const relatedAreas = areaItems.filter((areaItem) => areaItem.slug !== item.slug).slice(0, 5);
  const pageLinks = item.relatedLinks?.length ? item.relatedLinks : primaryLinks;

  const heroChips = isPurwokerto
    ? ["Showroom Pamijen", "Stok dicek hari ini", "Unit + pemasangan", "Mulai 3 jutaan"]
    : ["Cek stok dulu", "Area dikonfirmasi", "Opsi pasang dicek", "Brief via WhatsApp"];

  const bulkCards = [
    ["Rumah & Kamar", `Cek AC untuk kamar tidur, ruang keluarga, dan rumah tinggal di ${item.areaName}.`],
    ["Toko, Ruko & Usaha", `Bantu pilih AC untuk ruang usaha, area pelanggan, dan kantor kecil di ${item.areaName}.`],
    ["Kost & Banyak Unit", "Untuk banyak kamar, admin bantu cek daya listrik, pilihan unit, stok, dan jadwal bertahap."],
  ];

  const valueItems = [
    ["Cek stok & budget dulu", "Admin bantu cek unit yang tersedia, opsi brand, dan estimasi awal sebelum Anda konfirmasi."],
    ["Bantu pilih PK", "Ukuran ruangan, daya listrik, jumlah orang, panas matahari, dan jam pemakaian ikut dipertimbangkan."],
    ["Pemasangan sesuai lokasi", "Panjang pipa, posisi outdoor, akses lokasi, dan tambahan material dibahas di awal."],
  ];

  const processSteps = [
    ["Kirim info awal", `Sebutkan area ${item.areaName}, ukuran ruangan, daya listrik, jumlah unit, budget, dan brand yang diminati.`],
    ["Admin cek & rekomendasikan", "Stok dicek, PK diarahkan, pilihan brand dibandingkan, dan estimasi dijelaskan."],
    ["Foto lokasi bila perlu", "Foto titik indoor dan outdoor membantu memperkirakan jalur pipa dan posisi outdoor."],
    ["Jadwal dikunci setelah cocok", "Setelah stok, estimasi, alamat, dan kebutuhan jelas, pengiriman atau opsi pemasangan dikoordinasikan."],
  ];

  const faqItems = [
    [
      `Apakah RADJA AC punya toko fisik di ${item.areaName}?`,
      isPurwokerto
        ? "RADJA AC berbasis di Pamijen, Sokaraja, Banyumas dan melayani area Purwokerto. Chat dulu agar admin bisa cek stok yang ready."
        : `RADJA AC berbasis di Banyumas. Untuk area ${item.areaName}, admin membantu konsultasi PK, cek stok, pengiriman unit, dan opsi pemasangan sesuai konfirmasi.`,
    ],
    [`Berapa estimasi budget AC untuk area ${item.areaName}?`, "Estimasi awal mulai dari 3 jutaan untuk unit + pemasangan standar tertentu. Finalnya bergantung brand, PK, stok, alamat, dan kondisi pemasangan."],
    ["Saya belum tahu butuh berapa PK, bisa dibantu?", "Bisa. Kirim ukuran ruangan, daya listrik, jumlah orang, dan pola pemakaian. Admin bantu arahkan PK yang masuk akal."],
    ["Bisa beli unit AC tanpa pemasangan?", "Bisa dibahas dengan admin. Kebutuhan unit saja, pengiriman, atau opsi pemasangan akan dikonfirmasi sesuai stok dan alamat."],
    ["Brand apa saja yang bisa dicek?", "Admin dapat membantu cek Gree, Daikin, Midea, Hisense, Sharp, Panasonic, Samsung, Aqua, TCL, dan brand lain sesuai stok terbaru."],
    [`Bisa untuk kost, kantor, toko, atau proyek di ${item.areaName}?`, "Bisa. Untuk banyak unit, kirim jumlah ruangan, ukuran ruangan, daya listrik, target budget, timeline, dan lokasi."],
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7fbff] text-slate-950">
      <section className="relative overflow-hidden border-b border-cyan-100 bg-[linear-gradient(180deg,#f8fdff_0%,#eefbff_100%)] px-4 pb-10 pt-12 sm:px-6 lg:px-8 lg:pb-16 lg:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:gap-16">
          <div>
            <Link href={routes.jualAc} className="mb-5 inline-flex text-sm font-black text-cyan-700 transition hover:text-slate-950">
              ← Kembali ke Jual AC
            </Link>
            <div className="mb-5 inline-flex rounded-full border border-cyan-100 bg-cyan-50 px-4 py-2 text-sm text-cyan-700">
              {item.eyebrow}
            </div>
            <h1 className="mb-5 max-w-3xl text-3xl font-black leading-[1.05] tracking-[-0.035em] sm:text-4xl md:text-5xl xl:text-6xl">
              {item.h1}
              <span className="block text-cyan-700">Cek stok, budget, PK, dan jadwal sebelum deal</span>
            </h1>
            <p className="mb-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">{item.intro}</p>
            <div className="mb-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:flex-wrap">
              <WhatsappLink className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-4 font-bold text-slate-950 shadow-[0_18px_50px_rgba(37,211,102,0.2)] transition hover:-translate-y-0.5 hover:bg-[#20BA5A]" source={item.label} intent={item.waIntent} area={item.waArea}>
                {item.ctaLabel ?? `Chat Admin AC ${item.areaName}`}
              </WhatsappLink>
              <a href="#estimasi-budget" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-4 font-black text-slate-900 shadow-sm transition hover:bg-slate-50">
                Lihat Estimasi Budget
              </a>
              <Link href={routes.katalog} className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-4 font-black text-slate-900 shadow-sm transition hover:bg-slate-50">
                Lihat Katalog AC
              </Link>
            </div>
            <p className="mb-5 max-w-2xl text-center text-sm leading-6 text-slate-500 lg:text-left">
              Chat dulu tidak wajib langsung deal. Kirim ukuran ruangan, daya listrik, budget, lokasi, dan jumlah unit.
            </p>
            <div className="mb-5 flex flex-wrap justify-center gap-2 text-sm text-slate-600 lg:justify-start">
              {heroChips.map((chip) => <span key={chip} className="rounded-full border border-slate-200 bg-white px-3 py-1">{chip}</span>)}
            </div>
            <div className="text-center text-xs leading-6 text-slate-400 sm:text-sm lg:text-left">
              Area terkait: {relatedAreas.map((area, index) => (
                <span key={area.slug}>
                  <Link href={area.path} className="font-semibold text-cyan-700/80 hover:text-cyan-700">{area.areaName}</Link>{index < relatedAreas.length - 1 ? <span>, </span> : null}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[520px] lg:mr-0">
            <div className="overflow-hidden rounded-[1.7rem] border border-slate-200 bg-[#f7fbff]/75 p-3 shadow-[0_30px_90px_rgba(8,20,47,0.42)]">
              <Image src="/photos/showroom/showroom-multibrand-radja-ac-purwokerto-01.webp" alt={`Showroom RADJA AC untuk konsultasi jual AC ${item.areaName}`} width={900} height={1100} className="h-[340px] w-full rounded-[1.35rem] object-cover object-center sm:h-[430px]" priority />
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2.5 sm:gap-3">
              {proofImages.map(([label, src, alt]) => (
                <div key={src} className="group relative overflow-hidden rounded-[18px] border border-slate-200 bg-white shadow-[0_18px_45px_rgba(8,20,47,0.24)] sm:rounded-[22px]">
                  <Image src={src} alt={alt} width={420} height={300} className="h-[118px] w-full object-cover transition duration-300 group-hover:scale-105 sm:h-[140px] lg:h-[136px]" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/70 to-transparent px-2 pb-2 pt-7 text-center text-[11px] font-black text-white sm:text-xs">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="estimasi-budget" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="rounded-[1.7rem] border border-cyan-100 bg-cyan-50 p-5 sm:p-6 lg:p-8">
          <h2 className="mb-3 text-center text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">Estimasi Budget AC + Pasang</h2>
          <p className="mx-auto mb-4 max-w-2xl text-center text-sm leading-7 text-slate-600">Gambaran awal supaya Anda tahu budget segini biasanya masuk pilihan apa. Estimasi tetap mengikuti brand, PK, stok, alamat, dan kondisi pemasangan di area {item.areaName}.</p>
          <div className="mx-auto mb-4 grid max-w-5xl gap-3 sm:grid-cols-3">
            {budgetPackages.map(([budget, brands, description]) => (
              <div key={budget} className="rounded-[22px] border border-slate-200 bg-[#f7fbff]/45 p-4 text-center">
                <p className="mb-3 text-2xl font-black text-slate-950">{brands}</p>
                <p className="rounded-2xl border border-slate-200 bg-white px-3 py-3 text-sm font-semibold leading-6 text-slate-600">{description}</p>
                <p className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-cyan-700/80">{budget}</p>
              </div>
            ))}
          </div>
          <div className="mx-auto mb-4 max-w-5xl rounded-[22px] border border-cyan-100 bg-cyan-50 p-4">
            <p className="mb-3 text-center text-xs font-black uppercase tracking-[0.18em] text-cyan-700">Paket standar termasuk</p>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {packageIncludes.map((packageItem) => <div key={packageItem} className="flex items-center gap-2 text-sm font-semibold text-slate-600"><span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-600 text-xs font-black text-white">✓</span>{packageItem}</div>)}
            </div>
          </div>
          <div className="mt-5 flex justify-center">
            <WhatsappLink className="inline-flex w-full items-center justify-center rounded-full bg-[#25D366] px-5 py-3 text-sm font-black text-slate-950 transition hover:bg-[#20BA5A] sm:w-auto" source={`${item.label} - Estimasi Budget`} intent={item.waIntent} area={item.waArea}>Sudah Punya Budget? Chat Sekarang</WhatsappLink>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <SectionTitle eyebrow="KEBUTUHAN BANYAK UNIT" title={`Butuh AC banyak unit di ${item.areaName}? Jangan cari stok satu-satu.`} description={`Untuk toko, kost, ruko, kantor, rumah banyak ruangan, atau proyek ringan di ${item.areaName}, RADJA AC bantu cek stok, pilihan brand, estimasi budget, pengiriman, dan opsi pemasangan.`} />
        <div className="grid gap-5 md:grid-cols-3">
          {bulkCards.map(([title, description]) => <div key={title} className="rounded-[1.45rem] border border-slate-200 bg-white p-6 text-center"><div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-2xl text-cyan-700">✓</div><h2 className="mb-3 text-xl font-black text-slate-950">{title}</h2><p className="text-sm leading-7 text-slate-600">{description}</p></div>)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <SectionTitle eyebrow="KONSULTASI PEMBELIAN" title="Budget murah tidak ada artinya kalau PK salah dan biaya pasang belum dihitung" description="Yang sering jadi masalah: PK tidak sesuai ruangan, biaya pasang belum jelas, atau stok kosong setelah konfirmasi. RADJA AC kerja sebaliknya — stok dicek dulu, kebutuhan dihitung, estimasi dijelaskan sebelum deal." />
        <div className="grid gap-5 md:grid-cols-3">
          {valueItems.map(([title, description]) => <div key={title} className="rounded-[1.45rem] border border-slate-200 bg-white p-6 text-center"><div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-2xl text-cyan-700">✓</div><h2 className="mb-3 text-xl font-black text-slate-950">{title}</h2><p className="text-sm leading-7 text-slate-600">{description}</p></div>)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div><div className="mb-4 inline-flex rounded-full border border-cyan-100 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700">ALUR BELI AC</div><h2 className="mb-5 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">Cek kebutuhan dulu, baru kunci stok dan jadwal</h2><p className="mb-6 text-sm leading-7 text-slate-600 sm:text-base">Mulai dari area dan ukuran ruangan, admin bantu cek stok, arahkan PK, jelaskan estimasi, lalu jadwal dikunci setelah cocok.</p><WhatsappLink className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-4 font-bold text-slate-950 transition hover:bg-[#20BA5A]" source={`${item.label} - Alur Beli`} intent={item.waIntent} area={item.waArea}>Cek Budget, Stok & Jadwal</WhatsappLink></div>
          <div className="grid gap-4">{processSteps.map(([title, description], index) => <div key={title} className="rounded-[1.45rem] border border-slate-200 bg-white p-5"><div className="mb-3 flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-300 text-sm font-black text-slate-950">{index + 1}</span><h3 className="text-lg font-black text-slate-950">{title}</h3></div><p className="text-sm leading-7 text-slate-600">{description}</p></div>)}</div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <SectionTitle eyebrow="PILIHAN AC" title="Mulai dari brand atau kebutuhan" description="Jika belum yakin memilih merek, mulai dari ukuran ruangan, daya listrik, budget, dan jam pemakaian." />
        <div className="mb-5 grid grid-cols-2 gap-4 lg:grid-cols-3">{brandLinks.map(([title, href]) => <Link key={href} href={href} className="group rounded-[22px] border border-slate-200 bg-white p-4 transition hover:-translate-y-1 hover:border-cyan-200"><h3 className="mb-2 text-lg font-black text-slate-950">{title}</h3><span className="inline-flex items-center gap-2 text-xs font-bold text-cyan-700 sm:text-sm">Lihat pilihan →</span></Link>)}</div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{categoryLinks.map(([title, href, description]) => <Link key={href} href={href} className="rounded-[1.35rem] border border-slate-200 bg-white p-5 text-center transition hover:-translate-y-1 hover:border-cyan-200"><h3 className="mb-3 text-base font-black text-slate-950 sm:text-lg">{title}</h3><p className="text-xs leading-6 text-slate-500">{description}</p></Link>)}</div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <SectionTitle eyebrow="LINK PENTING" title="Halaman pendukung sebelum chat" />
        <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3">{pageLinks.map(([label, href]) => <Link key={href} href={href} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-black text-slate-700 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:text-cyan-700">{label}</Link>)}</div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <SectionTitle eyebrow="FAQ" title={`Pertanyaan umum jual AC ${item.areaName}`} />
        <div className="grid gap-5 md:grid-cols-2">{faqItems.map(([question, answer]) => <div key={question} className="rounded-[1.45rem] border border-slate-200 bg-white p-6"><h3 className="mb-3 font-bold text-slate-950">{question}</h3><p className="text-sm leading-7 text-slate-600">{answer}</p></div>)}</div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-20 lg:pt-10">
        <div className="rounded-[1.7rem] border border-[#25D366]/20 bg-[#25D366]/10 p-6 text-center sm:p-10"><h2 className="mx-auto mb-5 max-w-3xl text-3xl font-black tracking-tight sm:text-4xl">Mau cek AC untuk area {item.areaName}? Mulai dari sini.</h2><p className="mx-auto mb-7 max-w-2xl text-sm leading-7 text-slate-600">Sebutkan area/kecamatan, ukuran ruangan, daya listrik, jumlah unit, dan budget awal. Admin bantu cek stok dan estimasi sebelum deal.</p><WhatsappLink className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-4 font-bold text-slate-950 shadow-[0_18px_50px_rgba(37,211,102,0.2)] transition hover:-translate-y-0.5 hover:bg-[#20BA5A]" source={`${item.label} - Final CTA`} intent={item.waIntent} area={item.waArea}>Cek Stok & Budget Sekarang</WhatsappLink></div>
      </section>
    </main>
  );
}
