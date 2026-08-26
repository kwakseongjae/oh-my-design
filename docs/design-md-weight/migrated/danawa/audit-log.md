# Danawa B2/B2a and E1/E2 audit log

Audit date: 2026-08-25  
Scope: sentence-level authority classification and adjacent qualification; migration disposition/destination truthfulness; provenance derived-scope alignment. Token values, component tables, state applicability, and section structure were not changed.

## Fixes

1. Scope — classified source-role, narrative-versus-token, and historical-causality judgments with a complete adjacent derived-editorial/non-Danawa authority limit.
2. Primary tasks — classified the three task formulations completely.
3. Audience — classified the PC-builder/household-deal/B2B-buyer grouping and biography boundary completely.
4. Distinctive traits — classified the selection and naming of the five traits completely.
5. Foundations / Semantic color — classified semantic role names and usage boundaries completely.
6. Foundations / Shape — classified shape-role labels and the full-versus-search role separation completely.
7. Foundations / Elevation — classified grouping and overlay-promotion boundary judgments completely.
8. Foundations / Motion — classified the motion-promotion decision completely.
9. Typography & Assets / Family — classified the family-role and runtime-fallback boundary completely.
10. Typography & Assets / Assets — classified asset authority and reuse boundaries completely.
11. Components & States / evidence boundary — classified section-level evidence and applicability judgments completely.
12. Category master trigger — added a complete adjacent authority limit to its applicability judgments.
13. In-result search submit — added a complete adjacent authority limit to its applicability judgments.
14. Result-filter search button — added a complete adjacent authority limit to its applicability judgments.
15. Pager control — added a complete adjacent authority limit to its applicability judgments.
16. Master search input — added a complete adjacent authority limit to its applicability judgments.
17. Bulk-purchase badge — classified the non-interactive role judgment completely.
18. Rank overlay badge — classified the non-interactive role judgment completely.
19. Promo / event card — classified the omitted interaction kind/applicability decision completely.
20. Product result row — classified the omitted row-level interaction kind/applicability decision completely.
21. Utility navigation item — added a complete adjacent authority limit to its applicability judgments.
22. Surface panel — classified the omitted primitive/interaction/applicability decision completely.
23. Layout & Platforms — classified presentation grouping and responsive-proof boundary judgments completely.
24. Content & Locales — expanded the existing qualifier to cover promotional-language direction and avoidances as well as voice direction.
25. Governance — classified the reconstruction-level governance judgments completely.
26. migration-log YAML colors — replaced the false no-role-merging claim with the actual 23-key disposition, including the shared `#ffffff` portable/provenance entries.
27. migration-log YAML components — corrected “ten primitive records” to ten component-token records and stated the actual primitive distribution.
28. migration-log §14 — separated legacy state guidance from the independently derived per-component applicability maps.
29. provenance — synchronized the derived-editorial scope ledger with every qualified portable scope.
30. migration-log current class — replaced the worker SHA with the post-audit DESIGN SHA-256.

## Verification

- Every migration-log row was grepped against the original DESIGN.md, portable DESIGN.md, and provenance.md; the three mismatched disposition/claim rows above were corrected.
- Source `web/references/danawa/DESIGN.md` remained unchanged (SHA-256 `0d12570363ac19dc08af2f5de8697db161913cb1ac91e75fe2b1f3a83865dc1c`).
- Post-audit portable DESIGN SHA-256: `3c3f52228c4ef5e41ce2c0801ffae6b0ed01ce33d17e134e2997c39da2307f16`.
- `migrate-reference.mjs --brand danawa --gate-only`: PASS, problems `[]`.
- Core check: `portable_core: true`.
- E3: no gate false positive was observed; no wording or line break was altered to influence a gate.

AUDIT_DONE danawa fixes=30
