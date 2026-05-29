# Design Research Brief

Status: ready for visual reference research
Basis: `main` after runtime verification result PR #35
Purpose: define the research criteria for improving the RADJA AC Next.js website visual direction before UI implementation.

## Goal

Create a more modern, trustworthy, and conversion-focused RADJA AC website using the clean Next.js repo, while preserving the technical SEO, redirects, sitemap, robots, route coverage, and runtime verification that already passed.

The new visual direction does not need to copy the old live website pixel-for-pixel. It should improve the first impression, mobile usability, trust signals, and WhatsApp conversion flow while staying source-safe.

## RADJA AC positioning to preserve

- RADJA AC sells original multi-brand AC units.
- RADJA AC helps customers with PK consultation, stock checks, delivery, installation options, and multi-unit procurement.
- RADJA AC has real showroom/stock/display assets from Pamijen, Sokaraja, Banyumas.
- The website should guide visitors toward clear WhatsApp consultation, not fake instant checkout.
- Claims must remain careful: no hardcoded fixed prices, no fake local branches, no unsupported ready-all-stock claims, and no unsupported official/dealer claims.

## Research targets

Research should compare references across three groups:

1. Indonesian AC / appliance / local service competitors.
2. Global HVAC / home service / contractor websites.
3. Modern landing pages with strong conversion, mobile layout, and trust proof.

## What to look for

| Area | Research question | Why it matters |
|---|---|---|
| Navbar | Is navigation simple, mobile-friendly, and CTA-forward? | Visitors should quickly reach catalog, area pages, procurement, proof, and WhatsApp. |
| Hero | Does the first screen clearly explain what the business does and why to trust it? | Homepage must instantly communicate jual AC, consultation, stock check, and WhatsApp flow. |
| Visual proof | Are real photos used well? | RADJA AC has valid showroom, stock, delivery, display, and installation assets that should build trust. |
| CTA | Is the contact action clear without feeling spammy? | WhatsApp is the main conversion path. |
| Trust section | Are brand, showroom, payment, stock, and delivery assurances easy to scan? | AC buyers need reassurance before chatting or buying. |
| Category flow | Are product/category options easy to understand? | Visitors need to compare split, inverter, low watt, 1/2 PK, and commercial AC options. |
| Mobile UX | Does the page feel fast, clear, and easy to tap? | Most visitors may arrive from mobile search or WhatsApp. |
| Footer | Does it reinforce contact, coverage, and important pages? | Footer should support navigation and trust without clutter. |

## What to avoid

- Overly artistic layouts that reduce clarity.
- Heavy animation that makes the page feel slow.
- Hidden CTA or navigation that requires too much scrolling.
- Stock-photo-heavy design that weakens RADJA AC proof assets.
- Fake urgency, fake discounts, fake review blocks, or fake branch claims.
- Design patterns that force hardcoded price promises or ready-all-stock claims.
- Pixel-copying competitor websites.

## Evaluation scorecard

Each reference should be scored from 1 to 5 on:

- First impression / professionalism.
- Mobile clarity.
- CTA visibility.
- Trust proof quality.
- Photo usage.
- Category/service clarity.
- Applicability to RADJA AC.

## Desired output from research

The research should produce:

1. A shortlist of 5 to 10 useful references.
2. A summary of what each reference does well.
3. A list of patterns RADJA AC should avoid.
4. A recommended visual direction for RADJA AC.
5. A proposed homepage structure.
6. UI Batch 1 implementation scope for navbar, hero, CTA, and first trust/proof section.

## Implementation guardrails

- Keep route registry, sitemap, robots, redirects, and Cloudflare runtime behavior stable.
- Use final structured assets under `public/` instead of reintroducing old messy asset paths.
- Start with homepage and navbar foundation before changing many pages.
- Use small PRs with build and Cloudflare preview checks.
- Preserve source-safe copy rules.

## Recommended next step

Run design reference research, then create a design direction document before starting UI Batch 1.
