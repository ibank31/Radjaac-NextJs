# Cloudflare Pages Preview Notes

Status: Cloudflare preview compatibility fix
Basis: `main` after PR #33

## Issue

Cloudflare Pages using `@cloudflare/next-on-pages` successfully ran `next build`, but failed while producing the Pages output because `app/icon.png` and `app/apple-icon.png` were treated as non-static routes requiring Edge Runtime.

## Fix

Remove the app-route icon files and serve production icons from the structured static asset paths under `public/icons/` instead.

Core static icon assets remain available from:

```text
/icons/favicon.ico
/icons/icon-192.png
/icons/icon-512.png
/icons/apple-touch-icon.png
```

## Cloudflare settings used

```text
Framework preset: Next.js
Build command: npx @cloudflare/next-on-pages@1
Build output directory: .vercel/output/static
Root directory: empty/default
```

## Next check

After this fix is merged, retry Cloudflare Pages deployment and then run the runtime verification checklist.
