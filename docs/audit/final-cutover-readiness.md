<!--
CURRENT STATUS NOTE (2026-05-31):
This document is retained as historical audit context.
For current migration readiness, use:
docs/audit/MIGRATION_READINESS_CURRENT.md
Do not treat old BLOCKER/PENDING/Hold/FINAL-MISSING labels here as current status without re-audit.
-->

# Final Cutover Readiness Audit

Status: working audit
Basis: `main` after PR #25
Purpose: verify whether the clean Next.js repo is technically ready to replace the current live RADJA AC website.

## Current readiness summary

| Area | Status | Notes |
|---|---|---|
| Live sitemap route coverage | PASS | Live sitemap gap matrix reports 43/43 URLs covered and 0 remaining gaps. |
| Route/content migration | PASS | Area pages, brand pages, catalog pages, B2B pages, support page, and six live articles are represented in Next.js. |
| Build integrity | PASS | Latest local build after PR #24 passed with 50/50 static pages. |
| Sitemap implementation | PASS-PENDING-GENERATED-CHECK | `app/sitemap.js` uses `siteConfig.baseUrl` and `sitemapRoutes`; generated XML still needs final local verification. |
| Robots implementation | PASS-PENDING-GENERATED-CHECK | `app/robots.js` allows `/` and points to `siteConfig.baseUrl/sitemap.xml`; generated output still needs final local verification. |
| Canonical/base URL | PASS-PENDING-FULL-PAGE-CHECK | `siteConfig.baseUrl` is set to `https://www.radjaac.com`; page metadata still needs full generated/crawl verification. |
| Internal links | PENDING | Need scan for hardcoded legacy URLs, broken route references, and non-final links. |
| Redirect legacy handling | BLOCKER | `next.config.mjs` has no redirect rules yet. Legacy redirect map must be implemented or handled at platform level before production cutover. |
| Asset readiness | BLOCKER | Asset audit has not been completed. |
| Production deploy config | PENDING | Domain, preview/production env, Cloudflare Pages config, and final base URL need verification. |
| Final smoke test | PENDING | Needs preview deployment and manual page checks. |

## Technical SEO observations

### Sitemap

Expected behavior:

- sitemap is generated from `sitemapRoutes`,
- every URL uses `siteConfig.baseUrl`,
- no duplicate path,
- no legacy URL,
- no missing live sitemap URL,
- no non-final route.

Current source status:

- `app/sitemap.js` maps `sitemapRoutes` into sitemap entries.
- `siteConfig.baseUrl` is `https://www.radjaac.com`.

Final check still needed:

- run local build,
- inspect generated or runtime `/sitemap.xml`,
- verify count and URL list against `content/routes.js`.

### Robots

Expected behavior:

- allow public crawl,
- point to final sitemap URL,
- no accidental disallow,
- no staging/noindex behavior.

Current source status:

- `app/robots.js` allows `/`,
- sitemap points to `https://www.radjaac.com/sitemap.xml`.

Final check still needed:

- inspect generated or runtime `/robots.txt`.

### Canonical and metadata

Expected behavior:

- canonical URL uses final production domain,
- canonical path matches route path,
- no canonical to old repo, preview domain, or non-www variant,
- metadata does not contain old fake/local/service claims.

Current status:

- `siteConfig.baseUrl` is final production URL.
- Many pages use `buildMetadata`.

Final check still needed:

- full metadata/canonical scan across generated pages or source patterns.

## Redirect readiness

Redirect handling is not ready yet.

Reason:

- `next.config.mjs` currently has no redirect rules.
- Source references include legacy redirect decisions that still need implementation or platform-level handling.
- Production cutover must not rely only on rebuilt live sitemap URLs, because old indexed/non-sitemap URLs may still exist.

Minimum redirect requirements before cutover:

1. implement documented legacy redirects from source and audit docs,
2. verify old article URLs that were intentionally merged or replaced,
3. verify old gallery/procurement/service-style URLs,
4. decide whether redirects live in `next.config.mjs`, Cloudflare Pages, or another platform layer,
5. test redirect status codes and targets.

## Internal link readiness

Pending checks:

- no links to old repo paths,
- no links to removed legacy URLs,
- no hardcoded `radjaac-premium` URLs,
- no accidental localhost/preview URLs,
- no typo routes,
- no non-final service cluster links,
- all CTA/money links point to final route registry paths.

## Asset readiness

Asset readiness is not complete.

Pending checks:

- logo,
- favicon/app icons,
- OG/social image,
- trust/proof images,
- delivery/project images,
- image size and duplication,
- copyright/brand risk,
- source alignment,
- no blind copy from old repo public assets.

## Production cutover blockers

| Blocker | Severity | Required action |
|---|---|---|
| Redirects not implemented | High | Build redirect plan and implement/test. |
| Asset audit not done | High | Create asset migration plan and copy only approved assets. |
| Generated sitemap not final-verified | Medium | Inspect runtime/generated sitemap. |
| Robots not final-verified | Medium | Inspect runtime/generated robots. |
| Canonical not full-verified | Medium | Crawl or source-check all page metadata. |
| Internal links not audited | Medium | Run source and/or rendered crawl link audit. |
| Deploy config not verified | Medium | Confirm production domain, env, and Cloudflare Pages behavior. |

## Current global readiness estimate

| Component | Readiness |
|---|---:|
| Route/content coverage | 100% |
| Source/content alignment | 85–90% |
| Build integrity | 95–98% |
| Technical SEO readiness | 60–70% |
| Redirect readiness | 25–35% |
| Asset readiness | 30–40% |
| Deploy/cutover readiness | 50–60% |
| Global migration readiness | ~75% |

## Recommendation

Do not production-cutover yet.

Next work sequence:

1. Run generated sitemap/robots/internal-link audit.
2. Build redirect implementation plan.
3. Audit and migrate approved assets.
4. Implement technical fixes in small PRs.
5. Deploy preview and run smoke test.
6. Only then prepare production cutover.
