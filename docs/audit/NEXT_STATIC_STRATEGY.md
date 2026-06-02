# RADJA AC — Next.js Static Rendering Strategy

Status: active audit note

## Tujuan

Menjaga halaman SEO utama tetap static/SSG setelah migrasi React SPA ke Next.js.

## Prinsip

Konten utama RADJA AC berasal dari file lokal di `content/`, bukan runtime fetch.

Karena itu, halaman SEO dan money page harus diprioritaskan sebagai static content atau SSG. Jangan mengubah halaman penting menjadi dynamic tanpa alasan teknis yang jelas.

## Route dynamic yang wajib tetap SSG

Route berikut memakai `generateStaticParams()` dan `dynamicParams = false`:

- `app/[slug]/page.js`
- `app/artikel/[slug]/page.js`
- `app/brand/[slug]/page.js`
- `app/katalog/[slug]/page.js`
- `app/pengadaan-ac/[slug]/page.js`

Aturan:

- Tambah slug baru melalui `content/*`.
- Pastikan route final masuk `content/routes.js` dan sitemap bila ingin diindex.
- Jangan aktifkan `dynamicParams = true` untuk route SEO tanpa alasan kuat.
- Jangan pakai runtime `fetch()` untuk konten lokal.

## Static route

Route statis seperti homepage, katalog index, jual AC, pengadaan, kontak, tentang, proof page, robots, dan sitemap tetap tidak memakai runtime fetch.

## Client component yang sengaja dipertahankan

Client component yang ada saat audit:

- `components/analytics/GoogleAnalytics.jsx`
- `components/calculator/PkCalculator.jsx`
- `components/layout/HeaderClient.jsx`
- `components/proof/ProofGalleryClient.jsx`
- `components/ui/WhatsappLink.jsx`

Jangan mengubah komponen besar menjadi client component kecuali memang butuh state, effect, pathname, document/window, atau event tracking.

## Build policy

Build wajib jika mengubah:

- route baru
- template global
- analytics/tracking
- sitemap/routes
- `next.config.mjs`
- komponen shared yang dipakai banyak halaman

Build tidak wajib untuk audit/docs-only.
