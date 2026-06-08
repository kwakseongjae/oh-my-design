---
id: warp
name: Warp
country: US
category: developer-tools
homepage: "https://www.warp.dev"
primary_color: "#01a4ff"
logo:
  type: simpleicons
  slug: warp
verified: "2026-05-15"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    parchment: "#faf9f6"
    earth-gray: "#353534"
    charcoal: "#454545"
    stone-gray: "#868584"
    ash-gray: "#afaeac"
    muted-purple: "#666469"
    input-bg: "#1a1a18"
  typography:
    family: { sans: "Matter Regular", mono: "Matter Mono Regular" }
    display-hero:  { size: 80, weight: 400, lineHeight: 1.00, tracking: -2.4, use: "Hero impact" }
    section:       { size: 56, weight: 400, lineHeight: 1.20, tracking: -0.56, use: "Feature section headings" }
    feature:       { size: 40, weight: 400, lineHeight: 1.10, tracking: -0.4, use: "Feature block titles" }
    body-heading:  { size: 24, weight: 400, lineHeight: 1.20, use: "Bold content intros" }
    card-title:    { size: 22, weight: 500, lineHeight: 1.14, use: "Emphasized card headers" }
    body-lg:       { size: 20, weight: 400, lineHeight: 1.40, tracking: -0.2, use: "Primary body, relaxed" }
    body:          { size: 18, weight: 400, lineHeight: 1.30, tracking: -0.18, use: "Standard paragraphs" }
    nav:           { size: 16, weight: 400, lineHeight: 1.20, use: "Navigation, UI text" }
    button:        { size: 16, weight: 500, lineHeight: 1.20, use: "Button labels" }
    caption:       { size: 14, weight: 400, lineHeight: 1.00, tracking: 1.4, use: "Uppercase labels" }
    small-label:   { size: 12, weight: 400, lineHeight: 1.35, tracking: 2.4, use: "Uppercase micro-labels" }
    micro:         { size: 11, weight: 400, lineHeight: 1.20, use: "Smallest text" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 36, section: 80 }
  rounded: { sm: 4, md: 8, lg: 12, full: 50 }
  shadow:
    ambient: "rgba(0,0,0,0.2) 0px 5px 15px"
  components:
    button-dark-pill: { type: button, bg: "#353534", fg: "#afaeac", radius: 50, padding: "10px", font: "16px/400 Matter Regular", use: "Primary CTA, muted" }
    button-ghost: { type: button, fg: "#afaeac", radius: 50, padding: "10px", use: "Tertiary text-only, hover underline" }
    input-default: { type: input, bg: "#1a1a18", fg: "#faf9f6", radius: 8, padding: "10px 12px", font: "16px/400 Matter Regular", use: "Form input, placeholder #868584" }
    card-bordered: { type: card, bg: "#1a1a18", fg: "#faf9f6", radius: 12, padding: "24px", use: "Containment card, semi-transparent border" }
    card-terminal: { type: card, bg: "#1a1a18", radius: 12, padding: "0px", use: "Product terminal UI frame" }
    badge-frosted: { type: badge, fg: "#000000", radius: 6, padding: "1px 6px", font: "12px/400 Matter Regular", use: "Frosted tag/badge" }
  components_harvested: true
---

# Design System Inspiration of Warp

## 1. Visual Theme & Atmosphere

Warp's website feels like sitting at a campfire in a deep forest — warm, dark, and alive with quiet confidence. Unlike the cold, blue-tinted blacks favored by most developer tools, Warp wraps everything in a warm near-black that feels like charred wood or dark earth. The text isn't pure white either — it's Warm Parchment (`#faf9f6`), a barely-perceptible cream that softens every headline and makes the dark canvas feel inviting rather than austere.

The typography is the secret weapon: Matter, a geometric sans-serif with distinctive character, deployed at Regular weight across virtually all text. The font choice is unusual for a developer tool — Matter has a softness and humanity that signals "this terminal is for everyone, not just greybeards." Combined with tight line-heights and controlled negative letter-spacing on headlines, the effect is refined and approachable simultaneously. Nature photography is woven between terminal screenshots, creating a visual language that says: this tool brings you closer to flow, to calm productivity.

The overall design philosophy is restraint through warmth. Minimal color (almost monochromatic warm grays), minimal ornamentation, and a focus on product showcases set against cinematic dark landscapes. It's a terminal company that markets like a lifestyle brand.

**Key Characteristics:**
- Warm dark background — not cold black, but earthy near-black with warm gray undertones
- Warm Parchment (`#faf9f6`) text instead of pure white — subtle cream warmth
- Matter font family (Regular weight) — geometric but approachable, not the typical developer-tool typeface
- Nature photography interleaved with product screenshots — lifestyle meets developer tool
- Almost monochromatic warm gray palette — no bold accent colors
- Uppercase labels with wide letter-spacing (2.4px) for categorization — editorial signaling
- Pill-shaped dark buttons (`#353534`, 50px radius) — restrained, muted CTAs

## 2. Color Palette & Roles

### Primary
- **Warm Parchment** (`#faf9f6`): Primary text color — a barely-cream off-white that softens every surface
- **Earth Gray** (`#353534`): Button backgrounds, dark interactive surfaces — warm, not cold
- **Deep Void** (near-black, page background): The warm dark canvas derived from the body background

### Secondary & Accent
- **Stone Gray** (`#868584`): Secondary text, muted descriptions — warm mid-gray
- **Ash Gray** (`#afaeac`): Body text, button text — the workhorse reading color
- **Purple-Tint Gray** (`#666469`): Link text with subtle purple undertone — underlined links in content

### Surface & Background
- **Frosted Veil** (`rgba(255, 255, 255, 0.04)`): Ultra-subtle white overlay for surface differentiation
- **Mist Border** (`rgba(226, 226, 226, 0.35)` / `rgba(227, 227, 227, 0.337)`): Semi-transparent borders for card containment
- **Translucent Parchment** (`rgba(250, 249, 246, 0.9)`): Slightly transparent primary surface, allowing depth

### Neutrals & Text
- **Warm Parchment** (`#faf9f6`): Headlines, high-emphasis text
- **Ash Gray** (`#afaeac`): Body paragraphs, descriptions
- **Stone Gray** (`#868584`): Secondary labels, subdued information
- **Muted Purple** (`#666469`): Underlined links, tertiary content
- **Dark Charcoal** (`#454545` / `#353534`): Borders, button backgrounds

### Semantic & Accent
- Warp operates as an almost monochromatic system — no bold accent colors
- Interactive states are communicated through opacity changes and underline decorations rather than color shifts
- Any accent color would break the warm, restrained palette

### Gradient System
- No explicit gradients on the marketing site
- Depth is created through layered semi-transparent surfaces and photography rather than color gradients

## 3. Typography Rules

### Font Family
- **Display & Body**: `Matter Regular` — geometric sans-serif with soft character. Fallbacks: `Matter Regular Placeholder`, system sans-serif
- **Medium**: `Matter Medium` — weight 500 variant for emphasis. Fallbacks: `Matter Medium Placeholder`
- **Square**: `Matter SQ Regular` — squared variant for select display contexts. Fallbacks: `Matter SQ Regular Placeholder`
- **UI Supplement**: `Inter` — used for specific UI elements. Fallbacks: `Inter Placeholder`
- **Monospace Display**: `Geist Mono` — for code/terminal display headings
- **Monospace Body**: `Matter Mono Regular` — custom mono companion. Fallbacks: `Matter Mono Regular Placeholder`

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Matter Regular | 80px | 400 | 1.00 | -2.4px | Maximum compression, hero impact |
| Section Display | Matter Regular | 56px | 400 | 1.20 | -0.56px | Feature section headings |
| Section Heading | Matter Regular | 48px | 400 | 1.20 | -0.48px to -0.96px | Alternate heading weight |
| Feature Heading | Matter Regular | 40px | 400 | 1.10 | -0.4px | Feature block titles |
| Sub-heading Large | Matter Regular | 36px | 400 | 1.15 | -0.72px | Sub-section headers |
| Card Display | Matter SQ Regular | 42px | 400 | 1.00 | 0px | Squared variant for special display |
| Sub-heading | Matter Regular | 32px | 400 | 1.19 | 0px | Content sub-headings |
| Body Heading | Matter Regular | 24px | 400 | 1.20 | -0.72px to 0px | Bold content intros |
| Card Title | Matter Medium | 22px | 500 | 1.14 | 0px | Emphasized card headers |
| Body Large | Matter Regular | 20px | 400 | 1.40 | -0.2px | Primary body text, relaxed |
| Body | Matter Regular | 18px | 400 | 1.30 | -0.18px | Standard body paragraphs |
| Nav/UI | Matter Regular | 16px | 400 | 1.20 | 0px | Navigation links, UI text |
| Button Text | Matter Medium | 16px | 500 | 1.20 | 0px | Button labels |
| Caption | Matter Regular | 14px | 400 | 1.00 | 1.4px | Uppercase labels (transform: uppercase) |
| Small Label | Matter Regular | 12px | 400 | 1.35 | 2.4px | Uppercase micro-labels (transform: uppercase) |
| Micro | Matter Regular | 11px | 400 | 1.20 | 0px | Smallest text elements |
| Code UI | Geist Mono | 16px | 400 | 1.00 | 0px | Terminal/code display |
| Code Body | Matter Mono Regular | 16px | 400 | 1.00 | -0.2px | Code content |
| UI Supplement | Inter | 16px | 500 | 1.00 | -0.2px | Specific UI elements |

### Principles
- **Regular weight dominance**: Nearly all text uses weight 400 (Regular) — even headlines. Matter Medium (500) appears only for emphasis moments like card titles and buttons. This creates a remarkably even, calm typographic texture
- **Uppercase as editorial signal**: Small labels and categories use uppercase transform with wide letter-spacing (1.4px–2.4px), creating a magazine-editorial categorization system
- **Warm legibility**: The combination of Matter's geometric softness + warm text colors (#faf9f6) + controlled negative tracking creates text that reads as effortlessly human on dark surfaces
- **No bold display**: Zero use of bold (700+) weight anywhere — restraint is the philosophy

## 4. Component Stylings

### Buttons

**Dark Pill**
- Background: `#353534`
- Text: `#afaeac` (Ash Gray)
- Radius: 50px (pill)
- Padding: 10px
- Font: 16px / 400 / Matter
- Hover: subtle opacity/brightness shift
- Use: Primary CTA — warm, muted, understated

**Frosted Tag**
- Background: `rgba(255, 255, 255, 0.16)`
- Text: `#000000`
- Radius: 6px
- Padding: 1px 6px
- Font: 12px / 400 / Matter
- Use: Small inline tag-like button

**Ghost**
- Background: transparent
- Text: `#afaeac`
- Radius: 50px
- Padding: 10px
- Hover: underline decoration
- Use: Tertiary text-only action

### Inputs

**Default**
- Background: `#1a1a18`
- Text: `#faf9f6`
- Border: 1px solid `rgba(226, 226, 226, 0.35)`
- Radius: 8px
- Padding: 10px 12px
- Font: 16px / 400 / Matter
- Placeholder: `#868584` (Stone Gray)
- Focus: border brightness increase (no colored ring — monochromatic)
- Use: Inferred from §1-§2 baseline (no explicit DS variant in source) — minimal form presence on marketing site.

### Cards

**Photography Card**
- Background: full-bleed nature imagery
- Radius: 8px (or 12px)
- Padding: 0px (image-led)
- Use: Nature photography with overlay text

**Terminal Screenshot Card**
- Background: `#1a1a18`
- Radius: 12px
- Padding: 0px (UI fills frame)
- Use: Product terminal UI in dark container

**Bordered Card**
- Background: `#1a1a18`
- Text: `#faf9f6`
- Border: 1px solid `rgba(226, 226, 226, 0.35)`
- Radius: 12px
- Padding: 24px
- Use: Containment card with semi-transparent border

### Badges

**Default**
- Background: `rgba(255, 255, 255, 0.16)`
- Text: `#000000` (or `#faf9f6` on dark)
- Radius: 6px
- Padding: 1px 6px
- Font: 12px / 400 / Matter
- Use: Inferred from §1-§2 baseline (no explicit DS variant in source) — frosted tag re-used as badge.

### Navigation
- **Top nav**: Dark background, warm parchment brand text, Matter Regular at 16px for links
- **Link color**: Stone Gray (`#868584`) for muted nav, Warm Parchment for active/hover
- **CTA button**: Dark pill (#353534) at nav end — restrained, not attention-grabbing
- **Mobile**: Collapses to simplified navigation
- **Sticky**: Nav stays fixed on scroll

### Image Treatment
- **Nature photography**: Landscapes, forests, golden-hour scenes — completely unique for a developer tool
- **Terminal screenshots**: Product UI shown in realistic terminal window frames
- **Mixed composition**: Nature images and terminal screenshots are interleaved, creating a lifestyle-meets-tool narrative
- **Full-bleed**: Images often span full container width with 8px radius
- **Video**: Video elements present with 10px border-radius

### Testimonial Section
- Social proof area ("Don't take our word for it") with quotes
- Muted styling consistent with overall restraint

## 5. Layout Principles

### Spacing System
- **Base unit**: 8px
- **Scale**: 1px, 4px, 5px, 8px, 10px, 12px, 14px, 15px, 16px, 18px, 24px, 26px, 30px, 32px, 36px
- **Section padding**: 80px–120px vertical between major sections
- **Card padding**: 16px–32px internal spacing
- **Component gaps**: 8px–16px between related elements

### Grid & Container
- **Max width**: ~1500px container (breakpoint at 1500px), centered
- **Column patterns**: Full-width hero, 2-column feature sections with photography, single-column testimonials
- **Cinematic layout**: Wide containers that let photography breathe

### Whitespace Philosophy
- **Vast and warm**: Generous spacing between sections — the dark background creates a warm void that feels contemplative rather than empty
- **Photography as whitespace**: Nature images serve as visual breathing room between dense product information
- **Editorial pacing**: The layout reads like a magazine — each section is a deliberate page-turn moment

### Border Radius Scale
- **4px**: Small interactive elements — buttons, tags
- **5px–6px**: Standard components — links, small containers
- **8px**: Images, video containers, standard cards
- **10px**: Video elements, medium containers
- **12px**: Feature cards, large images
- **14px**: Large containers, prominent cards
- **40px**: Large rounded sections
- **50px**: Pill buttons — primary CTAs
- **200px**: Progress bars — full pill shape

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Level 0 (Flat) | No shadow, dark background | Page canvas, most surfaces |
| Level 1 (Veil) | `rgba(255, 255, 255, 0.04)` overlay | Subtle surface differentiation |
| Level 2 (Border) | `rgba(226, 226, 226, 0.35) 1px` border | Card containment, section separation |
| Level 3 (Ambient) | `rgba(0, 0, 0, 0.2) 0px 5px 15px` (inferred from design) | Image containers, floating elements |

### Shadow Philosophy
Warp's elevation system is remarkably flat — almost zero shadow usage on the marketing site. Depth is communicated through:
- **Semi-transparent borders** instead of shadows — borders at 35% opacity create a ghostly containment
- **Photography layering** — images create natural depth without artificial shadows
- **Surface opacity shifts** — `rgba(255, 255, 255, 0.04)` overlays create barely-perceptible layer differences
- The effect is calm and grounded — nothing floats, everything rests

### Decorative Depth
- **Photography as depth**: Nature images create atmospheric depth that shadows cannot
- **No glass or blur effects**: The design avoids trendy glassmorphism entirely
- **Warm ambient**: Any glow comes from the photography's natural lighting, not artificial CSS

## 7. Do's and Don'ts

### Do
- Use warm off-white (`#faf9f6`) for text instead of pure white — the cream undertone is essential
- Keep buttons restrained and muted — dark fill (#353534) with muted text (#afaeac), no bright CTAs
- Apply Matter Regular (weight 400) for nearly everything — even headlines. Reserve Medium (500) for emphasis only
- Use uppercase labels with wide letter-spacing (1.4px–2.4px) for categorization
- Interleave nature photography with product screenshots — this is core to the brand identity
- Maintain the almost monochromatic warm gray palette — no bold accent colors
- Use semi-transparent borders (`rgba(226, 226, 226, 0.35)`) for card containment instead of shadows
- Keep negative letter-spacing on headlines (-0.4px to -2.4px) for Matter's compressed display treatment

### Don't
- Use pure white (#ffffff) for text — it's always warm parchment (#faf9f6)
- Add bold accent colors (blue, red, green) — the system is deliberately monochromatic warm grays
- Apply bold weight (700+) to any text — Warp never goes above Medium (500)
- Use heavy drop shadows — depth comes from borders, photography, and opacity shifts
- Create cold or blue-tinted dark backgrounds — the warmth is essential
- Add decorative gradients or glow effects — the photography provides all visual interest
- Use tight, compressed layouts — the editorial spacing is generous and contemplative
- Mix in additional typefaces beyond the Matter family + Inter supplement

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <810px | Single column, stacked sections, hero text reduces to ~48px, hamburger nav |
| Tablet | 810px–1500px | 2-column features begin, photography scales, nav links partially visible |
| Desktop | >1500px | Full cinematic layout, 80px hero display, side-by-side photography + text |

### Touch Targets
- Pill buttons: 50px radius with 10px padding — comfortable touch targets
- Nav links: 16px text with surrounding padding for accessibility
- Mobile CTAs: Full-width pills on mobile for easy thumb reach

### Collapsing Strategy
- **Navigation**: Full horizontal nav → simplified mobile navigation
- **Hero text**: 80px display → 56px → 48px across breakpoints
- **Feature sections**: Side-by-side photography + text → stacked vertically
- **Photography**: Scales within containers, maintains cinematic aspect ratios
- **Section spacing**: Reduces proportionally — generous desktop → compact mobile

### Image Behavior
- Nature photography scales responsively, maintaining wide cinematic ratios
- Terminal screenshots maintain aspect ratios within responsive containers
- Video elements scale with 10px radius maintained
- No art direction changes — same compositions across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary Text: Warm Parchment (`#faf9f6`)
- Secondary Text: Ash Gray (`#afaeac`)
- Tertiary Text: Stone Gray (`#868584`)
- Button Background: Earth Gray (`#353534`)
- Border: Mist Border (`rgba(226, 226, 226, 0.35)`)
- Background: Deep warm near-black (page background)

### Example Component Prompts
- "Create a hero section on warm dark background with 80px Matter Regular heading in warm parchment (#faf9f6), line-height 1.0, letter-spacing -2.4px, and a dark pill button (#353534, 50px radius, #afaeac text)"
- "Design a feature card with semi-transparent border (rgba(226,226,226,0.35)), 12px radius, warm dark background, Matter Regular heading at 24px, and ash gray (#afaeac) body text at 18px"
- "Build a category label using Matter Regular at 12px, uppercase transform, letter-spacing 2.4px, stone gray (#868584) color — editorial magazine style"
- "Create a testimonial section with warm parchment quotes in Matter Regular 24px, attributed in stone gray (#868584), on dark background with minimal ornamentation"
- "Design a navigation bar with warm dark background, Matter Regular links at 16px in stone gray (#868584), hover to warm parchment (#faf9f6), and a dark pill CTA button (#353534) at the right"

### Iteration Guide
When refining existing screens generated with this design system:
1. Verify text color is warm parchment (#faf9f6) not pure white — the warmth is subtle but essential
2. Ensure all buttons use the restrained dark palette (#353534) — no bright or colorful CTAs
3. Check that Matter Regular (400) is the default weight — Medium (500) only for emphasis
4. Confirm uppercase labels have wide letter-spacing (1.4px–2.4px) — tight uppercase feels wrong here
5. The overall tone should feel warm and calm, like a well-designed magazine — not aggressive or tech-flashy

## 10. Voice & Tone

Warp's voice is **agentic-development-warm and terminal-magazine.** "The Agentic Development Environment" — terminal that's been redesigned for the AI agent era. Wide letter-spacing uppercase + warm dark canvas signal "well-designed magazine" rather than "tech-aggressive."

| Context | Tone |
|---|---|
| CTA | Verb-noun. "Download Warp", "Get Warp", "Try free" |
| Marketing | Magazine-warm. Real terminal screenshots, not stock images |
| Documentation | CLI-first, code-block heavy |
| Error | Calm. "Command failed. View error log." |

**Voice samples**
- Tagline: *"The Agentic Development Environment"* <!-- verified: warp.dev homepage 2026-05 -->

**Forbidden phrases.** "Revolutionary terminal". Aggressive comparison framing.

## 11. Brand Narrative

Warp was founded **June 2020** in San Francisco by **Zach Lloyd (Founder/CEO)** — formerly **Principal Engineer at Google** and **interim CTO at TIME** ([Warp — Wikipedia](https://en.wikipedia.org/wiki/Warp_(terminal)), [Sequoia Capital — Transforming the Command Line at Warp Speed](https://sequoiacap.com/article/warp-spotlight/), [Zach Lloyd — LinkedIn](https://www.linkedin.com/in/zachlloyd/)). Built natively in **Rust** for **macOS, Windows, and Linux**. **Show HN: Warp launched 2022** ([Hacker News — Show HN: Warp Rust-based terminal](https://news.ycombinator.com/item?id=30921231)). **Series B $50M (June 2023)** led by **Sequoia Capital**; total funding ~**$73M** across seed, A, B per recent reporting ([FinSMEs — Warp $50M Series B 2023-06](https://www.finsmes.com/2023/06/warp-raises-50m-series-b-funding-round.html)). Now positioned as **"The Agentic Development Environment"** — the first ADE built for coding with multiple agents (live `<title>` 2026-05 confirms). **Recently open-sourced** the Agentic Development Environment ([StreetInsider — Warp open-sources ADE with cloud agents](https://www.streetinsider.com/EZ+Newswire/Warp+Open-Sources+Its+Agentic+Development+Environment,+Introducing+a+New+Model+for+Building+Software+with+Cloud+Agents/26381208.html), [byteiota — 37K stars in days](https://byteiota.com/warp-terminal-open-source-agentic-dev-environment/)). The brand voice — warm dark canvas, wide letter-spacing uppercase, magazine-style chrome, **`oklch()` color-space tokens** — reflects "premium developer tool, not just another terminal." (NOTE: there's a separate **Warp YC W23** company — payroll compliance for Y Combinator startups — distinct from this Warp terminal.)

## 12. Principles

1. **Agentic-first.** *UI implication:* AI agent integration first-class, not bolted on.
2. **Warm and calm register.** *UI implication:* never tech-flashy or aggressive.
3. **Wide uppercase tracking 1.4-2.4px.** *UI implication:* never tight uppercase.
4. **Dark warm canvas.** *UI implication:* not pure black; warm dark.
5. **Magazine layout.** *UI implication:* generous section padding, photography-considered.

## 13. Personas

*Personas are fictional archetypes informed by Warp user segments (Mac-based engineers, terminal power users, AI-pair-programming adopters), not individual people.*

**Sergey Volkov, 36, Berlin.** Senior engineer. Warp replaced iTerm2 for AI commands + blocks.

**Sofia Park, 31, Seoul.** Backend engineer. Warp Drive for shared workflows with team.

**Marcus Webb, 41, San Francisco.** Engineering manager. Warp for production debugging sessions.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no commands)** | "Run your first command" |
| **Empty (no AI history)** | "Try `warp ai`" |
| **Loading (command)** | Terminal output streams |
| **Loading (AI generation)** | Per-token streaming |
| **Error (command)** | Stack trace block |
| **Error (AI rate limit)** | Tier limit + upgrade |
| **Success (committed)** | Block confirmation |
| **Success (shared)** | Warp Drive share link |
| **Skeleton (block list)** | Warm dark placeholders |
| **Disabled (no plan)** | Upgrade link |
| **Loading (long task)** | Persistent progress |

## 15. Motion & Easing

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Selection |
| `motion-fast` | 150ms | Hover |
| `motion-standard` | 250ms | Modal, panel |

Standard cubic-bezier; calm easing. `prefers-reduced-motion: reduce` removes hover transitions.

---

**Verified:** 2026-05-08 (omd:migrate run 62 — Apple-tier)
**Tier 1 sources:** warp.dev home + /pricing (live DOM via playwright — Primary **`oklch(0.97 0.01 84.6)` Warp Cream + `oklch(0.14 0.004 84.6)` Warp Espresso** text 3px / 36px / 4×16 / 14px·500; Outline 4px sub-tier; **Billing toggle 9999px** + **`oklab()` translucent** discipline. **`oklch()` for solid + `oklab()` for translucent — most advanced color-space convention in corpus**, surpassing Sanity's `display-p3()`).
**Tier 2 sources:** styles.refero.design / getdesign.md — no record.
**Tier 2 (Philosophy/founders/funding):** Wikipedia (Warp terminal), Sequoia Capital, LinkedIn (Lloyd ex-Google/TIME), HN (Show HN: Warp 2022), FinSMEs (2023-06 $50M Series B), Sacra, StreetInsider (OSS ADE), byteiota (37K stars).
**Style ref:** `claude` (warm magazine register). **Conflicts unresolved:** none. **Earlier addition:** `oklch()`/`oklab()` color-space convention + 3px sharp Primary canonical (prior footer values appear to be from a different surface state).
