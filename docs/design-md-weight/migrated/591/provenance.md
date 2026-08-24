# 591 provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/591/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | 591 |
| name | 591 |
| country | TW |
| category | consumer-tech |
| homepage | https://www.591.com.tw/ |
| primary_color | `#ff8000` |
| logo | favicon `https://www.google.com/s2/favicons?domain=591.com.tw&sz=128` |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-22 |

The source YAML has no `ds` / `ds.type` field. Do not invent one.

Catalog `primary_color` `#ff8000` is multi-destination (E2a): this identity ledger; portable Scope token-note / visual-character / public-history headlines; Distinctive orange; Principles item 2; capture-bound; Foundations 591 Orange; Semantic listing-card ink not-badge-tag; Type roles Hero / Nav Tab / Search Button; Capture-record selected filter; Homepage Search CTA / Listing Search CTA / Active Property-type Tab Background; Nav Item active color; Property Feature Tag text. Avoid names the orange accent without this hex. Named gaps does not own this hex as a gap. Same hex as YAML `tokens.colors.primary`.

Catalog homepage `https://www.591.com.tw/` is this identity ledger + portable Experience Scope + Surfaces/Sources/Tier 1 (E2a). Rent listing `https://rent.591.com.tw/` is Surfaces/Sources/Tier 1 + portable Scope / Listing Search CTA / Listing Search Input (E2a).

Catalog logo metadata is a third-party Google s2 favicon lookup, not a captured first-party mark. Dual destination (E2a): this identity ledger and portable Typography & Assets identity-boundary sentence (URL string present in both).

Token note from source: primary = 591 orange (`#ff8000`) — search CTA, active tab, brand accent across all surfaces. Canvas white (`#ffffff`). Body text warm grey (`#4a4a4a`). Muted greys (`#999999`, `#666666`). Red price color (`#e60012`). Link blue (`#337ab7`). Tinted surfaces (`#f5f5f5`, `#f2f8ff`, `#fff7e6`). Dual destination (E2a): this ledger and portable Experience Scope (quoted note plus the register-split B2a).

YAML `tokens.components_harvested` is `true`. That harvest flag is recorded here only; it is not a portable component contract.

YAML `tokens.source` is `live-extract` (A1c) — provenance-only type/source field.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-22 |
| tokens.extracted | 2026-06-22 |
| live inspect (playwright getComputedStyle) | 2026-06-22 |

Footer metadata from the source: `Verified: 2026-06-22`. The source footer does not contain `(omd:migrate)`.

Conflicts unresolved: none.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | product-home | https://www.591.com.tw/ | 2026-06-22 |
| rent | rental-listing | https://rent.591.com.tw/ | 2026-06-22 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | https://www.591.com.tw/ | 2026-06-22 |
| rent-live | product-surface | https://rent.591.com.tw/ | 2026-06-22 |

### Tier 1

- https://www.591.com.tw/
- https://rent.591.com.tw/

### Tier 2 (no usable record)

- https://getdesign.md/591 (not found)
- https://styles.refero.design/?q=591 (not found)

### Narrative (not interface tokens)

Brand narrative in the source (Addcn Technology, 2001 founding, classified-board → marketplace evolution, 實價登錄 as mandated government price-transparency showing actual transaction prices rather than asking prices, and that data-trust layer as the product’s moat) is attributed there to publicly observable site content. No separate official-doc URL is named in the packet. Portable Scope keeps those facts under an adjacent public-history B2a as narrative, not interface tokens. Dual: portable Scope + this Narrative (E2a).

## Claim ledger

Claims follow YAML token names. Live inspect date for both surfaces: 2026-06-22.

| claim | surface |
|---|---|
| tokens.colors.primary | home |
| tokens.colors.canvas | home |
| tokens.colors.surface | home |
| tokens.colors.surface-blue | rent |
| tokens.colors.surface-warm | rent |
| tokens.colors.ink | home |
| tokens.colors.body | home |
| tokens.colors.muted | home |
| tokens.colors.muted-light | home |
| tokens.colors.on-primary | home |
| tokens.colors.price-red | rent |
| tokens.colors.link | home |
| tokens.colors.border | rent |
| tokens.colors.dark-overlay | home |
| tokens.typography.family.display / body | home |
| tokens.typography.hero-title.size / weight / use | home |
| tokens.typography.nav-tab.size / weight / lineHeight / use | home |
| tokens.typography.search-btn.size / weight / use | home |
| tokens.typography.body.size / weight / lineHeight / use | home |
| tokens.typography.body-lg.size / weight / lineHeight / use | rent |
| tokens.typography.price.size / weight / use | rent |
| tokens.typography.caption.size / weight / use | rent |
| tokens.spacing.xs / sm / md / base / lg / xl / xxl / section | home |
| tokens.rounded.sm / md / lg / full | home |
| tokens.shadow.none / card | rent |
| tokens.components.button-search.* | home |
| tokens.components.button-search-rent.* | rent |
| tokens.components.tab-active.* | home |
| tokens.components.tab-inactive.* | home |
| tokens.components.input-search.* | home |
| tokens.components.input-filter.* | rent |
| tokens.components.card-listing.* | rent |
| tokens.components.card-image.* | rent |
| tokens.components.badge-tag.* | rent |
| tokens.components.badge-price.* | rent |
| tokens.components.nav-item.* | home |

YAML typography `lineHeight` values are the unitless ratios `1.31` (nav-tab) and `1.5` (body, body-lg). Those ratios remain in portable Type roles. Homepage inspect line-height 21px at 14px is size-local and is not a replacement for ratio `1.5`.

YAML primitive types: `button` ×2 (`button-search`, `button-search-rent`), `tab` ×3 (`tab-active`, `tab-inactive`, `nav-item`), `input` ×2 (`input-search`, `input-filter`), `card` ×2 (`card-listing`, `card-image`), `badge` ×2 (`badge-tag`, `badge-price`). Body Secondary Text Button is an additional `Type: button` without a YAML row. Listing Search Input is an additional `Type: input` from the rent inspect, not YAML `input-search`. Featured Listing has no YAML `type`; none was invented.

Unmerged fields (A4):

- YAML `input-search` fg `#333333` vs homepage live search-input color `#999999`
- YAML `dark-overlay` `#262626` vs body §6 `rgba(0,0,0,0.8)`
- YAML `rounded.full` 9999 vs body circular nav arrows `50%`
- YAML `on-primary` `#ffffff` vs `canvas` `#ffffff` (shared hex, different role)
- YAML `card-listing` fg `#000000` vs body `#4a4a4a`
- YAML `nav-item` active text `#ff8000` vs filled hero tab bg `#ff8000` / text `#ffffff`
- Body Large 16px / 400 vs §9 listing-title 16px bold
- Price Red `#e60012` vs rent FG frequency `rgb(240,24,0)×130`
- Link Blue `#337ab7` vs rent FG frequency `rgb(80,120,179)×152`

## Capture record (live inspect, not data-omd-capture pointers)

The source records playwright `getComputedStyle` descriptions. It does not name `data-omd-capture` selectors. None were invented.

Homepage `www.591.com.tw`:

- Title: “591房屋交易網 | 租屋買屋實價登錄資訊平台”
- Body: font-family `Arial,微軟正黑體,"Microsoft JhengHei",sans-serif`; color `rgb(74,74,74)`=`#4a4a4a`; font-size 14px; line-height 21px
- Active tab 「租屋」: bg `rgb(255,128,0)`=`#ff8000`; color `rgb(255,255,255)`; radius 2px; 16px/700
- Inactive tabs: color `rgb(221,221,221)`=`#dddddd`; bg transparent; 16px/700
- Search button 「搜尋」: bg `rgb(255,128,0)`=`#ff8000`; color `rgb(255,255,255)`; 20px/700; height 55px; radius `0px 2px 2px 0px`
- Search input: bg `rgb(255,255,255)`; color `rgb(153,153,153)`=`#999999`; height 55px; radius 2px
- Hero H3 「立即與有興趣的屋主、經紀人、建商聯繫」: color `rgb(255,128,0)`; font-size 50px; font-weight 700
- Hero H3 「超過8萬筆租屋、32萬筆中古屋、5000筆新建案」: color `rgb(255,128,0)`; font-size 50px; font-weight 700
- BG freq top: `rgb(255,255,255)×45`, `rgb(0,0,0)×9`, `rgb(245,245,245)×9`, `rgb(38,38,38)×9`, `rgb(255,128,0)×5`, `rgb(22,158,113)×2`
- FG freq top: `rgb(153,153,153)×681`, `rgb(74,74,74)×628`, `rgb(255,255,255)×171`, `rgb(51,122,183)×141`, `rgb(51,51,51)×105`

`rent.591.com.tw`:

- Body: font-family `Arial,微軟正黑體,"Microsoft JhengHei"`; font-size 16px
- Search btn 「搜尋」: bg `rgb(255,128,0)`; color white; radius `0px 4px 4px 0px`; padding `5px 16px`; height 44px; 16px/400
- Secondary button 「社區找房」: bg `rgb(255,255,255)`; color `rgb(51,51,51)`; radius 4px; padding `5px 16px`; height 44px; 14px/400
- Nav active 「租屋」: color `rgb(255,128,0)`=`#ff8000`
- Input: bg `rgb(255,255,255)`; color `rgb(51,51,51)`; radius `4px 0 0 4px`; `0 0 0 16px` padding; height 44px
- Filter input: bg white; border `1px solid rgb(230,230,230)`=`#e6e6e6`; radius 2px; padding `4px 12px`; height 27px
- Listing card items: bg `rgb(255,255,255)`; radius 0px; shadow none
- BG freq: `rgb(255,255,255)×507`, `rgb(242,248,255)×152` (`#f2f8ff`), `rgba(0,0,0,0.8)×51`, `rgb(255,247,230)×22` (`#fff7e6`)
- FG freq: `rgb(0,0,0)×2742`, `rgb(51,51,51)×878`, `rgb(102,102,102)×283`, `rgb(255,255,255)×264`, `rgb(80,120,179)×152`, `rgb(240,24,0)×130`

Unpromoted frequency samples (not portable tokens): homepage BG `rgb(22,158,113)×2`; rent FG `rgb(80,120,179)×152` and `rgb(240,24,0)×130`. Triple destination (E2a): portable Semantic unmerged-role + Named gaps + this frequency ledger.

Voice samples are verbatim from the live homepage inspect (title, H3 elements). Title “591房屋交易網 | 租屋買屋實價登錄資訊平台” grep (E2a): portable Scope + Content Observed + this ledger — not Type roles Hero, not Primary tasks. The two H3s grep (E2a): portable Scope + Type roles Hero + Content Observed + this ledger — not Primary tasks.

## Curve omission ledger

Exact cubic-bezier values from source §15, omitted from portable Foundations (names kept):

- `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)`
- `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` — matches `spec/omd-v0.1.md` template example `ease-exit`

These are unattributed. Duration tokens (`100ms` / `200ms` / `300ms`), easing names, CSS keyword `linear` on `ease-linear`, “no spring / no bounce”, and `prefers-reduced-motion: reduce` remain in portable Motion. B3 five-kind per-component computed gate remains on curve / animation-name / transition-property promotion beyond those tables.

## Omitted §9 construction prompts

§9 Agent Prompt Guide example prompts and the numbered iteration list are deleted from the portable body (no adapter slot). Verified hexes and harvested geometry in that guide already live in Foundations / Components. Unique §9 listing-title anatomy (“property title in `#333333` 16px bold”) is portable Listing Row Card with adjacent complete B2a on unmerged Body Large 400 (E2a). Unique §9 Filter Label anatomy (`#666666` / 14px) is portable Type roles Filter Label, unmerged from YAML Body Large 16px / `#333333` and Filter Range Input 13px (E2a). Unique attached search-bar composition is portable Layout (E2a). Prompt wrappers stay omitted here as deleted tool prompts.

## Placeholder omission ledger

No `[FILL IN]` placeholders exist in the source; none are emitted.

## Proof notes

- tokens.source: `live-extract`; `components_harvested: true` preserved (A1c)
- Catalog Google favicon URL is dual: this identity ledger + portable Typography & Assets identity-boundary sentence (E2a)
- Homepage and rent URLs are dual Scope + this surfaces/Tier 1 ledger (E2a)
- `primary_color` `#ff8000` destinations: identity + Scope token-note / visual-character / public-history headlines + Distinctive + Principles item 2 + capture-bound + Foundations 591 Orange + Semantic listing-card not-badge-tag + Type roles Hero/Nav Tab/Search Button + Capture-record selected filter + Search CTAs / Active Tab Background + Nav Item active + Property Feature Tag text (E2a). Avoid does not carry this hex.
- Token note is dual-destination: Experience Scope + this ledger (E2a)
- YAML `1.31` / `1.5` remain in portable Type roles
- Interaction expansions are not named in the source. Capture absence is not a `not-applicable` reason. Homepage/Listing Search CTA loading and error are applicable (search-request role); success is omitted (inquiry-sent is a different role). Secondary Text Button loading/error/success are omitted (「社區找房」 captured; map-view loading and 「地圖找房」 not bound). Homepage/Listing Search Input and Filter Range Input error/success are omitted (source §14 form validation names no exact field). Property-type tabs and Nav Item loading/error/success are `not-applicable` by selection meaning. Listing Row Card, Listing Photo Container, Featured Listing, Property Feature Tag, and Price Display omit kind and a §4.4 map (C4). State coverage is not claimed complete.
- The source never records `focus-visible`. Applicability stays; no focus-visible row carries a hex.
- Source §13 names fictional archetypes and says they are not individual people. Names, ages, cities, and biographies are not rehosted here (D2). Independently verified tasks only: search from 「搜尋」, scan listing rows, switch 租屋/中古屋/新建案.
- HTML comment classifies interpretive claims (e.g. “conventions over design innovation”) as editorial readings. That comment sentence stays in this ledger. The portable body does not quote that phrase. Principle 4’s source wording “legible convention > design innovation” sits under the Principles head B2a as catalog reconstruction, not as a first-party UI specification.

## Derived editorial range in the portable body

B2a adjacent qualifications in `DESIGN.md` (not first-party 591 UI specification). Reconstruction-boundary exemption is not used. This list is the actual adjacent-complete sites after the F3 scan, not a claim that no unqualified sentence remains:

- Experience Scope: token-note register-split
- Experience Scope: visual-character reading
- Experience Scope: public-history as narrative, not interface tokens
- Experience Scope: market-position / redesign-refusal reading
- Experience Audience: no-invented-personas / stakeholder-group / task-context
- Experience Distinctive: orange-not-decoration / observed-CJK-stack-as-system-stack / price-red-unmerged / 9999-unmerged-from-50% / grey-ladder-unmerged-from-`#000000`
- Experience Principles: the five numbered items as a whole (stems + *UI implication*)
- Experience Principles: dual-role reminder for `#e60012` price vs §14 validation
- Experience capture-bound application list
- Experience Avoid list
- Foundations Semantic color: unmerged-role readings (including inactive-tab `#dddddd` not Muted Light; listing-card ink not badge-tag `#ff8000` / badge-price `#e60012`)
- Foundations Spacing: unitless-scale
- Foundations Shape: local-geometry / 9999 vs `50%`
- Foundations Elevation: shadow-philosophy
- Foundations Motion: minimal/functional / no-spring / 25-year character
- Typography Font evidence: evidence-class application
- Typography Family: font-use boundary
- Typography Family: §3 CJK-first / weight-as-hierarchy / red-for-value / size-restraint
- Typography Type roles: ratio-versus-px
- Typography Type roles: Nav Item vs hero-tab and listing Search CTA vs homepage Search CTA unmerged pairs
- Typography Type roles: Filter Label `#666666` / 14px unmerged from Body Large and Filter Range Input
- Typography Assets: Google-favicon identity-only
- Typography Assets: listing photography not invented decoration
- Components Capture record: graph-not-adopted preservation + state-contract characterizations (practical next steps / no illustration / no shimmer consistent with shadowless / orange loading matching brand / no celebratory success / price-red reused for validation / disabled orange-to-surface)
- Homepage Search Input field-note: YAML fg vs live placeholder
- Listing Search Input field-note: not homepage YAML `input-search`
- Listing Row Card: §9 `16px bold` vs YAML Body Large 400 unmerged
- Layout: harvested-rhythm, not a universal layout grid
- Layout: density / flat-segmentation / tab-height
- Layout: breakpoint table as recorded span, not a captured Mobile / Tablet / Desktop inspect
- Layout: collapsing list as source-stated body §8, not a captured Mobile pass
- Layout: desktop-measurement / mouse-not-touch-first
- Active Property-type Tab: filled orange as static captured variant, not a click transition
- Nav Item: active page color as static variant, not merged with the filled hero tab
- Content: voice / tone-table / forbidden-register
- Content: live homepage / live rent / source tone table / §14 implementation-guidance as separate evidence classes
- Content: no synthetic samples beyond those classes and the source tone table
