import { routes } from "@/content/routes";

export const panduanBeliAcBaru = {
  slug: "panduan-beli-ac-baru",
  path: routes.artikelPanduanBeliAcBaru,
  cluster: "informational",
  role: "pillar",
  intent: "commercial",
  parentSlug: null,
  updatedAt: "2026-06-18",
  moneyLinks: [
    ["Jual AC", routes.jualAc, "Mulai dari halaman penjualan utama untuk cek AC original multi-brand."],
    ["Katalog AC", routes.katalog, "Lihat kategori AC rumah, low watt, inverter, dan kebutuhan komersial."],
    ["Kalkulator PK AC", routes.kalkulatorPkAc, "Cek estimasi kebutuhan PK sebelum memilih unit."],
    ["Pengiriman & Pemasangan", routes.pengirimanPemasangan, "Pahami kebutuhan lokasi, material, garansi pasang, dan jadwal sebelum order."],
  ],
  title: "Panduan Beli AC Baru | Cek Ruangan, PK, Daya & Anggaran",
  description:
    "Panduan beli AC baru agar tidak salah pilih: cek ukuran ruangan, daya listrik, PK, tipe AC, brand, garansi, stok, dan estimasi anggaran.",
  h1: "Panduan beli AC baru sebelum pilih unit, PK, dan anggaran",
  eyebrow: "Panduan Beli AC",
  readTime: "6 menit baca",
  intro:
    "Beli AC baru sebaiknya tidak dimulai dari merek atau harga paling rendah. Mulai dulu dari kebutuhan ruanganmu: ukuran ruangan, daya listrik, kapasitas PK, tipe AC, garansi, dan stok unit. Dari situ pilihan unit lebih masuk akal dan estimasi anggaranmu lebih jelas.",
  sections: [
    {
      heading: "Mulai dari ukuran ruangan dan kebutuhan PK",
      body: [
        "Sebelum memilih brand, cek dulu ukuran ruanganmu, tinggi plafon, arah panas matahari, jumlah orang, dan kebiasaan pemakaian. Data ini menentukan apakah ruanganmu lebih cocok memakai 1/2 PK, 3/4 PK, 1 PK, atau kapasitas lain.",
        "Kalau kapasitas AC terlalu kecil, ruangan lama dingin dan mesin bekerja lebih berat. Kalau kapasitas kebesaran, biaya unit di awal jadi lebih tinggi padahal kebutuhan ruanganmu sebenarnya tidak sebesar itu.",
      ],
    },
    {
      heading: "Cek daya listrik sebelum memilih tipe AC",
      body: [
        "Daya listrik rumahmu ikut menentukan pilihan AC. Kalau dayanya terbatas, AC low watt jadi pilihan yang lebih aman. Untuk pemakaian rutin beberapa jam tiap hari, AC inverter biasanya lebih nyaman karena suhu ruangan lebih stabil.",
        "Low watt atau inverter bukan pengganti hitungan PK. Tipe hemat listrik tetap perlu kamu sesuaikan dengan ukuran ruangan dan pola pemakaian.",
      ],
    },
    {
      heading: "Bandingkan brand berdasarkan kebutuhan",
      body: [
        "Tiap kelas brand punya fokus yang beda. Ada yang kuat di reputasi dan garansi resmi, ada yang menarik di harga, dan ada yang pilihan unit inverter atau low watt-nya banyak. Pilihannya tetap balik ke kebutuhan ruangan dan anggaranmu.",
        "Supaya cepat dapat rekomendasi yang pas, sebutkan ukuran ruangan, daya listrik, anggaran, dan pola pemakaianmu saat tanya ke admin. Dari situ pilihan brand langsung mengerucut.",
      ],
    },
    {
      heading: "Pastikan kebutuhan pemasangan dijelaskan dari awal",
      body: [
        "Saat tanya harga AC, pastikan penawarannya sudah termasuk apa saja: pipa standar, kabel, bracket, selang pembuangan, vacuum, ongkir, dan jasa pasang. Kalau titik indoor dan outdoor berjauhan, tim Radja AC akan cek kebutuhan tambahannya dulu.",
        "Minta penjelasan paket sejak awal supaya total biayamu jelas. Ini lebih aman daripada cuma membandingkan harga unit yang terlihat murah padahal belum termasuk kebutuhan instalasi di lokasi.",
      ],
    },
    {
      heading: "Cek garansi, stok, pembayaran, dan bantuan klaim",
      body: [
        "Garansi unit mengikuti ketentuan resmi brand, sedangkan garansi pemasangan mengikuti pekerjaan pemasangan yang dikerjakan lewat Radja AC. Karena stok, harga, dan promo bisa berubah, sebaiknya konfirmasi dulu tipe unit sebelum kamu beli.",
        "Pembayaran seperti DP, transfer, atau COD bisa kamu konfirmasi setelah pilihan unit, alamat pengiriman, jadwal, dan opsi pemasangan jelas. Kalau ada kendala unit, tim Radja AC bantu arahan awal klaim sesuai jalur garansi brand.",
      ],
    },
  ],
  faqs: [
    {
      question: "Apa yang perlu dicek pertama sebelum beli AC baru?",
      answer:
        "Mulai dari ukuran ruangan, tinggi plafon, arah panas matahari, jumlah penghuni, dan daya listrik. Data ini menentukan estimasi PK sebelum memilih brand atau tipe, sehingga unit tidak terlalu kecil atau terlalu besar.",
    },
    {
      question: "Apakah harga AC sudah termasuk pemasangan?",
      answer:
        "Tergantung penawaran. Sebaiknya konfirmasi sejak awal apakah sudah termasuk pipa standar, kabel, bracket, vakum, dan jasa pasang agar perbandingan total biaya lebih adil. Kebutuhan tambahan menyesuaikan kondisi lokasi.",
    },
    {
      question: "Bagaimana cara memastikan stok dan garansi unit?",
      answer:
        "Stok, harga, dan promo bisa berubah, jadi tipe unit sebaiknya dikonfirmasi sebelum pembelian. Garansi unit mengikuti ketentuan resmi brand, sedangkan garansi pemasangan mengikuti pekerjaan yang dikerjakan melalui Radja AC.",
    },
  ],
  ctaLabel: "Konsultasi Beli AC Baru",
  waIntent: "konsultasi beli AC baru setelah membaca panduan",
  relatedLinks: [
    ["Katalog AC", routes.katalog],
    ["Kalkulator PK AC", routes.kalkulatorPkAc],
    ["AC Split Rumah", routes.katalogAcSplitRumah],
    ["Kontak Radja AC", routes.kontak],
  ],
};
