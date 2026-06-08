---
id: mintlify
name: Mintlify
country: US
category: productivity
homepage: "https://mintlify.com"
primary_color: "#0d9373"
logo:
  type: simpleicons
  slug: mintlify
verified: "2026-05-15"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    ink: "#0d0d0d"
    canvas: "#ffffff"
    brand: "#18e299"
    brand-light: "#d4fae8"
    brand-deep: "#0fa76e"
    amber: "#c37d0d"
    blue: "#3772cf"
    error: "#d45656"
    gray-700: "#333333"
    gray-500: "#666666"
    gray-400: "#888888"
    border: "#e5e5e5"
    surface: "#f5f5f5"
    surface-tint: "#fafafa"
  typography:
    family: { sans: "Inter", mono: "Geist Mono" }
    display-hero: { size: 64, weight: 600, lineHeight: 1.15, tracking: -1.28, use: "Hero headlines" }
    section:      { size: 40, weight: 600, lineHeight: 1.10, tracking: -0.8, use: "Feature section titles" }
    subheading:   { size: 24, weight: 500, lineHeight: 1.30, tracking: -0.24, use: "Card headings, sub-sections" }
    card-title:   { size: 20, weight: 600, lineHeight: 1.30, tracking: -0.2, use: "Feature card titles" }
    body-lg:      { size: 18, weight: 400, lineHeight: 1.50, use: "Hero descriptions, intros" }
    body:         { size: 16, weight: 400, lineHeight: 1.50, use: "Standard reading text" }
    body-medium:  { size: 16, weight: 500, lineHeight: 1.50, use: "Navigation, emphasized text" }
    button:       { size: 15, weight: 500, lineHeight: 1.50, use: "Button labels" }
    link:         { size: 14, weight: 500, lineHeight: 1.50, use: "Navigation links, small CTAs" }
    label:        { size: 13, weight: 500, lineHeight: 1.50, tracking: 0.65, use: "Uppercase section labels" }
    mono-code:    { size: 12, weight: 500, lineHeight: 1.50, tracking: 0.6, use: "Uppercase technical labels, Geist Mono" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 8, md: 16, lg: 24, full: 9999 }
  shadow:
    card: "rgba(0,0,0,0.03) 0px 2px 4px"
    button: "rgba(0,0,0,0.06) 0px 1px 2px"
  components:
    button-primary: { type: button, bg: "#0d0d0d", fg: "#ffffff", radius: 9999, padding: "8px 24px", font: "15px/500", use: "Primary CTA Get Started" }
    button-secondary: { type: button, bg: "#ffffff", fg: "#0d0d0d", radius: 9999, padding: "4.5px 12px", font: "15px/500", use: "Secondary action Request Demo" }
    button-nav: { type: button, bg: "transparent", fg: "#0d0d0d", radius: 8, padding: "5px 6px", use: "Navigation items, icon buttons" }
    button-accent: { type: button, bg: "#18e299", fg: "#0d0d0d", radius: 9999, padding: "8px 24px", use: "Special promotional CTAs" }
    card: { type: card, bg: "#ffffff", radius: 16, padding: "24px", use: "Standard card, border-led" }
    card-featured: { type: card, bg: "#ffffff", radius: 24, padding: "32px", use: "Featured card" }
    input: { type: input, bg: "#ffffff", fg: "#0d0d0d", radius: 9999, padding: "0px 12px", use: "Email input, pill matching buttons" }
  components_harvested: true
---

# Design System Inspiration of Mintlify

## 1. Visual Theme & Atmosphere

Mintlify's website is a study in documentation-as-product design — a white, airy, information-rich surface that treats clarity as its highest aesthetic value. The page opens with a luminous white (`#ffffff`) background, near-black (`#0d0d0d`) text, and a signature green brand accent (`#18E299`) that signals freshness and intelligence without dominating the palette. The overall mood is calm, confident, and engineered for legibility — a design system that whispers "we care about your developer experience" in every pixel.

The Inter font family carries the entire typographic load. At display sizes (40–64px), it uses tight negative letter-spacing (-0.8px to -1.28px) and semibold weight (600), creating headlines that feel focused and compressed like well-written documentation headers. Body text at 16–18px with 150% line-height provides generous reading comfort. Geist Mono appears exclusively for code and technical labels — uppercase, tracked-out, small — the voice of the terminal inside the marketing page.

What distinguishes Mintlify from other documentation platforms is its atmospheric gradient hero. A soft, cloud-like green-to-white gradient wash behind the hero content creates a sense of ethereal intelligence — documentation that floats above the noise. Below the hero, the page settles into a disciplined alternation of white sections separated by subtle 5% opacity borders. Cards use generous padding (24px+) with large radii (16px–24px) and whisper-thin borders, creating containers that feel open rather than boxed.

**Key Characteristics:**
- Inter with tight negative tracking at display sizes (-0.8px to -1.28px) — compressed yet readable
- Geist Mono for code labels: uppercase, 12px, tracked-out, the terminal voice
- Brand green (`#18E299`) used sparingly — CTAs, hover states, focus rings, and accent touches
- Atmospheric gradient hero with cloud-like green-white wash
- Ultra-round corners: 16px for containers, 24px for featured cards, full-round (9999px) for buttons and pills
- Subtle 5% opacity borders (`rgba(0,0,0,0.05)`) creating barely-there separation
- 8px base spacing system with generous section padding (48px–96px)
- Clean white canvas — no gray backgrounds, no color sections, depth through borders and whitespace alone

### Do's and Don'ts

- **DO** keep the canvas white (`#ffffff`) and let depth come from 5% opacity borders + whitespace alone. No gray sections.
- **DON'T** introduce filled background sections to break up content — Mintlify's visual rhythm comes from whitespace, not color blocks.
- **DO** use Inter with tight negative tracking (-0.8px to -1.28px) at display sizes for that compressed, "well-engineered docs" feel.
- **DON'T** use loose default tracking on headlines — it reads as generic and undersells the typographic discipline.
- **DO** reserve the brand green `#18E299` for CTAs, hover states, focus rings, and small accent touches only.
- **DON'T** use the green for backgrounds, large surfaces, or decorative gradients — it cheapens the singular-accent strategy.
- **DO** use generous radii: 16px containers, 24px featured cards, 9999px (full pill) buttons. The roundness is intentional.
- **DON'T** mix in sharp 2-4px corners — that aesthetic belongs to commerce or engineering brands, not docs.
- **DO** apply 5% opacity borders (`rgba(0,0,0,0.05)`) for whisper-weight separation between cards and sections.
- **DON'T** use heavy 1px solid borders or visible shadows — they break the "floating, atmospheric" mood.
- **DO** use Geist Mono ONLY for code labels, tracked-out, uppercase, ~12px — the terminal voice should remain a minority.
- **DON'T** use mono fonts for body or UI labels — Inter handles all non-code text.

## 2. Color Palette & Roles

### Primary
- **Near Black** (`#0d0d0d`): Primary text, headings, dark surfaces. Not pure black — the micro-softness improves reading comfort.
- **Pure White** (`#ffffff`): Page background, card surfaces, input backgrounds.
- **Brand Green** (`#18E299`): The signature accent — CTAs, links on hover, focus rings, brand identity.

### Secondary Accents
- **Brand Green Light** (`#d4fae8`): Tinted green surface for badges, hover states, subtle backgrounds.
- **Brand Green Deep** (`#0fa76e`): Darker green for text on light-green badges, hover states on brand elements.
- **Warm Amber** (`#c37d0d`): Warning states, caution badges — `--twoslash-warn-bg`.
- **Soft Blue** (`#3772cf`): Tag backgrounds, informational annotations — `--twoslash-tag-bg`.
- **Error Red** (`#d45656`): Error states, destructive actions — `--twoslash-error-bg`.

### Neutral Scale
- **Gray 900** (`#0d0d0d`): Primary heading text, nav links.
- **Gray 700** (`#333333`): Secondary text, descriptions, body copy.
- **Gray 500** (`#666666`): Tertiary text, muted labels.
- **Gray 400** (`#888888`): Placeholder text, disabled states, code annotations.
- **Gray 200** (`#e5e5e5`): Borders, dividers, card outlines.
- **Gray 100** (`#f5f5f5`): Subtle surface backgrounds, hover states.
- **Gray 50** (`#fafafa`): Near-white surface tint.

### Interactive
- **Link Default** (`#0d0d0d`): Links match text color, relying on underline/context.
- **Link Hover** (`#18E299`): Brand green on hover — `var(--color-brand)`.
- **Focus Ring** (`#18E299`): Brand green focus outline for inputs and interactive elements.

### Surface & Overlay
- **Card Background** (`#ffffff`): White cards on white background, separated by borders.
- **Border Subtle** (`rgba(0,0,0,0.05)`): 5% black opacity borders — the primary separation mechanism.
- **Border Medium** (`rgba(0,0,0,0.08)`): Slightly stronger borders for interactive elements.
- **Input Border Focus** (`var(--color-brand)`): Green ring on focused inputs.

### Shadows & Depth
- **Card Shadow** (`rgba(0,0,0,0.03) 0px 2px 4px`): Barely-there ambient shadow for subtle lift.
- **Button Shadow** (`rgba(0,0,0,0.06) 0px 1px 2px`): Micro-shadow for button depth.
- **No heavy shadows**: Mintlify relies on borders, not shadows, for depth.

## 3. Typography Rules

### Font Family
- **Primary**: `Inter`, with fallback: `Inter Fallback, system-ui, -apple-system, sans-serif`
- **Monospace**: `Geist Mono`, with fallback: `Geist Mono Fallback, ui-monospace, SFMono-Regular, monospace`

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Inter | 64px (4.00rem) | 600 | 1.15 (tight) | -1.28px | Maximum impact, hero headlines |
| Section Heading | Inter | 40px (2.50rem) | 600 | 1.10 (tight) | -0.8px | Feature section titles |
| Sub-heading | Inter | 24px (1.50rem) | 500 | 1.30 (tight) | -0.24px | Card headings, sub-sections |
| Card Title | Inter | 20px (1.25rem) | 600 | 1.30 (tight) | -0.2px | Feature card titles |
| Card Title Light | Inter | 20px (1.25rem) | 500 | 1.30 (tight) | -0.2px | Secondary card headings |
| Body Large | Inter | 18px (1.13rem) | 400 | 1.50 | normal | Hero descriptions, introductions |
| Body | Inter | 16px (1.00rem) | 400 | 1.50 | normal | Standard reading text |
| Body Medium | Inter | 16px (1.00rem) | 500 | 1.50 | normal | Navigation, emphasized text |
| Button | Inter | 15px (0.94rem) | 500 | 1.50 | normal | Button labels |
| Link | Inter | 14px (0.88rem) | 500 | 1.50 | normal | Navigation links, small CTAs |
| Caption | Inter | 14px (0.88rem) | 400–500 | 1.50–1.71 | normal | Metadata, descriptions |
| Label Uppercase | Inter | 13px (0.81rem) | 500 | 1.50 | 0.65px | `text-transform: uppercase`, section labels |
| Small | Inter | 13px (0.81rem) | 400–500 | 1.50 | -0.26px | Small body text |
| Mono Code | Geist Mono | 12px (0.75rem) | 500 | 1.50 | 0.6px | `text-transform: uppercase`, technical labels |
| Mono Badge | Geist Mono | 12px (0.75rem) | 600 | 1.50 | 0.6px | `text-transform: uppercase`, status badges |
| Mono Micro | Geist Mono | 10px (0.63rem) | 500 | 1.50 | normal | `text-transform: uppercase`, tiny labels |

### Principles
- **Tight tracking at display sizes**: Inter at 40–64px uses -0.8px to -1.28px letter-spacing. This compression creates headlines that feel deliberate and space-efficient — documentation headings, not billboard copy.
- **Relaxed reading at body sizes**: 16–18px body text uses normal tracking with 150% line-height, creating generous reading lanes. Documentation demands comfort.
- **Two-font system**: Inter for all human-readable content, Geist Mono exclusively for technical/code contexts. The boundary is strict — no mixing.
- **Uppercase as hierarchy signal**: Section labels and technical tags use uppercase + positive tracking (0.6px–0.65px) as a clear visual delimiter between content types.
- **Three weights**: 400 (body/reading), 500 (UI/navigation/emphasis), 600 (headings/titles). No bold (700) in the system.

## 4. Component Stylings

### Buttons

**Primary Brand (Full-round)**
- Background: `#0d0d0d` (near-black)
- Text: `#ffffff`
- Padding: 8px 24px
- Radius: 9999px (full pill)
- Font: Inter 15px weight 500
- Shadow: `rgba(0,0,0,0.06) 0px 1px 2px`
- Hover: opacity 0.9
- Use: Primary CTA ("Get Started", "Start Building")

**Secondary / Ghost (Full-round)**
- Background: `#ffffff`
- Text: `#0d0d0d`
- Padding: 4.5px 12px
- Radius: 9999px (full pill)
- Border: `1px solid rgba(0,0,0,0.08)`
- Font: Inter 15px weight 500
- Hover: opacity 0.9
- Use: Secondary actions ("Request Demo", "View Docs")

**Transparent / Nav Button**
- Background: transparent
- Text: `#0d0d0d`
- Padding: 5px 6px
- Radius: 8px
- Border: none or `1px solid rgba(0,0,0,0.05)`
- Use: Navigation items, icon buttons

**Brand Accent Button**
- Background: `#18E299`
- Text: `#0d0d0d`
- Padding: 8px 24px
- Radius: 9999px
- Use: Special promotional CTAs

### Cards & Containers

**Standard Card**
- Background: `#ffffff`
- Border: `1px solid rgba(0,0,0,0.05)`
- Radius: 16px
- Padding: 24px
- Shadow: `rgba(0,0,0,0.03) 0px 2px 4px`
- Hover: subtle border darkening to `rgba(0,0,0,0.08)`

**Featured Card**
- Background: `#ffffff`
- Border: `1px solid rgba(0,0,0,0.05)`
- Radius: 24px
- Padding: 32px
- Inner content areas may have their own 16px radius containers

**Logo/Trust Card**
- Background: `#fafafa` or `#ffffff`
- Border: `1px solid rgba(0,0,0,0.05)`
- Radius: 16px
- Centered logo/icon with consistent sizing

### Inputs & Forms

**Email Input**
- Background: transparent or `#ffffff`
- Text: `#0d0d0d`
- Padding: 0px 12px (height controlled by line-height)
- Border: `1px solid rgba(0,0,0,0.08)`
- Radius: 9999px (full pill, matching buttons)
- Focus: `1px solid var(--color-brand)` + `outline: 1px solid var(--color-brand)`
- Placeholder: `#888888`

### Navigation
- Clean horizontal nav on white, sticky with backdrop blur
- Brand logotype left-aligned
- Links: Inter 14–15px weight 500, `#0d0d0d` text
- Hover: color shifts to brand green `var(--color-brand)`
- CTA: dark pill button right-aligned ("Get Started")
- Mobile: hamburger menu collapse at 768px

### Image Treatment
- Product screenshots with subtle 1px borders
- Rounded containers: 16px–24px radius
- Atmospheric gradient backgrounds behind hero images
- Cloud/sky imagery with soft green tinting

### Distinctive Components

**Atmospheric Hero**
- Full-width gradient wash: soft green-to-white cloud-like gradient
- Centered headline with tight tracking
- Subtitle in muted gray
- Dual CTA buttons (dark primary + ghost secondary)
- The gradient creates a sense of elevation and intelligence

**Trust Bar / Logo Grid**
- "Loved by your favorite companies" section
- Company logos in muted grayscale
- Grid or horizontal layout with consistent sizing
- Subtle border separation between logos

**Feature Cards with Icons**
- Icon or illustration at top
- Title at 20px weight 600
- Description at 14–16px in gray
- Consistent padding and border treatment
- Grid layout: 2–3 columns on desktop

**CTA Footer Section**
- Dark or gradient background
- Large headline: "Make documentation your winning advantage"
- Email input with pill styling
- Brand green accent on CTAs

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 2px, 4px, 5px, 6px, 7px, 8px, 10px, 12px, 16px, 24px, 32px, 48px, 64px
- Section padding: 48px–96px vertical
- Card padding: 24px–32px
- Component gaps: 8px–16px

### Grid & Container
- Max content width: approximately 1200px
- Hero: centered single-column with generous top padding (96px+)
- Feature sections: 2–3 column CSS Grid for cards
- Full-width sections with contained content
- Consistent horizontal padding: 24px (mobile) to 32px (desktop)

### Whitespace Philosophy
- **Documentation-grade breathing room**: Every element has generous surrounding whitespace. Mintlify sells documentation, so the marketing page itself demonstrates reading comfort.
- **Sections as chapters**: Each feature section is a self-contained unit with 48px–96px vertical padding, creating clear "chapter breaks."
- **Content density is low**: Unlike developer tools that pack the page, Mintlify uses 1–2 key messages per section with supporting imagery.

### Border Radius Scale
- Small (4px): Inline code, small tags, tooltips
- Medium (8px): Nav buttons, transparent buttons, small containers
- Standard (16px): Cards, content containers, image wrappers
- Large (24px): Featured cards, hero containers, section panels
- Full Pill (9999px): Buttons, inputs, badges, pills — the signature shape

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow, no border | Page background, text blocks |
| Subtle Border (Level 1) | `1px solid rgba(0,0,0,0.05)` | Standard card borders, dividers |
| Medium Border (Level 1b) | `1px solid rgba(0,0,0,0.08)` | Interactive elements, input borders |
| Ambient Shadow (Level 2) | `rgba(0,0,0,0.03) 0px 2px 4px` | Cards with subtle lift |
| Button Shadow (Level 2b) | `rgba(0,0,0,0.06) 0px 1px 2px` | Button micro-depth |
| Focus Ring (Accessibility) | `1px solid #18E299` outline | Focused inputs, active interactive elements |

**Shadow Philosophy**: Mintlify barely uses shadows. The depth system is almost entirely border-driven — ultra-subtle 5% opacity borders create separation without visual weight. When shadows appear, they're atmospheric whispers (`0.03 opacity, 2px blur, 4px spread`) that add the barest sense of lift. This restraint keeps the page feeling flat and paper-like — appropriate for a documentation company whose product is about clarity and readability.

### Decorative Depth
- Hero gradient: atmospheric green-white cloud gradient behind hero content
- No background color alternation — white on white throughout
- Depth comes from border opacity variation (5% → 8%) and whitespace

## 7. Dark Mode

### Color Inversions
- **Background**: `#0d0d0d` (near-black)
- **Text Primary**: `#ededed` (near-white)
- **Text Secondary**: `#a0a0a0` (muted gray)
- **Brand Green**: `#18E299` (unchanged — the green works on both backgrounds)
- **Border**: `rgba(255,255,255,0.08)` (white at 8% opacity)
- **Card Background**: `#141414` (slightly lighter than page)
- **Shadow**: `rgba(0,0,0,0.4) 0px 2px 4px` (stronger shadow for contrast)

### Key Adjustments
- Buttons invert: white background dark text becomes dark background light text
- Badge backgrounds shift to deeper tones with lighter text
- Focus ring remains brand green
- Hero gradient shifts to dark-tinted green atmospheric wash

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <768px | Single column, stacked layout, hamburger nav |
| Tablet | 768–1024px | Two-column grids begin, expanded padding |
| Desktop | >1024px | Full layout, 3-column grids, maximum content width |

### Touch Targets
- Buttons with full-pill shape have comfortable 8px+ vertical padding
- Navigation links spaced with adequate 16px+ gaps
- Mobile menu provides full-width tap targets

### Collapsing Strategy
- Hero: 64px → 40px headline, maintains tight tracking proportionally
- Navigation: horizontal links + CTA → hamburger menu at 768px
- Feature cards: 3-column → 2-column → single column stacked
- Section spacing: 96px → 48px on mobile
- Footer: multi-column → stacked single column
- Trust bar: grid → horizontal scroll or stacked

### Image Behavior
- Product screenshots maintain aspect ratio with responsive containers
- Hero gradient simplifies on mobile
- Full-width sections maintain edge-to-edge treatment

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Near Black (`#0d0d0d`)
- Background: Pure White (`#ffffff`)
- Heading text: Near Black (`#0d0d0d`)
- Body text: Gray 700 (`#333333`)
- Border: `rgba(0,0,0,0.05)` (5% opacity)
- Brand accent: Green (`#18E299`)
- Link hover: Brand Green (`#18E299`)
- Focus ring: Brand Green (`#18E299`)

### Example Component Prompts
- "Create a hero section on white background with atmospheric green-white gradient wash. Headline at 64px Inter weight 600, line-height 1.15, letter-spacing -1.28px, color #0d0d0d. Subtitle at 18px Inter weight 400, line-height 1.50, color #666666. Dark pill CTA (#0d0d0d, 9999px radius, 8px 24px padding) and ghost pill button (white, 1px solid rgba(0,0,0,0.08), 9999px radius)."
- "Design a card: white background, 1px solid rgba(0,0,0,0.05) border, 16px radius, 24px padding, shadow rgba(0,0,0,0.03) 0px 2px 4px. Title at 20px Inter weight 600, letter-spacing -0.2px. Body at 14px weight 400, #666666."
- "Build a pill badge: #d4fae8 background, #0fa76e text, 9999px radius, 4px 12px padding, 13px Inter weight 500, uppercase."
- "Create navigation: white sticky header with backdrop-filter blur(12px). Inter 15px weight 500 for links, #0d0d0d text. Dark pill CTA 'Get Started' right-aligned, 9999px radius. Bottom border: 1px solid rgba(0,0,0,0.05)."
- "Design a trust section showing company logos in muted gray. Grid layout with 16px radius containers, 1px border at 5% opacity. Label above: 'Loved by your favorite companies' at 13px Inter weight 500, uppercase, tracking 0.65px."

### Iteration Guide
1. Always use full-pill radius (9999px) for buttons and inputs — this is Mintlify's signature shape
2. Keep borders at 5% opacity (`rgba(0,0,0,0.05)`) — stronger borders break the airy feeling
3. Letter-spacing scales with font size: -1.28px at 64px, -0.8px at 40px, -0.24px at 24px, normal at 16px
4. Three weights only: 400 (read), 500 (interact), 600 (announce)
5. Brand green (`#18E299`) is used sparingly — CTAs and hover states only, never for decorative fills
6. Geist Mono uppercase for technical labels, Inter for everything else
7. Section padding is generous: 64px–96px on desktop, 48px on mobile
8. No gray background sections — white throughout, separation through borders and whitespace

## 10. Voice & Tone

Mintlify's voice is **documentation-as-product and developer-warm.** "The Intelligent Knowledge Platform" (homepage 2026-05) — positions documentation infrastructure as the brand. Copy is approachable but technical, with strong open-source-aware register.

| Context | Tone |
|---|---|
| CTA | Verb. "Get started", "Sign up free", "Talk to sales" |
| Marketing | Customer-driven. Mintlify-built docs as social proof |
| Documentation | Meta — Mintlify's docs are the product showcase |
| Error | Specific. "Build failed: invalid frontmatter at line 12" |

**Voice samples**
- Tagline: *"The Intelligent Knowledge Platform"* <!-- verified: mintlify.com homepage 2026-05 -->

**Forbidden phrases.** "Revolutionary docs platform". "AI-powered" without specifics.

## 11. Brand Narrative

Mintlify was founded by **Han Wang (CEO)** and **Hahnbee Lee** — Cornell classmates who built the company through **Y Combinator's Winter 2022 (W22)** batch ([Y Combinator — Mintlify](https://www.ycombinator.com/companies/mintlify), [Mintlify blog — Our journey through Y Combinator](https://www.mintlify.com/blog/ycombinator)). Funding ladder: **$2.8M seed (2022)** with Bain Capital Ventures + YC → **$18M Series A (Sept 2024)** led by **Andreessen Horowitz** with Bain Capital Ventures + YC bringing total to ~$21M ([Mintlify blog — Series A](https://www.mintlify.com/blog/series-a), [TechCrunch — Mintlify next-gen docs platform](https://techcrunch.com/2024/09/05/mintlify-is-building-a-next-gen-platform-for-writing-software-docs/)) → continuing rounds bringing **total ~$67M** with **a16z, Salesforce Ventures, Bain Capital Ventures, YC, DST Global** ([Tracxn — Mintlify](https://tracxn.com/d/companies/mintlify/__4H1JwQrPEEjkuME5kKnugS51A3fazz3eCPVzsiIl9gs)). The platform serves **100M+ developers/year and powers documentation for 18,000+ companies** including **Anthropic, Cursor, PayPal, Coinbase**. The brand voice tracks the founder positioning: "documentation is product, not afterthought." Their own docs serve as the marketing site, demonstrating what customers get. Strong adoption among API-first SaaS companies.

## 12. Principles

1. **Documentation is product.** *UI implication:* their own docs ARE the marketing surface.
2. **White throughout, no gray sections.** *UI implication:* separation via borders + whitespace.
3. **Pill nav 9999px.** *UI implication:* primary nav uses fully-pill chrome.
4. **Generous section padding (64-96px desktop).** *UI implication:* never cramp; whitespace is the design.
5. **Mint accent reserved for CTA.** *UI implication:* don't use mint for chrome; only for primary actions.

## 13. Personas

*Personas are fictional archetypes informed by Mintlify user segments (DevRel engineers, technical writers, API documentation owners), not individual people.*

**Sarah Lin, 30, San Francisco.** DevRel engineer at Series B SaaS. Migrated docs to Mintlify; cares about MDX components + AI search.

**Marcus Chen, 38, NYC.** Tech writer at fintech. Owns the public API docs portal. Mintlify integrations with OpenAPI specs.

**Priya Krishnan, 27, Bengaluru.** Indie SaaS founder. Free-tier Mintlify for early-stage product docs.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no docs)** | "Connect your repo" CTA + template gallery |
| **Empty (search)** | "No results. Try different keywords." |
| **Loading (build)** | Inline build progress + log link |
| **Loading (AI search)** | Two-phase: retrieving → answering |
| **Error (build)** | Specific MDX/frontmatter error + line number |
| **Error (deploy)** | Domain verification status |
| **Success (deploy)** | Live URL copy + analytics preview |
| **Success (search match)** | Highlighted snippet + page link |
| **Skeleton (page list)** | White rows with subtle border |
| **Disabled (insufficient plan)** | Upgrade link |
| **Loading (large build)** | Persistent progress with file count |

## 15. Motion & Easing

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle |
| `motion-fast` | 150ms | Hover |
| `motion-standard` | 250ms | Modal, panel |

Standard cubic-bezier; no bounce. `prefers-reduced-motion: reduce` removes hover transitions.

---

**Verified:** 2026-05-08 (omd:migrate run 37 — Apple-tier)
**Tier 1 sources:** mintlify.com home + /pricing (live DOM via playwright — Primary `lab(100 0 0)` White 9999px / 34-40px / 4.5-7×12-24 / 15-16px·500 + Mintlify Near-Black `lab(2.42579 -0.165291 -0.470081)` (`#0a0d10` w/ blue cast) inverse for featured tier; Translucent ghost `lab(100 0 0 / 0.05)`; 60px announcement banner sub-pill. **`lab()` color-space canonical** — joins Cursor + Lovable in modern AI-tooling DS pattern).
**Tier 2 sources:** styles.refero.design / getdesign.md — no record.
**Tier 2 (Philosophy/founders/funding):** Y Combinator (Mintlify W22), LinkedIn (Han Wang, Hahnbee Lee Cornell), Mintlify blog (YC + Series A), TechCrunch (2024-09 a16z $18M), Tracxn ($67M total), AIbase.
**Style ref:** `stripe`. **Conflicts unresolved:** none. **Earlier addition:** Mintlify Near-Black inverse + pricing-hero 40px/7×24 + lab() token convention + 60px banner sub-pill missed by prior pass.
