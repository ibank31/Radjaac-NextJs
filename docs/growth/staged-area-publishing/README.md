# RADJA AC Staged Area Publishing Guide

Status: active operational guide.

Panduan ini dipakai saat staged area draft akan diaktifkan menjadi halaman live.

## File Penting

Live:
- content/areas/ (data area modular per region + cluster-map.js)
- content/routes.js

Staged, belum live:
- content/area-drafts.js
- content/area-child-drafts.js

Backlog:
- docs/growth/RADJA_AREA_PUBLISH_BACKLOG.md

## Prinsip

Draft belum live, belum masuk sitemap, dan belum boleh diminta indexing.

Jangan import file draft ke app, sitemap, route generator, atau komponen live.

Draft hanya menjadi live jika item dipindahkan ke file region yang sesuai di content/areas/ dan route ditambahkan ke content/routes.js.

## Publish Batch Rule

- Publish maksimal 3 sampai 5 area per batch.
- Parent atau hub harus live sebelum child.
- Jangan publish semua child sekaligus.
- Jangan request indexing massal.
- Tunggu 7 sampai 14 hari sebelum batch berikutnya.

## Pre-Publish Checklist

Sebelum publish, cek:

- intent buyer jelas
- bukan cuma swap nama area
- tidak ada klaim toko/cabang/showroom lokal palsu
- title, description, h1, intro aman
- localContext unik
- coverageNote jujur
- nearbyAreaLinks hanya ke URL live
- relatedLinks hanya ke URL live
- waIntent jelas
- waArea benar
- parent/hub sudah live untuk child
- route belum dipakai
- tidak ada redirect collision
- tidak ada keyword risky: termurah, ready semua, harga pasti, stok pasti

## Cara Publish Hub atau Kabupaten

Contoh publish jual-ac-magelang:

1. Buka content/area-drafts.js.
2. Ambil item slug jual-ac-magelang.
3. Tambah route di content/routes.js: jualAcMagelang: /jual-ac-magelang.
4. Pindahkan item ke file region yang sesuai di content/areas/ (untuk Magelang: content/areas/regional.js).
5. Ubah path menjadi routes.jualAcMagelang.
6. Hapus field staging yang tidak dipakai template live.
7. Cek nearbyAreaLinks tidak menuju draft yang belum live.
8. Tambah internal link masuk dari hub atau area relevan bila perlu.
9. Jalankan npm run check.
10. Push dan live check.

## Cara Publish Child atau Kecamatan

Contoh publish jual-ac-sumbang:

1. Pastikan parent /jual-ac-banyumas sudah live dan stabil.
2. Buka content/area-child-drafts.js.
3. Ambil item slug jual-ac-sumbang.
4. Tambah route di content/routes.js: jualAcSumbang: /jual-ac-sumbang.
5. Pindahkan item ke file region yang sesuai di content/areas/ (untuk Sumbang: content/areas/banyumas.js).
6. Ubah path menjadi routes.jualAcSumbang.
7. Pastikan child punya link balik ke parent lewat nearbyAreaLinks.
8. Tambah link dari parent/hub ke child hanya jika child sudah live.
9. Jalankan npm run check.
10. Push dan live check.

## Audit Sebelum Commit

Jalankan git diff --check.

Cek draft tidak sengaja di-import:

grep -RIn "areaDraftItems\|areaChildDraftItems\|area-drafts\|area-child-drafts" app components lib content/routes.js content/areas app/sitemap.js --exclude-dir=node_modules --exclude-dir=.next --exclude-dir=.git 2>/dev/null || true

Jalankan npm run check.

## Live Check Setelah Push

Cek HTTP:

curl -I https://www.radjaac.com/jual-ac-CONTOH 2>/dev/null | grep -iE 'HTTP/|cache-control|x-matched-path|server'

Cek canonical:

curl -s https://www.radjaac.com/jual-ac-CONTOH | grep -oE '<link rel="canonical" href="[^"]+"|<meta property="og:url" content="[^"]+"|<title>[^<]+' | head -10

Cek sitemap:

curl -s https://www.radjaac.com/sitemap.xml | grep 'jual-ac-CONTOH'

## GSC Setelah Live

- Jangan request indexing massal.
- Request maksimal 3 sampai 5 URL prioritas.
- Jangan request draft yang belum live.
- Kalau URL sudah ada di Google, jangan request ulang.
- Kalau Discovered - currently not indexed, jangan panik.
- Kalau Crawled - currently not indexed, audit kualitas dulu.

## Ketentuan Setelah Live

Setelah halaman baru live:

- jangan edit berkali-kali setiap hari
- jangan ubah title/meta massal
- pantau GSC 7 sampai 14 hari
- pantau GA4 whatsapp_click dan generate_lead
- jangan publish batch baru terlalu cepat
- jangan tambah klaim lokasi fisik tanpa bukti

## Rollback

Rollback jika:
- halaman 404
- canonical salah
- sitemap salah
- route collision
- internal link ke draft/404
- ada klaim toko/cabang/showroom lokal palsu
- build gagal

Cara rollback:

git revert COMMIT_ID
git push origin main
