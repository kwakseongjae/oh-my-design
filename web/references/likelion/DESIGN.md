---
id: likelion
name: LikeLion
display_name_kr: 멋쟁이사자처럼
country: KR
category: education
homepage: "https://likelion.net/"
primary_color: "#ff6000"
logo:
  type: favicon
  slug: "https://likelion.net/img/favicon.png"
verified: "2026-07-02"
added: "2026-07-02"
ds:
  name: LikeLion Design System
  url: "https://designsystem.likelion.net/"
  type: system
  description: "Official Storybook design system — Foundation (Colors / Radius / Screen Grid / Space / Typography) plus ~20 components (ActionButton, IconButton, TextField, Badge, Chip, Tab, Tag, Toast, Tooltip, Dialog, Select, DatePicker, Pagination, Checkbox, RadioButton, Toggle)."
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-07-02"
  note: "primary = live orange primary-500 (#ff6000), identical on marketing homepage and the official Storybook design system. Marketing homepage sets body/heading text at #222222; the canonical DS neutral ladder uses #191f28 (gray-950) / #333d4b (gray-800). Near-shadowless flat system."
  colors:
    primary: "#ff6000"
    primary-hover: "#cc4d00"
    primary-tint: "#ffdfcc"
    primary-faint: "#ffefe5"
    ink: "#222222"
    gray-950: "#191f28"
    neutral-900: "#191c1f"
    black: "#000000"
    label: "#333d4b"
    muted: "#737373"
    faint: "#a3a3a3"
    disabled: "#b1b8c0"
    border: "#d1d6dc"
    hairline: "#e5e7ea"
    hairline-alt: "#e5e5e5"
    surface: "#f3f4f6"
    surface-alt: "#f5f5f5"
    surface-faint: "#f9fafb"
    canvas: "#ffffff"
    cream: "#fcf4ee"
    cream-alt: "#fff8e4"
    yellow: "#ffb700"
    success: "#0da796"
    error: "#f64c4c"
  typography:
    family: { primary: "Pretendard", note: "Pretendard Variable" }
    display-d1:  { size: 52, weight: 600, lineHeight: 1.30, use: "Largest display headline" }
    display-d2:  { size: 44, weight: 600, lineHeight: 1.30, use: "Secondary display headline" }
    display-d3:  { size: 32, weight: 600, lineHeight: 1.30, use: "Section display / marketing H3 (700 on homepage)" }
    heading-h1:  { size: 31, weight: 600, lineHeight: 1.30, use: "Page heading" }
    subtitle:    { size: 17, weight: 600, lineHeight: 1.30, tracking: -0.3, use: "Subtitle / emphasis lead" }
    body:        { size: 16, weight: 400, lineHeight: 1.50, use: "Standard reading text / nav" }
    body-sm:     { size: 15, weight: 400, lineHeight: 1.60, tracking: -0.3, use: "Chip / tab / tag labels" }
    button:      { size: 16, weight: 600, lineHeight: 1.00, use: "ActionButton label" }
    caption:     { size: 13, weight: 400, lineHeight: 1.50, use: "Captions, metadata" }
  spacing: { xs: 2, sm: 4, base: 8, md: 12, lg: 16, xl: 20, xxl: 24, block: 32, section: 48 }
  rounded: { xs: 2, sm: 4, md: 6, base: 8, lg: 12, xl: 16, xxl: 24, pill: 999, full: 9999 }
  shadow:
    none: "none"
    hairline-ring: "rgba(0,0,0,0.01) 0px 0px 0px 1px"
  components:
    button-primary: { type: button, bg: "#ff6000", fg: "#ffffff", radius: "6px", height: "48px", padding: "0 16px", font: "16px / 600", states: "hover #cc4d00 · disabled bg #f3f4f6 fg #b1b8c0", use: "Primary action (ActionButton)" }
    button-neutral: { type: button, bg: "#191c1f", fg: "#ffffff", radius: "6px", height: "48px", padding: "0 16px", font: "16px / 600", use: "Secondary dark / neutral action" }
    button-assistive: { type: button, bg: "#f3f4f6", fg: "#333d4b", radius: "6px", height: "48px", padding: "0 16px", font: "16px / 600", use: "Tertiary / low-emphasis action" }
    textfield: { type: input, bg: "#ffffff", fg: "#000000", border: "1px solid #d1d6dc", radius: "8px", height: "48px", padding: "0 12px", font: "16px / 400", states: "focus border #333d4b", use: "Text input (TextField), 15px placeholder #333d4b" }
    chip-selected: { type: badge, bg: "#ff6000", fg: "#ffffff", radius: "999px", height: "30px", padding: "0 12px", font: "15px / 400", use: "Selected filter chip (filled)" }
    chip-outline: { type: badge, bg: "#ffefe5", fg: "#ff6000", border: "1px solid #ff6000", radius: "999px", height: "30px", padding: "0 12px", font: "15px / 400", use: "Selected chip (tinted outline variant)" }
    tab-pill: { type: tab, bg: "#ffffff", fg: "#333d4b", border: "1px solid #d1d6dc", radius: "999px", height: "40px", padding: "0 16px", font: "15px / 400", active: "#ffffff text on #191f28 fill", use: "Segmented pill tab" }
    badge-count: { type: badge, bg: "#ff6000", fg: "#ffffff", radius: "10px", height: "20px", padding: "0 6.5px", font: "16px / 400", use: "Notification count badge" }
    tag: { type: badge, bg: "#ff6000", fg: "#ffffff", radius: "4px", height: "28px", padding: "0 8px", font: "15px / 400", use: "Category tag" }
    card-warm: { type: card, bg: "#fcf4ee", fg: "#222222", radius: "16px", padding: "40px", use: "Warm promo card (Business / Event) on homepage" }
    card-plain: { type: card, bg: "#ffffff", fg: "#222222", border: "1px solid #e5e5e5", radius: "12px", use: "White content card with hairline outline" }
  components_harvested: true
---

# Design System Inspiration of LikeLion

## 1. Visual Theme & Atmosphere

LikeLion (멋쟁이사자처럼) is Korea's largest coding-education organization — university clubs turned national bootcamp operator (K-Digital Training, 국비지원 courses, AI education, enterprise training) — and its design reads exactly like that mission: energetic, approachable, and confidently modern without being childish. The canvas is pure white (`#ffffff`) broken up by soft neutral surfaces (`#f5f5f5`, `#f3f4f6`) and warm cream promo cards (`#fcf4ee`, `#fff8e4`), while a single high-voltage orange (`#ff6000`) does all the persuading. That orange is the brand's whole personality: it is the one saturated color on an otherwise quiet, near-black-on-white page, so the eye is trained to read "orange = the next step."

What makes LikeLion unusually credible for an education brand is that it ships a real, public **design system**: `designsystem.likelion.net` is a full Storybook with a Foundation layer (Colors, Radius, Screen Grid, Space, Typography) and ~20 production components (ActionButton, TextField, Badge, Chip, Tab, Tag, Toast, Dialog, Select, DatePicker, and more). Live inspection confirms the same `#ff6000` primary drives both the marketing homepage and the canonical `primary-500` token, so the system is coherent from landing page to product UI. The neutral ladder is a cool blue-grey scale — `#191f28` (gray-950) down through `#333d4b`, `#8a95a0`, `#d1d6dc` to `#f9fafb` — that keeps text calm and lets the orange stay loud.

Typographically the system is all-Pretendard: a bold display voice (weight 600) at large sizes for headlines that motivate, dropping to a quiet 15-16px weight 400 for body and dense UI, the de-facto Korean product font tuned for hangul legibility. Depth is deliberately flat — box-shadow is `none` across the hero, nav, cards, buttons, chips, and tabs; separation comes from tinted surfaces and thin `#e5e5e5` / `#e5e7ea` / `#d1d6dc` hairlines rather than elevation. Geometry is friendly: a moderate `6px` radius on action buttons, `8px` on inputs, `12–16px` on cards, and full 999px pills on chips and tabs. The overall impression is a bright, trustworthy, education-first product that feels built by engineers who care about tokens.

**Key Characteristics:**
- Single high-voltage orange (`#ff6000`) as the only saturated color — reserved for the primary action
- Pretendard everywhere: weight 600 for display/headlines, weight 400 for body and dense UI
- Cool blue-grey neutral ladder (`#191f28` → `#333d4b` → `#8a95a0` → `#d1d6dc` → `#f9fafb`)
- Warm cream promo surfaces (`#fcf4ee`, `#fff8e4`) that soften an otherwise cool palette
- Flat, near-shadowless system — hairlines (`#e5e5e5`, `#e5e7ea`, `#d1d6dc`) and tinted surfaces do the separating
- Friendly geometry: 6px buttons, 8px inputs, 12–16px cards, 999px pill chips and tabs
- A real public Storybook design system backing the marketing site — coherent tokens end to end
- Marketing homepage sets text at `#222222`; the canonical DS ladder uses `#191f28` / `#333d4b`

## 2. Color Palette & Roles

### Primary
- **LikeLion Orange** (`#ff6000`): Primary brand color and the single "action" color. `primary-500` in the DS; drives the ActionButton, filled chips, count badges, tags, and the homepage CTA/search accent.
- **Orange Hover** (`#cc4d00`): `primary-600`. Darker orange for the pressed/hover state of primary buttons.
- **Orange Tint** (`#ffdfcc`): `primary-100`. Soft peach for subtle highlight surfaces and pressed backgrounds.
- **Orange Faint** (`#ffefe5`): `primary-50`. Faintest peach used as the tinted background of the outline chip variant.

### Text & Ink
- **Ink** (`#222222`): Marketing homepage body and heading text (rgb 34,34,34) — the dominant text color across the landing page.
- **Gray-950** (`#191f28`): The DS darkest neutral; canonical strong text and the dark selected-tab fill.
- **Neutral-900** (`#191c1f`): Near-black used as the neutral/secondary button fill in the DS.
- **Pure Black** (`#000000`): TextField input text value.
- **Label** (`#333d4b`): `gray-800`. DS secondary text, chip/tab default label color, TextField focus border and placeholder/guide text.
- **Muted** (`#737373`): Homepage secondary/mid-grey text.
- **Faint** (`#a3a3a3`): Homepage low-emphasis / muted labels.
- **Disabled** (`#b1b8c0`): `gray-400`. Disabled button text.

### Neutral & Surface
- **Pure White** (`#ffffff`): Page background, white cards, text on orange/dark.
- **Border** (`#d1d6dc`): `gray-300`. Default chip/tab outline and card border.
- **Hairline** (`#e5e7ea`): `gray-200`. Thin dividers and subtle borders.
- **Hairline Alt** (`#e5e5e5`): Homepage divider/border hairline.
- **Surface** (`#f3f4f6`): `gray-100`. Assistive/tertiary button fill and quiet section surface.
- **Surface Alt** (`#f5f5f5`): The most frequent homepage section surface.
- **Surface Faint** (`#f9fafb`): `gray-50`. The lightest tinted surface.
- **Cream** (`#fcf4ee`): Warm promo-card background (Business / Event tiles on the homepage).
- **Cream Alt** (`#fff8e4`): `yellow-50`. Warm light-cream highlight surface.

### Semantic Accents (DS primitives, used sparingly)
- **Yellow** (`#ffb700`): `yellow-500`. Highlight / rating / attention accent (appears in homepage star/rating marks).
- **Success** (`#0da796`): `green-500`. Positive / success teal.
- **Error** (`#f64c4c`): `red-500`. Error / destructive red.

## 3. Typography Rules

### Font Family
- **Primary**: `Pretendard` (loaded as `Pretendard Variable`), with the usual system-font fallback stack. It is the single family for display, headings, body, nav, and all UI labels — the design system standardizes on it.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Tracking | Notes |
|------|------|------|--------|-------------|----------|-------|
| Display D1 | Pretendard | 52px | 600 | 1.30 | normal | Largest display headline |
| Display D2 | Pretendard | 44px | 600 | 1.30 | normal | Secondary display |
| Display D3 | Pretendard | 32px | 600 | 1.30 | normal | Section display (marketing H3 uses 700) |
| Heading H1 | Pretendard | 31px | 600 | 1.30 | normal | Page heading |
| Subtitle | Pretendard | 17px | 600 | 1.30 | -0.3px | Subtitle / emphasis lead |
| Body | Pretendard | 16px | 400 | 1.50 | normal | Standard reading text, nav links |
| Body Small | Pretendard | 15px | 400 | 1.60 | -0.3px | Chip / tab / tag labels |
| Button | Pretendard | 16px | 600 | 1.00 | normal | ActionButton label |
| Caption | Pretendard | 13px | 400 | 1.50 | normal | Captions, metadata |

### Principles
- **Bold display, light body**: Pretendard weight 600 carries every headline; weight 400 carries body and dense UI. The weight jump is the primary hierarchy signal.
- **One family, many jobs**: unlike two-font systems, LikeLion leans entirely on Pretendard and differentiates by size/weight — simpler and hangul-consistent.
- **Slight negative tracking on emphasis text**: subtitles and small labels sit at -0.3px; large display and body stay at normal tracking.
- **14–16px UI floor**: body and UI text sit at 15–16px for comfortable hangul reading in information-dense course listings.

## 4. Component Stylings

### Buttons

**Primary (ActionButton)**
- Background: `#ff6000`
- Text: `#ffffff`
- Radius: 6px
- Padding: 0px 16px
- Height: 48px
- Font: 16px / 600 / Pretendard
- Hover: `#cc4d00` background
- Disabled: `#f3f4f6` background, `#b1b8c0` text
- Use: Primary call-to-action — the system's single dominant action

**Neutral (Dark)**
- Background: `#191c1f`
- Text: `#ffffff`
- Radius: 6px
- Padding: 0px 16px
- Height: 48px
- Font: 16px / 600 / Pretendard
- Use: Secondary dark / neutral action

**Assistive (Tertiary)**
- Background: `#f3f4f6`
- Text: `#333d4b`
- Radius: 6px
- Padding: 0px 16px
- Height: 48px
- Font: 16px / 600 / Pretendard
- Use: Low-emphasis / tertiary action

### Inputs & Forms

**TextField**
- Background: `#ffffff`
- Text: `#000000`
- Border: 1px solid `#d1d6dc`
- Radius: 8px
- Padding: 0px 12px
- Height: 48px
- Font: 16px / 400 / Pretendard
- Focus: 1px solid `#333d4b` border
- Placeholder: `#333d4b` at 15px
- Use: Standard text input; TextArea shares the same box treatment

### Cards & Containers

**Warm Promo Card**
- Background: `#fcf4ee`
- Text: `#222222`
- Radius: 16px
- Padding: 40px
- Use: Business / Event promo tiles on the homepage

**White Content Card**
- Background: `#ffffff`
- Text: `#222222`
- Border: 1px solid `#e5e5e5`
- Radius: 12px
- Use: White content card with a hairline outline (no shadow)

### Badges & Tags

**Count Badge**
- Background: `#ff6000`
- Text: `#ffffff`
- Radius: 10px
- Padding: 0px 6.5px
- Height: 20px
- Use: Notification / count badge

**Tag**
- Background: `#ff6000`
- Text: `#ffffff`
- Radius: 4px
- Padding: 0px 8px
- Height: 28px
- Font: 15px / 400 / Pretendard
- Use: Category / label tag

### Chips

**Filled (Selected)**
- Background: `#ff6000`
- Text: `#ffffff`
- Radius: 999px
- Padding: 0px 12px
- Height: 30px
- Font: 15px / 400 / Pretendard
- Use: Selected filter chip (solid)

**Outline (Tinted Selected)**
- Background: `#ffefe5`
- Text: `#ff6000`
- Border: 1px solid `#ff6000`
- Radius: 999px
- Padding: 0px 12px
- Height: 30px
- Use: Selected chip, tinted-outline variant

**Default (Unselected)**
- Background: `#ffffff`
- Text: `#333d4b`
- Border: 1px solid `#d1d6dc`
- Radius: 999px
- Padding: 0px 12px
- Height: 30px
- Use: Unselected filter chip

### Tabs

**Segmented Pill**
- Background: `#ffffff`
- Text: `#333d4b`
- Border: 1px solid `#d1d6dc`
- Radius: 999px
- Padding: 0px 16px
- Height: 40px
- Font: 15px / 400 / Pretendard
- Active: `#ffffff` text on `#191f28` fill
- Use: Segmented pill tab bar

### Navigation
- Background: `#ffffff`
- Text: `#222222`
- Font: 16px / 400 / Pretendard
- Padding: 20px 16px per link
- Use: Top horizontal nav ("전체강의", "부트캠프 국비지원", "AI교육", "기업교육") with a pill-shaped login/signup button (`1px solid #d4d4d4`, 9999px)

---

**Verified:** 2026-07-02 (omd:add-reference CREATE — Tier 1 live inspect)
**Tier 1 sources:** https://likelion.net/ (marketing homepage, live computed style) ; https://designsystem.likelion.net/ (official LikeLion Design System Storybook — Foundation + components, live computed style)
**Tier 2 sources:** getdesign.md/likelion — app shell only, no LikeLion data ; styles.refero.design/?q=likelion & ?q=멋쟁이사자처럼 — not listed (only generic featured cards returned)
**Conflicts unresolved:** none (homepage `#222222` text vs DS `#191f28` ladder, and nav pill vs DS 6px button, are surface-scoped differences documented in .verification.md, not contradictions)

## 5. Layout Principles

### Spacing System
- Base unit: 4px, doubling into an 8px rhythm
- Scale (DS Space tokens): 2px, 4px, 8px, 10px, 12px, 16px, 20px, 24px, 32px, 40px, 48px
- Notable: promo cards use a generous 40px internal padding; nav links use 20px vertical padding for tall, tappable hit areas

### Grid & Container
- Centered content column with a fixed-width top nav bar (56–65px tall links)
- Course/curriculum content laid out as horizontally scrolling card carousels beneath section H3 headings
- Full-width alternating bands: white (`#ffffff`) and quiet grey (`#f5f5f5`) segments
- Warm cream (`#fcf4ee`) promo tiles at 16px radius anchor the "Business" and "Event" sections

### Whitespace Philosophy
- **Breathing room for a busy catalog**: despite a dense course inventory, sections are airy with generous vertical rhythm
- **Flat segmentation**: bands separate by background tint (`#f5f5f5` / `#f9fafb` vs `#ffffff`) and hairlines, never by shadow
- **Orange as punctuation**: whitespace stays neutral so the single orange accent reads as the clear focal point

### Border Radius Scale
- Extra-small (2px) / Small (4px): tags, fine inner elements
- Medium (6px): action buttons — the workhorse
- Base (8px): text inputs
- Large (12px) / X-Large (16px): content and promo cards
- Pill (999px): chips, tabs, and the nav login button

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline text, most surfaces |
| Tint (Level 1) | `#f5f5f5` / `#f9fafb` background shift | Section/card separation without elevation |
| Hairline (Level 2) | `1px solid #e5e5e5` / `#d1d6dc` border | White card outlines, chip/tab borders, dividers |
| Ring (Level 2.5) | `rgba(0,0,0,0.01) 0px 0px 0px 1px` | Barely-there ring on the white content card |

**Shadow Philosophy**: LikeLion is a near-shadowless, flat system. Live inspection found `box-shadow: none` across the hero, nav, promo cards, action buttons, chips, and tabs; the only elevation-like treatment is a `rgba(0,0,0,0.01)` 1px ring on a white content card. Depth and grouping are communicated entirely through flat tinted surfaces (`#f5f5f5`, `#f9fafb`) and thin hairlines (`#e5e5e5`, `#e5e7ea`, `#d1d6dc`). When emphasis is needed the system reaches for color — the orange `#ff6000` or the dark `#191f28` — rather than elevation, which keeps the education UI feeling light, fast, and modern.

## 7. Do's and Don'ts

### Do
- Use Pretendard weight 600 for display/headlines and weight 400 for body and dense UI
- Reserve orange (`#ff6000`) for the primary action — keep it the single "do this" color
- Use the cool grey ladder (`#191f28` → `#333d4b` → `#8a95a0` → `#d1d6dc`) for text and borders
- Separate sections with flat tint (`#f5f5f5`, `#f9fafb`) and hairlines (`#e5e5e5`, `#d1d6dc`), not shadows
- Use a 6px radius for action buttons, 8px for inputs, 12–16px for cards
- Use full 999px pills for chips and segmented tabs
- Warm the palette with cream promo surfaces (`#fcf4ee`, `#fff8e4`) where a section needs friendliness
- Use `#cc4d00` for the pressed/hover state of primary buttons

### Don't
- Spread orange across many elements — it dilutes the single-action signal
- Use drop shadows for elevation — the system is flat and hairline-based
- Set headlines in a light weight — display is always Pretendard 600 (or 700 on marketing)
- Mix in a second saturated brand hue — orange is the only loud color
- Use sharp/square corners on chips or tabs — those are full pills
- Use pure black for large body copy — use `#222222` (marketing) or `#191f28` (DS)
- Over-elevate cards — a 12–16px radius and a thin `#e5e5e5` hairline is the pattern

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero headline compresses, card carousels scroll horizontally |
| Tablet | 640-1024px | Moderate padding, 2-up course cards |
| Desktop | 1024-1440px | Full nav bar, centered content, multi-column course/feature bands |

### Touch Targets
- Action buttons at 48px height — comfortably tappable
- Nav links use 20px vertical padding (63–65px tall targets)
- Chips at 30px and tabs at 40px height with generous horizontal padding
- Login/signup pill at 43px height

### Collapsing Strategy
- Hero: large display headline scales down on mobile, weight 600 maintained
- Course card rows: horizontal scroll on narrow viewports
- Feature/promo bands: multi-column → stacked single column
- Tinted/white alternating sections keep full-width treatment
- Nav: horizontal links collapse to a hamburger/menu on mobile

### Image Behavior
- Course thumbnails and promo illustrations carry no shadow at any size, consistent with the flat system
- Cards maintain their 12–16px radius across breakpoints
- Warm cream promo tiles keep 40px internal padding, tightening on mobile

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: LikeLion Orange (`#ff6000`)
- CTA Hover: Orange Dark (`#cc4d00`)
- Background: Pure White (`#ffffff`)
- Quiet surface: Surface Alt (`#f5f5f5`), Surface Faint (`#f9fafb`)
- Warm promo surface: Cream (`#fcf4ee`), Cream Alt (`#fff8e4`)
- Heading / body text: Ink (`#222222`) or DS Gray-950 (`#191f28`)
- Secondary text / borders: Label (`#333d4b`), Border (`#d1d6dc`)
- Muted / faint text: `#737373`, `#a3a3a3`, disabled `#b1b8c0`
- Hairline: `#e5e5e5`, `#e5e7ea`
- Semantic: yellow `#ffb700`, success `#0da796`, error `#f64c4c`

### Example Component Prompts
- "Create a hero on white background. Headline in Pretendard 52px weight 600, line-height 1.30, color #222222. Below it, one orange primary button: #ff6000 background, white text, 6px radius, 48px height, 0 16px padding, Pretendard 16px/600 — hover #cc4d00."
- "Design a course card: white background, 1px solid #e5e5e5 border, 12px radius, no shadow. Title 17px Pretendard weight 600 letter-spacing -0.3px #222222; meta 15px weight 400 #737373."
- "Build a filter chip row: unselected chips are white with #333d4b text and a 1px solid #d1d6dc border at 999px radius, 30px height, 0 12px padding, 15px Pretendard; selected chip fills #ff6000 with white text."
- "Create a segmented pill tab bar: 40px height, 999px radius pills. Inactive: white bg, #333d4b text, 1px solid #d1d6dc. Active: #191f28 fill with white text."
- "Make a warm promo tile: #fcf4ee background, 16px radius, 40px padding, #222222 text, no shadow."

### Iteration Guide
1. Pretendard everywhere — 600 for headlines, 400 for body/UI
2. Orange (`#ff6000`) is the single action color — don't spread it; hover is `#cc4d00`
3. No shadows — separate with `#f5f5f5` / `#f9fafb` tint and `#e5e5e5` / `#d1d6dc` hairlines
4. Radius ladder: 6px buttons, 8px inputs, 12–16px cards, 999px pills
5. Text is `#222222` (marketing) or `#191f28` (DS); secondary `#333d4b`, muted `#737373`
6. Warm the layout with cream (`#fcf4ee`, `#fff8e4`) where friendliness helps
7. Semantic accents (`#ffb700`, `#0da796`, `#f64c4c`) stay rare and functional

---

## 10. Voice & Tone

LikeLion's voice is **encouraging, plain-spoken, and possibility-focused** — the tone of a mentor who believes anyone can learn to build. The name itself (멋쟁이사자처럼, "like a stylish lion") is playful and warm, and the copy follows: it invites rather than gatekeeps, and it frames coding education as an accessible on-ramp, not an elite filter. Course and section labels are direct and benefit-first ("90% 지원받는 기초 강의", "K-디지털 트레이닝 부트캠프", "실시간 인기있는 강의"), treating the learner as a capable adult making a practical choice.

| Context | Tone |
|---|---|
| Hero / section headlines | Motivating, concrete. States the benefit or the offer plainly ("90% 지원받는 기초 강의"). |
| Course labels | Functional and specific. Names the program and the support ("부트캠프 국비지원", "AI교육"). |
| CTAs | Direct, low-pressure invitations. "자세히 보기", "신청하기". |
| Feature descriptions | Approachable, jargon-decoded. Explains what a learner gets and how support works. |
| Community / brand copy | Warm, inclusive, momentum-driven — coding as something you join, not something you're tested against. |

**Voice samples (verbatim from live homepage):**
- "90% 지원받는 기초 강의" — section heading (benefit-first, states the subsidy). *(verified live 2026-07-02)*
- "K-디지털 트레이닝 부트캠프" — program label (concrete, government-backed offering). *(verified live 2026-07-02)*
- "멋사에게 새로운 질문을 물어봐주세요." — search placeholder (friendly, invites the learner to ask). *(verified live 2026-07-02)*

**Forbidden register**: fear-based "you'll fall behind" urgency, elitist gatekeeping language, undefined tech jargon left unexplained, and hard-sell exclamation spam. The brand persuades by possibility and support, not pressure.

## 11. Brand Narrative

LikeLion (멋쟁이사자처럼) began in **2013** as a university coding club founded by **이두희 (Lee Doo-hee)** at Seoul National University, built on a radical-for-its-time premise: non-CS-major students could learn to build real web services in a single semester. The club spread rapidly across Korean universities, becoming the country's largest student developer community, and then formalized into an education company that now runs national-scale bootcamps, government-subsidized courses (국비지원 / K-Digital Training), AI education, and enterprise training programs.

The founding conviction — that programming is a general literacy anyone can acquire, not a gate reserved for engineers — shapes both the product and the design. LikeLion positions itself as the friendly on-ramp into tech: it packages intimidating subject matter (development, AI, data) into approachable, mentor-supported programs, and it frames outcomes in terms of access and opportunity rather than credential-signaling.

What LikeLion refuses, visible in its design: the cold, exclusionary aesthetic of legacy technical education (dense syllabi, institutional navy, walls of prerequisites) and the dark-pattern urgency of hard-sell online courses. What it embraces: a bright, single-orange energy that reads as momentum and encouragement; a flat, fast, mobile-native interface; plain Korean that decodes jargon; and — notably for an education brand — a genuine, engineered design system (`designsystem.likelion.net`) that signals the same craft it teaches.

## 12. Principles

1. **Accessible by default.** Coding is a literacy anyone can learn. *UI implication:* keep language plain, keep the next step obvious with a single orange CTA, and never gate basic information behind jargon.
2. **Encourage, don't pressure.** Momentum beats fear. *UI implication:* copy invites ("자세히 보기", "물어봐주세요"); no countdown-timer dark patterns or scarcity manipulation.
3. **One action, one color.** Orange (`#ff6000`) means "do this." *UI implication:* reserve the saturated orange exclusively for the primary action so the path forward is never ambiguous.
4. **Flat and fast.** Mobile-native clarity over decorative depth. *UI implication:* no shadows; separate with tint and hairlines; keep pages light and quick to scan.
5. **Practice the craft you teach.** A public design system is proof of rigor. *UI implication:* build from tokens and documented components (the Storybook), so the product UI is as consistent as the curriculum promises.
6. **Warmth where it counts.** *UI implication:* soften a cool, functional palette with cream promo surfaces (`#fcf4ee`, `#fff8e4`) and a friendly, non-corporate voice.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable LikeLion user segments (career-switchers, university students, working professionals reskilling into tech), not individual people.*

**김민서, 26, 서울.** A non-CS-major graduate switching careers into front-end development via a government-subsidized (국비지원) bootcamp. Chose LikeLion because the program felt approachable and the support (mentoring, subsidy) was stated plainly rather than buried in fine print.

**이준호, 22, 대전.** A university student joining a LikeLion campus track to build his first real web service. Values the community energy and the sense that he can ship something in a semester without a formal engineering background.

**박지영, 34, 경기.** A marketer reskilling into AI/data through a short-form course. Appreciates that the jargon is decoded into concrete outcomes and that the interface is clean and fast on her phone during a commute.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no courses match filter)** | White canvas. Single Ink (`#222222`) line explaining no matching courses, with one orange (`#ff6000`) CTA to reset filters. No cluttered illustration. |
| **Empty (saved list, none yet)** | Muted (`#737373`) single line: nothing saved yet, plus a path back to browsing. Calm and encouraging. |
| **Loading (course list fetch)** | Skeleton cards on `#f5f5f5` / `#f9fafb` tinted surface at final card dimensions, 12–16px radius. Flat pulse — no shadow shimmer, consistent with the shadowless system. |
| **Loading (in-place refresh)** | Subtle inline progress; previous course cards stay visible with previous values. |
| **Error (fetch failed)** | Inline message in Ink (`#222222`) with a plain-language explanation and a retry action. Never a bare "오류가 발생했습니다" — states what to do next. |
| **Error (form validation)** | Field-level message below the TextField using the error red (`#f64c4c`); describes what's valid, not just "필수". |
| **Success (enrollment / application submitted)** | Brief inline confirmation in a calm, encouraging tone (optionally the success teal `#0da796`); next-step detail linked immediately below. No celebratory emoji spam. |
| **Skeleton** | `#f5f5f5` blocks at final dimensions, 12–16px radius, flat pulse. |
| **Disabled** | Disabled button uses `#f3f4f6` background with `#b1b8c0` text; orange actions fade rather than turn a different hue, preserving brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, chip/tab press, focus |
| `motion-standard` | 200ms | Card/section reveal, sheet, dropdown, toast |
| `motion-slow` | 320ms | Page-level transitions, hero reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, chips, toasts, sheets |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is functional and encouraging — consistent with the bright, flat aesthetic. Pill chips and tabs respond to press with a subtle scale/opacity shift; course cards and results fade in from below at `motion-standard / ease-enter`. Toasts slide/fade in at `motion-standard`. No heavy bounce or spring — an education product signals steady confidence, not gimmickry, though the single orange accent keeps the feel energetic. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and the product remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-07-02) via playwright getComputedStyle:
- https://likelion.net/ — homepage: primary orange #ff6000 (search input, CTA accents, card border),
  body/heading text #222222, warm promo cards #fcf4ee, nav links, pill login button, shadowless.
- https://designsystem.likelion.net/ — official LikeLion Design System (Storybook): Foundation Colors
  (primary-500 #ff6000, gray ladder), Radius (2→24px + full), Space, Typography (Pretendard, display 600),
  and components ActionButton / TextField / Badge / Chip / Tab / Tag read from story canvases.

Token-level claims (§1-9) are sourced from this live inspection; see web/references/likelion/.verification.md
for the full raw-sample proof block and conflict matrix.

Voice samples (§10) are verbatim from the live homepage (section heading, program label, search placeholder).

Brand narrative (§11): LikeLion (멋쟁이사자처럼) began in 2013 as a Seoul National University coding club
founded by 이두희 (Lee Doo-hee) and grew into Korea's largest coding-education organization (bootcamps,
국비지원 / K-Digital Training, AI education, enterprise training). These are widely documented public facts;
specific details beyond the homepage are general public knowledge, not directly quoted from a verified
LikeLion statement in this turn.

Personas (§13) are fictional archetypes informed by publicly observable LikeLion user segments
(career-switchers, university students, professionals reskilling). Names are illustrative; they do not
refer to real people.

Interpretive claims (e.g., "one action, one color", "practice the craft you teach") are editorial readings
connecting LikeLion's observed design and public design system to its positioning, not directly sourced
LikeLion statements.
-->
