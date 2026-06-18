import { routes } from "@/content/routes";

export const acUntukTokoDanRukoPilihPkBerapa = {
  slug: "ac-untuk-toko-dan-ruko-pilih-pk-berapa",
  path: routes.artikelAcUntukTokoRukoPilihPkBerapa,
  cluster: "commercial-investigation",
  role: "supporting",
  intent: "commercial",
  parentSlug: "ac-bagus-merk-apa",
  updatedAt: "2026-06-15",
  moneyLinks: [
    ["AC Kantor & Komersial", routes.katalogAcKantorKomersial, "Pilihan AC untuk toko, ruko, dan kebutuhan komersial."],
    ["Jual AC Purwokerto", routes.jualAcPurwokerto, "Konsultasi pembelian AC di area Purwokerto."],
    ["Jual AC Cilacap", routes.jualAcCilacap, "Konsultasi pembelian AC di area Cilacap."],
    ["Kalkulator PK AC", routes.kalkulatorPkAc, "Hitung kebutuhan PK untuk toko atau ruko Anda."],
  ],
  title: "AC untuk Toko dan Ruko Pilih PK Berapa? — Radja AC",
  description:
    "Panduan memilih kapasitas AC untuk toko dan ruko: cara menghitung PK berdasarkan luas, beban panas, pintu yang sering terbuka, dan jumlah pengunjung.",
  h1: "AC untuk toko dan ruko pilih PK berapa?",
  eyebrow: "Panduan AC Komersial",
  readTime: "7 menit baca",
  intro:
    "Memilih AC untuk toko dan ruko berbeda dengan memilih AC untuk kamar tidur. Ada faktor tambahan seperti pintu yang sering terbuka, jumlah pengunjung, panas dari lampu dan peralatan, serta jam operasional yang panjang. Artikel ini membantu Anda menentukan kapasitas PK yang tepat.",
  sections: [
    {
      heading: "Kenapa toko butuh PK lebih besar dari rumah?",
      body: [
        "Ruangan toko dengan luas yang sama dengan kamar rumah biasanya butuh kapasitas AC lebih besar. Alasannya: pintu sering terbuka saat pelanggan keluar masuk, ada panas dari lampu display dan peralatan, dan jumlah orang di dalam ruangan lebih banyak.",
        "Jika Anda menggunakan patokan PK untuk kamar rumah, AC toko akan terasa kurang dingin dan bekerja terlalu keras. Ini mempercepat kerusakan dan membuat tagihan listrik lebih tinggi.",
      ],
    },
    {
      heading: "Panduan umum PK untuk toko dan ruko",
      body: [
        "Toko kecil (15-20 m²): minimal 1 PK, lebih aman 1.5 PK jika pintu sering terbuka. Toko sedang (20-30 m²): 1.5-2 PK tergantung beban panas. Ruko 2 lantai: pertimbangkan 2 unit terpisah untuk setiap lantai.",
        "Angka ini adalah panduan awal. Kondisi spesifik seperti arah matahari, jumlah kaca, dan jenis usaha bisa mengubah kebutuhan. Toko makanan dengan kompor atau oven butuh kapasitas lebih besar.",
      ],
    },
    {
      heading: "Faktor yang menambah kebutuhan PK",
      body: [
        "Pintu yang sering terbuka: setiap kali pintu terbuka, udara dingin keluar dan udara panas masuk. Toko dengan traffic tinggi butuh kapasitas ekstra untuk mengkompensasi ini.",
        "Panas dari peralatan: lampu display, komputer kasir, kulkas display, dan peralatan lain menghasilkan panas. Semakin banyak peralatan, semakin besar kebutuhan pendinginan.",
        "Jumlah orang: setiap orang menghasilkan panas tubuh sekitar 100 watt. Toko yang ramai dengan 10-20 orang sekaligus butuh kapasitas lebih besar.",
      ],
    },
    {
      heading: "Inverter atau standard untuk toko?",
      body: [
        "Untuk toko yang buka 8-12 jam sehari, inverter sering lebih hemat dalam jangka panjang. Meski harga awal lebih tinggi, efisiensi listrik untuk pemakaian panjang bisa menghemat biaya operasional.",
        "AC standard masih masuk akal untuk toko dengan jam operasional pendek atau anggaran awal yang ketat. Yang penting kapasitas PK harus sesuai agar AC tidak bekerja terlalu keras.",
      ],
    },
    {
      heading: "Cara mendapatkan rekomendasi yang tepat",
      body: [
        "Kirim data toko Anda: luas ruangan, tinggi plafon, jenis usaha, jam operasional, dan perkiraan jumlah pengunjung. Foto ruangan juga membantu untuk melihat kondisi kaca, pintu, dan sumber panas.",
        "Tim Radja AC akan membantu menghitung kebutuhan PK yang tepat dan merekomendasikan tipe AC yang sesuai dengan anggaran dan kebutuhan operasional toko Anda.",
      ],
    },
  ],
  faqs: [
    {
      question: "Toko 4x5 meter butuh AC berapa PK?",
      answer:
        "Toko 20 m² umumnya butuh minimal 1.5 PK. Jika pintu sering terbuka, banyak lampu, atau ramai pengunjung, pertimbangkan 2 PK untuk kenyamanan yang lebih baik.",
    },
    {
      question: "Kenapa AC toko saya tidak dingin padahal baru?",
      answer:
        "Kemungkinan besar kapasitas PK kurang untuk beban toko. Toko dengan pintu sering terbuka dan banyak pengunjung butuh PK lebih besar dari perhitungan standar.",
    },
    {
      question: "Ruko 2 lantai pakai 1 AC besar atau 2 AC kecil?",
      answer:
        "Lebih baik 2 AC terpisah untuk setiap lantai. Ini lebih efisien karena Anda bisa menyalakan hanya lantai yang dipakai, dan pendinginan lebih merata.",
    },
    {
      question: "AC toko harus inverter?",
      answer:
        "Tidak harus, tapi inverter lebih hemat untuk toko yang buka 8+ jam sehari. Untuk jam operasional pendek atau anggaran ketat, standard masih bisa dipertimbangkan.",
    },
  ],
  ctaLabel: "Konsultasi AC Toko/Ruko",
  waIntent: "konsultasi memilih PK AC untuk toko atau ruko",
  relatedLinks: [
    ["AC Kantor & Komersial", routes.katalogAcKantorKomersial],
    ["Kalkulator PK AC", routes.kalkulatorPkAc],
    ["AC 1.5 PK", routes.katalogAcSatuSetengahPk],
    ["AC 2 PK", routes.katalogAcDuaPk],
    ["Kontak Radja AC", routes.kontak],
  ],
};
