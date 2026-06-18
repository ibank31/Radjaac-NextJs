import { routes } from "@/content/routes";

export const memilihAcUntukDaerahPesisir = {
  slug: "memilih-ac-untuk-daerah-pesisir",
  path: routes.artikelMemilihAcUntukDaerahPesisir,
  cluster: "informational",
  role: "supporting",
  intent: "commercial",
  parentSlug: "panduan-beli-ac-baru",
  updatedAt: "2026-06-15",
  moneyLinks: [
    ["Jual AC Cilacap", routes.jualAcCilacap, "Konsultasi pembelian AC di area pesisir Cilacap."],
    ["Jual AC Adipala", routes.jualAcAdipala, "Layanan AC untuk area Adipala dekat pantai."],
    ["Jual AC Tegal", routes.jualAcTegal, "Konsultasi pembelian AC di area pesisir Tegal."],
    ["Jual AC Pekalongan", routes.jualAcPekalongan, "Layanan AC untuk area pesisir Pekalongan."],
  ],
  title: "Memilih AC untuk Daerah Pesisir | Panduan Anti Korosi — Radja AC",
  description:
    "Panduan memilih AC untuk daerah pesisir: tips menghindari korosi akibat udara asin, pemilihan brand yang tahan, dan perawatan khusus untuk area pantai.",
  h1: "Memilih AC untuk daerah pesisir: panduan anti korosi",
  eyebrow: "AC Daerah Pesisir",
  readTime: "7 menit baca",
  intro:
    "Daerah pesisir seperti Cilacap, Adipala, Tegal, dan Pekalongan punya tantangan khusus untuk AC: udara asin yang mempercepat korosi. Tanpa pemilihan unit yang tepat dan perawatan yang benar, AC di daerah pesisir bisa lebih cepat rusak. Artikel ini membantu Anda memilih dan merawat AC untuk kondisi pesisir.",
  sections: [
    {
      heading: "Kenapa AC di pesisir lebih cepat rusak?",
      body: [
        "Udara di daerah pesisir mengandung garam (sodium chloride) yang bersifat korosif. Garam ini menempel pada komponen AC, terutama unit outdoor yang terpapar langsung, dan mempercepat proses karat.",
        "Komponen yang paling rentan adalah kondensor (coil outdoor), rangka outdoor, dan sambungan pipa. Korosi pada kondensor menurunkan efisiensi pendinginan, sedangkan korosi pada rangka bisa memperpendek umur unit.",
      ],
    },
    {
      heading: "Pilih AC dengan fitur anti-korosi",
      body: [
        "Beberapa brand menyediakan seri khusus untuk daerah pesisir dengan coating anti-korosi pada kondensor dan rangka outdoor. Fitur ini menambah perlindungan terhadap udara asin.",
        "Jika tidak tersedia seri khusus, pilih AC dengan kondensor yang dilapisi (coated) dan rangka outdoor dari material yang lebih tahan korosi. Konsultasikan kebutuhan ini saat memilih unit.",
      ],
    },
    {
      heading: "Posisi pemasangan outdoor yang tepat",
      body: [
        "Posisi outdoor sangat memengaruhi paparan udara asin. Jika memungkinkan, pasang outdoor di sisi yang tidak langsung menghadap laut atau terlindung dari angin laut.",
        "Hindari memasang outdoor terlalu dekat dengan tanah atau area yang sering terkena percikan air laut. Ketinggian yang cukup membantu mengurangi paparan langsung.",
      ],
    },
    {
      heading: "Perawatan rutin lebih penting di pesisir",
      body: [
        "Di daerah pesisir, perawatan AC harus lebih sering. Cuci kondensor outdoor minimal setiap 2-3 bulan untuk membersihkan endapan garam sebelum menyebabkan korosi.",
        "Periksa juga kondisi rangka dan sambungan secara berkala. Jika terlihat tanda-tanda karat, segera bersihkan dan berikan perlindungan tambahan seperti cat anti-karat.",
      ],
    },
    {
      heading: "Area layanan pesisir Radja AC",
      body: [
        "Radja AC melayani area pesisir termasuk Cilacap, Adipala, Kesugihan, Kroya, Tegal, dan Pekalongan. Untuk kebutuhan AC di area ini, tim bisa membantu merekomendasikan unit yang lebih tahan untuk kondisi pesisir.",
        "Konsultasikan lokasi spesifik Anda — seberapa dekat dengan pantai, arah angin dominan, dan kondisi lingkungan — untuk mendapatkan rekomendasi yang lebih tepat.",
      ],
    },
  ],
  faqs: [
    {
      question: "AC biasa bisa dipakai di daerah pesisir?",
      answer:
        "Bisa, tapi umurnya cenderung lebih pendek tanpa perawatan ekstra. Lebih baik pilih AC dengan fitur anti-korosi atau lakukan perawatan lebih sering untuk memperpanjang umur unit.",
    },
    {
      question: "Berapa sering harus cuci AC di daerah pesisir?",
      answer:
        "Cuci kondensor outdoor minimal setiap 2-3 bulan, lebih sering jika lokasi sangat dekat pantai. Filter indoor juga perlu dibersihkan lebih rutin.",
    },
    {
      question: "Brand AC apa yang bagus untuk pesisir?",
      answer:
        "Beberapa brand punya seri dengan coating anti-korosi. Konsultasikan kebutuhan spesifik Anda — lokasi, jarak dari pantai, anggaran — untuk rekomendasi yang sesuai.",
    },
    {
      question: "Rumah saya 2 km dari pantai, perlu AC khusus pesisir?",
      answer:
        "Pada jarak 2 km, paparan udara asin sudah berkurang signifikan. AC standar dengan perawatan rutin biasanya cukup. Jika lebih dekat dari 500 meter, pertimbangkan fitur anti-korosi.",
    },
  ],
  ctaLabel: "Konsultasi AC Daerah Pesisir",
  waIntent: "konsultasi memilih AC untuk daerah pesisir anti korosi",
  relatedLinks: [
    ["Jual AC Cilacap", routes.jualAcCilacap],
    ["Jual AC Adipala", routes.jualAcAdipala],
    ["Jual AC Tegal", routes.jualAcTegal],
    ["Jual AC Pekalongan", routes.jualAcPekalongan],
    ["Kontak Radja AC", routes.kontak],
  ],
};
