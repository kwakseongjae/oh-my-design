---
id: cal
name: Cal.com
country: US
category: productivity
homepage: "https://cal.com"
primary_color: "#111827"
logo:
  type: simpleicons
  slug: caldotcom
verified: "2026-05-15"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-08"
  note: "primary = prose Charcoal #242424 (signature near-black CTA/heading); primary_color frontmatter #111827 is a catalog approximation. Brand is intentionally grayscale — no accent color."
  colors:
    primary: "#242424"
    primary-hover: "#111111"
    brand: "#242424"
    canvas: "#ffffff"
    foreground: "#242424"
    deep-text: "#111111"
    muted: "#898989"
    on-primary: "#ffffff"
    surface-alt: "#f5f5f5"
    link: "#0099ff"
    link-default: "#0000ee"
    black: "#000000"
    focus-ring: "#3b82f6"
  typography:
    family: { sans: "Cal Sans", body: "Inter", mono: "Roboto Mono" }
    display-hero:     { size: 64, weight: 600, lineHeight: 1.10, tracking: 0, use: "Cal Sans hero, maximum impact, tight default spacing" }
    section-heading:  { size: 48, weight: 600, lineHeight: 1.10, tracking: 0, use: "Cal Sans large section titles" }
    feature-heading:  { size: 24, weight: 600, lineHeight: 1.30, tracking: 0, use: "Cal Sans feature block headlines" }
    subheading:       { size: 20, weight: 600, lineHeight: 1.20, tracking: 0.2, use: "Cal Sans sub-head, positive spacing at smaller size" }
    subheading-alt:   { size: 20, weight: 600, lineHeight: 1.50, tracking: 0, use: "Cal Sans relaxed line-height variant" }
    card-title:       { size: 16, weight: 600, lineHeight: 1.10, tracking: 0, use: "Cal Sans smallest usage, card titles" }
    caption-label:    { size: 12, weight: 600, lineHeight: 1.50, tracking: 0, use: "Cal Sans small labels" }
    body-light:       { size: 18, weight: 300, lineHeight: 1.30, tracking: -0.2, use: "Cal Sans UI Light body intro text" }
    body-light-std:   { size: 16, weight: 300, lineHeight: 1.50, tracking: -0.2, use: "Cal Sans UI Light body text" }
    caption-light:    { size: 14, weight: 300, lineHeight: 1.40, tracking: -0.2, use: "Cal Sans UI Light captions and descriptions" }
    ui-label:         { size: 16, weight: 600, lineHeight: 1.00, tracking: 0, use: "Inter UI buttons and nav labels" }
    caption-inter:    { size: 14, weight: 500, lineHeight: 1.14, tracking: 0, use: "Inter small UI text" }
    micro:            { size: 12, weight: 500, lineHeight: 1.00, tracking: 0, use: "Inter smallest text" }
    code:             { size: 14, weight: 600, lineHeight: 1.00, tracking: 0, use: "Roboto Mono code snippets, technical text" }
    body-matter:      { size: 14, weight: 400, lineHeight: 1.14, tracking: 0, use: "Matter Regular alternate body text (product UI)" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 20, xl: 24, xxl: 28, section: 80, section-lg: 96 }
  rounded: { xs: 2, sm: 4, base: 6, md: 8, lg: 12, xl: 16, full: 9999 }
  shadow:
    inset: "rgba(0,0,0,0.16) 0px 1px 1.9px 0px inset"
    soft: "rgba(34,42,53,0.05) 0px 4px 8px"
    ring-soft: "rgba(19,19,22,0.7) 0px 1px 5px -4px, rgba(34,42,53,0.08) 0px 0px 0px 1px, rgba(34,42,53,0.05) 0px 4px 8px 0px"
    inset-highlight: "rgba(255,255,255,0.15) 0px 2px 0px inset"
  components_harvested: true
  components:
    button-primary: { type: button, bg: "#242424", fg: "#ffffff", radius: "8px", padding: "12px 20px", font: "16px / 600", hover: "opacity 0.7", use: "Signature CTA — maximally dark on white" }
    button-ghost: { type: button, bg: "#ffffff", fg: "#242424", radius: "8px", padding: "12px 20px", shadow: "rgba(19,19,22,0.7) 0px 1px 5px -4px, rgba(34,42,53,0.08) 0px 0px 0px 1px, rgba(34,42,53,0.05) 0px 4px 8px 0px", font: "16px / 600", use: "Secondary CTA with shadow-ring border (no CSS border)" }
    button-pill: { type: button, bg: "#242424", fg: "#ffffff", radius: "9999px", padding: "8px 16px", use: "Rounded pill-shaped actions" }
    input: { type: input, bg: "#ffffff", fg: "#242424", border: "1px solid rgb(118,118,118)", radius: "8px", padding: "8px 12px", focus: "--framer-focus-outline", use: "Text input / select" }
    card: { type: card, bg: "#ffffff", radius: "8px", padding: "16px 24px", shadow: "rgba(19,19,22,0.7) 0px 1px 5px -4px, rgba(34,42,53,0.08) 0px 0px 0px 1px, rgba(34,42,53,0.05) 0px 4px 8px 0px", use: "Standard card; ring shadow as border" }
    badge-pill: { type: badge, bg: "#242424", fg: "#ffffff", radius: "9999px", padding: "4px 10px", font: "12px / 600", use: "Pill-shaped badges and tags" }
    badge-default: { type: badge, bg: "#f5f5f5", fg: "#242424", radius: "8px", padding: "4px 8px", font: "12px / 600", use: "Default badge" }
    nav: { type: tab, bg: "white/transparent", fg: "#111111", use: "Sticky top nav, Cal Sans links, dark primary CTA" }
---

# Design System Inspiration of Cal.com

## 1. Visual Theme & Atmosphere

Cal.com's website is a masterclass in monochromatic restraint — a grayscale world where boldness comes not from color but from the sheer confidence of black text on white space. Inspired by Uber's minimal aesthetic, the palette is deliberately stripped of hue: near-black headings (`#242424`), mid-gray secondary text (`#898989`), and pure white surfaces. Color is treated as a foreign substance — when it appears (a rare blue link, a green trust badge), it feels like a controlled accent in an otherwise black-and-white photograph.

Cal Sans, the brand's custom geometric display typeface designed by Mark Davis, is the visual centerpiece. Letters are intentionally spaced extremely close at large sizes, creating dense, architectural headlines that feel like they're carved into the page. At 64px and 48px, Cal Sans headings sit at weight 600 with a tight 1.10 line-height — confident, compressed, and immediately recognizable. For body text, the system switches to Inter, providing "rock-solid" readability that complements Cal Sans's display personality. The typography pairing creates a clear division: Cal Sans speaks, Inter explains.

The elevation system is notably sophisticated for a minimal site — 11 shadow definitions create a nuanced depth hierarchy using multi-layered shadows that combine ring borders (`0px 0px 0px 1px`), soft diffused shadows, and inset highlights. This shadow-first approach to depth (rather than border-first) gives surfaces a subtle three-dimensionality that feels modern and polished. Built on Framer with a border-radius scale from 2px to 9999px (pill), Cal.com balances geometric precision with soft, rounded interactive elements.

**Key Characteristics:**
- Purely grayscale brand palette — no brand colors, boldness through monochrome
- Cal Sans custom geometric display font with extremely tight default letter-spacing
- Multi-layered shadow system (11 definitions) with ring borders + diffused shadows + inset highlights
- Cal Sans for headings, Inter for body — clean typographic division
- Wide border-radius scale from 2px to 9999px (pill) — versatile rounding
- White canvas with near-black (#242424) text — maximum contrast, zero decoration
- Product screenshots as primary visual content — the scheduling UI sells itself
- Built on Framer platform

## 2. Color Palette & Roles

### Primary
- **Charcoal** (`#242424`): Primary heading and button text — Cal.com's signature near-black, warmer than pure black
- **Midnight** (`#111111`): Deepest text/overlay color — used at 50% opacity for subtle overlays
- **White** (`#ffffff`): Primary background and surface — the dominant canvas

### Secondary & Accent
- **Link Blue** (`#0099ff`): In-text links with underline decoration — the only blue in the system, reserved strictly for hyperlinks
- **Focus Ring** (`#3b82f6` at 50% opacity): Keyboard focus indicator — accessibility-only, invisible in normal interaction
- **Default Link** (`#0000ee`): Browser-default link color on some elements — unmodified, signaling openness

### Surface & Background
- **Pure White** (`#ffffff`): Primary page background and card surfaces
- **Light Gray** (approx `#f5f5f5`): Subtle section differentiation — barely visible tint
- **Mid Gray** (`#898989`): Secondary text, descriptions, and muted labels

### Neutrals & Text
- **Charcoal** (`#242424`): Headlines, buttons, primary UI text
- **Midnight** (`#111111`): Deep black for high-contrast links and nav text
- **Mid Gray** (`#898989`): Descriptions, secondary labels, muted content
- **Pure Black** (`#000000`): Certain link text elements
- **Border Gray** (approx `rgba(34, 42, 53, 0.08–0.10)`): Shadow-based borders using ring shadows instead of CSS borders

### Semantic & Accent
- Cal.com is deliberately colorless for brand elements — "a grayscale brand to emphasise on boldness and professionalism"
- Product UI screenshots show color (blues, greens in the scheduling interface), but the marketing site itself stays monochrome
- The philosophy mirrors Uber's approach: let the content carry color, the frame stays neutral

### Gradient System
- No gradients on the marketing site — the design is fully flat and monochrome
- Depth is achieved entirely through shadows, not color transitions

## 3. Typography Rules

### Font Family
- **Display**: `Cal Sans` — custom geometric sans-serif by Mark Davis. Open-source, available on Google Fonts and GitHub. Extremely tight default letter-spacing designed for large headlines. Has 6 character variants (Cc, j, t, u, 0, 1)
- **Body**: `Inter` — "rock-solid" standard body font. Fallback: `Inter Placeholder`
- **UI Light**: `Cal Sans UI Variable Light` — light-weight variant (300) for softer UI text with -0.2px letter-spacing
- **UI Medium**: `Cal Sans UI Medium` — medium-weight variant (500) for emphasized captions
- **Mono**: `Roboto Mono` — for code blocks and technical content
- **Tertiary**: `Matter Regular` / `Matter SemiBold` / `Matter Medium` — additional body fonts for specific contexts

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Cal Sans | 64px | 600 | 1.10 | 0px | Maximum impact, tight default spacing |
| Section Heading | Cal Sans | 48px | 600 | 1.10 | 0px | Large section titles |
| Feature Heading | Cal Sans | 24px | 600 | 1.30 | 0px | Feature block headlines |
| Sub-heading | Cal Sans | 20px | 600 | 1.20 | +0.2px | Positive spacing for readability at smaller size |
| Sub-heading Alt | Cal Sans | 20px | 600 | 1.50 | 0px | Relaxed line-height variant |
| Card Title | Cal Sans | 16px | 600 | 1.10 | 0px | Smallest Cal Sans usage |
| Caption Label | Cal Sans | 12px | 600 | 1.50 | 0px | Small labels in Cal Sans |
| Body Light | Cal Sans UI Light | 18px | 300 | 1.30 | -0.2px | Light-weight body intro text |
| Body Light Standard | Cal Sans UI Light | 16px | 300 | 1.50 | -0.2px | Light-weight body text |
| Caption Light | Cal Sans UI Light | 14px | 300 | 1.40–1.50 | -0.2 to -0.28px | Light captions and descriptions |
| UI Label | Inter | 16px | 600 | 1.00 | 0px | UI buttons and nav labels |
| Caption Inter | Inter | 14px | 500 | 1.14 | 0px | Small UI text |
| Micro | Inter | 12px | 500 | 1.00 | 0px | Smallest Inter text |
| Code | Roboto Mono | 14px | 600 | 1.00 | 0px | Code snippets, technical text |
| Body Matter | Matter Regular | 14px | 400 | 1.14 | 0px | Alternate body text (product UI) |

### Principles
- **Cal Sans at large, Inter at small**: Cal Sans is exclusively for headings and display — never for body text. The system enforces this division strictly
- **Tight by default, space when small**: Cal Sans letters are "intentionally spaced to be extremely close" at large sizes. At 20px and below, positive letter-spacing (+0.2px) must be applied to prevent cramming
- **Weight 300 body variant**: Cal Sans UI Variable Light at 300 weight creates an elegant, airy body text that contrasts with the dense 600-weight headlines
- **Weight 600 dominance**: Nearly all Cal Sans usage is at weight 600 (semi-bold) — the font was designed to perform at this weight
- **Negative tracking on light text**: Cal Sans UI Light uses -0.2px to -0.28px letter-spacing, subtly tightening the already-compact letterforms

## 4. Component Stylings

### Buttons

**Dark Primary**
- Background: `#242424` (or `#1e1f23`)
- Text: `#ffffff`
- Radius: 8px
- Padding: 12px 20px
- Font: 16px / 600 / Inter
- Hover: opacity 0.7
- Use: Signature CTA — maximally dark on white

**White / Ghost**
- Background: `#ffffff`
- Text: `#242424`
- Radius: 8px
- Padding: 12px 20px
- Shadow: `rgba(19, 19, 22, 0.7) 0px 1px 5px -4px, rgba(34, 42, 53, 0.08) 0px 0px 0px 1px, rgba(34, 42, 53, 0.05) 0px 4px 8px 0px`
- Font: 16px / 600 / Inter
- Use: Secondary CTA with shadow-ring border

**Pill**
- Background: `#242424`
- Text: `#ffffff`
- Radius: 9999px
- Padding: 8px 16px
- Use: Rounded pill-shaped actions and badges

**Compact**
- Background: `#242424`
- Text: `#ffffff`
- Radius: 6px
- Padding: 4px 8px
- Font: 14px / 600 / Inter
- Use: Utility actions within product UI

**Inset Highlight**
- Background: `#242424`
- Text: `#ffffff`
- Radius: 8px
- Shadow: `rgba(255, 255, 255, 0.15) 0px 2px 0px inset`
- Use: Subtle inner-top highlight creating a 3D pressed effect

### Inputs

**Select / Dropdown**
- Background: `#ffffff`
- Text: `#000000`
- Border: 1px solid `rgb(118, 118, 118)`
- Radius: 8px
- Padding: 8px 12px
- Focus: `--framer-focus-outline`
- Use: Form select / dropdown

**Text Input**
- Background: `#ffffff`
- Text: `#242424`
- Border: 1px solid `rgb(118, 118, 118)`
- Radius: 8px
- Padding: 8px 12px
- Use: Standard text input (marketing site prioritizes CTAs over complex forms)

### Cards

**Shadow Card**
- Background: `#ffffff`
- Radius: 8px
- Padding: 16px 24px
- Shadow: `rgba(19, 19, 22, 0.7) 0px 1px 5px -4px, rgba(34, 42, 53, 0.08) 0px 0px 0px 1px, rgba(34, 42, 53, 0.05) 0px 4px 8px 0px`
- Use: Standard card; ring shadow acts as shadow-border

**Large Container**
- Background: `#ffffff`
- Radius: 12px
- Padding: 24px
- Use: Larger containers

**Prominent Section**
- Background: `#ffffff`
- Radius: 16px
- Padding: 32px
- Use: Prominent feature sections

### Badges

**Pill Badge**
- Background: `#242424`
- Text: `#ffffff`
- Radius: 9999px
- Padding: 4px 10px
- Font: 12px / 600 / Cal Sans
- Use: Pill-shaped badges and tags

**Default**
- Background: `#f5f5f5`
- Text: `#242424`
- Radius: 8px
- Padding: 4px 8px
- Font: 12px / 600 / Cal Sans
- Use: Inferred from §1-§2 baseline (no explicit DS variant in source).

### Navigation
- **Top nav**: White/transparent background, Cal Sans links at near-black
- **Nav text**: `#111111` (Midnight) for primary links, `#000000` for emphasis
- **CTA button**: Dark Primary in the nav — high contrast call-to-action
- **Mobile**: Collapses to hamburger with simplified navigation
- **Sticky**: Fixed on scroll

### Image Treatment
- **Product screenshots**: Large scheduling UI screenshots — the product is the primary visual
- **Trust logos**: Grayscale company logos in a horizontal trust bar
- **Aspect ratios**: Wide landscape for product UI screenshots
- **No decorative imagery**: No illustrations, photos, or abstract graphics — pure product + typography

## 5. Layout Principles

### Spacing System
- **Base unit**: 8px
- **Scale**: 1px, 2px, 3px, 4px, 6px, 8px, 12px, 16px, 20px, 24px, 28px, 80px, 96px
- **Section padding**: 80px–96px vertical between major sections (generous)
- **Card padding**: 12px–24px internal
- **Component gaps**: 4px–8px between related elements
- **Notable jump**: From 28px to 80px — a deliberate gap emphasizing the section-level spacing tier

### Grid & Container
- **Max width**: ~1200px content container, centered
- **Column patterns**: Full-width hero, centered text blocks, 2-3 column feature grids
- **Feature showcase**: Product screenshots flanked by description text
- **Breakpoints**: 98px, 640px, 768px, 810px, 1024px, 1199px — Framer-generated

### Whitespace Philosophy
- **Lavish section spacing**: 80px–96px between sections creates a breathable, premium feel
- **Product-first content**: Screenshots dominate the visual space — minimal surrounding decoration
- **Centered headlines**: Cal Sans headings centered with generous margins above and below

### Border Radius Scale
- **2px**: Subtle rounding on inline elements
- **4px**: Small UI components
- **6px–7px**: Buttons, small cards, images
- **8px**: Standard interactive elements — buttons, inputs, images
- **12px**: Medium containers — links, larger cards, images
- **16px**: Large section containers
- **29px**: Special rounded elements
- **100px**: Large rounding — nearly circular on small elements
- **1000px**: Very large rounding
- **9999px**: Full pill shape — badges, links

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Level 0 (Flat) | No shadow | Page canvas, basic text containers |
| Level 1 (Inset) | `rgba(0,0,0,0.16) 0px 1px 1.9px 0px inset` | Pressed/recessed elements, input wells |
| Level 2 (Ring + Soft) | `rgba(19,19,22,0.7) 0px 1px 5px -4px, rgba(34,42,53,0.08) 0px 0px 0px 1px, rgba(34,42,53,0.05) 0px 4px 8px` | Cards, containers — the workhorse shadow |
| Level 3 (Ring + Soft Alt) | `rgba(36,36,36,0.7) 0px 1px 5px -4px, rgba(36,36,36,0.05) 0px 4px 8px` | Alt card elevation without ring border |
| Level 4 (Inset Highlight) | `rgba(255,255,255,0.15) 0px 2px 0px inset` or `rgb(255,255,255) 0px 2px 0px inset` | Button inner highlight — 3D pressed effect |
| Level 5 (Soft Only) | `rgba(34,42,53,0.05) 0px 4px 8px` | Subtle ambient shadow |

### Shadow Philosophy
Cal.com's shadow system is the most sophisticated element of the design — 11 shadow definitions using a multi-layered compositing technique:
- **Ring borders**: `0px 0px 0px 1px` shadows act as borders, avoiding CSS `border` entirely. This creates hairline containment without affecting layout
- **Diffused soft shadows**: `0px 4px 8px` at 5% opacity add gentle ambient depth
- **Sharp contact shadows**: `0px 1px 5px -4px` at 70% opacity create tight bottom-edge shadows for grounding
- **Inset highlights**: White inset shadows at the top of buttons create a subtle 3D bevel
- Shadows are composed in comma-separated stacks — each surface gets 2-3 layered shadow definitions working together

### Decorative Depth
- No gradients or glow effects
- All depth comes from the sophisticated shadow compositing system
- The overall effect is subtle but precise — surfaces feel like physical cards sitting on a table

## 7. Do's and Don'ts

### Do
- Use Cal Sans exclusively for headings (24px+) and never for body text — it's a display font with tight default spacing
- Apply positive letter-spacing (+0.2px) when using Cal Sans below 24px — the font cramps at small sizes without it
- Maintain the grayscale palette — boldness comes from contrast, not color
- Use the multi-layered shadow system for card elevation — ring shadow + diffused shadow + contact shadow
- Keep backgrounds pure white — the monochrome philosophy requires a clean canvas
- Use Inter for all body text at weight 300–600 — it's the reliable counterpart to Cal Sans's display personality
- Let product screenshots be the visual content — no illustrations, no decorative graphics
- Apply generous section spacing (80px–96px) — the breathing room is essential to the premium feel

### Don't
- Use Cal Sans for body text or text below 16px — it wasn't designed for extended reading
- Add brand colors — Cal.com is intentionally grayscale, color is reserved for links and UI states only
- Use CSS borders when shadows can achieve the same containment — the ring-shadow technique is the system's approach
- Apply negative letter-spacing to Cal Sans at small sizes — it needs positive spacing (+0.2px) below 24px
- Create heavy, dark shadows — Cal.com's shadows are subtle (5% opacity diffused) with sharp contact edges
- Use illustrations, abstract graphics, or decorative elements — the visual language is typography + product UI only
- Mix Cal Sans weights — the font is designed for weight 600, other weights break the intended character
- Reduce section spacing below 48px — the generous whitespace is core to the premium monochrome aesthetic

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero text ~36px, stacked features, hamburger nav |
| Tablet Small | 640px–768px | 2-column begins for some elements |
| Tablet | 768px–810px | Layout adjustments, fuller grid |
| Tablet Large | 810px–1024px | Multi-column feature grids |
| Desktop | 1024px–1199px | Full layout, expanded navigation |
| Large Desktop | >1199px | Max-width container, centered content |

### Touch Targets
- Buttons: 8px radius with comfortable padding (10px+ vertical)
- Nav links: Dark text with adequate spacing
- Mobile CTAs: Full-width dark buttons for easy thumb access
- Pill badges: 9999px radius creates large, tappable targets

### Collapsing Strategy
- **Navigation**: Full horizontal nav → hamburger on mobile
- **Hero**: 64px Cal Sans display → ~36px on mobile
- **Feature grids**: Multi-column → 2-column → single stacked column
- **Product screenshots**: Scale within containers, maintaining aspect ratios
- **Section spacing**: Reduces from 80px–96px to ~48px on mobile

### Image Behavior
- Product screenshots scale responsively
- Trust logos reflow to multi-row grid on mobile
- No art direction changes — same compositions at all sizes
- Images use 7px–12px border-radius for consistent rounded corners

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary Text: Charcoal (`#242424`)
- Deep Text: Midnight (`#111111`)
- Secondary Text: Mid Gray (`#898989`)
- Background: Pure White (`#ffffff`)
- Link: Link Blue (`#0099ff`)
- CTA Button: Charcoal (`#242424`) bg, white text
- Shadow Border: `rgba(34, 42, 53, 0.08)` ring

### Example Component Prompts
- "Create a hero section with white background, 64px Cal Sans heading at weight 600, line-height 1.10, #242424 text, centered layout with a dark CTA button (#242424, 8px radius, white text)"
- "Design a scheduling card with white background, multi-layered shadow (0px 1px 5px -4px rgba(19,19,22,0.7), 0px 0px 0px 1px rgba(34,42,53,0.08), 0px 4px 8px rgba(34,42,53,0.05)), 12px radius"
- "Build a navigation bar with white background, Inter links at 14px weight 500 in #111111, a dark CTA button (#242424), sticky positioning"
- "Create a trust bar with grayscale company logos, horizontally centered, 16px gap between logos, on white background"
- "Design a feature section with 48px Cal Sans heading (weight 600, #242424), 16px Inter body text (weight 300, #898989, line-height 1.50), and a product screenshot with 12px radius and the card shadow"

### Iteration Guide
When refining existing screens generated with this design system:
1. Verify headings use Cal Sans at weight 600, body uses Inter — never mix them
2. Check that the palette is purely grayscale — if you see brand colors, remove them
3. Ensure card elevation uses the multi-layered shadow stack, not CSS borders
4. Confirm section spacing is generous (80px+) — if sections feel cramped, add more space
5. The overall tone should feel like a clean, professional scheduling tool — monochrome confidence without any decorative flourishes

## 10. Voice & Tone

Cal.com's voice is **engineer-direct and developer-warm.** Marketing copy reads like documentation that happens to be on a marketing page — capability statements, no hype. Open-source-first positioning shapes the register: "the open source Calendly alternative" is the original tagline, and the voice still carries that "we built this because the proprietary one was bad" engineer credibility.

| Context | Tone |
|---|---|
| CTA | Verb-first. "Get started", "Book a demo", "Sign in with Google" |
| Empty (no bookings) | Quiet. "Your bookings will appear here." |
| Error | Specific + actionable. "Calendar permissions revoked. Reconnect Google Calendar." |
| Documentation | Imperative, code-block heavy |
| Marketing | Capability-list, monochrome typography |

**Voice samples**
- Marketing CTA: *"Get started"* <!-- verified: cal.com homepage 2026-05 -->

**Forbidden phrases.** "Revolutionary scheduling", "the future of calendars", emoji in chrome.

## 11. Brand Narrative

Cal.com was founded **January 1, 2021** (initially as **Calendso**) by **Peer Richelsen** and **Bailey Pumfleet** — the latter only **18 years old at founding** ([GetLatka — 18-year-old raises $32M](https://blog.getlatka.com/18-year-old-raises-32m-to-build-opensource-version-of-calendly/), [Cal.com History](https://businessmodelcanvastemplate.com/blogs/brief-history/cal-com-brief-history)) — as the open-source alternative to Calendly. First version launched **April 30, 2021**, rose from **#1 Product of the Day → Week → Month on Product Hunt** ([Product Hunt Stories](https://www.producthunt.com/stories/how-this-open-source-calendly-alternative-rocketed-to-product-of-the-day)). The founding observation: scheduling tools had become essential infrastructure but the dominant player was closed-source. **AGPL-licensed + hosted SaaS.** Funding: **Seed $7.4M** (OSS Capital lead + Chad Hurley/YouTube co-founder + angels), **Series A $25M (May 2022)** (Seven Seven Six lead + Obvious Ventures), **$32M total** ([Startup Intros](https://startupintros.com/orgs/cal-com)). Cal.ai + Cal.et AI-driven scheduling shipped post-Series A.

What Cal.com refuses: lock-in pricing, opaque feature gating, lifestyle marketing imagery.

## 12. Principles

1. **Open by default.** Source, roadmap, pricing — all public. *UI implication:* "View source" / "Roadmap" links in footer.
2. **Calendar over UI.** *UI implication:* booking page = mostly calendar widget, minimal nav.
3. **Embed-first thinking.** *UI implication:* design tokens are CSS variables (overridable by host).
4. **Monochrome confidence.** No accent color at all. *UI implication:* don't introduce a brand accent; calendar widget provides the only color.
5. **Section spacing is the visual rhythm.** *UI implication:* never cramp; whitespace is the design.

## 13. Personas

*Personas are fictional archetypes informed by Cal.com user segments (developers, sales teams, contractors), not individual people.*

**Henrik Sondergaard, 36, Copenhagen.** Engineering manager. Self-hosts Cal.com on team's infra.

**Priya Krishnan, 29, Bengaluru.** Independent consultant. Hosted plan, 4 meeting types.

**Marco Bianchi, 44, Milan.** Sales lead. Embeds Cal.com booking widgets in proposal docs. Cares about Salesforce integration.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no bookings)** | "Your bookings will appear here." Single line, centered, no illustration |
| **Empty (no event types)** | CTA "Create your first event type" + 3 starter templates |
| **Loading (calendar fetching)** | Skeleton calendar grid `#f5f5f5` blocks |
| **Loading (booking submitting)** | CTA inline spinner, button label "Booking..." |
| **Error (no available times)** | "No available times in next 30 days." |
| **Error (timezone)** | Banner top of page. "Times shown in your timezone (Asia/Seoul)" |
| **Success (booked)** | Full-page confirmation with calendar invite preview |
| **Success (rescheduled)** | Same pattern, copy adjusts |
| **Skeleton** | Vertical rows of `#f5f5f5` rectangles, exact dimensions |
| **Disabled (slot)** | 0.3 opacity, cursor-not-allowed, tooltip "Already booked" |
| **Loading (calendar sync)** | Inline chip in nav header |

## 15. Motion & Easing

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Slot select |
| `motion-fast` | 150ms | Hover |
| `motion-standard` | 250ms | Modal, panel |

Standard cubic-bezier; no bounce. `prefers-reduced-motion: reduce` removes calendar grid fade-in.

---

**Verified:** 2026-05-08 (B1 loop)
**Tier 1 sources:** cal.com (live DOM via playwright — Black `#000000` Primary 12px / 8×16 / 39px / 13.92px·500; Cream `#f3f2ed` Secondary)
**Tier 2 sources:** styles.refero.design / getdesign.md — no record.
**Tier 1 (Philosophy):** cal.com homepage; founders Peer Richelsen, Bailey Pumfleet; GitHub roadmap.
**Style ref:** `stripe`. **Conflicts unresolved:** none.
