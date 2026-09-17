---
id: headspace
name: Headspace
country: US
category: healthcare
homepage: "https://www.headspace.com"
primary_color: "#0061ef"
logo:
  type: simpleicons
  slug: headspace
verified: "2026-06-17"
added: "2026-06-17"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-17"
  note: "primary = live hero/CTA Headspace Blue (#0061ef); the signature warm orange family (#ff7300/#ffa500) + gold (#ffce00) carry the emotion-driven smiley illustration system from the 2024 Italic Studio rebrand. Canvas is a warm cream (#f9f4f2), not white. Type is the custom 'Headspace Apercu' (Colophon), weight 700 for all display."
  colors:
    primary: "#0061ef"
    ink: "#2d2c2b"
    ink-pure: "#000000"
    body: "#4b4c4d"
    slate: "#44423f"
    canvas: "#f9f4f2"
    surface: "#ffffff"
    orange: "#ff7300"
    amber: "#ffa500"
    gold: "#ffce00"
    pink: "#ffa1cc"
    purple: "#3b197f"
    teal-navy: "#27455c"
    border-tan: "#e2ded9"
    border-input: "#d2d5de"
    on-primary: "#ffffff"
  typography:
    family: { sans: "Headspace Apercu" }
    display-hero:  { size: 64, weight: 700, lineHeight: 1.00, tracking: -1.92, use: "Hero / section headlines, Headspace Apercu Bold" }
    display-lg:    { size: 52, weight: 700, lineHeight: 1.10, tracking: -1.56, use: "Large feature headlines" }
    display-md:    { size: 48, weight: 700, lineHeight: 1.00, tracking: -1.44, use: "Secondary section heads" }
    feature:       { size: 40, weight: 700, lineHeight: 1.15, tracking: -1.20, use: "Feature-card / band titles" }
    subsection:    { size: 32, weight: 700, lineHeight: 1.20, tracking: -0.96, use: "Sub-section heads" }
    card-title:    { size: 24, weight: 700, lineHeight: 1.33, tracking: -0.60, use: "Footer / card headings" }
    body-lg:       { size: 18, weight: 500, lineHeight: 1.44, use: "Intro / lead paragraphs" }
    body:          { size: 16, weight: 400, lineHeight: 1.15, use: "Standard reading text" }
    button:        { size: 16, weight: 700, lineHeight: 1.00, use: "Primary button label" }
    button-sm:     { size: 14, weight: 700, lineHeight: 1.00, use: "Compact nav CTA label" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 40, xxl: 64 }
  rounded: { sm: 8, md: 12, lg: 24, pill: 32, full: 9999 }
  shadow:
    none: "none"
  components:
    button-primary: { type: button, bg: "#0061ef", fg: "#ffffff", radius: "32px", padding: "14px 24px", height: "48px", font: "14px / 700 Headspace Apercu", use: "Header / hero primary CTA — Headspace Blue pill" }
    button-dark: { type: button, bg: "#2d2c2b", fg: "#ffffff", radius: "32px", padding: "14px 20px", height: "48px", font: "16px / 700 Headspace Apercu", use: "Charcoal solid CTA — 'Try for $0', 'Check your coverage'" }
    button-soft: { type: button, bg: "#f9f4f2", fg: "#44423f", radius: "32px", padding: "12px 24px", height: "48px", font: "18px / 700 Headspace Apercu", use: "Cream pill secondary action — 'Get started', 'Learn more'" }
    pill-tab: { type: tab, bg: "#2d2c2b", fg: "#ffffff", radius: "24px", padding: "0 24px", height: "48px", font: "18px / 700 Headspace Apercu", active: "charcoal #2d2c2b fill, white label", use: "Segmented pill selector — inactive is cream #f9f4f2 with #2d2c2b label" }
    category-chip: { type: badge, bg: "#ff7300", fg: "#ffffff", radius: "8px", padding: "8px 12px", font: "14px / 500 Headspace Apercu", use: "Content-mode chips (Sleep/Meditate/Move) in the smiley orange family" }
    feature-card: { type: card, bg: "#f9f4f2", radius: "24px", use: "Warm-cream feature card, shadowless" }
    color-card: { type: card, bg: "#0061ef", fg: "#ffffff", radius: "24px 24px 0 0", use: "Saturated color-block feature card (blue / gold #ffce00 variants)" }
    plan-card: { type: card, bg: "#ffce00", fg: "#000000", radius: "12px", padding: "24px", border: "1px solid #ffce00", use: "Selected subscription plan card — gold fill; unselected is #ffffff with 1px #44423f border" }
    email-input: { type: input, bg: "#ffffff", fg: "#000000", border: "1px solid #d2d5de", radius: "8px", padding: "24px 16px 8px", height: "58px", font: "16px Headspace Apercu", use: "Email capture / float-label field" }
    play-button: { type: button, bg: "#2d2c2b", fg: "#ffffff", radius: "50%", padding: "10px", height: "48px", use: "Circular audio play/pause — also appears in orange #ff7300" }
  components_harvested: true
---

# Design System Inspiration of Headspace

## 1. Visual Theme & Atmosphere

Headspace is the warmest mental-health product on the internet, and its 2024 Italic Studio rebrand made that warmth structural rather than decorative. The page does not open on the clinical white of healthcare software — it opens on a soft, warm cream (`#f9f4f2`), the single most frequent background on the site, which gives every surface a calm, paper-like glow. Text sits in a near-black warm charcoal (`#2d2c2b`) for headlines and a softer grey (`#4b4c4d`) for body — never pure black for reading copy — so the page feels approachable instead of stark. The one saturated action color is Headspace Blue (`#0061ef`), reserved for the primary "Try for free" CTA, so the eye learns that blue means "do this."

What makes Headspace unmistakable is the orange. The brand has carried an orange smiley since its conception — originally inspired by the saffron robes of the Buddhist meditation tradition — and the rebrand expanded that single mascot into a full emotion-driven illustration and animation system that flexes "from stress, sadness, contentment, and every mood in between." On product surfaces this shows up as a family of warm hues: a hot smiley orange (`#ff7300`), a softer amber (`#ffa500`), and a bright gold (`#ffce00`) used on content-mode chips and color-block cards. Supporting emotional accents — a candy pink (`#ffa1cc`), a deep meditative purple (`#3b197f`), and a grounding teal-navy (`#27455c`) — round out a palette deliberately built to "destigmatise seeking care," contrasting healthcare's typical "dreary sea of blues and greys."

The typographic identity is the custom **Headspace Apercu**, a "Headspace-ified" cut of Colophon Foundry's Aperçu commissioned for the rebrand — its letterforms carry curves that echo the smile and are engineered to "flex from playful to clinical." Every headline runs at **weight 700** with tight negative tracking (-1.92px at 64px, -1.44px at 48px), giving the page a confident, rounded-bold voice. Geometry is friendly and pill-forward: 32px-radius pill buttons, 24px-radius feature cards, and circular play controls. There are essentially no drop shadows — depth comes from warm tints and color blocks, never elevation.

**Key Characteristics:**
- Warm cream canvas (`#f9f4f2`) instead of clinical white — the calm, paper-like base
- Headspace Blue (`#0061ef`) reserved for the single primary "do this" action
- Signature warm-orange family (`#ff7300` / `#ffa500` / gold `#ffce00`) carrying the smiley emotion system
- Custom **Headspace Apercu** (Colophon) at weight 700 for every headline — rounded, friendly, bold
- Near-black warm charcoal (`#2d2c2b`) for headings, soft grey (`#4b4c4d`) for body — never pure black
- Tight negative tracking on headlines (-1.92px at 64px, scaling with size)
- Pill-forward geometry — 32px pill buttons, 24px cards, circular play controls
- Shadowless depth — warm tints and saturated color blocks instead of elevation

## 2. Color Palette & Roles

### Primary
- **Headspace Blue** (`#0061ef`): The single saturated action color. Hero and header "Try for free" CTA backgrounds, "Start your free trial", and saturated color-block feature cards. The system's "do this" signal.
- **Charcoal Ink** (`#2d2c2b`): Primary heading color and the solid dark-button fill ("Try for $0", "Check your coverage"). A warm near-black that carries approachability instead of clinical contrast.

### Neutral & Surface
- **Warm Cream** (`#f9f4f2`): The dominant page background and the soft-pill secondary button fill. The calm, paper-like base of the whole system.
- **White** (`#ffffff`): Card surfaces, input backgrounds, and text on saturated colors.
- **Body Grey** (`#4b4c4d`): The default body / reading text color set on `<body>`.
- **Slate** (`#44423f`): Secondary nav and link text; soft-button labels.
- **Pure Black** (`#000000`): Maximum-contrast text on gold/yellow surfaces (plan cards, some hero H3s).

### Brand Emotion Accents
- **Smiley Orange** (`#ff7300`): The hot signature orange — content-mode chips ("Sleep"), circular play buttons. The robe-orange that anchors the brand.
- **Amber** (`#ffa500`): Softer orange for "Meditate" / "Move" / "Focus" content chips.
- **Gold** (`#ffce00`): Bright yellow for the selected subscription plan card and color-block feature cards.
- **Candy Pink** (`#ffa1cc`): Emotional accent for illustration blocks and decorative bands.
- **Meditation Purple** (`#3b197f`): Deep purple accent for sleep/calm-themed surfaces.
- **Teal-Navy** (`#27455c`): Grounding deep teal-navy for darker illustration backgrounds.

### Borders
- **Tan Hairline** (`#e2ded9`): The warm card / chip outline (`2px solid`) used on the hero theme selectors.
- **Input Border** (`#d2d5de`): Cool grey `1px` border on email / form inputs.

## 3. Typography Rules

### Font Family
- **Primary**: `Headspace Apercu` (custom Colophon cut), with `sans-serif` fallback — used for every element on the site: headlines, nav, body, and buttons. There is no separate body font.

### Hierarchy

| Role | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|--------|-------------|----------------|-------|
| Display Hero | 64px (4.00rem) | 700 | 1.00 (64px) | -1.92px | Hero / big section headlines |
| Display Large | 52px (3.25rem) | 700 | 1.10 (57.2px) | -1.56px | Large feature headlines |
| Display Medium | 48px (3.00rem) | 700 | 1.00 (48px) | -1.44px | Secondary section heads |
| Feature | 40px (2.50rem) | 700 | 1.15 (46px) | -1.2px | Feature-card / band titles |
| Sub-section | 32px (2.00rem) | 700 | 1.20 (38.4px) | -0.96px | Smaller section heads |
| Card Title | 24px (1.50rem) | 700 | 1.33 (32px) | -0.6px | Footer / card headings |
| Body Large | 18px (1.13rem) | 500 | 1.44 (26px) | normal | Intro / lead paragraphs |
| Body | 16px (1.00rem) | 400 | 1.15 (18.4px) | normal | Standard reading text |
| Button | 16px (1.00rem) | 700 | 1.00 | normal | Primary button labels |
| Button Small | 14px (0.88rem) | 700 | 1.00 | normal | Compact header CTA |

### Principles
- **Bold everywhere it matters**: Every headline is weight 700. Headspace does not whisper — its rounded-bold display voice is the brand's confidence.
- **Tracking tightens with size**: -1.92px at 64px, -1.44px at 48px, -1.2px at 40px, -0.96px at 32px. Headlines compress into dense, friendly blocks; body text stays at normal tracking.
- **One typeface, every job**: Headspace Apercu runs from 64px hero to 14px nav CTA. The curves that echo the smile are the brand's typographic DNA at every size.
- **Buttons are bold**: Even at 14-16px, CTA labels are weight 700 — the action always reads as confident.

## 4. Component Stylings

### Buttons

**Primary (Headspace Blue)**
- Background: `#0061ef`
- Text: `#ffffff`
- Radius: 32px
- Padding: 14px 24px
- Height: 48px
- Font: 14px Headspace Apercu weight 700
- Use: Header / hero primary CTA ("Try for free", "Start your free trial")

**Charcoal Solid**
- Background: `#2d2c2b`
- Text: `#ffffff`
- Radius: 32px
- Padding: 14px 20px
- Height: 48px
- Font: 16px Headspace Apercu weight 700
- Use: High-emphasis dark CTA ("Try for $0", "Check your coverage")

**Soft Cream Pill**
- Background: `#f9f4f2`
- Text: `#44423f`
- Radius: 32px
- Padding: 12px 24px
- Height: 48px
- Font: 18px Headspace Apercu weight 700
- Use: Secondary action ("Get started", "Learn more", "Chat with Ebb")

**Circular Play / Pause**
- Background: `#2d2c2b`
- Text: `#ffffff`
- Radius: 50%
- Padding: 10px
- Height: 48px
- Use: Audio play/pause control — also appears in smiley orange (`#ff7300`)

### Pill Tabs (Segmented Selector)

**Active**
- Background: `#2d2c2b`
- Text: `#ffffff`
- Radius: 24px
- Padding: 0 24px
- Height: 48px
- Font: 18px Headspace Apercu weight 700
- Use: Selected mode in the "What kind of headspace" segmented selector

**Inactive**
- Background: `#f9f4f2`
- Text: `#2d2c2b`
- Radius: 24px
- Padding: 0 24px
- Height: 48px
- Use: Unselected segmented options ("Guided meditations", "Sleep resources")

### Cards & Containers

**Feature Card (Cream)**
- Background: `#f9f4f2`
- Radius: 24px
- Use: Warm-cream feature card, shadowless

**Color-Block Card**
- Background: `#0061ef`
- Text: `#ffffff`
- Radius: 24px 24px 0 0
- Use: Saturated color-block feature card top — blue and gold (`#ffce00`) variants

**Theme Selector Card**
- Background: `#ffffff`
- Text: `#4b4c4d`
- Border: 2px solid `#e2ded9`
- Radius: 8px
- Padding: 8px 16px 8px 24px
- Use: Hero "Stress less / Sleep soundly / Manage anxiety" outlined selector tiles

**Subscription Plan Card (Selected)**
- Background: `#ffce00`
- Text: `#000000`
- Border: 1px solid `#ffce00`
- Radius: 12px
- Padding: 24px
- Use: Selected plan on the subscriptions page (unselected is `#ffffff` with 1px solid `#44423f`)

### Badges / Content Chips

**Smiley Orange Chip**
- Background: `#ff7300`
- Text: `#ffffff`
- Radius: 8px
- Padding: 8px 12px
- Font: 14px Headspace Apercu weight 500
- Use: Content-mode chip ("Sleep")

**Amber Chip**
- Background: `#ffa500`
- Text: `#000000`
- Radius: 8px
- Padding: 8px 12px
- Font: 14px Headspace Apercu weight 500
- Use: Content-mode chips ("Meditate", "Move", "Focus")

### Inputs & Forms

**Email / Float-Label Field**
- Background: `#ffffff`
- Text: `#000000`
- Border: 1px solid `#d2d5de`
- Radius: 8px
- Padding: 24px 16px 8px
- Height: 58px
- Font: 16px Headspace Apercu
- Use: Email capture with floating label

### Navigation
- Background: `#ffffff`
- Links: `#44423f`, 16px Headspace Apercu weight 400
- Logo: orange Headspace smiley left-aligned
- CTA: Headspace Blue "Try for free" pill right-aligned (32px radius)
- Use: Top horizontal nav ("Meditation", "Sleep", "Mindfulness", "Online therapy")

---

**Verified:** 2026-06-17 (omd:add-reference CREATE — Tier 1 live inspect, 2 surfaces)
**Tier 1 sources:** https://www.headspace.com (homepage, live computed style); https://www.headspace.com/subscriptions (subscriptions surface — plan cards, content chips); https://italic-studio.com/projects/headspace-rebrand/ (2024 rebrand case study — typeface + illustration system)
**Tier 2 sources:** getdesign.md/headspace — 404 (not catalogued); styles.refero.design/?q=headspace — no dedicated Headspace style page surfaced (generic browse grid only)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 4px, 8px, 12px, 16px, 24px, 40px, 64px
- Notable: Buttons sit at a consistent 48px height with 24px horizontal padding; hero CTAs grow to 62px height with 40px padding for emphasis

### Grid & Container
- Centered single-column hero anchored by a 64px Headspace Apercu headline
- Feature bands alternate warm cream (`#f9f4f2`) with saturated color-block cards (blue / gold) at 24px radius
- Theme selectors arranged as a row of outlined 8px-radius tiles beneath the hero
- Content chips ("Sleep", "Meditate") in a horizontal scrolling row in the smiley orange family

### Whitespace Philosophy
- **Calm over density**: generous vertical rhythm between bands; the cream base keeps the page breathing.
- **Color as structure**: sections separate by saturated color blocks and warm tints, not by borders or shadows.
- **Pill rhythm**: the repeated 32px-radius pill and 24px-radius card create a soft, consistent cadence.

### Border Radius Scale
- Small (8px): theme-selector tiles, content chips, plan-card inner elements
- Medium (12px): subscription plan cards
- Large (24px): feature cards, pill tabs
- Pill (32px): all primary / secondary buttons
- Circle (50%): audio play/pause controls

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline text, most surfaces |
| Tint (Level 1) | `#f9f4f2` cream shift | Card / band separation without elevation |
| Color block (Level 2) | Saturated fill (`#0061ef`, `#ffce00`) | Feature emphasis through color, not shadow |
| Hairline (Level 3) | `2px solid #e2ded9` / `1px solid #d2d5de` | Selector tiles, input outlines |

**Shadow Philosophy**: Headspace is a near-shadowless system. Live inspection found `box-shadow: none` across the hero, nav, headings, cards, and buttons. Depth and grouping are communicated through warm tinted surfaces (`#f9f4f2`), saturated color blocks (`#0061ef`, gold `#ffce00`), and thin warm hairlines (`#e2ded9`) — never elevation. This keeps the experience feeling soft, calm, and illustration-led rather than the heavy card-stack chrome of clinical health software. When emphasis is needed, the system reaches for color from the smiley palette, not a drop shadow.

## 7. Do's and Don'ts

### Do
- Use the custom Headspace Apercu at weight 700 for every headline — the rounded-bold voice is the brand
- Open on warm cream (`#f9f4f2`), not clinical white — it sets the calm tone
- Reserve Headspace Blue (`#0061ef`) for the single primary "do this" action
- Use the warm-orange family (`#ff7300` / `#ffa500` / gold `#ffce00`) for the emotion-driven content and illustration system
- Use warm charcoal (`#2d2c2b`) for headings and soft grey (`#4b4c4d`) for body — not pure black
- Apply tight negative tracking on headlines (-1.92px at 64px)
- Use pill geometry — 32px buttons, 24px cards, circular play controls
- Separate sections with color blocks and warm tints, not shadows

### Don't
- Use clinical white or a "dreary sea of blues and greys" — the rebrand exists to reject that
- Set headlines in a light weight — display is always weight 700
- Spread Headspace Blue across many elements — keep it the single action color
- Use drop shadows for depth — Headspace is shadowless; reach for color and tint
- Use pure black (`#000000`) for body text — reserve warm charcoal `#2d2c2b` / grey `#4b4c4d`
- Use a substitute geometric sans — Headspace Apercu's smile-echoing curves are essential
- Use sharp / square corners on buttons — everything interactive is a pill
- Treat the orange as decorative only — it is the emotional core of the system

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero headline compresses, chips scroll horizontally |
| Tablet | 640-1024px | Moderate padding, 2-up feature cards |
| Desktop | 1024-1440px | Full layout, centered hero, multi-column color-block bands |

### Touch Targets
- Buttons sit at a comfortable 48px height (hero CTAs 62px) with full pill geometry for unmistakable targets
- Content chips at 34px height with 12px horizontal padding
- Circular play controls at 48px diameter

### Collapsing Strategy
- Hero: 64px Headspace Apercu headline scales down on mobile, weight 700 maintained
- Content chip row: horizontal scroll on narrow viewports
- Color-block feature bands: multi-column → stacked single column
- Cream / color-block sections maintain full-width treatment

### Image Behavior
- Illustration and animation assets (the smiley emotion system) carry no shadow at any size
- Cards maintain 24px radius across breakpoints
- Color-block card tops keep the asymmetric `24px 24px 0 0` radius

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Headspace Blue (`#0061ef`)
- Dark CTA: Charcoal Ink (`#2d2c2b`)
- Background: Warm Cream (`#f9f4f2`)
- Card surface: White (`#ffffff`)
- Heading text: Charcoal Ink (`#2d2c2b`)
- Body text: Body Grey (`#4b4c4d`)
- Secondary text: Slate (`#44423f`)
- Brand orange: Smiley Orange (`#ff7300`), Amber (`#ffa500`), Gold (`#ffce00`)
- Emotion accents: Pink (`#ffa1cc`), Purple (`#3b197f`), Teal-Navy (`#27455c`)
- Border: Tan (`#e2ded9`), Input (`#d2d5de`)

### Example Component Prompts
- "Create a hero on warm cream (#f9f4f2) background. Headline at 64px Headspace Apercu weight 700, line-height 1.0, letter-spacing -1.92px, color #2d2c2b. Primary CTA: #0061ef background, white text, 32px radius pill, 14px/700 — 'Try for free'. Secondary cream pill: #f9f4f2 background, #44423f text, 32px radius."
- "Design a feature card: warm cream #f9f4f2 background, 24px radius, no shadow. Title 40px Headspace Apercu weight 700, letter-spacing -1.2px, #2d2c2b. Below it a color-block card top in #0061ef with 24px 24px 0 0 radius and white text."
- "Build content-mode chips: smiley orange #ff7300 background, white text, 8px radius, 8px 12px padding, 14px/500 — 'Sleep'. Amber #ffa500 variants for 'Meditate', 'Move', 'Focus'."
- "Create a segmented pill selector: active pill #2d2c2b fill with white 18px/700 label, 24px radius; inactive pills #f9f4f2 fill with #2d2c2b label."
- "Design a subscription plan card: selected = gold #ffce00 fill, black text, 12px radius, 24px padding; unselected = white with 1px solid #44423f border."

### Iteration Guide
1. Headspace Apercu weight 700 for every headline; the curves echo the smile
2. Warm cream (`#f9f4f2`) is the base, not white — this is the calm signal
3. Headspace Blue (`#0061ef`) is the single action color — don't spread it
4. Orange family (`#ff7300`/`#ffa500`/`#ffce00`) carries the emotion / illustration system
5. No shadows — separate with color blocks and warm tints
6. Pill geometry throughout — 32px buttons, 24px cards, circular play controls
7. Text is warm charcoal `#2d2c2b` / grey `#4b4c4d`, never pure black for body
8. Tight negative tracking on headlines, normal on body

---

## 10. Voice & Tone

Headspace's voice is **warm, plain-spoken, and quietly encouraging** — a friend who happens to be a clinician, never a wellness brand shouting affirmations. The signature line "Be kind to your mind" sets the register: gentle, human, second-person, zero hype. The 2024 rebrand explicitly aimed to "destigmatise seeking care by making talking about mental health feel approachable and normalised," and the copy reflects that — it names hard things (stress, anxiety, sleep, depression) plainly and offers a low-pressure next step.

| Context | Tone |
|---|---|
| Hero headlines | Warm, declarative, human. "Be kind to your mind." Never clinical, never hype. |
| Feature descriptions | Benefit-first, calm. "Live a healthier, happier, more well-rested life in just a few minutes a day." |
| CTAs | Low-pressure invitations. "Try for free", "Get started", "Learn more". |
| Content labels | Plain and friendly. "Sleep", "Meditate", "Move", "Focus", "Wake Up". |
| Care / clinical copy | Approachable but credible. Names anxiety and depression directly to normalise them. |

**Voice samples (verbatim from live surfaces):**
- "Be kind to your mind" — subscriptions hero headline (the brand's core line). *(verified live 2026-06-17)*
- "Live a healthier, happier, more well-rested life in just a few minutes a day. Get the science-backed mental health app for every moment." — homepage meta description. *(verified live 2026-06-17)*
- "The mental health app for every moment" — homepage section headline (category-expansion framing). *(verified live 2026-06-17)*

**Forbidden register**: clinical coldness, fear-based health urgency, toxic-positivity affirmations, undefined jargon, exclamation-heavy hype. The voice stays calm even when the topic is heavy.

## 11. Brand Narrative

Headspace was founded in **2010** by **Andy Puddicombe** — a former Buddhist monk — and **Rich Pierson**, who met when Pierson sought out Puddicombe's meditation classes in London. Their shared premise was that meditation should be demystified and made accessible to ordinary people, stripped of esoteric framing: a few minutes a day, guided in plain language. That accessibility mission is the root of everything in the brand, including the orange smiley, which the company has run since its conception — a mascot reportedly inspired by the saffron robes worn in the Buddhist meditation tradition.

By the 2020s Headspace had grown from a meditation app into a comprehensive mental-health platform spanning sleep, mindfulness, mental-health coaching, an AI companion (Ebb), and clinician-led online therapy — serving members "from better sleep, to everyday stress, to supporting members with care for more complex issues like anxiety and depression," and partnering with over 4,000 organizations. The 2024 rebrand, led by **Italic Studio (ITAL/C)** with a custom typeface from **Colophon Foundry**, was built to carry that expansion: "We built on the foundation of the brand to evolve it, not re-invent it."

What Headspace refuses, visible in its design: the clinical aesthetic of legacy healthcare — the "dreary sea of blues and greys" the design team explicitly named as the thing to avoid — and the stigma that surrounds talking about mental health. What it embraces: a warm cream canvas, an emotion-driven illustration system that depicts "stress, sadness, contentment, and every mood in between," a single trustworthy blue for action, and a typeface whose curves echo a smile and "flex from playful to clinical" so one brand can hold both a bedtime story and a depression-care pathway.

## 12. Principles

1. **Approachable, not clinical.** The brand exists to destigmatise seeking care. *UI implication:* open on warm cream not clinical white; name hard topics plainly; keep every CTA low-pressure.
2. **Emotion is the system.** The smiley illustration set spans the full range of human feeling. *UI implication:* use the warm-orange family and emotion accents to carry mood; treat illustration/animation as core, not garnish.
3. **One action, one color.** Headspace Blue (`#0061ef`) means "do this." *UI implication:* reserve the saturated blue exclusively for the primary CTA so the next step is never ambiguous.
4. **Playful and clinical in one voice.** The typeface flexes both ways. *UI implication:* the same Headspace Apercu weight 700 serves a bedtime headline and a therapy-care page — let tone shift through copy and color, not type swaps.
5. **Calm through softness.** Pills, rounded cards, warm tints, no shadows. *UI implication:* keep geometry soft and depth flat; let color blocks (not elevation) do the separating.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Headspace user segments (stressed professionals, people with sleep difficulty, members seeking therapy, organizations offering mental-health benefits), not individual people.*

**Maya Robinson, 28, Chicago.** A marketing manager who opens Headspace for a 10-minute meditation before bed and the Sleepcasts when she can't switch off. Chose it because the warm, friendly tone made meditation feel doable rather than intimidating. Distrusts wellness brands that feel preachy.

**David Okafor, 41, Atlanta.** A father of two using Headspace through his employer's benefits to manage everyday stress and, recently, the online therapy pathway. Values that the app names anxiety directly without making it feel like a diagnosis. Appreciates the calm, uncluttered interface after a long day.

**Priya Nair, 34, Seattle.** A software engineer who uses the focus and Move-mode content during work and the Ebb AI companion to check in on her mood. Likes that the brand feels human and illustrated rather than clinical and data-heavy.

**Janet Mills, 47, HR Director, Denver.** Evaluates mental-health benefits for a 3,000-person company. Chose Headspace partly because its approachable brand reduces the stigma employees feel about using a mental-health benefit at all.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no saved content)** | Warm cream (`#f9f4f2`) canvas. Single charcoal (`#2d2c2b`) line in friendly tone, with one Headspace Blue CTA to explore the library. Illustration, not clutter. |
| **Empty (no results)** | Soft grey (`#4b4c4d`) single line explaining nothing matched, plus a path back. Calm, never an error-sounding "No data". |
| **Loading (content fetch)** | Skeleton cards on cream surface at final 24px-radius dimensions. Flat pulse — no shadow shimmer, consistent with the shadowless system. |
| **Loading (audio buffer)** | Inline spinner inside the circular play control; the charcoal/orange play button stays in place. |
| **Error (playback / network failed)** | Inline message in charcoal with a plain-language explanation and a gentle retry. Names what to do next, never a bare "Something went wrong". |
| **Error (form validation)** | Field-level message below the input in a warm tone; describes what's valid, not just "Required". |
| **Success (subscription started)** | Brief calm confirmation; next-step content surfaced immediately below. No celebratory emoji barrage — warmth, not hype. |
| **Skeleton** | Cream (`#f9f4f2`) blocks at final dimensions, 24px radius, flat pulse. |
| **Disabled** | Reduced opacity on surface and label together; Headspace Blue actions fade rather than turn grey to preserve brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 140ms | Hover, button press, focus |
| `motion-standard` | 240ms | Card / band reveal, sheet, dropdown |
| `motion-slow` | 360ms | Page-level transitions, hero illustration reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, sheets, illustrations |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-gentle` | `cubic-bezier(0.4, 0.0, 0.2, 1)` | Soft two-way transitions, breathing animations |

**Motion rules**: Motion is the brand's living layer — the smiley illustration and animation system is retained specifically to "simplify complex concepts" and convey emotion. Animations are warm and gentle, never snappy or jarring: a breathing-guide bubble expands and contracts on a slow, calm cycle; content cards fade-in from below at `motion-standard / ease-enter`. The orange smiley's expression transitions are soft eases, never bounces with overshoot — the feeling is reassurance, not delight-for-its-own-sake. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and ambient animation freezes; the product stays fully functional and calm.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-17) via playwright getComputedStyle:
- https://www.headspace.com — homepage: body font "Headspace Apercu" / color rgb(75,76,77);
  hero H2 64px/700/-1.92px rgb(45,44,43); "Try for free" CTA bg rgb(0,97,239) #0061ef /
  white / radius 32px / 14px/700; charcoal CTA bg rgb(45,44,43) #2d2c2b; cream canvas
  rgb(249,244,242) #f9f4f2 (most frequent bg, 40x); theme-selector tiles white / 2px solid
  rgb(226,222,217) #e2ded9 / 8px radius; email input 1px solid rgb(210,213,222) #d2d5de /
  8px radius; box-shadow none across hero/nav/cards/buttons.
- https://www.headspace.com/subscriptions — "Be kind to your mind" 64px/700/-1.92px;
  selected plan card bg rgb(255,206,0) #ffce00 / 12px radius; unselected 1px solid
  rgb(68,66,63) #44423f; content chips bg rgb(255,115,0) #ff7300 / rgb(255,165,0) #ffa500 /
  8px radius; "Start your free trial" bg #0061ef / 62px height; orange play buttons #ff7300.
- https://italic-studio.com/projects/headspace-rebrand/ — 2024 rebrand case study.

Meta description (§10 voice sample) verbatim from live homepage <meta name=description>.
"Be kind to your mind" verbatim from live subscriptions hero.

Brand narrative (§11): Headspace founded 2010 by Andy Puddicombe (former Buddhist monk)
and Rich Pierson — widely documented public facts. 2024 rebrand by Italic Studio (ITAL/C)
with custom typeface from Colophon Foundry confirmed via:
- https://italic-studio.com/projects/headspace-rebrand/
- https://www.itsnicethat.com/articles/italic-studio-headspace-graphic-design-project-250424
  (verbatim: typeface "flex from playful to clinical"; "stress, sadness, contentment, and
  every mood in between"; "destigmatise seeking care by making talking about mental health
  feel approachable and normalised"; healthcare's "dreary sea of blues and greys"; "from
  better sleep, to everyday stress, to supporting members with care for more complex issues
  like anxiety and depression").
- https://www.printmag.com/branding-identity-design/headspaces-refreshed-identity-offerings-signal-new-era-of-empowered-well-being/

Orange smiley "inspired by the saffron robes worn in the Buddhist tradition of meditation"
and "run with the orange since the brand's conception" — from the rebrand press coverage above.

Personas (§13) are fictional archetypes informed by publicly observable Headspace user
segments. Names are illustrative; they do not refer to real people.

Interpretive claims (e.g., "emotion is the system", "calm through softness", "approachable
not clinical as a rejection of legacy healthcare chrome") are editorial readings connecting
Headspace's observed design and stated rebrand intent to its positioning, not directly
sourced Headspace statements.
-->
