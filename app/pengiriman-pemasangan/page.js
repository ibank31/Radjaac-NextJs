import Link from "next/link";
import { routes } from "@/content/routes";
import { buildMetadata } from "@/lib/seo";
import { warrantyHighlights } from "@/content/policies";
import WhatsappLink from "@/components/ui/WhatsappLink";

export const metadata = buildMetadata({
  title: "Pengiriman & Pemasangan AC | RADJA AC",
  description:
    "Informasi pengiriman unit dan opsi pemasangan AC melalui RADJA AC. Area, jadwal, stok, dan kebutuhan pemasangan dikonfirmasi admin sebelum pembelian.",
  path: routes.pengirimanPemasangan,
});

const processSteps = [
  "Kirim kebutuhan ruangan, kota, dan brand yang diminati.",
  "Admin bantu cek stok, rekomendasi PK, dan opsi unit.",
  "Pengiriman unit dikonfirmasi berdasarkan alamat, jumlah unit, dan jadwal.",
  "Opsi pemasangan dibicarakan terlebih dahulu sesuai area, titik pemasangan, dan kebutuhan teknis.",
];

const notes = [
  "Pengiriman dan opsi pemasangan tidak dibuat otomatis untuk semua lokasi; admin akan konfirmasi terlebih dahulu.",
  "Untuk kebutuhan banyak unit atau proyek, koordinasi lokasi atau survey bisa dibicarakan sesuai kebutuhan, lokasi, jumlah unit, dan jadwal.",
  "Biaya, jadwal, akses lokasi, dan kebutuhan material tambahan harus dikonfirmasi sebelum deal.",
];

export default function PengirimanPemasanganPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-slate-500">
          Pengiriman & Pemasangan
        </p>
        <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
          Pengiriman unit dan opsi pemasangan AC yang dikonfirmasi admin
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          RADJA AC membantu pembelian AC original multi-brand dengan proses yang jelas: cek kebutuhan PK,
          cek stok, konfirmasi alamat pengiriman, dan opsi pemasangan yang dibicarakan sebelum pembelian.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <WhatsappLink
            className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-4 text-sm font-black text-white transition hover:bg-slate-800"
            source="Pengiriman & Pemasangan"
            intent="konsultasi pengiriman dan opsi pemasangan AC"
          >
            Chat Admin RADJA AC
          </WhatsappLink>
          <Link
            href={routes.katalog}
            className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-4 text-sm font-bold text-slate-950 transition hover:bg-slate-50"
          >
            Lihat Katalog AC
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <section className="rounded-3xl border border-slate-200 p-6">
            <h2 className="text-xl font-black text-slate-950">Alur koordinasi</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
              {processSteps.map((step) => (
                <li key={step} className="rounded-2xl bg-slate-50 p-4">
                  {step}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-3xl border border-slate-200 p-6">
            <h2 className="text-xl font-black text-slate-950">Catatan penting</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
              {notes.map((note) => (
                <li key={note} className="rounded-2xl bg-slate-50 p-4">
                  {note}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="mt-8 rounded-3xl border border-slate-200 p-6">
          <h2 className="text-xl font-black text-slate-950">Garansi & bantuan klaim</h2>
          <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-600 md:grid-cols-3">
            {warrantyHighlights.map((point) => (
              <li key={point} className="rounded-2xl bg-slate-50 p-4">
                {point}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12 rounded-3xl bg-slate-950 p-6 text-white">
          <h2 className="text-2xl font-black">Butuh cek pengiriman atau pemasangan?</h2>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300">
            Kirim kota, alamat area, jumlah unit, tipe ruangan, dan kebutuhan unit saja atau sekalian opsi pemasangan.
            Admin RADJA AC bantu cek kemungkinan pengiriman dan pemasangannya.
          </p>
        </section>
      </section>
    </main>
  );
}
