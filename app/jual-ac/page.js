import Image from "next/image";
import Link from "next/link";
import { routes } from "@/content/routes";
import { buildMetadata } from "@/lib/seo";
import { staticPageMetadata } from "@/content/static-pages";
import WhatsappLink from "@/components/ui/WhatsappLink";
import { warrantyHighlights } from "@/content/policies";

export const metadata = buildMetadata(staticPageMetadata.jualAc);

const brandLinks = [
  ["Gree", routes.brandGree, "Proshop Gree, standard, low watt, inverter"],
  ["Daikin", routes.brandDaikin, "Pilihan AC rumah, usaha, kantor, dan proyek"],
  ["Midea", routes.brandMidea, "FT, AF, inverter, rumah, kost, dan usaha"],
  ["Hisense", routes.brandHisense, "Standard dan inverter berdasarkan stok aktif"],
  ["Sharp", routes.brandSharp, "Cek tipe, stok, dan kebutuhan ruangan"],
  ["Panasonic", routes.brandPanasonic, "Pilihan rumah, kantor, dan usaha"],
];

const catalogLinks = [
  ["AC 1/2 PK", routes.katalogAcSetengahPk, "Untuk kamar kecil, kost, dan ruang kerja kecil"],
  ["AC Split Rumah", routes.katalogAcSplitRumah, "Untuk kamar, ruang keluarga, kontrakan, dan rumah"],
  ["AC Inverter", routes.katalogAcInverter, "Untuk pemakaian lama dan suhu lebih stabil"],
  ["AC Low Watt", routes.katalogAcLowWatt, "Untuk daya listrik terbatas dan kebutuhan hemat daya"],
  ["AC Kantor & Komersial", routes.katalogAcKantorKomersial, "Untuk toko, ruko, cafe, klinik, kantor, gedung, proyek, dan showroom"],
];

const areaLinkGroups = [
  {
    title: "Banyumas & Purwokerto",
    description: "Untuk rumah, toko, kost, ruko, kantor kecil, dan kebutuhan beberapa unit di Banyumas dan area sekitarnya.",
    links: [
      ["Banyumas", routes.jualAcBanyumas],
      ["Purwokerto", routes.jualAcPurwokerto],
      ["Sokaraja", routes.jualAcSokaraja],
      ["Ajibarang", routes.jualAcAjibarang],
      ["Baturraden", routes.jualAcBaturraden],
      ["Karanglewas", routes.jualAcKaranglewas],
      ["Kembaran", routes.jualAcKembaran],
      ["Wangon", routes.jualAcWangon],
      ["Jatilawang", routes.jualAcJatilawang],
      ["Cilongok", routes.jualAcCilongok],
    ],
  },
  {
    title: "Cilacap & Sekitarnya",
    description: "Untuk kebutuhan rumah, usaha, proyek, dan banyak unit di Cilacap serta kecamatan utama.",
    links: [
      ["Cilacap", routes.jualAcCilacap],
      ["Kroya", routes.jualAcKroya],
      ["Majenang", routes.jualAcMajenang],
      ["Sidareja", routes.jualAcSidareja],
      ["Kesugihan", routes.jualAcKesugihan],
      ["Adipala", routes.jualAcAdipala],
    ],
  },
  {
    title: "Regional Prioritas",
    description: "Untuk pembelian unit, pengiriman, opsi pemasangan, dan kebutuhan banyak unit di area regional.",
    links: [
      ["Purbalingga", routes.jualAcPurbalingga],
      ["Kebumen", routes.jualAcKebumen],
      ["Tegal", routes.jualAcTegal],
      ["Banjarnegara", routes.jualAcBanjarnegara],
      ["Yogyakarta", routes.jualAcYogyakarta],
      ["Semarang", routes.jualAcSemarang],
      ["Solo", routes.jualAcSolo],
    ],
  },
];

const packagePricingBands = [
  ["3 jutaan", "Hemat untuk kamar/kost", "Ariston, TCL, Hisense Standard, Midea FT/AF, Sharp, Sansui Japan, LG, FLife, Polytron, Bestlife, Akari, Toshiba, Modena, Aqua"],
  ["4 jutaan", "Seimbang untuk rumah harian", "Hisense Inverter, Midea Inverter, Gree Standard/Low Watt, Daikin STC/STP, Panasonic, Sansui Inverter, Samsung Inverter, Mitsubishi"],
  ["5 jutaan", "Inverter lebih tinggi", "Gree Inverter dan Daikin Inverter untuk pemakaian lebih lama dan suhu lebih stabil"],
];

const processSteps = [
  ["Ceritakan kebutuhan ruangan", "Sampaikan ukuran ruangan, lokasi, daya listrik, jumlah unit, dan preferensi brand jika ada."],
  ["Cek PK dan tipe AC", "Tim RADJA AC membaca ukuran ruangan, daya listrik, pola pemakaian, lalu cocokkan tipe standard, low watt, atau inverter."],
  ["Cek stok dan area pengiriman", "Tim RADJA AC cek stok unit, harga, pengiriman, dan opsi pemasangan dari data lokasi terbaru."],
  ["Beli setelah jelas", "Pembelian dilakukan setelah unit, jadwal, alamat, dan kebutuhan tambahan sudah dicek."],
];

const proofImages = [
  {
    src: "/photos/display/display-gree-residential-ac-radja-ac.webp",
    alt: "Display AC Gree residential di RADJA AC",
  },
  {
    src: "/photos/delivery/radja-ac-persiapan-pengiriman.webp",
    alt: "Persiapan pengiriman unit AC RADJA AC",
  },
  {
    src: "/photos/installation/material-instalasi-ac-radja-ac-01.webp",
    alt: "Material instalasi AC RADJA AC",
  },
];

export default function JualAcPage() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-[#f7fbff] text-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.24),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.18),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div>
            <p className="inline-flex rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-blue-800 shadow-sm backdrop-blur">
              Jual AC Original Multi-Brand
            </p>
            <h1 className="mt-7 max-w-4xl text-2xl font-black tracking-tight sm:text-3xl lg:text-5xl">
              Beli AC original multi-brand dimulai dari ukuran ruangan, daya listrik, stok unit, dan kebutuhan pemasangan.
            </h1>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              RADJA AC melayani pembelian AC original multi-brand untuk rumah, kost, toko,
              kantor, hotel, proyek, dan pengadaan banyak unit. Tim RADJA AC cek kebutuhan PK, pilihan brand,
              stok unit, area pengiriman, dan opsi pemasangan sebelum pembelian.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <WhatsappLink
                className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-7 py-4 text-sm font-black text-slate-950 shadow-[0_18px_42px_rgba(37,211,102,0.20)] transition hover:-translate-y-0.5 hover:bg-[#20BA5A]"
                source="Halaman Jual AC"
                intent="konsultasi pembelian AC original multi-brand, cek PK, stok, pengiriman, dan opsi pemasangan"
              >
                Cek AC dari Data Ruangan
              </WhatsappLink>
              <Link
                href={routes.katalog}
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-4 text-sm font-black text-slate-900 shadow-sm transition hover:bg-slate-50"
              >
                Lihat Katalog AC
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                ["Original", "Unit AC multi-brand berdasarkan stok aktif dan konfirmasi tim RADJA AC"],
                ["Cek PK", "Kirim ukuran ruangan, daya listrik, dan pola pemakaian"],
                ["Pengiriman", "Koordinasi unit, alamat, jadwal, dan opsi pemasangan"],
              ].map(([title, text]) => (
                <div key={title} className="rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-sm">
                  <p className="text-base font-black sm:text-lg">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white/10 p-3 shadow-2xl">
              <Image
                src="/photos/display/display-gree-residential-ac-radja-ac.webp"
                alt="Display AC original multi-brand di RADJA AC"
                width={900}
                height={1100}
                className="h-[360px] w-full rounded-[1.5rem] object-cover sm:h-[460px] lg:h-[520px]"
                sizes="(min-width: 1024px) 560px, 100vw"
                priority
              />
            </div>
            <div className="mt-4 rounded-3xl border border-slate-200 bg-white p-6 text-slate-950 shadow-xl lg:absolute lg:-bottom-6 lg:left-6 lg:right-6 lg:mt-0 lg:shadow-2xl">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-500">
                Fokus konsultasi
              </p>
              <p className="mt-2 text-xl font-black sm:text-2xl">PK, brand, stok, dan kebutuhan ruangan</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Cocok untuk pembeli satuan, kantor, hotel, proyek, dan pengadaan banyak unit yang perlu cek PK, stok, dan koordinasi pengiriman.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-blue-700">
              Pilih dari jenis ruangan
            </p>
            <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
              Tidak semua ruangan cocok dengan AC yang sama.
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-600">
              Kebutuhan kamar tidur, kost, toko, ruko, cafe, kantor, dan proyek
              berbeda. Mulai dari kategori AC dulu, lalu tim RADJA AC mengecek stok dan menyusun opsi
              yang tersedia.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {catalogLinks.map(([label, href, text]) => (
              <Link
                key={href}
                href={href}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
              >
                <p className="text-base font-black text-slate-950 sm:text-lg">{label}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
                <p className="mt-5 text-sm font-black text-blue-700 group-hover:text-blue-900">
                  Lihat kategori →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-blue-800">
                Estimasi paket 1/2 PK
              </p>
              <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                Paket AC 1/2 PK + pemasangan mulai Rp3 jutaan.
              </h2>
              <p className="mt-5 text-sm leading-7 text-slate-700">
                Cocok untuk pembeli satuan yang ingin gambaran awal sebelum chat. Paket standar dapat mencakup pipa 2 meter, kabel 5 meter, bracket 1 set, duct tape 1 roll, free selang drain, dan free vacuum.
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Tim RADJA AC cek rincian harga dari brand, tipe, stok, area pemasangan, panjang pipa tambahan, titik outdoor, akses lokasi, dan kebutuhan material tambahan.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {packagePricingBands.map(([range, title, brands]) => (
                <div key={range} className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm">
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-700">{range}</p>
                  <h3 className="mt-3 text-xl font-black text-slate-950">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{brands}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={routes.katalogAcSetengahPk}
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-4 text-sm font-black text-white transition hover:bg-slate-800"
            >
              Lihat Detail AC 1/2 PK
            </Link>
            <WhatsappLink
              className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-4 text-sm font-black text-slate-950 transition hover:bg-[#20BA5A]"
              source="Halaman Jual AC - Pricing Band"
              intent="cek estimasi paket AC 1/2 PK dan pemasangan standar"
              category="AC 1/2 PK"
            >
              Cek Estimasi Paket
            </WhatsappLink>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-blue-700">
              Brand AC
            </p>
            <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
              Cek pilihan brand berdasarkan stok aktif, kebutuhan PK, dan anggaran.
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-600">
              RADJA AC menyediakan pilihan AC Gree, Daikin, Midea, Hisense,
              Sharp, Panasonic, Samsung, Sansui, dan brand lain berdasarkan stok aktif.
              Garansi unit mengikuti ketentuan resmi brand.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {brandLinks.map(([label, href, text]) => (
              <Link
                key={href}
                href={href}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="text-lg font-black text-slate-950 sm:text-xl">AC {label}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
                <p className="mt-5 text-sm font-black text-blue-700">Cek halaman brand →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-blue-700">
              Alur beli AC
            </p>
            <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
              Lebih aman kalau kebutuhan dicek sebelum memilih unit.
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-600">
              Tujuan konsultasi bukan memaksa brand tertentu, tapi memperjelas
              kebutuhan: ukuran ruangan, daya listrik, pemakaian, jumlah unit,
              alamat pengiriman, dan opsi pemasangan.
            </p>
          </div>

          <div className="space-y-4">
            {processSteps.map(([title, text], index) => (
              <div key={title} className="flex gap-5 rounded-3xl border border-slate-200 p-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-sm font-black text-slate-950">
                  {index + 1}
                </div>
                <div>
                  <p className="text-base font-black text-slate-950 sm:text-lg">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 sm:p-10">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-blue-700">
              Garansi & bantuan klaim
            </p>
            <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
              Garansi unit mengikuti ketentuan brand, pemasangan dijelaskan dari awal.
            </h2>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-600">
              Tim RADJA AC menjelaskan garansi unit, garansi pemasangan yang berlaku, kebutuhan material,
              dan alur bantuan awal klaim sebelum pembelian atau jadwal pemasangan dikonfirmasi.
            </p>
            <div className="mt-7 grid gap-4 md:grid-cols-3">
              {warrantyHighlights.map((point) => (
                <div
                  key={point}
                  className="rounded-3xl border border-slate-200 bg-white p-5 text-sm font-semibold leading-7 text-slate-700"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7fbff] text-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-blue-700">
                Bukti aktivitas
              </p>
              <h2 className="mt-4 text-2xl font-black tracking-tight sm:text-3xl">
                Showroom, stok, pengiriman, dan material pemasangan tersedia di dokumentasi.
              </h2>
              <p className="mt-5 text-sm leading-7 text-slate-600">
                Lihat dokumentasi RADJA AC sebelum konsultasi: display unit,
                pengiriman, stok, material, dan aktivitas lapangan yang relevan.
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
                <div key={image.src} className="overflow-hidden rounded-3xl border border-slate-200 bg-white/10 p-2">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={420}
                    height={520}
                    sizes="(min-width: 1024px) 360px, 100vw"
                    className="h-72 w-full rounded-2xl object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-[2rem] bg-blue-50 p-8 sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-blue-800">
                Area layanan
              </p>
              <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                Pengiriman dan opsi pemasangan dicek berdasarkan lokasi tujuan.
              </h2>
              <p className="mt-5 text-sm leading-7 text-slate-700">
                RADJA AC melayani dari basis Banyumas untuk area sekitar dan beberapa area Jawa prioritas. Tim RADJA AC tetap cek lokasi, stok, jumlah unit, dan jadwal sebelum pembelian.
              </p>
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              {areaLinkGroups.map((group) => (
                <div key={group.title} className="rounded-3xl bg-white p-5 shadow-sm">
                  <p className="text-sm font-black text-slate-950">{group.title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{group.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.links.map(([label, href]) => (
                      <Link
                        key={href}
                        href={href}
                        className="rounded-full border border-slate-200 px-4 py-2 text-xs font-black text-slate-800 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-800"
                      >
                        Jual AC {label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-20 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-xl sm:p-10">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-blue-700">
            Kirim Ukuran Ruangan
          </p>
          <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
            Butuh AC untuk rumah, kantor, hotel, atau proyek?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600">
            Kirim ukuran ruangan, lokasi, daya listrik, jumlah unit, brand yang diminati, serta kebutuhan pengiriman atau pemasangan. Tim RADJA AC menyusun opsi untuk pembelian satuan sampai pengadaan banyak unit.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <WhatsappLink
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-7 py-4 text-sm font-black text-white transition hover:bg-slate-800"
              source="Halaman Jual AC"
              intent="konsultasi memilih AC original multi-brand dari halaman jual AC dengan data ruangan daya listrik jumlah unit pengiriman pemasangan dan opsi pembayaran"
            >
              Cek AC dari Data Ruangan
            </WhatsappLink>
            <Link
              href={routes.kontak}
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-7 py-4 text-sm font-black text-slate-950 transition hover:bg-slate-50"
            >
              Lihat Kontak
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
