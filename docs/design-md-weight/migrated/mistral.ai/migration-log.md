# Mistral AI migration log

Source: `web/references/mistral.ai/DESIGN.md`
Sibling read (not the migration input): `web/references/mistral.ai/.verification.md`
Destination: `docs/design-md-weight/migrated/mistral.ai/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/mistral.ai/provenance.md`
Date: 2026-09-02
Worker: grok-4.6 T2
Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v12**
Not a catalog-adoption claim. Gate output is recorded below as a run result, not as evidence of semantic adequacy (E2c).

Every destination count below was checked with `grep -oF` / a Python substring scan against the three output files before it was written (F2). Counts use per-file match lists, never a remembered count.

Source SHA-256 `2cd0fbdf7f16d0b7c030aecac3cf2937a71ec40637753c6acc4e54e9248f08bf` (`web/references/mistral.ai/DESIGN.md`). Sibling SHA-256 `725fa1ec475635578f2429a7abd250e341f32644fabe91a063b8a80487838ddb` (`web/references/mistral.ai/.verification.md`).

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (`id`, `name`, `country`, `category`, `homepage`, `primary_color`, `logo`) | 분리 → provenance; `homepage` 옮김 → Experience Scope; catalog `primary_color` 옮김 → Scope + Semantic Foreground; `logo.type` / `slug` 옮김 → Typography & Assets + provenance | Portable file has no frontmatter. H1 is `# Mistral AI Design System`. Identity table `provenance.md`. YAML homepage `https://mistral.ai` DESIGN dest 9 / provenance dest 29 as the `https://mistral.ai` prefix (E2a). Catalog `#000000` DESIGN dest 9 / provenance dest 9 (E2a). Logo type `simpleicons` DESIGN dest 2 / provenance dest 4; slug `mistralai` DESIGN dest 1 / provenance dest 3 (E2a). |
| YAML `omd: "0.1"`, `verified`, `verification_v2`, token claims, `tokens.source: reconciled`, `tokens.extracted`, `components_harvested: true`, `ds.*` | mixed: `omd` / `verified` / `verification_v2` / `extracted` / `components_harvested` / `tokens.source` YAML keys / `ds.*` 분리 → provenance; `ds.url` also 옮김 → Experience Scope / Assets | `tokens.source: reconciled` YAML key is provenance-only (A1c). `reconciled` DESIGN dest 0 / provenance dest 7. `components_harvested` DESIGN dest 0 / provenance. `ds.type: brand` DESIGN dest 0 / provenance dest 2 (A1c). `ds.og_image` provenance-only. `ds.url` https://mistral.ai/brand/ dual Scope / Assets + provenance (E2a). Footer Verified 2026-07-13 provenance freshness only. `verification_v2.schema: 2` provenance Identity + Claim ledger + Proof notes. |
| YAML `tokens.colors` (4 keys) | 옮김 → Foundations semantic color · 분리 → provenance claim ledger | `tokens.colors.foreground` `#000000` (catalog `primary_color`) unmerged from YAML `tokens.components.pricing-plan.fg` `#000000` and from §4 `oklch(0.21 0.006 285.885)`. `tokens.colors.border` `#e4e3de` unmerged from quantity-input `1px solid oklch(0.21 0.006 285.885)`. `tokens.colors.surface-brand-primary` `#fbfbf8` unmerged from `tokens.colors.surface-brand-secondary` `#f5f4ef`. `#000000` DESIGN dest 9 / P dest 9. `#e4e3de` DESIGN dest 10 / P dest 3. `#f5f4ef` DESIGN dest 5 / P dest 1. `#fbfbf8` DESIGN dest 4 / P dest 1 (E2a). |
| YAML `tokens.typography.family` Inter / ALTMistral / Space Mono | 옮김 → Typography Family | `Inter` YAML `family.ui`. `ALTMistral` YAML `family.display`. `Space Mono` YAML `family.mono`. Loaded URLs dual Family + provenance Sources (E2a). |
| YAML `tokens.typography.*` metrics + `use` | 옮김 → Type roles table | YAML unitless `lineHeight` `1.5` / `1.07` / `1.45` 비율 보존 (A1a) beside §3 `24px` / `60px` / `16px`. YAML tracking `0.16` / `-0.56` beside §3 `0.16px` / `-0.56px`. YAML `use` four strings land verbatim. §3-only Marketing heading `44px` / `52px` / `-0.44px` and Compact link/label `14px` / `20px` / `0.28px` kept (wave 37 longer form). Full key paths `tokens.typography.body.size` through `tokens.typography.eyebrow.use` named in Type roles. |
| YAML `tokens.spacing` (`xs: 2` … `xl: 24`) | 옮김 → Foundations Spacing + Layout | Exact `tokens.spacing.xs: 2` DESIGN dest 2. Unitless steps kept unitless. Source §5 2px / 4px / 8px / 16px / 24px cluster and highest-frequency 16px / 8px / 4px kept beside YAML keys, not merged with rounded or type `16`. |
| YAML `tokens.rounded` (`sharp: 0` / `sm: 4` / `md: 6` / `lg: 8`) | 옮김 → Foundations Shape | Exact `tokens.rounded.sharp` DESIGN dest 1 / P dest 1. Harvested `0px` / `6px` stay on the components that record them. `tokens.rounded.sm: 4` is not `tokens.spacing.sm: 4`. `tokens.rounded.lg: 8` is not `tokens.spacing.md: 8`. |
| YAML `tokens.components.pricing-plan` `type: card` | 옮김 → Components Primary-surface plan shell | Exact `tokens.components.pricing-plan.type` DESIGN dest 1. Primitive type: `card` (A1b). YAML `fg` `#000000` kept beside §4 text `oklch(0.21 0.006 285.885)`. Kind omitted (C4). Use `Pricing-plan shell` DESIGN dest 2. |
| YAML `tokens.components.disabled-compact-control` `type: button` | 옮김 → Components Disabled compact control | Exact `tokens.components.disabled-compact-control.type` DESIGN dest 1. Primitive type: `button` (A1b). YAML `states` `disabled DOM state observed` DESIGN dest 1. `rgba(7, 7, 11, 0.1)` DESIGN dest 2 / provenance dest 2 (E2a). `oklch(0.552 0.016 285.938)` DESIGN dest 2 / provenance dest 2 (E2a). Loading/error/success fields omitted (C2 unresolved request/outcome). |
| §1 Visual Theme & Atmosphere | 옮김 → Experience Scope + Distinctive traits | Scope bound / atmosphere keep `frontier models, developer tools, applications, and compute`, `born in 2023`, `restrained, almost editorial web chrome`, `not a product-app audit`, `pixel-cat emblem`, `artwork is not promoted into the live UI palette without a computed source`. Distinctive traits keep Structured neutrality / Type as contrast / Asset/UI boundary. Adjacent complete qualifier on each Scope paragraph and on Distinctive traits (B2/B2a). |
| §1 / footer / §11 공식 URL | 분리 → provenance; live home/pricing/brand/font URLs는 본문에도 | Dual (E2a): `https://mistral.ai/` and `https://mistral.ai/pricing/` are Scope + provenance Surfaces/Sources/Tier 1. Brand URL dual Scope/Assets + provenance. About / Careers URLs provenance-only as URLs; their facts restated in Scope / Content. `https://docs.mistral.ai/` dual Font evidence + provenance. |
| §2 Color Palette & Roles | 옮김 → Foundations semantic color | Four YAML hexes. Unmerged-role extra characterizations have adjacent complete B2a. Success / warning / error / dark-mode / focus / hover color are source-stated omitted (Semantic + Named gaps), not a new negative domain (D1). |
| §3 Typography Rules | 옮김 → Typography & Assets | Font evidence-class B2a including Inter 632 / ALTMistral 560 / Space Mono 38. Source Sans 3 seven `@font-face` / consent-provider / zero visible uses kept. Licence boundary kept. YAML unitless ratios preserved (A1a). |
| §4 Component Stylings | 옮김 → Components & States + Primary tasks | Seven records. YAML primitive types only on pricing-plan (`card`) and disabled-compact-control (`button`) (A1b). Five §4-only components: Primitive type not in the token set. Source §4 capture selectors dual portable Use + provenance Capture selectors (E2a). Named Focus 없음; focus-visible 행에 hex 없음 (B1). Three shells omit kind (C4). |
| Footer **Verified** / **Tier 1** / **Tier 2** / **Conflicts** / Legacy claims | mixed: freshness 분리 → provenance; live URLs는 portable에도 | Dual (E2a) for the two inspected URLs and brand/font URLs. Footer verified 2026-07-13 provenance only. `Legacy claims were rolled back where absent from current Tier 1 evidence.` DESIGN dest 0 / provenance dest 1. getdesign purple / DM Serif / JetBrains Mono / 8px-button / 12px-card dual Avoid/Named gaps + provenance. Refero internal-error string provenance-only (E1). |
| §5 Layout Principles | 옮김 → Layout & Platforms + Foundations spacing/shape | Observed public-web rhythm 2px/4px/8px/16px/24px, highest-frequency 16px/8px/4px, no sitewide max width / grid / authenticated-product layout (Layout). Adjacent complete B2a (B2/B2a). |
| §6 Depth & Elevation | 옮김 → Foundations elevation | Representative pricing plans, rows, tabs, and inputs `box-shadow: none`. No global shadow scale, modal elevation, overlay treatment, or animation layer. Elevation limiter (B2/B2a). |
| §7 Do's and Don'ts | mixed: Do 옮김 → Experience application rules; Don't 옮김 → Experience avoid | Capture-bound grouping of §7 Do’s and unique §9 constraints has adjacent complete B2a. Avoid named Don’ts 인접 완전 B2a. Unique §9 quiet `#fbfbf8` or `#f5f4ef` / square list and pricing-plan shells / 6px segmented container / do not recreate product, documentation, or brand artwork kept at Application rules. |
| §8 Responsive Behavior | 옮김 → Layout & Platforms | Only supplied desktop public-surface evidence; horizontally scrollable pricing navigation shell and responsive utility classes in markup; does not establish breakpoints, mobile navigation behavior, touch-target policy, reflow rules, or an authenticated-product responsive contract. Invented breakpoint widths were not in the source and are not added (D1, A1). |
| §9 Agent Prompt Guide | 삭제; unique constraints already in Experience/Foundations/Components | Tool-facing prompt. Every value §9 names was checked against the portable body before deletion (A2, A3). Unique constraints land in Experience Application rules / Avoid; the prompt-wrapper deletion is recorded in provenance Proof notes, not a named Omission ledger. No skill/adapter delegation. `omd-apply` / `npx omd` DESIGN dest 0. |
| §10 Voice & Tone | 옮김 → Content & Locales | Official-writing characterization + tone table + three verbatim samples. Adjacent complete B2a on voice and on samples (B2/B2a). Both writings of everyone’s / everyone's kept. HTML comments `official about page, 2026-07-13` / `official careers page, 2026-07-13` kept beside the samples. |
| §11 Brand Narrative | 옮김 → Experience Scope; 서사 원장 분리 → provenance | April 2023 founding / co-founders / openness, transparency, cost efficiency, responsibility, and user control / present offer / enterprise and government work / pixel-cat / controlled gradient and monochrome logo variants / colorful small-scale model illustrations / closing sentence `Those assets explain the brand’s visual identity, while the token layer above remains limited to the current captured public pages` restated in portable Scope under adjacent complete B2a (A1, B2/B2a). Whole paragraph including the last sentence. About / Careers URLs are provenance only. |
| §12 Principles — 4 items | 옮김 → Experience principles | Four stems under the B2a form, including UI implications. Governance 일반 문구는 그 한정의 대체물이 아님 (B2/B2a, E1). |
| §13 Personas — three evidence-based groups | mixed: 공개 자료 stakeholder groups만 Audience; 가상 biography 없음·sidecar 재수록 없음 | Source header: official material identifies stakeholder groups rather than named user personas; evidence-based groups, not fictional profiles. Groups and their source-written expansions land in portable Audience. No name, age, or city is written in DESIGN or provenance (D2, D2a). Primary tasks dests are captured surfaces/controls under adjacent complete B2a as not-from-the-stakeholder-group-section. Audience items grepped in source: Enterprise and government teams src 1 / dst 1; Developers and product builders src 1 / dst 1; Research, product, and engineering collaborators src 1 / dst 1. |
| §14 States | 옮김 → Components & States capture record + per-component applicability | 본문 보존: one disabled compact control at `pricing::[data-omd-capture="75"]`; does not supply empty, loading, success, error, validation, toast, dialog, or skeleton states; intentionally omitted rather than inferred (A2). `not captured` / `not named`를 `not-applicable` 사유로 쓰지 않음 (C1). Header control and expandable/list row L/E/S role-based not-applicable (C2). Quantity input error applicable; loading/success not-applicable by field role. Disabled compact control L/E/S omitted (C2). Three shells kind omitted (C4). focus-visible 행에 hex 없음 (B1). graph 위임 없음. State coverage 완료 주장 없음 (C3). |
| §15 Motion & Easing | 옮김 → Foundations motion | No computed transition duration, easing token, motion rule, or reduced-motion behavior; class names that include transition utilities are not a measured motion specification. 무출처 커브 없음 — provenance omitted-curves records that absence (E2b). Foundations Motion은 B3 다섯 증거 종류(transition properties · animation name · duration · easing · reduced-motion behavior)를 컴포넌트별 computed 관측한 뒤에만 승격한다는 게이트를 전문 명시. “공식 출처로 검증될 때까지” 약화 문구는 쓰지 않음 (B3, E2c). Named gaps lists the five kinds in inventory form; the B3 full promotion-gate paragraph is Foundations Motion only. |

## Sibling handling (`web/references/mistral.ai/.verification.md`)

The sibling exists — confirmed with `find web/references/mistral.ai -name '.verification.md'`. It is a separate canonical file, not the migration input, so nothing in it was used to establish a portable body fact that the source body does not already record.

- Its full record is transcribed at provenance Proof / Sibling handling and is **not** promoted into `DESIGN.md`.
- Values it carries that the visible source body does not: method Playwright collector; bundle counts `surfaceCount: 3` / `score: 85` / `componentTypes: 6` / `componentVariants: 38` / `observedStates: 1`; rgb writings `rgba(0, 0, 0, 0)` / `rgb(0, 0, 0)` / `rgb(228, 227, 222)` / `rgb(245, 244, 239)` / `rgb(251, 251, 248)`; sibling-only selector `home::[data-omd-capture="18"]` linked content row; eyebrow extra geometry radius `4px` / padding `4px 8px`; plan-shell border writing `1px 0px 1px 1px`; ALTMistral “12 Mistral-hosted” count; `fonts.axept.io`. Measured `DESIGN.md` 0 for those sibling-only strings.
- Hexes, Inter / ALTMistral / Space Mono, the two Tier 1 URLs, component geometry, and the issued voice samples also stand in the source body and are corroboration.

## A5 / A5a verification

The gate's `copy-loss` needles come only from contiguous non-Latin runs of four characters or more inside quotations. A hand sweep of published copy is mandatory when `compared < candidates`.

| Sweep | Extracted | Missing from `DESIGN.md` + `provenance.md` | Published copy among the missing | Handling |
|---|---:|---:|---:|---|
| Issued EN product strings (mission, about, careers samples) | 3 distinct | 0 | 0 | Portable; HTML comments kept |
| YAML `use` strings | 6 | 0 | 0 | All 6 land verbatim |
| Brand-issued Latin labels / family names | `Inter`, `ALTMistral`, `Space Mono`, `Source Sans 3`, `Mistral AI` | 0 | 0 | Portable |
| Sibling published strings | 0 sibling-only issued labels that the source body lacked | 0 | 0 | Sibling adds collector method, `rgb()` forms, capture `18`, and getdesign/refero lookup strings (third-party lookup, not issued copy) |

A5 분모: hand sweep issued EN 3/0; YAML use 6/0; brand-issued Latin labels 5/0; sibling published 0 additional issued labels. Font-stack fragments and getdesign lookup strings are not needles (A5a). Gate `copy-loss` `compared` 0 / `candidates` 108, so A5a was mandatory. `verdict` below is a gate run result only.

## State applicability (C2)

Judged by role meaning, not by primitive name and not by capture completeness.

- Public header control (`Header controls and compact links`): loading / error / success `not-applicable` as a header control / compact link that does not perform a request-commit. Reason cells do not say `not captured` (C1).
- Expandable/list row: loading / error / success `not-applicable` as disclosure, not a request-commit.
- Pricing number input: error `applicable` (quantity field); loading / success `not-applicable` on the field role.
- Disabled compact control (`type: button`): loading / error / success omitted because exact request/outcome mapping is unresolved, not closed from a missing capture (C2).
- Primary-surface plan shell / Secondary-surface plan shell / Pricing navigation container: kind omitted (C4).

## F1 B2a scan (full DESIGN.md reread)

Auditor F1 dest maps are this session’s greps (`grep -oF | wc -l`, per file). Completeness is not a current-class claim (E2c). Adjacent complete B2a sites match `provenance.md` Derived editorial inventory (23 portable-body qualifications / 23 inventory rows at 185–207): Scope bound; Scope atmosphere; Scope brand narrative; Primary tasks; Audience; Distinctive traits; Principles; Application rules; Avoid (Don't list + Agent Prompt Guide prohibition + independent-analysis exclusion); Semantic color; Spacing; Shape; Elevation; Motion; Font evidence; Family; Type roles (including two YAML size-16 type roles kept on their own paths); Assets; Capture record (including generic Focus ≠ `focus-visible`, disabled-compact loading/error/success omitted at the unresolved-request boundary, and the source state contract kept here while the catalog graph is not adopted); Layout & Platforms (including the segmented container as local captured geometry); Content voice; Content samples (including packet surface naming); Named gaps. Governance Authority / priority / unknowns / changes are the controlled Core copy; they are not reconstruction readings and are not wrapped. Semantic bullets are covered by the unmerged-role limiter. Distinctive bullets are covered by the traits limiter. Principles 1–4 are covered by the four-item limiter. This is not a claim that no unqualified sentence remains (E2c).

## F2 grep (this session; value + field/role context)

Auditor F2 remasure after B2a folds (three files: DESIGN.md, provenance.md, migration-log.md). Counts are `grep -oF -- <pat> <file> | wc -l` per file. Log mentions are not use.

- Catalog `primary_color` `#000000` → DESIGN dest 9 / provenance dest 9
- `#e4e3de` → DESIGN dest 10 / provenance dest 3
- `#f5f4ef` → DESIGN dest 5 / provenance dest 1
- `#fbfbf8` → DESIGN dest 4 / provenance dest 1
- `oklch(0.21 0.006 285.885)` → DESIGN dest 8 / provenance dest 4
- `oklch(0.552 0.016 285.938)` → DESIGN dest 2 / provenance dest 2 (Capture selectors + Proof sample)
- `rgba(7, 7, 11, 0.1)` → DESIGN dest 2 / provenance dest 2 (Capture selectors + Proof sample)
- Catalog logo type `simpleicons` DESIGN dest 2 / provenance dest 4; slug `mistralai` DESIGN dest 1 / provenance dest 3 → Assets + provenance identity
- Homepage `https://mistral.ai` prefix DESIGN dest 9 / provenance dest 29. Scope also names `https://mistral.ai/` DESIGN dest 8 / provenance dest 25 and `https://mistral.ai/pricing/` DESIGN dest 2 / provenance dest 6
- YAML `use` strings → Type roles + component Use + Primary tasks
- `Primitive type: \`card\`` → Primary-surface plan shell. `Primitive type: \`button\`` → Disabled compact control. Five §4-only components: not in the token set
- YAML spacing `tokens.spacing.xs: 2` DESIGN dest 2 → Spacing + Layout
- YAML `rounded` sharp DESIGN dest 1 / provenance dest 1; sm / md / lg → Shape
- B3 five-kind gate → Foundations Motion. Named gaps lists those five kinds in inventory form; it is not the B3 full promotion-gate paragraph
- Cubic-bezier values absent from DESIGN.md and from the source DESIGN.md. provenance omitted-curves records that absence
- YAML unitless lineHeight `1.5` / `1.07` / `1.45` → Type roles
- Source-named capture selectors → dual portable Use + provenance Capture selectors. Sibling capture `18` stays on provenance (DESIGN dest 0)
- Persona names/ages and fictional biographies absent from DESIGN.md and provenance. Stakeholder groups only at Audience
- `box-shadow: none` → Elevation DESIGN dest 2 / provenance dest 1
- `ds.type: brand` → provenance Identity DESIGN dest 0 / provenance dest 2
- `verification_v2.schema: 2` → provenance Identity + Claim ledger + Proof notes DESIGN dest 0 / provenance dest 4
- `omd-apply` / `npx omd` DESIGN dest 0. Placeholder class mentioned only in provenance as a check label (mention, not use); portable DESIGN.md dest 0
- `Legacy claims were rolled back` → provenance only DESIGN dest 0 / provenance dest 1
- April 2023 DESIGN dest 2 / pixel-cat emblem DESIGN dest 4 / Source Sans 3 DESIGN dest 6 / 8px-button DESIGN dest 2 / 12px-card DESIGN dest 2 present in DESIGN
- `focus-visible` DESIGN dest 10 / provenance dest 2 (Capture qualifier names generic Focus ≠ `focus-visible`)
- `reconciled` DESIGN dest 0 / provenance dest 7

Current DESIGN SHA-256 `38911facd9827cd38714fb9c9cff72d648339cefc0cfe538df1255ae9d63447f`. Provenance SHA-256 `23ecf00b283cd153ab3f6d979afc909f94ee0b31ba33c2da7bc4f12af944603f`. `node scripts/migrate-design-md-core.cjs --input docs/design-md-weight/migrated/mistral.ai/DESIGN.md --check --require-portable-core --json` → `conformance.portable_core: true` / `status: pass`. `node test-v2/tools/migrate-reference.mjs --brand mistral.ai --gate-only` → PASS, problems `[]`, copy-loss compared 0 / candidates 108. Command outputs, not catalog adoption (E2c). `node scripts/check-limiter-ledger.mjs mistral.ai` → 본문 23 / 원장 23 (185–207) 1:1 OK.

## Unique-phrase restore (wave 43)

Extracted unique expressions from source §§1–15 + YAML: 127. Zero in DESIGN before restore: 2 (`do not recreate Mistral’s product, documentation, or brand artwork` exact lowercase clause; `tokens.spacing.xs` full path) plus YAML leaf paths (`tokens.typography.body.weight` and siblings), §13 expansions (`high-stakes industries`; `audacity, rigor, customer centricity, speed, and low-ego ownership`; `build or customize AI systems`), §9 opener `For a Mistral-like public commercial page`, and footer `Legacy claims were rolled back` (provenance). Restored: 8 (the two DESIGN zeros, the YAML leaf paths, the three §13 expansions, the §9 opener, and the footer sentence in provenance). Post-restore DESIGN zeros for those needles: 0 except `Legacy claims were rolled back` which remains provenance-only as footer metadata.
