# RADJA AC Source Reference

This folder stores source reference documents for the RADJA AC Next.js migration.

These files are used as strategy references for:
- URL migration decisions
- sitemap and indexing decisions
- internal linking
- title and metadata direction
- trust and CTA wording
- schema rules
- redirect decisions
- content and area-page planning

## Important rules

Files in `docs/source/radjaac/` are reference material only.

They must not be copied blindly into the Next.js app.

Before any source instruction becomes production code or public content, it must pass through:
1. current live sitemap review,
2. final URL migration registry,
3. business/SEO decision review,
4. route registry update,
5. sitemap/internal-link/build verification.

Runtime website content belongs in `content/`.
Routes and pages belong in `app/`.
Migration decisions belong in `docs/audit/`.
Source references belong here.
