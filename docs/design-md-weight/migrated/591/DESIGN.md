# 591 Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

591 (591房屋交易網) is a Taiwan property marketplace operated by Addcn Technology (台灣數字科技股份有限公司). Catalog homepage identity is `https://www.591.com.tw/`. This contract covers two captured first-party public surfaces from the 2026-06-22 live inspect: the homepage `https://www.591.com.tw/` and the rental listing surface `https://rent.591.com.tw/`.

Source token note: primary = 591 orange (`#ff8000`) — search CTA, active tab, brand accent across all surfaces. Canvas white (`#ffffff`). Body text warm grey (`#4a4a4a`). Muted greys (`#999999`, `#666666`). Red price color (`#e60012`). Link blue (`#337ab7`). Tinted surfaces (`#f5f5f5`, `#f2f8ff`, `#fff7e6`). Treating that note as a register of this packet’s two inspected surfaces, not a license to paint unlisted 591 products as if they had been captured, is a derived editorial implementation inference from the verified surfaces; it is not 591-authored or a separately published UI specification.

The following visual-character reading is a derived editorial implementation inference from the verified surfaces; it is not 591-authored or a separately published UI specification. The source describes a dense, information-first real-estate interface on a white canvas (`#ffffff`) with warm grey body text (`#4a4a4a`) and a single brand accent, **591 orange** (`#ff8000`), applied to the homepage search button, active property-type tabs, and app-download headlines. Listing cards are recorded as flat white rows, thin `#e6e6e6` hairlines, and no drop shadows. The type stack is the system CJK fallback `Arial, 微軟正黑體, Microsoft JhengHei, sans-serif`. Price text is recorded in `#e60012`. Link text is recorded in `#337ab7`.

Treating the following public-history sentences as narrative context and not as interface tokens is a derived editorial implementation inference from the verified surfaces; it is not 591-authored or a separately published UI specification. The source records 591 as established by Addcn Technology in **2001**, with the numeric name “591” / 「五九一」 presented as a recognition mark rather than a Mandarin semantic coinage. What began as a classified property listing board evolved into Taiwan’s definitive real-estate marketplace. The same narrative lists rental listings, resale homes, new construction, land, commercial property, and interior-design services as the product roof. 實價登錄 (Taiwan’s Actual Price Registration) is Taiwan’s mandated government price-transparency system; it shows what properties actually transacted at, not just asking prices. The source names that data-trust layer as the product’s deepest moat and as featured in the live homepage title. The live title captured on 2026-06-22 is “591房屋交易網 | 租屋買屋實價登錄資訊平台”. The live app-download headlines captured the same day are “立即與有興趣的屋主、經紀人、建商聯繫” and “超過8萬筆租屋、32萬筆中古屋、5000筆新建案”, both at 50px / 700 in `#ff8000`.

The following market-position and redesign-refusal reading is a derived editorial implementation inference from the verified surfaces; it is not 591-authored or a separately published UI specification. The source calls 591 Taiwan’s dominant property marketplace and reads the flat, information-packed chrome as alignment with how experienced property-seekers use the product, not as a Western-style “clean” redesign. Those readings explain brand context. They do not add tokens beyond the two captured surfaces.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

- Search property listings from the observed 「搜尋」 CTA on the homepage hero and on `rent.591.com.tw`.
- Scan rental listing rows: photo container, title, `#e60012` price, and feature tags.
- Switch property type among 「租屋」 / 「中古屋」 / 「新建案」 in the homepage hero tabs.
<!-- design-md:claim-end -->

### Audience

The source Brand Narrative names renters looking for monthly accommodation, buyers researching market prices, and landlords/agents reaching tenants as stakeholder groups.

Restricting Audience so named fictional archetypes are not promoted, and tying observable work only to the three primary tasks, is a derived editorial implementation inference from the verified surfaces; it is not 591-authored or a separately published UI specification. No individual personas are promoted. Use those stakeholder groups only. Source §13’s named fictional archetypes are not Audience and are not primary tasks.

### Distinctive traits

- 591 orange (`#ff8000`) as catalog `primary_color` and the captured search-CTA / active-tab / hero-headline accent
- System CJK stack `Arial, 微軟正黑體, Microsoft JhengHei, sans-serif`
- Price red (`#e60012`) at 16px / 700 on listing cards, kept unmerged from form-validation reuse of the same hex in §14
- Flat surfaces: YAML `shadow.none` / `shadow.card` both `none`; live listing cards `box-shadow: none`
- Local radii: 2px on inputs/tags/tabs, 4px on secondary listing-page buttons, `8px 8px 0px 0px` on photo containers; YAML `rounded.full` 9999 unmerged from body `50%` circular nav arrows
- Dense listing rows (source: 264–300px tall with image; §14 skeleton ~265px)
- Link blue (`#337ab7`) on captured interactive anchors
- Warm grey text ladder `#333333` → `#4a4a4a` → `#666666` → `#999999`, with listing-card YAML ink `#000000` kept unmerged

Treating orange as the single captured action accent rather than a decorative fill, treating the observed CJK stack as a system stack rather than a downloaded face, treating price red as unmerged from validation red, treating 9999 and `50%` as unmerged full-round tokens, and treating the grey ladder as unmerged from listing-card `#000000`, is a derived editorial implementation inference from the verified surfaces; it is not 591-authored or a separately published UI specification.

### Principles

These five items, including each *UI implication*, are a derived editorial implementation inference from the verified surfaces; they are not 591-authored or a separately published UI specification.

1. **Data over decoration.** 591’s value is real-estate data — listings, prices, transaction records. *UI implication:* maximize information density per screen; never sacrifice a data field for visual breathing room.
2. **Orange signals action, nothing else.** The brand orange (`#ff8000`) appears only where the user must act. *UI implication:* reserve for search buttons, active tabs, and primary brand moments; no decorative orange borders or backgrounds.
3. **Red is price.** Rental and sale prices render in `#e60012` red by convention. *UI implication:* never use red for error states or warnings — it would conflict with the price-reading pattern Taiwanese users have built over 20+ years.
4. **Speed through familiarity.** The system uses standard web conventions (system fonts, Bootstrap-era link blue `#337ab7`, conventional hairline borders) deliberately to minimize cognitive load for returning users. *UI implication:* resist novel interaction patterns; legible convention > design innovation.
5. **Coverage is credibility.** Scale numbers are prominently displayed (“8萬筆租屋”, “32萬筆中古屋”). *UI implication:* quantified scope claims should remain visible in key surfaces; they are trust signals, not marketing copy.

The following capture-bound application list is a derived editorial implementation inference from the verified surfaces; it is not 591-authored or a separately published UI specification.

- Use 591 orange (`#ff8000`) for the primary search action and active navigation states recorded here
- Display property prices in red (`#e60012`)
- Use the Arial / 微軟正黑體 / Microsoft JhengHei system stack
- Separate listing rows with `#e6e6e6` hairlines — flat, no shadows
- Apply 2px radius to inputs and micro-UI elements; 8px only to photo container tops
- Use `#f2f8ff` blue tint for featured or highlighted listing rows
- Keep body text at 14px / 400 `#4a4a4a` on the homepage inspect
- Use the `#333333`–`#999999` grey ladder for text hierarchy; do not collapse listing-card `#000000` into that ladder

Keeping Principle 3’s *UI implication* and source §14’s field-level validation in `#e60012` as two records of the same hex, rather than dropping either, is a derived editorial implementation inference from the verified surfaces; it is not 591-authored or a separately published UI specification. That hex remains a dual-role fact: price display and the named form-validation message.

### Avoid

The following items copy source §7 Don’ts. They are a derived editorial implementation inference from the verified surfaces; they are not 591-authored or a separately published UI specification.

- Do not use drop shadows — live inspection found `box-shadow: none` across listing cards, navigation, inputs, and buttons
- Do not apply the orange accent to decorative elements — it must signal only primary actions
- Do not use custom web fonts — the recorded stack is a system CJK fallback
- Do not round corners more than 8px on listing elements
- Do not use green for price/value signals — red (`#e60012`) is the recorded price color
- Do not mix a third accent into the orange/red action hierarchy
- Do not use light-weight typography for navigation tabs — recorded tab weight is 700
- Do not present Arial or 微軟正黑體 as a proprietary, web-loadable 591 family
- Do not merge homepage search-input `#999999` (live placeholder) with YAML `input-search` fg `#333333`
- Do not merge YAML `dark-overlay` `#262626` with §6 overlay `rgba(0,0,0,0.8)`
- Do not merge YAML `rounded.full` 9999 with body `50%` circular nav arrows

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

The following unmerged-role readings are a derived editorial implementation inference from the verified surfaces; they are not 591-authored or a separately published UI specification. Catalog `primary_color` is the captured search/tab/hero orange, not a decorative fill. Price Red is listing-price text and is not merged with form-validation reuse of the same hex. Link Blue is not 591 orange. Canvas White and On-primary White share `#ffffff` but are different fields. YAML Dark Overlay `#262626` is not the §6 `rgba(0,0,0,0.8)` overlay. Listing-card YAML ink `#000000` is not Body Warm Grey, not badge-tag `#ff8000`, and not badge-price `#e60012`. Homepage search-input live `#999999` is not YAML `input-search` fg `#333333`. Inactive tab text `#dddddd` is not Muted Light. Rent-listing FG sample `rgb(240,24,0)` is not Price Red `#e60012`. Rent-listing FG sample `rgb(80,120,179)` is not Link Blue `#337ab7`. Homepage BG sample `rgb(22,158,113)` is an unpromoted frequency, not a third accent token.

- **591 Orange / Primary** (`#ff8000`): catalog `primary_color`. Homepage search CTA fill, active property-type tab fill, pagination bullets named in §2, and 50px / 700 app-download headlines. YAML `tokens.colors.primary`.
- **Price Red** (`#e60012`): rental/sale price text in listing cards at 16px / 700. YAML `price-red`. Source §14 also records field-level form-validation messages in this same hex; that is a second named use, not a merge of price into a general error role.
- **Pure White / Canvas** (`#ffffff`): page canvas, nav background, listing-card backgrounds. YAML `canvas`.
- **On-primary** (`#ffffff`): YAML `on-primary`. Text on the orange search CTA and on the filled active tab. Same hex as Canvas; not a second canvas token.
- **Light Grey / Surface** (`#f5f5f5`): filter panel background, secondary section surfaces, fold-option containers; also §14 listing-result skeleton surface. YAML `surface`.
- **Blue Tint** (`#f2f8ff`): highlighted / featured listing rows. YAML `surface-blue`. Live rent-listing BG frequency `rgb(242,248,255)×152`.
- **Warm Tint** (`#fff7e6`): feature-tag surfaces and selected-filter option background in §14. YAML `surface-warm`. Live rent-listing BG frequency `rgb(255,247,230)×22`.
- **Ink** (`#333333`): YAML `ink`. Strongest text — titles, active UI labels, Body Large table color, YAML `input-search` fg, secondary listing-page button text `rgb(51,51,51)`.
- **Body Warm Grey** (`#4a4a4a`): YAML `body`. Homepage body `font-size 14px; line-height 21px; color rgb(74,74,74)`. Nav-item YAML fg is this hex.
- **Muted** (`#666666`): YAML `muted`. Secondary descriptions, metadata, filter labels; Caption table color.
- **Muted Light** (`#999999`): YAML `muted-light`. Placeholder text, tertiary captions, disabled labels in §14; live homepage search-input color `rgb(153,153,153)`.
- **Listing-card ink** (`#000000`): YAML `card-listing` and `card-image` fg. Not Body Warm Grey, not Ink, and not badge-tag `#ff8000` or badge-price `#e60012`.
- **Dark Overlay (YAML)** (`#262626`): YAML `dark-overlay`. Near-black for dark section text and overlays; homepage BG frequency `rgb(38,38,38)×9`.
- **Dark Overlay (body §6)** (`rgba(0,0,0,0.8)`): navigation carousel overlays and modal backgrounds. Live rent-listing BG frequency `rgba(0,0,0,0.8)×51`. Not `#262626`.
- **Link Blue** (`#337ab7`): YAML `link`. Property detail links, pagination, contact links. Homepage FG frequency `rgb(51,122,183)×141`.
- **Border / Hairline** (`#e6e6e6`): YAML `border`. Inputs, table rows, card separators; filter input `1px solid #e6e6e6`.
- **Inactive tab text** (`#dddddd`): YAML `tab-inactive` fg. Hero unselected property-type tabs. Not Muted Light.
- **Photo placeholder** (`#d8d8d8`): YAML `card-image` bg. Listing photo container and §14 map-tile placeholder.

### Spacing

YAML `spacing`: xs 4, sm 8, md 12, base 16, lg 20, xl 24, xxl 32, section 48. Body scale line: 4, 8, 12, 16, 20, 24, 32, 48px. Base unit in the body: 4px–8px micro rhythm. Listing-card internal padding: 12px–16px. Section separators: full-width `#e6e6e6` 1px hairlines.

The following unitless-scale reading is a derived editorial implementation inference from the verified surfaces; it is not 591-authored or a separately published UI specification. YAML xl 24 and xxl 32 are unitless token numbers in that scale. They are not rewritten with a px unit.

### Shape

- Extra small: 2px — inputs, tags, tabs (YAML `rounded.sm` 2)
- Small: 4px — secondary buttons, filter buttons (YAML `rounded.md` 4)
- Medium: 8px — listing photo container top corners only (YAML `rounded.lg` 8); radius token `8px 8px 0px 0px`
- Homepage search CTA: `0px 2px 2px 0px`
- Listing search CTA: `0px 4px 4px 0px`
- Listing search input (rent live inspect): `4px 0 0 4px`
- Listing row card: `0px`
- YAML `rounded.full`: 9999
- Body circular navigation arrow buttons: `50%`

The following local-geometry reading is a derived editorial implementation inference from the verified surfaces; it is not 591-authored or a separately published UI specification. 2px / 4px / 8px and the attached-search radii are local harvested geometry, not a universal radius scale. YAML 9999 and body `50%` are both recorded full-round facts; they are not merged.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow (`none`) | All listing cards, inputs, buttons, nav. YAML `shadow.none` and `shadow.card` are both `none`. Live listing cards: `box-shadow: none`. |
| Hairline (Level 1) | `1px solid #e6e6e6` | Card rows, filter separators, input borders |
| Tint (Level 2) | `#f5f5f5` or `#f2f8ff` background | Highlighted listings, filter panel, section alternation |
| Dark Overlay | `rgba(0,0,0,0.8)` | Navigation carousel overlays, modal backgrounds |

The following shadow-philosophy reading is a derived editorial implementation inference from the verified surfaces; it is not 591-authored or a separately published UI specification. The source describes 591 as an entirely shadow-free system and reads that flatness as a pragmatic choice for a dense listing interface. That reading does not create an elevation scale beyond the four recorded treatments.

### Motion

Source-stated duration roles:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 100ms | Hover state changes on links, tab highlight transition |
| `motion-standard` | 200ms | Dropdown menus, filter panel expand/collapse |
| `motion-slow` | 300ms | Carousel transitions, modal open/close |

Source-stated easing token names and uses (uncomputed cubic-bezier omitted):

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | omitted (unattributed cubic-bezier; source-stated name and use only) | Panels arriving, dropdowns opening |
| `ease-exit` | omitted (unattributed cubic-bezier; matches the legacy spec template) | Dismissals, closing panels |
| `ease-linear` | `linear` | Carousel slide transitions (consistent speed) |

The following motion-rule readings (minimal and functional, no spring/bounce, 25-year marketplace character) are a derived editorial implementation inference from the verified surfaces; they are not 591-authored or a separately published UI specification. The source describes 591’s motion vocabulary as minimal and functional. Carousel image transitions use linear easing for predictable pacing; dropdown filters open and close cleanly. There are no spring animations and no bounce effects. Under `prefers-reduced-motion: reduce`, all transitions should collapse to instant; the product remains fully operational without any animation.

Exact cubic-bezier curves are unattributed — `ease-exit` matches the legacy spec template — and remain omitted rather than promoted. Do not promote an easing curve, animation name, transition property, or a duration beyond the tables above until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or duration is not that gate. Any exact animation curve remains a local extension until that per-component computed observation exists.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The following evidence-class application readings are a derived editorial implementation inference from the verified surfaces; they are not 591-authored or a separately published UI specification.

| Evidence class | Resolution |
|---|---|
| Live computed surface-use | Homepage inspect: `Arial,微軟正黑體,"Microsoft JhengHei",sans-serif` at 14px / `#4a4a4a` / line-height 21px. Rent listing inspect: `Arial,微軟正黑體,"Microsoft JhengHei"` at 16px. YAML family token: `Arial, 微軟正黑體, Microsoft JhengHei, sans-serif`. Quote marks and comma spacing differ across those three strings; they are not collapsed into one invented stack. |
| License / system | Arial, 微軟正黑體, and Microsoft JhengHei are operating-system stack members on the captured surfaces. |

### Family

- **YAML family token:** `Arial, 微軟正黑體, Microsoft JhengHei, sans-serif`
- **Homepage live computed:** `Arial,微軟正黑體,"Microsoft JhengHei",sans-serif`
- **Rent listing live computed:** `Arial,微軟正黑體,"Microsoft JhengHei"`

The following font-use boundary is a derived editorial implementation inference from the verified surfaces; it is not 591-authored or a separately published UI specification. Use a locale-aware operating-system stack that preserves Traditional Chinese (繁體中文) rendering, but label it as a stack rather than a custom brand font. Do not present Arial or 微軟正黑體 as a proprietary, web-loadable 591 UI family. Do not replace the observed stack with a downloaded webfont.

Source §3 also states CJK-first, weight-as-hierarchy, red-for-value, and 13px–20px size-restraint principles. Those four readings are a derived editorial implementation inference from the verified surfaces; they are not 591-authored or a separately published UI specification.

### Type roles

Verified line-height values from YAML are the unitless ratios `1.31` (nav-tab) and `1.5` (body, body-lg). The homepage inspect also recorded computed line-height 21px at 14px. The following ratio-versus-px reading is a derived editorial implementation inference from the verified surfaces; it is not 591-authored or a separately published UI specification. The ratios scale with font size and are not fixed px. 21px is a size-local observation at 14px, not a replacement for ratio `1.5`.

| Role | Font | Size | Weight | Line height | Color | Use |
|---|---|---:|---:|---:|---|---|
| Hero Headline | system stack | 50px | 700 | omitted (no YAML ratio) | `#ff8000` | App download section hero headline, orange accent. Live H3: 「立即與有興趣的屋主、經紀人、建商聯繫」; 「超過8萬筆租屋、32萬筆中古屋、5000筆新建案」 |
| Nav Tab | system stack | 16px | 700 | 1.31 | `#dddddd` / `#ff8000` active | Primary navigation tab labels (租屋/中古屋/新建案) |
| Search Button | system stack | 20px | 700 | omitted (no YAML ratio) | `#ffffff` on `#ff8000` | Search CTA label in hero search bar 「搜尋」 |
| Body Default | system stack | 14px | 400 | 1.5 | `#4a4a4a` | Standard body text, nav links, listing meta. Size-local homepage line-height 21px |
| Body Large | system stack | 16px | 400 | 1.5 | `#333333` | Listing page body, filter labels. Rent listing body font-size 16px |
| Filter Label | system stack | 14px | 400 | omitted (no YAML ratio) | `#666666` | Filter-panel labels. Source §9-only: “Labels in `#666666` 14px.” |
| Price | system stack | 16px | 700 | omitted (no YAML ratio) | `#e60012` | Rental price display in listing cards, red color |
| Caption | system stack | 13px | 400 | omitted (no YAML ratio) | `#666666` | Small labels, tags, secondary metadata |

The following unmerged-pair readings are a derived editorial implementation inference from the verified surfaces; they are not 591-authored or a separately published UI specification. Nav Item YAML font is `14px / 400` with fg `#4a4a4a` — that is the main-nav row, not the 16px / 700 hero tab. Search CTA on the listing page is `16px / 400`, not the 20px / 700 homepage CTA. Filter Label `#666666` / 14px is the §9-only filter-panel label tuple; it is not Body Large 16px / 400 / `#333333` (YAML `body-lg` still uses the string “filter labels” for that 16px role) and not Filter Range Input 13px / 400. Those pairs stay unmerged.

### Assets

Treating catalog logo metadata as a third-party Google favicon lookup (`https://www.google.com/s2/favicons?domain=591.com.tw&sz=128`), not a captured first-party 591 mark, is a derived editorial implementation inference from the verified surfaces; it is not 591-authored or a separately published UI specification.

Listing photography is first-party catalog content on the captured listing rows. The `#d8d8d8` photo container is the recorded placeholder when a photo is unavailable. Treating that photography as catalog content that must not be replaced with invented brand-color decoration is a derived editorial implementation inference from the verified surfaces; it is not 591-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

Preserving the source state contract here while the catalog graph is not adopted, together with the following state-contract characterizations (practical next steps, no illustration, no shimmer consistent with the shadowless system, orange loading matching brand, no celebratory success, price-red reused for validation, disabled orange reducing to `#f5f5f5` to signal unavailability while preserving layout), is a derived editorial implementation inference from the verified surfaces; it is not 591-authored or a separately published UI specification.

The source state contract:

| State | Treatment |
|---|---|
| **Empty (no search results)** | White canvas, single `#4a4a4a` message at body size explaining criteria. Practical next steps (widen radius, lower price floor) listed as text links in `#337ab7`. |
| **Empty (saved listings, none yet)** | Muted `#999999` instruction line, link to begin searching. No illustration. |
| **Loading (listing results)** | Skeleton rows on `#f5f5f5` surface at final card height (~265px). Grey placeholder image area where photo loads. Flat — no shimmer animation consistent with the shadowless system. |
| **Loading (map view)** | `#d8d8d8` tile placeholder until map tiles render; orange loading indicator matching brand. |
| **Error (search failed / timeout)** | Inline orange-bordered message with plain Traditional Chinese explanation and retry link in `#337ab7`. |
| **Error (form validation)** | Field-level red (`#e60012`) message below input — reuses the price-red deliberately as "attention required" signal without introducing a new color. |
| **Success (inquiry sent)** | Brief inline `#333333` confirmation, link to "我的詢問" listing; no celebratory state. |
| **Skeleton** | `#f5f5f5` blocks at final card dimensions, zero radius on body blocks, 8px radius on photo placeholder top. |
| **Disabled** | `#999999` muted-light text on standard surface; orange elements reduce to `#f5f5f5` fill to signal unavailability while preserving layout. |
| **Active / Selected filter** | `#ff8000` border or text on filter pill; `#fff7e6` warm-tint background on selected option. |

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. A generic `Focus` capture is not `focus-visible` treatment evidence; the source never records `focus-visible`, and that visual treatment remains omitted. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless captured as that same canonical state. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow the control’s product role, not its primitive kind. Where exact label, action, request, or outcome is unresolved, those three applicability fields are omitted at this boundary rather than closed. This is not a complete state-coverage claim.

Listing Row Card, Listing Photo Container, Featured Listing, Property Feature Tag, and Price Display have no interactive-kind confirmation for a §4.4 map, so kind and a state-applicability map are omitted.

### Homepage Search CTA

- Role: primary search CTA attached to the right edge of the homepage hero search input
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#ff8000`
- Text: `#ffffff`
- Radius: `0px 2px 2px 0px`
- Height: `55px`
- Font: `20px / 700` / Arial
- Use: Primary search CTA button on homepage hero. Live label 「搜尋」
- Observed: default live inspect 2026-06-22. Source records no hover, focus, or pressed paint for this control.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on `www.591.com.tw` homepage hero |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A search CTA can be unavailable; visual treatment omitted |
| loading | applicable | This CTA starts the listing-results request; visual treatment omitted |
| error | applicable | This CTA starts the search that can fail or time out; visual treatment omitted |

Success applicability is omitted. Exact mapping of a search-success confirmation onto this CTA is unresolved; source §14 Success is inquiry-sent (`我的詢問`), a different role.

### Listing Search CTA

- Role: search button on the rental listing page
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#ff8000`
- Text: `#ffffff`
- Radius: `0px 4px 4px 0px`
- Padding: `5px 16px`
- Height: `44px`
- Font: `16px / 400` / Arial
- Use: Search button on rental listing page (`rent.591.com.tw`). Live label 「搜尋」
- Observed: default live inspect 2026-06-22

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on `rent.591.com.tw` |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A search CTA can be unavailable; visual treatment omitted |
| loading | applicable | This CTA starts the listing-results request; visual treatment omitted |
| error | applicable | This CTA starts the search that can fail or time out; visual treatment omitted |

Success applicability is omitted. Exact mapping of a search-success confirmation onto this CTA is unresolved; source §14 Success is inquiry-sent (`我的詢問`), a different role.

### Secondary Text Button

- Role: secondary community-search option on the rental listing page
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#ffffff`
- Text: `#333333`
- Radius: `4px`
- Padding: `5px 16px`
- Height: `44px`
- Font: `14px / 400` / Arial
- Use: Secondary community-search option. Live label 「社區找房」
- Observed: default live inspect 2026-06-22. YAML has no row for this control; values are from body §4 and the rent inspect. Body also names 「地圖找房」; that map-search option is not this captured community control and is not merged into it.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on `rent.591.com.tw` |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A secondary search option can be unavailable; visual treatment omitted |

Loading, error, and success applicability are omitted. This captured control is 「社區找房」. Source §14 records map-view loading; exact mapping of that row, or of a request-failure/success confirmation, onto this community option is unresolved, so those three fields stay omitted at this boundary rather than closed from paint location or from 「地圖找房」.

### Homepage Search Input

- Role: primary property keyword/location input on the homepage hero
- Kind: interactive
- Type: input
- Anatomy: value field
- Background: `#ffffff`
- YAML `input-search` fg: `#333333`
- Live inspect text: `#999999` (`rgb(153,153,153)`)
- Radius: `2px`
- Height: `55px`
- Border: `0px` / none (no visible border — attached to the orange search button)
- Font: `16px / 400` / Arial
- Use: Main property search input field on homepage
- Field note: The following unmerged-field reading is a derived editorial implementation inference from the verified surfaces; it is not 591-authored or a separately published UI specification. YAML fg `#333333` is this component’s token field. Live `#999999` is the captured placeholder color. They are not merged.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on the homepage hero |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Interactive field; visual treatment omitted |
| disabled | applicable | A search field can be unavailable; visual treatment omitted |
| loading | not-applicable | This field’s role is keyword/location entry; results loading is not a state of the input |

Error and success applicability are omitted. Source §14 names generic form validation without an exact field; that row is not bound to this search input. A search-success confirmation on the input is likewise unresolved.

### Listing Search Input

- Role: search input on `rent.591.com.tw`, attached to the listing search CTA
- Kind: interactive
- Type: input
- Anatomy: value field
- Background: `#ffffff`
- Text: `#333333` (`rgb(51,51,51)`)
- Radius: `4px 0 0 4px`
- Padding: `0 0 0 16px`
- Height: `44px`
- Use: Live inspect of the rental-listing search input. YAML has no separate row; homepage `input-search` is 55px / `2px` / `#333333` token fg and is not this control.
- Field note: Treating this rent-listing input as a separate control from homepage YAML `input-search`, not a second measurement of the same field, is a derived editorial implementation inference from the verified surfaces; it is not 591-authored or a separately published UI specification.
- Observed: default live inspect 2026-06-22

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on `rent.591.com.tw` |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Interactive field; visual treatment omitted |
| disabled | applicable | A search field can be unavailable; visual treatment omitted |
| loading | not-applicable | Keyword entry is not a loading state of this input |

Error and success applicability are omitted. Source §14 names generic form validation without an exact field; that row is not bound to this search input. A search-success confirmation on the input is likewise unresolved.

### Filter Range Input

- Role: price, area, and floor filter inputs in the search panel
- Kind: interactive
- Type: input
- Anatomy: value field
- Background: `#ffffff`
- Text: `#000000`
- Radius: `2px`
- Padding: `4px 12px`
- Height: `27px`
- Border: `1px solid #e6e6e6`
- Font: `13px / 400` / Arial
- Use: Filter range inputs (price, area, floor)
- Observed: default live inspect 2026-06-22

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured in the rent-listing filter panel |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Interactive field; visual treatment omitted |
| disabled | applicable | A filter field can be unavailable; visual treatment omitted |
| loading | not-applicable | Range entry is not a loading state of this input |

Error and success applicability are omitted. Source §14 names generic form validation without an exact field; that row is not bound to this filter input. Entering a range is not mapped here as a success confirmation.

### Active Property-type Tab

- Role: currently selected property type in the homepage hero search area
- Kind: interactive
- Type: tab
- Anatomy: label
- Background: `#ff8000`
- Text: `#ffffff`
- Radius: `2px`
- Padding: `0px 14px`
- Height: `30px`
- Font: `16px / 700` / Arial
- Use: Active property type tab (租屋/中古屋/新建案). Live active sample 「租屋」
- Observed: default live inspect 2026-06-22. Treating the filled orange appearance as a static captured variant rather than an observed click transition is a derived editorial implementation inference from the verified surfaces; it is not 591-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Static active appearance captured on the homepage hero |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A property-type tab can be unavailable; visual treatment omitted |
| loading | not-applicable | A property-type tab selects a grouping; the tab itself does not enter a loading state |
| error | not-applicable | Tab meaning is selected versus resting, not a request or validation failure on the tab |
| success | not-applicable | Tab meaning is selection, not action-outcome confirmation |

Additional observed named state: static active filled appearance. That appearance is a captured variant, not an observed click transition.

### Inactive Property-type Tab

- Role: unselected property type tab in the homepage hero
- Kind: interactive
- Type: tab
- Anatomy: label
- Background: transparent
- Text: `#dddddd`
- Radius: `2px`
- Padding: `0px 14px`
- Height: `30px`
- Font: `16px / 700` / Arial
- Use: Inactive navigation tab in hero search area
- Observed: default live inspect 2026-06-22

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Static inactive appearance captured on the homepage hero |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A property-type tab can be unavailable; visual treatment omitted |
| loading | not-applicable | A property-type tab selects a grouping; the tab itself does not enter a loading state |
| error | not-applicable | Tab meaning is selected versus resting, not a request or validation failure on the tab |
| success | not-applicable | Tab meaning is selection, not action-outcome confirmation |

### Nav Item

- Role: main navigation items
- Kind: interactive
- Type: tab
- Anatomy: label
- Text: `#4a4a4a`
- Font: `14px / 400`
- Use: Main navigation items (首頁/新建案/中古屋/租屋). Active page: color `#ff8000`
- Observed: YAML harvested default. Treating the active page color as a static variant, and not merging it with the filled hero tab, is a derived editorial implementation inference from the verified surfaces; it is not 591-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | YAML harvested main-nav item |
| hover | applicable | Pointer-web nav control; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A nav item can be unavailable; visual treatment omitted |
| loading | not-applicable | Main-nav selection is not a loading state of the item |
| error | not-applicable | Nav meaning is selected versus resting, not a request failure on the item |
| success | not-applicable | Nav meaning is selection, not action-outcome confirmation |

Additional observed named state: active page color `#ff8000`. That is text color on the nav item, not the filled hero-tab treatment.

### Listing Row Card

- Role: rental listing item row
- Type: card
- Anatomy: surface
- Background: `#ffffff`
- Text: `#000000`
- Radius: `0px`
- Shadow: `none`
- Use: Rental listing item card, flat no-shadow, full-width row
- §9-only title anatomy: property title in `#333333` 16px bold. YAML Body Large is 16px / 400 `#333333`. Treating those weights as unmerged records of the same hex and size, not as one type role, is a derived editorial implementation inference from the verified surfaces; it is not 591-authored or a separately published UI specification.

No interactive-kind evidence is given for this surface. Kind and a state-applicability map are omitted.

### Listing Photo Container

- Role: photo placeholder/container within a listing card
- Type: card
- Anatomy: image container
- Background: `#d8d8d8`
- Radius: `8px 8px 0px 0px`
- Use: Listing photo container, top-rounded corners. Source image behavior: this top radius is kept at the recorded breakpoints; the placeholder is used when photos are unavailable.

No interactive-kind evidence is given for this surface. Kind and a state-applicability map are omitted.

### Featured Listing

- Role: sponsored or featured listing highlight
- Anatomy: surface
- Background: `#f2f8ff`
- Radius: `0px`
- Use: Blue-tint highlight for sponsored or featured listings

YAML has no `type` for this surface. Type is not invented. Kind and a state-applicability map are omitted.

### Property Feature Tag

- Role: feature labels on listing cards
- Type: badge
- Anatomy: label
- Background: `#fff7e6`
- Text: `#ff8000`
- Radius: `2px`
- Font: `13px / 400` / Arial
- Use: Feature tags and property type labels. Body examples: 「近捷運」, 「獨立衛浴」, 「可養寵物」

No interactive-kind evidence is given for this badge. Kind and a state-applicability map are omitted.

### Price Display

- Role: rental or sale price in listing cards
- Type: badge
- Anatomy: label
- Background: transparent
- Text: `#e60012`
- Radius: `0px`
- Font: `16px / 700` / Arial
- Use: Rental price display in listing cards

No interactive-kind evidence is given for this badge. Kind and a state-applicability map are omitted.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

YAML spacing and the body scale line are in Foundations. Treating those numbers as harvested rhythm for the two captured surfaces, not as a universal layout grid, is a derived editorial implementation inference from the verified surfaces; it is not 591-authored or a separately published UI specification.

- Full-width navigation bar with centered content at max ~1200px
- Homepage: centered search box with category tabs above, listing cards below. §9 construction prompt (deleted as a prompt) recorded the same attached search-bar composition: white 55px input, orange CTA on the right, 30px tabs above.
- Listing pages: two-column layout (filter sidebar + results list)
- Category tabs arranged as a horizontal pill-row within a dark hero banner (on homepage)

The following density, flat-segmentation, and tab-height readings are a derived editorial implementation inference from the verified surfaces; they are not 591-authored or a separately published UI specification.

- **Density over breathing room:** listing rows are compact (264–300px tall for full card with image), not airy. §14 skeleton height is ~265px.
- **Flat segmentation:** sections separated by thin `#e6e6e6` hairlines and background tint shifts (`#f5f5f5`, `#f2f8ff`), never shadows.
- **Consistent tab height:** navigation tabs and filter rows are 30–44px.

Source-stated breakpoints (body §8). Treating the table as a recorded span rather than a captured Mobile / Tablet / Desktop inspect is a derived editorial implementation inference from the verified surfaces; it is not 591-authored or a separately published UI specification. The HTML comment records playwright `getComputedStyle` on the two desktop URLs and does not record a Mobile or Tablet pass.

| Name | Width | Key Changes |
|---|---|---|
| Mobile | <768px | Single column, simplified nav, listing images above metadata |
| Tablet | 768–1024px | 2-column listing, compressed filter sidebar |
| Desktop | 1024px+ | Full sidebar + 1-column listing list, centered 1200px max |

Source-stated collapsing: category tabs remain visible but may collapse to scroll on mobile; filter sidebar collapses to modal/drawer on mobile; listing cards maintain full-width on mobile with thumbnail on left; search input + button remain paired, compressing on narrower viewports. Treating that collapsing list as source-stated body §8, not as a captured Mobile breakpoint pass, is a derived editorial implementation inference from the verified surfaces; it is not 591-authored or a separately published UI specification.

The following desktop-measurement reading is a derived editorial implementation inference from the verified surfaces; it is not 591-authored or a separately published UI specification. Search button 55px (homepage) / 44px (listing page), nav tabs 30px, and filter inputs 27px are desktop-capture measurements. Source commentary that 30px tabs are designed for mouse, not touch-first, is part of the same derived reading. They are not a responsive target-size rule.

<!-- design-md:section content-locales -->
## 6. Content & Locales

Source-named live homepage voice samples (playwright inspect 2026-06-22; title and two H3s):

- “591房屋交易網 | 租屋買屋實價登錄資訊平台” — page title
- “立即與有興趣的屋主、經紀人、建商聯繫” — app-download H3
- “超過8萬筆租屋、32萬筆中古屋、5000筆新建案” — scale-claim H3

Additional observed live homepage chrome (same inspect; not in the source-named voice-sample list):

- 「搜尋」 — homepage search CTA
- 「租屋」 / 「中古屋」 / 「新建案」 — property-type tabs

Observed live rent-surface strings (playwright inspect 2026-06-22; not live homepage):

- 「搜尋」 — listing-page search CTA
- 「社區找房」 — secondary listing-page button

Source tone-table strings (catalog reconstruction; not live-verified homepage voice samples):

- 「土地」, 「店面」, 「辦公」, 「廠房」 — additional category labels in the tone table
- “台灣第一房屋網路平台” — tone-table site-title copy

§14 implementation-guidance string (not live homepage):

- 「我的詢問」 — success-state link in the inquiry-sent row

The following voice, tone-table, and forbidden-register readings are a derived editorial implementation inference from the verified surfaces; they are not 591-authored or a separately published UI specification. The source describes 591’s voice as direct, efficient, and trustworthy, speaking plainly in 繁體中文 about location, price, size, and type, without editorial sophistication. Live homepage, live rent, source tone table, and §14 implementation guidance stay separate evidence classes. The context table and forbidden register are catalog reconstruction, not a 591-authored voice specification.

| Context | Tone |
|---|---|
| Site title / hero | Factual, scope-asserting. “台灣第一房屋網路平台” is source tone-table copy, not one of the three live-verified homepage strings. |
| Category labels | Minimal and categorical: 「租屋」, 「中古屋」, 「新建案」, 「土地」, 「店面」, 「辦公」, 「廠房」 |
| Search CTA | Single word command: 「搜尋」 |
| Feature counts | Numbers-first: 「超過8萬筆租屋、32萬筆中古屋、5000筆新建案」 |
| App download | Benefit-then-action: “在線VR、影片賞屋，助您找房更方便” — practical value, formal 您 register |

**Forbidden register** (source-stated; still a derived catalog reconstruction, not a 591 voice spec): casual/playful tone, excessive emoji or exclamation, vague aspirational copy ("find your dream home"), English-first UI copy, misleading availability claims.

Not promoting synthetic voice samples beyond the observed strings and the source tone table is a derived editorial implementation inference from the verified surfaces; it is not 591-authored or a separately published UI specification.

<!-- design-md:section governance -->
## 7. Governance

<!-- design-md:claim authority kind=evidence-backed-reconstruction lang=en -->
### Authority

This document is an evidence-backed reconstruction, not authority for an unrelated target project.
<!-- design-md:claim-end -->

<!-- design-md:claim application-priority order=prompt-fact,repository-fact,system-contract,reference-inspiration lang=en -->
### Application priority

1. Direct user instructions for the requested scope.
2. Repository facts.
3. This system contract.
4. Reference inspiration.
<!-- design-md:claim-end -->

<!-- design-md:claim unknowns policy=absent-at-smallest-unresolved-boundary lang=en -->
### Unknowns

Omit only the smallest unresolved value or group. Do not replace it with a plausible default.
<!-- design-md:claim-end -->

<!-- design-md:claim changes policy=review-record-validate-before-adoption lang=en -->
### Changes

Record, review, and validate changes before adoption.
<!-- design-md:claim-end -->

### Named gaps

These decisions are unnamed values, not permissions to invent:

- hover, pressed, focus, loading, error, success, empty, skeleton, and disabled visual treatments per control, except the named §14 page-level rows in the capture record
- `focus-visible` visual treatments (the source never records `focus-visible`)
- Homepage Search CTA and Listing Search CTA success applicability (exact search-success mapping unresolved; inquiry-sent is a different role)
- Secondary Text Button loading, error, and success applicability (「社區找房」 captured; map-view loading and 「地圖找房」 not bound to this control)
- Homepage Search Input, Listing Search Input, and Filter Range Input error and success applicability (source §14 form validation names no exact field)
- interactive kind and state-applicability map for Listing Row Card, Listing Photo Container, Featured Listing, Property Feature Tag, and Price Display
- YAML `rounded.full` 9999 captured use; body `50%` circular nav-arrow component anatomy beyond the radius fact
- Type role line-height for Hero Headline, Search Button, Price, and Caption (no YAML ratio)
- Featured Listing YAML `type` (none recorded; not invented)
- exact cubic-bezier for `ease-enter` / `ease-exit` (omitted; names and uses kept)
- motion duration, easing, animation name, transition properties, and reduced-motion behavior beyond the source-stated tables — promote only after per-component computed capture of all five; official documentation of a single curve or duration is not that gate
- unpromoted homepage BG sample `rgb(22,158,113)`; rent FG samples `rgb(240,24,0)` and `rgb(80,120,179)` as tokens
- a captured Mobile / Tablet inspect; source §8 remains a recorded span
