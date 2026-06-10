/**
 * RADJA AC — Typography Design Tokens
 *
 * Panduan penggunaan:
 * - font-black (900)    → H1 HERO saja (max 1 per halaman)
 * - font-extrabold (800)→ H2 section headings
 * - font-bold (700)     → H3 card titles, CTA buttons
 * - font-semibold (600) → eyebrow labels, nav items, badges
 * - font-medium (500)   → body emphasis, secondary info
 *
 * Tracking standar:
 * - Eyebrow uppercase  → tracking-[0.12em]  (bukan 0.22–0.24em)
 * - Brand name         → tracking-[-0.02em] (negative, ok)
 * - Body               → tracking-normal
 */

export const typography = {
  /* ─────────────────────────────────────────────
   * EYEBROW — label kecil di atas heading
   * Rule: font-semibold, bukan extrabold/black
   * ───────────────────────────────────────────── */
  eyebrow:
    "text-[11px] font-semibold uppercase tracking-[0.12em]",

  /* ─────────────────────────────────────────────
   * HERO TITLE — H1, max 1 per halaman
   * font-extrabold cukup; font-black hanya untuk
   * halaman campaign yang sangat agresif
   * ───────────────────────────────────────────── */
  heroTitle:
    "text-2xl font-extrabold leading-tight tracking-[-0.02em] sm:text-[2rem] md:text-[2.4rem] xl:text-[2.75rem]",

  /* ─────────────────────────────────────────────
   * SECTION TITLE — H2
   * Diturunkan dari lg:text-3xl menjadi lg:text-[1.75rem]
   * untuk memberi gap yang jelas vs H1
   * ───────────────────────────────────────────── */
  sectionTitle:
    "text-xl font-extrabold leading-tight tracking-[-0.015em] sm:text-2xl lg:text-[1.75rem]",

  /* ─────────────────────────────────────────────
   * SECTION TITLE SMALL — H2 untuk halaman panjang
   * Lebih compact untuk konten yang banyak section
   * ───────────────────────────────────────────── */
  sectionTitleSmall:
    "text-lg font-extrabold leading-tight tracking-[-0.015em] sm:text-xl",

  /* ─────────────────────────────────────────────
   * CARD TITLE — H3
   * font-bold (700) cukup, bukan extrabold
   * ───────────────────────────────────────────── */
  cardTitle:
    "text-base font-bold leading-snug sm:text-lg",

  /* ─────────────────────────────────────────────
   * BODY — paragraf konten
   * leading-7 (1.75) sangat baik, pertahankan
   * ───────────────────────────────────────────── */
  body:
    "text-sm leading-7 sm:text-base",

  smallBody:
    "text-sm leading-6",

  /* ─────────────────────────────────────────────
   * BUTTON — CTA labels
   * font-semibold untuk secondary, font-bold untuk primary
   * ───────────────────────────────────────────── */
  button:
    "font-semibold",

  buttonPrimary:
    "font-bold",
};
