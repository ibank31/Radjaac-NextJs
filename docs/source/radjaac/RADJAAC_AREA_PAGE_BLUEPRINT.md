# Current Repo Status Note

Blueprint ini tetap relevan, tetapi template area aktif sudah berkembang.

Field/elemen aktif yang harus diperhitungkan sekarang:

- `keywordVariants`
- `nearbyAreaLinks`
- `localFaq`
- `trustBullets`
- `paymentNote`
- trust/payment section
- hero chips termasuk `COD / DP / Transfer`
- WA source/intent/area
- sitemap dan live 200

Untuk checklist operasional terbaru, baca `docs/RADJA_WORKFLOW.md`.
Untuk arah ekspansi area, baca `docs/RADJA_GROWTH_STRATEGY.md`.

# RADJAAC_AREA_PAGE_BLUEPRINT.md

## RADJAAC_AREA_PAGE_BLUEPRINT.md

**Status**  
Stable source

**Fungsi Dokumen**  
Menjadi standar baku halaman ` /jual-ac-{area}` agar halaman area tetap jujur, unik, tidak copy-paste, dan tetap kuat untuk mengubah search intent lokal menjadi lead WhatsApp berkualitas.

Blueprint ini memakai prinsip people-first content, title/H1 yang sinkron, serta menghindari doorway/scaled page. Google secara eksplisit menyebut doorway pages merusak pengalaman pengguna, scaled low-value pages dapat dianggap spam, dan title link sebaiknya jelas sesuai judul utama halaman. Snippet area RADJA AC yang relatif aman saat ini juga sudah bergerak ke pola “konsultasi PK, cek stok, harga unit, dan opsi pengiriman/pemasangan” alih-alih klaim toko fisik lokal. citeturn36search0turn15search4turn36search1turn15search2turn27search1turn27search2turn27search3

**Prinsip Utama**

- Fungsi utama halaman area adalah **money page lokal yang aman**, bukan halaman artikel.
- Intent utama yang ditangkap: `jual AC [kota]`, `beli AC [kota]`, `toko AC [kota]`, `AC [kota]`, tetapi dijawab dengan copy yang jujur.
- Target user utama: rumah, kost kecil–menengah, toko/ruko, kantor kecil, pengelola usaha, dan buyer proyek ringan.
- Satu halaman area wajib punya blok unik yang benar-benar relevan dengan kota tersebut.
- Halaman area harus mendorong user ke **WhatsApp dengan brief yang lebih lengkap**, bukan sekadar klik kosong.

**Tabel Keputusan**

| Elemen Halaman | Tujuan | Isi yang Disarankan | Catatan Implementasi |
|---|---|---|---|
| Hero / above the fold | Menangkap intent transaksi lokal | Kalimat utama: “Butuh AC untuk rumah, kost, toko, kantor, atau proyek di {Kota}? RADJA AC bantu cek stok, konsultasi PK, pengiriman unit, dan opsi pemasangan.” | Hindari opening “kami bukan toko di kota ini” yang terlalu defensif |
| H1 pattern | Menyamakan intent + value proposition | `Jual AC {Kota} | Cek Stok, Konsultasi PK, Pengiriman & Opsi Pemasangan` | H1 jangan generik seperti “Toko AC Purwokerto” di halaman area luar |
| Title pattern | CTR + konsistensi SERP | `Jual AC {Kota} | Cek Stok, Konsultasi PK & Opsi Pasang` | Jaga erat dengan H1 agar Google tidak rewrite ke judul generik |
| Meta pattern | Memperjelas value prop | `Butuh AC untuk rumah, kost, toko, kantor, atau proyek di {Kota}? RADJA AC bantu cek stok, konsultasi PK, pengiriman unit, dan opsi pemasangan via WhatsApp.` | Jangan tulis harga pasti jika stok/harga berubah |
| Opening copy | Menjelaskan posisi bisnis | “RADJA AC berbasis di Banyumas dan melayani kebutuhan AC area {Kota} untuk cek stok, rekomendasi PK, pengiriman unit, dan opsi pemasangan sesuai kebutuhan.” | Ini adalah pola copy aman untuk semua kota target |
| Blok “Siapa yang Cocok” | Menyaring lead | Rumah; kost; toko/ruko; kantor; hotel kecil/guest house; proyek banyak unit | Kota berbeda harus memberi urutan use case yang berbeda |
| Blok “Cara Order” | Menggerakkan WA | 1) Kirim ukuran ruangan 2) Kirim daya listrik 3) Pilih butuh pasang/tidak 4) Cek stok dan estimasi | Tujuannya menaikkan kualitas lead WA |
| Blok brand/kategori | Membantu user memilih | Link ke ` /katalog`, ` /katalog/ac-inverter`, ` /katalog/ac-low-watt`, ` /brand/daikin`, ` /brand/gree`, ` /brand/midea` | Pilih link sesuai demand kota |
| Blok pengiriman/pemasangan | Menjawab pertanyaan paling sensitif | Jelaskan unit only, pengiriman, dan opsi pemasangan terkoordinasi | Jangan janji teknisi lokal permanen jika belum ada |
| Trust proof | Menambah kepercayaan | Basis Banyumas, foto stok/gudang, foto pengiriman/pemasangan yang nyata, jam layanan, merek resmi yang dijual | Jangan pakai testimonial/proyek palsu |
| FAQ wajib | Menutup keberatan | “Apakah RADJA AC punya toko fisik di {Kota}?”, “Bisa bantu pilih PK?”, “Bisa kirim tanpa pasang?”, “Bisa untuk banyak unit?”, “Brand apa saja tersedia?”, “Harga tergantung apa?” | FAQ harus terlihat di halaman, bukan markup kosong |
| Internal link wajib | Mengarahkan user ke money page lain | Minimal ke ` /kalkulator-pk-ac`, ` /katalog`, 2–3 brand page, 1 kategori, dan 1 halaman B2B yang relevan | Wajib berbeda sesuai kota |
| CTA pattern | Menghasilkan lead berkualitas | CTA utama: `Chat WhatsApp untuk cek stok AC {Kota}`; CTA sekunder: `Kirim ukuran ruangan & daya listrik` | Satu primary CTA yang dominan, bukan lima CTA sejajar |
| Aturan anti-thin content | Menjaga kualitas | Tiap area page wajib punya: opening unik, demand kota unik, use case unik, FAQ unik, link unik, dan CTA unik | Struktur boleh sama; isi bisnisnya harus beda |

**Aturan untuk Assistant/Codex**

- Semua area page mengikuti H1/title/meta pattern baku di atas.
- Basis Banyumas harus disebut **sekali dan tegas**, tetapi tidak boleh mengalahkan intent kota target.
- Copy area page harus fokus pada **konsultasi PK, cek stok, pengiriman unit, dan opsi pemasangan**.
- Jika satu area page tidak punya 5 blok unik, jangan publish.
- CTA WA harus meminta data: area, ukuran ruangan, daya listrik, jumlah unit, dan butuh pemasangan atau tidak.
- Halaman area wajib link ke halaman yang bisa menutup lead: katalog, kalkulator, brand, atau B2B.

**Jangan Dilakukan**

- Jangan klaim punya toko fisik, showroom, atau cabang di kota target jika tidak ada bukti.
- Jangan copy-paste body lalu hanya ganti nama kota.
- Jangan memulai halaman dengan narasi yang melemahkan seperti “walaupun kami dari Purwokerto…”.
- Jangan isi halaman area dengan paragraf geografis umum yang tidak menolong pembeli AC.
- Jangan membuat halaman area menjadi artikel edukasi panjang yang kehilangan CTA.

**Contoh Implementasi**

| URL | H1 | Title | Meta Lead | CTA Utama | Sudut Unik |
|---|---|---|---|---|---|
| `/jual-ac-semarang` | `Jual AC Semarang | Cek Stok, Konsultasi PK, Pengiriman & Opsi Pemasangan` | `Jual AC Semarang | Cek Stok, Konsultasi PK & Opsi Pasang` | Fokus rumah, kantor/ruko, developer, dan pengadaan banyak unit area Semarang | `Chat WA untuk cek stok AC Semarang` | Tekankan kantor, ruko, proyek ringan, dan hotel kecil |
| `/jual-ac-yogyakarta` | `Jual AC Yogyakarta | Untuk Kost, Hotel, Rumah & Usaha` | `Jual AC Yogyakarta | Cek Stok, Konsultasi PK & Opsi Pasang` | Cocok untuk kost, guest house, rumah, cafe, dan kebutuhan banyak unit area Yogyakarta | `Chat WA: kirim jumlah kamar/ruangan` | Tekankan kost, guest house, hotel kecil, kampus |
| `/jual-ac-solo` | `Jual AC Solo | Rumah, Kost, Hotel Kecil & Kantor` | `Jual AC Solo | Cek Stok AC, Konsultasi PK & Opsi Pasang` | Untuk rumah baru, kost, kantor kecil, toko, dan hospitality area Solo | `Chat WA: tanya rekomendasi PK Solo` | Tekankan kost, hotel kecil, toko, kantor |
| `/jual-ac-cilacap` | `Jual AC Cilacap | Cek Stok, Harga Unit & Opsi Pemasangan` | `Jual AC Cilacap | Konsultasi PK, Cek Stok & Opsi Pasang` | Untuk rumah, toko/usaha, kantor, dan kebutuhan banyak unit area Cilacap | `Chat WA: kirim kecamatan di Cilacap` | Tekankan lead cepat, logistik dekat, kebutuhan usaha |
| `/jual-ac-kebumen` | `Jual AC Kebumen | Konsultasi PK, Cek Stok & Opsi Pasang` | `Jual AC Kebumen | Cek Stok AC untuk Rumah, Kost & Usaha` | Untuk rumah, kost kecil, toko, ruko, dan kantor area Kebumen | `Chat WA: kirim ukuran ruangan Kebumen` | Tekankan rumah, kost, usaha kecil, keputusan cepat |

**Pola copy aman yang dipakai di semua area page**

- Dipakai: `RADJA AC berbasis di Banyumas dan melayani kebutuhan AC area {Kota} untuk konsultasi PK, cek stok unit, pengiriman, dan opsi pemasangan sesuai kebutuhan rumah, kost, toko, kantor, atau proyek.`
- Jangan dipakai: `RADJA AC adalah toko AC {Kota} terdekat`, `cabang resmi {Kota}`, atau frasa lain yang mengesankan lokasi fisik yang tidak ada.
