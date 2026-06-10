import Link from "next/link";
import { routes } from "@/content/routes";
import WhatsappLink from "@/components/ui/WhatsappLink";
import { typography } from "@/lib/typography";

const recoveryLinks = [
  {
    label: "Lihat Katalog AC",
    href: routes.katalog,
    description: "Mulai dari AC rumah, inverter, low watt, hingga kebutuhan kantor dan usaha.",
  },
  {
    label: "Jual AC Purwokerto",
    href: routes.jualAcPurwokerto,
    description: "Cek kebutuhan AC untuk rumah, kost, toko, kantor, dan pengadaan sekitar Purwokerto.",
  },
  {
    label: "Pengadaan AC",
    href: routes.pengadaanAc,
    description: "Untuk kebutuhan banyak unit, proyek, hotel, kost, kantor, kontraktor, dan developer.",
  },
  {
    label: "Kontak RADJA AC",
    href: routes.kontak,
    description: "Hubungi tim RADJA AC untuk cek stok, rekomendasi PK, pengiriman, dan opsi pemasangan.",
  },
];

export default function NotFound() {
  return (
    <main className="bg-[linear-gradient(180deg,#f8fdff_0%,#eef7ff_100%)] px-4 py-14 text-slate-900 sm:py-20">
      <section className="mx-auto max-w-5xl">
        <div className="overflow-hidden rounded-[2rem] border border-blue-100 bg-white shadow-[0_24px_70px_rgba(15,39,66,0.10)]">
          <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="bg-[linear-gradient(135deg,#0e2a47_0%,#15395a_55%,#1f4f78_100%)] p-7 text-white sm:p-10">
              <p className={`inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 ${typography.eyebrow} text-white/90`}>
                Halaman tidak ditemukan
              </p>

              <h1 className={`mt-5 ${typography.heroTitle}`}>
                404
              </h1>

              <p className="mt-4 max-w-xl text-lg font-bold leading-7">
                Link yang dibuka tidak tersedia atau sudah dipindahkan.
              </p>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/80">
                Tidak masalah. Tim RADJA AC tetap bisa membantu cek kebutuhan AC dari ukuran ruangan,
                daya listrik, stok unit, pengiriman, dan opsi pemasangan.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <WhatsappLink
                  source="404 Page"
                  intent="konsultasi dari halaman 404"
                  className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-red-600/20 transition hover:-translate-y-0.5 hover:bg-red-700"
                >
                  Konsultasi via WhatsApp
                </WhatsappLink>

                <Link
                  href={routes.home}
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/15"
                >
                  Kembali ke Beranda
                </Link>
              </div>
            </div>

            <div className="p-6 sm:p-8 lg:p-10">
              <p className={`${typography.eyebrow} text-blue-700`}>
                Arahkan ke halaman utama
              </p>

              <h2 className={`mt-3 ${typography.sectionTitle} text-blue-950`}>
                Pilih jalur yang paling dekat dengan kebutuhan Anda
              </h2>

              <div className="mt-6 grid gap-3">
                {recoveryLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group rounded-[1.35rem] border border-slate-200 bg-slate-50 p-4 transition hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50"
                  >
                    <span className="flex items-center justify-between gap-4">
                      <span className="font-bold text-blue-950">{item.label}</span>
                      <span className="text-blue-700 transition group-hover:translate-x-0.5" aria-hidden="true">
                        →
                      </span>
                    </span>
                    <span className="mt-2 block text-sm leading-6 text-slate-600">
                      {item.description}
                    </span>
                  </Link>
                ))}
              </div>

              <p className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3 text-sm leading-6 text-blue-950">
                Jika Anda datang dari link lama, gunakan halaman di atas atau kirim kebutuhan AC ke WhatsApp
                agar tim RADJA AC bantu arahkan.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
