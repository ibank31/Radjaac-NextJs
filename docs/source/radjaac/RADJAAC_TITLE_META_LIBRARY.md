# RADJAAC_TITLE_META_LIBRARY.md

## Status

Stable source

## Fungsi Dokumen

Dokumen ini menjadi pustaka tetap untuk menulis title dan meta description semua tipe halaman Radja AC agar tidak random, tidak overclaim, dan tidak kembali terlalu lokal ke Purwokerto pada halaman yang seharusnya non-lokal. Status terkini setelah migrasi Next.js dan audit live: title, meta, canonical, dan sitemap sudah diselaraskan; halaman area memakai konteks area masing-masing. Google menjelaskan bahwa title link dapat diambil dari beberapa sumber, termasuk title element dan heading/teks visual yang paling menonjol; jika heading besar tidak selaras, Google bisa memilih atau menulis ulang title link. Meta description juga hanya merupakan saran, sehingga copy pembuka di halaman harus mendukung angle yang sama.

> Catatan sinkronisasi live: title homepage yang dipakai live (`content/static-pages.js`) adalah `Radja AC | AC Original Multi-Brand untuk Rumah, Usaha & Proyek`. Pola homepage di bawah adalah alternatif yang valid, tetapi yang live menang bila berbeda.

## Prinsip Utama

- Title harus mengikuti **satu intent utama per halaman**.
- Title, H1, dan hero copy harus selaras. Jangan sampai title non-lokal, tetapi H1/hero masih lokal keras dan akhirnya membingungkan Google.
- Brand pages dan katalog pages default-nya **non-lokal**.
- Area pages **boleh** menyebut kota target, tetapi harus memakai framing yang kuat dan jujur: cek stok, konsultasi PK, pengiriman unit, dan opsi pemasangan dari basis fisik Banyumas.
- B2B pages boleh menyebut Pulau Jawa atau kota target jika memang segment relevan, tetapi tetap hindari klaim kantor/toko fisik di kota tersebut.
- Harga boleh tampil di title/meta jika bersifat range/starting (mis. “mulai 3 jutaan”) dan benar-benar dipelihara; harga pasti yang kaku tetap dihindari.
- Meta description harus menjelaskan **apa yang user dapat jika klik**, bukan sekadar tumpukan keyword.

## Tabel Keputusan

| Page Type | Title Pattern | Meta Pattern | Contoh | Boleh Menyebut Kota? | Hindari | Catatan |
|---|---|---|---|---|---|---|
| Homepage | `Radja AC | AC Original Multi-Brand untuk Rumah, Usaha & Proyek` | `Radja AC membantu pembelian AC original multi-brand untuk rumah, kost, toko, kantor, hotel, dan proyek. Showroom dan gudang fisik di Banyumas, melayani konsultasi PK, cek stok, pengiriman unit, dan opsi pemasangan.` | `Radja AC | AC Original Multi-Brand untuk Rumah, Usaha & Proyek`<br>`Dealer AC Original Multi-Brand | Cek PK, Stok & Pengiriman Jawa — Radja AC`<br>`Dealer AC untuk Rumah, Komersial & Banyak Unit — Radja AC` | Tidak perlu | `Toko AC Purwokerto` sebagai fokus utama homepage, `termurah`, `ready semua tipe` | Title live menang. Basis Banyumas disebut sebagai bukti kuat di meta/body, bukan jadi keyword utama |
| Area page | `Jual AC {Kota} | Cek Stok, Konsultasi PK & Opsi Pemasangan — Radja AC` | `Butuh AC baru untuk area {Kota}? Radja AC bantu konsultasi PK, cek stok unit, pengiriman, dan opsi pemasangan. Showroom dan gudang fisik di Banyumas, melayani rumah, kost, toko, kantor, dan banyak unit.` | `Jual AC Yogyakarta | Cek Stok, Konsultasi PK & Opsi Pemasangan — Radja AC`<br>`Jual AC Semarang | Cek Unit, Pengiriman & Opsi Pemasangan — Radja AC`<br>`Jual AC Solo | Konsultasi PK & Pengiriman Unit AC — Radja AC`<br>`Jual AC Cilacap | Cek Stok, Harga & Opsi Pasang — Radja AC`<br>`Jual AC Kebumen | Konsultasi PK, Pengiriman & Banyak Unit — Radja AC` | Ya | `Toko AC {Kota}`, `dealer resmi {Kota}`, `showroom {Kota}` jika tidak ada bukti fisik | Aman untuk SEO kota karena service-led dan berbasis bukti, bukan fake store claim. Area page live boleh memakai judul lebih agresif seperti `Showroom Ready Stok, Cek PK & Pasang Hari Ini` selama jujur |
| Brand page | `AC {Brand} Original | Cek Stok, Tipe & Konsultasi PK — Radja AC` | `Radja AC bantu memilih AC {Brand} original sesuai ukuran ruangan, daya listrik, dan kebutuhan pemakaian. Tersedia opsi untuk rumah, usaha, dan banyak unit.` | `AC Daikin Original | Cek Stok, Tipe & Konsultasi PK — Radja AC`<br>`AC Gree Original | Cek Stok, Tipe & Konsultasi PK — Radja AC`<br>`AC Midea Original | Cek Stok, Tipe & Konsultasi PK — Radja AC`<br>`AC Panasonic Original | Cek Stok & Konsultasi PK — Radja AC` | Tidak, kecuali area-brand page khusus | `Purwokerto`, `Banyumas` sebagai inti title, `harga pasti`, `termurah` | Brand page non-lokal; untuk Gree manfaatkan trust Proshop, untuk Daikin/Midea/Hisense/Sansui manfaatkan sertifikat Authorized Dealer |
| Brand lainnya page | `Brand AC Lainnya | Cek Stok & Konsultasi Unit Original — Radja AC` | `Lihat brand AC lain yang tersedia di Radja AC. Cocok untuk kebutuhan rumah, kost, usaha, dan proyek dengan bantuan konsultasi PK, cek stok, serta pengiriman unit.` | `Brand AC Lainnya | Cek Stok & Konsultasi Unit Original — Radja AC`<br>`Pilihan Brand AC Lain | Unit Original & Konsultasi PK — Radja AC`<br>`Brand AC Selain Daikin, Gree, dan Midea — Radja AC` | Tidak | `Purwokerto & Banyumas` sebagai fokus utama, `semua brand ready` | Halaman ini navigasional, bukan untuk bersaing dengan brand utama |
| Katalog hub | `Katalog AC Original | Split, Inverter, Low Watt & Komersial — Radja AC` | `Jelajahi katalog AC Radja AC berdasarkan tipe, kebutuhan, dan kapasitas. Tersedia pilihan untuk rumah, listrik terbatas, pemakaian lama, kantor, dan pembelian banyak unit.` | `Katalog AC Original | Split, Inverter, Low Watt & Komersial — Radja AC`<br>`Katalog AC | Pilih Berdasarkan Tipe, PK & Kebutuhan — Radja AC`<br>`Katalog AC Multi-Brand | Rumah, Usaha & Proyek — Radja AC` | Tidak | `Katalog AC Purwokerto` sebagai default title | Katalog hub harus kategori-first |
| Katalog tipe AC | `AC {Tipe} | {Use Case Utama} — Radja AC` | `Cari AC {Tipe} untuk {use case}? Radja AC bantu cek stok, kebutuhan PK, daya listrik, dan opsi pemasangan sebelum Anda order.` | `AC Inverter | Untuk Pemakaian Lama & Hemat Tarikan Listrik — Radja AC`<br>`AC Low Watt | Untuk Daya Listrik Terbatas — Radja AC`<br>`AC Split Rumah | Untuk Kamar, Ruang Keluarga & Rumah Tinggal — Radja AC`<br>`AC Kantor & Komersial | Untuk Ruang Usaha, Showroom & Banyak Unit — Radja AC` | Tidak | `Purwokerto`, `termurah`, `harga fix` | Katalog tipe harus tetap non-lokal |
| Katalog kapasitas PK | `AC {Kapasitas} PK | Cocok untuk Ruangan Berapa & Pilihan Unit — Radja AC` | `Lihat pilihan AC {Kapasitas} PK untuk kebutuhan ruangan Anda. Konsultasi PK, cek stok unit, dan tanya kebutuhan pemasangan via WhatsApp.` | `AC 1/2 PK | Cocok untuk Kamar Berapa & Pilihan Unit — Radja AC`<br>`AC 1 PK | Cocok untuk Ruangan Berapa & Pilihan Unit — Radja AC`<br>`AC 1.5 PK | Untuk Ruangan Lebih Besar — Radja AC`<br>`AC 2 PK | Untuk Ruang Keluarga, Ruko & Kantor — Radja AC`<br>`AC 3–4 PK | Untuk Ruangan Besar & Kebutuhan Komersial — Radja AC` | Tidak | `harga AC {kapasitas} {kota}`, `mulai sekian juta` jika tidak dijaga | Kapasitas page harus menangkap intent sizing-komersial, bukan area |
| B2B hub | `Pengadaan AC Proyek | Rumah, Hotel, Kantor & Banyak Unit — Radja AC` | `Radja AC melayani pengadaan AC untuk kontraktor, developer, hotel, guest house, kost, apartemen, kantor, dan kebutuhan banyak unit. Konsultasi spesifikasi, stok, dan pengiriman.` | `Pengadaan AC Proyek | Rumah, Hotel, Kantor & Banyak Unit — Radja AC`<br>`Supplier AC Banyak Unit | Proyek, Hotel, Kost & Gedung — Radja AC`<br>`Pengadaan AC untuk Proyek dan Ruang Komersial — Radja AC` | Boleh `Pulau Jawa`; kota hanya bila segment-specific | `Purwokerto` sebagai keyword utama, `toko AC proyek` | B2B hub harus nasional-regional, bukan lokal sempit |
| B2B segment | `Pengadaan AC untuk {Segmen} | Cek Stok & Konsultasi Banyak Unit — Radja AC` | `Butuh AC untuk {segmen}? Radja AC bantu pemilihan unit, hitung kebutuhan PK, sinkronisasi stok, pengiriman, dan opsi pemasangan untuk banyak ruangan atau banyak unit.` | `Pengadaan AC untuk Kontraktor & Developer | Cek Stok & Konsultasi Banyak Unit — Radja AC`<br>`Pengadaan AC untuk Hotel & Guest House | Stok, Spesifikasi & Pengiriman — Radja AC`<br>`Pengadaan AC untuk Kost & Apartemen | Banyak Unit & Opsi Hemat — Radja AC` | Ya, bila city-specific child page memang dibuat | `dealer resmi {kota}`, `harga pasti proyek`, `terlengkap se-{kota}` | Fokus pada buyer concern dan scope proyek |
| Artikel edukasi | `{Judul Edukasi} | {Outcome Pra-Beli} — Radja AC` | `Pelajari {topik} sebelum beli AC. Radja AC bantu menghubungkan hasil analisis ini ke pilihan PK, tipe AC, daya listrik, stok unit, dan kebutuhan pemasangan.` | `Cara Memilih AC untuk Kamar 3x4 | Hitung PK Sebelum Beli — Radja AC`<br>`AC Inverter vs Low Watt | Pilih Sesuai Pola Pakai dan Daya — Radja AC`<br>`AC 1 PK Cocok untuk Ruangan Berapa? | Panduan Sebelum Order — Radja AC` | Umumnya tidak | `jual`, `toko`, `harga {brand} {kota}` | Artikel harus tetap edukatif agar tidak memakan money page |
| Kalkulator PK | `Kalkulator PK AC | Estimasi Kebutuhan Ruangan Sebelum Order — Radja AC` | `Gunakan kalkulator PK AC untuk memperkirakan kebutuhan awal berdasarkan ukuran ruangan. Setelah itu, lanjutkan konsultasi ke admin untuk cek stok, daya listrik, dan opsi pemasangan.` | `Kalkulator PK AC | Estimasi Kebutuhan Ruangan Sebelum Order — Radja AC`<br>`Hitung PK AC | Cek Kebutuhan Ruangan & Listrik — Radja AC`<br>`Kalkulator Kapasitas AC | Panduan Awal Sebelum Beli — Radja AC` | Tidak | `Purwokerto`, `harga`, `dealer` | Tool intent harus tetap universal |
| Kontak | `Kontak Radja AC | WhatsApp, Lokasi Banyumas & Konsultasi AC` | `Hubungi Radja AC untuk konsultasi PK, cek stok unit, dan pembelian AC original. Showroom dan stok di Banyumas, melayani area sekitar dan pengiriman ke kota-kota target.` | `Kontak Radja AC | WhatsApp, Lokasi Banyumas & Konsultasi AC`<br>`Hubungi Radja AC | Cek Stok, Konsultasi & Showroom Banyumas`<br>`Kontak Dealer AC Radja AC | WhatsApp & Lokasi Showroom` | Boleh Banyumas sebagai fakta | `kontak toko AC Semarang`, `kontak Jogja office` | Kontak boleh lokal karena ini halaman identitas fisik |
| Gallery / proof | `Gallery Radja AC | Showroom, Stok, Pengiriman & Pemasangan` | `Lihat gallery Radja AC berisi showroom, stok unit, pengiriman, dan dokumentasi pemasangan. Dipakai sebagai proof sebelum konsultasi atau pembelian banyak unit.` | `Gallery Radja AC | Showroom, Stok, Pengiriman & Pemasangan`<br>`Bukti Pengiriman & Pemasangan AC | Radja AC`<br>`Showroom, Gudang & Dokumentasi Pengiriman AC — Radja AC` | Boleh Banyumas di meta/body | `hasil kerja terbaik se-Jawa`, `proyek di semua kota` tanpa bukti | Gallery adalah aset proof yang kuat |
| Pengiriman / pemasangan proof | `Bukti Pengiriman & Pemasangan AC | Rumah, Kost & Proyek — Radja AC` | `Dokumentasi pengiriman dan pemasangan AC Radja AC untuk rumah, usaha, kost, hotel, dan pembelian banyak unit. Cocok sebagai halaman trust untuk area dan B2B pages.` | `Bukti Pengiriman & Pemasangan AC | Rumah, Kost & Proyek — Radja AC`<br>`Dokumentasi Pengiriman AC Banyak Unit — Radja AC`<br>`Bukti Pemasangan AC untuk Rumah & Usaha — Radja AC` | Boleh menyebut area jika bukti spesifik | `teknisi terbaik`, `100% paling rapi` tanpa pembuktian | Lebih baik sebagai page proof, bukan artikel berita |

## Aturan untuk Assistant/Codex

- Sebelum menulis title/meta, kunci dulu tipe halaman: homepage, area, brand, katalog, B2B, artikel, kalkulator, kontak, atau proof.
- Jika halaman bukan area page, jangan masukkan nama kota target ke title hanya demi SEO.
- Selaraskan `<title>`, H1, dan hero copy; terutama homepage dan halaman non-lokal. Google memakai beberapa sumber untuk title link, termasuk heading yang paling menonjol.
- Gunakan pola kata kerja yang mendukung lead quality: `cek stok`, `konsultasi PK`, `opsi pemasangan`, `pengiriman unit`, `banyak unit`.
- Gunakan harga di title/meta hanya bila:
  - benar-benar dipelihara,
  - bersifat range/starting,
  - dan tidak menciptakan ekspektasi palsu.
- Untuk area page, sebut basis fisik Banyumas di meta atau body sebagai bukti kuat, bukan sebagai pengganti intent kota target.
- Untuk artikel edukasi, title harus menjawab pertanyaan, bukan menjual ulang katalog.

## Jangan Dilakukan

- Jangan pakai `termurah`, `paling murah`, `nomor 1`, `terlengkap`, kecuali ada pembuktian keras dan siap dipertahankan.
- Jangan pakai `toko AC {kota}` untuk area luar yang tidak punya lokasi fisik.
- Jangan pakai `dealer resmi {kota}` bila fakta resminya hanya menunjukkan dealer/perusahaan di Banyumas.
- Jangan pakai `harga terbaru` jika halaman tidak rutin diperbarui.
- Jangan buat article title yang identik dengan money keyword katalog/brand.
- Jangan biarkan title non-lokal tetapi H1 tetap “Toko AC Purwokerto” di semua halaman.
- Jangan copy-paste meta description yang sama ke puluhan halaman.

## Contoh Implementasi

Contoh title/meta aman untuk area page:

- **Title:** `Jual AC Yogyakarta | Cek Stok, Konsultasi PK & Opsi Pemasangan — Radja AC`
- **Meta:** `Butuh AC baru untuk area Yogyakarta? Radja AC bantu konsultasi PK, cek stok unit, pengiriman, dan opsi pemasangan. Showroom dan gudang fisik di Banyumas, melayani rumah, kost, toko, kantor, dan banyak unit.`

Contoh title/meta aman untuk brand page:

- **Title:** `AC Daikin Original | Cek Stok, Tipe & Konsultasi PK — Radja AC`
- **Meta:** `Radja AC bantu memilih AC Daikin original sesuai ukuran ruangan, daya listrik, dan kebutuhan pemakaian. Tersedia opsi untuk rumah, usaha, dan banyak unit.`

Contoh title/meta aman untuk katalog kapasitas:

- **Title:** `AC 2 PK | Cocok untuk Ruangan Berapa & Pilihan Unit — Radja AC`
- **Meta:** `Lihat pilihan AC 2 PK untuk ruang keluarga besar, ruko, atau kantor. Chat admin untuk cek stok, kebutuhan daya, dan estimasi pemasangan.`
