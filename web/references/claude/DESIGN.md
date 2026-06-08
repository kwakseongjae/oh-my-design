---
id: claude
name: Claude (Anthropic)
country: US
category: ai
homepage: "https://claude.ai"
primary_color: "#cc785c"
logo:
  type: simpleicons
  slug: anthropic
verified: "2026-05-15"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-08"
  components_harvested: true
  note: "primary = Terracotta Brand (#c96442) per primary_color, the only chromatic CTA; entire neutral palette is warm-toned (yellow-brown undertone). Components harvested live (TIER 2) via playwright getComputedStyle across anthropic.com /, /pricing, /news (2026-06-09); claude.ai app shell is JS-gated and not headless-inspectable, so app-surface components are capped to marketing-site evidence. One cool accent observed: the highlighted Max pricing card uses a blue-tinted border + shadow rgba(98,158,218,0.16) 0px 4px 20px."
  colors:
    primary: "#c96442"
    primary-hover: "#d97757"
    brand: "#c96442"
    canvas: "#f5f4ed"
    foreground: "#141413"
    muted: "#87867f"
    on-primary: "#faf9f5"
    surface: "#faf9f5"
    surface-sand: "#e8e6dc"
    surface-dark: "#30302e"
    body: "#5e5d59"
    label: "#4d4c48"
    on-dark: "#b0aea5"
    hairline: "#f0eee6"
    hairline-strong: "#e8e6dc"
    accent-coral: "#d97757"
    error: "#b53333"
    focus: "#3898ec"
    ring: "#d1cfc5"
    foreground-deep: "#0f0f0e"
    muted-strong: "#73726c"
    accent-rose: "#c46686"
  typography:
    family: { sans: "Anthropic Sans", serif: "Anthropic Serif", mono: "Anthropic Mono" }
    display-hero:    { size: 64, weight: 500, lineHeight: 1.10, use: "Hero headlines, book-title presence (serif)" }
    section:         { size: 52, weight: 500, lineHeight: 1.20, use: "Feature section anchors (serif)" }
    subheading-lg:   { size: 36, weight: 500, lineHeight: 1.30, use: "Secondary section markers (serif)" }
    subheading:      { size: 32, weight: 500, lineHeight: 1.10, use: "Card titles, feature names (serif)" }
    subheading-sm:   { size: 25, weight: 500, lineHeight: 1.20, use: "Smaller section titles (serif)" }
    feature-title:   { size: 21, weight: 500, lineHeight: 1.20, use: "Small feature headings (serif)" }
    body-serif:      { size: 17, weight: 400, lineHeight: 1.60, use: "Editorial serif body passages" }
    body-lg:         { size: 20, weight: 400, lineHeight: 1.60, use: "Intro paragraphs (sans)" }
    body-nav:        { size: 17, weight: 400, lineHeight: 1.60, use: "Navigation links, UI text (sans)" }
    body:            { size: 16, weight: 400, lineHeight: 1.60, use: "Standard body, button text (sans)" }
    body-sm:         { size: 15, weight: 400, lineHeight: 1.60, use: "Compact body text (sans)" }
    caption:         { size: 14, weight: 400, lineHeight: 1.43, use: "Metadata, descriptions (sans)" }
    label:           { size: 12, weight: 500, lineHeight: 1.25, tracking: 0.12, use: "Badges, small labels (sans)" }
    overline:        { size: 10, weight: 400, lineHeight: 1.60, tracking: 0.5, use: "Uppercase overline labels (sans)" }
    code:            { size: 15, weight: 400, lineHeight: 1.60, tracking: -0.32, use: "Inline code, terminal (mono)" }
  spacing: { xs: 4, sm: 8, md: 16, base: 16, lg: 24, xl: 32, xxl: 48, section: 80 }
  rounded: { sm: 4, md: 8, lg: 16, xl: 32, full: 9999 }
  shadow:
    whisper: "rgba(0,0,0,0.05) 0px 4px 24px"
    ring: "0px 0px 0px 1px #d1cfc5"
  components:
    button-primary: { type: button, bg: "#c96442", fg: "#faf9f5", radius: "8-12px", shadow: "ring #c96442 0px 0px 0px 1px", use: "Peak brand CTA — the only chromatic button" }
    button-dark-cta: { type: button, bg: "#0f0f0e", fg: "#faf9f5", radius: "8px (split-pill 8/0/0/8 when paired)", padding: "8px 16px", height: "36px", font: "15px / 400", use: "Default marketing CTA — dark-on-warm 'Try Claude'" }
    button-secondary: { type: button, bg: "#e8e6dc", fg: "#4d4c48", radius: "8px", padding: "0px 12px 0px 8px", shadow: "ring #e8e6dc 0px 0px 0px 0px, #d1cfc5 0px 0px 0px 1px", use: "Workhorse interactive surface — warm, unassuming" }
    button-outline: { type: button, bg: "#f5f4ed", fg: "#73726c", border: "1px solid #d1cfc5", radius: "8px", padding: "8px 16px 8px 24px", height: "40px", font: "serif label", use: "Quiet 'See more' affordance on light sections" }
    button-dark: { type: button, bg: "#141413", fg: "#b0aea5", border: "1px solid #30302e", radius: "12px", padding: "9.6px 16.8px", use: "Dark-theme button variant" }
    segmented-tab: { type: tab, bg: "#ffffff", active: "text #141413", radius: "12px", padding: "8px 16px", height: "40px", font: "20px Anthropic Sans", use: "Individual / Teams plan switcher on /pricing" }
    card: { type: card, bg: "#faf9f5", border: "1px solid #f0eee6", radius: "8-16px", shadow: "whisper rgba(0,0,0,0.05) 0px 4px 24px", use: "Generic card & container" }
    pricing-card: { type: card, bg: "#ffffff", border: "1px solid #f0eee6", radius: "24px", padding: "32px", use: "Free / Pro plan containers — flat, clean" }
    pricing-card-featured: { type: card, bg: "#ffffff", border: "blue-tinted rgba(106,155,204,0.2)", radius: "24px", padding: "32px", shadow: "cool glow rgba(98,158,218,0.16) 0px 4px 20px", use: "Max upsell plan — the one deliberate cool accent" }
    prompt-suggestion-card: { type: card, bg: "#141413", fg: "#87867f", border: "1px solid #30302e", radius: "12px", padding: "8px", use: "Write / Learn / Code starter cards in dark chat mock" }
    news-feature-card: { type: card, bg: "#c46686", fg: "#141413", radius: "16px", padding: "40px", font: "serif headline", shadow: "layered soft rgba(0,0,0,0.04) 0px 1px 1px, rgba(0,0,0,0.06) 0px 4px 4px, rgba(0,0,0,0.08) 0px 16px 24px", use: "Editorial /news hero — chromatic, non-interactive" }
    input-search: { type: input, bg: "#ffffff", fg: "#141413", border: "1px solid #d1cfc5", radius: "12px", padding: "8px 16px 8px 40px", height: "44px", font: "14px Anthropic Sans", use: "Clean rounded search field, 44px touch target" }
    input: { type: input, fg: "#141413", radius: "12px", focus: "ring border #3898ec — the only cool color moment", use: "General text input" }
    nav: { type: card, bg: "#faf9f5", height: "68px", padding: "16px vertical", fg: "#0f0f0e", font: "serif wordmark, links 16-20px", hover: "text shifts to foreground-primary, no decoration", use: "Top nav / header with Try Claude CTA" }
    footer: { type: card, bg: "#141413", fg: "#b0aea5", font: "12px Anthropic Sans, 24px line-height", use: "Closing dark band — Ivory #faf9f5 headings, warm-silver links" }
---

# Design System Inspiration of Claude (Anthropic)

## 1. Visual Theme & Atmosphere

Claude's interface is a literary salon reimagined as a product page — warm, unhurried, and quietly intellectual. The entire experience is built on a parchment-toned canvas (`#f5f4ed`) that deliberately evokes the feeling of high-quality paper rather than a digital surface. Where most AI product pages lean into cold, futuristic aesthetics, Claude's design radiates human warmth, as if the AI itself has good taste in interior design.

The signature move is the custom Anthropic Serif typeface — a medium-weight serif with generous proportions that gives every headline the gravitas of a book title. Combined with organic, hand-drawn-feeling illustrations in terracotta (`#c96442`), black, and muted green, the visual language says "thoughtful companion" rather than "powerful tool." The serif headlines breathe at tight-but-comfortable line-heights (1.10–1.30), creating a cadence that feels more like reading an essay than scanning a product page.

What makes Claude's design truly distinctive is its warm neutral palette. Every gray has a yellow-brown undertone (`#5e5d59`, `#87867f`, `#4d4c48`) — there are no cool blue-grays anywhere. Borders are cream-tinted (`#f0eee6`, `#e8e6dc`), shadows use warm transparent blacks, and even the darkest surfaces (`#141413`, `#30302e`) carry a barely perceptible olive warmth. This chromatic consistency creates a space that feels lived-in and trustworthy.

**Key Characteristics:**
- Warm parchment canvas (`#f5f4ed`) evoking premium paper, not screens
- Custom Anthropic type family: Serif for headlines, Sans for UI, Mono for code
- Terracotta brand accent (`#c96442`) — warm, earthy, deliberately un-tech
- Exclusively warm-toned neutrals — every gray has a yellow-brown undertone
- Organic, editorial illustrations replacing typical tech iconography
- Ring-based shadow system (`0px 0px 0px 1px`) creating border-like depth without visible borders
- Magazine-like pacing with generous section spacing and serif-driven hierarchy

## 2. Color Palette & Roles

### Primary
- **Anthropic Near Black** (`#141413`): The primary text color and dark-theme surface — not pure black but a warm, almost olive-tinted dark that's gentler on the eyes. The warmest "black" in any major tech brand.
- **Terracotta Brand** (`#c96442`): The core brand color — a burnt orange-brown used for primary CTA buttons, brand moments, and the signature accent. Deliberately earthy and un-tech.
- **Coral Accent** (`#d97757`): A lighter, warmer variant of the brand color used for text accents, links on dark surfaces, and secondary emphasis.
- **Foreground Deep** (`#0f0f0e`): The deepest near-black, measured live on the `/news` "Try Claude" CTA fill and nav links — a touch darker than the standard Near Black, used where maximum-contrast dark fills are wanted.
- **Accent Rose** (`#c46686`): A muted dusty-rose, measured on the featured news hero card — a rare chromatic surface that sits beside Terracotta in the warm family without competing with it for CTA signal.

### Secondary & Accent
- **Error Crimson** (`#b53333`): A deep, warm red for error states — serious without being alarming.
- **Focus Blue** (`#3898ec`): Standard blue for input focus rings — the only cool color in the entire system, used purely for accessibility.

### Surface & Background
- **Parchment** (`#f5f4ed`): The primary page background — a warm cream with a yellow-green tint that feels like aged paper. The emotional foundation of the entire design.
- **Ivory** (`#faf9f5`): The lightest surface — used for cards and elevated containers on the Parchment background. Barely distinguishable but creates subtle layering.
- **Pure White** (`#ffffff`): Reserved for specific button surfaces and maximum-contrast elements.
- **Warm Sand** (`#e8e6dc`): Button backgrounds and prominent interactive surfaces — a noticeably warm light gray.
- **Dark Surface** (`#30302e`): Dark-theme containers, nav borders, and elevated dark elements — warm charcoal.
- **Deep Dark** (`#141413`): Dark-theme page background and primary dark surface.

### Neutrals & Text
- **Charcoal Warm** (`#4d4c48`): Button text on light warm surfaces — the go-to dark-on-light text.
- **Olive Gray** (`#5e5d59`): Secondary body text — a distinctly warm medium-dark gray.
- **Stone Gray** (`#87867f`): Tertiary text, footnotes, and de-emphasized metadata.
- **Muted Strong** (`#73726c`): A slightly deeper warm gray, measured on the `/news` "See more" outline-button label — used for muted-but-legible interactive text.
- **Dark Warm** (`#3d3d3a`): Dark text links and emphasized secondary text.
- **Warm Silver** (`#b0aea5`): Text on dark surfaces — a warm, parchment-tinted light gray.

### Semantic & Accent
- **Border Cream** (`#f0eee6`): Standard light-theme border — barely visible warm cream, creating the gentlest possible containment.
- **Border Warm** (`#e8e6dc`): Prominent borders, section dividers, and emphasized containment on light surfaces.
- **Border Dark** (`#30302e`): Standard border on dark surfaces — maintains the warm tone.
- **Ring Warm** (`#d1cfc5`): Shadow ring color for button hover/focus states.
- **Ring Subtle** (`#dedc01`): Secondary ring variant for lighter interactive surfaces.
- **Ring Deep** (`#c2c0b6`): Deeper ring for active/pressed states.

### Gradient System
- Claude's design is **gradient-free** in the traditional sense. Depth and visual richness come from the interplay of warm surface tones, organic illustrations, and light/dark section alternation. The warm palette itself creates a "gradient" effect as the eye moves through cream → sand → stone → charcoal → black sections.

## 3. Typography Rules

### Font Family
- **Headline**: `Anthropic Serif`, with fallback: `Georgia`
- **Body / UI**: `Anthropic Sans`, with fallback: `Arial`
- **Code**: `Anthropic Mono`, with fallback: `Arial`

*Note: These are custom typefaces. For external implementations, Georgia serves as the serif substitute and system-ui/Inter as the sans substitute.*

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display / Hero | Anthropic Serif | 64px (4rem) | 500 | 1.10 (tight) | normal | Maximum impact, book-title presence |
| Section Heading | Anthropic Serif | 52px (3.25rem) | 500 | 1.20 (tight) | normal | Feature section anchors |
| Sub-heading Large | Anthropic Serif | 36–36.8px (~2.3rem) | 500 | 1.30 | normal | Secondary section markers |
| Sub-heading | Anthropic Serif | 32px (2rem) | 500 | 1.10 (tight) | normal | Card titles, feature names |
| Sub-heading Small | Anthropic Serif | 25–25.6px (~1.6rem) | 500 | 1.20 | normal | Smaller section titles |
| Feature Title | Anthropic Serif | 20.8px (1.3rem) | 500 | 1.20 | normal | Small feature headings |
| Body Serif | Anthropic Serif | 17px (1.06rem) | 400 | 1.60 (relaxed) | normal | Serif body text (editorial passages) |
| Body Large | Anthropic Sans | 20px (1.25rem) | 400 | 1.60 (relaxed) | normal | Intro paragraphs |
| Body / Nav | Anthropic Sans | 17px (1.06rem) | 400–500 | 1.00–1.60 | normal | Navigation links, UI text |
| Body Standard | Anthropic Sans | 16px (1rem) | 400–500 | 1.25–1.60 | normal | Standard body, button text |
| Body Small | Anthropic Sans | 15px (0.94rem) | 400–500 | 1.00–1.60 | normal | Compact body text |
| Caption | Anthropic Sans | 14px (0.88rem) | 400 | 1.43 | normal | Metadata, descriptions |
| Label | Anthropic Sans | 12px (0.75rem) | 400–500 | 1.25–1.60 | 0.12px | Badges, small labels |
| Overline | Anthropic Sans | 10px (0.63rem) | 400 | 1.60 | 0.5px | Uppercase overline labels |
| Micro | Anthropic Sans | 9.6px (0.6rem) | 400 | 1.60 | 0.096px | Smallest text |
| Code | Anthropic Mono | 15px (0.94rem) | 400 | 1.60 | -0.32px | Inline code, terminal |

### Principles
- **Serif for authority, sans for utility**: Anthropic Serif carries all headline content with medium weight (500), giving every heading the gravitas of a published title. Anthropic Sans handles all functional UI text — buttons, labels, navigation — with quiet efficiency.
- **Single weight for serifs**: All Anthropic Serif headings use weight 500 — no bold, no light. This creates a consistent "voice" across all headline sizes, as if the same author wrote every heading.
- **Relaxed body line-height**: Most body text uses 1.60 line-height — significantly more generous than typical tech sites (1.4–1.5). This creates a reading experience closer to a book than a dashboard.
- **Tight-but-not-compressed headings**: Line-heights of 1.10–1.30 for headings are tight but never claustrophobic. The serif letterforms need breathing room that sans-serif fonts don't.
- **Micro letter-spacing on labels**: Small sans text (12px and below) uses deliberate letter-spacing (0.12px–0.5px) to maintain readability at tiny sizes.

## 4. Component Stylings

*Specs below are grounded in live `getComputedStyle` harvest (TIER 2) across anthropic.com `/`, `/pricing`, and `/news` (2026-06-09), supplemented by the documented warm-palette system. claude.ai's app shell is JS-gated and not headless-inspectable, so app-surface component specs are intentionally capped to what the marketing surfaces actually render. Components are grouped by role.*

### Actions

**Dark CTA — "Try Claude"** *(measured, `/news`)*
- Background: Foreground Deep (`#0f0f0e`)
- Text: Ivory (`#faf9f5`)
- Radius: comfortably rounded (8px) — rendered as a split-pill (`8px 0px 0px 8px`) when paired with an adjacent secondary action
- Padding: 8px 16px · Height: 36px · Font: Anthropic Sans 15px / 400
- The default marketing CTA — dark-on-warm, not terracotta. Terracotta is reserved for the highest-signal brand moments.

**Brand Terracotta**
- Background: Terracotta Brand (`#c96442`) · Text: Ivory (`#faf9f5`)
- Radius: 8–12px · Shadow: ring-based (`#c96442 0px 0px 0px 1px`)
- The only button with chromatic color — used for peak brand CTAs.

**Outline / Ghost — "See more"** *(measured, `/news`)*
- Background: Parchment (`#f5f4ed`) · Text: Muted Strong (`#73726c`)
- Border: 1px solid Ring Warm (`#d1cfc5`) · Radius: 8px
- Padding: 8px 16px 8px 24px (asymmetric, label-then-icon) · Height: 40px · Serif label
- The quiet "show more" affordance on light sections.

**Warm Sand (Secondary)**
- Background: Warm Sand (`#e8e6dc`) · Text: Charcoal Warm (`#4d4c48`)
- Padding: 0px 12px 0px 8px (asymmetric — icon-first) · Radius: 8px
- Shadow: ring-based (`#e8e6dc 0px 0px 0px 0px, #d1cfc5 0px 0px 0px 1px`)
- The workhorse interactive surface — warm, unassuming.

**Dark Primary**
- Background: Anthropic Near Black (`#141413`) · Text: Warm Silver (`#b0aea5`)
- Padding: ~9.6px 16.8px · Radius: 12px · Border: 1px solid Dark Surface (`#30302e`)
- The dark-theme button variant.

### Navigation

**Top Nav / Header** *(measured)*
- Background: Ivory (`#faf9f5`) · Height: 68px · Vertical padding: 16px
- Logo: Claude wordmark in Foreground Deep (`#0f0f0e`)
- Links: Foreground Deep (`#0f0f0e`) / Olive Gray (`#5e5d59`), serif at 16–20px
- CTA slot: Dark CTA or Terracotta button · Hover: text shifts to foreground-primary, no decoration

**Footer** *(measured, homepage)*
- Surface: Anthropic Near Black (`#141413`) full-bleed dark band
- Headings: Ivory (`#faf9f5`) · Links: Warm Silver (`#b0aea5`) at 12px Anthropic Sans, 24px line-height
- The closing dark "chapter" of the page.

### Forms

**Search Input** *(measured, `/news`)*
- Background: Pure White (`#ffffff`) · Text: Anthropic Near Black (`#141413`)
- Border: 1px solid Ring Warm (`#d1cfc5`) · Radius: 12px
- Padding: 8px 16px 8px 40px (left-inset for leading search icon) · Height: 44px · Font: Anthropic Sans 14px
- A clean rounded field — touch-target-sized at 44px.

**Text Input (general)**
- Text: Anthropic Near Black (`#141413`) · Radius: 12px
- Focus: ring with Focus Blue (`#3898ec`) border-color — the only cool color moment in the system.

**Segmented Tab — Plan switcher** *(measured, `/pricing`)*
- Background: Pure White (`#ffffff`) · Text: Anthropic Near Black (`#141413`)
- Radius: 12px · Padding: 8px 16px · Height: 40px · Font: Anthropic Sans 20px
- The Individual / Teams plan toggle at the top of pricing.

### Data display

**Pricing Card** *(measured, `/pricing`)*
- Background: Pure White (`#ffffff`) · Border: 1px solid Border Cream (`#f0eee6`)
- Radius: 24px (highly rounded) · Padding: 32px · No shadow at rest
- The Free / Pro plan containers — flat, clean, generously rounded.

**Featured Pricing Card — "Max"** *(measured, `/pricing`)*
- Background: Pure White (`#ffffff`) · Radius: 24px · Padding: 32px
- Border: blue-tinted (`rgba(106,155,204,0.2)`) · Shadow: cool glow `rgba(98,158,218,0.16) 0px 4px 20px`
- The single deliberate cool accent in the system — used only to mark the upsell plan, never as a brand color.

**Prompt Suggestion Card** *(measured, `/pricing` chat preview)*
- Background: Anthropic Near Black (`#141413`) · Text: Stone Gray (`#87867f`)
- Border: 1px solid Dark Surface (`#30302e`) · Radius: 12px · Padding: 8px
- The Write / Learn / Code starter cards inside the dark chat mock.

**News Feature Card** *(measured, `/news` hero)*
- Background: Accent Rose (`#c46686`) · Text: Anthropic Near Black (`#141413`)
- Radius: 16px · Padding: 40px · Serif headline
- Shadow: layered soft drop (`rgba(0,0,0,0.04) 0px 1px 1px, rgba(0,0,0,0.06) 0px 4px 4px, rgba(0,0,0,0.08) 0px 16px 24px`)
- A rare chromatic surface — editorial, not interactive.

**Generic Card & Container**
- Background: Ivory (`#faf9f5`) / Pure White (`#ffffff`) on light; Dark Surface (`#30302e`) on dark
- Border: 1px solid Border Cream (`#f0eee6`) light; 1px solid `#30302e` dark
- Radius: 8px standard, 16px featured, 24–32px hero/media
- Shadow: whisper (`rgba(0,0,0,0.05) 0px 4px 24px`); section separators use top-only `1px 0px 0px` borders.

### Image Treatment
- Product screenshots of the Claude chat interface; generous radius on media (16–32px)
- Embedded video players with rounded corners; dark UI screenshots contrast the warm canvas
- Organic, hand-drawn illustrations in terracotta, black, and muted green for conceptual sections

### Distinctive Components

**Organic Illustrations**
- Hand-drawn-feeling vector illustrations in terracotta, black, and muted green
- Abstract, conceptual rather than literal — the primary visual personality.

**Dark/Light Section Alternation**
- The page alternates Parchment light and Near Black dark sections, creating chapter-like reading rhythm. Each section reads as a distinct environment.

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 3px, 4px, 6px, 8px, 10px, 12px, 16px, 20px, 24px, 30px
- Button padding: asymmetric (0px 12px 0px 8px) or balanced (8px 16px)
- Card internal padding: approximately 24–32px
- Section vertical spacing: generous (estimated 80–120px between major sections)

### Grid & Container
- Max container width: approximately 1200px, centered
- Hero: centered with editorial layout
- Feature sections: single-column or 2–3 column card grids
- Model comparison: clean 3-column grid
- Full-width dark sections breaking the container for emphasis

### Whitespace Philosophy
- **Editorial pacing**: Each section breathes like a magazine spread — generous top/bottom margins create natural reading pauses.
- **Serif-driven rhythm**: The serif headings establish a literary cadence that demands more whitespace than sans-serif designs.
- **Content island approach**: Sections alternate between light and dark environments, creating distinct "rooms" for each message.

### Border Radius Scale
- Sharp (4px): Minimal inline elements
- Subtly rounded (6–7.5px): Small buttons, secondary interactive elements
- Comfortably rounded (8–8.5px): Standard buttons, cards, containers
- Generously rounded (12px): Primary buttons, input fields, nav elements
- Very rounded (16px): Featured containers, video players, tab lists
- Highly rounded (24px): Tag-like elements, highlighted containers
- Maximum rounded (32px): Hero containers, embedded media, large cards

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow, no border | Parchment background, inline text |
| Contained (Level 1) | `1px solid #f0eee6` (light) or `1px solid #30302e` (dark) | Standard cards, sections |
| Ring (Level 2) | `0px 0px 0px 1px` ring shadows using warm grays | Interactive cards, buttons, hover states |
| Whisper (Level 3) | `rgba(0,0,0,0.05) 0px 4px 24px` | Elevated feature cards, product screenshots |
| Inset (Level 4) | `inset 0px 0px 0px 1px` at 15% opacity | Active/pressed button states |

**Shadow Philosophy**: Claude communicates depth through **warm-toned ring shadows** rather than traditional drop shadows. The signature `0px 0px 0px 1px` pattern creates a border-like halo that's softer than an actual border — it's a shadow pretending to be a border, or a border that's technically a shadow. When drop shadows do appear, they're extremely soft (0.05 opacity, 24px blur) — barely visible lifts that suggest floating rather than casting.

### Decorative Depth
- **Light/Dark alternation**: The most dramatic depth effect comes from alternating between Parchment (`#f5f4ed`) and Near Black (`#141413`) sections — entire sections shift elevation by changing the ambient light level.
- **Warm ring halos**: Button and card interactions use ring shadows that match the warm palette — never cool-toned or generic gray.

## 7. Do's and Don'ts

### Do
- Use Parchment (`#f5f4ed`) as the primary light background — the warm cream tone IS the Claude personality
- Use Anthropic Serif at weight 500 for all headlines — the single-weight consistency is intentional
- Use Terracotta Brand (`#c96442`) only for primary CTAs and the highest-signal brand moments
- Keep all neutrals warm-toned — every gray should have a yellow-brown undertone
- Use ring shadows (`0px 0px 0px 1px`) for interactive element states instead of drop shadows
- Maintain the editorial serif/sans hierarchy — serif for content headlines, sans for UI
- Use generous body line-height (1.60) for a literary reading experience
- Alternate between light and dark sections to create chapter-like page rhythm
- Apply generous border-radius (12–32px) for a soft, approachable feel

### Don't
- Don't use cool blue-grays anywhere — the palette is exclusively warm-toned
- Don't use bold (700+) weight on Anthropic Serif — weight 500 is the ceiling for serifs
- Don't introduce saturated colors beyond Terracotta — the palette is deliberately muted
- Don't use sharp corners (< 6px radius) on buttons or cards — softness is core to the identity
- Don't apply heavy drop shadows — depth comes from ring shadows and background color shifts
- Don't use pure white (`#ffffff`) as a page background — Parchment (`#f5f4ed`) or Ivory (`#faf9f5`) are always warmer
- Don't use geometric/tech-style illustrations — Claude's illustrations are organic and hand-drawn-feeling
- Don't reduce body line-height below 1.40 — the generous spacing supports the editorial personality
- Don't use monospace fonts for non-code content — Anthropic Mono is strictly for code
- Don't mix in sans-serif for headlines — the serif/sans split is the typographic identity

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Small Mobile | <479px | Minimum layout, stacked everything, compact typography |
| Mobile | 479–640px | Single column, hamburger nav, reduced heading sizes |
| Large Mobile | 640–767px | Slightly wider content area |
| Tablet | 768–991px | 2-column grids begin, condensed nav |
| Desktop | 992px+ | Full multi-column layout, expanded nav, maximum hero typography (64px) |

### Touch Targets
- Buttons use generous padding (8–16px vertical minimum)
- Navigation links adequately spaced for thumb navigation
- Card surfaces serve as large touch targets
- Minimum recommended: 44x44px

### Collapsing Strategy
- **Navigation**: Full horizontal nav collapses to hamburger on mobile
- **Feature sections**: Multi-column → stacked single column
- **Hero text**: 64px → 36px → ~25px progressive scaling
- **Model cards**: 3-column → stacked vertical
- **Section padding**: Reduces proportionally but maintains editorial rhythm
- **Illustrations**: Scale proportionally, maintain aspect ratios

### Image Behavior
- Product screenshots scale proportionally within rounded containers
- Illustrations maintain quality at all sizes
- Video embeds maintain 16:9 aspect ratio with rounded corners
- No art direction changes between breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Brand CTA: "Terracotta Brand (#c96442)"
- Page Background: "Parchment (#f5f4ed)"
- Card Surface: "Ivory (#faf9f5)"
- Primary Text: "Anthropic Near Black (#141413)"
- Secondary Text: "Olive Gray (#5e5d59)"
- Tertiary Text: "Stone Gray (#87867f)"
- Borders (light): "Border Cream (#f0eee6)"
- Dark Surface: "Dark Surface (#30302e)"

### Example Component Prompts
- "Create a hero section on Parchment (#f5f4ed) with a headline at 64px Anthropic Serif weight 500, line-height 1.10. Use Anthropic Near Black (#141413) text. Add a subtitle in Olive Gray (#5e5d59) at 20px Anthropic Sans with 1.60 line-height. Place a Terracotta Brand (#c96442) CTA button with Ivory text, 12px radius."
- "Design a feature card on Ivory (#faf9f5) with a 1px solid Border Cream (#f0eee6) border and comfortably rounded corners (8px). Title in Anthropic Serif at 25px weight 500, description in Olive Gray (#5e5d59) at 16px Anthropic Sans. Add a whisper shadow (rgba(0,0,0,0.05) 0px 4px 24px)."
- "Build a dark section on Anthropic Near Black (#141413) with Ivory (#faf9f5) headline text in Anthropic Serif at 52px weight 500. Use Warm Silver (#b0aea5) for body text. Borders in Dark Surface (#30302e)."
- "Create a button in Warm Sand (#e8e6dc) with Charcoal Warm (#4d4c48) text, 8px radius, and a ring shadow (0px 0px 0px 1px #d1cfc5). Padding: 0px 12px 0px 8px."
- "Design a model comparison grid with three cards on Ivory surfaces. Each card gets a Border Warm (#e8e6dc) top border, model name in Anthropic Serif at 25px, and description in Olive Gray at 15px Anthropic Sans."

### Iteration Guide
1. Focus on ONE component at a time
2. Reference specific color names — "use Olive Gray (#5e5d59)" not "make it gray"
3. Always specify warm-toned variants — no cool grays
4. Describe serif vs sans usage explicitly — "Anthropic Serif for the heading, Anthropic Sans for the label"
5. For shadows, use "ring shadow (0px 0px 0px 1px)" or "whisper shadow" — never generic "drop shadow"
6. Specify the warm background — "on Parchment (#f5f4ed)" or "on Near Black (#141413)"
7. Keep illustrations organic and conceptual — describe "hand-drawn-feeling" style

---

## 10. Voice & Tone

Anthropic speaks the way a thoughtful colleague does — informed, careful, and allergic to hype. The voice qualifies confident claims, avoids tech-industry superlatives, and treats the reader as capable of reading more than a headline. Serious subjects get serious language; lighter moments are dry, not performative. Emoji and exclamation points are rare — warmth comes from word choice and editorial pacing, not decoration. The overall effect should read like a well-edited magazine article, not a product page.

| Context | Tone |
|---|---|
| Headlines | Declarative, short. No "revolutionary", "unprecedented", "cutting-edge". |
| Model descriptions | Capability + honest limit in one breath. "Sonnet is faster than Opus; Opus is better at long, multi-step reasoning." |
| Error (content / safety refusal) | Specific + blameless + policy-cited. Never "Oops" or apologetic filler. |
| Error (service / technical) | States the exact failure and the exact recovery action in one sentence. |
| Documentation | Direct. "This is how it works." No "easy" or "simple" modifiers. |
| Marketing CTAs | Verb + noun, plain. "Try Claude", not "Unleash your creativity". |
| Legal / policy surfaces | Formal, precise. Reads like a peer-reviewed paper's methods section. |
| Social media | Dry wit. Zero emoji in product announcements. |
| Model card language | States training data shape, eval variance, and known failure modes up front — *before* features. |

**Forbidden phrases.** "Revolutionary", "world-class", "cutting-edge", "game-changer", "unleash", "superpower", "don't worry", "easy peasy", "just". Any sentence starting with "Simply...". Exclamation marks on routine CTAs. Emoji in product descriptions, error messages, documentation, or model cards. Performative apologies ("We're so sorry for the inconvenience") — state the problem and the fix, no emotional performance.

## 11. Brand Narrative

Anthropic was founded in **January 2021** in San Francisco by **Dario Amodei** (CEO, former VP of Research at OpenAI) and **Daniela Amodei** (President, former VP of Safety and Policy at OpenAI) — siblings — joined by **seven other OpenAI alumni** including **Tom Brown** (lead author of the GPT-3 paper), **Sam McCandlish** (Chief Architect), **Jared Kaplan** (Chief Science Officer), **Jack Clark** (former OpenAI Policy Director), **Christopher Olah** (Interpretability Research Lead), **Benjamin Mann** (Head of Anthropic Labs), and others ([Anthropic — Wikipedia](https://en.wikipedia.org/wiki/Anthropic), [Dario Amodei — Wikipedia](https://en.wikipedia.org/wiki/Dario_Amodei), [TIME 100 AI 2023](https://time.com/collections/time100-ai/6309047/daniela-and-dario-amodei/)). The founding split from OpenAI was driven by safety concerns. Per Dario Amodei (per [Big Technology profile](https://kantrowitz.medium.com/the-making-of-anthropic-ceo-dario-amodei-449777529dd6)): *"something in addition to just scaling the models up, which is alignment or safety"* was required. The signature technique — **Constitutional AI** — trains the LLM to adhere to a set of explicit principles (the "constitution"), separating *"whether an AI can do something from the more politically fraught question of whether it should."* Claude product line: Claude 1 (March 2023) → Claude 2 → Claude 3 (March 2024) → Claude 3.5 Sonnet → Claude 4 family (2025) → Claude 4.7 currently. **Valuation ~$380B as of February 2026** ([Wikipedia: Anthropic](https://en.wikipedia.org/wiki/Anthropic)).

The founding rejection was twofold: against the tech industry's default optimism that treats powerful systems as obvious goods, and against the cinematic AI aesthetic — Terminator reds, cyberpunk neons, sterile clinical whites — that equates "powerful" with "cold" or "threatening". The founding rejection was twofold: against the tech industry's default optimism that treats powerful systems as obvious goods, and against the cinematic AI aesthetic — Terminator reds, cyberpunk neons, sterile clinical whites — that equates "powerful" with "cold" or "threatening".

The warm visual language — parchment (`#f5f4ed`), terracotta (`#c96442`), olive grays, serif headlines — is a deliberate counter to that vocabulary. AI should feel like a trustworthy colleague, not a tool to be afraid of. Constitutional AI, the company's signature technique, treats alignment as engineering rather than philosophy; the brand extends that precision into every design decision.

What Anthropic refuses: speculation dressed as fact, fear-based marketing, unqualified confidence, and visual tropes borrowed from science fiction. What it embraces: measured claims, editorial pacing, warmth as a form of honesty, and safety framed as the foundation that makes functionality meaningful — not as a constraint on it.

## 12. Principles

1. **Honesty over charm.** If a claim can't be backed by an evaluation or a specific example, it doesn't ship. Model capabilities are published with variance; limitations appear in the same paragraph as capabilities, not in an FAQ.
2. **Warmth is a credibility signal.** Parchment canvas and terracotta brand color exist because financial-industry gray and cyberpunk neon both signal distrust. Warmth reads as "a human considered this for you".
3. **Measured language always.** "Sonnet performs well on long-context reasoning" beats "Sonnet crushes long context". Hedging is a feature, not a weakness — it signals knowing where the edge is.
4. **Serif carries weight.** Anthropic Serif at weight 500 for every headline says the thought was considered before it was published. Bold weights would signal urgency; that's not the mode.
5. **No cool colors in the palette.** Blue-grays, cyberpunk magentas, clinical teals all read as "tech product optimizing for you" rather than "tool helping you think". Warm only.
6. **Editorial pacing.** Body line-height 1.60, generous section spacing, single-column reading rhythm. Content that asks to be read, not skimmed.
7. **Safety frames functionality, not constrains it.** Safety disclosures appear where decisions are made — model cards, onboarding, policy surfaces. A model card is a design element, not a legal afterthought.
8. **The illustration style is the refusal.** Hand-drawn organic illustrations — not geometric tech icons, not 3D rendered abstractions — are the single clearest signal that this company rejects the industry's default aesthetic.
9. **Streaming is the UI.** The primary "animation" is the model's output decoding token by token. Never fake it; never over-engineer around it. The latency is the honesty.

## 13. Personas

*Personas below are fictional archetypes informed by publicly described Claude user segments, not individual people.*

**Dr. Rohit Sharma, 38, Boston.** Computational biologist at a research hospital. Uses Claude for literature review and code review on genomics pipelines. Will immediately distrust any AI product that uses "revolutionary" about itself. Reads model cards before deploying a new model to his team. Appreciates the exact caveat *"Claude may make mistakes — please double-check responses"*: for him, that caveat is why he chose Anthropic.

**Elena Ruiz, 29, Berlin.** Staff engineer at a Series-B startup. Uses Claude Code daily as a pair programmer. Prefers it to alternatives because the output feels like a careful colleague's rather than an over-eager junior's. Will use exclamation marks in Slack but finds them wrong in product copy. Notices voice inconsistency across an app within 30 seconds and mentally downgrades the team that shipped it.

**Tomás Vidal, 54, São Paulo.** Chief Counsel at a regulated financial services firm. Approves enterprise Claude deployment for his company's legal research team. Reads Anthropic's Responsible Scaling Policy twice before signing a commercial agreement. Does not care about playful product copy; cares deeply that the brand signals competence at regulated tasks. The serif-driven editorial aesthetic reads to him as "this company takes itself seriously".

**Min-jun Park, 24, Seoul.** Graduate student in philosophy. Uses Claude for drafting and argument-testing on research papers. Started because a professor recommended it specifically for long-form reasoning. Trusts the brand more than the feature set — when Anthropic says a capability is experimental, she assumes it is experimental and reads the caveats. Will stop using the product if it ever sounds like it's selling her something.

## 14. States

| State | Treatment |
|---|---|
| **Empty (first use)** | A single serif line of prompt guidance on Parchment, no illustration. "What would you like to ask Claude?" — rendered as a question with ordinary punctuation, not emphasis styling. |
| **Empty (search, no results)** | One Olive Gray (`#5e5d59`) sans line at 15px: "Nothing matches that." No suggestions unless they are genuinely useful. Never an illustration, never an emoji. |
| **Loading (message generation)** | Text streams via typewriter. No separate "thinking…" indicator during normal generation; the stream is the indicator. During pre-stream pause (≥500ms), three Olive Gray dots animate at 1.5s cadence. No spinner anywhere. |
| **Loading (app shell / route transition)** | Parchment background with Border Cream (`#f0eee6`) skeleton blocks at final dimensions. 1.8s shimmer with a warm-tinted highlight. Blue-tinted skeletons are forbidden — they break the palette. |
| **Error (content / safety refusal)** | A single paragraph in Olive Gray explaining the refusal *specifically and without apology*. Cites the relevant policy surface (Usage Policies, Constitution). No 🚫 or ⚠ — the words carry the weight. |
| **Error (service)** | Warm Sand (`#e8e6dc`) banner with Anthropic Near Black (`#141413`) text: the exact failure and the exact recovery action. "Claude is temporarily unavailable. Try again in a minute." Never speculate about the cause if it isn't known. |
| **Error (user input, e.g., over token limit)** | Inline below the input. Specific number (`Your message is 12,000 tokens; Sonnet handles up to 200,000`). Actionable suggestion if obvious. |
| **Streaming cursor** | A block cursor (`▍`) in Terracotta Brand (`#c96442`) blinks at 1.2s. This is the only animated terracotta element anywhere; everywhere else terracotta is static. |
| **Success (message delivered)** | No explicit state. The streamed message is the confirmation. Never a toast. |
| **Success (account / billing action)** | Brief Warm Sand banner with Charcoal Warm text, 4s auto-dismiss. Past tense, exact consequence. "Your plan was changed to Max." |
| **Skeleton** | Border Cream blocks at exact final dimensions. Warm shimmer. Typography skeletons use slightly wider lines for serif headings to match their visual weight. |
| **Disabled** | Opacity reduced on text and surface together; warm tint preserved. Disabled inputs retain Border Cream border — geometry stable if re-enabled. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Focus rings, toggle state commit |
| `motion-fast` | 160ms | Hover states, small fades, button press overlay |
| `motion-standard` | 260ms | Modal, sheet, card expand, section transition |
| `motion-slow` | 420ms | Page-level transitions, first-paint reveals |
| `motion-stream` | variable | Token-rate typewriter (driven by model decoding, not time) |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Sheets rise, modals appear — settled landing, never springy |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 0.9, 1)` | Dismissals, quiet removals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions, card states |

**Explicitly forbidden.** No `cubic-bezier(0.34, 1.56, 0.64, 1)` or any overshoot/spring curves. Anthropic motion does not bounce. Overshoot is inherently playful and slightly sycophantic; this brand is considered, not eager.

**Signature motions.**

1. **Typewriter streaming (the product's primary animation).** The model's output appears character by character as tokens decode. This is not a simulated effect — it is the actual decoding timing. Never fake it, and never pre-compute then replay; pre-computed or cached responses should appear instantaneously. Faking the typewriter on cached content creates the same kind of distrust as a progress bar that pauses theatrically at 95%.
2. **Light / Dark section alternation.** On the marketing site's hero-to-feature transitions, the background crossfades between Parchment and Near Black at `motion-slow`. Headlines do not move during the transition; only the ambient light level changes. This is the one place the site "does something cinematic", and it is deliberately the only one.
3. **Terracotta cursor.** The blinking cursor during streaming (§14) is the only animated terracotta element. Everywhere else, terracotta is static — CTAs, brand marks, unmoving.
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant`. Typewriter streaming is replaced by whole-paragraph materialization as tokens complete. The app stays fully functional; no delightful motion at the cost of accessibility.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Direct verification via WebFetch (2026-04-19):
- https://www.anthropic.com/company — confirms Anthropic's self-description as
  "an AI safety and research company" building "reliable, interpretable, and
  steerable AI systems". Board includes Dario Amodei and Daniela Amodei.
- https://www.anthropic.com/news/core-views-on-ai-safety (published 2023-03-08) —
  confirms founding mission framing ("We founded Anthropic because we believe the
  impact of AI might be comparable to that of the industrial and scientific
  revolutions"), the "empirically-driven approach to AI safety", and that
  "several members of what was to become the founding Anthropic team" worked
  on scaling laws in 2019.

Base DESIGN.md (sections 1–9) is the source for all token-level claims
(Parchment #f5f4ed, Terracotta #c96442, Anthropic Serif/Sans/Mono stacks,
ring-shadow system, warm-only neutral palette).

Anti-slop voice rules and the forbidden-phrase list in §10 are informed by:
- anthropics/skills/frontend-design (public at github.com/anthropics/skills) —
  Anthropic's own `frontend-design` skill with named bans on Inter/Roboto/Arial
  as default fonts, purple-on-white palettes, SVG line-art illustrations,
  unjustified gradients, etc. This skill is the authoritative source for
  Anthropic's documented anti-slop stance.

Not independently verified via WebFetch — widely documented public facts used:
- Anthropic was founded in 2021.
- Several founders previously worked at OpenAI.

Personas (§13) are fictional archetypes informed by publicly described Claude
user segments (academic researchers, startup engineers, enterprise legal /
compliance, graduate students). Any resemblance to specific individuals is
unintended. Names are illustrative; they do not refer to real people.

Interpretive claims (e.g., "the warm visual language is a deliberate counter
to the cyberpunk AI aesthetic") are editorial readings of the design system,
not documented Anthropic statements.
-->

---

**Verified:** 2026-05-08 (B11 loop)
**Tier 1 sources:** anthropic.com (live DOM via playwright — Skip-to-content `#faf9f5` 0/0/8/8 / 12px / 49px / 18px·600; Try Claude `#faf9f5` 8/0/0/8 ghost; warm cream canvas confirmed; Read the story 24px hover area)
**Tier 2 sources:** styles.refero.design / getdesign.md — no record.
**Tier 1 (Philosophy):** existing §10-15 retained; anthropic.com About; Claude Constitution; Anthropic publications.
**Style ref:** `claude` (self). **Conflicts unresolved:** none.

