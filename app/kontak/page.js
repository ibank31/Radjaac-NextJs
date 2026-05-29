import { routes } from "@/content/routes";
import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import WhatsappLink from "@/components/ui/WhatsappLink";

export const metadata = buildMetadata({
  title: "Kontak RADJA AC | Chat Admin untuk Cek Stok & Konsultasi AC",
  description:
    "Hubungi RADJA AC untuk konsultasi pembelian AC, cek stok, rekomendasi PK, pengiriman unit, opsi pemasangan, dan pengadaan banyak unit.",
  path: routes.kontak,
});

export default function KontakPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-slate-500">
          Kontak RADJA AC
        </p>
        <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
          Chat admin untuk cek stok, rekomendasi PK, pengiriman, dan opsi pemasangan.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          RADJA AC berbasis di {siteConfig.businessBase}. Sampaikan ukuran ruangan, daya listrik,
          budget, lokasi, dan jumlah unit agar admin bisa bantu arahkan pilihan AC yang sesuai.
        </p>

        <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-sm font-bold text-slate-500">WhatsApp</p>
          <p className="mt-2 text-2xl font-black text-slate-950">
            {siteConfig.whatsappDisplay}
          </p>
          <WhatsappLink
            className="mt-5 inline-flex rounded-full bg-slate-950 px-6 py-4 text-sm font-black text-white transition hover:bg-slate-800"
            source="Halaman Kontak"
            intent="konsultasi pembelian AC"
          >
            Chat Admin RADJA AC
          </WhatsappLink>
        </div>
      </section>
    </main>
  );
}
