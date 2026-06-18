import { routes } from "@/content/routes";

export const panduanInstalasiAcBaru = {
  slug: "panduan-instalasi-ac-baru",
  path: routes.artikelPanduanInstalasiAcBaru,
  cluster: "informational",
  role: "supporting",
  intent: "informational",
  parentSlug: "panduan-beli-ac-baru",
  updatedAt: "2026-06-01",
  moneyLinks: [
    ["Pengiriman & Pemasangan", routes.pengirimanPemasangan, "Lihat informasi pemasangan AC baru yang rapi dan berdasarkan kondisi lokasi."],
    ["AC 1/2 PK", routes.katalogAcSetengahPk, "Pahami harga unit vs paket pasang sebelum memilih AC kamar atau kos."],
  ],
  title: "Panduan Instalasi AC Baru | Cek Indoor, Outdoor, Pipa & Listrik",
  description:
    "Panduan sebelum memasang AC baru: cek posisi indoor, outdoor, jalur pipa, drainase, listrik, dan kebutuhan ruangan agar tidak salah pilih unit.",
  h1: "Panduan instalasi AC baru sebelum unit dipasang",
  eyebrow: "Panduan Instalasi",
  readTime: "5 menit baca",
  intro:
    "Saat membeli AC baru, pilihan merek dan kapasitas PK memang penting. Namun hasil akhirnya juga dipengaruhi titik pemasangan, posisi outdoor, jalur pipa, drainase, dan kesiapan listrik. Karena itu, calon pembeli sebaiknya memahami hal dasar instalasi sebelum menentukan unit AC.",
  sections: [
    {
      heading: "Kenapa instalasi perlu dipikirkan sebelum membeli AC?",
      body: [
        "AC yang kapasitasnya sudah benar tetap bisa kurang nyaman jika titik indoor, outdoor, pipa, atau pembuangan air tidak direncanakan dengan baik. Instalasi yang kurang tepat bisa membuat ruangan lama dingin, suara lebih mengganggu, air menetes, atau tampilan ruangan kurang rapi.",
        "Sebelum membeli AC, lebih aman jika pembeli sudah menyiapkan ukuran ruangan, foto calon titik indoor, foto area outdoor, dan informasi daya listrik. Data sederhana ini membantu tim Radja AC memberi arahan unit dan opsi pemasangan yang lebih masuk akal.",
      ],
    },
    {
      heading: "Cek posisi indoor dan arah hembusan udara",
      body: [
        "Unit indoor sebaiknya dipasang di posisi yang tidak terhalang lemari, gorden tebal, plafon terlalu dekat, atau sekat ruangan. Arah hembusan udara juga perlu diperhatikan agar ruangan terasa merata, bukan hanya dingin di satu titik.",
        "Untuk kamar tidur, ruang keluarga, toko kecil, atau ruang kerja, posisi indoor yang rapi dan tepat bisa membuat AC bekerja lebih nyaman.",
      ],
    },
    {
      heading: "Outdoor butuh sirkulasi udara yang baik",
      body: [
        "Outdoor AC membutuhkan ruang buang panas yang cukup. Jika outdoor terlalu tertutup, terlalu dekat dinding, atau terkena panas berlebih tanpa sirkulasi, performa pendinginan bisa turun dan unit bekerja lebih berat.",
        "Sebelum menentukan AC, cek apakah lokasi outdoor aman, mudah dijangkau untuk perawatan, dan mendukung jalur pipa yang wajar. Untuk rumah bertingkat, ruko, atau area sempit, titik outdoor sebaiknya dibahas sejak awal.",
      ],
    },
    {
      heading: "Perhatikan pipa, drainase, dan listrik",
      body: [
        "Jalur pipa dan kabel yang rapi membantu tampilan ruangan tetap bersih. Drainase juga penting karena pembuangan air yang kurang tepat bisa menyebabkan tetesan, lembap, atau bekas air di dinding.",
        "Daya listrik dan jalur MCB perlu dicek agar sesuai dengan kebutuhan unit. Pembeli yang ragu antara AC standard, low watt, atau inverter sebaiknya menyampaikan daya listrik rumah saat konsultasi.",
      ],
    },
    {
      heading: "Cek biaya tambahan, garansi pasang, dan pembayaran",
      body: [
        "Kebutuhan seperti pipa tambahan, bracket, bobok tembok, akses tinggi, pemindahan titik, atau material tambahan bisa memengaruhi total biaya pemasangan. Karena itu, kondisi lokasi sebaiknya dibahas sebelum jadwal dipastikan.",
        "Untuk pemasangan yang dikerjakan melalui Radja AC, garansi pemasangan mengikuti ketentuan yang berlaku. Garansi unit mengikuti ketentuan resmi brand, sedangkan pembayaran seperti DP, transfer, atau COD dikonfirmasi setelah unit, alamat, dan opsi pemasangan jelas.",
      ],
    },
  ],
  faqs: [
    {
      question: "Kenapa instalasi perlu dipikirkan sebelum beli AC?",
      answer:
        "Karena hasil akhir dipengaruhi titik indoor, outdoor, jalur pipa, drainase, dan kesiapan listrik. Instalasi yang kurang tepat bisa membuat ruangan lama dingin, lebih berisik, atau air menetes meski PK sudah benar.",
    },
    {
      question: "Apa saja yang memengaruhi biaya pemasangan?",
      answer:
        "Panjang pipa, posisi outdoor, akses tinggi, bobok tembok, bracket, dan material tambahan bisa memengaruhi total biaya. Kondisi lokasi sebaiknya dibahas sebelum jadwal pemasangan dipastikan.",
    },
    {
      question: "Apakah garansi pemasangan tersedia?",
      answer:
        "Untuk pemasangan yang dikerjakan melalui Radja AC, garansi pemasangan mengikuti ketentuan yang berlaku. Garansi unit tetap mengikuti ketentuan resmi brand.",
    },
  ],
  ctaLabel: "Konsultasi AC Baru & Opsi Pemasangan",
  waIntent: "konsultasi beli AC baru dan opsi pemasangan",
  relatedLinks: [
    ["Jual AC", routes.jualAc],
    ["Katalog AC", routes.katalog],
    ["Kalkulator PK AC", routes.kalkulatorPkAc],
    ["Pengiriman & Pemasangan", routes.pengirimanPemasangan],
    ["Kontak Radja AC", routes.kontak],
  ],
};
