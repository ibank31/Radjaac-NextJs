import Link from "next/link";
import { routes } from "@/content/routes";
import { buildMetadata } from "@/lib/seo";
import { staticPageMetadata } from "@/content/static-pages";
import WhatsappLink from "@/components/ui/WhatsappLink";
import PkCalculator from "@/components/calculator/PkCalculator";

export const metadata = buildMetadata(staticPageMetadata.kalkulatorPkAc);

const roomGuides = [
  {
    label: "Ruangan kecil",
    size: "Contoh: kamar kecil, kost, ruang kerja kecil",
    recommendation: "Mulai cek dari AC 1/2 PK",
    href: routes.katalogAcSetengahPk,
    cta: "Lihat AC 1/2 PK",
  },
  {
    label: "Ruangan rumah harian",
    size: "Contoh: kamar tidur, ruang keluarga, kontrakan",
    recommendation: "Cek kategori AC split rumah",
    href: routes.katalogAcSplitRumah,
    cta: "Lihat AC Split Rumah",
  },
  {
    label: "Pemakaian lama",
    size: "Contoh: kamar yang sering menyala lama atau ruang kerja",
    recommendation: "Pertimbangkan AC inverter",
    href: routes.katalogAcInverter,
    cta: "Lihat AC Inverter",
  },
  {
    label: "Daya listrik terbatas",
    size: "Contoh: rumah dengan daya 900–1300 watt atau MCB sering turun",
    recommendation: "Pertimbangkan AC low watt",
    href: routes.katalogAcLowWatt,
    cta: "Lihat AC Low Watt",
  },
];

const checkFactors = [
  "Panjang dan lebar ruangan",
  "Tinggi plafon",
  "Arah panas matahari dan jumlah jendela",
  "Jumlah orang yang sering berada di ruangan",
  "Perangkat panas seperti komputer, kulkas, atau alat masak dekat ruangan",
  "Daya listrik rumah dan MCB jika diketahui",
  "Kebutuhan unit saja atau sekalian opsi pemasangan",
];

export default function KalkulatorPkAcPage() {
  return (
    <main className="bg-[linear-gradient(180deg,#f7fbff_0%,#eef8ff_42%,#ffffff_100%)]">
      <section className="mx-auto max-w-7xl px-4 py-14 lg:py-20">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-slate-500">
          Kalkulator PK AC
        </p>
        <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
          Kalkulator PK AC untuk estimasi kebutuhan ruangan sebelum order
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Halaman ini menghitung kebutuhan awal sebelum memilih AC. Ukuran ruangan
          penting, tetapi keputusan akhir tetap perlu melihat tinggi plafon, panas matahari, jumlah orang,
          daya listrik, pola pemakaian, dan opsi pemasangan.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <WhatsappLink
            className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-4 text-sm font-black text-white transition hover:bg-slate-800"
            source="Kalkulator PK AC"
            intent="kirim ukuran ruangan dan daya listrik untuk cek kebutuhan PK AC"
          >
            Kirim Data Ruangan ke RADJA AC
          </WhatsappLink>
          <Link
            href={routes.katalog}
            className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-4 text-sm font-bold text-slate-950 transition hover:bg-slate-50"
          >
            Lihat Katalog AC
          </Link>
        </div>

        <section className="mt-12">
          <PkCalculator />
        </section>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <section className="rounded-3xl border border-slate-200 p-6">
            <h2 className="text-xl font-black text-slate-950">Data yang sebaiknya disiapkan</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
              {checkFactors.map((factor) => (
                <li key={factor} className="rounded-2xl bg-slate-50 p-4">
                  {factor}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-3xl border border-slate-200 p-6">
            <h2 className="text-xl font-black text-slate-950">Lanjutkan hasil cek ke pilihan AC</h2>
            <div className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
              <p className="rounded-2xl bg-slate-50 p-4">
                Untuk ruangan kecil, mulai dari halaman AC 1/2 PK lalu konfirmasi ukuran dan daya listrik.
              </p>
              <p className="rounded-2xl bg-slate-50 p-4">
                Untuk rumah dengan daya listrik terbatas, bandingkan kebutuhan PK dengan kategori AC low watt.
              </p>
              <p className="rounded-2xl bg-slate-50 p-4">
                Untuk pemakaian lama, cek juga kategori AC inverter agar pilihan tidak hanya berdasarkan PK.
              </p>
              <p className="rounded-2xl bg-slate-50 p-4">
                Untuk kebutuhan banyak unit, lanjutkan ke pengadaan AC agar data ruangan dan jumlah unit
                dibahas lebih rapi.
              </p>
            </div>
          </section>
        </div>

        <section className="mt-12 rounded-3xl border border-blue-100 bg-white p-6 text-slate-950 shadow-[0_18px_55px_rgba(15,39,66,0.08)]">
          <h2 className="text-2xl font-black">Mau cek hasil PK ke tim RADJA AC?</h2>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-600">
            Kirim ukuran ruangan, tinggi plafon jika tahu, daya listrik, kota, anggaran, dan kebutuhan unit
            saja atau sekalian opsi pemasangan. Tim RADJA AC cocokkan pilihan dari ukuran ruangan, daya listrik, dan stok.
          </p>
          <div className="mt-6">
            <WhatsappLink
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-4 text-sm font-black text-slate-950 transition hover:bg-slate-100"
              source="Kalkulator PK AC"
              intent="lanjut konsultasi kebutuhan PK AC dari data ruangan"
            >
              Kirim Hasil Hitung PK
            </WhatsappLink>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-black text-slate-950">Lanjutkan ke halaman terkait</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {[
              ["AC 1/2 PK", routes.katalogAcSetengahPk],
              ["AC Low Watt", routes.katalogAcLowWatt],
              ["AC Inverter", routes.katalogAcInverter],
              ["Pengadaan AC Banyak Unit", routes.pengadaanAc],
              ["Kontak RADJA AC", routes.kontak],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="rounded-2xl border border-slate-200 p-4 text-sm font-bold text-slate-700 transition hover:bg-slate-50 hover:text-slate-950"
              >
                {label}
              </Link>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
