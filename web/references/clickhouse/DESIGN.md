---
id: clickhouse
name: ClickHouse
country: US
category: backend-devops
homepage: "https://clickhouse.com"
primary_color: "#fff100"
logo:
  type: simpleicons
  slug: clickhouse
verified: "2026-05-15"
omd: "0.1"
ds:
  name: ClickHouse Design
  url: "https://clickhouse.design"
  type: system
  description: ClickHouse brand hub plus the Click UI design system and component library.
tokens:
  source: prose-derived
  extracted: "2026-06-08"
  note: "primary = live interactive Neon Volt (#faff69); brand = documented logo/marketing yellow (#fff100)"
  colors:
    primary: "#faff69"
    primary-hover: "#f4f692"
    brand: "#fff100"
    canvas: "#000000"
    foreground: "#ffffff"
    muted: "#a0a0a0"
    on-primary: "#151515"
    surface: "#141414"
    surface-hover: "#3a3a3a"
    hairline: "#414141"
    hairline-deep: "#343434"
    cta-green: "#166534"
    cta-green-dark: "#14572f"
    active: "#f4f692"
    border-olive: "#4f5100"
    olive-dark: "#161600"
  typography:
    family: { sans: "Inter", display: "Basier", mono: "Inconsolata" }
    display-mega:    { size: 96, weight: 900, lineHeight: 1.00, use: "Hero headline, maximum impact extra-heavy" }
    display-hero:    { size: 72, weight: 700, lineHeight: 1.00, use: "Section hero titles" }
    feature-heading: { size: 36, weight: 600, lineHeight: 1.30, use: "Feature section anchors (Basier)" }
    subheading:      { size: 24, weight: 600, lineHeight: 1.17, use: "Card headings" }
    feature-title:   { size: 20, weight: 600, lineHeight: 1.40, use: "Small feature titles" }
    body-lg:         { size: 18, weight: 400, lineHeight: 1.56, use: "Intro paragraphs, button text" }
    body:            { size: 16, weight: 400, lineHeight: 1.50, use: "Standard body, nav, buttons" }
    caption:         { size: 14, weight: 400, lineHeight: 1.43, use: "Metadata, descriptions, links" }
    uppercase-label: { size: 14, weight: 600, lineHeight: 1.43, tracking: 1.4, use: "Section overlines, wide-tracked uppercase" }
    code:            { size: 16, weight: 600, lineHeight: 1.50, use: "Code blocks, commands (Inconsolata)" }
    small:           { size: 12, weight: 500, lineHeight: 1.33, use: "Smallest text" }
    micro:           { size: 11.2, weight: 500, lineHeight: 1.79, use: "Tags, tiny labels" }
  spacing: { xs: 4, sm: 8, md: 16, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 4, md: 8, full: 9999 }
  shadow:
    subtle: "rgba(0,0,0,0.1) 0px 1px 3px, rgba(0,0,0,0.1) 0px 1px 2px -1px"
    elevated: "rgba(0,0,0,0.1) 0px 10px 15px -3px, rgba(0,0,0,0.1) 0px 4px 6px -4px"
    inset: "rgba(0,0,0,0.06) 0px 4px 4px, rgba(0,0,0,0.14) 0px 4px 25px inset"
  components_harvested: true
  components:
    button-neon-primary: { type: button, bg: "#faff69", fg: "#151515", radius: 4, padding: "0px 16px", use: "Neon Volt fill; hover darkens, active text pale yellow" }
    button-dark-solid: { type: button, bg: "#141414", fg: "#ffffff", radius: 4, padding: "12px 16px", use: "Near-black fill; hover #3a3a3a" }
    button-forest-green: { type: button, bg: "#166534", fg: "#ffffff", use: "Forest green fill — primary conversion CTA" }
    button-ghost: { type: button, fg: "#ffffff", radius: 4, use: "Transparent fill, 1px solid #4f5100 olive border" }
    card: { type: card, bg: "#141414", radius: 4, use: "Near-black surface, 1px charcoal border" }
    card-neon-highlight: { type: card, bg: "#141414", radius: 4, use: "Dark card with 1px solid #faff69 neon border for featured/selected treatment" }
    performance-stat: { type: card, fg: "#faff69", use: "Oversized number 72px+ weight 700-900, neon accents, brief description beneath" }
---

# Design System Inspiration of ClickHouse

## 1. Visual Theme & Atmosphere

ClickHouse's interface is a high-performance cockpit rendered in acid yellow-green on obsidian black — a design that screams "speed" before you read a single word. The entire experience lives in darkness: pure black backgrounds (`#000000`) with dark charcoal cards (`#414141` borders) creating a terminal-grade aesthetic where the only chromatic interruption is the signature neon yellow-green (`#faff69`) that slashes across CTAs, borders, and highlighted moments like a highlighter pen on a dark console.

The typography is aggressively heavy — Inter at weight 900 (Black) for the hero headline at 96px creates text blocks that feel like they have physical mass. This "database for AI" site communicates raw power through visual weight: thick type, high-contrast neon accents, and performance stats displayed as oversized numbers. There's nothing subtle about ClickHouse's design, and that's entirely the point — it mirrors the product's promise of extreme speed and performance.

What makes ClickHouse distinctive is the electrifying tension between the near-black canvas and the neon yellow-green accent. This color combination (`#faff69` on `#000000`) creates one of the highest-contrast pairings in any tech brand, making every CTA button, every highlighted card, and every accent border impossible to miss. Supporting this is a forest green (`#166534`) for secondary CTAs that adds depth to the action hierarchy without competing with the neon.

**Key Characteristics:**
- Pure black canvas (#000000) with neon yellow-green (#faff69) accent — maximum contrast
- Extra-heavy display typography: Inter at weight 900 (Black) up to 96px
- Dark charcoal card system with #414141 borders at 80% opacity
- Forest green (#166534) secondary CTA buttons
- Performance stats as oversized display numbers
- Uppercase labels with wide letter-spacing (1.4px) for navigation structure
- Active/pressed state shifts text to pale yellow (#f4f692)
- All links hover to neon yellow-green — unified interactive signal
- Inset shadows on select elements creating "pressed into the surface" depth

## 2. Color Palette & Roles

### Primary
- **Neon Volt** (`#faff69`): The signature brand color — a vivid acid yellow-green that's the sole chromatic accent on the black canvas. Used for primary CTAs, accent borders, link hovers, and highlighted moments.
- **Forest Green** (`#166534`): Secondary CTA color — a deep, saturated green for "Get Started" and primary action buttons that need distinction from the neon.
- **Dark Forest** (`#14572f`): A darker green variant for borders and secondary accents.

### Secondary & Accent
- **Pale Yellow** (`#f4f692`): Active/pressed state text color — a softer, more muted version of Neon Volt for state feedback.
- **Border Olive** (`#4f5100`): A dark olive-yellow for ghost button borders — the neon's muted sibling.
- **Olive Dark** (`#161600`): The darkest neon-tinted color for subtle brand text.

### Surface & Background
- **Pure Black** (`#000000`): The primary page background — absolute black for maximum contrast.
- **Near Black** (`#141414`): Button backgrounds and slightly elevated dark surfaces.
- **Charcoal** (`#414141`): The primary border color at 80% opacity — the workhorse for card and container containment.
- **Deep Charcoal** (`#343434`): Darker border variant for subtle division lines.
- **Hover Gray** (`#3a3a3a`): Button hover state background — slightly lighter than Near Black.

### Neutrals & Text
- **Pure White** (`#ffffff`): Primary text on dark surfaces.
- **Silver** (`#a0a0a0`): Secondary body text and muted content.
- **Mid Gray** (`#585858` at 28%): Subtle gray overlay for depth effects.
- **Border Gray** (`#e5e7eb`): Light border variant (used in rare light contexts).

### Gradient System
- **None in the traditional sense.** ClickHouse uses flat color blocks and high-contrast borders. The "gradient" is the contrast itself — neon yellow-green against pure black creates a visual intensity that gradients would dilute.

## 3. Typography Rules

### Font Family
- **Primary**: `Inter` (Next.js optimized variant `__Inter_d1b8ee`)
- **Secondary Display**: `Basier` (`__basier_a58b65`), with fallbacks: `Arial, Helvetica`
- **Code**: `Inconsolata` (`__Inconsolata_a25f62`)

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Mega | Inter | 96px (6rem) | 900 | 1.00 (tight) | normal | Maximum impact, extra-heavy |
| Display / Hero | Inter | 72px (4.5rem) | 700 | 1.00 (tight) | normal | Section hero titles |
| Feature Heading | Basier | 36px (2.25rem) | 600 | 1.30 (tight) | normal | Feature section anchors |
| Sub-heading | Inter / Basier | 24px (1.5rem) | 600–700 | 1.17–1.38 | normal | Card headings |
| Feature Title | Inter / Basier | 20px (1.25rem) | 600–700 | 1.40 | normal | Small feature titles |
| Body Large | Inter | 18px (1.13rem) | 400–700 | 1.56 | normal | Intro paragraphs, button text |
| Body / Button | Inter | 16px (1rem) | 400–700 | 1.50 | normal | Standard body, nav, buttons |
| Caption | Inter | 14px (0.88rem) | 400–700 | 1.43 | normal | Metadata, descriptions, links |
| Uppercase Label | Inter | 14px (0.88rem) | 600 | 1.43 | 1.4px | Section overlines, wide-tracked |
| Code | Inconsolata | 16px (1rem) | 600 | 1.50 | normal | Code blocks, commands |
| Small | Inter | 12px (0.75rem) | 500 | 1.33 | normal | Smallest text |
| Micro | Inter | 11.2px (0.7rem) | 500 | 1.79 (relaxed) | normal | Tags, tiny labels |

### Principles
- **Weight 900 is the weapon**: The display headline uses Inter Black (900) — a weight most sites never touch. Combined with 96px size, this creates text with a physical, almost architectural presence.
- **Full weight spectrum**: The system uses 400, 500, 600, 700, and 900 — covering the full gamut. Weight IS hierarchy.
- **Uppercase with maximum tracking**: Section overlines use 1.4px letter-spacing — wider than most systems — creating bold structural labels that stand out against the dense dark background.
- **Dual sans-serif**: Inter handles display and body; Basier handles feature section headings at 600 weight. This creates a subtle personality shift between "data/performance" (Inter) and "product/feature" (Basier) contexts.

## 4. Component Stylings

### Buttons

**Neon Primary**
- Background: Neon Volt (`#faff69`)
- Text: Near Black (`#151515`)
- Padding: 0px 16px
- Radius: sharp (4px)
- Border: `1px solid #faff69`
- Hover: background shifts to dark (`rgb(29, 29, 29)`), text stays
- Active: text shifts to Pale Yellow (`#f4f692`)
- The eye-catching CTA — neon on black

**Dark Solid**
- Background: Near Black (`#141414`)
- Text: Pure White (`#ffffff`)
- Padding: 12px 16px
- Radius: 4px or 8px
- Border: `1px solid #141414`
- Hover: bg shifts to Hover Gray (`#3a3a3a`), text to 80% opacity
- Active: text to Pale Yellow
- The standard action button

**Forest Green**
- Background: Forest Green (`#166534`)
- Text: Pure White (`#ffffff`)
- Padding: 12px 16px
- Border: `1px solid #141414`
- Hover: same dark shift
- Active: Pale Yellow text
- The "Get Started" / primary conversion button

**Ghost / Outlined**
- Background: transparent
- Text: Pure White (`#ffffff`)
- Padding: 0px 32px
- Radius: 4px
- Border: `1px solid #4f5100` (olive-tinted)
- Hover: dark bg shift
- Active: Pale Yellow text
- Secondary actions with neon-tinted border

**Pill Toggle**
- Background: transparent
- Radius: pill (9999px)
- Used for toggle/switch elements

### Cards & Containers
- Background: transparent or Near Black
- Border: `1px solid rgba(65, 65, 65, 0.8)` — the signature charcoal containment
- Radius: 4px (small elements) or 8px (cards, containers)
- Shadow Level 1: subtle (`rgba(0,0,0,0.1) 0px 1px 3px, rgba(0,0,0,0.1) 0px 1px 2px -1px`)
- Shadow Level 2: medium (`rgba(0,0,0,0.1) 0px 10px 15px -3px, rgba(0,0,0,0.1) 0px 4px 6px -4px`)
- Shadow Level 3: inset (`rgba(0,0,0,0.06) 0px 4px 4px, rgba(0,0,0,0.14) 0px 4px 25px inset`) — the "pressed" effect
- Neon-highlighted cards: selected/active cards get neon yellow-green border or accent

### Navigation
- Dark nav on black background
- Logo: ClickHouse wordmark + icon in yellow/neon
- Links: white text, hover to Neon Volt (#faff69)
- CTA: Neon Volt button or Forest Green button
- Uppercase labels for categories

### Distinctive Components

**Performance Stats**
- Oversized numbers (72px+, weight 700–900)
- Brief descriptions beneath
- High-contrast neon accents on key metrics
- The primary visual proof of performance claims

**Neon-Highlighted Card**
- Standard dark card with neon yellow-green border highlight
- Creates "selected" or "featured" treatment
- The accent border makes the card pop against the dark canvas

**Code Blocks**
- Dark surface with Inconsolata at weight 600
- Neon and white syntax highlighting
- Terminal-like aesthetic

**Trust Bar**
- Company logos on dark background
- Monochrome/white logo treatment
- Horizontal layout

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 2px, 6px, 7px, 8px, 10px, 12px, 16px, 20px, 24px, 25px, 32px, 40px, 44px, 48px, 64px
- Button padding: 12px 16px (standard), 0px 16px (compact), 0px 32px (wide ghost)
- Section vertical spacing: generous (48–64px)

### Grid & Container
- Max container width: up to 2200px (extra-wide) with responsive scaling
- Hero: full-width dark with massive typography
- Feature sections: multi-column card grids with dark borders
- Stats: horizontal metric bar
- Full-dark page — no light sections

### Whitespace Philosophy
- **Dark void as canvas**: The pure black background provides infinite depth — elements float in darkness.
- **Dense information**: Feature cards and stats are packed with data, reflecting the database product's performance focus.
- **Neon highlights as wayfinding**: Yellow-green accents guide the eye through the dark interface like runway lights.

### Border Radius Scale
- Sharp (4px): Buttons, badges, small elements, code blocks
- Comfortable (8px): Cards, containers, dividers
- Pill (9999px): Toggle buttons, status indicators

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Black background, text blocks |
| Bordered (Level 1) | `1px solid rgba(65,65,65,0.8)` | Standard cards, containers |
| Subtle (Level 2) | `0px 1px 3px rgba(0,0,0,0.1)` | Subtle card lift |
| Elevated (Level 3) | `0px 10px 15px -3px rgba(0,0,0,0.1)` | Feature cards, hover states |
| Pressed/Inset (Level 4) | `0px 4px 25px rgba(0,0,0,0.14) inset` | Active/pressed elements — "sunk into the surface" |
| Neon Highlight (Level 5) | Neon Volt border (`#faff69`) | Featured/selected cards, maximum emphasis |

**Shadow Philosophy**: ClickHouse uses shadows on a black canvas, where they're barely visible — they exist more for subtle dimensionality than obvious elevation. The most distinctive depth mechanism is the **inset shadow** (Level 4), which creates a "pressed into the surface" effect unique to ClickHouse. The neon border highlight (Level 5) is the primary attention-getting depth mechanism.

## 7. Do's and Don'ts

### Do
- Use Neon Volt (#faff69) as the sole chromatic accent — it must pop against pure black
- Use Inter at weight 900 for hero display text — the extreme weight IS the personality
- Keep everything on pure black (#000000) — never use dark gray as the page background
- Use charcoal borders (rgba(65,65,65,0.8)) for all card containment
- Apply Forest Green (#166534) for primary CTA buttons — distinct from neon for action hierarchy
- Show performance stats as oversized display numbers — it's the core visual argument
- Use uppercase with wide letter-spacing (1.4px) for section labels
- Apply Pale Yellow (#f4f692) for active/pressed text states
- Link hovers should ALWAYS shift to Neon Volt — unified interactive feedback

### Don't
- Don't introduce additional colors — the palette is strictly black, neon, green, and gray
- Don't use the neon as a background fill — it's an accent and border color only (except on CTA buttons)
- Don't reduce display weight below 700 — heavy weight is core to the personality
- Don't use light/white backgrounds anywhere — the entire experience is dark
- Don't round corners beyond 8px — the sharp geometry reflects database precision
- Don't use soft/diffused shadows on black — they're invisible. Use border-based depth instead
- Don't skip the inset shadow on active states — the "pressed" effect is distinctive
- Don't use warm neutrals — all grays are perfectly neutral

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, stacked cards |
| Small Tablet | 640–768px | Minor adjustments |
| Tablet | 768–1024px | 2-column grids |
| Desktop | 1024–1280px | Standard layout |
| Large Desktop | 1280–1536px | Expanded content |
| Ultra-wide | 1536–2200px | Maximum container width |

### Touch Targets
- Buttons with 12px 16px padding minimum
- Card surfaces as touch targets
- Adequate nav link spacing

### Collapsing Strategy
- **Hero text**: 96px → 72px → 48px → 36px
- **Feature grids**: Multi-column → 2 → 1 column
- **Stats**: Horizontal → stacked
- **Navigation**: Full → hamburger

### Image Behavior
- Product screenshots maintain aspect ratio
- Code blocks use horizontal scroll on narrow screens
- All images on dark backgrounds

## 9. Agent Prompt Guide

### Quick Color Reference
- Brand Accent: "Neon Volt (#faff69)"
- Page Background: "Pure Black (#000000)"
- CTA Green: "Forest Green (#166534)"
- Card Border: "Charcoal (rgba(65,65,65,0.8))"
- Primary Text: "Pure White (#ffffff)"
- Secondary Text: "Silver (#a0a0a0)"
- Active State: "Pale Yellow (#f4f692)"
- Button Surface: "Near Black (#141414)"

### Example Component Prompts
- "Create a hero section on Pure Black (#000000) with a massive headline at 96px Inter weight 900, line-height 1.0. Pure White text. Add a Neon Volt (#faff69) CTA button (dark text, 4px radius, 0px 16px padding) and a ghost button (transparent, 1px solid #4f5100 border)."
- "Design a feature card on black with 1px solid rgba(65,65,65,0.8) border and 8px radius. Title at 24px Inter weight 700, body at 16px in Silver (#a0a0a0). Add a neon-highlighted variant with 1px solid #faff69 border."
- "Build a performance stats bar: large numbers at 72px Inter weight 700 in Pure White. Brief descriptions at 14px in Silver. On black background."
- "Create a Forest Green (#166534) CTA button: white text, 12px 16px padding, 4px radius, 1px solid #141414 border. Hover: bg shifts to #3a3a3a, text to 80% opacity."
- "Design an uppercase section label: 14px Inter weight 600, letter-spacing 1.4px, uppercase. Silver (#a0a0a0) text on black background."

### Iteration Guide
1. Keep everything on pure black — no dark gray alternatives
2. Neon Volt (#faff69) is for accents and CTAs only — never large backgrounds
3. Weight 900 for hero, 700 for headings, 600 for labels, 400-500 for body
4. Active states use Pale Yellow (#f4f692) — not just opacity changes
5. All links hover to Neon Volt — consistent interactive feedback
6. Charcoal borders (rgba(65,65,65,0.8)) are the primary depth mechanism

## 10. Voice & Tone

ClickHouse's voice is **benchmark-driven and engineer-pragmatic.** Marketing emphasizes raw performance numbers ("100x faster", "petabyte-scale") and open-source heritage. Closer to research paper than marketing — measured claims with citations.

| Context | Tone |
|---|---|
| CTA | Verb. "Sign up", "Get a demo", "Start building" |
| Marketing | Numeric. Always lead with benchmark |
| Documentation | SQL-first, code-heavy, terse |
| Error (query) | SQL error + line number, never wrapped friendly |
| Onboarding | Choose: managed cloud / self-host / try in browser |

**Voice samples**
- *"Sign up"* / *"Get a demo"* <!-- verified: clickhouse.com homepage 2026-05 -->

**Forbidden phrases.** Adjectival superlatives without numbers. "Magic" / "AI-powered" framing.

## 11. Brand Narrative

ClickHouse was originally developed at **Yandex** (Russia's largest tech company) starting in **2009** as an experimental real-time analytics project, with first production deployment in **2012** ([ClickHouse — Wikipedia](https://en.wikipedia.org/wiki/ClickHouse), [Introducing ClickHouse Inc. (2021 blog)](https://clickhouse.com/blog/introducing-click-house-inc)). Used internally for **Yandex.Metrica** (web analytics). **Open-sourced under Apache 2.0 in 2016** — adoption by Uber, Cloudflare, eBay quickly followed. **ClickHouse, Inc. incorporated September 2021** by **Aaron Katz (CEO)** and **Yury Izrailevsky** (co-founder). Funding: **Series A ~$50M (Sept 2021)** led by Index Ventures + Benchmark, with Yandex N.V. participating ([BusinessWire](https://www.businesswire.com/news/home/20210920005219/en/ClickHouse-Inc.-Announces-Incorporation-Along-With-%2450M-In-Series-A-Funding)); **Series B $250M @ $2B (Oct 28, 2021)** led by Coatue + Altimeter; **Series C $350M @ $6.35B (May 2025)** led by Khosla Ventures + BOND + IVP + Battery + Bessemer; **total raised >$650M** ([Forkable](https://www.forkable.io/p/open-source-database-company-clickhouse), [Index Ventures retrospective](https://www.indexventures.com/perspectives/the-fast-and-the-furious-how-clickhouse-the-worlds-fastest-open-source-database-is-creating-the-first-real-time-data-warehouse/)). Brand voice carries original Yandex engineering culture — performance-first, benchmark-cited, SQL-purist.

## 12. Principles

1. **Performance is the headline.** *UI implication:* hero modules contain a metric, not a tagline.
2. **SQL is sacred.** *UI implication:* query interfaces accept standard SQL; extensions clearly labeled.
3. **Open source is the default.** *UI implication:* "Self-host" and "Cloud" entry points equal prominence.
4. **Charcoal borders, not shadows.** *UI implication:* never shadow on dark theme cards.
5. **Pale yellow is the active state.** *UI implication:* selected = explicit yellow, not opacity.

## 13. Personas

*Personas are fictional archetypes informed by ClickHouse user segments (data engineers, observability builders, analytics leads), not individual people.*

**Sergey Volkov, 38, Berlin.** Senior data engineer at ad-tech. Self-hosted on K8s for 50PB+.

**Aisha Patel, 31, San Francisco.** Founding engineer at observability startup using ClickHouse Cloud.

**Rui Chen, 45, Singapore.** Data platform lead at regional bank. Evaluating vs Snowflake.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no databases)** | "Create your first database" with SQL CREATE snippet |
| **Empty (query result)** | "0 rows returned in 12ms" — query-stat focused |
| **Loading (query)** | Inline spinner + estimated rows scanned |
| **Loading (table scan)** | Progress bar with rows/sec + bytes/sec |
| **Error (SQL syntax)** | Inline below editor with line:column |
| **Error (server)** | "Server error (200): table not found." |
| **Success (query)** | Result table appears, query stats line |
| **Success (cluster created)** | Connection string visible, copy-button |
| **Skeleton (cluster list)** | Charcoal-border placeholder rows |
| **Disabled (read-only role)** | 0.5 opacity + lock icon |
| **Loading (long query)** | Pause/cancel after 5s; partial results stream |

## 15. Motion & Easing

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Result row select |
| `motion-fast` | 150ms | Hover, link to Neon Volt |
| `motion-standard` | 250ms | Modal |
| `motion-active-pulse` | 300ms | Pale yellow active appearance |

Standard cubic-bezier; no bounce. Charcoal borders never animate. `prefers-reduced-motion: reduce` makes link hover instant.

---

**Verified:** 2026-05-08 (B1 loop)
**Tier 1 sources:** clickhouse.com (live DOM via playwright — dark `#141414` ghost; cookie banner `#166534` Allow / `#141414` Dismiss; nav 8px / 14px·500)
**Tier 2 sources:** styles.refero.design / getdesign.md — no record.
**Tier 1 (Philosophy):** clickhouse.com homepage benchmarks; ClickHouse, Inc. corporate history; Aaron Katz public talks.
**Style ref:** `stripe`. **Conflicts unresolved:** none.
