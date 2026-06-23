# RADJA AC Growth Strategy

Dokumen ini adalah strategi pertumbuhan agresif RADJA AC untuk SEO lokal, ekspansi area, B2B/proyek, katalog, dan lead WhatsApp.

Source repo terbaru tetap sumber kebenaran teknis. Dokumen ini menetapkan prioritas ekspansi yang ofensif.

## Konteks & Tujuan Bisnis

Konteks monetisasi (dasar semua keputusan):

- Lead WhatsApp masuk ke nomor di situs, lalu diteruskan ke toko dengan margin per unit.
- **Ukuran keberhasilan utama: lead WhatsApp berkualitas ke nomor situs.** Itu yang dikejar, bukan traffic mentah.

Realita kompetisi head-term:

- Untuk head-term `AC Purwokerto` / `AC Banyumas`, Map Pack (GBP) toko menang dan lead-nya masuk ke nomor toko. Maka situs tidak buang energi bertarung frontal di situ.
- Banyumas/Purwokerto dipakai sebagai **brand hub + penangkap long-tail** — fondasi kuat, bukan medan tempur utama.

Arah pertumbuhan agresif (di sinilah lead jadi milik situs):

- **Target utama: luar Banyumas, gas penuh ke Jawa Tengah** (Kebumen, Cilacap, Purbalingga, Banjarnegara, Tegal, dan kota Jateng lain di luar jangkauan GBP toko).
- **Long-tail & buyer-intent** — panduan, kalkulator PK, perbandingan, “harga pasang AC”, “AC kost banyak unit”.
- **B2B / pengadaan / proyek / multi-unit** — nilai per-transaksi tinggi, nyaris tidak lewat Map Pack. Ini prioritas ofensif utama.

## Data & Input Keputusan

Keputusan ekspansi memakai data yang benar-benar tersedia:

- **Cloudflare Analytics (read-only)** — sumber utama traffic: page views, pengunjung unik, requests, negara/referrer, status code, cache, WAF.
- **Posisi organik / long-tail (cek live)** — audit on-page langsung ke URL live + riset SERP/kompetitor.
- **Kualitas lead WhatsApp** — sinyal konversi paling bernilai.

Sekunder (bila tersedia via export): GSC (query, CTR, impresi, indexing) dan GA4 (`whatsapp_click`, `generate_lead`).

Aturan: jangan menahan keputusan hanya karena GSC/GA4 belum ada. Gerak pakai Cloudflare Analytics + posisi organik live + kualitas lead WA; GSC/GA4 pelengkap.

## Misi Besar

RADJA AC adalah mesin lead untuk:

- pembelian AC rumah dan usaha
- katalog AC multi-brand
- area lokal dan regional
- pengadaan AC banyak unit
- WhatsApp lead yang terukur

Fokus: lead berkualitas ke nomor situs.

## Basis Authority

Basis kepercayaan RADJA AC:

- Purwokerto, Banyumas, Sokaraja
- showroom/gudang Pamijen, Sokaraja, Banyumas
- bukti pengiriman/proyek
- konsultasi PK, cek stok, pengiriman unit armada sendiri, pemasangan bergaransi 1 bulan

Homepage tetap brand hub. Jangan ubah homepage jadi city-money-page tunggal.

## Kondisi Aktif Pasca Migrasi

Migrasi Next.js dan technical SEO dasar sudah stabil:

- URL final `https://www.radjaac.com/...`, sitemap berisi URL final, robots/canonical/HTTPS/www sehat.
- Money page utama terbaca penuh dan terindeks.
- GA4 memakai gtag langsung (`whatsapp_click`, `generate_lead`).

Implikasi: fondasi sudah kuat, jadi fokus sekarang adalah **menyerang** — perkuat money page, ekspansi terarah ke Jateng + B2B, dan jaga kualitas lead. Publish halaman baru jalan terus selama tiap halaman unik dan kuat.

## Growth Schedule

Jadwal ini menjaga ritme batch tetap sehat di mata Google sambil terus menyerang — bukan menahan diri.

### Minggu 1

- polish copy money page prioritas supaya makin tegas dan konversi
- tambah internal link kontekstual yang membantu user
- request indexing untuk URL final penting yang baru diedit
- pantau traffic (Cloudflare) dan validasi event WA

### Minggu 2

Publish 1–2 halaman kuat yang memenuhi decision gates.

Prioritas:

1. money page yang sudah live tapi belum maksimal — buat lebih tajam
2. satu katalog buyer-intent P1
3. satu area Tier 1 dengan copy unik dan proof kuat

### Minggu 3–4

Publish 2–3 halaman per batch dengan jeda 7–10 hari. Setelah tiap batch: live check 200/canonical/sitemap, cek route/redirect collision, request indexing target penting, pantau traffic + kualitas chat WA.

Kalau muncul issue canonical/redirect/not-indexed yang menyentuh money page, rapikan dulu lalu lanjut menyerang.

### Bulan 2+

Naik ke 3–5 halaman per batch saat sinyal positif: traffic/posisi organik naik, lead WA stabil, halaman tidak kanibal, internal link natural, proof/operasional mendukung.

## Prinsip Ekspansi

Ekspansi memakai dua cincin dengan tilt utama ke luar Banyumas (Jawa Tengah) + B2B:

1. Cincin dekat (retail-area capture): Banyumas Raya (brand hub + long-tail), Jawa Tengah (target utama), DI Yogyakarta.
2. Cincin jauh (B2B/proyek): Jawa Barat, Banten, DKI Jakarta, Jawa Timur.

Kota besar jauh diserang lewat B2B/proyek lebih dulu — itu pintu masuk paling kuat dan bernilai tinggi, bukan retail page generik.

## Area Aktif Saat Ini

Area lokal dan regional yang sudah live:

- `/jual-ac-purwokerto`, `/jual-ac-banyumas`, `/jual-ac-sokaraja`, `/jual-ac-jatilawang`, `/jual-ac-cilongok`, `/jual-ac-ajibarang`, `/jual-ac-baturraden`, `/jual-ac-wangon`, `/jual-ac-karanglewas`, `/jual-ac-kembaran`, `/jual-ac-patikraja`, `/jual-ac-rawalo`
- `/jual-ac-yogyakarta`, `/jual-ac-semarang`, `/jual-ac-solo`, `/jual-ac-purbalingga`, `/jual-ac-cilacap`, `/jual-ac-kroya`, `/jual-ac-majenang`, `/jual-ac-sidareja`, `/jual-ac-kesugihan`, `/jual-ac-adipala`, `/jual-ac-kebumen`
- `/jual-ac-gombong`, `/jual-ac-karanganyar-kebumen`, `/jual-ac-kutowinangun` (child Kebumen, gaya quoted-key di `areaItems`)
- `/jual-ac-tegal`, `/jual-ac-banjarnegara`
- `/jual-ac-sumbang`, `/jual-ac-kedungbanteng`, `/jual-ac-kalibagor` (child Banyumas, promoted 2026-06)
- `/jual-ac-magelang`, `/jual-ac-pekalongan`, `/jual-ac-salatiga` (regional Jateng, published 2026-06-10)

Standar konten area: tiap halaman wajib punya `localContext` unik, minimal 5 `localLandmarks`, 3 `localBenefits`, 3 `localCases`, `clusterType` benar, dan `localFaq` berbasis lokasi (lihat `RADJAAC_AREA_PAGE_BLUEPRINT.md`). Cluster dipetakan di `areaClusterMap` (`content/areas/cluster-map.js`).

Kalau daftar berubah, cek `content/routes.js`, `content/areas/`, sitemap live, dan live 200.

## Retail Area Priority

Kota untuk retail-area page atau polish serius: Purwokerto, Banyumas, Sokaraja, Semarang, Yogyakarta, Solo, Cilacap, Kebumen, Tegal, Purbalingga, Banjarnegara, Magelang.

Prioritas:

1. Pegang Purwokerto/Banyumas/Sokaraja sebagai fondasi trust + brand hub.
2. Kuasai Banyumas ring: Ajibarang, Baturraden, Wangon, Karanglewas, Kembaran, Patikraja, Rawalo.
3. Pertajam regional Jawa Tengah yang sudah live sambil terus tambah kota Jateng baru.
4. Cilacap sebagai hub regional; Kroya, Majenang, Sidareja, Kesugihan, Adipala diperlakukan sebagai child yang kuat.
5. Saat menambah area baru, dahulukan kota Jawa Tengah di luar Banyumas — itu lahan paling subur untuk lead milik situs.

## B2B-First Priority

Kota besar yang diserang lewat B2B/proyek lebih dulu: Bandung, Bekasi, Tangerang, Tangerang Selatan, Jakarta (Barat/Selatan/Utara/Timur/Pusat), Surabaya, Malang, Karawang, Purwakarta, Cilegon.

Untuk kota ini, masuk dengan angle yang bernilai tinggi:

- pengadaan unit AC original
- kantor/ruko/proyek
- hotel/guest house/kost banyak unit
- pengiriman unit armada sendiri
- konsultasi spesifikasi + pemasangan bergaransi
- brief via WhatsApp

Jangan buat retail page generik yang berpura-pura punya toko lokal di sana — B2B jauh lebih kuat dan jujur.

## Coverage & Mention

Area yang disebut sebagai coverage di halaman induk yang kuat: Sleman, Bantul, Kulon Progo, Gunungkidul, Kudus, Jepara, Tasikmalaya, Sukabumi, Kediri, Madiun, Sidoarjo, Gresik, Jember, Pasuruan, Mojokerto.

Kudus dan Jepara sudah punya draft regional kuat (Kudus = industrial/kretek, Jepara = industrial/mebel) dengan pembeda intent B2B yang jelas. Publish per sinyal traffic/lead dan kapasitas batch.

## Positioning

Untuk area tanpa toko fisik, pakai framing kuat dan jujur:

- banyak unit ready, cek stok cepat
- konsultasi PK
- pengiriman unit armada sendiri
- pemasangan bergaransi 1 bulan
- kebutuhan rumah/toko/kost/kantor/banyak unit
- pembayaran fleksibel: COD, DP, atau transfer

Jangan pakai framing palsu: toko/cabang/showroom di kota tanpa lokasi nyata, “pemasangan pasti semua area”, “ready semua tipe”, atau “termurah”. Bukti nyata Radja AC sudah lebih kuat dari klaim kosong.

## Syarat Sebelum Ekspansi Metro Jauh

Sebelum gas penuh ke Bandung, Jakarta, Tangerang, Surabaya: tracking WA stabil, lead WA terbaca, area inti punya data traffic + posisi organik, trust/proof kuat, B2B page + katalog siap, CTA B2B jelas, internal link rapi, tidak ada route/redirect collision.

## Decision Gates

Sebelum tambah area/halaman baru, cek: source repo terbaru, halaman live, sitemap/internal link, Cloudflare Analytics, posisi organik live, kualitas lead WA, proof/trust, risiko doorway/klaim lokal palsu, dan jadwal batch.

Ekspansi gas jika: intent buyer jelas, halaman bisa unik dan kuat, internal link siap, trust/proof cukup, tracking lead terukur, risiko klaim lokal rendah.

Ekspansi dirapikan dulu jika: hanya swap nama area, template inti belum bersih, atau operasional/proof belum mendukung — perbaiki, lalu lanjut menyerang.

## Cara Memilih Next Page

Pilih dari data, bukan feeling: Cloudflare Analytics, posisi organik/long-tail, kualitas chat WA, kedekatan operasional, kekuatan internal link, kesiapan proof/trust.

Keputusan page: build (intent jelas + proof cukup + unik), polish (live tapi belum maksimal), B2B-first (kota besar), coverage (area kecil/jauh), redirect (URL lama kalah intent).

## Roadmap Aktif

1. Pegang Purwokerto/Banyumas/Sokaraja sebagai fondasi brand hub.
2. Kuasai dan hubungkan area Banyumas ring.
3. Pantau Cloudflare Analytics + posisi organik.
4. Perkuat internal link halaman prioritas secara kontekstual.
5. Pertajam regional Jawa Tengah yang live, sambil tambah kota Jateng baru.
6. Tambah halaman mengikuti ritme batch yang sehat — terus menyerang, bukan menahan.
7. Gas ekspansi ke regional Jawa Tengah + B2B; metro besar lewat B2B-first.
