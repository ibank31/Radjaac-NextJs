import { routes } from "@/content/routes";

export const ac1PkUntukRuanganBerapa = {
  slug: "ac-1-pk-untuk-ruangan-berapa",
  path: routes.artikelAcSatuPkUntukRuanganBerapa,
  cluster: "capacity-sizing",
  role: "pillar",
  intent: "informational",
  parentSlug: null,
  updatedAt: "2026-06-11",
  moneyLinks: [
    ["Kalkulator PK AC", routes.kalkulatorPkAc, "Hitung estimasi kebutuhan PK sebelum memilih 3/4 PK, 1 PK, atau 1.5 PK."],
    ["AC 1 PK", routes.katalogAcSatuPk, "Lihat pilihan AC 1 PK untuk kamar besar, ruang kerja, ruang tamu kecil, atau toko kecil."],
    ["AC 1.5 PK", routes.katalogAcSatuSetengahPk, "Bandingkan jika ruangan panas, lebih besar, atau sering dipakai banyak orang."],
    ["Pengiriman & Pemasangan", routes.pengirimanPemasangan, "Cek kebutuhan lokasi, material, garansi pasang, dan jadwal sebelum order."],
  ],
  title: "AC 1 PK Cocok untuk Ruangan Berapa? | Panduan Sebelum Order — Radja AC",
  description:
    "Panduan memilih AC 1 PK untuk kamar dan ruang keluarga. Cek ukuran ruangan, BTU, kondisi panas, daya listrik, dan kapan perlu naik atau turun kapasitas.",
  h1: "AC 1 PK cocok untuk ruangan berapa?",
  eyebrow: "Panduan PK AC",
  readTime: "6 menit baca",
  intro:
    "AC 1 PK memang populer, tapi jangan langsung beli hanya karena terasa aman di tengah. Salah kapasitas bisa membuat ruangan lama dingin, listrik terasa berat, dan biaya pembelian jadi kurang efisien.",
  sections: [
    {
      heading: "Jawaban cepat: biasanya sekitar 15–20 m²",
      body: [
        "Dalam kondisi normal, AC 1 PK biasanya masuk akal untuk ruangan sekitar 15–20 m². Contohnya kamar besar, ruang keluarga kecil, ruang kerja, atau ruangan tertutup yang tidak terlalu panas.",
        "Angka ini bukan aturan kaku. Kamar 15 m² yang panas sore bisa berbeda kebutuhannya dengan ruang 18 m² yang teduh dan tertutup.",
      ],
    },
    {
      heading: "Kapan 1 PK terasa kurang?",
      body: [
        "AC 1 PK bisa terasa kurang jika ruangan terlalu luas, banyak kaca, plafon tinggi, terkena matahari langsung, sering terbuka, atau dipakai banyak orang.",
        "Kalau dipaksakan, pembeli sering merasa AC tidak dingin padahal masalahnya bukan merek, melainkan kapasitas yang tidak sesuai.",
      ],
    },
    {
      heading: "Kapan cukup 3/4 PK atau perlu naik kapasitas?",
      body: [
        "Untuk kamar yang lebih kecil dan cukup teduh, 3/4 PK bisa lebih masuk akal daripada langsung memilih 1 PK. Untuk ruangan lebih besar atau panas, 1.5 PK bisa lebih aman dibanding memaksa 1 PK.",
        "Jangan pilih PK kecil hanya karena ingin hemat. PK yang terlalu kecil bisa membuat AC bekerja lama dan berat.",
      ],
    },
    {
      heading: "Cek daya listrik sebelum menentukan unit",
      body: [
        "Selain ukuran ruangan, daya listrik rumah wajib dicek. Untuk rumah dengan daya terbatas, pilihan low watt atau tipe tertentu menjadi pilihan.",
        "Pilihan final sebaiknya tidak hanya dari PK, tapi juga dari tipe AC, pola pemakaian, dan kesiapan listrik.",
      ],
    },
    {
      heading: "Lanjutkan ke stok, pemasangan, garansi, dan pembayaran",
      body: [
        "Setelah estimasi PK lebih jelas, cek stok AC 1 PK, pilihan standard/low watt/inverter, garansi unit, dan kebutuhan pemasangan. Posisi indoor-outdoor, panjang pipa, akses lokasi, dan material tambahan bisa memengaruhi total biaya.",
        "Pembayaran seperti DP, transfer, atau COD bisa dikonfirmasi setelah pilihan unit, alamat pengiriman, jadwal, dan opsi pemasangan jelas. Jadi hasil hitung PK sebaiknya dilanjutkan dengan data ruangan dan kebutuhan pembelian yang lengkap.",
      ],
    },
  ],
  faqs: [
    {
      question: "AC 1 PK cocok untuk ruangan berapa meter?",
      answer:
        "Dalam kondisi normal, AC 1 PK umumnya masuk akal untuk ruangan sekitar 15–20 m². Ruangan yang panas, banyak kaca, atau berplafon tinggi bisa membutuhkan kapasitas lebih besar.",
    },
    {
      question: "Apakah AC 1 PK boros listrik?",
      answer:
        "Tidak selalu. Konsumsi listrik lebih dipengaruhi kesesuaian PK dengan ruangan, tipe AC, dan pola pemakaian. PK yang terlalu kecil untuk ruangan besar justru membuat AC bekerja berat dan kurang efisien.",
    },
    {
      question: "Kapan sebaiknya pilih 3/4 PK atau 1.5 PK?",
      answer:
        "Untuk kamar kecil dan cukup teduh, 3/4 PK bisa lebih masuk akal. Untuk ruangan lebih besar atau panas, 1.5 PK lebih aman daripada memaksa 1 PK. Sebaiknya cek estimasi PK lebih dulu sebelum menentukan unit.",
    },
  ],
  ctaLabel: "Cek PK AC via WhatsApp",
  waIntent: "konsultasi AC 1 PK dan kebutuhan PK ruangan",
  relatedLinks: [
    ["Kalkulator PK AC", routes.kalkulatorPkAc],
    ["AC 1 PK", routes.katalogAcSatuPk],
    ["AC 1.5 PK", routes.katalogAcSatuSetengahPk],
    ["AC 1/2 PK", routes.katalogAcSetengahPk],
    ["Kontak Radja AC", routes.kontak],
  ],
};
