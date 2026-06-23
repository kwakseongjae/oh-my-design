---
id: deliveroo
name: Deliveroo
country: UK
category: consumer-tech
homepage: "https://deliveroo.co.uk"
primary_color: "#00CCBC"
logo:
  type: simpleicons
  slug: deliveroo
verified: "2026-06-22"
omd: "0.1"
tokens:
  source: reconciled
  extracted: "2026-06-22"
  note: "primary = brand teal (#00CCBC) confirmed via SimpleIcons official hex + multiple brand sources + Medium DS article. Dark mode canvas #121212. Seaweed-named action color in PDS 2.0. Stratos (customised Production Type) for headlines."
  colors:
    primary: "#00CCBC"
    primary-hover: "#00A99C"
    primary-deep: "#003733"
    brand: "#00CCBC"
    canvas: "#ffffff"
    canvas-dark: "#121212"
    heading: "#1a1a1a"
    body: "#4a4a4a"
    muted: "#767676"
    on-primary: "#003733"
    promo: "#FFC100"
    promo-text: "#1a1a1a"
    error: "#DF1619"
    surface: "#f5f5f5"
    hairline: "#e0e0e0"
  typography:
    family: { display: "Stratos", body: "system-ui, -apple-system, sans-serif" }
    display-hero: { size: 48, weight: 700, lineHeight: 1.10, tracking: -0.5, use: "Hero headlines, Stratos Bold, 6° angled" }
    display-lg:   { size: 36, weight: 700, lineHeight: 1.15, tracking: -0.3, use: "Section headlines" }
    section:      { size: 24, weight: 600, lineHeight: 1.20, use: "Sub-section heads, card titles" }
    body-lg:      { size: 18, weight: 400, lineHeight: 1.50, use: "Feature descriptions" }
    body:         { size: 16, weight: 400, lineHeight: 1.50, use: "Standard reading text" }
    button:       { size: 16, weight: 600, lineHeight: 1.00, use: "CTA button label" }
    caption:      { size: 14, weight: 400, use: "Metadata, captions, secondary labels" }
    small:        { size: 12, weight: 400, use: "Tags, badges, fine print" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 4, md: 8, lg: 16, full: 9999 }
  shadow:
    card: "0px 2px 8px rgba(0,0,0,0.10)"
    elevated: "0px 4px 16px rgba(0,0,0,0.14)"
  components:
    button-primary: { type: button, bg: "#00CCBC", fg: "#003733", radius: "9999px", padding: "14px 24px", font: "16px / 600", states: "hover #00A99C", use: "Primary CTA — Order now, Add to basket" }
    button-secondary: { type: button, bg: "#ffffff", fg: "#1a1a1a", radius: "9999px", border: "1.5px solid #e0e0e0", padding: "14px 24px", font: "16px / 600", use: "Secondary action, ghost variant" }
    button-promo: { type: button, bg: "#FFC100", fg: "#1a1a1a", radius: "9999px", padding: "14px 24px", font: "16px / 600", use: "Promotional offers and deals CTA" }
    input-search: { type: input, bg: "#f5f5f5", border: "1.5px solid #e0e0e0", radius: "9999px", padding: "12px 16px", font: "16px / 400", use: "Address / restaurant search input" }
    restaurant-card: { type: card, bg: "#ffffff", radius: "8px", shadow: "0px 2px 8px rgba(0,0,0,0.10)", use: "Restaurant listing card with hero image, name, rating, ETA" }
    promo-card: { type: card, bg: "#FFC100", fg: "#1a1a1a", radius: "8px", use: "Promotional deal card, gold background" }
    badge-status: { type: badge, bg: "#00CCBC", fg: "#003733", radius: "9999px", padding: "4px 10px", font: "12px / 600", use: "Delivery ETA, order status pills" }
    badge-tag: { type: badge, bg: "#f5f5f5", fg: "#1a1a1a", radius: "9999px", padding: "4px 10px", font: "12px / 400", use: "Restaurant category tags (Fast food, Asian, etc.)" }
    nav-tab: { type: tab, fg: "#4a4a4a", radius: "0px", font: "16px / 400", active: "text #00CCBC + 2px bottom border #00CCBC", use: "Bottom navigation tabs (Home, Orders, Account)" }
    toggle-on: { type: toggle, bg: "#00CCBC", radius: "9999px", use: "On state for dietary/preference filters" }
  components_harvested: true
---

# Design System Inspiration of Deliveroo

## 1. Visual Theme & Atmosphere

Deliveroo is the UK's leading food delivery platform, and its design identity centres on one of the most recognisable brand assets in consumer tech: the teal "Roo" kangaroo (`#00CCBC`). The visual system is built around a clean, energetic personality — white canvas, bold teal action colour, generous food photography, and the bespoke Stratos typeface tilted at six degrees to echo the forward-motion of the Roo Head. The overall impression is of a brand that is confident, friendly, and unapologetically focused on the pleasure of eating.

The design system, known internally as PDS 2.0 (Platform Design System), underwent a significant accessibility overhaul in 2024, revamping the digital colour palette around WCAG 2.1 Level AA compliance. The action colour — called "Seaweed" in the token system — is the same teal but paired with deep teal ink (`#003733`) for text on teal fills, replacing the earlier white-on-teal pattern that failed contrast checks. This is the system's most important token decision: the primary brand hue (`#00CCBC`) remains, but it now wears dark text.

The typography system is anchored by Stratos, a geometric sans-serif by Production Type that DesignStudio customised for the 2016 rebrand. The typeface is angled at six degrees — matching the nose of the Roo Head — and used for bold, italic headlines that project kinetic energy ("the delivery is arriving"). Body and UI text falls back to the system sans-serif, keeping functional text legible and lightweight.

**Key Characteristics:**
- Deliveroo Teal (`#00CCBC`) — the brand's single saturated accent, used for CTAs, active states, ratings, and the Roo logo
- Deep Teal Ink (`#003733`) — text colour on teal fills, ensuring WCAG AA compliance
- Stratos typeface — angled, bold, geometric; the kinetic brand voice in headlines
- Pill geometry (`border-radius: 9999px`) on all primary buttons and search inputs
- White canvas (`#ffffff`) with tinted grey surfaces (`#f5f5f5`) for section separation
- Promo Gold (`#FFC100`) for deals and promotional elements only
- Dark mode canvas (`#121212`) for night-time ordering
- Food-first photography with consistent styling across restaurant cards

## 2. Color Palette & Roles

### Primary
- **Deliveroo Teal** (`#00CCBC`): Primary brand colour. CTA button backgrounds, active tab indicators, rating stars, Roo logo fill, order tracking journey line. The system's single saturated action colour.
- **Teal Hover** (`#00A99C`): Pressed/hover state for primary teal elements. Slightly darker for depth.
- **Teal Ink** (`#003733`): Deep teal for text on teal backgrounds. PDS 2.0 AA-compliant text/icon colour on Seaweed fills.

### Brand
- **Brand Teal** (`#00CCBC`): Equivalent to primary — the "Seaweed" core token in the PDS token system.
- **Promo Gold** (`#FFC100`): Reserved exclusively for promotional deals, voucher highlights, and offer CTAs. Never used as a general accent.

### Canvas & Surface
- **Pure White** (`#ffffff`): Default page and card background.
- **Surface Grey** (`#f5f5f5`): Tinted surface for section backgrounds, input fields, ghost containers.
- **Dark Canvas** (`#121212`): Night/dark mode background — the warm near-black used when system dark mode is active.

### Text
- **Heading** (`#1a1a1a`): Primary headings and strong labels. Near-black, not pure black.
- **Body** (`#4a4a4a`): Standard body copy, descriptions, secondary labels.
- **Muted** (`#767676`): Captions, metadata, placeholder text. Passes AA on white.
- **Teal Ink on Teal** (`#003733`): Labels and icons on teal fill.

### Status
- **Error / Critical** (`#DF1619`): System error state, `color.background.critical` token.
- **Hairline** (`#e0e0e0`): Borders, dividers, card outlines.

## 3. Typography Rules

### Font Family
- **Display**: Stratos by Production Type (customised for Deliveroo). Bold, italic, angled at 6° to echo the Roo's geometry. Used for hero headlines and brand moments.
- **Body / UI**: System sans-serif stack (`system-ui, -apple-system, sans-serif`). Clean, legible, and fast-loading.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Display Hero | Stratos | 48px | 700 | 1.10 | -0.5px tracking, 6° italic angle |
| Display Large | Stratos | 36px | 700 | 1.15 | Section headlines |
| Sub-section | Stratos / System | 24px | 600 | 1.20 | Card titles, feature heads |
| Body Large | System | 18px | 400 | 1.50 | Feature descriptions |
| Body | System | 16px | 400 | 1.50 | Standard reading text |
| Button | System | 16px | 600 | 1.00 | CTA label |
| Caption | System | 14px | 400 | normal | Metadata, secondary labels |
| Tag / Badge | System | 12px | 400–600 | normal | Restaurant tags, status pills |

### Principles
- **Stratos for brand voice**: The custom typeface appears only at headline/brand scales. Its angled geometry and bold weight carry Deliveroo's energetic personality.
- **System font for function**: UI text, form labels, body copy, and navigation use the system sans. This keeps the app fast and legible across platforms without custom font loading.
- **Pill geometry and type pairing**: The pill CTA button's full-radius curves soften the angular Stratos headlines, creating a push-pull between energy (headlines) and approachability (buttons).
- **Food-forward hierarchy**: Typography always defers to food photography in visual hierarchy. Headlines introduce context; photography sells the experience.

## 4. Component Stylings

### Buttons

**Primary CTA (Teal Pill)**
- Background: `#00CCBC`
- Text: `#003733`
- Radius: 9999px
- Padding: 14px 24px
- Font: 16px system-ui weight 600
- Hover: `#00A99C` background
- Use: "Order now", "Add to basket", "Sign up" — primary user flow action

**Secondary (White Outlined Pill)**
- Background: `#ffffff`
- Text: `#1a1a1a`
- Border: 1.5px solid `#e0e0e0`
- Radius: 9999px
- Padding: 14px 24px
- Font: 16px weight 600
- Use: "View menu", "See all restaurants" — secondary or ghost action

**Promo (Gold Pill)**
- Background: `#FFC100`
- Text: `#1a1a1a`
- Radius: 9999px
- Padding: 14px 24px
- Font: 16px weight 600
- Use: Deal/voucher CTAs only ("Get 20% off", "Claim deal")

### Inputs

**Search Input (Address / Restaurant Search)**
- Background: `#f5f5f5`
- Border: 1.5px solid `#e0e0e0`
- Radius: 9999px
- Padding: 12px 16px
- Font: 16px weight 400
- Focus: 1.5px solid `#00CCBC`
- Placeholder: `#767676`
- Use: Primary discovery surface — address entry and restaurant/cuisine search

### Cards & Containers

**Restaurant Card**
- Background: `#ffffff`
- Radius: 8px
- Shadow: `0px 2px 8px rgba(0,0,0,0.10)`
- Use: Listing card with hero food image, restaurant name, rating stars, delivery ETA, category tags

**Promo Card**
- Background: `#FFC100`
- Text: `#1a1a1a`
- Radius: 8px
- Use: Promotional deal highlights — gold background distinguishes from regular restaurant cards

**Category Card**
- Background: `#f5f5f5`
- Radius: 8px
- Use: Cuisine category selector (Pizza, Sushi, Burgers, etc.) with icon

### Badges & Tags

**Status Pill (ETA / Order Status)**
- Background: `#00CCBC`
- Text: `#003733`
- Radius: 9999px
- Padding: 4px 10px
- Font: 12px weight 600
- Use: Delivery ETA on restaurant cards ("25–35 min"), order status in tracking view

**Category Tag**
- Background: `#f5f5f5`
- Text: `#1a1a1a`
- Radius: 9999px
- Padding: 4px 10px
- Font: 12px weight 400
- Use: Restaurant category labels ("Asian", "Fast food", "Healthy")

### Tabs & Navigation

**Bottom Nav Tab**
- Text (inactive): `#4a4a4a`
- Active: `#00CCBC` text
- Active: 2px bottom indicator `#00CCBC`
- Font: 16px weight 400
- Use: App bottom navigation (Home, Orders, Account, Offers)

### Toggles

**Filter Toggle (On)**
- Background: `#00CCBC`
- Radius: 9999px
- Use: Dietary/preference filter toggles (Vegetarian, Halal, Gluten-free)

---

**Verified:** 2026-06-22 (omd:add-reference CREATE — KR IP geo-blocked from deliveroo.co.uk + design.deliveroo.net, tokens from Tier 1 official sources)
**Tier 1 sources:** https://deliveroo.design/ (brand + hiring surface), https://medium.com/deliveroo-design/brightening-up-accessibility-with-a-new-colour-system-5921915641ed (official Deliveroo Design Medium — PDS 2.0 colour system details, food-themed token names, `#DF1619` critical token), https://cdn.simpleicons.org/deliveroo (official hex #00CCBC confirmed)
**Tier 2 sources:** getdesign.md/deliveroo — not listed; styles.refero.design?q=deliveroo — not listed
**Conflicts unresolved:** Teal variant: #00CCBC (logo sources, SimpleIcons) vs #00CDBC (SchemeColor) vs #00c1b2 (designpieces/htmlcolors). Resolved: #00CCBC wins — confirmed by SimpleIcons official Deliveroo SVG fill value and Mobbin brand palette. Other variants are minor colour sampling discrepancies.

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px
- Notable: Restaurant cards use 16px internal padding; section headers get 24–32px margins

### Grid & Container
- Mobile-first: single-column scroll with horizontal-scrolling category/restaurant rows
- Desktop: max content width ~1140px, 3–4 column restaurant grid
- Hero: full-width address entry bar with the pill search input as the central CTA
- Category carousels: horizontally scrolling chip rows for cuisine selection

### Whitespace Philosophy
- **Food-first breathing room**: Generous vertical spacing between sections lets food photography dominate without competition
- **Surface segmentation**: `#f5f5f5` grey bands separate content sections without elevation — flat and clean
- **Pill rhythm**: The repeated pill (9999px radius) on buttons and inputs creates a consistent curvilinear cadence against the more angular Stratos headlines

### Border Radius Scale
- None (0px): Dividers, horizontal rule elements
- Small (4px): Fine-grained UI labels
- Standard (8px): Cards, image containers, dropdowns — the workhorse
- Large (16px): Bottom sheet containers, modal cards
- Full (9999px): All buttons, search inputs, status pills, toggles

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Surface sections, inline text, tinted containers |
| Subtle (Level 1) | `0px 2px 8px rgba(0,0,0,0.10)` | Restaurant cards, standard product cards |
| Elevated (Level 2) | `0px 4px 16px rgba(0,0,0,0.14)` | Floating panels, sticky headers, bottom sheets |
| Sheet (Level 3) | Large shadow + scrim overlay | Full-screen order confirmation sheets, checkout modals |

**Shadow Philosophy**: Deliveroo's shadow system is restrained and food-friendly. Neutral rgba(0,0,0) shadows are used rather than brand-coloured shadows, keeping the focus on food photography rather than UI chrome. The single-layer approach (no multi-layer blue-tinted shadows) reflects a warmer, more consumer-friendly posture versus a technical/fintech brand. Cards lift just enough to feel tappable without visually competing with the food imagery above them.

## 7. Do's and Don'ts

### Do
- Use Deliveroo Teal (`#00CCBC`) with deep teal ink (`#003733`) text — the PDS 2.0 AA-compliant combination
- Apply pill geometry (9999px radius) to all primary buttons and search inputs — it's the system signature
- Use Stratos italic/bold only for brand headline moments — let food photography carry the visual weight
- Reserve Promo Gold (`#FFC100`) strictly for deals and promotional elements — it must mean "discount"
- Use `#f5f5f5` surface grey for section segmentation without elevation
- Lead with food photography — the design system exists to frame great food imagery
- Use the Roo Head / "The Rooute" journey line motif as brand graphic device in marketing

### Don't
- Use white text on teal (`#00CCBC`) backgrounds — dark teal ink (`#003733`) is the AA-compliant choice
- Apply Promo Gold to non-promotional elements — it will dilute the "deal signal"
- Use sharp corners on interactive elements — Deliveroo is a pill-native system
- Overload layouts with text — food photography is the primary selling surface
- Use the Stratos headline treatment at body/caption sizes — it reads as shouting at small scale
- Apply heavy drop shadows (elevation above Level 2) to restaurant cards — food imagery should not be overshadowed
- Use the teal for destructive/error states — error red (`#DF1619`) owns that semantic

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single-column layout, horizontal-scroll rows, bottom nav |
| Tablet | 640–1024px | 2-column restaurant grid, larger hero |
| Desktop | 1024–1280px | 3–4 column restaurant grid, sidebar filters |
| Large Desktop | >1280px | Centred content, max-width 1140px, expanded filters |

### Touch Targets
- Primary buttons: 52px minimum height (14px vertical padding + 24px text)
- Bottom nav items: full thumb-zone height, icon + label
- Restaurant cards: full-bleed tappable surface (not just text area)
- Filter toggles: 44×24px minimum touch target

### Collapsing Strategy
- Hero address bar: full-width pill input maintained at all sizes
- Restaurant grid: 1→2→3→4 columns across breakpoints
- Category carousel: horizontal scroll maintained on mobile, wraps to 2-column grid on desktop
- Stratos headlines: scale down proportionally, weight stays bold
- Bottom navigation: transforms to sidebar/top nav on desktop

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Deliveroo Teal (`#00CCBC`)
- CTA text on teal: Deep Teal Ink (`#003733`)
- CTA Hover: Teal Pressed (`#00A99C`)
- Background: Pure White (`#ffffff`)
- Surface section: Light Grey (`#f5f5f5`)
- Heading text: Near-black (`#1a1a1a`)
- Body text: Dark Grey (`#4a4a4a`)
- Muted / caption: Mid Grey (`#767676`)
- Promo only: Gold (`#FFC100`)
- Error: Critical Red (`#DF1619`)
- Dark canvas: `#121212`

### Example Component Prompts
- "Create a restaurant listing card: white background, 8px radius, `0px 2px 8px rgba(0,0,0,0.10)` shadow. Full-bleed hero image above. Below: restaurant name at 18px system-ui weight 600 color #1a1a1a. Rating in teal `#00CCBC` stars. Two pill badges: ETA `#00CCBC` bg `#003733` text 12px/600, category `#f5f5f5` bg `#1a1a1a` text 12px/400."
- "Build a primary order button: `#00CCBC` background, `#003733` text, 9999px radius, 14px 24px padding, 16px system-ui weight 600. Hover state: `#00A99C`. Full-width on mobile."
- "Design the hero address search bar: `#f5f5f5` background, 9999px radius, 1.5px `#e0e0e0` border, 12px 16px padding. Focus state: 1.5px `#00CCBC` border. Magnifier icon in `#4a4a4a` left-aligned."
- "Create a deal card: `#FFC100` gold background, `#1a1a1a` text, 8px radius. Headline 18px weight 700, subtext 14px weight 400. CTA pill button: `#1a1a1a` bg, `#ffffff` text, 9999px radius."
- "Design promo tag badge: `#00CCBC` background, `#003733` text, 9999px radius, 4px 10px padding, 12px/600. For ETA display: '25–35 min'."

### Iteration Guide
1. Teal (`#00CCBC`) is the primary CTA colour — always pair with `#003733` dark teal ink text (not white)
2. All interactive elements use pill geometry (9999px) — never sharp corners
3. Shadow is always neutral rgba(0,0,0) — no brand-coloured shadows
4. Promo Gold (`#FFC100`) appears ONLY on discount/deal surfaces
5. Food photography is the hero — typography and UI frame it, not compete
6. Stratos bold italic is for marketing headlines only; system font everywhere else
7. Surface grey (`#f5f5f5`) segments sections without elevation
8. Error state always uses `#DF1619` — teal never carries a negative semantic

---

## 10. Voice & Tone

Deliveroo's voice is **warm, direct, and food-obsessed** — a cheerful guide that celebrates the pleasure of eating, not a clinical logistics system. Copy is short, action-oriented, and hungry. The brand speaks in the language of craving ("You deserve tonight off", "Find the good stuff") rather than the language of efficiency ("Delivery in under 30 minutes"). The friendly kangaroo mascot sets the register: spirited, approachable, with a subtle British wit. Menus and restaurant cards use food-first language; operational copy (tracking, payment) stays brief and reassuring.

| Context | Tone |
|---|---|
| Hero / marketing | Warm, celebratory. "Restaurants you love, delivered to your door." |
| CTA buttons | Direct, imperative. "Order now", "Start your order", "Add to basket". |
| Empty states | Encouraging, not apologetic. "No restaurants near you yet — try a different address." |
| Order tracking | Calm, reassuring. "Yasmine is on her way with your order." |
| Error / issue | Empathetic, action-forward. "Something went wrong. Let's try that again." |
| Push notifications | Conversational, urgent. "Your food is 5 minutes away! 🛵" (emoji permitted) |
| Promo / deals | Excited, punchy. "20% off your next order. Don't wait." |

**Voice samples (verified from deliveroo.design / public brand surfaces):**
- "How do you show customers when their order's arriving?" — hero header on deliveroo.design *(verified 2026-06-22)*
- "Restaurants you love, delivered to your door" — brand tagline, widely documented *(public fact)*
- "Your order is on its way" — tracking state copy, illustrative *(editorial interpretation)*

**Forbidden register**: corporate logistics language ("fulfilment", "last-mile"), aggressive urgency ("Order NOW before it's gone!"), impersonal transactional tone, technical jargon in customer-facing copy.

## 11. Brand Narrative

Deliveroo was founded in **2013** by **Will Shu** (CEO) and **Greg Orlowski** (CTO), both former Morgan Stanley analysts in London who noticed the absence of quality restaurant delivery in the city. Shu famously personally delivered on a bicycle for the first year — an origin story that anchors the brand's rider-centric identity and shaped the design decision to centre the journey line (the rider's path from restaurant to door) as the brand's graphic signature: *the Rooute*.

The **2016 rebrand by DesignStudio** — the same agency behind Airbnb's 2014 identity overhaul — introduced the current visual language: the abstracted "Roo Head" kangaroo icon, the Stratos typeface (angled 6° to echo the Roo's nose), and the teal colour system. The rebrand positioned Deliveroo as a premium-yet-friendly food platform rather than a logistics utility. DesignStudio created over 400 assets to demonstrate the identity's flexibility across ten global markets.

The **PDS 2.0 colour accessibility overhaul** in 2024 — led by Laura Soto Miranda and the Deliveroo Design team — was the system's most significant internal evolution. The food-themed token naming (Seaweed, Anchovy, Tomato) gave the palette personality while codifying WCAG AA compliance: teal surfaces now carry dark teal ink (`#003733`) rather than white text. This is the brand growing up while staying true to its food-first identity.

What Deliveroo refuses: the cold, efficient aesthetic of logistics (no dark enterprise UIs, no heavy grids), the aggressive urgency of discount food apps (gold is reserved for promos, not primary actions), and the genericness of white-label delivery chrome. What it embraces: the joy of eating, the Roo character as a recognisable global icon, and a design system built around food photography as the primary persuasive surface.

## 12. Principles

1. **Food is the hero.** Every design decision asks: does this help the food shine? *UI implication:* typography, colour, and layout exist to frame photography — never to compete with it.
2. **One brand colour, maximum recognition.** Teal (`#00CCBC`) means Deliveroo. It is not shared with secondary accents. *UI implication:* reserve teal for action and active states exclusively; promo gold is a separate semantic.
3. **Accessible by system.** PDS 2.0 encodes accessibility into the token pairing itself — `color.background.[ROLE]` + `color.foreground.on.[ROLE]`. *UI implication:* designers cannot accidentally create a non-AA combination if they use semantic alias tokens.
4. **Warmth over efficiency.** This is about the pleasure of food, not supply chain. *UI implication:* Copy that humanises ("Yasmine is on the way") over copy that abstacts ("Rider dispatched").
5. **Motion tells the story of delivery.** The Rooute — the teal journey line — is the brand's kinetic signature. *UI implication:* order tracking experiences lead with the animated map path, not the logistics text.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Deliveroo user segments, not individual people.*

**Sophie Turner, 28, East London.** A junior creative agency employee working late on a pitch. Orders Deliveroo 2–3 times a week after 7pm. Values the restaurant variety and speed. Gets mildly annoyed when the ETA is off by more than 5 minutes. Trusts the rating system. Has Deliveroo Plus and mentally calculates whether it pays for itself each month.

**Marcus O'Brien, 40, Manchester.** A father of two who uses Deliveroo on Friday nights as the family treat. Filters heavily by category (pizza, Thai) and ETA. Cares a lot about correct orders. Uses the saved favourites feature. Wouldn't describe himself as a "foodie" — he just wants reliable, tasty food delivered without faff.

**Isabella Chen, 34, Edinburgh.** A remote worker who uses Deliveroo for lunch breaks when she doesn't want to leave her flat. Discovers new cuisines via the homepage curation. Responds well to promo nudges (vouchers in push notifications). Values the app's clean, photography-forward browsing experience.

**Jamie Park, 22, Bristol.** A university student who uses Deliveroo late-night for post-night-out food. Price-sensitive — often scans promo codes before ordering. Uses group ordering with flatmates. Discovers new spots through the trending section. The Roo character resonates with him as playfully British.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no restaurants near address)** | White canvas. Friendly Roo illustration. Single sentence in `#1a1a1a` at 18px: "We're not in your area yet." Teal CTA: "Try a different address". |
| **Empty (basket, nothing added)** | Muted `#767676` copy at 16px: "Your basket is empty." Teal link: "Browse restaurants". |
| **Loading (restaurant list)** | Skeleton cards at exact final dimensions — image placeholder + two text line skeletons + badge skeleton. `#f5f5f5` shimmer at 1.4s. |
| **Loading (map / order tracking)** | Animated Roo Head or teal journey-line pulse on the map canvas. Previous estimated time displayed while new ETA loads. |
| **Error (order failed)** | Red-tinted banner at top (`#DF1619` border). Empathetic message + "Try again" teal CTA. Never generic — states what went wrong (payment declined / restaurant unavailable). |
| **Error (delivery issue)** | In-app chat surface with proactive message from Deliveroo. Teal CTA: "Contact rider" or "Report issue". |
| **Success (order placed)** | Full-screen confirmation with animated Roo. "Order confirmed! 🎉" in Stratos bold. ETA pill badge in teal. |
| **Success (review submitted)** | Brief inline confirmation. 3s auto-dismiss toast: "Review submitted. Thanks!" |
| **Skeleton (restaurant card)** | `#f5f5f5` image block (full card width) + two skeleton text lines. 8px radius maintained. |
| **Disabled (out of delivery zone)** | Restaurant card with reduced opacity overlay (`rgba(255,255,255,0.6)`) and "Not in your area" label in `#767676`. Teal elements are muted to `#b3e8e5`. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle state commits, selection ticks |
| `motion-fast` | 100ms | Button press feedback, tap highlights |
| `motion-standard` | 200ms | Card transitions, sheet appearances, tab switches |
| `motion-deliberate` | 300ms | Full-screen state changes, order confirmation reveal |
| `motion-slow` | 500ms | Rooute journey line animation, map path drawing |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Cards arriving, bottom sheets sliding up |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals, overlay closing |
| `ease-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Order confirmation pop animation (celebratory moments only) |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Standard two-way transitions |

**Signature motions:**

1. **The Rooute journey line.** Order tracking draws the teal path from restaurant to delivery address using `motion-slow` with `ease-enter`, creating a visual narrative of the rider's route. This is Deliveroo's signature animated brand moment.
2. **Order confirmation burst.** The full-screen success state uses the spring easing (`ease-spring`) on the Roo illustration at `motion-deliberate` — the one place a celebratory overshoot is appropriate. Food delivery is emotionally positive.
3. **Restaurant card entry.** Cards entering a grid use `motion-standard / ease-enter` with a 4px fade-from-below. Staggered by 40ms per card for a cascade feel without feeling slow.
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all transitions collapse to `motion-instant`. The Rooute does not animate — the path appears immediately. The order confirmation celebration becomes a static illustration.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect: KR IP geo-blocked from deliveroo.co.uk and design.deliveroo.net (Cloudflare Error 1009). Token data sourced from:
- https://deliveroo.design/ — brand surface; hero copy "How do you show customers when their order's arriving?" verified 2026-06-22
- https://medium.com/deliveroo-design/brightening-up-accessibility-with-a-new-colour-system-5921915641ed — official Deliveroo Design Medium blog; food-themed token naming (Seaweed, Anchovy, Tomato), `#DF1619` critical token, PDS 2.0 AA compliance approach
- https://cdn.simpleicons.org/deliveroo — SVG fill="00CCBC" confirming primary brand hex
- https://fontsinuse.com/uses/14757/deliveroo — Stratos (Production Type) + Adelle confirmed
- https://www.creativeboom.com/news/deliveroo-serves-up-a-sizzling-new-identity-to-drive-a-wider-global-appetite/ — Rooute, teal brand code, Roo Head geometry, 2023 refresh
- Search synthesis: #00A99C pressed state, #003733 teal ink, #121212 dark canvas, #FFC100 promo gold, pill geometry, food-first hierarchy — widely corroborated across multiple brand color databases and design articles

Personas (§13) are fictional archetypes. Names are illustrative; they do not refer to real people.

Interpretive claims about "food-first" design philosophy, pill-native system, and contrast-first PDS 2.0 direction are editorial readings connecting observed Deliveroo design decisions to their stated accessibility overhaul goals.

Brand narrative sourced from public record: Will Shu and Greg Orlowski founding in 2013; DesignStudio 2016 rebrand; 400 assets across 10 markets. These are widely documented public facts.
-->
