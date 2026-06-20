"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { routes } from "@/content/routes";
import WhatsappLink from "@/components/ui/WhatsappLink";
import { typography } from "@/lib/typography";

const navItems = [
  { label: "Beranda", href: routes.home, exact: true },
  {
    label: "Jual AC",
    activePaths: [routes.jualAc],
    items: [
      { label: "Semua Area", href: routes.jualAc, exact: true },
      { label: "Jual AC Purwokerto", href: routes.jualAcPurwokerto },
      { label: "Jual AC Banyumas", href: routes.jualAcBanyumas },
      { label: "Jual AC Purbalingga", href: routes.jualAcPurbalingga },
      { label: "Jual AC Cilacap", href: routes.jualAcCilacap },
      { label: "Jual AC Banjarnegara", href: routes.jualAcBanjarnegara },
      { label: "Jual AC Kebumen", href: routes.jualAcKebumen },
      { label: "Jual AC Tegal", href: routes.jualAcTegal },
      { label: "Jual AC Pekalongan", href: routes.jualAcPekalongan },
      { label: "Jual AC Magelang", href: routes.jualAcMagelang },
      { label: "Jual AC Semarang", href: routes.jualAcSemarang },
      { label: "Jual AC Solo", href: routes.jualAcSolo },
      { label: "Jual AC Yogyakarta", href: routes.jualAcYogyakarta },
    ],
  },
  {
    label: "Katalog AC",
    activePaths: [routes.katalog, routes.kalkulatorPkAc],
    items: [
      { label: "Panduan Pilih AC", href: routes.katalog, exact: true },
      { label: "Kalkulator PK AC", href: routes.kalkulatorPkAc, exact: true },
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
  {
    label: "Pengadaan",
    activePaths: ["/pengadaan-ac"],
    items: [
      { label: "Semua Segmen", href: routes.pengadaanAc, exact: true },
      { label: "Kost & Apartemen", href: routes.pengadaanKostApartemen },
      { label: "Hotel & Guest House", href: routes.pengadaanHotelGuestHouse },
      { label: "Kontraktor & Developer", href: routes.pengadaanKontraktorDeveloper },
      { label: "Gedung, Kantor & Ruko", href: routes.pengadaanGedungKantorRuko },
      { label: "Cafe & Resto", href: routes.pengadaanCafeResto },
    ],
  },
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
    "rounded-full px-3.5 py-2 text-sm font-semibold transition-all duration-200",
    active
      ? "bg-brand-blue-tint text-navy shadow-sm ring-1 ring-brand-blue/20"
      : "text-slate-800 hover:bg-brand-blue-tint/70 hover:text-navy hover:shadow-sm",
  ].join(" ");
}

function dropdownItemClass(active) {
  return [
    "rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-200",
    active
      ? "bg-blue-50 text-blue-800 ring-1 ring-blue-100"
      : "text-slate-800 hover:bg-blue-50/90 hover:text-blue-800 hover:shadow-sm",
  ].join(" ");
}

function DesktopDropdown({ item, pathname }) {
  const active = isDropdownActive(pathname, item);

  return (
    <div className="group relative">
      <button type="button" className={navLinkClass(active)}>
        <span className="inline-flex items-center gap-1">
          {item.label}
          <span className={`text-xs leading-none transition-colors ${active ? "text-blue-800" : "text-slate-400 group-hover:text-slate-600"}`}>
            ⌄
          </span>
        </span>
      </button>

      <div className="invisible absolute left-1/2 -translate-x-1/2 top-full z-50 pt-3 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div className="min-w-64 rounded-[1.6rem] border border-blue-100 bg-white/95 p-3 shadow-[0_24px_70px_rgba(15,23,42,0.16)] backdrop-blur-xl">
          <div className="grid gap-1">
            {item.items.map((subItem) => {
              const subActive = isPathActive(pathname, subItem.href, subItem.exact);

              return (
                <Link
                  key={subItem.href}
                  href={subItem.href}
                  prefetch={false}
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

const katalogItemsByGroup = {
  panduan: [
    { label: "Panduan Pilih AC", href: routes.katalog, exact: true },
    { label: "Kalkulator PK AC", href: routes.kalkulatorPkAc, exact: true },
  ],
  kategori: [
    { label: "AC Split Rumah", href: routes.katalogAcSplitRumah },
    { label: "AC Inverter", href: routes.katalogAcInverter },
    { label: "AC Low Watt", href: routes.katalogAcLowWatt },
    { label: "AC Kantor / Komersial", href: routes.katalogAcKantorKomersial },
  ],
};

function MobileNavItem({ item, pathname, onNavigate, index }) {
  const active = item.items
    ? isDropdownActive(pathname, item)
    : isPathActive(pathname, item.href, item.exact);
  const isKatalog = item.label === "Katalog AC";

  // Semua item pakai <details> wrapper yang sama
  return (
    <details
      className={`group rounded-2xl border transition-all ${
        active
          ? "border-blue-100 bg-blue-50"
          : "border-slate-100 bg-white hover:border-blue-100 hover:bg-blue-50/50"
      }`}
      open={false}
    >
      <summary
        className="list-none cursor-pointer px-4 py-3.5 text-sm font-semibold marker:hidden [&::-webkit-details-marker]:hidden"
        onClick={(e) => {
          // Jika tidak ada items, navigate langsung
          if (!item.items) {
            e.preventDefault();
            onNavigate();
            // Trigger navigation
            if (item.href) {
              window.location.href = item.href;
            }
          }
        }}
      >
        <span className="flex items-center justify-between">
          <span
            className={`transition-colors ${
              active ? "text-blue-800" : "text-slate-800"
            }`}
          >
            {item.label}
          </span>
          {item.items && (
            <span className="text-xs leading-none text-slate-400 transition-colors group-hover:text-slate-600">
              ⌄
            </span>
          )}
        </span>
      </summary>

      {/* Dropdown content — hanya render jika ada items */}
      {item.items && (
        <div className="grid gap-2.5 border-t border-blue-50 bg-white p-3 pb-3">
          {isKatalog ? (
            <>
              {/* Kategori AC group */}
              <div className="px-3 pt-1.5 pb-1">
                <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-slate-400">
                  Kategori AC
                </span>
              </div>
              {katalogItemsByGroup.kategori.map((subItem) => {
                const subActive = isPathActive(pathname, subItem.href, subItem.exact);
                return (
                  <Link
                    key={subItem.href}
                    href={subItem.href}
                    className={[
                      "rounded-xl px-3 py-2.5 text-sm font-medium transition",
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
              <div className="mx-3 my-1.5 border-t border-slate-100" />
              {/* Panduan group */}
              <div className="px-3 pt-1.5 pb-1">
                <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-slate-400">
                  Panduan
                </span>
              </div>
              {katalogItemsByGroup.panduan.map((subItem) => {
                const subActive = isPathActive(pathname, subItem.href, subItem.exact);
                return (
                  <Link
                    key={subItem.href}
                    href={subItem.href}
                    className={[
                      "rounded-xl px-3 py-2.5 text-sm font-medium transition",
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
            </>
          ) : (
            /* Non-Katalog dropdown — flat items */
            item.items.map((subItem) => {
              const subActive = isPathActive(pathname, subItem.href, subItem.exact);
              return (
                <Link
                  key={subItem.href}
                  href={subItem.href}
                  className={[
                    "rounded-xl px-3 py-2.5 text-sm font-medium transition",
                    subActive
                      ? "bg-blue-50 text-blue-800 ring-1 ring-blue-100"
                      : "text-slate-600 hover:bg-blue-50 hover:text-blue-800",
                  ].join(" ")}
                  onClick={onNavigate}
                >
                  {subItem.label}
                </Link>
              );
            })
          )}
        </div>
      )}
    </details>
  );
}

export default function HeaderClient() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const detailsRef = useRef(null);

  // Handle opening/closing with animation
  const handleToggleMenu = () => {
    if (isMobileOpen) {
      // Closing animation
      setIsAnimating(true);
      setTimeout(() => {
        setIsMobileOpen(false);
        setIsAnimating(false);
      }, 300);
    } else {
      // Opening
      setIsMobileOpen(true);
      setIsAnimating(false);
    }
  };

  // Note: Mobile menu closes on navigation via onNavigate callbacks on each nav item

  return (
    <header className="sticky top-0 z-50 border-b border-blue-100 bg-white/95 shadow-[0_12px_34px_rgba(73,132,184,0.14)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5">
        <Link href={routes.home} prefetch={false} className="flex items-center gap-3" aria-label="Radja AC">
          <span className="relative flex h-11 w-11 shrink-0 overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200 shadow-[0_10px_26px_rgba(15,23,42,0.10)]">
            <Image
              src="/icons/icon-192.png"
              alt=""
              fill
              sizes="44px"
              className="object-contain p-1"
              aria-hidden="true"
            />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-lg font-bold tracking-[-0.02em] text-slate-950">
              Radja AC
            </span>
            <span className={`${typography.eyebrow} text-slate-500`}>
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
                prefetch={false}
                className={navLinkClass(isPathActive(pathname, item.href, item.exact))}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <WhatsappLink
            className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-bold text-slate-950 shadow-[0_14px_34px_rgba(37,211,102,0.24)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#20BA5A] hover:shadow-[0_18px_40px_rgba(37,211,102,0.30)]"
            source="Header"
            intent="konsultasi beli AC"
          >
            Cek AC
          </WhatsappLink>
        </div>

        {/* Mobile Menu Hamburger - FIXED VERSION */}
        <div className="relative xl:hidden">
          {/* Backdrop - Touch dismiss */}
          {isMobileOpen && (
            <div
              className={`mobile-backdrop fixed inset-0 z-40 bg-black/20 ${
                isAnimating ? "closing" : "open"
              }`}
              onClick={() => handleToggleMenu()}
              aria-hidden="true"
            />
          )}

          {/* Hamburger Button */}
          <button
            onClick={handleToggleMenu}
            className={`hamburger-button flex h-10 w-10 list-none items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-[0_10px_24px_rgba(15,23,42,0.10)] ${
              isMobileOpen ? "open" : ""
            }`}
            aria-label={isMobileOpen ? "Tutup navigasi" : "Buka navigasi"}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-menu-panel"
          >
            <span className="sr-only">{isMobileOpen ? "Tutup navigasi" : "Buka navigasi"}</span>
            <span className="flex flex-col gap-1.5">
              <span
                className={`hamburger-line-top block h-0.5 w-5 rounded-full bg-slate-800 ${
                  isMobileOpen ? (isAnimating ? "closing" : "open") : ""
                }`}
              />
              <span
                className={`hamburger-line-middle block h-0.5 w-5 rounded-full bg-slate-800 ${
                  isMobileOpen ? (isAnimating ? "closing" : "open") : ""
                }`}
              />
              <span
                className={`hamburger-line-bottom block h-0.5 w-5 rounded-full bg-slate-800 ${
                  isMobileOpen ? (isAnimating ? "closing" : "open") : ""
                }`}
              />
            </span>
          </button>

          {/* Mobile Menu Panel */}
          {isMobileOpen && (
            <div
              id="mobile-menu-panel"
              className={`mobile-menu-panel absolute right-0 top-12 z-50 max-h-[calc(100vh-6rem)] w-[min(88vw,360px)] overflow-y-auto rounded-[1.6rem] border border-blue-100 bg-white/95 p-4 shadow-[0_24px_70px_rgba(15,23,42,0.16)] backdrop-blur-xl ${
                isAnimating ? "closing" : "open"
              }`}
              role="navigation"
              aria-label="Mobile navigation"
            >
              <nav className="flex flex-col gap-4">
                {navItems.map((item, index) => (
                  <div
                    key={item.label}
                    className={`mobile-menu-item ${isAnimating ? "" : ""}`}
                    data-index={index}
                  >
                    <MobileNavItem
                      item={item}
                      pathname={pathname}
                      onNavigate={() => handleToggleMenu()}
                      index={index}
                    />
                  </div>
                ))}
              </nav>

              <div className="mt-3 border-t border-blue-100 pt-3">
                <WhatsappLink
                  className="flex w-full items-center justify-center rounded-2xl bg-[#25D366] px-4 py-3.5 text-sm font-bold text-slate-950 shadow-[0_14px_34px_rgba(37,211,102,0.24)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#20BA5A] hover:shadow-[0_18px_40px_rgba(37,211,102,0.30)]"
                  source="Mobile Header"
                  intent="konsultasi beli AC"
                  onClick={() => handleToggleMenu()}
                >
                  Cek AC
                </WhatsappLink>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
