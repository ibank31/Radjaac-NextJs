import Link from "next/link";
import { routes } from "@/content/routes";
import { buildMetadata } from "@/lib/seo";
import { staticPageMetadata } from "@/content/static-pages";
import WhatsappLink from "@/components/ui/WhatsappLink";

export const metadata = buildMetadata(staticPageMetadata.pengadaanAc);

const procurementLinks = [
  {
    label: "Kost & Apartemen",
    href: routes.pengadaanKostApartemen,
    description:
      "Untuk banyak kamar, hunian sewa, apartemen, kontrakan, dan kebutuhan unit bertahap.",
  },
  {
    label: "Hotel & Guest House",
    href: routes.pengadaanHotelGuestHouse,
    description:
      "Untuk kamar tamu, guest house, homestay, villa, lobby, dan area operasional hospitality.",
  },
  {
    label: "Kontraktor & Developer",
    href: routes.pengadaanKontraktorDeveloper,
    description:
      "Untuk proyek bangunan, ruko, klinik, kantor, rumah contoh, dan banyak titik pemasangan.",
  },
];

const fitItems = [
  "Kantor, ruko, toko, showroom, klinik, dan ruang usaha",
  "Hotel, guest house, homestay, villa, kost, dan apartemen",
  "Kontraktor, developer, proyek bangunan, dan kebutuhan banyak titik",
  "Pembelian satuan hingga pengadaan ratusan unit sesuai stok, timeline, area pengiriman, dan koordinasi admin",
];

const briefItems = [
  "Lokasi proyek atau alamat pengiriman",
  "Jenis bangunan dan jumlah ruangan",
  "Perkiraan jumlah unit yang dibutuhkan",
  "Ukuran ruangan, daya listrik, dan pola pemakaian",
  "Preferensi brand, budget, timeline, dan butuh unit saja atau opsi pemasangan",
];

const supportLinks = [
  ["AC Kantor & Komersial", routes.katalogAcKantorKomersial],
  ["Bukti Pengiriman Proyek", routes.buktiPengirimanProyek],
  ["Kontak RADJA AC", routes.kontak],
];

export default function PengadaanAcPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <section className="relative overflow-hidden px-4 pb-12 pt-14 lg:pb-16 lg:pt-20">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(37,211,102,0.12),transparent_28%)]" />
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.82fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-cyan-200">
              Pengadaan AC Proyek
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
              Supplier AC banyak unit hingga pengadaan ratusan unit untuk hotel, kantor, properti, dan proyek.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">
              RADJA AC membantu koordinasi pembelian AC original multi-brand untuk kebutuhan
              proyek dan ruang komersial: cek kebutuhan PK, pilihan brand, ketersediaan stok,
              pengiriman unit, opsi pemasangan fleksibel, garansi pemasangan 1 bulan, dan bantuan klaim unit sesuai ketentuan brand.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <WhatsappLink
                className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-4 text-sm font-black text-slate-950 shadow-[0_18px_50px_rgba(37,211,102,0.2)] transition hover:-translate-y-0.5 hover:bg-[#20BA5A]"
                source="Halaman Pengadaan AC"
                intent="konsultasi pengadaan AC proyek dan banyak unit"
              >
                Kirim Brief Pengadaan
              </WhatsappLink>
              <Link
                href={routes.katalogAcKantorKomersial}
                className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-4 text-sm font-black text-white transition hover:bg-white/[0.05]"
              >
                Lihat AC Kantor & Komersial
              </Link>
              <Link
                href={routes.buktiPengirimanProyek}
                className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-4 text-sm font-black text-white transition hover:bg-white/[0.05]"
              >
                Lihat Bukti Pengiriman
              </Link>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-cyan-300/15 bg-cyan-300/[0.055] p-6 shadow-[0_30px_90px_rgba(8,20,47,0.35)]">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-200">
              Data brief proyek
            </p>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-white">
              Estimasi lebih cepat kalau data awal jelas.
            </h2>
            <ul className="mt-5 space-y-3">
              {briefItems.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-white/10 bg-slate-950/45 p-4 text-sm font-semibold leading-6 text-white/70"
                >
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8">
        <div className="mb-6 max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300">
            Segmen pengadaan
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Pilih jalur sesuai jenis bangunan dan kebutuhan unit.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {procurementLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-0.5 hover:border-cyan-300/30 hover:bg-white/[0.06]"
            >
              <span className="text-lg font-black text-white">{item.label}</span>
              <span className="mt-3 block text-sm leading-7 text-white/60">
                {item.description}
              </span>
              <span className="mt-5 block text-sm font-black text-cyan-300 group-hover:text-cyan-200">
                Lihat detail →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="rounded-[2rem] border border-cyan-300/15 bg-cyan-300/[0.055] p-6 text-white shadow-[0_24px_70px_rgba(15,23,42,0.14)] sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300">
                Cocok untuk
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                Dari pembelian beberapa unit sampai kebutuhan proyek besar.
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/65">
                Kapasitas, stok, pengiriman, dan opsi pemasangan tetap dikonfirmasi admin sesuai
                lokasi, jumlah unit, jadwal, dan kondisi lapangan.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {fitItems.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-slate-950/45 p-4 text-sm font-semibold leading-7 text-white/70"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 pt-4">
        <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5 sm:p-6">
          <div className="grid gap-4 md:grid-cols-[0.8fr_1.2fr] md:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
                Referensi sebelum chat
              </p>
              <h2 className="mt-2 text-2xl font-black tracking-tight text-white">
                Lihat kategori komersial, bukti pengiriman, atau langsung hubungi admin.
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {supportLinks.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="rounded-2xl border border-white/10 bg-slate-950/45 p-4 text-sm font-black text-white/70 transition hover:border-cyan-300/30 hover:text-cyan-200"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
