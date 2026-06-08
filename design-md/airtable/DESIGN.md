---
id: airtable
name: Airtable
country: US
category: design-tools
homepage: "https://www.airtable.com"
primary_color: "#fcb400"
logo:
  type: simpleicons
  slug: airtable
verified: "2026-05-15"
omd: "0.1"
ds:
  name: Airtable Trademark Guidelines
  url: "https://www.airtable.com/company/trademark-guidelines"
  type: brand
  description: Airtable's trademark usage and brand guidelines.
  og_image: "https://www.airtable.com/images/airtable-seo.jpg"
tokens:
  source: prose-derived
  extracted: "2026-06-08"
  note: "primary = Airtable Blue (#1b61c9); brand-amber (#fcb400) from primary_color frontmatter. Color belongs to user data, chrome stays neutral."
  colors:
    primary: "#1b61c9"
    accent-blue: "#254fad"
    brand: "#fcb400"
    canvas: "#ffffff"
    surface: "#f8fafc"
    foreground: "#181d26"
    body: "#333333"
    on-primary: "#ffffff"
    hairline: "#e0e2e6"
    success: "#006400"
  typography:
    family: { sans: "Haas", display: "Haas Groot Disp" }
    display-hero:    { size: 48, weight: 400, lineHeight: 1.15, use: "Hero headlines" }
    display-bold:    { size: 48, weight: 900, lineHeight: 1.50, use: "Bold display, Haas Groot Disp" }
    section:         { size: 40, weight: 400, lineHeight: 1.25, use: "Section headings" }
    subheading:      { size: 32, weight: 450, lineHeight: 1.20, use: "Sub-headings" }
    card-title:      { size: 24, weight: 400, lineHeight: 1.25, tracking: 0.12, use: "Card titles" }
    feature:         { size: 20, weight: 400, lineHeight: 1.40, tracking: 0.1, use: "Feature text" }
    body:            { size: 18, weight: 400, lineHeight: 1.35, tracking: 0.18, use: "Standard reading text" }
    body-medium:     { size: 16, weight: 500, lineHeight: 1.30, tracking: 0.12, use: "Emphasized body" }
    button:          { size: 16, weight: 500, lineHeight: 1.28, tracking: 0.08, use: "Button labels" }
    caption:         { size: 14, weight: 450, lineHeight: 1.30, tracking: 0.18, use: "Captions, small labels" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48 }
  rounded: { sm: 2, md: 12, lg: 16, xl: 24, xxl: 32, full: 9999 }
  shadow:
    soft: "rgba(15,48,106,0.05) 0px 0px 20px"
    standard: "rgba(0,0,0,0.32) 0px 0px 1px, rgba(0,0,0,0.08) 0px 0px 2px, rgba(45,127,249,0.28) 0px 1px 3px, rgba(0,0,0,0.06) 0px 0px 0px 0.5px inset"
  components_harvested: true
  components:
    button-primary: { type: button, bg: "#1b61c9", fg: "#ffffff", radius: 12, padding: "16x24", font: "Haas 16/500", use: "primary CTA, blue-tinted lift" }
    button-white: { type: button, bg: "#ffffff", fg: "#181d26", radius: 12, use: "secondary CTA on dark/blue surfaces" }
    card: { type: card, bg: "#ffffff", radius: 16, use: "1px #e0e2e6 border, 24-32 radius featured, blue-tinted multi-layer shadow" }
    input: { type: input, bg: "#ffffff", fg: "#181d26", radius: 12, padding: "12x16", use: "1px #e0e2e6 border" }
    badge: { type: badge, bg: "#f8fafc", fg: "#181d26", radius: 12, font: "Haas 14/500", use: "1px #e0e2e6 border" }
---

# Design System Inspiration of Airtable

## 1. Visual Theme & Atmosphere

Airtable's website is a clean, enterprise-friendly platform that communicates "sophisticated simplicity" through a white canvas with deep navy text (`#181d26`) and Airtable Blue (`#1b61c9`) as the primary interactive accent. The Haas font family (display + text variants) creates a Swiss-precision typography system with positive letter-spacing throughout.

**Key Characteristics:**
- White canvas with deep navy text (`#181d26`)
- Airtable Blue (`#1b61c9`) as primary CTA and link color
- Haas + Haas Groot Disp dual font system
- Positive letter-spacing on body text (0.08px–0.28px)
- 12px radius buttons, 16px–32px for cards
- Multi-layer blue-tinted shadow: `rgba(45,127,249,0.28) 0px 1px 3px`
- Semantic theme tokens: `--theme_*` CSS variable naming

## 2. Color Palette & Roles

### Primary
- **Deep Navy** (`#181d26`): Primary text
- **Airtable Blue** (`#1b61c9`): CTA buttons, links
- **White** (`#ffffff`): Primary surface
- **Spotlight** (`rgba(249,252,255,0.97)`): `--theme_button-text-spotlight`

### Semantic
- **Success Green** (`#006400`): `--theme_success-text`
- **Weak Text** (`rgba(4,14,32,0.69)`): `--theme_text-weak`
- **Secondary Active** (`rgba(7,12,20,0.82)`): `--theme_button-text-secondary-active`

### Neutral
- **Dark Gray** (`#333333`): Secondary text
- **Mid Blue** (`#254fad`): Link/accent blue variant
- **Border** (`#e0e2e6`): Card borders
- **Light Surface** (`#f8fafc`): Subtle surface

### Shadows
- **Blue-tinted** (`rgba(0,0,0,0.32) 0px 0px 1px, rgba(0,0,0,0.08) 0px 0px 2px, rgba(45,127,249,0.28) 0px 1px 3px, rgba(0,0,0,0.06) 0px 0px 0px 0.5px inset`)
- **Soft** (`rgba(15,48,106,0.05) 0px 0px 20px`)

## 3. Typography Rules

### Font Families
- **Primary**: `Haas`, fallbacks: `-apple-system, system-ui, Segoe UI, Roboto`
- **Display**: `Haas Groot Disp`, fallback: `Haas`

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing |
|------|------|------|--------|-------------|----------------|
| Display Hero | Haas | 48px | 400 | 1.15 | normal |
| Display Bold | Haas Groot Disp | 48px | 900 | 1.50 | normal |
| Section Heading | Haas | 40px | 400 | 1.25 | normal |
| Sub-heading | Haas | 32px | 400–500 | 1.15–1.25 | normal |
| Card Title | Haas | 24px | 400 | 1.20–1.30 | 0.12px |
| Feature | Haas | 20px | 400 | 1.25–1.50 | 0.1px |
| Body | Haas | 18px | 400 | 1.35 | 0.18px |
| Body Medium | Haas | 16px | 500 | 1.30 | 0.08–0.16px |
| Button | Haas | 16px | 500 | 1.25–1.30 | 0.08px |
| Caption | Haas | 14px | 400–500 | 1.25–1.35 | 0.07–0.28px |

## 4. Component Stylings

### Buttons

**Primary Blue**
- Background: `#1b61c9`
- Text: `#ffffff`
- Radius: 12px
- Padding: 16px 24px
- Font: 16px / 500 / Haas
- Use: Primary CTA buttons across the marketing site

**White**
- Background: `#ffffff`
- Text: `#181d26`
- Border: 1px solid `#ffffff`
- Radius: 12px
- Padding: 16px 24px
- Font: 16px / 500 / Haas
- Use: Secondary CTA on dark/blue surfaces

**Cookie Consent**
- Background: `#1b61c9`
- Text: `#ffffff`
- Radius: 2px
- Padding: 16px 24px
- Font: 16px / 500 / Haas
- Use: Cookie banner accept (deliberately sharp 2px radius)

### Inputs

**Default**
- Background: `#ffffff`
- Text: `#181d26`
- Border: 1px solid `#e0e2e6`
- Radius: 12px
- Padding: 12px 16px
- Font: 16px / 400 / Haas
- Use: Inferred from §1-§2 baseline (no explicit DS variant in source).

### Cards

**Standard**
- Background: `#ffffff`
- Border: 1px solid `#e0e2e6`
- Radius: 16px
- Padding: 24px
- Shadow: `rgba(0,0,0,0.32) 0px 0px 1px, rgba(0,0,0,0.08) 0px 0px 2px, rgba(45,127,249,0.28) 0px 1px 3px, rgba(0,0,0,0.06) 0px 0px 0px 0.5px inset`
- Use: Default card surface; blue-tinted multi-layer shadow

**Large Section**
- Background: `#ffffff`
- Border: 1px solid `#e0e2e6`
- Radius: 24px
- Padding: 32px
- Use: Larger feature/section containers

### Badges

**Default**
- Background: `#f8fafc`
- Text: `#181d26`
- Border: 1px solid `#e0e2e6`
- Radius: 12px
- Padding: 4px 8px
- Font: 14px / 500 / Haas
- Use: Inferred from §1-§2 baseline (no explicit DS variant in source).

## 5. Layout
- Spacing: 1–48px (8px base)
- Radius: 2px (small), 12px (buttons), 16px (cards), 24px (sections), 32px (large), 50% (circles)

## 6. Depth
- Blue-tinted multi-layer shadow system
- Soft ambient: `rgba(15,48,106,0.05) 0px 0px 20px`

## 7. Do's and Don'ts

### Do
- Use Airtable Blue (`#1b61c9`) only for CTAs and links, set on a white (`#ffffff`) canvas with Deep Navy (`#181d26`) text
- Set the Haas / Haas Groot Disp font system with positive letter-spacing on body and small text (0.08px–0.28px) — it is Airtable's typographic signature
- Apply the radius scale by component size: 12px buttons, 16px standard cards, 24px sections, 32px large containers
- Lift primary buttons with the signature blue-tinted multi-layer shadow (`rgba(45,127,249,0.28) 0px 1px 3px`) so elevation ties back to the brand color
- Reserve color for user data and keep chrome neutral, signaling 'live work' with the spotlight surface (`rgba(249,252,255,0.97)`) plus subtle `#e0e2e6` borders
- Name theme variables with the semantic `--theme_*` convention (e.g. `--theme_success-text` for `#006400`) to match Airtable's internal tokens

### Don't
- Skip the positive letter-spacing on body and caption text — it is what gives Airtable its Swiss-precision feel
- Lean on heavy gray backgrounds or dark drop shadows for depth instead of the spotlight surface and the soft ambient `rgba(15,48,106,0.05) 0px 0px 20px` glow
- Spread Airtable Blue (`#1b61c9`) across chrome or large backgrounds — color belongs to user data, not the UI frame
- Reach for the deliberately sharp 2px radius outside its cookie-consent context where buttons and cards use 12px and up
- Add bouncy spring motion or exceed the 150–400ms timing tokens, and respect `prefers-reduced-motion` by dropping the spotlight fade-in
- Use forbidden voice like 'revolutionary database', 'no-code magic', or emoji in product chrome

## 8. Responsive Behavior
Breakpoints: 425–1664px (23 breakpoints)

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Airtable Blue (`#1b61c9`)
- CTA hover: deepen to `#0f4ba0` (estimated ~10% darker)
- Heading / body text: Deep Navy (`#181d26`)
- Muted text: `~#6b7280` (estimated)
- Page background: White (`#ffffff`)
- Border default: `#e0e2e6`
- Spotlight surface: `rgba(249,252,255,0.97)`
- Success: Green (`#006400`)

### Example Component Prompts
- "Create an Airtable-style primary button: bg `#1b61c9`, white text, `12px` border-radius, `12px 20px` padding, Haas font weight 500 14px. Hover: bg darkens ~10%. Box-shadow: `rgba(45,127,249,0.28) 0px 1px 3px` for the signature blue-tinted lift."
- "Build a card: white bg, `1px solid #e0e2e6` border, `16px` radius (or `24-32px` for featured cards), `24px` padding. Title in Haas Groot Disp 18px weight 600 `#181d26`. Body in Haas 14px weight 400 with `0.08-0.28px` positive letter-spacing for that Swiss precision."
- "Design a navigation header: white sticky bar, Haas wordmark left, link nav (14px weight 500 `#181d26`, hover to `#1b61c9`), Airtable Blue CTA right. Bottom border `1px solid #e0e2e6` on scroll."

### Iteration Guide
1. Apply positive letter-spacing on body and small text (0.08-0.28px) — it's Airtable's typographic signature.
2. Use the multi-layer blue-tinted shadow (`rgba(45,127,249,0.28) 0px 1px 3px`) on primary buttons — it ties elevation to the brand color.
3. Use semantic `--theme_*` token naming when building shadcn variables — matches Airtable's internal convention.
4. Cards use `12-32px` radius depending on size — small components 12px, hero cards up to 32px.
5. Don't use heavy gray backgrounds — Airtable's depth comes from the spotlight surface (`rgba(249,252,255,0.97)`) and subtle borders.

## 10. Voice & Tone

Airtable's voice is **product-pragmatic and confidence-quiet** — speaks like an internal tools team explaining what just shipped. Hero messaging: *"Build enterprise-ready AI workflows, apps & agents"* (homepage 2026-05) — verb-first, capability-list, no hyperbole.

| Context | Tone |
|---|---|
| CTA | Verb + noun. "Create base", "Add field", "Sync now" |
| Empty state | Direct invitation. "Create your first base to get started" |
| Error | Specific. "Couldn't connect to source. Check API key in Sync settings." |
| Marketing | Capability-list, lower-case headings allowed |
| Onboarding | One concept per screen, screenshots dominate |

**Voice samples**
- Marketing CTA: *"Sign up"* / *"Talk to sales"* <!-- verified: airtable.com homepage 2026-05 -->

**Forbidden phrases.** "Revolutionary database", "no-code magic", emoji in product chrome.

## 11. Brand Narrative

Airtable was founded in **2012** by **Howie Liu** (CEO), **Andrew Ofstad**, and **Emmett Nicholas** in San Francisco — three engineers who met through Duke connections ([Airtable — Wikipedia](https://en.wikipedia.org/wiki/Airtable), [Antler — Airtable with Andrew Ofstad](https://www.antler.co/blog/antler-early-days-episode-3-airtable-with-andrew-ofstad)). Howie Liu had previously co-founded **Etacts** (YC W2010, age 20), a Gmail relationship-management tool **acquired by Salesforce on December 21, 2010** ([Golden — Howie Liu](https://golden.com/wiki/Howie_Liu-PBBK48Y)); the question that became Airtable formed during his Salesforce PM stint working on social CRM. Andrew Ofstad came from Google as PM on Android, leading the redesign of Google Maps. Emmett Nicholas was a Stack Overflow engineer for 3+ years. The thesis: spreadsheets and databases occupied opposite ends of "ease of use" vs "structural rigor" — Airtable proposed a hybrid. **2 years in stealth (2012-2014)** → invite-only beta 2014 → **public launch March 2015** ([Taskade history](https://www.taskade.com/blog/history-of-airtable)). Pre-seed angels included Ashton Kutcher + Michael Birch (Bebo) + Josh Reeves (Gusto). **Series F Dec 13, 2021: $735M at $11B valuation** ([Tracxn](https://tracxn.com/d/companies/airtable/__Xdq7WaiA79BBRynm6WLMDo_kp-jvnqvpW1GxVVOirjE)). Total raised: **$1.35B**. Evolved from collaborative database (2015-2020) to platform-with-AI-workflows (2024+) — current tagline *"Build Enterprise-ready AI Workflows, Apps & Agents"* (verified live 2026-05).

What Airtable refuses: competing with Notion on docs, no-code-as-magic framing.

## 12. Principles

1. **Records are the unit.** Bases > tables > views > records. *UI implication:* hierarchies stay flat.
2. **Views are personalized, data is shared.** *UI implication:* view chrome (filters, sort) at view level, never global.
3. **Spotlight surface signals "live work".** `rgba(249,252,255,0.97)`. *UI implication:* canonical work surface = spotlight white.
4. **Color belongs to user data, not chrome.** *UI implication:* avoid bright accents for chrome; reserve for user categorization.
5. **AI workflows are first-class blocks.** *UI implication:* every AI step has visible config + output preview.

## 13. Personas

*Personas are fictional archetypes informed by Airtable user segments (operations leaders, internal-tooling builders), not individual people.*

**Renee Park, 34, San Francisco.** Operations Manager at Series B SaaS. Builds CRM-lite, vendor tracker, content calendar in Airtable.

**Tomás Reyes, 41, Mexico City.** Independent consultant building Airtable-based tools for 8 clients. Cares about base portability + per-record pricing.

**Linda Chen, 28, Singapore.** Marketing Ops at multinational. Heavy cross-table linking + automations user.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no bases)** | "Create your first base" CTA + template picker grid |
| **Empty (no records)** | Inline row "+ Add a record" — no illustration |
| **Loading (base opening)** | Spotlight surface fades in, table grid skeletons |
| **Loading (sync)** | Inline progress chip on view header |
| **Error (sync failed)** | Yellow warning chip on view header + "Reconnect source" link |
| **Error (formula)** | Red `#ef4444` pill on field header + tooltip |
| **Success (saved)** | Implicit — auto-saves, no toast. Cmd+Z works |
| **Success (workflow run)** | Workflow log row appears with green check + duration |
| **Skeleton (record detail)** | Field labels stay, values become `#e5e7eb` rectangles |
| **Disabled** | 0.5 opacity. Read-only fields show lock icon |
| **Loading (AI agent)** | Stepwise indicator + cancellable. Latency expectation set |

## 15. Motion & Easing

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Cell commit |
| `motion-fast` | 150ms | Hover |
| `motion-standard` | 250ms | Modal, side panel |
| `motion-slow` | 400ms | Spotlight surface arrival |

Easings: `ease-enter cubic-bezier(0.2,0.6,0.25,1)`, `ease-exit cubic-bezier(0.4,0,1,1)`. No bouncy springs. `prefers-reduced-motion: reduce` removes spotlight fade-in.

---

**Verified:** 2026-05-08 (B1 loop)
**Tier 1 sources:** airtable.com (live DOM via playwright — round 50% icon buttons; ghost 12px; Sign up CTA)
**Tier 2 sources:** styles.refero.design / getdesign.md — no record.
**Tier 1 (Philosophy):** airtable.com homepage; Howie Liu (CEO) public talks.
**Style ref:** `notion`. **Conflicts unresolved:** none.
