# Current Repo Status Note

Blueprint ini tetap relevan, tetapi template area aktif sudah berkembang jauh. Halaman area live terbaru (mis. Purwokerto, Banyumas, Sokaraja, Yogyakarta, Semarang, Solo, dan child Sumbang/Kedungbanteng/Kalibagor) kini memakai lapisan konten lokal unik + cluster, bukan lagi pola swap nama kota.

Field/elemen aktif yang harus diperhitungkan sekarang:

- `localContext` — paragraf konteks lokal unik (geografi, ekonomi, iklim, tipe pembeli). WAJIB, bukan template.
- `localLandmarks` — minimal 5 landmark nyata, dirender sebagai chip “Landmark & titik lokal”.
- `localBenefits` — minimal 3 alasan spesifik kenapa kebutuhan AC muncul di area itu.
- `localCases` — minimal 3 use case `[judul, detail]` nyata.
- `clusterType` — `residential | trade | industrial | education | hospitality | urban`. Dipetakan di `areaClusterMap` (`content/areas/cluster-map.js`) atau di-set langsung pada item; dipakai `resolveAreaContent()` di `content/area-content-templates.js` untuk buyerGuide + clusterFaq.
- `localFaq` — FAQ berbasis lokasi (lihat aturan FAQ yang diperbarui di bawah).
- `keywordVariants` (semantik + entity lokal), `nearbyAreaLinks`, `trustBullets`, `paymentNote`
- `eyebrow` reposisi lokal (mis. “Jalur Banyumas - Sokaraja”, “Area Banyumas Utara / Timur”)
- trust/payment section, hero chips termasuk `COD / DP / Transfer`
- WA source/intent/area
- sitemap dan live 200

Renderer (`app/[slug]/page.js`) TIDAK merender `commonNeeds` dan `buyingChecks`; keduanya hanya data perencanaan. Yang tampil ke user adalah field di atas.

Untuk checklist operasional terbaru, baca `docs/RADJA_WORKFLOW.md`.
Untuk arah ekspansi area, baca `docs/RADJA_GROWTH_STRATEGY.md`.

> Catatan FAQ (memperbarui baris “FAQ wajib” di tabel bawah): JANGAN memakai FAQ generik seperti “Apakah Radja AC punya toko fisik di {Kota}?” yang bisa dipakai di semua kota. Halaman live terbaru sudah membuangnya. FAQ wajib spesifik lokasi: pengiriman dari Banyumas ke area itu, iklim/landmark/ekonomi lokal (mis. “Wonosobo dingin, masih perlu AC?”, “AC untuk showroom mebel Jepara?”), DP/COD/transfer. FAQ yang bisa berlaku di kota mana pun dianggap gagal.

# RADJAAC_AREA_PAGE_BLUEPRINT.md

## RADJAAC_AREA_PAGE_BLUEPRINT.md

**Status**  
Stable source

**Fungsi Dokumen**  
Menjadi standar baku halaman `/jual-ac-{area}` agar halaman area tetap jujur, unik, kuat, tidak copy-paste, dan efektif mengubah search intent lokal menjadi lead WhatsApp berkualitas.

Blueprint ini memakai prinsip people-first content, title/H1 yang sinkron, serta menghindari doorway/scaled page. Google secara eksplisit menyebut doorway pages merusak pengalaman pengguna, scaled low-value pages dapat dianggap spam, dan title link sebaiknya jelas sesuai judul utama halaman. Snippet area Radja AC bergerak ke pola “cek stok, konsultasi PK, harga unit, dan opsi pengiriman/pemasangan” yang kuat dan jujur, bukan klaim toko fisik lokal palsu.

**Prinsip Utama**

- Fungsi utama halaman area adalah **money page lokal yang kuat dan aman**, bukan halaman artikel.
- Intent utama yang ditangkap: `jual AC [kota]`, `beli AC [kota]`, `toko AC [kota]`, `AC [kota]`, dijawab dengan copy yang tegas dan jujur.
- Target user utama: rumah, kost, properti sewa, bangunan banyak kamar, toko/ruko, kantor/ruko, pengelola usaha, buyer proyek, pengadaan, partai besar, dan banyak unit.
- Satu halaman area wajib punya blok unik yang benar-benar relevan dengan kota tersebut.
- Halaman area harus mendorong user ke **WhatsApp dengan brief yang lebih lengkap**, bukan sekadar klik kosong.

**Tabel Keputusan**

| Elemen Halaman | Tujuan | Isi yang Disarankan | Catatan Implementasi |
|---|---|---|---|
| Hero / above the fold | Menangkap intent transaksi lokal | Kalimat utama: “Butuh AC untuk rumah, kost, toko, kantor, atau proyek di {Kota}? Radja AC bantu cek stok, konsultasi PK, pengiriman unit, dan opsi pemasangan.” | Buka dengan percaya diri; jangan memakai opening defensif |
| H1 pattern | Menyamakan intent + value proposition | `Jual AC {Kota} | Cek Stok, Konsultasi PK, Pengiriman & Opsi Pemasangan` | Area live boleh memakai H1 lebih tegas seperti `stok dicek hari ini, pasang bisa dijadwalkan` selama jujur |
| Title pattern | CTR + konsistensi SERP | `Jual AC {Kota} | Cek Stok, Konsultasi PK & Opsi Pasang` | Jaga erat dengan H1 agar Google tidak rewrite ke judul generik |
| Meta pattern | Memperjelas value prop | `Butuh AC untuk rumah, kost, toko, kantor, atau proyek di {Kota}? Radja AC bantu cek stok, konsultasi PK, pengiriman unit, dan opsi pemasangan via WhatsApp.` | Jangan tulis harga pasti jika stok/harga berubah; range/starting boleh bila dipelihara |
| Opening copy | Menjelaskan posisi bisnis dengan kuat | “Showroom dan gudang Radja AC ada di Banyumas. Untuk area {Kota}, Radja AC membantu cek stok, rekomendasi PK, pengiriman unit, dan opsi pemasangan sesuai kebutuhan.” | Ini pola copy kuat dan jujur untuk semua kota target |
| Blok “Siapa yang Cocok” | Menyaring lead | Rumah; kost; toko/ruko; kantor; hotel, guest house, dan hospitality; proyek banyak unit | Kota berbeda harus memberi urutan use case yang berbeda |
| Blok “Cara Order” | Menggerakkan WA | 1) Kirim ukuran ruangan 2) Kirim daya listrik 3) Pilih butuh pasang/tidak 4) Cek stok dan estimasi | Tujuannya menaikkan kualitas lead WA |
| Blok brand/kategori | Membantu user memilih | Link ke `/katalog`, `/katalog/ac-inverter`, `/katalog/ac-low-watt`, `/brand/daikin`, `/brand/gree`, `/brand/midea` | Pilih link sesuai demand kota |
| Blok pengiriman/pemasangan | Menjawab pertanyaan paling sensitif | Jelaskan unit only, pengiriman, dan opsi pemasangan terkoordinasi | Jangan janji teknisi lokal permanen jika belum ada |
| Trust proof | Menambah kepercayaan | Showroom/gudang fisik Banyumas, foto stok/gudang, foto pengiriman/pemasangan nyata, Proshop Gree, sertifikat Authorized Dealer, jam layanan | Jangan pakai testimonial/proyek palsu |
| FAQ wajib | Menutup keberatan dengan konteks lokal | FAQ spesifik lokasi: pengiriman Banyumas→{Kota}, iklim/landmark/ekonomi lokal (kos kampus, showroom, penginapan wisata, jalur Pantura), serta DP/COD/transfer. **DIPERBARUI: hindari** FAQ generik “punya toko fisik di {Kota}?” yang berlaku di semua kota | FAQ harus terlihat di halaman, tidak bisa ditukar nama kotanya, bukan markup kosong |
| Internal link wajib | Mengarahkan user ke money page lain | Minimal ke `/kalkulator-pk-ac`, `/katalog`, 2–3 brand page, 1 kategori, dan 1 halaman B2B yang relevan | Wajib berbeda sesuai kota |
| CTA pattern | Menghasilkan lead berkualitas | CTA utama: `Chat WhatsApp untuk cek stok AC {Kota}`; CTA sekunder: `Kirim ukuran ruangan & daya listrik` | Satu primary CTA yang dominan, bukan lima CTA sejajar |
| Aturan anti-konten lemah | Menjaga kualitas | Tiap area page wajib punya: opening unik, demand kota unik, use case unik, FAQ unik, link unik, dan CTA unik | Struktur boleh sama; isi bisnisnya harus beda |

**Aturan untuk Assistant/Codex**

- Semua area page mengikuti H1/title/meta pattern baku di atas.
- Basis Banyumas harus disebut **sekali dan tegas** sebagai bukti kuat, tetapi tidak boleh mengalahkan intent kota target.
- Copy area page harus fokus pada **konsultasi PK, cek stok, pengiriman unit, dan opsi pemasangan**.
- Jika satu area page tidak punya 5 blok unik, jangan publish.
- CTA WA harus meminta data: area, ukuran ruangan, daya listrik, jumlah unit, dan butuh pemasangan atau tidak.
- Halaman area wajib link ke halaman yang bisa menutup lead: katalog, kalkulator, brand, atau B2B.

**Jangan Dilakukan**

- Jangan klaim punya toko fisik, showroom, atau cabang di kota target jika tidak ada bukti.
- Jangan copy-paste body lalu hanya ganti nama kota.
- Jangan memulai halaman dengan narasi defensif yang melemahkan posisi Radja AC.
- Jangan isi halaman area dengan paragraf geografis umum yang tidak menolong pembeli AC.
- Jangan membuat halaman area menjadi artikel edukasi panjang yang kehilangan CTA.

**Contoh Implementasi**

| URL | H1 | Title | Meta Lead | CTA Utama | Sudut Unik |
|---|---|---|---|---|---|
| `/jual-ac-semarang` | `Jual AC Semarang | Cek Stok, Konsultasi PK, Pengiriman & Opsi Pemasangan` | `Jual AC Semarang | Cek Stok, Konsultasi PK & Opsi Pasang` | Fokus rumah, kantor/ruko, developer, dan pengadaan banyak unit area Semarang | `Chat WA untuk cek stok AC Semarang` | Tekankan kantor, ruko, proyek, pengadaan, banyak unit, hotel, guest house, dan hospitality |
| `/jual-ac-yogyakarta` | `Jual AC Yogyakarta | Untuk Kost, Hotel, Rumah & Usaha` | `Jual AC Yogyakarta | Cek Stok, Konsultasi PK & Opsi Pasang` | Cocok untuk kost, guest house, rumah, cafe, dan kebutuhan banyak unit area Yogyakarta | `Chat WA: kirim jumlah kamar/ruangan` | Tekankan kost, hotel, guest house, hospitality, dan kampus |
| `/jual-ac-solo` | `Jual AC Solo | Rumah, Kost, Hotel & Kantor` | `Jual AC Solo | Cek Stok AC, Konsultasi PK & Opsi Pasang` | Untuk rumah baru, kost, kantor, ruko, toko, dan hospitality area Solo | `Chat WA: tanya rekomendasi PK Solo` | Tekankan kost, hotel, guest house, hospitality, toko, dan kantor |
| `/jual-ac-cilacap` | `Jual AC Cilacap | Cek Stok, Harga Unit & Opsi Pemasangan` | `Jual AC Cilacap | Konsultasi PK, Cek Stok & Opsi Pasang` | Untuk rumah, toko/usaha, kantor, dan kebutuhan banyak unit area Cilacap | `Chat WA: kirim kecamatan di Cilacap` | Tekankan lead cepat, logistik dekat, kebutuhan usaha |
| `/jual-ac-kebumen` | `Jual AC Kebumen | Konsultasi PK, Cek Stok & Opsi Pasang` | `Jual AC Kebumen | Cek Stok AC untuk Rumah, Kost & Usaha` | Untuk rumah, kost dan properti sewa, toko, ruko, dan kantor area Kebumen | `Chat WA: kirim ukuran ruangan Kebumen` | Tekankan rumah, kost, usaha, toko, dan ruko, keputusan cepat |

**Pola copy aman yang dipakai di semua area page**

- Dipakai: `Showroom dan gudang Radja AC ada di Banyumas. Untuk area {Kota}, Radja AC membantu konsultasi PK, cek stok unit, pengiriman, dan opsi pemasangan sesuai kebutuhan rumah, kost, toko, kantor, proyek, pengadaan, atau banyak unit.`
- Jangan dipakai: `Radja AC adalah toko AC {Kota} terdekat`, `cabang resmi {Kota}`, atau frasa lain yang mengesankan lokasi fisik yang tidak ada.
