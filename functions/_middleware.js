// functions/_middleware.js
// Cloudflare Pages Edge Function — redirect non-www ke www dengan 301 permanent
//
// Diperlukan karena:
// - redirects() di next.config.mjs (has: host) TIDAK berjalan di static export Cloudflare Pages
// - public/_redirects tidak mendukung redirect berbasis host (hanya path)
// - Zone Cloudflare baru (dibuat 2026-06-12) tidak punya Page Rule non-www → www
//
// Cakupan:
// - http://radjaac.com/*  → https://www.radjaac.com/* (301)
// - https://radjaac.com/* → https://www.radjaac.com/* (301)
// - www.radjaac.com/*     → pass-through (tidak disentuh)

export async function onRequest({ request, next }) {
  const url = new URL(request.url);

  if (url.hostname === 'radjaac.com') {
    // Paksa HTTPS dan www
    url.protocol = 'https:';
    url.hostname = 'www.radjaac.com';
    return Response.redirect(url.toString(), 301);
  }

  return next();
}
