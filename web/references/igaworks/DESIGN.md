---
id: igaworks
name: IGAWorks
display_name_kr: 아이지에이웍스
country: KR
category: marketing
homepage: "https://www.igaworks.com/"
primary_color: "#1a1d23"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=igaworks.com&sz=128"
verified: "2026-07-02"
added: "2026-07-02"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-07-02"
  note: "primary = corporate ink (#1a1d23) — the iGA logotype color, hero heading, and primary CTA background. Single blue action accent (#3464f4) on the newsletter subscribe button; red (#ef4343) and green (#17cf63) are data/status accents that echo the tricolor logo dots. Flat, shadowless system on white."
  colors:
    primary: "#1a1d23"
    canvas: "#ffffff"
    body: "#373f49"
    slate: "#1e293b"
    muted: "#4f5864"
    muted-alt: "#4b5563"
    hairline: "#e5e7eb"
    surface: "#f2f5f8"
    surface-alt: "#f4f4f6"
    accent-blue: "#3464f4"
    accent-red: "#ef4343"
    accent-green: "#17cf63"
    on-primary: "#ffffff"
  typography:
    family: { sans: "Pretendard Variable", fallback: "Pretendard" }
    display-hero: { size: 88, weight: 900, lineHeight: 1.1, use: "Home hero H1 (Built on Data. Driven by AI.)" }
    display:      { size: 56, weight: 700, lineHeight: 1.2, use: "Page H1 (Solutions by IGAWorks)" }
    section:      { size: 36, weight: 700, lineHeight: 1.3, use: "Section headings" }
    category:     { size: 28, weight: 600, lineHeight: 1.2, use: "Solution category heads (Data Infrastructure)" }
    card-title:   { size: 24, weight: 700, lineHeight: 1.4, use: "Solution card titles" }
    subhead:      { size: 18, weight: 700, use: "Small block heads (newsletter)" }
    body:         { size: 16, weight: 400, lineHeight: 1.5, use: "Standard reading text, Pretendard" }
    nav:          { size: 16, weight: 400, use: "Top nav links" }
    button:       { size: 15, weight: 500, use: "Primary CTA label" }
    button-sm:    { size: 14, weight: 500, use: "Secondary / subscribe button label" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 20, xl: 24, xxl: 40, section: 64 }
  rounded: { sm: 8, md: 12, full: 9999 }
  shadow:
    none: "none"
  components:
    cta-primary: { type: button, bg: "#1a1d23", fg: "#ffffff", radius: "12px", height: "43px", padding: "10px 24px", font: "15px / 500 Pretendard", use: "Header primary CTA (문의하기) — dark ink action" }
    cta-outline: { type: button, bg: "#ffffff", fg: "#1a1d23", border: "1px solid #e5e7eb", radius: "12px", height: "43px", padding: "10px 20px", font: "14px / 500 Pretendard", use: "Secondary link button (바로가기) on solution cards" }
    subscribe-button: { type: button, bg: "#3464f4", fg: "#ffffff", radius: "8px", height: "41px", padding: "10px 20px", font: "14px / 500 Pretendard", use: "Newsletter subscribe (구독) — the single blue accent action" }
    newsletter-input: { type: input, bg: "#ffffff", fg: "#1a1d23", border: "1px solid #e5e7eb", radius: "8px", height: "43px", padding: "10px 16px", font: "15px / 400 Pretendard", use: "Newsletter email field" }
    solution-card: { type: card, bg: "#ffffff", fg: "#1a1d23", border: "1px solid #e5e7eb", radius: "12px", use: "White solution / feature card, hairline outline, no shadow" }
    surface-card: { type: card, bg: "#f2f5f8", fg: "#1a1d23", radius: "12px", use: "Tinted cool-grey data/stat card" }
    nav-link: { type: tab, fg: "#4f5864", font: "16px / 400 Pretendard", active: "text #1a1d23", use: "Top nav items (Solution / Data / Culture / Blog)" }
    accent-badge: { type: badge, bg: "rgba(239, 67, 67, 0.1)", fg: "#ef4343", radius: "9999px", font: "13px / 500 Pretendard", use: "Data / alert accent pill (tinted red)" }
  components_harvested: true
---

# Design System Inspiration of IGAWorks

## 1. Visual Theme & Atmosphere

IGAWorks (아이지에이웍스) is Korea's data-and-AI marketing company, and its corporate site reads exactly like the tagline stamped across the hero: *"Built on Data. Driven by AI."* The aesthetic is confident monochrome — a pure white canvas (`#ffffff`) carrying near-black ink headings (`#1a1d23`) and quiet slate body copy (`#373f49`), with almost no chrome, no gradients, and no drop shadows. This is the visual language of a serious infrastructure company: it wants to look like the neutral, trustworthy substrate that thousands of brands build on top of, not a flashy consumer app. The restraint is the message — the data is the color.

The typographic personality is entirely `Pretendard Variable`, the de-facto Korean product typeface, pushed to an extreme weight range. The home hero runs at a massive **88px / weight 900** — a black, declarative slab that projects scale and certainty. Section headings step down to 36px / 700 and 28px / 600, card titles to 24px / 700, while body and navigation settle into a calm 16px / 400 with 1.5 line-height. There is no secondary display font and no serif; the entire hierarchy is built from one variable family flexing between weight 900 and weight 400. That single-font discipline reinforces the engineered, systematic feel.

Color is deployed with deliberate scarcity. The primary "action" is not a saturated brand hue but the dark ink itself — the header CTA (문의하기) is a `#1a1d23` block with white text and a soft 12px radius. The one genuinely chromatic action, the newsletter subscribe button, is a clean royal blue (`#3464f4`). Beyond that, red (`#ef4343`) and green (`#17cf63`) appear only as data and status accents — a direct echo of the red / yellow / blue tricolor dots that sit above the "iGA" logotype. Separation is done with flat cool-grey surfaces (`#f2f5f8`, `#f4f4f6`) and hairline `#e5e7eb` borders rather than elevation; live inspection found `box-shadow: none` across the hero, nav, cards, and CTAs. The result is a flat, fast, data-first system that feels like the dashboard behind the marketing, not the marketing itself.

**Key Characteristics:**
- One typeface, extreme weight range — `Pretendard Variable` from weight 900 (88px hero) down to 400 body
- Dark ink (`#1a1d23`) as the primary action color, not a saturated brand hue — the CTA is near-black on white
- Single blue accent (`#3464f4`) reserved for the newsletter subscribe action
- Tricolor data accents — red (`#ef4343`) and green (`#17cf63`) echoing the logo's red/yellow/blue dots
- Near-black ink (`#1a1d23`) for headings instead of pure black; slate (`#373f49`) for body
- Flat, shadowless depth — cool-grey `#f2f5f8` / `#f4f4f6` surfaces and `#e5e7eb` hairlines do the separating
- Soft-but-restrained radius — 12px on CTAs and cards, 8px on inputs and the subscribe button
- Cool-grey neutral ladder (`#1e293b` → `#4f5864` → `#4b5563`) for text hierarchy

## 2. Color Palette & Roles

### Primary
- **Corporate Ink** (`#1a1d23`): The primary brand color — the "iGA" logotype color, the hero H1, and the primary CTA background. A near-black warm charcoal used as the dominant "action" and heading read across the whole site.
- **Pure White** (`#ffffff`): Page background, card surfaces, and the text color on the dark ink CTA (`on-primary`).

### Accents
- **Action Blue** (`#3464f4`): The single saturated action color, reserved for the newsletter subscribe button (구독). A clean royal blue that matches the blue dot of the logo mark.
- **Data Red** (`#ef4343`): Data-visualization and alert accent, usually as a 10%-tint pill (`rgba(239, 67, 67, 0.1)`) with red text. Echoes the red logo dot.
- **Data Green** (`#17cf63`): Positive / growth data accent for metrics and status. Echoes the "up" direction in data displays.

### Text Hierarchy
- **Corporate Ink** (`#1a1d23`): Headings, hero, strong labels, active nav.
- **Slate Heading** (`#1e293b`): Solution category subheadings (e.g. "Data Infrastructure").
- **Body Slate** (`#373f49`): Standard body copy and descriptions — the document default text color.
- **Muted Slate** (`#4f5864`): Inactive navigation links and secondary labels.
- **Muted Alt** (`#4b5563`): Tertiary captions and fine print.

### Surface & Borders
- **Surface Grey** (`#f2f5f8`): Cool-grey tinted surface for data/stat cards and segmented blocks.
- **Surface Alt** (`#f4f4f6`): A warmer secondary grey for alternating bands.
- **Hairline** (`#e5e7eb`): Thin borders, card outlines, and dividers — the primary separation device in a shadow-free system.

## 3. Typography Rules

### Font Family
- **Sans (only family)**: `Pretendard Variable`, falling back to `Pretendard` then system sans. Used for every text element — hero, headings, body, nav, and buttons alike.
- There is no secondary display or monospace face; hierarchy comes entirely from weight and size.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Home Hero | Pretendard Variable | 88px (5.50rem) | 900 | ~1.1 | "Built on Data. Driven by AI." — black slab |
| Page H1 | Pretendard Variable | 56px (3.50rem) | 700 | ~1.2 | Section-page titles (Solutions by IGAWorks) |
| Section Heading | Pretendard Variable | 36px (2.25rem) | 700 | ~1.3 | Home section titles |
| Category Head | Pretendard Variable | 28px (1.75rem) | 600 | ~1.2 | Solution category labels (Data Infrastructure) |
| Card Title | Pretendard Variable | 24px (1.50rem) | 700 | ~1.4 | Solution / feature card headings |
| Sub-head | Pretendard Variable | 18px (1.13rem) | 700 | normal | Small block heads (newsletter) |
| Body | Pretendard Variable | 16px (1.00rem) | 400 | 1.5 (24px) | Standard reading text |
| Nav Link | Pretendard Variable | 16px (1.00rem) | 400 | normal | Top navigation items |
| Button | Pretendard Variable | 15px (0.94rem) | 500 | normal | Primary CTA label |
| Button Small | Pretendard Variable | 14px (0.88rem) | 500 | normal | Secondary / subscribe labels |

### Principles
- **One family, full weight range**: `Pretendard Variable` carries everything; the jump from weight 900 (hero) to 400 (body) is the system's primary hierarchy signal.
- **Black hero, calm body**: the 88px / 900 hero is the loudest element on the site; everything below it deliberately steps down in both size and weight.
- **Medium (500) for interactive labels**: buttons and links use weight 500 to feel tappable without competing with the 700–900 headings.
- **Hangul-first body sizing**: body sits at 16px with a generous 1.5 line-height (24px) for dense Korean legibility in an information-heavy layout.

## 4. Component Stylings

### Buttons

**Primary CTA (Ink)**
- Background: `#1a1d23`
- Text: `#ffffff`
- Radius: 12px
- Padding: 10px 24px
- Height: 43px
- Font: 15px Pretendard weight 500
- Use: Header primary call-to-action ("문의하기") — the dominant dark-ink action

**Secondary Link (Outline)**
- Background: `#ffffff`
- Text: `#1a1d23`
- Border: 1px solid `#e5e7eb`
- Radius: 12px
- Padding: 10px 20px
- Height: 43px
- Font: 14px Pretendard weight 500
- Use: In-card link buttons ("바로가기") on solution cards

**Subscribe (Blue Accent)**
- Background: `#3464f4`
- Text: `#ffffff`
- Radius: 8px
- Padding: 10px 20px
- Height: 41px
- Font: 14px Pretendard weight 500
- Use: Newsletter subscribe ("구독") — the single saturated blue action

### Inputs & Forms

**Newsletter Field**
- Background: `#ffffff`
- Text: `#1a1d23`
- Border: 1px solid `#e5e7eb`
- Radius: 8px
- Padding: 10px 16px
- Height: 43px
- Font: 15px Pretendard weight 400
- Use: Newsletter email capture, paired inline with the blue subscribe button

### Cards & Containers

**White Solution Card**
- Background: `#ffffff`
- Text: `#1a1d23`
- Border: 1px solid `#e5e7eb`
- Radius: 12px
- Use: Solution / feature card with hairline outline and no shadow

**Tinted Data Card**
- Background: `#f2f5f8`
- Text: `#1a1d23`
- Radius: 12px
- Use: Cool-grey data/stat card sitting on the white canvas

### Badges

**Data Accent Pill**
- Background: `rgba(239, 67, 67, 0.1)`
- Text: `#ef4343`
- Radius: 9999px (full)
- Font: 13px Pretendard weight 500
- Use: Data / alert accent tag (tinted red pill)

### Navigation
- Background: `#ffffff`
- Text: `#4f5864` (inactive)
- Active: ink `#1a1d23` text on the current item
- Font: 16px Pretendard weight 400
- Use: Top horizontal nav ("Solution", "Data", "Culture", "Blog") with the ink CTA right-aligned

---

**Verified:** 2026-07-02
**Tier 1 sources:** https://www.igaworks.com/ ; https://www.igaworks.com/solutions ; https://www.igaworksblog.com/
**Tier 2 sources:** getdesign.md/igaworks (0 DESIGN.md files — no entry); styles.refero.design/?q=igaworks (no matching brand — 96 fuzzy results, all unrelated)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: ~4px
- Scale: 4px, 8px, 12px, 16px, 20px, 24px, 40px, 64px
- Notable: Button padding lands at 10px 24px (primary) and 10px 20px (secondary/subscribe), giving compact, precise hit areas consistent with a data-tool aesthetic

### Grid & Container
- Centered content column with the oversized hero (88px / 900) as the anchor
- Solution offerings arranged as a grid of white cards, each with a hairline outline and a "바로가기" link button
- Home sections alternate between white (`#ffffff`) and faint tinted (`#f2f5f8` / `#f4f4f6`) full-width bands
- Newsletter capture is a single inline row: email field plus the blue subscribe button

### Whitespace Philosophy
- **Room to breathe**: despite being a data company, the marketing surface is airy — generous vertical rhythm separates each solution block.
- **Flat segmentation**: sections separate by background tint and `#e5e7eb` hairlines, never by shadow or heavy borders.
- **Ink as anchor**: the near-black hero and CTA give each screen a single point of maximum contrast; everything else recedes into slate and grey.

### Border Radius Scale
- Small (8px): inputs, the blue subscribe button
- Medium (12px): primary CTA, outline buttons, cards — the workhorse radius
- Full (9999px): accent pills / badges

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, hero, headings, most surfaces |
| Tint (Level 1) | `#f2f5f8` / `#f4f4f6` background shift | Card/section separation without elevation |
| Hairline (Level 2) | `1px solid #e5e7eb` border | White card outlines, dividers |

**Shadow Philosophy**: IGAWorks runs a near-shadowless system. Live inspection across the homepage and solutions page found `box-shadow: none` on the hero, nav, CTAs, cards, and inputs. Depth and grouping are communicated entirely through flat tinted surfaces (`#f2f5f8`, `#f4f4f6`) and thin `#e5e7eb` hairlines. This is a deliberate modern-flat choice: it keeps the data-marketing UI feeling clean, fast, and engineered, avoiding the heavy card-stack look of legacy corporate sites. When emphasis is needed, the system reaches for the dark ink (`#1a1d23`) or the single blue accent (`#3464f4`), never elevation.

## 7. Do's and Don'ts

### Do
- Use `Pretendard Variable` for every text element — one family, weight 900 down to 400
- Use dark ink (`#1a1d23`) as the primary action color and heading color
- Reserve the blue accent (`#3464f4`) for the single subscribe/action moment
- Use near-black ink (`#1a1d23`) for headings instead of pure black; slate (`#373f49`) for body
- Separate sections with flat tinted surfaces (`#f2f5f8` / `#f4f4f6`) and `#e5e7eb` hairlines, not shadows
- Keep radius restrained — 12px on CTAs and cards, 8px on inputs
- Let red (`#ef4343`) and green (`#17cf63`) appear only as data/status accents, echoing the tricolor logo dots
- Give the hero maximum weight (900) so it is the single loudest element per screen

### Don't
- Use drop shadows for elevation — IGAWorks is a flat, shadow-free system
- Introduce a saturated brand hue as the primary action — the primary action is dark ink
- Spread the blue accent (`#3464f4`) across many elements — it marks one action
- Use pure black (`#000000`) for headings — reserve near-black ink `#1a1d23`
- Add a second display or serif typeface — hierarchy comes from Pretendard weight alone
- Use heavy or colored borders — separation is a `#e5e7eb` hairline
- Turn the data-accent red/green into decorative brand color — keep them for data and status
- Set the hero in a light weight — it is always weight 900

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero compresses from 88px, cards stack |
| Tablet | 640-1024px | Moderate padding, 2-up solution cards |
| Desktop | 1024-1440px | Full layout, centered hero, multi-column solution grid |

### Touch Targets
- Primary CTA at 43px height with 10px 24px padding — comfortably tappable
- Subscribe button at 41px height, paired inline with the 43px email field
- Nav links spaced within the header for touch

### Collapsing Strategy
- Hero: 88px black headline scales down on mobile, weight 900 maintained
- Solution card grid: multi-column → 2-up → stacked single column
- Tinted / white alternating bands maintain full-width treatment
- Newsletter row: inline field + button → stacked on narrow viewports

### Image Behavior
- Product / solution imagery carries no shadow at any size, consistent with the flat system
- Cards maintain 12px radius across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary action / heading: Corporate Ink (`#1a1d23`)
- Background: Pure White (`#ffffff`)
- Blue accent action: Action Blue (`#3464f4`)
- Body text: Body Slate (`#373f49`)
- Category heading: Slate (`#1e293b`)
- Muted / nav: Muted Slate (`#4f5864`)
- Tinted surface: Surface Grey (`#f2f5f8`) / Surface Alt (`#f4f4f6`)
- Hairline: `#e5e7eb`
- Data accents: Red (`#ef4343`), Green (`#17cf63`)

### Example Component Prompts
- "Create a hero on white background. Headline at 88px Pretendard weight 900, color #1a1d23 ('Built on Data. Driven by AI.'). Right-aligned primary CTA: #1a1d23 background, white text, 12px radius, 10px 24px padding, 15px weight 500."
- "Design a solution card: white background, 1px solid #e5e7eb border, 12px radius, no shadow. Title 24px Pretendard weight 700, #1a1d23. Body 16px weight 400, #373f49. A '바로가기' outline link button inside: white bg, #1a1d23 text, 1px #e5e7eb border, 12px radius."
- "Build a newsletter row: white email input (1px solid #e5e7eb, 8px radius, 10px 16px padding, 15px) next to a blue subscribe button (#3464f4 background, white text, 8px radius, 14px weight 500)."
- "Create top nav: white header. Pretendard 16px weight 400 links in #4f5864, active item in #1a1d23. Ink CTA ('문의하기') right-aligned, 12px radius pill-ish block."

### Iteration Guide
1. `Pretendard Variable` for everything; weight 900 for hero, 700 for headings, 400 for body, 500 for buttons
2. Dark ink (`#1a1d23`) is the primary action — don't swap it for a saturated hue
3. Blue (`#3464f4`) marks one action only (subscribe)
4. No shadows — separate with `#f2f5f8` / `#f4f4f6` tint and `#e5e7eb` hairlines
5. Radius: 12px CTAs/cards, 8px inputs, full pills for badges
6. Heading color is `#1a1d23` ink, body is `#373f49` slate — never pure black
7. Red (`#ef4343`) and green (`#17cf63`) are data/status accents, echoing the logo dots

---

## 10. Voice & Tone

IGAWorks' voice is **confident, technical, and evidence-first** — an infrastructure company that speaks in capabilities and numbers rather than adjectives. The hero line "Built on Data. Driven by AI." is the register in miniature: two short declarative fragments, English-forward, zero hype punctuation. Korean copy stays equally plain and functional ("솔루션 자세히 보기", "문의하기", "매주 뉴스레터로 인사이트를 받아보세요"). The company positions itself as the neutral data substrate other brands rely on, so the tone is that of a trusted platform, not a pitch.

| Context | Tone |
|---|---|
| Hero headline | Declarative, English-forward fragments. "Built on Data. Driven by AI." Certain, not loud. |
| Solution labels | Functional, capability-named. "Data Infrastructure", "AI Action & Creative", "Media & Network". |
| CTAs | Direct and low-pressure. "문의하기", "바로가기", "구독". |
| Data/scale claims | Concrete and numeric. "with 4000+ Global Brands". States scope plainly. |
| Newsletter / content | Insight-framed. "매주 뉴스레터로 인사이트를 받아보세요." Positions the brand as a source of intelligence. |

**Voice samples (verbatim from live corporate site):**
- "Built on Data. Driven by AI." — home hero H1 (mission in two fragments). *(verified live 2026-07-02)*
- "Solutions by IGAWorks" — section / page H1 (portfolio framing). *(verified live 2026-07-02)*
- "with 4000+ Global Brands" — scale claim H2 (concrete, numeric). *(verified live 2026-07-02)*

**Forbidden register**: superlative hype ("revolutionary", "world's best"), exclamation-heavy marketing, vague buzzwords with no capability behind them, and any tone that reads as a hard sell rather than a trusted platform.

## 11. Brand Narrative

IGAWorks (아이지에이웍스) is a Korean marketing-technology and data company that has grown from mobile advertising attribution into an integrated **data-and-AI** platform. Its founding problem was the opacity of the mobile marketing ecosystem: advertisers and app publishers had no trustworthy, independent way to measure performance, understand the market, and act on it. IGAWorks' answer was to build the measurement and data infrastructure first — the attribution, the market index, the audience data — and then layer AI-driven action and creative on top of that foundation. The site's own three-act structure spells this out: "01 Data: The AI Moat", "02 The AI-Synthetic Audience", "03 AI Solutions, Built on the Data."

The product portfolio reflects that data-first logic — a spread of solutions across **Data Infrastructure**, **AI Action & Creative**, and **Media & Network**, including the widely-cited MobileIndex mobile-market intelligence service. The company frames its own advantage as the accumulated data itself: the "AI Moat" language positions proprietary data as the durable competitive edge that makes the AI layer credible.

What IGAWorks refuses, visible in its design: the flashy, gradient-heavy, shadow-stacked look of consumer marketing sites, and any aesthetic that would make it read as a single-product app rather than neutral infrastructure. What it embraces: a flat, monochrome, engineered surface; one typeface flexed across a huge weight range; dark ink as the dominant read; and color used with scientific scarcity — a single blue action, and red/green reserved for data and status. The design says *we are the data layer*, not *look at us*.

## 12. Principles

1. **Data before action.** The whole narrative is "Built on Data" first, "Driven by AI" second. *UI implication:* lead with evidence and numbers; let the action (the CTA, the blue button) be the quiet consequence, not the loud opener.
2. **Neutral infrastructure, not a pitch.** IGAWorks wants to read as the substrate other brands build on. *UI implication:* monochrome canvas, restrained color, no hard-sell chrome — trustworthy over flashy.
3. **One action color.** The blue accent (`#3464f4`) marks a single moment. *UI implication:* keep the saturated blue for the primary interactive action so the next step is never ambiguous.
4. **Flat and fast.** Engineered clarity beats decorative depth. *UI implication:* no shadows; separate with tint and hairlines; keep the page light and scannable like a dashboard.
5. **Weight is the hierarchy.** With one typeface, weight does the work. *UI implication:* weight 900 for the hero, 700 for headings, 400 for body — never introduce a second face to signal importance.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable IGAWorks user segments (app marketers, growth teams, market analysts, agency planners), not individual people.*

**정민호, 34, 서울.** A growth marketer at a mobile app company who uses IGAWorks' attribution and market-index data to benchmark competitors and plan spend. Trusts the brand because the interface reads like a measurement tool, not a sales funnel.

**Sarah Kim, 29, Singapore.** A regional performance-marketing lead at a global brand running campaigns across APAC. Relies on IGAWorks' audience and media data; values the plain, English-forward capability labels that let her scan the portfolio quickly.

**이지현, 41, 판교.** A data analyst at an agency who pulls MobileIndex-style market intelligence into client decks. Appreciates the calm, flat, high-legibility layout because she spends all day reading dense numeric data and wants zero visual noise.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no data / no results)** | White canvas. Single Corporate Ink (`#1a1d23`) line at body size explaining there is nothing to show, with one ink CTA to adjust or start. No illustration clutter. |
| **Empty (saved / list, none yet)** | Muted Slate (`#4f5864`) single line stating nothing saved yet, plus a path back. Calm and honest. |
| **Loading (data fetch)** | Skeleton blocks on `#f2f5f8` tinted surface at final dimensions, 12px radius. Flat pulse — no shadow shimmer, consistent with the shadowless system. |
| **Loading (in-place refresh)** | Subtle blue (`#3464f4`) progress indicator; previous values stay visible during refresh. |
| **Error (request failed)** | Inline message in Corporate Ink with a plain-language explanation and a retry. A tinted red (`rgba(239, 67, 67, 0.1)`) pill flags the failing item; never a bare "오류". |
| **Error (form validation)** | Field-level message below the input describing what is valid, not just "필수". |
| **Success (submitted / subscribed)** | Brief inline confirmation in a calm tone; next step linked immediately below. Green (`#17cf63`) marks the positive state. No celebratory emoji. |
| **Skeleton** | `#f2f5f8` blocks at final dimensions, 12px radius, flat pulse. |
| **Disabled** | Muted Slate (`#4b5563`) text on reduced-opacity surface; the ink/blue actions fade rather than switch to a foreign grey. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, button press, focus |
| `motion-standard` | 200ms | Card / section reveal, dropdown |
| `motion-slow` | 320ms | Page-level transitions, hero reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, sections, sheets |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is functional and quiet — consistent with the flat, engineered aesthetic. Cards and solution blocks fade-in from below at `motion-standard / ease-enter`; the oversized hero may reveal once on load at `motion-slow`. Buttons respond to press with a subtle opacity/scale shift, never a bounce. A data-and-infrastructure brand signals steadiness, not playfulness — no spring, no overshoot. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and the interface remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-07-02) via playwright getComputedStyle on
https://www.igaworks.com/ and https://www.igaworks.com/solutions:
- Home hero H1 "Built on Data.Driven by AI." — Pretendard Variable 88px / weight 900 / color rgb(26,29,35) #1a1d23
- Section H2 "Solutions by IGAWorks→" — 36px / 700 / rgb(26,29,35)
- Category H2 "Data Infrastructure" — 28px / 600 / rgb(30,41,59) #1e293b
- Three-act H3s "01 Data: The AI Moat", "02 The AI-Synthetic Audience", "03 AI Solutions, Built on the Data" — 28px / 700
- Scale claim H2 "with 4000+ Global Brands" — 36px / 700
- Primary CTA "문의하기" — bg rgb(26,29,35) #1a1d23 / white text / radius 12px / padding 10px 24px / 15px 500
- Newsletter subscribe "구독" — bg rgb(52,100,244) #3464f4 / white text / radius 8px / padding 10px 20px / 14px 500
- Secondary "바로가기" — bg #ffffff / #1a1d23 text / 1px solid rgb(229,231,235) #e5e7eb / radius 12px
- Nav links (Solution/Data/Culture/Blog) — rgb(79,88,100) #4f5864 / 16px / 400
- Body — Pretendard Variable / rgb(55,63,73) #373f49 / 16px / line-height 24px (1.5)
- box-shadow: none across hero, nav, cards, CTAs (shadowless system confirmed)
- Page titles: "IGAWorks | Built on Data. Driven by AI." and "솔루션 | IGAWorks"

Token-level claims (§1-9) are sourced from this live inspection.

Voice samples (§10) are verbatim from the live corporate site (hero H1, page H1, scale H2).

Brand narrative (§11): IGAWorks (아이지에이웍스) is a Korean marketing-technology / data
company; the "01 Data: The AI Moat / 02 The AI-Synthetic Audience / 03 AI Solutions"
structure and the "with 4000+ Global Brands" claim are verbatim from the live homepage.
The MobileIndex product association and the broader data-first positioning are widely
documented public facts and are reflected on the site's Solutions page; they are not
quoted from a single verified corporate statement in this turn.

Personas (§13) are fictional archetypes informed by publicly observable IGAWorks user
segments (app marketers, growth teams, market analysts). Names are illustrative; they do
not refer to real people.

Interpretive claims (e.g., "neutral infrastructure not a pitch", "weight is the
hierarchy", "data before action") are editorial readings connecting IGAWorks' observed
design to its stated positioning, not directly sourced IGAWorks statements.
-->
