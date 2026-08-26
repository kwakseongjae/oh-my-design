# Dabang B2/B2a and E1/E2 audit log

Audit date: 2026-08-25  
Scope: sentence-level authority classification and adjacent qualification; migration disposition/destination truthfulness; provenance derived-scope alignment. Token values, component tables, state applicability, and section structure were not changed.

## Fixes

1. Scope — classified the evidence-domain partition and no-cross-domain rule with a complete adjacent derived-editorial/non-Dabang authority limit.
2. Primary tasks — classified the three task formulations completely.
3. Audience — classified the role-to-audience grouping completely without turning official roles into brand-authored personas.
4. Distinctive traits — classified the selection and naming of the five traits completely.
5. Foundations / Semantic color — classified semantic role names and reuse boundaries completely.
6. Foundations / Spacing — classified component attachment and support-domain judgments completely.
7. Foundations / Elevation — classified the component-bounded/non-global elevation reading completely.
8. Foundations / Motion — classified motion-promotion and local-extension judgments completely.
9. Foundations / Motion — restored the reduced-motion-support condition so migration-log’s retention claim exists in the portable body.
10. Typography & Assets / Font evidence — classified evidence resolutions and promotion boundaries completely.
11. Typography & Assets / Assets — classified font-asset and favicon-authority boundaries completely.
12. Components & States / evidence boundary — classified the section-level evidence and applicability judgments completely.
13. Header account control — added a complete adjacent authority limit to its applicability judgments.
14. Header outline action — added a complete adjacent authority limit to its applicability judgments.
15. Map location search — added a complete adjacent authority limit to its applicability judgments.
16. Map dock control — added a complete adjacent authority limit to its applicability judgments.
17. Home search-entry geometry — classified the omitted primitive/applicability decision completely.
18. Map tool geometry — classified the omitted primitive/applicability decision completely.
19. Support FAQ row — classified the support-only and omitted primitive/applicability judgments completely.
20. Layout & Platforms — classified layout grouping, reuse, and unresolved-contract judgments completely.
21. Content & Locales — expanded the existing qualifier to cover content-source rules and avoidances as well as voice direction.
22. Governance — classified the reconstruction-level governance judgments completely.
23. migration-log YAML components — replaced the false “four primitive types” claim with the actual four component records and two source primitive types.
24. migration-log §7 — logged deletion of the generic runtime-fallback instruction and the actual provenance fallback-evidence boundary instead of claiming full portable retention.
25. migration-log §9 — removed the false Governance destination for the generic unlisted-component extension rule and logged its deletion with the prompt wrapper.
26. migration-log §14 — separated the source observed-state record from the independently derived per-component applicability maps.
27. provenance — added a derived-editorial scope ledger matching every qualified portable scope.
28. migration-log current class — replaced the worker SHA with the post-audit DESIGN SHA-256.

## Verification

- Every migration-log row was re-grepped against the original DESIGN.md, portable DESIGN.md, and provenance.md after the Opus 5 revision. The §7 system-font substitution boundary now resolves to portable `DESIGN.md:58`, the `universal 8px layout system` rollback class resolves to `provenance.md:108`, and no mismatched disposition/destination pointer remains.
- Source `web/references/dabang/DESIGN.md` remained unchanged (SHA-256 `e484203d7803f1e574710ed4623bbc1c9860f3f3e0ef972c00aa030af41da0f8`).
- Post-revision portable DESIGN SHA-256: `e6abe9072eae1785087ab668ed1620b83f5c56f55ce768ca85a8dab2097bade8`.
- `migrate-reference.mjs --brand dabang --gate-only`: PASS, problems `[]`.
- Core check: `portable_core: true`.
- E3: no gate false positive was observed; no wording or line break was altered to influence a gate.

AUDIT_DONE dabang fixes=28
