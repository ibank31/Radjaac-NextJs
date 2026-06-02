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
  ["AC Split Rumah", routes.katalogAcSplitRumah],
  ["AC Low Watt", routes.katalogAcLowWatt],
  ["AC Inverter", routes.katalogAcInverter],
  ["AC Gree", routes.brandGree],
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
      "Butuh toko AC Purwokerto untuk rumah, kost, toko, kantor, hotel, guest house, hospitality, atau banyak unit? RADJA AC bantu cek PK, stok, pengiriman, dan opsi pemasangan via WhatsApp.",
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
      "Butuh AC di Sokaraja dekat showroom RADJA AC? Cek stok, kebutuhan PK, pengiriman unit, opsi pemasangan, atau kebutuhan banyak unit via WhatsApp.",
    h1: "Jual AC Sokaraja dekat showroom dan gudang RADJA AC",
    eyebrow: "Area Showroom & Gudang RADJA AC",
    intro:
      "Showroom dan gudang RADJA AC berada di Pamijen, Sokaraja, Banyumas. Pembelian AC original untuk rumah, kost, toko, kantor, usaha, dan kebutuhan banyak unit bisa dimulai dari cek PK, stok, pengiriman, dan opsi pemasangan.",
    localContext:
      "Sokaraja adalah area showroom dan gudang RADJA AC, sehingga halaman ini menjadi trust page sekaligus money page lokal. Calon pembeli di Sokaraja dan sekitarnya bisa mulai dari cek ukuran ruangan, daya listrik, pilihan brand, stok unit, pengiriman, dan kebutuhan pemasangan sebelum datang atau melanjutkan pembelian.",
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
        "Opsi pemasangan area Sokaraja bisa dikonsultasikan. Tim RADJA AC akan mengecek alamat, titik indoor-outdoor, kebutuhan material, stok unit, dan jadwal.",
      ],
      [
        "Bisa beli AC untuk rumah, toko, kost, atau kantor di Sokaraja?",
        "Bisa dikonsultasikan. Kirim ukuran ruangan, daya listrik, jumlah unit, alamat Sokaraja, kebutuhan unit saja atau pemasangan, dan preferensi brand bila ada.",
      ],
    ],
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
      "Butuh AC untuk rumah, kost, guest house, hotel, kantor, atau proyek di Yogyakarta? RADJA AC cek stok, kebutuhan PK, pengiriman unit, dan opsi pemasangan via WhatsApp.",
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
      ["Pengadaan AC Hotel & Guest House", routes.pengadaanHotelGuestHouse],
      ["Pengadaan AC Kost & Apartemen", routes.pengadaanKostApartemen],
      ["AC Inverter", routes.katalogAcInverter],
      ["AC Daikin", routes.brandDaikin],
      ["Kontak RADJA AC", routes.kontak],
    ],
    ctaLabel: "Chat WhatsApp untuk cek stok AC Yogyakarta",
    waIntent: "cek stok AC Yogyakarta dengan data ukuran ruangan daya listrik jumlah unit dan kebutuhan pemasangan",
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
      ["AC Kantor & Komersial", routes.katalogAcKantorKomersial],
      ["Pengadaan AC Proyek", routes.pengadaanAc],
      ["Pengadaan Kontraktor & Developer", routes.pengadaanKontraktorDeveloper],
      ["AC Daikin", routes.brandDaikin],
      ["AC Gree", routes.brandGree],
      ["Kontak RADJA AC", routes.kontak],
    ],
    ctaLabel: "Chat WhatsApp untuk cek stok AC Semarang",
    waIntent: "cek stok AC Semarang dengan data ukuran ruangan daya listrik jumlah unit dan kebutuhan pemasangan",
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
      ["AC Split Rumah", routes.katalogAcSplitRumah],
      ["AC Inverter", routes.katalogAcInverter],
      ["Pengadaan AC Hotel & Guest House", routes.pengadaanHotelGuestHouse],
      ["AC Gree", routes.brandGree],
      ["AC Daikin", routes.brandDaikin],
      ["Kontak RADJA AC", routes.kontak],
    ],
    ctaLabel: "Chat WhatsApp untuk cek stok AC Solo",
    waIntent: "cek stok AC Solo dengan data ukuran ruangan daya listrik jumlah unit dan kebutuhan pemasangan",
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
    commonNeeds: [
      "AC rumah tinggal dan kamar tidur",
      "AC kost, kontrakan, dan rumah sewa",
      "AC toko, kantor, bengkel, dan ruang usaha",
      "Pembelian beberapa unit untuk usaha lokal, proyek, pengadaan, atau kebutuhan banyak unit",
    ],
    buyingChecks: defaultBuyingChecks,
    relatedLinks: defaultRelatedLinks,
    ctaLabel: "Chat WhatsApp untuk cek stok AC Purbalingga",
    waIntent: "cek stok AC Purbalingga dengan data ukuran ruangan daya listrik jumlah unit dan kebutuhan pemasangan",
    waArea: "Purbalingga",
  },
  {
    slug: "jual-ac-cilacap",
    path: routes.jualAcCilacap,
    areaName: "Cilacap",
    label: "Jual AC Cilacap",
    title: "Jual AC Cilacap | Cek Stok, Pengiriman & Opsi Pemasangan — RADJA AC",
    description:
      "Butuh AC untuk rumah, toko, kantor, usaha, proyek, pengadaan, atau banyak unit di Cilacap? RADJA AC bantu konsultasi PK, cek stok, pengiriman unit, dan opsi pemasangan via WhatsApp.",
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
    relatedLinks: [
      ["Jual AC Purwokerto", routes.jualAcPurwokerto],
      ["Jual AC Banyumas", routes.jualAcBanyumas],
      ["Kalkulator PK AC", routes.kalkulatorPkAc],
      ["AC Kantor & Komersial", routes.katalogAcKantorKomersial],
      ["AC Low Watt", routes.katalogAcLowWatt],
      ["Pengadaan AC Proyek", routes.pengadaanAc],
      ["AC Daikin", routes.brandDaikin],
      ["AC Gree", routes.brandGree],
      ["Kontak RADJA AC", routes.kontak],
    ],
    ctaLabel: "Chat WhatsApp untuk cek AC Cilacap",
    waIntent: "cek stok AC Cilacap dengan data kecamatan ukuran ruangan daya listrik jumlah unit alamat dan kebutuhan pemasangan",
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
      ["Purwokerto", routes.jualAcPurwokerto],
      ["Banyumas", routes.jualAcBanyumas],
      ["Wangon", routes.jualAcWangon],
      ["Kebumen", routes.jualAcKebumen],
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
    slug: "jual-ac-kebumen",
    path: routes.jualAcKebumen,
    areaName: "Kebumen",
    label: "Jual AC Kebumen",
    title: "Jual AC Kebumen | Konsultasi PK, Cek Stok & Opsi Pasang — RADJA AC",
    description:
      "Butuh AC untuk rumah, kost, kontrakan, properti sewa, toko, ruko, kantor, atau usaha di Kebumen? RADJA AC bantu konsultasi PK, cek stok unit, pengiriman, dan opsi pemasangan via WhatsApp.",
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
    relatedLinks: [
      ["Jual AC Purwokerto", routes.jualAcPurwokerto],
      ["Jual AC Banyumas", routes.jualAcBanyumas],
      ["Jual AC Cilacap", routes.jualAcCilacap],
      ["Kalkulator PK AC", routes.kalkulatorPkAc],
      ["AC 1/2 PK", routes.katalogAcSetengahPk],
      ["AC Low Watt", routes.katalogAcLowWatt],
      ["AC Split Rumah", routes.katalogAcSplitRumah],
      ["AC Gree", routes.brandGree],
      ["Kontak RADJA AC", routes.kontak],
    ],
    ctaLabel: "Chat WhatsApp untuk cek AC Kebumen",
    waIntent: "cek stok AC Kebumen dengan data ukuran ruangan daya listrik jumlah unit alamat anggaran dan kebutuhan pemasangan",
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
    title: "Jual AC Tegal & Slawi | Cek Stok, Pengiriman & Opsi Pemasangan — RADJA AC",
    description:
      "Butuh AC untuk rumah, toko, kantor, usaha, proyek, pengadaan, atau banyak unit di Tegal dan Slawi? RADJA AC bantu cek stok, konsultasi PK, pengiriman unit, dan opsi pemasangan via WhatsApp.",
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
    relatedLinks: [
      ["Jual AC Purwokerto", routes.jualAcPurwokerto],
      ["Jual AC Banyumas", routes.jualAcBanyumas],
      ["Jual AC Kebumen", routes.jualAcKebumen],
      ["Kalkulator PK AC", routes.kalkulatorPkAc],
      ["AC Split Rumah", routes.katalogAcSplitRumah],
      ["AC Kantor & Komersial", routes.katalogAcKantorKomersial],
      ["Pengadaan AC Proyek", routes.pengadaanAc],
      ["AC Daikin", routes.brandDaikin],
      ["AC Gree", routes.brandGree],
      ["Kontak RADJA AC", routes.kontak],
    ],
    ctaLabel: "Chat WhatsApp untuk cek AC Tegal",
    waIntent: "cek stok AC Tegal atau Slawi dengan data area ukuran ruangan daya listrik jumlah unit alamat anggaran dan kebutuhan pemasangan",
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
    relatedLinks: defaultRelatedLinks,
    ctaLabel: "Chat WhatsApp untuk cek stok AC Banjarnegara",
    waIntent: "cek stok AC Banjarnegara dengan data ukuran ruangan daya listrik jumlah unit dan kebutuhan pemasangan",
    waArea: "Banjarnegara",
  },
];

export function getAreaItem(slug) {
  return areaItems.find((item) => item.slug === slug);
}
