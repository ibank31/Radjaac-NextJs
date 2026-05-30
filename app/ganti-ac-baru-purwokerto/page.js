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
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <section className="relative mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(37,211,102,0.12),transparent_28%)]" />
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
          Ganti AC Baru
        </p>
        <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight text-white md:text-5xl">
          Ganti AC baru di Purwokerto saat unit lama sudah tidak nyaman dipakai
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
          Jika AC lama mulai sering bermasalah, kurang dingin, boros listrik, atau sudah tidak sesuai
          kebutuhan ruangan, RADJA AC membantu Anda mempertimbangkan pilihan AC baru yang lebih masuk akal.
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
            className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-4 text-sm font-bold text-white transition hover:bg-white/[0.05]"
          >
            Lihat Katalog AC
          </Link>
        </div>

        <section className="mt-12 rounded-3xl border border-cyan-300/15 bg-cyan-300/[0.055] p-6">
          <h2 className="text-2xl font-black text-white">Catatan penting</h2>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-white/65">
            RADJA AC berfokus membantu pembelian AC baru. Untuk perbaikan, cuci AC, atau bongkar-pasang
            service murni, admin akan mengarahkan pembicaraan sesuai kebutuhan dan ketersediaan informasi.
            Jika tujuan Anda adalah mengganti unit lama dengan unit baru, kirim data ruangan agar pilihan
            AC bisa dicek lebih rapi.
          </p>
        </section>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <h2 className="text-xl font-black text-white">Kapan mulai pertimbangkan ganti unit?</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-white/65">
              {decisionChecks.map((point) => (
                <li key={point} className="rounded-2xl border border-white/10 bg-slate-950/45 p-4">
                  {point}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <h2 className="text-xl font-black text-white">Data yang sebaiknya dikirim ke admin</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-white/65">
              {prepareData.map((point) => (
                <li key={point} className="rounded-2xl border border-white/10 bg-slate-950/45 p-4">
                  {point}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
          <h2 className="text-xl font-black text-white">Arah pilihan AC baru</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <Link href={routes.kalkulatorPkAc} className="rounded-2xl border border-white/10 bg-slate-950/45 p-4 text-sm leading-6 text-white/65 transition hover:border-cyan-300/30">
              <strong className="block text-white">Cek kebutuhan PK</strong>
              Mulai dari ukuran ruangan, tinggi plafon, dan daya listrik.
            </Link>
            <Link href={routes.katalogAcLowWatt} className="rounded-2xl border border-white/10 bg-slate-950/45 p-4 text-sm leading-6 text-white/65 transition hover:border-cyan-300/30">
              <strong className="block text-white">Pertimbangkan low watt</strong>
              Cocok jika daya listrik terbatas atau ingin pilihan yang lebih ringan.
            </Link>
            <Link href={routes.katalogAcInverter} className="rounded-2xl border border-white/10 bg-slate-950/45 p-4 text-sm leading-6 text-white/65 transition hover:border-cyan-300/30">
              <strong className="block text-white">Bandingkan inverter</strong>
              Cocok untuk ruangan yang sering dipakai lama dan butuh kenyamanan stabil.
            </Link>
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-[#25D366]/20 bg-[#25D366]/10 p-6 text-white">
          <h2 className="text-2xl font-black">Mau dibantu cek pilihan unit baru?</h2>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-white/70">
            Kirim kondisi singkat AC lama, ukuran ruangan, daya listrik, lokasi, budget, dan kebutuhan
            unit saja atau sekalian opsi pemasangan. Admin RADJA AC bantu arahkan pilihan AC baru yang
            masuk akal sebelum Anda deal.
          </p>
          <div className="mt-6">
            <WhatsappLink
              className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-4 text-sm font-black text-slate-950 transition hover:bg-[#20BA5A]"
              source="Ganti AC Baru Purwokerto"
              intent="cek pilihan unit baru untuk mengganti AC lama di Purwokerto"
              area="Purwokerto"
            >
              Chat Admin RADJA AC
            </WhatsappLink>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-black text-white">Lanjutkan ke halaman terkait</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {nextLinks.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm font-bold text-white/70 transition hover:border-cyan-300/30 hover:text-cyan-200"
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
