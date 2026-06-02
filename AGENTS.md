# RADJA AC Repo Instructions

Before making any change, read these files in order:

1. docs/RADJA_WORKFLOW.md
2. docs/source/radjaac/RADJAAC_SOURCE_INDEX.md
3. docs/source/radjaac/RADJAAC_DO_NOT_VIOLATE_RULES.md
4. docs/RADJA_GROWTH_STRATEGY.md

Source repo and live production always beat old docs or chat history.

Default verification before commit:
npm run check

Do not:
- add pages before checking strategy and source data,
- make fake local showroom/cabang claims,
- use risky claims like termurah, ready semua, harga pasti, stok pasti,
- change route/cache/tracking/sitemap without live verification.

Current deployment notes:
- Next.js App Router
- local content in content/*
- SSG money pages with generateStaticParams
- Cloudflare Pages cache rules in public/_headers
- WhatsApp lead tracking via whatsapp_click and generate_lead
