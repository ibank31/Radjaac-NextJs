# SSG Route Policy

RADJA AC menggunakan Next.js App Router dengan konten utama dari file lokal di `content/*`.

Halaman money page berbasis data lokal harus tetap static/SSG:

- `app/[slug]/page.js` untuk area pages dari `content/areas.js`
- `app/brand/[slug]/page.js` untuk brand pages dari `content/brands.js`
- `app/katalog/[slug]/page.js` untuk catalog pages dari `content/catalog.js`
- `app/pengadaan-ac/[slug]/page.js` untuk procurement pages dari `content/procurement.js`
- `app/artikel/[slug]/page.js` untuk article pages dari `content/articles.js`

Aturan:
- Pertahankan `dynamicParams = false` untuk template berbasis `content/*`.
- Pertahankan `generateStaticParams()` untuk slug yang berasal dari data lokal.
- Jangan gunakan runtime `fetch()` untuk konten lokal yang sudah tersedia di `content/*`.
- Jika menambah route money page baru, tambahkan data di `content/*`, route di `content/routes.js`, sitemap bila ingin index, lalu jalankan lint dan build.
- Perubahan pada route, sitemap, schema, layout, analytics, atau template shared wajib melewati `npm run lint` dan `npm run build`.

Tujuan:
- halaman penting tetap cepat, stabil, dan mudah dicrawl;
- URL yang tidak ada tidak dibuat dinamis tanpa kontrol;
- perubahan SEO bisa diaudit dari data lokal dan hasil build.
