import { routes } from "@/content/routes";

export const acUntukListrik900Watt = {
  slug: "ac-untuk-listrik-900-watt",
  path: routes.artikelAcUntukListrik900Watt,
  cluster: "commercial-investigation",
  role: "supporting",
  intent: "commercial",
  parentSlug: "ac-bagus-merk-apa",
  updatedAt: "2026-06-11",
  moneyLinks: [
    ["AC Low Watt", routes.katalogAcLowWatt, "Lihat AC low watt yang lebih ramah untuk daya listrik 900 watt."],
    ["Kalkulator PK AC", routes.kalkulatorPkAc, "Cek kapasitas PK yang aman agar beban listrik tetap terkendali."],
    ["Kontak Radja AC", routes.kontak, "Sampaikan daya listrik dan perangkat rumah untuk pilihan AC yang aman."],
  ],
  title: "AC untuk Listrik 900 Watt | Pilih Low Watt Tanpa MCB Turun",
  description:
    "Panduan memilih AC untuk listrik 900 watt agar MCB tidak sering turun: cek beban listrik, kapasitas PK, dan pilihan AC low watt yang sesuai.",
  h1: "AC untuk listrik 900 watt tanpa sering turun MCB",
  eyebrow: "AC Low Watt",
  readTime: "6 menit baca",
  keywords: ["AC listrik 900 watt", "AC low watt", "MCB turun AC", "AC daya kecil"],
  intro:
    "Rumah dengan daya listrik 900 watt sering ragu memasang AC karena takut MCB sering turun. Sebenarnya AC tetap bisa dipasang asal pilihan tipe dan kapasitasnya disesuaikan dengan daya yang tersedia serta beban listrik lain di rumah.",
  sections: [
    {
      heading: "Kenapa listrik 900 watt perlu perhatian khusus",
      body: [
        "Pada daya 900 watt, total beban listrik di rumah relatif terbatas. Jika AC menarik daya besar saat menyala bersama kulkas, pompa air, dan lampu, MCB bisa turun karena beban melebihi batas.",
        "Karena itu, kunci utamanya bukan memaksakan AC berkapasitas besar, melainkan memilih tipe dan PK yang ramah terhadap daya yang tersedia.",
      ],
    },
    {
      heading: "Pilih AC low watt dengan PK yang sesuai",
      body: [
        "Untuk daya 900 watt, AC low watt menjadi pilihan utama karena tarikan dayanya lebih ringan. Kapasitas yang umum dipertimbangkan adalah 1/2 PK untuk kamar kecil, dengan tetap menyesuaikan kondisi ruangan.",
        "Hindari memilih PK terlalu besar hanya agar cepat dingin. Pada daya terbatas, kapasitas yang berlebihan justru meningkatkan risiko beban dan membuat listrik tidak stabil.",
      ],
    },
    {
      heading: "Hitung beban listrik lain di rumah",
      body: [
        "Sebelum menambah AC, perhatikan perangkat lain yang sering menyala bersamaan seperti kulkas, mesin cuci, pompa air, dan pemanas. Total beban inilah yang menentukan apakah AC masih aman ditambahkan.",
        "Jika beban lain sudah tinggi, mungkin perlu mengatur pemakaian bergantian, atau mempertimbangkan penambahan daya listrik bila AC dibutuhkan untuk pemakaian rutin.",
      ],
    },
    {
      heading: "Inverter low watt sebagai opsi pertimbangan",
      body: [
        "Beberapa unit inverter memiliki tarikan daya yang relatif ramah saat suhu sudah stabil. Untuk daya 900 watt, opsi ini bisa dipertimbangkan, namun tetap perlu dicek kebutuhan dan beban listrik rumah secara keseluruhan.",
        "Pilihan antara low watt biasa dan inverter low watt sebaiknya dibahas berdasarkan ukuran ruangan, durasi pemakaian, dan perangkat lain yang aktif di rumah.",
      ],
    },
    {
      heading: "Cek instalasi dan kondisi MCB",
      body: [
        "Selain unit, kondisi instalasi listrik dan MCB ikut berpengaruh. Instalasi yang sudah tua atau tidak sesuai bisa membuat AC kurang stabil meskipun kapasitasnya sudah tepat.",
        "Sampaikan besaran daya listrik dan perangkat utama di rumah saat konsultasi. Dari sana, tim Radja AC bisa membantu mencocokkan pilihan AC low watt yang paling aman untuk daya 900 watt.",
      ],
    },
  ],
  faqs: [
    {
      question: "AC berapa PK yang aman untuk listrik 900 watt?",
      answer:
        "Untuk daya 900 watt, AC low watt 1/2 PK pada kamar kecil umumnya paling aman. Pemilihan tetap perlu menghitung beban perangkat lain agar MCB tidak turun saat AC menyala bersamaan.",
    },
    {
      question: "Apakah AC bikin MCB sering turun di rumah 900 watt?",
      answer:
        "Bisa terjadi bila AC menarik daya besar dan menyala bersama perangkat lain hingga total beban melebihi batas. Memilih tipe low watt dengan PK sesuai dan mengatur pemakaian membantu mengurangi risiko MCB turun.",
    },
    {
      question: "Apakah perlu tambah daya listrik untuk pasang AC?",
      answer:
        "Tidak selalu. Banyak rumah 900 watt tetap bisa memakai AC low watt dengan kapasitas kecil. Penambahan daya baru dipertimbangkan jika beban listrik lain sudah tinggi atau AC dipakai rutin dalam waktu lama.",
    },
  ],
  ctaLabel: "Konsultasi AC Low Watt 900 Watt",
  waIntent: "konsultasi memilih AC untuk listrik 900 watt",
  relatedLinks: [
    ["AC Low Watt", routes.katalogAcLowWatt],
    ["Kalkulator PK AC", routes.kalkulatorPkAc],
    ["Kontak Radja AC", routes.kontak],
  ],
};
