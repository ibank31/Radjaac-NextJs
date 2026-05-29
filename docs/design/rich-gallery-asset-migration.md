# Rich Gallery Asset Migration

Status: assets migrated
Basis:
- `docs/design/gallery-asset-availability.md`,
- legacy source commit `3870cc2161b4a1a4d04c43946c509a544439cf29`,
- confirmed gallery visual target `https://b2b782f8.radjaac-premium-pages.pages.dev/gallery`.

## Purpose

Migrate the missing approved gallery/proof assets from the legacy gallery target into the clean Next.js public asset structure.

## Summary

- Assets migrated: 35
- Page code changes: none
- Route/config changes: none

## Migrated asset mapping

| Legacy source | Next.js clean target | Size bytes |
|---|---|---:|
| `public/assets/gallery/videos/pengiriman-ac-radja-ac-purwokerto-01.mp4` | `public/videos/pengiriman-ac-radja-ac-purwokerto-01.mp4` | 855835 |
| `public/assets/gallery/videos/pengiriman-stok-ac-radja-ac-purwokerto-02.mp4` | `public/videos/pengiriman-stok-ac-radja-ac-purwokerto-02.mp4` | 476069 |
| `public/assets/gallery/videos/pengiriman-stok-ac-radja-ac-clean.mp4` | `public/videos/pengiriman-stok-ac-radja-ac-clean.mp4` | 526526 |
| `public/assets/gallery/video-thumbnails/pengiriman-ac-radja-ac-purwokerto-01.webp` | `public/video-thumbnails/pengiriman-ac-radja-ac-purwokerto-01.webp` | 41142 |
| `public/assets/gallery/video-thumbnails/pengiriman-stok-ac-radja-ac-purwokerto-02.webp` | `public/video-thumbnails/pengiriman-stok-ac-radja-ac-purwokerto-02.webp` | 41292 |
| `public/assets/gallery/video-thumbnails/pengiriman-stok-ac-radja-ac-clean.webp` | `public/video-thumbnails/pengiriman-stok-ac-radja-ac-clean.webp` | 40580 |
| `public/assets/gallery/display/display-ariston-new.webp` | `public/photos/display/display-ariston-new.webp` | 96404 |
| `public/assets/gallery/display/display-daikin-new.webp` | `public/photos/display/display-daikin-new.webp` | 94442 |
| `public/assets/gallery/display/display-flife-new.webp` | `public/photos/display/display-flife-new.webp` | 92700 |
| `public/assets/gallery/display/display-gree-new.webp` | `public/photos/display/display-gree-new.webp` | 113898 |
| `public/assets/gallery/display/display-hisense-new.webp` | `public/photos/display/display-hisense-new.webp` | 100484 |
| `public/assets/gallery/display/display-modena-new.webp` | `public/photos/display/display-modena-new.webp` | 95770 |
| `public/assets/gallery/display/display-sansui-new.webp` | `public/photos/display/display-sansui-new.webp` | 99258 |
| `public/assets/gallery/display/display-ariston-radja-ac.webp` | `public/photos/display/display-ariston-radja-ac.webp` | 145058 |
| `public/assets/gallery/display/display-daikin-radja-ac.webp` | `public/photos/display/display-daikin-radja-ac.webp` | 122790 |
| `public/assets/gallery/display/display-gree-flife-radja-ac.webp` | `public/photos/display/display-gree-flife-radja-ac.webp` | 175530 |
| `public/assets/gallery/display/display-gree-inverter-radja-ac.webp` | `public/photos/display/display-gree-inverter-radja-ac.webp` | 139632 |
| `public/assets/gallery/display/display-gree-residential-ac-radja-ac.webp` | `public/photos/display/display-gree-residential-ac-radja-ac.webp` | 131384 |
| `public/assets/gallery/display/display-sansui-gree-radja-ac.webp` | `public/photos/display/display-sansui-gree-radja-ac.webp` | 96520 |
| `public/assets/gallery/large/showroom-gree-radja-ac-purwokerto-01.webp` | `public/photos/showroom/showroom-gree-radja-ac-purwokerto-01.webp` | 120924 |
| `public/assets/gallery/large/showroom-gree-radja-ac-purwokerto-02.webp` | `public/photos/showroom/showroom-gree-radja-ac-purwokerto-02.webp` | 118962 |
| `public/assets/gallery/large/showroom-multibrand-radja-ac-purwokerto-01.webp` | `public/photos/showroom/showroom-multibrand-radja-ac-purwokerto-01.webp` | 114340 |
| `public/assets/gallery/large/gudang-stok-ac-gree-radja-ac-01.webp` | `public/photos/stock/gudang-stok-ac-gree-radja-ac-01.webp` | 106266 |
| `public/assets/gallery/large/gudang-stok-ac-aqua-radja-ac-01.webp` | `public/photos/stock/gudang-stok-ac-aqua-radja-ac-01.webp` | 157112 |
| `public/assets/gallery/large/gudang-stok-ac-daikin-gree-radja-ac-01.webp` | `public/photos/stock/gudang-stok-ac-daikin-gree-radja-ac-01.webp` | 134082 |
| `public/assets/gallery/large/gudang-stok-ac-radja-ac-purwokerto-01.webp` | `public/photos/stock/gudang-stok-ac-radja-ac-purwokerto-01.webp` | 176296 |
| `public/assets/gallery/large/stok-pipa-ac-radja-ac-purwokerto-01.webp` | `public/photos/stock/stok-pipa-ac-radja-ac-purwokerto-01.webp` | 125486 |
| `public/assets/gallery/large/display-ac-gree-low-watt-radja-ac-01.webp` | `public/photos/display/display-ac-gree-low-watt-radja-ac-01.webp` | 86078 |
| `public/assets/gallery/large/display-ac-flife-radja-ac-01.webp` | `public/photos/display/display-ac-flife-radja-ac-01.webp` | 91582 |
| `public/assets/gallery/large/daikin-cassette-display-radja-ac-01.webp` | `public/photos/display/daikin-cassette-display-radja-ac-01.webp` | 57950 |
| `public/assets/gallery/large/display-daikin-nusantara-radja-ac-01.webp` | `public/photos/display/display-daikin-nusantara-radja-ac-01.webp` | 79536 |
| `public/assets/gallery/large/display-daikin-sansui-radja-ac-01.webp` | `public/photos/display/display-daikin-sansui-radja-ac-01.webp` | 92596 |
| `public/assets/gallery/large/display-outdoor-daikin-radja-ac-01.webp` | `public/photos/display/display-outdoor-daikin-radja-ac-01.webp` | 94362 |
| `public/assets/gallery/large/display-reiwa-portable-ac-radja-ac-01.webp` | `public/photos/display/display-reiwa-portable-ac-radja-ac-01.webp` | 97150 |
| `public/assets/gallery/large/material-instalasi-ac-radja-ac-01.webp` | `public/photos/installation/material-instalasi-ac-radja-ac-01.webp` | 127660 |

## Implementation rule

Future gallery page implementation must use the clean Next.js target paths documented here, not legacy `/assets/gallery/...` paths.
