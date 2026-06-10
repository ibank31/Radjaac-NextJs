import { routes } from "@/content/routes";

// Sansui premium content (source of truth: radjaac-premium SansuiPurwokerto.jsx).
// Dealer-template variant: status block after Garansi, no Panduan PK CTA.
// Kapasitas & Harga uses a two-column layout (capacity options + price tiers).

export const sansuiPremiumContent = {
  hero: {
    image: "/photos/showroom/display-sansui-new.webp",
    imageAlt: "Showcase AC Sansui original di showroom Radja AC",
    badge: "AC SANSUI ORIGINAL — Radja AC",
    breadcrumbLabel: "Sansui",
    titleLead: "AC Sansui Original",
    titleHighlight: "Yang Penting Dingin, PK Tetap Harus Pas",
    paragraphs: [
      "Sansui cocok kalau budget memang terbatas — untuk kamar, kost, kontrakan, rumah sederhana, atau toko kecil. Tapi walau harga lebih ringan, ukuran PK tetap harus dihitung sesuai ruangan. Kalau sedang cari AC Sansui Original, admin Radja AC bisa bantu cek stok yang ready, kisaran harga, dan estimasi pemasangan hari ini.",
    ],
    primaryCtaLabel: "Cek Stok & Harga Sansui Sekarang",
    secondaryCtaLabel: "Lihat Pilihan Sansui",
    secondaryCtaHref: "#produk-sansui",
    showShowroomLink: true,
    chips: [
      "Mulai 3,5 jutaan",
      "Garansi teknisi 1 bulan",
      "Bantu arahan klaim unit",
      "Pengiriman by konfirmasi",
      "Cocok kamar & kost",
      "PK tetap dihitung",
    ],
  },

  statusBlock: {
    placement: "afterWarranty",
    badge: "Sertifikat Resmi Sansui",
    title: "Sansui bukan AC murahan — ini AC fungsional dengan harga yang sesuai untuk budget terbatas",
    paragraphs: [
      "Yang bikin AC tidak memuaskan bukan cuma mereknya — sering kali PK-nya yang salah atau pemasangannya yang asal. Di Radja AC, walau pilihan Anda Sansui dengan budget terbatas, kami tetap bantu hitung PK yang sesuai ruangan, jelaskan biaya pasang sebelum deal, dan pastikan hasilnya memang dingin sesuai harapan.",
    ],
    badgeLabel: "Authorized Dealer",
    image: "/photos/brand-proof/sansui-sertificate-sansui.webp",
    imageAlt: "Sertifikat resmi dealer Sansui untuk Radja AC",
  },

  warranty: {
    eyebrow: "Garansi & Klaim Unit",
    title: "Beli Sansui di sini, garansi teknisi dan urusan klaim unit sudah jelas",
    description:
      "Garansi teknisi 1 bulan berlaku untuk kendala yang berkaitan dengan pekerjaan pemasangan. Garansi produk mengikuti kartu garansi Sansui di dalam kemasan. Kalau ada kendala pada unit setelah dipasang, Radja AC bisa bantu arahan proses klaim garansi ke Sansui sesuai ketentuan resmi — bukan diganti toko, tapi dibantu prosesnya.",
    cards: [
      {
        title: "Garansi teknisi 1 bulan",
        description:
          "Garansi berlaku untuk kendala yang berkaitan langsung dengan pekerjaan pemasangan atau instalasi dari teknisi Radja AC.",
      },
      {
        title: "Garansi unit mengikuti ketentuan Sansui",
        description:
          "Garansi produk sesuai kartu garansi Sansui yang ada di dalam kemasan unit. Simpan kartu garansi dan struk pembelian.",
      },
      {
        title: "Bantu arahkan klaim ke brand terkait",
        description:
          "Kalau ada kendala pada unit AC, Radja AC bisa bantu arahan proses klaim garansi ke Sansui sesuai ketentuan resmi — selama dokumen pembelian dan kartu garansi tersedia.",
      },
    ],
  },

  price: {
    capacity: {
      eyebrow: "Kapasitas PK",
      title: "Walau budget mepet, jangan asal ambil 1/2 PK — ruangan tetap menentukan",
      description:
        "Radja AC melayani kebutuhan AC Sansui original dari 1/2 PK sampai 2 PK sesuai stok yang tersedia. Untuk kapasitas di atas 1/2 PK, admin bantu cek stok dan harga terbaru via WhatsApp. Ruangan besar tapi PK kecil = AC ngos-ngosan dan listrik boros.",
      options: [
        "1/2 PK untuk kamar kecil, kost, kontrakan, atau ruang kerja",
        "3/4 PK dan 1 PK untuk kamar sedang, ruang keluarga kecil, atau toko kecil",
        "1.5 PK sampai 2 PK untuk ruang lebih luas, kantor, toko, dan kebutuhan usaha",
      ],
    },
    eyebrow: "Estimasi Harga",
    title: "Gambaran harga AC Sansui Original sebelum Anda chat admin",
    description:
      "Angka di bawah ini adalah estimasi awal untuk paket AC + pemasangan standar. Paket standar sudah termasuk unit AC, pipa 2 meter, kabel 5 meter, bracket outdoor 1 set, duct tape, selang pembuangan, dan vacuum AC.",
    footnote:
      "Harga Deluxe dan kapasitas 3/4 PK ke atas bervariasi — admin bantu cek stok dan angka terbaru via WhatsApp.",
    tiers: [
      [
        "Sansui Standard ½ PK",
        "Mulai 3 jutaan",
        "Unit + pasang standar. AC fungsional untuk kebutuhan harian dengan budget yang tetap terkontrol.",
      ],
      [
        "Sansui Inverter ½ PK",
        "Mulai 4 jutaan",
        "Unit + pasang standar. Dapat inverter di 4 jutaan sudah termasuk pasang — cocok untuk pemakaian rutin dengan budget yang tetap terkontrol.",
      ],
      [
        "¾ PK sampai 2 PK",
        "Cek via WhatsApp",
        "Admin cek stok dan harga langsung sesuai kapasitas atau jumlah unit yang dibutuhkan.",
      ],
    ],
  },

  character: {
    eyebrow: "Kenapa Sansui?",
    title: "Sansui cocok untuk yang butuh AC dingin dulu, bukan brand dulu",
    description:
      "Untuk pembeli kebutuhan rumah, usaha, dan proyek yang prioritasnya memang budget, Sansui cocok — asal PK-nya tetap dihitung benar dan pemasangannya dikerjakan dengan benar. Admin siap bantu dari awal sampai deal.",
    cards: [
      {
        title: "Budget mepet tapi tetap harus dingin — Sansui solusi AC fungsional",
        description:
          "Sansui cocok untuk yang butuh AC fungsional tanpa harga yang memberatkan. Yang penting dingin, stabil, dan PK-nya tetap sesuai ruangan — bukan asal ambil yang paling murah.",
      },
      {
        title: "Walau budget hemat, PK tetap tidak boleh asal kecil",
        description:
          "Banyak yang salah kaprah: mau hemat lalu ambil PK paling kecil. AC malah ngos-ngosan, tidak dingin, dan listrik tetap boros. Admin Radja AC bantu hitung PK yang tepat dulu sebelum deal.",
      },
      {
        title: "Budget lebih longgar? Admin bisa bantu bandingkan",
        description:
          "Kalau ternyata budget ada ruang naik sedikit, admin bisa bantu bandingkan Sansui dengan Midea, Hisense, Gree, atau Daikin — sesuai ruangan, daya listrik, dan prioritas Anda.",
      },
    ],
  },

  products: {
    anchorId: "produk-sansui",
    eyebrow: "Rekomendasi Produk",
    title: "Pilihan AC Sansui Original: Deluxe, Standard, atau Basic?",
    description:
      "Masing-masing tipe Sansui punya kecocokannya sendiri tergantung kebutuhan dan budget. Masih bingung mau yang mana? Ceritakan kondisi ruangan dan budget ke admin — kami bantu pilihkan yang paling sesuai dengan ruangan dan budget Anda.",
    items: [
      {
        title: "Sansui Deluxe",
        badge: "Deluxe",
        image: "/photos/product-display/sansui-ac-sansui-deluxe.webp",
        fit: "Kamar tidur, ruang keluarga kecil, rumah sederhana",
        priority: "Tampilan lebih rapi, harga tetap terkontrol",
        description:
          "Buat yang mau AC Sansui tapi penampilan unit juga dipertimbangkan — Sansui Deluxe tampil lebih rapi untuk kamar atau ruang keluarga tanpa harus lompat ke kelas premium. Stok dicek dulu sebelum konfirmasi.",
        highlights: ["Deluxe", "Tampil rapi", "Harian"],
        cta: "Cek Stok Sansui",
      },
      {
        title: "Sansui Standard",
        badge: "Standard",
        image: "/photos/product-display/sansui-ac-sansui-standar.webp",
        fit: "Kamar tidur, kost, kontrakan, ruang santai, toko kecil",
        priority: "Fungsional, cukup untuk pemakaian harian rumahan",
        description:
          "Sansui Standard pilihan yang paling banyak dicari untuk kebutuhan sehari-hari. Tidak lebay tapi juga tidak terasa ala kadarnya — fungsional untuk kamar, kost, kontrakan, atau toko kecil dengan harga yang tetap rasional.",
        highlights: ["Standard", "Fungsional", "Harian"],
        cta: "Cek Stok Sansui",
      },
      {
        title: "Sansui Standard Basic",
        badge: "Basic",
        image: "/photos/product-display/sansui-ac-sansui-standar-basic.webp",
        fit: "Kamar kecil, ruangan sederhana, kebutuhan dasar pendinginan",
        priority: "Fungsi utama AC dengan budget paling efisien",
        description:
          "Kalau prioritasnya memang hanya dingin dan budget benar-benar terbatas, Sansui Standard Basic bisa jadi pilihan. Yang penting PK-nya tetap dihitung sesuai ruangan — bukan asal ambil yang paling kecil.",
        highlights: ["Basic", "Ekonomis", "Simple"],
        cta: "Cek Stok Sansui",
      },
    ],
  },

  checklist: {
    eyebrow: "Sebelum Beli",
    title: "Walau Sansui pilihan budget, tetap kirim info ini sebelum deal",
    description:
      "AC murah tapi PK salah tidak ada bedanya dengan buang uang dua kali. Kirim data di bawah ini ke admin Radja AC, kami bantu rekomendasikan tipe dan kapasitas Sansui yang sesuai untuk kondisi ruangan Anda.",
    items: [
      "Ukuran ruangan kira-kira (panjang × lebar) dan tinggi plafon jika ada",
      "Daya listrik rumah, kost, toko, atau tempat usaha",
      "Jenis ruangan: kamar, kost, kontrakan, toko, atau kantor kecil",
      "Jumlah unit yang dibutuhkan sekaligus atau bertahap",
      "Pilihan tipe: Deluxe, Standard, atau Standard Basic",
      "Foto posisi indoor-outdoor jika butuh estimasi pemasangan",
    ],
  },

  pk: {
    eyebrow: "Panduan PK",
    title: "Estimasi kapasitas AC Sansui sesuai ukuran ruangan",
    description:
      "Tabel ini hanya patokan awal. Jumlah jendela, arah ruangan menghadap (barat lebih panas), dan jumlah penghuni juga berpengaruh. Admin bisa bantu cek lebih tepat sesuai kondisi nyata ruangan Anda sebelum deal.",
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
    title: "Panduan sebelum beli AC Sansui Original",
    description:
      "Halaman berikut membantu Anda membandingkan kebutuhan AC Sansui dengan pilihan lain atau kategori yang relevan sebelum memutuskan.",
    links: [
      {
        title: "Konsultasi AC Sansui",
        description: "Sebelum OTW ke showroom, cek stok, harga, brand yang ready, dan kebutuhan pemasangan di Radja AC.",
        href: routes.kontak,
      },
      {
        title: "Jual AC Original",
        description: "Halaman pusat untuk cek semua brand, stok, harga, dan rekomendasi PK sesuai kebutuhan dan budget.",
        href: routes.jualAcPurwokerto,
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
    ],
  },

  closing: {
    title: "Mau beli AC Sansui original? Cek stok dulu, PK dihitung dulu.",
    description:
      "Chat tidak harus langsung transfer. Kirim ukuran ruangan, daya listrik, lokasi, dan budget — admin Radja AC bantu cek pilihan Sansui yang ready hari ini, hitung PK yang tepat, dan konfirmasi estimasi harga plus pasang sebelum Anda memutuskan.",
    buttonLabel: "Cek Stok & Harga Sansui Sekarang",
  },

  faq: {
    eyebrow: "FAQ",
    title: "Yang sering ditanyakan soal AC Sansui Original",
  },
};
