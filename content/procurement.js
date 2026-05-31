import { routes } from "@/content/routes";

export const procurementItems = [
  {
    slug: "kost-apartemen-skala-besar",
    path: routes.pengadaanKostApartemen,
    label: "Kost & Apartemen",
    title: "Pengadaan AC Kost & Apartemen | Cek PK, Stok, Pengiriman & Pemasangan",
    description:
      "Pengadaan AC untuk kost, apartemen, kontrakan, dan hunian banyak kamar. RADJA AC bantu cek PK per ruangan, opsi brand, stok, pengiriman, pemasangan bertahap, garansi pemasangan 1 bulan, dan bantuan klaim unit.",
    h1: "Pengadaan AC untuk kost, apartemen, dan hunian banyak kamar",
    eyebrow: "Pengadaan AC",
    intro:
      "Untuk kost, apartemen, kontrakan, atau hunian banyak kamar, pengadaan AC perlu membaca jumlah kamar, daya listrik, tipe unit, dan kesiapan pemasangan. Data ini membantu pembelian banyak unit lebih tertata, baik untuk kebutuhan langsung maupun pemasangan bertahap.",
    segmentContext:
      "Untuk kost dan apartemen, unit biasanya perlu mudah dirawat, tipenya seragam, dan konsumsi listriknya masuk akal. Tim RADJA AC membaca jumlah kamar, ukuran ruangan, daya listrik per titik, prioritas anggaran, serta rencana pengiriman atau pemasangan bertahap.",
    coordinationNote:
      "Koordinasi lokasi atau survey dibahas sejak awal berdasarkan jumlah unit, area, akses pekerjaan, dan jadwal. Data ruangan dan lokasi membantu proses cek kebutuhan sebelum unit dipilih.",
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
      "Untuk penginapan, AC harus nyaman untuk tamu dan jadwal pekerjaan perlu menyesuaikan okupansi. Opsi awal disusun dari kategori kamar, area publik, jadwal kamar kosong, serta kebutuhan pengiriman atau pemasangan bertahap.",
    coordinationNote:
      "Koordinasi lokasi atau survey dibahas sejak awal sesuai jumlah unit, area, jadwal, dan kebutuhan proyek. Kirim data kamar, foto lokasi, atau daftar kebutuhan awal.",
    commonNeeds: [
      "AC kamar tamu hotel, guest house, homestay, atau villa",
      "AC lobby, resepsionis, ruang tunggu, dan area bersama",
      "Pilihan unit yang nyaman untuk pemakaian lama dan tamu berganti",
      "Koordinasi pekerjaan agar tidak mengganggu okupansi kamar",
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
      "Untuk kontraktor, developer, dan proyek bangunan, kebutuhan AC biasanya terkait RAB, BOQ, jumlah titik, deadline pekerjaan, dan koordinasi lapangan. RADJA AC membantu menyusun opsi unit, kapasitas PK, stok, pengiriman, serta pemasangan dari data proyek yang dikirim.",
    segmentContext:
      "Kebutuhan kontraktor dan developer sering memerlukan alternatif brand sesuai budget, kesiapan unit, dan jadwal kirim. Proses dimulai dari daftar titik AC, ukuran ruangan, gambar sederhana, BOQ/RAB awal, atau foto lokasi sebelum penawaran dibahas.",
    coordinationNote:
      "Koordinasi lokasi atau survey dibahas sejak awal berdasarkan kebutuhan proyek, lokasi, jumlah unit, akses pekerjaan, dan jadwal. Detail teknis dicek sebelum pembelian atau pemasangan diputuskan.",
    commonNeeds: [
      "AC untuk rumah contoh, ruko, kantor, klinik, dan ruang usaha",
      "Pengadaan banyak unit berdasarkan daftar titik atau BOQ awal",
      "Alternatif brand sesuai anggaran, stok, dan spesifikasi proyek",
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
  {
    slug: "gedung-kantor-ruko",
    path: routes.pengadaanGedungKantorRuko,
    label: "Gedung, Kantor & Ruko",
    title: "Pengadaan AC Kantor, Gedung & Ruko | AC Ruko & Ruang Meeting",
    description:
      "Pengadaan AC kantor untuk gedung, ruko, ruang meeting, showroom kecil, dan ruang usaha. RADJA AC bantu cek kebutuhan PK, tipe unit, stok, pengiriman, pemasangan, dan timeline pekerjaan.",
    h1: "Pengadaan AC kantor untuk gedung, ruang meeting, dan ruko",
    eyebrow: "Pengadaan AC B2B",
    intro:
      "Untuk kantor, gedung, dan ruko, kebutuhan AC tidak cukup dilihat dari luas ruangan saja. Perlu membaca fungsi ruang, jumlah orang, tinggi plafon, posisi indoor/outdoor, jam kerja, batasan downtime, serta apakah pekerjaan perlu dilakukan bertahap atau di luar jam operasional.",
    segmentContext:
      "Segmen kantor dan ruko biasanya membutuhkan keputusan yang cepat tetapi tetap rapi secara teknis. Tim RADJA AC membantu menyusun pilihan unit dari layout ruangan, jumlah titik, kebutuhan split atau komersial ringan, kondisi plafon, dan akses pemasangan.",
    coordinationNote:
      "Kirim layout sederhana, foto ruangan, perkiraan titik indoor/outdoor, jumlah ruang, daya listrik, lokasi proyek, dan target timeline. Koordinasi pekerjaan weekend atau bertahap bisa dibahas dari data awal.",
    commonNeeds: [
      "AC untuk ruang kerja, ruang meeting, lobby kecil, dan ruang operasional",
      "AC untuk ruko, showroom kecil, klinik ringan, dan kantor usaha",
      "Pilihan split, inverter, 1.5 PK, 2 PK, atau komersial ringan sesuai fungsi ruang",
      "Koordinasi pengiriman dan opsi pemasangan agar aktivitas kantor tidak terganggu",
    ],
    buyingChecks: [
      "Luas ruangan, tinggi plafon, jumlah orang, dan fungsi tiap ruang",
      "Jumlah titik indoor dan posisi outdoor yang memungkinkan",
      "Jam operasional kantor atau ruko dan batasan downtime pekerjaan",
      "Daya listrik, jalur kabel, dan kebutuhan material tambahan",
      "Timeline kebutuhan unit, pengiriman, dan opsi pemasangan bertahap",
    ],
    suggestedLinks: [
      ["AC Kantor & Komersial", routes.katalogAcKantorKomersial],
      ["AC 2 PK", routes.katalogAcDuaPk],
      ["AC 1.5 PK", routes.katalogAcSatuSetengahPk],
      ["AC Inverter", routes.katalogAcInverter],
      ["Kalkulator PK AC", routes.kalkulatorPkAc],
      ["Brand Daikin", routes.brandDaikin],
      ["Brand Gree", routes.brandGree],
      ["Kontak", routes.kontak],
    ],
    waIntent: "konsultasi pengadaan AC kantor gedung dan ruko",
    waProjectType: "Gedung / Kantor / Ruko",
  },
  {
    slug: "cafe-resto",
    path: routes.pengadaanCafeResto,
    label: "Cafe & Resto",
    title: "AC untuk Cafe & Pengadaan AC Resto | Cek Area, Plafon & Unit",
    description:
      "AC untuk cafe, pengadaan AC resto, ruang makan, dapur bersih, dan area usaha kuliner. RADJA AC bantu cek luas area, tinggi plafon, bukaan kaca, jam operasional, stok, pengiriman, dan opsi pemasangan.",
    h1: "AC untuk cafe, pengadaan AC resto, dan ruang makan usaha kuliner",
    eyebrow: "Pengadaan AC B2B",
    intro:
      "Untuk cafe dan resto, AC perlu dibaca dari kenyamanan pelanggan, luas area, tinggi plafon, kaca besar, pintu yang sering terbuka, jam operasional, dan estetika ruangan. Opsi unit disusun lebih realistis setelah kondisi area dipahami.",
    segmentContext:
      "Cafe dan resto sering punya tantangan berbeda dari rumah: banyak orang, panas lampu, bukaan pintu, kaca besar, area semi-terbuka, dan kebutuhan tampilan rapi. Karena itu brief awal perlu memuat foto area, ukuran, plafon, jumlah titik, dan jam operasional.",
    coordinationNote:
      "Kirim foto area makan, ukuran ruangan, tinggi plafon, kondisi open/semi-open, titik indoor/outdoor yang diinginkan, lokasi usaha, dan timeline opening atau renovasi. Opsi unit dan kebutuhan pemasangan dicek dari data awal tersebut.",
    commonNeeds: [
      "AC untuk area makan, kasir, ruang tunggu, dan area pelanggan",
      "Pendinginan lebih merata untuk ruangan dengan banyak orang",
      "Pertimbangan estetika indoor, posisi outdoor, dan jalur pipa",
      "Koordinasi pekerjaan agar tidak mengganggu jam operasional cafe/resto",
    ],
    buyingChecks: [
      "Luas area, tinggi plafon, kaca besar, dan pintu yang sering terbuka",
      "Area tertutup, semi-terbuka, atau banyak bukaan",
      "Jumlah orang rata-rata, panas lampu, dan jam operasional",
      "Jumlah titik AC, posisi indoor/outdoor, dan kebutuhan estetika",
      "Timeline opening, renovasi, atau jadwal pekerjaan di luar jam ramai",
    ],
    suggestedLinks: [
      ["AC Kantor & Komersial", routes.katalogAcKantorKomersial],
      ["AC 2 PK", routes.katalogAcDuaPk],
      ["AC Inverter", routes.katalogAcInverter],
      ["Kalkulator PK AC", routes.kalkulatorPkAc],
      ["Brand Daikin", routes.brandDaikin],
      ["Brand Hisense", routes.brandHisense],
      ["Kontak", routes.kontak],
    ],
    waIntent: "konsultasi pengadaan AC cafe dan resto",
    waProjectType: "Cafe / Resto",
  },

];

export function getProcurementItem(slug) {
  return procurementItems.find((item) => item.slug === slug);
}
