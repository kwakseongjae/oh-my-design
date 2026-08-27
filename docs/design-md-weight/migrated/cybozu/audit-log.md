# Cybozu B2/B2a and E1/E2 audit log

Audit date: 2026-08-25  
Scope: sentence-level authority classification and adjacent qualification; migration disposition/destination truthfulness; provenance derived-scope alignment. Token values, component tables, state applicability, and section structure were not changed.

## Fixes

1. Scope — classified the teal/yellow non-reconciliation decision with a complete adjacent derived-editorial/non-Cybozu authority limit.
2. Scope — separated the published history from the collaboration-infrastructure reading and classified that reading completely.
3. Primary tasks — classified the three task formulations as derived editorial implementation inferences rather than Cybozu-authored specification.
4. Audience — classified the stakeholder grouping and retained-biography boundary completely.
5. Distinctive traits — classified the selection and naming of the five traits completely.
6. Foundations / Elevation — classified the elevation-role grouping and explanatory boundaries completely.
7. Foundations / Motion — classified the proof-to-promotion decision completely.
8. Typography & Assets — classified asset-authority and token-source boundary judgments completely.
9. Components & States / evidence boundary — classified the section-level evidence and applicability judgments completely.
10. Corporate top navigation — added a complete adjacent authority limit to its applicability judgments.
11. Corporate inline/list action — added a complete adjacent authority limit to its applicability judgments.
12. Corporate circular icon button — added a complete adjacent authority limit to its applicability judgments.
13. Corporate content card — classified the omission of interaction kind/applicability from unresolved evidence completely.
14. kintone primary CTA — added a complete adjacent authority limit to its applicability judgments.
15. kintone secondary button — added a complete adjacent authority limit to its applicability judgments.
16. kintone compact button — added a complete adjacent authority limit to its applicability judgments.
17. kintone feature card — classified the omission of interaction kind/applicability from unresolved evidence completely.
18. kintone badge — classified the non-interactive role judgment completely.
19. kintone input — added a complete adjacent authority limit to its applicability judgments.
20. Layout & Platforms — classified layout grouping and portable/provenance boundary judgments completely.
21. Content & Locales — expanded the existing qualifier so it explicitly covers directions and avoidances as well as tone characterizations.
22. Governance — classified the reconstruction-level governance judgments completely.
23. migration-log YAML components — replaced the false “eight primitive types” statement with the actual eight component records and their preserved source primitive types/fields.
24. migration-log §8 — added the observed image no-shadow portable destination and the unverified radius-retention provenance destination.
25. migration-log §14 — removed the false implication that legacy state recipes supplied the separately derived per-component applicability maps.
26. migration-log Proof — narrowed the preservation claim to the selected tuples/counts, source boundaries, conflict disposition, and canonical sibling-Proof pointer that actually exist.
27. provenance — synchronized the derived-editorial scope ledger with every qualified scope now present in portable DESIGN.md.
28. migration-log current class — replaced the worker SHA with the post-audit DESIGN SHA-256.

## Verification

- Every migration-log row was grepped against the original DESIGN.md, portable DESIGN.md, and provenance.md; the four mismatched rows above were corrected.
- Source `web/references/cybozu/DESIGN.md` remained unchanged (SHA-256 `d504cee0163753e1f9b448c4b6c1e811ce30e0d0fd6fea7330e83a99e79e3a35`).
- Post-audit portable DESIGN SHA-256: `e094aeebceb09627bd6427414f9db9fe71cc0af6b44a6cb5e9435073d7a92f3b`.
- `migrate-reference.mjs --brand cybozu --gate-only`: PASS, problems `[]`.
- Core check: `portable_core: true`.
- E3: no gate false positive was observed; no wording or line break was altered to influence a gate.

AUDIT_DONE cybozu fixes=28

## Superseded pointers (added 2026-08-26)

The two measurements above are historically accurate but no longer current, and neither should be read as evidence that this reference was copy-complete:

- The `PASS, problems []` on 2026-08-25 was measured against the pre-A5 gate. Rulebook v9 added A5 and the `copy-loss` check, under which the same files returned `MIGRATION_BLOCKED` with 4 lost Japanese strings. Both lanes and the semantic review had passed Wave 18 without examining published copy — the defect was in both lanes' blind spot.
- The post-audit portable DESIGN SHA-256 `e094aee…` is superseded by `c246ed307657f2de3b5d0940c1b9470a7115826b4f72903d882d565fe985c736` after the A5 restoration. See the A5 restoration section of `migration-log.md` for the per-string dispositions. Source SHA-256 is unchanged.
