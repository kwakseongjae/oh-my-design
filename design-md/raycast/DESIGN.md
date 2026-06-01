---
id: raycast
name: Raycast
country: US
category: developer-tools
homepage: "https://www.raycast.com"
primary_color: "#ff6363"
logo:
  type: simpleicons
  slug: raycast
verified: "2026-05-15"
omd: "0.1"
ds:
  name: Raycast Brand
  url: "https://www.raycast.com/templates/brand-guidelines"
  type: brand
  description: Raycast's brand guidelines with colors, logos, and asset kit.
---

# Design System Inspiration of Raycast

## 1. Visual Theme & Atmosphere

Raycast's marketing site feels like the dark interior of a precision instrument — a Swiss watch case carved from obsidian. The background isn't just dark, it's an almost-black blue-tint (`#07080a`) that creates a sense of being inside a macOS native application rather than a website. Every surface, every border, every shadow is calibrated to evoke the feeling of a high-performance desktop utility: fast, minimal, trustworthy.

The signature move is the layered shadow system borrowed from macOS window chrome: multi-layer box-shadows with inset highlights that simulate physical depth, as if cards and buttons are actual pressed or raised glass elements on a dark desk. Combined with Raycast Red (`#FF6363`) — deployed almost exclusively in the hero's iconic diagonal stripe pattern — the palette creates a brand that reads as "powerful tool with personality." The red doesn't dominate; it punctuates.

Inter is used everywhere — headings, body, buttons, captions — with extensive OpenType features (`calt`, `kern`, `liga`, `ss03`) creating a consistent, readable typographic voice. The positive letter-spacing (0.2px–0.4px on body text) is unusual for a dark UI and gives the text an airy, breathable quality that counterbalances the dense, dark surfaces. GeistMono appears for code elements, reinforcing the developer-tool identity.

**Key Characteristics:**
- Near-black blue-tinted background (`#07080a`) — not pure black, subtly blue-shifted
- macOS-native shadow system with multi-layer inset highlights simulating physical depth
- Raycast Red (`#FF6363`) as a punctuation color — hero stripes, not pervasive
- Inter with positive letter-spacing (0.2px) for an airy, readable dark-mode experience
- Radix UI component primitives powering the interaction layer
- Subtle rgba white borders (0.06–0.1 opacity) for containment on dark surfaces
- Keyboard shortcut styling with gradient key caps and heavy shadows

## 2. Color Palette & Roles

### Primary
- **Near-Black Blue** (`#07080a`): Primary page background — the foundational void with a subtle blue-cold undertone
- **Pure White** (`#ffffff`): Primary heading text, high-emphasis elements
- **Raycast Red** (`#FF6363` / `hsl(0, 100%, 69%)`): Brand accent — hero stripes, danger states, critical highlights

### Secondary & Accent
- **Raycast Blue** (`hsl(202, 100%, 67%)` / ~`#55b3ff`): Interactive accent — links, focus states, selected items
- **Raycast Green** (`hsl(151, 59%, 59%)` / ~`#5fc992`): Success states, positive indicators
- **Raycast Yellow** (`hsl(43, 100%, 60%)` / ~`#ffbc33`): Warning accents, highlights
- **Blue Transparent** (`hsla(202, 100%, 67%, 0.15)`): Blue tint overlay for interactive surfaces
- **Red Transparent** (`hsla(0, 100%, 69%, 0.15)`): Red tint overlay for danger/error surfaces

### Surface & Background
- **Deep Background** (`#07080a`): Page canvas, the darkest surface
- **Surface 100** (`#101111`): Elevated surface, card backgrounds
- **Key Start** (`#121212`): Keyboard key gradient start
- **Key End** (`#0d0d0d`): Keyboard key gradient end
- **Card Surface** (`#1b1c1e`): Badge backgrounds, tag fills, elevated containers
- **Button Foreground** (`#18191a`): Dark surface for button text on light backgrounds

### Neutrals & Text
- **Near White** (`#f9f9f9` / `hsl(240, 11%, 96%)`): Primary body text, high-emphasis content
- **Light Gray** (`#cecece` / `#cdcdce`): Secondary body text, descriptions
- **Silver** (`#c0c0c0`): Tertiary text, subdued labels
- **Medium Gray** (`#9c9c9d`): Link default color, secondary navigation
- **Dim Gray** (`#6a6b6c`): Disabled text, low-emphasis labels
- **Dark Gray** (`#434345`): Muted borders, inactive navigation links
- **Border** (`hsl(195, 5%, 15%)` / ~`#252829`): Standard border color for cards and dividers
- **Dark Border** (`#2f3031`): Separator lines, table borders

### Semantic & Accent
- **Error Red** (`hsl(0, 100%, 69%)`): Error states, destructive actions
- **Success Green** (`hsl(151, 59%, 59%)`): Success confirmations, positive states
- **Warning Yellow** (`hsl(43, 100%, 60%)`): Warnings, attention-needed states
- **Info Blue** (`hsl(202, 100%, 67%)`): Informational highlights, links

### Gradient System
- **Keyboard Key Gradient**: Linear gradient from `#121212` (top) to `#0d0d0d` (bottom) — simulates physical key depth
- **Warm Glow**: `rgba(215, 201, 175, 0.05)` radial spread — subtle warm ambient glow behind featured elements

## 3. Typography Rules

### Font Family
- **Primary**: `Inter` — humanist sans-serif, used everywhere. Fallbacks: `Inter Fallback`, system sans-serif
- **System**: `SF Pro Text` — Apple system font for select macOS-native UI elements. Fallbacks: `SF Pro Icons`, `Inter`, `Inter Fallback`
- **Monospace**: `GeistMono` — Vercel's monospace font for code elements. Fallbacks: `ui-monospace`, `SFMono-Regular`, `Roboto Mono`, `Menlo`, `Monaco`
- **OpenType features**: `calt`, `kern`, `liga`, `ss03` enabled globally; `ss02`, `ss08` on display text; `liga` disabled (`"liga" 0`) on hero headings

### Hierarchy

| Role | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|--------|-------------|----------------|-------|
| Display Hero | 64px | 600 | 1.10 | 0px | OpenType: liga 0, ss02, ss08 |
| Section Display | 56px | 400 | 1.17 | 0.2px | OpenType: calt, kern, liga, ss03 |
| Section Heading | 24px | 500 | normal | 0.2px | OpenType: calt, kern, liga, ss03 |
| Card Heading | 22px | 400 | 1.15 | 0px | OpenType: calt, kern, liga, ss03 |
| Sub-heading | 20px | 500 | 1.60 | 0.2px | Relaxed line-height for readability |
| Body Large | 18px | 400 | 1.15 | 0.2px | OpenType: calt, kern, liga, ss03 |
| Body | 16px | 500 | 1.60 | 0.2px | Primary body text, relaxed rhythm |
| Body Tight | 16px | 400 | 1.15 | 0.1px | UI labels, compact contexts |
| Button | 16px | 600 | 1.15 | 0.3px | Semibold, slightly wider tracking |
| Nav Link | 16px | 500 | 1.40 | 0.3px | Links in navigation |
| Caption | 14px | 500 | 1.14 | 0.2px | Small labels, metadata |
| Caption Bold | 14px | 600 | 1.40 | 0px | Emphasized captions |
| Small | 12px | 600 | 1.33 | 0px | Badges, tags, micro-labels |
| Small Link | 12px | 400 | 1.50 | 0.4px | Footer links, fine print |
| Code | 14px (GeistMono) | 500 | 1.60 | 0.3px | Code blocks, technical content |
| Code Small | 12px (GeistMono) | 400 | 1.60 | 0.2px | Inline code, terminal output |

### Principles
- **Positive tracking on dark**: Unlike most dark UIs that use tight or neutral letter-spacing, Raycast applies +0.2px to +0.4px — creating an airy, readable feel that compensates for the dark background
- **Weight 500 as baseline**: Most body text uses medium weight (500), not regular (400) — subtle extra heft improves legibility on dark surfaces
- **Display restraint**: Hero text at 64px/600 is confident but not oversized — Raycast avoids typographic spectacle in favor of functional elegance
- **OpenType everywhere**: `ss03` (stylistic set 3) is enabled globally across Inter, giving the typeface a slightly more geometric, tool-like quality

## 4. Component Stylings

### Buttons

**Primary Pill**
- Background: transparent
- Text: `#ffffff`
- Radius: 86px (pill)
- Padding: 10px 16px
- Shadow: `rgba(255, 255, 255, 0.1) 0px 1px 0px 0px inset`
- Hover: opacity 0.6
- Use: Primary pill button on dark surfaces

**Secondary**
- Background: transparent
- Text: `#ffffff`
- Border: 1px solid `rgba(255, 255, 255, 0.1)`
- Radius: 6px
- Padding: 8px 14px
- Shadow: `rgba(0, 0, 0, 0.03) 0px 7px 3px`
- Hover: opacity 0.6
- Use: Secondary action

**Ghost**
- Background: transparent
- Text: `#6a6b6c`
- Radius: 86px
- Padding: 10px 16px
- Shadow: `rgba(255, 255, 255, 0.1) 0px 1px 0px 0px inset`
- Hover: opacity 0.6, text brightens to `#ffffff`
- Use: Tertiary action — gray text

**CTA Download**
- Background: `hsla(0, 0%, 100%, 0.815)`
- Text: `#18191a`
- Radius: 86px (pill)
- Padding: 10px 16px
- Hover: `hsl(0, 0%, 100%)` (full white)
- Use: Hero "Download" CTA on dark surfaces

### Inputs

**Default**
- Background: `#07080a`
- Text: `#f9f9f9`
- Border: 1px solid `rgba(255, 255, 255, 0.08)`
- Radius: 8px
- Padding: 10px 12px
- Placeholder: `#6a6b6c`
- Focus: border brightens, blue glow `hsla(202, 100%, 67%, 0.15)` ring
- Label: `#9c9c9d` 14px / 500
- Use: Form input on dark theme

### Cards

**Standard**
- Background: `#101111`
- Text: `#ffffff`
- Border: 1px solid `rgba(255, 255, 255, 0.06)`
- Radius: 12px
- Padding: 16px
- Use: Default dark card

**Elevated**
- Background: `#101111`
- Radius: 16px
- Padding: 20px
- Shadow: `rgb(27, 28, 30) 0px 0px 0px 1px, rgb(7, 8, 10) 0px 0px 0px 1px inset`
- Use: Double-ring elevated card

**Feature**
- Background: `#101111`
- Radius: 20px
- Padding: 24px
- Shadow: `rgba(215, 201, 175, 0.05) 0px 0px 20px 5px` (subtle warm glow)
- Use: Hero/feature card with warm glow

### Badges

**Neutral**
- Background: `#1b1c1e`
- Text: `#ffffff`
- Radius: 6px
- Padding: 0px 6px
- Font: 14px / 500
- Use: Categorization badge — compact pill-like treatment

### Keyboard Shortcut Keys
- Key cap: gradient `#121212` → `#0d0d0d`, multi-layer shadow `rgba(0, 0, 0, 0.4) 0px 1.5px 0.5px 2.5px` + inset shadows
- Radius: 4-6px
- Use: Realistic physical key cap rendering for Raycast shortcuts

### Image Treatment
- Product screenshots: macOS window chrome style — rounded corners (12px), deep shadows simulating floating windows
- Full-bleed sections: Dark screenshots blend seamlessly into the dark background
- Hero illustration: Diagonal stripe pattern in Raycast Red — abstract, geometric, brand-defining
- App UI embeds: actual Raycast command palette and extensions — product as content

### Navigation
- Top nav: Dark background blending with page, white text links at 16px weight 500
- Nav links: Gray text (`#9c9c9d`) → white on hover, underline on hover
- CTA: Semi-transparent white pill at nav end
- Mobile: hamburger, dark theme preserved
- Sticky: Fixed at top with subtle border separator

## 5. Layout Principles

### Spacing System
- **Base unit**: 8px
- **Scale**: 1px, 2px, 3px, 4px, 8px, 10px, 12px, 16px, 20px, 24px, 32px, 40px
- **Section padding**: 80px–120px vertical between major sections
- **Card padding**: 16px–32px internal spacing
- **Component gaps**: 8px–16px between related elements

### Grid & Container
- **Max width**: ~1200px container (breakpoint at 1204px), centered
- **Column patterns**: Single-column hero, 2–3 column feature grids, full-width showcase sections
- **App showcase**: Product UI presented in centered window frames

### Whitespace Philosophy
- **Dramatic negative space**: Sections float in vast dark void, creating cinematic pacing between features
- **Dense product, sparse marketing**: The product UI screenshots are information-dense, but the surrounding marketing copy uses minimal text with generous spacing
- **Vertical rhythm**: Consistent 24px–32px gaps between elements within sections

### Border Radius Scale
- **2px–3px**: Micro-elements, code spans, tiny indicators
- **4px–5px**: Keyboard keys, small interactive elements
- **6px**: Buttons, badges, tags — the workhorse radius
- **8px**: Input fields, inline components
- **9px–11px**: Images, medium containers
- **12px**: Standard cards, product screenshots
- **16px**: Large cards, feature sections
- **20px**: Hero cards, prominent containers
- **86px+**: Pill buttons, nav CTAs — full pill shape

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Level 0 (Void) | No shadow, `#07080a` surface | Page background |
| Level 1 (Subtle) | `rgba(0, 0, 0, 0.28) 0px 1.189px 2.377px` | Minimal lift, inline elements |
| Level 2 (Ring) | `rgb(27, 28, 30) 0px 0px 0px 1px` outer + `rgb(7, 8, 10) 0px 0px 0px 1px inset` inner | Card containment, double-ring technique |
| Level 3 (Button) | `rgba(255, 255, 255, 0.05) 0px 1px 0px 0px inset` + `rgba(255, 255, 255, 0.25) 0px 0px 0px 1px` + `rgba(0, 0, 0, 0.2) 0px -1px 0px 0px inset` | macOS-native button press — white highlight top, dark inset bottom |
| Level 4 (Key) | 5-layer shadow stack with inset press effects | Keyboard shortcut key caps — physical 3D appearance |
| Level 5 (Floating) | `rgba(0, 0, 0, 0.5) 0px 0px 0px 2px` + `rgba(255, 255, 255, 0.19) 0px 0px 14px` + insets | Command palette, floating panels — heavy depth with glow |

### Shadow Philosophy
Raycast's shadow system is the most macOS-native on the web. Multi-layer shadows combine:
- **Outer rings** for containment (replacing traditional borders)
- **Inset top highlights** (`rgba(255, 255, 255, 0.05–0.25)`) simulating light source from above
- **Inset bottom darks** (`rgba(0, 0, 0, 0.2)`) simulating shadow underneath
- The effect is physical: elements feel like glass or brushed metal, not flat rectangles

### Decorative Depth
- **Warm glow**: `rgba(215, 201, 175, 0.05) 0px 0px 20px 5px` behind featured elements — a subtle warm aura on the cold dark canvas
- **Blue info glow**: `rgba(0, 153, 255, 0.15)` for interactive state emphasis
- **Red danger glow**: `rgba(255, 99, 99, 0.15)` for error/destructive state emphasis

## 7. Do's and Don'ts

### Do
- Use `#07080a` (not pure black) as the background — the blue-cold tint is essential to the Raycast feel
- Apply positive letter-spacing (+0.2px) on body text — this is deliberately different from most dark UIs
- Use multi-layer shadows with inset highlights for interactive elements — the macOS-native depth is signature
- Keep Raycast Red (`#FF6363`) as punctuation, not pervasive — reserve it for hero moments and error states
- Use `rgba(255, 255, 255, 0.06)` borders for card containment — barely visible, structurally essential
- Apply weight 500 as the body text baseline — medium weight improves dark-mode legibility
- Use pill shapes (86px+ radius) for primary CTAs, rectangular shapes (6px–8px) for secondary actions
- Enable OpenType features `calt`, `kern`, `liga`, `ss03` on all Inter text
- Use opacity transitions (hover: opacity 0.6) for button interactions, not color changes

### Don't
- Use pure black (`#000000`) as the background — the blue tint differentiates Raycast from generic dark themes
- Apply negative letter-spacing on body text — Raycast deliberately uses positive spacing for readability
- Use Raycast Blue as the primary accent for everything — blue is for interactive/info, red is the brand color
- Create single-layer flat shadows — the multi-layer inset system is core to the macOS-native aesthetic
- Use regular weight (400) for body text when 500 is available — the extra weight prevents dark-mode text from feeling thin
- Mix warm and cool borders — stick to the cool gray (`hsl(195, 5%, 15%)`) border palette
- Apply heavy drop shadows without inset companions — shadows always come in pairs (outer + inset)
- Use decorative elements, gradients, or colorful backgrounds — the dark void is the stage, content is the performer

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <600px | Single column, stacked cards, hamburger nav, hero text reduces to ~40px |
| Small Tablet | 600px–768px | 2-column grid begins, nav partially visible |
| Tablet | 768px–1024px | 2–3 column features, nav expanding, screenshots scale |
| Desktop | 1024px–1200px | Full layout, all nav links visible, 64px hero display |
| Large Desktop | >1200px | Max-width container centered, generous side margins |

### Touch Targets
- Pill buttons: 86px radius with 20px padding — well above 44px minimum
- Secondary buttons: 8px padding minimum, but border provides visual target expansion
- Nav links: 16px text with surrounding padding for accessible touch targets

### Collapsing Strategy
- **Navigation**: Full horizontal nav → hamburger at mobile with slide-out menu
- **Hero**: 64px display → 48px → 36px across breakpoints
- **Feature grids**: 3-column → 2-column → single-column stack
- **Product screenshots**: Scale within containers, maintaining macOS window chrome proportions
- **Keyboard shortcut displays**: Simplify or hide on mobile where keyboard shortcuts are irrelevant

### Image Behavior
- Product screenshots scale responsively within fixed-ratio containers
- Hero diagonal stripe pattern scales proportionally
- macOS window chrome rounded corners maintained at all sizes
- No lazy-loading artifacts — images are critical to the product narrative

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary Background: Near-Black Blue (`#07080a`)
- Primary Text: Near White (`#f9f9f9`)
- Brand Accent: Raycast Red (`#FF6363`)
- Interactive Blue: Raycast Blue (`hsl(202, 100%, 67%)` / ~`#55b3ff`)
- Secondary Text: Medium Gray (`#9c9c9d`)
- Card Surface: Surface 100 (`#101111`)
- Border: Dark Border (`hsl(195, 5%, 15%)` / ~`#252829`)

### Example Component Prompts
- "Create a hero section on #07080a background with 64px Inter heading (weight 600, line-height 1.1), near-white text (#f9f9f9), and a semi-transparent white pill CTA button (hsla(0,0%,100%,0.815), 86px radius, dark text #18191a)"
- "Design a feature card with #101111 background, 1px solid rgba(255,255,255,0.06) border, 16px border-radius, double-ring shadow (rgb(27,28,30) 0px 0px 0px 1px outer), 22px Inter heading, and #9c9c9d body text"
- "Build a navigation bar on dark background (#07080a), Inter links at 16px weight 500 in #9c9c9d, hover to white, and a translucent white pill button at the right end"
- "Create a keyboard shortcut display with key caps using gradient background (#121212→#0d0d0d), 5-layer shadow for physical depth, 4px radius, Inter 12px weight 600 text"
- "Design an alert card with #101111 surface, Raycast Red (#FF6363) left border accent, translucent red glow (hsla(0,100%,69%,0.15)), white heading, and #cecece description text"

### Iteration Guide
When refining existing screens generated with this design system:
1. Check the background is `#07080a` not pure black — the blue tint is critical
2. Verify letter-spacing is positive (+0.2px) on body text — negative spacing breaks the Raycast aesthetic
3. Ensure shadows have both outer and inset layers — single-layer shadows look flat and wrong
4. Confirm Inter has OpenType features `calt`, `kern`, `liga`, `ss03` enabled
5. Test that hover states use opacity transitions (0.6) not color swaps — this is a core interaction pattern

## 10. Voice & Tone

Raycast's voice is **prosumer-confident and keyboard-first.** "Your shortcut to everything" — concise, capability-driven, never marketing-fluff. Dark prosumer canvas + warm gradients signal "Mac native, designed for power users."

| Context | Tone |
|---|---|
| CTA | Verb. "Download", "Sign up", "Get started" |
| Marketing | Capability-list. "Spotlight on steroids" framing |
| Documentation | Keyboard-shortcut-heavy, code-block-friendly |
| Error | Specific. "Extension failed to load. Check console for details." |

**Voice samples**
- Tagline: *"Your shortcut to everything"* <!-- verified: raycast.com homepage 2026-05 -->

**Forbidden phrases.** "Revolutionary launcher". Aggressive Spotlight-comparison framing.

## 11. Brand Narrative

Raycast was founded **2020** out of **London** by ex-Facebook engineers **Thomas Paul Mann (CEO)** and **Petr Nikolaev (CTO)** — they **met working at Facebook on the same team**, sharing frustration with the clunky productivity tools they used and a desire to build a better Spotlight ([TechCrunch — Raycast $30M Series B 2024-09](https://techcrunch.com/2024/09/25/raycast-raises-30m-to-bring-its-mac-productivity-app-to-windows-and-ios/), [Ness Labs — Thomas Paul Mann interview](https://nesslabs.com/raycast-featured-tool)). Funding ladder: **first round March 18 2020** (seed) → **$15M Series A (November 2021)** led by **Accel + Coatue** ([TechCrunch — Raycast $15M 2021-11](https://techcrunch.com/2021/11/30/developer-productivity-tools-startup-raycast-raises-15m-from-accel-and-coatue/)) → **$30M / €27M Series B (Sept 25 2024)** to expand from Mac to Windows + iOS ([EU-Startups — Raycast €27M Series B 2024-09](https://www.eu-startups.com/2024/09/london-based-raycast-raises-e27-million-series-b-to-help-ios-and-windows-enhance-productivity/)) → **total $47.8M across 4 rounds from 20 investors** including **Accel, Y Combinator, Atomico** ([Tracxn — Raycast](https://tracxn.com/d/companies/raycast/__VNiI9rqA4HFcosfhPf0QoAIcecG3jJRlMCseC8jQeOw)). Mac-native productivity tool — Spotlight replacement that grew into a platform for extensions. Strong adoption among engineers, designers, and prosumers. Brand voice — keyboard-first, prosumer-aesthetic — reflects the product positioning.

## 12. Principles

1. **Keyboard is the interface.** *UI implication:* every action has a keyboard shortcut documented inline.
2. **Inter with OpenType features.** `calt`, `kern`, `liga`, `ss03`. *UI implication:* don't substitute system fonts.
3. **Hover via opacity, not color swap.** *UI implication:* preserve opacity-transition pattern.
4. **Dark prosumer canvas.** *UI implication:* default to dark theme; light theme as secondary.
5. **Extensions are first-class.** *UI implication:* Store + Extension nav has main-nav placement.

## 13. Personas

*Personas are fictional archetypes informed by Raycast user segments (Mac power users, engineers, prosumer designers), not individual people.*

**Sergey Volkov, 36, Berlin.** Senior engineer, Raycast as Spotlight replacement + AI commands.

**Sofia Park, 31, Seoul.** Product designer with 30+ extensions installed.

**Marcus Webb, 41, San Francisco.** Engineering manager. Raycast Pro subscriber for AI features.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no extensions)** | "Browse the Store" CTA + featured grid |
| **Empty (search)** | "No commands found. Try different keywords." |
| **Loading (extension loading)** | Subtle skeleton with maintained dimensions |
| **Loading (AI command)** | Per-token streaming inline |
| **Error (extension)** | Specific error + reload extension button |
| **Error (auth)** | Specific cause + re-auth flow |
| **Success (executed)** | Implicit; result appears |
| **Success (extension installed)** | Subtle check + immediately available |
| **Skeleton (results)** | Dark-tone placeholders |
| **Disabled (no Pro)** | Upgrade link |
| **Loading (long task)** | Persistent progress |

## 15. Motion & Easing

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Selection |
| `motion-fast` | 150ms | Hover opacity |
| `motion-standard` | 250ms | Modal, panel |

Standard cubic-bezier; minimal bounce. **Hover via opacity 0.6** is signature. `prefers-reduced-motion: reduce` removes hover transitions.

---

**Verified:** 2026-05-08 (omd:migrate run 47 — Apple-tier)
**Tier 1 sources:** raycast.com home + /pro (live DOM via playwright — Primary **`#e6e6e6` Light Gray** + Charcoal `#2f3031` text 8px / 36px / 14px·**500**; banner-pill `#130d0e` Deep Black 1000px / 30px (top promo); newsletter inline 4px variant; dark-canvas Outline `rgba(255,255,255,0.05)` 12px on /pro).
**Tier 2 sources:** styles.refero.design / getdesign.md — no record.
**Tier 2 (Philosophy/founders/funding):** TechCrunch (2021-11 $15M Accel+Coatue + 2024-09 $30M Series B), EU-Startups (€27M Series B), TechFundingNews, Ness Labs (Mann interview), Tracxn ($47.8M total / 20 investors).
**Style ref:** `claude`. **Conflicts unresolved:** none. **Earlier mistake reverted:** prior footer captured nav-link mid-gray (`#9c9c9d`) — canonical Primary is **`#e6e6e6` Light Gray** 8px (the brand-defining download CTA, missed entirely).
