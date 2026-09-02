# PChome provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/pchome/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | pchome |
| name | PChome |
| country | TW |
| category | e-commerce |
| homepage | `https://www.pchome.com.tw` |
| primary_color | `#ea1717` |
| logo.type | favicon |
| logo.slug | `https://www.google.com/s2/favicons?domain=pchome.com.tw&sz=128` |
| omd format (source) | 0.1 |
| verified | 2026-06-08 |
| added | 2026-06-08 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-08 |
| components_harvested | true |

The homepage URL is dual-destination: identity metadata here, and the inspected portal surface in `DESIGN.md` §1. The primary color is dual: identity here, and Foundations PChome Red / the 24h price-CTA in `DESIGN.md`. The Google s2 favicon slug is dual: identity here, and a portable Assets classification in `DESIGN.md` §3. There is no `ds.name` / `ds.url` / `ds.type` field in the source frontmatter (A1c: the absence is recorded, not filled).

**Logo decision.** The catalog field is `logo.type: favicon` with a Google s2 proxy URL. That is an identity pointer, not a PChome-hosted brand file.

Token note from source, kept verbatim: `primary = live 24h price/accent red rgb(234,23,23) → #ea1717; portal hero CTA red #fe3b52 is a softer variant. Body text is #2b2b2b on a #f2f2f2 commerce canvas.`

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-08 |
| added | 2026-06-08 |
| tokens.extracted | 2026-06-08 |

The source footer records the verification verbatim as **Verified:** 2026-06-08 (omd-add-reference — Tier 1 live inspect, 2 surfaces). That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved: none stated in the source.

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| portal | portal home | `https://www.pchome.com.tw` | 2026-06-08 |
| shopping-24h | 24h shopping surface | `https://24h.pchome.com.tw` | 2026-06-08 |

### Tier 1 (as listed in the source footer)

- https://www.pchome.com.tw (portal home, live DOM getComputedStyle)
- https://24h.pchome.com.tw (24h shopping surface — price/CTA red `#ea1717`, `#f2f2f2` canvas, 8px cards confirmed live)

### Method (source footer)

playwright getComputedStyle on live DOM — body, headings, buttons, price nodes, and full color-frequency sweep across ~5000 elements.

### Sibling pointer

The source footer names `.verification.md` at `web/references/pchome/.verification.md`. Direct-path `find` on that file confirms it exists (dotfile; not visible to `ls` / `*`). This ledger records the sibling as a source, not as a portable fact. Sibling-only raw samples, structural classifications, and country-source URLs stay in that file; they are not adopted into `DESIGN.md` as interface tokens (B1).

## Token note

The YAML `tokens.source` value is `live-extract`. `components_harvested` is `true`. Six component records sit in the token set: `button-primary`, `button-soft`, `card`, `price-tag`, `badge-promo`, `tab-bar`.

## Byte-form notes

- YAML color keys are lowercase (`#ea1717`). Source §2 role labels use the same hexes. The portable body keeps the YAML keys beside the §2 role names.
- `tokens.colors.surface` and `tokens.colors.on-primary` are the same hex `#ffffff` on two keys. Both stay named.
- YAML line heights stay unitless ratios (`1.23`, `1.2`, `1.3`, `1.5`, `1.4`). Parenthetical rem figures are the source §3 spelling (A1a).
- `tokens.spacing.md: 12` is not a radius. `tokens.spacing.base: 16` is not `tokens.rounded.lg: 16` and not a type-role 16. `tokens.spacing.sm: 8` is not `tokens.rounded.md: 8`. `tokens.spacing.xs: 4` is not `tokens.rounded.sm: 4`. `tokens.spacing.lg: 24` is not Price Large `24`. `tokens.spacing.section: 64` is the YAML section step.
- `tokens.rounded.full: 9999` is not YAML `tokens.components.button-soft.radius` `9999` rewritten as the rounded step, and it is not the source §4 Soft / Portal CTA `8px`. All three writings stay.
- YAML `type` is attached only to the six records that have that key. Promo Tile, P幣 / Rebate Chip, In-Stock Chip, Navigation, and Countdown Timer keep `not in the token set`.
- Card price YAML weight is `600` beside the two-weight rhythm of 400 / 700.

## Omission ledger

| Omitted | Boundary | Reason |
|---|---|---|
| §13 fictional archetypes | whole fictional-biography class | The source labels its four entries as fictional archetypes informed by publicly observable PChome user segments, not individual people. They are not promoted to Audience or to `primary-tasks`, and they are not re-hosted here: no name, motivation, or affiliation classification is restated as an item (D2, D2a). Audience in the portable body keeps only the group-level wording the source records independently of those biographies: publicly observable PChome user segments (Taiwanese deal-hunting shoppers, 3C enthusiasts, household buyers, loyalty members); a deal-hunting shopper. |
| Unsourced motion curves | value boundary | Three unattributed cubic-bezier values omitted at the curve-value boundary: `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)`, `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)`, `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)`. `ease-exit` matches the catalog template in `spec/omd-v0.1.md`. Duration tokens 0ms / 150ms / 250ms / 400ms, the three easing role names and their uses, the four signature motions, and the reduced-motion contract stay in Foundations. |

## Claim ledger

| Claim | Surface |
|---|---|
| `tokens.colors.primary` `#ea1717` | 24h live extract (202 occurrences); `rgb(234,23,23)` |
| `tokens.colors.primary-soft` `#fe3b52` | portal hero CTA |
| `tokens.colors.primary-coral` `#fd7777` | secondary tags / sub-prices |
| `tokens.colors.canvas` `#f2f2f2` | 24h commerce canvas |
| `tokens.colors.surface` `#ffffff` | product cards, banner tiles |
| `tokens.colors.heading` `#000000` | headings, tab labels |
| `tokens.colors.body` `#2b2b2b` | body / product titles |
| `tokens.colors.body-muted` `#666666` | secondary descriptions |
| `tokens.colors.label-muted` `#969696` | captions, strike-through list prices |
| `tokens.colors.link` `#0090eb` | portal and 24h navigational links |
| `tokens.colors.link-deep` `#008ae0` | hover / visited link variant |
| `tokens.colors.navy` `#0e4f77` | header / dark-chrome |
| `tokens.colors.navy-deep` `#084567` | footers / immersive bars |
| `tokens.colors.success` `#0bb677` | in-stock / order-confirmed |
| `tokens.colors.amber` `#fed796` | P幣 rebate / warning chips |
| `tokens.colors.hairline` `#e5e5e5` | borders / dividers |
| `tokens.colors.on-primary` `#ffffff` | text on red CTAs and navy bars |
| `tokens.typography.family.sans` Noto Sans TC | live surfaces |
| `tokens.typography.family.display` Montserrat | Latin numerals / prices |
| `tokens.typography.family.fallback` Microsoft JhengHei | platform fallback |
| `tokens.typography.feature-title` through `caption` (size, weight, lineHeight, tracking, use) | YAML type roles; §3 Notes kept beside |
| Strike Price 14px / 400 / 1.4 / `#969696` line-through | source §3 only; no YAML typography key |
| `tokens.spacing.xs` through `section` | YAML spacing |
| `tokens.rounded.sm` / `md` / `lg` / `full` | YAML rounded |
| `tokens.shadow.ambient` / `card` / `elevated` | YAML shadow |
| `tokens.components.button-primary` through `tab-bar` (type and recorded fields) | YAML component records |
| Published strings 加入購物車 / 立即購買 / 結帳 / 每天一起變更好 / 購物車是空的 / 找不到符合的商品 / 已售完 / 折扣 / 限時 / 24h到貨 / P幣回饋 | source §4 / §9 / §10 / §14 |
| 1998 founding / Jan Hung-tze (詹宏志) / 網路家庭 / PChome magazine / PChome 24h購物 / 24-hour delivery identity / Shopee, Momo, Yahoo奇摩購物 / portal heritage / closing embrace-and-avoid sentence | source §11 narrative |

## Capture selectors

The source records no collector selectors. Component geometry is live-extract prose and YAML harvested fields, not a named `data-omd-capture` pointer.

## Proof notes

- Two named Tier 1 sources, recorded 2026-06-08. Portal and 24h shopping are the inspected surfaces.
- `components_harvested: true`; six component records in the source token set.
- The source records no `focus-visible` string. `tokens.colors.link-deep` `#008ae0` is Hover / visited on navigational links, not a color assigned to a `focus-visible` row. Uncaptured hover, pressed, focus, disabled, error, and success treatments are omitted as values unless the source writes them on that same control; they are not turned into `not-applicable` for that reason. Applicability follows control role. State coverage is not claimed complete.
- PChome has no published first-party UI specification in the source. Derived-editorial qualifications therefore close with the toss-form example: not PChome-authored or a separately published UI specification (rulebook v12 B2a 전제 주석).
- 1998 founding, Jan Hung-tze (詹宏志), 網路家庭, the PChome magazine origin, PChome 24h購物 and delivery within 24 hours across Taiwan, the Shopee / Momo / Yahoo奇摩購物 rivalry, the portal heritage of news, email, and services, and the source §11 closing sentence — "What PChome embraces: speed (24h delivery as identity), density (maximal shoppable surface), and value-signaling through red prices and stacked rebates. What it avoids: the sparse, one-product-per-screen aesthetic of Western DTC — in the Taiwanese market, abundance and visible savings build trust, not minimalism." — are source-stated narrative. They stay in Experience Scope as narrative context, not as interface tokens.

## §9 deletion check

§9 Agent Prompt Guide was deleted as tool-facing restatement. Each unique brand constraint it names was checked against the portable body before deletion (A2, A3):

| §9 item | Portable landing |
|---|---|
| Primary CTA / price `#ea1717`; portal hero `#fe3b52`; canvas `#f2f2f2`; card `#ffffff`; body `#2b2b2b`; muted `#666666` / `#969696`; link `#0090eb`; success `#0bb677`; amber `#fed796` | Foundations Semantic color |
| Product card: white `#ffffff`, 8px radius, shadow `rgba(0,0,0,0.1) 0px 2px 8px`; 16px `Noto Sans TC` weight 400 `#2b2b2b` title; 18px Montserrat weight 600 `#ea1717` price; `#969696` line-through list price; red promo badge 4px | Components Product Card + Price Tag + Promo Badge |
| Primary CTA `#ea1717`, white text, 16px weight 700, 4px radius, 8px 16px padding — labeled 加入購物車 (Add to cart) | Components Primary |
| Dense marketplace grid on `#f2f2f2`: 5-column product card grid, 16px gutters, full bleed; sticky white header with dominant centered search and `#0090eb` category links | Layout & Platforms + Components Navigation |
| Flash-deal section: red `#ea1717` band, white countdown digits at 18px Montserrat weight 700, `#ea1717` prices and 限時 promo flags | Components Countdown Timer |
| Red is price/CTA/promo; body `#2b2b2b` on `#f2f2f2`; cards `#ffffff`; Montserrat/Roboto numerals; weights 400 or 700; radius 4px buttons/badges, 8px cards; blue `#0090eb` = links only; density; red sale + `#969696` strike-through | Experience Application rules + Foundations + Typography |

## Derived editorial inventory

Portable `DESIGN.md` carries 33 complete B2a qualifications. This table is 33 data rows. Preamble sentences on this page are not portable qualifications.

| Location in DESIGN.md | Qualified reading |
|---|---|
| Experience Scope `:9` | Two inspected URLs as this contract's token surfaces; catalog homepage identity on `https://www.pchome.com.tw`; YAML token set kept `live-extract`; `rgb(234,23,23)` note and 202 / ~5000 counts kept on the 24h extract; every value attached to the surface or evidence class that established it |
| Experience Scope `:11` | Atmosphere characterizations (shoppable inventory as fast as possible; busy, urgent, transactional; digital department store; red as heartbeat; Western boutique contrast; thousand SKUs scannable; no whisper-weight; three levers; deal-hunting shopper) |
| Experience Scope `:13` | Founding-to-market narrative, including the closing embrace-and-avoid sentence, classified as context that does not by itself supply interface tokens |
| Primary tasks `:19` | Selecting the three surface-or-control outcomes as primary tasks; refusing the persona section |
| Audience `:28` | Dropping the four fictional-archetype biographies; carrying no name, age, city, motivation, or affiliation classification; reading source-named segment wording as audience |
| Distinctive traits `:32` | Classifying the list as a restatement of Key Characteristics; groupings and readings inside the list |
| Principles `:45` | Eight numbered items |
| Application rules `:58` | Do-list rules plus the §16 24h-delivery / P幣-rebate rule, and the reasons attached to them |
| Avoid `:73` | Don't-list prohibitions and the reasons inside them |
| Semantic color `:93` | Role-to-path pairing; `surface` unmerged from `on-primary`; 24h `#ea1717` unmerged from portal `#fe3b52`; `link` unmerged from `link-deep`; link-deep kept as Hover / visited rather than as `focus-visible` treatment; heading unmerged from body; `rgb(234,23,23)` kept as the live-extract note rather than as a second hex |
| Spacing `:128` | Keeping each numeral on its own key path rather than treating a shared numeral as the same token |
| Shape `:141` | Local radii on their components; `full: 9999` on its own key path beside Soft CTA YAML `9999` and §4 `8px`; tab `0px` on the tab bar |
| Elevation `:152` | Functional card-off-canvas lift rather than decorative depth; navy-tint elevated string unmerged from the two neutral shadows |
| Motion `:180` | Omitting three unsourced curves; keeping four duration rows as duration tokens rather than easing curves; keeping four signature motions including reduced-motion; holding the five-kind per-component promotion gate |
| Font evidence `:190` | Evidence-class sorting; YAML `sans` as the primary UI family rather than interchangeable with the fallback; YAML `display` Montserrat as the Latin/numeral companion rather than a second CJK UI face; fallback members as fallbacks; system-font substitution refused |
| Family `:205` | Fallback-and-reservation reading; Latin numeral face not mixed into CJK body copy |
| Type roles `:209` | YAML unitless line heights kept as ratios; YAML `use` strings beside §3 Notes; tracking `0` kept; Strike Price kept on its §3 row rather than inventing a YAML key |
| Type roles `:230` | Type sizes read as the roles named beside them rather than as spacing numerals, including YAML `22` beside §3 `22px` on Section Title; five type principles read as the source's own type rules rather than as a separately published type spec |
| Assets `:234` | Google s2 favicon as catalog identity pointer rather than a hosted brand file |
| Assets `:235` | Refusing to replace product-card imagery with invented brand-color decoration |
| Capture record `:255` | Role-based applicability procedure; interactive-kind and applicability verdicts and the reason for either; YAML `type` only on the six records that have that key; not a complete state-coverage claim |
| Primary (Buy / Add to Cart) `:268` | `8px 16px` / `4px` / 16px as this control's geometry rather than `tokens.spacing` `8` / `16` / `4` |
| Soft / Portal CTA `:290` | YAML `9999` unmerged from `tokens.rounded.full: 9999` and from §4 `8px`; `8px 20px` as this control's padding |
| Promo Tile `:312` | 93px / `0px 8px` / 8px as this tile's geometry rather than a spacing step |
| Product Card `:335` | 8px radius / 16px title as this card's geometry and type rather than `tokens.spacing` `8` / `16` |
| Price Tag `:358` | Hero 24px / 700 kept on this price-tag role rather than transferred onto Feature Title or Price Large |
| Tab Bar `:401` | 52px / `0px` as this control's geometry; YAML `fg` `#000000` kept beside the §4 active / inactive split |
| Navigation `:418` | Sticky header, centered search, mega-menu, and left-rail as this navigation anatomy rather than a second layout system; `#008ae0` as hover/visited rather than `focus-visible` treatment |
| Layout & Platforms `:442` | Source layout list as the layout contract for the inspected portal and 24h surfaces; §8 4–6 columns beside the §9 5-column example; 1024–1440px as the Desktop band rather than as a page-canvas size |
| Layout & Platforms `:489` | 93px / 52px / 8px padding / 28px/700 / 6 → 4 → 3 → 2 as the roles named beside them rather than as a single cross-viewport specification |
| Content & Locales `:494` | Brisk hypermarket-flyer register as this contract's voice rather than as a separately published microcopy guide |
| Content & Locales `:509` | Byte-exact Traditional Chinese strings; English gloss beside a line, never replacing it |
| Named gaps `:543` | List as unnamed values rather than as coverage of domains the source never named |
