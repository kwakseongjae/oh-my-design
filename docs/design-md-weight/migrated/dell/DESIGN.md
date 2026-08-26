# Dell Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Dell is a US hardware maker whose digital storefront sells laptops, monitors, servers, and workstations to consumers, gamers, small businesses, and Fortune 500 IT departments at the same time. This contract covers Dell's public commerce web surface as reconstructed from the sources recorded for this reference: home and category pages, the product detail page with its spec table and configurator, cart and order confirmation, and the marketing bands around them. The source also attaches recorded component values to contexts beyond those routes — a tab used as an account dashboard section switcher, input fields for account fields and quote forms, a spec table for quote line items, a disabled input for a read-only service tag, a monospace role for service tags and part numbers, tabular figures for quote tables, and a dialog for a sign-in prompt — so those contexts are covered here to the extent of the values §4 and §3 record against them. Drawing that boundary — treating those routes, plus the contexts the component records name, as the covered surface — is a derived editorial implementation inference from the recorded sources; it is not Dell-authored or a separately published UI specification. The source names no scope of its own, so this boundary is the migration's reading of which surfaces its evidence actually reaches.

Dell was founded in 1984 by Michael Dell in a University of Texas dorm room as PC's Limited, on the idea of selling computers directly to customers, configured to order, without a retail middleman. It grew into consumer laptops (Inspiron, XPS), gaming (Alienware and the G series), commercial PCs (Latitude, OptiPlex, Precision), and — through Dell Technologies — enterprise infrastructure, storage, and services. The visual identity centers on Dell Blue `#0076CE` and the circular Dell logo with its tilted "E". Reading the direct-to-customer, build-to-order origin as the spine of the current storefront — the configuration tool, the spec table, and the persistent "Customize & Buy" button as descendants of that 1984 thesis, and the site as an order desk rather than a brochure — is a derived editorial implementation inference from the recorded sources; it is not Dell-authored or a separately published UI specification. The source itself marks that claim as an editorial reading grounded in Dell's documented 1984 direct-sales founding history rather than a verbatim Dell statement.

**Evidence class, stated before anything below is read as a Dell-published fact.** Dell Blue `#0076CE` (Pantone 2174 C, RGB 0, 118, 206) and the Roboto / Dell Replica assignment are corroborated by search across brand-guideline references and by delldesignsystem.com, which is confirmed to publish Color and Typography foundations. dell.com was fetched and confirmed white-dominant surfaces, mega-menu navigation, card-based product grids, clear CTAs ("Purchase", "Learn More", "Explore"), and dark text on light; the component block also records a live-DOM `getComputedStyle` pass over that production site. In the source's own words, the Dell Design System's exact internal token hexes rendered as image and JS and could not be extracted as text, and so its neutral and semantic scales are "reasoned, brand-consistent values anchored to the verified Dell Blue and white-dominant commerce aesthetic". That class extends to the type metrics, component values, product states, and motion durations recorded here. The source's own ledger classes itself `prose-derived`.

The following readings of that scope are a derived editorial implementation inference from the recorded sources; they are not Dell-authored or a separately published UI specification. A storefront that has to carry both a $400 laptop and a $4,000 workstation stays restrained on purpose, and the source characterises the result as **trustworthy, efficient, and calmly authoritative** and as **commerce-grade clarity**: white canvas, near-black slate text, one blue accent reserved for interactivity, dense product grids and scannable spec tables, and price and "Add to Cart" affordances that stay reachable, with product photography — the hardware itself — carrying the visual variety. Dell Blue is read as a mid-tone, slightly cool cerulean that sits deliberately between the cold navy of legacy enterprise IT and the playful azure of consumer apps. What the source records Dell as refusing: opacity in pricing, decorative excess, and friction in configuration — the path from "interested" to "ordered".
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=4 lang=en -->
### Primary tasks

Treating these four jobs as the user outcomes of this reconstruction — reading them out of the recorded components, the configurator, and the product-level state contract, since the source declares no task list of its own — is a derived editorial implementation inference from the recorded sources; it is not Dell-authored or a separately published UI specification.

- Compare products in a category grid of product cards carrying image, name, spec bullets, price, rating, and CTA.
- Read exact technical specifications in the two-column spec table on a product detail page.
- Configure a machine — RAM, storage, warranty tiers — and see the price total update as options change.
- Add a configured product to the cart and reach an order confirmation.
<!-- design-md:claim-end -->

### Audience

The source names stakeholder groups, not individuals: consumers, gamers, small businesses, and Fortune 500 IT departments, and describes one system serving a student buying a $500 laptop and an enterprise IT director provisioning thousands of workstations. Restricting Audience to those groups, and reading them as the only audience claim this evidence supports, is a derived editorial implementation inference from the recorded sources; it is not Dell-authored or a separately published UI specification. The legacy document's three named archetypes were labelled fictional in the source itself; they are dropped rather than migrated, and no demographic, biography, or behavioural claim from them is carried into this document or into provenance.

### Distinctive traits

These six items are a derived editorial implementation inference from the recorded sources; they are not Dell-authored or a separately published UI specification.

- Dell Blue `#0076CE` as the single interactive accent — CTAs, links, focus rings, active tabs, selection
- Near-black slate `#11141a` for headings and body text rather than pure `#000000`
- White-dominant surfaces `#ffffff` on a cool-neutral gray scaffold: `#F7F8FA` bands, `#EEF0F3` fills, `#DDE1E6` borders
- Roboto across product UI; Dell Replica reserved for corporate and marketing identity
- 4px base spacing grid, 4px control radius, 8px container radius
- Borders define surfaces; shadows appear on interaction and overlay only

### Principles

These eight items are a derived editorial implementation inference from the recorded sources; they are not Dell-authored or a separately published UI specification. The source itself marks its interpretive claims — for example "the page is the order desk" — as editorial readings grounded in Dell's documented 1984 direct-sales founding history rather than verbatim Dell statements.

1. **The page is the order desk.** Direct-to-customer build-to-order is the founding thesis. Price, configuration, and "Add to Cart" are first-class and always reachable, never buried, never ambiguous.
2. **The hardware is the hero.** Product photography gets generous white space; UI chrome recedes to a restrained palette so the device commands attention.
3. **Specs are sacred.** Technical values stay exact, unit-explicit, and densely scannable. Comparison shoppers reward density and punish vagueness.
4. **One accent, used with intent.** Dell Blue `#0076CE` marks interactivity and nothing else. It never decorates; a blue element is a tappable element.
5. **Borders before shadows.** Surfaces are defined by precise 1px borders; shadows appear only on interaction and overlay. Precision over drama.
6. **Scale demands clarity.** The same system serves a student and a Fortune 500 buyer, so clarity is a requirement of serving everyone at once rather than a style choice.
7. **Exactness builds trust.** Prices, stock, ship dates, and specs stay precise. Approximation reads as evasion in a high-consideration purchase.
8. **Configuration is the product.** The flow from base model to fully-specced order is the core experience; every config control stays reversible, clear, and consequence-aware, with the price updating live.

### Avoid

These eight prohibitions are a derived editorial implementation inference from the recorded sources; they are not Dell-authored or a separately published UI specification.

- Do not use pure black `#000000` for body text — use slate ink `#11141a`.
- Do not introduce a second accent hue for interaction; Dell Blue is the sole interactive color.
- Do not use large border radii above 8px.
- Do not bury price or the primary CTA below the fold.
- Do not use colored or dramatic shadows; keep them slate-tinted, low-opacity, and interaction-driven.
- Do not mix font families into product UI — Dell Replica is marketing-only, never product UI body.
- Do not loosen spec tables; density is a feature for comparison shoppers.
- Do not treat this reconstruction's reasoned neutral, semantic, component, state, or duration values as extracted Dell Design System tokens, and do not carry them onto Dell surfaces outside the public commerce web storefront described in Scope.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Value classes

Two classes of value appear below and must not be merged. `#0076CE` is corroborated brand identity, carrying a Pantone and RGB specification. Every other color, and every spacing, shape, elevation, and motion value, is a reasoned value anchored to that blue and to the confirmed white-dominant commerce surface, because the published Dell Design System token hexes could not be extracted as text. Reading each reasoned value as a renderable default for this reconstruction, while keeping it distinct from an extracted Dell token, is a derived editorial implementation inference from the recorded sources; it is not Dell-authored or a separately published UI specification.

### Semantic color

**Primary**

- **Dell Blue** (`#0076CE`): brand anchor and primary interactive color — CTAs, primary buttons, links, active states, focus rings. Pantone 2174 C, RGB (0, 118, 206).
- **Dell Blue Hover** (`#0063AF`): darker hover/pressed state for blue elements, about 12% darkened.
- **Dell Blue Active** (`#00538F`): deepest pressed/active state for primary buttons.
- **Blue Tint** (`#E5F1FA`): blue-tinted surface for informational backgrounds, selected rows, hover fills.
- **Pure White** (`#ffffff`): page background, card surface, dominant canvas.
- **Slate Ink** (`#11141a`): primary heading and body text; near-black with a cool undertone, softer than pure `#000000`.

**Brand (logo / marketing)**

- **Dell Blue** (`#0076CE`): corporate logo color and primary brand mark, used on the Dell roundel and wordmark.
- **Midnight Navy** (`#0E1B2C`): deep brand navy for premium marketing surfaces, footers, and dark-mode hero bands.
- **Carbon Black** (`#000000`): reserved for high-contrast brand statements and print; not a body-text color.

**Semantic**

- **Success Green** (`#008A00`): in-stock indicators, order confirmations, positive validation, savings callouts.
- **Error Red** (`#CE2029`): form errors, out-of-stock, destructive actions, price-increase warnings.
- **Warning Amber** (`#B85C00`): low-stock, pending order states, attention-needed notices.
- **Info Blue** (`#0076CE`): informational banners and tooltips reuse Dell Blue.
- **Deal Red** (`#CE2029`): promotional "Save $X" and clearance pricing emphasis.

**Neutral scale (cool gray)**

| Step | Value | Use |
|---|---|---|
| Gray 50 | `#F7F8FA` | Lightest fill — page section bands, app background |
| Gray 100 | `#EEF0F3` | Card fills, disabled surfaces, table zebra stripes |
| Gray 200 | `#DDE1E6` | Default border color, dividers, input outlines |
| Gray 300 | `#C5CBD3` | Emphasized borders, active input outlines |
| Gray 400 | `#9AA3AE` | Placeholder text, disabled icon fills |
| Gray 500 | `#6B7480` | Caption text, secondary metadata |
| Gray 600 | `#4C545E` | Body text on white, descriptions |
| Gray 700 | `#363B42` | Emphasized body, sub-headings |
| Gray 800 | `#22262B` | Strong labels, navigation text |
| Gray 900 | `#11141a` | Primary headings, strongest text (slate ink) |

**Surface and borders**

- Border default `#DDE1E6` (gray 200): card borders, input borders, table dividers.
- Border strong `#C5CBD3` (gray 300): active inputs, emphasized separators.
- Surface raised: `#ffffff` with shadow — floating panels, dropdowns, popovers.
- Overlay scrim: `rgba(14, 27, 44, 0.6)`, a dark navy-tinted modal backdrop.

The following unmerged-field reading is a derived editorial implementation inference from the recorded sources; it is not Dell-authored or a separately published UI specification. Each hex above is a role-bound renderable field. A component-level field keeps its own role: the spec table's label column `#6B7480` and value column `#22262B`, and the success toast's `#0A5A0A` text, are that component's fields and are not merged into general body, caption, or success ink.

### Spacing

- Base unit: 4px.
- Common values: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px.
- Section vertical rhythm: 48px to 64px between major page bands.
- Card internal padding: 16px for the product card, 20px to 24px for config and promo cards.

### Shape

- Tight (4px): buttons, inputs, badges, toasts — the system default.
- Standard (8px): cards, modals, config panels.
- Pill (9999px): toggles, filter chips, rating pills.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (level 0) | No shadow, 1px border | Cards at rest, table rows, inline elements |
| Subtle (level 1) | `0 1px 3px rgba(17,20,26,0.08)` | Slight lift, hover hint |
| Standard (level 2) | `0 4px 12px rgba(17,20,26,0.10)` | Card hover, dropdowns, popovers |
| Elevated (level 3) | `0 8px 24px rgba(17,20,26,0.14)` | Mega-menu panels, floating cart |
| Modal (level 4) | `0 8px 32px rgba(17,20,26,0.20)` | Dialogs, modals, full overlays |

Most surfaces are defined by a 1px border rather than a shadow. Shadows appear on interaction — hover lift, dropdown open — and on true overlays. All shadows use a cool slate-tinted black `rgba(17,20,26,...)` at low opacity: never colored, never dramatic. Reading that border-first treatment as reading precise and engineered, fitting a hardware brand, and reading elevation as communicating "this floats above the page", nothing more, is a derived editorial implementation inference from the recorded sources; it is not Dell-authored or a separately published UI specification.

Blur: the sticky masthead applies a subtle backdrop blur on scroll; mega-menu and floating cart panels use a light backdrop scrim rather than heavy blur.

### Motion

Named durations:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle flips, checkbox changes |
| `motion-fast` | 120ms | Hover, focus ring, button press, price recalc flash |
| `motion-standard` | 240ms | Default — dropdowns, cart flyout, tab switches, card hover lift |
| `motion-slow` | 360ms | Mega-menu open, modal entrance, accordion expand |
| `motion-page` | 300ms | Route transitions between top-level pages |

Reduced motion: under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant` and slides become fades. The store stays fully usable, just static.

Signature motions, with duration tokens only:

1. **Cart flyout.** Adding to cart slides a panel in from the right edge over `motion-standard`, synchronized with a cart-count badge tick and a backdrop scrim fade to `rgba(14,27,44,0.6)`. Dismissal uses `motion-fast`.
2. **Live price recalc.** When a configuration option changes, the price total briefly flashes `#E5F1FA` behind itself over `motion-fast`, then settles.
3. **Card hover lift.** Product cards rise via shadow `0 4px 12px rgba(17,20,26,0.10)` over `motion-standard`.
4. **Mega-menu open.** The navigation panel expands downward over `motion-slow` with a synchronized content fade.

The legacy document also named four easing tokens with cubic-bezier curves. Those curve values carry no source in this reference, and three of them are byte-identical to the legacy 0.1 authoring template's example curves rather than a Dell observation, so both the curves and the token names that only carried them are removed; they are listed in the omission ledger in provenance. That removal is a migration disposition made under the approved verdict on unsourced curves; it is a judgment about this reference's evidence, not a Dell statement about Dell's own motion. Do not reinstate a motion easing curve, and do not upgrade the durations, reduced-motion rule, or signature motions above from reasoned values to observed Dell tokens, until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or duration is not that gate. Any exact easing value remains a local implementation default until that per-component computed observation exists.

### Rules

- Use Dell Blue `#0076CE` for all interactive elements — buttons, links, focus rings, active tabs.
- Use Roboto across all UI in weights 400 / 500 / 700.
- Define cards and inputs with 1px `#DDE1E6` borders, adding shadow only on hover or overlay.
- Use tabular numerals for prices, quantities, and spec values.
- Keep border radius at 4px for controls and 8px for containers.
- Show in-stock in green `#008A00`, deals and errors in red `#CE2029`.
- Use blue tint `#E5F1FA` for selected config options and info surfaces.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | delldesignsystem.com is confirmed to document Color and Typography foundations, and is the basis for naming Roboto as the primary digital typeface. Its exact internal token values render as image and JS and could not be extracted as text. |
| Live surface-use | dell.com was fetched and confirmed dark text on white-dominant surfaces; the component block records a live-DOM `getComputedStyle` pass over the production site. Per-role computed metrics for individual text styles remain unresolved. |
| Corporate / marketing face | Dell Replica, a custom cut of the LL Replica typeface, is recorded as the corporate identity and marketing-headline face. Product UI runs almost entirely on Roboto. |
| Official distributed asset | No Dell-distributed font file, webfont host, or license grant is recorded in this reference for either Roboto or Dell Replica. |
| Declared-only | `Roboto Mono` for spec codes, part numbers, and service tags. The fallback members of each stack — Helvetica Neue, Helvetica, Arial, SF Mono, Menlo, Consolas — are fallbacks, never the brand face. |

Reading the search-corroborated Roboto assignment and the confirmed dark-on-light capture as agreeing evidence for a single current UI family, while keeping the marketing face separate, is a derived editorial implementation inference from the recorded sources; it is not Dell-authored or a separately published UI specification.

### Families

- **Primary:** `Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif`
- **Brand / display:** `"Dell Replica", Roboto, sans-serif` — corporate identity and marketing headlines only
- **Monospace:** `"Roboto Mono", "SF Mono", Menlo, Consolas, monospace` — spec codes, part numbers, service tags

Do not substitute a system stack for either brand family and present it as the Dell face. Do not carry Dell Replica into product UI body text.

### Type roles

| Role | Font | Size | Weight | Line height | Letter spacing | Use |
|---|---|---:|---:|---|---|---|
| Display Hero | Roboto | 48px | 700 | 56px (1.17) | -0.5px | Marketing hero headlines |
| Display Large | Roboto | 36px | 700 | 44px (1.22) | -0.25px | Landing section headers |
| Heading 1 | Roboto | 28px | 700 | 36px (1.29) | normal | Page titles, PDP product name |
| Heading 2 | Roboto | 22px | 500 | 30px (1.36) | normal | Section headings, card titles |
| Heading 3 | Roboto | 18px | 500 | 26px (1.44) | normal | Sub-sections, spec group labels |
| Subtitle | Roboto | 16px | 500 | 24px (1.50) | normal | List headers, emphasized labels |
| Body Large | Roboto | 16px | 400 | 24px (1.50) | normal | Descriptions, marketing copy |
| Body | Roboto | 14px | 400 | 20px (1.43) | normal | Standard reading text, spec rows |
| Body Small | Roboto | 13px | 400 | 18px (1.38) | normal | Secondary info, table cells |
| Caption | Roboto | 12px | 400 | 16px (1.33) | 0.2px | Legal, fine print, timestamps |
| Price Display | Roboto | 28px | 700 | tight | normal | Product price — tabular numerals |

The following ratio-versus-px reading is a derived editorial implementation inference from the recorded sources; it is not Dell-authored or a separately published UI specification. The parenthesised ratios are the scaling form of each line height, and the px figures are the size-local rendering of the same ratio. Keep the ratio when the size changes.

### Type rules

- Roboto in three core weights: 400 regular for body, 500 medium for headings and labels, 700 bold for display and price. Light 300 appears only in large marketing display.
- Tabular figures for commerce: prices, spec quantities, and quote tables use fixed-width figures so columns align.
- Negative tracking on display: headlines at 28px and above take -0.25px to -0.5px letter spacing.
- Sentence case dominates for headings and UI labels; ALL-CAPS is reserved for tiny eyebrow labels with +0.5px tracking.
- Body Small (13px / 400) is the workhorse for dense spec comparison tables, and its line height stays generous at 1.38 to keep rows scannable.

### Assets

The imagery-priority and asset-boundary readings below are a derived editorial implementation inference from the recorded sources; they are not Dell-authored or a separately published UI specification.

- The brand mark is the circular Dell logo with the tilted "E", carried in Dell Blue `#0076CE`. The catalog logo record for this reference is a third-party icon-set entry and is held in provenance, not promoted here as a Dell-supplied asset file.
- Product photography is the primary imagery, and the source treats the hardware as the hero. Do not replace it with invented brand-color decoration.
- Partner logos such as Intel and NVIDIA render at a fixed 24-32px height, consistent within a context.
- No Dell illustration set, icon set, or asset license grant is recorded in this reference.

<!-- design-md:section components-states -->
## 4. Components & States

### Declared product-level state contract

| State | Treatment |
|---|---|
| **Empty (cart)** | Centered single line in `#4C545E` 16px ("Your cart is empty"), a `#0076CE` "Shop laptops" primary button below, and 2-3 suggested category links. No illustration required. |
| **Empty (search/filter)** | `#6B7480` caption ("No results match your filters"), a tertiary "Clear all filters" text-button in `#0076CE`. |
| **Loading (product grid)** | Skeleton cards at `#EEF0F3` matching tile dimensions, 1.2s shimmer. Price area shows a skeleton bar, not `$0`. |
| **Loading (config recalc)** | Price field shows an inline spinner in `#0076CE` while the new total resolves; the previous price stays dimmed until replaced. |
| **Error (inline field)** | 1px `#CE2029` border on the input, helper text below in `#CE2029` 12px. One actionable sentence ("Enter a valid ZIP code"). |
| **Error (toast)** | `#11141a` bg, white 14px text, 4s auto-dismiss. One sentence, no icon clutter. |
| **Error (page-blocking)** | Reserved for outage or checkout failure. White page, centered `#11141a` 18px message, `#0076CE` retry button, support link below. |
| **Success (added to cart)** | `#11141a` toast "Added to cart" plus a mini cart-count badge animation; flyout cart slides from the right. |
| **Success (order placed)** | Dedicated confirmation page — green `#008A00` check, order number in `#11141a` 28px, summary table, estimated delivery date. Never a toast. |
| **Out of stock** | Red `#CE2029` "Out of Stock" badge, disabled CTA, and a `#0076CE` "Notify me" secondary button. |
| **Disabled** | Buttons drop to `#C5CBD3` bg; inputs go `#EEF0F3` bg with `#DDE1E6` border. Geometry unchanged so re-enable is stable. |
| **Skeleton** | `#EEF0F3` blocks at exact final dimensions, rounded to component radius (4px/8px), 1.2s shimmer with 8% white highlight. |

### How to read the state tables below

Every component role, kind, and state-applicability judgment in this section is a derived editorial implementation inference from the recorded sources; none of them is Dell-authored or a separately published UI specification. The source records component values and a product-level state contract; it publishes no per-component applicability map, so the maps below are the migration's reading of what each control means.

Applicability follows what each control means in this storefront, not how much evidence exists for it. Where the source records a treatment for a state, that treatment is given; where it does not, the state stays applicable and the visual value is omitted. The source records a palette-level intent that Dell Blue marks focus rings, and an input-level `Focus` treatment; neither is evidence of a `focus-visible` treatment, which is a different evidence class, so `focus-visible` treatments stay unresolved and the input's recorded `Focus` values are kept as their own source-labelled row. Where a component declares no kind and no applicability map, the source gives no basis for deciding its interaction contract and the migration leaves it open rather than settling it. This is not a complete state-coverage claim.

### Button

- Role: commerce and marketing action control
- Type (source): `button`
- Kind: interactive
- Anatomy: label, optional icon
- Radius: 4px · Font: 14px / 500 / Roboto · Default height: 40px
- Size scale (height · font · padding · radius): `small` 32px · 13px / 500 · 0 16px · 4px; `medium` (default) 40px · 14px / 500 · 0 24px · 4px; `large` 48px · 16px / 500 · 0 32px · 4px. A full-width `block` variant fills the cart sidebar and the mobile sticky CTA bar.

| Variant | Background | Text | Border | Padding | Recorded interaction values | Use |
|---|---|---|---|---|---|---|
| Primary (fill) | `#0076CE` | `#ffffff` | none | 0 24px | hover `#0063AF`, active `#00538F`, disabled bg `#C5CBD3` text `#ffffff` | Primary commerce CTA (Add to Cart, Buy Now) |
| Secondary (outline) | `#ffffff` | `#0076CE` | 1px solid `#0076CE` | 0 24px | hover bg `#E5F1FA` | Secondary action paired with primary (Compare, Learn More, Save for later) |
| Tertiary (text) | transparent | `#0076CE` | none | 0 8px | hover text `#0063AF` with underline | Low-emphasis inline action (View details, Remove) |
| Dark (marketing) | `#11141a` | `#ffffff` | none | 0 24px | hover bg `#363B42` | High-contrast CTA on light marketing bands (Shop now, Explore deals) |
| Danger | `#CE2029` | `#ffffff` | none | 0 24px | hover bg `#A81A21` | Destructive confirmation (Cancel order, Remove all) |

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded per variant above |
| hover | applicable | Pointer-web control; treatment recorded per variant |
| focus-visible | applicable | Keyboard-reachable commerce action; treatment unresolved |
| disabled | applicable | Recorded for the primary fill and in the product-level disabled contract |
| loading | applicable | A commerce submit can be pending; the source places its loading treatments on the product grid and the config price field, so the button's own treatment is unresolved |
| error | applicable | A commerce action can fail; the source routes the visible failure to the error toast and the page-blocking error page, so the button's own treatment is unresolved |
| success | applicable | A commerce action can confirm; the source routes confirmation to the added-to-cart toast and the order-placed page, so the button's own treatment is unresolved |

### Text Input

- Role: form and search field across account, quote, and masthead search
- Type (source): `input`
- Kind: interactive
- Anatomy: value field, placeholder, helper text
- Radius: 4px · Padding: 10px 12px · Font: 14px / 400 / Roboto · Height: 40px

| Variant | Background | Text | Border | Recorded extras | Use |
|---|---|---|---|---|---|
| Default | `#ffffff` | `#22262B` | 1px solid `#C5CBD3` | placeholder `#9AA3AE` | Standard form input — search, account fields, quote forms |
| Error | `#ffffff` | `#22262B` | 1px solid `#CE2029` | helper text below `#CE2029` 12px / 400 | Validation failure, paired with an inline error message |
| Disabled | `#EEF0F3` | `#9AA3AE` | 1px solid `#DDE1E6` | — | Locked fields (read-only service tag, fixed config option) |
| Search (header) | `#F7F8FA` | `#22262B` | 1px solid `#DDE1E6` | padding 10px 40px 10px 12px, right pad for icon | Global product search in the masthead |

Source-labelled interaction row, kept in its own evidence class: `Focus` — border `#0076CE`, ring `0 0 0 3px rgba(0,118,206,0.2)`. The source labels this `Focus`, so it is not promoted into the `focus-visible` row below.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded per variant above |
| hover | applicable | Pointer-web field; treatment unresolved |
| focus-visible | applicable | Keyboard-reachable field; treatment unresolved, since the recorded `Focus` values are a different evidence class |
| disabled | applicable | Recorded variant and product-level disabled contract |
| loading | applicable | A search or validation result can be pending for this field; treatment unresolved |
| error | applicable | Recorded variant with border and helper-text treatment |
| success | applicable | The source assigns positive validation to success green; the field's own treatment is unresolved |

### Product Card

- Role: grid product tile
- Type (source): `card`
- Kind: interactive
- Anatomy: image, name, spec bullets, price, rating, CTA
- Background `#ffffff` · Border 1px solid `#DDE1E6` · Radius 8px · Padding 16px
- Shadow: none at rest, border-defined; hover lifts to `0 4px 12px rgba(17,20,26,0.10)`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded above |
| hover | applicable | Recorded hover lift shadow |
| focus-visible | applicable | Keyboard-reachable tile in a browsable grid; treatment unresolved |
| disabled | applicable | A tile can present an unavailable product; the source expresses that with the out-of-stock badge and a disabled CTA inside the tile, so the tile's own treatment is unresolved |
| loading | applicable | Recorded as the product-grid skeleton card at `#EEF0F3` in tile dimensions with a 1.2s shimmer |
| error | applicable | A tile's price or stock read can fail; the source routes the visible failure to the toast and page-blocking surfaces, so the tile's own treatment is unresolved |
| success | applicable | The tile's CTA produces the added-to-cart confirmation; the tile's own treatment is unresolved |

### Configuration Card

- Role: selectable configuration option (RAM, storage, warranty tiers)
- Kind: interactive
- Anatomy: option label, description, price delta
- Background `#ffffff` · Border 1px solid `#DDE1E6` · Radius 8px · Padding 20px
- Selected, a source-declared state outside the seven canonical ones: border 2px `#0076CE` plus background `#E5F1FA`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded above |
| hover | applicable | Pointer-web selectable option; treatment unresolved |
| focus-visible | applicable | Keyboard-reachable option control; treatment unresolved |
| disabled | applicable | The source names a fixed config option among its locked-field uses; the card's own treatment is unresolved |
| loading | applicable | Selecting an option triggers the recorded config-recalc loading treatment, which the source places on the price field rather than the card |
| error | applicable | A configuration choice can be rejected; the source routes the visible failure to the inline-field and toast surfaces, so the card's own treatment is unresolved |
| success | applicable | Selection is confirmed by the recorded price-recalc flash rather than by a card treatment |

### Tabs

- Role: product-detail and account section switcher (Specs, Reviews, Q&A; account dashboard)
- Type (source): `tab`
- Kind: interactive
- Background `#ffffff` · Inactive text `#6B7480` 14px / 500 · Active text `#11141a` 14px / 500 · Active indicator 2px `#0076CE` bottom border · Hover text `#22262B`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded inactive and active treatments above |
| hover | applicable | Recorded hover text `#22262B` |
| focus-visible | applicable | Keyboard-reachable section control; treatment unresolved |
| disabled | applicable | A PDP section can be unavailable for a given product, leaving its tab inert; treatment unresolved |
| loading | not-applicable | The tab selects which panel is shown. Pending panel content belongs to the panel — the source's loading treatments live on the product grid and the config price field — so a pending state has no meaning for the selector itself |
| error | not-applicable | The source assigns failure to the inline field, the error toast, and the page-blocking error page. A section selector is not one of those failure surfaces |
| success | not-applicable | The source assigns confirmation to the added-to-cart toast and the order-placed confirmation page. Switching sections commits nothing, so there is nothing for the selector to confirm |

### Toggle

- Role: boolean preference control (Premium Support, email opt-in)
- Type (source): `toggle`
- Kind: interactive
- Track `#0076CE` on / `#C5CBD3` off · Radius 9999px · Thumb `#ffffff` 18px circle with `0 1px 2px rgba(17,20,26,0.20)` shadow

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded on and off track values above |
| hover | applicable | Pointer-web control; treatment unresolved |
| focus-visible | applicable | Keyboard-reachable control; treatment unresolved |
| disabled | applicable | A preference can be locked by plan or account; the product-level disabled contract covers buttons and inputs, so the toggle's own treatment is unresolved |
| loading | applicable | Committing a preference can be pending; treatment unresolved |
| error | applicable | Committing a preference can fail; the source routes the visible failure to the toast surface, so the toggle's own treatment is unresolved |
| success | applicable | Committing a preference can confirm; the source routes confirmation to the toast surface, so the toggle's own treatment is unresolved |

### Badge

- Role: compact status and promo label
- Type (source): `badge`
- Kind: non-interactive — its declared uses are availability, savings, newness, and category metadata; the label reports status and carries no activation or selection of its own. Reading those four declared uses as a non-interactive role is a derived editorial implementation inference from the recorded sources; it is not Dell-authored or a separately published UI specification.
- Radius 4px · Padding 2px 8px

| Variant | Background | Text | Font | Use |
|---|---|---|---|---|
| Deal / promo | `#CE2029` | `#ffffff` | 12px / 700 / Roboto | "Save $200", "Clearance", "Doorbuster" |
| In stock | `#E6F4E6` | `#008A00` | 12px / 500 / Roboto | Availability indicator |
| New | `#E5F1FA` | `#0076CE` | 12px / 700 / Roboto | Newly released product or feature |
| Neutral / tag | `#EEF0F3` | `#4C545E` | 12px / 500 / Roboto | Category tags, metadata chips |

### Spec Table

- Role: two-column label/value presentation for tech specs, comparison grids, and quote line items — the component the product pages are built around
- Kind: non-interactive — it presents paired values for reading and comparison, and no control, activation, or selection is part of its declared anatomy. Reading that presentation role as non-interactive is a derived editorial implementation inference from the recorded sources; it is not Dell-authored or a separately published UI specification.
- Background `#ffffff`, alternating rows `#F7F8FA`
- Row divider: 1px `#EEF0F3`
- Label column: `#6B7480`, 13px / 400, left-aligned, 40% width
- Value column: `#22262B`, 13px / 400, left-aligned
- Group header: `#11141a`, 14px / 500, with a 1px `#DDE1E6` bottom border
- Padding: 10px 16px per cell

### Promo Card

- Role: dark promotional banner card on home and category pages
- Type (source): `card`
- Background `#0E1B2C` · Text `#ffffff` · Border none · Radius 8px · Padding 24px
- No kind or state-applicability map is declared. The source gives this component surface geometry and a placement, and does not establish whether the banner itself is an activation target, so its interaction contract is left open rather than decided here.

### Toast

- Role: transient confirmation and error surface
- Type (source): `toast`
- Default: background `#11141a` · Text `#ffffff` · Border none · Radius 4px · Padding 12px 16px · Shadow `0 4px 12px rgba(17,20,26,0.18)` · Font 14px / 400 / Roboto. Use: transient confirmation ("Added to cart", "Saved").
- Success: background `#E6F4E6` · Text `#0A5A0A` · Left border 4px `#008A00` · Radius 4px. Use: order placed, address saved.
- The product-level contract gives the error toast a 4s auto-dismiss and one sentence without icon clutter.
- No kind or state-applicability map is declared. The source describes the toast as an auto-dismissing surface and declares no control within it, so its interaction contract is left open rather than decided here.

### Dialog

- Role: modal for configuration confirm, cart review, and sign-in prompt
- Type (source): `dialog`
- Background `#ffffff` · Text `#11141a` · Border none · Radius 8px · Padding 24px · Shadow `0 8px 32px rgba(17,20,26,0.20)` · Backdrop `rgba(14,27,44,0.6)`
- No kind or state-applicability map is declared. The source gives the modal its surface geometry and backdrop and names its uses, and declares no control anatomy of its own, so its interaction contract is left open rather than decided here.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

### Grid and container

- Max content width 1280px, centered with auto margins.
- 12-column grid, 24px gutters on desktop.
- Product grid: 4 columns desktop, 2 tablet, 1 mobile.
- Horizontal page padding: 24px desktop, 16px mobile.
- Masthead, utility nav, and mega-menu are full-bleed; content sits in the 1280px container.

### Density

Product photography gets generous surrounding white space so the device leads and the chrome recedes. Spec tables and comparison grids are intentionally tight, at 10px cell padding. Price and the primary CTA stay reachable rather than scrolling out of reach, with sticky elements keeping "Add to Cart" available. Reading those three density decisions as one deliberate trade — breathing room for imagery, compression for comparison data, persistence for commerce — is a derived editorial implementation inference from the recorded sources; it is not Dell-authored or a separately published UI specification.

### Breakpoints

| Name | Width | Key changes |
|---|---|---|
| Mobile | <768px | 1-col product grid, hamburger nav, sticky bottom CTA bar |
| Tablet | 768-1024px | 2-col grid, condensed mega-menu, side filters collapse to a drawer |
| Desktop | 1024-1280px | 3-4 col grid, full mega-menu, persistent left filter rail |
| Wide | >1280px | Content capped at 1280px, centered with growing side margins |

### Touch targets

- Buttons: large 48px on mobile, medium 40px on desktop.
- List and menu items: minimum 44px row height.
- Filter checkboxes and config tiles: minimum 44px tappable area.

### Collapsing strategy

- The mega-menu collapses to a full-screen drawer with accordion categories on mobile.
- The left filter rail becomes a bottom-sheet "Filter" drawer.
- Spec comparison tables become horizontally scrollable card stacks.
- The primary CTA pins to a sticky bottom bar on the mobile product detail page.

### Image behavior

- Product photography is responsive, maintains aspect ratio, and is lazy-loaded.
- Hero banners use art-directed crops per breakpoint.
- Partner logos such as Intel and NVIDIA keep a fixed 24-32px height, consistent within a context.

### Platform boundary

The source establishes web breakpoints, touch targets, and collapsing behaviour only. This section carries those and nothing further; any layout or platform value the source leaves unresolved is omitted here rather than inferred from the web values above. Naming what such a value would be is itself outside the evidence, so this reference names none.

<!-- design-md:section content-locales -->
## 6. Content & Locales

Copy is in US English and sentence case. Reading the recorded voice as that of a knowledgeable, no-nonsense sales engineer — clear, confident, benefit-first, and aware of when "16GB DDR5" matters and when "fast, future-ready memory" reads better — is a derived editorial implementation inference from the recorded sources; it is not Dell-authored or a separately published UI specification. The same class applies to the per-context contract and forbidden-pattern list below: the source records them, Dell does not publish them. The quoted labels, headlines, spec strings, and messages inside them are Dell-published copy and are carried byte-for-byte.

| Context | Tone |
|---|---|
| CTAs | Imperative, short ("Add to Cart", "Customize & Buy", "Shop deals", "Compare") |
| Product names | Exact model plus descriptor ("XPS 13 Laptop", "Alienware m18 R2 Gaming Laptop") |
| Spec values | Precise, unit-explicit ("16GB LPDDR5x 7467MT/s"), never rounded vaguely |
| Marketing headlines | Benefit-led, aspirational ("Power your possible", "Built to do more") |
| Error messages | Specific and actionable ("Enter a valid ZIP code to check delivery"). Never "Oops" |
| Stock / shipping | Factual and reassuring ("In Stock. Ships in 1-2 business days.") |
| Pricing | Exact dollars with clear savings ("$1,299.99 · Save $200"), strikethrough on the was-price |

Forbidden patterns: vague availability ("might be available"), rounded prices on the product detail page ("around $1,300"), hype without spec backing ("the best laptop ever"), and "Oops" or "Whoops" in errors. A savings claim always pairs with a real strikethrough reference price.

Locale profile: this contract covers the US English storefront only. Script and font support, expansion and line breaking, number, date, currency and address conventions, register, and legal constraints for any other locale are unresolved here and must not be assumed from the US surface.

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

These are unnamed values, not permissions to invent:

- The Dell Design System's extracted token hexes for the neutral, semantic, and component scales; everything here beyond `#0076CE` is a reasoned anchor value.
- Per-component `focus-visible` treatments, and any hover, pressed, or disabled treatment not listed on its component above.
- Computed motion evidence of all five kinds, and therefore every easing curve; the durations and reduced-motion rule carry the same reasoned class as the palette.
- Interaction contracts for the promo card, toast, and dialog.
- Dark-surface tokens beyond the recorded midnight navy marketing band.
- Any layout or platform value past the web breakpoints, touch targets, and collapsing behaviour recorded in §5. The source records no other layout or platform evidence, so this reference cannot name which further values exist.
- Any locale other than US English.
- Font file distribution, webfont hosting, and license grants for Roboto, Roboto Mono, and Dell Replica as used by Dell.
- Further tokens for the account, quote, service-tag, and Alienware contexts, past the component values the source already records against them and this document carries: the tab and the account dashboard, the input for account fields and quote forms, the spec table for quote line items, the disabled input for a read-only service tag, the monospace role for service tags and part numbers, the tabular figures for quote tables, the dialog for a sign-in prompt, and the `"Alienware m18 R2 Gaming Laptop"` product-name copy. The source names those contexts as uses of components it records and gives them no values of their own beyond those uses.
