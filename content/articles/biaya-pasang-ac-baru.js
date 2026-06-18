import { routes } from "@/content/routes";

export const biayaPasangAcBaru = {
  slug: "biaya-pasang-ac-baru",
  path: routes.artikelBiayaPasangAcBaru,
  cluster: "commercial-investigation",
  role: "supporting",
  intent: "commercial",
  parentSlug: "ac-bagus-merk-apa",
  updatedAt: "2026-06-11",
  moneyLinks: [
    ["Pengiriman & Pemasangan", routes.pengirimanPemasangan, "Pahami cakupan pemasangan standar, material, garansi pasang, dan jadwal."],
    ["AC Split Rumah", routes.katalogAcSplitRumah, "Lihat pilihan unit rumah sambil memperkirakan kebutuhan pemasangan."],
    ["Ganti AC Lama ke Unit Baru", routes.gantiAcBaruPurwokerto, "Solusi bila AC lama sudah tidak ekonomis diperbaiki: ganti AC lama dengan unit baru."],
    ["Kontak Radja AC", routes.kontak, "Kirim foto titik indoor-outdoor dan jarak pipa untuk estimasi yang lebih akurat."],
  ],
  title: "Biaya Pasang AC Baru: Apa Saja yang Dihitung | Radja AC",
  description:
    "Pahami komponen biaya pasang AC baru: jasa pemasangan, material standar, kebutuhan tambahan sesuai lokasi, dan cara meminta estimasi yang lebih akurat.",
  h1: "Biaya pasang AC baru: apa saja yang dihitung",
  eyebrow: "Biaya Pemasangan",
  readTime: "6 menit baca",
  keywords: ["biaya pasang AC", "pemasangan AC baru", "material pasang AC", "jasa pasang AC"],
  intro:
    "Saat membeli AC baru, total yang dikeluarkan tidak hanya harga unit. Ada komponen pemasangan yang ikut menentukan kenyamanan dan kerapian hasil akhir. Memahami apa saja yang dihitung membantu Anda menyiapkan anggaran lebih realistis dan menghindari kaget di kemudian hari.",
  sections: [
    {
      heading: "Biaya pasang bukan hanya harga unit",
      body: [
        "Harga unit adalah satu bagian, sedangkan pemasangan adalah bagian lain yang sama pentingnya. AC yang bagus tetap bisa kurang optimal bila dipasang seadanya tanpa memperhatikan jalur pipa, posisi outdoor, dan kelistrikan.",
        "Karena itu, saat menanyakan harga, pastikan dijelaskan apakah penawaran sudah mencakup pemasangan standar atau masih terpisah. Ini membuat perbandingan antarpenawaran jadi lebih adil.",
      ],
    },
    {
      heading: "Komponen standar dalam pemasangan",
      body: [
        "Pemasangan standar umumnya mencakup jasa pasang, pipa dengan panjang standar, kabel, bracket outdoor, selang pembuangan, dan proses vakum agar sistem bekerja baik. Komponen ini menjadi dasar agar AC bisa dipakai dengan benar.",
        "Setiap penyedia bisa punya batas standar berbeda, misalnya panjang pipa bawaan. Menanyakan detail ini sejak awal membantu memahami sampai mana cakupan paket standar.",
      ],
    },
    {
      heading: "Material tambahan yang menyesuaikan lokasi",
      body: [
        "Jika kebutuhan melebihi standar, biasanya muncul tambahan seperti pipa ekstra, bracket khusus, pekerjaan bobok tembok, atau pelindung pipa. Tambahan ini wajar karena setiap lokasi punya kondisi berbeda.",
        "Tambahan bukan biaya tersembunyi selama dijelaskan sejak awal. Maka, kondisi ruangan dan jarak indoor ke outdoor sebaiknya dibahas sebelum jadwal pemasangan ditetapkan.",
      ],
    },
    {
      heading: "Faktor lokasi: pipa, outdoor, akses, dan ketinggian",
      body: [
        "Jarak antara unit indoor dan outdoor memengaruhi panjang pipa dan kabel. Outdoor yang dipasang di tempat tinggi atau sulit dijangkau bisa membutuhkan upaya tambahan agar aman dan rapi.",
        "Rumah bertingkat, ruko, atau area sempit perlu perhatian khusus pada akses dan sirkulasi outdoor. Faktor-faktor ini ikut memengaruhi estimasi pemasangan secara keseluruhan.",
      ],
    },
    {
      heading: "Cara meminta estimasi yang lebih akurat",
      body: [
        "Untuk estimasi yang mendekati kenyataan, siapkan foto titik indoor, foto area outdoor, perkiraan jarak keduanya, dan informasi daya listrik. Sebutkan juga apakah dinding berupa tembok, gypsum, atau bahan lain.",
        "Dengan data ini, tim Radja AC bisa membantu menjelaskan cakupan pemasangan standar dan kemungkinan kebutuhan tambahan, sehingga anggaran lebih jelas sebelum unit dipasang.",
      ],
    },
  ],
  faqs: [
    {
      question: "Apa saja yang termasuk dalam biaya pasang AC baru?",
      answer:
        "Umumnya mencakup jasa pemasangan, pipa panjang standar, kabel, bracket, selang pembuangan, dan proses vakum. Kebutuhan di luar standar seperti pipa tambahan atau bobok tembok dihitung terpisah sesuai kondisi lokasi.",
    },
    {
      question: "Kenapa biaya pasang AC bisa berbeda tiap rumah?",
      answer:
        "Karena kondisi lokasi berbeda. Jarak indoor ke outdoor, ketinggian pemasangan, jenis dinding, dan kebutuhan material tambahan membuat estimasi tiap rumah bisa tidak sama meskipun unitnya serupa.",
    },
    {
      question: "Apakah harga unit sudah termasuk pemasangan?",
      answer:
        "Tergantung penawaran. Sebagian sudah termasuk pemasangan standar, sebagian terpisah. Sebaiknya tanyakan sejak awal agar Anda bisa membandingkan total biaya, bukan hanya harga unitnya saja.",
    },
    {
      question: "Bagaimana cara mendapat estimasi biaya pasang yang akurat?",
      answer:
        "Kirim foto titik indoor dan outdoor, perkiraan jarak pipa, jenis dinding, dan informasi daya listrik. Data ini membantu tim Radja AC menjelaskan cakupan standar dan kemungkinan kebutuhan tambahan sebelum pemasangan.",
    },
  ],
  ctaLabel: "Konsultasi Biaya Pasang AC",
  waIntent: "konsultasi estimasi biaya pasang AC baru",
  relatedLinks: [
    ["Pengiriman & Pemasangan", routes.pengirimanPemasangan],
    ["AC Split Rumah", routes.katalogAcSplitRumah],
    ["Kontak Radja AC", routes.kontak],
  ],
};
