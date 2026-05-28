import Link from "next/link";
import { siteConfig } from "@/content/site";
import { routes } from "@/content/routes";
import WhatsappLink from "@/components/ui/WhatsappLink";

const footerGroups = [
  {
    title: "Halaman Utama",
    links: [
      { label: "Jual AC", href: routes.jualAc },
      { label: "Katalog AC", href: routes.katalog },
      { label: "Pengadaan AC", href: routes.pengadaanAc },
      { label: "Kontak", href: routes.kontak },
    ],
  },
  {
    title: "Area Prioritas",
    links: [
      { label: "Jual AC Purwokerto", href: routes.jualAcPurwokerto },
      { label: "Jual AC Banyumas", href: routes.jualAcBanyumas },
      { label: "Jual AC Sokaraja", href: routes.jualAcSokaraja },
    ],
  },
  {
    title: "Trust & Informasi",
    links: [
      { label: "Tentang RADJA AC", href: routes.tentangKami },
      { label: "Bukti Pengiriman Proyek", href: routes.buktiPengirimanProyek },
      { label: "Pengiriman & Pemasangan", href: routes.pengirimanPemasangan },
      { label: "Artikel", href: routes.artikel },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 lg:grid-cols-[1.4fr_2fr]">
        <div>
          <p className="text-xl font-black">{siteConfig.name}</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-300">
            {siteConfig.positioning}
          </p>
          <p className="mt-4 text-sm text-slate-400">
            Berbasis di {siteConfig.businessBase}. Area pengiriman dan opsi pemasangan dikonfirmasi melalui admin.
          </p>

          <WhatsappLink
            className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-slate-200"
            source="Footer"
            intent="cek stok, rekomendasi PK, dan opsi pengiriman AC"
          >
            Chat Admin RADJA AC
          </WhatsappLink>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <p className="font-bold">{group.title}</p>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                {group.links.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {siteConfig.name}. Website resmi penjualan AC original multi-brand.
      </div>
    </footer>
  );
}
