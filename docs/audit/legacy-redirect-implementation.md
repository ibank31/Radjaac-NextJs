# Legacy Redirect Implementation

Status: implemented in Next.js config
Basis: `main` after PR #31
Purpose: add production-cutover legacy redirects for old indexed/non-final URLs to canonical Next.js targets.

## Implementation

Redirects are implemented in `next.config.mjs` using `async redirects()` and `permanent: true`.

## Redirect map

| Source | Destination | Reason |
|---|---|---|
| `/artikel/harga-ac-1-2-pk-purwokerto-pemasangan` | `/katalog/ac-1-2-pk` | Capacity/product intent belongs to catalog. |
| `/artikel/ac-low-watt-listrik-900-1300-watt-purwokerto` | `/katalog/ac-low-watt` | Low watt category intent belongs to catalog. |
| `/artikel/ac-low-watt-listrik-900-1300-watt-purwokerto/` | `/katalog/ac-low-watt` | Trailing slash variant normalized to same target. |
| `/artikel/harga-ac-daikin-purwokerto` | `/brand/daikin` | Brand intent belongs to brand page. |
| `/artikel/daikin-inverter-purwokerto` | `/brand/daikin` | Daikin generic/inverter intent belongs to brand page. |
| `/artikel/harga-ac-gree-purwokerto` | `/brand/gree` | Brand intent belongs to brand page. |
| `/artikel/harga-ac-midea-purwokerto` | `/brand/midea` | Brand intent belongs to brand page. |
| `/artikel/ac-untuk-kost-purwokerto` | `/pengadaan-ac/kost-apartemen-skala-besar` | Kost/many-unit intent belongs to procurement detail page. |
| `/pengadaan-ac-proyek` | `/pengadaan-ac` | Legacy procurement hub belongs to final procurement hub. |
| `/artikel/beli-ac-baru-purwokerto-panduan-sebelum-order` | `/artikel/panduan-beli-ac-baru` | Old buying guide slug normalized to final article. |
| `/artikel/jual-ac-banyumas-konsultasi-pk-stok-pasang` | `/jual-ac-banyumas` | Local money intent belongs to area page. |
| `/artikel/toko-ac-purwokerto-yang-bisa-konsultasi-pk` | `/jual-ac-purwokerto` | Local money intent belongs to area page. |
| `/artikel/samsung-inverter-purwokerto` | `/brand/samsung` | Brand intent belongs to Samsung brand page. |

## Validation notes

- Build must pass after config update.
- Runtime preview must still test each legacy URL for permanent redirect behavior.
- If final hosting ignores Next.js redirects, equivalent Cloudflare/platform redirect rules must be added before production cutover.
- Sitemap and internal links must continue to contain only canonical targets, not redirecting legacy URLs.
