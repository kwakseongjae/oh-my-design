# Hogangnono Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Hogangnono (호갱노노) is Korea's #1 apartment real-estate transparency platform — map-first, data-honest, free of paid-listing distortion. This contract covers the first-party web surface the source inspected for tokens: the product homepage at `https://hogangnono.com`, together with the desktop CSS bundle at `https://static.hogangnono.com/dist/2.5.0.30/08498da545/web/desktop.css` and the reset stylesheet at `https://static.hogangnono.com/reset.desktop.css`. The source also records an iOS/Android mobile-app layout — a full-screen map with a pull-up results list — and names the App Store listing at `https://apps.apple.com/kr/app/호갱노노/id1084799742` as a brand source. Every value stays attached to the surface that established it. Keeping values attached to the surface that established them, and treating the App Store listing as a named brand source that does not supply the computed interface tokens below, are derived editorial implementation inferences from the verified surfaces; they are not Hogangnono-authored or a separately published UI specification.

Hogangnono pairs a bold indigo-violet primary (`#584de4`) with a crisp, predominantly white canvas to signal data-clarity and trustworthiness. The palette is deliberately restrained: brand purple carries every interactive affordance while the neutral grayscale hierarchy handles all structural content, keeping the map and price data visually dominant. The overall feel is pragmatic and modern — closer to a civic data tool than a lifestyle product — with subtle elevation (gentle card shadows, a floating map-control layer) and minimal decorative flourish. Typography is set exclusively in Pretendard. Motion is conservative: 0.3 s transitions on colour and transform. The hex values, the Pretendard face, the 0.3 s duration, and the elevation treatments in this paragraph are recorded. The characterizations built on them — data-clarity and trustworthiness, civic data tool rather than lifestyle product, pragmatic and modern, map and price as visually dominant — are a derived editorial implementation inference from the verified surfaces; they are not Hogangnono-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. Hogangnono — literally "no more being a fool (호갱)" — was born in 2015 when Kakao developer Shim Sang-min discovered that Korea's property portals were listing phantom prices inflated by paid advertising, leaving buyers without reliable data for the most important financial decision of their lives. His team of three built the first version in weeks, pulling official transaction records from the Ministry of Land, Infrastructure and Transport and plotting every deal on a map. The name is both a promise and a provocation: honest information exists, and you deserve it. From that anti-rip-off origin, Hogangnono evolved into Korea's most comprehensive proptech platform, layering 3D sunlight modelling, school-district mapping, reconstruction auction tracking, and resident reviews onto its price-transparency core. Acquired by Zigbang in 2018, it has retained its distinct identity and radical data-openness ethos while scaling to over 2 million registered users. The founder's stated mission — "advancing the real estate industry through IT by providing honest information" — remains the product's north star. The brand's competitive edge is deliberate simplicity. Where legacy portals bury users in sponsored content, Hogangnono surfaces the single truth the buyer needs: what did this apartment actually sell for, and when? Every design decision — the prominent price display, the map-first layout, the refusal to accept payment for listings — flows from that original commitment to be the side of the user. The years, founder, ministry source, acquisition, user count, mission sentence, capability list, and that design-decision sentence are the source's own narrative facts; they do not by themselves supply interface tokens. Classifying that founding-and-acquisition narrative as context that does not by itself supply interface tokens is a derived editorial implementation inference from the verified surfaces; it is not Hogangnono-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=4 lang=en -->
### Primary tasks

Selecting these four as the product's primary tasks is a derived editorial implementation inference from the verified surfaces; it is not Hogangnono-authored or a separately published UI specification. Each names a label or surface the source records. They do not come from the source's persona section.

- Search apartment complexes from the left-panel search and the filter-chip strip next to the map.
- Read official transaction prices in `#4337de` on listing cards.
- Open an apartment detail card while the map stays visible.
- Send an inquiry — success copy "문의가 전송되었어요".
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source labels its named figures as illustrative archetypes, not real users, so those biographies are dropped rather than promoted, and no name, age, or city is carried into this document or its sidecar. What the source independently records is the audience grouping those archetypes were said to be informed by: buyers and renters seeking official transaction data. Product language, iconography, and CTA copy orient around protecting the purchaser. Reading those groups as this product's audience is a derived editorial implementation inference from the verified surfaces; it is not Hogangnono-authored or a separately published UI specification.

### Distinctive traits

- Indigo-violet primary (`#584de4`) on every interactive affordance, with price text in a deeper indigo (`#4337de`)
- Neutral grayscale hierarchy (`#333333` / `#4F4F4F` / `#6E6E6E` / `#B3B3B3`) for structural content
- Pretendard exclusively, 16px / 400 / line-height 1.3 for body, 17px for button labels
- Split-panel desktop: 354–375 px left list beside a full-height map
- Gentle card lift and a floating map-control layer; coloured indigo shadow only on the important primary CTA
- Filter chips at 8px radius; interactive pill buttons at 6px radius

These six traits, and the readings carried inside them — brand purple as the interactive carrier, map and price as visually dominant, civic rather than lifestyle — are a derived editorial implementation inference from the verified surfaces; they are not Hogangnono-authored or a separately published UI specification. Each names the values it rests on.

### Principles

These five items are a derived editorial implementation inference from the verified surfaces; they are not Hogangnono-authored or a separately published UI specification. The source states them in its own Principles section together with the UI implication it draws from each.

1. **Data honesty above commercial convenience.** Every number shown is an official transaction record, never an estimate or a sponsored suggestion. *UI implication:* price figures must use the dedicated price-accent colour (`#4337de`) and link directly to source data; never round or approximate displayed prices.
2. **Simplicity is the feature.** Complex market data must be made immediately readable to a non-expert buyer in under 10 seconds. *UI implication:* reduce visual layers; lead with the price and date, subordinate all secondary data; avoid multi-column data tables on first-load views.
3. **The user is always the buyer, never the seller.** Product language, iconography, and CTA copy orient around protecting the purchaser. *UI implication:* write button labels and tooltips from the buyer's intent ("확인하기", "비교하기") not the agent's interest ("문의하기" should feel secondary).
4. **Speed of understanding, not speed of transaction.** Hogangnono earns trust by helping users slow down and compare before committing. *UI implication:* error and warning states should be prominent and never dismissible without acknowledgment; never autofill or pre-select high-commitment actions.
5. **Map is the primary canvas.** Spatial context — neighbourhood, commute, school zone — is inseparable from price judgment. *UI implication:* the map must always be visible or reachable in one tap; panels and overlays must not cover the full viewport.

### Application rules

The source states these seven as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not Hogangnono-authored or a separately published UI specification.

- Use `#584de4` for all primary interactive states — buttons, links, active borders, focus indicators.
- Pair price data with `#4337de` (deep indigo) for sale prices, `#3DAB6A` for upward trends, `#EE3A3A` for downward trends.
- Keep the map canvas uncluttered; restrict non-essential UI to the side panel.
- Use Pretendard at 16 px / 400 for body copy and 17 px for button labels.
- Apply the 6 px radius to interactive pill buttons; use 8 px radius for header filter chips.
- Show skeleton/loading states for list items while data loads; never block the map.
- Use `#f3f4fc` tint backgrounds for secondary CTA buttons to maintain hierarchy under the primary fill.

### Avoid

The source states these six as its Don't list; they are kept as its rules, reasons included. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not Hogangnono-authored or a separately published UI specification.

- Don't use `#4d55b2` (nav variant) as the primary for new interactive elements — it is a legacy dark-mode nav colour.
- Don't add heavy decorative gradients or large hero images; the product is data-first.
- Don't place multiple filled-primary CTAs on the same screen; reserve the fill for a single dominant action.
- Don't use font-sizes below 11 px for any visible text.
- Don't override the filter chip radius to 0 px (that is reserved for the full-width bottom CTA only).
- Don't use the price-accent `#4337de` for non-price content; it will confuse the semantic colour signal.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Each role below pairs a name with the value and the use the source records. Token-set keys keep the YAML lowercase hex. Source §2 spells several of the same greys and accents in mixed case; both forms are kept on the row. Calling `#584de4` the interactive carrier, calling `#4337de` the price-only accent, and calling the greys a structural hierarchy, are derived editorial implementation inferences from the verified surfaces; they are not Hogangnono-authored or a separately published UI specification.

Primary

- **Primary** (`#584de4`): interactive elements, primary CTA fill, focus rings, active filter borders, links. Token-set key `tokens.colors.primary`.
- **Primary Variant (Nav)** (`#4d55b2`): legacy navigation bar background, list headers, browser scene header. Token-set key `tokens.colors.primary-nav`. The source footer records a genuine conflict: the theme-color meta is `#4d55b2` and CSS `--primary` is `#584de4`. Both stay; `#4d55b2` is the darker legacy nav background, `#584de4` is the design-system primary for interactive elements.
- **Primary Tint** (`#f3f4fc`): tint button background, selected-state surface, light hover wash. Token-set key `tokens.colors.primary-tint`.
- **Primary Light** (`#eeedfc`): primary100, subtle chip backgrounds, info chip fills. Token-set key `tokens.colors.primary-light`.
- **Price Accent** (`#4337de`): apartment listing price text. Token-set key `tokens.colors.price-accent`.

Neutral and surface

- **Gray 900 / heading** (`#333333`): primary body text, headings. Token-set key `tokens.colors.heading`.
- **Gray 800 / body** (`#4f4f4f` / `#4F4F4F`): secondary text, icon default. Token-set key `tokens.colors.body`.
- **Gray 700 / caption** (`#6e6e6e` / `#6E6E6E`): tertiary / caption text. Token-set key `tokens.colors.caption`.
- **Gray 500 / muted** (`#b3b3b3` / `#B3B3B3`): placeholder, disabled text. Token-set key `tokens.colors.muted`.
- **Gray 300 / border** (`#e5e5e5` / `#E5E5E5`): dividers, border default. Token-set key `tokens.colors.border`.
- **Gray 200 / surface-chip** (`#f3f3f3` / `#F3F3F3`): chip default background, subtle fills. Token-set key `tokens.colors.surface-chip`.
- **Gray 100 / canvas** (`#f9f9f9` / `#F9F9F9`): page background, list row alternates. Token-set key `tokens.colors.canvas`.
- **White** (`#ffffff`): card surface, input background. Token-set key `tokens.colors.white`.

Status and finance

- **Blue / info** (`#3e8ce8` / `#3E8CE8`): informational highlights, loan/financial accent. Token-set key `tokens.colors.info`.
- **Green / success** (`#3dab6a` / `#3DAB6A`): positive / up-trend price indicator. Token-set key `tokens.colors.success`.
- **Red / danger** (`#ee3a3a` / `#EE3A3A`): negative / down-trend price, error state. Token-set key `tokens.colors.danger`.

### Spacing

Token-set path `tokens.spacing`, unitless steps as the YAML recorded them:

| Step | Value | Token-set path |
|---|---:|---|
| xs | 4 | `tokens.spacing.xs` |
| sm | 8 | `tokens.spacing.sm` |
| md | 12 | `tokens.spacing.md` |
| base | 16 | `tokens.spacing.base` |
| lg | 24 | `tokens.spacing.lg` |
| xl | 32 | `tokens.spacing.xl` |
| xxl | 48 | `tokens.spacing.xxl` |
| section | 64 | `tokens.spacing.section` |

The source also names an 8 px spacing unit as the layout base, 8 px gaps between filter chips, and 5 px margin between badge tags. Those component measurements stay on those components. `tokens.spacing.md: 12` is not `tokens.rounded.lg: 12`. `tokens.spacing.xs: 4` is not `tokens.rounded.sm: 4`. `tokens.spacing.base: 16` is not the 16px body size. `tokens.spacing.xxl: 48` is not the 48 px filter-chip strip or the 48 px sidebar header. `tokens.spacing.section: 64` is not a type size. Keeping each number on its own key path, rather than treating a shared numeral as the same token, is a derived editorial implementation inference from the verified surfaces; it is not Hogangnono-authored or a separately published UI specification.

### Shape

Token-set path `tokens.rounded`, unitless steps as the YAML recorded them:

| Step | Value | Token-set path |
|---|---:|---|
| sm | 4 | `tokens.rounded.sm` |
| md | 6 | `tokens.rounded.md` |
| lg | 12 | `tokens.rounded.lg` |
| full | 9999 | `tokens.rounded.full` |

`tokens.rounded.md: 6` is the interactive pill-button step. It is not the apartment-detail card's 3px radius, the filter chip's 8px radius, the modal overlay's 10 px radius, or the tooltip's 5 px radius — those sit on those components. `tokens.rounded.sm: 4` is the FAB step and is not `tokens.spacing.xs: 4`. `tokens.rounded.lg: 12` is not `tokens.spacing.md: 12`. `tokens.rounded.full: 9999` is a step. Keeping those local radii off the YAML scale is a derived editorial implementation inference from the verified surfaces; it is not Hogangnono-authored or a separately published UI specification.

### Elevation

The source records four lift levels plus a tooltip and a modal scrim. Reading that stack as map-first depth — flat canvas, a gentle list-panel lift, a raised FAB over the map, and a coloured indigo shadow only on the important primary CTA — is a derived editorial implementation inference from the verified surfaces; it is not Hogangnono-authored or a separately published UI specification.

| Level | Treatment | Use |
|---|---|---|
| Level 0 — flat canvas | white / gray-100 background, no shadow | Page canvas |
| Level 1 — card / list panel | `box-shadow: 0px 2px 2px rgba(0,0,0,0.075), -1px 1px 1px rgba(0,0,0,0.03), 1px 1px 1px rgba(0,0,0,0.03)` | Subtle lift for the detail panel |
| Level 2 — floating map controls | `box-shadow: 4px 2px 12px 0px rgba(0,0,0,0.24)` | Raised FAB buttons over the map layer |
| Level 3 — primary CTA (important) | `box-shadow: 0 4px 5px 0 rgba(89,99,217,0.3)` | Coloured indigo shadow on the most prominent action |
| Level 4 — modal / overlay | `background-color: #000; opacity: 0.3` scrim + centred white card; `z-index: 15` | Modal overlay |
| Tooltip | dark `#3a3a3a` background, 5 px radius, `z-index: 20` | Tooltip |

Token-set path `tokens.shadow.button`: `rgba(89,99,217,0.3) 0px 4px 5px 0px`. That YAML form and the Level 3 `0 4px 5px 0 rgba(89, 99, 217, 0.3)` spelling are the same shadow on two writings; neither replaces the other.

The apartment detail card also records `0px 2px 2px rgba(0, 0, 0, 0.075)` on its own container. That is the card's shadow, not a second writing of the Level 1 list-panel stack.

### Motion

The source records durations, CSS easing keywords, named keyframes, and one Photoswipe-attributed curve. Treating those records as a motion contract for the inspected surfaces, rather than as a separately published Hogangnono motion specification, is a derived editorial implementation inference from the verified surfaces; it is not Hogangnono-authored or a separately published UI specification.

Duration scale:

| Token | Value | Use |
|---|---|---|
| Micro | 200 ms | hover / colour swap |
| Standard | 300 ms | panel slide / button bg |
| Expand | 350 ms | sheet / modal open |
| Map pan / transform | 350 ms–2 s | depending on distance |

Easing, as the source states it:

- Default transitions: `ease` (colour, background-color: 0.3s ease)
- Panel slide: `transform 0.35s` (implicit ease)
- Map zoom: `transform 2–3s` (linear, large tile area)
- Overlay fade: `opacity 0.2s linear` (dismiss) / `opacity 0.3s` (appear)
- Photo gallery: `cubic-bezier(0.4, 0, 0.22, 1)` (Photoswipe standard)

The Photoswipe curve stays attributed to Photoswipe. It is not a Hogangnono token-set easing step. Classing that curve as Photoswipe-attributed and not a Hogangnono token-set easing step is a derived editorial implementation inference from the verified surfaces; it is not Hogangnono-authored or a separately published UI specification.

Named keyframes the source records:

- Map bubble entry: `fadeIn` (0 % opacity → 100 %) at 200 ms
- Bottom-sheet open: `bottomBoundIn` (translate Y 50 % → 0, scale 0.6 → 1) at 300 ms
- Modal entry: `topBoundIn` (translate Y −50 % → 0, scale 0.6 → 1) at 300 ms

An exact curve may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework or vendor document — does not satisfy that condition.

Motion rules, as the source states them:

- Never animate layout-shifting properties (width, height reflows) in real-time data updates; use opacity/transform only.
- Price numbers should update instantly (no count-up animation) to preserve data-honesty perception.
- Map bubble entry uses `fadeIn` at 200 ms.
- Bottom-sheet open uses `bottomBoundIn` at 300 ms.
- Modal entry uses `topBoundIn` at 300 ms.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | The homepage and the App Store listing state the product and the Korean name 호갱노노. They do not publish a universal current typography token or a separately issued type specimen. That "no published type token" reading is a derived editorial implementation inference from the verified surfaces; it is not Hogangnono-authored or a separately published UI specification. |
| Live computed surface-use | The source records visible UI type as Pretendard, with fallback Apple SD Gothic Neo → NanumGothic → sans-serif. |
| Official distributed asset | No Hogangnono-exclusive distributed type family was verified. That "no exclusive distributed family" reading is a derived editorial implementation inference from the verified surfaces; it is not Hogangnono-authored or a separately published UI specification. |
| Declared-only | The fallback members `Apple SD Gothic Neo`, `NanumGothic`, and `sans-serif` are declared. They are fallbacks, not a second brand face. Classing those fallback members as not the brand face is a derived editorial implementation inference from the verified surfaces; it is not Hogangnono-authored or a separately published UI specification. |
| License | This record does not establish a Hogangnono font-license notice for Pretendard. Pretendard is an upstream face, not a Hogangnono-owned brand asset; that classification is a derived editorial implementation inference from the verified surfaces, and it is not Hogangnono-authored or a separately published UI specification. |
| Outside these captures | Typography on surfaces beyond the token-inspected homepage and the mobile-app layout the source records sits outside this contract. That outside-this-contract reading is a derived editorial implementation inference from the verified surfaces; it is not Hogangnono-authored or a separately published UI specification. |

### Family

- **Current visible UI family:** `Pretendard` — Token-set path `tokens.typography.family.sans`.
- **Fallback:** `Apple SD Gothic Neo, NanumGothic, sans-serif` — Token-set path `tokens.typography.family.fallback`.

A fallback member of a stack is never presented as the brand face. Do not replace Pretendard with a system substitute. That fallback prohibition is a derived editorial implementation inference from the verified surfaces; it is not Hogangnono-authored or a separately published UI specification.

### Type roles

| Role | Font | Size | Weight | Line height | Tracking | Token-set use |
|---|---|---:|---:|---:|---:|---|
| Large modal heading | Pretendard | 30px | 700 | 1.33 (40px) | 0 | Large modal heading |
| Section headings | Pretendard | 22px | 700 | — | 0 | Section headings |
| List item titles | Pretendard | 17px | 600 | — | 0 | List item titles |
| Apartment listing price | Pretendard | 19px | 500 | — | 0 | Apartment listing price display |
| Base body text | Pretendard | 16px | 400 | 1.3 | 0 | Base body text |
| Caption / badge | Pretendard | 13px | 400 | — | 0 | Caption / badge |

Unitless line heights stay ratios: `1.33` on Large modal heading and `1.3` on Base body text. The parenthetical `40px` on the modal heading is the source §3 spelling (`30px / 700 / line-height 40px`), not a replacement of the YAML ratio `1.33`. No custom letter-spacing override is applied at root; tracking defaults to 0.

Source §3 also records ranges that are not YAML keys. They stay beside the token-set rows; they are not collapsed into the YAML singles. Keeping the YAML singles and the §3 ranges on separate readings, and keeping the parenthetical 40px as the source §3 spelling rather than a replacement of the YAML ratio 1.33, is a derived editorial implementation inference from the verified surfaces; it is not Hogangnono-authored or a separately published UI specification.

- Section heading: 18–22px / 600–700
- List item title: 15–17px / 600
- Body / description: 14–16px / 400
- Caption / badge: 11–13px / 400
- Button (primary full): 17px / default weight
- Button (secondary tint): 17px / default weight

### Assets

- Favicon pointer the source frontmatter records: `https://www.google.com/s2/favicons?domain=hogangnono.com&sz=256` (`logo.type: favicon`). That URL is an identity pointer, not a Hogangnono-hosted brand file. Reading it as an identity pointer rather than a hosted brand asset is a derived editorial implementation inference from the verified surfaces; it is not Hogangnono-authored or a separately published UI specification.
- Do not replace the map canvas or official transaction figures with invented brand-color decoration or lifestyle/hero photography.

<!-- design-md:section components-states -->
## 4. Components & States

### How applicability is decided here

The source declares each token-set component with a primitive type (`button`, `badge`, `card`) and a value set; those types are preserved per component. Applicability below is judged by each control's role, never by whether a visual treatment for that state happens to be recorded: where the source supplies no treatment for an applicable state, the value is omitted and the state stays applicable. `not-applicable` is used only where the control's role makes the state meaningless — a destination or secondary action that commits no operation in place, a filter chip that only toggles, a map control with no commit, or a display element with no action at all — and the reason given is always that semantic one. Where the source supplies no interaction evidence for a container at all, its kind and applicability map are omitted rather than decided.

The source records a focus treatment on the modal phone input (`border-bottom: 2px solid #584de4`) and names focus indicators among primary interactive states. Generic `focus-visible` chrome is not invented for the other controls. `focus-visible` stays applicable on interactive controls; unobserved visual treatments are omitted.

The role-based decision procedure above, every interactive-kind verdict, every applicability verdict, and the reason given for either is a derived editorial implementation inference from the verified surfaces; they are not Hogangnono-authored or a separately published UI specification. This is not a complete state-coverage claim.

### Primary Fill Button

- Role: primary fill action — the single dominant commit on a screen (retry, inquiry, subscription eligibility)
- Primitive type: `button` · Kind: interactive
- Background: `#584de4`
- Text: `#ffffff`
- Radius: 6px
- Height: 50px
- Font: 17px
- Token-set font record: `17px`
- Token-set use: `Primary fill action, 50px tall`
- Disabled treatment the source records: background `#f0f0f0`, text `#dadada`, radius 6px, height 50px. Token-set use for that state: `Disabled primary state`.
- Fill Important (with shadow): same fill, plus `box-shadow: 0 4px 5px 0 rgba(89, 99, 217, 0.3)`. Token-set path `tokens.shadow.button`.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable commit control; visual treatment omitted |
| disabled | applicable | Source records `#f0f0f0` / `#dadada` on this control |
| loading | applicable | Retry and inquiry are in-place commits; visual treatment omitted |
| error | applicable | A failed retry or inquiry can be reported on this control; visual treatment omitted |
| success | applicable | Inquiry completion is a commit outcome; visual treatment omitted |

### Secondary Tint Button

- Role: modal secondary / tint action — hierarchy under the primary fill, no captured in-place commit
- Primitive type: `button` · Kind: interactive
- Background: `#f3f4fc`
- Text: `#584de4`
- Radius: 6px
- Height: 50px
- Font: 17px
- Token-set font record: `17px`
- Token-set use: `Secondary tint button`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A secondary action can be gated; treatment omitted |
| loading | not-applicable | The tint control is a modal secondary; it commits no operation in place |
| error | not-applicable | The tint control commits no operation in place |
| success | not-applicable | The tint control commits no operation in place |

### Outline Button

- Role: empty outline action
- Primitive type: not in the token set · Kind: interactive
- Background: `#ffffff`
- Border: 0.5px solid `#cecfdc`
- Radius: 6px

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | An outline action can be gated; treatment omitted |
| loading | not-applicable | The outline control commits no operation in place |
| error | not-applicable | The outline control commits no operation in place |
| success | not-applicable | The outline control commits no operation in place |

### Filter Chip

- Role: header filter toggle
- Primitive type: not in the token set · Kind: interactive
- Default: background `#ffffff`, border 1px solid `#F3F3F3`, radius 8px, height 32px, font 14px, color `#333333`
- Active / Applied: background `#ffffff`, border 1px solid `#584de4`, text `#584de4`, radius 8px, height 32px, font 14px
- Selected: background `#eef0f3`, border 1px solid `#584de4`, text `#584de4`, radius 8px, height 32px
- The 8px radius is this chip's local geometry. It is not `tokens.rounded.md: 6` and not `tokens.rounded.lg: 12`.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web chip; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable toggle; visual treatment omitted |
| disabled | applicable | A filter option can be gated; treatment omitted |
| loading | not-applicable | The chip only toggles a filter; it commits no operation in place |
| error | not-applicable | The chip commits no operation in place |
| success | not-applicable | The chip commits no operation in place |

### Search Input

- Role: map-search field
- Primitive type: not in the token set · Kind: interactive
- Background: `#ffffff`
- Border: 1px solid `#CECFDC`
- Radius: 6px
- Height: 50px
- Font: 16px
- Padding: 0 15px

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web field; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable field; visual treatment omitted |
| disabled | applicable | A search field can be gated; treatment omitted |
| loading | not-applicable | The field holds a query; it does not commit a transaction |
| error | applicable | Form field; visual treatment omitted |
| success | not-applicable | The field does not complete an operation on itself |

### Modal Input

- Role: login phone field
- Primitive type: not in the token set · Kind: interactive
- Background: `#ffffff`
- Border: 0
- Border-bottom: 2px solid `#e5e5e5`
- Height: 45px
- Font: 20px / 700
- Placeholder: `#dadada`
- Focus border-bottom: 2px solid `#584de4`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web field; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable field; visual treatment omitted |
| disabled | applicable | A phone field can be gated; treatment omitted |
| loading | not-applicable | The field holds a value; it does not commit a transaction |
| error | applicable | Form field; visual treatment omitted |
| success | not-applicable | The field does not complete an operation on itself |

### Map Control Button

- Role: floating map control
- Primitive type: not in the token set · Kind: interactive
- Background: `#ffffff`
- Radius: 4px
- Shadow: `4px 2px 12px 0px rgba(0, 0, 0, 0.24)`
- Width: 38px
- Height: 38px
- Font: 14px
- The 4px radius is this control's local geometry and the `tokens.rounded.sm: 4` step. It is not `tokens.spacing.xs: 4`.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web map control; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A map control can be gated; treatment omitted |
| loading | not-applicable | The FAB repositions map tools; it commits no operation in place |
| error | not-applicable | The FAB commits no operation in place |
| success | not-applicable | The FAB commits no operation in place |

### Apartment Detail Card

- Role: listing-detail container
- Primitive type: `card`
- Token-set use: `Card surface with gentle elevation`
- YAML token-set record: background `#ffffff`, radius 6
- Source §4 container: background `#ffffff`, border 1px solid `#cecece`, radius 3px, shadow `0px 2px 2px rgba(0, 0, 0, 0.075)`
- Price text: `#4337de`, 19px / 500
- Row divider: border-bottom 1px solid `#f2f2f2`
- The YAML 6px radius and the §4 3px radius stay on their own writings. Neither replaces the other. YAML `tokens.components.card` radius 6 is not `tokens.rounded.md: 6`.
- Kind and applicability map omitted — the source supplies no interaction evidence for the container (C4).

### Info Chip

- Role: info chip / subtle fill
- Primitive type: `badge`
- Kind: non-interactive — a status fill, not a control
- Background: `#eeedfc`
- Text: `#584de4`
- Token-set use: `Info chip / subtle fill`

### Badge Up

- Role: positive up-trend price indicator
- Primitive type: `badge`
- Kind: non-interactive — a trend mark, not a control
- Text: `#3dab6a`
- Token-set use: `Positive up-trend price indicator`

### Badge Down

- Role: negative down-trend price indicator
- Primitive type: `badge`
- Kind: non-interactive — a trend mark, not a control
- Text: `#ee3a3a`
- Token-set use: `Negative down-trend price indicator`

### Surface state contract

The source's state contract, preserved with its values and copy. The source's own evidence note assigns Tier 1 sources to the HTML and CSS bundles and assigns none of those sources specifically to this state section as per-control computed observations; the treatments below are therefore a derived editorial implementation inference from the verified surfaces rather than measured per-control observations, and they are not Hogangnono-authored or a separately published UI specification.

- **Empty (no search results):** Neutral gray illustration + short message "조건에 맞는 매물이 없어요" (No listings match your conditions); suggest relaxing one filter.
- **Loading (list skeleton):** Row skeletons in `#F3F3F3` — title bar 60 % width, price bar 40 % width, caption bar 80 % width; animated shimmer left-to-right at 1.3 s.
- **Error — network failure:** Inline banner in `#EE3A3A` tint background with red icon + "데이터를 불러오지 못했어요 — 다시 시도해 주세요" (Couldn't load data — please try again); retry button in primary fill.
- **Error — no price data for complex:** Greyed-out price slot with tooltip "공식 거래 기록이 없어요" (No official transaction records); never shows a fabricated figure.
- **Success — inquiry sent:** Toast notification with `#3DAB6A` check icon + "문의가 전송되었어요" (Your inquiry was sent); auto-dismisses after 3 s.
- **Skeleton — map bubbles loading:** Price bubbles render as `#E5E5E5` rounded pills at their geo-coordinates; replaced with real figures once API responds.
- **Disabled — subscription eligibility blocked:** CTA button in `background #f0f0f0; color #dadada` with helper text explaining missing eligibility condition below.
- **Active filter applied:** Filter chip border and text switch to `#584de4`; chip background stays white to signal "on" state without heavy fill.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The source records a split-panel desktop and a bottom-sheet mobile-app layout. Reading that pair as map-first — the list lives beside or under the map, and overlays must not cover the full viewport — is a derived editorial implementation inference from the verified surfaces; it is not Hogangnono-authored or a separately published UI specification.

- **Split-panel desktop:** fixed 354–375 px left panel (search + results list) + full-height map canvas on the right; no traditional responsive grid.
- **Panel interior:** vertical stack — search bar → filter chip strip (48 px) → scrollable result list.
- **Card list items:** 12 px vertical padding, 20 px horizontal, full-width with 1 px `#f2f2f2` bottom divider.
- **Modal overlay:** centred 510 px wide card with 35 px padding, 10 px radius, at 50 % viewport position.
- **Sidebar:** fixed-width notification centre; inner header 48 px tall.
- **Spacing unit:** 8 px base; gaps of 8 px between filter chips, 5 px margin between badge tags.

Token-set spacing restated on its own path: `xs 4 · sm 8 · md 12 · base 16 · lg 24 · xl 32 · xxl 48 · section 64`. Token-set shape restated on its own path: `sm 4 · md 6 · lg 12 · full 9999`. Those restatements are the YAML scales, not the 3px / 8px / 10 px component radii. Keeping the YAML scale restatement off those local radii is a derived editorial implementation inference from the verified surfaces; it is not Hogangnono-authored or a separately published UI specification.

The source's desktop layout is a fixed-width split panel (354–375 px sidebar + map); it does not collapse to a fluid grid on narrow windows. The mobile app (iOS/Android) uses a bottom-sheet paradigm with full-screen map and a pull-up results list. Filter chip strip scrolls horizontally with hidden scrollbar (`overflow: scroll hidden; -webkit-scrollbar: none`). Map FAB controls reposition via absolute/fixed positioning relative to the map container; they do not reflow. Retina assets served via `(-webkit-min-device-pixel-ratio: 2)` media query switching sprite URLs. Modal overlay is fixed-position full viewport; the centred card is 510 px wide with pixel-perfect negative margins (no vw-based centering).

Stating those responsive behaviors as the source wrote them, rather than as a measured cross-viewport specification from this migration, is a derived editorial implementation inference from the verified surfaces; it is not Hogangnono-authored or a separately published UI specification.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The source characterizes Hogangnono's voice with three adjectives: transparent, plain-spoken, user-protective. Copy uses direct, factual language about prices and data; acknowledges uncertainty where data is incomplete; speaks on behalf of the buyer / renter; and keeps UI labels short and action-oriented. That characterization, that register reading, and the tone table below are a derived editorial implementation inference from the verified surfaces; they are not Hogangnono-authored or a separately published UI specification. The Korean lines themselves are kept byte-exact.

| Do | Don't |
|---|---|
| Use direct, factual language about prices and data | Use hype or emotional superlatives about property values |
| Acknowledge uncertainty where data is incomplete | Overstate confidence in market predictions |
| Speak on behalf of the buyer / renter | Frame content from the agent's or seller's perspective |
| Keep UI labels short and action-oriented | Use jargon-heavy real-estate terms without definition |

**Published UI strings** the source records, kept byte-exact:

- "조건에 맞는 매물이 없어요"
- "데이터를 불러오지 못했어요 — 다시 시도해 주세요"
- "공식 거래 기록이 없어요"
- "문의가 전송되었어요"
- "확인하기"
- "비교하기"
- "문의하기"
- 호갱노노
- 호갱

**Voice samples (illustrative):** the source labels these three as illustrative, not as captured product copy. Keeping them under that source label, and reading them as register examples rather than as Hogangnono-issued microcopy, is a derived editorial implementation inference from the verified surfaces; it is not Hogangnono-authored or a separately published UI specification.

- *"이 단지의 최근 실거래가를 확인했어요. 시세보다 낮게 거래된 이력이 있으니 참고하세요."* (We checked the recent actual transaction prices for this complex. Note that there are historical sales below market rate.)
- *"호갱 되지 마세요 — 정확한 실거래 데이터로 비교하세요."* (Don't get ripped off — compare with accurate actual transaction data.)
- *"원하시는 조건을 설정하면 딱 맞는 매물을 찾아드릴게요."* (Set your conditions and we'll find exactly the right listing for you.)

Reproduce the Korean strings above byte-exact rather than translating or re-casing them. An English gloss may sit beside a Korean line; it never replaces the line. That byte-exact / gloss-beside rule is a derived editorial implementation inference from the verified surfaces; it is not Hogangnono-authored or a separately published UI specification.

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

### Recorded unresolved decisions

These are named values the source already set, not permissions to invent.

- **theme-color vs `--primary`.** The theme-color meta is `#4d55b2`. CSS `--primary` is `#584de4`. Both are genuine. `#4d55b2` is the darker legacy nav background; `#584de4` is the design-system primary for interactive elements.
- **YAML card radius 6 vs apartment-detail radius 3px.** Both writings stay. Neither was chosen as a replacement.
- **Exact additional curves.** Durations, CSS `ease` / `linear`, named keyframes, and the Photoswipe-attributed gallery curve are established. Promote a further curve for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed.
