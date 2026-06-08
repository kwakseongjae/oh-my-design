---
id: muji
name: MUJI
country: JP
category: ecommerce
homepage: "https://www.muji.com"
primary_color: "#7f0019"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=muji.com&sz=128"
verified: "2026-06-06"
added: "2026-06-06"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#333333"
    primary-hover: "#000000"
    brand: "#7f0019"
    brand-hover: "#6b0015"
    canvas: "#ffffff"
    surface: "#f7f7f7"
    foreground: "#333333"
    muted: "#666666"
    on-primary: "#ffffff"
    hairline: "#dddddd"
    border-strong: "#cccccc"
    error: "#c0392b"
    success: "#4a7c59"
  typography:
    family: { sans: "Helvetica Neue", mono: "Helvetica Neue" }
    page-title:    { size: 28, weight: 300, lineHeight: 1.4, tracking: 0.02, use: "Quiet authority page title" }
    section:       { size: 22, weight: 400, lineHeight: 1.4, tracking: 0.02, use: "Category / section titles" }
    subheading:    { size: 18, weight: 400, lineHeight: 1.5, tracking: 0.02, use: "Card titles, group labels" }
    lead:          { size: 16, weight: 300, lineHeight: 1.7, tracking: 0.02, use: "Editorial intro paragraphs" }
    body:          { size: 14, weight: 400, lineHeight: 1.7, tracking: 0.02, use: "Standard reading text" }
    body-small:    { size: 13, weight: 400, lineHeight: 1.6, tracking: 0.02, use: "Product descriptions, dense copy" }
    caption:       { size: 12, weight: 400, lineHeight: 1.5, tracking: 0.04, use: "Metadata, legal, breadcrumbs" }
    price:         { size: 16, weight: 400, lineHeight: 1.3, use: "Product price" }
    button:        { size: 14, weight: 400, lineHeight: 1.0, tracking: 0.04, use: "Add to cart, primary actions" }
  spacing: [4, 8, 12, 16, 24, 32, 48, 64, 96]
  rounded: { sm: 2, md: 2, lg: 2, full: 9999 }
  shadow:
    subtle: "0 2px 8px rgba(0,0,0,0.08)"
    modal: "0 4px 24px rgba(0,0,0,0.16)"
  components_harvested: true
  components:
    button-primary: { type: button, bg: "#333333", fg: "#ffffff", radius: "2px", padding: "14px 24px", font: "14px / 400", states: "hover #000000", use: "Single primary action (add to cart / checkout)" }
    button-secondary: { type: button, bg: "#ffffff", fg: "#333333", border: "1px solid #333333", radius: "2px", padding: "13px 24px", font: "14px / 400", states: "hover bg #f7f7f7", use: "Secondary actions" }
    button-tertiary: { type: button, bg: "transparent", fg: "#666666", border: "1px solid #dddddd", radius: "2px", padding: "10px 16px", font: "13px / 400", use: "Low-priority actions, filters" }
    button-brand: { type: button, bg: "#7f0019", fg: "#ffffff", radius: "2px", padding: "14px 24px", font: "14px / 400", states: "hover #6b0015", use: "Sale / campaign CTAs only" }
    button-disabled: { type: button, bg: "#eeeeee", fg: "#999999", radius: "2px", use: "Out-of-stock, unavailable" }
    input: { type: input, bg: "#ffffff", fg: "#333333", border: "1px solid #cccccc", radius: "2px", padding: "12px 14px", font: "14px / 400", focus: "border #333333, no glow", use: "Standard form field" }
    input-error: { type: input, bg: "#ffffff", border: "1px solid #c0392b", radius: "2px", use: "Validation failure, help text #c0392b" }
    card-product: { type: card, bg: "#ffffff", radius: "0px", padding: "0", shadow: "none", use: "Catalog grid card, photo is the card" }
    card-editorial: { type: card, bg: "#ffffff", border: "1px solid #eeeeee", radius: "2px", padding: "20px", shadow: "none", use: "Story modules, info panels" }
    tag-sale: { type: badge, bg: "#7f0019", fg: "#ffffff", radius: "0px", padding: "2px 8px", font: "11px / 400", use: "Sale indicator, printed-label feel" }
    tag-neutral: { type: badge, bg: "#eeeeee", fg: "#666666", radius: "0px", padding: "2px 8px", font: "11px / 400", use: "NEW, category labels" }
    tab: { type: tab, fg: "#999999", font: "14px / 400", active: "text #333333, 2px bottom border #333333", use: "PDP detail tabs, category switching" }
    segmented: { type: tab, bg: "#eeeeee", radius: "2px", font: "13px / 400", active: "bg #ffffff, text #333333", use: "View toggles, sort modes" }
    toast: { type: toast, bg: "#333333", fg: "#ffffff", radius: "2px", padding: "12px 16px", shadow: "0 2px 8px rgba(0,0,0,0.12)", font: "13px / 400", use: "Transient confirmation" }
    notice-inline: { type: card, bg: "#f7f7f7", fg: "#333333", border: "2px solid #7f0019", radius: "0px", padding: "12px 16px", use: "Shipping info, stock notices" }
    dialog: { type: dialog, bg: "#ffffff", fg: "#333333", radius: "2px", padding: "32px", shadow: "0 4px 24px rgba(0,0,0,0.16)", use: "Confirmation, size guide, login" }
    checkbox: { type: toggle, border: "1px solid #cccccc", radius: "2px", active: "#333333 fill, white check", use: "Filters, terms agreement, square" }
    toggle: { type: toggle, bg: "#cccccc", radius: "9999px", active: "track #333333, white thumb", use: "Newsletter / setting switches" }
---

# Design System Inspiration of MUJI (無印良品)

## 1. Visual Theme & Atmosphere

MUJI — *Mujirushi Ryohin* (無印良品), "no-brand quality goods" — is the rare retailer whose entire visual identity is an argument *against* visual identity. Founded in 1980 as a product line inside the Seiyu supermarket chain, MUJI was a deliberate rejection of the brand-premium economics of late-bubble Japan: strip out the packaging, strip out the logo tax, keep the material quality. The website is the digital extension of that thesis. It opens on a near-white canvas (`#ffffff` / `#f7f7f7`) with quiet near-black text (`#333333`) and exactly one chromatic note in the whole system — the signature MUJI maroon (`#7f0019`), reserved almost entirely for the logo plate and a few load-bearing accents.

The interface feels like a well-lit, empty room. There are no gradients, no shadows for decoration, no rounded "friendly" corners softening every edge. Product photography sits on white with generous margins; text is set in **Helvetica Neue** for Latin script and a clean gothic (ゴシック) for Japanese — the emptiest, most neutral typefaces in circulation, chosen precisely because they disappear and leave only the product. Art director **Kenya Hara** (since 2001) frames this as *emptiness* (空 / 無): not minimalism as a reductive Western program, but a vessel-like openness that invites the user to complete the meaning.

What defines MUJI visually is restraint taken to the level of doctrine. The maroon is never used as a button color, never as a link hover, never decoratively — it is the brand mark and almost nothing else. Color in the UI is achieved through grayscale and the natural tones of the merchandise itself. Whitespace is not "negative space" to be filled; it is the primary design material.

**Key Characteristics:**
- MUJI Maroon (`#7f0019`) as the single brand color — logo plate and rare accents only, never a generic UI accent
- Helvetica Neue (Latin) + neutral Japanese gothic — typefaces chosen to vanish
- Near-black text (`#333333`), never pure `#000000` — softer, paper-like
- White and warm off-white surfaces (`#ffffff`, `#f7f7f7`, `#eeeeee`)
- Minimal-to-zero shadows; separation via hairline borders (`#dddddd`) and whitespace
- Small, conservative border-radius (0px–2px) — square corners are the default
- Generous whitespace and wide margins as the core compositional tool
- Product photography does the talking; chrome stays silent

## 2. Color Palette & Roles

### Primary / Brand
- **MUJI Maroon** (`#7f0019`): The single signature brand color (RGB 127, 0, 25). Used for the logo plate, the "MUJI" wordmark background, and a handful of high-priority accents (sale tags, active brand-nav markers). Deep brick-red with no orange in it — somber, traditional, Japanese.
- **Maroon Deep** (`#6b0015`): Pressed/hover state for the rare interactive maroon element.
- **Maroon Tint** (`#f4e6e9`): Faint maroon-washed surface for sale banners or brand-themed callouts. Used sparingly.

### Text / Ink
- **Ink** (`#333333`): Primary body and heading color. A soft near-black — never pure black. Reads as ink on uncoated paper.
- **Ink Secondary** (`#666666`): Captions, metadata, secondary descriptions, price subtext.
- **Ink Tertiary** (`#999999`): Placeholder text, disabled labels, fine print, breadcrumb separators.

### Neutral / Surface Scale
- **White** (`#ffffff`): Page background, card surfaces, product photography ground.
- **Off-White** (`#f7f7f7`): Section backgrounds, subtle zoning, alternating bands.
- **Mist** (`#eeeeee`): Secondary fills, input backgrounds, hover surfaces.
- **Cloud** (`#e5e5e5`): Stronger fills, segmented control track.
- **Hairline** (`#dddddd`): Default border, divider, table rule — the workhorse separator.
- **Border Strong** (`#cccccc`): Emphasized borders, active input outlines.

### Semantic (used minimally)
- **Sale Red** (`#7f0019`): MUJI does not introduce a separate "error red" — the brand maroon doubles for sale pricing and critical emphasis.
- **Error** (`#c0392b`): Reserved, slightly brighter red for true form-validation errors only (distinguished from brand maroon so errors don't read as branding).
- **Success** (`#4a7c59`): Muted sage-green for confirmation states. Desaturated to fit the palette.
- **Info Ink** (`#333333`): MUJI conveys information through ink + weight, not color.

### Dark Footer
- **Footer Ground** (`#333333`): Footer / global navigation dark band on some regional sites.
- **Footer Text** (`#ffffff` / `rgba(255,255,255,0.7)`): Footer links and muted secondary footer text.

## 3. Typography Rules

### Font Family
- **Primary (Latin)**: `"Helvetica Neue", Helvetica, Arial, "ヒラギノ角ゴ ProN", "Hiragino Kaku Gothic ProN", "メイリオ", Meiryo, sans-serif`
- **Japanese**: `"ヒラギノ角ゴ ProN", "Hiragino Kaku Gothic ProN", "Yu Gothic", "Noto Sans JP", sans-serif` — neutral gothic, no decorative mincho on chrome
- **Numerals**: Helvetica Neue figures for prices; no custom tabular font — alignment via layout, not a special numeral set

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Page Title | Helvetica Neue | 28px | 300 (Light) | 1.4 | 0.02em | Light weight signals quiet authority |
| Section Heading | Helvetica Neue | 22px | 400 | 1.4 | 0.02em | Category / section titles |
| Sub-heading | Helvetica Neue | 18px | 400 | 1.5 | 0.02em | Card titles, group labels |
| Lead / Intro | Helvetica Neue | 16px | 300 | 1.7 | 0.02em | Editorial intro paragraphs |
| Body | Helvetica Neue | 14px | 400 | 1.7 | 0.02em | Standard reading text |
| Body Small | Helvetica Neue | 13px | 400 | 1.6 | 0.02em | Product descriptions, dense copy |
| Caption | Helvetica Neue | 12px | 400 | 1.5 | 0.04em | Metadata, legal, breadcrumbs |
| Price | Helvetica Neue | 16px | 400 | 1.3 | 0 | Product price, never bolded loud |
| Price Large | Helvetica Neue | 20px | 400 | 1.3 | 0 | PDP primary price |
| Nav Link | Helvetica Neue | 13px | 400 | 1.4 | 0.04em | Global nav, restrained tracking |
| Button Label | Helvetica Neue | 14px | 400 | 1.0 | 0.04em | Add to cart, primary actions |

### Principles
- **Light weight as register**: Headings often run at weight 300 (Light). Where most retailers shout in bold, MUJI whispers — the lightness is the authority.
- **Generous line-height**: Body copy runs 1.7 line-height. Air between lines is part of the "emptiness" — text never crowds.
- **Subtle positive tracking**: A small `0.02em`–`0.04em` letter-spacing opens the text up. Helvetica Neue set slightly loose reads calmer than default.
- **No bold for hierarchy**: Hierarchy comes from size and color (Ink → Ink Secondary), not from heavy weights. Bold (700) is rare and reserved for an active price or a single emphasized word.
- **Two scripts, one neutrality**: Latin Helvetica Neue and Japanese gothic are weighted to sit calmly together; neither dominates. No decorative serif/mincho enters the chrome.

## 4. Component Stylings

### Buttons

MUJI buttons are flat, square-cornered, and quiet. The default is a near-black outline or fill — the brand maroon is *not* the primary button color.

**Primary (Add to Cart / Checkout)**
- Background: `#333333`
- Text: `#ffffff`
- Border: none
- Radius: 2px
- Padding: 14px 24px
- Font: 14px / 400 / Helvetica Neue, `0.04em` tracking
- Hover: `#000000`
- Use: The single primary action on a screen (カートに入れる, ご購入手続きへ)

**Secondary (Outline)**
- Background: `#ffffff`
- Text: `#333333`
- Border: 1px solid `#333333`
- Radius: 2px
- Padding: 13px 24px
- Font: 14px / 400 / Helvetica Neue
- Hover: background `#f7f7f7`
- Use: Secondary actions — お気に入り, 続けて見る

**Tertiary (Quiet)**
- Background: transparent
- Text: `#666666`
- Border: 1px solid `#dddddd`
- Radius: 2px
- Padding: 10px 16px
- Font: 13px / 400 / Helvetica Neue
- Use: Low-priority actions, filters, "もっと見る"

**Brand (rare)**
- Background: `#7f0019`
- Text: `#ffffff`
- Border: none
- Radius: 2px
- Padding: 14px 24px
- Font: 14px / 400 / Helvetica Neue
- Hover: `#6b0015`
- Use: Reserved for sale / campaign CTAs only — never the everyday add-to-cart

**Disabled**
- Background: `#eeeeee`
- Text: `#999999`
- Border: none
- Radius: 2px
- Use: Out-of-stock, unavailable action

### Inputs

**Default**
- Background: `#ffffff`
- Text: `#333333`
- Border: 1px solid `#cccccc`
- Radius: 2px
- Padding: 12px 14px
- Font: 14px / 400 / Helvetica Neue
- Placeholder: `#999999`
- Focus: border `#333333` (no glow, no colored ring — a darkened hairline)
- Use: Standard form field, search, login

**Filled (subtle)**
- Background: `#f7f7f7`
- Text: `#333333`
- Border: 1px solid transparent
- Radius: 2px
- Padding: 12px 14px
- Focus: border `#cccccc`
- Use: Search bars inside light chrome

**Error**
- Background: `#ffffff`
- Border: 1px solid `#c0392b`
- Radius: 2px
- Help text below in `#c0392b`, 12px
- Use: Validation failure

### Cards

MUJI product cards are nearly invisible frames — the photograph is the card.

**Product Card**
- Background: `#ffffff`
- Border: none (or 1px `#eeeeee` on dense grids)
- Radius: 0px
- Padding: 0 (image flush), text block padded 8px 0
- Shadow: none
- Image: square or 3:4, on `#ffffff` or `#f7f7f7` ground
- Title: 13px / 400 / `#333333`
- Price: 14px / 400 / `#333333` (sale price in `#7f0019`)
- Use: The catalog grid — the dominant surface of the site

**Content / Editorial Card**
- Background: `#ffffff`
- Border: 1px solid `#eeeeee`
- Radius: 2px
- Padding: 20px
- Shadow: none
- Use: "MUJI passport" callouts, story modules, info panels

**Banner Card**
- Background: `#f7f7f7`
- Border: none
- Radius: 0px
- Padding: 32px
- Use: Full-bleed campaign / seasonal bands

### Badges / Tags

**Sale Tag**
- Background: `#7f0019`
- Text: `#ffffff`
- Border: none
- Radius: 0px (square — a printed-label feel)
- Padding: 2px 8px
- Font: 11px / 400 / Helvetica Neue, `0.04em`
- Use: 期間限定価格 / sale indicator

**Neutral Tag**
- Background: `#eeeeee`
- Text: `#666666`
- Border: none
- Radius: 0px
- Padding: 2px 8px
- Font: 11px / 400
- Use: NEW, category labels, attribute chips

**Outline Tag**
- Background: transparent
- Text: `#666666`
- Border: 1px solid `#dddddd`
- Radius: 0px
- Padding: 1px 7px
- Use: Filter chips, selectable attributes

### Tabs / Segmented Control

**Underline Tabs (Active)**
- Background: transparent
- Text: `#333333` (active) / `#999999` (inactive)
- Border: 2px solid `#333333` (bottom, active only)
- Font: 14px / 400 / Helvetica Neue
- Use: PDP detail tabs (商品詳細 / レビュー), category switching

**Segmented**
- Track: `#eeeeee`
- Active: `#ffffff` background + `#333333` text
- Border: none
- Radius: 2px
- Font: 13px / 400
- Use: View toggles, sort modes

### Toasts / Notices

**Default**
- Background: `#333333`
- Text: `#ffffff`
- Border: none
- Radius: 2px
- Padding: 12px 16px
- Shadow: `0 2px 8px rgba(0,0,0,0.12)` (the rare allowed shadow)
- Font: 13px / 400
- Use: "カートに追加しました" transient confirmation

**Inline Notice**
- Background: `#f7f7f7`
- Text: `#333333`
- Border-left: 2px solid `#7f0019`
- Radius: 0px
- Padding: 12px 16px
- Use: Shipping info, stock notices, page-level messages

### Dialogs

**Centered Modal**
- Background: `#ffffff`
- Text: `#333333`
- Border: none
- Radius: 2px
- Padding: 32px
- Shadow: `0 4px 24px rgba(0,0,0,0.16)`
- Overlay: `rgba(0,0,0,0.4)`
- Use: Confirmation, size guide, login prompt

### Toggles / Checkboxes

**Checkbox**
- Border: 1px solid `#cccccc`
- Radius: 2px (square)
- Checked: `#333333` fill, white check
- Use: Filters, terms agreement — square, never circular

**Toggle**
- Track: `#cccccc` (off) / `#333333` (on)
- Thumb: `#ffffff` circle
- Radius: 9999px (the one pill in the system)
- Use: Newsletter / setting switches

---

**Verified:** 2026-06-06 (full-depth)
**Tier 1 sources:** muji.com (live brand chrome — Helvetica Neue type stack, near-white surfaces, square-corner buttons, maroon logo plate). brandcolorcode.com/muji and encycolorpedia.com (MUJI Red `#7f0019` / RGB 127,0,25 confirmed across sources). · https://www.muji.com (live production site)
**Tier 2 sources:** fontalternatives.com (Helvetica Neue confirmed as MUJI's Latin typeface under Kenya Hara). dezeen.com / bworldonline.com (Kenya Hara "emptiness" 空/無 design philosophy, art director since 2001).
**Conflicts:** none. `#7f0019` is consistently reported as the singular MUJI brand color; the brand intentionally avoids a broader chromatic palette.
**Note:** MUJI publishes no public token-level design system; chrome values are read from the live site and brand-color registries, then conformed to the brand's documented minimalist doctrine.

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Common values: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px
- Section vertical rhythm is large: 64px–96px between major bands
- Product grids use tight internal gutters (8px–16px) but wide outer margins

### Grid & Container
- Max content width: ~1180px, centered
- Wide page gutters — content rarely touches the viewport edge except for full-bleed campaign imagery
- Product catalog: 4–5 column grid on desktop, even gutters, square cells
- Editorial: single centered column ~720px for readable measure
- Full-bleed hero/campaign bands alternate with constrained content columns

### Whitespace Philosophy
- **Emptiness is the material.** Whitespace is not leftover space; it is the primary compositional element. A product floating in white communicates quality more than any frame could.
- **Let the product speak.** Chrome recedes so merchandise photography carries the page. Reducing UI ornament is a feature, not a constraint.
- **Even, calm rhythm.** Spacing is regular and predictable — no dramatic density shifts. The page should feel like a tidy shelf, evenly stocked.
- **Wide margins as luxury.** Generous outer margins signal confidence; cramming signals discount-bin urgency, which MUJI refuses.

### Border Radius Scale
- Square (0px): Product cards, tags, image frames, banners — the default
- Hairline (2px): Buttons, inputs, modals, content cards — barely softened
- Pill (9999px): Toggle switches only
- **No large radii.** Nothing rounder than 2px except the toggle. Square corners are intrinsic to the printed, no-nonsense MUJI feel.

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, product cards, most surfaces — the default |
| Hairline (Level 1) | 1px solid `#dddddd` border | Separation without shadow — the primary "elevation" device |
| Subtle (Level 2) | `0 2px 8px rgba(0,0,0,0.08)` | Sticky header on scroll, toast |
| Modal (Level 3) | `0 4px 24px rgba(0,0,0,0.16)` | Dialogs, dropdown menus |

**Shadow Philosophy**: MUJI's depth system is, by design, almost no depth at all. Where most e-commerce leans on cards-with-shadows to create hierarchy, MUJI separates elements with whitespace and hairline borders (`#dddddd`). Shadows are pure neutral black at low opacity and appear only where physically necessary — a header floating over scrolling content, a modal over a scrim. There are no colored shadows, no multi-layer elevation, no "lifted" decorative cards. Flatness is the brand statement: a printed page does not cast shadows, and MUJI's digital surfaces aspire to the calm of good paper.

### Blur Effects
- Sticky header may apply a light `backdrop-filter: blur(8px)` with a translucent white background on scroll
- Otherwise blur is avoided — clarity over effect

## 7. Do's and Don'ts

### Do
- Reserve MUJI Maroon (`#7f0019`) for the logo and rare brand accents — treat it as precious
- Use `#333333` for text, never pure `#000000`
- Default to square corners (0px); use 2px only on buttons, inputs, modals
- Separate elements with whitespace and hairline `#dddddd` borders, not shadows
- Set Helvetica Neue with `0.02em`–`0.04em` tracking and generous 1.7 line-height
- Use weight 300 for headings — lightness is the brand voice
- Let product photography on white be the visual focus
- Keep primary buttons near-black (`#333333`), not maroon

### Don't
- Don't use maroon as a generic UI accent, link color, or everyday button — it is the brand mark, not a utility color
- Don't add decorative shadows or "floating card" elevation
- Don't use large border-radius or pill-shaped buttons (toggles excepted)
- Don't use bold weights to create hierarchy — use size and ink color instead
- Don't introduce additional brand colors — the palette is grayscale + one maroon
- Don't crowd content; cramped layouts contradict the emptiness doctrine
- Don't use pure black text or gradients
- Don't let chrome compete with merchandise photography

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <768px | Single/2-column product grid, hamburger nav, full-width buttons |
| Tablet | 768–1024px | 3-column grid, condensed nav |
| Desktop | 1024–1280px | 4-column grid, full global nav |
| Large | >1280px | 5-column grid, centered ~1180px content with wide margins |

### Touch Targets
- Buttons: minimum 44px tall on mobile
- Product cards: full tappable cell; tap targets never smaller than the photo
- Nav items and filters: comfortable 44px rows in the mobile drawer

### Collapsing Strategy
- Global nav collapses to a hamburger drawer with full-height white panel
- Product grid: 5→4→3→2 columns down the breakpoints
- Primary buttons become full-width on mobile
- Editorial column stays centered, padding reduces from 32px to 16px
- Sticky add-to-cart bar appears on mobile PDP, white with hairline top border

### Image Behavior
- Product photography maintains square/3:4 ratio across breakpoints
- Full-bleed campaign imagery scales edge-to-edge; text overlays reflow below image on mobile
- Images stay on white/off-white ground — never cropped tightly or framed with shadow

## 9. Agent Prompt Guide

### Quick Color Reference
- Brand mark / sale accent: MUJI Maroon (`#7f0019`)
- Primary button: Ink (`#333333`)
- Button hover: Black (`#000000`)
- Background: White (`#ffffff`)
- Section background: Off-White (`#f7f7f7`)
- Heading & body text: Ink (`#333333`)
- Secondary text: Ink Secondary (`#666666`)
- Placeholder / disabled: Ink Tertiary (`#999999`)
- Border / divider: Hairline (`#dddddd`)
- Input border: Border Strong (`#cccccc`)
- Error: `#c0392b` · Success: `#4a7c59`

### Example Component Prompts
- "Create a MUJI product card: white background, no border, 0px radius, no shadow. Square product photo on `#ffffff`. Below: title 13px Helvetica Neue weight 400 `#333333`, price 14px `#333333` (sale price `#7f0019`). No hover lift — only a subtle `#f7f7f7` background tint on hover."
- "Build a primary add-to-cart button: `#333333` background, white text, 14px Helvetica Neue weight 400 with 0.04em tracking, 2px radius, 14px 24px padding. Hover `#000000`. Full-width on mobile. No shadow."
- "Design a secondary button: white background, 1px solid `#333333` border, `#333333` text, 2px radius, hover background `#f7f7f7`."
- "Create a MUJI input: white background, 1px solid `#cccccc` border, 2px radius, 12px 14px padding, 14px Helvetica Neue, placeholder `#999999`. Focus: border darkens to `#333333`, no glow or colored ring."
- "Design a sale tag: `#7f0019` background, white text, 11px Helvetica Neue, 0px radius (square), 2px 8px padding — printed-label feel."
- "Build a section: `#f7f7f7` background, 64px vertical padding, centered content ~1180px, heading 22px Helvetica Neue weight 300 `#333333` with 0.02em tracking, body 14px line-height 1.7 `#666666`."

### Iteration Guide
1. Maroon (`#7f0019`) is for the logo and sale accents only — never a generic accent or link color
2. Text is `#333333`, never pure black; secondary is `#666666`
3. Square corners are default; 2px radius only on buttons/inputs/modals; pill only on toggles
4. Separate with whitespace + 1px `#dddddd` hairlines, not shadows
5. Helvetica Neue, weight 300 headings / 400 body, 0.02–0.04em tracking, 1.7 line-height
6. Primary buttons are near-black (`#333333`), not maroon
7. Whitespace is the design — when in doubt, add air, not ornament
8. Let product photography on white carry the composition

---

## 10. Voice & Tone

MUJI's voice is plain, unhurried, and quietly declarative — the verbal equivalent of an unbranded paper bag. It describes, it does not sell. The brand's own founding register is captured in its 1980 slogan *「わけあって、安い」* ("Lower priced for a reason") and the recurring *「これがいい」ではなく「これでいい」* framing — not "this is *the best*," but "this *will do*," a deliberately modest contentment over assertive desire. Copy explains the material, the process, and the reason a thing is the way it is. There are no superlatives, no urgency theater, no exclamation points on routine surfaces.

| Context | Tone |
|---|---|
| Product descriptions | Factual, material-first. "オーガニックコットン100%。" States what it is and why. Never "amazing" or "luxurious". |
| CTAs | Plain imperative. "カートに入れる", "ご購入手続きへ", "もっと見る". No hype verbs. |
| Sale messaging | Reason-given, never panicked. "わけあって、安い。" Explains the why; no countdown urgency. |
| Confirmation | Calm past-tense. "カートに追加しました". No emoji, no celebration. |
| Editorial / story | Reflective, essayistic — the "emptiness" voice. Talks about everyday life, not features. |
| Empty states | Honest and brief. "該当する商品はありません". Offers a quiet next step. |
| Error messages | Plain and blameless. States what to fix, no apology theater. |

**Forbidden register.** No superlatives ("最高", "革命的", "amazing", "luxury"), no urgency manipulation ("今だけ!急いで!"), no exclamation marks on routine CTAs, no emoji on product or checkout surfaces. MUJI never claims to be the best — claiming superiority contradicts the no-brand premise. The voice is "this will do," stated with calm conviction.

## 11. Brand Narrative

MUJI launched in **December 1980** as a 40-item private label inside the **Seiyu** supermarket chain, not as a standalone company. Japan's post-bubble consumers were beginning to ask whether they were paying for objects or for the packaging and advertising wrapped around them. MUJI's founding answer — encoded in the name *無印良品*, "no-mark quality goods" — was to strip the brand premium out entirely: remove the logo, remove the decorative packaging, simplify the production process, and pass the honesty on as both lower price and higher trust. The first slogan, *「わけあって、安い」* ("Lower priced for a reason"), made the logic explicit: cheaper *because* of deliberate choices, not despite them.

The visual program matured under art director **Kenya Hara**, who joined in 2001 and articulated the concept of **emptiness** (空 / 無) as distinct from minimalism. In a 2017 conversation with *Dezeen*, Hara drew the line sharply: minimalism is a Western system for reducing elements to their essential form; emptiness is a *prior* state — a vessel open enough that the user determines what an object means. A MUJI product, like a MUJI page, does not present a finished argument; it presents an open container. This is why the design refuses to over-specify: square corners, neutral Helvetica Neue, white grounds, and a single reserved maroon are not stylistic preferences but the formal expression of *mu* — a refusal to crowd the user's own meaning out.

What MUJI refuses is instructive: the status-signaling of luxury branding, the urgency theater of discount retail, the chromatic noise of mass-market e-commerce, and the "delightful" decoration of consumer apps. What it embraces is the calm of good paper, the dignity of an ordinary object well made, and the radical idea that the most confident thing a brand can do is get out of the way.

## 12. Principles

1. **Emptiness, not minimalism.** The goal is not to remove until nothing remains; it is to leave an open vessel the user completes. Whitespace invites, it doesn't merely subtract.
2. **The product speaks; the chrome is silent.** Every UI decision should recede so merchandise photography carries the page. If chrome competes with the product, the chrome is wrong.
3. **One color, held precious.** Maroon (`#7f0019`) appears only as the brand mark and rare sale accent. The moment it becomes a generic accent, it stops meaning "MUJI."
4. **Square is honest.** Corners are 0px (or barely 2px). Rounded, friendly corners editorialize; the printed-page squareness states the facts plainly.
5. **No black, no shouting.** Text is `#333333`, headings are weight 300. Authority comes from calm, not from contrast cranked to maximum.
6. **Separate with air and hairlines.** Whitespace first, a 1px `#dddddd` rule second. Shadows only where physics demands (header over scroll, modal over scrim).
7. **"This will do" over "this is the best."** Copy and design both choose modest sufficiency over aspirational excess. Restraint *is* the value proposition.
8. **Evenness as calm.** Spacing is regular and predictable. A tidy, evenly stocked shelf — never a dramatic, density-jolting layout.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable MUJI customer segments (design-conscious urban professionals, minimalist-lifestyle adopters, students furnishing first apartments), not individual people.*

**佐藤 美咲 (Misaki Sato), 32, Tokyo.** UX designer furnishing a small Setagaya apartment. Shops MUJI online for storage, stationery, and skincare because the products "don't decorate" her space — they recede the way good tools should. Notices immediately when an e-commerce site adds shadows and gradients to feel premium; to her that reads as trying too hard. Trusts MUJI precisely because the site looks like it isn't selling. Reads product copy for material and origin, ignores marketing adjectives.

**James Whitfield, 41, London.** Architect, MUJI shopper for over a decade across stores and online. Buys in muted color stories and appreciates that the catalog photography is honest — the linen looks like the linen that arrives. Would be put off by urgency banners or countdown timers; he associates them with brands he distrusts. Values the wide whitespace and square product grid because he can scan a category quickly without visual noise competing for attention.

**김지원 (Jiwon Kim), 24, Seoul.** Graduate student, first independent apartment. MUJI is aspirational-but-attainable — affordable goods that signal taste without logos. Browses on mobile, building a wishlist of pens, a CD player, and acrylic drawers. Cares that the mobile site is calm and fast; full-width near-black buttons and a clean single-column flow make checkout feel effortless. Came for the aesthetic, stayed because "これでいい" — it's enough, and that's the point.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no search results)** | White canvas. Single line in Ink (`#333333`) 14px: "該当する商品はありません". One quiet outline CTA to clear filters. No illustration. |
| **Empty (empty cart)** | Centered single line `#666666`: "カートに商品がありません". One near-black button "お買い物を続ける". Calm, never cute. |
| **Loading (grid first paint)** | Skeleton blocks in `#eeeeee` at exact product-cell dimensions. Subtle 1.2s shimmer. No spinners on the main grid. |
| **Loading (action in progress)** | Button label swaps to a small neutral spinner; button keeps its width and `#333333` fill. No color change. |
| **Error (form validation)** | Field border becomes `#c0392b` (distinct from brand maroon), 12px help text below in the same red. Specific and blameless: states what to fix. |
| **Error (page-level)** | Inline notice: `#f7f7f7` background, 2px `#7f0019` left border, `#333333` text. One sentence, one action. |
| **Success (added to cart)** | `#333333` toast, white text, 2px radius, brief `0 2px 8px rgba(0,0,0,0.08)` shadow, 3s auto-dismiss: "カートに追加しました". No emoji. |
| **Success (order placed)** | Dedicated confirmation page, not a toast. Quiet `#4a7c59` confirmation mark, order summary in plain Ink type, single "続けてお買い物" button. |
| **Skeleton** | `#eeeeee` blocks at final dimensions, square corners matching the cards. Shimmer is neutral, no brand tint. |
| **Disabled** | `#eeeeee` background, `#999999` text. Used for out-of-stock add-to-cart. Geometry unchanged so re-enabling is stable. |
| **Out of stock** | Product card stays; price replaced by `#999999` "在庫切れ" label; add-to-cart disabled. No alarming red. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Checkbox/toggle state commits, focus borders |
| `motion-fast` | 150ms | Hover tints, button press, small fades |
| `motion-standard` | 250ms | Dropdown, drawer, modal, image crossfade |
| `motion-slow` | 400ms | Page-level transitions, hero reveals |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Arriving — drawers, modals, fades-in |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Leaving — dismissals |
| `ease-standard` | `cubic-bezier(0.4, 0.0, 0.2, 1)` | Two-way transitions — tabs, accordions |

**Explicitly avoided.** No spring, no bounce, no overshoot. Playful or kinetic motion contradicts the calm-paper register — a MUJI surface should never feel "delightful" in the consumer-app sense. Motion exists to soften transitions, not to entertain. No `cubic-bezier` with a control value above `1.0` anywhere.

**Signature motions.**

1. **Image crossfade.** Product-gallery thumbnails crossfade the main image over `motion-standard / ease-standard`. Never a slide or zoom — the photograph simply replaces itself, calmly.
2. **Drawer / hamburger nav.** The mobile nav panel slides in from the side over `motion-standard / ease-enter` with a synchronized `rgba(0,0,0,0.4)` scrim fade. Dismissal uses `motion-fast / ease-exit` — leaving is lighter than arriving.
3. **Hover tint, not lift.** Cards and buttons respond to hover with a `motion-fast` background tint (`#f7f7f7`) or border darken — never a shadow or translate. Elements do not "lift"; flatness is preserved.
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant`. Crossfades become instant swaps. The site stays fully usable; nothing is lost but the easing.

<!--
OmD v0.1 Sources

Direct verification via WebSearch (2026-06-06):
- brandcolorcode.com/muji — MUJI Red #7F0019, RGB (127, 0, 25), listed as the
  single documented MUJI brand color.
- encycolorpedia.com/7f0019 and colorswall — corroborate #7f0019 as MUJI's
  signature maroon; related tints #8c1a30, #993347 reported by registries.
- fontalternatives.com/inspiration/muji-helvetica — confirms Helvetica Neue as
  MUJI's Latin typeface, refined under art director Kenya Hara across signage,
  packaging, and advertising.
- dezeen.com (2017-12-13 Kenya Hara interview) and bworldonline.com — confirm
  Hara as art director since 2001 and the "emptiness" (空/無) philosophy as
  distinct from minimalism.
- General brand history (founded December 1980 as a Seiyu private label;
  「わけあって、安い」 founding slogan; 無印良品 = "no-brand quality goods")
  is widely documented and used as context.

Token-level chrome values (#333333 ink, #f7f7f7 / #eeeeee / #dddddd neutrals,
2px button/input radius, square cards, near-black primary buttons, Helvetica
Neue type scale) are read from the live muji.com chrome and conformed to MUJI's
documented minimalist/emptiness doctrine. MUJI publishes no public design-token
system, so these are observational, not from an official spec.

Personas (§13) are fictional archetypes informed by publicly observable MUJI
customer segments. Names are illustrative and do not refer to real people.

Interpretive claims (e.g., "square is honest", "one color held precious",
"this will do over this is the best") are editorial readings connecting MUJI's
stated no-brand / emptiness philosophy to its visual system, not directly
sourced MUJI statements.
-->
