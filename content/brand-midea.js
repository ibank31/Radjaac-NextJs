import { routes } from "@/content/routes";

// Midea premium content (source of truth: radjaac-premium MideaPurwokerto.jsx).
// Dealer-template variant: status block after Garansi, no Panduan PK CTA.

const HERO_IMAGE = "/photos/brand-proof/midea-midea-showcase.webp";

export const mideaPremiumContent = {
  hero: {
    image: HERO_IMAGE,
    imageAlt: "Showcase AC Midea original di showroom RADJA AC",
    badge: "AC MIDEA ORIGINAL — RADJA AC",
    breadcrumbLabel: "Midea",
    titleLead: "AC Midea Original",
    titleHighlight: "Stok Dicek Hari Ini, Harga Jelas Sebelum Deal",
    paragraphs: [
      "Midea pilihan realistis untuk rumah, kamar, kost, kontrakan, atau toko kecil — harga lebih ramah, fitur cukup modern, dan pilihan tipe lengkap. Kalau sedang cari AC Midea original, admin RADJA AC bisa bantu cek stok yang ready, kisaran harga, alamat pengiriman, dan opsi pemasangan hari ini.",
    ],
    primaryCtaLabel: "Cek Stok & Harga Midea Sekarang",
    secondaryCtaLabel: "Lihat Pilihan Midea",
    secondaryCtaHref: "#produk-midea",
    showShowroomLink: false,
    chips: [
      "Mulai 3,5 jutaan",
      "Garansi teknisi 1 bulan",
      "Bantu arahan klaim unit",
      "Pengiriman by konfirmasi",
      "Cocok rumah & kost",
      "Standard / Low Watt / Inverter",
    ],
  },

  statusBlock: {
    placement: "afterWarranty",
    badge: "Authorized Dealer Midea",
    title: "Midea bukan asal murah — ini pilihan realistis untuk pembeli yang paham kebutuhan",
    paragraphs: [
      "Di antara Daikin yang premium dan brand yang harga pertamanya menggoda tapi purna jualnya tidak jelas, Midea ada di tengah. Fiturnya sudah cukup — standard, low watt, inverter semuanya ada. Harganya lebih masuk untuk pembeli yang budget-nya tidak tak terbatas tapi tetap mau unit yang bisa diandalkan.",
    ],
    badgeLabel: "Authorized Dealer Certificate",
    image: "/photos/brand-proof/midea-sertificate-midea.webp",
    imageAlt: "Sertifikat resmi dealer Midea untuk RADJA AC",
  },

  warranty: {
    eyebrow: "Garansi & Klaim Unit",
    title: "Beli Midea di sini, garansi teknisi dan urusan klaim unit jelas",
    description:
      "Garansi teknisi 1 bulan berlaku untuk kendala yang berkaitan dengan pekerjaan pemasangan. Garansi produk mengikuti kartu garansi Midea di dalam kemasan. Kalau ada kendala pada unit setelah dipasang, RADJA AC bisa bantu arahan proses klaim garansi ke Midea sesuai ketentuan resmi — bukan diganti toko, tapi dibantu prosesnya.",
    cards: [
      {
        title: "Garansi teknisi 1 bulan",
        description:
          "Garansi berlaku untuk kendala yang berkaitan langsung dengan pekerjaan pemasangan atau instalasi dari teknisi RADJA AC.",
      },
      {
        title: "Garansi unit mengikuti ketentuan Midea",
        description:
          "Garansi produk sesuai kartu garansi Midea yang ada di dalam kemasan unit. Simpan kartu garansi dan struk pembelian.",
      },
      {
        title: "Bantu arahkan klaim ke brand terkait",
        description:
          "Kalau ada kendala pada unit AC, RADJA AC bisa bantu arahan proses klaim garansi ke Midea sesuai ketentuan resmi — selama dokumen pembelian dan kartu garansi tersedia.",
      },
    ],
  },

  price: {
    eyebrow: "Kapasitas PK",
    title: "Stok Midea tidak cuma 1/2 PK — tersedia sampai 2 PK sesuai kebutuhan",
    description:
      "Angka di bawah ini adalah estimasi awal untuk paket AC + pemasangan standar. Paket standar sudah termasuk unit AC, pipa 2 meter, kabel 5 meter, bracket outdoor 1 set, duct tape, selang pembuangan, dan vacuum AC.",
    footnote:
      "Harga low watt, inverter, 3/4 PK sampai 2 PK bervariasi — admin bantu cek stok dan angka terbaru via WhatsApp.",
    tiers: [
      [
        "Midea Standard ½ PK",
        "Mulai 3 jutaan",
        "Sudah termasuk unit + pemasangan standar. Pilihan paling realistis kalau mau AC baru sekarang tanpa drama budget.",
      ],
      [
        "Midea Inverter ½ PK",
        "Mulai 4 jutaan",
        "Unit + pasang standar. Naik kelas dari standard — lebih modern, lebih efisien, dan lebih worth it untuk pemakaian rutin.",
      ],
      [
        "¾ PK sampai 2 PK",
        "Cek via WhatsApp",
        "Admin cek stok dan harga sesuai kapasitas — untuk ruangan lebih besar, kantor, atau beberapa unit sekaligus.",
      ],
    ],
  },

  character: {
    eyebrow: "Kenapa Midea?",
    title: "Midea banyak dicari karena posisinya pas — bukan termurah, bukan yang paling mahal",
    description:
      "Banyak pembeli rumahan memilih Midea karena harganya masuk akal tapi unit tidak terasa murahan. Kalau Anda belum yakin Midea yang cocok atau ada brand lain yang lebih pas, admin bisa bantu bandingkan.",
    cards: [
      {
        title: "Harga lebih masuk, fitur tidak ketinggalan",
        description:
          "Midea bukan brand asal murah. Fiturnya sudah cukup modern untuk kebutuhan harian — kamar tidur, kost, kontrakan, sampai toko kecil. Harganya hanya lebih ramah di kantong dibanding kelas premium.",
      },
      {
        title: "Ada pilihan low watt kalau daya listrik terbatas",
        description:
          "Banyak rumah masih memakai daya 900–1300 watt. Midea low watt bisa jadi pilihan supaya MCB tidak gampang turun setiap AC dinyalakan.",
      },
      {
        title: "Bingung Midea, Gree, atau Daikin? Admin bisa bantu bandingkan",
        description:
          "Kirim ukuran ruangan, daya listrik, dan budget. Admin RADJA AC bantu arahkan mana yang lebih masuk — Midea, Gree, Hisense, atau Daikin — tanpa harus langsung deal.",
      },
    ],
  },

  products: {
    anchorId: "produk-midea",
    eyebrow: "Pilihan Tipe",
    title: "Pilihan AC Midea: standard, low watt, atau inverter?",
    description:
      "Masing-masing tipe Midea ada kecocokannya sendiri tergantung ruangan, daya listrik, dan pola pemakaian. Kalau masih bingung mau yang mana, ceritakan kondisi ruangan ke admin — kami bantu pilihkan yang paling masuk.",
    items: [
      {
        title: "Midea Standard",
        badge: "Harian",
        image: "/photos/product-display/midea-ac-midea-standar.webp",
        fit: "Kamar tidur, kost, kontrakan, ruang santai, dan toko kecil",
        priority: "Pendinginan harian dengan harga yang realistis",
        description:
          "Midea standard cocok untuk kamar, kost, kontrakan, atau toko kecil yang butuh AC fungsional tanpa budget berlebihan. Stok dicek dulu sebelum konfirmasi.",
        highlights: ["Standard", "Rumah & Kost", "Fungsional"],
        cta: "Cek Stok Midea Standard",
      },
      {
        title: "Midea Low Watt",
        badge: "Daya ringan",
        image: "/photos/product-display/midea-ac-midea-low-wat.webp",
        fit: "Rumah dengan daya terbatas, kamar kost, kontrakan",
        priority: "MCB tidak gampang turun, pemakaian harian lebih tenang",
        description:
          "Kalau daya listrik di bawah 1300 watt atau MCB sering turun, Midea low watt layak dipertimbangkan sebelum naik ke inverter. Admin bisa bantu cek apakah tipe ini ready.",
        highlights: ["Low watt", "MCB aman", "Efisien"],
        cta: "Cek Stok Midea Low Watt",
      },
      {
        title: "Midea Inverter",
        badge: "Pemakaian rutin",
        image: HERO_IMAGE,
        fit: "Kamar utama, ruang keluarga, kantor kecil, pemakaian panjang",
        priority: "Suhu lebih stabil, tagihan listrik lebih bisa diprediksi",
        description:
          "Untuk kamar yang AC-nya nyala hampir tiap hari atau ruang keluarga yang penghuninya banyak, Midea inverter lebih masuk akal jangka panjang. Stok dan harga dicek via WhatsApp.",
        highlights: ["Inverter", "Suhu stabil", "Jangka panjang"],
        cta: "Cek Stok Midea Inverter",
      },
    ],
  },

  checklist: {
    eyebrow: "Sebelum Beli",
    title: "Supaya tidak salah PK — kirim info ini sebelum deal",
    description:
      "Midea salah PK sama saja sia-sia — AC tidak dingin maksimal atau tagihan listrik membengkak. Kirim data di bawah ini ke admin RADJA AC, kami bantu rekomendasikan tipe dan kapasitas yang paling masuk untuk kondisi ruangan Anda.",
    items: [
      "Ukuran ruangan kira-kira (panjang × lebar) dan tinggi plafon jika ada",
      "Daya listrik rumah, kost, toko, atau tempat usaha",
      "Jenis ruangan: kamar, rumah, kost, kontrakan, toko, ruko, atau kantor",
      "Jumlah unit yang dibutuhkan sekaligus atau bertahap",
      "Mau standard, low watt, atau inverter — atau belum tahu sama sekali",
      "Foto posisi indoor-outdoor jika butuh estimasi pemasangan",
    ],
  },

  pk: {
    eyebrow: "Panduan PK",
    title: "Estimasi kapasitas AC Midea sesuai ukuran ruangan",
    description:
      "Tabel ini hanya patokan awal. Jumlah jendela, posisi ruangan (menghadap barat atau timur), dan jumlah penghuni juga berpengaruh. Admin bisa bantu cek lebih tepat sesuai kondisi nyata ruangan Anda.",
    guide: [
      ["½ PK", "± 9–12 m²", "Kamar kecil, kost, ruang kerja pribadi"],
      ["¾ PK", "± 12–15 m²", "Kamar sedang, ruang santai biasa"],
      ["1 PK", "± 15–20 m²", "Kamar besar atau ruang keluarga kecil"],
      ["1.5 PK", "± 20–30 m²", "Ruang keluarga, kantor, atau toko kecil"],
      ["2 PK", "± 30–40 m²", "Ruangan luas, toko, atau kebutuhan komersial"],
    ],
    cta: null,
  },

  internalLinks: {
    eyebrow: "Baca Juga",
    title: "Panduan sebelum beli AC Midea",
    description:
      "Halaman berikut membantu Anda membandingkan kebutuhan AC Midea dengan kategori dan panduan pembelian yang relevan sebelum memutuskan.",
    links: [
      {
        title: "Konsultasi AC Midea",
        description: "Sebelum OTW ke showroom, cek stok, harga, brand yang ready, dan kebutuhan pemasangan di RADJA AC.",
        href: routes.kontak,
      },
      {
        title: "AC Split Rumah",
        description: "Pilihan AC untuk kamar, kost, kontrakan, dan rumah tinggal dari berbagai merek dan kapasitas.",
        href: routes.katalogAcSplitRumah,
      },
      {
        title: "AC Low Watt",
        description: "Cek pilihan AC untuk rumah dengan daya listrik terbatas supaya MCB tidak gampang turun.",
        href: routes.katalogAcLowWatt,
      },
      {
        title: "AC Inverter",
        description: "Bandingkan pilihan AC inverter untuk pemakaian rutin dan suhu lebih stabil dari berbagai brand.",
        href: routes.katalogAcInverter,
      },
    ],
  },

  closing: {
    title: "Mau beli AC Midea original? Cek stok dulu, deal belakangan.",
    description:
      "Chat tidak harus langsung transfer. Kirim ukuran ruangan, daya listrik, lokasi, dan budget — admin RADJA AC bantu cek pilihan Midea yang ready hari ini, estimasi harga plus pasang, dan konfirmasi jadwal teknisi sebelum Anda memutuskan.",
    buttonLabel: "Cek Stok & Harga Midea Sekarang",
  },

  faq: {
    eyebrow: "FAQ",
    title: "Yang sering ditanyakan soal AC Midea",
  },
};
