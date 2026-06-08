---
id: nike
name: Nike
country: US
category: ecommerce
homepage: "https://www.nike.com"
primary_color: "#111111"
logo:
  type: simpleicons
  slug: "nike"
verified: "2026-06-06"
added: "2026-06-06"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    ink: "#111111"
    canvas: "#ffffff"
    volt: "#d8ff00"
    volt-ui: "#cdfb40"
    orange-heritage: "#fa5400"
    sale: "#d43f21"
    error: "#e34f2b"
    success: "#0a8800"
    info: "#1463ff"
    warning: "#cd7b00"
    grey-50: "#f7f7f7"
    grey-100: "#f5f5f5"
    grey-200: "#e5e5e5"
    grey-300: "#cccccc"
    grey-500: "#8d8d8d"
    grey-600: "#757575"
    grey-700: "#707072"
  typography:
    family: { sans: "Helvetica Now Text", mono: "Helvetica Now Text" }
    hero:       { size: 80, weight: 700, lineHeight: 0.95, tracking: "-0.01em", use: "Hero headline, UPPERCASE condensed" }
    display-lg: { size: 48, weight: 700, lineHeight: 1.0, tracking: "-0.01em", use: "Section banners (JUST IN)" }
    display-md: { size: 36, weight: 700, lineHeight: 1.05, use: "Editorial sub-headers" }
    h1:         { size: 28, weight: 700, lineHeight: 1.2, use: "Product title (PDP)" }
    h2:         { size: 24, weight: 500, lineHeight: 1.25, use: "Card / section titles" }
    subtitle:   { size: 20, weight: 400, lineHeight: 1.4, use: "Product category, list headers" }
    body-lg:    { size: 16, weight: 400, lineHeight: 1.5, use: "Descriptions, paragraphs" }
    body:       { size: 15, weight: 400, lineHeight: 1.5, use: "Standard reading text" }
    price:      { size: 16, weight: 500, lineHeight: 1.4, use: "Price; sale price in red" }
    caption:    { size: 13, weight: 400, lineHeight: 1.4, use: "Metadata, color count" }
    label:      { size: 13, weight: 700, lineHeight: 1.3, tracking: "0.04em", use: "UPPERCASE micro-labels" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32 }
  rounded: { sm: 4, md: 8, lg: 12, full: 9999 }
  shadow:
    toast: "0 4px 16px rgba(0,0,0,0.12)"
  components:
    button-primary: { type: button, bg: "#111111", fg: "#ffffff", radius: 9999, padding: "0 24px", font: "16px/500", use: "Add to Bag, Checkout on white" }
    button-inverted: { type: button, bg: "#ffffff", fg: "#111111", radius: 9999, padding: "0 24px", font: "16px/500", use: "Primary CTA on dark sections" }
    button-secondary: { type: button, bg: "transparent", fg: "#111111", radius: 9999, padding: "0 24px", font: "16px/500", use: "Secondary outline action" }
    button-volt: { type: button, bg: "#d8ff00", fg: "#111111", radius: 9999, padding: "0 24px", font: "16px/700", use: "Energy CTA, drops/SNKRS" }
    input-default: { type: input, bg: "#ffffff", fg: "#111111", radius: 8, padding: "14px 16px", font: "16px/400", use: "Form / checkout field" }
    input-search: { type: input, bg: "#f5f5f5", fg: "#111111", radius: 9999, padding: "12px 20px", font: "16px/400", use: "Header search field" }
    product-card: { type: card, bg: "#ffffff", fg: "#111111", radius: 0, use: "Grid PLP product tile" }
    surface-card: { type: card, bg: "#f7f7f7", radius: 12, padding: "24px", use: "Member panels, bag summary" }
    promo-pill: { type: badge, bg: "#111111", fg: "#ffffff", radius: 9999, padding: "4px 12px", font: "12px/700", use: "MEMBER ACCESS tags" }
    sale-pill: { type: badge, bg: "#d43f21", fg: "#ffffff", radius: 4, padding: "2px 8px", font: "12px/700", use: "Discount flag on imagery" }
    filter-chip: { type: tab, bg: "#ffffff", fg: "#111111", radius: 9999, padding: "8px 16px", font: "15px/400", use: "PLP filter row", active: "filled #111111 bg, #ffffff text" }
    toast: { type: toast, bg: "#ffffff", fg: "#111111", radius: 8, padding: "16px 20px", use: "Cart confirmation, favorite saved" }
    dialog: { type: dialog, bg: "#ffffff", fg: "#111111", radius: 12, padding: "32px", use: "Size guide, quick add, login wall" }
  components_harvested: true
---

# Design System Inspiration of Nike

## 1. Visual Theme & Atmosphere

Nike's digital storefront is athletic minimalism turned into a sales engine. The page opens on pure white (`#ffffff`) with near-black ink (`#111111`) and a single high-voltage accent — **Volt** (`#d8ff00` / commonly rendered `#cdfb40`) — held in reserve for moments of energy. The default mood is editorial and confident: enormous product photography sits on generous whitespace, headlines shout in condensed bold caps, and almost nothing competes with the product or the swoosh. This is not a "friendly" e-commerce template; it is a brand magazine that happens to take payment.

The typographic hero is the condensed, geometric sans lineage Nike has used since the mid-1970s. The marketing wordmark and hero headlines descend from **Futura Bold Condensed** (custom-cut as *Futura ND Nike 365*), while the live web UI runs on Nike's bespoke **Helvetica Now / Nike TG** stack — a Trade-Gothic-adjacent condensed face for display, with clean neutral grotesque for body. Headlines are frequently set in ALL CAPS, tightly tracked, italicized for motion, and stacked left-aligned like a stadium banner.

What defines Nike visually is *contrast as a system*: black on white, then white on black. Entire sections invert to a full-bleed `#111111` canvas for drama, then snap back to white. Color is rationed — a product page can be entirely monochrome until a single Volt CTA or a "Just In" pill provides the spark. Corners are nearly square (small 4-8px radii) or fully pill (9999px) — almost nothing in between. The result feels fast, premium, and kinetic: motion implied even in static layout.

**Key Characteristics:**
- Black (`#111111`) + White (`#ffffff`) as the load-bearing palette; everything else is accent
- Volt (`#d8ff00`) as the signature energy color — rationed, never decorative wallpaper
- Condensed bold uppercase display type (Futura / Trade Gothic lineage) for headlines
- Full-bleed inverted (black) sections alternating with white for editorial rhythm
- Pill buttons (radius 9999px) as the dominant interactive shape
- Photography-first: huge imagery, minimal chrome, swoosh as punctuation
- Flat surfaces — depth comes from contrast and scale, not shadow

## 2. Color Palette & Roles

### Primary
- **Nike Black** (`#111111`): `black`. Primary ink, headings, body text, primary button fill, inverted section backgrounds. The dominant brand color — Nike is a black-and-white brand first.
- **Pure White** (`#ffffff`): `white`. Page background, inverted-section text, primary-button label on black, card surfaces.
- **Volt** (`#d8ff00`): `volt`. Nike's signature high-energy accent (the neon yellow-green of running shoes). Used sparingly for hero CTAs, highlights, sale energy, sport moments. Bright variant `#cdfb40` appears in UI accents.

### Brand (Logo / Marketing)
- **Swoosh Black** (`#111111`): The swoosh and wordmark render in black on light, white on dark. The mark is monochrome by doctrine.
- **Orange Heritage** (`#fa5400`): Legacy Nike orange (the original shoebox / "Nike orange"). Used in heritage, Jordan, and packaging contexts — not the core web UI accent.

### Semantic
- **Sale / Error Red** (`#d43f21` / `#e34f2b`): Markdown pricing, sale labels, destructive states, error text. Nike shows discounted prices in a warm red.
- **Success Green** (`#0a8800`): In-stock confirmations, order-success, positive availability.
- **In-Stock / Info** (`#1463ff`): Informational links, "Member Access" accents, focus rings on some surfaces.
- **Warning Amber** (`#cd7b00`): Low-stock ("Almost Sold Out"), pending order states.

### Neutral Scale
- **Grey 50** (`#f7f7f7`): Lightest surface, section fills, hover background for white cards.
- **Grey 100** (`#f5f5f5`): Secondary background, input fills, skeleton base.
- **Grey 200** (`#e5e5e5`): Default borders, dividers, disabled outlines.
- **Grey 300** (`#cccccc`): Stronger borders, inactive thumbnails.
- **Grey 500** (`#8d8d8d`): Placeholder text, disabled labels, struck-through original price.
- **Grey 600** (`#757575`): Secondary/caption text — "Men's Shoes", subtitles, metadata.
- **Grey 700** (`#707072`): Body sub-text on white, breadcrumb text.
- **Grey 900** (`#111111`): Strongest text — equal to Nike Black.

### Surface & Borders
- **Border Default**: `#e5e5e5` (grey200). Cards, inputs, dividers, swatch outlines.
- **Border Strong**: `#cccccc` (grey300). Active/hovered input outlines, selected swatch ring becomes `#111111`.
- **Inverted Surface**: `#111111`. Full-bleed dark sections, footer, video overlays.
- **Overlay Scrim**: `rgba(0,0,0,0.5)` to `rgba(0,0,0,0.75)`. Modal/quick-view backdrop, image gradients for legible overlaid text.

## 3. Typography Rules

### Font Family
- **Display / Headlines**: `"Nike Futura", "Futura ND", "Trade Gothic", "Helvetica Now Display", "Helvetica Neue", Helvetica, Arial, sans-serif` — condensed, bold, frequently uppercase.
- **UI / Body**: `"Helvetica Now Text", "Helvetica Neue", Helvetica, Arial, "Nike TG", sans-serif` — neutral grotesque for runs of text.
- **Brand Wordmark**: *Futura ND Nike 365* (custom Futura Bold Condensed) — logo and tier-1 marketing only.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Hero Headline | Display (condensed) | 64-88px | 700 | 0.95 (tight) | -0.01em | UPPERCASE, left-aligned, often italic |
| Display Large | Display (condensed) | 48px | 700 | 1.0 | -0.01em | Section banners ("JUST IN") |
| Display Medium | Display | 36px | 700 | 1.05 | normal | Editorial sub-headers |
| Heading 1 | Helvetica Now | 28px | 500/700 | 1.2 | normal | Product title (PDP) |
| Heading 2 | Helvetica Now | 24px | 500 | 1.25 | normal | Card / section titles |
| Subtitle | Helvetica Now | 20px | 400/500 | 1.4 | normal | Product category, list headers |
| Body Large | Helvetica Now | 16px | 400 | 1.5 | normal | Descriptions, paragraphs |
| Body | Helvetica Now | 15px | 400 | 1.5 | normal | Standard reading text |
| Price | Helvetica Now | 16px | 500 | 1.4 | normal | Tabular feel; sale price in red |
| Caption | Helvetica Now | 13px | 400 | 1.4 | normal | Metadata, "Men's Shoes", color count |
| Label / Eyebrow | Display | 12-14px | 700 | 1.3 | 0.04em | UPPERCASE micro-labels, "MEMBER ACCESS" |

### Principles
- **Uppercase is a brand voice.** Headlines, eyebrows, and labels lean ALL CAPS with positive tracking. Body copy stays sentence case.
- **Condensed for shout, grotesque for read.** Display moments use condensed bold (Futura/Trade Gothic lineage); anything the user actually reads switches to clean Helvetica Now.
- **Tight display leading.** Hero headlines run at 0.95-1.0 line-height so multi-line caps stack like a stadium banner.
- **Italic implies motion.** Italicized condensed caps are reserved for energy/sport moments — "JUST DO IT", drop announcements.
- **Two weights do the work.** UI text lives at 400 (body) and 500 (emphasis/price/buttons); 700 is for display and labels only.

## 4. Component Stylings

### Buttons

Nike's primary interactive shape is the **pill** (fully rounded). Buttons are bold, high-contrast, and uppercase-or-sentence depending on context.

**Primary (Fill / Black)**
- Background: `#111111`
- Text: `#ffffff`
- Border: none
- Radius: 9999px (pill)
- Padding: 0 24px
- Height: 48px (default), 60px (hero)
- Font: 16px / 500 / Helvetica Now
- Hover: background `#757575`
- Disabled: background `#e5e5e5`, text `#8d8d8d`
- Use: "Add to Bag", "Checkout", primary CTAs on white surfaces

**Inverted (Fill / White)**
- Background: `#ffffff`
- Text: `#111111`
- Border: none
- Radius: 9999px
- Padding: 0 24px
- Height: 48px
- Font: 16px / 500 / Helvetica Now
- Hover: background `#e5e5e5`
- Use: Primary CTA on black / photographic / inverted sections

**Secondary (Outline)**
- Background: transparent
- Text: `#111111`
- Border: 1.5px solid `#111111`
- Radius: 9999px
- Padding: 0 24px
- Height: 48px
- Font: 16px / 500 / Helvetica Now
- Hover: border `#757575`, text `#757575`
- Use: Secondary action ("Favorite", "Find in Store") beside a primary fill

**Volt Accent**
- Background: `#d8ff00`
- Text: `#111111`
- Border: none
- Radius: 9999px
- Padding: 0 24px
- Height: 48px
- Font: 16px / 700 / Helvetica Now
- Use: Energy CTA — limited drops, SNKRS, sport campaigns. Rare and intentional.

**Text Link (Ghost)**
- Background: none
- Text: `#111111`, underline on hover
- Font: 15px / 400 / Helvetica Now
- Trailing arrow `→` for "Shop All", "Learn More"
- Use: Tertiary navigation, editorial links

### Inputs

**Default**
- Background: `#ffffff`
- Text: `#111111`
- Border: 1.5px solid `#e5e5e5`
- Radius: 8px
- Padding: 14px 16px
- Font: 16px / 400 / Helvetica Now
- Placeholder: `#8d8d8d`
- Focus: border `#111111` (1.5px), no glow
- Use: Forms, checkout fields

**Search (rounded)**
- Background: `#f5f5f5`
- Text: `#111111`
- Border: none
- Radius: 9999px (pill)
- Padding: 12px 20px (leading search icon `#757575`)
- Font: 16px / 400 / Helvetica Now
- Focus: background `#ffffff`, border 1.5px `#e5e5e5`
- Use: Header search field

**Error**
- Background: `#ffffff`
- Border: 1.5px solid `#d43f21`
- Radius: 8px
- Padding: 14px 16px
- Helper text below in `#d43f21`, 13px
- Use: Validation failure on checkout/login

### Cards

**Product Card**
- Background: `#ffffff`
- Border: none
- Radius: 0px (image), text block flush-left below
- Padding: 0 (image full-bleed) + 12px top gap to text
- Shadow: none
- Hover: image subtle scale or quick-add reveal; no shadow lift
- Detail: title 16px/500 `#111111`, category 15px/400 `#757575`, price 16px/500; sale price `#d43f21` with struck-through `#8d8d8d` original
- Use: Grid PLP product tile — image does all the work, chrome is invisible

**Editorial Card**
- Background: image full-bleed with `rgba(0,0,0,0.0→0.5)` bottom gradient
- Text: `#ffffff` overlaid, condensed caps headline
- Radius: 0px (full-bleed) or 12px (carousel cards)
- Padding: 24-32px content inset
- Use: Hero tiles, "Featured" story blocks

**Surface Card (rounded)**
- Background: `#f7f7f7`
- Border: none
- Radius: 12px
- Padding: 24px
- Shadow: none
- Use: Member panels, info modules, bag summary

### Badges / Pills

**Status Pill (Just In)**
- Background: transparent / `#ffffff`
- Text: `#d43f21` ("Just In", "Sustainable Materials" `#0a8800`)
- Border: none
- Font: 13px / 500 / Helvetica Now
- Use: Product card eyebrow label above title

**Promo Pill (Filled)**
- Background: `#111111`
- Text: `#ffffff`
- Radius: 9999px
- Padding: 4px 12px
- Font: 12px / 700 / Helvetica Now, often UPPERCASE
- Use: "MEMBER ACCESS", "SNKRS EXCLUSIVE" tags

**Sale Pill**
- Background: `#d43f21`
- Text: `#ffffff`
- Radius: 4px
- Padding: 2px 8px
- Font: 12px / 700
- Use: Discount flag on imagery

### Size Selector (Swatch)

- Default: white bg, 1.5px `#e5e5e5` border, radius 4px, height 44px, label 15px `#111111`, centered
- Hover: border `#111111`
- Selected: border 1.5px `#111111`, bg `#ffffff`
- Disabled (sold out): text `#cccccc`, diagonal strike, border `#e5e5e5`
- Use: PDP size grid — square-ish, high tap target

### Color Swatch

- Circle/rounded-square 56px thumbnail, radius 8px
- Selected: 1.5px `#111111` ring with 2px offset
- Use: Colorway picker on PDP

### Tabs / Filters

**Filter Chip**
- Background: `#ffffff`
- Text: `#111111`
- Border: 1px solid `#e5e5e5`
- Radius: 9999px
- Padding: 8px 16px
- Selected: bg `#111111`, text `#ffffff`
- Font: 15px / 400 / Helvetica Now
- Use: PLP filter row (size, color, sport)

### Toasts / Notices

**Default (Added to Bag)**
- Background: `#ffffff`
- Text: `#111111`
- Border: 1px solid `#e5e5e5`
- Radius: 8px
- Padding: 16px 20px
- Shadow: `0 4px 16px rgba(0,0,0,0.12)`
- Slides from top-right; auto-dismiss
- Use: Cart confirmation, favorite saved

### Dialogs

**Modal / Quick View**
- Background: `#ffffff`
- Text: `#111111`
- Radius: 0px (full-screen) or 12px (centered)
- Padding: 32px
- Backdrop: `rgba(0,0,0,0.5)`
- Close: `✕` top-right, 24px, `#111111`
- Use: Size guide, quick add, login wall

---

**Verified:** 2026-06-06 (token-level from Nike brand corpus + nike.com observation)
**Tier 1 sources:** nike.com homepage/PLP/PDP visual language; Nike wordmark (Futura ND Nike 365). Live fetch returned HTTP 403 (bot-blocked); tokens grounded in Nike's documented black/white + Volt system and condensed-display typography. · https://www.nike.com (live production site)
**Tier 2 sources:** Nike typography history (Futura Bold Condensed since mid-1970s; Trade Gothic / Helvetica Now for digital UI) — designyourway.net, fontsinuse.com.
**Conflicts unresolved:** none. Volt exact hex varies by surface (`#d8ff00` product / `#cdfb40` UI accent); both retained.

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Common values: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px
- Section vertical rhythm: 64-96px between major editorial blocks
- Product grid gutter: 16px; card internal text gap: 8-12px

### Grid & Container
- Max content width: ~1600px, centered, with edge padding 24-48px
- PLP grid: 2 columns (mobile) → 3 → 4 (desktop)
- Hero blocks: full-bleed, edge-to-edge imagery breaking the container
- Editorial: asymmetric 1:1 or 2:1 splits, left-aligned text columns

### Whitespace Philosophy
- **Product breathes.** Generous margin around photography; the shoe is never crowded.
- **Edge-to-edge drama.** Heroes and campaign blocks bleed past the container to feel immersive; text modules respect the grid.
- **Left-aligned authority.** Headlines and copy hang on a left rail like print editorial — rarely centered except single CTAs.

### Border Radius Scale
- Square (0px): Product images, full-bleed heroes, sale flags
- Compact (4px): Size swatches, small tags
- Standard (8px): Inputs, surface tags, toasts
- Comfortable (12px): Surface cards, carousel cards, modals
- Pill (9999px): Buttons, chips, search field, promo pills

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Product cards, sections, the default — Nike is a flat brand |
| Hairline (Level 1) | 1px `#e5e5e5` border | Inputs, surface cards, filter chips |
| Floating (Level 2) | `0 4px 16px rgba(0,0,0,0.12)` | Toasts, dropdowns, sticky add-to-bag bar |
| Modal (Level 3) | `0 8px 32px rgba(0,0,0,0.18)` | Quick view, size guide, login dialogs |
| Sticky header | `0 1px 0 rgba(0,0,0,0.08)` on scroll | Pinned nav separation |

**Shadow Philosophy**: Nike communicates hierarchy through **contrast and scale**, not depth. Most surfaces are perfectly flat; an item earns a shadow only when it floats above content (toast, modal, sticky bar). There are no colored shadows and no multi-layer elevation stacks — depth would compete with the photography. Inverted black sections create separation without any shadow at all.

### Blur Effects
- Sticky header gains a subtle backdrop blur + white translucency on scroll over imagery
- Video heroes use gradient scrims (not blur) for text legibility

## 7. Do's and Don'ts

### Do
- Lead with black (`#111111`) and white (`#ffffff`) — they carry the brand
- Use pill (9999px) buttons as the default interactive shape
- Set headlines in condensed bold UPPERCASE, left-aligned, tight leading
- Ration Volt (`#d8ff00`) for true energy moments — one spark per view
- Let product photography go edge-to-edge and dominate the layout
- Invert whole sections to black for editorial drama
- Keep surfaces flat; reserve shadow for genuinely floating elements

### Don't
- Don't scatter accent colors — Volt and orange are spices, not the meal
- Don't add drop shadows to product cards — flat is the aesthetic
- Don't center body copy or headlines — Nike hangs text on a left rail
- Don't mix many border radii — square, 8/12px, or pill; avoid in-betweens
- Don't set running body text in condensed display faces — switch to Helvetica Now
- Don't crowd the product — whitespace signals premium
- Don't use Nike orange (`#fa5400`) as the primary UI accent — it's heritage/packaging

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <600px | 2-col product grid, full-width pill CTAs, hamburger nav, sticky add-to-bag |
| Tablet | 600-960px | 3-col grid, condensed nav, side margins 24px |
| Desktop | 960-1440px | 4-col grid, full mega-nav, hero edge-bleed |
| Wide | >1440px | Max 1600px content, larger heroes, increased whitespace |

### Touch Targets
- Buttons: 48px default height, 60px hero — full-width pills on mobile
- Size swatches: minimum 44px tap height
- Nav/menu items: 48px row height

### Collapsing Strategy
- Mega-nav collapses to slide-in drawer on mobile
- PDP image gallery → swipeable carousel under 960px
- Sticky bottom "Add to Bag" bar appears on mobile PDP scroll
- Editorial 2-col splits stack vertically on mobile, image first

### Image Behavior
- Hero/campaign images: full-bleed, art-directed crops per breakpoint
- Product images: square 1:1, white or neutral background, lazy-loaded
- Maintain aspect ratio; never letterbox the product

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary / Ink: Nike Black (`#111111`)
- Background: White (`#ffffff`)
- Energy Accent: Volt (`#d8ff00`)
- Body text: Black (`#111111`)
- Secondary text: Grey (`#757575`)
- Caption / placeholder: Grey (`#8d8d8d`)
- Border: Grey 200 (`#e5e5e5`)
- Sale / Error: Red (`#d43f21`)
- Success: Green (`#0a8800`)
- Inverted surface: Black (`#111111`) with white text

### Example Component Prompts
- "Create a Nike product card: square 1:1 product image on white, no border, no shadow. Below, 12px gap: 'Just In' label 13px #d43f21, title 16px weight 500 #111111, category 15px #757575, price 16px weight 500 #111111. Hover reveals a black pill 'Add to Bag'."
- "Build a primary CTA: #111111 background, white text, 16px weight 500, pill radius 9999px, 48px height, 24px horizontal padding. Hover background #757575. On a black section, invert to white bg / black text."
- "Design a PDP size selector: grid of square swatches, 44px tall, 1.5px #e5e5e5 border, 4px radius, 15px #111111 centered. Selected: 1.5px #111111 border. Sold out: #cccccc text with diagonal strike."
- "Create a hero: full-bleed photo, bottom gradient to rgba(0,0,0,0.5), left-aligned UPPERCASE condensed headline 64px weight 700 white at 0.95 line-height, white pill CTA below."
- "Design a filter chip row: white pill chips, 1px #e5e5e5 border, 8px/16px padding, 15px #111111. Selected chip: #111111 bg, white text."

### Iteration Guide
1. Black + white first; color only where energy or status demands it
2. Buttons are pills (9999px); product cards are flat and square
3. Headlines: condensed bold UPPERCASE, left-aligned, 0.95-1.0 line-height
4. Body and UI text: Helvetica Now / Helvetica Neue at 400, emphasis at 500
5. Volt (`#d8ff00`) is a spark — one per view, never wallpaper
6. Let imagery bleed edge-to-edge; keep chrome invisible
7. No shadows on resting surfaces — only floating elements lift

---

## 10. Voice & Tone

Nike speaks like a coach who believes in you and refuses small talk. The voice is imperative, motivational, and brief — verbs first, second person, present tense. Headlines command ("Just Do It", "Dream Crazy", "Find Your Greatness"). Product copy is confident and benefit-led, never apologetic. Sentences are short. Periods land like a finish line.

| Context | Tone |
|---|---|
| CTAs | Imperative, sentence case ("Add to Bag", "Shop All", "Become a Member") |
| Campaign headlines | UPPERCASE, aspirational, 2-5 words ("JUST DO IT", "MOVE TO ZERO") |
| Product titles | Plain, factual, model-forward ("Nike Air Max 270") |
| Success states | Affirming, brief ("Added to Bag", "You're in.") |
| Error messages | Direct, blameless, actionable ("Select a size to continue.") |
| Member / loyalty | Insider, exclusive, warm ("Members get more. Join us.") |
| Sustainability | Plainspoken, proud, no greenwash jargon ("Move to Zero — our journey toward zero carbon and zero waste.") |

**Forbidden patterns.** No hedging ("maybe", "kind of"), no corporate apology ("We apologize for the inconvenience"), no exclamation-mark spam, no jargon. Never weaken a CTA ("Click here to maybe add"). Energy without noise.

## 11. Brand Narrative

Nike was founded in 1964 as **Blue Ribbon Sports** by University of Oregon runner **Phil Knight** and his coach **Bill Bowerman**, rebranding to **Nike** — for the Greek goddess of victory — in 1971. That same year design student **Carolyn Davidson** drew the Swoosh for $35; it would become one of the most recognized marks on earth. The waffle sole, born from Bowerman pouring rubber into a kitchen waffle iron, set the template: performance innovation as brand story.

The aesthetic doctrine is athletic clarity. Nike adopted **Futura Bold Condensed** as its brand typeface in the mid-1970s — a geometric, no-nonsense face that reads as fast and engineered. In 1988 the agency Wieden+Kennedy delivered **"Just Do It,"** set in Futura Condensed Extra Black, and the brand voice was fixed: imperative, universal, unstoppable. The visual identity has stayed deliberately spare ever since — black, white, and the swoosh — so the product and the athlete are always the loudest thing on screen.

Online, Nike is one of the largest direct-to-consumer retailers in the world, with the **Nike**, **Jordan**, **SNKRS**, and **Nike Run/Training Club** apps forming a membership ecosystem. The design's job is commerce that feels like culture: a storefront that reads like a sports magazine, where buying a shoe is buying into a story about effort and victory. Volt — the neon yellow-green Nike popularized in elite running and the 2012 Olympics — is the one color permitted to break the monochrome, because it signals pure energy.

What Nike refuses: clutter, timidity, decoration for its own sake, and any visual that competes with the athlete. The brand occupies the space where minimalism meets adrenaline — restrained in palette, maximal in conviction.

## 12. Principles

1. **Product is the hero.** Photography dominates; UI chrome shrinks to invisibility. If a UI element competes with the shoe, the UI loses.
2. **Black and white carry the brand.** Color is rationed. A view should work in monochrome; accent is the exception that creates emphasis.
3. **One spark per view.** Volt (or a single status color) appears once, intentionally. Two sparks is no spark.
4. **Command, don't ask.** Copy and CTAs use imperative verbs. The interface has a point of view and states it plainly.
5. **Flat is premium.** Depth comes from contrast, scale, and inversion — not shadows. Resting surfaces stay flat.
6. **Left-aligned authority.** Text hangs on a left rail like editorial print. Centering is reserved for solitary CTAs.
7. **Condensed shouts, grotesque reads.** Display type is condensed bold caps; running text is clean Helvetica Now. Never confuse the two roles.
8. **Speed is a feeling.** Tight leading, italic energy, edge-bleed imagery, and snappy motion make a static page feel kinetic.

## 13. Personas

*Personas below are fictional archetypes informed by publicly described athletic-retail segments, not individual people.*

**Marcus, 24, Atlanta.** Sneakerhead and SNKRS power user. Has push notifications on for drops; can recite release calendars. Shops on mobile, mostly at midnight ET when limited pairs go live. Judges the experience by speed and fairness of the draw — a laggy add-to-bag during a drop is unforgivable. Reads the product page for materials and colorway names, not marketing copy. Volt and OG colorways catch his eye instantly.

**Priya, 31, Chicago.** Marathon trainer, three runs a week. Uses Nike Run Club and buys for performance — cushioning, drop, weight matter more than hype. Wants honest product detail, size guidance, and easy reorder of the same model. Trusts the brand's running pedigree. Browses on desktop at lunch, buys on mobile. Annoyed by anything that hides the spec behind lifestyle imagery.

**Dani, 17, Los Angeles.** High-school athlete and style-conscious buyer. Discovers through Instagram and the Nike app's editorial tiles. Responds to campaign energy — bold headlines, athletes, the "Just Do It" feeling. Budget-aware, watches sale labels and member-exclusive access. Mixes performance and lifestyle; cares how it looks as much as how it runs. Mobile-only, fast scroller — the image has one second to land.

## 14. States

| State | Treatment |
|---|---|
| **Empty (bag)** | Centered short line `#111111` 18px ("Your bag is empty."), one black pill CTA "Start Shopping". No illustration clutter. |
| **Empty (search/filter)** | `#757575` caption ("No results. Try another filter."), filters remain editable. |
| **Loading (grid)** | Skeleton tiles at `#f5f5f5` matching square product aspect ratio, 1.2s shimmer with 8% white sweep. Price/title as grey bars. |
| **Loading (button)** | Label replaced by white spinner on `#111111`; button width preserved, no double-submit. |
| **Error (inline field)** | 1.5px `#d43f21` border, helper text below in `#d43f21` 13px, one actionable sentence ("Select a size to continue."). |
| **Error (page)** | Centered black headline + grey body + black pill "Try Again". No stack traces, no apology spam. |
| **Success (added to bag)** | White toast top-right, 1px `#e5e5e5` border, `0 4px 16px rgba(0,0,0,0.12)` shadow, "Added to Bag" + mini product thumb. Auto-dismiss ~4s. |
| **Sold out** | Size swatch text `#cccccc` with diagonal strike; "Sold Out" replaces CTA; "Notify Me" outline button offered. |
| **Low stock** | Amber `#cd7b00` caption ("Almost Sold Out") under price. |
| **Sale** | Original price struck-through `#8d8d8d`, sale price `#d43f21`, optional `#d43f21` "Sale" pill on image. |
| **Disabled (button)** | `#e5e5e5` background, `#8d8d8d` text, no pointer. |
| **Skeleton** | `#f5f5f5` blocks at exact final dimensions, shimmer at component radius (0px image / pill button). |

## 15. Motion & Easing

**Durations** (named):

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Reduced-motion fallback, state flips |
| `motion-fast` | 150ms | Hover, focus, button press, chip select |
| `motion-standard` | 250ms | Default — quick-add reveal, toast in, tab switch |
| `motion-slow` | 400ms | Image gallery transitions, section reveals |
| `motion-hero` | 600ms | Hero/campaign entrance, parallax settle |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Things appearing — toasts, drawers, quick-add |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals, pops out |
| `ease-standard` | `cubic-bezier(0.4, 0.0, 0.2, 1)` | Two-way — tabs, accordions, hover scale |
| `ease-power` | `cubic-bezier(0.2, 0.8, 0.2, 1)` | Athletic accelerate-out — image zoom, hero parallax, the "fast" feeling |

**Signature motions.**

1. **Hover product zoom.** On product-card hover the image scales `1.0 → 1.04` over `motion-standard` with `ease-power`, conveying athletic momentum. No shadow lift — scale alone.
2. **Quick-add reveal.** A black pill "Add to Bag" slides up from the card's bottom edge (`y+12px → 0`, `motion-standard / ease-enter`) on hover, fading in. Exits faster (`motion-fast / ease-exit`).
3. **Section inversion / scroll reveal.** Editorial blocks fade-and-rise (`y+24px → 0`, `motion-slow / ease-power`) as they enter the viewport — content arrives with momentum, not a passive fade.
4. **Bag toast.** Confirmation slides from the top-right (`x+24px → 0`, `motion-standard / ease-enter`), holds, then exits with `ease-exit`.
5. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all tokens collapse to `motion-instant`; scales and parallax disable, crossfades replace slides. The store stays fully usable.

<!--
OmD v0.1 Sources — Nike

Token layer (sections 1-9): grounded in Nike's documented brand system —
black (#111111) + white (#ffffff) core with Volt (#d8ff00) energy accent,
pill button geometry, condensed-display + Helvetica grotesque typography.
Live WebFetch of nike.com returned HTTP 403 (bot protection); tokens reflect
Nike's published identity and observed storefront conventions rather than a
single scraped DOM, so exact pixel values are representative, not asserted as
pulled from one live computed style.

Typography history (Futura ND Nike 365 / Futura Bold Condensed since mid-1970s;
Trade Gothic + Helvetica Now for digital UI; "Just Do It" in Futura Condensed
Extra Black, 1988) corroborated via WebSearch:
- designyourway.net/blog/nike-font
- fontsinuse.com/uses/14239/nike-website-2016
- fontyouneed.com / fontinlogo.com

Brand narrative facts (Blue Ribbon Sports 1964, renamed Nike 1971, Swoosh by
Carolyn Davidson for $35, Bowerman waffle sole, Wieden+Kennedy "Just Do It"
1988) are widely documented public history.

Volt exact hex varies by surface (#d8ff00 product / #cdfb40 UI accent); both
retained. Heritage orange #fa5400 noted as packaging/legacy, not core UI accent.

Personas (§13) are fictional archetypes informed by publicly described athletic-
retail segments. Interpretive claims (e.g., "one spark per view") are editorial
readings of the design, not documented Nike statements.
-->
