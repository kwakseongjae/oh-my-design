# Datadog F3 audit

Auditor: Codex (fresh session, separate from the T2-1 Wave 18 migration session)
Rulebook scope: B2 / B2a and E1 / E2 / E2a–c only
Date: 2026-08-25

Sentence class used for the complete portable-body pass: brand-published fact / observed technical fact / editorial interpretation or causal judgment. Only the third class was changed, by attaching the complete adjacent authority boundary (`derived editorial implementation inference` / `not Datadog-authored or a separately published UI specification`). Token values, component tables, state applicability, and section structure were not changed.

## Fixes

1. `DESIGN.md` Scope — expanded the adjacent qualifier to cover surface selection and exclusion.
2. `DESIGN.md` Audience — expanded the adjacent qualifier to cover the decision not to retain fictional biographies.
3. `DESIGN.md` Semantic color — added a complete adjacent qualifier for role assignments, source boundaries, and printed/live reconciliation.
4. `DESIGN.md` Spacing — qualified the decision to keep fractional and asymmetric padding attached to components.
5. `DESIGN.md` CTA family — expanded the local qualifier to cover its interactive classification.
6. `DESIGN.md` Top navigation — expanded the local qualifier to cover its interactive classification.
7. `DESIGN.md` Header search — expanded the local qualifier to cover its interactive classification.
8. `DESIGN.md` freshness — removed the inspection date from portable Scope; the exact freshness record remains in provenance.
9. `DESIGN.md` responsive ledger — removed exact unpromoted breakpoint values while retaining the standalone proof boundary; the exact claims remain in provenance.
10. `provenance.md` derived range — synchronized the inventory with surface scope, biography retention, semantic reconciliation, padding placement, and component-kind judgments.
11. `migration-log.md` YAML note — separated the portable/provenance color-font facts from the provenance-only Tier-2 boundary.
12. `migration-log.md` §5 — named the actual Foundations, Typography, Components, Layout, and provenance destinations and recorded deletion of the approximate base-unit and unsupported generous-whitespace prose.
13. `migration-log.md` §6 — recorded the exact depth values at both Foundations and provenance.
14. `migration-log.md` §11 — recorded the source-class boundary at both Scope and provenance.
15. `migration-log.md` current audit record — replaced the stale pre-audit SHA and final-pass claims with the fresh F3 result.

Verification: all 25 migration disposition rows were checked against the three migrated files. Source `web/references/datadog/DESIGN.md` was not edited (SHA-256 `f7d31824314e7c65f7be2ab0ab3e363cafe2cd942134d34bf0f6c91a2a9055c2`). `migrate-reference.mjs --brand datadog --gate-only` PASS/problems `[]`; Core inspection reports `portable_core: true`. No gate false positive was observed, so no E3 incident was recorded.

**Correction (T2-1 Wave 19 revision, 2026-08-26).** The 25-row check recorded above did not hold. It was a destination-level pass, not a string-level one, and it cleared rows whose verbatim payload was missing: the `.verification.md` measured-copy strings “Products”, “Free trial”, “SEE THE PLATFORM”, “Start Free Trial”, and “Free Trial”, the legacy §4 `use` labels, and the §10 CTA strings were absent from both outputs, while portable Primary tasks had rewritten “See the platform” as “inspect the platform”. The same pass also left a source-absent `native-client` domain inside two negative claims (D1). This audit scope (B2/B2a and E1/E2/E2a–c) covers exactly the E2c overstatement that produced those rows, so the miss is recorded here rather than closed silently. The wave-19 revision restored the strings, deleted the `native-client` enumerand, recovered the `motion-fast` token name and the §3 type-hierarchy prose, and rewrote the affected log rows; every row was then re-grepped string by string. Post-revision migrated DESIGN SHA-256 is `3fd3988e71ac800332551852cb26bb615ec8ba95bd57c21c9178b6cbf7a41af6`, gate PASS/problems `[]`, `portable_core: true`, source SHAs unchanged.

AUDIT_DONE datadog fixes=15 revised=wave19
