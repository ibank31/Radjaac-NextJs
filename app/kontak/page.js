import Link from "next/link";
import { routes } from "@/content/routes";
import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { staticPageMetadata } from "@/content/static-pages";
import WhatsappLink from "@/components/ui/WhatsappLink";

export const metadata = buildMetadata(staticPageMetadata.kontak);

const quickNeeds = [
  "Rekomendasi PK sesuai ukuran ruangan",
  "Cek stok unit dan pilihan brand",
  "Estimasi budget unit dan opsi pemasangan",
  "Pengiriman untuk rumah, toko, kantor, kost, hotel, atau proyek",
];

const messageChecklist = [
  "Ukuran ruangan, misalnya 3x4 meter",
  "Daya listrik rumah atau tempat usaha",
  "Lokasi pengiriman atau pemasangan",
  "Budget dan brand yang diminati bila sudah ada",
  "Jumlah unit kalau untuk kantor, kost, hotel, atau proyek",
];

const contactReasons = [
  [
    "Tidak perlu nebak PK sendiri",
    "Admin bantu arahkan kapasitas AC berdasarkan ukuran ruangan, pemakaian, daya listrik, dan kondisi lokasi.",
  ],
  [
    "Stok dikonfirmasi dulu",
    "Tipe, brand, harga, dan ketersediaan unit dicek sebelum Anda lanjut ke pembelian.",
  ],
  [
    "Biaya lebih jelas dari awal",
    "Pengiriman, pipa, titik outdoor, dan opsi pemasangan dibahas sebelum deal agar tidak menggantung.",
  ],
];

const fastLinks = [
  ["Lihat Katalog AC", routes.katalog, "Mulai dari kategori AC rumah, inverter, low watt, dan komersial."],
  ["Hitung PK AC", routes.kalkulatorPkAc, "Cek kapasitas sebelum memilih unit."],
  ["Pengadaan Banyak Unit", routes.pengadaanAc, "Untuk kost, hotel, kantor, kontraktor, developer, dan proyek."],
];

export default function KontakPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <section className="relative mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6 lg:px-8 lg:pb-16 lg:pt-24">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(37,211,102,0.13),transparent_28%)]" />
        <div className="grid gap-10 lg:grid-cols-[1fr_0.92fr] lg:items-start lg:gap-16">
          <div>
            <p className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-cyan-200">
              Kontak Resmi RADJA AC
            </p>
            <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
              Mau beli AC? Chat admin dulu supaya PK, stok, dan opsi pemasangan tidak salah.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">
              RADJA AC berbasis di {siteConfig.businessBase}. Admin bantu cek kebutuhan AC untuk rumah,
              kost, toko, kantor, hotel, sampai pengadaan banyak unit sebelum Anda deal.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <WhatsappLink
                className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-7 py-4 font-bold text-slate-950 shadow-[0_18px_50px_rgba(37,211,102,0.2)] transition hover:-translate-y-0.5 hover:bg-[#20BA5A]"
                source="Halaman Kontak - Hero"
                intent="konsultasi pembelian AC, cek PK, stok, pengiriman, dan opsi pemasangan"
              >
                Chat Admin via WhatsApp
              </WhatsappLink>
              <Link
                href={routes.katalog}
                className="inline-flex items-center justify-center rounded-full border border-white/10 px-7 py-4 font-semibold text-white/90 transition hover:border-cyan-300/30 hover:bg-white/[0.05]"
              >
                Lihat Katalog AC
              </Link>
              <Link
                href={routes.kalkulatorPkAc}
                className="inline-flex items-center justify-center rounded-full border border-white/10 px-7 py-4 font-semibold text-white/90 transition hover:border-cyan-300/30 hover:bg-white/[0.05]"
              >
                Cek Kalkulator PK
              </Link>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {quickNeeds.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-bold text-white/75">
                  <span className="mr-2 text-[#25D366]">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-[34px] border border-white/10 bg-white/[0.04] p-5 shadow-[0_30px_90px_rgba(8,20,47,0.35)] sm:p-7">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-200">
              Nomor WhatsApp
            </p>
            <p className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              {siteConfig.whatsappDisplay}
            </p>
            <p className="mt-4 text-sm leading-7 text-white/62">
              Supaya admin bisa menjawab lebih tepat, kirim detail kebutuhan sejak pesan pertama.
            </p>

            <div className="mt-6 rounded-[26px] border border-cyan-300/15 bg-cyan-300/[0.06] p-5">
              <p className="text-sm font-black text-white">Format pesan yang disarankan:</p>
              <ul className="mt-4 space-y-3">
                {messageChecklist.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-white/70">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-300 text-xs font-black text-slate-950">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <WhatsappLink
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#25D366] px-6 py-4 text-sm font-black text-slate-950 transition hover:bg-[#20BA5A]"
              source="Halaman Kontak - Card Nomor WA"
              intent="mengirim detail kebutuhan AC untuk dicek admin"
            >
              Kirim Detail Kebutuhan Sekarang
            </WhatsappLink>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="grid gap-5 md:grid-cols-3">
          {contactReasons.map(([title, text]) => (
            <div key={title} className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.06]">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-2xl text-cyan-300">
                ✓
              </div>
              <h2 className="text-xl font-black tracking-tight text-white">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-white/60">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="rounded-[34px] border border-cyan-300/15 bg-cyan-300/[0.055] p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-200">
                Jalur cepat konsultasi
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
                Belum tahu mau pilih AC apa? Mulai dari chat, bukan dari nebak-nebak katalog.
              </h2>
              <p className="mt-5 text-sm leading-7 text-white/65 sm:text-base">
                Untuk pembeli lokal dan pengadaan, keputusan AC lebih aman kalau kebutuhan ruangan,
                daya listrik, stok, dan pemasangan dicek lebih dulu.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {fastLinks.map(([title, href, text]) => (
                <Link
                  key={href}
                  href={href}
                  className="rounded-[24px] border border-white/10 bg-slate-950/45 p-5 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.06]"
                >
                  <h3 className="text-base font-black text-white">{title}</h3>
                  <p className="mt-2 text-xs leading-6 text-white/55">{text}</p>
                </Link>
              ))}
              <WhatsappLink
                className="rounded-[24px] bg-[#25D366] p-5 text-center text-sm font-black text-slate-950 transition hover:-translate-y-1 hover:bg-[#20BA5A]"
                source="Halaman Kontak - Jalur Cepat"
                intent="konsultasi cepat pembelian AC"
              >
                Langsung WhatsApp →
              </WhatsappLink>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-20">
        <div className="rounded-[34px] border border-[#25D366]/20 bg-[#25D366]/10 p-6 text-center sm:p-10">
          <h2 className="mx-auto mb-5 max-w-3xl text-3xl font-black tracking-tight sm:text-4xl">
            Siap cek stok dan rekomendasi AC?
          </h2>
          <p className="mx-auto mb-7 max-w-2xl text-sm leading-7 text-white/70">
            Kirim ukuran ruangan, daya listrik, lokasi, jumlah unit, budget, dan brand yang diminati. Admin RADJA AC bantu cek opsi yang masuk akal sebelum deal.
          </p>
          <WhatsappLink
            className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-4 font-bold text-slate-950 transition hover:bg-[#20BA5A]"
            source="Halaman Kontak - Final CTA"
            intent="cek stok dan konsultasi AC dari halaman kontak"
          >
            Chat Admin Sekarang
          </WhatsappLink>
        </div>
      </section>
    </main>
  );
}
