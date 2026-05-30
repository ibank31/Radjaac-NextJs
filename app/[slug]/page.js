import Image from "next/image";
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
  ["Kalkulator PK AC", routes.kalkulatorPkAc],
  ["AC Gree", routes.brandGree],
  ["AC Daikin", routes.brandDaikin],
  ["Pengadaan AC", routes.pengadaanAc],
  ["Bukti Pengiriman", routes.buktiPengirimanProyek],
  ["Kontak", routes.kontak],
];

const catalogCards = [
  ["AC Split Rumah", routes.katalogAcSplitRumah, "Untuk kamar, ruang keluarga, kost, kontrakan, dan rumah tinggal."],
  ["AC Low Watt", routes.katalogAcLowWatt, "Untuk rumah dengan daya listrik terbatas atau kebutuhan hemat daya."],
  ["AC Inverter", routes.katalogAcInverter, "Untuk ruangan yang sering dipakai lama dan butuh suhu lebih stabil."],
  ["AC Kantor & Komersial", routes.katalogAcKantorKomersial, "Untuk toko, ruko, kantor, klinik, cafe, showroom, gedung, dan proyek."],
];

const brandCards = [
  ["Gree", routes.brandGree],
  ["Daikin", routes.brandDaikin],
  ["Midea", routes.brandMidea],
  ["Hisense", routes.brandHisense],
  ["Sharp", routes.brandSharp],
  ["Panasonic", routes.brandPanasonic],
];

const proofImages = [
  {
    src: "/photos/showroom/showroom-multibrand-radja-ac-purwokerto-01.webp",
    alt: "Showroom multi-brand RADJA AC",
  },
  {
    src: "/photos/stock/gudang-stok-ac-radja-ac-purwokerto-01.webp",
    alt: "Gudang stok AC RADJA AC",
  },
  {
    src: "/photos/delivery/radja-ac-persiapan-pengiriman.webp",
    alt: "Persiapan pengiriman AC RADJA AC",
  },
];

const briefFields = [
  "Area/kecamatan dan alamat pengiriman",
  "Ukuran ruangan dan jumlah unit",
  "Daya listrik dan pola pemakaian",
  "Butuh unit saja atau opsi pemasangan",
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
    image: "/photos/showroom/showroom-multibrand-radja-ac-purwokerto-01.webp",
  });
}

export default async function AreaPage({ params }) {
  const { slug } = await params;
  const item = getAreaItem(slug);

  if (!item) {
    notFound();
  }

  const relatedAreas = areaItems.filter((areaItem) => areaItem.slug !== item.slug).slice(0, 8);
  const pageLinks = item.relatedLinks?.length ? item.relatedLinks : primaryLinks;

  const faqItems = [
    [
      `Apakah RADJA AC punya toko fisik di ${item.areaName}?`,
      `RADJA AC berbasis di Banyumas. Untuk area ${item.areaName}, admin membantu konsultasi PK, cek stok, pengiriman unit, dan opsi pemasangan yang dikonfirmasi sesuai alamat serta jadwal.`,
    ],
    [
      `Bisa bantu pilih PK AC untuk area ${item.areaName}?`,
      "Bisa. Kirim ukuran ruangan, tinggi plafon bila ada, kondisi panas matahari, daya listrik, dan pola pemakaian agar admin bisa memberi arahan yang lebih masuk akal.",
    ],
    [
      "Bisa beli unit AC tanpa pemasangan?",
      "Bisa dibahas dengan admin. Kebutuhan unit saja, pengiriman, atau opsi pemasangan akan dikonfirmasi sesuai stok, alamat, jumlah unit, dan jadwal.",
    ],
    [
      "Brand apa saja yang bisa dicek?",
      "Admin dapat membantu cek pilihan brand seperti Gree, Daikin, Midea, Hisense, Sharp, Panasonic, dan brand lain sesuai stok terbaru.",
    ],
    [
      "Harga AC tergantung apa saja?",
      "Harga dan estimasi akhir dipengaruhi brand, PK, tipe unit, stok, promo, alamat pengiriman, panjang pipa, posisi outdoor, serta kebutuhan pemasangan tambahan.",
    ],
  ];

  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.24),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(37,211,102,0.18),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-24">
          <div>
            <Link
              href={routes.jualAc}
              className="inline-flex text-sm font-black text-cyan-200 transition hover:text-white"
            >
              ← Kembali ke Jual AC
            </Link>

            <p className="mt-8 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-cyan-100">
              {item.eyebrow}
            </p>

            <h1 className="mt-7 max-w-4xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              {item.h1}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              {item.intro}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <WhatsappLink
                className="inline-flex w-full items-center justify-center rounded-full bg-[#25D366] px-7 py-4 text-sm font-black text-slate-950 shadow-[0_18px_42px_rgba(37,211,102,0.22)] transition hover:-translate-y-0.5 hover:bg-[#20BA5A] sm:w-auto"
                source={item.label}
                intent={item.waIntent}
                area={item.waArea}
              >
                {item.ctaLabel ?? `Chat WhatsApp untuk AC ${item.areaName}`}
              </WhatsappLink>
              <Link
                href={routes.kalkulatorPkAc}
                className="inline-flex w-full items-center justify-center rounded-full border border-white/25 px-7 py-4 text-sm font-black text-white transition hover:bg-white/10 sm:w-auto"
              >
                Hitung PK Dulu
              </Link>
              <Link
                href={routes.katalog}
                className="inline-flex w-full items-center justify-center rounded-full border border-white/25 bg-white/10 px-7 py-4 text-sm font-black text-white transition hover:bg-white/15 sm:w-auto"
              >
                Lihat Katalog AC
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                ["Area", item.areaName],
                ["Fokus", "PK, stok & brand"],
                ["Brief WA", "Ukuran + daya + unit"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-3xl border border-white/10 bg-white/10 p-5">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-100">{label}</p>
                  <p className="mt-2 text-lg font-black">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:pt-4">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-3 shadow-2xl">
              <Image
                src="/photos/showroom/showroom-multibrand-radja-ac-purwokerto-01.webp"
                alt={`Showroom RADJA AC untuk konsultasi jual AC ${item.areaName}`}
                width={900}
                height={1100}
                className="h-[430px] w-full rounded-[1.5rem] object-cover sm:h-[520px]"
                priority
              />
            </div>
            <div className="relative -mt-12 mx-4 rounded-3xl border border-white/10 bg-white p-6 text-slate-950 shadow-2xl sm:mx-6">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-500">
                Sebelum order
              </p>
              <p className="mt-2 text-2xl font-black">Kirim brief, baru admin cek opsi AC</p>
              <div className="mt-4 grid gap-2">
                {briefFields.map((field) => (
                  <p key={field} className="flex gap-2 text-sm font-bold leading-6 text-slate-700">
                    <span className="text-[#25D366]">✓</span>
                    {field}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-700">
              Kebutuhan area
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Kebutuhan AC di {item.areaName} tidak cukup dijawab dengan harga unit saja.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              {item.localContext}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {item.commonNeeds.map((point) => (
              <div key={point} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-base font-black text-slate-950">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-700">
                Yang dicek sebelum pembelian
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Chat WhatsApp sebaiknya langsung membawa data yang bisa dicek admin.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                {item.coverageNote}
              </p>
              <WhatsappLink
                className="mt-8 inline-flex rounded-full bg-[#25D366] px-6 py-4 text-sm font-black text-slate-950 transition hover:bg-[#20BA5A]"
                source={`${item.label} - Brief Section`}
                intent={item.waIntent}
                area={item.waArea}
              >
                Kirim Brief via WhatsApp
              </WhatsappLink>
            </div>

            <div className="space-y-4">
              {item.buyingChecks.map((point, index) => (
                <div key={point} className="flex gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-950 text-sm font-black text-white">
                    {index + 1}
                  </div>
                  <p className="text-sm font-bold leading-7 text-slate-700">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-700">
              Kategori AC
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Pilih kategori berdasarkan ruangan, daya listrik, dan pola pemakaian.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Dari AC split rumah, low watt, inverter, sampai kebutuhan kantor, komersial, proyek, dan banyak unit,
              admin bisa bantu cek opsi sesuai stok dan kebutuhan area {item.areaName}.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {catalogCards.map(([label, href, text]) => (
              <Link
                key={href}
                href={href}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl"
              >
                <p className="text-lg font-black text-slate-950">{label}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
                <p className="mt-5 text-sm font-black text-cyan-700 group-hover:text-cyan-900">
                  Lihat kategori →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-200">
                Bukti aktivitas
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                Ada dokumentasi showroom, stok, dan pengiriman RADJA AC.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300">
                Calon pembeli bisa melihat bukti aktivitas sebelum konsultasi: display AC, gudang stok,
                persiapan pengiriman, pengadaan banyak unit, material, dan dokumentasi lapangan.
              </p>
              <Link
                href={routes.buktiPengirimanProyek}
                className="mt-8 inline-flex rounded-full bg-white px-6 py-4 text-sm font-black text-slate-950 transition hover:bg-slate-200"
              >
                Lihat Bukti Pengiriman & Proyek
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {proofImages.map((image) => (
                <div key={image.src} className="overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-2">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={420}
                    height={520}
                    className="h-72 w-full rounded-2xl object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-700">
              Brand & halaman terkait
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Mulai dari area, brand, kategori, atau kebutuhan AC.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Jika belum yakin, mulai dari konsultasi. Jika sudah punya preferensi,
              cek halaman brand atau kategori AC yang paling relevan.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {brandCards.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="rounded-2xl border border-slate-200 px-5 py-4 text-sm font-black text-slate-950 transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg"
                >
                  AC {label}
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-cyan-50 p-8">
            <h3 className="text-2xl font-black text-slate-950">Link penting</h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {pageLinks.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="rounded-full bg-white px-4 py-2 text-sm font-black text-slate-950 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  {label}
                </Link>
              ))}
            </div>

            <h3 className="mt-10 text-2xl font-black text-slate-950">Area lain</h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {relatedAreas.map((area) => (
                <Link
                  key={area.slug}
                  href={area.path}
                  className="rounded-2xl bg-white px-5 py-4 text-sm font-black text-slate-950 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  {area.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-700">
              FAQ Jual AC {item.areaName}
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Pertanyaan yang sering muncul sebelum chat admin.
            </h2>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl gap-4">
            {faqItems.map(([question, answer]) => (
              <div key={question} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-black text-slate-950">{question}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-8 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-700">
              Garansi & bantuan klaim
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950">
              Unit dan pemasangan tetap dikonfirmasi sesuai kondisi.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Garansi unit mengikuti ketentuan resmi brand. Detail stok, tipe, harga,
              pengiriman, dan opsi pemasangan dikonfirmasi admin sebelum pembelian.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {warrantyHighlights.map((point) => (
              <div key={point} className="rounded-2xl bg-slate-50 p-5 text-sm font-bold leading-6 text-slate-700">
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-20 text-center sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-slate-950 p-8 text-white sm:p-10">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-200">
            Konsultasi AC {item.areaName}
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
            Mau cek AC untuk area {item.areaName}?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300">
            Kirim ukuran ruangan, lokasi, daya listrik, jumlah unit, brand yang diminati,
            dan apakah butuh pemasangan. Admin RADJA AC bantu cek opsi yang masuk akal.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <WhatsappLink
              className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-7 py-4 text-sm font-black text-slate-950 transition hover:bg-[#20BA5A]"
              source={item.label}
              intent={item.waIntent}
              area={item.waArea}
            >
              Chat Admin RADJA AC
            </WhatsappLink>
            <Link
              href={routes.kontak}
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-4 text-sm font-black text-white transition hover:bg-white/10"
            >
              Lihat Kontak
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
