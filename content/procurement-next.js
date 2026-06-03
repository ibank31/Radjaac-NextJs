import { routes } from "@/content/routes";

// PROCUREMENT NEXT DRAFT ONLY.
// Do not import this file into live app routes.
// To publish, replace content/procurement.js intentionally, run npm run check, then live check.

export const procurementItems = [
  {
    slug: "kost-apartemen-skala-besar",
    path: routes.pengadaanKostApartemen,
    label: "Kost & Apartemen",
    title: "Pengadaan AC Kost & Apartemen | Cek PK, Stok & Banyak Unit",
    description:
      "Pengadaan AC untuk kost, apartemen, kontrakan, dan hunian banyak kamar. RADJA AC bantu cek PK, daya listrik, pilihan 1/2 PK, low watt, inverter, stok, pengiriman, dan opsi pemasangan bertahap.",
    h1: "Pengadaan AC untuk kost, apartemen, dan hunian banyak kamar",
    eyebrow: "Pengadaan AC Kost & Apartemen",
    intro:
      "Untuk kost, apartemen, kontrakan, mess, atau hunian banyak kamar, pembelian AC perlu dihitung dari jumlah kamar, ukuran ruangan, daya listrik, pilihan brand, stok unit, serta rencana pengiriman atau pemasangan bertahap. RADJA AC membantu membaca kebutuhan itu sebelum unit dipilih.",
    segmentContext:
      "Kost dan apartemen biasanya membutuhkan unit yang seragam, mudah dirawat, dan konsumsi listriknya masuk akal. Kebutuhan bisa berbeda antara kost kecil, kost banyak kamar, apartemen sewa, atau hunian bertahap. Karena itu, data jumlah kamar, ukuran ruangan, daya listrik, dan prioritas anggaran perlu dikirim sejak awal.",
    coordinationNote:
      "Kirim jumlah kamar, ukuran tiap kamar, daya listrik per kamar atau per lantai, lokasi bangunan, jumlah unit yang dibutuhkan sekarang, serta apakah pengiriman atau opsi pemasangan dilakukan sekaligus atau bertahap. Tim RADJA AC akan membantu cek pilihan AC 1/2 PK, low watt, standard, atau inverter sesuai kebutuhan.",
    commonNeeds: [
      "AC 1/2 PK untuk kamar kost, kontrakan, mess, dan hunian sewa",
      "Pilihan low watt atau standard untuk bangunan dengan daya listrik terbatas",
      "Pilihan inverter untuk kamar yang dipakai lama atau kelas hunian lebih premium",
      "Pengiriman banyak unit dan opsi pemasangan bertahap sesuai kesiapan kamar",
      "Alternatif brand seperti Gree, Midea, Hisense, Daikin, Sharp, Samsung, dan lainnya sesuai stok aktif",
    ],
    buyingChecks: [
      "Jumlah kamar aktif, kamar cadangan, dan kamar yang akan menyusul",
      "Ukuran tiap kamar, tinggi plafon, paparan panas, dan posisi outdoor",
      "Daya listrik per kamar, per lantai, atau total bangunan",
      "Target tipe unit: hemat anggaran, low watt, standard, atau inverter",
      "Alamat pengiriman, akses lokasi, timeline kebutuhan, dan kebutuhan opsi pemasangan bertahap",
    ],
    suggestedLinks: [
      ["AC 1/2 PK", routes.katalogAcSetengahPk],
      ["AC Low Watt", routes.katalogAcLowWatt],
      ["AC Inverter", routes.katalogAcInverter],
      ["AC Split Rumah", routes.katalogAcSplitRumah],
      ["Brand Gree", routes.brandGree],
      ["Brand Midea", routes.brandMidea],
      ["Bukti Pengiriman & Proyek", routes.buktiPengirimanProyek],
      ["Kontak", routes.kontak],
    ],
    waIntent: "kirim data jumlah kamar kost apartemen daya listrik jumlah unit lokasi dan kebutuhan pemasangan",
    waProjectType: "Kost / Apartemen",
  },
  {
    slug: "hotel-guest-house",
    path: routes.pengadaanHotelGuestHouse,
    label: "Hotel & Guest House",
    title: "Pengadaan AC Hotel & Guest House | Cek Kamar, Lobby & Brand",
    description:
      "Pengadaan AC untuk hotel, guest house, homestay, villa, dan penginapan. RADJA AC bantu cek kebutuhan kamar tamu, lobby, ruang makan, meeting room, brand, stok, pengiriman, dan opsi pemasangan.",
    h1: "Pengadaan AC untuk hotel, guest house, homestay, dan penginapan",
    eyebrow: "Pengadaan AC Hospitality",
    intro:
      "Untuk hotel, guest house, homestay, villa, atau penginapan, AC berpengaruh langsung ke kenyamanan tamu. Pemilihan unit perlu memperhatikan ukuran kamar, tingkat kebisingan, durasi pemakaian, area publik, daya listrik, stok, dan jadwal pekerjaan agar operasional tidak terganggu.",
    segmentContext:
      "Kebutuhan penginapan tidak hanya kamar tamu. Area seperti lobby, resepsionis, ruang makan, meeting room, ruang tunggu, dan area staff bisa membutuhkan pendekatan berbeda. Tim RADJA AC membaca kategori ruangan, jam pemakaian, prioritas kenyamanan, serta opsi brand sebelum menyarankan unit.",
    coordinationNote:
      "Kirim jumlah kamar, tipe kamar, ukuran ruangan, area publik yang perlu AC, jadwal kamar kosong, lokasi penginapan, preferensi brand, dan kebutuhan unit saja atau opsi pemasangan. Data ini membantu proses cek PK, stok, pengiriman, dan jadwal pekerjaan lebih rapi.",
    commonNeeds: [
      "AC kamar tamu hotel, guest house, homestay, villa, dan penginapan",
      "AC lobby, resepsionis, ruang tunggu, ruang makan, dan meeting room",
      "Pilihan inverter atau unit yang nyaman untuk durasi pemakaian panjang",
      "Kombinasi tipe AC untuk kamar, area publik, dan ruang pendukung",
      "Koordinasi pengiriman dan opsi pemasangan agar tidak mengganggu okupansi",
    ],
    buyingChecks: [
      "Jumlah kamar aktif, tipe kamar, dan area publik yang perlu pendinginan",
      "Ukuran kamar, tinggi plafon, posisi indoor/outdoor, dan potensi suara",
      "Durasi pemakaian harian, prioritas hemat listrik, dan kenyamanan tamu",
      "Kebutuhan tipe seragam atau kombinasi beberapa tipe dan brand",
      "Timeline pengiriman, jadwal kamar kosong, dan opsi pekerjaan bertahap",
    ],
    suggestedLinks: [
      ["AC Inverter", routes.katalogAcInverter],
      ["AC Kantor & Komersial", routes.katalogAcKantorKomersial],
      ["AC Split Rumah", routes.katalogAcSplitRumah],
      ["Brand Daikin", routes.brandDaikin],
      ["Brand Gree", routes.brandGree],
      ["Brand Hisense", routes.brandHisense],
      ["Bukti Pengiriman & Proyek", routes.buktiPengirimanProyek],
      ["Kontak", routes.kontak],
    ],
    waIntent: "kirim data kamar hotel guest house area lobby jumlah unit lokasi dan kebutuhan pemasangan",
    waProjectType: "Hotel / Guest House",
  },
  {
    slug: "kontraktor-developer",
    path: routes.pengadaanKontraktorDeveloper,
    label: "Kontraktor & Developer",
    title: "Pengadaan AC Kontraktor & Developer | Cek BOQ, Stok & Proyek",
    description:
      "Pengadaan AC untuk kontraktor, developer, proyek bangunan, ruko, rumah contoh, klinik, kantor proyek, dan banyak unit. RADJA AC bantu cek BOQ, RAB, PK, brand, stok, pengiriman, dan opsi pemasangan.",
    h1: "Pengadaan AC untuk kontraktor, developer, dan kebutuhan proyek",
    eyebrow: "Pengadaan AC Proyek",
    intro:
      "Untuk kontraktor, developer, dan proyek bangunan, kebutuhan AC biasanya terkait daftar titik, RAB, BOQ, spesifikasi brand, deadline, stok, pengiriman, dan koordinasi lapangan. RADJA AC membantu membaca data proyek sebelum opsi unit, kapasitas PK, dan jadwal pengiriman dibahas.",
    segmentContext:
      "Kebutuhan kontraktor dan developer sering memerlukan alternatif brand sesuai anggaran, kesiapan unit, dan jadwal proyek. Proses bisa dimulai dari daftar titik AC, ukuran ruangan, gambar sederhana, BOQ/RAB awal, foto lokasi, atau timeline pekerjaan.",
    coordinationNote:
      "Kirim daftar unit, BOQ/RAB awal bila ada, tipe ruangan, ukuran ruangan, jumlah titik, lokasi proyek, target pengiriman, dan apakah butuh unit saja atau opsi pemasangan. Tim RADJA AC akan membantu cek PK, stok, alternatif brand, dan skema pengiriman bertahap bila diperlukan.",
    commonNeeds: [
      "AC untuk rumah contoh, cluster, ruko, kantor proyek, klinik, dan ruang usaha",
      "Pengadaan banyak unit berdasarkan daftar titik, BOQ, atau RAB awal",
      "Alternatif brand sesuai anggaran, stok, spesifikasi, dan kebutuhan proyek",
      "Pengiriman unit bertahap mengikuti timeline lapangan",
      "Koordinasi unit saja atau opsi pemasangan sesuai kondisi lokasi dan jadwal",
    ],
    buyingChecks: [
      "Jumlah titik AC, fungsi ruangan, ukuran ruangan, dan prioritas pekerjaan",
      "Estimasi kapasitas PK per titik berdasarkan fungsi ruang dan panas ruangan",
      "Ketersediaan daya listrik, akses lokasi, dan batasan teknis pekerjaan",
      "Brand pembanding untuk RAB, anggaran, stok, dan kebutuhan spesifikasi",
      "Timeline proyek, target pengiriman, dan kebutuhan dokumentasi pengiriman",
    ],
    suggestedLinks: [
      ["AC Kantor & Komersial", routes.katalogAcKantorKomersial],
      ["AC Inverter", routes.katalogAcInverter],
      ["Brand Gree", routes.brandGree],
      ["Brand Daikin", routes.brandDaikin],
      ["Brand Midea", routes.brandMidea],
      ["Bukti Pengiriman & Proyek", routes.buktiPengirimanProyek],
      ["Tentang RADJA AC", routes.tentangKami],
      ["Kontak", routes.kontak],
    ],
    waIntent: "kirim daftar unit BOQ RAB proyek lokasi timeline pengiriman dan kebutuhan pemasangan",
    waProjectType: "Kontraktor / Developer",
  },
  {
    slug: "gedung-kantor-ruko",
    path: routes.pengadaanGedungKantorRuko,
    label: "Gedung, Kantor & Ruko",
    title: "Pengadaan AC Kantor, Gedung & Ruko | Cek Layout, PK & Unit",
    description:
      "Pengadaan AC kantor untuk gedung, ruko, ruang meeting, showroom kecil, klinik ringan, dan ruang usaha. RADJA AC bantu cek layout, PK, tipe unit, stok, pengiriman, dan opsi pemasangan.",
    h1: "Pengadaan AC kantor untuk gedung, ruang meeting, dan ruko",
    eyebrow: "Pengadaan AC Kantor & Ruko",
    intro:
      "Untuk kantor, gedung, dan ruko, kebutuhan AC tidak cukup dilihat dari luas ruangan saja. Fungsi ruang, jumlah orang, tinggi plafon, posisi indoor/outdoor, jam kerja, area pelanggan, dan batasan downtime ikut menentukan pilihan unit yang lebih masuk akal.",
    segmentContext:
      "Kantor dan ruko bisa memiliki ruang kerja harian, meeting room, lobby kecil, area pelanggan, ruang admin, ruang perangkat ringan, atau showroom kecil. Tim RADJA AC membantu menyusun pilihan split, inverter, 1.5 PK, 2 PK, atau komersial ringan sesuai layout dan kebutuhan.",
    coordinationNote:
      "Kirim layout sederhana, foto ruangan, ukuran ruang, tinggi plafon, jumlah orang, jam operasional, titik indoor/outdoor yang memungkinkan, daya listrik, lokasi, dan target timeline. Koordinasi pekerjaan bertahap atau di luar jam operasional bisa dibahas dari data awal.",
    commonNeeds: [
      "AC untuk ruang kerja, ruang meeting, lobby kecil, ruang admin, dan ruang operasional",
      "AC untuk ruko, showroom kecil, klinik ringan, dan kantor usaha",
      "Pilihan split, inverter, 1.5 PK, 2 PK, atau komersial ringan sesuai fungsi ruang",
      "Pertimbangan jam operasional, jumlah orang, panas perangkat, dan area pelanggan",
      "Koordinasi pengiriman dan opsi pemasangan agar aktivitas kantor tidak terganggu",
    ],
    buyingChecks: [
      "Luas ruangan, tinggi plafon, jumlah orang, dan fungsi tiap ruang",
      "Jumlah titik indoor dan posisi outdoor yang memungkinkan",
      "Jam operasional kantor atau ruko dan batasan downtime pekerjaan",
      "Daya listrik, jalur kabel, pipa, drain, dan kebutuhan material tambahan",
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
      ["Bukti Pengiriman & Proyek", routes.buktiPengirimanProyek],
      ["Kontak", routes.kontak],
    ],
    waIntent: "kirim layout kantor ruko ukuran ruang jumlah orang jam operasional lokasi dan kebutuhan pemasangan",
    waProjectType: "Gedung / Kantor / Ruko",
  },
  {
    slug: "cafe-resto",
    path: routes.pengadaanCafeResto,
    label: "Cafe & Resto",
    title: "AC untuk Cafe & Resto | Cek Area, Plafon, Kaca & Jam Operasional",
    description:
      "AC untuk cafe, resto, ruang makan, kasir, area pelanggan, dapur bersih, dan usaha kuliner. RADJA AC bantu cek luas area, plafon, kaca, bukaan pintu, stok, pengiriman, dan opsi pemasangan.",
    h1: "AC untuk cafe, pengadaan AC resto, dan ruang makan usaha kuliner",
    eyebrow: "Pengadaan AC Cafe & Resto",
    intro:
      "Untuk cafe dan resto, AC perlu dibaca dari kenyamanan pelanggan, luas area, tinggi plafon, kaca besar, pintu yang sering terbuka, panas lampu, jumlah orang, jam operasional, dan estetika ruangan. Opsi unit disusun lebih realistis setelah kondisi area dipahami.",
    segmentContext:
      "Cafe dan resto sering punya tantangan berbeda dari rumah: banyak orang, panas lampu, bukaan pintu, kaca besar, area semi-terbuka, dan kebutuhan tampilan indoor yang rapi. Karena itu brief awal perlu memuat foto area, ukuran ruangan, plafon, jumlah titik, dan jam operasional.",
    coordinationNote:
      "Kirim foto area makan, ukuran ruangan, tinggi plafon, kondisi tertutup atau semi-terbuka, titik indoor/outdoor yang diinginkan, jumlah kursi atau kapasitas pengunjung, lokasi usaha, dan timeline opening atau renovasi. Opsi unit dan kebutuhan pemasangan dicek dari data awal tersebut.",
    commonNeeds: [
      "AC untuk area makan, kasir, ruang tunggu, dan area pelanggan",
      "Pendinginan lebih merata untuk ruangan dengan banyak orang dan jam operasional panjang",
      "Pertimbangan kaca besar, pintu sering terbuka, panas lampu, dan area semi-terbuka",
      "Pilihan split, inverter, 2 PK, atau komersial ringan sesuai luas dan plafon",
      "Koordinasi pekerjaan agar tidak mengganggu jam operasional cafe atau resto",
    ],
    buyingChecks: [
      "Luas area, tinggi plafon, kaca besar, dan pintu yang sering terbuka",
      "Area tertutup, semi-terbuka, atau banyak bukaan",
      "Jumlah orang rata-rata, panas lampu, dan jam operasional",
      "Jumlah titik AC, posisi indoor/outdoor, jalur pipa, dan kebutuhan estetika",
      "Timeline opening, renovasi, atau jadwal pekerjaan di luar jam ramai",
    ],
    suggestedLinks: [
      ["AC Kantor & Komersial", routes.katalogAcKantorKomersial],
      ["AC 2 PK", routes.katalogAcDuaPk],
      ["AC Inverter", routes.katalogAcInverter],
      ["Kalkulator PK AC", routes.kalkulatorPkAc],
      ["Brand Daikin", routes.brandDaikin],
      ["Brand Gree", routes.brandGree],
      ["Brand Hisense", routes.brandHisense],
      ["Bukti Pengiriman & Proyek", routes.buktiPengirimanProyek],
      ["Kontak", routes.kontak],
    ],
    waIntent: "kirim data cafe resto luas area plafon kaca jam operasional lokasi dan kebutuhan pemasangan",
    waProjectType: "Cafe / Resto",
  },

];

export function getProcurementItem(slug) {
  return procurementItems.find((item) => item.slug === slug);
}
