# RADJAAC_GSC_DECISION_PLAYBOOK.md

## RADJAAC GSC Decision Playbook

File: `RADJAAC_GSC_DECISION_PLAYBOOK.md`

### Status

Active. Last aligned with live owner audit and URL Inspection on 2026-06-04.

### Fungsi Dokumen

Dokumen ini menjadi SOP membaca Google Search Console untuk RADJA AC setelah migrasi Next.js, redirect legacy, penambahan halaman area, katalog, dan ekspansi B2B. Dasarnya: tidak semua `Not indexed` adalah masalah, redirect source memang tidak diindeks, URL Inspection dipakai untuk URL spesifik, request indexing hanya untuk sedikit URL prioritas, dan sitemap hanyalah sinyal discovery, bukan jaminan ranking/indexing cepat.

GSC Performance harus dibaca sebagai pasangan query–page: klik, impresi, CTR, average position, dan landing page yang dipilih Google.

### Source of Truth untuk GSC / Rendering

Urutan kebenaran saat menilai indexing/rendering RADJA AC:

1. GSC URL Inspection live untuk URL final `https://www.radjaac.com/...`.
2. `curl` terminal owner: status code, redirect chain, canonical, title, HTML marker Next.js seperti `__next_f`, `_next/static`, dan `next-size-adjust`.
3. Sitemap/robots live.
4. Source repo terbaru.
5. AI parser eksternal, webpage parser tanpa header, dan `site:` operator hanya sebagai sinyal lemah.

Jika parser AI menyebut halaman kosong/CSR/SPA lama tetapi `curl` dan GSC menunjukkan HTTP 200, canonical www, title spesifik, dan Next.js marker, maka parser AI dianggap false positive.

### Current GSC Status — 2026-06-04

Klaim `de-index total` tidak berlaku untuk kondisi RADJA AC saat audit ini.

URL Inspection menunjukkan URL berikut sudah `URL ada di Google` dan `Halaman diindeks`:

- `https://www.radjaac.com/`
- `https://www.radjaac.com/jual-ac-purwokerto`
- `https://www.radjaac.com/jual-ac-banyumas`
- `https://www.radjaac.com/katalog`
- `https://www.radjaac.com/brand/gree`
- `https://www.radjaac.com/brand/daikin`
- `https://www.radjaac.com/pengadaan-ac`
- `https://www.radjaac.com/kontak`

Temuan umum:

- Sitemap terdeteksi: `https://www.radjaac.com/sitemap.xml`.
- Robots live sehat: allow crawl dan menunjuk sitemap.
- Crawl diizinkan.
- Pengambilan halaman berhasil.
- Pengindeksan diizinkan.
- Canonical user mengarah ke URL `https://www.radjaac.com/...`.
- Canonical yang dipilih Google pada URL indexed adalah URL yang diperiksa.
- HTTPS valid.
- Beberapa URL memiliki Breadcrumb/FAQ enhancement valid.
- Non-www redirect ke www berjalan; status 307 boleh dirapikan menjadi 301, tetapi bukan blocker indexing selama canonical/GSC final sudah benar.

Keputusan operasional:

- Jangan patch robots, sitemap, canonical, layout metadata, cache, atau routing karena asumsi de-index.
- Jangan request indexing ulang untuk URL yang sudah indexed kecuali setelah edit substansial.
- Request indexing hanya untuk URL final prioritas yang belum indexed atau baru dipublish/diedit besar.
- `site:` operator tidak boleh menjadi sumber keputusan utama.
- Internal link baru harus kontekstual. Jangan menambah link hanya untuk mengejar jumlah link.
- Fokus setelah indexing adalah query, CTR, posisi, canonical anomalies, dan landing page mapping.

### Post-Migration GSC Schedule

#### H+0 sampai H+7

- Inspect sampel URL final prioritas.
- Validasi sitemap/robots/canonical.
- Request indexing hanya untuk URL final www yang baru diedit penting.
- Jangan request indexing URL non-www, legacy redirect, atau source 301/307/308.
- Jangan memutuskan halaman baru dari data 24 jam.

#### H+7 sampai H+14

- Baca GSC Pages dan Queries untuk URL prioritas.
- Jika ada URL prioritas belum indexed, cek live HTTP, canonical, sitemap, internal link, dan uniqueness.
- Boleh publish 1–2 halaman jika teknis stabil dan halaman unik.
- Jangan publish batch besar hanya karena ranking head term masih jauh.

#### H+14 sampai H+30

- Gunakan window awal 14–28 hari untuk melihat query-to-page mapping.
- Polish title/H1/intro/CTA untuk halaman yang mulai impresi tetapi CTR rendah.
- Tambahkan 2–3 internal link kontekstual bila query-page mapping salah atau page butuh penguatan discovery.
- Boleh publish 2–3 halaman per batch, jeda 7–10 hari, jika tidak ada issue indexing baru.

#### H+30 ke atas

- Gunakan window 28 hari sebagai dasar keputusan rutin.
- Batch boleh naik 3–5 halaman bila GSC/GA4 stabil.
- Metro jauh tetap B2B-first sampai proof/trust dan lead data cukup.

### Prinsip Utama

- Baca GSC berdasarkan pasangan query–page, bukan query saja dan bukan page saja.
- Perlakukan redirect lama yang disengaja sebagai normal, selama target akhirnya benar dan internal link sudah diarahkan ke target final.
- Jangan spam request indexing; request berulang untuk URL yang sama tidak mempercepat crawl.
- Jika CTR rendah pada halaman prioritas, audit bukan hanya `<title>`, tetapi juga H1, hero copy, intro, dan CTA pertama.
- Gunakan threshold internal 28 hari sebagai dasar keputusan strategis. Ini asumsi operasional RADJA AC, bukan aturan Google.
- Data 24 jam cocok untuk debugging awal, bukan keputusan ekspansi.

### Tabel Keputusan

| GSC Signal | Artinya untuk RADJA AC | Normal/Bahaya | Tindakan | Prioritas |
|---|---|---|---|---|
| `URL is on Google` | URL prioritas eligible tampil | Normal | Pantau query, CTR, posisi; jangan request ulang kecuali edit besar | Tinggi bila money page |
| `Page with redirect` pada URL legacy | Source lama tidak akan diindeks | Normal jika sengaja | Biarkan redirect, hapus internal link ke source, inspect target final saja | Tinggi bila source masih muncul |
| `Crawled - currently not indexed` pada money page baru | Google sudah crawl tapi belum memilih index | Waspada, bukan panik | Tunggu; jika >14 hari pada URL prioritas, audit intent, uniqueness, canonical, internal link | Tinggi |
| `Discovered - currently not indexed` | Google tahu URL tapi belum crawl | Waspada | Pastikan sitemap/link internal; jangan deploy massal; jangan request massal | Sedang–tinggi |
| `Duplicate without user-selected canonical` | Ada URL mirip tanpa canonical jelas | Waspada | Tetapkan canonical/redirect, rapikan internal link, bedakan atau merge konten | Tinggi |
| `Duplicate, Google chose different canonical than user` | Google memilih canonical lain | Bahaya pada money page | Inspect current, user canonical, Google canonical; samakan internal link/sitemap/konten | Tinggi |
| `Alternate page with proper canonical` | Alternate sudah benar | Normal | Tidak perlu tindakan kecuali target canonical salah | Rendah |
| `Not found (404)` | URL tidak ada | Tergantung | Biarkan jika memang hilang; 301 jika ada pengganti; hapus internal link | Sedang |
| Impressions tinggi, CTR rendah | Relevansi awal ada, snippet kurang meyakinkan | Waspada | Polish title/meta/H1/hero/CTA; cek title rewrite | Tinggi |
| Posisi rata-rata 8–20 dan impresi konsisten | Ada peluang naik tanpa URL baru | Peluang | Tambah internal link kontekstual + section yang menjawab query | Tinggi |
| Query area muncul di artikel/brand, bukan area page | Mapping intent salah | Bahaya ringan | Perkuat area page, relink, redirect artikel bila duplikatif | Tinggi |
| Query brand muncul di artikel brand lokal | Risiko cannibalization brand | Bahaya ringan | Arahkan authority ke `brand/{brand}` | Tinggi |
| Query sizing muncul di artikel dan kalkulator | Bisa sehat bila intent beda | Normal–waspada | Artikel edukatif, kalkulator tool intent; keduanya link ke katalog/WA | Sedang |
| Indexed title/snippet masih versi lama | Google belum recrawl penuh atau memilih source lama | Waspada | Bandingkan indexed vs live; request target satu kali jika baru edit; tunggu 7–14 hari | Sedang |
| Audit lama menyebut template/heading ambigu | Historical unless reverified | Jangan dianggap aktif otomatis | Cek ulang live HTML/GSC sebelum patch template | Sedang |

### Aturan untuk Assistant/Codex

- Gunakan URL Inspection hanya untuk URL final yang ingin diindeks atau sedang di-debug.
- Jika URL sudah redirect, jangan jadikan target internal link, request indexing, atau sitemap.
- Jika query baru muncul satu kali atau impresinya sangat kecil, masukkan watchlist; jangan langsung bikin halaman baru.
- Jika query konsisten tetapi landing page salah, betulkan dulu internal link, canonical, title/H1, dan body intent sebelum membuat URL baru.
- Template-level fix diprioritaskan hanya jika masalah template terbukti live, bukan dari audit/parser lama.
- Gunakan window 28 hari untuk keputusan eksekusi; data 24 jam hanya untuk debugging.

### Jangan Dilakukan

- Jangan panik terhadap fluktuasi 1–3 minggu sesudah redirect, deploy, atau request indexing.
- Jangan request indexing URL source yang sudah redirect.
- Jangan menilai query area/brand/B2B hanya dari satu hari data.
- Jangan menyimpulkan “page jelek” hanya dari status `Crawled - currently not indexed` tanpa audit intent, internal link, dan uniqueness.
- Jangan membiarkan artikel komersial baru memakan page target seperti area, brand, katalog, atau B2B.
- Jangan patch berdasarkan AI parser yang tidak membaca HTTP header/streamed HTML.

### Checklist Mingguan GSC

| Item | Fokus | Keputusan |
|---|---|---|
| Performance → Queries | `jual ac purwokerto`, `jual ac banyumas`, `jual ac yogyakarta`, `ac low watt`, `ac inverter`, `ac daikin`, `ac gree`, `pengadaan ac`, `kalkulator pk ac` | Jika impresi konsisten naik, cek page target |
| Performance → Pages | home, katalog utama, brand utama, B2B utama, area utama | Jika CTR rendah, polish title/H1/hero |
| Page Indexing | Reason baru pada money pages | Debug hanya reason yang menyentuh page prioritas |
| URL Inspection | URL yang baru diedit minggu itu | Live test + request indexing seperlunya |

### Checklist Bulanan GSC

| Item | Fokus | Keputusan |
|---|---|---|
| Query-to-page map | Area vs brand vs katalog vs B2B vs artikel | Cegah cannibalization |
| Redirect hygiene | Legacy URL masih muncul atau tidak | Pastikan internal link sudah final |
| Indexed count by template family | Area, brand, katalog, B2B, artikel | Lihat template mana yang tertahan |
| CTR review | Halaman posisi bagus tetapi CTR lemah | Perbaiki snippet promise |
| Canonical review | Duplicate/canonical issues | Samakan sitemap + internal link + canonical |

### URL prioritas untuk URL Inspection

- `/`
- `/jual-ac-purwokerto`
- `/jual-ac-banyumas`
- `/katalog`
- `/katalog/ac-1-2-pk`
- `/katalog/ac-low-watt`
- `/katalog/ac-inverter`
- `/pengadaan-ac`
- `/pengadaan-ac/kontraktor-developer`
- `/pengadaan-ac/hotel-guest-house`
- `/pengadaan-ac/kost-apartemen-skala-besar`
- `/brand/daikin`
- `/brand/gree`
- `/brand/midea`
- `/kalkulator-pk-ac`
- `/kontak`
- `/bukti-pengiriman-proyek`

### URL yang tidak perlu request indexing

- `/artikel/harga-ac-1-2-pk-purwokerto-pemasangan`
- `/artikel/ac-low-watt-listrik-900-1300-watt-purwokerto`
- `/artikel/harga-ac-midea-purwokerto`
- `/artikel/harga-ac-daikin-purwokerto`
- `/artikel/toko-ac-purwokerto-yang-bisa-konsultasi-pk`
- `/artikel/jual-ac-banyumas-konsultasi-pk-stok-pasang`
- `/pengadaan-ac-proyek`
- `/gallery`
- `/portfolio`

Semua URL di atas adalah legacy/redirect context. Inspect target final, bukan source legacy.

### Metrik Minimum Pengambilan Keputusan

Semua angka di bawah adalah asumsi operasional RADJA AC, untuk dikalibrasi ulang setelah data live tersedia.

| Trigger | Threshold 28 hari | Keputusan |
|---|---|---|
| Query candidate untuk halaman baru | ≥ 60 impresi dan posisi rata-rata ≤ 20, tetapi landing page salah atau belum ada page intent yang tepat | Masuk backlog pembuatan halaman |
| Internal link boost | ≥ 50 impresi dan posisi 8–20 | Tambah internal link + section baru |
| Title/meta/H1 polish | ≥ 150 impresi, CTR < 1,5%, posisi ≤ 8 | Polish snippet promise dan hero copy |
| Cannibalization review | Satu query masuk ke ≥ 2 URL, masing-masing ≥ 30 impresi | Audit merge, redirect, atau relink |
| Redirect/merge article | Artikel dan money page berburu intent yang sama 100% | Pilih satu target final |

### Pembacaan Query Family

| Family Query | Target ideal | Jika landing salah | Tindakan |
|---|---|---|---|
| Area | area page | artikel / homepage | Perkuat area page, jangan bikin artikel komersial baru |
| Brand | brand page | artikel brand / homepage | Arahkan authority ke brand page |
| Katalog / kapasitas | katalog page | artikel “harga” | Link ke katalog, redirect bila duplikatif |
| B2B | B2B page | katalog kantor atau artikel | Tambah internal link B2B + project CTA |
| Edukasi | artikel atau kalkulator | money page | Boleh, asalkan CTA jelas menuju page target |
