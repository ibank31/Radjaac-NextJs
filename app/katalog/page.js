import Link from "next/link";
import { routes } from "@/content/routes";
import { buildMetadata } from "@/lib/seo";
import { staticPageMetadata } from "@/content/static-pages";
import WhatsappLink from "@/components/ui/WhatsappLink";

export const metadata = buildMetadata(staticPageMetadata.katalog);

const categories = [
  ["AC 1/2 PK", routes.katalogAcSetengahPk, "Untuk kamar kecil, kost, kontrakan, atau ruang kerja kecil."],
  ["AC 1 PK", routes.katalogAcSatuPk, "Untuk kamar besar, ruang kerja, ruang tamu kecil, atau toko kecil."],
  ["AC 1.5 PK", routes.katalogAcSatuSetengahPk, "Untuk ruang keluarga, kantor kecil, toko, atau cafe kecil."],
  ["AC 2 PK", routes.katalogAcDuaPk, "Untuk ruang besar, kantor, ruko, meeting room, dan usaha."],
  ["AC Split Rumah", routes.katalogAcSplitRumah, "Kamar tidur, ruang keluarga, kost, kontrakan, dan rumah harian."],
  ["AC Inverter", routes.katalogAcInverter, "Untuk pemakaian lama dan suhu lebih stabil."],
  ["AC Low Watt", routes.katalogAcLowWatt, "Untuk daya listrik terbatas dan kebutuhan hemat daya."],
  ["AC Kantor & Komersial", routes.katalogAcKantorKomersial, "Untuk toko, ruko, cafe, kantor, showroom, gedung, dan proyek."],
];

const heroCards = [
  ["AC untuk kamar & kost", "½ PK – 1 PK, daya listrik dicek dulu"],
  ["AC inverter", "Untuk pemakaian rutin setiap hari"],
  ["Low watt", "Daya terbatas atau MCB sering turun"],
];

const anggaranPackages = [
  ["Mulai 3 jutaan", "Opsi standard/value berdasarkan stok aktif"],
  ["3–4 jutaan", "Pilihan populer untuk rumah dan toko kecil"],
  ["Mulai 4 jutaan", "Inverter, kapasitas lebih besar, atau brand premium"],
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

const pkGuide = [
  ["½ PK", "± 9–12 m²", "Kamar kecil, kost, atau ruang kerja pribadi"],
  ["¾ PK", "± 12–15 m²", "Kamar sedang atau ruang santai"],
  ["1 PK", "± 15–20 m²", "Kamar besar atau ruang keluarga kecil"],
  ["1.5 PK", "± 20–30 m²", "Ruang keluarga, kantor kecil, atau toko"],
  ["2 PK", "± 30–40 m²", "Ruangan besar atau kebutuhan usaha"],
];

const brandLinks = [
  ["Daikin", routes.brandDaikin],
  ["Gree", routes.brandGree],
  ["Midea", routes.brandMidea],
  ["Hisense", routes.brandHisense],
  ["Sansui", routes.brandSansui],
  ["Sharp", routes.brandSharp],
  ["Samsung", routes.brandSamsung],
  ["Panasonic", routes.brandPanasonic],
  ["Brand Lainnya", routes.brandLainnya],
];

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-8 max-w-3xl text-center">
      <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-blue-700">{eyebrow}</p>
      <h2 className="mb-4 text-2xl font-black tracking-[-0.025em] text-slate-950 sm:text-3xl lg:text-4xl">{title}</h2>
      {description ? <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">{description}</p> : null}
    </div>
  );
}

export default function KatalogPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7fbff] text-slate-950">
      <section className="relative overflow-hidden border-b border-blue-100 bg-[linear-gradient(180deg,#f8fdff_0%,#eefbff_100%)] px-4 pb-10 pt-12 sm:px-6 lg:px-8 lg:pb-14 lg:pt-18">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.08),transparent_32%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-9 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-blue-800 shadow-sm backdrop-blur">
              Katalog AC RADJA AC
            </p>

            <h1 className="mb-5 max-w-2xl text-2xl font-black leading-tight tracking-[-0.03em] text-slate-950 sm:text-3xl md:text-4xl xl:text-5xl">
              Belum tahu mau pilih AC apa?
              <span className="block text-blue-700">Mulai dari kebutuhan ruangannya dulu.</span>
            </h1>

            <p className="mb-6 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              Kamar kecil, ruang keluarga, kost, toko, kantor, dan banyak unit punya hitungan berbeda. Kirim ukuran ruangan dan daya listrik; tim RADJA AC cek PK, stok, pengiriman, dan pemasangan sebelum lanjut pembelian.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <WhatsappLink
                className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-4 font-black text-slate-950 shadow-[0_18px_42px_rgba(37,211,102,0.20)] transition hover:-translate-y-0.5 hover:bg-[#20BA5A]"
                source="Halaman Katalog"
                intent="konsultasi kategori AC dan rekomendasi PK"
              >
                Minta Rekomendasi AC
              </WhatsappLink>
              <a href="#kategori-katalog" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-4 font-black text-slate-900 shadow-sm transition hover:bg-slate-50">
                Pilih Kategori AC
              </a>
            </div>

            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-500">
              Mulai konsultasi dari data ruangan. Kirim ukuran ruangan, daya listrik, lokasi, dan anggaran — tim RADJA AC mengecek stok, kisaran harga, pengiriman, dan opsi pemasangan.
            </p>
          </div>

          <div className="mx-auto w-full max-w-[430px] rounded-[1.7rem] border border-slate-200 bg-white p-4 shadow-[0_22px_60px_rgba(15,39,66,0.10)] lg:mr-0">
            <div className="rounded-[1.35rem] border border-slate-200 bg-[#f8fbff] p-4">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-blue-700">Mulai dari kebutuhan ruangan</p>
              <div className="space-y-3">
                {heroCards.map(([title, note], index) => (
                  <div key={title} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-black text-blue-800">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-sm font-black text-slate-950">{title}</h3>
                      <p className="mt-0.5 text-xs leading-5 text-slate-500">{note}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-2xl border border-blue-100 bg-blue-50 p-4">
                <p className="text-sm font-black text-slate-950">Mulai dari data ruangan</p>
                <p className="mt-1 text-xs leading-5 text-slate-600">Kirim ukuran ruangan, daya listrik, dan lokasi. Tim RADJA AC mencocokkan kategori AC, kapasitas PK, dan stok yang tersedia.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-7 sm:px-6 lg:px-8 lg:py-10">
        <div className="rounded-[1.7rem] border border-slate-200 bg-white p-5 shadow-[0_18px_50px_rgba(15,39,66,0.08)] sm:p-6 lg:p-7">
          <SectionTitle eyebrow="Estimasi Anggaran AC + Pasang" title="Pilih AC dari anggaran, PK, dan kondisi ruangan" description="Gunakan sebagai patokan awal. Tim RADJA AC cek angka dari tipe unit, stok, promo, alamat, dan kebutuhan pemasangan." />

          <div className="grid gap-3 md:grid-cols-3">
            {anggaranPackages.map(([anggaran, note]) => (
              <div key={anggaran} className="rounded-[1.35rem] border border-slate-200 bg-[#f8fbff] p-4 text-center">
                <p className="mb-3 text-2xl font-black text-slate-950">{anggaran}</p>
                <p className="rounded-2xl border border-slate-200 bg-white px-3 py-3 text-sm font-semibold leading-6 text-slate-600">{note}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-[1.35rem] border border-blue-100 bg-blue-50 p-4">
            <p className="mb-3 text-center text-xs font-black uppercase tracking-[0.18em] text-blue-800">Paket standar termasuk</p>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {packageIncludes.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-black text-white">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <p className="mx-auto mt-4 max-w-2xl text-center text-xs leading-6 text-slate-500 sm:text-sm">
            Tim RADJA AC cek harga dari merek, PK, stok, promo, alamat pengiriman, panjang pipa, posisi outdoor, dan kebutuhan pemasangan tambahan sebelum pembelian.
          </p>
        </div>
      </section>

      <section id="kategori-katalog" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
        <SectionTitle eyebrow="Kategori AC" title="Pilih dari jenis ruangan dan cara pakai AC" description="Mulai dari kamar, ruang keluarga, kantor, toko, atau kebutuhan banyak unit. Setelah itu baru cocokkan PK, daya listrik, brand, dan stok." />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {categories.map(([label, href, text], index) => (
            <Link key={href} href={href} className="rounded-[1.45rem] border border-slate-200 bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(15,39,66,0.10)]">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-lg font-black text-blue-800">
                {index + 1}
              </div>
              <h3 className="mb-3 text-lg font-black text-slate-950">{label}</h3>
              <p className="text-sm leading-6 text-slate-600">{text}</p>
              <div className="mt-4 text-xs font-black uppercase tracking-[0.14em] text-blue-700">Cek Pilihan</div>
            </Link>
          ))}
        </div>
      </section>

      <section id="panduan-pk" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-blue-700">Panduan PK</p>
            <h2 className="mb-4 text-2xl font-black tracking-[-0.025em] text-slate-950 sm:text-3xl lg:text-4xl">Kira-kira ruangan ini butuh berapa PK?</h2>
            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              Tabel ini hanya patokan awal. Ruangan lantai atas, kena matahari langsung, dinding tipis, atau banyak orang di dalamnya bisa butuh kapasitas lebih dari perkiraan luas ruang saja.
            </p>
          </div>

          <div className="overflow-hidden rounded-[1.7rem] border border-slate-200 bg-white shadow-sm">
            <div className="divide-y divide-slate-200">
              {pkGuide.map(([pk, area, note]) => (
                <div key={pk} className="grid grid-cols-[70px_1fr] gap-4 px-5 py-4 sm:grid-cols-[0.8fr_1fr_1.4fr] sm:items-center">
                  <div className="text-xl font-black text-blue-700">{pk}</div>
                  <div className="text-sm font-black text-slate-950 sm:text-base">{area}</div>
                  <div className="col-start-2 text-sm leading-6 text-slate-600 sm:col-auto">{note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
        <div className="rounded-[1.7rem] border border-slate-200 bg-white p-6 text-center shadow-[0_18px_50px_rgba(15,39,66,0.08)] sm:p-8 lg:p-10">
          <h2 className="mx-auto mb-5 max-w-3xl text-2xl font-black tracking-[-0.025em] text-slate-950 sm:text-3xl">Brand tinggal disesuaikan dengan kebutuhan dan anggaran</h2>
          <p className="mx-auto mb-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Pilihan brand dibaca dari ukuran ruangan, daya listrik, anggaran, dan stok aktif.
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {brandLinks.map(([label, href]) => (
              <Link key={href} href={href} className="rounded-full border border-slate-200 bg-[#f8fbff] px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-800">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-20 lg:pt-14">
        <div className="rounded-[1.7rem] border border-[#25D366]/20 bg-[#25D366]/10 p-6 text-center shadow-[0_18px_50px_rgba(15,39,66,0.08)] sm:p-10 lg:p-14">
          <h2 className="mx-auto mb-5 max-w-3xl text-2xl font-black tracking-[-0.025em] text-slate-950 sm:text-3xl lg:text-4xl">Mulai dari data ruangan</h2>
          <p className="mx-auto mb-6 max-w-2xl leading-7 text-slate-700">
            Kirim ukuran ruangan, daya listrik, lokasi pengiriman, dan perkiraan anggaran. Tim RADJA AC cocokkan kategori, brand, dan tipe AC yang tersedia.
          </p>
          <WhatsappLink
            className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-4 font-black text-slate-950 shadow-[0_14px_34px_rgba(37,211,102,0.20)] transition hover:-translate-y-0.5 hover:bg-[#20BA5A]"
            source="Halaman Katalog - Final CTA"
            intent="minta rekomendasi kategori AC dari katalog"
          >
            Kirim Data Ruangan
          </WhatsappLink>
        </div>
      </section>
    </main>
  );
}
