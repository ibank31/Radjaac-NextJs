import Link from "next/link";
import { routes } from "@/content/routes";
import { buildMetadata } from "@/lib/seo";
import WhatsappLink from "@/components/ui/WhatsappLink";

export const metadata = buildMetadata({
  title: "Katalog AC | Pilihan AC Split, Inverter, Low Watt & Komersial",
  description:
    "Lihat kategori AC yang bisa dikonsultasikan di RADJA AC: AC 1/2 PK, split rumah, inverter, low watt, dan AC kantor/komersial.",
  path: routes.katalog,
});

const categories = [
  { label: "AC 1/2 PK", href: routes.katalogAcSetengahPk },
  { label: "AC Split Rumah", href: routes.katalogAcSplitRumah },
  { label: "AC Inverter", href: routes.katalogAcInverter },
  { label: "AC Low Watt", href: routes.katalogAcLowWatt },
  { label: "AC Kantor & Komersial", href: routes.katalogAcKantorKomersial },
];

export default function KatalogPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-slate-500">
          Katalog AC
        </p>
        <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
          Mulai pilih AC dari kebutuhan ruangan, daya listrik, dan pola pemakaian.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Katalog ini membantu Anda menentukan kategori AC sebelum chat admin untuk cek stok,
          rekomendasi PK, harga, pengiriman, dan opsi pemasangan.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((item) => (
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
          source="Halaman Katalog"
          intent="konsultasi kategori AC dan rekomendasi PK"
        >
          Konsultasi Pilihan AC
        </WhatsappLink>
      </section>
    </main>
  );
}
