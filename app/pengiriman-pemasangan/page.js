import Link from "next/link";
import { routes } from "@/content/routes";
import { buildMetadata } from "@/lib/seo";
import { staticPageMetadata } from "@/content/static-pages";
import { warrantyHighlights } from "@/content/policies";
import WhatsappLink from "@/components/ui/WhatsappLink";

export const metadata = buildMetadata(staticPageMetadata.pengirimanPemasangan);

const processSteps = [
  "Kirim kebutuhan ruangan, kota, dan brand yang diminati.",
  "Admin bantu cek stok, rekomendasi PK, dan opsi unit.",
  "Pengiriman unit dikonfirmasi berdasarkan alamat, jumlah unit, dan jadwal.",
  "Opsi pemasangan fleksibel dibicarakan terlebih dahulu sesuai area, titik pemasangan, jumlah unit, dan kebutuhan teknis.",
];

const notes = [
  "Pengiriman dan opsi pemasangan fleksibel dikonfirmasi terlebih dahulu sesuai lokasi, jumlah unit, jadwal, dan kondisi teknis.",
  "Untuk kebutuhan banyak unit atau proyek, koordinasi lokasi atau survey bisa dibicarakan sesuai kebutuhan, lokasi, jumlah unit, dan jadwal.",
  "Biaya, jadwal, akses lokasi, dan kebutuhan material tambahan harus dikonfirmasi sebelum deal.",
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
          Pengiriman unit, opsi pemasangan fleksibel, dan garansi pemasangan AC
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          RADJA AC membantu pembelian AC original multi-brand dengan proses yang jelas: cek kebutuhan PK,
          cek stok, konfirmasi alamat pengiriman, opsi pemasangan fleksibel, garansi pemasangan 1 bulan, dan bantuan klaim unit sesuai ketentuan brand.
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
            Admin RADJA AC bantu cek kemungkinan pengiriman dan pemasangannya.
          </p>
        </section>
      </section>
    </main>
  );
}
