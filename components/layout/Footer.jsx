import Image from "next/image";
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
    <footer className="border-t border-white/10 bg-[linear-gradient(180deg,#1f4f78_0%,#15395a_50%,#0e2a47_100%)] text-white shadow-[inset_0_14px_34px_rgba(15,23,42,0.16)]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 lg:grid-cols-[1fr_1.9fr] lg:py-14">
        <div>
          <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-[11px] font-black uppercase tracking-[0.18em] text-white shadow-sm">
            AC Original Multi-Brand
          </div>

          <div className="mt-5 flex items-center gap-3">
            <span className="relative flex h-14 w-14 shrink-0 overflow-hidden rounded-2xl bg-white/95 ring-1 ring-white/30 shadow-[0_14px_34px_rgba(15,23,42,0.18)]">
              <Image
                src="/icons/master-icon-1024.png"
                alt=""
                fill
                sizes="56px"
                className="object-cover"
              />
            </span>
            <div>
              <p className="text-2xl font-black tracking-[-0.03em] text-white">RADJA AC</p>
              <p className="mt-1 text-xs font-black uppercase tracking-[0.16em] text-white/70">Sokaraja, Banyumas</p>
            </div>
          </div>

          <p className="mt-3 max-w-md text-sm leading-7 text-white/85">
            AC original untuk rumah, usaha, properti, dan proyek. Tim RADJA AC cek PK, stok, pengiriman, pemasangan, dan kebutuhan banyak unit dari data ruangan yang dikirim.
          </p>

          <p className="mt-3 text-sm leading-7 text-white/75">
            Showroom dan gudang berada di Sokaraja, Banyumas. Tim RADJA AC cek stok aktif, area pengiriman, dan kondisi pemasangan sebelum memberi rincian pembelian.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {trustHighlights.map((item) => (
              <span key={item} className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] font-bold text-white/90 shadow-sm">
                {item}
              </span>
            ))}
          </div>

          <WhatsappLink
            className="mt-6 inline-flex rounded-full bg-[#25D366] px-5 py-3 text-sm font-black text-slate-950 shadow-[0_14px_34px_rgba(37,211,102,0.22)] transition hover:-translate-y-0.5 hover:bg-[#20BA5A]"
            source="Footer"
            intent="cek stok, rekomendasi PK, dan opsi pengiriman AC"
          >
            Kirim Ukuran Ruangan
          </WhatsappLink>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {footerGroups.map((group) => (
            <div key={group.title} className="rounded-[1.2rem] border border-white/15 bg-white/10 p-4 shadow-sm backdrop-blur">
              <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.16em] text-white shadow-sm">
                {group.title}
              </div>

              <ul className="mt-5 space-y-2.5 text-sm font-semibold text-white/85">
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

      <div className="bg-slate-950/90 px-4 py-4 text-center text-xs leading-6 text-white/70">
        © {new Date().getFullYear()} RADJA AC. AC original multi-brand untuk rumah, usaha, dan proyek. Garansi unit mengikuti ketentuan masing-masing brand.
      </div>
    </footer>
  );
}
