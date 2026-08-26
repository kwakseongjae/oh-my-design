# Cursor migration log

Ruleset: `MIGRATION_RULEBOOK.md` v8 (2026-08-25)

Source: `web/references/cursor/DESIGN.md`
Destination: `docs/design-md-weight/migrated/cursor/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/cursor/provenance.md`
Date: 2026-08-25
Worker: GPT-5.6-sol T2-1 Wave 18
Portable Core: pass (`scripts/design-md-core.cjs` inspectDesignMd: `portable_core: true`; `test-v2/tools/migrate-reference.mjs --gate-only`: PASS, problems `[]`)
DESIGN SHA-256: `b7da9c7f26862f91364a8d317253e5301a4684f5ffb97c6259f5e783c6935e78`

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (`id`, `name`, `country`, `category`, `homepage`, `primary_color`) | exact identity → provenance; name → H1; `primary_color` value → Experience + Foundations + Components + provenance | Portable file has no frontmatter. Every exact identity field remains in provenance; `Cursor` remains in H1, and `#26251e` also remains in its verified portable roles. |
| YAML logo | exact `simpleicons` / `cursor` identity 분리 → provenance; asset-authority boundary → Typography & Assets | The source’s catalog logo pointer stays exact in provenance. Portable Assets separately preserves the official brand-guide logo/icon/avatar family and its authority boundary; the two records are not conflated. |
| YAML `omd`, `verified`, `verification_v2`, conflicts, claims | exact schema/freshness/surface/source/claim ledger → provenance; surface and interaction evidence boundaries → Experience + Foundations + Components + Layout | Format, freshness, URLs, evidence method, and claim bindings are non-portable proof metadata; the portable file retains only the standalone evidence-domain and interaction boundaries. |
| YAML `ds.*` | exact fields/URLs → provenance; naming/asset-authority propositions → Experience + Assets + provenance | Provenance preserves every exact field and URL. Portable text preserves the official naming and logo/icon/avatar authority propositions without repeating the source-ledger URL. |
| YAML `tokens.source`, `extracted`, `components_harvested` | 분리 → provenance | Extraction and harvest metadata are proof records. |
| YAML colors | portable occurrences → Experience + Foundations + Components + Layout; exact record → provenance | All nine values and their bounded roles remain portable; the exact source record remains in provenance. |
| YAML typography | portable occurrences → Experience + Typography & Assets + Components + Layout; exact record → provenance | `CursorGothic`, sizes, weights, unitless `1.5` / `1` line heights, `0.14` tracking, and uses are preserved without unit conversion. |
| YAML spacing / rounded | 옮김 → Foundations; 이중 기록 → provenance | All numeric values preserved. Source scale is not merged with fractional padding or computed `3.35544e+07px` pill geometry. |
| YAML `marketing-card` type and fields | portable occurrences → Experience + Foundations + Components & States + Layout; exact record → provenance | Primitive `card` plus bg/radius/padding/font/use preserved. Interactivity is not invented. |
| §1 Visual Theme & Atmosphere | 옮김 → Experience Scope, traits, guidance, derived principles, Avoid | Product/surface boundary, palette, typography, demos, official naming/assets, and do/don’t rules retained. Editorial interpretation carries adjacent complete B2a qualification. |
| §2 Color Palette & Roles | 옮김 → Foundations color and borders | All role/value/border records retained; error/success remain absent. |
| §3 Typography Rules | evidence classes/type roles/licence boundaries → Typography & Assets; exact use/source counts and proof detail → provenance | Evidence classes, type roles, licence boundary, and unresolved `jjannon` disposition remain portable without substitution; exact telemetry remains provenance-only. |
| §4 Component Stylings | component values → Components & States; selectors/observation summaries → provenance | Ten component records retain exact portable values. Provenance records selectors and labeled observation summaries rather than claiming byte-exact raw tuples. |
| §5 Layout Principles | 옮김 → Foundations + Typography & Assets + Components & States + Layout & Platforms | 1440×900, 52px top padding, card geometry, action type scales, and unresolved responsive/grid boundaries are present in their actual portable slots. |
| §6 Depth & Elevation | 옮김 → Foundations Elevation + Governance Named gaps | Tonal surfaces and low-alpha borders are retained; unsupported shadow/modal/focus scales remain named gaps. |
| §7 Interaction & Motion | exact `interactionCount: 0` → provenance; no-interaction evidence boundary → Experience + Foundations Motion + Components + Governance | Static-marker boundary and no reusable behavior remain portable without copying the exact proof count; the five-evidence promotion gate is present in full. |
| §8 Responsive Behavior | 옮김 → Layout & Platforms + Governance Named gaps | Single-view/duplicate-locale limitation and unresolved mobile/breakpoint/collapse behavior are retained. |
| §9 Agent Prompt Guide | 값은 해당 Core 슬롯으로 옮김; 도구 프롬프트 포장은 삭제 | Unique canvas/action/card/link values are present in Foundations/Components; invention prohibitions remain in Experience/Governance. No slotless delegation. |
| §10 Voice & Tone | 옮김 → Content & Locales | Task-first product explanation, concise CTA examples, and release pattern are retained. |
| §11 Brand Narrative | narrative/boundaries → Experience Scope + Official brand guidance + Typography & Assets + Content & Locales; source ledger → provenance | Editor/product evolution and the practical brand-guide boundary remain portable; exact URLs and freshness remain in provenance. |
| §12 Principles | naming → Official brand guidance + Content & Locales; three derived implications → Derived implementation principles | Official naming is separated from the source’s engineering-work, warm-hierarchy, and demo-boundary implications. The pill/card principle is retained from source §1, not attributed to §12. |
| §13 Personas | 옮김 → Experience Audience + Primary tasks | Only evidence-backed stakeholder groups/tasks retained; no fictional biography is created or copied. |
| §14 States | 옮김 → Experience + Components & States + Content & Locales + Governance Named gaps | Static selected/unchecked/disabled markers, unresolved empty/loading/error/success/skeleton/recovery treatments, and role-specific applicability boundaries remain portable; no graph delegation or coverage claim. |
| §15 Motion & Easing | 옮김 → Foundations Motion + Governance Named gaps | No values are promoted; the five evidence kinds and the unresolved motion fields remain portable. |
| Footer Verified / Tier 1 / Tier 2 / conflicts | 분리 → provenance | Exact freshness/source/conflict URLs and the rejected Tier 2 summary remain outside the portable body. |
| Canonical `.verification.md` | 분리·채택 → provenance Proof | Selectors, observation summaries, evidence-domain boundaries, exact font counts, licence boundary, and reconciliation notes are recorded without claiming byte-exact raw tuples; proof telemetry does not become portable text. |

## Required final passes

- F1 B2a scan: superseded by the fresh F3 audit. The current body carries adjacent complete authority boundaries for Scope, Primary tasks, Audience, Distinctive traits, brand-asset authority, principles, Avoid, semantic roles, spacing/shape/elevation/motion dispositions, font/type classifications, Assets, component primitive/applicability judgments, Layout, and Content; see `audit-log.md` and the provenance derived-range inventory.
- F2 E2 scan: repeated row by row against source `DESIGN.md`, portable `DESIGN.md`, and `provenance.md`. Dual destinations and provenance-only proof fields now match the table above; proof summaries are not described as exact raw tuples.
- E3: no gate-facing spelling, hex, selector, state, or line-break distortion was used; any gate false positive will be reported rather than evaded.

## F3 audit revision — 2026-08-25

- Fresh auditor: Codex, separate from the Wave 18 migration session.
- Current DESIGN SHA-256: `b7da9c7f26862f91364a8d317253e5301a4684f5ffb97c6259f5e783c6935e78`; pre-audit worker SHA `b49a67e57c7664cf3eadc94d74043230997cc35590e56c951f8066d68b5b75cb` is superseded.
- `migrate-reference.mjs --brand cursor --gate-only`: PASS, problems `[]`; Core v2 check: `portable_core: true`.
- E3 report: no gate false positive was observed; no wording, value, selector, state, or line break was distorted for the gate.
