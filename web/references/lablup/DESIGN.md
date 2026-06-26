---
id: lablup
name: Lablup
display_name_kr: 래블업
country: KR
category: backend-devops
homepage: "https://www.lablup.com"
primary_color: "#28ab6c"
logo:
  type: github
  slug: lablup
verified: "2026-06-26"
added: "2026-06-26"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-26"
  note: "primary = Lablup emerald accent (#28ab6c, interactive/links); deep teal (#002926) is the signature dark canvas (body/hero/footer/teal pill CTA); Backend.AI product accent cyan (#03b5e5) lives on docs.backend.ai. Pill-everything (999px) on lablup.com marketing; 4px-sharp utility chrome on consent/docs."
  colors:
    primary: "#28ab6c"
    teal: "#002926"
    cyan: "#03b5e5"
    ink: "#000000"
    dark-card: "#1a1a1a"
    canvas: "#ffffff"
    surface: "#fafafa"
    surface-grey: "#f3f3f3"
    hairline: "#e5e5e5"
    muted: "#606060"
    faint: "#929292"
    mint: "#badba3"
    dark-grey: "#383838"
  typography:
    family: { display: "Google Sans", body: "Pretendard", docs: "Poppins" }
    display-hero: { size: 80, weight: 700, lineHeight: 1.05, use: "Hero headline, Google Sans Bold" }
    display-lg:   { size: 52, weight: 700, use: "Major section titles (Better together / Need a hand)" }
    section:      { size: 36, weight: 600, use: "Section headings (Latest news / Trusted by)" }
    subsection:   { size: 34, weight: 600, use: "News card headline / feature heads" }
    button:       { size: 19, weight: 700, use: "Pill CTA label" }
    body:         { size: 16, weight: 400, lineHeight: 1.5, use: "Standard reading text" }
    caption:      { size: 13, weight: 500, use: "Consent / utility button label" }
  spacing: { xs: 4, sm: 8, md: 14, base: 16, lg: 24, xl: 32, xxl: 40, section: 64 }
  rounded: { xs: 2, sm: 4, md: 8, lg: 18, xl: 24, pill: 999 }
  shadow:
    none: "none"
  components:
    button-primary: { type: button, bg: "#002926", fg: "#ffffff", radius: "999px", padding: "16px 36px", font: "19px / 700", use: "Primary deep-teal pill CTA (View all partners)" }
    button-dark: { type: button, bg: "#000000", fg: "#ffffff", radius: "999px", padding: "14px 24px", font: "19px / 500", use: "Black pill CTA (About Lablup)" }
    button-inverse: { type: button, bg: "#ffffff", fg: "#002926", radius: "999px", padding: "18px 40px", font: "19px / 700", use: "White pill CTA on dark sections (Contact Us)" }
    button-outline: { type: button, fg: "#ffffff", border: "1px solid rgba(255,255,255,0.3)", radius: "999px", padding: "14px 34px", font: "19px / 600", use: "Ghost outline pill on dark (View All)" }
    button-accent: { type: button, bg: "#28ab6c", fg: "#ffffff", radius: "4px", padding: "7px 16px", font: "13px / 500", use: "Emerald accent action (consent Accept All)" }
    card-light: { type: card, bg: "#f3f3f3", fg: "#000000", radius: "24px", padding: "20px 24px", use: "Light feature shortcut card (Product / News / Careers grid)" }
    card-dark: { type: card, bg: "#1a1a1a", fg: "#ffffff", radius: "24px", padding: "20px 24px", use: "Near-black dark feature card" }
    card-blog: { type: card, bg: "#f3f3f3", radius: "18px", padding: "32px", border: "1px solid #e5e5e5", use: "Blog link card with hairline outline (no shadow)" }
    nav-circle: { type: button, fg: "#ffffff", border: "1px solid rgba(255,255,255,0.3)", radius: "50%", use: "Carousel prev/next circle on dark hero" }
    doc-link: { type: listItem, fg: "#03b5e5", font: "18px / 400", use: "Backend.AI docs TOC / inline link accent" }
  components_harvested: true
---

# Design System Inspiration of Lablup

## 1. Visual Theme & Atmosphere

Lablup (래블업) is the Korean AI-infrastructure company behind Backend.AI, and its homepage reads like a piece of confident systems software given a calm editorial skin — "Make AI infrastructure accessible" stated plainly, with no hype chrome. The defining move is a deep, near-black teal (`#002926`) used as the brand canvas: the body background itself, the immersive hero, the footer, and the primary pill CTA all live in this forest-dark green-blue. Against it, headlines and body text are set in pure black (`#000000`) on light bands and pure white (`#ffffff`) on dark bands, with a single saturated emerald (`#28ab6c`) reserved for interactive accents — active states, link emphasis, focus borders, and the consent "Accept All" action. The result is a palette that feels engineered and trustworthy: serious infrastructure, not a consumer toy.

The typographic personality is geometric and quietly bold. Display headlines run in **Google Sans** at heavy weights — an enormous 80px / weight 700 on the hero ("Making AI possible where it wasn't"), stepping down to 52px / 700 for major section titles and 36px / 600 for section heads — while body and dense reading text fall to a calm 16px / 400 with `PyeojinGothic` and `Pretendard` as the Korean-optimized fallback stack. Backend.AI's own documentation surface (`docs.backend.ai`) shifts the body face to `Pretendard, Poppins` and introduces the product's signature link accent, a bright cyan (`#03b5e5`), which is the one place a second hue appears — the marketing brand is teal-and-emerald, the product/docs brand layers in cyan.

What distinguishes Lablup from generic enterprise B2B sites is the geometry split and the restraint with depth. Marketing CTAs are uncompromising full pills (`999px`) — a deep-teal pill, a black pill, a white-on-dark pill, and ghost outline pills with `rgba(255,255,255,0.3)` borders — while utility chrome (cookie consent, docs) drops to a sharp 4px / 2px scale. Content cards use a friendly 24px and 18px radius in three temperatures: light grey (`#f3f3f3`), near-black (`#1a1a1a`), and brand teal (`#002926`). There are essentially no drop shadows; separation comes from flat surface tints (`#fafafa` off-white, `#f3f3f3` grey) and thin `#e5e5e5` hairlines. The neutral text ladder runs from black through muted grey (`#606060`) to faint grey (`#929292`), and on dark sections a soft mint (`#badba3`) and dimmed greys (`#383838`) carry secondary copy. It is a flat, modern, infrastructure-grade aesthetic — green where it signals life and access, dark where it signals depth and seriousness.

**Key Characteristics:**
- Deep near-black teal (`#002926`) as the signature brand canvas — body, hero, footer, primary pill
- Single saturated emerald (`#28ab6c`) reserved for interactive accents and links
- Backend.AI product cyan (`#03b5e5`) as the docs/product secondary accent
- Google Sans display at heavy weight (80px / 700 hero) over Pretendard body (16px / 400)
- Pill-everything marketing geometry (`999px`) vs sharp 4px/2px utility chrome
- Three-temperature cards — light `#f3f3f3`, near-black `#1a1a1a`, teal `#002926` — at 24px/18px radius
- Flat depth: no shadows; `#fafafa`/`#f3f3f3` tints + `#e5e5e5` hairlines do the separating
- Cool neutral text ladder `#000000` → `#606060` → `#929292`, with mint `#badba3` on dark

## 2. Color Palette & Roles

### Primary & Brand
- **Lablup Emerald** (`#28ab6c`): The saturated interactive accent — active language toggle, link emphasis, focus borders, and the consent "Accept All" action. The system's single "live/action" green and the brighter facet of the isometric logo mark.
- **Deep Teal** (`#002926`): The signature brand canvas. Body background, immersive hero, footer, and the primary pill CTA. A forest-dark green-blue that reads as serious, infrastructural, premium.
- **Backend.AI Cyan** (`#03b5e5`): The product/documentation accent on `docs.backend.ai` — TOC links, inline links, and code references. The one secondary hue, scoped to the product surface.

### Neutral & Surface
- **Pure White** (`#ffffff`): Light-band background, white pill CTA, and text on teal/dark surfaces.
- **Off-White** (`#fafafa`): Subtle alternating section surface for light bands.
- **Surface Grey** (`#f3f3f3`): Light feature/shortcut card and blog card background.
- **Hairline** (`#e5e5e5`): Thin card outlines and dividers — the primary separation device in a shadow-free system.
- **Dark Card** (`#1a1a1a`): Near-black background for the dark feature/news card.
- **Pure Black** (`#000000`): Primary text on light bands and the black pill CTA.

### Text Hierarchy
- **Ink Black** (`#000000`): Primary headings and body text on light surfaces.
- **Muted Grey** (`#606060`): Secondary text, captions, supporting copy.
- **Faint Grey** (`#929292`): Tertiary text, metadata, lowest-emphasis labels.
- **Dark Grey** (`#383838`): Inactive utility labels (e.g. unselected language option).
- **Mint** (`#badba3`): Soft light-green secondary text used on the deep-teal dark sections.

## 3. Typography Rules

### Font Family
- **Display**: `Google Sans` (with `PyeojinGothic`, `Pretendard` fallback) — all marketing headlines, nav, and button labels. Heavy weight (700) at display sizes.
- **Body / Docs**: `Pretendard` (Korean-optimized) for marketing body; `docs.backend.ai` uses `Pretendard, Poppins` as the documentation reading stack.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Display Hero | Google Sans | 80px (5.00rem) | 700 | ~1.05 (tight) | Animated hero headline |
| Display Large | Google Sans | 52px (3.25rem) | 700 | normal | Major section titles |
| Section Heading | Google Sans | 36px (2.25rem) | 600 | normal | Section heads (Latest news / Trusted by) |
| Sub-section | Google Sans | 34px (2.13rem) | 600 | normal | News card headline / feature heads |
| Button | Google Sans | 19px (1.19rem) | 500-700 | normal | Pill CTA label |
| Body | Pretendard | 16px (1.00rem) | 400 | 1.50 | Standard reading text |
| Caption / Utility | Google Sans | 13px (0.81rem) | 500 | normal | Consent + utility button label |

### Principles
- **Heavy display, calm body**: Google Sans at weight 600-700 carries every headline; Pretendard 400 at 16px carries every paragraph. The weight jump is the system's primary hierarchy signal.
- **Scale with drama**: the hero leaps to 80px, far above the 36-52px section heads — a deliberate single moment of typographic confidence per page.
- **Hangul-first fallback**: `PyeojinGothic` / `Pretendard` ensure dense Korean legibility behind the Latin-first Google Sans display face.
- **Two stacks, two jobs**: Google Sans is the marketing/branding voice; Pretendard/Poppins is the functional reading and documentation voice. They never swap roles.

## 4. Component Stylings

### Buttons

**Primary Teal Pill**
- Background: `#002926`
- Text: `#ffffff`
- Radius: 999px
- Padding: 16px 36px
- Font: 19px / 700 / Google Sans
- Height: 51px
- Use: Primary brand CTA on light bands ("View all partners", "About Lablup" family)

**Black Pill**
- Background: `#000000`
- Text: `#ffffff`
- Radius: 999px
- Padding: 14px 24px
- Font: 19px / 500 / Google Sans
- Height: 47px
- Use: Secondary high-contrast CTA on light bands ("About Lablup")

**White Inverse Pill**
- Background: `#ffffff`
- Text: `#002926`
- Radius: 999px
- Padding: 18px 40px
- Font: 19px / 700 / Google Sans
- Height: 55px
- Use: Primary CTA on the deep-teal dark sections ("Contact Us")

**Ghost Outline Pill**
- Background: transparent
- Text: `#ffffff`
- Border: 1px solid `rgba(255,255,255,0.3)`
- Radius: 999px
- Padding: 14px 34px
- Font: 19px / 600 / Google Sans
- Height: 49px
- Use: Secondary action on dark sections ("View All")

**Emerald Accent Button**
- Background: `#28ab6c`
- Text: `#ffffff`
- Border: 1px solid `#28ab6c`
- Radius: 4px
- Padding: 7px 16px
- Font: 13px / 500 / Google Sans
- Use: Accent utility action (consent "Accept All")

**Emerald Outline Button**
- Background: transparent
- Text: `#28ab6c`
- Border: 1px solid `#28ab6c`
- Radius: 4px
- Padding: 7px 16px
- Font: 13px / 500 / Google Sans
- Use: Secondary utility action (consent "Customize")

### Cards & Containers

**Light Shortcut Card**
- Background: `#f3f3f3`
- Text: `#000000`
- Radius: 24px
- Padding: 20px 24px
- Use: Feature/shortcut card in the Product/News/Careers grid

**Dark Feature Card**
- Background: `#1a1a1a`
- Text: `#ffffff`
- Radius: 24px
- Padding: 20px 24px
- Use: Near-black feature card (News "Latest from Lablup")

**Teal Feature Card**
- Background: `#002926`
- Text: `#ffffff`
- Radius: 24px
- Use: Brand-teal feature card (Careers "Join our team")

**Blog Link Card**
- Background: `#f3f3f3`
- Text: `#000000`
- Border: 1px solid `#e5e5e5`
- Radius: 18px
- Padding: 32px
- Use: Blog/tech-blog link card with hairline outline (no shadow)

### Navigation

**Carousel Circle Button**
- Background: transparent
- Text: `#ffffff`
- Border: 1px solid `rgba(255,255,255,0.3)`
- Radius: 50%
- Padding: 1px 6px
- Height: 52px
- Use: Prev/next circular control on the dark hero carousel

**Top Nav Link**
- Text: `#000000`
- Font: 16px / 400 / Google Sans
- Active: emerald `#28ab6c` text on active item
- Use: Top horizontal nav ("Backend.AI", "About us", "Media center", "Stories", "Careers")

### Docs Link (Backend.AI)

**TOC / Inline Link**
- Text: `#03b5e5`
- Font: 18px / 400 / Pretendard
- Use: Backend.AI documentation TOC entries and inline links on docs.backend.ai

---

**Verified:** 2026-06-26 (omd:add-reference CREATE — Tier 1 live inspect, 2 surfaces)
**Tier 1 sources:** https://www.lablup.com (homepage, live computed style — palette, typography, pills, cards); https://docs.backend.ai/ (Backend.AI docs, live computed style — body font + cyan link accent `#03b5e5`); https://github.com/lablup (official GitHub org — open-source Backend.AI, logo mark)
**Tier 2 sources:** getdesign.md/lablup — not listed (generic shell, no Lablup tokens); styles.refero.design/?q=lablup — not listed (KR B2B infra brand uncovered)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: ~8px (with 4px micro-steps)
- Scale: 4px, 8px, 14px, 16px, 24px, 32px, 40px, 64px
- Notable: pill CTAs use generous asymmetric horizontal padding (24-40px) for unmistakable tap targets; cards pad at 20-32px

### Grid & Container
- Centered single-column hero with the animated 80px Google Sans headline as the anchor
- A three-up shortcut grid (Product / News / Careers) using the light/dark/teal card temperatures
- Full-width alternating bands: light (`#ffffff` / `#fafafa`) sections and immersive deep-teal (`#002926`) sections
- A horizontally paged news carousel with circular prev/next controls on the dark band

### Whitespace Philosophy
- **Breathing room over density**: despite being an infrastructure product, the marketing surface is airy with generous vertical rhythm between bands.
- **Flat segmentation**: sections separate by background temperature (teal vs white vs grey) and hairlines, never by shadow.
- **One loud moment**: the 80px hero is the single typographic crescendo; everything else stays calm and functional.

### Border Radius Scale
- Micro (2px): fine utility elements
- Small (4px): consent/utility buttons
- Medium (8px): inner utility containers
- Large (18px): blog link cards
- XL (24px): feature/shortcut cards — the workhorse
- Pill (999px): all marketing CTAs; 50% for circular carousel controls

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline text, most surfaces |
| Tint (Level 1) | `#fafafa` / `#f3f3f3` surface shift | Card and section separation without elevation |
| Hairline (Level 2) | `1px solid #e5e5e5` border | Blog/link card outlines, dividers |
| Band (Level 3) | Deep-teal `#002926` full-width band | Immersive contrast section (hero, CTA, news) |

**Shadow Philosophy**: Lablup is a near-shadowless system. Live inspection found `box-shadow: none` across the hero, nav, cards, and CTAs. Depth and grouping are communicated through flat surface temperature (light `#f3f3f3` vs near-black `#1a1a1a` vs brand `#002926`) and thin `#e5e5e5` hairlines, not elevation. When emphasis is needed the system reaches for color — the emerald `#28ab6c` accent or a full deep-teal band — rather than a drop shadow. This keeps the infrastructure UI feeling clean, fast, and modern rather than skeuomorphic.

## 7. Do's and Don'ts

### Do
- Use deep teal (`#002926`) as the signature brand canvas for hero, footer, and immersive bands
- Reserve emerald (`#28ab6c`) for interactive accents, links, and active states — keep it the single "action" green
- Set marketing CTAs as full pills (`999px`) — teal, black, white-inverse, or ghost outline
- Use Google Sans at heavy weight (700) for the hero, stepping down to 600 for section heads
- Separate sections with flat surface temperature and `#e5e5e5` hairlines, not shadows
- Use the three card temperatures (light `#f3f3f3`, dark `#1a1a1a`, teal `#002926`) at 24px radius
- Keep the Backend.AI cyan (`#03b5e5`) scoped to product/docs surfaces
- Use white (`#ffffff`) text and the white inverse pill on the deep-teal dark bands

### Don't
- Use drop shadows for elevation — Lablup is a flat, shadow-free system
- Spread emerald across many elements — it dilutes the single-action signal
- Mix the docs cyan (`#03b5e5`) into the marketing brand — teal-and-emerald owns marketing
- Use sharp/square corners on marketing CTAs — they are always full pills
- Set the hero in a light weight — display is heavy Google Sans (700)
- Add a third saturated accent — the palette is teal + emerald (+ scoped product cyan)
- Use pure black bands where a deep-teal (`#002926`) band is the brand-correct dark
- Drop pill radius to a rounded rectangle on primary marketing CTAs

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero headline compresses from 80px, shortcut cards stack |
| Tablet | 640-1024px | 2-up shortcut/feature cards, moderate padding |
| Desktop | 1024-1440px | Full layout, three-up shortcut grid, centered hero |

### Touch Targets
- Pill CTAs run 47-55px tall with 24-40px horizontal padding — comfortably tappable
- Circular carousel controls at 52px diameter
- Nav links spaced for touch within the header

### Collapsing Strategy
- Hero: 80px Google Sans headline scales down on mobile, weight 700 maintained
- Shortcut grid: three-up → two-up → stacked single column
- Alternating teal/white bands maintain full-width treatment, reduce internal padding
- News carousel: paged horizontal scroll with circular controls on all sizes

### Image Behavior
- Partner logos and product imagery carry no shadow at any size, consistent with the flat system
- Cards maintain 18-24px radius across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Brand canvas / primary pill: Deep Teal (`#002926`)
- Interactive accent / links: Lablup Emerald (`#28ab6c`)
- Product/docs accent: Backend.AI Cyan (`#03b5e5`)
- Light background: Pure White (`#ffffff`) / Off-White (`#fafafa`)
- Card grey: Surface Grey (`#f3f3f3`)
- Dark card: Near-black (`#1a1a1a`)
- Heading / body text (light): Ink Black (`#000000`)
- Secondary text: Muted Grey (`#606060`)
- Faint text: Faint Grey (`#929292`)
- Secondary text on dark: Mint (`#badba3`)
- Hairline: `#e5e5e5`

### Example Component Prompts
- "Create a hero on a deep-teal `#002926` band. Animated headline at 80px Google Sans weight 700, white `#ffffff` text. Below it a white inverse pill CTA: `#ffffff` background, `#002926` text, 999px radius, 18px 40px padding, 19px / 700 — 'Contact Us'. Add a ghost outline pill: transparent, `#ffffff` text, 1px solid rgba(255,255,255,0.3), 999px radius."
- "Design a three-up shortcut grid: a light card (`#f3f3f3` bg, `#000000` text), a near-black card (`#1a1a1a` bg, `#ffffff` text), and a teal card (`#002926` bg, `#ffffff` text). All 24px radius, 20px 24px padding, no shadow."
- "Build a blog link card: `#f3f3f3` background, 1px solid `#e5e5e5` hairline, 18px radius, 32px padding, no shadow. Title in Google Sans 34px weight 600, body in Pretendard 16px `#606060`."
- "Create a consent bar utility button group: emerald solid 'Accept All' (`#28ab6c` bg, white text, 4px radius, 7px 16px padding, 13px / 500) plus emerald outline 'Customize' (transparent, `#28ab6c` text, 1px solid `#28ab6c`, 4px radius)."

### Iteration Guide
1. Deep teal (`#002926`) for brand bands; emerald (`#28ab6c`) only for the single action accent
2. Marketing CTAs are full pills (`999px`); utility chrome is sharp 4px
3. No shadows — separate with surface temperature and `#e5e5e5` hairlines
4. Google Sans 700 for the hero, 600 for section heads; Pretendard 400 for body
5. Three card temperatures (light/dark/teal) at 24px radius
6. Keep Backend.AI cyan (`#03b5e5`) on product/docs only
7. White inverse pill is the dark-band primary CTA; ghost outline is its secondary

---

## 10. Voice & Tone

Lablup's voice is **plain, technical, and quietly mission-driven** — the register of engineers who would rather state a capability than sell it. The brand line "Make AI infrastructure accessible" and the vision "We untangle complex AI infrastructure with software, for a tomorrow where AI reaches everyone" set the tone: ambitious in scope, concrete in mechanism, zero exclamation marks. Product names are descriptive ("The Operating System for AI Infrastructure"), and copy treats the reader as a peer who runs real clusters, not a lead to be captured.

| Context | Tone |
|---|---|
| Hero / brand line | Declarative, mission-framed. "Making AI possible where it wasn't." Confident, not hype. |
| Product positioning | Concrete capability statements. "The Operating System for AI Infrastructure." |
| Vision / about | Plainspoken purpose. "for a tomorrow where AI reaches everyone." |
| Partner / ecosystem | Collaborative, humble. "AI infrastructure is never a solo effort." |
| CTAs | Direct, low-pressure. "Contact Us", "About Lablup", "View All". |
| Press / news | Factual, dated, engineer-to-engineer. Specific hardware and event names. |

**Voice samples (verbatim from live homepage, verified 2026-06-26):**
- "Lablup — Make AI infrastructure accessible" — brand line. *(verified live 2026-06-26)*
- "We untangle complex AI infrastructure with software, for a tomorrow where AI reaches everyone" — Vision. *(verified live 2026-06-26)*
- "AI infrastructure is never a solo effort. We build alongside the hardware, storage, cloud, and service partners..." — partners section. *(verified live 2026-06-26)*
- "The Operating System for AI Infrastructure" — Backend.AI positioning. *(verified live 2026-06-26)*

**Forbidden register**: superlative AI hype ("revolutionary", "game-changing"), fear-based urgency, undefined jargon left unexplained, exclamation-heavy marketing, and consumer-app cuteness on an infrastructure product.

## 11. Brand Narrative

Lablup Inc. (래블업) was founded in **2015** in Seoul by **Jeongkyu Shin (신정규, CEO)**, **Joongi Kim (CTO)**, and **Jonghyun Park** — a team largely made up of current and former lab researchers frustrated by the repetitive technical hurdles of running computation in research environments. Their answer was **Backend.AI**, an open-source platform that turns GPU and accelerator complexity into operational simplicity, scaling from a desktop AI workload up to frontier-model training and large-scale inference. Lablup's stated mission is to **make AI accessible and scalable** — the same "Make AI infrastructure accessible" line that anchors the homepage.

A decade on (the company marked its 10-year anniversary in 2025), Lablup positions Backend.AI as "The Operating System for AI Infrastructure," with a product family that spans **Backend.AI FastTrack** (MLOps pipelines), **Backend.AI:GO / AI:GO** (personal and desktop AI), and **Sovereign AI** infrastructure for national and consortium-scale deployments. CEO Jeongkyu Shin — a POSTECH physics Ph.D and Google Developer Expert in AI and Cloud — frames the work as untangling infrastructure so researchers and companies can focus on the AI itself. The brand keeps a Korean headquarters in Gangnam, Seoul and a US office in San Jose, and in 2026 was recognized with a Presidential Commendation at Korea's ICT Merit Awards.

What Lablup refuses, visible in its design: the heavy, intimidating chrome and stock-photo gloss of legacy enterprise IT, and the hype-driven aesthetics of consumer AI. What it embraces: a flat, fast, infrastructure-grade interface; a serious deep-teal canvas with a single living-green accent; plainspoken engineering copy; and open source as a first-class commitment (Backend.AI lives in the open on the official GitHub org).

## 12. Principles

1. **Access over abstraction-for-its-own-sake.** The mission is to make AI infrastructure reachable. *UI implication:* lead with concrete capability and a clear next step (Contact / Explore); never gate basic understanding behind a sales wall.
2. **Untangle, don't decorate.** Complexity is the enemy; software is the solution. *UI implication:* flat surfaces, no shadow theater — separation by color temperature and hairlines, so the interface itself feels untangled.
3. **One action, one green.** Emerald (`#28ab6c`) means "do this / this is live." *UI implication:* reserve the saturated accent for interactive states and the primary action so the next step is unambiguous.
4. **Serious where it matters, calm everywhere else.** Deep teal signals infrastructural weight. *UI implication:* one loud typographic moment (the 80px hero), then a calm, functional register throughout.
5. **Built together, in the open.** Ecosystem partners and open source are core. *UI implication:* surface partners and code links as first-class content, with collaborative, humble copy.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Lablup/Backend.AI user segments (ML platform engineers, research-lab infra leads, enterprise AI teams), not individual people.*

**Daeyoung Min, 34, Seoul.** ML platform engineer at a Korean enterprise standing up a shared GPU cluster. Evaluates Backend.AI because it turns GPU scheduling and container orchestration into something his research teams can self-serve. Trusts the brand partly because the platform is open source and the docs are concrete.

**Hannah Cole, 41, San Jose.** Head of AI infrastructure at a US scale-up moving from ad-hoc notebooks to managed training pipelines. Values Backend.AI FastTrack for reproducible MLOps and judges vendors by whether their site states capabilities plainly rather than in superlatives. Lablup's plainspoken copy reads as credible to her.

**Jiwoo Han, 28, Daejeon.** Research-lab graduate student who just wants a personal AI environment that runs LLMs locally without wrestling the cloud. Discovered Backend.AI:GO at a conference demo. Appreciates that the "make AI accessible" promise actually shows up as a desktop product she can install.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no resources / clusters yet)** | Light canvas. Single Ink Black (`#000000`) line explaining nothing is provisioned yet, with one teal pill CTA to add a node or start. No illustration clutter. |
| **Empty (no news / list results)** | Muted Grey (`#606060`) single line stating there is nothing to show, plus a path back. Honest and calm. |
| **Loading (dashboard / list fetch)** | Skeleton blocks on `#f3f3f3` surface at final card dimensions, 18-24px radius. Flat pulse — no shadow shimmer, consistent with the shadowless system. |
| **Loading (in-place refresh)** | Subtle emerald (`#28ab6c`) progress indicator; previous content stays visible with prior values. |
| **Error (action failed)** | Inline message in Ink Black with a plain-language explanation and a retry. States what to do next — never a bare "오류가 발생했습니다". |
| **Error (form validation)** | Field-level message below the input describing what is valid, not just "required". |
| **Success (action completed)** | Brief inline confirmation in a calm tone; next-step detail linked immediately below. No celebratory emoji. |
| **Skeleton** | `#f3f3f3` blocks at final dimensions, 18-24px radius, flat pulse. |
| **Disabled** | Faint Grey (`#929292`) text on a reduced-opacity surface; emerald actions fade rather than turn grey, preserving the brand read. |
| **Focus (keyboard)** | Emerald (`#28ab6c`) 1px outline/border on the focused control, mirroring the live accent-border treatment. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, button press, focus |
| `motion-standard` | 220ms | Card/section reveal, carousel slide, dropdown |
| `motion-slow` | 360ms | Page-level transitions, hero word swap |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, sheets, carousel pages |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is functional and steady — consistent with the flat, infrastructure-grade aesthetic. The hero's animated word swap ("possible / where it wasn't") cycles slowly; the news carousel pages with `motion-standard / ease-enter`; pills respond to press with a subtle opacity/scale shift. No bounce or spring — an infrastructure product signals reliability, not playfulness. Under `prefers-reduced-motion: reduce`, the hero word animation freezes, the carousel becomes instant paging, and all transitions collapse to instant; the product remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-26) via playwright getComputedStyle:
- https://www.lablup.com — body bg rgb(0,41,38) #002926; accent rgb(40,171,108) #28ab6c;
  hero H2 80px/700 Google Sans; pills 999px (teal #002926 / black #000000 / white inverse /
  ghost outline rgba(255,255,255,0.3)); cards 24px (#f3f3f3 / #1a1a1a / #002926) + 18px blog
  card with #e5e5e5 hairline; box-shadow none; neutral ladder #000000/#606060/#929292;
  mint #badba3 on dark; consent buttons #28ab6c 4px.
- https://docs.backend.ai/ — body font "Pretendard, Poppins"; link accent rgb(3,181,229) #03b5e5;
  TOC links 18px/400; white #ffffff doc canvas.
- https://github.com/lablup — official open-source GitHub org (Backend.AI), logo mark source.

Voice samples (§10) are verbatim from the live homepage (brand line, Vision, partners section,
Backend.AI positioning), all verified 2026-06-26.

Brand narrative (§11): Lablup Inc. founded 2015 in Seoul; founders Jeongkyu Shin (CEO),
Joongi Kim (CTO), Jonghyun Park; product Backend.AI (open source); mission "make AI accessible".
Founder names, founding year, 10-year anniversary (2025), and exec background are widely
documented public facts (corroborated via web search 2026-06-26: Crunchbase, backend.ai blog),
not directly quoted from a single verified Lablup statement in this turn. HQ Gangnam, Seoul +
US office San Jose and the 2026 ICT Merit Awards Presidential Commendation are stated on the
live homepage.

Personas (§13) are fictional archetypes informed by publicly observable Backend.AI user
segments (ML platform engineers, research-lab infra leads, enterprise AI teams). Names are
illustrative; they do not refer to real people.

Interpretive claims (e.g., "one action, one green", "untangle, don't decorate as a rejection
of legacy enterprise IT chrome") are editorial readings connecting Lablup's observed design to
its stated positioning, not directly sourced Lablup statements.
-->
