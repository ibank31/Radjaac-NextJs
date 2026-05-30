import { routes } from "@/content/routes";

export const procurementItems = [
  {
    slug: "kost-apartemen-skala-besar",
    path: routes.pengadaanKostApartemen,
    label: "Kost & Apartemen",
    title: "Pengadaan AC Kost & Apartemen | Cek PK, Stok, Pengiriman & Pemasangan",
    description:
      "Pengadaan AC untuk kost, apartemen, kontrakan, dan hunian banyak kamar, dari pembelian bertahap sampai kebutuhan banyak unit. RADJA AC bantu cek PK per ruangan, brand, stok, pengiriman, opsi pemasangan fleksibel, garansi pemasangan 1 bulan, dan bantuan klaim unit sesuai ketentuan brand.",
    h1: "Pengadaan AC untuk kost, apartemen, dan hunian banyak kamar",
    eyebrow: "Pengadaan AC",
    intro:
      "Kebutuhan AC untuk kost, apartemen, kontrakan, atau hunian banyak kamar perlu dihitung lebih rapi daripada pembelian satu unit. RADJA AC bantu cek kebutuhan PK per ruangan, pilihan brand, stok unit, pengiriman, dan opsi pemasangan fleksibel yang bisa dibicarakan terlebih dahulu.",
    segmentContext:
      "Untuk kost dan apartemen, kebutuhan tiap kamar bisa berbeda tergantung ukuran ruangan, arah panas, jumlah penghuni, daya listrik, dan target budget. Admin membantu menyusun opsi agar pembelian banyak unit lebih jelas sebelum deal.",
    coordinationNote:
      "Koordinasi lokasi atau survey dapat dibicarakan terlebih dahulu sesuai kebutuhan, jumlah unit, area, dan jadwal. Tidak semua proyek otomatis membutuhkan survey; admin akan bantu cek kebutuhan awal dari data ruangan dan lokasi.",
    commonNeeds: [
      "AC banyak kamar untuk kost atau kontrakan",
      "AC unit seragam untuk apartemen atau hunian sewa",
      "Pilihan AC standard, low watt, atau inverter sesuai daya listrik",
      "Koordinasi pengiriman dan opsi pemasangan bertahap",
    ],
    buyingChecks: [
      "Jumlah kamar atau ruangan",
      "Ukuran tiap ruangan dan estimasi PK",
      "Daya listrik total dan kebutuhan low watt/inverter",
      "Brand yang tersedia dan bisa dicek stoknya",
      "Alamat pengiriman, akses lokasi, dan jadwal pemasangan",
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
      "Pengadaan AC untuk hotel, guest house, homestay, villa, dan penginapan, termasuk kebutuhan banyak kamar. RADJA AC bantu cek PK, brand, stok, pengiriman, opsi pemasangan fleksibel, garansi pemasangan 1 bulan, dan bantuan klaim unit sesuai ketentuan brand.",
    h1: "Pengadaan AC untuk hotel, guest house, homestay, dan penginapan",
    eyebrow: "Pengadaan AC",
    intro:
      "AC untuk hotel, guest house, homestay, atau villa harus mempertimbangkan kenyamanan tamu, ukuran kamar, durasi pemakaian, daya listrik, dan kesiapan unit. RADJA AC bantu cek kebutuhan PK, brand, stok, pengiriman, dan opsi pemasangan fleksibel sebelum pembelian.",
    segmentContext:
      "Kebutuhan penginapan biasanya bukan hanya soal jumlah unit, tapi juga konsistensi tipe, efisiensi listrik, kenyamanan kamar, dan koordinasi jadwal agar operasional tidak terganggu.",
    coordinationNote:
      "Koordinasi lokasi atau survey dapat dibicarakan terlebih dahulu sesuai jumlah unit, area, jadwal, dan kebutuhan proyek. Admin bisa mulai dari data kamar, foto lokasi, atau daftar kebutuhan awal.",
    commonNeeds: [
      "AC kamar hotel, guest house, homestay, atau villa",
      "AC area resepsionis, ruang tunggu, atau ruang bersama",
      "Pilihan inverter untuk ruangan yang sering dipakai lama",
      "Koordinasi pengiriman dan opsi pemasangan sesuai jadwal operasional",
    ],
    buyingChecks: [
      "Jumlah kamar dan area umum",
      "Ukuran ruangan dan estimasi PK",
      "Jam pemakaian harian dan kebutuhan inverter",
      "Brand, stok, dan keseragaman tipe unit",
      "Jadwal pengiriman dan opsi pemasangan",
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
      "Pengadaan AC untuk kontraktor, developer, kantor proyek, ruko, klinik, dan kebutuhan banyak unit hingga ratusan unit. RADJA AC bantu cek PK, brand, stok, pengiriman, opsi pemasangan fleksibel, garansi pemasangan 1 bulan, dan bantuan klaim unit sesuai ketentuan brand.",
    h1: "Pengadaan AC untuk kontraktor, developer, dan kebutuhan proyek",
    eyebrow: "Pengadaan AC",
    intro:
      "Untuk kontraktor, developer, dan kebutuhan proyek, pembelian AC perlu disiapkan dari jumlah unit, kapasitas PK, pilihan brand, ketersediaan stok, pengiriman, serta opsi pemasangan fleksibel. RADJA AC bantu koordinasi kebutuhan awal sebelum pembelian.",
    segmentContext:
      "Kebutuhan proyek bisa mencakup rumah contoh, ruko, klinik, kantor, ruang usaha, atau beberapa titik pemasangan. Admin membantu menyusun kebutuhan berdasarkan ruangan, jumlah unit, jadwal, dan pilihan brand yang tersedia.",
    coordinationNote:
      "Koordinasi lokasi atau survey dapat dibicarakan terlebih dahulu sesuai kebutuhan proyek, lokasi, jumlah unit, akses pekerjaan, dan jadwal. Detail teknis tetap dikonfirmasi sebelum pembelian atau pemasangan.",
    commonNeeds: [
      "AC untuk rumah proyek, ruko, kantor, klinik, atau ruang usaha",
      "Pembelian banyak unit dengan koordinasi pengiriman",
      "Pilihan brand sesuai kebutuhan proyek dan budget",
      "Opsi pemasangan yang dibicarakan berdasarkan lokasi dan jadwal",
    ],
    buyingChecks: [
      "Jumlah titik AC dan tipe ruangan",
      "Estimasi kapasitas PK per titik",
      "Ketersediaan daya listrik dan kebutuhan tipe unit",
      "Brand, stok, dan jadwal pengiriman",
      "Kebutuhan koordinasi lokasi, akses, dan opsi pemasangan",
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
