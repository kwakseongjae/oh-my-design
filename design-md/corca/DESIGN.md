---
id: corca
name: Corca
display_name_kr: 코르카
country: KR
category: ai
homepage: "https://www.corca.ai/"
primary_color: "#1a2352"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=corca.ai&sz=128"
verified: "2026-07-02"
added: "2026-07-02"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-07-02"
  note: "Wix-built corporate site. primary = navy ink #1a2352 that anchors every section heading; #046cb8 is the achievement/eyebrow blue. Product surfaces (Moonlight) run a night-time deep-purple #402060 + cream #fff3b7 theme. Headings use a custom uploaded display webfont; body/UI resolve to Pretendard + Wix Madefor."
  colors:
    primary: "#1a2352"
    ink-pure: "#000000"
    ink-soft: "#181818"
    accent-blue: "#046cb8"
    bright-blue: "#419eff"
    steel-blue: "#36597d"
    moonlight-cream: "#fff3b7"
    moonlight-deep: "#402060"
    lavender: "#faeeff"
    amber: "#fdd484"
    sky: "#d9e5f5"
    card-violet: "#777cdc"
    card-plum: "#605070"
    body-slate: "#324158"
    muted: "#bbbbbb"
    canvas: "#ffffff"
    surface: "#f1f5f9"
  typography:
    family: { display: "brand-webfont", body: "Pretendard", ui: "Madefor" }
    display-hero: { size: 60, weight: 400, use: "Hero headline (H1), custom display webfont, white on dark" }
    section:      { size: 32, weight: 400, use: "Section headings (H2), navy #1a2352" }
    subsection:   { size: 28, weight: 400, use: "Feature sub-heads (H2)" }
    stat:         { size: 46, weight: 400, use: "Big metric numbers (100,000+, 1.7M+)" }
    eyebrow:      { size: 30, weight: 400, use: "Achievement eyebrow label, blue #046cb8" }
    nav:          { size: 17, weight: 400, use: "Primary nav item, Madefor/Pretendard" }
    subnav:       { size: 15, weight: 400, use: "Dropdown sub-nav item, Pretendard" }
    body:         { size: 16, weight: 400, use: "Body / UI text, Madefor" }
  spacing: { xs: 8, sm: 15, md: 16, base: 24, lg: 48, xl: 64 }
  rounded: { sm: 10, md: 16, lg: 24, pill: 50, full: 9999 }
  shadow:
    none: "none"
  components:
    button-cta: { type: button, bg: "#ffffff", fg: "#1a2352", radius: "50px", padding: "8px 15px", height: "60px", font: "16px / 400", use: "Primary pill CTA (Try it now) — white fill, dark navy label on the dark hero" }
    button-learn-more: { type: button, bg: "#777cdc", fg: "#ffffff", radius: "50px", padding: "8px 15px", height: "51px", font: "16px / 400", use: "'자세히 보기' section-themed filled pill; fill shifts per product card (also #605070)" }
    button-outline: { type: button, fg: "#1a2352", border: "1px solid #000000", radius: "999px", padding: "8px 15px", height: "38px", use: "'기사 보기' outline pill — transparent fill, thin dark ring" }
    card-feature: { type: card, bg: "#ffffff", radius: "16px", use: "White product / feature card" }
    card-surface: { type: card, bg: "#f1f5f9", radius: "10px", use: "Light-grey surface card / panel" }
    nav-link: { type: tab, fg: "#181818", font: "17px / 400", use: "Top navigation item", active: "moonlight cream #fff3b7 text on active product surface" }
    badge-eyebrow: { type: badge, fg: "#046cb8", radius: "8px", use: "Achievement eyebrow label (아기유니콘 선정, 세계 7위)" }
  components_harvested: true
---

# Design System Inspiration of Corca

## 1. Visual Theme & Atmosphere

Corca (코르카) is a Korean AI company whose corporate site frames the whole business around a single confident sentence — "코르카는 AI 기술로 세상을 바꾸고 있습니다" ("Corca is changing the world with AI technology"). The site is built on Wix, and its atmosphere is that of a young, benchmark-winning research lab that wants to read as both credible and playful. The homepage opens on a dark hero with a very large white headline (`#ffffff`, ~60px), then drops into a bright white canvas where every section heading is set in a deep, trustworthy navy ink (`#1a2352`). That navy is the spine of the identity: it appears on essentially every H2 and carries the calm, engineering-grade seriousness of an AI company that has real numbers to show.

Where Corca departs from a purely corporate palette is its per-product theming. Each product gets its own colored "world." The corporate achievements are announced in an accent blue (`#046cb8`) — the eyebrow color above lines like "2024 아기유니콘 선정!" and "세계 7위, 국내 기업 중 1위 쾌거!". The flagship product **Moonlight** ("AI Colleague for Research Papers" / "논문을 더 빠르고 쉽게 이해하기") runs a literal night theme: a deep plum-purple stage (`#402060`) lit by a soft moonlight cream (`#fff3b7`) that also becomes the active-nav color on that surface. Other feature bands pull in a bright electric blue (`#419eff`), a pale lavender wash (`#faeeff`), a warm amber (`#fdd484`), a pale sky tint (`#d9e5f5`) and a steel blue (`#36597d`) — a deliberately optimistic, multi-hued spectrum that keeps a dense corporate page from feeling grey.

Geometrically, Corca is a pill-and-soft-corner system. Calls to action are fully rounded pills — a white 50px-radius "Try it now" fill on product pages, and a transparent 999px-radius outline pill ("기사 보기") ringed with a thin dark line (`#000000`). Content cards use gentle 10px and 16px corners. The system is essentially flat: live inspection returned `box-shadow: none` across the hero, nav and cards, so separation is done with color blocks and generous whitespace rather than elevation. Typography splits jobs cleanly: headlines use a custom uploaded display webfont with heavy, poster-like presence, while body and UI text resolve down to Pretendard and Wix's Madefor for quiet Korean legibility.

**Key Characteristics:**
- Deep navy ink (`#1a2352`) as the brand spine — set on every section heading, never pure black for headings
- Dark hero with an oversized white (`#ffffff`) ~60px headline stating the AI mission
- Per-product theming — Moonlight's night world of deep purple (`#402060`) + moonlight cream (`#fff3b7`)
- Achievement blue (`#046cb8`) reserved for eyebrow labels above credibility claims
- Optimistic multi-hue accent spectrum: bright blue (`#419eff`), lavender (`#faeeff`), amber (`#fdd484`), sky (`#d9e5f5`), steel blue (`#36597d`)
- Pill-everything CTAs — 50px filled pills, 999px outline pills
- Flat depth — `box-shadow: none`; color blocks and whitespace do the separating
- Custom display webfont for headlines over Pretendard / Madefor for body and UI

## 2. Color Palette & Roles

### Primary & Ink
- **Corca Navy** (`#1a2352`): The primary brand color and the ink for essentially every section heading (H2). A deep blue-navy that reads trustworthy and engineering-grade — used instead of pure black for headings.
- **Pure Black** (`#000000`): Maximum-contrast nav labels and the thin ring on outline pills.
- **Soft Ink** (`#181818`): Near-black used for top-nav item text — a hair warmer than pure black.
- **Body Slate** (`#324158`): Secondary body copy and descriptive paragraphs.
- **Muted Grey** (`#bbbbbb`): Low-emphasis captions, meta, and disabled labels.

### Accent Blues
- **Achievement Blue** (`#046cb8`): The eyebrow color above credibility claims ("2024 아기유니콘 선정!", "세계 7위, 국내 기업 중 1위 쾌거!"). Corca's "we won something" color.
- **Bright Blue** (`#419eff`): An electric blue used as a full-bleed section background on product surfaces.
- **Steel Blue** (`#36597d`): A muted mid-blue for secondary illustration blocks and quieter bands.

### Product / Moonlight Theme
- **Moonlight Cream** (`#fff3b7`): The signature Moonlight accent — a soft pale-yellow "moonlight" that also becomes the active-nav text color on the Moonlight surface.
- **Moonlight Deep** (`#402060`): The deep plum-purple night stage behind the Moonlight hero.
- **Lavender** (`#faeeff`): A pale lavender wash used as a soft full-width section background.
- **Amber** (`#fdd484`): A warm golden accent block used for highlight sections.
- **Sky** (`#d9e5f5`): A pale blue tint for soft section backgrounds and cards.
- **Card Violet** (`#777cdc`): A themed violet fill on the "자세히 보기" product-card button.
- **Card Plum** (`#605070`): An alternate themed plum fill on a sibling product-card button.

### Neutrals & Surface
- **Pure White** (`#ffffff`): Page canvas, white cards, hero headline text, and the filled CTA background.
- **Surface Grey** (`#f1f5f9`): A cool light-grey surface for panels and grouped content cards.

## 3. Typography Rules

### Font Family
- **Display**: a custom uploaded webfont (served by Wix as `wfont_…` faces) used for all headlines and stat numbers. The typeface carries its weight inside the font file, so computed `font-weight` reports `400` even though the letterforms read as bold/heavy poster type.
- **Body**: `Pretendard` — the de-facto Korean product font, which the dropdown/sub-nav faces resolve to (`orig_pretendard_medium`).
- **UI**: `Madefor` (Wix Madefor) — the system UI face used for menu chrome and small labels.

### Hierarchy

| Role | Font | Size | Weight | Notes |
|------|------|------|--------|-------|
| Display Hero | display webfont | 60px | 400 (heavy cut) | Hero H1, white on dark hero |
| Stat Number | display webfont | 46px | 400 | Big metrics (100,000+, 1.7M+, 150+, 1,000+) |
| Section Heading | display webfont | 32px | 400 | Section H2, navy `#1a2352` |
| Sub-section | display webfont | 28px | 400 | Feature sub-heads |
| Eyebrow | display webfont | 30px | 400 | Achievement label, blue `#046cb8` |
| Nav Item | Madefor / Pretendard | 17px | 400 | Primary top-nav item |
| Sub-nav | Pretendard | 15px | 400 | Dropdown menu item |
| Body | Madefor | 16px | 400 | Body / UI reading text |

### Principles
- **Heavy display, quiet body**: The custom display webfont carries poster-scale headlines; Pretendard and Madefor carry the calm reading and UI text. Weight contrast comes from the typeface cut, not from a numeric weight ramp (everything computes as 400).
- **Navy owns headings**: Section headings are `#1a2352`, not black — the warmth of the navy keeps a benchmark-heavy page feeling human.
- **Numbers are hero-sized**: Corca leans on big metrics (46px stat numbers) as proof, giving quantitative credibility its own display tier.
- **Hangul-first body**: Body sits around 15–17px for comfortable dense hangul, with Pretendard as the resolved Korean face.

## 4. Component Stylings

### Buttons

**Primary CTA (Try it now)**
- Background: `#ffffff`
- Text: `#1a2352`
- Radius: 50px
- Padding: 8px 15px
- Height: 60px
- Font: 16px / 400
- Use: Product-page primary pill CTA — a white fill with a dark navy label sitting on the dark hero

**Learn-More (자세히 보기)**
- Background: `#777cdc`
- Text: `#ffffff`
- Radius: 50px
- Padding: 8px 15px
- Height: 51px
- Font: 16px / 400
- Use: Section "자세히 보기" filled pill; the fill is themed per product card (a sibling card uses `#605070`)

**Outline Pill (기사 보기)**
- Background: transparent
- Text: `#1a2352`
- Border: 1px solid `#000000`
- Radius: 999px
- Padding: 8px 15px
- Height: 38px
- Use: "기사 보기" article link — a low-emphasis outline pill with a thin dark ring

### Cards & Containers

**White Feature Card**
- Background: `#ffffff`
- Radius: 16px
- Use: White product / feature card on the main canvas (flat, no shadow)

**Surface Card**
- Background: `#f1f5f9`
- Radius: 10px
- Use: Light-grey surface panel grouping related content

### Badges

**Achievement Eyebrow**
- Text: `#046cb8`
- Radius: 8px
- Use: Blue eyebrow label above credibility headings ("아기유니콘 선정", "세계 7위")

### Navigation
- Background: `#ffffff`
- Text: `#181818`
- Font: 17px / 400 Madefor
- Height: 78px header
- Active: moonlight cream `#fff3b7` text on the active product surface (Moonlight)
- Use: Top horizontal nav ("제품 소개", "회사 소개", "채용", "블로그")

---

**Verified:** 2026-07-02 (omd:add-reference CREATE — Tier 1 live inspect, 2 surfaces)
**Tier 1 sources:** https://www.corca.ai/ , https://www.corca.ai/en/moonlight , https://corca.co.kr/ , https://github.com/corca-ai
**Tier 2 sources:** getdesign.md/corca (0 DESIGN.md files — no data); styles.refero.design/?q=corca (no corca-specific match — returns generic catalog)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base rhythm: 8px, with a notable 8px 15px button padding measured on the pill CTAs
- Scale: 8px, 15px, 16px, 24px, 48px, 64px
- Sections are tall, full-bleed colored bands stacked vertically; internal content is centered with generous vertical breathing room

### Grid & Container
- Centered single-column hero anchored by the oversized display headline
- Product showcases alternate as full-width colored bands (white, lavender `#faeeff`, amber `#fdd484`, deep purple `#402060`), each themed to its product
- Feature/metric cards arrange in horizontal rows beneath section headings
- Achievement/press blocks pair an eyebrow (`#046cb8`) + navy heading + outline "기사 보기" pill

### Whitespace Philosophy
- **Color blocks over borders**: sections separate by switching full-width background color, not by rules or shadows
- **Breathing room**: despite dense corporate content (metrics, press, awards), each band is airy with large vertical gaps
- **Proof gets space**: the big stat numbers (100,000+, 1.7M+) are given their own generous band as social proof

### Border Radius Scale
- Small (10px): surface cards, small panels
- Medium (16px): feature cards — the workhorse card radius
- Large (24px): larger containers
- Pill (50px): filled CTAs
- Full (999px / 9999px): outline pills, circular icon buttons

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, headings, most surfaces |
| Color block (Level 1) | Full-width background color shift | Section separation without elevation |
| Ring (Level 2) | `1px solid #000000` outline pill | Low-emphasis article links |

**Shadow Philosophy**: Corca is a near-shadowless, flat system. Live inspection returned `box-shadow: none` across the hero, navigation, headings and cards. Depth is communicated by stacking full-width color bands (white, lavender `#faeeff`, amber `#fdd484`, deep purple `#402060`) rather than by elevation. When a card needs to feel distinct, the system reaches for a tinted surface (`#f1f5f9`) or a colored fill, never a drop shadow. This keeps the page feeling fast, modern and web-native — appropriate for a company selling AI products.

## 7. Do's and Don'ts

### Do
- Use navy ink (`#1a2352`) for every section heading — it is the brand spine
- Reserve achievement blue (`#046cb8`) for eyebrow labels above credibility claims
- Give each product its own color world (Moonlight = deep purple `#402060` + cream `#fff3b7`)
- Use fully rounded pills for CTAs — 50px filled, 999px outline
- Keep the system flat — separate sections with color blocks, not shadows
- Set headlines in the heavy display webfont and body in Pretendard / Madefor
- Give big proof numbers their own large stat tier (46px)
- Use white (`#ffffff`) fills for primary CTAs sitting on dark or colored hero bands

### Don't
- Use pure black for headings — reserve navy `#1a2352`; keep `#000000` for thin outlines and nav only
- Spread the achievement blue (`#046cb8`) across body text — it is an eyebrow accent
- Add drop shadows for elevation — Corca is a flat, shadow-free system
- Use sharp/square corners on CTAs — CTAs are always pills
- Mix product themes on one surface — keep Moonlight's purple/cream separate from the corporate navy
- Set body copy in the display webfont — Pretendard and Madefor own reading and UI text
- Bury the metrics — the big numbers are social proof and deserve room

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero headline compresses, colored bands stack |
| Tablet | 640-1024px | Moderate padding, 2-up feature/metric cards |
| Desktop | 1024-1440px | Full layout, centered hero, multi-column feature bands |

### Touch Targets
- Pill CTAs at 51–60px height with 8px 15px padding — comfortably tappable
- Outline "기사 보기" pill at 38px height
- Nav items spaced within the 78px header

### Collapsing Strategy
- Hero: oversized display headline scales down on mobile
- Colored product bands maintain full-width treatment, reduce internal padding
- Feature/metric rows: multi-column → stacked single column
- Big stat numbers wrap to a 2×2 grid on narrow viewports

### Image Behavior
- Product screenshots and illustrations carry no shadow at any size, consistent with the flat system
- Cards maintain their 10px / 16px radius across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary heading / brand: Corca Navy (`#1a2352`)
- Achievement eyebrow: Blue (`#046cb8`)
- Bright section blue: (`#419eff`)
- Moonlight accent: Cream (`#fff3b7`) on Deep Purple (`#402060`)
- Soft section washes: Lavender (`#faeeff`), Amber (`#fdd484`), Sky (`#d9e5f5`), Steel (`#36597d`)
- Body text: Slate (`#324158`); Nav: Soft Ink (`#181818`); Outline: Black (`#000000`)
- Canvas: White (`#ffffff`); Surface: Grey (`#f1f5f9`); Muted: (`#bbbbbb`)
- Themed card fills: Violet (`#777cdc`), Plum (`#605070`)

### Example Component Prompts
- "Create a dark hero: oversized ~60px display headline in white (#ffffff), one white pill CTA (#ffffff fill, #1a2352 navy label, 50px radius, 8px 15px padding). Mission-line copy, no shadow."
- "Design a feature card: white (#ffffff) background, 16px radius, no shadow. Heading 32px display webfont in navy #1a2352; body 16px Pretendard in slate #324158."
- "Build an achievement block: blue eyebrow label (#046cb8) over a navy #1a2352 heading, with an outline 'read article' pill (transparent fill, 1px solid #000000, 999px radius)."
- "Make a Moonlight product band: deep purple (#402060) background, moonlight cream (#fff3b7) accents and active nav, white headline. Everything flat, pill CTAs."

### Iteration Guide
1. Navy `#1a2352` is the heading spine; never pure black for headings
2. Pills everywhere for CTAs — 50px filled, 999px outline
3. No shadows — separate sections with full-width color blocks
4. Achievement blue `#046cb8` is an eyebrow accent only
5. Give each product its own color world; don't mix Moonlight purple with corporate navy
6. Big stat numbers (46px) are proof — give them room
7. Display webfont for headlines, Pretendard / Madefor for body and UI

---

## 10. Voice & Tone

Corca's voice is **confident, mission-framed, and proof-forward** — a young AI lab that has receipts and is not shy about them. The corporate headline "코르카는 AI 기술로 세상을 바꾸고 있습니다" ("Corca is changing the world with AI technology") sets a declarative, present-tense register: not "we will" but "we are." Product copy is plain and benefit-first ("논문을 더 빠르고 쉽게 이해하기" / "AI Colleague for Research Papers"), and credibility is stated as numbers and rankings rather than adjectives.

| Context | Tone |
|---|---|
| Corporate hero | Declarative, present tense, mission-framed. "AI 기술로 세상을 바꾸고 있습니다." |
| Product headlines | Plain, benefit-first. "논문을 더 빠르고 쉽게 이해하기", "AI Colleague for Research Papers!" |
| Achievement eyebrows | Proud but factual. "2024 아기유니콘 선정!", "세계 7위, 국내 기업 중 1위 쾌거!" |
| CTAs | Direct, low-friction. "자세히 보기", "기사 보기", "Try it now". |
| Metrics | Bare numbers as proof. "100,000+", "1.7M+", "150+", "1,000+". |

**Voice samples (verbatim from live surfaces):**
- "코르카는 AI 기술로 세상을 바꾸고 있습니다." — homepage hero H1 (mission, present tense). *(verified live 2026-07-02)*
- "AI Colleague for Research Papers!" — Moonlight EN hero H1 (product promise). *(verified live 2026-07-02)*
- "세계 7위, 국내 기업 중 1위 쾌거!" — homepage achievement eyebrow. *(verified live 2026-07-02)*

**Forbidden register**: vague hype without numbers, fear-based urgency, buzzword stacking ("revolutionary, next-gen, cutting-edge"), and copy that hides the product behind jargon. Corca prefers a plain claim plus a verifiable number.

## 11. Brand Narrative

Corca (코르카) is a Korean AI company built around a single, literal mission: to change the world with AI technology. That sentence is not marketing garnish — it is the site's H1 and the frame for everything else. Rather than positioning itself as a horizontal "AI platform," Corca presents as a lab that ships concrete products and lets outcomes speak: **Moonlight**, an "AI colleague for research papers" that helps people read and understand academic papers faster, and **Trace**, a sibling product in its lineup.

The brand leans hard on external validation as trust-building. The homepage foregrounds its selection as a **2024 아기유니콘 (Baby Unicorn)** — a Korean government-backed high-potential-startup designation — and a benchmark result billed as "세계 7위, 국내 기업 중 1위" (7th in the world, 1st among domestic companies). Moonlight's own surface stacks adoption numbers (100,000+, 1.7M+, 150+, 1,000+) as social proof. The narrative Corca tells is therefore evidence-first: *here is the technology, here is who recognized it, here is how many people use it.*

What Corca's design refuses, visibly: the heavy, shadow-stacked chrome of legacy enterprise software, and hype that isn't backed by a number. What it embraces: a trustworthy navy spine, per-product color worlds that make each launch feel like its own small brand, flat and fast web-native surfaces, and big proof-numbers given room to breathe. *(Company facts above are drawn from Corca's own live homepage and Moonlight surface; specific founding details beyond what the site states are not independently verified here.)*

## 12. Principles

1. **Proof over adjectives.** Corca states rankings and adoption numbers, not superlatives. *UI implication:* give metrics a large, dedicated stat tier (46px) and let numbers carry credibility.
2. **A world per product.** Moonlight gets its purple-and-cream night theme; the corporate frame stays navy. *UI implication:* theme each product surface distinctly, but keep the navy `#1a2352` spine as the shared connective tissue.
3. **Flat and fast.** Modern web-native clarity beats decorative depth. *UI implication:* no shadows; separate with full-width color blocks and whitespace.
4. **Present tense, plain claim.** "We are changing the world," not "we aspire to." *UI implication:* declarative headlines, direct CTAs ("자세히 보기", "Try it now"), no hedging.
5. **Heavy where it declares, quiet where it explains.** *UI implication:* the display webfont for poster headlines; Pretendard / Madefor for calm, legible body and UI.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Corca product surfaces (a research-paper AI assistant, a Korean AI startup with enterprise and academic reach), not individual people.*

**정민서, 27, 서울.** A graduate researcher drowning in papers. Uses Moonlight to get through literature reviews faster and trusts it partly because the adoption numbers (100,000+ users) signal she is not an early guinea pig. Wants the product to feel fast and uncluttered, not like heavyweight enterprise software.

**James Park, 34, remote.** A startup engineer evaluating AI vendors. Reads Corca's "세계 7위" benchmark claim and the 아기유니콘 selection as credibility shortcuts. Would bounce immediately from a site that made big AI claims with zero verifiable numbers behind them.

**이하늘, 41, 판교.** A corporate innovation lead scouting Korean AI partners. Values that Corca ships named products (Moonlight, Trace) rather than a vague platform, and that each has its own clear identity and metrics. Trusts the calm navy corporate frame over flashy gradients.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no results)** | White canvas with a single navy (`#1a2352`) line explaining there is nothing yet, plus one white pill CTA to take the next step. No clutter. |
| **Empty (saved / history none)** | Muted grey (`#bbbbbb`) single line noting nothing saved yet, with a calm path back. |
| **Loading (content fetch)** | Flat skeleton blocks on the `#f1f5f9` surface at final card dimensions (10–16px radius). No shadow shimmer — a flat pulse consistent with the shadowless system. |
| **Loading (product compute)** | Inline progress within the surface; previous values stay visible. |
| **Error (request failed)** | Inline message in navy `#1a2352` with a plain-language explanation and a retry — states what to do next, not just "오류". |
| **Error (form validation)** | Field-level message below the input describing what is valid, not a bare "필수". |
| **Success (action complete)** | Brief inline confirmation in a calm tone; next-step detail linked immediately below. No celebratory emoji. |
| **Skeleton** | `#f1f5f9` blocks at final dimensions with 10–16px radius, flat pulse. |
| **Disabled** | Muted grey (`#bbbbbb`) text on a reduced-opacity surface; pill CTAs fade rather than turn to a foreign grey, preserving the brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, pill press, focus |
| `motion-standard` | 220ms | Card / section reveal, dropdown, sheet |
| `motion-slow` | 340ms | Page-level transitions, hero reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, sections, dropdowns |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is functional and calm — consistent with the flat, proof-forward aesthetic. Pill CTAs respond to press with a subtle scale/opacity shift; colored product bands and metrics fade-in from below at `motion-standard / ease-enter` as the reader scrolls. No bounce or spring — an AI company signals steady competence, not gimmickry. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and scroll reveals become immediate; the site stays fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-07-02) via playwright getComputedStyle:
- https://www.corca.ai/ (homepage) — hero H1 "코르카는 AI 기술로 세상을 바꾸고 있습니다" white 60px on dark;
  section H2 navy rgb(26,35,82) #1a2352; achievement eyebrows rgb(4,108,184) #046cb8; body slate rgb(50,65,88) #324158;
  pill CTAs radius 50px / 999px, padding 8px 15px; box-shadow none.
- https://www.corca.ai/en/moonlight (Moonlight product surface) — EN hero H1 "AI Colleague for Research Papers!";
  stat numbers 46px (100,000+, 1.7M+, 150+, 1,000+); "Try it now" white pill #ffffff radius 50px;
  active nav cream rgb(255,243,183) #fff3b7; hero band deep purple rgb(64,32,96) #402060; section blue rgb(65,158,255) #419eff.

Token-level claims (§1-9) are sourced from this live inspection (see web/references/corca/.verification.md Proof block).

Voice samples (§10) are verbatim from the live homepage and Moonlight surface.

Brand narrative (§11): Corca (코르카) is a Korean AI company; products Moonlight (research-paper AI assistant)
and Trace; 2024 아기유니콘 (Baby Unicorn) selection and a "세계 7위 / 국내 1위" benchmark claim are stated on
the homepage. These are drawn from Corca's own live surfaces; founding specifics beyond the site are not
independently verified in this turn.

Personas (§13) are fictional archetypes informed by publicly observable Corca product surfaces. Names are
illustrative; they do not refer to real people.

Interpretive claims (e.g., "proof over adjectives", "a world per product", "flat and fast as a rejection of
legacy enterprise chrome") are editorial readings connecting Corca's observed design to its positioning, not
directly sourced Corca statements.
-->
