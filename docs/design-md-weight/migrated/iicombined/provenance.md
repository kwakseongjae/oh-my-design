# IICOMBINED provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/iicombined/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | iicombined |
| name | IICOMBINED |
| display_name_kr | 아이아이컴바인드 |
| country | KR |
| category | ecommerce |
| homepage | `https://www.gentlemonster.com` |
| primary_color | `#111111` |
| logo.type | favicon |
| logo.slug | `https://www.google.com/s2/favicons?domain=gentlemonster.com&sz=128` |
| omd format (source) | 0.1 |
| verified | 2026-06-17 |
| added | 2026-06-17 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-17 |
| components_harvested | true |

The homepage URL is dual-destination: identity metadata here, and a portable scope record in `DESIGN.md` §1. The primary color is dual: identity here, and Foundations / components in `DESIGN.md`. The favicon slug is dual: identity here, and a portable asset pointer in `DESIGN.md` §3.

**Logo decision.** The `logo.slug` above is a Google favicon-service URL, not an IICOMBINED-hosted asset. The sibling verification file states that the flagship-brand favicon is used because the house-domain favicon did not resolve as a usable asset; that house-domain fetch is sibling-only and is transcribed below, not promoted into the portable body.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-17 |
| added | 2026-06-17 |
| tokens.extracted | 2026-06-17 |
| Tier 1 live inspect (source footer) | 2026-06-17 |

The source footer records the verification verbatim as **Verified:** 2026-06-17 (omd:add-reference CREATE — Tier 1 live inspect, two brand-owned surfaces). That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved: none — as the source footer states.

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| gentlemonster | brand-owned storefront, live computed style | `https://www.gentlemonster.com` | 2026-06-17 |
| tamburins | brand-owned storefront, live computed style | `https://www.tamburins.com` | 2026-06-17 |

### Tier 1 (as listed in the source footer)

- `https://www.gentlemonster.com`
- `https://www.tamburins.com`

### Tier 2

- getdesign.md/gentlemonster — SPA shell, no token content (directory-only)
- styles.refero.design/?q=gentle+monster — no IICOMBINED-specific style entry (generic catalog grid only)

## Token note (YAML `tokens.note`)

The source frontmatter note, kept here as a ledger string and also landed in the portable body as the facts it names (near-black ink `#111111` on gentlemonster.com; Tamburins parallel ink `#1d1d1d`; achromatic black/white; Gentle Monster Serif; GentleSans Light 350 / Regular 400; Pretendard on Tamburins):

> House design language of IICOMBINED (parent of Gentle Monster, Tamburins, Nudake). primary = near-black ink (#111111) used as text and the solid-button fill on gentlemonster.com; Tamburins runs a parallel near-black ink (#1d1d1d). Achromatic black/white system — no chromatic brand hue. Display voice = custom Gentle Monster Serif; UI = GentleSans (Light 350 / Regular 400) on GM, Pretendard on Tamburins.

## Sibling handling (`web/references/iicombined/.verification.md`)

The sibling exists — confirmed with `find web/references/iicombined -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact that the source body does not already record.

Its own record, transcribed here:

- Inspected 2026-06-17. Method: playwright getComputedStyle (live DOM) — global playwright (chromium, headless), realistic Chrome UA + en-US locale, `goto` with `waitUntil:'load'` + 6s settle, cookie/modal dismissal pass, lazy-hydration scroll pass, then `getComputedStyle` on body, h1/h2/h3, header/nav, buttons, links, and a full-DOM background/text/font/weight frequency scan. Two brand-owned surfaces.
- `https://www.gentlemonster.com/` · body · `font-family: __gentleSansRegularKo …, "Sandoll GothicNeo1 Md", Arial, sans-serif`; `color: rgb(17, 17, 17)` (#111111); `font-size: 16px`; `line-height: 24px`; `background-color: rgb(243, 244, 246)` (#f3f4f6)
- campaign H1 "2026 Veggie Collection" · `font-family: __gentleMonsterSerif`; `font-size: 24px`; `font-weight: 400`; `line-height: 28px`; `color: rgb(255, 255, 255)`
- nav label · `font-family: __gentleSansLightKo`; `font-size: 16px`; `font-weight: 350`; header height 90px
- menu/overlay label "전체보기" · `font-size: 12px`; `font-weight: 350`; `line-height: 17px`; `color: rgb(255, 255, 255)`
- outlined CTA "구매하기" / "캠페인 보기" · transparent; `#111111`; `1px solid #ffffff`; `25px` radius; `0px 23px` padding; height 36px; 16px / 400
- solid consent "모두 수락 - ACCEPT ALL COOKIES" · `#111111` fill; white text; `8px` radius; 13px; uppercase; `letter-spacing: 0.13px`; height 48px
- product H3 "토피 02" · `__gentleSansLightKo`; 12px / 350; `line-height: 17px`; `#111111`
- top background frequencies: `rgb(255,255,255)` ×16, `rgb(39,69,92)` ×8 (#27455c), `rgb(0,0,0)` ×3, `rgb(191,191,191)` ×3, `#f3f4f6`, `#f2f4f5`
- top text frequencies: `#111111` ×1438, white ×259, `#858585` ×30, `#343434` ×22, `#555555` ×16
- font usage: `__gentleSansRegularKo` ×1334, `__gentleSansLightKo` ×439, `Times` ×110, `__gentleMonsterSerif` ×7; weights 350 ×446, 400 ×1427
- box-shadow: `none` across nav, hero, headings, product tiles
- document.title: "Home | 젠틀몬스터 공식 온라인 스토어"
- `https://www.tamburins.com/` · body · `font-family: pretendard, "pretendard Fallback", "Pretendard Variable"`; `color: rgb(0, 0, 0)`
- primary text frequencies: `#1d1d1d` ×494, `#000000` ×39, white ×20, `#d12b2b` ×2
- outlined pill · transparent; `#1d1d1d`; `1px solid #000000`; `9999px` radius; height 45px; Pretendard 10px / 400
- campaign H2 "SUMMER TAILS" · 24px / 500 / 24px; white; uppercase; Pretendard
- section H2 "새로운 헤어 퍼퓸 컬렉션" · 18px / 500 / 28.2px; `#1d1d1d`
- H3 "SCRUNCHIE SUMMER TAILS" · 20px / 400 / 30px; `#1d1d1d`
- box-shadow: `none`; weights 400 ×630, 500 ×13, 600 ×3; document.title: "TAMBURINS 탬버린즈 공식 온라인 스토어"

Values and strings the sibling carries that the visible source body does not, kept here and not promoted:

- Overlay label `전체보기`
- H3 `SCRUNCHIE SUMMER TAILS`
- Fallback face `Sandoll GothicNeo1 Md`
- Consent `letter-spacing: 0.13px`
- Computed family tokens `__gentleSansRegularKo` / `__gentleSansLightKo` / `__gentleMonsterSerif`
- Frequency counts (×1438, ×494, and the rest)
- Extra background cluster `rgb(191,191,191)`
- Weight 600 ×3 on Tamburins
- House-domain favicon fetch note (HTTP 404 / 726 bytes) and the 1018-byte / HTTP 200 Gentle Monster favicon size
- Sibling sentence that the house has no thick standalone storefront of its own

`구매하기` / `캠페인 보기` / `2026 Veggie Collection` / `모두 수락 - ACCEPT ALL COOKIES` / `토피 02` / `SUMMER TAILS` / `새로운 헤어 퍼퓸 컬렉션` / `Home | 젠틀몬스터 공식 온라인 스토어` / `TAMBURINS 탬버린즈 공식 온라인 스토어` are already in the source body or its philosophy-layer comment and are corroboration, not a sibling-only promotion.

## Source-comment transcription

The source HTML comment (philosophy-layer note) is ledger text, not a second portable token set. Facts it restates that the visible body already carries stay in `DESIGN.md`. Comment-only and comment-corroborating strings stay here:

- Gentle Monster redirects to `/kr/ko`; Tamburins redirects to `/kr/`
- body text rgb(17,17,17) #111111 (1438× foreground)
- custom fonts `__gentleSansRegularKo` (400) / `__gentleSansLightKo` (350) / `__gentleMonsterSerif` (campaign H1)
- body bg `#f3f4f6` on Gentle Monster
- doc title `Home | 젠틀몬스터 공식 온라인 스토어`
- Tamburins body text rgb(29,29,29) #1d1d1d (494× foreground)
- uppercase H2 `SUMMER TAILS` 24px white
- rare accent rgb(209,43,43) `#d12b2b`
- doc title `TAMBURINS 탬버린즈 공식 온라인 스토어`
- Founding details beyond the live surfaces are general public knowledge, not directly quoted from a verified IICOMBINED statement in that turn
- Interpretive claims ("the imagery is the interface", "flat as a gallery wall", "monochrome by conviction") are editorial readings, not directly sourced IICOMBINED statements
- KR coverage gap in `spec/regional-sources.yaml`

The document titles also land in portable Content as published strings the source comment records (E2a).

## Byte-form notes

- The source frontmatter records line heights as unitless ratios (`1.17`, `1.00`, `1.57`, `1.50`, `1.38`, `1.42`). They are carried as ratios in the portable body, never converted to a replacement px (A1a). The visible table also writes the px companions the source table already used (28px, 28.2px, 27px, 24px, 18px, 17px).
- Campaign-serif tracking stays `0`.
- The source frontmatter records spacing and radius steps unitless (`xs: 4` … `section: 64`; `sm: 8`, `md: 25`, `lg: 45`, `full: 9999`). The portable body keeps both the unitless steps and the px forms the visible sections use. There is no `tokens.rounded.none` key. `full: 9999` stays a step. The visible scale also writes `9999px` and pairs `45px / 9999px` for the Tamburins pill. The pill component record uses height `45px` and radius `9999px`. The writings stay unmerged.
- The source §4 / §5 record a tall `90px` header. That height has no YAML token key, so it lands in Layout (A3).
- `tokens.spacing.sm: 8` is not `tokens.rounded.sm: 8`. `tokens.spacing.lg: 23` is the live CTA horizontal padding, not `tokens.rounded.md: 25`. `tokens.rounded.lg: 45` is not `tokens.components.button-pill-dark` height `45px`.
- YAML `tokens.colors.canvas: #ffffff` is the page/tile role. YAML `tokens.colors.on-dark: #ffffff` shares a hex with canvas and stays a separate key.
- YAML `tokens.shadow.none` is `none`. There is no second shadow key.

## Claim ledger

| Claim | Surface |
|---|---|
| tokens.colors.primary / canvas / on-dark / muted / muted-deep / muted-mid / navy-accent | gentlemonster |
| tokens.colors.ink-alt / ink-pure / alert | tamburins |
| tokens.colors.surface / surface-alt | gentlemonster |
| tokens.typography.family.display / family.sans / campaign-serif / body / nav / meta / caption | gentlemonster |
| tokens.typography.family.sans-alt / section-heading / subhead | tamburins |
| tokens.typography.product-title | gentlemonster + tamburins |
| tokens.spacing.xs / sm / md / base / lg / xl / xxl / section | gentlemonster |
| tokens.rounded.sm / md / lg / full | gentlemonster + tamburins |
| tokens.shadow.none | gentlemonster + tamburins |
| tokens.components.button-outline / button-solid / nav-link / product-card / surface-card / overlay-label / footer-link | gentlemonster |
| tokens.components.button-pill-dark | tamburins |

## Omission ledger

Disposition mentions. These rows name the dropped field kind; they do not re-host the dropped content as a fact.

| Item | Disposition |
|---|---|
| §13 페르소나 3인 (이름·나이·도시 포함) | Deleted. The source's own header labels them fictional archetypes. Not promoted to Audience or primary-tasks, and not re-hosted here as names, ages, cities, occupations, or motivations (D2, D2a). |
| §15 `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)` | Deleted. Unattributed curve. Role name and use kept. |
| §15 `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` | Deleted. Unattributed, and byte-identical to the documented re-injection path in `spec/omd-v0.1.md`. |
| §15 `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)` | Deleted. Unattributed curve. Role name and use kept. |
| §9 Agent Prompt Guide — Quick Color Reference, Example Prompts, Iteration Guide | Deleted. Tool-facing copy-paste prompts. Values they restated are already in Foundations / Components / Typography. No unique value lived only in §9. |

§9 deletion check (A3). Every value §9 names was confirmed present elsewhere in the portable body before the section was dropped. Ink Black `#111111`, Ink Alt `#1d1d1d`, Pure White `#ffffff`, Surface Grey `#f3f4f6`, On-Dark White `#ffffff`, Muted Deep `#343434`, Muted Mid `#555555`, Muted Grey `#858585`, Navy Accent `#27455c`, Alert Red `#d12b2b` — Foundations semantic color. Campaign hero 24px Gentle Monster Serif / Times fallback / line-height 1.17 / hairline pill 1px solid `#ffffff` / `#111111` text / 25px radius / 0 23px padding / 36px / 16px GentleSans / `구매하기` / `캠페인 보기` — Type roles + Outlined CTA. Product tile `#ffffff` / 0px / no border / no shadow / 12px GentleSans 350 caption — Product / Campaign Tile + Caption role. Tinted band `#f3f4f6` / 0px / 24px Pretendard 500 uppercase — Tinted Surface Band + Section Heading. Solid consent `#111111` / white text / 8px / 13px GentleSans / 48px / uppercase — Solid Consent. Tamburins pill 1px solid `#000000` / `#1d1d1d` / 9999px / 45px / 10px Pretendard — Tamburins Outlined Pill. Iteration-guide rules (achromatic chrome, serif for headlines, no shadows, hairline pills, sharp tiles, whisper-weight 350 / 12–16px) — Principles + Application rules + Avoid + Shape.

## Derived editorial inventory

Portable `DESIGN.md` carries complete B2a qualifications. This table's row count must match `grep -o 'derived editorial implementation inference' DESIGN.md | wc -l`. Preamble sentences on this page are not portable qualifications.

| # | Portable location | Qualified reading |
|---|---|---|
| 1 | Experience Scope ¶1 | House-behind-three-brands; two inspected pages as this contract's token surfaces; values stay attached |
| 2 | Experience Scope ¶2 | Installation-grade gallery / receding UI / magazine-cover / whispered / gallery-grade; expressive display vs near-silent sans; chrome reduced to the hairline pill |
| 3 | Experience Scope ¶3 | Founding-and-installation narrative as context that does not supply interface tokens |
| 4 | Primary tasks | Selecting the four recorded labels as primary tasks |
| 5 | Audience | Group-level design-aware fashion buyers, fragrance enthusiasts, art-and-retail followers |
| 6 | Distinctive traits | Grouping the Key Characteristics as the distinctive layer |
| 7 | Principles | The five numbered items and their UI implications |
| 8 | Application rules | The eight Do rules and the reasons attached |
| 9 | Avoid | The seven Don't rules and the reasons inside them |
| 10 | Foundations Semantic color | Softer-premium / campaign-scoped / one-warm-note characterizations |
| 11 | Foundations Semantic color On-Dark | `tokens.colors.canvas` and `tokens.colors.on-dark` stay unmerged despite a shared hex |
| 12 | Foundations Spacing | Unitless steps unmerged from matching radius keys; `lg: 23` unmerged from `md: 25` |
| 13 | Foundations Shape | `lg: 45` unmerged from pill height 45px; `full: 9999` unmerged from 9999px radius; missing `none` step is a component writing on tiles and bands, not a `tokens.rounded` key |
| 14 | Foundations Elevation | Gallery-grade / conventional-retail reading |
| 15 | Foundations Motion | Unattributed durations, roles, and rules; listed curves omitted as not traceable to computed samples |
| 16 | Typography Official product-use | "No published type token" |
| 17 | Typography Official distributed asset | No exclusive downloadable font package |
| 18 | Typography Declared-only | Times-class fallback is not the brand face |
| 19 | Typography License | Custom/Pretendard stack without an IICOMBINED-issued license notice |
| 20 | Typography Outside these captures | Typography beyond the two pages sits outside this contract |
| 21 | Typography Family | Fallback prohibition; display / sans / sans-alt stay unmerged keys |
| 22 | Type roles | Ratios and tracking kept; never replaced by a computed px |
| 23 | Type rules | Quiet-chrome / catalog-index / editorial-titling readings |
| 24 | Assets | Favicon-service as identity pointer; photography as first-party catalog |
| 25 | Components how-to-read | Kind and applicability verdicts |
| 26 | Top Nav Item | 90px header is a Layout writing, not a YAML field on this component |
| 27 | State record | System-level treatments without per-control observation |
| 28 | State record close | Rows are not attached as visual treatments to destination controls |
| 29 | Layout whitespace | Imagery-over-chrome / flat-segmentation / gallery-rhythm |
| 30 | Layout responsive | Breakpoints stated at system level rather than measured across viewports |
| 31 | Content & Locales | Voice characterization, register reading, and tone table |
| 32 | Content voice-sample glosses | Exhibition-named / art-first framing / concept-first parentheticals |
| 33 | Content Forbidden register | Treating the source's forbidden list as a current-surface instruction |
| 34 | Content & Locales close | Byte-exact Korean strings; English gloss may sit beside a line and never replaces it |
| 35 | Recorded unresolved | Named values, not a license to invent |

## Proof notes

- verification schema from sibling: Tier 1 live inspect 2026-06-17; conflicts: none
- components_harvested: true
- Uncaptured hover / focus-visible treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete.
- Official history (Hankook Kim / 김한국 / Gentle Monster launched 2011 / Tamburins fragrance and body care / Nudake "make a new dream" / installation-first / refuse-and-embrace close) is narrative context, not a token source
- IICOMBINED has no separately published first-party UI specification in the source. Every derived-editorial close uses the toss-form `not IICOMBINED-authored or a separately published UI specification` (rulebook v12 B2a 전제 주석)
