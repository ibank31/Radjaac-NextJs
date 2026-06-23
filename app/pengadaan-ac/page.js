import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { staticPageMetadata } from "@/content/static-pages";
import { routes } from "@/content/routes";
import { legalEntityCopy } from "@/content/policies";
import { breadcrumbSchema } from "@/lib/schema";
import JsonLd from "@/components/seo/JsonLd";
import WhatsappLink from "@/components/ui/WhatsappLink";
import { typography } from "@/lib/typography";
import AuthorizedDealerCerts from "@/components/proof/AuthorizedDealerCerts";

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
  "Stok banyak unit di gudang",
  "Penawaran untuk pembelian banyak unit",
  "Unit saja atau unit + pemasangan",
  "Pengiriman sekaligus atau bertahap",
  "Authorized Dealer 4 brand",
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

const capabilities = [
  ["Supply banyak unit dari gudang", "Unit indoor dan outdoor berbagai brand siap dicek dari gudang Sokaraja, Banyumas. Cocok untuk kost, hotel, kantor, ruko, cafe, dan proyek."],
  ["Penawaran sesuai kebutuhan proyek", "Kirim jumlah unit, lokasi, timeline, dan preferensi brand. Admin bantu susun opsi unit yang masuk kebutuhan teknis dan anggaran."],
  ["Kirim bertahap, armada sendiri", "Pengiriman pakai armada Radja AC: banyak unit sekaligus atau bertahap mengikuti kesiapan tiap lantai, kamar, atau lokasi proyek."],
  ["Beli unit saja atau sekalian pasang", "Ambil unitnya saja untuk dipasang tim lapangan Anda, atau pasang oleh tim Radja AC dengan garansi pemasangan 1 bulan."],
  ["Unit original & bantuan klaim", "Semua unit original bergaransi resmi brand. Kalau ada kendala unit di luar pemasangan, kami bantu arahkan proses klaim sesuai jalur brand."],
  ["Harga khusus banyak unit", "Pembelian dalam jumlah banyak bisa dibahas khusus setelah jumlah unit, tipe, stok, lokasi, dan jadwal pengiriman jelas."],
];

const buyerRoles = [
  ["Purchasing / GA", "Butuh opsi brand, estimasi kapasitas, jadwal pengiriman, dan penawaran yang rapi untuk dibandingkan internal."],
  ["Kontraktor / Developer", "Butuh supply dari daftar titik, BOQ/RAB, alternatif brand, dan pengiriman yang bisa mengikuti progres lapangan."],
  ["Owner Bisnis", "Butuh AC cepat dingin, stok jelas, pemasangan bisa dijadwalkan, dan biaya awal bisa dihitung sebelum ambil keputusan."],
];

const offerDocuments = [
  ["Jumlah unit / titik", "total kebutuhan sekarang, bertahap, atau per lantai"],
  ["Lokasi & akses", "kota, area pengiriman, akses truk, dan jam terima barang"],
  ["Jenis bangunan", "kost, hotel, kantor, ruko, cafe, toko, gudang kantor, atau proyek"],
  ["Ukuran & fungsi ruang", "untuk cek estimasi PK, tipe indoor, dan pilihan unit"],
  ["Daya listrik", "total daya, batas MCB, atau daya per kamar/titik bila ada"],
  ["Timeline", "target kirim, target pasang, opening, renovasi, atau serah terima"],
  ["Skema kebutuhan", "unit saja, unit + pemasangan, atau pengiriman bertahap"],
  ["File pendukung", "BOQ/RAB, layout, foto ruangan, atau daftar titik jika tersedia"],
];

const processSteps = [
  ["01", "Kirim brief kebutuhan", "Jenis bangunan, jumlah unit/titik, lokasi, daya listrik, timeline, dan skema unit saja atau unit + pasang."],
  ["02", "Cek stok & opsi brand", "Kami cek ketersediaan unit di gudang, pilihan brand, estimasi PK, dan alternatif sesuai anggaran."],
  ["03", "Minta penawaran", "Spesifikasi unit, jumlah, jadwal kirim, dan kebutuhan pemasangan dirapikan sebelum Anda ambil keputusan."],
  ["04", "Kirim & pasang", "Unit dikirim pakai armada Radja AC; pemasangan oleh tim kami bila dibutuhkan dan area memungkinkan."],
];

const capacityRows = [
  ["Kamar tidur kecil", "1/2 PK", "Cek paparan panas dan insulasi dinding"],
  ["Kamar sedang / ruang kerja", "1 PK", "Umum untuk hunian, kost, kantor, atau ruko"],
  ["Ruang keluarga / ruko kecil", "1.5–2 PK", "Perlu cek tinggi plafon dan jumlah penghuni"],
  ["Area komersial luas", "Cassette / FS", "Perlu brief layout dan kebutuhan proyek lengkap"],
];

export default function PengadaanAcPage() {
  return (
    <main id="main-content" className="min-h-screen bg-white text-slate-800">
      <JsonLd data={breadcrumbStructuredData} />
      <section className="relative overflow-hidden border-b border-blue-100 bg-[linear-gradient(155deg,#ffffff_0%,#f1f5ff_52%,#e0f0ff_100%)]">
        <div className="pointer-events-none absolute -right-32 -top-24 h-[30rem] w-[30rem] rounded-full bg-blue-300/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-28 bottom-0 h-80 w-80 rounded-full bg-red-200/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-6 lg:grid-cols-[1.04fr_0.96fr] lg:px-8 lg:py-20">
          <div className="flex flex-col justify-center">
            <div className={`mb-6 inline-flex w-fit items-center gap-3 rounded-full border border-blue-100 bg-white px-4 py-2 ${typography.eyebrow} text-blue-900 shadow-sm`}>
              <span className="h-2.5 w-2.5 rounded-full bg-red-600" />
              Supplier AC Proyek & Pengadaan Banyak Unit
            </div>

            <h1 className={`max-w-4xl ${typography.pageTitle} text-blue-950`}>
              Minta penawaran supply AC banyak unit untuk proyek, hotel, kost, kantor, ruko, dan usaha.
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Radja AC melayani pengadaan AC original multi-brand dari gudang Sokaraja, Banyumas: cek stok, susun opsi brand,
              kirim unit sekaligus atau bertahap, dan bantu pemasangan bila dibutuhkan. Cocok untuk pembelian banyak unit,
              kebutuhan proyek, opening bisnis, renovasi, dan pengadaan rutin.
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
                className="inline-flex items-center justify-center rounded-2xl bg-[#25D366] px-7 py-4 text-base font-bold text-slate-950 shadow-xl shadow-[#25D366]/20 transition hover:-translate-y-0.5 hover:bg-[#20BA5A]"
                source="Pengadaan AC - Hero"
                intent="minta penawaran pengadaan AC banyak unit: jenis bangunan, jumlah unit, lokasi, daya listrik, timeline, dan kebutuhan unit saja atau pemasangan"
                pageType="procurement"
              >
                Minta Penawaran Pengadaan AC
              </WhatsappLink>

              <Link
                href={routes.buktiPengirimanProyek}
                className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-7 py-4 text-base font-semibold text-blue-950 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-900"
              >
                Lihat Bukti Pengiriman
              </Link>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="overflow-hidden rounded-[2rem] border border-white bg-white shadow-2xl shadow-blue-900/10">
              <Image
                src="/photos/delivery/truk-radja-ac-muat-banyak-unit-ac-aqua-2026-06.webp"
                alt="Armada Radja AC memuat banyak unit AC untuk pengiriman pengadaan"
                width={900}
                height={720}
                sizes="(min-width: 1024px) 560px, 100vw"
                priority
                className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[520px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-3xl">
            <p className={`${typography.eyebrow} text-red-600`}>Kenapa pengadaan lewat Radja AC</p>
            <h2 className={`mt-3 ${typography.sectionTitle} text-blue-950`}>
              Stok, penawaran, pengiriman, dan pemasangan dalam satu alur.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map(([title, desc]) => (
              <div key={title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-base font-bold text-blue-950">{title}</div>
                <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:px-8">
          <div>
            <p className={`${typography.eyebrow} text-white/45`}>Untuk buyer B2B</p>
            <h2 className={`mt-3 ${typography.sectionTitle} text-white`}>
              Kalau butuh supply AC serius, mulai dari brief yang jelas.
            </h2>
            <p className="mt-5 text-sm leading-7 text-white/70 sm:text-base">
              Tim purchasing, kontraktor, dan owner bisnis biasanya tidak butuh jawaban generik. Mereka butuh opsi unit,
              estimasi kapasitas, stok yang bisa dicek, jadwal kirim, dan penawaran yang mudah diputuskan.
            </p>
            <WhatsappLink
              className="mt-7 inline-flex items-center justify-center rounded-2xl bg-[#25D366] px-7 py-4 text-base font-bold text-slate-950 shadow-xl shadow-[#25D366]/20 transition hover:-translate-y-0.5 hover:bg-[#20BA5A]"
              source="Pengadaan AC - B2B Buyer"
              intent="minta penawaran supply AC B2B dengan data jumlah unit, lokasi, jenis bangunan, daya listrik, timeline, dan preferensi brand"
              pageType="procurement"
            >
              Kirim Brief untuk Penawaran
            </WhatsappLink>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {buyerRoles.map(([title, desc]) => (
              <div key={title} className="rounded-[1.5rem] border border-white/10 bg-white/10 p-5 shadow-sm backdrop-blur">
                <h3 className={`${typography.cardTitle} text-white`}>{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/70">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-6">
            <p className={`${typography.eyebrow} text-slate-400`}>Authorized Dealer</p>
            <div className="flex flex-wrap gap-2">
              {authorizedBrands.map((brand) => (
                <span key={brand} className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-900">
                  {brand}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-6">
            <p className={`${typography.eyebrow} text-slate-400`}>Brand lain (stok aktif)</p>
            <div className="flex flex-wrap gap-2">
              {stockBrands.map((brand) => (
                <span key={brand} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-bold text-slate-500">
                  {brand}
                </span>
              ))}
            </div>
          </div>
          <p className="max-w-3xl text-sm leading-6 text-slate-500">
            Daikin, Midea, Hisense, dan Sansui tercatat sebagai Authorized Dealer atas nama Radja AC / CV. Prima Sedaya.
            Brand lain tersedia mengikuti stok aktif di gudang. Garansi unit mengikuti ketentuan resmi tiap brand.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
          <div className="mb-8 grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className={`${typography.eyebrow} text-red-600`}>Bukti operasional</p>
              <h2 className={`mt-3 ${typography.sectionTitle} text-blue-950`}>
                Gudang, pengiriman, dan pemasangan yang bisa dilihat fotonya.
              </h2>
            </div>
            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              Foto dan video diambil dari aktivitas gudang, pengiriman, dan pemasangan Radja AC.
              Tipe dan jumlah unit kami cek sesuai kebutuhan Anda.
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

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href={routes.buktiPengirimanProyek} className="inline-flex font-semibold text-red-600 transition hover:translate-x-1">
              Lihat lebih banyak bukti pengiriman dan stok →
            </Link>
            <WhatsappLink
              className="inline-flex w-fit rounded-2xl border border-green-200 bg-green-50 px-5 py-3 text-sm font-bold text-green-800 transition hover:-translate-y-0.5 hover:bg-green-100"
              source="Pengadaan AC - Proof"
              intent="minta penawaran setelah melihat bukti pengiriman dan stok pengadaan AC banyak unit"
              pageType="procurement"
            >
              Minta Penawaran Setelah Cek Bukti
            </WhatsappLink>
          </div>
        </div>
      </section>

      <AuthorizedDealerCerts />

      <section className="bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className={`${typography.eyebrow} text-red-600`}>Data untuk penawaran</p>
            <h2 className={`mt-3 ${typography.sectionTitle} text-blue-950`}>
              Kirim data ini agar penawaran AC banyak unit lebih cepat dan tepat.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Tidak harus lengkap dari awal. Semakin jelas data yang dikirim, semakin cepat admin menyiapkan opsi stok,
              kapasitas PK, brand pembanding, dan jadwal pengiriman.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {offerDocuments.map(([title, desc]) => (
              <div key={title} className="rounded-[1.35rem] border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-sm font-bold text-blue-950">{title}</div>
                <p className="mt-2 text-xs leading-5 text-slate-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-5 pb-16 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className={`${typography.eyebrow} text-red-600`}>Segmen yang dilayani</p>
            <h2 className={`mt-3 ${typography.sectionTitle} text-blue-950`}>
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
                <span className={`inline-flex rounded-full bg-blue-50 px-3 py-1 ${typography.eyebrow} text-blue-900`}>
                  {item.label}
                </span>
                <h3 className={`mt-5 ${typography.cardTitle} text-blue-950`}>{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.painTags.map((tag) => (
                    <span key={tag} className={typography.chipDangerSoft}>
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
            <p className={`${typography.eyebrow} text-red-600`}>Cara order</p>
            <h2 className={`mt-3 ${typography.sectionTitle} text-blue-950`}>
              Tidak ada form panjang. Brief yang jelas langsung masuk ke admin.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Sebutkan jumlah unit, lokasi, dan kapan dibutuhkan — kami balas dengan stok yang bisa dicek, pilihan brand,
              estimasi kapasitas, dan jadwal kirim yang memungkinkan.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map(([number, title, desc], index) => (
              <div key={number} className="relative rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-200 hover:shadow-lg">
                <div className="mb-4 text-5xl font-extrabold italic leading-none text-blue-100">{number}</div>
                <h3 className={`${typography.cardTitle} text-blue-950`}>{title}</h3>
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
          <div className="mb-8 max-w-3xl">
            <p className={`${typography.eyebrow} text-red-600`}>Pembayaran & ketentuan</p>
            <h2 className={`mt-3 ${typography.sectionTitle} text-blue-950`}>
              Pembayaran banyak unit dibahas setelah kebutuhan jelas.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Skema seperti DP, transfer, atau pembayaran bertahap kami bahas setelah jumlah unit, stok, dan jadwal pengiriman disepakati.
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-blue-100 bg-white p-5 text-sm leading-7 text-slate-600 shadow-sm">
            {legalEntityCopy} Showroom dan gudang berada di Pamijen, Sokaraja, Banyumas.
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-5 pb-16 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className={`${typography.eyebrow} text-red-600`}>Panduan awal kapasitas</p>
            <h2 className={`mt-3 ${typography.sectionTitle} text-blue-950`}>
              Estimasi PK dari ukuran dan fungsi ruangan.
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-[1.7rem] border border-blue-100 bg-white p-6 shadow-sm">
              <h3 className={`${typography.cardTitle} text-blue-950`}>Estimasi awal sebelum survei lokasi</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Angka PK final kami pastikan dari kondisi lapangan saat survei:
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
              <div className={`hidden grid-cols-[1.15fr_0.75fr_1.35fr] gap-3 bg-blue-950 px-5 py-4 ${typography.eyebrow} text-white/60 sm:grid`}>
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
            <p className={`${typography.eyebrow} text-red-600`}>Katalog & brand</p>
            <h2 className={`mt-3 ${typography.sectionTitle} text-blue-950`}>
              Jelajahi katalog PK dan brand sebelum kirim kebutuhan.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Lihat pilihan kapasitas dan brand yang tersedia di gudang. Untuk order banyak unit, kirim langsung kebutuhannya via WhatsApp.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className={`mb-4 ${typography.cardTitle} text-slate-400`}>Katalog kapasitas</h3>
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
              <h3 className={`mb-4 ${typography.cardTitle} text-slate-400`}>Brand tersedia</h3>
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
            <p className={`${typography.eyebrow} text-white/40`}>Mulai order</p>
            <h2 className={`mt-4 ${typography.sectionTitle} text-white`}>
              Minta penawaran supply AC banyak unit untuk kebutuhan Anda.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
              Showroom dan gudang Radja AC berada di Pamijen, Sokaraja, Banyumas, dengan stok banyak unit untuk kost, hotel,
              kantor, ruko, cafe, dan proyek konstruksi. Kirim brief, lalu admin bantu cek stok, opsi brand, dan jadwal kirim.
            </p>
          </div>

          <div className="rounded-[1.7rem] bg-white p-6 text-slate-950 shadow-2xl">
            <h3 className={`${typography.cardTitle} text-blue-950`}>Data yang perlu dikirim</h3>
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
              className="mt-6 inline-flex w-full justify-center rounded-2xl bg-[#25D366] px-6 py-4 font-bold text-slate-950 shadow-lg shadow-[#25D366]/20 transition hover:-translate-y-0.5 hover:bg-[#20BA5A]"
              source="Pengadaan AC - Final CTA"
              intent="minta penawaran pengadaan AC banyak unit: jenis bangunan, jumlah unit, lokasi, daya listrik, timeline, preferensi brand, dan kebutuhan pemasangan"
              pageType="procurement"
            >
              Minta Penawaran via WhatsApp
            </WhatsappLink>
          </div>
        </div>
      </section>
    </main>
  );
}
