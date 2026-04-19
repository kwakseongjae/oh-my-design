---
omd: 0.1
brand: Figma
---

# Design System Inspiration of Figma

## 1. Visual Theme & Atmosphere

Figma's interface is the design tool that designed itself — a masterclass in typographic sophistication where a custom variable font (figmaSans) modulates between razor-thin (weight 320) and bold (weight 700) with stops at unusual intermediates (330, 340, 450, 480, 540) that most type systems never explore. This granular weight control gives every text element a precisely calibrated visual weight, creating hierarchy through micro-differences rather than the blunt instrument of "regular vs bold."

The page presents a fascinating duality: the interface chrome is strictly black-and-white (literally only `#000000` and `#ffffff` detected as colors), while the hero section and product showcases explode with vibrant multi-color gradients — electric greens, bright yellows, deep purples, hot pinks. This separation means the design system itself is colorless, treating the product's colorful output as the hero content. Figma's marketing page is essentially a white gallery wall displaying colorful art.

What makes Figma distinctive beyond the variable font is its circle-and-pill geometry. Buttons use 50px radius (pill) or 50% (perfect circle for icon buttons), creating an organic, tool-palette-like feel. The dashed-outline focus indicator (`dashed 2px`) is a deliberate design choice that echoes selection handles in the Figma editor itself — the website's UI language references the product's UI language.

**Key Characteristics:**
- Custom variable font (figmaSans) with unusual weight stops: 320, 330, 340, 450, 480, 540, 700
- Strictly black-and-white interface chrome — color exists only in product content
- figmaMono for uppercase technical labels with wide letter-spacing
- Pill (50px) and circular (50%) button geometry
- Dashed focus outlines echoing Figma's editor selection handles
- Vibrant multi-color hero gradients (green, yellow, purple, pink)
- OpenType `"kern"` feature enabled globally
- Negative letter-spacing throughout — even body text at -0.14px to -0.26px

## 2. Color Palette & Roles

### Primary
- **Pure Black** (`#000000`): All text, all solid buttons, all borders. The sole "color" of the interface.
- **Pure White** (`#ffffff`): All backgrounds, white buttons, text on dark surfaces. The other half of the binary.

*Note: Figma's marketing site uses ONLY these two colors for its interface layer. All vibrant colors appear exclusively in product screenshots, hero gradients, and embedded content.*

### Surface & Background
- **Pure White** (`#ffffff`): Primary page background and card surfaces.
- **Glass Black** (`rgba(0, 0, 0, 0.08)`): Subtle dark overlay for secondary circular buttons and glass effects.
- **Glass White** (`rgba(255, 255, 255, 0.16)`): Frosted glass overlay for buttons on dark/colored surfaces.

### Gradient System
- **Hero Gradient**: A vibrant multi-stop gradient using electric green, bright yellow, deep purple, and hot pink. This gradient is the visual signature of the hero section — it represents the creative possibilities of the tool.
- **Product Section Gradients**: Individual product areas (Design, Dev Mode, Prototyping) may use distinct color themes in their showcases.

### Resolved Surface Tints
The rgba overlays above resolve to these effective hex values when composited on standard backgrounds:
- **Light Border** (`#ebebeb`): `rgba(0, 0, 0, 0.08)` composited on white — subtle separator.
- **Dark Glass** (`#292929`): `rgba(255, 255, 255, 0.16)` composited on black — used inside dark hero sections.
- **Muted Text** (`#374151`): Used for secondary copy in product UI screenshots and footer links.

### Product Accent Colors
These appear in product UI screenshots and hero gradients (NOT in marketing chrome):
- **Figma Plugin Purple** (`#a259ff`): Common product accent in plugin/extension cards.
- **Plot Pink** (`#f24e1e`): Brand-adjacent accent used in select marketing visuals.

## 3. Typography Rules

### Font Family
- **Primary**: `figmaSans`, with fallbacks: `figmaSans Fallback, SF Pro Display, system-ui, helvetica`
- **Monospace / Labels**: `figmaMono`, with fallbacks: `figmaMono Fallback, SF Mono, menlo`

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display / Hero | figmaSans | 86px (5.38rem) | 400 | 1.00 (tight) | -1.72px | Maximum impact, extreme tracking |
| Section Heading | figmaSans | 64px (4rem) | 400 | 1.10 (tight) | -0.96px | Feature section titles |
| Sub-heading | figmaSans | 26px (1.63rem) | 540 | 1.35 | -0.26px | Emphasized section text |
| Sub-heading Light | figmaSans | 26px (1.63rem) | 340 | 1.35 | -0.26px | Light-weight section text |
| Feature Title | figmaSans | 24px (1.5rem) | 700 | 1.45 | normal | Bold card headings |
| Body Large | figmaSans | 20px (1.25rem) | 330–450 | 1.30–1.40 | -0.1px to -0.14px | Descriptions, intros |
| Body / Button | figmaSans | 16px (1rem) | 330–400 | 1.40–1.45 | -0.14px to normal | Standard body, nav, buttons |
| Body Light | figmaSans | 18px (1.13rem) | 320 | 1.45 | -0.26px to normal | Light-weight body text |
| Mono Label | figmaMono | 18px (1.13rem) | 400 | 1.30 (tight) | 0.54px | Uppercase section labels |
| Mono Small | figmaMono | 12px (0.75rem) | 400 | 1.00 (tight) | 0.6px | Uppercase tiny tags |

### Principles
- **Variable font precision**: figmaSans uses weights that most systems never touch — 320, 330, 340, 450, 480, 540. This creates hierarchy through subtle weight differences rather than dramatic jumps. The difference between 330 and 340 is nearly imperceptible but structurally significant.
- **Light as the base**: Most body text uses 320–340 (lighter than typical 400 "regular"), creating an ethereal, airy reading experience that matches the design-tool aesthetic.
- **Kern everywhere**: Every text element enables OpenType `"kern"` feature — kerning is not optional, it's structural.
- **Negative tracking by default**: Even body text uses -0.1px to -0.26px letter-spacing, creating universally tight text. Display text compresses further to -0.96px and -1.72px.
- **Mono for structure**: figmaMono in uppercase with positive letter-spacing (0.54px–0.6px) creates technical signpost labels.

## 4. Component Stylings

### Buttons

**Black Solid (Pill)**
- Background: Pure Black (`#000000`)
- Text: Pure White (`#ffffff`)
- Radius: circle (50%) for icon buttons
- Focus: dashed 2px outline
- Maximum emphasis

**White Pill**
- Background: Pure White (`#ffffff`)
- Text: Pure Black (`#000000`)
- Padding: 8px 18px 10px (asymmetric vertical)
- Radius: pill (50px)
- Focus: dashed 2px outline
- Standard CTA on dark/colored surfaces

**Glass Dark**
- Background: `rgba(0, 0, 0, 0.08)` (subtle dark overlay)
- Text: Pure Black
- Radius: circle (50%)
- Focus: dashed 2px outline
- Secondary action on light surfaces

**Glass Light**
- Background: `rgba(255, 255, 255, 0.16)` (frosted glass)
- Text: Pure White
- Radius: circle (50%)
- Focus: dashed 2px outline
- Secondary action on dark/colored surfaces

### Cards & Containers
- Background: Pure White
- Border: none or minimal
- Radius: 6px (small containers), 8px (images, cards, dialogs)
- Shadow: subtle to medium elevation effects
- Product screenshots as card content

### Navigation
- Clean horizontal nav on white
- Logo: Figma wordmark in black
- Product tabs: pill-shaped (50px) tab navigation
- Links: black text, underline 1px decoration
- CTA: Black pill button
- Hover: text color via CSS variable

### Distinctive Components

**Product Tab Bar**
- Horizontal pill-shaped tabs (50px radius)
- Each tab represents a Figma product area (Design, Dev Mode, Prototyping, etc.)
- Active tab highlighted

**Hero Gradient Section**
- Full-width vibrant multi-color gradient background
- White text overlay with 86px display heading
- Product screenshots floating within the gradient

**Dashed Focus Indicators**
- All interactive elements use `dashed 2px` outline on focus
- References the selection handles in the Figma editor
- A meta-design choice connecting website and product

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 1px, 2px, 4px, 4.5px, 8px, 10px, 12px, 16px, 18px, 24px, 32px, 40px, 46px, 48px, 50px

### Grid & Container
- Max container width: up to 1920px
- Hero: full-width gradient with centered content
- Product sections: alternating showcases
- Footer: dark full-width section
- Responsive from 559px to 1920px

### Whitespace Philosophy
- **Gallery-like pacing**: Generous spacing lets each product section breathe as its own exhibit.
- **Color sections as visual breathing**: The gradient hero and product showcases provide chromatic relief between the monochrome interface sections.

### Border Radius Scale
- Minimal (2px): Small link elements
- Subtle (6px): Small containers, dividers
- Comfortable (8px): Cards, images, dialogs
- Pill (50px): Tab buttons, CTAs
- Circle (50%): Icon buttons, circular elements

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, most text |
| Surface (Level 1) | White card on gradient/dark section | Cards, product showcases |
| Elevated (Level 2) | Subtle shadow | Floating cards, hover states |

**Shadow Philosophy**: Figma uses shadows sparingly. The primary depth mechanisms are **background contrast** (white content on colorful/dark sections) and the inherent dimensionality of the product screenshots themselves.

## 7. Do's and Don'ts

### Do
- Use figmaSans with precise variable weights (320–540) — the granular weight control IS the design
- Keep the interface strictly black-and-white — color comes from product content only
- Use pill (50px) and circular (50%) geometry for all interactive elements
- Apply dashed 2px focus outlines — the signature accessibility pattern
- Enable `"kern"` feature on all text
- Use figmaMono in uppercase with positive letter-spacing for labels
- Apply negative letter-spacing throughout (-0.1px to -1.72px)

### Don't
- Don't add interface colors — the monochrome palette is absolute
- Don't use standard font weights (400, 500, 600, 700) — use the variable font's unique stops (320, 330, 340, 450, 480, 540)
- Don't use sharp corners on buttons — pill and circular geometry only
- Don't use solid focus outlines — dashed is the signature
- Don't increase body font weight above 450 — the light-weight aesthetic is core
- Don't use positive letter-spacing on body text — it's always negative

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Small Mobile | <560px | Compact layout, stacked |
| Tablet | 560–768px | Minor adjustments |
| Small Desktop | 768–960px | 2-column layouts |
| Desktop | 960–1280px | Standard layout |
| Large Desktop | 1280–1440px | Expanded |
| Ultra-wide | 1440–1920px | Maximum width |

### Collapsing Strategy
- Hero text: 86px → 64px → 48px
- Product tabs: horizontal scroll on mobile
- Feature sections: stacked single column
- Footer: multi-column → stacked

## 9. Agent Prompt Guide

### Quick Color Reference
- Everything: "Pure Black (#000000)" and "Pure White (#ffffff)"
- Glass Dark: "rgba(0, 0, 0, 0.08)"
- Glass Light: "rgba(255, 255, 255, 0.16)"

### Example Component Prompts
- "Create a hero on a vibrant multi-color gradient (green, yellow, purple, pink). Headline at 86px figmaSans weight 400, line-height 1.0, letter-spacing -1.72px. White text. White pill CTA button (50px radius, 8px 18px padding)."
- "Design a product tab bar with pill-shaped buttons (50px radius). Active: Black bg, white text. Inactive: transparent, black text. figmaSans at 20px weight 480."
- "Build a section label: figmaMono 18px, uppercase, letter-spacing 0.54px, black text. Kern enabled."
- "Create body text at 20px figmaSans weight 330, line-height 1.40, letter-spacing -0.14px. Pure Black on white."

### Iteration Guide
1. Use variable font weight stops precisely: 320, 330, 340, 450, 480, 540, 700
2. Interface is always black + white — never add colors to chrome
3. Dashed focus outlines, not solid
4. Letter-spacing is always negative on body, always positive on mono labels
5. Pill (50px) for buttons/tabs, circle (50%) for icon buttons

---

## 10. Voice & Tone

Figma's voice is **colloquial-craft** — the register of someone who takes design seriously and refuses to sound like corporate-SaaS while doing it. Marketing headlines are short and aspirational (*"Make anything possible, all in Figma"*), but blog voice allows real colloquialism (*"Chat, are we cooked?"*) that would be unthinkable at Apple or Stripe. The tonal anchor is that Figma speaks *as a designer to designers* — peer-to-peer, not vendor-to-customer. Internal jargon (frames, components, auto-layout, variants) is used without defining, because the audience already knows it.

| Context | Tone |
|---|---|
| Hero headlines | Short, aspirational, peer-voice. "Make anything possible, all in Figma." |
| Product page copy | Feature + payoff. "Ship products, any way you want." Not spec-listy. |
| CTAs | Minimal, present-tense. "Get started", "Watch Config", "Try Figma free". |
| Blog editorial | Colloquial + substantive. Titles like *"The TL;DR on MCP"*, *"Chat, are we cooked?"*, *"Cooking with constraints"*. |
| Product UI strings | Designer vocabulary assumed — "frame", "component", "auto-layout" without gloss. |
| Error messages | Specific and friendly. Problem + action. |
| Community / Config copy | Celebrates user work without sycophancy. |
| Dev Mode / MCP / developer-facing | Slightly more technical; code examples prioritized. |
| Enterprise sales copy | Calmer register but same voice foundation — never shifts into pure B2B-ese. |

**Forbidden phrases.** "Revolutionary", "disrupt", "unleash", "world-class" — the voice is peer, not promotional. "Easy peasy" or "effortless" as self-descriptors — Figma is not easy; it is powerful, and the voice respects that. Stock-SaaS AI hype phrases ("AI-powered transformation"). Generic marketing emoji (🚀 ✨ 💡). Exclamation marks on routine CTAs. Condescending vocabulary for beginners — Figma treats every user as a designer, including ones who are not yet.

## 11. Brand Narrative

Figma was founded in 2012 by **Dylan Field and Evan Wallace**. The founding bet was technical and contrarian: at a time when every serious design tool was a native app (Sketch for Mac, Adobe everything), Field and Wallace decided to build a design tool that ran **in the browser, with real-time multiplayer collaboration**. That required solving WebGL rendering, operational-transform networking for multiplayer, and typesetting — all simultaneously. The tool launched publicly in 2016 after roughly four years of head-down engineering.

Figma's brand has always centered on **design as collaboration** rather than design as solo authorship. The product's original framing was captured in the phrase "design is a team sport"; the current marketing positioning — *"Figma lets you turn big ideas into real products. Brainstorm, design, and build with your team."* — preserves the same thesis through different words. **Config**, Figma's annual conference, is explicitly framed around *"craft, quality, and intention in an AI-powered world"* and functions as a community gathering more than a product-launch event.

What Figma refuses: the Sketch-era framing of design as solo craft, the Adobe-era pricing of tools behind per-seat walls, and the enterprise-SaaS aesthetic of cold dashboards and generic stock photography. What it embraces: **browser-native rendering** as a technical identity, black-and-white chrome that puts colorful user work in the foreground (the product's job is to get out of the way of what designers make in it), colloquial blog voice, Config as a recurring community ritual, and — in the current AI-native era — new sub-products (Dev Mode, FigJam, Slides, Draw, Make, Buzz, Sites, MCP) that all inherit the browser-multiplayer DNA.

## 12. Principles

1. **Design is collaboration, not authorship.** Multi-cursor multiplayer was built into the first public release. Every surface assumes multiple people are present or will be. Features that quietly assume a solo designer (single-user comment threads, lock-by-default edits) are anti-pattern.
2. **The browser is the runtime.** Figma's founding technical bet — WebGL rendering, operational transforms for collab — is not legacy; it is identity. Design decisions that would require a native-only capability are rejected or reworked for the browser.
3. **Colorless chrome, colorful content.** The interface is strictly black-and-white precisely so the user's colorful work can be the hero. Any chromatic decoration on the product UI itself would compete with the user's design output.
4. **Peer voice, not vendor voice.** Figma speaks as a designer to designers. Blog titles use colloquialisms (*"Chat, are we cooked?"*) because peers actually talk that way. Corporate-SaaS copy would break the intimacy of the relationship.
5. **Designer vocabulary is used without gloss.** "Frame", "component", "auto-layout", "variant" — Figma does not explain these in product copy. Assuming the audience's literacy is a form of respect.
6. **Config is a ritual, not a launch vehicle.** The annual conference's stated frame — *"craft, quality, and intention in an AI-powered world"* — describes a community gathering around ideas, not a sales funnel around products.
7. **The product's job is to get out of the way.** Black-and-white chrome, minimal ornament, dashed selection-handle outlines referenced by the marketing site — these are all "the tool should disappear into the work" made visible.
8. **Sub-products inherit DNA.** FigJam, Dev Mode, Slides, Draw, Make, Buzz, Sites, MCP — each new sub-product is browser-native, multiplayer-by-default, and visually continuous with the flagship. Expanding the product family must not fragment the feel.
9. **Craft, quality, and intention.** *(Config 2026 frame, verbatim.)* These three words are the current era's anchor. In an AI-native moment, Figma's defensive posture is to champion intentional craft rather than automated generation.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Figma user segments (product designers, design-system authors, developers using Dev Mode, early-career designers, cross-functional collaborators), not individual people.*

**Maya Johnson, 30, Brooklyn.** Senior product designer at a Series-B SaaS. Lives in Figma — prototyping, design review comments, handoff specs, design-system maintenance. Has opinions about auto-layout edge cases. Reads Figma's blog for the design-culture posts, less for product announcements. Would never use a design tool that required opening a desktop app instead of a browser tab.

**Daniel Chen, 26, Singapore.** Design-system lead at a fintech scale-up. Maintains ~400 components across three themed variants. Relies on Figma variants + modes + libraries as the spine of his company's UI consistency. Notices when component props change behavior across releases. Watches every Config talk related to design-systems practice.

**Saoirse Murphy, 22, Dublin.** Recent graduate in visual communication. Uses Figma Community as her primary learning environment — forks templates, remixes, studies how others structure files. Thinks of Figma less as a tool and more as a public workspace. Discovered her first job via a portfolio shared through Figma Community links.

**Tomás Rivera, 35, Mexico City.** Frontend developer who uses Dev Mode daily to inspect design tokens, export SVGs, and increasingly Figma's MCP server to pipe design decisions into Claude Code and Cursor. Would previously have called himself "not a designer", but the browser-native inspection experience made him fluent in design vocabulary over three years.

## 14. States

| State | Treatment |
|---|---|
| **Empty (new file)** | Black-and-white chrome, vast white canvas. Single black-text hint at top-left: "Start designing." No template picker unless explicitly opened. The empty canvas is the welcome. |
| **Empty (community search, no results)** | Black sans text at 14px: "No results for `<query>`." Community link in black — no accent color, because the chrome is colorless by design. |
| **Empty (dashboard, no files yet)** | Simple typographic hero: "Welcome to Figma." One CTA "New design file". Zero illustration. |
| **Loading (canvas first paint)** | Skeleton frames rendered as white blocks with dashed outlines — echoing Figma's selection-handle visual language. 1.2s shimmer in a lighter white tone. |
| **Loading (community asset fetch)** | Community tile shows designer's handle and file name placeholders while thumbnail fetches. Fades in at `motion-fast`. |
| **Error (sync failed)** | Small indicator at the top — colorless by default, a subtle warm-gray dot that becomes a specific icon on failure. Never blocks the canvas; Figma does not prevent design work because a sync hiccuped. |
| **Error (plugin crash)** | Modal with specific plugin name + error + "Restart plugin" CTA. Plugin errors are isolated; rest of Figma stays responsive. |
| **Error (form validation, account settings)** | Field-level. Thin black outline switches to a black dashed outline (borrowing selection-handle visual). 13px caption below in near-black — no alert red in the chrome. |
| **Success (invite accepted)** | Presence chip animates in at the top of the file with the new user's cursor color. No toast. Multiplayer presence IS the confirmation. |
| **Success (version saved)** | Tiny timestamp update in the file title bar. No celebration; version save is assumed, not announced. |
| **Skeleton** | White blocks at exact final dimensions. Dashed outline preserved on blocks that will have selection-handle behavior when real. Never a colored skeleton — the chrome is colorless. |
| **Disabled** | Opacity on text and border together. Dashed outline remains visible; disabled components keep their selection-echo visual language. |
| **Multiplayer presence (others in file)** | Small colored cursor with designer's initials. Cursor color is the **only chromatic element in the chrome** — deliberately, because *other humans* are the only color the chrome admits. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Selection commit, property value commit |
| `motion-fast` | 120ms | Hover, focus, property panel reveal |
| `motion-standard` | 220ms | Sheet, modal, panel expand |
| `motion-slow` | 380ms | Page transitions on marketing surfaces |
| `motion-cursor` | raw frame rate (no easing) | Multiplayer cursor updates — accuracy beats smoothness |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — sheets, panels, popovers |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Explicitly forbidden.** No spring, no bounce, no overshoot in chrome. Canvas interactions (zoom, pan, object drag) use native-feeling physics, but chrome UI — panels, modals, menus — is always cubic-bezier. A bouncing property panel would feel like a toy, not a tool.

**Signature motions.**

1. **Multiplayer cursor presence.** Other designers' cursors update at raw frame rate with no easing — accurate position matters more than smooth motion. The cursor trail is Figma's single most recognizable motion, and it works *because* it is honest about where the other person actually is.
2. **Property panel reveal.** When a user selects an object on canvas, the Properties panel expands at `motion-fast` with `ease-standard`. Speed matters — this is invoked thousands of times per design session.
3. **Canvas pan / zoom.** Native-feeling physics with momentum and natural deceleration. This is the one place Figma permits physics motion in the chrome, because the canvas IS the work.
4. **Comment-mode transition.** When the user toggles comment mode, the cursor becomes a comment-shaped icon and the chrome shifts subtly over `motion-standard`. One visual cue, not a heavy mode change.
5. **Reduce motion.** Under `prefers-reduced-motion: reduce`, chrome `motion-*` tokens collapse to `motion-instant`. Canvas pan / zoom preserve physics feel (the canvas is content, and removing its physics would make the product unusable). Property panels open instantly. Multiplayer cursors still update at frame rate.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Direct verification via WebFetch (2026-04-19):
- https://www.figma.com/ — confirms current primary positioning verbatim:
    "Make anything possible, all in Figma"
    "Figma lets you turn big ideas into real products. Brainstorm, design,
     and build with your team."
  Additional marketing headlines captured:
    "Bring everyone together with systems that scale"
    "Ship products, any way you want"
    "Prompt, code, and design from first idea to final product"
    "Start with a template. Make just about anything."
  Current product family confirmed: Figma Design, Dev Mode, FigJam, Figma
  Slides, Figma Draw, Figma Buzz (Beta), Figma Sites (Beta), Figma Make,
  MCP (Model Context Protocol).
- https://www.figma.com/blog/ — confirms the colloquial blog voice used as
  a direct source in §10 (colloquial + substantive register). Titles
  captured verbatim:
    "The TL;DR on MCP: Why context matters and how to put it to work"
    "Chat, are we cooked? How language has become the new metric of virality"
    "Hard problems are still hard: A story about the tools that change
     and the work that doesn't"
    "Cooking with constraints: A designer's framework for better AI prompts"
  Config 2026 frame confirmed verbatim:
    "craft, quality, and intention in an AI-powered world"
  MCP integration framing confirmed:
    "Figma's MCP server brings your design decisions into the tools where
     code gets written—so what gets built actually matches what was designed."
- https://www.figma.com/about — visited but returned primarily navigational
  content without substantive founding / mission text; founding details
  below are drawn from widely documented public facts.

Base DESIGN.md (sections 1–9) is the source for all token-level claims
(figmaSans variable font with unusual weight stops, strict black-and-white
chrome, pill 50px / circle 50% radius geometry, dashed focus outlines
echoing canvas selection handles, figmaMono for uppercase technical labels).

Not independently verified via WebFetch — widely documented public facts used:
- Figma was founded in 2012 by Dylan Field and Evan Wallace.
- Figma launched publicly in 2016 after roughly four years of development.
- Evan Wallace departed Figma in 2021; Dylan Field remains CEO.
- Config is Figma's annual conference, held yearly in San Francisco.
- Figma's original technical differentiator was browser-native WebGL
  rendering with real-time multiplayer collaboration via operational
  transforms.
- "Design is a team sport" was an early Figma framing that captured the
  collaborative thesis; current marketing uses "Make anything possible"
  as the primary headline while preserving the same collaborative frame.

Personas (§13) are fictional archetypes informed by publicly observable
Figma user segments (product designers, design-system leads, early-career
designers using Figma Community, developers using Dev Mode / MCP). Names
are illustrative; they do not refer to real people.

Interpretive claims (e.g., "colorless chrome, colorful content" as a
principle; "peer voice, not vendor voice"; "multiplayer cursor presence
IS the most recognizable motion") are editorial readings connecting
Figma's verified marketing voice and product decisions to the design
system, not directly sourced Figma statements.
-->

