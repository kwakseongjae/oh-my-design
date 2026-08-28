# Instacart Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Instacart is the grocery e-commerce infrastructure the source's brand narrative records, and this contract covers the two first-party web surfaces the source inspected for tokens on 2026-06-22: the homepage at `https://www.instacart.com/` and the store storefront at `https://www.instacart.com/store/kroger/storefront`. Every value stays attached to the surface that established it. Reading Instacart as that grocery e-commerce infrastructure, reading those two inspected pages as this contract's token surfaces, and keeping values attached to the surface that established them, are derived editorial implementation inferences from the verified surfaces; they are not Instacart-authored or a separately published UI specification.

The captured product UI is defined, in the source's wording, by a confident, utilitarian clarity: a white canvas (`#ffffff`) with a soft cool-grey surface (`#F6F7F8`) for secondary zones, and a single saturated green (`#108910`) that functions as both brand signal and primary action color. The palette descends from the company's 2022 rebrand — away from carrot orange toward a grocers' green. Every interactive element (nav CTA, hero button, add-to-cart) shares the same green. The custom **Instacart Sans** family runs throughout the entire product surface, from the homepage hero to store storefronts. Geometry is rounded-but-restrained: navigation buttons are `20px` radius pills; the hero CTA scales up to `28px`; filter chips are full-pill at `999px`; add-to-cart buttons sit at `20px`; cards use a modest `8px`. The hex values, family name, radii, and the 2022 rebrand / carrot-orange pairing in this paragraph are recorded. Reading the green as an unmistakable "do-this" signal trained by repetition; reading Instacart Sans as geometric, clean, with a rounded aperture that reads friendly at all sizes — personality without being whimsical, appropriate for a service that handles financial transactions around food; and reading the graduated rounding as a visual hierarchy of "how interactive is this element" through shape alone, are derived editorial implementation inferences from the verified surfaces; they are not Instacart-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. Instacart was founded in **2012** by **Apoorva Mehta** in San Francisco, after a series of failed startup ideas. The founding insight was deceptively simple: the friction between wanting groceries and physically going to a store was a solvable logistics problem. Mehta famously applied to Y Combinator with the idea and was rejected — then re-applied with a working prototype and was accepted, eventually raising seed funding from Sequoia Capital. The company scaled by partnering with existing grocery retailers (Costco, Kroger, Safeway, Whole Foods) rather than displacing them — a model that made it the infrastructure for grocery e-commerce rather than a competitor. This "empowering retailers" positioning shaped everything: the product is a white-label layer for grocery chains, not a Instacart-branded storefront. The brand's design role is to be trustworthy and invisible enough that shoppers feel they are shopping "at Kroger" or "at Costco" through a convenient interface. The 2022 rebrand introduced the current green palette and "Instacart Plak" typeface family (predecessor to today's Instacart Sans), reflecting a maturation from a gig-economy delivery startup into an established consumer grocery platform. The brand moved away from carrot orange — the original brand mark — toward a green that evokes fresh produce, sustainability, and digital modernity simultaneously. In 2023, Instacart went public on the NASDAQ under the ticker CART. What Instacart refuses: pretending to be a grocery retailer itself (the product is always "Shop at [Retailer]"). What it embraces: speed transparency (delivery windows shown immediately), savings messaging (deals, offers, EBT acceptance), and a green-first visual identity that codes trustworthiness. The years, founder, city, Y Combinator, Sequoia Capital, retailer names, 2022 rebrand, Instacart Plak, carrot orange, 2023 NASDAQ / CART, and the refuse/embrace pairing including "Shop at [Retailer]" are the source's own narrative facts; they do not by themselves supply interface tokens. Classifying that founding-and-rebrand narrative as context that does not by itself supply interface tokens is a derived editorial implementation inference from the verified surfaces; it is not Instacart-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=5 lang=en -->
### Primary tasks

Selecting these five as the product's primary tasks is a derived editorial implementation inference from the verified surfaces; it is not Instacart-authored or a separately published UI specification. Each names a label or surface the source records. They do not come from the source's persona section.

- Read the home hero "Order groceries for delivery or pickup today".
- Open the hero CTA "Sign up to get $0 delivery fee*".
- Search from the main homepage search input.
- Add to cart on store product cards.
- Choose Delivery or Pickup on a store storefront.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source labels its named figures as fictional archetypes informed by publicly observable Instacart user segments (busy professionals, parents, elderly or mobility-limited shoppers), not individual people, so those biographies are dropped rather than promoted, and no name, age, city, or occupation is carried into this document or its sidecar. What the source independently records is the audience grouping those archetypes were said to be informed by: busy professionals, parents, elderly or mobility-limited shoppers. Reading those groups as this product's audience is a derived editorial implementation inference from the verified surfaces; it is not Instacart-authored or a separately published UI specification.

### Distinctive traits

The list restates the source's Key Characteristics. The values are measured; the groupings and the readings inside them are a derived editorial implementation inference from the verified surfaces — they are not Instacart-authored or a separately published UI specification.

- Instacart Sans custom font throughout — geometric, friendly, weight 400 default
- Single green (`#108910`) for all primary CTAs — add-to-cart, sign-up, log-in
- Dark Kale green (`#003D29`) for brand immersion surfaces (banners, hero overlays)
- Forest green (`#1E6F30`) for Instacart+ promotional surfaces
- Cool-grey surface (`#F6F7F8`) and neutral chips (`#E8E9EB`) for hierarchy without shadows
- Graduated pill geometry: 20px nav buttons → 28px hero CTA → 999px filter chips
- No drop shadows on most surfaces; inset shadow on search input for depth cue
- Near-black ink (`#242529`) for text instead of pure black

### Principles

These five items are a derived editorial implementation inference from the verified surfaces; they are not Instacart-authored or a separately published UI specification. The source states them in its own Principles section together with the UI implication it draws from each.

1. **Speed is the product.** Every screen communicates delivery time before the user has to ask. *UI implication:* delivery ETAs surface in store cards immediately, not buried in checkout.
2. **The retailer's identity, amplified.** Instacart is infrastructure, not a brand competing with its partners. *UI implication:* store logos and branding take visual prominence; Instacart's green is an accent, not an override.
3. **One color, one meaning.** `#108910` green means "this action does something." *UI implication:* never use the green for decorative purposes — it trains behavioral association.
4. **Grocery frequency builds habit.** Users shop 1–2× per week; patterns must be predictable and fast. *UI implication:* consistent component placement and familiar pill geometry reduce cognitive load on each visit.
5. **Access for all.** EBT acceptance and accessibility features are not footnotes — they are featured in the filter chip row at the same level as "Fastest" and "Grocery." *UI implication:* include EBT filter prominently; don't relegate accessibility features to sub-menus.

### Application rules

The source states these seven as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not Instacart-authored or a separately published UI specification.

- Use `#108910` green for every primary action — add-to-cart, sign-up, log-in, key CTAs
- Use Instacart Sans at weight 400 for most text; reserve 600 for dense UI contexts
- Use `#F6F7F8` surface grey to group content sections without adding shadows
- Apply graduated pill geometry: 8px for cards → 20px for buttons → 999px for chips
- Use `#242529` near-black for headings and labels — never pure `#000000`
- Use `#003D29` (Kale) only for brand-dark immersive moments or Instacart+ banners
- Keep the search bar prominent and always accessible — it is the product's primary CTA

### Avoid

The source states these six as its Don't list; they are kept as its rules, reasons included. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not Instacart-authored or a separately published UI specification.

- Use drop shadows on product cards — the system relies on background tint, not elevation
- Spread the green across decorative elements — it signals "actionable" exclusively
- Mix in a second accent color for interactive elements — the green system is the brand
- Use sharp corners on interactive elements — everything interactive uses at minimum 8px radius
- Use heavy weights (700+) on body text — weight 700 is reserved for section headings only
- Use a font other than Instacart Sans — it is the complete typographic system

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Each role below pairs a name with the value and the use the source records. Where a line also characterizes a value — green as the single action color, Kale as brand-dark immersion, forest as Instacart+ promotion, cool-grey as hierarchy without shadows, ink as slightly warm and not pure black — that characterization is a derived editorial implementation inference from the verified surfaces; it is not Instacart-authored or a separately published UI specification.

Primary

- **Instacart Green** (`#108910`): Primary brand and CTA color — all buttons (Sign up, Log in CTA, Add to cart), active states, and link highlights. Token-set key `tokens.colors.primary`. The source note also records this as live CTA/add-to-cart green `#108910` = `rgb(16,137,16)`.
- **Kale Dark Green** (`#003D29`): Deep brand-dark surface for hero overlays, Instacart+ promotional banners, and immersive brand moments. Named "Kale" in Instacart's brand vocabulary. Token-set key `tokens.colors.primary-dark`.
- **Forest Green** (`#1E6F30`): Mid-range green for Instacart+ feature banners and secondary promotional surfaces. Token-set key `tokens.colors.primary-forest`.

Canvas and surface

- **Canvas White** (`#ffffff`): Page background, card surfaces, button text on green backgrounds. Token-set key `tokens.colors.canvas`.
- **Surface Grey** (`#F6F7F8`): Cool-grey surface for secondary sections, list containers, and neutral backgrounds. Token-set key `tokens.colors.surface`.
- **Chip Grey** (`#E8E9EB`): Inactive filter chips, carousel navigation buttons, secondary interactive surfaces. Token-set key `tokens.colors.surface-alt`.

Text

- **Ink Near-Black** (`#242529`): Primary heading and label text — slightly warm, not pure black. Token-set key `tokens.colors.ink`.
- **Ink Secondary** (`#343538`): Body text, nav links, secondary labels. Token-set key `tokens.colors.ink-secondary`.
- **Hairline** (`#C7C8CD`): Border for inputs, card outlines, and dividers. Token-set key `tokens.colors.hairline`.
- **On-Primary** (`#ffffff`): Foreground text on green CTAs. Token-set key `tokens.colors.on-primary`. Same hex as Canvas White; the keys stay unmerged.
- **On-Dark** (`#ffffff`): Foreground on Kale / brand-dark surfaces. Token-set key `tokens.colors.on-dark`. Same hex as Canvas White and On-Primary; the keys stay unmerged. Keeping `tokens.colors.canvas`, `tokens.colors.on-primary`, and `tokens.colors.on-dark` as separate keys that share a hex is a derived editorial implementation inference from the verified surfaces; it is not Instacart-authored or a separately published UI specification.

### Spacing

Unitless token-set steps from `tokens.spacing`: `xs 4` · `sm 8` · `md 12` · `base 16` · `lg 20` · `xl 24` · `xxl 32` · `section 48`. The source restates the same scale in px as 4px, 8px, 12px, 16px, 20px, 24px, 32px, 48px, and names a base unit of 8px. Chip horizontal padding lands consistently at 16px across all filter chips and nav buttons; the hero CTA uses 16px horizontal padding at 56px height. `tokens.spacing.xs: 4` is not `tokens.rounded.sm: 4`. `tokens.spacing.sm: 8` is not `tokens.rounded.md: 8`. `tokens.spacing.md: 12` is not a radius step. `tokens.spacing.base: 16` is not a type size and is not the 16px half of `0px 16px`. `tokens.spacing.lg: 20` is not `tokens.rounded.lg: 20`. `tokens.spacing.xl: 24` is not the Store Log In `24px` radius. `tokens.spacing.xxl: 32` is not a type size. `tokens.spacing.section: 48` is not a control height. Keeping those key paths unmerged is a derived editorial implementation inference from the verified surfaces; it is not Instacart-authored or a separately published UI specification.

### Shape

Unitless token-set steps from `tokens.rounded`: `sm 4` · `md 8` · `lg 20` · `pill 28` · `full 999`.

The source's named radius uses, kept on their own rows:

- Small (4px): Tight elements — `tokens.rounded.sm`
- Medium (8px): Cards, content containers — the workhorse — `tokens.rounded.md`
- Large (20px): Nav buttons, add-to-cart buttons, Delivery/Pickup tabs — `tokens.rounded.lg`
- Hero CTA (28px): The largest pill for the hero CTA — `tokens.rounded.pill`
- Chip (999px): Full pill for filter chips and badges — `tokens.rounded.full`

`tokens.rounded.full: 999` stays the unitless full step. It is not `9999` and is not a type size. `tokens.rounded.sm: 4` is not `tokens.spacing.xs: 4`. `tokens.rounded.md: 8` is not `tokens.spacing.sm: 8`. `tokens.rounded.lg: 20` is not `tokens.spacing.lg: 20`. `tokens.rounded.pill: 28` is not a spacing step. Keeping those paths unmerged, keeping the source's named radius uses on their own rows, and reading Medium 8px as the workhorse, is a derived editorial implementation inference from the verified surfaces; it is not Instacart-authored or a separately published UI specification.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow | Page background, most cards and surfaces |
| Input Inset | `rgba(0,0,0,0.05) 0px 2px 4px inset` | Search input depth cue |
| Dark Surface | `#003D29` background | Brand-dark banners, Kale immersive sections |

Token-set path `tokens.shadow.input`: `rgba(0, 0, 0, 0.05) 0px 2px 4px 0px inset`. Token-set path `tokens.shadow.card`: `rgba(52, 53, 56, 0.24) 0px 2px 4px 0px inset`. The table's Input Inset spelling and the YAML `tokens.shadow.input` spelling are kept as two records of the same inset; they are not merged into one string. The card inset is a token-set record; the source's elevation table does not attach it as a drop shadow on product cards. Keeping those two inset spellings unmerged, and keeping the card inset as a token-set record rather than a product-card drop shadow, is a derived editorial implementation inference from the verified surfaces; it is not Instacart-authored or a separately published UI specification.

Instacart's UI is largely shadow-free on product surfaces. The only pronounced shadow the source names in its elevation table is an inset shadow on the search input, reinforcing the "trough" affordance of a text field. Cards and tiles rely on `#F6F7F8` background shifts for grouping rather than elevation. Reading that as keeping the product feeling clean, fast, and mobile-native — appropriate for a high-frequency consumer grocery product — is a derived editorial implementation inference from the verified surfaces; it is not Instacart-authored or a separately published UI specification.

### Motion

The source attributes its token-level claims to a live inspection of computed color, type, radius, and shadow on `https://www.instacart.com/` and `https://www.instacart.com/store/kroger/storefront`. The motion contract below sits outside that attribution: the source's own evidence note assigns a source to its voice samples, its brand narrative, and its personas, and assigns none to the easing curves. The durations, easing roles, and motion rules below, and the omission of the three untraceable curve values, are therefore a derived editorial implementation inference from the verified surfaces; they are not Instacart-authored or a separately published UI specification.

Durations:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, chip press, add-to-cart button response |
| `motion-standard` | 200ms | Card reveal, dropdown, sheet open |
| `motion-slow` | 320ms | Page-level transitions, modal enter |

Easing roles — three roles with declared uses. The specific curve values the source lists (`cubic-bezier(0.2, 0.6, 0.25, 1)`, `cubic-bezier(0.4, 0.0, 1, 1)`, `cubic-bezier(0.25, 0.1, 0.25, 1)`) are not traceable to Instacart-computed samples, so the curves are omitted here and only the roles and their uses are kept:

| Token | Use |
|---|---|
| `ease-enter` | Arriving — modals, sheets, dropdowns |
| `ease-exit` | Dismissals |
| `ease-standard` | Two-way transitions |

An exact curve may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework or vendor document — does not satisfy that condition.

Motion rules, as the source states them:

- Instacart motion should be functional and transparent — a consumer grocery app where users are often on a time budget.
- The Add to cart button responds with a micro-scale and a count increment at `motion-fast`; product carousels scroll smoothly at `motion-standard`.
- No spring, no bounce — grocery shopping is a task, not a delight experience.
- Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the product remains fully functional.

The "task, not a delight experience" reading is the source's own motion rule; treating it as a current-surface instruction is already covered by the motion-section qualifier above.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | The two inspected surfaces use Instacart Sans throughout. They do not publish a universal current typography token or a separately issued type specimen. That "no published type token" reading is a derived editorial implementation inference from the verified surfaces; it is not Instacart-authored or a separately published UI specification. |
| Live computed surface-use | Both inspected surfaces compute visible text as `Instacart Sans`. |
| Official distributed asset | No Instacart-exclusive downloadable font package was verified in the source. That absence-of-exclusive-package reading is a derived editorial implementation inference from the verified surfaces; it is not Instacart-authored or a separately published UI specification. |
| Declared-only | The source records `Instacart Sans Fallback, Arial, sans-serif` as the fallback stack after `Instacart Sans`. They are fallbacks, not a second brand face. Classing those fallback members as not the brand face is a derived editorial implementation inference from the verified surfaces; it is not Instacart-authored or a separately published UI specification. |
| License | The source records Instacart Sans as a custom geometric sans-serif. This record does not establish an Instacart-issued font-license notice. That custom-versus-grant reading is a derived editorial implementation inference from the verified surfaces; it is not Instacart-authored or a separately published UI specification. |
| Outside these captures | Typography on surfaces the source did not inspect stays outside these two captures. Reading that typography as outside this contract is a derived editorial implementation inference from the verified surfaces; it is not Instacart-authored or a separately published UI specification. |

### Family

- **Current visible UI family:** `Instacart Sans`, falling back to `Instacart Sans Fallback, Arial, sans-serif`. Token-set path `tokens.typography.family.sans` / `tokens.typography.family.fallback`.
- There is no secondary typeface. Instacart Sans handles all text including display, body, UI, and labels. There is no monospace or secondary family.
- Do not replace Instacart Sans with a system substitute. A fallback member of the stack is never presented as the brand face. That single-family restatement and that fallback prohibition are a derived editorial implementation inference from the verified surfaces; they are not Instacart-authored or a separately published UI specification.

### Type roles

| Role | Font | Size | Weight | Line height | Token-set path | Token-set use |
|---|---|---:|---:|---:|---|---|
| Display Hero | Instacart Sans | 26px | 600 | 1.25 | `tokens.typography.display-hero` | Hero headline (viewport-width responsive) |
| Section Heading | Instacart Sans | 24px | 700 | 1.17 | `tokens.typography.section` | Section headings |
| Body | Instacart Sans | 16px | 400 | 1.50 | `tokens.typography.body` | Standard body text |
| Body Small | Instacart Sans | 14px | 400 | 1.43 | `tokens.typography.body-sm` | Secondary body, card labels |
| Button / Nav | Instacart Sans | 16px | 400 | 1.00 | `tokens.typography.button` | Nav and hero CTA labels |
| UI Dense | Instacart Sans | 14px | 600 | 1.00 | `tokens.typography.button-sm` | Store-page CTAs, filter chips |

YAML line heights stay unitless ratios: `1.25` on Display Hero, `1.17` on Section Heading, `1.50` on Body, `1.43` on Body Small, `1.00` on Button / Nav and UI Dense. They are never converted to a replacement px (A1a). The source hierarchy table also writes Search Input at 15px / 400 / 1.00 for search placeholder and input text; that row is not a `tokens.typography.*` key and is kept on the Search component, not as a seventh type-role key. Keeping the six token-set roles on their paths, and the 15px search size on the search component rather than inventing a typography key, is a derived editorial implementation inference from the verified surfaces; it is not Instacart-authored or a separately published UI specification.

The source hierarchy table's notes, kept beside the roles: Display Hero is homepage hero H1 — "Order groceries for delivery or pickup"; Section Heading is section H2s — "Stores to help you save".

Type rules the source states:

- **Weight 400 as the default**: Unlike many design systems that default to 500 or 600 for UI text, Instacart Sans 400 reads cleanly enough at all interactive sizes to carry buttons and nav items.
- **600 for dense UI only**: Store-page CTAs and filter chips step up to 600 where the information density requires more visual mass.
- **Single family**: Using only Instacart Sans creates a monolithic, brand-owned typographic voice — every screen feels like one coherent product.

The three rule titles and the default-weight / dense-UI / monolithic-voice readings are a derived editorial implementation inference from the verified surfaces; they are not Instacart-authored or a separately published UI specification. The sizes, weights, and ratios are recorded.

### Assets

- Logo treatment the source frontmatter records: `logo.type: simpleicons` and `logo.slug` `instacart`. That slug is an identity pointer through Simple Icons, not an Instacart-hosted brand file URL.
- The source records Instacart Sans as a custom family throughout the inspected surfaces. Instacart Plak is named in the brand narrative as the 2022 predecessor family; it is narrative context, not a current UI token.

Reading the Simple Icons slug as an identity pointer rather than a hosted brand file, and reading Instacart Plak as narrative context rather than a current type token, is a derived editorial implementation inference from the verified surfaces; it is not Instacart-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### How applicability is decided here

The source declares each token-set component with a primitive type (`button`, `badge`, `input`, `tab`, `card`) and a value set; those types are preserved per component. Applicability below is judged by each control's role, never by whether a visual treatment for that state happens to be recorded: where the source supplies no treatment for an applicable state, the value is omitted and the state stays applicable. `not-applicable` is used only where the control's role makes the state meaningless — a destination CTA that commits no operation in place, a tab that only selects a destination, or a display element with no action at all — and the reason given is always that semantic one. Where the source supplies no interaction evidence for a container at all, its kind and applicability map are omitted rather than decided. A `Primitive type` line is attached only when the source YAML records that type on that component. A §4-only component that is not in the token set is labeled `not in the token set`.

The source records no `focus-visible` treatment. Generic focus is not invented. `focus-visible` stays applicable on interactive controls; the visual treatment is omitted.

The role-based decision procedure above, every interactive-kind verdict, every applicability verdict, and the reason given for either is a derived editorial implementation inference from the verified surfaces; they are not Instacart-authored or a separately published UI specification. This is not a complete state-coverage claim.

### Hero Primary CTA

- Role: destination control that opens the homepage hero sign-up
- Primitive type: `button` · Kind: interactive
- Domain: homepage hero on `https://www.instacart.com/`
- Background: `#108910`
- Text: `#ffffff`
- Radius: 28px
- Padding: 0px 16px
- Height: 56px
- Font: 16px Instacart Sans weight 400
- Token-set font record: `16px / 400 Instacart Sans`
- Token-set use: `Hero CTA — Sign up, get $0 delivery fee`
- Published label: `Sign up to get $0 delivery fee*`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | The surface contract fades the green action to a muted tint rather than switching it to a foreign grey |
| loading | not-applicable | This control opens sign-up; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | This control sends the reader to a destination; the destination, not the button, reports whether that request failed |
| success | not-applicable | Same role reason: reaching the sign-up destination is not an operation with a success result on this button |

### Nav Sign Up

- Role: destination control that opens the navigation-bar primary CTA
- Primitive type: `button` · Kind: interactive
- Domain: navigation bar
- Background: `#108910`
- Text: `#ffffff`
- Radius: 20px
- Padding: 0px 16px
- Height: 40px
- Font: 16px Instacart Sans weight 400
- Token-set font record: `16px / 400 Instacart Sans`
- Token-set use: `Nav Sign up button`
- Published label: `Sign up`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | The surface contract fades the green action to a muted tint rather than switching it to a foreign grey |
| loading | not-applicable | This control opens sign-up; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Destination action; the destination, not this button, reports failure |
| success | not-applicable | Same role reason: reaching the sign-up destination is not an operation this button reports as success |

### Nav Log In (Secondary)

- Role: destination control that opens the navigation-bar secondary CTA
- Primitive type: `button` · Kind: interactive
- Domain: navigation bar
- Background: `#ffffff`
- Text: `#242529`
- Border: 1px solid `#C7C8CD`
- Radius: 20px
- Padding: 0px 16px
- Height: 40px
- Font: 16px Instacart Sans weight 400
- Token-set font record: `16px / 400 Instacart Sans`
- Token-set use: `Nav Log in button`
- Published label: `Log in`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A destination link whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control opens log-in; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Destination action; the destination, not this button, reports failure |
| success | not-applicable | Same role reason: reaching the log-in destination is not an operation this button reports as success |

### Add to Cart

- Role: product-card add-to-cart commit
- Primitive type: `button` · Kind: interactive
- Domain: product cards on store pages
- Background: `#108910`
- Text: `#ffffff`
- Radius: 20px
- Height: 36px
- Font: 16px Instacart Sans weight 400
- Token-set font record: `16px / 400 Instacart Sans`
- Token-set use: `Add to cart button on product cards`
- Published label: `Add`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | The surface contract records the add button disabled on "Out of stock"; green actions fade to a muted tint |
| loading | applicable | This control commits an add; the surface contract records a micro-scale and a count increment at `motion-fast` |
| error | applicable | An add can fail when the item is out of stock; the surface contract records an inline "Out of stock" badge and a disabled add button |
| success | applicable | An add can complete; the surface contract records a count increment on this button |

### Store Log In / Large CTA

- Role: destination control that opens the storefront Log In
- Primitive type: `button` · Kind: interactive
- Domain: store storefront on `https://www.instacart.com/store/kroger/storefront`
- Background: `#108910`
- Text: `#ffffff`
- Radius: 24px
- Padding: 8px 16px
- Height: 48px
- Font: 14px Instacart Sans weight 600
- Token-set font record: `14px / 600 Instacart Sans`
- Token-set use: `Store storefront Log in CTA`
- Published label: `Log In`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | The surface contract fades the green action to a muted tint rather than switching it to a foreign grey |
| loading | not-applicable | This control opens log-in; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Destination action; the destination, not this button, reports failure |
| success | not-applicable | Same role reason: reaching the log-in destination is not an operation this button reports as success |

### Search

- Role: main homepage search input
- Primitive type: `input` · Kind: interactive
- Domain: homepage on `https://www.instacart.com/`
- Background: `#ffffff`
- Text: `#343538`
- Border: 1px solid `#C7C8CD`
- Radius: 28px
- Padding: 0px 48px 0px 0px
- Height: 56px
- Font: 15px Instacart Sans weight 400
- Shadow: `rgba(0, 0, 0, 0.05) 0px 2px 4px 0px inset`
- Token-set font record: `15px / 400 Instacart Sans`
- Token-set use: `Main search input on homepage`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web field; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable field; visual treatment omitted |
| disabled | applicable | A field whose availability can lapse; visual treatment omitted |
| loading | not-applicable | The field accepts a query; product-grid skeletons report the in-progress search, and the input stays visible and editable |
| error | applicable | The surface contract records an empty-search heading "We couldn't find that." with a green CTA to browse stores or adjust search |
| success | not-applicable | The field does not complete a grocery order on itself |

### Search (Store Storefront)

- Role: grocery storefront search
- not in the token set
- Domain: store storefront
- Border: none
- Radius: 28px (homepage) / 8px (storefront context)
- Padding: 12px 48px 12px 24px
- Height: 52–54px
- Text: `#343538`
- Font: 14px Instacart Sans weight 600
- Use: Grocery storefront search

The source supplies this storefront search as a §4 body record only. It has no YAML `type` key, so no `Primitive type` line is attached.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web field; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable field; visual treatment omitted |
| disabled | applicable | A field whose availability can lapse; visual treatment omitted |
| loading | not-applicable | The field accepts a query; it does not commit a fetch whose in-progress state it reports on itself |
| error | applicable | A search field can fail to match; visual treatment omitted on this storefront record |
| success | not-applicable | The field does not complete a grocery order on itself |

### Surface Card

- Role: store listing card, content container, product grid block
- Primitive type: `card`
- Background: `#F6F7F8`
- Radius: 8px
- Token-set use: `Light grey surface card for store listings and content blocks`

The source supplies no interaction evidence for this card, so kind and a state-applicability map are both withheld.

### Filter Chip Active

- Role: selected filter pill
- Primitive type: `badge`
- Kind: non-interactive — a selected-state label, not a commit control
- Background: `#242529`
- Text: `#ffffff`
- Radius: 999px
- Padding: 0px 16px
- Height: 32px
- Font: 14px Instacart Sans weight 600
- Token-set font record: `14px / 600 Instacart Sans`
- Token-set use: `Active filter pill (All, selected state)`
- Published label: `All`

### Filter Chip Inactive

- Role: unselected filter pill
- Primitive type: `badge`
- Kind: non-interactive — an unselected-state label, not a commit control
- Background: `#E8E9EB`
- Text: `#242529`
- Radius: 999px
- Padding: 0px 16px
- Height: 32px
- Font: 14px Instacart Sans weight 600
- Token-set font record: `14px / 600 Instacart Sans`
- Token-set use: `Inactive filter pill (EBT, Fastest, Grocery)`
- Published labels: `EBT`, `Fastest`, `Offers`, `Grocery`

### Delivery / Pickup

- Role: Delivery/Pickup mode selector on store storefront pages
- Primitive type: `tab` · Kind: interactive
- Domain: store storefront
- Background (active): `#ffffff`
- Text (active): `#343538`
- Border (active): 2px solid `#343538`
- Radius: 20px
- Height: 40px
- Font: 16px Instacart Sans weight 400
- Text (inactive): `#C7C8CD`
- Token-set font record: `16px / 400 Instacart Sans`
- Token-set active: `text #343538 + 2px border #343538`
- Token-set use: `Delivery/Pickup tab selector on store pages`
- Published labels: `Delivery`, `Pickup`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable item; visual treatment omitted |
| disabled | applicable | A destination item whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This item is a destination tab; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Destination tab; the destination, not the item, reports failure |
| success | not-applicable | Same role reason: reaching Delivery or Pickup is not an operation with a success result |

### State record

The source's state contract, preserved with its values and copy. The source's own evidence note assigns a source to its voice samples, its brand narrative, and its personas, and assigns none to this state section; the treatments below are therefore a derived editorial implementation inference from the verified surfaces rather than measured per-control observations, and they are not Instacart-authored or a separately published UI specification.

| State | Treatment |
|---|---|
| **Empty (search, no results)** | White canvas, `#242529` heading at 24px: "We couldn't find that." Green CTA to browse stores or adjust search. No illustration. |
| **Empty (saved items)** | `#343538` muted text: "You haven't saved any items yet." One green CTA to start shopping. |
| **Loading (store page initial)** | Skeleton blocks at final card dimensions on `#F6F7F8` surface, 8px radius. Flat pulse — no shadow shimmer consistent with the elevation-free system. |
| **Loading (search results)** | Product grid skeletons at exact card dimensions; search input stays visible and editable. |
| **Error (delivery address not served)** | Inline message in `#242529` below the address input: clear explanation of coverage area with a path to try a different address. No red-dominated error state — calm and solution-focused. |
| **Error (item out of stock)** | Inline badge on product card: "Out of stock" in `#E8E9EB` chip style. Add button disabled. Alternative items suggested below. |
| **Success (order placed)** | Full-page confirmation with green primary header. Order summary visible immediately. Delivery ETA prominently displayed — this is the primary success signal for the user. |
| **Skeleton** | `#F6F7F8` blocks at final dimensions, 8px radius, flat pulse. |
| **Disabled** | `#C7C8CD` text, reduced opacity on interactive elements. Green actions fade to a muted tint — brand read preserved. |

These rows describe empty, loading, error, success, skeleton, and disabled treatments the source wrote at system level. They are not attached as visual treatments to the destination controls above. The add-to-cart button's loading / error / success rows above cite the matching system-level treatments because that control commits an add. That non-attachment reading, and the add-to-cart attachment, are derived editorial implementation inferences from the verified surfaces; they are not Instacart-authored or a separately published UI specification.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

- Centered single-column hero with a full-width search bar anchoring the user journey
- Store selector section: horizontal scrolling card row with `#F6F7F8` cards
- Filter chips: horizontal scrolling pill row beneath the store section
- Store pages: horizontal sub-navigation tabs (Shop, Flyers, Recipes, My Lists)
- Product grid: 4–6 column on desktop, responsive collapse to 2 on mobile
- Spacing restated from `tokens.spacing`: 4 / 8 / 12 / 16 / 20 / 24 / 32 / 48
- Shape restated from `tokens.rounded`: small 4 · medium 8 · large 20 · pill 28 · `full: 999`

Reading the product surface as utilitarian density — enough breathing room to tap accurately, not decorative; reading `#F6F7F8` surfaces as grouping content blocks without borders or shadows; reading the full-width search bar as anchoring the user journey; and reading the hero search bar as the product's primary UI — full-width at all viewports, always above the fold — are derived editorial implementation inferences from the verified surfaces; they are not Instacart-authored or a separately published UI specification.

Responsive behavior. The source's live inspection was run as a computed-style pass, and its own evidence note attributes token-level claims to that inspection; the breakpoints, collapsing strategy, and the source's reading of the recorded target sizes are stated by the source at system level rather than measured across viewports, so they are a derived editorial implementation inference from the verified surfaces and are not Instacart-authored or a separately published UI specification.

| Name | Width | Key Changes |
|---|---|---|
| Mobile | <640px | Hero text compresses, search bar full width, cards stack vertically |
| Tablet | 640-1024px | 2-column store cards, moderate nav padding |
| Desktop | 1024-1440px | Full layout, horizontal store carousel, filter chip row |

Touch targets the source records: Nav buttons 40px height with 16px horizontal padding; Hero CTA 56px height; Add to cart 36px height on product cards; Filter chips 32px height; Search input 56px height.

Collapsing strategy, as the source states it:

- Hero: Full-width search persists at all viewports; headline text size scales down
- Store carousel: horizontal scroll on mobile, grid on desktop
- Filter chips: horizontal scroll row on mobile
- Store navigation tabs: compress to icon-only or compact labels on small screens

<!-- design-md:section content-locales -->
## 6. Content & Locales

The source characterizes Instacart's voice as **practical, friendly, and time-conscious** — a service that respects how busy its users are. Copy is brief, benefit-forward, and uses informal contractions where they read naturally. The hero headline "Order groceries for delivery or pickup today" is prototypically Instacart: one verb, the core value proposition, no superlatives. CTAs are action-direct ("Sign up to get $0 delivery fee", "Add") without exclamation points or emoji. The tone is that of a helpful neighbor, not a corporate entity. That characterization, that register reading, and the tone table below are a derived editorial implementation inference from the verified surfaces; they are not Instacart-authored or a separately published UI specification. The published lines themselves are live surface copy.

| Context | Tone |
|---|---|
| Hero headlines | Declarative, benefit-first. One sentence. Delivery time mentioned as a hook. |
| CTAs | Short imperatives with embedded value. "Sign up to get $0 delivery fee." |
| Store listings | Factual: store name + delivery time estimate. No embellishment. |
| Error messages | Calm, directive. Tells the user what to do next. |
| Instacart+ upsells | Friendly nudge with concrete savings. Never aggressive. |
| Empty states | Simple and actionable. One sentence + one green CTA. |

**Voice samples (verbatim from live homepage, 2026-06-22):**

- "Order groceries for delivery or pickup today" — hero H1. *(verified live 2026-06-22)*
- "Sign up to get $0 delivery fee*" — hero CTA. *(verified live 2026-06-22)*
- "Stores to help you save" — section H2. *(verified live 2026-06-22)*

Further published strings the source records on the inspected surfaces, kept byte-exact:

- Order groceries for delivery or pickup today
- Order groceries for delivery or pickup
- Sign up to get $0 delivery fee*
- Sign up to get $0 delivery fee
- Sign up, get $0 delivery fee
- Stores to help you save
- Add
- All
- EBT
- Fastest
- Offers
- Grocery
- Log in
- Log In
- Sign up
- Sign Up
- Shop at [Retailer]
- We couldn't find that.
- You haven't saved any items yet.
- Out of stock
- Instacart+
- Instacart Sans
- Instacart Sans Fallback
- Instacart Plak
- Kale
- CART
- Shop
- Flyers
- Recipes
- My Lists
- Delivery
- Pickup
- Costco
- Kroger
- Safeway
- Whole Foods
- Apoorva Mehta
- Sequoia Capital
- Y Combinator
- NASDAQ

**Forbidden register:** Hype-driven superlatives ("the best grocery app ever"), scare tactics around food scarcity, financial urgency dark patterns, corporate jargon. That premise-to-register causal is a derived editorial implementation inference from the verified surfaces; it is not Instacart-authored or a separately published UI specification.

Reproduce the published strings above byte-exact rather than translating or re-casing them. A gloss may sit beside a line; it never replaces the line. That byte-exact / gloss-beside rule is a derived editorial implementation inference from the verified surfaces; it is not Instacart-authored or a separately published UI specification.

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

These are named values, not permissions to invent. The source records no conflict among its own Tier 1 values. Treating the list as named unresolved values rather than a license to invent is a derived editorial implementation inference from the verified surfaces; it is not Instacart-authored or a separately published UI specification.

- **Exact easing curves.** Three easing roles and their uses are established; the curve values are omitted because they are not traceable to Instacart-computed samples. Promote a curve for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed.
- **Full radius step.** `tokens.rounded.full: 999` is the unitless full step.
- **Hover and focus-visible treatments.** Those visual treatments are omitted. They are not `not-applicable`; applicability follows control meaning.
