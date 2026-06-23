import Image from "next/image";
import Link from "next/link";
import { routes } from "@/content/routes";
import WhatsappLink from "@/components/ui/WhatsappLink";
import JsonLd from "@/components/seo/JsonLd";
import AreaFinalCta from "@/components/area/AreaFinalCta";
import { typography } from "@/lib/typography";

const quickAnswers = [
  ["Kirim ke Cilacap?", "Bisa, cek alamat dulu"],
  ["Bisa pasang?", "Bisa dikonsultasikan"],
  ["Budget awal", "Mulai 3 jutaan"],
  ["Area pesisir", "Posisi outdoor dicek"],
];

const buyingPaths = [
  ["Rumah / ruko panas", "Cek ukuran ruang, daya listrik, dan posisi outdoor sebelum pilih PK."],
  ["Toko & kantor", "Butuh dingin stabil saat jam ramai; stok dan jadwal dicek dulu."],
  ["Banyak unit / proyek", "Spesifikasi bisa diseragamkan, lengkap dengan faktur dan jadwal bertahap."],
  ["Dekat pesisir", "Outdoor jangan asal taruh; udara asin bikin unit lebih cepat berkarat."],
];

const compactPriceNotes = [
  "Kamar kecil, kontrakan, toko kecil",
  "Rumah harian, ruko, kantor kecil",
  "Pemakaian lama, kamar utama, ruang kerja",
];

const compactProcess = [
  ["Kirim data ruang", "Area, ukuran, daya listrik, jumlah unit."],
  ["Cek PK & stok", "Tim cocokkan kapasitas dan pilihan brand."],
  ["Foto titik pasang", "Bantu cek indoor, outdoor, dan jalur pipa."],
  ["Jadwal jelas", "Kirim/pasang setelah stok dan alamat cocok."],
];

export default function CilacapBenchmarkPage({
  item,
  structuredData,
  proofImages,
  pricePackages,
  packageIncludes,
  brandLinks,
  categoryLinks,
  trustBullets,
  faqItems,
}) {
  const visibleBrands = brandLinks.slice(0, 6);
  const visibleCategories = categoryLinks.slice(0, 3);
  const visibleAreas = item.nearbyAreaLinks ?? [];
  const visibleFaq = faqItems.slice(0, 5);
  const finalCtaItem = { ...item, ctaLabel: "Cari AC untuk area Cilacap? Mulai dari data ruangan." };

  return (
    <main id="main-content" className="min-h-screen bg-[#f7fbff] text-slate-950">
      <JsonLd data={structuredData} />

      <section className="border-b border-blue-100 bg-[linear-gradient(180deg,#f8fdff_0%,#eefbff_100%)] px-4 pb-7 pt-8 sm:px-6 lg:px-8 lg:pb-12 lg:pt-14">
        <div className="grid items-center gap-7 lg:grid-cols-[0.98fr_1.02fr] lg:gap-12">
          <div>
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <Link href={routes.jualAc} prefetch={false} className="text-sm font-semibold text-blue-700 transition hover:text-slate-950">
                ← Kembali ke Jual AC
              </Link>
              <span className="rounded-full border border-blue-100 bg-white px-3 py-1 text-xs font-bold text-blue-700">Layanan AC Area Cilacap</span>
            </div>

            <h1 className={`mb-3 max-w-3xl ${typography.pageTitle}`}>{item.h1}</h1>
            <p className="mb-3 max-w-2xl text-sm font-bold leading-6 text-blue-700 sm:text-base">
              Cek PK, stok, harga, pengiriman, dan opsi pemasangan sebelum beli.
            </p>
            <p className="mb-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              {item.intro}
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <WhatsappLink className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-4 font-bold text-slate-950 shadow-[0_18px_50px_rgba(37,211,102,0.2)] transition hover:-translate-y-0.5 hover:bg-[#20BA5A]" source={item.label} intent={item.waIntent} area={item.waArea} pageType="area">
                Chat WhatsApp untuk cek AC Cilacap
              </WhatsappLink>
              <a href="#estimasi-anggaran" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-4 text-sm font-bold text-slate-900 shadow-sm transition hover:bg-slate-50">
                Lihat estimasi harga
              </a>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[560px] lg:mr-0">
            <div className="overflow-hidden rounded-[1.45rem] border border-slate-200 bg-white p-2 shadow-[0_24px_70px_rgba(8,20,47,0.24)]">
              <Image src="/photos/showroom/showroom-multibrand-radja-ac-purwokerto-01.webp" alt="Showroom dan stok AC Radja AC untuk pengiriman Cilacap" width={680} height={520} quality={72} className="h-[230px] w-full rounded-[1.15rem] object-cover object-center sm:h-[340px] lg:h-[380px]" sizes="(min-width: 1024px) 560px, 100vw" priority />
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {proofImages.slice(0, 3).map(([label, src, alt]) => (
                <div key={src} className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <Image src={src} alt={alt} width={360} height={240} sizes="(min-width: 1024px) 170px, 33vw" className="h-[76px] w-full object-cover sm:h-[104px]" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/70 to-transparent px-1.5 pb-1.5 pt-6 text-center text-[10px] font-bold text-white sm:text-xs">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
        <div className="grid gap-2 rounded-[1.45rem] border border-blue-100 bg-white p-3 shadow-sm sm:grid-cols-2 lg:grid-cols-4">
          {quickAnswers.map(([title, value]) => (
            <div key={title} className="rounded-2xl bg-blue-50/70 px-4 py-3">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-700">{title}</p>
              <p className="mt-1 text-sm font-bold text-slate-950">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-7 sm:px-6 lg:px-8 lg:py-10">
        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className={`${typography.eyebrow} text-blue-700`}>SEPUTAR CILACAP</p>
            <h2 className={`mt-3 ${typography.sectionTitle} text-slate-950`}>Pilih AC berdasarkan ruangnya, bukan cuma mereknya.</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              {item.localContext}
            </p>
          </div>
          <div className="overflow-hidden rounded-[1.6rem] border border-slate-200 bg-white">
            {buyingPaths.map(([title, detail], index) => (
              <div key={title} className="grid gap-2 border-b border-slate-100 p-4 last:border-b-0 sm:grid-cols-[0.42fr_0.58fr] sm:items-center sm:p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">{index + 1}</span>
                  <h3 className="text-base font-bold text-slate-950">{title}</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="estimasi-anggaran" className="mx-auto max-w-7xl px-4 py-7 sm:px-6 lg:px-8 lg:py-10">
        <div className="rounded-[1.7rem] border border-blue-100 bg-blue-50 p-5 sm:p-6 lg:p-8">
          <div className="mb-5 text-center">
            <p className={`${typography.eyebrow} text-blue-700`}>ESTIMASI HARGA</p>
            <h2 className={`mt-2 ${typography.sectionTitle} text-slate-950`}>Patokan awal AC + pasang</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600">Angka akhir tetap mengikuti stok, alamat, jumlah unit, dan kondisi pemasangan di Cilacap.</p>
          </div>
          <div className="grid gap-3 lg:grid-cols-3">
            {pricePackages.map(([priceRange, brands], index) => (
              <div key={priceRange} className="rounded-[1.35rem] border border-slate-200 bg-white p-5 text-center shadow-sm">
                <p className={`${typography.eyebrow} text-blue-700/80`}>{priceRange}</p>
                <h3 className="mt-3 text-lg font-bold leading-6 text-slate-950">{brands}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{compactPriceNotes[index] ?? "Cek stok dan kebutuhan ruang dulu"}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-[1.25rem] bg-white/70 p-4">
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {packageIncludes.slice(0, 4).map((packageItem) => <div key={packageItem} className="flex items-center gap-2 text-sm font-semibold text-slate-600"><span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">✓</span>{packageItem}</div>)}
            </div>
          </div>
          <div className="mt-5 flex justify-center">
            <WhatsappLink className="inline-flex w-full items-center justify-center rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-[#20BA5A] sm:w-auto" source={`${item.label} - Estimasi Anggaran`} intent={item.waIntent} area={item.waArea} pageType="area">
              Cek anggaran AC Cilacap
            </WhatsappLink>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-7 sm:px-6 lg:px-8 lg:py-10">
        <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className={`${typography.eyebrow} text-blue-700`}>ALUR BELI</p>
            <h2 className={`mt-3 ${typography.sectionTitle} text-slate-950`}>Cepat, tapi tetap dicek dulu.</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">Tujuannya bukan asal kirim unit. PK, stok, alamat, dan titik pemasangan harus jelas supaya pembelian aman.</p>
          </div>
          <div className="rounded-[1.6rem] border border-slate-200 bg-white p-4 sm:p-5">
            <div className="grid gap-3 md:grid-cols-4">
              {compactProcess.map(([title, detail], index) => (
                <div key={title} className="relative rounded-[1.15rem] bg-[#f8fbff] p-4">
                  <span className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">{index + 1}</span>
                  <h3 className="text-sm font-bold text-slate-950">{title}</h3>
                  <p className="mt-2 text-xs leading-5 text-slate-600">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-7 sm:px-6 lg:px-8 lg:py-10">
        <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="rounded-[1.7rem] border border-slate-200 bg-white p-5 sm:p-7">
            <p className={`${typography.eyebrow} text-blue-700`}>BUKTI & PEMBAYARAN</p>
            <h2 className={`mt-3 ${typography.sectionTitle} text-slate-950`}>Toko nyata, stok dicek, pengiriman dikonfirmasi.</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">{item.paymentNote}</p>
            <div className="mt-5 grid gap-3">
              {trustBullets.map((point) => (
                <div key={point} className="flex gap-3 text-sm leading-6 text-slate-700">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-[11px] font-bold text-white">✓</span>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[1.7rem] border border-blue-100 bg-blue-50/70 p-5 sm:p-7">
            <h3 className={`mb-4 ${typography.cardTitle} text-slate-950`}>Area Cilacap yang sering dicek</h3>
            <div className="flex flex-wrap gap-2">
              {(item.localLandmarks ?? []).slice(0, 7).map((landmark) => <span key={landmark} className="rounded-full bg-white px-3 py-2 text-xs font-bold text-slate-700 shadow-sm">{landmark}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-7 sm:px-6 lg:px-8 lg:py-10">
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className={`${typography.eyebrow} text-blue-700`}>PILIHAN AC</p>
            <h2 className={`mt-2 ${typography.sectionTitle} text-slate-950`}>Brand yang bisa dicek stoknya</h2>
          </div>
          <Link href={routes.katalog} prefetch={false} className="text-sm font-bold text-blue-700 hover:text-slate-950">Lihat katalog lengkap →</Link>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {visibleBrands.map(([title, href]) => <Link key={href} href={href} prefetch={false} className="rounded-2xl border border-slate-200 bg-white p-4 text-center text-sm font-bold text-slate-950 transition hover:-translate-y-1 hover:border-blue-200">{title}</Link>)}
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {visibleCategories.map(([title, href, description]) => <Link key={href} href={href} prefetch={false} className="rounded-[1.25rem] border border-slate-200 bg-white p-4 text-center transition hover:-translate-y-1 hover:border-blue-200"><h3 className="text-base font-bold text-slate-950">{title}</h3><p className="mt-2 text-xs leading-5 text-slate-500">{description}</p></Link>)}
        </div>
      </section>

      {visibleAreas.length ? (
        <section className="mx-auto max-w-7xl px-4 py-7 sm:px-6 lg:px-8 lg:py-10">
          <div className="rounded-[1.7rem] border border-slate-200 bg-white p-5 sm:p-7">
            <p className={`${typography.eyebrow} text-blue-700`}>AREA TERDEKAT</p>
            <h2 className={`mt-2 ${typography.sectionTitle} text-slate-950`}>Cek area sekitar Cilacap</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {visibleAreas.map(([areaLabel, areaPath]) => <Link key={areaPath} href={areaPath} prefetch={false} className="rounded-[1.15rem] border border-slate-200 bg-[#f8fbff] p-4 text-center transition hover:-translate-y-1 hover:border-blue-200"><span className="font-bold text-slate-950">Jual AC {areaLabel}</span><span className="mt-1 block text-xs font-bold text-blue-700">Cek stok & layanan →</span></Link>)}
            </div>
          </div>
        </section>
      ) : null}

      <section className="mx-auto max-w-7xl px-4 py-7 sm:px-6 lg:px-8 lg:py-10">
        <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className={`${typography.eyebrow} text-blue-700`}>FAQ</p>
            <h2 className={`mt-3 ${typography.sectionTitle} text-slate-950`}>Pertanyaan yang paling sering muncul</h2>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {visibleFaq.map(([question, answer]) => (
              <details key={question} className="group rounded-[1.15rem] border border-slate-200 bg-white p-4 open:border-blue-200 open:bg-blue-50/40">
                <summary className="cursor-pointer list-none text-sm font-bold leading-6 text-slate-950">{question}</summary>
                <p className="mt-3 text-sm leading-6 text-slate-600">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <AreaFinalCta item={finalCtaItem} />
    </main>
  );
}
