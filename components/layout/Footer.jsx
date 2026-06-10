import Image from "next/image";
import Link from "next/link";
import { routes } from "@/content/routes";
import WhatsappLink from "@/components/ui/WhatsappLink";
import { typography } from "@/lib/typography";

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
      { label: "Tentang Radja AC", href: routes.tentangKami },
      { label: "Bukti Pengiriman", href: routes.buktiPengirimanProyek },
      { label: "Pengiriman & Pemasangan", href: routes.pengirimanPemasangan },
      { label: "Artikel Panduan", href: routes.artikel },
    ],
  },
  {
    title: "Area Layanan",
    links: [
      { label: "Jual AC Purwokerto", href: routes.jualAcPurwokerto },
      { label: "Jual AC Banyumas", href: routes.jualAcBanyumas },
      { label: "Jual AC Sokaraja", href: routes.jualAcSokaraja },
      { label: "Jual AC Baturraden", href: routes.jualAcBaturraden },
      { label: "Jual AC Karanglewas", href: routes.jualAcKaranglewas },
      { label: "Jual AC Kembaran", href: routes.jualAcKembaran },
      { label: "Jual AC Patikraja", href: routes.jualAcPatikraja },
      { label: "Jual AC Rawalo", href: routes.jualAcRawalo },
      { label: "Jual AC Purbalingga", href: routes.jualAcPurbalingga },
      { label: "Jual AC Cilacap", href: routes.jualAcCilacap },
      { label: "Jual AC Kebumen", href: routes.jualAcKebumen },
      { label: "Jual AC Semarang", href: routes.jualAcSemarang },
      { label: "Jual AC Solo", href: routes.jualAcSolo },
      { label: "Jual AC Magelang", href: routes.jualAcMagelang },
      { label: "Jual AC Pekalongan", href: routes.jualAcPekalongan },
      { label: "Jual AC Salatiga", href: routes.jualAcSalatiga },
    ],
  },
  {
    title: "Kategori AC",
    links: [
      { label: "AC 0.5 PK", href: routes.katalogAcSetengahPk },
      { label: "AC 1 PK", href: routes.katalogAcSatuPk },
      { label: "AC 1.5 PK", href: routes.katalogAcSatuSetengahPk },
      { label: "AC 2 PK", href: routes.katalogAcDuaPk },
    ],
  },
  {
    title: "Pengadaan",
    links: [
      { label: "Cafe & Resto", href: routes.pengadaanCafeResto },
      { label: "Gedung Kantor", href: routes.pengadaanGedungKantorRuko },
      { label: "Hotel", href: routes.pengadaanHotelGuestHouse },
      { label: "Kost", href: routes.pengadaanKostApartemen },
      { label: "Kontraktor", href: routes.pengadaanKontraktorDeveloper },
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
          <div className={`inline-flex rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 ${typography.eyebrow} text-white shadow-sm`}>
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
              <p className="text-xl font-bold tracking-[-0.03em] text-white sm:text-2xl">Radja AC</p>
              <p className={`mt-1 ${typography.eyebrow} text-white/70`}>Sokaraja, Banyumas</p>
            </div>
          </div>

          <p className="mt-3 max-w-md text-sm leading-7 text-white/85">
            AC original untuk rumah, usaha, properti, dan proyek. Tim Radja AC cek PK, stok, pengiriman, pemasangan, dan kebutuhan banyak unit dari data ruangan yang dikirim.
          </p>

          <p className="mt-3 text-sm leading-7 text-white/75">
            Showroom dan gudang berada di Sokaraja, Banyumas. Tim Radja AC cek stok aktif, area pengiriman, dan kondisi pemasangan sebelum memberi rincian pembelian.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {trustHighlights.map((item) => (
              <span key={item} className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] font-bold text-white/90 shadow-sm">
                {item}
              </span>
            ))}
          </div>

          <WhatsappLink
            className="mt-6 inline-flex rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-slate-950 shadow-[0_14px_34px_rgba(37,211,102,0.22)] transition hover:-translate-y-0.5 hover:bg-[#20BA5A]"
            source="Footer"
            intent="cek stok, rekomendasi PK, dan opsi pengiriman AC"
          >
            Kirim Ukuran Ruangan
          </WhatsappLink>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {footerGroups.map((group) => (
            <div key={group.title} className="rounded-[1.2rem] border border-white/15 bg-white/10 p-4 shadow-sm backdrop-blur">
              <div className={`inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1.5 ${typography.eyebrow} text-white shadow-sm`}>
                {group.title}
              </div>

              <ul className="mt-5 space-y-2.5 text-sm font-medium text-white/85">
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
        © {new Date().getFullYear()} Radja AC. AC original multi-brand untuk rumah, usaha, dan proyek. Garansi unit mengikuti ketentuan masing-masing brand.
      </div>
    </footer>
  );
}
