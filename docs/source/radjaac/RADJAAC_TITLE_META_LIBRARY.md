# RADJAAC_TITLE_META_LIBRARY.md

## Status

Stable source

## Fungsi Dokumen

Dokumen ini menjadi pustaka tetap untuk menulis title dan meta description semua tipe halaman RADJA AC agar tidak random, tidak overclaim, dan tidak kembali terlalu lokal ke Purwokerto pada halaman yang seharusnya non-lokal. Catatan historis: audit publik sebelumnya pernah memperlihatkan ketidakkonsistenan heading/title yang terlalu Purwokerto-sentris. Status terkini setelah migrasi Next.js dan audit live: title, meta, canonical, dan sitemap sudah diselaraskan; halaman area memakai konteks area masing-masing. Google sendiri menjelaskan bahwa title link dapat diambil dari beberapa sumber, termasuk title element dan heading/teks visual yang paling menonjol; jika heading besar tidak selaras, Google bisa memilih atau menulis ulang title link. Meta description juga hanya merupakan saran, sehingga copy pembuka di halaman harus mendukung angle yang sama. citeturn3search2turn1view0turn2search1turn2search4turn2search9turn2search12turn2search15turn2search18turn34search1turn34search2turn20view2turn20view3

## Prinsip Utama

- Title harus mengikuti **satu intent utama per halaman**.
- Title, H1, dan hero copy harus selaras. Jangan sampai title non-lokal, tetapi H1/hero masih lokal keras dan akhirnya membingungkan Google. citeturn20view2
- Brand pages dan katalog pages default-nya **non-lokal**.
- Area pages **boleh** menyebut kota target, tetapi harus memakai framing aman: konsultasi PK, cek stok, pengiriman unit, dan opsi pemasangan.
- B2B pages boleh menyebut Pulau Jawa atau kota target jika memang segment relevan, tetapi tetap hindari klaim kantor/toko fisik di kota tersebut.
- Hindari angka harga yang kaku di title/meta kecuali benar-benar dipelihara dan sering diupdate. Audit publik menunjukkan sejumlah area page saat ini memakai pola “mulai 3 jutaan”; pola itu hanya aman bila benar-benar dijaga update-nya. citeturn24search11turn34search4turn34search10
- Meta description harus menjelaskan **apa yang user dapat jika klik**, bukan sekadar tumpukan keyword. citeturn20view3

## Tabel Keputusan

| Page Type | Title Pattern | Meta Pattern | Contoh | Boleh Menyebut Kota? | Hindari | Catatan |
|---|---|---|---|---|---|---|
| Homepage | `Dealer AC Original Multi-Brand | Cek PK, Stok & Pengiriman Jawa — RADJA AC` | `RADJA AC membantu pembelian AC original multi-brand untuk rumah, kost, toko, kantor, hotel, dan proyek. Basis di Banyumas, melayani konsultasi PK, cek stok, pengiriman unit, dan opsi pemasangan.` | `Dealer AC Original Multi-Brand | Cek PK, Stok & Pengiriman Jawa — RADJA AC`<br>`RADJA AC | AC Original Multi-Brand untuk Rumah, Usaha & Proyek`<br>`Dealer AC untuk Rumah, Komersial & Banyak Unit — RADJA AC` | Tidak perlu | `Toko AC Purwokerto` sebagai fokus utama homepage, `termurah`, `ready semua tipe` | Homepage harus non-lokal-moderat: basis Banyumas disebut di meta/body, bukan jadi keyword utama |
| Area page | `Jual AC {Kota} | Cek Stok, Konsultasi PK & Opsi Pemasangan — RADJA AC` | `Butuh AC baru untuk area {Kota}? RADJA AC bantu konsultasi PK, cek stok unit, pengiriman, dan opsi pemasangan. Basis di Banyumas, melayani rumah, kost, toko, kantor, dan banyak unit.` | `Jual AC Yogyakarta | Cek Stok, Konsultasi PK & Opsi Pemasangan — RADJA AC`<br>`Jual AC Semarang | Cek Unit, Pengiriman & Opsi Pemasangan — RADJA AC`<br>`Jual AC Solo | Konsultasi PK & Pengiriman Unit AC — RADJA AC`<br>`Jual AC Cilacap | Cek Stok, Harga & Opsi Pasang — RADJA AC`<br>`Jual AC Kebumen | Konsultasi PK, Pengiriman & Banyak Unit — RADJA AC` | Ya | `Toko AC {Kota}`, `dealer resmi {Kota}`, `showroom {Kota}` jika tidak ada bukti fisik | Aman untuk SEO kota karena service-led, bukan fake store claim |
| Brand page | `AC {Brand} Original | Cek Stok, Tipe & Konsultasi PK — RADJA AC` | `RADJA AC bantu memilih AC {Brand} original sesuai ukuran ruangan, daya listrik, dan kebutuhan pemakaian. Tersedia opsi untuk rumah, usaha, dan banyak unit.` | `AC Daikin Original | Cek Stok, Tipe & Konsultasi PK — RADJA AC`<br>`AC Gree Original | Cek Stok, Tipe & Konsultasi PK — RADJA AC`<br>`AC Midea Original | Cek Stok, Tipe & Konsultasi PK — RADJA AC`<br>`AC Panasonic Original | Cek Stok & Konsultasi PK — RADJA AC` | Tidak, kecuali area-brand page khusus | `Purwokerto`, `Banyumas` sebagai inti title, `harga pasti`, `termurah` | Audit publik menunjukkan banyak brand page masih lokal; library ini menggantikannya. citeturn2search1turn2search4turn2search9turn2search12turn2search15turn2search18⟂turn34search7 |
| Brand lainnya page | `Brand AC Lainnya | Cek Stok & Konsultasi Unit Original — RADJA AC` | `Lihat brand AC lain yang tersedia di RADJA AC. Cocok untuk kebutuhan rumah, kost, usaha, dan proyek dengan bantuan konsultasi PK, cek stok, serta pengiriman unit.` | `Brand AC Lainnya | Cek Stok & Konsultasi Unit Original — RADJA AC`<br>`Pilihan Brand AC Lain | Unit Original & Konsultasi PK — RADJA AC`<br>`Brand AC Selain Daikin, Gree, dan Midea — RADJA AC` | Tidak | `Purwokerto & Banyumas` sebagai fokus utama, `semua brand ready` | Halaman ini bersifat navigasional, bukan untuk bersaing dengan brand utama |
| Katalog hub | `Katalog AC Original | Split, Inverter, Low Watt & Komersial — RADJA AC` | `Jelajahi katalog AC RADJA AC berdasarkan tipe, kebutuhan, dan kapasitas. Tersedia pilihan untuk rumah, listrik terbatas, pemakaian lama, kantor, dan pembelian banyak unit.` | `Katalog AC Original | Split, Inverter, Low Watt & Komersial — RADJA AC`<br>`Katalog AC | Pilih Berdasarkan Tipe, PK & Kebutuhan — RADJA AC`<br>`Katalog AC Multi-Brand | Rumah, Usaha & Proyek — RADJA AC` | Tidak | `Katalog AC Purwokerto` sebagai default title | Katalog hub harus kategori-first |
| Katalog tipe AC | `AC {Tipe} | {Use Case Utama} — RADJA AC` | `Cari AC {Tipe} untuk {use case}? RADJA AC bantu cek stok, kebutuhan PK, daya listrik, dan opsi pemasangan sebelum Anda order.` | `AC Inverter | Untuk Pemakaian Lama & Hemat Tarikan Listrik — RADJA AC`<br>`AC Low Watt | Untuk Daya Listrik Terbatas — RADJA AC`<br>`AC Split Rumah | Untuk Kamar, Ruang Keluarga & Rumah Tinggal — RADJA AC`<br>`AC Kantor & Komersial | Untuk Ruang Usaha, Showroom & Banyak Unit — RADJA AC` | Tidak | `Purwokerto`, `termurah`, `harga fix` | Audit publik menunjukkan beberapa katalog masih lokal. citeturn34search1turn34search2turn34search3 |
| Katalog kapasitas PK | `AC {Kapasitas} PK | Cocok untuk Ruangan Berapa & Pilihan Unit — RADJA AC` | `Lihat pilihan AC {Kapasitas} PK untuk kebutuhan ruangan Anda. Konsultasi PK, cek stok unit, dan tanya kebutuhan pemasangan via WhatsApp.` | `AC 1/2 PK | Cocok untuk Kamar Berapa & Pilihan Unit — RADJA AC`<br>`AC 1 PK | Cocok untuk Ruangan Berapa & Pilihan Unit — RADJA AC`<br>`AC 1.5 PK | Untuk Ruangan Lebih Besar — RADJA AC`<br>`AC 2 PK | Untuk Ruang Keluarga, Ruko & Kantor — RADJA AC`<br>`AC 3–4 PK | Untuk Ruangan Besar & Kebutuhan Komersial — RADJA AC` | Tidak | `harga AC {kapasitas} {kota}`, `mulai sekian juta` jika tidak dijaga | Kapasitas page harus menangkap intent sizing-komersial, bukan area |
| B2B hub | `Pengadaan AC Proyek | Rumah, Hotel, Kantor & Banyak Unit — RADJA AC` | `RADJA AC melayani pengadaan AC untuk kontraktor, developer, hotel, guest house, kost, apartemen, kantor, dan kebutuhan banyak unit. Konsultasi spesifikasi, stok, dan pengiriman.` | `Pengadaan AC Proyek | Rumah, Hotel, Kantor & Banyak Unit — RADJA AC`<br>`Supplier AC Banyak Unit | Proyek, Hotel, Kost & Gedung — RADJA AC`<br>`Pengadaan AC untuk Proyek dan Ruang Komersial — RADJA AC` | Boleh `Pulau Jawa`; kota hanya bila segment-specific | `Purwokerto` sebagai keyword utama, `toko AC proyek` | B2B hub harus nasional-regional, bukan lokal sempit |
| B2B segment | `Pengadaan AC untuk {Segmen} | Cek Stok & Konsultasi Banyak Unit — RADJA AC` | `Butuh AC untuk {segmen}? RADJA AC bantu pemilihan unit, hitung kebutuhan PK, sinkronisasi stok, pengiriman, dan opsi pemasangan untuk banyak ruangan atau banyak unit.` | `Pengadaan AC untuk Kontraktor & Developer | Cek Stok & Konsultasi Banyak Unit — RADJA AC`<br>`Pengadaan AC untuk Hotel & Guest House | Stok, Spesifikasi & Pengiriman — RADJA AC`<br>`Pengadaan AC untuk Kost & Apartemen | Banyak Unit & Opsi Hemat — RADJA AC` | Ya, bila city-specific child page memang dibuat | `dealer resmi {kota}`, `harga pasti proyek`, `terlengkap se-{kota}` | Fokus pada buyer concern dan scope proyek |
| Artikel edukasi | `{Judul Edukasi} | {Outcome Pra-Beli} — RADJA AC` | `Pelajari {topik} sebelum beli AC. RADJA AC bantu menghubungkan hasil analisis ini ke pilihan PK, tipe AC, daya listrik, stok unit, dan kebutuhan pemasangan.` | `Cara Memilih AC untuk Kamar 3x4 | Hitung PK Sebelum Beli — RADJA AC`<br>`AC Inverter vs Low Watt | Pilih Sesuai Pola Pakai dan Daya — RADJA AC`<br>`AC 1 PK Cocok untuk Ruangan Berapa? | Panduan Sebelum Order — RADJA AC` | Umumnya tidak | `jual`, `toko`, `harga {brand} {kota}` | Artikel harus tetap edukatif agar tidak memakan money page |
| Kalkulator PK | `Kalkulator PK AC | Estimasi Kebutuhan Ruangan Sebelum Order — RADJA AC` | `Gunakan kalkulator PK AC untuk memperkirakan kebutuhan awal berdasarkan ukuran ruangan. Setelah itu, lanjutkan konsultasi ke admin untuk cek stok, daya listrik, dan opsi pemasangan.` | `Kalkulator PK AC | Estimasi Kebutuhan Ruangan Sebelum Order — RADJA AC`<br>`Hitung PK AC | Cek Kebutuhan Ruangan & Listrik — RADJA AC`<br>`Kalkulator Kapasitas AC | Panduan Awal Sebelum Beli — RADJA AC` | Tidak | `Purwokerto`, `harga`, `dealer` | Tool intent harus tetap universal |
| Kontak | `Kontak RADJA AC | WhatsApp, Lokasi Banyumas & Konsultasi AC` | `Hubungi RADJA AC untuk konsultasi PK, cek stok unit, dan pembelian AC original. Basis showroom dan stok di Banyumas, melayani area sekitar dan pengiriman ke kota-kota target.` | `Kontak RADJA AC | WhatsApp, Lokasi Banyumas & Konsultasi AC`<br>`Hubungi RADJA AC | Cek Stok, Konsultasi & Showroom Banyumas`<br>`Kontak Dealer AC RADJA AC | WhatsApp & Lokasi Showroom` | Boleh Banyumas sebagai fakta | `kontak toko AC Semarang`, `kontak Jogja office` | Kontak boleh lokal karena ini halaman identitas fisik |
| Gallery / proof | `Gallery RADJA AC | Showroom, Stok, Pengiriman & Pemasangan` | `Lihat gallery RADJA AC berisi showroom, stok unit, pengiriman, dan dokumentasi pemasangan. Dipakai sebagai proof sebelum konsultasi atau pembelian banyak unit.` | `Gallery RADJA AC | Showroom, Stok, Pengiriman & Pemasangan`<br>`Bukti Pengiriman & Pemasangan AC | RADJA AC`<br>`Showroom, Gudang & Dokumentasi Pengiriman AC — RADJA AC` | Boleh Banyumas di meta/body | `hasil kerja terbaik se-Jawa`, `proyek di semua kota` tanpa bukti | Existing gallery sudah tepat sebagai proof. citeturn28search2 |
| Pengiriman / pemasangan proof | `Bukti Pengiriman & Pemasangan AC | Rumah, Kost & Proyek — RADJA AC` | `Dokumentasi pengiriman dan pemasangan AC RADJA AC untuk rumah, usaha, kost, hotel, dan pembelian banyak unit. Cocok sebagai halaman trust untuk area dan B2B pages.` | `Bukti Pengiriman & Pemasangan AC | Rumah, Kost & Proyek — RADJA AC`<br>`Dokumentasi Pengiriman AC Banyak Unit — RADJA AC`<br>`Bukti Pemasangan AC untuk Rumah & Usaha — RADJA AC` | Boleh menyebut area jika bukti spesifik | `teknisi terbaik`, `100% paling rapi` tanpa pembuktian | Lebih baik sebagai page proof, bukan artikel berita |

## Aturan untuk Assistant/Codex

- Sebelum menulis title/meta, kunci dulu tipe halaman: homepage, area, brand, katalog, B2B, artikel, kalkulator, kontak, atau proof.
- Jika halaman bukan area page, jangan masukkan nama kota target ke title hanya demi SEO.
- Selaraskan `<title>`, H1, dan hero copy; terutama homepage dan halaman non-lokal. Google memakai beberapa sumber untuk title link, termasuk heading yang paling menonjol. citeturn20view2
- Gunakan pola kata kerja yang mendukung lead quality: `cek stok`, `konsultasi PK`, `opsi pemasangan`, `pengiriman unit`, `banyak unit`.
- Gunakan harga di title/meta hanya bila:
  - benar-benar dipelihara,
  - bersifat range/starting,
  - dan tidak menciptakan ekspektasi palsu.
- Untuk area page, sebut basis Banyumas di meta atau body sebagai fakta operasional, bukan sebagai pengganti intent kota target.
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

- **Title:** `Jual AC Yogyakarta | Cek Stok, Konsultasi PK & Opsi Pemasangan — RADJA AC`
- **Meta:** `Butuh AC baru untuk area Yogyakarta? RADJA AC bantu konsultasi PK, cek stok unit, pengiriman, dan opsi pemasangan. Basis di Banyumas, melayani rumah, kost, toko, kantor, dan banyak unit.`

Contoh title/meta aman untuk brand page:

- **Title:** `AC Daikin Original | Cek Stok, Tipe & Konsultasi PK — RADJA AC`
- **Meta:** `RADJA AC bantu memilih AC Daikin original sesuai ukuran ruangan, daya listrik, dan kebutuhan pemakaian. Tersedia opsi untuk rumah, usaha, dan banyak unit.`

Contoh title/meta aman untuk katalog kapasitas:

- **Title:** `AC 2 PK | Cocok untuk Ruangan Berapa & Pilihan Unit — RADJA AC`
- **Meta:** `Lihat pilihan AC 2 PK untuk ruang keluarga besar, ruko, atau kantor. Chat admin untuk cek stok, kebutuhan daya, dan estimasi pemasangan.`
