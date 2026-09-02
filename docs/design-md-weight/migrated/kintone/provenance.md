# kintone provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/kintone/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | kintone |
| name | kintone |
| country | JP |
| category | productivity |
| homepage | `https://kintone.cybozu.co.jp` |
| primary_color | `#ef3f24` |
| logo.type | favicon |
| logo.slug | `https://www.google.com/s2/favicons?domain=kintone.cybozu.co.jp&sz=128` |
| omd format (source) | 0.1 |
| verified | 2026-06-06 |
| added | 2026-06-06 |
| tokens.source | prose-derived |
| tokens.extracted | 2026-06-09 |
| components_harvested | true |

The homepage URL is dual-destination: identity metadata here, and the inspected marketing surface in `DESIGN.md` §1. The primary color is dual: identity here, and Foundations KIN Red / the primary CTA in `DESIGN.md`. The Google s2 favicon slug is dual: identity here, and a portable Assets classification in `DESIGN.md` §3. There is no `ds.name` / `ds.url` / `ds.type` field in the source frontmatter (A1c: the absence is recorded, not filled).

**Logo decision.** The catalog field is `logo.type: favicon` with a Google s2 proxy URL. That is an identity pointer, not a kintone-hosted brand file.

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
| marketing | marketing | `https://kintone.cybozu.co.jp` | 2026-06-06 |
| brand-guidelines | brand | `https://kintone.com/en-us/files/Brand-Guidelines.pdf` | named in source footer |
| product-ui | product | live kintone product UI (derived neutrals and geometry) | named in source footer |
| help | docs | kintone Help theme/header color docs | named in source footer |

### Tier 1 (as listed in the source footer)

- kintone.cybozu.co.jp (live marketing site — white canvas, KIN Red CTAs, みんな、つくれる tagline)
- Kintone Brand Guidelines PDF (`kintone.com/en-us/files/Brand-Guidelines.pdf` — KIN Red `#ef3f24` Pantone 485, secondary palette Shamrock `#3fa862` / Cerulean `#00afec` / Aloe `#00afaa` / Sunshine `#ffba00`)
- https://kintone.cybozu.co.jp (live production site)

### Tier 2

- kintone Help (theme/header color docs — default red header theme, admin re-theming)
- community font references (Meiryo default UI font, Hiragino/Noto Sans JP fallbacks)

The source footer Notes: Neutral gray scale and component geometry (radii, padding, shadows) are derived from the live kintone product UI and marketing site; named brand hues and primary red are sourced directly from the official Brand Guidelines.

## Token note

The YAML `tokens.source` value is `prose-derived`. `components_harvested` is `true`. Seventeen component records sit in the token set: `button-primary`, `button-outline`, `button-neutral`, `button-text`, `button-danger`, `input-text`, `input-error`, `card`, `card-tile`, `badge-neutral`, `badge-success`, `badge-info`, `badge-danger`, `tab-underline`, `toast`, `dialog`, `toggle`.

## Sibling handling

`web/references/kintone/.verification.md` exists. Sibling-only live-computed writings from the 2026-06-06 playwright pass on `https://kintone.cybozu.co.jp` are recorded here and are not promoted into the portable body (B1):

- body text: color `#231200`, font 16px, family Roboto
- page background: `#ffffff` (also in the source token set)
- root background: `#000000`
- heading: color `#231200`, font 16px / 700, family Roboto
- primary button: color `#231200`, background `#333333`, border-radius 8px, height 64px, font 16px / 400
- link: color `#231200`

Those sibling-only values stay in this ledger. They are mention of a withheld inspect, not a restatement of token values (E2d: this paragraph names the inspect; it does not claim the values are absent from this file).

## Byte-form notes

- YAML color keys include two-key same-hex pairs: `primary`/`brand` `#ef3f24`; `canvas`/`on-primary` `#ffffff`; `accent-green`/`success` `#3fa862`; `accent-cerulean`/`info` `#00afec`; `accent-sunshine`/`warning` `#ffba00`. Both keys of each pair stay named.
- `#bbbbbb`, `#e8e8e8`, `#fafafa` are source §2 roles with no YAML color key. They stay on those prose roles.
- YAML line heights stay unitless ratios (`1.3`, `1.35`, `1.4`, `1.45`, `1.5`, `1.7`, `1.65`, `1.6`, `1.0`).
- `tokens.spacing.md: 12` is not `tokens.rounded` and not Caption 12. `tokens.spacing.base: 16` is not card-tile padding `16px` and not a type-role 16. `tokens.spacing.lg: 20` is not Standard Card padding `20px`. `tokens.spacing.xl: 24` is not dialog padding `24px`. `tokens.spacing.section: 64` is not a type size. The prose common value `40px` has no YAML spacing key.
- `tokens.rounded.sm: 4` is not `tokens.spacing.xs: 4`. `tokens.rounded.md: 6` is not a spacing step. `tokens.rounded.lg: 8` is not `tokens.spacing.sm: 8`. `tokens.rounded.full: 9999` is not the status-pill `12px` and is not written as `9999px` except on the toggle record that carries `radius: 9999px`.
- `tokens.shadow.raised` is `0 4px 12px rgba(0,0,0,0.12)`. `tokens.shadow.elevated` is `0 4px 12px rgba(0,0,0,0.18)`. Same blur, different opacity; two keys.
- YAML `type` is attached only to the seventeen records that have that key. §4-only Textarea, Select, Flat Section, Data Table, Warning pill, Success Banner, and Checkbox are `not in the token set` and do not receive a Primitive type.

## Omission ledger

| Omitted | Boundary | Reason |
|---|---|---|
| §13 fictional archetypes | whole fictional-biography class | The source labels its four entries as fictional archetypes informed by publicly described kintone user segments, not individual people. They are not promoted to Audience or to `primary-tasks`, and they are not re-hosted here: no name, motivation, or affiliation classification is restated as an item (D2, D2a). Audience in the portable body keeps only the group-level wording the source records independently of that section. |
| Unsourced motion curves | value boundary | Three catalog-template curves omitted at the curve-value boundary: `ease-enter` `cubic-bezier(0.0, 0.0, 0.2, 1)`, `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)`, `ease-standard` `cubic-bezier(0.4, 0.0, 0.2, 1)`. Durations 0ms / 150ms / 250ms / 350ms, the four signature motions, and the reduced-motion contract stay in Foundations. |
| Sibling live-computed Roboto / `#231200` / 64px button | inspect not adopted | Sibling-only measurements from `.verification.md`. Not promoted (B1). |

## Claim ledger

| Claim | Surface |
|---|---|
| `tokens.colors.primary` / `brand` `#ef3f24` | Brand Guidelines + marketing CTAs |
| `tokens.colors.primary-hover` `#d63b22` | prose-derived product CTA hover; also destructive emphasis |
| `tokens.colors.canvas` / `on-primary` `#ffffff` | marketing canvas + text on KIN Red |
| `tokens.colors.foreground` `#333333` | marketing / product text |
| `tokens.colors.muted` `#666666` | prose-derived |
| `tokens.colors.surface` `#f5f5f5` | prose-derived |
| `tokens.colors.hairline` `#dddddd` | prose-derived |
| `tokens.colors.body` `#555555` | prose-derived |
| `tokens.colors.placeholder` `#999999` | prose-derived |
| `tokens.colors.accent-green` / `success` `#3fa862` | Brand Guidelines Shamrock |
| `tokens.colors.accent-cerulean` / `info` `#00afec` | Brand Guidelines Cerulean |
| `tokens.colors.accent-aloe` `#00afaa` | Brand Guidelines Aloe |
| `tokens.colors.accent-sunshine` / `warning` `#ffba00` | Brand Guidelines Sunshine |
| `tokens.colors.error` `#e74c3c` | prose-derived |
| `tokens.typography.family.sans` Meiryo | Tier 2 community font references |
| `tokens.typography.family.mono` SFMono-Regular | code fields, formula display |
| `tokens.typography.display-hero` through `button` (size, weight, lineHeight, use) | prose-derived type roles |
| `tokens.spacing.xs` through `section` | prose-derived |
| `tokens.rounded.sm` / `md` / `lg` / `full` | prose-derived |
| `tokens.shadow.subtle` / `raised` / `elevated` / `modal` | prose-derived |
| `tokens.components.button-primary` through `toggle` (type and recorded fields) | prose-derived product-UI / marketing geometry |
| Published strings キントーン / みんな、つくれる / 無料ではじめる / 保存 / アプリを作る | source §1 / §4 / §10 / §11 |
| 1997 founding / 2011 launch / サイボウズ株式会社 / チームワークあふれる社会を創る / Excel-and-SIer insight / US and Southeast Asia / refusal pair / closing embrace sentence | source §11 narrative |

## Capture selectors

The source records no collector selectors. Component geometry is conventional prose, not a computed-style capture.

## Proof notes

- Named Tier 1 sources, recorded 2026-06-06: marketing site and Brand Guidelines PDF. Product-UI neutrals and geometry are derived, as the source footer states.
- `components_harvested: true`; seventeen component records in the source token set.
- The source records no `focus-visible` string. The text field's focus border `#00afec` plus `0 0 0 2px rgba(0,175,236,0.15)` ring is observed Focus, not a color assigned to the `focus-visible` row. Uncaptured hover, pressed, focus, disabled, error, and success treatments are omitted as values unless the source writes them on that same control; they are not turned into `not-applicable` for that reason. Applicability follows control role. State coverage is not claimed complete.
- kintone has a published Brand Guidelines PDF for named hues. That file is a brand-guidelines source, not a published UI specification. Derived-editorial qualifications therefore close with the toss-form example: not kintone-authored or a separately published UI specification (rulebook v12 B2a 전제 주석). The example is not used to deny the Brand Guidelines.
- 1997 founding, the 2011 launch, Cybozu Office and Garoon, the mission line チームワークあふれる社会を創る, the Excel-and-SIer founding insight, the US and Southeast Asia span, the refusal of gatekept IT-only aesthetic / cold blue / intimidating interfaces, and the source §11 closing sentence — "What it embraces: warmth, modularity, plain language, and the conviction that the people closest to the work are the ones who should be able to build the tools for it." — are source-stated narrative. They stay in Experience Scope as narrative context, not as interface tokens.

## §9 deletion check

§9 Agent Prompt Guide was deleted as tool-facing restatement. Each unique brand constraint it names was checked against the portable body before deletion (A2, A3):

| §9 item | Portable landing |
|---|---|
| Primary CTA `#ef3f24`, white text 14px weight 700, 4px radius, 10px 24px padding, hover `#d63b22`, Meiryo stack | Components Primary (`DESIGN.md`) |
| Record form field: bold label 13px/700 `#333333` above text input white / 1px `#dddddd` / 4px / 8px 10px / 14px `#333333`; focus `#00afec` + 2px ring | Typography Label/Body + Components Text Field |
| App tile 8px radius, colored or white, rounded-square icon, app name 14px weight 700 `#333333`, shadow lift | Components App Tile (A3: app-name pairing landed here) |
| Data table `#f5f5f5` header, `#555555` 13px/700, `#dddddd` horizontal rules, 8px 12px cell padding, 13px `#333333`, `#fafafa` row hover | Components Data Table |
| Status pill success `#e7f5ed` / `#3fa862`; info `#e6f7fd` / `#00afec` | Components Success / Info pills |
| Iteration: KIN Red primary, Meiryo 1.7, bold labels, radius 4/6/8/pill, `#dddddd` borders, one or two named hues, destructive `#e74c3c`/`#d63b22` | Experience Application rules / Avoid + Foundations |

## Portable derived-editorial scope

Every passage in the portable `DESIGN.md` that carries the derived-editorial qualification. The qualification itself stays in the body; this table is an index, not its home. Measured against `DESIGN.md` with a file-level count of `derived editorial implementation inference`: **41**. This table has **41** rows (E1 1:1). The same 41 lines also carry `not kintone-authored` and `separately published UI specification`.

| Portable location | Qualified material |
|---|---|
| Experience — Scope ¶1 (`DESIGN.md` 9) | Named marketing / Brand Guidelines / product-UI / Help surfaces as evidence classes; every value stays attached; Brand Guidelines hues are not a substitute for product-UI geometry |
| Experience — Scope ¶2 (`DESIGN.md` 11) | Approachable / Japanese-flag-red / building-blocks / Japanese-first-legibility readings |
| Experience — Scope ¶3 (`DESIGN.md` 13) | Classifying the 1997 / 2011 / mission / Excel-SIer / refusal / embrace narrative, including the closing sentence, as context that does not supply tokens |
| Experience — Primary tasks (`DESIGN.md` 19) | Selecting the three surface tasks; refusing to take them from the source's persona section |
| Experience — Audience (`DESIGN.md` 28) | Reading the source-named groups as audience, and dropping archetype biographies rather than promoting them |
| Experience — Distinctive traits (`DESIGN.md` 32) | Classifying the list as a restatement of Key Characteristics, and the groupings and the readings inside them |
| Experience — Principles (`DESIGN.md` 44) | Reading the eight source principles as implementation principles |
| Experience — Application rules (`DESIGN.md` 57) | Grouping the eight Do-list rules, and the reasons attached to them |
| Experience — Avoid (`DESIGN.md` 70) | Grouping the seven Don’t-list rules, and the reasons inside them |
| Foundations — Semantic color (`DESIGN.md` 86) | Role-to-path pairing; `#bbbbbb` / `#e8e8e8` / `#fafafa` stay on prose roles; two-key same-hex pairs `primary`/`brand`, `canvas`/`on-primary`, `accent-green`/`success`, `accent-cerulean`/`info`, `accent-sunshine`/`warning` stay named rather than collapsed |
| Foundations — Semantic color KIN Red (`DESIGN.md` 108) | Never-error-red reading; `#d63b22` on hover and destructive emphasis without collapsing the two roles |
| Foundations — Spacing (`DESIGN.md` 125) | Keeping each numeral on its own key path; `40px` stays a prose common value |
| Foundations — Shape (`DESIGN.md` 138) | Keeping `full: 9999` beside status-pill `12px` |
| Foundations — Elevation (`DESIGN.md` 150) | Work-tool elevation reading; raised 0.12 and elevated 0.18 as two keys |
| Foundations — Motion gate (`DESIGN.md` 165) | Omitting three unsourced curves; keeping the four duration rows as duration tokens rather than easing curves; keeping the four signature motions; holding the five-kind promotion gate rather than treating a single official curve as sufficient |
| Typography — Font evidence (`DESIGN.md` 175) | Evidence-class application readings |
| Typography — Family (`DESIGN.md` 193) | Fallback-never-substitute reading; sibling Roboto is not the product-UI face |
| Typography — Type roles (`DESIGN.md` 197) | Keeping YAML ratios and §3 px spellings; taking the longer of two writings |
| Typography — Type roles sizes (`DESIGN.md` 216) | Reading type sizes as roles rather than spacing numerals |
| Typography — Assets (`DESIGN.md` 220) | Catalog-boundary reading of the Google s2 favicon slug |
| Typography — Assets Brand Guidelines (`DESIGN.md` 221) | Reading the Brand Guidelines PDF as a brand-guidelines source for named hues rather than as a published UI specification |
| Typography — Assets mascot (`DESIGN.md` 222) | Refusing to replace recorded mascot, illustration, and customer-logo spots with invented brand-color decoration |
| Components — Capture record (`DESIGN.md` 247) | Preserving the source state contract rather than delegating it to an unadopted catalog graph; role-based decision procedure; Focus-vs-focus-visible; every interactive-kind and applicability verdict and its reason; kind-omission; refusal to treat this as a complete state-coverage claim |
| Components — Primary (`DESIGN.md` 261) | 10px 24px / 4px as this CTA's geometry; longer §4 use that names `アプリを作る` |
| Components — Outline (`DESIGN.md` 285) | Reading the pairing as this control's role rather than a primary commit |
| Components — Neutral (`DESIGN.md` 309) | 10px 20px as this control's geometry; longer §4 use that names `閉じる` |
| Components — Danger (`DESIGN.md` 356) | Hover `#d63b22` as this control's treatment rather than the primary-hover key |
| Components — Text Field (`DESIGN.md` 381) | 8px 10px as this field's padding; observed Focus is not `focus-visible` treatment |
| Components — Error input (`DESIGN.md` 403) | `#fdeeee` tint and 12px help text stay on this error-input record |
| Components — Standard Card (`DESIGN.md` 425) | 6px radius / 20px padding as this card's geometry |
| Components — App Tile (`DESIGN.md` 440) | 8px / 16px as this tile's geometry; landing the Agent Prompt Guide app-name pairing; keeping both background writings |
| Components — Neutral badge (`DESIGN.md` 463) | `12px` as this pill's radius rather than `full: 9999` |
| Components — Toast (`DESIGN.md` 534) | 0.18 opacity as this toast's shadow rather than raised 0.12 |
| Components — Dialog (`DESIGN.md` 548) | 8px / 24px as this dialog's geometry; header and backdrop stay on this dialog |
| Components — Toggle (`DESIGN.md` 568) | `9999px` as this toggle's radius rather than a status-pill radius |
| Components — Warning pill (`DESIGN.md` 649) | Keeping the Warning `#fff6e0` / `#b37e00` pair on this §4-only row rather than moving it onto a YAML pill |
| Layout & Platforms (`DESIGN.md` 683) | Reading the source layout list as the contract rather than a surface-to-surface measurement transfer |
| Layout & Platforms whitespace (`DESIGN.md` 685) | Marketing openness / product density readings; 8px cell padding stays on the table |
| Layout & Platforms targets (`DESIGN.md` 700) | Reading 40 / 44 / ~88 / 36–40 / 28 / 24 / 48 as the roles named beside them |
| Content & Locales — voice (`DESIGN.md` 705) | Calling the register an encouraging colleague; refusing to treat it as a separately published microcopy guide |
| Governance — Named gaps (`DESIGN.md` 753) | Reading the list as unnamed values, not as coverage of domains the source never named |
