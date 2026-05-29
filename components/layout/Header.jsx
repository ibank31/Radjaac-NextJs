import Link from "next/link";
import { routes } from "@/content/routes";
import WhatsappLink from "@/components/ui/WhatsappLink";

const mainNav = [
  { label: "Jual AC", href: routes.jualAc },
  { label: "Katalog", href: routes.katalog },
  { label: "Brand", href: routes.brandGree },
  { label: "Pengadaan AC", href: routes.pengadaanAc },
  { label: "Kontak", href: routes.kontak },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4">
        <Link href={routes.home} className="flex flex-col leading-tight">
          <span className="text-lg font-black tracking-tight text-slate-950">
            RADJA AC
          </span>
          <span className="text-xs font-medium text-slate-500">
            Jual AC Original Multi-Brand
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-700 md:flex">
          {mainNav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-slate-950">
              {item.label}
            </Link>
          ))}
        </nav>

        <WhatsappLink
          className="inline-flex items-center justify-center rounded-full bg-slate-950 px-4 py-2 text-sm font-bold text-white transition hover:bg-slate-800"
          source="Header"
          intent="konsultasi beli AC"
        >
          Chat Admin
        </WhatsappLink>
      </div>
    </header>
  );
}
