---
id: sentry
name: Sentry
country: US
category: backend-devops
homepage: "https://sentry.io"
primary_color: "#362d59"
logo:
  type: simpleicons
  slug: sentry
verified: "2026-05-15"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#79628c"
    primary-hover: "#6a5fc1"
    brand: "#362d59"
    canvas: "#1f1633"
    canvas-deep: "#150f23"
    foreground: "#ffffff"
    muted: "#e5e7eb"
    on-primary: "#ffffff"
    accent-lime: "#c2ef4e"
    accent-coral: "#ffb287"
    accent-pink: "#fa7faa"
    accent-violet: "#422082"
    hairline: "#cfcfdb"
    border-dark: "#362d59"
    code-yellow: "#dcdcaa"
  typography:
    family: { sans: "Rubik", mono: "Monaco" }
    display-hero:   { size: 88, weight: 700, lineHeight: 1.20, use: "Hero headlines (Dammit Sans), brand voice" }
    display-secondary: { size: 60, weight: 500, lineHeight: 1.10, use: "Secondary hero text (Dammit Sans)" }
    section:        { size: 30, weight: 400, lineHeight: 1.20, use: "Major section titles" }
    subheading:     { size: 27, weight: 500, lineHeight: 1.25, use: "Feature section headers" }
    card-title:     { size: 24, weight: 500, lineHeight: 1.25, use: "Card and block headings" }
    feature-title:  { size: 20, weight: 600, lineHeight: 1.25, use: "Emphasized feature names" }
    body:           { size: 16, weight: 400, lineHeight: 1.50, use: "Standard body text" }
    nav-label:      { size: 15, weight: 500, lineHeight: 1.40, use: "Navigation links" }
    button:         { size: 14, weight: 700, lineHeight: 1.20, tracking: 0.2, use: "Uppercase button label" }
    caption:        { size: 12, weight: 600, lineHeight: 2.00, use: "Subtle annotations" }
    code:           { size: 16, weight: 400, lineHeight: 1.50, use: "Code blocks (Monaco)" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 40 }
  rounded: { sm: 6, md: 8, lg: 13, full: 9999 }
  shadow:
    surface: "rgba(0,0,0,0.08) 0px 2px 8px"
    elevated: "rgba(0,0,0,0.1) 0px 10px 15px -3px"
    prominent: "rgba(0,0,0,0.18) 0px 0.5rem 1.5rem"
    inset: "rgba(0,0,0,0.1) 0px 1px 3px 0px inset"
    ambient: "rgba(22,15,36,0.9) 0px 4px 4px 9px"
  components_harvested: true
  components:
    button-primary: { type: button, bg: "#79628c", fg: "#ffffff", border: "1px solid #362d59", radius: "13px", font: "14px / 700", shadow: "rgba(0,0,0,0.1) 0px 1px 3px 0px inset", hover: "rgba(0,0,0,0.18) 0px 0.5rem 1.5rem", use: "Primary muted-purple action, uppercase" }
    button-glass: { type: button, bg: "rgba(255,255,255,0.18)", fg: "#ffffff", radius: "12px", padding: "8px", shadow: "rgba(0,0,0,0.08) 0px 2px 8px", hover: "rgba(54,22,107,0.14)", use: "Secondary action on dark surfaces" }
    button-white: { type: button, bg: "#ffffff", fg: "#1f1633", radius: "8px", padding: "12px 16px", hover: "bg #6a5fc1, text #ffffff", focus: "bg #ffb287, outline #6a5fc1", use: "High-visibility CTA on dark" }
    button-violet: { type: button, bg: "#422082", fg: "#ffffff", radius: "8px", padding: "8px 16px", use: "Select / dropdown" }
    input: { type: input, bg: "#ffffff", fg: "#1f1633", border: "1px solid #cfcfdb", radius: "6px", padding: "8px 12px", focus: "rgba(0,0,0,0.15) 0px 2px 10px inset", use: "Text input" }
    card: { type: card, radius: "12px", shadow: "rgba(0,0,0,0.1) 0px 10px 15px -3px", use: "Glass / dark purple surface, backdrop blur(18px)" }
---

# Design System Inspiration of Sentry

## 1. Visual Theme & Atmosphere

Sentry's website is a dark-mode-first developer tool interface that speaks the language of code editors and terminal windows. The entire aesthetic is rooted in deep purple-black backgrounds (`#1f1633`, `#150f23`) that evoke the late-night debugging sessions Sentry was built for. Against this inky canvas, a carefully curated set of purples, pinks, and a distinctive lime-green accent (`#c2ef4e`) create a visual system that feels simultaneously technical and vibrant.

The typography pairing is deliberate: "Dammit Sans" appears at hero scale (88px, weight 700) as a display font with personality and attitude that matches Sentry's irreverent brand voice ("Code breaks. Fix it faster."), while Rubik serves as the workhorse UI font across all functional text — headings, body, buttons, captions, and navigation. Monaco provides the monospace layer for code snippets and technical content, completing the developer-tool trinity.

What makes Sentry distinctive is its embrace of the "dark IDE" aesthetic without feeling cold or sterile. Warm purple tones replace the typical cool grays of developer tools, and bold illustrative elements (3D characters, colorful product screenshots) punctuate the dark canvas. The button system uses a signature muted purple (`#79628c`) with inset shadows that creates a tactile, almost physical quality — buttons feel like they could be pressed into the surface.

**Key Characteristics:**
- Dark purple-black backgrounds (`#1f1633`, `#150f23`) — never pure black
- Warm purple accent spectrum: from deep (`#362d59`) through mid (`#79628c`, `#6a5fc1`) to vibrant (`#422082`)
- Lime-green accent (`#c2ef4e`) for high-visibility CTAs and highlights
- Pink/coral accents (`#ffb287`, `#fa7faa`) for focus states and secondary highlights
- "Dammit Sans" display font for brand personality at hero scale
- Rubik as primary UI font with uppercase letter-spaced labels
- Monaco monospace for code elements
- Inset shadows on buttons creating tactile depth
- Frosted glass effects with `blur(18px) saturate(180%)`

## 2. Color Palette & Roles

### Primary Brand
- **Deep Purple** (`#1f1633`): Primary background, the defining color of the brand
- **Darker Purple** (`#150f23`): Deeper sections, footer, secondary backgrounds
- **Border Purple** (`#362d59`): Borders, dividers, subtle structural lines

### Accent Colors
- **Sentry Purple** (`#6a5fc1`): Primary interactive color — links, hover states, focus rings
- **Muted Purple** (`#79628c`): Button backgrounds, secondary interactive elements
- **Deep Violet** (`#422082`): Select dropdowns, active states, high-emphasis surfaces
- **Lime Green** (`#c2ef4e`): High-visibility accent, special links, badge highlights
- **Coral** (`#ffb287`): Focus state backgrounds, warm accent
- **Pink** (`#fa7faa`): Focus outlines, decorative accents

### Text Colors
- **Pure White** (`#ffffff`): Primary text on dark backgrounds
- **Light Gray** (`#e5e7eb`): Secondary text, muted content
- **Code Yellow** (`#dcdcaa`): Syntax highlighting, code tokens

### Surface & Overlay
- **Glass White** (`rgba(255, 255, 255, 0.18)`): Frosted glass button backgrounds
- **Glass Dark** (`rgba(54, 22, 107, 0.14)`): Hover overlay on glass elements
- **Input White** (`#ffffff`): Form input backgrounds (light context)
- **Input Border** (`#cfcfdb`): Form field borders

### Shadows
- **Ambient Glow** (`rgba(22, 15, 36, 0.9) 0px 4px 4px 9px`): Deep purple ambient shadow
- **Button Hover** (`rgba(0, 0, 0, 0.18) 0px 0.5rem 1.5rem`): Elevated hover state
- **Card Shadow** (`rgba(0, 0, 0, 0.1) 0px 10px 15px -3px`): Standard card elevation
- **Inset Button** (`rgba(0, 0, 0, 0.1) 0px 1px 3px 0px inset`): Tactile pressed effect

## 3. Typography Rules

### Font Families
- **Display**: `Dammit Sans` — brand personality font for hero headings
- **Primary UI**: `Rubik`, with fallbacks: `-apple-system, system-ui, Segoe UI, Helvetica, Arial`
- **Monospace**: `Monaco`, with fallbacks: `Menlo, Ubuntu Mono`

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Dammit Sans | 88px (5.50rem) | 700 | 1.20 (tight) | normal | Maximum impact, brand voice |
| Display Secondary | Dammit Sans | 60px (3.75rem) | 500 | 1.10 (tight) | normal | Secondary hero text |
| Section Heading | Rubik | 30px (1.88rem) | 400 | 1.20 (tight) | normal | Major section titles |
| Sub-heading | Rubik | 27px (1.69rem) | 500 | 1.25 (tight) | normal | Feature section headers |
| Card Title | Rubik | 24px (1.50rem) | 500 | 1.25 (tight) | normal | Card and block headings |
| Feature Title | Rubik | 20px (1.25rem) | 600 | 1.25 (tight) | normal | Emphasized feature names |
| Body | Rubik | 16px (1.00rem) | 400 | 1.50 | normal | Standard body text |
| Body Emphasis | Rubik | 16px (1.00rem) | 500–600 | 1.50 | normal | Bold body, nav items |
| Nav Label | Rubik | 15px (0.94rem) | 500 | 1.40 | normal | Navigation links |
| Uppercase Label | Rubik | 15px (0.94rem) | 500 | 1.25 (tight) | normal | `text-transform: uppercase` |
| Button Text | Rubik | 14px (0.88rem) | 500–700 | 1.14–1.29 (tight) | 0.2px | `text-transform: uppercase` |
| Caption | Rubik | 14px (0.88rem) | 500–700 | 1.00–1.43 | 0.2px | Often uppercase |
| Small Caption | Rubik | 12px (0.75rem) | 600 | 2.00 (relaxed) | normal | Subtle annotations |
| Micro Label | Rubik | 10px (0.63rem) | 600 | 1.80 (relaxed) | 0.25px | `text-transform: uppercase` |
| Code | Monaco | 16px (1.00rem) | 400–700 | 1.50 | normal | Code blocks, technical text |

### Principles
- **Dual personality**: Dammit Sans brings irreverent brand character at display scale; Rubik provides clean professionalism for everything functional.
- **Uppercase as system**: Buttons, captions, labels, and micro-text all use `text-transform: uppercase` with subtle letter-spacing (0.2px–0.25px), creating a systematic "technical label" pattern throughout.
- **Weight stratification**: Rubik uses 400 (body), 500 (emphasis/nav), 600 (titles/strong), 700 (buttons/CTAs) — a clean four-tier weight system.
- **Tight headings, relaxed body**: All headings use 1.10–1.25 line-height; body uses 1.50; small captions expand to 2.00 for readability at tiny sizes.

## 4. Component Stylings

### Buttons

**Primary Muted Purple**
- Background: `#79628c` (rgb(121, 98, 140))
- Text: `#ffffff`, uppercase, 14px, weight 500–700, letter-spacing 0.2px
- Border: `1px solid #584674`
- Radius: 13px
- Shadow: `rgba(0, 0, 0, 0.1) 0px 1px 3px 0px inset` (tactile inset)
- Hover: elevated shadow `rgba(0, 0, 0, 0.18) 0px 0.5rem 1.5rem`

**Glass White**
- Background: `rgba(255, 255, 255, 0.18)` (frosted glass)
- Text: `#ffffff`
- Padding: 8px
- Radius: 12px (left-aligned variant: `12px 0px 0px 12px`)
- Shadow: `rgba(0, 0, 0, 0.08) 0px 2px 8px`
- Hover background: `rgba(54, 22, 107, 0.14)`
- Use: Secondary actions on dark surfaces

**White Solid**
- Background: `#ffffff`
- Text: `#1f1633`
- Padding: 12px 16px
- Radius: 8px
- Hover: background transitions to `#6a5fc1`, text to white
- Focus: background `#ffb287` (coral), outline `rgb(106, 95, 193) solid 0.125rem`
- Use: High-visibility CTA on dark backgrounds

**Deep Violet (Select/Dropdown)**
- Background: `#422082`
- Text: `#ffffff`
- Padding: 8px 16px
- Radius: 8px

### Inputs

**Text Input**
- Background: `#ffffff`
- Text: `#1f1633`
- Border: `1px solid #cfcfdb`
- Padding: 8px 12px
- Radius: 6px
- Focus: border-color stays `#cfcfdb`, shadow `rgba(0, 0, 0, 0.15) 0px 2px 10px inset`

### Links
- **Default on dark**: `#ffffff`, underline decoration
- **Hover**: color transitions to `#6a5fc1` (Sentry Purple)
- **Purple links**: `#6a5fc1` default, hover underline
- **Lime accent links**: `#c2ef4e` default, hover to `#6a5fc1`
- **Dark context links**: `#362d59`, hover to `#ffffff`

### Cards & Containers
- Background: semi-transparent or dark purple surfaces
- Radius: 8px–12px
- Shadow: `rgba(0, 0, 0, 0.1) 0px 10px 15px -3px`
- Backdrop filter: `blur(18px) saturate(180%)` for glass effects

### Navigation
- Dark transparent header over hero content
- Rubik 15px weight 500 for nav links
- White text, hover to Sentry Purple (`#6a5fc1`)
- Uppercase labels with 0.2px letter-spacing for categories
- Mobile: hamburger menu, full-width expanded

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 1px, 2px, 4px, 5px, 6px, 8px, 12px, 16px, 24px, 32px, 40px, 44px, 45px, 47px

### Grid & Container
- Max content width: 1152px (XL breakpoint)
- Responsive padding: 2rem (mobile) → 4rem (tablet+)
- Content centered within container
- Full-width dark sections with contained inner content

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | < 576px | Single column, stacked layout |
| Small Tablet | 576–640px | Minor width adjustments |
| Tablet | 640–768px | 2-column begins |
| Small Desktop | 768–992px | Full nav visible |
| Desktop | 992–1152px | Standard layout |
| Large Desktop | 1152–1440px | Max-width content |

### Whitespace Philosophy
- **Dark breathing room**: Generous vertical spacing between sections (64px–80px+) lets the dark background serve as a visual rest.
- **Content islands**: Feature sections are self-contained blocks floating in the dark purple sea, each with its own internal spacing rhythm.
- **Asymmetric padding**: Buttons use asymmetric padding patterns (12px 16px, 8px 12px) that feel organic rather than rigid.

### Border Radius Scale
- Minimal (6px): Form inputs, small interactive elements
- Standard (8px): Buttons, cards, containers
- Comfortable (10px–12px): Larger containers, glass panels
- Rounded (13px): Primary muted buttons
- Pill (18px): Image containers, badges

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Sunken (Level -1) | Inset shadow `rgba(0, 0, 0, 0.1) 0px 1px 3px inset` | Primary buttons (tactile pressed feel) |
| Flat (Level 0) | No shadow | Default surfaces, dark backgrounds |
| Surface (Level 1) | `rgba(0, 0, 0, 0.08) 0px 2px 8px` | Glass buttons, subtle cards |
| Elevated (Level 2) | `rgba(0, 0, 0, 0.1) 0px 10px 15px -3px` | Cards, floating panels |
| Prominent (Level 3) | `rgba(0, 0, 0, 0.18) 0px 0.5rem 1.5rem` | Hover states, modals |
| Ambient (Level 4) | `rgba(22, 15, 36, 0.9) 0px 4px 4px 9px` | Deep purple ambient glow around hero |

**Shadow Philosophy**: Sentry uses a unique combination of inset shadows (buttons feel pressed INTO the surface) and ambient glows (content radiates from the dark background). The deep purple ambient shadow (`rgba(22, 15, 36, 0.9)`) is the signature — it creates a bioluminescent quality where content seems to emit its own purple-tinted light.

## 7. Do's and Don'ts

### Do
- Use deep purple backgrounds (`#1f1633`, `#150f23`) — never pure black (`#000000`)
- Apply inset shadows on primary buttons for the tactile pressed effect
- Use Dammit Sans ONLY for hero/display headings — Rubik for everything else
- Apply `text-transform: uppercase` with `letter-spacing: 0.2px` on buttons and labels
- Use the lime-green accent (`#c2ef4e`) sparingly for maximum impact
- Employ frosted glass effects (`blur(18px) saturate(180%)`) for layered surfaces
- Maintain the warm purple shadow tones — shadows should feel purple-tinted, not neutral gray
- Use Rubik's 4-tier weight system: 400 (body), 500 (nav/emphasis), 600 (titles), 700 (CTAs)

### Don't
- Don't use pure black (`#000000`) for backgrounds — always use the warm purple-blacks
- Don't apply Dammit Sans to body text or UI elements — it's display-only
- Don't use standard gray (`#666`, `#999`) for borders — use purple-tinted grays (`#362d59`, `#584674`)
- Don't drop the uppercase treatment on buttons — it's a system-wide pattern
- Don't use sharp corners (0px radius) — minimum 6px for all interactive elements
- Don't mix the lime-green accent with the coral/pink accents in the same component
- Don't use flat (non-inset) shadows on primary buttons — the tactile quality is signature
- Don't forget letter-spacing on uppercase text — 0.2px minimum

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <576px | Single column, hamburger nav, stacked CTAs |
| Tablet | 576–768px | 2-column feature grids begin |
| Small Desktop | 768–992px | Full navigation, side-by-side layouts |
| Desktop | 992–1152px | Max-width container, full layout |
| Large | >1152px | Content max-width maintained, generous margins |

### Collapsing Strategy
- Hero text: 88px Dammit Sans → 60px → mobile scales
- Navigation: horizontal → hamburger with slide-out
- Feature sections: side-by-side → stacked cards
- Buttons: inline → full-width stacked on mobile
- Container padding: 4rem → 2rem

## 9. Agent Prompt Guide

### Quick Color Reference
- Background: `#1f1633` (primary), `#150f23` (deeper)
- Text: `#ffffff` (primary), `#e5e7eb` (secondary)
- Interactive: `#6a5fc1` (links/hover), `#79628c` (buttons)
- Accent: `#c2ef4e` (lime highlight), `#ffb287` (coral focus)
- Border: `#362d59` (dark), `#cfcfdb` (light context)

### Example Component Prompts
- "Create a hero section on deep purple background (#1f1633). Headline at 88px Dammit Sans weight 700, line-height 1.20, white text. Sub-text at 16px Rubik weight 400, line-height 1.50. White solid CTA button (8px radius, 12px 16px padding), hover transitions to #6a5fc1."
- "Design a navigation bar: transparent over dark background. Rubik 15px weight 500, white text. Uppercase category labels with 0.2px letter-spacing. Hover color #6a5fc1."
- "Build a primary button: background #79628c, border 1px solid #584674, inset shadow rgba(0,0,0,0.1) 0px 1px 3px, white uppercase text at 14px Rubik weight 700, letter-spacing 0.2px, radius 13px. Hover: shadow rgba(0,0,0,0.18) 0px 0.5rem 1.5rem."
- "Create a glass card panel: background rgba(255,255,255,0.18), backdrop-filter blur(18px) saturate(180%), radius 12px. White text content inside."
- "Design a feature section: #150f23 background, 24px Rubik weight 500 heading, 16px Rubik weight 400 body text. 14px uppercase lime-green (#c2ef4e) label above heading."

### Iteration Guide
1. Always start with the dark purple background — the color palette is built FOR dark mode
2. Use inset shadows on buttons, ambient purple glows on hero sections
3. Uppercase + letter-spacing is the systematic pattern for labels, buttons, and captions
4. Lime green (#c2ef4e) is the "pop" color — use once per section maximum
5. Frosted glass for overlaid panels, solid purple for primary surfaces
6. Rubik handles 90% of typography — Dammit Sans is hero-only

## 10. Voice & Tone

Sentry's voice is **error-tracking-honest and developer-empathetic.** Sentry is famous for talking about errors in plain English — "see what's broken, fix it fast." Frosted glass overlays + purple primary signal "premium debugging tool."

| Context | Tone |
|---|---|
| CTA | Verb. "Get started", "Try Sentry", "Sign up free" |
| Marketing | Error-honest. Real stack traces in marketing |
| Documentation | Code-block-heavy, framework-specific |
| Error (in product) | Specific stack trace + commit context |

**Voice samples**
- Marketing pattern: *"See what's broken"* / *"Errors and performance"* <!-- illustrative -->

**Forbidden phrases.** "Revolutionary error monitoring". Generic "AI-powered" framing.

## 11. Brand Narrative

Sentry started as an **open-source project by David Cramer in 2008** for application error monitoring. **Cramer + Chris Jennings formally incorporated Functional Software Inc. in February 2012** ([CIO — Sentry's Cramer on bootstrapping](https://www.cio.com/article/401704/sentrys-david-cramer-on-bootstrapping-a-unicorn.html), [First Round Review — Sentry's Path to PMF](https://review.firstround.com/sentrys-path-to-product-market-fit/)). **Cramer (CTO)** + **Jennings (Chief Creative Officer)** **bootstrapped the company organically** for ~3 years before transitioning open-source to monetized product, and another stretch before taking VC. Cramer is famously a **high-school dropout** turned engineer — [First Round Review: "A High School Dropout Turned an Open-Source Project into a $3B Company"](https://review.firstround.com/sentrys-path-to-product-market-fit/). The brand voice tracks the founder positioning: errors are normal, debugging is craft, transparency is the ethos. Sentry remains heavily OSS-aware while operating a managed cloud product. **Total funding ~$217M** from **Accel, NEA, Bond Capital** at **~$3B valuation** ([Crunchbase — Sentry](https://www.crunchbase.com/organization/sentry), [Contrary Research — Sentry](https://research.contrary.com/company/sentry)). **Milin Desai is current CEO**. Purple primary is the signature accent — Tier 1 live measurement on `/pricing` shows the canonical Primary as `rgb(69, 38, 80)` = **`#452650` Sentry Deep Purple** (slightly different from prior §2 doc claim `#6c5fc7` Mid-Purple).

## 12. Principles

1. **Open-source heritage.** *UI implication:* self-hosted Sentry first-class option.
2. **Errors are normal.** *UI implication:* tone never shames developers; debugging is craft.
3. **Frosted glass for overlays.** *UI implication:* preserve translucent panel pattern.
4. **Purple `#6c5fc7` primary.** *UI implication:* don't introduce new accent colors.
5. **Rubik for 90%, Dammit Sans hero only.** *UI implication:* don't substitute Rubik.

## 13. Personas

*Personas are fictional archetypes informed by Sentry user segments (backend engineers, mobile dev teams, frontend performance leads), not individual people.*

**Sergey Volkov, 36, Berlin.** Backend engineer. Sentry as production error feed.

**Sofia Russo, 30, Milan.** Mobile dev shipping iOS app. Crash analytics + release tracking.

**Marcus Chen, 41, San Francisco.** Frontend performance lead. Web Vitals + LCP monitoring.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no projects)** | "Create your first project" with SDK install |
| **Empty (no events)** | "Trigger first event" with code snippet |
| **Loading (event capturing)** | Real-time event feed |
| **Loading (issue grouping)** | Skeleton issue cards |
| **Error (SDK)** | Specific. "DSN invalid" with verify steps |
| **Error (rate limit)** | Tier limit + upgrade |
| **Success (resolved)** | Issue moves to resolved tab + version |
| **Success (alerted)** | Alert chip with route to alert |
| **Skeleton (issue list)** | Frosted-glass placeholders |
| **Disabled (no permission)** | Role tooltip |
| **Loading (long replay)** | Persistent progress |

## 15. Motion & Easing

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Selection |
| `motion-fast` | 150ms | Hover |
| `motion-standard` | 250ms | Modal, panel |

Standard cubic-bezier; no bounce. `prefers-reduced-motion: reduce` removes hover transitions.

---

**Verified:** 2026-05-08 (omd:migrate run 54 — Apple-tier)
**Tier 1 sources:** sentry.io/welcome home + sentry.io/pricing (live DOM via playwright — Primary **`#452650` Sentry Deep Purple** 8px / 40px / 12×16 / **14px·700 ALL CAPS**; Outline Eggplant `#1f1633` text; Cookie Mid-Purple `#362d59`; Lavender Mist `#f5f3fa` 0px tab; nav 14px·500 ALL CAPS).
**Tier 2 sources:** styles.refero.design / getdesign.md — no record.
**Tier 2 (Philosophy/founders/funding):** First Round Review (Sentry PMF case study + Cramer podcast), CIO (Cramer bootstrapping), Crunchbase, Contrary Research, Tracxn, ShiftMag (Milin Desai CEO).
**Style ref:** `stripe`.
**Conflicts unresolved:** Brand Purple HEX — §2 doc cited `#6c5fc7` Mid-Purple; live DOM shows `#452650` Deep Purple as canonical Primary. **Resolution: 3-shade palette `#452650`/`#362d59`/`#1f1633`**, live `#452650` wins for Primary; both retained. **Earlier mistake reverted (significant):** prior footer captured nav 14px·500 ghost only — Primary is **14px·700 ALL CAPS Deep Purple**.
