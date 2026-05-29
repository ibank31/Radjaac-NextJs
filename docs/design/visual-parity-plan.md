# Visual Parity Plan

Status: ready for implementation planning
Basis:
- current Next.js `main` after PR #42,
- current live `radjaac.com` for homepage/navbar/general visual direction,
- legacy rich gallery target at `https://b2b782f8.radjaac-premium-pages.pages.dev/gallery`,
- legacy gallery source commit `3870cc2161b4a1a4d04c43946c509a544439cf29`.

## Purpose

Define the safe implementation plan for making the Next.js site visually match the approved RADJA AC direction without repeating the rejected UI Batch 1 approach.

## Source of truth

### General website direction

Use the current live `radjaac.com` visual direction for:

- homepage tone,
- navbar/header feel,
- hero messaging,
- local-business positioning,
- simple CTA-to-WhatsApp flow,
- browsing paths into jual AC, katalog, kalkulator PK, brand, and kontak.

### Gallery/proof direction

Use the older rich gallery target for gallery/proof:

- target URL: `https://b2b782f8.radjaac-premium-pages.pages.dev/gallery`,
- legacy source: `src/pages/Gallery.jsx`,
- legacy commit: `3870cc2161b4a1a4d04c43946c509a544439cf29`.

The current reduced/changed live gallery is not the desired gallery target.

## Do not repeat

Do not repeat the rejected PR #38 direction:

- no generic dark corporate hero,
- no oversized detached proof blocks,
- no external-reference-first design,
- no brand section that feels disconnected from RADJA AC's current identity,
- no broad homepage redesign without screenshot/source parity.

## Implementation route decision

Primary Next.js proof/gallery implementation should start on:

- `/bukti-pengiriman-proyek`

Reason:

- this route already exists in Next.js,
- this route is already part of the technical migration,
- the live reduced gallery canonical behavior already points toward proof/bukti semantics,
- it avoids introducing route risk too early.

The `/gallery` path should be handled later as a separate compatibility decision:

- either redirect `/gallery` to `/bukti-pengiriman-proyek`,
- or create a thin alias page if visual/SEO requirements demand it.

Do not decide `/gallery` behavior inside the first visual implementation PR.

## Legacy to Next.js asset mapping

Do not use legacy `/assets/gallery/...` paths directly in Next.js page code.

Use clean structured asset paths:

| Legacy source group | Next.js clean target |
|---|---|
| `public/assets/gallery/pengiriman/` | `public/photos/delivery/` |
| `public/assets/gallery/stok-gudang/` | `public/photos/stock/` |
| `public/assets/gallery/display/` | `public/photos/display/` |
| `public/assets/gallery/pemasangan/` | `public/photos/installation/` |
| `public/assets/gallery/large/` | mapped case-by-case to `public/photos/showroom/`, `public/photos/stock/`, `public/photos/display/`, `public/photos/installation/` |
| `public/assets/gallery/thumb/` | use full clean image where possible; thumbnails only if migrated intentionally |
| `public/assets/gallery/videos/` | `public/videos/` |
| `public/assets/gallery/video-thumbnails/` | `public/video-thumbnails/` |
| `public/assets/showroom/` | `public/photos/showroom/` |
| `public/assets/ui/whatsapp.svg` | `public/ui/whatsapp.svg` |

If a legacy target asset is missing from the clean Next.js structure, migrate it in a controlled asset PR before using it.

## Confirmed gallery visual structure

The target gallery should preserve these sections:

1. Header/navbar context
   - compact RADJA AC identity,
   - mobile-friendly hamburger behavior,
   - visual feel aligned with current live site.

2. Gallery hero
   - badge similar to `GALLERY RADJA AC PURWOKERTO`,
   - headline similar to `Daripada cuma percaya tulisan — lihat dulu foto aslinya.`,
   - explanation that the photos are real RADJA AC activity documentation,
   - clear WhatsApp CTA or proof-first CTA.

3. Proof category cards
   - Showroom,
   - Gudang,
   - Display Produk,
   - Material Instalasi,
   - Pengiriman,
   - Pemasangan if appropriate.

4. Video activity section
   - up to 3 cards,
   - video thumbnail or playable video,
   - mobile-friendly layout.

5. Photo activity section
   - `FOTO AKTIVITAS` heading,
   - horizontal category filter pills,
   - two-column mobile grid,
   - rounded image cards,
   - category label pill over images,
   - clear captions.

6. Floating WhatsApp
   - visible but not intrusive,
   - consistent with current conversion system.

## Next.js files likely involved

Inspect before patching:

- `app/bukti-pengiriman-proyek/page.js`
- `components/layout/Header.jsx`
- `components/layout/Footer.jsx`
- `components/ui/WhatsappLink.jsx`
- `content/site.js`
- `content/routes.js`
- `public/photos/`
- `public/videos/`
- `public/video-thumbnails/`
- `public/ui/`

Avoid touching unless required:

- `next.config.mjs`,
- `app/sitemap.xml` generation,
- `app/robots.txt` generation,
- redirects,
- schema/global SEO helpers,
- unrelated pages.

## Recommended PR sequence

### PR 1: Gallery asset availability audit

Goal:
Confirm which legacy gallery target assets already exist in clean Next.js structure and which are missing.

Scope:
- docs-only asset mapping,
- no page code changes.

Output:
- clean asset mapping table,
- missing asset list,
- implementation-ready gallery item list.

### PR 2: Migrate missing gallery proof assets if needed

Goal:
Only migrate missing assets needed for the rich gallery visual.

Scope:
- add approved images/videos into structured `public/` folders,
- no page layout changes,
- document asset source mapping.

Skip this PR if all needed assets already exist.

### PR 3: Gallery/proof visual parity foundation

Goal:
Redesign `/bukti-pengiriman-proyek` to follow the confirmed rich gallery visual.

Scope:
- proof page only,
- use clean structured asset paths,
- category cards,
- video cards,
- photo grid,
- safe copy,
- WhatsApp CTA.

Do not change:
- routes,
- redirects,
- sitemap,
- robots,
- config,
- unrelated homepage.

### PR 4: Gallery runtime verification

Goal:
Verify the redesigned proof/gallery page on Cloudflare preview.

Scope:
- docs-only runtime visual checklist/result,
- status checks for assets and page.

### PR 5: Homepage/navbar visual parity

Goal:
Adjust homepage/navbar toward current live site direction only after gallery proof target is stable.

Scope:
- small homepage/navbar changes,
- no broad redesign,
- screenshot comparison required before merge.

### PR 6: `/gallery` compatibility decision

Goal:
Decide whether `/gallery` should redirect or become an alias.

Scope:
- only after visual proof page is approved.

## Visual QA rules

Before merging any visual PR:

- capture screenshots of current live target,
- capture Cloudflare preview screenshot,
- compare mobile first,
- confirm WhatsApp CTA still works,
- confirm no important asset returns 404,
- run `npm run build`,
- run route smoke tests,
- avoid merging if user says visual direction feels wrong.

## Cutover rule

No custom domain cutover until:

- homepage visual direction is approved,
- gallery/proof visual direction is approved,
- runtime checks pass,
- route/redirect behavior remains stable,
- Cloudflare production deployment is confirmed.
