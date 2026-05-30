import Link from "next/link";
import { routes } from "@/content/routes";
import WhatsappLink from "@/components/ui/WhatsappLink";

const footerGroups = [
  {
    title: "Belanja AC",
    links: [
      { label: "Jual AC", href: routes.jualAc },
      { label: "Katalog AC", href: routes.katalog },
      { label: "Kalkulator PK AC", href: routes.kalkulatorPkAc },
      { label: "Kontak", href: routes.kontak },
    ],
  },
  {
    title: "Proyek",
    links: [
      { label: "Pengadaan AC", href: routes.pengadaanAc },
      { label: "Kost & Apartemen", href: routes.pengadaanKostApartemen },
      { label: "Hotel & Guest House", href: routes.pengadaanHotelGuestHouse },
      { label: "Kontraktor & Developer", href: routes.pengadaanKontraktorDeveloper },
    ],
  },
  {
    title: "Kepercayaan",
    links: [
      { label: "Tentang RADJA AC", href: routes.tentangKami },
      { label: "Bukti Pengiriman", href: routes.buktiPengirimanProyek },
      { label: "Pengiriman & Pemasangan", href: routes.pengirimanPemasangan },
      { label: "Artikel Panduan", href: routes.artikel },
    ],
  },
];

const trustHighlights = [
  "AC original multi-brand",
  "Cek PK & stok",
  "Satuan hingga banyak unit",
  "Garansi pasang 1 bulan",
];

export default function Footer() {
  return (
    <footer className="border-t border-[#2f6f9e] bg-[#4984B8] text-slate-950 shadow-[inset_0_14px_34px_rgba(15,23,42,0.10)]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 lg:grid-cols-[1fr_1.9fr] lg:py-14">
        <div>
          <div className="inline-flex rounded-full border border-black/10 bg-white/25 px-3.5 py-1.5 text-[11px] font-black uppercase tracking-[0.18em] text-slate-950 shadow-sm">
            AC Original Multi-Brand
          </div>

          <p className="mt-5 text-2xl font-black tracking-[-0.03em] text-white">
            RADJA AC
          </p>

          <p className="mt-3 max-w-md text-sm leading-7 text-white/90">
            Kurasi AC original untuk rumah, usaha, properti, dan proyek. Admin membantu cek PK, stok, pengiriman, opsi pemasangan, dan kebutuhan banyak unit dengan alur yang jelas.
          </p>

          <p className="mt-3 text-sm leading-7 text-white/80">
            Berbasis di Sokaraja, Banyumas. Estimasi akhir dikonfirmasi sesuai stok, area pengiriman, dan kondisi pemasangan.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {trustHighlights.map((item) => (
              <span key={item} className="rounded-full border border-black/10 bg-white/25 px-3 py-1.5 text-[11px] font-bold text-slate-950 shadow-sm">
                {item}
              </span>
            ))}
          </div>

          <WhatsappLink
            className="mt-6 inline-flex rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white shadow-[0_14px_34px_rgba(15,23,42,0.16)] transition hover:-translate-y-0.5 hover:bg-slate-800"
            source="Footer"
            intent="cek stok, rekomendasi PK, dan opsi pengiriman AC"
          >
            Chat Admin RADJA AC
          </WhatsappLink>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {footerGroups.map((group) => (
            <div key={group.title} className="rounded-[1.2rem] border border-black/10 bg-white/25 p-4 shadow-sm backdrop-blur">
              <div className="inline-flex rounded-full border border-black/10 bg-white/35 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.16em] text-slate-950 shadow-sm">
                {group.title}
              </div>

              <ul className="mt-5 space-y-2.5 text-sm font-semibold text-slate-950">
                {group.links.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="transition hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-slate-950 px-4 py-4 text-center text-xs leading-6 text-white/75">
        © {new Date().getFullYear()} RADJA AC. AC original multi-brand untuk rumah, usaha, dan proyek. Garansi unit mengikuti ketentuan masing-masing brand.
      </div>
    </footer>
  );
}
