import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { staticPageMetadata } from "@/content/static-pages";
import { routes } from "@/content/routes";
import WhatsappLink from "@/components/ui/WhatsappLink";

export const metadata = buildMetadata(staticPageMetadata.pengadaanAc);

const brands = ["Daikin", "Gree", "Midea", "Hisense", "Sharp", "Samsung", "Panasonic", "Ariston", "Sansui"];

const projectTypes = [
  {
    label: "Kost / Apartemen",
    title: "Kost, Apartemen & Hunian Banyak Kamar",
    desc: "Untuk banyak kamar, kontrakan, mess, atau apartemen sewa. Fokus utama: jumlah unit, daya listrik per kamar, pilihan 1/2 PK, low watt, inverter, dan pengiriman bertahap.",
    painTags: ["Banyak kamar", "Daya per titik", "Pengiriman bertahap"],
    href: routes.pengadaanKostApartemen,
  },
  {
    label: "Hotel / Guest House",
    title: "Hotel, Guest House & Penginapan",
    desc: "Untuk kamar tamu, lobby, ruang makan, meeting room, dan area penginapan. Fokus utama: kenyamanan tamu, suara unit, jam pemakaian, dan jadwal pekerjaan yang tidak mengganggu okupansi.",
    painTags: ["Kenyamanan tamu", "Jam pemakaian", "Area berbeda"],
    href: routes.pengadaanHotelGuestHouse,
  },
  {
    label: "Proyek",
    title: "Kontraktor & Developer",
    desc: "Untuk proyek bangunan, rumah contoh, ruko, kantor proyek, klinik, dan banyak unit. Kirim BOQ/RAB awal, daftar titik, lokasi, dan timeline agar opsi brand, stok, dan pengiriman bisa dicek.",
    painTags: ["BOQ / RAB", "Timeline proyek", "Supply bertahap"],
    href: routes.pengadaanKontraktorDeveloper,
  },
  {
    label: "Kantor / Ruko",
    title: "Gedung, Kantor & Ruko",
    desc: "Untuk ruang kerja, meeting room, area pelanggan, showroom kecil, dan ruko. Fokus utama: layout ruangan, jumlah orang, jam operasional, titik indoor/outdoor, dan batasan downtime.",
    painTags: ["Layout ruang", "Jam operasional", "Multi-unit"],
    href: routes.pengadaanGedungKantorRuko,
  },
  {
    label: "Cafe / Resto",
    title: "Cafe, Resto & Ruang Makan",
    desc: "Untuk area pelanggan, ruang makan, kasir, dan usaha kuliner. Kaca besar, plafon tinggi, pintu sering terbuka, dan jam ramai perlu dihitung agar pilihan unit lebih realistis.",
    painTags: ["Plafon tinggi", "Beban panas", "Kenyamanan pelanggan"],
    href: routes.pengadaanCafeResto,
  },
];

const proofImages = [
  {
    title: "Showroom dan gudang RADJA AC di Banyumas",
    label: "Showroom",
    image: "/images/gallery/showroom-31-5-2026.webp",
  },
  {
    title: "Dokumentasi pengiriman unit AC RADJA AC",
    label: "Pengiriman",
    image: "/photos/delivery/pengiriman-ariston-daikin.webp",
  },
  {
    title: "Dokumentasi persiapan pengiriman AC",
    label: "Pengiriman",
    image: "/photos/delivery/pengiriman-ac-ariston.webp",
  },
  {
    title: "Dokumentasi stok AC RADJA AC",
    label: "Stok",
    image: "/images/gallery/stock-sansui-gree.webp",
  },
];

const processSteps = [
  ["01", "Kirim brief", "Lokasi, jumlah ruangan, estimasi ukuran, daya listrik, dan kapan unit dibutuhkan."],
  ["02", "Kebutuhan dicek", "Estimasi PK, opsi brand berdasarkan kebutuhan, ketersediaan unit, dan arahan awal."],
  ["03", "Konfirmasi teknis", "Finalisasi spesifikasi, jadwal pengiriman, dan kebutuhan instalasi jika diperlukan."],
  ["04", "Eksekusi order", "Unit disiapkan dan dikirim sesuai jadwal serta volume yang sudah dikonfirmasi."],
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
      <section className="relative overflow-hidden border-b border-blue-100 bg-[linear-gradient(155deg,#ffffff_0%,#f1f5ff_52%,#e0f0ff_100%)]">
        <div className="pointer-events-none absolute -right-32 -top-24 h-[30rem] w-[30rem] rounded-full bg-blue-300/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-28 bottom-0 h-80 w-80 rounded-full bg-red-200/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-6 lg:grid-cols-[1.04fr_0.96fr] lg:px-8 lg:py-20">
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit items-center gap-3 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-blue-900 shadow-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-red-600" />
              Layanan Pengadaan B2B
            </div>

            <h1 className="max-w-4xl text-3xl font-black tracking-[-0.04em] text-blue-950 sm:text-4xl lg:text-5xl">
              Pengadaan AC untuk banyak unit, usaha, dan proyek? Mulai dari brief yang jelas.
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Kirim jenis bangunan, jumlah ruangan, jumlah unit, lokasi, daya listrik, dan timeline.
              Tim RADJA AC bantu cek kebutuhan PK, pilihan brand, stok unit, pengiriman, dan opsi pemasangan sesuai data awal.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <WhatsappLink
                className="inline-flex items-center justify-center rounded-2xl bg-red-600 px-7 py-4 text-base font-black text-white shadow-xl shadow-red-600/20 transition hover:-translate-y-0.5 hover:bg-red-700"
                source="Pengadaan AC - Hero"
                intent="kirim brief pengadaan AC dengan data bangunan jumlah ruangan jumlah unit lokasi timeline dan kebutuhan pemasangan"
                pageType="procurement"
              >
                Kirim Brief via WhatsApp
              </WhatsappLink>

              <Link
                href={routes.buktiPengirimanProyek}
                className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-7 py-4 text-base font-black text-blue-950 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-900"
              >
                Lihat Bukti Pengiriman
              </Link>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {[
                ["Bantu hitung PK", "Estimasi kapasitas dari ukuran ruangan, fungsi, jumlah orang, dan kondisi bangunan."],
                ["Multi-brand", "Daikin, Gree, Midea, Hisense, Sharp, Samsung, Panasonic, Ariston, dan Sansui dibaca dari kebutuhan."],
                ["Koordinasi pengiriman", "Pengiriman unit dan opsi pemasangan dikonfirmasi dari lokasi, jumlah unit, dan timeline proyek."],
              ].map(([title, desc]) => (
                <div key={title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="text-base font-black text-blue-950">{title}</div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="overflow-hidden rounded-[2rem] border border-white bg-white shadow-2xl shadow-blue-900/10">
              <Image
                src="/images/gallery/showroom-31-5-2026.webp"
                alt="Showroom RADJA AC untuk konsultasi pengadaan AC banyak unit"
                width={900}
                height={720}
                sizes="(min-width: 1024px) 560px, 100vw"
                priority
                className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[520px]"
              />
            </div>
            <div className="rounded-[1.7rem] border border-blue-100 bg-white p-5 shadow-xl shadow-blue-900/10">
              <div className="mb-4 flex items-center justify-between gap-4">
                <h2 className="text-sm font-black uppercase tracking-[0.16em] text-blue-950">Alur pengadaan</h2>
                <span className="rounded-full bg-red-600 px-3 py-1 text-xs font-black text-white">B2B</span>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {processSteps.slice(0, 4).map(([number, title, desc]) => (
                  <div key={number} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                    <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-950 text-xs font-black text-white">
                      {number}
                    </div>
                    <h3 className="text-sm font-black text-blue-950">{title}</h3>
                    <p className="mt-1 text-xs leading-5 text-slate-600">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-5 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">Brand tersedia</p>
          <div className="flex flex-wrap gap-2">
            {brands.map((brand) => (
              <span key={brand} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-black text-slate-500">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
          <div className="mb-8 grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-red-600">Dokumentasi</p>
              <h2 className="mt-3 text-2xl font-black tracking-tight text-blue-950 sm:text-4xl">
                Ada aktivitas pengiriman, stok, dan pemasangan yang bisa dilihat.
              </h2>
            </div>
            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              Foto dipakai sebagai bukti pendukung aktivitas RADJA AC. Ketersediaan tipe, jumlah unit,
              jadwal pengiriman, dan opsi pemasangan tetap dikonfirmasi dari brief proyek.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {proofImages.map((item) => (
              <figure key={item.image} className="overflow-hidden rounded-[1.6rem] border border-slate-200 bg-white shadow-sm">
                <div className="relative">
                  <Image src={item.image} alt={item.title} width={520} height={420} sizes="(min-width: 1024px) 360px, 100vw" className="h-52 w-full object-cover" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-black text-blue-950 shadow-sm">
                    {item.label}
                  </span>
                </div>
                <figcaption className="p-4 text-sm font-black leading-6 text-blue-950">{item.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-red-600">Segmen yang dilayani</p>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-blue-950 sm:text-4xl">
              Kebutuhan berbeda, pendekatan berbeda.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Setiap segmen punya kebutuhan berbeda: kost perlu cek daya per kamar, hotel perlu kenyamanan tamu, kontraktor perlu BOQ/timeline, kantor perlu layout, dan cafe perlu membaca beban panas area pelanggan.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {projectTypes.map((item) => (
              <article key={item.title} className="group rounded-[1.7rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/10">
                <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-black uppercase tracking-[0.08em] text-blue-900">
                  {item.label}
                </span>
                <h3 className="mt-5 text-xl font-black text-blue-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.painTags.map((tag) => (
                    <span key={tag} className="rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-red-700">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href={item.href} className="mt-6 inline-flex font-black text-red-600 transition group-hover:translate-x-1">
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
            <p className="text-sm font-black uppercase tracking-[0.2em] text-red-600">Cara kerja</p>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-blue-950 sm:text-4xl">
              Tidak ada form. Cukup WA dengan data yang tepat.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Proses pengadaan dimulai dari brief yang jelas. Semakin lengkap data awal, semakin cepat tim bisa menyusun opsi.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map(([number, title, desc], index) => (
              <div key={number} className="relative rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-200 hover:shadow-lg">
                <div className="mb-4 text-5xl font-black italic leading-none text-blue-100">{number}</div>
                <h3 className="font-black text-blue-950">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
                {index < processSteps.length - 1 ? (
                  <span className="absolute -right-3 top-1/2 hidden h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-xs font-black text-slate-400 lg:flex">
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
            <p className="text-sm font-black uppercase tracking-[0.2em] text-red-600">Panduan awal kapasitas</p>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-blue-950 sm:text-4xl">
              Estimasi PK dari ukuran dan fungsi ruangan.
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-[1.7rem] border border-blue-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-black text-blue-950">Ini hanya estimasi awal</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Angka PK yang tepat bergantung pada faktor yang tidak bisa dihitung dari tabel saja. Tim akan cek kondisi ini saat konsultasi:
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
              <div className="hidden grid-cols-[1.15fr_0.75fr_1.35fr] gap-3 bg-blue-950 px-5 py-4 text-xs font-black uppercase tracking-[0.12em] text-white/60 sm:grid">
                <span>Jenis Ruangan</span>
                <span>Est. Kapasitas</span>
                <span>Catatan Penting</span>
              </div>
              {capacityRows.map(([room, pk, note]) => (
                <div key={room} className="grid gap-2 border-b border-slate-100 p-5 last:border-b-0 sm:grid-cols-[1.15fr_0.75fr_1.35fr]">
                  <div className="font-black text-blue-950">{room}</div>
                  <div className="font-black text-red-600">{pk}</div>
                  <div className="text-sm leading-6 text-slate-600">{note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-blue-950">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[1fr_0.82fr] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-white/40">Mulai pengadaan</p>
            <h2 className="mt-4 text-2xl font-black tracking-tight text-white sm:text-4xl">
              Kirim data proyek, tim susun opsi awal dari kebutuhan.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
              Showroom dan gudang RADJA AC berada di Banyumas, melayani kebutuhan AC banyak unit untuk kost, hotel,
              kantor, ruko, cafe, dan proyek konstruksi.
            </p>
          </div>

          <div className="rounded-[1.7rem] bg-white p-6 text-slate-950 shadow-2xl">
            <h3 className="text-xl font-black text-blue-950">Data yang perlu dikirim</h3>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
              {[
                ["Jenis bangunan", "kost, hotel, kantor, ruko, cafe, toko, atau proyek"],
                ["Lokasi proyek", "kota, area pengiriman, dan akses lokasi"],
                ["Jumlah unit / ruangan", "estimasi total kebutuhan sekarang atau bertahap"],
                ["Ukuran dan fungsi ruangan", "untuk cek estimasi PK dan tipe unit"],
                ["Daya listrik dan timeline", "total/per titik serta kapan unit dibutuhkan"],
              ].map(([title, desc]) => (
                <li key={title} className="flex gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs font-black text-green-700">✓</span>
                  <span><strong className="text-blue-950">{title}</strong> — {desc}</span>
                </li>
              ))}
            </ul>
            <WhatsappLink
              className="mt-6 inline-flex w-full justify-center rounded-2xl bg-red-600 px-6 py-4 font-black text-white shadow-lg shadow-red-600/20 transition hover:-translate-y-0.5 hover:bg-red-700"
              source="Pengadaan AC - Final CTA"
              intent="kirim data lengkap pengadaan AC jenis bangunan jumlah ruangan jumlah unit lokasi daya listrik timeline dan kebutuhan pemasangan"
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
