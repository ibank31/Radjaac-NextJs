# Technical SEO, Metadata, and Canonical Audit

Status: audit completed
Scope: documentation-only technical SEO audit after homepage legacy parity merge

## Purpose

Audit the current Next.js SEO foundation before further page migration work. This audit does not change visuals, routes, sitemap, robots, schema, metadata, or runtime behavior.

## Current source files

- `content/site.js`: FOUND
- `content/routes.js`: FOUND
- `lib/seo.js`: FOUND
- `app/sitemap.xml/route.js`: MISSING
- `app/robots.txt/route.js`: MISSING
- `app/layout.js`: FOUND
- `app/page.js`: FOUND

## Metadata-bearing pages

- `app/[slug]/page.js`: metadata=YES, buildMetadata=YES
- `app/artikel/[slug]/page.js`: metadata=YES, buildMetadata=YES
- `app/artikel/page.js`: metadata=YES, buildMetadata=YES
- `app/brand/[slug]/page.js`: metadata=YES, buildMetadata=YES
- `app/bukti-pengiriman-proyek/page.js`: metadata=YES, buildMetadata=YES
- `app/ganti-ac-baru-purwokerto/page.js`: metadata=YES, buildMetadata=YES
- `app/jual-ac/page.js`: metadata=YES, buildMetadata=YES
- `app/kalkulator-pk-ac/page.js`: metadata=YES, buildMetadata=YES
- `app/katalog/[slug]/page.js`: metadata=YES, buildMetadata=YES
- `app/katalog/page.js`: metadata=YES, buildMetadata=YES
- `app/kontak/page.js`: metadata=YES, buildMetadata=YES
- `app/page.js`: metadata=YES, buildMetadata=YES
- `app/pengadaan-ac/[slug]/page.js`: metadata=YES, buildMetadata=YES
- `app/pengadaan-ac/page.js`: metadata=YES, buildMetadata=YES
- `app/pengiriman-pemasangan/page.js`: metadata=YES, buildMetadata=YES
- `app/tentang-kami/page.js`: metadata=YES, buildMetadata=YES

## URL and canonical risk scan

- No risky URL/canonical strings found in audited source roots.

## Claim and copy risk scan

- `components/proof/ProofGalleryClient.jsx:135` contains `Proshop Gree`: `title: "Depan Proshop Gree RADJA AC",`
- `components/home/HomepageLegacyParity.jsx:156` contains `Authorized Dealer`: `status: "Authorized Dealer",`
- `components/home/HomepageLegacyParity.jsx:161` contains `Authorized Dealer`: `status: "Authorized Dealer",`
- `components/home/HomepageLegacyParity.jsx:166` contains `Authorized Dealer`: `status: "Authorized Dealer",`
- `components/home/HomepageLegacyParity.jsx:171` contains `Authorized Dealer`: `status: "Authorized Dealer",`
- `components/home/HomepageLegacyParity.jsx:326` contains `Authorized Dealer`: `Sertifikat Authorized Dealer — bukan sekadar klaim toko`
- `components/home/HomepageLegacyParity.jsx:341` contains `Authorized Dealer`: `alt={`Sertifikat Authorized Dealer ${item.brand} RADJA AC`}`
- `components/home/HomepageLegacyParity.jsx:290` contains `Proshop Gree`: `Proshop Gree Resmi`
- `components/home/HomepageLegacyParity.jsx:575` contains `Proshop Gree`: `Gree punya value kuat dan RADJA AC tercantum sebagai Proshop Gree resmi. Daikin cocok untuk`
- `content/brands.js:9` contains `Proshop Gree`: `title: "AC Gree Original | Proshop Gree, Cek Stok & Konsultasi PK",`
- `content/brands.js:11` contains `Proshop Gree`: `"RADJA AC menyediakan AC Gree original melalui Proshop Gree. Cek stok Gree standard, low watt, inverter, rekomendasi PK, pengiriman, opsi pemasangan, dan bantuan klaim sesuai keten`
- `content/brands.js:12` contains `Proshop Gree`: `h1: "AC Gree original melalui Proshop Gree RADJA AC",`
- `content/brands.js:17` contains `Proshop Gree`: `"RADJA AC memiliki dukungan Proshop Gree. Stok, tipe, dan ketentuan garansi unit tetap dikonfirmasi oleh admin sesuai kondisi terbaru.",`
- `content/brands.js:18` contains `Proshop Gree`: `certificateHolder: "RADJA AC / Proshop Gree",`

## Initial assessment

### Good

- The Next.js app uses a central `content/site.js` and `content/routes.js` structure.
- Homepage metadata is now defined in `app/page.js` through the Next.js metadata flow.
- Current homepage uses clean public asset paths instead of legacy `/assets/...` paths.
- Global navbar, floating WhatsApp, gallery/proof page, and homepage parity are already merged.

### Needs follow-up review

- Confirm `lib/seo.js` always builds canonical URLs from the production `siteConfig.baseUrl`.
- Confirm `sitemap.xml` only includes canonical public routes, not preview URLs or duplicate aliases.
- Confirm `robots.txt` points to the production sitemap and does not reference preview domains.
- Confirm each money page has a unique title and description, not generic duplicated metadata.
- Confirm route aliases such as future `/gallery` are handled as redirect/alias intentionally, not duplicate canonical pages.
- Keep verified business claims such as `Proshop Gree resmi` where appropriate, but do not generalize that status to unrelated brands.

## Recommended next PR

Create a small technical SEO cleanup PR only if this audit finds actual issues. That PR should avoid visual changes and should focus on:

- canonical builder consistency,
- sitemap route correctness,
- robots production sitemap URL,
- homepage and core money-page metadata consistency,
- safe schema alignment with visible page content.

## Rule for future page migration

When porting each old repo page into Next.js, keep content and visual parity, but rewrite SEO/meta/canonical/schema through the Next.js structure instead of copying legacy `SeoHead` or repo-old metadata blindly.
