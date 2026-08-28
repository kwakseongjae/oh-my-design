# iPASS MONEY provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/ipassmoney/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | ipassmoney |
| name | iPASS MONEY |
| country | TW |
| category | fintech |
| homepage | `https://www.i-pass.com.tw/Page/iPMIntroduce` |
| primary_color | `#53b232` |
| logo.type | favicon |
| logo.slug | `https://static01-ipass.cdn.hinet.net/ipassweb/iPassWebV2/Content/style2018/img/core-img/logo.png` |
| omd format (source) | 0.1 |
| verified | 2026-06-22 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-22 |
| components_harvested | true |

The homepage URL is dual-destination: identity metadata here, and a portable scope record in `DESIGN.md` §1. The YAML homepage is `https://www.i-pass.com.tw/Page/iPMIntroduce`. The source body and footer also write `https://www.i-pass.com.tw/Page/download` and `https://www.i-pass.com.tw/`. All three spellings are kept. The primary color is dual: identity here, and Foundations / components in `DESIGN.md`. The favicon URL is dual: identity here, and a portable asset pointer in `DESIGN.md` §3.

**Logo decision.** The `logo.slug` above is an iPASS-hosted PNG on `static01-ipass.cdn.hinet.net`. The catalog identity field is kept here and is classified in the portable document as a hosted brand file on the inspected surfaces.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-22 |
| tokens.extracted | 2026-06-22 |
| Tier 1 live inspect (source footer) | 2026-06-22 |

The source footer records the verification verbatim as **Verified:** 2026-06-22. That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved: none — as the source footer states.

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| introduce | service intro, live computed style | `https://www.i-pass.com.tw/Page/iPMIntroduce` | 2026-06-22 |
| download | app download, live computed style | `https://www.i-pass.com.tw/Page/download` | 2026-06-22 |
| home | homepage, live computed style | `https://www.i-pass.com.tw/` | 2026-06-22 |

### Tier 1 (as listed in the source footer)

- `https://www.i-pass.com.tw/Page/iPMIntroduce`
- `https://www.i-pass.com.tw/Page/download`

The source HTML comment and the sibling also list `https://www.i-pass.com.tw/` as a third inspected surface.

### Tier 2

- getdesign.md/ipassmoney — not found (404)
- styles.refero.design — no results for "ipass"

## Token note (YAML `tokens.note`)

The source frontmatter note, kept here as a ledger string and also landed in the portable body as the facts it names (primary = iPASS MONEY button green `#53b232`, rgb 83 178 50; brand green family `#10a83b` / `#00c43e` / `#00a73c`; body `#212529`; headings `#1c1c1c`; orange accent `#ff9900`):

> primary = iPASS MONEY button green (#53b232, rgb 83 178 50); brand green family spans #10a83b (nav active), #00c43e (social section), #00a73c (hero bg). Body near-black #212529; headings #1c1c1c. Orange accent #ff9900 used sparingly on highlight CTAs.

## Sibling handling (`web/references/ipassmoney/.verification.md`)

The sibling exists — confirmed with `find web/references/ipassmoney -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact that the source body does not already record.

Its own record, transcribed here:

- Inspected 2026-06-22. Method: playwright getComputedStyle (live DOM) — global playwright (chromium, headless), goto https://www.i-pass.com.tw/Page/iPMIntroduce domcontentloaded + 3.5s wait, then getComputedStyle on body, headings, buttons, links, and full-DOM color frequency scan. Second surface: https://www.i-pass.com.tw/Page/download. Third surface: https://www.i-pass.com.tw/.
- body: `font-family: stolzl, roboto, "Noto Sans TC", "Open Sans", 微軟正黑體, Arial, sans-serif`; `color: rgb(33, 37, 41)` (#212529); `font-size: 16px`; `line-height: 24px`; `background-color: rgb(255, 255, 255)` (#ffffff)
- H1 "服務介紹": `color: rgb(28, 28, 28)` (#1c1c1c); `font-size: 33.6px`; `font-weight: 400`
- H2 "一卡通 iPASS MONEY APP 實現生活簡單自由！": `color: rgb(28, 28, 28)` (#1c1c1c); `font-size: 32px`; `font-weight: 600`
- H2 "Here We Go！！": `color: rgb(255, 153, 0)` (#ff9900); `font-size: 32px`; `font-weight: 600`
- H4 "儲值簡單又安全": `color: rgb(83, 178, 50)` (#53b232); `font-size: 24px`; `font-weight: 600`
- H2 "立即下載一卡通 iPASS MONEY APP": `color: rgb(83, 178, 50)` (#53b232); `font-size: 32px`; `font-weight: 600`
- H2 "追蹤一卡通社群平台": `color: rgb(0, 196, 62)` (#00c43e); `font-size: 35.2px`; `font-weight: 600`
- Primary button: `background-color: rgb(83, 178, 50)` (#53b232); `color: rgb(255, 255, 255)`; `border-radius: 100px`; `padding: 16px 40px`; height 58px; `font-size: 16px`; `font-weight: 700`
- Social platform icon container: `background-color: rgb(244, 244, 244)` (#f4f4f4); `color: rgb(0, 196, 63)` (#00c43e); `border-radius: 200px`; `padding: 10px`; height 60px
- Nav link inactive "優惠活動": `color: rgb(119, 117, 115)` (#777573); `font-size: 17.6px`; `font-weight: 400`
- Nav active "認識儲值卡": `color: rgb(16, 168, 59)` (#10a83b); `font-size: 16.64px`; `font-weight: 700`
- Hero "convenience-list" section bg: `background-color: rgb(0, 167, 60)` (#00a73c)
- document.title (iPMIntroduce): "服務介紹 - iPASS一卡通"
- document.title (download): "立即下載 - iPASS一卡通"
- bgFreq: rgb(83,178,50) ×19 (#53b232), rgba(244,244,244,0.9) ×5, rgb(244,244,244) ×5 (#f4f4f4), rgb(255,255,255) ×4
- fgFreq: rgb(33,37,41) ×495 (#212529), rgb(119,117,115) ×213 (#777573), rgb(16,168,59) ×136 (#10a83b), rgb(0,0,0) ×51, rgb(255,255,255) ×39

Sibling-only items (mention, not portable use). This sentence names the field kind so the row can be found; it does not assert that those strings are absent from this file:

- H1 label `服務介紹` as a measured heading (the source portable page-title role does not assign that string)
- sibling H2 spelling `Here We Go！！` (fullwidth marks; the source portable line is `Here We Go!!`)
- sibling H2 spelling `立即下載一卡通 iPASS MONEY APP` (no space after 下載; the source portable line is `立即下載 一卡通 iPASS MONEY APP`)
- sibling H2 `追蹤一卡通社群平台`
- nav labels `優惠活動` and `認識儲值卡`
- document.title strings `服務介紹 - iPASS一卡通` and `立即下載 - iPASS一卡通`
- `line-height: 24px` as a computed px (the source portable body line-height stays the unitless `1.50`)
- `rgba(244,244,244,0.9)`
- frequency counts (×19 / ×5 / ×5 / ×4 / ×495 / ×213 / ×136 / ×51 / ×39)
- getdesign.md 404 and refero "no results for ipass"

Those sibling-only strings are transcribed in the bullet list above. They are not promoted into `DESIGN.md`.

Values the sibling shares with the source body (corroboration, not new portable facts): `#53b232`, `#10a83b`, `#00c43e`, `#00a73c`, `#212529`, `#1c1c1c`, `#777573`, `#f4f4f4`, `#ffffff`, `#ff9900`, stolzl, Noto Sans TC, 100px / 200px radii, 58px / 60px heights, 16.64px active nav, 35.2px social heading, "儲值簡單又安全", "實現生活簡單自由！".

## Token-set key paths (YAML)

| Path | Surface attachment |
|---|---|
| tokens.colors.primary / primary-nav / brand-bright / brand-hero / secondary-green / canvas / surface / ink / body / muted / on-primary / accent-orange / hairline | introduce + download + home |
| tokens.typography.family.display / family.body / family.fallback | introduce + download + home |
| tokens.typography.display-hero / section / subsection / nav / body / h1-page | introduce + download + home |
| tokens.spacing.xs / sm / md / base / lg / xl / xxl / section | introduce + download + home |
| tokens.rounded.sm / md / lg / full / circle | introduce + download + home |
| tokens.shadow.soft | introduce + download + home |
| tokens.components.button-primary / button-social / button-cookie / nav-link / card-surface / card-white / badge-green / toggle-menu | introduce + download + home |

## Omission ledger

Disposition mentions. These rows name the dropped field kind; they do not re-host the dropped content as a fact.

| Item | Disposition |
|---|---|
| §13 페르소나 4인 (이름·나이·도시 포함) | Deleted. The source's own header labels them fictional archetypes. Not promoted to Audience or primary-tasks, and not re-hosted here as names, ages, cities, motivations, or occupation classifications (D2, D2a). |
| §15 `ease-enter` `cubic-bezier(0.25, 0.46, 0.45, 0.94)` | Deleted. Unattributed curve. Role name and use kept. |
| §15 `ease-exit` `cubic-bezier(0.55, 0.085, 0.68, 0.53)` | Deleted. Unattributed curve. Role name and use kept. |
| §15 `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1.0)` | Deleted. Unattributed curve. Role name and use kept. |
| §9 Agent Prompt Guide — Quick Color Reference, Example Component Prompts, Iteration Guide | Deleted. Tool-facing copy-paste prompts. Values they restated are already in Foundations / Components. Unique §9 values (35.2px / 600 social heading, 60px nav height, white 32px/600 H2 on the green band) landed in the portable body before the prompts were dropped (A3). |

§9 deletion check (A3). Every value §9 names was confirmed present elsewhere in the portable body before the section was dropped. iPASS Green `#53b232`, Nav Active `#10a83b`, Bright Brand `#00c43e`, Hero `#00a73c`, Canvas `#ffffff`, Surface `#f4f4f4`, Heading `#1c1c1c`, Body `#212529`, Muted `#777573`, Orange `#ff9900` — Foundations semantic color. Primary CTA `#53b232` / white / 100px / `16px 40px` / 58px / `16px / 700 stolzl` / `立即下載` — Primary Action. Feature section `#00a73c` band, 32px/600 heading, white cards with 8px radius and `rgba(0,0,0,0.25) 0 0 5px` — Hero Green Section + White Elevated Card. Social row `#f4f4f4` / 60px / 200px / `#00c43e` / 35.2px/600 — Social Platform Link. Nav bar white / 60px / 17.6px/400 `#777573` / 16.64px/700 `#10a83b` / green pill CTA — Nav Link + Layout. Iteration-guide rules (green hierarchy, 100px+ radius, Chinese Noto / Latin stolzl, white→grey→green bands, orange as a single accent, heading weight 600) — Principles + Application rules + Avoid + Type rules + Shape.

## Derived editorial inventory

Portable `DESIGN.md` carries 36 complete B2a qualifications. This table is 36 data rows. Preamble sentences on this page are not portable qualifications.

| # | Portable location | Qualified reading |
|---|---|---|
| 1 | Experience Scope ¶1 | E-wallet and transit-card platform; three inspected pages as this contract's token surfaces; values stay attached |
| 2 | Experience Scope ¶2 | Government-adjacent professionalism / rounded geometry as accessibility / four greens as a transit-inspired system / dual-font pragmatic split / Bootstrap foundation |
| 3 | Experience Scope ¶3 | Founding-and-migration narrative as context that does not supply interface tokens |
| 4 | Primary tasks | Selecting the five recorded labels as primary tasks |
| 5 | Audience | Group-level Taiwanese daily commuters, urban households, cross-border travelers |
| 6 | Distinctive traits | Grouping the Key Characteristics as the distinctive layer |
| 7 | Principles | The five numbered items and their UI implications |
| 8 | Application rules | The seven Do rules and the reasons attached |
| 9 | Avoid | The seven Don't rules and the reasons inside them |
| 10 | Foundations Semantic color | Button-green-as-CTA / nav-active-as-deeper / bright-as-most-saturated / hero-as-mid-depth / Bootstrap-as-legacy / orange-as-urgency characterizations |
| 11 | Foundations Semantic color On-Primary | `tokens.colors.canvas` and `tokens.colors.on-primary` stay unmerged despite a shared hex |
| 12 | Foundations Spacing | Unitless steps unmerged from matching radius keys, type sizes, and padding halves |
| 13 | Foundations Shape | `full: 100` unmerged from `9999`, matching spacing keys, and type size; named uses kept on their own rows; Medium 8px as the card/container step |
| 14 | Foundations Elevation keep-both | Three shadow spellings unmerged |
| 15 | Foundations Elevation | Clarity-over-decoration reading of the light-touch product |
| 16 | Foundations Motion | Unattributed durations, roles, and rules; three untraceable curve values omitted |
| 17 | Typography Official product-use | "No published type token" |
| 18 | Typography Official distributed asset | stolzl as a web font; Noto Sans TC as Google's face |
| 19 | Typography Declared-only | Fallback stack members are not the brand face |
| 20 | Typography License | Google Noto without an iPASS-issued stolzl license notice |
| 21 | Typography Outside these captures | Typography beyond the three pages sits outside this contract |
| 22 | Typography Family | Dual-font restatement; fallback prohibition |
| 23 | Type roles | Six token-set roles kept on their paths; unitless line-height ratios stay ratios; 16.64px and 35.2px stay on components |
| 24 | Type rules | Chinese-first / weight-600 / green-subhead readings |
| 25 | Assets | Favicon URL as a hosted brand file; Noto as Google's face |
| 26 | Components how-to-read | Kind and applicability verdicts |
| 27 | Accent Consent Button | Cookie `#000000` stays a component foreground, not a color-token key |
| 28 | Hero Green Section | §9 white-on-green heading and hierarchy `#1c1c1c` stay two records |
| 29 | State record | System-level treatments without per-control observation |
| 30 | State record close | Rows are not attached as visual treatments to destination controls; Primary Action cites the `#5cb85c` fade |
| 31 | Layout whitespace | Full-band cognitive separation / padding-first / white→grey→green wayfinding |
| 32 | Layout responsive | Breakpoints stated at system level rather than measured across viewports |
| 33 | Content & Locales | Voice characterization, register reading, and tone table |
| 34 | Content Forbidden register | Premise-to-register causal |
| 35 | Content & Locales close | Byte-exact published strings; a gloss may sit beside a line and never replaces it |
| 36 | Recorded unresolved | Named values, not a license to invent |

## Proof notes

- verification schema from sibling: Tier 1 live inspect 2026-06-22; conflicts: none
- components_harvested: true
- Uncaptured hover / focus-visible treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete.
- Official history is narrative context, not a token source. The source's own §11 strings kept as narrative facts: established in Taiwan; Kaohsiung mass transit; 一卡通票證股份有限公司; orange-blue stored-value card; iPASS MONEY wallet; TWQR; fee-free inter-institutional transfers; utility bills; PayPay; early 2026 LINE Pay migration; green as public transport / sustainability / civic service; the last-sentence pairing of a minimal orange echo with green ownership of the digital palette. They do not by themselves supply interface tokens.
- No separately published iPASS MONEY UI specification is named in the source. Every derived-editorial close uses the toss-form `not iPASS MONEY-authored or a separately published UI specification` (rulebook v12 B2a 전제 주석)
