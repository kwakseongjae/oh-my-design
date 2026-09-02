# Kyobo Book Centre provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the Kyobo Book Centre migration. Canonical source remains `web/references/kyobobook/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | kyobobook |
| name | Kyobo Book Centre |
| display_name_kr | 교보문고 |
| country | KR |
| category | ecommerce |
| homepage | https://www.kyobobook.co.kr |
| primary_color | `#5055b1` |
| logo | `type: favicon`, `slug: https://contents.kyobobook.co.kr/resources/fo/images/common/ink/favicon/favicon_256x256.png` |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-26 |
| components_harvested | true |

Token note from the source, quoted in full:

> primary = KDS blue 700 #5055b1 (documented UI base color + live 바로구매 buy-now CTA); green 700 #4dac27 is the heritage Kyobo bird-logo green, used as the positive/success accent. Storefront runs Pretendard; the main portal + design-system site run NotoSansKR.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-26 |
| added | 2026-06-26 |
| tokens.extracted | 2026-06-26 |
| surfaces inspected | 2026-06-26 |
| Tier 2 attempts | 2026-06-26 |

Conflicts unresolved: none (the source's footer states this explicitly).

Verified line from the source footer: **Verified:** 2026-06-26 (omd:add-reference CREATE — Tier 1 live inspect, 4 brand-owned surfaces).

## Sibling verification file (E2)

`web/references/kyobobook/.verification.md` exists (dotfile; confirmed with a direct path check, not a glob that hides dotfiles) and was read in full. `design-md/kyobobook/.verification.md` is a same-size copy. The `web/references/` file is adopted as **evidence grade only**: no value in it was promoted into the portable body that the legacy `DESIGN.md` did not already establish, and no structural classification from it (element roles, frequency ranks, selector names, the `product.kyobobook.co.kr` redirect, company-site `Spoqa Han Sans`) was promoted into a portable body fact.

- **Inspected:** 2026-06-26
- **Method (verbatim):** playwright getComputedStyle (live DOM) — global playwright (chromium, headless), ko-KR locale + realistic Chrome UA, goto with `waitUntil: domcontentloaded`, cookie/modal dismissal pass, then `getComputedStyle` on body, h1/h2/h3, buttons, links, inputs, tabs, plus a full-DOM background/text/border color-frequency scan. Four brand-owned surfaces inspected.
- **Raw samples:** 21 records below.

Token comparison: the sibling introduces computed rgb corroboration of hexes the legacy file already carries, plus a small sibling-only set that stays here and is not a portable-body fact: search-input height `46px` (source component is `48px`), search-button `border-radius: 24px 0px 0px 24px`, view-toggle labels `리스트형/섬네일`, company body `Spoqa Han Sans` / `#222222` / H2 `39px`, document titles, KDS H1s `Button`/`Input`/`Chip`/`Tab`, the `product.kyobobook.co.kr` redirect path, and the sibling-only heading-level classification `portal H2`.

## Evidence class

| Domain | Surface | What it establishes | What it does not establish |
|---|---|---|---|
| Portal | `https://www.kyobobook.co.kr` | NotoSansKR, neutral chassis, integrated search geometry, promo-nav green, utility-link grey | Storefront button fills; KDS swatch table as a substitute for live portal values |
| Storefront | `https://store.kyobobook.co.kr/bestseller/online/weekly` | Pretendard, 바로구매 `#5055b1`, 장바구니 `#767676`, sale `#c71e24`, green text `#278203`, category tabs, view toggle | Portal typeface; KDS Hottracks/error reds as listing colors |
| Published design system | `https://design.kyobobook.co.kr` | KDS Foundation/Color tokens, Button/Input/Chip/Tab, Voice, Empty Page, mission line | Storefront sale red; Pretendard as a KDS family |
| Narrative | `https://company.kyobobook.co.kr` plus source §11 | Motto, founding, 광화문글판, sam, 핫트랙스, mission | Interface tokens |
| Motion | — | Nothing. No transition, animation, duration, or easing observation appears in the sibling's method or raw samples | Any exact curve value |

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| portal | product-surface | https://www.kyobobook.co.kr | 2026-06-26 |
| storefront | storefront | https://store.kyobobook.co.kr/bestseller/online/weekly | 2026-06-26 |
| kds | published-design-system | https://design.kyobobook.co.kr | 2026-06-26 |
| company | corporate | https://company.kyobobook.co.kr | 2026-06-26 |

## Sources

### Tier 1 (from the legacy footer)

- https://www.kyobobook.co.kr — portal, NotoSansKR, neutral chassis, integrated search bar
- https://store.kyobobook.co.kr/bestseller/online/weekly — storefront, Pretendard, 바로구매 `#5055b1` / 장바구니 `#767676` / sale `#c71e24` / green `#278203`
- https://design.kyobobook.co.kr — official Kyobobook Design System (KDS): Foundation/Color, Component (Button/Input/Chip/Tab), Voice
- https://company.kyobobook.co.kr — corporate site: mission and core values

### Tier 2 (no usable record)

- `getdesign.md/kyobobook` — not listed (404)
- `styles.refero.design` — no Kyobo match on name search

### Narrative (not interface tokens)

The source's §1 names Kyobo Book Centre as Korea's largest and oldest book retailer. The source's §11 narrative names the 1980-06-01 Gwanghwamun opening, founder 신용호 (Shin Yong-ho) and 교보생명, the founding instruction that the store was conceived not as a profit center but as a cultural institution that should welcome everyone, including those who came only to read and not to buy, the motto "사람은 책을 만들고 책은 사람을 만든다", 광화문글판 since 1991, growth into Korea's largest bookstore chain, sam, and 핫트랙스 (Hot Tracks). The source's own closing note records specific founding details beyond the live sites as widely documented public facts rather than as quotations from a verified Kyobo statement in that turn.

KDS mission (https://design.kyobobook.co.kr): "사용자 경험을 가치있게, 고객의 삶을 흥미롭게".

Company core values (https://company.kyobobook.co.kr), recorded in the source closing note and not in the visible §11 body: 도전과 창의 / 고객중심 / 정직과 성실.

## Raw samples (from the sibling)

| # | Surface | Element | Recorded values |
|---:|---|---|---|
| 1 | portal | body | `font-family: NotoSansKR`; `color: rgb(0, 0, 0)` (#000000); `font-size: 16px`; `line-height: 24px` |
| 2 | portal | H2 "오늘의 선택" | `font-size: 24px`; `font-weight: 700`; `color: rgb(0, 0, 0)` |
| 3 | portal | integrated search button | `border-radius: 24px 0px 0px 24px`; `padding: 13px 0px 13px 24px`; height 48px; `font-size: 14px` |
| 4 | portal | search input | `padding: 13px 16px`; height 46px; `font-size: 14px`; `color: rgb(0, 0, 0)` |
| 5 | portal | utility link "로그인"/"회원가입" | `color: rgb(89, 89, 89)` (#595959); `font-size: 12px` |
| 6 | portal | promo nav "상반기결산"/"주말특가" | `color: rgb(25, 88, 0)` (#195800); `font-size: 16px`; `font-weight: 700` |
| 7 | portal | bg frequency | `rgb(242,242,242)` ×270 (#f2f2f2), `rgb(247,247,247)` ×14 (#f7f7f7), `rgb(234,234,234)` ×10 (#eaeaea), `rgb(213,213,213)` ×9 (#d5d5d5), `rgb(77,172,39)` ×3 (#4dac27) |
| 8 | portal | border frequency | `rgb(234,234,234)` ×141 (#eaeaea), `rgb(213,213,213)` ×7 (#d5d5d5), `rgb(204,204,204)` ×2 (#cccccc) |
| 9 | storefront | body | `font-family: Pretendard`; `color: rgb(0, 0, 0)`; `font-size: 16px`; `line-height: 24px` |
| 10 | storefront | "바로구매" | `background-color: rgb(80, 85, 177)` (#5055b1); `color: rgb(255, 255, 255)`; `border-radius: 8px`; `padding: 9px 14px`; height 38px; `font-size: 14px / 500` |
| 11 | storefront | "장바구니" | `background-color: rgb(118, 118, 118)` (#767676); `color: rgb(255, 255, 255)`; `border-radius: 8px`; `padding: 9px 14px`; height 38px; `font-size: 14px / 500` |
| 12 | storefront | category tabs "국내도서/외국도서/eBook" | inactive `color: rgb(118, 118, 118)` (#767676); `font-size: 16px`; `padding: 0px 14px`; height 42px |
| 13 | storefront | view toggle "리스트형/섬네일" | `background-color: rgb(255, 255, 255)`; `border: 1px solid rgb(204, 204, 204)` (#cccccc); `border-radius: 4px 0 0 4px` / `0 4px 4px 0`; height 38px |
| 14 | storefront | text frequency | `rgb(0,0,0)` ×1921, `rgb(118,118,118)` ×442 (#767676), `rgb(89,89,89)` ×191 (#595959), `rgb(71,76,152)` ×55 (#474c98), `rgb(49,79,185)` ×30 (#314fb9), `rgb(39,130,3)` ×20 (#278203), `rgb(199,30,36)` ×16 (#c71e24) |
| 15 | storefront | active-tab/buy border frequency | `rgb(80,85,177)` ×21 (#5055b1); light indigo surface `rgb(237,237,247)` (#ededf7) ×15 |
| 16 | KDS | Foundation/Color tokens (verbatim swatches + table) | `blue #5055B1` (UI 기본컬러, Informative/Accent), `green #4DAC27` (Positive/Accent), `red #DA2128` (Hottracks primary), `red #EC1F2D` (Negative); swatch element bgs measured `rgb(80,85,177)`, `rgb(77,172,39)`, `rgb(218,33,40)`, `rgb(236,31,45)` |
| 17 | KDS | H1 "Button"/"Input"/"Chip"/"Tab" | `font-size: 40px`; `font-weight: 900`; `color: rgb(0, 0, 0)` |
| 18 | KDS | "Do" / "Don't" labels | "Do" `color: rgb(60,154,23)` (green family); "Don't" `color: rgb(236,31,45)` (#ec1f2d) |
| 19 | company | body / H2 "교보문고인의 핵심가치" | `font-family: "Spoqa Han Sans"`; `color: rgb(34, 34, 34)`; H2 `font-size: 39px`; `font-weight: 700` |
| 20 | portal / storefront / KDS | box-shadow | `none` across hero, nav, headings, buttons, cards |
| 21 | portal / storefront | document.title | see verbatim titles below |

document.title strings, verbatim, not table-escaped:

- 교보문고 | 대한민국 최고의 도서쇼핑몰
- 온라인 주간 베스트 | 전체 - 교보문고

## Source closing note (legacy HTML comment, sections 10–15)

The legacy file closes with a comment headed "OmD v0.1 Sources — Philosophy Layer (sections 10–15)". It records the same 2026-06-26 Tier 1 live inspect via playwright getComputedStyle on the four brand-owned surfaces, KDS Foundation/Color tokens (including uppercase `#5055B1` / `#4DAC27` / `#DA2128` / `#EC1F2D` and the verbatim warning "핫트랙스 red-700과 부정의 의미 red를 혼동하지 않도록 주의"), KDS Voice (구어체 해요체, five principles, eight tone attributes, CTA rule, Empty Page rule), the KDS mission, company core values, and then assigns an evidence class:

- Brand narrative (§11): widely documented public facts; specific founding details beyond the live sites are general public knowledge, not directly quoted from a verified Kyobo statement in that turn.
- Personas (§13) are fictional archetypes informed by publicly observable Kyobo user segments. Names are illustrative; they do not refer to real people.
- Interpretive claims (e.g., "content is the hero, chrome is neutral", "books carry the color") are editorial readings connecting Kyobo's observed design and stated KDS principles to its positioning, not directly sourced Kyobo statements.

These assignments drove the three dispositions that most changed the portable body: KDS Voice strings move as bytes, the personas are deleted, and every interpretive sentence carries an adjacent qualification.

## Conflict matrix (from the sibling)

| Field | Tier 1 (live, 2026-06-26) | Tier 2 getdesign.md | Tier 2 refero | Resolution |
|---|---|---|---|---|
| Primary action color | `#5055b1` blue 700 = "UI 기본컬러" (KDS) + live 바로구매 bg | not listed (404) | no Kyobo match | Tier 1 — live + KDS-documented |
| Positive/brand green | `#4dac27` green 700 (KDS Positive) | not listed | no match | Tier 1 |
| Hottracks red vs error red | `#da2128` (Hottracks) vs `#ec1f2d` (negative) — KDS explicitly separates | not listed | no match | Tier 1 |
| Primary button geometry | radius 8px, 9px 14px padding, 38px height (live) | not listed | no match | Tier 1 |
| Search bar radius | 24px pill end (live) | not listed | no match | Tier 1 |
| Body typeface | NotoSansKR (portal) / Pretendard (storefront) | not listed | no match | Tier 1 — both retained, surface-split |

No conflicts: Tier 2 has zero coverage of this KR brand, so all values come from the four brand-owned Tier 1 surfaces (with the official KDS as the authoritative token source). Conflicts unresolved: none.

## Logo decision (from the sibling)

- Genuine brand CDN icon: `https://contents.kyobobook.co.kr/resources/fo/images/common/ink/favicon/favicon_256x256.png`, 256×256 PNG, 1876 bytes, HTTP 200 — the Kyobo green bird-and-tree mark.
- Google favicon is explicitly not counted toward the KR brand-owned requirement.
- The portable body carries this URL in Typography & Assets. This ledger repeats the identity pointer (E2a dual destination).

## Claim ledger

Every value below is claimed from the 2026-06-26 live inspection recorded in the sibling and from published KDS pages; the source's own footer attributes token-level claims to the same four surfaces.

| Claim | Domain / surface | Portable destination |
|---|---|---|
| `tokens.colors.primary` `#5055b1` | KDS + storefront | Foundations → Semantic color; Experience → Scope; Components → Buy Now |
| `tokens.colors.accent-indigo` `#474c98`, `indigo-tint` `#ededf7` | storefront | Foundations → Semantic color |
| `tokens.colors.link` `#314fb9` | storefront | Foundations → Semantic color |
| `tokens.colors.green` `#4dac27`, `green-dark` `#195800`, `green-text` `#278203` | KDS / portal / storefront | Foundations → Semantic color; Components → Positive Status badge |
| `tokens.colors.hottracks` `#da2128`, `negative` `#ec1f2d`, `sale` `#c71e24` | KDS / storefront | Foundations → Semantic color; Components → Sale Price badge |
| `tokens.colors.ink` `#000000`, `ink-soft` `#292929`, `body` `#595959`, `muted` `#767676` | portal / storefront | Foundations → Semantic color; Components → Add to Cart (`muted` fill) |
| `tokens.colors.canvas` `#ffffff`, `surface` `#f2f2f2`, `surface-alt` `#f7f7f7`, `hairline` `#eaeaea`, `border` `#d5d5d5`, `border-strong` `#cccccc` | portal / storefront / KDS | Foundations → Semantic color; Elevation |
| `tokens.typography.family.primary` `NotoSansKR`, `commerce` `Pretendard` | portal+KDS / storefront | Typography & Assets → Family |
| `tokens.typography` seven roles (size / weight / unitless lineHeight / use) | portal / storefront / KDS | Typography & Assets → Type roles |
| `tokens.spacing` 7 keys, verbatim `{ xs: 4, sm: 8, md: 14, base: 16, lg: 24, xl: 32, xxl: 48 }` | both commerce surfaces | Foundations → Spacing; Layout & Platforms |
| `tokens.rounded` 4 keys, verbatim `{ sm: 4, md: 8, lg: 24, full: 9999 }` | both commerce surfaces | Foundations → Shape |
| `tokens.shadow.none` `"none"` | portal / storefront / KDS | Foundations → Elevation |
| `tokens.components.button-primary` / `button-secondary` | storefront | Components → Buy Now, Add to Cart |
| `tokens.components.category-tab` / `view-toggle` | storefront | Components → Category Tab, View Toggle |
| `tokens.components.input-search` | portal | Components → Integrated Search |
| `tokens.components.card-product` | storefront | Components → Product Card |
| `tokens.components.badge-sale` / `badge-positive` | storefront | Components → Sale Price badge, Positive Status badge |
| Favicon URL | identity | Typography & Assets → Assets; this Identity table (E2a) |
| KDS Voice strings, motto, mission | KDS / company | Experience → Scope; Content & Locales |

## Token-block component strings (verbatim)

The legacy `tokens.components` block writes several values in a shorthand that differs from the same value in the source's own §4 body. The portable body carries the §4 body form; the token-block form is preserved here byte-for-byte so neither notation is lost.

| Component key | Verbatim token-block fields |
|---|---|
| `button-primary` | `type: button`, `bg: "#5055b1"`, `fg: "#ffffff"`, `radius: "8px"`, `height: "38px"`, `padding: "9px 14px"`, `font: "14px / 500 Pretendard"`, `use: "Primary purchase CTA (바로구매/구매하기); KDS Primary button, blue 700 UI base"` |
| `button-secondary` | `type: button`, `bg: "#767676"`, `fg: "#ffffff"`, `radius: "8px"`, `height: "38px"`, `padding: "9px 14px"`, `font: "14px / 500 Pretendard"`, `use: "Secondary action (장바구니/add-to-cart); KDS Secondary, neutral grey"` |
| `category-tab` | `type: tab`, `fg: "#767676"`, `active: "text #000000 + 2px bottom border #5055b1"`, `font: "16px / 400"`, `use: "Catalog category tabs (국내도서/외국도서/eBook)"` |
| `view-toggle` | `type: tab`, `bg: "#ffffff"`, `border: "1px solid #cccccc"`, `radius: "4px"`, `active: "border #5055b1"`, `use: "List / thumbnail view segmented toggle"` |
| `input-search` | `type: input`, `bg: "#ffffff"`, `fg: "#000000"`, `border: "1px solid #eaeaea"`, `radius: "24px"`, `height: "48px"`, `padding: "13px 16px"`, `use: "Header integrated search, pill-ended; focus blue #5055b1"` |
| `card-product` | `type: card`, `bg: "#ffffff"`, `border: "1px solid #eaeaea"`, `radius: "8px"`, `use: "Book / product card; flat, hairline-separated"` |
| `badge-sale` | `type: badge`, `fg: "#c71e24"`, `radius: "4px"`, `font: "12px / 700"`, `use: "Sale / discount-rate price label"` |
| `badge-positive` | `type: badge`, `fg: "#278203"`, `radius: "4px"`, `font: "12px / 500"`, `use: "Positive / in-stock status; green 700 family"` |

The typography token block uses the same shorthand: `display` `use: "Design-system / marketing display headline (Kyobobook Design System)"`, `heading` `use: "Section headings (오늘의 선택, 온라인 주간 베스트)"`, `subheading` `use: "Sub-section heads, DS nav labels"`, `body` `use: "Standard reading text"`, `body-sm` `use: "Dense UI text, nav, button labels"`, `caption` `use: "Metadata, utility links (로그인, 회원가입)"`, `nav-promo` `use: "Promo nav links in dark green (상반기결산, 주말특가)"`. YAML `body-sm.weight` is `400`; source §3 writes `400-500`.

## Derived editorial inventory

Sentences in the portable body that read a purpose, cause, or classification into a measurement, each carrying an adjacent derived editorial implementation inference qualification. 33 portable-body occurrences; 33 rows below. The source's own closing note flags this class: *"Interpretive claims (e.g., 'content is the hero, chrome is neutral', 'books carry the color') are editorial readings connecting Kyobo's observed design and stated KDS principles to its positioning, not directly sourced Kyobo statements."*

| Location | Interpretive content |
|---|---|
| Experience → Scope, first paragraph | Reading the four URLs as this contract's captured surfaces; keeping the company site as narrative rather than as a token surface; attaching every value to its domain |
| Experience → Scope, second paragraph | Characterizations "near-white / near-invisible chassis", "two-color brand story", "conservative geometry", "scanning long lists rather than hero-driven persuasion" |
| Experience → Scope, third paragraph | The refuses/embraces pairing; reading the digital product as mirroring the stores |
| Experience → Primary tasks, head | Selecting four jobs from the captured surfaces rather than from the persona section |
| Experience → Audience | Dropping fictional archetypes; reading the source's own publicly observable segment list as this product's audience |
| Experience → Distinctive traits, head | Groupings "two-color brand system", "content-first neutrality", "disciplined semantic reds" |
| Experience → Principles, head | Items 1, 4, and 7, and the UI implications that connect any of the seven to a treatment |
| Experience → Application rules, head | The justifications attached to the seven Do rules |
| Experience → Avoid, head | The reasons attached to the seven Don't rules |
| Foundations, section head | Explanatory clauses attached to recorded values — why a padding is compact, what a shadow is *for*, what a color rule protects; Motion qualified separately because it rests on no computed observation |
| Foundations → Semantic color, path-separation | Keeping each hex on its own key path rather than treating a shared numeral as the same token: `tokens.colors.canvas` `#ffffff` is not the white text on 바로구매; `tokens.colors.muted` `#767676` is not the 장바구니 fill written as a spacing step; sale is not negative and not Hottracks |
| Foundations → Spacing, path-separation | Keeping 14/16/24/48 on spacing keys rather than on padding, type, radius, or height |
| Foundations → Shape, path-separation | Keeping the four rounded steps as four keys, distinct from spacing and from control radii |
| Foundations → Elevation, closing | Reading the shadow measurements as a deliberate never-elevation emphasis strategy |
| Foundations → Motion, head | The whole motion contract — durations, easing roles, signature motions, motion rules |
| Foundations → Motion, easing-role omission | Treating the source's three curve values as untraceable and omitting them rather than promoting them as Kyobo motion tokens |
| Typography & Assets → Font evidence, head | Evidence-class application readings for NotoSansKR / Pretendard / KDS does not name Pretendard as a universal current family / no exclusive family / no serif |
| Typography & Assets → Family | Fallback prohibition and keeping the two families on their surfaces |
| Typography & Assets → Type roles, head | Keeping YAML `use` and §3 spellings on separate readings; refusing to flatten unitless ratios |
| Typography & Assets → Typography rules, head | What a weight or a family split is *for* |
| Typography & Assets → Assets | Classing the favicon URL as an identity pointer; book covers as first-party catalog content; "no shadow at any size" as consistent with the flat system |
| Components & States → How to read this section | Every interactive-kind verdict, every applicability verdict, and the reasons given; recorded search ring as generic focus, a different evidence type from `focus-visible` |
| Components → Buy Now | Reading 38px / 8px / 9px 14px as this control's geometry rather than YAML spacing/rounded steps |
| Components → Add to Cart | Reading 38px / 9px 14px / `#767676` as this paired secondary rather than as muted-text; shared 38px / `9px 14px` as alignment with Buy Now rather than as a spacing step |
| Components → Integrated Search | Reading 48px / 24px as this search record rather than spacing.xxl / rounded.lg |
| Components → Category Tab | Treating the tab as a grouping-select control, so loading/error/success are not-applicable on it |
| Components → View Toggle | Treating the toggle as a grouping-select control, so loading/error/success are not-applicable on it |
| Components → Product Card | Omitting kind and a state-applicability map rather than inventing them |
| Components → Sale Price badge | Treating the badge as a status marker rather than a control |
| Components → Positive Status badge | Treating the badge as a status marker rather than a control |
| Layout & Platforms → Whitespace | Grid "rather than elevation"; "Content over chrome", "flat segmentation", "scan-first rhythm" |
| Layout & Platforms → Responsive behavior | Treating §8 as source-stated intended behavior rather than a captured cross-viewport pass; book covers with no shadow at any size as consistent with the flat system |
| Content & Locales, opening | The English characterization of 해요체; 문어체 to convey stability and trust; tying one-fact-per-sentence to catalog density |

## Omission ledger

| Item | Disposition |
|---|---|
| §15 easing curve values — `cubic-bezier(0.2, 0.6, 0.25, 1)` (`ease-enter`), `cubic-bezier(0.4, 0.0, 1, 1)` (`ease-exit`), `cubic-bezier(0.25, 0.1, 0.25, 1)` (`ease-standard`) | Removed from the portable body as unsourced curves; kept here verbatim. The sibling's method and its raw samples record no transition, animation, duration, or easing observation, and `cubic-bezier(0.4, 0.0, 1, 1)` is the example value that `spec/omd-v0.1.md` carries and defines as a non-brand implementation default that must not be moved into a reference. The roles and their uses stay in the portable body. |
| §13 Personas — three fictional archetypes | Deleted. The source's own persona header and its closing note both state that the archetypes are fictional and that the names are illustrative. Biographies, ages, and cities are not re-hosted here (D2, D2a). The source's publicly observable segment list stays in Audience. |
| §9 Agent Prompt Guide — Quick Color Reference, four Example Component Prompts, six-step Iteration Guide | Deleted as tool-facing restatement. One value was unique to §9 and was restated rather than dropped: the product-card title/price pairing ("Title 16px Pretendard weight 400 in `#000000`, price in `#c71e24` 12px weight 700"), now on the Product Card record. |
| Legacy H1 `# Design System Inspiration of Kyobo Book Centre` | Replaced by the Core v2 identity line `# Kyobo Book Centre Design System`. |
| Legacy footer `**Verified:** … / Tier 1 / Tier 2 / Conflicts unresolved` | Moved to Freshness and Sources above. |
| Sibling-only observations (search input height 46px, search-button `24px 0px 0px 24px`, `리스트형/섬네일`, company `Spoqa Han Sans`, document titles, KDS page H1s, `product.kyobobook.co.kr` redirect) | Kept in Raw samples above. Not promoted into the portable body. |

## Notes on evidence separation

- Portal, storefront, and KDS are separate evidence domains. Every value in the portable body carries its domain. Sale red `#c71e24` is a storefront listing color, not a KDS Foundation/Color swatch; Hottracks `#da2128` and negative `#ec1f2d` are KDS swatches, not listing colors.
- KDS is a published first-party design system, so its color, button, input, and voice values are documented product tokens. That does not make the migration's own state-applicability and kind verdicts part of that documentation; the portable body says so at the head of Components & States.
- The sibling's frequency ranks, the `product.kyobobook.co.kr` redirect, company-site `Spoqa Han Sans`, and the 46px search-input height stayed in this file. None of them became a structural fact in the portable body.
- Motion has no evidence domain at all in this capture. Durations, easing roles, and motion rules are carried with an evidence qualification, and the exact curves are not carried.
