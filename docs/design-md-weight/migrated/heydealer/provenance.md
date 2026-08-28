# Heydealer provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/heydealer/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | heydealer |
| name | Heydealer |
| display_name_kr | 헤이딜러 |
| country | KR |
| category | consumer-tech |
| homepage | `https://www.heydealer.com/` |
| primary_color | `#396eff` |
| logo.type | favicon |
| logo.slug | `https://www.google.com/s2/favicons?domain=heydealer.com&sz=128` |
| omd format (source) | 0.1 |
| verified | 2026-07-02 |
| tokens.source | live-extract |
| tokens.extracted | 2026-07-02 |
| components_harvested | true |

The homepage URL is dual-destination: identity metadata here, and a portable scope record in `DESIGN.md` §1. The primary color is dual: identity here, and Foundations / components in `DESIGN.md`. The favicon slug is dual: identity here, and a portable asset pointer in `DESIGN.md` §3.

**Logo decision.** The `logo.slug` above is a Google favicon-service URL, not a Heydealer-hosted asset. The sibling verification file states that getdesign.md, refero, and Google favicon are explicitly not counted toward the KR brand-owned ≥2 requirement; the catalog identity field is kept here and is classified in the portable document as an identity pointer, not a hosted brand file.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-02 |
| added | 2026-07-02 |
| tokens.extracted | 2026-07-02 |
| Tier 1 live inspect (source footer) | 2026-07-02 |

The source footer records the verification verbatim as **Verified:** 2026-07-02 (omd:add-reference CREATE — Tier 1 live inspect, 3 surfaces). That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved: none — as the source footer states.

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| home | homepage / buy-car marketplace, live computed style | `https://www.heydealer.com/` | 2026-07-02 |
| detail | car detail — CTAs, chips, cards | `https://www.heydealer.com/market/cars/gQ60AKy0` | 2026-07-02 |
| sell | 내차팔기 sell flow — dark hero block | `https://www.heydealer.com/sell` | 2026-07-02 |
| prnd | PRND official company blog — brand-owned; not a computed-token surface | `https://medium.com/prnd` | named in the source footer |

### Tier 1 (as listed in the source footer)

- `https://www.heydealer.com/`
- `https://www.heydealer.com/market/cars/gQ60AKy0`
- `https://www.heydealer.com/sell`
- `https://medium.com/prnd`

### Tier 2

- getdesign.md/heydealer — 0 DESIGN.md files — not listed
- styles.refero.design/?q=heydealer — no heydealer style — generic browse grid only

## Token note (YAML `tokens.note`)

The source frontmatter note, kept here as a ledger string and also landed in the portable body as the facts it names (live product CTA blue on 바로 구매예약, secondary pure black, near-black ink never a soft grey, shadowless hairline + `#70727c` tint, sharp 4px workhorse):

> primary = live product CTA blue (#396eff, rgb 57,110,255) on 바로 구매예약; secondary action is pure black (#000000). Text is near-black ink #0d0d0e, never a soft grey. Shadowless system — separation via #e9eaec hairlines + low-alpha #70727c neutral tint. Sharp 4px radius is the workhorse.

## Sibling handling (`web/references/heydealer/.verification.md`)

The sibling exists — confirmed with `find web/references/heydealer -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact that the source body does not already record.

Its own record, transcribed here:

- Inspected 2026-07-02. Method: playwright getComputedStyle (live DOM) — global playwright (chromium, headless), goto each surface `waitUntil: domcontentloaded` + 3.5s settle, Escape-dismiss modals, then `getComputedStyle` on body, buttons/links/inputs, div/span leaf text (heading sizes), and a full-DOM background/text/radius frequency scan. Three token surfaces plus the PRND blog.
- body: `font-family: spoqaHanSansNeo, -apple-system, system-ui, sans-serif`; `color: rgb(13, 13, 14)` (#0d0d0e); `font-size: 16px`; `background: rgb(255, 255, 255)` (#ffffff)
- Primary CTA "바로 구매예약": `#396eff` / `#f8f8f9` / 4px / `0px 24px` / 52px / 15px / 700
- Secondary "인증 리포트": `#000000` / `#f8f8f9` / 4px / `0px 24px` / 52px / 15px / 700
- Nav button "내차사기": `#0d0d0e` / 4px / `8px` / height 38px / 15px / 700
- Nav inactive "내차팔기": `#37383d` @ 60% / 16px / 400
- Section head "색상": 20px / 700 / 28px / -0.32px
- Card head "비슷한 차": 18px / 700 / 26px / -0.252px
- Emphasis "2.0 가솔린": 15px / 700 / 22px / -0.195px
- Filter chip "2.0 가솔린": `#70727c` @ 8% / 1px solid `#000000` / 4px / `8px 12px` / height 36px
- Reassurance strip "모든 차량 1년 무료 보증": `#396eff` @ 4% / 4px / 12px / height 48px
- Photo thumbnail tile "외부 17": `#70727c` @ 5% / 4px
- Overlay search input: `#000000` / `#f8f8f9` / 16px / 16px / 400
- Dark block button "모든 차 1년 무료 보증": `#0f1014` / 4px
- Sell-flow hero: `#272e40` / on-dark `#f8f8f9`
- background frequency: `rgba(112,114,124,0.08)` ×67, `#ffffff` ×21, `#396eff` ×1, `#0f1014` ×1, `#272e40` ×1, `#f8f8f9` ×1
- text-color frequency: `#0d0d0e` ×658, `#000000` ×80, `#37383d` ×58, `#396eff` ×42, `#ffffff` ×39, `#2d2e32` ×36, `#e9eaec` ×6, `#858892` ×4
- radius frequency (car detail): `4px` ×147, `50%` ×26, `4px 4px 0px 0px` ×25, `100px` ×5, `16px`; homepage `2px` ×30
- `box-shadow: none` across hero, nav, listing cards, filter chips, and CTAs
- document.title: "헤이딜러 – 인증중고차, 내차팔기, [번호판]시세"

Values and strings the sibling carries that the visible source body does not, kept here and not promoted:

- Nav-button height `38px`
- Reassurance-strip height `48px`
- Photo-tile sample label `외부 17`
- Dark-block button label `모든 차 1년 무료 보증` (the source body records `모든 차량 1년 무료 보증`)
- Frequency counts (×67, ×658, and the rest)
- Segmented radius `4px 4px 0px 0px`
- Logo visual gloss `blue sphere with a white horizontal lens` / `dealer's eye`
- `apple-touch-icon.png` (180×180, 8582B) and favicon byte size 5914B
- Tier 2 page-miss string `heydealer — 0 DESIGN.md files | getdesign.md`

`~36px` filter-chip height is not sibling-only: the source §8 records it. It is dual: portable Layout + this ledger.

## Byte-form notes

- The source frontmatter records line heights as unitless ratios (`1.38`, `1.40`, `1.44`, `1.47`, `1.50`). They are carried as ratios in the portable body, never converted to a replacement px (A1a). The source table's parenthetical px conversions stay beside the ratios.
- The source frontmatter records spacing and radius steps unitless (`xs: 4` … `section: 48`; `sm: 2`, `md: 4`, `lg: 16`, `full: 9999`). The portable body keeps both the unitless steps and the px forms the visible sections use. `full: 9999` stays a step.
- `tokens.spacing.base: 16` is not `tokens.rounded.lg: 16`. `tokens.spacing.xs: 4` is not `tokens.rounded.md: 4`. `tokens.spacing.lg: 24` is not button padding `0 24px`. `tokens.rounded.full: 9999` is not the body-named `100px` pill and is not the `50%` circle.
- YAML `tokens.typography.card-head.tracking: -0.25` sits beside the visible-section form `-0.252px`. Neither was chosen as a replacement.
- YAML `nav-link` is 16px / 400. The §4 Nav Text Button is 15px / 700 / 8px padding. Those are different records.

## Claim ledger

| Claim | Surface |
|---|---|
| tokens.colors.primary / ink / ink-pure / ink-navy / chip-dark / muted / muted-alt / muted-grey / surface / canvas / on-dark / hairline | home + detail + sell |
| tokens.typography.family.sans | home + detail + sell |
| tokens.typography.display / section / card-head / emphasis / body / meta | home + detail |
| tokens.spacing.xs / sm / md / base / lg / section | home + detail |
| tokens.rounded.sm / md / lg / full | home + detail |
| tokens.shadow.none | home + detail + sell |
| tokens.components.button-primary / button-secondary | detail |
| tokens.components.nav-link | home |
| tokens.components.filter-chip / card-white / card-thumb | detail |
| tokens.components.search-input | home |

## Omission ledger

Disposition mentions. These rows name the dropped field kind; they do not re-host the dropped content as a fact.

| Item | Disposition |
|---|---|
| §13 페르소나 3인 (이름·나이·도시 포함) | Deleted. The source's own header labels them fictional archetypes. Not promoted to Audience or primary-tasks, and not re-hosted here as names, ages, or cities (D2, D2a). |
| §15 `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)` | Deleted. Unattributed curve. Role name and use kept. |
| §15 `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` | Deleted. Unattributed, and byte-identical to the documented re-injection path in `spec/omd-v0.1.md`. |
| §15 `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)` | Deleted. Unattributed curve. Role name and use kept. |
| §9 Agent Prompt Guide — Quick Color Reference, Example Component Prompts, Iteration Guide | Deleted. Tool-facing copy-paste prompts. Values they restated are already in Foundations / Components. |

§9 deletion check (A3). Every value §9 names was confirmed present elsewhere in the portable body before the section was dropped. Heydealer Blue `#396eff`, Pure Black `#000000`, Canvas `#ffffff`, Neutral Surface `#70727c`, Ink `#0d0d0e`, Muted `#37383d`, Muted Grey `#858892`, On-Dark `#f8f8f9`, Chip Dark `#0f1014`, Ink Navy `#272e40`, Hairline `#e9eaec` — Foundations semantic color. Purchase CTA `#396eff` / `#f8f8f9` / 4px / `0 24px` / 52px / 15px / 700 — Primary Purchase CTA. Black secondary same geometry — Black Secondary. White listing card `#ffffff` / `1px solid #e9eaec` / 4px / no shadow / 18px / 700 / -0.252px / `#0d0d0e` / meta 15px / 400 / `#858892` — White Listing Card + Type roles. Filter chip low-alpha `#70727c` / `#0d0d0e` / 4px / `8px 12px` / 16px / 400 / selected `1px solid #000000` — Selected Filter Chip. Top nav white / 16px / 400 / `#0d0d0e` active / `#37383d` at 60% / `#e9eaec` hairline — Top Nav. Iteration-guide rules (Spoqa Han Sans Neo, reserved blue, black secondary, no shadows, 4px default / 16px search only, `#0d0d0e` ink, tight tracking, `#f8f8f9` on dark) — Principles + Application rules + Avoid + Type rules.

## Derived editorial inventory

Portable `DESIGN.md` carries 31 complete B2a qualifications. This table is 31 data rows. Preamble sentences on this page are not portable qualifications.

| # | Portable location | Qualified reading |
|---|---|---|
| 1 | Experience Scope ¶1 | Three inspected pages as this contract's token surfaces; values stay attached; PRND blog is not a computed-token surface |
| 2 | Experience Scope ¶2 | Engineered-tool / dashboard / instrument / reserved-blue characterizations |
| 3 | Experience Scope ¶3 | Founding-and-expansion narrative as context that does not supply interface tokens |
| 4 | Experience Scope ¶4 | Refusal/embrace pairing read as a current-surface design instruction |
| 5 | Primary tasks | Selecting the five recorded labels as primary tasks |
| 6 | Audience | Group-level sellers / buyers / scrap / hidden-history audience |
| 7 | Distinctive traits | Grouping the Key Characteristics as the distinctive layer |
| 8 | Principles | The five numbered items and their UI implications |
| 9 | Application rules | The eight Do rules and the reasons attached |
| 10 | Avoid | The eight Don't rules and the reasons inside them |
| 11 | Foundations Semantic color | Reserved-commit / near-black / second-dark / engineered-flatness characterizations |
| 12 | Foundations Spacing | Unitless steps unmerged from radius and padding keys |
| 13 | Foundations Shape | `full: 9999` unmerged from 100px pill and 50% circle |
| 14 | Foundations Elevation | Near-shadowless modern-flat / anti-classified-stack reading |
| 15 | Foundations Motion | Unattributed durations, roles, and rules |
| 16 | Typography Official product-use | "No published type token" |
| 17 | Typography Declared-only | Fallback stack members are not the brand face |
| 18 | Typography License | Open-source family without a Heydealer-issued license notice |
| 19 | Typography Outside these captures | Typography beyond the three pages sits outside this contract |
| 20 | Typography Family | Fallback prohibition |
| 21 | Type roles | Ratios kept beside parenthetical px; YAML `-0.25` beside `-0.252px` |
| 22 | Type rules | Hierarchy-signal / consistency / dense-data readings |
| 23 | Assets | Favicon-service as identity pointer; photography as first-party catalog |
| 24 | Components how-to-read | Kind and applicability verdicts |
| 25 | State record | System-level treatments without per-control observation |
| 26 | State record close | Rows are not attached as visual treatments to destination controls |
| 27 | Layout whitespace | Dense-but-breathable / flat segmentation / sticky-CTA isolation |
| 28 | Layout responsive | Breakpoints stated at system level rather than measured across viewports |
| 29 | Content & Locales | Voice characterization, register reading, and tone table |
| 30 | Content & Locales close | Byte-exact Korean strings; English gloss may sit beside a line and never replaces it |
| 31 | Typography Official distributed asset | No exclusive downloadable font package |

## Proof notes

- verification schema from sibling: Tier 1 live inspect 2026-07-02; conflicts: none
- components_harvested: true
- Uncaptured hover / focus-visible treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete.
- Official history (2015 launch / 2016 헤이딜러 방지법 / later 내차사기 expansion) is narrative context, not a token source
- Heydealer has no published first-party design system in this packet (getdesign.md/heydealer not listed), so every derived-editorial close uses the toss-form "not Heydealer-authored or a separately published UI specification"
