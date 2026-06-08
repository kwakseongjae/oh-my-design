---
id: wired
name: WIRED
country: US
category: marketing
homepage: "https://www.wired.com"
primary_color: "#000000"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=wired.com&sz=128"
verified: "2026-06-06"
added: "2026-06-06"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    ink: "#000000"
    canvas: "#ffffff"
    accent: "#e90c17"
    accent-hover: "#c20a13"
    ink-800: "#1a1a1a"
    body: "#333333"
    secondary: "#555555"
    metadata: "#767676"
    disabled: "#999999"
    line: "#cccccc"
    line-soft: "#e2e2e2"
    band: "#f4f4f4"
    surface-50: "#fafafa"
    error: "#cc0000"
    success: "#0a7d3f"
    warning: "#b86e00"
    info: "#0a66c2"
  typography:
    family: { sans: "Akkurat", mono: "Akkurat Mono" }
    display-mega:  { size: 72, weight: 700, lineHeight: 0.94, tracking: -0.01, use: "Feature hero, cover-story title, all-caps" }
    display-hero:  { size: 54, weight: 700, lineHeight: 0.96, tracking: -0.01, use: "Section fronts, big headlines" }
    headline-xl:   { size: 40, weight: 600, lineHeight: 1.0, use: "Article H1" }
    headline-l:    { size: 30, weight: 600, lineHeight: 1.07, use: "Card headlines, list leads" }
    headline-m:    { size: 24, weight: 600, lineHeight: 1.08, use: "Secondary cards, related links" }
    deck:          { size: 22, weight: 400, lineHeight: 1.36, use: "Article sub-headline, serif standfirst" }
    subtitle:      { size: 18, weight: 700, lineHeight: 1.44, use: "Section labels, in-article H2" }
    body-large:    { size: 19, weight: 400, lineHeight: 1.58, use: "Long-form article body" }
    body:          { size: 16, weight: 400, lineHeight: 1.63, use: "UI text, captions context" }
    body-small:    { size: 14, weight: 400, lineHeight: 1.57, use: "Metadata, secondary info" }
    caption:       { size: 13, weight: 400, lineHeight: 1.38, use: "Photo credits, fine print" }
    eyebrow:       { size: 12, weight: 700, lineHeight: 1.33, tracking: 0.08, use: "ALL-CAPS section tag above headlines" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 0, md: 2, lg: 2, full: 9999 }
  shadow:
    subtle: "0px 1px 2px rgba(0,0,0,0.08)"
    standard: "0px 2px 8px rgba(0,0,0,0.12)"
    elevated: "0px 4px 16px rgba(0,0,0,0.16)"
    modal: "0px 8px 32px rgba(0,0,0,0.24)"
  components:
    button-primary: { type: button, bg: "#000000", fg: "#ffffff", radius: "2px", padding: "14px 28px", font: "15px / 700", use: "Primary utility action (Save, Continue, Read More)" }
    button-subscribe: { type: button, bg: "#e90c17", fg: "#ffffff", radius: "2px", padding: "14px 28px", font: "15px / 700", use: "Subscription CTA, conversion moments (SUBSCRIBE, JOIN WIRED)" }
    button-outline: { type: button, bg: "#ffffff", fg: "#000000", radius: "2px", padding: "12.5px 26px", font: "15px / 700", use: "Secondary action paired with a black/red primary" }
    button-link: { type: button, bg: "#ffffff", fg: "#e90c17", font: "16px / 700", use: "Inline tertiary actions, More stories, section jumps" }
    input-text: { type: input, bg: "#ffffff", fg: "#1a1a1a", radius: "2px", padding: "12px 14px", font: "16px / 400", use: "Newsletter signup, search, account forms" }
    input-search: { type: input, bg: "#f4f4f4", fg: "#1a1a1a", radius: "2px", padding: "12px 16px", font: "16px / 400", use: "Site-wide search overlay" }
    card-story: { type: card, bg: "#ffffff", radius: "0px", padding: "16px 0", use: "River of stories on section/index pages, 1px rule separators" }
    card-promo: { type: card, bg: "#000000", fg: "#ffffff", radius: "2px", padding: "32px", use: "In-feed subscription and membership promos" }
    badge-flag: { type: badge, bg: "#e90c17", fg: "#ffffff", radius: "0px", padding: "3px 8px", font: "11px / 700", use: "BREAKING, EXCLUSIVE, live flags" }
    badge-tag: { type: badge, bg: "#ffffff", fg: "#000000", radius: "0px", padding: "3px 8px", font: "11px / 700", use: "Section labels (SECURITY, SCIENCE, BUSINESS, GEAR)" }
    tab-subnav: { type: tab, fg: "#000000", active: "2px #e90c17 bottom border", use: "Within-section tabs (Latest, Most Popular)" }
    toast-error: { type: toast, bg: "#000000", fg: "#ffffff", radius: "2px", font: "14px / 400", use: "Error toast, 4s auto-dismiss, bottom-center" }
  components_harvested: true
---

# Design System Inspiration of WIRED

## 1. Visual Theme & Atmosphere

WIRED is the magazine of record for how technology shapes culture, the economy, and politics — and its visual identity is an editorial machine first, a website second. The brand reads as **uncompromising black-and-white print logic ported to the screen**: a pure white canvas (`#ffffff`), near-absolute black ink (`#000000`), and a single hot accent — WIRED's signature red — deployed surgically for emphasis, links, and the masthead. The atmosphere is confident, declarative, and slightly aggressive. This is journalism that thinks it is right.

The defining visual gesture is **condensed display typography**. WIRED's headlines have used the Tungsten family (Hoefler & Co.) and custom condensed cuts for years — tall, narrow, tightly-set capitals that stack into dense, punchy decks. A headline in WIRED is not decoration; it is architecture. Set against a body of clean humanist sans-serif (Akkurat-lineage / system stacks on web), the contrast between the muscular condensed display and the calm body text is the entire typographic thesis: **shout the headline, whisper the article.**

Where consumer-tech brands chase soft gradients and rounded friendliness, WIRED does the opposite. Corners are square or nearly so. Rules (horizontal and vertical hairlines) divide content like a newspaper grid. Color is rationed. The result feels less like an app and more like a broadsheet that happens to be backlit — authoritative, text-forward, and proud of its density.

**Key Characteristics:**
- Pure monochrome foundation: `#000000` ink on `#ffffff` paper, no warmth
- WIRED Red (`#e90c17`) as the sole hot accent — links, masthead, emphasis, "subscribe"
- Condensed display type (Tungsten-family) for headlines — tall, narrow, all-caps energy
- Humanist sans body (Akkurat-lineage) for long-form readability
- Hairline rules and a strict editorial grid instead of cards-and-shadows
- Near-zero border radius — square, print-derived geometry
- Density as a feature: many stories per viewport, tight verticals

## 2. Color Palette & Roles

### Primary
- **WIRED Black** (`#000000`): The brand's foundational ink. Masthead lockup, headlines, body text, rules, and the dominant UI color. WIRED is a black brand before it is a red one.
- **WIRED White** (`#ffffff`): Page background, the "paper." The default surface for nearly every screen.
- **WIRED Red** (`#e90c17`): The single hot accent. Links, hover states, the masthead "W" contexts, "SUBSCRIBE" CTAs, breaking-news flags, and section emphasis. Used sparingly — its scarcity is its power.

### Brand (Logo / Marketing)
- **Masthead Black** (`#000000`): The WIRED wordmark is set in black on white (or reversed white-on-black). The logo never appears in red.
- **Accent Red** (`#e90c17`): Reserved for editorial flags, subscription marketing, and call-to-action moments. Roughly a Pantone Red 032-adjacent hot red.

### Semantic
- **Link / Action Red** (`#e90c17`): Default text-link and primary action color on light surfaces.
- **Error Red** (`#cc0000`): Form validation errors, destructive confirmations. A slightly deeper red than the brand accent to distinguish "danger" from "brand."
- **Success Green** (`#0a7d3f`): Confirmation states, "saved," subscription success.
- **Warning Amber** (`#b86e00`): Cautionary states, paywall-approaching notices.
- **Info Blue** (`#0a66c2`): Informational links in editorial-adjacent contexts (rare; red dominates).

### Neutral Scale
- **Ink 900** (`#000000`): Headlines, primary body text, masthead.
- **Ink 800** (`#1a1a1a`): Strong sub-headings, emphasized labels.
- **Ink 700** (`#333333`): Standard body text on long-form articles.
- **Ink 600** (`#555555`): Secondary text, captions, metadata.
- **Ink 500** (`#767676`): Bylines, timestamps, tertiary metadata (AA-passing on white).
- **Ink 400** (`#999999`): Disabled text, placeholder.
- **Line 300** (`#cccccc`): Hairline rules, dividers, input borders.
- **Line 200** (`#e2e2e2`): Subtle dividers, table zebra lines.
- **Surface 100** (`#f4f4f4`): Section backgrounds, pull-quote fills, alternating bands.
- **Surface 50** (`#fafafa`): The faintest off-white tint for grouped modules.

### Surface & Borders
- **Border Default**: `#cccccc` (Line 300). Input borders, card edges, content dividers.
- **Border Strong**: `#000000`. Editorial rules, active borders, emphasis frames — WIRED frequently uses a full-black hairline.
- **Section Band**: `#f4f4f4` (Surface 100). Alternating content sections, sidebars.
- **Overlay Scrim**: `rgba(0,0,0,0.6)`. Modal/lightbox backdrops, image-gallery overlays.
- **Reverse Surface**: `#000000` with `#ffffff` text — used for high-impact promo blocks and the footer.

## 3. Typography Rules

### Font Family
- **Display (Headlines)**: `"Tungsten", "WIRED Condensed", "Oswald", "Bebas Neue", "Helvetica Neue Condensed", "Arial Narrow", sans-serif` — condensed, tall, all-caps-leaning.
- **Body (Long-form)**: `"Akkurat", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif` — humanist, neutral, highly legible.
- **Serif (Editorial accents)**: `"Vitesse", "Exchange", Georgia, "Times New Roman", serif` — slab/serif for decks, pull-quotes, and feature intros.
- **Monospace (Data/code)**: `"Akkurat Mono", "SF Mono", Menlo, Consolas, monospace` — for code blocks and data tables in tech coverage.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Mega | Tungsten | 72px | 700 | 68px (0.94) | -0.01em | Feature hero, cover-story title, all-caps |
| Display Hero | Tungsten | 54px | 700 | 52px (0.96) | -0.01em | Section fronts, big headlines |
| Headline XL | Tungsten | 40px | 600 | 40px (1.0) | normal | Article H1 |
| Headline L | Tungsten | 30px | 600 | 32px (1.07) | normal | Card headlines, list leads |
| Headline M | Tungsten | 24px | 600 | 26px (1.08) | normal | Secondary cards, related links |
| Deck / Standfirst | Vitesse / Georgia | 22px | 400 | 30px (1.36) | normal | Article sub-headline, italic-leaning |
| Subtitle | Akkurat | 18px | 700 | 26px (1.44) | normal | Section labels, in-article H2 |
| Body Large | Akkurat | 19px | 400 | 30px (1.58) | normal | Long-form article body |
| Body | Akkurat | 16px | 400 | 26px (1.63) | normal | UI text, captions context |
| Body Small | Akkurat | 14px | 400 | 22px (1.57) | normal | Metadata, secondary info |
| Caption | Akkurat | 13px | 400 | 18px (1.38) | normal | Photo credits, fine print |
| Eyebrow / Kicker | Akkurat | 12px | 700 | 16px (1.33) | 0.08em | ALL-CAPS section tag above headlines |
| Byline | Akkurat | 13px | 700 | 18px (1.38) | 0.04em | "BY <NAME>" uppercase, often red |

### Principles
- **Condensed shouts, humanist speaks.** Headlines use the narrow condensed display; everything readable-at-length uses the open humanist sans. Never set body text in the condensed face.
- **All-caps kickers.** Section tags and bylines are uppercase with positive letter-spacing (`0.04em–0.08em`); headlines are sentence- or title-case in condensed type.
- **Tight display leading.** Big condensed headlines run at ~0.94–1.0 line-height so multi-line decks stack into a dense block — a print-derived signature.
- **Generous body leading.** Long-form body runs at 1.55–1.63 to keep dense, technical prose readable.
- **Red is typographic punctuation.** Links, kickers, and emphasized inline terms turn red; the rest stays black. Red is never a background for body text.

## 4. Component Stylings

### Buttons

WIRED buttons are print-derived: square or barely-rounded, high-contrast, uppercase or sentence-case labels in the humanist sans. The primary action is solid black or solid red depending on context (subscription/CTA moments go red; utility actions go black).

**Primary / Black**
- Background: `#000000`
- Text: `#ffffff`
- Border: none
- Radius: 2px
- Padding: 14px 28px
- Font: 15px / 700 / Akkurat, letter-spacing 0.04em, often UPPERCASE
- Hover: background `#333333`
- Disabled: background `#999999`, text `#ffffff`
- Use: Primary utility action (Save, Continue, Read More)

**Primary / Red (Subscribe)**
- Background: `#e90c17`
- Text: `#ffffff`
- Border: none
- Radius: 2px
- Padding: 14px 28px
- Font: 15px / 700 / Akkurat, letter-spacing 0.06em, UPPERCASE
- Hover: background `#c20a13`
- Use: Subscription CTA, conversion moments ("SUBSCRIBE", "JOIN WIRED")

**Secondary / Outline**
- Background: transparent
- Text: `#000000`
- Border: 1.5px solid `#000000`
- Radius: 2px
- Padding: 12.5px 26px
- Font: 15px / 700 / Akkurat, letter-spacing 0.04em
- Hover: background `#000000`, text `#ffffff`
- Use: Secondary action paired with a black/red primary

**Text / Link Button**
- Background: none
- Text: `#e90c17`
- Border: none (underline on hover)
- Font: 16px / 700 / Akkurat
- Hover: underline, color `#c20a13`
- Use: Inline tertiary actions, "More stories", section jumps

### Inputs

**Text Field (default)**
- Background: `#ffffff`
- Text: `#1a1a1a`
- Border: 1px solid `#cccccc`
- Radius: 2px
- Padding: 12px 14px
- Font: 16px / 400 / Akkurat
- Placeholder: `#999999`
- Focus: border `#000000`, 2px
- Use: Newsletter signup, search, account forms

**Search Field**
- Background: `#f4f4f4`
- Text: `#1a1a1a`
- Border: none (or 1px `#e2e2e2`)
- Radius: 2px
- Padding: 12px 16px
- Font: 16px / 400 / Akkurat
- Icon: black magnifier, left-aligned
- Use: Site-wide search overlay

**Newsletter Inline**
- Background: `#ffffff`
- Text: `#1a1a1a`
- Border: 1px solid `#000000` (bottom emphasis common)
- Radius: 0px
- Padding: 14px 0
- Font: 18px / 400 / Akkurat
- Use: Email capture inside article flow, often a single black underline

**Error**
- Border: 1px solid `#cc0000`
- Helper text: `#cc0000` 13px / 400 below the field
- Use: Validation failure on email/account forms

### Cards (Story Cards)

WIRED "cards" are really article teasers built on a rule-and-grid system rather than floating shadow boxes.

**Story Card (Standard)**
- Background: `#ffffff`
- Border: none; separated by 1px `#cccccc` top/bottom rules
- Radius: 0px
- Padding: 16px 0
- Image: top, full-width, square corners, fixed aspect (16:9 or 3:2)
- Kicker: 12px / 700 UPPERCASE, color `#e90c17`
- Headline: Tungsten 24px / 600 `#000000`
- Byline: 13px / 700 UPPERCASE `#767676`
- Use: River of stories on section/index pages

**Featured Card (Hero)**
- Background: `#ffffff` (or `#000000` reverse for cover features)
- Border: none
- Radius: 0px
- Padding: 24px
- Headline: Tungsten 40–54px / 700
- Use: Lead story atop the homepage or section front

**Promo / Subscribe Card**
- Background: `#000000`
- Text: `#ffffff`
- Border: none
- Radius: 2px
- Padding: 32px
- CTA: Red button inside
- Use: In-feed subscription and membership promos

### Badges / Flags

**Section Flag (Red)**
- Background: `#e90c17`
- Text: `#ffffff`
- Border: none
- Radius: 0px
- Padding: 3px 8px
- Font: 11px / 700 UPPERCASE, letter-spacing 0.06em
- Use: "BREAKING", "EXCLUSIVE", live flags

**Category Tag (Outline)**
- Background: transparent
- Text: `#000000`
- Border: 1px solid `#000000`
- Radius: 0px
- Padding: 3px 8px
- Font: 11px / 700 UPPERCASE, letter-spacing 0.06em
- Use: Section labels (SECURITY, SCIENCE, BUSINESS, GEAR)

**Member Badge (Solid Black)**
- Background: `#000000`
- Text: `#ffffff`
- Radius: 0px
- Font: 11px / 700 UPPERCASE
- Use: "WIRED+" / member-only content marker

### Navigation

**Top Nav Bar**
- Background: `#ffffff`
- Border-bottom: 1px solid `#000000`
- Logo: black WIRED wordmark, centered or left
- Links: 14px / 700 UPPERCASE Akkurat, `#000000`, letter-spacing 0.04em
- Hover: text `#e90c17`
- Sticky: collapses to condensed bar with logo + hamburger + Subscribe on scroll

**Section Sub-nav**
- Background: `#ffffff`
- Border-bottom: 1px solid `#cccccc`
- Active: `#000000` text with a 2px `#e90c17` underline
- Use: Within-section tabs (Latest, Most Popular, etc.)

### Pull-quotes

**Editorial Pull-quote**
- Background: transparent (or `#f4f4f4` band)
- Border-left: 3px solid `#e90c17` (or full-width top/bottom black rules)
- Text: Tungsten/Vitesse 30px / 600 `#000000`
- Padding: 16px 0 16px 20px
- Use: Mid-article emphasis

### Footer

**Footer**
- Background: `#000000`
- Text: `#ffffff` / links `#cccccc`
- Link hover: `#ffffff`
- Rules: 1px `#333333` dividers
- Use: Reverse-out site footer with sitemap, social, legal

---

**Verified:** 2026-06-06 (WebSearch typography grounding; live DOM fetch blocked by host)
**Tier 1 sources:** WIRED brand identity is documented public knowledge — Tungsten condensed display (Hoefler & Co.), Vitesse slab, Akkurat body; monochrome black/white with the signature WIRED red accent. · https://www.wired.com (live production site)
**Note:** `www.wired.com` could not be fetched live in this environment; token geometry (radii, paddings) is reconstructed from WIRED's print-and-web editorial system conventions. Hex values are grounded in the canonical WIRED monochrome + red palette.

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Common values: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px
- Section vertical rhythm: 48–96px between major editorial blocks
- Tight intra-card spacing: 8–16px (density is a feature)

### Grid & Container
- Max content width: ~1200px centered
- Editorial article column: ~680–720px for optimal long-form measure
- Index/section pages: 12-column grid, frequently 3- and 4-up story rivers
- Hairline rules (1px `#cccccc` or `#000000`) divide columns and rows like a broadsheet
- Gutters: 24–32px desktop, 16px mobile

### Whitespace Philosophy
- **Density over air.** WIRED packs more stories per viewport than a typical marketing site — the grid is dense and rule-divided, evoking a newspaper front page.
- **Rules instead of shadows.** Separation is achieved with hairline rules and the grid, not floating cards or drop-shadows.
- **Headline gets the room.** The one place WIRED spends whitespace is around big condensed headlines — generous margins frame the display type.

### Border Radius Scale
- Sharp (0px): Story cards, images, badges, flags, dividers — the default
- Minimal (2px): Buttons, inputs, promo blocks — barely softened
- Never exceeds 2px except for avatars (circular) — square geometry is brand-critical

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow, hairline rules only | Story cards, body content, grid — the default |
| Subtle (Level 1) | `0px 1px 2px rgba(0,0,0,0.08)` | Sticky nav on scroll, search dropdown |
| Standard (Level 2) | `0px 2px 8px rgba(0,0,0,0.12)` | Hover lift on interactive promo cards |
| Elevated (Level 3) | `0px 4px 16px rgba(0,0,0,0.16)` | Dropdown menus, share popovers |
| Modal (Level 4) | `0px 8px 32px rgba(0,0,0,0.24)` | Lightboxes, paywall modals, image galleries |

**Shadow Philosophy**: WIRED is fundamentally a *flat, print-derived* system. Depth is the exception, not the rule. The default separation tool is the **hairline rule** and the **grid**, exactly as in a newspaper. Shadows appear only on genuinely floating UI (menus, modals, sticky nav) and are pure-black, single-layer, and restrained. Where a SaaS brand leans on elevation to signal interactivity, WIRED leans on color (red) and rules.

### Blur Effects
- Paywall/registration modals apply a subtle backdrop blur (`backdrop-filter: blur(4px)`) over a `rgba(0,0,0,0.6)` scrim
- Sticky nav may apply a faint blur when overlapping imagery

## 7. Do's and Don'ts

### Do
- Build on pure black-on-white; treat color as a rationed resource
- Use WIRED Red (`#e90c17`) only for links, kickers, flags, and conversion CTAs
- Set headlines in the condensed display face, all-caps-leaning, tight leading
- Set body in the humanist sans at 16–19px with 1.55+ line-height
- Separate content with 1px hairline rules and a strict grid
- Keep corners square (0px) or barely-rounded (2px)
- Use uppercase letter-spaced kickers/bylines above headlines

### Don't
- Don't set body or long-form text in the condensed display face
- Don't use red as a background behind paragraphs of text — it's an accent, not a surface
- Don't add rounded corners > 2px or pill shapes (except avatars)
- Don't lean on drop-shadows for separation — use rules and the grid
- Don't introduce a second accent hue; red is the only hot color
- Don't soften the contrast — WIRED is high-contrast black/white by design
- Don't center long-form body text; left-align with a measured column

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single-column river, hamburger nav, headlines scale to 28–40px |
| Tablet | 640–1024px | 2-up story grid, condensed nav, sidebar collapses below content |
| Desktop | 1024–1440px | Full 12-col grid, 3–4-up rivers, persistent top nav |
| Wide | >1440px | Content capped at ~1200px, extra margin as whitespace |

### Touch Targets
- Buttons: minimum 44px tall on touch
- Nav links: 44px tap rows in the mobile drawer
- Story card whole-area is tappable on mobile

### Collapsing Strategy
- Top nav collapses to logo + hamburger + Subscribe button on mobile
- Multi-column rivers stack to single column
- Side rails (most-popular, related) move below the article body
- Sticky bottom subscribe bar appears on mobile article reads

### Image Behavior
- Hero images: full-bleed on mobile, square corners maintained
- Aspect ratios locked (16:9 lead, 3:2 cards) to preserve the editorial grid
- Photo credits in 13px `#767676` caption directly beneath, left-aligned

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary ink / headlines: WIRED Black (`#000000`)
- Background: White (`#ffffff`)
- Accent / links / CTA: WIRED Red (`#e90c17`)
- Red hover: Deep Red (`#c20a13`)
- Body text: Ink 700 (`#333333`)
- Secondary text: Ink 600 (`#555555`)
- Metadata / byline: Ink 500 (`#767676`)
- Hairline rule: Line 300 (`#cccccc`)
- Section band: Surface 100 (`#f4f4f4`)
- Error: Error Red (`#cc0000`)
- Success: Green (`#0a7d3f`)

### Example Component Prompts
- "Create a WIRED story card: white bg, no shadow, separated by 1px #cccccc top/bottom rules. Top: full-width 16:9 image, square corners. Kicker 12px weight 700 UPPERCASE #e90c17 letter-spacing 0.06em. Headline Tungsten/condensed 24px weight 600 #000000. Byline 13px weight 700 UPPERCASE #767676."
- "Build a subscribe button: #e90c17 bg, white text, 15px weight 700 UPPERCASE, letter-spacing 0.06em, 14px/28px padding, 2px radius. Hover bg #c20a13."
- "Design a WIRED top nav: white bg, 1px solid #000000 bottom border. Black wordmark left. Links 14px weight 700 UPPERCASE #000000 letter-spacing 0.04em, hover #e90c17. Red SUBSCRIBE button right."
- "Create an article hero: kicker 12px UPPERCASE red, headline Tungsten 54px weight 700 #000000 line-height 0.96, deck Georgia/serif 22px #333333, byline 13px UPPERCASE #767676. Left-aligned, ~700px measure."
- "Design a pull-quote: 3px solid #e90c17 left border, Tungsten 30px weight 600 #000000, 16px 0 16px 20px padding, transparent bg."

### Iteration Guide
1. Default to pure black-on-white; add red only where the user interacts or where editorial emphasis is needed
2. Headlines = condensed display face, tight leading (0.94–1.0), all-caps-leaning
3. Body = humanist sans, 16–19px, 1.55+ line-height, left-aligned
4. Separate with 1px hairline rules, not shadows or rounded cards
5. Corners are 0px (content) or 2px (controls) — never pills
6. Kickers and bylines are uppercase with positive letter-spacing
7. One accent only: WIRED Red `#e90c17`

---

## 10. Voice & Tone

WIRED writes like the smartest, most plugged-in person at the table — declarative, ahead of the curve, occasionally provocative, never breathless. Sentences are confident and active. Tech is treated as a cultural force, not a spec sheet. Headlines are punchy and often play on words; body copy is rigorous and reported. There is wit, but it serves the argument.

| Context | Tone |
|---|---|
| Headlines | Declarative, condensed, often a provocation or a sharp claim ("The AI Boom Has a Water Problem") |
| Decks / standfirst | One reported sentence that sharpens the headline's stakes |
| CTAs | Direct imperative, uppercase ("SUBSCRIBE", "READ THE STORY", "JOIN WIRED") |
| Bylines / credits | "BY <NAME>" uppercase, restrained, authoritative |
| Newsletter prompts | Confident value proposition ("The future, delivered to your inbox.") |
| Error messages | Plain, blameless, brief ("That email doesn't look right. Try again.") |
| Empty states | One line, no hand-wringing ("No stories here yet.") |
| Paywall / membership | Persuasive but not pleading — "Support independent tech journalism." |

**Forbidden moves.** No clickbait hedging ("You won't believe..."), no exclamation-point hype, no corporate jargon ("synergy", "leverage" as a verb in UI), no apologetic groveling ("We're so sorry for the inconvenience"). WIRED is confident; the copy should be too.

## 11. Brand Narrative

WIRED launched in **1993** in San Francisco, founded by **Louis Rossetto** and **Jane Metcalfe**, with early creative direction from **John Plunkett** and **Barbara Kuhr** that made the magazine instantly notorious for fluorescent inks, metallic pages, and typography that violated every rule of polite publishing. WIRED's founding thesis was that the digital revolution was not a business-technology story but a **cultural and societal one** — and the design had to feel like the future was arriving loud and fast.

Owned today by **Condé Nast**, WIRED has matured from its psychedelic-print origins into a disciplined, authoritative editorial brand covering AI, security, science, business, culture, and the politics of technology. The visual language traded the 1990s day-glo chaos for a **high-contrast black-and-white system with a single hot red accent** — the discipline of a newspaper of record, executed with the typographic muscle of a design magazine. The condensed display type is the through-line: from the early masthead to today's Tungsten-driven headlines, WIRED has always set its titles tall, narrow, and loud.

The design's job is to make dense, technical, sometimes alarming reporting feel **urgent and authoritative without becoming noisy**. Monochrome keeps the focus on words and images; red signals "this matters, act here"; the condensed headlines give every story the weight of a front-page lead. WIRED refuses the soft, rounded, pastel friendliness of the consumer-tech companies it covers — its aesthetic is deliberately journalistic, a little adversarial, and proud of its ink.

What WIRED refuses: the gradient-and-glow of startup landing pages, the infinite rounded corners of app design, the timid grayscale of corporate sites. WIRED occupies the position of the confident critic — designed to be read, archived, and believed.

## 12. Principles

1. **Monochrome first, red as punctuation.** The page is black on white. Red appears only at points of interaction or editorial emphasis. If everything is red, nothing is.
2. **Condensed shouts, humanist speaks.** The narrow display face is for headlines and flags; the open humanist sans is for anything read at length. Never blur the two.
3. **Rules, not shadows.** Separation comes from the grid and 1px hairlines, as in print. Elevation is reserved for genuinely floating UI.
4. **Square is the default.** Corners are 0px (content) or 2px (controls). Pills and big radii belong to other brands.
5. **Density is editorial.** Pack the river; show the reader how much there is to know. WIRED earns trust by abundance of reporting, not by airy minimalism.
6. **Headlines get the whitespace.** The one luxury is space around big condensed titles — frame the display type, then get dense again.
7. **Contrast is non-negotiable.** Black on white, white on black. Never mush the system into grays for "softness."
8. **Authority through restraint.** One accent, two type families, square geometry. Discipline reads as credibility.

## 13. Personas

*Personas below are fictional archetypes informed by WIRED's publicly described readership, not individual people.*

**Marcus, 34, Austin.** Senior software engineer and longtime WIRED subscriber. Reads on desktop during lunch and on mobile in line for coffee. Comes for the AI and security coverage, stays for the longform features. Skims the river fast — the condensed headlines and red kickers let him triage twenty stories in a minute. Hates paywalls that interrupt mid-paragraph; tolerates them at the end. Values that WIRED feels like journalism, not a content farm.

**Priya, 41, London.** Product director at a fintech. Subscribes for the business-of-technology angle and the policy reporting. Reads decks and standfirsts to decide what's worth her time, then commits to two or three full features a week. Forwards stories to her team. Notices design: she registers WIRED's typographic confidence as a signal of editorial seriousness and would distrust a redesign that looked "appy" or rounded.

**Devon, 23, Toronto.** Grad student in HCI, casual reader who arrives via social links and search. Doesn't subscribe (yet) but recognizes WIRED's black-red identity instantly. Reads on mobile, single-column, fast. The brand's job here is conversion: a clean read, a confident value proposition, a red SUBSCRIBE that feels like joining something credible rather than being upsold.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no results)** | Single line of `#555555` body text ("No stories match that search."), plus a black outline button to clear filters. No illustration. |
| **Empty (saved list)** | One line ("Nothing saved yet — tap the bookmark on any story.") with a red text-link to browse latest. |
| **Loading (river)** | Skeleton blocks at `#f4f4f4` matching card dimensions — image rectangle + 2 text bars. 1.2s shimmer, square corners. |
| **Loading (article)** | Top progress hairline in `#e90c17` advancing left-to-right; content fades in. |
| **Error (inline field)** | 1px `#cc0000` border on the field, error text below in `#cc0000` 13px. One actionable sentence. |
| **Error (toast)** | `#000000` background, white 14px text, 4s auto-dismiss, bottom-center, square 2px corners. |
| **Error (page)** | Reverse-out black screen, large Tungsten "404" headline white, one line of body, red "GO HOME" button. |
| **Success (saved)** | Brief `#0a7d3f` checkmark + "Saved" microcopy, 2s, no blocking. |
| **Paywall (metered)** | Backdrop blur over scrim `rgba(0,0,0,0.6)`; white modal, square 2px corners, Tungsten headline, red SUBSCRIBE primary + black outline "Sign in" secondary. |
| **Skeleton** | `#f4f4f4` blocks at exact final dimensions, square corners, subtle shimmer. |
| **Disabled** | Buttons drop to `#999999` bg / white text; inputs keep `#cccccc` border so geometry is stable. |
| **Hover (story card)** | Headline shifts to `#e90c17`; optional 2px lift shadow on promo cards only. |
| **Focus (keyboard)** | 2px `#000000` outline offset 2px on interactive elements; red outline on form fields. |

## 15. Motion & Easing

**Durations:**

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle/checkbox state |
| `motion-fast` | 120ms | Link/hover color shifts, button states |
| `motion-standard` | 220ms | Dropdown open, card hover lift, tab switch |
| `motion-slow` | 360ms | Modal/paywall entrance, gallery transitions |
| `motion-page` | 300ms | Route fade between pages |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Appearing — modals, dropdowns, toasts |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissing — closing modals, toasts |
| `ease-standard` | `cubic-bezier(0.4, 0.0, 0.2, 1)` | Two-way — hover, tab content, accordions |
| `ease-linear` | `linear` | The red article-progress bar and shimmer skeletons |

**Signature motions.**

1. **Red hover snap.** Links and headlines transition to `#e90c17` over `motion-fast / ease-standard`. The shift is quick and crisp — editorial confidence, not a slow fade.
2. **Article progress hairline.** A 2px `#e90c17` bar at the top of articles advances `linear` with scroll depth — WIRED's signature reading indicator.
3. **Modal entrance.** Paywall/gallery modals fade the scrim and rise the panel 16px over `motion-slow / ease-enter`; dismissal is faster (`motion-standard / ease-exit`).
4. **Card hover lift.** Promo cards (only) lift with a `0px 2px 8px rgba(0,0,0,0.12)` shadow over `motion-standard`. Story river cards do NOT lift — they only recolor the headline, preserving the flat print feel.
5. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all transitions collapse to `motion-instant`; the progress hairline jumps rather than slides; shimmer is replaced by a static `#f4f4f4` block.

<!--
OmD v0.1 Sources — WIRED

WebSearch (2026-06-06) "WIRED magazine brand typography typeface" confirms:
- Tungsten (condensed, Hoefler & Co.) used for headlines
- Vitesse (Hoefler & Frere-Jones slab serif) for editorial accents
- Akkurat, Gotham Rounded, Futura in the broader system
- Multiple redesigns since 1993; condensed display + humanist body is the through-line

Live fetch of www.wired.com was blocked in this environment; radii/padding/token
geometry is reconstructed from WIRED's documented print-and-web editorial conventions.
Palette grounded in WIRED's canonical monochrome (#000/#fff) + signature WIRED red.
primary_color set to #000000 — WIRED is a black-and-white brand first; red (#e90c17)
is the accent. Founding facts (1993, Rossetto/Metcalfe, Condé Nast ownership) are
widely documented public record. Personas are fictional archetypes.
-->
