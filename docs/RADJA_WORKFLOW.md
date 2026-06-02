# RADJA AC Working Workflow

Dokumen ini adalah pintu utama untuk kerja teknis, SEO, tracking, GSC, dan deploy RADJA AC.

## Urutan Baca Wajib Assistant / Codex

Setiap sesi kerja RADJA AC wajib dimulai dari urutan ini:

1. `docs/RADJA_WORKFLOW.md`
2. `docs/source/radjaac/RADJAAC_DO_NOT_VIOLATE_RULES.md`
3. `docs/RADJA_GROWTH_STRATEGY.md`
4. File source sesuai task:
   - Area page: `docs/source/radjaac/RADJAAC_AREA_PAGE_BLUEPRINT.md`
   - Title/meta: `docs/source/radjaac/RADJAAC_TITLE_META_LIBRARY.md`
   - Trust/proof: `docs/source/radjaac/RADJAAC_TRUST_ASSET_MAP.md`
   - GSC/indexing: `docs/source/radjaac/RADJAAC_GSC_DECISION_PLAYBOOK.md`
   - Katalog: `docs/source/radjaac/RADJAAC_KATALOG_CAPACITY_MAP.md`
   - Redirect: `docs/source/radjaac/RADJAAC_REDIRECT_LEGACY_MAP.md`
   - Market/kompetitor/ekspansi: `RADJAAC_MARKET_MAP_JAWA.md`, `RADJAAC_SERP_AREA_COMPETITOR_MAP.md`, `RADJAAC_JAVA_EXPANSION_BY_PROVINCE.md`
5. Baru cek source repo aktif: `content/`, `app/`, `components/`, `lib/`, routes, sitemap, dan live 200 bila relevan.
6. Baru patch kecil, lalu verifikasi.

Aturan ini wajib karena `RADJAAC_DO_NOT_VIOLATE_RULES.md` memuat guardrail positioning utama. Jangan mulai dari file strategi area/market tanpa membaca guardrail tersebut.


## Guardrail Positioning Singkat

RADJA AC harus diposisikan kuat dan tetap jujur sebagai supplier AC original multi-brand untuk rumah, toko, ruko, kantor, hotel, guest house, hospitality, kontraktor, developer, proyek, pengadaan, partai besar, dan banyak unit.

Jangan memakai framing yang membuat RADJA AC terlihat kecil, defensif, atau hanya cocok untuk order kecil. Daftar istilah yang wajib dihindari ada di `RADJAAC_DO_NOT_VIOLATE_RULES.md`.

Klaim kuat harus berbasis bukti: Proshop Gree, sertifikat Authorized Dealer yang tersedia, showroom/gudang nyata, stok fisik, dokumentasi pengiriman, dan dokumentasi pemasangan.

Untuk copy user-facing, gunakan kalimat familiar seperti `Showroom dan gudang RADJA AC ada di Banyumas` atau `RADJA AC melayani pengiriman dan opsi pemasangan dari Banyumas`.


## Source of Truth

Source repo terbaru dan bukti live production adalah sumber kebenaran utama.

Urutan kebenaran:
1. Source repo terbaru: `app/`, `content/`, `components/`, `lib/`, `next.config.mjs`
2. Bukti runtime: `npm run check`, build output, live HTTP, live HTML, sitemap, GA4 Realtime, GSC export
3. Dokumen aktif di `docs/`
4. Chat lama atau dokumen lama yang sudah dihapus dari working tree hanya dianggap histori Git

Jika dokumen bertentangan dengan source repo atau live production, source repo dan live production yang menang.

## Workflow Wajib

Default kerja saat ini:
1. Audit source dan/atau live
2. Tentukan scope
3. Patch kecil
4. Jalankan `npm run check`
5. Commit
6. Push `main`
7. Tunggu deploy selesai
8. Live check
9. Data check jika menyangkut GA4/GSC/tracking

Catatan: workflow branch/PR boleh dipakai untuk perubahan besar, tetapi kerja Termux harian saat ini memakai commit kecil langsung ke `main` setelah `npm run check` hijau.

## Build Policy

`npm run check` wajib jika:
- tambah route baru
- ubah template global
- ubah analytics/tracking
- ubah sitemap/routes
- ubah `next.config.mjs`
- ubah `public/_headers`
- ubah komponen yang dipakai banyak halaman
- sebelum push final

`npm run check` tidak wajib untuk:
- audit tanpa perubahan file
- grep/check
- dokumentasi murni

Namun jika dokumentasi ikut di-commit bersama perubahan source, jalankan `npm run check` sebelum push.

## Area Page Checklist

Halaman area baru wajib punya:
- Title/H1 keyword utama
- Description buyer intent
- Intro area
- Local context unik
- Common needs unik
- Buying checks unik
- Keyword variants
- Curated nearby links
- Custom local FAQ
- WA area/source/intent
- Trust/payment mengikuti template
- Sitemap
- Live 200
- Safety scan 0

Jangan membuat halaman area yang hanya swap nama area.

## Claim Safety

Hindari:
- termurah
- ready semua
- stok pasti
- harga pasti
- cabang/showroom palsu
- pemasangan pasti semua area

Gunakan:
- cek stok dulu
- ketersediaan dikonfirmasi
- area pengiriman dicek
- konsultasi pemasangan
- opsi pemasangan dikonfirmasi
- pembayaran fleksibel: COD, DP, atau transfer

## WhatsApp Tracking

GA4 Measurement ID aktif:
`G-FVQSY68276`

Repo memakai gtag langsung, bukan GTM container.

Event lead utama:
- `whatsapp_click`
- `generate_lead`

`generate_lead` disarankan menjadi key event utama.

Test internal:
Buka URL dengan `?radja_test=1`, klik WhatsApp, lalu cek GA4 Realtime/DebugView.

Jangan memakai `purchase` sebagai patokan klik WhatsApp.

## GSC Rules

Jangan panik karena not indexed.

`Ditemukan - saat ini tidak diindeks`:
Google tahu URL, tapi belum crawl. Cek sitemap/internal link, lalu tunggu.

`Di-crawl - saat ini tidak diindeks`:
Google sudah crawl. Cek kualitas, canonical, duplikasi, internal link, dan intent.

Jangan request indexing massal.
Jangan validasi ulang karena panik.
Audit URL penting dulu.

## Redirect + Sitemap Rules

- Route aktif tidak boleh menjadi redirect source.
- URL final harus masuk sitemap jika ingin index.
- URL legacy diarahkan ke target paling relevan.
- Internal link harus mengarah ke URL final, bukan URL redirect.
- Jika URL lama dihidupkan jadi page final, hapus redirect source-nya.

## Internal Link Rules

- Homepage tidak perlu link ke semua kecamatan.
- Hub link ke turunan prioritas.
- Turunan link balik ke hub dan 2–4 area tetangga.
- Jangan semua halaman link ke semua halaman.

## Reset Keyword

Jika sesi mulai panjang, konteks membingungkan, atau assistant terlihat lupa aturan kerja, owner dapat memakai reset keyword:

`BACA RADJA_WORKFLOW DULU`

Setelah keyword itu muncul, assistant wajib:
- berhenti memberi patch panjang
- baca `docs/RADJA_WORKFLOW.md`
- baca `docs/RADJA_GROWTH_STRATEGY.md` jika menyangkut ekspansi, area, SEO, GSC, atau growth
- cek source repo terbaru
- cek live/data jika relevan
- lanjut hanya setelah scope jelas

Versi keras reset keyword:

`STOP. SOURCE REPO TERBARU YANG MENANG. BACA RADJA_WORKFLOW DULU.`

## Final QA Status Terbaru

Status terakhir yang sudah selesai:
- Fase technical hygiene/performance selesai.
- Fase content/on-page SEO selesai.
- Fase indexing readiness selesai.
- Fase conversion/tracking QA selesai.
- Fase final live QA selesai.
- `npm run check` hijau.
- Build menghasilkan 71/71 static/SSG pages.
- HTML critical pages memakai `Cache-Control: public, max-age=0, must-revalidate`.
- Static assets di `public/_headers` memakai `Cache-Control: public, max-age=31536000, immutable`.
- Jangan mengembalikan cache asset ke `next.config.mjs headers()` tanpa audit Cloudflare Pages.

## Owner Idea Handling

Ide dari owner adalah arah dasar, bukan instruksi final otomatis.

Tugas assistant:
- memahami tujuan bisnis di balik ide
- mengecek source repo terbaru dan kondisi live
- mencari risiko teknis, SEO, tracking, GSC, conversion, dan operasional
- menyempurnakan ide menjadi scope kerja yang aman
- menolak, menunda, atau memperkecil scope jika ide berisiko merusak struktur
- memberi verifikasi dan rollback sebelum patch besar

Jangan langsung menjalankan ide mentah tanpa audit.
Jangan memberi patch panjang sebelum scope jelas.
Jangan percaya asumsi owner atau assistant tanpa bukti source/live/data.

## Communication Rule

Sebelum patch besar:
- tujuan
- scope
- risiko
- verifikasi
- rollback

Setelah patch:
- file berubah
- hasil safety
- build/check jika ada
- live/data check jika perlu

Kalau gagal, sebutkan gagal di mana. Jangan klaim sukses.
