import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { staticPageMetadata } from "@/content/static-pages";
import { routes } from "@/content/routes";
import { legalEntityCopy } from "@/content/policies";
import { breadcrumbSchema } from "@/lib/schema";
import JsonLd from "@/components/seo/JsonLd";
import WhatsappLink from "@/components/ui/WhatsappLink";

export const metadata = buildMetadata(staticPageMetadata.pengadaanAc);

const breadcrumbStructuredData = breadcrumbSchema([
  ["Beranda", routes.home],
  ["Pengadaan AC", routes.pengadaanAc],
]);

const catalogLinks = [
  ["Katalog AC", routes.katalog],
  ["AC 1/2 PK", routes.katalogAcSetengahPk],
  ["AC Low Watt", routes.katalogAcLowWatt],
  ["AC Inverter", routes.katalogAcInverter],
  ["AC Kantor & Komersial", routes.katalogAcKantorKomersial],
  ["Kalkulator PK AC", routes.kalkulatorPkAc],
];

const brandLinks = [
  ["Brand Daikin", routes.brandDaikin],
  ["Brand Midea", routes.brandMidea],
  ["Brand Hisense", routes.brandHisense],
  ["Brand Sansui", routes.brandSansui],
  ["Brand Gree", routes.brandGree],
];

const authorizedBrands = ["Daikin", "Midea", "Hisense", "Sansui"];
const stockBrands = ["Gree", "Sharp", "Samsung", "Panasonic", "Ariston"];

const projectTypes = [
  {
    label: "Kost / Apartemen",
    title: "Kost, Apartemen & Hunian Banyak Kamar",
    desc: "Banyak kamar, kontrakan, mess, atau apartemen sewa. Fokus: jumlah unit, daya listrik per kamar, pilihan 1/2 PK, low watt, inverter, dan pengiriman bertahap per lantai.",
    painTags: ["Banyak kamar", "Daya per titik", "Pengiriman bertahap"],
    href: routes.pengadaanKostApartemen,
  },
  {
    label: "Hotel / Guest House",
    title: "Hotel, Guest House & Penginapan",
    desc: "Kamar tamu, lobby, ruang makan, dan meeting room. Fokus: kenyamanan tamu, suara unit, jam pemakaian, dan jadwal kerja yang tidak mengganggu okupansi.",
    painTags: ["Kenyamanan tamu", "Jam pemakaian", "Area berbeda"],
    href: routes.pengadaanHotelGuestHouse,
  },
  {
    label: "Proyek",
    title: "Kontraktor & Developer",
    desc: "Proyek bangunan, rumah contoh, ruko, kantor proyek, klinik, dan banyak titik AC. Kirim BOQ/RAB awal, daftar titik, lokasi, dan timeline untuk cek stok, brand, dan jadwal kirim.",
    painTags: ["BOQ / RAB", "Timeline proyek", "Supply bertahap"],
    href: routes.pengadaanKontraktorDeveloper,
  },
  {
    label: "Kantor / Ruko",
    title: "Gedung, Kantor & Ruko",
    desc: "Ruang kerja, meeting room, area pelanggan, showroom kecil, dan ruko. Fokus: layout ruangan, jumlah orang, jam operasional, titik indoor/outdoor, dan batasan downtime.",
    painTags: ["Layout ruang", "Jam operasional", "Multi-unit"],
    href: routes.pengadaanGedungKantorRuko,
  },
  {
    label: "Cafe / Resto",
    title: "Cafe, Resto & Ruang Makan",
    desc: "Area pelanggan, ruang makan, kasir, dan usaha kuliner. Kaca besar, plafon tinggi, pintu sering terbuka, dan jam ramai dihitung agar pilihan unit lebih tepat.",
    painTags: ["Plafon tinggi", "Beban panas", "Kenyamanan pelanggan"],
    href: routes.pengadaanCafeResto,
  },
];

const heroTrust = [
  "Stok banyak unit ready",
  "Gudang & showroom Sokaraja",
  "Armada pengiriman sendiri",
  "Garansi pemasangan 1 bulan",
  "Authorized Dealer",
];

const proofImages = [
  {
    title: "Satu truk muat banyak unit AC siap kirim",
    label: "Pengiriman banyak unit",
    image: "/photos/delivery/truk-radja-ac-muat-banyak-unit-ac-aqua-2026-06.webp",
  },
  {
    title: "Pengiriman banyak unit AC ke lokasi pembeli",
    label: "Pengiriman",
    image: "/photos/delivery/pengiriman-banyak-unit-ac-aqua-radja-ac-2026-06.webp",
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

const capabilityCards = [
  ["Stok banyak unit", "Unit indoor dan outdoor berbagai brand ready di gudang Sokaraja, Banyumas. Restock rutin terdokumentasi lewat foto dan video."],
  ["Pengiriman banyak unit", "Pengiriman pakai armada RADJA AC sendiri, termasuk muatan banyak unit sekaligus maupun pengiriman bertahap mengikuti kesiapan lokasi."],
  ["Pemasangan bergaransi", "Pemasangan dikerjakan tim RADJA AC dengan garansi pemasangan 1 bulan, atau unit dikirim untuk dipasang tim lapangan sendiri."],
  ["Authorized Dealer", "Authorized Dealer Daikin, Midea, Hisense, dan Sansui. Garansi unit resmi brand plus bantuan klaim bila ada kendala unit."],
];

const processSteps = [
  ["01", "Kirim jumlah unit & lokasi", "Jenis bangunan, jumlah unit/titik, lokasi, daya listrik, dan kapan unit dibutuhkan."],
  ["02", "Cek stok & opsi brand", "RADJA AC cek ketersediaan unit di gudang, pilihan brand, dan estimasi PK per ruangan."],
  ["03", "Konfirmasi & jadwal kirim", "Spesifikasi unit, jadwal pengiriman, dan kebutuhan pemasangan dikunci sebelum order jalan."],
  ["04", "Kirim & pasang", "Unit dikirim pakai armada RADJA AC; pemasangan bergaransi 1 bulan bila dikerjakan tim kami."],
];

const capacityRows = [
  ["Kamar tidur kecil", "1/2 PK", "Cek paparan panas dan insulasi dinding"],
  ["Kamar sedang / ruang kerja", "1 PK", "Umum untuk hunian, kost, kantor, atau ruko"],
  ["Ruang keluarga / ruko kecil", "1.5–2 PK", "Perlu cek tinggi plafon dan jumlah penghuni"],
  ["Area komersial luas", "Cassette / FS", "Perlu brief layout dan kebutuhan proyek lengkap"],
];

export default function PengadaanAcPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <JsonLd data={breadcrumbStructuredData} />
      <section className="relative overflow-hidden border-b border-blue-100 bg-[linear-gradient(155deg,#ffffff_0%,#f1f5ff_52%,#e0f0ff_100%)]">
        <div className="pointer-events-none absolute -right-32 -top-24 h-[30rem] w-[30rem] rounded-full bg-blue-300/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-28 bottom-0 h-80 w-80 rounded-full bg-red-200/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-6 lg:grid-cols-[1.04fr_0.96fr] lg:px-8 lg:py-20">
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit items-center gap-3 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-blue-900 shadow-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-red-600" />
              Supplier AC Banyak Unit
            </div>

            <h1 className="max-w-4xl text-3xl font-extrabold tracking-[-0.04em] text-blue-950 sm:text-4xl lg:text-[2.5rem]">
              Pengadaan AC banyak unit langsung dari gudang RADJA AC di Sokaraja, Banyumas.
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Stok banyak unit ready di gudang, pengiriman pakai armada sendiri, dan pemasangan bergaransi 1 bulan.
              Kirim jumlah unit, lokasi, dan timeline lewat WhatsApp; balasannya berisi ketersediaan stok, pilihan brand, dan jadwal kirim.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {heroTrust.map((chip) => (
                <span key={chip} className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-1.5 text-xs font-bold text-blue-950 shadow-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                  {chip}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <WhatsappLink
                className="inline-flex items-center justify-center rounded-2xl bg-red-600 px-7 py-4 text-base font-bold text-white shadow-xl shadow-red-600/20 transition hover:-translate-y-0.5 hover:bg-red-700"
                source="Pengadaan AC - Hero"
                intent="kirim kebutuhan pengadaan AC banyak unit: jenis bangunan, jumlah unit, lokasi, daya listrik, dan timeline kebutuhan"
                pageType="procurement"
              >
                Kirim Kebutuhan via WhatsApp
              </WhatsappLink>

              <Link
                href={routes.buktiPengirimanProyek}
                className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-7 py-4 text-base font-semibold text-blue-950 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-900"
              >
                Lihat Bukti Pengiriman
              </Link>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {capabilityCards.map(([title, desc]) => (
                <div key={title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="text-base font-bold text-blue-950">{title}</div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="overflow-hidden rounded-[2rem] border border-white bg-white shadow-2xl shadow-blue-900/10">
              <Image
                src="/photos/delivery/truk-radja-ac-muat-banyak-unit-ac-aqua-2026-06.webp"
                alt="Armada RADJA AC memuat banyak unit AC untuk pengiriman pengadaan"
                width={900}
                height={720}
                sizes="(min-width: 1024px) 560px, 100vw"
                priority
                className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[520px]"
              />
            </div>
            <div className="rounded-[1.7rem] border border-blue-100 bg-white p-5 shadow-xl shadow-blue-900/10">
              <div className="mb-4 flex items-center justify-between gap-4">
                <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-blue-950">Alur order banyak unit</h2>
                <span className="rounded-full bg-red-600 px-3 py-1 text-xs font-bold text-white">B2B</span>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {processSteps.map(([number, title, desc]) => (
                  <div key={number} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                    <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-950 text-xs font-bold text-white">
                      {number}
                    </div>
                    <h3 className="text-sm font-bold text-blue-950">{title}</h3>
                    <p className="mt-1 text-xs leading-5 text-slate-600">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-6">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">Authorized Dealer</p>
            <div className="flex flex-wrap gap-2">
              {authorizedBrands.map((brand) => (
                <span key={brand} className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-900">
                  {brand}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-6">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">Brand lain (stok aktif)</p>
            <div className="flex flex-wrap gap-2">
              {stockBrands.map((brand) => (
                <span key={brand} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-bold text-slate-500">
                  {brand}
                </span>
              ))}
            </div>
          </div>
          <p className="max-w-3xl text-sm leading-6 text-slate-500">
            Daikin, Midea, Hisense, dan Sansui tercatat sebagai Authorized Dealer atas nama RADJA AC / CV. Prima Sedaya.
            Brand lain tersedia mengikuti stok aktif di gudang. Garansi unit mengikuti ketentuan resmi tiap brand.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
          <div className="mb-8 grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-red-600">Bukti operasional</p>
              <h2 className="mt-3 text-xl font-extrabold tracking-tight text-blue-950 sm:text-2xl">
                Gudang, pengiriman, dan pemasangan yang bisa dilihat fotonya.
              </h2>
            </div>
            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              Foto dan video diambil dari aktivitas gudang, pengiriman, dan pemasangan RADJA AC.
              Ketersediaan tipe dan jumlah unit dikonfirmasi saat order.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {proofImages.map((item) => (
              <figure key={item.image} className="overflow-hidden rounded-[1.6rem] border border-slate-200 bg-white shadow-sm">
                <div className="relative">
                  <Image src={item.image} alt={item.title} width={520} height={420} sizes="(min-width: 1024px) 360px, 100vw" className="h-52 w-full object-cover" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-blue-950 shadow-sm">
                    {item.label}
                  </span>
                </div>
                <figcaption className="p-4 text-sm font-bold leading-6 text-blue-950">{item.title}</figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-6">
            <Link href={routes.buktiPengirimanProyek} className="inline-flex font-semibold text-red-600 transition hover:translate-x-1">
              Lihat lebih banyak bukti pengiriman dan stok →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-red-600">Segmen yang dilayani</p>
            <h2 className="mt-3 text-xl font-extrabold tracking-tight text-blue-950 sm:text-2xl">
              Lima segmen yang sering order AC banyak unit.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Kost butuh cek daya per kamar, hotel butuh kenyamanan tamu, kontraktor butuh BOQ dan supply bertahap,
              kantor butuh layout, dan cafe butuh hitung beban panas area pelanggan.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {projectTypes.map((item) => (
              <article key={item.title} className="group rounded-[1.7rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/10">
                <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-blue-900">
                  {item.label}
                </span>
                <h3 className="mt-5 text-xl font-bold text-blue-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.painTags.map((tag) => (
                    <span key={tag} className="rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-red-700">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href={item.href} className="mt-6 inline-flex font-semibold text-red-600 transition group-hover:translate-x-1">
                  Lihat detail segmen →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-red-600">Cara order</p>
            <h2 className="mt-3 text-xl font-extrabold tracking-tight text-blue-950 sm:text-2xl">
              Tidak ada form. Cukup WhatsApp dengan data yang tepat.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Kirim jumlah unit, lokasi, dan timeline. Balasannya berisi ketersediaan stok di gudang, pilihan brand,
              dan estimasi jadwal kirim.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map(([number, title, desc], index) => (
              <div key={number} className="relative rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-200 hover:shadow-lg">
                <div className="mb-4 text-5xl font-extrabold italic leading-none text-blue-100">{number}</div>
                <h3 className="font-bold text-blue-950">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
                {index < processSteps.length - 1 ? (
                  <span className="absolute -right-3 top-1/2 hidden h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-xs font-bold text-slate-400 lg:flex">
                    →
                  </span>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-red-600">Garansi, pembayaran & pengiriman</p>
            <h2 className="mt-3 text-xl font-extrabold tracking-tight text-blue-950 sm:text-2xl">
              Garansi, pembayaran, dan pengiriman dikunci sejak awal.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Untuk order banyak unit, ketersediaan stok, pilihan brand, jadwal pengiriman, dan skema pembayaran
              dikonfirmasi sebelum order jalan.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "Garansi unit & klaim brand",
                "Garansi unit mengikuti ketentuan resmi brand. Sebagai Authorized Dealer Daikin, Midea, Hisense, dan Sansui, RADJA AC membantu proses awal klaim bila ada kendala unit.",
              ],
              [
                "Garansi pemasangan 1 bulan",
                "Pemasangan yang dikerjakan tim RADJA AC bergaransi 1 bulan. Unit juga bisa dikirim untuk dipasang tim lapangan sendiri.",
              ],
              [
                "Pembayaran banyak unit",
                "Skema pembayaran seperti DP, transfer, atau pembayaran bertahap dibahas setelah jumlah unit, stok, dan jadwal pengiriman jelas.",
              ],
              [
                "Pengiriman pakai armada sendiri",
                "Pengiriman dijadwalkan dari gudang Sokaraja pakai armada RADJA AC, baik banyak unit sekaligus maupun bertahap mengikuti kesiapan lokasi.",
              ],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="font-bold text-blue-950">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-[1.5rem] border border-blue-100 bg-white p-5 text-sm leading-7 text-slate-600 shadow-sm">
            {legalEntityCopy} Showroom dan gudang berada di Pamijen, Sokaraja, Banyumas.
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-5 pb-16 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-red-600">Panduan awal kapasitas</p>
            <h2 className="mt-3 text-xl font-extrabold tracking-tight text-blue-950 sm:text-2xl">
              Estimasi PK dari ukuran dan fungsi ruangan.
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-[1.7rem] border border-blue-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-blue-950">Ini hanya estimasi awal</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Angka PK yang tepat bergantung pada faktor yang tidak bisa dihitung dari tabel saja. RADJA AC cek kondisi ini saat order:
              </p>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
                {[
                  "Tinggi plafon dan sirkulasi udara ruangan",
                  "Paparan sinar matahari dan arah hadap bangunan",
                  "Jumlah orang dan perangkat elektronik di ruangan",
                  "Daya listrik yang tersedia per titik",
                  "Apakah ruangan sudah pernah dipasang AC sebelumnya",
                ].map((point) => (
                  <li key={point} className="rounded-2xl bg-slate-50 px-4 py-3">→ {point}</li>
                ))}
              </ul>
            </div>

            <div className="overflow-hidden rounded-[1.7rem] border border-slate-200 bg-white shadow-sm">
              <div className="hidden grid-cols-[1.15fr_0.75fr_1.35fr] gap-3 bg-blue-950 px-5 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-white/60 sm:grid">
                <span>Jenis Ruangan</span>
                <span>Est. Kapasitas</span>
                <span>Catatan Penting</span>
              </div>
              {capacityRows.map(([room, pk, note]) => (
                <div key={room} className="grid gap-2 border-b border-slate-100 p-5 last:border-b-0 sm:grid-cols-[1.15fr_0.75fr_1.35fr]">
                  <div className="font-bold text-blue-950">{room}</div>
                  <div className="font-bold text-red-600">{pk}</div>
                  <div className="text-sm leading-6 text-slate-600">{note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-red-600">Katalog & brand</p>
            <h2 className="mt-3 text-xl font-extrabold tracking-tight text-blue-950 sm:text-2xl">
              Jelajahi katalog PK dan brand sebelum kirim kebutuhan.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Lihat pilihan kapasitas dan brand yang tersedia di gudang. Untuk order banyak unit, kirim langsung kebutuhannya via WhatsApp.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">Katalog kapasitas</h3>
              <div className="flex flex-wrap gap-3">
                {catalogLinks.map(([label, href]) => (
                  <Link
                    key={href}
                    href={href}
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-blue-950 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg"
                  >
                    {label} →
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">Brand tersedia</h3>
              <div className="flex flex-wrap gap-3">
                {brandLinks.map(([label, href]) => (
                  <Link
                    key={href}
                    href={href}
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-blue-950 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg"
                  >
                    {label} →
                  </Link>
                ))}
              </div>
              <Link href={routes.buktiPengirimanProyek} className="mt-5 inline-flex font-semibold text-red-600 transition hover:translate-x-1">
                Lihat bukti pengiriman & stok →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-blue-950">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[1fr_0.82fr] lg:items-center lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/40">Mulai order</p>
            <h2 className="mt-4 text-xl font-extrabold tracking-tight text-white sm:text-2xl">
              Kirim jumlah unit dan lokasi, kami cek stok dan jadwal kirim.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
              Showroom dan gudang RADJA AC berada di Pamijen, Sokaraja, Banyumas, dengan stok banyak unit untuk kost, hotel,
              kantor, ruko, cafe, dan proyek konstruksi.
            </p>
          </div>

          <div className="rounded-[1.7rem] bg-white p-6 text-slate-950 shadow-2xl">
            <h3 className="text-xl font-bold text-blue-950">Data yang perlu dikirim</h3>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
              {[
                ["Jenis bangunan", "kost, hotel, kantor, ruko, cafe, toko, atau proyek"],
                ["Lokasi proyek", "kota, area pengiriman, dan akses lokasi"],
                ["Jumlah unit / ruangan", "estimasi total kebutuhan sekarang atau bertahap"],
                ["Ukuran dan fungsi ruangan", "untuk cek estimasi PK dan tipe unit"],
                ["Daya listrik dan timeline", "total/per titik serta kapan unit dibutuhkan"],
              ].map(([title, desc]) => (
                <li key={title} className="flex gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-700">✓</span>
                  <span><strong className="text-blue-950">{title}</strong> — {desc}</span>
                </li>
              ))}
            </ul>
            <WhatsappLink
              className="mt-6 inline-flex w-full justify-center rounded-2xl bg-red-600 px-6 py-4 font-bold text-white shadow-lg shadow-red-600/20 transition hover:-translate-y-0.5 hover:bg-red-700"
              source="Pengadaan AC - Final CTA"
              intent="kirim data lengkap pengadaan AC banyak unit: jenis bangunan, jumlah unit, lokasi, daya listrik, timeline, dan kebutuhan pemasangan"
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
