// Panasonic premium content (source of truth: radjaac-premium PanasonicPurwokerto.jsx).
// Distinct structure: text-only hero (no image), benefit paragraphs, recommendation
// cards without images, Use Case section, FAQ before the closing CTA, no internal
// links / no PK table. "AC original" status — no certificate section.

export const panasonicPremiumContent = {
  hero: {
    badge: "AC PANASONIC ORIGINAL — RADJA AC",
    breadcrumbLabel: "Panasonic",
    titleLead: "AC Panasonic",
    titleHighlight: "Brand Familiar, Stok Dicek Dulu",
    paragraph:
      "Kalau Anda sedang cari AC Panasonic karena ingin brand yang familiar dan terasa aman untuk jangka panjang, admin RADJA AC bisa bantu cek stok yang ready hari ini, pilihan tipe, kisaran harga, pengiriman, dan opsi pemasangan by konfirmasi.",
    primaryCtaLabel: "Cek Stok & Harga Panasonic Sekarang",
    secondaryCtaLabel: "Lihat Pilihan Panasonic",
    secondaryCtaHref: "#rekomendasi",
    chips: [
      "Mulai 4 jutaan",
      "Garansi teknisi 1 bulan",
      "Bantu klaim unit",
      "Purwokerto–Banyumas",
      "Unit + pemasangan",
    ],
  },

  warranty: {
    eyebrow: "Garansi & Bantuan Klaim",
    title: "Garansi teknisi jelas, klaim unit dibantu",
    description:
      "Garansi teknisi 1 bulan untuk pekerjaan pemasangan. Kalau ada kendala pada unit AC, RADJA AC bisa bantu arahan proses klaim garansi ke brand terkait sesuai ketentuan resmi Panasonic. Simpan kartu garansi dan nota pembelian sebagai dokumen klaim.",
    cards: [
      {
        title: "Garansi teknisi 1 bulan",
        description:
          "Garansi pekerjaan pemasangan berlaku 1 bulan. Kalau ada kendala yang berkaitan dengan instalasi dari teknisi, bisa langsung hubungi RADJA AC.",
      },
      {
        title: "Garansi unit sesuai ketentuan Panasonic",
        description:
          "Garansi produk mengikuti kartu garansi Panasonic yang ada di dalam kemasan. Simpan kartu garansi dan nota pembelian sebagai dokumen klaim.",
      },
      {
        title: "Dibantu arahkan klaim ke Panasonic",
        description:
          "Kalau ada kendala pada unit AC setelah dipasang, RADJA AC bisa bantu arahan proses klaim garansi ke brand terkait sesuai ketentuan resmi Panasonic.",
      },
    ],
  },

  price: {
    capacity: {
      eyebrow: "Kapasitas PK",
      title: "Tidak cuma 1/2 PK — Panasonic tersedia sampai 2 PK sesuai stok",
      description:
        "Jangan langsung pilih kapasitas hanya dari nama ruangan. Untuk Panasonic di atas 1/2 PK, admin RADJA AC bantu cek stok dan rekomendasikan kapasitas yang pas via WhatsApp — termasuk 3/4 PK, 1 PK, 1.5 PK, dan 2 PK sesuai ketersediaan.",
      options: [
        "1/2 PK untuk kamar kecil, kost, kontrakan, atau ruang kerja harian",
        "3/4 PK dan 1 PK untuk kamar sedang, ruang keluarga kecil, atau kantor kecil",
        "1.5 PK sampai 2 PK untuk ruang lebih besar, kantor, toko, dan kebutuhan usaha",
      ],
    },
    eyebrow: "Estimasi Harga",
    title: "Harga AC Panasonic — patokan awal sebelum Anda chat",
    description:
      "Angka di bawah ini adalah estimasi awal untuk paket AC + pemasangan standar. Paket standar sudah termasuk unit AC, pipa 2 meter, kabel 5 meter, bracket outdoor 1 set, duct tape, selang pembuangan, dan vacuum AC.",
    footnote:
      "Harga kapasitas di atas 1/2 PK dan tipe inverter dikonfirmasi admin sesuai stok terbaru hari ini.",
    tiers: [
      [
        "Panasonic Standard ½ PK",
        "Mulai 4 jutaan",
        "Unit + pasang standar. Panasonic dikenal sebagai brand lama dengan reputasi kuat — cocok untuk pembeli yang mencari AC dari nama yang sudah dipercaya banyak keluarga.",
      ],
      [
        "¾ PK sampai 2 PK",
        "Cek via WhatsApp",
        "Admin cek stok dan harga langsung sesuai kapasitas yang dibutuhkan.",
      ],
    ],
  },

  character: {
    title: "Panasonic bukan yang termurah, bukan yang paling premium — tapi sudah teruji kenal nama",
    description:
      "Banyak pembeli Purwokerto pilih Panasonic bukan karena spec paling canggih, tapi karena sudah percaya nama brandnya untuk jangka panjang. Tapi pilihan yang aman tetap harus diikuti dengan cek PK yang tepat — bukan asal pilih yang paling murah.",
    items: [
      "Panasonic sudah dikenal lama di Indonesia — bukan brand baru yang perlu dibuktikan dulu. Untuk pembeli yang ingin AC rumah dengan kesan stabil dan awet, Panasonic jadi pilihan yang terasa masuk akal.",
      "Cocok untuk kamar, ruang keluarga, kantor kecil, kost, dan kontrakan — selama kapasitas PK, daya listrik, dan kondisi ruangan sudah dicek dulu supaya tidak salah pilih.",
      "Stok AC Panasonic bisa berubah mengikuti supplier. Sebelum deal, admin RADJA AC selalu cek dulu tipe yang ready hari ini — bukan jawab dari katalog lama.",
      "Bingung antara Panasonic, Sharp, Midea, Gree, atau Daikin? Admin RADJA AC bisa bantu bandingkan sesuai budget, daya listrik, ukuran ruangan, dan pola pemakaian Anda.",
    ],
  },

  recommendations: {
    anchorId: "rekomendasi",
    title: "Pilihan AC Panasonic — stok dan tipe dikonfirmasi dulu",
    description:
      "Jangan asal pilih dari nama brand. Cek dulu stok Panasonic yang ready, tipe unit, kapasitas PK, dan kebutuhan pemasangan — supaya tidak berakhir di masalah MCB turun atau ruangan tidak dingin.",
    ctaLabel: "Cek Stok & Harga",
    cards: [
      {
        title: "Panasonic untuk Kamar",
        badge: "Kamar",
        description:
          "Untuk kamar tidur, kamar anak, atau kost di Purwokerto-Banyumas — Panasonic bisa jadi pilihan yang aman. Tapi cek dulu ukuran ruangan dan daya listrik sebelum pilih PK, supaya AC tidak kerja terlalu keras dan MCB tidak gampang turun.",
      },
      {
        title: "Panasonic untuk Rumah Harian",
        badge: "Rumah",
        description:
          "Untuk ruang keluarga, rumah tinggal, atau penggunaan harian yang butuh brand yang sudah familiar — Panasonic terasa nyaman untuk jangka panjang. Stok dan harga dikonfirmasi admin sebelum Anda putuskan.",
      },
      {
        title: "Cek Stok Panasonic Dulu",
        badge: "Cek stok",
        description:
          "Stok Panasonic mengikuti ketersediaan supplier dan bisa berubah. Sebelum deal, chat dulu untuk cek tipe yang ready hari ini, kisaran harga, rekomendasi PK, dan estimasi pemasangan area Purwokerto-Banyumas.",
      },
    ],
  },

  checklist: {
    eyebrow: "Sebelum Beli",
    title: "Sebelum deal AC Panasonic — kirim info ini dulu",
    description:
      "Supaya rekomendasi tidak asal dan MCB tidak gampang turun setelah AC dipasang, admin RADJA AC perlu tahu beberapa hal dasar dari Anda sebelum konfirmasi harga dan stok Panasonic.",
    items: [
      "Ukuran ruangan kira-kira dan tinggi plafon jika ada",
      "Daya listrik tempat Anda — rumah, kost, kantor, atau usaha",
      "Jenis ruangan: kamar, rumah, kantor kecil, toko, ruko, atau kontrakan",
      "Jumlah unit yang dibutuhkan dan kapasitas PK yang diinginkan",
      "Tipe Panasonic yang mau dicek — standard, low watt, atau inverter sesuai stok",
      "Foto posisi indoor dan outdoor jika butuh estimasi pemasangan",
    ],
  },

  useCase: {
    title: "Panasonic untuk kamar tidur, rumah, sampai kantor kecil",
    items: [
      {
        title: "Kamar Tidur & Kost",
        description:
          "Kamar 3x3 atau 3x4 di area Purwokerto-Banyumas biasanya cukup dengan 1/2 PK — tapi tetap perlu dicek dulu kondisi ruangannya. Lantai atas, kena matahari langsung, atau dinding berbatasan dengan ruangan panas bisa butuh kapasitas lebih. Admin bantu hitung supaya tidak asal tunjuk PK.",
      },
      {
        title: "Rumah & Kantor Kecil",
        description:
          "Untuk ruang keluarga, kantor kecil, atau usaha rumahan di Purwokerto-Banyumas yang ingin brand yang sudah lama dikenal — Panasonic masuk akal untuk jangka panjang. Yang penting stok dicek dulu, harga pasang dikonfirmasi, dan PK tidak asal rekomendasikan.",
      },
    ],
  },

  faq: {
    eyebrow: "FAQ",
    title: "Pertanyaan yang sering masuk seputar AC Panasonic",
  },

  closing: {
    title: "Mau beli AC Panasonic original? Mulai dari cek stok dulu.",
    description:
      "Chat tidak harus langsung deal. Kirim ukuran ruangan, daya listrik, lokasi, dan budget awal Anda. Admin RADJA AC bantu cek stok Panasonic yang ready hari ini, estimasi harga, dan kebutuhan pemasangan — termasuk kalau Anda masih banding-banding antara Panasonic, Sharp, Midea, Gree, atau brand lainnya.",
    buttonLabel: "Cek Stok & Harga Panasonic Sekarang",
  },
};
