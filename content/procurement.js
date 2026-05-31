import { routes } from "@/content/routes";

export const procurementItems = [
  {
    slug: "kost-apartemen-skala-besar",
    path: routes.pengadaanKostApartemen,
    label: "Kost & Apartemen",
    title: "Pengadaan AC Kost & Apartemen | Cek PK, Stok, Pengiriman & Pemasangan",
    description:
      "Pengadaan AC untuk kost, apartemen, kontrakan, dan hunian banyak kamar, dari pembelian bertahap sampai kebutuhan banyak unit. RADJA AC cek PK per ruangan, brand, stok, pengiriman, pemasangan, garansi pemasangan 1 bulan, dan bantuan klaim unit.",
    h1: "Pengadaan AC untuk kost, apartemen, dan hunian banyak kamar",
    eyebrow: "Pengadaan AC",
    intro:
      "Untuk kost, apartemen, kontrakan, atau hunian banyak kamar, pembelian AC perlu membaca harga unit, jumlah kamar, daya listrik, dan rencana pemasangan. Jumlah kamar, daya listrik, tipe unit, jadwal pengiriman, dan rencana pemasangan perlu dibaca lebih rapi agar pembelian banyak unit tertata di lapangan.",
    segmentContext:
      "Untuk kost dan apartemen, pilih unit yang mudah dirawat, tipenya seragam, dan konsumsi listriknya masuk akal. Admin RADJA AC membaca jumlah kamar, ukuran ruangan, daya listrik per titik, prioritas budget, serta rencana pengiriman atau pemasangan bertahap.",
    coordinationNote:
      "Koordinasi lokasi atau survey dibahas sejak awal berdasarkan kebutuhan, jumlah unit, area, dan jadwal. Admin membaca kebutuhan awal dari data ruangan dan lokasi.",
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
      "Akses lokasi, titik outdoor, timeline kebutuhan, dan jadwal pekerjaan bertahap",
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
      "Pengadaan AC untuk hotel, guest house, homestay, villa, dan penginapan. RADJA AC cek PK, brand, stok, pengiriman, pemasangan, garansi pemasangan 1 bulan, dan bantuan klaim unit.",
    h1: "Pengadaan AC untuk hotel, guest house, homestay, dan penginapan",
    eyebrow: "Pengadaan AC",
    intro:
      "Untuk hotel, guest house, homestay, atau villa, AC berpengaruh langsung ke kenyamanan tamu. Pemilihan unit perlu mempertimbangkan ukuran kamar, tingkat kebisingan, durasi pemakaian, daya listrik, kesiapan stok, dan jadwal pekerjaan agar operasional tidak terganggu.",
    segmentContext:
      "Untuk penginapan, AC harus nyaman untuk tamu dan jadwal pekerjaan tidak boleh mengganggu okupansi. Admin menyiapkan opsi dari kategori kamar, area publik, jadwal kosong kamar, dan kebutuhan pengiriman atau pemasangan bertahap.",
    coordinationNote:
      "Koordinasi lokasi atau survey dibahas sejak awal sesuai jumlah unit, area, jadwal, dan kebutuhan proyek. Kirim data kamar, foto lokasi, atau daftar kebutuhan awal.",
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
      "Timeline kebutuhan dan jadwal pekerjaan agar tidak bentrok dengan tamu menginap",
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
      "Pengadaan AC untuk kontraktor, developer, kantor proyek, ruko, klinik, dan kebutuhan banyak unit hingga ratusan unit. RADJA AC cek PK, brand, stok, pengiriman, pemasangan, garansi pemasangan 1 bulan, dan bantuan klaim unit.",
    h1: "Pengadaan AC untuk kontraktor, developer, dan kebutuhan proyek",
    eyebrow: "Pengadaan AC",
    intro:
      "Untuk kontraktor, developer, dan proyek bangunan, kebutuhan AC terkait RAB, BOQ, jumlah titik, deadline pekerjaan, dan koordinasi lapangan. RADJA AC menyusun pilihan unit, kapasitas PK, stok, pengiriman, serta pemasangan dari data proyek yang dikirim.",
    segmentContext:
      "Kebutuhan kontraktor dan developer sering membutuhkan alternatif brand sesuai budget, kesiapan unit, dan jadwal kirim. Admin mulai dari daftar titik AC, ukuran ruangan, gambar sederhana, BOQ/RAB awal, atau foto lokasi sebelum penawaran dibahas.",
    coordinationNote:
      "Koordinasi lokasi atau survey dibahas sejak awal berdasarkan kebutuhan proyek, lokasi, jumlah unit, akses pekerjaan, dan jadwal. Admin cek detail teknis sebelum pembelian atau pemasangan.",
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
