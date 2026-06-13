import Image from "next/image";
import Link from "next/link";
import { routes } from "@/content/routes";
import WhatsappLink from "@/components/ui/WhatsappLink";
import { typography } from "@/lib/typography";

const categoryItems = [
  {
    title: "AC Split Rumah",
    desc: "Buat kamar, ruang keluarga, kamar kost, kontrakan, dan rumah tinggal.",
    href: routes.katalogAcSplitRumah,
    icon: "⌂",
  },
  {
    title: "AC Inverter",
    desc: "Buat pemakaian lama setiap hari. Listrik lebih hemat, suhu lebih stabil.",
    href: routes.katalogAcInverter,
    icon: "⚡",
  },
  {
    title: "AC Low Watt",
    desc: "Buat rumah atau kost dengan daya listrik terbatas.",
    href: routes.katalogAcLowWatt,
    icon: "◌",
  },
  {
    title: "AC Toko, Kantor & Proyek",
    desc: "Buat toko, ruko, kantor, cafe, dan pembelian banyak unit sekaligus.",
    href: routes.katalogAcKantorKomersial,
    icon: "▦",
  },
];

const whyChooseItems = [
  {
    title: "PK jangan asal tebak",
    desc: "Kamar kost, ruang tamu, toko, dan kantor butuh hitungan PK berbeda. Salah PK — AC kerja berat, tagihan naik, ruangan tidak dingin.",
    icon: "★",
  },
  {
    title: "Jangan pilih AC dari harga saja",
    desc: "Yang perlu dicek: stok ada apa tidak, tipe unitnya cocok apa tidak, garansinya jelas apa tidak, biaya pasang berapa.",
    icon: "☏",
  },
  {
    title: "Titik pasang ikut dihitung",
    desc: "Panjang pipa, posisi outdoor, jalur kabel, dan akses lokasi menentukan biaya akhir. Ini dijelaskan sebelum jadwal pasang.",
    icon: "⌁",
  },
  {
    title: "Beli satuan sampai banyak unit",
    desc: "Radja AC tangani pembelian rumah tangga, toko, kantor, dan proyek dari Sokaraja, Banyumas. Stok dan jadwal dikunci sebelum bayar.",
    icon: "⌖",
  },
];

const pricePackages = [
  {
    range: "Mulai 3 Jutaan",
    brands: "Hisense • Aqua • Midea • Sharp • LG • TCL • Polytron",
  },
  {
    range: "Mulai 4 Jutaan",
    brands: "Daikin Standard • Gree • Panasonic • Mitsubishi • Samsung • Midea Inverter",
  },
  {
    range: "Mulai 5 Jutaan",
    brands: "Daikin Inverter • Gree Inverter",
  },
];

const mainBrands = [
  {
    name: "Daikin",
    href: routes.brandDaikin,
    tagline: "Tahan lama, banyak pilihan PK",
    logo: "/brand-logos/daikin-logo.webp",
  },
  {
    name: "Gree",
    href: routes.brandGree,
    tagline: "Value bagus, Proshop resmi Purwokerto",
    logo: "/brand-logos/gree-logo.webp",
  },
  {
    name: "Midea",
    href: routes.brandMidea,
    tagline: "Modern, harga masuk, stok tersedia",
    logo: "/brand-logos/midea-logo.webp",
  },
  {
    name: "Hisense",
    href: routes.brandHisense,
    tagline: "Fitur lengkap untuk harian",
    logo: "/brand-logos/hisense-logo.png",
  },
  {
    name: "Sansui",
    href: routes.brandSansui,
    tagline: "Simpel, ekonomis, cocok buat kost",
    logo: "/brand-logos/sansui-logo.png",
  },
  {
    name: "Sharp",
    href: routes.brandSharp,
    tagline: "Awet, banyak dikenal di pasaran",
    logo: "/brand-logos/sharp-logo.webp",
  },
  {
    name: "Panasonic",
    href: routes.brandPanasonic,
    tagline: "Nyaman dan hemat listrik",
    logo: "/brand-logos/panasonic-logo.webp",
  },
  {
    name: "Ariston",
    href: routes.brandAriston,
    tagline: "Buat kebutuhan rumah harian",
    logo: "/brand-logos/ariston-logo.webp",
  },
];

const otherBrandRows = [
  ["LG", "Samsung", "Aqua", "Polytron"],
  ["TCL", "Mitsubishi", "Toshiba"],
  ["Modena", "Bestlife", "Akari", "FLife", "Reiwa"],
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

function SectionBadge({ children }) {
  return (
    <p className={`inline-flex items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/5 px-4 py-1.5 ${typography.eyebrow} text-brand-red`}>
      <span className="h-1.5 w-1.5 rounded-full bg-brand-red" aria-hidden="true" />
      {children}
    </p>
  );
}

function ArrowLink({ href, children, className = "" }) {
  return (
    <Link
      href={href}
      prefetch={false}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${className}`}
    >
      {children}
      <span aria-hidden="true">→</span>
    </Link>
  );
}

function BrandName() {
  return (
    <strong className="font-bold italic tracking-tight">
      <span className="text-brand-red">Radja</span>{" "}
      <span className="text-brand-blue">AC</span>
    </strong>
  );
}

function HomeHero() {
  return (
    <section className="relative overflow-hidden border-b border-blue-100 bg-[linear-gradient(180deg,#f8fdff_0%,#eefbff_100%)] px-4 pb-10 pt-10 sm:pt-14 lg:pb-14">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(73,132,184,0.18),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(14,42,71,0.08),transparent_34%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <div className={`mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-3.5 py-2 ${typography.eyebrow} text-blue-800 shadow-sm backdrop-blur`}>
            <span className="h-2 w-2 shrink-0 rounded-full bg-blue-500" />
            <span className="leading-5">Showroom & gudang fisik · Pamijen, Sokaraja</span>
          </div>

          <h1 className={`max-w-3xl ${typography.heroTitle} text-navy`}>
            Jual AC original multi-brand untuk rumah, usaha, dan proyek. Cek PK, stok, dan biaya pasang sebelum beli.
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            <BrandName /> melayani pembelian AC untuk kamar, rumah, kost, toko, ruko, kantor, hotel, dan proyek. Gudang dan showroom ada di Pamijen, Sokaraja, Banyumas. Sebelum beli, kirim ukuran ruangan, daya listrik, lokasi, dan jumlah unit — <BrandName /> hitung PK yang pas, cek stok, lalu jelaskan total biaya termasuk pasang.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <WhatsappLink
              className="inline-flex w-full items-center justify-center rounded-full bg-red-600 px-7 py-4 text-base font-bold text-white shadow-xl shadow-red-600/20 transition hover:-translate-y-0.5 hover:bg-red-700 sm:w-auto"
              source="Homepage Hero"
              intent="konsultasi AC yang cocok, cek PK, stok, pengiriman, dan pemasangan"
            >
              Cek Stok & Hitung PK
            </WhatsappLink>

            <ArrowLink
              href={routes.katalog}
              className="border border-navy/20 bg-white text-navy shadow-sm hover:border-navy/40 hover:bg-surface-soft"
            >
              Lihat Katalog AC
            </ArrowLink>
          </div>
        </div>

        <div className="relative hidden sm:block">
          <div className="absolute -inset-4 rounded-[1.7rem] bg-blue-200/30 blur-3xl" />
          <div className="relative overflow-hidden rounded-[1.7rem] border border-white bg-white p-2 shadow-[0_22px_60px_rgba(15,39,66,0.12)]">
            <Image
              src="/photos/showroom/showroom-multibrand-radja-ac-purwokerto-01.webp"
              alt="Showroom Radja AC — jual AC original multi-brand, Sokaraja Banyumas"
              width={900}
              height={720}
              sizes="(min-width: 1024px) 560px, 100vw"
              priority
              className="h-[310px] w-full rounded-[1.5rem] object-cover object-center sm:h-[390px] lg:h-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function HomeTrust() {
  const signals = [
    "Showroom fisik ada",
    "Stok dicek sebelum beli",
    "Authorized dealer resmi",
    "Garansi pasang 1 bulan",
  ];

  return (
    <div className="border-y border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 py-4">
        {signals.map((text) => (
          <div key={text} className="flex items-center gap-2">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-blue-700">
              ✓
            </span>
            <span className="text-[13px] font-semibold text-slate-600">{text}</span>
          </div>
        ))}
      </div>

      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="overflow-hidden rounded-[1.7rem] border border-blue-200 bg-[linear-gradient(135deg,#fffaf2_0%,#ffffff_58%,#eef7ff_100%)] p-6 shadow-[0_24px_70px_rgba(15,39,66,0.08)] sm:p-8">
          <div className="grid gap-7 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <div>
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-200 bg-white text-2xl text-blue-700 shadow-sm">
                ✓
              </div>
              <p className={`mb-2 ${typography.eyebrow} text-blue-800`}>
                PROSHOP GREE
              </p>
              <h3 className={`${typography.cardTitle} text-blue-950`}>
                <BrandName /> terdaftar resmi sebagai Proshop Gree Purwokerto
              </h3>
            </div>

            <div className="border-t border-blue-200 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <p className="text-sm leading-7 text-slate-700 sm:text-base">
                Ini bukan toko online tanpa bukti fisik. <BrandName /> punya showroom, gudang, stok fisik, dan pembeli dapat datang melihat unit. Untuk Gree, <BrandName /> terdaftar sebagai <strong className="font-bold text-brand-red">Proshop Gree Radja AC Purwokerto</strong>. Stok, tipe, harga, jadwal kirim, dan biaya pasang dijelaskan di awal agar transaksi jelas.
              </p>

              <ArrowLink
                href={routes.brandGree}
                className="mt-5 border border-blue-300 bg-white text-blue-900 shadow-sm hover:bg-blue-50"
              >
                Lihat AC Gree
              </ArrowLink>
            </div>
          </div>
        </div>

        <div className="mt-8 border-y border-slate-200 bg-white/80 py-8">
          <div className="grid gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <div className="mb-4 flex h-13 w-13 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-2xl font-extrabold text-[#1565C0]">
                ✓
              </div>

              <p className={`mb-3 ${typography.eyebrow} text-[#1565C0]`}>
                Sertifikat Resmi
              </p>
              <h3 className={`mb-3 ${typography.cardTitle} text-blue-950`}>
                Beli AC harus jelas asal-usulnya, garansinya, dan dokumennya
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-4">
              {certificates.map((item) => (
                <figure key={item.brand} className="text-center">
                  <div className="rounded-[18px] border border-slate-200 bg-white p-2 shadow-[0_14px_34px_rgba(15,39,66,0.08)]">
                    <Image
                      src={item.image}
                      alt={`Sertifikat Authorized Dealer ${item.brand} Radja AC`}
                      width={260}
                      height={180}
                      sizes="(min-width: 1024px) 220px, 50vw"
                      className="h-[96px] w-full rounded-[12px] object-contain object-center sm:h-[112px]"
                    />
                  </div>
                  <figcaption className="mt-3 text-center">
                    <span className="inline-flex items-center justify-center gap-1.5 text-sm font-bold text-blue-950 sm:text-base">
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
    </div>
  );
}

function HomeCategory() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <div className="mb-6">
        <h2 className={`mt-0 mb-6 ${typography.sectionTitle} text-blue-950`}>
          AC untuk kebutuhan apa?
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {categoryItems.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            prefetch={false}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50"
          >
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-xl font-bold text-blue-800 sm:h-14 sm:w-14">
              {item.icon}
            </div>
            <h3 className={`mb-2 ${typography.cardTitle} text-blue-950`}>{item.title}</h3>
            <p className="text-xs leading-6 text-slate-600 sm:text-sm">{item.desc}</p>
            <span className="mt-3 block text-[13px] font-semibold text-blue-700">Lihat →</span>
          </Link>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <WhatsappLink
          className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-7 py-4 text-sm font-bold text-slate-950 shadow-[0_12px_28px_rgba(37,211,102,0.20)] transition hover:-translate-y-0.5 hover:bg-[#20BA5A]"
          source="Home Category"
          intent="minta rekomendasi kategori AC yang sesuai ruangan"
        >
          Minta Rekomendasi AC
        </WhatsappLink>
      </div>
    </section>
  );
}

function HomeProcess() {
  const steps = [
    {
      number: "1",
      title: "Kirim data ruangan",
      desc: "Ukuran, daya listrik, lokasi, dan jumlah unit.",
    },
    {
      number: "2",
      title: "PK dihitung, stok dicek",
      desc: "Tim Radja AC konfirmasi unit dan estimasi biaya pasang.",
    },
    {
      number: "3",
      title: "Jadwal kirim & pasang dikunci",
      desc: "Bayar setelah semua detail jelas.",
      highlight: true,
    },
  ];

  return (
    <section className="bg-surface-soft px-4 py-14">
      <div className="mx-auto max-w-7xl">
        <h2 className={`mb-10 text-center ${typography.sectionTitle} text-blue-950`}>
          Cara beli AC di Radja AC
        </h2>

        <div className="grid gap-6 sm:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center">
              <div
                className={`mb-4 flex h-10 w-10 items-center justify-center rounded-full text-base font-bold ${
                  step.highlight
                    ? "bg-brand-red text-white"
                    : "bg-blue-100 text-blue-800"
                }`}
              >
                {step.number}
              </div>
              <h3 className={`mb-2 ${typography.cardTitle} text-blue-950`}>{step.title}</h3>
              <p className="text-sm leading-6 text-slate-600">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <WhatsappLink
            className="inline-flex items-center justify-center rounded-full bg-brand-red px-7 py-4 text-sm font-bold text-white shadow-[0_12px_28px_rgba(214,40,40,0.22)] transition hover:-translate-y-0.5 hover:bg-brand-red-dark"
            source="Home Process"
            intent="mulai konsultasi kebutuhan AC"
          >
            Mulai Konsultasi
          </WhatsappLink>
        </div>
      </div>
    </section>
  );
}

function HomeBrands() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10" id="brand-lainnya">
      <div className="mb-6 flex items-center justify-between gap-4">
        <h2 className={`${typography.sectionTitle} text-blue-950`}>
          Pilih merek AC
        </h2>
        <ArrowLink
          href={routes.brandLainnya}
          className="hidden border border-blue-200 bg-white text-blue-900 hover:bg-blue-50 sm:inline-flex"
        >
          Lihat Semua
        </ArrowLink>
      </div>

      <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
        {mainBrands.map((brand) => (
          <Link
            key={brand.name}
            href={brand.href}
            prefetch={false}
            className="group rounded-[1.5rem] border border-slate-200 bg-white px-4 py-5 text-center shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50"
          >
            <div className="flex h-12 items-center justify-center">
              <Image
                src={brand.logo}
                alt={`Logo ${brand.name}`}
                width={148}
                height={56}
                sizes="148px"
                className={
                  brand.name === "Sansui"
                    ? "max-h-11 w-auto object-contain brightness-0"
                    : "max-h-11 w-auto object-contain"
                }
              />
            </div>
            <div className="mt-3 text-xs font-bold text-blue-700">
              Cek Unit & Budget →
            </div>
          </Link>
        ))}
      </div>

      <div className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className={`mb-2 ${typography.eyebrow} text-blue-700`}>
              Brand Lainnya
            </p>
            <h3 className={`${typography.cardTitle} text-blue-950`}>
              Cari merek yang tidak ada di atas? Tanya langsung
            </h3>
          </div>
          <p className="text-sm text-slate-500 sm:text-right">
            LG · Samsung · Aqua · Polytron · TCL · Mitsubishi · Toshiba · Modena · Bestlife · Akari · FLife · Reiwa
          </p>
        </div>

        <div className="space-y-2.5">
          {otherBrandRows.map((row) => (
            <div key={row.join("-")} className="flex flex-wrap justify-center gap-2">
              {row.map((brand) => (
                <span
                  key={brand}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-sm font-semibold text-slate-700"
                >
                  {brand}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-blue-100 bg-white p-5 sm:p-6">
        <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.1em] text-slate-400">
          KISARAN BUDGET AC + PASANG
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          {pricePackages.map((item) => (
            <div key={item.range} className="rounded-xl bg-slate-50 p-4">
              <p className="mb-1 text-base font-bold text-blue-950">{item.range}</p>
              <p className="text-xs leading-6 text-slate-500">{item.brands}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-center text-xs text-slate-400">
          Harga mengikuti merek, PK, dan kondisi lokasi. Detail dijelaskan sebelum bayar.
        </p>
      </div>
    </section>
  );
}

function HomeWhyChoose() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <h2 className={`mb-8 text-center ${typography.sectionTitle} text-blue-950`}>
        Kenapa konfirmasi dulu sebelum beli?
      </h2>

      <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 sm:gap-5">
        {whyChooseItems.map((item) => (
          <div
            key={item.title}
            className="rounded-[1.75rem] border border-slate-200 bg-white p-5 text-center shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 sm:p-6"
          >
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-xl font-bold text-blue-800 sm:h-16 sm:w-16">
              {item.icon}
            </div>
            <h3 className={`mb-3 ${typography.cardTitle} text-blue-950`}>{item.title}</h3>
            <p className="text-xs leading-6 text-slate-600 sm:text-sm sm:leading-7">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function HomeArticles() {
  const articles = [
    {
      title: "Panduan Beli AC Baru",
      excerpt: "Cek ukuran ruangan, daya listrik, PK, tipe AC, brand, garansi, stok, dan estimasi anggaran agar pilihan unit lebih masuk akal.",
      readTime: "6 menit baca",
      href: routes.artikelPanduanBeliAcBaru,
    },
    {
      title: "AC 1 PK untuk Ruangan Berapa?",
      excerpt: "Panduan memilih AC 1 PK untuk kamar dan ruang keluarga. Cek ukuran ruangan, BTU, kondisi panas, daya listrik, dan kapan perlu naik atau turun kapasitas.",
      readTime: "6 menit baca",
      href: routes.artikelAcSatuPkUntukRuanganBerapa,
    },
    {
      title: "AC Inverter vs Low Watt",
      excerpt: "Bingung pilih AC inverter atau low watt? Pahami beda fungsi, cocok untuk siapa, risiko salah pilih, dan kapan sebaiknya cek PK dulu sebelum beli.",
      readTime: "7 menit baca",
      href: routes.artikelAcInverterVsLowWatt,
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <div className="mb-8 text-center">
        <span className={`inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 ${typography.eyebrow} text-blue-700`}>
          PANDUAN & TIPS
        </span>
        <h2 className={`mt-4 ${typography.sectionTitle} text-slate-950`}>
          Baca dulu sebelum beli AC
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600">
          Panduan singkat agar tidak salah pilih PK, tipe AC, dan brand sebelum memutuskan beli.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {articles.map((article) => (
          <div key={article.href} className="rounded-[1.45rem] border border-slate-200 bg-white p-6">
            <h3 className={`mb-3 ${typography.cardTitle} text-slate-950`}>{article.title}</h3>
            <p className="mb-4 text-sm leading-6 text-slate-600">{article.excerpt}</p>
            <div className="mb-4 flex items-center gap-2 text-xs text-slate-500">
              <span>📖</span>
              <span>{article.readTime}</span>
            </div>
            <Link
              href={article.href}
              prefetch={false}
              className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 transition hover:text-blue-900"
            >
              Baca Panduan →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

function HomeClosingCta() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-14 pt-8">
      <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#0e2a47_0%,#15395a_55%,#1f4f78_100%)] p-6 shadow-[0_30px_70px_rgba(14,42,71,0.30)] sm:p-8 lg:p-12">
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand-blue/20 blur-3xl" />
        <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <span className={`inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 ${typography.eyebrow} text-white`}>
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red" aria-hidden="true" />
              Siap Beli AC?
            </span>
            <h2 className={`mt-4 max-w-2xl text-balance ${typography.sectionTitle} text-white`}>
              Kirim data ruangan. <BrandName /> hitung PK dan jelaskan biaya totalnya.
            </h2>
          </div>

          <div className="rounded-[1.5rem] border border-white/15 bg-white/5 p-5">
            <WhatsappLink
              className="inline-flex w-full items-center justify-center rounded-full bg-red-600 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-red-600/20 transition hover:-translate-y-0.5 hover:bg-red-700"
              source="Homepage Closing CTA"
              intent="konsultasi kebutuhan AC dari homepage"
            >
              Cek Stok & Hitung PK
            </WhatsappLink>
            <p className="mt-3 text-center text-xs text-white/50">
              Kirim ukuran ruangan · daya listrik · lokasi · jumlah unit
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomepageLegacyParity() {
  return (
    <main id="main-content" className="bg-background text-navy">
      <HomeHero />
      <HomeTrust />
      <HomeCategory />
      <HomeProcess />
      <HomeBrands />
      <HomeWhyChoose />
      <HomeArticles />
      <HomeClosingCta />
    </main>
  );
}
