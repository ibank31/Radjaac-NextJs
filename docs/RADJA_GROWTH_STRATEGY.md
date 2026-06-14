# RADJA AC Growth Strategy

Dokumen ini adalah strategi pertumbuhan aktif RADJA AC untuk SEO lokal, ekspansi area, B2B/proyek, katalog, dan lead WhatsApp.

Source repo terbaru tetap menjadi sumber kebenaran teknis. Dokumen ini mengarahkan prioritas ekspansi, bukan menggantikan audit source, GSC, GA4, atau live production.

## Misi Besar

RADJA AC membangun website sebagai mesin lead untuk:

- pembelian AC rumah dan usaha
- katalog AC multi-brand
- area lokal dan regional
- pengadaan AC banyak unit
- WhatsApp lead yang bisa diukur

Fokus utama bukan sekadar traffic, tetapi lead berkualitas yang masuk melalui WhatsApp.

## Basis Authority

Basis kepercayaan RADJA AC tetap:

- Purwokerto
- Banyumas
- Sokaraja
- showroom/gudang Pamijen, Sokaraja, Banyumas
- bukti pengiriman/proyek
- konsultasi PK
- cek stok
- pengiriman unit
- opsi pemasangan yang dikonfirmasi

Homepage tetap brand hub. Jangan mengubah homepage menjadi city-money-page tunggal.

## Kondisi Aktif Pasca Migrasi — 2026-06-04

Migrasi Next.js dan technical SEO dasar sudah stabil berdasarkan repo/live/GSC sample:

- URL utama final memakai `https://www.radjaac.com/...`.
- Sitemap berisi URL final, bukan legacy redirect.
- Robots, canonical, HTTPS, dan www final sehat pada audit owner.
- GSC URL Inspection membantah klaim `de-index total`.
- Sampel money page utama sudah indexed.
- Live curl owner menunjukkan halaman kritis bukan SPA lama.
- GA4 memakai gtag langsung dengan event `whatsapp_click` dan `generate_lead`.

Implikasi strategi:

- Tidak perlu freeze total.
- Jangan ekspansi besar serentak.
- Prioritas 2–4 minggu pertama adalah stabilisasi sinyal Google, query mapping, CTR, dan kualitas lead WA.
- Halaman baru tetap boleh, tetapi hanya batch kecil dan harus mengikuti jadwal post-migration.

## Post-Migration Growth Schedule

### H+0 sampai H+7

Fokus growth bukan tambah halaman, tetapi memastikan fondasi terbaca Google dan lead tracking stabil.

Boleh:

- polish copy kecil pada halaman prioritas
- tambah internal link kontekstual bila benar-benar membantu user
- request indexing terbatas untuk URL final www yang baru diedit penting
- validasi GA4 Realtime/DebugView
- cek GSC URL Inspection untuk URL prioritas

Tahan:

- publish banyak area page
- publish banyak katalog page
- metro jauh retail generik
- artikel transaksional baru yang memakan money page

### H+7 sampai H+14

Boleh publish 1–2 halaman maksimal jika memenuhi decision gates.

Prioritas:

1. polish URL yang sudah live tetapi belum kuat
2. satu katalog buyer-intent P1 bila template dan internal link siap
3. satu area Tier 1 bila copy unik dan proof cukup

Jangan publish jika hanya karena “toko AC” terasa jauh di SERP. Ranking head-term lokal butuh waktu, recrawl, CTR, dan authority; bukan diselesaikan dengan menambah puluhan URL.

### H+14 sampai H+30

Boleh publish 2–3 halaman per batch dengan jeda 7–10 hari.

Setelah setiap batch:

- live check 200/canonical/sitemap
- cek tidak ada route/redirect collision
- request indexing terbatas untuk target final penting
- pantau GSC pages/queries
- pantau GA4 lead event dan kualitas chat WA

Jika muncul issue canonical, redirect, not indexed yang menyentuh money page, hentikan batch berikutnya dan polish dulu.

### H+30 ke atas

Boleh naik ke 3–5 halaman per batch jika:

- GSC mulai memberi sinyal query/page
- GA4 `generate_lead` stabil
- halaman existing tidak saling kanibal
- internal link tetap natural
- proof/trust dan operasional mendukung

## Prinsip Ekspansi

Ekspansi memakai dua cincin:

1. Cincin dekat untuk retail-area capture:
   - Banyumas Raya
   - Jawa Tengah
   - DI Yogyakarta

2. Cincin jauh untuk B2B/proyek:
   - Jawa Barat
   - Banten
   - DKI Jakarta
   - Jawa Timur

Kota besar jauh penting, tetapi tidak boleh diserang dengan retail page biasa sebelum trust, proof, B2B assets, data GSC, dan data lead cukup kuat.

## Area Aktif Saat Ini

Area lokal dan regional yang sudah ada di source repo terbaru:

- `/jual-ac-purwokerto`
- `/jual-ac-banyumas`
- `/jual-ac-sokaraja`
- `/jual-ac-jatilawang`
- `/jual-ac-cilongok`
- `/jual-ac-ajibarang`
- `/jual-ac-baturraden`
- `/jual-ac-wangon`
- `/jual-ac-karanglewas`
- `/jual-ac-kembaran`
- `/jual-ac-patikraja`
- `/jual-ac-rawalo`
- `/jual-ac-yogyakarta`
- `/jual-ac-semarang`
- `/jual-ac-solo`
- `/jual-ac-purbalingga`
- `/jual-ac-cilacap`
- `/jual-ac-kroya`
- `/jual-ac-majenang`
- `/jual-ac-sidareja`
- `/jual-ac-kesugihan`
- `/jual-ac-adipala`
- `/jual-ac-kebumen`
- `/jual-ac-gombong` (child Kebumen, ditulis gaya quoted-key di `areaItems`)
- `/jual-ac-karanganyar-kebumen` (child Kebumen)
- `/jual-ac-kutowinangun` (child Kebumen)
- `/jual-ac-tegal`
- `/jual-ac-banjarnegara`
- `/jual-ac-sumbang` (child Banyumas, promoted 2026-06)
- `/jual-ac-kedungbanteng` (child Banyumas, promoted 2026-06)
- `/jual-ac-kalibagor` (child Banyumas, promoted 2026-06)
- `/jual-ac-magelang` (regional Jateng/Borobudur, published 2026-06-10)
- `/jual-ac-pekalongan` (regional Pantura, published 2026-06-10)
- `/jual-ac-salatiga` (regional koridor Semarang–Solo, published 2026-06-10)

Standar konten area sekarang: tiap halaman wajib punya `localContext` unik, minimal 5 `localLandmarks`, 3 `localBenefits`, 3 `localCases`, `clusterType` yang benar, dan `localFaq` berbasis lokasi (lihat `docs/source/radjaac/RADJAAC_AREA_PAGE_BLUEPRINT.md`). Cluster dipetakan di `areaClusterMap` (`content/areas/cluster-map.js`). Staged draft (Magelang, Salatiga, Pekalongan, Pemalang, Brebes, Wonosobo, Temanggung, Kudus, Jepara, Demak, dan child Kebasen/Somagede/Bobotsari/Kalimanah/Kutasari/Slawi/Adiwerna/Talang/Mandiraja/Klampok/Bawang Banjarnegara) sudah ditulis ulang ke standar ini tetapi belum live.

Kalau daftar ini berubah, cek `content/routes.js`, `content/areas/` (data area modular + `cluster-map.js`), sitemap live, dan live 200.

## Retail Area Priority

Kota yang layak untuk retail-area page atau polish serius:

- Purwokerto
- Banyumas
- Sokaraja
- Semarang
- Yogyakarta
- Solo
- Cilacap
- Kebumen
- Tegal
- Purbalingga
- Banjarnegara
- Magelang

Prioritas dekat:

1. Pertahankan Purwokerto/Banyumas/Sokaraja sebagai fondasi trust.
2. Perkuat Banyumas ring: Ajibarang, Baturraden, Wangon, Karanglewas, Kembaran, Patikraja, Rawalo.
3. Polish regional yang sudah live sebelum membuat banyak kota baru.
4. Cilacap sudah live sebagai hub regional; child Cilacap seperti Kroya, Majenang, Sidareja, Kesugihan, dan Adipala harus tetap diperlakukan sebagai child, bukan semua dipromosikan setara homepage.
5. Jika ingin menambah area baru setelah jadwal stabilisasi, Magelang lebih aman daripada metro jauh karena masih sesuai cincin dekat.

## B2B-First Priority

Kota besar yang lebih aman masuk lewat B2B/proyek dulu:

- Bandung
- Bekasi
- Tangerang
- Tangerang Selatan
- Jakarta Barat
- Jakarta Selatan
- Jakarta Utara
- Jakarta Timur
- Jakarta Pusat
- Surabaya
- Malang
- Karawang
- Purwakarta
- Cilegon

Untuk kota ini, jangan membuat retail page generik yang seolah-olah RADJA AC punya toko lokal di sana. Gunakan angle:

- pengadaan unit AC original
- kantor/ruko/proyek
- hotel/guest house/kost banyak unit
- pengiriman unit
- konsultasi spesifikasi
- koordinasi instalasi bila memungkinkan
- brief via WhatsApp

## Coverage-Only / Mention Dulu

Area yang lebih aman disebut sebagai coverage dulu:

- Sleman
- Bantul
- Kulon Progo
- Gunungkidul
- Kudus
- Jepara
- Tasikmalaya
- Sukabumi
- Kediri
- Madiun
- Sidoarjo
- Gresik
- Jember
- Pasuruan
- Mojokerto

Jangan buat halaman tipis untuk area coverage-only. Sebut di halaman induk yang lebih kuat jika relevan.

> Catatan 2026-06-10: Kudus dan Jepara kini punya draft regional yang sudah ditulis ulang ke standar konten lokal (Kudus = cluster industrial/kretek, Jepara = cluster industrial/mebel). Keduanya tidak lagi sekadar coverage-only karena punya pembeda intent B2B yang jelas, tetapi tetap ditahan sampai ada sinyal GSC/lead dan kapasitas batch. Putuskan publish per data, bukan otomatis.

## Tunda Build

Jangan dibuat dulu kecuali ada data GSC/lead/proof yang kuat:

- retail Jakarta generik
- retail Surabaya generik
- retail Bandung generik
- retail Tangerang generik
- halaman kabupaten kecil yang hanya swap nama
- kota jauh yang tidak punya pembeda intent
- area yang hanya akan menjadi doorway page

## Positioning Aman

Untuk area tanpa toko fisik RADJA AC, gunakan framing:

- cek stok
- konsultasi PK
- pengiriman unit
- opsi pemasangan
- kebutuhan rumah/toko/kost/kantor/banyak unit
- pembayaran fleksibel COD, DP, atau transfer

Jangan gunakan framing palsu:

- toko AC [kota] bila tidak ada toko fisik di kota itu
- cabang [kota]
- showroom [kota]
- pemasangan pasti semua area
- ready semua tipe
- termurah

## Syarat Sebelum Ekspansi Jauh

Sebelum masuk kota besar jauh seperti Bandung, Jakarta, Tangerang, Surabaya:

- tracking WA harus stabil
- `generate_lead` terbaca di GA4
- area inti punya data GSC
- trust/proof page kuat
- B2B page dan katalog komersial siap
- CTA B2B jelas
- internal link tidak berantakan
- tidak ada route/redirect collision

## Decision Gates

Sebelum ekspansi, tambah area, atau membuat halaman baru, assistant wajib mengecek:

- source repo terbaru
- halaman yang sudah live
- sitemap dan internal link
- GSC pages/queries jika tersedia
- GA4 `whatsapp_click` dan `generate_lead` jika relevan
- proof/trust yang mendukung klaim area
- risiko doorway, konten kurang kuat, dan klaim lokal palsu
- apakah ide sudah tercakup di source strategy lama atau belum
- jadwal post-migration: H+0–H+7, H+7–H+14, H+14–H+30, atau H+30+

Jika ide owner belum ada di dokumen/source:

- jangan langsung eksekusi
- audit source dan live dulu
- cari sumber/data tambahan jika menyangkut pasar, kompetitor, SERP, tren, atau kondisi yang bisa berubah
- baru putuskan: build, polish, hold, B2B-first, coverage-only, redirect, atau wait

Ekspansi boleh lanjut jika:

- intent buyer jelas
- halaman bisa unik
- internal link siap
- trust/proof cukup
- tracking lead bisa diukur
- risiko klaim lokal rendah
- batch sesuai jadwal stabilisasi

Ekspansi harus ditahan jika:

- hanya swap nama area
- template inti belum bersih
- GSC/GA4 belum memberi sinyal cukup untuk skala batch besar
- operasional/proof belum mendukung
- kota terlalu jauh dan lebih cocok B2B-first
- perubahan melebar tanpa verifikasi

## Cara Memilih Next Page

Jangan memilih next page hanya dari feeling.

Gunakan gabungan:

- GSC queries
- GSC pages
- indexed/not indexed status
- GA4 `whatsapp_click`
- GA4 `generate_lead`
- kualitas chat WA
- kedekatan operasional
- risiko klaim lokal
- kekuatan internal link
- kesiapan proof/trust

Keputusan page:

- build jika intent jelas, proof cukup, page bisa unik, dan batch sesuai jadwal
- polish jika URL sudah live tapi belum kuat
- hold jika risiko konten kurang kuat/copy tinggi
- B2B-first jika kota besar/kompetitif
- coverage-only jika area terlalu kecil atau terlalu jauh
- redirect jika URL lama sudah kalah intent dengan halaman final

## Roadmap Aktif

Fokus saat ini:

1. Jaga Purwokerto/Banyumas/Sokaraja sebagai fondasi.
2. Pastikan area Banyumas ring live, aman, dan terhubung.
3. Pantau GSC dan GA4 setelah tracking WA beres.
4. Perkuat internal link untuk halaman prioritas hanya secara kontekstual.
5. Polish halaman regional yang sudah live sebelum ekspansi area baru besar.
6. Tambah halaman baru mengikuti jadwal post-migration, bukan karena panik ranking.
7. Jangan ekspansi metro besar sebelum data GSC + WA lead lebih matang.

## Prinsip Berhenti

Jangan lanjut ekspansi kalau:

- GSC belum memberi sinyal
- WA tracking belum terbaca
- internal link belum jelas
- halaman baru hanya copy nama area
- bukti/trust belum cukup untuk klaim area jauh
- batch sebelumnya belum diverifikasi live/GSC
