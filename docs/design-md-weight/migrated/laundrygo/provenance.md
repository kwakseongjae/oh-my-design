# LaundryGo provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and evidence detail for the T2 migration. Canonical source remains `web/references/laundrygo/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | laundrygo |
| name | LaundryGo |
| display_name_kr | 런드리고 |
| country | KR |
| category | consumer-tech |
| homepage | https://www.laundrygo.com |
| primary_color | `#0ac290` |
| logo | type `favicon`, slug `https://www.laundrygo.com/wp-content/uploads/2022/12/favicon_web.png` |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-11 |
| components_harvested | true |

The logo record is a first-party LaundryGo asset on the brand domain, so it is carried in the portable Assets section as well as being indexed here. Two destinations (E2a).

`tokens.note`, verbatim from the source frontmatter:

> primary = live CTA + eyebrow-label green (#0ac290), a down-toned mint introduced in the 2022 rebrand for trustworthiness; blue accent (#0170b9) appears in stat/data text; warm-grey ladder (#dfdfdf muted button, #ecebdc beige surface) is the documented sub-color. Pretendard for web body/UI; '런드리고딕체' is the brand's proprietary display typeface.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-11 |
| added | 2026-06-11 |
| tokens.extracted | 2026-06-11 |
| surfaces inspected | 2026-06-11 |
| sibling verification notes | 2026-06-11 |

Source footer, verbatim: **Verified:** 2026-06-11 · **Conflicts unresolved:** none.

## Sibling verification file (E2)

`web/references/laundrygo/.verification.md` exists beside the legacy source and **is adopted** as the evidence record for this migration. It is titled "LaundryGo (런드리고 / 의식주컴퍼니) — Verification Notes (2026-06-11)".

Adoption is at the evidence level only. **No portable token and no structural classification was promoted from the sibling** (B1). Concretely, the sibling records the following facts that the legacy `DESIGN.md` never carried, and none of them entered `docs/design-md-weight/migrated/laundrygo/DESIGN.md`:

| Sibling-only fact | Where it lives | Portable body |
|---|---|---|
| H4 "일상에 여유와 가치를 더합니다." — `font-size: 35px`; `font-weight: 700`; `line-height: 35px`; white | Raw samples below | The 35px / 700 / 1.00 (35px) Statement role is the legacy §3 row, never this H4 string |
| H3 "모바일 세탁 & 수선 서비스 런드리고" — `font-size: 24px`; `font-weight: 600`; `line-height: 40px`; `color: rgb(0, 0, 0)` | Raw samples below | The 24px / 600 / 1.67 (40px) Card Title role is the legacy §3 row, never this H3 string |
| [/business/] H2 computed `font-size: 49px`; `line-height: 71px` | Raw samples below | `49px` and `71px` occur 0 times in the portable body |
| [/business/] CTA "문의하기" `font-size: 30px`; height 85px | Raw samples below | `30px` as a type size occurs 0 times in the portable body. `85px` occurs only as the legacy §8 emphasis-CTA height range `76–85px`, never as this sibling element measurement |
| Primary CTA computed padding `0px 40px 0px 37px` | Raw samples below | Portable padding is the legacy `0px 40px` |
| Nav sub-link height 32px | Raw samples below | `32px` occurs 0 times in the portable body |
| Full-DOM background and foreground colour frequency counts | Raw samples below | No frequency count appears in the portable body; the legacy document promoted these colours by role, not by count |
| Structural readings — that the CTAs are `A` elements; NinjaFirewall 403 on default UA, retry with Chrome UA + ko-KR | Raw samples and Proof note below | No heading-level or element classification was carried from the sibling into a body fact. YAML `type: button` is the legacy primitive, preserved as such (A1b) |
| Method detail: cookie/modal dismissal, full-page scroll to trigger lazy sections | Proof note below | Not a portable token |

## Evidence class

`tokens.source: live-extract`. Method, verbatim from the sibling:

> playwright getComputedStyle (live DOM) — global playwright (chromium, headless), browser UA + ko-KR locale, goto with `waitUntil: load`, cookie/modal dismissal, full-page scroll to trigger lazy sections, then `getComputedStyle` on body, h1–h4, nav links, buttons, filled/colored boxes, plus a full-DOM background/text color frequency scan. Two surfaces inspected.

The inspection covers computed colour, type, spacing, radius, border, and shadow on two surfaces. It records no transition property, animation name, duration, easing, or reduced-motion sample. That is why the portable Motion section keeps the source's durations, roles, and rules as a system-level statement with an adjacent qualifier, and drops the three curve values (see the Omission ledger).

The source's HTML comment states that token-level claims (§1–§9) are sourced from this live inspection, that voice samples (§10) are verbatim from the live site, that brand-narrative facts are corroborated via third-party coverage, that §13 figures are fictional archetypes, and that interpretive claims such as "laundry is infrastructure" and "trust over attention" are editorial readings.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | corporate brand site | https://www.laundrygo.com | 2026-06-11 |
| business | B2B hotel & business surface | https://www.laundrygo.com/business/ | 2026-06-11 |

## Sources

### Tier 1 (from the legacy footer, verbatim scope notes)

| URL | What it supplied |
|---|---|
| https://www.laundrygo.com | corporate brand site, live computed-style inspect — home / Vision / Business / Growth |
| https://www.laundrygo.com/business/ | 런드리고 호텔&비즈니스 B2B surface, live inspect |

### Tier 2 (none available)

- **getdesign.md/laundrygo** — NOT FOUND ("No designs found for 'laundrygo'"). KR brand, no Western-catalog coverage.
- **styles.refero.design/?q=laundrygo** — searched; no LaundryGo-specific style page returned (only the site's default curated carousel links resolved, none matching LaundryGo). Not listed.

→ Tier 2: none available. Tier 1 live inspect carries all token claims (KR policy per `spec/regional-sources.yaml`).

### Country sources (KR — brand-owned ≥2 requirement)

1. **https://www.laundrygo.com** — 의식주컴퍼니 / 런드리고 official corporate brand site (Tier 1 live-inspected; home + Vision/Business/Growth sections).
2. **https://www.laundrygo.com/business/** — 런드리고 호텔&비즈니스 official B2B service surface (second Tier 1 live-inspected page; brand-owned).
3. **https://www.laundrygo.com/wp-content/uploads/2022/12/favicon_web.png** — brand-owned favicon asset (logo render source).

Discovery aggregator used only to FIND brand-owned surfaces and to corroborate the 2022 rebrand narrative (NOT counted toward regional_min): design.co.kr/article/17584 (Design+ 매거진, "런드리고의 새로운 BI 시스템"), designcompass.org rebranding write-up.

Note from the sibling: getdesign.md / refero.design / Google favicon proxy are explicitly NOT counted toward the KR brand-owned requirement.

### Narrative sources (not interface tokens)

The legacy source comment names these classes for §11:

- Third-party corroboration of founding, launch, and 2022 rebrand: kyeongin.com, techm.kr, forbeskorea, sisajournal, and the Design+ rebrand write-up (design.co.kr/article/17584, designcompass.org). The source's §11 records the founder as a former corporate-comms professional. Verbatim: The values the system encodes: convenient, considerate service; reliability proven through laundry quality; and practicality.
- Mission/vision quotes ("세탁이 혁신되면 주거 공간이 혁신될 것", "삶을 단순하고 윤택하게") are widely reported public statements of the company/founder, not directly quoted from a verified first-party page in that capture. The same §11 paragraph records that the change to clothing-food-housing life begins with laundry. Verbatim: The vision extends globally — laundry being a universal problem, LaundryGo aims to grow into a global service.

## Raw samples (from the sibling)

Kept here because they are per-element evidence, not portable contract.

- body: `font-family: Pretendard, sans-serif`; `color: rgb(0, 0, 0)`; `font-size: 16px`; `line-height: 22.4px`; `background: rgb(255, 255, 255)`
- document.title: "런드리고 - 모바일 세탁 서비스"
- H2 hero "의식주 생활의 혁신을 만들어 갑니다." — Pretendard `font-size: 62px`; `font-weight: 600`; `line-height: 62px`; `color: rgb(255, 255, 255)` (white on dark image hero)
- H3 section "세탁 산업의 혁신을 시작으로 의식주 산업 전반의 문제를 찾고 해결합니다." — `font-size: 45px`; `font-weight: 600`; `line-height: 65px`; `color: rgb(255, 255, 255)`
- H4 "일상에 여유와 가치를 더합니다." — `font-size: 35px`; `font-weight: 700`; `line-height: 35px`; white
- eyebrow label H2 "Vision" / "Our Business" / "Growth" — `font-size: 18px`; `font-weight: 700`; `color: rgb(10, 194, 144)` (#0ac290 — brand green eyebrow)
- H3 "모바일 세탁 & 수선 서비스 런드리고" — `font-size: 24px`; `font-weight: 600`; `line-height: 40px`; `color: rgb(0, 0, 0)`
- primary CTA A "채용공고 보러가기" — `background-color: rgb(10, 194, 144)` (#0ac290); `color: rgb(255, 255, 255)`; `border-radius: 10px`; `padding: 0px 40px 0px 37px`; `font-size: 17px`; `font-weight: 700`; height 52px
- emphasis CTA A "B2B·대량세탁 문의" — `background-color: rgb(10, 194, 144)` (#0ac290); white text; `border-radius: 14px`; `font-size: 24px`; `font-weight: 700`; `box-shadow: rgba(0, 0, 0, 0.15) 0px 14px 29px 0px`; height 76px
- secondary/muted button A "웹사이트" — `background-color: rgb(223, 223, 223)` (#dfdfdf); `color: rgb(96, 100, 106)` (#60646a); `border-radius: 10px`; `padding: 15px 30px`; `font-size: 17px`; `font-weight: 500`; height 52px
- nav top-level link "회사소개"/"비즈니스"/"컬쳐"/"채용" — `color: rgb(0, 0, 0)`; `font-size: 17px`; `font-weight: 500`; Pretendard
- nav sub link "비전"/"성장"/"언론"/"런드리고" — `color: rgb(0, 0, 0)`; `font-size: 14px`; `font-weight: 400`; Pretendard; height 32px
- [/business/] H2 "국내 최대 호텔 전문 세탁 서비스, 런드리고 호텔&비즈니스" — `font-size: 49px`; `font-weight: 600`; `line-height: 71px`; white on dark hero
- [/business/] eyebrow "Infra"/"Quality" — `font-size: 18px`; `font-weight: 700`; `color: rgb(10, 194, 144)` (#0ac290)
- [/business/] CTA A "문의하기" — `background-color: rgb(10, 194, 144)` (#0ac290); white; `border-radius: 10px`; `font-size: 30px`; `font-weight: 700`; height 85px
- [/business/] CTA A "상담 문의하기" — `background-color: rgb(10, 194, 144)`; `border-radius: 14px`; `box-shadow: rgba(0,0,0,0.15) 0px 14px 29px`; height 76px
- top background colors (frequency scan, home): `rgb(255,255,255)` ×12, `rgb(223,223,223)` ×4 (#dfdfdf), `rgb(10,194,144)` ×2 (#0ac290 brand green), `rgb(1,112,185)` ×1 (#0170b9 blue accent), `rgb(24,27,30)` ×1 (#181b1e near-black), `rgb(236,235,220)` ×1 (#ecebdc warm-grey/beige), `rgb(248,249,250)` ×1 (#f8f9fa)
- top text colors (frequency scan, home): `rgb(0,0,0)` ×516, `rgb(255,255,255)` ×269, `rgb(1,112,185)` ×32 (#0170b9), `rgb(75,75,75)` ×30 (#4b4b4b), `rgb(136,140,142)` ×29 (#888c8e), `rgb(181,188,192)` ×17 (#b5bcc0), `rgb(96,100,106)` ×12 (#60646a), `rgb(10,194,144)` ×7 (#0ac290), `rgb(58,58,58)` ×2 (#3a3a3a)
- custom proprietary typeface "런드리고딕체" referenced in nav (brand's own typeface, developed in 2022 rebrand); web body/UI text renders in Pretendard

## Conflict matrix (from the sibling)

| Field | Tier 1 (live) | getdesign | refero | Resolution |
|---|---|---|---|---|
| Primary brand color | `#0ac290` green (CTA bg + eyebrow labels, both surfaces) | n/a (not found) | n/a (not listed) | `#0ac290` — live-inspect, consistent across home + /business/ |
| Body/UI font | Pretendard (web) | n/a | n/a | Pretendard for web body; "런드리고딕체" proprietary display typeface for logotype/brand (per 2022 rebrand) |
| Secondary color | warm-grey `#dfdfdf` muted button / `#ecebdc` beige surface | n/a | n/a | warm-grey ladder (matches documented "웜그레이" sub-color in rebrand press) |

No unresolved conflicts.

## Claim ledger

Every value below traces to `web/references/laundrygo/DESIGN.md`. "Source location" is the legacy section or YAML path.

| Claim | Source location | Portable destination |
|---|---|---|
| `tokens.colors.primary` / `on-primary` | YAML `tokens.colors`, §2 Primary | Foundations → Semantic color |
| `tokens.colors.blue-accent` | YAML `tokens.colors`, §2 Accent | Foundations → Semantic color |
| `tokens.colors.ink` / `ink-soft` / `body` / `muted` / `muted-alt` / `faint` | YAML `tokens.colors`, §2 Text Hierarchy; §2 Pure Black: Used directly (not a softened navy) for maximum-contrast headlines and body | Foundations → Semantic color (Pure Black Recorded use keeps the source writing) |
| `tokens.colors.canvas` / `surface` / `beige` / `hairline` / `near-black` | YAML `tokens.colors`, §2 Neutral & Surface | Foundations → Semantic color |
| `tokens.typography.family.display` / `.body` | YAML `tokens.typography.family`, §3 Font Family, §1 Pretendard as the de-facto Korean product font optimized for dense hangul legibility | Typography & Assets → Family |
| 9 type roles (size, weight, **unitless** lineHeight, use) + §3 Stat Block row | YAML `tokens.typography`, §3 Hierarchy table | Typography & Assets → Type roles (A1a: ratios 1.00 / 1.44 / 1.67 / 1.40 / 1.50 kept as ratios; the source's own px equivalents 62px / 65px / 35px / 40px / 23px / 18px / 22.4px kept beside them) |
| §3 Principles (large display, quiet body, green eyebrow rhythm, proprietary vs body split) | §3 Principles | Typography & Assets → Typography rules |
| `tokens.spacing` xs / sm / md / base / lg / xl / xxl / section | YAML `tokens.spacing`, §5 Spacing System | Foundations → Spacing (+ Layout & Platforms) |
| `tokens.rounded` sm / md / lg / full | YAML `tokens.rounded`, §5 Border Radius Scale | Foundations → Shape |
| `tokens.shadow.cta` | YAML `tokens.shadow`, §6 Drop | Foundations → Elevation (+ Components → Emphasis CTA) |
| `button-primary` (`type: button`) | YAML `tokens.components`, §4 Buttons | Components & States → Primary CTA |
| `button-emphasis` (`type: button`) | YAML `tokens.components`, §4 Buttons | Components & States → Emphasis CTA |
| `button-muted` (`type: button`) | YAML `tokens.components`, §4 Buttons | Components & States → Muted / Neutral Button |
| `nav-link` (`type: tab`, active variant) | YAML `tokens.components`, §4 Navigation | Components & States → Nav Link |
| `eyebrow-badge` (`type: badge`) | YAML `tokens.components`, §4 Badges | Components & States → Green Eyebrow |
| `service-card` (`type: card`) | YAML `tokens.components`, §4 Cards | Components & States → Service Card |
| `stat-block` (`type: listItem`) | YAML `tokens.components`, §4 Stat Blocks | Components & States → Stat Block |
| §4 Inputs & Forms | §4 Inputs & Forms | Components & States → Inquiry Form Field |
| §4 Beige Surface | §4 Cards & Containers | Components & States → Beige Surface |
| §5 Grid & Container, Whitespace Philosophy | §5 | Layout & Platforms |
| §8 Breakpoints, Touch Targets, Collapsing Strategy, Image Behavior | §8 | Layout & Platforms → Responsive behavior |
| §14 nine state records with values and copy | §14 | Components & States → State record (+ per-component applicability reasons) |
| §15 durations 120 / 200 / 320ms, easing roles and uses, motion rules, reduced-motion, in-app G-arrow | §15 | Foundations → Motion |
| §10 tone table, forbidden register, three verbatim voice samples | §10 | Content & Locales |
| §11 founding, founder (former corporate-comms professional; ex-배민프레시 대표), launch, 런드렛 mechanism, 2022 rebrand, lettermark, "런드리고딕체", values the system encodes, global vision | §11 | Experience → Scope (fenced as brand narrative, with the source's own evidence-class split restated) |
| §12 five principles with UI implications | §12 | Experience → Principles |
| §7 Do rules / Don't rules | §7 | Experience → Application rules / Avoid |
| §1 Key Characteristics (8 items) | §1 | Experience → Distinctive traits |
| Footer **Verified** / Tier 1 / Tier 2 / Conflicts | §4 footer block | This file — Freshness, Sources, Conflict matrix |

## Derived editorial inventory

Sites in the portable `DESIGN.md` that carry an adjacent complete qualifier. Complete form used: "a derived editorial implementation inference from the verified surfaces; it is not LaundryGo-authored or a separately published UI specification." This is an index of the derived-reading sites, not a completeness claim. Portable `DESIGN.md` carries 22 complete B2a qualifications. This table is 22 data rows. Preamble sentences on this page are not portable qualifications.

| # | Portable location | Qualified reading |
|---|---|---|
| 1 | Experience Scope | Attaching color, type, geometry, and component values to the two inspected pages; keeping brand narrative separate from interface evidence; readings of the captured layer as calm, infrastructure-grade, or trustworthy-rather-than-hard-sell; and the reading that the site positions laundry as a logistics platform rather than a chore. The source's own closing note names "laundry is infrastructure" and "trust over attention" as editorial readings. |
| 2 | Primary tasks | The selection of three tasks, each tied to the source passage it rests on |
| 3 | Audience | Dropping the fictional archetypes rather than promoting them, carrying no demographic segment list, and the group-level restatement of three stakeholder groups the live surfaces independently establish |
| 4 | Distinctive traits | The eight-item selection and the readings inside them (green rationed to eyebrows and CTAs, Pretendard versus "런드리고딕체" as a split of jobs, near-flat depth, cool-grey hierarchy) |
| 5 | Principles | The five items and each *UI implication*, including "laundry is infrastructure" and "trust over attention", which the source's closing note names as editorial |
| 6 | Application rules | The eight Do rules and the reasons attached to them |
| 7 | Avoid | The seven Don't rules and the reasons inside them |
| 8 | Foundations → Semantic color | Keeping canvas and on-primary as two roles that share the same white (`#ffffff` as canvas and as on-primary, and as headline/CTA text on dark bands, unmerged); keeping Ink as both the Primary Pure Black row and the Text Hierarchy Ink row; keeping Hairline unmerged from the muted-button fill; keeping the primary green unmerged from eyebrow text; and naming those roles here rather than as published LaundryGo role names |
| 9 | Foundations → Spacing | Keeping the YAML scale unitless beside the source's own captured-px list, and not treating a spacing step as muted-button padding or as a type size |
| 10 | Foundations → Shape | Reading 10px / 14px / ~20px as local component defaults recorded on the two web surfaces rather than a claim that every LaundryGo surface shares that scale |
| 11 | Foundations → Elevation | Reading the remaining separation (bands, `#ecebdc`, hairlines) plus one emphasis-CTA drop as a near-flat system that reaches for green or a dark band rather than decorative elevation |
| 12 | Foundations → Motion | The durations, easing roles, the omission of the three curve values, motion rules, and signature-motion note themselves, which sit outside the live-inspection attribution |
| 13 | Typography & Assets → Font evidence | Resolving the proprietary display face as official-product-use history rather than a live webfont token, resolving Pretendard as live computed surface-use, recording no LaundryGo-hosted FontFace files for that proprietary face, and placing a live specimen of it plus the in-app G-arrow rotation outside these captures |
| 14 | Typography & Assets → Family | Reading computed visible use as the reason Pretendard is canonical on the two captured web surfaces, and refusing to replace unobserved "런드리고딕체" with Pretendard or to swap the two families |
| 15 | Typography & Assets → Type roles | Keeping YAML unitless line-height ratios beside the source's own px equivalents, and keeping each YAML use string beside the hierarchy-table note without replacing either |
| 16 | Typography & Assets → Typography rules | Reading the measured metrics as the source's four typography principles |
| 17 | Typography & Assets → Assets | Reading the G-with-arrow lettermark as a 2022-rebrand brand-asset fact rather than a live-computed marketing-page token, and refusing to replace first-party photographic bands with invented brand-color decoration |
| 18 | Components & States → How to read this section | Every interactive-kind verdict, every applicability verdict, and the reason given for either, including keeping each YAML `use` string as a Token-set use row beside Role, and keeping YAML font and padding byte forms beside the §4 writings |
| 19 | Components & States → State record | Keeping the source's §14 state contract here as preservation of that body, not as an app-surface capture |
| 20 | Layout & Platforms | The "breathing room over density" reading, band-based segmentation as the alternative to heavy borders, and rationed green as "the brand / the action" |
| 21 | Layout & Platforms → Responsive behavior | Reading the breakpoint table as a declared layout contract rather than a live cross-viewport capture |
| 22 | Content & Locales | The voice characterization ("confident, mission-framed, and reassuring"), the hero-as-declarative-and-calm reading, and the tone table |

Evidence-class boundary sentences in the portable body (a different class from the qualifier above, listed separately so the two are not conflated):

- Scope — the narrative's three evidence classes are separated in the body: live-verified copy on the two pages; publicly documented company/rebrand facts corroborated from third-party coverage; and widely reported mission/vision lines not quoted from a verified first-party page in this capture.
- Scope — the narrative supplies product context and does not by itself supply interface tokens.
- Foundations → Semantic color — the 2022-rebrand note on `#0ac290` and `#ecebdc` is the source's attribution to published coverage, not a live-computed reason.
- Foundations → Motion — the source attributes its token-level claims to a live inspection of computed colour, type, spacing, radius, border, and shadow; the motion contract sits outside that attribution.
- Content & Locales — the Korean strings are the labels and the English beside them is a reading aid; reproduce them byte-exact.

## Omission ledger

| Item | Status |
|---|---|
| Three easing curve values from §15 — `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)`, `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)`, `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)` | Removed from the portable body, retained verbatim in this row. The sibling records no transition, animation, duration, or easing sample on either surface, so no LaundryGo evidence attaches to a curve. `ease-exit` is additionally the example curve carried by the 0.1 format's own section template (`spec/omd-v0.1.md` 265–268), which that file now labels a non-brand implementation default and forbids moving into a reference DESIGN.md. The three easing roles, their uses, and the promotion condition stay in the portable Motion section. |
| §15 role labels `ease-enter` / `ease-exit` / `ease-standard` and their uses | Kept in the portable body. Only the curve values were dropped. |
| §15 durations `motion-fast` 120ms / `motion-standard` 200ms / `motion-slow` 320ms | Kept in the portable body with an adjacent evidence-class qualifier. The rulebook's easing scope is unsourced curves only; durations vary by brand and are not treated as boilerplate. |
| Hover, press, focus scale/opacity, disabled-opacity, and skeleton-pulse values | Unresolved. §15 assigns hover / button press / focus to `motion-fast` and says CTAs respond to press with a subtle scale/opacity shift; §14 states that green actions fade and skeleton blocks use a flat pulse — none of these carries a colour, opacity, scale, or duration value. Named in Governance without values. |
| §13 Personas — 3 fictional archetypes (names, ages, cities, and biographies) | Deleted. The source's own §13 header and its closing comment both label them fictional archetypes whose names are illustrative and do not refer to real people. Not promoted into the portable body, and not re-listed here as identifiers (D2a). Experience `Audience` carries only the stakeholder groups the live surfaces independently establish. |
| §9 Agent Prompt Guide — Quick Color Reference, Example Component Prompts, Iteration Guide | Deleted as tool-facing packaging. Every value in it already exists elsewhere in the source. No unique renderable detail was found only in §9 (A3: nothing to move). |
| Sibling-only element measurements (`49px`, `71px`, `30px` type size, padding `0px 40px 0px 37px`, nav sub height `32px`) and DOM frequency counts | Held here as evidence. Not promoted into the portable body — the sibling is adopted as evidence, not as a token source. `85px` occurs in the portable body only as the legacy §8 range `76–85px`. |
| Sibling-only published labels "일상에 여유와 가치를 더합니다.", "모바일 세탁 & 수선 서비스 런드리고" | Held here byte-exact in Raw samples. They are sibling captures rather than legacy body values, so they stay at the evidence level rather than entering the portable contract. |
| Sibling-only structural readings (CTA elements as `A`, NinjaFirewall 403 / UA retry) | Held here as evidence. No sibling classification was carried into a body fact; the portable body uses the legacy document's own primitive types (B1). |

## Notes on evidence separation

- The corporate site (`laundrygo.com`) and the B2B surface (`laundrygo.com/business/`) are related first-party web surfaces inspected together. Values that the source records as shared (green `#0ac290`, Pretendard, 10px/14px radii, emphasis-CTA shadow) stay shared. Sibling-only measurements that appear on one surface only (49px / 71px business hero, 30px / 85px "문의하기") stay in this file.
- The Korean strings are the published labels. Every one the legacy document itself carries is preserved byte-exact in the portable body with an English reading aid beside it when the source supplied one, never in place of it (A5).
- §11's three evidence classes — live-verified copy, third-party-corroborated company/rebrand facts, and widely reported mission lines not quoted from a first-party page in this capture — are preserved as three classes in the portable Scope rather than flattened into one verified-fact voice.
- The legacy source comment's list of interpretive claims ("laundry is infrastructure", "trust over attention") is the source's own editorial marking. Each is qualified adjacently in the portable body at the section where it appears.
