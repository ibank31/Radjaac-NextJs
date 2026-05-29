import Image from "next/image";
import Link from "next/link";
import { routes } from "@/content/routes";
import { buildMetadata } from "@/lib/seo";
import WhatsappLink from "@/components/ui/WhatsappLink";

export const metadata = buildMetadata({
  title: "RADJA AC | Jual AC Original Multi-Brand & Pengadaan",
  description:
    "RADJA AC membantu pembelian AC original multi-brand untuk rumah, usaha, kantor, hotel, dan proyek. Konsultasi PK, cek stok, pengiriman unit, opsi pemasangan, dan pengadaan banyak unit.",
  path: routes.home,
});

const trustPoints = [
  {
    label: "Konsultasi PK dulu",
    description: "Kirim ukuran ruangan, daya listrik, dan kebutuhan. Admin bantu arahkan kapasitas yang masuk akal.",
  },
  {
    label: "Cek stok sebelum deal",
    description: "Pilihan brand dan tipe dikonfirmasi dulu supaya pembelian lebih jelas sejak awal.",
  },
  {
    label: "Pengiriman unit",
    description: "Area pengiriman dan jadwal dikonfirmasi melalui admin sesuai lokasi dan jumlah unit.",
  },
  {
    label: "Opsi pemasangan",
    description: "Kebutuhan pemasangan dibahas setelah kondisi lokasi dan titik indoor-outdoor lebih jelas.",
  },
];

const categoryCards = [
  {
    label: "AC 1/2 PK",
    href: routes.katalogAcSetengahPk,
    description: "Untuk kamar kecil dan ruangan ringan yang butuh kapasitas pas.",
  },
  {
    label: "AC Low Watt",
    href: routes.katalogAcLowWatt,
    description: "Untuk rumah dengan daya listrik terbatas dan pemakaian harian.",
  },
  {
    label: "AC Inverter",
    href: routes.katalogAcInverter,
    description: "Untuk ruangan yang sering dipakai lama dan butuh kenyamanan stabil.",
  },
  {
    label: "Pengadaan AC",
    href: routes.pengadaanAc,
    description: "Untuk kost, kantor, hotel, toko, kontraktor, dan pembelian banyak unit.",
  },
];

const proofPhotos = [
  {
    src: "/photos/showroom/showroom-utama.webp",
    alt: "Showroom dan stok RADJA AC di Pamijen Sokaraja Banyumas",
    label: "Showroom & stok",
  },
  {
    src: "/photos/delivery/radja-ac-loading-ac-sharp-truk-kuning.webp",
    alt: "Pengiriman unit AC RADJA AC",
    label: "Pengiriman unit",
  },
  {
    src: "/photos/stock/stok-gudang-ac-gree.webp",
    alt: "Stok unit AC RADJA AC",
    label: "Stok unit",
  },
];

const brandLogos = [
  { src: "/brand-logos/gree-logo.webp", alt: "Gree" },
  { src: "/brand-logos/daikin-logo.webp", alt: "Daikin" },
  { src: "/brand-logos/midea-logo.webp", alt: "Midea" },
  { src: "/brand-logos/sharp-logo.webp", alt: "Sharp" },
  { src: "/brand-logos/panasonic-logo.webp", alt: "Panasonic" },
  { src: "/brand-logos/samsung-logo.webp", alt: "Samsung" },
];

export default function Home() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.22),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.18),transparent_32%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-20">
          <div>
            <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-emerald-200">
              Website Resmi RADJA AC
            </p>

            <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
              Jual AC original multi-brand, dibantu cek PK dan stok dulu sebelum deal.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              RADJA AC membantu pembelian AC untuk rumah, kost, toko, kantor, hotel, dan proyek.
              Admin bantu cek kapasitas PK, pilihan brand, stok unit, area pengiriman, dan opsi
              pemasangan sesuai kebutuhan.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsappLink
                className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-4 text-sm font-black text-slate-950 shadow-lg shadow-emerald-950/20 transition hover:bg-emerald-400"
                source="Homepage Hero"
                intent="konsultasi pembelian AC original multi-brand"
              >
                Konsultasi PK & Cek Stok
              </WhatsappLink>
              <Link
                href={routes.katalog}
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-4 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Lihat Katalog AC
              </Link>
            </div>

            <div className="mt-8 grid gap-3 text-sm text-slate-300 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                Berbasis di Pamijen, Sokaraja, Banyumas.
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                Multi-brand sesuai kebutuhan dan stok.
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                Chat dulu, tidak perlu langsung deal.
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-3 shadow-2xl">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-slate-800">
                <Image
                  src="/photos/showroom/showroom-utama.webp"
                  alt="Showroom dan stok RADJA AC di Pamijen Sokaraja Banyumas"
                  fill
                  sizes="(min-width: 1024px) 520px, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="grid gap-3 p-3 sm:grid-cols-3">
                {proofPhotos.map((photo) => (
                  <div key={photo.src} className="overflow-hidden rounded-2xl bg-white/10">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="160px"
                        className="object-cover"
                      />
                    </div>
                    <p className="px-3 py-2 text-xs font-bold text-slate-200">{photo.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white px-4 py-8">
        <div className="mx-auto grid max-w-7xl gap-3 md:grid-cols-4">
          {trustPoints.map((point) => (
            <div key={point.label} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <p className="font-black text-slate-950">{point.label}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{point.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-4 py-14">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
              Mulai dari kebutuhan Anda
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
              Pilih jalur yang paling sesuai sebelum chat admin.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Website RADJA AC mengarahkan pengunjung ke halaman yang paling relevan: katalog,
              kategori AC, pengadaan banyak unit, atau konsultasi langsung lewat WhatsApp.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <WhatsappLink
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white transition hover:bg-slate-800"
                source="Homepage Category Section"
                intent="cek pilihan AC sesuai kebutuhan"
              >
                Chat Admin
              </WhatsappLink>
              <Link
                href={routes.buktiPengirimanProyek}
                className="inline-flex items-center justify-center rounded-full border border-slate-200 px-5 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
              >
                Lihat Bukti Pengiriman
              </Link>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {categoryCards.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl"
              >
                <p className="text-xl font-black text-slate-950">{item.label}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
                <p className="mt-5 text-sm font-black text-emerald-700">Lihat halaman →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
                Pilihan brand
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
                Brand AC dicek sesuai kebutuhan dan stok yang tersedia.
              </h2>
            </div>
            <Link href={routes.katalog} className="text-sm font-black text-emerald-700">
              Lihat katalog lengkap →
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {brandLogos.map((brand) => (
              <div
                key={brand.alt}
                className="flex h-24 items-center justify-center rounded-3xl border border-slate-200 bg-white p-5"
              >
                <Image
                  src={brand.src}
                  alt={`Logo ${brand.alt}`}
                  width={150}
                  height={70}
                  className="max-h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
