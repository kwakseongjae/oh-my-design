# IGAWorks provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/igaworks/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | igaworks |
| name | IGAWorks |
| display_name_kr | 아이지에이웍스 |
| country | KR |
| category | marketing |
| homepage | `https://www.igaworks.com/` |
| primary_color | `#1a1d23` |
| logo.type | favicon |
| logo.slug | `https://www.google.com/s2/favicons?domain=igaworks.com&sz=128` |
| omd format (source) | 0.1 |
| verified | 2026-07-02 |
| tokens.source | live-extract |
| tokens.extracted | 2026-07-02 |
| components_harvested | true |

The homepage URL is dual-destination: identity metadata here, and a portable scope record in `DESIGN.md` §1. The primary color is dual: identity here, and Foundations / components in `DESIGN.md`. The favicon slug is dual: identity here, and a portable asset pointer in `DESIGN.md` §3.

**Logo decision.** The `logo.slug` above is a Google favicon-service URL, not an IGAWorks-hosted asset. The sibling verification file states that getdesign.md, refero, and Google favicon are explicitly not counted toward the KR brand-owned ≥2 requirement; the catalog identity field is kept here and is classified in the portable document as an identity pointer, not a hosted brand file.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-02 |
| added | 2026-07-02 |
| tokens.extracted | 2026-07-02 |
| Tier 1 live inspect (source footer) | 2026-07-02 |

The source footer records the verification verbatim as **Verified:** 2026-07-02. That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved: none — as the source footer states.

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| home | corporate homepage, live computed style | `https://www.igaworks.com/` | 2026-07-02 |
| solutions | Solutions page, live computed style | `https://www.igaworks.com/solutions` | 2026-07-02 |
| blog | IGAWorks official company blog — brand-owned; not a computed-token surface | `https://www.igaworksblog.com/` | named in the source footer |

### Tier 1 (as listed in the source footer)

- `https://www.igaworks.com/`
- `https://www.igaworks.com/solutions`
- `https://www.igaworksblog.com/`

### Tier 2

- getdesign.md/igaworks — 0 DESIGN.md files; no entry. Alt `getdesign.md/mobileindex` also 0 files.
- styles.refero.design/?q=igaworks — 96 fuzzy results, all unrelated; no IGAWorks / MobileIndex entry.

## Token note (YAML `tokens.note`)

The source frontmatter note, kept here as a ledger string and also landed in the portable body as the facts it names (corporate ink `#1a1d23` as the iGA logotype / hero heading / primary CTA; single blue action accent `#3464f4` on the newsletter subscribe button; red `#ef4343` and green `#17cf63` as data/status accents echoing the tricolor logo dots; flat, shadowless system on white):

> primary = corporate ink (#1a1d23) — the iGA logotype color, hero heading, and primary CTA background. Single blue action accent (#3464f4) on the newsletter subscribe button; red (#ef4343) and green (#17cf63) are data/status accents that echo the tricolor logo dots. Flat, shadowless system on white.

## Sibling handling (`web/references/igaworks/.verification.md`)

The sibling exists — confirmed with `find web/references/igaworks -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact that the source body does not already record.

Its own record, transcribed here:

- Inspected 2026-07-02. Method: playwright getComputedStyle (live DOM) — global playwright (chromium, headless, viewport 1440×900), goto with `waitUntil: domcontentloaded` + 3.5s settle, cookie/modal dismissal pass, then `getComputedStyle` on body, h1/h2/h3, header/nav, buttons, links, inputs, and a full-DOM background/text color frequency scan. Two corporate surfaces inspected.
- body: `font-family: "Pretendard Variable", Pretendard, -apple-system, system-ui, sans-serif`; `color: rgb(55, 63, 73)` (#373f49); `font-size: 16px`; `line-height: 24px`; `background-color: rgb(255, 255, 255)` (#ffffff)
- home H1 "Built on Data.Driven by AI.": `font-size: 88px`; `font-weight: 900`; `color: rgb(26, 29, 35)` (#1a1d23); height 194px
- section H2 "Solutions by IGAWorks→": `font-size: 36px`; `font-weight: 700`; `color: rgb(26, 29, 35)` (#1a1d23)
- category H2 "Data Infrastructure": `font-size: 28px`; `font-weight: 600`; `color: rgb(30, 41, 59)` (#1e293b)
- three-act H3 "01 Data: The AI Moat" / "02 The AI-Synthetic Audience" / "03 AI Solutions, Built on the Data": `font-size: 28px`; `font-weight: 700`; `color: rgb(26, 29, 35)` (#1a1d23)
- primary CTA "문의하기": `background-color: rgb(26, 29, 35)` (#1a1d23); `color: rgb(255, 255, 255)`; `border-radius: 12px`; `padding: 10px 24px`; `font-size: 15px`; `font-weight: 500`; height 43px
- newsletter subscribe "구독": `background-color: rgb(52, 100, 244)` (#3464f4); `color: rgb(255, 255, 255)`; `border-radius: 8px`; `padding: 10px 20px`; `font-size: 14px`; `font-weight: 500`; height 41px
- secondary link "바로가기" (solutions page): `background-color: rgb(255, 255, 255)` (#ffffff); `color: rgb(26, 29, 35)` (#1a1d23); `border: 1px solid rgb(229, 231, 235)` (#e5e7eb); `border-radius: 12px`; `padding: 10px 20px`; height 43px; `font-size: 14px`
- newsletter input: `padding: 10px 16px`; `font-size: 15px`; `color: rgb(26, 29, 35)` (#1a1d23); height 43px
- nav links (Solution/Data/Culture/Blog): `color: rgb(79, 88, 100)` (#4f5864); `font-size: 16px`; `font-weight: 400`
- card title H3 "모바일 시장의 흐름을 한눈에" (solutions page): `font-size: 24px`; `font-weight: 700`; `color: rgb(26, 29, 35)` (#1a1d23)
- newsletter block H3 "매주 뉴스레터로 인사이트를 받아보세요.": `font-size: 18px`; `font-weight: 700`; `color: rgb(26, 29, 35)` (#1a1d23)
- top background colors (frequency scan, home): `rgb(255,255,255)` ×10 (#ffffff), `rgb(26,29,35)` ×5 (#1a1d23), `rgba(239,67,67,0.1)` ×4 (red tint #ef4343), `rgb(23,207,99)` ×4 (#17cf63), `rgb(242,245,248)` ×1 (#f2f5f8), `rgb(244,244,246)` ×1 (#f4f4f6), `rgb(52,100,244)` ×1 (#3464f4)
- top text colors (frequency scan, home): `rgb(55,63,73)` ×255 (#373f49), `rgb(79,88,100)` ×40 (#4f5864), `rgb(26,29,35)` ×32 (#1a1d23), `rgb(239,67,67)` ×12 (#ef4343), `rgb(30,41,59)` ×11 (#1e293b), `rgb(75,85,99)` ×9 (#4b5563)
- top text colors (frequency scan, solutions page): `rgb(55,63,73)` ×297 (#373f49), `rgb(26,29,35)` ×127 (#1a1d23), `rgb(79,88,100)` ×73 (#4f5864), `rgb(75,85,99)` ×12 (#4b5563)
- borders throughout: `rgb(229, 231, 235)` (#e5e7eb) hairline; `box-shadow: none` across hero, nav, headings, cards, CTAs, and inputs on both surfaces
- document.title: "IGAWorks | Built on Data. Driven by AI." (home) / "솔루션 | IGAWorks" (solutions)
- brand mark (favicon.png, 9535B, viewed): "iGA" wordmark in dark ink (#1a1d23) with three dots above — red (#ef4343), yellow/gold, blue (#3464f4)

Values and strings the sibling carries that the visible source body does not, kept here and not promoted:

- H1 height `194px`
- Sibling H1 spelling `Built on Data.Driven by AI.` (no space after the first period)
- Section H2 arrow form `Solutions by IGAWorks→`
- Card title H3 `모바일 시장의 흐름을 한눈에`
- Frequency counts (×10, ×255, ×297, and the rest)
- Viewport `1440×900`
- document.title `IGAWorks | Built on Data. Driven by AI.` and `솔루션 | IGAWorks`
- Brand CDN `https://www.igaworks.com/favicon.png` (9535B)
- Sibling yellow/gold wording for the middle logo dot (the source body names yellow without a hex)

`문의하기` / `구독` / `바로가기` / `매주 뉴스레터로 인사이트를 받아보세요` / `Data Infrastructure` / 43px / 41px / 10px 24px / 10px 20px are already in the source body and are corroboration, not a sibling-only promotion.

## Byte-form notes

- The source frontmatter records line heights as unitless ratios (`1.1`, `1.2`, `1.3`, `1.4`, `1.5`). They are carried as ratios in the portable body, never converted to a replacement px (A1a). The source table's tilde forms (`~1.1` …) and the parenthetical `24px` stay beside the ratios. Sub-head / nav / button / button-sm have no YAML `lineHeight`; the source table writes `normal` and no ratio is invented.
- The source frontmatter records spacing and radius steps unitless (`xs: 4` … `section: 64`; `sm: 8`, `md: 12`, `full: 9999`). The portable body keeps both the unitless steps and the px forms the visible sections use. `full: 9999` stays a step.
- `tokens.spacing.sm: 8` is not `tokens.rounded.sm: 8`. `tokens.spacing.md: 12` is not `tokens.rounded.md: 12`. `tokens.spacing.base: 16` is not a type size. `tokens.spacing.lg: 20` is not the 20px half of `10px 20px`. `tokens.spacing.xl: 24` is not the 24px half of `10px 24px`.
- YAML `tokens.colors.canvas: #ffffff` is the page-background / card-surface role. YAML `tokens.colors.on-primary: #ffffff` is the text on the dark ink CTA. They share a hex and stay separate keys.

## Claim ledger

| Claim | Surface |
|---|---|
| tokens.colors.primary / canvas / body / slate / muted / muted-alt / hairline / surface / surface-alt / accent-blue / accent-red / accent-green / on-primary | home + solutions |
| tokens.typography.family.sans / family.fallback | home + solutions |
| tokens.typography.display-hero | home |
| tokens.typography.display / section / category / card-title / subhead / body / nav / button / button-sm | home + solutions |
| tokens.spacing.xs / sm / md / base / lg / xl / xxl / section | home + solutions |
| tokens.rounded.sm / md / full | home + solutions |
| tokens.shadow.none | home + solutions |
| tokens.components.cta-primary / subscribe-button / newsletter-input / nav-link | home |
| tokens.components.cta-outline / solution-card / surface-card / accent-badge | home + solutions |

## Omission ledger

Disposition mentions. These rows name the dropped field kind; they do not re-host the dropped content as a fact.

| Item | Disposition |
|---|---|
| §13 페르소나 3인 (이름·나이·도시 포함) | Deleted. The source's own header labels them fictional archetypes. Not promoted to Audience or primary-tasks, and not re-hosted here as names, ages, cities, motivations, or occupation classifications (D2, D2a). |
| §15 `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)` | Deleted. Unattributed curve. Role name and use kept. |
| §15 `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` | Deleted. Unattributed, and byte-identical to the documented re-injection path in `spec/omd-v0.1.md`. |
| §15 `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)` | Deleted. Unattributed curve. Role name and use kept. |
| §9 Agent Prompt Guide — Quick Color Reference, Example Component Prompts, Iteration Guide | Deleted. Tool-facing copy-paste prompts. Values they restated are already in Foundations / Components. |

§9 deletion check (A3). Every value §9 names was confirmed present elsewhere in the portable body before the section was dropped. Corporate Ink `#1a1d23`, Pure White `#ffffff`, Action Blue `#3464f4`, Body Slate `#373f49`, Slate `#1e293b`, Muted Slate `#4f5864`, Surface Grey `#f2f5f8`, Surface Alt `#f4f4f6`, Hairline `#e5e7eb`, Data Red `#ef4343`, Data Green `#17cf63` — Foundations semantic color. Hero 88px / 900 / `#1a1d23` / `Built on Data. Driven by AI.` — Type roles + Scope. Primary CTA `#1a1d23` / white / 12px / `10px 24px` / 15px / 500 / `문의하기` — Primary CTA (Ink). Solution card white / `1px solid #e5e7eb` / 12px / no shadow / title 24px / 700 / body 16px / 400 / `#373f49` / `바로가기` outline — White Solution Card + Secondary Link + Type roles. Newsletter row white email 8px / `10px 16px` / 15px next to blue subscribe `#3464f4` / 8px / 14px / 500 / `구독` — Newsletter Field + Subscribe. Top nav white header / 16px / 400 / `#4f5864` / active `#1a1d23` / ink CTA `문의하기` — Top Nav + Primary CTA. Iteration-guide rules (Pretendard Variable for everything, dark ink as primary action, blue marks one action, no shadows, 12/8/full radius, `#1a1d23` / `#373f49`, red/green as data accents) — Principles + Application rules + Avoid + Type rules.

## Derived editorial inventory

Portable `DESIGN.md` carries 33 complete B2a qualifications. This table is 33 data rows. Preamble sentences on this page are not portable qualifications.

| # | Portable location | Qualified reading |
|---|---|---|
| 1 | Experience Scope ¶1 | Data-and-AI marketing company; two inspected pages as this contract's token surfaces; values stay attached; company blog is not a computed-token surface |
| 2 | Experience Scope ¶2 | Infrastructure-substrate / restraint-is-the-message / single-font discipline / dashboard-behind-the-marketing characterizations |
| 3 | Experience Scope ¶3 | Founding-and-portfolio narrative as context that does not supply interface tokens |
| 4 | Primary tasks | Selecting the five recorded labels as primary tasks |
| 5 | Audience | Group-level app marketers, growth teams, market analysts, agency planners |
| 6 | Distinctive traits | Grouping the Key Characteristics as the distinctive layer |
| 7 | Principles | The five numbered items and their UI implications |
| 8 | Application rules | The eight Do rules and the reasons attached |
| 9 | Avoid | The eight Don't rules and the reasons inside them |
| 10 | Foundations Semantic color | Ink-as-action / single-blue / data-status / hairline-as-separator characterizations |
| 11 | Foundations Semantic color On-Primary | `tokens.colors.canvas` and `tokens.colors.on-primary` stay unmerged despite a shared hex |
| 12 | Foundations Spacing | Unitless steps unmerged from matching radius keys and from padding halves |
| 13 | Foundations Shape | `full: 9999` unmerged from matching spacing keys |
| 14 | Foundations Elevation | Modern-flat / engineered / not-legacy-card-stack reading |
| 15 | Foundations Motion | Unattributed durations, roles, and rules |
| 16 | Typography Official product-use | "No published type token" |
| 17 | Typography Official distributed asset | No exclusive downloadable font package |
| 18 | Typography Declared-only | Fallback stack members are not the brand face |
| 19 | Typography License | Upstream family without an IGAWorks-issued license notice |
| 20 | Typography Outside these captures | Typography beyond the two pages sits outside this contract |
| 21 | Typography Family | Single-family restatement; fallback prohibition |
| 22 | Type roles | Ratios kept beside tilde forms; empty YAML lineHeight cells stay `normal` |
| 23 | Type rules | Hierarchy / loudest-element / tappable / hangul-legibility readings |
| 24 | Assets | Favicon-service as identity pointer; photography as first-party catalog |
| 25 | Components how-to-read | Kind and applicability verdicts |
| 26 | State record | System-level treatments without per-control observation |
| 27 | State record close | Rows are not attached as visual treatments to destination controls; subscribe cites matching system-level treatments |
| 28 | Layout whitespace | Airy marketing surface / flat tint-and-hairline / ink-as-maximum-contrast |
| 29 | Layout responsive | Breakpoints stated at system level rather than measured across viewports |
| 30 | Content & Locales | Voice characterization, register reading, and tone table |
| 31 | Content Forbidden register | Premise-to-register causal (trusted platform, not a hard sell) |
| 32 | Content & Locales close | Byte-exact Korean strings; English gloss may sit beside a line and never replaces it |
| 33 | Recorded unresolved | Named values, not a license to invent |

## Proof notes

- verification schema from sibling: Tier 1 live inspect 2026-07-02; conflicts: none
- components_harvested: true
- Uncaptured hover / focus-visible treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete.
- Official history is narrative context, not a token source. The source's own §11 strings kept as narrative facts: `mobile advertising attribution`; `01 Data: The AI Moat`; `02 The AI-Synthetic Audience`; `03 AI Solutions, Built on the Data.`; `MobileIndex`; `scientific scarcity`; `single-product app`; `we are the data layer`; `look at us`. They do not by themselves supply interface tokens.
- No separately published IGAWorks UI specification is named in the source. Every derived-editorial close uses the toss-form `not IGAWorks-authored or a separately published UI specification` (rulebook v12 B2a 전제 주석)
