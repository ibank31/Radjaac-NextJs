# RADJAAC_GSC_DECISION_PLAYBOOK.md

## RADJAAC GSC Decision Playbook

File: `RADJAAC_GSC_DECISION_PLAYBOOK.md`

### Status

Needs quarterly refresh

### Fungsi Dokumen

Dokumen ini menjadi SOP membaca Google Search Console untuk RADJA AC setelah restruktur template, redirect legacy, penambahan halaman area, penambahan katalog, dan ekspansi halaman B2B. Dasarnya: **tidak semua “Not indexed” adalah masalah**, redirect source memang tidak diindeks, URL Inspection dipakai untuk URL spesifik, request indexing hanya untuk sedikit URL prioritas, dan submit sitemap hanyalah sinyal, bukan jaminan indexing. GSC Performance dipakai untuk membaca klik, impresi, CTR, dan average position per query maupun per page. citeturn20search0turn21view4turn17view3turn29view0turn17view0

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
- Crawl diizinkan.
- Pengambilan halaman berhasil.
- Pengindeksan diizinkan.
- Canonical yang dinyatakan user mengarah ke URL `https://www.radjaac.com/...`.
- Canonical yang dipilih Google adalah URL yang diperiksa.
- HTTPS valid.
- Beberapa URL memiliki Breadcrumb/FAQ enhancement valid.

Keputusan operasional:

- Jangan patch robots, sitemap, canonical, layout metadata, atau routing karena asumsi de-index.
- Jangan request indexing ulang untuk URL yang sudah indexed kecuali setelah edit substansial.
- Request indexing hanya untuk URL final prioritas yang belum indexed atau baru dipublish/diedit besar.
- `site:` operator tidak boleh menjadi sumber keputusan utama; GSC URL Inspection dan live check lebih kuat.
- Internal link baru harus kontekstual. Jangan menambah link hanya untuk mengejar jumlah link.
- Untuk saat ini, fokus setelah indexing adalah query, CTR, posisi, canonical anomalies, dan landing page mapping.

### Prinsip Utama

- Baca GSC **berdasarkan pasangan query–page**, bukan query saja dan bukan page saja.
- Perlakukan redirect lama yang disengaja sebagai **normal**, selama target akhirnya benar dan internal link sudah diarahkan ke target final. citeturn21view4turn4view0turn4view1turn4view2turn4view3turn4view4turn2view4turn2view5
- Jangan spam request indexing. Google menyatakan ada kuota, dan request berulang untuk URL yang sama **tidak mempercepat crawl**. citeturn17view3
- Jika CTR rendah pada halaman prioritas, audit bukan hanya `<title>`, tetapi juga **main visual title / H1 / hero copy**, karena Google bisa menyusun title link dari beberapa sumber saat sinyal title utama tidak jelas. citeturn17view5turn2view0turn2view1turn2view2turn2view3
- Gunakan threshold internal 28 hari sebagai dasar keputusan. Ini **asumsi operasional**, bukan aturan Google.

### Tabel Keputusan

| GSC Signal | Artinya untuk RADJA AC | Normal/Bahaya | Tindakan | Prioritas | Catatan |
|---|---|---|---|---|---|
| `URL is on Google` | URL prioritas sudah eligible tampil di Google | Normal | Pantau query, CTR, dan posisi; tidak perlu request indexing ulang kecuali baru edit besar | Tinggi bila money page | URL Inspection “on Google” bukan jaminan selalu tampil untuk semua pencarian. citeturn9search1turn20search1 |
| `Page with redirect` pada URL legacy | Source lama tidak akan diindeks; yang penting target akhirnya benar | Normal jika sengaja | Biarkan 301 aktif, hapus semua internal link ke source, inspect target saja, jangan request indexing source | Tinggi bila source masih sering dicrawl | Google menjelaskan URL redirect non-canonical tidak diindeks; RADJA AC sudah memperlihatkan pola ini pada legacy artikel 1/2 PK, low watt, brand, Purwokerto, kost, dan pengadaan proyek. citeturn21view4turn4view0turn4view1turn4view2turn4view3turn4view4turn2view4turn2view5 |
| `Crawled - currently not indexed` pada money page baru/baru dipoles | Google sudah crawl, tapi belum memilih index | Waspada, bukan panik | Tunggu dulu; jika bertahan >14 hari pada URL prioritas, tambah internal link, perjelas intent, audit title/H1/body utama, lalu inspect live URL satu kali | Tinggi untuk halaman area/katalog/B2B utama | Google menyebut status ini bisa diindeks di masa depan dan **tidak perlu resubmit** untuk crawl. citeturn21view0 |
| `Discovered - currently not indexed` | Google tahu URL, tapi belum crawl | Waspada | Kurangi deploy serentak, pastikan link internal crawlable, pastikan sitemap akurat, jangan request indexing massal | Sedang–tinggi | Google menyebut ini biasanya karena crawl dijadwalkan ulang agar tidak membebani site. citeturn21view1turn17view4turn22view0 |
| `Duplicate without user-selected canonical` | Ada URL mirip tanpa canonical yang jelas | Waspada | Tetapkan canonical, rapikan internal link, bedakan konten secara substansial atau merge | Tinggi jika terjadi pada area/brand/katalog | Google menyebut ini bukan error bila memang duplicate, tetapi harus dibetulkan jika canonical yang dipilih salah. citeturn21view2turn17view2 |
| `Duplicate, Google chose different canonical than user` | RADJA AC memilih canonical A, Google memilih B | Bahaya bila mengenai money page | Inspect ketiga URL: current, user canonical, Google canonical; lalu samakan internal link, sitemap, dan konten dengan target canonical final | Tinggi | Jika URL pilihan user tidak mirip dengan current page, Google tidak akan memilihnya. citeturn21view2turn17view2 |
| `Alternate page with proper canonical` | Halaman alternate sudah menunjuk canonical dengan benar | Normal | Tidak perlu tindakan, kecuali canonical target salah | Rendah | Google menyebut “there is nothing you need to do.” citeturn21view3 |
| `Not found (404)` | URL tidak ada | Normal atau bahaya tergantung kasus | Jika benar-benar dihapus tanpa pengganti, biarkan 404; jika ada pengganti, pasang 301; selalu hapus internal link yang masih mengarah ke 404 | Sedang–tinggi | Google menyebut 404 tidak selalu masalah; jika page moved, gunakan 301. citeturn21view5 |
| Impressions tinggi, CTR rendah pada page prioritas | Relevansi awal ada, tapi snippet/title/hero belum cukup meyakinkan | Waspada | Polish title, meta description, H1, intro hero, CTA pertama; cek apakah Google me-rewrite title | Tinggi | GSC Performance memberi klik/impresi/CTR/posisi; Google menyarankan title utama jelas dan meta description unik/deskriptif. citeturn29view0turn17view5turn17view6 |
| Posisi rata-rata 8–20 dengan impresi mulai konsisten | Halaman punya peluang naik tanpa perlu bikin URL baru | Peluang | Tambah 2–3 internal link kontekstual, tambahkan section yang menjawab query, perkuat CTA yang sesuai intent | Tinggi | Link internal crawlable dan anchor text membantu Google memahami relevansi. citeturn17view4turn29view0 |
| Query area muncul di artikel atau brand, bukan area page | Mapping intent salah atau belum kuat | Bahaya ringan | Perkuat link ke area page yang benar; jika artikel/brand duplikatif, pertimbangkan merge/redirect | Tinggi | Gunakan dimensi Queries dan Pages bersama-sama; query bisa bervariasi menurut lokasi, device, dan history. citeturn29view0 |
| Query brand muncul di artikel brand lokal, bukan brand page | Risiko cannibalization brand | Bahaya ringan | Audit apakah artikel brand masih perlu hidup; jika intent murni komersial, arahkan authority ke `brand/{brand}` | Tinggi | Di RADJA AC, brand article lama seperti Midea/Daikin terlihat publik sebagai redirect ke brand page; pola ini sebaiknya dipertahankan. citeturn4view2turn4view3 |
| Query sizing muncul di artikel sizing dan kalkulator bersamaan | Bisa sehat bila intent dibedakan | Normal–waspada | Pertahankan artikel jika edukatif, kalkulator untuk tool intent; keduanya harus mengarah ke katalog/call to WhatsApp | Sedang | RADJA AC sudah punya kalkulator PK dan artikel sizing seperti `AC 1 PK untuk ruangan berapa` serta `kamar 3x4`. citeturn3search1turn25search13turn25search14 |
| Indexed SERP title/snippet masih versi lama/lokal | Google belum recrawl penuh atau memilih source title lama | Waspada | Bandingkan indexed vs live di URL Inspection; request indexing target satu kali; tunggu 7–14 hari; jangan rollback mendadak | Sedang–tinggi | Google menyatakan title link bisa dibuat dari banyak sumber; RADJA AC saat ini masih memperlihatkan mismatch antara snippet lama dan title live pada beberapa halaman/redirect. citeturn17view5turn3search2turn3search14turn4view2turn4view3 |
| Banyak page type menampilkan heading visual yang sama | Template ambiguity; rawan title rewrite dan CTR lemah | Bahaya template | Audit global main heading, hero copy, dan first visible title per template family | Tinggi | Homepage, katalog, low watt, Gree, Midea, kontak, tentang kami, dan proof view publik sama-sama menampilkan heading teratas yang sama. citeturn0view0turn2view0turn2view1turn2view2turn2view3turn30view0turn30view1turn30view2 |

### Aturan untuk Assistant/Codex

- Gunakan `URL Inspection` hanya untuk URL final yang memang ingin diindeks atau sedang di-debug.
- Jika sebuah URL sudah `301` ke target final, **jangan** menjadikannya target internal link, target request indexing, atau kandidat sitemap.
- Jika query baru muncul satu kali atau impresinya sangat kecil, masukkan ke watchlist; **jangan langsung bikin halaman baru**.
- Jika query konsisten tetapi landing page salah, betulkan dulu internal link, canonical, title/H1, dan body intent sebelum membuat URL baru.
- Template-level fix lebih diprioritaskan daripada edit mikro pada banyak URL, terutama selama heading utama antar-template masih belum jelas pembedaannya. citeturn17view5turn2view0turn2view1turn2view2turn2view3
- Gunakan window analisis 28 hari untuk keputusan eksekusi; data 24 jam cocok untuk debugging awal, bukan keputusan strategis. citeturn29view0

### Jangan Dilakukan

- Jangan panik terhadap fluktuasi 1–3 minggu sesudah redirect atau request indexing; Google menyebut recrawl/reindex perlu waktu dan request berulang tidak mempercepat proses. citeturn17view3turn18view4
- Jangan request indexing URL source yang sudah redirect.
- Jangan menilai query area/brand/B2B hanya dari satu hari data.
- Jangan menyimpulkan “page jelek” hanya dari status `Crawled - currently not indexed` tanpa audit intent, internal link, dan uniqueness.
- Jangan membiarkan artikel komersial baru memakan page target seperti area page, brand page, katalog page, atau B2B page.

### Contoh Implementasi

**Checklist mingguan GSC**

| Item | Fokus | Keputusan |
|---|---|---|
| Performance → Queries | Query prioritas: `jual ac purwokerto`, `jual ac banyumas`, `jual ac yogyakarta`, `ac low watt`, `ac inverter`, `ac daikin`, `ac gree`, `pengadaan ac`, `kalkulator pk ac` | Jika impresi konsisten naik, cek page target |
| Performance → Pages | `home`, katalog utama, brand utama, B2B utama, area utama | Jika CTR rendah, polish title/H1/hero |
| Page Indexing | Semua reason baru pada money pages | Debug hanya reason yang menyentuh page prioritas |
| URL Inspection | URL yang baru diedit minggu itu | Live test + request indexing seperlunya |

**Checklist bulanan GSC**

| Item | Fokus | Keputusan |
|---|---|---|
| Query-to-page map | Area vs brand vs katalog vs B2B vs artikel | Cegah cannibalization |
| Redirect hygiene | Legacy URL masih muncul atau tidak | Pastikan semua internal link sudah final |
| Indexed count by template family | Area, brand, katalog, B2B, artikel | Lihat template keluarga mana yang tertahan |
| CTR review | Halaman posisi bagus tetapi CTR lemah | Perbaiki snippet promise |
| Canonical review | Duplicate/canonical issues | Samakan sitemap + internal link + canonical |

**URL prioritas untuk URL Inspection**

- `/`
- `/jual-ac-purwokerto`
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

**URL yang tidak perlu request indexing**

- `artikel/harga-ac-1-2-pk-purwokerto-pemasangan`
- `artikel/ac-low-watt-listrik-900-1300-watt-purwokerto`
- `artikel/harga-ac-midea-purwokerto`
- `artikel/harga-ac-daikin-purwokerto`
- `artikel/toko-ac-purwokerto-yang-bisa-konsultasi-pk`
- `artikel/jual-ac-banyumas-konsultasi-pk-stok-pasang`
- `pengadaan-ac-proyek`
- `gallery`  
Semua URL di atas sudah atau terlihat publik sebagai redirect menuju target final. citeturn4view0turn4view1turn4view2turn4view3turn4view4turn4view5turn2view5turn30view1

**Metrik minimum pengambilan keputusan**  
*Semua angka di bawah adalah asumsi operasional RADJA AC, untuk dikalibrasi ulang setelah data live tersedia.*

| Trigger | Threshold 28 hari | Keputusan |
|---|---|---|
| Query candidate untuk halaman baru | ≥ 60 impresi dan posisi rata-rata ≤ 20, tetapi landing page salah atau belum ada page intent yang tepat | Masuk backlog pembuatan halaman |
| Internal link boost | ≥ 50 impresi dan posisi 8–20 | Tambah internal link + section baru |
| Title/meta/H1 polish | ≥ 150 impresi, CTR < 1,5%, posisi ≤ 8 | Polish snippet promise dan hero copy |
| Cannibalization review | Satu query masuk ke ≥ 2 URL, masing-masing ≥ 30 impresi | Audit merge, redirect, atau relink |
| Redirect/merge article | Artikel dan money page berburu intent yang sama 100% | Pilih satu target final |

**Pembacaan query family**

| Family Query | Target ideal | Jika landing salah | Tindakan |
|---|---|---|---|
| Area | area page | artikel / homepage | Perkuat area page, jangan bikin artikel komersial baru |
| Brand | brand page | artikel brand / homepage | Arahkan authority ke brand page |
| Katalog / kapasitas | katalog page | artikel “harga” | Link ke katalog, redirect bila duplikatif |
| B2B | B2B page | katalog kantor atau artikel | Tambah internal link B2B + project CTA |
| Edukasi | artikel atau kalkulator | money page | Boleh, asalkan CTA jelas menuju page target |
