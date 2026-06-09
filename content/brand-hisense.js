import { routes } from "@/content/routes";

// Hisense premium content (source of truth: radjaac-premium HisensePurwokerto.jsx).
// Dealer-template variant: status block after Garansi, no Panduan PK CTA.

const HERO_IMAGE = "/photos/showroom/display-hisense-new.webp";

export const hisensePremiumContent = {
  hero: {
    image: HERO_IMAGE,
    imageAlt: "Showcase AC Hisense original di showroom RADJA AC",
    badge: "AC HISENSE ORIGINAL — RADJA AC",
    breadcrumbLabel: "Hisense",
    titleLead: "AC Hisense Original",
    titleHighlight: "Modern, Value Bagus, Stok Dicek Hari Ini",
    paragraphs: [
      "Hisense pilihan pintar untuk yang tidak mau overpay tapi tetap ingin AC yang terasa modern. Kalau sedang cari AC Hisense Original untuk kamar, kost, ruang keluarga, toko kecil, atau kantor, admin RADJA AC bisa bantu cek stok yang ready, kisaran harga, dan estimasi pemasangan area yang dikonfirmasi hari ini.",
    ],
    primaryCtaLabel: "Cek Stok & Harga Hisense Sekarang",
    secondaryCtaLabel: "Lihat Pilihan Hisense",
    secondaryCtaHref: "#produk-hisense",
    showShowroomLink: true,
    chips: [
      "Mulai 3,5 jutaan",
      "Garansi teknisi 1 bulan",
      "Bantu arahan klaim unit",
      "Pengiriman by konfirmasi",
      "Cocok rumah & usaha",
      "Standard / Inverter",
    ],
  },

  statusBlock: {
    placement: "afterWarranty",
    badge: "Dealer Certificate Hisense",
    title: "Hisense bukan pilihan asal — ini AC modern untuk pembeli yang tahu apa yang dicari",
    paragraphs: [
      "Di antara brand premium yang mahal dan brand entry-level yang terasa ala kadarnya, Hisense ada di posisi yang menarik: fitur cukup lengkap, tampilan modern, harga tidak membuat dompet kaget. Cocok untuk pembeli kebutuhan rumah, usaha, dan proyek yang mau AC yang terasa lebih dari cukup — tanpa harus membayar untuk nama brand semata.",
    ],
    badgeLabel: "Dealer Certificate",
    image: "/photos/brand-proof/hisense-sertifikat-hisense.webp",
    imageAlt: "Sertifikat resmi dealer Hisense untuk RADJA AC",
  },

  warranty: {
    eyebrow: "Garansi & Klaim Unit",
    title: "Beli Hisense di sini, garansi teknisi dan urusan klaim unit sudah jelas",
    description:
      "Garansi teknisi 1 bulan berlaku untuk kendala yang berkaitan dengan pekerjaan pemasangan. Garansi produk mengikuti kartu garansi Hisense di dalam kemasan. Kalau ada kendala pada unit setelah dipasang, RADJA AC bisa bantu arahan proses klaim garansi ke Hisense sesuai ketentuan resmi — bukan diganti toko, tapi dibantu prosesnya.",
    cards: [
      {
        title: "Garansi teknisi 1 bulan",
        description:
          "Garansi berlaku untuk kendala yang berkaitan langsung dengan pekerjaan pemasangan atau instalasi dari teknisi RADJA AC.",
      },
      {
        title: "Garansi unit mengikuti ketentuan Hisense",
        description:
          "Garansi produk sesuai kartu garansi Hisense yang ada di dalam kemasan unit. Simpan kartu garansi dan struk pembelian.",
      },
      {
        title: "Bantu arahkan klaim ke brand terkait",
        description:
          "Kalau ada kendala pada unit AC, RADJA AC bisa bantu arahan proses klaim garansi ke Hisense sesuai ketentuan resmi — selama dokumen pembelian dan kartu garansi tersedia.",
      },
    ],
  },

  price: {
    eyebrow: "Kapasitas PK",
    title: "Stok Hisense tidak cuma 1/2 PK — tersedia sampai 2 PK",
    description:
      "Angka di bawah ini adalah estimasi awal untuk paket AC + pemasangan standar. Paket standar sudah termasuk unit AC, pipa 2 meter, kabel 5 meter, bracket outdoor 1 set, duct tape, selang pembuangan, dan vacuum AC.",
    footnote:
      "Harga inverter dan kapasitas 3/4 PK ke atas bervariasi — admin bantu cek stok dan angka terbaru via WhatsApp.",
    tiers: [
      [
        "Hisense Standard ½ PK",
        "Mulai 3 jutaan",
        "Unit + pasang standar. Budget 3 jutaan dan ingin langsung punya AC baru — Hisense jadi pilihan realistis untuk kamar, kost, kontrakan, dan rumah.",
      ],
      [
        "Hisense Inverter ½ PK",
        "Mulai 4 jutaan",
        "Unit + pasang standar. Dapat inverter di 4 jutaan sudah termasuk pasang — cocok untuk kamar yang dipakai rutin dan ingin fitur lebih modern.",
      ],
      [
        "¾ PK sampai 2 PK",
        "Cek via WhatsApp",
        "Admin cek stok dan harga langsung sesuai kapasitas yang dibutuhkan.",
      ],
    ],
  },

  character: {
    eyebrow: "Kenapa Hisense?",
    title: "Hisense menarik karena posisinya pas — modern tapi tidak perlu overpay",
    description:
      "Pembeli di rumah, usaha, dan proyek yang tidak mau bayar mahal untuk nama brand tapi juga tidak mau AC yang terasa murahan — Hisense sering jadi jawaban yang masuk akal. Kalau masih bimbang, admin bisa bantu bandingkan dengan Midea, Gree, atau Daikin.",
    cards: [
      {
        title: "Fitur modern, harga tidak overpay",
        description:
          "Hisense menarik buat pembeli yang tidak mau bayar mahal untuk nama brand, tapi juga tidak mau AC yang terasa murahan. Fiturnya sudah cukup modern untuk pemakaian harian rumah, kamar, sampai toko kecil.",
      },
      {
        title: "Self-Cleaning dan fitur praktis yang ada di beberapa tipe",
        description:
          "Beberapa tipe Hisense sudah dilengkapi fitur Self-Cleaning, Anti Mildew, dan mode pintar — jadi AC tidak gampang kotor dan perawatan hariannya lebih ringan.",
      },
      {
        title: "Bingung Hisense vs Midea vs Gree? Admin bisa bantu bedakan",
        description:
          "Kirim ukuran ruangan, daya listrik, dan budget. Admin RADJA AC bantu bandingkan mana yang paling masuk — Hisense, Midea, Gree, atau Daikin — sebelum Anda memutuskan.",
      },
    ],
  },

  products: {
    anchorId: "produk-hisense",
    eyebrow: "Pilihan Tipe",
    title: "Pilihan AC Hisense Original: standard, inverter, atau untuk usaha?",
    description:
      "Masing-masing tipe Hisense punya kecocokannya sendiri tergantung ruangan, daya listrik, dan pola pemakaian. Masih bingung mau yang mana? Ceritakan kondisi ruangan ke admin — kami bantu arahkan pilihan yang paling masuk.",
    items: [
      {
        title: "Hisense Standard",
        badge: "Harian",
        image: "/photos/product-display/hisense-ac-hisense-standar.webp",
        fit: "Kamar tidur, kost, ruang santai, kontrakan, dan toko kecil",
        priority: "Pendinginan harian yang fungsional dan tidak boros",
        description:
          "Hisense standard cocok untuk kamar, kost, kontrakan, atau toko kecil yang butuh AC yang terasa modern tanpa harga yang terlalu berat. Stok dicek dulu sebelum konfirmasi.",
        highlights: ["Standard", "Modern", "Value"],
        cta: "Cek Stok Hisense Standard",
      },
      {
        title: "Hisense Inverter",
        badge: "Pemakaian rutin",
        image: HERO_IMAGE,
        fit: "Kamar utama, ruang keluarga, kantor kecil, pemakaian panjang",
        priority: "Suhu lebih stabil, konsumsi listrik lebih bisa diprediksi",
        description:
          "Untuk ruangan yang AC-nya nyala panjang setiap hari — kamar utama, ruang keluarga, atau kantor kecil — Hisense inverter lebih masuk akal jangka panjang. Stok dan harga dikonfirmasi admin.",
        highlights: ["Inverter", "Suhu stabil", "Efisien"],
        cta: "Cek Stok Hisense Inverter",
      },
      {
        title: "Hisense untuk Toko & Usaha Kecil",
        badge: "Usaha",
        image: "/photos/product-display/hisense-ac-hisense-standar.webp",
        fit: "Toko kecil, ruang kerja, usaha rumahan, dan kantor kecil",
        priority: "AC modern untuk ruangan usaha tanpa budget yang memberatkan",
        description:
          "Toko kecil atau kantor kecil butuh AC yang dingin konsisten, tidak sering minta servis, dan tidak merusak anggaran operasional. Hisense bisa jadi pilihan yang realistis untuk itu.",
        highlights: ["Toko", "Kantor", "Usaha"],
        cta: "Cek Hisense untuk Usaha",
      },
    ],
  },

  checklist: {
    eyebrow: "Sebelum Beli",
    title: "Supaya AC Hisense tidak salah PK — kirim info ini sebelum deal",
    description:
      "Hisense salah PK sama saja rugi dua kali — AC tidak maksimal atau tagihan listrik jebol. Kirim data di bawah ini ke admin RADJA AC, kami bantu rekomendasikan tipe dan kapasitas yang paling masuk untuk kondisi ruangan Anda.",
    items: [
      "Ukuran ruangan kira-kira (panjang × lebar) dan tinggi plafon jika ada",
      "Daya listrik rumah, kost, toko, atau tempat usaha",
      "Jenis ruangan: kamar, rumah, kost, kontrakan, toko, ruko, atau kantor",
      "Jumlah unit yang dibutuhkan sekaligus atau bertahap",
      "Mau standard atau inverter — atau belum tahu sama sekali",
      "Foto posisi indoor-outdoor jika butuh estimasi pemasangan",
    ],
  },

  pk: {
    eyebrow: "Panduan PK",
    title: "Estimasi kapasitas AC Hisense sesuai ukuran ruangan",
    description:
      "Tabel ini hanya patokan awal. Jumlah jendela, arah ruangan menghadap, dan jumlah penghuni juga berpengaruh. Admin bisa bantu cek lebih tepat sesuai kondisi nyata ruangan Anda.",
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
    title: "Panduan sebelum beli AC Hisense Original",
    description:
      "Halaman berikut membantu Anda membandingkan kebutuhan AC Hisense dengan kategori dan panduan pembelian yang relevan sebelum memutuskan.",
    links: [
      {
        title: "Konsultasi AC Hisense",
        description: "Sebelum OTW ke showroom, cek stok, harga, brand yang ready, dan kebutuhan pemasangan di RADJA AC.",
        href: routes.kontak,
      },
      {
        title: "AC Split Rumah",
        description: "Pilihan AC untuk kamar, kost, kontrakan, dan rumah tinggal dari berbagai merek dan kapasitas.",
        href: routes.katalogAcSplitRumah,
      },
      {
        title: "AC Inverter",
        description: "Bandingkan pilihan AC inverter untuk pemakaian rutin dan suhu lebih stabil dari berbagai brand.",
        href: routes.katalogAcInverter,
      },
      {
        title: "Jual AC Original",
        description: "Halaman pusat untuk cek semua brand, stok, harga, dan rekomendasi PK sesuai kebutuhan.",
        href: routes.jualAcPurwokerto,
      },
    ],
  },

  closing: {
    title: "Mau beli AC Hisense original? Cek stok dulu, deal belakangan.",
    description:
      "Chat tidak harus langsung transfer. Kirim ukuran ruangan, daya listrik, lokasi, dan budget — admin RADJA AC bantu cek pilihan Hisense yang ready hari ini, estimasi harga plus pasang, dan konfirmasi jadwal teknisi sebelum Anda memutuskan.",
    buttonLabel: "Cek Stok & Harga Hisense Sekarang",
  },

  faq: {
    eyebrow: "FAQ",
    title: "Yang sering ditanyakan soal AC Hisense Original",
  },
};
