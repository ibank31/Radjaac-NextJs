import { routes } from "@/content/routes";

export const procurementItems = [
  {
    slug: "kost-apartemen-skala-besar",
    path: routes.pengadaanKostApartemen,
    label: "Kost & Apartemen",
    title: "Pengadaan AC Kost & Apartemen | Cek PK, Stok, Pengiriman & Pemasangan",
    description:
      "Pengadaan AC untuk kost, apartemen, kontrakan, dan hunian banyak kamar, dari pembelian bertahap sampai kebutuhan banyak unit. RADJA AC mengarahkan PK per ruangan, brand, stok, pengiriman, kebutuhan pemasangan, garansi pemasangan 1 bulan, dan bantuan klaim unit sesuai ketentuan brand.",
    h1: "Pengadaan AC untuk kost, apartemen, dan hunian banyak kamar",
    eyebrow: "Pengadaan AC",
    intro:
      "Untuk kost, apartemen, kontrakan, atau hunian banyak kamar, pembelian AC perlu membaca harga unit, jumlah kamar, daya listrik, dan rencana pemasangan. Jumlah kamar, daya listrik, tipe unit, jadwal pengiriman, dan rencana pemasangan perlu dibaca lebih rapi agar pembelian banyak unit tertata di lapangan.",
    segmentContext:
      "Kost dan apartemen biasanya membutuhkan unit yang mudah dirawat, tipe relatif seragam, dan konsumsi listrik yang masuk akal. Admin RADJA AC membantu membaca kebutuhan dari jumlah kamar, ukuran ruangan, daya listrik per titik, prioritas budget, serta apakah pengiriman atau pemasangan perlu dilakukan bertahap.",
    coordinationNote:
      "Koordinasi lokasi atau survey dibahas sejak awal berdasarkan kebutuhan, jumlah unit, area, dan jadwal. admin membaca kebutuhan awal dari data ruangan dan lokasi.",
    commonNeeds: [
      "AC banyak kamar untuk kost, kontrakan, mess, atau hunian sewa",
      "Pilihan unit seragam agar perawatan dan penggantian lebih mudah",
      "Opsi standard, low watt, atau inverter sesuai daya listrik bangunan",
      "Pengiriman dan pemasangan bertahap sesuai kesiapan kamar",
    ],
    buyingChecks: [
      "Jumlah kamar siap pasang dan kamar yang menyusul",
      "Ukuran tiap kamar, tinggi plafon, dan paparan panas",
      "Daya listrik per kamar atau per lantai",
      "Target tipe unit: hemat budget, low watt, atau inverter",
      "Akses lokasi, titik outdoor, dan jadwal pekerjaan bertahap",
    ],
    suggestedLinks: [
      ["AC 1/2 PK", routes.katalogAcSetengahPk],
      ["AC Low Watt", routes.katalogAcLowWatt],
      ["AC Split Rumah", routes.katalogAcSplitRumah],
      ["Brand Gree", routes.brandGree],
      ["Brand Midea", routes.brandMidea],
    ],
    waIntent: "konsultasi pengadaan AC kost dan apartemen",
    waProjectType: "Kost / Apartemen",
  },
  {
    slug: "hotel-guest-house",
    path: routes.pengadaanHotelGuestHouse,
    label: "Hotel & Guest House",
    title: "Pengadaan AC Hotel & Guest House | Cek PK, Brand, Pengiriman & Pemasangan",
    description:
      "Pengadaan AC untuk hotel, guest house, homestay, villa, dan penginapan, termasuk kebutuhan banyak kamar. RADJA AC mengarahkan PK, brand, stok, pengiriman, kebutuhan pemasangan, garansi pemasangan 1 bulan, dan bantuan klaim unit sesuai ketentuan brand.",
    h1: "Pengadaan AC untuk hotel, guest house, homestay, dan penginapan",
    eyebrow: "Pengadaan AC",
    intro:
      "Untuk hotel, guest house, homestay, atau villa, AC berpengaruh langsung ke kenyamanan tamu. Pemilihan unit perlu mempertimbangkan ukuran kamar, tingkat kebisingan, durasi pemakaian, daya listrik, kesiapan stok, dan jadwal pekerjaan agar operasional tidak terganggu.",
    segmentContext:
      "Kebutuhan penginapan biasanya menuntut unit yang nyaman, mudah dijelaskan ke tamu bila ada maintenance, dan menjaga okupansi tetap tertata. Admin membantu menyiapkan opsi berdasarkan kategori kamar, area publik, jadwal kosong kamar, serta kebutuhan pengiriman atau pemasangan bertahap.",
    coordinationNote:
      "Koordinasi lokasi atau survey dibahas sejak awal sesuai jumlah unit, area, jadwal, dan kebutuhan proyek. Admin memulai dari data kamar, foto lokasi, atau daftar kebutuhan awal.",
    commonNeeds: [
      "AC kamar tamu hotel, guest house, homestay, atau villa",
      "AC lobby, resepsionis, ruang tunggu, dan area bersama",
      "Pilihan unit yang nyaman untuk pemakaian lama dan tamu berganti",
      "Koordinasi pekerjaan agar menjaga okupansi tetap tertata kamar",
    ],
    buyingChecks: [
      "Jumlah kamar aktif, kamar cadangan, dan area publik",
      "Ukuran kamar, posisi outdoor, dan potensi suara indoor",
      "Durasi pemakaian harian dan prioritas hemat listrik",
      "Kebutuhan tipe seragam atau kombinasi beberapa tipe",
      "Jadwal pekerjaan agar tidak bentrok dengan tamu menginap",
    ],
    suggestedLinks: [
      ["AC Inverter", routes.katalogAcInverter],
      ["AC Split Rumah", routes.katalogAcSplitRumah],
      ["AC Kantor & Komersial", routes.katalogAcKantorKomersial],
      ["Brand Daikin", routes.brandDaikin],
      ["Brand Hisense", routes.brandHisense],
    ],
    waIntent: "konsultasi pengadaan AC hotel dan guest house",
    waProjectType: "Hotel / Guest House",
  },
  {
    slug: "kontraktor-developer",
    path: routes.pengadaanKontraktorDeveloper,
    label: "Kontraktor & Developer",
    title: "Pengadaan AC Kontraktor & Developer | Cek Kebutuhan Proyek AC",
    description:
      "Pengadaan AC untuk kontraktor, developer, kantor proyek, ruko, klinik, dan kebutuhan banyak unit hingga ratusan unit. RADJA AC mengarahkan PK, brand, stok, pengiriman, kebutuhan pemasangan, garansi pemasangan 1 bulan, dan bantuan klaim unit sesuai ketentuan brand.",
    h1: "Pengadaan AC untuk kontraktor, developer, dan kebutuhan proyek",
    eyebrow: "Pengadaan AC",
    intro:
      "Untuk kontraktor, developer, dan proyek bangunan, kebutuhan AC biasanya terkait RAB, BOQ, jumlah titik, deadline pekerjaan, dan koordinasi lapangan. RADJA AC mengarahkan pilihan unit, kapasitas PK, stok, pengiriman, serta opsi pemasangan berdasarkan data proyek yang dikirim.",
    segmentContext:
      "Kebutuhan kontraktor dan developer sering membutuhkan alternatif brand sesuai budget, kesiapan unit, dan jadwal kirim. Admin dapat mulai dari daftar titik AC, ukuran ruangan, gambar sederhana, BOQ/RAB awal, atau foto lokasi untuk membantu membaca kebutuhan sebelum penawaran dibicarakan.",
    coordinationNote:
      "Koordinasi lokasi atau survey dibahas sejak awal berdasarkan kebutuhan proyek, lokasi, jumlah unit, akses pekerjaan, dan jadwal. Detail teknis tetap dikonfirmasi sebelum pembelian atau pemasangan.",
    commonNeeds: [
      "AC untuk rumah contoh, ruko, kantor, klinik, dan ruang usaha",
      "Pengadaan banyak unit berdasarkan daftar titik atau BOQ awal",
      "Alternatif brand sesuai budget, stok, dan spesifikasi proyek",
      "Koordinasi pengiriman dan pemasangan mengikuti timeline lapangan",
    ],
    buyingChecks: [
      "Jumlah titik AC, tipe ruangan, dan prioritas pekerjaan",
      "Estimasi kapasitas PK per titik berdasarkan fungsi ruang",
      "Ketersediaan daya listrik dan batasan teknis lokasi",
      "Brand pembanding untuk RAB, budget, dan kesiapan stok",
      "Akses lokasi, jadwal proyek, dan kebutuhan dokumentasi pengiriman",
    ],
    suggestedLinks: [
      ["AC Kantor & Komersial", routes.katalogAcKantorKomersial],
      ["AC Inverter", routes.katalogAcInverter],
      ["Brand Gree", routes.brandGree],
      ["Brand Daikin", routes.brandDaikin],
      ["Kontak", routes.kontak],
    ],
    waIntent: "konsultasi pengadaan AC kontraktor dan developer",
    waProjectType: "Kontraktor / Developer",
  },
];

export function getProcurementItem(slug) {
  return procurementItems.find((item) => item.slug === slug);
}
