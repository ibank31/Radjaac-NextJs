# RADJAAC_REDIRECT_LEGACY_MAP.md

## Status

Active redirect hygiene map. Refreshed for current repo/live state on 2026-06-04.

## Fungsi Dokumen

Dokumen ini menjadi peta URL lama, canonical target, dan tindakan teknis agar Google tidak bingung soal halaman mana yang final. Redirect legacy dipakai untuk mengalirkan sinyal dari URL lama ke target yang lebih relevan, bukan untuk dijadikan navigasi internal.

Source repo/live terbaru mengalahkan catatan audit lama. Jika ada audit lama menyebut BLOCKER/PENDING/Hold/FINAL-MISSING, jangan dianggap aktif tanpa cek ulang `curl`, sitemap, dan source repo.

## Prinsip Utama

- Semua URL lama yang intent-nya sudah ditangkap lebih baik oleh satu canonical page harus redirect permanen ke target paling relevan.
- Sitemap hanya berisi target canonical yang ingin dimunculkan di hasil pencarian. URL redirect tidak masuk sitemap.
- Request indexing hanya untuk target final atau halaman yang diperbarui; bukan untuk URL lama yang sudah redirect.
- Trailing slash dan non-trailing slash harus diperlakukan konsisten.
- Query yang sekarang sudah punya money page tidak boleh dibiarkan tetap hidup sebagai artikel lama dengan intent yang sama.
- Jika satu topik punya dua slug aktif, pilih keputusan berdasarkan intent nyata, bukan kemiripan judul saja.
- Internal link harus langsung ke target final, bukan ke source redirect.

## Current Live Notes — 2026-06-04

Audit owner menunjukkan:

- Sitemap live bersih dari known legacy URL.
- Legacy sample seperti `/toko-ac-terdekat`, `/daikin-purwokerto`, `/gree-purwokerto`, `/midea-purwokerto`, `/ac-inverter-purwokerto`, `/ac-low-watt-purwokerto`, `/pengadaan-ac-proyek`, `/gallery`, dan `/portfolio` menuju target final yang relevan.
- URL final yang diuji sudah Next.js, canonical www, dan HTTP 200 setelah redirect.
- Jangan request indexing source legacy. Inspect target final saja.

## Tabel Keputusan

| Legacy URL | Target URL | Status | Alasan | Internal Link Action | Sitemap Action | GSC Action | Prioritas |
|---|---|---|---|---|---|---|---|
| `/toko-ac-terdekat` | `/jual-ac-purwokerto` | Redirect active | Intent toko/AC lokal paling tepat ke money page Purwokerto | Link internal hanya ke target final | Legacy tidak masuk sitemap | Inspect target only | Tinggi |
| `/instalasi-ac-banyumas` | `/jual-ac-purwokerto` | Redirect active | Legacy instalasi lokal ditangkap oleh halaman lokal utama + opsi pemasangan | Remove legacy internal link | Legacy tidak masuk sitemap | Inspect target only | Tinggi |
| `/instalasi-profesional` | `/pengiriman-pemasangan` | Redirect active | Intent pemasangan umum lebih tepat ke page pengiriman/pemasangan | Link ke target final | Legacy tidak masuk sitemap | Inspect target only | Tinggi |
| `/daikin-purwokerto` | `/brand/daikin` | Redirect active | Brand intent harus konsolidasi ke brand page | Link ke brand final | Legacy tidak masuk sitemap | Inspect target only | Tinggi |
| `/gree-purwokerto` | `/brand/gree` | Redirect active | Brand intent harus konsolidasi ke brand page | Link ke brand final | Legacy tidak masuk sitemap | Inspect target only | Tinggi |
| `/midea-purwokerto` | `/brand/midea` | Redirect active | Brand intent harus konsolidasi ke brand page | Link ke brand final | Legacy tidak masuk sitemap | Inspect target only | Tinggi |
| `/ac-inverter-purwokerto` | `/katalog/ac-inverter` | Redirect active | Intent kategori lebih tepat di katalog inverter | Link ke katalog final | Legacy tidak masuk sitemap | Inspect target only | Tinggi |
| `/ac-low-watt-purwokerto` | `/katalog/ac-low-watt` | Redirect active | Intent kategori lebih tepat di katalog low watt | Link ke katalog final | Legacy tidak masuk sitemap | Inspect target only | Tinggi |
| `/pengadaan-ac-proyek` | `/pengadaan-ac` | Redirect active | Legacy B2B hub lama diganti canonical umum | Link ke B2B final | Legacy tidak masuk sitemap | Inspect target only | Tinggi |
| `/gallery` | `/bukti-pengiriman-proyek` | Redirect active | Proof/gallery lama diganti proof page final | Link ke proof final | Legacy tidak masuk sitemap | Inspect target only | Tinggi |
| `/portfolio` | `/bukti-pengiriman-proyek` | Redirect active | Portfolio lama paling relevan ke proof page | Link ke proof final | Legacy tidak masuk sitemap | Inspect target only | Tinggi |
| `/artikel/harga-ac-1-2-pk-purwokerto-pemasangan` | `/katalog/ac-1-2-pk` | Redirect active / keep consolidated | Intent produk + kapasitas lebih tepat di katalog 1/2 PK | Remove legacy internal link | Hanya target di sitemap | Inspect target only | Tinggi |
| `/artikel/ac-low-watt-listrik-900-1300-watt-purwokerto` | `/katalog/ac-low-watt` | Redirect active / keep consolidated | Intent kategori lebih tepat di katalog low watt | Remove legacy internal link | Hanya target di sitemap | Inspect target only | Tinggi |
| `/artikel/harga-ac-daikin-purwokerto` | `/brand/daikin` | Redirect active / keep consolidated | Brand-intent harus ke brand page | Remove legacy internal link | Hanya target di sitemap | Inspect target only | Tinggi |
| `/artikel/harga-ac-gree-purwokerto` | `/brand/gree` | Redirect active / keep consolidated | Brand-intent harus ke brand page | Remove legacy internal link | Hanya target di sitemap | Inspect target only | Tinggi |
| `/artikel/harga-ac-midea-purwokerto` | `/brand/midea` | Redirect active / keep consolidated | Brand-intent harus ke brand page | Remove legacy internal link | Hanya target di sitemap | Inspect target only | Tinggi |
| `/artikel/ac-untuk-kost-purwokerto` | `/pengadaan-ac/kost-apartemen-skala-besar` | Redirect active / keep consolidated | Intent banyak unit lebih tepat di B2B kost/apartemen | Remove legacy internal link | Hanya target di sitemap | Inspect target only | Tinggi |
| `/artikel/jual-ac-banyumas-konsultasi-pk-stok-pasang` | `/jual-ac-banyumas` | Redirect / no indexing source | Intent lokal uang harus ke area money page Banyumas | Remove legacy internal link | Jangan masuk sitemap | Inspect target only | Tinggi |
| `/artikel/toko-ac-purwokerto-yang-bisa-konsultasi-pk` | `/jual-ac-purwokerto` | Redirect / no indexing source | Query “toko AC Purwokerto” terlalu dekat dengan area money page | Remove legacy internal link | Jangan masuk sitemap | Inspect target only | Tinggi |
| `/artikel/samsung-inverter-purwokerto` | `/brand/samsung` | Redirect if not model-specific | Intent brand generik lebih tepat di brand page | Remove legacy internal link jika redirect | Jangan legacy sitemap | Inspect target after decision | Sedang |
| `/artikel/sharp-bey-purwokerto` | Keep live | Model-specific / article intent sempit | Masih layak bila tidak memakan brand/money page | Keep contextual link only | Boleh di sitemap jika canonical/indexable | Monitor content quality | Sedang |
| `/artikel/ac-1-pk-untuk-ruangan-berapa` | Keep live | Edukasi sizing | Intent edukasi, bukan transaksi katalog | Link ke kalkulator/katalog | Boleh sitemap | Monitor cannibalization | Sedang |
| `/artikel/cara-memilih-ac-untuk-kamar-3x4` | Keep live | Edukasi ruangan spesifik | Intent edukasi dan lead warming | Link ke kalkulator/katalog | Boleh sitemap | Monitor CTA | Sedang |
| `/artikel/ac-inverter-vs-low-watt` | Keep live | Komparasi sehat | Mendukung dua katalog berbeda | Link ke low watt + inverter | Boleh sitemap | Update berkala | Sedang |
| `/artikel/ac-kurang-dingin-belum-tentu-freon-habis` | Keep/update cautiously | Edukasi/trust, bukan service cluster utama | Jangan terlalu dominan sebagai service intent | Link secukupnya ke konsultasi/kalkulator | Boleh sitemap jika relevan | Monitor intent | Rendah |
| `/artikel/panduan-beli-ac-baru` | Keep live | Buying guide | Fokus keputusan beli unit, PK, daya, brand, anggaran, stok | Link ke katalog/kalkulator | Boleh sitemap | Monitor CTR/lead | Tinggi |
| `/artikel/panduan-instalasi-ac-baru` | Keep live if install intent remains clear | Installation guide | Fokus indoor/outdoor, pipa, drainase, listrik, titik pemasangan | Link ke pengiriman-pemasangan/katalog terkait | Boleh sitemap | Jangan merge kecuali konten kembali duplikatif | Sedang |

## Keputusan Khusus: Dua Artikel Panduan AC Baru

Jangan otomatis merge `/artikel/panduan-beli-ac-baru` dan `/artikel/panduan-instalasi-ac-baru`.

Keputusan saat ini:

- `/artikel/panduan-beli-ac-baru` tetap hidup sebagai buying guide: ukuran ruangan, PK, daya listrik, tipe AC, brand, garansi, stok, dan anggaran.
- `/artikel/panduan-instalasi-ac-baru` tetap hidup sebagai installation guide: posisi indoor, outdoor, jalur pipa, drainase, listrik, dan kesiapan titik pemasangan.

Merge/redirect hanya dilakukan jika audit konten terbaru membuktikan keduanya kembali mengejar intent yang sama 100%. Selama intent berbeda, lebih aman mempertahankan keduanya dan menguatkan internal link ke money page yang tepat.

## Aturan untuk Assistant/Codex

- Setiap kali membuat redirect baru, update tiga hal sekaligus: internal links, sitemap, dan daftar URL untuk URL Inspection target.
- Jangan pernah menjadikan URL redirect sebagai tujuan link di navigation, body copy, breadcrumb, CTA, atau widget related posts.
- Jika ada dua slug untuk tema yang sama, pilih satu canonical berdasarkan peran bisnis dan intent. Yang kalah harus redirect, bukan sekadar canonical tag.
- Jika URL lama masih muncul di SERP, jangan panik dan jangan request indexing halaman lama. Inspect target final dan pastikan internal links sudah menunjuk ke target itu.
- Untuk trailing slash issues, canonical dan redirect harus konsisten; jangan biarkan dua versi 200 OK.
- Tambahkan redirect map ke source proyek sebelum deploy batch baru, agar tidak ada orphan rewrite.
- AI/parser audit lama tidak boleh mengalahkan curl/live/GSC.

## Jangan Dilakukan

- Jangan menghapus URL lama tanpa redirect ke target paling relevan.
- Jangan request indexing URL lama yang sudah redirect.
- Jangan memasukkan URL redirect ke sitemap XML.
- Jangan membiarkan artikel lokal uang tetap hidup kalau area page sudah ada.
- Jangan memelihara slug buying-guide ganda jika intent-nya identik, tetapi jangan merge dua artikel yang intent-nya sudah jelas berbeda.
- Jangan menunda pembersihan internal links setelah redirect; redirect tidak boleh dijadikan solusi permanen untuk navigasi internal.
- Jangan mengarahkan banyak legacy URL ke homepage jika ada target yang lebih relevan.

## Workflow GSC setelah Redirect Baru

1. Jalankan redirect.
2. Ganti semua internal link ke target final.
3. Pastikan source legacy tidak ada di sitemap.
4. Inspect target final.
5. Request indexing target final jika konten target juga diupdate penting.
6. Pantau Coverage + Performance selama beberapa minggu.
