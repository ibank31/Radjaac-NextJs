# RADJA AC Migration Docs Index

Status date: 2026-05-31
Purpose: reduce confusion between current migration status and older audit history.

## Current source of truth

Use this file first:

- `docs/audit/MIGRATION_READINESS_CURRENT.md`

## Historical docs

The following documents are retained for audit trail and source context. They may contain older status labels that are no longer current.

| Document | Current use |
|---|---|
| `docs/audit/final-cutover-readiness.md` | Historical cutover checklist; superseded for current status. |
| `docs/audit/final-url-migration-registry.md` | Historical URL planning registry; some `FINAL-MISSING` rows may now be resolved. |
| `docs/audit/indexed-legacy-url-final-map.md` | Historical GSC/indexed legacy map; useful for source reasoning. |
| `docs/audit/legacy-redirect-plan.md` | Historical redirect plan; implementation has advanced since this was written. |
| `docs/audit/legacy-redirect-implementation.md` | Redirect implementation notes; useful for redirect history. |
| `docs/audit/live-sitemap-gap-decision-matrix.md` | Useful history for live sitemap gap closure. |
| `docs/audit/asset-migration-plan.md` | Historical asset plan; verify against current asset audit before use. |
| `docs/audit/legacy-asset-inventory.md` | Historical asset inventory. |
| `docs/audit/runtime-verification-checklist.md` | Historical runtime checklist. |
| `docs/audit/runtime-verification-result.md` | Historical runtime result. |
| `docs/source/radjaac/RADJAAC_REDIRECT_LEGACY_MAP.md` | Source redirect principles; may need monthly refresh. |
| `docs/source/radjaac/RADJAAC_SITEMAP_INDEXING_PRIORITY.md` | Source sitemap/indexing principles; may need monthly refresh. |

## Rule

If a historical document conflicts with `MIGRATION_READINESS_CURRENT.md`, use `MIGRATION_READINESS_CURRENT.md` for current migration status.

Do not start new migration work from stale `BLOCKER`, `PENDING`, `Hold`, or `FINAL-MISSING` labels without re-running the relevant audit.
