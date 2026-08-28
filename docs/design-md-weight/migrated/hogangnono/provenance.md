# Hogangnono provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/hogangnono/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | hogangnono |
| name | Hogangnono |
| country | KR |
| category | consumer-tech |
| homepage | `https://hogangnono.com` |
| primary_color | `#584de4` |
| logo | `type: favicon`, `slug: "https://www.google.com/s2/favicons?domain=hogangnono.com&sz=256"` |
| omd format (source) | 0.1 |
| verified | 2026-06-03 |
| tokens.source | prose-derived |
| tokens.extracted | 2026-06-09 |
| components_harvested | true |

The homepage URL is dual-destination: identity metadata here, and a portable scope record in `DESIGN.md` §1. The primary color is dual: identity here, and Foundations / components in `DESIGN.md`. The favicon slug is dual: identity here, and a portable asset pointer in `DESIGN.md` §3.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-03 |
| tokens.extracted | 2026-06-09 |

The source footer records the verification verbatim as **Verified:** 2026-06-03. That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved, as the source footer states: theme-color meta (`#4d55b2`) differs from CSS `--primary` (`#584de4`); both are genuine — `#4d55b2` is the darker legacy nav background, `#584de4` is the design-system primary for interactive elements; documented as Primary Variant vs Primary. That conflict is dual: this ledger and `DESIGN.md` Foundations / Governance.

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| home | homepage, HTML + theme-color + inline emotion CSS | `https://hogangnono.com` | 2026-06-03 |
| desktop-css | full desktop CSS bundle | `https://static.hogangnono.com/dist/2.5.0.30/08498da545/web/desktop.css` | 2026-06-03 |
| reset-css | reset + Pretendard font declarations | `https://static.hogangnono.com/reset.desktop.css` | 2026-06-03 |
| app-store | App Store listing, KR regional | `https://apps.apple.com/kr/app/호갱노노/id1084799742` | named in the source footer; not a computed-token surface |

### Tier 1 (as listed in the source footer)

- `https://hogangnono.com` — HTML, theme-color meta, inline emotion CSS
- `https://static.hogangnono.com/dist/2.5.0.30/08498da545/web/desktop.css` — full desktop CSS bundle, :root custom properties
- `https://static.hogangnono.com/reset.desktop.css` — reset + Pretendard font declarations
- `https://apps.apple.com/kr/app/호갱노노/id1084799742` — App Store listing, KR regional

### Tier 2

- getdesign.md/hogangnono — NOT LISTED (no data)
- refero — not checked (KR brand, negligible coverage expected)

## Sibling handling (`web/references/hogangnono/.verification.md`)

The sibling exists — confirmed with `find web/references/hogangnono -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact that the source body does not already record.

Its own record, transcribed here:

- Inspected 2026-06-03. Method: raw source-file fetch (homepage HTML + two CSS bundles)
- Sources: `https://hogangnono.com`; `https://static.hogangnono.com/dist/2.5.0.30/08498da545/web/desktop.css`; `https://static.hogangnono.com/reset.desktop.css`; `https://apps.apple.com/kr/app/호갱노노/id1084799742`
- hogangnono.com HTML: `<meta name="theme-color" content="#4d55b2">` (line 14)
- desktop.css :root: `--primary: #584de4;` at line 429 (66 occurrences across interactive elements)
- desktop.css :root: `--gray900: #333333; --gray800: #4F4F4F; --gray700: #6E6E6E; --gray500: #B3B3B3; --gray300: #E5E5E5; --gray200: #F3F3F3; --gray100: #F9F9F9;`
- desktop.css `.btn-basic.fill { background-color: #584de4; color: #FFF; }` + `border-radius: 6px;` on `.btn-basic`
- desktop.css `.apt-search-input .search-group.roundbox .keyword { line-height: 48px; height: 50px; border: solid 1px #CECFDC; border-radius: 6px; padding-left: 15px; font-size: 16px; }`
- inline emotion CSS `.css-c4krkq { height:50px; line-height:49px; background-color:#f3f4fc; border-radius:6px; font-size:17px; color:#584de4; }` (secondary tint button in login modal)
- desktop.css `.scene-recommend-apt-list .apt-item .price-group .price { color: #4337de; font-size: 19px; font-weight: 500; }`
- desktop.css map FAB: `box-shadow:4px 2px 12px 0px #0000003d` (= rgba(0,0,0,0.24))
- desktop.css `.btn-basic.fill.important { box-shadow: 0 4px 5px 0 rgba(89, 99, 217, 0.3); }`
- reset.css: `font-family:'Pretendard', Apple SD Gothic Neo, 'Apple SD 산돌고딕 Neo', NanumGothic, '나눔고딕', ng, sans-serif;`
- Country: KR (founded Seoul, Korea; parent Zigbang is a KR company)
- App Store developer: (주)호갱노노
- desktop.css size: 1.09 MB

Values and strings the sibling carries that the visible source body does not, kept here and not promoted:

- CSS line number 429 and occurrence count 66
- Variable names `--gray900` / `--gray800` / `--gray700` / `--gray500` / `--gray300` / `--gray200` / `--gray100`
- Class selectors `.btn-basic.fill`, `.apt-search-input`, `.css-c4krkq`, `.scene-recommend-apt-list`
- `line-height: 48px` on the map search field
- `line-height: 49px` on the tint button
- `#FFF` spelling
- `#0000003d` hex form of the FAB shadow
- Fallback face names `Apple SD 산돌고딕 Neo`, `나눔고딕`, `ng`
- Founded-Seoul wording
- Developer string `(주)호갱노노`
- Bundle size `1.09 MB`
- Tier 2 page-miss string `No designs found for 'hogangnono'`

## Byte-form notes

- The source frontmatter records line heights as unitless ratios (`1.33`, `1.3`). They are carried as ratios in the portable body, never converted to a replacement px (A1a). Source §3's `line-height 40px` on the modal heading stays beside `1.33`.
- The source frontmatter records spacing and radius steps unitless (`xs: 4` … `section: 64`; `sm: 4`, `md: 6`, `lg: 12`, `full: 9999`). The portable body keeps both the unitless steps and the px forms the visible sections use. `full: 9999` stays a step.
- `tokens.spacing.md: 12` is not `tokens.rounded.lg: 12`. `tokens.spacing.xs: 4` is not `tokens.rounded.sm: 4`. `tokens.spacing.base: 16` is not the 16px body size. `tokens.spacing.xxl: 48` is not the 48 px filter-chip strip. `tokens.rounded.md: 6` is not the apartment-card `3px` or the filter-chip `8px`. `tokens.rounded.full: 9999` is not a type size.
- YAML hex is lowercase (`#4f4f4f`, `#6e6e6e`, `#b3b3b3`, `#e5e5e5`, `#f3f3f3`, `#f9f9f9`, `#3e8ce8`, `#3dab6a`, `#ee3a3a`). Source §2 spells the same values in mixed case. Both forms stay on the Semantic color rows.
- YAML `tokens.components.card` radius 6 and source §4 apartment-detail radius 3px are different writings.
- YAML `tokens.shadow.button` is `rgba(89,99,217,0.3) 0px 4px 5px 0px`. Source §4 / §6 spell `0 4px 5px 0 rgba(89, 99, 217, 0.3)`. Both stay.

## Omission ledger

| Omitted | Boundary | Reason |
|---|---|---|
| §13 Personas — four entries | whole section | The source's own header labels them illustrative archetypes, not real users. Fictional personas are neither promoted to verified tasks nor re-hosted in a sidecar. The four entries — including names, ages, and biographies — are dropped and are deliberately not restated here (D2, D2a). |
| §9 Agent Prompt Guide | whole section | Tool-facing copy-paste prompts and restatements of rules stated elsewhere. Checked value by value before deletion: see the next paragraph. |

No unattributed `cubic-bezier` from the `spec/omd-v0.1.md` example table appears in the source. The one gallery curve `cubic-bezier(0.4, 0, 0.22, 1)` is attributed to Photoswipe and is kept in `DESIGN.md` Motion with that attribution.

§9 deletion check (A3). Every value §9 names was confirmed present elsewhere in the portable body before the section was dropped. Primary fill `#584de4` / `#fff` / 6px / 50px / 17px — Primary Fill Button. Tint `#f3f4fc` / `#584de4` / 6px / 50px / 17px — Secondary Tint Button. Filter chip default `1px solid #F3F3F3` / 8px / 32px / 14px / `#333333` and active `#584de4` — Filter Chip. Price `#4337de` / 19px / 500 — Type roles + Apartment Detail Card. Body `#333333` / 16px / 400 / Pretendard — Type roles + Semantic color. Card `#fff` / `1px solid #cecece` / 3px / `0px 2px 2px rgba(0,0,0,0.075)` — Apartment Detail Card. Divider `#f2f2f2` — Apartment Detail Card + Layout. Error / price-drop `#EE3A3A` and success / price-rise `#3DAB6A` — Semantic color + badges. Data-dense / map-adjacent, avoid lifestyle/hero photography — Avoid + Assets.

## Claim ledger

| Claim | Surface |
|---|---|
| `tokens.colors.primary` / `primary-nav` / `primary-tint` / `primary-light` / `price-accent` / `heading` / `body` / `caption` / `muted` / `border` / `surface-chip` / `canvas` / `white` / `info` / `success` / `danger` | hogangnono.com + desktop.css |
| `tokens.typography.family.sans` Pretendard | reset.desktop.css + source §3 |
| `tokens.typography.modal-heading` / `section` / `list-title` / `price` / `body` / `caption` (size, weight, lineHeight, use) | hogangnono.com |
| `tokens.spacing.xs` / `sm` / `md` / `base` / `lg` / `xl` / `xxl` / `section` | hogangnono.com |
| `tokens.rounded.sm` / `md` / `lg` / `full` | hogangnono.com |
| `tokens.shadow.button` | hogangnono.com (Fill Important) |
| `tokens.components.button-primary` / `button-tint` / `button-disabled` / `chip-info` / `badge-up` / `badge-down` / `card` | hogangnono.com |
| Published strings `조건에 맞는 매물이 없어요` / `데이터를 불러오지 못했어요 — 다시 시도해 주세요` / `공식 거래 기록이 없어요` / `문의가 전송되었어요` / `확인하기` / `비교하기` / `문의하기` / 호갱노노 | source §10 / §12 / §14 / App Store name |
| Founding 2015 / Shim Sang-min / Ministry of Land, Infrastructure and Transport / Zigbang 2018 / 2 million / 3D sunlight / school-district / reconstruction auction / resident reviews / Every design decision — the prominent price display, the map-first layout, the refusal to accept payment for listings — flows from that original commitment to be the side of the user. | source §11 narrative |

## Proof notes

- Four named Tier 1 sources, recorded 2026-06-03. The App Store listing is a brand source, not a computed-token surface.
- `components_harvested: true`; seven component records in the source token set (`button-primary`, `button-tint`, `button-disabled`, `chip-info`, `badge-up`, `badge-down`, `card`).
- The source records no `focus-visible` string. It does record a focus treatment on the modal phone input and names focus indicators among primary interactive states. Uncaptured hover, focus-visible, disabled, loading, error, and success treatments are omitted as values; they are not turned into `not-applicable`. Applicability follows control role. State coverage is not claimed complete.
- Hogangnono has no published first-party design system in the source. Derived-editorial qualifications therefore close with the toss-form example: not Hogangnono-authored or a separately published UI specification (rulebook v12 B2a 전제 주석).
- Founding year, founder, ministry source, Zigbang acquisition, user count, the capability list, and the source §11 closing sentence (prominent price display, map-first layout, refusal to accept payment for listings, side of the user) are source-stated narrative. They stay in Experience Scope as narrative context, not as interface tokens.

## Portable derived-editorial scope

Every passage in the portable `DESIGN.md` that carries the derived-editorial qualification. The qualification itself stays in the body; this table is an index, not its home. Measured against `DESIGN.md` with `grep -o 'derived editorial implementation inference' … | wc -l` (file-level, not `grep -c`): **31**. This table has **31** rows (E1 1:1). The same 31 lines also carry `not Hogangnono-authored` and `separately published UI specification`.

| Portable location | Qualified material |
|---|---|
| Experience — Scope ¶1 | Surface boundary: values stay attached; App Store listing is a named source that does not supply computed tokens |
| Experience — Scope ¶2 | Data-clarity / civic-tool / pragmatic-modern / map-and-price-dominant readings |
| Experience — Scope ¶3 | Classifying the 2015 founding / 2018 Zigbang narrative as context that does not supply tokens |
| Experience — Primary tasks | Selecting the four label-and-surface tasks; they do not come from the persona section |
| Experience — Audience | Reading buyers and renters as the audience grouping |
| Experience — Distinctive traits | Grouping the six traits and the interactive-carrier / map-dominant / civic readings |
| Experience — Principles | The five source principles and their UI implications (toss-form header) |
| Experience — Application rules | The seven Do-list rules and the reasons attached to them |
| Experience — Avoid | The six Don't-list prohibitions and the reasons inside them |
| Foundations — Semantic color | Interactive-carrier / price-only / grey-hierarchy role readings |
| Foundations — Spacing | Keeping spacing keys off rounded and type keys that share a number |
| Foundations — Shape | Keeping local 3px / 8px / 10px / 5px radii off the YAML scale |
| Foundations — Elevation | Reading the stack as map-first depth |
| Foundations — Motion | Treating recorded durations and keyframes as a motion contract rather than a published specification |
| Foundations — Motion / Photoswipe | Classing the gallery curve as Photoswipe-attributed and not a Hogangnono token-set easing step |
| Typography — Font evidence Official product-use | The "no published type token" reading |
| Typography — Font evidence Official distributed | The "no exclusive distributed family" reading |
| Typography — Font evidence Declared-only | Fallback members are not the brand face |
| Typography — Font evidence License | Pretendard as upstream face, not a Hogangnono-owned brand asset |
| Typography — Font evidence Outside these captures | Typography beyond the inspected homepage and recorded mobile-app layout sits outside this contract |
| Typography — Family | Fallback prohibition |
| Typography — Type roles | Keeping YAML singles and §3 ranges on separate readings, and the parenthetical 40px as source §3 spelling rather than a replacement of YAML 1.33 |
| Typography — Assets | Reading the Google s2 favicon URL as an identity pointer rather than a hosted brand file |
| Components — How applicability is decided | Role-based decision procedure, kind verdicts, applicability verdicts, and reasons |
| Components — Surface state contract | Reading the eight rows as a system-level contract rather than per-control observations |
| Layout — Split-panel | Map-first reading of the desktop split and the mobile bottom-sheet |
| Layout — YAML scale restatement | Keeping the YAML scale restatement off the 3px / 8px / 10 px local radii |
| Layout — Responsive | Stating §8 behaviors as source-written rather than as a measured cross-viewport specification |
| Content — Voice | Transparent / plain-spoken / user-protective characterization, register reading, and tone table |
| Content — Illustrative samples | Reading the three source-labeled illustrative samples as register examples, not issued microcopy |
| Content — Byte-exact rule | Byte-exact Korean / gloss-beside rule |
