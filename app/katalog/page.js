import Link from "next/link";
import { routes } from "@/content/routes";
import { buildMetadata } from "@/lib/seo";
import { staticPageMetadata } from "@/content/static-pages";
import WhatsappLink from "@/components/ui/WhatsappLink";

export const metadata = buildMetadata(staticPageMetadata.katalog);

const categories = [
  ["AC Split Rumah", routes.katalogAcSplitRumah, "Kamar tidur, ruang keluarga, kost, kontrakan, dan rumah harian."],
  ["AC 1/2 PK", routes.katalogAcSetengahPk, "Untuk kamar kecil, kost, kontrakan, atau ruang kerja kecil."],
  ["AC Inverter", routes.katalogAcInverter, "Untuk pemakaian lama dan suhu lebih stabil."],
  ["AC Low Watt", routes.katalogAcLowWatt, "Untuk daya listrik terbatas dan kebutuhan hemat daya."],
  ["AC Kantor & Komersial", routes.katalogAcKantorKomersial, "Untuk toko, ruko, cafe, kantor, showroom, gedung, dan proyek."],
];

const heroCards = [
  ["AC untuk kamar & kost", "½ PK – 1 PK, daya listrik dicek dulu"],
  ["AC inverter", "Untuk pemakaian rutin setiap hari"],
  ["Low watt", "Daya terbatas atau MCB sering turun"],
];

const budgetPackages = [
  ["Mulai 3 jutaan", "Opsi standard/value sesuai stok terbaru"],
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
      <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-cyan-300">{eyebrow}</p>
      <h2 className="mb-4 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {description ? <p className="mx-auto max-w-2xl text-sm leading-7 text-white/62 sm:text-base">{description}</p> : null}
    </div>
  );
}

export default function KatalogPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <section className="relative mx-auto max-w-7xl px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pb-14 lg:pt-24">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_28%)]" />
        <div className="grid items-center gap-9 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200">
              Katalog AC RADJA AC
            </p>
            <h1 className="mb-5 max-w-2xl text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl xl:text-6xl">
              Belum tahu mau pilih AC apa?
              <span className="block text-cyan-300">Mulai dari kebutuhan ruangannya dulu.</span>
            </h1>
            <p className="mb-6 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
              Kamar kecil, ruang keluarga, kost, toko, kantor, sampai kebutuhan banyak unit — kebutuhan PK, daya listrik, tipe AC, pengiriman, dan opsi pemasangan bisa berbeda. RADJA AC bantu arahkan pilihan yang masuk akal sebelum Anda deal.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <WhatsappLink
                className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-4 font-bold text-slate-950 shadow-[0_18px_50px_rgba(37,211,102,0.2)] transition hover:-translate-y-0.5 hover:bg-[#20BA5A]"
                source="Halaman Katalog"
                intent="konsultasi kategori AC dan rekomendasi PK"
              >
                Chat, Minta Rekomendasi AC
              </WhatsappLink>
              <a href="#kategori-katalog" className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-4 font-semibold text-white/90 transition hover:border-cyan-300/30 hover:bg-white/[0.05]">
                Pilih Kategori AC
              </a>
            </div>
            <p className="mt-4 max-w-xl text-sm leading-6 text-white/55">
              Chat dulu tidak harus langsung beli. Kirim ukuran ruangan, daya listrik, lokasi, dan budget — admin bantu cek stok, kisaran harga, pengiriman, dan opsi pemasangan.
            </p>
          </div>

          <div className="mx-auto w-full max-w-[430px] rounded-[34px] border border-cyan-300/15 bg-slate-950/70 p-4 shadow-[0_28px_80px_rgba(8,20,47,0.42)] lg:mr-0">
            <div className="rounded-[28px] border border-white/10 bg-white/[0.035] p-4">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">Mulai dari kebutuhan ruangan</p>
              <div className="space-y-3">
                {heroCards.map(([title, note], index) => (
                  <div key={title} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-300/10 text-sm font-black text-cyan-300">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-white">{title}</h3>
                      <p className="mt-0.5 text-xs leading-5 text-white/50">{note}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-2xl border border-cyan-300/15 bg-cyan-300/10 p-4">
                <p className="text-sm font-bold text-white">Belum yakin mulai dari mana?</p>
                <p className="mt-1 text-xs leading-5 text-white/55">Kirim ukuran ruangan, daya listrik, dan lokasi. Admin bantu arahkan kategori dan tipe yang paling masuk akal.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-7 sm:px-6 lg:px-8 lg:py-10">
        <div className="rounded-[30px] border border-cyan-300/15 bg-cyan-300/[0.055] p-5 sm:p-6 lg:p-7">
          <SectionTitle eyebrow="Estimasi Budget AC + Pasang" title="Pilih AC sesuai budget Anda" description="Gambaran awal supaya Anda tahu budget segini biasanya masuk pilihan apa. Estimasi final tetap mengikuti tipe unit, stok, promo, alamat pengiriman, dan kebutuhan pemasangan." />
          <div className="grid gap-3 md:grid-cols-3">
            {budgetPackages.map(([budget, note]) => (
              <div key={budget} className="rounded-[22px] border border-white/10 bg-slate-950/45 p-4 text-center">
                <p className="mb-3 text-2xl font-black text-white">{budget}</p>
                <p className="rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-3 text-sm font-semibold leading-6 text-white/70">{note}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-[22px] border border-cyan-300/15 bg-cyan-300/10 p-4">
            <p className="mb-3 text-center text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Paket standar termasuk</p>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {packageIncludes.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm font-semibold text-white/70">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-300 text-xs font-black text-slate-950">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-center text-xs leading-6 text-slate-400 sm:text-sm">
            Harga menyesuaikan merek, PK, stok, promo, alamat pengiriman, panjang pipa, posisi outdoor, dan kebutuhan pemasangan tambahan. Semua dikonfirmasi dulu sebelum deal.
          </p>
        </div>
      </section>

      <section id="kategori-katalog" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
        <SectionTitle eyebrow="Kategori AC" title="Pilih jalur yang paling dekat dengan kebutuhan Anda" description="Brand bagus bisa jadi pilihan yang salah kalau PK tidak sesuai ruangan atau daya listriknya kurang. Mulai dari kategori yang paling relevan dulu." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {categories.map(([label, href, text], index) => (
            <Link key={href} href={href} className="rounded-[26px] border border-white/10 bg-white/[0.04] p-5 text-center transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.06]">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-lg font-black text-cyan-300">
                {index + 1}
              </div>
              <h3 className="mb-3 text-lg font-bold text-white">{label}</h3>
              <p className="text-sm leading-6 text-white/60">{text}</p>
              <div className="mt-4 text-xs font-semibold text-cyan-300">Cek Pilihan</div>
            </Link>
          ))}
        </div>
      </section>

      <section id="panduan-pk" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-cyan-300">Panduan PK</p>
            <h2 className="mb-4 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">Kira-kira butuh berapa PK untuk ruangan Anda?</h2>
            <p className="text-sm leading-7 text-white/60 sm:text-base">
              Tabel ini hanya patokan awal. Ruangan lantai atas, kena matahari langsung, dinding tipis, atau banyak orang di dalamnya bisa butuh kapasitas lebih dari perkiraan luas ruang saja.
            </p>
          </div>
          <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04]">
            <div className="divide-y divide-white/10">
              {pkGuide.map(([pk, area, note]) => (
                <div key={pk} className="grid grid-cols-[70px_1fr] gap-4 px-5 py-4 sm:grid-cols-[0.8fr_1fr_1.4fr] sm:items-center">
                  <div className="text-xl font-black text-cyan-300">{pk}</div>
                  <div className="text-sm font-semibold text-white sm:text-base">{area}</div>
                  <div className="col-start-2 text-sm leading-6 text-white/55 sm:col-auto">{note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
        <div className="rounded-[34px] border border-white/10 bg-white/[0.035] p-6 text-center sm:p-8 lg:p-10">
          <h2 className="mx-auto mb-5 max-w-3xl text-3xl font-black tracking-tight text-white sm:text-4xl">Brand tinggal disesuaikan dengan kebutuhan dan budget</h2>
          <p className="mx-auto mb-4 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
            RADJA AC membantu cek pilihan dari berbagai brand sesuai stok terbaru. Tidak perlu langsung putuskan brand; mulai dari kebutuhan ruangan dan budget.
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {brandLinks.map(([label, href]) => (
              <Link key={href} href={href} className="rounded-full border border-cyan-300/15 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-300/15">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-20 lg:pt-14">
        <div className="rounded-[34px] border border-[#25D366]/20 bg-[#25D366]/10 p-6 text-center sm:p-10 lg:p-14">
          <h2 className="mx-auto mb-5 max-w-3xl text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">Masih bingung mulai dari mana?</h2>
          <p className="mx-auto mb-6 max-w-2xl leading-7 text-white/70">
            Kirim ukuran ruangan, daya listrik, lokasi pengiriman, dan perkiraan budget. Admin RADJA AC bantu arahkan kategori, brand, dan tipe AC yang paling masuk akal.
          </p>
          <WhatsappLink
            className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-4 font-bold text-slate-950 transition hover:bg-[#20BA5A]"
            source="Halaman Katalog - Final CTA"
            intent="minta rekomendasi kategori AC dari katalog"
          >
            Chat RADJA AC Sekarang
          </WhatsappLink>
        </div>
      </section>
    </main>
  );
}
