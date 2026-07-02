---
id: mildang
name: Milddang (I Hate Flying Bugs)
display_name_kr: 밀당 (아이헤이트플라잉버그스)
country: KR
category: education
homepage: "https://www.ihateflyingbugs.com/"
primary_color: "#00b29d"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=ihateflyingbugs.com&sz=128"
verified: "2026-07-02"
added: "2026-07-02"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-07-02"
  note: "primary = live Mildang PT product-signature teal (#00b29d); corporate accent = magenta (#cc3366, link color); sibling School PT line uses periwinkle blue (#555dfa). Near-black ink #111111 for nav/headings, #333333 body. Shadowless flat system — separation via tinted teal (#e5f7f5/#dff1f1) and grey (#efeff1) surfaces. Single family: Pretendard."
  colors:
    primary: "#00b29d"
    primary-tint: "#e5f7f5"
    primary-tint-alt: "#dff1f1"
    accent-magenta: "#cc3366"
    accent-blue: "#555dfa"
    ink: "#111111"
    ink-pure: "#000000"
    body: "#333333"
    slate: "#494c4f"
    muted: "#999999"
    canvas: "#ffffff"
    surface: "#efeff1"
    dark: "#2f3233"
    on-primary: "#ffffff"
  typography:
    family: { sans: "Pretendard" }
    display:  { size: 32, weight: 700, lineHeight: 1.40, use: "Hero / page H1 headline, Pretendard Bold" }
    heading:  { size: 20, weight: 700, lineHeight: 1.40, tracking: -0.2, use: "Section / card H2·H3, Pretendard Bold" }
    nav:      { size: 16, weight: 600, lineHeight: 1.50, use: "Top-nav item, Pretendard SemiBold" }
    body:     { size: 16, weight: 400, lineHeight: 1.50, use: "Standard reading text, Pretendard Regular" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 20, xl: 28, xxl: 48, section: 64 }
  rounded: { sm: 3, md: 8, lg: 40, full: 9999 }
  shadow:
    none: "none"
  components:
    card-mildang: { type: card, bg: "#00b29d", fg: "#ffffff", radius: "8px", padding: "20px 16px", use: "Mildang PT entry card — teal, the private-education flagship line" }
    card-school:  { type: card, bg: "#555dfa", fg: "#ffffff", radius: "8px", padding: "20px 16px", use: "School PT entry card — periwinkle blue, the public-education line" }
    card-neutral: { type: card, bg: "#efeff1", fg: "#111111", radius: "8px", padding: "20px 16px", use: "Newsroom / neutral entry card on grey surface" }
    card-tinted:  { type: card, bg: "#dff1f1", fg: "#333333", radius: "40px", use: "Rounded tinted-teal persona/segment card on the Mildang PT page" }
    cta-pill:     { type: button, bg: "#00b29d", fg: "#ffffff", radius: "40px", font: "16px / 700 Pretendard", use: "Teal pill CTA — teal is the single action color" }
    nav-link:     { type: tab, fg: "#111111", font: "16px / 600 Pretendard", active: "magenta #cc3366 text", use: "Top-nav item; inactive language toggle sits at #999999" }
    badge-teal:   { type: badge, bg: "#e5f7f5", fg: "#00b29d", radius: "40px", font: "16px / 700 Pretendard", use: "Tinted-teal emphasis label on Mildang PT surfaces" }
    footer-band:  { type: listItem, bg: "#2f3233", fg: "#ffffff", font: "16px / 400 Pretendard", use: "Dark corporate footer band (I Hate Flying Bugs Inc. info)" }
  components_harvested: true
---

# Design System Inspiration of Milddang (I Hate Flying Bugs)

## 1. Visual Theme & Atmosphere

Milddang (밀당) is the AI-driven 1:1 tutoring product of the Korean edu-tech company I Hate Flying Bugs (IHFB), and its site reads like a calm, editorial education brand rather than a loud cram-school ad. The canvas is pure white (`#ffffff`), text sits in a soft near-black (`#333333` for body, `#111111` for headings and nav) rather than pure black, and the whole page is built on a single typeface — **Pretendard** — used at every level. The atmosphere is trustworthy and quietly optimistic: this is a company whose stated mission is "High-Quality Education for Equal Opportunity," and the visual language deliberately avoids the hard-sell urgency of the private-tutoring market.

The organizing idea is **one product, one color**. IHFB runs two education lines and codes each with a saturated hue: the private-education flagship **Mildang PT** owns a confident teal (`#00b29d`), while the public-education **School PT** line owns a periwinkle blue (`#555dfa`). Across the corporate home these appear as large, evenly-sized product-entry cards, so the color itself becomes the wayfinding. A magenta accent (`#cc3366`) carries links and corporate emphasis, and neutral entries (Newsroom) fall back to a light grey card (`#efeff1`). On the Mildang PT product surface the teal returns as the accent throughout, backed by two tinted-teal wash surfaces (`#e5f7f5` and `#dff1f1`) that group persona and feature blocks.

What distinguishes Milddang from its edu-tech peers is its restraint with depth. Live inspection found `box-shadow: none` across nav, hero, product cards, headings, and segment cards on both surfaces — this is a deliberately flat, shadowless system. Separation is achieved with flat color: tinted teal and grey surfaces, plus a dark corporate footer band (`#2f3233`). Geometry is soft and consistent: 8px radius on the home entry cards, and generous 40px pills/rounded cards on the Mildang PT page. The result is a clean, mobile-native, education-first aesthetic that feels credible and calm rather than promotional.

**Key Characteristics:**
- Single typeface — Pretendard — at every level; Bold (700) for display/headings, Regular (400) for body
- Product-as-color wayfinding: Mildang PT teal (`#00b29d`) vs School PT blue (`#555dfa`)
- Magenta (`#cc3366`) reserved for links and corporate accent
- Near-black text (`#111111` headings, `#333333` body) instead of pure black — warm and trustworthy
- Flat, shadowless depth (`box-shadow: none`); separation by tinted teal (`#e5f7f5`, `#dff1f1`) and grey (`#efeff1`) surfaces
- Soft geometry: 8px entry cards, 40px pills/rounded feature cards, 50% circular avatars
- Slate ladder for text hierarchy: `#333333` body → `#494c4f` secondary → `#999999` muted/inactive
- Dark corporate footer band (`#2f3233`) anchors the parent-company identity (I Hate Flying Bugs Inc.)

## 2. Color Palette & Roles

### Primary
- **Mildang Teal** (`#00b29d`): Primary brand color for the Mildang PT (private-education) line — the product-entry card background and the accent color throughout the Mildang PT surface. The system's core "this is Mildang" hue.
- **Teal Tint** (`#e5f7f5`): Lightest tinted-teal wash surface used for emphasis labels and feature blocks on Mildang PT.
- **Teal Tint Alt** (`#dff1f1`): A slightly deeper tinted-teal surface for rounded persona/segment cards.

### Accent & Sibling Line
- **Corporate Magenta** (`#cc3366`): Link color and corporate emphasis accent across the home (appears ~14× in the text-color scan). Not a fill color — a text/accent hue.
- **School PT Blue** (`#555dfa`): The periwinkle blue owned by the sibling public-education line (School PT); appears as its product-entry card background.

### Text / Ink
- **Ink** (`#111111`): Primary heading and nav color — a near-black used instead of pure black for warmth.
- **Ink Pure** (`#000000`): Occasional maximum-contrast heading text (appears heavily in the fg scan on white sections).
- **Body** (`#333333`): The dominant body-text color (×138 in the fg scan) — standard reading text.
- **Slate** (`#494c4f`): Secondary text and captions.
- **Muted** (`#999999`): Tertiary / inactive text (e.g. the inactive KOR / ESP language toggles).

### Neutral & Surface
- **Canvas** (`#ffffff`): Page background, white sections, and text color on teal/blue/dark surfaces.
- **Surface Grey** (`#efeff1`): Light grey card/section surface for neutral entries (Newsroom) and alternating blocks.
- **Dark** (`#2f3233`): The dark corporate footer band background.
- **On-Primary** (`#ffffff`): White text and headings placed on the teal, blue, and dark surfaces.

## 3. Typography Rules

### Font Family
- **Sans (only family)**: `Pretendard`, with `sans-serif` fallback — used for headlines, nav, and body alike. There is no display/body split; hierarchy comes entirely from size and weight.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display / H1 | Pretendard | 32px (2.00rem) | 700 | 1.40 (44.8–48px) | normal | Hero + page headlines |
| Heading / H2·H3 | Pretendard | 20px (1.25rem) | 700 | 1.40 (28px) | -0.2px | Section / card heads |
| Nav | Pretendard | 16px (1.00rem) | 600 | 1.50 | normal | Top-navigation items |
| Body | Pretendard | 16px (1.00rem) | 400 | 1.50 (24px) | normal | Standard reading text |

### Principles
- **One typeface, weight-driven hierarchy**: Pretendard carries everything. Contrast comes from Bold (700) for display/headings vs Regular (400) for body — never a font swap.
- **Bold display, calm body**: Headlines run at 700; running text stays a quiet 400 at 16px with a comfortable 1.5 line-height for dense hangul legibility.
- **Slight negative tracking on section heads**: 20px headings carry `-0.2px` letter-spacing; display and body stay at normal tracking.
- **Near-black, not black, for text**: Headings/nav sit at `#111111` and body at `#333333`; pure black `#000000` is reserved for maximum-contrast moments.

## 4. Component Stylings

### Buttons

**Teal CTA Pill**
- Background: `#00b29d`
- Text: `#ffffff`
- Radius: 40px
- Font: 16px / 700 / Pretendard
- Use: Primary action pill on Mildang PT surfaces — teal is the single action color

### Cards & Containers

**Mildang PT Entry Card**
- Background: `#00b29d`
- Text: `#ffffff`
- Radius: 8px
- Padding: 20px 16px
- Use: Private-education (Mildang PT) product-entry card on the corporate home grid

**School PT Entry Card**
- Background: `#555dfa`
- Text: `#ffffff`
- Radius: 8px
- Padding: 20px 16px
- Use: Public-education (School PT) product-entry card — sibling line, periwinkle blue

**Neutral Entry Card**
- Background: `#efeff1`
- Text: `#111111`
- Radius: 8px
- Padding: 20px 16px
- Use: Newsroom / neutral entry card on the grey surface

**Tinted-Teal Segment Card**
- Background: `#dff1f1`
- Text: `#333333`
- Radius: 40px
- Use: Rounded persona/segment card (Students / Lecturers / Parents) on the Mildang PT page

### Badges

**Teal Emphasis Label**
- Background: `#e5f7f5`
- Text: `#00b29d`
- Radius: 40px
- Font: 16px / 700 / Pretendard
- Use: Tinted-teal emphasis label / tag on Mildang PT surfaces

### Navigation

**Top Nav Item**
- Text: `#111111`
- Font: 16px / 600 / Pretendard
- Padding: 30px 0px
- Active: magenta `#cc3366` link/accent
- Use: Corporate nav ("Who we are", "What we do", "Newsroom"); the inactive language toggle (KOR / ESP) sits at `#999999`

### Footer

**Dark Corporate Band**
- Background: `#2f3233`
- Text: `#ffffff`
- Font: 16px / 400 / Pretendard
- Use: Dark footer band carrying the parent-company (I Hate Flying Bugs Inc.) info and links

---

**Verified:** 2026-07-02 (omd:add-reference CREATE — Tier 1 live inspect, 2 surfaces)
**Tier 1 sources:** https://www.ihateflyingbugs.com/ , https://www.ihateflyingbugs.com/mildang-pt-en/ , https://medium.com/mildang
**Tier 2 sources:** getdesign.md/mildang (generic SPA shell, no data) ; styles.refero.design/?q=mildang (no genuine entry — first result resolves to unrelated "AngelList")
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: ~4px
- Scale: 4px, 8px, 12px, 16px, 20px, 28px, 48px, 64px
- Notable: entry-card padding lands at 20px 16px (measured); nav items use a tall 30px vertical padding for an 80px header hit area; persona cards on Mildang PT use a 28px inset with a large image gutter

### Grid & Container
- Corporate home: a full-width grey hero, then an evenly-sized product-entry card grid (Mildang PT / School PT / Newsroom), each card ~385px wide × 160px tall
- Mildang PT page: centered editorial column with rounded persona/segment cards (Students, Lecturers, Parents, Ontact Teachers) at ~240px tall
- Alternating white (`#ffffff`) and tinted-teal (`#e5f7f5` / `#dff1f1`) / grey (`#efeff1`) full-width bands
- A dark corporate band (`#2f3233`) closes the page

### Whitespace Philosophy
- **Editorial calm over density**: generous vertical rhythm between sections; the education message is given room to breathe rather than crammed.
- **Flat segmentation**: sections separate by background color (teal tint vs grey vs white), never by shadow or heavy borders.
- **Color as structure**: the product colors (teal, blue) do the wayfinding work that a busier site would hand to iconography or dividers.

### Border Radius Scale
- Small (3px): fine inner elements
- Medium (8px): the home product-entry cards — the workhorse
- Large (40px): pills and rounded feature/persona cards on Mildang PT
- Full (50% / 9999px): circular avatars and round icons

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline text, most surfaces |
| Tint (Level 1) | Teal tint (`#e5f7f5` / `#dff1f1`) or grey (`#efeff1`) background shift | Card / section separation without elevation |
| Color (Level 2) | Saturated product fill (`#00b29d` / `#555dfa`) | Product-entry cards that must read as tappable |
| Dark (Level 3) | Dark band (`#2f3233`) | Corporate footer anchor |

**Shadow Philosophy**: Milddang is a near-shadowless system. Live inspection found `box-shadow: none` across the nav, hero, product cards, headings, and Mildang PT segment cards on both surfaces. Depth and grouping are communicated entirely through flat color — tinted teal and grey wash surfaces, saturated product fills, and a single dark corporate band. This is a deliberate modern-flat choice that keeps the education UI feeling clean, fast, and approachable; when emphasis is needed the system reaches for its product color (`#00b29d`), never elevation.

## 7. Do's and Don'ts

### Do
- Use Pretendard for everything — display, nav, and body; drive hierarchy with weight (700 vs 400)
- Reserve teal (`#00b29d`) as the Mildang PT action/brand color — keep it the product's single hue
- Use periwinkle blue (`#555dfa`) only for the School PT (public-education) sibling line
- Use magenta (`#cc3366`) for links and corporate accent, not as a fill
- Use near-black `#111111` for headings/nav and `#333333` for body instead of pure black
- Separate sections with flat tinted-teal (`#e5f7f5` / `#dff1f1`) and grey (`#efeff1`) surfaces, not shadows
- Keep geometry soft — 8px entry cards, 40px pills, 50% circular avatars
- Let color carry the wayfinding — one product, one color

### Don't
- Use drop shadows for elevation — Milddang is a flat, shadowless system
- Mix the two product colors — teal is Mildang PT, blue is School PT; keep the lines distinct
- Spread teal across unrelated UI — it dilutes the product signal
- Use pure black (`#000000`) for body text — reserve near-black `#333333` / `#111111`
- Swap fonts for headlines — Pretendard owns every level; change weight, not typeface
- Use magenta (`#cc3366`) as a large fill — it is a link/accent hue only
- Add hard-sell urgency chrome (banners, countdowns) — the brand voice is calm and education-first

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, product cards stack, hero headline compresses |
| Tablet | 640-1024px | 2-up product cards, moderate padding |
| Desktop | 1024-1440px | Full layout, 3-up product-entry grid, centered editorial column |

### Touch Targets
- Product-entry cards at ~160px tall with 20px 16px padding — large, unambiguous tap targets
- Nav items with 30px vertical padding create an ~80px header band
- Rounded 40px pills give a generous, tappable hit area on Mildang PT

### Collapsing Strategy
- Product-entry grid: 3-up → 2-up → single-column stacked
- Persona/segment cards: side-by-side → stacked full-width
- Tinted/white/grey alternating bands maintain full-width treatment
- Hero: 32px headline scales down on mobile, weight 700 maintained

### Image Behavior
- Illustrations and product screenshots carry no shadow at any size, consistent with the flat system
- Circular avatars (50%) and rounded cards (40px / 8px) hold their radius across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Mildang brand / CTA: Teal (`#00b29d`)
- Teal tint surfaces: `#e5f7f5`, `#dff1f1`
- Sibling line (School PT): Blue (`#555dfa`)
- Link / corporate accent: Magenta (`#cc3366`)
- Heading / nav: Ink (`#111111`)
- Max-contrast heading: `#000000`
- Body text: `#333333`
- Secondary text: Slate (`#494c4f`)
- Muted / inactive: `#999999`
- Background: White (`#ffffff`)
- Grey surface: `#efeff1`
- Dark footer band: `#2f3233`

### Example Component Prompts
- "Create a product-entry card grid on white. Three equal cards (~385×160): a teal card `#00b29d`, a periwinkle-blue card `#555dfa`, and a grey card `#efeff1`, each 8px radius, 20px 16px padding, white or `#111111` heading in Pretendard 20px weight 700, no shadow."
- "Design a hero: full-width grey band, H1 in Pretendard 32px weight 700, line-height 1.4, color white on image (or `#111111` on white). Body 16px Pretendard weight 400, `#333333`."
- "Build a Mildang PT feature block: tinted-teal `#dff1f1` rounded card (40px radius), heading Pretendard 20px 700 `#111111`, body 16px 400 `#333333`, a teal `#00b29d` pill CTA (40px radius, white text), no shadow."
- "Create top nav: white header, Pretendard 16px weight 600 links in `#111111`, magenta `#cc3366` on active/link, inactive language toggle at `#999999`."

### Iteration Guide
1. Pretendard everywhere; hierarchy is weight (700 display/headings, 600 nav, 400 body), never a font swap
2. Teal (`#00b29d`) = Mildang PT; blue (`#555dfa`) = School PT — never blend the two lines
3. No shadows — separate with tinted-teal (`#e5f7f5` / `#dff1f1`) and grey (`#efeff1`) surfaces
4. Soft geometry — 8px entry cards, 40px pills, 50% avatars
5. Text is `#111111` / `#333333`, never pure black for body; `#000000` only for max contrast
6. Magenta (`#cc3366`) is a link/accent hue, not a fill
7. Dark band (`#2f3233`) closes the page as the corporate footer

---

## 10. Voice & Tone

Milddang's voice is **calm, credible, and mission-framed** — an education brand that treats teaching quality as a public good rather than a sales pitch. The corporate line "High-Quality Education for Equal Opportunity" sets the register: earnest, purposeful, and free of cram-market urgency. Copy speaks to students, parents, and teachers as partners in learning, and it decodes the product (AI-based 1:1 personalized tutoring) in plain terms rather than hyping the technology.

| Context | Tone |
|---|---|
| Corporate mission | Purpose-driven, plain. "High-Quality Education for Equal Opportunity." Never superlative. |
| Product headlines | Descriptive and concrete. "High-Quality Personalized…", "AI-based 1:1 Personalized…". Explains, doesn't boast. |
| Segment sections | Audience-addressed, calm. "Students", "Lecturers", "Parents", "Ontact Teachers" — each spoken to directly. |
| Nav / wayfinding | Functional and human. "Who we are", "What we do", "Newsroom". |
| Trust / company | Steady and transparent — corporate identity (I Hate Flying Bugs Inc.) stated plainly in the footer. |

**Voice samples (verbatim from live surfaces):**
- "High-Quality Education for Equal Opportunity" — corporate hero headline (mission-framed). *(verified live 2026-07-02)*
- "High-Quality Personalized…" — Mildang PT product H1 (product promise). *(verified live 2026-07-02)*
- "AI-based 1:1 Personalized…" — Mildang PT feature heading (what the product is). *(verified live 2026-07-02)*

**Forbidden register**: cram-school fear-selling, countdown/urgency pressure, undefined AI buzzwords left unexplained, exclamation-heavy hype, grade-guarantee claims.

## 11. Brand Narrative

Milddang (밀당) is the flagship product of **I Hate Flying Bugs (IHFB)**, a Korean edu-tech company whose mission — stated plainly on its home — is "High-Quality Education for Equal Opportunity." The company builds two education lines: **Mildang PT**, an AI-based 1:1 personalized tutoring service for private education, and **School PT**, its counterpart aimed at public education. The founding premise reframes tutoring quality — historically gated by geography and household income — as something that software-assisted personalization can distribute more equally.

The product's core is **AI-based 1:1 personalized tutoring**: the site addresses each stakeholder in the learning loop directly — students, lecturers, parents, and "Ontact" (online-contact) teachers — signaling that the product is a coordinated system, not a single app. The IHFB R&D team documents this work publicly on its team blog ("밀당PT와 스쿨PT를 개발하는 IHFB R&D팀"), reinforcing an engineering-led, transparent posture.

What Milddang refuses, visible in its design: the loud, urgency-driven chrome of the Korean private-tutoring market (no countdowns, no fear-selling, no grade-guarantee banners). What it embraces: a flat, shadowless, education-first interface; a calm single typeface (Pretendard); and a disciplined **one-product-one-color** palette (Mildang teal `#00b29d`, School blue `#555dfa`) that makes the two lines legible at a glance while a warm magenta (`#cc3366`) carries the corporate voice.

## 12. Principles

1. **Equal opportunity is the product.** The mission ("High-Quality Education for Equal Opportunity") is the design brief. *UI implication:* keep the interface approachable and non-intimidating; never gate basic understanding behind jargon or paywalled chrome.
2. **One product, one color.** Each education line owns a hue. *UI implication:* reserve teal (`#00b29d`) for Mildang PT and blue (`#555dfa`) for School PT; never blend them, so the color itself is the wayfinding.
3. **Calm over urgency.** The brand rejects cram-market pressure tactics. *UI implication:* no countdowns, no fear-selling banners; give the education message editorial room to breathe.
4. **Flat and honest.** Depth is communicated by color, not decoration. *UI implication:* `box-shadow: none`; separate with tinted-teal and grey surfaces and a single dark corporate band.
5. **Speak to every learner in the loop.** Students, lecturers, parents, and teachers each get an addressed segment. *UI implication:* structure surfaces around audiences, not features; use rounded tinted-teal cards to make each segment feel welcoming.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Milddang / IHFB user segments (Korean students in personalized tutoring, their parents, and participating teachers), not individual people.*

**김서연, 16, 대구.** A high-school student using Mildang PT for 1:1 personalized study. Values that the plan adapts to what she actually gets wrong instead of a one-size lecture. Chose Milddang because the interface felt calm and school-like, not like a pressure-selling academy app.

**이준호, 45, 인천.** A parent of two evaluating tutoring options. Distrusts grade-guarantee marketing and countdown discounts. Trusts Milddang's plain "equal opportunity" mission framing and the transparent stakeholder sections (students / parents / teachers).

**박지은, 33, 서울.** An Ontact (online-contact) teacher delivering Mildang PT sessions. Appreciates that the product treats lecturers as a first-class audience with their own segment, and that the flat, uncluttered UI keeps her focused on the student rather than the chrome.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no assigned lessons)** | White canvas. Single Ink (`#111111`) line at body size explaining nothing is assigned yet, with one teal (`#00b29d`) pill CTA to start. No illustration clutter. |
| **Empty (saved / history none yet)** | Muted (`#999999`) single line: nothing here yet, plus a calm path back. Honest, non-pressuring. |
| **Loading (content fetch)** | Skeleton blocks on a tinted-teal (`#e5f7f5`) or grey (`#efeff1`) surface at final dimensions, 8px radius. Flat pulse — no shadow shimmer, consistent with the shadowless system. |
| **Loading (session compute)** | Inline progress within the card; previous values stay visible. |
| **Error (fetch/session failed)** | Inline message in Ink (`#111111`) with a plain-language explanation and a retry. No bare "오류가 발생했습니다" — always states the next step. |
| **Error (form validation)** | Field-level message below the input; describes what is valid, not just "필수". |
| **Success (lesson / action complete)** | Brief inline confirmation in a calm tone with teal (`#00b29d`) accent; next-step detail linked below. No celebratory emoji. |
| **Skeleton** | Tinted-teal (`#dff1f1`) or grey (`#efeff1`) blocks at final dimensions, 8px / 40px radius, flat pulse. |
| **Disabled** | Muted (`#999999`) text on a reduced-opacity surface; teal actions fade rather than turn grey, to preserve the brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, card/pill press, focus |
| `motion-standard` | 220ms | Card / section reveal, sheet, dropdown |
| `motion-slow` | 320ms | Page-level transitions, hero reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, sheets, segment blocks |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is functional and quiet — consistent with the flat, calm, education-first aesthetic. Product-entry cards respond to press with a subtle scale/opacity shift; segment blocks fade-in from below at `motion-standard / ease-enter`. No bounce or spring — an education brand signals steadiness and focus, not playfulness. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the product remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-07-02) via playwright getComputedStyle on
https://www.ihateflyingbugs.com/ and https://www.ihateflyingbugs.com/mildang-pt-en/:
- Corporate hero H1 "High-Quality Education for Equal Opportunity" — Pretendard 32px / 700 / white on hero
- Product cards: Mildang PT bg rgb(0,178,157) #00b29d, School PT bg rgb(85,93,250) #555dfa, Newsroom bg rgb(239,239,241) #efeff1 — all 8px radius, 20px 16px padding
- Mildang PT page H1 "High-Quality Personalized…" 32px/700 #111111; H3 "AI-based 1:1 Personalized…" 20px/700; segment cards Students/Lecturers/Parents/Ontact Teachers on tinted-teal #dff1f1 / grey #efeff1
- Body Pretendard 16px/400 #333333; nav 16px/600 #111111; magenta link #cc3366; box-shadow none (both surfaces)
- document.title: "I Hate Flying Bugs Inc." / "Mildang PT - I Hate Flying Bugs"

Token-level claims (§1-9) are sourced from this live inspection (see web/references/mildang/.verification.md).

Voice samples (§10) are verbatim from the live corporate + Mildang PT surfaces (hero H1, product H1, feature H3).

Brand narrative (§11): Milddang (밀당) / Mildang PT and School PT are products of I Hate Flying Bugs (IHFB),
a Korean edu-tech company; the IHFB R&D team blog (https://medium.com/mildang) confirms "밀당PT와 스쿨PT를
개발하는 IHFB R&D팀". Mission phrasing "High-Quality Education for Equal Opportunity" is verbatim from the
home. Broader company facts are general public knowledge, not quoted from a single verified statement this turn.

Personas (§13) are fictional archetypes informed by publicly observable Milddang user segments (Korean
students in personalized tutoring, parents, teachers). Names are illustrative; they do not refer to real people.

Interpretive claims (e.g., "one product, one color", "calm over urgency as a rejection of cram-market chrome")
are editorial readings connecting Milddang's observed design to its stated mission, not directly sourced
Milddang statements.
-->
