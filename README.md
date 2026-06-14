# Radja AC — Website

Website lead-generation untuk **Radja AC**, supplier AC original multi-brand.
Tujuan utama situs ini bukan traffic, melainkan **lead WhatsApp berkualitas** dari
Pulau Jawa, diukur lewat event GA4 `whatsapp_click` dan `generate_lead`.

- **Stack:** Next.js (App Router) + Tailwind CSS, money pages SSG via `generateStaticParams`
- **Konten:** lokal di `content/*` (bukan CMS)
- **Deploy:** Cloudflare Pages — domain final `https://www.radjaac.com`
- **Cache:** aset statis diatur di `public/_headers`; non-www diarahkan ke www via `next.config.mjs`

> Agent/kontributor baru: baca bagian **Arah Website** dan **Urutan Baca Wajib** sebelum mengubah apa pun.

## Arah Website

- **Positioning:** supplier AC original multi-brand untuk rumah, toko, ruko, kantor,
  hotel, guest house, hospitality, kontraktor, developer, proyek, pengadaan, partai
  besar, dan banyak unit. Kuat, tegas, dan tetap jujur. Basis fisik nyata hanya di
  **Banyumas** (Pamijen, Sokaraja).
- **Bukti yang dipakai:** showroom dan gudang fisik, Proshop Gree resmi, sertifikat
  Authorized Dealer (Daikin, Midea, Hisense, Sansui), stok fisik yang bisa dicek,
  dokumentasi pengiriman dan pemasangan, garansi pasang 1 bulan.
- **Ekspansi dua cincin:**
  - Cincin dekat (retail-area): Banyumas Raya, Jawa Tengah, DI Yogyakarta.
  - Cincin jauh (B2B/proyek): Jawa Barat, Banten, DKI, Jawa Timur — masuk lewat angle
    pengadaan/proyek dulu, bukan retail page generik.
- **Fase sekarang:** stabilisasi pasca-migrasi. Fokus ke sinyal GSC, query mapping,
  CTR, dan tracking WA. Penambahan halaman mengikuti jadwal post-migration, bukan
  mass-produce.

## Urutan Baca Wajib (sesuai AGENTS.md)

1. `docs/RADJA_WORKFLOW.md` — cara kerja, scope, verifikasi, reset keyword
2. `docs/source/radjaac/RADJAAC_SOURCE_INDEX.md` — peta baca source
3. `docs/source/radjaac/RADJAAC_DO_NOT_VIOLATE_RULES.md` — guardrail keras
4. `docs/RADJA_GROWTH_STRATEGY.md` — arah growth, area, decision gates

**Source repo terbaru dan live production selalu menang atas docs lama atau chat.**

## Perintah Penting

```bash
npm run dev            # development
npm run check          # lint + validate (areas/seo/articles) + build — WAJIB sebelum push perubahan live
npm run audit:staged   # wajib tiap mengubah staged draft
```

`npm run check` wajib jika: tambah route, ubah template global, analytics/tracking,
sitemap/routes, `next.config.mjs`, `public/_headers`, atau komponen multi-halaman.
Tidak wajib untuk audit/docs murni.

## Struktur Singkat

- `app/` — routes (App Router); area pages via `app/[slug]/page.js`
- `content/` — sumber data: `routes.js`, `areas/`, `brands.js`, `procurement.js`,
  `static-pages.js`, `articles.js`
- `content/area-drafts.js`, `area-child-drafts.js`, `procurement-next.js` —
  **STAGED, belum live. Jangan di-import ke `app/`/sitemap/komponen live.**
- `components/`, `lib/` — UI dan helper (SEO, schema, whatsapp, typography)
- `scripts/` — validator yang dipanggil `npm run check` & `audit:staged`
- `docs/` — workflow, strategi, dan source guardrail

## Jangan Dilakukan

- Klaim toko/cabang/showroom palsu di luar Banyumas
- Klaim risiko: `termurah`, `ready semua`, `stok pasti`, `harga pasti`
- Area page yang hanya swap nama kota (doorway)
- Ubah route/cache/tracking/sitemap/canonical tanpa verifikasi live
- Import staged draft ke live tanpa keputusan publish sadar

## Copy Aman yang Dipakai

cek stok dulu · ketersediaan dikonfirmasi · area pengiriman dicek ·
konsultasi pemasangan · pembayaran fleksibel (COD, DP, transfer)
