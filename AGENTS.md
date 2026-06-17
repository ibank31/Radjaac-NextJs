# RADJA AC Repo Instructions

Before making any change, read these files in order:

1. docs/RADJA_WORKFLOW.md
2. docs/source/radjaac/RADJAAC_SOURCE_INDEX.md
3. docs/source/radjaac/RADJAAC_DO_NOT_VIOLATE_RULES.md
4. docs/RADJA_GROWTH_STRATEGY.md

Source repo and live production always beat old docs or chat history.

Default verification before commit:
npm run check

For staged draft changes, run:
npm run audit:staged

Staged draft files:
- content/area-drafts.js
- content/area-child-drafts.js
- content/procurement-next.js

Do not:
- add pages before checking strategy and source data,
- make fake local showroom/cabang claims,
- use risky claims like termurah, ready semua, harga pasti, stok pasti,
- change route/cache/tracking/sitemap without live verification.

## Schema Rules (strict)

Konteks: situs sengaja TIDAK terhubung ke GBP/sosmed/marketplace toko, dan ada riwayat masalah rich result. Karena itu:

- DO NOT add Product or Offer schema.
- DO NOT add Review or aggregateRating schema.
- DO NOT add `sameAs` linking to the store's GBP, Instagram, marketplace, or other store-owned assets.
- Safe to keep/tidy only: Organization, WebSite, Service, Breadcrumb, FAQ.
- Keep HVACBusiness/LocalBusiness minimal; avoid local signals that could trigger matching/conflict with the store's GBP.

## Copywriting Principles (wajib untuk semua halaman)

1. Natural & lokal — bahasa sehari-hari yang wajar, menyentuh konteks area nyata. Bukan bahasa kaku/korporat.
2. Percaya diri, tidak ragu — hindari kata bimbang ("mungkin", "sepertinya", "bisa jadi"). Nyatakan layanan dengan tegas.
3. Trusted — tonjolkan bukti nyata (showroom, gudang, dokumentasi pengiriman) tanpa membesar-besarkan.
4. Tidak merendahkan RADJA AC — selalu memposisikan toko secara positif & kredibel.
5. CTA WA mengalir tanpa paksaan — ajakan terasa sebagai langkah logis berikutnya ("kirim ukuran ruangan untuk dicek"), bukan hard-sell.
6. Bebas AI-wording — hilangkan frasa khas AI (lihat blocklist di bawah). Tulis seperti orang lokal yang paham AC.
7. Tanpa klaim palsu — tanpa cabang/showroom [kota] di luar Sokaraja, tanpa termurah/ready semua/stok pasti/harga pasti.

### Frasa AI terlarang (blocklist)

- "Dalam dunia yang serba cepat"
- "Tidak dapat dipungkiri"
- "Sebagai solusi terbaik"
- "Jangan ragu untuk"
- "Selamat datang di"
- pembuka klise dan konektor formal berlebihan ("Selain itu", "Oleh karena itu" yang bertumpuk, dsb.)

Current deployment notes:
- Next.js App Router
- local content in content/*
- SSG money pages with generateStaticParams
- Cloudflare Pages cache rules in public/_headers
- WhatsApp lead tracking via whatsapp_click and generate_lead
- Production deploy: Cloudflare Pages only (Vercel removed)
