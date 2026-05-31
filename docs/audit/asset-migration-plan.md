<!--
CURRENT STATUS NOTE (2026-05-31):
This document is retained as historical audit context.
For current migration readiness, use:
docs/audit/MIGRATION_READINESS_CURRENT.md
Do not treat old BLOCKER/PENDING/Hold/FINAL-MISSING labels here as current status without re-audit.
-->

# Asset Migration Plan

Status: working asset audit
Basis: `main` after PR #28
Purpose: define which assets are required before production cutover and prevent blind copying from the old RADJA AC repo.

## Current asset readiness

| Area | Status | Notes |
|---|---|---|
| Logo | PENDING | Need approved RADJA AC logo asset. |
| Favicon / app icons | PENDING | Need final icon set for production browser/social display. |
| OG / social image | PENDING | Need final share image using approved brand asset. |
| Trust/proof images | PENDING | Need select only verified delivery/project/store/proof images. |
| Product/brand images | RESTRICTED | Do not copy random product/brand images without source/usage confidence. |
| Old repo public assets | BLOCKER | Must audit before copy; do not bulk-copy old `public/` or static folders. |
| Image optimization | PENDING | Need size, format, naming, and compression rules. |

## Asset migration rules

- Do not copy all assets from the old repo.
- Only migrate assets that are used by final Next.js pages.
- Prefer verified business-owned assets over generic stock/product images.
- Do not use assets that imply fake showroom, branch, distributor, dealer-resmi, or unsupported local presence.
- Do not use brand/product images if rights/source are unclear.
- Compress large images before adding to the final repo.
- Use predictable lowercase kebab-case filenames.
- Keep asset paths stable once production is live.

## Recommended final public asset structure

```text
public/
  brand/
    radja-ac-logo.svg
    radja-ac-logo.webp
  icons/
    favicon.ico
    icon-192.png
    icon-512.png
    apple-touch-icon.png
  og/
    radja-ac-og.webp
  proof/
    pengiriman-proyek-*.webp
    stok-unit-*.webp
```

## Required assets before cutover

| Asset | Priority | Required before cutover | Source requirement | Notes |
|---|---|---|---|---|
| RADJA AC logo | High | Yes | Approved business logo | Needed for layout/header/trust. |
| Favicon | High | Yes | Derived from approved logo/icon | Needed for production polish. |
| App icons | Medium | Recommended | Derived from approved logo/icon | Useful for browser/mobile display. |
| Default OG image | High | Yes | Approved logo/brand image | Needed for social sharing/canonical metadata. |
| Proof/delivery images | Medium | Recommended | Verified RADJA AC project/delivery assets | Useful for `/bukti-pengiriman-proyek`. |
| Store/stock images | Medium | Optional | Verified actual RADJA AC stock/location images | Must not imply unsupported showroom/cabang claims. |
| Product images | Low | No | Only if rights/source are clear | Avoid adding until catalog detail needs real product imagery. |

## Do not migrate without review

- Duplicate old screenshots.
- Unused old hero images.
- Placeholder stock photos.
- Manufacturer logos copied from unclear sources.
- Product photos without rights/source confidence.
- Images that say or imply showroom/cabang/dealer resmi unless source confirms it.
- Large uncompressed images from the old repo.

## Asset audit checklist

For each candidate asset, record:

- source repo/path,
- intended final page/section,
- final path in `public/`,
- owner/usage confidence,
- compression status,
- risk notes,
- decision: migrate, replace, defer, or reject.

## Current decision

Asset readiness remains a production cutover blocker. The next asset PR should only add a minimal approved set: logo, favicon/app icons, default OG image, and a small number of verified proof images if available.
