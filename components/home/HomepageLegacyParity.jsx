import Image from "next/image";
import Link from "next/link";
import { routes } from "@/content/routes";
import WhatsappLink from "@/components/ui/WhatsappLink";

const categoryItems = [
  {
    title: "AC Split Rumah",
    desc: "Untuk kamar, ruang keluarga, kontrakan, dan rumah tinggal.",
    href: routes.katalogAcSplitRumah,
    icon: "⌂",
  },
  {
    title: "AC Inverter",
    desc: "Untuk pemakaian lama, suhu stabil, dan listrik lebih terkontrol.",
    href: routes.katalogAcInverter,
    icon: "⚡",
  },
  {
    title: "AC Low Watt",
    desc: "Untuk rumah atau kos dengan daya listrik terbatas.",
    href: routes.katalogAcLowWatt,
    icon: "◌",
  },
  {
    title: "AC Kantor & Komersial",
    desc: "Untuk toko, kantor, cafe, proyek, dan kebutuhan banyak unit.",
    href: routes.katalogAcKantorKomersial,
    icon: "▦",
  },
];

const whyChooseItems = [
  {
    title: "PK jangan asal nebak",
    desc: "Kamar kecil, ruang tamu, kos, dan toko butuh hitungan berbeda. Salah PK bisa bikin AC kerja berat.",
    icon: "★",
  },
  {
    title: "Murah saja belum cukup",
    desc: "Yang perlu dicek bukan cuma harga unit, tapi juga stok, tipe, garansi, dan kebutuhan pemasangan.",
    icon: "☏",
  },
  {
    title: "Titik pasang ikut dihitung",
    desc: "Panjang pipa, posisi outdoor, jalur kabel, dan akses lokasi bisa mempengaruhi biaya akhir.",
    icon: "⌁",
  },
  {
    title: "Cocok untuk pembeli lokal",
    desc: "Melayani Purwokerto, Banyumas, Sokaraja, dan area sekitar. Bisa konsultasi dulu sebelum datang atau OTW.",
    icon: "⌖",
  },
];

const budgetPackages = [
  {
    budget: "3 Jutaan",
    brands: "Hisense • Aqua • Midea • Sharp • LG • TCL • Polytron",
  },
  {
    budget: "4 Jutaan",
    brands: "Daikin Standard • Gree • Panasonic • Mitsubishi • Samsung • Midea Inverter",
  },
  {
    budget: "5 Jutaan+",
    brands: "Daikin Inverter • Gree Inverter",
  },
];

const packageIncludes = [
  "Unit AC + instalasi standar",
  "Pipa 2 meter",
  "Kabel 5 meter",
  "Bracket 1 set",
  "Duct tape",
  "Selang pembuangan",
  "Vacuum AC",
];

const salesPoints = [
  {
    title: "Stok kosong setelah transfer itu nyata",
    description:
      "Banyak yang sudah transfer, ternyata unit tidak ada. Di sini stok dicek dulu, baru konfirmasi — bukan katalog online yang belum tentu ready.",
    icon: "✓",
  },
  {
    title: "PK salah, ruangan susah dingin",
    description:
      "Kamar 3x3 dan toko yang pintunya sering buka-tutup butuh PK berbeda. Salah pilih, AC kerja berat, listrik lebih boros, ruangan tetap panas.",
    icon: "PK",
  },
  {
    title: "Harga unit bukan harga akhir",
    description:
      "Panjang pipa, posisi outdoor, akses lokasi — semua bisa nambah biaya. Kami jelaskan sebelum deal, bukan setelah teknisi sudah di lokasi.",
    icon: "Rp",
  },
];

const mainBrands = [
  {
    name: "Daikin",
    href: routes.brandDaikin,
    tagline: "Premium & bergaransi",
    logo: "/brand-logos/daikin-logo.webp",
  },
  {
    name: "Gree",
    href: routes.brandGree,
    tagline: "Value kuat & efisien",
    logo: "/brand-logos/gree-logo.webp",
  },
  {
    name: "Midea",
    href: routes.brandMidea,
    tagline: "Modern & praktis",
    logo: "/brand-logos/midea-logo.webp",
  },
  {
    name: "Hisense",
    href: routes.brandHisense,
    tagline: "Fitur modern harian",
    logo: "/brand-logos/hisense-logo.png",
  },
  {
    name: "Sansui",
    href: routes.brandSansui,
    tagline: "Simple & ekonomis",
    logo: "/brand-logos/sansui-logo.png",
  },
  {
    name: "Sharp",
    href: routes.brandSharp,
    tagline: "Value for money",
    logo: "/brand-logos/sharp-logo.webp",
  },
  {
    name: "Panasonic",
    href: routes.brandPanasonic,
    tagline: "Nyaman & efisien",
    logo: "/brand-logos/panasonic-logo.webp",
  },
];

const otherBrandRows = [
  ["LG", "Samsung", "Aqua", "Polytron"],
  ["TCL", "Ariston", "Mitsubishi", "Toshiba"],
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

function SectionBadge({ children, tone = "cyan" }) {
  const color =
    tone === "amber"
      ? "border-amber-200 bg-amber-50 text-amber-800"
      : "border-cyan-200 bg-cyan-50 text-cyan-800";

  return (
    <p className={`inline-flex rounded-full border px-4 py-2 text-xs font-black uppercase tracking-[0.2em] ${color}`}>
      {children}
    </p>
  );
}

function ArrowLink({ href, children, className = "" }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-black transition ${className}`}
    >
      {children}
      <span aria-hidden="true">→</span>
    </Link>
  );
}

function HomeHero() {
  return (
    <section className="relative overflow-hidden px-4 pb-10 pt-12 sm:pt-16 lg:pb-16">
      <div className="absolute inset-x-0 top-0 h-56 bg-[linear-gradient(135deg,#eff6ff_0%,#ffffff_52%,#fff7ed_100%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-cyan-800 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-cyan-500" />
            Dealer AC Multi-Brand — Stok, Pengiriman & Pemasangan
          </div>

          <h1 className="max-w-3xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Beli AC jangan cuma lihat harga unit.
            <span className="block text-cyan-700">
              PK, stok, dan biaya pasang harus jelas dulu.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            RADJA AC membantu pembelian AC original multi-brand untuk rumah, kost, toko, ruko, kantor,
            hotel, dan proyek. Admin bantu cek PK sesuai ruangan, stok unit, alamat pengiriman, serta
            opsi pemasangan sebelum Anda deal.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <WhatsappLink
              className="inline-flex w-full items-center justify-center rounded-full bg-[#25D366] px-6 py-4 text-sm font-black text-slate-950 shadow-[0_18px_40px_rgba(37,211,102,0.18)] transition hover:-translate-y-0.5 hover:bg-[#20BA5A] sm:w-auto"
              source="Homepage Hero"
              intent="konsultasi AC yang cocok, cek PK, stok, pengiriman, dan pemasangan"
            >
              Chat Admin Sekarang
            </WhatsappLink>

            <ArrowLink
              href={routes.katalog}
              className="border border-slate-200 bg-white text-slate-900 shadow-sm hover:bg-slate-50"
            >
              Lihat Pilihan AC
            </ArrowLink>

            <ArrowLink
              href={routes.pengadaanAc}
              className="border border-cyan-200 bg-cyan-50 text-cyan-900 hover:bg-cyan-100"
            >
              Pengadaan AC
            </ArrowLink>
          </div>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500">
            Kirim ukuran ruangan, daya listrik, alamat/kota tujuan, dan jumlah unit. Admin bantu cek PK,
            stok, pengiriman, serta estimasi pemasangan bila tersedia.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-cyan-200/35 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2.25rem] border border-slate-200 bg-white p-2 shadow-[0_28px_80px_rgba(15,39,66,0.14)]">
            <Image
              src="/photos/showroom/showroom-multibrand-radja-ac-purwokerto-01.webp"
              alt="Showroom RADJA AC — dealer AC original multi-brand untuk rumah, bisnis, dan proyek"
              width={900}
              height={720}
              priority
              className="h-[310px] w-full rounded-[1.75rem] object-cover object-center sm:h-[430px] lg:h-[540px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function HomeTrust() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <div className="mx-auto mb-8 max-w-3xl text-center">
        <SectionBadge tone="amber">Bukan Sekadar Klaim</SectionBadge>
        <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
          Ada showroom, stok fisik, dan bukti aktivitas toko
        </h2>
      </div>

      <div className="overflow-hidden rounded-[2rem] border border-amber-200 bg-[linear-gradient(135deg,#fffaf2_0%,#ffffff_58%,#eef7ff_100%)] p-6 shadow-[0_24px_70px_rgba(15,39,66,0.08)] sm:p-8">
        <div className="grid gap-7 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <div>
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-200 bg-white text-2xl text-amber-700 shadow-sm">
              ✓
            </div>
            <p className="mb-2 text-xs font-black uppercase tracking-[0.24em] text-amber-800">
              Proshop Gree Resmi
            </p>
            <h3 className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
              RADJA AC tercantum sebagai Proshop resmi Gree Indonesia
            </h3>
          </div>

          <div className="border-t border-amber-200 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <p className="text-sm leading-7 text-slate-700 sm:text-base">
              Selain konsultasi brand lain, RADJA AC juga dikenal melalui aktivitas showroom, stok fisik,
              pengiriman, dan pemasangan. Untuk Gree, RADJA AC tercantum sebagai Proshop resmi Gree
              Indonesia. Untuk stok, harga, tipe unit, dan jadwal pemasangan, tetap konfirmasi admin dulu
              agar informasi yang diterima sesuai kondisi terbaru.
            </p>

            <ArrowLink
              href={routes.brandGree}
              className="mt-5 border border-amber-300 bg-white text-amber-900 shadow-sm hover:bg-amber-50"
            >
              Lihat AC Gree di RADJA AC
            </ArrowLink>
          </div>
        </div>
      </div>

      <div className="mt-8 border-y border-slate-200 bg-white/80 py-8">
        <div className="grid gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <div className="mb-4 flex h-13 w-13 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-2xl font-black text-[#1565C0]">
              ✓
            </div>

            <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-[#1565C0]">
              Dokumen Resmi
            </p>
            <h3 className="mb-3 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
              Sertifikat Authorized Dealer — bukan sekadar klaim toko
            </h3>
            <p className="max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              Sertifikat brand menjadi salah satu bukti pendukung bahwa pembelian unit AC perlu jelas
              asal-usul, garansi, dan dokumennya. Untuk stok dan tipe unit terbaru, tetap konfirmasi admin
              RADJA AC sebelum pembelian.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-4">
            {certificates.map((item) => (
              <figure key={item.brand} className="text-center">
                <div className="rounded-[18px] border border-slate-200 bg-white p-2 shadow-[0_14px_34px_rgba(15,39,66,0.08)]">
                  <Image
                    src={item.image}
                    alt={`Sertifikat Authorized Dealer ${item.brand} RADJA AC`}
                    width={260}
                    height={180}
                    className="h-[96px] w-full rounded-[12px] object-contain object-center sm:h-[112px]"
                  />
                </div>
                <figcaption className="mt-3 text-center">
                  <span className="inline-flex items-center justify-center gap-1.5 text-sm font-black text-slate-950 sm:text-base">
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
  );
}

function HomePriceEstimate() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <div className="overflow-hidden rounded-[2rem] border border-blue-100 bg-white p-5 shadow-[0_22px_60px_rgba(15,39,66,0.08)] sm:p-8">
        <div className="mb-7 grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <SectionBadge>Estimasi Budget AC + Pasang</SectionBadge>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Pilih AC sesuai budget Anda
            </h2>
          </div>
          <p className="text-sm leading-7 text-slate-600 sm:text-base">
            Gambaran awal supaya Anda tahu budget segini dapat pilihan merek apa saja. Harga final tetap
            mengikuti tipe unit, stok, promo, dan kondisi pemasangan di lokasi.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {budgetPackages.map((item) => (
            <div
              key={item.budget}
              className="rounded-[1.6rem] border border-slate-200 bg-slate-50 p-5 text-center transition hover:-translate-y-0.5 hover:bg-white hover:shadow-lg"
            >
              <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 font-black text-cyan-700">
                ✓
              </div>
              <h3 className="mb-4 text-3xl font-black text-slate-950">{item.budget}</h3>
              <p className="rounded-2xl border border-blue-100 bg-white px-4 py-4 text-sm font-semibold leading-7 text-slate-700">
                {item.brands}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-[1.5rem] border border-blue-100 bg-blue-50 p-5">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-slate-500">
            Paket standar termasuk
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {packageIncludes.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-600 text-xs font-black text-white">
                  ✓
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-[1.4rem] border border-amber-200 bg-amber-50 px-4 py-4 text-sm leading-7 text-amber-900">
          <strong>Catatan:</strong> harga menyesuaikan merek, PK, stok, promo, panjang pipa, posisi outdoor,
          dan kebutuhan instalasi tambahan. Semua dikonfirmasi dulu sebelum pemasangan.
        </div>

        <div className="mt-6 flex justify-center">
          <WhatsappLink
            className="inline-flex w-full items-center justify-center rounded-full bg-[#25D366] px-5 py-3 text-sm font-black text-slate-950 shadow-[0_10px_24px_rgba(37,211,102,0.18)] transition hover:-translate-y-0.5 hover:bg-[#20BA5A] sm:w-auto"
            source="Home Price Estimate"
            intent="cek estimasi budget AC dan pemasangan"
          >
            Sudah Punya Budget? Chat Sekarang
          </WhatsappLink>
        </div>
      </div>
    </section>
  );
}

function HomePaymentTrust() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-6">
      <div className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm">
        <div className="grid gap-4 md:grid-cols-3 md:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-700">
              Alur Pembelian Aman
            </p>
            <h2 className="mt-2 text-xl font-black text-slate-950">
              Konsultasi dulu, stok dicek, detail dikonfirmasi admin.
            </h2>
          </div>

          <div className="md:col-span-2 grid gap-3 sm:grid-cols-3">
            {["Cek kebutuhan PK", "Konfirmasi stok & brand", "Bahas pengiriman/pasang"].map((item) => (
              <div key={item} className="rounded-2xl bg-slate-50 p-4 text-sm font-bold text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HomeSalesLanding() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <div className="overflow-hidden rounded-[2rem] border border-cyan-200 bg-cyan-50 p-6 shadow-[0_35px_90px_rgba(8,145,178,0.10)] sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionBadge>Cek Dulu Sebelum Deal</SectionBadge>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Beli AC yang pas itu bukan soal yang paling murah
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Yang sering jadi masalah bukan harga unitnya — tapi PK tidak sesuai ruangan, stok ternyata
              kosong, ongkir belum dihitung, atau biaya pemasangan berbeda dari perkiraan. Admin kami bantu
              cek dari awal supaya pembelian satuan maupun pengadaan banyak unit lebih jelas.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <WhatsappLink
                className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-4 font-black text-slate-950 transition hover:bg-[#20BA5A]"
                source="Home Sales Landing"
                intent="minta rekomendasi AC sesuai ruangan dan budget"
              >
                Tanya Rekomendasi via WhatsApp
              </WhatsappLink>
              <ArrowLink
                href={routes.katalog}
                className="border border-cyan-200 bg-white text-slate-900 hover:bg-cyan-100"
              >
                Lihat Pilihan AC
              </ArrowLink>
              <ArrowLink
                href={routes.buktiPengirimanProyek}
                className="border border-cyan-200 bg-white text-cyan-900 hover:bg-cyan-100"
              >
                Lihat Gallery
              </ArrowLink>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
            {salesPoints.map((item) => (
              <div key={item.title} className="rounded-[1.5rem] border border-cyan-100 bg-white p-5 shadow-sm">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-50 text-sm font-black text-cyan-800">
                  {item.icon}
                </div>
                <h3 className="mb-2 font-black text-slate-950">{item.title}</h3>
                <p className="text-sm leading-6 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HomeCategory() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <div className="mb-6">
        <SectionBadge>Kategori Produk</SectionBadge>
        <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
          Pilih dari jenis ruangan Anda
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
          Kamar kost, rumah, toko yang pintunya sering buka, dan kantor hitungannya berbeda. Mulai dari
          kategori yang paling dekat dengan kondisi tempat Anda.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {categoryItems.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="rounded-[1.5rem] border border-slate-200 bg-white p-4 text-center shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-200 hover:bg-cyan-50 sm:p-6"
          >
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-100 bg-cyan-50 text-xl font-black text-cyan-800 sm:h-14 sm:w-14">
              {item.icon}
            </div>
            <h3 className="mb-2 text-base font-black text-slate-950 sm:text-lg">{item.title}</h3>
            <p className="text-xs leading-6 text-slate-600 sm:text-sm">{item.desc}</p>
            <div className="mt-4 text-cyan-700" aria-hidden="true">
              →
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function HomeBrands() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10" id="brand-lainnya">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <SectionBadge>Brand Tersedia</SectionBadge>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Tiap brand punya karakter sendiri
          </h2>
        </div>

        <ArrowLink
          href={routes.brandLainnya}
          className="hidden border border-cyan-200 bg-white text-cyan-900 hover:bg-cyan-50 sm:inline-flex"
        >
          Lihat Brand Lainnya
        </ArrowLink>
      </div>

      <p className="mb-7 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
        Gree punya value kuat dan RADJA AC tercantum sebagai Proshop Gree resmi. Daikin cocok untuk
        ketenangan jangka panjang, Midea populer karena harga masuk, Hisense modern, Sansui untuk kebutuhan
        ekonomis, dan brand lain bisa dicek sesuai stok. Belum yakin pilih yang mana? Chat dulu — admin
        bantu arahkan sesuai ruangan dan listrik.
      </p>

      <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-7">
        {mainBrands.map((brand) => (
          <Link
            key={brand.name}
            href={brand.href}
            className="group rounded-[1.5rem] border border-slate-200 bg-white px-4 py-5 text-center shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-200 hover:bg-cyan-50"
          >
            <div className="flex h-12 items-center justify-center">
              <Image
                src={brand.logo}
                alt={`Logo ${brand.name}`}
                width={148}
                height={56}
                className="max-h-11 w-auto object-contain"
              />
            </div>
            <p className="mt-3 mb-3 flex min-h-[40px] items-center justify-center text-xs leading-5 text-slate-500">
              {brand.tagline}
            </p>
            <div className="text-xs font-black text-cyan-700">
              Cek Stok & Harga →
            </div>
          </Link>
        ))}
      </div>

      <div className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-cyan-700">
              Brand Lainnya
            </p>
            <h3 className="text-xl font-black text-slate-950">
              Brand lain bisa dicek sesuai stok dan kebutuhan
            </h3>
          </div>
          <p className="text-sm text-slate-500 sm:text-right">
            Mau cari brand tertentu? Chat dulu, nanti admin bantu cek.
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
    </section>
  );
}

function HomeWhyChoose() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <SectionBadge>Cara Kami Kerja</SectionBadge>
        <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
          Stok dicek, PK dihitung, pasang dijelaskan — sebelum Anda deal
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600">
          Bukan soal promosi. Ini yang kami lakukan di setiap order — supaya tidak ada yang kaget di
          belakang, baik soal harga maupun hasil akhir pemasangan.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:gap-5">
        {whyChooseItems.map((item) => (
          <div
            key={item.title}
            className="rounded-[1.75rem] border border-slate-200 bg-white p-5 text-center shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-200 hover:bg-cyan-50 sm:p-6"
          >
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-100 bg-cyan-50 text-xl font-black text-cyan-800 sm:h-16 sm:w-16">
              {item.icon}
            </div>
            <h3 className="mb-3 text-base font-black leading-snug text-slate-950 sm:text-lg">{item.title}</h3>
            <p className="text-xs leading-6 text-slate-600 sm:text-sm sm:leading-7">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function HomeClosingCta() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 pt-8">
      <div className="overflow-hidden rounded-[2rem] bg-slate-950 p-6 text-white shadow-[0_28px_80px_rgba(15,23,42,0.20)] sm:p-8 lg:p-10">
        <div className="grid gap-7 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-cyan-300">
              Siap konsultasi?
            </p>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
              Kirim ukuran ruangan dan kebutuhan AC Anda.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
              Admin RADJA AC bantu cek rekomendasi PK, opsi brand, estimasi budget, pengiriman, dan opsi
              pemasangan. Tidak perlu langsung deal — tanya dulu tidak apa-apa.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
            <WhatsappLink
              className="inline-flex w-full items-center justify-center rounded-full bg-[#25D366] px-6 py-4 text-sm font-black text-slate-950 transition hover:bg-[#20BA5A]"
              source="Homepage Closing CTA"
              intent="konsultasi kebutuhan AC dari homepage"
            >
              Chat Admin RADJA AC
            </WhatsappLink>

            <div className="mt-4 grid gap-2 text-sm text-white/60">
              <span>• Ukuran ruangan</span>
              <span>• Daya listrik</span>
              <span>• Lokasi pengiriman</span>
              <span>• Jumlah unit / kebutuhan proyek</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomepageLegacyParity() {
  return (
    <main className="overflow-hidden bg-slate-50 text-slate-950">
      <HomeHero />
      <HomeTrust />
      <HomePriceEstimate />
      <HomePaymentTrust />
      <HomeSalesLanding />
      <HomeCategory />
      <HomeBrands />
      <HomeWhyChoose />
      <HomeClosingCta />
    </main>
  );
}
