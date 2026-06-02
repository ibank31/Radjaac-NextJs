# RADJA AC Area Publish Backlog

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

## Ready Draft Area

| Area | Slug | Priority | Status | Type | Publish Gate |
|---|---|---:|---|---|---|
| Magelang | jual-ac-magelang | P2 | ready | regional area | Setelah core Banyumas ring stabil atau ada sinyal query/impression Magelang |
| Salatiga | jual-ac-salatiga | P2 | ready | regional area | Setelah Semarang/Solo punya sinyal GSC yang cukup atau ada lead regional terkait Salatiga |
| Pekalongan | jual-ac-pekalongan | P2 | ready | regional Pantura | Setelah Tegal atau area Pantura mulai menunjukkan impression/query relevan |
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
| Banyumas | Sumbang | jual-ac-sumbang | P1 | ready-child | Setelah core Banyumas/Purwokerto stabil atau ada sinyal query Sumbang |
| Banyumas | Kedungbanteng | jual-ac-kedungbanteng | P1 | ready-child | Setelah core Banyumas/Purwokerto stabil atau ada sinyal query Kedungbanteng |
| Banyumas | Kalibagor | jual-ac-kalibagor | P1 | ready-child | Setelah Banyumas/Sokaraja stabil atau ada sinyal query Kalibagor |
| Banyumas | Kebasen | jual-ac-kebasen | P1 | ready-child | Setelah Banyumas selatan stabil atau ada sinyal query Kebasen |
| Banyumas | Somagede | jual-ac-somagede | P2 | ready-child | Setelah Banyumas/Kalibagor stabil atau ada sinyal query Somagede |
| Purbalingga | Bobotsari | jual-ac-bobotsari | P2 | ready-child | Setelah Purbalingga stabil atau ada sinyal query Bobotsari |
| Purbalingga | Kalimanah | jual-ac-kalimanah | P2 | ready-child | Setelah Purbalingga stabil atau ada sinyal query Kalimanah |
| Purbalingga | Kutasari | jual-ac-kutasari | P2 | ready-child | Setelah Purbalingga stabil atau ada sinyal query Kutasari |
| Tegal | Slawi | jual-ac-slawi | P2 | ready-child | Setelah Tegal stabil atau ada sinyal query Slawi |
| Tegal | Adwerna | jual-ac-adwerna | P2 | ready-child | Setelah Tegal stabil atau ada sinyal query Adwerna |
| Tegal | Talang | jual-ac-talang | P2 | ready-child | Setelah Tegal stabil atau ada sinyal query Talang |
| Kebumen | Gombong | jual-ac-gombong | P2 | ready-child | Setelah Kebumen stabil atau ada sinyal query Gombong |
| Kebumen | Karanganyar Kebumen | jual-ac-karanganyar-kebumen | P2 | ready-child | Setelah Kebumen stabil atau ada sinyal query Karanganyar Kebumen |
| Kebumen | Kutowinangun | jual-ac-kutowinangun | P2 | ready-child | Setelah Kebumen stabil atau ada sinyal query Kutowinangun |
| Banjarnegara | Mandiraja | jual-ac-mandiraja | P2 | ready-child | Setelah Banjarnegara stabil atau ada sinyal query Mandiraja |
| Banjarnegara | Klampok | jual-ac-klampok | P2 | ready-child | Setelah Banjarnegara stabil atau ada sinyal query Klampok |
| Banjarnegara | Bawang Banjarnegara | jual-ac-bawang-banjarnegara | P2 | ready-child | Setelah Banjarnegara stabil atau ada sinyal query Bawang Banjarnegara |

Child publish rule:
- Parent/hub harus sudah live.
- Child harus mendapat internal link dari parent/hub atau area relevan.
- Jangan publish semua child dalam satu batch.
- Jangan request indexing massal.
