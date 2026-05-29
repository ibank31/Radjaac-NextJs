import Link from "next/link";
import { routes } from "@/content/routes";
import { buildMetadata } from "@/lib/seo";
import WhatsappLink from "@/components/ui/WhatsappLink";

export const metadata = buildMetadata({
  title: "Jual AC Original Multi-Brand | RADJA AC",
  description:
    "RADJA AC membantu pembelian AC original multi-brand untuk rumah, usaha, kantor, hotel, proyek, dan kebutuhan banyak unit. Konsultasi PK, cek stok, pengiriman, dan opsi pemasangan.",
  path: routes.jualAc,
});

export default function JualAcPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-slate-500">
          Jual AC RADJA AC
        </p>
        <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
          Jual AC original multi-brand untuk kebutuhan rumah, usaha, kantor, hotel, dan proyek.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          RADJA AC membantu pembeli memilih AC berdasarkan ukuran ruangan, daya listrik, budget,
          stok unit, area pengiriman, dan opsi pemasangan yang memungkinkan.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <WhatsappLink
            className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-4 text-sm font-black text-white transition hover:bg-slate-800"
            source="Halaman Jual AC"
            intent="konsultasi pembelian AC"
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
      </section>
    </main>
  );
}
