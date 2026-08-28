# Hwahae provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/hwahae/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | hwahae |
| name | Hwahae |
| display_name_kr | 화해 |
| country | KR |
| category | consumer-tech |
| homepage | `https://www.hwahae.co.kr` |
| primary_color | `#00d5ce` |
| logo.type | favicon |
| logo.slug | `https://www.google.com/s2/favicons?domain=hwahae.co.kr&sz=128` |
| omd format (source) | 0.1 |
| verified | 2026-06-26 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-26 |
| components_harvested | true |

The homepage URL is dual-destination: identity metadata here, and a portable scope record in `DESIGN.md` §1. The primary color is dual: identity here, and Foundations / components in `DESIGN.md`. The favicon slug is dual: identity here, and a portable asset pointer in `DESIGN.md` §3.

**Logo decision.** The `logo.slug` above is a Google favicon-service URL, not a Hwahae-hosted asset. The sibling verification file states that getdesign.md, refero, and Google favicon are explicitly not counted toward the KR brand-owned ≥2 requirement; the catalog identity field is kept here and is classified in the portable document as an identity pointer, not a hosted brand file.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-26 |
| added | 2026-06-26 |
| tokens.extracted | 2026-06-26 |
| Tier 1 live inspect (source footer) | 2026-06-26 |

The source footer records the verification verbatim as **Verified:** 2026-06-26 (omd:add-reference CREATE — Tier 1 live inspect, 2 brand-owned surfaces). That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved: none — as the source footer states.

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| home | product homepage, live computed style | `https://www.hwahae.co.kr` | 2026-06-26 |
| blog | official tech/design blog, live computed style | `https://blog.hwahae.co.kr/` | 2026-06-26 |
| ds-post | Hwahae product-design team DS post — brand-owned; not a computed-token surface | `https://blog.hwahae.co.kr/all/tech/13236` | named in the source footer |
| og | official OG logo image, pixel-sampled | `https://static.hwahae.co.kr/og/OG_1200.png` | named in the source comment |

### Tier 1 (as listed in the source footer)

- `https://www.hwahae.co.kr`
- `https://blog.hwahae.co.kr/`
- `https://blog.hwahae.co.kr/all/tech/13236`

### Tier 2

- getdesign.md/hwahae — not listed ("No designs found for hwahae")
- styles.refero.design — no hwahae-specific match (KR under-coverage)

## Token note (YAML `tokens.note`)

The source frontmatter note, kept here as a ledger string and also landed in the portable body as the facts it names (turquoise flower mark `#00d5ce` / live blog `#22d3d6` / darker UI teal `#00a5aa`; amber `#ffaa3c` as the rating-star accent; Pretendard Variable on a `#f7f7f7` canvas; Spoqa Han Sans on the official tech blog):

> brand = turquoise flower mark (#00d5ce logo / #22d3d6 live blog accent / #00a5aa darker UI teal); amber (#ffaa3c) is the functional rating-star accent and the single most visible hue on the product surface. Product web runs Pretendard Variable on a #f7f7f7 canvas; the official tech blog runs Spoqa Han Sans.

## Sibling handling (`web/references/hwahae/.verification.md`)

The sibling exists — confirmed with `find web/references/hwahae -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact that the source body does not already record.

Its own record, transcribed here:

- Inspected 2026-06-26. Method: playwright getComputedStyle (live DOM) — global playwright (chromium, headless), realistic Chrome UA + ko-KR locale, goto with domcontentloaded/load, cookie/modal dismissal pass, then `getComputedStyle` on body, h1/h2/h3, header/nav, buttons, links, inputs, plus a full-DOM background/text-color/radius frequency scan. Logo turquoise sampled via canvas getImageData on the official OG image.
- homepage body: `font-family: "Pretendard Variable", -apple-system, ...`; `color: rgb(0, 0, 0)` (#000000); `font-size: 16px`; `line-height: 24px`; `background-color: rgb(247, 247, 247)` (#f7f7f7)
- homepage H2 "급상승 랭킹": `font-size: 18px`; `font-weight: 600`; `letter-spacing: -0.2px`; `color: rgb(0, 0, 0)`
- homepage H3 "카테고리 전체": `font-size: 14px`; `font-weight: 600`; `line-height: 21px`; `color: rgb(255, 255, 255)`
- nav "홈" (active): `font-size: 15px`; `font-weight: 600`; `color: rgb(17, 17, 17)` (#111111); "랭킹"/"어워드" weight 400
- login chip "로그인": `background-color: rgb(255, 255, 255)`; `color: rgb(61, 61, 61)` (#3d3d3d); `border: 1px solid rgb(232, 232, 232)` (#e8e8e8); `border-radius: 4px`; `padding: 0px 8px`; `font-size: 12px`; height 24px
- lang button "한국어": `border-radius: 8px`; `color: rgb(17, 17, 17)`; `padding: 10px`; height 44px
- search input: `color: rgb(170, 170, 170)` (#aaaaaa placeholder); `font-size: 14px`
- card link: `border-radius: 16px`; height 332px (product/banner cards)
- card shadow: `rgba(0, 0, 0, 0.08) 0px 2px 8px 0px`; hairline ring: `rgb(232, 232, 232) 0px 0px 0px 1px`
- image-count overlay pill "1/10": `background-color: rgba(0, 0, 0, 0.4)`; `color: rgb(255, 255, 255)`; `border-radius: 4px`; `padding: 4px 8px`
- homepage radius frequency: `8px` ×66, `16px` ×37, `0px 0px 16px 16px` ×21, `4px` ×11, `99999px` ×8, `50%` ×4
- homepage text-color frequency: `rgb(0,0,0)` ×1213, `rgb(255,170,60)` ×114 (#ffaa3c), `rgb(153,153,153)` ×99, `rgb(17,17,17)` ×94, `rgb(102,102,102)` ×93, `rgb(255,255,255)` ×72, `rgb(255,85,85)` ×27, `rgb(70,125,255)` ×24, `rgb(0,165,170)` ×7
- homepage bg-color frequency: `rgb(255,255,255)` ×91, `rgb(216,216,216)` ×4, `rgb(102,102,102)` ×4, `rgb(61,61,61)` ×3, `rgb(247,247,247)` ×2, `rgb(238,251,251)` ×1
- homepage fonts: `"Pretendard Variable"` ×1789 (sole font); weights `400` ×1515, `600` ×274
- utility classes namespaced `hds-` (e.g. `hds-absolute hds-left-12`) — Hwahae Design System confirmed in live DOM
- homepage `document.title`: "화장품 정보는 화해 - 화장품 성분과 정보, 리뷰 확인하고 구매 하세요"
- blog body: `font-family: "Spoqa Han Sans", Roboto, ...`; `color: rgb(33, 37, 41)` (#212529); `font-size: 16px`
- blog H3 "추천 아티클" / "Tech": `font-size: 32px`; `font-weight: 700`; `line-height: 46px`; `letter-spacing: -1px`; `color: rgb(33, 37, 41)`
- blog live brand turquoise: text `color: rgb(34, 211, 214)` (#22d3d6); blog card `border-radius: 20px`
- blog `document.title`: "화해 블로그 | 기술 블로그"
- OG logo pixel sample (flower mark): `#00d5ce` / `#00d6cf` / `#00dad4` / `#00d7d0` turquoise cluster; black `#000000` "hwahae" wordmark on pale-mint background

Values and strings the sibling carries that the visible source body does not, kept here and not promoted:

- Card-link height `332px`
- Homepage H3 label `카테고리 전체` with white `rgb(255, 255, 255)` at 14px / 600
- Segmented radius `0px 0px 16px 16px`
- Frequency counts (×66, ×1213, ×1789, and the rest)
- OG cluster samples `#00d6cf` / `#00dad4` / `#00d7d0` (the source body promotes `#00d5ce` only)
- Sibling title hyphen form `화장품 정보는 화해 - 화장품 성분과 정보, 리뷰 확인하고 구매 하세요` (the source body uses an em-dash)
- Blog `document.title` `화해 블로그 | 기술 블로그`
- Tier 2 page-miss string `No designs found for hwahae`
- Sibling example class names `hds-absolute hds-left-12`

Source-comment interpretive examples, transcribed here as comment text rather than as a second portable token. The portable body already carries the §11 sentence they gloss (`amber rating stars as the honest trust signal`; `imagery carries color, chrome stays quiet`):

- `amber is the honest trust signal`
- `imagery carries color, chrome stays quiet`

`급상승 랭킹` / `로그인` / `한국어` / `1/10` / `추천 아티클` / `Tech` / 24px chip height / 44px lang-button height are already in the source body and are corroboration, not a sibling-only promotion.

## Byte-form notes

- The source frontmatter records line heights as unitless ratios (`1.44`, `1.33`, `1.5`). They are carried as ratios in the portable body, never converted to a replacement px (A1a). The source table's parenthetical px conversions stay beside the ratios.
- The source frontmatter records spacing and radius steps unitless (`xs: 4` … `section: 48`; `xs: 4`, `sm: 8`, `md: 16`, `lg: 20`, `full: 99999`). The portable body keeps both the unitless steps and the px forms the visible sections use. `full: 99999` stays a step — it is not `9999`.
- `tokens.spacing.xs: 4` is not `tokens.rounded.xs: 4`. `tokens.spacing.sm: 8` is not `tokens.rounded.sm: 8`. `tokens.spacing.base: 16` is not `tokens.rounded.md: 16`. `tokens.spacing.lg: 20` is not `tokens.rounded.lg: 20`. `tokens.spacing.md: 12` is a spacing step only. `tokens.rounded.full: 99999` is not the body-named `50%` circle.
- YAML `tokens.typography.blog-display.tracking: -1.0` sits beside the visible-section form `-1.0px`. YAML `tokens.typography.section.tracking: -0.2` sits beside `-0.2px`. Neither was chosen as a replacement.
- YAML `tokens.colors.canvas: #ffffff` is the card/cleanest-background role. YAML `tokens.colors.surface: #f7f7f7` is the page background. YAML `tokens.colors.on-brand: #ffffff` shares a hex with canvas and stays a separate key.

## Claim ledger

| Claim | Surface |
|---|---|
| tokens.colors.brand / brand-bright / brand-deep / tint | home + blog + og |
| tokens.colors.rating / info / alert / ink / ink-soft / body / muted / faint / placeholder / divider / hairline / canvas / surface / on-brand | home |
| tokens.colors.ink-blog | blog |
| tokens.typography.family.product | home |
| tokens.typography.family.blog | blog |
| tokens.typography.blog-display | blog |
| tokens.typography.section / nav / card-title / body / label / caption | home |
| tokens.spacing.xs / sm / md / base / lg / xl / xxl / section | home |
| tokens.rounded.xs / sm / md / full | home |
| tokens.rounded.lg | blog |
| tokens.shadow.card / hairline-ring / none | home |
| tokens.components.button-primary / button-outline / nav-tab / product-card / tint-card / search-input / rating-badge / info-chip | home |

## Omission ledger

Disposition mentions. These rows name the dropped field kind; they do not re-host the dropped content as a fact.

| Item | Disposition |
|---|---|
| §13 페르소나 3인 (이름·나이·도시 포함) | Deleted. The source's own header labels them fictional archetypes. Not promoted to Audience or primary-tasks, and not re-hosted here as names, ages, or cities (D2, D2a). |
| §15 `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)` | Deleted. Unattributed curve. Role name and use kept. |
| §15 `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` | Deleted. Unattributed, and byte-identical to the documented re-injection path in `spec/omd-v0.1.md`. |
| §15 `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)` | Deleted. Unattributed curve. Role name and use kept. |
| §9 Agent Prompt Guide — Quick Color Reference, Example Component Prompts, Iteration Guide | Deleted. Tool-facing copy-paste prompts. Values they restated are already in Foundations / Components. |

§9 deletion check (A3). Every value §9 names was confirmed present elsewhere in the portable body before the section was dropped. Hwahae Turquoise `#00d5ce`, Rating Amber `#ffaa3c`, Action Blue `#467dff`, Alert Coral `#ff5555`, Mint Tint `#eefbfb`, Surface Grey `#f7f7f7`, Canvas White `#ffffff`, Ink Black `#000000`, Ink Soft `#111111`, Body `#3d3d3d`, Muted `#666666`, Faint `#999999`, Placeholder `#aaaaaa`, Hairline `#e8e8e8`, Divider `#d8d8d8` — Foundations semantic color. Product / ranking card `#ffffff` / 16px / `rgba(0, 0, 0, 0.08) 0px 2px 8px` / 1px `#e8e8e8` / title 14px / 600 / amber 12px / 600 — Product / Ranking Card + Rating Star + Type roles. Header on `#f7f7f7`: white search 8px / `#e8e8e8` / `#aaaaaa` / 14px; nav 15px / `#111111` / active 600; turquoise primary 8px — Header Search + Top Nav + Primary Brand Turquoise. Mint feature `#eefbfb` / 18px / 600 / `-0.2px` / `#000000` / white 16px cards — Mint Tint Card + Type roles. Blog article head Spoqa Han Sans 32px / 700 / 1.44 / `-1.0px` / `#212529` / 20px-radius — Type roles + Shape. Iteration-guide rules (per-surface fonts, reserved turquoise, amber-as-rating, `#f7f7f7` canvas / `#ffffff` cards, hairlines + one shadow, 8/16/4/full/20 radius, `#000000` / `#111111` / `#3d3d3d`) — Principles + Application rules + Avoid + Type rules.

## Derived editorial inventory

Portable `DESIGN.md` carries 33 complete B2a qualifications. This table is 33 data rows. Preamble sentences on this page are not portable qualifications.

| # | Portable location | Qualified reading |
|---|---|---|
| 1 | Experience Scope ¶1 | Dominant-platform characterization; two inspected pages as this contract's token surfaces; values stay attached; DS post is not a computed-token surface |
| 2 | Experience Scope ¶2 | Imagery-carries-color / chrome-stays-quiet; beauty-index / encyclopedic / score-trust / granular-system / app-like characterizations |
| 3 | Experience Scope ¶3 | Founding-and-system narrative as context that does not supply interface tokens |
| 4 | Primary tasks | Selecting the four recorded labels as primary tasks |
| 5 | Audience | Group-level Korean beauty shoppers comparing ingredients and reviews |
| 6 | Distinctive traits | Grouping the Key Characteristics as the distinctive layer |
| 7 | Principles | The six numbered items and their UI implications |
| 8 | Application rules | The eight Do rules and the reasons attached |
| 9 | Avoid | The eight Don't rules and the reasons inside them |
| 10 | Foundations Semantic color | Identity-turquoise / amber-as-trust / pale-mint / grey-ladder characterizations |
| 11 | Foundations Semantic color On-Brand | `tokens.colors.canvas` and `tokens.colors.on-brand` stay unmerged despite a shared hex |
| 12 | Foundations Spacing | Unitless steps unmerged from matching radius keys |
| 13 | Foundations Shape | `full: 99999` unmerged from 50% circle and from matching spacing keys |
| 14 | Foundations Elevation | Near-flat / imagery-not-chrome reading |
| 15 | Foundations Motion | Unattributed durations, roles, and rules |
| 16 | Typography Official product-use | "No published type token" |
| 17 | Typography Official distributed asset | No exclusive downloadable font package |
| 18 | Typography Declared-only | Fallback stack members are not the brand face |
| 19 | Typography License | Upstream family without a Hwahae-issued license notice |
| 20 | Typography Outside these captures | Typography beyond the two pages sits outside this contract |
| 21 | Typography Family | Two-surfaces-never-mix restatement; fallback prohibition |
| 22 | Type roles | Ratios kept beside parenthetical px; YAML `-1.0` / `-0.2` beside `-1.0px` / `-0.2px` |
| 23 | Type rules | Dense / editorial / hierarchy / hangul-legibility readings |
| 24 | Assets | Favicon-service as identity pointer; photography as first-party catalog |
| 25 | Components how-to-read | Kind and applicability verdicts |
| 26 | State record | System-level treatments without per-control observation |
| 27 | State record close | Rows are not attached as visual treatments to destination controls |
| 28 | Layout whitespace | Imagery-carries-color / dense-but-breathable / flat tint-and-hairline separation |
| 29 | Layout responsive | Breakpoints stated at system level rather than measured across viewports |
| 30 | Content & Locales | Voice characterization, register reading, and tone table |
| 31 | Content Forbidden register | Premise-to-register causal (decoding, so copy explains rather than dazzles) |
| 32 | Content & Locales close | Byte-exact Korean strings; English gloss may sit beside a line and never replaces it |
| 33 | Recorded unresolved | Named values, not a license to invent |

## Proof notes

- verification schema from sibling: Tier 1 live inspect 2026-06-26; conflicts: none
- components_harvested: true
- Uncaptured hover / focus-visible treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete.
- Official history (2013 founding / 화장품 정보 비대칭 / January 2023 HDS adoption / Foundation→Components→Templates) is narrative context, not a token source
- Hwahae's product-design team publicly documented the Hwahae Design System (`hds-`) construction on the official tech blog (Figma + Storybook + TestApp). Every derived-editorial close names that published construction rather than using the toss-form that would deny a separately published specification (rulebook v12 B2a 전제 주석)
