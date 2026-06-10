Operational publishing guide:\n- docs/growth/staged-area-publishing/README.md\n\n# RADJA AC Area Publish Backlog

Status: staged planning, not live.

Dokumen ini mencatat area yang sudah disiapkan sebagai production-ready draft, tetapi belum dipublish ke website.

Source draft teknis:
- content/area-drafts.js

Aturan penting:
- Draft area belum live.
- Draft area belum masuk sitemap.
- Draft area tidak boleh di-import ke app sebelum keputusan publish.
- Publish maksimal 3–5 area per batch.
- Source repo dan live production tetap menang atas dokumen ini.

## Status Meaning

live:
Sudah publish dan masuk route/sitemap.

ready:
Data halaman sudah lengkap dan aman, tetapi belum live.

draft:
Masih perlu copy, internal link, CTA, proof, atau safety review.

hold:
Ditahan karena risiko tinggi atau lebih cocok B2B-first.

coverage-only:
Cukup disebut sebagai coverage, belum perlu halaman sendiri.

## Publish Gate

Area boleh dipublish kalau:
- intent buyer jelas,
- bukan cuma swap nama,
- localContext unik,
- coverageNote jujur,
- nearbyAreaLinks masuk akal,
- tidak klaim toko/cabang/showroom lokal palsu,
- CTA WhatsApp jelas,
- tidak bentrok route/redirect,
- batch publish maksimal 3–5 URL,
- npm run check hijau.

Area ditahan kalau:
- kota terlalu jauh dan lebih cocok B2B-first,
- tidak ada pembeda intent,
- hanya membuat doorway page,
- belum punya internal link yang masuk akal,
- risiko klaim lokal terlalu tinggi.

## Published (Live) — Batch 2026-06-10

Dipublish ke `content/areas.js` + `content/routes.js` + `sitemapRoutes` + `areaClusterMap` + hub `/jual-ac` + Footer + reciprocal `nearbyAreaLinks`:

| Area | Slug | clusterType | Inbound internal |
|---|---|---|---|
| Magelang | jual-ac-magelang | hospitality | Yogyakarta, Semarang, Solo, hub, footer |
| Pekalongan | jual-ac-pekalongan | trade | Tegal, Semarang, hub, footer |
| Salatiga | jual-ac-salatiga | education | Semarang, Solo, hub, footer |

## Ready Draft Area

| Area | Slug | Priority | Status | Type | Publish Gate |
|---|---|---:|---|---|---|
| Pemalang | jual-ac-pemalang | P2 | ready | regional Pantura | Setelah Tegal stabil atau ada sinyal GSC/lead untuk Pemalang/Pantura |
| Brebes | jual-ac-brebes | P2 | ready | regional Pantura | Setelah Tegal mendapat data yang cukup atau ada query/lead area Brebes |
| Wonosobo | jual-ac-wonosobo | P2 | ready | regional mountain area | Setelah Banjarnegara/Purwokerto stabil atau ada sinyal query Wonosobo |
| Temanggung | jual-ac-temanggung | P2 | ready | regional area | Setelah Magelang siap dipublish atau ada data area Temanggung |
| Kudus | jual-ac-kudus | P2 | ready | regional Jateng utara/timur | Setelah Semarang/Solo stabil atau ada sinyal query Kudus |
| Jepara | jual-ac-jepara | P2 | ready | regional Jateng utara | Setelah Semarang/Kudus punya sinyal cukup atau ada kebutuhan lead area Jepara |
| Demak | jual-ac-demak | P2 | ready | regional dekat Semarang | Setelah Semarang stabil atau ada sinyal query Demak |

## Publish Workflow

1. Pilih maksimal 3–5 area.
2. Tambahkan route final di content/routes.js.
3. Pindahkan item dari content/area-drafts.js ke content/areas.js.
4. Sesuaikan nearbyAreaLinks bila ada area dalam batch yang saling relevan.
5. Pastikan tidak ada redirect collision.
6. Jalankan npm run check.
7. Push.
8. Live check 200/canonical/sitemap.
9. Request indexing hanya terbatas bila perlu.
10. Tunggu 7–14 hari sebelum batch berikutnya.

## Publish-Ready Draft Level

Draft area dianggap publish-ready tahap 2 jika data di `content/area-drafts.js` sudah memiliki:

- title dan meta description,
- H1 dan intro,
- localContext dan coverageNote,
- keywordVariants dan seoFocus,
- commonNeeds dan buyingChecks,
- paymentNote,
- nearbyAreaLinks,
- relatedLinks,
- FAQ lokal,
- CTA WhatsApp,
- draftHeroImage,
- draftProofImages,
- incomingInternalLinkPlan,
- outgoingInternalLinkPlan,
- plannedRouteKey,
- canonicalPath,
- sitemapPlan,
- publishChecklist,
- publishGate,
- safetyNotes.

Catatan:
- Foto di draft adalah generic proof RADJA AC, bukan bukti toko/cabang/showroom di area tersebut.
- Saat publish, caption harus tetap jujur.
- Draft belum live sampai dipindahkan ke `content/areas.js` dan route ditambahkan ke `content/routes.js`.

## Ready Child Draft Area

Source draft teknis:
- content/area-child-drafts.js

Child draft belum live dan belum masuk sitemap.

| Parent | Child Area | Slug | Priority | Status | Publish Gate |
|---|---|---|---:|---|---|
| Banyumas | Kebasen | jual-ac-kebasen | P1 | ready-child | Setelah Banyumas selatan stabil atau ada sinyal query Kebasen |
| Banyumas | Somagede | jual-ac-somagede | P2 | ready-child | Setelah Banyumas/Kalibagor stabil atau ada sinyal query Somagede |
| Purbalingga | Bobotsari | jual-ac-bobotsari | P2 | ready-child | Setelah Purbalingga stabil atau ada sinyal query Bobotsari |
| Purbalingga | Kalimanah | jual-ac-kalimanah | P2 | ready-child | Setelah Purbalingga stabil atau ada sinyal query Kalimanah |
| Purbalingga | Kutasari | jual-ac-kutasari | P2 | ready-child | Setelah Purbalingga stabil atau ada sinyal query Kutasari |
| Tegal | Slawi | jual-ac-slawi | P2 | ready-child | Setelah Tegal stabil atau ada sinyal query Slawi |
| Tegal | Adiwerna | jual-ac-adiwerna | P2 | ready-child | Setelah Tegal stabil atau ada sinyal query Adiwerna |
| Tegal | Talang | jual-ac-talang | P2 | ready-child | Setelah Tegal stabil atau ada sinyal query Talang |
| Banjarnegara | Mandiraja | jual-ac-mandiraja | P2 | ready-child | Setelah Banjarnegara stabil atau ada sinyal query Mandiraja |
| Banjarnegara | Klampok | jual-ac-klampok | P2 | ready-child | Setelah Banjarnegara stabil atau ada sinyal query Klampok |
| Banjarnegara | Bawang Banjarnegara | jual-ac-bawang-banjarnegara | P2 | ready-child | Setelah Banjarnegara stabil atau ada sinyal query Bawang Banjarnegara |

Child publish rule:
- Parent/hub harus sudah live.
- Child harus mendapat internal link dari parent/hub atau area relevan.
- Jangan publish semua child dalam satu batch.
- Jangan request indexing massal.

Catatan sinkronisasi 2026-06-10:
- Sumbang, Kedungbanteng, dan Kalibagor sudah LIVE di `content/areas.js` (dihapus dari tabel child draft).
- Ejaan diperbaiki: Adwerna → Adiwerna (slug `jual-ac-adiwerna`).
- Gombong, Karanganyar Kebumen, dan Kutowinangun dihapus dari tabel ready-child karena SUDAH LIVE di `content/areas.js` — ditulis dengan gaya quoted-key (`"slug": "jual-ac-gombong"`) sehingga sempat tidak terdeteksi oleh grep `slug:` biasa. Route, sitemapRoutes, hub `/jual-ac`, dan areaClusterMap untuk ketiganya valid dan dipertahankan; tidak ada URL 404 dan tidak ada pembersihan yang diperlukan.
