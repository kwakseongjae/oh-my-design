---
id: x.ai
name: xAI
country: US
category: ai
homepage: "https://x.ai"
primary_color: "#000000"
logo:
  type: simpleicons
  slug: x
verified: "2026-05-15"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    text-primary: "#ffffff"
    canvas: "#1f2228"
    ring-blue: "#3b82f6"
    surface-elevated: "#26292f"
    surface-hover: "#2a2d33"
    border-default: "#2c2f35"
    border-strong: "#3a3d42"
    inverse-near-black: "#0a0a0a"
  typography:
    family: { sans: "universalSans", mono: "GeistMono" }
    display-hero: { size: 320, weight: 300, lineHeight: 1.50, use: "GeistMono, extreme display" }
    section:      { size: 30, weight: 400, lineHeight: 1.20, use: "universalSans, section heading" }
    body:         { size: 16, weight: 400, lineHeight: 1.50, use: "universalSans, body" }
    button:       { size: 14, weight: 400, lineHeight: 1.43, tracking: 1.4, use: "GeistMono, uppercase button" }
    caption:      { size: 14, weight: 400, lineHeight: 1.50, use: "universalSans, label/caption" }
    small:        { size: 12, weight: 400, lineHeight: 1.50, use: "universalSans, meta" }
  spacing: { xs: 4, sm: 8, base: 24, lg: 48 }
  rounded: { sm: 0, md: 0, lg: 4, full: 9999 }
  shadow:
    none: "none"
  components:
    button-primary: { type: button, bg: "#ffffff", fg: "#1f2228", radius: 0, padding: "12px 24px", font: "14px/400 GeistMono", use: "Primary CTA, uppercase 1.4px tracking, hover 0.9 white" }
    button-ghost: { type: button, fg: "#ffffff", radius: 0, padding: "12px 24px", font: "14px/400 GeistMono", use: "Secondary, 1px rgba(255,255,255,0.2) border" }
    card: { type: card, radius: 0, padding: "24px", use: "Container, 1px rgba(255,255,255,0.1) border, no shadow, hover border 0.2" }
    badge-mono: { type: badge, fg: "#ffffff", radius: 0, padding: "4px 8px", font: "12px GeistMono", use: "Monospace tag, 1px rgba(255,255,255,0.2) border" }
    input-default: { type: input, fg: "#ffffff", radius: 0, padding: "8px 12px", font: "16px universalSans", use: "Form input, 1px rgba(255,255,255,0.2), focus blue ring, placeholder 0.3" }
  components_harvested: true
---

# Design System Inspiration of xAI

## 1. Visual Theme & Atmosphere

xAI's website is a masterclass in dark-first, monospace-driven brutalist minimalism -- a design system that feels like it was built by engineers who understand that restraint is the ultimate form of sophistication. The entire experience is anchored to an almost-black background (`#1f2228`) with pure white text (`#ffffff`), creating a high-contrast, terminal-inspired aesthetic that signals deep technical credibility. There are no gradients, no decorative illustrations, no color accents competing for attention. This is a site that communicates through absence.

The typographic system is split between two carefully chosen typefaces. `GeistMono` (Vercel's monospace font) handles display-level headlines at an extraordinary 320px with weight 300, and also serves as the button typeface in uppercase with tracked-out letter-spacing (1.4px). `universalSans` handles all body and secondary heading text with a clean, geometric sans-serif voice. The monospace-as-display-font choice is the defining aesthetic decision -- it positions xAI not as a consumer product but as infrastructure, as something built by people who live in terminals.

The spacing system operates on an 8px base grid with values concentrated at the small end (4px, 8px, 24px, 48px), reflecting a dense, information-focused layout philosophy. Border radius is minimal -- the site barely rounds anything, maintaining sharp, architectural edges. There are no decorative shadows, no gradients, no layered elevation. Depth is communicated purely through contrast and whitespace.

**Key Characteristics:**
- Pure dark theme: `#1f2228` background with `#ffffff` text -- no gray middle ground
- GeistMono at extreme display sizes (320px, weight 300) -- monospace as luxury
- Uppercase monospace buttons with 1.4px letter-spacing -- technical, commanding
- universalSans for body text at 16px/1.5 and headings at 30px/1.2 -- clean contrast
- Zero decorative elements: no shadows, no gradients, no colored accents
- 8px spacing grid with a sparse, deliberate scale
- Heroicons SVG icon system -- minimal, functional
- Tailwind CSS with arbitrary values -- utility-first engineering approach

## 2. Color Palette & Roles

### Primary
- **Pure White** (`#ffffff`): The singular text color, link color, and all foreground elements. In xAI's system, white is not a background -- it is the voice.
- **Dark Background** (`#1f2228`): The canvas. A warm near-black with a subtle blue undertone (not pure black, not neutral gray). This specific hue prevents the harsh eye strain of `#000000` while maintaining deep darkness.

### Interactive
- **White Default** (`#ffffff`): Link and interactive element color in default state.
- **White Muted** (`rgba(255, 255, 255, 0.5)`): Hover state for links -- a deliberate dimming rather than brightening, which is unusual and distinctive.
- **White Subtle** (`rgba(255, 255, 255, 0.2)`): Borders, dividers, and subtle surface treatments.
- **Ring Blue** (`rgb(59, 130, 246) / 0.5`): Tailwind's default focus ring color (`--tw-ring-color`), used for keyboard accessibility focus states.

### Surface & Borders
- **Surface Elevated** (`rgba(255, 255, 255, 0.05)`): Subtle card backgrounds and hover surfaces -- barely visible lift.
- **Surface Hover** (`rgba(255, 255, 255, 0.08)`): Slightly more visible hover state for interactive containers.
- **Border Default** (`rgba(255, 255, 255, 0.1)`): Standard border for cards, dividers, and containers.
- **Border Strong** (`rgba(255, 255, 255, 0.2)`): Emphasized borders for active states and button outlines.

### Functional
- **Text Primary** (`#ffffff`): All headings, body text, labels.
- **Text Secondary** (`rgba(255, 255, 255, 0.7)`): Descriptions, captions, supporting text.
- **Text Tertiary** (`rgba(255, 255, 255, 0.5)`): Muted labels, placeholder text, timestamps.
- **Text Quaternary** (`rgba(255, 255, 255, 0.3)`): Disabled text, very subtle annotations.

### Resolved Surface Tints
The rgba overlays above resolve to these effective hex values when composited on the `#1f2228` canvas:
- **Surface Elevated Resolved** (`#26292f`): `rgba(255, 255, 255, 0.05)` over `#1f2228`.
- **Surface Hover Resolved** (`#2a2d33`): `rgba(255, 255, 255, 0.08)` over `#1f2228`.
- **Border Default Resolved** (`#2c2f35`): `rgba(255, 255, 255, 0.1)` over `#1f2228`.
- **Border Strong Resolved** (`#3a3d42`): `rgba(255, 255, 255, 0.2)` over `#1f2228`.

### Focus Ring (explicit hex from Tailwind)
- **Ring Blue** (`#3b82f6`): The Tailwind default focus color (`rgb(59, 130, 246)`) used for keyboard accessibility — only chromatic accent in the otherwise monochrome system.

## 3. Typography Rules

### Font Family
- **Display / Buttons**: `GeistMono`, with fallback: `ui-monospace, SFMono-Regular, Roboto Mono, Menlo, Monaco, Liberation Mono, DejaVu Sans Mono, Courier New`
- **Body / Headings**: `universalSans`, with fallback: `universalSans Fallback`

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Transform | Notes |
|------|------|------|--------|-------------|----------------|-----------|-------|
| Display Hero | GeistMono | 320px (20rem) | 300 | 1.50 | normal | none | Extreme scale, monospace luxury |
| Section Heading | universalSans | 30px (1.88rem) | 400 | 1.20 (tight) | normal | none | Clean sans-serif contrast |
| Body | universalSans | 16px (1rem) | 400 | 1.50 | normal | none | Standard reading text |
| Button | GeistMono | 14px (0.88rem) | 400 | 1.43 | 1.4px | uppercase | Tracked monospace, commanding |
| Label / Caption | universalSans | 14px (0.88rem) | 400 | 1.50 | normal | none | Supporting text |
| Small / Meta | universalSans | 12px (0.75rem) | 400 | 1.50 | normal | none | Timestamps, footnotes |

### Principles
- **Monospace as display**: GeistMono at 320px is not a gimmick -- it is the brand statement. The fixed-width characters at extreme scale create a rhythmic, architectural quality that no proportional font can achieve.
- **Light weight at scale**: Weight 300 for the 320px headline prevents the monospace from feeling heavy or brutish at extreme sizes. It reads as precise, not overwhelming.
- **Uppercase buttons**: All button text is uppercase GeistMono with 1.4px letter-spacing. This creates a distinctly technical, almost command-line aesthetic for interactive elements.
- **Sans-serif for reading**: universalSans at 16px/1.5 provides excellent readability for body content, creating a clean contrast against the monospace display elements.
- **Two-font clarity**: The system uses exactly two typefaces with clear roles -- monospace for impact and interaction, sans-serif for information and reading. No overlap, no ambiguity.

## 4. Component Stylings

### Buttons

**Primary (White on Dark)**
- Background: `#ffffff`
- Text: `#1f2228`
- Padding: 12px 24px
- Radius: 0px (sharp corners)
- Font: GeistMono 14px weight 400, uppercase, letter-spacing 1.4px
- Hover: `rgba(255, 255, 255, 0.9)` background
- Use: Primary CTA ("TRY GROK", "GET STARTED")

**Ghost / Outlined**
- Background: transparent
- Text: `#ffffff`
- Padding: 12px 24px
- Radius: 0px
- Border: `1px solid rgba(255, 255, 255, 0.2)`
- Font: GeistMono 14px weight 400, uppercase, letter-spacing 1.4px
- Hover: `rgba(255, 255, 255, 0.05)` background
- Use: Secondary actions ("LEARN MORE", "VIEW API")

**Text Link**
- Background: none
- Text: `#ffffff`
- Font: universalSans 16px weight 400
- Hover: `rgba(255, 255, 255, 0.5)` -- dims on hover
- Use: Inline links, navigation items

### Cards & Containers
- Background: `rgba(255, 255, 255, 0.03)` or transparent
- Border: `1px solid rgba(255, 255, 255, 0.1)`
- Radius: 0px (sharp) or 4px (subtle)
- Shadow: none -- xAI does not use box shadows
- Hover: border shifts to `rgba(255, 255, 255, 0.2)`

### Navigation
- Dark background matching page (`#1f2228`)
- Brand logotype: white text, left-aligned
- Links: universalSans 14px weight 400, `#ffffff` text
- Hover: `rgba(255, 255, 255, 0.5)` text color
- CTA: white primary button, right-aligned
- Mobile: hamburger toggle

### Badges / Tags
**Monospace Tag**
- Background: transparent
- Text: `#ffffff`
- Padding: 4px 8px
- Border: `1px solid rgba(255, 255, 255, 0.2)`
- Radius: 0px
- Font: GeistMono 12px uppercase, letter-spacing 1px

### Inputs & Forms
- Background: transparent or `rgba(255, 255, 255, 0.05)`
- Border: `1px solid rgba(255, 255, 255, 0.2)`
- Radius: 0px
- Focus: ring with `rgb(59, 130, 246) / 0.5`
- Text: `#ffffff`
- Placeholder: `rgba(255, 255, 255, 0.3)`
- Label: `rgba(255, 255, 255, 0.7)`, universalSans 14px

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 4px, 8px, 24px, 48px
- The scale is deliberately sparse -- xAI avoids granular spacing distinctions, preferring large jumps that create clear visual hierarchy through whitespace alone

### Grid & Container
- Max content width: approximately 1200px
- Hero: full-viewport height with massive centered monospace headline
- Feature sections: simple vertical stacking with generous section padding (48px-96px)
- Two-column layouts for feature descriptions at desktop
- Full-width dark sections maintain the single dark background throughout

### Whitespace Philosophy
- **Extreme generosity**: xAI uses vast amounts of whitespace. The 320px headline with 48px+ surrounding padding creates a sense of emptiness that is itself a design statement -- the content is so important it needs room to breathe.
- **Vertical rhythm over horizontal density**: Content stacks vertically with large gaps between sections rather than packing horizontally. This creates a scroll-driven experience that feels deliberate and cinematic.
- **No visual noise**: The absence of decorative elements, borders between sections, and color variety means whitespace is the primary structural tool.

### Breakpoints
- 2000px, 1536px, 1280px, 1024px, 1000px, 768px, 640px
- Tailwind responsive modifiers drive breakpoint behavior

### Border Radius Scale
- Sharp (0px): Primary treatment for buttons, cards, inputs -- the default
- Subtle (4px): Occasional softening on secondary containers
- The near-zero radius philosophy is core to the brand's brutalist identity

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow, no border | Page background, body content |
| Surface (Level 1) | `rgba(255,255,255,0.03)` background | Subtle card surfaces |
| Bordered (Level 2) | `1px solid rgba(255,255,255,0.1)` border | Cards, containers, dividers |
| Active (Level 3) | `1px solid rgba(255,255,255,0.2)` border | Hover states, active elements |
| Focus (Accessibility) | `ring` with `rgb(59,130,246)/0.5` | Keyboard focus indicator |

**Elevation Philosophy**: xAI rejects the conventional shadow-based elevation system entirely. There are no box-shadows anywhere on the site. Instead, depth is communicated through three mechanisms: (1) opacity-based borders that brighten on interaction, creating a sense of elements "activating" rather than lifting; (2) extremely subtle background opacity shifts (`0.03` to `0.08`) that create barely-perceptible surface differentiation; and (3) the massive scale contrast between the 320px display type and 16px body text, which creates typographic depth. This is elevation through contrast and opacity, not through simulated light and shadow.

## 7. Do's and Don'ts

### Do
- Use `#1f2228` as the universal background -- never pure black `#000000`
- Use GeistMono for all display headlines and button text -- monospace IS the brand
- Apply uppercase + 1.4px letter-spacing to all button labels
- Use weight 300 for the massive display headline (320px)
- Keep borders at `rgba(255, 255, 255, 0.1)` -- barely visible, not absent
- Dim interactive elements on hover to `rgba(255, 255, 255, 0.5)` -- the reverse of convention
- Maintain sharp corners (0px radius) as the default -- brutalist precision
- Use universalSans for all body and reading text at 16px/1.5

### Don't
- Don't use box-shadows -- xAI has zero shadow elevation
- Don't introduce color accents beyond white and the dark background -- the monochromatic palette is sacred
- Don't use large border-radius (8px+, pill shapes) -- the sharp edge is intentional
- Don't use bold weights (600-700) for headlines -- weight 300-400 only
- Don't brighten elements on hover -- xAI dims to `0.5` opacity instead
- Don't add decorative gradients, illustrations, or color blocks
- Don't use proportional fonts for buttons -- GeistMono uppercase is mandatory
- Don't use colored status indicators unless absolutely necessary -- keep everything in the white/dark spectrum

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero headline scales dramatically down |
| Small Tablet | 640-768px | Slight increase in padding |
| Tablet | 768-1024px | Two-column layouts begin, heading sizes increase |
| Desktop | 1024-1280px | Full layout, generous whitespace |
| Large | 1280-1536px | Wider containers, more breathing room |
| Extra Large | 1536-2000px | Maximum content width, centered |
| Ultra | >2000px | Content stays centered, extreme margins |

### Touch Targets
- Buttons use 12px 24px padding for comfortable touch
- Navigation links spaced with 24px gaps
- Minimum tap target: 44px height
- Mobile: full-width buttons for easy thumb reach

### Collapsing Strategy
- Hero: 320px monospace headline scales down dramatically (to ~48px-64px on mobile)
- Navigation: horizontal links collapse to hamburger menu
- Feature sections: two-column to single-column stacking
- Section padding: 96px -> 48px -> 24px across breakpoints
- Massive display type is the first thing to resize -- it must remain impactful but not overflow

### Image Behavior
- Minimal imagery -- the site relies on typography and whitespace
- Any product screenshots maintain sharp corners
- Full-width media scales proportionally with viewport

## 9. Agent Prompt Guide

### Quick Color Reference
- Background: Dark (`#1f2228`)
- Text Primary: White (`#ffffff`)
- Text Secondary: White 70% (`rgba(255, 255, 255, 0.7)`)
- Text Muted: White 50% (`rgba(255, 255, 255, 0.5)`)
- Text Disabled: White 30% (`rgba(255, 255, 255, 0.3)`)
- Border Default: White 10% (`rgba(255, 255, 255, 0.1)`)
- Border Strong: White 20% (`rgba(255, 255, 255, 0.2)`)
- Surface Subtle: White 3% (`rgba(255, 255, 255, 0.03)`)
- Surface Hover: White 8% (`rgba(255, 255, 255, 0.08)`)
- Focus Ring: Blue (`rgb(59, 130, 246)` at 50% opacity)
- Button Primary BG: White (`#ffffff`), text Dark (`#1f2228`)

### Example Component Prompts
- "Create a hero section on #1f2228 background. Headline in GeistMono at 72px weight 300, color #ffffff, centered. Subtitle in universalSans 18px weight 400, rgba(255,255,255,0.7), max-width 600px centered. Two buttons: primary (white bg, #1f2228 text, 0px radius, GeistMono 14px uppercase, 1.4px letter-spacing, 12px 24px padding) and ghost (transparent bg, 1px solid rgba(255,255,255,0.2), white text, same font treatment)."
- "Design a card: transparent or rgba(255,255,255,0.03) background, 1px solid rgba(255,255,255,0.1) border, 0px radius, 24px padding. No shadow. Title in universalSans 22px weight 400, #ffffff. Body in universalSans 16px weight 400, rgba(255,255,255,0.7), line-height 1.5. Hover: border changes to rgba(255,255,255,0.2)."
- "Build navigation: #1f2228 background, full-width. Brand text left (GeistMono 14px uppercase). Links in universalSans 14px #ffffff with hover to rgba(255,255,255,0.5). White primary button right-aligned (GeistMono 14px uppercase, 1.4px letter-spacing)."
- "Create a form: dark background #1f2228. Label in universalSans 14px rgba(255,255,255,0.7). Input with transparent bg, 1px solid rgba(255,255,255,0.2) border, 0px radius, white text 16px universalSans. Focus: blue ring rgb(59,130,246)/0.5. Placeholder: rgba(255,255,255,0.3)."
- "Design a monospace tag/badge: transparent bg, 1px solid rgba(255,255,255,0.2), 0px radius, GeistMono 12px uppercase, 1px letter-spacing, white text, 4px 8px padding."

### Iteration Guide
1. Always start with `#1f2228` background -- never use pure black or gray backgrounds
2. GeistMono for display and buttons, universalSans for everything else -- never mix these roles
3. All buttons must be GeistMono uppercase with 1.4px letter-spacing -- this is non-negotiable
4. No shadows, ever -- depth comes from border opacity and background opacity only
5. Borders are always white with low opacity (0.1 default, 0.2 for emphasis)
6. Hover behavior dims to 0.5 opacity rather than brightening -- the reverse of most systems
7. Sharp corners (0px) by default -- only use 4px for specific secondary containers
8. Body text at 16px universalSans with 1.5 line-height for comfortable reading
9. Generous section padding (48px-96px) -- let content breathe in the darkness
10. The monochromatic white-on-dark palette is absolute -- resist adding color unless critical for function

## 10. Voice & Tone

xAI's voice is **research-oriented and Grok-irreverent.** "Understand the Universe" — Musk's mission framing for xAI. Pure white-on-dark monochrome signals "research lab"; Grok's irreverent tone in product surfaces (vs. xAI corporate's research register) creates a deliberate split.

| Context | Tone |
|---|---|
| CTA | Verb. "Try Grok", "Read announcement", "Use now" |
| Marketing | Research-positioned. Mathematical curiosity framing |
| Grok product | Irreverent. "Memes are valid input" energy |
| Error | Specific. "Rate limit. Try again in 30s." |

**Voice samples**
- xAI CTAs: *"Try Grok"*, *"Read announcement"*, *"Use now"* <!-- verified: x.ai homepage 2026-05 -->
- Tagline: *"Understand the Universe"* <!-- verified: x.ai homepage -->

**Forbidden phrases.** Generic "AI revolution" framing on xAI corporate. Inverse: corporate-stiff voice on Grok product (would break the brand split).

## 11. Brand Narrative

xAI was **founded March 2023** by **Elon Musk** with a team of AI researchers from **DeepMind, OpenAI**, and other leading labs in Palo Alto. Positioned as the "anti-OpenAI" — **Grok unveiled 2023-11-04** (integrated with X), **Grok-1 open-sourced 2024-03-17**, **Grok-1.5 (128k context) 2024-03-29**, **Grok 3 2025-02-17**, **Grok 4 + 4 Heavy 2025-07-09**. **Funding trajectory**: $134.7M Dec 2023 → **$6B Series B @ $24B (May 2024)** → **$6B Series C @ $50B (Dec 2024)** → **$20B Series E @ $230B** → **SpaceX all-stock acquisition valuing xAI at $250B** (combined entity ~$1.25T). **Colossus supercomputer** (>100k GPUs) built in Memphis, Tennessee in 122 days, fully operational Dec 2024; **Colossus 2** expansion underway. The brand identity — pure black canvas, thin 14px·400 sans, monochromatic white-on-black discipline, 9999px pill chrome — signals serious research lab while Grok product carries a separately irreverent voice. <!-- citations: Wikipedia (xAI), Britannica Money, Sacra, Wikipedia (Grok chatbot) -->

**Sources:**
- [xAI (company) — Wikipedia](https://en.wikipedia.org/wiki/XAI_(company))
- [Grok (chatbot) — Wikipedia](https://en.wikipedia.org/wiki/Grok_(chatbot))
- [Britannica Money — xAI](https://www.britannica.com/money/xAI)
- [Sacra — xAI revenue, valuation & funding](https://sacra.com/c/xai/)

## 12. Principles

1. **Pure black canvas.** *UI implication:* `#000` everywhere; no warm dark substitutes.
2. **White-on-dark monochrome.** *UI implication:* resist color unless function-critical.
3. **Generous section padding (48-96px).** *UI implication:* never cramp; whitespace is the design.
4. **Two-brand voice split.** xAI corporate = research; Grok product = irreverent.
5. **Pill chrome 9999px.** *UI implication:* CTAs and badges pill-shaped.

## 13. Personas

*Personas are fictional archetypes informed by xAI / Grok user segments (X platform power users, AI researchers, contrarian-tech-conservative subscribers), not individual people.*

**Marcus Webb, 38, Austin.** X Premium subscriber. Grok daily.

**Sergey Volkov, 35, Berlin.** AI researcher. Reads xAI corporate model releases.

**Sofia Park, 30, Seoul.** Curious early-adopter. Tried Grok via X integration.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no chat)** | Grok prompt with example queries |
| **Empty (no API keys)** | "Generate API key" |
| **Loading (model)** | Per-token streaming |
| **Loading (image)** | Generation progress |
| **Error (rate limit)** | "Rate limit. Try again in 30s." |
| **Error (model)** | Specific cause |
| **Success (response)** | Inline + share/copy |
| **Success (deployed)** | Endpoint URL |
| **Skeleton** | Pure-black placeholders with thin white borders |
| **Disabled (no Premium)** | Upgrade to X Premium link |
| **Loading (long task)** | Persistent progress |

## 15. Motion & Easing

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Selection |
| `motion-fast` | 150ms | Hover |
| `motion-standard` | 250ms | Modal, panel |
| `motion-streaming` | continuous | Token streaming |

Standard cubic-bezier; no bounce — research register. `prefers-reduced-motion: reduce` removes hover transitions.

---

**Verified:** 2026-05-09 (Apple-tier full migration)
**Tier 1 sources:** x.ai/, x.ai/api (live DOM via playwright)
- **Outline Primary** transparent / `#fff` / 9999px / 38px / 8×16 / 14px·400 (Try Grok / Read announcement / Sign up now / Explore more — canonical home variant)
- **Inverse Primary** `#fff` / `rgb(10,10,10)` `#0a0a0a` near-black / 9999px / 38px / 8×16 / 14px·400 (Grok 4.3 API / View docs — /api hero variant)
- **Compact ghost CTA** transparent / `#fff` / 9999px / 34px / 6×14 / 14px·400 (Use now / Build now / Read)
- **Top nav** transparent / `rgba(255,255,255,0.5)` translucent / 0px / 28px / 6×12 / 14px·400 (Grok / API / Company / Colossus / Careers)
- All weight **400** — never bold; pure monochrome white-on-black-`#000`-canvas
**Tier 2 sources:** styles.refero.design / getdesign.md — no record.
**Tier 1 (Philosophy):** Wikipedia (xAI), Wikipedia (Grok chatbot), Britannica Money, Sacra.
**Style ref:** `claude` (research minimalism). **Conflicts unresolved:** none.
