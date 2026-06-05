import { routes } from "@/content/routes";

const defaultBuyingChecks = [
  "Ukuran ruangan, tinggi plafon, dan kondisi panas matahari",
  "Daya listrik dan kebutuhan standard, low watt, atau inverter",
  "Jumlah unit, preferensi brand, dan target anggaran",
  "Alamat pengiriman serta kebutuhan unit saja atau opsi pemasangan",
];

const defaultRelatedLinks = [
  ["Katalog AC", routes.katalog],
  ["Kalkulator PK AC", routes.kalkulatorPkAc],
  ["Pengiriman & Pemasangan", routes.pengirimanPemasangan],
  ["AC Split Rumah", routes.katalogAcSplitRumah],
  ["AC Low Watt", routes.katalogAcLowWatt],
  ["AC Inverter", routes.katalogAcInverter],
  ["Bukti Pengiriman & Proyek", routes.buktiPengirimanProyek],
  ["Kontak RADJA AC", routes.kontak],
];

export const areaItems = [
  {
    slug: "jual-ac-purwokerto",
    path: routes.jualAcPurwokerto,
    areaName: "Purwokerto",
    label: "Jual AC Purwokerto",
    title: "Jual AC Purwokerto | Cek Stok, PK & Opsi Pemasangan — RADJA AC",
    description:
      "Butuh AC Purwokerto untuk rumah, kost, toko, kantor, hotel, guest house, atau banyak unit? RADJA AC bantu cek PK, stok, pengiriman, dan opsi pemasangan.",
    h1: "Jual AC Purwokerto dengan cek stok, PK, dan opsi pemasangan",
    eyebrow: "Area Utama Purwokerto",
    intro:
      "Butuh beli AC di Purwokerto untuk rumah, kost, toko, kantor, hotel, guest house, hospitality, atau banyak unit? Tim RADJA AC membantu membaca kebutuhan PK, daya listrik, pilihan brand, stok unit, pengiriman, dan opsi pemasangan sebelum pembelian.",
    localContext:
      "Purwokerto menjadi area utama permintaan RADJA AC untuk kamar tidur, ruang keluarga, kost, kontrakan, toko, ruko, kantor, klinik, hotel, guest house, hospitality, serta pembelian beberapa unit. Karena tiap ruangan punya beban panas, ukuran, daya listrik, dan pola pemakaian berbeda, tim RADJA AC tidak langsung menebak unit, tetapi mengecek data ruangan, anggaran, brand, dan alamat terlebih dahulu.",
    coverageNote:
      "Showroom dan gudang RADJA AC berada di Pamijen, Sokaraja, Banyumas. Untuk kebutuhan Purwokerto, stok unit, jadwal pengiriman, opsi pemasangan, dan kebutuhan material dikonfirmasi berdasarkan alamat serta kondisi lokasi.",
    commonNeeds: [
      "AC kamar tidur, rumah tinggal, dan ruang keluarga di Purwokerto",
      "AC kost, kontrakan, homestay, dan kamar sewa",
      "AC toko, ruko, kantor, klinik, dan ruang usaha",
      "Pengadaan beberapa unit untuk usaha, hotel, guest house, kantor, proyek, dan kebutuhan banyak unit",
    ],
    buyingChecks: [
      "Ukuran ruangan, tinggi plafon, dan arah panas matahari",
      "Daya listrik dan kebutuhan standard, low watt, atau inverter",
      "Jumlah unit, preferensi brand, dan target anggaran",
      "Alamat Purwokerto, kebutuhan unit saja, pengiriman, atau opsi pemasangan",
    ],
    paymentNote:
      "Pembayaran fleksibel bisa dikonsultasikan: DP, COD, atau transfer setelah kebutuhan unit, pengiriman, dan opsi pemasangan jelas.",
    relatedLinks: [
      ["Jual AC Banyumas", routes.jualAcBanyumas],
      ["Jual AC Sokaraja", routes.jualAcSokaraja],
      ["Katalog AC", routes.katalog],
      ["Kalkulator PK AC", routes.kalkulatorPkAc],
      ["AC Split Rumah", routes.katalogAcSplitRumah],
      ["AC Low Watt", routes.katalogAcLowWatt],
      ["AC Inverter", routes.katalogAcInverter],
      ["Bukti Pengiriman & Proyek", routes.buktiPengirimanProyek],
      ["Kontak RADJA AC", routes.kontak],
    ],
    ctaLabel: "Chat WhatsApp untuk cek AC Purwokerto",
    waIntent: "cek stok AC Purwokerto dengan data ukuran ruangan daya listrik jumlah unit alamat dan kebutuhan pemasangan",
    waArea: "Purwokerto",
    keywordVariants: [
      "jual AC Purwokerto",
      "toko AC Purwokerto",
      "beli AC Purwokerto",
      "dealer AC Purwokerto",
      "AC rumah Purwokerto",
      "AC kost Purwokerto",
      "AC toko Purwokerto",
      "pengiriman AC Purwokerto",
      "pemasangan AC Purwokerto",
    ],
    nearbyAreaLinks: [
      ["Banyumas", routes.jualAcBanyumas],
      ["Sokaraja", routes.jualAcSokaraja],
      ["Baturraden", routes.jualAcBaturraden],
      ["Kembaran", routes.jualAcKembaran],
    ],
    trustBullets: [
      "Purwokerto dilayani dari showroom dan gudang RADJA AC di Pamijen, Sokaraja, Banyumas.",
      "Kebutuhan AC dicek dari ukuran ruangan, daya listrik, jumlah unit, stok aktif, dan opsi pemasangan.",
      "Pembeli bisa melihat bukti aktivitas RADJA AC melalui dokumentasi showroom, stok fisik, pengiriman, dan pemasangan.",
    ],
    localFaq: [
      [
        "Apakah RADJA AC melayani pembelian AC di Purwokerto?",
        "Ya, kebutuhan AC Purwokerto bisa dikonsultasikan melalui WhatsApp. Tim RADJA AC akan mengecek ukuran ruangan, daya listrik, stok unit, pengiriman, dan opsi pemasangan sebelum pembelian.",
      ],
      [
        "Apakah bisa datang ke showroom sebelum membeli AC?",
        "Bisa dikonsultasikan dulu. Showroom dan gudang RADJA AC berada di Pamijen, Sokaraja, Banyumas. Stok dan tipe unit sebaiknya dicek terlebih dahulu sebelum datang.",
      ],
      [
        "Data apa yang perlu dikirim untuk cek AC Purwokerto?",
        "Kirim ukuran ruangan, daya listrik, jumlah unit, alamat area Purwokerto, kebutuhan unit saja atau pemasangan, serta preferensi brand bila ada.",
      ],
    ],
  },
  {
    slug: "jual-ac-banyumas",
    path: routes.jualAcBanyumas,
    areaName: "Banyumas",
    label: "Jual AC Banyumas",
    title: "Jual AC Banyumas | Cek Stok, PK, Pengiriman & Pemasangan — RADJA AC",
    description:
      "Butuh AC area Banyumas untuk rumah, kost, toko, kantor, usaha, atau banyak unit? RADJA AC cek PK, stok, pengiriman unit, dan opsi pemasangan via WhatsApp.",
    h1: "Jual AC Banyumas untuk rumah, kost, toko, usaha, dan banyak unit",
    eyebrow: "Area Utama Banyumas",
    intro:
      "RADJA AC melayani kebutuhan AC area Banyumas untuk rumah, kost, kontrakan, toko, kantor atau ruko, usaha, dan banyak unit. Sebelum pembelian, tim RADJA AC mengecek kebutuhan PK, daya listrik, pilihan brand, stok, pengiriman, dan opsi pemasangan.",
    localContext:
      "Banyumas adalah basis operasional utama RADJA AC, dengan showroom dan gudang di Pamijen, Sokaraja. Kebutuhan AC di Banyumas bisa datang dari rumah tinggal, kost, kontrakan, toko, klinik, kantor atau ruko, usaha harian, hingga pembelian beberapa unit. Agar tidak salah pilih kapasitas, tim RADJA AC membaca ukuran ruangan, daya listrik, pola pemakaian, anggaran, area detail, dan kebutuhan unit saja atau pemasangan.",
    coverageNote:
      "Untuk alamat di area Banyumas, stok unit, pengiriman, jadwal, dan opsi pemasangan tetap dikonfirmasi berdasarkan lokasi detail, jumlah unit, akses pemasangan, dan ketersediaan tim.",
    commonNeeds: [
      "AC rumah, kamar tidur, dan ruang keluarga di Banyumas",
      "AC kost, kontrakan, homestay, dan rumah sewa",
      "AC toko, klinik, kantor, ruko, dan ruang usaha",
      "Pembelian beberapa unit untuk usaha lokal, properti sewa, proyek, pengadaan, atau kebutuhan banyak unit",
    ],
    buyingChecks: [
      "Area detail di Banyumas dan akses lokasi",
      "Ukuran ruangan, tinggi plafon, dan kondisi panas matahari",
      "Daya listrik dan kebutuhan standard, low watt, atau inverter",
      "Jumlah unit, preferensi brand, anggaran, dan kebutuhan pemasangan",
    ],
    paymentNote:
      "Pembayaran fleksibel bisa dikonsultasikan: DP, COD, atau transfer setelah kebutuhan unit, pengiriman, dan opsi pemasangan jelas.",
    relatedLinks: [
      ["Jual AC Purwokerto", routes.jualAcPurwokerto],
      ["Jual AC Sokaraja", routes.jualAcSokaraja],
      ["Katalog AC", routes.katalog],
      ["Kalkulator PK AC", routes.kalkulatorPkAc],
      ["AC Split Rumah", routes.katalogAcSplitRumah],
      ["AC Low Watt", routes.katalogAcLowWatt],
      ["AC Gree", routes.brandGree],
      ["Bukti Pengiriman & Proyek", routes.buktiPengirimanProyek],
      ["Kontak RADJA AC", routes.kontak],
    ],
    ctaLabel: "Chat WhatsApp untuk cek AC Banyumas",
    waIntent: "cek stok AC Banyumas dengan data ukuran ruangan daya listrik jumlah unit alamat dan kebutuhan pemasangan",
    waArea: "Banyumas",
    keywordVariants: [
      "jual AC Banyumas",
      "toko AC Banyumas",
      "beli AC Banyumas",
      "AC rumah Banyumas",
      "AC kost Banyumas",
      "AC toko Banyumas",
      "pengiriman AC Banyumas",
      "pemasangan AC Banyumas",
    ],
    nearbyAreaLinks: [
      ["Purwokerto", routes.jualAcPurwokerto],
      ["Sokaraja", routes.jualAcSokaraja],
      ["Patikraja", routes.jualAcPatikraja],
      ["Rawalo", routes.jualAcRawalo],
    ],
    trustBullets: [
      "Banyumas adalah basis operasional RADJA AC dengan showroom dan gudang di Pamijen, Sokaraja.",
      "Kebutuhan AC dicek dari area detail, ukuran ruangan, daya listrik, jumlah unit, stok aktif, dan opsi pemasangan.",
      "Bukti aktivitas RADJA AC bisa dicek melalui dokumentasi showroom, stok fisik, pengiriman, dan pemasangan.",
    ],
    localFaq: [
      [
        "Apakah RADJA AC melayani pembelian AC area Banyumas?",
        "Ya, kebutuhan AC area Banyumas bisa dikonsultasikan melalui WhatsApp. Tim RADJA AC mengecek stok unit, ukuran ruangan, daya listrik, pengiriman, dan opsi pemasangan sebelum pembelian.",
      ],
      [
        "Apakah showroom RADJA AC berada di Banyumas?",
        "Showroom dan gudang RADJA AC berada di Pamijen, Sokaraja, Banyumas. Sebaiknya cek stok dan tipe unit terlebih dahulu melalui WhatsApp sebelum datang.",
      ],
      [
        "Bisa beli AC untuk kost, toko, kantor, atau banyak unit di Banyumas?",
        "Bisa dikonsultasikan. Kirim jumlah ruangan, ukuran ruangan, daya listrik, alamat area Banyumas, target anggaran, dan kebutuhan unit saja atau pemasangan.",
      ],
    ],
  },
  {
    slug: "jual-ac-sokaraja",
    path: routes.jualAcSokaraja,
    areaName: "Sokaraja",
    label: "Jual AC Sokaraja",
    title: "Jual AC Sokaraja | Dekat Showroom & Gudang RADJA AC — RADJA AC",
    description:
      "Butuh AC di Sokaraja dekat showroom dan gudang RADJA AC? Cek stok, kebutuhan PK, pengiriman unit, opsi pemasangan, atau kebutuhan banyak unit via WhatsApp.",
    h1: "Jual AC Sokaraja dekat showroom dan gudang RADJA AC",
    eyebrow: "Area Showroom & Gudang RADJA AC",
    intro:
      "Showroom dan gudang RADJA AC berada di Pamijen, Sokaraja, Banyumas. Pembelian AC original untuk rumah, kost, toko, kantor, usaha, dan kebutuhan banyak unit bisa dimulai dari cek PK, stok, pengiriman, dan opsi pemasangan.",
    localContext:
      "Showroom dan gudang RADJA AC berada di Pamijen, Sokaraja. Calon pembeli di Sokaraja dan sekitarnya bisa mulai dari cek ukuran ruangan, daya listrik, pilihan brand, stok unit, pengiriman, dan kebutuhan pemasangan sebelum datang atau melanjutkan pembelian.",
    coverageNote:
      "Untuk Sokaraja, Pamijen, dan area sekitar, tim RADJA AC mengecek stok, alamat, jadwal, kebutuhan material, akses lokasi, dan opsi pemasangan agar estimasi lebih rapi sejak awal.",
    commonNeeds: [
      "AC rumah, kamar tidur, dan ruang keluarga di Sokaraja",
      "AC kost, kontrakan, homestay, dan rumah sewa",
      "AC toko, ruko, kantor, klinik, dan ruang usaha",
      "Kebutuhan AC banyak unit untuk usaha lokal, properti, proyek, atau pengadaan",
    ],
    buyingChecks: [
      "Alamat detail Sokaraja, Pamijen, atau area sekitar",
      "Ukuran ruangan, tinggi plafon, dan kondisi panas matahari",
      "Daya listrik dan kebutuhan standard, low watt, atau inverter",
      "Jumlah unit, preferensi brand, anggaran, dan kebutuhan pemasangan",
    ],
    paymentNote:
      "Pembayaran fleksibel bisa dikonsultasikan: DP, COD, atau transfer setelah kebutuhan unit, pengiriman, dan opsi pemasangan jelas.",
    relatedLinks: [
      ["Jual AC Purwokerto", routes.jualAcPurwokerto],
      ["Jual AC Banyumas", routes.jualAcBanyumas],
      ["Katalog AC", routes.katalog],
      ["Kalkulator PK AC", routes.kalkulatorPkAc],
      ["AC Gree", routes.brandGree],
      ["AC Daikin", routes.brandDaikin],
      ["Bukti Pengiriman & Proyek", routes.buktiPengirimanProyek],
      ["Tentang RADJA AC", routes.tentangKami],
      ["Kontak RADJA AC", routes.kontak],
    ],
    ctaLabel: "Chat WhatsApp untuk cek AC Sokaraja",
    waIntent: "cek stok AC Sokaraja dengan data ukuran ruangan daya listrik jumlah unit alamat dan kebutuhan pemasangan",
    waArea: "Sokaraja",
    keywordVariants: [
      "jual AC Sokaraja",
      "toko AC Sokaraja",
      "beli AC Sokaraja",
      "showroom AC Sokaraja",
      "AC rumah Sokaraja",
      "AC toko Sokaraja",
      "pengiriman AC Sokaraja",
      "pemasangan AC Sokaraja",
    ],
    nearbyAreaLinks: [
      ["Purwokerto", routes.jualAcPurwokerto],
      ["Banyumas", routes.jualAcBanyumas],
      ["Kembaran", routes.jualAcKembaran],
      ["Patikraja", routes.jualAcPatikraja],
    ],
    trustBullets: [
      "Showroom dan gudang RADJA AC berada di Pamijen, Sokaraja, Banyumas.",
      "Pembeli bisa cek stok dan tipe unit terlebih dahulu sebelum datang atau melanjutkan pembelian.",
      "Kebutuhan AC dicek dari ukuran ruangan, daya listrik, jumlah unit, stok aktif, dan opsi pemasangan.",
    ],
    localFaq: [
      [
        "Apakah showroom RADJA AC berada di Sokaraja?",
        "Ya, showroom dan gudang RADJA AC berada di Pamijen, Sokaraja, Banyumas. Sebelum datang, pembeli sebaiknya cek stok dan tipe unit melalui WhatsApp.",
      ],
      [
        "Apakah RADJA AC melayani pemasangan AC di Sokaraja?",
        "Opsi pemasangan area Sokaraja bisa dikonsultasikan. Tim RADJA AC akan mengecek alamat, posisi indoor dan outdoor, kebutuhan material, stok unit, dan jadwal.",
      ],
      [
        "Bisa beli AC untuk rumah, toko, kost, atau kantor di Sokaraja?",
        "Bisa dikonsultasikan. Kirim ukuran ruangan, daya listrik, jumlah unit, alamat Sokaraja, kebutuhan unit saja atau pemasangan, dan preferensi brand bila ada.",
      ],
    ],
  },
    {
      slug: "jual-ac-jatilawang",
      path: routes.jualAcJatilawang,
      areaName: "Jatilawang",
      label: "Jual AC Jatilawang",
      title: "Jual AC Jatilawang untuk Rumah, Toko & Usaha — RADJA AC",
      description:
        "Butuh AC untuk rumah, toko, ruko, kantor, atau usaha di Jatilawang? RADJA AC bantu cek PK, stok, pengiriman, opsi pemasangan, dan pembayaran fleksibel.",
      h1: "Jual AC Jatilawang untuk Rumah, Toko & Usaha",
      eyebrow: "Area Banyumas",
      intro:
        "Butuh AC di Jatilawang untuk rumah, toko, ruko, kantor, ruang usaha, atau beberapa unit? Tim RADJA AC bantu cek kebutuhan PK, daya listrik, stok brand, pengiriman, dan opsi pemasangan dari data awal.",
      localContext:
        "Jatilawang berada di jalur Banyumas bagian barat-selatan dengan kebutuhan AC untuk rumah tinggal, toko, ruko, kantor kecil, ruang usaha, dan beberapa unit. Kirim ukuran ruangan, jumlah unit, daya listrik, alamat detail, anggaran awal, serta kebutuhan unit saja atau opsi pemasangan.",
      coverageNote:
        "Showroom dan gudang RADJA AC berada di Banyumas. Kebutuhan AC area Jatilawang dilayani dengan konsultasi PK, cek stok unit, pengiriman, serta opsi pemasangan sesuai alamat, jumlah unit, dan jadwal.",
      keywordVariants: [
        "AC rumah Jatilawang",
        "AC toko dan ruko Jatilawang",
        "AC kantor kecil Jatilawang",
        "AC usaha Jatilawang",
        "Banyak unit area Jatilawang",
        "Cek PK AC Jatilawang",
      ],
      nearbyAreaLinks: [
        ["Jual AC Banyumas", routes.jualAcBanyumas],
        ["Jual AC Purwokerto", routes.jualAcPurwokerto],
        ["Jual AC Wangon", routes.jualAcWangon],
        ["Jual AC Ajibarang", routes.jualAcAjibarang],
        ["Jual AC Rawalo", routes.jualAcRawalo],
      ],
      trustBullets: [
        "Cek kebutuhan PK dari ukuran ruangan, daya listrik, dan pola pemakaian",
        "Cek stok brand seperti Gree, Daikin, Midea, Hisense, Sharp, Samsung, dan lainnya",
        "Opsi pengiriman dan pemasangan dikonfirmasi berdasarkan alamat Jatilawang dan jumlah unit",
        "Cocok untuk rumah, toko, ruko, kantor kecil, usaha, dan pembelian beberapa unit",
      ],
      localFaq: [
        [
          "Apakah RADJA AC punya toko fisik di Jatilawang?",
          "Showroom dan gudang RADJA AC berada di Banyumas. Untuk kebutuhan AC Jatilawang, tim membantu cek stok, kapasitas PK, pengiriman, dan opsi pemasangan berdasarkan alamat serta jumlah unit.",
        ],
        [
          "Bisa konsultasi AC untuk toko, ruko, atau kantor di Jatilawang?",
          "Bisa. Kirim ukuran ruangan, jumlah titik, daya listrik, preferensi brand, target anggaran, dan timeline agar tim RADJA AC menyiapkan arahan awal.",
        ],
        [
          "Apa yang perlu dikirim untuk cek AC Jatilawang?",
          "Siapkan alamat atau area detail, ukuran ruangan, daya listrik, jumlah unit, tipe bangunan, preferensi brand, dan apakah butuh unit saja atau opsi pemasangan.",
        ],
        [
          "Apakah pembayaran bisa COD, DP, atau transfer?",
          "Skema pembayaran fleksibel dapat dikonsultasikan. Detail COD, DP, atau transfer dikonfirmasi bersama tim RADJA AC sesuai kebutuhan unit, pengiriman, dan pemasangan.",
        ],
      ],
      commonNeeds: [
        "AC rumah tinggal dan kamar tidur",
        "AC toko, ruko, kantor kecil, dan ruang usaha",
        "AC untuk beberapa ruangan atau beberapa titik",
        "Pembelian unit untuk usaha lokal dan kebutuhan banyak unit",
      ],
      buyingChecks: [
        "Alamat detail area Jatilawang",
        "Ukuran ruangan dan estimasi kebutuhan PK",
        "Daya listrik serta pilihan standard, low watt, atau inverter",
        "Kebutuhan unit saja, pengiriman, atau opsi pemasangan",
      ],
      paymentNote:
        "Pembayaran fleksibel bisa dikonsultasikan: DP, COD, atau transfer setelah kebutuhan unit, pengiriman, dan opsi pemasangan jelas.",
      relatedLinks: [
        ["Jual AC Banyumas", routes.jualAcBanyumas],
        ["Jual AC Purwokerto", routes.jualAcPurwokerto],
        ["Kalkulator PK AC", routes.kalkulatorPkAc],
        ["AC Low Watt", routes.katalogAcLowWatt],
        ["Pengiriman & Pemasangan", routes.pengirimanPemasangan],
        ["Bukti Pengiriman & Proyek", routes.buktiPengirimanProyek],
        ["Kontak RADJA AC", routes.kontak],
      ],
      ctaLabel: "Chat WhatsApp untuk cek AC Jatilawang",
      waIntent: "cek stok AC Jatilawang dengan data alamat ukuran ruangan daya listrik jumlah unit dan kebutuhan pemasangan",
      waArea: "Jatilawang",
    },
    {
      slug: "jual-ac-cilongok",
      path: routes.jualAcCilongok,
      areaName: "Cilongok",
      label: "Jual AC Cilongok",
      title: "Jual AC Cilongok untuk Rumah, Toko & Usaha — RADJA AC",
      description:
        "Butuh AC untuk rumah, toko, ruko, kantor, atau usaha di Cilongok? RADJA AC bantu cek PK, stok, pengiriman, opsi pemasangan, dan pembayaran fleksibel.",
      h1: "Jual AC Cilongok untuk Rumah, Toko & Usaha",
      eyebrow: "Area Banyumas",
      intro:
        "Butuh AC di Cilongok untuk rumah, toko, ruko, kantor, ruang usaha, atau beberapa unit? Tim RADJA AC bantu cek kebutuhan PK, daya listrik, stok brand, pengiriman, dan opsi pemasangan dari data awal.",
      localContext:
        "Cilongok cocok untuk kebutuhan AC rumah tinggal, kamar, kost, kontrakan, toko kecil, dan ruang usaha. Karena pilihan AC sering dipengaruhi daya listrik dan ukuran ruangan, kirim jumlah unit, daya listrik, alamat detail, anggaran awal, serta kebutuhan unit saja atau opsi pemasangan.",
      coverageNote:
        "Showroom dan gudang RADJA AC berada di Banyumas. Kebutuhan AC area Cilongok dilayani dengan konsultasi PK, cek stok unit, pengiriman, serta opsi pemasangan sesuai alamat, jumlah unit, dan jadwal.",
      keywordVariants: [
        "AC rumah Cilongok",
        "AC toko dan ruko Cilongok",
        "AC kantor kecil Cilongok",
        "AC usaha Cilongok",
        "Banyak unit area Cilongok",
        "Cek PK AC Cilongok",
      ],
      nearbyAreaLinks: [
        ["Jual AC Banyumas", routes.jualAcBanyumas],
        ["Jual AC Purwokerto", routes.jualAcPurwokerto],
        ["Jual AC Ajibarang", routes.jualAcAjibarang],
        ["Jual AC Karanglewas", routes.jualAcKaranglewas],
        ["Jual AC Jatilawang", routes.jualAcJatilawang],
      ],
      trustBullets: [
        "Cek kebutuhan PK dari ukuran ruangan, daya listrik, dan pola pemakaian",
        "Cek stok brand seperti Gree, Daikin, Midea, Hisense, Sharp, Samsung, dan lainnya",
        "Opsi pengiriman dan pemasangan dikonfirmasi berdasarkan alamat Cilongok dan jumlah unit",
        "Cocok untuk rumah, toko, ruko, kantor kecil, usaha, dan pembelian beberapa unit",
      ],
      localFaq: [
        [
          "Apakah RADJA AC punya toko fisik di Cilongok?",
          "Showroom dan gudang RADJA AC berada di Banyumas. Untuk kebutuhan AC Cilongok, tim membantu cek stok, kapasitas PK, pengiriman, dan opsi pemasangan berdasarkan alamat serta jumlah unit.",
        ],
        [
          "Bisa konsultasi AC untuk toko, ruko, atau kantor di Cilongok?",
          "Bisa. Kirim ukuran ruangan, jumlah titik, daya listrik, preferensi brand, target anggaran, dan timeline agar tim RADJA AC menyiapkan arahan awal.",
        ],
        [
          "Apa yang perlu dikirim untuk cek AC Cilongok?",
          "Siapkan alamat atau area detail, ukuran ruangan, daya listrik, jumlah unit, tipe bangunan, preferensi brand, dan apakah butuh unit saja atau opsi pemasangan.",
        ],
        [
          "Apakah pembayaran bisa COD, DP, atau transfer?",
          "Skema pembayaran fleksibel dapat dikonsultasikan. Detail COD, DP, atau transfer dikonfirmasi bersama tim RADJA AC sesuai kebutuhan unit, pengiriman, dan pemasangan.",
        ],
      ],
      commonNeeds: [
        "AC rumah tinggal dan kamar tidur",
        "AC toko, ruko, kantor kecil, dan ruang usaha",
        "AC untuk beberapa ruangan atau beberapa titik",
        "Pembelian unit untuk usaha lokal dan kebutuhan banyak unit",
      ],
      buyingChecks: [
        "Alamat detail area Cilongok",
        "Ukuran ruangan dan estimasi kebutuhan PK",
        "Daya listrik serta pilihan standard, low watt, atau inverter",
        "Kebutuhan unit saja, pengiriman, atau opsi pemasangan",
      ],
      paymentNote:
        "Pembayaran fleksibel bisa dikonsultasikan: DP, COD, atau transfer setelah kebutuhan unit, pengiriman, dan opsi pemasangan jelas.",
      relatedLinks: [
        ["Jual AC Banyumas", routes.jualAcBanyumas],
        ["Jual AC Purwokerto", routes.jualAcPurwokerto],
        ["Kalkulator PK AC", routes.kalkulatorPkAc],
        ["AC Low Watt", routes.katalogAcLowWatt],
        ["Pengiriman & Pemasangan", routes.pengirimanPemasangan],
        ["Bukti Pengiriman & Proyek", routes.buktiPengirimanProyek],
        ["Kontak RADJA AC", routes.kontak],
      ],
      ctaLabel: "Chat WhatsApp untuk cek AC Cilongok",
      waIntent: "cek stok AC Cilongok dengan data alamat ukuran ruangan daya listrik jumlah unit dan kebutuhan pemasangan",
      waArea: "Cilongok",
    },
    {
      slug: "jual-ac-ajibarang",
      path: routes.jualAcAjibarang,
      areaName: "Ajibarang",
      label: "Jual AC Ajibarang",
      title: "Jual AC Ajibarang untuk Rumah, Toko & Usaha — RADJA AC",
      description:
        "Butuh AC untuk rumah, toko, ruko, kantor, atau usaha di Ajibarang? RADJA AC cek kebutuhan PK, stok, pengiriman unit, dan opsi pemasangan via WhatsApp.",
      h1: "Jual AC Ajibarang untuk Rumah, Toko & Usaha",
      eyebrow: "Area Banyumas Barat",
      intro:
        "Butuh AC di Ajibarang untuk rumah, toko, ruko, kantor, atau usaha? Tim RADJA AC cek ukuran ruangan, daya listrik, pilihan brand, stok unit, pengiriman, dan opsi pemasangan sebelum pembelian.",
      localContext:
        "Ajibarang adalah salah satu area Banyumas barat dengan aktivitas rumah tinggal, toko, ruko, pasar, dan usaha harian. Kebutuhan AC untuk kamar, ruang keluarga, toko, dan ruang usaha bisa berbeda, jadi tim RADJA AC akan membaca ukuran ruangan, daya listrik, jumlah unit, anggaran, serta kebutuhan unit saja atau opsi pemasangan.",
      coverageNote:
        "Showroom dan gudang RADJA AC berada di Pamijen, Sokaraja, Banyumas. Untuk area Ajibarang, pengiriman unit dan opsi pemasangan perlu dikonfirmasi dari alamat detail, jumlah unit, stok, dan jadwal.",
      commonNeeds: [
        "AC rumah tinggal, kamar tidur, dan ruang keluarga",
        "AC toko, ruko, kantor, dan ruang usaha",
        "AC untuk kontrakan, rumah sewa, atau usaha harian",
        "Pembelian beberapa unit untuk usaha lokal, proyek, pengadaan, atau kebutuhan banyak unit",
      ],
      buyingChecks: [
        "Alamat detail area Ajibarang untuk estimasi pengiriman",
        "Ukuran ruangan, tinggi plafon, dan kondisi panas matahari",
        "Daya listrik dan kebutuhan standard, low watt, atau inverter",
        "Jumlah unit, preferensi brand, anggaran, dan kebutuhan pemasangan",
      ],
      relatedLinks: [
        ["Jual AC Purwokerto", routes.jualAcPurwokerto],
        ["Jual AC Banyumas", routes.jualAcBanyumas],
        ["Katalog AC", routes.katalog],
        ["Kalkulator PK AC", routes.kalkulatorPkAc],
        ["AC Split Rumah", routes.katalogAcSplitRumah],
        ["AC Low Watt", routes.katalogAcLowWatt],
        ["AC Gree", routes.brandGree],
        ["Kontak RADJA AC", routes.kontak],
      ],
      ctaLabel: "Chat WhatsApp untuk cek stok AC Ajibarang",
      waIntent: "cek stok AC Ajibarang dengan data ukuran ruangan daya listrik jumlah unit dan kebutuhan pemasangan",
      waArea: "Ajibarang",
      keywordVariants: [
        "jual AC Ajibarang",
        "toko AC Ajibarang",
        "beli AC Ajibarang",
        "pengiriman AC Ajibarang",
        "pemasangan AC Ajibarang",
        "AC untuk rumah dan toko Ajibarang",
        "AC ruko Ajibarang",
      ],
      nearbyAreaLinks: [
        ["Purwokerto", routes.jualAcPurwokerto],
        ["Banyumas", routes.jualAcBanyumas],
        ["Baturraden", routes.jualAcBaturraden],
        ["Sokaraja", routes.jualAcSokaraja],
      ],
      trustBullets: [
        "Ajibarang dilayani dari showroom dan gudang RADJA AC di Pamijen, Sokaraja, Banyumas.",
        "Pembeli bisa melihat bukti aktivitas RADJA AC melalui dokumentasi pengiriman, stok fisik, dan pemasangan.",
        "Untuk area Ajibarang, kebutuhan AC dicek dari alamat detail, ukuran ruangan, daya listrik, jumlah unit, dan opsi pemasangan.",
      ],
      localFaq: [
        [
          "Apakah RADJA AC melayani pengiriman AC ke Ajibarang?",
          "Area Ajibarang bisa dikonsultasikan melalui WhatsApp. Tim RADJA AC akan mengecek alamat detail, stok unit, pengiriman, dan opsi pemasangan sebelum pembelian.",
        ],
        [
          "Data apa yang perlu dikirim untuk cek AC Ajibarang?",
          "Kirim ukuran ruangan, daya listrik, jumlah unit, alamat area Ajibarang, kebutuhan unit saja atau pemasangan, dan preferensi brand bila ada.",
        ],
        [
          "Apakah bisa beli AC untuk toko atau ruko di Ajibarang?",
          "Bisa dikonsultasikan. Untuk toko, ruko, atau ruang usaha, tim RADJA AC akan mengecek ukuran ruangan, jam pemakaian, daya listrik, dan kebutuhan pemasangan.",
        ],
      ],
    },
    {
      slug: "jual-ac-wangon",
      path: routes.jualAcWangon,
      areaName: "Wangon",
      label: "Jual AC Wangon",
      title: "Jual AC Wangon untuk Rumah, Toko & Usaha — RADJA AC",
      description:
        "Butuh AC untuk rumah, toko, ruko, kantor, atau usaha di Wangon? RADJA AC cek kebutuhan PK, stok, pengiriman unit, dan opsi pemasangan via WhatsApp.",
      h1: "Jual AC Wangon untuk Rumah, Toko & Usaha",
      eyebrow: "Area Banyumas Barat & Jalur Selatan",
      intro:
        "Butuh AC di Wangon untuk rumah, toko, warung, ruko, kantor, atau ruang usaha? Tim RADJA AC cek ukuran ruangan, daya listrik, pilihan brand, stok unit, pengiriman, dan opsi pemasangan sebelum pembelian.",
      localContext:
        "Wangon berada di jalur penting Banyumas bagian barat dan selatan, dengan kebutuhan AC dari rumah tinggal, toko, warung, ruko, kantor, sampai usaha harian. Karena kebutuhan kamar, ruang keluarga, dan tempat usaha berbeda, tim RADJA AC akan membaca ukuran ruangan, daya listrik, jumlah unit, anggaran, serta kebutuhan unit saja atau opsi pemasangan.",
      coverageNote:
        "Showroom dan gudang RADJA AC berada di Pamijen, Sokaraja, Banyumas. Untuk area Wangon, pengiriman unit dan opsi pemasangan dikonfirmasi dari alamat detail, stok, jumlah unit, akses lokasi, dan jadwal.",
      commonNeeds: [
        "AC rumah tinggal, kamar tidur, dan ruang keluarga",
        "AC toko, warung, ruko, dan ruang usaha",
        "AC kontrakan, rumah sewa, dan bangunan pinggir jalan utama",
        "Pembelian beberapa unit untuk usaha lokal, proyek, pengadaan, atau kebutuhan banyak unit",
      ],
      buyingChecks: [
        "Alamat detail area Wangon untuk estimasi pengiriman",
        "Ukuran ruangan, tinggi plafon, dan kondisi panas matahari",
        "Daya listrik dan kebutuhan standard, low watt, atau inverter",
        "Jumlah unit, anggaran, preferensi brand, dan kebutuhan pemasangan",
      ],
      relatedLinks: [
        ["Jual AC Purwokerto", routes.jualAcPurwokerto],
        ["Jual AC Banyumas", routes.jualAcBanyumas],
        ["Jual AC Ajibarang", routes.jualAcAjibarang],
        ["Katalog AC", routes.katalog],
        ["Kalkulator PK AC", routes.kalkulatorPkAc],
        ["AC Low Watt", routes.katalogAcLowWatt],
        ["AC Gree", routes.brandGree],
        ["Pengiriman & Pemasangan", routes.pengirimanPemasangan],
        ["Bukti Pengiriman & Proyek", routes.buktiPengirimanProyek],
        ["Kontak RADJA AC", routes.kontak],
      ],
      ctaLabel: "Chat WhatsApp untuk cek stok AC Wangon",
      waIntent: "cek stok AC Wangon dengan data ukuran ruangan daya listrik jumlah unit dan kebutuhan pemasangan",
      waArea: "Wangon",
      keywordVariants: [
        "jual AC Wangon",
        "toko AC Wangon",
        "beli AC Wangon",
        "pengiriman AC Wangon",
        "pemasangan AC Wangon",
        "AC rumah Wangon",
        "AC toko Wangon",
        "AC ruko Wangon",
      ],
      nearbyAreaLinks: [
        ["Ajibarang", routes.jualAcAjibarang],
        ["Rawalo", routes.jualAcRawalo],
        ["Patikraja", routes.jualAcPatikraja],
        ["Banyumas", routes.jualAcBanyumas],
      ],
      trustBullets: [
        "Wangon dilayani dari showroom dan gudang RADJA AC di Pamijen, Sokaraja, Banyumas.",
        "Bukti aktivitas RADJA AC bisa dicek melalui dokumentasi pengiriman, stok fisik, dan pemasangan.",
        "Untuk area Wangon, kebutuhan AC dicek dari alamat detail, ukuran ruangan, daya listrik, jumlah unit, dan opsi pemasangan.",
      ],
      localFaq: [
        [
          "Apakah RADJA AC melayani pengiriman AC ke Wangon?",
          "Area Wangon bisa dikonsultasikan melalui WhatsApp. Tim RADJA AC akan mengecek alamat detail, stok unit, pengiriman, dan opsi pemasangan sebelum pembelian.",
        ],
        [
          "Data apa yang perlu dikirim untuk cek AC Wangon?",
          "Kirim ukuran ruangan, daya listrik, jumlah unit, alamat area Wangon, kebutuhan unit saja atau pemasangan, dan preferensi brand bila ada.",
        ],
        [
          "Apakah bisa beli AC untuk toko atau ruko di Wangon?",
          "Bisa dikonsultasikan. Untuk toko, ruko, warung, atau ruang usaha, tim RADJA AC akan mengecek ukuran ruangan, jam pemakaian, daya listrik, dan kebutuhan pemasangan.",
        ],
      ],
    },
    {
      slug: "jual-ac-karanglewas",
      path: routes.jualAcKaranglewas,
      areaName: "Karanglewas",
      label: "Jual AC Karanglewas",
      title: "Jual AC Karanglewas untuk Rumah, Kost & Usaha — RADJA AC",
      description:
        "Butuh AC untuk rumah, kost, toko, kantor, ruko, atau usaha di Karanglewas? RADJA AC cek kebutuhan PK, stok, pengiriman unit, dan opsi pemasangan via WhatsApp.",
      h1: "Jual AC Karanglewas untuk Rumah, Kost & Usaha",
      eyebrow: "Area Ring Purwokerto",
      intro:
        "Butuh AC di Karanglewas untuk rumah, kamar, kost, toko, kantor, ruko, atau usaha? Tim RADJA AC cek ukuran ruangan, daya listrik, pilihan brand, stok unit, pengiriman, dan opsi pemasangan sebelum pembelian.",
      localContext:
        "Karanglewas termasuk area ring Purwokerto yang banyak berhubungan dengan kebutuhan rumah tinggal, perumahan, kost, toko, dan usaha harian. Agar pilihan AC tidak asal dari harga awal saja, tim RADJA AC membaca ukuran ruangan, daya listrik, pola pemakaian, jumlah unit, dan kebutuhan pemasangan.",
      coverageNote:
        "Showroom dan gudang RADJA AC berada di Pamijen, Sokaraja, Banyumas. Untuk area Karanglewas, pengiriman unit dan opsi pemasangan dikonfirmasi dari alamat detail, stok, jumlah unit, dan jadwal.",
      commonNeeds: [
        "AC rumah tinggal, kamar tidur, dan ruang keluarga",
        "AC kost, kontrakan, dan rumah sewa",
        "AC toko, kantor, ruko, dan ruang usaha",
        "Pembelian beberapa unit untuk rumah banyak ruangan atau usaha lokal",
      ],
      buyingChecks: [
        "Alamat detail area Karanglewas untuk estimasi pengiriman",
        "Ukuran ruangan, tinggi plafon, dan paparan panas matahari",
        "Daya listrik dan kebutuhan standard, low watt, atau inverter",
        "Jumlah unit, anggaran, preferensi brand, dan kebutuhan pemasangan",
      ],
      relatedLinks: [
        ["Jual AC Purwokerto", routes.jualAcPurwokerto],
        ["Jual AC Baturraden", routes.jualAcBaturraden],
        ["Katalog AC", routes.katalog],
        ["Kalkulator PK AC", routes.kalkulatorPkAc],
        ["AC Split Rumah", routes.katalogAcSplitRumah],
        ["AC Inverter", routes.katalogAcInverter],
        ["AC Daikin", routes.brandDaikin],
        ["Kontak RADJA AC", routes.kontak],
      ],
      ctaLabel: "Chat WhatsApp untuk cek stok AC Karanglewas",
      waIntent: "cek stok AC Karanglewas dengan data ukuran ruangan daya listrik jumlah unit dan kebutuhan pemasangan",
      waArea: "Karanglewas",
      keywordVariants: [
        "jual AC Karanglewas",
        "toko AC Karanglewas",
        "beli AC Karanglewas",
        "pengiriman AC Karanglewas",
        "pemasangan AC Karanglewas",
        "AC rumah Karanglewas",
        "AC kost Karanglewas",
      ],
      nearbyAreaLinks: [
        ["Purwokerto", routes.jualAcPurwokerto],
        ["Baturraden", routes.jualAcBaturraden],
        ["Kembaran", routes.jualAcKembaran],
        ["Sokaraja", routes.jualAcSokaraja],
      ],
      trustBullets: [
        "Karanglewas dilayani dari showroom dan gudang RADJA AC di Pamijen, Sokaraja, Banyumas.",
        "Pembeli bisa melihat bukti aktivitas RADJA AC melalui dokumentasi pengiriman, stok fisik, dan pemasangan.",
        "Untuk area Karanglewas, kebutuhan AC dicek dari ukuran ruangan, daya listrik, alamat detail, jumlah unit, dan opsi pemasangan.",
      ],
      localFaq: [
        [
          "Apakah RADJA AC melayani pengiriman AC ke Karanglewas?",
          "Area Karanglewas bisa dikonsultasikan melalui WhatsApp. Tim RADJA AC akan mengecek alamat detail, stok unit, pengiriman, dan opsi pemasangan sebelum pembelian.",
        ],
        [
          "Data apa yang perlu dikirim untuk cek AC Karanglewas?",
          "Kirim ukuran ruangan, daya listrik, jumlah unit, alamat area Karanglewas, kebutuhan unit saja atau pemasangan, dan preferensi brand bila ada.",
        ],
        [
          "Apakah bisa cek AC untuk kost atau rumah di Karanglewas?",
          "Bisa dikonsultasikan. Tim RADJA AC akan membaca ukuran kamar, daya listrik, jumlah unit, jam pemakaian, dan kebutuhan pemasangan.",
        ],
      ],
    },
    {
      slug: "jual-ac-kembaran",
      path: routes.jualAcKembaran,
      areaName: "Kembaran",
      label: "Jual AC Kembaran",
      title: "Jual AC Kembaran untuk Rumah, Kost & Usaha — RADJA AC",
      description:
        "Butuh AC untuk rumah, kost, kontrakan, toko, atau usaha di Kembaran? RADJA AC cek kebutuhan PK, stok, pengiriman unit, dan opsi pemasangan via WhatsApp.",
      h1: "Jual AC Kembaran untuk Rumah, Kost & Usaha",
      eyebrow: "Area Kampus & Hunian Banyumas",
      intro:
        "Butuh AC di Kembaran untuk rumah, kost, kontrakan, toko, atau usaha? Tim RADJA AC cek ukuran ruangan, daya listrik, pilihan brand, stok unit, pengiriman, dan opsi pemasangan sebelum pembelian.",
      localContext:
        "Kembaran punya kebutuhan AC dari rumah tinggal, kost, kontrakan, toko, dan ruang usaha. Untuk pemakaian kamar harian atau banyak kamar, pilihan AC perlu dibaca dari ukuran ruangan, daya listrik, pola pemakaian, jumlah unit, anggaran, dan kebutuhan pemasangan.",
      coverageNote:
        "Showroom dan gudang RADJA AC berada di Pamijen, Sokaraja, Banyumas. Untuk area Kembaran, pengiriman unit dan opsi pemasangan dikonfirmasi dari alamat detail, stok, jumlah unit, dan jadwal.",
      commonNeeds: [
        "AC rumah tinggal, kamar tidur, dan ruang keluarga",
        "AC kost, kontrakan, dan rumah sewa",
        "AC toko, kantor, ruko, dan ruang usaha",
        "Pembelian beberapa unit untuk kamar sewa atau bangunan banyak ruangan",
      ],
      buyingChecks: [
        "Alamat detail area Kembaran untuk estimasi pengiriman",
        "Ukuran ruangan, jumlah kamar, dan jam pemakaian",
        "Daya listrik dan kebutuhan standard, low watt, atau inverter",
        "Jumlah unit, anggaran, preferensi brand, dan kebutuhan pemasangan",
      ],
      relatedLinks: [
        ["Jual AC Purwokerto", routes.jualAcPurwokerto],
        ["Jual AC Sokaraja", routes.jualAcSokaraja],
        ["Katalog AC", routes.katalog],
        ["Kalkulator PK AC", routes.kalkulatorPkAc],
        ["AC Low Watt", routes.katalogAcLowWatt],
        ["Pengadaan AC Kost & Apartemen", routes.pengadaanKostApartemen],
        ["AC Gree", routes.brandGree],
        ["Kontak RADJA AC", routes.kontak],
      ],
      ctaLabel: "Chat WhatsApp untuk cek stok AC Kembaran",
      waIntent: "cek stok AC Kembaran dengan data ukuran ruangan daya listrik jumlah unit dan kebutuhan pemasangan",
      waArea: "Kembaran",
      keywordVariants: [
        "jual AC Kembaran",
        "toko AC Kembaran",
        "beli AC Kembaran",
        "pengiriman AC Kembaran",
        "pemasangan AC Kembaran",
        "AC kost Kembaran",
        "AC kontrakan Kembaran",
      ],
      nearbyAreaLinks: [
        ["Purwokerto", routes.jualAcPurwokerto],
        ["Sokaraja", routes.jualAcSokaraja],
        ["Karanglewas", routes.jualAcKaranglewas],
        ["Banyumas", routes.jualAcBanyumas],
      ],
      trustBullets: [
        "Kembaran dilayani dari showroom dan gudang RADJA AC di Pamijen, Sokaraja, Banyumas.",
        "Untuk kost, kontrakan, atau bangunan banyak kamar, jumlah ruangan dan daya listrik perlu dicek sejak awal.",
        "Bukti aktivitas RADJA AC bisa dicek melalui dokumentasi pengiriman, stok fisik, dan pemasangan.",
      ],
      localFaq: [
        [
          "Apakah RADJA AC melayani pengiriman AC ke Kembaran?",
          "Area Kembaran bisa dikonsultasikan melalui WhatsApp. Tim RADJA AC akan mengecek alamat detail, stok unit, pengiriman, dan opsi pemasangan sebelum pembelian.",
        ],
        [
          "Apakah bisa cek AC untuk kost di Kembaran?",
          "Bisa dikonsultasikan. Kirim jumlah kamar, ukuran ruangan, daya listrik, kebutuhan unit saja atau pemasangan, dan target anggaran.",
        ],
        [
          "Data apa yang perlu dikirim untuk cek AC Kembaran?",
          "Kirim ukuran ruangan, daya listrik, jumlah unit, alamat area Kembaran, kebutuhan unit saja atau pemasangan, dan preferensi brand bila ada.",
        ],
      ],
    },
    {
      slug: "jual-ac-patikraja",
      path: routes.jualAcPatikraja,
      areaName: "Patikraja",
      label: "Jual AC Patikraja",
      title: "Jual AC Patikraja untuk Rumah, Toko & Usaha — RADJA AC",
      description:
        "Butuh AC untuk rumah, toko, kantor, ruko, atau usaha di Patikraja? RADJA AC cek kebutuhan PK, stok, pengiriman unit, dan opsi pemasangan via WhatsApp.",
      h1: "Jual AC Patikraja untuk Rumah, Toko & Usaha",
      eyebrow: "Area Selatan Purwokerto",
      intro:
        "Butuh AC di Patikraja untuk rumah, toko, kantor, ruko, atau usaha? Tim RADJA AC cek ukuran ruangan, daya listrik, pilihan brand, stok unit, pengiriman, dan opsi pemasangan sebelum pembelian.",
      localContext:
        "Patikraja menjadi area selatan Purwokerto dengan kebutuhan AC dari rumah tinggal, toko, ruang usaha, dan bangunan keluarga. Agar pilihan unit tidak asal, tim RADJA AC membaca ukuran ruangan, daya listrik, pola pemakaian, jumlah unit, alamat detail, dan kebutuhan pemasangan.",
      coverageNote:
        "Showroom dan gudang RADJA AC berada di Pamijen, Sokaraja, Banyumas. Untuk area Patikraja, pengiriman unit dan opsi pemasangan dikonfirmasi dari alamat detail, stok, jumlah unit, akses lokasi, dan jadwal.",
      commonNeeds: [
        "AC rumah tinggal, kamar tidur, dan ruang keluarga",
        "AC toko, kantor, ruko, dan ruang usaha",
        "AC kontrakan, rumah sewa, atau bangunan keluarga",
        "Pembelian beberapa unit untuk usaha lokal, proyek, pengadaan, atau kebutuhan banyak unit",
      ],
      buyingChecks: [
        "Alamat detail area Patikraja untuk estimasi pengiriman",
        "Ukuran ruangan, tinggi plafon, dan kondisi panas matahari",
        "Daya listrik dan kebutuhan standard, low watt, atau inverter",
        "Jumlah unit, anggaran, preferensi brand, dan kebutuhan pemasangan",
      ],
      relatedLinks: [
        ["Jual AC Purwokerto", routes.jualAcPurwokerto],
        ["Jual AC Banyumas", routes.jualAcBanyumas],
        ["Katalog AC", routes.katalog],
        ["Kalkulator PK AC", routes.kalkulatorPkAc],
        ["AC Split Rumah", routes.katalogAcSplitRumah],
        ["AC Low Watt", routes.katalogAcLowWatt],
        ["AC Sharp", routes.brandSharp],
        ["Kontak RADJA AC", routes.kontak],
      ],
      ctaLabel: "Chat WhatsApp untuk cek stok AC Patikraja",
      waIntent: "cek stok AC Patikraja dengan data ukuran ruangan daya listrik jumlah unit dan kebutuhan pemasangan",
      waArea: "Patikraja",
      keywordVariants: [
        "jual AC Patikraja",
        "toko AC Patikraja",
        "beli AC Patikraja",
        "pengiriman AC Patikraja",
        "pemasangan AC Patikraja",
        "AC rumah Patikraja",
        "AC toko Patikraja",
      ],
      nearbyAreaLinks: [
        ["Banyumas", routes.jualAcBanyumas],
        ["Rawalo", routes.jualAcRawalo],
        ["Purwokerto", routes.jualAcPurwokerto],
        ["Wangon", routes.jualAcWangon],
      ],
      trustBullets: [
        "Patikraja dilayani dari showroom dan gudang RADJA AC di Pamijen, Sokaraja, Banyumas.",
        "Untuk area Patikraja, kebutuhan AC dicek dari alamat detail, ukuran ruangan, daya listrik, jumlah unit, dan opsi pemasangan.",
        "Bukti aktivitas RADJA AC bisa dicek melalui dokumentasi pengiriman, stok fisik, dan pemasangan.",
      ],
      localFaq: [
        [
          "Apakah RADJA AC melayani pengiriman AC ke Patikraja?",
          "Area Patikraja bisa dikonsultasikan melalui WhatsApp. Tim RADJA AC akan mengecek alamat detail, stok unit, pengiriman, dan opsi pemasangan sebelum pembelian.",
        ],
        [
          "Data apa yang perlu dikirim untuk cek AC Patikraja?",
          "Kirim ukuran ruangan, daya listrik, jumlah unit, alamat area Patikraja, kebutuhan unit saja atau pemasangan, dan preferensi brand bila ada.",
        ],
        [
          "Apakah bisa cek AC untuk rumah atau toko di Patikraja?",
          "Bisa dikonsultasikan. Tim RADJA AC akan membaca ukuran ruangan, jam pemakaian, daya listrik, dan kebutuhan pemasangan.",
        ],
      ],
    },
    {
      slug: "jual-ac-rawalo",
      path: routes.jualAcRawalo,
      areaName: "Rawalo",
      label: "Jual AC Rawalo",
      title: "Jual AC Rawalo untuk Rumah, Toko & Usaha — RADJA AC",
      description:
        "Butuh AC untuk rumah, toko, kantor, ruko, atau usaha di Rawalo? RADJA AC cek kebutuhan PK, stok, pengiriman unit, dan opsi pemasangan via WhatsApp.",
      h1: "Jual AC Rawalo untuk Rumah, Toko & Usaha",
      eyebrow: "Area Selatan Banyumas",
      intro:
        "Butuh AC di Rawalo untuk rumah, toko, kantor, ruko, atau usaha? Tim RADJA AC cek ukuran ruangan, daya listrik, pilihan brand, stok unit, pengiriman, dan opsi pemasangan sebelum pembelian.",
      localContext:
        "Rawalo berada di area selatan Banyumas dengan kebutuhan AC untuk rumah tinggal, toko, ruang usaha, dan bangunan keluarga. Untuk menghindari salah pilih kapasitas, tim RADJA AC akan membaca ukuran ruangan, daya listrik, jumlah unit, anggaran, alamat detail, serta kebutuhan unit saja atau opsi pemasangan.",
      coverageNote:
        "Showroom dan gudang RADJA AC berada di Pamijen, Sokaraja, Banyumas. Untuk area Rawalo, pengiriman unit dan opsi pemasangan dikonfirmasi dari alamat detail, stok, jumlah unit, akses lokasi, dan jadwal.",
      commonNeeds: [
        "AC rumah tinggal, kamar tidur, dan ruang keluarga",
        "AC toko, kantor, ruko, dan ruang usaha",
        "AC kontrakan, rumah sewa, atau bangunan keluarga",
        "Pembelian beberapa unit untuk usaha lokal, proyek, pengadaan, atau kebutuhan banyak unit",
      ],
      buyingChecks: [
        "Alamat detail area Rawalo untuk estimasi pengiriman",
        "Ukuran ruangan, tinggi plafon, dan kondisi panas matahari",
        "Daya listrik dan kebutuhan standard, low watt, atau inverter",
        "Jumlah unit, anggaran, preferensi brand, dan kebutuhan pemasangan",
      ],
      relatedLinks: [
        ["Jual AC Banyumas", routes.jualAcBanyumas],
        ["Jual AC Purwokerto", routes.jualAcPurwokerto],
        ["Jual AC Wangon", routes.jualAcWangon],
        ["Katalog AC", routes.katalog],
        ["Kalkulator PK AC", routes.kalkulatorPkAc],
        ["AC Low Watt", routes.katalogAcLowWatt],
        ["AC Gree", routes.brandGree],
        ["Kontak RADJA AC", routes.kontak],
      ],
      ctaLabel: "Chat WhatsApp untuk cek stok AC Rawalo",
      waIntent: "cek stok AC Rawalo dengan data ukuran ruangan daya listrik jumlah unit dan kebutuhan pemasangan",
      waArea: "Rawalo",
      keywordVariants: [
        "jual AC Rawalo",
        "toko AC Rawalo",
        "beli AC Rawalo",
        "pengiriman AC Rawalo",
        "pemasangan AC Rawalo",
        "AC rumah Rawalo",
        "AC toko Rawalo",
      ],
      nearbyAreaLinks: [
        ["Banyumas", routes.jualAcBanyumas],
        ["Patikraja", routes.jualAcPatikraja],
        ["Wangon", routes.jualAcWangon],
        ["Ajibarang", routes.jualAcAjibarang],
      ],
      trustBullets: [
        "Rawalo dilayani dari showroom dan gudang RADJA AC di Pamijen, Sokaraja, Banyumas.",
        "Untuk area Rawalo, kebutuhan AC dicek dari alamat detail, ukuran ruangan, daya listrik, jumlah unit, dan opsi pemasangan.",
        "Bukti aktivitas RADJA AC bisa dicek melalui dokumentasi pengiriman, stok fisik, dan pemasangan.",
      ],
      localFaq: [
        [
          "Apakah RADJA AC melayani pengiriman AC ke Rawalo?",
          "Area Rawalo bisa dikonsultasikan melalui WhatsApp. Tim RADJA AC akan mengecek alamat detail, stok unit, pengiriman, dan opsi pemasangan sebelum pembelian.",
        ],
        [
          "Data apa yang perlu dikirim untuk cek AC Rawalo?",
          "Kirim ukuran ruangan, daya listrik, jumlah unit, alamat area Rawalo, kebutuhan unit saja atau pemasangan, dan preferensi brand bila ada.",
        ],
        [
          "Apakah bisa cek AC untuk rumah atau toko di Rawalo?",
          "Bisa dikonsultasikan. Tim RADJA AC akan membaca ukuran ruangan, jam pemakaian, daya listrik, dan kebutuhan pemasangan.",
        ],
      ],
    },

    {
      slug: "jual-ac-baturraden",
      path: routes.jualAcBaturraden,
      areaName: "Baturraden",
      label: "Jual AC Baturraden",
      title: "Jual AC Baturraden untuk Rumah, Villa & Penginapan — RADJA AC",
      description:
        "Butuh AC untuk rumah, villa, homestay, guest house, atau usaha di Baturraden? RADJA AC cek kebutuhan PK, stok, pengiriman unit, dan opsi pemasangan via WhatsApp.",
      h1: "Jual AC Baturraden untuk Rumah, Villa & Penginapan",
      eyebrow: "Area Wisata Banyumas",
      intro:
        "Butuh AC di Baturraden atau Baturaden untuk rumah, villa, homestay, guest house, atau ruang usaha? Tim RADJA AC cek kebutuhan PK, daya listrik, pilihan brand, stok unit, pengiriman, dan opsi pemasangan dari data lokasi.",
      localContext:
        "Baturraden dikenal sebagai area wisata dan hunian di wilayah Banyumas. Kebutuhan AC untuk rumah tinggal, villa, penginapan, homestay, atau ruang usaha tidak selalu sama dengan kamar rumah biasa, sehingga tim RADJA AC perlu membaca ukuran ruangan, jumlah titik, pola pemakaian, daya listrik, dan kebutuhan pemasangan sebelum memberi arahan.",
      coverageNote:
        "Showroom dan gudang RADJA AC berada di Pamijen, Sokaraja, Banyumas. Untuk area Baturraden atau Baturaden, pengiriman unit dan opsi pemasangan dikonfirmasi berdasarkan alamat, jumlah unit, akses lokasi, stok, dan jadwal.",
      commonNeeds: [
        "AC rumah tinggal, kamar tidur, dan ruang keluarga",
        "AC villa, homestay, guest house, dan kamar sewa",
        "AC cafe, toko, ruang usaha, dan area tamu",
        "Kebutuhan beberapa unit untuk penginapan atau usaha hospitality",
      ],
      buyingChecks: [
        "Alamat detail Baturraden atau Baturaden untuk estimasi pengiriman",
        "Jumlah kamar atau ruangan yang akan memakai AC",
        "Ukuran ruangan, daya listrik, dan jam pemakaian",
        "Kebutuhan unit saja, pengiriman, atau opsi pemasangan",
      ],
      relatedLinks: [
        ["Jual AC Purwokerto", routes.jualAcPurwokerto],
        ["Jual AC Banyumas", routes.jualAcBanyumas],
        ["Jual AC Sokaraja", routes.jualAcSokaraja],
        ["Kalkulator PK AC", routes.kalkulatorPkAc],
        ["AC Inverter", routes.katalogAcInverter],
        ["Pengadaan AC Hotel & Guest House", routes.pengadaanHotelGuestHouse],
        ["AC Daikin", routes.brandDaikin],
        ["Kontak RADJA AC", routes.kontak],
      ],
      ctaLabel: "Chat WhatsApp untuk cek stok AC Baturraden",
      waIntent: "cek stok AC Baturraden atau Baturaden dengan data ukuran ruangan daya listrik jumlah unit dan kebutuhan pemasangan",
      waArea: "Baturraden",
      keywordVariants: [
        "jual AC Baturraden",
        "jual AC Baturaden",
        "toko AC Baturraden",
        "beli AC Baturraden",
        "pengiriman AC Baturraden",
        "pemasangan AC Baturraden",
        "AC villa Baturraden",
        "AC homestay Baturraden",
        "AC guest house Baturraden",
      ],
      nearbyAreaLinks: [
        ["Purwokerto", routes.jualAcPurwokerto],
        ["Banyumas", routes.jualAcBanyumas],
        ["Sokaraja", routes.jualAcSokaraja],
        ["Ajibarang", routes.jualAcAjibarang],
      ],
      trustBullets: [
        "Baturraden atau Baturaden dilayani dari showroom dan gudang RADJA AC di Pamijen, Sokaraja, Banyumas.",
        "Untuk villa, homestay, guest house, atau penginapan, jumlah kamar dan pola pemakaian perlu dibaca sebelum memilih unit.",
        "Bukti aktivitas RADJA AC bisa dicek melalui dokumentasi pengiriman, stok fisik, dan pemasangan.",
      ],
      localFaq: [
        [
          "Apakah RADJA AC melayani pengiriman AC ke Baturraden atau Baturaden?",
          "Area Baturraden atau Baturaden bisa dikonsultasikan melalui WhatsApp. Tim RADJA AC akan mengecek alamat, akses lokasi, stok unit, pengiriman, dan opsi pemasangan.",
        ],
        [
          "AC apa yang cocok untuk villa, homestay, atau guest house di Baturraden?",
          "Pilihan AC perlu dilihat dari ukuran kamar, jumlah unit, daya listrik, jam pemakaian, dan kebutuhan pemasangan. Tim RADJA AC membantu mengecek data itu sebelum memberi arahan.",
        ],
        [
          "Data apa yang perlu dikirim untuk cek AC Baturraden?",
          "Kirim alamat detail, jumlah ruangan, ukuran ruangan, daya listrik, jumlah unit, kebutuhan unit saja atau pemasangan, dan timeline pengiriman.",
        ],
      ],
    },

  {
    slug: "jual-ac-yogyakarta",
    path: routes.jualAcYogyakarta,
    areaName: "Yogyakarta",
    label: "Jual AC Yogyakarta",
    title: "Jual AC Yogyakarta untuk Kost, Guest House & Usaha — RADJA AC",
    description:
      "Butuh AC untuk rumah, kost, hotel, kantor, atau proyek di Yogyakarta? RADJA AC cek stok, kebutuhan PK, pengiriman unit, dan opsi pemasangan via WhatsApp.",
    h1: "Jual AC Yogyakarta untuk Kost, Guest House & Usaha",
    eyebrow: "Layanan AC Area DIY",
    intro:
      "Butuh AC di Yogyakarta untuk rumah, kost, guest house, hotel, kantor, atau usaha? Tim RADJA AC cek PK, daya listrik, stok, pengiriman, dan pemasangan sebelum unit dipilih.",
    localContext:
      "Yogyakarta kuat untuk kebutuhan kost, guest house, homestay, rumah tinggal, cafe, kantor atau ruko, dan bangunan banyak kamar. Karena pola pemakaian kamar sewa, rumah, dan usaha berbeda, tim RADJA AC perlu data jumlah kamar, ukuran ruangan, daya listrik, timeline, dan butuh pemasangan atau tidak.",
    coverageNote:
      "Showroom dan gudang RADJA AC berada di Banyumas. Kebutuhan AC area Yogyakarta dilayani dengan konsultasi PK, cek stok unit, pengiriman, serta opsi pemasangan sesuai alamat, jumlah unit, dan jadwal.",
    keywordVariants: [
      "AC kamar kost",
      "AC guest house dan homestay",
      "AC cafe dan ruang usaha",
      "AC rumah tinggal dan kontrakan",
      "Banyak unit untuk bangunan sewa",
      "Cek PK dari ukuran kamar",
    ],
    nearbyAreaLinks: [
      ["Jual AC Semarang", routes.jualAcSemarang],
      ["Jual AC Solo", routes.jualAcSolo],
      ["Jual AC Kebumen", routes.jualAcKebumen],
      ["Jual AC Cilacap", routes.jualAcCilacap],
      ["Jual AC Banjarnegara", routes.jualAcBanjarnegara],
    ],
    trustBullets: [
      "Cek kebutuhan PK untuk kamar kost, guest house, homestay, rumah, cafe, dan kantor",
      "Cek stok brand seperti Gree, Daikin, Midea, Hisense, Sharp, Samsung, dan lainnya",
      "Opsi pengiriman dan pemasangan dikonfirmasi berdasarkan alamat, jumlah unit, dan jadwal",
      "Cocok untuk pembelian satu unit maupun kebutuhan banyak kamar atau banyak titik",
    ],
    localFaq: [
      [
        "Apakah RADJA AC punya toko fisik di Yogyakarta?",
        "Showroom dan gudang RADJA AC berada di Banyumas. Untuk kebutuhan AC Yogyakarta, tim membantu cek stok, kapasitas PK, pengiriman, dan opsi pemasangan berdasarkan alamat serta jumlah unit.",
      ],
      [
        "Bisa konsultasi AC untuk kost, guest house, atau homestay di Yogyakarta?",
        "Bisa. Kirim jumlah kamar, ukuran ruangan, daya listrik, target anggaran, preferensi brand, dan timeline agar tim RADJA AC menyiapkan arahan awal.",
      ],
      [
        "AC apa yang cocok untuk kamar kost atau guest house?",
        "Pilihan awal biasanya dilihat dari ukuran kamar, intensitas pemakaian, daya listrik, dan target biaya listrik. Tim RADJA AC bisa bantu bandingkan standard, low watt, atau inverter.",
      ],
      [
        "Apakah pembayaran bisa COD, DP, atau transfer?",
        "Skema pembayaran fleksibel bisa dikonsultasikan. Detail COD, DP, atau transfer dikonfirmasi bersama tim RADJA AC sesuai kebutuhan unit, pengiriman, dan pemasangan.",
      ],
    ],
    commonNeeds: [
      "AC kost, guest house, homestay, dan kamar sewa",
      "AC rumah tinggal, kontrakan, dan ruang keluarga",
      "AC cafe, toko, kantor, dan ruang usaha",
      "Pembelian banyak unit untuk pengelola bangunan atau proyek hospitality",
    ],
    buyingChecks: [
      "Jumlah kamar atau ruangan yang akan memakai AC",
      "Ukuran ruangan, tinggi plafon, dan paparan panas matahari",
      "Daya listrik tiap titik atau daya listrik total bangunan",
      "Target opening, kebutuhan pengiriman, dan opsi pemasangan",
    ],
    relatedLinks: [
      ["Kalkulator PK AC", routes.kalkulatorPkAc],
      ["Katalog AC", routes.katalog],
      ["Pengiriman & Pemasangan", routes.pengirimanPemasangan],
      ["Pengadaan AC Hotel & Guest House", routes.pengadaanHotelGuestHouse],
      ["Pengadaan AC Kost & Apartemen", routes.pengadaanKostApartemen],
      ["AC Inverter", routes.katalogAcInverter],
      ["AC Daikin", routes.brandDaikin],
      ["Bukti Pengiriman & Proyek", routes.buktiPengirimanProyek],
      ["Tentang RADJA AC", routes.tentangKami],
      ["Kontak RADJA AC", routes.kontak],
    ],
    ctaLabel: "Chat WhatsApp untuk cek pengiriman AC Yogyakarta",
    waIntent: "cek pengiriman dan stok AC Yogyakarta dengan data area ukuran ruangan daya listrik jumlah unit anggaran preferensi brand dan kebutuhan pemasangan",
    waArea: "Yogyakarta",
  },
  {
    slug: "jual-ac-semarang",
    path: routes.jualAcSemarang,
    areaName: "Semarang",
    label: "Jual AC Semarang",
    title: "Jual AC Semarang untuk Ruko, Kantor, Hotel & Proyek — RADJA AC",
    description:
      "Butuh AC untuk rumah, ruko, kantor, hotel, usaha, atau proyek di Semarang? RADJA AC cek stok, kebutuhan PK, pengiriman unit, dan opsi pemasangan via WhatsApp.",
    h1: "Jual AC Semarang untuk Ruko, Kantor, Hotel & Proyek",
    eyebrow: "Layanan AC Area Jawa Tengah",
    intro:
      "Butuh AC untuk rumah, kantor, ruko, toko, hotel, developer, atau proyek di Semarang? RADJA AC cek kebutuhan PK, stok unit, pilihan brand, pengiriman, dan opsi pemasangan dari brief yang dikirim.",
    localContext:
      "Semarang cocok untuk kebutuhan rumah, kantor, ruko, toko, hotel, proyek, pengadaan, dan banyak unit. Karena banyak kebutuhan komersial melibatkan beberapa ruangan atau deadline pekerjaan, siapkan data jumlah unit, ukuran ruangan, tipe bangunan, daya listrik, dan timeline sejak awal.",
    coverageNote:
      "Showroom dan gudang RADJA AC berada di Banyumas. Kebutuhan AC area Semarang dilayani dengan konsultasi PK, cek stok unit, pengiriman, serta opsi pemasangan sesuai alamat, jumlah unit, dan jadwal pekerjaan.",
    keywordVariants: [
      "AC ruko dan toko",
      "AC kantor dan ruang meeting",
      "AC hotel dan guest house",
      "AC proyek banyak titik",
      "AC untuk ruang usaha padat aktivitas",
      "Cek PK untuk ruangan panas perkotaan",
    ],
    nearbyAreaLinks: [
      ["Jual AC Yogyakarta", routes.jualAcYogyakarta],
      ["Jual AC Solo", routes.jualAcSolo],
      ["Jual AC Tegal", routes.jualAcTegal],
      ["Jual AC Kebumen", routes.jualAcKebumen],
      ["Jual AC Banjarnegara", routes.jualAcBanjarnegara],
    ],
    trustBullets: [
      "Cek kebutuhan PK dari ukuran ruangan, fungsi bangunan, dan jam pemakaian",
      "Cek stok brand seperti Gree, Daikin, Midea, Hisense, Sharp, Samsung, dan lainnya",
      "Opsi pengiriman dan pemasangan dikonfirmasi berdasarkan alamat serta jumlah unit",
      "Cocok untuk kebutuhan rumah, ruko, kantor, hotel, usaha, dan proyek banyak titik",
    ],
    localFaq: [
      [
        "Apakah RADJA AC punya toko fisik di Semarang?",
        "Showroom dan gudang RADJA AC berada di Banyumas. Untuk kebutuhan AC Semarang, tim membantu cek stok, kapasitas PK, pengiriman, serta opsi pemasangan berdasarkan alamat dan jumlah unit.",
      ],
      [
        "Bisa konsultasi AC untuk kantor, ruko, hotel, atau proyek di Semarang?",
        "Bisa. Kirim ukuran ruangan, jumlah titik, tipe bangunan, daya listrik, preferensi brand, dan timeline pekerjaan agar tim RADJA AC menyiapkan arahan awal.",
      ],
      [
        "Brand AC apa saja yang bisa dicek untuk Semarang?",
        "Tim RADJA AC bisa membantu cek stok brand seperti Gree, Daikin, Midea, Hisense, Sharp, Samsung, Panasonic, Aqua, TCL, dan brand lain sesuai ketersediaan.",
      ],
      [
        "Apakah pembayaran bisa COD, DP, atau transfer?",
        "Skema pembayaran fleksibel dapat dikonsultasikan. Detail COD, DP, atau transfer dikonfirmasi bersama tim RADJA AC sesuai kebutuhan unit, pengiriman, dan pemasangan.",
      ],
    ],
    commonNeeds: [
      "AC rumah tinggal dan ruang keluarga",
      "AC kantor, ruko, toko, klinik, dan ruang usaha",
      "AC hotel, guest house, dan bangunan komersial",
      "Pengadaan unit untuk kantor, developer, proyek, atau usaha banyak titik",
    ],
    buyingChecks: [
      "Jenis bangunan, jumlah ruangan, dan jumlah unit",
      "Ukuran ruangan, beban panas, dan jam pemakaian",
      "Preferensi brand, tipe standard, low watt, atau inverter",
      "Timeline pengiriman dan kebutuhan opsi pemasangan",
    ],
    relatedLinks: [
      ["Kalkulator PK AC", routes.kalkulatorPkAc],
      ["Pengiriman & Pemasangan", routes.pengirimanPemasangan],
      ["AC Kantor & Komersial", routes.katalogAcKantorKomersial],
      ["Pengadaan AC Proyek", routes.pengadaanAc],
      ["Pengadaan Kontraktor & Developer", routes.pengadaanKontraktorDeveloper],
      ["AC Daikin", routes.brandDaikin],
      ["AC Gree", routes.brandGree],
      ["Bukti Pengiriman & Proyek", routes.buktiPengirimanProyek],
      ["Tentang RADJA AC", routes.tentangKami],
      ["Kontak RADJA AC", routes.kontak],
    ],
    ctaLabel: "Chat WhatsApp untuk cek pengiriman AC Semarang",
    waIntent: "cek pengiriman dan stok AC Semarang dengan data area ukuran ruangan daya listrik jumlah unit anggaran preferensi brand dan kebutuhan pemasangan",
    waArea: "Semarang",
  },
  {
    slug: "jual-ac-solo",
    path: routes.jualAcSolo,
    areaName: "Solo",
    label: "Jual AC Solo",
    title: "Jual AC Solo untuk Rumah, Kost, Hotel & Usaha — RADJA AC",
    description:
      "Butuh AC untuk rumah, kost, toko, kantor, hotel, atau usaha di Solo? RADJA AC cek stok, kebutuhan PK, pengiriman unit, dan opsi pemasangan via WhatsApp.",
    h1: "Jual AC Solo untuk Rumah, Kost, Hotel & Usaha",
    eyebrow: "Layanan AC Area Jawa Tengah",
    intro:
      "Butuh AC di Solo untuk rumah, kost, hotel, toko, kantor, atau usaha? Tim RADJA AC cek PK, daya listrik, brand, stok, pengiriman, dan pemasangan sebelum unit dipilih.",
    localContext:
      "Solo memiliki kebutuhan AC dari rumah, kost, toko, kantor, sampai hospitality. Agar tidak hanya mengejar harga awal yang terlihat ringan, tim RADJA AC akan mengecek ukuran ruangan, daya listrik, pola pemakaian, jumlah unit, dan kebutuhan unit saja atau opsi pemasangan.",
    coverageNote:
      "Showroom dan gudang RADJA AC berada di Banyumas. Kebutuhan AC area Solo dilayani dengan konsultasi PK, cek stok unit, pengiriman, dan opsi pemasangan sesuai lokasi, jumlah unit, serta jadwal.",
    keywordVariants: [
      "AC rumah dan kamar tidur",
      "AC kost dan kontrakan",
      "AC toko, ruko, dan kantor",
      "AC hotel dan guest house",
      "Banyak unit untuk usaha",
      "Cek PK sebelum pilih unit",
    ],
    nearbyAreaLinks: [
      ["Jual AC Semarang", routes.jualAcSemarang],
      ["Jual AC Yogyakarta", routes.jualAcYogyakarta],
      ["Jual AC Kebumen", routes.jualAcKebumen],
      ["Jual AC Banjarnegara", routes.jualAcBanjarnegara],
      ["Jual AC Tegal", routes.jualAcTegal],
    ],
    trustBullets: [
      "Cek kebutuhan PK untuk rumah, kost, hotel, guest house, toko, ruko, dan kantor",
      "Cek stok brand seperti Gree, Daikin, Midea, Hisense, Sharp, Samsung, dan lainnya",
      "Opsi pengiriman dan pemasangan dikonfirmasi berdasarkan alamat, jumlah unit, dan jadwal",
      "Cocok untuk pembelian satu unit maupun banyak unit untuk usaha atau proyek",
    ],
    localFaq: [
      [
        "Apakah RADJA AC punya toko fisik di Solo?",
        "Showroom dan gudang RADJA AC berada di Banyumas. Untuk kebutuhan AC Solo, tim membantu cek stok, kapasitas PK, pengiriman, dan opsi pemasangan berdasarkan alamat serta jumlah unit.",
      ],
      [
        "Bisa konsultasi AC untuk kost, hotel, toko, atau kantor di Solo?",
        "Bisa. Kirim ukuran ruangan, jumlah titik, daya listrik, preferensi brand, target anggaran, dan timeline agar tim RADJA AC menyiapkan arahan awal.",
      ],
      [
        "Apa yang perlu disiapkan sebelum beli AC untuk area Solo?",
        "Siapkan ukuran ruangan, tinggi plafon, daya listrik, jumlah unit, tipe bangunan, preferensi brand, dan apakah butuh unit saja atau opsi pemasangan.",
      ],
      [
        "Apakah pembayaran bisa COD, DP, atau transfer?",
        "Skema pembayaran fleksibel bisa dikonsultasikan. Detail COD, DP, atau transfer dikonfirmasi bersama tim RADJA AC sesuai kebutuhan unit, pengiriman, dan pemasangan.",
      ],
    ],
    commonNeeds: [
      "AC rumah dan kamar tidur",
      "AC kost, kontrakan, homestay, hotel, guest house, atau kebutuhan hospitality",
      "AC toko, kantor, ruko, dan ruang kerja",
      "Pembelian banyak unit untuk usaha, kantor, hotel, atau proyek",
    ],
    buyingChecks: defaultBuyingChecks,
    relatedLinks: [
      ["Kalkulator PK AC", routes.kalkulatorPkAc],
      ["Pengiriman & Pemasangan", routes.pengirimanPemasangan],
      ["AC Split Rumah", routes.katalogAcSplitRumah],
      ["AC Inverter", routes.katalogAcInverter],
      ["Pengadaan AC Hotel & Guest House", routes.pengadaanHotelGuestHouse],
      ["AC Gree", routes.brandGree],
      ["AC Daikin", routes.brandDaikin],
      ["Bukti Pengiriman & Proyek", routes.buktiPengirimanProyek],
      ["Tentang RADJA AC", routes.tentangKami],
      ["Kontak RADJA AC", routes.kontak],
    ],
    ctaLabel: "Chat WhatsApp untuk cek pengiriman AC Solo",
    waIntent: "cek pengiriman dan stok AC Solo dengan data area ukuran ruangan daya listrik jumlah unit anggaran preferensi brand dan kebutuhan pemasangan",
    waArea: "Solo",
  },
  {
    slug: "jual-ac-purbalingga",
    path: routes.jualAcPurbalingga,
    areaName: "Purbalingga",
    label: "Jual AC Purbalingga",
    title: "Jual AC Purbalingga untuk Rumah, Kost, Toko & Kantor — RADJA AC",
    description:
      "Butuh AC untuk rumah, kost, toko, kantor, atau usaha di Purbalingga? RADJA AC cek stok, kebutuhan PK, pengiriman unit, dan opsi pemasangan via WhatsApp.",
    h1: "Jual AC Purbalingga untuk Rumah, Kost, Toko & Kantor",
    eyebrow: "Area Regional Dekat Banyumas",
    intro:
      "Butuh AC di Purbalingga untuk rumah, kamar, kost, toko, kantor, atau usaha? Tim RADJA AC cek PK, daya listrik, brand, stok, pengiriman, dan pemasangan sebelum unit dipilih.",
    localContext:
      "Purbalingga adalah area regional dekat showroom dan gudang RADJA AC dengan kebutuhan AC rumah, kost, toko, kantor, dan usaha harian. Agar arahan tidak asal, tim RADJA AC akan meminta ukuran ruangan, daya listrik, anggaran, lokasi detail, dan kebutuhan unit saja atau opsi pemasangan.",
    coverageNote:
      "Showroom dan gudang RADJA AC berada di Banyumas. Kebutuhan AC area Purbalingga dilayani dengan konsultasi PK, cek stok unit, pengiriman, dan opsi pemasangan sesuai alamat, jumlah unit, serta jadwal.",
    nearbyAreaLinks: [
      ["Jual AC Banyumas", routes.jualAcBanyumas],
      ["Jual AC Purwokerto", routes.jualAcPurwokerto],
      ["Jual AC Sokaraja", routes.jualAcSokaraja],
      ["Jual AC Banjarnegara", routes.jualAcBanjarnegara],
    ],
    commonNeeds: [
      "AC rumah tinggal dan kamar tidur",
      "AC kost, kontrakan, dan rumah sewa",
      "AC toko, kantor, bengkel, dan ruang usaha",
      "Pembelian beberapa unit untuk usaha lokal, proyek, pengadaan, atau kebutuhan banyak unit",
    ],
    buyingChecks: defaultBuyingChecks,
    paymentNote:
      "Pembayaran fleksibel bisa dikonsultasikan: DP, COD, atau transfer setelah kebutuhan unit, pengiriman, dan opsi pemasangan jelas.",
    relatedLinks: defaultRelatedLinks,
    ctaLabel: "Chat WhatsApp untuk cek pengiriman AC Purbalingga",
    waIntent: "cek pengiriman dan stok AC Purbalingga dengan data area ukuran ruangan daya listrik jumlah unit anggaran preferensi brand dan kebutuhan pemasangan",
    waArea: "Purbalingga",
  },
  {
    slug: "jual-ac-cilacap",
    path: routes.jualAcCilacap,
    areaName: "Cilacap",
    label: "Jual AC Cilacap",
    title: "Jual AC Cilacap | Cek Stok, PK & Pemasangan — RADJA AC",
    description:
      "Butuh AC untuk rumah, toko, kantor, proyek, atau banyak unit di Cilacap? RADJA AC bantu cek PK, stok, pengiriman, opsi pemasangan, dan pembayaran fleksibel.",
    h1: "Jual AC Cilacap untuk rumah, toko, kantor, usaha, dan banyak unit",
    eyebrow: "Layanan AC Area Cilacap",
    intro:
      "Butuh AC di Cilacap untuk rumah, toko, kantor, usaha, proyek, pengadaan, atau banyak unit? Tim RADJA AC membantu cek kebutuhan PK, daya listrik, pilihan brand, stok unit, pengiriman, dan opsi pemasangan berdasarkan kecamatan serta kebutuhan unit.",
    localContext:
      "Cilacap termasuk area regional prioritas untuk kebutuhan rumah, toko/usaha, kantor, proyek, pengadaan, dan kebutuhan banyak unit. Agar estimasi lebih tepat sejak awal, kirim kecamatan di Cilacap, ukuran ruangan, jumlah unit, daya listrik, anggaran, preferensi brand, serta kebutuhan unit saja atau opsi pemasangan.",
    coverageNote:
      "Showroom dan gudang RADJA AC berada di Banyumas. Kebutuhan AC area Cilacap dilayani dengan konsultasi PK, cek stok unit, pengiriman, serta opsi pemasangan yang dikonfirmasi berdasarkan alamat, jumlah unit, akses lokasi, stok, dan jadwal pekerjaan.",
    commonNeeds: [
      "AC rumah tinggal, kamar tidur, dan ruang keluarga di Cilacap",
      "AC toko, ruko, kantor, klinik, dan ruang usaha",
      "AC untuk beberapa ruangan, banyak titik, atau bangunan usaha",
      "Pengadaan unit untuk usaha, kantor, proyek, dan kebutuhan banyak unit",
    ],
    buyingChecks: [
      "Kecamatan atau area detail pengiriman di Cilacap",
      "Ukuran ruangan, tinggi plafon, dan jumlah unit yang dibutuhkan",
      "Daya listrik serta pilihan standard, low watt, atau inverter",
      "Kebutuhan unit saja, pengiriman, atau opsi pemasangan sesuai alamat",
    ],
    paymentNote:
      "Pembayaran fleksibel bisa dikonsultasikan: DP, COD, atau transfer setelah kebutuhan unit, alamat, pengiriman, dan opsi pemasangan jelas.",
    relatedLinks: [
      ["Jual AC Kroya", routes.jualAcKroya],
      ["Jual AC Majenang", routes.jualAcMajenang],
      ["Jual AC Sidareja", routes.jualAcSidareja],
      ["Jual AC Purwokerto", routes.jualAcPurwokerto],
      ["Jual AC Banyumas", routes.jualAcBanyumas],
      ["Kalkulator PK AC", routes.kalkulatorPkAc],
      ["Pengiriman & Pemasangan", routes.pengirimanPemasangan],
      ["AC Kantor & Komersial", routes.katalogAcKantorKomersial],
      ["AC Low Watt", routes.katalogAcLowWatt],
      ["Pengadaan AC Proyek", routes.pengadaanAc],
      ["AC Daikin", routes.brandDaikin],
      ["AC Gree", routes.brandGree],
      ["Bukti Pengiriman & Proyek", routes.buktiPengirimanProyek],
      ["Tentang RADJA AC", routes.tentangKami],
      ["Kontak RADJA AC", routes.kontak],
    ],
    ctaLabel: "Chat WhatsApp untuk cek pengiriman AC Cilacap",
    waIntent: "cek pengiriman dan stok AC Cilacap dengan data kecamatan ukuran ruangan daya listrik jumlah unit alamat dan kebutuhan pemasangan",
    waArea: "Cilacap",
    keywordVariants: [
      "jual AC Cilacap",
      "toko AC Cilacap",
      "AC Cilacap",
      "cek stok AC Cilacap",
      "konsultasi PK AC Cilacap",
      "pengiriman AC Cilacap",
      "opsi pemasangan AC Cilacap",
      "AC rumah Cilacap",
      "AC toko Cilacap",
      "AC kantor Cilacap",
      "AC banyak unit Cilacap",
    ],
    nearbyAreaLinks: [
      ["Kroya", routes.jualAcKroya],
      ["Majenang", routes.jualAcMajenang],
      ["Sidareja", routes.jualAcSidareja],
      ["Kesugihan", routes.jualAcKesugihan],
      ["Adipala", routes.jualAcAdipala],
    ],
    trustBullets: [
      "Cilacap dilayani dari basis showroom dan gudang RADJA AC di Banyumas.",
      "Kebutuhan AC dicek dari kecamatan, ukuran ruangan, daya listrik, jumlah unit, stok aktif, dan opsi pemasangan.",
      "Bukti aktivitas RADJA AC bisa dicek melalui dokumentasi showroom, stok fisik, pengiriman, dan pemasangan.",
    ],
    localFaq: [
      [
        "Apakah RADJA AC melayani pembelian AC ke Cilacap?",
        "Area Cilacap bisa dikonsultasikan melalui WhatsApp. Tim RADJA AC akan mengecek kecamatan atau alamat detail, stok unit, kebutuhan PK, pengiriman, dan opsi pemasangan sebelum pembelian.",
      ],
      [
        "Apakah RADJA AC punya lokasi fisik di Cilacap?",
        "Showroom dan gudang RADJA AC berada di Banyumas. Untuk kebutuhan Cilacap, stok, pengiriman, dan opsi pemasangan dikonfirmasi melalui WhatsApp berdasarkan kecamatan, alamat, dan jumlah unit.",
      ],
      [
        "Data apa yang perlu dikirim untuk cek AC Cilacap?",
        "Kirim kecamatan atau area detail di Cilacap, ukuran ruangan, daya listrik, jumlah unit, kebutuhan unit saja atau pemasangan, serta preferensi brand bila ada.",
      ],
    ],
  },
  {
    slug: "jual-ac-kroya",
    path: routes.jualAcKroya,
    areaName: "Kroya",
    label: "Jual AC Kroya",
    title: "Jual AC Kroya untuk Rumah, Toko & Usaha — RADJA AC",
    description:
      "Butuh AC untuk rumah, toko, ruko, kantor, atau banyak unit di Kroya? RADJA AC bantu cek PK, stok, pengiriman, opsi pemasangan, dan pembayaran fleksibel.",
    h1: "Jual AC Kroya untuk Rumah, Toko & Usaha",
    eyebrow: "Area Cilacap",
    intro:
      "Butuh AC di Kroya untuk rumah, toko, ruko, kantor, usaha, atau banyak unit? Tim RADJA AC cek kebutuhan PK, daya listrik, stok brand, pengiriman, dan opsi pemasangan dari data awal yang dikirim.",
    localContext:
      "Kroya termasuk area Cilacap yang cocok untuk kebutuhan rumah tinggal, toko, ruko, kantor kecil, ruang usaha, dan pembelian beberapa unit. Kirim ukuran ruangan, jumlah unit, daya listrik, alamat, anggaran awal, serta kebutuhan unit saja atau opsi pemasangan.",
    coverageNote:
      "Showroom dan gudang RADJA AC berada di Banyumas. Kebutuhan AC area Kroya dilayani dengan konsultasi PK, cek stok unit, pengiriman, serta opsi pemasangan sesuai alamat, jumlah unit, dan jadwal.",
    keywordVariants: [
      "AC rumah Kroya",
      "AC toko dan ruko Kroya",
      "AC kantor kecil Kroya",
      "AC usaha Kroya",
      "Banyak unit area Kroya",
      "Cek PK AC Kroya",
    ],
    nearbyAreaLinks: [
      ["Jual AC Cilacap", routes.jualAcCilacap],
      ["Jual AC Kesugihan", routes.jualAcKesugihan],
      ["Jual AC Adipala", routes.jualAcAdipala],
      ["Jual AC Sidareja", routes.jualAcSidareja],
      ["Jual AC Banyumas", routes.jualAcBanyumas],
    ],
    trustBullets: [
      "Cek kebutuhan PK dari ukuran ruangan, daya listrik, dan pola pemakaian",
      "Cek stok brand seperti Gree, Daikin, Midea, Hisense, Sharp, Samsung, dan lainnya",
      "Opsi pengiriman dan pemasangan dikonfirmasi berdasarkan alamat Kroya dan jumlah unit",
      "Cocok untuk rumah, toko, ruko, kantor kecil, usaha, dan pembelian beberapa unit",
    ],
    localFaq: [
      [
        "Apakah RADJA AC punya toko fisik di Kroya?",
        "Showroom dan gudang RADJA AC berada di Banyumas. Untuk kebutuhan AC Kroya, tim membantu cek stok, kapasitas PK, pengiriman, dan opsi pemasangan berdasarkan alamat serta jumlah unit.",
      ],
      [
        "Bisa konsultasi AC untuk toko, ruko, atau kantor di Kroya?",
        "Bisa. Kirim ukuran ruangan, jumlah titik, daya listrik, preferensi brand, target anggaran, dan timeline agar tim RADJA AC menyiapkan arahan awal.",
      ],
      [
        "Apa yang perlu dikirim untuk cek AC area Kroya?",
        "Siapkan alamat atau area detail, ukuran ruangan, daya listrik, jumlah unit, tipe bangunan, preferensi brand, dan apakah butuh unit saja atau opsi pemasangan.",
      ],
      [
        "Apakah pembayaran bisa COD, DP, atau transfer?",
        "Skema pembayaran fleksibel dapat dikonsultasikan. Detail COD, DP, atau transfer dikonfirmasi bersama tim RADJA AC sesuai kebutuhan unit, pengiriman, dan pemasangan.",
      ],
    ],
    commonNeeds: [
      "AC rumah tinggal dan kamar tidur",
      "AC toko, ruko, kantor kecil, dan ruang usaha",
      "AC untuk beberapa ruangan atau beberapa titik",
      "Pembelian unit untuk usaha lokal dan kebutuhan banyak unit",
    ],
    buyingChecks: [
      "Alamat detail area Kroya",
      "Ukuran ruangan dan estimasi kebutuhan PK",
      "Daya listrik serta pilihan standard, low watt, atau inverter",
      "Kebutuhan unit saja, pengiriman, atau opsi pemasangan",
    ],
    relatedLinks: [
      ["Jual AC Cilacap", routes.jualAcCilacap],
      ["Kalkulator PK AC", routes.kalkulatorPkAc],
      ["Pengiriman & Pemasangan", routes.pengirimanPemasangan],
      ["AC Low Watt", routes.katalogAcLowWatt],
      ["AC Inverter", routes.katalogAcInverter],
      ["Bukti Pengiriman & Proyek", routes.buktiPengirimanProyek],
      ["Kontak RADJA AC", routes.kontak],
    ],
    ctaLabel: "Chat WhatsApp untuk cek AC Kroya",
    waIntent: "cek stok AC Kroya dengan data alamat ukuran ruangan daya listrik jumlah unit dan kebutuhan pemasangan",
    waArea: "Kroya",
  },
  {
    slug: "jual-ac-majenang",
    path: routes.jualAcMajenang,
    areaName: "Majenang",
    label: "Jual AC Majenang",
    title: "Jual AC Majenang untuk Rumah, Toko & Banyak Unit — RADJA AC",
    description:
      "Butuh AC untuk rumah, toko, kantor, usaha, atau banyak unit di Majenang? RADJA AC bantu cek PK, stok, pengiriman, opsi pemasangan, dan pembayaran fleksibel.",
    h1: "Jual AC Majenang untuk Rumah, Toko & Banyak Unit",
    eyebrow: "Area Cilacap Barat",
    intro:
      "Butuh AC di Majenang untuk rumah, toko, kantor, usaha, atau kebutuhan beberapa unit? Tim RADJA AC cek kapasitas PK, daya listrik, stok brand, pengiriman, dan opsi pemasangan dari data awal.",
    localContext:
      "Majenang menjadi area penting di Cilacap bagian barat untuk kebutuhan rumah, toko, kantor kecil, usaha lokal, dan pembelian beberapa unit. Agar pilihan AC lebih tepat, kirim ukuran ruangan, jumlah unit, daya listrik, alamat, serta kebutuhan unit saja atau opsi pemasangan.",
    coverageNote:
      "Showroom dan gudang RADJA AC berada di Banyumas. Kebutuhan AC area Majenang dilayani dengan konsultasi PK, cek stok unit, pengiriman, serta opsi pemasangan sesuai alamat, jumlah unit, dan jadwal.",
    keywordVariants: [
      "AC rumah Majenang",
      "AC toko Majenang",
      "AC kantor kecil Majenang",
      "AC usaha Majenang",
      "Banyak unit Majenang",
      "Cek PK AC Majenang",
    ],
    nearbyAreaLinks: [
      ["Jual AC Cilacap", routes.jualAcCilacap],
      ["Jual AC Sidareja", routes.jualAcSidareja],
      ["Jual AC Kroya", routes.jualAcKroya],
      ["Jual AC Banyumas", routes.jualAcBanyumas],
      ["Jual AC Kebumen", routes.jualAcKebumen],
    ],
    trustBullets: [
      "Cek kebutuhan PK dari ukuran ruangan, fungsi bangunan, dan jam pemakaian",
      "Cek stok brand seperti Gree, Daikin, Midea, Hisense, Sharp, Samsung, dan lainnya",
      "Opsi pengiriman dan pemasangan dikonfirmasi berdasarkan alamat Majenang dan jumlah unit",
      "Cocok untuk rumah, toko, kantor kecil, usaha lokal, dan kebutuhan banyak unit",
    ],
    localFaq: [
      [
        "Apakah RADJA AC punya toko fisik di Majenang?",
        "Showroom dan gudang RADJA AC berada di Banyumas. Untuk kebutuhan AC Majenang, tim membantu cek stok, kapasitas PK, pengiriman, dan opsi pemasangan berdasarkan alamat serta jumlah unit.",
      ],
      [
        "Bisa konsultasi AC untuk toko atau usaha di Majenang?",
        "Bisa. Kirim ukuran ruangan, jumlah unit, daya listrik, preferensi brand, target anggaran, dan kebutuhan unit saja atau opsi pemasangan.",
      ],
      [
        "Apa data awal untuk cek AC Majenang?",
        "Kirim alamat detail, ukuran ruangan, daya listrik, jumlah unit, tipe bangunan, preferensi brand, dan jadwal kebutuhan agar tim RADJA AC bisa memberi arahan awal.",
      ],
      [
        "Apakah pembayaran bisa COD, DP, atau transfer?",
        "Skema pembayaran fleksibel dapat dikonsultasikan. Detail COD, DP, atau transfer dikonfirmasi bersama tim RADJA AC sesuai kebutuhan unit, pengiriman, dan pemasangan.",
      ],
    ],
    commonNeeds: [
      "AC rumah tinggal dan kamar tidur",
      "AC toko, kantor kecil, dan ruang usaha",
      "AC untuk beberapa ruangan atau beberapa titik",
      "Pembelian banyak unit untuk usaha lokal",
    ],
    buyingChecks: [
      "Alamat detail area Majenang",
      "Ukuran ruangan dan estimasi kebutuhan PK",
      "Daya listrik dan kebutuhan low watt atau inverter",
      "Kebutuhan pengiriman dan opsi pemasangan",
    ],
    relatedLinks: [
      ["Jual AC Cilacap", routes.jualAcCilacap],
      ["Kalkulator PK AC", routes.kalkulatorPkAc],
      ["Pengiriman & Pemasangan", routes.pengirimanPemasangan],
      ["AC Low Watt", routes.katalogAcLowWatt],
      ["AC Kantor & Komersial", routes.katalogAcKantorKomersial],
      ["Bukti Pengiriman & Proyek", routes.buktiPengirimanProyek],
      ["Kontak RADJA AC", routes.kontak],
    ],
    ctaLabel: "Chat WhatsApp untuk cek AC Majenang",
    waIntent: "cek stok AC Majenang dengan data alamat ukuran ruangan daya listrik jumlah unit dan kebutuhan pemasangan",
    waArea: "Majenang",
  },
  {
    slug: "jual-ac-sidareja",
    path: routes.jualAcSidareja,
    areaName: "Sidareja",
    label: "Jual AC Sidareja",
    title: "Jual AC Sidareja untuk Rumah, Ruko & Usaha — RADJA AC",
    description:
      "Butuh AC untuk rumah, ruko, toko, kantor, atau banyak unit di Sidareja? RADJA AC bantu cek PK, stok, pengiriman, opsi pemasangan, dan pembayaran fleksibel.",
    h1: "Jual AC Sidareja untuk Rumah, Ruko & Usaha",
    eyebrow: "Area Cilacap Barat",
    intro:
      "Butuh AC di Sidareja untuk rumah, ruko, toko, kantor, usaha, atau kebutuhan beberapa unit? Tim RADJA AC cek kebutuhan PK, daya listrik, stok brand, pengiriman, dan opsi pemasangan dari data awal.",
    localContext:
      "Sidareja cocok untuk kebutuhan AC rumah, toko, ruko, kantor kecil, dan ruang usaha. Kirim alamat detail, ukuran ruangan, jumlah unit, daya listrik, anggaran awal, serta kebutuhan unit saja atau opsi pemasangan agar estimasi lebih tepat.",
    coverageNote:
      "Showroom dan gudang RADJA AC berada di Banyumas. Kebutuhan AC area Sidareja dilayani dengan konsultasi PK, cek stok unit, pengiriman, serta opsi pemasangan sesuai alamat, jumlah unit, dan jadwal.",
    keywordVariants: [
      "AC rumah Sidareja",
      "AC ruko Sidareja",
      "AC toko Sidareja",
      "AC kantor Sidareja",
      "AC usaha Sidareja",
      "Cek PK AC Sidareja",
    ],
    nearbyAreaLinks: [
      ["Jual AC Cilacap", routes.jualAcCilacap],
      ["Jual AC Majenang", routes.jualAcMajenang],
      ["Jual AC Kroya", routes.jualAcKroya],
      ["Jual AC Kesugihan", routes.jualAcKesugihan],
      ["Jual AC Kebumen", routes.jualAcKebumen],
    ],
    trustBullets: [
      "Cek kebutuhan PK dari ukuran ruangan, fungsi bangunan, dan daya listrik",
      "Cek stok brand seperti Gree, Daikin, Midea, Hisense, Sharp, Samsung, dan lainnya",
      "Opsi pengiriman dan pemasangan dikonfirmasi berdasarkan alamat Sidareja dan jumlah unit",
      "Cocok untuk rumah, ruko, toko, kantor kecil, ruang usaha, dan beberapa unit",
    ],
    localFaq: [
      [
        "Apakah RADJA AC punya toko fisik di Sidareja?",
        "Showroom dan gudang RADJA AC berada di Banyumas. Untuk kebutuhan AC Sidareja, tim membantu cek stok, kapasitas PK, pengiriman, dan opsi pemasangan berdasarkan alamat serta jumlah unit.",
      ],
      [
        "Bisa konsultasi AC untuk ruko, toko, atau kantor di Sidareja?",
        "Bisa. Kirim ukuran ruangan, jumlah titik, daya listrik, preferensi brand, target anggaran, dan timeline agar tim RADJA AC menyiapkan arahan awal.",
      ],
      [
        "Apa yang perlu dikirim untuk cek AC Sidareja?",
        "Siapkan alamat detail, ukuran ruangan, daya listrik, jumlah unit, tipe bangunan, preferensi brand, dan apakah butuh unit saja atau opsi pemasangan.",
      ],
      [
        "Apakah pembayaran bisa COD, DP, atau transfer?",
        "Skema pembayaran fleksibel dapat dikonsultasikan. Detail COD, DP, atau transfer dikonfirmasi bersama tim RADJA AC sesuai kebutuhan unit, pengiriman, dan pemasangan.",
      ],
    ],
    commonNeeds: [
      "AC rumah tinggal dan kamar tidur",
      "AC ruko, toko, kantor kecil, dan ruang usaha",
      "AC untuk beberapa ruangan atau beberapa titik",
      "Pembelian unit untuk usaha lokal dan kebutuhan banyak unit",
    ],
    buyingChecks: [
      "Alamat detail area Sidareja",
      "Ukuran ruangan dan estimasi kebutuhan PK",
      "Daya listrik serta pilihan standard, low watt, atau inverter",
      "Kebutuhan unit saja, pengiriman, atau opsi pemasangan",
    ],
    relatedLinks: [
      ["Jual AC Cilacap", routes.jualAcCilacap],
      ["Kalkulator PK AC", routes.kalkulatorPkAc],
      ["Pengiriman & Pemasangan", routes.pengirimanPemasangan],
      ["AC Split Rumah", routes.katalogAcSplitRumah],
      ["AC Low Watt", routes.katalogAcLowWatt],
      ["Bukti Pengiriman & Proyek", routes.buktiPengirimanProyek],
      ["Kontak RADJA AC", routes.kontak],
    ],
    ctaLabel: "Chat WhatsApp untuk cek AC Sidareja",
    waIntent: "cek stok AC Sidareja dengan data alamat ukuran ruangan daya listrik jumlah unit dan kebutuhan pemasangan",
    waArea: "Sidareja",
  },
  {
    slug: "jual-ac-kesugihan",
    path: routes.jualAcKesugihan,
    areaName: "Kesugihan",
    label: "Jual AC Kesugihan",
    title: "Jual AC Kesugihan untuk Rumah, Kantor & Proyek — RADJA AC",
    description:
      "Butuh AC untuk rumah, kantor, proyek, atau banyak unit di Kesugihan? RADJA AC bantu cek PK, stok, pengiriman, opsi pemasangan, dan pembayaran fleksibel.",
    h1: "Jual AC Kesugihan untuk Rumah, Kantor & Proyek",
    eyebrow: "Area Cilacap",
    intro:
      "Butuh AC di Kesugihan untuk rumah, kantor, ruang usaha, proyek, atau kebutuhan beberapa unit? Tim RADJA AC cek kebutuhan PK, daya listrik, stok brand, pengiriman, dan opsi pemasangan berdasarkan data awal.",
    localContext:
      "Kesugihan cocok untuk kebutuhan AC rumah, kantor, ruang usaha, dan banyak unit karena dekat koridor aktivitas Cilacap. Kirim ukuran ruangan, jumlah titik, daya listrik, alamat, target anggaran, serta kebutuhan unit saja atau opsi pemasangan.",
    coverageNote:
      "Showroom dan gudang RADJA AC berada di Banyumas. Kebutuhan AC area Kesugihan dilayani dengan konsultasi PK, cek stok unit, pengiriman, serta opsi pemasangan sesuai alamat, jumlah unit, dan jadwal.",
    keywordVariants: [
      "AC rumah Kesugihan",
      "AC kantor Kesugihan",
      "AC ruang usaha Kesugihan",
      "AC proyek Kesugihan",
      "Banyak unit Kesugihan",
      "Cek PK AC Kesugihan",
    ],
    nearbyAreaLinks: [
      ["Jual AC Cilacap", routes.jualAcCilacap],
      ["Jual AC Kroya", routes.jualAcKroya],
      ["Jual AC Adipala", routes.jualAcAdipala],
      ["Jual AC Sidareja", routes.jualAcSidareja],
      ["Jual AC Banyumas", routes.jualAcBanyumas],
    ],
    trustBullets: [
      "Cek kebutuhan PK dari ukuran ruangan, fungsi bangunan, dan target pemakaian",
      "Cek stok brand seperti Gree, Daikin, Midea, Hisense, Sharp, Samsung, dan lainnya",
      "Opsi pengiriman dan pemasangan dikonfirmasi berdasarkan alamat Kesugihan dan jumlah unit",
      "Cocok untuk rumah, kantor, ruang usaha, proyek kecil, dan kebutuhan banyak unit",
    ],
    localFaq: [
      [
        "Apakah RADJA AC punya toko fisik di Kesugihan?",
        "Showroom dan gudang RADJA AC berada di Banyumas. Untuk kebutuhan AC Kesugihan, tim membantu cek stok, kapasitas PK, pengiriman, dan opsi pemasangan berdasarkan alamat serta jumlah unit.",
      ],
      [
        "Bisa konsultasi AC untuk kantor atau proyek di Kesugihan?",
        "Bisa. Kirim ukuran ruangan, jumlah titik, daya listrik, preferensi brand, target anggaran, dan timeline agar tim RADJA AC menyiapkan arahan awal.",
      ],
      [
        "Apa data awal untuk cek AC Kesugihan?",
        "Kirim alamat detail, ukuran ruangan, daya listrik, jumlah unit, tipe bangunan, preferensi brand, dan apakah butuh unit saja atau opsi pemasangan.",
      ],
      [
        "Apakah pembayaran bisa COD, DP, atau transfer?",
        "Skema pembayaran fleksibel dapat dikonsultasikan. Detail COD, DP, atau transfer dikonfirmasi bersama tim RADJA AC sesuai kebutuhan unit, pengiriman, dan pemasangan.",
      ],
    ],
    commonNeeds: [
      "AC rumah tinggal dan ruang keluarga",
      "AC kantor kecil, ruang usaha, dan ruang kerja",
      "AC untuk beberapa ruangan atau beberapa titik",
      "Pembelian unit untuk proyek kecil dan kebutuhan banyak unit",
    ],
    buyingChecks: [
      "Alamat detail area Kesugihan",
      "Ukuran ruangan dan estimasi kebutuhan PK",
      "Daya listrik serta pilihan standard, low watt, atau inverter",
      "Kebutuhan unit saja, pengiriman, atau opsi pemasangan",
    ],
    relatedLinks: [
      ["Jual AC Cilacap", routes.jualAcCilacap],
      ["Kalkulator PK AC", routes.kalkulatorPkAc],
      ["Pengiriman & Pemasangan", routes.pengirimanPemasangan],
      ["AC Kantor & Komersial", routes.katalogAcKantorKomersial],
      ["Pengadaan AC Proyek", routes.pengadaanAc],
      ["Bukti Pengiriman & Proyek", routes.buktiPengirimanProyek],
      ["Kontak RADJA AC", routes.kontak],
    ],
    ctaLabel: "Chat WhatsApp untuk cek AC Kesugihan",
    waIntent: "cek stok AC Kesugihan dengan data alamat ukuran ruangan daya listrik jumlah unit dan kebutuhan pemasangan",
    waArea: "Kesugihan",
  },
  {
    slug: "jual-ac-adipala",
    path: routes.jualAcAdipala,
    areaName: "Adipala",
    label: "Jual AC Adipala",
    title: "Jual AC Adipala untuk Rumah, Toko & Usaha — RADJA AC",
    description:
      "Butuh AC untuk rumah, toko, kantor, usaha, atau banyak unit di Adipala? RADJA AC bantu cek PK, stok, pengiriman, opsi pemasangan, dan pembayaran fleksibel.",
    h1: "Jual AC Adipala untuk Rumah, Toko & Usaha",
    eyebrow: "Area Cilacap",
    intro:
      "Butuh AC di Adipala untuk rumah, toko, kantor, usaha, atau kebutuhan beberapa unit? Tim RADJA AC cek kebutuhan PK, daya listrik, stok brand, pengiriman, dan opsi pemasangan berdasarkan kondisi ruangan.",
    localContext:
      "Adipala cocok untuk kebutuhan AC rumah, toko, kantor kecil, dan ruang usaha. Area yang panas atau dekat aktivitas pesisir perlu cek ukuran ruangan, paparan panas, daya listrik, jumlah unit, serta pilihan standard, low watt, atau inverter.",
    coverageNote:
      "Showroom dan gudang RADJA AC berada di Banyumas. Kebutuhan AC area Adipala dilayani dengan konsultasi PK, cek stok unit, pengiriman, serta opsi pemasangan sesuai alamat, jumlah unit, dan jadwal.",
    keywordVariants: [
      "AC rumah Adipala",
      "AC toko Adipala",
      "AC kantor kecil Adipala",
      "AC usaha Adipala",
      "AC ruangan panas Adipala",
      "Cek PK AC Adipala",
    ],
    nearbyAreaLinks: [
      ["Jual AC Cilacap", routes.jualAcCilacap],
      ["Jual AC Kroya", routes.jualAcKroya],
      ["Jual AC Kesugihan", routes.jualAcKesugihan],
      ["Jual AC Sidareja", routes.jualAcSidareja],
      ["Jual AC Banyumas", routes.jualAcBanyumas],
    ],
    trustBullets: [
      "Cek kebutuhan PK dari ukuran ruangan, paparan panas, daya listrik, dan pola pemakaian",
      "Cek stok brand seperti Gree, Daikin, Midea, Hisense, Sharp, Samsung, dan lainnya",
      "Opsi pengiriman dan pemasangan dikonfirmasi berdasarkan alamat Adipala dan jumlah unit",
      "Cocok untuk rumah, toko, kantor kecil, usaha, dan ruangan yang terasa panas",
    ],
    localFaq: [
      [
        "Apakah RADJA AC punya toko fisik di Adipala?",
        "Showroom dan gudang RADJA AC berada di Banyumas. Untuk kebutuhan AC Adipala, tim membantu cek stok, kapasitas PK, pengiriman, dan opsi pemasangan berdasarkan alamat serta jumlah unit.",
      ],
      [
        "Bisa konsultasi AC untuk ruangan panas di Adipala?",
        "Bisa. Kirim ukuran ruangan, tinggi plafon, paparan panas, daya listrik, dan jumlah unit agar tim RADJA AC menyiapkan arahan PK dan tipe unit awal.",
      ],
      [
        "Apa yang perlu dikirim untuk cek AC Adipala?",
        "Siapkan alamat detail, ukuran ruangan, daya listrik, jumlah unit, tipe bangunan, preferensi brand, dan apakah butuh unit saja atau opsi pemasangan.",
      ],
      [
        "Apakah pembayaran bisa COD, DP, atau transfer?",
        "Skema pembayaran fleksibel dapat dikonsultasikan. Detail COD, DP, atau transfer dikonfirmasi bersama tim RADJA AC sesuai kebutuhan unit, pengiriman, dan pemasangan.",
      ],
    ],
    commonNeeds: [
      "AC rumah tinggal dan kamar tidur",
      "AC toko, kantor kecil, dan ruang usaha",
      "AC untuk ruangan yang panas atau sering dipakai",
      "Pembelian unit untuk usaha lokal dan beberapa titik",
    ],
    buyingChecks: [
      "Alamat detail area Adipala",
      "Ukuran ruangan, paparan panas, dan estimasi kebutuhan PK",
      "Daya listrik serta pilihan standard, low watt, atau inverter",
      "Kebutuhan unit saja, pengiriman, atau opsi pemasangan",
    ],
    relatedLinks: [
      ["Jual AC Cilacap", routes.jualAcCilacap],
      ["Kalkulator PK AC", routes.kalkulatorPkAc],
      ["Pengiriman & Pemasangan", routes.pengirimanPemasangan],
      ["AC Low Watt", routes.katalogAcLowWatt],
      ["AC Inverter", routes.katalogAcInverter],
      ["Bukti Pengiriman & Proyek", routes.buktiPengirimanProyek],
      ["Kontak RADJA AC", routes.kontak],
    ],
    ctaLabel: "Chat WhatsApp untuk cek AC Adipala",
    waIntent: "cek stok AC Adipala dengan data alamat ukuran ruangan daya listrik jumlah unit dan kebutuhan pemasangan",
    waArea: "Adipala",
  },
  {
    slug: "jual-ac-kebumen",
    path: routes.jualAcKebumen,
    areaName: "Kebumen",
    label: "Jual AC Kebumen",
    title: "Jual AC Kebumen | Cek Stok, PK & Pemasangan — RADJA AC",
    description:
      "Butuh AC untuk rumah, kost, kontrakan, toko, ruko, kantor, atau usaha di Kebumen? RADJA AC bantu cek PK, stok, pengiriman, dan opsi pemasangan.",
    h1: "Jual AC Kebumen untuk rumah, kost, kontrakan, properti sewa, toko, ruko, dan kantor",
    eyebrow: "Layanan AC Area Kebumen",
    intro:
      "Butuh AC di Kebumen untuk rumah, kamar, kost, kontrakan, properti sewa, toko, ruko, kantor, atau usaha harian? Tim RADJA AC membantu cek kebutuhan PK, daya listrik, pilihan brand, stok unit, pengiriman, dan opsi pemasangan sebelum pembelian.",
    localContext:
      "Kebumen termasuk area regional prioritas untuk kebutuhan AC rumah, kost, kontrakan, properti sewa, toko, ruko, kantor, dan usaha harian. Karena calon pembeli Kebumen biasanya butuh estimasi yang cepat dan jelas, tim RADJA AC akan meminta ukuran ruangan, daya listrik, jumlah unit, anggaran, preferensi brand, dan kebutuhan unit saja atau opsi pemasangan agar estimasi lebih jelas sejak awal.",
    coverageNote:
      "Showroom dan gudang RADJA AC ada di Banyumas. Untuk kebutuhan AC area Kebumen, stok unit, pengiriman, dan opsi pemasangan dikonfirmasi berdasarkan alamat, jumlah unit, akses lokasi, dan jadwal.",
    commonNeeds: [
      "AC rumah, kamar tidur, dan ruang keluarga di Kebumen",
      "AC kost, kontrakan, properti sewa, dan rumah sewa",
      "AC toko, ruko, kantor, dan ruang kerja",
      "Pembelian beberapa unit untuk usaha lokal, properti sewa, proyek, pengadaan, atau kebutuhan banyak unit",
    ],
    buyingChecks: [
      "Ukuran ruangan dan daya listrik di lokasi Kebumen",
      "Jumlah unit, tipe ruangan, dan pola pemakaian",
      "Pilihan standard, low watt, atau inverter sesuai kebutuhan",
      "Kebutuhan unit saja, pengiriman, atau opsi pemasangan sesuai alamat",
    ],
    paymentNote:
      "Pembayaran fleksibel bisa dikonsultasikan: DP, COD, atau transfer setelah kebutuhan unit, pengiriman, dan opsi pemasangan jelas.",
    relatedLinks: [
      ["Jual AC Gombong", routes.jualAcGombong],
      ["Jual AC Karanganyar Kebumen", routes.jualAcKaranganyarKebumen],
      ["Jual AC Kutowinangun", routes.jualAcKutowinangun],
      ["Jual AC Purwokerto", routes.jualAcPurwokerto],
      ["Jual AC Banyumas", routes.jualAcBanyumas],
      ["Jual AC Cilacap", routes.jualAcCilacap],
      ["Kalkulator PK AC", routes.kalkulatorPkAc],
      ["Pengiriman & Pemasangan", routes.pengirimanPemasangan],
      ["AC 1/2 PK", routes.katalogAcSetengahPk],
      ["AC Low Watt", routes.katalogAcLowWatt],
      ["AC Split Rumah", routes.katalogAcSplitRumah],
      ["AC Gree", routes.brandGree],
      ["Bukti Pengiriman & Proyek", routes.buktiPengirimanProyek],
      ["Tentang RADJA AC", routes.tentangKami],
      ["Kontak RADJA AC", routes.kontak],
    ],
    ctaLabel: "Chat WhatsApp untuk cek pengiriman AC Kebumen",
    waIntent: "cek pengiriman dan stok AC Kebumen dengan data ukuran ruangan daya listrik jumlah unit alamat anggaran dan kebutuhan pemasangan",
    waArea: "Kebumen",
    keywordVariants: [
      "jual AC Kebumen",
      "toko AC Kebumen",
      "AC Kebumen",
      "cek stok AC Kebumen",
      "konsultasi PK AC Kebumen",
      "pengiriman AC Kebumen",
      "opsi pemasangan AC Kebumen",
      "AC rumah Kebumen",
      "AC kost Kebumen",
      "AC toko Kebumen",
      "AC kantor Kebumen",
    ],
    nearbyAreaLinks: [
      ["Cilacap", routes.jualAcCilacap],
      ["Purwokerto", routes.jualAcPurwokerto],
      ["Banyumas", routes.jualAcBanyumas],
      ["Wangon", routes.jualAcWangon],
    ],
    trustBullets: [
      "Showroom dan gudang RADJA AC ada di Banyumas.",
      "Kebutuhan AC Kebumen dicek dari ukuran ruangan, daya listrik, jumlah unit, stok aktif, pengiriman, dan opsi pemasangan.",
      "Bukti aktivitas RADJA AC bisa dicek melalui dokumentasi showroom, stok fisik, pengiriman, dan pemasangan.",
    ],
    localFaq: [
      [
        "Apakah RADJA AC melayani pembelian AC ke Kebumen?",
        "Area Kebumen bisa dikonsultasikan melalui WhatsApp. Tim RADJA AC akan mengecek ukuran ruangan, daya listrik, jumlah unit, stok unit, pengiriman, dan opsi pemasangan sebelum pembelian.",
      ],
      [
        "Apakah RADJA AC punya lokasi fisik di Kebumen?",
        "Showroom dan gudang RADJA AC ada di Banyumas. Untuk kebutuhan Kebumen, stok, pengiriman, dan opsi pemasangan dikonfirmasi melalui WhatsApp berdasarkan alamat dan jumlah unit.",
      ],
      [
        "Data apa yang perlu dikirim untuk cek AC Kebumen?",
        "Kirim ukuran ruangan, daya listrik, jumlah unit, alamat area Kebumen, kebutuhan unit saja atau pemasangan, anggaran, serta preferensi brand bila ada.",
      ],
    ],
  },
  {
    slug: "jual-ac-tegal",
    path: routes.jualAcTegal,
    areaName: "Tegal",
    label: "Jual AC Tegal",
    title: "Jual AC Tegal & Slawi | Cek Stok & Pengiriman — RADJA AC",
    description:
      "Butuh AC untuk rumah, toko, kantor, proyek, atau banyak unit di Tegal dan Slawi? RADJA AC bantu cek PK, stok, pengiriman, dan opsi pemasangan.",
    h1: "Jual AC Tegal dan Slawi untuk rumah, toko, kantor, usaha, proyek, dan banyak unit",
    eyebrow: "Layanan AC Area Tegal & Slawi",
    intro:
      "Butuh AC di Tegal atau Slawi untuk rumah, toko, kantor, ruko, usaha, proyek, pengadaan, atau banyak unit? Tim RADJA AC membantu cek kebutuhan PK, daya listrik, pilihan brand, stok unit, pengiriman, dan opsi pemasangan berdasarkan area serta kebutuhan.",
    localContext:
      "Tegal dan Slawi termasuk area regional prioritas untuk kebutuhan AC rumah, toko/usaha, kantor, ruko, proyek, pengadaan, dan kebutuhan beberapa unit. Agar estimasi lebih jelas sejak awal, kirim area detail Tegal atau Slawi, ukuran ruangan, jumlah unit, daya listrik, anggaran, preferensi brand, serta kebutuhan unit saja atau opsi pemasangan.",
    coverageNote:
      "Showroom dan gudang RADJA AC ada di Banyumas. Untuk kebutuhan AC area Tegal dan Slawi, stok unit, pengiriman, serta opsi pemasangan dikonfirmasi berdasarkan alamat, jumlah unit, akses lokasi, dan jadwal.",
    commonNeeds: [
      "AC rumah tinggal, kamar tidur, dan ruang keluarga di Tegal atau Slawi",
      "AC toko, ruko, kantor, dan ruang usaha",
      "AC untuk proyek, pengadaan, beberapa ruangan, atau banyak titik",
      "Pembelian beberapa unit untuk usaha, kantor, hotel, guest house, proyek, pengadaan, atau kebutuhan banyak unit",
    ],
    buyingChecks: [
      "Area detail Tegal atau Slawi untuk estimasi pengiriman",
      "Ukuran ruangan, jumlah unit, dan kebutuhan PK",
      "Daya listrik serta pilihan standard, low watt, atau inverter",
      "Kebutuhan unit saja, pengiriman, atau opsi pemasangan sesuai alamat",
    ],
    paymentNote:
      "Pembayaran fleksibel bisa dikonsultasikan: DP, COD, atau transfer setelah kebutuhan unit, pengiriman, dan opsi pemasangan jelas.",
    relatedLinks: [
      ["Jual AC Purwokerto", routes.jualAcPurwokerto],
      ["Jual AC Banyumas", routes.jualAcBanyumas],
      ["Jual AC Kebumen", routes.jualAcKebumen],
      ["Kalkulator PK AC", routes.kalkulatorPkAc],
      ["Pengiriman & Pemasangan", routes.pengirimanPemasangan],
      ["AC Split Rumah", routes.katalogAcSplitRumah],
      ["AC Kantor & Komersial", routes.katalogAcKantorKomersial],
      ["Pengadaan AC Proyek", routes.pengadaanAc],
      ["AC Daikin", routes.brandDaikin],
      ["AC Gree", routes.brandGree],
      ["Bukti Pengiriman & Proyek", routes.buktiPengirimanProyek],
      ["Tentang RADJA AC", routes.tentangKami],
      ["Kontak RADJA AC", routes.kontak],
    ],
    ctaLabel: "Chat WhatsApp untuk cek pengiriman AC Tegal",
    waIntent: "cek pengiriman dan stok AC Tegal atau Slawi dengan data area ukuran ruangan daya listrik jumlah unit alamat anggaran dan kebutuhan pemasangan",
    waArea: "Tegal",
    keywordVariants: [
      "jual AC Tegal",
      "toko AC Tegal",
      "AC Tegal",
      "AC Slawi",
      "cek stok AC Tegal",
      "konsultasi PK AC Tegal",
      "pengiriman AC Tegal",
      "opsi pemasangan AC Tegal",
      "AC rumah Tegal",
      "AC toko Tegal",
      "AC kantor Tegal",
      "AC proyek dan pengadaan Tegal",
    ],
    nearbyAreaLinks: [
      ["Kebumen", routes.jualAcKebumen],
      ["Banyumas", routes.jualAcBanyumas],
      ["Purwokerto", routes.jualAcPurwokerto],
      ["Banjarnegara", routes.jualAcBanjarnegara],
    ],
    trustBullets: [
      "Showroom dan gudang RADJA AC ada di Banyumas.",
      "Kebutuhan AC Tegal dan Slawi dicek dari area detail, ukuran ruangan, daya listrik, jumlah unit, stok aktif, pengiriman, dan opsi pemasangan.",
      "Bukti aktivitas RADJA AC bisa dicek melalui dokumentasi showroom, stok fisik, pengiriman, dan pemasangan.",
    ],
    localFaq: [
      [
        "Apakah RADJA AC melayani pembelian AC ke Tegal dan Slawi?",
        "Area Tegal dan Slawi bisa dikonsultasikan melalui WhatsApp. Tim RADJA AC akan mengecek area detail, ukuran ruangan, daya listrik, jumlah unit, stok unit, pengiriman, dan opsi pemasangan sebelum pembelian.",
      ],
      [
        "Apakah RADJA AC punya lokasi fisik di Tegal atau Slawi?",
        "Showroom dan gudang RADJA AC ada di Banyumas. Untuk kebutuhan Tegal atau Slawi, stok, pengiriman, dan opsi pemasangan dikonfirmasi melalui WhatsApp berdasarkan alamat dan jumlah unit.",
      ],
      [
        "Data apa yang perlu dikirim untuk cek AC Tegal?",
        "Kirim area detail Tegal atau Slawi, ukuran ruangan, daya listrik, jumlah unit, alamat, kebutuhan unit saja atau pemasangan, anggaran, serta preferensi brand bila ada.",
      ],
    ],
  },
  {
    slug: "jual-ac-banjarnegara",
    path: routes.jualAcBanjarnegara,
    areaName: "Banjarnegara",
    label: "Jual AC Banjarnegara",
    title: "Jual AC Banjarnegara untuk Rumah, Kost, Toko & Usaha — RADJA AC",
    description:
      "Butuh AC untuk rumah, kost, toko, kantor, atau usaha di Banjarnegara? RADJA AC cek stok, kebutuhan PK, pengiriman unit, dan opsi pemasangan via WhatsApp.",
    h1: "Jual AC Banjarnegara untuk Rumah, Kost, Toko & Usaha",
    eyebrow: "Area Regional Bertahap",
    intro:
      "Butuh AC di Banjarnegara untuk rumah, kamar, kost, toko, kantor, atau usaha? Tim RADJA AC cek PK, daya listrik, brand, stok, pengiriman, dan pemasangan dari data awal.",
    localContext:
      "Banjarnegara termasuk area regional yang perlu ditangani dengan data awal yang jelas. Kirim ukuran ruangan, lokasi detail, jumlah unit, daya listrik, anggaran, dan kebutuhan unit saja atau opsi pemasangan agar tim RADJA AC menyusun pilihan AC yang masuk akal.",
    coverageNote:
      "Showroom dan gudang RADJA AC berada di Banyumas. Kebutuhan AC area Banjarnegara dilayani dengan konsultasi PK, cek stok unit, pengiriman, dan opsi pemasangan sesuai alamat, jumlah unit, serta jadwal.",
    keywordVariants: [
      "AC rumah dan kamar tidur",
      "AC toko dan ruang usaha",
      "AC kantor kecil",
      "AC kost dan rumah sewa",
      "Beberapa unit untuk usaha lokal",
      "Cek PK dari ukuran ruangan",
    ],
    nearbyAreaLinks: [
      ["Jual AC Purwokerto", routes.jualAcPurwokerto],
      ["Jual AC Banyumas", routes.jualAcBanyumas],
      ["Jual AC Purbalingga", routes.jualAcPurbalingga],
      ["Jual AC Kebumen", routes.jualAcKebumen],
      ["Jual AC Semarang", routes.jualAcSemarang],
    ],
    trustBullets: [
      "Cek kebutuhan PK dari ukuran ruangan, daya listrik, dan pola pemakaian harian",
      "Cek stok brand seperti Gree, Daikin, Midea, Hisense, Sharp, Samsung, dan lainnya",
      "Opsi pengiriman dan pemasangan dikonfirmasi berdasarkan alamat Banjarnegara dan jumlah unit",
      "Cocok untuk rumah, kost, toko, kantor kecil, usaha lokal, dan kebutuhan beberapa unit",
    ],
    localFaq: [
      [
        "Apakah RADJA AC punya lokasi fisik untuk kebutuhan Banjarnegara?",
        "Showroom dan gudang RADJA AC berada di Banyumas. Untuk kebutuhan AC Banjarnegara, tim membantu cek stok, kapasitas PK, pengiriman, dan opsi pemasangan berdasarkan alamat serta jumlah unit.",
      ],
      [
        "Bisa konsultasi AC untuk rumah, kost, toko, atau kantor di Banjarnegara?",
        "Bisa. Kirim ukuran ruangan, daya listrik, lokasi detail, jumlah unit, preferensi brand, dan apakah butuh unit saja atau opsi pemasangan.",
      ],
      [
        "Apa yang perlu disiapkan sebelum cek stok AC Banjarnegara?",
        "Siapkan ukuran ruangan, daya listrik, tipe bangunan, anggaran awal, jumlah unit, dan alamat pengiriman agar tim RADJA AC bisa memberi arahan yang lebih tepat.",
      ],
      [
        "Apakah pembayaran bisa COD, DP, atau transfer?",
        "Skema pembayaran fleksibel dapat dikonsultasikan. Detail COD, DP, atau transfer dikonfirmasi bersama tim RADJA AC sesuai kebutuhan unit, pengiriman, dan pemasangan.",
      ],
    ],
    commonNeeds: [
      "AC rumah tinggal dan kamar tidur",
      "AC kost, kontrakan, dan rumah sewa",
      "AC toko, kantor, dan ruang usaha",
      "Pembelian beberapa unit untuk usaha lokal, proyek, pengadaan, atau kebutuhan banyak unit",
    ],
    buyingChecks: [
      "Lokasi detail area Banjarnegara",
      "Ukuran ruangan dan estimasi kebutuhan PK",
      "Daya listrik dan kebutuhan low watt atau inverter",
      "Alamat pengiriman dan kebutuhan opsi pemasangan",
    ],
    paymentNote:
      "Pembayaran fleksibel bisa dikonsultasikan: DP, COD, atau transfer setelah kebutuhan unit, alamat, pengiriman, dan opsi pemasangan jelas.",
    relatedLinks: defaultRelatedLinks,
    ctaLabel: "Chat WhatsApp untuk cek pengiriman AC Banjarnegara",
    waIntent: "cek pengiriman dan stok AC Banjarnegara dengan data area ukuran ruangan daya listrik jumlah unit anggaran preferensi brand dan kebutuhan pemasangan",
    waArea: "Banjarnegara",
  },
  {
      "slug": "jual-ac-gombong",
      "path": "/jual-ac-gombong",
      "areaName": "Gombong",
      "label": "Jual AC Gombong",
      "title": "Jual AC Gombong untuk Rumah, Toko & Usaha — RADJA AC",
      "description": "Butuh AC untuk rumah, toko, kantor, usaha, atau banyak unit di Gombong? RADJA AC bantu cek PK, stok, pengiriman unit, opsi pemasangan, dan pembayaran fleksibel via WhatsApp.",
      "h1": "Jual AC Gombong untuk Rumah, Toko & Usaha",
      "eyebrow": "Area Kebumen",
      "intro": "Butuh AC di Gombong untuk rumah, kamar, toko, kantor, usaha, atau banyak unit? Tim RADJA AC membantu cek kebutuhan PK, daya listrik, pilihan brand, stok unit, pengiriman, dan opsi pemasangan berdasarkan data awal.",
      "localContext": "Gombong berada di wilayah Kebumen dengan kebutuhan AC untuk rumah, toko, kantor kecil, ruko, usaha lokal, dan beberapa unit. Kirim lokasi detail, ukuran ruangan, daya listrik, jumlah unit, anggaran, dan kebutuhan unit saja atau opsi pemasangan agar tim RADJA AC bisa menyusun rekomendasi yang masuk akal.",
      "coverageNote": "Showroom dan gudang RADJA AC berada di Banyumas. Kebutuhan AC area Gombong dilayani dengan konsultasi PK, cek stok unit, pengiriman, dan opsi pemasangan sesuai alamat, jumlah unit, akses lokasi, serta jadwal.",
      "keywordVariants": [
          "AC untuk kamar dan ruang keluarga di Gombong",
          "Cek pilihan AC untuk toko atau ruko area Gombong",
          "Kebutuhan AC kantor kecil dan ruang usaha lokal",
          "Pengiriman AC ke alamat area Gombong",
          "Cek stok brand sebelum menentukan unit",
          "Hitung PK dari ukuran ruangan dan daya listrik",
          "Opsi unit saja atau sekalian pemasangan",
          "Pembelian beberapa unit untuk usaha atau properti sewa"
      ],
      "nearbyAreaLinks": [
          [
              "Jual AC Kebumen",
              "/jual-ac-kebumen"
          ],
          [
              "Jual AC Banyumas",
              "/jual-ac-banyumas"
          ],
          [
              "Jual AC Purwokerto",
              "/jual-ac-purwokerto"
          ],
          [
              "Jual AC Cilacap",
              "/jual-ac-cilacap"
          ]
      ],
      "trustBullets": [
          "Gombong diposisikan sebagai area Kebumen dengan kebutuhan AC rumah, toko, ruko, kantor kecil, dan usaha lokal.",
          "Kebutuhan AC dibaca dari ukuran ruangan, daya listrik, jumlah unit, stok aktif, dan alamat detail.",
          "Pengiriman dan opsi pemasangan dikonfirmasi berdasarkan lokasi, akses pekerjaan, jumlah unit, dan jadwal yang memungkinkan.",
          "Tidak ada klaim toko/cabang/showroom lokal di Gombong; konsultasi diarahkan sebagai layanan cek stok dan pengiriman RADJA AC."
      ],
      "localFaq": [
          [
              "Apakah RADJA AC melayani pembelian AC area Gombong?",
              "Bisa dikonsultasikan. Kirim ukuran ruangan, daya listrik, jumlah unit, alamat area Gombong, dan kebutuhan unit saja atau opsi pemasangan agar tim RADJA AC mengecek stok serta arahan PK."
          ],
          [
              "Apakah ada toko RADJA AC di Gombong?",
              "Tidak ada klaim toko atau cabang lokal di Gombong. Kebutuhan AC Gombong diarahkan melalui konsultasi WhatsApp untuk cek stok, pengiriman, dan opsi pemasangan berdasarkan data lokasi."
          ],
          [
              "AC apa yang cocok untuk rumah, toko, atau ruko di Gombong?",
              "Pilihan AC dibaca dari ukuran ruangan, panas ruangan, jumlah orang, daya listrik, jam pemakaian, anggaran, dan stok aktif. Brand seperti Gree, Daikin, Midea, Hisense, Sharp, Samsung, dan lainnya bisa dicek sesuai ketersediaan."
          ],
          [
              "Data apa yang perlu dikirim untuk cek AC Gombong?",
              "Kirim alamat detail, ukuran ruangan, daya listrik, jumlah unit, kebutuhan unit saja atau pemasangan, preferensi brand, dan target anggaran."
          ]
      ],
      "commonNeeds": [
          "AC kamar tidur, ruang keluarga, dan rumah tinggal area Gombong",
          "AC toko, ruko, kantor kecil, klinik ringan, dan ruang usaha lokal",
          "AC untuk kost, kontrakan, properti sewa, atau beberapa ruangan",
          "Pembelian beberapa unit untuk usaha lokal, penginapan kecil, atau kebutuhan bertahap"
      ],
      "buyingChecks": [
          "Alamat detail Gombong dan akses pengiriman dari jalur Kebumen/Banyumas",
          "Ukuran ruangan, tinggi plafon, arah panas, dan jumlah orang di ruangan",
          "Daya listrik, pilihan standard/low watt/inverter, dan jam pemakaian harian",
          "Jumlah unit, preferensi brand, target anggaran, kebutuhan unit saja atau opsi pemasangan"
      ],
      "paymentNote": "Pembayaran fleksibel bisa dikonsultasikan: DP, COD, atau transfer setelah kebutuhan unit, alamat, pengiriman, dan opsi pemasangan jelas.",
      "relatedLinks": [
          [
              "Jual AC Kebumen",
              "/jual-ac-kebumen"
          ],
          [
              "Jual AC Cilacap",
              "/jual-ac-cilacap"
          ],
          [
              "Jual AC Banyumas",
              "/jual-ac-banyumas"
          ],
          [
              "AC 1/2 PK",
              "/katalog/ac-1-2-pk"
          ],
          [
              "AC Low Watt",
              "/katalog/ac-low-watt"
          ],
          [
              "Kalkulator PK AC",
              "/kalkulator-pk-ac"
          ],
          [
              "Kontak RADJA AC",
              "/kontak"
          ]
      ],
      "ctaLabel": "Chat WhatsApp untuk cek stok AC Gombong",
      "waIntent": "cek stok AC Gombong dengan data ukuran ruangan daya listrik jumlah unit alamat dan kebutuhan pemasangan",
      "waArea": "Gombong"
  },
  {
      "slug": "jual-ac-karanganyar-kebumen",
      "path": "/jual-ac-karanganyar-kebumen",
      "areaName": "Karanganyar Kebumen",
      "label": "Jual AC Karanganyar Kebumen",
      "title": "Jual AC Karanganyar Kebumen untuk Rumah, Toko & Usaha — RADJA AC",
      "description": "Butuh AC untuk rumah, toko, kantor, usaha, atau banyak unit di Karanganyar Kebumen? RADJA AC bantu cek PK, stok, pengiriman unit, opsi pemasangan, dan pembayaran fleksibel via WhatsApp.",
      "h1": "Jual AC Karanganyar Kebumen untuk Rumah, Toko & Usaha",
      "eyebrow": "Area Kebumen",
      "intro": "Butuh AC di Karanganyar Kebumen untuk rumah, kamar, toko, kantor, usaha, atau banyak unit? Tim RADJA AC membantu cek kebutuhan PK, daya listrik, pilihan brand, stok unit, pengiriman, dan opsi pemasangan berdasarkan data awal.",
      "localContext": "Karanganyar Kebumen memakai penamaan area yang jelas agar tidak tertukar dengan Karanganyar di daerah lain. Untuk kebutuhan AC rumah, toko, kantor kecil, usaha, atau beberapa unit, kirim lokasi detail, ukuran ruangan, daya listrik, jumlah unit, anggaran, dan kebutuhan unit saja atau opsi pemasangan agar tim RADJA AC bisa menyusun rekomendasi yang masuk akal.",
      "coverageNote": "Showroom dan gudang RADJA AC berada di Banyumas. Kebutuhan AC area Karanganyar Kebumen dilayani dengan konsultasi PK, cek stok unit, pengiriman, dan opsi pemasangan sesuai alamat, jumlah unit, akses lokasi, serta jadwal.",
      "keywordVariants": [
          "AC untuk rumah area Karanganyar Kebumen",
          "Cek pilihan AC toko, warung, atau ruko kecil",
          "Kebutuhan AC kantor kecil dan ruang usaha",
          "Pengiriman AC ke alamat Karanganyar Kebumen",
          "Cek stok brand sesuai ukuran ruangan",
          "Hitung kebutuhan PK dari data ruangan",
          "Opsi unit saja atau sekalian pemasangan",
          "Pembelian beberapa unit untuk usaha atau properti sewa"
      ],
      "nearbyAreaLinks": [
          [
              "Jual AC Kebumen",
              "/jual-ac-kebumen"
          ],
          [
              "Jual AC Banyumas",
              "/jual-ac-banyumas"
          ],
          [
              "Jual AC Purwokerto",
              "/jual-ac-purwokerto"
          ],
          [
              "Jual AC Cilacap",
              "/jual-ac-cilacap"
          ]
      ],
      "trustBullets": [
          "Karanganyar Kebumen memakai penamaan aman agar tidak bentrok dengan Karanganyar lain.",
          "Kebutuhan AC cocok dimulai dari cek ukuran ruangan, daya listrik, jumlah unit, stok aktif, dan alamat detail.",
          "Pengiriman serta opsi pemasangan dikonfirmasi berdasarkan lokasi, akses pekerjaan, dan jadwal.",
          "Tidak ada klaim toko/cabang/showroom lokal; kebutuhan area Karanganyar Kebumen dikonsultasikan melalui WhatsApp berdasarkan alamat detail."
      ],
      "localFaq": [
          [
              "Apakah halaman ini untuk Karanganyar Kebumen?",
              "Ya. Penamaan Karanganyar Kebumen dipakai agar tidak tertukar dengan Karanganyar di daerah lain. Kirim alamat detail saat konsultasi agar pengecekan pengiriman dan opsi pemasangan lebih jelas."
          ],
          [
              "Apakah RADJA AC melayani pembelian AC area Karanganyar Kebumen?",
              "Bisa dikonsultasikan. Kirim ukuran ruangan, daya listrik, jumlah unit, alamat area Karanganyar Kebumen, dan kebutuhan unit saja atau pemasangan agar tim mengecek stok serta arahan PK."
          ],
          [
              "Apakah ada toko RADJA AC di Karanganyar Kebumen?",
              "Tidak ada klaim toko atau cabang lokal di Karanganyar Kebumen. Kebutuhan diarahkan lewat WhatsApp untuk cek stok, rekomendasi PK, pengiriman, dan opsi pemasangan."
          ],
          [
              "Bisa untuk toko, ruko, kantor kecil, atau usaha di Karanganyar Kebumen?",
              "Bisa. Kirim fungsi ruangan, ukuran, daya listrik, jumlah unit, jam pemakaian, dan target anggaran agar pilihan AC lebih masuk akal."
          ]
      ],
      "commonNeeds": [
          "AC rumah tinggal, kamar tidur, dan ruang keluarga area Karanganyar Kebumen",
          "AC toko, ruko kecil, kantor kecil, warung, dan ruang usaha lokal",
          "AC untuk kost, kontrakan, rumah sewa, atau beberapa ruangan",
          "Pembelian beberapa unit untuk usaha, properti sewa, pengadaan kecil, atau kebutuhan bertahap"
      ],
      "buyingChecks": [
          "Alamat detail Karanganyar Kebumen agar tidak tertukar dengan Karanganyar daerah lain",
          "Ukuran ruangan, tinggi plafon, arah panas, dan fungsi ruangan",
          "Daya listrik, kebutuhan low watt/inverter, dan jam pemakaian harian",
          "Jumlah unit, preferensi brand, anggaran, pengiriman, dan kebutuhan opsi pemasangan"
      ],
      "paymentNote": "Pembayaran fleksibel bisa dikonsultasikan: DP, COD, atau transfer setelah kebutuhan unit, alamat, pengiriman, dan opsi pemasangan jelas.",
      "relatedLinks": [
          [
              "Jual AC Kebumen",
              "/jual-ac-kebumen"
          ],
          [
              "Jual AC Banyumas",
              "/jual-ac-banyumas"
          ],
          [
              "Jual AC Cilacap",
              "/jual-ac-cilacap"
          ],
          [
              "AC Split Rumah",
              "/katalog/ac-split-rumah"
          ],
          [
              "AC Low Watt",
              "/katalog/ac-low-watt"
          ],
          [
              "Kalkulator PK AC",
              "/kalkulator-pk-ac"
          ],
          [
              "Kontak RADJA AC",
              "/kontak"
          ]
      ],
      "ctaLabel": "Chat WhatsApp untuk cek stok AC Karanganyar Kebumen",
      "waIntent": "cek stok AC Karanganyar Kebumen dengan data ukuran ruangan daya listrik jumlah unit alamat dan kebutuhan pemasangan",
      "waArea": "Karanganyar Kebumen"
  },
  {
      "slug": "jual-ac-kutowinangun",
      "path": "/jual-ac-kutowinangun",
      "areaName": "Kutowinangun",
      "label": "Jual AC Kutowinangun",
      "title": "Jual AC Kutowinangun untuk Rumah, Toko & Usaha — RADJA AC",
      "description": "Butuh AC untuk rumah, toko, kantor, usaha, atau banyak unit di Kutowinangun? RADJA AC bantu cek PK, stok, pengiriman unit, opsi pemasangan, dan pembayaran fleksibel via WhatsApp.",
      "h1": "Jual AC Kutowinangun untuk Rumah, Toko & Usaha",
      "eyebrow": "Area Kebumen",
      "intro": "Butuh AC di Kutowinangun untuk rumah, kamar, toko, kantor, usaha, atau banyak unit? Tim RADJA AC membantu cek kebutuhan PK, daya listrik, pilihan brand, stok unit, pengiriman, dan opsi pemasangan berdasarkan data awal.",
      "localContext": "Kutowinangun berada di wilayah Kebumen dengan kebutuhan AC untuk rumah, toko, kantor kecil, warung, usaha lokal, properti sewa, atau beberapa unit. Kirim lokasi detail, ukuran ruangan, daya listrik, jumlah unit, anggaran, dan kebutuhan unit saja atau opsi pemasangan agar tim RADJA AC bisa menyusun rekomendasi yang masuk akal.",
      "coverageNote": "Showroom dan gudang RADJA AC berada di Banyumas. Kebutuhan AC area Kutowinangun dilayani dengan konsultasi PK, cek stok unit, pengiriman, dan opsi pemasangan sesuai alamat, jumlah unit, akses lokasi, serta jadwal.",
      "keywordVariants": [
          "AC untuk kamar dan rumah area Kutowinangun",
          "Cek pilihan AC toko, warung, atau ruko kecil",
          "Kebutuhan AC kantor kecil dan ruang usaha",
          "Pengiriman AC ke alamat Kutowinangun",
          "Cek stok brand sebelum menentukan unit",
          "Hitung PK dari ukuran ruangan dan daya listrik",
          "Opsi unit saja atau sekalian pemasangan",
          "Pembelian beberapa unit untuk usaha atau properti sewa"
      ],
      "nearbyAreaLinks": [
          [
              "Jual AC Kebumen",
              "/jual-ac-kebumen"
          ],
          [
              "Jual AC Banyumas",
              "/jual-ac-banyumas"
          ],
          [
              "Jual AC Purwokerto",
              "/jual-ac-purwokerto"
          ],
          [
              "Jual AC Banjarnegara",
              "/jual-ac-banjarnegara"
          ]
      ],
      "trustBullets": [
          "Kutowinangun diposisikan sebagai area Kebumen untuk kebutuhan AC rumah, toko, kantor kecil, warung, dan usaha lokal.",
          "Kebutuhan AC dibaca dari ukuran ruangan, daya listrik, stok aktif, jumlah unit, dan alamat detail.",
          "Pengiriman dan opsi pemasangan dikonfirmasi berdasarkan lokasi, akses pekerjaan, dan jadwal yang memungkinkan.",
          "Tidak ada klaim toko/cabang/showroom lokal di Kutowinangun; konsultasi dilakukan melalui WhatsApp website."
      ],
      "localFaq": [
          [
              "Apakah RADJA AC melayani pembelian AC area Kutowinangun?",
              "Bisa dikonsultasikan. Kirim ukuran ruangan, daya listrik, jumlah unit, alamat area Kutowinangun, dan kebutuhan unit saja atau opsi pemasangan agar tim RADJA AC mengecek stok serta arahan PK."
          ],
          [
              "Apakah ada toko RADJA AC di Kutowinangun?",
              "Tidak ada klaim toko atau cabang lokal di Kutowinangun. Kebutuhan AC Kutowinangun dikonsultasikan melalui WhatsApp untuk cek stok, pengiriman, dan opsi pemasangan berdasarkan alamat detail."
          ],
          [
              "Bisa cek AC untuk toko, warung, atau kantor kecil di Kutowinangun?",
              "Bisa. Tim membaca fungsi ruangan, ukuran, jumlah orang, daya listrik, jam pemakaian, jumlah unit, dan target anggaran sebelum memberi arahan pilihan AC."
          ],
          [
              "Brand apa saja yang bisa dicek untuk Kutowinangun?",
              "Brand seperti Gree, Daikin, Midea, Hisense, Sharp, Samsung, Panasonic, dan lainnya bisa dicek berdasarkan stok aktif dan kebutuhan ruangan."
          ]
      ],
      "commonNeeds": [
          "AC rumah tinggal, kamar tidur, dan ruang keluarga area Kutowinangun",
          "AC toko, warung, ruko kecil, kantor kecil, dan ruang usaha lokal",
          "AC untuk bangunan keluarga, kontrakan, rumah sewa, atau beberapa ruangan",
          "Pembelian beberapa unit untuk usaha lokal, properti sewa, atau kebutuhan bertahap"
      ],
      "buyingChecks": [
          "Alamat detail Kutowinangun dan akses pengiriman dari jalur Kebumen",
          "Ukuran ruangan, tinggi plafon, paparan panas, dan jumlah orang",
          "Daya listrik, pilihan standard/low watt/inverter, dan durasi pemakaian",
          "Jumlah unit, preferensi brand, target anggaran, pengiriman, dan kebutuhan opsi pemasangan"
      ],
      "paymentNote": "Pembayaran fleksibel bisa dikonsultasikan: DP, COD, atau transfer setelah kebutuhan unit, alamat, pengiriman, dan opsi pemasangan jelas.",
      "relatedLinks": [
          [
              "Jual AC Kebumen",
              "/jual-ac-kebumen"
          ],
          [
              "Jual AC Banjarnegara",
              "/jual-ac-banjarnegara"
          ],
          [
              "Jual AC Banyumas",
              "/jual-ac-banyumas"
          ],
          [
              "AC 1/2 PK",
              "/katalog/ac-1-2-pk"
          ],
          [
              "AC Inverter",
              "/katalog/ac-inverter"
          ],
          [
              "Kalkulator PK AC",
              "/kalkulator-pk-ac"
          ],
          [
              "Kontak RADJA AC",
              "/kontak"
          ]
      ],
      "ctaLabel": "Chat WhatsApp untuk cek stok AC Kutowinangun",
      "waIntent": "cek stok AC Kutowinangun dengan data ukuran ruangan daya listrik jumlah unit alamat dan kebutuhan pemasangan",
      "waArea": "Kutowinangun"
  },
];

export function getAreaItem(slug) {
  return areaItems.find((item) => item.slug === slug);
}
