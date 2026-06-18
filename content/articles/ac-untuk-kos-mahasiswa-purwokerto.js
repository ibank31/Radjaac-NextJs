import { routes } from "@/content/routes";

export const acUntukKosMahasiswaPurwokerto = {
  slug: "ac-untuk-kos-mahasiswa-purwokerto",
  path: routes.artikelAcUntukKosMahasiswaPurwokerto,
  cluster: "informational",
  role: "supporting",
  intent: "commercial",
  parentSlug: "panduan-beli-ac-baru",
  updatedAt: "2026-06-15",
  moneyLinks: [
    ["Jual AC Purwokerto", routes.jualAcPurwokerto, "Konsultasi pembelian AC di area Purwokerto dan sekitar UNSOED."],
    ["Jual AC Kembaran", routes.jualAcKembaran, "Layanan AC untuk area kost di Kembaran dekat kampus."],
    ["Jual AC Karanglewas", routes.jualAcKaranglewas, "Layanan AC untuk area kost di Karanglewas."],
    ["Pengadaan AC Kost", routes.pengadaanKostApartemen, "Solusi pengadaan AC untuk kost banyak kamar."],
  ],
  title: "Panduan Memilih AC untuk Kos Mahasiswa Purwokerto — Radja AC",
  description:
    "Panduan memilih AC untuk kos mahasiswa di sekitar UNSOED Purwokerto: pilihan low watt untuk daya terbatas, tipe seragam, dan tips pengadaan bertahap.",
  h1: "Panduan memilih AC untuk kos mahasiswa Purwokerto",
  eyebrow: "AC Kost Purwokerto",
  readTime: "7 menit baca",
  intro:
    "Purwokerto adalah kota kampus dengan ribuan mahasiswa UNSOED yang tinggal di kost sekitar Karangwangkal, Dukuhwaluh, Kembaran, dan Karanglewas. Pemilik kost di area ini punya kebutuhan khusus: AC yang hemat listrik, tipe seragam untuk kemudahan perawatan, dan harga yang kompetitif untuk pembelian banyak unit.",
  sections: [
    {
      heading: "Karakteristik kost mahasiswa Purwokerto",
      body: [
        "Kost mahasiswa di sekitar UNSOED umumnya punya kamar berukuran kecil (3x3 atau 3x4 meter) dengan daya listrik per kamar yang terbatas. Banyak kost yang masih menggunakan sistem listrik bersama atau daya per kamar hanya 450-900 VA.",
        "Mahasiswa biasanya menyalakan AC saat istirahat siang dan malam hari. Pola pemakaian ini berbeda dengan rumah tangga yang mungkin menyalakan AC sepanjang hari.",
      ],
    },
    {
      heading: "Pilihan AC low watt untuk daya terbatas",
      body: [
        "Untuk kost dengan daya per kamar terbatas, AC low watt adalah pilihan wajib. Gree low watt 1/2 PK adalah salah satu pilihan populer karena tarikan dayanya ringan dan harganya kompetitif.",
        "Sebagai Proshop Gree, Radja AC memiliki stok low watt yang lebih lengkap. Ini memudahkan pemilik kost yang butuh banyak unit dengan tipe seragam.",
      ],
    },
    {
      heading: "Keuntungan tipe seragam untuk kost",
      body: [
        "Memilih tipe dan brand yang sama untuk semua kamar sangat disarankan. Keuntungannya: perawatan lebih mudah karena teknisi sudah familiar, spare part bisa dipakai bersama, dan jika ada unit rusak bisa dipindahkan dari kamar kosong.",
        "Tipe seragam juga memudahkan negosiasi harga untuk pembelian banyak unit. Radja AC memberikan harga lebih kompetitif untuk pengadaan kost dengan volume besar.",
      ],
    },
    {
      heading: "Area layanan di sekitar UNSOED",
      body: [
        "Radja AC melayani area kost di sekitar UNSOED termasuk Karangwangkal, Dukuhwaluh, Kembaran, Karanglewas, dan Purwokerto pusat. Showroom dan gudang berada di Pamijen, Sokaraja, sehingga pengiriman ke area kampus relatif cepat.",
        "Untuk pemilik kost di area ini, survei lokasi dan konsultasi kebutuhan bisa dijadwalkan. Tim Radja AC akan membantu menghitung kebutuhan PK, daya listrik, dan estimasi anggaran.",
      ],
    },
    {
      heading: "Tips pengadaan bertahap untuk kost baru",
      body: [
        "Tidak semua kamar harus dipasang AC sekaligus. Banyak pemilik kost memulai dengan kamar yang sudah terisi atau kamar premium, lalu menambah unit secara bertahap sesuai okupansi.",
        "Radja AC melayani pengadaan bertahap dengan tipe seragam. Anda bisa memesan 5 unit dulu untuk kamar yang sudah terisi, lalu menambah unit lagi saat ada penyewa baru.",
      ],
    },
  ],
  faqs: [
    {
      question: "AC apa yang cocok untuk kost mahasiswa di Purwokerto?",
      answer:
        "AC low watt 1/2 PK adalah pilihan paling umum untuk kamar kost ukuran 3x3 atau 3x4 meter dengan daya terbatas. Gree low watt sering dipilih karena harga kompetitif dan stok lengkap di Radja AC.",
    },
    {
      question: "Berapa harga AC untuk kost per kamar?",
      answer:
        "Harga bervariasi tergantung brand dan tipe. Untuk pembelian banyak unit, harga bisa lebih kompetitif. Kirim jumlah kamar dan kebutuhan untuk mendapatkan penawaran yang sesuai.",
    },
    {
      question: "Bisa pasang AC kost di area Kembaran atau Karanglewas?",
      answer:
        "Bisa. Radja AC melayani area kost di sekitar UNSOED termasuk Kembaran, Karanglewas, Karangwangkal, dan Dukuhwaluh. Pengiriman dari gudang Sokaraja relatif cepat ke area ini.",
    },
    {
      question: "Ada garansi untuk AC kost?",
      answer:
        "Garansi unit mengikuti ketentuan resmi brand. Garansi pemasangan 1 bulan untuk pekerjaan yang dikerjakan tim Radja AC. Jika ada kendala unit, tim membantu arahan klaim.",
    },
  ],
  ctaLabel: "Konsultasi AC Kost Purwokerto",
  waIntent: "konsultasi memilih AC untuk kost mahasiswa di Purwokerto sekitar UNSOED",
  relatedLinks: [
    ["Jual AC Purwokerto", routes.jualAcPurwokerto],
    ["Jual AC Kembaran", routes.jualAcKembaran],
    ["Pengadaan AC Kost", routes.pengadaanKostApartemen],
    ["AC Low Watt", routes.katalogAcLowWatt],
    ["Kontak Radja AC", routes.kontak],
  ],
};
