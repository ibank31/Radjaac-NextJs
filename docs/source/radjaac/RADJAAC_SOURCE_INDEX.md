# RADJAAC_SOURCE_INDEX.md

## Status

Stable source.

## Fungsi Dokumen

Dokumen ini menjadi peta baca source RADJA AC agar assistant/Codex masuk dari file yang benar, mengikuti guardrail positioning, dan tidak membuat patch tanpa konteks bisnis.

## Urutan Baca Wajib

1. `docs/RADJA_WORKFLOW.md`  
   Pintu masuk semua pekerjaan. Menentukan cara kerja, reset keyword, scope, verifikasi, dan larangan eksekusi melebar.

2. `docs/source/radjaac/RADJAAC_DO_NOT_VIOLATE_RULES.md`  
   Guardrail keras. Wajib dibaca sebelum file strategi lain. Mengunci positioning RADJA AC, klaim lokasi, klaim resmi, CTA WhatsApp, redirect, indexing, schema, dan larangan overclaim.

3. `docs/RADJA_GROWTH_STRATEGY.md`  
   Arah bisnis aktif. Dipakai untuk prioritas growth, area, B2B, lead WhatsApp, decision gates, dan kapan harus build, polish, hold, B2B-first, coverage-only, atau redirect.

4. Source sesuai jenis task:
   - Area page: `RADJAAC_AREA_PAGE_BLUEPRINT.md`
   - Title/meta: `RADJAAC_TITLE_META_LIBRARY.md`
   - Trust/proof: `RADJAAC_TRUST_ASSET_MAP.md`
   - GSC/indexing: `RADJAAC_GSC_DECISION_PLAYBOOK.md`
   - Katalog kapasitas: `RADJAAC_KATALOG_CAPACITY_MAP.md`
   - Redirect legacy: `RADJAAC_REDIRECT_LEGACY_MAP.md`
   - Market Jawa: `RADJAAC_MARKET_MAP_JAWA.md`
   - SERP competitor: `RADJAAC_SERP_AREA_COMPETITOR_MAP.md`
   - Ekspansi provinsi: `RADJAAC_JAVA_EXPANSION_BY_PROVINCE.md`
   - Content cluster: `RADJAAC_CONTENT_CLUSTER_MAP.md`

5. Source repo aktif:
   - `content/routes.js`
   - `content/areas/` (data area modular per region + `cluster-map.js`)
- `content/area-drafts.js` staged hub/kabupaten drafts, not live
- `content/area-child-drafts.js` staged child/kecamatan drafts, not live
   - `content/brands.js`
   - `content/procurement.js`
   - `content/procurement-next.js` sebagai staged replacement untuk polish child pengadaan, belum live
   - `content/static-pages.js`
   - `app/`
   - `components/`
   - `lib/`
   - sitemap dan live 200 bila relevan

## Prinsip Kerja

- Workflow menang atas kebiasaan lama.
- Guardrail positioning menang atas wording lama di file strategi.
- Source repo terbaru dan live production menang atas dokumen.
- Jangan patch sebelum jelas page type, intent, CTA, proof, dan risiko klaim.
- Jangan membuat RADJA AC terlihat kecil, defensif, atau hanya cocok untuk order kecil.
- Gunakan positioning kuat dan jujur: supplier AC original multi-brand, pengadaan, partai besar, banyak unit, proyek, hotel, guest house, hospitality, kantor, ruko, kontraktor, developer.
- Untuk copy user-facing, pakai `Showroom dan gudang RADJA AC ada di Banyumas` atau `RADJA AC melayani pengiriman dan opsi pemasangan dari Banyumas`.

## Checklist Sebelum Patch

- Sudah baca workflow.
- Sudah baca guardrail.
- Sudah tentukan jenis halaman.
- Sudah cek apakah task masuk growth, area, title/meta, trust, GSC, katalog, redirect, atau market.
- Sudah cek source repo aktif.
- Sudah pastikan tidak ada klaim toko/cabang/showroom lokal palsu.
- Sudah pastikan CTA WhatsApp membawa source/intent yang jelas.
- Sudah rencanakan verifikasi: diff, scan, `npm run audit:staged` untuk staged draft, `npm run check` untuk perubahan live, dan live check bila perlu.

## Staged Draft Warning

`content/area-drafts.js` dan `content/area-child-drafts.js` adalah staging data.

Jangan import file tersebut ke app, sitemap, route generator, atau komponen live tanpa keputusan publish eksplisit. Jika di-import, halaman draft bisa tidak sengaja menjadi live dan masuk indexing flow.

Cara publish yang benar:
1. pilih maksimal 3–5 draft,
2. tambah route final di `content/routes.js`,
3. pindahkan item ke file region yang sesuai di `content/areas/`,
4. cek parent/nearby/internal link,
5. jalankan `npm run check`,
6. push,
7. live check.
