import { routes } from "@/content/routes";

// Gree premium content (source of truth: radjaac-premium GreePurwokerto.jsx).
// Distinct: Proshop status block placed before Garansi, plus a Panduan PK CTA.

export const greePremiumContent = {
  hero: {
    image: "/photos/showroom/display-gree-new.webp",
    imageAlt: "Showcase AC Gree original di showroom RADJA AC",
    badge: "PROSHOP GREE RESMI",
    breadcrumbLabel: "Gree",
    titleLead: "Proshop Gree Resmi",
    titleHighlight: "Stok Lebih Lengkap, Pilihan Lebih Banyak",
    paragraphs: [
      "RADJA AC tercantum di website resmi Gree Indonesia sebagai Proshop Gree — bukan sekadar klaim. Itu artinya stok Gree kami lebih lengkap dari toko biasa: standard, low watt, inverter, berbagai kapasitas PK. Mau cari AC Gree untuk kamar, rumah, kost, toko, ruko, atau kantor? Cek stok dan harga dulu lewat WhatsApp sebelum OTW.",
      "Garansi teknisi 1 bulan untuk pekerjaan pemasangan. Garansi unit mengikuti ketentuan resmi Gree. Kalau ada kendala unit setelah pasang, toko bantu arahan awal proses klaim ke Gree sesuai ketentuan yang berlaku.",
    ],
    primaryCtaLabel: "Cek Stok & Harga Gree Sekarang",
    secondaryCtaLabel: "Lihat Pilihan Tipe",
    secondaryCtaHref: "#produk-gree",
    showShowroomLink: true,
    chips: [
      "Tercantum di website Gree",
      "Proshop Gree Resmi",
      "Garansi teknisi 1 bulan",
      "Bantu proses klaim unit",
      "Showroom fisik tersedia",
      "Unit + pemasangan",
    ],
  },

  statusBlock: {
    placement: "beforeWarranty",
    badge: "Status Resmi Proshop Gree",
    title: "Nama RADJA AC ada di website resmi Gree Indonesia",
    paragraphs: [
      "Dealer Gree biasa dan Proshop Gree itu beda. Proshop punya stok lebih lengkap, dan statusnya memang tercantum di listing resmi Gree. Ini yang membuat kami lebih yakin merekomendasikan Gree untuk pembeli rumah, usaha, dan proyek — bukan sekadar jual putus tanpa kejelasan asal unit.",
      "Kalau sedang cari AC Gree yang stok-nya bisa dipercaya, cek dulu lewat WhatsApp sebelum memutuskan. Admin konfirmasi unit yang benar-benar ready hari ini — bukan dari katalog online yang belum tentu update.",
    ],
    image: "/photos/showroom/showroom-gree-radja-ac-purwokerto-01.webp",
    imageAlt: "Showroom Proshop Gree RADJA AC",
    infoCards: ["Proshop Gree Resmi", "Pamijen, Sokaraja, dekat RS Margono"],
  },

  warranty: {
    eyebrow: "Garansi & Bantuan Klaim",
    title: "Beli Gree di sini, tidak ditinggal begitu AC terpasang",
    description:
      "Banyak yang khawatir — beli AC, teknisi pasang, terus kalau ada masalah tidak ada yang bisa dimintai bantuan. Di RADJA AC, garansi teknisi 1 bulan berlaku untuk kendala yang berkaitan dengan pekerjaan pemasangan. Garansi unit Gree mengikuti ketentuan resmi dan kartu garansi produk. Kalau unit bermasalah, toko bantu arahan awal proses klaim ke Gree sesuai syarat yang berlaku.",
    cards: [
      {
        title: "Garansi teknisi 1 bulan",
        description:
          "Kalau ada kendala setelah pasang yang berkaitan dengan pekerjaan instalasi teknisi kami — dilaporkan dalam 1 bulan, kami tanggung.",
      },
      {
        title: "Garansi unit mengikuti Gree",
        description:
          "Garansi unit bukan dari toko — tapi dari Gree langsung sesuai ketentuan resmi dan kartu garansi produk yang disertakan saat pembelian.",
      },
      {
        title: "Ada masalah? Toko bantu arahkan",
        description:
          "Kalau unit bermasalah setelah pasang, RADJA AC bantu arahan awal proses klaim ke Gree — selama dokumen, kartu garansi, dan nomor seri unit tersedia.",
      },
    ],
  },

  price: {
    eyebrow: "Kapasitas PK",
    title: "Bukan cuma ½ PK — stok Gree bisa sampai 2 PK",
    description:
      "Angka di bawah ini adalah estimasi awal untuk paket AC + pemasangan standar. Paket standar sudah termasuk unit AC, pipa 2 meter, kabel 5 meter, bracket outdoor 1 set, duct tape, selang pembuangan, dan vacuum AC.",
    footnote:
      "Estimasi bukan harga final. Low watt, inverter, ¾ PK, 1 PK, 1.5 PK, dan 2 PK — cek stok dan harga terbaru via WhatsApp.",
    tiers: [
      [
        "Gree Standard / Low Watt ½ PK",
        "Mulai 4 jutaan",
        "Sudah termasuk unit + pemasangan standar. Harga final dikonfirmasi sesuai stok dan kondisi lokasi hari ini.",
      ],
      [
        "Gree Inverter ½ PK",
        "Mulai 5 jutaan",
        "Unit + pasang standar. Lebih worth it untuk AC yang nyala panjang setiap hari — suhu stabil, listrik lebih efisien.",
      ],
      [
        "¾ PK sampai 2 PK",
        "Cek via WhatsApp",
        "Admin cek stok dan harga sesuai kapasitas yang dibutuhkan.",
      ],
    ],
  },

  character: {
    eyebrow: "Kenapa Banyak Pilih Gree",
    title: "Gree bukan yang termurah — tapi harganya masuk, dan kualitasnya terbukti",
    description:
      "Gree salah satu produsen AC terbesar di dunia. Banyak pembeli memilih Gree karena harga kompetitif, pilihan tipe lengkap, dan garansi resmi yang jelas. Cocok untuk pembeli yang mau AC bagus tapi tidak mau overpay — dan tidak mau ambil risiko beli brand yang spare part-nya susah dicari.",
    cards: [
      {
        title: "Harga kompetitif, bukan berarti murahan",
        description:
          "Gree bukan brand kelas bawah. Mereka salah satu produsen AC terbesar di dunia — dengan pilihan standard, low watt, dan inverter yang harganya masih masuk akal untuk banyak kebutuhan. Itulah kenapa Gree banyak dicari.",
      },
      {
        title: "Pilihan tipe lebih lengkap dari brand lain",
        description:
          "Standard, low watt, inverter — stok Gree di RADJA AC lebih bervariasi. Mau cari AC Gree yang pas untuk rumah, kost, toko, kantor kecil, atau proyek? Admin bantu cek yang paling masuk akal.",
      },
      {
        title: "Cocok untuk rumah, toko, sampai ruko",
        description:
          "Dari kamar tidur 3x3 sampai toko yang sering buka-tutup — Gree punya pilihan yang bisa disesuaikan. PK dikonsultasikan dulu, bukan asal tawarin yang paling mahal.",
      },
    ],
  },

  products: {
    anchorId: "produk-gree",
    eyebrow: "Pilihan Produk",
    title: "Standard, low watt, atau inverter — mana yang lebih pas?",
    description:
      "Stok AC Gree kami lebih lengkap dari toko biasa. Tapi pilihan tipe tetap perlu disesuaikan dengan kondisi ruangan, daya listrik, dan pola pemakaian — bukan asal tunjuk yang paling mahal. Kirim info ruangan dulu, admin bantu arahkan.",
    items: [
      {
        title: "Gree Standard",
        badge: "Pilihan harian",
        image: "/photos/product-display/gree-gree-standar.webp",
        fit: "Kamar tidur, ruang santai, toko kecil",
        priority: "Pendinginan fungsional, harga awal lebih terjangkau",
        description:
          "Tidak semua situasi butuh inverter. Kalau AC tidak nyala lebih dari 6 jam sehari dan listrik cukup, Gree standard bisa jadi pilihan yang lebih efisien dari sisi budget awal. Tetap dingin, tidak ribet, perawatan mudah.",
        highlights: ["Harian", "Budget efisien", "Perawatan mudah"],
        cta: "Cek Stok Gree Standard",
      },
      {
        title: "Gree Low Watt",
        badge: "Daya terbatas",
        image: "/photos/product-display/gree-gree-low-wat.webp",
        fit: "Rumah 900–1300 VA, kost, kontrakan",
        priority: "MCB tidak gampang turun, tetap dingin",
        description:
          "Kalau di rumah sudah ada kulkas, mesin cuci, dan beberapa lampu — listrik 900VA atau 1300VA bisa mepet kalau pakai AC standar. Gree low watt bantu supaya MCB tidak sering turun, tagihan lebih terkontrol.",
        highlights: ["Low watt", "Aman MCB", "Daya ringan"],
        cta: "Cek Stok Gree Low Watt",
      },
      {
        title: "Gree Inverter",
        badge: "Pemakaian rutin",
        image: "/photos/product-display/gree-gree-inverter.webp",
        fit: "Kamar utama, ruang keluarga, kantor kecil",
        priority: "Suhu stabil, konsumsi listrik lebih terkontrol jangka panjang",
        description:
          "AC Gree inverter paling banyak ditanyakan untuk kamar utama atau ruang yang dipakai hampir setiap malam. Suhu tidak naik-turun, listrik lebih efisien dibanding non-inverter untuk pemakaian panjang.",
        highlights: ["Suhu stabil", "Efisien harian", "Jangka panjang"],
        cta: "Cek Stok Gree Inverter",
      },
    ],
  },

  checklist: {
    eyebrow: "Sebelum Beli",
    title: "Kirim info ini — biar stok dan PK yang direkomendasikan lebih akurat",
    description:
      "Banyak yang langsung tanya harga AC Gree tanpa info ruangan — dan akhirnya salah PK atau kaget dengan biaya tambahan. Kirim data dulu, admin bantu cek dari sana. Tidak harus lengkap, tapi makin detail makin mudah.",
    items: [
      "Ukuran ruangan dan tinggi plafon kalau ada",
      "Daya listrik rumah atau tempat usaha",
      "Jenis ruangan: kamar, toko, ruko, kantor, atau usaha",
      "Jumlah unit dan kapasitas PK yang dibutuhkan",
      "Mau standard, low watt, atau inverter",
      "Foto titik indoor-outdoor kalau butuh pemasangan",
    ],
  },

  pk: {
    eyebrow: "Panduan PK",
    title: "Kira-kira butuh berapa PK untuk ruangan Anda?",
    description:
      "Tabel ini gambaran awal sebelum konsultasi. Angka final tetap disesuaikan dengan kondisi ruangan — posisi jendela, paparan sinar matahari, jumlah orang, dan titik pemasangan ikut mempengaruhi.",
    guide: [
      ["½ PK", "± 9–12 m²", "Kamar kecil atau ruang kerja pribadi"],
      ["¾ PK", "± 12–15 m²", "Kamar sedang dan ruang santai"],
      ["1 PK", "± 15–20 m²", "Kamar besar atau ruang keluarga kecil"],
      ["1.5 PK", "± 20–30 m²", "Ruang keluarga, kantor, atau toko"],
      ["2 PK", "± 30–40 m²", "Ruangan besar dan kebutuhan komersial"],
    ],
    cta: {
      title: "Sudah tahu ukuran ruangannya?",
      description:
        "Kirim ukuran dan daya listrik — admin bantu cek PK Gree yang masuk akal sebelum Anda beli. Tidak harus langsung deal.",
      buttonLabel: "Konsultasi PK Gree",
    },
  },

  internalLinks: {
    eyebrow: "Baca Juga",
    title: "Panduan sebelum beli AC Gree",
    description:
      "Halaman dan artikel berikut bantu Anda paham tipe AC, kapasitas PK, dan kebutuhan ruangan sebelum chat ke admin.",
    links: [
      {
        title: "Konsultasi AC Gree",
        description: "Sebelum OTW, cek stok, harga, brand yang ready, dan kebutuhan pemasangan di RADJA AC.",
        href: routes.kontak,
      },
      {
        title: "Jual AC Original",
        description: "Halaman pusat pembelian AC — cek brand, stok, harga, dan rekomendasi PK untuk semua kebutuhan.",
        href: routes.jualAcPurwokerto,
      },
      {
        title: "AC Inverter",
        description: "Kapan inverter lebih masuk akal? Bandingkan pilihan dari berbagai brand untuk pemakaian rutin.",
        href: routes.katalogAcInverter,
      },
      {
        title: "AC Low Watt",
        description: "Pilihan AC untuk rumah dengan daya 900–1300 VA supaya MCB tidak sering turun.",
        href: routes.katalogAcLowWatt,
      },
    ],
  },

  closing: {
    title: "Mau beli AC Gree original? Tanya dulu tidak apa-apa.",
    description:
      "Kirim ukuran ruangan, daya listrik, lokasi, dan budget. Admin bantu cek stok Gree yang ready hari ini, estimasi harga plus pasang, dan jadwal teknisi. Tidak perlu langsung deal — cek dulu, yakin baru bayar.",
    buttonLabel: "Cek Stok & Harga Gree Sekarang",
  },

  faq: {
    eyebrow: "FAQ",
    title: "Yang sering ditanyakan soal AC Gree",
  },
};
