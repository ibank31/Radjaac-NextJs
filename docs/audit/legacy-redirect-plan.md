# Legacy Redirect Plan

Status: working implementation plan
Basis: `main` after PR #27
Purpose: define legacy URL redirects needed before production cutover from the old RADJA AC site to the clean Next.js repo.

## Source rules

- Legacy URLs whose intent is already handled by a canonical final page should use 301 redirects.
- Redirect URLs must not be included in sitemap.
- Internal links must point directly to canonical targets, not to redirect URLs.
- Do not redirect unrelated legacy URLs to homepage when a more relevant target exists.
- Trailing slash and non-trailing slash variants must resolve consistently.

## Current repo status

| Check | Status | Notes |
|---|---|---|
| Live sitemap coverage | PASS | 43/43 live sitemap URLs are covered in Next.js. |
| Source-level sitemap/internal scan | PASS | PR #27 confirmed route/sitemap/source-level link checks. |
| Redirect implementation | BLOCKER | `next.config.mjs` has no redirect rules yet. |
| Platform redirect decision | PENDING | Need decide Next config vs Cloudflare/platform rules. |
| Redirect status testing | PENDING | Needs runtime preview or production-like test. |

## Minimum redirect map before cutover

| Legacy URL | Target URL | Status | Priority | Notes |
|---|---|---|---|---|
| `/artikel/harga-ac-1-2-pk-purwokerto-pemasangan` | `/katalog/ac-1-2-pk` | Implement in final redirect layer | High | Product/capacity intent belongs to catalog. |
| `/artikel/ac-low-watt-listrik-900-1300-watt-purwokerto` | `/katalog/ac-low-watt` | Implement in final redirect layer | High | Category intent belongs to low watt catalog. |
| `/artikel/ac-low-watt-listrik-900-1300-watt-purwokerto/` | `/katalog/ac-low-watt` | Implement in final redirect layer | High | Trailing slash variant must match non-slash target. |
| `/artikel/harga-ac-daikin-purwokerto` | `/brand/daikin` | Implement in final redirect layer | High | Brand intent belongs to brand page. |
| `/artikel/daikin-inverter-purwokerto` | `/brand/daikin` | Implement in final redirect layer | High | Generic Daikin/inverter intent belongs to brand page. |
| `/artikel/harga-ac-gree-purwokerto` | `/brand/gree` | Implement in final redirect layer | High | Brand intent belongs to brand page. |
| `/artikel/harga-ac-midea-purwokerto` | `/brand/midea` | Implement in final redirect layer | High | Brand intent belongs to brand page. |
| `/artikel/ac-untuk-kost-purwokerto` | `/pengadaan-ac/kost-apartemen-skala-besar` | Implement in final redirect layer | High | Many-unit/kost intent belongs to B2B page. |
| `/pengadaan-ac-proyek` | `/pengadaan-ac` | Implement in final redirect layer | High | Legacy B2B hub target is final procurement hub. |
| `/artikel/beli-ac-baru-purwokerto-panduan-sebelum-order` | `/artikel/panduan-beli-ac-baru` | Implement in final redirect layer | High | Normalize old buying guide slug to final article. |
| `/artikel/jual-ac-banyumas-konsultasi-pk-stok-pasang` | `/jual-ac-banyumas` | Implement in final redirect layer | High | Local money intent belongs to Banyumas area page. |
| `/artikel/toko-ac-purwokerto-yang-bisa-konsultasi-pk` | `/jual-ac-purwokerto` | Implement in final redirect layer | High | Local money intent belongs to Purwokerto area page. |
| `/artikel/samsung-inverter-purwokerto` | `/brand/samsung` | Implement in final redirect layer | Medium | Brand intent belongs to Samsung brand page. |

## Keep-live URLs, no redirect

| URL | Reason |
|---|---|
| `/artikel/ac-1-pk-untuk-ruangan-berapa` | Migrated as final educational sizing article. |
| `/artikel/cara-memilih-ac-untuk-kamar-3x4` | Migrated as final room sizing article. |
| `/artikel/ac-inverter-vs-low-watt` | Migrated as final comparison article. |
| `/artikel/ac-kurang-dingin-belum-tentu-freon-habis` | Migrated as final support article, with service-drift guard. |
| `/artikel/panduan-instalasi-ac-baru` | Migrated as final pre-purchase installation article, not merged into buying guide. |

## Implementation decision needed

Redirects can be implemented in one of two places:

1. `next.config.mjs` using `async redirects()` if supported by the final hosting/runtime.
2. Cloudflare/platform redirect rules if static export or hosting behavior requires platform-level redirects.

Do not implement redirects blindly until final hosting behavior is confirmed.

## Validation checklist

- Each legacy URL returns 301 or platform-equivalent permanent redirect.
- Each target returns 200.
- No redirect target points to homepage unless homepage is genuinely canonical.
- Sitemap contains targets only, not redirecting URLs.
- Internal links point directly to targets only.
- Trailing slash variants are handled consistently.

## Recommendation

Treat redirect readiness as a production cutover blocker. The next implementation PR should either add tested `next.config.mjs` redirects or document and configure the equivalent Cloudflare/platform redirect layer.
