import { routes } from "@/content/routes";

export const acInverterVsLowWatt = {
  slug: "ac-inverter-vs-low-watt",
  path: routes.artikelAcInverterVsLowWatt,
  cluster: "comparison",
  role: "pillar",
  intent: "commercial",
  parentSlug: null,
  updatedAt: "2026-06-11",
  moneyLinks: [
    ["AC Inverter", routes.katalogAcInverter, "Cek pilihan AC inverter untuk pemakaian rutin dan suhu stabil."],
    ["AC Low Watt", routes.katalogAcLowWatt, "Cek pilihan AC untuk rumah dengan daya listrik terbatas."],
    ["Kalkulator PK AC", routes.kalkulatorPkAc, "Hitung estimasi PK agar pilihan tipe tidak salah kapasitas."],
    ["Pengiriman & Pemasangan", routes.pengirimanPemasangan, "Cek kebutuhan lokasi, material, garansi pasang, dan jadwal sebelum order."],
  ],
  title: "AC Inverter vs Low Watt | Mana yang Cocok untuk Rumah?",
  description:
    "Bingung pilih AC inverter atau low watt? Pahami beda fungsi, cocok untuk siapa, risiko salah pilih, dan kapan sebaiknya cek PK dulu sebelum beli.",
  h1: "AC inverter vs low watt: mana yang lebih cocok?",
  eyebrow: "Panduan Tipe AC",
  readTime: "7 menit baca",
  intro:
    "AC inverter dan low watt sama-sama sering disebut hemat listrik, tapi fungsinya tidak sama. Pilihan unit dibaca dari daya listrik, durasi pemakaian, ukuran ruangan, dan anggaran.",
  sections: [
    {
      heading: "Jangan pilih AC hanya dari klaim hemat",
      body: [
        "Label hemat listrik memang menarik, tapi tidak cukup untuk menentukan AC yang tepat. Low watt fokus membantu tarikan daya lebih ringan, sedangkan inverter fokus menjaga kerja kompresor lebih stabil untuk pemakaian rutin.",
        "Kalau ruangan terlalu besar, panas, atau kapasitas PK kurang, AC tetap bisa bekerja berat. Jadi sebelum membahas merek dan harga, cek dulu ukuran ruangan, daya listrik, dan pola pemakaian harian.",
      ],
    },
    {
      heading: "Pilih low watt kalau daya listrik terbatas",
      body: [
        "AC low watt cocok dipertimbangkan untuk rumah, kost, atau kontrakan dengan daya listrik terbatas. Fokusnya adalah membuat tarikan daya lebih ringan sehingga risiko listrik turun bisa lebih terkendali.",
        "Namun low watt bukan berarti otomatis paling dingin atau paling hemat bulanan. Jika PK terlalu kecil untuk ruangan, AC bisa lama dingin dan bekerja lebih berat.",
      ],
    },
    {
      heading: "Pilih inverter kalau AC sering dipakai lama",
      body: [
        "AC inverter lebih cocok untuk kamar tidur, ruang keluarga, atau ruang kerja yang dipakai berjam-jam. Saat suhu mendekati target, kerja kompresor bisa menyesuaikan sehingga suhu ruangan terasa lebih stabil.",
        "Manfaat inverter paling terasa untuk pemakaian rutin. Kalau AC hanya dinyalakan sebentar-sebentar, selisih manfaatnya bisa tidak sebesar yang dibayangkan.",
      ],
    },
    {
      heading: "AC standard tetap masuk akal untuk kondisi tertentu",
      body: [
        "Tidak semua pembeli harus mengambil inverter atau low watt. AC standard masih bisa masuk akal untuk pemakaian sederhana, anggaran awal lebih ketat, dan ruangan yang tidak terlalu berat.",
        "Yang penting jangan asal ambil standard hanya karena harga awal lebih ringan. Pastikan kapasitas PK, paket pemasangan, dan daya listrik tetap sesuai.",
      ],
    },
    {
      heading: "Cek stok, garansi, pembayaran, dan pemasangan sebelum memilih",
      body: [
        "Setelah tahu kecenderungan tipe yang cocok, cek lagi stok brand, kapasitas PK, garansi unit, dan kebutuhan pemasangan. Pilihan inverter atau low watt tetap perlu disesuaikan dengan lokasi indoor-outdoor, panjang pipa, daya listrik, dan pola pemakaian.",
        "Pembayaran seperti DP, transfer, atau COD bisa dikonfirmasi setelah pilihan unit, alamat pengiriman, jadwal, dan opsi pemasangan jelas. Jadi keputusan akhir sebaiknya tidak hanya dari label hemat listrik, tapi dari data ruangan dan kebutuhan pembelian.",
      ],
    },
  ],
  faqs: [
    {
      question: "Apa beda AC inverter dan low watt?",
      answer:
        "Inverter menjaga kerja kompresor lebih stabil untuk pemakaian lama, sedangkan low watt fokus meringankan tarikan daya untuk rumah dengan listrik terbatas. Keduanya hemat untuk tujuan yang berbeda.",
    },
    {
      question: "Mana yang lebih hemat listrik?",
      answer:
        "Untuk pemakaian rutin berjam-jam, inverter cenderung lebih efisien. Low watt lebih menolong agar listrik tidak mudah turun. Penghematan tetap dipengaruhi ketepatan PK dan kebiasaan pemakaian.",
    },
    {
      question: "Bagaimana cara memilih di antara keduanya?",
      answer:
        "Cek daya listrik rumah, durasi pemakaian, dan ukuran ruangan. Sampaikan data tersebut saat konsultasi agar pilihan inverter, low watt, atau standard bisa dicocokkan dengan kebutuhan.",
    },
  ],
  ctaLabel: "Cek Pilihan Inverter / Low Watt",
  waIntent: "konsultasi memilih AC inverter low watt atau standard",
  relatedLinks: [
    ["AC Inverter", routes.katalogAcInverter],
    ["AC Low Watt", routes.katalogAcLowWatt],
    ["Kalkulator PK AC", routes.kalkulatorPkAc],
    ["Kontak Radja AC", routes.kontak],
  ],
};
