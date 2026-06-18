import { routes } from "@/content/routes";

export const acKurangDinginBelumTentuFreonHabis = {
  slug: "ac-kurang-dingin-belum-tentu-freon-habis",
  path: routes.artikelAcKurangDingin,
  cluster: "troubleshooting",
  role: "pillar",
  intent: "informational",
  parentSlug: null,
  updatedAt: "2026-06-11",
  moneyLinks: [
    ["Jual AC Purwokerto", routes.jualAcPurwokerto, "Konsultasi AC baru kalau unit lama sudah tidak efisien."],
    ["Kalkulator PK AC", routes.kalkulatorPkAc, "Cek apakah masalah kurang dingin bisa berawal dari kapasitas PK yang tidak sesuai."],
    ["Ganti AC Lama ke Unit Baru", routes.gantiAcBaruPurwokerto, "Pertimbangkan penggantian AC baru bila unit lama sudah tidak ekonomis diperbaiki."],
  ],
  title: "AC Kurang Dingin? Cek Layak Pakai atau Ganti Baru",
  description:
    "AC kurang dingin tidak selalu berarti freon habis. Cek kapasitas PK, usia unit, pemakaian, daya listrik, dan kapan lebih masuk akal mempertimbangkan AC baru.",
  h1: "AC kurang dingin: cek penyebab sebelum tambah freon",
  eyebrow: "Edukasi AC",
  readTime: "6 menit baca",
  intro:
    "Saat AC lama mulai kurang dingin, keputusan paling penting bukan langsung menambah biaya, tetapi mengevaluasi apakah unit masih layak dipakai atau lebih masuk akal diganti baru. Penyebabnya bisa dari kapasitas PK yang kurang, ruangan berubah fungsi, pemakaian berat, instalasi kurang ideal, atau usia unit yang sudah tinggi.",
  sections: [
    {
      heading: "AC kurang dingin perlu dilihat sebagai tanda evaluasi",
      body: [
        "AC yang mulai kurang dingin adalah sinyal untuk mengecek kecocokan unit dengan kebutuhan ruangan saat ini. Ruangan yang makin padat, plafon tinggi, sering terkena panas matahari, atau pintu sering terbuka bisa membuat AC lama terasa tidak kuat lagi.",
        "Jika unit sudah berumur, boros listrik, sering bermasalah, atau kapasitas PK sejak awal terlalu kecil, membeli AC baru dengan ukuran yang tepat sering lebih sehat daripada terus mengeluarkan biaya berulang.",
      ],
    },
    {
      heading: "Cek kapasitas PK sebelum menambah biaya",
      body: [
        "AC sering terasa kurang dingin saat kapasitas PK tidak sesuai luas dan kondisi ruangan. Jika unit terlalu kecil untuk ruangan besar, mesin bekerja berat, ruangan lambat dingin, dan konsumsi listrik terasa kurang efisien.",
        "Sebelum menambah biaya ke unit lama, cek ukuran ruangan, jumlah orang, sumber panas, arah matahari, dan daya listrik rumah. Dari data ini, pilihan AC standard, low watt, atau inverter bisa dicocokkan lebih tepat.",
      ],
    },
    {
      heading: "Tanda lebih masuk akal ganti AC baru",
      body: [
        "Pertimbangkan ganti AC baru jika unit sudah tua, sering kurang dingin, suara mulai kasar, listrik terasa boros, spare part sulit, atau biaya perbaikan mulai mendekati nilai unit baru.",
        "Ganti AC baru juga lebih masuk akal ketika kebutuhan ruangan berubah. Contohnya kamar berubah jadi ruang kerja, ruangan makin banyak perangkat elektronik, atau ruangan usaha butuh pendinginan lebih stabil sepanjang hari.",
      ],
    },
    {
      heading: "Checklist sebelum membeli AC pengganti",
      body: [
        "Siapkan ukuran ruangan, daya listrik, lokasi indoor dan outdoor, kebiasaan pemakaian, anggaran, dan merek yang diminati. Data ini membantu memilih AC dengan PK dan fitur yang sesuai.",
        "Untuk rumah dengan daya terbatas, AC low watt menjadi pilihan. Untuk pemakaian lama setiap hari, AC inverter sering lebih nyaman. Untuk toko, kantor, kost, atau banyak ruangan, stok dan jadwal pemasangan perlu dicek lebih awal.",
      ],
    },
  ],
  faqs: [
    {
      question: "AC kurang dingin apakah pasti freon habis?",
      answer:
        "Tidak selalu. Penyebab lain bisa kapasitas PK yang kurang, ruangan berubah fungsi, filter kotor, instalasi kurang ideal, atau usia unit yang sudah tinggi. Sebaiknya dievaluasi dulu sebelum menambah biaya.",
    },
    {
      question: "Kapan lebih baik ganti AC baru daripada memperbaiki?",
      answer:
        "Pertimbangkan ganti baru jika unit sudah tua, sering bermasalah, boros listrik, spare part sulit, atau biaya perbaikan mulai mendekati harga unit baru. Kebutuhan ruangan yang berubah juga jadi pertimbangan.",
    },
    {
      question: "Apa yang perlu dicek sebelum beli AC pengganti?",
      answer:
        "Siapkan ukuran ruangan, daya listrik, lokasi indoor dan outdoor, pola pemakaian, dan anggaran. Data ini membantu memilih PK dan tipe yang sesuai, serta mengecek stok dan jadwal pemasangan.",
    },
  ],
  ctaLabel: "Konsultasi Ganti AC Baru",
  waIntent: "konsultasi AC kurang dingin dan pertimbangan ganti AC baru",
  relatedLinks: [
    ["Ganti AC Baru Purwokerto", routes.gantiAcBaruPurwokerto],
    ["Kalkulator PK AC", routes.kalkulatorPkAc],
    ["AC Low Watt", routes.katalogAcLowWatt],
    ["AC Inverter", routes.katalogAcInverter],
    ["Kontak Radja AC", routes.kontak],
  ],
};
