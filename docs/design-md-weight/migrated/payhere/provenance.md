# Payhere provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/payhere/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | payhere |
| name | Payhere |
| display_name_kr | 페이히어 |
| country | KR |
| category | fintech |
| homepage | `https://payhere.in/` |
| primary_color | `#008cff` |
| logo.type | favicon |
| logo.slug | `https://www.google.com/s2/favicons?domain=payhere.in&sz=128` |
| omd format (source) | 0.1 |
| verified | 2026-07-02 |
| added | 2026-07-02 |
| tokens.source | live-extract |
| tokens.extracted | 2026-07-02 |
| components_harvested | true |

The homepage URL is dual-destination: identity metadata here, and a portable scope record in `DESIGN.md` §1. The primary color is dual: identity here, and Foundations / components in `DESIGN.md`. The Google s2 favicon slug is dual: identity here, and a portable Assets classification in `DESIGN.md` §3. There is no `ds.name` / `ds.url` / `ds.type` field in the source frontmatter (A1c: the absence is recorded, not filled).

**Logo decision.** The catalog field is `logo.type: favicon` with a Google s2 proxy URL. That is an identity pointer, not a Payhere-hosted brand file.

Token source from YAML, kept as ledger metadata: `tokens.source: live-extract`, `tokens.extracted: 2026-07-02`. YAML `tokens.note`: `primary = live interactive azure (#008cff — filled primary CTA + active tab ring); promo/active-filter blue (#0077fe); logo mark spans bright blue #1d99ff, indigo #163bd8, purple #a164f9. Near-black body text (#000000); navy card labels (#1c2638) and deep-navy headings (#101a2e).` The portable body restates those splits on the color roles; it does not rewrite `live-extract` as another source class.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-02 |
| added | 2026-07-02 |
| tokens.extracted | 2026-07-02 |
| Tier 1 live inspect (source footer) | 2026-07-02 |
| sibling inspect | 2026-07-02 |

The source footer records the verification verbatim as **Verified:** 2026-07-02 (omd:add-reference CREATE — Tier 1 live inspect). That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved: none — as the source footer states. Both Tier-2 catalogs returned no Payhere data; all values from Tier 1 live inspect.

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| home | marketing homepage | `https://payhere.in/` | 2026-07-02 |
| blog | official tech blog | `https://tech.payhere.in/` | 2026-07-02 |
| welcome-kit | official design post | `https://tech.payhere.in/post/design-payhere-welcome-kit/` | 2026-07-02 |

### Tier 1 (as listed in the source footer)

- `https://payhere.in/`
- `https://tech.payhere.in/`
- `https://tech.payhere.in/post/design-payhere-welcome-kit/`

### Tier 2

- getdesign.md/payhere — 0 DESIGN.md files — not listed
- styles.refero.design/?q=payhere — no Payhere entry — search returned unrelated results

Tier 2 data was not used to establish any token or component value.

## Token source (YAML `tokens.source`)

The source frontmatter records `tokens.source: live-extract` and `tokens.extracted: 2026-07-02`. That producer string is ledger metadata. The portable body attaches tokens to the homepage live inspect rather than renaming the source class.

## Sibling handling (`web/references/payhere/.verification.md`)

The sibling exists — confirmed with `find web/references/payhere -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact that the source body does not already record.

Its own record, transcribed here:

- Inspected 2026-07-02. Method: playwright getComputedStyle (live DOM) — global playwright (chromium, headless), goto `https://payhere.in/` (domcontentloaded + 3.5s settle), Escape/modal dismissal pass, then `getComputedStyle` on body, h1/h2/h3, buttons, links, `[role=button]`, plus a full-DOM background/text/radius frequency scan and header logo SVG fill read. Second surface: `https://tech.payhere.in/post/design-payhere-welcome-kit/`.
- body: `font-family: "Noto Sans KR"`; `color: rgb(0, 0, 0)` (`#000000`); `font-size: 16px`; `line-height: 16px`
- hero H2 "모바일 포스 1위 / 매장의 새로운 미래, 페이히어": Noto Sans KR 44px / 700 / `color rgb(0, 0, 0)`; height 124px (2 lines)
- section H3 "POS 일체형": 32px / 700 / `color rgb(0, 0, 0)`
- inactive H3 "영수증 인쇄": 32px / 700 / `#c1cad2`
- filled primary tab "카드 단말기": `#008cff` / white text / 5px / `0px 16px` / 40px / 16px / 700
- active outline tab "테이블 오더": white / `#008cff` text / 5px / 1px inset azure ring / 40px / 700
- product-category card "카드 단말기": `#f5f8fa` / `#1c2638` / 12px / `20px 0px` / 84px / 26px / 700
- active filter pill "NFC": `#0077fe` / black text / 30px / `12px 24px` / 56px / 16px
- default filter pill "비대면 결제": white / 30px / `12px 24px` / 56px
- device-option card "갤럭시": white / `1px solid #919ba5` / 8px / 72px
- top promo-banner button: `#0077fe`; height 48px; `font-size: 16px`; `border-radius: 0px`
- header login button "로그인": white / 5px / `0px 12px` / 40px
- header logo SVG fills: `#1d99ff`, `#163bd8`, `#a164f9`, `#000`
- frequency backgrounds include `rgb(31,89,224)` ×3 and `rgb(249,110,174)` ×1
- frequency radii include `20px` ×16, `50px` ×9, `100%` ×7
- `box-shadow: none` across hero, section headings, and product cards
- `document.title`: "페이히어｜매장의 새로운 미래"
- tech-blog H1 "빛나는 여정을 함께해요! 페이히어 웰컴키트": Pretendard 48px / 700 / black
- tech-blog H2 "디자인 컨셉": Pretendard 32px / 700 / `#111827`
- tech-blog nav chip "채용공고": `background-color: rgb(241, 243, 245)`; `border-radius: 6px`

### Sibling-only strings (not promoted into `DESIGN.md`)

These values appear in the sibling and not in the visible source body. They stay on this ledger. They are not portable facts.

- body `line-height: 16px` (source YAML body lineHeight is the unitless ratio `1.50`)
- hero H2 height `124px`
- section H3 "POS 일체형" computed `color rgb(0, 0, 0)` as a sibling-only color on that heading
- top promo-banner button height `48px`, `border-radius: 0px`
- header logo SVG fill `#000` as a fourth fill beside the three spectrum colors
- frequency-scan `rgb(31,89,224)` and `rgb(249,110,174)`
- frequency-scan radii `20px`, `50px`, `100%`
- tech-blog H1 "빛나는 여정을 함께해요! 페이히어 웰컴키트" (source body writes the shorter "빛나는 여정을 함께해요")
- tech-blog H2 "디자인 컨셉" / `#111827`
- tech-blog nav chip "채용공고" / `rgb(241, 243, 245)` / `6px`
- getdesign miss-page title `payhere — **0 DESIGN.md files**`

Values the sibling shares with the source body (corroboration, not new portable facts): `#008cff`, `#0077fe`, `#1d99ff`, `#163bd8`, `#a164f9`, `#000000`, `#1c2638`, `#c1cad2`, `#f5f8fa`, `#919ba5`, `#08d07e`, `#ff5b46`, `#101a2e`, `#5f6976`, Noto Sans KR 44px / 700, 32px / 700, 16px body, Pretendard 48px / 700, 5px tabs, 40px tab height, 12px product-card radius, 84px card height, 30px pills, 56px pill height, 8px / 72px device card, `box-shadow: none`, `document.title` "페이히어｜매장의 새로운 미래", "영수증 인쇄", "로그인".

## Token-set key paths (YAML)

| Path | Surface attachment |
|---|---|
| tokens.colors.primary | home — filled primary tab + active ring `#008cff` |
| tokens.colors.primary-strong | home — promo banner + active filter `#0077fe` |
| tokens.colors.brand-blue | home — logo mark `#1d99ff` |
| tokens.colors.brand-indigo | home — logo mark `#163bd8` |
| tokens.colors.brand-purple | home — logo mark `#a164f9` |
| tokens.colors.ink | home — deep-navy headings `#101a2e` |
| tokens.colors.ink-card | home — product-category card labels `#1c2638` |
| tokens.colors.ink-pure | home — body text `#000000` |
| tokens.colors.body | home — secondary copy `#5f6976` |
| tokens.colors.muted | home — hairlines / tertiary `#919ba5` |
| tokens.colors.faint | home — inactive headings `#c1cad2` |
| tokens.colors.canvas | home — page background `#ffffff` |
| tokens.colors.surface | home — product-selector cards `#f5f8fa` |
| tokens.colors.surface-alt | home — alternating blocks `#f4f8f9` |
| tokens.colors.on-primary | home — text on azure `#ffffff` (second `#ffffff` key) |
| tokens.colors.accent-coral | home — decorative `#ff5b46` |
| tokens.colors.accent-green | home — decorative `#08d07e` |
| tokens.typography.family.primary | home — Noto Sans KR |
| tokens.typography.family.blog | blog — Pretendard |
| tokens.typography.display-hero | 44 / 700 / 1.40 — Hero headline, Noto Sans KR Bold |
| tokens.typography.section | 32 / 700 / 1.50 — Section / feature headings (POS 일체형) |
| tokens.typography.card-title | 26 / 700 / 1.30 — Product-category card labels (카드 단말기) |
| tokens.typography.button | 16 / 700 / 1.00 — Filled primary CTA / active tab label |
| tokens.typography.body | 16 / 400 / 1.50 — Body / UI / nav text, Noto Sans KR |
| tokens.typography.blog-hero | 48 / 700 / 1.30 — Tech-blog article H1, Pretendard |
| tokens.spacing.xs / sm / md / base / lg / xl / xxl | 4 / 8 / 12 / 16 / 20 / 24 / 48 |
| tokens.rounded.sm / md / lg / xl / pill / full | 5 / 12 / 16 / 24 / 30 / 9999 |
| tokens.shadow.none | none |
| tokens.shadow.ring | `#008cff 0px 0px 0px 1px inset` |
| tokens.components.tab-filled | Filled primary product tab (카드 단말기) |
| tokens.components.tab-outline | Selected/active outline tab (테이블 오더) |
| tokens.components.filter-pill | Active feature filter pill (NFC, 리뷰 마케팅) |
| tokens.components.product-card | Product-category selector card (카드 단말기 / 테이블 오더 / 키오스크) |
| tokens.components.device-card | Device-option card (갤럭시 / 아이폰·아이패드 / 윈도우) |
| tokens.components.section-tab | Product-nav tab active state |

## Omission ledger

Disposition mentions. These rows name the dropped field kind; they do not re-host the dropped content as a fact.

| Item | Disposition |
|---|---|
| §13 페르소나 3인 (이름·나이·도시·동기·소속 분류 포함) | Deleted. The source's own header labels them fictional archetypes. Not promoted to Audience or primary-tasks, and not re-hosted here as names, ages, cities, motivations, or affiliation classifications (D2, D2a). |
| §9 Agent Prompt Guide — construction prompts | Deleted. Tool-facing copy-paste prompts. Values they restated are already in Foundations / Components / Experience. |
| §15 cubic-bezier values for `ease-enter` / `ease-exit` / `ease-standard` | Omitted at the curve-value boundary. Token names and uses are kept in Foundations Motion. `ease-exit` matches the legacy spec-template example in `spec/omd-v0.1.md`. No live-inspect attribution in the source HTML comment. |

§9 deletion check (A3). Every value §9 names was confirmed present elsewhere in the portable body before the section was dropped. Payhere Azure `#008cff` / Promo Blue `#0077fe` / logo spectrum / canvas `#ffffff` / surfaces `#f5f8fa` `#f4f8f9` / navies `#101a2e` `#1c2638` / black `#000000` / slate `#5f6976` / muted `#919ba5` / faint `#c1cad2` / coral `#ff5b46` / green `#08d07e` — Semantic color. Filled tab / outline tab / product-category card / filter pills / device-option grid — Components. Noto Sans KR Bold 700 / weight 400 / no shadows / pill 30px / cards 8–16px / tabs 5px / inactive `#c1cad2` — Application rules + Avoid + Shape.

## Derived editorial inventory

Portable `DESIGN.md` carries 43 complete B2a qualifications. This table is 43 data rows. Preamble sentences on this page are not portable qualifications.

| Location in DESIGN.md | Qualified reading |
|---|---|
| Experience Scope ¶1 `:9` | Inspected homepage as this contract's token surface; tech blog and welcome-kit as named sources that do not rewrite homepage tokens; catalog `primary_color` beside `tokens.colors.primary`; values stay attached |
| Experience Scope ¶2 `:11` | Bright energetic tech-retail / single "action" color / bold declarative / weight-and-contrast / quiet hangul-optimized body / flat pill-heavy near-shadowless / modern optimistic identity atmosphere |
| Experience Scope ¶3 `:13` | Founding-and-rebrand narrative, including the closing refusal-and-embrace paragraph, classified as context that does not by itself supply interface tokens |
| Primary tasks `:19` | Selecting the three surface-or-control outcomes as primary tasks; not from the Personas section |
| Audience `:28` | Biography-drop (no name, motivation, or affiliation classification); reading source-named Korean small-business owners / café/restaurant operators / retail merchants as audience |
| Distinctive traits `:32` | Grouping the recorded Key Characteristics as the distinctive layer |
| Principles `:46` | Other numbered stems and every UI implication as derived; principle 2 stem quoted from the welcome-kit; "one action, one color" and "flat and fast as a rejection of legacy POS chrome" kept in the source's editorial class |
| Application rules `:56` | Eight Do rules and the reasons attached |
| Avoid `:69` | Seven Don't prohibitions and the reasons inside them |
| Semantic color `:85` | Role names from the source's labels; catalog `#008cff` beside `tokens.colors.primary`; canvas / on-primary unmerged; surface / surface-alt unmerged; primary unmerged from primary-strong and from the three logo-mark keys; hero H2 kept on black rather than on ink navy |
| Spacing `:120` | Unitless steps unmerged from matching type sizes, paddings, and rounded keys |
| Shape `:135` | Six rounded keys kept (`5` / `12` / `16` / `24` / `30` / `9999`); device-card `8px` kept off the YAML map; `full: 9999` on its own key |
| Elevation `:148` | Near-shadowless / tint-and-hairline grouping; color-not-drop-shadow emphasis; clean fast mobile-native reading |
| Motion `:152` | Philosophy-layer durations and easing names rather than computed CSS; omitted `ease-exit` curve matching the legacy spec-template example |
| Motion rules `:168` | Functional-and-quiet / no-bounce / merchant-tooling-reliability / reduced-motion-fully-functional readings |
| Motion B3 `:172` | Five-kind promotion gate; omission of the three unattributed cubic-bezier values; refusal of a partial confirmation |
| Font evidence `:180` | Evidence-class rows as this record's resolution table, not a published Payhere type specimen |
| Family `:196` | Noto Sans KR as homepage default; Pretendard confined to the tech blog; `Noto Sans KR Fallback` as fallback context rather than the brand face |
| Family substitution `:198` | System-font or Pretendard substitute for the homepage face refused; Pretendard not mixed into the marketing homepage |
| Type roles `:202` | YAML unitless ratios kept; YAML `use` verbatim; YAML sizes beside §3 rem / `~` spellings; body `16` as a type size rather than `tokens.spacing.base: 16` |
| Type hierarchy `:213` | Bold-display-quiet-body / contrast-not-color / hangul-first uniformity / one-display-family readings |
| Assets `:226` | Google s2 slug as identity pointer rather than a Payhere-hosted brand file; three SVG fills as the header logo mark rather than as action colors |
| Capture omission `:233` | Hover / tab-pill-press / focus-ring visual treatments omitted for want of a computed value, not invented |
| State treatments `:249` | Nine §14 rows as derived compositions of values established elsewhere, not computed per-component observations |
| Capture / applicability `:251` | Source state contract kept rather than delegated to an unadopted catalog graph; role-based decision procedure; kind and applicability verdicts; YAML primitive types only where the token set records them; §4-only rows labelled `not in the token set`; not a complete state-coverage claim |
| Filled Primary Tab `:269` | 5px / 16px padding / 16px 700 as this tab's geometry, not only the YAML rounded or spacing or type-role rows |
| Outline / Active Tab `:298` | 5px and the inset ring as this tab's geometry |
| Login Link Button `:324` | Unnamed text color omitted rather than filled from another ink key; 5px as this control's geometry |
| Active Filter Pill `:352` | 30px / 12px 24px / 16px 400 as this pill's geometry, not only the YAML pill or spacing or type-role rows |
| Default Filter Pill `:379` | 30px as this pill's geometry rather than `tokens.rounded.pill: 30` applied to every unlisted control |
| Product-Category Card `:406` | 12px / 20px / 84px as this card's geometry; YAML `use` beside the longer §4 label list including `인터넷 패키지` |
| Device-Option Card `:422` | 8px / 72px as this card's geometry and the source's Standard (8px) prose step, not a YAML rounded key |
| Product-nav tab `:437` | Active-text writing kept on this YAML key; height / padding / radius not copied from the two button records |
| Layout spacing `:458` | Breathing-room / flat-segmentation / pill-rhythm readings; calling 12px 24px / 56px comfortable |
| Border radius prose `:466` | Standard (8px) kept on device-option cards rather than inventing a YAML rounded key for `8` |
| Responsive `:478` | Breakpoint table as source-stated layout rules rather than a newly measured cross-viewport specification |
| Touch targets `:497` | Comfortable / generous / merchant-friendly / confident readings of recorded heights |
| Image behavior `:504` | No-shadow imagery as consistent with the flat system; 12–16px radius kept across breakpoints |
| Voice samples `:511` | Parenthetical labels (rank + mission, all-in-one capability, brand statement) rather than a separately published microcopy guide |
| Voice and tone `:519` | Confident / plainspoken / merchant-first reading and the tone table |
| Forbidden register `:531` | Exclusions as derived rather than as a separately published register specification |
| Locale `:535` | Hangul-first 16px sizing recorded under Typography rather than as a complete locale profile |
| Named gaps `:569` | List as a catalog of unnamed values, not coverage of domains the source never named |

## Proof notes

- No `verification_v2` block in the source frontmatter. Sibling is a 2026-07-02 live-inspect note, transcribed above.
- `components_harvested: true`
- Uncaptured hover / press / focus-ring treatments are omitted. They are not `not-applicable` for want of a capture; applicability follows control meaning. State coverage is not claimed complete.
- Tech blog and welcome-kit post are named sources for Pretendard and quoted brand lines; they do not rewrite homepage component geometry.
- `tokens.source: live-extract` is ledger metadata
- B3 is held in Foundations Motion in full text (five evidence kinds + per-component gate)
- Source HTML comment: interpretive claims such as "one action, one color" and "flat and fast as a rejection of legacy POS chrome" are editorial readings, not directly sourced Payhere statements. Portable Principles keep that class adjacent (B2/B2a).
