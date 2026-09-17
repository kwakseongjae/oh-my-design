---
id: plaid
name: Plaid
country: US
category: fintech
homepage: "https://plaid.com"
primary_color: "#02294b"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=plaid.com&sz=128"
verified: "2026-06-17"
added: "2026-06-17"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-17"
  note: "Two-surface live inspect (plaid.com home + plaid.com/products). Primary = the deep navy #02294b that fills dark sections, input borders, and the dark-section pill CTAs. Signature ink is the dark teal #012e37 (nav/menu). Hero H1 uses a bright green→teal radial-gradient text fill (#86ef5a → #10d0b7) clipped to glyphs. Bright gradient stops live in prose/components only — never as a solid token role."
  colors:
    primary: "#02294b"
    navy-deep: "#00172e"
    indigo-deep: "#0d0d3f"
    ink-teal: "#012e37"
    ink: "#111111"
    ink-button: "#111112"
    charcoal: "#232424"
    blue: "#043c67"
    link: "#0a54c4"
    slate: "#5c7695"
    green: "#468254"
    canvas: "#ffffff"
    surface: "#f7faff"
    surface-grey: "#f6f6f6"
    hairline: "#ebf0f4"
    hairline-alt: "#dde3e9"
    on-primary: "#ffffff"
  typography:
    family: { display: "Plaid Sans", body: "Cern" }
    display-hero: { size: 76, weight: 500, lineHeight: 1.12, tracking: -3.4, use: "Home hero H1, Plaid Sans, gradient text fill" }
    display-dark:  { size: 70, weight: 500, lineHeight: 1.08, tracking: -2.8, use: "Dark-section H2 headlines, Plaid Sans" }
    section:       { size: 60, weight: 600, lineHeight: 1.10, tracking: -2, use: "Product section H2, Plaid Sans" }
    page-title:    { size: 64, weight: 600, lineHeight: 1.0, tracking: -2, use: "Products page H1, Plaid Sans" }
    subhead:       { size: 26, weight: 500, lineHeight: 1.40, tracking: -0.5, use: "Feature H3 subheads, slate, Plaid Sans" }
    card-title:    { size: 24, weight: 600, lineHeight: 1.30, use: "Product card H3, Plaid Sans" }
    stat:          { size: 36, weight: 800, lineHeight: 1.33, use: "Stat figures, Cern" }
    eyebrow:       { size: 16, weight: 800, lineHeight: 1.0, tracking: 2, use: "All-caps eyebrow label, Plaid Sans" }
    body:          { size: 16, weight: 400, lineHeight: 1.50, use: "Standard reading text, Cern" }
    button:        { size: 20, weight: 600, lineHeight: 1.0, use: "Hero pill CTA label, Plaid Sans" }
    button-sm:     { size: 16, weight: 600, lineHeight: 1.0, use: "Header pill CTA label, Plaid Sans" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 6, md: 8, lg: 12, full: 9999 }
  shadow:
    none: "none"
  components:
    button-primary-dark: { type: button, bg: "#02294b", fg: "#ffffff", radius: "100px", padding: "0 24px", height: "56px", font: "20px / 600 Plaid Sans", use: "Hero pill CTA on dark/navy sections — Start building, Read the docs" }
    button-primary-light: { type: button, bg: "#111112", fg: "#ffffff", radius: "100px", padding: "0 18px", height: "39px", font: "16px / 600 Plaid Sans", use: "Header dark pill CTA — Contact sales" }
    button-outline: { type: button, bg: "#ffffff", fg: "#232424", border: "1px solid #dde3e9", radius: "9999px", padding: "12px 24px", height: "47px", font: "14px / 600 Plaid Sans", use: "Secondary outline pill — See all products" }
    button-ghost: { type: button, fg: "#111112", radius: "100px", font: "16px / 600 Plaid Sans", use: "Quiet header pill — Log in" }
    nav-link: { type: tab, fg: "#232424", radius: "9999px", padding: "12px 16px", font: "16px / 400 Plaid Sans", active: "text #012e37", use: "Top nav pill items" }
    menu-item: { type: listItem, bg: "#f7faff", fg: "#012e37", radius: "6px", padding: "13px 16px", font: "16px / 400 Plaid Sans", use: "Mega-menu dropdown row" }
    card-product: { type: card, bg: "#ffffff", fg: "#00172e", border: "1px solid #ebf0f4", radius: "12px", use: "White product card, hairline border, no shadow" }
    card-dark: { type: card, bg: "#02294b", fg: "#ffffff", radius: "12px", use: "Dark-navy feature/section card" }
    input-text: { type: input, bg: "#ffffff", fg: "#4b4b4b", border: "1px solid #02294b", radius: "8px", padding: "8px 8px 8px 16px", font: "16.5px Cern", use: "Form text input, navy hairline border" }
    badge-eyebrow: { type: badge, fg: "#00172e", font: "16px / 800 Plaid Sans", use: "All-caps eyebrow label, 2px tracking" }
  components_harvested: true
---

# Design System Inspiration of Plaid

## 1. Visual Theme & Atmosphere

Plaid is the financial-data network that sits behind a huge share of US fintech, and its marketing surface reads exactly like infrastructure that wants to feel approachable: a crisp white (`#ffffff`) canvas, deep-navy and dark-teal ink, and sudden bursts of an eclectic, almost playful palette used with strict discipline. The defining gesture is the home hero headline — set in the custom **Plaid Sans** at a massive 76px with an extreme `-3.4px` tracking — whose glyphs are filled not with a flat color but with a bright radial gradient that runs from electric green (`#86ef5a`) through aqua-teal (`#10d0b7`). The text itself is transparent; the gradient shows through clipped letterforms. It is the single most distinctive thing on the page and it announces the brand's whole thesis: serious financial plumbing, rendered with warmth and color.

Plaid's design system is internally called **Threads**, and it is deliberately split into two halves: a **Platform** side that governs all product UI (built to WCAG 2.1 AA) and a **Brand** side that governs marketing. That duality is visible on the live site. The product chrome is restrained and engineered — near-black body text (`#111111`), the signature dark-teal ink (`#012e37`) on navigation and menus, navy headings (`#00172e`), and a pale blue-white surface (`#f7faff`) for dropdown menus. The brand layer is where the eclectic color shows up: full-bleed dark sections in deep navy (`#02294b`) and deep indigo (`#0d0d3f`), a muted forest green (`#468254`) accent block, and the green-to-teal gradient reserved almost entirely for the hero. Bright color is rationed; it lands on one or two surfaces per page and never dilutes into the working UI.

Geometry is overwhelmingly pill-based. Navigation items, CTAs, and tags all run at full-round (`100px` / `999px`) radii, while cards and inputs sit at a calmer `6px`–`12px`. There are essentially **no drop shadows** anywhere on the marketing surface — live inspection returned `box-shadow: none` across the hero, nav, cards, and section bands. Separation is achieved entirely through tinted dark sections, the `#ebf0f4` and `#dde3e9` hairlines, and generous whitespace. The result is a flat, fast, modern aesthetic: a financial network that looks engineered and trustworthy, then surprises you with one confident hit of color.

**Key Characteristics:**
- Custom **Plaid Sans** display type with extreme negative tracking (-3.4px at 76px, -2.8px at 70px) — `Cern` as the body/UI sans companion
- Hero H1 rendered with a clipped green→teal gradient text fill (`#86ef5a` → `#10d0b7`) — the brand's signature flourish
- Dual Threads system: restrained Platform ink (`#012e37`, `#00172e`, `#111111`) vs. eclectic Brand color used sparingly
- Deep navy (`#02294b`) and deep indigo (`#0d0d3f`) full-bleed dark sections carry the brand moments
- Pill-everything chrome — 100px / 999px CTAs, nav items, and tags; `6px`–`12px` on cards and inputs
- Near-shadowless: separation via dark-section tints, `#ebf0f4` / `#dde3e9` hairlines, and whitespace
- Pale blue-white menu surface (`#f7faff`) and dark-teal (`#012e37`) menu text for the mega-menu
- Muted forest green (`#468254`) as a quieter accent alongside the bright hero gradient

## 2. Color Palette & Roles

### Primary & Dark Brand
- **Plaid Navy** (`#02294b`): Primary brand color. Fills the dark marketing sections, the dark-section pill CTAs, and the default input border. The anchor of the system.
- **Deep Navy** (`#00172e`): Heading color on the products page (H1/H2/H3) and eyebrow labels — a near-black blue used for large display type on white.
- **Deep Indigo** (`#0d0d3f`): The darkest section background, used for immersive full-bleed brand bands ("Read the docs" CTA section).
- **Ink Teal** (`#012e37`): Plaid's signature dark-teal ink. Navigation links, mega-menu rows, and emphasis text. Warmer than navy, distinctly Plaid.

### Text & Neutral
- **Ink** (`#111111`): Primary near-black body text on white.
- **Button Ink** (`#111112`): The near-black used on light pill CTAs and button labels.
- **Charcoal** (`#232424`): Top-nav link text color on white.
- **Blue** (`#043c67`): Secondary text and links within copy.
- **Link Blue** (`#0a54c4`): Carousel prev/next controls and inline interactive accents.
- **Slate** (`#5c7695`): Muted feature subheads (the 26px H3 descriptions).

### Accent
- **Forest Green** (`#468254`): A muted green accent block — the calmer cousin of the bright hero gradient.
- **Gradient Green** (`#86ef5a`): Electric green, the start stop of the hero text gradient. Brand-layer only.
- **Gradient Teal** (`#10d0b7`): Aqua-teal, the mid stop of the hero text gradient. Pairs with `#86ef5a`.

### Surface & Borders
- **Pure White** (`#ffffff`): Page background, card surfaces, text on dark.
- **Surface Blue** (`#f7faff`): Pale blue-white background for mega-menu dropdown rows.
- **Surface Grey** (`#f6f6f6`): Secondary neutral surface for alternating blocks.
- **Hairline** (`#ebf0f4`): Default card and divider border in the shadow-free system.
- **Hairline Alt** (`#dde3e9`): Border on white outline buttons ("See all products").

## 3. Typography Rules

### Font Family
- **Display**: `Plaid Sans` (with `Cern` and `Averta`-class fallbacks) — used for all headlines, nav, menu, and button labels.
- **Body / UI**: `Cern` (with `Helvetica, Arial` fallback) — the document body default at 16px / weight 400, and the font used for stat figures.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Plaid Sans | 76px (4.75rem) | 500 | 1.12 (85px) | -3.4px | Home H1, green→teal gradient text fill |
| Display Dark | Plaid Sans | 70px (4.38rem) | 500 | 1.08 (76px) | -2.8px | White H2 on dark sections |
| Page Title | Plaid Sans | 64px (4.00rem) | 600 | 1.0 | -2px | Products page H1 |
| Section Heading | Plaid Sans | 60px (3.75rem) | 600 | 1.10 | -2px | Product section H2 |
| Stat Figure | Cern | 36px (2.25rem) | 800 | 1.33 (48px) | normal | "1 in 2", "1M+", big numbers |
| Subhead | Plaid Sans | 26px (1.63rem) | 500 | 1.40 (36.4px) | -0.5px | Feature H3 descriptions, slate `#5c7695` |
| Card Title | Plaid Sans | 24px (1.50rem) | 600 | 1.30 | normal | Product card H3 |
| Eyebrow | Plaid Sans | 16px (1.00rem) | 800 | 1.0 | 2px | All-caps section label |
| Button | Plaid Sans | 20px (1.25rem) | 600 | 1.0 | normal | Hero pill CTA |
| Button Small | Plaid Sans | 16px (1.00rem) | 600 | 1.0 | normal | Header pill CTA |
| Nav Link | Plaid Sans | 16px (1.00rem) | 400 | 1.0 | normal | Top nav pill items |
| Body | Cern | 16px (1.00rem) | 400 | 1.50 (24px) | normal | Standard reading text |

### Principles
- **Extreme display tracking is the signature**: -3.4px at 76px and -2.8px at 70px compress headlines into dense, engineered blocks — unusually tight even for a fintech.
- **Two fonts, two jobs**: Plaid Sans owns display, nav, menu, and buttons; Cern owns body copy and stat figures. They do not swap roles.
- **Weight discipline**: display sits at 500–600 (never thin, never black except for stat figures at 800). Body is a calm 400.
- **Gradient fill, not gradient backgrounds**: the green→teal gradient is clipped to hero glyphs, never used as a section fill — keeping the color rare and precious.

## 4. Component Stylings

### Buttons

**Primary Pill (Dark Section)**
- Background: `#02294b`
- Text: `#ffffff`
- Radius: 100px
- Padding: 0 24px
- Height: 56px
- Font: 20px / 600 / Plaid Sans
- Use: Hero CTA on dark/navy bands — "Start building", "Read the docs"

**Header Dark Pill**
- Background: `#111112`
- Text: `#ffffff`
- Radius: 100px
- Padding: 0 18px
- Height: 39px
- Font: 16px / 600 / Plaid Sans
- Use: Header conversion CTA — "Contact sales"

**Outline Pill (Secondary)**
- Background: `#ffffff`
- Text: `#232424`
- Border: 1px solid `#dde3e9`
- Radius: 9999px
- Padding: 12px 24px
- Height: 47px
- Font: 14px / 600 / Plaid Sans
- Use: Secondary action — "See all products"

**Ghost Pill**
- Text: `#111112`
- Radius: 100px
- Padding: 0px 18px
- Font: 16px / 600 / Plaid Sans
- Use: Quiet header action — "Log in"

### Inputs & Forms

**Text Input**
- Background: `#ffffff`
- Text: `#4b4b4b`
- Border: 1px solid `#02294b`
- Radius: 8px
- Padding: 8px 8px 8px 16px
- Font: 16.5px / Cern
- Use: Form text field — navy hairline border, no shadow

### Cards & Containers

**Product Card (White)**
- Background: `#ffffff`
- Text: `#00172e`
- Border: 1px solid `#ebf0f4`
- Radius: 12px
- Use: White product/feature card with hairline outline, no shadow

**Dark Feature Card**
- Background: `#02294b`
- Text: `#ffffff`
- Radius: 12px
- Use: Dark-navy section/feature card

### Tabs / Navigation

**Top Nav Item**
- Text: `#232424`
- Radius: 9999px
- Padding: 12px 16px
- Font: 16px / 400 / Plaid Sans
- Active: `#012e37` ink-teal text
- Use: Top horizontal nav pill items ("Use cases", "Industries", "Developers")

### List Items

**Mega-Menu Row**
- Background: `#f7faff`
- Text: `#012e37`
- Radius: 6px
- Padding: 13px 16px
- Font: 16px / 400 / Plaid Sans
- Use: Dropdown mega-menu row ("By use case", "By industry")

### Badges

**Eyebrow Label**
- Text: `#00172e`
- Font: 16px / 800 / Plaid Sans
- Use: All-caps section eyebrow ("ALL PRODUCTS"), 2px tracking

---

**Verified:** 2026-06-17 (omd:add-reference CREATE — Tier 1 live inspect, 2 surfaces)
**Tier 1 sources:** https://plaid.com/ (home — hero gradient H1, nav, pill CTAs, dark sections); https://plaid.com/products/ (products — H1/H2/H3 navy headings, mega-menu rows, dark-section Explore pills, input border)
**Tier 2 sources:** getdesign.md/plaid — not listed (directory returns "No designs found for 'plaid'"); styles.refero.design/?q=plaid — no Plaid style card surfaced (fuzzy results only: Patch, Gocardless, Quicken, Square, Stripe)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px
- Notable: nav pills use 12px 16px padding; mega-menu rows 13px 16px; hero CTAs 0 24px on a fixed 56px pill height

### Grid & Container
- Centered single-column hero anchored by the 76px gradient headline
- Product sections alternate white (`#ffffff`) and full-bleed dark navy (`#02294b`) / indigo (`#0d0d3f`) bands
- Customer-story and product cards arranged in horizontal carousels with `#0a54c4` prev/next controls
- Cards group products at 12px radius with hairline `#ebf0f4` outlines

### Whitespace Philosophy
- **Air over density**: despite being data infrastructure, the marketing surface is generously spaced with strong vertical rhythm between bands.
- **Flat segmentation**: sections separate by dark-band background (`#02294b` / `#0d0d3f`) and hairlines, never by elevation.
- **Color rationing**: bright gradient and accent green appear once or twice per page; the working chrome stays neutral.

### Border Radius Scale
- Small (6px): mega-menu rows, dropdown surfaces
- Medium (8px): inputs
- Large (12px): cards and containers — the workhorse
- Full (100px / 9999px): all pill CTAs, nav items, tags

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline text, most surfaces |
| Tint (Level 1) | `#02294b` / `#0d0d3f` dark band, or `#f7faff` menu tint | Section/menu separation without elevation |
| Hairline (Level 2) | `1px solid #ebf0f4` or `1px solid #dde3e9` | White card and outline-button borders |

**Shadow Philosophy**: Plaid's marketing surface is effectively shadowless — live inspection returned `box-shadow: none` across the hero, nav, cards, and section bands. Depth comes from full-bleed dark sections (`#02294b`, `#0d0d3f`), pale menu tints (`#f7faff`), and thin hairlines (`#ebf0f4`, `#dde3e9`). When the page needs to elevate a moment, it reaches for color or a dark band, never a drop shadow — keeping the financial UI feeling flat, fast, and modern rather than skeuomorphic.

## 7. Do's and Don'ts

### Do
- Use Plaid Sans for all display, nav, menu, and button labels — Cern for body and stat figures
- Apply extreme negative tracking on headlines (-3.4px at 76px, -2px on section heads)
- Reserve the green→teal gradient (`#86ef5a` → `#10d0b7`) for clipped hero text only — keep it rare
- Use deep navy (`#02294b`) for dark sections and the default input border
- Use ink-teal (`#012e37`) for navigation and menu text — the signature Plaid ink
- Keep all CTAs, nav items, and tags as full-round pills (100px / 9999px)
- Separate sections with dark bands and `#ebf0f4` / `#dde3e9` hairlines, not shadows
- Use the pale blue-white surface (`#f7faff`) for mega-menu dropdown rows

### Don't
- Use the bright gradient as a section background — it is text-fill only, and overuse cheapens it
- Add drop shadows for elevation — Plaid's marketing surface is flat and shadow-free
- Set headlines in a thin or black weight — display stays at 500–600 (stat figures are the only 800)
- Use pure black for headings — reach for navy `#00172e` or ink-teal `#012e37`
- Use sharp/square corners on interactive elements — CTAs and nav are pills
- Spread the accent green across the working UI — it is a rationed brand-layer hit
- Mix Plaid Sans and Cern across roles — display vs. body is a fixed split
- Use positive letter-spacing at display sizes — Plaid tracks very tight

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero headline compresses, carousels become swipeable |
| Tablet | 640-1024px | Moderate padding, 2-up product cards |
| Desktop | 1024-1440px | Full layout, centered hero, multi-column product bands |

### Touch Targets
- Hero pill CTAs at 56px height with 0 24px padding — large, unmistakable targets
- Header pills at 39px height; nav items at 48px row height
- Mega-menu rows at ~50px height with 13px 16px padding for comfortable tapping

### Collapsing Strategy
- Hero: 76px gradient headline scales down on mobile, weight 500 maintained
- Product/customer carousels: horizontal swipe on narrow viewports
- Dark/white alternating bands: maintain full-width treatment, reduce internal padding
- Mega-menus collapse into an accordion drawer

### Image Behavior
- Product screenshots and brand illustrations carry no shadow at any size, consistent with the flat system
- Cards hold 12px radius across breakpoints
- The hero gradient simplifies but the text-fill effect is retained on capable browsers

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary / dark section: Plaid Navy (`#02294b`)
- Darkest section: Deep Indigo (`#0d0d3f`)
- Heading on white: Deep Navy (`#00172e`)
- Nav / menu ink: Ink Teal (`#012e37`)
- Body text: Ink (`#111111`)
- Secondary text: Blue (`#043c67`), Slate subhead (`#5c7695`)
- Menu surface: Surface Blue (`#f7faff`)
- Accent: Forest Green (`#468254`); hero gradient (`#86ef5a` → `#10d0b7`)
- Hairline: `#ebf0f4` (cards), `#dde3e9` (outline buttons)
- Link / carousel: Link Blue (`#0a54c4`)

### Example Component Prompts
- "Create a hero on white. Headline at 76px Plaid Sans weight 500, line-height 1.12, letter-spacing -3.4px, with the text filled by a radial gradient from #86ef5a to #10d0b7 (background-clip: text). Below it, a dark pill CTA: #02294b background, white text, 100px radius, 0 24px padding, 56px height, 20px/600 Plaid Sans — 'Start building'."
- "Design a dark feature band: #02294b background, full-width, no shadow. H2 at 70px Plaid Sans weight 500, letter-spacing -2.8px, white text. White pill CTA inside with #02294b fill."
- "Build a product card: white #ffffff background, 1px solid #ebf0f4 border, 12px radius, no shadow. Title 24px Plaid Sans weight 600, #00172e. Subhead 26px weight 500, letter-spacing -0.5px, slate #5c7695."
- "Create a text input: white background, 1px solid #02294b border, 8px radius, 8px 8px 8px 16px padding, 16.5px Cern, #4b4b4b text."
- "Top nav: white header, Plaid Sans 16px weight 400 pill items, #232424 text, ink-teal #012e37 on active. Mega-menu rows on #f7faff with #012e37 text and 6px radius. Dark 'Contact sales' pill (#111112, white text, 100px, 39px height) right-aligned."

### Iteration Guide
1. Plaid Sans for display/nav/menu/buttons; Cern for body and stat figures
2. Hero gradient (`#86ef5a` → `#10d0b7`) is text-fill only — never a background
3. No shadows — separate with dark bands and `#ebf0f4` / `#dde3e9` hairlines
4. Pill geometry everywhere for CTAs and nav (100px / 9999px); cards and inputs at 6–12px
5. Headings are navy `#00172e` or ink-teal `#012e37`, never pure black
6. Extreme negative tracking on display (-3.4px at 76px)
7. Ration the bright color — one or two hits per page

---

## 10. Voice & Tone

Plaid's voice is **plain, confident, and developer-respectful** — financial infrastructure described in clear, declarative English that treats the reader as a builder, not a lead to be closed. The live homepage headline "Turn data into revolutionary financial products" and the section title "Powered by the largest financial network" set the register: ambitious in scope, concrete in claim, free of exclamation points. CTAs are austere imperatives ("Start building", "Read the docs", "Contact sales", "See all products"). Marketing copy leans on verifiable numbers — "1 in 2 banked adults in the U.S.", "Over one million daily connections", "12,000 financial institutions" — rather than adjectives.

| Context | Tone |
|---|---|
| Hero headlines | Declarative, ambitious-but-concrete. "Turn data into revolutionary financial products." |
| Section headings | Network-and-scale framed. "Powered by the largest financial network." |
| Feature subheads | Benefit-first, plain. "Bank payments designed for fast connections." |
| CTAs | Austere imperatives. "Start building", "Read the docs", "Contact sales". |
| Stat blocks | Numbers do the talking. "1 in 2 banked adults", "1M+ daily connections". |
| Developer surfaces | Precise, peer-to-peer; docs and API references respect the reader. |

**Voice samples (verbatim from live surfaces):**
- "Turn data into revolutionary financial products" — home hero H1. *(verified live 2026-06-17)*
- "Powered by the largest financial network" — home section H2. *(verified live 2026-06-17)*
- "Everything you need to build intelligent finance" — products page H1. *(verified live 2026-06-17)*

**Forbidden register**: hype superlatives stacked on capabilities, fear-based or urgency-driven sales pressure, undefined jargon left unexplained, emoji on product/marketing/developer surfaces, exclamation marks on routine CTAs.

## 11. Brand Narrative

Plaid was founded in **2013** by **Zach Perret (CEO)** and **William Hockey** as a developer-first API company solving a structural problem in US finance: connecting a consumer's bank account to a fintech app was slow, brittle, and bespoke. Plaid's premise was to make that connection a few lines of code — the same developer-empathy thesis that defines its whole posture. By becoming the data layer beneath a large share of US fintech (payments, lending, personal finance, fraud), Plaid grew into the self-described "largest financial network," a claim its homepage backs with hard scale numbers rather than rhetoric.

The product matured from a single account-linking primitive into a broad platform — Auth, Identity, Balance, Transfer, Signal, Protect, Identity Verification, and more — organized on the products page as a catalog of composable building blocks. The brand positions itself as the trustworthy plumbing of "open finance": the network that makes other companies' products better while staying mostly invisible to the end user.

What Plaid refuses, visible in its design: the heavy, intimidating chrome of legacy banking (no shadow-stacked cards, no institutional navy-and-gold), and the loud hype of consumer fintech marketing. What it embraces — formalized in its **Threads** design system, split into an accessibility-first Platform side (WCAG 2.1 AA) and an expressive Brand side — is a flat, fast, modern surface; a restrained working palette of navy and dark-teal ink; and one rationed, joyful hit of color in the green-to-teal gradient that fills the hero. Serious infrastructure, rendered with warmth.

## 12. Principles

1. **Infrastructure should be invisible, then delightful.** Plaid is the layer beneath other products; the working UI stays calm and neutral. *UI implication:* keep chrome restrained (navy, teal-ink, hairlines) and let one rationed color moment carry the delight.
2. **Ration the color.** The bright green→teal gradient is precious because it is rare. *UI implication:* reserve the gradient for clipped hero text; never use it as a section fill or spread the accent green across the UI.
3. **Accessibility is a system, not an afterthought.** Threads Platform is built to WCAG 2.1 AA. *UI implication:* maintain strong contrast (navy/teal ink on white, white on `#02294b`) and never rely on color alone to carry meaning.
4. **Flat and fast.** Modern, mobile-native clarity beats decorative depth. *UI implication:* no drop shadows; separate with dark bands and hairlines; keep pages light and quick to scan.
5. **Numbers over adjectives.** Trust is earned with verifiable scale, not superlatives. *UI implication:* give stat figures their own large, bold (Cern 800) treatment and let data anchor the page.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Plaid user segments (fintech developers, product engineers, founders building on financial APIs), not individual people.*

**Devin Park, 30, San Francisco.** A backend engineer at a Series-B neobank wiring up account linking and balance checks. Reads Plaid's docs as his primary interface and judges the company by how cleanly the API errors explain themselves. Chose Plaid because "Start building" meant he could integrate without a sales call.

**Aïcha Diallo, 38, New York.** Head of product at a lending startup using Plaid Signal and Identity for underwriting and fraud. Values the catalog framing of the products page — composable building blocks she can reason about — and trusts the brand's plain, number-backed claims over hype.

**Marcus Reilly, 45, Austin.** A fintech founder evaluating the data layer for a new personal-finance app. Drawn to the "largest financial network" positioning and the WCAG-AA accessibility story; wants infrastructure that will still be there, and still accessible, in five years.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no connected accounts)** | White canvas. Single Deep Navy (`#00172e`) line at body size explaining nothing is linked yet, with one dark pill CTA to connect. No illustration clutter. |
| **Empty (no results)** | Slate (`#5c7695`) single line: nothing to show, plus a path to adjust criteria. Honest, calm. |
| **Loading (data fetch)** | Flat skeleton blocks at final card dimensions, 12px radius, on white with `#ebf0f4` hairlines. No shadow shimmer — a flat pulse consistent with the shadowless system. |
| **Loading (in-place refresh)** | Subtle Link Blue (`#0a54c4`) progress indicator; previous values stay visible. |
| **Error (connection failed)** | Inline message in Ink (`#111111`) with a plain-language explanation and a retry. No generic "Something went wrong" — states what to do next. |
| **Error (form validation)** | Field-level message below the input describing what is valid, not just "Required". Input border shifts to an error tone. |
| **Success (account linked)** | Brief inline confirmation in a calm tone; next-step detail linked immediately below. No celebratory emoji. |
| **Skeleton** | `#ebf0f4`-bordered blocks at final dimensions, 12px radius, flat pulse. |
| **Disabled** | Reduced-opacity surface and text together; navy pill actions fade rather than turn grey, preserving the brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, pill press, focus |
| `motion-standard` | 200ms | Card/section reveal, menu, carousel slide |
| `motion-slow` | 320ms | Page-level transitions, hero reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — menus, cards, carousels |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is functional and quiet — consistent with the flat, fast aesthetic. Pills respond to press with a subtle scale/opacity shift; carousels advance at `motion-standard / ease-enter` driven by the `#0a54c4` controls; the hero gradient may animate its stops slowly as ambient atmosphere (the one place non-interactive motion lives). No bounce or spring — financial infrastructure signals steadiness, not playfulness. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and the gradient freezes; the product remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-17) via playwright getComputedStyle on two surfaces:
- https://plaid.com/ — hero H1 "Turn data into revolutionary financial products"
  (Plaid Sans 76px/500/-3.4px, gradient text fill #86ef5a→#10d0b7 background-clip:text);
  section H2 "Powered by the largest financial network" (58px/500, color rgb(0,23,46) #00172e);
  pill CTAs (100px radius, dark fill on #02294b / #0d0d3f sections); nav ink rgb(35,36,36) #232424
  and rgb(1,46,55) #012e37; body rgb(17,17,17) #111111.
- https://plaid.com/products/ — H1 "Everything you need to build intelligent finance"
  (Plaid Sans 64px/600/-2px, rgb(0,23,46) #00172e); product H2 60px/600; H3 24px/600;
  mega-menu rows bg rgb(247,250,255) #f7faff text rgb(1,46,55) #012e37 6px radius;
  Explore pills on dark bands rgb(2,41,75) #02294b; input border 1px solid rgb(2,41,75) #02294b,
  bg #ffffff, 8px radius.

Token-level claims (§1-9) are sourced from this live inspection.

Voice samples (§10) are verbatim from the live home and products surfaces (hero H1, section H2, products H1).

Design system "Threads" (Platform + Brand split, WCAG 2.1 AA) is documented on Plaid's
own engineering/design blog (medium.com/plaid-design, plaid.com/blog/behind-the-scenes-with-design)
and the Threads brand site (threads.plaid.com/brand). The live brand-guidelines route returned
a 404 to the headless bot, so all token claims are grounded in the two inspected marketing surfaces.

Brand narrative (§11): Plaid founded 2013 by Zach Perret and William Hockey as a US financial-data
API company; product catalog (Auth, Identity, Balance, Transfer, Signal, Protect, IDV) is the live
products-page taxonomy. Founding people/year are widely documented public facts, not directly quoted
from a verified Plaid statement in this turn.

Personas (§13) are fictional archetypes informed by publicly observable Plaid user segments
(fintech developers, product engineers, founders). Names are illustrative; they do not refer to
real people.

Interpretive claims (e.g., "ration the color", "infrastructure should be invisible then delightful")
are editorial readings connecting Plaid's observed design and stated Threads philosophy to its
positioning, not directly sourced Plaid statements.
-->
