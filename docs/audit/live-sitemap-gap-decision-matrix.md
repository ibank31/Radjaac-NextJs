# Live Sitemap Gap Decision Matrix

Status: final live sitemap gap reconciliation
Basis: live sitemap audit after PR #24
Live sitemap: `https://www.radjaac.com/sitemap.xml`
Next.js repo: `main` after article batch 2 PR #24

## Purpose

This document tracks live sitemap URLs that still exist on the current live RADJA AC website but are not yet implemented in the Next.js migration repo.

The goal is to prevent production cutover problems such as:

- indexed URLs becoming 404
- live sitemap URLs disappearing without review
- article URLs being redirected blindly
- old React/Vite route assumptions entering the clean Next.js repo
- area pages being mass-published without sufficient uniqueness

## Current gap summary

| Metric | Count |
|---|---:|
| Live sitemap URLs | 43 |
| Matched in Next.js route registry | 43 |
| Missing in Next.js route registry | 0 |

## Decision labels

| Label | Meaning |
|---|---|
| `BUILD-FINAL` | Build as a final Next.js page before production cutover. |
| `BUILD-FINAL-BATCHED` | Build as a final page, but only in a small controlled batch. |
| `ARTICLE-REVIEW` | Review live content and GSC before deciding migrate, merge, or redirect. |
| `DECISION-NEEDED` | Needs business/SEO decision before implementation. |
| `HOLD` | Do not build in current phase. |
| `REDIRECT-CANDIDATE` | May redirect later, but only after review and target confirmation. |
| `RESOLVED-FINAL` | Already rebuilt as a final Next.js route and included in sitemap. |

## Non-negotiable migration rule

The live sitemap URL gap is now resolved after PR #24, but production cutover still requires final sitemap, robots, canonical, internal-link, and redirect verification.

A URL is considered resolved only when one of these is true:

1. it is rebuilt as a final Next.js route and included in sitemap,
2. it is intentionally redirected to a stronger final target,
3. it is intentionally removed only after GSC/content/business review,
4. it is documented as hold with clear production handling.

---

## Gap decision matrix

### Area URLs

These are live sitemap URLs and should not be dropped during cutover.

| URL | Current type | Decision | Priority | Recommended action | Main risk | Notes |
|---|---|---|---:|---|---|---|
| `/jual-ac-yogyakarta` | Area page | `RESOLVED-FINAL` | Done PR #18 | Built as final area page | Watch snippet consistency | Source-aligned area page implemented and included in sitemap. |
| `/jual-ac-semarang` | Area page | `RESOLVED-FINAL` | Done PR #18 | Built as final area page | Watch snippet consistency | Source-aligned area page implemented and included in sitemap. |
| `/jual-ac-solo` | Area page | `RESOLVED-FINAL` | Done PR #18 | Built as final area page | Watch snippet consistency | Source-aligned area page implemented and included in sitemap. |
| `/jual-ac-purbalingga` | Area page | `RESOLVED-FINAL` | Done PR #19 | Built as final nearby regional area page | Watch thin/local-claim risk | Source-aligned area page implemented and included in sitemap. |
| `/jual-ac-cilacap` | Area page | `RESOLVED-FINAL` | Done PR #19 | Built as final regional area page | Watch thin/local-claim risk | Source-aligned area page implemented and included in sitemap. |
| `/jual-ac-kebumen` | Area page | `RESOLVED-FINAL` | Done PR #19 | Built as final regional area page | Watch thin/local-claim risk | Source-aligned area page implemented and included in sitemap. |
| `/jual-ac-tegal` | Area page | `RESOLVED-FINAL` | Done PR #21 | Built as final regional area page | Watch over-expansion risk | Source-aligned area page implemented and included in sitemap. |
| `/jual-ac-banjarnegara` | Area page | `RESOLVED-FINAL` | Done PR #21 | Built as final regional area page | Watch thin/local-claim risk | Source-aligned area page implemented and included in sitemap. |

### Business decision URL

| URL | Current type | Decision | Priority | Recommended action | Main risk | Notes |
|---|---|---|---:|---|---|---|
| `/ganti-ac-baru-purwokerto` | Commercial support page | `RESOLVED-FINAL` | Done PR #22 | Built as final transition/support page | Watch service-cluster drift | Rebuilt as AC-new replacement decision page; supports sales journey without creating service/repair cluster. |

### Article URLs

These article URLs exist in the live sitemap. They should not be redirected blindly because some may still support useful educational intent.

| URL | Current type | Decision | Priority | Recommended action | Main risk | Notes |
|---|---|---|---:|---|---|---|
| `/artikel/panduan-beli-ac-baru` | Article | `RESOLVED-FINAL` | Done PR #23 | Migrated as buying guide article | Watch article-to-money-page link quality | Educational feeder to `/katalog`, `/kalkulator-pk-ac`, and WhatsApp CTA. |
| `/artikel/ac-1-pk-untuk-ruangan-berapa` | Article | `RESOLVED-FINAL` | Done PR #23 | Migrated as sizing article | Watch cannibalization with future capacity page | Kept educational and linked to PK/calculator/category pages. |
| `/artikel/ac-inverter-vs-low-watt` | Article | `RESOLVED-FINAL` | Done PR #23 | Migrated as decision-support article | Watch cannibalization with catalog pages | Links to `/katalog/ac-inverter` and `/katalog/ac-low-watt`. |
| `/artikel/cara-memilih-ac-untuk-kamar-3x4` | Article | `RESOLVED-FINAL` | Done PR #24 | Migrated as sizing feeder article | Watch duplicate sizing intent | Links to `/kalkulator-pk-ac` and relevant capacity/category pages. |
| `/artikel/panduan-instalasi-ac-baru` | Article | `RESOLVED-FINAL` | Done PR #24 | Migrated as pre-purchase installation article | Watch install/service drift | Kept focused on AC-new purchase preparation and installation expectations. |
| `/artikel/ac-kurang-dingin-belum-tentu-freon-habis` | Article | `RESOLVED-FINAL` | Done PR #24 | Migrated as AC replacement decision article | Watch service/repair drift | Kept focused on evaluation and possible AC-new replacement, not service expansion. |

---

## Recommended implementation order

### Batch 1 — Area protection, high priority

Status: done in PR #18.

Built:

1. `/jual-ac-yogyakarta`
2. `/jual-ac-semarang`
3. `/jual-ac-solo`

Rules:

- no fake showroom/cabang claim
- no LocalBusiness schema for non-physical cities
- unique hero, concerns, CTA, and internal links
- link to catalog, kalkulator PK, selected brand pages, contact
- include in route registry and sitemap
- build must pass

### Batch 2 — Nearby/regional area protection

Status: done in PR #19.

Built:

1. `/jual-ac-purbalingga`
2. `/jual-ac-cilacap`
3. `/jual-ac-kebumen`

### Batch 3 — Remaining regional area protection

Status: done in PR #21.

Built:

1. `/jual-ac-tegal`
2. `/jual-ac-banjarnegara`

### Batch 4 — Business decision URL

Status: done in PR #22.

Built:

1. `/ganti-ac-baru-purwokerto`

Decision: rebuild as a focused AC-new replacement support page. It must not become a service, cuci AC, repair, trade-in, or freon cluster.

### Batch 5 — Article review

Status: done in PR #23 and PR #24.

Built in Article Batch 1 / PR #23:

1. `/artikel/panduan-beli-ac-baru`
2. `/artikel/ac-1-pk-untuk-ruangan-berapa`
3. `/artikel/ac-inverter-vs-low-watt`

Built in Article Batch 2 / PR #24:

1. `/artikel/ac-kurang-dingin-belum-tentu-freon-habis`
2. `/artikel/panduan-instalasi-ac-baru`
3. `/artikel/cara-memilih-ac-untuk-kamar-3x4`

Decision: keep all six as educational support articles with clear money-page targets, WhatsApp CTA context, and no service-cluster expansion.

---

## Production cutover rule

Before switching production traffic to the Next.js repo:

- live sitemap gap must remain 0,
- sitemap must contain final URLs only,
- internal links must point only to final URLs,
- legacy redirects must exist for intentionally removed/merged URLs,
- no live indexed URL should become accidental 404,
- build must pass,
- canonical and robots must be verified,
- production domain/base URL configuration must be verified.

## Current conclusion

The live sitemap gap is now resolved: 43 live sitemap URLs are represented in the Next.js route registry and sitemap.

The Next.js repo is close to production-cutover readiness, but cutover should wait for final technical verification:

1. route registry vs generated sitemap audit,
2. internal link audit,
3. robots and canonical audit,
4. legacy redirect plan,
5. production domain/base URL verification,
6. final build verification.

The safest next engineering step is:

`Run final cutover readiness audit: route registry, generated sitemap, internal links, robots, canonical, and redirect handling.`
