import { routes } from "@/content/routes";

const defaultBuyingChecks = [
  "Ukuran ruangan, tinggi plafon, dan kondisi panas matahari",
  "Daya listrik dan kebutuhan standard, low watt, atau inverter",
  "Jumlah unit, preferensi brand, dan target budget",
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
    title: "Jual AC Purwokerto untuk Rumah, Kost, Toko & Kantor — RADJA AC",
    description:
      "Butuh AC untuk rumah, kost, toko, kantor, hotel, atau proyek di Purwokerto? RADJA AC cek stok, kebutuhan PK, pengiriman unit, dan opsi pemasangan via WhatsApp.",
    h1: "Jual AC Purwokerto untuk Rumah, Kost, Toko & Kantor",
    eyebrow: "Area Utama RADJA AC",
    intro:
      "Butuh AC untuk rumah, kost, toko, kantor, atau proyek di Purwokerto? RADJA AC cek stok, kebutuhan PK, pengiriman unit, dan opsi pemasangan sebelum unit dipilih.",
    localContext:
      "Purwokerto adalah area utama permintaan RADJA AC untuk rumah tinggal, kost, toko, ruko, kantor, hotel kecil, dan kebutuhan banyak unit. Karena kebutuhan kamar, ruang keluarga, toko, dan kantor berbeda, admin akan mengecek ukuran ruangan, daya listrik, pola pemakaian, brand, dan budget sebelum memberi arahan.",
    coverageNote:
      "RADJA AC berbasis di Pamijen, Sokaraja, Banyumas. Untuk kebutuhan Purwokerto, stok unit, pengiriman, jadwal, dan opsi pemasangan tetap dikonfirmasi admin sesuai alamat dan kondisi terbaru.",
    commonNeeds: [
      "AC kamar tidur, rumah tinggal, dan ruang keluarga",
      "AC kost, kontrakan, homestay, dan kamar sewa",
      "AC toko, ruko, kantor kecil, klinik, dan ruang usaha",
      "Pengadaan beberapa unit untuk usaha, hotel kecil, kantor, atau proyek",
    ],
    buyingChecks: defaultBuyingChecks,
    relatedLinks: [
      ["Katalog AC", routes.katalog],
      ["Kalkulator PK AC", routes.kalkulatorPkAc],
      ["AC Split Rumah", routes.katalogAcSplitRumah],
      ["AC Low Watt", routes.katalogAcLowWatt],
      ["AC Inverter", routes.katalogAcInverter],
      ["Bukti Pengiriman & Proyek", routes.buktiPengirimanProyek],
      ["Kontak RADJA AC", routes.kontak],
    ],
    ctaLabel: "Chat WhatsApp untuk cek stok AC Purwokerto",
    waIntent: "cek stok AC Purwokerto dengan data ukuran ruangan daya listrik jumlah unit dan kebutuhan pemasangan",
    waArea: "Purwokerto",
  },
  {
    slug: "jual-ac-banyumas",
    path: routes.jualAcBanyumas,
    areaName: "Banyumas",
    label: "Jual AC Banyumas",
    title: "Jual AC Banyumas untuk Rumah, Kost, Toko & Usaha — RADJA AC",
    description:
      "Butuh AC untuk rumah, kost, toko, kantor, atau proyek di Banyumas? RADJA AC cek stok, kebutuhan PK, pengiriman unit, dan opsi pemasangan via WhatsApp.",
    h1: "Jual AC Banyumas untuk Rumah, Kost, Toko & Usaha",
    eyebrow: "Area Basis Banyumas",
    intro:
      "RADJA AC melayani kebutuhan AC area Banyumas untuk rumah, kost, toko, kantor, usaha, dan banyak unit. Admin cek PK, stok, pengiriman, dan pemasangan sebelum pembelian.",
    localContext:
      "Banyumas mencakup kebutuhan yang dekat dengan basis RADJA AC: rumah, kost, kontrakan, toko, klinik, kantor kecil, dan usaha harian. Untuk menghindari salah pilih kapasitas, admin akan meminta ukuran ruangan, daya listrik, budget, area detail, dan kebutuhan unit saja atau opsi pemasangan.",
    coverageNote:
      "Basis RADJA AC berada di Pamijen, Sokaraja, Banyumas. Untuk alamat di area Banyumas, pengiriman unit dan opsi pemasangan tetap dicek berdasarkan lokasi, jumlah unit, stok, dan jadwal.",
    commonNeeds: [
      "AC rumah, kamar tidur, dan ruang keluarga",
      "AC kost, kontrakan, homestay, dan rumah sewa",
      "AC toko, klinik, kantor, dan ruang usaha",
      "Pembelian beberapa unit untuk usaha lokal atau proyek ringan",
    ],
    buyingChecks: defaultBuyingChecks,
    relatedLinks: defaultRelatedLinks,
    ctaLabel: "Chat WhatsApp untuk cek stok AC Banyumas",
    waIntent: "cek stok AC Banyumas dengan data ukuran ruangan daya listrik jumlah unit dan kebutuhan pemasangan",
    waArea: "Banyumas",
  },
  {
    slug: "jual-ac-sokaraja",
    path: routes.jualAcSokaraja,
    areaName: "Sokaraja",
    label: "Jual AC Sokaraja",
    title: "Jual AC Sokaraja Dekat Showroom RADJA AC — RADJA AC",
    description:
      "Butuh AC untuk rumah, kost, toko, kantor, atau proyek di Sokaraja? RADJA AC cek stok, kebutuhan PK, pengiriman unit, dan opsi pemasangan via WhatsApp.",
    h1: "Jual AC Sokaraja dekat Showroom RADJA AC",
    eyebrow: "Area Basis RADJA AC",
    intro:
      "RADJA AC berbasis di Pamijen, Sokaraja, Banyumas. Pembelian AC original untuk rumah, kost, toko, kantor, usaha, dan kebutuhan banyak unit dibaca dari PK, stok, pengiriman, dan pemasangan.",
    localContext:
      "Sokaraja adalah area basis RADJA AC, jadi halaman ini berfungsi sebagai trust page sekaligus money page lokal. Calon pembeli bisa mulai dari cek ukuran ruangan, daya listrik, pilihan brand, stok unit, dan kebutuhan pemasangan sebelum datang atau chat admin.",
    coverageNote:
      "Untuk Sokaraja dan sekitarnya, admin tetap mengonfirmasi stok, alamat, jadwal, kebutuhan material, dan opsi pemasangan supaya estimasi tidak asal tebak.",
    commonNeeds: [
      "AC rumah, kamar tidur, dan ruang keluarga",
      "AC kost, kontrakan, dan rumah sewa",
      "AC toko, ruko, kantor, dan ruang usaha",
      "Kebutuhan AC banyak unit untuk usaha atau proyek ringan",
    ],
    buyingChecks: defaultBuyingChecks,
    relatedLinks: [
      ["Katalog AC", routes.katalog],
      ["Kalkulator PK AC", routes.kalkulatorPkAc],
      ["AC Gree", routes.brandGree],
      ["AC Daikin", routes.brandDaikin],
      ["Bukti Pengiriman & Proyek", routes.buktiPengirimanProyek],
      ["Tentang RADJA AC", routes.tentangKami],
      ["Kontak RADJA AC", routes.kontak],
    ],
    ctaLabel: "Chat WhatsApp untuk cek stok AC Sokaraja",
    waIntent: "cek stok AC Sokaraja dengan data ukuran ruangan daya listrik jumlah unit dan kebutuhan pemasangan",
    waArea: "Sokaraja",
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
      "Butuh AC di Yogyakarta untuk rumah, kost, guest house, hotel, kantor, atau usaha? Admin cek PK, daya listrik, stok, pengiriman, dan pemasangan sebelum unit dipilih.",
    localContext:
      "Yogyakarta kuat untuk kebutuhan kost, guest house, homestay, rumah tinggal, cafe, kantor kecil, dan bangunan banyak kamar. Karena pola pemakaian kamar sewa, rumah, dan usaha berbeda, admin perlu data jumlah kamar, ukuran ruangan, daya listrik, timeline, dan butuh pemasangan atau tidak.",
    coverageNote:
      "RADJA AC berbasis di Banyumas dan melayani kebutuhan AC area Yogyakarta dengan konsultasi PK, cek stok unit, pengiriman, serta opsi pemasangan yang dikonfirmasi sesuai alamat, jumlah unit, dan jadwal.",
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
      "Semarang cocok untuk kebutuhan rumah, kantor, ruko, toko, hotel, dan proyek ringan. Karena banyak kebutuhan komersial melibatkan beberapa ruangan atau deadline pekerjaan, siapkan data jumlah unit, ukuran ruangan, tipe bangunan, daya listrik, dan timeline sejak awal.",
    coverageNote:
      "RADJA AC berbasis di Banyumas dan melayani kebutuhan AC area Semarang dengan konsultasi PK, cek stok unit, pengiriman, serta opsi pemasangan yang dikonfirmasi sesuai alamat, jumlah unit, dan jadwal pekerjaan.",
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
      "Butuh AC di Solo untuk rumah, kost, hotel, toko, kantor, atau usaha? Admin cek PK, daya listrik, brand, stok, pengiriman, dan pemasangan sebelum unit dipilih.",
    localContext:
      "Solo memiliki kebutuhan AC dari rumah, kost, toko, kantor, sampai hospitality. Agar tidak hanya mengejar harga awal yang terlihat ringan, admin akan mengecek ukuran ruangan, daya listrik, pola pemakaian, jumlah unit, dan kebutuhan unit saja atau opsi pemasangan.",
    coverageNote:
      "RADJA AC berbasis di Banyumas dan melayani kebutuhan AC area Solo dengan konsultasi PK, cek stok unit, pengiriman, dan opsi pemasangan yang dikonfirmasi admin berdasarkan lokasi, jumlah unit, serta jadwal.",
    commonNeeds: [
      "AC rumah dan kamar tidur",
      "AC kost, kontrakan, homestay, dan hotel kecil",
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
      "Butuh AC di Purbalingga untuk rumah, kamar, kost, toko, kantor, atau usaha? Admin cek PK, daya listrik, brand, stok, pengiriman, dan pemasangan sebelum unit dipilih.",
    localContext:
      "Purbalingga adalah area regional dekat basis RADJA AC dengan kebutuhan AC rumah, kost, toko, kantor, dan usaha harian. Agar arahan tidak asal, admin akan meminta ukuran ruangan, daya listrik, budget, lokasi detail, dan kebutuhan unit saja atau opsi pemasangan.",
    coverageNote:
      "RADJA AC berbasis di Banyumas dan melayani kebutuhan AC area Purbalingga dengan konsultasi PK, cek stok unit, pengiriman, dan opsi pemasangan yang dikonfirmasi admin sesuai alamat, jumlah unit, serta jadwal.",
    commonNeeds: [
      "AC rumah tinggal dan kamar tidur",
      "AC kost, kontrakan, dan rumah sewa",
      "AC toko, kantor, bengkel, dan ruang usaha",
      "Pembelian beberapa unit untuk usaha lokal atau proyek ringan",
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
    title: "Jual AC Cilacap untuk Rumah, Toko, Kantor & Banyak Unit — RADJA AC",
    description:
      "Butuh AC untuk rumah, toko, kantor, usaha, atau banyak unit di Cilacap? RADJA AC cek stok, kebutuhan PK, pengiriman unit, dan opsi pemasangan via WhatsApp.",
    h1: "Jual AC Cilacap untuk Rumah, Toko, Kantor & Banyak Unit",
    eyebrow: "Layanan AC Area Regional",
    intro:
      "Butuh AC di Cilacap untuk rumah, toko, kantor, usaha, atau banyak unit? Admin cek PK, daya listrik, brand, stok, pengiriman, dan pemasangan dari alamat serta kebutuhan.",
    localContext:
      "Cilacap punya kebutuhan AC untuk rumah, toko, kantor, usaha, dan bangunan dengan beberapa ruangan. Untuk mengurangi lead yang hanya tanya harga, kirim kecamatan, ukuran ruangan, jumlah unit, daya listrik, budget, dan kebutuhan pemasangan sejak awal.",
    coverageNote:
      "RADJA AC berbasis di Banyumas dan melayani kebutuhan AC area Cilacap dengan konsultasi PK, cek stok unit, pengiriman, serta opsi pemasangan yang dikonfirmasi berdasarkan lokasi, jumlah unit, dan jadwal pekerjaan.",
    commonNeeds: [
      "AC rumah tinggal dan kamar keluarga",
      "AC toko, ruko, kantor, dan ruang usaha",
      "AC untuk beberapa ruangan atau banyak titik",
      "Pengadaan unit untuk usaha, kantor, atau proyek",
    ],
    buyingChecks: [
      "Kecamatan atau area detail pengiriman di Cilacap",
      "Ukuran ruangan dan jumlah unit yang dibutuhkan",
      "Daya listrik dan pilihan low watt atau inverter",
      "Kebutuhan unit saja, pengiriman, atau opsi pemasangan",
    ],
    relatedLinks: [
      ["Kalkulator PK AC", routes.kalkulatorPkAc],
      ["AC Kantor & Komersial", routes.katalogAcKantorKomersial],
      ["AC Low Watt", routes.katalogAcLowWatt],
      ["Pengadaan AC Proyek", routes.pengadaanAc],
      ["AC Daikin", routes.brandDaikin],
      ["AC Gree", routes.brandGree],
      ["Kontak RADJA AC", routes.kontak],
    ],
    ctaLabel: "Chat WhatsApp untuk cek stok AC Cilacap",
    waIntent: "cek stok AC Cilacap dengan data ukuran ruangan daya listrik jumlah unit dan kebutuhan pemasangan",
    waArea: "Cilacap",
  },
  {
    slug: "jual-ac-kebumen",
    path: routes.jualAcKebumen,
    areaName: "Kebumen",
    label: "Jual AC Kebumen",
    title: "Jual AC Kebumen untuk Rumah, Kost, Toko & Ruko — RADJA AC",
    description:
      "Butuh AC untuk rumah, kost, toko, ruko, kantor, atau usaha di Kebumen? RADJA AC cek stok, kebutuhan PK, pengiriman unit, dan opsi pemasangan via WhatsApp.",
    h1: "Jual AC Kebumen untuk Rumah, Kost, Toko & Ruko",
    eyebrow: "Layanan AC Area Regional",
    intro:
      "Butuh AC untuk rumah, kost, toko, ruko, kantor, atau ruang usaha di Kebumen? RADJA AC cek kebutuhan PK, daya listrik, pilihan brand, stok unit, pengiriman, dan opsi pemasangan sebelum order.",
    localContext:
      "Kebumen cocok untuk kebutuhan AC rumah, kamar, kost kecil, toko, ruko, dan usaha harian. Agar pembelian lebih aman, admin akan mengecek ukuran ruangan, daya listrik, pola pemakaian, budget, dan kebutuhan pengiriman atau pemasangan.",
    coverageNote:
      "RADJA AC berbasis di Banyumas dan melayani kebutuhan AC area Kebumen dengan konsultasi PK, cek stok unit, pengiriman, dan opsi pemasangan yang dikonfirmasi admin sesuai alamat, jumlah unit, serta jadwal.",
    commonNeeds: [
      "AC rumah dan kamar tidur",
      "AC kost kecil, kontrakan, dan rumah sewa",
      "AC toko, ruko, kantor, dan ruang kerja",
      "Pembelian beberapa unit untuk usaha lokal atau proyek ringan",
    ],
    buyingChecks: defaultBuyingChecks,
    relatedLinks: defaultRelatedLinks,
    ctaLabel: "Chat WhatsApp untuk cek stok AC Kebumen",
    waIntent: "cek stok AC Kebumen dengan data ukuran ruangan daya listrik jumlah unit dan kebutuhan pemasangan",
    waArea: "Kebumen",
  },
  {
    slug: "jual-ac-tegal",
    path: routes.jualAcTegal,
    areaName: "Tegal",
    label: "Jual AC Tegal",
    title: "Jual AC Tegal dan Slawi untuk Rumah, Toko & Proyek — RADJA AC",
    description:
      "Butuh AC untuk rumah, toko, kantor, usaha, proyek, atau banyak unit di Tegal dan Slawi? RADJA AC cek stok, kebutuhan PK, pengiriman unit, dan opsi pemasangan via WhatsApp.",
    h1: "Jual AC Tegal dan Slawi untuk Rumah, Toko & Proyek",
    eyebrow: "Layanan AC Area Regional",
    intro:
      "Butuh AC di Tegal atau Slawi untuk rumah, toko, kantor, usaha, proyek, atau banyak unit? Admin cek PK, daya listrik, brand, stok, pengiriman, dan pemasangan sebelum order.",
    localContext:
      "Area Tegal dan Slawi banyak dipakai untuk rumah tinggal, toko, kantor, ruko, dan usaha. Kirim area detail, ukuran ruangan, jumlah unit, daya listrik, dan timeline agar admin bisa membaca pengiriman serta kebutuhan pemasangan sejak awal.",
    coverageNote:
      "RADJA AC berbasis di Banyumas dan melayani kebutuhan AC area Tegal dengan konsultasi PK, cek stok unit, pengiriman, serta opsi pemasangan yang dikonfirmasi admin sesuai alamat, jumlah unit, dan jadwal.",
    commonNeeds: [
      "AC rumah tinggal dan kamar keluarga",
      "AC toko, ruko, kantor, dan ruang usaha",
      "AC untuk area Tegal, Slawi, dan sekitarnya",
      "Pembelian banyak unit untuk usaha, kantor, hotel, proyek, atau pengadaan",
    ],
    buyingChecks: [
      "Area detail Tegal atau Slawi untuk estimasi pengiriman",
      "Ukuran ruangan, jumlah unit, dan kebutuhan PK",
      "Daya listrik dan pilihan tipe hemat daya",
      "Kebutuhan unit saja, pengiriman, atau opsi pemasangan",
    ],
    relatedLinks: [
      ["Kalkulator PK AC", routes.kalkulatorPkAc],
      ["AC Split Rumah", routes.katalogAcSplitRumah],
      ["AC Kantor & Komersial", routes.katalogAcKantorKomersial],
      ["Pengadaan AC Proyek", routes.pengadaanAc],
      ["AC Daikin", routes.brandDaikin],
      ["AC Gree", routes.brandGree],
      ["Kontak RADJA AC", routes.kontak],
    ],
    ctaLabel: "Chat WhatsApp untuk cek stok AC Tegal",
    waIntent: "cek stok AC Tegal atau Slawi dengan data ukuran ruangan daya listrik jumlah unit dan kebutuhan pemasangan",
    waArea: "Tegal",
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
      "Butuh AC di Banjarnegara untuk rumah, kamar, kost, toko, kantor, atau usaha? Admin cek PK, daya listrik, brand, stok, pengiriman, dan pemasangan dari data awal.",
    localContext:
      "Banjarnegara termasuk area regional yang perlu ditangani dengan data awal yang jelas. Kirim ukuran ruangan, lokasi detail, jumlah unit, daya listrik, budget, dan kebutuhan unit saja atau opsi pemasangan agar admin menyusun pilihan AC yang masuk akal.",
    coverageNote:
      "RADJA AC berbasis di Banyumas dan melayani kebutuhan AC area Banjarnegara dengan konsultasi PK, cek stok unit, pengiriman, dan opsi pemasangan yang dikonfirmasi admin sesuai alamat, jumlah unit, serta jadwal.",
    commonNeeds: [
      "AC rumah tinggal dan kamar tidur",
      "AC kost, kontrakan, dan rumah sewa",
      "AC toko, kantor, dan ruang usaha",
      "Pembelian beberapa unit untuk usaha lokal atau proyek ringan",
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
