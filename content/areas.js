import { routes } from "@/content/routes";

export const areaItems = [
  {
    slug: "jual-ac-purwokerto",
    path: routes.jualAcPurwokerto,
    areaName: "Purwokerto",
    label: "Jual AC Purwokerto",
    title: "Jual AC Purwokerto | Cek Stok, Konsultasi PK & Opsi Pemasangan",
    description:
      "Jual AC Purwokerto untuk rumah, kost, toko, kantor, hotel, dan proyek. RADJA AC bantu cek stok, rekomendasi PK, pengiriman unit, opsi pemasangan, dan bantuan klaim sesuai ketentuan brand.",
    h1: "Jual AC Purwokerto original multi-brand",
    eyebrow: "Area Layanan",
    intro:
      "RADJA AC membantu pembelian AC original multi-brand untuk kebutuhan rumah, kost, usaha, kantor, hotel, dan proyek di Purwokerto. Admin bantu cek kebutuhan PK, pilihan brand, stok unit, pengiriman, dan opsi pemasangan sebelum Anda deal.",
    localContext:
      "Purwokerto menjadi area utama permintaan AC untuk rumah tinggal, kost, toko, ruko, kantor kecil, dan kebutuhan usaha. Kebutuhan tiap ruangan bisa berbeda, jadi pilihan AC sebaiknya dicek dari ukuran ruangan, daya listrik, budget, dan pola pemakaian.",
    coverageNote:
      "Area Purwokerto dan sekitarnya dilayani dari basis RADJA AC di Pamijen, Sokaraja, Banyumas. Pengiriman unit dan opsi pemasangan tetap dikonfirmasi admin sesuai alamat dan jadwal.",
    commonNeeds: [
      "AC kamar tidur dan rumah tinggal",
      "AC kost dan kontrakan",
      "AC toko, ruko, dan kantor kecil",
      "Pembelian banyak unit untuk usaha atau proyek",
    ],
    buyingChecks: [
      "Ukuran ruangan dan kebutuhan PK",
      "Daya listrik dan pilihan standard, low watt, atau inverter",
      "Brand yang tersedia dan bisa dicek stoknya",
      "Alamat pengiriman dan opsi pemasangan",
    ],
    waIntent: "konsultasi jual AC Purwokerto",
    waArea: "Purwokerto",
  },
  {
    slug: "jual-ac-banyumas",
    path: routes.jualAcBanyumas,
    areaName: "Banyumas",
    label: "Jual AC Banyumas",
    title: "Jual AC Banyumas | Cek Stok, Konsultasi PK & Opsi Pemasangan",
    description:
      "Jual AC Banyumas untuk rumah, kost, toko, kantor, hotel, dan proyek. RADJA AC bantu cek stok, rekomendasi PK, pengiriman unit, opsi pemasangan, dan bantuan klaim sesuai ketentuan brand.",
    h1: "Jual AC Banyumas original multi-brand",
    eyebrow: "Area Layanan",
    intro:
      "RADJA AC melayani konsultasi pembelian AC original multi-brand untuk area Banyumas. Mulai dari cek kebutuhan PK, pilihan brand, stok unit, pengiriman, sampai opsi pemasangan yang dikonfirmasi sebelum pembelian.",
    localContext:
      "Banyumas mencakup kebutuhan AC yang beragam: rumah, kost, toko, kantor, klinik, usaha, hingga pembelian beberapa unit. Admin membantu mengarahkan pilihan AC supaya sesuai ruangan, daya listrik, dan budget.",
    coverageNote:
      "Basis RADJA AC berada di Pamijen, Sokaraja, Banyumas. Untuk alamat di area Banyumas, pengiriman unit dan opsi pemasangan tetap dicek berdasarkan lokasi, jumlah unit, dan jadwal.",
    commonNeeds: [
      "AC rumah dan kamar tidur",
      "AC kost, kontrakan, dan homestay",
      "AC toko, klinik, dan kantor",
      "Pengadaan beberapa unit untuk usaha",
    ],
    buyingChecks: [
      "Jumlah ruangan dan estimasi PK",
      "Daya listrik dan kebutuhan hemat daya",
      "Brand utama atau brand lain sesuai stok",
      "Koordinasi pengiriman dan pemasangan",
    ],
    waIntent: "konsultasi jual AC Banyumas",
    waArea: "Banyumas",
  },
  {
    slug: "jual-ac-sokaraja",
    path: routes.jualAcSokaraja,
    areaName: "Sokaraja",
    label: "Jual AC Sokaraja",
    title: "Jual AC Sokaraja | Cek Stok, Konsultasi PK & Opsi Pemasangan",
    description:
      "Jual AC Sokaraja untuk rumah, kost, toko, kantor, hotel, dan proyek. RADJA AC bantu cek stok, rekomendasi PK, pengiriman unit, opsi pemasangan, dan bantuan klaim sesuai ketentuan brand.",
    h1: "Jual AC Sokaraja original multi-brand",
    eyebrow: "Area Basis",
    intro:
      "RADJA AC berbasis di Pamijen, Sokaraja, Banyumas dan membantu pembelian AC original multi-brand untuk kebutuhan rumah, kost, usaha, kantor, hotel, serta proyek. Admin bantu cek PK, stok, pengiriman, dan opsi pemasangan.",
    localContext:
      "Sokaraja adalah area basis RADJA AC. Pembeli bisa mulai dari konsultasi kebutuhan ruangan, cek brand yang tersedia, sampai koordinasi pengiriman dan opsi pemasangan sesuai alamat.",
    coverageNote:
      "Untuk area Sokaraja dan sekitarnya, admin tetap mengonfirmasi stok, jadwal, alamat, serta kebutuhan pemasangan sebelum pembelian supaya estimasi lebih jelas.",
    commonNeeds: [
      "AC rumah dan kamar",
      "AC kost dan kontrakan",
      "AC toko, ruko, dan kantor",
      "Kebutuhan AC banyak unit",
    ],
    buyingChecks: [
      "Ukuran ruangan dan rekomendasi PK",
      "Pilihan brand, tipe, dan stok",
      "Unit saja atau sekalian opsi pemasangan",
      "Garansi pemasangan dan garansi unit sesuai ketentuan brand",
    ],
    waIntent: "konsultasi jual AC Sokaraja",
    waArea: "Sokaraja",
  },
];

export function getAreaItem(slug) {
  return areaItems.find((item) => item.slug === slug);
}
