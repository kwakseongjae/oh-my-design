# OPENPOINT Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

OPENPOINT (統一超商紅利點數平台) is Taiwan's dominant retail loyalty and payment ecosystem, operated by President Chain Store (統一超商股份有限公司), the parent company of Taiwan's 7-ELEVEN network. YAML `tokens.source` is `live-extract`. Catalog `primary_color` `#8081ff` is the same purple as `tokens.colors.primary` `#8081ff`; they stay two writings, not a second purple. This contract covers the first-party public web surface the source inspected for tokens on 2026-06-22: `https://www.openpoint.com.tw`, together with the CDN stylesheet `https://www.openpoint.com.tw/cdn/css/style.css`. Every value stays attached to the surface or evidence class that established it. Reading those inspected URLs as this contract's token surfaces, keeping catalog `primary_color` `#8081ff` beside `tokens.colors.primary` rather than as a second purple, keeping `live-extract` as the YAML source class, and keeping every value attached to the surface or evidence class that established it, are derived editorial implementation inferences from the verified surfaces; they are not OPENPOINT-authored or a separately published UI specification.

Its web presence lands in a clean white (`#ffffff`) canvas with a signature dual-tone palette of electric purple (`#8081ff`) and warm lavender (`#cf7ffa`). The teal accent (`#0abbb5`) punctuates dates and key dividers. The typeface stack leads with **Noto Sans TC** for input/interactive elements (set at `font-family: "Noto Sans TC", "Open Sans", Arial, "Microsoft JhengHei"` in the stylesheet) and falls back to the traditional Taiwanese web stack: 微軟正黑體 (Microsoft JhengHei), 新細明體, 蘋果儷黑體. Body text runs at 16px / weight 400 with 1.5× line height. Navigation and CTA labels use weight 900. The **purple–lavender gradient** (`#cf7ffa` → `#8081ff`) is used across interactive states, member features, and premium tiers. This gradient does not appear in the physical 7-ELEVEN brand (which uses orange-and-green). Cards use a drop-shadow (`rgba(0,0,0,0.16) 2px 2px 5px`) rather than flat tints for event separation, and the layout leans on image-led promotion cards. The hex values, the two font stacks, the 16px / 400 / 1.5 body, the weight-900 labels, the gradient stops, the orange-and-green physical-brand contrast, and the card shadow in this paragraph are recorded. Calling that dual-tone a cheerful, accessible loyalty-program aesthetic that says "earn and redeem" rather than "premium fintech"; calling the teal a fresh, approachable warmth; calling the stack Traditional Chinese–first and broad-compatibility; calling the gradient the OPENPOINT app-native identity and a deliberate visual separation from the convenience-store parent; and calling the loyalty surface lighter and more app-first, are derived editorial implementation inferences from the verified surfaces; they are not OPENPOINT-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. OPENPOINT (統一超商紅利點數) was launched by **President Chain Store Corporation (統一超商股份有限公司)** — Taiwan's largest convenience-store operator, running over 6,800 7-ELEVEN locations — as the digital loyalty and payment platform that bridges Taiwan's physical retail-first economy into an app-native consumer experience. The platform unifies in-store point earning (at 7-ELEVEN), payment via icash and icash Pay, and redemption partnerships with airlines, banks, and international loyalty schemes (Japan's Ponta, the Philippines' CLiQQ, Thailand's ALL member). The brand name "OPENPOINT" signals openness — an open ecosystem where points flow beyond a single store chain to partner merchants, credit cards, and travel networks. The OPEN! mascot character (shared with 7-ELEVEN Taiwan's broader brand expression) carries a playful, orange-and-green character identity in physical retail, but OPENPOINT's own digital surface deliberately adopts a distinct purple identity — separating the loyalty app from the store brand, creating a more tech-forward, "smart wallet" perception. The product targets Taiwan's mobile-first consumer who shops at 7-ELEVEN multiple times per week and wants to maximise everyday-spend rewards without friction — a context where the platform's dense information hierarchy and promotions-first homepage make perfect sense. The operator, the 6,800-location figure, icash and icash Pay, Ponta / CLiQQ / ALL member, the OPEN! mascot, the orange-and-green physical identity, the purple digital surface, and that closing dense-hierarchy / promotions-first sentence are the source's own narrative facts; they do not by themselves supply interface tokens. The source's own evidence note classifies "open ecosystem" and "purple as digital-native identity" as editorial readings of observed design choices versus the 7-ELEVEN physical brand palette. Classifying that founding-and-ecosystem narrative as context that does not by itself supply interface tokens, and carrying those two named editorial readings as editorial readings, are derived editorial implementation inferences from the verified surfaces; they are not OPENPOINT-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product's primary tasks, each naming a label or surface the source records, is a derived editorial implementation inference from the verified surfaces; it is not OPENPOINT-authored or a separately published UI specification. They do not come from the source's Personas section.

- Browse 「OPENPOINT優惠活動」 on `https://www.openpoint.com.tw`.
- Follow 「查看更多優惠」 on the event-card listings.
- Use member-center 「登入」 and the top nav 「優惠活動」 / 「點數交換」 / 「旅遊集點護照」, including dropdown items 「OPENPOINT推薦」, 「累積點數」, and 「兌換點數」.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source labels its entries fictional archetypes informed by publicly observable OPENPOINT user patterns and Taiwan 7-ELEVEN consumer behaviour, not individual people, so those biographies are dropped rather than promoted, and no name, age, city, motivation, or affiliation classification is carried into this document or its sidecar. What the source independently records, in its own wording, is the audience at a group level: Taiwan's mobile-first consumer who shops at 7-ELEVEN multiple times per week. Dropping the fictional biographies rather than promoting them, carrying no name, age, city, motivation, or affiliation classification, and reading that source-named group as this product's audience, are derived editorial implementation inferences from the verified surfaces; they are not OPENPOINT-authored or a separately published UI specification.

### Distinctive traits

The list restates the source's Key Characteristics. The values are recorded; the groupings and the readings inside them are a derived editorial implementation inference from the verified surfaces; they are not OPENPOINT-authored or a separately published UI specification.

- Purple-to-lavender gradient (`#cf7ffa` → `#8081ff`) as the primary brand axis
- Teal (`#0abbb5`) for date labels and accent underlines — energetic, calendar-forward
- White canvas with light grey (`#f3f3f3`) for card text areas — clean, informational
- Noto Sans TC / 微軟正黑體 — Traditional Chinese–first font stack
- Weight 900 for all interactive labels (nav, CTAs) — bold, accessible, tap-friendly
- Drop-shadow cards (not flat tints) for event and promotion listings
- 7-ELEVEN red (`#e60012`) strictly limited to compliance banners and alerts
- Dropdown navigation reveals lavender-to-purple sub-menus on hover

### Principles

These five items are a derived editorial implementation inference from the verified surfaces; they are not OPENPOINT-authored or a separately published UI specification. The source states them in its own Principles section together with the UI implication it draws from each.

1. **Every visit is a earning opportunity.** OPENPOINT homepage surfaces active promotions before any account features. *UI implication:* promotions carousel is above the fold, member login is secondary; teal dates signal freshness.
2. **Open ecosystem, closed visual identity.** The purple-lavender palette is platform-native — distinct from the 7-ELEVEN orange-green store brand. *UI implication:* never import 7-ELEVEN's brand orange into the OPENPOINT UI.
3. **Clarity over elegance.** The navigation is a flat category list with no mega-menu or editorial photography. *UI implication:* nav labels are noun-only, no taglines; copy is short and informational.
4. **Rewards are visible, not buried.** Points balance, earning events, and redemption options are top-level navigation categories. *UI implication:* 累積點數 / 兌換點數 / 優惠 are first-level nav, not nested in a profile dropdown.
5. **Taiwan-first, Asia-connected.** International exchange features (Ponta, CLiQQ, ALL member) are prominent nav items reflecting Taiwan's outbound-travel culture. *UI implication:* travel and exchange features get dedicated nav real estate, not buried in settings.

### Application rules

The source states these seven as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not OPENPOINT-authored or a separately published UI specification.

- Use purple (`#8081ff`) for all primary CTAs, links, and active states
- Apply teal (`#0abbb5`) for date labels and fresh accent underlines
- Use the lavender-to-purple gradient (`#cf7ffa` → `#8081ff`) for premium features
- Set nav and CTA labels at font-weight 900 for clear tap targets
- Keep card corners sharp (0px radius) to maintain the magazine-grid aesthetic
- Use `#f3f3f3` for card text area backgrounds — soft, readable separation
- Limit red (`#e60012`) to system alerts and compliance banners only

### Avoid

The source states these seven as its Don't list. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not OPENPOINT-authored or a separately published UI specification.

- Spread 7-ELEVEN red (`#e60012`) into brand UI — it belongs to alerts only
- Use drop shadows heavier than the card-standard `2px 2px 5px` on content
- Apply Noto Sans TC at weights below 400 — the TC hinting requires standard weight
- Mix orange or green (7-ELEVEN store palette) into the OPENPOINT digital surface
- Round card corners — the sharp edge is part of the information-dense grid language
- Use the gradient on text — only as a background fill
- Replace teal with generic grey for dates — teal is the calendar/time signal

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Role names below are the source's own labels. Pairing each hex to the token-set path named beside it, keeping catalog `primary_color` `#8081ff` beside `tokens.colors.primary`, keeping `tokens.colors.canvas` and `tokens.colors.on-primary` as two `#ffffff` keys, keeping teal `#0abbb5` on dates and accent underlines rather than as a second primary, keeping `#e60012` on the cookie/alert role rather than as a brand fill, and keeping every role attached to the use the source recorded, are derived editorial implementation inferences from the verified surfaces; they are not OPENPOINT-authored or a separately published UI specification. The hex values and recorded uses are the source's own.

**Primary brand**

- **OPENPOINT Purple** (`#8081ff`): Primary brand color, CTA buttons, links, active nav states, borders, form field focus rings. Token-set path `tokens.colors.primary`. Catalog identity `primary_color` is the same hex. YAML `tokens.note`: primary = brand purple (`#8081ff`) used for CTAs, links, borders.
- **Gradient Start (Lavender)** (`#cf7ffa`): Left/top of the purple-lavender gradient. Used in premium points features, gradient badges, selected-state highlights. Token-set path `tokens.colors.lavender`. YAML `tokens.note`: lavender (`#cf7ffa`) for premium gradient.
- **Gradient Mid** (`#a77bca`): Mid-range purple used for gradient backgrounds and disabled-state overlays. Token-set path `tokens.colors.lavender-mid`.

**Accent and status**

- **OPENPOINT Teal** (`#0abbb5`): Event date labels (`.date` class) and accent underlines (`.event_page .description` bottom border). Token-set path `tokens.colors.teal`. YAML `tokens.note`: teal (`#0abbb5`) for dates/accent underlines.
- **7-ELEVEN Red** (`#e60012`): Cookie-consent banner background, alert and warning indicators. Parent brand heritage color — intentionally quarantined from the rewards UI. Token-set path `tokens.colors.error-red`. YAML `tokens.note`: 7-ELEVEN red (`#e60012`) for cookie/alert banner.
- **Muted Purple** (`#9696ad`): Disabled button states, secondary interactive elements. Token-set path `tokens.colors.muted-purple`.

**Neutral and surface**

- **Pure White** (`#ffffff`): Page canvas, card faces, text on dark/purple backgrounds. Token-set path `tokens.colors.canvas`. YAML `tokens.note`: White (`#ffffff`) canvas.
- **On-Primary** (`#ffffff`): Text on purple, gradient, and muted-purple fills. Token-set path `tokens.colors.on-primary`. Same hex as Pure White; the keys stay unmerged.
- **Light Grey** (`#f3f3f3`): Event card text area background (`.event-text`). Also the footer. Token-set path `tokens.colors.surface`. YAML `tokens.note`: light-grey (`#f3f3f3`) card text areas.
- **Surface Light** (`#eeeef5`): Faint purple-tinted surface used in member forms. Token-set path `tokens.colors.surface-light`.
- **Surface Lavender** (`#f5f2ff`): Lightest lavender tint for subtle section highlights. Token-set path `tokens.colors.surface-lavender`.
- **Dark Navy** (`#48484e`): Applied to overlay backgrounds and secondary UI chrome. Token-set path `tokens.colors.dark-navy`.
- **Ink Black** (`#000000`): Primary text, headings, event-btn label. Token-set path `tokens.colors.ink`.
- **Placeholder** (`#cccccc`): Form input placeholder text. Token-set path `tokens.colors.placeholder`. Source §9 also writes placeholder `#ccc`; both writings stay.

Calling red quarantined from the rewards UI, calling teal a fresh counterpoint to the purple primary, and keeping canvas and on-primary as two keys that share a hex, are derived editorial implementation inferences from the verified surfaces; they are not OPENPOINT-authored or a separately published UI specification.

### Spacing

Token-set path `tokens.spacing`, unitless steps as the YAML recorded them.

| Step | Value | Token-set path |
|---|---:|---|
| xs | 8 | `tokens.spacing.xs` |
| sm | 16 | `tokens.spacing.sm` |
| md | 24 | `tokens.spacing.md` |
| base | 16 | `tokens.spacing.base` |
| lg | 40 | `tokens.spacing.lg` |
| xl | 48 | `tokens.spacing.xl` |
| section | 64 | `tokens.spacing.section` |

The source also writes a base unit of 16px and a scale of 8px, 16px, 24px, 40px, 48px, 64px. Event cards padded at 16px; event-btn at 8px 24px; section titles use 40px vertical margin. `tokens.spacing.xs: 8` is not the 8px interactive radius. `tokens.spacing.sm: 16` is not `tokens.spacing.base: 16`, is not a type-role 16, and is not the event-card 16px padding written as a second key. `tokens.spacing.md: 24` is not the 24px half of event-btn `8px 24px`. `tokens.spacing.lg: 40` is not a type size. `tokens.spacing.xl: 48` is not a control height. `tokens.spacing.section: 64` is not a type size. The carousel desktop padding `0px 150px` is local geometry; 150 is not a `tokens.spacing` step. Keeping each number on its own key path, rather than treating a shared numeral as the same token, is a derived editorial implementation inference from the verified surfaces; it is not OPENPOINT-authored or a separately published UI specification.

### Shape

Token-set path `tokens.rounded`, unitless steps as the YAML recorded them.

| Step | Value | Token-set path |
|---|---:|---|
| sm | 0 | `tokens.rounded.sm` |
| md | 8 | `tokens.rounded.md` |
| lg | 50 | `tokens.rounded.lg` |
| full | 9999 | `tokens.rounded.full` |

The source's prose radius scale is Zero (0px) for event cards, image containers, and most content blocks; Small (8px) for nav dropdown items and form inputs — the primary interactive radius; Large (50px+) for rarely used decorative elements. `tokens.rounded.sm: 0` is not a spacing step. `tokens.rounded.md: 8` is not `tokens.spacing.xs: 8`. `tokens.rounded.lg: 50` is the YAML step beside the prose `50px+` writing; they stay two writings. `tokens.rounded.full: 9999` is a YAML step. Component radii `8px` and `0px` stay on those components. Keeping those local radii on their components, and keeping `full: 9999` on its own key path, is a derived editorial implementation inference from the verified surfaces; it is not OPENPOINT-authored or a separately published UI specification.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (0) | No shadow | Page canvas, nav header, footers |
| Card (1) | `rgba(0,0,0,0.16) 2px 2px 5px` | Event and promotion listing cards |
| Card Hover (2) | `rgba(0,0,0,0.20) 4px 4px 8px` | Card hover state — subtle lift |
| Overlay | `rgba(0,0,0,0.8–0.9)` | Modal overlays, loading screen |

Token-set path `tokens.shadow.card`: `rgba(0, 0, 0, 0.16) 2px 2px 5px 0px`. Token-set path `tokens.shadow.card-hover`: `rgba(0, 0, 0, 0.2) 4px 4px 8px 0px`. Token-set path `tokens.components.event-card.shadow`: `rgba(0, 0, 0, 0.16) 2px 2px 5px 0px`. The table's Card spelling, the YAML `tokens.shadow.card` spelling (with `0px` spread), the event-card component spelling, and the §1 short form `rgba(0,0,0,0.16) 2px 2px 5px` stay as separate writings. Card Hover keeps both `0.20` (table) and `0.2` (YAML). Loading states use a near-opaque black overlay (`rgba(0,0,0,0.9)`) with an SVG spinner. The source's shadow philosophy: OPENPOINT uses light drop-shadows (not flat tints) on cards, giving the event listings a magazine-like raised quality. The shadow is warm-neutral (black, not blue-tinted). Keeping those spellings unmerged, and reading the stack as card-lift rather than a universal elevation kit, are derived editorial implementation inferences from the verified surfaces; they are not OPENPOINT-authored or a separately published UI specification.

### Motion

Durations the source records, kept as duration tokens. They are not easing curves. Keeping those four values as duration tokens rather than as easing curves is a derived editorial implementation inference from the verified surfaces; it is not OPENPOINT-authored or a separately published UI specification.

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 150ms | Hover states (event-btn arrow, dropdown reveal) |
| `motion-standard` | 250ms | Card hover shadow transition (`transition: box-shadow 0.25s`) |
| `motion-image` | 300ms | Event card image scale on hover (`transition: 0.3s ease-out`) |
| `motion-cookie` | 2000ms | Cookie banner slide (2s cubic-bezier reveal) |

Easings the source records:

| Token | Curve | Use |
|---|---|---|
| `ease-image` | `ease-out` | Event card image zoom on hover (`0.3s ease-out`) |
| `ease-cookie` | `cubic-bezier(0.23, 1, 0.32, 1)` | Cookie consent slide — quick exit, smooth deceleration |
| `ease-loading-fade` | implicit transition | Loading overlay fade-out with opacity + z-index collapse |

Motion rules, as the source states them: Motion is conservative and functional. The event card hover uses a scale(1.2) image zoom (`0.3s ease-out`) paired with an elevated shadow. The cookie banner entrance uses a heavy ease-in/out curve, reflecting the legal-compliance character of that surface. Under `prefers-reduced-motion`, image scale transforms should collapse; shadow transitions are safe to retain at reduced magnitude.

Catalog-template cubic-bezier values from `spec/omd-v0.1.md` (`ease-enter` / `ease-exit` / `ease-standard` / `ease-spring`) are not in this source and are not written here. The four durations, the `ease-out` CSS keyword on the image zoom, the source-recorded cookie curve, the implicit loading fade, the scale(1.2) pairing, and the reduced-motion rule stay. Calling motion conservative and functional, calling the cookie curve a legal-compliance character, and holding the five-kind per-component promotion gate rather than treating a single curve as sufficient, are derived editorial implementation inferences from the verified surfaces; they are not OPENPOINT-authored or a separately published UI specification.

An exact curve may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework or vendor document — does not satisfy that condition.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The following evidence-class application readings are a derived editorial implementation inference from the verified surfaces; they are not OPENPOINT-authored or a separately published UI specification.

| Evidence class | Resolution |
|---|---|
| Official product-use | The inspected homepage and CDN stylesheet use Noto Sans TC on input/button/select and 微軟正黑體 on body. They do not publish a universal current typography token or a separately issued type specimen. |
| Live computed surface-use | Body computes `微軟正黑體, 新細明體, 蘋果儷黑體, Arial, Helvetica, sans-serif`. H1 「OPENPOINT優惠活動」 computes 微軟正黑體; 28.8px; weight 700; `color rgb(0,0,0)`. H2 「OPENPOINT推薦」 computes 22.4px; weight 700; `color rgb(255,255,255)` on a bg-image title-bar. |
| Official distributed asset | Noto Sans TC is applied to input/button/select via the stylesheet stack `"Noto Sans TC", "Open Sans", Arial, "Microsoft JhengHei"`. No OPENPOINT-exclusive distributed type family was verified. |
| Declared-only / fallback | Body default `微軟正黑體 (Microsoft JhengHei), 新細明體, 蘋果儷黑體, Arial, Helvetica, sans-serif`. Interactive stack also names `"Open Sans"`, `Arial`, `"Microsoft JhengHei"`, `"Apple LiGothic Medium"`. Those members are fallbacks, not a second brand face. |
| License | This record does not establish an OPENPOINT-issued font-license notice for Noto Sans TC. |

### Family

- **Interactive / input:** `"Noto Sans TC", "Open Sans", Arial, "Microsoft JhengHei", "Apple LiGothic Medium", sans-serif` — applied to input/button/select elements. Token-set path `tokens.typography.family.display` records `Noto Sans TC` as the short YAML form; the stylesheet stack above is the complete writing.
- **Body default:** `微軟正黑體 (Microsoft JhengHei), 新細明體, 蘋果儷黑體, Arial, Helvetica, sans-serif`. Token-set path `tokens.typography.family.body`.

Do not replace Noto Sans TC or 微軟正黑體 with a system substitute and call the result OPENPOINT. Do not present a fallback member as the brand face. Do not apply Noto Sans TC at weights below 400 — the TC hinting requires standard weight. That fallback-never-substitute reading, and keeping the YAML short display name beside the complete interactive stack, are derived editorial implementation inferences from the verified surfaces; they are not OPENPOINT-authored or a separately published UI specification.

### Type roles

YAML unitless line heights stay ratios (A1a). The parenthetical px and em figures are the source §3 spelling, not a replacement of the YAML ratio. Token-set `use` strings are kept verbatim; the §3 Notes column is the other writing, and both stay. Keeping YAML line heights as unitless ratios, keeping the YAML `use` strings beside the §3 Notes, keeping H2 white on the bg-image title-bar rather than as a general H2 color, and refusing to merge a type-role 16 with `tokens.spacing.sm` / `tokens.spacing.base`, are derived editorial implementation inferences from the verified surfaces; they are not OPENPOINT-authored or a separately published UI specification.

| Role | Font | Size | Weight | Line height | Token-set use / §3 notes |
|---|---|---:|---:|---|---|
| H1 (Page) | 微軟正黑體 | 28.8 (`28.8px` / `1.8em`) | 700 | 1.5 | Page-level heading, OPENPOINT優惠活動. §3 Notes: Hero section headings. Token-set path `tokens.typography.h1`. |
| H2 (Section) | 微軟正黑體 | 22.4 (`22.4px` / `1.4em`) | 700 | 1.5 | Section headings, OPENPOINT推薦/累積點數. §3 Notes: Event category titles. Live inspect: H2 「OPENPOINT推薦」 is `color rgb(255,255,255)` on a bg-image title-bar. Token-set path `tokens.typography.h2`. |
| H3 | 微軟正黑體 | 19.2 (`19.2px` / `1.2em`) | 700 | 1.5 | Sub-section headings. Token-set path `tokens.typography.h3`. |
| Body | 微軟正黑體 | 16 (`16px`) | 400 | 1.5 | Body text, event cards, nav items. §3 Notes: Card descriptions, metadata. Token-set path `tokens.typography.body`. |
| Nav / CTA Label | 微軟正黑體 | 16 (`16px`) | 900 | 1 | Navigation labels, CTA, event-btn. §3 Notes: Navigation items, event-btn. Token-set path `tokens.typography.label`. |
| Caption | 微軟正黑體 | 12 (`12px`) | 400 | — | Metadata, captions. §3 Notes: Fine print, legal. Token-set path `tokens.typography.small`. YAML records no `lineHeight` on this role. |

Type principles the source states:

- **Weight 900 for action text**: Nav, CTAs, and event-btn links all run at font-weight 900 — visually declaring tap zones in a dense, touch-first layout.
- **Traditional Chinese–first stack**: The web falls back gracefully from Noto Sans TC to 微軟正黑體, ensuring correct rendering on both modern and legacy Taiwanese devices.
- **Body is functional**: No display fonts, no tight tracking. Copy is meant to be read quickly — a loyalty platform where users scan promotions, not read essays.
- **Size stays conservative**: H1 at 28.8px, H2 at 22.4px — modest at desktop, comfortable on mobile.

The four principle titles and the tap-zone / scan-promotions readings are a derived editorial implementation inference from the verified surfaces; they are not OPENPOINT-authored or a separately published UI specification. The sizes, weights, and ratios are recorded.

The 16px Body size is not `tokens.spacing.sm: 16` and is not `tokens.spacing.base: 16`. The 16px Nav / CTA size is not those spacing steps. The 12px Caption size is not a spacing step. The 28.8 H1 size is not a spacing step. Restating those type-role sizes as not spacing steps, after the table, is a derived editorial implementation inference from the verified surfaces; it is not OPENPOINT-authored or a separately published UI specification.

### Assets

- Catalog identity pointer: `logo.type: favicon`, `logo.slug: https://www.openpoint.com.tw/cdn/images/openpoint-logo.png`. That slug is an OPENPOINT-hosted PNG on the inspected CDN. Reading it as a hosted identity file on the inspected surfaces rather than as a UI token is a derived editorial implementation inference from the verified surfaces; it is not OPENPOINT-authored or a separately published UI specification.
- Image-led promotion cards carry first-party event photography; do not replace them with invented brand-color decoration. That photography-not-decoration reading is a derived editorial implementation inference from the verified surfaces; it is not OPENPOINT-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### How applicability is decided here

The source declares each token-set component with a primitive type (`button`, `card`, `badge`, `tab`, `listItem`, `input`) and a value set; those types are preserved per component. Applicability below is judged by each control's role, never by whether a visual treatment for that state happens to be recorded: where the source supplies no treatment for an applicable state, the value is omitted and the state stays applicable. `not-applicable` is used only where the control's role makes the state meaningless — a destination CTA or nav item that commits no operation in place, or a display element with no action at all — and the reason given is always that semantic one. Where the source supplies no interaction evidence for a container at all, its kind and applicability map are omitted rather than decided. A `Primitive type` line is attached only when the source YAML records that type on that component. A §4-only component that is not in the token set is labeled `not in the token set`.

The source records no `focus-visible` treatment. Generic Focus on the member-center input (`border #8081ff`, maintained, no shift) is recorded as that observed Focus; it is not a color assigned to a `focus-visible` row. `focus-visible` stays applicable on interactive controls; the visual treatment is omitted.

The role-based decision procedure above, every interactive-kind verdict, every applicability verdict, and the reason given for either is a derived editorial implementation inference from the verified surfaces; they are not OPENPOINT-authored or a separately published UI specification. This is not a complete state-coverage claim.

### Primary (Nav Dropdown CTA)

- Role: Sub-navigation items displayed as pill-like anchor buttons
- Primitive type: `button` · Kind: interactive
- Background: `#8081ff`
- Text: `#ffffff`
- Radius: `8px`
- Padding: `10px 15px`
- Height: `38px`
- Font: `16px / 900 Noto Sans TC`
- Token-set path: `tokens.components.button-primary`
- Token-set use: `Primary CTA in nav dropdown`
- The 38px height is this control's geometry. The `10px 15px` padding is this control's padding. The 16px font size is not `tokens.spacing.sm: 16` or `tokens.spacing.base: 16`. The `8px` radius is `tokens.components.button-primary.radius`; it is not `tokens.spacing.xs: 8`. Reading those figures as this control's geometry rather than a spacing step is a derived editorial implementation inference from the verified surfaces; it is not OPENPOINT-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web sub-nav control; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | Source disabled treatment: background `#9696ad`, text `#ffffff` |
| loading | not-applicable | This control opens a dropdown destination; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Destination action; the destination, not this button, reports failure |
| success | not-applicable | Reaching the dropdown destination is not an operation with a success result on this button |

### Event See-More Link

- Role: Event section see-more link
- Primitive type: `button` · Kind: interactive
- Text: `#000000`
- Radius: `0px`
- Padding: `8px 24px`
- Height: `33px`
- Font: `16px / 900 微軟正黑體`
- Token-set path: `tokens.components.button-cta`
- Token-set use: `Event section see-more link`
- Published label: 「查看更多優惠」 (See more promotions)
- The 33px height is this control's geometry. The `8px 24px` padding is this control's padding; it is not `tokens.spacing.xs` written as a radius and is not `tokens.spacing.md: 24` written as a type size. Reading those figures as this control's geometry rather than a spacing step is a derived editorial implementation inference from the verified surfaces; it is not OPENPOINT-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web link; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A destination link whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control opens further promotions; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Destination action; the destination, not this link, reports failure |
| success | not-applicable | Reaching further promotions is not an operation with a success result on this link |

### Gradient Button (Premium)

- Role: Premium feature access buttons, member upgrade CTAs
- not in the token set
- Kind: interactive
- Background: `linear-gradient(to right, #cf7ffa, #8081ff)`
- Text: `#ffffff`
- The source does not record padding, radius, or height for this band.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | An action whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control opens a premium-feature destination; it does not commit an in-place operation whose in-progress state it could report |
| error | not-applicable | Destination action; the destination, not this button, reports failure |
| success | not-applicable | Reaching the premium feature is not an operation with a success result on this button |

### Event Card

- Role: Promotion/event listing cards; image fills 48% height, text area below
- Primitive type: `card` · Kind: interactive
- Background: `#ffffff`
- Radius: `0px` (sharp corners)
- Shadow: `rgba(0, 0, 0, 0.16) 2px 2px 5px 0px`
- Hover shadow: `rgba(0, 0, 0, 0.2) 4px 4px 8px 0px`
- Height: `247px`
- Token-set path: `tokens.components.event-card`
- Token-set use: `Promotion/event listing card`
- Image zoom on hover: scale(1.2) at `0.3s ease-out`
- Title in the text area: black `#000000`, weight 900, 2-line ellipsis (source §9)

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web listing card; captured hover shadow and scale(1.2) image zoom |
| focus-visible | applicable | Keyboard-reachable card; visual treatment omitted |
| disabled | not-applicable | A listing card is not a control that deactivates; it has no disabled role in the source contract |
| loading | applicable | Source loading (section data): card image areas show a background-color placeholder until images load |
| error | not-applicable | This card opens a promotion destination; the destination, not the card, reports failure |
| success | not-applicable | Reaching a promotion is not an operation with a success result on this card |

### Event Text Area

- Role: Below event card image — shows date + title + description
- Primitive type: `card`
- Background: `#f3f3f3`
- Padding: `16px`
- Radius: `0px`
- Token-set path: `tokens.components.card-text`
- Token-set use: `Event date+description text area below image`

The source supplies no interaction evidence for this text area as a control, so kind and a state-applicability map are both withheld.

### Member Form Surface

- Role: Read-only field backgrounds, faint purple-tinted input areas
- not in the token set
- Background: `#eeeef5`

The source supplies this band as a §4 body record only. It has no YAML `type` key, so no `Primitive type` line is attached. Kind and a state-applicability map are withheld.

### Default Input

- Role: Member center login/register forms
- Primitive type: `input` · Kind: interactive
- Border: `1px solid #8081ff`
- Radius: `8px`
- Text: `#000000`
- Placeholder: `#cccccc`
- Font: `16px 微軟正黑體` / Noto Sans TC
- Token-set path: `tokens.components.input-default`
- Token-set use: `Member center form fields`
- Observed Focus: border `#8081ff` (maintained, no shift). That observation is generic Focus; it is not a `focus-visible` treatment.
- Error (form validation): border shifts to `#e60012`; placeholder / field-level message below input; Noto Sans TC
- Read-only field: background `#ebebе4` (light warm-grey `rgb(235,235,228)`) — distinct from editable `#eeeef5`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable field; visual treatment omitted. Observed Focus stays the generic Focus note above |
| disabled | applicable | A form field whose availability can lapse; visual treatment omitted. Read-only uses `#ebebе4`, not this row |
| loading | not-applicable | This field does not commit an async operation whose in-progress state it could report |
| error | applicable | Source form-validation treatment: border `#e60012` and a field-level message |
| success | not-applicable | Source success is points-earned confirmation on the balance, not a field-level success on this input |

### Date Badge (Teal)

- Role: Event dates in card listings, e.g. 「活動時間：2026/01/01–06/30」
- Primitive type: `badge`
- Kind: non-interactive — a date label, not a commit control
- Text: `#0abbb5`
- Radius: `0px`
- Font: `16px / 900 微軟正黑體`
- Token-set path: `tokens.components.badge-teal`
- Token-set use: `Event date labels (.date class)`

### Gradient Accent Badge

- Role: Points highlights and premium feature labels
- Primitive type: `badge`
- Kind: non-interactive — a status or premium label, not a commit control
- Background: `linear-gradient(to right, #cf7ffa, #8081ff)`
- Text: `#ffffff`
- Radius: `0px`
- Token-set path: `tokens.components.gradient-badge`
- Token-set use: `Premium/points gradient accent`
- Source §9 also records weight 700 and use for 「OPENPOINT優惠」 labels. Both writings stay.

### Muted Badge

- Role: Neutral/inactive status indicators
- not in the token set
- Kind: non-interactive — a status indicator, not a commit control
- Background: `#9696ad`
- Text: `#ffffff`

### Top Nav Category Link

- Role: Horizontal nav top-level items
- Primitive type: `tab` · Kind: interactive
- Text: `#000000`
- Font: `16px / 900 微軟正黑體`
- Active: text `#8081ff` underline
- Token-set path: `tokens.components.nav-link`
- Token-set use: `Top nav category link`
- Token-set active: `text #8081ff underline`
- Published labels: 「優惠活動」, 「點數交換」, 「旅遊集點護照」

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable item; visual treatment omitted |
| disabled | applicable | A destination item whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This item is a destination tab; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Destination tab; the destination, not the item, reports failure |
| success | not-applicable | Reaching a nav destination is not an operation with a success result |

### Dropdown Sub-Item

- Role: Dropdown menu items on hover
- Primitive type: `listItem` · Kind: interactive
- Text: `#ffffff`
- Radius: `8px`
- Padding: `10px 15px`
- Font: `16px / 900 Noto Sans TC`
- Token-set path: `tokens.components.dropdown-item`
- Token-set use: `Nav dropdown sub-menu links`
- Published labels: 「OPENPOINT推薦」, 「累積點數」, 「兌換點數」
- Source §9 also records a dark overlay background and items stacked vertically with a 4px gap. Items as `<a>` with #8081ff background. YAML does not set a background on this record. Those writings stay unmerged. Keeping the §9 overlay, that item fill, and the YAML omission as unmerged writings is a derived editorial implementation inference from the verified surfaces; it is not OPENPOINT-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web sub-menu link; the dropdown itself reveals on hover |
| focus-visible | applicable | Keyboard-reachable item; visual treatment omitted |
| disabled | applicable | A destination item whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This item opens a sub-nav destination; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Destination action; the destination, not this item, reports failure |
| success | not-applicable | Reaching the sub-nav destination is not an operation with a success result |

### Mobile nav (m-btn)

- Role: hamburger/mobile nav menu that replaces the horizontal nav below 1199.98px
- not in the token set
- Kind: interactive
- Source collapsing note: Navigation: horizontal nav hidden; replaced by hamburger/mobile nav menu (`m-btn` class)

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared as the mobile replacement for horizontal nav |
| hover | applicable | Pointer-web toggle; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A toggle whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control opens or closes the mobile nav; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Opening the menu is not an operation this control reports as failure |
| success | not-applicable | Revealing the menu is not an operation with a success result |

### State record

The source's state contract, preserved here while the catalog graph is not adopted:

| State | Treatment |
|---|---|
| **Empty (no active promotions)** | White canvas with placeholder text in `#000000`; `#0abbb5` teal date label absent. Section titles still render; single CTA to browse categories. |
| **Empty (no points balance)** | Member centre shows 0 balance in black ink; prompt to earn displayed in `#8081ff` purple CTA. |
| **Loading** | Full-viewport overlay `rgba(0,0,0,0.9)` with SVG circle spinner (`.loading-circle`). Fades out with `.loading.fade` class (opacity 0, z-index -1 transition). |
| **Loading (section data)** | Section title and card grid render; card image areas show background-color placeholder until images load. |
| **Error (service unavailable)** | Alert banner in `#e60012` red (cookie/system banner pattern), white text. Describes issue and prompts retry — matches the cookie-consent banner component. |
| **Error (form validation)** | Border shifts to `#e60012` red; placeholder / field-level message below input. Uses Noto Sans TC for readability in Traditional Chinese. |
| **Success (points earned)** | Points balance increments with brief inline confirmation. Teal (`#0abbb5`) used as positive signal. No celebratory animation — transactional confirmation. |
| **Skeleton** | Background-color placeholder at card dimensions; no shimmer (static grey `#f3f3f3` blocks). |
| **Disabled** | Muted purple `#9696ad` background replaces purple `#8081ff`; white text maintained. |
| **Read-only field** | Background `#ebebе4` (light warm-grey `rgb(235,235,228)`) — distinct from editable `#eeeef5`. |

These rows describe empty, loading, error, success, skeleton, disabled, and read-only treatments the source wrote at system level. They are not attached as visual treatments to destination controls above, except where a control's own row cites a matching captured treatment (Primary disabled `#9696ad`; Default Input error `#e60012` and read-only `#ebebе4`; Event Card loading image placeholder). That non-attachment reading, and those three attachments, are derived editorial implementation inferences from the verified surfaces; they are not OPENPOINT-authored or a separately published UI specification.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

Layout behaviors as the source wrote them. Reading generous section spacing versus tight cards, reading full-width bands as the primary rhythm, and reading the 150px carousel padding as a panoramic parallax feel, are derived editorial implementation inferences from the verified surfaces; they are not OPENPOINT-authored or a separately published UI specification.

**Spacing restated from `tokens.spacing`:** 8 / 16 / 24 / 40 / 48 / 64, base unit 16px. Event cards padded at 16px; event-btn at 8px 24px; section titles use 40px vertical margin.

**Grid and container**

- Max-width 1200px centered container
- Homepage uses a full-width hero carousel (slick-slider) with 0.3 opacity on non-active slides
- Event cards arranged in 3-column grid at desktop (≥1200px); single column on mobile
- Footer: centered single-column, `#f3f3f3` background, 147px height
- Header: background `#ffffff`; color `#000000`; height 100px (live inspect)

**Whitespace**

- **Generous section spacing**: 40px margins around event-title banners
- **Tight cards**: event cards pack image + text compactly with minimal internal whitespace
- **Full-width bands**: hero carousel and event-title banners span the full viewport
- **No padding on carousel list**: `padding: 0px 150px` on desktop gives the panoramic parallax feel

**Shape restated from `tokens.rounded`:** Zero 0 · Small 8 · Large 50 · `full: 9999`.

### Breakpoints

The source's live inspection was a computed-style pass on the homepage; the breakpoints, collapsing strategy, and the source's reading of the recorded target sizes are stated by the source at system level rather than measured across viewports, so they are a derived editorial implementation inference from the verified surfaces and are not OPENPOINT-authored or a separately published UI specification.

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <1199.98px | Single-column event cards, carousel fills full width (no 150px padding), font-size 16px base |
| Desktop | ≥1200px | 3-column event grid, carousel with 150px side padding creating parallax, 1200px max-width container |

### Touch targets

- Dropdown nav items at 38px height, 8px radius — comfortable thumb targets
- Event-btn at 33px height with 24px horizontal padding
- Event cards at 247px height — generous touch/click area

### Collapsing strategy

- Hero carousel: full-width on both sizes; padding removed on mobile
- Event cards: 3-up desktop → stacked single-column mobile
- Navigation: horizontal nav hidden; replaced by hamburger/mobile nav menu (m-btn class)

<!-- design-md:section content-locales -->
## 6. Content & Locales

The source characterizes OPENPOINT's voice as **friendly, reward-focused, and transactional** — the communication style of a loyalty programme that wants users to feel like they're winning every day. The copy is predominantly Traditional Chinese (繁體中文), concise, and action-oriented. Service names like 「OPENPOINT推薦」, 「累積點數」, 「兌換點數」 are plain category labels with zero jargon — the UX copy doesn't try to be clever, it tries to be clear and fast. That characterization, that register reading, and the tone table below are a derived editorial implementation inference from the verified surfaces; they are not OPENPOINT-authored or a separately published UI specification. The published lines themselves are live surface copy.

| Context | Tone |
|---|---|
| Nav categories | Factual, minimal: 「優惠活動」 / 「點數交換」 / 「旅遊集點護照」 |
| Event titles | Specific and time-bracketed: 「活動時間：2026/01/01–06/30」 + product name |
| CTAs | Direct imperative: 「查看更多優惠」 (See more promotions), 「登入」 (Login) |
| Footer legal | Compact formality: 「OPENPOINT為統一超商股份有限公司發行之紅利點數業務」 |
| App download prompts | Benefit-first: highlights points-earning, payment, membership |

**Voice samples (verbatim from live homepage 2026-06-22):**

- "OPENPOINT優惠活動" — page H1 title (clarity over cleverness). *(verified live 2026-06-22)*
- "查看更多優惠" — event section CTA (direct, lowest-friction). *(verified live 2026-06-22)*
- "OPENPOINT為統一超商股份有限公司發行之紅利點數業務" — footer brand disclosure. *(verified live 2026-06-22)*

Further published strings the source records on the inspected surface, kept byte-exact — that byte-exact keeping is a derived editorial implementation inference from the verified surfaces; it is not OPENPOINT-authored or a separately published UI specification:

- OPENPOINT
- 統一超商紅利點數平台
- 統一超商紅利點數
- 統一超商股份有限公司
- President Chain Store
- President Chain Store Corporation
- 7-ELEVEN
- 微軟正黑體
- 新細明體
- 蘋果儷黑體
- Noto Sans TC
- OPENPOINT優惠活動
- OPENPOINT推薦
- 累積點數
- 兌換點數
- 查看更多優惠
- 優惠活動
- 點數交換
- 旅遊集點護照
- 登入
- 活動時間：2026/01/01–06/30
- OPENPOINT優惠
- icash
- icash Pay
- Ponta
- CLiQQ
- ALL member
- OPEN!
- 繁體中文

Verification notes on the same homepage also record the dropdown item 「OPENPOINT點數說明」. Footer copyright from the live inspect: "© 2026 UNI-President Chain Store Corporation. All rights reserved."

**Forbidden register**: hype language, urgency countdown pressure, English mixed into core navigation (aside from brand names like "OPENPOINT" and "icash"), emojis in body copy. That premise-to-register causal is a derived editorial implementation inference from the verified surfaces; it is not OPENPOINT-authored or a separately published UI specification.

Reproduce the published strings above byte-exact rather than translating or re-casing them. A gloss may sit beside a line; it never replaces the line. That byte-exact / gloss-beside rule is a derived editorial implementation inference from the verified surfaces; it is not OPENPOINT-authored or a separately published UI specification.

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

These are named values, not permissions to invent. The source records no conflict among its own Tier 1 values. Treating the list as named unresolved values rather than a license to invent is a derived editorial implementation inference from the verified surfaces; it is not OPENPOINT-authored or a separately published UI specification.

- **Caption line height.** `tokens.typography.small` records size 12 / weight 400 and no `lineHeight`.
- **Gradient Button (Premium) geometry.** Padding, radius, and height are unnamed on that §4-only band.
- **Hover and focus-visible treatments.** Those visual treatments are omitted except where the source captured them (event-card hover shadow and scale(1.2) image zoom; input Focus border `#8081ff`). They are not `not-applicable`; applicability follows control meaning.
- **Further motion curves.** Durations, `ease-out` on the image zoom, the source-recorded cookie curve, and the implicit loading fade stay. A further exact curve may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed.
