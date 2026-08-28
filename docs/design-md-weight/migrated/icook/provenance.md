# iCook provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/icook/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | icook |
| name | iCook |
| display_name_zh | 愛料理 |
| country | TW |
| category | consumer-tech |
| homepage | `https://icook.tw` |
| primary_color | `#f04646` |
| logo.type | favicon |
| logo.slug | `https://www.google.com/s2/favicons?domain=icook.tw&sz=128` |
| omd format (source) | 0.1 |
| verified | 2026-06-22 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-22 |
| components_harvested | true |

The homepage URL is dual-destination: identity metadata here, and a portable scope record in `DESIGN.md` §1. The primary color is dual: identity here, and Foundations / components in `DESIGN.md`. The favicon slug is dual: identity here, and a portable asset pointer in `DESIGN.md` §3.

**Logo decision.** The `logo.slug` above is a Google favicon-service URL, not an iCook-hosted asset. The sibling verification file states that getdesign.md and refero do not count toward the TW brand-owned ≥2 requirement; the catalog identity field is kept here and is classified in the portable document as an identity pointer, not a hosted brand file.

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
| home | homepage, live computed style | `https://icook.tw` | 2026-06-22 |
| popular | recipe browse listing, live computed style | `https://icook.tw/recipes/popular` | 2026-06-22 |

### Tier 1 (as listed in the source footer)

- `https://icook.tw`
- `https://icook.tw/recipes/popular`

### Tier 2

- getdesign.md/icook — 0 results (not listed)
- styles.refero.design/?q=icook — no matching entries

## Token note (YAML `tokens.note`)

The source frontmatter note, kept here as a ledger string and also landed in the portable body as the facts it names (coral-red CTA `#f04646` / live rgb(240,70,70); accent-warm `#f06354` / rgb(240,99,84); amber `#f0993c`; canvas warm-white `#fbfaf8`; ink-brown `#564e4a`):

> primary = iCook coral-red CTA (#f04646, live rgb(240,70,70)); accent-warm = softer coral (#f06354, rgb(240,99,84)) for interactive ghost buttons/links; amber = seasonal/badge orange (#f0993c); canvas warm-white (#fbfaf8); ink-brown = body text (#564e4a) warm near-black

## Sibling handling (`web/references/icook/.verification.md`)

The sibling exists — confirmed with `find web/references/icook -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact that the source body does not already record.

Its own record, transcribed here:

- Inspected 2026-06-22. Method: playwright getComputedStyle (live DOM) — global playwright (chromium, headless), goto https://icook.tw/ domcontentloaded + 3.5s wait, cookie/modal dismissal pass, then getComputedStyle on body, headings, buttons, inputs, and full-DOM background/text color frequency scan. Second surface: https://icook.tw/recipes/popular.
- body: `font-family: system-ui, -apple-system, "system-ui", "PingFang TC", "Microsoft JhengHei", ...`; `color: rgb(86, 78, 74)` (#564e4a); `font-size: 14px`; `line-height: 16.1px`; `background-color: rgb(255, 255, 255)`
- BUTTON "下載APP" (nav CTA): `background-color: rgb(240, 70, 70)` (#f04646); `color: rgb(255, 255, 255)`; `border-radius: 4px`; `padding: 1px 6px`; `height: 32px`; `font-size: 14px`; `font-weight: 500`
- BUTTON "在 iCook App 開啟" (recipe CTA): `background-color: rgb(240, 70, 70)` (#f04646); `color: rgb(255, 255, 255)`; `border-radius: 4px`; `padding: 8px 16px`
- BUTTON carousel ghost circle: `border: 1px solid rgb(240, 99, 84)` (#f06354); `border-radius: 50%`; `color: rgb(240, 99, 84)`; `padding: 8px`; `height: 32px`; `background-color: rgba(0, 0, 0, 0)`
- BUTTON "更多" (section more-link): `color: rgb(240, 99, 84)` (#f06354); `background-color: rgba(0, 0, 0, 0)`; `border-radius: 0px`; `padding: 1px 6px`; `font-size: 16px`; `font-weight: 400`
- BUTTON search submit: `background-color: rgb(240, 70, 70)` (#f04646); `border-radius: 0px 4px 4px 0px`; `height: 44px`; `color: rgb(255, 255, 255)`
- INPUT search "搜尋食譜名": `background-color: rgb(255, 255, 255)`; `color: rgb(86, 78, 74)`; `padding: 0px 15px`; `height: 44px`; `font-size: 14px`; `border-radius: 0px`
- A "升級 VIP" (nav link): `color: rgb(240, 70, 70)` (#f04646); `font-size: 14px`; `font-weight: 400`
- A "最新食譜" (category tab): `color: rgb(86, 78, 74)`; `font-size: 16px`; `font-weight: 700`; `padding: 0px 16px`; `height: 40px`
- story card (class `homepageStoryCard`): `background-color: rgb(240, 240, 240)` (#f0f0f0); `border-radius: 16px`; `box-shadow: none`
- H1 "人氣食譜": `color: rgb(86, 78, 74)`; `font-size: 28px`; `font-weight: 700`
- H3 "精彩活動": `color: rgb(86, 78, 74)`; `font-size: 24px`; `font-weight: 600`
- H2 "鑄鐵鍋燜油飯-一鍋到底": `color: rgb(86, 78, 74)`; `font-size: 20px`; `font-weight: 700`
- H4 "一日三餐，美國雞肉陪伴你": `color: rgb(86, 78, 74)`; `font-size: 18px`; `font-weight: 600`
- Top background frequencies: `rgb(240, 240, 240)` ×48, `rgb(255, 255, 255)` ×42, `rgb(240, 70, 70)` ×4, `rgba(0, 0, 0, 0.32)` ×2, `rgb(251, 250, 248)` ×2, `rgb(255, 96, 96)` ×1, `rgb(240, 153, 60)` ×1 (#f0993c), `rgb(0, 0, 0)` ×1
- Top text frequencies: `rgb(86, 78, 74)` ×545, `rgb(255, 255, 255)` ×134, `rgb(0, 0, 0)` ×126, `rgb(137, 129, 125)` ×42, `rgb(240, 99, 84)` ×24, `rgb(240, 70, 70)` ×6, `rgb(143, 139, 137)` ×6, `rgb(163, 155, 151)` ×2, `rgb(240, 153, 60)` ×1
- document.title: "愛料理 - 300,000 道食譜，每天都有新食譜！"
- page logo link text: "開啟美好生活，愛料理"
- footer copyright: © 2011-2026 Polydice, Inc.

Values and strings the sibling carries that the visible source body does not, kept here and not promoted:

- Search-submit button radius `0px 4px 4px 0px`
- Search placeholder string `搜尋食譜名`
- H4 title `一日三餐，美國雞肉陪伴你`
- Ghost / more-link `background-color: rgba(0, 0, 0, 0)`
- Overlay frequency `rgba(0, 0, 0, 0.32)`
- Frequency counts (×48, ×545, and the rest)
- Sibling title hyphen form `愛料理 - 300,000 道食譜，每天都有新食譜！` (the source body uses the shorter `300,000 道食譜，每天都有新食譜！`)
- Footer copyright `© 2011-2026 Polydice, Inc.`
- Extra text-frequency hex cluster `rgb(143, 139, 137)`
- Compound brand lockup `愛料理 iCook` (the visible source body writes `iCook (愛料理)`, not this order)

`下載APP` / `在 iCook App 開啟` / `更多` / `升級 VIP` / `最新食譜` / `人氣食譜` / `鑄鐵鍋燜油飯-一鍋到底` / `精彩活動` / `開啟美好生活，愛料理` are already in the source body and are corroboration, not a sibling-only promotion.

## Source-comment transcription

The source HTML comment (philosophy-layer note) is ledger text, not a second portable token set. Facts it restates that the visible body already carries stay in `DESIGN.md`. Comment-only strings stay here:

- Android package name `com.polydice.icook`
- Category tab `氣炸鍋` (the visible §4 tab list does not include this label)
- H2 short form `鑄鐵鍋燜油飯` without the `-一鍋到底` suffix
- Computed body line-height `16.1px` beside the token-set ratio `1.15`
- Frequency scan restated in the comment (same class as the sibling frequencies)

## Byte-form notes

- The source frontmatter records line heights as unitless ratios (`1.4`, `1.0`, `1.15`, `1.5`). They are carried as ratios in the portable body, never converted to a replacement px (A1a).
- The source frontmatter records spacing and radius steps unitless (`xs: 4` … `section: 48`; `none: 0`, `sm: 4`, `md: 8`, `lg: 16`, `full: 9999`). The portable body keeps both the unitless steps and the px forms the visible sections use. `full: 9999` stays a step — it is not `99999`. The visible scale also writes `9999px` and pairs `50% / 9999px` for circular ghost buttons. The ghost-button component record uses `50%`. The three writings stay unmerged.
- The source §9 example records a white `56px` header. That height has no other home in the visible body, so it lands in Layout (A3).
- `tokens.spacing.xs: 4` is not `tokens.rounded.sm: 4`. `tokens.spacing.sm: 8` is not `tokens.rounded.md: 8`. `tokens.spacing.md: 16` is not `tokens.rounded.lg: 16`. `tokens.spacing.base: 15` is the live search-bar horizontal padding, not `tokens.spacing.md: 16`.
- YAML `tokens.colors.canvas: #ffffff` is the page/card/search/header role. YAML `tokens.colors.on-primary: #ffffff` shares a hex with canvas and stays a separate key.
- YAML `tokens.shadow.card` `0 1px 4px rgba(0,0,0,0.08)` stays a token-set key. Visible story-card and event-card records use `shadow: none`. The paths stay unmerged.

## Claim ledger

| Claim | Surface |
|---|---|
| tokens.colors.primary / primary-light / accent-warm / amber / ink / muted / muted-light / faint / canvas / surface / surface-warm / surface-mid / hairline / on-primary | home + popular |
| tokens.typography.family.display / family.body | home + popular |
| tokens.typography.hero / section / card-heading / feature-title / nav / body / caption / button | home + popular |
| tokens.spacing.xs / sm / md / base / lg / xl / section | home |
| tokens.rounded.none / sm / md / lg / full | home |
| tokens.shadow.none / card | home |
| tokens.components.button-primary / button-ghost / button-more / search-input / recipe-card / category-chip / badge-amber / nav-tab | home |
| tokens.components.button-app-open | popular |

## Omission ledger

Disposition mentions. These rows name the dropped field kind; they do not re-host the dropped content as a fact.

| Item | Disposition |
|---|---|
| §13 페르소나 4인 (이름·나이·도시 포함) | Deleted. The source's own header labels them fictional archetypes. Not promoted to Audience or primary-tasks, and not re-hosted here as names, ages, cities, occupations, or motivations (D2, D2a). |
| §15 `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)` | Deleted. Unattributed curve. Role name and use kept. |
| §15 `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` | Deleted. Unattributed, and byte-identical to the documented re-injection path in `spec/omd-v0.1.md`. |
| §15 `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)` | Deleted. Unattributed curve. Role name and use kept. |
| §9 Agent Prompt Guide — Quick Color Reference, Example Prompts, Iteration Guide | Deleted. Tool-facing copy-paste prompts. Values they restated are already in Foundations / Components, except the white `56px` header height, which landed in Layout because it appears only in that example (A3). |

§9 deletion check (A3). Every value §9 names was confirmed present elsewhere in the portable body before the section was dropped. iCook Coral-Red `#f04646`, Warm Coral `#f06354`, Amber Orange `#f0993c`, Canvas White `#ffffff`, Warm White `#fbfaf8`, Mid Grey `#f0f0f0`, Ink Brown `#564e4a`, Muted Brown `#89817d`, Warm Hairline `#e0d9d5` — Foundations semantic color. Recipe card `#f0f0f0` / 16px radius / no shadow / title 20px / 700 / `#564e4a` / metadata 14px / 400 / `#89817d` — Homepage Story Card + Type roles. Category nav `#ffffff` / 40px / 16px padding / 16px/700 / `#564e4a` / active `#f04646` + 2px bottom border — Category Navigation Tabs. Download CTA `#f04646` / white text / 4px / 1px 6px / 14px/500 / 32px — Primary Download CTA. Section heading 24px/600 `#564e4a` / 2-column `#f0f0f0` 16px cards — Type roles + Layout. Iteration-guide rules (exclusive coral-red, secondary warm coral, ink-brown text, system stack, no shadows, 16px photo radius / 4px buttons) — Principles + Application rules + Avoid + Shape. White `56px` header from the download-CTA example — Layout.

## Derived editorial inventory

Portable `DESIGN.md` carries 33 complete B2a qualifications. This table is 33 data rows. Preamble sentences on this page are not portable qualifications.

| # | Portable location | Qualified reading |
|---|---|---|
| 1 | Experience Scope ¶1 | Largest-platform characterization; two inspected pages as this contract's token surfaces; values stay attached |
| 2 | Experience Scope ¶2 | Warmth / kitchen-heat / utilitarian / photography-as-hero characterizations |
| 3 | Experience Scope ¶3 | Founding-and-ecosystem narrative as context that does not supply interface tokens |
| 4 | Primary tasks | Selecting the four recorded labels as primary tasks |
| 5 | Audience | Group-level Taiwanese home cooks, food enthusiasts, health-conscious eaters |
| 6 | Distinctive traits | Grouping the Key Characteristics as the distinctive layer |
| 7 | Principles | The five numbered items and their UI implications |
| 8 | Application rules | The seven Do rules and the reasons attached |
| 9 | Avoid | The seven Don't rules and the reasons inside them |
| 10 | Foundations Semantic color | Kitchen-evoking / secondary-warmth / warm-food-amber / cozy-ink characterizations |
| 11 | Foundations Semantic color On-Primary | `tokens.colors.canvas` and `tokens.colors.on-primary` stay unmerged despite a shared hex |
| 12 | Foundations Spacing | Unitless steps unmerged from matching radius keys; `base: 15` unmerged from `md: 16` |
| 13 | Foundations Shape | `full: 9999` unmerged from 50% circle and from matching spacing keys |
| 14 | Foundations Elevation | Shadow-free / image-first reading; YAML `tokens.shadow.card` unmerged from recorded `none` |
| 15 | Foundations Motion | Unattributed durations, roles, and rules; listed curves omitted as not traceable to computed samples |
| 16 | Typography Official product-use | "No published type token" |
| 17 | Typography Official distributed asset | No exclusive downloadable font package |
| 18 | Typography Declared-only | Fallback stack members are not a custom brand face |
| 19 | Typography License | System stack without an iCook-issued license notice |
| 20 | Typography Outside these captures | Typography beyond the two pages sits outside this contract |
| 21 | Typography Family | Fallback prohibition; `tokens.typography.family.display` / `family.body` stay unmerged keys that share the stack |
| 22 | Type roles | Ratios kept; never replaced by a computed px |
| 23 | Type rules | Warmth / directness / food-forward readings |
| 24 | Assets | Favicon-service as identity pointer; photography as first-party catalog |
| 25 | Components how-to-read | Kind and applicability verdicts |
| 26 | State record | System-level treatments without per-control observation |
| 27 | State record close | Rows are not attached as visual treatments to destination controls |
| 28 | Layout whitespace | Photography-first / flat-but-warm / 16px-as-soft-container |
| 29 | Layout responsive | Breakpoints stated at system level rather than measured across viewports |
| 30 | Content & Locales | Voice characterization, register reading, and tone table |
| 31 | Content Forbidden register | Treating the source's forbidden list as a current-surface instruction |
| 32 | Content & Locales close | Byte-exact Chinese strings; English gloss may sit beside a line and never replaces it |
| 33 | Recorded unresolved | Named values, not a license to invent |

## Proof notes

- verification schema from sibling: Tier 1 live inspect 2026-06-22; conflicts: none
- components_harvested: true
- Uncaptured hover / focus-visible treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete.
- Official history (2011 founding / Polydice Inc. / Taipei / 愛料理 etymology / 300,000+ recipes / 生活誌 / 市集 / 愛料理 TV / iGood / community rather than curated editorial voice) is narrative context, not a token source
- iCook has no separately published first-party UI specification in the source. Every derived-editorial close uses the toss-form `not iCook-authored or a separately published UI specification` (rulebook v12 B2a 전제 주석)
