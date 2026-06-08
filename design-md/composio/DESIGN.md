---
id: composio
name: Composio
country: US
category: backend-devops
homepage: "https://composio.dev"
primary_color: "#6366f1"
logo:
  type: github
  slug: composiohq
verified: "2026-05-15"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-08"
  note: "primary_color field (#6366f1) is an indigo approximation; the live DS brand is Composio Cobalt #0007cd. Dark-canvas system: many roles use white-opacity (rgba) borders/text — only stated 6-digit hexes promoted to colors; opacity variants live in shadow/note context."
  colors:
    primary: "#0007cd"
    brand: "#0007cd"
    accent-cyan: "#00ffff"
    accent-signal: "#0089ff"
    accent-ocean: "#0096ff"
    canvas: "#0f0f0f"
    surface: "#000000"
    hairline: "#2c2c2c"
    foreground: "#ffffff"
    muted: "#444444"
    on-primary: "#ffffff"
    light-border: "#e0e0e0"
  typography:
    family: { sans: "abcDiatype", mono: "JetBrains Mono" }
    display-hero:   { size: 64, weight: 400, lineHeight: 0.87, use: "Massive compressed hero headings" }
    section:        { size: 48, weight: 400, lineHeight: 1.00, use: "Major feature section titles" }
    subheading-lg:  { size: 40, weight: 400, lineHeight: 1.00, use: "Secondary section markers" }
    subheading:     { size: 28, weight: 400, lineHeight: 1.20, use: "Card titles, feature names" }
    card-title:     { size: 24, weight: 500, lineHeight: 1.20, use: "Medium-emphasis card headings" }
    feature-label:  { size: 20, weight: 500, lineHeight: 1.20, use: "Smaller card titles, labels" }
    body-lg:        { size: 18, weight: 400, lineHeight: 1.20, use: "Intro paragraphs" }
    body:           { size: 16, weight: 400, lineHeight: 1.50, use: "Body text, nav links, buttons" }
    body-sm:        { size: 15, weight: 400, lineHeight: 1.63, use: "Longer-form body text" }
    caption:        { size: 14, weight: 400, lineHeight: 1.63, use: "Descriptions, metadata" }
    label:          { size: 13, weight: 500, lineHeight: 1.50, use: "UI labels, badges" }
    overline:       { size: 12, weight: 500, lineHeight: 1.00, tracking: 0.3, use: "Uppercase overline labels" }
    code:           { size: 16, weight: 400, lineHeight: 1.50, tracking: -0.32, use: "Inline code, terminal output (JetBrains Mono)" }
    code-sm:        { size: 14, weight: 400, lineHeight: 1.50, tracking: -0.28, use: "Code snippets, technical labels (JetBrains Mono)" }
  spacing: { xs: 4, sm: 8, md: 16, base: 16, lg: 24, xl: 32, xxl: 40, section: 80 }
  rounded: { sm: 2, md: 4, lg: 37, full: 9999 }
  shadow:
    brutalist: "rgba(0,0,0,0.15) 4px 4px 0px 0px"
    floating: "rgba(0,0,0,0.5) 0px 8px 32px"
    glow-cyan: "rgba(0,255,255,0.12) radial halo"
  components_harvested: true
  components:
    button-primary: { type: button, bg: "#ffffff", fg: "#0f0f0f", radius: 4, padding: "8px 24px", use: "White fill, near-black text, no border" }
    button-cyan: { type: button, radius: 4, use: "Electric cyan 12% bg, 1px ocean blue #0096ff border, glow-from-within" }
    button-ghost: { type: button, radius: 4, padding: "10px", use: "Transparent fill, 1px signal blue #0089ff or charcoal #2c2c2c border" }
    card: { type: card, bg: "#000000", radius: 4, use: "Pure black surface, white-opacity 4-12% border, optional brutalist shadow" }
    code-block: { type: card, bg: "#000000", radius: 4, use: "JetBrains Mono, white-opacity 10% border, syntax-highlighted" }
---

# Design System Inspiration of Composio

## 1. Visual Theme & Atmosphere

Composio's interface is a nocturnal command center — a dense, developer-focused darkness punctuated by electric cyan and deep cobalt signals. The entire experience is built on an almost-pure-black canvas (`#0f0f0f`) where content floats within barely-visible containment borders, creating the feeling of a high-tech control panel rather than a traditional marketing page. It's a site that whispers authority to developers who live in dark terminals.

The visual language leans heavily into the aesthetic of code editors and terminal windows. JetBrains Mono appears alongside the geometric precision of abcDiatype, reinforcing the message that this is a tool built *by* developers *for* developers. Decorative elements are restrained but impactful — subtle cyan-blue gradient glows emanate from cards and sections like bioluminescent organisms in deep water, while hard-offset shadows (`4px 4px`) on select elements add a raw, brutalist edge that prevents the design from feeling sterile.

What makes Composio distinctive is its tension between extreme minimalism and strategic bursts of luminous color. The site never shouts — headings use tight line-heights (0.87) that compress text into dense, authoritative blocks. Color is rationed like a rare resource: white text for primary content, semi-transparent white (`rgba(255,255,255,0.5-0.6)`) for secondary, and brand blue (`#0007cd`) or electric cyan (`#00ffff`) reserved exclusively for interactive moments and accent glows.

**Key Characteristics:**
- Pitch-black canvas with near-invisible white-border containment (4-12% opacity)
- Dual-font identity: geometric sans-serif (abcDiatype) for content, monospace (JetBrains Mono) for technical credibility
- Ultra-tight heading line-heights (0.87-1.0) creating compressed, impactful text blocks
- Bioluminescent accent strategy — cyan and blue glows that feel like they're emitting light from within
- Hard-offset brutalist shadows (`4px 4px`) on select interactive elements
- Monochrome hierarchy with color used only at the highest-signal moments
- Developer-terminal aesthetic that bridges marketing and documentation

## 2. Color Palette & Roles

### Primary
- **Composio Cobalt** (`#0007cd`): The core brand color — a deep, saturated blue used sparingly for high-priority interactive elements and brand moments. It anchors the identity with quiet intensity.

### Secondary & Accent
- **Electric Cyan** (`#00ffff`): The attention-grabbing accent — used at low opacity (`rgba(0,255,255,0.12)`) for glowing button backgrounds and card highlights. At full saturation, it serves as the energetic counterpoint to the dark canvas.
- **Signal Blue** (`#0089ff` / `rgb(0,137,255)`): Used for select button borders and interactive focus states, bridging the gap between Cobalt and Cyan.
- **Ocean Blue** (`#0096ff` / `rgb(0,150,255)`): Accent border color on CTA buttons, slightly warmer than Signal Blue.

### Surface & Background
- **Void Black** (`#0f0f0f`): The primary page background — not pure black, but a hair warmer, reducing eye strain on dark displays.
- **Pure Black** (`#000000`): Used for card interiors and deep-nested containers, creating a subtle depth distinction from the page background.
- **Charcoal** (`#2c2c2c` / `rgb(44,44,44)`): Used for secondary button borders and divider lines on dark surfaces.

### Neutrals & Text
- **Pure White** (`#ffffff`): Primary heading and high-emphasis text color on dark surfaces.
- **Muted Smoke** (`#444444`): De-emphasized body text, metadata, and tertiary content.
- **Ghost White** (`rgba(255,255,255,0.6)`): Secondary body text and link labels — visible but deliberately receded.
- **Whisper White** (`rgba(255,255,255,0.5)`): Tertiary button text and placeholder content.
- **Phantom White** (`rgba(255,255,255,0.2)`): Subtle button backgrounds and deeply receded UI chrome.

### Semantic & Accent
- **Border Mist 12** (`rgba(255,255,255,0.12)`): Highest-opacity border treatment — used for prominent card edges and content separators.
- **Border Mist 10** (`rgba(255,255,255,0.10)`): Standard container borders on dark surfaces.
- **Border Mist 08** (`rgba(255,255,255,0.08)`): Subtle section dividers and secondary card edges.
- **Border Mist 06** (`rgba(255,255,255,0.06)`): Near-invisible containment borders for background groupings.
- **Border Mist 04** (`rgba(255,255,255,0.04)`): The faintest border — used for atmospheric separation only.
- **Light Border** (`#e0e0e0` / `rgb(224,224,224)`): Reserved for light-surface contexts (rare on this site).

### Gradient System
- **Cyan Glow**: Radial gradients using `#00ffff` at very low opacity, creating bioluminescent halos behind cards and feature sections.
- **Blue-to-Black Fade**: Linear gradients from Composio Cobalt (`#0007cd`) fading into Void Black (`#0f0f0f`), used in hero backgrounds and section transitions.
- **White Fog**: Bottom-of-page gradient transitioning from dark to a diffused white/gray, creating an atmospheric "horizon line" effect near the footer.

## 3. Typography Rules

### Font Family
- **Primary**: `abcDiatype`, with fallbacks: `abcDiatype Fallback, ui-sans-serif, system-ui, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji`
- **Monospace**: `JetBrains Mono`, with fallbacks: `JetBrains Mono Fallback, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New`
- **System Monospace** (fallback): `Menlo`, `monospace` for smallest inline code

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display / Hero | abcDiatype | 64px (4rem) | 400 | 0.87 (ultra-tight) | normal | Massive, compressed headings |
| Section Heading | abcDiatype | 48px (3rem) | 400 | 1.00 (tight) | normal | Major feature section titles |
| Sub-heading Large | abcDiatype | 40px (2.5rem) | 400 | 1.00 (tight) | normal | Secondary section markers |
| Sub-heading | abcDiatype | 28px (1.75rem) | 400 | 1.20 (tight) | normal | Card titles, feature names |
| Card Title | abcDiatype | 24px (1.5rem) | 500 | 1.20 (tight) | normal | Medium-emphasis card headings |
| Feature Label | abcDiatype | 20px (1.25rem) | 500 | 1.20 (tight) | normal | Smaller card titles, labels |
| Body Large | abcDiatype | 18px (1.125rem) | 400 | 1.20 (tight) | normal | Intro paragraphs |
| Body / Button | abcDiatype | 16px (1rem) | 400 | 1.50 | normal | Standard body text, nav links, buttons |
| Body Small | abcDiatype | 15px (0.94rem) | 400 | 1.63 (relaxed) | normal | Longer-form body text |
| Caption | abcDiatype | 14px (0.875rem) | 400 | 1.63 (relaxed) | normal | Descriptions, metadata |
| Label | abcDiatype | 13px (0.81rem) | 500 | 1.50 | normal | UI labels, badges |
| Tag / Overline | abcDiatype | 12px (0.75rem) | 500 | 1.00 (tight) | 0.3px | Uppercase overline labels |
| Micro | abcDiatype | 12px (0.75rem) | 400 | 1.00 (tight) | 0.3px | Smallest sans-serif text |
| Code Body | JetBrains Mono | 16px (1rem) | 400 | 1.50 | -0.32px | Inline code, terminal output |
| Code Small | JetBrains Mono | 14px (0.875rem) | 400 | 1.50 | -0.28px | Code snippets, technical labels |
| Code Caption | JetBrains Mono | 12px (0.75rem) | 400 | 1.50 | -0.28px | Small code references |
| Code Overline | JetBrains Mono | 14px (0.875rem) | 400 | 1.43 | 0.7px | Uppercase technical labels |
| Code Micro | JetBrains Mono | 11px (0.69rem) | 400 | 1.33 | 0.55px | Tiny uppercase code tags |
| Code Nano | JetBrains Mono | 9-10px | 400 | 1.33 | 0.45-0.5px | Smallest monospace text |

### Principles
- **Compression creates authority**: Heading line-heights are drastically tight (0.87-1.0), making large text feel dense and commanding rather than airy and decorative.
- **Dual personality**: abcDiatype carries the marketing voice — geometric, precise, friendly. JetBrains Mono carries the technical voice — credible, functional, familiar to developers.
- **Weight restraint**: Almost everything is weight 400 (regular). Weight 500 (medium) is reserved for small labels, badges, and select card titles. Weight 700 (bold) appears only in microscopic system-monospace contexts.
- **Negative letter-spacing on code**: JetBrains Mono uses negative letter-spacing (-0.28px to -0.98px) for dense, compact code blocks that feel like a real IDE.
- **Uppercase is earned**: The `uppercase` + `letter-spacing` treatment is reserved exclusively for tiny overline labels and technical tags — never for headings.

## 4. Component Stylings

### Buttons

**Primary CTA (White Fill)**
- Background: Pure White (`#ffffff`)
- Text: Near Black (`oklch(0.145 0 0)`)
- Padding: comfortable (8px 24px)
- Border: none
- Radius: subtly rounded (likely 4px based on token scale)
- Hover: likely subtle opacity reduction or slight gray shift

**Cyan Accent CTA**
- Background: Electric Cyan at 12% opacity (`rgba(0,255,255,0.12)`)
- Text: Near Black (`oklch(0.145 0 0)`)
- Padding: comfortable (8px 24px)
- Border: thin solid Ocean Blue (`1px solid rgb(0,150,255)`)
- Radius: subtly rounded (4px)
- Creates a "glowing from within" effect on dark backgrounds

**Ghost / Outline (Signal Blue)**
- Background: transparent
- Text: Near Black (`oklch(0.145 0 0)`)
- Padding: balanced (10px)
- Border: thin solid Signal Blue (`1px solid rgb(0,137,255)`)
- Hover: likely fill or border color shift

**Ghost / Outline (Charcoal)**
- Background: transparent
- Text: Near Black (`oklch(0.145 0 0)`)
- Padding: balanced (10px)
- Border: thin solid Charcoal (`1px solid rgb(44,44,44)`)
- For secondary/tertiary actions on dark surfaces

**Phantom Button**
- Background: Phantom White (`rgba(255,255,255,0.2)`)
- Text: Whisper White (`rgba(255,255,255,0.5)`)
- No visible border
- Used for deeply de-emphasized actions

### Cards & Containers
- Background: Pure Black (`#000000`) or transparent
- Border: white at very low opacity, ranging from Border Mist 04 (`rgba(255,255,255,0.04)`) to Border Mist 12 (`rgba(255,255,255,0.12)`) depending on prominence
- Radius: barely rounded corners (2px for inline elements, 4px for content cards)
- Shadow: select cards use the hard-offset brutalist shadow (`rgba(0,0,0,0.15) 4px 4px 0px 0px`) — a distinctive design choice that adds raw depth
- Elevation shadow: deeper containers use soft diffuse shadow (`rgba(0,0,0,0.5) 0px 8px 32px`)
- Hover behavior: likely subtle border opacity increase or faint glow effect

### Inputs & Forms
- No explicit input token data extracted — inputs likely follow the dark-surface pattern with:
  - Background: transparent or Pure Black
  - Border: Border Mist 10 (`rgba(255,255,255,0.10)`)
  - Focus: border shifts to Signal Blue (`#0089ff`) or Electric Cyan
  - Text: Pure White with Ghost White placeholder

### Navigation
- Sticky top nav bar on dark/black background
- Logo (white SVG): Composio wordmark on the left
- Nav links: Pure White (`#ffffff`) at standard body size (16px, abcDiatype)
- CTA button in the nav: White Fill Primary style
- Mobile: collapses to hamburger menu, single-column layout
- Subtle bottom border on nav (Border Mist 06-08)

### Image Treatment
- Dark-themed product screenshots and UI mockups dominate
- Images sit within bordered containers matching the card system
- Blue/cyan gradient glows behind or beneath feature images
- No visible border-radius on images beyond container rounding (4px)
- Full-bleed within their card containers

### Distinctive Components

**Stats/Metrics Display**
- Large monospace numbers (JetBrains Mono) — "10k+" style
- Tight layout with subtle label text beneath

**Code Blocks / Terminal Previews**
- Dark containers with JetBrains Mono
- Syntax-highlighted content
- Subtle bordered containers (Border Mist 10)

**Integration/Partner Logos Grid**
- Grid layout of tool logos on dark surface
- Contained within bordered card
- Demonstrates ecosystem breadth

**"COMPOSIO" Brand Display**
- Oversized brand typography — likely the largest text on the page
- Used as a section divider/brand statement
- Stark white on black

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 1px, 2px, 4px, 6px, 8px, 10px, 12px, 14px, 16px, 18px, 20px, 24px, 30px, 32px, 40px
- Component padding: typically 10px (buttons) to 24px (CTA buttons horizontal)
- Section padding: generous vertical spacing (estimated 80-120px between major sections)
- Card internal padding: approximately 24-32px

### Grid & Container
- Max container width: approximately 1200px, centered
- Content sections use single-column or 2-3 column grids for feature cards
- Hero: centered single-column with maximum impact
- Feature sections: asymmetric layouts mixing text blocks with product screenshots

### Whitespace Philosophy
- **Breathing room between sections**: Large vertical gaps create distinct "chapters" in the page scroll.
- **Dense within components**: Cards and text blocks are internally compact (tight line-heights, minimal internal padding), creating focused information nodes.
- **Contrast-driven separation**: Rather than relying solely on whitespace, Composio uses border opacity differences and subtle background shifts to delineate content zones.

### Border Radius Scale
- Nearly squared (2px): Inline code spans, small tags, pre blocks — the sharpest treatment, conveying technical precision
- Subtly rounded (4px): Content cards, images, standard containers — the workhorse radius
- Pill-shaped (37px): Select buttons and badges — creates a softer, more approachable feel for key CTAs
- Full round (9999px+): Circular elements, avatar-like containers, decorative dots

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow, no border | Page background, inline text |
| Contained (Level 1) | Border Mist 04-08, no shadow | Background groupings, subtle sections |
| Card (Level 2) | Border Mist 10-12, no shadow | Standard content cards, code blocks |
| Brutalist (Level 3) | Hard offset shadow (`4px 4px`, 15% black) | Select interactive cards, distinctive feature highlights |
| Floating (Level 4) | Soft diffuse shadow (`0px 8px 32px`, 50% black) | Modals, overlays, deeply elevated content |

**Shadow Philosophy**: Composio uses shadows sparingly and with deliberate contrast. The hard-offset brutalist shadow is the signature — it breaks the sleek darkness with a raw, almost retro-computing feel. The soft diffuse shadow is reserved for truly floating elements. Most depth is communicated through border opacity gradations rather than shadows.

### Decorative Depth
- **Cyan Glow Halos**: Radial gradient halos using Electric Cyan at low opacity behind feature cards and images. Creates a "screen glow" effect as if the UI elements are emitting light.
- **Blue-Black Gradient Washes**: Linear gradients from Composio Cobalt to Void Black used as section backgrounds, adding subtle color temperature shifts.
- **White Fog Horizon**: A gradient from dark to diffused white/gray at the bottom of the page, creating an atmospheric "dawn" effect before the footer.

## 7. Do's and Don'ts

### Do
- Use Void Black (`#0f0f0f`) as the primary page background — never pure white for main surfaces
- Keep heading line-heights ultra-tight (0.87-1.0) for compressed, authoritative text blocks
- Use white-opacity borders (4-12%) for containment — they're more important than shadows here
- Reserve Electric Cyan (`#00ffff`) for high-signal moments only — CTAs, glows, interactive accents
- Pair abcDiatype with JetBrains Mono to reinforce the developer-tool identity
- Use the hard-offset shadow (`4px 4px`) intentionally on select elements for brutalist personality
- Keep button text dark (`oklch(0.145 0 0)`) even on the darkest backgrounds — buttons carry their own surface
- Layer opacity-based borders to create subtle depth without shadows
- Use uppercase + letter-spacing only for tiny overline labels (12px or smaller)

### Don't
- Don't use bright backgrounds or light surfaces as primary containers
- Don't apply heavy shadows everywhere — depth comes from border opacity, not box-shadow
- Don't use Composio Cobalt (`#0007cd`) as a text color — it's too dark on dark and too saturated on light
- Don't increase heading line-heights beyond 1.2 — the compressed feel is core to the identity
- Don't use bold (700) weight for body or heading text — 400-500 is the ceiling
- Don't mix warm colors — the palette is strictly cool (blue, cyan, white, black)
- Don't use border-radius larger than 4px on content cards — the precision of near-square corners is intentional
- Don't place Electric Cyan at full opacity on large surfaces — it's an accent, used at 12% max for backgrounds
- Don't use decorative serif or handwritten fonts — the entire identity is geometric sans + monospace
- Don't skip the monospace font for technical content — JetBrains Mono is not decorative, it's a credibility signal

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <768px | Single column, hamburger nav, full-width cards, reduced section padding, hero text scales down to ~28-40px |
| Tablet | 768-1024px | 2-column grid for cards, condensed nav, slightly reduced hero text |
| Desktop | 1024-1440px | Full multi-column layout, expanded nav with all links visible, large hero typography (64px) |
| Large Desktop | >1440px | Max-width container centered, generous horizontal margins |

### Touch Targets
- Minimum touch target: 44x44px for all interactive elements
- Buttons use comfortable padding (8px 24px minimum) ensuring adequate touch area
- Nav links spaced with sufficient gap for thumb navigation

### Collapsing Strategy
- **Navigation**: Full horizontal nav on desktop collapses to hamburger on mobile
- **Feature grids**: 3-column → 2-column → single-column stacking
- **Hero text**: 64px → 40px → 28px progressive scaling
- **Section padding**: Reduces proportionally but maintains generous vertical rhythm
- **Cards**: Stack vertically on mobile with full-width treatment
- **Code blocks**: Horizontal scroll on smaller viewports rather than wrapping

### Image Behavior
- Product screenshots scale proportionally within their containers
- Dark-themed images maintain contrast on the dark background at all sizes
- Gradient glow effects scale with container size
- No visible art direction changes between breakpoints — same crops, proportional scaling

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: "Pure White (#ffffff)"
- Page Background: "Void Black (#0f0f0f)"
- Brand Accent: "Composio Cobalt (#0007cd)"
- Glow Accent: "Electric Cyan (#00ffff)"
- Heading Text: "Pure White (#ffffff)"
- Body Text: "Ghost White (rgba(255,255,255,0.6))"
- Card Border: "Border Mist 10 (rgba(255,255,255,0.10))"
- Button Border: "Signal Blue (#0089ff)"

### Example Component Prompts
- "Create a feature card with a near-black background (#000000), barely visible white border at 10% opacity, subtly rounded corners (4px), and a hard-offset shadow (4px right, 4px down, 15% black). Use Pure White for the title in abcDiatype at 24px weight 500, and Ghost White (60% opacity) for the description at 16px."
- "Design a primary CTA button with a solid white background, near-black text, comfortable padding (8px vertical, 24px horizontal), and subtly rounded corners. Place it next to a secondary button with transparent background, Signal Blue border, and matching padding."
- "Build a hero section on Void Black (#0f0f0f) with a massive heading at 64px, line-height 0.87, in abcDiatype. Center the text. Add a subtle blue-to-black gradient glow behind the content. Include a white CTA button and a cyan-accented secondary button below."
- "Create a code snippet display using JetBrains Mono at 14px with -0.28px letter-spacing on a black background. Add a Border Mist 10 border (rgba(255,255,255,0.10)) and 4px radius. Show syntax-highlighted content with white and cyan text."
- "Design a navigation bar on Void Black with the Composio wordmark in white on the left, 4-5 nav links in white abcDiatype at 16px, and a white-fill CTA button on the right. Add a Border Mist 06 bottom border."

### Iteration Guide
When refining existing screens generated with this design system:
1. Focus on ONE component at a time
2. Reference specific color names and hex codes from this document — "use Ghost White (rgba(255,255,255,0.6))" not "make it lighter"
3. Use natural language descriptions — "make the border barely visible" = Border Mist 04-06
4. Describe the desired "feel" alongside specific measurements — "compressed and authoritative heading at 48px with line-height 1.0"
5. For glow effects, specify "Electric Cyan at 12% opacity as a radial gradient behind the element"
6. Always specify which font — abcDiatype for marketing, JetBrains Mono for technical/code content

## 10. Voice & Tone

Composio's voice is **terminal-confident and technically precise.** Marketing copy reads like a developer changelog — capability statements, no hype. Hero CTAs use uppercase ("GET STARTED", "ADD TO MY AGENT", "TRY IT OUT") which on most brands would feel aggressive but on Composio reads as "command line aesthetic" — the brand register intentionally borrows terminal vocabulary to signal "this is for developers building agent infrastructure."

| Context | Tone |
|---|---|
| CTA | UPPERCASE imperative. "GET STARTED", "ADD TO MY AGENT", "TRY IT OUT" |
| Marketing | Capability + integration list. "X tools, Y agents, Z protocols" |
| Documentation | Code-block-first; minimal prose between examples |
| Error | Stack-trace-acceptable. Technical users want the actual error |

**Voice samples**
- Marketing CTA: *"GET STARTED FOR FREE"* / *"ADD TO MY AGENT"* <!-- verified: composio.dev homepage 2026-05 -->

**Forbidden phrases.** Consumer-AI hype ("magic", "AI revolution"). Apology theatre. Excessive emoji.

## 11. Brand Narrative

Composio was founded **2023** in San Francisco by **Soham Ganatra (CEO)** and **Karan Vaidya (CTO)** — both **IIT Bombay** graduates who first met at a **Physics Olympiad camp** before becoming roommates in college ([Tracxn — Composio profile](https://tracxn.com/d/companies/composio/), [Entrackr — Composio Series A](https://entrackr.com/2024/11/composio-raises-25-mn-in-series-a-led-by-lightspeed/)). The platform provides pre-built integrations — **200+ tools and APIs** that LLM agents can call — and powers agent infrastructure for **100K+ developers and 200+ companies** including **Glean, April, OpenNote, and Altera**. Funding total **~$29M**: **$4M seed (2024)** led by **Together Fund** with **Elevation Capital** + angels **Gokul Rajaram, Sohum Mazumdar (Rubrik), Dharmesh Shah (HubSpot)**, then **$25M Series A (Nov 2024)** led by **Lightspeed Venture Partners** ([Lightspeed announcement](https://lsvp.com/stories/composio-series-a/), [Entrackr](https://entrackr.com/2024/11/composio-raises-25-mn-in-series-a-led-by-lightspeed/)). The brand voice — terminal-aesthetic UPPERCASE, monospace typography, electric-cyan accent — signals "infrastructure for builders" rather than "consumer chatbot wrapper." What Composio refuses: consumer-AI hype framing, magic-wand metaphors, abstraction that hides the actual tool call.

## 12. Principles

1. **Terminal aesthetic is the register.** UPPERCASE CTAs + JetBrains Mono for technical content. *UI implication:* don't soften with sentence-case marketing; the brand feels like a CLI.
2. **Integration count is the headline.** *UI implication:* hero modules show "200+ tools" or live integration grid, not vague claims.
3. **Code-first documentation.** *UI implication:* every concept page leads with a copy-paste code example.
4. **Electric Cyan glows are decorative depth.** *UI implication:* radial-gradient cyan glows behind cards, never solid cyan fills on chrome.
5. **Two fonts, strict roles.** abcDiatype for marketing, JetBrains Mono for technical. *UI implication:* never mix; pick the surface and commit.

## 13. Personas

*Personas are fictional archetypes informed by Composio user segments (AI engineers, agent platform builders, indie developers shipping agent products), not individual people.*

**Akira Yamamoto, 34, Tokyo.** AI engineer building a Slack agent at a B2B SaaS. Composio for the Slack/Notion/GitHub integrations he'd otherwise build himself.

**Priya Krishnan, 28, Bengaluru.** Indie developer shipping a personal-assistant agent. Cares about per-call pricing + which tools have OAuth flows handled.

**Marcus Webb, 41, San Francisco.** Platform engineer at AI startup. Evaluating Composio vs building integration layer in-house. Latency + observability are the deciding factors.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no agents)** | UPPERCASE CTA "CREATE FIRST AGENT" + integration grid preview |
| **Empty (no integrations)** | "BROWSE 200+ INTEGRATIONS" with searchable grid |
| **Loading (integration installing)** | OAuth flow with provider-specific UI; progress visible |
| **Loading (agent running)** | Per-step trace with tool calls visible |
| **Error (tool failed)** | Full stack trace + provider error code + retry button |
| **Error (auth)** | "RECONNECT [Tool]" with OAuth re-trigger |
| **Success (integration installed)** | Cyan glow pulse on integration card; toast "INSTALLED" |
| **Success (agent run)** | Trace expanded showing all tool calls + final output |
| **Skeleton (integration grid)** | Dark cards with subtle cyan border |
| **Disabled (rate limit)** | 0.5 opacity + "UPGRADE" CTA |
| **Loading (model inference)** | Per-token streaming visible alongside tool-call trace |

## 15. Motion & Easing

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle |
| `motion-fast` | 100ms | Hover (faster than typical for terminal feel) |
| `motion-glow-pulse` | 1500ms | Cyan glow heartbeat behind hero elements |
| `motion-standard` | 250ms | Modal, panel |

Easings: terminal-precise. **Glow pulses** never animate on input fields (would distract). `prefers-reduced-motion: reduce` removes glow pulse (becomes static).

---

**Verified:** 2026-05-08 (B2 loop)
**Tier 1 sources:** composio.dev (live DOM via playwright — UPPERCASE CTAs `#fff` / `#000` / 0px radius / 6×8 padding / 33px / 14px·400)
**Tier 2 sources:** styles.refero.design / getdesign.md — no record.
**Tier 1 (Philosophy):** composio.dev homepage; composio.dev/pricing.
**Tier 2 (Founders/Funding):** Tracxn, Entrackr, Lightspeed Venture Partners blog.
**Style ref:** `stripe` (engineering tone). **Conflicts unresolved:** none.
