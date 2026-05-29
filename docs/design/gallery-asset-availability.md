# Gallery Asset Availability Audit

Status: completed asset availability audit
Basis:
- current Next.js `main` after visual parity plan,
- legacy gallery target source commit `3870cc2161b4a1a4d04c43946c509a544439cf29`,
- target gallery source file `src/pages/Gallery.jsx`.

## Purpose

Map the confirmed rich legacy gallery assets to the clean Next.js structured asset layout before implementing gallery visual parity.

## Summary

- Legacy assets checked: 64
- Legacy assets missing at matched commit: 0
- Assets already available in clean Next.js structure: 29
- Assets missing from clean Next.js structure: 35

## Decision

Some confirmed gallery assets are not yet available in the clean Next.js structure. Before implementing the full rich gallery, migrate only the missing approved assets in a controlled asset PR.

## Asset mapping

| Legacy source path | Clean Next.js target path | Legacy exists | Next.js exists |
|---|---|---:|---:|
| `public/assets/gallery/videos/pengiriman-ac-radja-ac-purwokerto-01.mp4` | `public/videos/pengiriman-ac-radja-ac-purwokerto-01.mp4` | YES | NO |
| `public/assets/gallery/videos/pengiriman-stok-ac-radja-ac-purwokerto-02.mp4` | `public/videos/pengiriman-stok-ac-radja-ac-purwokerto-02.mp4` | YES | NO |
| `public/assets/gallery/videos/pengiriman-stok-ac-radja-ac-clean.mp4` | `public/videos/pengiriman-stok-ac-radja-ac-clean.mp4` | YES | NO |
| `public/assets/gallery/video-thumbnails/pengiriman-ac-radja-ac-purwokerto-01.webp` | `public/video-thumbnails/pengiriman-ac-radja-ac-purwokerto-01.webp` | YES | NO |
| `public/assets/gallery/video-thumbnails/pengiriman-stok-ac-radja-ac-purwokerto-02.webp` | `public/video-thumbnails/pengiriman-stok-ac-radja-ac-purwokerto-02.webp` | YES | NO |
| `public/assets/gallery/video-thumbnails/pengiriman-stok-ac-radja-ac-clean.webp` | `public/video-thumbnails/pengiriman-stok-ac-radja-ac-clean.webp` | YES | NO |
| `public/assets/gallery/pengiriman/new-armada-radjaac-daikin.webp` | `public/photos/delivery/new-armada-radjaac-daikin.webp` | YES | YES |
| `public/assets/gallery/pengiriman/pengiriman-sharp-midea.webp` | `public/photos/delivery/pengiriman-sharp-midea.webp` | YES | YES |
| `public/assets/gallery/pengiriman/radja-ac-pengiriman-stok-aqua-truk-putih.webp` | `public/photos/delivery/radja-ac-pengiriman-stok-aqua-truk-putih.webp` | YES | YES |
| `public/assets/gallery/pengiriman/radja-ac-persiapan-pengiriman.webp` | `public/photos/delivery/radja-ac-persiapan-pengiriman.webp` | YES | YES |
| `public/assets/gallery/pengiriman/radja-ac-loading-ac-sharp-truk-kuning.webp` | `public/photos/delivery/radja-ac-loading-ac-sharp-truk-kuning.webp` | YES | YES |
| `public/assets/gallery/pengiriman/loading-ac-ariston.webp` | `public/photos/delivery/loading-ac-ariston.webp` | YES | YES |
| `public/assets/gallery/pengiriman/pengiriman-ac-ariston.webp` | `public/photos/delivery/pengiriman-ac-ariston.webp` | YES | YES |
| `public/assets/gallery/pengiriman/pengiriman-ariston-daikin.webp` | `public/photos/delivery/pengiriman-ariston-daikin.webp` | YES | YES |
| `public/assets/gallery/pengiriman/outdoor-ac-daikin-restock.webp` | `public/photos/delivery/outdoor-ac-daikin-restock.webp` | YES | YES |
| `public/assets/gallery/pengiriman/restock-ac-daikin.webp` | `public/photos/delivery/restock-ac-daikin.webp` | YES | YES |
| `public/assets/gallery/pengiriman/radja-ac-stok-sharp.webp` | `public/photos/delivery/radja-ac-stok-sharp.webp` | YES | YES |
| `public/assets/gallery/stok-gudang/restock-midea-ac.webp` | `public/photos/stock/restock-midea-ac.webp` | YES | YES |
| `public/assets/gallery/stok-gudang/restock-tcl-midea-lg.webp` | `public/photos/stock/restock-tcl-midea-lg.webp` | YES | YES |
| `public/assets/gallery/stok-gudang/midea-restock.webp` | `public/photos/stock/midea-restock.webp` | YES | YES |
| `public/assets/gallery/stok-gudang/stock-gudang-gree-aqva.webp` | `public/photos/stock/stock-gudang-gree-aqva.webp` | YES | YES |
| `public/assets/gallery/stok-gudang/stok-gudang-ac-gree.webp` | `public/photos/stock/stok-gudang-ac-gree.webp` | YES | YES |
| `public/assets/gallery/stok-gudang/stok-gudang-aqva.webp` | `public/photos/stock/stok-gudang-aqva.webp` | YES | YES |
| `public/assets/gallery/stok-gudang/stok-gudang-material-pipa.webp` | `public/photos/stock/stok-gudang-material-pipa.webp` | YES | YES |
| `public/assets/gallery/stok-gudang/stok-gudang-outdoor-gree.webp` | `public/photos/stock/stok-gudang-outdoor-gree.webp` | YES | YES |
| `public/assets/gallery/stok-gudang/stok-material-pipa.webp` | `public/photos/stock/stok-material-pipa.webp` | YES | YES |
| `public/assets/gallery/display/display-ariston-new.webp` | `public/photos/display/display-ariston-new.webp` | YES | NO |
| `public/assets/gallery/display/display-daikin-new.webp` | `public/photos/display/display-daikin-new.webp` | YES | NO |
| `public/assets/gallery/display/display-flife-new.webp` | `public/photos/display/display-flife-new.webp` | YES | NO |
| `public/assets/gallery/display/display-gree-new.webp` | `public/photos/display/display-gree-new.webp` | YES | NO |
| `public/assets/gallery/display/display-hisense-new.webp` | `public/photos/display/display-hisense-new.webp` | YES | NO |
| `public/assets/gallery/display/display-modena-new.webp` | `public/photos/display/display-modena-new.webp` | YES | NO |
| `public/assets/gallery/display/display-sansui-new.webp` | `public/photos/display/display-sansui-new.webp` | YES | NO |
| `public/assets/gallery/display/display-ariston-radja-ac.webp` | `public/photos/display/display-ariston-radja-ac.webp` | YES | NO |
| `public/assets/gallery/display/display-daikin-radja-ac.webp` | `public/photos/display/display-daikin-radja-ac.webp` | YES | NO |
| `public/assets/gallery/display/display-gree-flife-radja-ac.webp` | `public/photos/display/display-gree-flife-radja-ac.webp` | YES | NO |
| `public/assets/gallery/display/display-gree-inverter-radja-ac.webp` | `public/photos/display/display-gree-inverter-radja-ac.webp` | YES | NO |
| `public/assets/gallery/display/display-gree-residential-ac-radja-ac.webp` | `public/photos/display/display-gree-residential-ac-radja-ac.webp` | YES | NO |
| `public/assets/gallery/display/display-sansui-gree-radja-ac.webp` | `public/photos/display/display-sansui-gree-radja-ac.webp` | YES | NO |
| `public/assets/gallery/pemasangan/pemasangan-ac-daikin-untuk-kost-outdoor-01.webp` | `public/photos/installation/pemasangan-ac-daikin-untuk-kost-outdoor-01.webp` | YES | YES |
| `public/assets/gallery/pemasangan/pemasangan-ac-daikin-untuk-kost-indoor-01.webp` | `public/photos/installation/pemasangan-ac-daikin-untuk-kost-indoor-01.webp` | YES | YES |
| `public/assets/gallery/pemasangan/pemasangan-ac-daikin-untuk-kost-indoor-02.webp` | `public/photos/installation/pemasangan-ac-daikin-untuk-kost-indoor-02.webp` | YES | YES |
| `public/assets/gallery/pemasangan/pemasangan-ac-daikin-untuk-kost-indoor-03.webp` | `public/photos/installation/pemasangan-ac-daikin-untuk-kost-indoor-03.webp` | YES | YES |
| `public/assets/gallery/pemasangan/pemasangan-ac-cassete.webp` | `public/photos/installation/pemasangan-ac-cassete.webp` | YES | YES |
| `public/assets/gallery/pemasangan/outdoor-ac-cassete.webp` | `public/photos/installation/outdoor-ac-cassete.webp` | YES | YES |
| `public/assets/showroom/depan-proshop-gree.webp` | `public/photos/showroom/depan-proshop-gree.webp` | YES | YES |
| `public/assets/showroom/showroom-display-hisense-modena-01.webp` | `public/photos/showroom/showroom-display-hisense-modena-01.webp` | YES | YES |
| `public/assets/gallery/large/showroom-gree-radja-ac-purwokerto-01.webp` | `public/photos/showroom/showroom-gree-radja-ac-purwokerto-01.webp` | YES | NO |
| `public/assets/gallery/large/showroom-gree-radja-ac-purwokerto-02.webp` | `public/photos/showroom/showroom-gree-radja-ac-purwokerto-02.webp` | YES | NO |
| `public/assets/gallery/large/showroom-multibrand-radja-ac-purwokerto-01.webp` | `public/photos/showroom/showroom-multibrand-radja-ac-purwokerto-01.webp` | YES | NO |
| `public/assets/gallery/large/gudang-stok-ac-gree-radja-ac-01.webp` | `public/photos/stock/gudang-stok-ac-gree-radja-ac-01.webp` | YES | NO |
| `public/assets/gallery/large/gudang-stok-ac-aqua-radja-ac-01.webp` | `public/photos/stock/gudang-stok-ac-aqua-radja-ac-01.webp` | YES | NO |
| `public/assets/gallery/large/gudang-stok-ac-daikin-gree-radja-ac-01.webp` | `public/photos/stock/gudang-stok-ac-daikin-gree-radja-ac-01.webp` | YES | NO |
| `public/assets/gallery/large/gudang-stok-ac-radja-ac-purwokerto-01.webp` | `public/photos/stock/gudang-stok-ac-radja-ac-purwokerto-01.webp` | YES | NO |
| `public/assets/gallery/large/display-ac-gree-low-watt-radja-ac-01.webp` | `public/photos/display/display-ac-gree-low-watt-radja-ac-01.webp` | YES | NO |
| `public/assets/gallery/large/display-ac-flife-radja-ac-01.webp` | `public/photos/display/display-ac-flife-radja-ac-01.webp` | YES | NO |
| `public/assets/gallery/large/daikin-cassette-display-radja-ac-01.webp` | `public/photos/display/daikin-cassette-display-radja-ac-01.webp` | YES | NO |
| `public/assets/gallery/large/material-instalasi-ac-radja-ac-01.webp` | `public/photos/installation/material-instalasi-ac-radja-ac-01.webp` | YES | NO |
| `public/assets/gallery/large/stok-pipa-ac-radja-ac-purwokerto-01.webp` | `public/photos/stock/stok-pipa-ac-radja-ac-purwokerto-01.webp` | YES | NO |
| `public/assets/gallery/large/display-daikin-nusantara-radja-ac-01.webp` | `public/photos/display/display-daikin-nusantara-radja-ac-01.webp` | YES | NO |
| `public/assets/gallery/large/display-daikin-sansui-radja-ac-01.webp` | `public/photos/display/display-daikin-sansui-radja-ac-01.webp` | YES | NO |
| `public/assets/gallery/large/display-outdoor-daikin-radja-ac-01.webp` | `public/photos/display/display-outdoor-daikin-radja-ac-01.webp` | YES | NO |
| `public/assets/gallery/large/display-reiwa-portable-ac-radja-ac-01.webp` | `public/photos/display/display-reiwa-portable-ac-radja-ac-01.webp` | YES | NO |
| `public/assets/ui/whatsapp.svg` | `public/ui/whatsapp.svg` | YES | YES |

## Missing from clean Next.js structure

- `public/assets/gallery/videos/pengiriman-ac-radja-ac-purwokerto-01.mp4` -> `public/videos/pengiriman-ac-radja-ac-purwokerto-01.mp4`
- `public/assets/gallery/videos/pengiriman-stok-ac-radja-ac-purwokerto-02.mp4` -> `public/videos/pengiriman-stok-ac-radja-ac-purwokerto-02.mp4`
- `public/assets/gallery/videos/pengiriman-stok-ac-radja-ac-clean.mp4` -> `public/videos/pengiriman-stok-ac-radja-ac-clean.mp4`
- `public/assets/gallery/video-thumbnails/pengiriman-ac-radja-ac-purwokerto-01.webp` -> `public/video-thumbnails/pengiriman-ac-radja-ac-purwokerto-01.webp`
- `public/assets/gallery/video-thumbnails/pengiriman-stok-ac-radja-ac-purwokerto-02.webp` -> `public/video-thumbnails/pengiriman-stok-ac-radja-ac-purwokerto-02.webp`
- `public/assets/gallery/video-thumbnails/pengiriman-stok-ac-radja-ac-clean.webp` -> `public/video-thumbnails/pengiriman-stok-ac-radja-ac-clean.webp`
- `public/assets/gallery/display/display-ariston-new.webp` -> `public/photos/display/display-ariston-new.webp`
- `public/assets/gallery/display/display-daikin-new.webp` -> `public/photos/display/display-daikin-new.webp`
- `public/assets/gallery/display/display-flife-new.webp` -> `public/photos/display/display-flife-new.webp`
- `public/assets/gallery/display/display-gree-new.webp` -> `public/photos/display/display-gree-new.webp`
- `public/assets/gallery/display/display-hisense-new.webp` -> `public/photos/display/display-hisense-new.webp`
- `public/assets/gallery/display/display-modena-new.webp` -> `public/photos/display/display-modena-new.webp`
- `public/assets/gallery/display/display-sansui-new.webp` -> `public/photos/display/display-sansui-new.webp`
- `public/assets/gallery/display/display-ariston-radja-ac.webp` -> `public/photos/display/display-ariston-radja-ac.webp`
- `public/assets/gallery/display/display-daikin-radja-ac.webp` -> `public/photos/display/display-daikin-radja-ac.webp`
- `public/assets/gallery/display/display-gree-flife-radja-ac.webp` -> `public/photos/display/display-gree-flife-radja-ac.webp`
- `public/assets/gallery/display/display-gree-inverter-radja-ac.webp` -> `public/photos/display/display-gree-inverter-radja-ac.webp`
- `public/assets/gallery/display/display-gree-residential-ac-radja-ac.webp` -> `public/photos/display/display-gree-residential-ac-radja-ac.webp`
- `public/assets/gallery/display/display-sansui-gree-radja-ac.webp` -> `public/photos/display/display-sansui-gree-radja-ac.webp`
- `public/assets/gallery/large/showroom-gree-radja-ac-purwokerto-01.webp` -> `public/photos/showroom/showroom-gree-radja-ac-purwokerto-01.webp`
- `public/assets/gallery/large/showroom-gree-radja-ac-purwokerto-02.webp` -> `public/photos/showroom/showroom-gree-radja-ac-purwokerto-02.webp`
- `public/assets/gallery/large/showroom-multibrand-radja-ac-purwokerto-01.webp` -> `public/photos/showroom/showroom-multibrand-radja-ac-purwokerto-01.webp`
- `public/assets/gallery/large/gudang-stok-ac-gree-radja-ac-01.webp` -> `public/photos/stock/gudang-stok-ac-gree-radja-ac-01.webp`
- `public/assets/gallery/large/gudang-stok-ac-aqua-radja-ac-01.webp` -> `public/photos/stock/gudang-stok-ac-aqua-radja-ac-01.webp`
- `public/assets/gallery/large/gudang-stok-ac-daikin-gree-radja-ac-01.webp` -> `public/photos/stock/gudang-stok-ac-daikin-gree-radja-ac-01.webp`
- `public/assets/gallery/large/gudang-stok-ac-radja-ac-purwokerto-01.webp` -> `public/photos/stock/gudang-stok-ac-radja-ac-purwokerto-01.webp`
- `public/assets/gallery/large/display-ac-gree-low-watt-radja-ac-01.webp` -> `public/photos/display/display-ac-gree-low-watt-radja-ac-01.webp`
- `public/assets/gallery/large/display-ac-flife-radja-ac-01.webp` -> `public/photos/display/display-ac-flife-radja-ac-01.webp`
- `public/assets/gallery/large/daikin-cassette-display-radja-ac-01.webp` -> `public/photos/display/daikin-cassette-display-radja-ac-01.webp`
- `public/assets/gallery/large/material-instalasi-ac-radja-ac-01.webp` -> `public/photos/installation/material-instalasi-ac-radja-ac-01.webp`
- `public/assets/gallery/large/stok-pipa-ac-radja-ac-purwokerto-01.webp` -> `public/photos/stock/stok-pipa-ac-radja-ac-purwokerto-01.webp`
- `public/assets/gallery/large/display-daikin-nusantara-radja-ac-01.webp` -> `public/photos/display/display-daikin-nusantara-radja-ac-01.webp`
- `public/assets/gallery/large/display-daikin-sansui-radja-ac-01.webp` -> `public/photos/display/display-daikin-sansui-radja-ac-01.webp`
- `public/assets/gallery/large/display-outdoor-daikin-radja-ac-01.webp` -> `public/photos/display/display-outdoor-daikin-radja-ac-01.webp`
- `public/assets/gallery/large/display-reiwa-portable-ac-radja-ac-01.webp` -> `public/photos/display/display-reiwa-portable-ac-radja-ac-01.webp`

## Available in clean Next.js structure

- `public/photos/delivery/new-armada-radjaac-daikin.webp`
- `public/photos/delivery/pengiriman-sharp-midea.webp`
- `public/photos/delivery/radja-ac-pengiriman-stok-aqua-truk-putih.webp`
- `public/photos/delivery/radja-ac-persiapan-pengiriman.webp`
- `public/photos/delivery/radja-ac-loading-ac-sharp-truk-kuning.webp`
- `public/photos/delivery/loading-ac-ariston.webp`
- `public/photos/delivery/pengiriman-ac-ariston.webp`
- `public/photos/delivery/pengiriman-ariston-daikin.webp`
- `public/photos/delivery/outdoor-ac-daikin-restock.webp`
- `public/photos/delivery/restock-ac-daikin.webp`
- `public/photos/delivery/radja-ac-stok-sharp.webp`
- `public/photos/stock/restock-midea-ac.webp`
- `public/photos/stock/restock-tcl-midea-lg.webp`
- `public/photos/stock/midea-restock.webp`
- `public/photos/stock/stock-gudang-gree-aqva.webp`
- `public/photos/stock/stok-gudang-ac-gree.webp`
- `public/photos/stock/stok-gudang-aqva.webp`
- `public/photos/stock/stok-gudang-material-pipa.webp`
- `public/photos/stock/stok-gudang-outdoor-gree.webp`
- `public/photos/stock/stok-material-pipa.webp`
- `public/photos/installation/pemasangan-ac-daikin-untuk-kost-outdoor-01.webp`
- `public/photos/installation/pemasangan-ac-daikin-untuk-kost-indoor-01.webp`
- `public/photos/installation/pemasangan-ac-daikin-untuk-kost-indoor-02.webp`
- `public/photos/installation/pemasangan-ac-daikin-untuk-kost-indoor-03.webp`
- `public/photos/installation/pemasangan-ac-cassete.webp`
- `public/photos/installation/outdoor-ac-cassete.webp`
- `public/photos/showroom/depan-proshop-gree.webp`
- `public/photos/showroom/showroom-display-hisense-modena-01.webp`
- `public/ui/whatsapp.svg`

## Implementation rule

- Do not reference legacy `/assets/gallery/...` paths in Next.js page code.
- Use the clean target paths in this audit.
- If missing assets are migrated, preserve clean folder naming and document source mapping.
- Keep route, redirect, sitemap, robots, schema, Cloudflare config, and runtime behavior unchanged.
