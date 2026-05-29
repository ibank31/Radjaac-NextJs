# Live Sitemap Gap Decision Matrix

Status: working decision matrix
Basis: live sitemap audit after PR #15
Live sitemap: `https://www.radjaac.com/sitemap.xml`
Next.js repo: `main` after route hardening PR #15

## Purpose

This document tracks live sitemap URLs that still exist on the current live RADJA AC website but are not yet implemented in the Next.js migration repo.

The goal is to prevent production cutover problems such as:

- indexed URLs becoming 404
- live sitemap URLs disappearing without review
- article URLs being redirected blindly
- old React/Vite route assumptions entering the clean Next.js repo
- area pages being mass-published without sufficient uniqueness

## Current gap summary

| Metric | Count |
|---|---:|
| Live sitemap URLs | 43 |
| Matched in Next.js route registry | 28 |
| Missing in Next.js route registry | 15 |

## Decision labels

| Label | Meaning |
|---|---|
| `BUILD-FINAL` | Build as a final Next.js page before production cutover. |
| `BUILD-FINAL-BATCHED` | Build as a final page, but only in a small controlled batch. |
| `ARTICLE-REVIEW` | Review live content and GSC before deciding migrate, merge, or redirect. |
| `DECISION-NEEDED` | Needs business/SEO decision before implementation. |
| `HOLD` | Do not build in current phase. |
| `REDIRECT-CANDIDATE` | May redirect later, but only after review and target confirmation. |

## Non-negotiable migration rule

Do not deploy the Next.js repo as the production replacement while these 15 live sitemap URLs are unresolved.

A URL is considered resolved only when one of these is true:

1. it is rebuilt as a final Next.js route and included in sitemap,
2. it is intentionally redirected to a stronger final target,
3. it is intentionally removed only after GSC/content/business review,
4. it is documented as hold with clear production handling.

---

## Gap decision matrix

### Area URLs

These are live sitemap URLs and should not be dropped during cutover.

| URL | Current type | Decision | Priority | Recommended action | Main risk | Notes |
|---|---|---|---:|---|---|---|
| `/jual-ac-yogyakarta` | Area page | `BUILD-FINAL-BATCHED` | P1 | Rebuild as final area page | Losing indexed local intent | Strong area candidate. Must avoid fake branch/showroom claim. |
| `/jual-ac-semarang` | Area page | `BUILD-FINAL-BATCHED` | P1 | Rebuild as final area page | Losing high-priority live sitemap URL | High sitemap priority on live site. Needs unique copy and service-safe wording. |
| `/jual-ac-solo` | Area page | `BUILD-FINAL-BATCHED` | P1 | Rebuild after Semarang/Yogyakarta or in same small batch | Thin/copy-paste area page | Use service-led copy, not fake local store claim. |
| `/jual-ac-purbalingga` | Area page | `BUILD-FINAL-BATCHED` | P2 | Rebuild as nearby regional area page | Dropping regional indexed URL | Closer regional page; likely easier to make operationally credible. |
| `/jual-ac-cilacap` | Area page | `BUILD-FINAL-BATCHED` | P2 | Rebuild as regional area page | Thin content if copied | Needs delivery/coordination wording and relevant internal links. |
| `/jual-ac-kebumen` | Area page | `BUILD-FINAL-BATCHED` | P2 | Rebuild as regional area page | Thin content if copied | Needs unique buyer concerns and safe fulfillment wording. |
| `/jual-ac-tegal` | Area page | `BUILD-FINAL-BATCHED` | P3 | Rebuild after closer/high-priority area pages | Over-expansion risk | Treat as later area batch. |
| `/jual-ac-banjarnegara` | Area page | `BUILD-FINAL-BATCHED` | P3 | Rebuild after P1/P2 pages | Thin content / lower priority | Keep in migration queue because it is live, but do not mass-publish. |

### Business decision URL

| URL | Current type | Decision | Priority | Recommended action | Main risk | Notes |
|---|---|---|---:|---|---|---|
| `/ganti-ac-baru-purwokerto` | Commercial/service-adjacent page | `DECISION-NEEDED` | P2 | Review business intent, live content, and GSC before deciding build or redirect | Could pull site toward service/trade-in intent | Do not rebuild blindly. Decide whether this supports AC sales or should merge into `/jual-ac-purwokerto`, `/katalog`, or an article/support page. |

### Article URLs

These article URLs exist in the live sitemap. They should not be redirected blindly because some may still support useful educational intent.

| URL | Current type | Decision | Priority | Recommended action | Main risk | Notes |
|---|---|---|---:|---|---|---|
| `/artikel/panduan-beli-ac-baru` | Article | `ARTICLE-REVIEW` | P1 | Review content and GSC; likely migrate or normalize as buying guide | Losing feeder traffic | Should feed `/katalog`, `/kalkulator-pk-ac`, and WhatsApp CTA. |
| `/artikel/ac-1-pk-untuk-ruangan-berapa` | Article | `ARTICLE-REVIEW` | P1 | Review; likely keep/migrate as sizing article, then link to future `/katalog/ac-1-pk` | Cannibalization with future capacity page | Should remain educational, not become “jual AC 1 PK”. |
| `/artikel/ac-inverter-vs-low-watt` | Article | `ARTICLE-REVIEW` | P1 | Review; likely migrate as decision-support article | Cannibalization with catalog pages | Must link to `/katalog/ac-inverter` and `/katalog/ac-low-watt`. |
| `/artikel/cara-memilih-ac-untuk-kamar-3x4` | Article | `ARTICLE-REVIEW` | P2 | Review; likely migrate as sizing feeder article | Duplicate sizing intent | Should link to `/kalkulator-pk-ac` and relevant capacity/category pages. |
| `/artikel/panduan-instalasi-ac-baru` | Article | `ARTICLE-REVIEW` | P2 | Review; decide migrate, merge, or redirect | Pulling site toward service/install content | Keep only if it supports pre-purchase installation expectations. |
| `/artikel/ac-kurang-dingin-belum-tentu-freon-habis` | Article | `ARTICLE-REVIEW` | P3 | Review carefully; likely low priority | Site positioning may drift into service blog | Avoid expanding service/repair cluster. Keep only if it supports sales consultation. |

---

## Recommended implementation order

### Batch 1 — Area protection, high priority

Build only 2–3 pages first:

1. `/jual-ac-yogyakarta`
2. `/jual-ac-semarang`
3. `/jual-ac-solo`

Rules:

- no fake showroom/cabang claim
- no LocalBusiness schema for non-physical cities
- unique hero, concerns, CTA, and internal links
- link to catalog, kalkulator PK, selected brand pages, contact
- include in route registry and sitemap
- build must pass

### Batch 2 — Nearby/regional area protection

Build:

1. `/jual-ac-purbalingga`
2. `/jual-ac-cilacap`
3. `/jual-ac-kebumen`

Then reassess before adding:

1. `/jual-ac-tegal`
2. `/jual-ac-banjarnegara`

### Batch 3 — Article review

Review the six article URLs one by one.

For each article, decide:

- migrate as article,
- merge into a money page,
- redirect to final target,
- hold/remove from future sitemap.

No article should be migrated unless it has:

- one clear educational intent,
- a money page target,
- internal links to relevant final URLs,
- WhatsApp CTA context,
- no conflict with catalog/brand/area money pages.

### Batch 4 — Business decision URL

Decide `/ganti-ac-baru-purwokerto` only after checking whether it represents:

- a real active business offer,
- a temporary campaign,
- a service/trade-in intent,
- or an outdated page that should redirect.

Possible targets if redirected later:

- `/jual-ac-purwokerto`
- `/katalog`
- `/kontak`
- a future article, only if the intent is educational and not a money page

---

## Production cutover rule

Before switching production traffic to the Next.js repo:

- all 15 live sitemap gaps must be resolved,
- sitemap must contain final URLs only,
- internal links must point only to final URLs,
- legacy redirects must exist for intentionally removed/merged URLs,
- no live indexed URL should become accidental 404,
- build must pass,
- canonical and robots must be verified.

## Current conclusion

The Next.js repo structure is healthy, but production cutover is not ready until the remaining live sitemap gaps are handled.

The safest next engineering step is:

`Area Batch 1: /jual-ac-yogyakarta, /jual-ac-semarang, /jual-ac-solo`
