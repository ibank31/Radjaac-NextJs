# Next.js SEO Domain Target Audit

Status: audit draft  
Scope: repo-only SEO audit after domain-target clarification  
Runtime impact: none  
Live domain validation: not used  

## Correction

Previous validation mixed up OLD LIVE and NEXT SOURCE.

Correct model:

| Target | Meaning | Use |
|---|---|---|
| www.radjaac.com | OLD LIVE until cutover | legacy baseline only |
| repo main | NEXT SOURCE | code, sitemap, robots, canonical, redirects |
| Cloudflare Pages preview | NEXT PREVIEW | visual/build validation before cutover |
| post-cutover www.radjaac.com | future production | final live validation after domain connection |

Do not use www.radjaac.com to validate Next.js sitemap, title, H1, canonical, redirects, or visual output before domain cutover.

## Repo SEO audit findings

### Sitemap

Repo uses `app/sitemap.js`.

Finding:
- Sitemap must be validated from repo source and build output, not www.radjaac.com.
- `sitemapRoutes` from `content/routes.js` is the source for generated sitemap entries.
- Required final route families to keep in sitemap:
  - `/`
  - `/jual-ac`
  - `/katalog`
  - `/pengadaan-ac`
  - `/pengiriman-pemasangan`
  - `/bukti-pengiriman-proyek`
  - `/kontak`
  - area pages such as `/jual-ac-purwokerto`, `/jual-ac-banyumas`, `/jual-ac-sokaraja`
  - brand pages
  - catalog pages
  - retained article pages

### Robots

Robots must be validated from repo source and build output.

Expected rule:
- Robots should point to production sitemap URL generated from `siteConfig.baseUrl`.
- Do not use OLD LIVE robots as proof of Next.js robots until domain cutover.

### Canonical

Canonical must be validated from `lib/seo.js` and page metadata source.

Finding:
- `buildMetadata()` builds canonical from `siteConfig.baseUrl` + page path.
- Area pages use `item.path`.
- `/jual-ac` uses `routes.jualAc`.
- Do not use OLD LIVE title/H1/canonical as proof of Next.js output until domain cutover.

## Redirect audit

Repo `next.config.mjs` has legacy redirects.

Against `docs/audit/indexed-legacy-url-final-map.md` immediate redirect candidates:

- Missing/wrong immediate redirect candidates: NONE based on prior command output.
- Non-permanent redirects: NONE based on prior command output.
- Duplicate redirect sources: NONE based on prior command output.

Extra redirects currently in config:
- `/artikel/ac-low-watt-listrik-900-1300-watt-purwokerto/` -> `/katalog/ac-low-watt`
- `/artikel/beli-ac-baru-purwokerto-panduan-sebelum-order` -> `/artikel/panduan-beli-ac-baru`

These extras are not automatically bad. They need to be kept if source-approved or documented in a redirect follow-up audit.

## Cloudflare preview rule

For visual review before domain cutover:

1. Use Cloudflare Pages preview/deployment URL.
2. Do not use www.radjaac.com for Next.js visual review.
3. Treat www.radjaac.com only as OLD LIVE until DNS/domain is intentionally connected to Next.js.

## Cutover blocker checklist

Before connecting domain to Next.js:

- Confirm sitemap source and build output.
- Confirm robots source and build output.
- Confirm canonical source and rendered preview.
- Confirm redirect config against indexed legacy map.
- Confirm Cloudflare public preview URL.
- Review homepage, `/jual-ac`, `/jual-ac-purwokerto`, `/katalog`, brand pages, and trust page in preview.
- Only then plan domain cutover.
