# iPASS MONEY Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

iPASS MONEY (一卡通 MONEY) is Taiwan's integrated e-wallet and transit card management platform operated by iPASS Corporation (一卡通票證股份有限公司), and this contract covers the three first-party web surfaces the source inspected for tokens on 2026-06-22: the service introduction at `https://www.i-pass.com.tw/Page/iPMIntroduce`, the app download page at `https://www.i-pass.com.tw/Page/download`, and the homepage at `https://www.i-pass.com.tw/`. Every value stays attached to the surface that established it. Reading iPASS MONEY as that e-wallet and transit-card platform, reading those three inspected pages as this contract's token surfaces, and keeping values attached to the surface that established them, are derived editorial implementation inferences from the verified surfaces; they are not iPASS MONEY-authored or a separately published UI specification.

The captured interface layer is defined, in the source's wording, by an energetic, nature-connected green — a hue that bridges the civic trust of public transit systems and the approachability of a consumer fintech app. The canvas is predominantly white (`#ffffff`) and light grey (`#f4f4f4`). The defining visual signature is a confident, rounded-everything brand language: primary action buttons are full-pill (100px radius), social icon containers are near-circular (200px), and even the small cookie consent button shows a rounded edge (5px). The brand green family (`#53b232` for buttons, `#10a83b` for active navigation, `#00c43e` for social highlights, `#00a73c` for hero section backgrounds) is layered across surfaces. Typography is handled through `stolzl` as the display face with `Noto Sans TC` as the Chinese character workhorse. The body system sits at 16px / weight 400 in near-black `#212529`, the Bootstrap default. The hex values, family names, radii, and the green-family pairing in this paragraph are recorded. Reading the canvas as government-adjacent professionalism that feels neither cold nor corporate-heavy; reading the rounded geometry as communicating accessibility for everyday Taiwanese commuters, shoppers, and households rather than financial power users; reading the four greens as a transit-inspired color system without becoming monotonous; reading the dual-font split as a pragmatic split that prioritizes Traditional Chinese legibility; and reading the Bootstrap body default as indicating that the product was built with a pragmatic CSS framework foundation rather than a bespoke design system, are derived editorial implementation inferences from the verified surfaces; they are not iPASS MONEY-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. iPASS (一卡通) was established in Taiwan to operate stored-value card payment services for public transit, expanding progressively from Kaohsiung's mass transit system to a nationwide multi-purpose payment platform. The corporate entity — 一卡通票證股份有限公司 (iPASS Corporation) — operates under the brand in both physical card form (the signature orange-blue stored-value card) and the digital wallet: **iPASS MONEY**. The MONEY layer transforms the transit card brand into a full-spectrum daily fintech: QR code payments via TWQR, inter-institutional transfers with no fees, utility bill payment, and cross-border PayPay support for Japan. In early 2026, LINE Pay's iPASS MONEY wallet features migrated to iPASS's standalone app — consolidating what was previously a secondary feature of LINE Pay into a dedicated brand surface. This migration marks iPASS MONEY's evolution from embedded fintech feature to an independent consumer app brand. The visual identity reflects this transit-first heritage: green communicates public transport, sustainability, and civic service. The orange accent of the physical iPASS card is echoed minimally in the digital brand — as a single urgency color for callout moments — while the green takes full ownership of the digital palette. The establishment in Taiwan, Kaohsiung mass-transit origin, 一卡通票證股份有限公司, orange-blue stored-value card, iPASS MONEY wallet, TWQR, fee-free inter-institutional transfers, utility bills, PayPay, early 2026 LINE Pay migration, and the last-sentence pairing of a minimal orange echo with green ownership of the digital palette are the source's own narrative facts; they do not by themselves supply interface tokens. Classifying that founding-and-migration narrative as context that does not by itself supply interface tokens is a derived editorial implementation inference from the verified surfaces; it is not iPASS MONEY-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=5 lang=en -->
### Primary tasks

Selecting these five as the product's primary tasks is a derived editorial implementation inference from the verified surfaces; it is not iPASS MONEY-authored or a separately published UI specification. Each names a label or surface the source records. They do not come from the source's persona section.

- Read the service introduction on `https://www.i-pass.com.tw/Page/iPMIntroduce`.
- Download 一卡通 iPASS MONEY APP from `https://www.i-pass.com.tw/Page/download`.
- Transfer between iPASS MONEY accounts under the live line 「一卡通 iPASS MONEY APP 之間轉帳免手續費！」.
- Pay with 「TWQR付款」.
- Use the same surface the source positions as 「電子支付工具也是票卡管理小幫手」 to manage a stored-value transit card.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source labels its named figures as fictional archetypes informed by publicly observable iPASS MONEY user segments (Taiwanese daily commuters, urban households, cross-border travelers), not individual people, so those biographies are dropped rather than promoted, and no name, age, city, or occupation is carried into this document or its sidecar. What the source independently records is the audience grouping those archetypes were said to be informed by: Taiwanese daily commuters, urban households, cross-border travelers. Reading those groups as this product's audience is a derived editorial implementation inference from the verified surfaces; it is not iPASS MONEY-authored or a separately published UI specification.

### Distinctive traits

The list restates the source's Key Characteristics. The values are measured; the groupings and the readings inside them are a derived editorial implementation inference from the verified surfaces — they are not iPASS MONEY-authored or a separately published UI specification.

- Full-pill geometry throughout (100px–200px border radius on interactive elements)
- Green family of four (`#53b232`, `#10a83b`, `#00c43e`, `#00a73c`) — each carrying a distinct UI role
- stolzl (Latin/numbers) + Noto Sans TC (Traditional Chinese) dual-font system
- Orange accent (`#ff9900`) reserved for high-urgency callouts
- Light grey (`#f4f4f4`) surfaces with white cards — flat, shadow-light aesthetic
- Civic/transit brand heritage expressed through green sustainability framing

### Principles

These five items are a derived editorial implementation inference from the verified surfaces; they are not iPASS MONEY-authored or a separately published UI specification. The source states them in its own Principles section together with the UI implication it draws from each.

1. **Integrate, don't fragment.** One app for transit, payment, transfers, and bill management. *UI implication:* all service categories accessible from a single bottom navigation or menu; no deep link silos per function.
2. **Simple registration, immediate value.** The system's onboarding promise: "ID card + bank account = ready." *UI implication:* minimize registration steps; surface the value proposition before the form.
3. **Zero-fee transfer as trust signal.** No-fee transfers between iPASS MONEY accounts is the competitive anchor. *UI implication:* surface the "免手續費" claim at the transfer CTA, not buried in fine print.
4. **Sustainability as brand value.** 一卡通綠點 (Green Points) for transit use — earning points by taking public transport, not just spending. *UI implication:* green palette is earned symbolically; the color itself communicates eco-consciousness.
5. **Accessibility through consistency.** Full-pill buttons, large touch targets, CJK-first typography. *UI implication:* every interactive element must be thumb-friendly at 58px+ height; Chinese text must render at ≥16px body size.

### Application rules

The source states these seven as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not iPASS MONEY-authored or a separately published UI specification.

- Use `#53b232` (iPASS Green) for all primary action buttons in the full-pill (100px) radius
- Use `Noto Sans TC` for all Traditional Chinese body text to ensure proper character rendering
- Use stolzl for navigation labels and Latin/numeric display headings
- Separate page sections with full-width color bands (white / `#f4f4f4` / `#00a73c` green)
- Apply weight 600 to all section headings for clear but accessible visual hierarchy
- Reserve `#ff9900` orange for single high-urgency callout moments — never as a secondary action
- Use the full circle (200px radius) for social icon containers — it's the brand's social identity

### Avoid

The source states these seven as its Don't list; they are kept as its rules, reasons included. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not iPASS MONEY-authored or a separately published UI specification.

- Dilute the green family by introducing additional accent colors — the four greens cover all brand roles
- Use sharp corners (0px radius) on interactive elements — even small UI elements should carry ≥5px radius
- Apply drop shadows broadly — the system is intentionally flat; save the `5px` shadow for selective elevation only
- Use weight 800 for headings — iPASS MONEY uses 600 throughout, not ExtraBold
- Mix Traditional Chinese text with fonts lacking CJK coverage (stolzl alone is insufficient for Chinese)
- Place orange (`#ff9900`) on green backgrounds — color accessibility is compromised without sufficient contrast
- Use `#5cb85c` (Bootstrap green) as a brand color — it's a legacy utility tint, not the primary `#53b232`

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Each role below pairs a name with the value and the use the source records. Where a line also characterizes a value — button green as the dominant CTA signal, nav-active as slightly deeper, bright green as the most saturated, hero green as mid-depth full-bleed, Bootstrap green as a legacy utility tint, orange as a single urgency accent — that characterization is a derived editorial implementation inference from the verified surfaces; it is not iPASS MONEY-authored or a separately published UI specification.

Primary

- **iPASS Green** (`#53b232`): Primary brand CTA color. Used for all action buttons across the iPASS MONEY app intro pages — 16px/700 stolzl, full-pill 100px radius, white text. Token-set key `tokens.colors.primary`. The source note also records this as primary = iPASS MONEY button green (`#53b232`, rgb 83 178 50).
- **Nav Active Green** (`#10a83b`): Active navigation link color and active state indicator. Token-set key `tokens.colors.primary-nav`.
- **Bright Brand Green** (`#00c43e`): Used for social follow section headings and social icon foreground in the light grey circle containers. Token-set key `tokens.colors.brand-bright`.
- **Hero Background Green** (`#00a73c`): Section-level background color used for the "convenience-list" hero section. Token-set key `tokens.colors.brand-hero`.
- **Bootstrap Secondary Green** (`#5cb85c`): Appears in legacy Bootstrap-influenced UI components on the site. Token-set key `tokens.colors.secondary-green`.

Canvas and surface

- **Pure White** (`#ffffff`): Page canvas, white card backgrounds, text on primary green. Token-set key `tokens.colors.canvas`.
- **Light Surface** (`#f4f4f4`): Tinted surface for social icon container backgrounds and feature card sections. Token-set key `tokens.colors.surface`.
- **On-Primary** (`#ffffff`): Foreground text on primary green. Token-set key `tokens.colors.on-primary`. Same hex as Pure White; the keys stay unmerged.

Text

- **Heading Near-Black** (`#1c1c1c`): Slightly darker heading color at H2/H3 level (32px/600). Token-set key `tokens.colors.ink`.
- **Body Near-Black** (`#212529`): Primary body text color — standard Bootstrap body default, applied consistently. Token-set key `tokens.colors.body`.
- **Muted Grey** (`#777573`): Secondary text, inactive navigation links, tertiary labels. Token-set key `tokens.colors.muted`.
- **Hairline** (`#cdcdcd`): Thin dividers and borders used to separate content sections in a hairline weight. Token-set key `tokens.colors.hairline`.

Accent

- **iPASS Orange** (`#ff9900`): Accent orange for high-emphasis callouts — the "Here We Go!!" section heading uses this orange to signal urgency and excitement. Token-set key `tokens.colors.accent-orange`.

Keeping `tokens.colors.canvas` and `tokens.colors.on-primary` as separate keys that share a hex is a derived editorial implementation inference from the verified surfaces; it is not iPASS MONEY-authored or a separately published UI specification.

### Spacing

Unitless token-set steps from `tokens.spacing`: `xs 4` · `sm 8` · `md 16` · `base 16` · `lg 24` · `xl 40` · `xxl 48` · `section 64`. The source restates the same scale in px as 4px, 8px, 16px, 24px, 40px, 48px, 64px, and names a base unit of 16px (Bootstrap default). Button padding lands at 16px vertical / 40px horizontal for full-pill CTAs. `tokens.spacing.xs: 4` is not a radius step. `tokens.spacing.sm: 8` is not `tokens.rounded.md: 8`. `tokens.spacing.md: 16` is not `tokens.spacing.base: 16` and is not a type size. `tokens.spacing.base: 16` is not the 16px half of `16px 40px` and is not a type size. `tokens.spacing.lg: 24` is not a type size. `tokens.spacing.xl: 40` is not the display-hero `40` and is not the 40px half of `16px 40px`. `tokens.spacing.xxl: 48` is not a control height. `tokens.spacing.section: 64` is not a type size. Keeping those key paths unmerged is a derived editorial implementation inference from the verified surfaces; it is not iPASS MONEY-authored or a separately published UI specification.

### Shape

Unitless token-set steps from `tokens.rounded`: `sm 5` · `md 8` · `lg 50` · `full 100` · `circle 200`.

The source's named radius uses, kept on their own rows:

- Small (5px): Cookie/legacy UI elements — `tokens.rounded.sm`
- Medium (8px): Cards, containers — `tokens.rounded.md`
- Large (50px): Accessibility shortcut link — `tokens.rounded.lg`
- Full Pill (100px): Primary CTA buttons — `tokens.rounded.full`
- Circle (200px): Social icon containers — `tokens.rounded.circle`

`tokens.rounded.full: 100` stays the unitless full-pill step. It is not `9999` and is not a type size. `tokens.rounded.sm: 5` is not a spacing step. `tokens.rounded.md: 8` is not `tokens.spacing.sm: 8`. `tokens.rounded.lg: 50` is not a spacing step. `tokens.rounded.circle: 200` is not a duration and is not `tokens.rounded.full: 100`. Keeping those paths unmerged, keeping the source's named radius uses on their own rows, and keeping Medium 8px as the card/container step, is a derived editorial implementation inference from the verified surfaces; it is not iPASS MONEY-authored or a separately published UI specification.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow | Page backgrounds, nav, headings |
| Subtle (Level 1) | `rgba(0,0,0,0.25) 0 0 5px` | Accessibility skip-link button, elevated white cards |
| Section Band | Full-width background color change | Section separation without z-axis lift |

Token-set path `tokens.shadow.soft`: `rgba(0, 0, 0, 0.25) 0px 0px 5px 0px`. Token-set path `tokens.components.card-white.shadow`: `rgba(0,0,0,0.25) 0px 0px 5px 0px`. The table's Subtle spelling, the YAML `tokens.shadow.soft` spelling, and the card-white spelling are kept as three records; they are not merged into one string. Keeping those three spellings unmerged is a derived editorial implementation inference from the verified surfaces; it is not iPASS MONEY-authored or a separately published UI specification.

iPASS MONEY uses an extremely light touch with elevation — a single `5px blur, 0.25 alpha black` ambient shadow appears only on the accessibility shortcut link and occasional white cards. The system relies primarily on background color alternation (white/grey/green bands) rather than drop shadows. Reading that as consistent with a mobile-transit product prioritizing clarity over decoration is the source's own elevation philosophy; treating it as a current-surface instruction is a derived editorial implementation inference from the verified surfaces; it is not iPASS MONEY-authored or a separately published UI specification.

### Motion

The source attributes its token-level claims to a live inspection of computed color, type, radius, and shadow on `https://www.i-pass.com.tw/Page/iPMIntroduce`, `https://www.i-pass.com.tw/Page/download`, and `https://www.i-pass.com.tw/`. The motion contract below sits outside that attribution: the source's own evidence note assigns a source to its voice samples, its brand narrative, and its personas, and assigns none to the easing curves. The durations, easing roles, and motion rules below, and the omission of the three untraceable curve values, are therefore a derived editorial implementation inference from the verified surfaces; they are not iPASS MONEY-authored or a separately published UI specification.

Durations:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 100ms | Tap feedback, button press, nav toggle |
| `motion-standard` | 200ms | Card reveal, tab switch, modal open |
| `motion-slow` | 350ms | Page transition, hero reveal, section scroll animation |

Easing roles — three roles with declared uses. The specific curve values the source lists (`cubic-bezier(0.25, 0.46, 0.45, 0.94)`, `cubic-bezier(0.55, 0.085, 0.68, 0.53)`, `cubic-bezier(0.25, 0.1, 0.25, 1.0)`) are not traceable to iPASS MONEY-computed samples, so the curves are omitted here and only the roles and their uses are kept:

| Token | Use |
|---|---|
| `ease-enter` | Elements arriving (cards, sheets, QR code) |
| `ease-exit` | Elements dismissing |
| `ease-standard` | Standard two-way transitions |

An exact curve may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework or vendor document — does not satisfy that condition.

Motion rules, as the source states them:

- As a transit and payment app used in public environments (MRT gates, checkout queues), motion must be fast and purposeful.
- QR code generation should appear near-instant (100ms feedback, then populate).
- Pill button taps respond with immediate opacity/scale feedback.
- Section scroll reveals use `motion-slow / ease-enter` for marketing pages, never for functional transaction screens where latency reads as error.
- Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; payment-critical flows must remain fully functional without motion dependency.

The "fast and purposeful" / "latency reads as error" readings are the source's own motion rules; treating them as current-surface instructions is already covered by the motion-section qualifier above.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | The three inspected surfaces use `stolzl` for Latin display and `Noto Sans TC` for Traditional Chinese. They do not publish a universal current typography token or a separately issued type specimen. That "no published type token" reading is a derived editorial implementation inference from the verified surfaces; it is not iPASS MONEY-authored or a separately published UI specification. |
| Live computed surface-use | The inspected surfaces compute visible text as `stolzl` with `Noto Sans TC`. The collector recorded body as `stolzl, roboto, Noto Sans TC`. |
| Official distributed asset | `stolzl` is loaded as a web font on the inspected surfaces. `Noto Sans TC` is Google's Traditional Chinese Noto font. That web-font / Google-Noto classing is a derived editorial implementation inference from the verified surfaces; it is not iPASS MONEY-authored or a separately published UI specification. |
| Declared-only | The source records `Roboto, Open Sans, 微軟正黑體, Arial, sans-serif` as the fallback stack. They are fallbacks, not a second brand face. Classing those fallback members as not the brand face is a derived editorial implementation inference from the verified surfaces; it is not iPASS MONEY-authored or a separately published UI specification. |
| License | The source records Noto Sans TC as Google's Traditional Chinese Noto font. This record does not establish an iPASS-issued font-license notice for `stolzl`. That Google-versus-grant reading is a derived editorial implementation inference from the verified surfaces; it is not iPASS MONEY-authored or a separately published UI specification. |
| Outside these captures | Typography on surfaces the source did not inspect stays outside these three captures. Reading that typography as outside this contract is a derived editorial implementation inference from the verified surfaces; it is not iPASS MONEY-authored or a separately published UI specification. |

### Family

- **Current visible display family:** `stolzl`. Token-set path `tokens.typography.family.display`.
- **Current visible CJK / body family:** `Noto Sans TC`. Token-set path `tokens.typography.family.body`.
- **Fallbacks:** `Roboto, Open Sans, 微軟正黑體, Arial, sans-serif`. Token-set path `tokens.typography.family.fallback`.
- Do not replace `stolzl` or `Noto Sans TC` with a system substitute. A fallback member of the stack is never presented as the brand face. The source's dual-font rule: Noto Sans TC handles Traditional Chinese; stolzl handles Latin branding and numbers. That single-pair restatement and that fallback prohibition are a derived editorial implementation inference from the verified surfaces; they are not iPASS MONEY-authored or a separately published UI specification.

### Type roles

| Role | Font | Size | Weight | Line height | Token-set path | Token-set use |
|---|---|---:|---:|---:|---|---|
| App Download Hero | stolzl | 40px | 600 | 1.25 | `tokens.typography.display-hero` | App download headline, stolzl bold |
| Section Heading | stolzl/Noto Sans TC | 32px | 600 | 1.35 | `tokens.typography.section` | Feature section headings, stolzl/Noto Sans TC |
| Feature Sub-heading | stolzl/Noto Sans TC | 24px | 600 | 1.40 | `tokens.typography.subsection` | Feature card subheadings in brand green |
| Navigation | stolzl | 17.6px | 400 | 1.40 | `tokens.typography.nav` | Top navigation items |
| Body | Noto Sans TC | 16px | 400 | 1.50 | `tokens.typography.body` | Body copy, paragraphs |
| Page Title | stolzl/Noto Sans TC | 33.6px | 400 | 1.35 | `tokens.typography.h1-page` | Page title breadcrumb |

YAML line heights stay unitless ratios: `1.25` on App Download Hero, `1.35` on Section Heading and Page Title, `1.40` on Feature Sub-heading and Navigation, `1.50` on Body. They are never converted to a replacement px (A1a). The source hierarchy table also writes Navigation Active at 16.64px / 700 / `#10a83b` and Button Primary at 16px / 700 / `#ffffff`; those rows are not `tokens.typography.*` keys and are kept on the Nav Link and Primary Action components. A §9 example prompt also records a social-section heading at 35.2px / 600 / `#00c43e`; that row is not a `tokens.typography.*` key and is kept on the Social Platform Link block, not as a seventh type-role key. Keeping the six token-set roles on their paths, keeping YAML line heights as unitless ratios rather than a replacement px, and keeping the 16.64px / 35.2px sizes on the components rather than inventing typography keys, is a derived editorial implementation inference from the verified surfaces; it is not iPASS MONEY-authored or a separately published UI specification.

The source hierarchy table's notes, kept beside the roles: App Download Hero is 「立即下載 一卡通 iPASS MONEY APP」; Section Heading is Feature section headings in `#1c1c1c`; Feature Sub-heading is Feature card titles in brand green `#53b232`; Page Title is the breadcrumb page title.

Type rules the source states:

- **Chinese-first legibility**: Noto Sans TC ensures Traditional Chinese text renders cleanly at body sizes; stolzl handles Latin branding and numbers.
- **Weight 600 for headings**: All functional headings (H2/H3/H4) use weight 600, never 400 or 800, resulting in a clear but accessible hierarchy.
- **Green for feature subheads**: H4 elements within feature cards are rendered in brand green (`#53b232`) rather than near-black, turning the font color into a brand signal.

The three rule titles and the Chinese-first / weight-600 / green-subhead readings are a derived editorial implementation inference from the verified surfaces; they are not iPASS MONEY-authored or a separately published UI specification. The sizes, weights, and ratios are recorded.

### Assets

- Logo treatment the source frontmatter records: `logo.type: favicon` and `logo.slug` `https://static01-ipass.cdn.hinet.net/ipassweb/iPassWebV2/Content/style2018/img/core-img/logo.png`.
- The source records `stolzl` as a loaded web font and `Noto Sans TC` as Google's Traditional Chinese Noto font on the inspected surfaces.

Reading the favicon URL as a hosted brand file on the inspected surfaces, and reading Noto Sans TC as Google's face rather than an iPASS-exclusive package, is a derived editorial implementation inference from the verified surfaces; it is not iPASS MONEY-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### How applicability is decided here

The source declares each token-set component with a primitive type (`button`, `tab`, `card`, `badge`, `toggle`) and a value set; those types are preserved per component. Applicability below is judged by each control's role, never by whether a visual treatment for that state happens to be recorded: where the source supplies no treatment for an applicable state, the value is omitted and the state stays applicable. `not-applicable` is used only where the control's role makes the state meaningless — a destination CTA that commits no operation in place, a tab that only selects a destination, or a display element with no action at all — and the reason given is always that semantic one. Where the source supplies no interaction evidence for a container at all, its kind and applicability map are omitted rather than decided. A `Primitive type` line is attached only when the source YAML records that type on that component. A §4-only component that is not in the token set is labeled `not in the token set`.

The source records no `focus-visible` treatment. Generic focus is not invented. `focus-visible` stays applicable on interactive controls; the visual treatment is omitted.

The role-based decision procedure above, every interactive-kind verdict, every applicability verdict, and the reason given for either is a derived editorial implementation inference from the verified surfaces; they are not iPASS MONEY-authored or a separately published UI specification. This is not a complete state-coverage claim.

### Primary Action (App CTA)

- Role: destination control that opens an app-feature action
- Primitive type: `button` · Kind: interactive
- Domain: iPASS MONEY app intro pages on `https://www.i-pass.com.tw/Page/iPMIntroduce` and `https://www.i-pass.com.tw/Page/download`
- Background: `#53b232`
- Text: `#ffffff`
- Radius: 100px
- Padding: 16px 40px
- Height: 58px
- Font: 16px stolzl weight 700
- Token-set font record: `16px / 700 stolzl`
- Token-set use: `Primary CTA — app feature actions, full pill`
- Published labels: `了解更多`, `立即下載`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | The surface contract fades green CTAs to `#5cb85c` to preserve the brand read while communicating unavailability |
| loading | not-applicable | This control opens a feature or download destination; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | This control sends the reader to a destination; the destination, not the button, reports whether that request failed |
| success | not-applicable | Same role reason: reaching the feature or download destination is not an operation with a success result on this button |

### Social Platform Link

- Role: destination icon-only links for Facebook, LINE, YouTube, Instagram
- Primitive type: `button` · Kind: interactive
- Domain: social follow section
- Background: `#f4f4f4`
- Text: `#00c43e`
- Radius: 200px
- Padding: 10px
- Height: 60px
- Font: 18.56px weight 400
- Token-set font record: `18.56px / 400 stolzl`
- Token-set use: `Social platform icon links — rounded circle container`
- §9-only heading record (not a `tokens.typography.*` key): 35.2px / 600 / `#00c43e`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web link; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A destination link whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control opens a social destination; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Destination action; the destination, not this button, reports failure |
| success | not-applicable | Same role reason: reaching the social destination is not an operation this button reports as success |

### Accent Consent Button

- Role: cookie consent accept control
- Primitive type: `button` · Kind: interactive
- Background: `#ff9900`
- Text: `#000000`
- Radius: 5px
- Padding: 8px 15px
- Font: 14px weight 400
- Token-set font record: `14px / 400`
- Token-set use: `Cookie consent accept button (accent orange)`

`#000000` is this component's renderable foreground. It is not a `tokens.colors.*` key and is not merged into Heading Near-Black or Body Near-Black. Keeping that cookie foreground on this component rather than inventing a color-token key is a derived editorial implementation inference from the verified surfaces; it is not iPASS MONEY-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A consent control whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control dismisses the cookie banner; it does not commit a transfer or payment whose in-progress state it could report |
| error | not-applicable | Dismissing the banner is not an operation this button reports as failure |
| success | not-applicable | Same role reason: accepting the banner is not an operation with a success result on this button |

### Nav Link

- Role: top-nav item
- Primitive type: `tab` · Kind: interactive
- Domain: top navigation
- Text (default): `#777573`
- Font (default): 17.6px stolzl weight 400
- Padding: 0px 9px
- Text (active): `#10a83b`
- Font (active): 16.64px weight 700
- Token-set font record: `17.6px / 400 stolzl`
- Token-set active: `text #10a83b weight 700`
- Token-set use: `Top nav item`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable item; visual treatment omitted |
| disabled | applicable | A destination item whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This item is a destination tab; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Destination tab; the destination, not the item, reports failure |
| success | not-applicable | Same role reason: reaching a nav destination is not an operation with a success result |

### Toggle Menu

- Role: mobile hamburger toggle in the dark header
- Primitive type: `toggle` · Kind: interactive
- Text: `#ffffff`
- Token-set use: `Mobile hamburger toggle in dark header`
- Source collapsing note: Header collapses to hamburger menu (white `:::` icon on transparent background)

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web toggle; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A toggle whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control opens or closes the header menu; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Opening the menu is not an operation this toggle reports as failure |
| success | not-applicable | Same role reason: revealing the menu is not an operation with a success result |

### Light Surface Card

- Role: feature section card on a light grey tinted background
- Primitive type: `card`
- Background: `#f4f4f4`
- Radius: 8px
- Token-set use: `Light grey surface cards for feature sections`

The source supplies no interaction evidence for this card, so kind and a state-applicability map are both withheld.

### White Elevated Card

- Role: white card with soft shadow against grey surface sections
- Primitive type: `card`
- Background: `#ffffff`
- Radius: 8px
- Shadow: `rgba(0,0,0,0.25) 0px 0px 5px 0px`
- Token-set use: `White elevated card with soft shadow`

The source supplies no interaction evidence for this card, so kind and a state-applicability map are both withheld.

### Brand Green Badge

- Role: category tag or status indicator
- Primitive type: `badge`
- Kind: non-interactive — a status or category label, not a commit control
- Background: `#53b232`
- Text: `#ffffff`
- Radius: 50px
- Padding: 8px 20px
- Font: 14px weight 700
- Token-set font record: `14px / 700`
- Token-set use: `Status or category tag in brand green`

### Hero Green Section

- Role: full-width "convenience-list" section background — the site's primary brand-colored band
- not in the token set
- Background: `#00a73c`
- §9-only heading record (not a `tokens.typography.*` key): centered H2 at 32px/600 in white on this band. The hierarchy table's Section Heading color remains `#1c1c1c`; the two records stay unmerged. Keeping the §9 white-on-green heading and the hierarchy `#1c1c1c` Section Heading as two records is a derived editorial implementation inference from the verified surfaces; it is not iPASS MONEY-authored or a separately published UI specification.

The source supplies this band as a §4 body record only. It has no YAML `type` key, so no `Primitive type` line is attached. Kind and a state-applicability map are withheld.

### State record

The source's state contract, preserved with its values and copy. The source's own evidence note assigns a source to its voice samples, its brand narrative, and its personas, and assigns none to this state section; the treatments below are therefore a derived editorial implementation inference from the verified surfaces rather than measured per-control observations, and they are not iPASS MONEY-authored or a separately published UI specification.

| State | Treatment |
|---|---|
| **Empty (no transaction history)** | White canvas with single Noto Sans TC body copy in `#212529`, explaining the empty state with a green CTA to start a transaction. |
| **Empty (no linked cards)** | `#f4f4f4` surface with an illustration placeholder and green pill button to add a transit card. |
| **Loading (balance fetch)** | Skeleton rows on `#f4f4f4` surface at final card dimensions, 8px radius. Consistent with the flat surface system — no shimmer animation heavier than a gentle opacity pulse. |
| **Loading (QR code generation)** | Spinner in brand green `#53b232` within the QR code container area. |
| **Error (transfer failed)** | Inline message in `#212529` near-black with clear next-step instruction in Traditional Chinese. No generic error codes unexplained. |
| **Error (payment QR timeout)** | Inline prompt to regenerate the QR code with a green refresh CTA. |
| **Success (transfer complete)** | Brief confirmation screen with a checkmark in brand green `#53b232`; transaction details below; no excessive animation. |
| **Success (top-up credited)** | Inline notification with updated balance immediately visible, confirmation in brand green. |
| **Skeleton** | `#f4f4f4` blocks at final content dimensions, 8px radius, gentle pulse opacity. |
| **Disabled** | Muted grey `#777573` text on reduced-opacity surface; green CTAs fade to `#5cb85c` to preserve the brand read while communicating unavailability. |

These rows describe empty, loading, error, success, skeleton, and disabled treatments the source wrote at system level. They are not attached as visual treatments to the destination controls above. The Primary Action disabled row cites the matching `#5cb85c` fade because that control is a green CTA. That non-attachment reading, and the Primary Action disabled attachment, are derived editorial implementation inferences from the verified surfaces; they are not iPASS MONEY-authored or a separately published UI specification.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

- Standard Bootstrap-based 12-column grid
- Full-width colored section bands (white/grey/green alternating)
- Feature sections organized into horizontal rows of illustrated feature cards
- Centered layout with max-width container for readability
- Spacing restated from `tokens.spacing`: 4 / 8 / 16 / 24 / 40 / 48 / 64
- Shape restated from `tokens.rounded`: small 5 · medium 8 · large 50 · `full: 100` · circle 200
- Nav bar height the §9 example prompt records: 60px, white background

Reading each service feature as given a full viewport-width section band, ensuring cognitive separation between payment, transfer, rewards, transit; reading interactive pill buttons as using generous internal padding (16px 40px) over tight typography — a touch-first mobile design carried to desktop; and reading white → light grey → green → white as a color-coded wayfinding system through the service sections, are derived editorial implementation inferences from the verified surfaces; they are not iPASS MONEY-authored or a separately published UI specification.

Responsive behavior. The source's live inspection was run as a computed-style pass, and its own evidence note attributes token-level claims to that inspection; the breakpoints, collapsing strategy, and the source's reading of the recorded target sizes are stated by the source at system level rather than measured across viewports, so they are a derived editorial implementation inference from the verified surfaces and are not iPASS MONEY-authored or a separately published UI specification.

| Name | Width | Key Changes |
|---|---|---|
| Mobile | <768px | Single column, nav collapses to hamburger, hero text stacks |
| Tablet | 768-1024px | Two-column feature cards, nav may retain partial items |
| Desktop | ≥1024px | Full horizontal nav, multi-column feature grid, wide hero band |

Touch targets the source records: Primary CTA buttons 58px height, 100px full-pill; Social icon circles 60px diameter; Navigation items 40px height with 9px horizontal padding.

Collapsing strategy, as the source states it:

- Header collapses to hamburger menu (white `:::` icon on transparent background)
- Feature sections stack from 3-4 column grid to 1-2 column on tablet/mobile
- Full-width color bands maintain across all breakpoints — the primary layout rhythm is preserved

<!-- design-md:section content-locales -->
## 6. Content & Locales

The source characterizes iPASS MONEY's voice as **pragmatic, inclusive, and confidence-inspiring** — a civic utility that sounds like a helpful city guide rather than a finance app. The service positioning as "電子支付工具也是票卡管理小幫手" (electronic payment tool and transit card management assistant) establishes a friendly dual identity: useful for both spending money and catching buses. Copy is direct Traditional Chinese without English-heavy hybrid jargon, except for the "iPASS MONEY" brand name itself and technical QR standards ("TWQR付款"). That characterization, that register reading, and the tone table below are a derived editorial implementation inference from the verified surfaces; they are not iPASS MONEY-authored or a separately published UI specification. The published lines themselves are live surface copy.

| Context | Tone |
|---|---|
| Hero headlines | Optimistic and empowering. "實現生活簡單自由！" (Achieve simple, free living!). Aspirational without hype. |
| Feature subheads | Benefit-forward, concise. "儲值簡單又安全", "生活繳費最方便", "轉帳可跨機構最方便". |
| Registration prompts | Reassuring and procedural. "請準備好身分證及銀行帳戶，註冊後即可開始使用！" |
| Transfer/payment CTAs | Speed-focused. "隨時隨地都可以轉帳，簡單快速又安全！" |
| Sustainability messaging | Community-spirited. "一卡通跟你一起用行動愛地球" (iPASS joins you in caring for the earth). |

**Voice samples (verbatim from live pages):**

- "實現生活簡單自由！" — service hero headline (aspirational positioning). *(verified live 2026-06-22)*
- "智在生活隨時掌握！" — app download CTA subhead (smart lifestyle pitch). *(verified live 2026-06-22)*
- "一卡通 iPASS MONEY APP 之間轉帳免手續費！" — transfer feature benefit (zero-fee hook). *(verified live 2026-06-22)*

Further published strings the source records on the inspected surfaces, kept byte-exact:

- 一卡通 MONEY
- 一卡通票證股份有限公司
- iPASS MONEY
- iPASS Corporation
- 一卡通
- 立即下載 一卡通 iPASS MONEY APP
- 了解更多
- 立即下載
- Here We Go!!
- 實現生活簡單自由！
- 智在生活隨時掌握！
- 一卡通 iPASS MONEY APP 之間轉帳免手續費！
- 電子支付工具也是票卡管理小幫手
- TWQR付款
- 儲值簡單又安全
- 生活繳費最方便
- 轉帳可跨機構最方便
- 請準備好身分證及銀行帳戶，註冊後即可開始使用！
- 隨時隨地都可以轉帳，簡單快速又安全！
- 一卡通跟你一起用行動愛地球
- 免手續費
- 一卡通綠點
- TWQR
- PayPay
- LINE Pay
- Facebook
- LINE
- YouTube
- Instagram
- convenience-list
- ID card + bank account = ready.

**Forbidden register**: bureaucratic coldness, banking jargon unexplained in Chinese, English-only instructions for a predominantly Chinese-speaking market, aggressive sales urgency ("Limited time offer expires now!"). That premise-to-register causal is a derived editorial implementation inference from the verified surfaces; it is not iPASS MONEY-authored or a separately published UI specification.

Reproduce the published strings above byte-exact rather than translating or re-casing them. A gloss may sit beside a line; it never replaces the line. That byte-exact / gloss-beside rule is a derived editorial implementation inference from the verified surfaces; it is not iPASS MONEY-authored or a separately published UI specification.

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

These are named values, not permissions to invent. The source records no conflict among its own Tier 1 values. Treating the list as named unresolved values rather than a license to invent is a derived editorial implementation inference from the verified surfaces; it is not iPASS MONEY-authored or a separately published UI specification.

- **Exact easing curves.** Three easing roles and their uses are established; the curve values are omitted because they are not traceable to iPASS MONEY-computed samples. Promote a curve for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed.
- **Full-pill step.** `tokens.rounded.full: 100` is the unitless full-pill step. `tokens.rounded.circle: 200` stays a separate circle step.
- **Hover and focus-visible treatments.** Those visual treatments are omitted. They are not `not-applicable`; applicability follows control meaning.
