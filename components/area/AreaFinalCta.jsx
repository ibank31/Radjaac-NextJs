import WhatsappLink from "@/components/ui/WhatsappLink";
import { typography } from "@/lib/typography";

export default function AreaFinalCta({ item }) {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-20 lg:pt-10">
      <div className="rounded-[1.7rem] border border-[#25D366]/20 bg-[#25D366]/10 p-6 text-center sm:p-10">
        <h2 className={`mx-auto mb-5 max-w-3xl ${typography.sectionTitle}`}>
          Cari AC untuk area {item.areaName}? Mulai dari data ruangan.
        </h2>
        <p className="mx-auto mb-7 max-w-2xl text-sm leading-7 text-slate-600">
          Sebutkan area/kecamatan, ukuran ruangan, daya listrik, jumlah unit,
          anggaran awal, serta kebutuhan pengiriman atau pemasangan. Tim RADJA AC
          mengecek stok, estimasi, dan opsi pembayaran sebelum pembelian.
        </p>
        <WhatsappLink
          className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-4 font-bold text-slate-950 shadow-[0_18px_50px_rgba(37,211,102,0.2)] transition hover:-translate-y-0.5 hover:bg-[#20BA5A]"
          source={`${item.label} - Final CTA`}
          intent={item.waIntent}
          area={item.waArea}
          pageType="area"
        >
          Kirim Data Ruangan
        </WhatsappLink>
      </div>
    </section>
  );
}
