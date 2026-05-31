import Link from "next/link";
import { routes } from "@/content/routes";
import { buildMetadata } from "@/lib/seo";
import { staticPageMetadata } from "@/content/static-pages";
import WhatsappLink from "@/components/ui/WhatsappLink";

export const metadata = buildMetadata(staticPageMetadata.gantiAcBaruPurwokerto);

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
    <main className="min-h-screen overflow-hidden bg-[#f7fbff] text-slate-950">
      <section className="relative overflow-hidden border-b border-cyan-100 bg-[linear-gradient(180deg,#f8fdff_0%,#eefbff_100%)] px-4 py-12 lg:py-20">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(37,211,102,0.12),transparent_28%)]" />
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-700">
          Ganti AC Baru
        </p>
        <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
          Ganti AC baru di Purwokerto saat unit lama sudah tidak nyaman dipakai
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Jika AC lama mulai sering bermasalah, kurang dingin, boros listrik, atau sudah tidak sesuai
          kebutuhan ruangan, RADJA AC mencocokkan pilihan AC baru yang lebih masuk akal.
          Fokus halaman ini adalah konsultasi pembelian unit baru, cek kebutuhan PK, stok, daya listrik,
          budget, pengiriman, dan opsi pemasangan.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <WhatsappLink
            className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-4 text-sm font-black text-slate-950 transition hover:bg-[#20BA5A]"
            source="Ganti AC Baru Purwokerto"
            intent="konsultasi ganti AC baru Purwokerto dari unit lama ke unit baru"
            area="Purwokerto"
          >
            Chat WA untuk Ganti AC Baru
          </WhatsappLink>
          <Link
            href={routes.katalog}
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-4 text-sm font-black text-slate-900 shadow-sm transition hover:bg-slate-50"
          >
            Lihat Katalog AC
          </Link>
        </div>

        <section className="mt-12 rounded-[1.45rem] border border-cyan-100 bg-cyan-50 p-6">
          <h2 className="text-2xl font-black text-slate-950">Catatan penting</h2>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-600">
            RADJA AC berfokus membantu pembelian AC baru. Untuk perbaikan, cuci AC, atau bongkar-pasang
            service murni, admin akan cek kebutuhan dan ketersediaan informasi sebelum membahas pilihan unit baru.
            Untuk mengganti unit lama dengan unit baru, kirim data ruangan agar pilihan
            AC bisa dicek lebih rapi.
          </p>
        </section>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <section className="rounded-[1.45rem] border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-black text-slate-950">Kapan mulai pertimbangkan ganti unit?</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
              {decisionChecks.map((point) => (
                <li key={point} className="rounded-2xl border border-slate-200 bg-[#f7fbff]/45 p-4">
                  {point}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-[1.45rem] border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-black text-slate-950">Data yang sebaiknya dikirim ke admin</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
              {prepareData.map((point) => (
                <li key={point} className="rounded-2xl border border-slate-200 bg-[#f7fbff]/45 p-4">
                  {point}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="mt-8 rounded-[1.45rem] border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-black text-slate-950">Arah pilihan AC baru</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <Link href={routes.kalkulatorPkAc} className="rounded-2xl border border-slate-200 bg-[#f7fbff]/45 p-4 text-sm leading-6 text-slate-600 transition hover:border-cyan-200">
              <strong className="block text-slate-950">Cek kebutuhan PK</strong>
              Mulai dari ukuran ruangan, tinggi plafon, dan daya listrik.
            </Link>
            <Link href={routes.katalogAcLowWatt} className="rounded-2xl border border-slate-200 bg-[#f7fbff]/45 p-4 text-sm leading-6 text-slate-600 transition hover:border-cyan-200">
              <strong className="block text-slate-950">Pertimbangkan low watt</strong>
              Cocok jika daya listrik terbatas atau ingin pilihan yang lebih ringan.
            </Link>
            <Link href={routes.katalogAcInverter} className="rounded-2xl border border-slate-200 bg-[#f7fbff]/45 p-4 text-sm leading-6 text-slate-600 transition hover:border-cyan-200">
              <strong className="block text-slate-950">Bandingkan inverter</strong>
              Cocok untuk ruangan yang sering dipakai lama dan butuh kenyamanan stabil.
            </Link>
          </div>
        </section>

        <section className="mt-12 rounded-[1.45rem] border border-[#25D366]/20 bg-[#25D366]/10 p-6 text-slate-950">
          <h2 className="text-2xl font-black">Mau cek pilihan unit baru?</h2>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-600">
            Kirim kondisi singkat AC lama, ukuran ruangan, daya listrik, lokasi, budget, dan kebutuhan
            unit saja atau sekalian opsi pemasangan. Admin RADJA AC cocokkan pilihan AC baru yang
            masuk akal sebelum pembelian.
          </p>
          <div className="mt-6">
            <WhatsappLink
              className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-4 text-sm font-black text-slate-950 transition hover:bg-[#20BA5A]"
              source="Ganti AC Baru Purwokerto"
              intent="cek pilihan unit baru untuk mengganti AC lama di Purwokerto"
              area="Purwokerto"
            >
              Cek Pengganti AC Lama
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
                className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-bold text-slate-600 transition hover:border-cyan-200 hover:text-cyan-700"
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
