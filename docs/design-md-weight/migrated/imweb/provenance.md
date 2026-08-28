# Imweb provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/imweb/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | imweb |
| name | Imweb |
| display_name_kr | 아임웹 |
| country | KR |
| category | saas |
| homepage | `https://imweb.me` |
| primary_color | `#00b9ff` |
| logo.type | favicon |
| logo.slug | `https://vendor-cdn.imweb.me/images/main/imweb-2309-favicon-120x120.png?v1` |
| omd format (source) | 0.1 |
| verified | 2026-06-10 |
| added | 2026-06-10 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-10 |
| components_harvested | true |

The homepage URL is dual-destination: identity metadata here, and a portable scope record in `DESIGN.md` §1. The primary color is dual: identity here, and Foundations / components in `DESIGN.md`. The favicon slug is dual: identity here, and a portable asset pointer in `DESIGN.md` §3.

**Logo decision.** The `logo.slug` above is a first-party vendor-CDN PNG (`imweb-2309-favicon-120x120.png`). The sibling verification file states that the Google favicon proxy returns an HTML error document and that getdesign.md / refero / Google favicon are not counted toward the KR brand-owned ≥2 requirement; the catalog identity field is the vendor-CDN URL and is classified in the portable document as a first-party favicon pointer.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-10 |
| added | 2026-06-10 |
| tokens.extracted | 2026-06-10 |
| Tier 1 live inspect (source footer) | 2026-06-10 |

The source footer records the verification verbatim as **Verified:** 2026-06-10. That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved: none — as the source footer states.

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| home | homepage, live computed style | `https://imweb.me` | 2026-06-10 |
| price | pricing surface, live computed style | `https://imweb.me/price` | 2026-06-10 |
| blog | 아임웹 공식 블로그 — brand-owned; voice/tone source, not a computed-token surface | `https://imweb.me/blog` | named in the source footer |

### Tier 1 (as listed in the source footer)

- `https://imweb.me` (homepage, live computed-style inspect)
- `https://imweb.me/price` (pricing surface, live computed-style inspect)
- `https://imweb.me/blog` (아임웹 공식 블로그 — brand-owned, voice/tone source)

### Tier 2 (no usable record)

- getdesign.md/imweb — source footer: none available; returns "No designs found"; no brand-name variant for 아임웹
- styles.refero.design search for "imweb" and "아임웹" — generic catalog listings only; no Imweb-specific style page

## Token note (YAML `tokens.note`)

The source frontmatter note, kept here as a ledger string and also landed in the portable body as the facts it names (cyan `#00b9ff` reserved for data viz / identity; CTAs in ink `#15181e`; magenta `#ff50da` as a pricing eyebrow; `imweb Sans` for UI chrome; Pretendard for content):

> Brand identity cyan (#00b9ff) is reserved for data viz / identity moments; interactive CTAs are near-black ink (#15181e). Magenta (#ff50da) is an editorial eyebrow accent on pricing. UI chrome uses the custom 'imweb Sans' font; content uses Pretendard.

## Sibling handling (`web/references/imweb/.verification.md`)

The sibling exists — confirmed with `find web/references/imweb -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact that the source body does not already record.

Its own record, transcribed here:

- Inspected 2026-06-10. Method: playwright getComputedStyle (live DOM) — global playwright (chromium, headless), goto `https://imweb.me` and `https://imweb.me/price` domcontentloaded + full-page scroll, then `getComputedStyle` on body, headings, buttons, tabs, cards, plus full-DOM background/text-color/radius frequency scans.
- homepage `document.title`: "아임웹" (both surfaces)
- body: `font-family: Pretendard, …` · `color: rgb(21, 24, 30)` = `#15181e` · `font-size: 16px` · `line-height: 24px` · `background: rgb(255, 255, 255)`
- Hero rotating keyword "매출내기": `font-size: 80px` · `font-weight: 700` · `line-height: 80px` · `letter-spacing: normal` · `color: rgb(21, 24, 30)`
- Primary CTA "지금 무료로 시작하기": `background-color: rgb(21, 24, 30)` · white text · `border-radius: 8px` · `padding: 12px 16px` · height 48px · `font: 16px / 600 "imweb Sans"`
- Header search icon button: `rgba(113, 118, 128, 0.05)` · `#bcc0c6` · `border-radius: 999999px` · `padding: 8px` · height 32px · font "imweb Sans"
- Section heads "시작부터 성장까지 쉬워집니다" 36px/700 lh 48.96px; "디자인이 쉬워요"/"운영이 쉬워요"/"마케팅이 쉬워요" 28px/700 lh 41.44px
- Stats section: chart bars `#00b9ff` · `border-radius: 4px 4px 0px 0px` (heights 40/80/160/320px for 2021→2024 "80만 개") · caption "2025 누적 사이트 개설 수" `#81dcff` 24px/400
- Nav links "주요기능/템플릿/요금/전문가 찾기/스토리/고객지원" · `#15181e` · 16px / 400 · Pretendard
- Radius frequency: `8px` ×95, `4px 4px 0px 0px` ×7, `12px` ×3, `16px` ×1, `999999px` ×1
- homepage fg frequency: rgb(21,24,30) ×592, rgb(0,0,0) ×228, rgb(113,118,128) ×56, rgb(45,197,255) ×8, rgb(173,232,255) ×4, rgb(223,246,255) ×4, rgb(159,163,171) ×3, rgb(188,192,198) ×3
- pricing headline "요금제를 선택해 보세요" 48px/700 lh 60px; eyebrow "브랜드 운영에 꼭 맞는" `#ff50da` 24px / 700
- Plan primary CTA "14일 무료 체험 시작하기": `#15181e` / white / 8px / `8px 12px` / 40px / 14px / 600 "imweb Sans"
- Plan secondary CTA: white / `#4b515b` / outline 1px `#dbdee3` / 8px / 40px
- FAQ accordion rows: `#f8f9fb` / 8px / `28px 32px` / 16px Pretendard / `box-shadow: none`
- Promo strip "PG 가입비 면제 마감 임박": `rgba(0, 185, 255, 0.1)` / `#0090d4` 14px/600 / `8px 8px 0px 0px` / `8px 0px` / height 40px; discount tag "20%" `#0090d4` 12px/600
- Feature tabs (`role=tab`): active "쇼핑몰 창업 지원" `#15181e` aria-selected=true · inactive "기본/사용자/쇼핑/예약/통계·분석·마케팅" `#717680` · transparent bg
- pricing bg frequency: rgb(248,249,251) ×72, rgb(255,255,255) ×10, rgba(0,185,255,0.1) ×4, rgb(21,24,30) ×3; fg: rgb(21,24,30) ×1744, rgb(159,163,171) ×256, rgb(0,144,212) ×27
- `box-shadow: none` across nav, hero, CTAs, plan cards, FAQ rows
- Country sources also name `blog.imweb.me` as DEAD (hosting expired) and `https://imweb.me/story` as 404; `github.com/imweb` is Tencent's IMWeb FE team, not 아임웹

Values and strings the sibling carries that the visible source body does not, kept here and not promoted:

- Computed line-heights `48.96px` and `41.44px`
- Chart-bar heights `40/80/160/320px`
- Promo-strip height `40px` as a sibling-only measurement of that strip
- Frequency counts (×95, ×592, ×1744, and the rest)
- Shortened pricing-headline measurement `요금제를 선택해 보세요` (the source body records the full line `브랜드 운영에 꼭 맞는 요금제를 선택해 보세요`)
- `aria-selected=true`
- `blog.imweb.me` hosting-expired string
- `https://imweb.me/story` 404
- `github.com/imweb` Tencent-not-아임웹 note
- Google favicon proxy HTML-error / `cdn.simpleicons.org/imweb` 404
- Tier 2 page-miss string `No designs found for 'imweb'`

`매출내기` / `지금 무료로 시작하기` / `14일 무료 체험 시작하기` / `PG 가입비 면제 마감 임박` / `20%` / `쇼핑몰 창업 지원` / `주요기능` / `#00b9ff` / `#15181e` / `8px` / `48px` / `999999px` are already in the source body and are corroboration, not a sibling-only promotion.

## Byte-form notes

- The source frontmatter records line heights as unitless ratios (`1.00`, `1.25`, `1.48`, `1.33`, `1.50`). They are carried as ratios in the portable body, never converted to a replacement px (A1a). The §3 table's `1.36-1.48` range for Section Heading sits beside YAML `1.48`. YAML `tokens.typography.caption` has no lineHeight; the §3 table's `1.50` for Caption stays a body value.
- The source frontmatter records spacing and radius steps unitless (`xs: 6` … `section: 64`; `sm: 4`, `md: 8`, `lg: 12`, `xl: 16`, `full: 9999`). The portable body keeps both the unitless steps and the px forms the visible sections use. `full: 9999` stays a step beside the §4 icon-button form `999999px`.
- `tokens.spacing.sm: 8` is not `tokens.rounded.md: 8`. `tokens.spacing.md: 12` is not `tokens.rounded.lg: 12`. `tokens.spacing.base: 16` is not `tokens.rounded.xl: 16` and not the 16px type size.
- YAML Cyan Mist `#ade8ff` is a body-named §2 role, not a `tokens.colors` key.
- YAML component font shorthands sit beside the visible-section forms. Neither was chosen as a replacement.

## Claim ledger

| Claim | Surface |
|---|---|
| tokens.colors.primary / primary-bright / primary-soft / primary-pale / link / accent-magenta / ink / ink-pure / body-secondary / muted / faint / faint-alt / hairline / surface / canvas | home + price |
| tokens.typography.family.body / family.ui | home + price |
| tokens.typography.display-hero / section / subsection / body / button | home |
| tokens.typography.display-lg / card-title / button-sm / caption | price |
| tokens.spacing.xs / sm / md / base / lg / xl / section | home + price |
| tokens.rounded.sm / md / lg / xl / full | home + price |
| tokens.shadow.none | home + price |
| tokens.components.button-primary / icon-button | home |
| tokens.components.button-secondary / card-faq / tab-feature / badge-promo | price |

## Omission ledger

Disposition mentions. These rows name the dropped field kind; they do not re-host the dropped content as a fact.

| Item | Disposition |
|---|---|
| §13 페르소나 3인 (이름·나이·도시 포함) | Deleted. The source's own header labels them fictional archetypes. Not promoted to Audience or primary-tasks, and not re-hosted here as names, ages, cities, motives, or occupation classifications (D2, D2a). |
| §15 `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)` | Deleted. Unattributed curve. Role name and use kept. |
| §15 `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` | Deleted. Unattributed, and byte-identical to the documented re-injection path in `spec/omd-v0.1.md`. |
| §15 `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)` | Deleted. Unattributed curve. Role name and use kept. |
| §9 Agent Prompt Guide — Quick Color Reference, Example Component Prompts, Iteration Guide | Deleted. Tool-facing copy-paste prompts. Values they restated are already in Foundations / Components. The §9-only stats caption `24px` on `#81dcff` and the on-cyan headline white 36px Pretendard 700 landed on Data Visualization before the prompts were dropped (A3). |

§9 deletion check (A3). Every value §9 names was confirmed present elsewhere in the portable body before the section was dropped. Imweb Cyan `#00b9ff`, Ink `#15181e`, Pure White `#ffffff`, Surface Grey `#f8f9fb`, Body Secondary `#4b515b`, Muted Grey `#717680`, Link Blue `#0090d4`, Magenta `#ff50da`, Hairline `#dbdee3`, cyan ladder `#2dc5ff` / `#81dcff` / `#ade8ff` / `#dff6ff` — Foundations semantic color. Hero 80px Pretendard 700 / lh 1.00 / `#15181e` / dark CTA `#15181e` / 8px / `12px 16px` / 48px / 16px 600 `imweb Sans` / `지금 무료로 시작하기` — Type roles + Primary CTA. Plan card white / no shadow / promo strip `rgba(0,185,255,0.1)` / `#0090d4` 14px/600 / radius `8px 8px 0 0` / outline CTA `#4b515b` / 1px `#dbdee3` / 8px / 40px / 14px/600 — Plan Promo Strip + Plan Card Secondary. FAQ `#f8f9fb` / 8px / `28px 32px` / `#15181e` 16px Pretendard / eyebrow `#ff50da` — FAQ Accordion Row + Semantic Magenta. Stats full-width `#00b9ff` / bar top radius 4px / caption `#81dcff` 24px / headline white 36px Pretendard 700 — Data Visualization. Top nav white / Pretendard 16px/400 `#15181e` / icon search pill `rgba(113,118,128,0.05)` / `#bcc0c6` / 32px — Top Navigation + Icon Button. Iteration-guide rules (size-based 80/48/36/28/24, ink CTAs, cyan as blocks, no shadows, 8px default, `imweb Sans` 600, one magenta eyebrow) — Principles + Application rules + Avoid + Type rules.

## Derived editorial inventory

Portable `DESIGN.md` carries 35 complete B2a qualifications. This table is 35 data rows. Preamble sentences on this page are not portable qualifications.

| # | Portable location | Qualified reading |
|---|---|---|
| 1 | Experience Scope ¶1 | Leading-builder characterization; two inspected pages as this contract's token surfaces; values stay attached; official blog is not a computed-token surface |
| 2 | Experience Scope ¶2 | Marketing surface as the product promise; clean/friendly/easy; blue-warmed charcoal; de-facto Korean product font; cyan as evidence; monochrome-confident; bold and unfussy; no fashionable negative tracking; product-grade chrome voice; depth as essentially flat; 8px as workhorse; magenta as a playful wildcard and a single splash |
| 3 | Experience Scope ¶3 | Founding-and-builder narrative as context that does not supply interface tokens; refuse/embrace as the source's editorial reading |
| 4 | Primary tasks | Selecting the five recorded labels as primary tasks |
| 5 | Audience | Group-level Korean small-brand founders / creators / SMB operators |
| 6 | Distinctive traits | Grouping the Key Characteristics as the distinctive layer |
| 7 | Principles | The five numbered items and their UI implications |
| 8 | Application rules | The eight Do rules and the reasons attached |
| 9 | Avoid | The eight Don't rules and the reasons inside them |
| 10 | Foundations Semantic color | Cyan-not-on-CTA / magenta-as-single-warm-accent / hairline-as-separation characterizations |
| 11 | Foundations Semantic color canvas | `tokens.colors.canvas` kept on its Pure White role; Cyan Mist `#ade8ff` kept off the YAML key set |
| 12 | Foundations Spacing | Unitless steps unmerged from matching radius keys and from 16px type |
| 13 | Foundations Shape | `full: 9999` unmerged from `999999px`; Medium 8px as the workhorse among the named radius uses |
| 14 | Foundations Elevation | Shadow-free / color-as-elevation / drama-left-to-customer-sites reading |
| 15 | Foundations Motion | Unattributed durations, roles, and rules |
| 16 | Typography Official product-use | "No published type token" |
| 17 | Typography Official distributed asset | No exclusive downloadable font package |
| 18 | Typography Declared-only | Two families classed as two jobs, not interchangeable faces |
| 19 | Typography License | Live-use pair without an Imweb-issued license notice |
| 20 | Typography Outside these captures | Typography beyond the two pages sits outside this contract |
| 21 | Typography Family | Two-jobs / fallback prohibition |
| 22 | Type roles | Ratios kept as ratios; §3 `1.36-1.48` beside YAML `1.48`; each YAML `use` on its own row |
| 23 | Type rules | Size-not-weight / native-hangul-fit / two-jobs / semibold-for-action readings |
| 24 | Assets | Vendor-CDN favicon as a first-party pointer; customer-site screenshots as first-party catalog |
| 25 | Components how-to-read | Kind and applicability verdicts |
| 26 | State record | System-level treatments without per-control observation |
| 27 | State record close | Rows are not attached as visual treatments to destination CTAs, search trigger, tabs, or nav |
| 28 | Layout whitespace | Three source titles read as current-surface layout instruction |
| 29 | Layout responsive | Breakpoints stated at system level rather than measured across viewports |
| 30 | Layout image behavior | Monochrome-chrome-around-screenshots as consistent with the flat system |
| 31 | Content & Locales | Voice characterization, register reading, and tone table |
| 32 | Content voice-sample glosses | Parenthetical glosses on the verbatim samples |
| 33 | Content Forbidden register | Premise-to-register causal |
| 34 | Content & Locales close | Byte-exact Korean strings; English gloss may sit beside a line and never replaces it |
| 35 | Recorded unresolved | Named values, not a license to invent |

## Proof notes

- verification schema from sibling: Tier 1 live inspect 2026-06-10; conflicts: none
- components_harvested: true
- Uncaptured hover / focus-visible treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete.
- Official history (early 2010s founding / 이수모 / "We serve the underserved" / 브랜드 빌더 / 800,000+ by 2024 / refuse enterprise-console density and dark-pattern urgency) is narrative context, not a token source. Public sources disagree on a single founding year; the source body keeps "early 2010s".
- No separately published UI specification is named in the source. Every derived-editorial close uses the toss-form `not Imweb-authored or a separately published UI specification` (rulebook v12 B2a 전제 주석)
