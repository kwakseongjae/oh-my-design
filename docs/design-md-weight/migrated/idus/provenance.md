# idus provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/idus/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | idus |
| name | idus (Backpackr) |
| display_name_kr | 아이디어스 (백패커) |
| country | KR |
| category | ecommerce |
| homepage | `https://www.idus.com` |
| primary_color | `#ef7014` |
| logo.type | favicon |
| logo.slug | `https://www.google.com/s2/favicons?domain=idus.com&sz=128` |
| omd format (source) | 0.1 |
| verified | 2026-07-02 |
| tokens.source | live-extract |
| tokens.extracted | 2026-07-02 |
| components_harvested | true |

The homepage URL is dual-destination: identity metadata here, and a portable scope record in `DESIGN.md` §1. The primary color is dual: identity here, and Foundations / components in `DESIGN.md`. The favicon slug is dual: identity here, and a portable asset pointer in `DESIGN.md` §3.

**Logo decision.** The `logo.slug` above is a Google favicon-service URL, not an idus-hosted asset. The sibling verification file states that getdesign.md, refero, and Google favicon are explicitly not counted toward the KR brand-owned ≥2 requirement; the catalog identity field is kept here and is classified in the portable document as an identity pointer, not a hosted brand file.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-02 |
| added | 2026-07-02 |
| tokens.extracted | 2026-07-02 |
| Tier 1 live inspect (source footer) | 2026-07-02 |

The source footer records the verification verbatim as **Verified:** 2026-07-02 (omd:add-reference CREATE — Tier 1 live inspect). That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved: none — as the source footer states.

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| home | homepage, live computed style | `https://www.idus.com` | 2026-07-02 |
| product | product detail page, live computed style | `https://www.idus.com/v2/product/` | 2026-07-02 |
| github | Backpackr official GitHub org — brand-owned; not a computed-token surface | `https://github.com/backpackr` | named in the source footer |

### Tier 1 (as listed in the source footer)

- `https://www.idus.com` (homepage, live computed style)
- `https://www.idus.com/v2/product/` (product detail page, live computed style — purchase CTA, secondary/outline buttons)
- `https://github.com/backpackr` (Backpackr official GitHub org)

### Tier 2

- getdesign.md/idus — no entry ("0 DESIGN.md files, No designs found")
- styles.refero.design/?q=idus — no idus-specific style listed (search returns unrelated generic results)

## Token note (YAML `tokens.note`)

The source frontmatter note, kept here as a ledger string and also landed in the portable body as the facts it names (carrot orange `#ef7014` as the single action color; coral `#ff4b50`; gold `#ffaf00`; ink `#111111`; text ladder `#333333` → `#666666` → `#999999`; flat near-shadowless commerce UI on a white canvas):

> primary = live purchase-CTA carrot orange (#ef7014), the single action color across CTA, outlined buttons, rank flags and social-proof pills. Sale/price accent is coral (#ff4b50); rating gold (#ffaf00). Near-black ink (#111111) for dark caption chips; text ladder #333333 → #666666 → #999999. Flat, near-shadowless commerce UI on a white canvas.

## Sibling handling (`web/references/idus/.verification.md`)

The sibling exists — confirmed with `find web/references/idus -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact that the source body does not already record.

Its own record, transcribed here:

- Inspected 2026-07-02. Method: playwright getComputedStyle (live DOM) — global playwright (chromium, headless), Chrome UA + `ko-KR` locale, `goto` domcontentloaded + 4–4.5s settle, Escape/modal dismissal, then `getComputedStyle` on body, buttons/links/inputs/tabs, plus a full-DOM background/text color frequency scan and a saturated-color element scan. Two surfaces: homepage and a live product detail page.
- homepage `document.title`: "아이디어스"
- product `document.title`: "재구매 1위🥇 925실버 레이어드링 은반지 20종 | 아이디어스"
- body: `font-family: ui-sans-serif, system-ui, -apple-system, "Malgun Gothic"...`; `color: rgb(0, 0, 0)`; `font-size: 16px`; `line-height: 24px`
- Product CTA "구매하기": `background-color: rgb(239, 112, 20)` (#ef7014); `color: rgb(255, 255, 255)`; `border-radius: 2px`; `padding: 0px 16px`; height 48px; `font-size: 18px`; `font-weight: 700`
- Secondary "장바구니" / "선물하기": white / `#333333` / `1px solid #acacac`; 2px; 48px; 18px / 700
- Outline "작품문의": white / `#ef7014` text+border; 2px; 40px; 14px / 700
- Outline "팔로우": `#ef7014` text+border; 2px; height 36px; 14px
- Social-proof pill "최근 573건 더 많이 구매되었어요": `#ef7014` / `#ffffff`; 100px; `0px 14px`; 33px; 14px / 700
- Ranking flag "1"/"2"/"3": `#ef7014` / `#ffffff`; `0px 0px 6px`; 16px / 700; height 30px
- Search placeholder "찾으시는 작가, 작품이 있나요?": white / `#333333`; 14px; borderless
- Category tabs: `#666666`; 16px / 400; height 48px
- Top utility (로그인/회원가입/고객센터): `#666666`; 12px; `0px 8px`; 30px
- Dark caption chip: `#111111`; 4px; `6px 8px`; height 26px; `font-size: 16px`
- Product-image card container: `border-radius: 12px`
- Homepage background frequency: `rgb(255,255,255)` ×462, `rgb(17,17,17)` ×95, `rgb(217,217,217)` ×64, `rgb(239,112,20)` ×30, `rgb(51,51,51)` ×25, `rgb(255,242,244)` ×16, `rgb(255,247,242)` ×1
- Homepage text-color frequency: `rgb(51,51,51)` ×7587, `rgb(102,102,102)` ×819, `rgb(255,75,80)` ×455, `rgb(255,175,0)` ×300, `rgb(153,153,153)` ×270, `rgb(255,234,44)` ×210, `rgb(17,17,17)` ×162
- `box-shadow: none` and `0px solid` borders across header, category tabs, product cards and action buttons
- Country sources also name `https://medium.com/idus-tech` (idus/Backpackr official engineering blog; Medium returns 403 to curl HEAD)

Values and strings the sibling carries that the visible source body does not, kept here and not promoted:

- Product-page title `재구매 1위🥇 925실버 레이어드링 은반지 20종 | 아이디어스`
- Declared stack member `ui-sans-serif`
- Body computed `16px` / `24px` and body `color: rgb(0, 0, 0)`
- Outline `팔로우` height `36px` (the source body records outline buttons at 40px)
- Ranking-flag height `30px`
- Dark-caption-chip height `26px` and chip `font-size: 16px`
- Category-tab height `48px`
- Frequency counts (×462, ×7587, and the rest)
- Product-detail UUID path `/v2/product/d418cb12-ecba-4534-860a-23836c3e0c44`
- Engineering-blog URL `https://medium.com/idus-tech`
- Tier 2 page-miss string `No designs found for 'idus'.`

`구매하기` / `장바구니` / `선물하기` / `작품문의` / `팔로우` / `찾으시는 작가, 작품이 있나요?` / `최근 573건 더 많이 구매되었어요` / `선물추천` / `로그인` / `#ef7014` / `2px` / `48px` / `100px` are already in the source body and are corroboration, not a sibling-only promotion.

## Byte-form notes

- The source frontmatter records line heights as unitless ratios (`1.4`, `1.5`). They are carried as ratios in the portable body, never converted to a replacement px (A1a).
- The source frontmatter records spacing and radius steps unitless (`xs: 4` … `xl: 24`; `sm: 2`, `md: 4`, `lg: 12`, `full: 100`). The portable body keeps both the unitless steps and the px forms the visible sections use. `full: 100` stays a step.
- `tokens.spacing.xs: 4` is not `tokens.rounded.md: 4`. `tokens.spacing.base: 14` is not the pill's 14px padding and not the 14px type size. `tokens.spacing.md: 16` is not the button's `0 16px` padding. `tokens.rounded.full: 100` is the unitless full step.
- YAML `tokens.colors.canvas: #ffffff` is the page-and-card role. YAML `tokens.colors.on-primary: #ffffff` shares a hex with canvas and stays a separate key.
- YAML component padding `0 16px` / `0 14px` sits beside the visible-section forms `0px 16px` / `0px 14px`. YAML rank radius `0 0 6px 6px` sits beside `0px 0px 6px 6px`. Neither was chosen as a replacement.

## Claim ledger

| Claim | Surface |
|---|---|
| tokens.colors.primary / primary-tint / sale / sale-tint / rating / highlight / ink / text / text-muted / text-faint / border / border-strong / canvas / on-primary | home + product |
| tokens.typography.family.sans / family.kr | home + product |
| tokens.typography.cta / button-strong | product |
| tokens.typography.section-tab / body / caption / micro | home |
| tokens.spacing.xs / sm / base / md / lg / xl | home + product |
| tokens.rounded.sm / md / lg / full | home + product |
| tokens.shadow.none | home + product |
| tokens.components.button-primary / button-secondary / button-outline / search-input | product + home |
| tokens.components.badge-purchased / badge-rank / nav-tab / product-card | home |

## Omission ledger

Disposition mentions. These rows name the dropped field kind; they do not re-host the dropped content as a fact.

| Item | Disposition |
|---|---|
| §13 페르소나 3인 (이름·나이·도시 포함) | Deleted. The source's own header labels them fictional archetypes. Not promoted to Audience or primary-tasks, and not re-hosted here as names, ages, cities, motives, or occupation classifications (D2, D2a). |
| §15 `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)` | Deleted. Unattributed curve. Role name and use kept. |
| §15 `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` | Deleted. Unattributed, and byte-identical to the documented re-injection path in `spec/omd-v0.1.md`. |
| §15 `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)` | Deleted. Unattributed curve. Role name and use kept. |
| §9 Agent Prompt Guide — Quick Color Reference, Example Component Prompts, Iteration Guide | Deleted. Tool-facing copy-paste prompts. Values they restated are already in Foundations / Components. |

§9 deletion check (A3). Every value §9 names was confirmed present elsewhere in the portable body before the section was dropped. idus Carrot `#ef7014`, On-Primary White `#ffffff`, Sale Coral `#ff4b50`, Rating Gold `#ffaf00`, Highlight Yellow `#ffea2c`, Text `#333333`, Text Muted `#666666`, Text Faint `#999999`, Ink `#111111`, Border `#d9d9d9`, Border Strong `#acacac`, Carrot Tint `#fff7f2`, Sale Tint `#fff2f4`, Canvas `#ffffff` — Foundations semantic color. Product-detail action rail 48px / 2px / `#ef7014` `구매하기` / white `#333333` `#acacac` `장바구니` `선물하기` / 18px / 700 — Primary Purchase CTA + Secondary Cart / Gift. Product card `#ffffff` / 12px / no shadow / social-proof 100px / 14px / 700 / rank flag `0 0 6px 6px` — Product Card + Social-Proof Pill + Ranking Flag. Category tabs 16px / 400 / `#666666` / active `#333333` — Category Tab. Brand-outline 40px / 2px / `#ef7014` text+border / 14px / 700 / `작품문의` / `팔로우` — Brand Outline. Iteration-guide rules (reserved orange, weight 700 vs 400, no shadows, 2px vs 100px, text ladder, coral/gold not CTA, dense 14px, dark chips) — Principles + Application rules + Avoid + Type rules.

## Derived editorial inventory

Portable `DESIGN.md` carries 35 complete B2a qualifications. This table is 35 data rows. Preamble sentences on this page are not portable qualifications.

| # | Portable location | Qualified reading |
|---|---|---|
| 1 | Experience Scope ¶1 | Largest-marketplace characterization; two inspected pages as this contract's token surfaces; values stay attached; GitHub org is not a computed-token surface |
| 2 | Experience Scope ¶2 | Warm high-density commerce / orange-as-commitment / system-native typographic personality / hierarchy-by-weight-and-size / scanning-not-editorial / restraint-with-depth characterizations |
| 3 | Experience Scope ¶3 | Founding-and-maker narrative as context that does not supply interface tokens; refuse/embrace as the source's editorial reading |
| 4 | Primary tasks | Selecting the four recorded labels as primary tasks |
| 5 | Audience | Group-level gift-shoppers / supporters of independent makers / hobbyists browsing handmade classes |
| 6 | Distinctive traits | Grouping the Key Characteristics as the distinctive layer |
| 7 | Principles | The five numbered items and their UI implications |
| 8 | Application rules | The eight Do rules and the reasons attached |
| 9 | Avoid | The eight Don't rules and the reasons inside them |
| 10 | Foundations Semantic color | Carrot-as-act / never-pure-black / hairline-as-separation characterizations |
| 11 | Foundations Semantic color On-Primary | `tokens.colors.canvas` and `tokens.colors.on-primary` stay unmerged despite a shared hex |
| 12 | Foundations Spacing | Unitless steps unmerged from matching radius keys and from component padding |
| 13 | Foundations Shape | `full: 100` unmerged from matching spacing keys; Sharp 2px as the workhorse among the named radius uses |
| 14 | Foundations Elevation | Near-shadowless / dense-grid-fast-and-flat reading |
| 15 | Foundations Motion | Unattributed durations, roles, and rules |
| 16 | Typography Official product-use | "No published type token" |
| 17 | Typography Official distributed asset | No exclusive downloadable font package |
| 18 | Typography Declared-only | Stack members classed as the system stack, not a unused second brand face |
| 19 | Typography License | Platform stack without an idus-issued license notice |
| 20 | Typography Outside these captures | Typography beyond the two pages sits outside this contract |
| 21 | Typography Family | Fallback prohibition |
| 22 | Type roles | Ratios kept as ratios; each YAML `use` on its own row |
| 23 | Type rules | Weight-over-typeface / dense-scannable / bold-for-action / no-pure-black readings |
| 24 | Assets | Favicon-service as identity pointer; photography as first-party catalog |
| 25 | Components how-to-read | Kind and applicability verdicts |
| 26 | State record | System-level treatments without per-control observation |
| 27 | State record close | Rows are not attached as visual treatments to destination tabs or utility links |
| 28 | Layout whitespace | Three source titles read as current-surface layout instruction |
| 29 | Layout responsive | Breakpoints stated at system level rather than measured across viewports |
| 30 | Content & Locales | Voice characterization, register reading, and tone table |
| 31 | Content Forbidden register | Premise-to-register causal (handmade and personal, so copy stays warm) |
| 32 | Content & Locales close | Byte-exact Korean strings; English gloss may sit beside a line and never replaces it |
| 33 | Recorded unresolved | Named values, not a license to invent |
| 34 | Layout image behavior | No-shadow-on-imagery as consistent with the flat system |
| 35 | Content voice-sample glosses | Parenthetical glosses on the three verbatim samples |

## Proof notes

- verification schema from sibling: Tier 1 live inspect 2026-07-02; conflicts: none
- components_harvested: true
- Uncaptured hover / focus-visible treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete.
- Official history (2014 founding / Backpackr / 김동환 / 클래스 / 텀블벅 / refuse glossy DTC and hard-sell scarcity) is narrative context, not a token source
- No separately published UI specification is named in the source. Every derived-editorial close uses the toss-form `not idus-authored or a separately published UI specification` (rulebook v12 B2a 전제 주석)
