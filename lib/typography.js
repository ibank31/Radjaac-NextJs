/**
 * Radja AC — Typography Design Tokens (SINGLE SOURCE OF TRUTH)
 *
 * Semua heading & eyebrow WAJIB memakai token di bawah. Dilarang menulis
 * ukuran/weight/tracking tipografi secara inline pada heading/eyebrow.
 *
 * Skala final (mobile → tablet → desktop):
 *   Eyebrow : 11px            · font-semibold (600) · uppercase · tracking 0.1em
 *   H3      : 18 → 20px       · font-semibold (600)            [typography.cardTitle]
 *   H2      : 20 → 24 → 28px  · font-bold (700)                [typography.sectionTitle]
 *   H1 hero : 28 → 34 → 40px  · font-extrabold (800)           [typography.heroTitle]
 *   H1 page : 26 → 32 → 36px  · font-bold (700)                [typography.pageTitle]
 *   Body    : 16px            · normal (400) · line-height 1.75 [typography.body]
 *
 * Aturan weight:
 *   800 (extrabold) → H1 hero (heroTitle)
 *   700 (bold)      → H1 page title (pageTitle), H2 (sectionTitle), CTA primer
 *   600 (semibold)  → H3 (cardTitle), eyebrow, nav, CTA sekunder, badge
 *   500 (medium)    → body emphasis, info sekunder
 *   400 (normal)    → body
 * font-black (900) DILARANG untuk heading dan CTA.
 */

export const typography = {
  /* EYEBROW — label kecil di atas heading (11px, semibold) */
  eyebrow:
    "text-[11px] font-semibold uppercase tracking-[0.1em]",

  /* HERO TITLE — H1 hero marketing (28 → 34 → 40px, extrabold)
   * Dipakai: homepage, brand pages, proof landing, 404 */
  heroTitle:
    "text-[1.75rem] font-extrabold leading-[1.15] tracking-[-0.02em] sm:text-[2.125rem] lg:text-[2.5rem]",

  /* PAGE TITLE — H1 judul konten/layanan (26 → 32 → 36px, bold)
   * Dipakai: artikel, layanan, katalog, kontak, area, dll. */
  pageTitle:
    "text-[1.625rem] font-bold leading-[1.15] tracking-[-0.02em] sm:text-[2rem] lg:text-4xl",

  /* SECTION TITLE — semua H2 (20 → 24 → 28px, bold) */
  sectionTitle:
    "text-xl font-bold leading-snug tracking-[-0.015em] sm:text-2xl lg:text-[1.75rem]",

  /* SECTION TITLE SMALL — varian H2 padat (dipertahankan utk kompatibilitas) */
  sectionTitleSmall:
    "text-lg font-bold leading-snug sm:text-xl",

  /* CARD TITLE — semua H3 (18 → 20px, semibold) */
  cardTitle:
    "text-lg font-semibold leading-snug sm:text-xl",

  /* BODY — paragraf konten (16px, line-height 1.75) */
  body:
    "text-base leading-7",

  smallBody:
    "text-sm leading-6",

  /* BUTTON — label CTA */
  button:
    "font-semibold",

  buttonPrimary:
    "font-bold",

  /* ── CTA & CHIP TOKENS ─────────────────────────────────────
   * Warna/kontras CTA dan chip WAJIB lewat token ini agar tidak
   * drift antar halaman. Semua memenuhi kontras minimal AA.
   * ─────────────────────────────────────────────────────── */

  /* CTA primer (aksi utama / WhatsApp) — hijau solid, teks gelap, bold */
  ctaWhatsapp:
    "inline-flex items-center justify-center rounded-full bg-[#25D366] font-bold text-slate-950 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#20BA5A]",

  /* CTA merah brand — teks putih, bold */
  ctaPrimary:
    "inline-flex items-center justify-center rounded-full bg-brand-red font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-red-dark",

  /* CHIP danger — merah solid, teks putih (kontras AA) */
  chipDanger:
    "inline-flex items-center gap-2 rounded-full bg-brand-red px-3 py-1 text-xs font-bold text-white",

  /* CHIP danger soft — merah muda dengan ring & teks merah tua jelas */
  chipDangerSoft:
    "inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-red-800 ring-1 ring-red-200",
};
