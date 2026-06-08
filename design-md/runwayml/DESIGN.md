---
id: runwayml
name: RunwayML
country: US
category: ai
homepage: "https://runwayml.com"
primary_color: "#000000"
logo:
  type: github
  slug: runwayml
verified: "2026-05-15"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    black: "#000000"
    deep-black: "#030303"
    surface-dark: "#1a1a1a"
    white: "#ffffff"
    near-white: "#fefefe"
    cool-cloud: "#e9ecf2"
    border-dark: "#27272a"
    charcoal: "#404040"
    near-charcoal: "#3f3f3f"
    cool-slate: "#767d88"
    mid-slate: "#7d848e"
    muted-gray: "#a7a7a7"
    cool-silver: "#c9ccd1"
    light-silver: "#d0d4d4"
    tailwind-gray: "#6b7280"
    dark-link: "#0c0c0c"
    footer-gray: "#999999"
  typography:
    family: { sans: "abcNormal", mono: "abcNormal" }
    display-hero: { size: 48, weight: 400, lineHeight: 1.00, tracking: -1.2, use: "Hero, film-title presence" }
    section:      { size: 40, weight: 400, lineHeight: 1.00, tracking: -1, use: "Feature section titles" }
    subheading:   { size: 36, weight: 400, lineHeight: 1.00, tracking: -0.9, use: "Secondary section markers" }
    card-title:   { size: 24, weight: 400, lineHeight: 1.00, use: "Article and card headings" }
    feature-title: { size: 20, weight: 400, lineHeight: 1.00, use: "Small headings" }
    body:         { size: 16, weight: 400, lineHeight: 1.40, tracking: -0.16, use: "Standard body, nav links" }
    label:        { size: 14, weight: 500, lineHeight: 1.43, tracking: 0.35, use: "Metadata, uppercase section labels" }
    small:        { size: 13, weight: 400, lineHeight: 1.30, tracking: -0.16, use: "Compact descriptions" }
    micro:        { size: 11, weight: 450, lineHeight: 1.30, use: "Uppercase tags, tiny labels" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 4, md: 8, lg: 16, full: 9999 }
  shadow:
    none: "none"
  components:
    button-default: { type: button, bg: "#000000", fg: "#ffffff", radius: 4, padding: "8px 12px", font: "14px/600 abcNormal", use: "Restrained button, blends into editorial flow" }
    button-link: { type: button, bg: "#000000", fg: "#ffffff", radius: 4, padding: "4px 8px", font: "14px/600 abcNormal", use: "Inline link-style button" }
    input-default: { type: input, bg: "#1a1a1a", fg: "#ffffff", radius: 4, padding: "8px 12px", font: "14px/400 abcNormal", use: "Minimal dark input, 1px #27272a border" }
    card-photo: { type: card, radius: 8, padding: "0px", use: "Mixed-size image grid card, image fills frame, no shadow" }
    card-dark: { type: card, bg: "#1a1a1a", fg: "#ffffff", radius: 8, padding: "16px", use: "Functional dark card, 1px #27272a border" }
    card-alert: { type: card, bg: "#1a1a1a", radius: 16, padding: "24px", use: "Alert-style container, 1px #27272a border, larger radius" }
    badge-default: { type: badge, fg: "#ffffff", radius: 4, padding: "2px 8px", font: "11px/600 abcNormal", use: "Uppercase label-style, 1px #27272a border" }
  components_harvested: true
---

# Design System Inspiration of Runway

## 1. Visual Theme & Atmosphere

Runway's interface is a cinematic reel brought to life as a website — a dark, editorial, film-production-grade design where full-bleed photography and video ARE the primary UI elements. This is not a typical tech product page; it's a visual manifesto for AI-powered creativity. Every section feels like a frame from a film: dramatic lighting, sweeping landscapes, and intimate human moments captured in high-quality imagery that dominates the viewport.

The design language is built on a single typeface — abcNormal — a clean, geometric sans-serif that handles everything from 48px display headlines to 11px uppercase labels. This single-font commitment creates an extreme typographic uniformity that lets the visual content speak louder than the text. Headlines use tight line-heights (1.0) with negative letter-spacing (-0.9px to -1.2px), creating compressed text blocks that feel like film titles rather than marketing copy.

What makes Runway distinctive is its complete commitment to visual content as design. Rather than illustrating features with icons or diagrams, Runway shows actual AI-generated and AI-enhanced imagery — cars driving through cinematic landscapes, artistic portraits, architectural renders. The interface itself retreats into near-invisibility: minimal borders, zero shadows, subtle cool-gray text, and a dark palette that puts maximum focus on the photography.

**Key Characteristics:**
- Cinematic full-bleed photography and video as primary UI elements
- Single typeface system: abcNormal for everything from display to micro labels
- Dark-dominant palette with cool-toned neutrals (#767d88, #7d848e)
- Zero shadows, minimal borders — the interface is intentionally invisible
- Tight display typography (line-height 1.0) with negative tracking (-0.9px to -1.2px)
- Uppercase labels with positive letter-spacing for navigational structure
- Weight 450 (unusual intermediate) for small uppercase text — precision craft
- Editorial magazine layout with mixed-size image grids

## 2. Color Palette & Roles

### Primary
- **Runway Black** (`#000000`): The primary page background and maximum-emphasis text.
- **Deep Black** (`#030303`): A near-imperceptible variant for layered dark surfaces.
- **Dark Surface** (`#1a1a1a`): Card backgrounds and elevated dark containers.
- **Pure White** (`#ffffff`): Primary text on dark surfaces and light-section backgrounds.

### Surface & Background
- **Near White** (`#fefefe`): The lightest surface — barely distinguishable from pure white.
- **Cool Cloud** (`#e9ecf2`): Light section backgrounds with a cool blue-gray tint.
- **Border Dark** (`#27272a`): The single dark-mode border color — barely visible containment.

### Neutrals & Text
- **Charcoal** (`#404040`): Primary body text on light surfaces and secondary text.
- **Near Charcoal** (`#3f3f3f`): Slightly lighter variant for dark-section secondary text.
- **Cool Slate** (`#767d88`): Secondary body text — a distinctly blue-gray cool neutral.
- **Mid Slate** (`#7d848e`): Tertiary text, metadata descriptions.
- **Muted Gray** (`#a7a7a7`): De-emphasized content, timestamps.
- **Cool Silver** (`#c9ccd1`): Light borders and dividers.
- **Light Silver** (`#d0d4d4`): The lightest border/divider variant.
- **Tailwind Gray** (`#6b7280`): Standard Tailwind neutral for supplementary text.
- **Dark Link** (`#0c0c0c`): Darkest link text — nearly black.
- **Footer Gray** (`#999999`): Footer links and deeply muted content.

### Gradient System
- **None in the interface.** Visual richness comes entirely from photographic content — AI-generated and enhanced imagery provides all the color and gradient the design needs. The interface itself is intentionally colorless.

## 3. Typography Rules

### Font Family
- **Universal**: `abcNormal`, with fallback: `abcNormal Fallback`

*Note: abcNormal is a custom geometric sans-serif. For external implementations, Inter or DM Sans serve as close substitutes.*

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display / Hero | abcNormal | 48px (3rem) | 400 | 1.00 (tight) | -1.2px | Maximum size, film-title presence |
| Section Heading | abcNormal | 40px (2.5rem) | 400 | 1.00–1.10 | -1px to 0px | Feature section titles |
| Sub-heading | abcNormal | 36px (2.25rem) | 400 | 1.00 (tight) | -0.9px | Secondary section markers |
| Card Title | abcNormal | 24px (1.5rem) | 400 | 1.00 (tight) | normal | Article and card headings |
| Feature Title | abcNormal | 20px (1.25rem) | 400 | 1.00 (tight) | normal | Small headings |
| Body / Button | abcNormal | 16px (1rem) | 400–600 | 1.30–1.50 | -0.16px to normal | Standard body, nav links |
| Caption / Label | abcNormal | 14px (0.88rem) | 500–600 | 1.25–1.43 | 0.35px (uppercase) | Metadata, section labels |
| Small | abcNormal | 13px (0.81rem) | 400 | 1.30 (tight) | -0.16px to -0.26px | Compact descriptions |
| Micro / Tag | abcNormal | 11px (0.69rem) | 450 | 1.30 (tight) | normal | Uppercase tags, tiny labels |

### Principles
- **One typeface, complete expression**: abcNormal handles every text role. The design achieves variety through size, weight, case, and letter-spacing rather than font-family switching.
- **Tight everywhere**: Nearly every size uses line-height 1.0–1.30 — even body text is relatively compressed. This creates a dense, editorial feel.
- **Weight 450 — the precision detail**: Some small uppercase labels use weight 450, an uncommon intermediate between regular (400) and medium (500). This micro-craft signals typographic sophistication.
- **Negative tracking as default**: Even body text uses -0.16px to -0.26px letter-spacing, keeping everything slightly tighter than default.
- **Uppercase as structure**: Labels at 14px and 11px use `text-transform: uppercase` with positive letter-spacing (0.35px) to create navigational signposts that contrast with the tight lowercase text.

## 4. Component Stylings

### Buttons

**Default**
- Background: transparent
- Text: `#ffffff` (or `#000000` on light surfaces)
- Border: minimal / none
- Radius: 4px
- Padding: 8px 12px
- Font: 14px / 600 / abcNormal
- Hover: text shifts to white or higher opacity
- Use: Restrained button — interactive elements blend into editorial flow, no heavy fills

**Text Link**
- Background: transparent
- Text: `#ffffff`
- Radius: 4px
- Padding: 4px 8px
- Font: 14px / 600 / abcNormal
- Use: Inline link-style button

### Inputs

**Default**
- Background: `#1a1a1a`
- Text: `#ffffff`
- Border: 1px solid `#27272a`
- Radius: 4px
- Padding: 8px 12px
- Font: 14px / 400 / abcNormal
- Use: Inferred from §1-§2 baseline (no explicit DS variant in source) — minimal dark input.

### Cards

**Photographic Card**
- Background: transparent (image fills frame)
- Radius: 8px
- Padding: 0px (the image IS the card)
- Border: none
- Shadow: none
- Use: Mixed-size image grid card — Research Article Cards / Trust Bar

**Dark Surface Card**
- Background: `#1a1a1a`
- Text: `#ffffff`
- Border: 1px solid `#27272a` (barely visible)
- Radius: 8px
- Padding: 16px
- Shadow: none
- Use: Functional dark card

**Alert / Containment**
- Background: `#1a1a1a`
- Border: 1px solid `#27272a`
- Radius: 16px
- Padding: 24px
- Shadow: none
- Use: Alert-style containers (larger radius)

### Badges

**Default**
- Background: transparent
- Text: `#ffffff`
- Border: 1px solid `#27272a`
- Radius: 4px
- Padding: 2px 8px
- Font: 11px / 600 / abcNormal
- Use: Inferred from §1-§2 baseline (no explicit DS variant in source) — uppercase label-style.

### Distinctive Components

**Cinematic Hero**
- Full-viewport image or video with text overlay
- Headline in 48px abcNormal, white on dark imagery
- The image is always cinematic quality — film-grade composition

**Research Article Cards**
- Photographic thumbnails with article titles
- Mixed-size grid layout (large feature + smaller supporting)
- Clean text overlay or below-image caption style

**Trust Bar**
- Company logos (leading organizations across industries)
- Clean, monochrome treatment
- Horizontal layout with generous spacing

**Mission Statement**
- "We are building AI to simulate the world through imagination, art and aesthetics"
- On a dark background with white text
- The emotional close — artistic and philosophical

### Navigation
- Minimal horizontal nav — transparent over hero content
- Logo: Runway wordmark in white/black
- Links: abcNormal at 16px, weight 400-600
- Hover: text shifts to white or higher opacity
- Extremely subtle — designed to not compete with visual content

### Image Treatment
- Full-bleed cinematic photography and video dominate
- AI-generated content shown at large scale as primary visual elements
- Mixed-size image grids creating editorial magazine layouts
- Dark overlays on hero images for text readability
- Product screenshots with subtle rounded corners (8px)

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 4px, 6px, 8px, 12px, 16px, 20px, 24px, 28px, 32px, 48px, 64px, 78px
- Section vertical spacing: generous (48–78px)
- Component gaps: 16–24px

### Grid & Container
- Max container width: up to 1600px (cinema-wide)
- Hero: full-viewport, edge-to-edge
- Content sections: centered with generous margins
- Image grids: asymmetric, magazine-style mixed sizes
- Footer: full-width dark section

### Whitespace Philosophy
- **Cinema-grade breathing**: Large vertical gaps between sections create a scrolling experience that feels like watching scenes change.
- **Images replace whitespace**: Where other sites use empty space, Runway fills it with photography. The visual content IS the breathing room.
- **Editorial grid asymmetry**: The image grid uses intentionally varied sizes — large hero images paired with smaller supporting images, creating visual rhythm.

### Border Radius Scale
- Sharp (4px): Buttons, small interactive elements
- Subtle (6px): Links, small containers
- Comfortable (8px): Standard containers, image cards
- Generous (16px): Alert-style containers, featured elements

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow, no border | Everything — the dominant state |
| Bordered (Level 1) | `1px solid #27272a` | Alert containers only |
| Dark Section (Level 2) | Dark bg (#000000 / #1a1a1a) with light text | Hero, features, footer |
| Light Section (Level 3) | White/Cool Cloud bg with dark text | Content sections, research |

**Shadow Philosophy**: Runway uses **zero shadows**. This is a film-production design decision — in cinema, depth comes from lighting, focus, and composition, not drop shadows. The interface mirrors this philosophy: depth is communicated through dark/light section alternation, photographic depth-of-field, and overlay transparency — never through CSS box-shadow.

## 7. Do's and Don'ts

### Do
- Use full-bleed cinematic photography as the primary visual element
- Use abcNormal for all text — maintain the single-typeface commitment
- Keep display line-heights at 1.0 with negative letter-spacing for film-title density
- Use the cool-gray neutral palette (#767d88, #7d848e) for secondary text
- Maintain zero shadows — depth comes from photography and section backgrounds
- Use uppercase with letter-spacing for navigational labels (14px, 0.35px spacing)
- Apply small border-radius (4–8px) — the design is NOT pill-shaped
- Let visual content (photos, videos) dominate — the UI should be invisible
- Use weight 450 for micro labels — the precision matters

### Don't
- Don't add decorative colors to the interface — the only color comes from photography
- Don't use heavy borders or shadows — the interface must be nearly invisible
- Don't use pill-shaped radius — Runway's geometry is subtly rounded, not circular
- Don't use bold (700+) weight — 400–600 is the full range, with 450 as a precision tool
- Don't compete with the visual content — text overlays should be minimal and restrained
- Don't use gradient backgrounds in the interface — gradients exist only in photography
- Don't use more than one typeface — abcNormal handles everything
- Don't use body line-height above 1.50 — the tight, editorial feel is core
- Don't reduce image quality — cinematic photography IS the design

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, stacked images, reduced hero text |
| Tablet | 640–768px | 2-column image grids begin |
| Small Desktop | 768–1024px | Standard layout |
| Desktop | 1024–1280px | Full layout, expanded hero |
| Large Desktop | 1280–1600px | Maximum cinema-width container |

### Touch Targets
- Navigation links at comfortable 16px
- Article cards serve as large touch targets
- Buttons at 14px weight 600 with adequate padding

### Collapsing Strategy
- **Navigation**: Collapses to hamburger on mobile
- **Hero**: Full-bleed maintained, text scales down
- **Image grids**: Multi-column → 2-column → single column
- **Research articles**: Feature-size cards → stacked full-width
- **Trust logos**: Horizontal scroll or reduced grid

### Image Behavior
- Cinematic images scale proportionally
- Full-bleed hero maintained across all sizes
- Image grids reflow to fewer columns
- Video content maintains aspect ratio

## 9. Agent Prompt Guide

### Quick Color Reference
- Background Dark: "Runway Black (#000000)"
- Background Light: "Pure White (#ffffff)"
- Primary Text Dark: "Charcoal (#404040)"
- Secondary Text: "Cool Slate (#767d88)"
- Muted Text: "Muted Gray (#a7a7a7)"
- Light Border: "Cool Silver (#c9ccd1)"
- Dark Border: "Border Dark (#27272a)"
- Card Surface: "Dark Surface (#1a1a1a)"

### Example Component Prompts
- "Create a cinematic hero section: full-bleed dark background with a cinematic image overlay. Headline at 48px abcNormal weight 400, line-height 1.0, letter-spacing -1.2px in white. Minimal text below in Cool Slate (#767d88) at 16px."
- "Design a research article grid: one large card (50% width) with a cinematic image and 24px title, next to two smaller cards stacked. All images with 8px border-radius. Titles in white (dark bg) or Charcoal (#404040, light bg)."
- "Build a section label: 14px abcNormal weight 500, uppercase, letter-spacing 0.35px in Cool Slate (#767d88). No border, no background."
- "Create a trust bar: company logos in monochrome, horizontal layout with generous spacing. On dark background with white/gray logo treatments."
- "Design a mission statement section: Runway Black background, white text at 36px abcNormal, line-height 1.0, letter-spacing -0.9px. Centered, with generous vertical padding."

### Iteration Guide
1. Visual content first — always include cinematic photography
2. Use abcNormal for everything — specify size and weight, never change the font
3. Keep the interface invisible — no heavy borders, no shadows, no bright colors
4. Use the cool slate grays (#767d88, #7d848e) for secondary text — not warm grays
5. Uppercase labels need letter-spacing (0.35px) — never tight uppercase
6. Dark sections should be truly dark (#000000 or #1a1a1a) — no medium grays as surfaces

## 10. Voice & Tone

Runway's voice is **filmmaker-grade and AI-research-confident.** "Building AI to Simulate the World" — ambitious mission framing. Marketing copy positions Runway as the AI-native creative tool for video professionals + filmmakers, distinct from indie consumer tools.

| Context | Tone |
|---|---|
| CTA | Verb. "Get Started", "Try Runway", "Enterprise Sales" |
| Marketing | Cinematic. Generated video samples dominate |
| Documentation | Visual-first, frame-by-frame |
| Error | Specific. "Generation failed: insufficient credits. Top up." |

**Voice samples**
- Tagline: *"Building AI to Simulate the World"* <!-- verified: runwayml.com homepage 2026-05 -->

**Forbidden phrases.** "Revolutionary AI video". Generic Sora-comparison framing.

## 11. Brand Narrative

Runway was founded **2018** by **Cristóbal Valenzuela (CEO, Chilean)**, **Alejandro Matamala (Chilean)**, and **Anastasis Germanidis (Greek)** — the three met at **NYU Tisch School of the Arts ITP** ([Runway — Wikipedia](https://en.wikipedia.org/wiki/Runway_(company)), [Acquired Podcast — Cristobal Valenzuela complete history](https://www.acquired.fm/episodes/generative-ai-in-video-and-the-future-of-storytelling-with-runway-ceo-cristobal-valenzuela)). Initially a research tool for ML-creative experimentation → grew into AI video generation platform (**Gen-1, Gen-2, Gen-3, Gen-4**). Co-developed **Stable Diffusion** with the original research team. **Real production credits**: tools used in **Everything Everywhere All at Once** (Best Picture Oscar 2023) + **The Late Show with Stephen Colbert**. **June 2023**: $141M Series C extension at **$1.5B valuation** with **Google, NVIDIA, Salesforce**. **Current**: **~$860M total raised** with **General Atlantic, Amplify Partners, Google** — **valuation ~$5.3B** ([Sacra — Runway revenue/funding](https://sacra.com/c/runway/), [Contrary Research — Runway](https://research.contrary.com/company/runway)). Strong adoption in filmmaking + advertising. The brand voice — uppercase tracking, dark cinematic surfaces — reflects the filmmaker positioning.

## 12. Principles

1. **Filmmaker-grade, not consumer toy.** *UI implication:* tone is professional video production.
2. **Truly dark surfaces.** `#000` or `#1a1a1a`, never medium gray. *UI implication:* preserve cinematic depth.
3. **Uppercase with letter-spacing 0.35px.** *UI implication:* never tight uppercase.
4. **Generated video samples lead.** *UI implication:* hero modules autoplay generated video, not static.
5. **6px standard radius.** *UI implication:* keep consistent across CTAs and cards.

## 13. Personas

*Personas are fictional archetypes informed by Runway user segments (filmmakers, advertising creatives, content studios), not individual people.*

**Sofia Russo, 35, Milan.** Indie filmmaker. Runway Gen-4 for previs + b-roll generation.

**Marcus Chen, 42, San Francisco.** Creative director at advertising agency. Runway for client pitches + concept exploration.

**Yuki Tanaka, 31, Tokyo.** Music video director. Runway for stylistic transfer experiments.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no projects)** | "Start a new project" CTA + template gallery |
| **Empty (no generations)** | "Try a generation" with prompt examples |
| **Loading (generation)** | Real-time progress with frame previews |
| **Loading (model)** | Initialization status |
| **Error (generation)** | Specific. "Failed at frame 23. Retry from this point?" |
| **Error (insufficient credits)** | Top up link + plan comparison |
| **Success (generated)** | Inline player + download/share/timeline |
| **Success (exported)** | Download triggered + shareable link |
| **Skeleton (projects)** | Dark cinematic placeholders |
| **Disabled (no plan)** | Upgrade link |
| **Loading (long generation)** | Persistent progress with cancel option |

## 15. Motion & Easing

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Selection |
| `motion-fast` | 150ms | Hover |
| `motion-standard` | 300ms | Modal, panel |
| `motion-cinematic` | 600ms | Hero video reveals |

Cinematic easing for hero reveals, standard for chrome. `prefers-reduced-motion: reduce` disables hero auto-play.

---

**Verified:** 2026-05-08 (omd:migrate run 52 — Apple-tier)
**Tier 1 sources:** runwayml.com home + /research (live DOM via playwright — Primary `#262626` Charcoal 6px / 32px / 6×10 / 14px·**600**; Outline `#eef1f5` Cool Cream + `#1a1a1a` Near-Black text 6px; compact 4px / 28px sub-tier; **top nav 11px·450 ALL CAPS** with `#0c0c0c` Deep Black; **three-shade near-black palette** `#0c0c0c` / `#1a1a1a` / `#262626`).
**Tier 2 sources:** styles.refero.design / getdesign.md — no record.
**Tier 2 (Philosophy/founders/funding):** Wikipedia (Runway), Acquired Podcast (Valenzuela complete history), LinkedIn (Cristóbal Valenzuela), Sacra ($5.3B valuation), Contrary Research, Tracxn, Skim AI, Upstarts Media.
**Style ref:** `claude`. **Conflicts unresolved:** none. **Earlier addition:** ALL CAPS 11px·**450** nav signature + 3-shade near-black palette + 4px compact sub-tier missed; Outline cream is `#eef1f5` (Cool Cream w/ blue cast) not `#f7f7f7`.
