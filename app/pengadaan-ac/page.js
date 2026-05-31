import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { staticPageMetadata } from "@/content/static-pages";

export const metadata = buildMetadata(staticPageMetadata.pengadaanAc);

const brands = ["Daikin", "Gree", "Panasonic", "Sharp", "LG", "Samsung", "Midea"];

const projectTypes = [
  {
    label: "Kantor",
    title: "Ruang kerja & meeting",
    desc: "Bantu cek kebutuhan AC untuk ruang kerja, meeting room, lobby kecil, dan area operasional.",
  },
  {
    label: "Hotel / Kost",
    title: "Banyak kamar",
    desc: "Cocok untuk kebutuhan banyak unit dengan pertimbangan daya listrik, jadwal kirim, dan opsi pemasangan.",
  },
  {
    label: "Retail",
    title: "Toko, ruko & klinik",
    desc: "Bantu pilih tipe AC untuk area publik yang perlu nyaman, bersih, dan tampil rapi.",
  },
  {
    label: "Proyek",
    title: "Bangunan & renovasi",
    desc: "Kirim data ruangan, jumlah unit, lokasi, dan timeline untuk disusun opsi awalnya.",
  },
];

const briefItems = [
  ["Lokasi proyek", "Kota / area"],
  ["Jumlah unit", "Estimasi ruangan"],
  ["Kapasitas", "1/2 PK, 1 PK, 2 PK, cassette"],
  ["Daya listrik", "Per titik / total"],
  ["Timeline", "Kapan dibutuhkan"],
];

const capacityRows = [
  ["Kamar kecil", "± 1/2 PK", "Cek luas ruangan dan paparan panas"],
  ["Kamar sedang / ruang kerja", "± 1 PK", "Umum untuk hunian, kost, dan kantor kecil"],
  ["Ruang keluarga / ruko kecil", "± 1.5–2 PK", "Cek tinggi plafon dan jumlah orang"],
  ["Area komersial", "Cassette / floor standing", "Butuh brief layout dan kebutuhan proyek"],
];

function getWhatsappHref(context) {
  const message = `Halo RADJA AC, saya mau konsultasi pengadaan AC. Kebutuhan: ${context}. Lokasi: [isi kota]. Jumlah unit/ruangan: [isi jumlah]. Ukuran ruangan: [isi ukuran]. Daya listrik: [isi daya]. Timeline: [isi timeline]. Tolong susunkan opsi unit yang sesuai.`;
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  if (!number) {
    return `/kontak?message=${encodeURIComponent(message)}`;
  }

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export default function PengadaanAcPage() {
  const mainWa = getWhatsappHref("pengadaan AC proyek atau banyak unit");

  return (
    <main className="min-h-screen bg-white text-slate-800">
      <section className="relative overflow-hidden border-b border-blue-100 bg-[linear-gradient(135deg,#ffffff_0%,#f8fafc_42%,#e0f7fa_100%)]">
        <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-blue-100/80 blur-3xl" />
        <div className="absolute -left-28 bottom-0 h-80 w-80 rounded-full bg-red-100/50 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit items-center gap-3 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-bold text-blue-900 shadow-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-red-600" />
              Pengadaan AC banyak unit via WhatsApp
            </div>

            <h1 className="max-w-4xl text-4xl font-black tracking-tight text-blue-950 sm:text-5xl lg:text-6xl">
              Butuh AC Banyak Unit untuk Hotel, Kost, Kantor, atau Proyek?
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              RADJA AC cek kebutuhan PK, pilihan brand, ketersediaan unit,
              pengiriman, dan kebutuhan pemasangan berdasarkan lokasi, jumlah ruangan,
              daya listrik, serta timeline proyek.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={mainWa}
                className="inline-flex items-center justify-center rounded-2xl bg-red-600 px-7 py-4 text-base font-bold text-white shadow-xl shadow-red-600/20 transition hover:-translate-y-0.5 hover:bg-red-700"
                data-wa-source="pengadaan_hero_v3"
                data-wa-label="kirim_brief_pengadaan"
                data-page-type="b2b"
                data-intent-type="procurement"
              >
                Kirim Brief via WhatsApp
              </a>

              <Link
                href="/katalog"
                className="inline-flex items-center justify-center rounded-2xl border border-blue-200 bg-white px-7 py-4 text-base font-bold text-blue-950 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-900"
              >
                Lihat Katalog AC
              </Link>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {[
                ["Cek PK awal", "Bantu baca kebutuhan dari ukuran dan fungsi ruangan."],
                ["Multi-brand", "Pilihan brand dibaca dari kebutuhan proyek."],
                ["Brief jelas", "Pesan WA berisi data proyek, bukan chat kosong."],
              ].map(([title, desc]) => (
                <div
                  key={title}
                  className="rounded-3xl border border-blue-100 bg-white/90 p-5 shadow-sm"
                >
                  <div className="text-lg font-black text-blue-950">{title}</div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2.5rem] border border-blue-100 bg-white p-5 shadow-2xl shadow-blue-900/10">
              <div className="rounded-[2rem] bg-gradient-to-br from-white via-slate-50 to-blue-50 p-6">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-900">
                      Digital Showroom
                    </p>
                    <h2 className="mt-2 text-2xl font-black text-blue-950">
                      Brief Pengadaan
                    </h2>
                  </div>
                  <span className="rounded-full bg-red-50 px-4 py-2 text-xs font-black text-red-600">
                    B2B
                  </span>
                </div>

                <div className="rounded-[1.5rem] border border-blue-100 bg-white p-5 shadow-inner">
                  <div className="h-20 rounded-2xl bg-slate-50 shadow-inner">
                    <div className="mx-auto h-2 w-28 rounded-b-full bg-blue-100" />
                    <div className="mx-auto mt-7 h-2 w-44 rounded-full bg-blue-200" />
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                    <div className="rounded-2xl bg-blue-50 p-3">
                      <p className="text-xs font-semibold text-slate-500">Unit</p>
                      <p className="mt-1 font-black text-blue-950">Multi</p>
                    </div>
                    <div className="rounded-2xl bg-blue-50 p-3">
                      <p className="text-xs font-semibold text-slate-500">Tipe</p>
                      <p className="mt-1 font-black text-blue-950">PK</p>
                    </div>
                    <div className="rounded-2xl bg-red-50 p-3">
                      <p className="text-xs font-semibold text-slate-500">CTA</p>
                      <p className="mt-1 font-black text-red-600">WA</p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  {briefItems.map(([label, value]) => (
                    <div
                      key={label}
                      className="flex items-center justify-between gap-4 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-sm"
                    >
                      <span className="text-sm font-semibold text-slate-500">{label}</span>
                      <span className="text-right text-sm font-black text-blue-950">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl bg-blue-950 p-5 text-white">
                  <p className="text-sm font-semibold text-blue-100">Pesan otomatis</p>
                  <p className="mt-1 text-lg font-black">Lokasi • unit • ruangan • daya • timeline</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 right-6 rounded-3xl border border-blue-100 bg-white px-5 py-4 shadow-xl">
              <p className="text-sm font-black text-blue-950">White / Blue / Red</p>
              <p className="mt-1 text-xs text-slate-500">Clean premium palette</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-slate-100 bg-white p-5 shadow-xl shadow-slate-200/50">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.2em] text-slate-400">
                  Brand yang bisa dikonsultasikan
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Ketersediaan tipe dan unit tetap dicek berdasarkan kebutuhan dan area.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-7">
                {brands.map((brand) => (
                  <div
                    key={brand}
                    className="rounded-2xl border border-blue-100 bg-slate-50 px-4 py-3 text-center text-sm font-black text-slate-500 transition hover:-translate-y-0.5 hover:bg-blue-950 hover:text-white"
                  >
                    {brand}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F9FA]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-red-600">
                Kebutuhan proyek
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-blue-950 sm:text-5xl">
                Terlihat seperti showroom, tetap fokus ke WhatsApp lead.
              </h2>
            </div>
            <p className="text-lg leading-8 text-slate-600">
              Untuk pembelian banyak unit, yang paling penting adalah data kebutuhan yang jelas:
              lokasi, jumlah unit, ukuran ruangan, daya listrik, dan timeline.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {projectTypes.map((item) => (
              <article
                key={item.title}
                className="group rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-900/10"
              >
                <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-blue-900">
                  {item.label}
                </span>
                <h3 className="mt-5 text-xl font-black text-blue-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.desc}</p>
                <a
                  href={getWhatsappHref(item.title)}
                  className="mt-6 inline-flex font-bold text-red-600 transition group-hover:translate-x-1"
                  data-wa-source="pengadaan_project_type_v3"
                  data-wa-label={item.label.toLowerCase()}
                  data-page-type="b2b"
                  data-intent-type="procurement"
                >
                  Konsultasikan kebutuhan →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="rounded-[2.5rem] border border-blue-100 bg-gradient-to-br from-white to-blue-50 p-6 shadow-xl shadow-blue-900/10 lg:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-900">
                  Panduan kapasitas awal
                </p>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-blue-950 sm:text-4xl">
                  Pilih kapasitas dari ukuran dan fungsi ruangan.
                </h2>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  Tabel ini hanya panduan awal. Admin cek ukuran ruangan,
                  tinggi plafon, paparan panas, jumlah orang, dan kondisi pemasangan.
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
              <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-200">
                Siap cek kebutuhan?
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-5xl">
                Kirim data pengadaan, admin menyusun opsi awal.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-100">
                RADJA AC berbasis di Banyumas dan membantu kebutuhan AC multi-brand
                untuk rumah usaha, kantor, toko, hotel, kost, dan proyek.
              </p>
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
              <a
                href={mainWa}
                className="mt-6 inline-flex w-full justify-center rounded-2xl bg-red-600 px-6 py-4 font-black text-white shadow-lg shadow-red-600/20 transition hover:-translate-y-0.5 hover:bg-red-700"
                data-wa-source="pengadaan_final_v3"
                data-wa-label="kirim_data_lengkap"
                data-page-type="b2b"
                data-intent-type="procurement"
              >
                Kirim Data via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
