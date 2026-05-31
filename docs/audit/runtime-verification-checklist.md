<!--
CURRENT STATUS NOTE (2026-05-31):
This document is retained as historical audit context.
For current migration readiness, use:
docs/audit/MIGRATION_READINESS_CURRENT.md
Do not treat old BLOCKER/PENDING/Hold/FINAL-MISSING labels here as current status without re-audit.
-->

# Runtime Verification Checklist

Status: ready for preview/runtime verification
Basis: `main` after PR #32
Purpose: define the production-like checks needed after source-level migration, asset migration, and redirect implementation are complete.

## Current source-level status

| Area | Status | Notes |
|---|---|---|
| Live sitemap URL coverage | PASS | 43/43 live sitemap URLs represented in Next.js route registry and sitemap. |
| Route/content migration | PASS | Final pages and live article URLs are implemented. |
| Structured assets | PASS-PENDING-RUNTIME | Live repo assets migrated into clean Next.js structure; runtime asset URL test still needed. |
| Redirect source implementation | PASS-PENDING-RUNTIME | Legacy redirects are implemented in `next.config.mjs`; runtime redirect behavior still needs test. |
| Local build | PASS | Latest build after redirect implementation passed with 52/52 static pages. |
| Production cutover | NOT READY | Needs preview/runtime verification and hosting behavior confirmation. |

## Runtime environment to test

Use a preview or production-like URL before pointing the final domain:

```text
PREVIEW_URL=https://<preview-host>
FINAL_URL=https://www.radjaac.com
```

## Required runtime checks

| Check | Required result | Cutover impact |
|---|---|---|
| Homepage | 200 | Blocker if failed |
| Key money pages | 200 | Blocker if failed |
| Dynamic area pages | 200 | Blocker if failed |
| Brand pages | 200 | Blocker if failed |
| Catalog pages | 200 | Blocker if failed |
| Article pages | 200 | Blocker if failed |
| `/sitemap.xml` | 200, final canonical URLs only | Blocker if wrong |
| `/robots.txt` | 200, allows crawl, references final sitemap | Blocker if wrong |
| Legacy redirects | 301/308 to canonical targets | Blocker if ignored by hosting |
| Structured asset URLs | 200 for logo, icons, OG, photos, videos | Blocker if missing core assets |
| Internal links | No broken internal links | Blocker if important pages break |
| Canonical metadata | Final domain/path only | Medium/high depending issue |

## URL smoke test list

Minimum representative URLs:

```text
/
/jual-ac
/jual-ac-purwokerto
/jual-ac-banyumas
/jual-ac-tegal
/jual-ac-banjarnegara
/katalog
/katalog/ac-1-2-pk
/katalog/ac-low-watt
/brand/gree
/brand/daikin
/pengadaan-ac
/pengadaan-ac/kost-apartemen-skala-besar
/ganti-ac-baru-purwokerto
/artikel/panduan-beli-ac-baru
/artikel/ac-kurang-dingin-belum-tentu-freon-habis
/bukti-pengiriman-proyek
/kontak
/sitemap.xml
/robots.txt
```

## Legacy redirect runtime test list

Each source URL must return permanent redirect to the listed target:

```text
/artikel/harga-ac-1-2-pk-purwokerto-pemasangan -> /katalog/ac-1-2-pk
/artikel/ac-low-watt-listrik-900-1300-watt-purwokerto -> /katalog/ac-low-watt
/artikel/harga-ac-daikin-purwokerto -> /brand/daikin
/artikel/daikin-inverter-purwokerto -> /brand/daikin
/artikel/harga-ac-gree-purwokerto -> /brand/gree
/artikel/harga-ac-midea-purwokerto -> /brand/midea
/artikel/ac-untuk-kost-purwokerto -> /pengadaan-ac/kost-apartemen-skala-besar
/pengadaan-ac-proyek -> /pengadaan-ac
/artikel/beli-ac-baru-purwokerto-panduan-sebelum-order -> /artikel/panduan-beli-ac-baru
/artikel/jual-ac-banyumas-konsultasi-pk-stok-pasang -> /jual-ac-banyumas
/artikel/toko-ac-purwokerto-yang-bisa-konsultasi-pk -> /jual-ac-purwokerto
/artikel/samsung-inverter-purwokerto -> /brand/samsung
```

## Structured asset runtime test list

Core asset URLs that must return 200:

```text
/brand/logo-radjaac.webp
/icons/favicon.ico
/icons/icon-192.png
/icons/icon-512.png
/icons/apple-touch-icon.png
/og/radjaac-showroom-og.webp
/photos/showroom/showroom-utama.webp
/photos/delivery/radja-ac-loading-ac-sharp-truk-kuning.webp
/photos/stock/stok-gudang-ac-gree.webp
/ui/whatsapp.svg
```

## Suggested curl commands

After preview deploy, replace `$PREVIEW_URL` and run:

```bash
curl -I "$PREVIEW_URL/sitemap.xml"
curl -I "$PREVIEW_URL/robots.txt"
curl -I "$PREVIEW_URL/og/radjaac-showroom-og.webp"
curl -I "$PREVIEW_URL/artikel/harga-ac-daikin-purwokerto"
curl -I "$PREVIEW_URL/pengadaan-ac-proyek"
```

## Cutover decision rule

Production cutover is allowed only when:

- representative pages return 200,
- sitemap and robots return correct final-domain signals,
- legacy redirects work in the final hosting layer,
- core asset URLs return 200,
- rendered internal navigation has no important broken links,
- domain/Cloudflare/deploy behavior is confirmed.
