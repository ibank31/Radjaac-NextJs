# Gallery Target Source Inspect

Status: source identified
Target URL: `https://b2b782f8.radjaac-premium-pages.pages.dev/gallery`
Legacy repo: `ibank31/radjaac-premium`
Matched commit: `3870cc2161b4a1a4d04c43946c509a544439cf29`
Matched commit label: `Clean legacy canonical conflicts (#298)`

## Decision

The intended rich gallery target is not just a screenshot reference. It has been matched to a legacy source commit.

The primary implementation reference is:

- `src/pages/Gallery.jsx` at commit `3870cc2161b4a1a4d04c43946c509a544439cf29`

Supporting visual/reference files include:

- `src/components/Navbar.jsx`
- `src/components/FloatingWhatsapp.jsx`
- `src/constants/siteData.js`
- `src/index.css`
- `src/styles/homepage-elegant-showroom.css`

## Important distinction

The target rich gallery page is `src/pages/Gallery.jsx`, not the later/current reduced live gallery state.

`src/pages/BuktiPengirimanProyek.jsx` is useful as a proof-page reference, but the visual target confirmed by the user is the older `/gallery` page from the matched deployment.

## Target gallery characteristics

The confirmed target gallery includes:

- mobile-first white/light gallery presentation,
- RADJA AC logo and compact header,
- headline: `Daripada cuma percaya tulisan — lihat dulu foto aslinya.`,
- category cards for Showroom, Gudang, Display Produk, and Material Instalasi,
- video activity cards,
- photo activity section,
- horizontal category filters,
- two-column mobile photo grid,
- rounded image cards,
- category labels over photos,
- clear captions,
- floating WhatsApp button.

## Legacy asset source groups

The matched source uses these legacy asset groups:

- `public/assets/gallery/pengiriman/`
- `public/assets/gallery/stok-gudang/`
- `public/assets/gallery/display/`
- `public/assets/gallery/pemasangan/`
- `public/assets/gallery/large/`
- `public/assets/gallery/thumb/`
- `public/assets/gallery/videos/`
- `public/assets/gallery/video-thumbnails/`
- `public/assets/showroom/`
- `public/assets/ui/`

## Next.js implementation rule

Do not reference old `/assets/gallery/...` paths directly in new Next.js implementation.

Use the clean structured paths already migrated into the Next.js repo, such as:

- `public/photos/delivery/`
- `public/photos/stock/`
- `public/photos/display/`
- `public/photos/installation/`
- `public/photos/showroom/`
- `public/videos/`
- `public/video-thumbnails/`
- `public/ui/`

If a target gallery asset is missing from the clean structure, migrate it first in a controlled asset PR.

## Next planning step

Create a visual parity plan that maps:

1. `src/pages/Gallery.jsx` legacy structure to the current Next.js proof page,
2. legacy asset paths to clean structured Next.js asset paths,
3. missing assets that must be migrated,
4. minimal PR sequence for gallery visual parity,
5. whether `/gallery` should redirect to `/bukti-pengiriman-proyek` or become an alias page later.
