# RADJA AC Working Workflow

Dokumen ini adalah pintu utama untuk kerja teknis, SEO, tracking, GSC, dan deploy Radja AC.

## Urutan Baca Wajib Assistant / Codex

Setiap sesi kerja Radja AC wajib dimulai dari urutan ini:

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

Radja AC diposisikan kuat, tegas, percaya diri, dan tetap jujur sebagai supplier AC original multi-brand untuk rumah, toko, ruko, kantor, hotel, guest house, hospitality, kontraktor, developer, proyek, pengadaan, partai besar, dan banyak unit.

Daftar istilah yang wajib dihindari ada di `RADJAAC_DO_NOT_VIOLATE_RULES.md`.

Klaim kuat berdiri di atas bukti nyata yang sudah dipakai live: Proshop Gree resmi, sertifikat Authorized Dealer (Daikin, Midea, Hisense, Sansui), showroom dan gudang fisik, stok fisik yang bisa dicek, dokumentasi pengiriman, dan dokumentasi pemasangan. Bukti sekuat ini ditonjolkan, bukan disimpan.

Untuk copy user-facing, gunakan kalimat familiar dan tegas seperti `Showroom dan gudang Radja AC ada di Banyumas` atau `Radja AC kirim unit dan pasang dari Banyumas`.

## Source of Truth

Source repo terbaru dan bukti live production adalah sumber kebenaran utama.

Urutan kebenaran:

1. Source repo terbaru: `app/`, `content/`, `components/`, `lib/`, `next.config.mjs`
2. Bukti runtime: `npm run check`, build output, live HTTP, live HTML, sitemap, GA4 Realtime, GSC export / URL Inspection
3. Dokumen aktif di `docs/`
4. Chat lama, AI audit eksternal, atau dokumen lama yang sudah dihapus dari working tree hanya dianggap histori

Jika dokumen bertentangan dengan source repo atau live production, source repo dan live production yang menang.

Untuk audit rendering/indexing modern Next.js, bukti kuat adalah:

- `curl` header dan HTML mentah dari terminal owner
- GSC URL Inspection live
- build output `npm run check`
- sitemap/robots live
- repo aktif

Parser AI eksternal, webpage parser tanpa header, dan `site:` operator tidak boleh dipakai sebagai sumber keputusan utama. Jika parser AI berkata halaman kosong/CSR/SPA lama tetapi `curl` menunjukkan `__next_f`, `_next/static`, canonical, title, dan HTTP 200, maka live curl yang menang.

## Workflow Wajib

Default kerja saat ini:

1. Audit source dan/atau live
2. Tentukan scope
3. Patch kecil
4. Jalankan `npm run check` bila wajib
5. Commit
6. Push `main`
7. Tunggu deploy selesai
8. Live check
9. Data check jika menyangkut GA4/GSC/tracking

Catatan: workflow branch/PR dipakai untuk perubahan besar, sedangkan kerja Termux harian memakai commit kecil langsung ke `main` setelah `npm run check` hijau.

## Build Policy

`npm run check` wajib jika:

- tambah route baru
- ubah template global
- ubah analytics/tracking
- ubah sitemap/routes
- ubah `next.config.mjs`
- ubah `public/_headers`
- ubah komponen yang dipakai banyak halaman
- sebelum push final untuk perubahan source

`npm run check` tidak wajib untuk:

- audit tanpa perubahan file
- grep/check
- dokumentasi murni

Namun jika dokumentasi ikut di-commit bersama perubahan source, jalankan `npm run check` sebelum push.

## Status Repo / Live Terbaru — 2026-06-13

### Update 2026-06-13 — UI/UX improvement (dingin, bersih, premium)

- Fix mobile hamburger menu spacing: gap di dropdown content dari gap-1 ke gap-2, padding bottom di details, py-2.5 untuk tap target konsisten.
- Warna & kontras konsisten dengan homepage: slate-800 untuk readability, blue-800 untuk active state, navy/blue-50/blue-100/slate-200 untuk palet dingin/bersih.
- Hover state & micro-interaction smooth: transition-all duration-200, hover:-translate-y-0.5, shadow hover state di CTA & button.
- Typography konsisten dengan lib/typography (heroTitle, sectionTitle, cardTitle, eyebrow).
- Semua perubahan hanya styling, tidak ubah route/cache/tracking/sitemap.

## Status Repo / Live Terbaru — 2026-06-04

Status terakhir yang sudah selesai:

- Fase technical hygiene/performance selesai.
- Fase content/on-page SEO selesai.
- Fase indexing readiness selesai.
- Fase conversion/tracking QA selesai.
- Fase final live QA selesai.
- `npm run check` hijau pada perubahan source terakhir.
- Build terbaru setelah 404 branded menghasilkan 74/74 static/SSG pages.
- HTML critical pages memakai `Cache-Control: public, max-age=0, must-revalidate`.
- Static assets di `public/_headers` memakai `Cache-Control: public, max-age=31536000, immutable`.
- Homepage, robots, sitemap, dan money page utama HTTP 200.
- GSC URL Inspection 2026-06-04 menunjukkan homepage dan sampel money page utama sudah indexed.
- Klaim `de-index total` tidak berlaku untuk kondisi repo/live saat ini.
- Live curl owner menunjukkan `/kontak`, `/jual-ac-purwokerto`, `/katalog/ac-inverter`, dan `/pengadaan-ac` sudah Next.js, canonical www, tidak `noindex`, dan bukan SPA lama.
- Internal link live sudah cukup untuk hub utama; tambahkan link baru yang kontekstual dan intent-fit, bukan demi jumlah.
- Non-www saat audit redirect ke `https://www.radjaac.com/`; redirect 307 ke www dirapikan menjadi 301 di provider layer sebagai hygiene task, bukan blocker indexing.
- Cache asset tidak dikembalikan ke `next.config.mjs headers()` tanpa audit Cloudflare Pages.

### Update 2026-06-10 — Area lokal & sistem cluster

- Child area `jual-ac-sumbang`, `jual-ac-kedungbanteng`, dan `jual-ac-kalibagor` sudah dipromosikan ke `content/areas/` (live) dengan konten lokal yang ditulis ulang (landmark nyata, localBenefits, localCases, FAQ berbasis lokasi). Ketiganya sudah dihapus dari `content/area-child-drafts.js` agar tidak jadi duplikat basi dan tidak memicu slug collision di `npm run audit:staged`.
- Sistem konten area sekarang berlapis: `content/area-content-templates.js` (`resolveAreaContent` + cluster: residential/trade/industrial/education/hospitality/urban) sebagai base, dan data lokal per item di `content/areas/*` sebagai prioritas. Cluster dipetakan di `areaClusterMap` (`content/areas/cluster-map.js`).
- Renderer `app/[slug]/page.js` merender `localContext`, `localLandmarks`, `localBenefits`, `localCases`, `clusterType` (buyerGuide + clusterFaq), `localFaq`, `keywordVariants`, dan `trustBullets`. `commonNeeds`/`buyingChecks` TIDAK dirender (hanya data perencanaan).
- Staged draft (`area-drafts.js`, `area-child-drafts.js`, `procurement-next.js`) sudah ditulis ulang ke standar live: tiap area punya localContext unik, 5 landmark, 3 benefit, 3 case, clusterType, dan FAQ lokal. `procurement-next.js` di-merge agar tetap punya `faqs` + `relatedSegments` + bukti konkret seperti live.
- Batch publish 2026-06-10: `jual-ac-magelang` (hospitality), `jual-ac-pekalongan` (trade), dan `jual-ac-salatiga` (education) dipromosikan ke live — `routes.js` + `sitemapRoutes` + `areaItems` + `areaClusterMap` + hub `/jual-ac` + Footer + reciprocal `nearbyAreaLinks` (Magelang←Yogya/Semarang/Solo, Pekalongan←Tegal/Semarang, Salatiga←Semarang/Solo). Ketiganya dihapus dari `area-drafts.js`.
- Verifikasi 2026-06-10: `jual-ac-gombong`, `jual-ac-karanganyar-kebumen`, dan `jual-ac-kutowinangun` adalah `areaItems` live yang ditulis gaya quoted-key (`"slug": ...`) sehingga sempat lolos dari grep `slug:`. Ketiganya ter-render via `generateStaticParams`, terdaftar benar di `routes.js`/`sitemapRoutes`/hub/`areaClusterMap`, dan tidak 404.

## Post-Migration SEO Schedule

Website jalan terus dengan ritme batch yang sehat. Perubahan besar dijalankan terjadwal supaya data GSC/GA4 sempat terbaca, sambil polish kecil yang aman terus berjalan — bukan freeze.

### H+0 sampai H+7 setelah migrasi / patch besar

Fokus:

- live check 200/canonical/robots/sitemap/cache untuk URL prioritas
- cek GSC URL Inspection untuk sampel money page
- request indexing terbatas untuk URL final www yang baru diedit penting
- validasi GA4 `whatsapp_click` dan `generate_lead`
- pantau apakah ada error baru di Page Indexing

Jalan terus:

- perbaikan copy/typo dan penajaman CTA
- internal link kontekstual 1–3 link pada halaman relevan
- update docs
- 404/UX kecil
- verifikasi redirect legacy

Tunda dulu sampai data awal terbaca:

- publish batch area besar sekaligus
- publish banyak katalog sekaligus
- ubah struktur URL besar
- request indexing massal
- purge CDN massal tanpa bukti
- patch robots/sitemap/canonical berdasarkan asumsi parser AI

### H+7 sampai H+14

Publish 1–2 halaman kuat saat syarat terpenuhi:

- page unik, bukan swap nama
- target keyword dan intent jelas
- internal link masuk dan keluar siap
- sitemap/routes benar
- CTA WA jelas
- proof/trust cukup
- `npm run check` hijau
- live 200/canonical setelah deploy

Prioritas publish:

1. polish halaman live yang belum maksimal
2. katalog P1 yang sangat dekat buyer intent
3. satu area Tier 1 dengan copy unik

### H+14 sampai H+30

Publish 2–3 halaman per batch dengan jeda 7–10 hari. Setelah tiap batch:

- live check semua URL
- cek sitemap
- request indexing terbatas untuk target final penting
- pantau GSC pages/queries
- rapikan dulu jika muncul canonical/redirect/indexing issue baru, lalu lanjut batch berikutnya

### H+30 ke atas

Naik ke 3–5 halaman per batch saat:

- GSC mulai memberi query/page signal
- GA4 event WA stabil
- tidak ada technical blocker baru
- proof/trust dan operasional mendukung
- halaman tidak copy-paste

Metro jauh seperti Jakarta, Bandung, Tangerang, Surabaya diserang B2B-first sebagai pintu masuk paling kuat, bukan retail generik.

## GSC Rules

Status GSC terbaru 2026-06-04:

- Klaim `de-index total` sudah terbantahkan oleh URL Inspection.
- Homepage dan sampel money page utama sudah `URL ada di Google` dan `Halaman diindeks`.
- URL yang terverifikasi indexed:
  - `/`
  - `/jual-ac-purwokerto`
  - `/jual-ac-banyumas`
  - `/katalog`
  - `/brand/gree`
  - `/brand/daikin`
  - `/pengadaan-ac`
  - `/kontak`
- Crawl diizinkan, page fetch berhasil, indexing diizinkan, canonical user mengarah ke URL `https://www.radjaac.com/...`, dan Google memilih URL yang diperiksa.
- `robots.txt`, sitemap, canonical, HTTPS, dan www final sudah sehat pada audit ini.

Aturan tetap:

- `Not indexed` ditangani dengan tenang dan berbasis data, bukan reaksi panik.
- Jangan patch robots, sitemap, canonical, layout metadata, atau Cloudflare/Vercel routing berdasarkan asumsi.
- Jangan request indexing massal.
- Request indexing hanya untuk URL final prioritas yang belum indexed atau baru diedit penting.
- Audit URL penting dulu dengan URL Inspection dan live check.
- Jika URL sudah indexed, fokus berikutnya adalah query, CTR, posisi, intent, dan internal link kontekstual.

## Redirect + Sitemap Rules

- Route aktif tidak boleh menjadi redirect source.
- URL final harus masuk sitemap jika ingin index.
- URL legacy diarahkan ke target paling relevan.
- Internal link harus mengarah ke URL final, bukan URL redirect.
- Jika URL lama dihidupkan jadi page final, hapus redirect source-nya.
- Redirect permanen idealnya 301. Jika provider memberi 307 non-www ke www sedangkan canonical dan GSC sudah benar, itu hygiene task, bukan emergency blocker.

## Internal Link Rules

- Homepage tidak perlu link ke semua kecamatan.
- Hub link ke turunan prioritas.
- Turunan link balik ke hub dan 2–4 area tetangga.
- Jangan semua halaman link ke semua halaman.
- Internal link tambahan muncul di konteks yang membantu user, bukan blok keyword spam.
- Tambahkan internal link bila ada alasan: page target butuh crawl/discovery, query-page mapping salah, atau user memang butuh rujukan tersebut.

## Area Page Checklist

Halaman area baru wajib punya:

- Title/H1 keyword utama
- Description buyer intent
- Intro area
- Local context unik (`localContext`) — bukan template, berisi geografi/ekonomi/iklim/tipe pembeli
- Minimal 5 `localLandmarks` nyata
- Minimal 3 `localBenefits` spesifik lokasi
- Minimal 3 `localCases` (use case nyata)
- `clusterType` benar (residential/trade/industrial/education/hospitality/urban) di `areaClusterMap` atau pada item
- Common needs unik
- Buying checks unik
- Keyword variants (semantik + entity lokal)
- Curated nearby links (semua menuju URL live, bukan draft)
- Custom local FAQ berbasis lokasi (TANPA FAQ generik "punya toko fisik di {Kota}?")
- WA area/source/intent
- Trust/payment mengikuti template
- Sitemap
- Live 200
- Safety scan 0

Jangan membuat halaman area yang hanya swap nama area. Standar kualitas mengacu ke halaman live terbaru (Purwokerto, Banyumas, Sokaraja, Yogyakarta, Semarang, Solo) dan child yang sudah dipromosikan (Sumbang, Kedungbanteng, Kalibagor).

## Claim Safety

Gunakan copy tegas dan jujur:

- banyak unit ready, cek stok cepat
- ketersediaan dikonfirmasi saat order
- area pengiriman dicek dan dijangkau armada sendiri
- konsultasi PK dan pemasangan bergaransi 1 bulan
- pembayaran fleksibel: COD, DP, atau transfer

Hindari klaim kosong yang justru melemahkan kepercayaan:

- termurah
- ready semua
- stok pasti
- harga pasti
- cabang/showroom palsu
- pemasangan pasti semua area

## WhatsApp Tracking

GA4 Measurement ID tidak di-hardcode di repo. `components/analytics/GoogleAnalytics.jsx` membacanya dari environment variable `NEXT_PUBLIC_GA_MEASUREMENT_ID`, dan analytics hanya aktif pada hostname produksi `www.radjaac.com`.

Repo memakai gtag langsung, bukan GTM container.

Event lead utama:

- `whatsapp_click`
- `generate_lead`

`generate_lead` disarankan menjadi key event utama.

Test internal:
Buka URL dengan `?radja_test=1`, klik WhatsApp, lalu cek GA4 Realtime/DebugView.

Jangan memakai `purchase` sebagai patokan klik WhatsApp.

## Reset Keyword

Jika sesi mulai panjang, konteks membingungkan, atau assistant terlihat lupa aturan kerja, owner dapat memakai reset keyword:

`BACA RADJA_WORKFLOW DULU`

Setelah keyword itu muncul, assistant wajib:

- berhenti memberi patch panjang
- baca `docs/RADJA_WORKFLOW.md`
- baca `docs/RADJA_GROWTH_STRATEGY.md` jika menyangkut ekspansi, area, SEO, GSC, atau growth
- cek source repo terbaru
- cek live/data jika relevan
- lanjut setelah scope jelas

Versi keras reset keyword:

`STOP. SOURCE REPO TERBARU YANG MENANG. BACA RADJA_WORKFLOW DULU.`

## Staged Draft Audit

Repo punya staged draft yang sengaja belum live:

- `content/area-drafts.js`
- `content/area-child-drafts.js`
- `content/procurement-next.js`

File staged ini tidak di-import ke `app/`, sitemap, route generator, atau komponen live kecuali sedang publish batch secara sadar.

Setiap mengubah staged draft, jalankan:

`npm run audit:staged`

Audit ini mengecek:

- staged draft tetap tidak live,
- slug area draft tidak collision dengan route live,
- `procurement-next.js` tetap dianggap staged replacement,
- field wajib lengkap,
- risky wording tidak muncul,
- asset path yang ditulis literal masih ada.

Untuk staged/docs-only, `npm run check` tidak wajib. Untuk publish ke live route/content, `npm run check` tetap wajib.

## Staged Area Draft Rules

Repo punya staging data untuk halaman area yang belum live:

- `content/area-drafts.js`
- `content/area-child-drafts.js`

Aturan wajib:

- File draft tidak di-import ke `app/`, sitemap, route generator, atau komponen live.
- Draft belum live, belum masuk sitemap, dan belum direquest indexing.
- Publish area dilakukan secara sadar: tambah route di `content/routes.js`, pindahkan item ke file region yang sesuai di `content/areas/`, cek internal link, lalu jalankan `npm run check`.
- Publish maksimal 1–2 area pada H+7–H+14, 2–3 area pada H+14–H+30, dan 3–5 area setelah H+30 saat GSC/GA4 stabil.
- Child area publish setelah parent/hub live dan stabil.
- Setelah publish, live check 200/canonical/sitemap/cache sebelum request indexing terbatas.

## Owner Idea Handling

Ide dari owner adalah arah dasar yang dieksekusi dengan cepat dan tepat.

Tugas assistant:

- memahami tujuan bisnis di balik ide
- mengecek source repo terbaru dan kondisi live
- mengangkat risiko teknis, SEO, tracking, GSC, conversion, dan operasional secara terus terang
- menyempurnakan ide menjadi scope kerja yang aman dan kuat
- merapikan atau menahap scope jika ada risiko nyata merusak struktur, lalu tetap mengeksekusi tujuannya
- menyiapkan verifikasi dan rollback sebelum patch besar

Eksekusi cepat, tapi tetap berbasis bukti source/live/data — bukan asumsi.

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
