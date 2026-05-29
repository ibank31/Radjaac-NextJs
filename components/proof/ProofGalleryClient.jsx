"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { routes } from "@/content/routes";
import WhatsappLink from "@/components/ui/WhatsappLink";

const galleryCategories = [
  {
    title: "Showroom",
    icon: "▣",
    description: "Foto asli display brand dan suasana showroom RADJA AC di Pamijen, Sokaraja.",
  },
  {
    title: "Gudang",
    icon: "▤",
    description: "Stok unit indoor, outdoor, dan berbagai brand yang kami punya di gudang.",
  },
  {
    title: "Display Produk",
    icon: "◇",
    description: "Unit yang bisa dilihat langsung: split, cassette, portable, floor standing, dan lainnya.",
  },
  {
    title: "Material Instalasi",
    icon: "□",
    description: "Pipa, kabel, bracket, dan perlengkapan pemasangan yang tersedia untuk kebutuhan instalasi.",
  },
];

const galleryFilters = [
  "Semua",
  "Pengiriman",
  "Gudang",
  "Showroom",
  "Display Produk",
  "Material Instalasi",
  "Pemasangan",
];

const galleryVideos = [
  {
    title: "Pengiriman AC RADJA AC",
    category: "Pengiriman",
    video: "/videos/pengiriman-ac-radja-ac-purwokerto-01.mp4",
    thumbnail: "/video-thumbnails/pengiriman-ac-radja-ac-purwokerto-01.webp",
  },
  {
    title: "Pengiriman Stok AC",
    category: "Pengiriman",
    video: "/videos/pengiriman-stok-ac-radja-ac-purwokerto-02.mp4",
    thumbnail: "/video-thumbnails/pengiriman-stok-ac-radja-ac-purwokerto-02.webp",
  },
  {
    title: "Stok AC Siap Kirim",
    category: "Stok & Aktivitas",
    video: "/videos/pengiriman-stok-ac-radja-ac-clean.mp4",
    thumbnail: "/video-thumbnails/pengiriman-stok-ac-radja-ac-clean.webp",
  },
];

const galleryItems = [
  {
    title: "Pengiriman AC Daikin RADJA AC",
    category: "Pengiriman",
    image: "/photos/delivery/new-armada-radjaac-daikin.webp",
  },
  {
    title: "Restock AC Midea Terbaru",
    category: "Gudang",
    image: "/photos/stock/restock-midea-ac.webp",
  },
  {
    title: "Pemasangan Outdoor AC Daikin untuk Kost",
    category: "Pemasangan",
    image: "/photos/installation/pemasangan-ac-daikin-untuk-kost-outdoor-01.webp",
  },
  {
    title: "Pemasangan Indoor AC Daikin untuk Kost 1",
    category: "Pemasangan",
    image: "/photos/installation/pemasangan-ac-daikin-untuk-kost-indoor-01.webp",
  },
  {
    title: "Pemasangan Indoor AC Daikin untuk Kost 2",
    category: "Pemasangan",
    image: "/photos/installation/pemasangan-ac-daikin-untuk-kost-indoor-02.webp",
  },
  {
    title: "Pemasangan Indoor AC Daikin untuk Kost 3",
    category: "Pemasangan",
    image: "/photos/installation/pemasangan-ac-daikin-untuk-kost-indoor-03.webp",
  },
  {
    title: "Display AC Ariston Terbaru",
    category: "Display Produk",
    image: "/photos/display/display-ariston-new.webp",
  },
  {
    title: "Display AC Daikin Terbaru",
    category: "Display Produk",
    image: "/photos/display/display-daikin-new.webp",
  },
  {
    title: "Display AC FLife Terbaru",
    category: "Display Produk",
    image: "/photos/display/display-flife-new.webp",
  },
  {
    title: "Display AC Gree Terbaru",
    category: "Display Produk",
    image: "/photos/display/display-gree-new.webp",
  },
  {
    title: "Display AC Hisense Terbaru",
    category: "Display Produk",
    image: "/photos/display/display-hisense-new.webp",
  },
  {
    title: "Display AC Modena Terbaru",
    category: "Display Produk",
    image: "/photos/display/display-modena-new.webp",
  },
  {
    title: "Display AC Sansui Terbaru",
    category: "Display Produk",
    image: "/photos/display/display-sansui-new.webp",
  },
  {
    title: "Restock AC TCL Midea LG",
    category: "Gudang",
    image: "/photos/stock/restock-tcl-midea-lg.webp",
  },
  {
    title: "Depan Proshop Gree RADJA AC",
    category: "Showroom",
    image: "/photos/showroom/depan-proshop-gree.webp",
  },
  {
    title: "Showroom Display Hisense dan Modena",
    category: "Showroom",
    image: "/photos/showroom/showroom-display-hisense-modena-01.webp",
  },
  {
    title: "Restock AC Midea RADJA AC",
    category: "Gudang",
    image: "/photos/stock/midea-restock.webp",
  },
  {
    title: "Pemasangan AC Cassette",
    category: "Pemasangan",
    image: "/photos/installation/pemasangan-ac-cassete.webp",
  },
  {
    title: "Outdoor AC Cassette",
    category: "Pemasangan",
    image: "/photos/installation/outdoor-ac-cassete.webp",
  },
  {
    title: "Pengiriman Sharp & Midea",
    category: "Pengiriman",
    image: "/photos/delivery/pengiriman-sharp-midea.webp",
  },
  {
    title: "Showroom Gree RADJA AC Purwokerto",
    category: "Showroom",
    image: "/photos/showroom/showroom-gree-radja-ac-purwokerto-01.webp",
  },
  {
    title: "Gudang Stok AC Gree",
    category: "Gudang",
    image: "/photos/stock/gudang-stok-ac-gree-radja-ac-01.webp",
  },
  {
    title: "Display AC Gree Low Watt",
    category: "Display Produk",
    image: "/photos/display/display-ac-gree-low-watt-radja-ac-01.webp",
  },
  {
    title: "Display AC Gree Showroom",
    category: "Showroom",
    image: "/photos/showroom/showroom-gree-radja-ac-purwokerto-02.webp",
  },
  {
    title: "Gudang Stok AC Aqua",
    category: "Gudang",
    image: "/photos/stock/gudang-stok-ac-aqua-radja-ac-01.webp",
  },
  {
    title: "Display AC FLife",
    category: "Display Produk",
    image: "/photos/display/display-ac-flife-radja-ac-01.webp",
  },
  {
    title: "Pengiriman Stok Aqua Truk Putih",
    category: "Pengiriman",
    image: "/photos/delivery/radja-ac-pengiriman-stok-aqua-truk-putih.webp",
  },
  {
    title: "Showroom Multibrand RADJA AC",
    category: "Showroom",
    image: "/photos/showroom/showroom-multibrand-radja-ac-purwokerto-01.webp",
  },
  {
    title: "Rak Gudang Stok AC",
    category: "Gudang",
    image: "/photos/stock/gudang-stok-ac-radja-ac-purwokerto-01.webp",
  },
  {
    title: "Display AC Cassette Daikin",
    category: "Display Produk",
    image: "/photos/display/daikin-cassette-display-radja-ac-01.webp",
  },
  {
    title: "Persiapan Pengiriman RADJA AC",
    category: "Pengiriman",
    image: "/photos/delivery/radja-ac-persiapan-pengiriman.webp",
  },
  {
    title: "Stok AC Daikin dan Gree",
    category: "Gudang",
    image: "/photos/stock/gudang-stok-ac-daikin-gree-radja-ac-01.webp",
  },
  {
    title: "Display Outdoor Daikin",
    category: "Display Produk",
    image: "/photos/display/display-outdoor-daikin-radja-ac-01.webp",
  },
  {
    title: "Stok AC Sharp RADJA AC",
    category: "Pengiriman",
    image: "/photos/delivery/radja-ac-stok-sharp.webp",
  },
  {
    title: "Display Daikin dan Sansui",
    category: "Showroom",
    image: "/photos/display/display-daikin-sansui-radja-ac-01.webp",
  },
  {
    title: "Display Daikin Nusantara",
    category: "Display Produk",
    image: "/photos/display/display-daikin-nusantara-radja-ac-01.webp",
  },
  {
    title: "Display AC Reiwa Portable",
    category: "Display Produk",
    image: "/photos/display/display-reiwa-portable-ac-radja-ac-01.webp",
  },
  {
    title: "Material Instalasi AC",
    category: "Material Instalasi",
    image: "/photos/installation/material-instalasi-ac-radja-ac-01.webp",
  },
  {
    title: "Stok Pipa AC",
    category: "Material Instalasi",
    image: "/photos/stock/stok-pipa-ac-radja-ac-purwokerto-01.webp",
  },
  {
    title: "Pengiriman Ariston dan Daikin",
    category: "Pengiriman",
    image: "/photos/delivery/pengiriman-ariston-daikin.webp",
  },
  {
    title: "Pengiriman AC Ariston",
    category: "Pengiriman",
    image: "/photos/delivery/pengiriman-ac-ariston.webp",
  },
  {
    title: "Restock Outdoor Daikin",
    category: "Pengiriman",
    image: "/photos/delivery/outdoor-ac-daikin-restock.webp",
  },
  {
    title: "Loading AC Ariston",
    category: "Pengiriman",
    image: "/photos/delivery/loading-ac-ariston.webp",
  },
  {
    title: "Display AC Ariston",
    category: "Display Produk",
    image: "/photos/showroom/display-ariston-radja-ac.webp",
  },
  {
    title: "Display AC Daikin",
    category: "Display Produk",
    image: "/photos/showroom/display-daikin-radja-ac.webp",
  },
  {
    title: "Display AC Gree FLife",
    category: "Display Produk",
    image: "/photos/showroom/display-gree-flife-radja-ac.webp",
  },
  {
    title: "Display AC Gree Inverter",
    category: "Display Produk",
    image: "/photos/showroom/display-gree-inverter-radja-ac.webp",
  },
  {
    title: "Display Gree Residential AC",
    category: "Display Produk",
    image: "/photos/showroom/display-gree-residential-ac-radja-ac.webp",
  },
  {
    title: "Display Midea Cassette & Floor Standing",
    category: "Display Produk",
    image: "/photos/showroom/display-midea-cassette-floor-standing-radja-ac.webp",
  },
  {
    title: "Display Sansui dan Gree",
    category: "Display Produk",
    image: "/photos/showroom/display-sansui-gree-radja-ac.webp",
  },
];

export default function ProofGalleryClient() {
  const [activeFilter, setActiveFilter] = useState("Semua");

  const filteredGalleryItems = useMemo(() => {
    if (activeFilter === "Semua") return galleryItems;
    return galleryItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <main className="relative overflow-hidden bg-[#f7fbff] text-slate-950">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-160px] top-[-220px] h-[420px] w-[420px] rounded-full bg-cyan-200/45 blur-[120px]" />
        <div className="absolute bottom-[-220px] right-[-160px] h-[420px] w-[420px] rounded-full bg-blue-200/35 blur-[120px]" />
      </div>

      <section className="mx-auto max-w-7xl px-5 pb-6 pt-10 lg:px-8 lg:pb-8 lg:pt-14">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-5 py-3 text-sm font-bold uppercase tracking-wide text-cyan-800 shadow-[0_14px_38px_rgba(14,116,144,0.12)]">
            <span aria-hidden="true">▣</span>
            Gallery RADJA AC Purwokerto
          </div>

          <h1 className="mb-6 text-4xl font-black leading-tight tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">
            Daripada cuma percaya tulisan —{" "}
            <span className="text-cyan-700">lihat dulu foto aslinya.</span>
          </h1>

          <p className="mx-auto max-w-2xl text-base leading-9 text-slate-600 sm:text-lg">
            Foto di halaman ini adalah dokumentasi asli aktivitas RADJA AC: showroom di Pamijen Sokaraja,
            stok di gudang, display produk, pengiriman, dan pemasangan. Bukan foto dari internet. Bukan
            ilustrasi. Ini kondisi nyata toko kami sehari-hari.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-5 lg:px-8 lg:py-8">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {galleryCategories.map((item) => (
            <article
              key={item.title}
              className="rounded-[28px] border border-slate-200 bg-white/92 p-5 text-center shadow-[0_18px_50px_rgba(15,23,42,0.08)]"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-3xl border border-cyan-200 bg-cyan-50 text-2xl font-black text-cyan-700">
                {item.icon}
              </div>
              <h2 className="mb-4 text-base font-black text-slate-950">{item.title}</h2>
              <p className="text-sm leading-8 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-8 lg:px-8 lg:py-10">
        <div className="mb-7 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-700">
            Video Aktivitas
          </p>
          <h2 className="mb-4 text-3xl font-black leading-tight tracking-[-0.04em] text-slate-950 sm:text-4xl">
            Lihat langsung stok dan pengiriman RADJA AC
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-8 text-slate-600">
            Video ini diambil langsung dari aktivitas toko — bukan konten promosi. Untuk stok hari ini
            tetap chat admin dulu, karena unit bisa cepat berubah.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          {galleryVideos.map((item) => (
            <article
              key={item.video}
              className="overflow-hidden rounded-[20px] border border-slate-200 bg-white shadow-[0_16px_38px_rgba(15,23,42,0.1)]"
            >
              <div className="relative overflow-hidden bg-slate-900">
                <video
                  controls
                  preload="metadata"
                  poster={item.thumbnail}
                  aria-label={item.title}
                  className="aspect-[4/5] w-full bg-slate-900 object-cover"
                >
                  <source src={item.video} type="video/mp4" />
                  Browser Anda tidak mendukung pemutar video.
                </video>

                <span className="pointer-events-none absolute left-2 top-2 rounded-full bg-white/90 px-2 py-1 text-[8px] font-bold text-cyan-800 shadow-sm sm:text-[10px]">
                  {item.category}
                </span>
                <span className="pointer-events-none absolute right-2 top-2 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-sm font-black text-slate-950 shadow-lg sm:h-10 sm:w-10">
                  ▶
                </span>
              </div>
              <div className="p-3 sm:p-4">
                <h3 className="line-clamp-2 text-[11px] font-black leading-5 text-slate-950 sm:text-sm">
                  {item.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-14 pt-7 lg:px-8 lg:pb-20 lg:pt-10">
        <div className="mb-7 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-700">
            Foto Aktivitas
          </p>
          <h2 className="mx-auto mb-5 max-w-4xl text-3xl font-black leading-tight tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-5xl">
            Showroom, gudang, stok, display, dan pengiriman
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-8 text-slate-600">
            Pilih kategori untuk melihat bagian yang paling relevan. Foto ini bukan pemanis — ini dokumentasi
            nyata kondisi toko AC Purwokerto kami dari waktu ke waktu.
          </p>
        </div>

        <div className="mb-8 overflow-x-auto pb-2">
          <div className="flex min-w-max gap-3 px-1 sm:min-w-0 sm:flex-wrap sm:justify-center">
            {galleryFilters.map((filter) => {
              const isActive = activeFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`shrink-0 rounded-full border px-5 py-3 text-sm font-bold shadow-sm transition ${
                    isActive
                      ? "border-cyan-200 bg-cyan-100 text-cyan-900"
                      : "border-slate-200 bg-white text-cyan-800 hover:border-cyan-200 hover:bg-cyan-50"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {filteredGalleryItems.map((item) => (
            <a
              key={`${item.category}-${item.title}-${item.image}`}
              href={item.image}
              target="_blank"
              rel="noreferrer"
              className="group overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.09)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_50px_rgba(15,23,42,0.13)]"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-slate-200">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full border border-cyan-100 bg-white/95 px-3 py-1.5 text-[11px] font-bold text-cyan-800 shadow-sm">
                  {item.category}
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-black leading-6 text-slate-950">{item.title}</h3>
              </div>
            </a>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-[28px] border border-slate-200 bg-white p-6 text-center shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
          <h2 className="text-2xl font-black tracking-[-0.03em] text-slate-950">
            Mau cek stok hari ini?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600">
            Kirim kebutuhan ruangan, jumlah unit, brand yang diminati, dan lokasi pengiriman. Admin bantu cek
            stok, opsi unit, pengiriman, dan kebutuhan pemasangan sesuai kondisi.
          </p>
          <WhatsappLink
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#25D366] px-6 py-4 text-sm font-black text-white shadow-[0_18px_45px_rgba(37,211,102,0.22)] transition hover:bg-[#20BA5A] sm:w-auto"
            source="Bukti Pengiriman Closing"
            intent="cek stok setelah melihat gallery RADJA AC"
          >
            Chat Admin RADJA AC
          </WhatsappLink>
        </div>
      </section>
    </main>
  );
}
