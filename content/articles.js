import { routes } from "@/content/routes";

export const articleItems = [
  {
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
  },
  {
    slug: "sharp-bey-purwokerto",
    path: routes.artikelSharpBeyPurwokerto,
    cluster: "brand-evaluation",
    role: "pillar",
    intent: "commercial",
      parentSlug: null,
    updatedAt: "2026-06-01",
    moneyLinks: [
      ["Jual AC Purwokerto", routes.jualAcPurwokerto, "Pusat konsultasi beli AC, cek brand, stok, harga, dan rekomendasi PK."],
      ["Kalkulator PK AC", routes.kalkulatorPkAc, "Cek estimasi kebutuhan PK sebelum memilih unit dan paket pemasangan."],
    ],
    title: "Sharp BEY Purwokerto | Cek Stok, PK & Opsi Pemasangan",
    description:
      "Catatan singkat sebelum memilih AC Sharp seri BEY di Purwokerto: cek kebutuhan PK, daya listrik, stok aktif, pengiriman, dan opsi pemasangan melalui Radja AC.",
    h1: "Sharp BEY Purwokerto: cek stok, PK, dan kebutuhan pemasangan",
    category: "Brand",
    readTime: "4 menit baca",
    excerpt:
      "Sharp BEY bisa masuk shortlist pembeli yang mencari AC Sharp untuk kamar, kost, rumah, atau usaha kecil. Pilihan akhir tetap perlu cek stok, PK, daya listrik, dan kebutuhan pemasangan.",
    sections: [
      {
        heading: "Mulai dari kebutuhan ruangan, bukan hanya nama model",
        body: [
          "Sebelum memilih Sharp BEY, kirim ukuran ruangan, daya listrik, jumlah unit, dan lokasi. Tim Radja AC mengecek apakah kapasitas PK, tipe unit, dan stok yang tersedia sesuai dengan kebutuhan.",
        ],
      },
      {
        heading: "Cek stok dan tipe yang tersedia",
        body: [
          "Ketersediaan tipe Sharp bisa berubah mengikuti stok aktif. Karena itu, halaman ini menjadi shortlist awal, sedangkan konfirmasi tipe, harga, promo, pengiriman, dan opsi pemasangan tetap dilakukan lewat WhatsApp.",
        ],
      },
      {
        heading: "Hitung kebutuhan pemasangan sejak awal",
        body: [
          "Total pembelian tidak hanya dipengaruhi harga unit. Panjang pipa, posisi outdoor, akses lokasi, kebutuhan bracket, dan material tambahan perlu dicek sebelum jadwal pemasangan disusun.",
        ],
      },
      {
        heading: "Bandingkan dengan brand atau tipe lain bila perlu",
        body: [
          "Jika Sharp BEY belum cocok dengan kebutuhan ruangan atau stok, tim Radja AC bisa membantu cek alternatif AC Sharp lain atau brand lain berdasarkan anggaran, daya listrik, dan penggunaan harian.",
        ],
      },
    ],
    ctaLabel: "Chat WhatsApp untuk cek AC Sharp BEY",
    waIntent: "konsultasi AC Sharp BEY dan ketersediaan stok",
    relatedLinks: [
      ["Jual AC Purwokerto", routes.jualAcPurwokerto],
      ["Kalkulator PK AC", routes.kalkulatorPkAc],
      ["AC Split Rumah", routes.katalogAcSplitRumah],
      ["Kontak Radja AC", routes.kontak],
    ],
    faqs: [
      {
        question: "Apakah Sharp BEY tersedia di Purwokerto?",
        answer:
          "Ketersediaan tipe Sharp BEY mengikuti stok aktif. Halaman ini menjadi shortlist awal, konfirmasi ketersediaan tetap dilakukan lewat WhatsApp.",
      },
      {
        question: "Sharp BEY cocok untuk ruangan seperti apa?",
        answer:
          "Sharp BEY bisa dipertimbangkan untuk kamar, kost, rumah, atau usaha kecil. Pilihan PK menyesuaikan ukuran ruangan dan daya listrik.",
      },
      {
        question: "Apakah pemasangan bisa sekalian diatur?",
        answer:
          "Bisa dibantu opsi pemasangan. Panjang pipa, posisi outdoor, akses lokasi, dan material tambahan perlu dicek sebelum jadwal disusun.",
      },
    ],
  },

  {
    slug: "ac-1-pk-untuk-ruangan-berapa",
    path: routes.artikelAcSatuPkUntukRuanganBerapa,
    cluster: "capacity-sizing",
    role: "pillar",
    intent: "informational",
    parentSlug: null,
    updatedAt: "2026-06-11",
    moneyLinks: [
      ["Kalkulator PK AC", routes.kalkulatorPkAc, "Hitung estimasi kebutuhan PK sebelum memilih 3/4 PK, 1 PK, atau 1.5 PK."],
      ["AC 1 PK", routes.katalogAcSatuPk, "Lihat pilihan AC 1 PK untuk kamar besar, ruang kerja, ruang tamu kecil, atau toko kecil."],
      ["AC 1.5 PK", routes.katalogAcSatuSetengahPk, "Bandingkan jika ruangan panas, lebih besar, atau sering dipakai banyak orang."],
      ["Pengiriman & Pemasangan", routes.pengirimanPemasangan, "Cek kebutuhan lokasi, material, garansi pasang, dan jadwal sebelum order."],
    ],
    title: "AC 1 PK Cocok untuk Ruangan Berapa? | Panduan Sebelum Order — Radja AC",
    description:
      "Panduan memilih AC 1 PK untuk kamar dan ruang keluarga. Cek ukuran ruangan, BTU, kondisi panas, daya listrik, dan kapan perlu naik atau turun kapasitas.",
    h1: "AC 1 PK cocok untuk ruangan berapa?",
    eyebrow: "Panduan PK AC",
    readTime: "6 menit baca",
    intro:
      "AC 1 PK memang populer, tapi jangan langsung beli hanya karena terasa aman di tengah. Salah kapasitas bisa membuat ruangan lama dingin, listrik terasa berat, dan biaya pembelian jadi kurang efisien.",
    sections: [
      {
        heading: "Jawaban cepat: biasanya sekitar 15–20 m²",
        body: [
          "Dalam kondisi normal, AC 1 PK biasanya masuk akal untuk ruangan sekitar 15–20 m². Contohnya kamar besar, ruang keluarga kecil, ruang kerja, atau ruangan tertutup yang tidak terlalu panas.",
          "Angka ini bukan aturan kaku. Kamar 15 m² yang panas sore bisa berbeda kebutuhannya dengan ruang 18 m² yang teduh dan tertutup.",
        ],
      },
      {
        heading: "Kapan 1 PK terasa kurang?",
        body: [
          "AC 1 PK bisa terasa kurang jika ruangan terlalu luas, banyak kaca, plafon tinggi, terkena matahari langsung, sering terbuka, atau dipakai banyak orang.",
          "Kalau dipaksakan, pembeli sering merasa AC tidak dingin padahal masalahnya bukan merek, melainkan kapasitas yang tidak sesuai.",
        ],
      },
      {
        heading: "Kapan cukup 3/4 PK atau perlu naik kapasitas?",
        body: [
          "Untuk kamar yang lebih kecil dan cukup teduh, 3/4 PK bisa lebih masuk akal daripada langsung memilih 1 PK. Untuk ruangan lebih besar atau panas, 1.5 PK bisa lebih aman dibanding memaksa 1 PK.",
          "Jangan pilih PK kecil hanya karena ingin hemat. PK yang terlalu kecil bisa membuat AC bekerja lama dan berat.",
        ],
      },
      {
        heading: "Cek daya listrik sebelum menentukan unit",
        body: [
          "Selain ukuran ruangan, daya listrik rumah wajib dicek. Untuk rumah dengan daya terbatas, pilihan low watt atau tipe tertentu menjadi pilihan.",
          "Pilihan final sebaiknya tidak hanya dari PK, tapi juga dari tipe AC, pola pemakaian, dan kesiapan listrik.",
        ],
      },
      {
        heading: "Lanjutkan ke stok, pemasangan, garansi, dan pembayaran",
        body: [
          "Setelah estimasi PK lebih jelas, cek stok AC 1 PK, pilihan standard/low watt/inverter, garansi unit, dan kebutuhan pemasangan. Posisi indoor-outdoor, panjang pipa, akses lokasi, dan material tambahan bisa memengaruhi total biaya.",
          "Pembayaran seperti DP, transfer, atau COD bisa dikonfirmasi setelah pilihan unit, alamat pengiriman, jadwal, dan opsi pemasangan jelas. Jadi hasil hitung PK sebaiknya dilanjutkan dengan data ruangan dan kebutuhan pembelian yang lengkap.",
        ],
      },
    ],
    faqs: [
      {
        question: "AC 1 PK cocok untuk ruangan berapa meter?",
        answer:
          "Dalam kondisi normal, AC 1 PK umumnya masuk akal untuk ruangan sekitar 15–20 m². Ruangan yang panas, banyak kaca, atau berplafon tinggi bisa membutuhkan kapasitas lebih besar.",
      },
      {
        question: "Apakah AC 1 PK boros listrik?",
        answer:
          "Tidak selalu. Konsumsi listrik lebih dipengaruhi kesesuaian PK dengan ruangan, tipe AC, dan pola pemakaian. PK yang terlalu kecil untuk ruangan besar justru membuat AC bekerja berat dan kurang efisien.",
      },
      {
        question: "Kapan sebaiknya pilih 3/4 PK atau 1.5 PK?",
        answer:
          "Untuk kamar kecil dan cukup teduh, 3/4 PK bisa lebih masuk akal. Untuk ruangan lebih besar atau panas, 1.5 PK lebih aman daripada memaksa 1 PK. Sebaiknya cek estimasi PK lebih dulu sebelum menentukan unit.",
      },
    ],
    ctaLabel: "Cek PK AC via WhatsApp",
    waIntent: "konsultasi AC 1 PK dan kebutuhan PK ruangan",
    relatedLinks: [
      ["Kalkulator PK AC", routes.kalkulatorPkAc],
      ["AC 1 PK", routes.katalogAcSatuPk],
      ["AC 1.5 PK", routes.katalogAcSatuSetengahPk],
      ["AC 1/2 PK", routes.katalogAcSetengahPk],
      ["Kontak Radja AC", routes.kontak],
    ],
  },
  {
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
  },

  {
    slug: "ac-kurang-dingin-belum-tentu-freon-habis",
    path: routes.artikelAcKurangDingin,
    cluster: "troubleshooting",
    role: "pillar",
    intent: "informational",
    parentSlug: null,
    updatedAt: "2026-06-11",
    moneyLinks: [
      ["Jual AC Purwokerto", routes.jualAcPurwokerto, "Konsultasi AC baru kalau unit lama sudah tidak efisien."],
      ["Kalkulator PK AC", routes.kalkulatorPkAc, "Cek apakah masalah kurang dingin bisa berawal dari kapasitas PK yang tidak sesuai."],
      ["Ganti AC Lama ke Unit Baru", routes.gantiAcBaruPurwokerto, "Pertimbangkan penggantian AC baru bila unit lama sudah tidak ekonomis diperbaiki."],
    ],
    title: "AC Kurang Dingin? Cek Layak Pakai atau Ganti Baru",
    description:
      "AC kurang dingin tidak selalu berarti freon habis. Cek kapasitas PK, usia unit, pemakaian, daya listrik, dan kapan lebih masuk akal mempertimbangkan AC baru.",
    h1: "AC kurang dingin: cek penyebab sebelum tambah freon",
    eyebrow: "Edukasi AC",
    readTime: "6 menit baca",
    intro:
      "Saat AC lama mulai kurang dingin, keputusan paling penting bukan langsung menambah biaya, tetapi mengevaluasi apakah unit masih layak dipakai atau lebih masuk akal diganti baru. Penyebabnya bisa dari kapasitas PK yang kurang, ruangan berubah fungsi, pemakaian berat, instalasi kurang ideal, atau usia unit yang sudah tinggi.",
    sections: [
      {
        heading: "AC kurang dingin perlu dilihat sebagai tanda evaluasi",
        body: [
          "AC yang mulai kurang dingin adalah sinyal untuk mengecek kecocokan unit dengan kebutuhan ruangan saat ini. Ruangan yang makin padat, plafon tinggi, sering terkena panas matahari, atau pintu sering terbuka bisa membuat AC lama terasa tidak kuat lagi.",
          "Jika unit sudah berumur, boros listrik, sering bermasalah, atau kapasitas PK sejak awal terlalu kecil, membeli AC baru dengan ukuran yang tepat sering lebih sehat daripada terus mengeluarkan biaya berulang.",
        ],
      },
      {
        heading: "Cek kapasitas PK sebelum menambah biaya",
        body: [
          "AC sering terasa kurang dingin saat kapasitas PK tidak sesuai luas dan kondisi ruangan. Jika unit terlalu kecil untuk ruangan besar, mesin bekerja berat, ruangan lambat dingin, dan konsumsi listrik terasa kurang efisien.",
          "Sebelum menambah biaya ke unit lama, cek ukuran ruangan, jumlah orang, sumber panas, arah matahari, dan daya listrik rumah. Dari data ini, pilihan AC standard, low watt, atau inverter bisa dicocokkan lebih tepat.",
        ],
      },
      {
        heading: "Tanda lebih masuk akal ganti AC baru",
        body: [
          "Pertimbangkan ganti AC baru jika unit sudah tua, sering kurang dingin, suara mulai kasar, listrik terasa boros, spare part sulit, atau biaya perbaikan mulai mendekati nilai unit baru.",
          "Ganti AC baru juga lebih masuk akal ketika kebutuhan ruangan berubah. Contohnya kamar berubah jadi ruang kerja, ruangan makin banyak perangkat elektronik, atau ruangan usaha butuh pendinginan lebih stabil sepanjang hari.",
        ],
      },
      {
        heading: "Checklist sebelum membeli AC pengganti",
        body: [
          "Siapkan ukuran ruangan, daya listrik, lokasi indoor dan outdoor, kebiasaan pemakaian, anggaran, dan merek yang diminati. Data ini membantu memilih AC dengan PK dan fitur yang sesuai.",
          "Untuk rumah dengan daya terbatas, AC low watt menjadi pilihan. Untuk pemakaian lama setiap hari, AC inverter sering lebih nyaman. Untuk toko, kantor, kost, atau banyak ruangan, stok dan jadwal pemasangan perlu dicek lebih awal.",
        ],
      },
    ],
    faqs: [
      {
        question: "AC kurang dingin apakah pasti freon habis?",
        answer:
          "Tidak selalu. Penyebab lain bisa kapasitas PK yang kurang, ruangan berubah fungsi, filter kotor, instalasi kurang ideal, atau usia unit yang sudah tinggi. Sebaiknya dievaluasi dulu sebelum menambah biaya.",
      },
      {
        question: "Kapan lebih baik ganti AC baru daripada memperbaiki?",
        answer:
          "Pertimbangkan ganti baru jika unit sudah tua, sering bermasalah, boros listrik, spare part sulit, atau biaya perbaikan mulai mendekati harga unit baru. Kebutuhan ruangan yang berubah juga jadi pertimbangan.",
      },
      {
        question: "Apa yang perlu dicek sebelum beli AC pengganti?",
        answer:
          "Siapkan ukuran ruangan, daya listrik, lokasi indoor dan outdoor, pola pemakaian, dan anggaran. Data ini membantu memilih PK dan tipe yang sesuai, serta mengecek stok dan jadwal pemasangan.",
      },
    ],
    ctaLabel: "Konsultasi Ganti AC Baru",
    waIntent: "konsultasi AC kurang dingin dan pertimbangan ganti AC baru",
    relatedLinks: [
      ["Ganti AC Baru Purwokerto", routes.gantiAcBaruPurwokerto],
      ["Kalkulator PK AC", routes.kalkulatorPkAc],
      ["AC Low Watt", routes.katalogAcLowWatt],
      ["AC Inverter", routes.katalogAcInverter],
      ["Kontak Radja AC", routes.kontak],
    ],
  },
  {
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
  },
  {
    slug: "cara-memilih-ac-untuk-kamar-3x4",
    path: routes.artikelCaraMemilihAcKamarTigaKaliEmpat,
    cluster: "capacity-sizing",
    role: "supporting",
    intent: "commercial",
    parentSlug: "ac-1-pk-untuk-ruangan-berapa",
    updatedAt: "2026-06-01",
    moneyLinks: [
      ["Kalkulator PK AC", routes.kalkulatorPkAc, "Cek apakah kamar 3x4 cukup 1/2 PK, 3/4 PK, atau perlu kapasitas lain."],
      ["AC Split Rumah", routes.katalogAcSplitRumah, "Panduan pilihan AC untuk kamar tidur, ruang keluarga, kos, dan rumah tinggal."],
    ],
    title: "Cara Memilih AC untuk Kamar 3x4 | Cek PK, Daya & Posisi Pasang",
    description:
      "Panduan memilih AC untuk kamar ukuran 3x4 meter, mulai dari kapasitas PK, tipe AC, daya listrik, sampai posisi pemasangan.",
    h1: "Cara memilih AC untuk kamar 3x4 meter",
    eyebrow: "Panduan Ruangan",
    readTime: "4 menit baca",
    intro:
      "Kamar ukuran 3x4 meter termasuk ukuran yang umum di rumah. Untuk ruangan seperti ini, pilihan AC tidak hanya ditentukan dari luas ruangan, tetapi juga kondisi panas, plafon, jumlah penghuni, pola pemakaian, dan daya listrik.",
    sections: [
      {
        heading: "Hitung kebutuhan dari kondisi kamar",
        body: [
          "Kamar 3x4 meter memiliki luas sekitar 12 m². Dalam kondisi normal, ruangan seperti ini sering masuk rentang 1/2 PK sampai 3/4 PK, tetapi bisa berubah jika kamar panas, plafon tinggi, atau sering terkena matahari langsung.",
          "Jika kamar di lantai atas, banyak kaca, atau dinding terkena panas sore, kebutuhan pendinginan bisa lebih besar dibanding kamar yang teduh.",
        ],
      },
      {
        heading: "Perhatikan daya listrik dan pola pemakaian",
        body: [
          "Untuk kamar yang dipakai setiap malam, kenyamanan dan kestabilan suhu penting diperhatikan. AC inverter menjadi pilihan jika pemakaian rutin dan anggaran tersedia.",
          "Kalau daya listrik rumah terbatas, AC low watt bisa menjadi pilihan yang lebih aman. Namun, tetap pastikan kapasitasnya cukup agar AC tidak bekerja terlalu berat.",
        ],
      },
      {
        heading: "Jangan abaikan posisi pemasangan",
        body: [
          "Posisi indoor sebaiknya tidak langsung terhalang lemari, tirai, atau plafon terlalu dekat. Outdoor juga perlu sirkulasi udara yang baik agar performa pendinginan tidak turun.",
          "Sebelum membeli, foto ruangan dan titik pemasangan bisa dikirim ke tim Radja AC agar rekomendasi unit dan opsi pemasangannya lebih tepat.",
        ],
      },
      {
        heading: "Mulai dari kalkulator PK sebelum tanya stok",
        body: [
          "Untuk kamar 3x4, cek kebutuhan PK dulu sebelum memilih brand. Setelah kapasitasnya lebih jelas, barulah bandingkan tipe standard, low watt, atau inverter sesuai anggaran dan daya listrik.",
          "Data yang paling membantu adalah ukuran ruangan, tinggi plafon, arah panas matahari, daya listrik, dan apakah AC dipakai hanya malam hari atau hampir sepanjang hari.",
        ],
      },
      {
        heading: "Cek stok, pemasangan, garansi, dan pembayaran",
        body: [
          "Setelah kapasitas PK lebih jelas, cek stok AC 1/2 PK atau opsi lain yang sesuai, pilihan brand, garansi unit, dan kebutuhan pemasangan. Posisi indoor-outdoor, panjang pipa, akses lokasi, dan material tambahan bisa memengaruhi total biaya.",
          "Pembayaran seperti DP, transfer, atau COD bisa dikonfirmasi setelah pilihan unit, alamat pengiriman, jadwal, dan opsi pemasangan jelas. Jadi rekomendasi untuk kamar 3x4 sebaiknya tetap dilanjutkan dengan data ruangan dan daya listrik yang lengkap.",
        ],
      },
    ],
    faqs: [
      {
        question: "Berapa PK AC untuk kamar 3x4 meter?",
        answer:
          "Kamar 3x4 meter (sekitar 12 m²) dalam kondisi normal sering masuk rentang 1/2 PK sampai 3/4 PK. Kamar yang panas, berplafon tinggi, atau terkena matahari sore bisa membutuhkan kapasitas lebih besar.",
      },
      {
        question: "Lebih baik inverter atau low watt untuk kamar 3x4?",
        answer:
          "Untuk pemakaian setiap malam, inverter sering lebih nyaman karena suhu lebih stabil. Bila daya listrik rumah terbatas, low watt lebih aman. Pastikan kapasitas PK tetap sesuai agar AC tidak bekerja berat.",
      },
      {
        question: "Apa yang perlu disiapkan sebelum konsultasi?",
        answer:
          "Siapkan ukuran kamar, tinggi plafon, arah panas matahari, daya listrik, dan pola pemakaian. Foto ruangan dan titik pemasangan membantu rekomendasi unit serta opsi pemasangan yang lebih tepat.",
      },
    ],
    ctaLabel: "Konsultasi AC Kamar 3x4",
    waIntent: "konsultasi memilih AC untuk kamar 3x4",
    relatedLinks: [
      ["Kalkulator PK AC", routes.kalkulatorPkAc],
      ["AC 1/2 PK", routes.katalogAcSetengahPk],
      ["AC Low Watt", routes.katalogAcLowWatt],
      ["AC Inverter", routes.katalogAcInverter],
      ["Kontak Radja AC", routes.kontak],
    ],
  },
  {
    slug: "ac-bagus-merk-apa",
    path: routes.artikelAcBagusMerkApa,
    cluster: "commercial-investigation",
    role: "pillar",
    intent: "commercial",
    parentSlug: null,
    updatedAt: "2026-06-11",
    moneyLinks: [
      ["AC Daikin", routes.brandDaikin, "Pertimbangkan Daikin untuk kebutuhan yang mengutamakan reputasi dan ketahanan; dokumen Authorized Dealer tersedia."],
      ["AC Gree", routes.brandGree, "Cek Gree untuk value pemakaian harian, didukung status Proshop Gree."],
      ["AC Split Rumah", routes.katalogAcSplitRumah, "Lihat pilihan AC untuk kamar, ruang keluarga, dan rumah tinggal sebelum memilih merk."],
      ["Kalkulator PK AC", routes.kalkulatorPkAc, "Cek estimasi PK agar merk yang dipilih dipasangkan dengan kapasitas yang tepat."],
    ],
    title: "AC yang Bagus Merk Apa untuk Rumah? | Cara Memilih Merk AC",
    description:
      "Bingung AC bagus merk apa untuk rumah? Pahami kelas merk AC, cara mencocokkan dengan PK, daya listrik, garansi, dan stok sebelum memutuskan beli.",
    h1: "AC yang bagus merk apa untuk rumah?",
    eyebrow: "Panduan Merk AC",
    readTime: "7 menit baca",
    keywords: ["AC bagus merk apa", "merk AC rumah", "pilih merk AC", "AC original"],
    intro:
      "Pertanyaan AC bagus merk apa hampir selalu muncul sebelum membeli. Jawabannya bukan satu merk tunggal, melainkan merk yang paling cocok dengan ukuran ruangan, daya listrik, anggaran, dan pola pemakaian. Radja AC menyediakan AC original multi-brand, jadi pilihan bisa disesuaikan dengan kebutuhan, bukan dipaksakan ke satu nama.",
    sections: [
      {
        heading: "Tidak ada satu merk yang paling bagus untuk semua rumah",
        body: [
          "Setiap merk punya karakter berbeda. Ada yang menonjol di reputasi dan ketahanan, ada yang menarik di sisi anggaran, dan ada yang seimbang untuk pemakaian harian. Karena itu, merk terbaik untuk tetangga belum tentu paling pas untuk ruangan Anda.",
          "Daripada mencari merk paling bagus secara umum, lebih masuk akal menentukan dulu kebutuhan ruangan. Dari sana, daftar merk yang masuk akal bisa dipersempit tanpa menebak-nebak.",
        ],
      },
      {
        heading: "Kenali kelas merk AC sesuai kebutuhan",
        body: [
          "Untuk kebutuhan yang mengutamakan reputasi dan ketahanan jangka panjang, Daikin sering masuk pertimbangan. Gree juga banyak dipilih untuk value harian dan didukung status Proshop Gree. Untuk beberapa brand seperti Daikin, Midea, Hisense, dan Sansui, dokumen Authorized Dealer tersedia di Radja AC.",
          "Untuk anggaran yang lebih ketat, brand seperti Sharp, Samsung, atau Panasonic bisa menjadi pilihan unit original; ketersediaan tipe dan stok dicek dulu sebelum order. Intinya, kelas merk dipilih dari kebutuhan, bukan sekadar nama yang paling sering didengar.",
        ],
      },
      {
        heading: "Cocokkan merk dengan kebutuhan PK dan daya listrik",
        body: [
          "Merk sebagus apa pun tetap perlu kapasitas PK yang sesuai. Ruangan yang luas, panas, atau berplafon tinggi membutuhkan kapasitas lebih besar, sedangkan kamar kecil yang teduh bisa cukup dengan PK lebih rendah.",
          "Daya listrik rumah juga menentukan. Untuk daya terbatas, tipe low watt lebih aman, sementara pemakaian rutin berjam-jam sering lebih nyaman dengan tipe inverter. Banyak merk menyediakan kedua tipe ini, jadi pilihan merk dan tipe sebaiknya ditentukan bersamaan.",
        ],
      },
      {
        heading: "Cek garansi, layanan, dan ketersediaan stok",
        body: [
          "Garansi unit mengikuti ketentuan resmi masing-masing brand, sedangkan garansi pemasangan mengikuti pekerjaan yang dikerjakan melalui Radja AC. Pertimbangkan juga kemudahan layanan dan ketersediaan unit saat dibutuhkan.",
          "Karena stok dan promo bisa berubah, konfirmasi tipe dan ketersediaan sebaiknya dilakukan sebelum memutuskan. Ini membantu memastikan merk yang dipilih memang tersedia dengan PK dan tipe yang sesuai.",
        ],
      },
      {
        heading: "Cara mempersempit pilihan merk sebelum membeli",
        body: [
          "Siapkan ukuran ruangan, tinggi plafon, daya listrik, anggaran awal, dan pola pemakaian. Dengan data ini, tim Radja AC bisa membantu membandingkan beberapa merk yang relevan beserta tipe yang cocok.",
          "Jika masih ragu antara dua atau tiga merk, bandingkan dari sisi kebutuhan harian dan kenyamanan, bukan hanya dari selisih harga awal yang terlihat di permukaan.",
        ],
      },
    ],
    faqs: [
      {
        question: "AC yang bagus merk apa untuk kamar rumah biasa?",
        answer:
          "Untuk kamar rumah biasa, banyak merk sudah cukup baik selama kapasitas PK sesuai luas ruangan dan daya listrik. Yang lebih menentukan kenyamanan adalah ketepatan PK dan tipe (standard, low watt, atau inverter), bukan sekadar nama merk.",
      },
      {
        question: "Apakah merk AC yang lebih mahal pasti lebih awet?",
        answer:
          "Tidak selalu. Harga lebih tinggi sering berkaitan dengan reputasi, fitur, dan layanan, tetapi keawetan juga dipengaruhi ketepatan kapasitas, kualitas pemasangan, dan perawatan rutin. Merk kelas menengah yang dipasang benar bisa awet untuk pemakaian harian.",
      },
      {
        question: "Radja AC menjual merk AC apa saja?",
        answer:
          "Radja AC menyediakan AC original multi-brand seperti Daikin, Gree, Midea, Hisense, Sharp, Samsung, Panasonic, dan Sansui. Ketersediaan tipe dan stok per merk bisa dicek lebih dulu sesuai kebutuhan ruangan Anda.",
      },
      {
        question: "Bagaimana cara memilih merk kalau anggaran terbatas?",
        answer:
          "Tentukan dulu PK yang dibutuhkan, lalu pilih merk yang menyediakan tipe sesuai daya listrik dan anggaran. Dengan begitu, anggaran terpakai untuk kapasitas yang tepat, bukan untuk fitur yang belum tentu Anda butuhkan.",
      },
    ],
    ctaLabel: "Konsultasi Pilih Merk AC",
    waIntent: "konsultasi memilih merk AC yang cocok untuk rumah",
    relatedLinks: [
      ["AC Daikin", routes.brandDaikin],
      ["AC Gree", routes.brandGree],
      ["AC Split Rumah", routes.katalogAcSplitRumah],
      ["Kalkulator PK AC", routes.kalkulatorPkAc],
      ["Kontak Radja AC", routes.kontak],
    ],
  },
  {
    slug: "ac-paling-hemat-listrik",
    path: routes.artikelAcPalingHematListrik,
    cluster: "commercial-investigation",
    role: "supporting",
    intent: "commercial",
    parentSlug: "ac-bagus-merk-apa",
    updatedAt: "2026-06-11",
    moneyLinks: [
      ["AC Inverter", routes.katalogAcInverter, "Cek AC inverter yang lebih efisien untuk pemakaian rutin berjam-jam."],
      ["AC Low Watt", routes.katalogAcLowWatt, "Lihat AC low watt untuk rumah dengan daya listrik terbatas."],
      ["Kalkulator PK AC", routes.kalkulatorPkAc, "Hitung kebutuhan PK agar AC tidak bekerja berat dan boros."],
      ["Kontak Radja AC", routes.kontak, "Konsultasikan daya listrik dan pola pemakaian untuk pilihan paling hemat."],
    ],
    title: "AC Paling Hemat Listrik untuk Rumah | Inverter vs Low Watt",
    description:
      "Cari AC paling hemat listrik untuk rumah? Pahami peran inverter, low watt, kapasitas PK, dan kebiasaan pakai agar tagihan listrik lebih terkendali.",
    h1: "AC paling hemat listrik untuk rumah",
    eyebrow: "AC Hemat Listrik",
    readTime: "7 menit baca",
    keywords: ["AC hemat listrik", "AC inverter", "AC low watt", "tagihan listrik AC"],
    intro:
      "Hemat listrik adalah alasan paling sering disebut saat memilih AC. Namun hemat tidaknya sebuah AC bukan hanya soal label, melainkan kombinasi antara tipe unit, ketepatan kapasitas PK, daya listrik rumah, dan kebiasaan pemakaian. Memahami ini membantu memilih AC yang benar-benar terasa hemat di tagihan bulanan.",
    sections: [
      {
        heading: "Hemat listrik datang dari kombinasi, bukan satu fitur",
        body: [
          "Banyak yang mengira cukup memilih AC berlabel hemat lalu tagihan otomatis turun. Kenyataannya, AC yang kapasitasnya tidak sesuai ruangan tetap bekerja berat dan boros, sekalipun tipenya hemat listrik.",
          "Karena itu, langkah pertama bukan mencari label, melainkan memastikan PK sesuai ukuran dan kondisi ruangan. Setelah itu, baru pilih tipe yang paling cocok dengan pola pemakaian.",
        ],
      },
      {
        heading: "Inverter: lebih hemat untuk pemakaian lama",
        body: [
          "AC inverter menyesuaikan kerja kompresor saat suhu mendekati target, sehingga konsumsi daya bisa lebih efisien untuk pemakaian berjam-jam. Tipe ini cocok untuk kamar tidur atau ruang keluarga yang dipakai rutin setiap hari.",
          "Manfaat inverter paling terasa saat AC menyala lama. Untuk pemakaian yang hanya sebentar-sebentar, selisih penghematannya bisa tidak sebesar yang dibayangkan.",
        ],
      },
      {
        heading: "Low watt: meringankan tarikan daya listrik",
        body: [
          "AC low watt dirancang agar tarikan dayanya lebih ringan, sehingga lebih bersahabat untuk rumah dengan daya listrik terbatas. Fokus utamanya adalah mengurangi risiko listrik turun, bukan selalu menjadi paling hemat secara bulanan.",
          "Untuk rumah, kost, atau kontrakan dengan daya kecil, low watt sering menjadi pilihan aman. Pastikan kapasitas PK tetap cukup agar AC tidak bekerja terlalu keras hanya demi menahan daya.",
        ],
      },
      {
        heading: "PK yang tepat ikut menentukan hemat tidaknya",
        body: [
          "Kapasitas PK yang terlalu kecil membuat AC bekerja terus-menerus untuk mengejar suhu, dan ini justru menambah konsumsi listrik. Sebaliknya, kapasitas yang sesuai membantu AC mencapai suhu nyaman lebih cepat lalu bekerja lebih ringan.",
          "Cek estimasi kebutuhan PK sebelum memilih tipe. Kombinasi PK yang pas dengan tipe inverter atau low watt biasanya memberi hasil yang lebih hemat dibanding hanya mengandalkan satu sisi saja.",
        ],
      },
      {
        heading: "Kebiasaan pakai dan perawatan tetap berpengaruh",
        body: [
          "Mengatur suhu di angka yang wajar, menutup pintu dan jendela saat AC menyala, serta membersihkan filter secara rutin membantu menjaga konsumsi listrik tetap efisien.",
          "AC yang jarang dirawat cenderung bekerja lebih berat dan kurang dingin. Jadi penghematan bukan hanya soal unit saat membeli, tetapi juga cara pemakaian setelah terpasang.",
        ],
      },
    ],
    faqs: [
      {
        question: "Mana yang lebih hemat, AC inverter atau low watt?",
        answer:
          "Keduanya hemat untuk tujuan berbeda. Inverter lebih hemat untuk pemakaian lama karena kerja kompresor menyesuaikan, sedangkan low watt meringankan tarikan daya untuk rumah berdaya listrik terbatas. Pilih sesuai pola pemakaian dan daya listrik Anda.",
      },
      {
        question: "Apakah AC low watt pasti membuat tagihan listrik lebih murah?",
        answer:
          "Tidak otomatis. Low watt fokus menurunkan tarikan daya agar listrik tidak mudah turun. Penghematan tagihan bulanan lebih dipengaruhi ketepatan PK, durasi pemakaian, dan kebiasaan mengatur suhu.",
      },
      {
        question: "Kenapa AC saya boros padahal sudah inverter?",
        answer:
          "Penyebab umum adalah kapasitas PK yang kurang untuk ukuran ruangan, ruangan yang sering terbuka, filter kotor, atau pengaturan suhu terlalu rendah. AC inverter pun bisa boros bila bekerja berat terus-menerus.",
      },
    ],
    ctaLabel: "Konsultasi AC Hemat Listrik",
    waIntent: "konsultasi memilih AC hemat listrik sesuai daya rumah",
    relatedLinks: [
      ["AC Inverter", routes.katalogAcInverter],
      ["AC Low Watt", routes.katalogAcLowWatt],
      ["Kalkulator PK AC", routes.kalkulatorPkAc],
      ["Kontak Radja AC", routes.kontak],
    ],
  },
  {
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
  },
  {
    slug: "ac-untuk-listrik-900-watt",
    path: routes.artikelAcUntukListrik900Watt,
    cluster: "commercial-investigation",
    role: "supporting",
    intent: "commercial",
    parentSlug: "ac-bagus-merk-apa",
    updatedAt: "2026-06-11",
    moneyLinks: [
      ["AC Low Watt", routes.katalogAcLowWatt, "Lihat AC low watt yang lebih ramah untuk daya listrik 900 watt."],
      ["Kalkulator PK AC", routes.kalkulatorPkAc, "Cek kapasitas PK yang aman agar beban listrik tetap terkendali."],
      ["Kontak Radja AC", routes.kontak, "Sampaikan daya listrik dan perangkat rumah untuk pilihan AC yang aman."],
    ],
    title: "AC untuk Listrik 900 Watt | Pilih Low Watt Tanpa MCB Turun",
    description:
      "Panduan memilih AC untuk listrik 900 watt agar MCB tidak sering turun: cek beban listrik, kapasitas PK, dan pilihan AC low watt yang sesuai.",
    h1: "AC untuk listrik 900 watt tanpa sering turun MCB",
    eyebrow: "AC Low Watt",
    readTime: "6 menit baca",
    keywords: ["AC listrik 900 watt", "AC low watt", "MCB turun AC", "AC daya kecil"],
    intro:
      "Rumah dengan daya listrik 900 watt sering ragu memasang AC karena takut MCB sering turun. Sebenarnya AC tetap bisa dipasang asal pilihan tipe dan kapasitasnya disesuaikan dengan daya yang tersedia serta beban listrik lain di rumah.",
    sections: [
      {
        heading: "Kenapa listrik 900 watt perlu perhatian khusus",
        body: [
          "Pada daya 900 watt, total beban listrik di rumah relatif terbatas. Jika AC menarik daya besar saat menyala bersama kulkas, pompa air, dan lampu, MCB bisa turun karena beban melebihi batas.",
          "Karena itu, kunci utamanya bukan memaksakan AC berkapasitas besar, melainkan memilih tipe dan PK yang ramah terhadap daya yang tersedia.",
        ],
      },
      {
        heading: "Pilih AC low watt dengan PK yang sesuai",
        body: [
          "Untuk daya 900 watt, AC low watt menjadi pilihan utama karena tarikan dayanya lebih ringan. Kapasitas yang umum dipertimbangkan adalah 1/2 PK untuk kamar kecil, dengan tetap menyesuaikan kondisi ruangan.",
          "Hindari memilih PK terlalu besar hanya agar cepat dingin. Pada daya terbatas, kapasitas yang berlebihan justru meningkatkan risiko beban dan membuat listrik tidak stabil.",
        ],
      },
      {
        heading: "Hitung beban listrik lain di rumah",
        body: [
          "Sebelum menambah AC, perhatikan perangkat lain yang sering menyala bersamaan seperti kulkas, mesin cuci, pompa air, dan pemanas. Total beban inilah yang menentukan apakah AC masih aman ditambahkan.",
          "Jika beban lain sudah tinggi, mungkin perlu mengatur pemakaian bergantian, atau mempertimbangkan penambahan daya listrik bila AC dibutuhkan untuk pemakaian rutin.",
        ],
      },
      {
        heading: "Inverter low watt sebagai opsi pertimbangan",
        body: [
          "Beberapa unit inverter memiliki tarikan daya yang relatif ramah saat suhu sudah stabil. Untuk daya 900 watt, opsi ini bisa dipertimbangkan, namun tetap perlu dicek kebutuhan dan beban listrik rumah secara keseluruhan.",
          "Pilihan antara low watt biasa dan inverter low watt sebaiknya dibahas berdasarkan ukuran ruangan, durasi pemakaian, dan perangkat lain yang aktif di rumah.",
        ],
      },
      {
        heading: "Cek instalasi dan kondisi MCB",
        body: [
          "Selain unit, kondisi instalasi listrik dan MCB ikut berpengaruh. Instalasi yang sudah tua atau tidak sesuai bisa membuat AC kurang stabil meskipun kapasitasnya sudah tepat.",
          "Sampaikan besaran daya listrik dan perangkat utama di rumah saat konsultasi. Dari sana, tim Radja AC bisa membantu mencocokkan pilihan AC low watt yang paling aman untuk daya 900 watt.",
        ],
      },
    ],
    faqs: [
      {
        question: "AC berapa PK yang aman untuk listrik 900 watt?",
        answer:
          "Untuk daya 900 watt, AC low watt 1/2 PK pada kamar kecil umumnya paling aman. Pemilihan tetap perlu menghitung beban perangkat lain agar MCB tidak turun saat AC menyala bersamaan.",
      },
      {
        question: "Apakah AC bikin MCB sering turun di rumah 900 watt?",
        answer:
          "Bisa terjadi bila AC menarik daya besar dan menyala bersama perangkat lain hingga total beban melebihi batas. Memilih tipe low watt dengan PK sesuai dan mengatur pemakaian membantu mengurangi risiko MCB turun.",
      },
      {
        question: "Apakah perlu tambah daya listrik untuk pasang AC?",
        answer:
          "Tidak selalu. Banyak rumah 900 watt tetap bisa memakai AC low watt dengan kapasitas kecil. Penambahan daya baru dipertimbangkan jika beban listrik lain sudah tinggi atau AC dipakai rutin dalam waktu lama.",
      },
    ],
    ctaLabel: "Konsultasi AC Low Watt 900 Watt",
    waIntent: "konsultasi memilih AC untuk listrik 900 watt",
    relatedLinks: [
      ["AC Low Watt", routes.katalogAcLowWatt],
      ["Kalkulator PK AC", routes.kalkulatorPkAc],
      ["Kontak Radja AC", routes.kontak],
    ],
  },
  {
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
  },
  {
    slug: "pilihan-ac-1-2-pk-terbaik",
    path: routes.artikelPilihanAcSetengahPkTerbaik,
    cluster: "capacity-sizing",
    role: "supporting",
    intent: "commercial",
    parentSlug: "ac-1-pk-untuk-ruangan-berapa",
    updatedAt: "2026-06-11",
    moneyLinks: [
      ["AC 1/2 PK", routes.katalogAcSetengahPk, "Lihat pilihan AC 1/2 PK untuk kamar dan ruang kecil."],
      ["AC Low Watt", routes.katalogAcLowWatt, "Cek opsi low watt bila daya listrik rumah terbatas."],
      ["Kalkulator PK AC", routes.kalkulatorPkAc, "Pastikan ruangan memang cukup 1/2 PK sebelum order."],
      ["Kontak Radja AC", routes.kontak, "Konsultasikan ukuran ruangan dan daya listrik untuk pilihan 1/2 PK yang sesuai."],
    ],
    title: "Pilihan AC 1/2 PK Terbaik untuk Ruang Kecil | Cara Memilih",
    description:
      "Panduan memilih AC 1/2 PK untuk ruang kecil: cek kecocokan ruangan, pilihan tipe standard, low watt, inverter, dan pertimbangan merk sebelum order.",
    h1: "Pilihan AC 1/2 PK terbaik untuk ruang kecil",
    eyebrow: "Panduan AC 1/2 PK",
    readTime: "6 menit baca",
    keywords: ["AC 1/2 PK", "AC ruang kecil", "AC kamar kecil", "AC setengah PK"],
    intro:
      "AC 1/2 PK adalah salah satu kapasitas paling diminati untuk kamar dan ruang kecil. Supaya pilihan tepat, fokusnya bukan sekadar mencari yang paling ringan, tetapi memastikan kapasitas memang cukup untuk ruangan, lalu memilih tipe dan merk yang sesuai kebutuhan.",
    sections: [
      {
        heading: "Kapan AC 1/2 PK menjadi pilihan tepat",
        body: [
          "AC 1/2 PK umumnya cocok untuk ruangan kecil sekitar 9–12 m² dalam kondisi normal, seperti kamar tidur kecil, kamar kost, atau ruang kerja sempit yang tertutup.",
          "Untuk ruangan yang teduh dan tidak banyak sumber panas, 1/2 PK sering sudah cukup. Ini membuatnya populer untuk kebutuhan rumah tangga dan hunian sewa.",
        ],
      },
      {
        heading: "Cek dulu apakah ruangan benar cukup 1/2 PK",
        body: [
          "Sebelum memutuskan, pastikan ruangan memang masuk kategori kecil. Kamar yang panas, berplafon tinggi, atau sering terkena matahari bisa membutuhkan kapasitas lebih besar agar tidak terasa kurang dingin.",
          "Memaksakan 1/2 PK pada ruangan yang sebenarnya butuh lebih besar membuat AC bekerja berat dan boros. Cek estimasi kebutuhan PK lebih dulu untuk memastikan kapasitas ini memang pas.",
        ],
      },
      {
        heading: "Pilihan tipe 1/2 PK: standard, low watt, atau inverter",
        body: [
          "AC 1/2 PK tersedia dalam beberapa tipe. Low watt cocok untuk rumah berdaya listrik terbatas, inverter cocok untuk pemakaian lama yang mengutamakan kestabilan suhu, dan standard masuk akal untuk pemakaian sederhana.",
          "Pilih tipe berdasarkan daya listrik dan durasi pemakaian, bukan hanya selisih harga. Tipe yang tepat membuat kapasitas 1/2 PK bekerja lebih nyaman dan efisien.",
        ],
      },
      {
        heading: "Pertimbangan merk untuk AC 1/2 PK",
        body: [
          "Banyak merk menyediakan kapasitas 1/2 PK, mulai dari kelas value sampai premium. Radja AC menyediakan AC original multi-brand, sehingga pilihan 1/2 PK bisa disesuaikan dengan anggaran dan kebutuhan.",
          "Pertimbangkan garansi unit, ketersediaan tipe, dan layanan saat memilih merk. Konfirmasi stok sebaiknya dilakukan karena ketersediaan bisa berubah sewaktu-waktu.",
        ],
      },
      {
        heading: "Lanjut cek stok dan kebutuhan pemasangan",
        body: [
          "Setelah kapasitas dan tipe lebih jelas, cek ketersediaan unit 1/2 PK yang sesuai dan kebutuhan pemasangan. Posisi indoor, outdoor, panjang pipa, dan kondisi listrik ikut memengaruhi hasil akhir.",
          "Sampaikan ukuran ruangan, daya listrik, dan pola pemakaian saat konsultasi agar pilihan AC 1/2 PK yang direkomendasikan benar-benar sesuai dengan kebutuhan ruang kecil Anda.",
        ],
      },
    ],
    faqs: [
      {
        question: "AC 1/2 PK cocok untuk ruangan berapa meter?",
        answer:
          "Dalam kondisi normal, AC 1/2 PK umumnya cocok untuk ruangan kecil sekitar 9–12 m², seperti kamar tidur kecil atau kamar kost. Ruangan yang panas atau berplafon tinggi bisa membutuhkan kapasitas lebih besar.",
      },
      {
        question: "Apakah AC 1/2 PK ada yang tipe low watt dan inverter?",
        answer:
          "Ada. Kapasitas 1/2 PK tersedia dalam tipe standard, low watt, dan inverter. Pilih sesuai daya listrik rumah dan durasi pemakaian agar kapasitas kecil ini tetap nyaman dan efisien.",
      },
      {
        question: "Apa risiko memaksakan AC 1/2 PK pada ruangan besar?",
        answer:
          "AC akan bekerja terus-menerus untuk mengejar suhu, sehingga ruangan lama dingin, mesin cepat lelah, dan konsumsi listrik kurang efisien. Lebih baik menaikkan kapasitas bila ruangan memang lebih besar atau panas.",
      },
    ],
    ctaLabel: "Konsultasi AC 1/2 PK",
    waIntent: "konsultasi memilih AC 1/2 PK untuk ruang kecil",
    relatedLinks: [
      ["AC 1/2 PK", routes.katalogAcSetengahPk],
      ["AC Low Watt", routes.katalogAcLowWatt],
      ["Kalkulator PK AC", routes.kalkulatorPkAc],
      ["Kontak Radja AC", routes.kontak],
    ],
  },
  {
    slug: "biaya-servis-ac-vs-ganti-baru",
    path: routes.artikelBiayaServisVsGantiBaru,
    cluster: "troubleshooting",
    role: "pillar",
    intent: "commercial",
    parentSlug: null,
    updatedAt: "2026-06-13",
    moneyLinks: [
      ["Katalog AC", routes.katalog, "Cek pilihan unit baru setelah kamu tahu kapan waktunya ganti."],
      ["Kalkulator PK AC", routes.kalkulatorPkAc, "Hitung PK yang tepat sebelum beli unit pengganti."],
      ["Ganti AC Baru Purwokerto", routes.gantiAcBaruPurwokerto, "Solusi ganti AC lama ke unit baru di area Purwokerto dan sekitarnya."],
      ["Pengiriman & Pemasangan", routes.pengirimanPemasangan, "Cek cakupan paket pasang sebelum order unit baru."],
    ],
    title: "Biaya Servis AC vs Ganti Baru: Kapan Harus Berhenti Servis?",
    description:
      "Servis AC terus-terusan tapi tidak dingin juga? Hitung kapan biaya servis sudah tidak masuk akal dan saatnya ganti unit baru yang lebih hemat listrik.",
    h1: "Biaya servis AC vs ganti baru: kapan harus berhenti servis?",
    eyebrow: "Evaluasi AC Lama",
    readTime: "5 menit baca",
    intro:
      "Servis AC itu wajar. Tapi kalau kamu sudah servis dua kali dalam setahun dan AC tetap tidak dingin, ada yang perlu dihitung ulang. Bukan soal teknisinya — tapi soal apakah unit lama itu masih layak dipertahankan atau sudah saatnya diganti.",
    sections: [
      {
        heading: "Hitung total biaya servis dalam setahun",
        body: [
          "Catat semua pengeluaran servis AC kamu dalam 12 bulan terakhir: cuci AC, isi freon, ganti kapasitor, perbaikan PCB, dan lain-lain. Kalau totalnya sudah menyentuh 30\u201340% dari harga unit baru, kamu sedang membuang uang ke unit yang tidak akan membaik.",
          "Unit AC yang sudah berumur lebih dari 7\u201310 tahun biasanya masuk kategori ini. Komponen aus, efisiensi turun, dan biaya servis akan terus naik setiap tahunnya.",
        ],
      },
      {
        heading: "Tanda unit lama sudah tidak ekonomis dipertahankan",
        body: [
          "Ada beberapa tanda yang jelas: AC tidak dingin meski sudah diisi freon, tagihan listrik naik padahal pemakaian sama, suara kompresor kasar, air menetes dari indoor, atau unit sering mati sendiri. Satu tanda saja sudah cukup untuk mulai menghitung.",
          "Yang paling sering diabaikan adalah tagihan listrik. AC lama yang kompressornya sudah aus bekerja lebih keras untuk hasil yang sama — dan itu langsung terasa di tagihan bulanan.",
        ],
      },
      {
        heading: "Berapa penghematan nyata kalau ganti ke unit baru?",
        body: [
          "AC inverter baru yang PK-nya sesuai ruangan bisa memangkas konsumsi listrik 30\u201350% dibanding unit lama yang sudah aus. Kalau tagihan listrik kamu sekarang Rp 300.000 per bulan hanya dari AC, penghematan Rp 100.000\u2013150.000 per bulan itu nyata.",
          "Dalam 2\u20133 tahun, selisih tagihan listrik itu sudah menutup sebagian besar harga unit baru. Belum ditambah kamu tidak perlu keluar biaya servis lagi.",
        ],
      },
      {
        heading: "Kapan servis masih masuk akal?",
        body: [
          "Servis masih masuk akal kalau unit baru berumur di bawah 3 tahun, masalahnya jelas dan terisolasi (misalnya filter kotor atau selang mampet), dan biaya servis jauh di bawah 20% harga unit baru.",
          "Di luar kondisi itu, terutama kalau unit sudah tua dan masalah datang silih berganti, ganti baru adalah keputusan yang lebih sehat secara finansial.",
        ],
      },
      {
        heading: "Langkah sebelum beli unit pengganti",
        body: [
          "Jangan langsung beli unit yang sama dengan yang lama. Ukur ruangan dulu, cek daya listrik, dan tentukan apakah kamu butuh standard, low watt, atau inverter. PK yang salah akan mengulang masalah yang sama.",
          "Kirim ukuran ruangan, daya listrik, dan kondisi unit lama ke tim Radja AC — tim bantu rekomendasikan unit pengganti yang sesuai dan tidak bikin kamu menyesal dua tahun lagi.",
        ],
      },
    ],
    faqs: [
      {
        question: "Berapa kali servis AC dalam setahun masih wajar?",
        answer:
          "Cuci AC rutin 3\u20136 bulan sekali itu normal. Tapi kalau dalam setahun kamu sudah isi freon lebih dari sekali atau ganti komponen dua kali, itu tanda unit sudah tidak efisien dan perlu dievaluasi.",
      },
      {
        question: "AC saya baru 4 tahun tapi sudah sering bermasalah, ganti atau servis?",
        answer:
          "Unit 4 tahun yang sering bermasalah biasanya karena instalasi awal yang kurang tepat atau PK yang tidak sesuai ruangan sehingga unit bekerja terlalu keras. Cek dulu akar masalahnya sebelum memutuskan. Kirim kondisi unit dan ukuran ruangan ke tim Radja AC untuk evaluasi.",
      },
      {
        question: "Apakah ganti AC baru otomatis lebih hemat listrik?",
        answer:
          "Ya, asalkan PK-nya sesuai ruangan dan kamu pilih tipe inverter untuk pemakaian rutin. Unit baru dengan komponen segar bekerja lebih efisien dibanding unit lama yang kompressornya sudah aus.",
      },
    ],
    ctaLabel: "Konsultasi Ganti AC Baru",
    waIntent: "konsultasi evaluasi AC lama dan pertimbangan ganti unit baru",
    relatedLinks: [
      ["Ganti AC Baru Purwokerto", routes.gantiAcBaruPurwokerto],
      ["Kalkulator PK AC", routes.kalkulatorPkAc],
      ["AC Inverter", routes.katalogAcInverter],
      ["AC Low Watt", routes.katalogAcLowWatt],
      ["Kontak Radja AC", routes.kontak],
    ],
  },
  {
    slug: "tanda-ac-harus-ganti-unit",
    path: routes.artikelTandaAcHarusGantiUnit,
    cluster: "troubleshooting",
    role: "supporting",
    intent: "commercial",
    parentSlug: "biaya-servis-ac-vs-ganti-baru",
    updatedAt: "2026-06-13",
    moneyLinks: [
      ["Ganti AC Baru Purwokerto", routes.gantiAcBaruPurwokerto, "Solusi ganti AC lama ke unit baru di area Purwokerto dan sekitarnya."],
      ["Katalog AC", routes.katalog, "Cek pilihan unit baru setelah kamu tahu kapan waktunya ganti."],
      ["Kalkulator PK AC", routes.kalkulatorPkAc, "Hitung PK yang tepat untuk unit pengganti."],
      ["Kontak Radja AC", routes.kontak, "Kirim kondisi unit lama dan ukuran ruangan untuk evaluasi."],
    ],
    title: "5 Tanda AC Harus Ganti Unit, Bukan Servis Lagi",
    description:
      "AC mati sendiri, bunyi kasar, atau tidak dingin meski sudah diisi freon? Kenali 5 tanda AC sudah waktunya diganti, bukan dirawat terus.",
    h1: "5 tanda AC harus ganti unit, bukan servis lagi",
    eyebrow: "Evaluasi AC Lama",
    readTime: "4 menit baca",
    intro:
      "Banyak orang terus servis AC yang sebenarnya sudah tidak layak dipertahankan. Bukan karena tidak mau ganti, tapi karena tidak tahu kapan batas wajarnya. Ini 5 tanda yang jelas bahwa AC kamu sudah waktunya diganti.",
    sections: [
      {
        heading: "1. Sudah diisi freon tapi tetap tidak dingin",
        body: [
          "Freon habis itu gejala, bukan penyebab. Kalau AC sudah diisi freon tapi dalam 1\u20132 bulan tidak dingin lagi, ada kebocoran yang tidak ketemu atau komponen lain yang sudah aus. Isi freon terus-terusan bukan solusi — itu hanya menunda pengeluaran yang lebih besar.",
        ],
      },
      {
        heading: "2. Tagihan listrik naik tanpa perubahan pemakaian",
        body: [
          "Ini tanda paling sering diabaikan. Kalau tagihan listrik naik 20\u201340% padahal pemakaian AC sama seperti biasanya, kompressor unit sudah bekerja tidak efisien. Unit baru dengan PK yang sesuai akan langsung terasa bedanya di tagihan bulan pertama.",
        ],
      },
      {
        heading: "3. Suara kompresor kasar atau unit sering mati sendiri",
        body: [
          "Suara kasar dari outdoor biasanya tanda bearing atau kompressor sudah aus. Unit yang sering mati sendiri bisa karena proteksi termal aktif karena kompressor kepanasan. Dua kondisi ini biaya perbaikannya bisa mendekati atau melebihi harga unit baru.",
        ],
      },
      {
        heading: "4. Unit sudah lebih dari 10 tahun",
        body: [
          "Umur teknis AC split umumnya 10\u201315 tahun dengan perawatan rutin. Di atas 10 tahun, efisiensi turun dan spare part mulai sulit dicari. Kalau unit kamu sudah di rentang ini dan mulai bermasalah, ganti baru adalah keputusan yang lebih masuk akal daripada terus menambal.",
        ],
      },
      {
        heading: "5. Biaya servis dalam setahun sudah di atas 30% harga unit baru",
        body: [
          "Hitung semua pengeluaran servis dalam 12 bulan terakhir. Kalau totalnya sudah menyentuh sepertiga harga unit baru, kamu sedang membuang uang ke unit yang tidak akan membaik. Lebih baik uang itu dipakai untuk DP unit baru yang efisien.",
        ],
      },
      {
        heading: "Langkah setelah memutuskan ganti",
        body: [
          "Jangan beli unit yang sama dengan yang lama. Ukur ruangan, cek daya listrik, dan tentukan tipe yang sesuai pola pemakaian. Kirim data itu ke tim Radja AC — tim bantu rekomendasikan unit pengganti yang tepat PK dan tidak mengulang masalah yang sama.",
        ],
      },
    ],
    ctaLabel: "Konsultasi Ganti AC Baru",
    waIntent: "konsultasi tanda AC harus ganti unit dan rekomendasi unit pengganti",
    relatedLinks: [
      ["Biaya Servis vs Ganti Baru", routes.artikelBiayaServisVsGantiBaru],
      ["Ganti AC Baru Purwokerto", routes.gantiAcBaruPurwokerto],
      ["Kalkulator PK AC", routes.kalkulatorPkAc],
      ["AC Inverter", routes.katalogAcInverter],
      ["Kontak Radja AC", routes.kontak],
    ],
  },
  {
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
          "AC non-inverter lama yang sudah aus bisa mengonsumsi 900\u20131.200 watt per jam untuk kapasitas 1 PK. AC inverter baru dengan kapasitas sama, saat suhu sudah stabil, bisa turun ke 300\u2013500 watt per jam. Kalau AC menyala 8 jam per hari, selisihnya bisa 3\u20136 kWh per hari.",
          "Dengan tarif listrik rumah tangga sekitar Rp 1.500 per kWh, selisih itu setara Rp 4.500\u20139.000 per hari, atau Rp 135.000\u2013270.000 per bulan. Dalam setahun, penghematan itu bisa mencapai Rp 1,6\u20133,2 juta.",
        ],
      },
      {
        heading: "Kapan titik balik investasi unit baru tercapai?",
        body: [
          "Kalau penghematan listrik Rp 200.000 per bulan dan harga unit inverter baru (termasuk pasang) sekitar Rp 4\u20135 juta, titik balik investasinya sekitar 20\u201325 bulan. Kurang dari 2 tahun, dan setelah itu kamu murni hemat.",
          "Belum ditambah kamu tidak perlu keluar biaya servis lagi, dan unit baru punya garansi resmi brand yang melindungi 2\u20135 tahun ke depan.",
        ],
      },
      {
        heading: "PK yang tepat sama pentingnya dengan tipe inverter",
        body: [
          "Ganti ke inverter tapi PK-nya salah tidak akan menyelesaikan masalah. AC inverter 1/2 PK di ruangan 20 m\u00b2 tetap akan bekerja keras dan boros. Ukur ruangan dulu, cek kondisi panas, dan tentukan PK yang sesuai sebelum memilih unit.",
          "Kirim ukuran ruangan, daya listrik, dan estimasi tagihan listrik sekarang ke tim Radja AC — tim bantu hitung unit inverter mana yang paling masuk akal untuk kondisi kamu.",
        ],
      },
    ],
    faqs: [
      {
        question: "AC inverter baru pasti lebih hemat dari AC lama saya?",
        answer:
          "Ya, asalkan PK-nya sesuai ruangan. AC inverter baru dengan komponen segar bekerja jauh lebih efisien dibanding unit lama yang kompressornya sudah aus. Penghematan paling terasa untuk pemakaian 6\u20138 jam per hari.",
      },
      {
        question: "Kalau daya listrik saya 900 watt, bisa pakai inverter?",
        answer:
          "Bisa, tapi pilih inverter low watt atau unit dengan tarikan daya awal yang rendah. Beberapa unit inverter 1/2 PK dirancang untuk daya terbatas. Kirim daya listrik dan ukuran ruangan untuk cek pilihan yang aman.",
      },
      {
        question: "Berapa lama AC inverter baru bisa balik modal dari penghematan listrik?",
        answer:
          "Rata-rata 18\u201330 bulan tergantung selisih konsumsi unit lama vs baru dan tarif listrik kamu. Semakin sering AC dipakai dan semakin boros unit lama, semakin cepat titik baliknya.",
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
  },
  // ============================================================
  // 12 ARTIKEL BARU UNTUK TOPICAL AUTHORITY
  // ============================================================

  // CLUSTER A - BRAND AUTHORITY (4 artikel)
  {
    slug: "gree-vs-daikin-untuk-rumah",
    path: routes.artikelGreeVsDaikinUntukRumah,
    cluster: "brand-evaluation",
    role: "pillar",
    intent: "commercial",
    parentSlug: null,
    updatedAt: "2026-06-15",
    moneyLinks: [
      ["AC Gree", routes.brandGree, "Cek pilihan AC Gree dengan status Proshop resmi dan stok lengkap."],
      ["AC Daikin", routes.brandDaikin, "Lihat pilihan AC Daikin dengan dokumen Authorized Dealer."],
      ["Jual AC Purwokerto", routes.jualAcPurwokerto, "Konsultasi pembelian AC di area Purwokerto dan sekitarnya."],
      ["AC Inverter", routes.katalogAcInverter, "Bandingkan pilihan inverter dari berbagai brand untuk pemakaian rutin."],
    ],
    title: "Gree vs Daikin untuk Rumah | Perbandingan Brand AC Terbaik — Radja AC",
    description:
      "Bingung pilih Gree atau Daikin untuk rumah? Bandingkan harga, efisiensi, garansi, ketersediaan spare part, dan mana yang lebih cocok untuk kebutuhan Anda.",
    h1: "Gree vs Daikin untuk rumah: mana yang lebih cocok?",
    eyebrow: "Perbandingan Brand AC",
    readTime: "8 menit baca",
    intro:
      "Gree dan Daikin adalah dua brand AC yang sering dibandingkan oleh pembeli rumah tangga. Keduanya punya karakter berbeda: Daikin dikenal dengan reputasi premium dan ketahanan jangka panjang, sedangkan Gree menawarkan value yang kompetitif dengan pilihan tipe yang lengkap. Artikel ini membantu Anda memilih berdasarkan kebutuhan nyata, bukan sekadar nama brand.",
    sections: [
      {
        heading: "Profil singkat kedua brand",
        body: [
          "Daikin adalah brand Jepang yang sudah puluhan tahun dikenal sebagai salah satu produsen AC premium dunia. Reputasinya kuat di segmen yang mengutamakan ketahanan, efisiensi, dan layanan purna jual. Harga unitnya cenderung lebih tinggi, tapi banyak pembeli menganggapnya sebagai investasi jangka panjang.",
          "Gree adalah produsen AC terbesar di dunia asal Tiongkok. Brand ini menawarkan pilihan tipe yang sangat lengkap — dari standard, low watt, hingga inverter — dengan harga yang lebih kompetitif. Radja AC adalah Proshop Gree resmi, sehingga stok Gree lebih lengkap dibanding toko biasa.",
        ],
      },
      {
        heading: "Perbandingan harga: Gree lebih terjangkau, Daikin lebih premium",
        body: [
          "Untuk kapasitas yang sama, harga Gree umumnya 15-30% lebih rendah dibanding Daikin. Selisih ini cukup signifikan, terutama jika Anda membeli beberapa unit sekaligus untuk rumah atau kost.",
          "Namun harga bukan satu-satunya pertimbangan. Daikin sering dipilih oleh pembeli yang mengutamakan reputasi brand dan bersedia membayar lebih untuk ketenangan pikiran jangka panjang. Gree cocok untuk pembeli yang ingin value terbaik tanpa mengorbankan kualitas.",
        ],
      },
      {
        heading: "Efisiensi listrik: keduanya punya pilihan inverter",
        body: [
          "Baik Gree maupun Daikin sama-sama menyediakan tipe inverter yang efisien untuk pemakaian rutin. Daikin inverter dikenal dengan teknologi yang sudah matang dan suhu yang sangat stabil. Gree inverter menawarkan efisiensi serupa dengan harga yang lebih kompetitif.",
          "Untuk pemakaian 6-8 jam sehari, keduanya bisa menghemat listrik dibanding AC non-inverter. Pilihan lebih bergantung pada anggaran dan preferensi brand daripada perbedaan efisiensi yang signifikan.",
        ],
      },
      {
        heading: "Garansi dan layanan purna jual",
        body: [
          "Daikin dikenal dengan jaringan service center yang luas dan spare part yang mudah didapat. Garansi unit mengikuti ketentuan resmi brand, dan banyak pembeli merasa tenang dengan reputasi layanan Daikin.",
          "Gree juga memiliki garansi resmi dan jaringan layanan yang terus berkembang. Sebagai Proshop Gree, Radja AC membantu arahan awal proses klaim bila terjadi kendala unit, sehingga pembeli tidak ditinggal begitu saja setelah pembelian.",
        ],
      },
      {
        heading: "Kapan pilih Gree, kapan pilih Daikin?",
        body: [
          "Pilih Gree jika: anggaran menjadi pertimbangan utama, Anda butuh pilihan tipe yang lengkap (standard, low watt, inverter), atau Anda membeli beberapa unit sekaligus dan ingin total biaya lebih efisien.",
          "Pilih Daikin jika: Anda mengutamakan reputasi brand premium, berencana memakai AC dalam jangka sangat panjang (10+ tahun), atau sudah familiar dan puas dengan pengalaman Daikin sebelumnya.",
        ],
      },
      {
        heading: "Cara memilih yang tepat untuk rumah Anda",
        body: [
          "Jangan memilih brand dulu sebelum tahu kebutuhan ruangan. Ukur luas ruangan, cek daya listrik, tentukan apakah butuh standard, low watt, atau inverter. Setelah itu, bandingkan Gree dan Daikin berdasarkan stok yang tersedia dan anggaran.",
          "Kirim data ruangan ke tim Radja AC — tim bantu bandingkan pilihan Gree dan Daikin yang sesuai dengan kebutuhan Anda, lengkap dengan estimasi harga dan ketersediaan stok.",
        ],
      },
    ],
    faqs: [
      {
        question: "Mana yang lebih awet, Gree atau Daikin?",
        answer:
          "Keduanya bisa awet jika kapasitas PK sesuai ruangan, pemasangan benar, dan perawatan rutin dilakukan. Daikin punya reputasi ketahanan yang sudah teruji puluhan tahun, sedangkan Gree menawarkan kualitas yang kompetitif dengan harga lebih terjangkau.",
      },
      {
        question: "Apakah spare part Gree mudah didapat?",
        answer:
          "Ya. Gree adalah produsen AC terbesar di dunia, sehingga spare part tersedia luas. Sebagai Proshop Gree, Radja AC juga membantu arahan bila ada kendala unit.",
      },
      {
        question: "Untuk kost banyak kamar, lebih baik Gree atau Daikin?",
        answer:
          "Untuk kost dengan banyak unit, Gree sering lebih efisien dari sisi total anggaran. Pilihan low watt Gree juga cocok untuk kamar dengan daya listrik terbatas. Daikin bisa dipertimbangkan jika anggaran tidak menjadi kendala utama.",
      },
      {
        question: "Radja AC jual Gree dan Daikin?",
        answer:
          "Ya. Radja AC adalah Proshop Gree resmi dan Authorized Dealer Daikin. Keduanya tersedia dengan stok yang bisa dicek langsung, sehingga Anda bisa membandingkan sebelum memutuskan.",
      },
    ],
    ctaLabel: "Bandingkan Gree vs Daikin",
    waIntent: "konsultasi perbandingan AC Gree vs Daikin untuk rumah",
    relatedLinks: [
      ["AC Gree", routes.brandGree],
      ["AC Daikin", routes.brandDaikin],
      ["AC Inverter", routes.katalogAcInverter],
      ["Kalkulator PK AC", routes.kalkulatorPkAc],
      ["Kontak Radja AC", routes.kontak],
    ],
  },
  {
    slug: "midea-vs-hisense-budget-terbatas",
    path: routes.artikelMideaVsHisenseBudgetTerbatas,
    cluster: "brand-evaluation",
    role: "supporting",
    intent: "commercial",
    parentSlug: "gree-vs-daikin-untuk-rumah",
    updatedAt: "2026-06-15",
    moneyLinks: [
      ["AC Midea", routes.brandMidea, "Cek pilihan AC Midea dengan dokumen Authorized Dealer."],
      ["AC Hisense", routes.brandHisense, "Lihat pilihan AC Hisense untuk kebutuhan rumah dan usaha."],
      ["AC Low Watt", routes.katalogAcLowWatt, "Bandingkan pilihan low watt untuk daya listrik terbatas."],
      ["Kalkulator PK AC", routes.kalkulatorPkAc, "Hitung kebutuhan PK sebelum memilih brand."],
    ],
    title: "Midea vs Hisense untuk Budget Terbatas | Pilih Mana? — Radja AC",
    description:
      "Anggaran terbatas tapi butuh AC berkualitas? Bandingkan Midea vs Hisense dari sisi harga, fitur, efisiensi, dan mana yang lebih cocok untuk kebutuhan Anda.",
    h1: "Midea vs Hisense untuk budget terbatas: pilih mana?",
    eyebrow: "Perbandingan Brand AC",
    readTime: "7 menit baca",
    intro:
      "Midea dan Hisense adalah dua brand yang sering masuk pertimbangan pembeli dengan anggaran terbatas. Keduanya menawarkan AC berkualitas dengan harga yang lebih terjangkau dibanding brand premium. Artikel ini membantu Anda memilih berdasarkan kebutuhan spesifik, bukan sekadar harga termurah.",
    sections: [
      {
        heading: "Kenapa Midea dan Hisense jadi pilihan budget-friendly",
        body: [
          "Midea adalah salah satu produsen elektronik terbesar di dunia dengan pabrik di berbagai negara. Brand ini dikenal menawarkan produk dengan kualitas konsisten dan harga kompetitif. Radja AC adalah Authorized Dealer Midea.",
          "Hisense juga merupakan brand global yang berkembang pesat di pasar AC Indonesia. Pilihan tipenya cukup lengkap dan harganya bersaing. Radja AC adalah Authorized Dealer Hisense, sehingga unit yang dijual original dengan garansi resmi.",
        ],
      },
      {
        heading: "Perbandingan harga dan value",
        body: [
          "Harga Midea dan Hisense relatif setara untuk kapasitas yang sama. Keduanya berada di segmen yang lebih terjangkau dibanding Daikin atau Gree inverter premium. Selisih harga antar keduanya biasanya tidak signifikan.",
          "Yang lebih menentukan adalah ketersediaan tipe yang sesuai kebutuhan. Cek apakah brand tersebut punya pilihan low watt, inverter, atau kapasitas PK yang Anda butuhkan sebelum membandingkan harga.",
        ],
      },
      {
        heading: "Pilihan tipe dan fitur",
        body: [
          "Midea menyediakan pilihan standard, low watt, dan inverter dengan rentang kapasitas yang cukup lengkap. Beberapa seri Midea juga dilengkapi fitur seperti filter anti-bakteri dan mode hemat energi.",
          "Hisense juga punya pilihan tipe yang beragam. Beberapa seri Hisense dikenal dengan desain indoor yang compact dan operasi yang relatif senyap. Pilih berdasarkan fitur yang benar-benar Anda butuhkan.",
        ],
      },
      {
        heading: "Garansi dan ketersediaan layanan",
        body: [
          "Sebagai Authorized Dealer kedua brand, Radja AC menjual unit original dengan garansi resmi. Garansi unit mengikuti ketentuan masing-masing brand, sedangkan garansi pemasangan mengikuti pekerjaan yang dikerjakan melalui Radja AC.",
          "Untuk kendala unit, tim Radja AC membantu arahan awal proses klaim sesuai jalur garansi brand. Ini memberikan ketenangan bahwa Anda tidak ditinggal begitu saja setelah pembelian.",
        ],
      },
      {
        heading: "Kapan pilih Midea, kapan pilih Hisense?",
        body: [
          "Pilih Midea jika: Anda sudah familiar dengan brand Midea dari produk lain, butuh pilihan low watt untuk daya terbatas, atau tipe yang Anda cari kebetulan tersedia di stok Midea.",
          "Pilih Hisense jika: Anda mencari unit dengan desain compact, operasi senyap menjadi prioritas, atau tipe yang sesuai kebutuhan tersedia di stok Hisense. Keduanya sama-sama layak dipertimbangkan.",
        ],
      },
    ],
    faqs: [
      {
        question: "Midea dan Hisense sama-sama original di Radja AC?",
        answer:
          "Ya. Radja AC adalah Authorized Dealer untuk kedua brand, sehingga unit yang dijual original dengan garansi resmi dari masing-masing brand.",
      },
      {
        question: "Mana yang lebih hemat listrik, Midea atau Hisense?",
        answer:
          "Keduanya punya pilihan tipe hemat listrik. Yang lebih menentukan adalah ketepatan kapasitas PK dengan ukuran ruangan. PK yang sesuai membuat AC bekerja efisien, apapun brand-nya.",
      },
      {
        question: "Untuk kamar kost dengan budget terbatas, pilih mana?",
        answer:
          "Keduanya cocok untuk kamar kost. Cek ketersediaan tipe low watt 1/2 PK dari masing-masing brand, lalu bandingkan harga dan stok yang ready. Kirim data kamar untuk rekomendasi yang lebih spesifik.",
      },
    ],
    ctaLabel: "Bandingkan Midea vs Hisense",
    waIntent: "konsultasi perbandingan AC Midea vs Hisense untuk budget terbatas",
    relatedLinks: [
      ["AC Midea", routes.brandMidea],
      ["AC Hisense", routes.brandHisense],
      ["AC Low Watt", routes.katalogAcLowWatt],
      ["Gree vs Daikin", routes.artikelGreeVsDaikinUntukRumah],
      ["Kontak Radja AC", routes.kontak],
    ],
  },
  {
    slug: "daikin-vs-panasonic-jangka-panjang",
    path: routes.artikelDaikinVsPanasonicJangkaPanjang,
    cluster: "brand-evaluation",
    role: "supporting",
    intent: "commercial",
    parentSlug: "gree-vs-daikin-untuk-rumah",
    updatedAt: "2026-06-15",
    moneyLinks: [
      ["AC Daikin", routes.brandDaikin, "Cek pilihan AC Daikin dengan dokumen Authorized Dealer."],
      ["AC Panasonic", routes.brandPanasonic, "Lihat pilihan AC Panasonic untuk kebutuhan rumah."],
      ["AC Inverter", routes.katalogAcInverter, "Bandingkan pilihan inverter untuk pemakaian jangka panjang."],
      ["Kalkulator PK AC", routes.kalkulatorPkAc, "Hitung kebutuhan PK sebelum memilih brand premium."],
    ],
    title: "Daikin vs Panasonic untuk Pemakaian Jangka Panjang — Radja AC",
    description:
      "Mencari AC yang awet untuk pemakaian 10+ tahun? Bandingkan Daikin vs Panasonic dari sisi ketahanan, efisiensi, garansi, dan total cost of ownership.",
    h1: "Daikin vs Panasonic untuk pemakaian jangka panjang",
    eyebrow: "Perbandingan Brand Premium",
    readTime: "7 menit baca",
    intro:
      "Daikin dan Panasonic adalah dua brand Jepang yang dikenal dengan kualitas dan ketahanan. Keduanya sering dipilih oleh pembeli yang berpikir jangka panjang — bukan sekadar mencari harga termurah, tapi mencari AC yang bisa diandalkan selama 10 tahun atau lebih.",
    sections: [
      {
        heading: "Reputasi ketahanan kedua brand",
        body: [
          "Daikin adalah spesialis AC yang fokus pada teknologi pendinginan. Brand ini dikenal dengan kompressor yang tahan lama dan efisiensi yang konsisten bahkan setelah bertahun-tahun pemakaian. Banyak unit Daikin yang masih berfungsi baik setelah 10-15 tahun.",
          "Panasonic adalah brand elektronik Jepang dengan reputasi kualitas yang sudah teruji di berbagai produk. AC Panasonic dikenal dengan teknologi Nanoe-X untuk kualitas udara dan operasi yang relatif senyap. Ketahanannya juga tergolong baik untuk pemakaian rumah tangga.",
        ],
      },
      {
        heading: "Efisiensi listrik jangka panjang",
        body: [
          "Kedua brand sama-sama menyediakan tipe inverter yang efisien. Daikin inverter dikenal dengan teknologi yang sudah sangat matang dan efisiensi yang terjaga bahkan setelah bertahun-tahun. Panasonic inverter juga menawarkan efisiensi yang kompetitif.",
          "Yang perlu diperhatikan adalah efisiensi jangka panjang. AC yang kompressornya cepat aus akan bekerja lebih keras dan lebih boros seiring waktu. Brand premium seperti Daikin dan Panasonic cenderung mempertahankan efisiensinya lebih lama.",
        ],
      },
      {
        heading: "Garansi dan ketersediaan spare part",
        body: [
          "Daikin memiliki jaringan service center yang luas di Indonesia dan spare part yang mudah didapat. Ini penting untuk pemakaian jangka panjang karena Anda tidak perlu khawatir kesulitan mencari komponen pengganti.",
          "Panasonic juga memiliki jaringan layanan yang established sebagai brand elektronik besar. Spare part tersedia luas dan service center mudah ditemukan di berbagai kota.",
        ],
      },
      {
        heading: "Total cost of ownership",
        body: [
          "Harga awal Daikin dan Panasonic memang lebih tinggi dibanding brand ekonomis. Namun jika dihitung total biaya selama 10 tahun — termasuk tagihan listrik, biaya servis, dan potensi penggantian — brand premium sering lebih ekonomis.",
          "AC murah yang cepat rusak atau boros listrik bisa menghabiskan lebih banyak uang dalam jangka panjang. Investasi di brand premium adalah keputusan finansial, bukan sekadar gengsi.",
        ],
      },
      {
        heading: "Kapan pilih Daikin, kapan pilih Panasonic?",
        body: [
          "Pilih Daikin jika: Anda mengutamakan spesialisasi di bidang AC, menginginkan efisiensi terbaik untuk pemakaian rutin berjam-jam, atau sudah puas dengan pengalaman Daikin sebelumnya.",
          "Pilih Panasonic jika: Anda menginginkan fitur tambahan seperti Nanoe-X untuk kualitas udara, menyukai ekosistem Panasonic, atau tipe yang sesuai kebutuhan tersedia di stok Panasonic.",
        ],
      },
    ],
    faqs: [
      {
        question: "Mana yang lebih awet, Daikin atau Panasonic?",
        answer:
          "Keduanya tergolong awet untuk brand premium. Daikin sedikit lebih unggul dalam hal spesialisasi AC, sedangkan Panasonic menawarkan fitur tambahan seperti Nanoe-X. Keduanya bisa bertahan 10+ tahun dengan perawatan yang baik.",
      },
      {
        question: "Apakah harga Daikin dan Panasonic setara?",
        answer:
          "Relatif setara untuk kapasitas dan tipe yang sama. Keduanya berada di segmen premium dengan harga di atas brand ekonomis. Selisih harga biasanya tidak signifikan.",
      },
      {
        question: "Untuk rumah yang dipakai setiap hari, pilih mana?",
        answer:
          "Keduanya cocok untuk pemakaian harian. Daikin sedikit lebih unggul untuk efisiensi pemakaian rutin berjam-jam. Panasonic menawarkan fitur kualitas udara yang menarik. Pilih berdasarkan prioritas Anda.",
      },
    ],
    ctaLabel: "Bandingkan Daikin vs Panasonic",
    waIntent: "konsultasi perbandingan AC Daikin vs Panasonic untuk jangka panjang",
    relatedLinks: [
      ["AC Daikin", routes.brandDaikin],
      ["AC Panasonic", routes.brandPanasonic],
      ["AC Inverter", routes.katalogAcInverter],
      ["Gree vs Daikin", routes.artikelGreeVsDaikinUntukRumah],
      ["Kontak Radja AC", routes.kontak],
    ],
  },
  {
    slug: "ac-gree-cocok-untuk-siapa",
    path: routes.artikelAcGreeCocokUntukSiapa,
    cluster: "brand-evaluation",
    role: "supporting",
    intent: "commercial",
    parentSlug: "gree-vs-daikin-untuk-rumah",
    updatedAt: "2026-06-15",
    moneyLinks: [
      ["AC Gree", routes.brandGree, "Cek pilihan AC Gree lengkap dengan status Proshop resmi."],
      ["Jual AC Purwokerto", routes.jualAcPurwokerto, "Konsultasi pembelian AC di area Purwokerto."],
      ["Pengadaan AC Kost", routes.pengadaanKostApartemen, "Solusi pengadaan AC untuk kost banyak kamar."],
      ["AC Low Watt", routes.katalogAcLowWatt, "Pilihan Gree low watt untuk daya listrik terbatas."],
    ],
    title: "AC Gree Cocok untuk Siapa? | Panduan Memilih AC Gree — Radja AC",
    description:
      "AC Gree cocok untuk rumah, kost, toko, atau usaha? Pahami profil pembeli ideal untuk AC Gree dan kapan brand ini menjadi pilihan terbaik.",
    h1: "AC Gree cocok untuk siapa?",
    eyebrow: "Panduan Brand Gree",
    readTime: "6 menit baca",
    intro:
      "Gree adalah produsen AC terbesar di dunia dengan pilihan tipe yang sangat lengkap. Tapi apakah Gree cocok untuk semua orang? Artikel ini membantu Anda memahami profil pembeli yang paling cocok dengan AC Gree, sehingga keputusan pembelian lebih tepat sasaran.",
    sections: [
      {
        heading: "Gree cocok untuk pembeli yang mencari value terbaik",
        body: [
          "Jika Anda mencari AC berkualitas dengan harga yang kompetitif, Gree adalah pilihan yang masuk akal. Brand ini menawarkan kualitas yang konsisten tanpa harga premium seperti brand Jepang.",
          "Value di sini bukan berarti murahan. Gree adalah brand global dengan standar kualitas internasional. Radja AC sebagai Proshop Gree menjamin unit yang dijual original dengan garansi resmi.",
        ],
      },
      {
        heading: "Gree cocok untuk kost dan properti sewa",
        body: [
          "Pemilik kost yang butuh banyak unit dengan anggaran terkontrol sering memilih Gree. Pilihan low watt Gree cocok untuk kamar dengan daya listrik terbatas, dan tipe seragam memudahkan perawatan antar kamar.",
          "Untuk kost 10-20 kamar, selisih harga Gree vs brand premium bisa sangat signifikan. Uang yang dihemat bisa dialokasikan untuk kebutuhan lain atau unit tambahan.",
        ],
      },
      {
        heading: "Gree cocok untuk rumah dengan berbagai kebutuhan",
        body: [
          "Gree menyediakan pilihan standard, low watt, dan inverter dengan rentang kapasitas dari 1/2 PK hingga 2 PK. Apapun kebutuhan ruangan Anda — kamar kecil, ruang keluarga, atau ruang kerja — kemungkinan besar ada tipe Gree yang sesuai.",
          "Sebagai Proshop Gree, stok Radja AC lebih lengkap dibanding toko biasa. Ini memudahkan pembeli yang butuh tipe spesifik atau kapasitas tertentu.",
        ],
      },
      {
        heading: "Gree cocok untuk toko dan usaha kecil",
        body: [
          "Toko, ruko, dan usaha kecil yang butuh AC dengan anggaran terkontrol sering memilih Gree. Pilihan 1 PK hingga 2 PK tersedia untuk berbagai ukuran ruang usaha.",
          "Untuk usaha yang baru mulai, investasi AC yang terlalu mahal bisa membebani cash flow. Gree menawarkan keseimbangan antara kualitas dan anggaran yang masuk akal.",
        ],
      },
      {
        heading: "Kapan Gree mungkin bukan pilihan terbaik?",
        body: [
          "Jika Anda mengutamakan reputasi brand premium di atas segalanya, atau sudah sangat familiar dan puas dengan brand tertentu seperti Daikin, mungkin lebih baik tetap dengan pilihan tersebut.",
          "Gree adalah pilihan rasional untuk pembeli yang menilai berdasarkan value, bukan sekadar nama brand. Jika Anda tipe pembeli seperti ini, Gree sangat layak dipertimbangkan.",
        ],
      },
    ],
    faqs: [
      {
        question: "Apakah AC Gree awet?",
        answer:
          "Ya, dengan catatan kapasitas PK sesuai ruangan, pemasangan benar, dan perawatan rutin. Gree adalah produsen AC terbesar di dunia dengan standar kualitas internasional.",
      },
      {
        question: "Gree cocok untuk kamar tidur?",
        answer:
          "Cocok. Gree menyediakan pilihan 1/2 PK dan 3/4 PK untuk kamar tidur, termasuk tipe low watt dan inverter. Pilih berdasarkan ukuran kamar dan daya listrik.",
      },
      {
        question: "Kenapa Radja AC banyak jual Gree?",
        answer:
          "Radja AC adalah Proshop Gree resmi, sehingga stok lebih lengkap dan harga lebih kompetitif. Status ini juga memudahkan bantuan klaim bila ada kendala unit.",
      },
      {
        question: "Gree vs brand lain untuk kost, pilih mana?",
        answer:
          "Untuk kost dengan banyak unit, Gree sering menjadi pilihan karena value yang kompetitif dan pilihan low watt yang lengkap. Selisih harga bisa sangat signifikan untuk pembelian banyak unit.",
      },
    ],
    ctaLabel: "Konsultasi AC Gree",
    waIntent: "konsultasi apakah AC Gree cocok untuk kebutuhan saya",
    relatedLinks: [
      ["AC Gree", routes.brandGree],
      ["Gree vs Daikin", routes.artikelGreeVsDaikinUntukRumah],
      ["Pengadaan AC Kost", routes.pengadaanKostApartemen],
      ["AC Low Watt", routes.katalogAcLowWatt],
      ["Kontak Radja AC", routes.kontak],
    ],
  },

  // CLUSTER B - PROCUREMENT AUTHORITY (3 artikel)
  {
    slug: "cara-menghitung-kebutuhan-ac-kost",
    path: routes.artikelCaraMenghitungKebutuhanAcKost,
    cluster: "b2b",
    role: "pillar",
    intent: "informational",
    parentSlug: null,
    updatedAt: "2026-06-15",
    moneyLinks: [
      ["Pengadaan AC Kost", routes.pengadaanKostApartemen, "Solusi pengadaan AC untuk kost dan apartemen banyak kamar."],
      ["Pengadaan AC", routes.pengadaanAc, "Halaman utama pengadaan AC untuk berbagai kebutuhan B2B."],
      ["AC Low Watt", routes.katalogAcLowWatt, "Pilihan AC low watt untuk kamar kost dengan daya terbatas."],
      ["Kalkulator PK AC", routes.kalkulatorPkAc, "Hitung kebutuhan PK per kamar sebelum pengadaan."],
    ],
    title: "Cara Menghitung Kebutuhan AC untuk Kost Banyak Kamar — Radja AC",
    description:
      "Panduan teknis menghitung kebutuhan AC untuk kost: jumlah unit, kapasitas PK per kamar, daya listrik total, tipe seragam, dan estimasi anggaran pengadaan.",
    h1: "Cara menghitung kebutuhan AC untuk kost banyak kamar",
    eyebrow: "Panduan Pengadaan AC Kost",
    readTime: "8 menit baca",
    intro:
      "Menghitung kebutuhan AC untuk kost bukan sekadar mengalikan jumlah kamar dengan harga unit. Ada pertimbangan teknis seperti daya listrik per kamar, kapasitas PK yang sesuai, pemilihan tipe seragam, dan strategi pengadaan bertahap yang perlu dipahami agar investasi lebih efisien.",
    sections: [
      {
        heading: "Langkah 1: Hitung jumlah kamar dan ukurannya",
        body: [
          "Mulai dengan mendata jumlah kamar yang akan dipasang AC. Catat ukuran masing-masing kamar (panjang x lebar), tinggi plafon, dan kondisi khusus seperti kamar yang terkena matahari sore atau berada di lantai atas.",
          "Untuk kost dengan ukuran kamar seragam (misalnya semua 3x3 meter), perhitungan lebih mudah. Untuk ukuran bervariasi, kelompokkan kamar berdasarkan ukuran untuk menentukan kapasitas PK yang sesuai.",
        ],
      },
      {
        heading: "Langkah 2: Tentukan kapasitas PK per kamar",
        body: [
          "Kamar kost ukuran 3x3 meter (9 m²) umumnya cukup dengan AC 1/2 PK. Kamar 3x4 meter (12 m²) bisa 1/2 PK atau 3/4 PK tergantung kondisi panas. Kamar lebih besar atau panas mungkin butuh 3/4 PK atau 1 PK.",
          "Jangan memilih PK terlalu kecil hanya untuk menghemat. AC yang bekerja terlalu keras akan cepat rusak dan boros listrik. Lebih baik investasi PK yang tepat dari awal.",
        ],
      },
      {
        heading: "Langkah 3: Hitung kebutuhan daya listrik total",
        body: [
          "Ini sering diabaikan dan menjadi masalah di kemudian hari. Hitung daya listrik total bangunan dan berapa yang tersedia untuk AC. Jika daya per kamar terbatas, pilih AC low watt.",
          "Contoh: kost 10 kamar dengan daya total 5500 VA. Jika setiap kamar punya perangkat lain (lampu, charger, kipas), daya tersisa untuk AC mungkin hanya 300-400 watt per kamar. AC low watt menjadi pilihan wajib.",
        ],
      },
      {
        heading: "Langkah 4: Pilih tipe seragam untuk kemudahan perawatan",
        body: [
          "Untuk kost, sangat disarankan memilih tipe dan brand yang seragam untuk semua kamar. Ini memudahkan perawatan, penggantian spare part, dan negosiasi harga untuk pembelian banyak unit.",
          "Tipe seragam juga memudahkan jika ada unit yang rusak — Anda bisa memindahkan unit dari kamar kosong atau menyimpan spare unit untuk penggantian cepat.",
        ],
      },
      {
        heading: "Langkah 5: Pertimbangkan pengadaan bertahap",
        body: [
          "Tidak semua kamar harus dipasang AC sekaligus. Banyak pemilik kost memulai dengan kamar yang sudah terisi atau kamar premium, lalu menambah unit secara bertahap sesuai okupansi dan cash flow.",
          "Radja AC melayani pengiriman dan pemasangan bertahap. Anda bisa memesan 5 unit dulu, lalu menambah 5 unit lagi bulan depan dengan tipe yang sama.",
        ],
      },
      {
        heading: "Langkah 6: Hitung estimasi anggaran total",
        body: [
          "Anggaran pengadaan AC kost meliputi: harga unit x jumlah kamar, biaya pemasangan per unit, dan kemungkinan kebutuhan tambahan seperti pipa ekstra atau instalasi listrik.",
          "Kirim data lengkap (jumlah kamar, ukuran, daya listrik, lokasi) ke tim Radja AC untuk mendapatkan estimasi anggaran yang lebih akurat. Harga bisa lebih kompetitif untuk pembelian banyak unit.",
        ],
      },
    ],
    faqs: [
      {
        question: "Berapa PK AC untuk kamar kost ukuran 3x3?",
        answer:
          "Kamar 3x3 meter (9 m²) umumnya cukup dengan AC 1/2 PK dalam kondisi normal. Jika kamar panas atau di lantai atas, pertimbangkan 3/4 PK.",
      },
      {
        question: "AC low watt wajib untuk kost?",
        answer:
          "Tergantung daya listrik per kamar. Jika daya terbatas (misalnya 450-900 VA per kamar), low watt sangat disarankan agar listrik tidak sering turun.",
      },
      {
        question: "Bisa beli AC kost secara bertahap?",
        answer:
          "Bisa. Radja AC melayani pengadaan bertahap dengan tipe seragam. Anda bisa memesan sebagian unit dulu, lalu menambah sesuai kebutuhan.",
      },
      {
        question: "Ada diskon untuk pembelian banyak unit?",
        answer:
          "Harga bisa lebih kompetitif untuk pembelian banyak unit. Kirim jumlah kamar dan kebutuhan untuk mendapatkan penawaran yang sesuai.",
      },
    ],
    ctaLabel: "Konsultasi Pengadaan AC Kost",
    waIntent: "konsultasi menghitung kebutuhan AC untuk kost banyak kamar",
    relatedLinks: [
      ["Pengadaan AC Kost", routes.pengadaanKostApartemen],
      ["AC Low Watt", routes.katalogAcLowWatt],
      ["Kalkulator PK AC", routes.kalkulatorPkAc],
      ["AC 1/2 PK", routes.katalogAcSetengahPk],
      ["Kontak Radja AC", routes.kontak],
    ],
  },
  {
    slug: "checklist-pengadaan-ac-hotel",
    path: routes.artikelChecklistPengadaanAcHotel,
    cluster: "b2b",
    role: "supporting",
    intent: "informational",
    parentSlug: "cara-menghitung-kebutuhan-ac-kost",
    updatedAt: "2026-06-15",
    moneyLinks: [
      ["Pengadaan AC Hotel", routes.pengadaanHotelGuestHouse, "Solusi pengadaan AC untuk hotel dan guest house."],
      ["AC Inverter", routes.katalogAcInverter, "Pilihan inverter untuk kamar tamu dengan pemakaian panjang."],
      ["AC Kantor & Komersial", routes.katalogAcKantorKomersial, "Pilihan AC untuk lobby dan area publik hotel."],
      ["Pengadaan AC", routes.pengadaanAc, "Halaman utama pengadaan AC untuk berbagai kebutuhan B2B."],
    ],
    title: "Checklist Pengadaan AC untuk Hotel dan Guest House — Radja AC",
    description:
      "Checklist lengkap pengadaan AC hotel: kebutuhan kamar tamu, lobby, area publik, pemilihan brand seragam, jadwal pemasangan, dan koordinasi dengan okupansi.",
    h1: "Checklist pengadaan AC untuk hotel dan guest house",
    eyebrow: "Panduan Pengadaan AC Hotel",
    readTime: "7 menit baca",
    intro:
      "Pengadaan AC untuk hotel berbeda dengan rumah atau kost. Ada pertimbangan khusus seperti kenyamanan tamu, keseragaman antar kamar, area publik dengan beban berbeda, dan jadwal pemasangan yang tidak mengganggu operasional. Checklist ini membantu Anda mempersiapkan pengadaan dengan lebih terstruktur.",
    sections: [
      {
        heading: "Checklist 1: Data kamar tamu",
        body: [
          "Catat jumlah kamar tamu, tipe kamar (standard, deluxe, suite), dan ukuran masing-masing. Kamar dengan ukuran berbeda mungkin butuh kapasitas PK berbeda.",
          "Perhatikan juga kamar yang terkena matahari sore atau berada di lantai atas — kamar ini mungkin butuh kapasitas sedikit lebih besar untuk kenyamanan tamu.",
        ],
      },
      {
        heading: "Checklist 2: Area publik dan fasilitas",
        body: [
          "Selain kamar tamu, hotel biasanya punya area publik: lobby, resepsionis, ruang makan, meeting room, dan koridor. Setiap area punya kebutuhan berbeda.",
          "Lobby dan ruang makan dengan plafon tinggi dan banyak orang butuh kapasitas lebih besar. Meeting room butuh AC yang bisa menyesuaikan jumlah peserta yang bervariasi.",
        ],
      },
      {
        heading: "Checklist 3: Pemilihan brand dan tipe seragam",
        body: [
          "Untuk kamar tamu, sangat disarankan memilih brand dan tipe seragam. Ini menjaga konsistensi kenyamanan antar kamar dan memudahkan perawatan.",
          "Pertimbangkan juga tingkat kebisingan unit. Kamar tamu butuh AC yang operasinya senyap agar tidak mengganggu istirahat tamu.",
        ],
      },
      {
        heading: "Checklist 4: Kebutuhan daya listrik",
        body: [
          "Hitung total kebutuhan daya untuk semua unit AC. Pastikan kapasitas listrik bangunan mencukupi, terutama saat semua kamar terisi dan AC menyala bersamaan.",
          "Untuk hotel yang sudah beroperasi, pertimbangkan apakah perlu upgrade daya listrik sebelum menambah unit AC.",
        ],
      },
      {
        heading: "Checklist 5: Jadwal pemasangan",
        body: [
          "Pemasangan AC di hotel yang sudah beroperasi harus dijadwalkan agar tidak mengganggu tamu. Pilih waktu okupansi rendah atau lakukan bertahap per lantai.",
          "Koordinasikan dengan tim Radja AC untuk jadwal yang fleksibel. Pemasangan bisa dilakukan di luar jam check-in/check-out atau saat kamar kosong.",
        ],
      },
      {
        heading: "Checklist 6: Garansi dan layanan",
        body: [
          "Pastikan unit yang dibeli original dengan garansi resmi brand. Untuk hotel, downtime AC bisa langsung berdampak pada kepuasan tamu dan review.",
          "Tanyakan juga tentang respons layanan jika ada kendala. Hotel butuh penanganan cepat karena kamar yang AC-nya rusak tidak bisa dijual.",
        ],
      },
    ],
    faqs: [
      {
        question: "AC apa yang cocok untuk kamar hotel?",
        answer:
          "Pilih AC dengan operasi senyap dan efisiensi baik untuk pemakaian panjang. Inverter sering dipilih karena suhu lebih stabil dan lebih hemat untuk kamar yang AC-nya menyala sepanjang malam.",
      },
      {
        question: "Bisa pasang AC hotel tanpa mengganggu tamu?",
        answer:
          "Bisa. Pemasangan dijadwalkan saat okupansi rendah atau dilakukan bertahap per lantai. Koordinasikan jadwal dengan tim Radja AC.",
      },
      {
        question: "Berapa lama proses pengadaan AC untuk hotel?",
        answer:
          "Tergantung jumlah unit dan ketersediaan stok. Untuk hotel kecil (10-20 kamar), biasanya bisa diselesaikan dalam 1-2 minggu. Hotel lebih besar mungkin butuh pengadaan bertahap.",
      },
    ],
    ctaLabel: "Konsultasi Pengadaan AC Hotel",
    waIntent: "konsultasi checklist pengadaan AC untuk hotel atau guest house",
    relatedLinks: [
      ["Pengadaan AC Hotel", routes.pengadaanHotelGuestHouse],
      ["AC Inverter", routes.katalogAcInverter],
      ["Cara Menghitung AC Kost", routes.artikelCaraMenghitungKebutuhanAcKost],
      ["AC Kantor & Komersial", routes.katalogAcKantorKomersial],
      ["Kontak Radja AC", routes.kontak],
    ],
  },
  {
    slug: "panduan-boq-ac-kontraktor",
    path: routes.artikelPanduanBoqAcKontraktor,
    cluster: "b2b",
    role: "supporting",
    intent: "informational",
    parentSlug: "cara-menghitung-kebutuhan-ac-kost",
    updatedAt: "2026-06-15",
    moneyLinks: [
      ["Pengadaan AC Kontraktor", routes.pengadaanKontraktorDeveloper, "Solusi supplier AC proyek untuk kontraktor dan developer."],
      ["Pengadaan AC Gedung", routes.pengadaanGedungKantorRuko, "Pengadaan AC untuk gedung, kantor, dan ruko."],
      ["AC Kantor & Komersial", routes.katalogAcKantorKomersial, "Pilihan AC untuk kebutuhan komersial dan proyek."],
      ["Pengadaan AC", routes.pengadaanAc, "Halaman utama pengadaan AC untuk berbagai kebutuhan B2B."],
    ],
    title: "Panduan BOQ AC untuk Kontraktor dan Developer — Radja AC",
    description:
      "Panduan menyusun BOQ AC untuk proyek: cara menentukan spesifikasi, memilih brand alternatif sesuai RAB, dan koordinasi pengiriman mengikuti progres lapangan.",
    h1: "Panduan BOQ AC untuk kontraktor dan developer",
    eyebrow: "Panduan Pengadaan AC Proyek",
    readTime: "8 menit baca",
    intro:
      "Menyusun BOQ (Bill of Quantity) AC untuk proyek konstruksi membutuhkan pemahaman tentang spesifikasi teknis, alternatif brand sesuai anggaran, dan koordinasi pengiriman yang mengikuti progres lapangan. Panduan ini membantu kontraktor dan developer menyusun BOQ AC yang realistis dan dapat dieksekusi.",
    sections: [
      {
        heading: "Memahami kebutuhan proyek",
        body: [
          "Sebelum menyusun BOQ, pahami dulu kebutuhan proyek secara keseluruhan. Berapa jumlah titik AC? Apa fungsi masing-masing ruangan? Apakah ada standar khusus dari owner atau konsultan?",
          "Untuk proyek perumahan, kebutuhan biasanya standar: kamar tidur, ruang keluarga, dan mungkin ruang kerja. Untuk proyek komersial, kebutuhan lebih bervariasi: ruang kantor, meeting room, lobby, dan area publik.",
        ],
      },
      {
        heading: "Menentukan spesifikasi per titik",
        body: [
          "Setiap titik AC perlu spesifikasi yang jelas: kapasitas PK, tipe (standard/low watt/inverter), dan brand. Kapasitas ditentukan dari luas ruangan, fungsi, dan beban panas.",
          "Untuk BOQ, biasanya dicantumkan spesifikasi minimum dan brand referensi. Contoh: 'AC Split 1 PK Inverter, Daikin atau setara'. Ini memberi fleksibilitas untuk alternatif brand sesuai ketersediaan dan anggaran.",
        ],
      },
      {
        heading: "Memilih brand alternatif sesuai RAB",
        body: [
          "RAB proyek sering sudah ditetapkan, sehingga pemilihan brand harus menyesuaikan. Radja AC menyediakan berbagai brand: Daikin dan Gree untuk segmen premium, Midea dan Hisense untuk segmen value.",
          "Sebagai Authorized Dealer untuk Daikin, Midea, Hisense, dan Sansui, serta Proshop Gree, Radja AC bisa membantu menyediakan alternatif brand yang sesuai spesifikasi BOQ dan anggaran proyek.",
        ],
      },
      {
        heading: "Menyusun jadwal pengiriman",
        body: [
          "Pengiriman AC untuk proyek biasanya tidak sekaligus, tapi mengikuti progres lapangan. Unit dikirim saat ruangan sudah siap dipasang, bukan saat proyek baru mulai.",
          "Koordinasikan jadwal pengiriman dengan tim Radja AC. Pengiriman bisa bertahap per lantai atau per blok, mengikuti progres konstruksi dan kesiapan instalasi listrik.",
        ],
      },
      {
        heading: "Dokumentasi dan administrasi",
        body: [
          "Untuk proyek, dokumentasi penting untuk administrasi dan serah terima. Radja AC menyediakan dokumentasi pengiriman dan bisa membantu kelengkapan administrasi sesuai kebutuhan proyek.",
          "Pastikan juga garansi unit tercatat dengan baik. Garansi mengikuti ketentuan resmi brand, dan Radja AC membantu arahan klaim bila ada kendala unit.",
        ],
      },
      {
        heading: "Tips negosiasi untuk volume besar",
        body: [
          "Untuk proyek dengan volume besar (puluhan hingga ratusan unit), harga bisa lebih kompetitif. Kirim BOQ lengkap ke tim Radja AC untuk mendapatkan penawaran yang sesuai.",
          "Pertimbangkan juga untuk membangun hubungan jangka panjang. Kontraktor yang rutin mengerjakan proyek bisa mendapat prioritas stok dan layanan yang lebih responsif.",
        ],
      },
    ],
    faqs: [
      {
        question: "Radja AC bisa supply AC untuk proyek besar?",
        answer:
          "Bisa. Radja AC memiliki gudang sendiri dan bisa menyediakan puluhan hingga ratusan unit untuk proyek. Pengiriman dijadwalkan mengikuti progres lapangan.",
      },
      {
        question: "Brand apa saja yang tersedia untuk proyek?",
        answer:
          "Daikin, Gree, Midea, Hisense, Sansui, dan brand lain sesuai stok. Sebagai Authorized Dealer dan Proshop, unit yang disediakan original dengan garansi resmi.",
      },
      {
        question: "Bisa bantu susun spesifikasi BOQ?",
        answer:
          "Bisa. Kirim data proyek (jumlah titik, fungsi ruangan, anggaran) dan tim Radja AC bantu rekomendasikan spesifikasi dan brand yang sesuai.",
      },
      {
        question: "Bagaimana sistem pembayaran untuk proyek?",
        answer:
          "Sistem pembayaran bisa disesuaikan dengan kebutuhan proyek: termin, DP + pelunasan, atau sesuai kesepakatan. Diskusikan dengan tim Radja AC.",
      },
    ],
    ctaLabel: "Konsultasi BOQ AC Proyek",
    waIntent: "konsultasi panduan BOQ AC untuk proyek kontraktor atau developer",
    relatedLinks: [
      ["Pengadaan AC Kontraktor", routes.pengadaanKontraktorDeveloper],
      ["Pengadaan AC Gedung", routes.pengadaanGedungKantorRuko],
      ["Cara Menghitung AC Kost", routes.artikelCaraMenghitungKebutuhanAcKost],
      ["AC Kantor & Komersial", routes.katalogAcKantorKomersial],
      ["Kontak Radja AC", routes.kontak],
    ],
  },

  // CLUSTER C - COMMERCIAL AUTHORITY (2 artikel)
  {
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
  },
  {
    slug: "ac-kantor-kecil-inverter-atau-low-watt",
    path: routes.artikelAcKantorKecilInverterAtauLowWatt,
    cluster: "comparison",
    role: "supporting",
    intent: "commercial",
    parentSlug: "ac-inverter-vs-low-watt",
    updatedAt: "2026-06-15",
    moneyLinks: [
      ["AC Inverter", routes.katalogAcInverter, "Pilihan AC inverter untuk kantor dengan pemakaian rutin."],
      ["AC Low Watt", routes.katalogAcLowWatt, "Pilihan AC low watt untuk kantor dengan daya terbatas."],
      ["AC Kantor & Komersial", routes.katalogAcKantorKomersial, "Pilihan AC untuk berbagai kebutuhan kantor."],
      ["Kalkulator PK AC", routes.kalkulatorPkAc, "Hitung kebutuhan PK untuk ruang kantor Anda."],
    ],
    title: "AC untuk Kantor Kecil: Inverter atau Low Watt? — Radja AC",
    description:
      "Bingung pilih AC inverter atau low watt untuk kantor kecil? Pahami perbedaannya dan mana yang lebih cocok berdasarkan jam operasional dan daya listrik.",
    h1: "AC untuk kantor kecil: inverter atau low watt?",
    eyebrow: "Panduan AC Kantor",
    readTime: "6 menit baca",
    intro:
      "Kantor kecil punya kebutuhan AC yang berbeda dengan rumah. AC menyala lebih lama (8-10 jam sehari), ada beban panas dari komputer dan peralatan, dan kenyamanan karyawan langsung memengaruhi produktivitas. Pilihan antara inverter dan low watt bergantung pada kondisi spesifik kantor Anda.",
    sections: [
      {
        heading: "Karakteristik kebutuhan AC kantor kecil",
        body: [
          "Kantor kecil biasanya beroperasi 8-10 jam sehari, 5-6 hari seminggu. AC menyala hampir sepanjang jam kerja, berbeda dengan kamar tidur yang hanya dipakai malam hari.",
          "Ada juga beban panas tambahan dari komputer, printer, lampu, dan orang-orang yang bekerja. Ruangan 20 m² dengan 4-5 orang dan beberapa komputer butuh pendinginan lebih dari kamar tidur ukuran sama.",
        ],
      },
      {
        heading: "Kapan pilih inverter untuk kantor?",
        body: [
          "Inverter sangat cocok untuk kantor yang AC-nya menyala 8+ jam sehari. Setelah suhu tercapai, kompresor bekerja lebih ringan dan konsumsi listrik lebih efisien. Penghematan terasa signifikan untuk pemakaian rutin.",
          "Inverter juga menjaga suhu lebih stabil, yang penting untuk kenyamanan kerja. Suhu yang naik-turun bisa mengganggu konsentrasi dan membuat karyawan tidak nyaman.",
        ],
      },
      {
        heading: "Kapan pilih low watt untuk kantor?",
        body: [
          "Low watt menjadi pilihan jika daya listrik kantor terbatas. Banyak ruko atau kantor kecil yang berbagi daya dengan unit lain atau punya kapasitas listrik yang tidak besar.",
          "Jika menambah AC berisiko membuat listrik sering turun, low watt adalah solusi yang lebih aman. Fokusnya adalah meringankan tarikan daya, bukan efisiensi pemakaian jangka panjang.",
        ],
      },
      {
        heading: "Pertimbangan kapasitas PK untuk kantor",
        body: [
          "Kantor dengan banyak komputer dan orang butuh PK lebih besar dari perhitungan standar. Ruangan 20 m² yang di rumah cukup 1 PK, di kantor mungkin butuh 1.5 PK.",
          "Jangan memilih PK terlalu kecil hanya karena ingin hemat. AC yang bekerja terlalu keras akan lebih boros listrik dan lebih cepat rusak.",
        ],
      },
      {
        heading: "Rekomendasi berdasarkan kondisi",
        body: [
          "Daya listrik cukup + pemakaian 8+ jam: pilih inverter untuk efisiensi jangka panjang dan kenyamanan suhu yang stabil.",
          "Daya listrik terbatas: pilih low watt untuk menghindari listrik sering turun. Jika memungkinkan, pertimbangkan inverter low watt yang menggabungkan kedua keunggulan.",
        ],
      },
    ],
    faqs: [
      {
        question: "Kantor kecil 4x5 meter dengan 4 orang, butuh AC berapa PK?",
        answer:
          "Ruangan 20 m² dengan 4 orang dan komputer butuh minimal 1.5 PK. Jika ada banyak peralatan atau ruangan panas, pertimbangkan 2 PK.",
      },
      {
        question: "Inverter lebih mahal, apakah worth it untuk kantor kecil?",
        answer:
          "Untuk kantor yang AC-nya menyala 8+ jam sehari, inverter biasanya worth it. Penghematan listrik bulanan bisa menutup selisih harga dalam 1-2 tahun.",
      },
      {
        question: "Kantor di ruko dengan daya terbatas, pilih apa?",
        answer:
          "Pilih low watt untuk menghindari listrik turun. Jika tersedia, inverter low watt adalah pilihan terbaik karena hemat tarikan daya sekaligus efisien untuk pemakaian panjang.",
      },
    ],
    ctaLabel: "Konsultasi AC Kantor Kecil",
    waIntent: "konsultasi memilih AC inverter atau low watt untuk kantor kecil",
    relatedLinks: [
      ["AC Inverter", routes.katalogAcInverter],
      ["AC Low Watt", routes.katalogAcLowWatt],
      ["AC Inverter vs Low Watt", routes.artikelAcInverterVsLowWatt],
      ["AC Kantor & Komersial", routes.katalogAcKantorKomersial],
      ["Kontak Radja AC", routes.kontak],
    ],
  },

  // CLUSTER D - LOCAL AUTHORITY (3 artikel)
  {
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
  },
  {
    slug: "ac-untuk-villa-dan-penginapan-baturraden",
    path: routes.artikelAcUntukVillaPenginapanBaturraden,
    cluster: "informational",
    role: "supporting",
    intent: "commercial",
    parentSlug: "panduan-beli-ac-baru",
    updatedAt: "2026-06-15",
    moneyLinks: [
      ["Jual AC Baturraden", routes.jualAcBaturraden, "Konsultasi pembelian AC di area wisata Baturraden."],
      ["Jual AC Cilongok", routes.jualAcCilongok, "Layanan AC untuk area Cilongok dekat Curug Cipendok."],
      ["Pengadaan AC Hotel", routes.pengadaanHotelGuestHouse, "Solusi pengadaan AC untuk penginapan dan guest house."],
      ["AC Inverter", routes.katalogAcInverter, "Pilihan inverter untuk kamar tamu dengan pemakaian malam."],
    ],
    title: "AC untuk Penginapan dan Villa di Baturraden — Radja AC",
    description:
      "Panduan memilih AC untuk villa, homestay, dan penginapan di kawasan wisata Baturraden: kebutuhan kamar tamu, efisiensi untuk pemakaian musiman, dan tipe seragam.",
    h1: "AC untuk penginapan dan villa di Baturraden",
    eyebrow: "AC Penginapan Baturraden",
    readTime: "7 menit baca",
    intro:
      "Baturraden adalah kawasan wisata di kaki Gunung Slamet yang ramai dikunjungi saat akhir pekan dan musim liburan. Villa, homestay, dan penginapan di area ini punya kebutuhan AC yang unik: kamar tamu yang nyaman untuk wisatawan, efisiensi untuk pemakaian yang tidak setiap hari, dan ketahanan untuk kondisi lembap pegunungan.",
    sections: [
      {
        heading: "Karakteristik penginapan di Baturraden",
        body: [
          "Penginapan di Baturraden biasanya ramai saat akhir pekan dan musim liburan, tapi relatif sepi di hari kerja. Pola pemakaian AC tidak setiap hari seperti rumah tangga, tapi intensif saat ada tamu.",
          "Meski Baturraden terkenal sejuk, kamar tamu tetap butuh AC untuk kenyamanan. Wisatawan dari kota yang terbiasa dengan AC akan merasa kurang nyaman tanpa pendinginan, terutama saat cuaca panas atau kamar di lantai atas.",
        ],
      },
      {
        heading: "Pilihan AC untuk kamar tamu",
        body: [
          "Untuk kamar tamu penginapan, inverter sering menjadi pilihan karena suhu lebih stabil dan lebih senyap. Tamu yang menginap untuk istirahat akan lebih nyaman dengan AC yang tidak berisik.",
          "Kapasitas 1/2 PK atau 3/4 PK biasanya cukup untuk kamar tamu ukuran standar. Untuk suite atau kamar lebih besar, pertimbangkan 1 PK.",
        ],
      },
      {
        heading: "Tipe seragam untuk kemudahan operasional",
        body: [
          "Seperti hotel, penginapan di Baturraden sebaiknya memilih tipe dan brand seragam untuk semua kamar. Ini menjaga konsistensi kenyamanan dan memudahkan perawatan.",
          "Jika ada unit yang bermasalah, Anda bisa memindahkan unit dari kamar yang sedang kosong. Spare part juga bisa dipakai bersama antar unit.",
        ],
      },
      {
        heading: "Pertimbangan untuk kondisi Baturraden",
        body: [
          "Baturraden memiliki kelembapan yang lebih tinggi karena berada di kawasan pegunungan. Pilih AC dengan fitur anti-jamur atau pastikan perawatan rutin untuk mencegah masalah kelembapan.",
          "Untuk villa yang tidak selalu terisi, AC yang jarang dipakai perlu dinyalakan secara berkala untuk menjaga kondisinya. Ini mencegah masalah seperti jamur atau komponen yang macet.",
        ],
      },
      {
        heading: "Area layanan di sekitar Baturraden",
        body: [
          "Radja AC melayani area Baturraden, Karangmangu, Kemutug, dan sekitarnya. Untuk penginapan di jalur wisata Purwokerto-Baturraden, pengiriman dan pemasangan bisa dijadwalkan.",
          "Area Cilongok dengan Curug Cipendok juga dilayani. Pemilik villa atau homestay di kawasan wisata ini bisa konsultasi kebutuhan AC untuk kamar tamu.",
        ],
      },
    ],
    faqs: [
      {
        question: "Baturraden kan sejuk, perlu AC untuk penginapan?",
        answer:
          "Perlu untuk kenyamanan tamu. Wisatawan dari kota yang terbiasa AC akan merasa kurang nyaman tanpa pendinginan. AC juga membantu mengontrol kelembapan kamar.",
      },
      {
        question: "AC apa yang cocok untuk villa di Baturraden?",
        answer:
          "Inverter 1/2 PK atau 3/4 PK untuk kamar standar. Inverter lebih senyap dan suhu lebih stabil, cocok untuk tamu yang menginap untuk istirahat.",
      },
      {
        question: "Bisa pasang AC untuk homestay di sekitar Curug Cipendok?",
        answer:
          "Bisa. Radja AC melayani area Cilongok termasuk sekitar Curug Cipendok. Pengiriman dan pemasangan dijadwalkan sesuai lokasi.",
      },
      {
        question: "Ada tips perawatan AC di daerah lembap seperti Baturraden?",
        answer:
          "Nyalakan AC secara berkala meski kamar kosong untuk mencegah jamur. Bersihkan filter lebih sering dan pastikan drainase lancar. Pertimbangkan AC dengan fitur anti-jamur.",
      },
    ],
    ctaLabel: "Konsultasi AC Penginapan Baturraden",
    waIntent: "konsultasi memilih AC untuk villa atau penginapan di Baturraden",
    relatedLinks: [
      ["Jual AC Baturraden", routes.jualAcBaturraden],
      ["Jual AC Cilongok", routes.jualAcCilongok],
      ["Pengadaan AC Hotel", routes.pengadaanHotelGuestHouse],
      ["AC Inverter", routes.katalogAcInverter],
      ["Kontak Radja AC", routes.kontak],
    ],
  },
  {
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
  },
];

export function getArticleItem(slug) {
  return articleItems.find((item) => item.slug === slug);
}
