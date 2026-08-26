# Datarize F3 audit

Auditor: Codex (fresh session, separate from the T2-1 Wave 18 migration session)
Rulebook scope: B2 / B2a and E1 / E2 / E2a–c only
Date: 2026-08-25

Sentence class used for the complete portable-body pass: brand-published fact / observed technical fact / editorial interpretation or causal judgment. Only the third class was changed, by attaching the complete adjacent authority boundary (`derived editorial implementation inference` / `not Datarize-authored or a separately published UI specification`). Token values, component tables, state applicability, and section structure were not changed.

## Fixes

1. `DESIGN.md` Scope — expanded the adjacent qualifier to cover surface selection.
2. `DESIGN.md` Audience — expanded the qualifier to cover its evidence-class boundary.
3. `DESIGN.md` Semantic color — qualified role assignments and current-token/generalization boundaries.
4. `DESIGN.md` Spacing — qualified the captured-cluster, non-universal-scale, and component-padding placement judgments.
5. `DESIGN.md` Elevation — qualified the separation-method and no-general-scale judgments.
6. `DESIGN.md` Font evidence — qualified evidence classification, promotion, ownership, and product-scope judgments.
7. `DESIGN.md` Family — qualified the decision not to substitute weakly corroborated or declared-only faces.
8. `DESIGN.md` Marketing CTA family — expanded the qualifier to cover family grouping and interaction kind.
9. `DESIGN.md` Locale control — expanded the qualifier to cover interaction kind.
10. `DESIGN.md` Testimonial navigation — expanded the qualifier to cover interaction kind.
11. `DESIGN.md` Pricing tab — expanded the qualifier to cover interaction kind.
12. `DESIGN.md` Email input — expanded the qualifier to cover interaction kind.
13. `DESIGN.md` Content — added a complete adjacent qualifier for attribution and authenticated-console-copy boundaries.
14. `DESIGN.md` freshness — removed the inspection date from portable Scope; exact freshness remains in provenance.
15. `DESIGN.md` font Proof — removed exact use/source counts while retaining evidence classes and boundaries; exact counts remain in provenance.
16. `DESIGN.md` viewport Proof — removed exact 1440×900 telemetry while retaining the desktop-only boundary; the exact viewport remains in provenance.
17. `provenance.md` derived range — synchronized the inventory with every actual portable editorial scope.
18. `migration-log.md` YAML identity — added the actual dual portable/provenance destinations for `primary_color #191919`.
19. `migration-log.md` §5 — added Foundations/Layout destinations and separated exact viewport Proof to provenance.
20. `migration-log.md` §7 — recorded the actual Experience, Foundations, Typography, and Components destinations.
21. `migration-log.md` §8 — added the duplicated Governance Named-gaps destination.
22. `migration-log.md` §9 — replaced the all-values-retained claim with the actual surviving values, constraints, and deleted prompt-only wording.
23. `migration-log.md` §10 — recorded official expressions at both Scope and Content.
24. `migration-log.md` §11 — recorded condensation/deletion of the absent origin-question and clicks/scrolls/pauses details.
25. `migration-log.md` §12 — separated factual-premise and UI-implication destinations.
26. `migration-log.md` §14 — added the Governance unresolved-state inventory.
27. `migration-log.md` §15 — added the Governance unresolved-motion inventory.
28. `migration-log.md` current audit record — replaced the stale pre-audit SHA and final-pass claims with the fresh F3 result.

Verification: all 26 migration disposition rows were checked against the three migrated files. Source `web/references/datarize/DESIGN.md` was not edited (SHA-256 `a2d407d367e9c11d5548375f5e69b217354f3a026ffe782cd7d828503e85403b`). Migrated DESIGN SHA-256 is `0f988c20f051035d0369ba5e0364a6fbb5161b00856722e4c8ee804a9225d0f7`. `migrate-reference.mjs --brand datarize --gate-only` PASS/problems `[]`; Core inspection reports `portable_core: true`. No gate false positive was observed, so no E3 incident was recorded.

AUDIT_DONE datarize fixes=28
