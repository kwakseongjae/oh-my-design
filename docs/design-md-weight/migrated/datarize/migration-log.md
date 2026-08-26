# Datarize migration log

Ruleset: `MIGRATION_RULEBOOK.md` v8 (2026-08-25)

Source: `web/references/datarize/DESIGN.md`
Destination: `docs/design-md-weight/migrated/datarize/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/datarize/provenance.md`
Date: 2026-08-25
Worker: GPT-5.6-sol T2-1 Wave 18
Portable Core: pass (`scripts/design-md-core.cjs` inspectDesignMd: `portable_core: true`; `test-v2/tools/migrate-reference.mjs --gate-only`: PASS, problems `[]`)
DESIGN SHA-256: `0f988c20f051035d0369ba5e0364a6fbb5161b00856722e4c8ee804a9225d0f7`

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity | id/country/category/homepage → provenance; name/display name 이중 목적지 → H1/Scope + provenance; `primary_color #191919` 이중 목적지 → Experience/Foundations/Components + provenance | Portable frontmatter removed; every identity field now names its actual destination. |
| YAML Google s2 favicon | 분리 → provenance; non-claim boundary → Typography & Assets | Exact URL and “retained, not recaptured/re-evaluated” status remain; no logo/licence invention. |
| YAML verified/added/omd/extraction metadata | 분리 → provenance | Freshness/process metadata remains outside portable top matter. |
| YAML verification_v2 surfaces/sources/conflicts/claims | 분리 → provenance | Schema, dates, all three surfaces, eight sources, empty conflicts, anchors, and every claim path retained. |
| YAML note | 이중 목적지 → Scope + provenance | Marketing/blog/pricing desktop scope and console/GitBook/design-system exclusions remain in both portable and ledger. |
| YAML colors | 옮김 → Foundations; exact ledger → provenance | All seven current colors retained; old four-value palette remains an explicit negative boundary, not a token. |
| YAML typography | 옮김 → Typography & Assets; exact/evidence ledger → provenance | Five token roles plus source-body supporting heading, all sizes/weights/line-heights/tracking and font classes retained. |
| YAML spacing/rounded/shadow | 옮김 → Foundations; exact ledger → provenance | Eight spacing values, 8/10/50/999 roles, explicit 100px/999px component forms, and `none` retained without merging. |
| YAML pricing-tab component | 옮김 → Components & States; exact ledger → provenance | Primitive type `tab`, all fields, exact states sentence, and use retained. |
| §1 Visual Theme & Atmosphere | 옮김 → Experience/Foundations/Typography | Product scope, current restrained marketing expression, console boundary, and verified traits retained with adjacent B2a where interpretive. |
| §2 Color Palette & Roles | 옮김 → Foundations | Seven current roles and four explicit non-current values retained. |
| §3 Typography Rules | 옮김 → Typography & Assets; counts/source details → provenance | Evidence classes, six hierarchy rows, usage counts, source URLs count, licence, and console boundary retained. |
| §4 Component Stylings | 옮김 → Components & States; selectors/raw stacks → provenance | Three CTA links, locale/testimonial buttons, pricing tab/tablist, and email input retained; no error-treatment invention. |
| §5 Layout Principles | desktop-only boundary/component summary → Layout & Platforms; spacing/shape clusters 이중 목적지 → Foundations + Layout & Platforms; exact 1440×900 proof → provenance | Portable text keeps the standalone desktop boundary and measurements without carrying proof telemetry. |
| §6 Depth & Elevation | 옮김 → Foundations | `box-shadow: none` and separation methods retained; no general elevation invention. |
| §7 Do’s and Don’ts | 옮김 → Experience Distinctive/Derived principles/Avoid + Foundations Semantic color + Typography & Assets + Components & States | Marketing hierarchy, CTA, palette, console, pricing-state, and form-error boundaries remain at their actual qualified destinations. |
| §8 Responsive Behavior | 옮김 → Layout & Platforms negative constraint + Governance Named gaps | Desktop-only source establishes no breakpoints/stacking/touch adaptations; the unresolved inventory repeats that boundary without inventing values. |
| §9 Agent Prompt Guide | source-backed type/CTA/tablist values → Core/provenance; generic-dashboard/product-console/undocumented-state prohibitions → Experience/Governance; prompt wrapper and prompt-only `lime blobs` wording 삭제 | Exact lime negative hexes survive, but the unsupported decorative phrase does not; no all-values-retained claim remains. |
| §10 Voice & Tone | official expressions 이중 목적지 → Scope + Content & Locales; operational direction/prohibitions → Content & Locales | Three expressions, operational voice, do/don’t rules, and console-copy boundary remain at their actual destinations. |
| §11 Brand Narrative | 요약 옮김 → Scope/Content; context ledger → provenance; detailed origin-question and clicks/scrolls/pauses examples 삭제 | The behavior-data/product-area/guide-flow boundary survives in condensed form; absent narrative details are no longer claimed retained. |
| §12 Principles | factual premises → Scope/Distinctive; UI implications → Experience Derived implementation principles | Three implications remain under adjacent complete B2a without claiming every premise lives in the principles subsection. |
| §13 Personas | 옮김 → Experience audience | Three non-fictional official-flow roles retained; no biography exists to preserve. |
| §14 States | 옮김 → Components & States evidence boundary/per-component applicability + Governance Named gaps | Pricing default/selected and form-error-without-visual facts are retained; the unresolved inventory records absent state coverage. |
| §15 Motion | 옮김 → Foundations Motion + Governance Named gaps | No values are promoted; the five-kind component-specific promotion boundary and unresolved inventory both remain portable. |
| Footer sources | 분리 → provenance; contextual use → Scope/Content/Typography | Tier 1/Tier 2, official narrative/product/font sources, licence, and empty conflict status retained. |
| Canonical `.verification.md` | 분리·채택 → provenance Proof | Collector method, coverage/variant/interaction counts, raw tuples, font counts, Tier 2 caveats, context boundaries, country sources, and logo decision retained. |

## Required final passes

- Fresh F3 B2/B2a audit: completed across every portable sentence; the 13 under-qualified surface/evidence/role/placement/kind/content boundaries now carry adjacent complete authority language.
- Fresh F3 E1/E2/E2a–c audit: all 26 disposition rows were grep-checked across `DESIGN.md`, `provenance.md`, and this log; freshness, exact viewport, and font-count Proof are provenance-only, and the ten corrected rows now state their actual destinations/deletions.
- E3: no gate false positive was observed; no token, hex, URL, selector, font count, state label, or wording was distorted for gate behavior.
