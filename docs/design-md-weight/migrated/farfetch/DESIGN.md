# Farfetch Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Farfetch is the global luxury fashion marketplace: a platform where independent luxury boutiques list and ship their own physical inventory to buyers anywhere in the world. This contract covers the Farfetch UK web surface as recorded on 2026-06-22 — the `https://www.farfetch.com/uk/` homepage nav, hero, newsletter CTA, footer and color-frequency scan, one product-listing-page title, and a cross-check against the FARFETCH España style record. It does not treat that homepage as a proxy for the checkout, account, wishlist, app, or help surfaces beyond the values stated here.

The recorded interface layer is binary. The canvas is Paper white (`#ffffff`) and all text, navigation and interactive chrome are jet-black Carbon (`#222222`). Border-radius is exactly 0px across every interactive element — buttons, inputs, product tiles and navigation all sit at hard right angles. The inspect records `box-shadow: none` across all elements. The proprietary **Farfetch Basis** geometric sans-serif carries all weight and hierarchy at two weights: 400 for everything functional, 700 for everything directional. Product photography, brand imagery and editorial modules carry the visual variety, and the footer inverts the monochrome to a `#222222` background with white text. Reading that restraint as the system's most deliberate luxury signal — an interface engineered to disappear behind the goods it sells, a white-gloved attendant to the product, with the absence of shadow, radius, accent and hover animation doing the work competitors do with decoration — is a derived editorial implementation inference from the verified surfaces; it is not Farfetch-authored or a separately published UI specification.

Farfetch was founded in 2007 by José Neves, a Portuguese entrepreneur and luxury fashion industry veteran, in London. Neves identified a structural fragmentation in the luxury market: thousands of independent boutiques in Milan, Paris, Tokyo and New York held extraordinary inventory that was invisible to global shoppers while they lost customers they could not reach. The original proposition — "the world's fashion marketplace" — positioned Farfetch not as a retailer but as a platform, earning revenue as a commission on each transaction while the boutiques owned and fulfilled the stock. That asset-light model differentiated it from inventory-carrying luxury e-tailers such as Net-a-Porter and Mytheresa. Farfetch later acquired Browns (the London boutique), Stadium Goods (sneaker authentication) and New Guards Group (a luxury brand incubator including Off-White), deepening from platform to luxury ecosystem. The brand went public on the NYSE in 2018, grew to a peak market cap around $23B in 2021, then went through a significant restructuring across 2023–2024 following macroeconomic headwinds and a luxury market correction. In January 2024 the South Korean e-commerce group Coupang announced an investment and rescue package and took operational control; Farfetch continues to operate as a global luxury marketplace under the Coupang umbrella while maintaining its London headquarters and brand identity. These are widely documented public-record facts, not statements published by a Farfetch design organisation.

Reading the monochrome gallery aesthetic as an aspiration statement — an interface that should look as if it belongs on the same shelf as the goods it sells, borrowed from the white-cube gallery and the couture store's understated display window rather than from a technology company — is a derived editorial implementation inference from the verified surfaces; it is not Farfetch-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=4 lang=en -->
### Primary tasks

- Browse luxury products through the Womenswear / Menswear / Kidswear category navigation on the Farfetch UK homepage.
- Search the catalog from the header search field.
- Sign up for the newsletter from the homepage newsletter section.
- Move a chosen product toward purchase through the "Add to Bag" and checkout calls to action.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. Fictional archetypes are not evidence and none are carried here. Use stakeholder groups only: luxury fashion buyers and boutique-to-global shoppers as the publicly observable customer segments; independent luxury boutiques as the supply side of the marketplace; and a customer base spanning the 190+ countries the platform serves.

### Distinctive traits

- Proprietary "Farfetch Basis" geometric sans-serif, weights 400 (body) and 700 (headings/buttons)
- Zero border-radius across every element — hard rectangles, as though the UI were printed on heavy stock card
- Strictly monochrome: Carbon (`#222222`) and Paper (`#ffffff`) as the entire interactive color vocabulary
- No drop shadows — depth comes from product photography alone
- Footer inversion: `#222222` background with white text as the singular visual drama
- Product tiles: full-bleed images with zero padding, zero radius, zero shadow
- Muted Ash Gray (`#b6b6b6`) for secondary icons and underline-search borders
- Generous whitespace and 8px-base spacing system

Each value above is from the recorded inspect. The readings attached to those values — zero radius and shadow-absence as a luxury signal rather than as an implementation choice with other possible motives, the hard rectangles as heavy stock card, the footer inversion as the page's singular visual drama — are a derived editorial implementation inference from the verified surfaces; they are not Farfetch-authored or a separately published UI specification.

### Principles

These five items are a derived editorial implementation inference from the verified surfaces; they are not Farfetch-authored or a separately published UI specification.

1. **The product is the display.** Every interface decision exists to frame the product photography, not compete with it. *UI implication:* zero-radius tiles, no shadow, no color except Carbon and Paper — the goods must be the only saturation on the page.
2. **Curation over volume.** A marketplace with 3,000+ boutiques and millions of products signals quality through selection, not through showing everything. *UI implication:* generous whitespace, category navigation that assumes the customer knows what they want.
3. **Luxury is restraint.** The most luxurious interfaces do not decorate — they edit. *UI implication:* 0px radius as a typographic law, not a preference; two weights; one palette.
4. **Global vernacular, editorial tone.** Farfetch serves 190+ countries and deliberately avoids cultural specificity — the Farfetch Basis typeface is nationality-neutral. *UI implication:* noun-only category labels function in any language; no idiom, no slang.
5. **The boutique experience, at scale.** The marketplace inherits the physical boutique's silence and pace — no urgency traps, no flashing sale badges, no countdown timers. *UI implication:* sale promotions appear as plain factual copy, not visual alarm.

The same reading produces these application rules. The values inside them are recorded. The reasoning attached to each is a derived editorial implementation inference from the verified surfaces; it is not Farfetch-authored or a separately published UI specification:

- Use 0px border-radius on every interactive element — buttons, inputs, cards, badges
- Use `#222222` Carbon for all primary CTAs — the only button color in the system
- Keep the typographic scale at two weights (400 body, 700 headings/CTAs)
- Let product photography carry all visual drama — the UI is the frame, not the painting
- Use "Farfetch Basis" with Helvetica Neue fallback for all text
- Invert to `#222222` background only in the footer — one editorial moment
- Apply generous whitespace: 48–72px between content sections
- Use `#f5f5f5` Stone only for utility bars and hover washes

### Avoid

Each prohibition below pairs a recorded value with a reason. The values are recorded; reading each prohibition as protecting an editorial discipline, a luxury signal or a system law is a derived editorial implementation inference from the verified surfaces; it is not Farfetch-authored or a separately published UI specification.

- Add any border-radius — even 2px would break the system's editorial discipline
- Use color accents other than Carbon and Paper for interactive elements
- Apply drop shadows to product tiles or cards — it cheapens the luxury signal
- Use weight 300 or 500 — the system is strictly 400/700
- Mix in decorative or serif typefaces alongside Farfetch Basis
- Add a hover state with a background color fill on nav items (underline or opacity only)
- Use `#222222` backgrounds anywhere except the footer — the page is white by system law
- Introduce gradients — flat monochrome is the aesthetic commitment
- Do not substitute the `"Helvetica Neue", Arial, sans-serif` fallback stack, or any system font, for Farfetch Basis as the brand face.
- Do not present the Farfetch UK homepage record as proof of checkout, account, app or help behavior.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

- **Carbon** (`#222222`): primary brand color. All body text, navigation links, button backgrounds, wordmark and footer background. The only interactive and brand color in the system.
- **Paper** (`#ffffff`): page canvas, card surfaces, product tile backgrounds, and text on Carbon. The entire ecommerce interface is rendered on white.
- **Graphite** (`#727272`): muted helper text, inactive form field borders, secondary metadata. The midpoint of the monochrome ladder.
- **Ash Gray** (`#b6b6b6`): icon strokes, secondary borders, search field underlines, placeholder text.
- **Smoke** (`#e6e6e6`): hairline dividers between navigation items and content sections.
- **Surface / Stone** (`#f5f5f5`): subtle hover wash on nav items, utility announcement bars, background for secondary panels. The palette role names this value Surface; the application rules name the same value Stone.
- **On-Primary** (`#ffffff`): text and icons on Carbon button backgrounds.
- **Error** (`#cc0000`): form validation error states — recorded as "not present on homepage, standard ecommerce convention" rather than as an observation of a live Farfetch form.

The 2026-06-22 color-frequency scan returns `rgb(255,255,255)` as the dominant background and `rgb(34,34,34)` = `#222222` as the dominant foreground across 2200+ instances, with `rgb(182,182,182)` = `#b6b6b6` on icons.

The role names above — Carbon, Paper, Graphite, Ash Gray, Smoke, Stone — and the framing of the neutrals as a monochrome ladder are the reconstruction's naming; no published Farfetch palette document establishes them, so treating the names or the ladder as brand vocabulary is a derived editorial implementation inference from the verified surfaces; it is not Farfetch-authored or a separately published UI specification. The hex values themselves are recorded.

Two statements assign `#f5f5f5` differently at the same place: the palette role calls it a subtle hover wash on nav items, while the application rules forbid a hover background color fill on nav items and allow underline or opacity only. Both are preserved as written, and this contract does not resolve which of the two governs: whether a nav item takes a `#f5f5f5` hover fill is undetermined here, not settled in either direction. Reconciling them — treating one as superseding the other, or as describing different surfaces — is a derived editorial implementation inference from the verified surfaces; it is not Farfetch-authored or a separately published UI specification.

### Spacing

Base unit 8px. Scale: 4px, 8px, 16px, 24px, 48px, 72px, 96px.

| Step | Value |
|---|---:|
| `xs` | 4px |
| `sm` | 8px |
| `md` | 16px |
| `base` | 24px |
| `lg` | 48px |
| `xl` | 72px |
| `section` | 96px |

Product grid uses 24px column gaps; section vertical rhythm runs at 48–72px; nav link padding is 10px 12px.

### Shape

Every radius step in the system is 0px: `sm`, `md`, `lg` and `full` all resolve to 0. All elements — buttons, inputs, badges, cards, navigation, modals — use a hard rectangle without exception. The zero values are recorded; the accompanying rule that even 2px would break the system's editorial discipline is a derived editorial implementation inference from the verified surfaces; it is not Farfetch-authored or a separately published UI specification.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow, no border | All product tiles, page background |
| Hairline (Level 1) | `1px solid #e6e6e6` | Nav separators, section dividers |
| Input underline | `1px solid #b6b6b6` bottom only | Search field — editorial underline treatment |
| Footer inversion | `#222222` background | The single elevation signal — color contrast, not shadow |

The shadow token is `none`, and the inspect records `box-shadow: none` across all elements. Reading that absence as a positive design decision — that a drop shadow would suggest the product tiles need reinforcement, that the noise-free white canvas lets each image function as a gallery print, and that the footer inversion reads as the page arriving at a considered terminus — is a derived editorial implementation inference from the verified surfaces; it is not Farfetch-authored or a separately published UI specification.

### Motion

Four duration tokens and three easing roles are declared:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Checkbox ticks, focus ring appearance, state commits |
| `motion-fast` | 120ms | Nav hover, button hover, input focus |
| `motion-standard` | 200ms | Menu flyout, sheet, dropdown reveal |
| `motion-slow` | 300ms | Page-level transitions, cart drawer slide |

| Easing role | Use |
|---|---|
| `ease-enter` | Arriving — menu flyout, cart drawer, product overlay |
| `ease-exit` | Dismissals |
| `ease-standard` | Two-way transitions |

Motion rules as declared: motion is minimal and purposeful; the navigation flyout reveals at `motion-standard` / `ease-enter`; the cart drawer slides from the right at `motion-slow` / `ease-enter`; there is no fade-in on product tiles, which render instantly, treating load as product arrival rather than content animation; no bounce, no spring, no parallax scrolling. Under `prefers-reduced-motion: reduce`, all transitions collapse to `motion-instant` and the experience remains complete.

The 2026-06-22 inspect records computed static styles, so the durations, easing roles and motion rules above are a derived editorial implementation inference from the verified surfaces; they are not Farfetch-authored or a separately published UI specification. The three exact easing curve values are unresolved and are omitted rather than reproduced. Promoting any curve into this contract requires a per-component computed observation on a live Farfetch surface of all five: transition properties, animation name, duration, easing, and reduced-motion behavior. A single curve confirmed elsewhere does not satisfy that condition.

The declared signature is an absence: product tiles carry no hover animation. The tile stays flat — hover is indicated by the cursor change and the wishlist heart icon appearing, and the tile itself does not scale or lift. Reading that as a guard against the page feeling kinetic while the customer browses contemplatively is a derived editorial implementation inference from the verified surfaces; it is not Farfetch-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Live computed surface-use | The 2026-06-22 computed `body` style on `https://www.farfetch.com/uk/` returns `font-family "Farfetch Basis", "Helvetica Neue", Arial, sans-serif` with `color rgb(34,34,34)` and `font-size 15px`. |
| Cross-surface corroboration | The FARFETCH España style record confirms the same "Farfetch Basis" typeface on a second market storefront. |
| Fallback stack | `"Helvetica Neue", Arial, sans-serif` is the declared fallback. It is a fallback, not the brand face. |
| Unresolved claim | Farfetch Basis is described as proprietary and custom. That description is carried as written; it is not upgraded into a claim about how the face is obtained or where else it loads. |

### Family

- **Primary:** `"Farfetch Basis"`, a custom geometric sans-serif.
- **Fallback:** `"Helvetica Neue"`, Arial, sans-serif.
- No monospace or secondary typeface is declared.
- Do not render the fallback stack as though it were Farfetch Basis, and do not substitute Farfetch Basis for an unrelated unavailable family.

### Type roles

| Role | Token | Font | Size | Weight | Line height | Tracking | Use |
|---|---|---|---:|---:|---:|---:|---|
| Display / H3 | `display-hero` | Farfetch Basis | 30px | 700 | 1.20 | -0.3px | Section hero headlines, h3 newsletter — "Never miss a thing" |
| Section H2 | `section` | Farfetch Basis | 22px | 700 | 1.31 | normal | H2 section headings (Womenswear, Menswear) — "Womenswear", "Menswear", "Kidswear" |
| Sub H2 | — | Farfetch Basis | 15px | 700 | 1.33 | normal | "New In", "Bags", "Shoes" category labels |
| Nav / Body | `nav-primary` | Farfetch Basis | 15px | 400 | 1.33 | normal | Main nav links, body copy, footer links |
| Caption | `caption` | Farfetch Basis | 13px | 400 | 1.33 | normal | Product tile labels, metadata, helper text |
| Button label | `button` | Farfetch Basis | 15px | 700 | 1.33 | normal | Primary CTA button label |

### Type rules

- **Two weights, total.** Weight 400 for everything functional; weight 700 for everything directional (headings, CTAs). No 300, no 500, no 600.
- **No decorative type.** Farfetch Basis is neutral by design — the geometric sans disappears behind the content.
- **Size restraint.** The largest type on the page is 30px. There is no hero headline at 48px or 56px.
- **15px as the system base.** Navigation, body and button labels all share 15px, creating a calm typographic evenness.

The two weights, the 30px ceiling and the shared 15px base are recorded. The readings attached to them — the size ceiling as an editorial convention that lets the photography shout instead of the headline, Farfetch Basis as neutral by design, the shared 15px base as a calm typographic evenness — are a derived editorial implementation inference from the verified surfaces; they are not Farfetch-authored or a separately published UI specification.

### Assets

- **Wordmark:** FARFETCH, set at the center of the three-zone header.
- **Catalog identity icon:** `https://www.google.com/s2/favicons?domain=farfetch.com&sz=128` — a third-party favicon service URL used as the catalog identity image, not a Farfetch-distributed logo asset.
- **Photography:** full-bleed editorial hero images and product tile photography are first-party catalog content. Do not replace them with invented brand-color decoration, and do not add a border, radius or shadow around them. Reading the photography as the element that carries all visual drama is a derived editorial implementation inference from the verified surfaces; it is not Farfetch-authored or a separately published UI specification.
- **Icons:** header utility icons (search, wishlist, account, bag) render in `#222222`; the search icon computes `rgb(182,182,182)` = `#b6b6b6`.

<!-- design-md:section components-states -->
## 4. Components & States

### State contract

Eleven named states are declared. They are preserved verbatim below. The 2026-06-22 inspect records computed static styles, so these treatments are a derived editorial implementation inference from the verified surfaces; they are not Farfetch-authored or a separately published UI specification.

| State | Treatment |
|---|---|
| **Empty (no search results)** | White canvas. Carbon (`#222222`) single sentence at 15px Farfetch Basis: "Sorry, no results found for [term]." One suggestion to refine or browse categories. No illustration — that would signal discount-brand thinking. |
| **Empty (wishlist, nothing saved)** | Graphite (`#727272`) text: "Your wishlist is empty." Path back to browsing categories. Calm, not promotional. |
| **Loading (product grid)** | Skeleton rectangles on `#f5f5f5` Stone at exact final tile dimensions. No animation — flat pulse (consistent with shadow-free, motion-minimal system). |
| **Loading (search results)** | Thin 1px `#b6b6b6` progress underline below the search input. Page stays white. |
| **Error (product unavailable)** | Inline copy below the Add to Bag button: "This item is currently unavailable." No red badge — Carbon text is sufficient. |
| **Error (form validation)** | Field-level: `#cc0000` text below the input, 13px Farfetch Basis. Describes what's required — "Please enter a valid email address." |
| **Success (added to bag)** | Brief inline confirmation near the Add to Bag button: "Added to bag." Carbon text. No toast animation — the bag counter increments. |
| **Success (newsletter signup)** | Button transitions to "You're signed up." message inline. No animation, no confetti. |
| **Skeleton** | `#f5f5f5` blocks at final dimensions. No shimmer — consistent with the flat, shadow-free system. |
| **Disabled** | Opacity 0.4 on Carbon elements. The button text is visible but the Carbon hue fades rather than switching to gray — brand monochrome preserved even in disabled states. |
| **Out of stock size** | Size selector label: Graphite (`#727272`) + 1px diagonal strikethrough line on the size chip. No red — Graphite is the neutral signal. |

Declared interactive components declare applicability by control meaning, not by the completeness of the record. `default` and `focus-visible` apply. Pointer-web hover applies wherever a pointer control exists. `loading`, `error` and `success` are judged against what each control is for: a control that commits an operation can be pending, can fail and can confirm, while a control whose role is to select a destination reports none of those itself. Where a treatment is named above it is carried onto the component that the source names; where a state applies by role and no treatment is named, the state stays applicable and only its visual treatment is omitted. The absence of a recorded treatment is never a `not-applicable` reason. This is not a complete state-coverage claim.

### Primary CTA Button

- Role: Primary CTAs — "Sign Up", "Add to Bag", checkout
- Declared use: `Primary CTA (Sign Up, Add to Bag, Checkout)`
- Primitive: `button` · Kind: interactive
- Anatomy: label on a filled surface
- Background: `#222222` · Text: `#ffffff`
- Radius: 0px · Padding: 10px 16px · Height: 44px
- Font: 15px / 700 / Farfetch Basis
- Shadow: none
- Hover: subtle brightness reduction on the Carbon background (also described as a slight opacity reduction)

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded on the homepage newsletter Sign Up CTA |
| hover | applicable | Pointer-web button; subtle brightness reduction on the Carbon background |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Button control; opacity 0.4 on Carbon elements, the hue fading rather than switching to gray |
| loading | applicable | Button control; visual treatment omitted |
| error | applicable | Product-unavailable copy renders inline below the Add to Bag button |
| success | applicable | Newsletter signup transitions the button to an inline confirmation message |

### Outline / Secondary Button

- Role: Secondary actions, ghost variant on white canvas
- Primitive: `button` · Kind: interactive
- Background: `#ffffff` · Text: `#222222` · Border: `1px solid #222222`
- Radius: 0px · Padding: 10px 16px
- Font: 15px / 700 / Farfetch Basis

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared secondary button variant |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Button control; visual treatment omitted |
| loading | applicable | Recorded role is "Secondary actions" — an action trigger the user waits on, so a pending state has meaning here; visual treatment omitted |
| error | applicable | Same action role — a committed action can fail, so a failure state has meaning for this control; visual treatment omitted |
| success | applicable | Same action role — a committed action can complete, so a confirmation state has meaning for this control; visual treatment omitted |

### Product Tile

- Role: Full-bleed fashion photography tile — no border, no shadow, caption below at 13px / 400
- Declared use: `Product tile — full-bleed image, 0 radius, 0 shadow, caption below at 13px`
- Primitive: `card`
- Anatomy: full-bleed fashion photography image; brand name above at 13px / 700; caption below at 13px / 400 / `#222222`
- Background: `#ffffff` · Text: `#222222`
- Radius: 0px · No border, no shadow, zero padding — the image bleeds to the tile edge
- The tile carries no hover animation; hover is indicated by the cursor change and the wishlist heart icon appearing.

The `card` primitive is verified and no interactive control role is established for the tile itself, so no kind or state-applicability map is declared here rather than confirming one.

### Section Container

- Role: Announcement bar, utility header strip, hover wash
- Background: `#f5f5f5` · Radius: 0px
- Kind: non-interactive — a background surface strip carrying a fill and no control role.

### Email Newsletter Input

- Role: Newsletter signup input — no visible border, relies on surrounding layout
- Declared use: `Newsletter email input — no border, underline-only on search`
- Primitive: `input` · Kind: interactive
- Background: `#ffffff` · Text: `#222222` · Placeholder: `#b6b6b6`
- Border: 0px (none) · Radius: 0px · Padding: 0px 0px 0px 16px · Height: 42px
- Font: 15px / 400 / Farfetch Basis

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded on the homepage newsletter section |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Input control; visual treatment omitted |
| loading | applicable | Input control; visual treatment omitted |
| error | applicable | Field-level `#cc0000` text below the input at 13px Farfetch Basis, describing what is required |
| success | applicable | Form field; the adjacent button carries the confirmation message |

### Search Field

- Role: Search bar — editorial underline-only treatment
- Kind: interactive
- Background: transparent · Text: `#222222`
- Border: 0px, underline-only — `1px solid #b6b6b6` at the bottom · Radius: 0px
- Font: 15px / 400 / Farfetch Basis

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared header search control |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Input control; visual treatment omitted |
| loading | applicable | A thin 1px `#b6b6b6` progress underline renders below the input; the page stays white |
| error | applicable | Form field; visual treatment omitted |
| success | applicable | Form field; visual treatment omitted |

### Top Navigation Tab

- Role: Primary nav tabs — Womenswear / Menswear / Kidswear
- Declared use: `Top nav: Womenswear / Menswear / Kidswear`
- Primitive: `tab` · Kind: interactive
- Background: `#ffffff` · Text: `#222222`
- Font: 15px / 400 / Farfetch Basis · Height: 44px · Padding: 10px 12px
- Border: `1px solid transparent`
- Active variant: `text #222222`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded on the homepage header nav |
| hover | applicable | Border resolves to `#e6e6e6`; a background color fill is forbidden, underline or opacity only |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Interactive control; visual treatment omitted |
| loading | not-applicable | The tab's role is destination selection between Womenswear / Menswear / Kidswear; it commits no operation of its own, so it has no work of its own to report as pending |
| error | not-applicable | Same destination role; a category that fails to open is reported by the destination view, not by the tab that selected it |
| success | not-applicable | Same destination role; arriving at the category is the outcome itself, so the tab has no separate completion to confirm |

### Footer Link

- Role: Footer navigation — "Contact us", "FAQs", "About us", inverted monochrome
- Declared use: `Footer nav links on #222222 dark background`
- Primitive: `listItem` · Kind: interactive
- Text: `#ffffff` on the `#222222` footer background
- Font: 15px / 400 / Farfetch Basis · Padding: 6px 0px per link · Height: 34px
- Use: "Contact us", "FAQs", "About us", "Careers", "FARFETCH app", "Orders and delivery", "Returns and refunds", "Help"

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded in the homepage footer inspect |
| hover | applicable | Pointer-web link; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Interactive control; visual treatment omitted |
| loading | not-applicable | The link's role is footer navigation to "Contact us", "FAQs", "About us"; it selects a destination and runs no operation that could be pending |
| error | not-applicable | Same link role; a destination that fails to open reports that on the destination, not on the footer link |
| success | not-applicable | Same link role; the destination opening is the outcome itself, so the link has no completion state of its own |

### Sale / Promotion Label

- Role: "SALE", "NEW IN" label on product tiles
- Declared use: `Sale label, promotion badge on product tile`
- Primitive: `badge`
- Background: `#222222` · Text: `#ffffff` · Radius: 0px
- Font: 13px / 700 / Farfetch Basis
- Kind: non-interactive — a label rendered onto the tile, with no control role declared.

### Graphite Utility Badge

- Role: Filter pill, utility label
- Background: `#f5f5f5` · Text: `#222222` · Radius: 0px
- Font: 13px / 400 / Farfetch Basis
- The two declared uses carry different control implications — a filter pill acts, a utility label does not — and neither is established as an interactive role, so no kind or state-applicability map is declared here.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The recorded platform is web. The FARFETCH app is named as a footer destination and carries no values in this contract.

### Grid and container

- Max content width: approximately 1280px.
- Homepage: full-bleed editorial hero images spanning the viewport.
- Product grid: 4-column on desktop, product tiles with 0 padding and 0 gutters in the image, 24px column gaps.
- Three-zone header: a white 64px bar — left nav (Womenswear / Menswear / Kidswear) at 15px / 400 with 10px 12px padding in `#222222`, center FARFETCH wordmark, right utilities (search, wishlist, account, bag) as `#222222` icons.
- Footer: multi-column link grid on the Carbon background — Company (About us, Careers, FARFETCH app) | Customer Service (Contact us, FAQs, Orders and delivery) | Help.
- Announcement bar: a thin `#f5f5f5` strip at the top for promotions — "SS26 sale: up to 60% off".
- Section rhythm: generous 48–72px vertical gaps between content bands.

### Whitespace

Product images bleed to the tile edge with no padding, no border and no radius. Reading the large fashion images as the system's whitespace — that the luxury signal comes from giving photography room to breathe rather than from decorative layout margin — is a derived editorial implementation inference from the verified surfaces; it is not Farfetch-authored or a separately published UI specification.

### Breakpoints

| Name | Width | Key changes |
|---|---|---|
| Mobile | <640px | Single column product grid, hamburger nav, stacked footer |
| Tablet | 640-1024px | 2-column grid, condensed nav |
| Desktop | 1024-1280px | 3-column grid, full three-zone header |
| Large Desktop | >1280px | 4-column grid, centered at 1280px max-width |

### Touch targets

- Nav links: 44px height with 10px 12px padding — comfortably tappable
- Primary button: 44px height
- Footer links: 34px height with 6px vertical padding

### Reflow and overflow

- Header: three-zone → hamburger icon + wordmark + bag icon
- Product grid: 4-column → 2-column → 1-column
- Footer: multi-column link grid → stacked single-column accordion
- Section headings maintain 22px weight 700 at all breakpoints
- Product images maintain full-bleed treatment at all sizes; zero radius and zero shadow are preserved across breakpoints; hero editorial images scale proportionally

The 2026-06-22 inspect measures one rendered page, so the breakpoint table, the collapsing sequence and the cross-breakpoint image behavior above are a derived editorial implementation inference from the verified surfaces; they are not Farfetch-authored or a separately published UI specification. The 64px header bar, 44px nav and button heights, 42px email input height and 34px footer link height are the measured values.

<!-- design-md:section content-locales -->
## 6. Content & Locales

### Voice

Section labels are noun-only — "Womenswear", "New In", "Bags" — not "Discover" or "Explore", just the category name. Promotional copy is specific and factual: "SS26 sale: up to 60% off womenswear, menswear and kidswear" — percentage and scope, no exclamation mark. The newsletter invitation is "Never miss a thing". Reading that register as understated, authoritative and global — the tone of a gallery curator who speaks in complete sentences and never hype, presenting the collection's presence as self-evident — is a derived editorial implementation inference from the verified surfaces; it is not Farfetch-authored or a separately published UI specification.

| Context | Tone |
|---|---|
| Category nav | Noun-only. "Womenswear." "Menswear." "Kidswear." Self-evident. |
| Promotions | Factual, specific. "Up to 60% off." Never "MASSIVE SALE!!!" |
| Newsletter CTA | Warm but direct. "Never miss a thing." Sign Up (no persuasion needed). |
| Product labels | Descriptive and brand-led. "PRADA" "Saint Laurent" — the brand name is the editorial statement. |
| Footer help links | Plain, clear. "Contact us", "Orders and delivery", "Returns and refunds". |
| About / careers | Elevated, mission-framed. Farfetch as the "global destination for modern luxury". |

### Verbatim copy

Recorded live on 2026-06-22 and carried byte-for-byte. The strings are recorded; the characterisation appended to each is a derived editorial implementation inference from the verified surfaces; it is not Farfetch-authored or a separately published UI specification.

- "FARFETCH UK | The Global Destination for Modern Luxury" — document title, mission statement
- "SS26 sale: up to 60% off womenswear, menswear and kidswear" — promotional headline, specific and factual
- "Never miss a thing" — newsletter section heading
- "Designer Clothing for Women | Shop Online | FARFETCH" — product-listing-page title, descriptive and category-led

Other published labels carried here: "Womenswear", "Menswear", "Kidswear", "New In", "Bags", "Shoes", "Sign Up", "Add to Bag", "SALE", "NEW IN", "Contact us", "FAQs", "About us", "Careers", "FARFETCH app", "Orders and delivery", "Returns and refunds", "Help", "Company", "Customer Service". Preserve capitalisation exactly — "SALE" and "NEW IN" are set as tile labels in caps while "SS26 sale: up to 60% off" is not.

### Forbidden register

Urgency-panic ("Only 2 left!"), casual hype ("Amazing styles!"), emoji anywhere, exclamation marks on non-sale copy, and first person ("We love these pieces!").

### Locales

The recorded surface is the UK English storefront at `https://www.farfetch.com/uk/`. The cross-check surface is FARFETCH España, which confirms the same Carbon / Paper palette, 0px radius, footer inversion and Farfetch Basis typeface on a second market storefront. Extending that agreement into a claim that the palette and type contract holds across market storefronts generally is a derived editorial implementation inference from the verified surfaces; it is not Farfetch-authored or a separately published UI specification. Market-specific copy is outside this record. The platform serves 190+ countries and the typeface is nationality-neutral by design; noun-only category labels are intended to function in any language, without idiom or slang.

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

- the exact easing curve values behind `ease-enter`, `ease-exit` and `ease-standard`
- an observed form-validation error treatment on a live Farfetch surface, since `#cc0000` is declared as an ecommerce convention rather than a homepage observation
