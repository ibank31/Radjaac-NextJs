import { routes } from "@/content/routes";

export const catalogItems = [
  {
    slug: "ac-1-2-pk",
    path: routes.katalogAcSetengahPk,
    label: "AC 1/2 PK",
    title: "AC 1/2 PK | Cocok untuk Kamar Berapa & Pilihan Unit — RADJA AC",
    description:
      "Konsultasi AC 1/2 PK untuk kamar, kost, ruang kerja, dan kebutuhan rumah. Tim RADJA AC membaca ukuran ruangan, daya listrik, stok unit, pengiriman, dan kebutuhan pemasangan.",
    h1: "AC 1/2 PK untuk kamar, kost, dan ruang kerja",
    eyebrow: "Katalog Kapasitas",
    intro:
      "AC 1/2 PK banyak dipakai untuk ruangan compact. Sebelum memilih unit, cek ukuran ruangan, tinggi plafon, arah panas, jumlah orang, dan daya listrik agar kapasitas tidak kurang atau terlalu boros.",
    bestFor: [
      "Kamar tidur",
      "Kamar kost",
      "Ruang kerja",
      "Ruangan rumah dengan pemakaian rutin",
    ],
    concerns: [
      "Apakah 1/2 PK cukup untuk ukuran ruangan",
      "Daya listrik dan MCB rumah",
      "Pilihan standard, low watt, atau inverter",
      "Unit saja atau sekalian opsi pemasangan",
    ],
    pricingIntro:
      "Estimasi paket AC 1/2 PK + pemasangan standar tersedia mulai Rp3 jutaan. Pilihan 3 jutaan, 4 jutaan, hingga 5 jutaan bergantung pada brand, tipe standard/low watt/inverter, stok, dan kebutuhan lokasi.",
    standardPackage: [
      "Pipa 2 meter",
      "Kabel 5 meter",
      "Bracket 1 set",
      "Duct tape 1 roll",
      "Selang drain",
      "Vacuum AC",
    ],
    pricingBands: [
      {
        label: "3 jutaan",
        title: "Hemat untuk kamar, kost, dan ruang kecil",
        brands: [
          "Ariston",
          "TCL",
          "Hisense Standard",
          "Midea FT / AF",
          "Sharp BEY",
          "Sansui Japan",
          "LG",
          "FLife",
          "Polytron",
          "Bestlife",
          "Akari",
          "Toshiba",
          "Modena",
          "Aqua",
        ],
        value:
          "Cocok untuk kamar, kost, kontrakan, dan ruang kecil dengan anggaran efisien. Cek ukuran ruangan, daya listrik, stok, dan titik pemasangan sebelum transaksi.",
      },
      {
        label: "4 jutaan",
        title: "Seimbang untuk rumah harian",
        brands: [
          "Hisense Inverter",
          "Midea Inverter",
          "Gree Standard",
          "Gree Low Watt",
          "Daikin STC / STP",
          "Panasonic",
          "Sansui Inverter",
          "Samsung Inverter",
          "Mitsubishi",
        ],
        value:
          "Cocok untuk pembeli yang ingin pilihan brand lebih kuat, opsi low watt atau inverter tertentu, dan kenyamanan lebih baik untuk pemakaian rutin.",
      },
      {
        label: "5 jutaan",
        title: "Inverter lebih tinggi untuk pemakaian lama",
        brands: ["Gree Inverter", "Daikin Inverter STKQ / STKE"],
        value:
          "Cocok untuk kamar utama, ruang kerja, atau pemakaian harian lebih lama yang mengejar suhu lebih stabil dan kenyamanan jangka panjang.",
      },
      {
        label: "Unit only",
        title: "Window dan portable berdasarkan stok aktif",
        brands: ["Reiwa Window", "Reiwa Portable 1 PK"],
        value:
          "Untuk kebutuhan unit khusus tanpa paket pemasangan standar. Cocok jika pembeli memang mencari window AC atau portable AC berdasarkan stok aktif.",
      },
    ],
    pricingNote:
      "Rincian harga dicek dari brand, tipe, stok, promo, area pemasangan, panjang pipa tambahan, posisi outdoor, akses lokasi, dan kebutuhan material tambahan.",
    ctaLabel: "Tanya AC 1/2 PK yang Cocok",
    waIntent: "konsultasi AC 1/2 PK",
    waCategory: "AC 1/2 PK",
  },
  {
    slug: "ac-1-pk",
    path: routes.katalogAcSatuPk,
    label: "AC 1 PK",
    title: "AC 1 PK | Cocok untuk Ruangan Berapa & Pilihan Unit — RADJA AC",
    description:
      "Konsultasi AC 1 PK untuk kamar besar, ruang kerja, ruang tamu kecil, kost, dan toko kecil. Cek ukuran ruangan, daya listrik, pilihan inverter/low watt, stok, pengiriman, dan opsi pemasangan.",
    h1: "AC 1 PK untuk kamar besar, ruang kerja, dan ruang tamu kecil",
    eyebrow: "Katalog Kapasitas",
    intro:
      "AC 1 PK sering jadi pilihan saat 1/2 PK terasa kurang untuk kamar besar, ruang kerja, ruang tamu kecil, kost premium, atau toko kecil. Kebutuhan tetap dibaca dari ukuran ruangan, tinggi plafon, paparan panas, daya listrik, dan pola pemakaian sebelum unit disarankan.",
    bestFor: [
      "Kamar utama atau kamar besar",
      "Ruang kerja pribadi",
      "Ruang tamu kecil",
      "Kost, kontrakan, atau toko kecil",
    ],
    concerns: [
      "Apakah 1 PK sudah cukup atau justru perlu 1.5 PK",
      "Daya listrik rumah dan beban perangkat lain",
      "Pilihan standard, low watt, atau inverter",
      "Stok brand dan kebutuhan pemasangan",
    ],
    useCases: [
      ["Kamar besar", "Cocok jika kamar lebih luas dari kamar kecil standar dan pintu sering tertutup.", "Kirim ukuran ruang, tinggi plafon, dan posisi panas matahari."],
      ["Ruang kerja", "Cocok untuk pemakaian lama dengan kebutuhan suhu stabil.", "Pertimbangkan inverter jika dipakai berjam-jam setiap hari."],
      ["Toko kecil", "Cocok untuk area pelanggan yang tidak terlalu luas.", "Cek bukaan pintu dan jumlah orang yang sering keluar-masuk."],
    ],
    ctaLabel: "Cek Stok AC 1 PK",
    waIntent: "cek stok AC 1 PK untuk kamar besar ruang kerja atau toko kecil",
    waCategory: "AC 1 PK",
  },
  {
    slug: "ac-1-5-pk",
    path: routes.katalogAcSatuSetengahPk,
    label: "AC 1.5 PK",
    title: "AC 1.5 PK | Untuk Ruangan Lebih Besar — RADJA AC",
    description:
      "Konsultasi AC 1.5 PK untuk ruang keluarga, kantor kecil, cafe kecil, toko, dan ruangan sekitar 18–24 m². Cek daya listrik, brand, stok, pengiriman, dan opsi pemasangan.",
    h1: "AC 1.5 PK untuk ruang keluarga, kantor kecil, cafe kecil, dan toko",
    eyebrow: "Katalog Kapasitas",
    intro:
      "AC 1.5 PK cocok saat ruangan mulai lebih besar dari kamar biasa, misalnya ruang keluarga, kantor kecil, toko, atau cafe kecil. Pilihan akhir tetap perlu membaca luas ruang, tinggi plafon, bukaan pintu, jumlah orang, daya listrik, dan jam pemakaian.",
    bestFor: [
      "Ruang keluarga",
      "Kantor kecil atau ruang meeting kecil",
      "Toko, butik, atau area pelanggan",
      "Cafe kecil dengan ruangan tertutup",
    ],
    concerns: [
      "Daya listrik dan MCB cukup atau tidak",
      "Kebisingan dan kenyamanan untuk pemakaian lama",
      "Apakah split 1.5 PK cukup atau perlu 2 PK",
      "Pilihan brand, stok, dan posisi outdoor",
    ],
    useCases: [
      ["Ruang keluarga", "Cocok untuk area harian yang lebih luas dari kamar tidur.", "Cek jumlah orang dan paparan panas siang."],
      ["Kantor kecil", "Cocok untuk ruang kerja beberapa orang atau meeting room kecil.", "Kirim perkiraan jumlah orang dan jam operasional."],
      ["Toko/cafe kecil", "Cocok untuk area pelanggan yang tertutup dan tidak terlalu sering terbuka.", "Cek bukaan pintu, panas lampu, dan jumlah pengunjung."],
    ],
    ctaLabel: "Cek Stok AC 1.5 PK",
    waIntent: "cek stok AC 1.5 PK untuk ruang keluarga kantor kecil toko atau cafe kecil",
    waCategory: "AC 1.5 PK",
  },
  {
    slug: "ac-2-pk",
    path: routes.katalogAcDuaPk,
    label: "AC 2 PK",
    title: "AC 2 PK | Untuk Ruang Keluarga, Ruko & Kantor — RADJA AC",
    description:
      "Konsultasi AC 2 PK untuk ruang tamu besar, kantor, meeting room, ruko, toko, dan kebutuhan usaha. Cek daya listrik, tipe unit, stok, pengiriman, dan opsi pemasangan.",
    h1: "AC 2 PK untuk kantor, ruko, ruang besar, dan kebutuhan usaha",
    eyebrow: "Katalog Kapasitas",
    intro:
      "AC 2 PK mulai masuk kebutuhan ruangan besar dan usaha: ruang tamu besar, kantor, meeting room, ruko, toko, atau area pelanggan. Sebelum memilih unit, perlu mengecek daya listrik, ukuran ruangan, tinggi plafon, jumlah orang, posisi outdoor, dan kebutuhan pemasangan.",
    bestFor: [
      "Ruang tamu besar",
      "Kantor dan meeting room",
      "Ruko, toko, atau showroom kecil",
      "Kebutuhan usaha dengan ruangan tertutup",
    ],
    concerns: [
      "Daya listrik dan kebutuhan jalur listrik",
      "Panjang pipa dan posisi outdoor",
      "Apakah cukup split 2 PK atau perlu cassette/komersial",
      "Anggaran unit, pemasangan, dan material tambahan",
    ],
    useCases: [
      ["Ruang tamu besar", "Cocok jika ruangan lebih luas, banyak orang, atau sering dipakai siang hari.", "Cek tinggi plafon, bukaan, dan panas matahari."],
      ["Kantor/meeting room", "Cocok untuk ruang kerja yang butuh suhu stabil.", "Kirim jumlah orang, jam operasional, dan ukuran ruang."],
      ["Ruko/toko", "Cocok untuk area usaha tertutup dengan pelanggan.", "Cek pintu sering terbuka, lampu panas, dan lokasi outdoor."],
    ],
    ctaLabel: "Cek Stok AC 2 PK",
    waIntent: "cek stok AC 2 PK untuk kantor ruko ruang besar atau usaha",
    waCategory: "AC 2 PK",
  },
  {
    slug: "ac-split-rumah",
    path: routes.katalogAcSplitRumah,
    label: "AC Split Rumah",
    title: "AC Split Rumah | Untuk Kamar, Ruang Keluarga & Rumah Tinggal — RADJA AC",
    description:
      "Konsultasi AC split rumah untuk kamar, ruang keluarga, rumah, kost, dan kontrakan. Cek kebutuhan PK, daya listrik, stok, pengiriman, dan opsi pemasangan.",
    h1: "AC split rumah untuk kamar, ruang keluarga, dan pemakaian rutin",
    eyebrow: "Katalog Rumah",
    intro:
      "AC split rumah cocok untuk kebutuhan harian seperti kamar tidur, ruang keluarga, kost, kontrakan, dan rumah tinggal. Pilihan AC dibaca dari ukuran ruangan, daya listrik, anggaran, dan pola pemakaian.",
    bestFor: [
      "Kamar tidur",
      "Ruang keluarga",
      "Rumah tinggal",
      "Kost dan kontrakan",
    ],
    concerns: [
      "PK yang sesuai dengan ukuran ruangan",
      "Daya listrik rumah",
      "Anggaran dan pilihan brand",
      "Estimasi pengiriman dan opsi pemasangan",
    ],
    ctaLabel: "Tanya AC untuk Rumah",
    waIntent: "konsultasi AC split rumah",
    waCategory: "AC Split Rumah",
  },
  {
    slug: "ac-inverter",
    path: routes.katalogAcInverter,
    label: "AC Inverter",
    title: "AC Inverter | Untuk Pemakaian Lama & Hemat Tarikan Listrik — RADJA AC",
    description:
      "Konsultasi AC inverter untuk pemakaian lama, kamar, rumah, kantor, dan kebutuhan hemat listrik. Cek ukuran ruangan, jam pemakaian, daya listrik, stok, dan opsi pemasangan.",
    h1: "AC inverter untuk pemakaian lama dan kebutuhan hemat listrik",
    eyebrow: "Katalog Tipe",
    intro:
      "AC inverter cocok untuk ruangan yang sering dipakai lama. Pilihan unit tetap dibaca dari ukuran ruangan, jam pemakaian rutin, daya listrik, anggaran, dan brand yang tersedia.",
    bestFor: [
      "Kamar dengan pemakaian lama",
      "Rumah harian",
      "Kantor",
      "Ruangan yang butuh suhu stabil",
    ],
    concerns: [
      "Jam pemakaian per hari",
      "Harga awal dibanding AC standard",
      "Daya listrik dan efisiensi",
      "Brand dan stok unit yang tersedia",
    ],
    ctaLabel: "Tanya AC Inverter",
    waIntent: "konsultasi AC inverter",
    waCategory: "AC Inverter",
  },
  {
    slug: "ac-low-watt",
    path: routes.katalogAcLowWatt,
    label: "AC Low Watt",
    title: "AC Low Watt | Untuk Daya Listrik Terbatas — RADJA AC",
    description:
      "Konsultasi AC low watt untuk rumah dengan daya listrik terbatas. Cek ukuran ruangan, daya listrik, MCB, pilihan brand, stok, pengiriman, dan opsi pemasangan.",
    h1: "AC low watt untuk rumah dengan daya listrik terbatas",
    eyebrow: "Katalog Hemat Daya",
    intro:
      "AC low watt sering dipilih untuk rumah dengan daya listrik terbatas. Ukuran ruangan, daya listrik, MCB jika diketahui, dan kebutuhan pemakaian perlu dicek agar pilihan AC tetap masuk akal.",
    bestFor: [
      "Rumah daya listrik terbatas",
      "Kamar tidur",
      "Kost atau kontrakan",
      "Ruangan kecil sampai sedang",
    ],
    concerns: [
      "Daya listrik rumah 900–1300 watt",
      "MCB sering turun atau tidak",
      "Kecocokan PK dengan ukuran ruangan",
      "Pilihan brand low watt yang tersedia",
    ],
    ctaLabel: "Tanya AC Low Watt",
    waIntent: "konsultasi AC low watt",
    waCategory: "AC Low Watt",
  },
  {
    slug: "ac-kantor-komersial",
    path: routes.katalogAcKantorKomersial,
    label: "AC Kantor & Komersial",
    title: "AC Kantor & Komersial | Untuk Usaha, Showroom & Banyak Unit — RADJA AC",
    description:
      "Konsultasi AC kantor dan komersial untuk toko, ruko, cafe, klinik, showroom, kantor, hotel, proyek, dan kebutuhan banyak unit. Cek PK, tipe unit, stok, pengiriman, dan opsi pemasangan.",
    h1: "AC kantor & komersial untuk toko, ruko, cafe, hotel, dan proyek",
    eyebrow: "Katalog Komersial",
    intro:
      "Untuk AC komersial, kirim jenis ruangan, jumlah orang, bukaan pintu, jam operasional, tinggi plafon, dan jumlah unit. Data ini dipakai untuk membaca kebutuhan PK, tipe AC, pengiriman, dan opsi pemasangan.",
    bestFor: [
      "Toko dan ruko",
      "Cafe dan restoran",
      "Klinik dan ruang tunggu",
      "Kantor, hotel, proyek, dan showroom",
    ],
    concerns: [
      "Jumlah ruang dan estimasi unit",
      "Jam operasional",
      "Tipe unit split, cassette, atau opsi komersial lain",
      "Koordinasi pengiriman dan pemasangan",
    ],
    ctaLabel: "Konsultasi AC Usaha / Kantor",
    waIntent: "konsultasi AC kantor dan komersial",
    waCategory: "AC Kantor & Komersial",
  },
];

export function getCatalogItem(slug) {
  return catalogItems.find((item) => item.slug === slug);
}
