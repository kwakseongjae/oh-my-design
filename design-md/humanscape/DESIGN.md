---
id: humanscape
name: Humanscape
display_name_kr: 휴먼스케이프
country: KR
category: healthcare
homepage: "https://humanscape.io/"
primary_color: "#00adf7"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=humanscape.io&sz=128"
verified: "2026-07-02"
added: "2026-07-02"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-07-02"
  note: "Humanscape rebranded to LifeX (humanscape.io -> lifex.io). primary = azure hero-highlight #00adf7 (coded as Tailwind text-[#00ADF7]); secondary accent violet #7b61ff on section index labels. Near-black ink #191a1f, shadowless flat system, oversized Pretendard display type."
  colors:
    primary: "#00adf7"
    accent-violet: "#7b61ff"
    ink: "#191a1f"
    heading: "#1a1b1e"
    body: "#0a0a0a"
    dark: "#28292d"
    meta: "#3c3d42"
    muted: "#5d5d60"
    faint: "#b0b3ba"
    canvas: "#ffffff"
    surface: "#f4f6f9"
    hero-mint: "#dfe7e4"
    blue-tint: "#c7e1ff"
    hairline: "#d8dde4"
  typography:
    family: { sans: "Pretendard" }
    display:    { size: 112, weight: 600, use: "Page hero title (Our Business)" }
    display-lg: { size: 90, weight: 500, use: "Closing statement headline" }
    hero:       { size: 64, weight: 500, lineHeight: 1.2, use: "Section headline" }
    h1:         { size: 58, weight: 500, use: "Homepage hero H1" }
    h2:         { size: 32, weight: 500, use: "Card section title" }
    h3:         { size: 24, weight: 500, use: "Card title" }
    label:      { size: 16, weight: 500, use: "Section index label (violet)" }
    body:       { size: 16, weight: 400, lineHeight: 1.5, use: "Body, nav, buttons" }
    toggle:     { size: 14, weight: 600, use: "Language toggle pill" }
    micro:      { size: 12, weight: 600, use: "Hiring badge / small tag" }
  spacing: { xs: 4, sm: 8, nav: 14, md: 24, lg: 40, xl: 64, section: 120, band: 144 }
  rounded: { sm: 8, lg: 24, xl: 32, full: 9999 }
  shadow:
    none: "none"
  components:
    nav-link:     { type: tab, fg: "#1a1b1e", radius: "8px", padding: "8px 14px", font: "16px / 400", active: "text #00adf7", use: "Top navigation item" }
    lang-toggle:  { type: toggle, bg: "#f4f6f9", fg: "#28292d", radius: "9999px", padding: "8px 14px", font: "14px / 600", use: "KR/EN language pill toggle" }
    inline-cta:   { type: button, fg: "#28292d", border: "0 0 1px solid #28292d", font: "18px / 400", use: "Inline underlined text CTA (eXplore Our Business)" }
    feature-card: { type: card, bg: "#f4f6f9", fg: "#191a1f", radius: "24px", use: "Feature/content card on cool-grey surface" }
    data-card:    { type: card, bg: "#c7e1ff", fg: "#191a1f", radius: "32px", use: "Data-viz tinted metric card" }
    index-label:  { type: badge, fg: "#7b61ff", font: "16px / 500", use: "Section index label 1/2/3 (violet)" }
    hiring-badge: { type: badge, fg: "#7b61ff", font: "12px / 600", use: "'we're hiring' micro tag" }
    growth-row:   { type: listItem, fg: "#191a1f", border: "0 0 1px solid #d8dde4", padding: "40px 0", font: "16px / 400", use: "Growth Layers list row with hairline divider" }
    data-dot:     { type: badge, bg: "#00adf7", fg: "#191a1f", radius: "9999px", use: "Azure data-point indicator dot" }
  components_harvested: true
---

# Design System Inspiration of Humanscape

## 1. Visual Theme & Atmosphere

Humanscape (휴먼스케이프) is the Korean healthcare-data company behind RareNote (레어노트), and its current corporate site — now presented under the LifeX brand at `humanscape.io` (which resolves to `lifex.io`) — reads like a scientific white paper turned into a product page. The canvas is pure white (`#ffffff`), the hero rests on a soft mint-grey wash (`#dfe7e4`), and text sits in a near-black ink (`#191a1f`) rather than pure black — the register is calm, editorial, and data-literate rather than clinical or salesy. The single saturated brand accent is a bright azure (`#00adf7`), reserved for the one word that matters in the hero headline ("the Life Journey") and for small data-point indicator dots, training the eye to read that cyan-blue as "the signal in the data."

The typographic personality is defined by scale rather than weight. Every headline runs in **Pretendard** — Korea's de-facto product sans — at genuinely oversized display sizes: 58px on the homepage hero, 64px on section headlines, and a full 112px on the "Our Business" page title, all at a restrained medium weight (500-600). This is the opposite of the heavy-800 Korean-fintech convention; the confidence comes from size and air, not boldness. Body, navigation, and interface text drop to a quiet 16px / weight 400, and a secondary violet accent (`#7b61ff`) marks the small numbered section labels ("1. Built on Healthcare Network", "2. Powered by Global User Base", "3. Scaled by Data Intelligence") and the "we're hiring" micro tag.

What distinguishes Humanscape from its healthcare peers is its total restraint with depth. Live inspection found `box-shadow: none` across the hero, nav, headings, cards, and list rows — this is a flat, shadow-free system. Separation comes from tinted surfaces (cool-grey `#f4f6f9`, mint `#dfe7e4`, and pale data-blue tints such as `#c7e1ff`) and thin `#d8dde4` hairlines, never elevation. Geometry leans generously rounded: 8px nav chips, 24px feature cards, 32px data cards, and full-pill (`9999px`) language toggles and indicator dots. The result is a spacious, science-forward aesthetic — a data company that wants to feel trustworthy and human, not intimidating.

**Key Characteristics:**
- Pretendard as the single family, scaled from a 16px body up to a 112px display — hierarchy by size, not weight
- Medium display weight (500-600) — confident and airy, never the heavy-800 Korean convention
- One saturated azure accent (`#00adf7`) reserved for the hero highlight word and data-point dots
- Secondary violet (`#7b61ff`) only on numbered section labels and the hiring tag
- Near-black ink (`#191a1f`) and heading navy (`#1a1b1e`) instead of pure black for warmth and trust
- Flat, shadow-free depth: mint (`#dfe7e4`), cool-grey (`#f4f6f9`), and data-blue tint (`#c7e1ff`) surfaces + `#d8dde4` hairlines do the separating
- Generous rounding — 24px / 32px cards, full-pill toggles and dots
- Text CTAs are minimalist underlined links (`#28292d` with a 1px bottom border), not filled buttons

## 2. Color Palette & Roles

### Primary & Accent
- **LifeX Azure** (`#00adf7`): The primary brand accent. Coded verbatim as the Tailwind class `text-[#00ADF7]` on the hero highlight ("the Life Journey") and used as the fill for small full-round data-point indicator dots. The system's single "signal" color.
- **Accent Violet** (`#7b61ff`): Secondary accent for the numbered section index labels ("1. / 2. / 3.") and the small "we're hiring" tag. Never a background — always a small typographic marker.

### Text / Ink Hierarchy
- **Ink** (`#191a1f`): Primary text and card copy color (the most frequent foreground on the page).
- **Heading Navy** (`#1a1b1e`): Display headlines and section titles — a hair softer than ink, still near-black.
- **Body Black** (`#0a0a0a`): The document default body color.
- **Dark Slate** (`#28292d`): Inline underlined CTA links, footer section heads, and the active-nav ink on white surfaces.
- **Meta Grey** (`#3c3d42`): Footer sub-navigation links and secondary metadata.
- **Muted Grey** (`#5d5d60`): Tertiary text, captions, and muted labels.
- **Faint Grey** (`#b0b3ba`): Disabled state, inactive language toggle, lowest-emphasis text.

### Neutral & Surface
- **Pure White** (`#ffffff`): Page background, card surfaces, and text on the mint hero / azure accents.
- **Cool-Grey Surface** (`#f4f6f9`): Tinted surface for feature cards and the language-toggle pill background.
- **Hero Mint** (`#dfe7e4`): The soft mint-grey wash behind the full-height homepage hero.
- **Data Blue Tint** (`#c7e1ff`): Pale blue tinted surface for data-visualization and metric cards.
- **Hairline** (`#d8dde4`): Thin borders, dividers, and list-row rules — the primary separation device in a shadowless system.

## 3. Typography Rules

### Font Family
- **Sans (single family)**: `Pretendard` (with `Pretendard Fallback`, `system-ui`) — used for every text element, from the 112px page hero down to the 12px hiring tag. There is no separate display face; Pretendard carries both display and body roles.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Page Hero Title | Pretendard | 112px (7.00rem) | 600 | tight | "Our Business" oversized page title |
| Closing Statement | Pretendard | 90px (5.63rem) | 500 | tight | "eXplore Life, Decide Better." |
| Section Headline | Pretendard | 64px (4.00rem) | 500 | ~1.2 | "The Foundation for Scalable Innovation." |
| Homepage Hero H1 | Pretendard | 58px (3.63rem) | 500 | ~1.2 | "eXploring human Life through data-driven..." |
| Sub-hero H1 | Pretendard | 52px (3.25rem) | 500 | ~1.2 | "Intelligence Across the Life Journey" |
| Card Section Title | Pretendard | 32px (2.00rem) | 500 | normal | H2 card / feature title |
| Card Title | Pretendard | 24px (1.50rem) | 500 | normal | H3 business-area title |
| Section Index Label | Pretendard | 16px (1.00rem) | 500 | normal | Violet numbered label |
| Body / Nav / Button | Pretendard | 16px (1.00rem) | 400 | 1.50 (24px) | Standard reading + interface text |
| Language Toggle | Pretendard | 14px (0.88rem) | 600 | normal | KR/EN pill label |
| Micro Tag | Pretendard | 12px (0.75rem) | 600 | normal | "we're hiring" and small tags |

### Principles
- **Scale, not weight, is the hierarchy**: display sizes climb to 112px while staying at weight 500-600. The system never reaches for 700-800 to command attention.
- **One family, two jobs**: Pretendard is both the display and the reading voice; the difference between a headline and a paragraph is size, not typeface.
- **Airy display, dense body**: headlines get vast surrounding whitespace; body text stays at a compact 16px / 1.5 for information-dense corporate content.
- **Accent by color, not weight**: the violet section labels and azure highlight word carry emphasis through hue, letting the surrounding type stay calm.

## 4. Component Stylings

### Navigation & Toggle

**Nav Link**
- Text: `#1a1b1e`
- Radius: 8px
- Padding: 8px 14px
- Font: 16px Pretendard weight 400
- Active: `#00adf7` text
- Use: Top navigation items (About Us, Our Business, Newsroom, Investor Relations, Career)

**Language Toggle Pill**
- Background: `#f4f6f9`
- Text: `#28292d`
- Radius: 9999px (full pill)
- Padding: 8px 14px
- Font: 14px Pretendard weight 600
- Use: KR/EN language switch (active language filled, inactive `#b0b3ba` text)

### Buttons

**Inline Underlined CTA**
- Text: `#28292d`
- Border: 0 0 1px solid `#28292d` (bottom rule only)
- Font: 18px Pretendard weight 400
- Use: Primary text CTA ("eXplore Our Business", "eXplore About Us") — the site favors underlined links over filled buttons

### Cards & Containers

**Feature Card**
- Background: `#f4f6f9`
- Text: `#191a1f`
- Radius: 24px
- Use: Feature / content card on the cool-grey surface (no shadow)

**Data Card**
- Background: `#c7e1ff`
- Text: `#191a1f`
- Radius: 32px
- Use: Data-visualization / metric card with a pale-blue tint

### Badges & Indicators

**Section Index Label**
- Text: `#7b61ff`
- Font: 16px Pretendard weight 500
- Use: Violet numbered section labels ("1. Built on Healthcare Network")

**Hiring Tag**
- Text: `#7b61ff`
- Font: 12px Pretendard weight 600
- Use: "we're hiring" micro tag

**Data Dot**
- Background: `#00adf7`
- Radius: 9999px (full)
- Use: Small azure data-point indicator (14px) beside metrics and timeline markers

### List Rows

**Growth Layers Row**
- Text: `#191a1f`
- Border: 0 0 1px solid `#d8dde4` (bottom hairline)
- Padding: 40px 0
- Font: 16px Pretendard weight 400
- Use: Stacked "Growth Layers" list rows separated by hairline dividers

---

**Verified:** 2026-07-02 (omd:add-reference CREATE — Tier 1 live inspect, 2 surfaces)
**Tier 1 sources:** https://humanscape.io/ (redirects to https://lifex.io/ — live homepage inspect); https://lifex.io/our-business (second surface live inspect)
**Tier 2 sources:** getdesign.md/humanscape — SPA shell, no brand data; styles.refero.design/?q=humanscape — no brand-specific match (generic browse grid)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 4px, 8px, 14px, 24px, 40px, 64px, 120px, 144px
- Notable: section vertical padding is large (120px top on band sections; 40px per list row), giving the corporate content a spacious, unhurried rhythm

### Grid & Container
- Full-height (`100dvh`) hero anchored on the mint (`#dfe7e4`) wash with the 58px Pretendard headline centered
- Business-area cards laid out as a horizontal set of large rounded cards (24-32px radius)
- "Growth Layers" rendered as a stacked vertical list where each row is a 40px-padded band separated by a `#d8dde4` hairline
- Partner/investor logos arranged in grouped grids under 24px H3 category heads
- Footer expands into a multi-column sitemap (About Us / Our Business / Newsroom / Investor Relations)

### Whitespace Philosophy
- **Air as authority**: oversized headlines with generous surrounding space signal confidence without heavy weight.
- **Flat segmentation**: sections separate by background wash (mint `#dfe7e4` vs white `#ffffff` vs cool-grey `#f4f6f9`) and hairlines, never by shadow.
- **Data breathing room**: metric cards on `#c7e1ff` tint get their own space so the numbers read as evidence, not decoration.

### Border Radius Scale
- Small (8px): nav chips, inner elements
- Large (24px): feature cards — the workhorse
- Extra-large (32px): data / metric cards
- Full (9999px): language toggle pills, azure data dots

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline text, most surfaces |
| Wash (Level 1) | Background shift (`#dfe7e4` / `#f4f6f9` / `#c7e1ff`) | Section and card separation without elevation |
| Hairline (Level 2) | `1px solid #d8dde4` | List-row dividers, card outlines |

**Shadow Philosophy**: Humanscape/LifeX is a fully shadowless system. Live inspection returned `box-shadow: none` on the hero, navigation, headings, cards, and list rows. Depth and grouping are communicated entirely through flat tinted washes (mint `#dfe7e4`, cool-grey `#f4f6f9`, data-blue `#c7e1ff`) and thin `#d8dde4` hairlines. This is a deliberate modern-flat choice that keeps a data-heavy healthcare narrative feeling clean, editorial, and trustworthy rather than skeuomorphic. When emphasis is needed the system reaches for color (azure `#00adf7`) or scale (a 112px headline), never elevation.

## 7. Do's and Don'ts

### Do
- Use Pretendard for everything and build hierarchy through size (16px body up to 112px display)
- Keep display weight at 500-600 — confident and airy, never heavy 700-800
- Reserve azure (`#00adf7`) for the single hero-highlight word and data-point dots
- Use violet (`#7b61ff`) only for numbered section labels and the hiring tag
- Use near-black ink (`#191a1f`) and heading navy (`#1a1b1e`) instead of pure black
- Separate sections with flat washes (`#dfe7e4`, `#f4f6f9`, `#c7e1ff`) and `#d8dde4` hairlines — no shadows
- Prefer underlined text CTAs (`#28292d` with a 1px bottom rule) over filled buttons
- Use generous rounding — 24px feature cards, 32px data cards, full-pill toggles

### Don't
- Set headlines in heavy weight — this system uses size, not boldness, for authority
- Spread azure across many elements — it dilutes the single-signal read
- Use violet as a fill or background — it is a small typographic accent only
- Add drop shadows for elevation — the system is flat and shadow-free
- Use pure black (`#000000`) for body or headings — reserve near-black ink `#191a1f`
- Introduce a third saturated hue — azure and violet are the only accents
- Use sharp/square corners on cards or toggles — geometry is generously rounded
- Cram headlines into tight columns — display type needs surrounding air

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero headline compresses (112px -> ~40px), cards stack |
| Tablet | 640-1024px | 2-up card layout, moderate padding |
| Desktop | 1024-1440px | Full layout, full-height hero, horizontal card sets |

### Touch Targets
- Nav links at 40px height with 8px 14px padding — comfortably tappable
- Language toggle as a full pill for an unmistakable target
- Growth-layer rows at 40px vertical padding give generous tap zones

### Collapsing Strategy
- Hero: oversized Pretendard headline scales down on mobile, weight 500-600 maintained
- Business-area cards: horizontal set -> stacked single column
- Growth Layers list: hairline-separated rows maintain full-width, padding tightens
- Partner logo grids: multi-column -> 2-column -> single column
- Mint / white / cool-grey wash sections keep full-width treatment

### Image Behavior
- Product screenshots and data visuals carry no shadow at any size, consistent with the flat system
- Cards maintain their 24px / 32px radius across breakpoints
- Azure data dots and tint surfaces persist as the visual signal on smaller screens

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary accent (highlight word, data dots): LifeX Azure (`#00adf7`)
- Secondary accent (section labels, hiring tag): Violet (`#7b61ff`)
- Primary text / card copy: Ink (`#191a1f`)
- Display headings: Heading Navy (`#1a1b1e`)
- Body default: Body Black (`#0a0a0a`)
- Inline CTA / footer heads: Dark Slate (`#28292d`)
- Footer sub-links: Meta Grey (`#3c3d42`)
- Muted text: Muted Grey (`#5d5d60`)
- Disabled / faint: Faint Grey (`#b0b3ba`)
- Background: Pure White (`#ffffff`)
- Cool-grey surface / toggle: (`#f4f6f9`)
- Hero wash: Hero Mint (`#dfe7e4`)
- Data-viz tint: Data Blue Tint (`#c7e1ff`)
- Hairline: (`#d8dde4`)

### Example Component Prompts
- "Create a full-height hero on a mint (`#dfe7e4`) wash. Headline at 58px Pretendard weight 500, near-black `#191a1f`, with a single highlighted word in azure `#00adf7`. Below it an underlined text CTA: `#28292d` text, 18px, 1px bottom border, no fill."
- "Design a feature card: cool-grey `#f4f6f9` background, 24px radius, no shadow. Title 24px Pretendard weight 500 `#1a1b1e`, body 16px weight 400 `#191a1f`."
- "Build a data/metric card: pale-blue `#c7e1ff` background, 32px radius, flat. Big number in Pretendard, an azure `#00adf7` full-round dot as the data indicator."
- "Create the top nav: white header, 16px Pretendard links `#1a1b1e` with 8px radius and 8px 14px padding, azure `#00adf7` on the active item. A full-pill KR/EN toggle on `#f4f6f9`, 14px weight 600."
- "Lay out a Growth Layers list: stacked rows, each 40px vertical padding, separated by a 1px `#d8dde4` hairline. A violet `#7b61ff` numbered label ('1.', '2.', '3.') leads each row."

### Iteration Guide
1. Pretendard for everything; build hierarchy by size, keep weight at 500-600 for display
2. Azure (`#00adf7`) is the single signal color — one highlight word and data dots only
3. Violet (`#7b61ff`) marks numbered labels and the hiring tag, never a fill
4. No shadows — separate with mint / cool-grey / blue-tint washes and `#d8dde4` hairlines
5. Text color is `#191a1f` ink, headings `#1a1b1e`, never pure black
6. Rounding is generous: 24px feature cards, 32px data cards, full-pill toggles/dots
7. CTAs are underlined text links (`#28292d`), not filled buttons

---

## 10. Voice & Tone

Humanscape/LifeX's voice is **clear, humane, and evidence-led** — a healthcare-data company that speaks about serious subjects (rare disease, patient data, clinical outcomes) with calm confidence rather than either cold clinical jargon or startup hype. The brand's own hero framing — "eXploring human Life through data-driven Intelligence" and the closing "eXplore Life, Decide Better." — sets the register: it puts *human life* first and *data* second, treating data as a means to better decisions, not an end in itself. Copy addresses partners, patients, and investors as intelligent readers who deserve transparency about how the data works.

| Context | Tone |
|---|---|
| Hero headlines | Mission-framed, humane. "eXploring human Life through data-driven Intelligence." Confident, never superlative. |
| Business-area labels | Plain and descriptive. "AI Growth Monitoring", "Developmental Care & Treatment", "Care Navigation for Serious Illness". |
| Scale claims | Concrete and specific. "1,800+ Healthcare Network", "2.5M+ Global User Base", "230M+ Data Intelligence". |
| CTAs | Low-key invitations. "eXplore Our Business", "eXplore About Us". |
| Careers | Warm and inviting. A small violet "we're hiring" tag rather than an aggressive banner. |

**Voice samples (verbatim from live homepage, verified 2026-07-02):**
- "eXploring human Life through data-driven Intelligence Across the Life Journey" — hero headline (human-first, data-second framing).
- "The Foundation for Scalable Innovation." — section headline (infrastructure register).
- "eXplore Life, Decide Better." — closing statement (data-for-decisions mission).

**Forbidden register**: fear-based medical urgency, undefined clinical jargon, hype superlatives ("revolutionary", "world-class"), and anything that treats patient data as a commodity rather than a trust.

## 11. Brand Narrative

Humanscape (휴먼스케이프) was founded in **March 2016** by CEO **Jang Min-hoo (장민후)** as a digital-healthcare company built around a hard, human problem: patients with rare and intractable diseases had almost no accessible, trustworthy source of information about their own condition, drug-development status, or clinical trials. Its flagship service, **RareNote (레어노트)**, turned that gap into a patient-first data platform — organizing information on over a thousand rare diseases for tens of thousands of patients and guardians — and the company also operated **MamiTalk (마미톡)**, a pregnancy and childcare platform. In its early years Humanscape was known for exploring **blockchain-based health-data sharing**, framing patient data as something patients themselves should own and benefit from ([시사저널e interview with CEO 장민후](https://www.sisajournal-e.com/news/articleView.html?idxno=181666)).

The company is now continuing its journey under the new brand **LifeX**, presented at `humanscape.io` (which resolves to `lifex.io`) as "data-driven healthcare intelligence across the life journey." The rebrand reframes the mission from a single rare-disease community into a broader **life-journey intelligence** platform spanning growth monitoring, developmental care, personalized financial and shopping services, and care navigation for serious illness. Per the live site, LifeX now describes itself as *Built on Healthcare Network (1,800+), Powered by Global User Base (2.5M+), and Scaled by Data Intelligence (230M+)* — with overseas expansion into the United States, Indonesia, and Vietnam through local subsidiaries ([VentureSquare coverage](https://www.venturesquare.net/1093607)).

What the design refuses, and what it embraces, tracks this narrative. It refuses the heavy, alarming chrome of legacy medical software (no dense shadowed panels, no institutional blue-and-white sterility) and the dark-pattern urgency of consumer health marketing. It embraces a flat, editorial, science-forward surface: oversized Pretendard headlines that speak plainly, a single azure signal color for the data that matters, and a humane near-black ink that keeps a data company feeling like it is, first, about human life.

## 12. Principles

1. **Human life first, data second.** The hero literally reads "eXploring human Life through data-driven Intelligence" — life is the subject, data the instrument. *UI implication:* lead with the person and the outcome; let numbers support the story rather than dominate it.
2. **Data as a trust, not a commodity.** The company's origin in patient-owned, rare-disease data means information is handled as something borrowed from people who are vulnerable. *UI implication:* present metrics transparently and specifically ("1,800+", "2.5M+"), never as vague marketing puffery.
3. **Clarity over intimidation.** Serious healthcare topics are surfaced in plain language and airy layouts. *UI implication:* generous whitespace, oversized-but-calm headlines, and descriptive labels ("Care Navigation for Serious Illness") instead of jargon.
4. **One signal, one color.** Azure (`#00adf7`) means "this is the data point that matters." *UI implication:* reserve the azure accent for the single highlight and for data-point dots so the signal is never ambiguous.
5. **Flat and evidence-like.** A shadowless, hairline-separated surface reads like a well-set scientific document. *UI implication:* separate with tint and rules, not elevation; keep the page feeling like credible evidence rather than a sales deck.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Humanscape/LifeX user and stakeholder segments (rare-disease patients and guardians, healthcare partners, and investors), not individual people.*

**김서연, 38, 서울.** A parent of a child with a rare disease who first found Humanscape through RareNote. Distrusts fragmented, alarmist medical forums and values a single calm source that explains her child's condition, drug pipelines, and trials in plain Korean. Chose the platform because it treated her as a partner in the data, not a patient to be marketed to.

**Dr. Arun Patel, 45, singapore-based partner.** A clinical-network lead evaluating LifeX for a cross-border data collaboration. Reads the "Growth Layers" and scale metrics ("1,800+ Healthcare Network") as evidence of real infrastructure. Appreciates that the site reads like a scientific brief rather than a hype pitch, which signals the seriousness he needs from a data partner.

**박준호, 41, 판교.** A healthcare-focused VC reviewing LifeX's investor-relations page. Values the concrete, specific numbers and the calm, editorial presentation — it tells him the team respects evidence. Notices immediately that there is no shadow-stacked, over-designed chrome, and reads that restraint as maturity.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no data / results)** | White canvas. A single Ink (`#191a1f`) line explaining that no data is available yet, with one underlined `#28292d` text CTA to adjust the query. No illustration clutter, no alarm. |
| **Empty (saved / watchlist, none yet)** | Muted Grey (`#5d5d60`) single line stating nothing is saved, plus a calm path back. Honest and quiet. |
| **Loading (data fetch)** | Skeleton blocks on `#f4f6f9` tinted surface at final card dimensions, 24px radius. Flat pulse — no shadow shimmer, consistent with the shadowless system. |
| **Loading (metric compute)** | Inline progress near the azure data dot; previous values stay visible until the new value resolves. |
| **Error (fetch failed)** | Inline message in Ink (`#191a1f`) with a plain-language explanation and a retry link. No bare "오류가 발생했습니다" — always states the next step. |
| **Error (form validation)** | Field-level message below the input in a calm tone; describes what is valid, not just "필수". |
| **Success (submitted / saved)** | Brief inline confirmation in a calm tone; the relevant detail links immediately below. No celebratory emoji. |
| **Skeleton** | `#f4f6f9` blocks at final dimensions, 24px radius, flat pulse. |
| **Disabled** | Faint Grey (`#b0b3ba`) text on a reduced-opacity surface; the azure `#00adf7` accent fades rather than switching to grey, to preserve the brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, nav/link, focus |
| `motion-standard` | 240ms | Card / section reveal, toggle, dropdown |
| `motion-slow` | 400ms | Full-height hero reveal, page-level transitions |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — sections, cards, data reveals |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is quiet, editorial, and evidence-paced — consistent with the flat, science-forward aesthetic. Oversized hero headlines and data metrics fade/rise in from below at `motion-standard / ease-enter`; azure data dots may animate in as the underlying number resolves, reinforcing "the signal arriving in the data." No bounce, spring, or overshoot — a healthcare-data company signals steadiness and credibility, not playfulness. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and the page remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10-15)

Tier 1 live inspect (2026-07-02) via playwright getComputedStyle on https://humanscape.io/
(resolves to https://lifex.io/) and https://lifex.io/our-business:
- Hero H1 "eXploring human Life through data-driven..." — Pretendard 58px / weight 500 / white; sub-hero H1 "Intelligence Across the Life Journey" 52px / 500 / rgb(26,27,30) #1a1b1e with azure highlight span rgb(0,173,247) #00adf7
- Section headline "The Foundation for Scalable Innovation." 64px / 500; "Our Business" page hero 112px / 600; "eXplore Life, Decide Better." 90px / 500
- Section index labels ("1. Built on Healthcare Network", "2. Powered by Global User Base", "3. Scaled by Data Intelligence") 16px / 500 violet rgb(123,97,255) #7b61ff; "we're hiring" 12px / 600 violet
- box-shadow: none across hero, nav, headings, cards, list rows (shadowless system)
- Scale metrics on live homepage: "1,800+ Healthcare Network", "2.5M+ Global User Base", "230M+ Data Intelligence"

Token-level claims (sections 1-9) are sourced from this live inspection.
Voice samples (section 10) are verbatim from the live homepage.

Brand narrative (section 11): Humanscape (휴먼스케이프) founded March 2016; CEO 장민후 (Jang Min-hoo);
flagship RareNote (레어노트) rare-disease data platform + MamiTalk (마미톡); early blockchain
health-data era; rebranding to LifeX with overseas expansion (US, Indonesia, Vietnam).
Sourced from WebSearch (2026-07-02): sisajournal-e.com CEO interview, venturesquare.net LifeX
coverage, rocketpunch/thevc company profiles. Founding month and scale figures are publicly
documented; specific figures reflect the live site and cited coverage.

Personas (section 13) are fictional archetypes informed by publicly observable user/stakeholder
segments (rare-disease patients and guardians, healthcare partners, investors). Names are
illustrative; they do not refer to real people.

Interpretive claims (e.g., "human life first, data second", "flat and evidence-like as a rejection
of legacy medical-software chrome") are editorial readings connecting the observed design to the
company's stated positioning, not directly sourced Humanscape/LifeX statements.
-->
