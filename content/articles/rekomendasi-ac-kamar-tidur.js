import { routes } from "@/content/routes";

export const rekomendasiAcKamarTidur = {
  slug: "rekomendasi-ac-kamar-tidur",
  path: routes.artikelRekomendasiAcKamarTidur,
  cluster: "commercial-investigation",
  role: "supporting",
  intent: "commercial",
  parentSlug: "ac-bagus-merk-apa",
  updatedAt: "2026-06-11",
  moneyLinks: [
    ["AC 1/2 PK", routes.katalogAcSetengahPk, "Lihat kapasitas yang umum untuk kamar tidur kecil hingga sedang."],
    ["AC Inverter", routes.katalogAcInverter, "Cek pilihan inverter untuk tidur yang lebih nyaman dan suhu stabil."],
    ["Kalkulator PK AC", routes.kalkulatorPkAc, "Cek estimasi PK sesuai luas dan kondisi kamar tidur."],
    ["Kontak Radja AC", routes.kontak, "Kirim foto kamar dan titik pemasangan untuk rekomendasi yang lebih tepat."],
  ],
  title: "Rekomendasi AC untuk Kamar Tidur | Cek PK, Tipe & Posisi",
  description:
    "Rekomendasi AC untuk kamar tidur: cara menentukan PK, memilih tipe inverter atau low watt, dan posisi pemasangan agar tidur lebih nyaman dan hemat.",
  h1: "Rekomendasi AC untuk kamar tidur",
  eyebrow: "AC Kamar Tidur",
  readTime: "6 menit baca",
  keywords: ["AC kamar tidur", "rekomendasi AC kamar", "AC kamar hemat", "PK AC kamar"],
  intro:
    "Kamar tidur termasuk ruangan yang paling sering memakai AC dalam durasi panjang, biasanya sepanjang malam. Karena itu, pilihan AC untuk kamar tidur sebaiknya mengutamakan kenyamanan suhu, ketenangan, dan efisiensi listrik, bukan hanya harga unit yang paling ringan.",
  sections: [
    {
      heading: "Mulai dari ukuran dan kondisi kamar",
      body: [
        "Sebelum memilih unit, cek luas kamar, tinggi plafon, jumlah penghuni, dan apakah dinding terkena panas matahari sore. Kamar di lantai atas atau dengan banyak kaca biasanya butuh kapasitas lebih besar.",
        "Data sederhana ini membantu menentukan PK yang tepat. Kamar yang teduh dan kecil berbeda kebutuhannya dengan kamar luas yang panas, meskipun ukurannya terlihat mirip.",
      ],
    },
    {
      heading: "PK yang umum untuk kamar tidur",
      body: [
        "Kamar tidur berukuran kecil hingga sedang sering masuk rentang 1/2 PK sampai 1 PK dalam kondisi normal. Kamar yang lebih luas atau panas bisa membutuhkan 1.5 PK agar suhu cepat nyaman.",
        "Angka ini bukan patokan kaku. Cek estimasi kebutuhan PK lebih dulu agar tidak memilih kapasitas yang terlalu kecil sehingga AC bekerja berat semalaman.",
      ],
    },
    {
      heading: "Inverter untuk tidur yang lebih nyaman",
      body: [
        "Karena kamar tidur dipakai berjam-jam, AC inverter sering terasa lebih nyaman. Suhu cenderung stabil dan kerja kompresor menyesuaikan, sehingga cocok untuk pemakaian malam yang panjang.",
        "Untuk pemakaian rutin setiap malam, inverter biasanya memberi keseimbangan yang baik antara kenyamanan dan efisiensi listrik dibanding tipe standard.",
      ],
    },
    {
      heading: "Low watt untuk kamar dengan daya terbatas",
      body: [
        "Jika daya listrik rumah terbatas atau kamar berada di kost dan kontrakan, AC low watt bisa menjadi pilihan agar listrik tidak mudah turun saat AC dinyalakan bersama perangkat lain.",
        "Pastikan kapasitas PK tetap sesuai luas kamar. Low watt yang PK-nya terlalu kecil tetap akan terasa kurang dingin dan bekerja berat.",
      ],
    },
    {
      heading: "Posisi pemasangan agar tidur tetap nyaman",
      body: [
        "Hindari mengarahkan hembusan udara langsung ke tempat tidur agar tidak terlalu dingin di satu titik. Posisi indoor sebaiknya tidak terhalang lemari atau gorden tebal agar udara merata.",
        "Outdoor juga butuh sirkulasi yang baik. Kirim foto kamar dan titik pemasangan saat konsultasi agar rekomendasi unit dan posisi pasang lebih tepat.",
      ],
    },
  ],
  faqs: [
    {
      question: "Berapa PK AC yang cocok untuk kamar tidur?",
      answer:
        "Kamar tidur kecil hingga sedang umumnya cocok dengan 1/2 PK sampai 1 PK, sedangkan kamar luas atau panas bisa butuh 1.5 PK. Sebaiknya cek estimasi PK berdasarkan luas, plafon, dan kondisi panas kamar sebelum memutuskan.",
    },
    {
      question: "Lebih baik AC inverter atau standard untuk kamar tidur?",
      answer:
        "Untuk kamar tidur yang dipakai semalaman, inverter sering lebih nyaman karena suhu lebih stabil dan efisien untuk pemakaian lama. AC standard masih masuk akal bila pemakaian singkat dan anggaran awal lebih ketat.",
    },
    {
      question: "Apakah AC kamar tidur sebaiknya low watt?",
      answer:
        "Low watt cocok bila daya listrik rumah terbatas atau kamar di kost dan kontrakan. Jika daya mencukupi dan AC dipakai lama, inverter bisa lebih menguntungkan dari sisi kenyamanan. Sesuaikan dengan kondisi listrik Anda.",
    },
    {
      question: "Apakah arah hembusan AC memengaruhi kenyamanan tidur?",
      answer:
        "Ya. Hembusan yang langsung mengenai tubuh bisa terasa terlalu dingin dan kurang nyaman. Posisi indoor sebaiknya diatur agar udara menyebar merata, bukan terfokus ke arah tempat tidur.",
    },
  ],
  ctaLabel: "Konsultasi AC Kamar Tidur",
  waIntent: "konsultasi memilih AC untuk kamar tidur",
  relatedLinks: [
    ["AC 1/2 PK", routes.katalogAcSetengahPk],
    ["AC Inverter", routes.katalogAcInverter],
    ["Kalkulator PK AC", routes.kalkulatorPkAc],
    ["Kontak Radja AC", routes.kontak],
  ],
};
