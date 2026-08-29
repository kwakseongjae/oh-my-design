# LayerX provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/layerx/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | layerx |
| name | LayerX |
| country | JP |
| category | fintech |
| homepage | `https://layerx.co.jp` |
| primary_color | `#534DFF` |
| logo.type | favicon |
| logo.slug | `https://www.google.com/s2/favicons?domain=layerx.co.jp&sz=128` |
| omd format (source) | 0.1 |
| verified | 2026-06-06 |
| added | 2026-06-06 |
| tokens.source | prose-derived |
| tokens.extracted | 2026-06-09 |
| components_harvested | true |

The homepage URL is dual-destination: identity metadata here, and the inspected corporate surface in `DESIGN.md` §1. The primary color is dual: identity here (`#534DFF`), and Foundations LayerX Indigo / `tokens.colors.primary` in `DESIGN.md` (YAML spelling `#534dff`). The Google s2 favicon slug is dual: identity here, and a portable Assets classification in `DESIGN.md` §3. There is no `ds.name` / `ds.url` / `ds.type` field in the source frontmatter (A1c: the absence is recorded, not filled).

**Logo decision.** The catalog field is `logo.type: favicon` with a Google s2 proxy URL. That is an identity pointer, not a LayerX-hosted brand file.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-06 |
| added | 2026-06-06 |
| tokens.extracted | 2026-06-09 |

The source footer records the verification verbatim as **Verified:** 2026-06-06 (OmD v0.1). That producer string is ledger metadata and has no portable slot (A1c).

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| corporate | marketing | `https://layerx.co.jp` | 2026-06-06 |
| aggregator-colors | aggregator | brand-color aggregator records named in the source footer | named in source footer |
| bakuraku-product | product | Bakuraku product UI (named; tokens not dumped) | named in source footer / HTML comment |

### Source footer — live production

- https://layerx.co.jp (live production site, verified via live DOM getComputedStyle)

### Source footer — aggregator and unused lookup

- WebSearch (2026-06-06): brand-color aggregator records report primary `#534DFF` (rgb 83,77,255), complementary `#8DBBFF` (sky) and `#152632` (Big Stone navy ink)
- Brandfetch (`https://brandfetch.com/layerx.co.jp`) returned HTTP 403; not used

The source footer Notes: Component geometry (radii 8/12/16, 44px buttons, focus-ring tokens) is a documented modern-SaaS interpretation consistent with the live site's refined corporate styling; exact product-UI tokens for the Bakuraku app were not independently dumped from a public spec and are reasoned, brand-faithful values.

## Token note

The YAML `tokens.source` value is `prose-derived`. `components_harvested` is `true`. Eighteen component records sit in the token set: `button-primary`, `button-secondary`, `button-ghost`, `button-danger`, `input-default`, `input-select`, `card-standard`, `card-featured`, `card-compact`, `badge-brand`, `badge-soft-brand`, `badge-success`, `tab-underline`, `tab-segmented`, `toast-default`, `dialog-modal`, `dialog-drawer`, `toggle-default`.

`tokens.source: prose-derived` is this identity/Claim ledger only as a YAML key (A1c). The portable body does not contain the string `prose-derived`. Portable Scope restates in plain language that the machine-readable value set was drawn from the record's own prose.

## Sibling handling

`web/references/layerx/.verification.md` is present (dotfile; confirmed by `find` on that exact path). Inspected 2026-06-06 by playwright getComputedStyle on `https://layerx.co.jp`. Sibling-only live-computed writings are withheld from the portable body (B1): they are not promoted as LayerX-authored token facts and they do not replace the source's recorded families or Primary geometry. This ledger records the withhold as a disposition, not as a portable token set. The withheld class is the live family `TazuganeGothicStdN-Regular` (the source records Inter / Noto Sans JP), the live primary-button radius/height/weight that disagree with the source Primary record (source Primary is 8px / 44px / 15px / 600, with `lg` 52px as a size-scale row), the live root background, and the live heading size/weight. Shared hexes the source already names (`#152632` ink, `#ffffff` canvas, `#534dff` primary fill) stay on the source's own roles. The sibling's extra classifications — live body at 16px, live link as ink, live primary as a pill 52px/400 — are not copied onto those roles. No sibling-only structural heading classification is adopted into the portable body as a fact.

## Byte-form notes

- Identity `primary_color` is `#534DFF`; YAML `tokens.colors.primary` is `#534dff`. Same hex, two spellings; both keys stay named.
- `tokens.colors.canvas` and `tokens.colors.on-primary` share `#ffffff`. Two keys. The same hex also appears as Secondary / input / card / modal / segmented-active backgrounds and as Primary / toast / toggle-thumb text, under those component keys, not as a third YAML color key.
- YAML color keys include grey-50 through grey-800. Prose writes the same hexes in mixed case (`#F7F8FA` / `#f7f8fa`). Case is not a second token.
- `#3530CC`, `#C9C7F5`, `#CC3B40`, `#E6F6EF`, `#FEF3E2`, `#C77F12`, `#FCE9EA` are source §4 roles with no YAML color key. They stay on those prose roles.
- YAML line heights stay unitless ratios (`1.25`, `1.33`, `1.43`, `1.45`, `1.56`, `1.63`, `1.75`, `1.73`, `1.57`, `1.50`). Amount has no YAML `lineHeight`; prose `tight` stays on that role.
- `tokens.spacing.md: 12` is not the standard-card `12px` radius and not Caption 12. `tokens.spacing.base: 16` is not compact-card padding `16px` and not `tokens.rounded.lg: 16`. `tokens.spacing.lg: 24` is not Amount 24 and not primary-button horizontal padding. `tokens.spacing.xl: 32` is not featured-card / modal padding `32px`. `tokens.spacing.xxl: 48` is not Display Hero 48. `tokens.spacing.section: 96` is not textarea min-height `96px`. The prose common value `64px` has no YAML spacing key.
- `tokens.rounded.sm: 6` is not a spacing step. `tokens.rounded.md: 8` is not `tokens.spacing.sm: 8`. `tokens.rounded.lg: 16` is not `tokens.spacing.base: 16`. `tokens.rounded.full: 9999` is not written as `9999px` except on the toggle record that carries `9999px`. Standard-card `12px` and `lg` button `10px` have no YAML rounded key.
- `tokens.shadow.standard` is `0 4px 16px rgba(21,38,50,0.10)`. Toast shadow is `0 4px 16px rgba(21,38,50,0.16)`. Same blur, different opacity; two writings. Drawer `-8px 0 24px rgba(21,38,50,0.12)` is not `tokens.shadow.elevated` under a different offset.
- YAML `type` is attached only to the eighteen records that have that key. §4-only Text Field (error), Textarea, Soft/Warning badge, and Soft/Danger badge are `not in the token set` and do not receive a Primitive type from YAML.

## Omission ledger

| Omitted | Boundary | Reason |
|---|---|---|
| §13 fictional archetypes | whole fictional-biography class | The source labels its three entries as fictional archetypes informed by publicly described Japanese B2B SaaS user segments, not individual people. They are not promoted to Audience or to `primary-tasks`, and they are not re-hosted here: no name, age, city, or affiliation classification is restated as an item (D2, D2a). Audience in the portable body keeps only the group-level wording the source records independently of that section. |
| Unsourced motion curves | value boundary | Four unsourced curves omitted at the curve-value boundary: `ease-enter` `cubic-bezier(0.0, 0.0, 0.2, 1)`, `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)`, `ease-standard` `cubic-bezier(0.4, 0.0, 0.2, 1)`, `ease-emphasis` `cubic-bezier(0.2, 0.0, 0, 1)`. Durations 0ms / 150ms / 240ms / 360ms / 320ms, the four easing-role Use writings, the four signature motions with recorded duration/easing-role pairs, and the reduced-motion contract stay in Foundations. The omitted curve strings are named in this ledger and in the portable motion omission sentence. |
| §9 tool prompts | tool-facing restatement | Example component prompts and the iteration guide are deleted as tool-facing restatement. Unique brand constraints they name already sit in Experience / Foundations / Components (A2, A3). |

## Claim ledger

| Claim | Surface |
|---|---|
| `tokens.colors.primary` `#534dff` / identity `#534DFF` | aggregator records + corporate fetch of layout |
| `tokens.colors.primary-hover` `#403ae6` | prose-derived |
| `tokens.colors.primary-tint` `#eeedff` | prose-derived |
| `tokens.colors.canvas` / `on-primary` `#ffffff` | corporate canvas + text on indigo |
| `tokens.colors.ink` `#152632` | aggregator records |
| `tokens.colors.sky` `#8dbbff` | aggregator records |
| `tokens.colors.gradient-end` `#7b6cff` | prose-derived |
| `tokens.colors.error` `#e5484d` | prose-derived |
| `tokens.colors.success` `#1fa971` | prose-derived |
| `tokens.colors.warning` `#f5a623` | prose-derived |
| `tokens.colors.info` `#3e63dd` | prose-derived |
| `tokens.colors.grey-50` through `grey-800` | prose-derived |
| `tokens.typography.family.sans` Inter | recorded reconstruction family; fetched markup had no explicit font |
| `tokens.typography.family.mono` SF Mono | figures in financial tables |
| `tokens.typography.display-hero` through `amount` (size, weight, lineHeight, use) | prose-derived type roles |
| `tokens.spacing.xs` through `section` | prose-derived |
| `tokens.rounded.sm` / `md` / `lg` / `full` | prose-derived |
| `tokens.shadow.subtle` / `standard` / `elevated` / `modal` | prose-derived |
| `tokens.components.button-primary` through `toggle-default` (type and recorded fields) | reasoned modern-SaaS geometry, not dumped Bakuraku tokens |
| Published strings すべての経済活動を、デジタル化する / 未来の希望を、実装しよう / バクラク / お問い合わせ / 資料ダウンロード / 無料で始める | source §1 / §4 / §10 / §11 |
| 2018 founding / Bakuraku suite / compound startup / finance and accounting teams / recruiting tagline | source §11 narrative |

## Capture selectors

The source records no collector selectors. Component geometry is conventional prose, not a computed-style capture.

## Proof notes

- Named live source, recorded 2026-06-06: `https://layerx.co.jp` via WebFetch and live DOM getComputedStyle for layout/tone. Fetched markup contained no explicit hex or font. Aggregator records ground `#534DFF` / `#8DBBFF` / `#152632`. Component geometry is reasoned, as the source footer and HTML comment state.
- `components_harvested: true`; eighteen component records in the source token set.
- The source records no `focus-visible` string. The text field's focus border `#534DFF` plus `0 0 0 3px rgba(83,77,255,0.15)` ring is observed Focus, not a color assigned to the `focus-visible` row. Uncaptured hover, pressed, focus, disabled, error, and success treatments are omitted as values unless the source writes them on that same control; they are not turned into `not-applicable` for that reason. Applicability follows control role. State coverage is not claimed complete.
- LayerX/Bakuraku do not publish a public design-token spec. Derived-editorial qualifications therefore close with the toss-form example: not LayerX-authored or a separately published UI specification (rulebook v12 B2a 전제 주석). The example is not used to invent a published spec.
- 2018 founding, the mission line すべての経済活動を、デジタル化する, the Bakuraku suite, the recruiting tagline 未来の希望を、実装しよう as capturing the company's engineer-led, mission-forward identity, the refusal of cramped grey density / consumer playfulness / cold enterprise sterility, and the HTML-comment statement that indigo-as-modern-infrastructure is an editorial reading — are source-stated narrative. They stay in Experience Scope as narrative context, not as interface tokens.

## §9 deletion check

§9 Agent Prompt Guide was deleted as tool-facing restatement. Each unique brand constraint it names was checked against the portable body before deletion (A2, A3):

| §9 item | Portable landing |
|---|---|
| Primary CTA `#534DFF`, white text 15px weight 600, 44px height, 8px radius, 0 24px padding, hover `#403AE6`, focus ring `0 0 0 3px rgba(83,77,255,0.15)` | Components Primary (`DESIGN.md`) |
| Feature card: white bg, 1px `#E3E6EB` border, 12px radius, 24px padding, shadow `0 1px 3px rgba(21,38,50,0.06)`. Heading 22px/700 `#152632`, body 15px/400 `#4A5360`, line-height 1.73 | Foundations + Components Standard Card + Typography Heading 2 / Body |
| Hero 1200px max-width, 96px vertical padding, headline 48px/700 `#152632`, -0.02em, primary + secondary outline | Layout + Typography Display Hero + Components Primary / Secondary |
| Input: white bg, 1px `#E3E6EB`, 8px radius, 11px 14px, 15px `#1F2832`, placeholder `#9AA4B2`, focus `#534DFF` + 3px ring | Components Text Field |
| Soft success badge `#E6F6EF` / `#1FA971`, 6px, 2px 8px, 12px/600, 承認済み | Components Soft / Success Badge |
| Iteration: bilingual stack, `#534DFF` only accent, headings `#152632`, JP 1.7–1.8, radii 8/12/16, navy-tinted shadows, 96px sections | Experience Application rules / Avoid + Foundations |

## Portable derived-editorial scope

Every passage in the portable `DESIGN.md` that carries the derived-editorial qualification. The qualification itself stays in the body; this table is an index, not its home. Measured against `DESIGN.md` with a file-level count of `derived editorial implementation inference`: **49**. This table has **49** rows (E1 1:1). The same 49 lines also carry `not LayerX-authored`.

| Location | Qualified material |
|---|---|
| Experience — Scope ¶2 (`DESIGN.md` 11) | Named corporate / aggregator / reasoned-geometry writings as evidence classes; every value stays attached; aggregator hex is not a dumped Bakuraku token |
| Experience — Scope ¶3 (`DESIGN.md` 13) | Clean / generous / corporate-trustworthy / quietly futuristic / technological-and-human / Big Stone / calm-authority readings |
| Experience — Scope ¶4 (`DESIGN.md` 15) | Classifying the 2018 / mission / Bakuraku / indigo-as-modern / refusal / needle narrative, including the HTML-comment editorial, as context that does not supply tokens |
| Experience — Primary tasks (`DESIGN.md` 21) | Selecting the three surface tasks; refusing to take them from the source's persona section |
| Experience — Audience (`DESIGN.md` 30) | Reading the source-named groups as audience, and dropping archetype biographies rather than promoting them |
| Experience — Distinctive traits (`DESIGN.md` 34) | Classifying the list as a restatement of Key Characteristics, and the groupings and the readings inside them |
| Experience — Principles (`DESIGN.md` 46) | Reading the eight source principles as implementation principles |
| Experience — Application rules (`DESIGN.md` 59) | Grouping the seven Do-list rules, and the reasons attached to them |
| Experience — Avoid (`DESIGN.md` 71) | Grouping the six Don’t-list rules, and the reasons inside them |
| Foundations — Semantic color (`DESIGN.md` 86) | Role-to-path pairing; `#3530CC` / `#C9C7F5` / `#CC3B40` / `#E6F6EF` / `#FEF3E2` / `#C77F12` / `#FCE9EA` stay on prose roles; `canvas` / `on-primary` stay two keys |
| Foundations — Semantic color indigo (`DESIGN.md` 116) | Sole-interactive-accent reading; pressed / disabled / danger-hover stay on prose roles |
| Foundations — Evidence-domain boundary (`DESIGN.md` 127) | Calling the YAML set a lift from prose; four domains do not donate tokens to one another |
| Foundations — Spacing (`DESIGN.md` 144) | Keeping each numeral on its own key path; `64px` stays a prose common value |
| Foundations — Shape (`DESIGN.md` 157) | Keeping `full: 9999` beside toggle `9999px`; `12px` / `10px` stay local |
| Foundations — Elevation (`DESIGN.md` 171) | Competence / consumer-playful readings; toast 0.16 and drawer offset as their own writings |
| Foundations — Motion overshoot (`DESIGN.md` 201) | "Subtle, never bouncy / corporate register forbids overshoot" reading |
| Foundations — Motion gate (`DESIGN.md` 202) | Omitting four unsourced curves; keeping five duration rows as duration tokens; keeping four easing-role Use writings; keeping four signature motions; holding the five-kind promotion gate |
| Typography — Font evidence (`DESIGN.md` 212) | Evidence-class application readings |
| Typography — Family (`DESIGN.md` 231) | Fallback-never-substitute reading; system stack is not Inter |
| Typography — Type roles (`DESIGN.md` 235) | Keeping YAML ratios and §3 px spellings; taking the longer of two writings |
| Typography — Conventions (`DESIGN.md` 251) | 1.7–1.8 as breath; Latin-only display tracking; bilingual density balance |
| Typography — Type roles sizes (`DESIGN.md` 253) | Reading type sizes as roles rather than spacing numerals |
| Typography — Assets favicon (`DESIGN.md` 257) | Catalog-boundary reading of the Google s2 favicon slug |
| Typography — Assets imagery (`DESIGN.md` 258) | Refusing to replace recorded screenshot, illustration, and customer-logo spots with invented brand-color decoration |
| Components — Capture record (`DESIGN.md` 283) | Preserving the source state contract in full; role-based decision procedure; Focus-vs-focus-visible; every interactive-kind and applicability verdict and its reason; kind-omission; refusal to treat this as a complete state-coverage claim |
| Components — Primary (`DESIGN.md` 299) | 0 24px / 8px / lg 10px as this CTA's geometry; longer §4 use that names `お問い合わせ` |
| Components — Secondary (`DESIGN.md` 324) | Reading the pairing as a commit-capable CTA rather than a non-commit pairing |
| Components — Ghost (`DESIGN.md` 348) | Reading `もっと見る` as a destination action rather than an in-place commit |
| Components — Danger (`DESIGN.md` 372) | Hover `#CC3B40` as this control's treatment rather than a YAML color key |
| Components — Text Field (`DESIGN.md` 397) | 11px 14px as this field's padding; observed Focus is not `focus-visible` treatment; standard form field commits no operation in place (loading/success not-applicable, error applicable) |
| Components — Error input (`DESIGN.md` 420) | Red help text stays on this error-input record; invalid-input variant commits no operation in place (loading/success not-applicable) |
| Components — Select (`DESIGN.md` 442) | Single-choice field commits no operation in place (loading/success not-applicable, error applicable) |
| Components — Textarea (`DESIGN.md` 458) | 96px as this field's min-height rather than `tokens.spacing.section: 96`; multi-line field commits no operation in place |
| Components — Standard Card (`DESIGN.md` 480) | 12px radius / 24px padding as this card's geometry |
| Components — Featured Card (`DESIGN.md` 493) | 16px / 32px as this card's geometry; keeping both background writings |
| Components — Compact Card (`DESIGN.md` 506) | 8px / 16px as this card's geometry |
| Components — Brand Badge (`DESIGN.md` 519) | `6px` as this badge's radius; keeping `NEW` / `おすすめ` |
| Components — Success Badge (`DESIGN.md` 544) | `#E6F6EF` / `承認済み` stay on this badge rather than a new YAML key |
| Components — Underline Tab (`DESIGN.md` 582) | Section-navigation tab commits no operation in place |
| Components — Segmented Tab (`DESIGN.md` 604) | View-switching tab commits no operation in place |
| Components — Toast (`DESIGN.md` 628) | 0.16 opacity as this toast's shadow rather than standard 0.10 |
| Components — Dialog (`DESIGN.md` 642) | 16px / 32px as this dialog's geometry |
| Components — Drawer (`DESIGN.md` 663) | Offset as this drawer's geometry; panel is not an in-place commit |
| Components — Toggle (`DESIGN.md` 683) | `9999px` as this toggle's radius rather than a type-role 18; boolean settings / feature-flag toggle commits no in-place loading/error/success operation |
| Layout & Platforms (`DESIGN.md` 698) | Reading the source layout list as the contract rather than a surface-to-surface measurement transfer |
| Layout & Platforms whitespace (`DESIGN.md` 700) | Whitespace-as-trust / product-density readings |
| Layout & Platforms targets (`DESIGN.md` 715) | Reading 44 / 36 / 24 / 40 / 12 as the roles named beside them |
| Content & Locales — voice (`DESIGN.md` 720) | Calling the register calm confidence / mission-driven / precise; refusing to treat it as a separately published microcopy guide |
| Governance — Named gaps (`DESIGN.md` 768) | Reading the list as unnamed values, not as coverage of domains the source never named |
