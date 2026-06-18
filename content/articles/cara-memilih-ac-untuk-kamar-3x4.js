import { routes } from "@/content/routes";

export const caraMemilihAcUntukKamar3x4 = {
  slug: "cara-memilih-ac-untuk-kamar-3x4",
  path: routes.artikelCaraMemilihAcKamarTigaKaliEmpat,
  cluster: "capacity-sizing",
  role: "supporting",
  intent: "commercial",
  parentSlug: "ac-1-pk-untuk-ruangan-berapa",
  updatedAt: "2026-06-18",
  moneyLinks: [
    ["Kalkulator PK AC", routes.kalkulatorPkAc, "Cek apakah kamar 3x4 cukup 1/2 PK, 3/4 PK, atau perlu kapasitas lain."],
    ["AC Split Rumah", routes.katalogAcSplitRumah, "Panduan pilihan AC untuk kamar tidur, ruang keluarga, kos, dan rumah tinggal."],
  ],
  title: "Cara Memilih AC untuk Kamar 3x4 | Hitung PK Sebelum Beli | Radja AC",
  description:
    "AC untuk kamar 3x4 meter biasanya butuh 1/2 PK sampai 3/4 PK. Cek cara menghitung PK dari kondisi kamar, daya listrik, dan posisi pasang sebelum kamu beli.",
  h1: "Cara memilih AC untuk kamar 3x4 meter",
  eyebrow: "Panduan Ruangan",
  readTime: "4 menit baca",
  intro:
    "Kamar 3x4 meter termasuk ukuran yang umum di rumah. Untuk ruangan seperti ini, pilihan AC bukan cuma soal luas kamar, tapi juga kondisi panas, plafon, jumlah penghuni, pola pemakaian, dan daya listrik di rumahmu.",
  sections: [
    {
      heading: "Jawaban singkat: kamar 3x4 biasanya 1/2 sampai 3/4 PK",
      body: [
        "Kamar 3x4 meter memiliki luas sekitar 12 m². Dalam kondisi normal, ruangan seperti ini sering masuk rentang 1/2 PK sampai 3/4 PK, tetapi bisa berubah jika kamar panas, plafon tinggi, atau sering terkena matahari langsung.",
        "Jika kamar di lantai atas, banyak kaca, atau dinding terkena panas sore, kebutuhan pendinginan bisa lebih besar dibanding kamar yang teduh.",
      ],
    },
    {
      heading: "Perhatikan daya listrik dan pola pemakaian",
      body: [
        "Untuk kamar yang dipakai setiap malam, kenyamanan dan kestabilan suhu penting diperhatikan. AC inverter menjadi pilihan jika pemakaian rutin dan anggaran tersedia.",
        "Kalau daya listrik rumah terbatas, AC low watt bisa menjadi pilihan yang lebih aman. Namun, tetap pastikan kapasitasnya cukup agar AC tidak bekerja terlalu berat.",
      ],
    },
    {
      heading: "Jangan abaikan posisi pemasangan",
      body: [
        "Posisi indoor sebaiknya tidak langsung terhalang lemari, tirai, atau plafon terlalu dekat. Outdoor juga perlu sirkulasi udara yang baik agar performa pendinginan tidak turun.",
        "Sebelum beli, kamu bisa kirim foto ruangan dan titik pemasangan ke tim Radja AC supaya rekomendasi unit dan opsi pemasangannya lebih tepat.",
      ],
    },
    {
      heading: "Mulai dari kalkulator PK sebelum tanya stok",
      body: [
        "Untuk kamar 3x4, cek kebutuhan PK dulu sebelum memilih brand. Setelah kapasitasnya lebih jelas, barulah bandingkan tipe standard, low watt, atau inverter sesuai anggaran dan daya listrik.",
        "Data yang paling membantu adalah ukuran ruangan, tinggi plafon, arah panas matahari, daya listrik, dan apakah AC dipakai hanya malam hari atau hampir sepanjang hari.",
      ],
    },
    {
      heading: "Cek stok, pemasangan, garansi, dan pembayaran",
      body: [
        "Setelah kapasitas PK lebih jelas, cek stok AC 1/2 PK atau opsi lain yang sesuai, pilihan brand, garansi unit, dan kebutuhan pemasangan. Posisi indoor-outdoor, panjang pipa, akses lokasi, dan material tambahan bisa memengaruhi total biaya.",
        "Pembayaran seperti DP, transfer, atau COD bisa dikonfirmasi setelah pilihan unit, alamat pengiriman, jadwal, dan opsi pemasangan jelas. Jadi rekomendasi untuk kamar 3x4 sebaiknya tetap dilanjutkan dengan data ruangan dan daya listrik yang lengkap.",
      ],
    },
  ],
  faqs: [
    {
      question: "Berapa PK AC untuk kamar 3x4 meter?",
      answer:
        "Kamar 3x4 meter (sekitar 12 m²) dalam kondisi normal sering masuk rentang 1/2 PK sampai 3/4 PK. Kamar yang panas, berplafon tinggi, atau terkena matahari sore bisa membutuhkan kapasitas lebih besar.",
    },
    {
      question: "Lebih baik inverter atau low watt untuk kamar 3x4?",
      answer:
        "Untuk pemakaian setiap malam, inverter sering lebih nyaman karena suhu lebih stabil. Bila daya listrik rumah terbatas, low watt lebih aman. Pastikan kapasitas PK tetap sesuai agar AC tidak bekerja berat.",
    },
    {
      question: "Apa yang perlu disiapkan sebelum konsultasi?",
      answer:
        "Siapkan ukuran kamar, tinggi plafon, arah panas matahari, daya listrik, dan pola pemakaian. Foto ruangan dan titik pemasangan membantu rekomendasi unit serta opsi pemasangan yang lebih tepat.",
    },
  ],
  ctaLabel: "Konsultasi AC Kamar 3x4",
  waIntent: "konsultasi memilih AC untuk kamar 3x4",
  relatedLinks: [
    ["Kalkulator PK AC", routes.kalkulatorPkAc],
    ["AC 1 PK untuk ruangan berapa", routes.artikelAcSatuPkUntukRuanganBerapa],
    ["AC 1/2 PK", routes.katalogAcSetengahPk],
    ["AC Low Watt", routes.katalogAcLowWatt],
    ["AC Inverter", routes.katalogAcInverter],
    ["Kontak Radja AC", routes.kontak],
  ],
};
