# RADJA AC Migration Readiness — Current Source of Truth

Status date: 2026-05-31
Scope: Next.js migration readiness for RADJA AC website
Current commit verified: `1aceb1c`

## Purpose

This document is the current source of truth for migration readiness.

Older audit documents may still contain historical `BLOCKER`, `PENDING`, `Hold`, or `FINAL-MISSING` labels from earlier project phases. Those older labels must not be used as current migration status unless reconfirmed here.

After production migration, this document should become the closing checklist so future work can focus on website content upgrades, SEO expansion, proof assets, and conversion improvements.

## Current migration status

| Area | Status | Notes |
|---|---|---|
| Git sync | PASS | Local and remote were verified in sync at `1aceb1c`. |
| Routes | PASS | Route registry contains 46 path strings. |
| Sitemap registry | PASS | Sitemap route entries match route path count: 46. |
| Redirect implementation | PASS | `next.config.mjs` contains 63 redirect sources and 63 destinations. |
| Redirect count match | PASS | Redirect source/destination count matches. |
| Live important URLs | PASS | Core live preview URLs returned 200 during migration audit. |
| Robots | PASS | `/robots.txt` live check passed. |
| Sitemap live | PASS | `/sitemap.xml` live check passed and uses canonical `https://www.radjaac.com` URLs. |
| Sitemap redirect hygiene | PASS | Live sitemap contains 0 redirect source URLs. |
| Internal legacy links | PASS | Strict internal legacy link scan returned 0 hits. |
| Canonical | PASS | Preview pages canonicalize to `https://www.radjaac.com/...`, expected for staging and final domain. |
| Schema / JSON-LD | PASS | JSON-LD was detected live without parse errors in sampled pages. |
| Organization schema logo | PASS | Updated to `/icons/master-icon-1024.png`. |
| Favicon / icons | PASS | `app/favicon.ico`, `public/icons/favicon.ico`, PNG icons, and live `/favicon.ico` are available. |
| OG / social image | PASS | OG and Twitter image tags were detected in sampled pages. |
| Build | PASS | `npm run build` completed successfully. |
| Lint | PASS | `npm run lint` completed without reported errors. |
| Safety diff | PASS | Safety checks showed no unwanted changes to critical files. |

## Audit summary

| Audit | Topic | Result |
|---|---|---|
| Audit 1 | Routes + indexing base | PASS |
| Audit 2 | Live URL + metadata + sample redirect | PASS |
| Audit 3 | Schema + assets | PASS after schema logo patch |
| Audit 4 | Redirect map gap | PASS in code; historical docs need synchronization |
| Audit 5 | Internal links + sitemap canonical | PASS |
| Audit 6 | Build + runtime | PASS |
| Audit 7 | Findings + cutover docs | PASS with stale-doc warning |

## Known documentation cleanup

The following documents are useful history, but include stale labels from earlier project phases:

- `docs/audit/final-cutover-readiness.md`
- `docs/audit/legacy-redirect-plan.md`
- `docs/audit/final-url-migration-registry.md`
- `docs/audit/indexed-legacy-url-final-map.md`
- `docs/source/radjaac/RADJAAC_REDIRECT_LEGACY_MAP.md`
- `docs/source/radjaac/RADJAAC_SITEMAP_INDEXING_PRIORITY.md`
- `docs/audit/asset-migration-plan.md`
- `docs/audit/legacy-asset-inventory.md`
- `docs/audit/runtime-verification-checklist.md`

Do not treat old `BLOCKER`, `PENDING`, `Hold`, or `FINAL-MISSING` labels in those documents as current status unless the issue is repeated in this file.

## Still required before production cutover

These are operational checks, not code blockers:

1. Confirm final production deployment target.
2. Confirm DNS / Cloudflare routing plan.
3. Confirm whether Next.js redirects are honored by the final hosting layer.
4. If platform ignores Next redirects, mirror redirect map in Cloudflare/platform rules.
5. Run final production smoke test after domain switch.
6. Submit or inspect only canonical target URLs in GSC.
7. Do not request indexing for legacy redirect source URLs.
8. Monitor GSC Coverage and Performance after migration.

## Post-migration focus

After production migration is stable, stop re-auditing migration basics unless something breaks.

Focus future upgrade work on:

1. Improving page content depth.
2. Expanding proof/trust assets.
3. Strengthening product/category pages.
4. Improving area pages with unique local context.
5. Improving WhatsApp conversion paths.
6. Adding useful articles that support money pages.
7. Monitoring GSC query/page performance.
8. Building only pages that have clear search intent and business value.

## Final rule

Migration readiness is considered technically clear when:

- production domain serves the Next.js site,
- core pages return 200,
- redirect legacy URLs resolve correctly,
- sitemap contains only canonical final URLs,
- internal links point only to final URLs,
- schema and metadata remain valid,
- build and lint pass,
- GSC is handled from target canonical URLs.

Until production cutover happens, this document is the main reference.
