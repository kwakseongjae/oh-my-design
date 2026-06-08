---
id: miro
name: Miro
country: US
category: design-tools
homepage: "https://miro.com"
primary_color: "#ffd02f"
logo:
  type: simpleicons
  slug: miro
verified: "2026-05-15"
omd: "0.1"
ds:
  name: Mirotone
  url: "https://mirotone.xyz"
  type: system
  description: Miro's CSS component library for apps built on the Miro platform.
  og_image: "https://www.mirotone.xyz/cover.png"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    brand-yellow: "#ffd02f"
    ink: "#1c1c1e"
    canvas: "#ffffff"
    blue: "#5b76fe"
    blue-pressed: "#2a41b6"
    coral: "#ffc6c6"
    teal: "#c3faf5"
    teal-dark: "#187574"
    orange: "#ffe6cd"
    rose: "#ffd8f4"
    pink: "#fde0f0"
    red: "#fbd4d4"
    success: "#00b473"
    slate: "#555a6a"
    placeholder: "#a5a8b5"
    border: "#c7cad5"
    border-input: "#e9eaef"
  typography:
    family: { sans: "Roobert PRO", mono: "Roobert PRO" }
    display-hero: { size: 56, weight: 400, lineHeight: 1.15, tracking: -1.68, use: "Hero, Roobert PRO Medium" }
    section:      { size: 48, weight: 400, lineHeight: 1.15, tracking: -1.44, use: "Section heading, Roobert PRO Medium" }
    card-title:   { size: 24, weight: 400, lineHeight: 1.15, tracking: -0.72, use: "Card title, Roobert PRO Medium" }
    subheading:   { size: 22, weight: 400, lineHeight: 1.35, tracking: -0.44, use: "Sub-heading, Noto Sans" }
    feature:      { size: 18, weight: 600, lineHeight: 1.35, use: "Feature, Roobert PRO Medium" }
    body:         { size: 18, weight: 400, lineHeight: 1.45, use: "Body, Noto Sans" }
    body-std:     { size: 16, weight: 400, lineHeight: 1.50, tracking: -0.16, use: "Standard body, Noto Sans" }
    button:       { size: 17.5, weight: 700, lineHeight: 1.29, tracking: 0.175, use: "Button, Roobert PRO Medium" }
    caption:      { size: 14, weight: 400, lineHeight: 1.71, use: "Caption, Roobert PRO Medium" }
    micro:        { size: 10.5, weight: 400, lineHeight: 0.90, use: "Uppercase micro label, Roobert PRO" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 8, md: 12, lg: 24, full: 9999 }
  shadow:
    ring: "rgb(224,226,232) 0px 0px 0px 1px"
  components:
    button-primary: { type: button, bg: "#5b76fe", fg: "#ffffff", radius: 8, padding: "7px 12px", font: "17.5px/700", use: "Primary CTA, blue" }
    button-outline: { type: button, bg: "transparent", fg: "#1c1c1e", radius: 8, padding: "7px 12px", font: "17.5px/700", use: "Secondary outlined button" }
    button-circle: { type: button, bg: "#ffffff", radius: 9999, padding: "12px", use: "Circular icon button, ring shadow" }
    input: { type: input, bg: "#ffffff", fg: "#1c1c1e", radius: 8, padding: "16px", font: "16px/400", use: "Standard input" }
    card: { type: card, bg: "#ffffff", radius: 12, padding: "16px", use: "Default card with ring-shadow border" }
    card-pastel: { type: card, bg: "#ffc6c6", fg: "#1c1c1e", radius: 12, padding: "24px", use: "Feature card with pastel surface" }
    badge: { type: badge, bg: "#5b76fe", fg: "#ffffff", radius: 8, padding: "4px 8px", font: "12px/400", use: "Default badge" }
    badge-success: { type: badge, bg: "#00b473", fg: "#ffffff", radius: 8, padding: "4px 8px", use: "Success badge" }
  components_harvested: true
---

# Design System Inspiration of Miro

## 1. Visual Theme & Atmosphere

Miro's website is a clean, collaborative-tool-forward platform that communicates "visual thinking" through generous whitespace, pastel accent colors, and a confident geometric font. The design uses a predominantly white canvas with near-black text (`#1c1c1e`) and a distinctive pastel color palette — coral, rose, teal, orange, yellow, moss — each representing different collaboration contexts.

The typography uses Roobert PRO Medium as the primary display font with OpenType character variants (`"blwf", "cv03", "cv04", "cv09", "cv11"`) and negative letter-spacing (-1.68px at 56px). Noto Sans handles body text with its own stylistic set (`"liga" 0, "ss01", "ss04", "ss05"`). The design is built with Framer, giving it smooth animations and modern component patterns.

**Key Characteristics:**
- White canvas with near-black (`#1c1c1e`) text
- Roobert PRO Medium with multiple OpenType character variants
- Pastel accent palette: coral, rose, teal, orange, yellow, moss (light + dark pairs)
- Blue 450 (`#5b76fe`) as primary interactive color
- Success green (`#00b473`) for positive states
- Generous border-radius: 8px–50px range
- Framer-built with smooth motion patterns
- Ring shadow border: `rgb(224,226,232) 0px 0px 0px 1px`

## 2. Color Palette & Roles

### Primary
- **Near Black** (`#1c1c1e`): Primary text
- **White** (`#ffffff`): `--tw-color-white`, primary surface
- **Blue 450** (`#5b76fe`): `--tw-color-blue-450`, primary interactive
- **Actionable Pressed** (`#2a41b6`): `--tw-color-actionable-pressed`

### Pastel Accents (Light/Dark pairs)
- **Coral**: Light `#ffc6c6` / Dark `#600000`
- **Rose**: Light `#ffd8f4` / Dark (implied)
- **Teal**: Light `#c3faf5` / Dark `#187574`
- **Orange**: Light `#ffe6cd`
- **Yellow**: Dark `#746019`
- **Moss**: Dark `#187574`
- **Pink** (`#fde0f0`): Soft pink surface
- **Red** (`#fbd4d4`): Light red surface
- **Dark Red** (`#e3c5c5`): Muted red

### Semantic
- **Success** (`#00b473`): `--tw-color-success-accent`

### Neutral
- **Slate** (`#555a6a`): Secondary text
- **Input Placeholder** (`#a5a8b5`): `--tw-color-input-placeholder`
- **Border** (`#c7cad5`): Button borders
- **Ring** (`rgb(224,226,232)`): Shadow-as-border

## 3. Typography Rules

### Font Families
- **Display**: `Roobert PRO Medium`, fallback: Placeholder — `"blwf", "cv03", "cv04", "cv09", "cv11"`
- **Display Variants**: `Roobert PRO SemiBold`, `Roobert PRO SemiBold Italic`, `Roobert PRO`
- **Body**: `Noto Sans` — `"liga" 0, "ss01", "ss04", "ss05"`

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing |
|------|------|------|--------|-------------|----------------|
| Display Hero | Roobert PRO Medium | 56px | 400 | 1.15 | -1.68px |
| Section Heading | Roobert PRO Medium | 48px | 400 | 1.15 | -1.44px |
| Card Title | Roobert PRO Medium | 24px | 400 | 1.15 | -0.72px |
| Sub-heading | Noto Sans | 22px | 400 | 1.35 | -0.44px |
| Feature | Roobert PRO Medium | 18px | 600 | 1.35 | normal |
| Body | Noto Sans | 18px | 400 | 1.45 | normal |
| Body Standard | Noto Sans | 16px | 400–600 | 1.50 | -0.16px |
| Button | Roobert PRO Medium | 17.5px | 700 | 1.29 | 0.175px |
| Caption | Roobert PRO Medium | 14px | 400 | 1.71 | normal |
| Small | Roobert PRO Medium | 12px | 400 | 1.15 | -0.36px |
| Micro Uppercase | Roobert PRO | 10.5px | 400 | 0.90 | uppercase |

## 4. Component Stylings

### Buttons

**Blue Primary**
- Background: `#5b76fe` (`--tw-color-blue-450`)
- Text: `#ffffff`
- Radius: 8px
- Padding: 7px 12px
- Font: 17.5px / 700 / Roobert PRO Medium
- Hover: `#2a41b6` (`--tw-color-actionable-pressed`)
- Use: Primary CTA — implied from interactive blue

**Outlined**
- Background: transparent
- Text: `#1c1c1e`
- Border: 1px solid `#c7cad5`
- Radius: 8px
- Padding: 7px 12px
- Font: 17.5px / 700 / Roobert PRO Medium
- Use: Secondary outlined button

**White Circle**
- Background: `#ffffff`
- Radius: 50%
- Padding: 12px (icon button)
- Shadow: `rgb(224,226,232) 0px 0px 0px 1px` (ring shadow)
- Use: Circular icon button

### Inputs

**Default**
- Background: `#ffffff`
- Text: `#1c1c1e`
- Border: 1px solid `#e9eaef`
- Radius: 8px
- Padding: 16px
- Font: 16px / 400 / Noto Sans
- Placeholder: `#a5a8b5` (`--tw-color-input-placeholder`)
- Use: Standard input

### Cards

**Standard**
- Background: `#ffffff`
- Radius: 12px
- Padding: 16px
- Shadow: `rgb(224,226,232) 0px 0px 0px 1px` (ring shadow)
- Use: Default card with ring-shadow border

**Pastel Surface**
- Background: pastel accent (e.g., `#ffc6c6` Coral, `#c3faf5` Teal, `#ffe6cd` Orange, `#fde0f0` Pink)
- Text: `#1c1c1e`
- Radius: 12-24px
- Padding: 24px
- Use: Feature card with pastel surface

**Large Panel**
- Background: `#ffffff`
- Radius: 24px
- Padding: 32px
- Shadow: `rgb(224,226,232) 0px 0px 0px 1px`
- Use: Large containers

### Badges

**Default**
- Background: `#5b76fe`
- Text: `#ffffff`
- Radius: 8px
- Padding: 4px 8px
- Font: 12px / 400 / Roobert PRO Medium
- Use: Inferred from §1-§2 baseline (no explicit DS variant in source).

**Success**
- Background: `#00b473` (`--tw-color-success-accent`)
- Text: `#ffffff`
- Radius: 8px
- Padding: 4px 8px
- Use: Inferred from §1-§2 baseline (no explicit DS variant in source).

## 5. Layout Principles
- Spacing: 1–24px base scale
- Radius: 8px (buttons), 10px–12px (cards), 20px–24px (panels), 40px–50px (large containers)
- Ring shadow: `rgb(224,226,232) 0px 0px 0px 1px`

## 6. Depth & Elevation
Minimal — ring shadow + pastel surface contrast

## 7. Do's and Don'ts
### Do
- Use pastel light/dark pairs for feature sections
- Apply Roobert PRO with OpenType character variants
- Use Blue 450 (#5b76fe) for interactive elements
### Don't
- Don't use heavy shadows
- Don't mix more than 2 pastel accents per section

## 8. Responsive Behavior
Breakpoints: 425px, 576px, 768px, 896px, 1024px, 1200px, 1280px, 1366px, 1700px, 1920px

## 9. Agent Prompt Guide
### Quick Color Reference
- Text: Near Black (`#1c1c1e`)
- Background: White (`#ffffff`)
- Interactive: Blue 450 (`#5b76fe`)
- Success: `#00b473`
- Border: `#c7cad5`
### Example Component Prompts
- "Create hero: white background. Roobert PRO Medium 56px, line-height 1.15, letter-spacing -1.68px. Blue CTA (#5b76fe). Outlined secondary (1px solid #c7cad5, 8px radius)."

## 10. Voice & Tone

Miro's voice is **collaboration-warm and workshop-confident.** "AI 이노베이션 워크스페이스" (homepage 2026-05) — brand evolution from "online whiteboard" to "AI innovation workspace". Marketing copy emphasizes team workshops + collaborative moments. Yellow `#fde050` CTA signals "playful, sticky-note inspired."

| Context | Tone |
|---|---|
| CTA | Verb. "Sign up free", "Save your spot", "Start free" |
| Marketing | Workshop-language. Customer co-creation moments |
| Documentation | Visual-heavy, screenshot-driven |
| Error | Specific. "Board permissions changed. Refresh to see updates." |

**Voice samples**
- Marketing CTA: *"SAVE YOUR SPOT"* <!-- verified: miro.com/ko homepage 2026-05 -->

**Forbidden phrases.** "Revolutionary whiteboard". Aggressive Mural-comparison framing.

## 11. Brand Narrative

Miro was founded **2011 as RealtimeBoard** in **Perm, Russia** (~1,150 km east of Moscow) by **Andrey Khusid** and **Oleg Shardin** ([Miro — Wikipedia](https://en.wikipedia.org/wiki/Miro_(collaboration_platform)), [bne IntelliNews — Miro $17.5B](https://www.intellinews.com/founded-in-russia-11-years-ago-the-miro-visual-collaboration-software-startup-is-now-valued-at-17-5bn-231861/)). Khusid + Shardin had previously **founded the design agency Vitamin Group in 2005** offering web/product/app design services; **2012 they left Vitamin to focus on RealtimeBoard full-time**. Funding ladder: **$25M Series A (2018)** led by **Accel** with Altair Capital + Scale Venture Partners → **$50M Series B (April 2020)**, after which user base grew **5×** (5M → 30M) and paying customers **5.5×** (20K → 130K) → **$400M Series C (January 2022)** co-led by **ICONIQ Growth + Accel + Atlassian + Dragoneer + GIC + Scale Venture Partners** at **$17.5B post-money valuation**, total funding ~**$476M** ([Miro Newsroom — $400M Series C](https://miro.com/newsroom/miro-series-c/), [BusinessWire — Series B $50M April 2020](https://www.businesswire.com/news/home/20200427005109/en/Miro-Secures-%2450-Million-in-Series-B-Funding-for-Virtual-Whiteboarding-for-Remote-Teams)). **Rebranded RealtimeBoard → Miro in 2019** reflecting a global identity. Strong adoption in design teams, agile workshops, and consulting. AI features added 2024-2025 to position Miro as the **"AI innovation workspace"** (live `miro.com/ko` page-title confirms 2026-05).

## 12. Principles

1. **Yellow signals action.** `#fde050` CTA inherited from sticky-note culture. *UI implication:* primary actions yellow on white.
2. **Roobert PRO is the type voice.** Medium weight throughout. *UI implication:* don't substitute system fonts.
3. **Workshop > toolbox.** *UI implication:* product positioning treats Miro as a meeting/workshop space, not a static design tool.
4. **Generous radius for warmth.** *UI implication:* 8px+ on cards, 16px+ on hero modules.
5. **AI as workshop participant.** *UI implication:* AI features framed as joining the workshop, not replacing humans.

## 13. Personas

*Personas are fictional archetypes informed by Miro user segments (UX designers, agile coaches, consulting partners), not individual people.*

**Yuki Tanaka, 32, Tokyo.** UX designer at agency. Runs client workshops in Miro 3× per week.

**Marcus Chen, 41, San Francisco.** Agile coach at Series C SaaS. Sprint planning + retros in Miro.

**Sofia Russo, 36, Milan.** Independent design consultant. Miro for client research + brainstorming.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no boards)** | "Create your first board" CTA + template gallery |
| **Empty (no team)** | "Invite teammates" with email picker |
| **Loading (board opening)** | Skeleton with sticky-note placeholders |
| **Loading (cursor sync)** | Cursor avatars appear with name labels |
| **Error (sync)** | Banner + retry; never block editing |
| **Error (permission)** | "Read-only — request edit access" inline link |
| **Success (saved)** | Implicit; auto-save with subtle indicator |
| **Success (export)** | Download triggered + toast confirmation |
| **Skeleton (board grid)** | Yellow-tinted placeholders |
| **Disabled (free plan limit)** | Upgrade link |
| **Loading (long export)** | Persistent progress chip |

## 15. Motion & Easing

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Selection |
| `motion-fast` | 150ms | Hover |
| `motion-standard` | 250ms | Modal, panel |
| `motion-cursor` | continuous | Live cursor sync |

Standard cubic-bezier; minimal bounce. Cursor sync motion is signature. `prefers-reduced-motion: reduce` removes hover transitions; cursor sync becomes step-discrete.

---

**Verified:** 2026-05-08 (omd:migrate run 38 — Apple-tier)
**Tier 1 sources:** miro.com/ko home + /pricing (live DOM via playwright — **three-color 8px Primary**: Yellow banner `#fde050` 40px / 16px·**900** ALL CAPS (banner-only) + Charcoal `#1c1c1e` 42-44px / 16px·**600** (canonical default) + Miro Blue `#3859ff` 48px / 18px·600 (featured-tier accent); Outline transparent / Charcoal text).
**Tier 2 sources:** styles.refero.design / getdesign.md — no record.
**Tier 2 (Philosophy/founders/funding):** Wikipedia (Miro), bne IntelliNews ($17.5B), Crunchbase, Miro Newsroom (Series C $400M Jan 2022), BusinessWire (Series B $50M Apr 2020), Contrary Research, EWDN.
**Style ref:** `notion`. **Conflicts unresolved:** none. **Earlier mistake reverted:** prior footer captured Yellow banner only; canonical default Primary is **Charcoal `#1c1c1e`** with Miro Blue `#3859ff` featured-tier accent — three-color discipline was undocumented.
