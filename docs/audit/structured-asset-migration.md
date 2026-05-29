# Structured Asset Migration

Status: implementation branch
Basis: `main` after PR #30
Purpose: migrate live RADJA AC assets from the old repo into a clean Next.js public asset structure.

## Rules

- Assets are copied from the old live RADJA AC repo, but not using the old folder layout.
- Showroom, stock, display, delivery, and installation photos are valid RADJA AC assets from the physical location in Pamijen, Sokaraja, Banyumas.
- Asset paths are organized for future uploads and maintenance.
- Product/brand assets remain proof/display assets; copy does not create new unsupported brand claims.
- Captions and page copy must still avoid fake branch/cabang claims outside the real business location.

## New structure

```text
public/
  brand/
  icons/
  og/
  photos/
    showroom/
    delivery/
    stock/
    installation/
    product-display/
    brand-proof/
    proof/
  videos/
    delivery/
    thumbnails/
  ui/
  brand-logos/
```

## Migrated asset paths

```text
public/brand/logo-radjaac.webp
public/icons/apple-touch-icon.png
public/icons/favicon-16x16.png
public/icons/favicon-32x32.png
public/icons/favicon-48x48.png
public/icons/favicon.ico
public/icons/icon-192.png
public/icons/icon-512.png
public/icons/master-icon-1024.png
public/icons/site.webmanifest
public/og/radjaac-showroom-og.webp
public/photos/brand-proof/daikin-daikin-showcase.webp
public/photos/brand-proof/daikin-sertificate-daikin.webp
public/photos/brand-proof/gree-gree-showcase.webp
public/photos/brand-proof/gree-rekor-muri-gree.webp
public/photos/brand-proof/hisense-sertifikat-hisense.webp
public/photos/brand-proof/hisense-showcase-hisense.webp
public/photos/brand-proof/midea-midea-showcase.webp
public/photos/brand-proof/midea-sertificate-midea.webp
public/photos/brand-proof/sansui-sansui-showcase.webp
public/photos/brand-proof/sansui-sertificate-sansui.webp
public/photos/delivery/loading-ac-ariston.webp
public/photos/delivery/new-armada-radjaac-daikin.webp
public/photos/delivery/outdoor-ac-daikin-restock.webp
public/photos/delivery/pengiriman-ac-ariston.webp
public/photos/delivery/pengiriman-ariston-daikin.webp
public/photos/delivery/pengiriman-sharp-midea.webp
public/photos/delivery/radja-ac-loading-ac-sharp-truk-kuning.webp
public/photos/delivery/radja-ac-pengiriman-stok-aqua-truk-putih.webp
public/photos/delivery/radja-ac-persiapan-pengiriman.webp
public/photos/delivery/radja-ac-stok-sharp.webp
public/photos/delivery/restock-ac-daikin.webp
public/photos/installation/outdoor-ac-cassete.webp
public/photos/installation/pemasangan-ac-cassete.webp
public/photos/installation/pemasangan-ac-daikin-untuk-kost-indoor-01.webp
public/photos/installation/pemasangan-ac-daikin-untuk-kost-indoor-02.webp
public/photos/installation/pemasangan-ac-daikin-untuk-kost-indoor-03.webp
public/photos/installation/pemasangan-ac-daikin-untuk-kost-outdoor-01.webp
public/photos/product-display/daikin-ac-daikin-low-watt.webp
public/photos/product-display/daikin-ac-daikin-standar.webp
public/photos/product-display/daikin-cassette-display.webp
public/photos/product-display/display-ariston-new.webp
public/photos/product-display/display-ariston-radja-ac.webp
public/photos/product-display/display-daikin-new.webp
public/photos/product-display/display-daikin-radja-ac.webp
public/photos/product-display/display-flife-new.webp
public/photos/product-display/display-gree-flife-radja-ac.webp
public/photos/product-display/display-gree-inverter-radja-ac.webp
public/photos/product-display/display-gree-new.webp
public/photos/product-display/display-gree-residential-ac-radja-ac.webp
public/photos/product-display/display-hisense-new.webp
public/photos/product-display/display-modena-new.webp
public/photos/product-display/display-sansui-gree-radja-ac.webp
public/photos/product-display/display-sansui-new.webp
public/photos/product-display/gree-gree-inverter.webp
public/photos/product-display/gree-gree-low-wat.webp
public/photos/product-display/gree-gree-standar.webp
public/photos/product-display/hisense-ac-hisense-standar.webp
public/photos/product-display/midea-ac-midea-low-wat.webp
public/photos/product-display/midea-ac-midea-standar.webp
public/photos/product-display/midea-cassette-display.webp
public/photos/product-display/samsung-samsung-inverter.webp
public/photos/product-display/sansui-ac-sansui-deluxe.webp
public/photos/product-display/sansui-ac-sansui-standar-basic.webp
public/photos/product-display/sansui-ac-sansui-standar.webp
public/photos/product-display/sansui-cassette-display.webp
public/photos/product-display/sharp-ac-sharp-bey.webp
public/photos/proof/daikin-cassette-display-radja-ac-01.webp
public/photos/proof/display-ac-flife-radja-ac-01.webp
public/photos/proof/display-ac-gree-low-watt-radja-ac-01.webp
public/photos/proof/display-daikin-nusantara-radja-ac-01.webp
public/photos/proof/display-daikin-sansui-radja-ac-01.webp
public/photos/proof/display-outdoor-daikin-radja-ac-01.webp
public/photos/proof/display-reiwa-portable-ac-radja-ac-01.webp
public/photos/proof/gudang-stok-ac-aqua-radja-ac-01.webp
public/photos/proof/gudang-stok-ac-daikin-gree-radja-ac-01.webp
public/photos/proof/gudang-stok-ac-gree-radja-ac-01.webp
public/photos/proof/gudang-stok-ac-gree-radja-ac-02.webp
public/photos/proof/gudang-stok-ac-gree-radja-ac-03.webp
public/photos/proof/gudang-stok-ac-radja-ac-purwokerto-01.webp
public/photos/proof/material-instalasi-ac-radja-ac-01.webp
public/photos/proof/showroom-daikin-gree-radja-ac-01.webp
public/photos/proof/showroom-gree-radja-ac-purwokerto-01.webp
public/photos/proof/showroom-gree-radja-ac-purwokerto-02.webp
public/photos/proof/showroom-multibrand-radja-ac-purwokerto-01.webp
public/photos/proof/stok-pipa-ac-radja-ac-purwokerto-01.webp
public/photos/showroom/depan-proshop-gree.webp
public/photos/showroom/display-ariston-radja-ac.webp
public/photos/showroom/display-daikin-radja-ac.webp
public/photos/showroom/display-gree-flife-radja-ac.webp
public/photos/showroom/display-gree-inverter-radja-ac.webp
public/photos/showroom/display-gree-residential-ac-radja-ac.webp
public/photos/showroom/display-midea-cassette-floor-standing-radja-ac.webp
public/photos/showroom/display-sansui-gree-radja-ac.webp
public/photos/showroom/showroom-display-hisense-modena-01.webp
public/photos/showroom/showroom-utama.webp
public/photos/stock/midea-restock.webp
public/photos/stock/restock-midea-ac.webp
public/photos/stock/restock-tcl-midea-lg.webp
public/photos/stock/stock-gudang-gree-aqva.webp
public/photos/stock/stok-gudang-ac-gree.webp
public/photos/stock/stok-gudang-aqva.webp
public/photos/stock/stok-gudang-material-pipa.webp
public/photos/stock/stok-gudang-outdoor-gree.webp
public/photos/stock/stok-material-pipa.webp
public/videos/delivery/pengiriman-ac-radja-ac-purwokerto-01.mp4
public/videos/delivery/pengiriman-stok-ac-radja-ac-clean.mp4
public/videos/delivery/pengiriman-stok-ac-radja-ac-purwokerto-02.mp4
public/videos/thumbnails/pengiriman-ac-radja-ac-purwokerto-01.webp
public/videos/thumbnails/pengiriman-stok-ac-radja-ac-clean.webp
public/videos/thumbnails/pengiriman-stok-ac-radja-ac-purwokerto-02.webp
public/ui/whatsapp.svg
public/brand-logos/daikin-logo.webp
public/brand-logos/gree-logo.webp
public/brand-logos/hisense-logo.png
public/brand-logos/midea-logo.webp
public/brand-logos/panasonic-logo.webp
public/brand-logos/samsung-logo.webp
public/brand-logos/sansui-logo.png
public/brand-logos/sansui-logo.webp
public/brand-logos/sharp-logo.webp
app/apple-icon.png
app/favicon.ico
app/icon.png
```

## Source-to-target principle

Old repo paths remain only as source references. Final Next.js pages should use the structured `public/` paths above.
