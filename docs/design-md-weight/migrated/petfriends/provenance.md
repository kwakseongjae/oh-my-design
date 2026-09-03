# Pet Friends provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/petfriends/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | petfriends |
| name | Pet Friends |
| display_name_kr | 펫프렌즈 |
| country | KR |
| category | ecommerce |
| homepage | https://www.pet-friends.co.kr/ |
| primary_color | `#ff4081` |
| logo | `type: favicon`, slug `https://www.google.com/s2/favicons?domain=pet-friends.co.kr&sz=128` |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-07-02 |
| components_harvested | true |

The logo record is a third-party favicon-service URL (128px) rather than a Pet Friends-hosted asset file. It is held here as the catalog identity record and is not promoted into the portable Assets contract as a brand asset.

`tokens.note`, verbatim from the source frontmatter:

> primary = live vivid pink #ff4081 (Material Pink A400) used as emphasis type + solid action fills; deeper magenta #ea306f for sale copy; signal red #f33f46 for discount %. Charcoal ink #2d3035 for text. Near-flat/shadowless system — separation via tint + #e9ebec hairlines.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-02 |
| added | 2026-07-02 |
| tokens.extracted | 2026-07-02 |
| surfaces inspected | 2026-07-02 |

Source footer, verbatim: **Verified:** 2026-07-02 (omd:add-reference CREATE — Tier 1 live inspect, 3 surfaces). **Conflicts unresolved:** none.

## Sibling verification file (E2)

`web/references/petfriends/.verification.md` exists beside the legacy source and **is adopted** as the evidence record for this migration. The legacy `DESIGN.md` itself points at it — its closing source comment reads "Token-level claims (§1–9) are sourced from this live inspection; raw samples logged in web/references/petfriends/.verification.md."

Adoption is at the evidence level only. **No portable token was promoted from the sibling.** Concretely: the sibling records values the legacy `DESIGN.md` never carried as portable tokens — search padding `14.5px 44px 14.5px 16px` (source component is `15px 44px 15px 16px`), overlay padding `4.5px 8px` and sibling height `20px` (source component padding is `5px 8px`; portable overlay `20px` is the legacy radius, not that sibling height), secondary search input height `38px` / `font-size: 14px` / padding `8px 16px 8px 40px`, circular avatar background `rgb(249, 249, 249)` and height `40px`, body `color: rgb(0, 0, 0)`, the product H3 specimen string, keyword-pill labels that the legacy body does not already carry, and DOM frequency counts. Those sibling-only facts are recorded below as evidence; they are not portable-body promotions. Two strings that also appear in the portable body do so on a legacy or source-comment footing, not as sibling promotions: keyword-pill `18.5px` is cited in portable Shape as the source closing-comment spelling beside YAML/§4 `19px`; `체험단` is a live merchandising string already in the legacy body. Some of the numerals collide with unrelated legacy values and so appear in the portable body on their own legacy footing: `20px` is the search-field font size (legacy `input-search.font`) and the overlay radius, never the overlay's sibling height; `14px` is the Label and Body type roles, never the secondary search's sibling font-size; `8px` is `tokens.spacing.sm` / `tokens.rounded.md`, never the secondary search's sibling padding.

## Evidence class

`tokens.source: live-extract`. Method, verbatim from the sibling: playwright `getComputedStyle` (live DOM) — global playwright (chromium, headless), Chrome UA + `ko-KR` locale, goto `domcontentloaded` + settle, Escape/modal dismissal pass, then `getComputedStyle` on body, h1/h2/h3/strong, buttons, links, inputs, and a full-DOM background/text color-frequency scan. Three surfaces inspected (`www.pet-friends.co.kr` redirects to the `m.` mobile commerce app).

The inspection covers computed color, type, spacing, radius, border, and shadow on three surfaces. It records no transition property, animation name, duration, easing, or reduced-motion observation — which is why the portable Motion section keeps the source's durations and rules as a system-level statement and drops the curve values.

Source closing note, evidence-class split (not a portable token sheet): token-level claims (§1–9) are sourced from the live inspection; voice samples (§10) are verbatim from live surfaces; brand narrative (§11) marks the 2015 launch and broader founding details beyond the on-site "반려동물 1등 쇼핑몰" positioning as general public knowledge not independently re-verified from a first-party Pet Friends statement in that turn; personas (§13) are fictional archetypes; interpretive claims (e.g. "pink means love and action", "flat and fast as a rejection of cold marketplace chrome") are editorial readings, not directly sourced Pet Friends statements.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | mobile-commerce | https://www.pet-friends.co.kr/ → m.pet-friends.co.kr/main/tab/2 | 2026-07-02 |
| product-list | mobile-commerce | https://m.pet-friends.co.kr/main/product/list/16982 | 2026-07-02 |
| search | mobile-commerce | https://m.pet-friends.co.kr/search/result | 2026-07-02 |

## Sources

### Tier 1 (from the legacy footer)

- https://www.pet-friends.co.kr/ — homepage; redirects to the `m.` mobile commerce app; source for token claims
- https://m.pet-friends.co.kr/main/product/list/16982 — product-list surface
- Search surface recorded in the source closing comment and sibling: https://m.pet-friends.co.kr/search/result — supplied input + keyword-pill specs and voice samples

### Tier 2 (no usable record)

- getdesign.md/petfriends (0 files); also `getdesign.md/pet-friends` → same 0 files
- styles.refero.design/?q=petfriends (no genuine Pet Friends entry — returns generic default styles)

KR Tier-2 under-coverage confirmed — Tier 1 live inspect carries the proof (per `spec/regional-sources.yaml`).

### Country sources (KR — brand-owned, ≥2)

1. https://www.pet-friends.co.kr/ — official homepage (Tier 1 live-inspected; redirects to the m. mobile commerce app).
2. https://m.pet-friends.co.kr/main/product/list/16982 — official mobile commerce product-list surface.
3. https://m.pet-friends.co.kr/search/result — official search surface.

Note (additional brand-owned surface found but NOT cited as a primary source, sibling wording): `medium.com/petfriends-tech` — a Pet Friends tech-blog publication that exists (9 followers, 5 editors) but currently has no published stories, so there is nothing to inspect. getdesign.md / refero.design / Google favicon are explicitly NOT counted toward the KR brand-owned requirement.

## Raw samples (from the sibling)

Kept here because they are per-element evidence, not portable contract. Sub-pixel values are the computed numbers that the legacy document rounded before promoting them.

- body: `font-family: Lific, "Noto Sans KR", sans-serif`; `color: rgb(0, 0, 0)`
- section H2 "내새꾸 친구들에게 재구매율 89%…": `font-family: Lific`; `font-size: 18px`; `font-weight: 700`; `letter-spacing: -0.2px`; `color: rgb(45, 48, 53)` (`#2d3035`)
- emphasis `<b>` "재구매율 89%": `font-size: 18px`; `font-weight: 900`; `letter-spacing: -0.2px`; `color: rgb(255, 64, 129)` (`#ff4081`)
- product H3 "오리젠 독 오리지날 11.4kg": `font-size: 13px`; `font-weight: 400`; `line-height: 18px`; `letter-spacing: -0.2px`; `color: rgb(45, 48, 53)`
- discount `<strong>` "50%": `font-size: 16px`; `font-weight: 700`; `line-height: 22px`; `letter-spacing: -0.32px`; `color: rgb(243, 63, 70)` (`#f33f46`)
- label span "배송지 입력": `font-size: 14px`; `font-weight: 700`; `letter-spacing: -0.2px`; `color: rgb(45, 48, 53)`
- category chip "강아지" / "배송지 입력": `background-color: rgb(255, 241, 245)` (`#fff1f5`); `border-radius: 36px`; `padding: 4px 8px 4px 12px`; height 32px
- keyword pill "체험단"/"사료샘플"/"터키츄": `background-color: rgba(255, 170, 199, 0.5)` (solid `#ffaac7`); `color: rgb(255, 255, 255)`; `border-radius: 18.5px`; `padding: 3px 15px`; height 30px
- search input: `color: rgb(45, 48, 53)` (`#2d3035`); `border-radius: 6px`; `padding: 14.5px 44px 14.5px 16px`; `border` color `rgb(233, 235, 236)` (`#e9ebec`); height 52px; `font-size: 20px`; placeholder "어떤 상품을 찾으시나요?"
- secondary search input placeholder "어떤 상품을 찾고 있개?": `padding: 8px 16px 8px 40px`; height 38px; `font-size: 14px`
- product card: `background-color: rgb(248, 248, 248)` (`#f8f8f8`); `border-radius: 16px`; `box-shadow: none`
- carousel counter "2/14": `background-color: rgba(0, 0, 0, 0.1)` over media; `border-radius: 20px`; `padding: 4.5px 8px`; height 20px (image overlay tone `rgba(28,30,33,0.6)` = `#1c1e21`)
- circular avatar frame: `background-color: rgb(249, 249, 249)`; `border-radius: 50%`; height 40px
- product-list bg-frequency: `rgb(255, 64, 129)` `#ff4081` ×20 (solid pink action fills), `rgb(45, 48, 53)` ×20, `rgb(96, 120, 228)` `#6078e4` ×20 (promo accent), `rgb(250, 250, 250)` `#fafafa` ×20, `rgba(255, 170, 199, 0.5)` ×10
- homepage bg-frequency: `rgb(248, 248, 248)` `#f8f8f8` ×14, `rgba(255, 170, 199, 0.5)` ×10, `rgba(28, 30, 33, 0.6)` `#1c1e21` ×10, `rgb(255, 255, 255)` ×7, `rgb(255, 241, 245)` `#fff1f5` ×2, `rgb(255, 64, 129)` `#ff4081` ×2
- homepage text-color frequency: `rgb(255, 255, 255)` ×702, `rgb(0, 0, 0)` ×442, `rgb(45, 48, 53)` `#2d3035` ×142, `rgb(255, 64, 129)` `#ff4081` ×50, `rgb(156, 161, 170)` `#9ca1aa` ×47, `rgb(243, 63, 70)` `#f33f46` ×15, `rgb(234, 48, 111)` `#ea306f` ×9
- `box-shadow: none` across header chips, search input, and headings
- document.title: "반려동물 1등 쇼핑몰, 펫프렌즈"

## Conflict matrix (from the sibling)

| Field | Tier 1 (live) | getdesign | refero | Resolution |
|---|---|---|---|---|
| Primary color | `#ff4081` (emphasis type + solid action fills) | — (empty) | — (no entry) | Tier 1 |
| Body/heading text | `#2d3035` | — | — | Tier 1 |
| Discount signal | `#f33f46` | — | — | Tier 1 |
| Typeface | Lific / Noto Sans KR fallback | — | — | Tier 1 |
| Card radius | 16px | — | — | Tier 1 |
| Shadow | none (flat) | — | — | Tier 1 |

No conflicts — Tier 2 supplied no competing values for a Korean brand.

## Logo decision (from the sibling)

- Google favicon proxy `https://www.google.com/s2/favicons?domain=pet-friends.co.kr&sz=128` → HTTP 200, `image/png`, **3503 bytes** (above the 450B generic-globe threshold → genuine brand favicon). Chosen: `logo.type: favicon`, slug = the full proxy URL.
- `cdn.simpleicons.org/petfriends` → 404 (no Simple Icons entry). Apex `/favicon.ico` → 404.

## Claim ledger

Every value below traces to `web/references/petfriends/DESIGN.md`. "Source location" is the legacy section or YAML path.

| Claim | Source location | Portable destination |
|---|---|---|
| `tokens.colors.primary` / `primary-deep` / `discount` | YAML `tokens.colors`, §2 Primary + Commerce Signals | Foundations → Semantic color |
| `tokens.colors.ink` / `ink-pure` / `muted` | YAML `tokens.colors`, §2 Text | Foundations → Semantic color (text) |
| `tokens.colors.surface-pink` / `pink-soft` / `surface` / `surface-alt` / `hairline` / `overlay` / `canvas` / `on-primary` | YAML `tokens.colors`, §2 Surface & Neutral | Foundations → Semantic color (surface) |
| `tokens.colors.accent-blue` | YAML `tokens.colors`, §2 Accent | Foundations → Semantic color (accent) |
| `tokens.typography.family.brand` / `fallback` | YAML `tokens.typography.family`, §3 Font Family | Typography & Assets → Font evidence, Family |
| section-title / emphasis / discount / label / body / product-title (size, weight, unitless lineHeight, tracking, use) | YAML `tokens.typography`, §3 Hierarchy table | Typography & Assets → Type roles (ratios `1.30` / `1.38` preserved as ratios; rem and px spellings from §3 kept beside) |
| §3 Principles (bold pink emphasis, tight tracking, hangul-first, one warm family) | §3 Principles | Typography & Assets → Typography rules |
| `tokens.spacing` xs / sm / md / base / lg / gutter | YAML `tokens.spacing`, §5 Spacing System | Foundations → Spacing |
| `tokens.rounded` sm / md / lg / pill / full | YAML `tokens.rounded`, §5 Border Radius Scale | Foundations → Shape |
| `tokens.shadow.none` | YAML `tokens.shadow`, §6 | Foundations → Elevation |
| `chip-category` (`type: button`) | YAML `tokens.components`, §4 Buttons | Components & States → Category / Delivery Chip |
| `pill-keyword` (`type: badge`) | YAML `tokens.components`, §4 Badges | Components & States → Search-Keyword Pill |
| `input-search` (`type: input`) | YAML `tokens.components`, §4 Inputs | Components & States → Search Field |
| `card-product` (`type: card`) | YAML `tokens.components`, §4 Cards | Components & States → Product Card |
| `button-primary` (`type: button`) | YAML `tokens.components`, §4 Buttons | Components & States → Primary Action (Pink) |
| `badge-overlay` (`type: badge`) | YAML `tokens.components`, §4 Badges | Components & States → Image Counter Overlay |
| `avatar-round` (`type: avatar`) | YAML `tokens.components`, §4 Avatars | Components & States → Circular Avatar |
| §5 Grid & Container, Whitespace Philosophy | §5 | Layout & Platforms |
| §8 Breakpoints, Touch Targets, Collapsing Strategy, Image Behavior | §8 | Layout & Platforms → Responsive behavior |
| §14 nine state records with values and copy | §14 | Components & States → State record |
| §15 durations 120 / 220 / 320ms, easing roles and uses, motion rules, reduced-motion | §15 | Foundations → Motion |
| §10 tone table, forbidden register, four verbatim voice samples | §10 | Content & Locales |
| §11 2015 launch, 반려동물 1등 쇼핑몰, founding premise, same-day / dawn delivery, 집사님 / 내새꾸, 재구매율 89% / 심쿵 체험단 / 최저가 도전, refuses/embraces through "joyful and effortless" | §11 | Experience → Scope (fenced as brand narrative) |
| §12 five principles with UI implications | §12 | Experience → Principles |
| §7 Do rules / Don't rules | §7 | Experience → Application rules / Avoid |
| YAML identity (id, name, display_name_kr, country, category, homepage, primary_color, logo) | YAML frontmatter | this file Identity; name as H1; display_name_kr / homepage / primary_color also in portable Scope |

## Token-block component strings

| Component key | Verbatim token-block fields |
|---|---|
| `chip-category` | `type: button`, `bg: "#fff1f5"`, `fg: "#000000"`, `radius: "36px"`, `padding: "4px 8px 4px 12px"`, `height: "32px"`, `use: "Header category / delivery-address selector chip"` |
| `pill-keyword` | `type: badge`, `bg: "#ffaac7"`, `fg: "#ffffff"`, `radius: "19px"`, `padding: "3px 15px"`, `height: "30px"`, `use: "Trending search-keyword pill (rendered at 0.5 alpha over hero)"` |
| `input-search` | `type: input`, `bg: "#ffffff"`, `fg: "#2d3035"`, `border: "1px solid #e9ebec"`, `radius: "6px"`, `padding: "15px 44px 15px 16px"`, `height: "52px"`, `font: "20px / 500 Lific"`, `use: "Main product search field, placeholder 어떤 상품을 찾으시나요?"` |
| `card-product` | `type: card`, `bg: "#f8f8f8"`, `radius: "16px"`, `use: "Product image card surface in grids / carousels"` |
| `button-primary` | `type: button`, `bg: "#ff4081"`, `fg: "#ffffff"`, `font: "16px / 700 Lific"`, `use: "Primary brand action — solid pink fill (add-to-cart / buy)"` |
| `badge-overlay` | `type: badge`, `bg: "#1c1e21"`, `fg: "#ffffff"`, `radius: "20px"`, `padding: "5px 8px"`, `use: "Carousel index / image counter (rendered at 0.6 alpha)"` |
| `avatar-round` | `type: avatar`, `radius: "9999px"`, `use: "Circular avatar / icon frame (border-radius 50%)"` |

The typography token block uses the same shorthand: `section-title` `use: "Section headings (H2), Lific Bold"`, `emphasis` `use: "Emphasized phrase inside a heading, pink #ff4081"`, `discount` `use: "Discount percentage, signal red #f33f46"`, `label` `use: "Bold UI labels (delivery address, tabs)"`, `body` `use: "Standard reading text, Noto Sans KR fallback"`, `product-title` `use: "Product names in cards"`. YAML `section-title.lineHeight` is `1.30`; source §3 writes `~1.30`. YAML `label` has no lineHeight; source §3 writes `~1.48`. YAML `emphasis` has no lineHeight; source §3 writes `normal`.

## Derived editorial inventory

Portable `DESIGN.md` carries 28 complete B2a qualifications. This table is 28 data rows. Preamble sentences on this page are not portable qualifications. Complete form used: "a derived editorial implementation inference from the verified surfaces; it is not Pet Friends-authored or a separately published UI specification."

| Location in DESIGN.md | Qualified reading |
|---|---|
| Experience Scope ¶1 `:9` | Three inspected URLs as this contract's token surfaces; `www` → `m.` redirect as the source recorded it; YAML token set in the `live-extract` class; token-note roles on those hexes rather than as a second palette; values stay attached |
| Experience Scope ¶2 `:11` | Characterizations (friendly, high-energy commerce; bright and merchandising-forward rather than clinical; never a harsh pure black for reading copy; color as emotion; shout the deal, whisper the detail; friendly geometry; near-flat / shadowless; keeping the primary pink from being diluted by commerce noise) |
| Experience Scope ¶3 `:13` | Founding-to-design narrative, including the closing refuses/embraces sentence through "joyful and effortless", classified as context that does not by itself supply interface tokens |
| Primary tasks `:19` | Selecting the three surface-or-control outcomes as primary tasks; not from the persona section |
| Audience `:28` | Dropping the fictional biographies rather than promoting them; carrying no name, age, city, motivation, or affiliation classification; reading the source-named publicly observable segment as audience |
| Distinctive traits `:32` | Classifying the list as a restatement of Key Characteristics, and the groupings and the readings inside it |
| Principles `:45` | Five items and each *UI implication*; toss-form close; source closing-note interpretive class named |
| Application rules `:55` | Eight Do rules and the reasons attached to them |
| Avoid `:68` | Eight Don't prohibitions and the reasons inside them |
| Semantic color `:85` | Role names from the source's labels; canvas `#ffffff` off on-primary `#ffffff`; chip-label `#000000` off ink `#2d3035`; overlay `#1c1e21` off ink-pure `#000000`; roles attached to the recorded use |
| Spacing `:130` | Six YAML spacing keys unmerged; `lg: 16` off rounded `lg: 16` and off discount 16px; `base: 15` not a radius; `gutter: 44` not a page margin; `sm: 8` off rounded `md: 8`; `md: 12` off chip trailing 12px |
| Shape `:144` | Five rounded keys unmerged; `full: 9999` kept beside keyword-pill `19px`, `50%`, and the source-closing-comment `18.5px` as a third writing; §5 Full listing of keyword pills kept as a second writing |
| Elevation `:155` | Reading the flatness as keeping the commerce UI feeling fast, bright, and mobile-native |
| Motion `:159` | Durations and rules as a system-level statement rather than per-component measured values; motion contract outside the §1–9 live-inspect attribution |
| Motion curve omission `:177` | Treating the three curve values as untraceable and omitting them rather than promoting them as Pet Friends motion tokens |
| Motion rules `:181` | Six rules and their causal readings (friendly but quick; consistent with the bright, fast commerce feel; no heavy bounce that would slow browsing); durations / `motion-standard / ease-enter` / reduced-motion inside them recorded |
| Font evidence `:202` | Evidence-class sorting; refusing to present Noto Sans KR as the brand face |
| Family `:208` | Prohibition on replacing Lific with a system substitute; Noto Sans KR remains the recorded fallback, not a second display face |
| Type roles `:226` | YAML `use` beside the longer §3 spelling; unitless `1.30` / `1.38` as ratios; 20px search font off the type-role table; discount `16` off spacing `16` and rounded `16` |
| Typography rules `:230` | Reading the measured metrics as the source's four typography principles |
| Assets `:239` | Treating the Google favicon URL as an identity pointer rather than as a brand asset, leaving it out of the contract, and the rule that product photography on `#f8f8f8` must not be replaced with invented brand-color decoration |
| Capture / applicability `:246` | Every interactive-kind verdict, every applicability verdict, and the reason for either; YAML `Primitive type` only where the token set records that type; not a complete state-coverage claim; §14 as the source state contract rather than per-component computed observations; C4 open-question rather than a finding of inertness; chip YAML `#000000` beside live `#2d3035`; 20px search font off the type-role table; keyword-pill `19px` beside `full: 9999` / 50%; overlay `20px` as a component radius rather than a YAML rounded step |
| Layout whitespace `:390` | Density / flat segmentation / pill-rhythm characterization as the source's own whitespace sentences |
| Layout responsive `:404` | Breakpoint table, collapsing strategy, image behavior, and the touch-target reading "comfortably tappable" as source-stated intended behavior rather than as a captured cross-viewport pass |
| Content voice `:411` | Hangul-vs-English reading-aid rule; voice characterization; the tone table |
| Content placeholders `:413` | Keeping the YAML placeholder and the pun as two writings rather than rewriting the pun onto the 52px field |
| Forbidden register `:431` | The prohibition list (cold marketplace jargon, guilt-based pressure, undefined fine print, unbacked hype) as a derived voice constraint |
| Recorded unresolved decisions `:465` | List as unnamed values rather than as coverage of domains the source never named |

## Omission ledger

Mention (disposition) is not use (re-hosting). This table names what was dropped and where the drop is recorded. It does not re-list fictional demographics, and it does not assert portable-body absence in the same sentence that reprints a dropped string as if it were a surviving token.

| Item | Disposition |
|---|---|
| Three easing curve values from §15 — `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)`, `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)`, `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)` | Removed from the portable body, retained verbatim in this row. The source attributes its token-level claims to a live inspection that covers computed color, type, spacing, radius, border, and shadow; the sibling verification file records no transition, animation, duration, or easing sample. `cubic-bezier(0.4, 0.0, 1, 1)` is additionally the example curve carried by the 0.1 format's own section template (`spec/omd-v0.1.md` 267) rather than a Pet Friends measurement. The easing roles, their uses, and the promotion condition stay in the portable Motion section. |
| Press scale / opacity values | Unresolved. §15 states that pill chips respond to press with a subtle scale/opacity shift but attaches no value. Named in Governance without a value. |
| Search-keyword pill and product card interactive kind | Unresolved. The source attaches no action, target, or state to either, so neither kind nor a state-applicability map is declared. |
| §13 Personas — three fictional archetypes (name, age, city, biography) | Deleted. The source labels them fictional archetypes informed by publicly observable Pet Friends user segments. Not promoted, and deliberately not re-hosted here — no demographic segment list is kept in this file. Portable Audience uses only the source's own publicly observable segment wording. |
| §9 Agent Prompt Guide — Quick Color Reference, four Example Component Prompts, seven-step Iteration Guide | Deleted as tool-facing packaging. Unique renderable pairing from the product-card prompt (title 13px Lific weight 400 `#2d3035` + discount 16px weight 700 `#f33f46`) was moved onto the Product Card record (A3). Remaining hexes, radii, and placeholders already live in Foundations / Components. |
| Legacy H1 `# Design System Inspiration of Pet Friends` | Replaced by the Core v2 identity line `# Pet Friends Design System`. |
| Legacy footer `**Verified:** … / Tier 1 / Tier 2 / Conflicts unresolved` | Moved to Freshness and Sources above. |
| Sibling-only observations (search padding 14.5px, overlay 4.5px / sibling height 20px, secondary search 38px / sibling 14px, avatar `rgb(249, 249, 249)` / 40px, body `rgb(0,0,0)`, product H3 specimen string, keyword-pill labels the legacy body does not already carry, DOM frequency counts) | Kept in Raw samples above. Not promoted into the portable body as sibling facts. Keyword-pill `18.5px` in portable Shape is the source closing-comment spelling beside YAML/§4 `19px`, not a sibling promotion. |

## Proof notes

- No `verification_v2` block in the source frontmatter. Sibling is a 2026-07-02 live-inspect note, transcribed above.
- `components_harvested: true`
- `tokens.source: live-extract`
- Uncaptured hover / `focus-visible` treatments are omitted. They are not `not-applicable` solely for that reason. Applicability follows control meaning. State coverage is not claimed complete.
- B3 five-kind gate is in portable Foundations Motion in full text (transition properties, animation name, duration, easing, reduced-motion behavior, per-component observation).
- Official published DS lookups are negative (getdesign 0 files; refero no genuine entry). B2a uses the toss-form close, not a published-spec adaptation.
- Google favicon proxy is catalog identity, not a portable mark for derivative products.
- Same-hex role splits in the portable body, kept unmerged: `#ffffff` is `tokens.colors.canvas` and, separately, `tokens.colors.on-primary`; `#000000` is `tokens.colors.ink-pure` (hero headings and chip labels) and is not overlay `#1c1e21`; chip YAML `fg: "#000000"` is kept beside the live "배송지 입력" label specimen `#2d3035`.
