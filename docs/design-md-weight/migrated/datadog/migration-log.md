# Datadog migration log

Ruleset: `MIGRATION_RULEBOOK.md` v8 (2026-08-25)

Source: `web/references/datadog/DESIGN.md`
Destination: `docs/design-md-weight/migrated/datadog/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/datadog/provenance.md`
Date: 2026-08-25
Worker: GPT-5.6-sol T2-1 Wave 18
Portable Core: pass (`scripts/design-md-core.cjs` inspectDesignMd: `portable_core: true`; `test-v2/tools/migrate-reference.mjs --gate-only`: PASS, problems `[]`)
DESIGN SHA-256: `3fd3988e71ac800332551852cb26bb615ec8ba95bd57c21c9178b6cbf7a41af6`

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity | 분리 → provenance; name 이중 목적지 → H1/Scope | Portable frontmatter removed; all identity fields retained. |
| YAML Google s2 favicon | 분리 → provenance; identity/usage boundary → Typography & Assets | Exact URL, byte/identity note, and Simple Icons fallback retained; no distribution-licence invention. |
| YAML verified/added/omd/extraction/harvest metadata | 분리 → provenance | Freshness/process metadata remains outside portable top matter. |
| YAML note | color/font facts 이중 목적지 → Scope/Foundations/Typography + provenance; Tier-2 boundary → provenance | Purple/violet/ink/footer/font remain in portable context and provenance; the Tier-2 boundary remains sidecar-only. |
| YAML colors | 옮김 → Foundations; exact ledger → provenance | All 16 keys and role distinctions preserved; `#8000ff` and `#7700ff` remain separate. |
| YAML typography | 옮김 → Typography & Assets; exact ledger + per-role `use` labels → provenance | Six roles, NationalWeb/fallback, sizes, weights, and unitless line heights preserved. The `use` strings, including the `NationalWeb SemiBold` and `NationalWeb Light` qualifiers, are in the provenance token record. Raw 22px body tuple remains distinct. |
| YAML spacing/rounded/shadow | 옮김 → Foundations; exact ledger → provenance | All scale values, full 9999, and `none` retained. |
| YAML components | 옮김 → Components & States; exact ledger + `use` labels → provenance; CTA `use` labels 이중 목적지 → Components & States CTA family | All eight primitives retained, including `region-select` as primitive `badge`; white/transparent search and 8px/bottom-only card records remain distinct. Every `use` string is now verbatim in the provenance component record, and the four CTA `use` labels are also on the portable CTA family entries. |
| §1 Visual Theme & Atmosphere | 옮김 → Experience/Foundations/Typography | Verified purple/NationalWeb/flat traits retained; category-refusal and design-personality readings carry adjacent B2a. |
| §2 Color Palette & Roles | 옮김 → Foundations | Purple/violet/neutral/surface/error roles retained. |
| §3 Typography Rules | 옮김 → Typography & Assets | Hierarchy retained without converting ratios. The four Principles sentences — one family / three weights, heavy headline vs light lede, tight 1.0 display line height, and the CTA 700-over-nav-600 weight bump — are restored beneath the portable type-role table with adjacent B2a. |
| §4 Component Stylings | 옮김 → Components & States; sibling-only tuple differences → provenance; `Use:` 라벨 문자열 이중 목적지 → Components & States + Content & Locales + provenance | Four CTA variants, search, pricing card, region control, and navigation retained; verified CTA transition remains component-bound. The `Use:` label strings “Free trial”, “Get started”, “Start Free Trial”, “SEE THE PLATFORM”, “Free Trial”, “Search”, and “US (US1, US3, US5)” are carried verbatim in all three destinations. |
| §5 Layout Principles | scale → Foundations + provenance; typography measures → Typography & Assets + provenance; component measures → Components & States + provenance; composition/flat segmentation → Layout & Platforms; approximate base-unit and unsupported generous-whitespace prose 삭제 | Exact values remain at their actual portable and ledger destinations; the `~4px` wrapper is superseded by the exact YAML scale, and the unproved generous-whitespace claim is not retained. |
| §6 Depth & Elevation | depth characterization and values → Foundations; exact values/evidence also → provenance | `none`, tints, hairline, black band, and footer contrast have their actual dual destinations. |
| §7 Do’s and Don’ts | 옮김 → Experience derived principles/Avoid + Typography & Assets | Purple, NationalWeb, geometry, flatness, and official logo constraints retained with adjacent B2a. |
| §8 Responsive Behavior | 분리 → provenance unresolved ledger; proof boundary → Layout & Platforms | Three bands, collapse rules, and image behavior retained exactly without multi-viewport promotion. |
| §9 Agent Prompt Guide | 고유 값은 Core 슬롯으로 옮김; prompt/example/workflow wrapper 삭제 | Unique values exist in Foundations/Typography/Components/Layout or provenance; no slotless delegation. |
| §10 Voice & Tone | 옮김 → Content & Locales; CTA mode 문자열 이중 목적지 → Content & Locales + provenance | The three exact voice samples, naming rule, technical register, and forbidden register are retained, and the CTA mode is now carried as its three verbatim strings “Get started free”, “Free trial”, and “See the platform” rather than paraphrased. |
| §11 Brand Narrative | 옮김 → Experience Scope; source-class boundary 이중 목적지 → Scope + provenance | Founding/dev-ops/product/IPO context remains narrative rather than interface-token proof in both destinations. |
| §12 Principles | 옮김 → Experience derived principles | Five meanings retained under complete adjacent B2a. |
| §13 Personas | source-backed groups → Experience; fictional biographies 삭제 | D2 prohibits the names and biographies in both outputs. |
| §14 States | 옮김 → Components & States legacy guidance | All nine patterns, strings, values, and treatments retained with adjacent B2a; role-derived applicability is separate. |
| §15 Motion & Easing | verified CTA declaration → Components/Foundations; token names + other exact values → provenance unresolved; B3 → Foundations | `background-color 0.15s ease-in-out` remains component-bound; the `motion-fast` 150ms token name is recorded alongside the observed declaration in the provenance motion ledger, and 200/320ms with their `motion-standard`/`motion-slow` names, three curves, and the reduced-motion claim remain losslessly sidecar-only. |
| Footer/source comment | 분리 → provenance; verified copy/assets also → Content/Assets | Sources, silent Tier 2, brand-name and logo facts, narrative evidence classes, persona disclosure, and interpretation disclosure retained. |
| Canonical `.verification.md` | 분리·채택 → provenance Proof; 측정 대상 카피 문자열 이중 목적지 → provenance Raw proof samples + Content & Locales | Method, color counts, dimensions, title strings, asset checks, conflicts, and sibling-only tuple differences retained. Every raw sample now carries the copy string it was measured on — “AI-Powered Observability and Security”, “Products” / “클라우드 통합 모니터링…”, “Product”/“Pricing”/“Docs”, “Free trial”, “SEE THE PLATFORM”, “Start Free Trial”, “Free Trial”, “Search”, “US (US1, US3, US5)” — and the same strings are listed in portable Content & Locales. |

## Required final passes

- Fresh F3 B2/B2a audit: completed across every portable sentence; surface scope, biography retention, semantic reconciliation, component-padding placement, the four restored type-hierarchy readings, and the three under-named interaction-kind judgments now carry adjacent complete qualifiers.
- Fresh F3 E1/E2/E2a–c audit: all 25 disposition rows were re-grepped against `DESIGN.md`, `provenance.md`, and this log in the wave-19 revision. The earlier pass recorded this check while six verbatim copy strings were in fact unmigrated, so the rows it covered were re-verified string by string rather than re-asserted. Freshness and the exact unpromoted responsive claims remain provenance-only; the YAML typography/components, §3, §4, §10, §15, and `.verification.md` rows now state their actual dual destinations.
- D1 re-check: the Scope negative claim was re-read against the source vocabulary. `native-client` appears nowhere in `web/references/datadog/DESIGN.md` or `.verification.md`, so that enumerand was deleted from Scope and from the Named gaps entry; no substitute wording was introduced.
- E3: no gate false positive was observed; no token, hex, URL, fractional value, curve, state label, or source wording was distorted for gate behavior.

## Wave 19 revision

Restored six verbatim verified copy strings (“Products”, “Free trial”, “SEE THE PLATFORM”, “Start Free Trial”, “Free Trial”, plus the §10 CTA mode strings) with the legacy §4 `use` labels, reverted the “inspect the platform” paraphrase, deleted the source-absent `native-client` domain from both negative claims, recovered the `motion-fast` token name, restored the §3 type-hierarchy prose, and realigned every overstated log row with its actual disposition.
