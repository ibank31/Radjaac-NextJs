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
  "Estimasi anggaran unit dan opsi pemasangan",
  "Pengiriman untuk rumah, toko, kantor, kost, hotel, atau proyek",
  "Konfirmasi garansi, pembayaran, pengiriman, dan pemasangan",
];

const messageChecklist = [
  "Ukuran ruangan, misalnya 3x4 meter",
  "Daya listrik rumah atau tempat usaha",
  "Lokasi pengiriman atau pemasangan",
  "Anggaran dan brand yang diminati bila sudah ada",
  "Jumlah unit kalau untuk kantor, kost, hotel, atau proyek",
  "Opsi pembayaran yang ingin dikonfirmasi: DP, transfer, atau COD",
];

const contactReasons = [
  [
    "Tidak perlu nebak PK sendiri",
    "Tim RADJA AC membaca kapasitas AC dari ukuran ruangan, pemakaian, daya listrik, dan kondisi lokasi.",
  ],
  [
    "Stok dicek dulu",
    "Tipe, brand, harga, dan ketersediaan unit dicek sebelum lanjut ke pembelian.",
  ],
  [
    "Biaya lebih jelas dari awal",
    "Pengiriman, pipa, titik outdoor, dan opsi pemasangan dibahas sejak awal agar tidak menggantung.",
  ],
  [
    "Pembayaran dan pemasangan dikonfirmasi",
    "Pembayaran, pengiriman, garansi, dan opsi pemasangan dibahas setelah kebutuhan unit dan lokasi jelas.",
  ],
];

const fastLinks = [
  ["Lihat Katalog AC", routes.katalog, "Mulai dari kategori AC rumah, inverter, low watt, dan komersial."],
  ["Hitung PK AC", routes.kalkulatorPkAc, "Cek kapasitas sebelum memilih unit."],
  ["Pengiriman & Pemasangan", routes.pengirimanPemasangan, "Cek kebutuhan lokasi, material, garansi pasang, dan jadwal."],
  ["Pengadaan Banyak Unit", routes.pengadaanAc, "Untuk kost, hotel, kantor, kontraktor, developer, dan proyek."],
];

export default function KontakPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7fbff] text-slate-950">
      <section className="relative overflow-hidden border-b border-blue-100 bg-[linear-gradient(180deg,#f8fdff_0%,#eefbff_100%)] px-4 pb-10 pt-12 sm:px-6 lg:px-8 lg:pb-14 lg:pt-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.08),transparent_32%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.92fr] lg:items-start lg:gap-16">
          <div>
            <p className="inline-flex rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-blue-800 shadow-sm backdrop-blur">
              Kontak RADJA AC
            </p>

            <h1 className="mt-6 max-w-4xl text-3xl font-extrabold leading-tight tracking-[-0.035em] text-slate-950 md:text-[2.4rem]">
              Mau beli AC? Kirim ukuran ruangan, daya listrik, lokasi, dan jumlah unit ke RADJA AC.
            </h1>

            <p className="mt-6 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
              Showroom dan gudang RADJA AC berada di {siteConfig.businessBase}. Tim RADJA AC cek kebutuhan AC untuk rumah, kost, toko, kantor, hotel, sampai pengadaan banyak unit sebelum pembelian.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <WhatsappLink
                className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-7 py-4 font-bold text-slate-950 shadow-[0_18px_42px_rgba(37,211,102,0.20)] transition hover:-translate-y-0.5 hover:bg-[#20BA5A]"
                source="Halaman Kontak - Hero"
                intent="konsultasi pembelian AC, cek PK, stok, pengiriman, dan opsi pemasangan"
              >
                Kirim Data Ruangan
              </WhatsappLink>

              <Link
                href={routes.katalog}
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-4 font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
              >
                Lihat Katalog AC
              </Link>

              <Link
                href={routes.kalkulatorPkAc}
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-4 font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
              >
                Cek Kalkulator PK
              </Link>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {quickNeeds.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700 shadow-sm">
                  <span className="mr-2 text-[#25D366]">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-[1.7rem] border border-slate-200 bg-white p-5 shadow-[0_22px_60px_rgba(15,39,66,0.10)] sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-blue-700">
              Nomor WhatsApp
            </p>

            <p className="mt-3 text-xl font-extrabold tracking-[-0.03em] text-slate-950 sm:text-2xl">
              {siteConfig.whatsappDisplay}
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Kirim detail sejak pesan pertama agar tim langsung membaca ukuran ruangan, daya listrik, stok, dan kebutuhan pemasangan.
            </p>

            <div className="mt-6 rounded-[1.45rem] border border-blue-100 bg-blue-50 p-5">
              <p className="text-sm font-bold text-slate-950">Format pesan yang disarankan:</p>
              <ul className="mt-4 space-y-3">
                {messageChecklist.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-slate-700">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <WhatsappLink
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#25D366] px-6 py-4 text-sm font-bold text-slate-950 shadow-[0_14px_34px_rgba(37,211,102,0.20)] transition hover:-translate-y-0.5 hover:bg-[#20BA5A]"
              source="Halaman Kontak - Card Nomor WA"
              intent="mengirim detail kebutuhan AC untuk dicek tim RADJA AC"
            >
              Kirim Detail Kebutuhan Sekarang
            </WhatsappLink>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="grid gap-5 md:grid-cols-3">
          {contactReasons.map(([title, text]) => (
            <div key={title} className="rounded-[1.55rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(15,39,66,0.10)]">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-2xl text-blue-700">
                ✓
              </div>
              <h2 className="text-xl font-extrabold tracking-[-0.02em] text-slate-950">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="rounded-[1.7rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,39,66,0.08)] sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-blue-700">
                Jalur cepat konsultasi
              </p>
              <h2 className="mt-4 text-xl font-extrabold tracking-[-0.03em] text-slate-950 sm:text-2xl">
                Belum tahu mau pilih AC apa? Mulai dari chat, bukan dari nebak-nebak katalog.
              </h2>
              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                Untuk pembeli lokal dan pengadaan, keputusan AC lebih aman kalau kebutuhan ruangan, daya listrik, stok, dan pemasangan dicek lebih dulu.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {fastLinks.map(([title, href, text]) => (
                <Link
                  key={href}
                  href={href}
                  className="rounded-[1.35rem] border border-slate-200 bg-[#f8fbff] p-5 transition hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50"
                >
                  <h3 className="text-base font-bold text-slate-950">{title}</h3>
                  <p className="mt-2 text-xs leading-6 text-slate-600">{text}</p>
                </Link>
              ))}

              <WhatsappLink
                className="rounded-[1.35rem] bg-[#25D366] p-5 text-center text-sm font-bold text-slate-950 shadow-[0_14px_34px_rgba(37,211,102,0.18)] transition hover:-translate-y-1 hover:bg-[#20BA5A]"
                source="Halaman Kontak - Jalur Cepat"
                intent="konsultasi cepat pembelian AC"
              >
                Kirim Kebutuhan AC →
              </WhatsappLink>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-20">
        <div className="rounded-[1.7rem] border border-[#25D366]/20 bg-[#25D366]/10 p-6 text-center shadow-[0_18px_50px_rgba(15,39,66,0.08)] sm:p-10">
          <h2 className="mx-auto mb-5 max-w-3xl text-xl font-extrabold tracking-[-0.03em] text-slate-950 sm:text-2xl">
            Siap cek stok dan rekomendasi AC?
          </h2>
          <p className="mx-auto mb-7 max-w-2xl text-sm leading-7 text-slate-700">
            Kirim ukuran ruangan, daya listrik, lokasi, jumlah unit, anggaran, dan brand yang diminati. Tim RADJA AC menyusun opsi yang masuk akal sebelum pembelian.
          </p>
          <WhatsappLink
            className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-4 font-bold text-slate-950 shadow-[0_14px_34px_rgba(37,211,102,0.20)] transition hover:-translate-y-0.5 hover:bg-[#20BA5A]"
            source="Halaman Kontak - Final CTA"
            intent="cek stok dan konsultasi AC dari halaman kontak"
          >
            Kirim Data Kebutuhan
          </WhatsappLink>
        </div>
      </section>
    </main>
  );
}
