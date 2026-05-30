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
    <main className="min-h-screen overflow-hidden bg-[#f7fbff] text-slate-950">
      <section className="relative overflow-hidden border-b border-cyan-100 bg-[linear-gradient(180deg,#f8fdff_0%,#eefbff_100%)] px-4 pb-10 pt-12 lg:pb-14 lg:pt-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.08),transparent_32%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.82fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-cyan-100 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-cyan-800 shadow-sm backdrop-blur">
              Pengadaan AC Proyek
            </p>

            <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-[-0.04em] text-slate-950 md:text-6xl">
              Supplier AC banyak unit hingga pengadaan ratusan unit untuk hotel, kantor, properti, dan proyek.
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              RADJA AC membantu koordinasi pembelian AC original multi-brand untuk kebutuhan proyek dan ruang komersial: cek kebutuhan PK, pilihan brand, ketersediaan stok, pengiriman unit, opsi pemasangan fleksibel, garansi pemasangan 1 bulan, dan bantuan klaim unit sesuai ketentuan brand.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <WhatsappLink
                className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-4 text-sm font-black text-slate-950 shadow-[0_18px_42px_rgba(37,211,102,0.20)] transition hover:-translate-y-0.5 hover:bg-[#20BA5A]"
                source="Halaman Pengadaan AC"
                intent="konsultasi pengadaan AC proyek dan banyak unit"
              >
                Kirim Brief Pengadaan
              </WhatsappLink>

              <Link
                href={routes.katalogAcKantorKomersial}
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-4 text-sm font-black text-slate-900 shadow-sm transition hover:bg-slate-50"
              >
                Lihat AC Kantor & Komersial
              </Link>

              <Link
                href={routes.buktiPengirimanProyek}
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-4 text-sm font-black text-slate-900 shadow-sm transition hover:bg-slate-50"
              >
                Lihat Bukti Pengiriman
              </Link>
            </div>
          </div>

          <aside className="rounded-[1.7rem] border border-slate-200 bg-white p-6 shadow-[0_22px_60px_rgba(15,39,66,0.10)]">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-700">
              Data brief proyek
            </p>
            <h2 className="mt-3 text-2xl font-black tracking-[-0.03em] text-slate-950">
              Estimasi lebih cepat kalau data awal jelas.
            </h2>

            <ul className="mt-5 space-y-3">
              {briefItems.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-[#f8fbff] p-4 text-sm font-semibold leading-6 text-slate-700"
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
          <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-700">
            Segmen pengadaan
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] text-slate-950 sm:text-4xl">
            Pilih jalur sesuai jenis bangunan dan kebutuhan unit.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {procurementLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-[1.55rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-200 hover:shadow-[0_18px_45px_rgba(15,39,66,0.10)]"
            >
              <span className="text-lg font-black text-slate-950">{item.label}</span>
              <span className="mt-3 block text-sm leading-7 text-slate-600">
                {item.description}
              </span>
              <span className="mt-5 block text-sm font-black text-cyan-700 group-hover:text-cyan-900">
                Lihat detail →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="rounded-[1.7rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,39,66,0.08)] sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-700">
                Cocok untuk
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-[-0.03em] text-slate-950 sm:text-4xl">
                Dari pembelian beberapa unit sampai kebutuhan proyek besar.
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Kapasitas, stok, pengiriman, dan opsi pemasangan tetap dikonfirmasi admin sesuai lokasi, jumlah unit, jadwal, dan kondisi lapangan.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {fitItems.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-[#f8fbff] p-4 text-sm font-semibold leading-7 text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 pt-4">
        <div className="rounded-[1.55rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="grid gap-4 md:grid-cols-[0.8fr_1.2fr] md:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-700">
                Referensi sebelum chat
              </p>
              <h2 className="mt-2 text-2xl font-black tracking-[-0.03em] text-slate-950">
                Lihat kategori komersial, bukti pengiriman, atau langsung hubungi admin.
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {supportLinks.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="rounded-2xl border border-slate-200 bg-[#f8fbff] p-4 text-sm font-black text-slate-700 transition hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-800"
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
