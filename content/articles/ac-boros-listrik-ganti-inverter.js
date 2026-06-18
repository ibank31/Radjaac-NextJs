import { routes } from "@/content/routes";

export const acBorosListrikGantiInverter = {
  slug: "ac-boros-listrik-ganti-inverter",
  path: routes.artikelAcBorosListrikGantiInverter,
  cluster: "comparison",
  role: "supporting",
  intent: "commercial",
  parentSlug: "ac-inverter-vs-low-watt",
  updatedAt: "2026-06-13",
  moneyLinks: [
    ["AC Inverter", routes.katalogAcInverter, "Cek pilihan AC inverter untuk pemakaian rutin yang lebih hemat."],
    ["AC Low Watt", routes.katalogAcLowWatt, "Cek AC low watt untuk rumah dengan daya listrik terbatas."],
    ["Kalkulator PK AC", routes.kalkulatorPkAc, "Hitung PK yang tepat sebelum beli unit pengganti."],
    ["Kontak Radja AC", routes.kontak, "Kirim tagihan listrik dan ukuran ruangan untuk rekomendasi unit."],
  ],
  title: "AC Boros Listrik Tiap Bulan? Hitung Untung Ganti ke Inverter",
  description:
    "Tagihan listrik naik terus gara-gara AC lama? Hitung selisih konsumsi AC lama vs inverter baru dan kapan titik balik investasinya tercapai.",
  h1: "AC boros listrik tiap bulan? hitung untung ganti ke inverter",
  eyebrow: "Hemat Listrik AC",
  readTime: "5 menit baca",
  intro:
    "Kalau tagihan listrik kamu naik dan AC adalah tersangka utamanya, ada dua kemungkinan: PK tidak sesuai ruangan, atau unit sudah tua dan tidak efisien. Dua-duanya punya solusi yang sama — ganti ke unit baru yang tepat. Yang perlu dihitung adalah seberapa cepat investasinya balik.",
  sections: [
    {
      heading: "Kenapa AC lama bisa tiba-tiba boros?",
      body: [
        "AC yang sudah berumur 5 tahun ke atas mulai kehilangan efisiensi. Kompressor bekerja lebih keras untuk hasil yang sama, freon bisa berkurang perlahan, dan filter yang jarang dibersihkan membuat aliran udara terhambat. Semua itu berujung ke konsumsi listrik yang lebih tinggi.",
        "Selain itu, kalau PK unit tidak sesuai ukuran ruangan, AC akan terus bekerja tanpa pernah mencapai suhu target — dan itu artinya listrik jalan terus tanpa ruangan benar-benar dingin.",
      ],
    },
    {
      heading: "Berapa selisih konsumsi AC lama vs inverter baru?",
      body: [
        "AC non-inverter lama yang sudah aus bisa mengonsumsi 900–1.200 watt per jam untuk kapasitas 1 PK. AC inverter baru dengan kapasitas sama, saat suhu sudah stabil, bisa turun ke 300–500 watt per jam. Kalau AC menyala 8 jam per hari, selisihnya bisa 3–6 kWh per hari.",
        "Dengan tarif listrik rumah tangga sekitar Rp 1.500 per kWh, selisih itu setara Rp 4.500–9.000 per hari, atau Rp 135.000–270.000 per bulan. Dalam setahun, penghematan itu bisa mencapai Rp 1,6–3,2 juta.",
      ],
    },
    {
      heading: "Kapan titik balik investasi unit baru tercapai?",
      body: [
        "Kalau penghematan listrik Rp 200.000 per bulan dan harga unit inverter baru (termasuk pasang) sekitar Rp 4–5 juta, titik balik investasinya sekitar 20–25 bulan. Kurang dari 2 tahun, dan setelah itu kamu murni hemat.",
        "Belum ditambah kamu tidak perlu keluar biaya servis lagi, dan unit baru punya garansi resmi brand yang melindungi 2–5 tahun ke depan.",
      ],
    },
    {
      heading: "PK yang tepat sama pentingnya dengan tipe inverter",
      body: [
        "Ganti ke inverter tapi PK-nya salah tidak akan menyelesaikan masalah. AC inverter 1/2 PK di ruangan 20 m² tetap akan bekerja keras dan boros. Ukur ruangan dulu, cek kondisi panas, dan tentukan PK yang sesuai sebelum memilih unit.",
        "Kirim ukuran ruangan, daya listrik, dan estimasi tagihan listrik sekarang ke tim Radja AC — tim bantu hitung unit inverter mana yang paling masuk akal untuk kondisi kamu.",
      ],
    },
  ],
  faqs: [
    {
      question: "AC inverter baru pasti lebih hemat dari AC lama saya?",
      answer:
        "Ya, asalkan PK-nya sesuai ruangan. AC inverter baru dengan komponen segar bekerja jauh lebih efisien dibanding unit lama yang kompressornya sudah aus. Penghematan paling terasa untuk pemakaian 6–8 jam per hari.",
    },
    {
      question: "Kalau daya listrik saya 900 watt, bisa pakai inverter?",
      answer:
        "Bisa, tapi pilih inverter low watt atau unit dengan tarikan daya awal yang rendah. Beberapa unit inverter 1/2 PK dirancang untuk daya terbatas. Kirim daya listrik dan ukuran ruangan untuk cek pilihan yang aman.",
    },
    {
      question: "Berapa lama AC inverter baru bisa balik modal dari penghematan listrik?",
      answer:
        "Rata-rata 18–30 bulan tergantung selisih konsumsi unit lama vs baru dan tarif listrik kamu. Semakin sering AC dipakai dan semakin boros unit lama, semakin cepat titik baliknya.",
    },
  ],
  ctaLabel: "Konsultasi Ganti ke AC Inverter",
  waIntent: "konsultasi AC boros listrik dan rekomendasi unit inverter pengganti",
  relatedLinks: [
    ["AC Inverter", routes.katalogAcInverter],
    ["AC Low Watt", routes.katalogAcLowWatt],
    ["Kalkulator PK AC", routes.kalkulatorPkAc],
    ["Biaya Servis vs Ganti Baru", routes.artikelBiayaServisVsGantiBaru],
    ["Kontak Radja AC", routes.kontak],
  ],
};
