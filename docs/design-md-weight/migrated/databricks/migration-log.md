# Databricks migration log

Ruleset: `MIGRATION_RULEBOOK.md` v8 (2026-08-25)

Source: `web/references/databricks/DESIGN.md`
Destination: `docs/design-md-weight/migrated/databricks/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/databricks/provenance.md`
Date: 2026-08-25
Worker: GPT-5.6-sol T2-1 Wave 18
Portable Core: pass (`scripts/design-md-core.cjs` inspectDesignMd: `portable_core: true`; `test-v2/tools/migrate-reference.mjs --gate-only`: PASS, problems `[]`)
DESIGN SHA-256: `fb5542b24ddc3405c98423414d61997212df9625126b13343fc19c18597b89e9` (Wave 19 revision; pre-revision `838fbd89fb29244bbbd374e87d4d37f033d881b1c6acb592fb1f072600141ab0`)

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity | 분리 → provenance; name 이중 목적지 → H1/Scope | Portable frontmatter removed; exact id/country/category/homepage/color retained in the ledger. |
| YAML Simple Icons logo | 분리 → provenance; identity-asset boundary → Typography & Assets | Exact type/slug retained; portable body does not claim official logo distribution or licence. |
| YAML verified/omd/extraction/harvest metadata | 분리 → provenance | Freshness and process metadata remain outside portable top matter. |
| YAML token note | 이중 목적지 → Scope/Foundations/Typography + provenance | Lava/Navy/Teal/DM Sans boundary is present in both useful portable context and the exact ledger. |
| YAML colors | 옮김 → Foundations; exact-key ledger → provenance | All source keys/values retained; duplicate `#1B3139` and `#ffffff` roles remain named, and `#FF3621` / `#EB1600` remain separate. |
| YAML typography | 옮김 → Typography & Assets; exact ledger → provenance | All 11 roles, both families, sizes, weights, and unitless line-height forms remain intact. |
| YAML spacing/rounded/shadow | 옮김 → Foundations; exact ledger → provenance | Full scales and both shadow strings retained; component-only 0px geometry stays distinct. |
| YAML components | 옮김 → Components & States; exact ledger → provenance | All eight primitive records preserved. Active/inactive tab records are two variants of one product-tab role; no field was discarded. |
| §1 Visual Theme & Atmosphere | 옮김 → Experience/Foundations/Typography | Public-surface visual traits retained; volcanic/precision characterizations carry adjacent complete B2a or remain source interpretation in provenance. |
| §2 Color Palette & Roles | 옮김 → Foundations | All named roles and the official/live CTA comparison retained without state-evidence promotion. |
| §3 Typography Rules | 옮김 → Typography & Assets | Families, hierarchy, tracking, weight rules, and code-only mono boundary retained. |
| §4 Component Stylings | 옮김 → Components & States | Buttons, tab variants, card, badge, input, and two surface containers retained; named `Focus` stays separate from focus-visible. |
| §5 Layout Principles | public composition/measurements, including the approximate 1200px area and 64px-plus rhythm → Layout & Platforms; 1200px comparison and exact measurement ledger also → provenance | Hero/grid/surface/tab/card arrangement and component sizes remain portable; the approximate 1200px boundary is present in both destinations. |
| §6 Depth & Elevation | flat/card/elevated/dark-section meanings and shadow values → Foundations; accessibility-ring meaning and exact shadow ledger → provenance | Both shadow values have dual destinations; the unvalued accessibility-ring concept remains provenance-only. |
| §7 Do’s and Don’ts | 옮김 → Experience derived principles/Avoid | Color, geometry, family, weight, and decorative-effect constraints retained under complete adjacent B2a. |
| §8 Responsive Behavior | breakpoints/collapsing rules 분리 → provenance unresolved ledger; touch-target measurements 이중 목적지 → Layout & Platforms + provenance; proof boundary → Layout & Platforms | Four breakpoint bands and the five collapsing rules are provenance-only (`provenance.md` responsive ledger). The Touch Targets values are dual-destination: the 40px CTA/tab height, 24px CTA horizontal padding, and 65px navigation zone are stated in portable Layout & Platforms and again in the exact provenance touch ledger; tab padding 12–16px stays provenance-only. No unsupported multi-viewport verification claim. |
| §9 Agent Prompt Guide | 고유 값은 Core 슬롯으로 옮김; prompt/example/workflow wrapper 삭제 | Every unique color/type/component/layout value exists in Foundations, Typography, Components, Layout, or provenance. No slotless delegation. |
| §10 Voice & Tone | 옮김 → Content & Locales | Context/tone rules, three verified samples, pricing example, error guidance, and forbidden register retained. |
| §11 Brand Narrative | founding/platform/multicloud context → Experience Scope; open/composable reading → Experience Derived implementation principles; temporal/unverified claims + interpretation class → provenance | Portable text names the project lineage without claiming their open-source status; valuation, customer scale, and causal readings remain source narrative, not tokens. |
| §12 Principles | 옮김 → Experience derived principles | All five meanings retained under complete adjacent B2a. |
| §13 Personas | source-backed groups → Experience; fictional biographies 삭제 | D2 forbids fictional names/biographies in portable and provenance. |
| §14 States | 옮김 → Components & States legacy guidance | All 12 treatment rows and exact strings/values remain in the portable body with adjacent B2a; per-component applicability is separately role-derived. |
| §15 Motion & Easing | exact values 분리 → provenance unresolved ledger; B3 gate → Foundations Motion | Four durations, three curves, signature rules, pause control, and reduced-motion recipe are retained without unsupported token promotion; portable B3 names all five evidence kinds. |
| Footer/source comment | 분리 → provenance; narrative context also → Scope/Content | Tier sources, no-result Tier 2, CTA comparison, live-copy status, persona disclosure, and interpretation disclosure retained. |
| Canonical `.verification.md` | 분리·채택 → provenance Proof | Method, raw typography/component tuples, frequency counts, portal comparisons, and the sibling-only 12px “Try Databricks” padding are retained without merging them into different YAML records. |

## Required final passes

- Fresh F3 B2/B2a audit: completed across every portable sentence; surface scope, audience retention, official/live color separation, component-padding placement, and proprietary-font-asset authority now carry adjacent complete qualifiers.
- Fresh F3 E1/E2/E2a–c audit: all 25 disposition rows were re-grep-checked across `DESIGN.md`, `provenance.md`, and this log in the Wave 19 revision. §5 (approximate 1200px area), §6 (both shadow strings), and §8 (40px CTA/tab height, 24px CTA horizontal padding, 65px navigation zone) are the three dual-destination rows and each now names both destinations; §8's breakpoint bands, collapsing rules, and 12–16px tab padding are provenance-only, as are freshness and the exact unpromoted responsive claims. No log row asserts a destination that grep could not confirm.
- E3: no gate false positive was observed; no token, hex, curve, URL, state label, or source wording was distorted for gate behavior. `migrate-reference.mjs --gate-only` returns PASS with `problems: []`, and `inspectDesignMd` still reports `portable_core: true` after the revision.

## Wave 19 revision (2026-08-26)

D1 fabricated-domain cleanup: the Scope boundary sentence and the Named-gaps list no longer name authenticated/product-console/native-client/parity/reflow domains, none of which appear anywhere in the 467-line source; the retained boundary uses only the source's own `marketing, product, and documentation surfaces` vocabulary (source §3). Three residual `product-console` constraint phrases in Experience and Layout were grounded to `product-surface` for the same reason. E2a/F2: the §8 row now records its dual destination and the final-pass note names all three dual-destination rows. No token value, component record, state applicability, or section structure was changed; the canonical source was not touched.
