# Runtime Verification Result

Status: passed production Pages runtime verification
Basis: `main` after PR #34
Runtime URL tested: `https://radjaac-nextjs.pages.dev`
Purpose: record production-like Cloudflare Pages runtime verification before visual parity work and custom domain cutover.

## Summary

| Area | Result | Notes |
|---|---|---|
| Cloudflare Pages production deploy | PASS | `main` deploy succeeded after `nodejs_compat` compatibility flag was added. |
| Representative pages | PASS | All checked pages returned 200. |
| Structured assets | PASS | Core logo, icons, OG image, photo, and UI assets returned 200. |
| Legacy redirects | PASS | All checked legacy URLs returned permanent 308 redirects to canonical targets. |
| Sitemap | PASS | `/sitemap.xml` returned 200 and final `https://www.radjaac.com` URLs. |
| Robots | PASS | `/robots.txt` returned 200, allows crawl, and references final sitemap URL. |
| Visual parity | NOT CHECKED | Runtime technical verification does not confirm old-live visual parity. |
| Custom domain cutover | NOT DONE | Final domain has not been pointed to the Next.js Cloudflare Pages project yet. |

## Page status checks

All checked paths returned 200:

```text
/, /jual-ac, /jual-ac-purwokerto, /jual-ac-banyumas, /jual-ac-tegal, /jual-ac-banjarnegara
/katalog, /katalog/ac-1-2-pk, /katalog/ac-low-watt
/brand/gree, /brand/daikin
/pengadaan-ac, /pengadaan-ac/kost-apartemen-skala-besar
/ganti-ac-baru-purwokerto
/artikel/panduan-beli-ac-baru, /artikel/ac-kurang-dingin-belum-tentu-freon-habis
/bukti-pengiriman-proyek, /kontak, /sitemap.xml, /robots.txt
```

## Asset checks

All checked asset paths returned 200:

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

## Redirect checks

All checked legacy URLs returned permanent 308 redirects to the intended canonical targets.

## Remaining before final cutover

1. Run visual parity audit against the current live `radjaac.com` presentation.
2. Patch homepage/section layout if visual parity is required before cutover.
3. Confirm Cloudflare custom domain routing for `www.radjaac.com` and apex behavior.
4. Run final smoke test after custom domain is attached.
