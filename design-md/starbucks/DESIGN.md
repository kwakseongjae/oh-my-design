---
id: starbucks
name: Starbucks
country: US
category: consumer-tech
homepage: "https://www.starbucks.com"
primary_color: "#00704A"
logo:
  type: simpleicons
  slug: "starbucks"
verified: "2026-06-06"
added: "2026-06-06"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#00704A"
    accent-green: "#00a862"
    deep-forest: "#1e3932"
    warm-white: "#f1f8f4"
    white: "#fafafa"
    cream: "#ede9e1"
    latte: "#d4e9e2"
    gold: "#cba258"
    berry: "#c44d58"
    success: "#00754a"
    error: "#e75b52"
    black: "#000000"
    charcoal: "#1e1e1e"
    body: "#4a4a4a"
    secondary: "#6b6b6b"
    disabled: "#8c8c8c"
    border: "#d4d4d4"
    light-gray: "#e8e8e8"
    bg-gray: "#f2f0eb"
  typography:
    family: { sans: "SoDo Sans", mono: "SoDo Sans" }
    display-hero: { size: 48, weight: 700, lineHeight: 1.08, tracking: -0.5, use: "Campaign hero headlines (Pike/Lander)" }
    display-lg:   { size: 36, weight: 700, lineHeight: 1.22, tracking: -0.25, use: "Page titles, section openers" }
    heading-1:    { size: 28, weight: 700, lineHeight: 1.29, use: "Major section headings" }
    heading-2:    { size: 22, weight: 600, lineHeight: 1.36, use: "Card headings, sub-sections" }
    heading-3:    { size: 18, weight: 600, lineHeight: 1.44, use: "List headers, menu item names" }
    subtitle:     { size: 16, weight: 600, lineHeight: 1.50, use: "Navigation, emphasized labels" }
    body-lg:      { size: 16, weight: 400, lineHeight: 1.63, use: "Descriptions, product copy" }
    body:         { size: 14, weight: 400, lineHeight: 1.57, use: "Standard reading text" }
    caption:      { size: 12, weight: 400, lineHeight: 1.50, tracking: 0.2, use: "Metadata, fine print, legal" }
    button:       { size: 14, weight: 600, lineHeight: 1.0, tracking: 0.3, use: "Button labels" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 96 }
  rounded: { sm: 4, md: 16, lg: 20, full: 9999 }
  shadow:
    subtle: "0 2px 8px rgba(30,57,50,0.08)"
    standard: "0 4px 16px rgba(30,57,50,0.12)"
    elevated: "0 6px 20px rgba(30,57,50,0.25)"
    modal: "0 12px 40px rgba(30,57,50,0.24)"
  components:
    button-primary: { type: button, bg: "#00704A", fg: "#ffffff", radius: 9999, padding: "12px 24px", font: "14px/600 SoDo Sans", use: "Primary CTA pill, hover #1e3932" }
    button-secondary: { type: button, fg: "#00704A", radius: 9999, padding: "12px 24px", font: "14px/600 SoDo Sans", use: "Outlined green pill, 1px #00704A border" }
    button-tertiary: { type: button, fg: "#00704A", padding: "8px 12px", font: "14px/600 SoDo Sans", use: "Low-emphasis inline action, underline on hover" }
    button-dark: { type: button, bg: "#fafafa", fg: "#00704A", radius: 9999, padding: "12px 24px", font: "14px/600 SoDo Sans", use: "Primary CTA on deep-forest or photo dark section" }
    button-gold: { type: button, bg: "#cba258", fg: "#1e3932", radius: 9999, padding: "12px 24px", font: "14px/700 SoDo Sans", use: "Rewards/loyalty CTA" }
    input-text: { type: input, fg: "#1e1e1e", radius: 4, padding: "14px 16px", font: "16px/400 SoDo Sans", use: "Standard form input, 1px #8c8c8c border, focus 2px #00704A" }
    input-search: { type: input, bg: "#f2f0eb", radius: 9999, padding: "12px 20px", font: "16px/400 SoDo Sans", use: "Store locator, menu search pill" }
    card-product: { type: card, radius: 16, padding: "16px", use: "Menu item, product, promo tile, 1px #e8e8e8 border, top full-bleed image" }
    card-editorial: { type: card, bg: "#f1f8f4", radius: 20, padding: "32px", use: "Story blocks, campaign features, flat warm surface" }
    card-rewards: { type: card, fg: "#ffffff", radius: 16, padding: "24px", use: "Loyalty balance, star count, green-to-forest gradient" }
    badge-status: { type: badge, bg: "#00704A", fg: "#ffffff", radius: 9999, padding: "4px 12px", font: "11px/700 SoDo Sans", use: "NEW, LIMITED TIME, uppercase" }
    badge-gold: { type: badge, bg: "#cba258", fg: "#1e3932", radius: 9999, padding: "4px 12px", font: "11px/700 SoDo Sans", use: "Star earnings, member-exclusive" }
    badge-subtle: { type: badge, bg: "#d4e9e2", fg: "#00704A", radius: 9999, padding: "4px 12px", font: "11px/600 SoDo Sans", use: "Category labels, dietary tags" }
    toast-default: { type: toast, bg: "#1e3932", fg: "#ffffff", radius: 8, padding: "14px 18px", font: "14px/600 SoDo Sans", use: "Transient confirmation" }
    toast-success: { type: toast, bg: "#d4e9e2", fg: "#00704A", radius: 8, padding: "12px 16px", use: "Persistent success banner, 4px #00704A left border" }
    dialog-modal: { type: dialog, fg: "#1e1e1e", radius: 16, padding: "32px", use: "Confirmation, store selection, green-tinted scrim" }
    toggle-switch: { type: toggle, bg: "#00704A", radius: 9999, use: "Preference settings, #d4d4d4 off, #ffffff thumb" }
  components_harvested: true
---

# Design System Inspiration of Starbucks

## 1. Visual Theme & Atmosphere

Starbucks is the world's most recognizable coffee brand, and its digital surfaces translate the warmth of a "third place" — neither home nor work — into a calm, generous, premium-feeling interface. The defining gesture is the **House Green (`#00704A`)**: a deep, confident emerald that has become so iconic it functions as a category-defining color the way Tiffany blue defines luxury jewelry. It is never bright or playful; it is the green of a well-worn apron, of forest canopy, of something that has been doing the same thing well for fifty years.

The page opens on warm, near-white surfaces — not the clinical `#ffffff` of a tech product, but slightly creamy off-whites (`#f1f8f4`, `#fafafa`) that feel like the inside of a paper cup. Text is set in near-black warm charcoal. Generous whitespace surrounds large, appetizing food-and-beverage photography, which is the real hero of every layout. The UI gets out of the way so the product can be desired.

Typography is built on **SoDo Sans**, Starbucks' proprietary humanist sans-serif (the name nods to the SoDo — South of Downtown — Seattle neighborhood of its headquarters), supported by **Lander** (an expressive serif for editorial moments) and **Pike** (a condensed display face for wayfinding and impactful headlines). The combination feels crafted and editorial rather than templated, reinforcing the artisanal-at-scale tension that is the whole brand.

What defines Starbucks visually is **warmth disciplined by restraint**: a single dominant green, warm neutrals, big rounded shapes (the Rewards program lives in pill-shaped buttons and circular reward stars), and photography-forward layouts. It reads premium, approachable, and unmistakably itself.

**Key Characteristics:**
- House Green (`#00704A`) as the singular brand-defining color — used for primary actions, brand marks, and accents
- Warm off-white backgrounds (`#f1f8f4`, `#fafafa`) rather than pure white — the "paper cup" feel
- SoDo Sans proprietary humanist sans as the workhorse, with Lander serif and Pike condensed for expression
- Fully-rounded **pill buttons** (border-radius 9999px) — a signature shape
- Photography-forward, editorial layouts where the product is the hero
- Generous whitespace and large touch targets — premium, unhurried, approachable
- Accent Spring Green (`#00a862`) and deep forest (`#1e3932`) for layering within the green family

## 2. Color Palette & Roles

### Primary
- **House Green** (`#00704A`): The brand. Primary CTAs, links, active states, brand mark, the apron green. The single most important color in the system.
- **Accent Green / Spring Green** (`#00a862`): Brighter secondary green for highlights, illustration accents, success-adjacent moments, and energetic surfaces.
- **House Black-Green / Deep Forest** (`#1e3932`): Darkest green, near-black with green undertone. Dark surfaces, footers, premium dark sections, headings on light editorial layouts.
- **Warm White** (`#f1f8f4`): Faint green-tinted off-white. Section backgrounds, the default "paper cup" surface.
- **Pure-ish White** (`#fafafa`): Card and page background where a cleaner neutral is needed.

### Secondary (Warm & Editorial)
- **Cream** (`#f7f7f7` / `#ede9e1`): Warm neutral panels, alternating section backgrounds, editorial blocks.
- **Light Tan / Latte** (`#d4e9e2`): Soft green-tinted tint blocks, info banners, subtle promotional surfaces.
- **Gold / Rewards** (`#cba258`): Starbucks Rewards accent — used for the gold tier, reward stars, loyalty surfaces.
- **Berry / Accent** (`#c44d58`): Seasonal accent (used sparingly for limited-time / holiday moments).

### Semantic
- **Success Green** (`#00754a`): Confirmation, order-ready, completed states. Tracks the house green deliberately.
- **Error Red** (`#e75b52`): Errors, destructive actions, form validation failures.
- **Warning Amber** (`#cba258`): Pending, attention-needed, expiring rewards.
- **Info Green** (`#1e3932` on `#d4e9e2`): Informational banners using the green family rather than a foreign blue.

### Neutral Scale
- **Black** (`#000000`): Reserved — true black for maximum-contrast brand moments.
- **Warm Charcoal** (`#1e1e1e`): Primary heading text. Warm near-black.
- **Body Gray** (`#4a4a4a`): Standard body copy.
- **Secondary Gray** (`#6b6b6b`): Captions, metadata, secondary labels.
- **Disabled Gray** (`#8c8c8c`): Placeholder and disabled text.
- **Border Gray** (`#d4d4d4`): Default borders, dividers, input outlines.
- **Light Gray** (`#e8e8e8`): Subtle dividers, disabled fills.
- **Background Gray** (`#f2f0eb`): Warm neutral section fill.

### Surface & Borders
- **Border Default**: `#d4d4d4`. Standard input and card borders.
- **Border Strong**: `#1e3932`. Outlined buttons, emphasized edges.
- **Overlay Scrim**: `rgba(30,57,50,0.6)`. Green-tinted modal backdrop (never neutral black — the scrim carries brand).
- **Photo Gradient**: `linear-gradient(rgba(0,0,0,0) 0%, rgba(30,57,50,0.7) 100%)`. Text-legibility gradient over hero photography.

## 3. Typography Rules

### Font Family
- **Primary**: `"SoDo Sans", "Helvetica Neue", Helvetica, Arial, sans-serif` — proprietary humanist sans, the UI workhorse (body, labels, buttons, navigation).
- **Display / Editorial Serif**: `"Lander", Georgia, "Times New Roman", serif` — expressive accent for hero headlines and editorial moments.
- **Condensed Display**: `"Pike", "Oswald", "Arial Narrow", sans-serif` — condensed, impactful headlines and in-store-style wayfinding.
- **Fallback stack note**: SoDo Sans ships in multiple weights; the UI primarily uses 400 (Regular), 600 (SemiBold), and 700 (Bold).

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Pike / Lander | 48px | 700 | 52px (1.08) | -0.5px | Campaign hero headlines |
| Display Large | SoDo Sans | 36px | 700 | 44px (1.22) | -0.25px | Page titles, section openers |
| Heading 1 | SoDo Sans | 28px | 700 | 36px (1.29) | normal | Major section headings |
| Heading 2 | SoDo Sans | 22px | 600 | 30px (1.36) | normal | Card headings, sub-sections |
| Heading 3 | SoDo Sans | 18px | 600 | 26px (1.44) | normal | List headers, menu item names |
| Subtitle | SoDo Sans | 16px | 600 | 24px (1.50) | normal | Navigation, emphasized labels |
| Body Large | SoDo Sans | 16px | 400 | 26px (1.63) | normal | Descriptions, product copy |
| Body | SoDo Sans | 14px | 400 | 22px (1.57) | normal | Standard reading text |
| Caption | SoDo Sans | 12px | 400 | 18px (1.50) | 0.2px | Metadata, fine print, legal |
| Button Label | SoDo Sans | 14-16px | 600 | 1.0 | 0.3px | All-caps optional for nav CTAs |
| Price / Numeric | SoDo Sans | 16px | 700 | 1.2 | normal | Menu prices, reward star counts |

### Principles
- **Three faces, clear jobs**: SoDo Sans does the daily UI work; Lander adds editorial warmth in hero/story moments; Pike supplies condensed impact for wayfinding. Never mix all three in one component.
- **Humanist warmth**: SoDo Sans has soft, slightly open letterforms — never use a geometric or grotesque substitute that reads cold or techy.
- **Generous leading**: Body copy runs 1.5–1.63 line-height. The brand reads unhurried; tight leading feels cheap.
- **Restrained weights**: 400 body, 600 emphasis/buttons, 700 headings. Avoid thin (300) and black (900) weights in product UI.
- **Sentence case default**: Headlines and body are sentence case; all-caps reserved for small nav CTAs and legal labels with added letter-spacing.

## 4. Component Stylings

### Buttons

The signature Starbucks button is a **fully-rounded pill** (`border-radius: 9999px`). This shape echoes the Rewards program's circular language and is the single most recognizable interaction primitive in the system.

**Primary (Filled Green)**
- Background: `#00704a`
- Text: `#ffffff`
- Border: none
- Radius: 9999px (pill)
- Padding: 12px 24px
- Font: 14px / 600 / SoDo Sans, letter-spacing 0.3px
- Hover: background `#1e3932` (deep forest)
- Active/Pressed: background `#16352e`
- Disabled: background `#d4d4d4`, text `#8c8c8c`
- Min height: 44px
- Use: Primary CTA — "Order now", "Join now", "Add to order"

**Secondary (Outlined Green)**
- Background: transparent
- Text: `#00704a`
- Border: 1px solid `#00704a`
- Radius: 9999px (pill)
- Padding: 12px 24px
- Font: 14px / 600 / SoDo Sans, letter-spacing 0.3px
- Hover: background `rgba(0,112,74,0.06)`, border `#1e3932`, text `#1e3932`
- Use: Secondary action paired with a filled primary — "Sign in", "Learn more"

**Tertiary / Text Link**
- Background: none
- Text: `#00704a`
- Border: none, with `text-decoration: underline` on hover
- Padding: 8px 12px
- Font: 14px / 600 / SoDo Sans
- Use: Low-emphasis inline action

**Dark Surface (Filled White)**
- Background: `#ffffff`
- Text: `#00704a`
- Border: none
- Radius: 9999px
- Padding: 12px 24px
- Font: 14px / 600 / SoDo Sans
- Use: Primary CTA placed on a deep-forest (`#1e3932`) or photographic dark section

**Rewards / Gold**
- Background: `#cba258`
- Text: `#1e3932`
- Border: none
- Radius: 9999px
- Padding: 12px 24px
- Font: 14px / 700 / SoDo Sans
- Use: Loyalty / Rewards-specific CTA ("Join Starbucks Rewards")

### Inputs

**Text Field (Default)**
- Background: `#ffffff`
- Text: `#1e1e1e`
- Border: 1px solid `#8c8c8c`
- Radius: 4px
- Padding: 14px 16px
- Font: 16px / 400 / SoDo Sans
- Label: floating/top label, 12px / 600 / `#4a4a4a`
- Placeholder: `#8c8c8c`
- Focus: 2px solid `#00704a`, subtle `0 0 0 3px rgba(0,112,74,0.15)` focus ring
- Use: Standard form input (account, store search, checkout)

**Text Field (Error)**
- Border: 2px solid `#e75b52`
- Helper text: `#e75b52`, 12px / 400, below field
- Use: Validation failure — paired with one specific, actionable message

**Search Field**
- Background: `#f2f0eb`
- Border: none
- Radius: 9999px (pill, matching button language)
- Padding: 12px 20px, leading search icon `#6b6b6b`
- Font: 16px / 400 / SoDo Sans
- Use: Store locator, menu search

### Cards

**Standard Product Card**
- Background: `#ffffff`
- Border: 1px solid `#e8e8e8`
- Radius: 16px
- Padding: 0 (image flush to top corners) then 16px content padding
- Shadow: `0 2px 8px rgba(30,57,50,0.08)`
- Image: top, full-bleed, matching top radius
- Use: Menu item, product, promotional tile

**Editorial / Feature Card**
- Background: `#f1f8f4`
- Border: none
- Radius: 20px
- Padding: 32px
- Shadow: none — flat warm surface
- Use: Story blocks, "what's new", campaign features

**Rewards Card**
- Background: `linear-gradient(135deg, #00704a, #1e3932)`
- Text: `#ffffff`, star icon `#cba258`
- Radius: 16px
- Padding: 24px
- Shadow: `0 4px 16px rgba(30,57,50,0.18)`
- Use: Loyalty balance, star count, reward progress

### Badges / Tags

**Status (New / LTO)**
- Background: `#00704a`
- Text: `#ffffff`
- Radius: 9999px
- Padding: 4px 12px
- Font: 11px / 700 / SoDo Sans, letter-spacing 0.4px, uppercase
- Use: "NEW", "LIMITED TIME"

**Rewards (Gold)**
- Background: `#cba258`
- Text: `#1e3932`
- Radius: 9999px
- Padding: 4px 12px
- Font: 11px / 700 / SoDo Sans, uppercase
- Use: Star earnings, member-exclusive markers

**Subtle (Tinted)**
- Background: `#d4e9e2`
- Text: `#00704a`
- Radius: 9999px
- Padding: 4px 12px
- Font: 11px / 600 / SoDo Sans
- Use: Category labels, dietary tags ("Vegan", "New")

### Navigation

**Top Nav Bar**
- Background: `#ffffff`
- Height: 72px
- Border-bottom: 1px solid `#e8e8e8`
- Logo: circular siren mark, `#00704a`, ~48px
- Links: `#1e1e1e`, 14px / 600, hover underline in `#00704a`
- Right CTAs: "Sign in" (outlined pill) + "Join now" (filled green pill)
- Use: Desktop primary navigation — sticky on scroll

**Footer**
- Background: `#1e3932` (deep forest) or `#000000`
- Text: `#ffffff` headings, `#d4d4d4` links
- Link hover: underline, `#ffffff`
- Use: Global footer — dark, generous, multi-column

### Toasts / Alerts

**Default Toast**
- Background: `#1e3932`
- Text: `#ffffff`
- Border: none
- Radius: 8px
- Padding: 14px 18px
- Shadow: `0 6px 20px rgba(30,57,50,0.25)`
- Font: 14px / 600 / SoDo Sans
- Use: Transient confirmation ("Added to your order")

**Inline Success Banner**
- Background: `#d4e9e2`
- Text: `#00704a`
- Border-left: 4px solid `#00704a`
- Radius: 8px
- Padding: 12px 16px
- Use: Persistent success / informational message

### Dialogs / Modals

**Centered Modal**
- Background: `#ffffff`
- Text: `#1e1e1e`
- Border: none
- Radius: 16px
- Padding: 32px
- Shadow: `0 12px 40px rgba(30,57,50,0.24)`
- Scrim: `rgba(30,57,50,0.6)` (green-tinted)
- Use: Confirmation, store selection, account prompts

### Toggles

**Switch**
- Track: `#00704a` (on) / `#d4d4d4` (off)
- Thumb: `#ffffff` 20px circle, `0 1px 3px rgba(0,0,0,0.2)`
- Radius: 9999px
- Use: Preference settings, notification opt-ins


**Tier 1 sources:** https://www.starbucks.com (live production site, verified via live DOM getComputedStyle).

## 5. Layout Principles

### Spacing System
- Base unit: 4px; primary rhythm on 8px
- Common values: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px
- Section vertical padding: 64–96px on desktop — generous, unhurried
- Card content padding: 16–32px

### Grid & Container
- Max content width: 1280px, centered
- Desktop grid: 12 columns, 24px gutters
- Horizontal page padding: 24px mobile, 48px desktop
- Product grids: 2 cols mobile → 3 cols tablet → 4 cols desktop

### Whitespace Philosophy
- **Premium = space**: Generous margins around photography and CTAs signal craft and quality. Crowding reads as discount.
- **Photography-led**: Layouts are built around large appetizing imagery; copy and CTAs sit in the negative space the photo leaves.
- **Alternating warmth**: Sections alternate between warm white (`#f1f8f4`) and pure-ish white (`#fafafa`) to create rhythm without hard dividers.

### Border Radius Scale
- Pill (9999px): Buttons, badges, search fields, toggles, chips — the signature shape
- Comfortable (16px): Standard cards, modals, image containers
- Large (20px): Feature/editorial cards
- Compact (4-8px): Text inputs, toasts, inline banners

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (0) | No shadow | Page sections, warm flat editorial cards |
| Subtle (1) | `0 2px 8px rgba(30,57,50,0.08)` | Product cards, list items |
| Standard (2) | `0 4px 16px rgba(30,57,50,0.12)` | Hover-raised cards, sticky nav on scroll |
| Elevated (3) | `0 6px 20px rgba(30,57,50,0.25)` | Toasts, dropdowns, popovers |
| Modal (4) | `0 12px 40px rgba(30,57,50,0.24)` | Dialogs, bottom sheets |

**Shadow Philosophy**: Shadows are tinted with the deep-forest green (`rgba(30,57,50,...)`) rather than pure black. This keeps elevation feeling warm and on-brand — even depth carries the green. Elevation is used sparingly; the primary tools for hierarchy are whitespace, warm surface layering, and photography, not heavy shadows.

### Blur Effects
- Sticky nav applies a subtle backdrop blur (`backdrop-filter: blur(8px)`) with a translucent white background on scroll.
- Photographic hero overlays use a bottom-up green gradient rather than blur for text legibility.

## 7. Do's and Don'ts

### Do
- Use House Green (`#00704a`) as the singular primary action and brand color
- Use fully-rounded pill buttons (`border-radius: 9999px`) — it is the signature shape
- Use warm off-white backgrounds (`#f1f8f4`, `#fafafa`) instead of clinical pure white
- Let large, appetizing photography lead the layout; let copy live in negative space
- Tint shadows and scrims with deep forest green (`rgba(30,57,50,...)`)
- Use SoDo Sans for UI; reserve Lander/Pike for editorial and wayfinding moments
- Keep generous whitespace (64–96px section padding) to read premium
- Use gold (`#cba258`) exclusively for Rewards / loyalty surfaces

### Don't
- Don't introduce a foreign accent color (blue, purple) for primary actions — green is the sole brand hue
- Don't use sharp-cornered buttons — pills are the brand
- Don't use pure black scrims or shadows — always green-tinted
- Don't crowd CTAs or photography; density reads as cheap
- Don't substitute a cold geometric sans for SoDo Sans
- Don't use gold for anything other than Rewards/loyalty
- Don't use tight line-height on body copy — the brand is unhurried (1.5+)
- Don't mix all three typefaces inside a single component

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <768px | Single-column, full-width photos, hamburger nav, sticky bottom CTA |
| Tablet | 768–1024px | 2–3 column product grids, expanded nav |
| Desktop | >1024px | 4-column grids, full top nav, 1280px max content width |

### Touch Targets
- Buttons: minimum 44px height (48px preferred on mobile)
- Nav and list items: minimum 48px tap height
- Icon buttons: 44×44px minimum hit area

### Collapsing Strategy
- Top nav collapses to a hamburger menu + persistent siren logo and "Sign in" on mobile
- Multi-column footer stacks into accordion sections on mobile
- Product grids reflow 4 → 3 → 2 → 1 columns down the breakpoints
- Sticky bottom "Order now" CTA bar appears on mobile menu/product flows

### Image Behavior
- Hero photography: full-bleed, art-directed crops per breakpoint, bottom green gradient for text legibility
- Product images: square (1:1) within rounded cards, lazy-loaded
- Siren logo: scales 32–48px, always circular, never recolored off House Green

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: House Green (`#00704a`)
- CTA Hover: Deep Forest (`#1e3932`)
- Accent Green: Spring Green (`#00a862`)
- Background: Warm White (`#f1f8f4`) / `#fafafa`
- Dark Surface: Deep Forest (`#1e3932`)
- Heading text: Warm Charcoal (`#1e1e1e`)
- Body text: Body Gray (`#4a4a4a`)
- Caption text: Secondary Gray (`#6b6b6b`)
- Placeholder: Disabled Gray (`#8c8c8c`)
- Border: Border Gray (`#d4d4d4`)
- Rewards / Loyalty: Gold (`#cba258`)
- Success: `#00754a` · Error: `#e75b52` · Warning: `#cba258`

### Example Component Prompts
- "Create a primary button: House Green `#00704a` background, white text, SoDo Sans 14px weight 600 with 0.3px letter-spacing, fully-rounded pill (`border-radius: 9999px`), 12px 24px padding, 44px min-height. Hover: background `#1e3932`."
- "Build a product card: white bg, 1px `#e8e8e8` border, 16px radius, top full-bleed square image, 16px content padding. Title SoDo Sans 18px weight 600 `#1e1e1e`, price 16px weight 700, green pill 'Add' button. Shadow `0 2px 8px rgba(30,57,50,0.08)`."
- "Design a Rewards card: gradient `linear-gradient(135deg, #00704a, #1e3932)`, white text, gold `#cba258` star icon, 16px radius, 24px padding, star count 28px weight 700. Shadow `0 4px 16px rgba(30,57,50,0.18)`."
- "Create a hero section: full-bleed coffee photography, bottom green gradient `linear-gradient(rgba(0,0,0,0), rgba(30,57,50,0.7))`, headline in Lander serif 48px white, white-filled pill CTA with `#00704a` text."
- "Design a text input: white bg, 1px `#8c8c8c` border, 4px radius, 14px 16px padding, SoDo Sans 16px. Focus: 2px `#00704a` border + `0 0 0 3px rgba(0,112,74,0.15)` ring. Floating label 12px weight 600 `#4a4a4a`."

### Iteration Guide
1. House Green `#00704a` is the only primary action color — never introduce blue/purple
2. Buttons, badges, chips, search, toggles are all pills (`border-radius: 9999px`)
3. Backgrounds are warm off-whites (`#f1f8f4` / `#fafafa`), not pure white
4. Shadows and scrims are deep-forest-tinted (`rgba(30,57,50,...)`)
5. SoDo Sans for UI; Lander serif and Pike condensed only for hero/editorial/wayfinding
6. Gold `#cba258` belongs to Rewards only
7. Be generous with whitespace — premium reads as space; let photography lead

## 10. Voice & Tone

Starbucks speaks like a warm, knowledgeable barista who genuinely wants your day to be better — friendly, welcoming, never corporate, never pushy. Copy is conversational and human ("Let's get you to your nearest store"), uses contractions, and leads with the customer's moment rather than the product spec. It celebrates ritual and small joys. It is inclusive and warm without being saccharine.

| Context | Tone |
|---|---|
| CTAs | Inviting, action-forward ("Order now", "Join now", "Find a store") |
| Success messages | Warm, affirming ("Your order's on the way", "You've earned 25 Stars") |
| Error messages | Gentle, specific, never blaming ("We couldn't find that store — try another zip code") |
| Onboarding | Welcoming second-person, one idea per screen, celebrates joining |
| Rewards | Celebratory, generous, makes the customer feel rewarded ("Treat yourself — you've earned it") |
| Empty states | Encouraging, suggests a next step ("No orders yet — let's find your favorite") |
| Legal / disclosure | Plain, clear, respectful — never hidden, never dense legalese where avoidable |

**Forbidden phrases.** Avoid cold corporate language ("Submit", "Error occurred", "Invalid input"), pushy hard-sell ("Buy now or miss out"), and anything that breaks the warm-third-place feeling. Prefer "Order" over "Purchase", "Join" over "Register", "We couldn't…" over "Failure".

## 11. Brand Narrative

Starbucks was founded in **1971 in Seattle's Pike Place Market** — the Pike typeface and SoDo Sans both carry the company's home geography in their names. The original store sold coffee beans; the modern company was shaped by **Howard Schultz**, who returned from a trip to Italy convinced that America needed the espresso bar as a social institution. From that came the brand's central idea: the **"third place"** — a welcoming space between home and work where anyone can sit, connect, and feel at home over a cup of coffee.

The visual identity has refined steadily toward that idea. The **Siren** — the twin-tailed mermaid — anchors the logo, rendered in House Green; over successive redesigns she shed her surrounding wordmark ring to become a confident, standalone mark, signaling a brand so recognizable it no longer needs to spell its name. The green itself has become cultural shorthand for "coffee" the way few colors own a category.

Digitally, Starbucks runs one of the most successful loyalty programs in retail — **Starbucks Rewards** — whose stars, gold tier, and mobile order-ahead reshaped how the entire quick-service industry thinks about app-driven loyalty. The design system therefore carries two jobs at once: express the warm, premium, crafted third-place feeling, and power a high-frequency transactional app where ordering must be fast, clear, and rewarding.

What Starbucks refuses: the cold efficiency of pure-tech interfaces, discount-retail crowding, and trend-chasing. It chooses warmth, restraint, generous space, and a single iconic green held steady across decades.

## 12. Principles

1. **One green, held steady.** House Green `#00704a` is the brand. It carries primary action, identity, and accent. Foreign hues dilute fifty years of equity — resist them.
2. **Warmth over clinical.** Surfaces are warm off-whites; shadows and scrims are green-tinted; type is humanist. Nothing reads cold or sterile. The interface should feel like the inside of the cup.
3. **Photography leads, UI serves.** The product is the desire. Layouts are built around appetizing imagery; chrome recedes so the coffee can be wanted.
4. **Pills everywhere.** The fully-rounded shape is a brand signature. Buttons, badges, chips, search, toggles — round them. Sharp corners feel like a different company.
5. **Premium is space.** Generous whitespace is not wasted; it is the signal of craft and quality. When in doubt, add room, not content.
6. **Reward generously.** Loyalty surfaces (gold `#cba258`, stars, tiers) celebrate the customer. The tone of Rewards is "you've earned this", never transactional.
7. **Crafted, not templated.** Three proprietary typefaces with distinct jobs, art-directed photography, and warm palette layering make every surface feel made, not assembled.
8. **Fast where it counts.** Behind the warmth is a high-frequency ordering app. Order, pay, and reward flows must be unambiguous and quick — warmth never costs clarity at checkout.

## 13. Personas

*Personas below are fictional archetypes informed by publicly described Starbucks customer segments, not individual people.*

**Maya, 26, Chicago.** Marketing coordinator who order-aheads a venti oat milk latte five mornings a week on her commute. Lives in the app's Order tab; expects her favorites to be one tap away and her stars to update instantly. Knows exactly how many stars until her next free drink. If mobile order-ahead is slow or her usual store isn't pre-selected, she's annoyed before 9am. The app is a daily ritual utility for her, not a place to browse.

**David, 41, Austin.** Works from coffee shops two or three days a week — Starbucks is his rotating office. Uses the store locator constantly to find a location with seating and wifi near his next meeting. Values the "third place" promise literally. Browses the menu occasionally for new seasonal drinks, reads the story/editorial content, and appreciates that the brand feels consistent and warm wherever he is.

**Priya, 19, Seattle.** College student and Rewards power-user who games the program — Double Star Days, app-exclusive offers, personalized challenges. Treats Stars like a points game and screenshots her gold tier. Highly responsive to celebratory, generous loyalty copy; turned off by anything that feels like a cold corporate upsell. Discovers limited-time drinks through the app and social, then orders ahead to skip the line.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no orders)** | Warm single line of `#4a4a4a` body copy ("No orders yet — let's find your favorite") plus a green pill CTA. Encouraging, never blank. |
| **Empty (search)** | `#6b6b6b` caption ("We couldn't find that — try a different search"), gentle and specific. No illustration of failure. |
| **Loading (first paint)** | Skeleton blocks at `#f2f0eb` (warm gray) matching final layout; product images as rounded skeleton tiles. Subtle 1.2s shimmer. |
| **Loading (action)** | In-button spinner in white on the green pill; button width preserved, label hidden, no double-submit. |
| **Error (inline field)** | 2px `#e75b52` border on input, helper text below in `#e75b52`, one specific actionable sentence. |
| **Error (toast)** | `#1e3932` background, white 14px text, 8px radius, 3s auto-dismiss, bottom of screen. Warm phrasing. |
| **Error (blocking)** | Reserved for outage/network. Centered warm message in `#1e1e1e` 18px weight 600, green pill retry button below. |
| **Success (added to order)** | `#1e3932` toast ("Added to your order") + cart badge count increments with a brief scale pulse. |
| **Success (stars earned)** | Celebratory moment — gold `#cba258` star animates in, "+25 Stars" counts up, Rewards card balance updates. This is intentionally delightful. |
| **Disabled** | Button background `#d4d4d4`, text `#8c8c8c`. Inputs keep `#d4d4d4` border so geometry stays stable if re-enabled. |
| **Selected (store/option)** | 2px `#00704a` border + `#f1f8f4` fill + green check icon. Clear, warm affirmation of choice. |

## 15. Motion & Easing

**Durations** (named):

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Checkbox/toggle state, reduced-motion fallback |
| `motion-fast` | 150ms | Hover, focus, button press, small reveals |
| `motion-standard` | 250ms | Default — card hover-raise, dropdown, tab switch |
| `motion-emphasis` | 400ms | Modal entrance, Rewards star earn, success moments |
| `motion-page` | 350ms | Route/screen transitions |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Things appearing — modals, toasts, sheets |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Things leaving — dismissals |
| `ease-standard` | `cubic-bezier(0.4, 0.0, 0.2, 1)` | Two-way — hovers, tabs, expand/collapse |
| `ease-celebrate` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Reserved for Rewards / stars-earned — a small joyful overshoot. Nowhere else. |

**Signature motions.**

1. **Card hover-raise.** Product cards lift on hover — `transform: translateY(-4px)` with shadow growing from Level 1 to Level 2 over `motion-standard / ease-standard`. Warm, gentle, premium.
2. **Stars earned.** When stars are awarded, the gold star scales in with `ease-celebrate` overshoot over `motion-emphasis`, and the count rolls up. This is the one place playful spring motion is licensed — loyalty should feel rewarding.
3. **Add-to-order.** The cart badge increments with a brief scale pulse (`scale 1 → 1.2 → 1` over `motion-fast`) so the action is felt, paired with the confirmation toast.
4. **Modal & sheet entrance.** Modals fade + scale from 0.96 with `ease-enter` over `motion-emphasis`, green-tinted scrim fading in synchronously. Dismissal is faster via `ease-exit`.
5. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all tokens collapse to `motion-instant`; the celebratory star earn becomes a simple fade. The app stays warm and usable, just less kinetic.

<!--
OmD v0.1 Sources — Starbucks

Token grounding:
- Primary House Green #00704A confirmed via multiple brand-color references and
  Starbucks Creative Expression (creative.starbucks.com).
- Typography (SoDo Sans primary, Lander serif, Pike condensed) confirmed via
  creative.starbucks.com/typography and brand-guide summaries.
- Accent Spring Green (#00a862), Deep Forest / House Black-Green (#1e3932),
  warm whites, and Rewards gold (#cba258) are widely documented Starbucks
  palette values used across web and app surfaces.

Web search (2026-06-06):
- creative.starbucks.com/typography/ (typefaces)
- usbrandcolors.com/starbucks-colors, brandpalettes.com, colorswall.com/color/00704a
  (hex confirmation for #00704A)
- mobbin.com/colors/brand/starbucks (palette + UI references)

Component geometry (pill buttons 9999px radius, 16px cards, green-tinted shadows)
and interaction patterns are editorial readings of Starbucks' live web/app
surfaces and Rewards program design language, not verbatim spec-doc claims.

Personas (§13) are fictional archetypes informed by publicly described
Starbucks customer segments. Any resemblance to specific individuals is unintended.
-->
