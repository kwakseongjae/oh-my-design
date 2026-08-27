# Dable B2/B2a and E1/E2 audit log

Audit date: 2026-08-25  
Scope: sentence-level authority classification and adjacent qualification; migration disposition/destination truthfulness; provenance derived-scope alignment. Token values, component tables, state applicability, and section structure were not changed.

## Fixes

1. Scope — classified source-role and narrative/live-style evidence-boundary judgments with a complete adjacent derived-editorial/non-Dable authority limit.
2. Primary tasks — classified the three task formulations completely.
3. Audience — classified the advertiser/publisher/adtech-buyer grouping and biography boundary completely.
4. Distinctive traits — classified the selection and naming of the five traits completely.
5. Foundations / Semantic color — classified semantic role names and action boundaries completely.
6. Foundations / Shape — classified the 50-versus-9999 role-separation judgment completely.
7. Foundations / Elevation — classified grouping and captured-surface boundary judgments completely.
8. Foundations / Motion — classified the motion-promotion decision completely.
9. Typography & Assets / Families — classified the family-role split and substitution rule completely.
10. Typography & Assets / Assets — classified identity selection/rejection, authority, and reuse boundaries completely.
11. Components & States / evidence boundary — classified section-level evidence and applicability judgments completely.
12. Primary blue CTA — added a complete adjacent authority limit to its applicability judgments.
13. Mint secondary CTA — added a complete adjacent authority limit to its applicability judgments.
14. White ghost CTA — added a complete adjacent authority limit to its applicability judgments.
15. Neutral pill CTA — added a complete adjacent authority limit to its applicability judgments.
16. Top navigation item — added a complete adjacent authority limit to its applicability judgments.
17. Flat feature block — classified the omitted interaction kind/applicability decision completely.
18. Grey surface band — classified the omitted interaction kind/applicability decision completely.
19. Compact contact pill — classified the omitted primitive/interaction/applicability decision completely.
20. Footer heading — classified the non-interactive role judgment completely.
21. Layout & Platforms — classified presentation grouping and responsive-proof boundary judgments completely.
22. Content & Locales — expanded the existing qualifier to cover proof-use direction and avoidances as well as voice direction.
23. Governance — classified the reconstruction-level governance judgments completely.
24. migration-log §14 — separated legacy state guidance from the independently derived per-component applicability maps.
25. migration-log Proof — narrowed the preservation claim to selected raw samples/counts, the 17×36 variant, logo decision, Tier 2 dispositions, and the canonical sibling-Proof pointer that actually exist.
26. provenance — synchronized the derived-editorial scope ledger with every qualified portable scope.
27. migration-log current class — replaced the worker SHA with the post-audit DESIGN SHA-256.

## Verification

- Every migration-log row was grepped against the original DESIGN.md, portable DESIGN.md, and provenance.md; the two mismatched disposition rows above were corrected.
- Source `web/references/dable/DESIGN.md` remained unchanged (SHA-256 `bf8d15d31fcfe55434f8ede95bb4d502ea2fdb8482acf80172c0bd7f615be88f`).
- Post-audit portable DESIGN SHA-256: `113348a6665dad987e079f9ee1029b4e3924591d5bc65f1d48acf256ceab9450`.
- `migrate-reference.mjs --brand dable --gate-only`: PASS, problems `[]`.
- Core check: `portable_core: true`.
- E3: no gate false positive was observed; no wording or line break was altered to influence a gate.

AUDIT_DONE dable fixes=27
