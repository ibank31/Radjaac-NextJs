import Image from "next/image";
import Link from "next/link";
import { routes } from "@/content/routes";
import { siteConfig } from "@/content/site";
import { legalEntityCopy, warrantyHighlights } from "@/content/policies";
import { buildMetadata } from "@/lib/seo";
import { staticPageMetadata } from "@/content/static-pages";
import WhatsappLink from "@/components/ui/WhatsappLink";
import { typography } from "@/lib/typography";

export const metadata = buildMetadata(staticPageMetadata.tentangKami);

const values = [
  "Fokus pada penjualan AC original multi-brand, termasuk Proshop Gree Radja AC.",
  "Tim Radja AC cek kebutuhan PK, daya listrik, pilihan brand, stok, pengiriman, dan opsi pemasangan.",
  "Informasi stok, harga, pengiriman, dan pemasangan dikonfirmasi sebelum pembelian.",
  "Pembayaran seperti DP, transfer, atau COD dikonfirmasi setelah unit, stok, pengiriman, dan opsi pemasangan jelas.",
  "Pembelian satuan hingga pengadaan ratusan unit dibahas berdasarkan kebutuhan proyek, lokasi, jumlah unit, stok, dan jadwal.",
];

const certificates = [
  {
    brand: "Daikin",
    status: "Authorized Dealer",
    image: "/certificates/daikin-authorized-dealer.webp",
  },
  {
    brand: "Midea",
    status: "Authorized Dealer",
    image: "/certificates/midea-authorized-dealer.webp",
  },
  {
    brand: "Hisense",
    status: "Authorized Dealer",
    image: "/certificates/hisense-authorized-dealer.webp",
  },
  {
    brand: "Sansui",
    status: "Authorized Dealer",
    image: "/certificates/sansui-authorized-dealer.webp",
  },
];

const operationalProof = [
  {
    title: "Showroom",
    caption: "Display brand asli di Pamijen, Sokaraja",
    image: "/photos/showroom/showroom-gree-radja-ac-purwokerto-01.webp",
  },
  {
    title: "Gudang",
    caption: "Penyimpanan unit indoor dan outdoor",
    image: "/photos/stock/gudang-stok-ac-radja-ac-purwokerto-01.webp",
  },
  {
    title: "Stok",
    caption: "Restock unit multi-brand secara berkala",
    image: "/photos/stock/restock-midea-ac.webp",
  },
  {
    title: "Pengiriman",
    caption: "Armada kirim unit ke pembeli dan proyek",
    image: "/photos/delivery/new-armada-radjaac-daikin.webp",
  },
];

export default function TentangKamiPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7fbff] text-slate-950">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-blue-100 bg-[linear-gradient(180deg,#f8fdff_0%,#eefbff_100%)] px-4 py-12 lg:py-20">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_28%)]" />

        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className={`${typography.eyebrow} text-blue-700`}>
              Tentang Radja AC
            </p>
            <h1 className={`mt-4 max-w-4xl ${typography.pageTitle} text-slate-950`}>
              Website resmi penjualan AC original multi-brand
            </h1>
            <p className="mt-6 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
              Showroom dan gudang {siteConfig.name} berada di {siteConfig.businessBase}. Fokus kami adalah membantu pembeli
              memilih AC original multi-brand untuk rumah, kost, toko, kantor, hotel, dan proyek. Kebutuhan PK,
              stok, pengiriman unit, pemasangan, garansi pemasangan 1 bulan, bantuan klaim unit, pembayaran, dan pengadaan banyak unit dibahas sebelum pembelian.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsappLink
                className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-4 text-sm font-bold text-slate-950 transition hover:bg-[#20BA5A]"
                source="Tentang Kami"
                intent="konsultasi pembelian AC original multi-brand"
              >
                Konsultasi Pembelian AC
              </WhatsappLink>
              <Link
                href={routes.katalog}
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-4 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
              >
                Lihat Katalog AC
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[1.7rem] bg-blue-200/30 blur-3xl" />
            <div className="relative overflow-hidden rounded-[1.7rem] border border-white bg-white p-2 shadow-[0_22px_60px_rgba(15,39,66,0.12)]">
              <Image
                src="/photos/showroom/showroom-multibrand-radja-ac-purwokerto-01.webp"
                alt={`Showroom ${siteConfig.name} — jual AC original multi-brand di ${siteConfig.businessBase}`}
                width={900}
                height={720}
                sizes="(min-width: 1024px) 520px, 100vw"
                priority
                className="h-[280px] w-full rounded-[1.5rem] object-cover object-center sm:h-[360px] lg:h-[440px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* STATUS RESMI */}
      <section className="mx-auto max-w-7xl px-4 py-12 lg:py-16">
        <div className="max-w-3xl">
          <p className={`${typography.eyebrow} text-blue-700`}>
            Status Resmi
          </p>
          <h2 className={`mt-4 ${typography.sectionTitle} text-slate-950`}>
            Proshop Gree resmi dan sertifikat authorized dealer
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            {siteConfig.name} terdaftar resmi sebagai Proshop Gree Purwokerto dan memegang sertifikat authorized dealer
            untuk brand yang tercantum. Asal unit jelas, garansi punya jalur klaim, dan dokumen brand mendukung transaksi.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
          <div className="flex flex-col justify-center rounded-[1.45rem] border border-blue-200 bg-[linear-gradient(135deg,#fffaf2_0%,#ffffff_58%,#eef7ff_100%)] p-6 shadow-sm">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-200 bg-white text-2xl font-extrabold text-blue-700 shadow-sm" aria-hidden="true">
              ✓
            </div>
            <p className={`mb-2 ${typography.eyebrow} text-blue-800`}>
              Proshop Gree
            </p>
            <h3 className={`${typography.cardTitle} text-slate-950`}>
              Proshop Gree resmi dengan bukti fisik
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Bukan toko online tanpa bukti fisik. Stok, tipe, harga, jadwal kirim, dan biaya pasang dijelaskan di awal agar transaksi jelas.
            </p>
            <Link
              href={routes.brandGree}
              className="mt-5 inline-flex w-fit items-center justify-center gap-2 rounded-full border border-blue-300 bg-white px-5 py-3 text-sm font-semibold text-blue-900 shadow-sm transition hover:bg-blue-50"
            >
              Lihat AC Gree
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="rounded-[1.45rem] border border-slate-200 bg-white p-6 shadow-sm">
            <p className={`mb-5 ${typography.eyebrow} text-[#1565C0]`}>
              Sertifikat Authorized Dealer
            </p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-4">
              {certificates.map((item) => (
                <figure key={item.brand} className="text-center">
                  <div className="rounded-[18px] border border-slate-200 bg-white p-2 shadow-[0_14px_34px_rgba(15,39,66,0.08)]">
                    <Image
                      src={item.image}
                      alt={`Sertifikat Authorized Dealer ${item.brand} ${siteConfig.name}`}
                      width={260}
                      height={180}
                      sizes="(min-width: 1024px) 200px, 50vw"
                      className="h-[96px] w-full rounded-[12px] object-contain object-center sm:h-[110px]"
                    />
                  </div>
                  <figcaption className="mt-3">
                    <span className="inline-flex items-center justify-center gap-1.5 text-sm font-bold text-slate-950">
                      <span className="text-[#1565C0]" aria-hidden="true">✓</span>
                      {item.brand}
                    </span>
                    <span className="mt-1 block text-xs font-semibold text-slate-500">
                      {item.status}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OPERATIONAL PROOF */}
      <section className="mx-auto max-w-7xl px-4 pb-12 lg:pb-16">
        <div className="max-w-3xl">
          <p className={`${typography.eyebrow} text-blue-700`}>
            Bukti Operasional
          </p>
          <h2 className={`mt-4 ${typography.sectionTitle} text-slate-950`}>
            Showroom, gudang, stok, dan pengiriman yang nyata
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Dokumentasi asli aktivitas {siteConfig.name}. Ketersediaan tipe unit tetap dikonfirmasi sebelum pembelian.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {operationalProof.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-[1.25rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-slate-200">
                <Image
                  src={item.image}
                  alt={`${item.title} ${siteConfig.name} — ${item.caption}`}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                />
                <span className="absolute left-3 top-3 rounded-full border border-blue-100 bg-white/95 px-3 py-1.5 text-[11px] font-bold text-blue-800 shadow-sm">
                  {item.title}
                </span>
              </div>
              <div className="p-4">
                <p className="text-sm leading-6 text-slate-600">{item.caption}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6">
          <Link
            href={routes.buktiPengirimanProyek}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-blue-200 bg-white px-5 py-3 text-sm font-semibold text-blue-900 shadow-sm transition hover:bg-blue-50"
          >
            Lihat bukti pengiriman & proyek
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* CARA KERJA + LEGALITAS */}
      <section className="mx-auto max-w-7xl px-4 pb-12 lg:pb-16">
        <div className="grid gap-6 lg:grid-cols-2">
          <section className="rounded-[1.45rem] border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className={`${typography.sectionTitle} text-slate-950`}>Cara kerja kami</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
              {values.map((value) => (
                <li key={value} className="rounded-2xl border border-slate-200 bg-[#f7fbff]/45 p-4">
                  {value}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-[1.45rem] border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className={`${typography.sectionTitle} text-slate-950`}>Legalitas & garansi</h2>
            <p className="mt-5 rounded-2xl border border-slate-200 bg-[#f7fbff]/45 p-4 text-sm leading-6 text-slate-600">
              {legalEntityCopy}
            </p>

            <p className={`mt-5 ${typography.eyebrow} text-blue-800`}>
              Ketentuan garansi
            </p>
            <ul className="mt-3 space-y-3 text-sm leading-6 text-slate-600">
              {warrantyHighlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex gap-2.5 rounded-2xl border border-slate-200 bg-[#f7fbff]/45 p-4"
                >
                  <span className="mt-0.5 text-[#1565C0]" aria-hidden="true">✓</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-16 lg:pb-20">
        <div className="mx-auto max-w-3xl rounded-[28px] border border-blue-200 bg-blue-50 p-6 text-center shadow-sm sm:p-8">
          <h2 className={`${typography.sectionTitle} text-slate-950`}>
            Siap memilih AC original multi-brand?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600">
            Kirim ukuran ruangan, daya listrik, brand yang diminati, jumlah unit, dan lokasi pengiriman. Tim {siteConfig.name} cek
            PK yang pas, stok, opsi pengiriman, dan kebutuhan pemasangan untuk pembelian satuan maupun pengadaan banyak unit.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            <WhatsappLink
              className="inline-flex w-full items-center justify-center rounded-full bg-[#25D366] px-6 py-4 text-sm font-bold text-slate-950 shadow-[0_10px_24px_rgba(37,211,102,0.18)] transition hover:-translate-y-0.5 hover:bg-[#20BA5A] sm:w-auto"
              source="Tentang Kami Closing CTA"
              intent="konsultasi pembelian AC original multi-brand setelah melihat profil Radja AC"
            >
              Konsultasi Pembelian AC
            </WhatsappLink>
            <Link
              href={routes.katalog}
              className="inline-flex w-full items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-slate-50 sm:w-auto"
            >
              Lihat Katalog AC
            </Link>
            <Link
              href={routes.pengadaanAc}
              className="inline-flex w-full items-center justify-center rounded-full border border-blue-200 bg-blue-100 px-6 py-4 text-sm font-semibold text-blue-950 transition hover:bg-blue-200 sm:w-auto"
            >
              Pengadaan Banyak Unit
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
