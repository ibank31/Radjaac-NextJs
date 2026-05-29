import Image from "next/image";
import Link from "next/link";
import { routes } from "@/content/routes";
import WhatsappLink from "@/components/ui/WhatsappLink";

const mainNav = [
  { label: "Jual AC", href: routes.jualAc },
  { label: "Katalog", href: routes.katalog },
  { label: "Brand", href: routes.brandGree },
  { label: "Pengadaan", href: routes.pengadaanAc },
  { label: "Bukti", href: routes.buktiPengirimanProyek },
  { label: "Kontak", href: routes.kontak },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <Link href={routes.home} className="flex items-center gap-3" aria-label="RADJA AC">
          <span className="relative flex h-11 w-11 overflow-hidden rounded-2xl bg-slate-950 ring-1 ring-slate-200">
            <Image
              src="/brand/logo-radjaac.webp"
              alt="Logo RADJA AC"
              fill
              sizes="44px"
              className="object-cover"
              priority
            />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-base font-black tracking-tight text-slate-950 sm:text-lg">
              RADJA AC
            </span>
            <span className="hidden text-xs font-semibold text-slate-500 sm:inline">
              Jual AC original multi-brand
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-bold text-slate-700 lg:flex">
          {mainNav.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-slate-950">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href={routes.katalog}
            className="rounded-full border border-slate-200 px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
          >
            Lihat Katalog
          </Link>
          <WhatsappLink
            className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-black text-white shadow-sm transition hover:bg-emerald-700"
            source="Header"
            intent="konsultasi beli AC dan cek stok"
          >
            Chat WhatsApp
          </WhatsappLink>
        </div>

        <details className="group relative md:hidden">
          <summary className="list-none rounded-full border border-slate-200 px-4 py-2 text-sm font-black text-slate-800 marker:hidden">
            Menu
          </summary>
          <div className="absolute right-0 top-12 w-[min(88vw,340px)] overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-2xl">
            <nav className="grid gap-1">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-4 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-3 border-t border-slate-100 pt-3">
              <WhatsappLink
                className="flex w-full items-center justify-center rounded-2xl bg-emerald-600 px-4 py-3 text-sm font-black text-white"
                source="Mobile Header"
                intent="konsultasi beli AC dan cek stok"
              >
                Chat WhatsApp
              </WhatsappLink>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
