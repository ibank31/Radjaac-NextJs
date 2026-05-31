import { routes } from "@/content/routes";

export const catalogItems = [
  {
    slug: "ac-1-2-pk",
    path: routes.katalogAcSetengahPk,
    label: "AC 1/2 PK",
    title: "AC 1/2 PK | Konsultasi Kamar, Kost, Cek Stok & Pemasangan",
    description:
      "Konsultasi AC 1/2 PK untuk kamar, kost, ruang kerja, dan kebutuhan rumah. RADJA AC mengarahkan ukuran ruangan, daya listrik, stok unit, pengiriman, dan opsi pemasangan.",
    h1: "AC 1/2 PK untuk kamar, kost, dan ruang kerja",
    eyebrow: "Katalog Kapasitas",
    intro:
      "AC 1/2 PK biasanya dipertimbangkan untuk ruangan compact. Sebelum memilih unit, ukuran ruangan, tinggi plafon, arah panas, jumlah orang, dan daya listrik tetap perlu dicek agar pilihan tidak kurang sesuai atau terlalu boros.",
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
      "Free selang drain",
      "Free vacuum",
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
          "Cocok untuk kamar, kost, kontrakan, dan ruang kecil dengan budget efisien. Cek ukuran ruangan, daya listrik, stok, dan titik pemasangan sebelum deal.",
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
      "Harga final dikonfirmasi admin sesuai brand, tipe, stok, promo, area pemasangan, panjang pipa tambahan, posisi outdoor, akses lokasi, dan kebutuhan material tambahan.",
    ctaLabel: "Tanya AC 1/2 PK yang Cocok",
    waIntent: "konsultasi AC 1/2 PK",
    waCategory: "AC 1/2 PK",
  },
  {
    slug: "ac-split-rumah",
    path: routes.katalogAcSplitRumah,
    label: "AC Split Rumah",
    title: "AC Split Rumah | Konsultasi AC Kamar, Ruang Keluarga & Rumah",
    description:
      "Konsultasi AC split rumah untuk kamar, ruang keluarga, rumah, kost, dan kontrakan. Cek kebutuhan PK, daya listrik, stok, pengiriman, dan opsi pemasangan.",
    h1: "AC split rumah untuk kamar, ruang keluarga, dan pemakaian rutin",
    eyebrow: "Katalog Rumah",
    intro:
      "AC split rumah cocok untuk kebutuhan harian seperti kamar tidur, ruang keluarga, kost, kontrakan, dan rumah tinggal. Admin RADJA AC bantu arahkan kategori AC dari ukuran ruangan, daya listrik, budget, dan pola pemakaian.",
    bestFor: [
      "Kamar tidur",
      "Ruang keluarga",
      "Rumah tinggal",
      "Kost dan kontrakan",
    ],
    concerns: [
      "PK yang sesuai dengan ukuran ruangan",
      "Daya listrik rumah",
      "Budget dan pilihan brand",
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
    title: "AC Inverter | Konsultasi Pemakaian Lama, Hemat Listrik & Stok",
    description:
      "Konsultasi AC inverter untuk pemakaian lama, kamar, rumah, kantor, dan kebutuhan hemat listrik. Cek ukuran ruangan, jam pemakaian, daya listrik, stok, dan opsi pemasangan.",
    h1: "AC inverter untuk pemakaian lama dan kebutuhan hemat listrik",
    eyebrow: "Katalog Tipe",
    intro:
      "AC inverter biasanya dipertimbangkan untuk ruangan yang sering dipakai lama. Pilihan tetap perlu disesuaikan dengan ukuran ruangan, jam pemakaian rutin, daya listrik, budget, dan brand yang tersedia.",
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
    title: "AC Low Watt | Konsultasi Daya Listrik 900–1300 Watt & Stok",
    description:
      "Konsultasi AC low watt untuk rumah dengan daya listrik terbatas. Cek ukuran ruangan, daya listrik, MCB, pilihan brand, stok, pengiriman, dan opsi pemasangan.",
    h1: "AC low watt untuk rumah dengan daya listrik terbatas",
    eyebrow: "Katalog Hemat Daya",
    intro:
      "AC low watt sering dipilih untuk rumah dengan daya listrik terbatas. Admin perlu mengecek ukuran ruangan, daya listrik, MCB jika diketahui, dan kebutuhan pemakaian agar pilihan AC tetap masuk akal.",
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
    title: "AC Kantor & Komersial | Konsultasi Toko, Ruko, Cafe, Kantor & Proyek",
    description:
      "Konsultasi AC kantor dan komersial untuk toko, ruko, cafe, klinik, showroom, kantor, hotel, proyek, dan kebutuhan banyak unit. Cek PK, tipe unit, stok, pengiriman, dan opsi pemasangan.",
    h1: "AC kantor dan komersial untuk toko, ruko, cafe, klinik, showroom, kantor, hotel, dan proyek",
    eyebrow: "Katalog Komersial",
    intro:
      "Kebutuhan AC komersial biasanya perlu membaca PK, jenis ruangan, dan pola pemakaian. Jenis ruangan, jumlah orang, bukaan pintu, jam operasional, plafon, dan jumlah unit perlu dipertimbangkan sejak awal.",
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
