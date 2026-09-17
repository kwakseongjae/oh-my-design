---
id: maum-ai
name: maum.ai (ex-MindsLab)
display_name_kr: 마음AI (구 마인즈랩)
country: KR
category: ai
homepage: "https://maum.ai/"
primary_color: "#4262ff"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=maum.ai&sz=128"
verified: "2026-07-02"
added: "2026-07-02"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-07-02"
  note: "primary = live hero CTA blue (#4262ff, 시작하기) with a darker #3652d8 border; secondary action system is a charcoal #343434 full-pill (Contact/Chatbot). Text is near-black #111111 on white; #ff4d4d is the single warm accent. Flat, near-shadowless system."
  colors:
    primary: "#4262ff"
    primary-border: "#3652d8"
    dark: "#343434"
    ink: "#111111"
    ink-pure: "#000000"
    body: "#5b636d"
    muted: "#595959"
    nav-muted: "#8e8e8e"
    accent-red: "#ff4d4d"
    link-blue: "#2563eb"
    canvas: "#ffffff"
    surface: "#f2f3f8"
    surface-alt: "#f2f5f9"
    hairline: "#dee4eb"
    on-primary: "#ffffff"
  typography:
    family: { display: "Jamsil", body: "Pretendard", techno: "Orbitron" }
    display-techno: { size: 115, weight: 700, lineHeight: 1.01, use: "Oversized MAIED techno wordmark, Orbitron" }
    section:        { size: 36, weight: 700, lineHeight: 1.25, use: "Section heads (MAUM.AI Foundation Model), Jamsil" }
    heading-sm:     { size: 18, weight: 700, lineHeight: 1.25, use: "Sub-heads / policy titles, Pretendard" }
    button-lg:      { size: 20, weight: 600, lineHeight: 1.40, use: "Large charcoal round CTA label, Pretendard" }
    button:         { size: 16, weight: 700, lineHeight: 1.25, use: "Primary CTA label (시작하기), Pretendard" }
    nav:            { size: 16, weight: 700, lineHeight: 1.19, use: "Top nav item, Pretendard" }
    body:           { size: 16, weight: 500, lineHeight: 1.25, use: "Standard reading / UI text, Pretendard" }
  spacing: { xs: 4, sm: 8, md: 16, base: 20, lg: 32, xl: 40, xxl: 64 }
  rounded: { sm: 6, md: 8, lg: 20, full: 9999 }
  shadow:
    none: "none"
  components:
    button-primary: { type: button, bg: "#4262ff", fg: "#ffffff", radius: "8px", height: "50px", padding: "0px 32px", border: "1px solid #3652d8", font: "16px / 700 Pretendard", use: "Primary hero CTA (시작하기)" }
    button-dark-round: { type: button, bg: "#343434", fg: "#ffffff", radius: "9999px", height: "65px", padding: "20px 32px", font: "20px / 600 Pretendard", use: "Contact Us / Chatbot Inquiry round CTA" }
    input-text: { type: input, bg: "#f2f3f8", fg: "#111111", border: "1px solid #dee4eb", radius: "6px", height: "64px", font: "16px Pretendard", use: "Contact form text field" }
    card-outline: { type: card, radius: "20px", border: "1px solid #ffffff", padding: "40px 0px", use: "Product showcase card with white hairline outline over media" }
    card-surface: { type: card, bg: "#f2f3f8", fg: "#111111", radius: "20px", use: "Tinted content / section card" }
    nav-link: { type: tab, fg: "#8e8e8e", font: "16px / 700 Pretendard", active: "ink #111111 text on active", use: "Top navigation item" }
    badge-accent: { type: badge, fg: "#ff4d4d", radius: "9999px", font: "16px / 700 Pretendard", use: "Warm-red emphasis label / highlight tag" }
  components_harvested: true
---

# Design System Inspiration of maum.ai

## 1. Visual Theme & Atmosphere

maum.ai (마음AI, formerly MindsLab / 마인즈랩) presents itself as a "Physical AI" platform, and its homepage carries the calm, engineered confidence of a deep-tech company that ships real hardware and models rather than a consumer app chasing delight. The canvas is pure white (`#ffffff`) with cool-grey tinted surfaces (`#f2f3f8`, `#f2f5f9`) that segment the page into airy, breathable bands. Text sits in a near-black `#111111` — never a flat pure black for running copy — which reads as precise and trustworthy, occasionally dropping to true `#000000` only for maximum-contrast display moments. The one saturated brand anchor is an electric indigo-blue (`#4262ff`), reserved almost exclusively for the primary "시작하기" call-to-action, so the eye is trained to read that single color as "the action."

The typographic personality is a three-font system, each with a distinct job. **Pretendard** is the workhorse — the de-facto Korean product font — carrying body, navigation, and button labels at a quiet 16px. **Jamsil** (잠실체) steps up for section headings such as "MAUM.AI Foundation Model" at 36px / weight 700, lending a heavier, more editorial Korean voice to feature titles. And **Orbitron**, a geometric techno face, appears at an oversized 115px for the "MAIED" wordmark — a deliberate sci-fi flourish that signals the company's frontier-model ambitions. The result is a hierarchy where the functional font stays calm and the display fonts do the persuading.

What distinguishes maum.ai from softer SaaS peers is its restraint with depth and its two-track button geometry. The system is essentially shadowless: live inspection returned `box-shadow: none` across nav, hero, and product cards, with separation coming from flat tinted surfaces and thin `#dee4eb` hairlines instead of elevation. Buttons split into two families — the sharp-cornered indigo primary (`#4262ff`, 8px radius, with a darker `#3652d8` outline) for the main funnel, and a charcoal (`#343434`) full-pill (9999px radius) for softer "Contact Us" and "Chatbot Inquiry" secondary actions. A single warm red (`#ff4d4d`) provides emphasis accents, and a secondary link blue (`#2563eb`) handles inline links. Product showcase cards use a 20px radius with a translucent white (`#ffffff`) hairline outline floating over media. The overall impression is flat, modern, and industrial — an AI infrastructure brand that looks built, not decorated.

**Key Characteristics:**
- Three-font system: Pretendard (body/UI), Jamsil (section display), Orbitron (techno wordmark)
- Single saturated indigo (`#4262ff`) reserved for the primary "시작하기" CTA
- Two-track buttons: sharp 8px indigo primary vs charcoal (`#343434`) full-pill secondary
- Near-black `#111111` text instead of pure black for running copy
- Flat depth: `box-shadow: none`; separation via tinted `#f2f3f8` surfaces and `#dee4eb` hairlines
- Warm red (`#ff4d4d`) as the single accent; blue (`#2563eb`) for inline links
- 20px-radius product cards with translucent white (`#ffffff`) hairline outlines over media
- Cool-grey neutral ladder (`#5b636d` → `#595959` → `#8e8e8e`) for text hierarchy

## 2. Color Palette & Roles

### Primary
- **maum Indigo** (`#4262ff`): Primary brand color and CTA background. The saturated indigo-blue on the "시작하기" button — the system's single "action" color.
- **Indigo Border** (`#3652d8`): A darker indigo used as the 1px border/outline on the primary button, giving the fill a subtle engineered edge.
- **Charcoal** (`#343434`): The secondary-action color. Backs the full-pill "Contact Us" and "Chatbot Inquiry" round buttons.

### Neutral & Surface
- **Pure White** (`#ffffff`): Page background, card surfaces, text on indigo/charcoal, and the translucent card outline.
- **Surface Grey** (`#f2f3f8`): Cool-grey tinted surface for input fields and segmented content sections.
- **Surface Alt** (`#f2f5f9`): A slightly cooler secondary grey for alternating bands.
- **Hairline** (`#dee4eb`): Thin borders and field outlines — the primary separation device in this shadow-free system.

### Text Hierarchy
- **Ink** (`#111111`): Primary text, headings, nav labels, strong copy — a near-black used instead of pure black.
- **Pure Black** (`#000000`): Reserved for maximum-contrast display moments only.
- **Body Slate** (`#5b636d`): Secondary body copy and descriptions.
- **Muted Grey** (`#595959`): Tertiary text, captions, metadata.
- **Nav Muted** (`#8e8e8e`): Inactive top-navigation labels.

### Accent
- **Accent Red** (`#ff4d4d`): The single warm accent — emphasis labels, highlight numbers, and attention cues.
- **Link Blue** (`#2563eb`): Inline text links and secondary interactive text.
- **On Primary** (`#ffffff`): Text/icon color on indigo and charcoal buttons.

## 3. Typography Rules

### Font Family
- **Body / UI**: `Pretendard` — the document default; body, nav, and button labels at 16px.
- **Display**: `Jamsil` (잠실체) — heavier Korean face for section headings (e.g. "MAUM.AI Foundation Model").
- **Techno**: `Orbitron` — geometric sci-fi face used for the oversized "MAIED" wordmark only.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Techno | Orbitron | 115px (7.20rem) | 700 | 1.01 | normal | "MAIED" oversized wordmark |
| Section Heading | Jamsil | 36px (2.25rem) | 700 | 1.25 (45px) | normal | Feature section titles |
| Sub-heading | Pretendard | 18px (1.13rem) | 700 | 1.25 | normal | Sub-heads, policy titles |
| Button Large | Pretendard | 20px (1.25rem) | 600 | 1.40 | normal | Charcoal round CTA labels |
| Button | Pretendard | 16px (1.00rem) | 700 | 1.25 | normal | Primary CTA label (시작하기) |
| Nav | Pretendard | 16px (1.00rem) | 700 | 1.19 | normal | Top navigation items |
| Body | Pretendard | 16px (1.00rem) | 500 | 1.25 (20px) | normal | Standard reading / UI text |

### Principles
- **Functional font stays calm, display fonts persuade**: Pretendard carries the reading load at a quiet weight 500; Jamsil and Orbitron are reserved for headlines and the techno wordmark.
- **Three fonts, three jobs**: Pretendard = product/UI, Jamsil = editorial section voice, Orbitron = frontier-tech display. They never swap roles.
- **Hangul-first sizing**: Body sits at a comfortable 16px, generous for hangul legibility in an information-dense B2B deep-tech context.
- **Weight, not size, carries UI hierarchy**: nav and buttons share 16px but split by weight (700 vs 500) and color, keeping the chrome compact.

## 4. Component Stylings

### Buttons

**Primary CTA (시작하기)**
- Background: `#4262ff`
- Text: `#ffffff`
- Border: 1px solid `#3652d8`
- Radius: 8px
- Padding: 0px 32px
- Height: 50px
- Font: 16px Pretendard weight 700
- Use: Primary hero call-to-action — the system's single primary action

**Charcoal Round (Contact / Chatbot)**
- Background: `#343434`
- Text: `#ffffff`
- Radius: 9999px
- Padding: 20px 32px
- Height: 65px
- Font: 20px Pretendard weight 600
- Use: Secondary actions — "Contact Us", "Chatbot Inquiry"

### Inputs

**Contact Field**
- Background: `#f2f3f8`
- Text: `#111111`
- Border: 1px solid `#dee4eb`
- Radius: 6px
- Height: 64px
- Font: 16px Pretendard
- Use: Contact form text fields and message textarea

### Cards & Containers

**Product Showcase Card**
- Border: 1px solid `#ffffff`
- Radius: 20px
- Padding: 40px 0px
- Use: Product carousel card with a translucent white hairline outline floating over media

**Tinted Surface Card**
- Background: `#f2f3f8`
- Text: `#111111`
- Radius: 20px
- Use: Tinted content / section card on the cool-grey surface

### Badges

**Accent Highlight**
- Text: `#ff4d4d`
- Radius: 9999px
- Font: 16px Pretendard weight 700
- Use: Warm-red emphasis label / highlight tag

### Navigation
- Background: `#ffffff`
- Text: `#8e8e8e`
- Font: 16px Pretendard weight 700
- Active: ink `#111111` text on the active item
- Use: Top horizontal nav ("Physical AI", "Defense", "MAIED", "Company")

---

**Verified:** 2026-07-02 (omd:add-reference CREATE — Tier 1 live inspect)
**Tier 1 sources:** https://maum.ai/ ; https://maum-ai.github.io/ ; https://github.com/maum-ai
**Tier 2 sources:** getdesign.md/maum-ai — no real entry (generic SPA shell; returns 200 + identical shell for any slug) ; styles.refero.design/?q=maum — no maum.ai match (only unrelated fuzzy "ma*" results)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: ~4px, with a dominant 8/16/20/32 rhythm
- Scale: 4px, 8px, 16px, 20px, 32px, 40px, 64px
- Notable: CTA horizontal padding lands at 32px; product cards use 40px vertical padding, giving the deep-tech content generous breathing room

### Grid & Container
- Centered hero with a large Orbitron/Jamsil display anchor and a single indigo CTA
- Product/solution cards arranged as a horizontal carousel of 20px-radius outlined tiles
- Feature sections alternate white (`#ffffff`) and tinted grey (`#f2f3f8` / `#f2f5f9`) full-width bands
- Contact form uses stacked `#f2f3f8` fields at 6px radius

### Whitespace Philosophy
- **Engineered breathing room**: despite dense B2B AI content, sections are airy with generous vertical rhythm.
- **Flat segmentation**: bands separate by background tint and `#dee4eb` hairlines, not by shadow or heavy borders.
- **Two-track button rhythm**: the sharp indigo primary and the charcoal pill recur as a consistent action vocabulary across surfaces.

### Border Radius Scale
- Small (6px): input fields, small containers
- Medium (8px): the primary CTA button
- Large (20px): product and content cards — the workhorse card radius
- Full (9999px): charcoal round buttons, accent pills

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline text, most surfaces |
| Tint (Level 1) | `#f2f3f8` / `#f2f5f9` background shift | Section / card separation without elevation |
| Hairline (Level 2) | `1px solid #dee4eb` (fields) or `1px solid #ffffff` (cards over media) | Field and card outlines |

**Shadow Philosophy**: maum.ai is a near-shadowless system. Live inspection returned `box-shadow: none` across the nav, hero, headings, buttons, and product cards. Depth and grouping are communicated entirely through flat tinted surfaces (`#f2f3f8`, `#f2f5f9`) and thin hairlines (`#dee4eb`, plus translucent white outlines on media cards). This is a deliberate modern-flat, industrial choice — it keeps the deep-tech UI feeling engineered and fast rather than decorated. When emphasis is needed, the system reaches for color (indigo `#4262ff`, accent red `#ff4d4d`, or the charcoal `#343434` pill), never elevation.

## 7. Do's and Don'ts

### Do
- Reserve indigo (`#4262ff`) for the primary CTA — keep it the single "action" color
- Use the charcoal (`#343434`) full-pill for secondary "Contact"/"Chatbot" actions
- Use near-black `#111111` for text instead of pure black for running copy
- Separate sections with flat tinted surfaces (`#f2f3f8` / `#f2f5f9`) and `#dee4eb` hairlines, not shadows
- Use Pretendard weight 500 for body/UI, weight 700 for buttons and nav
- Reserve Jamsil for section headings and Orbitron for the techno wordmark only
- Use the warm red (`#ff4d4d`) sparingly as the single emphasis accent
- Keep product cards at 20px radius with a hairline outline over media

### Don't
- Spread indigo across many elements — it dilutes the single-action signal
- Use drop shadows for elevation — maum.ai is a flat, shadow-free system
- Use pure black (`#000000`) for body copy — reserve it for max-contrast display
- Give the primary CTA a pill radius — the indigo button is sharp 8px; only the charcoal action is a pill
- Introduce a second saturated hue alongside the indigo and the red accent
- Set body copy in Jamsil or Orbitron — Pretendard owns reading text
- Overuse the red accent (`#ff4d4d`) — it is emphasis-only, never a surface or CTA fill

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, display sizes compress, product carousel scrolls |
| Tablet | 640-1024px | Moderate padding, 2-up feature cards |
| Desktop | 1024-1440px | Full layout, centered hero, multi-column feature bands |

### Touch Targets
- Primary CTA at 50px height with 32px horizontal padding — comfortably tappable
- Charcoal round buttons at 65px height, full pill for an unmistakable target
- Contact fields at 64px height for easy touch entry
- Nav items spaced within the top header

### Collapsing Strategy
- Hero: Orbitron/Jamsil display scales down on mobile, weight maintained
- Product cards: horizontal carousel becomes swipe/scroll on narrow viewports
- Feature bands: multi-column → stacked single column
- Tinted/white alternating sections maintain full-width treatment

### Image Behavior
- Product and robotics imagery carries no shadow at any size, consistent with the flat system
- Cards maintain 20px radius and the translucent white outline across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: maum Indigo (`#4262ff`), border `#3652d8`
- Secondary action: Charcoal (`#343434`)
- Background: Pure White (`#ffffff`)
- Tinted surface: Surface Grey (`#f2f3f8`) / Surface Alt (`#f2f5f9`)
- Heading / body text: Ink (`#111111`)
- Secondary text: Body Slate (`#5b636d`)
- Muted text: Muted Grey (`#595959`), Nav Muted (`#8e8e8e`)
- Accent: Accent Red (`#ff4d4d`); links Link Blue (`#2563eb`)
- Hairline: `#dee4eb`

### Example Component Prompts
- "Create a hero on white background. Oversized Orbitron wordmark, a Jamsil section title at 36px weight 700, and one indigo CTA: `#4262ff` background, white text, 1px solid `#3652d8` border, 8px radius, 0px 32px padding, 50px tall, 16px Pretendard weight 700 — '시작하기'."
- "Design a product card: transparent background over media, 1px solid `#ffffff` outline, 20px radius, 40px vertical padding, no shadow. Title in Jamsil weight 700, `#111111`. Body 16px Pretendard weight 500, `#5b636d`."
- "Build a contact form field: `#f2f3f8` background, 1px solid `#dee4eb` border, 6px radius, 64px tall, `#111111` text, 16px Pretendard, no shadow."
- "Create a secondary CTA: charcoal `#343434` background, white text, full 9999px pill, 20px 32px padding, 65px tall, 20px Pretendard weight 600 — 'Contact Us'."
- "Top nav: white header, 16px Pretendard weight 700 links in `#8e8e8e`, ink `#111111` on the active item."

### Iteration Guide
1. Indigo (`#4262ff`) is the single action color — don't spread it
2. Charcoal (`#343434`) full-pill for secondary actions; sharp 8px indigo for the primary
3. No shadows — separate with `#f2f3f8` / `#f2f5f9` tint and `#dee4eb` hairlines
4. Pretendard 500 body, 700 buttons/nav; Jamsil headings; Orbitron techno wordmark only
5. Text is `#111111` ink, never pure black for running copy
6. Product cards at 20px radius with a translucent white outline over media
7. Warm red (`#ff4d4d`) is emphasis-only; link blue (`#2563eb`) for inline links

---

## 10. Voice & Tone

maum.ai's voice is **precise, confident, and frontier-facing** — a deep-tech company that talks about building real AI systems (foundation models, robots, defense) without hype or consumer cuteness. The positioning line "Physical AI 플랫폼" sets the register: technical, ambitious, matter-of-fact. Product names are terse and engineered ("MAIED", "AIden", "JINDO BOT"), and CTAs are direct verbs ("시작하기", "Contact Us", "Chatbot Inquiry"). The bilingual KR/ENG surface treats the reader as a technical or enterprise buyer, not a casual visitor.

| Context | Tone |
|---|---|
| Hero / positioning | Ambitious, technical. "Physical AI 플랫폼." Confident, not hype. |
| Product names | Terse, engineered. "MAIED", "AIden", "JINDO BOT". |
| CTAs | Direct imperatives. "시작하기", "Contact Us", "Chatbot Inquiry". |
| Feature descriptions | Capability-first, concrete. States what the model/robot does. |
| Company / IR | Formal, credibility-forward — a KOSDAQ-listed AI company register. |

**Voice samples (verbatim from live surfaces):**
- "마음AI - Physical AI 플랫폼" — homepage H1 / title (positioning). *(verified live 2026-07-02)*
- "MAUM.AI Foundation Model" — section heading (frontier-model framing). *(verified live 2026-07-02)*
- "maum.ai BRAIN Team" — official research blog H1 (engineering identity). *(verified live 2026-07-02)*

**Forbidden register**: consumer-app cuteness, exclamation-heavy hype, vague "revolutionary/game-changing" superlatives, and undefined jargon left unexplained to an enterprise reader.

## 11. Brand Narrative

maum.ai (마음AI) is a Korean artificial-intelligence company formerly known as **MindsLab (마인즈랩)**, founded in **2014** by **유태준 (Taejun Yoo)**. The company began as a conversational-AI and "AI Human" specialist — speech-to-text, text-to-speech, and virtual-human technology — and later listed on Korea's **KOSDAQ** market. The rebrand from MindsLab to maum.ai reframed the company around a broader, more ambitious thesis: not just software AI, but **"Physical AI"** — foundation models embodied in robots, industrial machines (e.g. agricultural spraying robots), and defense systems, as surfaced across the current homepage's product lineup (JINDO BOT, AIden, MAIED, Defense).

The product surface makes the positioning explicit: a "MAUM.AI Foundation Model" at the core, applied outward into physical and enterprise domains. The company maintains an official engineering identity through its **BRAIN Team** research blog and a public **GitHub organization**, signaling a build-in-the-open, research-forward posture typical of a frontier AI lab.

What maum.ai's design refuses, visible in its restraint: the soft, playful chrome of consumer apps and the heavy shadow-stacked cards of legacy enterprise software. What it embraces: a flat, engineered, near-shadowless interface; a single decisive indigo action color; a three-font system where a techno display face (Orbitron) telegraphs frontier ambition while Pretendard keeps the reading calm; and a bilingual, credibility-forward tone appropriate to a listed deep-tech company selling to enterprise and government buyers.

## 12. Principles

1. **Engineered, not decorated.** The system is flat and shadow-free by design. *UI implication:* separate with tint and hairlines; avoid elevation and ornament — the product should look built.
2. **One decisive action.** Indigo (`#4262ff`) means "do this." *UI implication:* reserve the saturated indigo for the single primary CTA so the next step is never ambiguous; use charcoal pills for softer secondary actions.
3. **Frontier signalled through type, not noise.** *UI implication:* let Orbitron/Jamsil display faces carry the ambition; keep body copy in calm Pretendard rather than shouting with color or motion.
4. **Bilingual clarity for enterprise buyers.** *UI implication:* KR/ENG parity, terse product names, and capability-first descriptions that respect a technical reader.
5. **Restraint as credibility.** A listed deep-tech company earns trust by looking precise. *UI implication:* limited palette (indigo + charcoal + one red accent), consistent 20px card radius, and disciplined typographic hierarchy.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable maum.ai audiences (enterprise AI buyers, robotics/defense procurement, ML engineers evaluating the foundation model), not individual people.*

**정민석, 41, 서울.** Head of AI transformation at a manufacturer evaluating physical-AI robots for the factory floor. Wants concrete capability claims and integration paths, not slogans. Trusts the brand more because it is KOSDAQ-listed and publishes research.

**Grace Lim, 33, 판교.** ML engineer assessing the MAUM.AI Foundation Model for an internal product. Reads the BRAIN Team blog and the GitHub org before booking a call. Values the terse, engineering-first tone over marketing polish.

**한도윤, 47, 대전.** Public-sector procurement lead reviewing AI/defense solutions. Needs a formal, credibility-forward surface and clear contact paths. Reassured by the calm, industrial, non-hype presentation.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no results / no data)** | White canvas. Single Ink (`#111111`) line explaining the empty condition, with one indigo CTA to proceed. No illustration clutter. |
| **Empty (saved / list none yet)** | Muted Grey (`#595959`) single line stating nothing yet, plus a path back to the action. Calm, honest. |
| **Loading (content fetch)** | Skeleton blocks on `#f2f3f8` tinted surface at final card dimensions, 20px radius. Flat pulse — no shadow shimmer, consistent with the shadowless system. |
| **Loading (form submit)** | Inline progress within the charcoal button; label stays visible, action disabled until response. |
| **Error (request failed)** | Inline message in Ink (`#111111`) with a plain explanation and a retry. Accent red (`#ff4d4d`) marks the error cue; never a generic "오류" alone. |
| **Error (form validation)** | Field-level message below the `#f2f3f8` input; accent-red cue; describes what is valid, not just "필수". |
| **Success (form submitted)** | Brief inline confirmation in a calm tone; next-step detail linked immediately below. No celebratory emoji. |
| **Skeleton** | `#f2f3f8` blocks at final dimensions, 20px radius, flat pulse. |
| **Disabled** | Muted Grey (`#8e8e8e`) text on reduced-opacity surface; indigo actions fade rather than turn grey to preserve brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, button press, focus |
| `motion-standard` | 240ms | Card/section reveal, carousel step, dropdown |
| `motion-slow` | 360ms | Page-level transitions, hero reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, sheets, carousel |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is functional and restrained — consistent with the flat, engineered aesthetic. The product carousel steps horizontally at `motion-standard / ease-enter`; buttons respond to press with a subtle opacity/scale shift. No bounce or spring — a deep-tech AI platform signals steadiness, not playfulness. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and the carousel becomes a static scroll; the product remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-07-02) via playwright getComputedStyle on https://maum.ai/:
- Primary CTA "시작하기" — bg rgb(66,98,255) #4262ff / border 1px solid rgb(54,82,216) #3652d8 / radius 8px / padding 0px 32px / height 50px / Pretendard 16px weight 700 / white text
- Charcoal round buttons "Chatbot Inquiry"/"Contact Us" — bg rgb(52,52,52) #343434 / radius 9999px / padding 20px 32px / 20px weight 600 / white text
- Contact inputs/textarea — bg rgb(242,243,248) #f2f3f8 / border rgb(222,228,235) #dee4eb / radius 6px / height 64px / text rgb(17,17,17) #111111 / 16px
- Product cards — radius 20px / border 1px solid #ffffff / padding 40px 0px / box-shadow none
- Nav links — color rgb(142,142,142) #8e8e8e / Pretendard 16px weight 700; header buttons ink rgb(17,17,17) #111111
- Section heading "MAUM.AI Foundation Model" — Jamsil 36px weight 700 lh 45px; "MAIED" — Orbitron 115px weight 700 white
- Body — Pretendard, color rgb(17,17,17) #111111, 16px, lh 20px
- fg frequency: #111111 ×393, #595959 ×63, #000000 ×47, #5b636d ×46, #ff4d4d ×41, #8e8e8e, #2563eb ×6
- box-shadow: none across nav/hero/headings/buttons/cards (shadowless system confirmed)
- document.title: "마음AI"

Second surface — https://maum-ai.github.io/ (official maum.ai BRAIN Team research blog, Docusaurus):
- H1 "maum.ai BRAIN Team"; confirms official engineering identity and brand-owned status.

Token-level claims (§1-9) are sourced from this live inspection.

Voice samples (§10) are verbatim from live surfaces (homepage H1/title, section heading, blog H1).

Brand narrative (§11): maum.ai (마음AI), formerly MindsLab (마인즈랩), founded 2014 by 유태준 (Taejun Yoo);
KOSDAQ-listed Korean AI company that rebranded around a "Physical AI" thesis (foundation model + robots +
defense), as surfaced by the current homepage product lineup (JINDO BOT, AIden, MAIED, Defense) and the
official BRAIN Team blog + GitHub org. Founding year, founder, and the MindsLab→maum.ai rebrand are
widely documented public facts; specifics beyond the observed surfaces are general public knowledge, not a
directly quoted maum.ai statement in this turn.

Personas (§13) are fictional archetypes informed by publicly observable maum.ai audiences (enterprise AI
buyers, robotics/defense procurement, ML engineers). Names are illustrative; they do not refer to real people.

Interpretive claims (e.g., "engineered, not decorated", "frontier signalled through type") are editorial
readings connecting maum.ai's observed design to its positioning, not directly sourced maum.ai statements.
-->
