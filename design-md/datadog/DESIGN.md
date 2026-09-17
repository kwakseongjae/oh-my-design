---
id: datadog
name: Datadog
country: US
category: backend-devops
homepage: "https://www.datadoghq.com"
primary_color: "#632ca6"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=datadoghq.com&sz=128"
verified: "2026-06-17"
added: "2026-06-17"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-17"
  note: "primary = live CTA + press-kit purple (#632ca6); vivid brand violet (#8000ff) printed in the official press kit, live-rendered as the #7700ff swatch band. Ink heading near-black (#212529); deep purple-black footer (#110617). Tier 2 (getdesign/refero) silent — US ref, Tier 1 live inspect is source of truth."
  colors:
    primary: "#632ca6"
    brand-violet: "#8000ff"
    brand-violet-live: "#7700ff"
    ink: "#212529"
    ink-pure: "#000000"
    body: "#333333"
    muted: "#555555"
    faint: "#c7c7c7"
    canvas: "#ffffff"
    surface: "#f5f5f5"
    surface-alt: "#eeeeee"
    dark-chip: "#323232"
    footer-bg: "#110617"
    hairline: "#e1e5e9"
    error: "#bf0000"
    on-primary: "#ffffff"
  typography:
    family: { display: "NationalWeb", body: "NationalWeb", fallback: "Helvetica, Arial, sans-serif" }
    display-hero: { size: 68, weight: 600, lineHeight: 1.0, use: "Hero headline, NationalWeb SemiBold" }
    section:      { size: 36, weight: 600, lineHeight: 1.11, use: "Section titles" }
    intro:        { size: 22, weight: 300, lineHeight: 1.43, use: "Hero sub / intro lede, NationalWeb Light" }
    nav:          { size: 18, weight: 600, lineHeight: 1.0, use: "Top nav links" }
    button:       { size: 18, weight: 700, lineHeight: 1.0, use: "Primary/secondary CTA label" }
    body:         { size: 18, weight: 400, lineHeight: 1.5, use: "Standard reading text" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 28, xxl: 48, section: 64 }
  rounded: { sm: 4, md: 6, lg: 8, full: 9999 }
  shadow:
    none: "none"
  components:
    button-primary: { type: button, bg: "#632ca6", fg: "#ffffff", radius: "4px", padding: "16px 24px", height: "54px", font: "18px / 700 NationalWeb", states: "transition 0.15s ease-in-out", use: "Primary CTA — Free trial / Get started" }
    button-primary-compact: { type: button, bg: "#632ca6", fg: "#ffffff", radius: "6px", padding: "8px 14px", height: "38px", font: "18px / 600 NationalWeb", use: "Compact primary CTA on pricing cards — Start Free Trial" }
    button-outline: { type: button, fg: "#632ca6", border: "1px solid #632ca6", radius: "4px", padding: "14px 24px 16px", height: "54px", font: "18px / 700 NationalWeb", use: "Secondary CTA on light — SEE THE PLATFORM" }
    button-ghost-dark: { type: button, fg: "#ffffff", border: "1px solid #ffffff", radius: "6px", height: "50px", font: "18px / 600 NationalWeb", use: "Secondary CTA on dark sections — Free Trial" }
    nav-link: { type: tab, fg: "#555555", font: "18px / 600 NationalWeb", padding: "8.5px 12px 9.5px", active: "purple #632ca6 text on active", use: "Top nav item" }
    input-search: { type: input, bg: "#ffffff", fg: "#212529", border: "1px solid #e1e5e9", radius: "4px", padding: "0px 10px 0px 35px", font: "18px NationalWeb", use: "Header search field, left icon inset" }
    card-pricing: { type: card, bg: "#ffffff", fg: "#212529", radius: "8px", padding: "0px 0px 16px", use: "Pricing plan card, 8px bottom corners, no shadow" }
    region-select: { type: badge, bg: "#ffffff", fg: "#000000", radius: "4px", padding: "7px 10px 9px 12px", height: "34px", font: "18px NationalWeb", use: "Region/datacenter select control on pricing" }
  components_harvested: true
---

# Design System Inspiration of Datadog

## 1. Visual Theme & Atmosphere

Datadog is the rare observability platform that refuses to dress in blue. In a category — backend monitoring, APM, cloud security — where nearly every competitor reaches for the same trustworthy enterprise blue, Datadog stakes its identity on **purple**: a confident, saturated `#632ca6` that runs every call-to-action, every link, every outline, and a more vivid brand violet `#8000ff` reserved for full-bleed brand moments. The homepage opens on a clean white canvas (`#ffffff`) with near-black ink (`#212529`) for headings, then punctuates the scroll with dramatic dark sections — pure black (`#000000`) bands and a deep purple-black footer (`#110617`) — so the purple reads as light against shadow. The result is dense-yet-legible: a product that has to show a lot of dashboard surface area but never lets the marketing feel cluttered.

The typographic voice is **NationalWeb**, a humanist sans that Datadog uses across both display and body. The hero headline ("AI-Powered Observability and Security") lands at a large 68px / weight 600 with a tight 1.0 line-height, projecting declarative authority without shouting. Section heads drop to 36px / 600, and a distinctive light-weight lede (22px / weight 300) carries intro copy — the weight-300 intro is the brand's quiet counterpoint to the heavy headline. Functional chrome (nav, buttons) sits at 18px, with nav at weight 600 and CTAs pushed to weight 700 for emphasis. The split is deliberate: heavy where it persuades, light where it sets context, regular where it informs.

What distinguishes Datadog from its devops peers is its **restraint with depth combined with boldness of color**. There are essentially no drop shadows — `box-shadow: none` across the hero, nav, pricing cards, and chips. Separation comes from flat tinted surfaces (`#f5f5f5`, `#eeeeee`), thin hairlines (`#e1e5e9`), and the high-contrast dark sections. Geometry is conservative and engineered: a tight 4px–8px radius scale, never pill-shaped, never harsh. Buttons are 4px (marketing) or 6px (product). The personality is that of a serious infrastructure tool that has hired excellent designers — precise, dense where it needs to be, and unmistakably purple. The brand even names the dog in its logo ("Bits") and publishes an exhibition-quality press kit that prints the brand colors as text: `#632CA6` and `#8000FF`.

**Key Characteristics:**
- Purple-as-identity (`#632ca6`) in a blue-dominated devops category — the deliberate differentiator
- Vivid brand violet (`#8000ff`, live-rendered as the `#7700ff` swatch band) for full-bleed brand moments
- NationalWeb humanist sans across display and body — 68px/600 hero, 22px/300 light lede
- Near-black ink (`#212529`) for headings instead of pure black — warm, premium
- Dramatic dark sections: pure black (`#000000`) bands + deep purple-black footer (`#110617`)
- Flat depth: no shadows; tinted `#f5f5f5` / `#eeeeee` surfaces + `#e1e5e9` hairlines do the separating
- Conservative 4px–8px radius scale — engineered, never pill-shaped
- Cool neutral ladder (`#333333` → `#555555` → `#c7c7c7`) for text hierarchy; error red `#bf0000`

## 2. Color Palette & Roles

### Primary
- **Datadog Purple** (`#632ca6`): Primary brand color and CTA background. The saturated purple on every primary button, link, and outline — the system's single "action" color, and the documented logo color on light backgrounds. Live-confirmed (`rgb(99,44,166)`) and printed verbatim in the official press kit.
- **Brand Violet** (`#8000ff`): The vivid brand violet printed in the press kit for full-bleed brand moments and the most saturated brand expressions. A louder companion to the workhorse `#632ca6`.
- **Brand Violet (live band)** (`#7700ff`): The press-kit hero swatch band as actually rendered in the live DOM (`rgb(119,0,255)`) — the brand violet at runtime.

### Ink & Neutral
- **Ink Navy-Black** (`#212529`): Primary text and heading color. A near-black with a faint cool cast, used instead of pure black for warmth and premium weight.
- **Pure Black** (`#000000`): Maximum-contrast dark section backgrounds and some heading text.
- **Body Grey** (`#333333`): Standard body copy and secondary reading text.
- **Muted Grey** (`#555555`): Nav links, tertiary labels, secondary UI text.
- **Faint Grey** (`#c7c7c7`): Disabled text, placeholder, lowest-emphasis labels.

### Surface & Hairline
- **Pure White** (`#ffffff`): Page background, card surfaces, button text on purple/dark, logo-on-purple.
- **Surface Grey** (`#f5f5f5`): Light tinted surface for alternating content sections.
- **Surface Alt** (`#eeeeee`): A slightly deeper grey for secondary blocks and dividers.
- **Dark Chip** (`#323232`): Near-black surface for dark UI chips and inset controls.
- **Footer Black** (`#110617`): The deep purple-black footer background — black with a whisper of the brand violet underneath.
- **Hairline** (`#e1e5e9`): Thin input/divider borders — the primary separation device given the shadow-free system.

### Semantic
- **Error Red** (`#bf0000`): Validation errors, destructive states, required-field messaging.

## 3. Typography Rules

### Font Family
- **Display & Body**: `NationalWeb` (with fallback `Helvetica, Arial, sans-serif`) — a humanist sans used across headlines, nav, buttons, and body. The same family carries both display and reading text; hierarchy comes from size and weight, not a second typeface.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Display Hero | NationalWeb | 68px (4.25rem) | 600 | 1.0 (68px) | Hero headline, SemiBold, tight |
| Section Heading | NationalWeb | 36px (2.25rem) | 600 | 1.11 (40px) | Section titles |
| Intro / Lede | NationalWeb | 22px (1.38rem) | 300 | 1.43 (31px) | Hero sub / intro copy, Light |
| Nav Link | NationalWeb | 18px (1.13rem) | 600 | 1.0 | Top navigation items |
| Button | NationalWeb | 18px (1.13rem) | 700 | 1.0 | Primary/secondary CTA labels |
| Body | NationalWeb | 18px (1.13rem) | 400 | 1.5 | Standard reading text |

### Principles
- **One family, three weights**: NationalWeb carries everything; the system signals hierarchy with weight (300 lede / 400 body / 600 heads & nav / 700 CTAs) rather than mixing typefaces.
- **Heavy headline, light lede**: 68px/600 hero against a 22px/300 intro — the weight contrast is the primary hierarchy device.
- **Tight display line-height**: Hero runs at 1.0 line-height (68px on 68px) for a dense, engineered headline block.
- **CTA weight bump**: Buttons go to weight 700 — one step heavier than nav (600) — so the action reads as the heaviest text on the row.

## 4. Component Stylings

### Buttons

**Primary CTA**
- Background: `#632ca6`
- Text: `#ffffff`
- Radius: 4px
- Padding: 16px 24px
- Height: 54px
- Font: 18px NationalWeb weight 700
- Hover: background-color transition 0.15s ease-in-out
- Use: Primary marketing CTA — "Free trial", "Get started"

**Primary CTA (Compact)**
- Background: `#632ca6`
- Text: `#ffffff`
- Radius: 6px
- Padding: 8px 14px
- Height: 38px
- Font: 18px NationalWeb weight 600
- Use: Compact primary action on pricing cards — "Start Free Trial"

**Outline (Secondary, light)**
- Background: transparent
- Text: `#632ca6`
- Border: 1px solid `#632ca6`
- Radius: 4px
- Padding: 14px 24px 16px
- Height: 54px
- Font: 18px NationalWeb weight 700
- Use: Secondary CTA on light backgrounds — "SEE THE PLATFORM"

**Ghost (on dark)**
- Background: transparent
- Text: `#ffffff`
- Border: 1px solid `#ffffff`
- Radius: 6px
- Height: 50px
- Font: 18px NationalWeb weight 600
- Use: Secondary CTA inside dark sections — "Free Trial"

### Inputs & Forms

**Search Field**
- Background: `#ffffff`
- Text: `#212529`
- Border: 1px solid `#e1e5e9`
- Radius: 4px
- Padding: 0px 10px 0px 35px
- Font: 18px NationalWeb
- Placeholder: "Search"
- Use: Header search field, left-icon inset (35px left padding)

### Cards & Containers

**Pricing Card**
- Background: `#ffffff`
- Text: `#212529`
- Radius: 8px (bottom corners — `0px 0px 8px 8px`)
- Padding: 0px 0px 16px
- Shadow: none
- Use: Pricing plan card; flat, hairline/tint-separated, no elevation

### Badges & Controls

**Region Select**
- Background: `#ffffff`
- Text: `#000000`
- Radius: 4px
- Padding: 7px 10px 9px 12px
- Height: 34px
- Font: 18px NationalWeb
- Use: Region/datacenter select control on pricing ("US (US1, US3, US5)")

### Navigation
- Background: `#ffffff`
- Text: `#555555`
- Font: 18px NationalWeb weight 600
- Padding: 8.5px 12px 9.5px
- Active: purple `#632ca6` text on active item
- Use: Top horizontal nav ("Product", "Customers", "Pricing", "Solutions", "Docs")

---

**Verified:** 2026-06-17 (omd:add-reference CREATE — Tier 1 live inspect, 3 surfaces)
**Tier 1 sources:** https://www.datadoghq.com, https://www.datadoghq.com/about/resources/, https://www.datadoghq.com/pricing/
**Tier 2 sources:** getdesign.md/datadog — NO DATA (not listed); styles.refero.design/?q=datadog — not listed (fuzzy results only)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: ~4px
- Scale: 4px, 8px, 12px, 16px, 24px, 28px, 48px, 64px
- Notable: CTA padding lands at 16px 24px (primary) and nav at 8.5px 12px — tight, engineered hit areas

### Grid & Container
- Centered hero with the 68px NationalWeb headline as the anchor, light 22px lede beneath
- Primary + secondary CTA pair side-by-side (filled purple + purple outline)
- Feature/section bands alternate between white (`#ffffff`), light tint (`#f5f5f5`), and dramatic dark (`#000000`) full-width zones
- Pricing uses a multi-column card grid; cards group plan tiers with 8px bottom radius
- Deep purple-black footer (`#110617`) closes the page as a heavy anchor

### Whitespace Philosophy
- **Dense data, breathing chrome**: the product shows dashboard-heavy density, but the marketing surface keeps generous vertical rhythm between sections.
- **Flat segmentation**: sections separate by background — white vs `#f5f5f5` tint vs `#000000` dark — and by hairlines, not by shadow.
- **Light/dark cadence**: alternating white and black bands create dramatic rhythm and let the purple read as light against shadow.

### Border Radius Scale
- Small (4px): marketing buttons, inputs, region controls — the workhorse
- Medium (6px): product/compact buttons and ghost CTAs
- Large (8px): cards, content containers
- Full (9999px): rare circular elements only

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline text, most surfaces |
| Tint (Level 1) | `#f5f5f5` / `#eeeeee` background shift | Card/section separation without elevation |
| Hairline (Level 2) | `1px solid #e1e5e9` border | Input outlines, dividers |
| Contrast (Level 3) | `#000000` / `#110617` dark band | Dramatic section/footer separation via color, not shadow |

**Shadow Philosophy**: Datadog is a near-shadowless system. Live inspection found `box-shadow: none` across the hero, nav, pricing cards, and chips. Depth and grouping are communicated through flat tinted surfaces (`#f5f5f5`, `#eeeeee`), thin `#e1e5e9` hairlines, and — most distinctively — high-contrast dark bands (`#000000`) and the deep purple-black footer (`#110617`). This keeps the infrastructure UI feeling clean, fast, and dense without the heavy "card stack" look. When emphasis is needed, the system reaches for color (purple `#632ca6`) or contrast (dark sections), never elevation.

## 7. Do's and Don'ts

### Do
- Use Datadog purple (`#632ca6`) for every primary action, link, and outline — it's the single "action" color
- Reserve the vivid brand violet (`#8000ff`) for full-bleed brand moments only
- Use NationalWeb across display and body — signal hierarchy with weight (300/400/600/700)
- Use near-black ink (`#212529`) for headings instead of pure black
- Separate sections with flat tints (`#f5f5f5`, `#eeeeee`), hairlines (`#e1e5e9`), and dark bands — not shadows
- Use dramatic dark sections (`#000000`) and the deep purple-black footer (`#110617`) to make purple read as light
- Keep radius in the 4px–8px range — 4px marketing buttons, 6px product, 8px cards
- Bump CTA weight to 700 — heavier than nav (600) — so the action is the heaviest text on the row

### Don't
- Default to enterprise blue — purple is Datadog's deliberate category differentiator
- Spread the vivid violet (`#8000ff`) across routine UI — it dilutes the brand-moment signal
- Use drop shadows for elevation — Datadog is a flat, shadow-free system
- Use pure black (`#000000`) for body text — reserve near-black ink `#212529` for headings, `#333333` for body
- Use pill or sharp-square corners on buttons — stay in the conservative 4px–8px scale
- Mix in a second accent hue for actions — purple is the only action color
- Set the hero in a light weight — display is 600; only the intro lede goes to 300
- Invert, recolor, box, or gradient the "Bits" logo — keep it white on purple/dark, purple on light

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero compresses, CTA pair stacks |
| Tablet | 640-1024px | Moderate padding, 2-up feature/pricing cards |
| Desktop | 1024-1440px | Full layout, centered hero, multi-column pricing grid |

### Touch Targets
- Primary CTA at 54px height with 16px 24px padding — comfortably tappable
- Compact product CTA at 38px height for in-card actions
- Nav links spaced at 8.5px 12px padding within the header row

### Collapsing Strategy
- Hero: 68px NationalWeb headline scales down on mobile, weight 600 maintained
- CTA pair: side-by-side filled + outline → stacked on narrow viewports
- Pricing cards: multi-column → 2-up → stacked single column
- White/tint/dark alternating bands maintain full-width treatment

### Image Behavior
- Dashboard screenshots and product imagery carry no shadow at any size, consistent with the flat system
- Cards maintain 8px radius across breakpoints
- Dark sections keep `#000000` / `#110617` treatment at all widths

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA / link: Datadog Purple (`#632ca6`)
- Brand-moment violet: Brand Violet (`#8000ff`)
- Background: Pure White (`#ffffff`)
- Tinted surface: Surface Grey (`#f5f5f5`), Surface Alt (`#eeeeee`)
- Heading text: Ink (`#212529`)
- Body text: Body Grey (`#333333`)
- Muted / nav text: Muted Grey (`#555555`)
- Faint / disabled: Faint Grey (`#c7c7c7`)
- Dark section: Pure Black (`#000000`)
- Footer: Footer Black (`#110617`)
- Hairline: `#e1e5e9`
- Error: `#bf0000`

### Example Component Prompts
- "Create a hero on white background. Headline at 68px NationalWeb weight 600, line-height 1.0, color #212529. Light lede below at 22px weight 300, color #333333. A purple CTA pair: filled (#632ca6 background, white text, 4px radius, 16px 24px padding, weight 700 — 'Free trial') and outline (transparent, 1px solid #632ca6, #632ca6 text, 4px radius — 'See the platform')."
- "Design a pricing card: white #ffffff background, 8px bottom radius, no shadow, 16px bottom padding. Title 36px NationalWeb weight 600, #212529. Compact purple CTA: #632ca6 background, white text, 6px radius, 8px 14px padding, weight 600."
- "Build a dark section: #000000 background, white text. Section title 36px NationalWeb weight 600. Ghost CTA: transparent, 1px solid #ffffff, white text, 6px radius."
- "Create a header search input: white background, 1px solid #e1e5e9 border, 4px radius, left-icon inset (35px left padding), #212529 text at 18px NationalWeb, placeholder 'Search'."
- "Create top nav: white header. NationalWeb 18px weight 600 links, #555555 text, purple #632ca6 on active. Purple 'Get started' CTA right-aligned, 4px radius."

### Iteration Guide
1. Purple (`#632ca6`) is the single action color — every CTA, link, and outline; never default to blue
2. NationalWeb everywhere; signal hierarchy with weight (300 lede / 400 body / 600 head & nav / 700 CTA)
3. No shadows — separate with `#f5f5f5`/`#eeeeee` tint, `#e1e5e9` hairlines, and `#000000`/`#110617` dark bands
4. Radius stays 4px–8px — 4px marketing buttons, 6px product, 8px cards
5. Heading color is `#212529` ink, body is `#333333`, never pure black for body
6. Use dark sections to make the purple read as light against shadow
7. Reserve the vivid violet (`#8000ff`) for full-bleed brand moments only

---

## 10. Voice & Tone

Datadog's voice is **technical, confident, and plainspoken** — an infrastructure company that addresses engineers as peers and never reaches for hype. The hero line "AI-Powered Observability and Security" sets the register: capability-first, declarative, zero exclamation points. Copy names things precisely (metrics, traces, logs) and trusts the reader to know what they mean. The brand even extends this plainness to its own identity guidance — the press kit flatly corrects "Data Dog" and "DataDog" to the single correct "Datadog" and names the logo dog "Bits."

| Context | Tone |
|---|---|
| Hero headlines | Declarative, capability-first. "AI-Powered Observability and Security." Never superlative. |
| Product descriptions | Concrete technical capability — "metrics, traces, and logs in one place." Decode, don't decorate. |
| CTAs | Direct imperatives. "Get started free", "Free trial", "See the platform". |
| Docs / technical | Dense, precise, engineer-to-engineer; examples precede prose. |
| Brand guidance | Plain and corrective — "one word with only the first letter capitalized". |

**Voice samples (verbatim from live surfaces):**
- "AI-Powered Observability and Security" — hero H1 (capability-first). *(verified live 2026-06-17)*
- "Cloud Monitoring as a Service" — page title meta (positioning). *(verified live 2026-06-17)*
- "Our company name is \"Datadog\": one word with only the first letter capitalized." — press kit (plain, corrective). *(verified live 2026-06-17, /about/resources/)*

**Forbidden register**: hype superlatives ("revolutionary", "game-changer"), exclamation-heavy marketing, vague benefit-speak that hides the actual capability, and any logo treatment the press kit forbids (inverting, recoloring, gradients, boxing).

## 11. Brand Narrative

Datadog was founded in **2010** by **Olivier Pomel (CEO)** and **Alexis Lê-Quôc (CTO)**, two engineers who had worked together at Wireless Generation and kept hitting the same wall: developers and operations teams lived in separate tools and blamed each other when systems broke. Datadog's founding premise was to put **dev and ops on the same page** — a single platform where metrics, traces, and logs from across the whole stack are correlated in one place. (The company name and the "Bits" dog mascot lean into that friendly, approachable framing for an otherwise deeply technical product.)

The product grew into one of the defining observability and cloud-security platforms of the cloud era, expanding from infrastructure monitoring into APM, log management, security, and AI-powered analysis — the "AI-Powered Observability and Security" positioning stated on today's homepage. Datadog went public on Nasdaq in **2019** and became one of the most prominent infrastructure-software companies of its generation.

What Datadog refuses, visible in its design: the interchangeable enterprise-blue palette of its category (it wears purple instead), and heavy decorative chrome (it stays flat and shadowless). What it embraces: a single confident purple as the action color, a humanist NationalWeb voice, dramatic dark/light contrast in place of elevation, and an exhibition-quality brand surface that takes its own identity — down to naming the dog — seriously.

## 12. Principles

1. **Purple, not blue.** Datadog's identity is a deliberate refusal of the category-default enterprise blue. *UI implication:* use `#632ca6` as the single action color everywhere; never substitute a blue accent.
2. **One platform, one signal.** The product correlates metrics, traces, and logs in one place; the design keeps one action color so the next step is never ambiguous. *UI implication:* reserve purple exclusively for primary actions and links.
3. **Flat and dense.** Infrastructure tooling shows a lot of surface area; depth comes from contrast, not shadow. *UI implication:* separate with tint, hairlines, and dark bands — no drop shadows.
4. **Engineer to engineer.** Copy and UI address technical peers plainly. *UI implication:* precise labels over decorative benefit-speak; examples over adjectives.
5. **Take the brand seriously.** A named mascot, a corrective press kit, printed brand hexes. *UI implication:* respect the logo rules (white on purple/dark, purple on light; never invert, gradient, box, or recolor).

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Datadog user segments (SREs, platform engineers, DevOps leads, security engineers), not individual people.*

**Marcus Hale, 34, Austin.** A site-reliability engineer at a mid-market SaaS company. Lives in dashboards during incidents and judges a tool by how fast it correlates a metric spike to the offending trace. Chose Datadog because everything — infra, APM, logs — is in one place instead of three vendors.

**Priya Nair, 29, Bangalore.** A platform engineer standing up observability for a fast-growing fintech. Values the plain technical copy and the density of the product; distrusts monitoring tools whose marketing leans on hype rather than capability.

**Daniel Brooks, 41, London.** A security engineer adopting Datadog's cloud security alongside the team's existing observability. Appreciates that one platform now covers both observability and security, and that the brand treats its own identity with the same rigor he expects of the product.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no data in dashboard)** | White canvas. Single Ink (`#212529`) line explaining no data is flowing yet, with one purple (`#632ca6`) CTA to connect a source. No illustration clutter. |
| **Empty (saved view, none yet)** | Muted Grey (`#555555`) single line: nothing saved yet, plus a path back to create one. Calm and plain. |
| **Loading (query/results fetch)** | Skeleton rows on `#f5f5f5` tinted surface at final card dimensions, 8px radius. No shadow shimmer — flat pulse consistent with the shadowless system. |
| **Loading (in-place refresh)** | Subtle purple (`#632ca6`) progress indicator; previous values stay visible during refresh. |
| **Error (query failed)** | Inline message in Error Red (`#bf0000`) with a plain-language explanation and a retry. States what to do next, never a bare "Something went wrong". |
| **Error (form validation)** | Field-level message below the input in `#bf0000`; describes what's valid, not just "Required". |
| **Success (source connected)** | Brief inline confirmation in a calm tone; next-step detail linked immediately below. No celebratory emoji. |
| **Skeleton** | `#f5f5f5` / `#eeeeee` blocks at final dimensions, 4px–8px radius, flat pulse. |
| **Disabled** | Faint Grey (`#c7c7c7`) text on reduced-opacity surface; purple actions fade rather than turn grey to preserve brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 150ms | Hover, button background, focus (live: `0.15s ease-in-out` on the primary CTA) |
| `motion-standard` | 200ms | Card/section reveal, dropdown, sheet |
| `motion-slow` | 320ms | Page-level transitions, hero reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-in-out` | `cubic-bezier(0.42, 0, 0.58, 1)` | Hover/background transitions (live default on CTAs) |
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, dropdowns |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |

**Motion rules**: Motion is functional and restrained — consistent with the flat, dense aesthetic. Live inspection found the primary CTA carrying `transition: background-color 0.15s ease-in-out`, so hover color shifts are quick and quiet. No bounce or spring — an infrastructure-monitoring product signals steadiness, not playfulness. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the product remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-17) via playwright getComputedStyle on 3 surfaces:
- https://www.datadoghq.com/ — hero H1, nav, primary/secondary CTA, search input, dark sections, footer
- https://www.datadoghq.com/about/resources/ — official "Logos & Press Kit": brand colors printed as text (#632CA6, #8000FF), logo naming ("Bits"), name-capitalization rule, logo usage do/don'ts
- https://www.datadoghq.com/pricing/ — pricing cards, region-select control, compact CTA geometry
All token-level claims (§1-9) are sourced from this live inspection. Full raw samples in web/references/datadog/.verification.md.

Voice samples (§10): hero H1 and page-title meta are verbatim from the live homepage; the
name-capitalization line is verbatim from the live press kit (/about/resources/).

Brand narrative (§11): Datadog founded 2010 by Olivier Pomel (CEO) and Alexis Lê-Quôc (CTO);
"dev and ops on the same page" founding framing; Nasdaq IPO 2019. These are widely documented
public facts about the company; founding/IPO details beyond the live surfaces are general public
knowledge, not directly quoted from a verified Datadog statement in this turn. The "Bits" mascot
name and the current "AI-Powered Observability and Security" positioning ARE verified from the live
press kit and homepage respectively.

Personas (§13) are fictional archetypes informed by publicly observable Datadog user segments
(SREs, platform engineers, DevOps/security engineers). Names are illustrative; they do not refer
to real people.

Interpretive claims (e.g., "purple not blue as a deliberate category refusal", "flat and dense
as a rejection of decorative chrome") are editorial readings connecting Datadog's observed design
to its positioning, not directly sourced Datadog statements.

Tier 2: getdesign.md/datadog returned NO DATA; styles.refero.design/?q=datadog returned only fuzzy
unrelated results (no genuine Datadog page). US ref — Tier 1 live inspect is the source of truth.
-->
