import Link from "next/link";
import { routes } from "@/content/routes";
import { buildMetadata } from "@/lib/seo";
import WhatsappLink from "@/components/ui/WhatsappLink";

export const metadata = buildMetadata({
  title: "Ganti AC Baru Purwokerto | Cek Unit Baru, PK & Opsi Pemasangan",
  description:
    "AC lama mulai bermasalah? RADJA AC bantu pertimbangkan ganti AC baru di Purwokerto dengan konsultasi PK, cek stok unit, daya listrik, budget, dan opsi pemasangan.",
  path: routes.gantiAcBaruPurwokerto,
});

const decisionChecks = [
  "AC lama sudah sering bermasalah atau kurang nyaman dipakai",
  "Kebutuhan ruangan berubah, misalnya kamar, kost, toko, atau kantor kecil",
  "Daya listrik perlu dicek ulang sebelum memilih unit baru",
  "Budget pembelian perlu disesuaikan dengan tipe standard, low watt, atau inverter",
  "Butuh unit saja atau sekalian opsi pengiriman dan pemasangan",
];

const prepareData = [
  "Lokasi area Purwokerto atau sekitar Banyumas",
  "Ukuran ruangan dan tinggi plafon jika tahu",
  "Daya listrik rumah atau tempat usaha",
  "Kondisi singkat AC lama dan alasan ingin ganti unit",
  "Preferensi brand, tipe, dan perkiraan budget",
];

const nextLinks = [
  ["Jual AC Purwokerto", routes.jualAcPurwokerto],
  ["Katalog AC", routes.katalog],
  ["Kalkulator PK AC", routes.kalkulatorPkAc],
  ["AC Low Watt", routes.katalogAcLowWatt],
  ["AC Inverter", routes.katalogAcInverter],
  ["Kontak RADJA AC", routes.kontak],
];

export default function GantiAcBaruPurwokertoPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-slate-500">
          Ganti AC Baru
        </p>
        <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
          Ganti AC baru di Purwokerto saat unit lama sudah tidak nyaman dipakai
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Jika AC lama mulai sering bermasalah, kurang dingin, boros listrik, atau sudah tidak sesuai
          kebutuhan ruangan, RADJA AC membantu Anda mempertimbangkan pilihan AC baru yang lebih masuk akal.
          Fokus halaman ini adalah konsultasi pembelian unit baru, cek kebutuhan PK, stok, daya listrik,
          budget, pengiriman, dan opsi pemasangan.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <WhatsappLink
            className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-4 text-sm font-black text-white transition hover:bg-slate-800"
            source="Ganti AC Baru Purwokerto"
            intent="konsultasi ganti AC baru Purwokerto dari unit lama ke unit baru"
            area="Purwokerto"
          >
            Chat WA untuk Ganti AC Baru
          </WhatsappLink>
          <Link
            href={routes.katalog}
            className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-4 text-sm font-bold text-slate-950 transition hover:bg-slate-50"
          >
            Lihat Katalog AC
          </Link>
        </div>

        <section className="mt-12 rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-2xl font-black text-slate-950">Catatan penting</h2>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-600">
            RADJA AC berfokus membantu pembelian AC baru. Untuk perbaikan, cuci AC, atau bongkar-pasang
            service murni, admin akan mengarahkan pembicaraan sesuai kebutuhan dan ketersediaan informasi.
            Jika tujuan Anda adalah mengganti unit lama dengan unit baru, kirim data ruangan agar pilihan
            AC bisa dicek lebih rapi.
          </p>
        </section>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <section className="rounded-3xl border border-slate-200 p-6">
            <h2 className="text-xl font-black text-slate-950">Kapan mulai pertimbangkan ganti unit?</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
              {decisionChecks.map((point) => (
                <li key={point} className="rounded-2xl bg-slate-50 p-4">
                  {point}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-3xl border border-slate-200 p-6">
            <h2 className="text-xl font-black text-slate-950">Data yang sebaiknya dikirim ke admin</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
              {prepareData.map((point) => (
                <li key={point} className="rounded-2xl bg-slate-50 p-4">
                  {point}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="mt-8 rounded-3xl border border-slate-200 p-6">
          <h2 className="text-xl font-black text-slate-950">Arah pilihan AC baru</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <Link href={routes.kalkulatorPkAc} className="rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-600 transition hover:bg-slate-100">
              <strong className="block text-slate-950">Cek kebutuhan PK</strong>
              Mulai dari ukuran ruangan, tinggi plafon, dan daya listrik.
            </Link>
            <Link href={routes.katalogAcLowWatt} className="rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-600 transition hover:bg-slate-100">
              <strong className="block text-slate-950">Pertimbangkan low watt</strong>
              Cocok jika daya listrik terbatas atau ingin pilihan yang lebih ringan.
            </Link>
            <Link href={routes.katalogAcInverter} className="rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-600 transition hover:bg-slate-100">
              <strong className="block text-slate-950">Bandingkan inverter</strong>
              Cocok untuk ruangan yang sering dipakai lama dan butuh kenyamanan stabil.
            </Link>
          </div>
        </section>

        <section className="mt-12 rounded-3xl bg-slate-950 p-6 text-white">
          <h2 className="text-2xl font-black">Mau dibantu cek pilihan unit baru?</h2>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300">
            Kirim kondisi singkat AC lama, ukuran ruangan, daya listrik, lokasi, budget, dan kebutuhan
            unit saja atau sekalian opsi pemasangan. Admin RADJA AC bantu arahkan pilihan AC baru yang
            masuk akal sebelum Anda deal.
          </p>
          <div className="mt-6">
            <WhatsappLink
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-4 text-sm font-black text-slate-950 transition hover:bg-slate-100"
              source="Ganti AC Baru Purwokerto"
              intent="cek pilihan unit baru untuk mengganti AC lama di Purwokerto"
              area="Purwokerto"
            >
              Chat Admin RADJA AC
            </WhatsappLink>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-black text-slate-950">Lanjutkan ke halaman terkait</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {nextLinks.map(([label, href]) => (
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
