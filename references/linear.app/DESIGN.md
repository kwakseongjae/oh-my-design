---
omd: 0.1
brand: Linear
---

# Design System Inspiration of Linear

## 1. Visual Theme & Atmosphere

Linear's website is a masterclass in dark-mode-first product design — a near-black canvas (`#08090a`) where content emerges from darkness like starlight. The overall impression is one of extreme precision engineering: every element exists in a carefully calibrated hierarchy of luminance, from barely-visible borders (`rgba(255,255,255,0.05)`) to soft, luminous text (`#f7f8f8`). This is not a dark theme applied to a light design — it is darkness as the native medium, where information density is managed through subtle gradations of white opacity rather than color variation.

The typography system is built entirely on Inter Variable with OpenType features `"cv01"` and `"ss03"` enabled globally, giving the typeface a cleaner, more geometric character. Inter is used at a remarkable range of weights — from 300 (light body) through 510 (medium, Linear's signature weight) to 590 (semibold emphasis). The 510 weight is particularly distinctive: it sits between regular and medium, creating a subtle emphasis that doesn't shout. At display sizes (72px, 64px, 48px), Inter uses aggressive negative letter-spacing (-1.584px to -1.056px), creating compressed, authoritative headlines that feel engineered rather than designed. Berkeley Mono serves as the monospace companion for code and technical labels, with fallbacks to ui-monospace, SF Mono, and Menlo.

The color system is almost entirely achromatic — dark backgrounds with white/gray text — punctuated by a single brand accent: Linear's signature indigo-violet (`#5e6ad2` for backgrounds, `#7170ff` for interactive accents). This accent color is used sparingly and intentionally, appearing only on CTAs, active states, and brand elements. The border system uses ultra-thin, semi-transparent white borders (`rgba(255,255,255,0.05)` to `rgba(255,255,255,0.08)`) that create structure without visual noise, like wireframes drawn in moonlight.

**Key Characteristics:**
- Dark-mode-native: `#08090a` marketing background, `#0f1011` panel background, `#191a1b` elevated surfaces
- Inter Variable with `"cv01", "ss03"` globally — geometric alternates for a cleaner aesthetic
- Signature weight 510 (between regular and medium) for most UI text
- Aggressive negative letter-spacing at display sizes (-1.584px at 72px, -1.056px at 48px)
- Brand indigo-violet: `#5e6ad2` (bg) / `#7170ff` (accent) / `#828fff` (hover) — the only chromatic color in the system
- Semi-transparent white borders throughout: `rgba(255,255,255,0.05)` to `rgba(255,255,255,0.08)`
- Button backgrounds at near-zero opacity: `rgba(255,255,255,0.02)` to `rgba(255,255,255,0.05)`
- Multi-layered shadows with inset variants for depth on dark surfaces
- Radix UI primitives as the component foundation (6 detected primitives)
- Success green (`#27a644`, `#10b981`) used only for status indicators

## 2. Color Palette & Roles

### Background Surfaces
- **Marketing Black** (`#010102` / `#08090a`): The deepest background — the canvas for hero sections and marketing pages. Near-pure black with an imperceptible blue-cool undertone.
- **Panel Dark** (`#0f1011`): Sidebar and panel backgrounds. One step up from the marketing black.
- **Level 3 Surface** (`#191a1b`): Elevated surface areas, card backgrounds, dropdowns.
- **Secondary Surface** (`#28282c`): The lightest dark surface — used for hover states and slightly elevated components.

### Text & Content
- **Primary Text** (`#f7f8f8`): Near-white with a barely-warm cast. The default text color — not pure white, preventing eye strain on dark backgrounds.
- **Secondary Text** (`#d0d6e0`): Cool silver-gray for body text, descriptions, and secondary content.
- **Tertiary Text** (`#8a8f98`): Muted gray for placeholders, metadata, and de-emphasized content.
- **Quaternary Text** (`#62666d`): The most subdued text — timestamps, disabled states, subtle labels.

### Brand & Accent
- **Brand Indigo** (`#5e6ad2`): Primary brand color — used for CTA button backgrounds, brand marks, and key interactive surfaces.
- **Accent Violet** (`#7170ff`): Brighter variant for interactive elements — links, active states, selected items.
- **Accent Hover** (`#828fff`): Lighter, more saturated variant for hover states on accent elements.
- **Security Lavender** (`#7a7fad`): Muted indigo used specifically for security-related UI elements.

### Status Colors
- **Green** (`#27a644`): Primary success/active status. Used for "in progress" indicators.
- **Emerald** (`#10b981`): Secondary success — pill badges, completion states.

### Border & Divider
- **Border Primary** (`#23252a`): Solid dark border for prominent separations.
- **Border Secondary** (`#34343a`): Slightly lighter solid border.
- **Border Tertiary** (`#3e3e44`): Lightest solid border variant.
- **Border Subtle** (`rgba(255,255,255,0.05)`): Ultra-subtle semi-transparent border — the default.
- **Border Standard** (`rgba(255,255,255,0.08)`): Standard semi-transparent border for cards, inputs, code blocks.
- **Line Tint** (`#141516`): Nearly invisible line for the subtlest divisions.
- **Line Tertiary** (`#18191a`): Slightly more visible divider line.

### Light Mode Neutrals (for light theme contexts)
- **Light Background** (`#f7f8f8`): Page background in light mode.
- **Light Surface** (`#f3f4f5` / `#f5f6f7`): Subtle surface tinting.
- **Light Border** (`#d0d6e0`): Visible border in light contexts.
- **Light Border Alt** (`#e6e6e6`): Alternative lighter border.
- **Pure White** (`#ffffff`): Card surfaces, highlights.

### Overlay
- **Overlay Primary** (`rgba(0,0,0,0.85)`): Modal/dialog backdrop — extremely dark for focus isolation.

## 3. Typography Rules

### Font Family
- **Primary**: `Inter Variable`, with fallbacks: `SF Pro Display, -apple-system, system-ui, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue`
- **Monospace**: `Berkeley Mono`, with fallbacks: `ui-monospace, SF Mono, Menlo`
- **OpenType Features**: `"cv01", "ss03"` enabled globally — cv01 provides an alternate lowercase 'a' (single-story), ss03 adjusts specific letterforms for a cleaner geometric appearance.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display XL | Inter Variable | 72px (4.50rem) | 510 | 1.00 (tight) | -1.584px | Hero headlines, maximum impact |
| Display Large | Inter Variable | 64px (4.00rem) | 510 | 1.00 (tight) | -1.408px | Secondary hero text |
| Display | Inter Variable | 48px (3.00rem) | 510 | 1.00 (tight) | -1.056px | Section headlines |
| Heading 1 | Inter Variable | 32px (2.00rem) | 400 | 1.13 (tight) | -0.704px | Major section titles |
| Heading 2 | Inter Variable | 24px (1.50rem) | 400 | 1.33 | -0.288px | Sub-section headings |
| Heading 3 | Inter Variable | 20px (1.25rem) | 590 | 1.33 | -0.24px | Feature titles, card headers |
| Body Large | Inter Variable | 18px (1.13rem) | 400 | 1.60 (relaxed) | -0.165px | Introduction text, feature descriptions |
| Body Emphasis | Inter Variable | 17px (1.06rem) | 590 | 1.60 (relaxed) | normal | Emphasized body, sub-headings in content |
| Body | Inter Variable | 16px (1.00rem) | 400 | 1.50 | normal | Standard reading text |
| Body Medium | Inter Variable | 16px (1.00rem) | 510 | 1.50 | normal | Navigation, labels |
| Body Semibold | Inter Variable | 16px (1.00rem) | 590 | 1.50 | normal | Strong emphasis |
| Small | Inter Variable | 15px (0.94rem) | 400 | 1.60 (relaxed) | -0.165px | Secondary body text |
| Small Medium | Inter Variable | 15px (0.94rem) | 510 | 1.60 (relaxed) | -0.165px | Emphasized small text |
| Small Semibold | Inter Variable | 15px (0.94rem) | 590 | 1.60 (relaxed) | -0.165px | Strong small text |
| Small Light | Inter Variable | 15px (0.94rem) | 300 | 1.47 | -0.165px | De-emphasized body |
| Caption Large | Inter Variable | 14px (0.88rem) | 510–590 | 1.50 | -0.182px | Sub-labels, category headers |
| Caption | Inter Variable | 13px (0.81rem) | 400–510 | 1.50 | -0.13px | Metadata, timestamps |
| Label | Inter Variable | 12px (0.75rem) | 400–590 | 1.40 | normal | Button text, small labels |
| Micro | Inter Variable | 11px (0.69rem) | 510 | 1.40 | normal | Tiny labels |
| Tiny | Inter Variable | 10px (0.63rem) | 400–510 | 1.50 | -0.15px | Overline text, sometimes uppercase |
| Link Large | Inter Variable | 16px (1.00rem) | 400 | 1.50 | normal | Standard links |
| Link Medium | Inter Variable | 15px (0.94rem) | 510 | 2.67 | normal | Spaced navigation links |
| Link Small | Inter Variable | 14px (0.88rem) | 510 | 1.50 | normal | Compact links |
| Link Caption | Inter Variable | 13px (0.81rem) | 400–510 | 1.50 | -0.13px | Footer, metadata links |
| Mono Body | Berkeley Mono | 14px (0.88rem) | 400 | 1.50 | normal | Code blocks |
| Mono Caption | Berkeley Mono | 13px (0.81rem) | 400 | 1.50 | normal | Code labels |
| Mono Label | Berkeley Mono | 12px (0.75rem) | 400 | 1.40 | normal | Code metadata, sometimes uppercase |

### Principles
- **510 is the signature weight**: Linear uses Inter Variable's 510 weight (between regular 400 and medium 500) as its default emphasis weight. This creates a subtly bolded feel without the heaviness of traditional medium or semibold.
- **Compression at scale**: Display sizes use progressively tighter letter-spacing — -1.584px at 72px, -1.408px at 64px, -1.056px at 48px, -0.704px at 32px. Below 24px, spacing relaxes toward normal.
- **OpenType as identity**: `"cv01", "ss03"` aren't decorative — they transform Inter into Linear's distinctive typeface, giving it a more geometric, purposeful character.
- **Three-tier weight system**: 400 (reading), 510 (emphasis/UI), 590 (strong emphasis). The 300 weight appears only in deliberately de-emphasized contexts.

## 4. Component Stylings

### Buttons

**Ghost Button (Default)**
- Background: `rgba(255,255,255,0.02)`
- Text: `#e2e4e7` (near-white)
- Padding: comfortable
- Radius: 6px
- Border: `1px solid rgb(36, 40, 44)`
- Outline: none
- Focus shadow: `rgba(0,0,0,0.1) 0px 4px 12px`
- Use: Standard actions, secondary CTAs

**Subtle Button**
- Background: `rgba(255,255,255,0.04)`
- Text: `#d0d6e0` (silver-gray)
- Padding: 0px 6px
- Radius: 6px
- Use: Toolbar actions, contextual buttons

**Primary Brand Button (Inferred)**
- Background: `#5e6ad2` (brand indigo)
- Text: `#ffffff`
- Padding: 8px 16px
- Radius: 6px
- Hover: `#828fff` shift
- Use: Primary CTAs ("Start building", "Sign up")

**Icon Button (Circle)**
- Background: `rgba(255,255,255,0.03)` or `rgba(255,255,255,0.05)`
- Text: `#f7f8f8` or `#ffffff`
- Radius: 50%
- Border: `1px solid rgba(255,255,255,0.08)`
- Use: Close, menu toggle, icon-only actions

**Pill Button**
- Background: transparent
- Text: `#d0d6e0`
- Padding: 0px 10px 0px 5px
- Radius: 9999px
- Border: `1px solid rgb(35, 37, 42)`
- Use: Filter chips, tags, status indicators

**Small Toolbar Button**
- Background: `rgba(255,255,255,0.05)`
- Text: `#62666d` (muted)
- Radius: 2px
- Border: `1px solid rgba(255,255,255,0.05)`
- Shadow: `rgba(0,0,0,0.03) 0px 1.2px 0px 0px`
- Font: 12px weight 510
- Use: Toolbar actions, quick-access controls

### Cards & Containers
- Background: `rgba(255,255,255,0.02)` to `rgba(255,255,255,0.05)` (never solid — always translucent)
- Border: `1px solid rgba(255,255,255,0.08)` (standard) or `1px solid rgba(255,255,255,0.05)` (subtle)
- Radius: 8px (standard), 12px (featured), 22px (large panels)
- Shadow: `rgba(0,0,0,0.2) 0px 0px 0px 1px` or layered multi-shadow stacks
- Hover: subtle background opacity increase

### Inputs & Forms

**Text Area**
- Background: `rgba(255,255,255,0.02)`
- Text: `#d0d6e0`
- Border: `1px solid rgba(255,255,255,0.08)`
- Padding: 12px 14px
- Radius: 6px

**Search Input**
- Background: transparent
- Text: `#f7f8f8`
- Padding: 1px 32px (icon-aware)

**Button-style Input**
- Text: `#8a8f98`
- Padding: 1px 6px
- Radius: 5px
- Focus shadow: multi-layer stack

### Badges & Pills

**Success Pill**
- Background: `#10b981`
- Text: `#f7f8f8`
- Radius: 50% (circular)
- Font: 10px weight 510
- Use: Status dots, completion indicators

**Neutral Pill**
- Background: transparent
- Text: `#d0d6e0`
- Padding: 0px 10px 0px 5px
- Radius: 9999px
- Border: `1px solid rgb(35, 37, 42)`
- Font: 12px weight 510
- Use: Tags, filter chips, category labels

**Subtle Badge**
- Background: `rgba(255,255,255,0.05)`
- Text: `#f7f8f8`
- Padding: 0px 8px 0px 2px
- Radius: 2px
- Border: `1px solid rgba(255,255,255,0.05)`
- Font: 10px weight 510
- Use: Inline labels, version tags

### Navigation
- Dark sticky header on near-black background
- Linear logomark left-aligned (SVG icon)
- Links: Inter Variable 13–14px weight 510, `#d0d6e0` text
- Active/hover: text lightens to `#f7f8f8`
- CTA: Brand indigo button or ghost button
- Mobile: hamburger collapse
- Search: command palette trigger (`/` or `Cmd+K`)

### Image Treatment
- Product screenshots on dark backgrounds with subtle border (`rgba(255,255,255,0.08)`)
- Top-rounded images: `12px 12px 0px 0px` radius
- Dashboard/issue previews dominate feature sections
- Subtle shadow beneath screenshots: `rgba(0,0,0,0.4) 0px 2px 4px`

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 1px, 4px, 7px, 8px, 11px, 12px, 16px, 19px, 20px, 22px, 24px, 28px, 32px, 35px
- The 7px and 11px values suggest micro-adjustments for optical alignment
- Primary rhythm: 8px, 16px, 24px, 32px (standard 8px grid)

### Grid & Container
- Max content width: approximately 1200px
- Hero: centered single-column with generous vertical padding
- Feature sections: 2–3 column grids for feature cards
- Full-width dark sections with internal max-width constraints
- Changelog: single-column timeline layout

### Whitespace Philosophy
- **Darkness as space**: On Linear's dark canvas, empty space isn't white — it's absence. The near-black background IS the whitespace, and content emerges from it.
- **Compressed headlines, expanded surroundings**: Display text at 72px with -1.584px tracking is dense and compressed, but sits within vast dark padding. The contrast between typographic density and spatial generosity creates tension.
- **Section isolation**: Each feature section is separated by generous vertical padding (80px+) with no visible dividers — the dark background provides natural separation.

### Border Radius Scale
- Micro (2px): Inline badges, toolbar buttons, subtle tags
- Standard (4px): Small containers, list items
- Comfortable (6px): Buttons, inputs, functional elements
- Card (8px): Cards, dropdowns, popovers
- Panel (12px): Panels, featured cards, section containers
- Large (22px): Large panel elements
- Full Pill (9999px): Chips, filter pills, status tags
- Circle (50%): Icon buttons, avatars, status dots

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow, `#010102` bg | Page background, deepest canvas |
| Subtle (Level 1) | `rgba(0,0,0,0.03) 0px 1.2px 0px` | Toolbar buttons, micro-elevation |
| Surface (Level 2) | `rgba(255,255,255,0.05)` bg + `1px solid rgba(255,255,255,0.08)` border | Cards, input fields, containers |
| Inset (Level 2b) | `rgba(0,0,0,0.2) 0px 0px 12px 0px inset` | Recessed panels, inner shadows |
| Ring (Level 3) | `rgba(0,0,0,0.2) 0px 0px 0px 1px` | Border-as-shadow technique |
| Elevated (Level 4) | `rgba(0,0,0,0.4) 0px 2px 4px` | Floating elements, dropdowns |
| Dialog (Level 5) | Multi-layer stack: `rgba(0,0,0,0) 0px 8px 2px, rgba(0,0,0,0.01) 0px 5px 2px, rgba(0,0,0,0.04) 0px 3px 2px, rgba(0,0,0,0.07) 0px 1px 1px, rgba(0,0,0,0.08) 0px 0px 1px` | Popovers, command palette, modals |
| Focus | `rgba(0,0,0,0.1) 0px 4px 12px` + additional layers | Keyboard focus on interactive elements |

**Shadow Philosophy**: On dark surfaces, traditional shadows (dark on dark) are nearly invisible. Linear solves this by using semi-transparent white borders as the primary depth indicator. Elevation isn't communicated through shadow darkness but through background luminance steps — each level slightly increases the white opacity of the surface background (`0.02` → `0.04` → `0.05`), creating a subtle stacking effect. The inset shadow technique (`rgba(0,0,0,0.2) 0px 0px 12px 0px inset`) creates a unique "sunken" effect for recessed panels, adding dimensional depth that traditional dark themes lack.

## 7. Do's and Don'ts

### Do
- Use Inter Variable with `"cv01", "ss03"` on ALL text — these features are fundamental to Linear's typeface identity
- Use weight 510 as your default emphasis weight — it's Linear's signature between-weight
- Apply aggressive negative letter-spacing at display sizes (-1.584px at 72px, -1.056px at 48px)
- Build on near-black backgrounds: `#08090a` for marketing, `#0f1011` for panels, `#191a1b` for elevated surfaces
- Use semi-transparent white borders (`rgba(255,255,255,0.05)` to `rgba(255,255,255,0.08)`) instead of solid dark borders
- Keep button backgrounds nearly transparent: `rgba(255,255,255,0.02)` to `rgba(255,255,255,0.05)`
- Reserve brand indigo (`#5e6ad2` / `#7170ff`) for primary CTAs and interactive accents only
- Use `#f7f8f8` for primary text — not pure `#ffffff`, which would be too harsh
- Apply the luminance stacking model: deeper = darker bg, elevated = slightly lighter bg

### Don't
- Don't use pure white (`#ffffff`) as primary text — `#f7f8f8` prevents eye strain
- Don't use solid colored backgrounds for buttons — transparency is the system (rgba white at 0.02–0.05)
- Don't apply the brand indigo decoratively — it's reserved for interactive/CTA elements only
- Don't use positive letter-spacing on display text — Inter at large sizes always runs negative
- Don't use visible/opaque borders on dark backgrounds — borders should be whisper-thin semi-transparent white
- Don't skip the OpenType features (`"cv01", "ss03"`) — without them, it's generic Inter, not Linear's Inter
- Don't use weight 700 (bold) — Linear's maximum weight is 590, with 510 as the workhorse
- Don't introduce warm colors into the UI chrome — the palette is cool gray with blue-violet accent only
- Don't use drop shadows for elevation on dark surfaces — use background luminance stepping instead

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile Small | <600px | Single column, compact padding |
| Mobile | 600–640px | Standard mobile layout |
| Tablet | 640–768px | Two-column grids begin |
| Desktop Small | 768–1024px | Full card grids, expanded padding |
| Desktop | 1024–1280px | Standard desktop, full navigation |
| Large Desktop | >1280px | Full layout, generous margins |

### Touch Targets
- Buttons use comfortable padding with 6px radius minimum
- Navigation links at 13–14px with adequate spacing
- Pill tags have 10px horizontal padding for touch accessibility
- Icon buttons at 50% radius ensure circular, easy-to-tap targets
- Search trigger is prominently placed with generous hit area

### Collapsing Strategy
- Hero: 72px → 48px → 32px display text, tracking adjusts proportionally
- Navigation: horizontal links + CTAs → hamburger menu at 768px
- Feature cards: 3-column → 2-column → single column stacked
- Product screenshots: maintain aspect ratio, may reduce padding
- Changelog: timeline maintains single-column through all sizes
- Footer: multi-column → stacked single column
- Section spacing: 80px+ → 48px on mobile

### Image Behavior
- Dashboard screenshots maintain border treatment at all sizes
- Hero visuals simplify on mobile (fewer floating UI elements)
- Product screenshots use responsive sizing with consistent radius
- Dark background ensures screenshots blend naturally at any viewport

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Brand Indigo (`#5e6ad2`)
- Page Background: Marketing Black (`#08090a`)
- Panel Background: Panel Dark (`#0f1011`)
- Surface: Level 3 (`#191a1b`)
- Heading text: Primary White (`#f7f8f8`)
- Body text: Silver Gray (`#d0d6e0`)
- Muted text: Tertiary Gray (`#8a8f98`)
- Subtle text: Quaternary Gray (`#62666d`)
- Accent: Violet (`#7170ff`)
- Accent Hover: Light Violet (`#828fff`)
- Border (default): `rgba(255,255,255,0.08)`
- Border (subtle): `rgba(255,255,255,0.05)`
- Focus ring: Multi-layer shadow stack

### Example Component Prompts
- "Create a hero section on `#08090a` background. Headline at 48px Inter Variable weight 510, line-height 1.00, letter-spacing -1.056px, color `#f7f8f8`, font-feature-settings `'cv01', 'ss03'`. Subtitle at 18px weight 400, line-height 1.60, color `#8a8f98`. Brand CTA button (`#5e6ad2`, 6px radius, 8px 16px padding) and ghost button (`rgba(255,255,255,0.02)` bg, `1px solid rgba(255,255,255,0.08)` border, 6px radius)."
- "Design a card on dark background: `rgba(255,255,255,0.02)` background, `1px solid rgba(255,255,255,0.08)` border, 8px radius. Title at 20px Inter Variable weight 590, letter-spacing -0.24px, color `#f7f8f8`. Body at 15px weight 400, color `#8a8f98`, letter-spacing -0.165px."
- "Build a pill badge: transparent background, `#d0d6e0` text, 9999px radius, 0px 10px padding, `1px solid #23252a` border, 12px Inter Variable weight 510."
- "Create navigation: dark sticky header on `#0f1011`. Inter Variable 13px weight 510 for links, `#d0d6e0` text. Brand indigo CTA `#5e6ad2` right-aligned with 6px radius. Bottom border: `1px solid rgba(255,255,255,0.05)`."
- "Design a command palette: `#191a1b` background, `1px solid rgba(255,255,255,0.08)` border, 12px radius, multi-layer shadow stack. Input at 16px Inter Variable weight 400, `#f7f8f8` text. Results list with 13px weight 510 labels in `#d0d6e0` and 12px metadata in `#62666d`."

### Iteration Guide
1. Always set font-feature-settings `"cv01", "ss03"` on all Inter text — this is non-negotiable for Linear's look
2. Letter-spacing scales with font size: -1.584px at 72px, -1.056px at 48px, -0.704px at 32px, normal below 16px
3. Three weights: 400 (read), 510 (emphasize/navigate), 590 (announce)
4. Surface elevation via background opacity: `rgba(255,255,255, 0.02 → 0.04 → 0.05)` — never solid backgrounds on dark
5. Brand indigo (`#5e6ad2` / `#7170ff`) is the only chromatic color — everything else is grayscale
6. Borders are always semi-transparent white, never solid dark colors on dark backgrounds
7. Berkeley Mono for any code or technical content, Inter Variable for everything else

---

## 10. Voice & Tone

Linear's voice is craftsman-like, direct, and quietly opinionated. The product's own README opens with *"This is not a manifesto. This is not a codex, not a whitepaper, and not a secret master plan. This is just a simple story"* — and that anti-grandeur register is the whole voice. It speaks to makers: software engineers, designers, product managers, founding teams. Technical vocabulary is used when appropriate, without apology. Marketing superlatives are never used. When Linear makes a claim, it is specific ("2-week cycles are the most common in software building") rather than promotional ("boost your team's productivity by 10x").

| Context | Tone |
|---|---|
| Hero headlines | Declarative, opinionated. "The AI-native platform for modern product teams." |
| Product descriptions | Concrete, mechanic-focused ("Cycles create a healthy routine and focus teams"). Never feature-listy. |
| CTAs | Imperative verb + noun. "Start building", "Sign in", "Read the method". |
| Issue / UI strings | Dense but unambiguous. Technical abbreviations are fine — the audience reads them. |
| Docs / API reference | Peer-to-peer. Never condescending, never hedging. |
| Changelog ("Now") | Specific, dated, ship-proud. "We shipped X. It does Y." |
| Marketing copy | Craft-oriented — speaks about quality, speed, focus — not productivity metrics. |
| Error messages | Specific and blameless. Never "An error occurred." |
| Onboarding | One idea per screen. Keyboard shortcuts are taught inline, not in a tour. |

**Forbidden phrases.** "10x", "boost your productivity", "empower your team", "unleash", "supercharge", "revolutionary". User-story vocabulary ("As a user, I want...") — the Linear Method explicitly rejects this frame, and it should not appear anywhere in product, marketing, or docs copy. "Easy peasy", "effortless" as self-descriptors. Performative onboarding toasts ("Great choice!"). Emoji on product or marketing surfaces — Linear does not add 🚀 or ✨ to its release notes.

## 11. Brand Narrative

Linear was founded in 2019 by Karri Saarinen, Tuomas Artman, and Jori Lallo — three engineers and designers with backgrounds at companies like Airbnb, Coinbase, and Uber, frustrated with the state of project-management software. Their founding complaint is published on their public README: *"Craftsmanship was replaced with growth hacks. Our once so lively dreams have become positively lifeless."* The name itself was chosen as a design statement: *"We chose to name it Linear to signify progress."*

That craft-first positioning has stayed the company's center of gravity. Linear publishes **The Linear Method** — a public document stating *"There is a lost art of building true quality software. To bring back the right focus, here are the foundational ideas Linear is built on."* The Method articulates opinions most companies would never publish: *"Write issues not user stories"*, *"A tool should work for you, not the other way around"*, *"Don't invent terms if possible"*. These are not marketing — they are internal operating principles made public because Linear wants to attract customers who already agree with them.

What Linear refuses: bloat (*"A tool should be simple to get started with and grow more powerful as you scale"*), vocabulary inflation, the user-story framework, marketing metrics like "10x productivity", and the generic SaaS dark-theme-as-afterthought aesthetic. What it embraces: near-black as the native medium (not a toggled theme), Inter Variable at its 510 weight as a typographic signature, keyboard-first interaction, and publishing strong opinions *before* asking a customer to adopt them.

## 12. Principles

1. **A tool should work for you, not the other way around.** *(Linear Method, verbatim.)* The UI must never demand admin work to be useful. Keyboard shortcuts are first-class; mouse-only workflows are second-class.
2. **Productivity software needs to be designed for purpose.** *(Linear Method, verbatim.)* No generic SaaS templates. Every surface — issue list, cycle view, project brief — is shaped by the specific work it supports.
3. **Write issues not user stories.** *(Linear Method, verbatim.)* The "As a user, I want..." frame is banned from the product vocabulary and from Linear's own copy.
4. **Don't invent terms if possible.** *(Linear Method, verbatim.)* If a concept can use an existing word, use it. Proprietary jargon is a tax on every new user.
5. **Cycles over sprints.** *(Linear Method.)* Sprints are running — frantic, short-term. Cycles are rhythms — sustainable, repeated. Word choice is design.
6. **Craft is the product.** Linear's public README critiques the industry for replacing craft with growth hacks. The visible craft — exact letter-spacing, semi-transparent borders at 0.05 opacity, weight 510 as signature — is that critique made concrete.
7. **Ambitious goals are the only way to make a significant impact.** *(Linear Method, verbatim.)* Every project has a named owner and a specific brief. Vague roadmaps do not exist.
8. **Opinions are the feature.** Linear publishes opinions (The Method, the README) before the product converts anyone. Customers self-select for alignment; they are not sold.
9. **Darkness is the canvas, not a theme.** The near-black background is native to the product, not a dark-mode toggle. Light mode exists but is secondary. Chromatic restraint (single indigo-violet accent) is the same discipline.
10. **Designers and engineers work together.** *(Linear Method, verbatim: "Designers and engineers should work together on projects, creating a natural push and pull.")* The design system's precision and the product's UX cohesion both come from this pairing — no handoff artifacts, no siloed "design review".

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Linear user segments (software engineers, product designers, engineering managers, early-stage founders), not individual people.*

**Lena Hoffmann, 32, Berlin.** Staff engineer at a Series-B SaaS startup. Uses Linear as her primary work surface — issues, cycles, documents — and refuses to switch to anything that requires more than one keystroke to capture a thought. Reads The Linear Method periodically to see how the team thinks. Has opinions about the exact width of the sidebar (a few pixels too narrow for her taste). Would not use Jira if she were paid to.

**Juan Pablo Reyes, 28, Buenos Aires.** Product designer at a fintech startup. Uses Linear's issue list the way a composer uses a score — he can read the state of a project in five seconds from the shape of the list alone. Appreciates that cards do not have decorative illustrations or progress bars; the data is the design. Finds Linear's keyboard shortcuts addictive to the point of being slightly annoying when he uses other tools.

**Mei-Ling Chen, 45, Taipei.** Engineering manager with 12 engineers reporting to her. Runs biweekly cycles. Relies on the cycle view to see slip without having to ask anyone. Values that Linear publishes its method publicly — she uses the Method as training material for new hires instead of writing her own playbook.

**Matias Lahti, 26, Helsinki.** Founding engineer at a stealth startup. Introduced Linear to his co-founders on day one because he views project-management tool choice as culture-setting. Reads Linear's "Now" release notes as a weekly ritual. Views Linear's pricing page the way he views a well-designed terminal prompt — functional, opinionated, correctly small.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no issues)** | Near-black (`#08090a`) canvas. Single Primary Text line at 18px Inter Variable 510: "No issues yet." One ghost button "Create first issue". No illustration. No decorative progress bars. |
| **Empty (filter with zero results)** | Tertiary Text (`#8a8f98`) caption: "No issues match this filter." Active filter chip visible above. Reset filter link in Accent Violet (`#7170ff`). |
| **Loading (first paint)** | Skeleton bars at exact list-row heights using `rgba(255,255,255,0.03)` — one luminance step *below* the actual row background, so content paints in as a step-up rather than a step-down. 1.2s shimmer in cool gray. No spinners. |
| **Loading (real-time sync)** | Nothing. Linear's sync is assumed; if it breaks, the offline banner surfaces instead. Persistent sync spinners would violate the "tool works for you" principle. |
| **Error (offline / sync failed)** | Top banner at `rgba(255,255,255,0.05)` with Primary Text + an Accent Violet reconnect link. One sentence. Technical and honest ("Sync paused — will reconnect automatically"). |
| **Error (command palette action failed)** | Inline below the command input. Muted red at 510 weight — Linear's palette does not include a vibrant error red, so the error tone stays in the cool, restrained register. |
| **Error (form validation)** | Field-level. 13px caption below the field in muted red (`~#c45858` equivalent), describes what is invalid and what would be valid. No icon, no banner. |
| **Success (issue created)** | Issue appears at the top of the list with a 300ms fade from 0 opacity. No toast. The issue's presence is the confirmation. |
| **Success (cycle completed)** | Cycle chip transitions to Success Green (`#10b981`) with 510 weight label. One-time transition, no celebratory effects, no confetti. |
| **Skeleton** | Semi-transparent white (`rgba(255,255,255,0.03)` → `0.05` shimmer) blocks at exact list-row dimensions. Never cool blue or purple — stays in the achromatic palette. |
| **Disabled** | Opacity drops on both text and border together. Disabled buttons keep their 6px radius; geometry stable if re-enabled. |
| **Keyboard focus ring** | Multi-layer shadow stack (Depth Level "Focus" from §6). Visible but not loud — matches the "subtle structure" philosophy. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Selection, toggle, keyboard shortcut commits |
| `motion-fast` | 100ms | Hover, focus, button press — deliberately the fastest across the reference set |
| `motion-standard` | 180ms | Sheet, modal, dropdown, command palette |
| `motion-slow` | 280ms | Rare — hero reveals on marketing surfaces only |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — sheets, command palette, dropdowns |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions, hover states |

**Explicitly forbidden.** No spring. No bounce. No overshoot. Linear does not use a `cubic-bezier` with a middle control value above `1.0` anywhere. Motion is a precision instrument, not a delight vehicle. A bouncing button in Linear would undermine the entire craft argument.

**Signature motions.**

1. **Command palette (⌘K).** The palette opens at `motion-fast` with `ease-enter` — 100ms is deliberately fast enough to feel like the UI responds at the speed of thought. A slower open would break the keyboard-first promise.
2. **Issue row fade-in.** New issues appearing at the top of a list fade from 0 to 1 over `motion-standard`. No slide, no scale. The issue either exists or it doesn't — the transition is the smallest necessary proof that something changed.
3. **Cycle completion.** When a cycle completes, the cycle header chip transitions color from Accent Violet to Success Green over `motion-slow` with `ease-standard`. One time, no repeat. This is the one place Linear's UI "celebrates" — and it celebrates by changing a color token, not by animating confetti.
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant`. Fade-ins become instant appearances. The app stays fully functional; the keyboard-first workflow gets no worse.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Direct verification via WebFetch (2026-04-19):
- https://linear.app/method — confirms the existence of "The Linear Method" as
  a public philosophy document. Opening statement verbatim:
    "There is a lost art of building true quality software. To bring back
     the right focus, here are the foundational ideas Linear is built on."
  Includes explicit practice "Write issues not user stories" (rejecting the
  user-story frame).
- https://linear.app/method/introduction — confirms the following verbatim
  principles used directly in §10 and §12:
    "Software project management tools should build with the end users –
     the creators – in mind."
    "Productivity software needs to be designed for purpose."
    "A tool should work for you, not the other way around."
    "Don't invent terms if possible, as these can confuse and have different
     meanings in different teams."
    "Ambitious goals are the only way to make a significant impact."
    "Cycles create a healthy routine and focus teams on what needs to happen
     next."
    "2-week cycles are the most common in software building."
    "Designers and engineers should work together on projects, creating a
     natural push and pull."
- https://linear.app/readme — confirms the following verbatim statements used
  directly in §10 and §11:
    "This is not a manifesto. This is not a codex, not a whitepaper, and
     not a secret master plan. This is just a simple story."
    "Our mission is to create the tool for the story at hand. A tool that
     feels magical..."
    "Craftsmanship was replaced with growth hacks...Our once so lively
     dreams have become positively lifeless."
    "We chose to name it Linear to signify progress."

Base DESIGN.md (sections 1–9) is the source for all token-level claims
(near-black backgrounds #08090a/#0f1011/#191a1b, Inter Variable with "cv01"/
"ss03", weight 510 as the signature, semi-transparent white borders
at 0.05–0.08 alpha, brand indigo #5e6ad2/#7170ff, Berkeley Mono for code).

Not independently verified via WebFetch — widely documented public facts used:
- Linear was founded in 2019 by Karri Saarinen, Tuomas Artman, and Jori Lallo.
- Karri's prior roles at companies including Airbnb and Coinbase are widely
  reported in tech press and in founder interviews.

Personas (§13) are fictional archetypes informed by publicly observable
Linear user segments (software engineers, product designers, engineering
managers, early-stage founders). Names are illustrative; they do not refer
to real people.

Interpretive claims (e.g., "Cycles over sprints — word choice is design",
"Darkness is the canvas, not a theme") are editorial readings connecting
Linear's stated principles to the design system, not directly sourced
Linear statements.
-->

