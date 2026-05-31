<!--
CURRENT STATUS NOTE (2026-05-31):
This document is retained as historical audit context.
For current migration readiness, use:
docs/audit/MIGRATION_READINESS_CURRENT.md
Do not treat old BLOCKER/PENDING/Hold/FINAL-MISSING labels here as current status without re-audit.
-->

# Indexed Legacy URL Final Map

Status: audit draft  
Source date: GSC Coverage Valid export, 2026-05-29  
Scope: documentation-only migration map for indexed legacy URLs  
Runtime impact: none  
Redirect implementation: not included in this PR  

## Purpose

This document maps indexed legacy URLs from the old RADJA AC site into the intended Next.js final URL structure.

This is a safety document before any redirect, canonical, sitemap, internal link, or GSC action is implemented.

## Source basis

Project rule:

- Source project files are the highest decision source.
- Repo/codebase is only current implementation.
- Live/production is only public state.
- Do not delete, redirect, change canonical, change sitemap, or replace internal links before URL status is confirmed in source.

Relevant source files:

- `RADJAAC_REDIRECT_LEGACY_MAP.md`
- `RADJAAC_SITEMAP_INDEXING_PRIORITY.md`
- `RADJAAC_INTERNAL_LINK_MAP.md`
- `RADJAAC_CONTENT_CLUSTER_MAP.md`
- `RADJAAC_AREA_PAGE_BLUEPRINT.md`
- `RADJAAC_TRUST_ASSET_MAP.md`
- `RADJAAC_GSC_DECISION_PLAYBOOK.md`
- `RADJAAC_DO_NOT_VIOLATE_RULES.md`

## GSC indexed baseline

GSC Coverage Valid export shows 53 indexed URLs.

Initial comparison against the current Next.js route map:

- Total indexed legacy/live URLs: 53
- Already represented by current Next.js final routes: 33
- Need migration decision: 20

## Current final URL families

The Next.js URL architecture should prefer these final URL families:

| Family | Final URL pattern |
|---|---|
| Homepage | `/` |
| Main money page | `/jual-ac` |
| Area money pages | `/jual-ac-{area}` |
| Catalog hub | `/katalog` |
| Catalog intent pages | `/katalog/{kategori}` |
| Brand pages | `/brand/{brand}` |
| B2B/procurement hub | `/pengadaan-ac` |
| B2B segment pages | `/pengadaan-ac/{segmen}` |
| Delivery/install support | `/pengiriman-pemasangan` |
| Trust/proof | `/bukti-pengiriman-proyek` |
| Company/contact | `/tentang-kami`, `/kontak` |
| Educational article | `/artikel/{slug-edukasi}` |

## URLs already covered by current Next.js routes

These indexed URLs already match current Next.js route intent and should remain final/canonical unless later source files say otherwise.

| Indexed URL | Final URL | Action | Sitemap | Canonical | Internal link | GSC action | Risk |
|---|---|---|---|---|---|---|---|
| `/` | `/` | Keep | Include | Self | Use final | Inspect/submit if needed | Low |
| `/brand/sansui` | `/brand/sansui` | Keep | Include | Self | Use final | Inspect/submit if needed | Low |
| `/brand/sharp` | `/brand/sharp` | Keep | Include | Self | Use final | Inspect/submit if needed | Low |
| `/jual-ac-yogyakarta` | `/jual-ac-yogyakarta` | Keep | Include | Self | Use final | Inspect/submit if needed | Low |
| `/jual-ac-cilacap` | `/jual-ac-cilacap` | Keep | Include | Self | Use final | Inspect/submit if needed | Low |
| `/jual-ac-tegal` | `/jual-ac-tegal` | Keep | Include | Self | Use final | Inspect/submit if needed | Low |
| `/jual-ac-banyumas` | `/jual-ac-banyumas` | Keep | Include | Self | Use final | Inspect/submit if needed | Low |
| `/jual-ac-purbalingga` | `/jual-ac-purbalingga` | Keep | Include | Self | Use final | Inspect/submit if needed | Low |
| `/jual-ac-purwokerto` | `/jual-ac-purwokerto` | Keep | Include | Self | Use final | Inspect/submit if needed | Low |
| `/kontak` | `/kontak` | Keep | Include | Self | Use final | Inspect/submit if needed | Low |
| `/katalog` | `/katalog` | Keep | Include | Self | Use final | Inspect/submit if needed | Low |
| `/brand/midea` | `/brand/midea` | Keep | Include | Self | Use final | Inspect/submit if needed | Low |
| `/brand/daikin` | `/brand/daikin` | Keep | Include | Self | Use final | Inspect/submit if needed | Low |
| `/brand/samsung` | `/brand/samsung` | Keep | Include | Self | Use final | Inspect/submit if needed | Low |
| `/katalog/ac-split-rumah` | `/katalog/ac-split-rumah` | Keep | Include | Self | Use final | Inspect/submit if needed | Low |
| `/jual-ac-sokaraja` | `/jual-ac-sokaraja` | Keep | Include | Self | Use final | Inspect/submit if needed | Low |
| `/jual-ac-banjarnegara` | `/jual-ac-banjarnegara` | Keep | Include | Self | Use final | Inspect/submit if needed | Low |
| `/artikel/ac-kurang-dingin-belum-tentu-freon-habis` | `/artikel/ac-kurang-dingin-belum-tentu-freon-habis` | Keep | Include if article is retained | Self | Use final | Inspect/submit if needed | Medium |
| `/brand/lainnya` | `/brand/lainnya` | Keep | Include | Self | Use final | Inspect/submit if needed | Low |
| `/jual-ac-kebumen` | `/jual-ac-kebumen` | Keep | Include | Self | Use final | Inspect/submit if needed | Low |
| `/katalog/ac-kantor-komersial` | `/katalog/ac-kantor-komersial` | Keep | Include | Self | Use final | Inspect/submit if needed | Low |
| `/katalog/ac-low-watt` | `/katalog/ac-low-watt` | Keep | Include | Self | Use final | Inspect/submit if needed | Low |
| `/katalog/ac-inverter` | `/katalog/ac-inverter` | Keep | Include | Self | Use final | Inspect/submit if needed | Low |
| `/brand/hisense` | `/brand/hisense` | Keep | Include | Self | Use final | Inspect/submit if needed | Low |
| `/brand/gree` | `/brand/gree` | Keep | Include | Self | Use final | Inspect/submit if needed | Low |
| `/tentang-kami` | `/tentang-kami` | Keep | Include | Self | Use final | Inspect/submit if needed | Low |
| `/kalkulator-pk-ac` | `/kalkulator-pk-ac` | Keep | Include | Self | Use final | Inspect/submit if needed | Low |
| `/artikel/cara-memilih-ac-untuk-kamar-3x4` | `/artikel/cara-memilih-ac-untuk-kamar-3x4` | Keep | Include if article is retained | Self | Use final | Inspect/submit if needed | Medium |
| `/artikel` | `/artikel` | Keep | Include | Self | Use final | Inspect/submit if needed | Low |
| `/artikel/ac-1-pk-untuk-ruangan-berapa` | `/artikel/ac-1-pk-untuk-ruangan-berapa` | Keep | Include if article is retained | Self | Use final | Inspect/submit if needed | Medium |
| `/artikel/ac-inverter-vs-low-watt` | `/artikel/ac-inverter-vs-low-watt` | Keep | Include if article is retained | Self | Use final | Inspect/submit if needed | Medium |
| `/brand/panasonic` | `/brand/panasonic` | Keep | Include | Self | Use final | Inspect/submit if needed | Low |
| `/artikel/panduan-instalasi-ac-baru` | `/artikel/panduan-instalasi-ac-baru` | Keep | Include if article is retained | Self | Use final | Inspect/submit if needed | Medium |

## Indexed legacy URLs requiring final migration decision

These URLs are already indexed but are not currently final Next.js routes or require source-based handling.

| Indexed legacy URL | Source status | Repo status | Live status | Final URL decision | Redirect action | Sitemap action | Canonical action | Internal link action | GSC action | Risk |
|---|---|---|---|---|---|---|---|---|---|---|
| `/artikel/samsung-inverter-purwokerto` | Source says redirect to brand hub | Not final route | Indexed legacy URL | `/brand/samsung` | 301 | Legacy out, target in sitemap | Target self-canonical | Remove legacy links | Inspect target after 301 | Medium |
| `/artikel/sharp-bey-purwokerto` | Source says keep live if model-specific | Not confirmed as Next.js route | Indexed legacy URL | Hold: either rebuild article or redirect to `/brand/sharp` after content audit | No redirect until audited | Hold | Hold | Hold | Inspect after decision | Medium |
| `/pengadaan-ac-proyek` | Source says redirect to B2B hub | Not final route | Indexed legacy URL | `/pengadaan-ac` | 301 | Legacy out, target in sitemap | Target self-canonical | Use `/pengadaan-ac` | Inspect target after 301 | High |
| `/artikel/ac-low-watt-listrik-900-1300-watt-purwokerto` | Source says redirect to low watt catalog | Not final route | Indexed legacy URL | `/katalog/ac-low-watt` | 301 | Legacy out, target in sitemap | Target self-canonical | Use `/katalog/ac-low-watt` | Inspect target after 301 | High |
| `/artikel/toko-ac-purwokerto-yang-bisa-konsultasi-pk` | Source says redirect to Purwokerto area page | Not final route | Indexed legacy URL | `/jual-ac-purwokerto` | 301 | Legacy out, target in sitemap | Target self-canonical | Use `/jual-ac-purwokerto` | Inspect target after 301 | High |
| `/toko-ac-terdekat-purwokerto` | Source says audit cannibalization with `/jual-ac-purwokerto` | Not final route | Indexed legacy URL | Hold: likely `/jual-ac-purwokerto`, but decision requires cannibalization review | No redirect until reviewed | Hold | Hold | Hold | Compare GSC queries before redirect | High |
| `/gallery` | Source conflict: content/internal link mentions gallery; trust/sitemap source points proof final to `/bukti-pengiriman-proyek` | Current Next.js has `/bukti-pengiriman-proyek` | Indexed legacy URL | Hold: likely `/bukti-pengiriman-proyek`, but source conflict must be resolved | No redirect until conflict resolved | Hold | Hold | Update links only after final decision | Inspect final proof URL | Medium |
| `/jual-ac-cilongok` | Area URL not confirmed in current route map | Not final route | Indexed legacy URL | Hold: create area page or redirect to nearest source-approved parent | No redirect until area source decision | Hold | Hold | Hold | Inspect after decision | High |
| `/jual-ac-ajibarang` | Area URL not confirmed in current route map | Not final route | Indexed legacy URL | Hold: create area page or redirect to nearest source-approved parent | No redirect until area source decision | Hold | Hold | Hold | Inspect after decision | High |
| `/jual-ac-wangon` | Area URL not confirmed in current route map | Not final route | Indexed legacy URL | Hold: create area page or redirect to nearest source-approved parent | No redirect until area source decision | Hold | Hold | Hold | Inspect after decision | High |
| `/artikel/harga-ac-1-2-pk-purwokerto-pemasangan` | Source says redirect to 1/2 PK catalog | Not final route | Indexed legacy URL | `/katalog/ac-1-2-pk` | 301 | Legacy out, target in sitemap | Target self-canonical | Use `/katalog/ac-1-2-pk` | Inspect target after 301 | High |
| `/instalasi-profesional` | Support/install intent; target likely delivery/install page but must confirm source | Not final route | Indexed legacy URL | Hold: likely `/pengiriman-pemasangan` | No redirect until confirmed | Hold | Hold | Hold | Inspect after decision | Medium |
| `/jual-ac-jatilawang` | Area URL not confirmed in current route map | Not final route | Indexed legacy URL | Hold: create area page or redirect to nearest source-approved parent | No redirect until area source decision | Hold | Hold | Hold | Inspect after decision | High |
| `/artikel/harga-ac-daikin-purwokerto` | Source says redirect to Daikin brand hub | Not final route | Indexed legacy URL | `/brand/daikin` | 301 | Legacy out, target in sitemap | Target self-canonical | Use `/brand/daikin` | Inspect target after 301 | High |
| `/artikel/ac-untuk-kost-purwokerto` | Source says redirect to B2B kost/apartemen page | Not final route | Indexed legacy URL | `/pengadaan-ac/kost-apartemen-skala-besar` | 301 | Legacy out, target in sitemap | Target self-canonical | Use final B2B segment | Inspect target after 301 | High |
| `/artikel/harga-ac-midea-purwokerto` | Source says redirect to Midea brand hub | Not final route | Indexed legacy URL | `/brand/midea` | 301 | Legacy out, target in sitemap | Target self-canonical | Use `/brand/midea` | Inspect target after 301 | High |
| `/artikel/jual-ac-banyumas-konsultasi-pk-stok-pasang` | Source says redirect to Banyumas area page | Not final route | Indexed legacy URL | `/jual-ac-banyumas` | 301 | Legacy out, target in sitemap | Target self-canonical | Use `/jual-ac-banyumas` | Inspect target after 301 | High |
| `/artikel/harga-ac-gree-purwokerto` | Source says redirect to Gree brand hub | Not final route | Indexed legacy URL | `/brand/gree` | 301 | Legacy out, target in sitemap | Target self-canonical | Use `/brand/gree` | Inspect target after 301 | High |
| `/artikel/daikin-inverter-purwokerto` | Source says redirect to Daikin brand hub | Not final route | Indexed legacy URL | `/brand/daikin` | 301 | Legacy out, target in sitemap | Target self-canonical | Use `/brand/daikin` | Inspect target after 301 | High |
| `/service-ac-purwokerto` | Sensitive because current positioning is AC sales/procurement, not service | Not final route | Indexed legacy URL | Hold: do not redirect blindly | No redirect until business decision | Hold | Hold | Remove/avoid service positioning unless approved | Inspect after decision | High |

## Immediate redirect candidates

These indexed legacy URLs have clear source-backed targets and can be implemented in a later redirect-only PR after this document is reviewed.

| Legacy URL | Target |
|---|---|
| `/artikel/samsung-inverter-purwokerto` | `/brand/samsung` |
| `/pengadaan-ac-proyek` | `/pengadaan-ac` |
| `/artikel/ac-low-watt-listrik-900-1300-watt-purwokerto` | `/katalog/ac-low-watt` |
| `/artikel/toko-ac-purwokerto-yang-bisa-konsultasi-pk` | `/jual-ac-purwokerto` |
| `/artikel/harga-ac-1-2-pk-purwokerto-pemasangan` | `/katalog/ac-1-2-pk` |
| `/artikel/harga-ac-daikin-purwokerto` | `/brand/daikin` |
| `/artikel/ac-untuk-kost-purwokerto` | `/pengadaan-ac/kost-apartemen-skala-besar` |
| `/artikel/harga-ac-midea-purwokerto` | `/brand/midea` |
| `/artikel/jual-ac-banyumas-konsultasi-pk-stok-pasang` | `/jual-ac-banyumas` |
| `/artikel/harga-ac-gree-purwokerto` | `/brand/gree` |
| `/artikel/daikin-inverter-purwokerto` | `/brand/daikin` |

## Hold / source-resolution candidates

These URLs should not be redirected until a specific source decision is confirmed.

| URL | Why held | Likely next audit |
|---|---|---|
| `/artikel/sharp-bey-purwokerto` | Source says keep live if model-specific | Decide rebuild article vs redirect to `/brand/sharp` |
| `/toko-ac-terdekat-purwokerto` | Could cannibalize `/jual-ac-purwokerto` but may have local value | Compare query/page intent |
| `/gallery` | Source conflict: gallery mentioned as proof, but current final proof route is `/bukti-pengiriman-proyek` | Resolve trust URL final |
| `/jual-ac-cilongok` | Area page not in current Next.js route map | Decide create area page vs approved parent redirect |
| `/jual-ac-ajibarang` | Area page not in current Next.js route map | Decide create area page vs approved parent redirect |
| `/jual-ac-wangon` | Area page not in current Next.js route map | Decide create area page vs approved parent redirect |
| `/instalasi-profesional` | Likely support intent, but target must be confirmed | Confirm redirect to `/pengiriman-pemasangan` |
| `/jual-ac-jatilawang` | Area page not in current Next.js route map | Decide create area page vs approved parent redirect |
| `/service-ac-purwokerto` | Business positioning risk: service vs sales/procurement | Decide whether to 410, redirect, or rebuild with correct positioning |

## Implementation rule for next PR

The next implementation PR must not mix all categories.

Recommended next PR sequence:

1. Redirect-only PR for the 11 clear source-backed redirect candidates.
2. Separate proof URL decision PR for `/gallery` vs `/bukti-pengiriman-proyek`.
3. Separate local area decision PR for Cilongok, Ajibarang, Wangon, and Jatilawang.
4. Separate business-positioning decision for `/service-ac-purwokerto`.
5. Separate sitemap/canonical/internal-link verification after redirects are live.

## Required live checks after redirect implementation

For every redirected legacy URL:

- HTTP status must be 301 or approved redirect status.
- Final URL must match this map.
- Target must return HTTP 200.
- Target canonical must point to itself.
- Legacy URL must not be in sitemap.
- Target URL must be in sitemap if source says include.
- Internal links must point to final target, not legacy URL.
- GSC inspection should be done on target URL, not legacy URL.
