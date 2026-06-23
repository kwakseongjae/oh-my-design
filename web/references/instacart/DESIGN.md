---
id: instacart
name: Instacart
country: US
category: ecommerce
homepage: "https://www.instacart.com"
primary_color: "#108910"
logo:
  type: simpleicons
  slug: instacart
verified: "2026-06-22"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-22"
  note: "primary = live CTA/add-to-cart green (#108910 = rgb(16,137,16)); dark Kale green (#003D29) as brand dark surface; forest green (#1E6F30) for Instacart+ banners. Custom Instacart Sans font throughout."
  colors:
    primary: "#108910"
    primary-dark: "#003D29"
    primary-forest: "#1E6F30"
    on-primary: "#ffffff"
    ink: "#242529"
    ink-secondary: "#343538"
    canvas: "#ffffff"
    surface: "#F6F7F8"
    surface-alt: "#E8E9EB"
    hairline: "#C7C8CD"
    on-dark: "#ffffff"
  typography:
    family: { sans: "Instacart Sans", fallback: "Instacart Sans Fallback, Arial, sans-serif" }
    display-hero: { size: 26, weight: 600, lineHeight: 1.25, use: "Hero headline (viewport-width responsive)" }
    section:      { size: 24, weight: 700, lineHeight: 1.17, use: "Section headings" }
    body:         { size: 16, weight: 400, lineHeight: 1.50, use: "Standard body text" }
    body-sm:      { size: 14, weight: 400, lineHeight: 1.43, use: "Secondary body, card labels" }
    button:       { size: 16, weight: 400, lineHeight: 1.00, use: "Nav and hero CTA labels" }
    button-sm:    { size: 14, weight: 600, lineHeight: 1.00, use: "Store-page CTAs, filter chips" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 20, xl: 24, xxl: 32, section: 48 }
  rounded: { sm: 4, md: 8, lg: 20, pill: 28, full: 999 }
  shadow:
    card: "rgba(52, 53, 56, 0.24) 0px 2px 4px 0px inset"
    input: "rgba(0, 0, 0, 0.05) 0px 2px 4px 0px inset"
  components:
    button-primary: { type: button, bg: "#108910", fg: "#ffffff", radius: "28px", padding: "0px 16px", height: "56px", font: "16px / 400 Instacart Sans", use: "Hero CTA — Sign up, get $0 delivery fee" }
    button-nav: { type: button, bg: "#108910", fg: "#ffffff", radius: "20px", padding: "0px 16px", height: "40px", font: "16px / 400 Instacart Sans", use: "Nav Sign up button" }
    button-secondary: { type: button, bg: "#ffffff", fg: "#242529", border: "1px solid #C7C8CD", radius: "20px", padding: "0px 16px", height: "40px", font: "16px / 400 Instacart Sans", use: "Nav Log in button" }
    button-add: { type: button, bg: "#108910", fg: "#ffffff", radius: "20px", height: "36px", font: "16px / 400 Instacart Sans", use: "Add to cart button on product cards" }
    button-dark: { type: button, bg: "#108910", fg: "#ffffff", radius: "24px", padding: "8px 16px", height: "48px", font: "14px / 600 Instacart Sans", use: "Store storefront Log in CTA" }
    filter-chip-active: { type: badge, bg: "#242529", fg: "#ffffff", radius: "999px", padding: "0px 16px", height: "32px", font: "14px / 600 Instacart Sans", use: "Active filter pill (All, selected state)" }
    filter-chip: { type: badge, bg: "#E8E9EB", fg: "#242529", radius: "999px", padding: "0px 16px", height: "32px", font: "14px / 600 Instacart Sans", use: "Inactive filter pill (EBT, Fastest, Grocery)" }
    search-input: { type: input, bg: "#ffffff", fg: "#343538", border: "1px solid #C7C8CD", radius: "28px", padding: "0px 48px 0px 0px", height: "56px", font: "15px / 400 Instacart Sans", use: "Main search input on homepage" }
    store-tab: { type: tab, fg: "#343538", radius: "20px", font: "16px / 400 Instacart Sans", active: "text #343538 + 2px border #343538", use: "Delivery/Pickup tab selector on store pages" }
    card-surface: { type: card, bg: "#F6F7F8", radius: "8px", use: "Light grey surface card for store listings and content blocks" }
  components_harvested: true
---

# Design System Inspiration of Instacart

## 1. Visual Theme & Atmosphere

Instacart's product UI is defined by a confident, utilitarian clarity: a white canvas (`#ffffff`) with a soft cool-grey surface (`#F6F7F8`) for secondary zones, and a single saturated green (`#108910`) that functions as both brand signal and primary action color. The palette descends from the company's 2022 rebrand — away from carrot orange toward a grocers' green that feels simultaneously digital-native and earthy. Every interactive element (nav CTA, hero button, add-to-cart) shares the same green, creating an unmistakable "do-this" signal trained by repetition across millions of weekly users.

The custom **Instacart Sans** family runs throughout the entire product surface, from the homepage hero to store storefronts. It is a geometric, clean sans-serif with a rounded aperture that reads friendly at all sizes — weight 400 for most body and button text, weight 600 for filter chips and store-page CTAs where density demands slightly more punch. Headlines step up to weight 700 for section titles. The overall type feel is approachable and confident: the font has personality without being whimsical, appropriate for a service that handles financial transactions around food.

Geometry is rounded-but-restrained. Buttons in the navigation are `20px` radius pills; the hero CTA scales up to `28px`. Filter chips are full-pill at `999px`. Add-to-cart buttons sit at `20px`. Cards use a modest `8px`. This graduated rounding system — from gentle card rounding through nav pills to full filter chips — creates a visual hierarchy of "how interactive is this element" through shape alone.

**Key Characteristics:**
- Instacart Sans custom font throughout — geometric, friendly, weight 400 default
- Single green (`#108910`) for all primary CTAs — add-to-cart, sign-up, log-in
- Dark Kale green (`#003D29`) for brand immersion surfaces (banners, hero overlays)
- Forest green (`#1E6F30`) for Instacart+ promotional surfaces
- Cool-grey surface (`#F6F7F8`) and neutral chips (`#E8E9EB`) for hierarchy without shadows
- Graduated pill geometry: 20px nav buttons → 28px hero CTA → 999px filter chips
- No drop shadows on most surfaces; inset shadow on search input for depth cue
- Near-black ink (`#242529`) for text instead of pure black

## 2. Color Palette & Roles

### Primary
- **Instacart Green** (`#108910`): Primary brand and CTA color — all buttons (Sign up, Log in CTA, Add to cart), active states, and link highlights. The system's single action color, trained into user muscle-memory through grocery frequency.
- **Kale Dark Green** (`#003D29`): Deep brand-dark surface for hero overlays, Instacart+ promotional banners, and immersive brand moments. Named "Kale" in Instacart's brand vocabulary.
- **Forest Green** (`#1E6F30`): Mid-range green for Instacart+ feature banners and secondary promotional surfaces.

### Canvas & Surface
- **Canvas White** (`#ffffff`): Page background, card surfaces, button text on green backgrounds.
- **Surface Grey** (`#F6F7F8`): Cool-grey surface for secondary sections, list containers, and neutral backgrounds.
- **Chip Grey** (`#E8E9EB`): Inactive filter chips, carousel navigation buttons, secondary interactive surfaces.

### Text
- **Ink Near-Black** (`#242529`): Primary heading and label text — slightly warm, not pure black.
- **Ink Secondary** (`#343538`): Body text, nav links, secondary labels.
- **Hairline** (`#C7C8CD`): Border for inputs, card outlines, and dividers.

## 3. Typography Rules

### Font Family
- **Primary**: `Instacart Sans` — a custom geometric sans-serif with `Instacart Sans Fallback, Arial, sans-serif` fallback stack.
- **No secondary typeface**: Instacart Sans handles all text including display, body, UI, and labels. There is no monospace or secondary family.

### Hierarchy

| Role | Size | Weight | Line Height | Notes |
|------|------|--------|-------------|-------|
| Display Hero | 26px | 600 | 1.25 | Homepage hero H1 — "Order groceries for delivery or pickup" |
| Section Heading | 24px | 700 | 1.17 | Section H2s — "Stores to help you save" |
| Body | 16px | 400 | 1.50 | Standard reading text |
| Button / Nav | 16px | 400 | 1.00 | Nav CTAs, hero button labels |
| Body Small | 14px | 400 | 1.43 | Card labels, secondary content |
| UI Dense | 14px | 600 | 1.00 | Filter chips, store-page CTAs |
| Search Input | 15px | 400 | 1.00 | Search placeholder and input text |

### Principles
- **Weight 400 as the default**: Unlike many design systems that default to 500 or 600 for UI text, Instacart Sans 400 reads cleanly enough at all interactive sizes to carry buttons and nav items.
- **600 for dense UI only**: Store-page CTAs and filter chips step up to 600 where the information density requires more visual mass.
- **Single family**: Using only Instacart Sans creates a monolithic, brand-owned typographic voice — every screen feels like one coherent product.

## 4. Component Stylings

### Buttons

**Hero Primary CTA**
- Background: `#108910`
- Text: `#ffffff`
- Radius: 28px
- Padding: 0px 16px
- Height: 56px
- Font: 16px Instacart Sans weight 400
- Use: Homepage hero CTA ("Sign up to get $0 delivery fee")

**Nav Sign Up**
- Background: `#108910`
- Text: `#ffffff`
- Radius: 20px
- Padding: 0px 16px
- Height: 40px
- Font: 16px Instacart Sans weight 400
- Use: Navigation bar primary CTA

**Nav Log In (Secondary)**
- Background: `#ffffff`
- Text: `#242529`
- Border: 1px solid `#C7C8CD`
- Radius: 20px
- Padding: 0px 16px
- Height: 40px
- Font: 16px Instacart Sans weight 400
- Use: Navigation bar secondary CTA

**Add to Cart**
- Background: `#108910`
- Text: `#ffffff`
- Radius: 20px
- Height: 36px
- Font: 16px Instacart Sans weight 400
- Use: Product card add-to-cart action on store pages

**Store Log In / Large CTA**
- Background: `#108910`
- Text: `#ffffff`
- Radius: 24px
- Padding: 8px 16px
- Height: 48px
- Font: 14px Instacart Sans weight 600
- Use: Storefront Log In button, larger secondary store CTAs

### Inputs

**Search**
- Background: `#ffffff`
- Border: 1px solid `#C7C8CD`
- Radius: 28px
- Padding: 0px 48px 0px 0px
- Height: 56px
- Text: `#343538`
- Font: 15px Instacart Sans weight 400
- Shadow: `rgba(0, 0, 0, 0.05) 0px 2px 4px 0px inset`
- Use: Main homepage and store search input

**Search (Store Storefront)**
- Border: none
- Radius: 28px (homepage) / 8px (storefront context)
- Padding: 12px 48px 12px 24px
- Height: 52–54px
- Text: `#343538`
- Font: 14px Instacart Sans weight 600
- Use: Grocery storefront search

### Cards & Containers

**Surface Card**
- Background: `#F6F7F8`
- Radius: 8px
- Use: Store listing cards, content containers, product grid blocks

### Badges

**Filter Chip Active**
- Background: `#242529`
- Text: `#ffffff`
- Radius: 999px
- Padding: 0px 16px
- Height: 32px
- Font: 14px Instacart Sans weight 600
- Use: Selected filter pill ("All")

**Filter Chip Inactive**
- Background: `#E8E9EB`
- Text: `#242529`
- Radius: 999px
- Padding: 0px 16px
- Height: 32px
- Font: 14px Instacart Sans weight 600
- Use: Unselected filter pills ("EBT", "Fastest", "Offers", "Grocery")

### Tabs

**Delivery / Pickup**
- Background (active): `#ffffff`
- Text (active): `#343538`
- Border (active): 2px solid `#343538`
- Radius: 20px
- Height: 40px
- Font: 16px Instacart Sans weight 400
- Text (inactive): `#C7C8CD`
- Use: Delivery/Pickup mode selector on store storefront pages

---

**Verified:** 2026-06-22
**Tier 1 sources:** https://www.instacart.com/ · https://www.instacart.com/store/kroger/storefront
**Tier 2 sources:** getdesign.md/instacart — not found (no entry); styles.refero.design?q=instacart — no results for Instacart
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 48px
- Notable: Chip horizontal padding lands consistently at 16px across all filter chips and nav buttons; the hero CTA uses 16px horizontal padding at 56px height

### Grid & Container
- Centered single-column hero with a full-width search bar anchoring the user journey
- Store selector section: horizontal scrolling card row with `#F6F7F8` cards
- Filter chips: horizontal scrolling pill row beneath the store section
- Store pages: horizontal sub-navigation tabs (Shop, Flyers, Recipes, My Lists)
- Product grid: 4–6 column on desktop, responsive collapse to 2 on mobile

### Whitespace Philosophy
- **Utilitarian density**: Unlike pure-marketing SaaS sites, Instacart's product surface needs to present many stores, categories, and products efficiently. Whitespace is functional — enough breathing room to tap accurately, not decorative.
- **Grey surface as separator**: `#F6F7F8` surfaces group content blocks without borders or shadows; this creates visual rhythm without visual weight.
- **Full-width hero**: The hero search bar is the product's primary UI — full-width at all viewports, always above the fold.

### Border Radius Scale
- Small (4px): Tight elements
- Medium (8px): Cards, content containers — the workhorse
- Large (20px): Nav buttons, add-to-cart buttons, Delivery/Pickup tabs
- Hero CTA (28px): The largest pill for the hero CTA
- Chip (999px): Full pill for filter chips and badges

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, most cards and surfaces |
| Input Inset | `rgba(0,0,0,0.05) 0px 2px 4px inset` | Search input depth cue |
| Dark Surface | `#003D29` background | Brand-dark banners, Kale immersive sections |

**Shadow Philosophy**: Instacart's UI is largely shadow-free on product surfaces. The only pronounced shadow is an inset shadow on the search input, reinforcing the "trough" affordance of a text field. Cards and tiles rely on `#F6F7F8` background shifts for grouping rather than elevation. This keeps the product feeling clean, fast, and mobile-native — appropriate for a high-frequency consumer grocery product.

## 7. Do's and Don'ts

### Do
- Use `#108910` green for every primary action — add-to-cart, sign-up, log-in, key CTAs
- Use Instacart Sans at weight 400 for most text; reserve 600 for dense UI contexts
- Use `#F6F7F8` surface grey to group content sections without adding shadows
- Apply graduated pill geometry: 8px for cards → 20px for buttons → 999px for chips
- Use `#242529` near-black for headings and labels — never pure `#000000`
- Use `#003D29` (Kale) only for brand-dark immersive moments or Instacart+ banners
- Keep the search bar prominent and always accessible — it is the product's primary CTA

### Don't
- Use drop shadows on product cards — the system relies on background tint, not elevation
- Spread the green across decorative elements — it signals "actionable" exclusively
- Mix in a second accent color for interactive elements — the green system is the brand
- Use sharp corners on interactive elements — everything interactive uses at minimum 8px radius
- Use heavy weights (700+) on body text — weight 700 is reserved for section headings only
- Use a font other than Instacart Sans — it is the complete typographic system

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Hero text compresses, search bar full width, cards stack vertically |
| Tablet | 640-1024px | 2-column store cards, moderate nav padding |
| Desktop | 1024-1440px | Full layout, horizontal store carousel, filter chip row |

### Touch Targets
- Nav buttons: 40px height with 16px horizontal padding
- Hero CTA: 56px height — large, tappable
- Add to cart: 36px height on product cards
- Filter chips: 32px height — minimum comfortable tap target
- Search input: 56px height — generous touch target for the primary action

### Collapsing Strategy
- Hero: Full-width search persists at all viewports; headline text size scales down
- Store carousel: horizontal scroll on mobile, grid on desktop
- Filter chips: horizontal scroll row on mobile
- Store navigation tabs: compress to icon-only or compact labels on small screens

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary action: Instacart Green (`#108910`)
- Brand dark: Kale Dark Green (`#003D29`)
- Background: Canvas White (`#ffffff`)
- Secondary surface: Surface Grey (`#F6F7F8`)
- Chip/neutral: Chip Grey (`#E8E9EB`)
- Primary text: Ink Near-Black (`#242529`)
- Secondary text: Ink Secondary (`#343538`)
- Border/hairline: `#C7C8CD`

### Example Component Prompts
- "Create a hero section: white background. Search bar full-width at 56px height, 28px radius, 1px solid #C7C8CD border, Instacart Sans 15px. Below the search: one green CTA button (#108910, white text, 28px radius, 56px height, 16px / 400 Instacart Sans, 16px horizontal padding)."
- "Design a store filter row: horizontal scrolling pills. Active pill: #242529 bg, white text, 999px radius, 32px height, 0 16px padding, 14px / 600. Inactive: #E8E9EB bg, #242529 text, same geometry."
- "Build a nav header: white background, Instacart Sans throughout. Log In button: white bg, #C7C8CD 1px border, 20px radius, 40px height, 16px / 400. Sign Up: #108910 bg, white text, same geometry."
- "Product card: #F6F7F8 background, 8px radius, no shadow. Add button: #108910 bg, white text, 20px radius, 36px height, 16px Instacart Sans."

### Iteration Guide
1. Instacart Sans weight 400 is the default — step up to 600 only for filter chips and store-page dense UI
2. Primary action = `#108910` green — every button that does something uses this color
3. Surfaces separate with `#F6F7F8` background — no shadows needed
4. Pill geometry scale: 8px cards → 20px buttons → 28px hero CTA → 999px chips
5. Near-black `#242529` for text, not pure black
6. Reserve `#003D29` Kale only for brand-dark immersive sections

---

## 10. Voice & Tone

Instacart's voice is **practical, friendly, and time-conscious** — a service that respects how busy its users are. Copy is brief, benefit-forward, and uses informal contractions where they read naturally. The hero headline "Order groceries for delivery or pickup today" is prototypically Instacart: one verb, the core value proposition, no superlatives. CTAs are action-direct ("Sign up to get $0 delivery fee", "Add") without exclamation points or emoji. The tone is that of a helpful neighbor, not a corporate entity.

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

**Forbidden register:** Hype-driven superlatives ("the best grocery app ever"), scare tactics around food scarcity, financial urgency dark patterns, corporate jargon.

## 11. Brand Narrative

Instacart was founded in **2012** by **Apoorva Mehta** in San Francisco, after a series of failed startup ideas. The founding insight was deceptively simple: the friction between wanting groceries and physically going to a store was a solvable logistics problem. Mehta famously applied to Y Combinator with the idea and was rejected — then re-applied with a working prototype and was accepted, eventually raising seed funding from Sequoia Capital.

The company scaled by partnering with existing grocery retailers (Costco, Kroger, Safeway, Whole Foods) rather than displacing them — a model that made it the infrastructure for grocery e-commerce rather than a competitor. This "empowering retailers" positioning shaped everything: the product is a white-label layer for grocery chains, not a Instacart-branded storefront. The brand's design role is to be trustworthy and invisible enough that shoppers feel they are shopping "at Kroger" or "at Costco" through a convenient interface.

The 2022 rebrand introduced the current green palette and "Instacart Plak" typeface family (predecessor to today's Instacart Sans), reflecting a maturation from a gig-economy delivery startup into an established consumer grocery platform. The brand moved away from carrot orange — the original brand mark — toward a green that evokes fresh produce, sustainability, and digital modernity simultaneously. In 2023, Instacart went public on the NASDAQ under the ticker CART.

What Instacart refuses: pretending to be a grocery retailer itself (the product is always "Shop at [Retailer]"). What it embraces: speed transparency (delivery windows shown immediately), savings messaging (deals, offers, EBT acceptance), and a green-first visual identity that codes trustworthiness.

## 12. Principles

1. **Speed is the product.** Every screen communicates delivery time before the user has to ask. *UI implication:* delivery ETAs surface in store cards immediately, not buried in checkout.
2. **The retailer's identity, amplified.** Instacart is infrastructure, not a brand competing with its partners. *UI implication:* store logos and branding take visual prominence; Instacart's green is an accent, not an override.
3. **One color, one meaning.** `#108910` green means "this action does something." *UI implication:* never use the green for decorative purposes — it trains behavioral association.
4. **Grocery frequency builds habit.** Users shop 1–2× per week; patterns must be predictable and fast. *UI implication:* consistent component placement and familiar pill geometry reduce cognitive load on each visit.
5. **Access for all.** EBT acceptance and accessibility features are not footnotes — they are featured in the filter chip row at the same level as "Fastest" and "Grocery." *UI implication:* include EBT filter prominently; don't relegate accessibility features to sub-menus.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Instacart user segments (busy professionals, parents, elderly or mobility-limited shoppers), not individual people.*

**Maria Chen, 38, Chicago.** Working parent of two who does a grocery order every Thursday evening. Values the delivery-time transparency — she chooses the store based on what can arrive before dinner, not brand loyalty. Rarely uses the search bar for discovery; her weekly cart is mostly repeat items. Notices and appreciates the EBT filter row as a sign that the service is designed for everyone.

**James Osei, 54, Phoenix.** Recent hip replacement recipient using Instacart as a primary grocery channel during recovery. Relies on large-text legibility and clear add-to-cart buttons. Trusts the service because it mirrors the stores he already knows — Kroger through Instacart feels the same as Kroger in-person to him. Would be disoriented by a redesign that hid the retailer identity.

**Priya Nair, 28, New York.** Urban professional who uses Instacart for last-minute ingredient runs for weekend cooking. Values speed (30-minute delivery from the local store) over price. Uses the "Fastest" filter chip every session. Is an Instacart+ subscriber specifically for the $0 delivery fee on smaller orders.

## 14. States

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

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, chip press, add-to-cart button response |
| `motion-standard` | 200ms | Card reveal, dropdown, sheet open |
| `motion-slow` | 320ms | Page-level transitions, modal enter |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — modals, sheets, dropdowns |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Instacart motion should be functional and transparent — a consumer grocery app where users are often on a time budget. The Add to cart button responds with a micro-scale and a count increment at `motion-fast`; product carousels scroll smoothly at `motion-standard`. No spring, no bounce — grocery shopping is a task, not a delight experience. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the product remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-22) via playwright getComputedStyle on:
- https://www.instacart.com/ — homepage hero, nav, search, filter chips, store cards
- https://www.instacart.com/store/kroger/storefront — storefront nav, add-to-cart, store tabs

Token-level claims (§1-9) are sourced from this live inspection.

Voice samples (§10) are verbatim from the live homepage as of 2026-06-22.

Brand narrative (§11): Instacart founded 2012 by Apoorva Mehta; Y Combinator W12;
NASDAQ IPO (CART) 2023. These are widely documented public facts.

Personas (§13) are fictional archetypes informed by publicly observable Instacart user
segments. Names are illustrative; they do not refer to real people.

Tier 2: getdesign.md/instacart — no entry found. styles.refero.design?q=instacart — no
results for Instacart. Both confirmed via tool calls 2026-06-22.
-->
