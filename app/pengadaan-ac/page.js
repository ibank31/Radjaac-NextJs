import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { staticPageMetadata } from "@/content/static-pages";
import { routes } from "@/content/routes";
import WhatsappLink from "@/components/ui/WhatsappLink";

export const metadata = buildMetadata(staticPageMetadata.pengadaanAc);

const brandGroups = [
  {
    title: "Budget & banyak unit",
    brands: "Gree • Midea • Hisense • Sharp",
    desc: "Untuk kebutuhan banyak titik yang perlu opsi realistis dari sisi harga, stok, dan jadwal kirim.",
  },
  {
    title: "Efisiensi pemakaian",
    brands: "Daikin • Panasonic • LG • Samsung",
    desc: "Untuk ruangan yang dipakai lama, kantor aktif, kamar hotel, atau area usaha yang butuh listrik lebih terkontrol.",
  },
  {
    title: "Komersial & proyek",
    brands: "Cassette • floor standing • split besar",
    desc: "Untuk ruko, cafe, kantor, aula kecil, dan area komersial yang perlu brief layout lebih jelas.",
  },
];

const projectTypes = [
  {
    label: "Kantor / Ruko",
    title: "Gedung, kantor & ruko",
    desc: "Untuk ruang kerja, meeting room, lobby kecil, showroom, dan ruko yang butuh koordinasi unit serta jadwal pekerjaan.",
    checks: ["Jumlah ruang", "Jam operasional", "Titik indoor/outdoor"],
    href: routes.pengadaanGedungKantorRuko,
  },
  {
    label: "Cafe / Resto",
    title: "Cafe, resto & ruang makan",
    desc: "Untuk area pelanggan, ruang makan, kaca besar, plafon tinggi, atau lokasi usaha kuliner yang butuh pendinginan merata.",
    checks: ["Luas area", "Bukaan pintu/kaca", "Timeline opening"],
    href: routes.pengadaanCafeResto,
  },
  {
    label: "Hotel / Kost",
    title: "Hotel, guest house & banyak kamar",
    desc: "Cocok untuk kebutuhan banyak unit dengan pertimbangan daya listrik, jadwal kirim, dan opsi pemasangan bertahap.",
    checks: ["Jumlah kamar", "Daya per lantai", "Jadwal pemasangan"],
    href: routes.pengadaanHotelGuestHouse,
  },
  {
    label: "Proyek",
    title: "Kontraktor & developer",
    desc: "Kirim data ruangan, jumlah unit, lokasi, dan timeline agar opsi awal bisa disusun lebih rapi.",
    checks: ["BOQ/RAB awal", "Jumlah titik", "Deadline pekerjaan"],
    href: routes.pengadaanKontraktorDeveloper,
  },
];

const proofImages = [
  {
    title: "Pengiriman AC Daikin",
    label: "Pengiriman",
    image: "/photos/delivery/new-armada-radjaac-daikin.webp",
  },
  {
    title: "Persiapan pengiriman unit",
    label: "Loading",
    image: "/photos/delivery/radja-ac-persiapan-pengiriman.webp",
  },
  {
    title: "Stok gudang AC Daikin & Gree",
    label: "Gudang",
    image: "/photos/stock/gudang-stok-ac-daikin-gree-radja-ac-01.webp",
  },
  {
    title: "Pemasangan outdoor AC kost",
    label: "Pemasangan",
    image: "/photos/installation/pemasangan-ac-daikin-untuk-kost-outdoor-01.webp",
  },
];

const workflowSteps = [
  ["1", "Kirim brief", "Lokasi, jumlah unit, fungsi ruangan, daya listrik, dan timeline dikirim lebih dulu."],
  ["2", "Kebutuhan dibaca", "PK, tipe unit, opsi brand, pengiriman, dan pemasangan dibahas dari data awal."],
  ["3", "Stok dikonfirmasi", "Ketersediaan tipe, jumlah unit, dan alternatif brand dicek sebelum arahan final."],
  ["4", "Jadwal disusun", "Pengiriman dan opsi pemasangan dikoordinasikan sesuai area dan kesiapan lokasi."],
];

const capacityRows = [
  ["Kamar kecil", "± 1/2 PK", "Cek luas ruangan dan paparan panas"],
  ["Kamar sedang / ruang kerja", "± 1 PK", "Umum untuk hunian, kost, dan kantor kecil"],
  ["Ruang keluarga / ruko kecil", "± 1.5–2 PK", "Cek tinggi plafon dan jumlah orang"],
  ["Area komersial", "Cassette / floor standing", "Butuh brief layout dan kebutuhan proyek"],
];

export default function PengadaanAcPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_70%,#eef8ff_100%)]">
        <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-cyan-100/80 blur-3xl" />
        <div className="pointer-events-none absolute -left-28 bottom-16 h-80 w-80 rounded-full bg-blue-100/70 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 pb-12 pt-12 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:pb-20 lg:pt-20">
          <div className="flex flex-col justify-center">
            <div className="mb-5 inline-flex w-fit items-center gap-3 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-blue-900 shadow-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-red-600" />
              Pengadaan AC banyak unit
            </div>

            <h1 className="max-w-4xl text-4xl font-black tracking-[-0.04em] text-blue-950 sm:text-5xl lg:text-6xl">
              Pengadaan AC untuk hotel, kost, kantor, ruko, cafe, dan proyek.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              RADJA AC membantu membaca kebutuhan banyak unit dari brief proyek: jumlah ruangan, fungsi bangunan,
              kapasitas PK, daya listrik, lokasi pengiriman, stok unit, dan opsi pemasangan.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <WhatsappLink
                className="inline-flex items-center justify-center rounded-2xl bg-[#25D366] px-7 py-4 text-base font-black text-slate-950 shadow-[0_18px_42px_rgba(37,211,102,0.20)] transition hover:-translate-y-0.5 hover:bg-[#20BA5A]"
                source="Pengadaan AC - Hero"
                intent="pengadaan AC proyek atau banyak unit"
                pageType="b2b"
              >
                Kirim Brief via WhatsApp
              </WhatsappLink>

              <Link
                href={routes.buktiPengirimanProyek}
                className="inline-flex items-center justify-center rounded-2xl border border-blue-200 bg-white px-7 py-4 text-base font-black text-blue-950 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-900"
              >
                Lihat Bukti Pengiriman
              </Link>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                ["Brief jelas", "Lokasi, jumlah ruang, daya, dan timeline dibaca sebelum rekomendasi."],
                ["Stok dicek", "Brand dan tipe unit dikonfirmasi dari kebutuhan dan area pengiriman."],
                ["Koordinasi", "Pengiriman dan opsi pemasangan dibahas sesuai kondisi lokasi."],
              ].map(([title, desc]) => (
                <div key={title} className="rounded-3xl border border-blue-100 bg-white/90 p-5 shadow-sm">
                  <div className="text-lg font-black text-blue-950">{title}</div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="grid gap-3">
              <div className="overflow-hidden rounded-[2rem] border border-white bg-white shadow-2xl shadow-blue-900/10">
                <Image
                  src="/photos/delivery/new-armada-radjaac-daikin.webp"
                  alt="Pengiriman AC Daikin RADJA AC untuk kebutuhan banyak unit"
                  width={900}
                  height={720}
                  priority
                  className="h-[310px] w-full object-cover sm:h-[420px] lg:h-[520px]"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                {proofImages.slice(1).map((item) => (
                  <div key={item.image} className="overflow-hidden rounded-2xl border border-white bg-white shadow-lg shadow-blue-900/10">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={320}
                      height={260}
                      className="h-24 w-full object-cover sm:h-28"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/30 bg-blue-950/88 p-4 text-white shadow-2xl backdrop-blur">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-100">Bukti operasional</p>
              <p className="mt-2 text-lg font-black">Pengiriman, stok, dan pekerjaan lapangan terlihat dari dokumentasi nyata.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-100 bg-white">
        <div className="mx-auto grid max-w-7xl gap-3 px-5 py-5 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {["Cek PK awal", "Konfirmasi stok", "Pengiriman unit", "Opsi pemasangan"].map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3 text-sm font-black text-blue-950">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-950 text-xs text-white">✓</span>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
          <div className="mb-7 grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-red-600">Dokumentasi</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-blue-950 sm:text-5xl">
                Ada aktivitas pengiriman, stok, dan pemasangan yang bisa dilihat.
              </h2>
            </div>
            <p className="text-base leading-8 text-slate-600 sm:text-lg">
              Foto dipakai sebagai bukti pendukung aktivitas RADJA AC. Ketersediaan tipe, jumlah unit,
              jadwal pengiriman, dan opsi pemasangan tetap dikonfirmasi dari brief proyek.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {proofImages.map((item) => (
              <figure key={item.image} className="overflow-hidden rounded-[1.6rem] border border-slate-200 bg-white shadow-sm">
                <div className="relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={520}
                    height={420}
                    className="h-52 w-full object-cover"
                  />
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

      <section className="bg-[#F8F9FA]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-red-600">Kebutuhan proyek</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-blue-950 sm:text-5xl">
                Pilih segmen pengadaan supaya kebutuhan lebih cepat dipahami.
              </h2>
            </div>
            <p className="text-base leading-8 text-slate-600 sm:text-lg">
              Kantor, ruko, cafe, hotel, kost, dan proyek punya cara hitung berbeda. Mulai dari segmen yang
              paling dekat agar data awal lebih rapi saat dikirim ke WhatsApp.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {projectTypes.map((item) => (
              <article
                key={item.title}
                className="group flex h-full flex-col rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-900/10"
              >
                <span className="inline-flex w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-blue-900">
                  {item.label}
                </span>
                <h3 className="mt-5 text-xl font-black text-blue-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.desc}</p>
                <div className="mt-5 space-y-2">
                  {item.checks.map((check) => (
                    <div key={check} className="flex items-center gap-2 text-sm font-bold text-slate-700">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-black text-blue-900">✓</span>
                      {check}
                    </div>
                  ))}
                </div>
                <Link
                  href={item.href}
                  className="mt-6 inline-flex font-black text-red-600 transition group-hover:translate-x-1"
                >
                  Buka halaman segmen →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-900">Alur koordinasi</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-blue-950 sm:text-4xl">
                Proses pengadaan dibuat jelas dari brief awal.
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Tujuannya bukan langsung menebak unit, tapi membaca kebutuhan proyek sebelum stok, brand,
                pengiriman, dan opsi pemasangan dibahas.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {workflowSteps.map(([number, title, desc]) => (
                <div key={number} className="rounded-[1.6rem] border border-blue-100 bg-blue-50 p-5">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-950 font-black text-white">
                    {number}
                  </div>
                  <h3 className="font-black text-blue-950">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F9FA]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-900">Brand & tipe unit</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-blue-950 sm:text-4xl">
              Brand disesuaikan dengan budget, fungsi ruangan, dan ketersediaan unit.
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {brandGroups.map((group) => (
              <div key={group.title} className="rounded-[1.7rem] border border-slate-100 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-black text-blue-950">{group.title}</h3>
                <p className="mt-3 rounded-2xl bg-blue-50 px-4 py-3 text-sm font-black leading-6 text-blue-950">{group.brands}</p>
                <p className="mt-4 text-sm leading-7 text-slate-600">{group.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="rounded-[2.5rem] border border-blue-100 bg-gradient-to-br from-white to-blue-50 p-6 shadow-xl shadow-blue-900/10 lg:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-900">Panduan kapasitas awal</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-blue-950 sm:text-4xl">
                  Kapasitas dibaca dari ukuran, fungsi ruangan, dan kondisi lokasi.
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
                  Tabel ini hanya panduan awal. Keputusan tetap perlu melihat ukuran ruangan, tinggi plafon,
                  paparan panas, jumlah orang, posisi indoor/outdoor, dan kebutuhan pemasangan.
                </p>
              </div>

              <div className="overflow-hidden rounded-[2rem] border border-blue-100 bg-white">
                {capacityRows.map(([room, pk, note]) => (
                  <div
                    key={room}
                    className="grid gap-2 border-b border-blue-50 p-5 last:border-b-0 sm:grid-cols-[1fr_0.55fr_1.25fr]"
                  >
                    <div className="font-black text-blue-950">{room}</div>
                    <div className="font-black text-red-600">{pk}</div>
                    <div className="text-sm leading-6 text-slate-600">{note}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-950">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-200">Siap cek kebutuhan?</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-5xl">
                Kirim brief pengadaan, lalu opsi awal disusun dari kebutuhan.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-blue-100 sm:text-lg">
                RADJA AC berbasis di Banyumas dan membantu kebutuhan AC multi-brand untuk kantor, ruko,
                cafe, hotel, kost, rumah usaha, dan proyek.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <WhatsappLink
                  className="inline-flex justify-center rounded-2xl bg-[#25D366] px-6 py-4 font-black text-slate-950 shadow-lg shadow-[#25D366]/20 transition hover:-translate-y-0.5 hover:bg-[#20BA5A]"
                  source="Pengadaan AC - Final CTA"
                  intent="kirim data lengkap pengadaan AC"
                  pageType="b2b"
                >
                  Kirim Brief via WhatsApp
                </WhatsappLink>
                <Link
                  href={routes.buktiPengirimanProyek}
                  className="inline-flex justify-center rounded-2xl border border-blue-300/40 bg-white/10 px-6 py-4 font-black text-white transition hover:bg-white/15"
                >
                  Lihat Bukti Pengiriman
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] bg-white p-6 text-slate-950 shadow-2xl">
              <h3 className="text-xl font-black text-blue-950">Data yang dikirim sebelum konsultasi</h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                <li>• Lokasi atau kota proyek</li>
                <li>• Jumlah unit / jumlah ruangan</li>
                <li>• Ukuran ruangan dan fungsi ruangan</li>
                <li>• Daya listrik dan preferensi brand</li>
                <li>• Timeline kebutuhan unit atau pemasangan</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
