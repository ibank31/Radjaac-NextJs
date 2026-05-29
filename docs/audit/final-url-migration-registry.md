# Final URL Migration Registry

Status: working registry
Last audit basis: Next.js `main` after PR #10

## Purpose

This document separates RADJA AC URLs into four migration decisions:

1. `FINAL-NOW` — final URLs already implemented in the Next.js repo and intended to be indexable.
2. `FINAL-MISSING` — URLs that source documents consider important, but are not implemented in the Next.js repo yet.
3. `LEGACY-REDIRECT` — old URLs that must not become pages in Next.js; they should only redirect to a final URL.
4. `HOLD` — URLs or clusters mentioned in source strategy, but not suitable for the current build phase.

The goal is to keep the new Next.js repo clean:

- sitemap contains final URLs only
- internal links point to final URLs only
- legacy URLs are not recreated as pages
- redirects are used only as a safety net for old URLs
- new pages are added only when they are final, unique, and aligned with source strategy

---

## Source migration rule

RADJA AC source files are used as business, SEO, redirect, sitemap, trust, CTA, and content strategy references.

However, because the source files were created before the Next.js migration, every source instruction must pass through this filter:

| Decision | Meaning |
|---|---|
| `KEEP` | The source instruction remains valid and can be used directly. |
| `ADAPT` | The source instruction remains valid, but implementation must follow Next.js App Router structure. |
| `REJECT` | The instruction belongs to the old/legacy structure or would make the Next.js repo messy. |

The Next.js repo should not copy old Vite/SPA structure, legacy internal links, or obsolete article URLs.

---

## FINAL-NOW

These URLs are currently implemented in the Next.js repo and are allowed as final canonical/indexable URLs.

### Core

| URL | Status | Notes |
|---|---|---|
| `/` | `FINAL-NOW` | Homepage / entity hub |
| `/jual-ac` | `FINAL-NOW` | Retail AC hub |
| `/katalog` | `FINAL-NOW` | Catalog hub |
| `/pengadaan-ac` | `FINAL-NOW` | B2B procurement hub |
| `/kontak` | `FINAL-NOW` | Contact / conversion page |
| `/tentang-kami` | `FINAL-NOW` | Business identity page |
| `/artikel` | `FINAL-NOW` | Article index placeholder; article detail migration not started |
| `/pengiriman-pemasangan` | `FINAL-NOW` | Delivery and installation information page |
| `/bukti-pengiriman-proyek` | `FINAL-NOW` | Proof/trust page |

### Area pages

| URL | Status | Notes |
|---|---|---|
| `/jual-ac-purwokerto` | `FINAL-NOW` | Core local money page |
| `/jual-ac-banyumas` | `FINAL-NOW` | Core nearby area page |
| `/jual-ac-sokaraja` | `FINAL-NOW` | Physical base / trust area page |

### Catalog pages

| URL | Status | Notes |
|---|---|---|
| `/katalog/ac-1-2-pk` | `FINAL-NOW` | Capacity page and legacy target |
| `/katalog/ac-split-rumah` | `FINAL-NOW` | Home split AC category |
| `/katalog/ac-inverter` | `FINAL-NOW` | Inverter category |
| `/katalog/ac-low-watt` | `FINAL-NOW` | Low watt category and legacy target |
| `/katalog/ac-kantor-komersial` | `FINAL-NOW` | Commercial bridge category |

### Brand pages

| URL | Status | Notes |
|---|---|---|
| `/brand/gree` | `FINAL-NOW` | Main brand page; Proshop Gree trust context |
| `/brand/daikin` | `FINAL-NOW` | Main brand page |
| `/brand/midea` | `FINAL-NOW` | Main brand page |
| `/brand/hisense` | `FINAL-NOW` | Supporting brand page |
| `/brand/lainnya` | `FINAL-NOW` | Brand collection page |

### Procurement pages

| URL | Status | Notes |
|---|---|---|
| `/pengadaan-ac/kost-apartemen-skala-besar` | `FINAL-NOW` | B2B segment |
| `/pengadaan-ac/hotel-guest-house` | `FINAL-NOW` | B2B segment |
| `/pengadaan-ac/kontraktor-developer` | `FINAL-NOW` | B2B segment |

---

## FINAL-MISSING

These URLs are considered source-important but are not implemented in the Next.js repo yet.

They must not be added blindly. Each one needs a focused PR with unique content, metadata, internal links, CTA, and build verification.

### High-priority missing URLs

| URL | Status | Recommended action |
|---|---|---|
| `/kalkulator-pk-ac` | `FINAL-MISSING` | Build as sizing/tool hub before major article work |
| `/katalog/ac-1-pk` | `FINAL-MISSING` | Build after registry; first missing capacity page |
| `/jual-ac-yogyakarta` | `FINAL-MISSING` | Rebuild/polish as final area page if source confirms live/priority |
| `/jual-ac-semarang` | `FINAL-MISSING` | Build as major area expansion after cleanup |
| `/jual-ac-solo` | `FINAL-MISSING` | Build after Semarang or in same carefully scoped area batch |
| `/jual-ac-cilacap` | `FINAL-MISSING` | Build/polish as regional quick-win area |
| `/jual-ac-kebumen` | `FINAL-MISSING` | Build/polish as regional quick-win area |
| `/jual-ac-tegal` | `FINAL-MISSING` | Build/polish as regional quick-win area |
| `/jual-ac-banjarnegara` | `FINAL-MISSING` | Build/polish after higher-priority regional pages |

### Medium-priority missing URLs

| URL | Status | Recommended action |
|---|---|---|
| `/katalog/ac-1-5-pk` | `FINAL-MISSING` | Build after `/katalog/ac-1-pk` |
| `/katalog/ac-2-pk` | `FINAL-MISSING` | Build after `/katalog/ac-1-pk` |
| `/brand/sansui` | `FINAL-MISSING` | Consider brand page if source/trust and stock context justify it |
| `/brand/sharp` | `FINAL-MISSING` | Consider brand page if source/trust and stock context justify it |
| `/brand/samsung` | `FINAL-MISSING` | Consider brand page if source/trust and stock context justify it |
| `/brand/panasonic` | `FINAL-MISSING` | Consider brand page if source/trust and stock context justify it |
| `/pengadaan-ac/gedung-kantor-ruko` | `FINAL-MISSING` | B2B expansion candidate |
| `/pengadaan-ac/cafe-resto` | `FINAL-MISSING` | B2B expansion candidate |

---

## LEGACY-REDIRECT

These URLs must not be recreated as physical pages in the Next.js repo.

They should only be handled as 301 redirects to the final target if they had public/SEO history.

| Legacy URL | Final target | Decision |
|---|---|---|
| `/artikel/harga-ac-1-2-pk-purwokerto-pemasangan` | `/katalog/ac-1-2-pk` | `LEGACY-REDIRECT` |
| `/artikel/beli-ac-baru-purwokerto-panduan-sebelum-order` | `/jual-ac-purwokerto` | `LEGACY-REDIRECT` |
| `/artikel/ac-low-watt-listrik-900-1300-watt-purwokerto` | `/katalog/ac-low-watt` | `LEGACY-REDIRECT` |
| `/artikel/harga-ac-daikin-purwokerto` | `/brand/daikin` | `LEGACY-REDIRECT` |
| `/artikel/daikin-inverter-purwokerto` | `/brand/daikin` | `LEGACY-REDIRECT` |
| `/artikel/harga-ac-gree-purwokerto` | `/brand/gree` | `LEGACY-REDIRECT` |
| `/artikel/harga-ac-midea-purwokerto` | `/brand/midea` | `LEGACY-REDIRECT` |
| `/artikel/ac-untuk-kost-purwokerto` | `/pengadaan-ac/kost-apartemen-skala-besar` | `LEGACY-REDIRECT` |
| `/pengadaan-ac-proyek` | `/pengadaan-ac` | `LEGACY-REDIRECT` |
| `/gallery` | `/bukti-pengiriman-proyek` | `LEGACY-REDIRECT` |

Rules for legacy redirects:

- do not create physical pages for legacy URLs
- do not include legacy URLs in sitemap
- do not link internally to legacy URLs
- do not request indexing for legacy URLs
- request indexing only for final targets when needed

---

## HOLD

These source-mentioned URLs or clusters should not be built in the current phase.

| URL / cluster | Status | Reason |
|---|---|---|
| `/jual-ac-bandung` | `HOLD` | B2B-first market; do not launch retail page prematurely |
| `/jual-ac-bekasi` | `HOLD` | B2B-first / competitive local dealer market |
| `/jual-ac-tangerang` | `HOLD` | B2B-first / competitive local dealer market |
| `/jual-ac-surabaya` | `HOLD` | B2B-first / far and highly competitive |
| `/jual-ac-jakarta-*` | `HOLD` | B2B-only or later; do not fake local presence |
| `/katalog/ac-cassette` | `HOLD` | Build only after B2B/commercial signal is stronger |
| `/katalog/ac-floor-standing` | `HOLD` | Build only after B2B/commercial signal is stronger |
| `/katalog/ac-vrv-vrf` | `HOLD` | Do not build as sales page before capability is proven |
| `/pengadaan-ac/instansi-pemerintah` | `HOLD` | High compliance risk; not first B2B expansion |
| service/cuci AC cluster | `HOLD/REJECT` | Not core positioning for this Next.js rebuild |

---

## Next priority recommendation

Recommended order after this registry:

1. `Legacy Redirect Safety Net`
   - Add minimal 301 redirects for legacy URLs only.
   - No new pages.
   - No sitemap additions.

2. `Kalkulator PK AC`
   - Add `/kalkulator-pk-ac` as final URL.
   - Add route registry, sitemap entry, internal links, and CTA.

3. `Catalog Capacity Batch 1`
   - Add `/katalog/ac-1-pk`.
   - Do not create all capacity pages at once.

4. `Area Reconciliation Batch 1`
   - Add or rebuild only the highest-priority area pages.
   - No mass city rollout.

5. `WhatsApp Tracking Foundation`
   - Add data attributes for `wa_click` tracking.
   - Keep one WhatsApp pathway.

6. `Schema Foundation`
   - Add safe JSON-LD only:
     - Organization
     - BreadcrumbList
     - LocalBusiness only for real Banyumas identity pages
   - Do not add Product/Offer/Review/FAQ schema prematurely.

---

## Non-negotiable rules

- Final URLs only in sitemap.
- Final URLs only in internal links.
- Legacy URLs redirect only; no physical pages.
- No mass area publishing.
- No fake branches/showrooms.
- No LocalBusiness schema for non-physical target cities.
- No Product/Offer schema without valid product and price data.
- No article that steals intent from a money page.
- No production deploy without redirect, sitemap, internal link, and build audit.
