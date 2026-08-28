# HP Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

HP Inc. is the consumer-facing personal-systems and printing company that operates `https://www.hp.com`. This contract covers that first-party consumer storefront as the source names it. The source token-set records `tokens.source: prose-derived`. The source HTML comment says live DOM was not directly inspected and that token-level UI values (radii, padding, semantic greens/reds, motion) are conventional consumer-tech / e-commerce values consistent with HP's published color + type system and observed hp.com store patterns. The source §4 footer also writes that values were verified via live DOM getComputedStyle on the live production site. Those two source statements are both kept. Treating hp.com as this contract's surface, keeping both source statements rather than choosing one, and not promoting a sibling computed sample over the source body, are derived editorial implementation inferences from the verified surfaces; they are not HP-authored or a separately published UI specification.

The hp.com experience opens on bright white (`#ffffff`) with near-black text (`#212121`) and a single accent: **HP Blue** (`#0096D6` / token-set `#0096d6`) — a clean, confident cyan-leaning blue that has been the brand's signature since 2012. The source describes lots of air, generous photography of hardware (laptops, printers, monitors), and a restrained interface that lets the products themselves be the color. HP's identity is built on the idea of **human-centered technology that recedes** — the design should never compete with the device on screen. The 2024–2025 brand evolution introduced a brighter **HP Electric Blue** (`#0278AB` / token-set `#0278ab`) for marketing energy, but the working digital primary remains the classic `#0096D6`, paired with the four-letter lowercase logo locked inside a perfect circle. The typographic voice is **Forma DJR**, a contemporary grotesque commissioned from type designer David Jonathan Ross. Its `Forma DJR UI` and `Forma DJR Office` cuts were engineered specifically for screen and document legibility — tall x-height, open apertures, and a slightly humanist warmth. The hex values, family names, 2012 date, 2024–2025 evolution, Electric Blue, circle logo, and David Jonathan Ross commission are recorded. Calling the accent unmistakable or a clean, confident cyan-leaning blue, calling the atmosphere precise but approachable, calling the interface restrained so the products themselves are the color, calling the design something that should never compete with the device on screen, calling the type humanist warmth that softens an otherwise corporate-precise system, and calling the brand both established and current, are derived editorial implementation inferences from the verified surfaces; they are not HP-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. HP traces to a **1939 Palo Alto garage** where Bill Hewlett and Dave Packard built audio oscillators — the literal origin of the Silicon Valley founder myth. That heritage of practical, well-engineered hardware still anchors the brand: HP makes things people use to get work done. In 2015 the company split into **HP Inc.** (personal systems and printing — the consumer-facing hp.com) and Hewlett Packard Enterprise; this design system describes HP Inc.'s consumer surface. The visual identity has been deliberately stable. **HP Blue `#0096D6`** has held since 2012, and the four-letter lowercase logo inside a circle — designed by Eight Inc. as a "future" mark — represents continuity and approachability. The 2024–2025 brand evolution refreshed the system with **Forma DJR** typography (replacing HP Simplified) and a brighter **Electric Blue** for campaign energy, while keeping the working digital blue intact. The thesis: technology that is **human-centered and quietly capable** — the device, not the chrome, is the hero. The years, founders, garage, oscillators, 2015 split, Eight Inc. mark, HP Simplified → Forma DJR migration, and Electric Blue campaign role are the source's own narrative facts; they do not by themselves supply interface tokens. Calling the garage the origin of the Silicon Valley founder myth, calling that heritage something that still anchors the brand, calling the visual identity deliberately stable, calling the circle mark continuity and approachability, calling the thesis human-centered and quietly capable with the device not the chrome as the hero, and classifying that founding-and-split narrative as context that does not by itself supply interface tokens, are derived editorial implementation inferences from the verified surfaces; they are not HP-authored or a separately published UI specification.

What the source says HP refuses: the cold institutional gray of legacy enterprise IT, the neon maximalism of gaming-first rivals (HP's OMEN sub-brand carries that energy separately), and decorative ornament that competes with product photography. HP's restraint is its statement — a brand confident enough to let a laptop on white speak for itself. That refusal/embrace pairing is stated by the source as narrative; reading it as a current-surface design instruction is a derived editorial implementation inference from the verified surfaces; it is not HP-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=5 lang=en -->
### Primary tasks

Selecting these five as the product's primary tasks is a derived editorial implementation inference from the verified surfaces; it is not HP-authored or a separately published UI specification. Each names a label or surface the source records. They do not come from the source's persona section.

- Add a product to the cart or continue checkout from `Add to cart`, `Buy now`, and `Continue`.
- Shop the catalog from `Shop laptops`.
- Search products from the header product search.
- Read product-detail sections labeled `Overview`, `Specs`, and `Reviews`.
- Recover from an empty cart (`Your cart is empty`) or an out-of-stock listing (`Notify me`).
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source labels its named figures as fictional archetypes informed by publicly described consumer-tech buyer segments, not individual people, so those biographies are dropped rather than promoted, and no name, age, city, or occupation is carried into this document or its sidecar. What the source independently records is the audience at a group level: people who use HP personal systems and printing to get work done, on the consumer-facing hp.com surface of HP Inc. Reading that group as this product's audience is a derived editorial implementation inference from the verified surfaces; it is not HP-authored or a separately published UI specification.

### Distinctive traits

The list restates the source's Key Characteristics. The values are recorded; the groupings and the readings inside them are a derived editorial implementation inference from the verified surfaces — they are not HP-authored or a separately published UI specification.

- HP Blue (`#0096D6`) as the sole interactive accent — links, CTAs, focus, selection
- Forma DJR type family (DJR UI for screen, DJR Office for documents) — humanist grotesque
- Bright white canvas (`#ffffff`) with near-black text (`#212121`) — high-contrast, product-forward
- Sentence case as the default for headlines and UI copy
- Type is black or white only; HP Blue carries interaction, never decorative body text
- Flat, low-shadow surfaces — hardware photography supplies the visual richness
- Generous whitespace and a clean 8px-derived spacing rhythm

### Principles

These eight items are a derived editorial implementation inference from the verified surfaces; they are not HP-authored or a separately published UI specification. The source states them in its own Principles section. The source's HTML comment also names interpretive claims such as "the product is the hero" and "restraint is the statement" as editorial readings of HP's design, not documented HP statements.

1. **The product is the hero.** Interface chrome recedes; hardware photography and whitespace carry the visual weight. Never let UI ornament out-shout the device.
2. **Blue is interaction, not decoration.** `#0096D6` appears only where the user can act. Headlines, rules, and illustration never borrow it.
3. **One ink per layout.** Text is black or white. Color richness comes from imagery and the single blue accent — never multi-color type.
4. **Sentence case, always.** Approachable over authoritative. Headlines read like a helpful person talking, not a billboard shouting.
5. **Engineered restraint.** Flat surfaces, 1px borders, neutral shadows on hover only. The system should feel as precisely built as the hardware it sells.
6. **Benefit before spec.** Copy and layout lead with what you can do; specifications are available but secondary.
7. **Stability is a feature.** The blue and the logo have barely moved in over a decade. Consistency signals reliability — a core consumer-tech trust cue.
8. **Accessible by default.** High contrast (`#212121` on white), 44px touch targets, visible focus rings in HP Blue.

### Application rules

The source states these seven as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not HP-authored or a separately published UI specification.

- Use HP Blue (`#0096D6`) for every interactive element — links, buttons, focus, toggles, active tabs
- Keep foreground text black (`#212121`) or white only, per HP brand guidelines
- Write headlines and labels in sentence case
- Use Forma DJR with weights 400 / 600 / 700 only
- Give hardware photography surrounding whitespace; never crop devices to the edge
- Use 4px radius for controls, 8px for cards
- Reserve `#0073A8` for hover/pressed of the primary blue

### Avoid

The source states these seven as its Don't list; they are kept as its rules, reasons included. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not HP-authored or a separately published UI specification.

- Don't tint body text blue — blue means "interactive"
- Don't mix multiple text colors in one layout
- Don't use ALL CAPS for headlines (sentence case only)
- Don't apply heavy or colored drop shadows — rely on banding and borders
- Don't confuse HP Electric Blue (`#0278AB`, marketing) with the working UI blue (`#0096D6`)
- Don't use pure black (`#000`) — the brand ink is `#212121`
- Don't over-round controls; buttons stay at 4px, not pill, except filter chips

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Role names below are the source's own labels. Calling HP Blue the sole interactive accent, calling Electric Blue marketing energy rather than the working UI blue, calling `#212121` a soft near-black rather than pure `#000`, and pairing each hex to the token-set path named beside it, are derived editorial implementation inferences from the verified surfaces; they are not HP-authored or a separately published UI specification. The hex values and recorded uses are the source's own.

#### Primary

- **HP Blue** (`#0096D6` / token-set `#0096d6`): The brand-defining cyan-blue (PMS 2925 C). Primary interactive color — CTAs, links, active states, focus rings, selection. Stable since 2012. Token-set path `tokens.colors.primary`.
- **HP Blue Dark** (`#0073A8` / token-set `#0073a8`): Hover/pressed state for `#0096D6` elements. Roughly 18% darker. Token-set path `tokens.colors.primary-hover`. Token-set `tokens.colors.primary-pressed` is `#005c87` (prose `#005C87`).
- **HP Blue Light** (`#E6F4FB` / token-set `#e6f4fb`): Informational tints, selected-row backgrounds, subtle blue surfaces. Token-set path `tokens.colors.primary-light`.
- **HP Electric Blue** (`#0278AB` / token-set `#0278ab`): The intensified marketing blue introduced in the 2025 refresh (Pantone 2132). Energetic campaign moments; not the default UI blue. Token-set path `tokens.colors.electric-blue`.

#### Neutral / Ink

- **Near Black** (`#212121`): `ink900`. Primary heading and body text. HP's "black" is a soft near-black, never pure `#000`. Token-set path `tokens.colors.ink`.
- **Pure White** (`#ffffff`): `background`, `surface`. Page background and card surfaces. Token-set path `tokens.colors.canvas`.
- **Grey 50** (`#f7f7f7`): Lightest section fill, alternating bands, app shell background. Token-set path `tokens.colors.grey-50`.
- **Grey 100** (`#eeeeee`): Card fills, disabled surfaces, table zebra rows. Token-set path `tokens.colors.grey-100`.
- **Grey 200** (`#e0e0e0`): Default border, dividers, input outlines. Token-set path `tokens.colors.border`.
- **Grey 300** (`#cccccc`): Strong borders, active input outline. Token-set path `tokens.colors.border-strong`.
- **Grey 500** (`#9e9e9e`): Placeholder text, disabled icons. Token-set path `tokens.colors.placeholder`.
- **Grey 600** (`#767676`): Caption and secondary label text (WCAG-AA on white). Token-set path `tokens.colors.caption`.
- **Grey 700** (`#595959`): Body text on light surfaces, metadata. Token-set path `tokens.colors.body`.
- **Grey 800** (`#404040`): Emphasized body, sub-headings. Token-set path `tokens.colors.emphasis`.

#### Semantic

- **Success Green** (`#0c7d2f`): Order confirmed, in-stock, positive status. Token-set path `tokens.colors.success`.
- **Error Red** (`#d32f2f`): Errors, destructive actions, out-of-stock, form validation. Token-set path `tokens.colors.error`.
- **Warning Amber** (`#f5a623`): Low-stock, pending, attention-needed states. Token-set path `tokens.colors.warning`.
- **Info Blue** (`#0096D6`): Informational banners reuse HP Blue with the light tint backdrop.

#### Surface & Borders

- **Border Default**: `#e0e0e0` (grey200). Cards, inputs, dividers.
- **Border Strong**: `#cccccc` (grey300). Active inputs, emphasized separators.
- **Overlay Scrim**: `rgba(33,33,33,0.6)`. Modal/drawer backdrop.

Color rules the source states: HP Blue is interaction. It never colors plain paragraph text or decorative rules. Per HP brand guidelines, foreground type is **black or white only** within a single layout — no mixed-color text. Color lives in the photography and the blue accent.

### Spacing

Token-set path `tokens.spacing` (unitless steps, kept as the source wrote them, not rewritten as a grid): `xs: 4` · `sm: 8` · `md: 12` · `base: 16` · `lg: 24` · `xl: 32` · `xxl: 48` · `section: 64`.

The source names a base unit of 8px and the same scale in px: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px. Section vertical rhythm: 48–64px between major page bands. Card internal padding: 16–24px. `base: 16` is a spacing step. It is not a radius step — `tokens.rounded` has no 16. `lg: 24` is a spacing step. It is not a type size and not a radius step.

Keeping the unitless spacing steps as written rather than rewriting them as a grid, and reading the spacing `base: 16` and `lg: 24` steps as spacing steps and not radius or type steps, are derived editorial implementation inferences from the verified surfaces; they are not HP-authored or a separately published UI specification.

### Shape

Token-set path `tokens.rounded` (unitless steps, kept on their own path): `sm: 4` · `md: 4` · `lg: 8` · `full: 9999`.

- Sharp (`4`): Buttons, inputs, badges, banners. Token-set keys `tokens.rounded.sm` and `tokens.rounded.md` are both `4`; they stay as two keys.
- Soft (`8`): Cards, tiles, modals. Token-set key `tokens.rounded.lg`.
- Pill (`9999` / `9999px`): Filter chips, toggles, search field. Token-set key `tokens.rounded.full`.

The YAML search component records `radius: 8`. The §4 Search field records `Radius: 24px`. The §5 pill step names the search field on `9999px`. Those three figures sit on those records. Neither was chosen over the others as a replacement. `lg: 8` on this path is not the spacing `sm: 8`.

Keeping `sm: 4` and `md: 4` as two keys, keeping the search `8` / `24px` / `9999px` figures on their own records, and reading the 4px control / 8px card split as the source's radius rule rather than a universal scale, are derived editorial implementation inferences from the verified surfaces; they are not HP-authored or a separately published UI specification.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (0) | No shadow | Page bands, flat tiles, inline elements |
| Subtle (1) | `0 2px 8px rgba(0,0,0,0.08)` | Content cards, resting product cards |
| Raised (2) | `0 4px 12px rgba(0,0,0,0.10)` | Product card hover, dropdowns |
| Floating (3) | `0 8px 24px rgba(0,0,0,0.16)` | Modals, mega-menu panels |
| Sticky header | `0 1px 4px rgba(0,0,0,0.08)` | Header shadow once scrolled |

Token-set path `tokens.shadow.flat`: `none`.

The source's shadow philosophy: HP uses shadows sparingly and neutrally. Depth is communicated mainly through background banding and 1px borders; shadows appear on hover and floating layers only. Pure black at low opacity keeps the system clinical and product-forward — no colored or brand-tinted shadows. Mega-menu and sticky header may apply a light backdrop blur over content on scroll. Reading that as a punctual, banding-first depth system, and keeping `tokens.shadow.flat: none` on its own path rather than folding it into the raised/floating strings, are derived editorial implementation inferences from the verified surfaces; they are not HP-authored or a separately published UI specification.

### Motion

The source token-set is `prose-derived`. The source HTML comment assigns published color and type to Brand Central and brand-palette sources, and assigns token-level motion to conventional consumer-tech / e-commerce values. The durations, easing roles, signature motions, and reduced-motion rule below are therefore a derived editorial implementation inference from the verified surfaces; they are not HP-authored or a separately published UI specification.

Durations:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle flips, checkbox changes |
| `motion-fast` | 150ms | Hover, focus, button press, card lift |
| `motion-standard` | 250ms | Default — dropdowns, accordions, tab content |
| `motion-slow` | 350ms | Mega-menu reveal, modal entrance |
| `motion-page` | 400ms | Route / full-screen transitions |

Easing roles — three roles with declared uses. The specific curve values the source lists are not traceable to HP evidence, so the curves are omitted here and only the roles and their uses are kept:

| Token | Use |
|---|---|
| `ease-enter` | Things appearing — menus, modals, banners |
| `ease-exit` | Things leaving — dismissals |
| `ease-standard` | Two-way — accordions, tabs, hover lifts |

An exact curve may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework or vendor document — does not satisfy that condition.

Signature motions, as the source states them, with duration tokens kept and curve values omitted:

1. **Product card lift.** On hover, the card raises to `0 4px 12px rgba(0,0,0,0.10)` and the product image scales `1.02×` over `motion-fast` / `ease-standard`. Subtle — the device should appear to come forward, not bounce.
2. **Mega-menu reveal.** The header mega-menu fades and slides down from `y-8px` over `motion-slow` / `ease-enter`, with a synchronized light backdrop. Dismissal uses `motion-fast` / `ease-exit`.
3. **Add-to-cart confirmation.** The cart icon count animates with a brief scale pulse (`1 → 1.15 → 1`, `motion-standard`), paired with the success banner sliding in. Reassuring, never flashy.
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant`; slides and scales become simple fades. The experience stays fully usable.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | HP Brand Central typography (`brandcentral.hp.com/us/en/elements/typography.html`) and HP Type Guidelines 2.0 name Forma DJR (Forma DJR UI for screen, Forma DJR Office for documents), a sentence-case default, and "type is black or white, don't mix colors on a layout." That published type guidance is not a UI radius, padding, or motion specification. Reading Brand Central as not supplying those UI tokens is a derived editorial implementation inference from the verified surfaces; it is not HP-authored or a separately published UI specification. |
| Live computed surface-use | The source §4 footer writes that values were verified via live DOM getComputedStyle on https://www.hp.com. The source HTML comment writes that live DOM was not directly inspected. Both statements are kept. Keeping both inspect statements rather than choosing one is a derived editorial implementation inference from the verified surfaces; it is not HP-authored or a separately published UI specification. |
| Official distributed asset | Forma DJR UI / Forma DJR Office / Forma DJR Display / Forma DJR Text are the named cuts. HP Simplified is the prior brand font and ships as a fallback on properties not yet migrated to Forma DJR. |
| Declared-only | The screen stack declares `"Forma DJR UI", "Forma DJR Display", "HP Simplified", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`. Those fallback members are not the brand face. Classing those fallback members as not the brand face is a derived editorial implementation inference from the verified surfaces; it is not HP-authored or a separately published UI specification. |
| License | This record does not establish a redistributable HP font-license grant for Forma DJR. Forma DJR is commissioned from David Jonathan Ross; that commissioning fact is the source's own. Classing the license as unresolved is a derived editorial implementation inference from the verified surfaces; it is not HP-authored or a separately published UI specification. |
| Outside these captures | Typography on surfaces beyond the hp.com consumer storefront the source names sits outside this contract. Reading that typography as outside this contract is a derived editorial implementation inference from the verified surfaces; it is not HP-authored or a separately published UI specification. |

### Family

- **Primary (screen/UI):** `"Forma DJR UI", "Forma DJR Display", "HP Simplified", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`. Token-set path `tokens.typography.family.sans`: `Forma DJR UI`.
- **Documents/Long-form:** `"Forma DJR Office", "Forma DJR Text", Georgia-fallback-free, sans-serif`.
- **Monospace:** `"SF Mono", SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace`. Token-set path `tokens.typography.family.mono`: `SF Mono`.
- **Legacy fallback:** `HP Simplified` (the prior brand font) ships as a fallback on properties not yet migrated to Forma DJR.

A fallback member of a stack is never presented as the brand face. Do not replace Forma DJR UI with a system substitute while labelling the substitute Forma DJR. That fallback prohibition is a derived editorial implementation inference from the verified surfaces; it is not HP-authored or a separately published UI specification.

### Type roles

YAML token-set metrics keep their unitless line-height ratios and their `use` strings. The hierarchy table keeps the px line heights the source recorded beside them. Those two forms are not converted into each other. Token-set `tokens.typography.body` is `16` / `400` / `1.5` / `Standard reading text, inputs`. The hierarchy Body row is `14px` / `400` / `22px (1.57)`. They stay on separate rows.

| Role | Font | Size | Weight | Line height | Tracking | Token-set use / notes |
|---|---|---:|---:|---|---|---|
| Display Hero | Forma DJR UI | 48px | 700 | 1.17 (56px) | -0.5 / -0.5px | Marketing hero headlines. Token-set path `tokens.typography.display-hero` |
| Display Large | Forma DJR UI | 36px | 700 | 44px (1.22) | -0.25px | Section heroes, key metrics |
| Heading 1 | Forma DJR UI | 28px | 700 | 36px (1.29) | normal | Page titles |
| Heading 2 | Forma DJR UI | 22px | 600 | 30px (1.36) | normal | Feature titles, modal headers |
| Heading 3 | Forma DJR UI | 18px | 600 | 26px (1.44) | normal | Card headings, sub-sections |
| Subtitle | Forma DJR UI | 16px | 600 | 24px (1.50) | normal | Navigation titles, list headers |
| Body Large | Forma DJR UI | 16px | 400 | 26px (1.63) | normal | Lead descriptions |
| Body (hierarchy) | Forma DJR UI | 14px | 400 | 22px (1.57) | normal | Standard reading text |
| Body (token-set) | Forma DJR UI | 16px | 400 | 1.5 | | Standard reading text, inputs. Token-set path `tokens.typography.body` |
| Body Small | Forma DJR UI | 13px | 400 | 20px (1.54) | normal | Secondary information |
| Caption | Forma DJR UI | 12px | 400 | 18px (1.50) | 0.2px | Timestamps, legal, fine print |
| Button | Forma DJR UI | 16px | 600 | 1.0 | 0.2px | CTA label. Token-set path `tokens.typography.button` · `Button label` |
| Label | Forma DJR UI | 13px | 600 | — | | Input labels, captions. Token-set path `tokens.typography.label` |

Keeping the token-set Body `16` / `1.5` row and the hierarchy Body `14px` / `1.57` row as two records, and keeping unitless ratios as ratios rather than converting them into px, are derived editorial implementation inferences from the verified surfaces; they are not HP-authored or a separately published UI specification.

### Typography rules

The source states these four as its typography principles. Sentence case and black-or-white type are also attributed by the source to HP Brand Central / HP Type Guidelines 2.0. Reading the measured metrics as those principles is a derived editorial implementation inference from the verified surfaces; it is not HP-authored or a separately published UI specification.

- **Sentence case by default.** HP guidelines mandate sentence case for display copy — titles, subtitles, and UI labels — for an approachable, consistent read. Avoid ALL CAPS except small eyebrow labels.
- **Three working weights.** Forma DJR ships many weights; the UI uses 400 (body), 600 (emphasis/buttons), and 700 (headings). Restraint over variety.
- **Black or white text only.** Within a layout, type is one ink color — never blue, never multi-color paragraphs. Blue is reserved for interactive text.
- **Humanist grotesque legibility.** Forma DJR's open apertures and tall x-height carry small UI sizes (12–14px) cleanly; do not condense or letterspace body copy.

### Assets

- Hardware photography of laptops, printers, and monitors is first-party catalog content; do not replace it with invented brand-color decoration. Treating that photography as first-party catalog content, and the instruction not to replace it with invented decoration, are a derived editorial implementation inference from the verified surfaces; they are not HP-authored or a separately published UI specification.
- The four-letter lowercase logo locked inside a perfect circle is the source's logo description. The catalog logo entry is `type: simpleicons`, `slug: hp`; that catalog field is recorded in the provenance ledger and is not presented here as an HP-hosted brand file. Recording the catalog field only as a ledger pointer, and not presenting it as an HP-hosted brand file, is a derived editorial implementation inference from the verified surfaces; it is not HP-authored or a separately published UI specification.
- Hero product shots: responsive, maintain aspect ratio, never edge-crop the device. Product thumbnails: square, contained on white, 1:1. Logos / icons: 24–40px, consistent within context.

<!-- design-md:section components-states -->
## 4. Components & States

### How to read this section

The source declares YAML components with a primitive type (`button`, `input`) and a value set. Those types are preserved per component. §4 also names cards, badges, tabs, banners, a modal, and a switch without a YAML `type` on every record; cards and the modal withhold `kind` and a map where the source supplies no interactive-kind evidence. Applicability below is judged by each control's role in this product, not by whether a visual treatment for that state was recorded; where the source supplies no treatment for an applicable state, the value is omitted and the state stays applicable. Every kind verdict, every applicability verdict, and the reason given for either is a derived editorial implementation inference from the verified surfaces; it is not HP-authored or a separately published UI specification. This is not a claim that state coverage is finished.

### Primary CTA

- Role: Primary CTA (`Add to cart`, `Buy now`, `Continue`)
- Primitive type: `button` · Kind: interactive
- Background: `#0096D6`
- Text: `#ffffff`
- Border: none
- Radius: 4px
- Padding: 12px 24px
- Font: 16px / 600 / Forma DJR UI
- Token-set font record: `16px weight 600`
- Min-height: 44px
- Hover: background `#0073A8`
- Pressed: background `#005C87`
- Disabled: background `#cccccc`, text `#767676`
- Use: Primary CTA (Add to cart, Buy now, Continue)
- Token-set use: Primary CTA, 44px min-height
- Sizes (height · font · padding): `small` 36px · 14px · 8px 16px; `medium` (default) 44px · 16px · 12px 24px; `large` 52px · 16px · 16px 32px

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Recorded hover fill `#0073A8` |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Recorded `#cccccc` background / `#767676` text |
| loading | applicable | The source names this a primary cart/checkout action; the surface state contract records an inline white spinner that replaces the label, preserves width, and disables the control. |
| error | applicable | The control can commit a cart or checkout action; the surface state contract records form-validation and banner-error treatments at system level. Visual treatment at this control is omitted. |
| success | applicable | The control can commit a cart or checkout action; the surface state contract records order-confirmed at system level. Visual treatment at this control is omitted. |

### Secondary Outline

- Role: Secondary action paired with a Primary on the same screen
- Primitive type: `button` · Kind: interactive
- Background: `#ffffff`
- Text: `#0096D6`
- Border: 1.5px solid `#0096D6`
- Radius: 4px
- Padding: 12px 24px
- Font: 16px / 600 / Forma DJR UI
- Hover: background `#E6F4FB`
- Use: Secondary action paired with a Primary on the same screen
- Token-set use: Outlined secondary, 1.5px blue border

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Recorded hover fill `#E6F4FB` |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | An action whose availability can lapse; the surface contract uses `#cccccc` / `#767676` |
| loading | applicable | The source names this a secondary action paired with a primary; it can commit that paired action. Visual treatment at this control is omitted. |
| error | applicable | Same role reason: a paired action can fail. Visual treatment at this control is omitted. |
| success | applicable | Same role reason: a paired action can complete. Visual treatment at this control is omitted. |

### Tertiary Text

- Role: Low-emphasis inline action (`Learn more`, `View details`)
- Primitive type: `button` · Kind: interactive
- Background: transparent
- Text: `#0096D6`
- Border: none
- Radius: 4px
- Padding: 12px 8px
- Font: 16px / 600 / Forma DJR UI, underline on hover
- Use: Low-emphasis inline action (Learn more, View details)
- Token-set use: Low-emphasis text action, underline on hover

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Recorded underline on hover |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A destination action whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control takes the reader to `Learn more` or `View details`; it does not commit an operation whose in-progress state it could report. |
| error | not-applicable | This control takes the reader to a destination; the destination, not the button, reports whether that request failed. |
| success | not-applicable | Same role reason: reaching a destination is not an operation with a success result. |

### Dark On-image CTA

- Role: CTA placed on hardware photography or dark hero banners
- Primitive type: `button` · Kind: interactive
- Background: `#ffffff`
- Text: `#212121`
- Border: none
- Radius: 4px
- Padding: 12px 24px
- Font: 16px / 600 / Forma DJR UI
- Use: CTA placed on hardware photography or dark hero banners
- Token-set use: CTA on imagery / dark hero

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | An action whose availability can lapse; the surface contract uses `#cccccc` / `#767676` |
| loading | applicable | The source names this a CTA on imagery; it can commit the hero action. Visual treatment at this control is omitted. |
| error | applicable | Same role reason: a hero CTA can fail. Visual treatment at this control is omitted. |
| success | applicable | Same role reason: a hero CTA can complete. Visual treatment at this control is omitted. |

### Danger

- Role: Destructive confirmation (`Remove from cart`, `Cancel order`)
- Primitive type: `button` · Kind: interactive
- Background: `#d32f2f`
- Text: `#ffffff`
- Border: none
- Radius: 4px
- Padding: 12px 24px
- Font: 16px / 600 / Forma DJR UI
- Use: Destructive confirmation (Remove from cart, Cancel order)
- Token-set use: Destructive confirmation

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A confirmation whose availability can lapse; the surface contract uses `#cccccc` / `#767676` |
| loading | applicable | The source names this a destructive confirmation; it commits a cart or order change. The surface state contract records a button spinner at system level. |
| error | applicable | A destructive confirmation can fail. Visual treatment at this control is omitted. |
| success | applicable | A destructive confirmation can complete. Visual treatment at this control is omitted. |

### Default Input

- Role: Standard form input
- Primitive type: `input` · Kind: interactive
- Background: `#ffffff`
- Text: `#212121`
- Border: 1px solid `#cccccc`
- Radius: 4px
- Padding: 12px 14px
- Font: 16px / 400 / Forma DJR UI
- Token-set font record: `16px weight 400`
- Placeholder: `#9e9e9e`
- Focus: border `#0096D6`, 2px focus ring `rgba(0,150,214,0.3)`
- Label: 13px / 600 / `#595959`, above the field
- Use: Standard form input
- Token-set use: Standard form input, grey border

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web field; visual treatment omitted |
| focus-visible | applicable | Interactive field; visual treatment omitted |
| disabled | applicable | The surface contract keeps a `#cccccc` border for stable geometry |
| loading | not-applicable | This is a value field; it does not commit an operation whose in-progress state it could report. |
| error | applicable | Recorded validation-failure treatment: `#d32f2f` 1px border and red 13px help text |
| success | not-applicable | A value field does not report a success result of its own. |

### Error Input

- Role: Validation failure state of the standard form input
- Primitive type: `input` · Kind: interactive
- Background: `#ffffff`
- Text: `#212121`
- Border: 1px solid `#d32f2f`
- Radius: 4px
- Padding: 12px 14px
- Font: 16px / 400 / Forma DJR UI
- Help text below: `#d32f2f` 13px
- Use: Validation failure state
- Token-set use: Validation failure, red border

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web field; visual treatment omitted |
| focus-visible | applicable | Interactive field; visual treatment omitted |
| disabled | applicable | The surface contract keeps a `#cccccc` border for stable geometry |
| loading | not-applicable | This is a value field; it does not commit an operation whose in-progress state it could report. |
| error | applicable | This record is the validation-failure treatment |
| success | not-applicable | A value field does not report a success result of its own. |

### Search Input

- Role: Global product search in the header
- Primitive type: `input` · Kind: interactive
- Background: `#f7f7f7`
- Text: `#212121`
- Border: 1px solid transparent
- Token-set radius: `8`
- Body-observed radius: `24px`
- Token-set padding: `10px 16px`
- Body-observed padding: `10px 16px 10px 40px` (left icon)
- Use: Global product search in the header
- Token-set use: Header product search, rounded

The YAML radius `8` and the body radius `24px` are both kept. Neither value was chosen over the other as a new token. The §5 pill step that names the search field on `9999px` stays on Shape. Keeping both figures and choosing neither as a replacement token is a derived editorial implementation inference from the verified surfaces; it is not HP-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web field; visual treatment omitted |
| focus-visible | applicable | Interactive field; visual treatment omitted |
| disabled | applicable | A search field whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This is a search field; it does not commit an operation whose in-progress state the field itself reports. |
| error | applicable | A search field can show a validation or empty-filter failure; the surface contract records `No results match your filters`. Visual treatment at this control is omitted. |
| success | not-applicable | A search field does not report a success result of its own. |

### Product Card

- Role: Product grid item — image, name (16px/600), price, rating, CTA
- Background: `#ffffff`
- Border: 1px solid `#e0e0e0`
- Radius: 8px
- Padding: 16px
- Shadow: none (rests on grey50 bands) → `0 4px 12px rgba(0,0,0,0.10)` on hover
- Use: Product grid item — image, name (16px/600), price, rating, CTA

The source supplies no interactive-kind evidence for the card surface itself, so kind and a state-applicability map are both withheld. The primary CTA on the card is the Primary CTA control above.

### Content Card

- Role: Promotional / editorial card on the home and support pages
- Background: `#ffffff`
- Border: none
- Radius: 8px
- Padding: 24px
- Shadow: `0 2px 8px rgba(0,0,0,0.08)`
- Use: Promotional / editorial card on the home and support pages

The source supplies no interactive-kind evidence for this card, so kind and a state-applicability map are both withheld.

### Flat Tile

- Role: Category navigation tile, support topic tile
- Background: `#f7f7f7`
- Border: none
- Radius: 8px
- Padding: 20px
- Shadow: none
- Use: Category navigation tile, support topic tile

The source supplies no interactive-kind evidence for this tile, so kind and a state-applicability map are both withheld.

### Promo Badge

- Role: Promo fill (`New`, `Featured`)
- Kind: non-interactive — a promo label, not a control
- Background: `#0096D6`
- Text: `#ffffff`
- Radius: 4px
- Padding: 3px 8px
- Font: 12px / 700 / Forma DJR UI
- Use: "New", "Featured"

### Sale Badge

- Role: Discount / sale flag
- Kind: non-interactive — a sale flag, not a control
- Background: `#d32f2f`
- Text: `#ffffff`
- Radius: 4px
- Padding: 3px 8px
- Font: 12px / 700 / Forma DJR UI
- Use: Discount / sale flag

### Stock Badge

- Role: In-stock status
- Kind: non-interactive — a status label, not a control
- Background: `#e6f4d9` (success tint)
- Text: `#0c7d2f`
- Radius: 4px
- Padding: 3px 8px
- Font: 12px / 600 / Forma DJR UI
- Use: "In stock" status

### Neutral Badge

- Role: Metadata, category label
- Kind: non-interactive — a metadata label, not a control
- Background: `#eeeeee`
- Text: `#595959`
- Radius: 4px
- Padding: 3px 8px
- Font: 12px / 600 / Forma DJR UI
- Use: Metadata, category label

### Underline Tab

- Role: Product detail sections (`Overview` / `Specs` / `Reviews`)
- Kind: interactive
- Background: `#ffffff`
- Text (inactive): `#595959`
- Text (active): `#212121`
- Indicator: 2px bottom border `#0096D6`
- Font: 16px / 600 / Forma DJR UI
- Padding: 12px 16px
- Use: Product detail sections (Overview / Specs / Reviews)

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A destination tab whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This item is a destination tab; it does not commit an operation whose in-progress state it could report. |
| error | not-applicable | Destination tab; the destination, not the item, reports failure. |
| success | not-applicable | Same role reason: reaching Overview, Specs, or Reviews is not an operation with a success result. |

### Inline Banner

- Role: Page-level status (cart updated, order placed, validation summary)
- Kind: non-interactive — a status banner, not a control
- Background: `#E6F4FB` (info) / `#e6f4d9` (success) / `#fdecea` (error)
- Border-left: 4px solid the matching semantic color
- Text: `#212121` 14px
- Radius: 4px
- Padding: 12px 16px
- Use: Page-level status (cart updated, order placed, validation summary)

### Modal

- Role: Confirmation, quick-view, configuration dialogs
- Background: `#ffffff`
- Radius: 8px
- Padding: 24px
- Shadow: `0 8px 24px rgba(0,0,0,0.16)`
- Scrim: `rgba(33,33,33,0.6)`
- Title: 22px / 600 / `#212121`
- Use: Confirmation, quick-view, configuration dialogs

The source supplies no interactive-kind evidence for the dialog chrome, so kind and a state-applicability map are both withheld.

### Switch

- Role: Boolean settings, compare toggles
- Kind: interactive
- Background: `#0096D6` (on) / `#cccccc` (off)
- Radius: 9999px
- Thumb: `#ffffff` 18px circle, `0 1px 2px rgba(0,0,0,0.2)`
- Use: Boolean settings, compare toggles

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared on/off treatment above |
| hover | applicable | Pointer-web toggle; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A setting whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control is a boolean toggle; it does not commit an operation whose in-progress state it could report. |
| error | not-applicable | A compare or settings toggle does not report an operation outcome. |
| success | not-applicable | Same role reason: flipping a boolean is not an operation with a success result. |

### State record

The source's state contract, preserved with its values and copy. The source token-set is `prose-derived`, and the source HTML comment assigns token-level UI values to conventional consumer-tech / e-commerce values; the treatments below are therefore a derived editorial implementation inference from the verified surfaces rather than measured per-control observations, and they are not HP-authored or a separately published UI specification.

| State | Treatment |
|---|---|
| **Empty (cart)** | Centered grey700 line (`Your cart is empty`) + primary CTA (`Shop laptops`, `#0096D6`). Simple icon, no heavy illustration. |
| **Empty (search/filter)** | Single grey600 caption (`No results match your filters`) + a text button to clear filters. |
| **Loading (page)** | Grey100 (`#eeeeee`) skeleton blocks matching final layout; product price renders as `—` until resolved. |
| **Loading (button)** | Inline white spinner replaces label, button width preserved, control disabled to prevent double-submit. |
| **Error (inline field)** | `#d32f2f` 1px border + red 13px help text below, one actionable sentence (`Enter a valid email address`). |
| **Error (banner)** | `#fdecea` background, 4px `#d32f2f` left border, `#212121` 14px text, summary of what to fix. |
| **Success (order)** | `#e6f4d9` banner with `#0c7d2f` left border + check icon (`Your order is confirmed`). Order number shown. |
| **Out of stock** | Red `#d32f2f` weak badge (`Out of stock`), CTA swaps to `Notify me` secondary outline button. |
| **Disabled** | Background `#cccccc`, text `#767676`. Inputs keep `#cccccc` border for stable geometry. |
| **Focus** | 2px `#0096D6` ring (`rgba(0,150,214,0.3)`) on all interactive elements — always visible for accessibility. |
| **Hover (card)** | Lift to `0 4px 12px rgba(0,0,0,0.10)`, 150ms ease; image may zoom 1.02×. |

These rows describe cart, search, order, and form treatments the source wrote at system level. They are not attached as visual treatments to every control above. That non-attachment reading is a derived editorial implementation inference from the verified surfaces; it is not HP-authored or a separately published UI specification.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

- Max content width: 1280px, centered
- Desktop: 12-column grid, 24px gutters, 32px outer margins
- Product grids: 4 columns (desktop) → 2 (tablet) → 1 (mobile)
- Generous outer margins keep hardware photography from touching viewport edges
- Spacing restated from `tokens.spacing`: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64
- Shape restated from `tokens.rounded`: controls `sm: 4` / `md: 4` · cards `lg: 8` · chips/toggles `full: 9999`

**Let the hardware breathe.** Product imagery gets surrounding negative space so devices read as hero objects, not catalog thumbnails. **Banded sections.** The page alternates `#ffffff` and `#f7f7f7` full-width bands to chunk content without borders. **Quiet density on support/specs.** Marketing pages are spacious; specification tables and support docs become denser and more utilitarian. Reading those three as this contract's layout rules is a derived editorial implementation inference from the verified surfaces; it is not HP-authored or a separately published UI specification.

Responsive behavior. The source token-set is `prose-derived`; the breakpoints, collapsing strategy, touch targets, and image behavior are stated by the source at system level rather than measured across viewports, so they are a derived editorial implementation inference from the verified surfaces and are not HP-authored or a separately published UI specification.

| Name | Width | Key Changes |
|---|---|---|
| Mobile | <600px | Single column, hamburger nav, full-width CTAs |
| Tablet | 600–1024px | 2-column product grids, condensed header |
| Desktop | 1024–1280px | 3–4 column grids, mega-menu |
| Wide | >1280px | Content capped at 1280px, side margins grow |

Touch targets the source records: buttons minimum 44px height; list/nav items minimum 48px row height on mobile; icon buttons 40px minimum tap area.

Collapsing strategy, as the source states it:

- Mega-menu collapses to an accordion drawer on mobile
- 4-up product grid reflows to 2-up (tablet) then 1-up (mobile)
- Specification tables become stacked key/value rows below tablet width
- Sticky "Add to cart" bar pins to the bottom on mobile product pages

Image behavior: hero product shots stay responsive and keep aspect ratio, and never edge-crop the device; product thumbnails are square, contained on white, 1:1; logos / icons are 24–40px, consistent within context.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The source characterizes HP's voice as a knowledgeable, optimistic guide — clear, confident, human, and free of jargon. The tagline lineage ("Keep Reinventing", "Let's create") frames technology as an enabler of human creativity, not a spec sheet. Copy is in **sentence case**, declarative, and benefit-led: it explains what the product lets you *do* before how it works. That characterization, that register reading, and the tone table below are a derived editorial implementation inference from the verified surfaces; they are not HP-authored or a separately published UI specification. The published strings themselves are the source's own.

| Context | Tone |
|---|---|
| CTAs | Short, action-first, sentence case (`Add to cart`, `Shop laptops`, `Learn more`) |
| Product headlines | Benefit-led, one idea (`Power through your day`), sentence case |
| Success messages | Plain past-tense confirmation (`Your order is confirmed`). No exclamation pile-ups. |
| Error messages | Specific, blameless, actionable (`Enter a valid email address`). Never `Oops`. |
| Support copy | Patient, step-by-step, second person (`Let's get your printer connected`) |
| Legal / specs | Precise, neutral, factual — utilitarian register for technical detail |
| Sustainability | Earnest, evidence-led — HP leans on recycled-material and carbon claims |

Further published strings the source records, kept byte-exact:

- `Add to cart`, `Buy now`, `Continue`
- `Learn more`, `View details`
- `Shop laptops`
- `Your cart is empty`
- `No results match your filters`
- `Your order is confirmed`
- `Enter a valid email address`
- `Out of stock`, `Notify me`
- `New`, `Featured`, `In stock`
- `Remove from cart`, `Cancel order`
- `Overview` / `Specs` / `Reviews`
- `Keep Reinventing`, `Let's create`
- `Power through your day`
- `Let's get your printer connected`

**Forbidden moves.** ALL-CAPS headlines, multi-color text in one layout, exclamation-heavy hype, jargon without payoff, and pure-black (`#000`) ink. Avoid "Oops" and faux-casual error apologies.

Reproduce the published strings above byte-exact rather than translating or re-casing them. A gloss may sit beside a line; it never replaces the line. That byte-exact / gloss-beside rule is a derived editorial implementation inference from the verified surfaces; it is not HP-authored or a separately published UI specification.

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

These are named values, not permissions to invent.

- **Exact easing curves.** Three easing roles and their uses are established; the curve values are omitted because they are not traceable to HP evidence. Promote a curve for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed.
- **Token-set Body vs hierarchy Body.** `tokens.typography.body` is `16` / `400` / `1.5`. The hierarchy Body row is `14px` / `400` / `22px (1.57)`. Both figures are kept.
- **Search radius.** The token set records `8`; the body records `24px`; the shape scale names the search field on `9999px`. All three are kept.
- **Source inspect statements.** The source §4 footer writes live DOM getComputedStyle; the source HTML comment writes that live DOM was not directly inspected. Both statements are kept. Sibling computed samples stay in the provenance ledger.
