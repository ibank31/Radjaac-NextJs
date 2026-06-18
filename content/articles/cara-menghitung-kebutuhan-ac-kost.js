import { routes } from "@/content/routes";

export const caraMenghitungKebutuhanAcKost = {
  slug: "cara-menghitung-kebutuhan-ac-kost",
  path: routes.artikelCaraMenghitungKebutuhanAcKost,
  cluster: "b2b",
  role: "pillar",
  intent: "informational",
  parentSlug: null,
  updatedAt: "2026-06-15",
  moneyLinks: [
    ["Pengadaan AC Kost", routes.pengadaanKostApartemen, "Solusi pengadaan AC untuk kost dan apartemen banyak kamar."],
    ["Pengadaan AC", routes.pengadaanAc, "Halaman utama pengadaan AC untuk berbagai kebutuhan B2B."],
    ["AC Low Watt", routes.katalogAcLowWatt, "Pilihan AC low watt untuk kamar kost dengan daya terbatas."],
    ["Kalkulator PK AC", routes.kalkulatorPkAc, "Hitung kebutuhan PK per kamar sebelum pengadaan."],
  ],
  title: "Cara Menghitung Kebutuhan AC untuk Kost Banyak Kamar — Radja AC",
  description:
    "Panduan teknis menghitung kebutuhan AC untuk kost: jumlah unit, kapasitas PK per kamar, daya listrik total, tipe seragam, dan estimasi anggaran pengadaan.",
  h1: "Cara menghitung kebutuhan AC untuk kost banyak kamar",
  eyebrow: "Panduan Pengadaan AC Kost",
  readTime: "8 menit baca",
  intro:
    "Menghitung kebutuhan AC untuk kost bukan sekadar mengalikan jumlah kamar dengan harga unit. Ada pertimbangan teknis seperti daya listrik per kamar, kapasitas PK yang sesuai, pemilihan tipe seragam, dan strategi pengadaan bertahap yang perlu dipahami agar investasi lebih efisien.",
  sections: [
    {
      heading: "Langkah 1: Hitung jumlah kamar dan ukurannya",
      body: [
        "Mulai dengan mendata jumlah kamar yang akan dipasang AC. Catat ukuran masing-masing kamar (panjang x lebar), tinggi plafon, dan kondisi khusus seperti kamar yang terkena matahari sore atau berada di lantai atas.",
        "Untuk kost dengan ukuran kamar seragam (misalnya semua 3x3 meter), perhitungan lebih mudah. Untuk ukuran bervariasi, kelompokkan kamar berdasarkan ukuran untuk menentukan kapasitas PK yang sesuai.",
      ],
    },
    {
      heading: "Langkah 2: Tentukan kapasitas PK per kamar",
      body: [
        "Kamar kost ukuran 3x3 meter (9 m²) umumnya cukup dengan AC 1/2 PK. Kamar 3x4 meter (12 m²) bisa 1/2 PK atau 3/4 PK tergantung kondisi panas. Kamar lebih besar atau panas mungkin butuh 3/4 PK atau 1 PK.",
        "Jangan memilih PK terlalu kecil hanya untuk menghemat. AC yang bekerja terlalu keras akan cepat rusak dan boros listrik. Lebih baik investasi PK yang tepat dari awal.",
      ],
    },
    {
      heading: "Langkah 3: Hitung kebutuhan daya listrik total",
      body: [
        "Ini sering diabaikan dan menjadi masalah di kemudian hari. Hitung daya listrik total bangunan dan berapa yang tersedia untuk AC. Jika daya per kamar terbatas, pilih AC low watt.",
        "Contoh: kost 10 kamar dengan daya total 5500 VA. Jika setiap kamar punya perangkat lain (lampu, charger, kipas), daya tersisa untuk AC mungkin hanya 300-400 watt per kamar. AC low watt menjadi pilihan wajib.",
      ],
    },
    {
      heading: "Langkah 4: Pilih tipe seragam untuk kemudahan perawatan",
      body: [
        "Untuk kost, sangat disarankan memilih tipe dan brand yang seragam untuk semua kamar. Ini memudahkan perawatan, penggantian spare part, dan negosiasi harga untuk pembelian banyak unit.",
        "Tipe seragam juga memudahkan jika ada unit yang rusak — Anda bisa memindahkan unit dari kamar kosong atau menyimpan spare unit untuk penggantian cepat.",
      ],
    },
    {
      heading: "Langkah 5: Pertimbangkan pengadaan bertahap",
      body: [
        "Tidak semua kamar harus dipasang AC sekaligus. Banyak pemilik kost memulai dengan kamar yang sudah terisi atau kamar premium, lalu menambah unit secara bertahap sesuai okupansi dan cash flow.",
        "Radja AC melayani pengiriman dan pemasangan bertahap. Anda bisa memesan 5 unit dulu, lalu menambah 5 unit lagi bulan depan dengan tipe yang sama.",
      ],
    },
    {
      heading: "Langkah 6: Hitung estimasi anggaran total",
      body: [
        "Anggaran pengadaan AC kost meliputi: harga unit x jumlah kamar, biaya pemasangan per unit, dan kemungkinan kebutuhan tambahan seperti pipa ekstra atau instalasi listrik.",
        "Kirim data lengkap (jumlah kamar, ukuran, daya listrik, lokasi) ke tim Radja AC untuk mendapatkan estimasi anggaran yang lebih akurat. Harga bisa lebih kompetitif untuk pembelian banyak unit.",
      ],
    },
  ],
  faqs: [
    {
      question: "Berapa PK AC untuk kamar kost ukuran 3x3?",
      answer:
        "Kamar 3x3 meter (9 m²) umumnya cukup dengan AC 1/2 PK dalam kondisi normal. Jika kamar panas atau di lantai atas, pertimbangkan 3/4 PK.",
    },
    {
      question: "AC low watt wajib untuk kost?",
      answer:
        "Tergantung daya listrik per kamar. Jika daya terbatas (misalnya 450-900 VA per kamar), low watt sangat disarankan agar listrik tidak sering turun.",
    },
    {
      question: "Bisa beli AC kost secara bertahap?",
      answer:
        "Bisa. Radja AC melayani pengadaan bertahap dengan tipe seragam. Anda bisa memesan sebagian unit dulu, lalu menambah sesuai kebutuhan.",
    },
    {
      question: "Ada diskon untuk pembelian banyak unit?",
      answer:
        "Harga bisa lebih kompetitif untuk pembelian banyak unit. Kirim jumlah kamar dan kebutuhan untuk mendapatkan penawaran yang sesuai.",
    },
  ],
  ctaLabel: "Konsultasi Pengadaan AC Kost",
  waIntent: "konsultasi menghitung kebutuhan AC untuk kost banyak kamar",
  relatedLinks: [
    ["Pengadaan AC Kost", routes.pengadaanKostApartemen],
    ["AC Low Watt", routes.katalogAcLowWatt],
    ["Kalkulator PK AC", routes.kalkulatorPkAc],
    ["AC 1/2 PK", routes.katalogAcSetengahPk],
    ["Kontak Radja AC", routes.kontak],
  ],
};
