# Sinsang Market (Dealicious) F3 audit

Auditor: Codex (fresh session, separate from the T2-1 Wave 18 migration session)
Rulebook scope: B2 / B2a and E1 / E2 / E2a–c only
Date: 2026-08-25

Sentence class used for the complete portable-body pass: brand-published fact / observed technical fact / editorial interpretation or causal judgment. Only the third class was changed, by attaching the complete adjacent authority boundary (`derived editorial implementation inference` / `not Dealicious-authored or a separately published UI specification`). Token values, component tables, state applicability, and section structure were not changed.

## Fixes

1. `DESIGN.md` Scope — expanded the qualifier to cover surface scope and historical-context-versus-live-token-evidence judgments.
2. `DESIGN.md` Audience — expanded the qualifier to cover the biography-retention decision.
3. `DESIGN.md` Semantic color — qualified role assignment, same-value grouping, and the body-text-versus-chrome boundary.
4. `DESIGN.md` Spacing — qualified the decision to keep CTA padding distinct from the source scale.
5. `DESIGN.md` Shape — expanded the qualifier to cover source-token-versus-component-form separation.
6. `DESIGN.md` Assets — expanded the qualifier to cover logo-sample-to-identity-palette interpretation.
7. `DESIGN.md` Corporate CTA family — expanded the qualifier to cover family grouping and interaction kind.
8. `DESIGN.md` Top navigation — expanded the qualifier to cover interaction kind.
9. `DESIGN.md` Editorial cards — expanded the qualifier to cover token/raw separation and child-control ownership.
10. `DESIGN.md` Footer row — expanded the qualifier to cover child-link-versus-container classification.
11. `DESIGN.md` freshness — removed the inspection date from portable Scope; exact freshness remains in provenance.
12. `DESIGN.md` asset Proof — removed the exact first-party logo URL while retaining the portable identity/authority/reuse boundary; the URL remains in provenance.
13. `DESIGN.md` responsive ledger — removed exact unpromoted breakpoint values while retaining the standalone proof boundary; exact claims remain in provenance.
14. `provenance.md` narrative boundary — corrected the false claim that every flat/fast/product-studio reading survives portably and recorded the actual portable-versus-sidecar split.
15. `provenance.md` derived range — synchronized the inventory with all actual portable editorial scopes, including semantic, spacing, card, and footer decisions.
16. `migration-log.md` YAML identity — added the actual portable/provenance destinations for `primary_color #001339`.
17. `migration-log.md` YAML logo — separated exact URL/Proof and generic-favicon rejection from portable identity, palette, and reuse boundaries.
18. `migration-log.md` YAML note — removed the nonexistent font claim and named the actual logo-palette destination.
19. `migration-log.md` §1 — recorded the provenance-only product-studio comparison and omitted mobile-native characterization instead of claiming portable retention.
20. `migration-log.md` §3 — separated retained metrics/light-weight avoidance from omitted causal typography prose.
21. `migration-log.md` §4 — recorded the raw card record at both destinations, footer contacts in provenance, and omitted story-card examples.
22. `migration-log.md` §5 — added Foundations, recorded the conflicting `Base unit: 8px` and whitespace-prose omissions, and retained only actual geometry.
23. `migration-log.md` §6 — separated portable depth treatments from provenance-only flat/fast/confident rhetoric.
24. `migration-log.md` §7 — added the Components & States destination for retained component rules.
25. `migration-log.md` §8 — corrected exact responsive claims to provenance-only and the proof boundary to Layout & Platforms.
26. `migration-log.md` §10 — narrowed retention to actual samples/labels and recorded two omitted story-card labels.
27. `migration-log.md` §11 — narrowed the portable narrative, recorded omitted market-history details, and separated the causal comparison.
28. `migration-log.md` §14 — removed the overclaim that every evaluative string survives and recorded the omitted `Honest, low-pressure` tag.
29. `migration-log.md` source comment/footer — named every actual dual destination for narrative, persona, interpretation, and verified voice.
30. `migration-log.md` current audit record — replaced the stale pre-audit SHA and overbroad F1/F2 claims with the fresh F3 result.

Verification: all 25 migration disposition rows were checked with grep against source DESIGN, portable DESIGN, and provenance. Source `web/references/dealicious/DESIGN.md` was not edited (SHA-256 `c143cf4a23dfafffb1594e3d93eba7beaafc3150da798f6537c9bc3b72ca898a`). Migrated DESIGN SHA-256 is `23f3b09547e3862145300a291828f83abd2b59ee283347370ca5033c8850e1eb`. `migrate-reference.mjs --brand dealicious --gate-only` PASS/problems `[]`; Core inspection reports `portable_core: true`. No gate false positive was observed, so no E3 incident was recorded.

AUDIT_DONE dealicious fixes=30

## Pointer note (2026-08-26, added by the A5 restoration pass)

This audit is a 2026-08-25 snapshot taken under rulebook v8 and its findings stand
as recorded. The migrated `DESIGN.md` SHA-256 cited above (`23f3b095…`) is the
pre-restoration state. Rulebook v9 added A5 and its `copy-loss` gate check, which
flagged five brand-published strings this migration had dropped; restoring them
changed the portable doc to SHA-256
`9a1238b6ce8512884185824001e025728cc7e62543595ba6e068675f37236f29`. The change is
confined to §6 Content & Locales and the corrected §4 / §10 / §11 disposition rows
in `migration-log.md` — see the A5 restoration table there. Token values, component
tables, state applicability, section structure, and the source file remain as this
audit found them.
