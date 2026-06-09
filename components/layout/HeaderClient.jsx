"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { routes } from "@/content/routes";
import WhatsappLink from "@/components/ui/WhatsappLink";

const navItems = [
  { label: "Beranda", href: routes.home, exact: true },
  {
    label: "Katalog AC",
    activePaths: [routes.katalog, routes.kalkulatorPkAc],
    items: [
      { label: "Panduan Pilih AC", href: routes.katalog, exact: true },
      { label: "Kalkulator PK AC", href: routes.kalkulatorPkAc, exact: true },
      { label: "AC 1/2 PK", href: routes.katalogAcSetengahPk },
      { label: "AC Split Rumah", href: routes.katalogAcSplitRumah },
      { label: "AC Inverter", href: routes.katalogAcInverter },
      { label: "AC Low Watt", href: routes.katalogAcLowWatt },
      { label: "AC Kantor / Komersial", href: routes.katalogAcKantorKomersial },
    ],
  },
  {
    label: "Brand",
    activePaths: ["/brand"],
    items: [
      { label: "Daikin", href: routes.brandDaikin },
      { label: "Gree", href: routes.brandGree },
      { label: "Midea", href: routes.brandMidea },
      { label: "Hisense", href: routes.brandHisense },
      { label: "Sharp", href: routes.brandSharp },
      { label: "Samsung", href: routes.brandSamsung },
      { label: "Ariston", href: routes.brandAriston },
      { label: "Brand Lainnya", href: routes.brandLainnya },
    ],
  },
  { label: "Pengadaan", href: routes.pengadaanAc },
  { label: "Gallery", href: routes.buktiPengirimanProyek, exact: true },
  { label: "Artikel", href: routes.artikel },
];

function isPathActive(pathname, href, exact = false) {
  if (!href) return false;
  if (href === routes.home) return pathname === routes.home;
  if (exact) return pathname === href;
  return pathname === href || pathname.startsWith(`${href}/`);
}

function isDropdownActive(pathname, item) {
  return (
    item.activePaths?.some((path) => isPathActive(pathname, path)) ||
    item.items?.some((subItem) => isPathActive(pathname, subItem.href, subItem.exact))
  );
}

function navLinkClass(active) {
  return [
    "rounded-full px-3.5 py-2 text-sm font-bold transition",
    active
      ? "bg-brand-blue-tint text-navy shadow-sm ring-1 ring-brand-blue/20"
      : "text-slate-700 hover:bg-brand-blue-tint/60 hover:text-navy",
  ].join(" ");
}

function dropdownItemClass(active) {
  return [
    "rounded-2xl px-4 py-3 text-sm font-bold transition",
    active
      ? "bg-blue-50 text-blue-800 ring-1 ring-blue-100"
      : "text-slate-700 hover:bg-blue-50/80 hover:text-blue-800",
  ].join(" ");
}

function DesktopDropdown({ item, pathname }) {
  const active = isDropdownActive(pathname, item);

  return (
    <div className="group relative">
      <button type="button" className={navLinkClass(active)}>
        <span className="inline-flex items-center gap-1">
          {item.label}
          <span className={`text-xs leading-none ${active ? "text-blue-700" : "text-slate-400"}`}>
            ⌄
          </span>
        </span>
      </button>

      <div className="invisible absolute left-0 top-full z-50 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div className="min-w-64 rounded-[1.6rem] border border-blue-100 bg-white/95 p-3 shadow-[0_24px_70px_rgba(15,23,42,0.14)] backdrop-blur-xl">
          <div className="grid gap-1">
            {item.items.map((subItem) => {
              const subActive = isPathActive(pathname, subItem.href, subItem.exact);

              return (
                <Link
                  key={subItem.href}
                  href={subItem.href}
                  className={dropdownItemClass(subActive)}
                >
                  {subItem.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileNavItem({ item, pathname, onNavigate }) {
  if (item.items) {
    const active = isDropdownActive(pathname, item);

    return (
      <details className={`group rounded-2xl border ${active ? "border-blue-100 bg-blue-50" : "border-slate-100 bg-white"}`}>
        <summary className="list-none cursor-pointer px-4 py-3 text-sm font-black text-slate-800 marker:hidden">
          <span className="flex items-center justify-between">
            <span className={active ? "text-blue-800" : "text-slate-800"}>{item.label}</span>
            <span className="text-xs leading-none text-slate-400">⌄</span>
          </span>
        </summary>

        <div className="grid gap-1 border-t border-blue-50 bg-white p-2">
          {item.items.map((subItem) => {
            const subActive = isPathActive(pathname, subItem.href, subItem.exact);

            return (
              <Link
                key={subItem.href}
                href={subItem.href}
                className={[
                  "rounded-xl px-3 py-2 text-sm font-bold transition",
                  subActive
                    ? "bg-blue-50 text-blue-800 ring-1 ring-blue-100"
                    : "text-slate-600 hover:bg-blue-50 hover:text-blue-800",
                ].join(" ")}
                onClick={onNavigate}
              >
                {subItem.label}
              </Link>
            );
          })}
        </div>
      </details>
    );
  }

  const active = isPathActive(pathname, item.href, item.exact);

  return (
    <Link
      href={item.href}
      className={[
        "rounded-2xl border px-4 py-3 text-sm font-black transition",
        active
          ? "border-blue-100 bg-blue-50 text-blue-800 ring-1 ring-blue-100"
          : "border-slate-100 bg-white text-slate-800 hover:bg-blue-50/80 hover:text-blue-800",
      ].join(" ")}
      onClick={onNavigate}
    >
      {item.label}
    </Link>
  );
}

export default function HeaderClient() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-blue-100 bg-white/95 shadow-[0_12px_34px_rgba(73,132,184,0.14)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5">
        <Link href={routes.home} className="flex items-center gap-3" aria-label="RADJA AC">
          <span className="relative flex h-11 w-11 shrink-0 overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200 shadow-[0_10px_26px_rgba(15,23,42,0.10)]">
            <Image
              src="/icons/master-icon-1024.png"
              alt=""
              fill
              sizes="44px"
              className="object-contain p-1"
              aria-hidden="true"
            />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-lg font-black tracking-[-0.02em] text-slate-950">
              RADJA AC
            </span>
            <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-slate-500">
              AC Original untuk Rumah, Usaha & Proyek
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) =>
            item.items ? (
              <DesktopDropdown key={item.label} item={item} pathname={pathname} />
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={navLinkClass(isPathActive(pathname, item.href, item.exact))}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <WhatsappLink
            className="inline-flex items-center justify-center rounded-full bg-brand-red px-5 py-2.5 text-sm font-bold text-white shadow-[0_14px_34px_rgba(214,40,40,0.24)] transition hover:-translate-y-0.5 hover:bg-brand-red-dark"
            source="Header"
            intent="konsultasi beli AC"
          >
            Cek AC
          </WhatsappLink>
        </div>

        <details
          className="group relative xl:hidden"
          open={isMobileOpen}
          onToggle={(event) => setIsMobileOpen(event.currentTarget.open)}
        >
          <summary
            className="flex h-10 w-10 list-none items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-[0_10px_24px_rgba(15,23,42,0.10)] marker:hidden"
            aria-label="Buka navigasi"
            onClick={(event) => {
              event.preventDefault();
              setIsMobileOpen((current) => !current);
            }}
          >
            <span className="sr-only">Buka navigasi</span>
            <span className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-5 rounded-full bg-slate-800" />
              <span className="block h-0.5 w-5 rounded-full bg-slate-800" />
              <span className="block h-0.5 w-5 rounded-full bg-slate-800" />
            </span>
          </summary>

          <div className="absolute right-0 top-12 max-h-[calc(100vh-6rem)] w-[min(88vw,360px)] overflow-y-auto rounded-[1.6rem] border border-blue-100 bg-white/95 p-3 shadow-[0_24px_70px_rgba(15,23,42,0.16)] backdrop-blur-xl">
            <nav className="grid gap-2">
              {navItems.map((item) => (
                <MobileNavItem
                  key={item.label}
                  item={item}
                  pathname={pathname}
                  onNavigate={() => setIsMobileOpen(false)}
                />
              ))}
            </nav>

            <div className="mt-3 border-t border-blue-50 pt-3">
              <WhatsappLink
                className="flex w-full items-center justify-center rounded-2xl bg-brand-red px-4 py-3 text-sm font-bold text-white shadow-[0_14px_34px_rgba(214,40,40,0.24)]"
                source="Mobile Header"
                intent="konsultasi beli AC"
                onClick={() => setIsMobileOpen(false)}
              >
                Cek AC
              </WhatsappLink>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
