---
id: dropbox
name: Dropbox
country: US
category: productivity
homepage: "https://www.dropbox.com"
primary_color: "#0061fe"
logo:
  type: simpleicons
  slug: dropbox
verified: "2026-06-11"
added: "2026-06-11"
omd: "0.1"
ds:
  name: Dropbox Brand Guidelines
  url: https://brand.dropbox.com
  type: brand
  description: "Official brand site (dropbox.design redirects here) — framework, voice & tone, logo, typography, iconography, color, imagery, motion."
tokens:
  source: reconciled
  extracted: "2026-06-11"
  note: "Core trio from official brand site, confirmed live: Dropbox Blue #0061fe on Coconut cream #f7f5f2 with Graphite ink #1e1919. Text on blue is coconut, not pure white. Flat, shadowless marketing system."
  colors:
    primary: "#0061fe"
    coconut: "#f7f5f2"
    graphite: "#1e1919"
    canvas: "#f7f5f2"
    surface-white: "#ffffff"
    sand: "#eee9e2"
    graphite-deep: "#1c1d21"
    muted: "#716b61"
    on-primary: "#f7f5f2"
    azalea: "#cd2f7b"
    sunset: "#fa551e"
    tangerine: "#ff8c19"
    crimson: "#9b0032"
  typography:
    family: { display: "Sharp Grotesk", body: "Atlas Grotesk" }
    display-hero: { size: 40, weight: 500, lineHeight: 1.20, use: "Hero headline, Sharp Grotesk Medium" }
    section:      { size: 32, weight: 400, lineHeight: 1.20, use: "Section titles, Sharp Grotesk 23 (wide cut)" }
    heading-sm:   { size: 26, weight: 500, lineHeight: 1.30, use: "Feature block headings, Sharp Grotesk" }
    subheading:   { size: 20, weight: 500, lineHeight: 1.20, use: "Social-proof / card heads, Atlas Grotesk" }
    body:         { size: 16, weight: 400, lineHeight: 1.50, use: "Standard reading text, Atlas Grotesk" }
    nav:          { size: 16, weight: 400, lineHeight: 1.50, use: "Header nav items, Atlas Grotesk" }
    caption:      { size: 14, weight: 400, lineHeight: 1.55, use: "Footer links, legal, metadata" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 72 }
  rounded: { sm: 8, md: 12, lg: 16, full: 100 }
  shadow:
    none: "none"
  components:
    button-primary: { type: button, bg: "#0061fe", fg: "#f7f5f2", border: "2px solid #0061fe", radius: "16px", padding: "16px 24px", height: "55px", font: "16px / 400 Atlas Grotesk", use: "Marketing/pricing CTA — Try Dropbox free, Buy now" }
    button-compact: { type: button, bg: "#0061fe", fg: "#f7f5f2", radius: "12px", padding: "0 12px", height: "40px", font: "16px / 400 Atlas Grotesk", use: "Get started CTA in the 72px global header" }
    button-outline: { type: button, fg: "#1e1919", border: "2px solid #1e1919", radius: "16px", padding: "16px 24px", height: "55px", font: "16px / 400 Atlas Grotesk", use: "Secondary CTA — Learn more" }
    nav-link: { type: tab, fg: "#1e1919", padding: "16px 12px", font: "16px / 400 Atlas Grotesk", use: "Global header item (Products, Solutions, Pricing)" }
    card-sand: { type: card, bg: "#eee9e2", fg: "#1e1919", radius: "12px", use: "Warm sand surface card alternating with cream canvas" }
    card-menu: { type: card, fg: "#1e1919", radius: "12px", padding: "16px", height: "92px", use: "Mega-menu product entry card (Dropbox, Replay, Sign, Dash)" }
    footer-link: { type: listItem, bg: "#1e1919", fg: "#f7f5f2", font: "14px / 400 Atlas Grotesk", use: "Footer navigation link on graphite band" }
  components_harvested: true
---

# Design System Inspiration of Dropbox

## 1. Visual Theme & Atmosphere

Dropbox's marketing surface reads like a warm editorial workspace rather than a sterile SaaS dashboard. The canvas is not white but **Coconut** — a warm cream (`#f7f5f2`) that the official brand site names as one of its three core colors — layered with pure white panels (`#ffffff`) and a deeper warm sand (`#eee9e2`) for alternating card surfaces. Text sits in **Graphite** (`#1e1919`), a warm near-black with a reddish undertone instead of a cold neutral. Against this paper-like field, a single electric **Dropbox Blue** (`#0061fe`) carries every primary action. The most telling micro-decision in the system: text on blue buttons is coconut cream (`#f7f5f2`), not pure white — even at maximum contrast, the brand keeps its warmth.

Typography is a two-font conversation. **Sharp Grotesk** — Dropbox's custom variable typeface, "DB Sharp Grotesk", commissioned from the Sharp Type foundry — owns every headline at a confident but unshouty weight 500 (40px hero, 26px feature heads), with a wider stylistic cut ("Sharp Grotesk 23") appearing at weight 400 for 32px section titles. **Atlas Grotesk** handles everything functional: body copy, nav, buttons, and footers at 16px/400. The pairing gives the brand its signature register — geometric personality in the display layer, calm legibility everywhere else.

Depth is essentially flat. Live inspection found `box-shadow: none` across CTAs, nav, and cards; separation comes from surface shifts (cream → white → sand → graphite) and chunky 2px borders rather than elevation. Geometry is soft but not bubbly: 12px is the workhorse radius (60 occurrences on the homepage), 16px for large CTAs, with occasional 100px full-pill moments. Full-width graphite bands (`#1e1919`, and a deeper `#1c1d21` variant) flip the palette for security and enterprise messaging, with coconut text glowing against the dark. Accent color is deliberately "diverse and unexpected" per the brand guidelines — a magenta azalea (`#cd2f7b`) shows up in live decoration, drawn from a 16-color accent wheel.

**Key Characteristics:**
- Coconut cream (`#f7f5f2`) canvas instead of white — paper-warm, editorial
- Graphite (`#1e1919`) warm near-black for text and dark bands
- One action color: Dropbox Blue (`#0061fe`) on every primary CTA
- Coconut (not white) text on blue — warmth preserved at full contrast
- Custom Sharp Grotesk display over Atlas Grotesk body
- Flat, shadowless depth — surface shifts and 2px borders do the separating
- 12px workhorse radius; 16px for large CTAs; 100px pill accents
- 2px borders on all buttons, including filled ones (border matches fill)

## 2. Color Palette & Roles

### Core (official brand trio)
- **Dropbox Blue** (`#0061fe`): The primary brand color and the system's single action color. Every primary CTA ("Get started", "Try Dropbox free", "Buy now") is this blue. Confirmed identical on brand.dropbox.com swatches and live computed styles.
- **Coconut** (`#f7f5f2`): The warm cream canvas — page background, and the text color on blue buttons and graphite bands. The brand's "white".
- **Graphite** (`#1e1919`): Warm near-black for headings, body text, outline-button borders, and full-width dark sections.

### Surfaces
- **Pure White** (`#ffffff`): Elevated panels and cards sitting on the coconut canvas.
- **Sand** (`#eee9e2`): Deeper warm beige for alternate card surfaces and tinted sections.
- **Graphite Deep** (`#1c1d21`): A cooler near-black variant observed on dark feature panels.

### Text Hierarchy
- **Graphite** (`#1e1919`): Headings, body, nav — the default ink.
- **Muted Taupe** (`#716b61`): Secondary text. Live value is `rgba(82, 74, 62, 0.82)` — a warm taupe at 82% opacity that composites to approximately `#716b61` over the coconut canvas.
- **Coconut** (`#f7f5f2`): Text on blue and on graphite bands; footer links at 14px.

### Accents (from the official 16-color accent wheel)
- **Azalea** (`#cd2f7b`): Magenta accent, observed live in decorative elements.
- **Sunset** (`#fa551e`): Warm orange-red accent.
- **Tangerine** (`#ff8c19`): Orange accent.
- **Crimson** (`#9b0032`): Deep red accent.
- The brand guidelines list further accents (Pink, Rust, Gold, Vivid Vargas, Canopy, Lime, Ocean, Zen, Navy, Cloud, Plum, Orchid) plus a 20-step grey scale; the guidance: "A diverse and unexpected color palette is a key visual expression of our brand."

## 3. Typography Rules

### Font Family
- **Display**: `Sharp Grotesk` ("DB Sharp Grotesk") — custom variable typeface by Sharp Type. Headlines, feature heads. A wider cut, `Sharp Grotesk 23`, appears for large section titles.
- **Body**: `Atlas Grotesk` (`Atlas Grotesk Web`) — body copy, nav, buttons, footers, captions.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Display Hero | Sharp Grotesk | 40px (2.50rem) | 500 | 1.20 (48px) | Hero headline ("Get to work, with a lot less work") |
| Section Title | Sharp Grotesk 23 | 32px (2.00rem) | 400 | 1.20 (38.4px) | Wide-cut section titles |
| Feature Heading | Sharp Grotesk | 26px (1.63rem) | 500 | 1.30 (33.8px) | Feature block heads |
| Subheading | Atlas Grotesk | 20px (1.25rem) | 500 | 1.20 (24px) | Social-proof lines, card heads |
| Body / Nav | Atlas Grotesk | 16px (1.00rem) | 400 | 1.50 | Reading text, nav items, button labels |
| Caption / Footer | Atlas Grotesk | 14px (0.88rem) | 400 | 1.55 | Footer links, legal |

### Principles
- **Medium, never bold**: Display sits at weight 500 — assertive without shouting. The 32px section tier even drops to 400 in the wide cut. There is no 700+ anywhere in the observed marketing hierarchy.
- **Variable type as a tool**: The brand guidelines note the variable version of DB Sharp Grotesk is used to optically adjust headline weight on light vs dark backgrounds.
- **Two fonts, two jobs**: Sharp Grotesk persuades; Atlas Grotesk explains. They never swap roles.
- **Normal tracking**: Letter-spacing stays `normal` across the measured hierarchy — the warmth comes from the letterforms, not from compression.
- **"Type is what meaning looks like"** — the maxim quoted on the official typography page (Max Phillips, Sharp Type).

## 4. Component Stylings

### Buttons

**Primary (Marketing CTA)**
- Background: `#0061fe`
- Text: `#f7f5f2`
- Border: 2px solid `#0061fe`
- Radius: 16px
- Padding: 16px 24px
- Height: 55px
- Font: 16px / 400 / Atlas Grotesk
- Use: "Try Dropbox free", "Buy now" — primary conversion CTA on homepage and pricing

**Compact Header CTA**
- Background: `#0061fe`
- Text: `#f7f5f2`
- Border: 2px solid `#0061fe`
- Radius: 12px
- Padding: 0px 12px
- Height: 40px
- Font: 16px / 400 / Atlas Grotesk
- Use: "Get started" in the 72px global header

**Outline (Secondary)**
- Background: transparent
- Text: `#1e1919`
- Border: 2px solid `#1e1919`
- Radius: 16px
- Padding: 16px 24px
- Height: 55px
- Font: 16px / 400 / Atlas Grotesk
- Use: "Learn more" and secondary "Try Dropbox free" alongside a primary

**Text Button**
- Background: transparent
- Text: `#1e1919`
- Font: 13.33px / 400
- Use: "or buy now" tertiary action under pricing CTAs

A hero-size primary also appears at 71px height with 24px uniform padding; on graphite bands the outline button flips to a coconut `#f7f5f2` border and text. Filled buttons carry a 2px border in their own fill color, so filled and outline variants stay dimensionally identical.

### Navigation

**Header Nav Item**
- Background: transparent
- Text: `#1e1919`
- Padding: 16px 12px
- Font: 16px / 400 / Atlas Grotesk
- Use: "Products", "Solutions", "Enterprise", "Pricing" in the 72px header

### Cards & Containers

**Mega-menu Product Card**
- Background: transparent
- Text: `#1e1919`
- Radius: 12px
- Padding: 16px
- Height: 92px
- Use: Product entries (Dropbox, Replay, Sign, Dash, DocSend) inside the nav dropdown

**Sand Surface Card**
- Background: `#eee9e2`
- Text: `#1e1919`
- Radius: 12px
- Use: Warm tinted card alternating with white panels on the coconut canvas

**Graphite Band**
- Background: `#1e1919`
- Text: `#f7f5f2`
- Use: Full-width dark sections ("Security never comes second") that flip the palette

### Footer

**Footer Link**
- Background: `#1e1919`
- Text: `#f7f5f2`
- Font: 14px / 400 / Atlas Grotesk
- Use: Footer navigation links on the graphite band

---
**Verified:** 2026-06-11
**Tier 1 sources:** https://brand.dropbox.com (official brand site — color, typography, framework, voice-and-tone, motion; dropbox.design 301-redirects here), https://www.dropbox.com (live computed-style inspect), https://www.dropbox.com/plans (live computed-style inspect, pricing surface)
**Tier 2 sources:** styles.refero.design/style/2b41e7c4-1e8c-4ea2-a87f-51e24c57886e (Dropbox.com — confirms #0061fe / #f7f5f2 / #1e1919 / #eee9e2 / #cd2f7b, 16px button radius, flat shadowless system); getdesign.md/dropbox — not listed ("No designs found", also tried dropbox.com variant)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: ~4px with a 12/16/24 working rhythm
- Measured paddings: 12px (nav item horizontal), 16px (menu cards, CTA vertical), 24px (CTA horizontal, hero CTA)
- Section gaps run generous (~72px) between full-width bands

### Grid & Container
- 72px sticky global header on the coconut canvas
- Hero: two-column — headline + CTAs left, product visual right
- Feature sections alternate coconut (`#f7f5f2`), white, sand (`#eee9e2`), and graphite (`#1e1919`) full-width bands
- Mega-menu dropdowns arrange product cards (92px tall, 12px radius) in a grid
- Pricing: plan columns with repeated `#0061fe` CTAs, one per plan

### Whitespace Philosophy
- **Editorial air**: the cream canvas plus generous vertical rhythm makes marketing pages read like a magazine spread, not a feature checklist.
- **Band cadence**: light/dark alternation (coconut → white → graphite) paces the page; color shifts, not dividers, mark section boundaries.
- **Flat segmentation**: with no shadows, grouping is communicated by surface tint and the 2px border language.

### Border Radius Scale
- Small (8px): minor elements
- Medium (12px): the workhorse — menu cards, compact CTAs, content cards (60 occurrences live)
- Large (16px): marketing CTAs, large containers
- Full (100px): occasional pill accents

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Everything — buttons, nav, cards |
| Tint (Level 1) | Surface shift `#f7f5f2` → `#ffffff` → `#eee9e2` | Card/section separation |
| Border (Level 2) | 2px solid border (`#0061fe`, `#1e1919`, or `#f7f5f2` on dark) | Interactive emphasis |
| Inversion (Level 3) | Graphite band `#1e1919` with coconut text | Maximum-emphasis sections |

**Shadow Philosophy**: Dropbox's marketing system is shadowless by design. Live inspection returned `box-shadow: none` on every measured CTA, nav element, and card across both surfaces. Hierarchy is carried by warm surface contrast and the unusually heavy 2px border weight — a flat, print-like approach consistent with the brand's editorial, paper-toned identity. When Dropbox needs emphasis it inverts to graphite or reaches for an accent hue; it never lifts elements off the page.

## 7. Do's and Don'ts

### Do
- Use coconut (`#f7f5f2`) as the default canvas — white (`#ffffff`) is for panels on top of it
- Reserve Dropbox Blue (`#0061fe`) for primary actions only — one action color
- Put coconut text (not pure white) on blue and graphite surfaces
- Set headlines in Sharp Grotesk weight 500; body and UI in Atlas Grotesk 400
- Use 2px borders on all buttons — filled buttons border in their own fill color
- Keep the system flat: separate with surface tints (`#eee9e2` sand, graphite bands), never shadows
- Use 12px radius as the default; 16px for large marketing CTAs
- Draw accent moments from the official wheel (Azalea `#cd2f7b`, Sunset `#fa551e`) sparingly, "to create harmony and focus"

### Don't
- Use a cold pure-white page background — the canvas is warm coconut
- Add drop shadows for elevation — the system is shadowless
- Use bold (700) display type — the marketing hierarchy tops out at weight 500
- Spread blue across links, icons, and decorations — it dilutes the single-action signal
- Use thin 1px borders on buttons — the 2px weight is part of the geometry
- Put pure black text on the canvas — Graphite `#1e1919` is the ink
- Stack multiple accent hues in one section — accents are single, intentional moments
- Round cards past 16px or square off CTAs — geometry stays in the 8–16px band

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero stacks, CTAs go full-width |
| Tablet | 640–1024px | 2-column grids, condensed nav |
| Desktop | 1024–1440px | Full layout, mega-menu nav, two-column hero |

### Touch Targets
- Marketing CTAs at 55px height (71px hero variant) — generously tappable
- Header items at 72px row height with 16px 12px padding
- Mega-menu cards at 92px height with full-card hit areas

### Collapsing Strategy
- Hero: 40px Sharp Grotesk headline scales down, weight 500 maintained
- Mega-menu: dropdown grid collapses into accordion sheets
- Band sections: keep full-width tint treatment, reduce internal padding
- Plan columns on pricing stack vertically with repeated `#0061fe` CTAs

### Image Behavior
- Product UI screenshots sit flat (no shadow) on tinted surfaces at all sizes
- Cards and media keep the 12px radius across breakpoints
- Illustration and photography carry the warm accent palette per brand imagery guidance

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Dropbox Blue (`#0061fe`)
- Canvas: Coconut (`#f7f5f2`)
- Panel: Pure White (`#ffffff`)
- Tinted card: Sand (`#eee9e2`)
- Ink / dark band: Graphite (`#1e1919`)
- Deep dark variant: `#1c1d21`
- Secondary text: Muted Taupe (`#716b61`, live `rgba(82,74,62,0.82)`)
- Text on blue/dark: Coconut (`#f7f5f2`)
- Accent: Azalea (`#cd2f7b`), Sunset (`#fa551e`), Tangerine (`#ff8c19`), Crimson (`#9b0032`)

### Example Component Prompts
- "Create a hero on a #f7f5f2 cream canvas. Headline 40px Sharp Grotesk weight 500, line-height 1.2, color #1e1919. Body 16px Atlas Grotesk 400. Primary CTA: #0061fe background, #f7f5f2 text (not white), 16px radius, 16px 24px padding, 2px solid #0061fe border. Secondary CTA: transparent, 2px solid #1e1919 border, #1e1919 text, same geometry. No shadows."
- "Design a pricing card row: white #ffffff panels on #f7f5f2, 12px radius, flat (no shadow). Each plan has a #0061fe 'Try for free' button (16px radius, 55px height, #f7f5f2 label) and a plain-text 'or buy now' link in #1e1919."
- "Build a full-width dark band: #1e1919 background, #f7f5f2 text. Heading 26px Sharp Grotesk 500. Outline button with 2px solid #f7f5f2 border, transparent fill, 16px radius."
- "Create a mega-menu: cards 92px tall, 12px radius, 16px padding, #1e1919 title 16px Atlas Grotesk with a one-line muted description in rgba(82,74,62,0.82)."

### Iteration Guide
1. Canvas is `#f7f5f2` coconut, never pure white
2. Blue `#0061fe` appears only on primary actions; label is `#f7f5f2`
3. Sharp Grotesk 500 for display, Atlas Grotesk 400 for everything else
4. Every button carries a 2px border — fill-colored on solids, ink-colored on outlines
5. Zero shadows; separate with cream/white/sand/graphite surface shifts
6. 12px default radius, 16px for big CTAs
7. Accents (azalea, sunset, tangerine) are single intentional moments, not a rainbow

---

## 10. Voice & Tone

Dropbox's voice is **simple, human, and quietly witty** — the brand site distills it into four named pillars: **Simple** ("Keep it crystal clear. Trim words. Use strong nouns. Craft a story."), **Helpful** ("Help people take action. Tell them what's coming, then show them how to get there."), **Human** ("Stay real and relatable. Write the way you talk. Avoid jargon."), and **Magic** ("Charm them with wit. Clever is great. Fresh language is even better."). The governing rule: "no matter what we're saying, or where, we always sound like Dropbox."

| Context | Tone |
|---|---|
| Hero headlines | Plainspoken with a twist of wordplay. "Get to work, with a lot less work." |
| Product descriptions | Verb-first, concrete. "Store, share, and access files across devices." |
| CTAs | Friendly imperatives, zero pressure. "Try Dropbox free", "Get started", "Learn more". |
| Social proof | Numbers stated plainly. "Join the over 700 million registered users who trust Dropbox." |
| Security / trust copy | Calm and declarative. "Security never comes second." |
| Help / onboarding | Step-by-step, anticipatory — tell them what's coming, then how to get there. |

**Voice samples (from official brand guidelines and live homepage):**
- "Get to work, with a lot less work." — live homepage H1 and cited example on brand.dropbox.com/voice-and-tone. *(verified live 2026-06-11)*
- "Go from idea to done with Dropbox." — brand.dropbox.com/voice-and-tone example. *(verified 2026-06-11)*
- "These aren't just your files. They are pieces of your life." — brand.dropbox.com/voice-and-tone example. *(verified 2026-06-11)*

**Forbidden register**: jargon, enterprise-speak, hype superlatives, pressure tactics. Wit is "a wink, rather than throwing confetti in their face" (per the motion guidelines — the same restraint applies to words).

## 11. Brand Narrative

Dropbox was founded in **2007** by **Drew Houston** (with co-founder Arash Ferdowsi — a widely documented public fact; the current about page lists Houston as Co-Founder and Co-CEO, joined by Co-CEO Ashraf Alkarmi in 2024). The famous origin: Houston kept forgetting his USB drive on a bus ride and decided file sync should just work. Nearly two decades later the mission has widened from file syncing to the stated aim to **"design a more enlightened way of working"** — productivity tools that reduce busywork rather than create it.

The product evolved from a single magic folder into a workspace platform — cloud storage plus Replay (video review), Sign, DocSend, Dash (AI-powered organization and search), and Reclaim.ai (scheduling) — serving, per the live homepage, "over 700 million registered users." The brand framework states the design intent plainly: "Dropbox is designed to simplify the frenzy of modern work," resting on four pillars — Humanity, Clarity, Action, Delight.

What Dropbox refuses, visible in the design: sterile SaaS chrome (the canvas is warm coconut, not dashboard white), shadow-stacked skeuomorphism, and hype-driven copy. What it embraces: a paper-warm editorial surface, one decisive blue, a custom typeface built to be "warm, soulful, and relatable," and the Eames maxim quoted on its own brand site — "The details are not the details. They make the design."

## 12. Principles

1. **Humanity.** "Warm, soulful, and relatable. We're here to keep life organized and make work easier." *UI implication:* warm coconut canvas, graphite (not black) ink, coconut (not white) text on blue — every neutral carries warmth.
2. **Clarity.** "It's about surfacing what matters, cutting out what doesn't, and reducing complexity." *UI implication:* one action color, flat shadowless hierarchy, medium-weight type — nothing competes with the next step.
3. **Action.** Users "always know what to do next. They should never have to read a manual." *UI implication:* a single unmistakable `#0061fe` CTA per context; verb-first labels ("Get started", "Try Dropbox free").
4. **Delight.** "We design small moments of joy into everything we do." *UI implication:* witty copy, unexpected accent hues from the 16-color wheel, and motion that winks — used sparingly, one moment at a time.
5. **The details are not the details.** The Eames quote anchors the brand framework. *UI implication:* micro-decisions carry the system — the 2px self-colored border on filled buttons, the cream-on-blue label, the wide type cut reserved for 32px titles.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Dropbox user segments (creative teams, small businesses, knowledge workers, IT admins), not individual people.*

**Maya Chen, 34, Portland.** Freelance video editor juggling client review cycles. Uses Dropbox Replay to collect timestamped feedback and shares final cuts through plain Dropbox links. Chose it because clients never need a manual — the link just works on any device.

**Tom Okafor, 41, Manchester.** Operations lead at a 40-person architecture firm. Migrated the studio from a chaotic file server; values that Dropbox feels calm and organized rather than enterprise-heavy. Reads "Security never comes second" and actually believes it because the interface never oversells.

**Priya Raghavan, 28, Austin.** Startup marketer who lives in shared folders and DocSend trackers. Appreciates the warmth of the product's tone — confirmation messages that sound like a person — and the fact that the one blue button always tells her what to do next.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no files yet)** | Coconut (`#f7f5f2`) canvas, one Graphite (`#1e1919`) sentence in Atlas Grotesk explaining the folder is empty, one blue (`#0061fe`) CTA to upload or create. Friendly, zero clutter. |
| **Empty (search, no results)** | Muted taupe (`#716b61`) single line stating no matches, with a plain-language suggestion to adjust the query. No dead ends — always a next action. |
| **Loading (page / list)** | Flat skeleton blocks in sand (`#eee9e2`) on the coconut canvas at final dimensions, 12px radius. No shadow shimmer — flat pulse consistent with the shadowless system. |
| **Loading (file operation)** | Inline progress on the affected row; surrounding content stays interactive. Motion gives "instant feedback" that "echoes physical properties." |
| **Error (sync/upload failed)** | Inline message in plain words: what failed, why, and the retry action. Human register — no error codes without translation. |
| **Error (form validation)** | Field-level note below the input describing what a valid value looks like, not just "Required". |
| **Success (action completed)** | Brief inline confirmation in the human voice ("It's that simple :)" register), auto-dismissing; the changed row itself shows the new state. |
| **Skeleton** | Sand `#eee9e2` blocks, 12px radius, flat pulse at final dimensions. |
| **Disabled** | Reduced-opacity blue rather than grey for primary actions — the brand read survives; labels drop to muted taupe. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, button feedback, focus |
| `motion-standard` | 240ms | Menu open, card reveal, sheet |
| `motion-slow` | 400ms | Band transitions, hero illustration moments |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-dropbox` | `cubic-bezier(0.65, 0, 0.45, 1)` | The documented brand curve (from the official "Create folder" motion example) — symmetric, snappy in, soft out |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |

**Motion rules** (the four official principles): **Prioritize Simplicity** — "fewer, better elements means that the movement will always have a purpose"; **Deepen Understanding** — motion explains complex actions and eases cognitive load; **Instant Feedback** — interactions respond immediately with movement that "echoes physical properties"; **Subtle Playfulness** — "make the user smile with a wink, rather than throwing confetti in their face." The homepage ships an explicit "Enable animation" toggle — motion is opt-out-able by design, and under `prefers-reduced-motion: reduce` everything collapses to instant.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 official brand site (dropbox.design → 301 → brand.dropbox.com), fetched 2026-06-11:
- /voice-and-tone — four voice pillars (Simple / Helpful / Human / Magic) with verbatim
  guidance and example lines ("Go from idea to done with Dropbox.", "These aren't just
  your files. They are pieces of your life.", "Get to work, with a lot less work.").
- /framework — "Dropbox is designed to simplify the frenzy of modern work" and the four
  pillars Humanity / Clarity / Action / Delight with verbatim descriptions; Eames quote
  "The details are not the details. They make the design."
- /motion — four motion principles (Prioritize Simplicity / Deepen Understanding /
  Instant Feedback / Subtle Playfulness) and the cubic-bezier(0.65, 0, 0.45, 1) example.
- /typography — DB Sharp Grotesk custom typeface by Sharp Type; variable weight for
  optical alignment; "Type is what meaning looks like" (Max Phillips).
- /color — core trio (Dropbox Blue #0061FE, Coconut #F7F5F2, Graphite #1E1919) +
  16 named accents + 20-step grey scale; "A diverse and unexpected color palette is a
  key visual expression of our brand."

Tier 1 live inspect (2026-06-11, playwright getComputedStyle) on https://www.dropbox.com
and https://www.dropbox.com/plans — source for all measured token values in §1–9.

Brand narrative (§11): mission "design a more enlightened way of working", founding year
2007, Drew Houston Co-Founder/Co-CEO, Co-CEO Ashraf Alkarmi (joined 2024), product list
(Replay, Sign, DocSend, Dash, Reclaim.ai) from https://www.dropbox.com/about (fetched
2026-06-11). "Over 700 million registered users" is verbatim from the live homepage H2.
Arash Ferdowsi as co-founder and the USB-drive origin story are widely documented public
facts, not on the fetched about page.

Motion durations in §15 (120/240/400ms) are illustrative scale values consistent with the
observed snappy marketing motion; only the cubic-bezier(0.65, 0, 0.45, 1) curve is
officially documented.

Personas (§13) are fictional archetypes informed by publicly observable Dropbox user
segments. Names are illustrative; they do not refer to real people.

Interpretive claims (e.g., "the system is shadowless by design", "coconut-on-blue as
warmth preserved at full contrast") are editorial readings connecting observed values to
the brand's stated framework, not direct Dropbox statements.
-->
