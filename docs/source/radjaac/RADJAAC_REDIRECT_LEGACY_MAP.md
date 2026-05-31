<!--
CURRENT STATUS NOTE (2026-05-31):
This document is retained as historical audit context.
For current migration readiness, use:
docs/audit/MIGRATION_READINESS_CURRENT.md
Do not treat old BLOCKER/PENDING/Hold/FINAL-MISSING labels here as current status without re-audit.
-->

# RADJAAC_REDIRECT_LEGACY_MAP.md

## Status

Needs monthly refresh

## Fungsi Dokumen

Dokumen ini menjadi peta URL lama, canonical target, dan tindakan teknis agar Google tidak bingung soal halaman mana yang harus dianggap final. Audit publik memverifikasi bahwa beberapa redirect penting memang sudah aktif: artikel harga AC 1/2 PK mengarah ke katalog 1/2 PK, artikel low watt lama mengarah ke katalog low watt, beberapa artikel brand lama mengarah ke brand page resmi, artikel kost lama mengarah ke B2B kost/apartemen, dan legacy B2B `/pengadaan-ac-proyek` mengarah ke `/pengadaan-ac`. Google menyebut redirect sebagai sinyal canonical yang kuat, sitemap seharusnya berisi URL canonical yang dipilih, dan linking internal sebaiknya langsung menunjuk ke canonical URL. Jika halaman diubah, Google menyediakan URL Inspection / request indexing untuk target yang dikelola, tetapi butuh waktu recrawl dan reindex. citeturn6view0turn6view1turn6view2turn6view3turn8view0turn8view1turn8view2turn8view3turn20view7turn33view1turn20view5turn20view6

## Prinsip Utama

- Semua URL lama yang intent-nya sudah ditangkap lebih baik oleh satu canonical page harus di-301, bukan dibiarkan bersaing.
- Sitemap hanya berisi target canonical yang ingin dimunculkan di hasil pencarian. URL redirect tidak masuk sitemap. citeturn20view6turn33view1
- Request indexing hanya untuk target final atau halaman yang diperbarui; bukan untuk URL lama yang sudah redirect. citeturn20view5turn15view0
- Trailing slash dan non-trailing slash harus diperlakukan konsisten; jika versi lama masih hidup, arahkan ke target final yang sama.
- Query yang sekarang sudah punya money page tidak boleh dibiarkan tetap hidup sebagai artikel lama dengan intent yang sama.
- Jika satu topik punya dua slug aktif atau terindeks, pilih satu canonical yang jelas dan beri redirect ke sisanya.

## Tabel Keputusan

| Legacy URL | Target URL | Status | Alasan | Internal Link Action | Sitemap Action | GSC Action | Prioritas |
|---|---|---|---|---|---|---|---|
| `/artikel/harga-ac-1-2-pk-purwokerto-pemasangan` | `/katalog/ac-1-2-pk` | Already redirected | Intent produk + kapasitas lebih tepat di katalog 1/2 PK; redirect terverifikasi saat audit | Remove internal link | Hanya target di sitemap | Check target only; do not request legacy | Tinggi |
| `/artikel/ac-low-watt-listrik-900-1300-watt-purwokerto` | `/katalog/ac-low-watt` | Already redirected | Intent kategori lebih tepat di katalog low watt; redirect terverifikasi saat audit | Remove internal link | Hanya target di sitemap | Check target only; do not request legacy | Tinggi |
| `/artikel/ac-low-watt-listrik-900-1300-watt-purwokerto/` | `/katalog/ac-low-watt` | Should redirect or confirm | Pastikan trailing slash dan non-trailing slash menuju target final yang sama | Remove internal link | Hanya target di sitemap | Inspect target; no request pada versi legacy | Tinggi |
| `/artikel/harga-ac-daikin-purwokerto` | `/brand/daikin` | Already redirected | Intent brand generik lebih tepat di brand hub; redirect terverifikasi | Remove internal link | Hanya target di sitemap | Check target only | Tinggi |
| `/artikel/daikin-inverter-purwokerto` | `/brand/daikin` | Already redirected | Artikel generik brand kacau dengan brand hub; redirect terverifikasi | Remove internal link | Hanya target di sitemap | Check target only | Tinggi |
| `/artikel/harga-ac-gree-purwokerto` | `/brand/gree` | Already redirected | Brand-intent harus konsolidasi ke brand page | Remove internal link | Hanya target di sitemap | Check target only | Tinggi |
| `/artikel/harga-ac-midea-purwokerto` | `/brand/midea` | Already redirected | Brand-intent harus konsolidasi ke brand page | Remove internal link | Hanya target di sitemap | Check target only | Tinggi |
| `/artikel/ac-untuk-kost-purwokerto` | `/pengadaan-ac/kost-apartemen-skala-besar` | Already redirected | Intent banyak unit lebih tepat di B2B page; redirect terverifikasi | Remove internal link | Hanya target di sitemap | Check target only | Tinggi |
| `/pengadaan-ac-proyek` | `/pengadaan-ac` | Already redirected | Legacy B2B hub lama sudah diganti canonical umum; redirect terverifikasi | Remove internal link | Hanya target di sitemap | Check target only | Tinggi |
| `/artikel/beli-ac-baru-purwokerto-panduan-sebelum-order` | `/artikel/panduan-beli-ac-baru` **atau** canonical buying-guide final | Should normalize | Konteks user menyebut target canonical buying guide, tetapi audit publik justru menampilkan `/artikel/panduan-instalasi-ac-baru`; harus dipilih satu slug final | Update internal links hanya ke slug final | Hanya slug final di sitemap | Inspect slug final; do not request dua slug | Tinggi |
| `/artikel/panduan-instalasi-ac-baru` | `/artikel/panduan-beli-ac-baru` **atau** tetap live sebagai canonical tunggal | Update content / normalize | Audit publik menampilkan slug ini sebagai buying-guide article; jangan biarkan dua slug serupa bersaing | Pilih satu target tunggal | Hanya canonical final di sitemap | Request indexing hanya untuk canonical final setelah keputusan | Tinggi |
| `/artikel/jual-ac-banyumas-konsultasi-pk-stok-pasang` | `/jual-ac-banyumas` | Should redirect | Intent lokal uang harus masuk ke area money page Banyumas, bukan artikel | Remove internal link | Jangan masukkan legacy ke sitemap | Inspect target; request indexing target setelah 301 dibuat | Tinggi |
| `/artikel/toko-ac-purwokerto-yang-bisa-konsultasi-pk` | `/jual-ac-purwokerto` | Should redirect | Query “toko AC Purwokerto” terlalu dekat dengan area money page Purwokerto dan berisiko cannibal | Remove internal link | Jangan masukkan legacy ke sitemap | Inspect target; request indexing target setelah 301 dibuat | Tinggi |
| `/artikel/samsung-inverter-purwokerto` | `/brand/samsung` | Should redirect | Intent brand generik, bukan model-specific; saat ini terlalu dekat dengan brand page | Remove internal link | Jangan masukkan legacy ke sitemap | Inspect target setelah redirect | Sedang |
| `/artikel/sharp-bey-purwokerto` | `/artikel/sharp-bey-purwokerto` | Keep live | Masih layak jika memang model-specific dan sempit | Keep contextual links only | Boleh di sitemap jika canonical & indexable | Check content quality | Sedang |
| `/artikel/ac-1-pk-untuk-ruangan-berapa` | `/artikel/ac-1-pk-untuk-ruangan-berapa` | Keep live | Intent edukasi sizing, tidak identik dengan katalog | Keep live, link ke katalog | Boleh tetap di sitemap | Update setelah katalog 1 PK live | Sedang |
| `/artikel/cara-memilih-ac-untuk-kamar-3x4` | `/artikel/cara-memilih-ac-untuk-kamar-3x4` | Keep live | Intent edukasi sizing dan ruangan spesifik | Keep live, link ke kalkulator & katalog | Boleh tetap di sitemap | Update jika CTA lemah | Sedang |
| `/artikel/ac-inverter-vs-low-watt` | `/artikel/ac-inverter-vs-low-watt` | Keep live | Intent komparasi sehat | Keep live, link ke dua katalog | Boleh tetap di sitemap | Update berkala | Sedang |
| `/artikel/ac-kurang-dingin-belum-tentu-freon-habis` | `/artikel/ac-kurang-dingin-belum-tentu-freon-habis` | Update content | Boleh hidup sebagai trust/education, tetapi bisa melenceng ke intent service | Kurangi internal link prominence | Boleh di sitemap bila relevan | Check if useful; do not over-index cluster service | Rendah |

Audit publik juga memperlihatkan bahwa URL lama yang sebenarnya sudah redirect kadang masih muncul sebagai hasil pencarian atau snippet. Itu tidak otomatis berarti redirect gagal; lebih sering berarti Google belum memproses ulang seluruh sinyal dan title/snippet. Karena itu workflow proyek harus fokus pada target final, sitemap canonical, dan internal links bersih. citeturn5search2turn2search16turn5search15turn7search0turn20view5turn20view7turn33view0

## Aturan untuk Assistant/Codex

- Setiap kali membuat redirect baru, update tiga hal sekaligus: internal links, sitemap, dan daftar URL untuk URL Inspection target.
- Jangan pernah menjadikan URL redirect sebagai tujuan link di navigation, body copy, breadcrumb, CTA, atau widget related posts.
- Jika ada dua slug untuk tema yang sama, pilih satu canonical berdasarkan peran bisnis dan intent. Yang kalah harus redirect, bukan sekadar canonical tag.
- Jika URL lama masih muncul di SERP, jangan panik dan jangan request indexing halaman lama. Inspect target final dan pastikan internal links sudah menunjuk ke target itu. citeturn20view5turn33view1
- Untuk trailing slash issues, canonical dan redirect harus konsisten; jangan biarkan dua versi 200 OK.
- Tambahkan redirect map ke source proyek sebelum deploy batch baru, agar tidak ada orphan rewrite.

## Jangan Dilakukan

- Jangan menghapus URL lama tanpa 301 redirect.
- Jangan request indexing URL lama yang sudah redirect.
- Jangan memasukkan URL redirect ke sitemap XML.
- Jangan membiarkan artikel lokal uang tetap hidup kalau area page sudah ada.
- Jangan memelihara slug buying-guide ganda.
- Jangan menunda pembersihan internal links setelah redirect; redirect tidak boleh dijadikan solusi permanen untuk navigasi internal.
- Jangan mengarahkan banyak legacy URL ke homepage jika ada target yang lebih relevan.

## Contoh Implementasi

Contoh keputusan slug buying-guide:

- **Pilih satu canonical final:** `/artikel/panduan-beli-ac-baru`
- **301 dari:** `/artikel/beli-ac-baru-purwokerto-panduan-sebelum-order`
- **301 dari:** `/artikel/panduan-instalasi-ac-baru` bila memang kontennya adalah buying guide yang sama
- **Perbarui internal links:** semua artikel, katalog, dan CTA yang sebelumnya menuju slug lama

Contoh workflow GSC setelah redirect baru:

- Jalankan 301
- Ganti semua internal link ke target final
- Pastikan source legacy tidak ada di sitemap
- Inspect target final
- Request indexing target final jika konten target juga diupdate
- Pantau Coverage + Performance selama beberapa minggu. Google menjelaskan bahwa perubahan besar butuh waktu recrawl/reindex dan fluktuasi sementara itu normal. citeturn33view0turn20view5
