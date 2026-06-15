import { routes } from "@/content/routes";
import { defaultBuyingChecks } from "@/content/areas/defaults";

export const regionalAreas = [
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
      title: "Jual AC Yogyakarta untuk Kost, Guest House & Usaha — Radja AC",
      description:
        "Butuh AC untuk rumah, kost, hotel, kantor, atau proyek di Yogyakarta? Radja AC cek stok, kebutuhan PK, pengiriman unit, dan opsi pemasangan via WhatsApp.",
      h1: "Jual AC Yogyakarta untuk Kost, Guest House & Usaha",
      eyebrow: "Layanan AC Area DIY",
      intro:
        "Butuh AC di Yogyakarta untuk rumah, kost, guest house, hotel, kantor, atau usaha? Tim Radja AC cek PK, daya listrik, stok, pengiriman, dan pemasangan sebelum unit dipilih.",
      localContext:
        "Yogyakarta adalah kota pelajar dan wisata sekaligus: ada banyak kampus (UGM, UNY, dan lainnya) dengan ribuan kos mahasiswa, plus kawasan wisata seperti Malioboro dan Keraton yang penuh guest house, homestay, dan kafe. Pembeli AC di sini paling banyak pemilik kos yang ingin kamarnya cepat terisi, pengelola guest house dan homestay wisata, serta toko dan kafe. Untuk jual AC Yogyakarta, pengelola banyak kamar biasanya menanyakan stok, jadwal pengiriman, dan tahapan pembayaran (DP lalu transfer) sebelum unit dikirim dan dipasang bertahap.",
      coverageNote:
        "Showroom dan gudang Radja AC berada di Banyumas. Kebutuhan AC area Yogyakarta dilayani dengan konsultasi PK, cek stok unit, pengiriman, serta opsi pemasangan sesuai alamat, jumlah unit, dan jadwal.",
      keywordVariants: [
        "AC kamar kost",
        "AC guest house dan homestay",
        "AC cafe dan ruang usaha",
        "AC rumah tinggal dan kontrakan",
        "Banyak unit untuk bangunan sewa",
        "Cek PK dari ukuran kamar",
      ],
      nearbyAreaLinks: [
        ["Jual AC Magelang", routes.jualAcMagelang],
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
        ["Tentang Radja AC", routes.tentangKami],
        ["Kontak Radja AC", routes.kontak],
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
      title: "Jual AC Semarang untuk Ruko, Kantor, Hotel & Proyek — Radja AC",
      description:
        "Butuh AC untuk rumah, ruko, kantor, hotel, usaha, atau proyek di Semarang? Radja AC cek stok, kebutuhan PK, pengiriman unit, dan opsi pemasangan via WhatsApp.",
      h1: "Jual AC Semarang untuk Ruko, Kantor, Hotel & Proyek",
      eyebrow: "Layanan AC Area Jawa Tengah",
      intro:
        "Butuh AC untuk rumah, kantor, ruko, toko, hotel, developer, atau proyek di Semarang? Radja AC cek kebutuhan PK, stok unit, pilihan brand, pengiriman, dan opsi pemasangan dari brief yang dikirim.",
      localContext:
        "Semarang sebagai ibukota provinsi adalah pusat perkantoran, kawasan industri, dan pergudangan, dengan kebutuhan AC berskala kantor, ruang kerja, mess pekerja, dan pengadaan proyek banyak unit. Banyak permintaan datang dari perusahaan dan kontraktor yang butuh spesifikasi seragam, dokumentasi kebutuhan, dan jadwal pemasangan bertahap, sehingga tim Radja AC mulai dari rekap jumlah ruang, kapasitas per ruang, daya listrik, dan timeline pekerjaan.",
      coverageNote:
        "Showroom dan gudang Radja AC berada di Banyumas. Kebutuhan AC area Semarang dilayani dengan konsultasi PK, cek stok unit, pengiriman, serta opsi pemasangan sesuai alamat, jumlah unit, dan jadwal pekerjaan.",
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
        ["Jual AC Magelang", routes.jualAcMagelang],
        ["Jual AC Pekalongan", routes.jualAcPekalongan],
        ["Jual AC Salatiga", routes.jualAcSalatiga],
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
          "Apakah Radja AC melayani pengiriman ke Semarang dari Banyumas?",
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
        ["Tentang Radja AC", routes.tentangKami],
        ["Kontak Radja AC", routes.kontak],
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
      title: "Jual AC Solo untuk Rumah, Kost, Hotel & Usaha — Radja AC",
      description:
        "Butuh AC untuk rumah, kost, toko, kantor, hotel, atau usaha di Solo? Radja AC cek stok, kebutuhan PK, pengiriman unit, dan opsi pemasangan via WhatsApp.",
      h1: "Jual AC Solo untuk Rumah, Kost, Hotel & Usaha",
      eyebrow: "Layanan AC Area Jawa Tengah",
      intro:
        "Butuh AC di Solo untuk rumah, kost, hotel, toko, kantor, atau usaha? Tim Radja AC cek PK, daya listrik, brand, stok, pengiriman, dan pemasangan sebelum unit dipilih.",
      localContext:
        "Solo (Surakarta) adalah kota budaya dan dagang yang panas, dengan denyut dari hotel dan penginapan wisata, retail, toko batik, kuliner, kost, dan kampus. Permintaan AC banyak datang dari kamar hotel dan guest house, ruang pelanggan toko batik dan retail, resto, serta kost di sekitar kampus. Karena ruang publik dan kamar tamu dipakai lama, tim Radja AC mengecek luas ruangan, jam pemakaian, jumlah kamar, dan efisiensi sebelum memilih unit.",
      coverageNote:
        "Showroom dan gudang Radja AC berada di Banyumas. Kebutuhan AC area Solo dilayani dengan konsultasi PK, cek stok unit, pengiriman, dan opsi pemasangan sesuai lokasi, jumlah unit, serta jadwal.",
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
        ["Jual AC Magelang", routes.jualAcMagelang],
        ["Jual AC Salatiga", routes.jualAcSalatiga],
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
          "Apakah Radja AC melayani pengiriman ke Solo dari Banyumas?",
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
        ["Tentang Radja AC", routes.tentangKami],
        ["Kontak Radja AC", routes.kontak],
      ],
      ctaLabel: "Chat WhatsApp untuk cek pengiriman AC Solo",
      waIntent: "cek pengiriman dan stok AC Solo dengan data area ukuran ruangan daya listrik jumlah unit anggaran preferensi brand dan kebutuhan pemasangan",
      waArea: "Solo",
    },
  {
      slug: "jual-ac-magelang",
      path: routes.jualAcMagelang,
      areaName: "Magelang",
      localLandmarks: [
        "Candi Borobudur dan kawasan wisata sekitarnya",
        "Candi Mendut dan Pawon",
        "Gunung Tidar",
        "Akademi Militer (Akmil) Magelang",
        "Alun-alun dan pusat Kota Magelang",
      ],
      localBenefits: [
        "Homestay, guest house, dan hotel sekitar Borobudur butuh AC kamar tamu yang seragam dan nyaman saat musim kunjungan ramai",
        "Udara Magelang yang sejuk membuat banyak rumah memilih AC selektif per kamar, bukan seluruh ruangan",
        "Resto dan kafe wisata perlu ruang adem untuk rombongan pengunjung yang datang saat akhir pekan",
      ],
      localCases: [
        ["Homestay & hotel kawasan Borobudur", "Pengadaan AC kamar tamu seragam yang mudah dirawat saat okupansi wisata naik."],
        ["Rumah di kota & Mertoyudan", "AC kamar tertentu yang panas saat siang, menyesuaikan udara sejuk Magelang."],
        ["Resto & kafe wisata", "AC ruang pelanggan agar rombongan wisata betah saat akhir pekan ramai."],
      ],
      localFaq: [
        [
          "Magelang kan sejuk, rumah masih perlu AC?",
          "Banyak yang pasang selektif—kamar yang panas saat siang atau kamar anak—bukan seluruh rumah. Sebutkan ruangan dan ukurannya untuk arahan PK dan stok.",
        ],
        [
          "AC untuk homestay atau hotel dekat Borobudur, pilih apa?",
          "Kamar tamu yang dipakai menginap lebih nyaman dengan unit yang tenang dan seragam; inverter cocok bila kamar terisi hampir tiap malam. Kirim jumlah kamar dan ukurannya untuk arahan.",
        ],
        [
          "Bisa pengadaan AC banyak kamar untuk penginapan kawasan wisata Magelang?",
          "Bisa. Kirim jumlah kamar, ukuran, daya listrik, dan target musim ramai agar tim menyiapkan unit seragam, stok, pengiriman, dan opsi pemasangan bertahap.",
        ],
        [
          "Pengiriman AC ke Magelang dari Banyumas bagaimana?",
          "Showroom dan gudang Radja AC ada di Banyumas; untuk Magelang unit dikirim ke alamat lalu dipasang, dengan pembayaran DP, COD, atau transfer setelah stok dipastikan.",
        ],
      ],
      label: "Jual AC Magelang",
      title: "Jual AC Magelang untuk Penginapan, Rumah & Usaha Wisata — Radja AC",
      description:
        "Butuh AC untuk homestay, hotel, rumah, kafe, atau banyak unit di Magelang dan kawasan Borobudur? Radja AC bantu cek PK, stok, pengiriman unit, dan opsi pemasangan via WhatsApp.",
      h1: "Jual AC Magelang untuk Penginapan, Rumah & Usaha Wisata",
      eyebrow: "Area Kawasan Borobudur & Magelang",
      intro:
        "Butuh AC di Magelang untuk homestay, hotel, rumah, kafe wisata, atau banyak kamar penginapan? Tim Radja AC cek ukuran kamar, daya listrik, jumlah unit, stok, pengiriman, dan opsi pemasangan sebelum unit dipilih.",
      localContext:
        "Magelang memadukan kota berhawa sejuk di kaki Gunung Tidar dengan kawasan wisata Borobudur dan Mendut yang ramai sepanjang tahun. Permintaan AC paling banyak datang dari homestay, guest house, dan hotel di sekitar candi, resto serta kafe wisata, dan rumah di pusat kota maupun Mertoyudan. Karena udaranya relatif sejuk, banyak pemilik rumah memasang AC selektif di kamar tertentu, sedangkan penginapan justru butuh kamar tamu yang adem dan seragam saat musim kunjungan naik. Tim Radja AC mengecek jumlah kamar, ukuran ruangan, daya listrik, dan jadwal sebelum unit dikirim dari Banyumas.",
      coverageNote:
        "Showroom dan gudang Radja AC berada di Banyumas. Kebutuhan AC area Magelang dilayani dengan konsultasi PK, cek stok unit, pengiriman, dan opsi pemasangan sesuai alamat, jumlah unit, akses lokasi, dan jadwal.",
      commonNeeds: [
        "AC kamar tamu homestay, guest house, dan hotel kawasan Borobudur",
        "AC rumah tinggal dan kamar tertentu di kota Magelang dan Mertoyudan",
        "AC resto, kafe, dan ruang usaha wisata",
        "Pengadaan beberapa unit untuk penginapan atau kebutuhan banyak kamar",
      ],
      buyingChecks: [
        "Jumlah kamar atau ruangan yang akan memakai AC",
        "Ukuran ruangan, tinggi plafon, dan paparan panas saat siang",
        "Daya listrik per titik atau daya listrik total bangunan",
        "Target musim ramai, alamat Magelang, pengiriman, dan opsi pemasangan",
      ],
      paymentNote:
        "Pembayaran fleksibel bisa dikonsultasikan: DP, COD, atau transfer setelah kebutuhan unit, alamat, pengiriman, dan opsi pemasangan jelas.",
      relatedLinks: [
        ["Jual AC Yogyakarta", routes.jualAcYogyakarta],
        ["Jual AC Semarang", routes.jualAcSemarang],
        ["Pengadaan AC Hotel & Guest House", routes.pengadaanHotelGuestHouse],
        ["AC Inverter", routes.katalogAcInverter],
        ["Kalkulator PK AC", routes.kalkulatorPkAc],
        ["Katalog AC", routes.katalog],
        ["Kontak Radja AC", routes.kontak],
      ],
      ctaLabel: "Chat WhatsApp untuk cek stok AC Magelang",
      waIntent: "cek stok AC Magelang dengan data jumlah kamar ukuran ruangan daya listrik jumlah unit alamat dan kebutuhan pemasangan",
      waArea: "Magelang",
      keywordVariants: [
        "jual AC Magelang",
        "AC homestay Borobudur",
        "AC hotel dan guest house Magelang",
        "AC rumah Magelang",
        "AC kafe dan resto wisata Magelang",
        "cek stok AC Magelang",
        "pengiriman AC Magelang",
        "AC banyak unit penginapan Magelang",
      ],
      nearbyAreaLinks: [
        ["Jual AC Semarang", routes.jualAcSemarang],
        ["Jual AC Yogyakarta", routes.jualAcYogyakarta],
        ["Jual AC Solo", routes.jualAcSolo],
        ["Jual AC Purwokerto", routes.jualAcPurwokerto],
      ],
      trustBullets: [
        "Magelang dilayani dari showroom dan gudang Radja AC di Banyumas dengan pengiriman unit ke alamat.",
        "Kebutuhan AC dibaca dari jumlah kamar, ukuran ruangan, daya listrik, jumlah unit, dan stok aktif.",
        "Pengiriman dan opsi pemasangan dikonfirmasi dari data lokasi, akses pekerjaan, dan jadwal.",
        "Tanpa klaim toko atau cabang lokal; konsultasi diarahkan ke basis Radja AC di Banyumas.",
      ],
    },
  {
      slug: "jual-ac-pekalongan",
      path: routes.jualAcPekalongan,
      areaName: "Pekalongan",
      localLandmarks: [
        "Kampung Batik Kauman dan Pesindon",
        "International Batik Center (IBC)",
        "Pasar Grosir Batik Setono",
        "Jalur Pantura Pekalongan",
        "Pantai Pasir Kencana",
      ],
      localBenefits: [
        "Showroom dan toko batik yang ramai pembeli butuh ruang adem agar pengunjung betah memilih",
        "Iklim Pantura yang panas-lembap membuat AC dipakai jam panjang dan PK perlu dihitung dari luas",
        "Udara lembap mempercepat filter kotor, jadi pemilihan unit dan jadwal perawatan jadi pertimbangan",
      ],
      localCases: [
        ["Showroom & grosir batik", "AC ruang pamer dan toko grosir agar pembeli nyaman saat jam ramai."],
        ["Ruko & kantor dagang", "AC ruang kerja dan layanan dengan pemakaian jam panjang di kota panas."],
        ["Rumah pesisir", "AC kamar yang gerah karena udara Pantura, dengan pilihan sesuai daya listrik rumah."],
      ],
      localFaq: [
        [
          "AC untuk showroom atau toko batik Pekalongan yang ramai, pilih apa?",
          "Ruang pamer yang sering buka pintu dan penuh pembeli butuh kapasitas sesuai luas dan lalu lalang. Kirim ukuran toko dan jam ramai untuk perkiraan PK.",
        ],
        [
          "Pekalongan kan panas dan lembap, PK perlu lebih besar?",
          "Sering iya—beban panas pesisir membuat ruangan lebih cepat gerah, jadi kapasitas dihitung dari luas, tinggi plafon, dan bukaan. Sebutkan ukuran ruang untuk arahan.",
        ],
        [
          "AC sering dipakai seharian di toko, perawatannya bagaimana di Pekalongan?",
          "Udara lembap pesisir mempercepat filter kotor, jadi pembersihan lebih rutin membantu. Pilih kapasitas yang sesuai beban agar unit tidak bekerja terlalu keras.",
        ],
        [
          "Pengiriman AC ke Pekalongan dari Banyumas bagaimana?",
          "Unit dikirim dari gudang Banyumas ke alamat Pekalongan lalu dipasang, dengan pembayaran DP, COD, atau transfer setelah stok dipastikan.",
        ],
      ],
      label: "Jual AC Pekalongan",
      title: "Jual AC Pekalongan untuk Toko Batik, Ruko & Usaha — Radja AC",
      description:
        "Butuh AC untuk showroom batik, ruko grosir, kantor, rumah, atau banyak unit di Pekalongan? Radja AC bantu cek PK, stok, pengiriman, dan opsi pemasangan via WhatsApp.",
      h1: "Jual AC Pekalongan untuk Toko Batik, Ruko & Usaha",
      eyebrow: "Area Pantura — Kota Batik Pekalongan",
      intro:
        "Butuh AC di Pekalongan untuk showroom batik, ruko grosir, kantor, rumah, atau usaha tepi jalan? Tim Radja AC cek luas ruang, jam buka, daya listrik, stok, pengiriman, dan opsi pemasangan sebelum unit dipilih.",
      localContext:
        "Pekalongan adalah Kota Batik di jalur Pantura yang panas dan lembap, dengan denyut ekonomi dari sentra serta grosir batik, ruko dagang, dan pasar tekstil. Karena pesisir terasa gerah hampir sepanjang hari, AC banyak dipakai untuk showroom batik, ruko grosir, kantor, dan rumah. Toko batik yang ramai pembeli dan sering buka-tutup pintu butuh kapasitas yang dihitung dari luas dan lalu lalang, sementara udara lembap pesisir membuat perawatan filter perlu lebih sering. Tim Radja AC mengecek luas ruang usaha, jam buka, dan jumlah unit sebelum unit dikirim dari Banyumas.",
      coverageNote:
        "Showroom dan gudang Radja AC berada di Banyumas. Kebutuhan AC area Pekalongan dilayani dengan konsultasi PK, cek stok unit, pengiriman, dan opsi pemasangan sesuai alamat, jumlah unit, akses lokasi, dan jadwal.",
      commonNeeds: [
        "AC showroom batik, ruko grosir, dan toko di pusat dagang Pekalongan",
        "AC kantor dan ruang layanan dengan pemakaian jam panjang",
        "AC rumah dan kamar yang gerah karena udara pesisir",
        "Pengadaan beberapa unit untuk usaha, grosir, atau kebutuhan banyak unit",
      ],
      buyingChecks: [
        "Luas ruang usaha, tinggi plafon, dan jumlah pengunjung",
        "Jam buka dan beban panas pesisir",
        "Daya listrik dan kebutuhan standard, low watt, atau inverter",
        "Alamat Pekalongan, pengiriman, dan kebutuhan opsi pemasangan",
      ],
      paymentNote:
        "Pembayaran fleksibel bisa dikonsultasikan: DP, COD, atau transfer setelah kebutuhan unit, alamat, pengiriman, dan opsi pemasangan jelas.",
      relatedLinks: [
        ["Jual AC Tegal", routes.jualAcTegal],
        ["Jual AC Semarang", routes.jualAcSemarang],
        ["Pengadaan AC Kantor & Ruko", routes.pengadaanGedungKantorRuko],
        ["AC Kantor & Komersial", routes.katalogAcKantorKomersial],
        ["Kalkulator PK AC", routes.kalkulatorPkAc],
        ["Katalog AC", routes.katalog],
        ["Kontak Radja AC", routes.kontak],
        ["Memilih AC untuk Daerah Pesisir", routes.artikelMemilihAcUntukDaerahPesisir],
      ],
      ctaLabel: "Chat WhatsApp untuk cek stok AC Pekalongan",
      waIntent: "cek stok AC Pekalongan dengan data luas ruang usaha jam buka daya listrik jumlah unit alamat dan kebutuhan pemasangan",
      waArea: "Pekalongan",
      keywordVariants: [
        "jual AC Pekalongan",
        "AC toko batik Pekalongan",
        "AC ruko grosir Pekalongan",
        "AC rumah Pekalongan",
        "AC kantor Pekalongan",
        "cek stok AC Pekalongan",
        "pengiriman AC Pekalongan",
        "AC banyak unit Pekalongan",
      ],
      nearbyAreaLinks: [
        ["Jual AC Tegal", routes.jualAcTegal],
        ["Jual AC Semarang", routes.jualAcSemarang],
        ["Jual AC Purwokerto", routes.jualAcPurwokerto],
        ["Jual AC Banyumas", routes.jualAcBanyumas],
      ],
      trustBullets: [
        "Pekalongan dilayani dari showroom dan gudang Radja AC di Banyumas dengan pengiriman unit ke alamat.",
        "Kebutuhan AC dibaca dari luas ruang usaha, jam buka, daya listrik, jumlah unit, dan stok aktif.",
        "Pengiriman dan opsi pemasangan dikonfirmasi dari data lokasi, akses pekerjaan, dan jadwal.",
        "Tanpa klaim toko atau cabang lokal; konsultasi diarahkan ke basis Radja AC di Banyumas.",
      ],
    },
  {
      slug: "jual-ac-salatiga",
      path: routes.jualAcSalatiga,
      areaName: "Salatiga",
      localLandmarks: [
        "Universitas Kristen Satya Wacana (UKSW)",
        "UIN Salatiga",
        "Kaki Gunung Merbabu",
        "Jalur transit Semarang–Solo",
        "Sentra kuliner dan kafe Salatiga",
      ],
      localBenefits: [
        "Kos dan rumah sewa di sekitar UKSW dan UIN cari AC kamar hemat daya supaya kamar cepat terisi",
        "Udara Salatiga yang sejuk membuat AC dipakai selektif—kamar yang penuh saat siang atau ruang kerja",
        "Kafe dan resto yang ramai mahasiswa tetap butuh ruang adem meski kota relatif dingin",
      ],
      localCases: [
        ["Kos & rumah sewa mahasiswa", "AC kamar hemat daya tipe seragam, dipasang bertahap mengikuti hunian."],
        ["Kafe & resto sekitar kampus", "AC ruang pelanggan agar betah saat jam ramai meski kota sejuk."],
        ["Rumah & ruang kerja", "AC kamar atau ruang tertentu yang panas saat siang, bukan seluruh rumah."],
      ],
      localFaq: [
        [
          "Salatiga kan dingin, kos masih perlu AC?",
          "Kamar ber-AC tetap lebih cepat laku karena siang bisa tetap gerah. Banyak yang pilih low watt agar daya per kamar aman. Sebutkan jumlah kamar dan daya listrik total untuk cek unit dan stok.",
        ],
        [
          "AC kos dekat UKSW supaya hemat listrik, pilih apa?",
          "Untuk banyak kamar, low watt tipe seragam menjaga daya dan memudahkan perawatan. Kirim daya total bangunan dan jumlah kamar untuk arahan unit.",
        ],
        [
          "AC untuk kafe atau resto di Salatiga yang ramai mahasiswa?",
          "Ruang yang penuh saat jam makan butuh kapasitas sesuai luas dan jumlah kursi. Sebutkan ukuran ruang dan jam ramai untuk perkiraan PK.",
        ],
        [
          "Pengiriman AC ke Salatiga dari Banyumas bagaimana?",
          "Unit dikirim dari gudang Banyumas ke alamat Salatiga lalu dipasang, dengan pembayaran DP, COD, atau transfer setelah stok dipastikan.",
        ],
      ],
      label: "Jual AC Salatiga",
      title: "Jual AC Salatiga untuk Kos, Rumah & Usaha — Radja AC",
      description:
        "Butuh AC untuk kos, rumah, kafe, kantor, atau banyak kamar di Salatiga? Radja AC bantu cek PK, daya listrik, stok, pengiriman, dan opsi pemasangan via WhatsApp.",
      h1: "Jual AC Salatiga untuk Kos, Rumah & Usaha",
      eyebrow: "Area Salatiga — Koridor Semarang–Solo",
      intro:
        "Butuh AC di Salatiga untuk kos mahasiswa, rumah, kafe, kantor, atau banyak kamar sewa? Tim Radja AC cek jumlah kamar, daya listrik, ukuran ruangan, stok, pengiriman, dan opsi pemasangan sebelum unit dipilih.",
      localContext:
        "Salatiga adalah kota kecil berhawa sejuk di kaki Gunung Merbabu, dikenal sebagai kota pendidikan dengan UKSW dan UIN Salatiga serta banyak kos dan rumah sewa mahasiswa. Karena udaranya cenderung dingin, kebutuhan AC di sini selektif: kamar kos atau kafe yang penuh saat siang, ruang kerja, dan kamar tertentu di rumah. Banyak pemilik kos memasang AC agar kamar lebih cepat terisi, dengan pilihan low watt yang menyesuaikan daya listrik per kamar. Tim Radja AC mengecek jumlah kamar, daya total bangunan, dan ukuran ruangan sebelum unit dikirim dari Banyumas.",
      coverageNote:
        "Showroom dan gudang Radja AC berada di Banyumas. Kebutuhan AC area Salatiga dilayani dengan konsultasi PK, cek stok unit, pengiriman, dan opsi pemasangan sesuai alamat, jumlah unit, akses lokasi, dan jadwal.",
      commonNeeds: [
        "AC kamar kos dan rumah sewa mahasiswa sekitar UKSW dan UIN",
        "AC kamar dan ruang kerja di rumah yang panas saat siang",
        "AC kafe dan resto yang ramai mahasiswa",
        "Pengadaan beberapa unit untuk kos atau properti sewa",
      ],
      buyingChecks: [
        "Jumlah kamar kos dan daya listrik total bangunan",
        "Ukuran kamar dan paparan panas saat siang",
        "Pilihan low watt atau inverter sesuai daya",
        "Alamat Salatiga, pengiriman, dan kebutuhan opsi pemasangan",
      ],
      paymentNote:
        "Pembayaran fleksibel bisa dikonsultasikan: DP, COD, atau transfer setelah kebutuhan unit, alamat, pengiriman, dan opsi pemasangan jelas.",
      relatedLinks: [
        ["Jual AC Semarang", routes.jualAcSemarang],
        ["Jual AC Solo", routes.jualAcSolo],
        ["Pengadaan AC Kost & Apartemen", routes.pengadaanKostApartemen],
        ["AC Low Watt", routes.katalogAcLowWatt],
        ["Kalkulator PK AC", routes.kalkulatorPkAc],
        ["Katalog AC", routes.katalog],
        ["Kontak Radja AC", routes.kontak],
      ],
      ctaLabel: "Chat WhatsApp untuk cek stok AC Salatiga",
      waIntent: "cek stok AC Salatiga dengan data jumlah kamar daya listrik ukuran ruangan jumlah unit alamat dan kebutuhan pemasangan",
      waArea: "Salatiga",
      keywordVariants: [
        "jual AC Salatiga",
        "AC kos Salatiga",
        "AC kamar dekat UKSW",
        "AC rumah Salatiga",
        "AC kafe Salatiga",
        "cek stok AC Salatiga",
        "pengiriman AC Salatiga",
        "AC low watt Salatiga",
      ],
      nearbyAreaLinks: [
        ["Jual AC Semarang", routes.jualAcSemarang],
        ["Jual AC Solo", routes.jualAcSolo],
        ["Jual AC Yogyakarta", routes.jualAcYogyakarta],
        ["Jual AC Purwokerto", routes.jualAcPurwokerto],
      ],
      trustBullets: [
        "Salatiga dilayani dari showroom dan gudang Radja AC di Banyumas dengan pengiriman unit ke alamat.",
        "Kebutuhan AC dibaca dari jumlah kamar, daya listrik total, ukuran ruangan, jumlah unit, dan stok aktif.",
        "Pengiriman dan opsi pemasangan dikonfirmasi dari data lokasi, akses pekerjaan, dan jadwal.",
        "Tanpa klaim toko atau cabang lokal; konsultasi diarahkan ke basis Radja AC di Banyumas.",
      ],
    },
];
