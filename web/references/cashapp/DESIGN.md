---
id: cashapp
name: Cash App
country: US
category: fintech
homepage: "https://cash.app"
primary_color: "#00e013"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=cash.app&sz=128"
verified: "2026-06-17"
added: "2026-06-17"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-17"
  note: "primary = Cash Green #00e013 (documented hero color, PMS 802 C; live green CTA bg on cash.app/card). Black #000000 + White #ffffff are the supporting balance pair. Citron #d8ff14 is a sparing high-impact accent (never a full background fill). Live product surfaces use 999px pill buttons in CashSans; brand portal (design.cash.app) is a black canvas with white type."
  colors:
    primary: "#00e013"
    primary-tint: "#f9fffa"
    citron: "#d8ff14"
    ink: "#000000"
    canvas: "#ffffff"
    on-primary: "#000000"
    on-dark: "#ffffff"
    slate: "#27455c"
    blue-accent: "#3860be"
    surface: "#f8f8f8"
    surface-alt: "#f6f6f6"
    muted: "#737373"
    muted-strong: "#555555"
    muted-soft: "#999999"
    portal-grey: "#858585"
  typography:
    family: { display: "Cash Sans", body: "Cash Sans", fallback: "Helvetica Neue" }
    display-hero:  { size: 86, weight: 400, lineHeight: 1.0, use: "Brand-portal oversized section index labels, Cash Sans" }
    section:       { size: 40, weight: 500, lineHeight: 1.1, use: "Marketing section headlines, Cash Sans Medium" }
    subsection:    { size: 24, weight: 500, lineHeight: 1.2, use: "Feature card heads, Cash Sans Medium" }
    body:          { size: 16, weight: 400, lineHeight: 1.5, use: "Standard reading text, Cash Sans Regular" }
    nav:           { size: 16, weight: 600, lineHeight: 1.0, use: "Portal nav / active labels, Cash Sans Semibold" }
    button:        { size: 14, weight: 500, lineHeight: 1.0, use: "Pill button label, Cash Sans Medium" }
    button-sm:     { size: 12, weight: 500, lineHeight: 1.0, use: "Compact header pill label, Cash Sans Medium" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 20, xl: 31, xxl: 48, section: 64 }
  rounded: { sm: 2, md: 20, lg: 999, full: 9999 }
  shadow:
    none: "none"
  components:
    button-green: { type: button, bg: "#00e013", fg: "#000000", radius: "999px", padding: "0 20px", height: "46px", font: "14px / 500 Cash Sans", use: "Primary CTA (Sign up) — Cash Green hero action" }
    button-dark: { type: button, bg: "#000000", fg: "#ffffff", radius: "999px", padding: "0 20px", height: "46px", font: "14px / 400 Cash Sans", use: "Log in pill on light surfaces" }
    button-light: { type: button, bg: "#ffffff", fg: "#000000", radius: "999px", padding: "0 20px", height: "46px", font: "12px / 500 Cash Sans", use: "Sign up pill on dark hero" }
    nav-tab: { type: tab, fg: "#000000", font: "16px / 600 Cash Sans", use: "Top nav item", active: "Cash Green #00e013 underline / fill on hover" }
    portal-nav-tab: { type: tab, fg: "#ffffff", font: "16px / 400 Cash Sans", use: "Brand-portal section nav on black canvas", active: "text #ffffff opaque (vs rgba 0.7 inactive)" }
    card-light: { type: card, bg: "#f8f8f8", fg: "#000000", radius: "20px", use: "Light feature card on marketing surface (flat, no shadow)" }
    card-dark: { type: card, bg: "#000000", fg: "#ffffff", radius: "20px", use: "Dark feature card / brand-portal tile" }
    badge-citron: { type: badge, bg: "#d8ff14", fg: "#000000", radius: "9999px", font: "12px / 500 Cash Sans", use: "High-impact accent chip (sparing, never full-bg)" }
    avatar-round: { type: avatar, bg: "#000000", fg: "#ffffff", radius: "50%", use: "Circular account / profile control in header" }
  components_harvested: true
---

# Design System Inspiration of Cash App

## 1. Visual Theme & Atmosphere

Cash App is the irreverent, expressive face of consumer fintech — a system built on one radioactive idea: a single hero color, **Cash Green** (`#00e013`), so saturated it reads almost like a glitch. Where most finance brands hedge toward trust-blue and institutional restraint, Cash App leans into a high-contrast, almost street-culture confidence. The brand portal (`design.cash.app`) opens on a pure black canvas (`#000000`) with white (`#ffffff`) type, while the marketing site (`cash.app`) flips to a white canvas with near-black text and lets the green detonate on the primary call-to-action. Black and white are explicitly framed as the *supporting* pair that "provide balance to Cash Green," and a secondary accent — **Citron** (`#d8ff14`), an acid yellow-green — is permitted only "sparingly as a high-impact accent" and "never as a full background fill."

The typographic identity is **Cash Sans**, a customized cut of Klim Type Foundry's Söhne. The defining custom attribute is *rounded punctuation*, which lends the otherwise rigorous neo-grotesque a warmth and approachability that matches the brand's plainspoken voice; subtle glyph modifications (`2`, `5`, `7`, `£`) further tune it for product use. On the live product surfaces Cash Sans runs with a `Helvetica Neue` fallback. The default working weights are **Regular (400)** and **Medium (500)** — deliberately restrained for clarity — but the brand portal showcases the typeface pushed to oversized, expressive extremes (86px+ section index labels) where "typography becomes its own distinct graphic object."

What distinguishes Cash App from its fintech peers is its flat, pill-forward, anti-corporate geometry. Interactive chrome is uniformly **999px pill** — the green Sign-up button, the black Log-in button, and the white hero button all share the same fully-rounded silhouette at 46px height. There are essentially no drop shadows (`box-shadow: none` across nav, hero, and buttons); separation comes from raw color blocking — black sections, white sections, slate (`#27455c`) bands — rather than elevation. The result is a brand that feels engineered, bold, and culturally fluent: financial tooling styled like a confident consumer product, not a bank.

**Key Characteristics:**
- Cash Green (`#00e013`) as a single, omnipresent hero color — documented PMS 802 C
- Black (`#000000`) + White (`#ffffff`) as the explicit "supporting" balance pair
- Citron (`#d8ff14`) as a sparing high-impact accent — never a full background fill
- Cash Sans (customized Söhne) with rounded punctuation for warmth; Regular/Medium defaults
- 999px pill geometry on every button — green, black, and white variants share the silhouette
- Flat depth: no shadows; separation via raw color blocking (black / white / slate `#27455c`)
- Dual canvas: black brand portal (`design.cash.app`) vs white marketing site (`cash.app`)
- Black-on-green contrast on the primary CTA — green never carries white text

## 2. Color Palette & Roles

### Primary
- **Cash Green** (`#00e013`): The brand's single hero color (CMYK 65/0/100/0, RGB 0/224/19, PMS 802 C). Primary CTA background ("Sign up") with black text. Documented as "omnipresent across all brand touchpoints" and "used strategically such that it stands out as the hero color."
- **Cash Green Tint** (`#f9fffa`): Faint near-white green-tinted surface used as a subtle background wash on green-themed sections.

### Supporting (Balance Pair)
- **Black** (`#000000`): Primary text on white, brand-portal canvas, Log-in button background, and the "structure and contrast" half of the supporting pair (CMYK 60/40/40/100, PMS Black C).
- **White** (`#ffffff`): Marketing-site canvas, text on black/green, Sign-up button background on dark heroes (CMYK 0/0/0/0, PMS Bright White C).

### Accent
- **Citron** (`#d8ff14`): A high-impact acid yellow-green accent (CMYK 11/0/91/0, RGB 216/255/20, PMS 388 C). Used "sparingly... to introduce depth and energy" and "should never be used as a full background fill."

### Section & Structural
- **Slate** (`#27455c`): A deep slate-blue used as a full-bleed section background band on the marketing surface, providing a darker neutral block between white and black zones.
- **Blue Accent** (`#3860be`): A muted editorial blue used for occasional accent fills and links within content blocks.

### Surface & Neutral Ladder
- **Surface** (`#f8f8f8`): Light off-white surface for feature cards and segmented blocks.
- **Surface Alt** (`#f6f6f6`): A second near-white surface for alternating content bands.
- **Muted** (`#737373`): Secondary body text and captions.
- **Muted Strong** (`#555555`): Stronger secondary text and labels.
- **Muted Soft** (`#999999`): Tertiary text, metadata, fine print.
- **Portal Grey** (`#858585`): The dimmed grey of inactive oversized section labels on the black brand portal.

## 3. Typography Rules

### Font Family
- **Primary**: `Cash Sans` — a customized version of Söhne (Klim Type Foundry), a neo-grotesque sans serif. Custom attribute: **rounded punctuation** for warmth, plus tuned `2`/`5`/`7`/`£` glyphs. Used for all display, body, nav, and button text.
- **Fallback**: `Helvetica Neue`, then `helvetica`, `sans-serif` (live computed stack).
- **Default weights**: Regular (400) and Medium (500) — the documented "default for typesetting" where "clear communication and brand recognition take priority over typographic expression."

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Portal Index | Cash Sans | 86px (5.40rem) | 400 | 1.0 | Oversized brand-portal section labels (Logo, Color, Typography…) |
| Section Heading | Cash Sans | 40px (2.50rem) | 500 | 1.1 | Marketing section headlines, Medium |
| Sub-section | Cash Sans | 24px (1.50rem) | 500 | 1.2 | Feature card heads, Medium |
| Nav / Active | Cash Sans | 16px (1.00rem) | 600 | 1.0 | Portal nav, active labels, Semibold |
| Body | Cash Sans | 16px (1.00rem) | 400 | 1.5 | Standard reading text, Regular |
| Button | Cash Sans | 14px (0.88rem) | 500 | 1.0 | Pill button labels, Medium |
| Button Small | Cash Sans | 12px (0.75rem) | 500 | 1.0 | Compact header pill labels |

### Principles
- **Restrained default, expressive ceiling**: Regular (400) and Medium (500) are the everyday working weights for "rigorous and detail-oriented" typesetting; the portal demonstrates the same typeface pushed to oversized, experimental extremes for expressive moments.
- **Rounded punctuation is the signature**: the single feature that distinguishes Cash Sans from stock Söhne — it carries the brand's warmth and approachability.
- **One typeface, two registers**: Cash Sans handles both the plainspoken product UI and the experimental brand canvas; it never swaps to a different family for emphasis.
- **Black-on-green, never white-on-green**: button text on the green CTA is black (`#000000`) for maximum legibility and the signature high-contrast read.

## 4. Component Stylings

### Buttons

**Sign Up (Primary Green)**
- Background: `#00e013`
- Text: `#000000`
- Radius: 999px
- Padding: 0px 20px
- Height: 46px
- Font: 14px Cash Sans weight 500
- Use: Primary CTA — the Cash Green hero action ("Sign up", "Get started")

**Log In (Dark Pill)**
- Background: `#000000`
- Text: `#ffffff`
- Radius: 999px
- Padding: 0px 20px
- Height: 46px
- Font: 14px Cash Sans weight 400
- Use: Secondary header action on light surfaces ("Log in")

**Sign Up on Dark (Light Pill)**
- Background: `#ffffff`
- Text: `#000000`
- Radius: 999px
- Padding: 0px 20px
- Height: 46px
- Font: 12px Cash Sans weight 500
- Use: Header sign-up pill when the hero canvas is black

### Inputs

**Default**
- Background: `#ffffff`
- Text: `#000000`
- Border: 1px solid `#999999`
- Radius: 2px
- Use: Form text input on white surfaces (sharp-cornered, neutral hairline)

### Cards & Containers

**Light Feature Card**
- Background: `#f8f8f8`
- Text: `#000000`
- Radius: 20px
- Use: Light feature card on the marketing surface (flat, no shadow)

**Dark Tile**
- Background: `#000000`
- Text: `#ffffff`
- Radius: 20px
- Use: Dark feature card / brand-portal content tile

### Badges

**Citron Accent Chip**
- Background: `#d8ff14`
- Text: `#000000`
- Radius: 9999px
- Font: 12px Cash Sans weight 500
- Use: High-impact accent pill — used sparingly, never as a full background fill

### Navigation

**Marketing Nav**
- Background: `#ffffff`
- Text: `#000000`
- Font: 16px Cash Sans weight 600
- Active: Cash Green `#00e013` fill/underline on hover
- Use: Top horizontal marketing nav

**Brand-Portal Nav**
- Background: `#000000`
- Text: `#ffffff` (active) / `rgba(255,255,255,0.7)` (inactive)
- Font: 16px Cash Sans
- Use: Section nav on the black brand-portal canvas (Foundations / Expressions / Resources)

### Avatars

**Account Control**
- Background: `#000000`
- Text: `#ffffff`
- Radius: 50% (circle)
- Height: 46px
- Use: Circular account/profile control in the header

---

**Verified:** 2026-06-17 (omd:add-reference CREATE — Tier 1 live inspect, 3 surfaces)
**Tier 1 sources:** https://cash.app (homepage, live computed style); https://cash.app/card (product surface, green CTA live); https://design.cash.app/color (official brand portal — documented Cash Green #00E013 / Citron #D8FF14 / Black / White)
**Tier 2 sources:** getdesign.md/cashapp — no entry ("No designs found"); styles.refero.design/?q=cash app — no confirmed Cash App style page (generic fintech results only)
**Conflicts unresolved:** none — live computed green `rgb(0,224,19)` exactly matches the documented portal value `#00E013`

## 5. Layout Principles

### Spacing System
- Base unit: ~4px
- Scale: 4px, 8px, 12px, 16px, 20px, 31px, 48px, 64px
- Notable: Pill buttons land on a 0px vertical / 20px horizontal padding pattern at a fixed 46px height, giving a consistent capsule rhythm across green, black, and white variants

### Grid & Container
- Marketing site: white canvas with full-bleed alternating section bands (white / slate `#27455c` / black)
- Hero: large headline anchored over a tall (276px) media/illustration zone, with the green CTA as the focal action
- Brand portal: black canvas with an oversized vertical index of section labels (Logo, Color, Typography, Motion, Iconography, Voice & Tone) at 86px
- Feature content groups into 20px-radius cards on light or dark fills

### Whitespace Philosophy
- **Color blocking over elevation**: sections separate by raw fill (white / black / slate), not by shadow or border weight
- **Single-action focus**: the green CTA is the one saturated element on a given surface — surrounding chrome stays black/white so the action is unambiguous
- **Expressive vs functional zones**: marketing/product surfaces stay rigorous and plain; the brand portal is where typography and color are pushed to expressive extremes

### Border Radius Scale
- Sharp (2px): inputs, fine structural elements
- Medium (20px): feature cards, content tiles — the container workhorse
- Pill (999px): all buttons
- Full (9999px / 50%): accent badges, circular avatars/controls

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline text, most surfaces |
| Color block (Level 1) | Raw fill shift (white ↔ `#27455c` slate ↔ `#000000` black) | Section separation without elevation |
| Pill (Level 2) | 999px capsule fill (green/black/white) | Interactive affordance via shape + color, not shadow |

**Shadow Philosophy**: Cash App is a near-shadowless, flat system. Live inspection found `box-shadow: none` across the nav, hero, and all buttons on both `cash.app` and `cash.app/card`. Depth and grouping are communicated entirely through bold color blocking — alternating black, white, and slate (`#27455c`) bands — and through the pill geometry of interactive elements. This is a deliberate modern-flat, anti-corporate choice: it keeps the brand feeling fast, confident, and culturally current, avoiding the heavy "card stack" elevation of legacy banking UIs. When emphasis is needed, the system reaches for Cash Green (`#00e013`) or, sparingly, Citron (`#d8ff14`) — never a drop shadow.

## 7. Do's and Don'ts

### Do
- Treat Cash Green (`#00e013`) as the single hero color — make it omnipresent but strategic
- Put black (`#000000`) text on the green CTA — never white-on-green
- Use black and white as the supporting balance pair so green stands out where it matters
- Use Cash Sans (or Söhne with rounded punctuation) for all type, Regular/Medium by default
- Keep all buttons as 999px pills at a consistent 46px height
- Separate sections with raw color blocking (white / `#27455c` slate / black), not shadows
- Reserve Citron (`#d8ff14`) for sparing, high-impact accents only
- Push typography to expressive, oversized extremes on dedicated brand canvases

### Don't
- Use Citron (`#d8ff14`) as a full background fill — it is an accent only
- Put white text on the green button — Cash App uses black-on-green for contrast
- Add drop shadows for elevation — the system is flat; use color blocks instead
- Dilute the green by spreading it across many elements — keep it the single hero action
- Use sharp/square corners on buttons — every button is a full pill
- Swap to a different typeface for emphasis — push Cash Sans instead
- Use trust-blue institutional palettes — Cash App rejects legacy-bank aesthetics
- Flood every surface with green — "floods of green can be powerful, but that shouldn't be the only way green shows up"

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero headline compresses, full-width pill CTAs |
| Tablet | 640-1024px | Moderate padding, 2-up feature cards |
| Desktop | 1024-1440px | Full layout, multi-column feature bands, oversized portal index |

### Touch Targets
- Pill buttons at 46px height with 20px horizontal padding — comfortably tappable
- Green CTA full-pill for an unmistakable primary target
- Nav items spaced for touch within the header

### Collapsing Strategy
- Hero: large headline scales down on mobile; green CTA may go full-width pill
- Feature bands: multi-column → stacked single column
- Alternating black/white/slate sections maintain full-width treatment
- Brand-portal oversized index reflows vertically on narrow viewports

### Image Behavior
- Product screenshots and illustrations carry no shadow at any size, consistent with the flat system
- Cards maintain 20px radius across breakpoints
- Cash Green and Citron retain full saturation across sizes (RGB is the documented "truest depiction")

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Cash Green (`#00e013`) with black (`#000000`) text
- Accent: Citron (`#d8ff14`) — sparing only
- Marketing canvas: White (`#ffffff`); brand canvas: Black (`#000000`)
- Heading / body text: Black (`#000000`)
- Section band: Slate (`#27455c`)
- Light surface: `#f8f8f8`
- Secondary text: Muted (`#737373`)
- Tertiary text: Muted Soft (`#999999`)

### Example Component Prompts
- "Create a hero on white background. Headline in Cash Sans Medium 40px, black `#000000`. Primary CTA: Cash Green `#00e013` background, black `#000000` text, 999px pill, 0 20px padding, 46px height, Cash Sans 14px weight 500 — 'Sign up'. Secondary 'Log in' pill: black `#000000` bg, white text, same 999px geometry."
- "Design a feature card: `#f8f8f8` background, 20px radius, no shadow. Title Cash Sans Medium 24px black `#000000`. Body Cash Sans 16px weight 400, `#737373`."
- "Build a dark section: black `#000000` full-bleed, white `#ffffff` Cash Sans type. One Citron `#d8ff14` accent chip (9999px, black text) used sparingly — never as the full background."
- "Create top nav: white header, Cash Sans 16px weight 600 black links, Cash Green `#00e013` on active. Green 'Sign up' pill right-aligned, black 'Log in' pill beside it, both 999px."

### Iteration Guide
1. Cash Green (`#00e013`) is the single hero color — omnipresent but strategic, black text on it
2. Black + white are the supporting balance pair; slate `#27455c` for darker section bands
3. No shadows — separate with raw color blocks
4. Every button is a 999px pill at 46px height
5. Cash Sans throughout (Söhne with rounded punctuation), Regular/Medium default
6. Citron `#d8ff14` is accent-only — never a full background fill
7. Cards at 20px radius; inputs at a sharp 2px

---

## 10. Voice & Tone

Cash App's voice is **direct, irreverent, and culturally fluent** — plainspoken about money in a way that rejects both banking stiffness and startup hype. The brand portal frames its own register explicitly under "Voice & Tone," and the design language (rounded punctuation "to provide warmth and approachability that aligns with our tone of voice") is literally tuned to match how the brand talks. Copy is short, confident, and unpretentious; CTAs are bare imperatives ("Sign up", "Log in", "Order a Cash App Card", "Send money for free").

| Context | Tone |
|---|---|
| Hero headlines | Short, declarative, benefit-first. "Bank* on your terms", "Send money for free". |
| Feature labels | Plain and functional. "Save for your goals", "Buy and sell bitcoin easily". |
| CTAs | Bare imperatives. "Sign up", "Order a Cash App Card", "File your taxes for free". |
| Brand / portal copy | Confident, expressive, a little defiant. "A bold distillation of how we redefine money." |
| Legal / compliance | Plain and unembellished. "Prepaid debit cards issued by Sutton Bank, Member FDIC." |

**Voice samples (verbatim from live surfaces):**
- "Send, Receive, Invest, & Manage Your Money with Cash App" — homepage title meta. *(verified live 2026-06-17, cash.app)*
- "Our brand color palette is centered around Cash Green, a bold distillation of how we redefine money." — brand portal Color page. *(verified live 2026-06-17, design.cash.app/color)*
- "Bank* on your terms" — hero feature label. *(verified live 2026-06-17, cash.app)*

**Forbidden register**: trust-washing bank formality, fear-based finance pitches, exclamation-heavy hype, jargon left undefined, and any treatment that dilutes Cash Green from hero color to wallpaper.

## 11. Brand Narrative

Cash App was launched in **2013** by **Block, Inc.** (then Square, Inc.), the company co-founded by **Jack Dorsey**, originally as "Square Cash" — a frictionless way to send money over email and text. It grew from a peer-to-peer transfer tool into a full consumer financial platform: the Cash App Card debit card, direct deposit, commission-free stock investing, bitcoin buying/selling, and tax filing — all inside one irreverent, design-forward app. The brand's framing of itself as "redefining money" reflects that arc: from a single feature into a banking alternative for a generation that never wanted a branch.

The brand's design posture is a deliberate rejection of legacy financial aesthetics. Where incumbent banks signal trust through navy, gold, and corporate restraint, Cash App signals it through cultural fluency and a single radioactive green. Its **2024 brand refresh** — a bespoke, immersive brand portal built with Index Studio on an infinite canvas — made the philosophy explicit: a digital-first identity centered on Cash Green as a "hero color," Cash Sans (a custom Söhne cut with rounded punctuation) as the voice, and an explicit invitation to "push boundaries" and "defy conventions."

What Cash App refuses, visible in its design: institutional trust-blue, heavy card-stack elevation, and white-glove formality. What it embraces: a flat, bold, pill-forward interface; one omnipresent green; black-and-white as structural balance; and a tone that treats money plainly and confidently rather than reverently.

## 12. Principles

1. **One hero color, used with intent.** Cash Green (`#00e013`) is the single brand color. *UI implication:* reserve the saturated green for the primary action and key brand moments; never let it become wallpaper — "floods of green... shouldn't be the only way green shows up."
2. **Black and white carry the structure.** The supporting pair gives green room to stand out. *UI implication:* build layouts in black/white blocks and let green mark the one thing to do.
3. **Flat, never elevated.** Depth is communicated by color blocking, not shadow. *UI implication:* no drop shadows; separate sections with raw fills (white / `#27455c` slate / black).
4. **Rigor by default, expression on purpose.** Cash Sans Regular/Medium for clarity; pushed to extremes only on dedicated brand canvases. *UI implication:* keep product UI plain and legible; reserve typographic experimentation for brand surfaces.
5. **Warmth through detail.** Rounded punctuation makes a neo-grotesque approachable. *UI implication:* small humanizing details (rounded glyphs, full-pill buttons) carry the friendly tone — the geometry is the personality.
6. **Reject the bank aesthetic.** *UI implication:* avoid trust-blue, gold, and institutional chrome; lead with green, black, white, and confident plain language.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Cash App user segments (younger US consumers, peer-to-peer senders, first-time investors, the unbanked/underbanked), not individual people.*

**Marcus Bell, 24, Atlanta.** Splits rent and group dinners over Cash App because everyone he knows already has a `$cashtag`. Ordered the customizable Cash App Card because it looks nothing like a bank card. Trusts the brand because it speaks his language and never feels like a bank trying to sell him something.

**Destiny Rivera, 29, Houston.** Uses Cash App as her primary account — direct deposit, the debit card, and her first-ever stock and bitcoin buys. Values that investing felt approachable and commission-free rather than gatekept. The bold green and plain copy make money feel less intimidating.

**Theo Nakamura, 33, Brooklyn.** A designer who follows the brand for its work, not just its product. Bookmarked the brand portal after it won Awwwards SOTD; admires how a custom Söhne cut and a single green became a complete, expressive identity. Reads Cash App as proof that fintech doesn't have to look like a bank.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no activity)** | White canvas. Single black (`#000000`) line in Cash Sans explaining nothing's happened yet, with one Cash Green (`#00e013`) CTA to take the first action. No clutter. |
| **Empty (no saved items)** | Muted (`#737373`) single line; calm, plain path back to the action. |
| **Loading (data fetch)** | Flat skeleton blocks at final dimensions on `#f8f8f8` surface, 20px radius. No shadow shimmer — a flat pulse consistent with the shadowless system. |
| **Loading (action in progress)** | Inline progress within the pill button; label stays legible; no spinner-on-green that kills the contrast. |
| **Error (transaction failed)** | Inline message in black with a plain-language explanation and a retry. States what to do next — never a bare "Something went wrong". |
| **Error (form validation)** | Field-level message below the input describing what's valid, not just "Required". |
| **Success (sent / completed)** | Brief inline confirmation; Cash Green accent on the confirmation mark with black text. Plain, no celebratory emoji pile-up. |
| **Skeleton** | `#f8f8f8` blocks at final dimensions, 20px radius, flat pulse. |
| **Disabled** | Muted Soft (`#999999`) text on reduced-opacity surface; green actions fade rather than turn grey to preserve the brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, pill press, focus |
| `motion-standard` | 220ms | Card/section reveal, sheet, dropdown |
| `motion-slow` | 360ms | Page-level transitions, expressive brand reveals |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — sheets, cards, pills |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: On product surfaces motion is functional and quick — pill buttons respond to press with a subtle scale/opacity shift, content fades in from below at `motion-standard / ease-enter`. The brand portal is where motion gets expressive (the documented "Motion" section), with playful, character-driven transitions on an infinite canvas. The green never bounces gratuitously in product UI — confidence reads as steadiness. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and the product remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-17) via playwright getComputedStyle:
- https://cash.app — Cash Sans body font; pill buttons (999px) green/black/white; box-shadow none
- https://cash.app/card — green Sign-up CTA bg rgb(0,224,19) #00e013, black text, 999px pill, 0 20px padding, 46px
- https://design.cash.app/color — DOCUMENTED palette verbatim:
    Cash Green: CMYK 65/0/100/0, RGB 0/224/19, HEX #00E013, PMS 802 C
    Black: RGB 0/0/0, HEX #000000, PMS Black C
    White: RGB 255/255/255, HEX #FFFFFF, PMS Bright White C
    Citron: CMYK 11/0/91/0, RGB 216/255/20, HEX #D8FF14, PMS 388 C
    "Cash Green should be omnipresent... used strategically such that it stands out as the hero color."
    "Citron can be used sparingly as a high-impact accent... should never be used as a full background fill."
- https://design.cash.app/typography — DOCUMENTED verbatim:
    "Our typeface is Cash Sans, a customized version of Söhne by Klim Type Foundry. A neo-grotesque sans serif."
    "The primary feature specific to Cash Sans that distinguishes it from Söhne is rounded punctuation."
    "Regular and Medium are our default for typesetting."

Token-level claims (§1-9) are sourced from this live inspection + the documented brand portal.

Voice samples (§10) are verbatim from live surfaces (homepage title meta, brand portal Color page, hero feature label).

Brand narrative (§11): Cash App launched 2013 by Block, Inc. (then Square, Inc.; Jack Dorsey
co-founder) as "Square Cash"; 2024 brand refresh / portal by Index Studio (Awwwards SOTD).
These are widely documented public facts; the 2013 launch and Block/Square lineage are
general public knowledge, the portal/Index Studio attribution is corroborated by the live
brand portal and press coverage (Creative Bloq, Awwwards).

Personas (§13) are fictional archetypes informed by publicly observable Cash App user
segments (younger US consumers, P2P senders, first-time investors). Names are illustrative;
they do not refer to real people.

Interpretive claims (e.g., "one hero color, used with intent", "rejection of legacy bank
aesthetics") are editorial readings connecting Cash App's documented design language to its
positioning, anchored in verbatim portal copy where quoted.
-->
