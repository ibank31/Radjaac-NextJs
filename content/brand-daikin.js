import { routes } from "@/content/routes";

// Daikin-specific premium content layer.
// Mirrors the section content/hierarchy of the DaikinPurwokerto reference
// while keeping the existing generic brand template untouched for other brands.

export const daikinPremiumContent = {
  hero: {
    image: "/photos/showroom/display-daikin-new.webp",
    imageAlt: "Display AC Daikin original di showroom Radja AC",
    badge: "AC DAIKIN ORIGINAL MULTI-BRAND DEALER",
    breadcrumbLabel: "Daikin",
    titleLead: "Jual AC Daikin Original",
    titleHighlight: "Cek Stok, Harga & Pemasangan Hari Ini",
    description:
      "Daikin dikenal tahan lama, spare part relatif mudah, dan pilihan tipenya lengkap untuk rumah, kost, toko, kantor, hotel, sampai proyek. Radja AC bantu cek stok yang benar-benar ready, estimasi harga, rekomendasi PK sesuai ruangan, pengiriman unit, dan opsi pemasangan by konfirmasi. Garansi unit mengikuti ketentuan resmi Daikin.",
    primaryCtaLabel: "Cek Stok & Harga Daikin Sekarang",
    secondaryCtaLabel: "Lihat Pilihan Daikin",
    secondaryCtaHref: "#produk-daikin",
    chips: [
      "Unit original",
      "Authorized Dealer",
      "Garansi teknisi 1 bulan",
      "Bantu proses klaim",
      "Pengiriman by konfirmasi",
      "Unit + pemasangan",
    ],
  },

  urgentCta: {
    eyebrow: "Stok & harga bisa berubah sewaktu-waktu",
    title: "Cek unit Daikin yang ready sebelum OTW showroom.",
    body: "Chat tidak harus langsung beli. Kirim ukuran ruangan, daya listrik, dan lokasi — admin bantu cek tipe Daikin yang sesuai dengan ukuran ruangan dan daya listrik, harga terakhir, jadwal pengiriman, dan opsi pemasangan. Stok dan harga dikonfirmasi langsung, bukan dari katalog online yang belum tentu up to date.",
    buttonLabel: "Tanya Admin Dulu",
  },

  warranty: {
    eyebrow: "Garansi & Bantuan Klaim",
    title: "Beli Daikin di sini, tidak ditinggal begitu AC terpasang",
    description:
      "Banyak yang takut beli AC terus ada masalah dan tidak ada yang bisa dimintai bantuan. Di Radja AC, garansi teknisi 1 bulan berlaku untuk kendala yang berkaitan dengan pekerjaan pemasangan. Untuk unit Daikin-nya, garansi mengikuti ketentuan resmi Daikin dan kartu garansi produk. Kalau ada kendala, toko bantu arahan awal proses klaim sesuai syarat yang berlaku.",
  },

  warrantyTrust: [
    {
      title: "Garansi teknisi 1 bulan",
      description:
        "Kalau ada kendala setelah pasang yang berkaitan dengan pekerjaan instalasi teknisi kami, dilaporkan dalam 1 bulan — kami tanggung.",
    },
    {
      title: "Garansi unit mengikuti Daikin",
      description:
        "Garansi unit bukan dari toko — tapi dari Daikin langsung sesuai ketentuan resmi dan kartu garansi produk yang disertakan.",
    },
    {
      title: "Ada masalah? Toko bantu arahkan",
      description:
        "Kalau unit bermasalah setelah pasang, Radja AC bantu arahan awal proses klaim — selama dokumen pembelian, kartu garansi, dan nomor seri unit tersedia.",
    },
  ],

  priceSection: {
    eyebrow: "Kapasitas PK",
    title: "Bukan cuma ½ PK — stok Daikin bisa sampai 2 PK",
    description:
      "Angka di bawah ini adalah estimasi awal untuk paket AC + pemasangan standar. Paket standar sudah termasuk unit AC, pipa 2 meter, kabel 5 meter, bracket outdoor 1 set, duct tape, selang pembuangan, dan vacuum AC.",
    footnote:
      "Estimasi bukan harga final. ¾ PK, 1 PK, 1.5 PK, dan 2 PK — cek stok dan harga terbaru via WhatsApp.",
  },

  priceTiers: [
    [
      "Daikin Standard / Low Watt ½ PK",
      "Mulai 4 jutaan",
      "Unit + pasang standar. Di harga yang sama dengan beberapa brand lain, Daikin membawa reputasi kuat, jaringan servis luas, dan pengalaman pemakaian yang sudah dipercaya banyak orang.",
    ],
    [
      "Daikin Inverter ½ PK",
      "Mulai 5 jutaan",
      "Unit + pasang standar. Untuk kamar yang AC-nya nyala tiap malam, inverter Daikin memberi suhu lebih stabil, konsumsi listrik lebih terkontrol, dan lebih siap untuk pemakaian jangka panjang.",
    ],
    [
      "¾ PK sampai 2 PK",
      "Cek via WhatsApp",
      "Admin cek stok dan harga langsung sesuai kapasitas yang dibutuhkan.",
    ],
  ],

  authorizedDealer: {
    badge: "Sertifikat Resmi Daikin",
    title: "Radja AC adalah Authorized Dealer Daikin",
    description:
      "Bukan sekadar klaim — ada sertifikat yang bisa dilihat langsung. Ini yang membedakan dealer resmi dengan toko biasa yang jual AC Daikin tanpa kejelasan asal unit. Stok kami original, dan garansi Daikin berlaku sesuai ketentuan resmi.",
    badgeLabel: "Authorized Dealer Daikin",
    certificateImage: "/photos/brand-proof/daikin-sertificate-daikin.webp",
    certificateAlt: "Sertifikat resmi Daikin Authorized Dealer untuk Radja AC",
  },

  brandCharacterSection: {
    eyebrow: "Karakter Daikin",
    title: "Daikin bukan untuk semua orang — tapi untuk yang ingin tenang jangka panjang",
    description:
      "Daikin memang lebih mahal dari brand ekonomis. Yang banyak dikejar: spare part relatif mudah dicari, teknisi lokal banyak yang familiar, dan unit-nya dikenal tidak banyak rewel. Kalau budget lebih ketat, admin bisa juga bantu bandingkan dengan Gree, Midea, atau Hisense — tergantung kebutuhan ruangan dan prioritas pembeli.",
  },

  brandCharacter: [
    {
      title: "Unit original, garansi ikut ketentuan Daikin",
      description:
        "Radja AC menyediakan AC Daikin original untuk kebutuhan rumah, kost, toko, kantor, hotel, dan proyek. Garansi unit mengikuti ketentuan resmi Daikin dan kartu garansi produk — bukan garansi toko saja.",
    },
    {
      title: "PK dikonsultasikan dulu sebelum deal",
      description:
        "Ukuran ruangan, daya listrik, dan pola pemakaian ditanya dulu. Bukan langsung tawarkan unit — supaya Daikin yang dipasang benar-benar pas, tidak ngos-ngosan, dan listrik tidak njeblos.",
    },
    {
      title: "Pemasangan bisa diurus bersamaan",
      description:
        "Beli Daikin bisa lanjut dibantu pengiriman dan opsi pemasangan by konfirmasi. Titik indoor-outdoor, panjang pipa, alamat tujuan, dan jadwal teknisi dikonfirmasi sebelum hari H — tidak asal janjian.",
    },
  ],

  productsSection: {
    eyebrow: "Pilihan Produk",
    title: "Standard, low watt, atau inverter — mana yang lebih cocok?",
    description:
      "Tidak semua orang butuh inverter, tidak semua ruangan cocok low watt. Kirim kondisi ruangan dan daya listrik — admin bantu cek stok Daikin yang ready dan rekomendasikan tipe yang sesuai untuk situasi Anda.",
  },

  products: [
    {
      title: "Daikin Inverter",
      badge: "Pemakaian rutin",
      image: "/photos/brand-proof/daikin-daikin-showcase.webp",
      fit: "Kamar utama, ruang keluarga, kantor kecil",
      priority: "Suhu stabil, listrik lebih efisien jangka panjang",
      description:
        "Kalau AC menyala lebih dari 6–8 jam sehari, inverter biasanya lebih hemat listrik dalam pemakaian jangka panjang. Suhu tidak naik-turun terus, dan konsumsi listrik lebih terkontrol dibanding yang non-inverter. Daikin inverter cocok untuk kamar utama atau ruang yang sering dipakai.",
      highlights: ["Suhu stabil", "Efisien harian", "Jangka panjang"],
      cta: "Cek Stok Daikin Inverter",
    },
    {
      title: "Daikin Low Watt",
      badge: "Daya terbatas",
      image: "/photos/product-display/daikin-ac-daikin-low-watt.webp",
      fit: "Rumah, kos, kontrakan, kamar dengan listrik terbatas",
      priority: "Beban listrik lebih ringan, MCB tidak mudah turun",
      description:
        "Rumah dengan daya 900VA atau 1300VA dan sudah ada beberapa alat elektronik lain — pilihan low watt membantu supaya MCB tidak sering turun. Daikin low watt tetap dingin, konsumsi daya lebih hemat dari varian standar.",
      highlights: ["Daya ringan", "Rumah tinggal", "Aman MCB"],
      cta: "Cek Stok Daikin Low Watt",
    },
    {
      title: "Daikin Standard",
      badge: "Standard",
      image: "/photos/product-display/daikin-ac-daikin-standar.webp",
      fit: "Kamar tidur, toko kecil, ruang santai",
      priority: "Pendinginan harian yang simpel, perawatan mudah",
      description:
        "Tidak semua orang butuh inverter. Kalau AC tidak nyala terlalu lama dan listrik cukup, Daikin standard cocok untuk kebutuhan pendinginan harian dengan biaya awal yang lebih ringan dibanding inverter. Tetap berkualitas Daikin, perawatannya pun tidak ribet.",
      highlights: ["Simpel", "Andal harian", "Perawatan mudah"],
      cta: "Cek Stok Daikin Standard",
    },
  ],

  checklistSection: {
    eyebrow: "Sebelum Beli",
    title: "Kirim info ini — biar rekomendasi PK dan stok-nya lebih akurat",
    description:
      "Banyak yang langsung tanya harga tanpa info ruangan — dan akhirnya salah PK atau kaget dengan biaya tambahan. Lebih baik kirim data dulu, admin bantu cek dari sana. Tidak harus lengkap, tapi makin detail makin mudah.",
  },

  buyingChecklist: [
    "Ukuran ruangan dan tinggi plafon kalau ada",
    "Daya listrik rumah atau tempat usaha",
    "Jenis ruangan: kamar, toko, ruko, kantor, atau usaha",
    "Jumlah unit dan kapasitas PK yang dibutuhkan",
    "Mau standard, low watt, atau inverter",
    "Foto titik indoor-outdoor kalau butuh pemasangan",
  ],

  pkSection: {
    eyebrow: "Panduan PK",
    title: "Kira-kira butuh berapa PK untuk ruangan Anda?",
    description:
      "Tabel ini buat gambaran awal sebelum konsultasi. Angka final tetap disesuaikan dengan kondisi ruangan — posisi jendela, paparan panas matahari, jumlah orang, dan titik pemasangan ikut mempengaruhi.",
  },

  pkGuide: [
    ["½ PK", "± 9–12 m²", "Kamar tidur kecil atau ruang kerja kecil"],
    ["¾ PK", "± 12–15 m²", "Kamar sedang dan ruang santai"],
    ["1 PK", "± 15–20 m²", "Kamar besar atau ruang keluarga kecil"],
    ["1.5 PK", "± 20–30 m²", "Ruang keluarga, kantor, atau toko"],
    ["2 PK", "± 30–40 m²", "Ruangan besar dan kebutuhan komersial"],
  ],

  pkCta: {
    title: "Sudah tahu ukuran ruangannya?",
    description:
      "Kirim ukuran dan daya listrik — admin bantu cek PK Daikin yang sesuai dengan ruangan Anda sebelum Anda beli. Tidak harus langsung deal.",
    buttonLabel: "Konsultasi PK Daikin",
  },

  internalLinksSection: {
    eyebrow: "Baca Juga",
    title: "Panduan sebelum beli AC Daikin",
    description:
      "Artikel dan halaman berikut bantu Anda paham tipe AC, kapasitas PK, dan kebutuhan ruangan sebelum konsultasi ke admin.",
  },

  internalLinks: [
    {
      title: "Konsultasi AC Daikin",
      description:
        "Cek stok Daikin, rekomendasi PK, alamat pengiriman, dan opsi pemasangan sebelum membeli.",
      href: routes.kontak,
    },
    {
      title: "Harga AC Daikin",
      description: "Panduan cek harga, stok, tipe, dan estimasi pemasangan Daikin sebelum membeli.",
      href: routes.brandDaikin,
    },
    {
      title: "Daikin Inverter",
      description: "Kapan inverter lebih efisien dibanding standard? Baca panduan pemakaian dan perbandingannya.",
      href: routes.katalogAcInverter,
    },
    {
      title: "AC Inverter",
      description: "Bandingkan pilihan inverter dari berbagai brand untuk pemakaian rutin.",
      href: routes.katalogAcInverter,
    },
    {
      title: "AC Low Watt",
      description: "Cek pilihan AC untuk rumah dengan daya listrik terbatas.",
      href: routes.katalogAcLowWatt,
    },
    {
      title: "AC Split Rumah",
      description:
        "Rekomendasi AC untuk kamar dan rumah tinggal — dari yang hemat sampai premium.",
      href: routes.katalogAcSplitRumah,
    },
  ],

  closingCta: {
    title: "Mau beli AC Daikin original? Tanya dulu tidak apa-apa.",
    description:
      "Kirim ukuran ruangan, daya listrik, lokasi, dan budget. Admin bantu cek pilihan Daikin yang ready, estimasi harga, paket pemasangan, dan jadwal teknisi. Tidak perlu langsung deal — cek stok dan harga dulu sebelum memutuskan.",
    buttonLabel: "Cek Stok & Harga Daikin Sekarang",
  },
};
