# RADJAAC_CONTENT_CLUSTER_MAP.md

## Status

Needs monthly refresh

## Fungsi Dokumen

Dokumen ini menetapkan sistem cluster agar Radja AC tidak kembali ke pola artikel acak. Audit publik menunjukkan beberapa artikel baru sudah baik untuk intent edukasi murni—misalnya kalkulator PK, kamar 3x4, AC 1 PK, dan inverter vs low watt—tetapi juga ada artikel yang sangat dekat dengan query uang seperti “toko AC Purwokerto” dan “jual AC Banyumas”, sementara area money page untuk query tersebut juga sudah ada. Selain itu, beberapa artikel brand dan artikel legacy memang sudah redirect ke canonical brand/katalog/B2B pages. Karena itu, peta cluster ini memaksa setiap artikel baru menjadi feeder untuk money page yang tepat, atau tidak dibuat sama sekali. citeturn23search0turn24search7turn23search2turn7search1turn5search6turn6view0turn6view1turn8view0turn8view1turn8view2

## Prinsip Utama

- Setiap cluster harus punya **hub** dan **money page target** yang jelas. Jika tidak jelas, artikel tidak dibuat.
- Artikel edukasi hanya dipertahankan jika menjawab pertanyaan pra-pembelian yang tidak bisa ditangkap langsung oleh katalog, brand, area, atau B2B page.
- Query yang sudah jelas transaksional atau lokal uang—misalnya “jual AC [kota]”, “toko AC [kota]”, “harga AC brand [kota]”, “pengadaan AC hotel”, “AC untuk kost banyak unit”—harus ditangkap oleh money page, bukan artikel.
- Artikel kapasitas dan listrik harus diarahkan ke kalkulator PK dan katalog yang sesuai, supaya edukasi berhenti di shortlist produk, bukan berhenti di artikel semata.
- Untuk cluster brand, hanya artikel **model-specific**, **comparison**, atau **decision-support** yang boleh hidup. Artikel generik brand-intent harus merge/redirect ke brand page.
- Trust/proof lebih kuat jika dibuat sebagai page permanen seperti `/bukti-pengiriman-proyek`, bukan artikel timeline acak. Existing proof page dan about page sudah memberi pondasi yang tepat. citeturn28search2turn28search3

## Tabel Keputusan

### Peta Hub Cluster

| Cluster | Hub Page | Money Page Utama | CTA WhatsApp | Catatan |
|---|---|---|---|---|
| PK / sizing | `/kalkulator-pk-ac` | `/katalog/ac-1-2-pk` sekarang; tambah `/katalog/ac-1-pk`, `/katalog/ac-1-5-pk`, `/katalog/ac-2-pk`, `/katalog/ac-3-4-pk` saat live | Kirim ukuran ruangan, tinggi plafon, dan daya listrik | Kalkulator jadi pagerank hub, bukan hanya tool pasif |
| Listrik / low watt | `/katalog/ac-low-watt` | `/katalog/ac-low-watt` | Chat admin untuk cek kecocokan 900/1300 watt | Semua artikel listrik harus berakhir di sini + kalkulator |
| Inverter | `/katalog/ac-inverter` | `/katalog/ac-inverter` | Tanya opsi inverter sesuai jam pakai | Artikel komparasi mendukung, bukan menggantikan |
| Biaya pembelian & pemasangan | artikel buying guide canonical | `/katalog/ac-split-rumah` atau `/katalog/ac-1-2-pk`; untuk banyak unit ke `/pengadaan-ac` | Minta estimasi unit + material | Artikel biaya harus tetap decision-support, bukan daftar harga palsu |
| Brand | `/brand/{brand}` | `/brand/{brand}` | Cek stok brand via WhatsApp | Artikel brand generik harus redirect ke brand page |
| B2B / proyek | `/pengadaan-ac` | `/pengadaan-ac/{segmen}` | Kirim data jumlah unit, tipe ruangan, lokasi proyek | Artikel hanya mendukung proses shortlist dan pengajuan data |
| Area Jawa | `/jual-ac-{area}` | `/jual-ac-{area}` | Chat untuk cek stok, ongkir, opsi pemasangan | Query lokal uang **bukan** artikel |
| Trust / proof | `/bukti-pengiriman-proyek`, `/tentang-kami` | Mendukung semua money page | Lihat bukti lalu chat admin | Proof page menjadi lapisan trust, bukan tujuan akhir |

### Keputusan Artikel per Cluster

| Cluster | URL Artikel | Status | Target Money Page | Search Intent | CTA | Risiko Cannibalization | Catatan |
|---|---|---|---|---|---|---|---|
| PK / sizing | `/kalkulator-pk-ac` | Keep | `/katalog/ac-1-2-pk` dan katalog kapasitas future | Menghitung kebutuhan awal | Kirim ukuran ruangan via WhatsApp | Rendah | Hub utama cluster sizing |
| PK / sizing | `/artikel/cara-memilih-ac-untuk-kamar-3x4` | Keep | `/katalog/ac-1-2-pk` + `/kalkulator-pk-ac` | Edukasi ruangan spesifik | Hitung PK & cek opsi unit | Sedang | Jangan tambahkan kata “harga” di title agar tetap edukatif. citeturn23search0 |
| PK / sizing | `/artikel/ac-1-pk-untuk-ruangan-berapa` | Keep | `/katalog/ac-1-pk` (future); sementara ke `/katalog/ac-1-2-pk` + `/kalkulator-pk-ac` | Edukasi kapasitas 1 PK | Cek stok AC 1 PK | Sedang | Saat halaman 1 PK live, ubah internal link utama ke sana. citeturn24search7 |
| PK / sizing | `/artikel/ac-1-5-pk-untuk-ruangan-berapa` | Create | `/katalog/ac-1-5-pk` | Edukasi kapasitas | Cek opsi 1.5 PK via WhatsApp | Sedang | Buat hanya setelah page capacity live atau minimal dipublikasikan bersamaan |
| PK / sizing | `/artikel/ac-2-pk-untuk-ruangan-berapa` | Create | `/katalog/ac-2-pk` | Edukasi kapasitas | Minta rekomendasi 2 PK | Sedang | CTA harus ke katalog, bukan ke artikel lain |
| PK / sizing | `/artikel/ac-3-4-pk-untuk-ruangan-berapa` | Create | `/katalog/ac-3-4-pk` | Edukasi kapasitas komersial-ringan | Konsultasi ruangan besar | Sedang | Cocok juga menyalur ke B2B bila quantity banyak |
| Listrik / low watt | `/artikel/ac-low-watt-listrik-900-1300-watt-purwokerto` | Redirect | `/katalog/ac-low-watt` | Dulu campuran edukasi + jualan | Cek low watt yang cocok | Tinggi | Redirect sudah aktif saat audit. citeturn6view1 |
| Listrik / low watt | `/artikel/ac-untuk-listrik-900-watt` | Create | `/katalog/ac-low-watt` | Edukasi listrik terbatas | Kirim foto MCB & daya listrik | Rendah | Fokus case rumah/kamar kecil |
| Listrik / low watt | `/artikel/ac-untuk-listrik-1300-watt` | Create | `/katalog/ac-low-watt` | Edukasi daya rumah menengah | Tanyakan kombinasi PK + listrik | Rendah | Jangan jadikan artikel harga |
| Listrik / low watt | `/artikel/kenapa-mcb-turun-saat-ac-nyala` | Create | `/katalog/ac-low-watt` + `/kalkulator-pk-ac` | Problem diagnosis pra-beli / pasca-pasang ringan | Kirim data daya rumah | Sedang | Jaga tetap on-topic ke pemilihan AC, jangan jadi blog service umum |
| Inverter | `/artikel/ac-inverter-vs-low-watt` | Keep | `/katalog/ac-inverter` + `/katalog/ac-low-watt` | Perbandingan kategori | Bandingkan opsi via admin | Sedang | Artikel komparasi yang sah karena intentnya beda dari katalog. citeturn23search2 |
| Inverter | `/artikel/apakah-ac-inverter-hemat-jika-nyala-lama` | Create | `/katalog/ac-inverter` | Edukasi pola pemakaian | Tanyakan inverter sesuai jam pakai | Rendah | Sangat cocok untuk feeder ke Daikin/Gree/Samsung inverter |
| Biaya | `/artikel/panduan-beli-ac-baru`* | Keep / Normalize | `/katalog/ac-split-rumah` + `/kalkulator-pk-ac` | Decision-support sebelum order | Chat untuk cek stok & biaya pasang | Rendah | *Audit publik masih menunjukkan slug lain; harus dipilih satu canonical. citeturn9search0 |
| Biaya | `/artikel/biaya-pasang-ac-baru-apa-saja-yang-dihitung` | Create | `/katalog/ac-split-rumah` dan `/pengadaan-ac` bila banyak unit | Edukasi komponen biaya | Kirim foto titik indoor/outdoor | Rendah | Harus menerangkan material, bukan janji harga tetap |
| Biaya | `/artikel/pipa-bracket-kabel-material-ac-apa-yang-biasanya-ditagihkan` | Create | `/katalog/ac-split-rumah` | Edukasi material | Minta estimasi material via WhatsApp | Rendah | Artikel pendukung yang sehat bila tidak dijadikan “harga pasti” |
| Brand | `/artikel/harga-ac-daikin-purwokerto` | Redirect | `/brand/daikin` | Brand-intent generik | Cek stok Daikin | Tinggi | Redirect terverifikasi. citeturn6view2 |
| Brand | `/artikel/harga-ac-gree-purwokerto` | Redirect | `/brand/gree` | Brand-intent generik | Cek stok Gree | Tinggi | Redirect terverifikasi. citeturn8view1 |
| Brand | `/artikel/harga-ac-midea-purwokerto` | Redirect | `/brand/midea` | Brand-intent generik | Cek stok Midea | Tinggi | Redirect terverifikasi. citeturn8view0 |
| Brand | `/artikel/daikin-inverter-purwokerto` | Redirect | `/brand/daikin` | Brand-intent generik | Cek Daikin inverter | Tinggi | Redirect terverifikasi. citeturn8view3 |
| Brand | `/artikel/samsung-inverter-purwokerto` | Redirect | `/brand/samsung` | Brand-intent generik | Cek Samsung inverter | Tinggi | Publik masih menampilkan artikel ini; terlalu dekat dengan brand page. citeturn23search13 |
| Brand | `/artikel/sharp-bey-purwokerto` | Keep | `/brand/sharp` | Model-specific / shortlist | Tanyakan stok model Sharp | Rendah | Boleh hidup karena lebih sempit dari brand hub. citeturn23search10 |
| B2B / proyek | `/artikel/ac-untuk-kost-purwokerto` | Redirect | `/pengadaan-ac/kost-apartemen-skala-besar` | Dulu intent B2B | Konsultasi banyak unit | Tinggi | Redirect terverifikasi. citeturn8view2 |
| B2B / proyek | `/artikel/checklist-data-sebelum-minta-penawaran-ac-proyek` | Create | `/pengadaan-ac/kontraktor-developer` | Pra-quotation B2B | Kirim data proyek | Rendah | Feeder yang kuat karena membantu sales qualification |
| B2B / proyek | `/artikel/panduan-pilih-ac-untuk-hotel-guest-house` | Create | `/pengadaan-ac/hotel-guest-house` | Edukasi spesifikasi dan efisiensi | Konsultasi jumlah kamar & area komunal | Sedang | Jangan menjadi halaman utama segment; tetap artikel pendukung |
| B2B / proyek | `/artikel/ac-untuk-kantor-kecil-vs-ruang-komersial` | Create | `/katalog/ac-kantor-komersial` | Komparasi kebutuhan usaha | Tanyakan cassette/floor-standing | Rendah | Jembatan dari retail ke komersial |
| Area Jawa | `/artikel/jual-ac-banyumas-konsultasi-pk-stok-pasang` | Redirect | `/jual-ac-banyumas` | Intent lokal uang | Chat admin area Banyumas | Tinggi | Artikel ini terlalu dekat dengan area page. citeturn5search6turn34search9 |
| Area Jawa | `/artikel/toko-ac-purwokerto-yang-bisa-konsultasi-pk` | Redirect | `/jual-ac-purwokerto` | Intent lokal uang / toko | Chat admin Purwokerto | Tinggi | Ini cannibal dengan area money page Purwokerto. citeturn7search1turn24search11 |
| Area Jawa | **Jangan buat artikel** `jual ac semarang`, `toko ac yogyakarta`, `harga ac solo`, `jual ac kebumen` | Do not create | `/jual-ac-{area}` | Intent lokal uang | Cek stok, pengiriman, opsi pemasangan | Sangat tinggi | Query seperti ini harus ditangkap area page, bukan artikel |
| Trust / proof | `/bukti-pengiriman-proyek` | Keep | Mendukung semua money page | Verifikasi showroom, stok, pengiriman, pemasangan | Lihat bukti lalu chat admin | Rendah | Existing proof page yang sehat. citeturn28search2 |
| Trust / proof | `/tentang-kami` | Keep | Mendukung semua money page | Verifikasi identitas bisnis & sertifikat | Lihat profil lalu konsultasi | Rendah | Existing page berisi sertifikasi dealer. citeturn28search3 |
| Trust / proof | `/bukti-pengiriman-proyek` | Create as page | `/pengadaan-ac` dan subsegment | Proof proyek & banyak unit | Kirim data proyek | Rendah | Lebih baik page permanen daripada artikel |
| Service symptom | `/artikel/ac-kurang-dingin-belum-tentu-freon-habis` | Update | `/kontak` atau sales consult yang relevan | Troubleshooting ringan | Kirim gejala via WhatsApp | Sedang | Tetap boleh hidup, tapi jangan diperbanyak jadi cluster service. citeturn9search5 |

## Aturan untuk Assistant/Codex

- Sebelum menulis artikel baru, tentukan dulu **money page final** yang akan ditopang.
- Jika query utama mengandung kota + niat beli, area layanan, toko, pengiriman, stok, pemasangan, atau banyak unit, maka formatnya harus **money page**, bukan artikel.
- Jika query utama mengandung brand generik, maka targetnya **brand page**. Artikel brand hanya boleh untuk model-specific, comparison, atau decision-support sempit.
- Jika query berhubungan dengan kapasitas PK, ruangan, BTU, atau listrik, artikel boleh hidup **asal** title/H1 tetap edukatif dan CTA utamanya ke kalkulator + katalog kapasitas.
- Satu artikel maksimal menargetkan satu intent utama. Jangan memasukkan intent kapasitas, brand, area, dan harga sekaligus.
- Artikel yang sudah di-redirect harus dihapus dari daftar ide konten, sitemap artikel, dan target internal link.
- Setiap artikel baru wajib memiliki CTA WhatsApp yang spesifik terhadap intent-nya: `cek stok`, `kirim ukuran ruangan`, `kirim daya listrik`, atau `kirim data proyek`.
- Artikel support B2B tidak boleh menyalip segment page. Gunakan format checklist, data preparation, atau comparison, bukan headline money-keyword.
- Untuk artikel trust, pilih page permanen jika sifatnya bukti yang terus dipakai ulang.

## Jangan Dilakukan

- Jangan membuat artikel `harga AC {brand} {kota}`.
- Jangan membuat artikel `jual AC {kota}` atau `toko AC {kota}`.
- Jangan membuat artikel `AC low watt {kota}` atau `AC inverter {kota}` untuk kota target; itu akan memakan area page atau katalog.
- Jangan membuat artikel `pengadaan AC hotel`, `pengadaan AC kost`, `pengadaan AC developer` sebagai artikel utama; itu milik B2B pages.
- Jangan membuat artikel yang seluruh CTA-nya hanya ke artikel lain.
- Jangan memelihara dua artikel yang membahas intent sama dengan sudut berbeda tipis.
- Jangan membiarkan slug buying-guide ganda hidup bersamaan.
- Jangan memperbanyak artikel service/repair sampai situs bergeser dari dealer AC menjadi blog servis AC.

## Contoh Implementasi

Contoh artikel sizing yang sehat:

- **Title:** `AC 1.5 PK Cocok untuk Ruangan Berapa?`
- **Tujuan:** edukasi kapasitas untuk shortlist
- **Internal link wajib:** `/kalkulator-pk-ac`, `/katalog/ac-1-5-pk`, `/kontak`
- **CTA:** `Kirim ukuran ruangan dan daya listrik, admin bantu cek apakah 1.5 PK sudah cukup`

Contoh artikel B2B pendukung yang sehat:

- **Title:** `Data yang Perlu Disiapkan Sebelum Minta Penawaran AC Banyak Unit`
- **Target money page:** `/pengadaan-ac/kontraktor-developer`
- **CTA:** `Kirim jumlah ruangan, luas, daya listrik, dan lokasi proyek via WhatsApp`

Daftar artikel yang sebaiknya dibuat baru:

- `/artikel/ac-1-5-pk-untuk-ruangan-berapa`
- `/artikel/ac-2-pk-untuk-ruangan-berapa`
- `/artikel/ac-3-4-pk-untuk-ruangan-berapa`
- `/artikel/ac-untuk-listrik-900-watt`
- `/artikel/ac-untuk-listrik-1300-watt`
- `/artikel/kenapa-mcb-turun-saat-ac-nyala`
- `/artikel/apakah-ac-inverter-hemat-jika-nyala-lama`
- `/artikel/biaya-pasang-ac-baru-apa-saja-yang-dihitung`
- `/artikel/checklist-data-sebelum-minta-penawaran-ac-proyek`

Daftar artikel yang sebaiknya **tidak** dibuat:

- `harga AC Daikin Semarang`
- `toko AC Yogyakarta`
- `jual AC Solo`
- `AC low watt Kebumen`
- `pengadaan AC hotel Jogja` sebagai artikel money
- `harga AC 1 PK Purwokerto` jika sudah ada katalog kapasitas

Daftar artikel lama yang sebaiknya redirect:

- `/artikel/jual-ac-banyumas-konsultasi-pk-stok-pasang`
- `/artikel/toko-ac-purwokerto-yang-bisa-konsultasi-pk`
- `/artikel/samsung-inverter-purwokerto`
- Semua slug brand generik lama yang belum dibersihkan

Daftar artikel yang boleh tetap hidup:

- `/artikel/cara-memilih-ac-untuk-kamar-3x4`
- `/artikel/ac-1-pk-untuk-ruangan-berapa`
- `/artikel/ac-inverter-vs-low-watt`
- `/artikel/ac-kurang-dingin-belum-tentu-freon-habis` dengan prioritas rendah
- Satu buying guide canonical untuk pembelian AC baru
