# Databricks F3 audit

Auditor: Codex (fresh session, separate from the T2-1 Wave 18 migration session)
Rulebook scope: B2 / B2a and E1 / E2 / E2a–c only
Date: 2026-08-25

Sentence class used for the complete portable-body pass: brand-published fact / observed technical fact / editorial interpretation or causal judgment. Only the third class was changed, by attaching the complete adjacent authority boundary (`derived editorial implementation inference` / `not Databricks-authored or a separately published UI specification`). Token values, component tables, state applicability, and section structure were not changed.

## Fixes

1. `DESIGN.md` Scope — expanded the adjacent qualifier to cover surface selection and exclusion.
2. `DESIGN.md` Audience — expanded the adjacent qualifier to cover the editorial decision not to retain fictional biographies.
3. `DESIGN.md` Semantic color — qualified the decision to keep the official Lava value and live CTA value separate.
4. `DESIGN.md` Spacing — qualified the decision to keep component padding attached to component declarations rather than merge it into the source scale.
5. `DESIGN.md` Family — qualified the decision not to claim a separate proprietary font asset.
6. `DESIGN.md` freshness — removed the inspection date from Scope and the live-sample heading; the exact freshness record remains in provenance.
7. `DESIGN.md` responsive ledger — removed exact unpromoted breakpoint values while retaining the standalone proof boundary; the exact claims remain in provenance.
8. `provenance.md` derived range — synchronized the inventory with the portable editorial scopes, including surface scope and the four newly qualified decisions.
9. `migration-log.md` §5 — recorded the approximate 1200px area in both Layout & Platforms and provenance, and retained the 64px-plus rhythm at its actual portable destination.
10. `migration-log.md` §6 — separated the portable flat/card/elevated/dark meanings and dual shadow values from the provenance-only accessibility-ring concept.
11. `migration-log.md` §11 — split the Scope and Derived-principles destinations and removed the unsupported claim that literal open-source status remains portable.
12. `migration-log.md` current audit record — replaced the stale pre-audit SHA and overbroad final-pass claims with the fresh F3 result.

Verification: all 25 migration disposition rows were checked against the three migrated files. Source `web/references/databricks/DESIGN.md` was not edited (SHA-256 `2885c5fefa32e1eac22ddbc8913bd284b4a09db04bd1e515291550cc27a128ef`). Migrated DESIGN SHA-256 is `838fbd89fb29244bbbd374e87d4d37f033d881b1c6acb592fb1f072600141ab0`. `migrate-reference.mjs --brand databricks --gate-only` PASS/problems `[]`; Core inspection reports `portable_core: true`. No gate false positive was observed, so no E3 incident was recorded.

AUDIT_DONE databricks fixes=12
