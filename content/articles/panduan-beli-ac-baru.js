import { routes } from "@/content/routes";

export const panduanBeliAcBaru = {
  slug: "panduan-beli-ac-baru",
  path: routes.artikelPanduanBeliAcBaru,
  cluster: "informational",
  role: "pillar",
  intent: "commercial",
  parentSlug: null,
  updatedAt: "2026-06-11",
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
    "Beli AC baru sebaiknya tidak dimulai dari merek atau harga paling rendah. Pembeli perlu cek ukuran ruangan, daya listrik, kapasitas PK, tipe AC, garansi, stok unit, dan estimasi anggaran agar pilihan unit lebih masuk akal.",
  sections: [
    {
      heading: "Mulai dari ukuran ruangan dan kebutuhan PK",
      body: [
        "Sebelum memilih brand, cek dulu ukuran ruangan, tinggi plafon, arah panas matahari, jumlah orang, dan kebiasaan pemakaian. Data ini membantu menentukan apakah ruangan lebih cocok memakai 1/2 PK, 3/4 PK, 1 PK, atau kapasitas lain.",
        "Jika kapasitas AC terlalu kecil, ruangan bisa lama dingin dan mesin bekerja berat. Jika kapasitas terlalu besar, biaya awal bisa kurang efisien untuk kebutuhan ruangan yang sebenarnya sederhana.",
      ],
    },
    {
      heading: "Cek daya listrik sebelum memilih tipe AC",
      body: [
        "Daya listrik rumah ikut menentukan pilihan AC. Untuk daya terbatas, AC low watt menjadi pilihan. Untuk pemakaian rutin beberapa jam setiap hari, AC inverter bisa lebih nyaman karena suhu cenderung stabil.",
        "Low watt atau inverter bukan pengganti hitungan PK. Tipe hemat listrik tetap perlu disesuaikan dengan ukuran ruangan dan kondisi pemakaian.",
      ],
    },
    {
      heading: "Bandingkan brand berdasarkan kebutuhan",
      body: [
        "Brand premium, brand ekonomis, dan brand value-for-money punya kelebihan masing-masing. Ada yang kuat di reputasi, ada yang menarik di harga, dan ada yang cocok untuk pemakaian rutin.",
        "Cara paling aman adalah menyebutkan ukuran ruangan, daya listrik, anggaran, dan pola pemakaian. Dari sana pilihan brand bisa dipersempit tanpa menebak-nebak.",
      ],
    },
    {
      heading: "Pastikan kebutuhan pemasangan dijelaskan dari awal",
      body: [
        "Saat tanya harga AC, pastikan apakah penawaran sudah termasuk pipa standar, kabel, bracket, selang pembuangan, vacuum, ongkir, dan jasa pasang. Jika titik indoor dan outdoor berjauhan, tim Radja AC perlu cek kebutuhan tambahan.",
        "Minta penjelasan paket sejak awal agar total biaya lebih jelas. Ini lebih aman daripada hanya membandingkan harga unit yang terlihat murah tetapi belum termasuk kebutuhan instalasi di lokasi.",
      ],
    },
    {
      heading: "Cek garansi, stok, pembayaran, dan bantuan klaim",
      body: [
        "Garansi unit mengikuti ketentuan resmi brand, sedangkan garansi pemasangan mengikuti pekerjaan pemasangan yang dikerjakan melalui Radja AC. Karena stok, harga, dan promo bisa berubah, konfirmasi tipe unit perlu dilakukan sebelum pembelian.",
        "Pembayaran seperti DP, transfer, atau COD bisa dikonfirmasi setelah pilihan unit, alamat pengiriman, jadwal, dan opsi pemasangan jelas. Jika ada kendala unit, tim Radja AC membantu arahan awal klaim sesuai jalur garansi brand.",
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
