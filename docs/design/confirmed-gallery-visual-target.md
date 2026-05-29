# Confirmed Gallery Visual Target

Status: confirmed by user screenshot and deployment URL
Target URL: `https://b2b782f8.radjaac-premium-pages.pages.dev/gallery`
Purpose: lock the intended gallery/proof visual direction before any Next.js implementation.

## Decision

The Next.js gallery/proof direction should follow the older rich gallery visual shown at:

`https://b2b782f8.radjaac-premium-pages.pages.dev/gallery`

This is the gallery version intended by the user, not the current reduced/changed live gallery.

## Visual characteristics to preserve

The target gallery has:

- white header with RADJA AC logo on the left,
- text identity: `Radja AC` and `Dealer AC se-Pulau Jawa`,
- hamburger menu on mobile,
- soft light background,
- rounded blue outline badge: `GALLERY RADJA AC PURWOKERTO`,
- strong centered headline: `Daripada cuma percaya tulisan — lihat dulu foto aslinya.`,
- explanation that photos are real RADJA AC activity documentation,
- category cards for proof types such as:
  - Showroom,
  - Gudang,
  - Display Produk,
  - Material Instalasi,
  - Pengiriman,
  - Pemasangan,
- video activity section with mobile-friendly video cards,
- `FOTO AKTIVITAS` section,
- horizontal category filter pills,
- two-column mobile photo grid,
- rounded photo cards,
- category pill labels over photo cards,
- clear captions under photos,
- floating WhatsApp button at bottom right.

## Content direction

The gallery/proof page should show real RADJA AC activity:

- showroom,
- warehouse/stock,
- delivery,
- display product,
- installation,
- material installation,
- project/procurement activity,
- videos or video thumbnails where useful.

## What not to use

Do not use the current reduced/changed live gallery as the main target if it removes the rich proof feeling.

Do not reuse the rejected PR #38 dark/corporate homepage direction.

## Implementation rules

- Keep Next.js route structure stable.
- Prefer implementing this visual on `/bukti-pengiriman-proyek` because that is the current Next.js proof route.
- Only add `/gallery` behavior if it is needed as a compatibility alias/redirect decision.
- Use structured Next.js assets under `public/photos/`, `public/videos/`, and related clean folders.
- Do not copy legacy messy asset paths directly into new page code.
- Preserve source-safe claims.
- No unsupported claims such as cheapest, ready all, fake branch, or unsupported official dealer claims.

## Next planning step

Inspect the legacy source corresponding to the target deployment, then map:

- old gallery components to Next.js files,
- old gallery assets to structured Next.js assets,
- missing assets that need a controlled asset PR,
- gallery visual parity patch scope.
