import { routes } from "@/content/routes";

export const pilihanAc12PkTerbaik = {
  slug: "pilihan-ac-1-2-pk-terbaik",
  path: routes.artikelPilihanAcSetengahPkTerbaik,
  cluster: "capacity-sizing",
  role: "supporting",
  intent: "commercial",
  parentSlug: "ac-1-pk-untuk-ruangan-berapa",
  updatedAt: "2026-06-11",
  moneyLinks: [
    ["AC 1/2 PK", routes.katalogAcSetengahPk, "Lihat pilihan AC 1/2 PK untuk kamar dan ruang kecil."],
    ["AC Low Watt", routes.katalogAcLowWatt, "Cek opsi low watt bila daya listrik rumah terbatas."],
    ["Kalkulator PK AC", routes.kalkulatorPkAc, "Pastikan ruangan memang cukup 1/2 PK sebelum order."],
    ["Kontak Radja AC", routes.kontak, "Konsultasikan ukuran ruangan dan daya listrik untuk pilihan 1/2 PK yang sesuai."],
  ],
  title: "Pilihan AC 1/2 PK Terbaik untuk Ruang Kecil | Cara Memilih",
  description:
    "Panduan memilih AC 1/2 PK untuk ruang kecil: cek kecocokan ruangan, pilihan tipe standard, low watt, inverter, dan pertimbangan merk sebelum order.",
  h1: "Pilihan AC 1/2 PK terbaik untuk ruang kecil",
  eyebrow: "Panduan AC 1/2 PK",
  readTime: "6 menit baca",
  keywords: ["AC 1/2 PK", "AC ruang kecil", "AC kamar kecil", "AC setengah PK"],
  intro:
    "AC 1/2 PK adalah salah satu kapasitas paling diminati untuk kamar dan ruang kecil. Supaya pilihan tepat, fokusnya bukan sekadar mencari yang paling ringan, tetapi memastikan kapasitas memang cukup untuk ruangan, lalu memilih tipe dan merk yang sesuai kebutuhan.",
  sections: [
    {
      heading: "Kapan AC 1/2 PK menjadi pilihan tepat",
      body: [
        "AC 1/2 PK umumnya cocok untuk ruangan kecil sekitar 9–12 m² dalam kondisi normal, seperti kamar tidur kecil, kamar kost, atau ruang kerja sempit yang tertutup.",
        "Untuk ruangan yang teduh dan tidak banyak sumber panas, 1/2 PK sering sudah cukup. Ini membuatnya populer untuk kebutuhan rumah tangga dan hunian sewa.",
      ],
    },
    {
      heading: "Cek dulu apakah ruangan benar cukup 1/2 PK",
      body: [
        "Sebelum memutuskan, pastikan ruangan memang masuk kategori kecil. Kamar yang panas, berplafon tinggi, atau sering terkena matahari bisa membutuhkan kapasitas lebih besar agar tidak terasa kurang dingin.",
        "Memaksakan 1/2 PK pada ruangan yang sebenarnya butuh lebih besar membuat AC bekerja berat dan boros. Cek estimasi kebutuhan PK lebih dulu untuk memastikan kapasitas ini memang pas.",
      ],
    },
    {
      heading: "Pilihan tipe 1/2 PK: standard, low watt, atau inverter",
      body: [
        "AC 1/2 PK tersedia dalam beberapa tipe. Low watt cocok untuk rumah berdaya listrik terbatas, inverter cocok untuk pemakaian lama yang mengutamakan kestabilan suhu, dan standard masuk akal untuk pemakaian sederhana.",
        "Pilih tipe berdasarkan daya listrik dan durasi pemakaian, bukan hanya selisih harga. Tipe yang tepat membuat kapasitas 1/2 PK bekerja lebih nyaman dan efisien.",
      ],
    },
    {
      heading: "Pertimbangan merk untuk AC 1/2 PK",
      body: [
        "Banyak merk menyediakan kapasitas 1/2 PK, mulai dari kelas value sampai premium. Radja AC menyediakan AC original multi-brand, sehingga pilihan 1/2 PK bisa disesuaikan dengan anggaran dan kebutuhan.",
        "Pertimbangkan garansi unit, ketersediaan tipe, dan layanan saat memilih merk. Konfirmasi stok sebaiknya dilakukan karena ketersediaan bisa berubah sewaktu-waktu.",
      ],
    },
    {
      heading: "Lanjut cek stok dan kebutuhan pemasangan",
      body: [
        "Setelah kapasitas dan tipe lebih jelas, cek ketersediaan unit 1/2 PK yang sesuai dan kebutuhan pemasangan. Posisi indoor, outdoor, panjang pipa, dan kondisi listrik ikut memengaruhi hasil akhir.",
        "Sampaikan ukuran ruangan, daya listrik, dan pola pemakaian saat konsultasi agar pilihan AC 1/2 PK yang direkomendasikan benar-benar sesuai dengan kebutuhan ruang kecil Anda.",
      ],
    },
  ],
  faqs: [
    {
      question: "AC 1/2 PK cocok untuk ruangan berapa meter?",
      answer:
        "Dalam kondisi normal, AC 1/2 PK umumnya cocok untuk ruangan kecil sekitar 9–12 m², seperti kamar tidur kecil atau kamar kost. Ruangan yang panas atau berplafon tinggi bisa membutuhkan kapasitas lebih besar.",
    },
    {
      question: "Apakah AC 1/2 PK ada yang tipe low watt dan inverter?",
      answer:
        "Ada. Kapasitas 1/2 PK tersedia dalam tipe standard, low watt, dan inverter. Pilih sesuai daya listrik rumah dan durasi pemakaian agar kapasitas kecil ini tetap nyaman dan efisien.",
    },
    {
      question: "Apa risiko memaksakan AC 1/2 PK pada ruangan besar?",
      answer:
        "AC akan bekerja terus-menerus untuk mengejar suhu, sehingga ruangan lama dingin, mesin cepat lelah, dan konsumsi listrik kurang efisien. Lebih baik menaikkan kapasitas bila ruangan memang lebih besar atau panas.",
    },
  ],
  ctaLabel: "Konsultasi AC 1/2 PK",
  waIntent: "konsultasi memilih AC 1/2 PK untuk ruang kecil",
  relatedLinks: [
    ["AC 1/2 PK", routes.katalogAcSetengahPk],
    ["AC Low Watt", routes.katalogAcLowWatt],
    ["Kalkulator PK AC", routes.kalkulatorPkAc],
    ["Kontak Radja AC", routes.kontak],
  ],
};
