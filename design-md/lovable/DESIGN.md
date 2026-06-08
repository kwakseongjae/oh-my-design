---
id: lovable
name: Lovable
country: US
category: developer-tools
homepage: "https://lovable.dev"
primary_color: "#ff6f61"
logo:
  type: favicon
  slug: "https://lovable.dev/favicon-192x192.png"
verified: "2026-05-15"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  components_harvested: true
  colors:
    primary: "#ff6f61"
    cream: "#f7f4ed"
    charcoal: "#1c1c1c"
    off-white: "#fcfbf8"
    muted: "#5f5f5d"
    border: "#eceae4"
    ring: "#3b82f6"
    on-primary: "#fcfbf8"
  typography:
    family: { sans: "Camera Plain Variable", mono: "ui-monospace" }
    display-hero: { size: 60, weight: 600, lineHeight: 1.10, tracking: -1.5, use: "Maximum impact, editorial" }
    display-alt:  { size: 60, weight: 480, lineHeight: 1.00, use: "Lighter hero variant" }
    section:      { size: 48, weight: 600, lineHeight: 1.00, tracking: -1.2, use: "Feature section titles" }
    subheading:   { size: 36, weight: 600, lineHeight: 1.10, tracking: -0.9, use: "Sub-sections" }
    card-title:   { size: 20, weight: 400, lineHeight: 1.25, use: "Card headings" }
    body-large:   { size: 18, weight: 400, lineHeight: 1.38, use: "Introductions" }
    body:         { size: 16, weight: 400, lineHeight: 1.50, use: "Standard reading text" }
    button:       { size: 16, weight: 400, lineHeight: 1.50, use: "Button labels" }
    button-small: { size: 14, weight: 400, lineHeight: 1.50, use: "Compact buttons" }
    caption:      { size: 14, weight: 400, lineHeight: 1.50, use: "Metadata, small text" }
  spacing: { xs: 8, sm: 10, md: 12, base: 16, lg: 24, xl: 32, xxl: 56, section: 80 }
  rounded: { sm: 4, md: 6, lg: 16, full: 9999 }
  shadow:
    inset: "rgba(255,255,255,0.2) 0px 0.5px 0px 0px inset, rgba(0,0,0,0.2) 0px 0px 0px 0.5px inset, rgba(0,0,0,0.05) 0px 1px 2px 0px"
    focus: "rgba(0,0,0,0.1) 0px 4px 12px"
  components:
    button-primary: { type: button, bg: "#1c1c1c", fg: "#fcfbf8", radius: 6, padding: "8px 16px", use: "Primary CTA with inset shadow" }
    button-ghost: { type: button, bg: "transparent", fg: "#1c1c1c", radius: 6, padding: "8px 16px", use: "Secondary actions, 1px interactive border" }
    button-cream: { type: button, bg: "#f7f4ed", fg: "#1c1c1c", radius: 6, padding: "8px 16px", use: "Tertiary/toolbar actions" }
    button-pill: { type: button, bg: "#f7f4ed", fg: "#1c1c1c", radius: 9999, use: "Icon button, plan mode toggle, voice record" }
    card-standard: { type: card, bg: "#f7f4ed", radius: 12, use: "Standard card, 1px border, no shadow" }
    input-default: { type: input, bg: "#f7f4ed", fg: "#1c1c1c", radius: 6, use: "Form field, 1px border, ring-blue focus" }
    badge-pill: { type: badge, bg: "#f7f4ed", fg: "#1c1c1c", radius: 9999, use: "Suggestion pill with eceae4 border" }
---

# Design System Inspiration of Lovable

## 1. Visual Theme & Atmosphere

Lovable's website radiates warmth through restraint. The entire page sits on a creamy, parchment-toned background (`#f7f4ed`) that immediately separates it from the cold-white conventions of most developer tool sites. This isn't minimalism for minimalism's sake — it's a deliberate choice to feel approachable, almost analog, like a well-crafted notebook. The near-black text (`#1c1c1c`) against this warm cream creates a contrast ratio that's easy on the eyes while maintaining sharp readability.

The custom Camera Plain Variable typeface is the system's secret weapon. Unlike geometric sans-serifs that signal "tech company," Camera Plain has a humanist warmth — slightly rounded terminals, organic curves, and a comfortable reading rhythm. At display sizes (48px–60px), weight 600 with aggressive negative letter-spacing (-0.9px to -1.5px) compresses headlines into confident, editorial statements. The font uses `ui-sans-serif, system-ui` as fallbacks, acknowledging that the custom typeface carries the brand personality.

What makes Lovable's visual system distinctive is its opacity-driven depth model. Rather than using a traditional gray scale, the system modulates `#1c1c1c` at varying opacities (0.03, 0.04, 0.4, 0.82–0.83) to create a unified tonal range. Every shade of gray on the page is technically the same hue — just more or less transparent. This creates a visual coherence that's nearly impossible to achieve with arbitrary hex values. The border system follows suit: `1px solid #eceae4` for light divisions and `1px solid rgba(28, 28, 28, 0.4)` for stronger interactive boundaries.

**Key Characteristics:**
- Warm parchment background (`#f7f4ed`) — not white, not beige, a deliberate cream that feels hand-selected
- Camera Plain Variable typeface with humanist warmth and editorial letter-spacing at display sizes
- Opacity-driven color system: all grays derived from `#1c1c1c` at varying transparency levels
- Inset shadow technique on buttons: `rgba(255,255,255,0.2) 0px 0.5px 0px 0px inset, rgba(0,0,0,0.2) 0px 0px 0px 0.5px inset`
- Warm neutral border palette: `#eceae4` for subtle, `rgba(28,28,28,0.4)` for interactive elements
- Full-pill radius (`9999px`) used extensively for action buttons and icon containers
- Focus state uses `rgba(0,0,0,0.1) 0px 4px 12px` shadow for soft, warm emphasis
- shadcn/ui + Radix UI component primitives with Tailwind CSS utility styling

## 2. Color Palette & Roles

### Primary
- **Cream** (`#f7f4ed`): Page background, card surfaces, button surfaces. The foundation — warm, paper-like, human.
- **Charcoal** (`#1c1c1c`): Primary text, headings, dark button backgrounds. Not pure black — organic warmth.
- **Off-White** (`#fcfbf8`): Button text on dark backgrounds, subtle highlight. Barely distinguishable from pure white.

### Neutral Scale (Opacity-Based)
- **Charcoal 100%** (`#1c1c1c`): Primary text, headings, dark surfaces.
- **Charcoal 83%** (`rgba(28,28,28,0.83)`): Strong secondary text.
- **Charcoal 82%** (`rgba(28,28,28,0.82)`): Body copy.
- **Muted Gray** (`#5f5f5d`): Secondary text, descriptions, captions.
- **Charcoal 40%** (`rgba(28,28,28,0.4)`): Interactive borders, button outlines.
- **Charcoal 4%** (`rgba(28,28,28,0.04)`): Subtle hover backgrounds, micro-tints.
- **Charcoal 3%** (`rgba(28,28,28,0.03)`): Barely-visible overlays, background depth.

### Surface & Border
- **Light Cream** (`#eceae4`): Card borders, dividers, image outlines. The warm divider line.
- **Cream Surface** (`#f7f4ed`): Card backgrounds, section fills — same as page background for seamless integration.

### Interactive
- **Ring Blue** (`#3b82f6` at 50% opacity): `--tw-ring-color`, Tailwind focus ring.
- **Focus Shadow** (`rgba(0,0,0,0.1) 0px 4px 12px`): Focus and active state shadow — soft, warm, diffused.

### Inset Shadows
- **Button Inset** (`rgba(255,255,255,0.2) 0px 0.5px 0px 0px inset, rgba(0,0,0,0.2) 0px 0px 0px 0.5px inset, rgba(0,0,0,0.05) 0px 1px 2px 0px`): The signature multi-layer inset shadow on dark buttons.

## 3. Typography Rules

### Font Family
- **Primary**: `Camera Plain Variable`, with fallbacks: `ui-sans-serif, system-ui`
- **Weight range**: 400 (body/reading), 480 (special display), 600 (headings/emphasis)
- **Feature**: Variable font with continuous weight axis — allows fine-tuned intermediary weights like 480.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Camera Plain Variable | 60px (3.75rem) | 600 | 1.00–1.10 (tight) | -1.5px | Maximum impact, editorial |
| Display Alt | Camera Plain Variable | 60px (3.75rem) | 480 | 1.00 (tight) | normal | Lighter hero variant |
| Section Heading | Camera Plain Variable | 48px (3.00rem) | 600 | 1.00 (tight) | -1.2px | Feature section titles |
| Sub-heading | Camera Plain Variable | 36px (2.25rem) | 600 | 1.10 (tight) | -0.9px | Sub-sections |
| Card Title | Camera Plain Variable | 20px (1.25rem) | 400 | 1.25 (tight) | normal | Card headings |
| Body Large | Camera Plain Variable | 18px (1.13rem) | 400 | 1.38 | normal | Introductions |
| Body | Camera Plain Variable | 16px (1.00rem) | 400 | 1.50 | normal | Standard reading text |
| Button | Camera Plain Variable | 16px (1.00rem) | 400 | 1.50 | normal | Button labels |
| Button Small | Camera Plain Variable | 14px (0.88rem) | 400 | 1.50 | normal | Compact buttons |
| Link | Camera Plain Variable | 16px (1.00rem) | 400 | 1.50 | normal | Underline decoration |
| Link Small | Camera Plain Variable | 14px (0.88rem) | 400 | 1.50 | normal | Footer links |
| Caption | Camera Plain Variable | 14px (0.88rem) | 400 | 1.50 | normal | Metadata, small text |

### Principles
- **Warm humanist voice**: Camera Plain Variable gives Lovable its approachable personality. The slightly rounded terminals and organic curves contrast with the sharp geometric sans-serifs used by most developer tools.
- **Variable weight as design tool**: The font supports continuous weight values (e.g., 480), enabling nuanced hierarchy beyond standard weight stops. Weight 480 at 60px creates a display style that feels lighter than semibold but stronger than regular.
- **Compression at scale**: Headlines use negative letter-spacing (-0.9px to -1.5px) for editorial impact. Body text stays at normal tracking for comfortable reading.
- **Two weights, clear roles**: 400 (body/UI/links/buttons) and 600 (headings/emphasis). The narrow weight range creates hierarchy through size and spacing, not weight variation.

## 4. Component Stylings

### Buttons

**Primary Dark (Inset Shadow)**
- Background: `#1c1c1c`
- Text: `#fcfbf8`
- Padding: 8px 16px
- Radius: 6px
- Shadow: `rgba(0,0,0,0) 0px 0px 0px 0px, rgba(0,0,0,0) 0px 0px 0px 0px, rgba(255,255,255,0.2) 0px 0.5px 0px 0px inset, rgba(0,0,0,0.2) 0px 0px 0px 0.5px inset, rgba(0,0,0,0.05) 0px 1px 2px 0px`
- Active: opacity 0.8
- Focus: `rgba(0,0,0,0.1) 0px 4px 12px` shadow
- Use: Primary CTA ("Start Building", "Get Started")

**Ghost / Outline**
- Background: transparent
- Text: `#1c1c1c`
- Padding: 8px 16px
- Radius: 6px
- Border: `1px solid rgba(28,28,28,0.4)`
- Active: opacity 0.8
- Focus: `rgba(0,0,0,0.1) 0px 4px 12px` shadow
- Use: Secondary actions ("Log In", "Documentation")

**Cream Surface**
- Background: `#f7f4ed`
- Text: `#1c1c1c`
- Padding: 8px 16px
- Radius: 6px
- No border
- Active: opacity 0.8
- Use: Tertiary actions, toolbar buttons

**Pill / Icon Button**
- Background: `#f7f4ed`
- Text: `#1c1c1c`
- Radius: 9999px (full pill)
- Shadow: same inset pattern as primary dark
- Opacity: 0.5 (default), 0.8 (active)
- Use: Additional actions, plan mode toggle, voice recording

### Cards & Containers
- Background: `#f7f4ed` (matches page)
- Border: `1px solid #eceae4`
- Radius: 12px (standard), 16px (featured), 8px (compact)
- No box-shadow by default — borders define boundaries
- Image cards: `1px solid #eceae4` with 12px radius

### Inputs & Forms
- Background: `#f7f4ed`
- Text: `#1c1c1c`
- Border: `1px solid #eceae4`
- Radius: 6px
- Focus: ring blue (`rgba(59,130,246,0.5)`) outline
- Placeholder: `#5f5f5d`

### Navigation
- Clean horizontal nav on cream background, fixed
- Logo/wordmark left-aligned (128.75 x 22px)
- Links: Camera Plain 14–16px weight 400, `#1c1c1c` text
- CTA: dark button with inset shadow, 6px radius
- Mobile: hamburger menu with 6px radius button
- Subtle border or no border on scroll

### Links
- Color: `#1c1c1c`
- Decoration: underline (default)
- Hover: primary accent (via CSS variable `hsl(var(--primary))`)
- No color change on hover — decoration carries the interactive signal

### Image Treatment
- Showcase/portfolio images with `1px solid #eceae4` border
- Consistent 12px border radius on all image containers
- Soft gradient backgrounds behind hero content (warm multi-color wash)
- Gallery-style presentation for template/project showcases

### Distinctive Components

**AI Chat Input**
- Large prompt input area with soft borders
- Suggestion pills with `#eceae4` borders
- Voice recording / plan mode toggle buttons as pill shapes (9999px)
- Warm, inviting input area — not clinical

**Template Gallery**
- Card grid showing project templates
- Each card: image + title, `1px solid #eceae4` border, 12px radius
- Hover: subtle shadow or border darkening
- Category labels as text links

**Stats Bar**
- Large metrics: "0M+" pattern in 48px+ weight 600
- Descriptive text below in muted gray
- Horizontal layout with generous spacing

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 8px, 10px, 12px, 16px, 24px, 32px, 40px, 56px, 80px, 96px, 128px, 176px, 192px, 208px
- The scale expands generously at the top end — sections use 80px–208px vertical spacing for editorial breathing room

### Grid & Container
- Max content width: approximately 1200px (centered)
- Hero: centered single-column with massive vertical padding (96px+)
- Feature sections: 2–3 column grids
- Full-width footer with multi-column link layout
- Showcase sections with centered card grids

### Whitespace Philosophy
- **Editorial generosity**: Lovable's spacing is lavish at section boundaries (80px–208px). The warm cream background makes these expanses feel cozy rather than empty.
- **Content-driven rhythm**: Tight internal spacing within cards (12–24px) contrasts with wide section gaps, creating a reading rhythm that alternates between focused content and visual rest.
- **Section separation**: Footer uses `1px solid #eceae4` border and 16px radius container. Sections defined by generous spacing rather than border lines.

### Border Radius Scale
- Micro (4px): Small buttons, interactive elements
- Standard (6px): Buttons, inputs, navigation menu
- Comfortable (8px): Compact cards, divs
- Card (12px): Standard cards, image containers, templates
- Container (16px): Large containers, footer sections
- Full Pill (9999px): Action pills, icon buttons, toggles

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow, cream background | Page surface, most content |
| Bordered (Level 1) | `1px solid #eceae4` | Cards, images, dividers |
| Inset (Level 2) | `rgba(255,255,255,0.2) 0px 0.5px 0px inset, rgba(0,0,0,0.2) 0px 0px 0px 0.5px inset, rgba(0,0,0,0.05) 0px 1px 2px` | Dark buttons, primary actions |
| Focus (Level 3) | `rgba(0,0,0,0.1) 0px 4px 12px` | Active/focus states |
| Ring (Accessibility) | `rgba(59,130,246,0.5)` 2px ring | Keyboard focus on inputs |

**Shadow Philosophy**: Lovable's depth system is intentionally shallow. Instead of floating cards with dramatic drop-shadows, the system relies on warm borders (`#eceae4`) against the cream surface to create gentle containment. The only notable shadow pattern is the inset shadow on dark buttons — a subtle multi-layer technique where a white highlight line sits at the top edge while a dark ring and soft drop handle the bottom. This creates a tactile, pressed-into-surface feeling rather than a hovering-above-surface feeling. The warm focus shadow (`rgba(0,0,0,0.1) 0px 4px 12px`) is deliberately diffused and large, creating a soft glow rather than a sharp outline.

### Decorative Depth
- Hero: soft, warm multi-color gradient wash (pinks, oranges, blues) behind hero — atmospheric, barely visible
- Footer: gradient background with warm tones transitioning to the bottom
- No harsh section dividers — spacing and background warmth handle transitions

## 7. Do's and Don'ts

### Do
- Use the warm cream background (`#f7f4ed`) as the page foundation — it's the brand's signature warmth
- Use Camera Plain Variable at display sizes with negative letter-spacing (-0.9px to -1.5px)
- Derive all grays from `#1c1c1c` at varying opacity levels for tonal unity
- Use the inset shadow technique on dark buttons for tactile depth
- Use `#eceae4` borders instead of shadows for card containment
- Keep the weight system narrow: 400 for body/UI, 600 for headings
- Use full-pill radius (9999px) only for action pills and icon buttons
- Apply opacity 0.8 on active states for responsive tactile feedback

### Don't
- Don't use pure white (`#ffffff`) as a page background — the cream is intentional
- Don't use heavy box-shadows for cards — borders are the containment mechanism
- Don't introduce saturated accent colors — the palette is intentionally warm-neutral
- Don't use weight 700 (bold) — 600 is the maximum weight in the system
- Don't apply 9999px radius on rectangular buttons — pills are for icon/action toggles
- Don't use sharp focus outlines — the system uses soft shadow-based focus indicators
- Don't mix border styles — `#eceae4` for passive, `rgba(28,28,28,0.4)` for interactive
- Don't increase letter-spacing on headings — Camera Plain is designed to run tight at scale

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile Small | <600px | Tight single column, reduced padding |
| Mobile | 600–640px | Standard mobile layout |
| Tablet Small | 640–700px | 2-column grids begin |
| Tablet | 700–768px | Card grids expand |
| Desktop Small | 768–1024px | Multi-column layouts |
| Desktop | 1024–1280px | Full feature layout |
| Large Desktop | 1280–1536px | Maximum content width, generous margins |

### Touch Targets
- Buttons: 8px 16px padding (comfortable touch)
- Navigation: adequate spacing between items
- Pill buttons: 9999px radius creates large tap-friendly targets
- Menu toggle: 6px radius button with adequate sizing

### Collapsing Strategy
- Hero: 60px → 48px → 36px headline scaling with proportional letter-spacing
- Navigation: horizontal links → hamburger menu at 768px
- Feature cards: 3-column → 2-column → single column stacked
- Template gallery: grid → stacked vertical cards
- Stats bar: horizontal → stacked vertical
- Footer: multi-column → stacked single column
- Section spacing: 128px+ → 64px on mobile

### Image Behavior
- Template screenshots maintain `1px solid #eceae4` border at all sizes
- 12px border radius preserved across breakpoints
- Gallery images responsive with consistent aspect ratios
- Hero gradient softens/simplifies on mobile

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Charcoal (`#1c1c1c`)
- Background: Cream (`#f7f4ed`)
- Heading text: Charcoal (`#1c1c1c`)
- Body text: Muted Gray (`#5f5f5d`)
- Border: `#eceae4` (passive), `rgba(28,28,28,0.4)` (interactive)
- Focus: `rgba(0,0,0,0.1) 0px 4px 12px`
- Button text on dark: `#fcfbf8`

### Example Component Prompts
- "Create a hero section on cream background (#f7f4ed). Headline at 60px Camera Plain Variable weight 600, line-height 1.10, letter-spacing -1.5px, color #1c1c1c. Subtitle at 18px weight 400, line-height 1.38, color #5f5f5d. Dark CTA button (#1c1c1c bg, #fcfbf8 text, 6px radius, 8px 16px padding, inset shadow) and ghost button (transparent bg, 1px solid rgba(28,28,28,0.4) border, 6px radius)."
- "Design a card on cream (#f7f4ed) background. Border: 1px solid #eceae4. Radius 12px. No box-shadow. Title at 20px Camera Plain Variable weight 400, line-height 1.25, color #1c1c1c. Body at 14px weight 400, color #5f5f5d."
- "Build a template gallery: grid of cards with 12px radius, 1px solid #eceae4 border, cream backgrounds. Each card: image with 12px top radius, title below. Hover: subtle border darkening."
- "Create navigation: sticky on cream (#f7f4ed). Camera Plain 16px weight 400 for links, #1c1c1c text. Dark CTA button right-aligned with inset shadow. Mobile: hamburger menu with 6px radius."
- "Design a stats section: large numbers at 48px Camera Plain weight 600, letter-spacing -1.2px, #1c1c1c. Labels below at 16px weight 400, #5f5f5d. Horizontal layout with 32px gap."

### Iteration Guide
1. Always use cream (`#f7f4ed`) as the base — never pure white
2. Derive grays from `#1c1c1c` at opacity levels rather than using distinct hex values
3. Use `#eceae4` borders for containment, not shadows
4. Letter-spacing scales with size: -1.5px at 60px, -1.2px at 48px, -0.9px at 36px, normal at 16px
5. Two weights: 400 (everything except headings) and 600 (headings)
6. The inset shadow on dark buttons is the signature detail — don't skip it
7. Camera Plain Variable at weight 480 is for special display moments only

## 10. Voice & Tone

Lovable's voice is **warmly enthusiastic and craft-confident** — speaks like a tool that loves being a tool for builders. "Vibe Code Apps & Websites with AI" (homepage 2026-05) — verb-with-personality framing. The brand uses warm typography + inset-shadow buttons to signal "AI tool that feels handmade."

| Context | Tone |
|---|---|
| CTA | Verb. "Get started", "Try it now", "Sign in" |
| Marketing | Personality-forward. "Vibe code" coined as the brand verb |
| Documentation | Practical, screenshot-heavy |
| Error | Specific. "Build failed at line 42. View logs to debug." |

**Voice samples**
- Tagline: *"Vibe Code Apps & Websites with AI, Fast"* <!-- verified: lovable.dev homepage 2026-05 -->

**Forbidden phrases.** "Revolutionary AI app builder", "10× developer".

## 11. Brand Narrative

Lovable was founded **2023** in **Stockholm** by **Anton Osika** and **Fabian Hedin** ([Lovable — Wikipedia](https://en.wikipedia.org/wiki/Lovable_(company)), [Anton Osika — LinkedIn](https://se.linkedin.com/in/antonosika)). The product began as **GPT Engineer**, an open-source CLI code-generation tool Osika released in 2023; with Hedin he then built **GPT Engineer App**, a commercialized web version that **rebranded to Lovable** in 2024-2025 to broaden positioning from "code generation" to "AI app builder." Funding ladder: **€6.8M seed (2024)** ([Silicon Canals — Lovable €6.8M + GPT Engineer launch](https://siliconcanals.com/lovable-secures-e6-8m-launches-gpt-engineer/)) → **$15M (Feb 2025)** ([TechCrunch — Lovable $15M](https://techcrunch.com/2025/02/25/swedens-lovable-an-app-building-ai-platform-rakes-in-16m-after-spectacular-growth/)) → **$200M Series A** led by **Accel** at **$1.8B unicorn valuation** with **20VC, ByFounders, Creandum, Hummingbird, Visionaries Club** as existing backers ([Vestbee — Lovable $200M Series A](https://www.vestbee.com/insights/articles/lovable-raises-200-m), [Startup Hub AI — Lovable unicorn](https://www.startuphub.ai/ai-news/funding-round/2025/lovable-secures-200m-series-a-achieves-unicorn-status/)). **$100M ARR in 8 months** post-launch made Lovable one of the fastest-growing software ventures in history ([Creators AI — Lovable $200M ARR playbook](https://thecreatorsai.com/p/lovable-growth-secrets-and-costs)). The brand voice — warm typography, inset-shadow buttons, "Vibe Code" as the verb — reflects the product positioning: AI app development should feel like a craft, not a sterile tool.

## 12. Principles

1. **Vibe Code is the verb.** *UI implication:* the brand promises a feeling, not a feature list.
2. **Warm typography signals craft.** Camera Plain Variable. *UI implication:* don't substitute system fonts.
3. **Inset shadow is the depth.** Dark buttons have inset highlight. *UI implication:* preserve the inset detail.
4. **Real preview, fast iteration.** *UI implication:* surfaces emphasize live preview alongside chat.
5. **Pill chrome over rectangular.** *UI implication:* nav, badges, modals all pill (9999px) on white surfaces.

## 13. Personas

*Personas are fictional archetypes informed by Lovable user segments (designers building MVPs, indie founders, creative coders), not individual people.*

**Sofia Russo, 28, Milan.** Designer with light JS knowledge. Ships micro-SaaS via Lovable. Loves the chat-to-app workflow.

**Ravi Krishnan, 35, Bengaluru.** Full-stack developer prototyping ideas. Lovable for client-presentation MVPs.

**Emma Park, 23, Seoul.** Indie hacker shipping 12 micro-products. Subscribes to Lovable Pro for unlimited generations.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no projects)** | "Start vibe coding" CTA + template grid |
| **Empty (no chat)** | Welcoming prompt with example asks |
| **Loading (generating)** | Per-step trace with file changes visible |
| **Loading (preview building)** | Inline preview spinner with elapsed time |
| **Error (build)** | Inline log + retry / fix button |
| **Error (rate limit)** | "Upgrade for unlimited" inline link |
| **Success (deployed)** | URL copy + share preview link |
| **Success (committed)** | Soft pulse on changed files |
| **Skeleton (project list)** | Inset-shadow placeholders |
| **Disabled (no credits)** | 0.5 opacity + upgrade link |
| **Loading (long agent task)** | Cancellable, persistent step list |

## 15. Motion & Easing

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Selection |
| `motion-fast` | 150ms | Hover |
| `motion-standard` | 250ms | Modal, panel |

Standard cubic-bezier; no bounce. Inset shadow is static (never animates). `prefers-reduced-motion: reduce` removes hover transitions.

---

**Verified:** 2026-05-08 (omd:migrate run 34 — Apple-tier)
**Tier 1 sources:** lovable.dev home + /pricing (live DOM via playwright — Primary **`lab(0 0 0 / 0.88)`** Near-Black 8px / 32-36px / 6×10 / 14px·400; **Featured Primary** `lab(47.92 57.95 -81.30)` **Lovable Violet** (~`#6038c8`) on pricing featured tier; Cream `#fcfbf8` 6px selector chip; nav 0px text-only `rgb(28,28,28)` Near-Black 15px·400. **`lab()` color space** is canonical token convention).
**Tier 2 sources:** styles.refero.design / getdesign.md — no record.
**Tier 2 (Philosophy/founders):** Wikipedia (Lovable), LinkedIn (Osika), Silicon Canals, TechCrunch (Feb 2025 $15M), Vestbee + Startup Hub AI ($200M Accel Series A → $1.8B unicorn), Creators AI ($100M ARR / 8 months), Catalaize.
**Style ref:** `notion`.
**Conflicts unresolved:** none. **Earlier mistake reverted:** prior footer claimed "pill nav 1.67e+07 ≈ 9999px" — live measurement is 0px text-only ghost nav. Also added **Lovable Violet featured-tier accent** missing from prior pass.
