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
    localLandmarks: [
      "Kampus UNSOED (Universitas Jenderal Soedirman)",
      "Alun-alun Purwokerto",
      "Stasiun Purwokerto",
      "Terminal Bulupitu",
      "RSUD Prof. Dr. Margono Soekarjo",
    ],
    localBenefits: [
      "Kos mahasiswa di sekitar UNSOED butuh banyak unit hemat daya dengan tipe seragam",
      "Hotel, guest house, ruko, dan kantor di pusat kota perlu kapasitas untuk ruang publik dan pemakaian panjang",
      "Pusat perdagangan yang padat dan panas membutuhkan PK yang dihitung dari luas dan lalu lalang pengunjung",
    ],
    localCases: [
      ["Kos & rumah sewa sekitar UNSOED", "Banyak unit hemat daya dengan tipe seragam untuk hunian mahasiswa."],
      ["Hotel, guest house & perkantoran", "AC ruang publik dan kamar dengan pemakaian harian panjang di pusat kota."],
      ["Toko, ruko & pusat perdagangan", "AC area pelanggan yang ramai dengan kapasitas sesuai luas dan pengunjung."],
    ],
    localFaq: [
      [
        "Berapa unit AC untuk kos banyak kamar dekat UNSOED?",
        "Tergantung jumlah kamar dan daya listrik total bangunan. Kirim jumlah kamar dan daya agar tim bantu cek pilihan unit hemat daya dengan tipe seragam.",
      ],
      [
        "AC untuk hotel, guest house, atau kantor di pusat kota Purwokerto?",
        "Bisa. Kirim jumlah ruang atau kamar, ukuran, jam pemakaian, dan preferensi brand agar tim menyiapkan kapasitas dan pilihan untuk ruang publik.",
      ],
      [
        "AC untuk toko atau ruko di pusat perdagangan Purwokerto?",
        "Ditentukan dari luas, jumlah pengunjung, dan pintu yang sering terbuka. Kirim ukuran ruang usaha untuk perkiraan PK.",
      ],
    ],
    label: "Jual AC Purwokerto",
    title: "Jual AC Purwokerto | Cek Stok, PK & Opsi Pemasangan — RADJA AC",
    description:
      "Butuh AC Purwokerto untuk rumah, kost, toko, kantor, hotel, guest house, atau banyak unit? RADJA AC bantu cek PK, stok, pengiriman, dan opsi pemasangan.",
    h1: "Jual AC Purwokerto dengan cek stok, PK, dan opsi pemasangan",
    eyebrow: "Area Utama Purwokerto",
    intro:
      "Butuh beli AC di Purwokerto untuk rumah, kost, toko, kantor, hotel, guest house, hospitality, atau banyak unit? Mulai dari cek ukuran ruangan, daya listrik, pilihan brand, stok unit, pengiriman, dan opsi pemasangan sebelum pembelian.",
    localContext:
      "Purwokerto adalah pusat kota dan kawasan kampus Banyumas: ada kampus UNSOED dengan ribuan kos mahasiswa, pusat perdagangan, hotel, ruko, dan perkantoran. Permintaan AC datang dari kos dan rumah sewa di sekitar kampus, hotel dan guest house, toko serta ruko di pusat perdagangan, dan kantor yang beroperasi seharian. Karena beban panas tiap ruang berbeda, tim RADJA AC mengecek ukuran ruangan, daya listrik, jam pemakaian, jumlah unit, dan alamat sebelum menentukan unit.",
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
  },
  {
    slug: "jual-ac-banyumas",
    path: routes.jualAcBanyumas,
    areaName: "Banyumas",
    localLandmarks: [
      "Kota lama Banyumas (alun-alun lama)",
      "Museum Wayang Banyumas",
      "Masjid Agung Nur Sulaiman",
      "Pasar Banyumas",
      "Dekat showroom dan gudang RADJA AC di Pamijen, Sokaraja",
    ],
    localBenefits: [
      "Paling dekat dengan gudang RADJA AC di Sokaraja, jadi pengiriman unit dan survei lokasi paling cepat dijadwalkan",
      "Toko, ruko, dan kantor instansi di pusat kota lama butuh ruang yang adem buat tamu dan staf",
      "Sebagian bangunan lama bersejarah perlu cek daya dan jalur pipa yang rapi sebelum pasang",
    ],
    localCases: [
      ["Rumah & bangunan lama", "Pemasangan AC kamar dengan jalur pipa rapi; bangunan tua dicek dayanya dulu."],
      ["Toko, ruko & kantor instansi", "AC ruang pelanggan dan ruang kerja di pusat kota lama Banyumas."],
      ["Banyak unit dekat gudang", "Pembelian beberapa unit yang pengiriman dan pemasangannya cepat karena dekat basis."],
    ],
    label: "Jual AC Banyumas",
    title: "Jual AC Banyumas | Cek Stok, PK, Pengiriman & Pemasangan — RADJA AC",
    description:
      "Butuh AC area Banyumas untuk rumah, kost, toko, kantor, usaha, atau banyak unit? RADJA AC cek PK, stok, pengiriman unit, dan opsi pemasangan via WhatsApp.",
    h1: "Jual AC Banyumas untuk rumah, kost, toko, usaha, dan banyak unit",
    eyebrow: "Area Utama Banyumas",
    intro:
      "RADJA AC melayani kebutuhan AC area Banyumas untuk rumah, kost, kontrakan, toko, kantor atau ruko, usaha, dan banyak unit. Sebelum pembelian, tim RADJA AC mengecek kebutuhan PK, daya listrik, pilihan brand, stok, pengiriman, dan opsi pemasangan.",
    localContext:
      "Banyumas adalah kota lama bersejarah sekaligus area paling dekat dengan basis RADJA AC—showroom dan gudang ada di Pamijen, Sokaraja. Pembeli AC di sini banyak dari rumah tinggal, toko dan ruko di pusat kota lama, kantor instansi, serta klinik. Karena dekat gudang, pengiriman unit dan survei lokasi paling cepat dijadwalkan di area ini. Untuk jual AC Banyumas, banyak yang ambil sekalian pemasangan, dengan pembayaran DP, COD, atau transfer setelah stok dipastikan.",
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
        "Karena dekat gudang Sokaraja, pengiriman ke Banyumas cepat?",
        "Banyumas paling dekat dengan showroom dan gudang RADJA AC di Pamijen, Sokaraja, jadi pengiriman unit dan survei lokasi biasanya paling cepat dijadwalkan. Sebutkan alamat dan jumlah unit.",
      ],
      [
        "Bangunan lama di kota Banyumas, aman pasang AC dan pipanya rapi?",
        "Bangunan tua sebaiknya dicek daya listrik dan jalur pipanya dulu agar instalasi rapi dan aman. Kirim foto titik indoor-outdoor untuk perkiraan.",
      ],
      [
        "Bisa lihat unit dulu di showroom sebelum beli untuk Banyumas?",
        "Bisa. Showroom dan gudang ada di Pamijen, Sokaraja; cek stok dan tipe unit dulu lewat WhatsApp agar tidak bolak-balik.",
      ],
      [
        "Beli beberapa unit untuk toko atau kantor di Banyumas, bagaimana?",
        "Sebutkan jumlah ruang dan ukurannya; unit dikirim cepat karena dekat gudang, lalu pemasangan dijadwalkan, dengan pembayaran DP atau transfer setelah stok dipastikan.",
      ],
    ],
  },
  {
    slug: "jual-ac-sokaraja",
    path: routes.jualAcSokaraja,
    areaName: "Sokaraja",
    localLandmarks: [
      "Sentra Getuk Goreng Sokaraja",
      "Jalan nasional Sokaraja (Purwokerto–Purbalingga)",
      "Pasar Sokaraja",
      "Showroom dan gudang RADJA AC di Pamijen",
      "Deretan toko oleh-oleh dan rumah makan",
    ],
    localBenefits: [
      "Lokasi showroom dan gudang, jadi pembeli bisa datang langsung cek unit lalu pasang di hari yang sama",
      "Toko oleh-oleh dan rumah makan di jalur kuliner butuh ruang yang adem buat pembeli yang singgah",
      "Stok bisa dicek langsung sehingga pengiriman dan pemasangan paling cepat di area ini",
    ],
    localCases: [
      ["Toko oleh-oleh & rumah makan", "AC ruang pelanggan di jalur getuk goreng agar pengunjung betah memilih dan makan."],
      ["Ruko & rumah warga", "Pemasangan AC kamar dan ruang usaha dengan unit yang bisa diambil langsung dari gudang."],
      ["Datang langsung ke showroom", "Pembeli cek tipe dan stok di Pamijen lalu lanjut pasang di hari yang sama."],
    ],
    label: "Jual AC Sokaraja",
    title: "Jual AC Sokaraja | Dekat Showroom & Gudang RADJA AC — RADJA AC",
    description:
      "Butuh AC di Sokaraja dekat showroom dan gudang RADJA AC? Cek stok, kebutuhan PK, pengiriman unit, opsi pemasangan, atau kebutuhan banyak unit via WhatsApp.",
    h1: "Jual AC Sokaraja dekat showroom dan gudang RADJA AC",
    eyebrow: "Area Showroom & Gudang RADJA AC",
    intro:
      "Showroom dan gudang RADJA AC berada di Pamijen, Sokaraja, Banyumas. Pembelian AC original untuk rumah, kost, toko, kantor, usaha, dan kebutuhan banyak unit bisa dimulai dari cek PK, stok, pengiriman, dan opsi pemasangan.",
    localContext:
      "Sokaraja adalah koridor kuliner dan dagang yang terkenal dengan getuk goreng, dilalui jalan nasional Purwokerto–Purbalingga—dan di Pamijen, Sokaraja inilah showroom serta gudang RADJA AC berada. Pembeli AC banyak dari toko oleh-oleh dan rumah makan di sepanjang jalan, ruko, serta rumah warga. Karena ini lokasi gudang, pembeli sering datang langsung cek unit lalu pasang di hari yang sama. Untuk jual AC Sokaraja, pembayaran bisa DP, COD, atau transfer, dengan stok yang bisa dicek langsung.",
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
        "Showroom dan gudang RADJA AC memang di Sokaraja?",
        "Ya, di Pamijen, Sokaraja. Pembeli area Sokaraja bisa datang langsung cek tipe dan stok unit, lalu lanjut pengiriman dan pemasangan—sering bisa di hari yang sama.",
      ],
      [
        "AC untuk toko oleh-oleh atau rumah makan di jalur Sokaraja, pilih apa?",
        "Ruang yang ramai dan pintunya sering kebuka butuh kapasitas sesuai luas dan jumlah pengunjung. Sebutkan ukuran ruang dan jam ramai untuk cek unit.",
      ],
      [
        "Karena dekat gudang, pasang AC di Sokaraja bisa cepat?",
        "Bisa. Stok dicek langsung di gudang Pamijen, jadi pengiriman dan pemasangan biasanya paling cepat dijadwalkan di area ini.",
      ],
      [
        "Pembayaran AC di Sokaraja bisa DP atau transfer?",
        "Bisa. Pembeli bisa DP dulu lalu pelunasan transfer atau COD; karena dekat gudang, stok dan unit gampang dipastikan sebelum bayar.",
      ],
    ],
  },
    {
      slug: "jual-ac-jatilawang",
      path: routes.jualAcJatilawang,
      areaName: "Jatilawang",
      localLandmarks: [
        "Jalur selatan Banyumas (Wangon–Rawalo)",
        "Pasar Jatilawang",
        "Kawasan dekat Sungai Serayu",
        "Sentra gula kelapa dan UMKM rumahan",
        "Permukiman dan persawahan sepanjang jalan utama",
      ],
      localBenefits: [
        "AC rumah di Jatilawang banyak yang cari low watt karena daya listrik di permukiman desa sering terbatas",
        "Warung, toko, dan UMKM rumahan butuh unit hemat untuk ruang usaha yang dipakai harian",
        "Pengiriman unit ke alamat lalu pemasangan memudahkan pembeli yang jauh dari pusat kota",
      ],
      localCases: [
        ["Rumah tinggal", "Pemasangan AC kamar yang panas saat siang, dengan pilihan low watt menyesuaikan daya rumah."],
        ["Warung, toko & UMKM", "AC ruang usaha atau ruang produksi rumahan supaya pekerja dan pembeli tidak gerah."],
        ["Kantor desa & ruang layanan", "Pemilihan unit untuk ruang kerja kecil dengan pengiriman ke alamat Jatilawang."],
      ],
      label: "Jual AC Jatilawang",
      title: "Jual AC Jatilawang untuk Rumah, Toko & Usaha — RADJA AC",
      description:
        "Butuh AC untuk rumah, toko, ruko, kantor, atau usaha di Jatilawang? RADJA AC bantu cek PK, stok, pengiriman, opsi pemasangan, dan pembayaran fleksibel.",
      h1: "Jual AC Jatilawang untuk Rumah, Toko & Usaha",
      eyebrow: "Area Banyumas",
      intro:
        "Butuh AC di Jatilawang untuk rumah, toko, ruko, kantor, ruang usaha, atau beberapa unit? Tim RADJA AC bantu cek kebutuhan PK, daya listrik, stok brand, pengiriman, dan opsi pemasangan dari data awal.",
      localContext:
        "Jatilawang ada di jalur selatan Banyumas dekat Wangon dan Rawalo, daerah pertanian dan UMKM rumahan—termasuk sentra gula kelapa—dengan permukiman dan toko di sepanjang jalan utama. Pembeli AC di sini umumnya rumah tinggal yang kamarnya panas saat siang, ditambah warung, toko, dan kantor desa. Karena daya listrik rumahan banyak yang terbatas, jual AC Jatilawang sering mengarah ke pilihan low watt. Unit biasanya dikirim ke alamat lalu dipasang, dengan pembayaran DP, COD, atau transfer setelah stok dipastikan.",
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
          "AC rumah di Jatilawang sebaiknya low watt karena listrik terbatas?",
          "Banyak rumah di permukiman Jatilawang pakai daya 900–1300 watt, jadi low watt sering jadi pilihan agar listrik tidak turun. Sebutkan daya listrik dan ukuran kamar untuk cek unit dan stok.",
        ],
        [
          "Bisa kirim AC ke alamat yang agak masuk desa di Jatilawang?",
          "Bisa. Unit dikirim ke alamat lalu pemasangan dijadwalkan sesuai akses lokasi; sebutkan alamat dan jumlah unit untuk perkiraan pengiriman.",
        ],
        [
          "Untuk warung atau UMKM rumahan di Jatilawang, AC-nya bagaimana?",
          "Ruang usaha atau ruang produksi yang dipakai harian sebaiknya pakai kapasitas yang sesuai luas, bukan yang termurah, supaya awet. Sebutkan ukuran ruang dan jam pakai.",
        ],
        [
          "Pembayaran AC di Jatilawang bisa COD atau transfer?",
          "Bisa. Banyak pembeli ambil DP dulu lalu pelunasan COD saat unit datang, atau transfer setelah stok dipastikan.",
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
      localLandmarks: [
        "Jalur Purwokerto–Cilongok–Ajibarang",
        "Sentra durian dan gula kelapa Cilongok",
        "Pasar Cilongok",
        "Permukiman dan persawahan desa",
        "Curug dan wisata alam sekitar Cilongok",
      ],
      localBenefits: [
        "AC rumah dan AC kos di permukiman desa Cilongok banyak pilih low watt karena daya listrik terbatas",
        "Toko kecil dan usaha rumahan butuh unit hemat untuk dipakai harian",
        "Pengiriman unit ke alamat desa lalu pemasangan memudahkan pembeli yang jauh dari kota",
      ],
      localCases: [
        ["Rumah & kos desa", "Pemasangan AC kamar yang panas saat siang dengan pilihan low watt sesuai daya."],
        ["Toko kecil & usaha rumahan", "AC ruang usaha atau warung di sepanjang jalan desa."],
        ["Tambah unit bertahap", "Keluarga menambah AC per kamar mengikuti anggaran."],
      ],
      label: "Jual AC Cilongok",
      title: "Jual AC Cilongok untuk Rumah, Toko & Usaha — RADJA AC",
      description:
        "Butuh AC untuk rumah, toko, ruko, kantor, atau usaha di Cilongok? RADJA AC bantu cek PK, stok, pengiriman, opsi pemasangan, dan pembayaran fleksibel.",
      h1: "Jual AC Cilongok untuk Rumah, Toko & Usaha",
      eyebrow: "Area Banyumas",
      intro:
        "Butuh AC di Cilongok untuk rumah, toko, ruko, kantor, ruang usaha, atau beberapa unit? Tim RADJA AC bantu cek kebutuhan PK, daya listrik, stok brand, pengiriman, dan opsi pemasangan dari data awal.",
      localContext:
        "Cilongok ada di sisi barat Banyumas menuju Ajibarang—daerah pertanian dan perdesaan yang dikenal dengan durian dan gula kelapa. Pembeli AC di sini umumnya rumah warga, kos, dan toko kecil di sepanjang jalan desa, dengan daya listrik rumahan yang sering terbatas. Karena itu banyak yang cari AC rumah low watt. Untuk jual AC Cilongok, unit diantar ke alamat lalu dipasang, dengan pembayaran DP, COD, atau transfer setelah stok dipastikan.",
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
          "AC rumah di Cilongok, pas pakai low watt karena listrik terbatas?",
          "Banyak rumah desa di Cilongok pakai daya 900–1300 watt, jadi low watt sering cocok agar listrik tidak turun. Sebutkan daya dan ukuran kamar untuk cek unit dan stok.",
        ],
        [
          "Bisa kirim AC ke alamat yang masuk desa di Cilongok?",
          "Bisa. Unit dikirim ke alamat lalu pemasangan dijadwalkan sesuai akses lokasi; sebutkan alamat dan jumlah unit untuk perkiraan pengiriman.",
        ],
        [
          "Untuk toko kecil atau warung di Cilongok, AC-nya bagaimana?",
          "Ruang usaha yang dipakai harian sebaiknya pakai kapasitas sesuai luas, bukan yang termurah, supaya awet. Sebutkan ukuran ruang dan jam pakai.",
        ],
        [
          "Pembayaran AC di Cilongok bisa COD atau transfer?",
          "Bisa. Banyak pembeli ambil DP dulu lalu pelunasan COD saat unit datang, atau transfer setelah stok dipastikan.",
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
      localLandmarks: [
        "Pasar Ajibarang",
        "Terminal Ajibarang",
        "RSUD Ajibarang",
        "Persimpangan jalur Purwokerto–Bumiayu–Tegal",
        "Pertokoan dan ruko pusat kecamatan",
      ],
      localBenefits: [
        "Ruko dan toko di sekitar Pasar Ajibarang cepat pengap saat ramai, jadi butuh AC yang cepat dingin di ruang sempit penuh barang",
        "Apotek, klinik, dan kantor dekat RSUD Ajibarang perlu ruang tunggu yang adem sepanjang jam buka",
        "AC rumah di Ajibarang banyak dipilih untuk kamar dan ruang keluarga dengan pemasangan rapi",
      ],
      localCases: [
        ["Ruko & toko pasar", "Pedagang pasang AC di ruang jualan agar pembeli betah; sebagian beli beberapa unit untuk toko yang luas."],
        ["Apotek, klinik & kantor", "AC ruang tunggu dan ruang layanan dekat RSUD Ajibarang supaya pasien dan staf nyaman."],
        ["Rumah tinggal", "Pemasangan AC kamar dengan pengiriman unit ke alamat di Ajibarang dan sekitarnya."],
      ],
      label: "Jual AC Ajibarang",
      title: "Jual AC Ajibarang untuk Rumah, Toko & Usaha — RADJA AC",
      description:
        "Butuh AC untuk rumah, toko, ruko, kantor, atau usaha di Ajibarang? RADJA AC cek kebutuhan PK, stok, pengiriman unit, dan opsi pemasangan via WhatsApp.",
      h1: "Jual AC Ajibarang untuk Rumah, Toko & Usaha",
      eyebrow: "Area Banyumas Barat",
      intro:
        "Butuh AC di Ajibarang untuk rumah, toko, ruko, kantor, atau usaha? Tim RADJA AC cek ukuran ruangan, daya listrik, pilihan brand, stok unit, pengiriman, dan opsi pemasangan sebelum pembelian.",
      localContext:
        "Ajibarang adalah pusat dagang dan persimpangan barat Banyumas menuju Bumiayu dan Tegal, dengan Pasar Ajibarang yang ramai sebagai jantung ekonominya. Pembeli AC di sini banyak dari pemilik ruko dan toko di sekitar pasar, apotek dan klinik dekat RSUD Ajibarang, serta rumah tinggal. Toko yang sempit dan penuh barang cepat pengap saat ramai pembeli, sehingga jual AC Ajibarang sering soal mencari unit yang cepat mendinginkan ruang usaha. Banyak yang beli unit sekaligus pemasangan, dengan pembayaran DP atau transfer setelah stok dipastikan.",
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
          "Toko saya dekat Pasar Ajibarang sempit dan penuh barang, AC apa yang cocok?",
          "Ruang sempit yang padat barang dan ramai pembeli cepat pengap, jadi kapasitas dihitung dari luas dan jumlah orang, bukan sekadar yang termurah. Sebutkan ukuran toko untuk cek stok unit yang pas.",
        ],
        [
          "Bisa beli beberapa unit AC sekaligus untuk ruko atau usaha di Ajibarang?",
          "Bisa. Untuk beberapa titik, sebutkan jumlah ruang dan ukurannya; unit dikirim dan pemasangan dijadwalkan, dengan pembayaran DP atau transfer setelah stok dipastikan.",
        ],
        [
          "Melayani pengiriman dan pemasangan AC ke arah Pekuncen, Gumelar, atau Bumiayu dari Ajibarang?",
          "Pengiriman unit bisa diantar ke alamat di sekitar jalur Ajibarang–Bumiayu lalu pemasangan dijadwalkan sesuai akses lokasi. Sebutkan alamat dan jumlah unit untuk perkiraan.",
        ],
      ],
    },
    {
      slug: "jual-ac-wangon",
      path: routes.jualAcWangon,
      areaName: "Wangon",
      localLandmarks: [
        "Pertigaan Wangon (simpul jalur nasional selatan)",
        "Jalur Purwokerto–Cilacap–Bandung",
        "Pasar dan Terminal Wangon",
        "Deretan rumah makan dan SPBU jalur selatan",
        "Ruko dan bengkel di pinggir jalan utama",
      ],
      localBenefits: [
        "Rumah makan dan warung di jalur transit perlu AC yang tetap adem walau pintu sering kebuka dan ruangan penuh saat jam makan siang",
        "Toko dan ruko pinggir jalan nasional cari unit yang kuat dipakai seharian; filter cepat kotor karena debu kendaraan",
        "AC rumah dan AC kos di Wangon banyak yang ambil low watt karena daya listrik rumahan terbatas",
      ],
      localCases: [
        ["Rumah makan & warung transit", "Pemilik pasang AC di ruang makan supaya pelanggan yang singgah betah, dan menambah unit saat ruang makan diperluas."],
        ["Toko kelontong & ruko jalur", "AC dipasang dekat etalase dan kasir agar pemilik dan pembeli tidak kepanasan saat lalu lintas padat."],
        ["Rumah & kos pinggir jalur", "Pemasangan AC kamar dengan pilihan low watt; unit dikirim langsung ke alamat di jalur Wangon."],
      ],
      label: "Jual AC Wangon",
      title: "Jual AC Wangon untuk Rumah, Toko & Usaha — RADJA AC",
      description:
        "Butuh AC untuk rumah, toko, ruko, kantor, atau usaha di Wangon? RADJA AC cek kebutuhan PK, stok, pengiriman unit, dan opsi pemasangan via WhatsApp.",
      h1: "Jual AC Wangon untuk Rumah, Toko & Usaha",
      eyebrow: "Area Banyumas Barat & Jalur Selatan",
      intro:
        "Butuh AC di Wangon untuk rumah, toko, warung, ruko, kantor, atau ruang usaha? Tim RADJA AC cek ukuran ruangan, daya listrik, pilihan brand, stok unit, pengiriman, dan opsi pemasangan sebelum pembelian.",
      localContext:
        "Di Wangon, yang paling sering cari AC adalah pemilik rumah makan, warung, dan toko di sekitar pertigaan jalur nasional selatan—jalur ramai Purwokerto–Cilacap–Bandung. Ruang makan dan toko cepat gerah karena pintu nyaris tidak pernah tertutup dan debu kendaraan membuat filter cepat kotor, sehingga banyak yang mencari unit yang kuat dipakai seharian. Untuk jual AC Wangon, pembeli biasanya minta pengiriman langsung ke lokasi pinggir jalur lalu pemasangan, dengan pembayaran DP dulu dan pelunasan transfer atau COD saat unit datang dan stok dipastikan.",
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
          "Banyak yang beli AC untuk rumah makan di jalur Wangon, unitnya kuat dipakai seharian?",
          "Untuk ruang makan ramai yang pintunya sering kebuka, kapasitas diambil sedikit lebih besar dari kamar biasa supaya dingin tetap merata. Sebutkan luas ruang makan dan jumlah meja agar bisa dicek stok unit yang cocok.",
        ],
        [
          "Bisa kirim dan pasang AC ke toko atau ruko di pinggir jalur Wangon?",
          "Bisa. Pengiriman unit diantar ke alamat di jalur Wangon lalu pemasangan dijadwalkan; banyak pembeli ambil DP dulu dan pelunasan transfer atau COD saat unit sampai.",
        ],
        [
          "AC rumah atau AC kos di Wangon sebaiknya pilih apa kalau listrik terbatas?",
          "Rumah dan kos dengan daya 900–1300 watt biasanya pakai low watt agar listrik tidak turun. Sebutkan daya listrik dan jumlah kamar untuk cek pilihan unit dan stok.",
        ],
        [
          "Di pinggir jalan ramai filter AC cepat kotor, ada saran?",
          "Debu kendaraan memang mempercepat filter kotor, jadi unit dengan filter yang gampang dibersihkan lebih praktis untuk toko dan rumah makan jalur. Perawatan rutin menjaga AC tetap dingin dan hemat listrik.",
        ],
      ],
    },
    {
      slug: "jual-ac-karanglewas",
      path: routes.jualAcKaranglewas,
      areaName: "Karanglewas",
      localLandmarks: [
        "Kawasan perumahan dan cluster di Karanglewas",
        "Ruko dan toko di jalur Karanglewas–Purwokerto",
        "Pasar serta area usaha lokal",
        "Akses dekat pusat kota Purwokerto",
      ],
      localBenefits: [
        "Dekat basis layanan Banyumas sehingga pengiriman unit dan survei lokasi relatif mudah dijadwalkan",
        "Cocok untuk rumah dan ruko yang umumnya butuh 1/2–1 PK dengan pemasangan rapi",
        "Pilihan inverter relevan untuk pemakaian harian di rumah keluarga",
      ],
      localCases: [
        ["Rumah perumahan baru", "Pemasangan AC kamar utama dan ruang keluarga dengan jalur pipa yang rapi."],
        ["Ruko & toko", "AC untuk area pelanggan dan ruang kerja dengan kapasitas menyesuaikan luas ruangan."],
        ["Tambah unit bertahap", "Beberapa keluarga menambah unit per kamar secara bertahap sesuai anggaran."],
      ],
      label: "Jual AC Karanglewas",
      title: "Jual AC Karanglewas untuk Rumah, Kost & Usaha — RADJA AC",
      description:
        "Butuh AC untuk rumah, kost, toko, kantor, ruko, atau usaha di Karanglewas? RADJA AC cek kebutuhan PK, stok, pengiriman unit, dan opsi pemasangan via WhatsApp.",
      h1: "Jual AC Karanglewas untuk Rumah, Kost & Usaha",
      eyebrow: "Area Ring Purwokerto",
      intro:
        "Butuh AC di Karanglewas untuk rumah, kamar, kost, toko, kantor, ruko, atau usaha? Tim RADJA AC cek ukuran ruangan, daya listrik, pilihan brand, stok unit, pengiriman, dan opsi pemasangan sebelum pembelian.",
      localContext:
        "Karanglewas adalah ring barat Purwokerto yang berkembang dengan perumahan, ruko, dan toko, dekat pusat kota. Pembeli AC banyak dari rumah perumahan, ruko, dan toko, dengan kebutuhan pemasangan yang rapi. Karena dekat basis layanan Banyumas, pengiriman unit dan survei lokasi mudah dijadwalkan. Untuk jual AC Karanglewas, unit dikirim ke alamat lalu dipasang, dengan pembayaran DP, COD, atau transfer setelah stok dipastikan.",
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
          "AC rumah di perumahan Karanglewas, pasang pipanya rapi?",
          "Untuk rumah dan perumahan, jalur pipa indoor-outdoor dibahas dulu supaya instalasi rapi. Kirim foto titik pemasangan dan ukuran kamar untuk perkiraan unit dan material.",
        ],
        [
          "Bisa kirim dan pasang AC ke ruko atau rumah di Karanglewas?",
          "Bisa. Karanglewas dekat pusat kota dan basis layanan, jadi pengiriman unit dan survei lokasi mudah dijadwalkan. Sebutkan alamat dan jumlah unit.",
        ],
        [
          "AC kos atau rumah di Karanglewas, hemat listrik?",
          "Rumah dan kos dengan daya terbatas banyak pakai low watt; untuk pemakaian harian keluarga, inverter lebih hemat. Sebutkan daya dan ukuran kamar untuk arahan.",
        ],
      ],
    },
    {
      slug: "jual-ac-kembaran",
      path: routes.jualAcKembaran,
      areaName: "Kembaran",
      localLandmarks: [
        "Kawasan kampus UNSOED sisi timur (Karangwangkal)",
        "Jalur Purwokerto–Sokaraja via Kembaran",
        "Kawasan kos dan hunian Kembaran",
        "Pasar dan area usaha lokal",
        "Perumahan di ring timur Purwokerto",
      ],
      localBenefits: [
        "Kos kecil dan kontrakan dengan banyak kamar membutuhkan unit hemat daya per kamar",
        "Rumah sewa dan hunian warga dengan daya listrik terbatas cocok memakai low watt",
        "Tipe unit seragam memudahkan pemilik kos merawat dan menambah AC bertahap",
      ],
      localCases: [
        ["Kos kecil & kontrakan", "Banyak kamar kecil dengan unit hemat daya dan tipe seragam."],
        ["Rumah sewa & hunian warga", "AC kamar untuk hunian dengan daya listrik standar."],
        ["Penambahan unit bertahap", "Pemilik kos menambah AC per kamar mengikuti anggaran."],
      ],
      localFaq: [
        [
          "AC untuk kos kecil banyak kamar di Kembaran, pakai apa?",
          "Untuk banyak kamar kecil, unit kapasitas kecil yang hemat daya biasanya cocok, tetapi tetap dicek dari daya listrik total bangunan. Kirim jumlah kamar dan daya untuk arahan.",
        ],
        [
          "Bisa pasang AC bertahap untuk rumah sewa atau kontrakan di Kembaran?",
          "Bisa. Banyak pemilik memasang per kamar secara bertahap. Kirim jumlah kamar dan target agar tim menyiapkan tipe seragam dan jadwal.",
        ],
        [
          "AC low watt cukup untuk hunian Kembaran dengan daya terbatas?",
          "Sering cocok untuk daya standar, tergantung jumlah unit yang menyala bersamaan. Kirim daya listrik dan jumlah unit agar dicek kecocokannya.",
        ],
      ],
      label: "Jual AC Kembaran",
      title: "Jual AC Kembaran untuk Rumah, Kost & Usaha — RADJA AC",
      description:
        "Butuh AC untuk rumah, kost, kontrakan, toko, atau usaha di Kembaran? RADJA AC cek kebutuhan PK, stok, pengiriman unit, dan opsi pemasangan via WhatsApp.",
      h1: "Jual AC Kembaran untuk Rumah, Kost & Usaha",
      eyebrow: "Area Kampus & Hunian Banyumas",
      intro:
        "Butuh AC di Kembaran untuk rumah, kost, kontrakan, toko, atau usaha? Tim RADJA AC cek ukuran ruangan, daya listrik, pilihan brand, stok unit, pengiriman, dan opsi pemasangan sebelum pembelian.",
      localContext:
        "Kembaran adalah ring hunian di timur Purwokerto, dekat sisi kampus UNSOED Karangwangkal, dengan banyak kos kecil, rumah sewa, dan kontrakan. Permintaan AC umumnya berupa kamar-kamar kecil di kos dan kontrakan serta rumah tinggal warga, dengan daya listrik yang terbatas. Pemilik kos sering memasang AC per kamar secara bertahap, sehingga efisiensi daya dan tipe unit seragam jadi pertimbangan utama.",
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
        ["Pengiriman & Pemasangan", routes.pengirimanPemasangan],
        ["AC Low Watt", routes.katalogAcLowWatt],
        ["Pengadaan AC Kost & Apartemen", routes.pengadaanKostApartemen],
        ["AC Gree", routes.brandGree],
        ["Bukti Pengiriman & Proyek", routes.buktiPengirimanProyek],
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
    },
    {
      slug: "jual-ac-patikraja",
      path: routes.jualAcPatikraja,
      areaName: "Patikraja",
      localLandmarks: [
        "Jalur Purwokerto–Patikraja–Banyumas",
        "Kawasan dekat aliran Sungai Serayu",
        "Permukiman dan area persawahan Patikraja",
        "Ruko serta usaha lokal di sepanjang jalan utama",
      ],
      localBenefits: [
        "Relevan untuk rumah yang terasa panas pada siang hari dan butuh pendinginan kamar",
        "Pilihan low watt membantu rumah dengan daya listrik terbatas",
        "Dekat jalur Banyumas sehingga pengiriman unit mudah dijadwalkan",
      ],
      localCases: [
        ["Rumah tinggal", "AC kamar tidur agar tetap nyaman saat siang yang panas."],
        ["Kost & rumah sewa", "Pemilihan unit hemat daya untuk beberapa kamar sekaligus."],
        ["Toko & kantor kecil", "AC ruang pelanggan dan ruang kerja dengan kapasitas sesuai luas ruangan."],
      ],
      label: "Jual AC Patikraja",
      title: "Jual AC Patikraja untuk Rumah, Toko & Usaha — RADJA AC",
      description:
        "Butuh AC untuk rumah, toko, kantor, ruko, atau usaha di Patikraja? RADJA AC cek kebutuhan PK, stok, pengiriman unit, dan opsi pemasangan via WhatsApp.",
      h1: "Jual AC Patikraja untuk Rumah, Toko & Usaha",
      eyebrow: "Area Selatan Purwokerto",
      intro:
        "Butuh AC di Patikraja untuk rumah, toko, kantor, ruko, atau usaha? Tim RADJA AC cek ukuran ruangan, daya listrik, pilihan brand, stok unit, pengiriman, dan opsi pemasangan sebelum pembelian.",
      localContext:
        "Patikraja ada di jalur selatan Purwokerto menuju Banyumas, dilewati Sungai Serayu—daerah rumah tinggal, UMKM, toko, dan pertanian yang terasa panas saat siang. Pembeli AC umumnya rumah dan UMKM atau toko di sepanjang jalan utama, dengan daya listrik rumahan. Untuk jual AC Patikraja, unit dikirim ke alamat lalu dipasang, dengan pembayaran DP, COD, atau transfer setelah stok dipastikan.",
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
          "AC rumah atau UMKM di Patikraja, hemat listrik?",
          "Rumah dan usaha rumahan dengan daya terbatas banyak pakai low watt agar listrik tidak turun. Sebutkan daya dan ukuran ruangan untuk cek unit dan stok.",
        ],
        [
          "Bisa kirim dan pasang AC ke alamat di jalur Patikraja?",
          "Bisa. Unit dikirim ke alamat di jalur selatan Patikraja lalu pemasangan dijadwalkan; sebutkan alamat dan jumlah unit untuk perkiraan.",
        ],
        [
          "AC untuk toko atau UMKM di Patikraja, pilih apa?",
          "Ruang usaha yang dipakai harian sebaiknya kapasitasnya sesuai luas, bukan yang termurah, supaya awet. Sebutkan ukuran ruang dan jam pakai.",
        ],
      ],
    },
    {
      slug: "jual-ac-rawalo",
      path: routes.jualAcRawalo,
      areaName: "Rawalo",
      localLandmarks: [
        "Jalur Purwokerto–Rawalo–Buntu",
        "Kawasan Jembatan Serayu Rawalo",
        "Area pertigaan dan usaha tepi jalan utama",
        "Permukiman serta persawahan Rawalo",
      ],
      localBenefits: [
        "Cocok untuk toko dan warung di tepi jalur yang ingin ruang lebih nyaman bagi pelanggan",
        "Pilihan low watt sesuai untuk rumah dengan daya listrik standar",
        "Posisi di jalur utama memudahkan penjadwalan pengiriman unit",
      ],
      localCases: [
        ["Toko & warung tepi jalan", "AC ruang pelanggan agar betah meski lalu lintas padat dan udara panas."],
        ["Rumah tinggal", "Pendinginan kamar dengan unit yang hemat daya."],
        ["Kantor kecil & usaha", "Pemilihan kapasitas AC sesuai luas ruang kerja."],
      ],
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
          "AC untuk toko atau warung di pertigaan Rawalo, kuat dipakai seharian?",
          "Usaha tepi jalur yang ramai dan pintunya sering kebuka butuh kapasitas sesuai luas. Sebutkan ukuran ruang dan jam buka untuk cek unit dan stok.",
        ],
        [
          "Bisa kirim dan pasang AC ke alamat di jalur Rawalo?",
          "Bisa. Posisi Rawalo di pertigaan jalur utama memudahkan penjadwalan pengiriman unit lalu pemasangan. Sebutkan alamat dan jumlah unit.",
        ],
        [
          "AC rumah di Rawalo, hemat listrik?",
          "Rumah dengan daya standar banyak pakai low watt agar listrik tidak turun. Sebutkan daya dan ukuran kamar untuk cek pilihan unit.",
        ],
      ],
    },

    {
      slug: "jual-ac-baturraden",
      path: routes.jualAcBaturraden,
      areaName: "Baturraden",
      localLandmarks: [
        "Kawasan Lokawisata Baturraden",
        "Area villa, homestay, dan guest house",
        "Kafe dan resto di jalur wisata Purwokerto–Baturraden",
        "Permukiman di kaki Gunung Slamet",
      ],
      localBenefits: [
        "Cocok untuk kamar penginapan dan villa yang perlu suhu stabil saat okupansi tinggi",
        "Pilihan low watt membantu penginapan kecil menjaga daya listrik",
        "Unit hemat energi relevan untuk kafe dan ruang usaha dengan jam buka panjang",
      ],
      localCases: [
        ["Homestay & villa wisata", "Pemilihan AC kamar dan ruang bersama untuk penginapan yang ramai saat akhir pekan."],
        ["Kafe & resto jalur wisata", "AC ruang pelanggan agar tetap nyaman walau pengunjung padat."],
        ["Rumah kawasan sejuk", "Sebagian rumah hanya butuh AC di kamar tertentu, bukan seluruh ruangan."],
      ],
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
        ["Pengiriman & Pemasangan", routes.pengirimanPemasangan],
        ["AC Inverter", routes.katalogAcInverter],
        ["Pengadaan AC Hotel & Guest House", routes.pengadaanHotelGuestHouse],
        ["AC Daikin", routes.brandDaikin],
        ["Bukti Pengiriman & Proyek", routes.buktiPengirimanProyek],
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
          "AC untuk kamar penginapan atau villa wisata di Baturraden, pilih apa?",
          "Kamar tamu yang dipakai saat okupansi naik sebaiknya unit seragam yang mudah dirawat; inverter membantu kalau AC menyala lama. Kirim jumlah kamar dan ukurannya.",
        ],
        [
          "Baturraden sejuk, semua ruangan perlu AC?",
          "Tidak selalu. Banyak penginapan dan rumah hanya pasang AC di kamar tertentu atau ruang ramai pengunjung, bukan seluruh bangunan. Sebutkan ruangannya untuk masukan.",
        ],
        [
          "Bisa kirim dan pasang AC ke villa atau kafe di jalur wisata Baturraden?",
          "Bisa. Unit dikirim ke alamat di jalur Baturraden lalu pemasangan dijadwalkan sesuai akses lokasi; sebutkan alamat dan jumlah unit. Pembayaran bisa DP atau transfer.",
        ],
      ],
    },

  {
    slug: "jual-ac-yogyakarta",
    path: routes.jualAcYogyakarta,
    areaName: "Yogyakarta",
    localLandmarks: [
      "Kampus UGM, UNY, dan kampus lainnya",
      "Malioboro dan kawasan wisata Keraton",
      "Kawasan kos mahasiswa padat",
      "Guest house, homestay, dan hotel wisata",
      "Sentra kafe, kuliner, dan retail",
    ],
    localBenefits: [
      "Pemilik kos mahasiswa cari AC kos hemat daya supaya kamar cepat terisi dan bisa menaikkan harga sewa",
      "Guest house dan homestay wisata butuh AC hotel kamar yang seragam dan nyaman dipakai semalaman",
      "Kafe dan retail di kawasan wisata perlu ruang adem untuk pengunjung yang ramai",
    ],
    localCases: [
      ["Kos mahasiswa banyak kamar", "AC kos hemat daya dengan tipe seragam; pengelola pasang bertahap mengikuti hunian."],
      ["Guest house & homestay wisata", "Pengadaan unit kamar seragam dengan pemakaian malam panjang."],
      ["Kafe & retail wisata", "AC ruang pelanggan supaya pengunjung betah saat ramai."],
    ],
    label: "Jual AC Yogyakarta",
    title: "Jual AC Yogyakarta untuk Kost, Guest House & Usaha — RADJA AC",
    description:
      "Butuh AC untuk rumah, kost, hotel, kantor, atau proyek di Yogyakarta? RADJA AC cek stok, kebutuhan PK, pengiriman unit, dan opsi pemasangan via WhatsApp.",
    h1: "Jual AC Yogyakarta untuk Kost, Guest House & Usaha",
    eyebrow: "Layanan AC Area DIY",
    intro:
      "Butuh AC di Yogyakarta untuk rumah, kost, guest house, hotel, kantor, atau usaha? Tim RADJA AC cek PK, daya listrik, stok, pengiriman, dan pemasangan sebelum unit dipilih.",
    localContext:
      "Yogyakarta adalah kota pelajar dan wisata sekaligus: ada banyak kampus (UGM, UNY, dan lainnya) dengan ribuan kos mahasiswa, plus kawasan wisata seperti Malioboro dan Keraton yang penuh guest house, homestay, dan kafe. Pembeli AC di sini paling banyak pemilik kos yang ingin kamarnya cepat terisi, pengelola guest house dan homestay wisata, serta toko dan kafe. Untuk jual AC Yogyakarta, pengelola banyak kamar biasanya menanyakan stok, jadwal pengiriman, dan tahapan pembayaran (DP lalu transfer) sebelum unit dikirim dan dipasang bertahap.",
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
        "AC kos mahasiswa di Yogyakarta supaya kamar cepat terisi, pilih apa?",
        "Kamar ber-AC memang lebih cepat laku. Untuk banyak kamar, AC kos low watt tipe seragam menjaga daya dan memudahkan perawatan. Sebutkan jumlah kamar dan daya listrik total untuk cek unit dan stok.",
      ],
      [
        "Untuk guest house atau homestay wisata di Yogyakarta, AC-nya bagaimana?",
        "Kamar tamu yang dipakai semalaman lebih efisien dengan inverter, dan unit seragam memudahkan perawatan. Kirim jumlah kamar dan ukurannya untuk arahan.",
      ],
      [
        "Pengadaan AC banyak kamar di Yogyakarta, pengiriman dan pembayarannya?",
        "Untuk banyak unit, pengelola biasanya menanyakan stok, jadwal pengiriman, dan tahapan pembayaran lebih dulu—umumnya DP lalu transfer—sebelum unit dikirim dan dipasang bertahap.",
      ],
      [
        "AC untuk kafe atau toko di kawasan wisata Yogyakarta?",
        "Ruang pelanggan yang ramai dan pintunya sering kebuka butuh kapasitas sesuai luas dan jumlah pengunjung. Sebutkan ukuran ruang dan jam ramai untuk cek unit.",
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
    localLandmarks: [
      "Kawasan kota bawah Semarang yang panas dan lembap",
      "Area perumahan, apartemen, dan ruko komersial",
      "Perkantoran dan pusat usaha kota",
      "Kawasan pergudangan serta industri ringan",
    ],
    localBenefits: [
      "Pengadaan banyak unit untuk kantor dan proyek lebih rapi dengan spesifikasi seragam",
      "Kawasan industri dan perkantoran butuh kapasitas konsisten untuk pemakaian seharian",
      "Dokumentasi kebutuhan dan estimasi memudahkan pengajuan internal perusahaan",
    ],
    localCases: [
      ["Kantor & kawasan industri", "AC ruang kerja dan kantor pabrik dengan kapasitas dihitung dari luas dan jumlah staf."],
      ["Pengadaan proyek banyak titik", "Penyediaan unit spesifikasi seragam dengan stok dan jadwal pemasangan bertahap."],
      ["Gudang & mess pekerja", "AC ruang penunjang dan mess sesuai jumlah penghuni dan beban ruang."],
    ],
    label: "Jual AC Semarang",
    title: "Jual AC Semarang untuk Ruko, Kantor, Hotel & Proyek — RADJA AC",
    description:
      "Butuh AC untuk rumah, ruko, kantor, hotel, usaha, atau proyek di Semarang? RADJA AC cek stok, kebutuhan PK, pengiriman unit, dan opsi pemasangan via WhatsApp.",
    h1: "Jual AC Semarang untuk Ruko, Kantor, Hotel & Proyek",
    eyebrow: "Layanan AC Area Jawa Tengah",
    intro:
      "Butuh AC untuk rumah, kantor, ruko, toko, hotel, developer, atau proyek di Semarang? RADJA AC cek kebutuhan PK, stok unit, pilihan brand, pengiriman, dan opsi pemasangan dari brief yang dikirim.",
    localContext:
      "Semarang sebagai ibukota provinsi adalah pusat perkantoran, kawasan industri, dan pergudangan, dengan kebutuhan AC berskala kantor, ruang kerja, mess pekerja, dan pengadaan proyek banyak unit. Banyak permintaan datang dari perusahaan dan kontraktor yang butuh spesifikasi seragam, dokumentasi kebutuhan, dan jadwal pemasangan bertahap, sehingga tim RADJA AC mulai dari rekap jumlah ruang, kapasitas per ruang, daya listrik, dan timeline pekerjaan.",
    coverageNote:
      "Showroom dan gudang RADJA AC berada di Banyumas. Kebutuhan AC area Semarang dilayani dengan konsultasi PK, cek stok unit, pengiriman, serta opsi pemasangan sesuai alamat, jumlah unit, dan jadwal pekerjaan.",
    keywordVariants: [
      "AC kantor dan ruang kerja Semarang",
      "AC kawasan industri Semarang",
      "pengadaan AC proyek Semarang",
      "AC banyak unit spesifikasi seragam",
      "AC gudang dan mess pekerja",
      "kontraktor dan developer AC Semarang",
    ],
    nearbyAreaLinks: [
      ["Jual AC Yogyakarta", routes.jualAcYogyakarta],
      ["Jual AC Solo", routes.jualAcSolo],
      ["Jual AC Tegal", routes.jualAcTegal],
      ["Jual AC Kebumen", routes.jualAcKebumen],
      ["Jual AC Banjarnegara", routes.jualAcBanjarnegara],
    ],
    trustBullets: [
      "Mulai dari rekap jumlah ruang, kapasitas per ruang, daya listrik, dan timeline proyek",
      "Spesifikasi unit seragam untuk memudahkan perawatan, sparepart, dan administrasi",
      "Pengiriman dan pemasangan bertahap dikonfirmasi sesuai kesiapan lokasi proyek",
      "Cocok untuk kantor, kawasan industri, gudang, mess, dan pengadaan banyak titik",
    ],
    localFaq: [
      [
        "Bisa pengadaan AC banyak unit untuk kantor atau proyek di Semarang?",
        "Bisa. Kirim rekap jumlah ruang, luas, daya listrik, dan timeline agar tim menyusun unit spesifikasi seragam, stok, pengiriman, dan jadwal pemasangan bertahap.",
      ],
      [
        "Apakah bisa minta spesifikasi unit seragam untuk proyek di Semarang?",
        "Bisa, dan justru disarankan untuk proyek agar perawatan serta sparepart lebih mudah. Tim cek ketersediaan stok sesuai kebutuhan.",
      ],
      [
        "Bagaimana jadwal pemasangan banyak titik di kawasan industri Semarang?",
        "Disusun bertahap mengikuti kesiapan lokasi dan stok. Kirim target waktu agar tim menyiapkan urutan pengiriman dan pemasangan.",
      ],
      [
        "Apakah RADJA AC melayani pengiriman ke Semarang dari Banyumas?",
        "Ya. Showroom dan gudang berada di Banyumas; untuk Semarang tim mengatur pengiriman unit dan opsi pemasangan sesuai alamat dan jumlah unit.",
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
    localLandmarks: [
      "Kawasan kota Solo (Surakarta) yang panas",
      "Sentra kuliner dan area usaha",
      "Hotel, guest house, dan penginapan",
      "Perkantoran serta area kost mahasiswa",
    ],
    localBenefits: [
      "Hotel, guest house, dan penginapan wisata butuh unit kamar seragam dengan pemakaian malam panjang",
      "Toko batik, retail, dan resto memerlukan kapasitas untuk ruang pelanggan yang ramai di kota panas",
      "Kost di sekitar kampus cocok memakai unit hemat daya dengan banyak kamar",
    ],
    localCases: [
      ["Hotel & penginapan wisata", "Unit kamar dengan kapasitas seragam untuk okupansi wisata budaya."],
      ["Toko batik, retail & resto", "AC ruang pelanggan agar nyaman di pusat dagang dan kuliner yang panas."],
      ["Kost & rumah kota", "AC hunian dan kost dengan pilihan efisien sesuai daya dan pemakaian."],
    ],
    label: "Jual AC Solo",
    title: "Jual AC Solo untuk Rumah, Kost, Hotel & Usaha — RADJA AC",
    description:
      "Butuh AC untuk rumah, kost, toko, kantor, hotel, atau usaha di Solo? RADJA AC cek stok, kebutuhan PK, pengiriman unit, dan opsi pemasangan via WhatsApp.",
    h1: "Jual AC Solo untuk Rumah, Kost, Hotel & Usaha",
    eyebrow: "Layanan AC Area Jawa Tengah",
    intro:
      "Butuh AC di Solo untuk rumah, kost, hotel, toko, kantor, atau usaha? Tim RADJA AC cek PK, daya listrik, brand, stok, pengiriman, dan pemasangan sebelum unit dipilih.",
    localContext:
      "Solo (Surakarta) adalah kota budaya dan dagang yang panas, dengan denyut dari hotel dan penginapan wisata, retail, toko batik, kuliner, kost, dan kampus. Permintaan AC banyak datang dari kamar hotel dan guest house, ruang pelanggan toko batik dan retail, resto, serta kost di sekitar kampus. Karena ruang publik dan kamar tamu dipakai lama, tim RADJA AC mengecek luas ruangan, jam pemakaian, jumlah kamar, dan efisiensi sebelum memilih unit.",
    coverageNote:
      "Showroom dan gudang RADJA AC berada di Banyumas. Kebutuhan AC area Solo dilayani dengan konsultasi PK, cek stok unit, pengiriman, dan opsi pemasangan sesuai lokasi, jumlah unit, serta jadwal.",
    keywordVariants: [
      "AC hotel dan guest house Solo",
      "AC toko batik dan retail Solo",
      "AC resto dan kuliner Solo",
      "AC kost dekat kampus Solo",
      "AC hunian kota Solo",
      "cek PK untuk ruang pelanggan",
    ],
    nearbyAreaLinks: [
      ["Jual AC Semarang", routes.jualAcSemarang],
      ["Jual AC Yogyakarta", routes.jualAcYogyakarta],
      ["Jual AC Kebumen", routes.jualAcKebumen],
      ["Jual AC Banjarnegara", routes.jualAcBanjarnegara],
      ["Jual AC Tegal", routes.jualAcTegal],
    ],
    trustBullets: [
      "Cek kebutuhan PK untuk kamar hotel, ruang pelanggan retail, resto, dan kost",
      "Unit kamar seragam memudahkan perawatan untuk hotel dan penginapan wisata",
      "Opsi pengiriman dan pemasangan dikonfirmasi sesuai alamat, jumlah kamar, dan jadwal",
      "Cocok untuk hospitality, retail, toko batik, kuliner, dan hunian kota",
    ],
    localFaq: [
      [
        "AC untuk kamar hotel atau guest house wisata di Solo, pilih apa?",
        "Untuk kamar yang dipakai malam panjang, inverter umumnya lebih efisien dan unit seragam memudahkan perawatan. Kirim jumlah kamar dan ukuran untuk arahan.",
      ],
      [
        "AC untuk toko batik, retail, atau resto di Solo?",
        "Ditentukan dari luas ruang pelanggan, jumlah pengunjung, dan pintu yang sering terbuka. Kirim ukuran ruang usaha untuk perkiraan PK.",
      ],
      [
        "AC untuk kost dekat kampus di Solo, hemat daya?",
        "Untuk banyak kamar, unit hemat daya dengan tipe seragam biasanya cocok, dicek dari daya listrik total. Kirim jumlah kamar dan daya untuk arahan.",
      ],
      [
        "Apakah RADJA AC melayani pengiriman ke Solo dari Banyumas?",
        "Ya. Showroom dan gudang berada di Banyumas; untuk Solo tim mengatur pengiriman unit dan opsi pemasangan sesuai alamat dan jumlah unit.",
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
    localLandmarks: [
      "Kawasan industri rambut palsu, bulu mata, dan knalpot",
      "Owabong dan wisata keluarga",
      "Alun-alun Purbalingga",
      "Bandara Jenderal Besar Soedirman (Wirasaba)",
      "Sentra kos pekerja di sekitar pabrik",
    ],
    localBenefits: [
      "Kantor pabrik dan ruang kerja perlu AC kantor yang konsisten supaya karyawan tidak gerah dan tetap produktif",
      "Kos pekerja pabrik dengan banyak kamar cari unit low watt yang hemat dan tipe seragam agar mudah dirawat",
      "Pengadaan AC banyak unit untuk perusahaan butuh stok yang cukup, spesifikasi seragam, dan faktur",
    ],
    localCases: [
      ["Kantor & pabrik", "Pengadaan AC ruang kerja dengan jumlah unit banyak, spesifikasi seragam, dan jadwal pemasangan bertahap."],
      ["Kos pekerja", "AC kos banyak kamar dengan pilihan low watt; pemilik sering memasang bertahap mengikuti hunian."],
      ["Rumah & toko", "AC rumah dan toko dengan pengiriman unit ke alamat lalu pemasangan."],
    ],
    localFaq: [
      [
        "Bisa pengadaan AC banyak unit untuk pabrik atau kantor di Purbalingga?",
        "Bisa. Sebutkan jumlah ruang, ukuran, dan target waktu; untuk pengadaan AC perusahaan unit disiapkan dengan spesifikasi seragam, stok dicek, dan bisa dilengkapi faktur. Pemasangan dijadwalkan bertahap.",
      ],
      [
        "AC kos pekerja banyak kamar di Purbalingga, hemat listrik?",
        "Untuk banyak kamar, low watt dengan tipe seragam memudahkan perawatan dan menjaga daya. Sebutkan jumlah kamar dan daya listrik total untuk cek pilihan unit dan stok.",
      ],
      [
        "AC kantor supaya karyawan tidak gerah, ukurannya bagaimana?",
        "Kapasitas AC kantor dihitung dari luas, jumlah staf, dan perangkat yang panas. Sebutkan ukuran ruang kerja untuk perkiraan PK.",
      ],
      [
        "Pembayaran dan pengiriman AC ke Purbalingga bagaimana?",
        "Unit dikirim ke alamat lalu pemasangan dijadwalkan; pembayaran bisa DP, transfer, atau COD. Untuk pengadaan perusahaan, skema pembayaran dan faktur dibahas di awal.",
      ],
    ],
    label: "Jual AC Purbalingga",
    title: "Jual AC Purbalingga untuk Rumah, Kost, Toko & Kantor — RADJA AC",
    description:
      "Butuh AC untuk rumah, kost, toko, kantor, atau usaha di Purbalingga? RADJA AC cek stok, kebutuhan PK, pengiriman unit, dan opsi pemasangan via WhatsApp.",
    h1: "Jual AC Purbalingga untuk Rumah, Kost, Toko & Kantor",
    eyebrow: "Area Regional Dekat Banyumas",
    intro:
      "Butuh AC di Purbalingga untuk rumah, kamar, kost, toko, kantor, atau usaha? Tim RADJA AC cek PK, daya listrik, brand, stok, pengiriman, dan pemasangan sebelum unit dipilih.",
    localContext:
      "Purbalingga dikenal dengan pabrik-pabriknya—terutama industri rambut palsu, bulu mata, dan knalpot—plus wisata keluarga seperti Owabong, sehingga banyak permintaan AC datang dari kantor pabrik, kos pekerja, toko, dan rumah. Perusahaan biasanya butuh pengadaan AC banyak unit dengan spesifikasi seragam dan faktur, sementara pemilik kos pekerja mencari unit hemat untuk banyak kamar. Untuk jual AC Purbalingga, pembeli rumahan umumnya minta pengiriman lalu pemasangan, dengan pembayaran DP atau transfer setelah stok dipastikan.",
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
    localLandmarks: [
      "Kilang minyak Pertamina Cilacap",
      "Pelabuhan Tanjung Intan",
      "Kawasan industri dan pergudangan",
      "Pantai Teluk Penyu dan Benteng Pendem",
      "Permukiman pesisir yang panas dan lembap",
    ],
    localBenefits: [
      "Kantor perusahaan dan proyek industri sering butuh pengadaan AC banyak unit dengan spesifikasi seragam, faktur, dan jadwal pemasangan",
      "Udara pesisir yang asin dan lembap mempercepat karat pada unit outdoor, jadi pemilihan unit dan penempatannya diperhatikan",
      "Rumah, ruko, dan kantor di Cilacap cari unit yang cepat dingin di cuaca panas pesisir",
    ],
    localCases: [
      ["Kantor perusahaan & proyek industri", "Pengadaan AC banyak unit untuk kantor dan proyek dengan faktur serta jadwal pemasangan bertahap."],
      ["Ruko & toko pesisir", "AC ruang usaha yang cepat dingin; penempatan outdoor diperhatikan karena udara asin."],
      ["Rumah tinggal", "Pengiriman unit per kecamatan lalu pemasangan, dengan pilihan unit untuk cuaca lembap."],
    ],
    label: "Jual AC Cilacap",
    title: "Jual AC Cilacap | Cek Stok, PK & Pemasangan — RADJA AC",
    description:
      "Butuh AC untuk rumah, toko, kantor, proyek, atau banyak unit di Cilacap? RADJA AC bantu cek PK, stok, pengiriman, opsi pemasangan, dan pembayaran fleksibel.",
    h1: "Jual AC Cilacap untuk rumah, toko, kantor, usaha, dan banyak unit",
    eyebrow: "Layanan AC Area Cilacap",
    intro:
      "Butuh AC di Cilacap untuk rumah, toko, kantor, usaha, proyek, pengadaan, atau banyak unit? Tim RADJA AC membantu cek kebutuhan PK, daya listrik, pilihan brand, stok unit, pengiriman, dan opsi pemasangan berdasarkan kecamatan serta kebutuhan unit.",
    localContext:
      "Cilacap adalah kota industri dan pelabuhan—ada kilang Pertamina, pabrik semen, PLTU, dan Pelabuhan Tanjung Intan—dengan udara pesisir yang panas dan lembap. Karena itu permintaan terbesar datang dari kantor perusahaan, vendor dan kontraktor proyek, ruko, dan rumah; banyak yang butuh pengadaan AC banyak unit dengan faktur dan jadwal. Udara pesisir yang asin juga membuat unit outdoor lebih cepat berkarat, sehingga pemilihan dan penempatan unit jadi pertimbangan. Untuk jual AC Cilacap, pengiriman dan pemasangan dikonfirmasi per kecamatan, dengan pembayaran DP, transfer, atau termin untuk proyek.",
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
        "Bisa pengadaan AC banyak unit untuk kantor atau proyek di Cilacap?",
        "Bisa. Sebutkan jumlah ruang atau titik, ukuran, dan target waktu; untuk pengadaan AC proyek unit disiapkan dengan spesifikasi seragam, faktur, dan jadwal pemasangan bertahap. Pembayaran bisa termin atau transfer.",
      ],
      [
        "Karena dekat laut, unit outdoor cepat karat — ada saran untuk Cilacap?",
        "Udara pesisir yang asin memang mempercepat korosi, jadi penempatan outdoor yang terlindung dan perawatan rutin membantu memperpanjang umur unit. Sebutkan lokasi pemasangan untuk masukan.",
      ],
      [
        "Melayani pengiriman AC ke kecamatan mana saja di Cilacap?",
        "Pengiriman dikonfirmasi per kecamatan—misalnya Cilacap kota, Kroya, Majenang, Sidareja—lalu pemasangan dijadwalkan sesuai akses lokasi. Sebutkan kecamatan dan jumlah unit untuk perkiraan.",
      ],
      [
        "AC rumah atau ruko di Cilacap supaya cepat dingin di cuaca panas pesisir?",
        "Kapasitas dihitung dari luas, paparan panas, dan jumlah orang agar dingin merata. Sebutkan ukuran ruangan dan daya listrik untuk cek unit dan stok.",
      ],
    ],
  },
  {
    slug: "jual-ac-kroya",
    path: routes.jualAcKroya,
    areaName: "Kroya",
    localLandmarks: [
      "Stasiun Kroya (simpul kereta jalur selatan)",
      "Pasar Kroya",
      "Ruko dan pertokoan sekitar stasiun",
      "Jalur Buntu–Kroya–Cilacap",
      "Permukiman dan persawahan sekitar",
    ],
    localBenefits: [
      "Toko dan ruko di sekitar Pasar dan Stasiun Kroya yang ramai cepat gerah, jadi butuh AC yang cepat dingin",
      "AC rumah dan AC kos banyak pilih low watt menyesuaikan daya listrik rumahan",
      "Posisi simpul transit memudahkan penjadwalan pengiriman unit",
    ],
    localCases: [
      ["Toko & ruko sekitar stasiun/pasar", "AC ruang jualan yang ramai agar pembeli betah."],
      ["Rumah & kos", "Pemasangan AC kamar dengan pilihan low watt sesuai daya."],
      ["Kantor kecil & usaha", "Pemilihan unit ruang kerja dengan pengiriman ke alamat Kroya."],
    ],
    label: "Jual AC Kroya",
    title: "Jual AC Kroya untuk Rumah, Toko & Usaha — RADJA AC",
    description:
      "Butuh AC untuk rumah, toko, ruko, kantor, atau banyak unit di Kroya? RADJA AC bantu cek PK, stok, pengiriman, opsi pemasangan, dan pembayaran fleksibel.",
    h1: "Jual AC Kroya untuk Rumah, Toko & Usaha",
    eyebrow: "Area Cilacap",
    intro:
      "Butuh AC di Kroya untuk rumah, toko, ruko, kantor, usaha, atau banyak unit? Tim RADJA AC cek kebutuhan PK, daya listrik, stok brand, pengiriman, dan opsi pemasangan dari data awal yang dikirim.",
    localContext:
      "Kroya adalah kota dengan Stasiun Kroya—simpul kereta penting di jalur selatan—jadi denyutnya transit dan dagang. Pembeli AC banyak dari toko dan ruko di sekitar pasar dan stasiun, rumah warga, serta kos. Toko yang ramai di dekat stasiun dan pasar cepat gerah saat siang. Untuk jual AC Kroya, unit dikirim ke alamat lalu dipasang, dengan pembayaran DP, COD, atau transfer setelah stok dipastikan.",
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
        "AC untuk toko ramai di sekitar Pasar/Stasiun Kroya, pilih apa?",
        "Ruang yang ramai dan pintunya sering kebuka butuh kapasitas sesuai luas dan jumlah pengunjung. Sebutkan ukuran toko dan jam ramai untuk cek unit dan stok.",
      ],
      [
        "AC rumah atau AC kos di Kroya, hemat listrik?",
        "Rumah dan kos dengan daya 900–1300 watt banyak pakai low watt agar listrik tidak turun. Sebutkan daya dan ukuran kamar untuk cek pilihan unit.",
      ],
      [
        "Bisa kirim dan pasang AC ke alamat di Kroya?",
        "Bisa. Unit dikirim ke alamat lalu pemasangan dijadwalkan; posisi Kroya sebagai simpul transit memudahkan penjadwalan. Sebutkan alamat dan jumlah unit.",
      ],
      [
        "Pembayaran AC di Kroya bisa DP atau transfer?",
        "Bisa. Banyak pembeli ambil DP dulu lalu pelunasan transfer atau COD saat unit datang dan stok dipastikan.",
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
    localLandmarks: [
      "Pasar Majenang",
      "Deretan ruko dan pertokoan pusat kota",
      "Jalur Majenang menuju Bandung/Banjar",
      "Kawasan dagang Cilacap barat",
      "Terminal dan area transit Majenang",
    ],
    localBenefits: [
      "Ruko dan toko dagang di pusat Majenang yang ramai butuh AC yang cepat dingin untuk pembeli",
      "AC rumah banyak pilih low watt atau inverter sesuai daya dan lama pemakaian",
      "Pengiriman ke Cilacap barat dijadwalkan tersendiri karena jaraknya",
    ],
    localCases: [
      ["Ruko & toko dagang", "AC ruang jualan di pusat dagang Majenang agar pembeli betah."],
      ["Rumah tinggal", "Pemasangan AC kamar dengan pilihan sesuai daya rumah."],
      ["Kantor & usaha", "Pemilihan unit ruang kerja, dengan pengiriman dijadwalkan ke Cilacap barat."],
    ],
    label: "Jual AC Majenang",
    title: "Jual AC Majenang untuk Rumah, Toko & Banyak Unit — RADJA AC",
    description:
      "Butuh AC untuk rumah, toko, kantor, usaha, atau banyak unit di Majenang? RADJA AC bantu cek PK, stok, pengiriman, opsi pemasangan, dan pembayaran fleksibel.",
    h1: "Jual AC Majenang untuk Rumah, Toko & Banyak Unit",
    eyebrow: "Area Cilacap Barat",
    intro:
      "Butuh AC di Majenang untuk rumah, toko, kantor, usaha, atau kebutuhan beberapa unit? Tim RADJA AC cek kapasitas PK, daya listrik, stok brand, pengiriman, dan opsi pemasangan dari data awal.",
    localContext:
      "Majenang adalah kota dagang teramai di Cilacap bagian barat, di jalur menuju Bandung, dengan Pasar Majenang dan deretan ruko sebagai pusat ekonominya. Pembeli AC banyak dari pemilik ruko dan toko, rumah, serta kantor. Karena jauh dari kota Cilacap, pengiriman ke Majenang dijadwalkan tersendiri. Untuk jual AC Majenang, unit dikirim ke alamat lalu dipasang, dengan pembayaran DP, transfer, atau COD setelah stok dipastikan.",
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
        "AC untuk ruko atau toko dagang di pusat Majenang?",
        "Ruang jualan ramai yang pintunya sering kebuka butuh kapasitas sesuai luas. Sebutkan ukuran ruko dan jam buka untuk cek unit dan stok.",
      ],
      [
        "Majenang jauh dari kota Cilacap, pengirimannya bagaimana?",
        "Pengiriman ke Cilacap barat seperti Majenang dijadwalkan tersendiri sesuai alamat dan jumlah unit. Sebutkan alamat detail untuk perkiraan pengiriman dan pemasangan.",
      ],
      [
        "AC rumah di Majenang, pilih low watt atau inverter?",
        "Tergantung daya listrik dan lama pemakaian: low watt untuk daya terbatas, inverter untuk pemakaian lama. Sebutkan daya dan ukuran ruangan.",
      ],
      [
        "Pembayaran AC di Majenang bisa DP atau transfer?",
        "Bisa. Banyak pembeli ambil DP dulu lalu pelunasan transfer atau COD saat unit datang dan stok dipastikan.",
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
    localLandmarks: [
      "Stasiun Sidareja",
      "Pasar Sidareja",
      "Ruko dan pertokoan pusat kecamatan",
      "Kawasan pertanian dan rawa Sidareja",
      "Jalur Sidareja menuju Majenang/Cilacap",
    ],
    localBenefits: [
      "Ruko dan toko di pusat Sidareja yang ramai butuh AC yang cepat dingin untuk pembeli",
      "AC rumah banyak pilih low watt menyesuaikan daya listrik rumahan",
      "Pengiriman ke Cilacap barat dijadwalkan tersendiri sesuai alamat",
    ],
    localCases: [
      ["Ruko & toko pusat kecamatan", "AC ruang jualan agar pembeli betah di pusat dagang Sidareja."],
      ["Rumah tinggal", "Pemasangan AC kamar dengan pilihan low watt sesuai daya."],
      ["Kantor & usaha", "Pemilihan unit ruang kerja dengan pengiriman ke alamat Sidareja."],
    ],
    label: "Jual AC Sidareja",
    title: "Jual AC Sidareja untuk Rumah, Ruko & Usaha — RADJA AC",
    description:
      "Butuh AC untuk rumah, ruko, toko, kantor, atau banyak unit di Sidareja? RADJA AC bantu cek PK, stok, pengiriman, opsi pemasangan, dan pembayaran fleksibel.",
    h1: "Jual AC Sidareja untuk Rumah, Ruko & Usaha",
    eyebrow: "Area Cilacap Barat",
    intro:
      "Butuh AC di Sidareja untuk rumah, ruko, toko, kantor, usaha, atau kebutuhan beberapa unit? Tim RADJA AC cek kebutuhan PK, daya listrik, stok brand, pengiriman, dan opsi pemasangan dari data awal.",
    localContext:
      "Sidareja adalah kota kecamatan dagang di Cilacap bagian barat, punya Stasiun Sidareja dan pasar yang jadi pusat kegiatan, dikelilingi area pertanian dan rawa. Pembeli AC umumnya pemilik ruko dan toko, rumah, serta kantor di sepanjang jalur. Karena jauh dari kota Cilacap, pengiriman dijadwalkan tersendiri. Untuk jual AC Sidareja, unit dikirim ke alamat lalu dipasang, dengan pembayaran DP, COD, atau transfer setelah stok dipastikan.",
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
        "AC untuk ruko atau toko di pusat Sidareja?",
        "Ruang jualan ramai yang pintunya sering kebuka butuh kapasitas sesuai luas. Sebutkan ukuran ruko dan jam buka untuk cek unit dan stok.",
      ],
      [
        "Sidareja jauh dari kota Cilacap, pengirimannya bagaimana?",
        "Pengiriman ke Cilacap barat seperti Sidareja dijadwalkan tersendiri sesuai alamat dan jumlah unit. Sebutkan alamat detail untuk perkiraan pengiriman dan pemasangan.",
      ],
      [
        "AC rumah di Sidareja, hemat listrik?",
        "Rumah dengan daya 900–1300 watt banyak pakai low watt agar listrik tidak turun. Sebutkan daya dan ukuran kamar untuk cek unit.",
      ],
      [
        "Pembayaran AC di Sidareja bisa DP atau transfer?",
        "Bisa. Banyak pembeli ambil DP dulu lalu pelunasan transfer atau COD saat unit datang dan stok dipastikan.",
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
    localLandmarks: [
      "Pondok Pesantren Al-Ihya Ulumaddin",
      "Koridor menuju kawasan industri Cilacap",
      "Asrama dan kos santri",
      "Pasar dan permukiman Kesugihan",
      "Jalur Kesugihan–Cilacap kota",
    ],
    localBenefits: [
      "Asrama dan kos santri banyak kamar cari AC kos low watt yang hemat dan tipe seragam",
      "Rumah dan kantor dekat koridor industri butuh unit yang cepat dingin dan awet",
      "Usaha dekat kawasan industri kadang butuh pengadaan beberapa unit dengan jadwal",
    ],
    localCases: [
      ["Asrama & kos santri", "AC banyak kamar dengan low watt tipe seragam agar listrik aman dan perawatan mudah."],
      ["Rumah & kantor", "Pemasangan AC kamar dan ruang kerja dekat koridor industri."],
      ["Usaha & pengadaan kecil", "Penyediaan beberapa unit dengan pengiriman dan jadwal pemasangan."],
    ],
    label: "Jual AC Kesugihan",
    title: "Jual AC Kesugihan untuk Rumah, Kantor & Proyek — RADJA AC",
    description:
      "Butuh AC untuk rumah, kantor, proyek, atau banyak unit di Kesugihan? RADJA AC bantu cek PK, stok, pengiriman, opsi pemasangan, dan pembayaran fleksibel.",
    h1: "Jual AC Kesugihan untuk Rumah, Kantor & Proyek",
    eyebrow: "Area Cilacap",
    intro:
      "Butuh AC di Kesugihan untuk rumah, kantor, ruang usaha, proyek, atau kebutuhan beberapa unit? Tim RADJA AC cek kebutuhan PK, daya listrik, stok brand, pengiriman, dan opsi pemasangan berdasarkan data awal.",
    localContext:
      "Kesugihan berada dekat kota dan kawasan industri Cilacap, dan dikenal dengan pondok pesantren besar Al-Ihya Ulumaddin yang punya banyak asrama dan kos santri. Pembeli AC datang dari rumah, kos atau asrama, kantor, serta usaha di sekitar koridor industri. Kos dan asrama banyak kamar biasanya cari unit hemat, sementara usaha dekat kawasan industri kadang butuh pengadaan beberapa unit. Untuk jual AC Kesugihan, unit dikirim ke alamat lalu dipasang, dengan pembayaran DP, transfer, atau COD setelah stok dipastikan.",
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
        "AC untuk asrama atau kos santri banyak kamar di Kesugihan?",
        "Untuk banyak kamar, AC kos low watt tipe seragam menjaga daya dan memudahkan perawatan. Sebutkan jumlah kamar dan daya listrik total untuk cek unit dan stok.",
      ],
      [
        "Bisa pengadaan beberapa unit untuk usaha dekat kawasan industri Kesugihan?",
        "Bisa. Sebutkan jumlah ruang, ukuran, dan target waktu; unit disiapkan dengan stok dicek lalu pengiriman dan pemasangan dijadwalkan. Pembayaran bisa DP atau transfer.",
      ],
      [
        "AC rumah atau kantor di Kesugihan, pilih apa?",
        "Kapasitas dihitung dari luas, jumlah orang, dan daya listrik. Sebutkan ukuran ruang untuk perkiraan PK dan pilihan unit.",
      ],
      [
        "Pembayaran AC di Kesugihan bisa DP atau transfer?",
        "Bisa. Banyak pembeli ambil DP dulu lalu pelunasan transfer atau COD saat unit datang dan stok dipastikan.",
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
    localLandmarks: [
      "PLTU Adipala",
      "Pantai selatan Adipala",
      "Pasar dan permukiman Adipala",
      "Area persawahan pesisir",
      "Jalur Adipala–Kroya–Cilacap",
    ],
    localBenefits: [
      "Rumah dan toko di Adipala yang panas pesisir butuh AC yang cepat dingin",
      "Udara dekat laut mempercepat karat unit outdoor, jadi penempatannya diperhatikan",
      "Vendor sekitar proyek pembangkit kadang butuh pengadaan beberapa unit dengan faktur",
    ],
    localCases: [
      ["Rumah & toko pesisir", "AC kamar dan ruang usaha yang cepat dingin di udara panas Adipala."],
      ["Kantor & vendor proyek", "Pemilihan unit ruang kerja; vendor kadang butuh beberapa unit dengan faktur."],
      ["Penempatan dekat laut", "Pemasangan dengan posisi outdoor yang terlindung agar tidak cepat berkarat."],
    ],
    label: "Jual AC Adipala",
    title: "Jual AC Adipala untuk Rumah, Toko & Usaha — RADJA AC",
    description:
      "Butuh AC untuk rumah, toko, kantor, usaha, atau banyak unit di Adipala? RADJA AC bantu cek PK, stok, pengiriman, opsi pemasangan, dan pembayaran fleksibel.",
    h1: "Jual AC Adipala untuk Rumah, Toko & Usaha",
    eyebrow: "Area Cilacap",
    intro:
      "Butuh AC di Adipala untuk rumah, toko, kantor, usaha, atau kebutuhan beberapa unit? Tim RADJA AC cek kebutuhan PK, daya listrik, stok brand, pengiriman, dan opsi pemasangan berdasarkan kondisi ruangan.",
    localContext:
      "Adipala adalah kecamatan pesisir di Cilacap—ada PLTU Adipala dan pantai selatan—dengan udara yang panas. Pembeli AC umumnya rumah dan toko yang gerah saat siang, kantor, serta vendor sekitar proyek pembangkit. Karena dekat laut, unit outdoor lebih cepat berkarat sehingga penempatannya diperhatikan. Untuk jual AC Adipala, unit dikirim ke alamat lalu dipasang, dengan pembayaran DP, COD, atau transfer setelah stok dipastikan.",
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
        "Karena dekat laut, unit AC outdoor di Adipala cepat karat?",
        "Udara pesisir yang asin memang mempercepat korosi, jadi penempatan outdoor yang terlindung dan perawatan rutin membantu. Sebutkan lokasi pemasangan untuk masukan.",
      ],
      [
        "AC rumah atau toko di Adipala supaya cepat dingin di cuaca panas?",
        "Kapasitas dihitung dari luas, paparan panas, dan jumlah orang agar dingin merata. Sebutkan ukuran ruangan dan daya listrik untuk cek unit dan stok.",
      ],
      [
        "Bisa pengadaan beberapa unit untuk vendor proyek di Adipala?",
        "Bisa. Sebutkan jumlah ruang, ukuran, dan target waktu; unit disiapkan dengan stok dicek, bisa dilengkapi faktur, lalu pengiriman dan pemasangan dijadwalkan.",
      ],
      [
        "Pembayaran AC di Adipala bisa DP atau transfer?",
        "Bisa. Banyak pembeli ambil DP dulu lalu pelunasan transfer atau COD saat unit datang dan stok dipastikan.",
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
    localLandmarks: [
      "Alun-alun Kebumen dan pusat pertokoan",
      "Sentra genteng Sokka",
      "Jalur dan Stasiun Kebumen",
      "Kawasan kos dan properti sewa",
      "Pesisir selatan Kebumen (Pantai Menganti/Suwuk)",
    ],
    localBenefits: [
      "Kos dan kontrakan di Kebumen cari AC kos low watt untuk banyak kamar agar listrik aman dan kamar cepat terisi",
      "Toko dan ruko di pusat kota butuh ruang yang adem supaya pembeli betah",
      "AC rumah banyak dipilih untuk kamar yang panas saat siang, dengan pengiriman ke alamat lalu pemasangan",
    ],
    localCases: [
      ["Kos & properti sewa", "Pemilik pasang AC kos banyak kamar pakai low watt; kamar ber-AC lebih cepat terisi dan harga sewanya bisa dinaikkan."],
      ["Toko & ruko pusat kota", "AC ruang jualan dekat alun-alun agar pembeli betah berlama-lama."],
      ["Rumah tinggal", "Pemasangan AC kamar dengan unit dikirim ke alamat di Kebumen dan sekitarnya."],
    ],
    label: "Jual AC Kebumen",
    title: "Jual AC Kebumen | Cek Stok, PK & Pemasangan — RADJA AC",
    description:
      "Butuh AC untuk rumah, kost, kontrakan, toko, ruko, kantor, atau usaha di Kebumen? RADJA AC bantu cek PK, stok, pengiriman, dan opsi pemasangan.",
    h1: "Jual AC Kebumen untuk rumah, kost, kontrakan, properti sewa, toko, ruko, dan kantor",
    eyebrow: "Layanan AC Area Kebumen",
    intro:
      "Butuh AC di Kebumen untuk rumah, kamar, kost, kontrakan, properti sewa, toko, ruko, kantor, atau usaha harian? Tim RADJA AC membantu cek kebutuhan PK, daya listrik, pilihan brand, stok unit, pengiriman, dan opsi pemasangan sebelum pembelian.",
    localContext:
      "Kebumen adalah kota kabupaten bercorak dagang dan pertanian—dikenal dengan genteng Sokka dan pesisir selatannya—dengan pusat pertokoan di sekitar alun-alun. Pembeli AC di sini banyak dari rumah dan kos/kontrakan, properti sewa, serta toko dan ruko di pusat kota. Kos dan rumah sewa biasanya cari unit hemat untuk banyak kamar, sedangkan toko butuh ruang yang adem buat pembeli. Untuk jual AC Kebumen, unit dikirim ke alamat lalu dipasang, dengan pembayaran DP, COD, atau transfer setelah stok dipastikan.",
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
        "AC kos banyak kamar di Kebumen, hemat listrik dan cepat terisi?",
        "Kamar ber-AC memang lebih cepat terisi. Untuk banyak kamar, low watt tipe seragam menjaga daya dan memudahkan perawatan. Sebutkan jumlah kamar dan daya listrik untuk cek unit dan stok.",
      ],
      [
        "Bisa kirim dan pasang AC ke alamat di Kebumen kota atau pesisir?",
        "Bisa. Unit dikirim ke alamat lalu pemasangan dijadwalkan sesuai akses lokasi; sebutkan alamat dan jumlah unit untuk perkiraan pengiriman.",
      ],
      [
        "Untuk toko atau ruko di pusat Kebumen, AC apa yang pas?",
        "Ruang jualan yang ramai dan pintunya sering kebuka butuh kapasitas yang sesuai luas. Sebutkan ukuran toko dan jam buka untuk cek pilihan unit.",
      ],
      [
        "Pembayaran AC di Kebumen bisa DP atau transfer?",
        "Bisa. Banyak pembeli ambil DP dulu lalu pelunasan transfer atau COD saat unit datang dan stok dipastikan.",
      ],
    ],
  },
  {
    slug: "jual-ac-tegal",
    path: routes.jualAcTegal,
    areaName: "Tegal",
    localLandmarks: [
      "Sentra industri logam Adiwerna dan Talang",
      "Alun-alun Tegal dan jalur Pantura",
      "Stasiun Tegal",
      "Pantai Alam Indah (PAI)",
      "Kawasan ruko, kuliner, dan kos pekerja",
    ],
    localBenefits: [
      "Kantor, workshop logam, dan ruko Pantura butuh AC yang cepat dingin di udara panas-lembap pesisir",
      "Usaha dan kantor sering ambil pengadaan AC beberapa unit sekaligus dengan spesifikasi seragam dan faktur",
      "Kos pekerja dan rumah di Tegal–Slawi banyak pilih AC kos low watt untuk hemat listrik",
    ],
    localCases: [
      ["Workshop logam & kantor", "Pengadaan AC ruang kerja usaha logam dengan beberapa unit, faktur, dan jadwal pemasangan."],
      ["Ruko & toko Pantura", "AC ruang usaha yang cepat dingin untuk pembeli di jalur Pantura yang panas."],
      ["Kos pekerja & rumah", "AC kos dan rumah dengan pilihan low watt; unit dikirim ke alamat Tegal atau Slawi lalu dipasang."],
    ],
    label: "Jual AC Tegal",
    title: "Jual AC Tegal & Slawi | Cek Stok & Pengiriman — RADJA AC",
    description:
      "Butuh AC untuk rumah, toko, kantor, proyek, atau banyak unit di Tegal dan Slawi? RADJA AC bantu cek PK, stok, pengiriman, dan opsi pemasangan.",
    h1: "Jual AC Tegal dan Slawi untuk rumah, toko, kantor, usaha, proyek, dan banyak unit",
    eyebrow: "Layanan AC Area Tegal & Slawi",
    intro:
      "Butuh AC di Tegal atau Slawi untuk rumah, toko, kantor, ruko, usaha, proyek, pengadaan, atau banyak unit? Tim RADJA AC membantu cek kebutuhan PK, daya listrik, pilihan brand, stok unit, pengiriman, dan opsi pemasangan berdasarkan area serta kebutuhan.",
    localContext:
      "Tegal dan Slawi terkenal sebagai pusat industri logam—bengkel dan pabrik kecil di Adiwerna dan Talang—plus jalur Pantura yang ramai dagang dan kuliner. Permintaan AC datang dari kantor dan workshop, ruko dan toko di Pantura, kos pekerja, serta rumah; banyak usaha butuh pengadaan beberapa unit sekaligus. Udara Pantura yang panas dan lembap membuat ruang kerja cepat gerah, sehingga jual AC Tegal sering soal mendinginkan ruang usaha yang sibuk. Unit dikirim ke alamat Tegal atau Slawi lalu dipasang, dengan pembayaran DP, transfer, atau termin untuk pengadaan.",
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
        "Bisa pengadaan AC beberapa unit untuk kantor atau workshop logam di Tegal?",
        "Bisa. Sebutkan jumlah ruang, ukuran, dan target waktu; untuk pengadaan AC usaha unit disiapkan dengan spesifikasi seragam, faktur, dan jadwal pemasangan. Pembayaran bisa termin atau transfer.",
      ],
      [
        "AC untuk ruko atau toko di jalur Pantura Tegal supaya cepat dingin?",
        "Udara Pantura yang panas dan lembap membuat ruang cepat gerah, jadi kapasitas diambil sesuai luas dan jumlah orang. Sebutkan ukuran ruko dan jam buka untuk cek unit dan stok.",
      ],
      [
        "Melayani pengiriman dan pemasangan AC ke Tegal kota dan Slawi?",
        "Ya. Unit dikirim ke alamat di Tegal atau Slawi lalu pemasangan dijadwalkan sesuai akses lokasi. Sebutkan area dan jumlah unit untuk perkiraan pengiriman.",
      ],
      [
        "AC kos pekerja di Tegal, hemat listrik?",
        "Untuk banyak kamar, low watt tipe seragam menjaga daya dan memudahkan perawatan. Sebutkan jumlah kamar dan daya listrik untuk cek pilihan unit.",
      ],
    ],
  },
  {
    slug: "jual-ac-banjarnegara",
    path: routes.jualAcBanjarnegara,
    areaName: "Banjarnegara",
    localLandmarks: [
      "Alun-alun Banjarnegara",
      "Sentra keramik Klampok",
      "Arung jeram Sungai Serayu",
      "Dataran Tinggi Dieng (kawasan sejuk)",
      "Pertokoan dan permukiman dataran rendah",
    ],
    localBenefits: [
      "Rumah, kos, dan toko di kota bawah Banjarnegara yang panas saat siang butuh AC; kawasan Dieng yang sejuk umumnya tidak",
      "AC kos dan AC rumah banyak pilih low watt menyesuaikan daya listrik rumahan",
      "Toko dan kantor di sekitar alun-alun perlu ruang yang adem buat pelanggan dan staf",
    ],
    localCases: [
      ["Rumah & kos kota bawah", "Pemasangan AC kamar yang gerah saat siang, dengan pilihan low watt menyesuaikan daya."],
      ["Toko & kantor pusat kota", "AC ruang usaha dan ruang kerja di sekitar alun-alun supaya nyaman."],
      ["Usaha keramik & kuliner", "AC ruang pamer atau ruang makan, dengan unit dikirim lalu dipasang."],
    ],
    label: "Jual AC Banjarnegara",
    title: "Jual AC Banjarnegara untuk Rumah, Kost, Toko & Usaha — RADJA AC",
    description:
      "Butuh AC untuk rumah, kost, toko, kantor, atau usaha di Banjarnegara? RADJA AC cek stok, kebutuhan PK, pengiriman unit, dan opsi pemasangan via WhatsApp.",
    h1: "Jual AC Banjarnegara untuk Rumah, Kost, Toko & Usaha",
    eyebrow: "Area Regional Bertahap",
    intro:
      "Butuh AC di Banjarnegara untuk rumah, kamar, kost, toko, kantor, atau usaha? Tim RADJA AC cek PK, daya listrik, brand, stok, pengiriman, dan pemasangan dari data awal.",
    localContext:
      "Banjarnegara punya dua wajah: kota dataran yang panas di sekitar alun-alun dan sentra keramik Klampok, serta dataran tinggi Dieng yang justru sejuk. Permintaan AC datang dari kota bawah—rumah, kos, toko, dan kantor—sedangkan kawasan Dieng nyaris tidak perlu AC karena dinginnya. Jadi jual AC Banjarnegara fokus ke permukiman dan usaha di dataran rendah yang gerah saat siang. Unit dikirim ke alamat lalu dipasang, dengan pembayaran DP, COD, atau transfer setelah stok dipastikan.",
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
        "Daerah Dieng kan dingin, apakah perlu AC di Banjarnegara?",
        "Untuk dataran tinggi seperti Dieng biasanya tidak perlu AC karena sudah sejuk. Kebutuhan AC ada di kota bawah Banjarnegara yang panas saat siang—rumah, kos, toko, dan kantor. Sebutkan lokasinya untuk masukan yang pas.",
      ],
      [
        "AC rumah atau kos di kota Banjarnegara, hemat listrik?",
        "Rumah dan kos di dataran rendah banyak pakai low watt agar listrik tidak turun. Sebutkan daya listrik dan ukuran kamar untuk cek unit dan stok.",
      ],
      [
        "Bisa kirim dan pasang AC ke alamat di Banjarnegara?",
        "Bisa. Unit dikirim ke alamat lalu pemasangan dijadwalkan sesuai akses lokasi; sebutkan alamat dan jumlah unit untuk perkiraan pengiriman.",
      ],
      [
        "Pembayaran AC di Banjarnegara bisa DP atau transfer?",
        "Bisa. Banyak pembeli ambil DP dulu lalu pelunasan transfer atau COD saat unit datang dan stok dipastikan.",
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
      "localLandmarks": [
        "Benteng Van der Wijck",
        "Stasiun Gombong",
        "Pasar Wonokriyo Gombong",
        "Rumah sakit dan klinik Gombong",
        "Pertokoan tua pusat kota dan jalur rel selatan"
      ],
      "localBenefits": [
        "Ruko dan toko di pusat Gombong yang ramai dan jam bukanya panjang butuh AC yang kuat dipakai seharian",
        "Klinik, apotek, dan rumah sakit perlu ruang tunggu dan ruang layanan yang adem",
        "Sebagian bangunan tua di pusat kota perlu cek daya listrik sebelum pasang AC tambahan"
      ],
      "localCases": [
        ["Ruko & toko pusat kota", "AC ruang jualan yang ramai dekat Pasar Gombong; sebagian pemilik menambah unit bertahap."],
        ["Klinik & rumah sakit", "AC ruang tunggu dan ruang periksa supaya pasien dan staf nyaman."],
        ["Rumah & bangunan lama", "Pengecekan daya listrik dulu, lalu pengiriman unit dan pemasangan ke alamat di Gombong."]
      ],
      "label": "Jual AC Gombong",
      "title": "Jual AC Gombong untuk Rumah, Toko & Usaha — RADJA AC",
      "description": "Butuh AC untuk rumah, toko, kantor, usaha, atau banyak unit di Gombong? RADJA AC bantu cek PK, stok, pengiriman unit, opsi pemasangan, dan pembayaran fleksibel via WhatsApp.",
      "h1": "Jual AC Gombong untuk Rumah, Toko & Usaha",
      "eyebrow": "Area Kebumen",
      "intro": "Butuh AC di Gombong untuk rumah, kamar, toko, kantor, usaha, atau banyak unit? Tim RADJA AC membantu cek kebutuhan PK, daya listrik, pilihan brand, stok unit, pengiriman, dan opsi pemasangan berdasarkan data awal.",
      "localContext": "Gombong adalah kota dagang dan transit di barat Kebumen, dikenal dengan Benteng Van der Wijck, Stasiun Gombong, dan deretan pertokoan tua di pusat kota. Pembeli AC di sini banyak dari pemilik ruko dan toko di sekitar pasar, klinik dan rumah sakit, hotel kecil, serta rumah. Bangunan lama di pusat kota sering perlu cek daya listrik dulu sebelum menambah unit. Untuk jual AC Gombong, unit dikirim ke alamat lalu dipasang, dengan pembayaran DP, COD, atau transfer setelah stok dipastikan.",
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
              "Bangunan toko saya di pusat Gombong sudah tua, aman pasang AC tambahan?",
              "Bangunan lama sebaiknya dicek daya listriknya dulu sebelum menambah unit agar listrik tidak sering turun. Sebutkan daya terpasang dan jumlah AC yang diinginkan untuk masukan."
          ],
          [
              "AC untuk klinik atau ruang tunggu di Gombong, pilih apa?",
              "Ruang tunggu yang dipakai seharian sebaiknya kapasitasnya sesuai luas dan jumlah orang agar dingin stabil. Sebutkan ukuran ruang untuk perkiraan PK dan cek stok."
          ],
          [
              "Bisa kirim dan pasang AC ke alamat di Gombong dan sekitarnya?",
              "Bisa. Unit dikirim ke alamat di Gombong lalu pemasangan dijadwalkan; pembayaran bisa DP dulu lalu transfer atau COD saat unit datang."
          ],
          [
              "AC untuk toko ramai di pusat Gombong, kuat dipakai seharian?",
              "Toko dengan pintu sering kebuka dan ramai pembeli butuh kapasitas yang cukup, bukan yang termurah, supaya awet. Sebutkan ukuran toko dan jam buka."
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
      "localLandmarks": [
        "Stasiun Karanganyar (Kebumen)",
        "Pasar Karanganyar",
        "Jalur jalan dan rel Gombong–Kebumen",
        "Area persawahan dan permukiman",
        "Kawasan dekat Gombong"
      ],
      "localBenefits": [
        "AC rumah di Karanganyar Kebumen banyak pilih low watt karena daya listrik di permukiman desa terbatas",
        "Toko dan usaha di jalur Gombong–Kebumen butuh ruang yang adem buat pembeli",
        "Pengiriman unit ke alamat lalu pemasangan memudahkan pembeli yang jauh dari kota"
      ],
      "localCases": [
        ["Rumah tinggal", "Pemasangan AC kamar yang panas saat siang dengan pilihan low watt menyesuaikan daya."],
        ["Toko & usaha jalur", "AC ruang jualan di sepanjang jalur Gombong–Kebumen agar pembeli betah."],
        ["Kantor kecil & ruang layanan", "Pemilihan unit untuk ruang kerja dengan pengiriman ke alamat Karanganyar, Kebumen."]
      ],
      "label": "Jual AC Karanganyar Kebumen",
      "title": "Jual AC Karanganyar Kebumen untuk Rumah, Toko & Usaha — RADJA AC",
      "description": "Butuh AC untuk rumah, toko, kantor, usaha, atau banyak unit di Karanganyar Kebumen? RADJA AC bantu cek PK, stok, pengiriman unit, opsi pemasangan, dan pembayaran fleksibel via WhatsApp.",
      "h1": "Jual AC Karanganyar Kebumen untuk Rumah, Toko & Usaha",
      "eyebrow": "Area Kebumen",
      "intro": "Butuh AC di Karanganyar Kebumen untuk rumah, kamar, toko, kantor, usaha, atau banyak unit? Tim RADJA AC membantu cek kebutuhan PK, daya listrik, pilihan brand, stok unit, pengiriman, dan opsi pemasangan berdasarkan data awal.",
      "localContext": "Karanganyar di sini adalah kecamatan di Kabupaten Kebumen pada jalur Gombong–Kebumen—bukan Karanganyar dekat Solo. Wilayahnya dagang-pertanian, dengan toko, rumah, dan usaha kecil di sepanjang jalur jalan dan rel selatan. Pembeli AC umumnya rumah tinggal dan toko yang gerah saat siang, dengan daya listrik rumahan. Untuk jual AC Karanganyar Kebumen, unit dikirim ke alamat lalu dipasang, dengan pembayaran DP, COD, atau transfer setelah stok dipastikan.",
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
              "Karanganyar di sini yang dekat Solo atau yang di Kebumen?",
              "Yang ini Karanganyar di Kabupaten Kebumen, di jalur Gombong–Kebumen—bukan Karanganyar dekat Solo. Kirim alamat detail agar pengecekan pengiriman dan pemasangan lebih jelas."
          ],
          [
              "AC rumah di Karanganyar Kebumen, hemat listrik karena daya terbatas?",
              "Banyak rumah di sini pakai daya 900–1300 watt, jadi low watt sering jadi pilihan. Sebutkan daya listrik dan ukuran kamar untuk cek unit dan stok."
          ],
          [
              "Bisa kirim dan pasang AC ke alamat di jalur Gombong–Kebumen?",
              "Bisa. Unit dikirim ke alamat lalu pemasangan dijadwalkan sesuai akses lokasi; sebutkan alamat dan jumlah unit untuk perkiraan pengiriman."
          ],
          [
              "Pembayaran AC di Karanganyar Kebumen bisa DP atau transfer?",
              "Bisa. Banyak pembeli ambil DP dulu lalu pelunasan transfer atau COD saat unit datang dan stok dipastikan."
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
      "localLandmarks": [
        "Stasiun Kutowinangun",
        "Pasar Kutowinangun",
        "Jalur jalan dan rel Kebumen–Prembun",
        "Area persawahan dan permukiman",
        "Ruko dan toko sepanjang jalan utama"
      ],
      "localBenefits": [
        "AC rumah di Kutowinangun banyak pilih low watt karena daya listrik di permukiman terbatas",
        "Toko dan ruko di jalur Kebumen–Prembun butuh ruang yang adem buat pembeli",
        "Pengiriman unit ke alamat lalu pemasangan memudahkan pembeli di pinggir jalur"
      ],
      "localCases": [
        ["Rumah tinggal", "Pemasangan AC kamar yang panas saat siang dengan pilihan low watt."],
        ["Toko & ruko jalur", "AC ruang jualan di sepanjang jalur Kebumen–Prembun supaya pembeli betah."],
        ["Kantor kecil", "Pemilihan unit ruang kerja dengan pengiriman ke alamat Kutowinangun."]
      ],
      "label": "Jual AC Kutowinangun",
      "title": "Jual AC Kutowinangun untuk Rumah, Toko & Usaha — RADJA AC",
      "description": "Butuh AC untuk rumah, toko, kantor, usaha, atau banyak unit di Kutowinangun? RADJA AC bantu cek PK, stok, pengiriman unit, opsi pemasangan, dan pembayaran fleksibel via WhatsApp.",
      "h1": "Jual AC Kutowinangun untuk Rumah, Toko & Usaha",
      "eyebrow": "Area Kebumen",
      "intro": "Butuh AC di Kutowinangun untuk rumah, kamar, toko, kantor, usaha, atau banyak unit? Tim RADJA AC membantu cek kebutuhan PK, daya listrik, pilihan brand, stok unit, pengiriman, dan opsi pemasangan berdasarkan data awal.",
      "localContext": "Kutowinangun adalah kecamatan dagang-pertanian di timur Kebumen, di jalur jalan dan rel selatan menuju Prembun. Toko, rumah, dan kantor kecil berjajar di sepanjang jalur, dan pembeli AC umumnya rumah tinggal serta toko yang gerah saat siang dengan daya listrik rumahan. Untuk jual AC Kutowinangun, unit dikirim ke alamat lalu dipasang, dengan pembayaran DP, COD, atau transfer setelah stok dipastikan.",
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
              "AC rumah di Kutowinangun, hemat listrik karena daya terbatas?",
              "Banyak rumah di sini pakai daya 900–1300 watt, jadi low watt sering jadi pilihan agar listrik tidak turun. Sebutkan daya listrik dan ukuran kamar untuk cek unit dan stok."
          ],
          [
              "Bisa kirim dan pasang AC ke alamat di jalur Kebumen–Prembun?",
              "Bisa. Unit dikirim ke alamat di Kutowinangun lalu pemasangan dijadwalkan sesuai akses lokasi; sebutkan alamat dan jumlah unit."
          ],
          [
              "AC untuk toko atau ruko di Kutowinangun, pilih apa?",
              "Ruang jualan yang ramai dan pintunya sering kebuka butuh kapasitas sesuai luas. Sebutkan ukuran toko dan jam buka untuk cek unit."
          ],
          [
              "Pembayaran AC di Kutowinangun bisa DP atau transfer?",
              "Bisa. Banyak pembeli ambil DP dulu lalu pelunasan transfer atau COD saat unit datang dan stok dipastikan."
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
  {
    slug: "jual-ac-sumbang",
    path: routes.jualAcSumbang,
    areaName: "Sumbang",
    localContext:
      "Sumbang ada di ring utara-timur Purwokerto, di jalur menuju kaki Gunung Slamet dan Baturraden, jadi sebagian wilayahnya mulai sejuk sementara area bawahnya tetap panas saat siang. Pembeli AC umumnya rumah warga, kos dan kontrakan (sebagian dekat kampus), serta toko dan usaha kecil. Karena masih dekat basis layanan Banyumas, pengiriman unit dan survei lokasi mudah dijadwalkan. Untuk jual AC Sumbang, unit dikirim ke alamat lalu dipasang, dengan pembayaran DP, COD, atau transfer setelah stok dipastikan.",
    localLandmarks: [
      "Jalur Purwokerto–Sumbang menuju Baturraden",
      "Kawasan kos dekat kampus (sisi utara Purwokerto)",
      "Pasar dan permukiman Sumbang",
      "Area perbukitan kaki Gunung Slamet",
      "Persawahan dan usaha lokal",
    ],
    localBenefits: [
      "Masih dekat basis layanan Banyumas, jadi pengiriman unit dan survei lokasi mudah dijadwalkan",
      "AC rumah dan AC kos banyak pilih low watt menyesuaikan daya listrik rumahan",
      "Area bawah yang panas saat siang butuh pendinginan kamar, sedangkan sisi atas yang sejuk lebih selektif",
    ],
    localCases: [
      ["Rumah & kos warga", "Pemasangan AC kamar yang panas saat siang dengan pilihan low watt."],
      ["Toko & usaha kecil", "AC ruang usaha di sepanjang jalur Sumbang agar pelanggan nyaman."],
      ["Tambah unit bertahap", "Keluarga atau pemilik kos menambah AC per kamar mengikuti anggaran."],
    ],
    label: "Jual AC Sumbang",
    title: "Jual AC Sumbang untuk Rumah, Kost & Usaha — RADJA AC",
    description:
      "Butuh AC untuk rumah, kost, toko, kantor kecil, atau usaha di Sumbang? RADJA AC cek kebutuhan PK, stok, pengiriman unit, dan opsi pemasangan via WhatsApp.",
    h1: "Jual AC Sumbang untuk Rumah, Kost & Usaha",
    eyebrow: "Area Banyumas Utara / Timur",
    intro:
      "Butuh AC di Sumbang untuk rumah, kost, kontrakan, toko, kantor kecil, atau usaha? Tim RADJA AC cek ukuran ruangan, daya listrik, pilihan brand, stok unit, pengiriman, dan opsi pemasangan sebelum pembelian.",
    parentAreaName: "Banyumas",
    parentAreaPath: routes.jualAcBanyumas,
    priority: "P1",
    localAngle:
      "Sumbang dekat dengan ring Purwokerto bagian utara/timur dan cocok diposisikan sebagai child Banyumas yang mendukung kebutuhan rumah, toko, dan usaha lokal.",
    nearbyAreaLinks: [
      ["Jual AC Banyumas", routes.jualAcBanyumas],
      ["Jual AC Purwokerto", routes.jualAcPurwokerto],
      ["Jual AC Kembaran", routes.jualAcKembaran],
      ["Jual AC Baturraden", routes.jualAcBaturraden],
    ],
    keywordVariantsOverride: [
      "jual AC Sumbang",
      "AC rumah Sumbang",
      "AC kost Sumbang",
      "AC toko Sumbang",
      "AC kantor kecil Sumbang",
      "cek stok AC Sumbang",
      "pengiriman AC Sumbang",
      "opsi pemasangan AC Sumbang",
      "AC banyak unit Sumbang",
    ],
    commonNeedsOverride: [
      "AC kamar tidur dan ruang keluarga untuk rumah area Sumbang",
      "AC kost, kontrakan, dan rumah sewa sekitar Sumbang",
      "AC toko, warung, ruko kecil, kantor kecil, dan ruang usaha lokal",
      "Pembelian beberapa unit untuk rumah keluarga, usaha, properti sewa, atau kebutuhan bertahap",
    ],
    buyingChecksOverride: [
      "Alamat detail area Sumbang dan akses pengiriman dari Banyumas",
      "Ukuran ruangan, tinggi plafon, dan paparan panas siang hari",
      "Daya listrik rumah/usaha serta kebutuhan standard, low watt, atau inverter",
      "Jumlah unit, preferensi brand, anggaran, dan kebutuhan unit saja atau opsi pemasangan",
    ],
    trustBulletsOverride: [
      "Sumbang diposisikan sebagai ring utara/timur Purwokerto yang masih dekat dengan basis layanan Banyumas.",
      "Kebutuhan AC dibaca dari ukuran ruangan, daya listrik, jumlah unit, stok aktif, dan alamat detail.",
      "Pengiriman dan opsi pemasangan dikonfirmasi dari data lokasi, akses pekerjaan, dan jadwal yang memungkinkan.",
      "Tidak ada klaim cabang lokal; konsultasi tetap diarahkan ke showroom dan gudang RADJA AC di Banyumas.",
    ],
    localFaqOverride: [
      [
        "AC rumah atau AC kos di Sumbang, hemat listrik?",
        "Rumah dan kos dengan daya 900–1300 watt banyak pakai low watt agar listrik tidak turun. Sebutkan daya dan ukuran kamar untuk cek unit dan stok.",
      ],
      [
        "Sumbang agak ke arah Baturraden, semua area perlu AC?",
        "Tidak selalu. Area bawah yang panas saat siang yang paling butuh AC; sisi atas yang lebih sejuk biasanya selektif per kamar. Sebutkan lokasi untuk masukan.",
      ],
      [
        "Karena dekat Banyumas, pengiriman ke Sumbang cepat?",
        "Relatif mudah. Sumbang masih dekat basis layanan, jadi pengiriman unit dan survei lokasi gampang dijadwalkan. Sebutkan alamat dan jumlah unit.",
      ],
      [
        "Pembayaran AC di Sumbang bisa DP atau transfer?",
        "Bisa. Banyak pembeli ambil DP dulu lalu pelunasan transfer atau COD saat unit datang dan stok dipastikan.",
      ],
    ],
    relatedLinksOverride: [
      ["Jual AC Banyumas", routes.jualAcBanyumas],
      ["Jual AC Purwokerto", routes.jualAcPurwokerto],
      ["Jual AC Kembaran", routes.jualAcKembaran],
      ["Jual AC Baturraden", routes.jualAcBaturraden],
      ["Katalog AC", routes.katalog],
      ["Kalkulator PK AC", routes.kalkulatorPkAc],
      ["Kontak RADJA AC", routes.kontak],
    ],
  },
  {
    slug: "jual-ac-kedungbanteng",
    path: routes.jualAcKedungbanteng,
    areaName: "Kedungbanteng",
    localContext:
      "Kedungbanteng ada di ring utara-barat Purwokerto, perbukitan dekat hutan pendidikan UNSOED dan sisi menuju Baturraden, dengan udara yang lebih segar di bagian atas. Pembeli AC banyak dari rumah tinggal, villa dan homestay kecil, properti sewa, serta toko dan usaha lokal. Penginapan kecil biasanya pasang AC di kamar tamu, sedangkan rumah cukup di kamar tertentu. Untuk jual AC Kedungbanteng, unit dikirim ke alamat lalu dipasang, dengan pembayaran DP, COD, atau transfer setelah stok dipastikan.",
    localLandmarks: [
      "Hutan pendidikan dan wisata UNSOED",
      "Jalur Kedungbanteng menuju Baturraden/Karanglewas",
      "Kawasan villa dan homestay kecil",
      "Pasar dan permukiman Kedungbanteng",
      "Perbukitan dan persawahan",
    ],
    localBenefits: [
      "Villa, homestay, dan properti sewa pasang AC di kamar tamu yang perlu nyaman saat ada tamu",
      "Rumah biasanya cukup AC di kamar tertentu karena udara sebagian sudah segar",
      "Masih dekat Banyumas sehingga pengiriman unit dan survei lokasi mudah dijadwalkan",
    ],
    localCases: [
      ["Villa & homestay kecil", "Pemasangan AC kamar tamu dengan unit yang mudah dirawat saat okupansi naik."],
      ["Rumah tinggal", "AC kamar tertentu yang panas, bukan seluruh rumah, karena sebagian area sudah segar."],
      ["Properti sewa & usaha", "Pemilihan unit untuk kamar sewa atau ruang usaha, dikirim ke alamat lalu dipasang."],
    ],
    label: "Jual AC Kedungbanteng",
    title: "Jual AC Kedungbanteng untuk Rumah, Villa & Usaha — RADJA AC",
    description:
      "Butuh AC untuk rumah, villa, homestay, toko, kantor kecil, atau usaha di Kedungbanteng? RADJA AC cek PK, stok, pengiriman, dan opsi pemasangan.",
    h1: "Jual AC Kedungbanteng untuk Rumah, Villa & Usaha",
    eyebrow: "Area Banyumas Utara-Barat",
    intro:
      "Butuh AC di Kedungbanteng untuk rumah, villa, homestay kecil, toko, kantor kecil, atau usaha lokal? Tim RADJA AC membantu cek ukuran ruangan, daya listrik, stok, pilihan brand, pengiriman, dan opsi pemasangan dari data awal.",
    parentAreaName: "Banyumas",
    parentAreaPath: routes.jualAcBanyumas,
    priority: "P1",
    localAngle:
      "Kedungbanteng dekat dengan Purwokerto utara-barat sehingga relevan sebagai child area Banyumas yang masih dekat basis layanan.",
    nearbyAreaLinks: [
      ["Jual AC Banyumas", routes.jualAcBanyumas],
      ["Jual AC Purwokerto", routes.jualAcPurwokerto],
      ["Jual AC Karanglewas", routes.jualAcKaranglewas],
      ["Jual AC Baturraden", routes.jualAcBaturraden],
    ],
    keywordVariantsOverride: [
      "jual AC Kedungbanteng",
      "AC rumah Kedungbanteng",
      "AC villa Kedungbanteng",
      "AC toko Kedungbanteng",
      "AC kantor kecil Kedungbanteng",
      "cek stok AC Kedungbanteng",
      "pengiriman AC Kedungbanteng",
      "opsi pemasangan AC Kedungbanteng",
      "AC banyak unit Kedungbanteng",
    ],
    commonNeedsOverride: [
      "AC rumah tinggal, kamar tidur, dan ruang keluarga area Kedungbanteng",
      "AC untuk villa, homestay, guest house kecil, atau properti sewa sekitar jalur utara Purwokerto",
      "AC toko, ruko kecil, kantor kecil, dan ruang usaha lokal",
      "Pembelian beberapa unit untuk rumah besar, usaha, penginapan kecil, atau kebutuhan bertahap",
    ],
    buyingChecksOverride: [
      "Alamat detail Kedungbanteng dan akses lokasi dari arah Purwokerto/Banyumas",
      "Ukuran ruangan, tinggi plafon, sirkulasi, dan kondisi panas sekitar bangunan",
      "Daya listrik, pilihan low watt/inverter, dan durasi pemakaian harian",
      "Jumlah unit, preferensi brand, anggaran, dan kebutuhan pengiriman atau opsi pemasangan",
    ],
    trustBulletsOverride: [
      "Kedungbanteng diposisikan sebagai ring utara-barat Purwokerto yang dekat dengan Baturraden dan Karanglewas.",
      "Cocok untuk kebutuhan rumah, usaha lokal, properti sewa, dan beberapa unit dengan pengecekan PK lebih dulu.",
      "Stok, pengiriman, dan opsi pemasangan dikonfirmasi berdasarkan data lokasi dan jumlah unit.",
      "Tidak ada klaim showroom lokal; bukti operasional tetap mengacu ke RADJA AC Banyumas.",
    ],
    localFaqOverride: [
      [
        "Kedungbanteng agak sejuk, perlu AC di semua ruangan?",
        "Tidak selalu. Sebagian area atas sudah segar, jadi AC biasanya dipasang di kamar atau ruang tertentu yang panas, atau di kamar tamu penginapan. Sebutkan lokasi dan ruangannya.",
      ],
      [
        "Cocok untuk villa, homestay, atau properti sewa di Kedungbanteng?",
        "Cocok. Penginapan kecil biasanya pasang AC kamar tamu dengan unit yang mudah dirawat. Kirim jumlah kamar dan ukurannya untuk arahan unit dan stok.",
      ],
      [
        "Karena dekat Banyumas, pengiriman ke Kedungbanteng cepat?",
        "Relatif mudah. Masih dekat basis layanan, jadi pengiriman unit dan survei lokasi gampang dijadwalkan. Sebutkan alamat dan jumlah unit.",
      ],
      [
        "Pembayaran AC di Kedungbanteng bisa DP atau transfer?",
        "Bisa. Banyak pembeli ambil DP dulu lalu pelunasan transfer atau COD saat unit datang dan stok dipastikan.",
      ],
    ],
    relatedLinksOverride: [
      ["Jual AC Banyumas", routes.jualAcBanyumas],
      ["Jual AC Purwokerto", routes.jualAcPurwokerto],
      ["Jual AC Karanglewas", routes.jualAcKaranglewas],
      ["Jual AC Baturraden", routes.jualAcBaturraden],
      ["AC Inverter", routes.katalogAcInverter],
      ["Kalkulator PK AC", routes.kalkulatorPkAc],
      ["Kontak RADJA AC", routes.kontak],
    ],
  },
  {
    slug: "jual-ac-kalibagor",
    path: routes.jualAcKalibagor,
    areaName: "Kalibagor",
    localContext:
      "Kalibagor ada di jalur Banyumas–Sokaraja, daerah dagang dan pertanian dengan jejak bekas Pabrik Gula Kalibagor. Karena posisinya dekat basis layanan RADJA AC di Sokaraja, pengiriman unit dan survei lokasi relatif mudah. Pembeli AC di sini umumnya rumah, toko, dan kantor desa yang gerah saat siang. Untuk jual AC Kalibagor, unit diantar ke alamat lalu dipasang, dengan pembayaran DP, COD, atau transfer setelah stok dipastikan.",
    localLandmarks: [
      "Bekas Pabrik Gula Kalibagor",
      "Jalur Banyumas–Sokaraja",
      "Pasar Kalibagor",
      "Aliran Sungai Serayu",
      "Dekat basis layanan RADJA AC di Sokaraja",
    ],
    localBenefits: [
      "Dekat basis layanan di Sokaraja sehingga pengiriman unit dan survei lokasi gampang dijadwalkan",
      "Toko dan ruko di jalur Banyumas–Sokaraja butuh ruang yang adem buat pembeli",
      "AC rumah banyak pilih low watt menyesuaikan daya listrik rumahan",
    ],
    localCases: [
      ["Rumah tinggal", "Pemasangan AC kamar yang panas saat siang; survei mudah karena dekat Sokaraja."],
      ["Toko & ruko jalur", "AC ruang jualan di jalur Banyumas–Sokaraja agar pembeli betah."],
      ["Kantor kecil & usaha", "Pemilihan unit ruang kerja dengan pengiriman cepat ke alamat Kalibagor."],
    ],
    label: "Jual AC Kalibagor",
    title: "Jual AC Kalibagor untuk Rumah, Toko & Usaha — RADJA AC",
    description:
      "Butuh AC untuk rumah, toko, kantor kecil, ruko, atau usaha di Kalibagor? RADJA AC cek kebutuhan PK, stok, pengiriman unit, dan opsi pemasangan via WhatsApp.",
    h1: "Jual AC Kalibagor untuk Rumah, Toko & Usaha",
    eyebrow: "Jalur Banyumas - Sokaraja",
    intro:
      "Butuh AC di Kalibagor untuk rumah, toko, kantor kecil, ruko, atau usaha? Tim RADJA AC cek ukuran ruangan, daya listrik, pilihan brand, stok unit, pengiriman, dan opsi pemasangan sebelum pembelian.",
    parentAreaName: "Banyumas",
    parentAreaPath: routes.jualAcBanyumas,
    priority: "P1",
    localAngle:
      "Kalibagor berada di jalur Banyumas-Sokaraja sehingga cocok sebagai child area yang menguatkan sisi timur/selatan Banyumas.",
    nearbyAreaLinks: [
      ["Jual AC Banyumas", routes.jualAcBanyumas],
      ["Jual AC Sokaraja", routes.jualAcSokaraja],
      ["Jual AC Kembaran", routes.jualAcKembaran],
      ["Jual AC Purwokerto", routes.jualAcPurwokerto],
    ],
    keywordVariantsOverride: [
      "jual AC Kalibagor",
      "AC rumah Kalibagor",
      "AC toko Kalibagor",
      "AC kantor kecil Kalibagor",
      "AC usaha Kalibagor",
      "cek stok AC Kalibagor",
      "pengiriman AC Kalibagor",
      "opsi pemasangan AC Kalibagor",
      "AC banyak unit Kalibagor",
    ],
    commonNeedsOverride: [
      "AC rumah tinggal, kamar tidur, dan ruang keluarga area Kalibagor",
      "AC toko, warung, ruko kecil, kantor kecil, klinik ringan, dan ruang usaha",
      "AC untuk bangunan keluarga atau beberapa ruangan di jalur Banyumas-Sokaraja",
      "Pembelian beberapa unit untuk usaha lokal, properti sewa, atau kebutuhan bertahap",
    ],
    buyingChecksOverride: [
      "Alamat detail Kalibagor dan kedekatan akses ke Banyumas/Sokaraja",
      "Ukuran ruangan, tinggi plafon, arah panas, dan jumlah orang di ruangan",
      "Daya listrik, pilihan standard/low watt/inverter, dan jam pemakaian",
      "Jumlah unit, preferensi brand, target anggaran, pengiriman, dan kebutuhan opsi pemasangan",
    ],
    trustBulletsOverride: [
      "Kalibagor diposisikan sebagai child area jalur Banyumas-Sokaraja.",
      "Kebutuhan AC cocok dimulai dari cek ukuran ruangan, daya listrik, stok aktif, dan pilihan brand.",
      "Pengiriman serta opsi pemasangan dikonfirmasi berdasarkan alamat detail dan kondisi lokasi.",
      "Konsultasi tetap diarahkan ke RADJA AC Banyumas tanpa klaim toko/cabang lokal.",
    ],
    localFaqOverride: [
      [
        "Kalibagor dekat showroom Sokaraja, pengirimannya cepat?",
        "Karena Kalibagor di jalur Banyumas-Sokaraja dan dekat basis layanan, pengiriman unit dan survei lokasi relatif mudah dijadwalkan. Sebutkan alamat dan jumlah unit untuk perkiraan.",
      ],
      [
        "AC rumah di Kalibagor, hemat listrik?",
        "Rumah dengan daya 900-1300 watt banyak pakai low watt agar listrik tidak turun. Sebutkan daya listrik dan ukuran kamar untuk cek unit dan stok.",
      ],
      [
        "AC untuk toko atau ruko di jalur Kalibagor, pilih apa?",
        "Ruang jualan yang ramai dan pintunya sering kebuka butuh kapasitas sesuai luas. Sebutkan ukuran toko dan jam buka untuk cek unit.",
      ],
      [
        "Pembayaran AC di Kalibagor bisa DP atau transfer?",
        "Bisa. Banyak pembeli ambil DP dulu lalu pelunasan transfer atau COD saat unit datang dan stok dipastikan.",
      ],
    ],
    relatedLinksOverride: [
      ["Jual AC Banyumas", routes.jualAcBanyumas],
      ["Jual AC Sokaraja", routes.jualAcSokaraja],
      ["Jual AC Kembaran", routes.jualAcKembaran],
      ["Jual AC Purwokerto", routes.jualAcPurwokerto],
      ["AC 1/2 PK", routes.katalogAcSetengahPk],
      ["Kalkulator PK AC", routes.kalkulatorPkAc],
      ["Kontak RADJA AC", routes.kontak],
    ],
  },

];

// Maps each area slug to a content cluster. Keeping this as a central map
// (rather than a field per item) makes cluster assignment scalable and easy
// to audit. An item may still set its own `clusterType` to override the map.
export const areaClusterMap = {
  // Hospitality & wisata
  "jual-ac-baturraden": "hospitality",
  "jual-ac-banjarnegara": "hospitality",
  // Kos & pendidikan (Kembaran = kos kecil/rumah sewa/kontrakan sekitar kampus)
  "jual-ac-kembaran": "education",
  // Residential
  "jual-ac-banyumas": "residential",
  "jual-ac-karanglewas": "residential",
  "jual-ac-sumbang": "residential",
  "jual-ac-kedungbanteng": "residential",
  "jual-ac-cilongok": "residential",
  "jual-ac-patikraja": "residential",
  // Perdagangan & transit
  "jual-ac-sokaraja": "trade",
  "jual-ac-kalibagor": "trade",
  "jual-ac-rawalo": "trade",
  "jual-ac-ajibarang": "trade",
  "jual-ac-wangon": "trade",
  "jual-ac-jatilawang": "trade",
  "jual-ac-kebumen": "trade",
  "jual-ac-gombong": "trade",
  "jual-ac-karanganyar-kebumen": "trade",
  "jual-ac-kutowinangun": "trade",
  "jual-ac-kroya": "trade",
  "jual-ac-majenang": "trade",
  "jual-ac-sidareja": "trade",
  "jual-ac-kesugihan": "trade",
  "jual-ac-adipala": "trade",
  // Industri & pengadaan
  "jual-ac-purbalingga": "industrial",
  "jual-ac-cilacap": "industrial",
  "jual-ac-tegal": "industrial",
  "jual-ac-semarang": "industrial",
  // Kota besar & hospitality urban
  // Purwokerto = pusat kota komersial (UNSOED, hotel, kantor, perdagangan)
  "jual-ac-purwokerto": "urban",
  "jual-ac-yogyakarta": "urban",
  "jual-ac-solo": "urban",
};

export function getAreaItem(slug) {
  const item = areaItems.find((entry) => entry.slug === slug);
  if (!item) return undefined;

  // Normalize the item: resolve clusterType and activate any dormant
  // *Override fields so child-area content is no longer ignored.
  return {
    ...item,
    clusterType: item.clusterType ?? areaClusterMap[item.slug] ?? "trade",
    keywordVariants: item.keywordVariants ?? item.keywordVariantsOverride,
    trustBullets: item.trustBullets ?? item.trustBulletsOverride,
    localFaq: item.localFaq ?? item.localFaqOverride,
    relatedLinks: item.relatedLinks ?? item.relatedLinksOverride,
  };
}
