# Fitpet (핏펫) provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and evidence detail for the T2 migration. Canonical source remains `web/references/fitpet/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | fitpet |
| name | Fitpet |
| display_name_kr | 핏펫 |
| country | KR |
| category | healthcare |
| homepage | https://fitpet.co.kr/ |
| primary_color | `#0050ff` |
| logo | type `favicon`, slug `https://www.google.com/s2/favicons?domain=fitpet.co.kr&sz=128` |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-07-02 |
| components_harvested | true |

The logo record is a third-party favicon-service URL (128px) rather than a Fitpet-hosted asset file. It is held here as the catalog identity record and is not promoted into the portable Assets contract as a brand asset. What the portable document does carry from the mark is the color pair the source derived from it: dominant `#0050ff`, secondary `#ff9300`.

`tokens.note`, verbatim from the source frontmatter:

> primary = brand blue #0050ff (logo dominant + mall primary button); #1482ff is the lighter corporate marketing accent; #0035a8 a deep navy for emphasis. Sale accent #ff5967, rating/points yellow #ffd633. Near-flat depth (box-shadow none). Corporate site = Noto Sans KR + Poppins latin; mall = Pretendard.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-02 |
| added | 2026-07-02 |
| tokens.extracted | 2026-07-02 |
| surfaces inspected | 2026-07-02 |

Source footer, verbatim: **Verified:** 2026-07-02 (omd:add-reference CREATE — Tier 1 live inspect, two surfaces). **Conflicts unresolved:** none.

## Sibling verification file (E2)

`web/references/fitpet/.verification.md` exists beside the legacy source and **is adopted** as the evidence record for this migration. The legacy `DESIGN.md` itself points at it — its closing source comment reads "Token-level claims (§1-9) are sourced from this live inspection (see .verification.md for 26 raw samples)".

Adoption is at the evidence level only. **No portable token was promoted from the sibling.** Concretely: the sibling records values the legacy `DESIGN.md` never carried — corporate muted `rgb(102, 102, 102)` (`#666666`), the accent-blue variant `rgb(20, 128, 255)` alongside `#1482ff`, element heights (hero H1 48px, stat 94px, discount badge 25px), an H3 role at 24px / 600 on the flagship, the mall's desktop-scaled base `font-size: 12px` / `line-height: 19.2px`, and DOM frequency counts. None of those **facts** entered `docs/design-md-weight/migrated/fitpet/DESIGN.md`; they are recorded below as evidence for values the legacy document already established. Some of the numerals collide with unrelated legacy values and so appear in the portable body on their own legacy footing: `48px` is the mall primary button's declared height (legacy `button-primary.height`) and a touch-target line, never the hero H1's element height; `12px` is the caption role and the ghost-pill / discount-badge font size (legacy §3, §4), never the mall's desktop-scaled base font-size; `24px` is the `lg` spacing key and the mall section-title size at weight 700 (legacy §3), never the flagship H3 at weight 600. The sibling-only readings — `#666666` / `rgb(102, 102, 102)`, `rgb(20, 128, 255)`, `94px`, `25px`, `19.2px` — occur zero times in the portable body.

## Evidence class

`tokens.source: live-extract`. Method, verbatim from the sibling: playwright `getComputedStyle` (live DOM) — global playwright (chromium, headless), `goto` with Chrome UA + `ko-KR` locale, `waitUntil: domcontentloaded`, cookie/modal dismissal pass, scroll, then `getComputedStyle` on body, h1/h2/h3, header/nav, buttons, links, inputs, plus a full-DOM background/text/border/radius frequency scan on two surfaces. Brand blue confirmed by sampling the logo PNG's dominant color.

Host note, verbatim: `www.fitpet.co.kr` is NXDOMAIN; the resolving flagship is the apex `https://fitpet.co.kr/` (AWS ap-northeast-2). The mall resolves at `https://www.fitpetmall.com/` (redirects to `/mall`).

The inspection covers computed color, type, spacing, radius, border, and shadow on two surfaces. It records no transition property, animation name, duration, easing, or reduced-motion observation — which is why the portable Motion section keeps the source's durations and rules as a system-level statement and drops the curve values.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| corporate | brand flagship | https://fitpet.co.kr/ | 2026-07-02 |
| mall | commerce mall | https://www.fitpetmall.com/ | 2026-07-02 |
| mall-search | mall search page | https://www.fitpetmall.com/mall/search | 2026-07-02 |

## Sources

### Tier 1

| URL | What it supplied |
|---|---|
| https://fitpet.co.kr/ | Corporate/brand flagship — nav, hero, stat, headings, ghost CTA, dark bands |
| https://www.fitpetmall.com/ | Fitpet Mall — primary button, product cards, discount badges, filter chips, surfaces |
| https://www.fitpetmall.com/mall/search | Mall search field (filled input) |
| https://fitpet.medium.com/ | "Fitpet Developer – Medium", the company's own engineering blog (brand-owned) |

### Tier 2 (no usable record)

- getdesign.md/fitpet — HTTP 200 but "fitpet — **0 DESIGN.md files**" (no entry).
- styles.refero.design/?q=fitpet — search returns only generic trending styles (Finn, Petertarka, Impossible Foods, Foodnoms); no Fitpet entry exists. Not listed.

KR proof note from the sibling: Tier 2 under-covers Korean brands, so Tier 1 carries the proof (26 raw samples across two brand-owned surfaces).

### Country sources (KR requirement, brand-owned, ≥2)

1. https://fitpet.co.kr — official corporate/brand flagship (live-inspected).
2. https://www.fitpetmall.com — Fitpet Mall, the company's own commerce product (live-inspected).
3. https://fitpet.medium.com — "Fitpet Developer – Medium", the company's official engineering blog.

getdesign.md, refero.design, and the Google favicon proxy are explicitly not counted toward the KR brand-owned requirement.

## Raw samples (from the sibling, 26 records)

Kept here because they are per-element evidence, not portable contract. Sub-pixel values are the desktop-scaled computed numbers that the legacy document rounded before promoting them.

- `fitpet.co.kr` body — `font-family: "Noto Sans KR", sans-serif` · `color: rgb(0, 0, 0)` (`#000000`) · `font-size: 16px` · `line-height: 24px` · `background: rgb(255, 255, 255)` (`#ffffff`)
- `fitpet.co.kr` hero H1 "반려동물의 건강을 / 집에서 1분만에 확인" — Noto Sans KR · `font-size: 40px` · `font-weight: 600` · `color: rgb(0, 0, 0)` · height 48px
- `fitpet.co.kr` big stat "16만+" — Noto Sans KR · `font-size: 85px` · `font-weight: 600` · height 94px
- `fitpet.co.kr` H3 "건강을 생각한 제품" — `font-size: 24px` · `font-weight: 600`
- `fitpet.co.kr` nav link "회사 소개" — `font-family: Poppins` · `font-size: 13px` · `font-weight: 700` · `color: rgb(0, 0, 0)` · `padding: 39px 15px`
- `fitpet.co.kr` ghost pill "일반채용" — bg transparent · `border: 2px solid rgb(255, 255, 255)` · `border-radius: 30px` · `padding: 10px 50px` · height 42px · 12px / 600 white
- `fitpet.co.kr` corporate accent blue `rgb(20, 130, 255)` (`#1482ff`) — bg-frequency ×4, text-frequency ×8 (plus `rgb(20, 128, 255)` ×6)
- `fitpet.co.kr` dark section bg `rgb(40, 40, 40)` (`#282828`) ×4 · text-on-dark `rgb(238, 238, 238)` (`#eeeeee`) ×52 · muted `rgb(102, 102, 102)` (`#666666`)
- `fitpetmall.com` body — `font-family: Pretendard, -apple-system, …` · base `font-size: 12px` (desktop-scaled) · `line-height: 19.2px`
- `fitpetmall.com` primary action button "추천" — `background: rgb(0, 80, 255)` (`#0050ff`) · `border-radius: 28.8px` · `padding: 7.2px 16.8px` · height 48px
- `fitpetmall.com` discount badge "55%" (also 46/53/24/69%) — `background: rgb(255, 89, 103)` (`#ff5967`) · `border-radius: 4.8px` · `padding: 4.8px` · `font-size: 12px` · height 25px
- `fitpetmall.com` dominant surface tint `rgb(244, 247, 250)` (`#f4f7fa`) — bg-frequency ×175
- `fitpetmall.com` coupon promo strip "첫 구매 시 인기상품 한정 특가!" — `background: rgb(237, 244, 255)` (`#edf4ff`)
- `fitpetmall.com` deep brand navy `rgb(0, 53, 168)` (`#0035a8`) — text-frequency ×14, bg ×2
- `fitpetmall.com` points / rating yellow `rgb(255, 214, 51)` (`#ffd633`) — text-frequency ×370
- `fitpetmall.com` section title "오늘의 핫딜 🔥" — Pretendard · `font-size: 24px` · `font-weight: 700` · `color: rgb(27, 30, 33)` (`#1b1e21`)
- `fitpetmall.com` page title "홈" — Pretendard · `font-size: 19.2px` · `font-weight: 700` · `color: rgb(27, 30, 33)`
- `fitpetmall.com` product-card title (e.g. "하림 더리얼 당근 케이크 300g") — Pretendard · `font-size: 16.8px` · `font-weight: 400` · `color: rgb(66, 73, 79)` (`#42494f`)
- `fitpetmall.com` muted text ladder — `rgb(167, 174, 181)` (`#a7aeb5`) ×918 · `rgb(114, 122, 130)` (`#727a82`) ×171 · `rgb(140, 148, 156)` (`#8c949c`) ×168
- `fitpetmall.com` filter chip "펫루키" — bg transparent · `border: 1px solid rgb(194, 200, 207)` (`#c2c8cf`) · `border-radius: 999px` · `padding: 0px 14.4px` · height 43px
- `fitpetmall.com` hairlines `rgb(238, 241, 245)` (`#eef1f5`) ×9, `rgb(223, 227, 232)` (`#dfe3e8`) ×6 · card border `rgba(0, 0, 0, 0.03)` ×173
- `fitpetmall.com/mall/search` search input "검색어를 입력해 주세요." — `background: rgb(244, 247, 250)` · `border: none` · `border-radius: 9.6px` · `padding: 1px 50.4px 1px 2px` · height 50px · `font-size: 16px`
- `fitpetmall.com` radius frequency — `9.6px` ×154 (cards/inputs) · `50%` ×44 (avatars/circles) · `4.8px` ×20 (badges) · `28.8px` ×6 (pills) · `999px` ×3 (chips)
- `fitpetmall.com` box-shadow near-`none`; separation carried by `rgba(0, 0, 0, 0.03)` borders plus the `#f4f7fa` tint
- Logo (Google favicon proxy, `fitpet.co.kr`, 128×128, 898B) dominant color `#0050ff` (13205px) plus secondary orange `#ff9300` (726px)

The same sub-pixel numbers appear in the legacy source comment: mall primary button 28.8px radius, discount badge 4.8px radius, search field 9.6px radius, favicon 128px.

## Conflict matrix (from the sibling)

| Field | Tier 1 (live) | getdesign | refero | Resolution |
|---|---|---|---|---|
| Brand primary color | `#0050ff` (logo dominant + mall primary button) | — (no entry) | — (not listed) | Tier 1 — `#0050ff` |
| Secondary blues | `#1482ff` (corporate accent), `#0035a8` (deep navy) | — | — | Tier 1 — both retained by role |
| Discount/sale accent | `#ff5967` | — | — | Tier 1 |
| Body font | Pretendard (mall) / Noto Sans KR (corporate), Poppins (latin nav) | — | — | Tier 1 — documented per surface |
| Card radius | ~9.6px (0.6rem desktop-scaled), pills 28.8px/999px | — | — | Tier 1 |
| Depth | near-flat (box-shadow none; borders + tint) | — | — | Tier 1 |

Conflicts unresolved: none. Both Tier 2 catalogs are empty for this KR brand and Tier 1 is uncontested.

## Claim ledger

Every value below traces to `web/references/fitpet/DESIGN.md`. "Source location" is the legacy section or YAML path.

| Claim | Source location | Portable destination |
|---|---|---|
| `tokens.colors.primary` / `primary-deep` / `brand-blue-lt` / `accent-orange` | YAML `tokens.colors`, §2 Primary + Accent | Foundations → Semantic color (brand table) |
| `tokens.colors.sale` / `points` | YAML `tokens.colors`, §2 Accent | Foundations → Semantic color (semantic accents table) |
| `tokens.colors.ink` / `ink-corp` / `body` / `muted` / `muted-alt` / `faint` / `ink-pure` / `on-dark` | YAML `tokens.colors`, §2 Text Hierarchy | Foundations → Semantic color (text table) |
| `tokens.colors.canvas` / `surface` / `promo-tint` / `hairline` / `border` / `border-strong` | YAML `tokens.colors`, §2 Neutral & Surface | Foundations → Semantic color (neutral and surface table) |
| `tokens.typography.family.display` / `kr` / `product` | YAML `tokens.typography.family`, §3 Font Family | Typography & Assets → Font evidence, Family |
| `stat-hero` / `display` / `section` / `subsection` / `product` / `body` / `nav` / `caption` (size, weight, unitless lineHeight, use) | YAML `tokens.typography`, §3 Hierarchy table | Typography & Assets → Type roles (ratios 1.2 / 1.4 / 1.5 preserved as ratios) |
| §3 Principles (two fonts two surfaces, weight switch, hero numbers, hangul-first sizing) | §3 Principles | Typography & Assets → Typography rules; Font evidence → Surface binding |
| `tokens.spacing` xs / sm / base / md / lg / chip / xl / xxl | YAML `tokens.spacing`, §5 Spacing System | Foundations → Spacing; Layout & Platforms (39px header, 10px 50px CTA) |
| `tokens.rounded` sm / md / chip / pill / full | YAML `tokens.rounded`, §5 Border Radius Scale | Foundations → Shape |
| `tokens.shadow.none` / `hairline` | YAML `tokens.shadow`, §6 | Foundations → Elevation |
| `button-primary` (`type: button`) | YAML `tokens.components`, §4 Buttons | Components & States → Mall Primary Action Button |
| `button-ghost` (`type: button`) + §9 `transparent` background | YAML `tokens.components`, §4 Buttons, §9 example prompt | Components & States → Corporate Ghost Pill CTA |
| `search-input` (`type: input`) | YAML `tokens.components`, §4 Inputs & Forms | Components & States → Mall Search Field |
| `filter-chip` (`type: badge`) + §9 `transparent` background | YAML `tokens.components`, §4 Badges, §9 example prompt | Components & States → Mall Filter Chip |
| `discount-badge` (`type: badge`) | YAML `tokens.components`, §4 Badges | Components & States → Product Discount Badge |
| `product-card` (`type: card`) | YAML `tokens.components`, §4 Cards & Containers | Components & States → Product Card |
| `promo-strip` (`type: card`) | YAML `tokens.components`, §4 Cards & Containers | Components & States → Promo Strip |
| `nav-link` (`type: tab`, active variant) | YAML `tokens.components`, §4 Navigation | Components & States → Corporate Nav Link |
| §5 Grid & Container, Whitespace Philosophy | §5 | Layout & Platforms |
| §8 Breakpoints, Touch Targets, Collapsing Strategy, Image Behavior | §8 | Layout & Platforms → Responsive behavior |
| §14 nine state records with values and copy | §14 | Components & States → State record |
| §15 durations 120 / 200 / 320ms, easing roles and uses, motion rules, reduced-motion | §15 | Foundations → Motion |
| §10 tone table, forbidden register, three verbatim voice samples | §10 | Content & Locales |
| §11 founding year, mission framing, mall and hospital-booking scope, "16만+" trust anchor | §11 | Experience → Scope (fenced as brand narrative) |
| §12 five principles with UI implications | §12 | Experience → Principles |
| §7 Do rules / Don't rules | §7 | Experience → Application rules / Avoid |

## Derived editorial inventory

Sites in the portable `DESIGN.md` that carry an adjacent complete qualifier. Complete form used: "a derived editorial implementation inference from the verified surfaces; it is not Fitpet-authored or a separately published UI specification." This is an index of the derived-reading sites, not a completeness claim.

- Scope — reading the two surfaces as one identity carried by a single brand blue, and the flagship/mall split as a deliberate division of labour
- Primary tasks — the selection of three tasks, each tied to the source passage it rests on
- Audience — the group-level restatement that remains after the three fictional archetypes were dropped
- Distinctive traits — the seven-item selection and the readings carried inside the items (the tint doing shadow's work, pill-forward geometry, semantic-only accents)
- Principles — the five items and each *UI implication*
- Foundations → Spacing — reading the recorded placements as chosen for a spacious header, a wide tap target, and dense browsing (the measurements themselves are observed)
- Foundations → Elevation — reading the flatness as a choice that keeps a dense grid feeling fast, mobile-native, and calm
- Foundations → Motion — reading the durations and rules as a system-level statement rather than per-component measured values
- Typography & Assets → Typography rules — reading the measured metrics as the source's four typography principles
- Typography & Assets → Assets — treating the logo record as an identity pointer rather than a brand asset, and leaving it out of the contract
- Components & States → How to read this section — every interactive-kind verdict, every applicability verdict, and the reason given for either
- Layout & Platforms — the "editorially calm flagship, dense mall grid" characterization, and the reading of the repeated 999px chips and 28px–30px buttons as a soft, consistent horizontal cadence
- Content & Locales — the voice characterization and the tone table

Evidence-class boundary sentences in the portable body (a different class from the qualifier above, listed separately so the two are not conflated):

- Scope — the 2017 founding is marked as widely-documented public knowledge rather than a quotation from a Fitpet statement, and the mission phrasing is quoted from the live homepage and mall.
- Scope — the health boundary: the hero promise and the "16만+" stat are brand-published strings recorded as copy and as a typographic specimen, and no value in the document is evidence for a veterinary, diagnostic, efficacy, or safety claim.
- Content & Locales — the same boundary restated for register: veterinary, diagnostic, efficacy, dosage, and safety language sits outside what the source establishes.
- Components & States → Product Card / Promo Strip — the absence of an interactive kind is an open question, not a finding that either is inert.
- Foundations → Motion — the source attributes its token-level claims to a live inspection of computed color, type, spacing, radius, border, and shadow; the motion contract sits outside that attribution.

## Omission ledger

| Item | Status |
|---|---|
| Three easing curve values from §15 — `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)`, `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)`, `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)` | Removed from the portable body, retained verbatim in this row. The source attributes its token-level claims to a live inspection that covers computed color, type, spacing, radius, border, and shadow; the sibling verification file records no transition, animation, duration, or easing sample for either surface. `cubic-bezier(0.4, 0.0, 1, 1)` is additionally the example curve carried by the 0.1 format's own section template (`spec/omd-v0.1.md` 267) rather than a Fitpet measurement. The easing roles, their uses, and the promotion condition stay in the portable Motion section. |
| Press scale / opacity values | Unresolved. §15 states that chips and buttons respond to press with a subtle scale/opacity shift but attaches no value. Named in Governance without a value. |
| Hover visual treatment | Unresolved. §15 assigns hover to the 120ms duration; no per-component hover color, opacity, or transform value exists in the source. |
| Product card and promo strip interactive kind | Unresolved. The source attaches no action, target, or state to either, so neither kind nor a state-applicability map is declared. |
| Three persona records (names, ages, cities, biographies) | Deleted. The source labels them fictional archetypes. Not promoted, and deliberately not re-hosted here — no demographic segment list is kept in this file. |
| §9 Agent Prompt Guide — quick color reference, example component prompts, iteration guide | Deleted as tool-facing packaging. Its one unique renderable value (`transparent` background for the ghost pill and the filter chip) was moved into the two component records. |
| Sub-pixel computed radii (28.8px, 4.8px, 9.6px) and the 128px favicon size | Held here as evidence. The legacy document rounded them to 28px / 5px / 10px before promoting them, and the portable body carries the rounded values the source promoted. |
| Sibling-only values (`#666666` / `rgb(102, 102, 102)`, `rgb(20, 128, 255)`, element heights — stat 94px, discount badge 25px, hero H1 48px — flagship H3 24px / 600, mall base font-size 12px / line-height 19.2px, DOM frequency counts) | Held here as evidence. Not promoted into the portable body — the sibling is adopted as evidence, not as a token source. Absence is at fact level: the numerals `48px` and `12px` do occur in the portable body, carrying the legacy button height and the legacy caption / ghost-pill / badge font size, not these sibling facts. |

## Notes on evidence separation (healthcare domain)

- Fitpet is a pet-healthcare and pet-commerce brand, so brand-published health copy and observed UI values are kept in separate paragraphs throughout the portable body. The hero promise "반려동물의 건강을 집에서 1분만에 확인" and the "16만+" stat are treated as published brand strings and as a typographic specimen (85px / 600 Noto Sans KR); the portable Scope states explicitly that no color, type, component, layout, or state value in the document is evidence for a veterinary, diagnostic, efficacy, or safety claim.
- The source's own §11 marks the 2017 founding as widely-documented public knowledge and the mission framing as quoted from the live homepage; that split is preserved rather than flattened into one verified-fact voice.
- The source contains no dosage, indication, efficacy, or safety copy. §10's forbidden register — which already rules out fear-based pet-health scare copy and undefined veterinary jargon — is preserved verbatim, and the portable Content & Locales section adds the boundary that its register guidance may not be used to derive clinical copy.
- The Korean product strings in §14 and in the component roles are UI copy and are preserved byte-exact with an English reading aid beside them, never in place of them.
