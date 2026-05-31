import Link from "next/link";
import { routes } from "@/content/routes";
import { buildMetadata } from "@/lib/seo";
import { staticPageMetadata } from "@/content/static-pages";
import { warrantyHighlights } from "@/content/policies";
import WhatsappLink from "@/components/ui/WhatsappLink";

export const metadata = buildMetadata(staticPageMetadata.pengirimanPemasangan);

const processSteps = [
  "Kirim ukuran ruangan, kota, jumlah unit, brand yang diminati, dan kebutuhan unit saja atau sekalian pemasangan.",
  "Admin mengecek stok, rekomendasi PK, opsi tipe unit, serta gambaran kebutuhan teknis awal.",
  "Alamat pengiriman, akses lokasi, jumlah unit, dan jadwal dikonfirmasi sebelum unit dikirim.",
  "Opsi pemasangan dibicarakan berdasarkan titik indoor, posisi outdoor, jalur pipa, listrik, dan kesiapan lokasi.",
];

const notes = [
  "Biaya, jadwal, akses lokasi, dan kebutuhan material tambahan harus dikonfirmasi sebelum deal.",
  "Panjang pipa tambahan, bracket, bobok tembok, jalur listrik, akses tinggi, atau pemindahan titik dapat membuat kebutuhan berubah.",
  "Untuk banyak unit atau proyek, koordinasi lokasi atau survey dibahas berdasarkan kebutuhan, jumlah unit, area, dan jadwal.",
];

const siteChecks = [
  "Ukuran ruangan, tinggi plafon, arah panas, dan perkiraan jumlah orang di ruangan.",
  "Titik indoor yang diinginkan dan rencana jalur pipa menuju outdoor.",
  "Posisi outdoor: balkon, dinding luar, dak, lantai bawah, atau area khusus.",
  "Kesiapan listrik, stop kontak, MCB, dan kebutuhan jalur tambahan bila ada.",
];

const photoBriefs = [
  "Foto ruangan dari sudut lebar.",
  "Foto calon titik indoor.",
  "Foto area outdoor atau balkon.",
  "Foto panel listrik / MCB untuk membaca kesiapan daya.",
];

const relatedLinks = [
  ["Bukti Pengiriman Proyek", routes.buktiPengirimanProyek],
  ["Katalog AC", routes.katalog],
  ["Pengadaan AC", routes.pengadaanAc],
];

export default function PengirimanPemasanganPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7fbff] text-slate-950">
      <section className="relative overflow-hidden border-b border-cyan-100 bg-[linear-gradient(180deg,#f8fdff_0%,#eefbff_100%)] px-4 py-12 lg:py-20">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(37,211,102,0.12),transparent_28%)]" />
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-700">
          Pengiriman & Pemasangan
        </p>
        <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
          Pengiriman unit, kebutuhan pemasangan, dan garansi pemasangan AC
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          RADJA AC membantu pembelian AC original multi-brand dengan proses yang jelas: cek kebutuhan PK,
          cek stok, konfirmasi alamat pengiriman, kebutuhan pemasangan, garansi pemasangan 1 bulan, dan bantuan klaim unit sesuai ketentuan brand.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <WhatsappLink
            className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-4 text-sm font-black text-slate-950 transition hover:bg-[#20BA5A]"
            source="Pengiriman & Pemasangan"
            intent="konsultasi pengiriman dan opsi pemasangan AC"
          >
            Chat Admin RADJA AC
          </WhatsappLink>
          <Link
            href={routes.katalog}
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-4 text-sm font-black text-slate-900 shadow-sm transition hover:bg-slate-50"
          >
            Lihat Katalog AC
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <section className="rounded-[1.45rem] border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-black text-slate-950">Alur koordinasi</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
              {processSteps.map((step) => (
                <li key={step} className="rounded-2xl border border-slate-200 bg-[#f7fbff]/45 p-4">
                  {step}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-[1.45rem] border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-black text-slate-950">Catatan penting</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
              {notes.map((note) => (
                <li key={note} className="rounded-2xl border border-slate-200 bg-[#f7fbff]/45 p-4">
                  {note}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[1.45rem] border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-black text-slate-950">Yang dicek sebelum pemasangan</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
              {siteChecks.map((item) => (
                <li key={item} className="rounded-2xl border border-slate-200 bg-[#f7fbff]/45 p-4">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[1.45rem] border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-black text-slate-950">Foto yang sebaiknya dikirim</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
              {photoBriefs.map((item) => (
                <li key={item} className="rounded-2xl border border-slate-200 bg-[#f7fbff]/45 p-4">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-8 rounded-[1.45rem] border border-cyan-100 bg-cyan-50 p-6">
          <h2 className="text-xl font-black text-slate-950">Bukan sekadar kirim unit</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-700">
            Untuk pembelian AC, pengiriman dan pemasangan perlu dibaca dari kondisi lokasi.
            Admin RADJA AC akan mengarahkan kebutuhan awal supaya pembeli tidak hanya melihat harga unit,
            tetapi juga memahami kebutuhan pipa, bracket, posisi outdoor, akses kerja, dan jadwal.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {relatedLinks.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="rounded-full border border-cyan-200 bg-white px-4 py-2 text-sm font-bold text-cyan-800 transition hover:border-cyan-300 hover:bg-cyan-100"
              >
                {label}
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-[1.45rem] border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-black text-slate-950">Garansi & bantuan klaim</h2>
          <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-600 md:grid-cols-3">
            {warrantyHighlights.map((point) => (
              <li key={point} className="rounded-2xl border border-slate-200 bg-[#f7fbff]/45 p-4">
                {point}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12 rounded-[1.45rem] border border-[#25D366]/20 bg-[#25D366]/10 p-6 text-slate-950">
          <h2 className="text-2xl font-black">Butuh cek pengiriman atau pemasangan?</h2>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-600">
            Kirim kota, alamat area, jumlah unit, tipe ruangan, dan kebutuhan unit saja atau sekalian opsi pemasangan.
            Admin RADJA AC mengarahkan rencana pengiriman dan pemasangannya.
          </p>
        </section>
      </section>
    </main>
  );
}
