import Link from "next/link";
import { routes } from "@/content/routes";
import { buildMetadata } from "@/lib/seo";
import WhatsappLink from "@/components/ui/WhatsappLink";

export const metadata = buildMetadata({
  title: "Pengadaan AC untuk Kost, Hotel, Kantor & Proyek | RADJA AC",
  description:
    "RADJA AC membantu kebutuhan pengadaan AC banyak unit untuk kost, apartemen, hotel, guest house, kantor, kontraktor, developer, dan proyek.",
  path: routes.pengadaanAc,
});

const procurementLinks = [
  { label: "Kost & Apartemen", href: routes.pengadaanKostApartemen },
  { label: "Hotel & Guest House", href: routes.pengadaanHotelGuestHouse },
  { label: "Kontraktor & Developer", href: routes.pengadaanKontraktorDeveloper },
];

export default function PengadaanAcPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-slate-500">
          Pengadaan AC
        </p>
        <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
          Pengadaan AC banyak unit untuk bisnis, properti, dan proyek.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          RADJA AC membantu koordinasi kebutuhan AC banyak unit: rekomendasi PK, pilihan brand,
          cek stok, pengiriman, dan opsi pemasangan sesuai brief proyek.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {procurementLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-3xl border border-slate-200 p-6 font-black text-slate-950 transition hover:-translate-y-1 hover:shadow-lg"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <WhatsappLink
          className="mt-8 inline-flex rounded-full bg-slate-950 px-6 py-4 text-sm font-black text-white transition hover:bg-slate-800"
          source="Halaman Pengadaan AC"
          intent="konsultasi pengadaan AC banyak unit"
        >
          Kirim Brief Pengadaan
        </WhatsappLink>
      </section>
    </main>
  );
}
