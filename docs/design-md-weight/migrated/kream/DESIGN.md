# KREAM Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

KREAM is a Korean limited-edition marketplace. Members can buy immediately at the lowest available sell offer or place a bid; when a match is made, the seller sends the item to KREAM for authentication before delivery. Its official FAQ also describes warehouse-held, authenticated inventory as eligible for rapid shipping. This contract covers the three first-party public commerce surfaces the source inspected for tokens on 2026-07-13: the home at `https://kream.co.kr/`, the recovery route at `https://kream.co.kr/shop`, and the search route at `https://kream.co.kr/search?keyword=nike`. The Buying FAQ at `https://kream.co.kr/faq?category=buying&page=0` and the authentication standards at `https://kream.co.kr/auth_policy` are named sources for service context; they do not supply the computed commerce tokens below. Catalog identity also records `primary_color: "#000000"`; that catalog field is not `tokens.colors.primary` `#222222` and is not a YAML colors key. Reading those three inspected URLs as this contract's token surfaces, keeping the FAQ and authentication-policy URLs as named service-context sources that do not supply computed interface tokens, treating values as attached to the surface that established them, and keeping catalog `primary_color` `#000000` off `tokens.colors.primary` `#222222`, are derived editorial implementation inferences from the verified surfaces; they are not KREAM-authored or a separately published UI specification.

The source records a tightly neutral interface: `#222222` is the recurring text and border ink, `#ffffff` the canvas, `#f5f5f5` a home-surface fill, and a small search-control layer in `#4e4e4e`/`#f0f0f0`. Corners are not globally rounded: the evidence ranges from square tabs and inputs to 6px product/filter geometry, one 8px recovery action, 16px home merchandising panels, and 30px filter pills. The current home route is a merchandising surface with campaign modules and product discovery, while the search route is the strongest evidence for the marketplace controls themselves. Marketing campaign content visible on the home route is not used as documentation or product-state evidence. The hex values, the route split, the corner range, and that marketing-content bound are the source's own. The characterizations built on them — a tightly neutral interface; a quiet white and charcoal information field that makes product imagery, price, filters, and rankings do the work rather than relying on a broad brand-color system; the search route as the strongest evidence for the marketplace controls; a surface-specific distinction rather than a universal component kit; a particular character given by the transaction model — are a derived editorial implementation inference from the verified surfaces; they are not KREAM-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. KREAM describes its service as a way to buy and trade limited-edition goods that are otherwise difficult to obtain, with expert inspection intended to make the exchange safe and quick. Its official buying guidance distinguishes immediate purchase, bid-based purchase, inspection, storage, and delivery rather than reducing the marketplace to a conventional retailer. Source citations for that narrative: `https://kream.co.kr/faq?list=true&page=2` and `https://kream.co.kr/faq?category=buying&page=0`. The current public surface reflects that service model through discovery, search filtering, product cards, and route-local recovery controls. The reference does not claim a separate KREAM brand history, rebrand, owned typeface, or public design-system program because no first-party evidence for those claims was collected in this pass. The limited-edition buying/trading description, the five-stage buying guidance, the current-surface reflection, and that closing sentence are the source's own narrative facts; they do not by themselves supply interface tokens. Classifying that marketplace-and-inspection narrative as context that does not by itself supply interface tokens is a derived editorial implementation inference from the verified surfaces; it is not KREAM-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product's primary tasks, each naming a surface or official buying-flow label the source records, is a derived editorial implementation inference from the verified surfaces; it is not KREAM-authored or a separately published UI specification. They do not come from the source's Personas section.

- Discover campaign modules and product listings on `https://kream.co.kr/`.
- Search and filter the catalog on `https://kream.co.kr/search?keyword=nike`.
- Follow the official buying flow the FAQ labels “즉시 구매 혹은 구매 입찰”.
<!-- design-md:claim-end -->

### Audience

No named individuals appear. The source collected no first-party persona research and left two user-provided placeholders unfilled; those placeholders are omitted rather than filled. Official material discusses members who buy immediately or bid, and sellers who send a matched item for authentication, at a group level. Dropping the unfilled placeholders rather than promoting them, carrying no name, age, city, motivation, or affiliation classification, and reading those source-named groups as this product's audience, are derived editorial implementation inferences from the verified surfaces; they are not KREAM-authored or a separately published UI specification.

### Distinctive traits

The list restates the source's Key Characteristics. The values are recorded; classifying the list as that restatement, and the groupings and the readings inside them, are a derived editorial implementation inference from the verified surfaces — they are not KREAM-authored or a separately published UI specification.

- Live commerce use of `Pretendard Variable`, verified by computed-family usage plus a loaded FontFaceSet match and 92 KREAM-hosted subset source URLs
- White canvas and charcoal `#222222` chrome across home, recovery, and search captures
- Search-route filters distinguish pill fill (`#f4f4f4`, 30px) from outlined rectangular controls (`#ffffff`, 6px)
- Active search tabs retain the charcoal ink and use a 2px bottom border with 700 weight
- No captured hover, focus, pressed, dialog, toast, loading, responsive, or other interaction state

### Principles

These three items are a derived editorial implementation inference from the verified surfaces; they are not KREAM-authored or a separately published UI specification. The source states them in its own Principles section together with the UI implication it draws from each.

1. **Make the transaction path legible.** Official guidance distinguishes immediate purchase and bidding before inspection and delivery. *UI implication:* maintain clear labels for the observed route and step; do not invent transactional states.
2. **Keep authentication explicit.** KREAM publishes product-category authentication standards and assigns responsibility for inspection/guarantees within its policy boundary. *UI implication:* distinguish an inspection statement from a generic marketing assurance.
3. **Keep control evidence local.** Search filters, tabs, and recovery controls appear on different captured contexts. *UI implication:* reuse only the field values and state that were actually observed for that context.

### Application rules

The source states these four as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not KREAM-authored or a separately published UI specification.

- Use `Pretendard Variable` only where the recorded KREAM-loaded webfont evidence applies.
- Keep the observed commerce chrome white and charcoal, with search filter controls constrained to their recorded geometry and route.
- Preserve selector, surface, and state provenance when recreating an observed component.
- Treat KREAM’s official FAQ and authentication policy as service-context sources, not a design-token system.

### Avoid

The source states these four as its Don't list. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not KREAM-authored or a separately published UI specification.

- Do not replace declared-only Helvetica Neue, Noto Sans, or Roboto entries with a look-alike and label it as KREAM.
- Do not turn product-content green or red samples into semantic status tokens.
- Do not generalize the recovery-route button into a primary CTA.
- Do not add hover, focus, pressed, disabled, loading, dialog, or mobile variants without a corresponding captured surface and state.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Each role below pairs a name with the value and the use the source records. Role names follow the source's own labels and token-set keys. Taking those role names from the source's own token-set keys, pairing each hex to the token-set path named beside it, keeping `tokens.colors.primary` `#222222` off `tokens.colors.foreground` `#222222`, keeping `tokens.colors.canvas` `#ffffff` off `tokens.colors.on-primary` `#ffffff`, keeping the outlined-filter background `#ffffff` as a §4 component field off those two YAML `#ffffff` keys, keeping catalog `primary_color` `#000000` off those YAML keys and off the search-input and recovery-button `#000000` writings, keeping pill fill `#f4f4f4` as a §4 component field that is not a YAML `tokens.colors` key, keeping product-content `#00cc44` and `#f15746` off the token set, attaching every role to the surface the source recorded rather than relabeling a home value as a house palette for every KREAM surface, and keeping the source's own "no semantic CTA role was established" bound on `tokens.colors.on-primary`, are derived editorial implementation inferences from the verified surfaces; they are not KREAM-authored or a separately published UI specification. The hex values and recorded uses are the source's own.

- **Canvas** (`#ffffff`): repeated background across home and search. Token-set path `tokens.colors.canvas`.
- **Primary** (`#222222`): repeated text and border ink across all supplied routes. Token-set path `tokens.colors.primary`. Same hex as `tokens.colors.foreground`; it stays a second key. This is not catalog `primary_color` `#000000`.
- **Foreground** (`#222222`): Token-set path `tokens.colors.foreground`. Same hex as `tokens.colors.primary`; it stays a second key.
- **Home merchandising surface** (`#f5f5f5`): observed background on the home route; not a universal card fill. Token-set path `tokens.colors.surface`. This is not pill fill `#f4f4f4`.
- **Search-control muted ink** (`#4e4e4e`): observed on both default filter-control styles. Token-set path `tokens.colors.muted`.
- **Search-control hairline** (`#f0f0f0`): observed 1px border on the outlined search filter control. Token-set path `tokens.colors.hairline`.
- **On-primary / inverse** (`#ffffff`): observed text and border value in the live capture; no semantic CTA role was established. Token-set path `tokens.colors.on-primary`. Same hex as `tokens.colors.canvas`; it stays a second key.

The collector also saw product-content colors such as `#00cc44` and `#f15746` on the search route. It does not establish a semantic price, status, gain, or loss role, so these values are deliberately absent from machine tokens. No official public design-system page was found in this pass. Pill filter fill `#f4f4f4` is recorded on the search-route pill control; it is not a YAML `tokens.colors` key.

### Spacing

Token-set path `tokens.spacing` (unitless steps, kept as the source wrote them): `xxs: 2` · `xs: 4` · `sm: 6` · `md: 8` · `lg: 12` · `xl: 24`.

`tokens.spacing.xxs: 2` is not the active-tab `2px` bottom border. `tokens.spacing.xs: 4` is not the `4px` in the outlined-filter padding `0px 6px 0px 4px`. `tokens.spacing.sm: 6` is not `tokens.rounded.sm: 6`. `tokens.spacing.md: 8` is not `tokens.rounded.recovery: 8` and is not the `8px` in the pill-filter padding `0px 8px`. `tokens.spacing.lg: 12` is not the recovery-button type size `13`. `tokens.spacing.xl: 24` is not `tokens.typography.search.size` `24`. Keeping those unitless spacing steps on their own keys rather than rewriting them as a grid, and keeping those writings of `2`, `4`, `6`, `8`, `12`, and `24` on their own records, are derived editorial implementation inferences from the verified surfaces; they are not KREAM-authored or a separately published UI specification.

### Shape

Token-set path `tokens.rounded` (unitless steps, kept on their own path): `none: 0` · `sm: 6` · `recovery: 8` · `merchandising-panel: 16` · `search-filter-pill: 30`.

The source's named radius uses, kept on their own rows:

- None (`0`): square tabs and inputs. Token-set key `tokens.rounded.none`.
- Small (`6` / `6px`): product/filter geometry, including the outlined filter and the product-card shell. Token-set key `tokens.rounded.sm`.
- Recovery (`8` / `8px`): recovery-route action. Token-set key `tokens.rounded.recovery`.
- Merchandising panel (`16` / `16px`): home merchandising panels. Token-set key `tokens.rounded.merchandising-panel`. This `16` is not a spacing step.
- Search-filter pill (`30` / `30px`): search-route pill filter. Token-set key `tokens.rounded.search-filter-pill`. This `30` is not the pill height `30px` as a replacement; both writings stay.

`tokens.rounded.search-filter-pill: 30` stays the pill radius step. The pill control's height `30px` stays a component geometry. Neither was chosen over the other as a replacement. Keeping `0`, `6`, `8`, `16`, and `30` as five keys, and keeping those component heights off the rounded map, are derived editorial implementation inferences from the verified surfaces; they are not KREAM-authored or a separately published UI specification.

### Elevation

Representative components in the supplied capture report `box-shadow: none`. Token-set path `tokens.shadow.none` (`none`). No elevated card, overlay, modal, or menu elevation token is established. The `none` writing and that no-elevation-token sentence are the source's own. Reading those representative `box-shadow: none` reports as the only elevation record, rather than as a depth scale for every KREAM surface, is a derived editorial implementation inference from the verified surfaces; it is not KREAM-authored or a separately published UI specification.

### Motion

No motion, transition, or interaction state was captured. The source names no duration token and no easing role. An exact curve may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework or vendor document — does not satisfy that condition. Naming those five evidence kinds as the promotion gate, refusing a partial confirmation, and keeping the source's "No motion, transition, or interaction state was captured" sentence, are derived editorial implementation inferences from the verified surfaces; they are not KREAM-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Live computed surface-use and loaded webfont | Visible text on all three supplied KREAM routes resolves first to **Pretendard Variable**. The collector records 1,026 visible uses across headings, body text, buttons, cards, inputs, list items, tabs, and badges; it also records a loaded FontFace match and 92 KREAM-hosted `woff2` subset URLs. `Pretendard Variable` is therefore the sole KREAM UI-family machine token. Token-set path `tokens.typography.family.ui`. |
| Official font documentation and license | Pretendard’s own documentation describes it as a cross-platform, multilingual neo-grotesque family with variable-font support. Its repository distributes the family under SIL Open Font License 1.1; that license permits commercial use, modification, and redistribution subject to its terms. This is font-author evidence, not KREAM brand-asset evidence. Docs: `https://github.com/orioncactus/pretendard/blob/main/packages/pretendard/docs/en/README.md`. License: `https://github.com/orioncactus/pretendard/blob/main/LICENSE`. |
| Declared-only assets | The bundle declares `HelveticaNeue`, `HelveticaNeueBold`, `NotoSansCJKkr` (including Light and Bold), `Roboto-Bold`, and `Roboto-Light`/`Roboto-Medium`, with legacy KREAM-hosted source URLs but zero visible observed usage. They remain declared-only and are not rendered as KREAM UI families. |
| System / unnamed class | `Roboto` is classified as a system-stack entry with zero visible uses. No substitution is authorized for any declared-only or system entry. |

Reading those four evidence-class rows as the source's own resolution table rather than as a published KREAM type specimen, and keeping the official-licence row from independently establishing product use, are derived editorial implementation inferences from the verified surfaces; they are not KREAM-authored or a separately published UI specification.

### Family

- **Current visible UI family:** `Pretendard Variable`
- **Token-set path:** `tokens.typography.family.ui`
- Do not replace unavailable or unobserved brand type with Pretendard Variable. It is canonical here only because computed visible use and loaded FontFace/source evidence agree. Do not reuse `HelveticaNeue`, `NotoSansCJKkr`, or `Roboto` entries or substitute them for Pretendard Variable.

Keeping Pretendard Variable as the sole UI-family token on the three captured commerce routes, treating it as canonical here only because computed visible use and loaded FontFace/source evidence agree, refusing to replace an unavailable or unobserved brand type with it, and refusing declared-only Helvetica Neue, Noto Sans, and Roboto entries as substitutes, are derived editorial implementation inferences from the verified surfaces; they are not KREAM-authored or a separately published UI specification.

### Type roles

YAML writes a unitless line height on the search role only (`1.21`). Source §3 writes the same roles with a px line height on that search role (`29px`) and `normal` on the others, plus a recovery-button row that is not a YAML typography key. Both writings stay. Unitless ratios stay ratios and are never converted to a replacement px (A1a). Pairing each YAML role to the token-set path named beside it, keeping YAML `use` strings verbatim in the Token-set use column, keeping the longer §3 surface-boundary column beside them, keeping the recovery-button row as a §3-only writing, keeping `tokens.typography.search.size` `24` off `tokens.spacing.xl: 24`, and keeping `tokens.typography.body.size` `16` off a spacing step, are derived editorial implementation inferences from the verified surfaces; they are not KREAM-authored or a separately published UI specification.

| Role | Family | Size | Weight | Line height | Token-set use | Surface boundary |
|---|---|---:|---:|---|---|---|
| Default live text | Pretendard Variable | 16 | 400 | normal | Observed default live-commerce text on home and search. | Repeated across home and search |
| Search filter control | Pretendard Variable | 13 | 400 | normal | Observed search-filter control text. | Search route only |
| Search input | Pretendard Variable | 24 | 700 | 1.21 / 29px | Observed search input text. | Search route only |
| Active search tab | Pretendard Variable | 16 | 700 | normal | Observed active search-tab label. | Search route only |
| Recovery home button | Pretendard Variable | 13 | 300 | 26px | (not a YAML typography key) | Recovery route only |

Token-set paths: `tokens.typography.body` · `tokens.typography.utility` · `tokens.typography.search` · `tokens.typography.tab-active`. The recovery-button row is a §3 writing only. `tokens.typography.search.size` `24` is not `tokens.spacing.xl: 24`. `tokens.typography.body.size` `16` is not a spacing step.

### Assets

- Catalog favicon: `https://www.google.com/s2/favicons?domain=kream.co.kr&sz=256`. Frontmatter records `logo.type: favicon`.
- Upstream Pretendard licence: SIL Open Font License 1.1 at `https://github.com/orioncactus/pretendard/blob/main/LICENSE`. This describes the font asset, not a KREAM brand asset.
- Declared-only `HelveticaNeue`, `HelveticaNeueBold`, `NotoSansCJKkr` (including Light and Bold), `Roboto-Bold`, and `Roboto-Light`/`Roboto-Medium` stay declared-only. `Roboto` stays a system-stack entry.

Reading the Google s2 favicon URL as a catalog identity pointer rather than a KREAM-hosted brand file, and reading the Pretendard licence as an upstream font-asset boundary rather than a KREAM brand asset, are derived editorial implementation inferences from the verified surfaces; they are not KREAM-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The source state contract, preserved here in full. Only component defaults and the route-selected search tab were captured. The following require a product-specific observation before specification:

| Category | Evidence status |
|---|---|
| Empty | no observed state |
| Loading | no observed state |
| Error | recovery-route component only; no error treatment captured |
| Success | no observed state |
| Skeleton | no observed state |
| Disabled | no observed state |

No hover, focus, pressed, disabled, dialog, menu, toast, error-form, responsive, or unobserved selected component variant is specified. The collector reports zero interactions and zero observed states. No hover, focus, pressed, dialog, toast, loading, responsive, or other interaction state is claimed from class names or static samples.

The following applicability note, every interactive-kind verdict, every applicability verdict, the reason given for either, the route-state reading of the active search tab, the no-fixed-height reading of the product-card shell, the recovery-not-primary-CTA reading, the refusal to attach a YAML primitive type that the token set does not record, labelling every §4 component `not in the token set`, the refusal to claim hover, focus, pressed, dialog, toast, loading, responsive, or other interaction state from class names or static samples, and the refusal to treat this as a complete state-coverage claim are a derived editorial implementation inference from the verified surfaces; they are not KREAM-authored or a separately published UI specification. Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. A generic `focus` observation in the source is not `focus-visible` treatment evidence; the source records that no focus state was captured, and that is not a color assigned to the `focus-visible` row. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted where this packet holds no value for that same canonical state. Absence of an observation is not a `not-applicable` reason. Loading, error, and success follow each control's product role rather than its primitive kind. This is not a complete state-coverage claim.

A `Primitive type` line is attached only when the source YAML records that type on that component. The YAML token set records `tokens.components: {}`. Every component below is a §4 writing and is labelled `not in the token set`. No YAML primitive type is invented.

### Pill filter button

- Role: search-route default pill filter
- Primitive type: not in the token set · Kind: interactive
- Background: `#f4f4f4`
- Text: `#4e4e4e`
- Radius: `30px`
- Padding: `0px 8px`
- Font: `13px / 400 / Pretendard Variable`
- Height: `30px`
- Use: Search-route default filter at `surface-3::[data-omd-capture="18"]` (`filter_button tint shape_pill`); 7 occurrences, no observed state transition.
- Observed: default only
- `#f4f4f4` is this control's fill. It is not `tokens.colors.surface` `#f5f5f5` and is not a YAML `tokens.colors` key. The radius `30px` is `tokens.rounded.search-filter-pill`; the height `30px` is this control's geometry.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured default on the search route; 7 occurrences |
| hover | applicable | Pointer-web filter; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A filter can be gated; visual treatment omitted |
| loading | not-applicable | A filter control selects a facet; it commits no operation in place |
| error | not-applicable | A filter control does not report a failed request on itself |
| success | not-applicable | Selecting a facet is not an operation this control reports as success |

### Outlined filter button

- Role: search-route default outlined filter
- Primitive type: not in the token set · Kind: interactive
- Background: `#ffffff`
- Text: `#4e4e4e`
- Border: `1px solid #f0f0f0`
- Radius: `6px`
- Padding: `0px 6px 0px 4px`
- Font: `13px / 400 / Pretendard Variable`
- Height: `30px`
- Use: Search-route default filter at `surface-3::[data-omd-capture="25"]` (`filter_button line shape_rect`); 9 occurrences, no observed state transition.
- Observed: default only
- The radius `6px` is `tokens.rounded.sm`. The `6px` and `4px` in the padding stay this control's padding, not spacing-step replacements.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured default on the search route; 9 occurrences |
| hover | applicable | Pointer-web filter; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A filter can be gated; visual treatment omitted |
| loading | not-applicable | A filter control selects a facet; it commits no operation in place |
| error | not-applicable | A filter control does not report a failed request on itself |
| success | not-applicable | Selecting a facet is not an operation this control reports as success |

### Search tab

- Role: home and search tab
- Primitive type: not in the token set · Kind: interactive
- Default text: `#222222`
- Default radius: `0px`
- Default padding: `13px 0px`
- Default font: `16px / 400 / Pretendard Variable`
- Default height: `44px`
- Default use: Home and search tab elements; representative `home::[data-omd-capture="13"]` (`tab`).
- Active text: `#222222`
- Active border: `2px solid #222222` on the bottom edge
- Active radius: `0px`
- Active font: `16px / 700 / Pretendard Variable`
- Active height: `44px`
- Active use: Active search tab at `surface-3::[data-omd-capture="14"]` (`router-link-active router-link-exact-active tab active`). This is an observed route state, not a hover or pressed variant.
- Observed: default, and the route-selected active appearance
- The active 700 weight is `tokens.typography.tab-active`. The `2px` bottom border is this tab's active geometry, not `tokens.spacing.xxs: 2`.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured default on home and search tab elements |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable tab; visual treatment omitted |
| disabled | applicable | A tab can be gated; visual treatment omitted |
| loading | not-applicable | A search tab selects a route; it commits no operation in place |
| error | not-applicable | A search tab does not report a failed request on itself |
| success | not-applicable | Reaching the selected route is not an operation this tab reports as success |

### Search text input

- Role: search text input
- Primitive type: not in the token set · Kind: interactive
- Text: `#000000`
- Radius: `0px`
- Padding: `0px 13px 0px 1px`
- Font: `24px / 700 / Pretendard Variable`
- Height: `29px`
- Use: Search input at `surface-3::[data-omd-capture="12"]` (`input_search show_placeholder_on_focus`). No focus state was captured.
- Observed: default only
- `#000000` is this input's text. It is catalog `primary_color` as an identity field, and it is not `tokens.colors.primary` `#222222`. The `24px` size is `tokens.typography.search.size`; the `29px` height is this control's geometry and the §3 line-height writing beside YAML `1.21`.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured default on the search route |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable field; visual treatment omitted |
| disabled | applicable | An input can be gated; visual treatment omitted |
| loading | not-applicable | The field accepts a query; it does not commit an operation whose in-progress state it could report on itself |
| error | applicable | A form field can fail validation; visual treatment omitted |
| success | not-applicable | The field does not complete a search on itself |

### Search product-card shell

- Role: search-route linked product-card shell
- Primitive type: not in the token set · Kind: interactive
- Text: `#222222`
- Radius: `6px`
- Padding: `0px 0px 10px`
- Font: `16px / 400 / Pretendard Variable`
- Use: Search-route linked card at `surface-3::[data-omd-capture="37"]` (`product_card`); captured heights vary from 319px to 340px, so no fixed-height token is asserted.
- Observed: default only
- The radius `6px` is `tokens.rounded.sm`. The linked-card reading is the source's own "Search-route linked card" label.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured default on the search route |
| hover | applicable | Pointer-web destination link; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable link; visual treatment omitted |
| disabled | applicable | A destination link can be gated; visual treatment omitted |
| loading | not-applicable | A destination product link opens a listing; it commits no operation in place |
| error | not-applicable | A destination product link does not report a failed request on itself |
| success | not-applicable | Reaching the listing is not an operation this card reports as success |

### Home recovery button

- Role: recovery-route home action
- Primitive type: not in the token set · Kind: interactive
- Text: `#000000`
- Border: `1px solid rgba(0,0,0,0.6)`
- Radius: `8px`
- Font: `13px / 300 / Pretendard Variable`
- Height: `36px`
- Use: Recovery route action at `surface-2::[data-omd-capture="12"]` (`button-home`). Its route-local recovery context must not be generalized as a primary commerce CTA.
- Observed: default only
- `#000000` is this control's text. It is not `tokens.colors.primary` `#222222`. The radius `8px` is `tokens.rounded.recovery`. The 13px / 300 / 26px type metrics are the §3 recovery-button row.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured default on the recovery route |
| hover | applicable | Pointer-web destination action; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A recovery action can be gated; visual treatment omitted |
| loading | not-applicable | A recovery home action opens a destination; it commits no operation in place |
| error | not-applicable | A destination recovery action does not report a failed request on itself |
| success | not-applicable | Reaching the destination is not an operation this button reports as success |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

Only route-local dimensions are retained: the home collector found a 1188px-wide, 475px-high merchandising panel and the search collector found 238px-wide product-card shells with variable observed heights. The search input was 468px wide in this desktop sample. No responsive breakpoint, grid-column count, sticky behavior, or global container width is asserted from one desktop capture.

The supplied collector evidence is desktop-only. No breakpoint, mobile layout, touch target, or adaptive navigation behavior is specified.

The 1188px × 475px merchandising panel, the 238px-wide product-card shells, and the 468px-wide search input stay on the surfaces that established them. Reading those figures under the source's own "Only route-local dimensions are retained" and "desktop-only" sentences, rather than as a breakpoint system, is a derived editorial implementation inference from the verified surfaces; it is not KREAM-authored or a separately published UI specification.

<!-- design-md:section content-locales -->
## 6. Content & Locales

KREAM’s official service explanations are operational and sequential: search or select an item, buy immediately or bid, then move the matched item through inspection and delivery. The same material describes authenticated warehouse inventory as eligible for rapid shipping. This is official service language, not a complete catalog of public UI microcopy.

| Do | Don't |
|---|---|
| State the transaction step and condition clearly. | Attribute unobserved checkout or error copy to KREAM. |
| Separate immediate purchase from a bid. | Treat campaign headlines as a system-wide voice rule. |
| Explain inspection and delivery as distinct stages. | Convert service-policy language into a color or component token. |

Voice samples, kept byte-exact:

- “즉시 구매 혹은 구매 입찰” — official buying-flow label.
- “검수를 진행” — official buying-flow stage.
- “당일 출고” — official rapid-shipping outcome for qualifying stored inventory.

The operational-and-sequential service explanations, the warehouse rapid-shipping outcome, the three official labels, and the source's own "not a complete catalog of public UI microcopy" limit are the source's own. Classifying that reading as official service language rather than as a complete product-microcopy guide is a derived editorial implementation inference from the verified surfaces; it is not KREAM-authored or a separately published UI specification.

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

These decisions are unnamed values, not permissions to invent. The list names only fields the source itself left unnamed. Reading the list as a catalog of those unnamed values rather than as coverage of domains the source never named is a derived editorial implementation inference from the verified surfaces; it is not KREAM-authored or a separately published UI specification.

- hover, pressed, focus, disabled, dialog, menu, toast, error-form, empty, loading, success, and skeleton visual treatments
- error treatment on the recovery-route component (the component is present; the treatment is not)
- reusable duration, easing, and motion values
- breakpoint, mobile layout, touch target, adaptive navigation, grid-column count, sticky behavior, and global container width
- semantic price, status, gain, or loss roles for product-content `#00cc44` and `#f15746`
- official public design-system page
- unobserved checkout or error copy
- getdesign.md / styles.refero.design records (the source names both lookups as no usable record)
