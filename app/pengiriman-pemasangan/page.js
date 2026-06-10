import Link from "next/link";
import { routes } from "@/content/routes";
import { buildMetadata } from "@/lib/seo";
import { staticPageMetadata } from "@/content/static-pages";
import { warrantyHighlights } from "@/content/policies";
import WhatsappLink from "@/components/ui/WhatsappLink";
import { typography } from "@/lib/typography";

export const metadata = buildMetadata(staticPageMetadata.pengirimanPemasangan);

const processSteps = [
  "Kirim ukuran ruangan, kota, jumlah unit, brand yang diminati, dan kebutuhan unit saja atau sekalian pemasangan.",
  "Tim Radja AC mengecek stok, rekomendasi PK, opsi tipe unit, serta gambaran kebutuhan teknis awal.",
  "Alamat pengiriman, akses lokasi, jumlah unit, dan jadwal dikonfirmasi sebelum unit dikirim.",
  "Opsi pemasangan dibicarakan berdasarkan titik indoor, posisi outdoor, jalur pipa, listrik, dan kesiapan lokasi.",
];

const notes = [
  "Tim Radja AC cek biaya, jadwal, akses lokasi, dan kebutuhan material tambahan sebelum pembelian.",
  "Panjang pipa tambahan, bracket, bobok tembok, jalur listrik, akses tinggi, atau pemindahan titik dapat membuat kebutuhan berubah.",
  "Pembayaran seperti DP, transfer, atau COD dapat dikonfirmasi setelah unit, alamat, jadwal pengiriman, dan opsi pemasangan jelas.",
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
      <section className="relative overflow-hidden border-b border-blue-100 bg-[linear-gradient(180deg,#f8fdff_0%,#eefbff_100%)] px-4 py-12 lg:py-20">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(37,211,102,0.12),transparent_28%)]" />
        <p className={`${typography.eyebrow} text-blue-700`}>
          Pengiriman & Pemasangan
        </p>
        <h1 className={`mt-4 max-w-4xl ${typography.pageTitle} text-slate-950`}>
          Pengiriman unit, kebutuhan pemasangan, dan garansi pemasangan AC
        </h1>
        <p className="mt-6 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
          Radja AC membantu pembelian AC original multi-brand dari data teknis yang nyata: ukuran ruangan, kebutuhan PK,
          cek stok, konfirmasi alamat pengiriman, kebutuhan pemasangan, garansi pemasangan 1 bulan, dan bantuan klaim unit sesuai ketentuan brand.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <WhatsappLink
            className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-4 text-sm font-bold text-slate-950 transition hover:bg-[#20BA5A]"
            source="Pengiriman & Pemasangan"
            intent="konsultasi pengiriman dan opsi pemasangan AC"
          >
            Cek Pemasangan dari Foto Lokasi
          </WhatsappLink>
          <Link
            href={routes.katalog}
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-4 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
          >
            Lihat Katalog AC
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <section className="rounded-[1.45rem] border border-slate-200 bg-white p-6">
            <h2 className={`${typography.sectionTitle} text-slate-950`}>Alur koordinasi</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
              {processSteps.map((step) => (
                <li key={step} className="rounded-2xl border border-slate-200 bg-[#f7fbff]/45 p-4">
                  {step}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-[1.45rem] border border-slate-200 bg-white p-6">
            <h2 className={`${typography.sectionTitle} text-slate-950`}>Catatan penting</h2>
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
            <h2 className={`${typography.sectionTitle} text-slate-950`}>Yang dicek sebelum pemasangan</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
              {siteChecks.map((item) => (
                <li key={item} className="rounded-2xl border border-slate-200 bg-[#f7fbff]/45 p-4">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[1.45rem] border border-slate-200 bg-white p-6">
            <h2 className={`${typography.sectionTitle} text-slate-950`}>Foto yang dikirim sebelum cek pemasangan</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
              {photoBriefs.map((item) => (
                <li key={item} className="rounded-2xl border border-slate-200 bg-[#f7fbff]/45 p-4">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-8 rounded-[1.45rem] border border-blue-100 bg-blue-50 p-6">
          <h2 className={`${typography.sectionTitle} text-slate-950`}>Bukan sekadar kirim unit</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-700">
            Untuk pembelian AC, pengiriman dan pemasangan perlu dibaca dari kondisi lokasi.
            Tim Radja AC membantu membaca kebutuhan awal agar pembeli memahami estimasi pengiriman, posisi pemasangan,
            kebutuhan pipa/bracket, titik outdoor, akses kerja, material tambahan, dan jadwal sebelum order dijalankan.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {relatedLinks.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-bold text-blue-800 transition hover:border-blue-300 hover:bg-blue-100"
              >
                {label}
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-[1.45rem] border border-slate-200 bg-white p-6">
          <h2 className={`${typography.sectionTitle} text-slate-950`}>Garansi & bantuan klaim</h2>
          <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-600 md:grid-cols-3">
            {warrantyHighlights.map((point) => (
              <li key={point} className="rounded-2xl border border-slate-200 bg-[#f7fbff]/45 p-4">
                {point}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12 rounded-[1.45rem] border border-[#25D366]/20 bg-[#25D366]/10 p-6 text-slate-950">
          <h2 className={`${typography.sectionTitle}`}>Butuh cek pengiriman atau pemasangan?</h2>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-600">
            Kirim kota, alamat area, jumlah unit, tipe ruangan, dan kebutuhan unit saja atau sekalian opsi pemasangan.
            Tim Radja AC cek alamat, akses lokasi, jadwal kirim, dan kebutuhan pemasangan.
          </p>
          <div className="mt-6">
            <WhatsappLink
              className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-4 text-sm font-bold text-slate-950 transition hover:bg-[#20BA5A]"
              source="Pengiriman & Pemasangan - Final CTA"
              intent="cek pengiriman dan pemasangan AC"
            >
              Kirim Data Lokasi
            </WhatsappLink>
          </div>
        </section>
      </section>
    </main>
  );
}
