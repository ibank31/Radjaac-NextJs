# Live Visual Baseline

Status: corrected visual target baseline
Basis: current live `radjaac.com` homepage direction plus previous rich gallery/proof direction
Purpose: define the visual source of truth before any new Next.js UI patch.

## Corrected decision

The Next.js website should follow the current live `radjaac.com` visual direction for the general website presentation, especially:

- homepage style,
- navbar/header feel,
- hero messaging,
- local-business tone,
- CTA behavior,
- page structure,
- trust-first sales flow.

However, the gallery/proof section should not follow the current reduced live gallery state. For gallery and proof assets, the target should be the previous richer gallery version that showed more RADJA AC photos and activities, including:

- showroom photos,
- display product photos,
- stock/gudang photos,
- delivery photos,
- installation/activity photos,
- project/procurement proof,
- videos or video thumbnails where useful.

## What to follow

### Follow current live site for

- overall visual tone,
- homepage first impression,
- live headline direction,
- navbar layout and menu priorities,
- local Purwokerto positioning,
- CTA-to-WhatsApp flow,
- simple browsing paths into jual AC, katalog, kalkulator PK, brand, and kontak.

### Follow previous rich gallery/proof version for

- gallery content depth,
- photo-heavy trust proof,
- activity documentation,
- delivery/showroom/stock visual proof,
- proof page richness,
- homepage proof teaser if needed.

## What not to repeat

Do not reuse the rejected UI Batch 1 direction from PR #38:

- overly dark corporate hero,
- generic modern landing-page look,
- oversized proof cards that do not match the live RADJA AC character,
- brand-logo section that feels detached from the live-site feel,
- visual direction based mainly on external references instead of RADJA AC's existing live identity.

## Current observed baseline

The live homepage currently positions RADJA AC around:

- Toko AC Purwokerto,
- konsultasi dan beli AC baru,
- AC original bergaransi,
- brand resmi/multi-brand,
- kebutuhan rumah, kost, toko, kantor, hotel, dan proyek,
- WhatsApp consultation.

The previous richer gallery/proof direction should preserve RADJA AC's real activity feel through many actual business-owned photos.

## Implementation guardrails

- Keep Next.js repo structure clean.
- Do not copy messy legacy paths directly into new code.
- Use structured assets already migrated under `public/`.
- Add missing gallery/proof assets only through controlled asset PRs if needed.
- Keep routes, redirects, sitemap, robots, schema, Cloudflare config, and runtime setup stable.
- Preserve source-safe claims.
- No new false branch, showroom, dealer-resmi, ready-all, or cheapest claims.
- No custom domain cutover until visual target is approved.

## Recommended next steps

1. Finish this corrected baseline doc.
2. Compare current live homepage with current Next.js homepage.
3. Inspect previous rich gallery/proof source from legacy repo.
4. Create a visual parity plan:
   - homepage/navbar from current live style,
   - gallery/proof from previous rich gallery style.
5. Patch in small PRs only after the visual target is clear.
