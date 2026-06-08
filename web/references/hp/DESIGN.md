---
id: hp
name: HP
country: US
category: consumer-tech
homepage: "https://www.hp.com"
primary_color: "#0096D6"
logo:
  type: simpleicons
  slug: "hp"
verified: "2026-06-06"
added: "2026-06-06"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#0096d6"
    primary-hover: "#0073a8"
    primary-pressed: "#005c87"
    primary-light: "#e6f4fb"
    electric-blue: "#0278ab"
    ink: "#212121"
    canvas: "#ffffff"
    grey-50: "#f7f7f7"
    grey-100: "#eeeeee"
    border: "#e0e0e0"
    border-strong: "#cccccc"
    placeholder: "#9e9e9e"
    caption: "#767676"
    body: "#595959"
    emphasis: "#404040"
    success: "#0c7d2f"
    error: "#d32f2f"
    warning: "#f5a623"
  typography:
    family: { sans: "Forma DJR UI", mono: "SF Mono" }
    display-hero: { size: 48, weight: 700, lineHeight: 1.17, tracking: -0.5, use: "Marketing hero headlines" }
    body:         { size: 16, weight: 400, lineHeight: 1.5, use: "Standard reading text, inputs" }
    button:       { size: 16, weight: 600, use: "Button label" }
    label:        { size: 13, weight: 600, use: "Input labels, captions" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 4, md: 4, lg: 8, full: 9999 }
  shadow:
    flat: "none"
  components:
    button-primary: { type: button, bg: "#0096d6", fg: "#ffffff", radius: 4, padding: "12px 24px", font: "16px weight 600", use: "Primary CTA, 44px min-height" }
    button-secondary: { type: button, bg: "#ffffff", fg: "#0096d6", radius: 4, padding: "12px 24px", font: "16px weight 600", use: "Outlined secondary, 1.5px blue border" }
    button-tertiary: { type: button, bg: "#ffffff", fg: "#0096d6", radius: 4, padding: "12px 8px", use: "Low-emphasis text action, underline on hover" }
    button-dark: { type: button, bg: "#ffffff", fg: "#212121", radius: 4, padding: "12px 24px", use: "CTA on imagery / dark hero" }
    button-danger: { type: button, bg: "#d32f2f", fg: "#ffffff", radius: 4, padding: "12px 24px", use: "Destructive confirmation" }
    input-default: { type: input, bg: "#ffffff", fg: "#212121", radius: 4, padding: "12px 14px", font: "16px weight 400", use: "Standard form input, grey border" }
    input-error: { type: input, bg: "#ffffff", fg: "#212121", radius: 4, padding: "12px 14px", use: "Validation failure, red border" }
    input-search: { type: input, bg: "#f7f7f7", fg: "#212121", radius: 8, padding: "10px 16px", use: "Header product search, rounded" }
  components_harvested: true
---

# Design System Inspiration of HP

## 1. Visual Theme & Atmosphere

HP is one of the founding companies of Silicon Valley, and its digital surfaces carry that legacy with a deliberate, engineered calm. The hp.com experience opens on bright white (`#ffffff`) with near-black text (`#212121`) and a single, unmistakable accent: **HP Blue** (`#0096D6`) — a clean, confident cyan-leaning blue that has been the brand's signature since 2012. The atmosphere is precise but approachable: lots of air, generous photography of hardware (laptops, printers, monitors), and a restrained interface that lets the products themselves be the color.

HP's identity is built on the idea of **human-centered technology that recedes** — the design should never compete with the device on screen. Where consumer-tech rivals lean into gradients and neon, HP stays flat, optical, and trustworthy. The 2024–2025 brand evolution introduced a brighter **HP Electric Blue** for marketing energy, but the working digital primary remains the classic `#0096D6`, paired with the four-letter lowercase logo locked inside a perfect circle.

The typographic voice is **Forma DJR**, a contemporary grotesque commissioned from type designer David Jonathan Ross. Its `Forma DJR UI` and `Forma DJR Office` cuts were engineered specifically for screen and document legibility — tall x-height, open apertures, and a slightly humanist warmth that softens an otherwise corporate-precise system. The result is a brand that feels both established (a 1939 garage-startup heritage) and current.

**Key Characteristics:**
- HP Blue (`#0096D6`) as the sole interactive accent — links, CTAs, focus, selection
- Forma DJR type family (DJR UI for screen, DJR Office for documents) — humanist grotesque
- Bright white canvas (`#ffffff`) with near-black text (`#212121`) — high-contrast, product-forward
- Sentence case as the default for headlines and UI copy — approachable, not shouting
- Type is black or white only; HP Blue carries interaction, never decorative body text
- Flat, low-shadow surfaces — hardware photography supplies the visual richness
- Generous whitespace and a clean 8px-derived spacing rhythm

## 2. Color Palette & Roles

### Primary
- **HP Blue** (`#0096D6`): The brand-defining cyan-blue (PMS 2925 C). Primary interactive color — CTAs, links, active states, focus rings, selection. Stable since 2012.
- **HP Blue Dark** (`#0073A8`): Hover/pressed state for `#0096D6` elements. Roughly 18% darker.
- **HP Blue Light** (`#E6F4FB`): Informational tints, selected-row backgrounds, subtle blue surfaces.
- **HP Electric Blue** (`#0278AB`): The intensified marketing blue introduced in the 2025 refresh (Pantone 2132). Energetic campaign moments; not the default UI blue.

### Neutral / Ink
- **Near Black** (`#212121`): `ink900`. Primary heading and body text. HP's "black" is a soft near-black, never pure `#000`.
- **Pure White** (`#ffffff`): `background`, `surface`. Page background and card surfaces.
- **Grey 50** (`#f7f7f7`): Lightest section fill, alternating bands, app shell background.
- **Grey 100** (`#eeeeee`): Card fills, disabled surfaces, table zebra rows.
- **Grey 200** (`#e0e0e0`): Default border, dividers, input outlines.
- **Grey 300** (`#cccccc`): Strong borders, active input outline.
- **Grey 500** (`#9e9e9e`): Placeholder text, disabled icons.
- **Grey 600** (`#767676`): Caption and secondary label text (WCAG-AA on white).
- **Grey 700** (`#595959`): Body text on light surfaces, metadata.
- **Grey 800** (`#404040`): Emphasized body, sub-headings.

### Semantic
- **Success Green** (`#0c7d2f`): Order confirmed, in-stock, positive status.
- **Error Red** (`#d32f2f`): Errors, destructive actions, out-of-stock, form validation.
- **Warning Amber** (`#f5a623`): Low-stock, pending, attention-needed states.
- **Info Blue** (`#0096D6`): Informational banners reuse HP Blue with the light tint backdrop.

### Surface & Borders
- **Border Default**: `#e0e0e0` (grey200). Cards, inputs, dividers.
- **Border Strong**: `#cccccc` (grey300). Active inputs, emphasized separators.
- **Overlay Scrim**: `rgba(33,33,33,0.6)`. Modal/drawer backdrop.

### Color Rules
- HP Blue is interaction. It never colors plain paragraph text or decorative rules.
- Per HP brand guidelines, foreground type is **black or white only** within a single layout — no mixed-color text. Color lives in the photography and the blue accent.

## 3. Typography Rules

### Font Family
- **Primary (screen/UI)**: `"Forma DJR UI", "Forma DJR Display", "HP Simplified", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`
- **Documents/Long-form**: `"Forma DJR Office", "Forma DJR Text", Georgia-fallback-free, sans-serif`
- **Monospace**: `"SF Mono", SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace`
- **Legacy fallback**: `HP Simplified` (the prior brand font) ships as a fallback on properties not yet migrated to Forma DJR.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Forma DJR UI | 48px | 700 | 56px (1.17) | -0.5px | Marketing hero headlines |
| Display Large | Forma DJR UI | 36px | 700 | 44px (1.22) | -0.25px | Section heroes, key metrics |
| Heading 1 | Forma DJR UI | 28px | 700 | 36px (1.29) | normal | Page titles |
| Heading 2 | Forma DJR UI | 22px | 600 | 30px (1.36) | normal | Feature titles, modal headers |
| Heading 3 | Forma DJR UI | 18px | 600 | 26px (1.44) | normal | Card headings, sub-sections |
| Subtitle | Forma DJR UI | 16px | 600 | 24px (1.50) | normal | Navigation titles, list headers |
| Body Large | Forma DJR UI | 16px | 400 | 26px (1.63) | normal | Lead descriptions |
| Body | Forma DJR UI | 14px | 400 | 22px (1.57) | normal | Standard reading text |
| Body Small | Forma DJR UI | 13px | 400 | 20px (1.54) | normal | Secondary information |
| Caption | Forma DJR UI | 12px | 400 | 18px (1.50) | 0.2px | Timestamps, legal, fine print |
| Button | Forma DJR UI | 16px | 600 | 1.0 | 0.2px | CTA label |

### Principles
- **Sentence case by default.** HP guidelines mandate sentence case for display copy — titles, subtitles, and UI labels — for an approachable, consistent read. Avoid ALL CAPS except small eyebrow labels.
- **Three working weights.** Forma DJR ships many weights; the UI uses 400 (body), 600 (emphasis/buttons), and 700 (headings). Restraint over variety.
- **Black or white text only.** Within a layout, type is one ink color — never blue, never multi-color paragraphs. Blue is reserved for interactive text.
- **Humanist grotesque legibility.** Forma DJR's open apertures and tall x-height carry small UI sizes (12–14px) cleanly; do not condense or letterspace body copy.

## 4. Component Stylings

### Buttons

HP buttons are rectangular with a soft radius, full-weight labels, and a clear primary/secondary/tertiary hierarchy. HP Blue is the primary fill.

**Primary**
- Background: `#0096D6`
- Text: `#ffffff`
- Border: none
- Radius: 4px
- Padding: 12px 24px
- Font: 16px / 600 / Forma DJR UI
- Min-height: 44px
- Hover: background `#0073A8`
- Pressed: background `#005C87`
- Disabled: background `#cccccc`, text `#767676`
- Use: Primary CTA (Add to cart, Buy now, Continue)

**Secondary (Outline)**
- Background: `#ffffff`
- Text: `#0096D6`
- Border: 1.5px solid `#0096D6`
- Radius: 4px
- Padding: 12px 24px
- Font: 16px / 600 / Forma DJR UI
- Hover: background `#E6F4FB`
- Use: Secondary action paired with a Primary on the same screen

**Tertiary (Text)**
- Background: transparent
- Text: `#0096D6`
- Border: none
- Radius: 4px
- Padding: 12px 8px
- Font: 16px / 600 / Forma DJR UI, underline on hover
- Use: Low-emphasis inline action (Learn more, View details)

**Dark (On-image / On-dark)**
- Background: `#ffffff`
- Text: `#212121`
- Border: none
- Radius: 4px
- Padding: 12px 24px
- Font: 16px / 600 / Forma DJR UI
- Use: CTA placed on hardware photography or dark hero banners

**Danger**
- Background: `#d32f2f`
- Text: `#ffffff`
- Border: none
- Radius: 4px
- Padding: 12px 24px
- Font: 16px / 600 / Forma DJR UI
- Use: Destructive confirmation (Remove from cart, Cancel order)

Sizes (height · font · padding): `small` 36px · 14px · 8px 16px; `medium` (default) 44px · 16px · 12px 24px; `large` 52px · 16px · 16px 32px. Pill variant uses radius 9999px for filter chips only.

### Inputs

**Default**
- Background: `#ffffff`
- Text: `#212121`
- Border: 1px solid `#cccccc`
- Radius: 4px
- Padding: 12px 14px
- Font: 16px / 400 / Forma DJR UI
- Placeholder: `#9e9e9e`
- Focus: border `#0096D6`, 2px focus ring `rgba(0,150,214,0.3)`
- Label: 13px / 600 / `#595959`, above the field
- Use: Standard form input

**Error**
- Background: `#ffffff`
- Text: `#212121`
- Border: 1px solid `#d32f2f`
- Radius: 4px
- Padding: 12px 14px
- Font: 16px / 400 / Forma DJR UI
- Help text below: `#d32f2f` 13px
- Use: Validation failure state

**Search (rounded)**
- Background: `#f7f7f7`
- Text: `#212121`
- Border: 1px solid transparent
- Radius: 24px
- Padding: 10px 16px 10px 40px (left icon)
- Use: Global product search in the header

### Cards

**Product Card**
- Background: `#ffffff`
- Border: 1px solid `#e0e0e0`
- Radius: 8px
- Padding: 16px
- Shadow: none (rests on grey50 bands) → `0 4px 12px rgba(0,0,0,0.10)` on hover
- Use: Product grid item — image, name (16px/600), price, rating, CTA

**Content Card**
- Background: `#ffffff`
- Border: none
- Radius: 8px
- Padding: 24px
- Shadow: `0 2px 8px rgba(0,0,0,0.08)`
- Use: Promotional / editorial card on the home and support pages

**Flat Tile**
- Background: `#f7f7f7`
- Border: none
- Radius: 8px
- Padding: 20px
- Shadow: none
- Use: Category navigation tile, support topic tile

### Badges

**Promo (Fill)**
- Background: `#0096D6`
- Text: `#ffffff`
- Radius: 4px
- Padding: 3px 8px
- Font: 12px / 700 / Forma DJR UI
- Use: "New", "Featured"

**Sale (Fill)**
- Background: `#d32f2f`
- Text: `#ffffff`
- Radius: 4px
- Padding: 3px 8px
- Font: 12px / 700 / Forma DJR UI
- Use: Discount / sale flag

**Stock (Weak)**
- Background: `#e6f4d9` (success tint)
- Text: `#0c7d2f`
- Radius: 4px
- Padding: 3px 8px
- Font: 12px / 600 / Forma DJR UI
- Use: "In stock" status

**Neutral (Weak)**
- Background: `#eeeeee`
- Text: `#595959`
- Radius: 4px
- Padding: 3px 8px
- Font: 12px / 600 / Forma DJR UI
- Use: Metadata, category label

### Tabs

**Underline Tab**
- Background: `#ffffff`
- Text (inactive): `#595959`
- Text (active): `#212121`
- Indicator: 2px bottom border `#0096D6`
- Font: 16px / 600 / Forma DJR UI
- Padding: 12px 16px
- Use: Product detail sections (Overview / Specs / Reviews)

### Toasts / Notifications

**Inline Banner**
- Background: `#E6F4FB` (info) / `#e6f4d9` (success) / `#fdecea` (error)
- Border-left: 4px solid the matching semantic color
- Text: `#212121` 14px
- Radius: 4px
- Padding: 12px 16px
- Use: Page-level status (cart updated, order placed, validation summary)

### Dialogs

**Modal**
- Background: `#ffffff`
- Radius: 8px
- Padding: 24px
- Shadow: `0 8px 24px rgba(0,0,0,0.16)`
- Scrim: `rgba(33,33,33,0.6)`
- Title: 22px / 600 / `#212121`
- Use: Confirmation, quick-view, configuration dialogs

### Toggles

**Switch**
- Background: `#0096D6` (on) / `#cccccc` (off)
- Radius: 9999px
- Thumb: `#ffffff` 18px circle, `0 1px 2px rgba(0,0,0,0.2)`
- Use: Boolean settings, compare toggles


**Tier 1 sources:** https://www.hp.com (live production site, verified via live DOM getComputedStyle).

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Common values: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px
- Section vertical rhythm: 48–64px between major page bands
- Card internal padding: 16–24px

### Grid & Container
- Max content width: 1280px, centered
- Desktop: 12-column grid, 24px gutters, 32px outer margins
- Product grids: 4 columns (desktop) → 2 (tablet) → 1 (mobile)
- Generous outer margins keep hardware photography from touching viewport edges

### Whitespace Philosophy
- **Let the hardware breathe.** Product imagery gets surrounding negative space so devices read as hero objects, not catalog thumbnails.
- **Banded sections.** The page alternates `#ffffff` and `#f7f7f7` full-width bands to chunk content without borders.
- **Quiet density on support/specs.** Marketing pages are spacious; specification tables and support docs become denser and more utilitarian.

### Border Radius Scale
- Sharp (4px): Buttons, inputs, badges, banners
- Soft (8px): Cards, tiles, modals
- Pill (9999px): Filter chips, toggles, search field

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (0) | No shadow | Page bands, flat tiles, inline elements |
| Subtle (1) | `0 2px 8px rgba(0,0,0,0.08)` | Content cards, resting product cards |
| Raised (2) | `0 4px 12px rgba(0,0,0,0.10)` | Product card hover, dropdowns |
| Floating (3) | `0 8px 24px rgba(0,0,0,0.16)` | Modals, mega-menu panels |
| Sticky header | `0 1px 4px rgba(0,0,0,0.08)` | Header shadow once scrolled |

**Shadow Philosophy**: HP uses shadows sparingly and neutrally. Depth is communicated mainly through background banding and 1px borders; shadows appear on hover and floating layers only. Pure black at low opacity keeps the system clinical and product-forward — no colored or brand-tinted shadows.

### Blur Effects
- Mega-menu and sticky header may apply a light backdrop blur over content on scroll.

## 7. Do's and Don'ts

### Do
- Use HP Blue (`#0096D6`) for every interactive element — links, buttons, focus, toggles, active tabs
- Keep foreground text black (`#212121`) or white only, per HP brand guidelines
- Write headlines and labels in sentence case
- Use Forma DJR with weights 400 / 600 / 700 only
- Give hardware photography surrounding whitespace; never crop devices to the edge
- Use 4px radius for controls, 8px for cards
- Reserve `#0073A8` for hover/pressed of the primary blue

### Don't
- Don't tint body text blue — blue means "interactive"
- Don't mix multiple text colors in one layout
- Don't use ALL CAPS for headlines (sentence case only)
- Don't apply heavy or colored drop shadows — rely on banding and borders
- Don't confuse HP Electric Blue (`#0278AB`, marketing) with the working UI blue (`#0096D6`)
- Don't use pure black (`#000`) — the brand ink is `#212121`
- Don't over-round controls; buttons stay at 4px, not pill, except filter chips

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <600px | Single column, hamburger nav, full-width CTAs |
| Tablet | 600–1024px | 2-column product grids, condensed header |
| Desktop | 1024–1280px | 3–4 column grids, mega-menu |
| Wide | >1280px | Content capped at 1280px, side margins grow |

### Touch Targets
- Buttons: minimum 44px height
- List/nav items: minimum 48px row height on mobile
- Icon buttons: 40px minimum tap area

### Collapsing Strategy
- Mega-menu collapses to an accordion drawer on mobile
- 4-up product grid reflows to 2-up (tablet) then 1-up (mobile)
- Specification tables become stacked key/value rows below tablet width
- Sticky "Add to cart" bar pins to the bottom on mobile product pages

### Image Behavior
- Hero product shots: responsive, maintain aspect ratio, never edge-crop the device
- Product thumbnails: square, contained on white, 1:1
- Logos / icons: 24–40px, consistent within context

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: HP Blue (`#0096D6`)
- CTA Hover: HP Blue Dark (`#0073A8`)
- Background: Pure White (`#ffffff`)
- Section band: Grey 50 (`#f7f7f7`)
- Heading text: Near Black (`#212121`)
- Body text: Grey 700 (`#595959`)
- Caption text: Grey 600 (`#767676`)
- Placeholder: Grey 500 (`#9e9e9e`)
- Border: Grey 200 (`#e0e0e0`)
- Success: Green (`#0c7d2f`)
- Error: Red (`#d32f2f`)
- Warning: Amber (`#f5a623`)

### Example Component Prompts
- "Create an HP product card: white bg, 1px #e0e0e0 border, 8px radius, 16px padding. Square product image on white. Name 16px/600 #212121, price 18px/700 #212121, star rating, primary 'Add to cart' button (#0096D6, white text, 4px radius, 44px tall). Hover: lift with 0 4px 12px rgba(0,0,0,0.10)."
- "Build an HP primary button: #0096D6 bg, white text, 16px/600 Forma DJR, 12px 24px padding, 4px radius, 44px min-height. Hover #0073A8, pressed #005C87, disabled #cccccc bg / #767676 text."
- "Design an HP form field: white bg, 1px #cccccc border, 4px radius, 12px 14px padding, 16px text. Label 13px/600 #595959 above. Focus: #0096D6 border + rgba(0,150,214,0.3) 2px ring. Error: #d32f2f border + red help text."
- "Create an HP hero band: full-width #f7f7f7, centered 1280px content, headline 48px/700 #212121 sentence case, body 16px/400 #595959, primary CTA #0096D6, hardware photo right with breathing room."
- "Design HP underline tabs: white bg, inactive #595959, active #212121 with 2px #0096D6 bottom indicator, 16px/600, 12px 16px padding."

### Iteration Guide
1. Use Forma DJR UI with system-sans fallbacks; weights 400 / 600 / 700 only
2. HP Blue `#0096D6` is the sole interactive accent — never decorative
3. Text is black (`#212121`) or white; sentence case for headlines
4. Controls 4px radius, cards 8px radius
5. Use grey50 banding + 1px borders for structure, shadows only on hover/float
6. Give product imagery generous whitespace; contained on white
7. Desktop max 1280px, 12-col / 24px gutters; reflow grids 4→2→1

## 10. Voice & Tone

HP speaks like a knowledgeable, optimistic guide — clear, confident, human, and free of jargon. The tagline lineage ("Keep Reinventing", "Let's create") frames technology as an enabler of human creativity, not a spec sheet. Copy is in **sentence case**, declarative, and benefit-led: it explains what the product lets you *do* before how it works.

| Context | Tone |
|---|---|
| CTAs | Short, action-first, sentence case (`Add to cart`, `Shop laptops`, `Learn more`) |
| Product headlines | Benefit-led, one idea (`Power through your day`), sentence case |
| Success messages | Plain past-tense confirmation (`Your order is confirmed`). No exclamation pile-ups. |
| Error messages | Specific, blameless, actionable (`Enter a valid email address`). Never `Oops`. |
| Support copy | Patient, step-by-step, second person (`Let's get your printer connected`) |
| Legal / specs | Precise, neutral, factual — utilitarian register for technical detail |
| Sustainability | Earnest, evidence-led — HP leans on recycled-material and carbon claims |

**Forbidden moves.** ALL-CAPS headlines, multi-color text in one layout, exclamation-heavy hype, jargon without payoff, and pure-black (`#000`) ink. Avoid "Oops" and faux-casual error apologies.

## 11. Brand Narrative

HP traces to a **1939 Palo Alto garage** where Bill Hewlett and Dave Packard built audio oscillators — the literal origin of the Silicon Valley founder myth. That heritage of practical, well-engineered hardware still anchors the brand: HP makes things people use to get work done. In 2015 the company split into **HP Inc.** (personal systems and printing — the consumer-facing hp.com) and Hewlett Packard Enterprise; this design system describes HP Inc.'s consumer surface.

The visual identity has been deliberately stable. **HP Blue `#0096D6`** has held since 2012, and the four-letter lowercase logo inside a circle — designed by Eight Inc. as a "future" mark — represents continuity and approachability. The 2024–2025 brand evolution refreshed the system with **Forma DJR** typography (replacing HP Simplified) and a brighter **Electric Blue** for campaign energy, while keeping the working digital blue intact. The thesis: technology that is **human-centered and quietly capable** — the device, not the chrome, is the hero.

What HP refuses: the cold institutional gray of legacy enterprise IT, the neon maximalism of gaming-first rivals (HP's OMEN sub-brand carries that energy separately), and decorative ornament that competes with product photography. HP's restraint *is* its statement — a brand confident enough to let a laptop on white speak for itself.

## 12. Principles

1. **The product is the hero.** Interface chrome recedes; hardware photography and whitespace carry the visual weight. Never let UI ornament out-shout the device.
2. **Blue is interaction, not decoration.** `#0096D6` appears only where the user can act. Headlines, rules, and illustration never borrow it.
3. **One ink per layout.** Text is black or white. Color richness comes from imagery and the single blue accent — never multi-color type.
4. **Sentence case, always.** Approachable over authoritative. Headlines read like a helpful person talking, not a billboard shouting.
5. **Engineered restraint.** Flat surfaces, 1px borders, neutral shadows on hover only. The system should feel as precisely built as the hardware it sells.
6. **Benefit before spec.** Copy and layout lead with what you can do; specifications are available but secondary.
7. **Stability is a feature.** The blue and the logo have barely moved in over a decade. Consistency signals reliability — a core consumer-tech trust cue.
8. **Accessible by default.** High contrast (`#212121` on white), 44px touch targets, visible focus rings in HP Blue.

## 13. Personas

*Personas below are fictional archetypes informed by publicly described consumer-tech buyer segments, not individual people.*

**Marcus, 41, Austin.** Small-business owner shopping for an OfficeJet printer and three laptops for new hires. Comes to hp.com to compare specs and total cost, not to be entertained. Wants clear product cards, honest stock status, and a frictionless cart. Trusts HP because his last printer "just worked for six years." Bounces if the spec table is hard to scan on his phone.

**Priya, 23, Toronto.** Design student buying her first premium laptop (eyeing a Spectre). She researches across three sites and reads every review tab. Responds to the clean product photography and benefit-led headlines, but ultimately decides on screen quality and weight. Expects sentence-case, jargon-free copy and a fast mobile flow with the sticky "Add to cart" bar.

**Robert, 58, Manchester.** Replacing the family printer and dreading driver setup. Lands on HP Support, not the store. Needs patient, step-by-step guidance (`Let's get your printer connected`) with big tap targets and no marketing distraction. Values that HP's support pages look calm and official. Will call support if the page feels cluttered.

## 14. States

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

## 15. Motion & Easing

**Durations:**

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle flips, checkbox changes |
| `motion-fast` | 150ms | Hover, focus, button press, card lift |
| `motion-standard` | 250ms | Default — dropdowns, accordions, tab content |
| `motion-slow` | 350ms | Mega-menu reveal, modal entrance |
| `motion-page` | 400ms | Route / full-screen transitions |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Things appearing — menus, modals, banners |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Things leaving — dismissals |
| `ease-standard` | `cubic-bezier(0.4, 0.0, 0.2, 1)` | Two-way — accordions, tabs, hover lifts |

**Signature motions.**

1. **Product card lift.** On hover, the card raises to `0 4px 12px rgba(0,0,0,0.10)` and the product image scales `1.02×` over `motion-fast / ease-standard`. Subtle — the device should appear to come forward, not bounce.
2. **Mega-menu reveal.** The header mega-menu fades and slides down from `y-8px` over `motion-slow / ease-enter`, with a synchronized light backdrop. Dismissal uses `motion-fast / ease-exit`.
3. **Add-to-cart confirmation.** The cart icon count animates with a brief scale pulse (`1 → 1.15 → 1`, `motion-standard`), paired with the success banner sliding in. Reassuring, never flashy.
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant`; slides and scales become simple fades. The experience stays fully usable.

<!--
OmD v0.1 Sources — HP

Verified via WebFetch / WebSearch (2026-06-06):
- HP Blue #0096D6 (PMS 2925 C), stable since 2012 — brandpalettes.com/hewlett-packard-color-codes,
  brandcolorcode.com/hp
- Forma DJR typography (Forma DJR UI for screen, Forma DJR Office for documents), by
  David Jonathan Ross; sentence-case default; "type is black or white, don't mix colors
  on a layout" — brandcentral.hp.com/us/en/elements/typography.html and HP Type Guidelines 2.0 PDF
- 2025 refresh introduced HP Electric Blue (Pantone 2132) — HP Brand Visual Identity page
- hp.com (https://www.hp.com) redirects to www-redirect.ext.hp.com (geo/consent gateway);
  live DOM not directly inspected, so token-level UI values (radii, padding, semantic greens/
  reds, motion) are conventional consumer-tech / e-commerce values consistent with HP's
  published color + type system and observed hp.com store patterns.

Brand narrative facts (1939 garage founding, 2015 HP Inc. / HPE split, Eight Inc. circle logo,
HP Simplified → Forma DJR migration) are widely documented public history.

Personas (§13) are fictional archetypes informed by publicly described consumer-tech buyer
segments. Any resemblance to specific individuals is unintended.

Interpretive claims (e.g., "the product is the hero", "restraint is the statement") are
editorial readings of HP's design, not documented HP statements.
-->
