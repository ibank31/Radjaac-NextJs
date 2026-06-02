# RADJAAC_KATALOG_CAPACITY_MAP.md

## RADJAAC_KATALOG_CAPACITY_MAP.md

**Status**  
Needs quarterly refresh

**Fungsi Dokumen**  
Menentukan halaman katalog kapasitas/tipe yang harus dibangun setelah struktur katalog dasar yang sekarang ada, sekaligus membagi jelas mana intent yang harus dimiliki katalog, mana yang harus dimiliki kalkulator PK, dan mana yang sebaiknya ditangani artikel pendukung.

RADJA AC sudah punya fondasi problem-solving yang bagus melalui ` /kalkulator-pk-ac` dan artikel seputar ukuran ruangan/kapasitas, sementara katalog komersial yang ada sudah mulai menyebut kebutuhan cassette dan ruang usaha. Itu berarti langkah berikutnya bukan menambah artikel transaksional, tetapi memecah katalog ke halaman exact-capacity dan commercial-type yang lebih dekat ke lead WA. Pada saat yang sama, tipe komersial seperti cassette, floor standing, dan VRV/VRF memang sudah ditawarkan oleh banyak pemain lokal di kota besar, sehingga RADJA AC perlu naik ke sana secara bertahap dan kredibel. citeturn22search14turn23search10turn23search2turn20search4turn20search7turn18search10turn18search17turn19search11

**Prinsip Utama**

- Head term transaksi kapasitas harus dimiliki **katalog**, bukan artikel.
- ` /kalkulator-pk-ac` harus memegang intent diagnostik: “butuh PK berapa”, “ruangan segini cocok AC apa”.
- Artikel harus mendukung intent berbasis masalah, bukan memakan keyword transaksional katalog.
- ` /katalog/ac-1-2-pk` dipertahankan sebagai parent/hub, lalu exact-capacity page menjadi child yang lebih spesifik.
- Untuk tipe komersial besar, publish hanya jika stok, penawaran, dan alur survey memang siap.

**Tabel Keputusan**

| Halaman | URL | Primary Keyword | Secondary Keyword | Intent | Target User | Ruangan/Kebutuhan Cocok | Buyer Concern | CTA | Internal Link Masuk | Internal Link Keluar | Supporting Article | Risiko Cannibalization | Prioritas |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| AC 1 PK | `/katalog/ac-1-pk` | AC 1 PK | jual AC 1 PK; AC 1 PK inverter; AC 1 PK low watt | Transaksional | Rumah; kost; toko kecil | Kamar besar; ruang kerja; ruang tamu kecil | PK pas/tidak; listrik; pilihan inverter/standard | `WA: cek stok AC 1 PK` | `/katalog`, `/katalog/ac-1-2-pk`, `/kalkulator-pk-ac`, artikel ukuran kamar | brand pages, `/kalkulator-pk-ac` | `AC 1 PK untuk kamar berapa m2?` | Tinggi dengan artikel “harga AC 1 PK” | P1 |
| AC 1.5 PK | `/katalog/ac-1-5-pk` | AC 1.5 PK | jual AC 1.5 PK; AC 1 5 PK inverter | Transaksional | Rumah; kantor/ruko; cafe dan ruang usaha | Ruang keluarga; ruangan 18–24 m2; kantor | Daya listrik; noise; brand | `WA: cek stok AC 1.5 PK` | `/katalog`, `/kalkulator-pk-ac`, area page rumah/usaha | brand pages, `/kalkulator-pk-ac`, pengadaan segment pages | `AC 1.5 PK cocok untuk ruangan apa?` | Tinggi dengan artikel kapasitas ruangan | P1 |
| AC 2 PK | `/katalog/ac-2-pk` | AC 2 PK | jual AC 2 PK; AC 2 PK untuk kantor | Transaksional | Rumah besar; kantor; ruko | Ruang tamu besar; meeting room; ruko | Daya listrik; harga; pasang; pipa/outdoor | `WA: cek stok AC 2 PK` | `/katalog`, `/kalkulator-pk-ac`, `/katalog/ac-kantor-komersial` | brand pages, `/kalkulator-pk-ac`, `/pengadaan-ac/gedung-kantor-ruko` | `AC 2 PK untuk ruang ukuran berapa?` | Tinggi dengan artikel “AC kantor” | P1 |
| AC Cassette | `/katalog/ac-cassette` | AC cassette | AC cassette kantor; AC cassette cafe | Transaksional + solution page | Kantor; cafe; resto; showroom | Ruang komersial dengan plafon | Estetika; kapasitas; maintenance; distribusi udara | `WA: konsultasi AC cassette` | `/katalog/ac-kantor-komersial`, B2B kantor/cafe | brand pages, pengadaan segment pages, `/kalkulator-pk-ac` | `Cassette vs split untuk kantor/cafe` | Tinggi dengan `ac-kantor-komersial` | P1 |
| AC 3–4 PK | `/katalog/ac-3-4-pk` | AC 3 PK 4 PK | AC 3 PK untuk usaha; AC 4 PK komersial | Transaksional | Usaha; kantor; ruangan besar | Ruang usaha besar; aula kecil; ruang rapat besar | Tipe unit; kebutuhan listrik; pasang; ukuran outdoor | `WA: cek opsi AC 3–4 PK` | `/katalog/ac-kantor-komersial`, B2B kantor/cafe | `/katalog/ac-cassette`, `/katalog/ac-floor-standing` | `AC 3 PK atau 4 PK cocok untuk ruang apa?` | Sedang dengan page komersial umum | P2 |
| AC Floor Standing | `/katalog/ac-floor-standing` | AC floor standing | AC standing floor; AC standing untuk aula | Transaksional + solution page | Aula; resto; mushola; showroom | Ruang besar tanpa layout split ideal | Tampilan; kapasitas; airflow; lokasi unit | `WA: konsultasi AC floor standing` | `/katalog/ac-kantor-komersial`, artikel komersial besar | `/pengadaan-ac/cafe-resto`, `/pengadaan-ac/gedung-kantor-ruko` | `Kapan pilih floor standing daripada cassette?` | Sedang | P2 |
| AC Multi Split | `/katalog/ac-multi-split` | AC multi split | multi split inverter; AC 1 outdoor banyak indoor | Komersial/premium | Rumah premium; usaha, toko, dan ruko | Banyak ruang dengan outdoor terbatas | Harga; kompleksitas pasang; service | `WA: cek kebutuhan multi split` | Brand premium; artikel efisiensi ruang outdoor | `/brand/daikin`, `/brand/panasonic`, `/kalkulator-pk-ac` | `Multi split vs split biasa` | Rendah–Sedang | P3 |
| AC VRV/VRF | `/katalog/ac-vrv-vrf` | AC VRV VRF | VRF untuk gedung; VRV untuk proyek | Commercial-intent berat | Proyek gedung; kantor besar | Gedung multi-ruang | Survey; spek; partner; after-sales | `WA: kirim layout/proyek dulu` | Hanya dari B2B proyek dan artikel teknis | `/pengadaan-ac/kontraktor-developer` | `VRV/VRF vs split untuk proyek` | Tinggi bila proof belum ada | P3 bersyarat |

**Aturan untuk Assistant/Codex**

- Setelah ` /katalog/ac-1-2-pk`, urutan build adalah: `ac-1-pk`, `ac-1-5-pk`, `ac-2-pk`, `ac-cassette`, `ac-3-4-pk`, `ac-floor-standing`, `ac-multi-split`, lalu `ac-vrv-vrf` bila siap.
- ` /katalog/ac-1-2-pk` diposisikan sebagai **parent chooser**, bukan halaman final untuk semua kapasitas.
- Hasil akhir ` /kalkulator-pk-ac` wajib mengarah ke **1 rekomendasi katalog utama** + 1–2 alternatif.
- Exact-capacity page wajib punya CTA stok/WA, tabel use case, dan link ke kalkulator.
- `ac-cassette` harus dipisah dari `ac-kantor-komersial`; page komersial yang lama menjadi hub, bukan semua-in-one.

**Jangan Dilakukan**

- Jangan membuat artikel head-term seperti “harga AC 1 PK”, “jual AC 2 PK”, atau “harga AC cassette” jika katalog untuk head-term itu sedang dibangun.
- Jangan biarkan ` /kalkulator-pk-ac` mencoba ranking untuk semua keyword transaksi kapasitas.
- Jangan publish `VRV/VRF` kalau real process-nya belum siap.
- Jangan mengubur `cassette` dan `floor standing` hanya sebagai paragraf di halaman komersial umum.
- Jangan campur intent rumah dan komersial besar dalam satu katalog kapasitas.

**Contoh Implementasi**

| Kebutuhan | Halaman Tujuan | Artikel Pendukung yang Aman | Artikel yang Harus Dihindari |
|---|---|---|---|
| User tanya “kamar 3x4 pakai AC apa?” | `/kalkulator-pk-ac` → `/katalog/ac-1-pk` atau `/katalog/ac-1-5-pk` | `AC untuk kamar 3x4`, `Cara hitung PK kamar` | `Harga AC 1 PK` |
| User tanya “kantor 30 m2 pakai AC apa?” | `/kalkulator-pk-ac` → `/katalog/ac-2-pk` atau `/katalog/ac-cassette` | `Cassette vs split untuk kantor` | `Jual AC 2 PK kantor` |
| User tanya “cafe pakai AC apa?” | `/katalog/ac-cassette` atau `/katalog/ac-floor-standing` | `AC untuk cafe semi-open`, `Floor standing vs cassette` | `Harga AC cassette murah` |
| User tanya “pengadaan banyak unit kost” | `/pengadaan-ac/kost-apartemen-skala-besar` | `Checklist AC untuk kost` | `Jual AC kost murah` |
