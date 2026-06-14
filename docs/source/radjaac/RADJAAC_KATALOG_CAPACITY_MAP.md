# RADJAAC_KATALOG_CAPACITY_MAP.md

## Status

Active roadmap with post-migration gate. Refreshed 2026-06-04.

## Fungsi Dokumen

Menentukan halaman katalog kapasitas/tipe yang harus dibangun setelah struktur katalog dasar yang sekarang ada, sekaligus membagi jelas mana intent yang harus dimiliki katalog, mana yang harus dimiliki kalkulator PK, dan mana yang sebaiknya ditangani artikel pendukung.

Radja AC sudah punya fondasi problem-solving melalui `/kalkulator-pk-ac` dan artikel seputar ukuran ruangan/kapasitas. Katalog komersial yang ada juga mulai menampung kebutuhan kantor, usaha, dan banyak unit. Langkah berikutnya bukan menambah artikel transaksional, tetapi memecah katalog ke halaman exact-capacity dan commercial-type yang lebih dekat ke lead WhatsApp — dengan jadwal bertahap agar tidak mengganggu stabilisasi GSC pasca migrasi.

## Kondisi Repo Saat Ini

Katalog dasar yang sudah live perlu dipertahankan sebagai fondasi:

- `/katalog`
- `/katalog/ac-1-2-pk`
- `/katalog/ac-1-pk`
- `/katalog/ac-1-5-pk`
- `/katalog/ac-2-pk`
- `/katalog/ac-split-rumah`
- `/katalog/ac-inverter`
- `/katalog/ac-low-watt`
- `/katalog/ac-kantor-komersial`

Jika daftar ini berubah, cek `content/routes.js`, data katalog, sitemap, dan live 200/canonical.

## Prinsip Utama

- Head term transaksi kapasitas harus dimiliki katalog, bukan artikel.
- `/kalkulator-pk-ac` memegang intent diagnostik: “butuh PK berapa”, “ruangan segini cocok AC apa”.
- Artikel mendukung intent berbasis masalah, bukan memakan keyword transaksi katalog.
- Exact-capacity page harus mengarah ke lead WA berkualitas, bukan sekadar halaman daftar keyword.
- Untuk tipe komersial besar, publish hanya jika stok, penawaran, dan alur survey memang siap.
- Pasca migrasi, publish katalog baru mengikuti jadwal H+7/H+14/H+30 dari `RADJA_WORKFLOW.md`.

## Post-Migration Katalog Gate

### H+0 sampai H+7

Tidak publish katalog baru kecuali emergency. Fokus:

- validasi katalog existing indexed/crawlable
- cek canonical dan sitemap
- cek internal link dari homepage, katalog hub, area, dan artikel edukasi
- polish copy kecil jika ada mismatch title/H1/CTA

### H+7 sampai H+14

Boleh publish maksimal 1 katalog P1 jika:

- intent sangat jelas
- internal link masuk/keluar siap
- CTA WA spesifik
- tidak memakan artikel/kalkulator
- `npm run check` hijau
- live 200/canonical setelah deploy

### H+14 sampai H+30

Boleh publish 1–2 katalog per batch dengan jeda 7–10 hari. Jangan publish semua P1 sekaligus.

### H+30 ke atas

Boleh naik ke 2–3 katalog per batch jika GSC/GA4 stabil dan halaman existing tidak saling kanibal.

## Tabel Keputusan

| Halaman | URL | Primary Keyword | Intent | Target User | CTA | Internal Link Masuk | Internal Link Keluar | Risiko Cannibalization | Prioritas |
|---|---|---|---|---|---|---|---|---|---|
| AC 1 PK | `/katalog/ac-1-pk` | AC 1 PK | Transaksional kapasitas | Rumah; kost; toko kecil | `WA: cek stok AC 1 PK` | `/katalog`, `/katalog/ac-1-2-pk`, `/kalkulator-pk-ac`, artikel sizing | brand pages, `/kalkulator-pk-ac` | Tinggi dengan artikel harga AC 1 PK | Live / polish |
| AC 1.5 PK | `/katalog/ac-1-5-pk` | AC 1.5 PK | Transaksional kapasitas | Rumah; kantor/ruko; cafe kecil | `WA: cek stok AC 1.5 PK` | `/katalog`, `/kalkulator-pk-ac`, area page rumah/usaha | brand pages, B2B pages, kalkulator | Sedang dengan artikel kapasitas ruangan | Live / polish |
| AC 2 PK | `/katalog/ac-2-pk` | AC 2 PK | Transaksional kapasitas | Rumah besar; kantor; ruko | `WA: cek stok AC 2 PK` | `/katalog`, `/kalkulator-pk-ac`, `/katalog/ac-kantor-komersial` | brand pages, `/pengadaan-ac/gedung-kantor-ruko` | Sedang dengan page kantor umum | Live / polish |
| AC Cassette | `/katalog/ac-cassette` | AC cassette | Transaksional komersial | Kantor; cafe; resto; showroom | `WA: konsultasi AC cassette` | `/katalog/ac-kantor-komersial`, B2B kantor/cafe | brand pages, pengadaan segment pages | Tinggi dengan `ac-kantor-komersial` | P1 next, gated |
| AC 3–4 PK | `/katalog/ac-3-4-pk` | AC 3 PK 4 PK | Transaksional kapasitas besar | Usaha; kantor; ruangan besar | `WA: cek opsi AC 3–4 PK` | `/katalog/ac-kantor-komersial`, B2B kantor/cafe | `/katalog/ac-cassette`, `/katalog/ac-floor-standing` | Sedang dengan komersial umum | P2 |
| AC Floor Standing | `/katalog/ac-floor-standing` | AC floor standing | Transaksional komersial | Aula; resto; mushola; showroom | `WA: konsultasi AC floor standing` | `/katalog/ac-kantor-komersial`, artikel komersial besar | B2B cafe/resto, gedung kantor/ruko | Sedang | P2 |
| AC Multi Split | `/katalog/ac-multi-split` | AC multi split | Komersial/premium | Rumah premium; ruko; banyak ruang | `WA: cek kebutuhan multi split` | Brand premium; artikel outdoor terbatas | `/brand/daikin`, `/brand/panasonic`, kalkulator | Rendah–Sedang | P3 |
| AC VRV/VRF | `/katalog/ac-vrv-vrf` | AC VRV VRF | Commercial-intent berat | Proyek gedung; kantor besar | `WA: kirim layout/proyek dulu` | Hanya dari B2B proyek dan artikel teknis | `/pengadaan-ac/kontraktor-developer` | Tinggi bila proof belum ada | P3 bersyarat |

## Urutan Build yang Aman

Karena `ac-1-pk`, `ac-1-5-pk`, dan `ac-2-pk` sudah live, urutan berikutnya bukan mengulang build kapasitas dasar, tetapi:

1. Polish `ac-1-pk`, `ac-1-5-pk`, `ac-2-pk` bila GSC menunjukkan impresi/CTR butuh perbaikan.
2. Build `/katalog/ac-cassette` sebagai P1 gated jika operasional siap.
3. Build `/katalog/ac-3-4-pk` atau `/katalog/ac-floor-standing` setelah cassette atau bila GSC/lead menunjukkan demand.
4. Tahan `/katalog/ac-multi-split` sampai ada demand/proof cukup.
5. Tahan `/katalog/ac-vrv-vrf` sampai ada capability, survey flow, dan partner/proof yang benar-benar siap.

## Aturan untuk Assistant/Codex

- Jangan membuat artikel head-term seperti “harga AC 1 PK”, “jual AC 2 PK”, atau “harga AC cassette” jika katalog untuk head-term itu sedang atau sudah dibangun.
- Jangan biarkan `/kalkulator-pk-ac` mencoba ranking untuk semua keyword transaksi kapasitas.
- Hasil kalkulator harus mengarah ke 1 rekomendasi katalog utama + 1–2 alternatif.
- Exact-capacity page wajib punya CTA stok/WA, tabel use case, dan link ke kalkulator.
- `ac-cassette` harus dipisah dari `ac-kantor-komersial`; page komersial lama menjadi hub, bukan semua-in-one.
- Jangan publish katalog baru tanpa sitemap, canonical, internal link, dan `npm run check` hijau.

## Jangan Dilakukan

- Jangan publish semua katalog P1 sekaligus pasca migrasi.
- Jangan publish `VRV/VRF` kalau real process-nya belum siap.
- Jangan mengubur `cassette` dan `floor standing` hanya sebagai paragraf di halaman komersial umum selamanya; jadikan roadmap gated.
- Jangan campur intent rumah dan komersial besar dalam satu halaman kapasitas.
- Jangan memakai harga pasti jika stok/harga tidak dipelihara.

## Contoh Implementasi

| Kebutuhan | Halaman Tujuan | Artikel Pendukung yang Aman | Artikel yang Harus Dihindari |
|---|---|---|---|
| User tanya “kamar 3x4 pakai AC apa?” | `/kalkulator-pk-ac` → `/katalog/ac-1-pk` atau `/katalog/ac-1-5-pk` | `AC untuk kamar 3x4`, `Cara hitung PK kamar` | `Harga AC 1 PK` |
| User tanya “kantor 30 m2 pakai AC apa?” | `/kalkulator-pk-ac` → `/katalog/ac-2-pk` atau `/katalog/ac-cassette` | `Cassette vs split untuk kantor` | `Jual AC 2 PK kantor` |
| User tanya “cafe pakai AC apa?” | `/katalog/ac-cassette` atau `/katalog/ac-floor-standing` | `AC untuk cafe semi-open`, `Floor standing vs cassette` | `Harga AC cassette murah` |
| User tanya “pengadaan banyak unit kost” | `/pengadaan-ac/kost-apartemen-skala-besar` | `Checklist AC untuk kost` | `Jual AC kost murah` |
