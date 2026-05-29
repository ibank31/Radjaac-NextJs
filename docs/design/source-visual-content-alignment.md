# Source, Visual, and Content Alignment

Status: active alignment rule  
Purpose: keep the RADJA AC Next.js migration fast, visually consistent, and source-safe before homepage visual parity work.

## Decision

The Next.js website should not copy the current live `radjaac.com` content blindly.

The migration uses three different sources for different jobs:

1. **Old/live RADJA AC site**
   - Use for visual direction, layout feel, spacing, proof presentation, gallery behavior, and real activity/photo inspiration.
   - Do not use blindly for SEO positioning, metadata, service-area claims, or broad copy.

2. **Current Next.js repo**
   - Use for final implementation structure.
   - Routes, metadata, schema, redirects, sitemap, robots, clean asset paths, Cloudflare behavior, and reusable components should follow this repo.

3. **Business/content strategy source**
   - Use as the truth for positioning and claims.
   - The current priority is Jawa Tengah first, especially Purwokerto, Banyumas, Sokaraja, and nearby reachable areas.

## Content source of truth

RADJA AC should be positioned as:

- based in Pamijen, Sokaraja, Banyumas,
- focused first on Purwokerto, Banyumas, Sokaraja, and Central Java expansion,
- selling original multi-brand AC units,
- helping buyers choose AC through PK consultation, stock checking, brand options, delivery discussion, installation options, and procurement needs,
- serving homes, kost, shops, offices, hotels, and projects.

## Visual source of truth

Visual direction may follow the approved old/live RADJA AC feel:

- light/white local-business presentation,
- compact practical navigation,
- WhatsApp-first conversion,
- real showroom, stock, delivery, display, installation, and gallery proof,
- simple trust-first layout rather than generic corporate landing-page style.

## What not to copy from live blindly

Do not copy broad or messy live-site wording when it conflicts with the Next.js strategy, especially:

- `se-Pulau Jawa` as the main positioning,
- unsupported official dealer claims,
- unsupported branch claims,
- cheapest/termurah claims,
- ready-all/ready semua claims,
- ecommerce/checkout language,
- old legacy asset paths such as `/assets/...`.

## Implementation rules

- Prefer clean Next.js asset paths:
  - `/photos/...`
  - `/videos/...`
  - `/video-thumbnails/...`
  - `/brand/...`
  - `/brand-logos/...`
  - `/ui/...`
- Do not reintroduce rejected dark/corporate UI Batch 1 direction.
- Keep route, redirect, sitemap, robots, schema, Cloudflare configuration, and runtime behavior stable unless a dedicated PR explicitly changes them.
- Keep copy source-safe and aligned with Jawa Tengah-first strategy.
- Visual PRs must be checked in Cloudflare preview before merge.

## Homepage rule

Homepage visual parity should mean:

- use live/old site visual feel,
- keep Next.js/Jawa Tengah-safe content,
- patch `app/page.js` incrementally,
- avoid broad redesign,
- avoid changing global layout unless a separate global PR is created.

## Current approved foundation

Already approved and merged:

- rich proof/gallery page on `/bukti-pengiriman-proyek`,
- global floating WhatsApp button,
- clean dropdown navbar with active state and logo.
