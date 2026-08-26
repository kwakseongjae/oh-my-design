# Fugle provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/fugle/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | fugle |
| name | Fugle |
| country | TW |
| category | fintech |
| homepage | https://www.fugle.tw |
| primary_color | `#f4af1c` |
| logo | type `favicon`, slug `https://www.fugle.tw/images/favicon.ico` |
| verified | 2026-06-03 |
| omd format (source) | 0.1 |
| tokens.source | prose-derived |
| tokens.extracted | 2026-06-09 |
| components_harvested | true |
| source bytes / SHA-256 | 19,978 · `75ab4ec2f27963681896d13d4577504914cc7960fc783248ee850d1a810b1571` |

**The source carries no `verification_v2` block.** Measured: `grep -oF 'verification_v2' web/references/fugle/DESIGN.md | wc -l` = 0. There is therefore no per-claim `method`, no YAML anchor set, and no machine claim ledger in the source, and none is invented here. The claim ledger below is reconstructed from the two places the source does record evidence — its mid-file footer and its `tokens` block — and from the adopted sibling verification file.

`tokens.source: prose-derived` is the source's own grading of that token block: the machine-readable values were derived from the document's prose on 2026-06-09, six days after the 2026-06-03 live inspection that produced the prose. The portable body states that relation in plain language and does not carry the field name. `grep -oF 'prose-derived' docs/design-md-weight/migrated/fugle/DESIGN.md | wc -l` = 0.

### Dual and multiple destinations (E2a)

Counted with `grep -oF '<string>' <file> | wc -l` — occurrences, not lines. `<doc>` = `docs/design-md-weight/migrated/fugle/DESIGN.md`.

| Value | Portable locations | Also here |
|---|---|---|
| `name` `Fugle` | H1 `# Fugle Design System`, Scope, and throughout | yes — Identity |
| `homepage` `https://www.fugle.tw` | Scope (as `www.fugle.tw`) | yes — Identity / Surfaces / Sources |
| `primary_color` `#f4af1c` | Scope, Distinctive traits, Semantic color, Recorded application rules, Surface states loading dots, Primary Button, Recorded conflicts | yes — Identity |
| `logo` slug `https://www.fugle.tw/images/favicon.ico` | Typography & Assets → Imagery and assets | yes — Identity |
| `verified` `2026-06-03` | Scope, Evidence-domain boundary | yes — Identity / Freshness |
| `tokens.extracted` `2026-06-09` | Scope, Evidence-domain boundary | yes — Identity / Freshness |
| `developer.fugle.tw` | Scope, Recorded narrative | yes — Sources |
| App id `1542310263` | Scope, Layout & Platforms | yes — Sources |
| `#fbcc67` | Governance → Recorded conflicts | yes — Freshness (the source's own conflict entry) |
| `#222222` | Governance → Recorded conflicts | yes — Deletions-and-moves note below |
| `cubic-bezier(.4,.6,.2,1)` | Principle 5, Foundations → Motion | yes — Canonical proof raw sample 13 |
| `cubic-bezier(0,1,1,0)` | Foundations → Motion, Surface states loading dots | yes — Canonical proof raw sample 1 |
| `認真的投資人值得更好的工具` | Audience, Content & Locales → Brand-published lines, Recorded narrative | yes — Canonical proof raw sample 14 |
| `開始交易` | Primary Button role and label, Brand-published lines | no |
| `新增自選股` | Primary tasks, Surface states, Brand-published lines | no |
| `富果` | Scope, Brand-published lines | no |
| `components_harvested: true` | stated as prose in Components & States → Record boundary; the field name does not reach the body | yes — Proof notes |

`grep -oF 'components_harvested' <doc> | wc -l` = 0. `grep -oF 'omd' <doc> | wc -l` = 0.

## Canonical proof — sibling verification file

Adopted, not merely noted. Every field in this section is transcribed from the sibling file.

| Field | Value |
|---|---|
| sibling | `web/references/fugle/.verification.md` |
| bytes | 3,619 |
| SHA-256 | `08703dcb5a73173cae35ec058355ad89e12356ff10f7830f376107910200ab14` |
| heading | `# Fugle — Verification Notes (2026-06-03)` |
| inspected | 2026-06-03 |
| raw samples | 14 — numbered items under `### Raw samples` |

**Method, quoted from the sibling:** "raw source-file fetch (homepage HTML + CSS bundles + PWA manifest + developer portal CSS + Apple App Store listing)".

**Sources listed by the sibling, with byte sizes where it gives them:**

- `https://www.fugle.tw` (full HTML, inline `<style>`, meta tags)
- `https://dk91kmsnfr6kg.cloudfront.net/desktop/assets/fugle-desktop.d5b14f507dc94191ea072af78696b931.css` (156,854 bytes)
- `https://dk91kmsnfr6kg.cloudfront.net/desktop/assets/chunk.ac7daef9fdaa5882212c.css` (54,782 bytes)
- `https://dk91kmsnfr6kg.cloudfront.net/desktop/assets/chunk.ac7daef9fdaa5882212c.js` (1,649,565 bytes)
- `https://www.fugle.tw/manifest.json`
- `https://developer.fugle.tw/assets/css/styles.46d8cd92.css` (129,961 bytes)
- `https://apps.apple.com/tw/app/fugle/id1542310263`

**Raw samples, quoted from the sibling:**

1. `www.fugle.tw` HTML inline style: `.lds-ellipsis div { background:#f4af1c; animation-timing-function:cubic-bezier(0,1,1,0) }` — primary amber, loading dot easing
2. `www.fugle.tw` HTML meta: `<meta name="theme-color" content="#f4af1c">` — confirmed brand primary
3. `www.fugle.tw/manifest.json`: `"theme_color": "#fbcc67"` — PWA manifest uses a lighter amber (conflict noted; CSS canonical value `#f4af1c` used as primary)
4. `fugle-desktop.css` CSS custom properties: `--color-neutral-00-white:#ffffff; --color-neutral-04:#f5f5f5; --color-neutral-08:#eaeaea; --color-neutral-46:#8b8a8a; --color-neutral-80:#323232; --color-neutral-93:#131313` — full neutral scale
5. `fugle-desktop.css` component: `.fugle-trade-box { border-radius:4px; box-shadow:0 2px 2px 0 rgba(0,0,0,.08),0 2px 7px 0 rgba(0,0,0,.1) }` — card radius and shadow
6. `fugle-desktop.css` component: `.watchlist-stock { min-height:55px; border-bottom:1px solid var(--t20) }` — stock row height 55px, border rule
7. `fugle-desktop.css` component: `input { height:32px; border-radius:4px; background-color:var(--t20); font-size:16px }` — input field tokens
8. `chunk.ac7daef9fdaa5882212c.js` JS object: `red:"#f3746d",green:"#6c9c46",grey:"#545454"` — light theme trading colors
9. `chunk.ac7daef9fdaa5882212c.js` JS object: `dark:{red:"#ff3737",green:"#6fda1a"}` — dark theme trading colors
10. `developer.fugle.tw` CSS custom properties: `--p:#f4af1c; --p20:#fef4cf; --p60:#e49b00; --s:#4c85a0; --s60:#36708c` — full developer palette, confirms primary and secondary hues
11. `developer.fugle.tw` CSS: `--ifm-color-primary:#f4af1c; --ifm-color-primary-dark:#e49b00` — Docusaurus override confirms brand primary
12. `developer.fugle.tw` CSS: `font-family:"Noto Sans TC","Microsoft JhengHei"` — Traditional Chinese typeface
13. `fugle-desktop.css` transition: `transition:all .2s cubic-bezier(.4,.6,.2,1)` — standard easing curve
14. `apps.apple.com/tw/app/fugle/id1542310263` App Store description (zh-TW): `"認真的投資人值得更好的工具"` — core brand tagline

**Tier 2 cross-check, from the sibling:** getdesign.md/fugle — **NOT LISTED**: "No designs found for 'fugle'." refero — no TW/Fugle results; not applicable for Taiwan-based fintech.

**Country and regional sources, from the sibling:** Country TW (Taiwan); parent company Fortuna Intelligence (富果股份有限公司), headquartered in Taipei, Taiwan. Brand-owned regional sources: `https://www.fugle.tw` (main product domain, served from Taiwan, language `zh-Hant-TW`); `https://developer.fugle.tw` (official developer API portal, Traditional Chinese product description); `https://apps.apple.com/tw/app/fugle/id1542310263` (App Store Taiwan listing under developer "Fortuna Intelligence", app id `tw.fugle.flutter.app`).

### Sibling-only values, recorded here and not promoted

The sibling records the fetched artifacts; the portable contract reconstructs the source `DESIGN.md`. A value present only in the sibling is a ledger entry and never a portable token. The values in this class:

- **Dark-theme trading colors** `#ff3737` (rise) and `#6fda1a` (fall), from raw sample 9. The source `DESIGN.md` names only **Rise (Light)** `#f3746d` and **Fall (Light)** `#6c9c46`. The portable body carries the light pair and names the dark pair as an unresolved gap without a value; the sibling's values are **not** used to close it, because a JS object read during a static fetch and the source's own light-theme role table are different evidence domains.
- **Neutral grey** `grey:"#545454"`, from the same JS object. The source names no such role.
- The CSS custom property `--t20`, which raw samples 6 and 7 show behind the stock-row border and the input background. The source states those as literal `#eaeaea` and never names `--t20`.
- The class selectors `.lds-ellipsis div`, `.fugle-trade-box` in dotted form and `.watchlist-stock`, and the property forms `min-height:55px`, `border-bottom:1px solid var(--t20)`, `background-color:var(--t20)`, `font-size:16px`, `border-radius:4px`.
- The declaration form `transition:all .2s cubic-bezier(.4,.6,.2,1)` from raw sample 13. The source states the curve and the 0.2 s duration separately and never as one declaration, so the portable body states them separately too.
- The custom property `--ifm-color-primary-dark`, which the source footer does not carry although it carries `--ifm-color-primary`. It was written into a first draft of the portable Semantic color entry for **Amber Dark** and removed on the B1 pass: the source's own §2 assigns `#e49b00` that role under `--p60`, and the extra property name is a sibling observation.
- The `<meta name="theme-color" content="#f4af1c">` tag form from raw sample 2. The source names the `theme-color` attribute in its footer conflict note but not the tag.
- Byte sizes 156,854 / 54,782 / 1,649,565 / 129,961; the `.js` chunk URL, which the source footer omits while listing the two `.css` chunks; and `https://www.fugle.tw/manifest.json` as a full URL.
- The parent-company Chinese name `富果股份有限公司`, the Taipei headquarters, the language tag `zh-Hant-TW`, and the app bundle id `tw.fugle.flutter.app`.
- The method phrase "raw source-file fetch" and the sibling's "NOT LISTED" grading of getdesign.md.

Each returns 0 from a literal grep of the portable body, counted with `grep -oF -e '<string>' <doc> | wc -l`: `#ff3737` = 0, `#6fda1a` = 0, `#545454` = 0, `--t20` = 0, `.lds-ellipsis div` = 0, `transition:all` = 0, `--ifm-color-primary-dark` = 0, `theme-color" content` = 0, `156,854` = 0, `manifest.json` = 0, `富果股份有限公司` = 0, `zh-Hant-TW` = 0, `tw.fugle.flutter.app` = 0, `NOT LISTED` = 0, `source-file fetch` = 0.

Three of those were **found by this check rather than avoided by it**: `--ifm-color-primary-dark`, `transition:all .2s cubic-bezier(.4,.6,.2,1)` and `.lds-ellipsis div` were all present in the first draft of the portable body and were removed. The gate does not test for sibling promotion, so nothing would have blocked them.

**Structural observations in the sibling are not promoted either (B1).** That the sibling numbers its samples, that it groups sources under a `## Proof — Tier 1 live inspect` heading, and that it lists three regional sources under a `≥2` requirement are facts about the verification file, not facts about Fugle's interface, and none of them appears in the portable body.

## Freshness

| Event | Date |
|---|---|
| verified (YAML) | 2026-06-03 |
| footer **Verified** | 2026-06-03 |
| sibling inspected | 2026-06-03 |
| tokens.extracted | 2026-06-09 |

The six-day spread between the 2026-06-03 inspection and the 2026-06-09 token extraction is the source's own `prose-derived` grading: the values were lifted from the prose, not re-observed. Both dates reach the portable body.

**Conflicts recorded by the source**, quoted from its mid-file footer: "HTML `theme-color` is `#f4af1c`; PWA manifest `theme_color` is `#fbcc67` (a lighter amber). The CSS custom property `--p` and developer portal's `--ifm-color-primary` both canonically define `#f4af1c`; the manifest value is likely a PWA splash-screen approximation. Primary recorded as `#f4af1c`." Carried to the portable body under Governance → Recorded conflicts, both values intact, with the "likely … approximation" reading attributed to the record rather than asserted.

**Divergence found during migration, outside that declaration.** §1 states the dark theme as a `#131313` base with `#323232` surface layers; §9 states dark mode as `#131313` / `#222222` surfaces. `#323232` is simultaneously the light-theme **Body Text** role. Neither surface value is chosen; both are carried in the portable body under Recorded conflicts.

**Value pairs inside the reconstruction, neither side chosen:** the typography `highlight` role at a single `24` against the prose range `18–24 px`; and the `sans` and `mono` family slots both naming `Lato`.

## Surfaces

The source declares no `surfaces` block. The surfaces below are the artifacts its own footer lists as sources.

| id | kind | url | inspected |
|---|---|---|---|
| site | product-site | https://www.fugle.tw | 2026-06-03 |
| desktop-platform | web-trading-platform stylesheet | https://dk91kmsnfr6kg.cloudfront.net/desktop/assets/ | 2026-06-03 |
| developer-portal | documentation-portal stylesheet | https://developer.fugle.tw | 2026-06-03 |
| app-store | store-listing (copy only) | https://apps.apple.com/tw/app/fugle/id1542310263 | 2026-06-03 |

## Sources

### Tier 1

Quoted from the source footer, in its order:

- https://www.fugle.tw (HTML, inline CSS, manifest.json)
- https://dk91kmsnfr6kg.cloudfront.net/desktop/assets/fugle-desktop.d5b14f507dc94191ea072af78696b931.css
- https://dk91kmsnfr6kg.cloudfront.net/desktop/assets/chunk.ac7daef9fdaa5882212c.css
- https://developer.fugle.tw/assets/css/styles.46d8cd92.css
- https://apps.apple.com/tw/app/fugle/id1542310263

The sibling adds `https://dk91kmsnfr6kg.cloudfront.net/desktop/assets/chunk.ac7daef9fdaa5882212c.js` and `https://www.fugle.tw/manifest.json`, which the source footer does not list separately.

### Tier 2 (no usable record)

Quoted from the source footer: "getdesign.md/fugle — No designs found for 'fugle'. refero — no TW/Fugle results expected."

## Claim ledger

Reconstructed, because the source carries no machine claim block. Each row names the source location the value came from and, where one exists, the sibling raw sample that independently corroborates it.

| Value group | Source location | Sibling corroboration |
|---|---|---|
| `#f4af1c` primary | frontmatter `primary_color`, `tokens.colors.primary`, §1, §2, §7, §9, §12, §14 | samples 1, 2, 10, 11 |
| `#e49b00` amber dark | `tokens.colors.primary-hover`, §2, §4 | samples 10, 11 |
| `#fef4cf` amber tint, `#4c85a0` secondary, `#36708c` secondary dark | `tokens.colors`, §2 | sample 10 |
| `#ffffff`, `#f5f5f5`, `#eaeaea`, `#8b8a8a`, `#323232`, `#131313` neutral scale | `tokens.colors`, §1, §2 | sample 4 |
| `#dfdfdf` border heavy | `tokens.colors.border-heavy`, §2 | none |
| `#f3746d` rise, `#6c9c46` fall | `tokens.colors.rise` / `.fall`, §2, §7, §9, §14 | sample 8 |
| `#d12a2a` error | `tokens.colors.error`, §2, §14 | none |
| `#222222` dark surface layer | §9 only | none |
| `#fbcc67` manifest theme_color | footer conflict note | sample 3 |
| `Lato` family, sans and mono | `tokens.typography.family`, §3, §7, §9 | none |
| `Noto Sans TC`, `Microsoft JhengHei` | §3, §7 | sample 12 |
| `Material Icons` | §3 | none |
| type roles 24/20/16/14/12 with 1.4 and 1.5 ratios | `tokens.typography.*`, §3 | none |
| spacing `5 / 8 / 16 / 20 / 32 / 50` | `tokens.spacing` | none |
| radii `4px / 4px / 8px / 9999` | `tokens.rounded`, §4, §7, §9 | samples 5, 7 |
| card / popover / modal shadows | `tokens.shadow`, §6, §9 | sample 5 (card) |
| focus-active-ring and side-panel-frame shadows | §6 only | none |
| `button-primary` fields | `tokens.components.button-primary`, §4, §9 | none |
| `input-default` fields | `tokens.components.input-default`, §4, §9 | sample 7 |
| `list-item-stock` fields | `tokens.components.list-item-stock`, §4, §9 | sample 6 |
| `card-trade`, `card-info`, `dialog` fields | `tokens.components.*`, §4 | sample 5 (card-trade) |
| motion durations and rules | §15, §9 | none |
| `cubic-bezier(.4,.6,.2,1)` | §9, §12, §15 | sample 13 |
| `cubic-bezier(0,1,1,0)` | §14, §15 | sample 1 |
| `cubic-bezier(0,1,.5,1)` | §15 only | none |
| layout frame values (50 px, 1508 px, breakpoints, 1024 px) | §5, §8 | none |
| §14 state treatments | §14 only | none |
| `認真的投資人值得更好的工具` | §11 | sample 14 |

`cubic-bezier(0,1,.5,1)` is the one curve in the source with no corroborating raw sample. It is not one of the two spec-template curves that recur across the catalog — measured across `web/references/*/DESIGN.md`, all three of Fugle's curves appear in exactly one file each, while `cubic-bezier(0.4, 0.0, 1, 1)` appears in 218 — and the source's own footer names the platform stylesheet bundles as its Tier 1 evidence. It is therefore carried, with its single-source status recorded here.

## Capture selectors

The source states no capture selectors. The class and property pointers behind three components exist only in the sibling and are listed under *Sibling-only values* above. `grep -oF 'data-omd-capture' web/references/fugle/DESIGN.md | wc -l` = 0.

## Source strings quoted verbatim

Component `use` strings, transcribed from `tokens.components`:

- `Amber CTA; hover #e49b00`
- `Search / trade input, 32px height`
- `Watchlist row, 55px height, 1px #eaeaea border; hover rgba(0,0,0,0.04)`
- `Surface trade box card`
- `Highlighted info box`
- `Modal dialog container`

Typography `use` strings, transcribed from `tokens.typography`:

- `Data highlight values`
- `Dialog / section headings`
- `Modal body, form inputs`
- `Dense data rows`
- `Secondary labels, timestamps`

Source §4 bold sub-labels, whose text became component headings and variant labels in the portable body:

- `Amber CTA (e.g. "開始交易")`
- `Amber CTA Hover`
- `Default Search / Trade Input`
- `Input Group (with label)`
- `Default Stock List Item`
- `Hovered Stock Row`
- `Surface Card (e.g. fugle-trade-box)`
- `Info Card (e.g. watchlist-stock__box)`
- `Dialog Container`

§9 property-declaration forms, transcribed verbatim. The §9 section itself was deleted as a tool-facing construction prompt; every value inside these seven survives in the portable body in the record's own §4 / §6 / §15 notation (`Radius: 4px`, `Height: 32px`, `Font: 16px / 400`, `box-shadow: 0 2px 2px 0 rgba(0,0,0,.08), 0 2px 7px 0 rgba(0,0,0,.1)`, `1px solid #eaeaea`, `55px`, `#f4af1c`), so only the colon-less shorthand is recorded here rather than carried:

- `background #f4af1c`
- `min-height 55px`
- `border-bottom 1px solid #eaeaea`
- `border-radius 4px`
- `box-shadow 0 2px 2px 0 rgba(0,0,0,.08), 0 2px 7px 0 rgba(0,0,0,.1)`
- `height 32px`
- `font-size 16px`

Footer labels: `Verified:`, `Tier 1 sources:`, `Tier 2 sources:`, `Conflicts unresolved:`. None reaches the portable body — `grep -oF 'Tier 1 sources' <doc> | wc -l` = 0, `Conflicts unresolved` = 0.

Brand-published Traditional Chinese strings, byte-exact:

| String | In the portable body | Class |
|---|---:|---|
| `認真的投資人值得更好的工具` | 3 | published App Store line, sample 14 |
| `開始交易` | 2 | published CTA label |
| `新增自選股` | 3 | published empty-state action label |
| `富果` | 2 | published brand name |

Illustrative lines, byte-exact, carried under the source's own illustrative marker:

| String | In the portable body |
|---|---:|
| `告別密密麻麻數字的傳統看盤軟體。` | 1 |
| `認真的投資人，值得更好的工具。` | 1 |
| `把時間花在決策，而非整理資料。` | 1 |

Voice-table quotations `we research too` and `our platform provides` are carried once each inside the Do/Don't table in Content & Locales. `rich harvest` is carried twice — in Scope and in Brand-published lines, beside each occurrence of `富果`. `snap open` is carried once, in Foundations → Motion.

## Portable derived-editorial scope (E1)

Every interpretive claim in the portable body carries an adjacent complete qualification. The occurrences and their locations:

| # | Portable location | What the qualification covers |
|---|---|---|
| 1 | Experience → Scope, final paragraph | the light/dark characterization and the "structural rhythm" reading of §1 |
| 2 | Experience → Distinctive traits | the five trait bullets |
| 3 | Experience → Principles | the five principles and their UI implications |
| 4 | Experience → Recorded application rules | the six Do rules |
| 5 | Experience → Avoid | the six Don't rules |
| 6 | Foundations → Elevation | the "signals interactive hierarchy without dramatic depth" reading |
| 7 | Foundations → Motion | the three curve-character readings |
| 8 | Layout & Platforms | the "shares the brand's color and typography tokens" statement about the native app |
| 9 | Content & Locales → Voice reading | the three adjectives and the four Do/Don't rows |
| 10 | Content & Locales → Recorded narrative | the founding-frustration, dual-strategy and middle-ground readings |

`grep -o 'derived editorial' <doc> | wc -l` = 10 and `grep -o 'not Fugle-authored' <doc> | wc -l` = 10.

Facts that stand unqualified, because they are recorded values or document facts rather than readings: every color role and value, the spacing and radius scales, the five shadow values, the duration scale, the three curve values, every component field, the type metrics and the two unitless ratios, the layout frame measurements, the four source artifacts and the dates, the seven state treatments, and the published Traditional Chinese strings.

## Deletions

| Deleted | Reason |
|---|---|
| §9 Agent Prompt Guide, as a section | Tool-facing construction prompt. Its rules restate values already carried: the `#ffffff` / `#f5f5f5` canvas, `#f4af1c` primary with `#e49b00` hover and `4px` radius, `55px` rows with a `1px #eaeaea` bottom border and `rgba(0,0,0,0.04)` hover, the red-rise/green-fall pair, the card shadow, the `32px` / `4px` / `#eaeaea` / `16px` input, and the `0.2s cubic-bezier(.4,.6,.2,1)` transition. Its one unique value is the dark-mode `#222222` surface, which was **not** deleted — it is carried into Governance → Recorded conflicts (A3). |
| §13 Personas, all four entries | Fictional. The section marks itself "Illustrative — not based on published Fugle user research". No biography, age band, occupation, habit, motivation or archetype label is carried into the portable body **or into this ledger** (D2). The Experience → Audience section carries only the stakeholder groups Fugle's own published material names. |
| The four archetype labels themselves | Deleted with the section. They are named once each in `migration-log.md` as disposition rows and nowhere else. |

## Source-side gaps inherited, not repaired

- No `verification_v2` block, therefore no per-claim method or anchor set.
- No font license statement for any of the four faces the source names.
- No accessibility, contrast-ratio, reflow, touch-target or reduced-motion statement anywhere in the source. None is asserted in the portable body and none is listed as a Fugle gap, because the source does not establish any of those as an existing domain.
- No `surfaces` or `sources` YAML block; the footer's prose list is the only source inventory.

## Proof notes

- `components_harvested: true`; six components declared in `tokens.components`, plus three named variant blocks that §4 declares and the `tokens.components` records do not: `Amber CTA Hover`, `Input Group (with label)` and `Hovered Stock Row`. Two of the three carry their value inside a YAML `use` string as well; `Input Group (with label)` and its `1px solid #eaeaea` border exist in §4 alone. All nine are carried.
- Three of the six declared components — `card-trade`, `card-info`, `dialog` — carry surface values with no control-role evidence. Following C4, the portable body declares no kind and no state-applicability map for them rather than fixing one.
- The source uses the term `focus-visible` nowhere (`grep -oiF 'focus-visible' web/references/fugle/DESIGN.md | wc -l` = 0). The §6 **Focus / active ring** shadow is carried as an elevation value under its own name and is not promoted into any component's `focus-visible` row (B1).
- Uncaptured hover, disabled, loading, error and success treatments are omitted rather than marked `not-applicable`. The two `not-applicable` cells in the portable body are both on the Watchlist Stock Row and both give a role reason. `grep -oF -e 'not-applicable' DESIGN.md | wc -l` = 4: those two cells plus two occurrences inside the Record boundary rule that states the policy.
- The 2026-06-03 inspection was a static source-file fetch. No interaction was exercised, so every state treatment in the portable body is a stylesheet rule the record states, not an observed rendering.
