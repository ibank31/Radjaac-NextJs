import { routes } from "@/content/routes";

// Sharp premium content (source of truth: radjaac-premium SharpPurwokerto.jsx).
// "AC original" status — no certificate section in source, so statusBlock is null.

const HERO_IMAGE = "/photos/showroom/showroom-utama.webp";
const PRODUCT_IMAGE = "/photos/product-display/sharp-ac-sharp-bey.webp";

export const sharpPremiumContent = {
  hero: {
    image: HERO_IMAGE,
    imageAlt: "Showroom Radja AC — toko AC Sharp Original dengan stok siap cek",
    badge: "AC SHARP ORIGINAL — Radja AC",
    breadcrumbLabel: "Sharp",
    titleLead: "AC Sharp Original",
    titleHighlight: "Brand Familiar, Stok Dicek Dulu",
    paragraphs: [
      "Kalau Anda sedang cari AC Sharp Original karena sudah kenal nama brandnya, admin Radja AC bisa bantu cek stok yang ready hari ini, pilihan tipe Sharp, kisaran harga, dan estimasi pemasangan kebutuhan rumah, usaha, dan proyek.",
    ],
    primaryCtaLabel: "Cek Stok & Harga Sharp Sekarang",
    secondaryCtaLabel: "Lihat Pilihan Sharp",
    secondaryCtaHref: "#produk-sharp",
    showShowroomLink: false,
    chips: [
      "Mulai 3,5 jutaan",
      "Garansi teknisi 1 bulan",
      "Bantu klaim unit",
      "Pengiriman by konfirmasi",
      "Sharp BEY",
      "Unit + pemasangan",
    ],
  },

  statusBlock: {
    placement: "afterWarranty",
    badge: "AC Sharp Original — Supplier Resmi",
    title: "Sharp yang dijual di Radja AC adalah unit original dari jalur supplier resmi",
    paragraphs: [
      "Sharp bukan brand baru di Indonesia — sudah puluhan tahun hadir untuk rumah tangga lewat kulkas, TV, dan elektronik lainnya. Untuk AC Sharp, Radja AC mengambil unit dari jalur supplier resmi sehingga garansi brand berlaku sesuai ketentuan Sharp. Stok, tipe, dan harga selalu dicek sebelum konfirmasi — bukan dari katalog yang belum tentu update.",
    ],
    badgeLabel: "Supplier Resmi",
    image: "/photos/product-display/sharp-ac-sharp-bey.webp",
    imageAlt: "Unit AC Sharp BEY original di Radja AC",
  },

  warranty: {
    eyebrow: "Garansi & Bantuan Klaim",
    title: "Garansi teknisi jelas, klaim unit dibantu",
    description:
      "Garansi teknisi 1 bulan untuk pekerjaan pemasangan. Kalau ada kendala pada unit AC, Radja AC bisa bantu arahan proses klaim garansi ke brand terkait sesuai ketentuan resmi Sharp. Simpan kartu garansi dan nota pembelian sebagai dokumen klaim.",
    cards: [
      {
        title: "Garansi teknisi 1 bulan",
        description:
          "Garansi pekerjaan pemasangan berlaku 1 bulan. Kalau ada kendala yang berkaitan dengan instalasi dari teknisi, bisa langsung hubungi Radja AC.",
      },
      {
        title: "Garansi unit sesuai ketentuan Sharp",
        description:
          "Garansi produk mengikuti kartu garansi Sharp yang ada di dalam kemasan. Simpan kartu garansi dan nota pembelian sebagai dokumen klaim.",
      },
      {
        title: "Dibantu arahkan klaim ke Sharp",
        description:
          "Kalau ada kendala pada unit AC setelah dipasang, Radja AC bisa bantu arahan proses klaim garansi ke brand terkait sesuai ketentuan resmi Sharp.",
      },
    ],
  },

  price: {
    eyebrow: "Kapasitas PK",
    title: "Tidak cuma 1/2 PK — Sharp tersedia sampai 2 PK sesuai stok",
    description:
      "Angka di bawah ini adalah estimasi awal untuk paket AC + pemasangan standar. Paket standar sudah termasuk unit AC, pipa 2 meter, kabel 5 meter, bracket outdoor 1 set, duct tape, selang pembuangan, dan vacuum AC.",
    footnote:
      "Harga low watt, inverter, dan kapasitas di atas 1/2 PK dikonfirmasi admin sesuai stok terbaru hari ini.",
    tiers: [
      [
        "Sharp Standard ½ PK",
        "Mulai 3 jutaan",
        "Unit + pasang standar. Brand yang sudah dikenal luas di Indonesia untuk rumah, kamar, kost, toko, dan ruang usaha.",
      ],
      [
        "¾ PK sampai 2 PK",
        "Cek via WhatsApp",
        "Admin cek stok dan harga langsung sesuai kapasitas yang dibutuhkan.",
      ],
    ],
  },

  character: {
    eyebrow: "Kenapa Sharp",
    title: "Sharp punya keunggulan nyata yang sering diabaikan saat banding-banding brand",
    description:
      "Sharp bukan sekadar nama familiar. Ada alasan teknis kenapa Sharp masih banyak dipilih untuk rumah, kost, dan usaha kecil — mulai dari seri BEY yang terbukti andal, spare part yang mudah dicari, sampai pilihan inverter J-Tech yang efisien untuk pemakaian rutin.",
    cards: [
      {
        title: "Seri BEY: terbukti andal untuk pemakaian harian",
        description:
          "Sharp BEY adalah seri yang paling banyak terpasang di rumah dan kost Indonesia. Bukan karena murah semata — tapi karena track record-nya panjang, perawatannya tidak ribet, dan teknisi lokal sudah sangat familiar dengan unit ini.",
      },
      {
        title: "Spare part mudah dicari, teknisi lokal familiar",
        description:
          "Salah satu keunggulan Sharp yang jarang disebut: spare part-nya tersebar luas di toko elektronik lokal dan teknisi AC di mana-mana sudah kenal unit Sharp. Ini penting untuk pemakaian jangka panjang — kalau ada masalah, tidak perlu nunggu lama.",
      },
      {
        title: "J-Tech Inverter untuk yang butuh efisiensi lebih",
        description:
          "Sharp punya teknologi J-Tech Inverter yang diklaim lebih hemat listrik untuk pemakaian rutin. Cocok untuk kamar yang AC-nya menyala hampir setiap malam — suhu lebih stabil dan tagihan listrik lebih bisa diprediksi dibanding tipe standard.",
      },
    ],
  },

  products: {
    anchorId: "produk-sharp",
    eyebrow: "Pilihan Sharp",
    title: "Pilihan AC Sharp Original — stok dan tipe dikonfirmasi dulu",
    description:
      "Jangan asal pilih dari nama brand. Cek dulu stok Sharp yang ready, tipe unit (BEY, standard, low watt, atau inverter), kapasitas PK, dan kebutuhan pemasangan — supaya pembelian tidak berakhir di masalah MCB turun atau ruangan tidak dingin.",
    items: [
      {
        title: "Sharp BEY 1/2 PK",
        badge: "Ready check",
        image: PRODUCT_IMAGE,
        fit: "Kamar tidur, kos, kontrakan, ruang santai, dan toko kecil",
        priority: "AC Sharp standard untuk kebutuhan rumah harian",
        description:
          "Sharp BEY 1/2 PK adalah titik awal yang paling sering ditanya. Stok dicek dulu, harga paket unit + pemasangan standar dikonfirmasi sesuai kondisi hari ini.",
        highlights: ["Sharp BEY", "1/2 PK", "Rumah harian"],
        cta: "Cek Stok Sharp BEY",
      },
      {
        title: "Sharp untuk Kamar & Kost",
        badge: "Kamar",
        image: PRODUCT_IMAGE,
        fit: "Kamar tidur, kamar anak, kos, dan ruangan kecil",
        priority: "Cek ukuran ruangan sebelum memilih kapasitas",
        description:
          "Untuk kamar kost atau kamar rumah yang dikonfirmasi, jangan langsung pilih 1/2 PK tanpa cek dulu ukuran ruangan, panas matahari, dan daya listrik. Admin bantu hitung supaya tidak salah PK.",
        highlights: ["Kamar", "Kos", "Cek PK"],
        cta: "Konsultasi Sharp untuk Kamar",
      },
      {
        title: "Sharp untuk Rumah & Toko Kecil",
        badge: "Harian",
        image: PRODUCT_IMAGE,
        fit: "Ruang keluarga, toko kecil, usaha rumahan, dan ruko",
        priority: "Brand familiar untuk pemakaian harian yang tidak eksperimental",
        description:
          "Untuk rumah atau toko kecil yang ingin brand yang sudah dikenal — bukan yang paling murah, tapi juga tidak perlu yang paling premium — Sharp cocok. Stok dan harga dikonfirmasi dulu sebelum deal.",
        highlights: ["Rumah", "Toko kecil", "Familiar"],
        cta: "Cek Sharp untuk Rumah/Toko",
      },
    ],
  },

  checklist: {
    eyebrow: "Sebelum Beli",
    title: "Sebelum deal AC Sharp Original — kirim info ini dulu",
    description:
      "Supaya rekomendasi tidak asal dan MCB tidak gampang turun setelah AC dipasang, admin Radja AC perlu tahu beberapa hal dasar dari Anda sebelum konfirmasi harga dan stok Sharp.",
    items: [
      "Ukuran ruangan kira-kira dan tinggi plafon jika ada",
      "Daya listrik tempat Anda — rumah, kost, toko, atau kantor",
      "Jenis ruangan: kamar, rumah, kos, kontrakan, toko, ruko, atau kantor kecil",
      "Jumlah unit yang dibutuhkan dan kapasitas PK yang diinginkan",
      "Tipe Sharp yang mau dicek: BEY, standard, low watt, atau inverter",
      "Foto posisi indoor dan outdoor jika butuh estimasi pemasangan",
    ],
  },

  pk: {
    eyebrow: "Panduan PK",
    title: "Perkiraan kapasitas PK sebelum konsultasi ke admin",
    description:
      "Tabel ini buat gambaran awal saja. Ukuran final tetap menyesuaikan kondisi nyata ruangan — panas matahari, jumlah pengguna, daya listrik, dan pola pemakaian ikut berpengaruh.",
    guide: [
      ["½ PK", "± 9–12 m²", "Kamar kecil, kost, atau ruang kerja pribadi"],
      ["¾ PK", "± 12–15 m²", "Kamar sedang dan ruang santai"],
      ["1 PK", "± 15–20 m²", "Kamar besar atau ruang keluarga kecil"],
      ["1.5 PK", "± 20–30 m²", "Ruang keluarga, kantor, atau toko"],
      ["2 PK", "± 30–40 m²", "Ruangan besar dan kebutuhan komersial"],
    ],
    cta: {
      title: "Sudah tahu ukuran ruangannya?",
      description:
        "Kirim ukuran dan daya listrik — admin bantu cek PK Sharp yang sesuai dan stok yang ready hari ini. Tidak harus langsung deal.",
      buttonLabel: "Konsultasi PK Sharp",
    },
  },

  internalLinks: {
    eyebrow: "Baca Juga",
    title: "Masih banding-banding brand sebelum pilih Sharp?",
    description:
      "Kalau belum yakin Sharp adalah pilihan yang tepat, halaman berikut bisa bantu Anda bandingkan dengan brand lain atau lihat pilihan AC sesuai jenis ruangan dan budget.",
    links: [
      {
        title: "Konsultasi AC Sharp",
        description: "Sebelum OTW, cek dulu stok, harga, brand yang ready, dan kebutuhan pemasangan via WhatsApp.",
        href: routes.kontak,
      },
      {
        title: "AC Split Rumah",
        description: "Lihat pilihan AC untuk kamar, kos, kontrakan, dan rumah tinggal yang dikonfirmasi.",
        href: routes.katalogAcSplitRumah,
      },
      {
        title: "Jual AC Original",
        description: "Halaman pusat pembelian AC — cek brand, stok tersedia, kisaran harga, dan rekomendasi PK.",
        href: routes.jualAcPurwokerto,
      },
      {
        title: "Katalog AC Radja AC",
        description: "Bandingkan brand dan kategori AC sesuai kebutuhan ruangan dan budget Anda.",
        href: routes.katalog,
      },
    ],
  },

  closing: {
    title: "Mau beli AC Sharp original? Mulai dari cek stok dulu.",
    description:
      "Chat tidak harus langsung deal. Kirim ukuran ruangan, daya listrik, lokasi, dan budget awal Anda. Admin Radja AC bantu cek stok Sharp yang ready hari ini, estimasi harga, dan kebutuhan pemasangan — termasuk kalau Anda masih bingung antara Sharp, Panasonic, Midea, Gree, atau brand lainnya.",
    buttonLabel: "Cek Stok & Harga Sharp Sekarang",
  },

  faq: {
    eyebrow: "FAQ",
    title: "Pertanyaan yang sering masuk seputar AC Sharp Original",
  },
};
