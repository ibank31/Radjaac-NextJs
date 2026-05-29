import Link from "next/link";
import { routes } from "@/content/routes";
import { buildMetadata } from "@/lib/seo";
import WhatsappLink from "@/components/ui/WhatsappLink";

export const metadata = buildMetadata({
  title: "Bukti Pengiriman & Proyek AC | RADJA AC",
  description:
    "Halaman trust RADJA AC untuk dokumentasi pengiriman unit, koordinasi proyek, showroom, stok, dan bukti operasional yang relevan untuk calon pembeli AC.",
  path: routes.buktiPengirimanProyek,
});

const proofPoints = [
  "Dokumentasi showroom dan stok unit membantu calon pembeli melihat bahwa RADJA AC memiliki aktivitas operasional nyata.",
  "Dokumentasi pengiriman dapat membantu memberi gambaran proses distribusi unit ke pelanggan.",
  "Untuk proyek atau pembelian banyak unit, dokumentasi dan koordinasi tetap mengikuti kebutuhan, izin, dan kondisi lapangan.",
];

const safeNotes = [
  "Tidak semua pengiriman atau proyek ditampilkan di website.",
  "Foto dan dokumentasi bisa berbeda sesuai waktu, stok, brand, dan kebutuhan pelanggan.",
  "Detail proyek, lokasi, jumlah unit, dan jadwal tetap dikonfirmasi langsung melalui admin.",
];

export default function BuktiPengirimanProyekPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-slate-500">
          Bukti & Trust
        </p>
        <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
          Bukti pengiriman, stok, dan aktivitas RADJA AC
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Halaman ini menjadi tempat awal untuk menampilkan trust signal RADJA AC: showroom, stok, dokumentasi
          pengiriman, dan aktivitas proyek yang relevan. Detail bukti akan dilengkapi bertahap tanpa klaim berlebihan.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <WhatsappLink
            className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-4 text-sm font-black text-white transition hover:bg-slate-800"
            source="Bukti Pengiriman Proyek"
            intent="cek stok dan bukti operasional RADJA AC"
          >
            Chat Admin RADJA AC
          </WhatsappLink>
          <Link
            href={routes.pengadaanAc}
            className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-4 text-sm font-bold text-slate-950 transition hover:bg-slate-50"
          >
            Pengadaan AC
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <section className="rounded-3xl border border-slate-200 p-6">
            <h2 className="text-xl font-black text-slate-950">Yang ingin dibuktikan</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
              {proofPoints.map((point) => (
                <li key={point} className="rounded-2xl bg-slate-50 p-4">
                  {point}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-3xl border border-slate-200 p-6">
            <h2 className="text-xl font-black text-slate-950">Catatan aman</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
              {safeNotes.map((note) => (
                <li key={note} className="rounded-2xl bg-slate-50 p-4">
                  {note}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="mt-12 rounded-3xl bg-slate-950 p-6 text-white">
          <h2 className="text-2xl font-black">Butuh bukti sebelum order?</h2>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300">
            Chat admin untuk cek stok, opsi brand, pengiriman, dan informasi operasional yang relevan sebelum pembelian.
          </p>
        </section>
      </section>
    </main>
  );
}
