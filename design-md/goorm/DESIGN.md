---
id: goorm
name: goorm
display_name_kr: 구름
country: KR
category: education
homepage: "https://goorm.co"
primary_color: "#2a72e5"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=goorm.co&sz=128"
verified: "2026-06-26"
added: "2026-06-26"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-26"
  note: "primary = Vapor UI / goorm interactive blue (#2a72e5); active/link blues are #0957c8 and #0043b3. Ink near-black (#262626) carries text + the dark marketing CTA. Semantic badges use Adobe-Leonardo-generated tints (#c6e6ff/#bbecd7/#ffd8d7/#ffd9c8). Flat, hairline-driven elevation (#e1e1e1 / #c6c6c6 inset borders); 8px radius dominant."
  colors:
    primary: "#2a72e5"
    primary-active: "#0957c8"
    link: "#0043b3"
    ink: "#262626"
    text-secondary: "#4c4c4c"
    text-muted: "#5d5d5d"
    text-tertiary: "#393939"
    faint: "#a3a3a3"
    canvas: "#ffffff"
    surface: "#f7f7f7"
    hairline: "#e1e1e1"
    border-strong: "#c6c6c6"
    success: "#058765"
    danger: "#da3944"
    info-tint: "#c6e6ff"
    success-tint: "#bbecd7"
    danger-tint: "#ffd8d7"
    warning-tint: "#ffd9c8"
    on-primary: "#ffffff"
  typography:
    family: { sans: "Pretendard Variable" }
    display-hero:  { size: 48, weight: 800, lineHeight: 1.2, use: "Vapor docs H1 / landing headline, Pretendard ExtraBold" }
    display-soft:  { size: 48, weight: 500, lineHeight: 1.2, tracking: -0.4, use: "goorm.co marketing hero, lighter weight" }
    section:       { size: 32, weight: 700, lineHeight: 1.3, use: "Section titles (H2)" }
    nav:           { size: 14, weight: 600, lineHeight: 1.4, use: "Top-nav items on goorm.co" }
    body:          { size: 16, weight: 400, lineHeight: 1.5, use: "Standard reading text, Pretendard" }
    button:        { size: 14, weight: 500, lineHeight: 1.0, use: "Default button / docs UI label" }
    button-lg:     { size: 16, weight: 500, lineHeight: 1.0, use: "Large marketing CTA label" }
    caption:       { size: 14, weight: 400, lineHeight: 1.4, use: "Docs side-nav link, muted meta" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48 }
  rounded: { sm: 6, md: 8, lg: 12, xl: 16, full: 9999 }
  shadow:
    none: "none"
    inset-hairline: "rgb(225, 225, 225) 0px 0px 0px 1px inset"
    inset-strong: "rgb(198, 198, 198) 0px 0px 0px 1px inset"
  components:
    button-primary:   { type: button, bg: "#2a72e5", fg: "#ffffff", radius: "8px", height: "40px", padding: "0 16px", font: "14px / 500", use: "Primary action — Vapor UI primary (Save, Public으로 변경, 45 포인트 획득)" }
    button-secondary: { type: button, bg: "#e1e1e1", fg: "#262626", radius: "8px", height: "40px", padding: "0 16px", font: "14px / 500", use: "Neutral / secondary action (취소, Docs 보러 가기)" }
    button-outline:   { type: button, bg: "#ffffff", fg: "#262626", border: "1px solid #c6c6c6", radius: "8px", height: "40px", padding: "0 16px", font: "14px / 500", use: "Outlined action — 1px inset #c6c6c6 border" }
    button-cta-dark:  { type: button, bg: "#262626", fg: "#ffffff", radius: "8px", height: "48px", padding: "0 24px", font: "16px / 500", use: "Marketing primary CTA on goorm.co (도입 문의하기)" }
    input-text:       { type: input, bg: "#ffffff", fg: "#262626", border: "1px solid #e1e1e1", radius: "8px", height: "48px", padding: "0 24px", font: "16px / 400", use: "Text field — 1px inset #e1e1e1, focus ring #2a72e5" }
    card:             { type: card, bg: "#ffffff", border: "1px solid #e1e1e1", radius: "12px", use: "Content card / panel sitting on #f7f7f7 surface" }
    nav-tab:          { type: tab, fg: "#4c4c4c", active: "text #0957c8 + 2px bottom border #0957c8", font: "14px / 500", use: "Docs Preview/Code tab + section nav" }
    badge-info:       { type: badge, bg: "#c6e6ff", fg: "#0043b3", radius: "9999px", font: "12px / 500", use: "Info / default tag" }
    badge-success:    { type: badge, bg: "#bbecd7", fg: "#058765", radius: "9999px", font: "12px / 500", use: "Success / positive status" }
    badge-danger:     { type: badge, bg: "#ffd8d7", fg: "#da3944", radius: "9999px", font: "12px / 500", use: "Error / destructive status" }
    badge-neutral:    { type: badge, bg: "#e1e1e1", fg: "#262626", radius: "9999px", font: "12px / 500", use: "Neutral count / label" }
  components_harvested: true
---

# Design System Inspiration of goorm

## 1. Visual Theme & Atmosphere

goorm (구름, "cloud" in Korean) is Korea's developer-experience company — a cloud IDE, an AI-education platform, and a coding-test suite — and its surfaces read like calm, engineered software documentation rather than a hard-sell SaaS pitch. The canvas is pure white (`#ffffff`) broken up by a barely-there cool-grey surface (`#f7f7f7`) that segments sections without weight. Text sits in a confident near-black (`#262626`) — never pure black — with a muted slate ladder beneath it (`#4c4c4c` → `#5d5d5d` → `#393939` → faint `#a3a3a3`) doing the hierarchy work. The single saturated brand action color is an interactive blue (`#2a72e5`), the primary of goorm's open-source design system **Vapor UI**, with deeper blues (`#0957c8` active, `#0043b3` link) for selected tabs and inline links. The result feels like a well-built developer tool: quiet, legible, and trustworthy.

The typographic personality is **Pretendard Variable** end-to-end — the de-facto Korean product font, optimized for dense hangul-plus-latin legibility. Display headlines run heavy: the Vapor docs H1 is 48px at weight 800 (ExtraBold) in `#262626`, while the goorm.co marketing hero ("AX, 구름과 함께 시작해보세요") takes the same 48px size down to a lighter weight 500 with tight `-0.4px` tracking — a softer, more editorial register. Section titles land at 32px / 700. Body and UI text drop to a quiet 16px / 400, and interface labels to 14px (nav at weight 600, buttons at weight 500). One family, two jobs: heavy where it announces, light where it informs.

What distinguishes goorm from flashier dev-tool brands is its restraint with depth. Elevation is almost entirely flat — separation comes from thin hairlines (`#e1e1e1`) and slightly stronger `#c6c6c6` inset borders rather than drop shadows, with the geometry locked to an 8px corner radius across buttons, inputs, and controls (12px on cards and search fields, full `9999px` pills on badges, `50%` on avatars). Semantic state lives in a Adobe-Leonardo-generated tint family — success green `#058765` on `#bbecd7`, danger red `#da3944` on `#ffd8d7`, info blue on `#c6e6ff`, warning on `#ffd9c8` — so status reads instantly without breaking the otherwise monochrome calm. It's a system engineered to disappear behind the work.

**Key Characteristics:**
- Pretendard Variable for everything — ExtraBold (800) display, 400 body, hangul-optimized
- Single interactive blue (`#2a72e5`) as the Vapor UI primary action color
- Deeper blues for state — `#0957c8` active tab/selection, `#0043b3` inline link
- Near-black ink (`#262626`) for text and the dark marketing CTA, never pure black
- Flat, hairline-driven elevation — `#e1e1e1` borders and `#c6c6c6` inset strokes, not shadows
- 8px corner radius as the workhorse; full `9999px` pills only on badges
- Leonardo-generated semantic tints (`#c6e6ff` / `#bbecd7` / `#ffd8d7` / `#ffd9c8`) for status
- Cool-grey neutral ladder (`#4c4c4c` → `#5d5d5d` → `#393939` → `#a3a3a3`) on a `#f7f7f7` surface

## 2. Color Palette & Roles

### Primary & Interactive
- **Vapor Blue** (`#2a72e5`): Primary brand and action color. The saturated blue on Vapor UI primary buttons (Save, "Public으로 변경", "45 포인트 획득") and the goorm.co accent — the system's "do this" color, also the focus-ring color on inputs.
- **Active Blue** (`#0957c8`): Selected-state blue — active docs tab text and its 2px underline indicator, selection highlights.
- **Link Blue** (`#0043b3`): Inline text-link color and info-badge foreground; a deep, high-contrast blue for reading-flow links.

### Ink & Text Hierarchy
- **Ink** (`#262626`): Primary text, headings, nav labels, and the dark marketing CTA background. A warm near-black used instead of pure black.
- **Secondary Slate** (`#4c4c4c`): Docs side-nav links, secondary labels, inactive tabs.
- **Muted Slate** (`#5d5d5d`): Tertiary text, captions, version tags.
- **Tertiary Slate** (`#393939`): Icon-button glyphs and dense control text.
- **Faint Grey** (`#a3a3a3`): Disabled text, placeholders, lowest-emphasis labels.

### Neutral & Surface
- **Canvas White** (`#ffffff`): Page background, card and input surfaces, text on blue/dark, and the `on-primary` foreground.
- **Surface Grey** (`#f7f7f7`): Cool-grey tinted surface for segmented sections and secondary panels.
- **Hairline** (`#e1e1e1`): Thin borders, dividers, input outlines, and the neutral/secondary button fill — the primary separation device in this shadow-light system.
- **Border Strong** (`#c6c6c6`): Slightly heavier inset border for outlined buttons and emphasized field edges.

### Semantic & Tints
- **Success Green** (`#058765`): Positive status text/icon, paired with the success tint.
- **Danger Red** (`#da3944`): Error and destructive status, paired with the danger tint.
- **Info Tint** (`#c6e6ff`): Light-blue badge/callout background for info and default tags.
- **Success Tint** (`#bbecd7`): Light-green background for success badges.
- **Danger Tint** (`#ffd8d7`): Light-red background for error badges.
- **Warning Tint** (`#ffd9c8`): Light-orange background for warning callouts.

## 3. Typography Rules

### Font Family
- **Sans (all text)**: `Pretendard Variable` (with the system Pretendard / Apple SD Gothic Neo / Noto Sans KR fallback stack) — used for display, UI, and body alike. ExtraBold (800) at display sizes, 400 for body.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Pretendard Variable | 48px (3.00rem) | 800 | ~1.2 | normal | Vapor docs H1, landing headline |
| Display Soft | Pretendard Variable | 48px (3.00rem) | 500 | ~1.2 | -0.4px | goorm.co marketing hero (lighter register) |
| Section Heading | Pretendard Variable | 32px (2.00rem) | 700 | ~1.3 | normal | Section titles (H2) |
| Nav Item | Pretendard Variable | 14px (0.88rem) | 600 | 1.4 | normal | Top-nav buttons on goorm.co |
| Body | Pretendard Variable | 16px (1.00rem) | 400 | 1.5 | normal | Standard reading text |
| Button | Pretendard Variable | 14px (0.88rem) | 500 | 1.0 | normal | Default button / docs UI label |
| Button Large | Pretendard Variable | 16px (1.00rem) | 500 | 1.0 | normal | Large marketing CTA label |
| Caption / Side-nav | Pretendard Variable | 14px (0.88rem) | 400 | 1.4 | normal | Docs side-nav link, muted meta |

### Principles
- **One family, two registers**: Pretendard ExtraBold (800) announces; Pretendard 400 informs. The weight jump is the primary hierarchy signal.
- **Two display moods**: the same 48px headline runs at 800 in product/docs (declarative) and at 500 with `-0.4px` tracking on marketing (editorial, softer).
- **Hangul-first sizing**: body sits at a comfortable 16px and UI at 14px — generous for mixed hangul-latin reading, dense enough for tool chrome.
- **Quiet UI weight**: interface labels stay at weight 500-600, never bold — the loudness is reserved for headlines.

## 4. Component Stylings

### Buttons

**Primary (Vapor UI)**
- Background: `#2a72e5`
- Text: `#ffffff`
- Radius: 8px
- Padding: 0px 16px
- Height: 40px
- Font: 14px / 500 / Pretendard Variable
- Use: Primary action — Vapor UI primary ("Save", "Public으로 변경", "45 포인트 획득")

**Secondary (Neutral)**
- Background: `#e1e1e1`
- Text: `#262626`
- Radius: 8px
- Padding: 0px 16px
- Height: 40px
- Font: 14px / 500 / Pretendard Variable
- Use: Secondary / cancel action ("취소", "Docs 보러 가기")

**Outline**
- Background: `#ffffff`
- Text: `#262626`
- Border: 1px solid `#c6c6c6`
- Radius: 8px
- Padding: 0px 16px
- Height: 40px
- Font: 14px / 500 / Pretendard Variable
- Use: Outlined action — rendered via a 1px inset `#c6c6c6` border

**Marketing CTA (Dark)**
- Background: `#262626`
- Text: `#ffffff`
- Radius: 8px
- Padding: 0px 24px
- Height: 48px
- Font: 16px / 500 / Pretendard Variable
- Use: goorm.co marketing primary call-to-action ("도입 문의하기")

### Inputs & Forms

**Text Field**
- Background: `#ffffff`
- Text: `#262626`
- Border: 1px solid `#e1e1e1`
- Radius: 8px
- Padding: 0px 24px
- Height: 48px
- Font: 16px / 400 / Pretendard Variable
- Focus: ring in `#2a72e5`
- Use: Default text input (e.g. "크레딧 개수") — border applied as a 1px inset shadow

### Cards & Containers

**Content Card**
- Background: `#ffffff`
- Border: 1px solid `#e1e1e1`
- Radius: 12px
- Use: Content card / panel sitting on the `#f7f7f7` surface, no shadow

### Tabs

**Docs Tab**
- Text (inactive): `#4c4c4c`
- Active: text `#0957c8` + 2px bottom border `#0957c8`
- Radius: 8px 8px 0px 0px
- Font: 14px / 500 / Pretendard Variable
- Use: Docs "Preview / Code" toggle and section navigation

### Badges

**Info (Default)**
- Background: `#c6e6ff`
- Text: `#0043b3`
- Radius: 9999px
- Font: 12px / 500 / Pretendard Variable
- Use: Info / default tag

**Success**
- Background: `#bbecd7`
- Text: `#058765`
- Radius: 9999px
- Font: 12px / 500 / Pretendard Variable
- Use: Positive / success status

**Danger**
- Background: `#ffd8d7`
- Text: `#da3944`
- Radius: 9999px
- Font: 12px / 500 / Pretendard Variable
- Use: Error / destructive status

**Neutral**
- Background: `#e1e1e1`
- Text: `#262626`
- Radius: 9999px
- Font: 12px / 500 / Pretendard Variable
- Use: Neutral count / label

---

**Verified:** 2026-06-26 (omd:add-reference CREATE — Tier 1 live inspect, 2 surfaces)
**Tier 1 sources:** https://goorm.co, https://vapor-ui.goorm.io, https://github.com/goorm-dev/vapor-ui, https://tech.goorm.io
**Tier 2 sources:** getdesign.md/goorm — not listed (404); styles.refero.design — no goorm-specific style entry
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px
- Notable: control padding clusters at 0×12/16/24px horizontal with fixed heights (32/40/48px); nav items use 8px×12px

### Grid & Container
- Centered, generous-margin content column with a sticky top nav (40px-tall nav buttons)
- Docs use a left side-nav (14px / 400 links) + main content + on-page table of contents
- Feature/marketing sections alternate white (`#ffffff`) and tinted grey (`#f7f7f7`) full-width bands
- Cards group related controls at 12px radius with a `#e1e1e1` hairline

### Whitespace Philosophy
- **Calm density**: developer tooling that stays airy — generous vertical rhythm between sections, tight only inside controls.
- **Flat segmentation**: sections separate by background tint (`#f7f7f7` vs `#ffffff`) and hairlines, not by elevation.
- **Consistent radius rhythm**: the repeated 8px corner across controls creates a quiet, engineered cadence.

### Border Radius Scale
- Small (6px): compact icon buttons, inner chips
- Medium (8px): buttons, inputs, controls — the workhorse
- Large (12px): cards, search fields, popovers
- XL (16px): large containers / media blocks
- Full (9999px): badges, pills; `50%` for avatars

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline text, most surfaces |
| Tint (Level 1) | `#f7f7f7` background shift | Section / panel separation without elevation |
| Hairline (Level 2) | `1px solid #e1e1e1` border (or inset) | Card outlines, input edges, dividers |
| Inset Strong (Level 3) | `rgb(198, 198, 198) 0px 0px 0px 1px inset` | Outlined buttons, emphasized field edges |

**Shadow Philosophy**: goorm runs a near-shadowless system. Live inspection found `box-shadow: none` across nav, headings, cards, and most buttons; where a border is needed it is drawn as a 1px **inset** shadow (`#e1e1e1` for inputs, `#c6c6c6` for outline buttons) rather than an outer drop shadow. Depth and grouping come from flat tinted surfaces (`#f7f7f7`) and thin hairlines. This keeps the developer UI feeling fast, precise, and uncluttered. When emphasis is needed, the system reaches for color (Vapor blue `#2a72e5`) or the dark ink fill (`#262626`), never elevation.

## 7. Do's and Don'ts

### Do
- Use Pretendard Variable for everything — ExtraBold (800) for display, 400 for body
- Reserve Vapor blue (`#2a72e5`) for the primary action — keep it the single "do this" color
- Use the deeper blues for state — `#0957c8` for active tabs/selection, `#0043b3` for inline links
- Use near-black ink (`#262626`) for text and the dark marketing CTA instead of pure black
- Separate sections with `#f7f7f7` tint and `#e1e1e1` hairlines, not drop shadows
- Keep corners at 8px for controls; reserve full `9999px` pills for badges
- Use the Leonardo semantic tints (`#c6e6ff` / `#bbecd7` / `#ffd8d7` / `#ffd9c8`) for status, not for decoration
- Draw borders as 1px inset strokes (`#e1e1e1` / `#c6c6c6`) to stay flat

### Don't
- Use drop shadows for elevation — goorm is a flat, hairline-driven system
- Spread the Vapor blue across many elements — it dilutes the single-action signal
- Use pure black (`#000000`) for body text — reserve near-black ink `#262626`
- Set big pill radii on buttons or cards — controls are 8px, cards 12px
- Mix in a second saturated accent hue — blue is the only brand action color
- Set headlines in a light weight in product/docs — display is ExtraBold (800) there
- Use the semantic tints as background decoration — they carry status meaning only
- Use heavy slate text on light surfaces below `#a3a3a3` contrast — keep the muted ladder readable

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, nav collapses to a toggle, controls stack full-width |
| Tablet | 640-1024px | Moderate padding, 2-up feature cards, side-nav may collapse |
| Desktop | 1024-1440px | Full layout — sticky top nav, docs side-nav + content + TOC |

### Touch Targets
- Buttons at 40px (default) and 48px (large CTA) — comfortably tappable
- Inputs at 48px height with 24px horizontal padding
- Nav items at 40px with 8px×12px padding

### Collapsing Strategy
- Top nav: horizontal items + CTA → hamburger toggle on mobile
- Docs: side-nav collapses to a drawer; TOC drops below content
- Feature bands: multi-column → stacked single column
- Tinted/white alternating sections keep full-width treatment

### Image Behavior
- Product screenshots and theme previews stay flat (no shadow) at all sizes
- Cards keep the 12px radius and `#e1e1e1` hairline across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary action: Vapor Blue (`#2a72e5`)
- Active / selection: Active Blue (`#0957c8`)
- Inline link: Link Blue (`#0043b3`)
- Text / heading / dark CTA: Ink (`#262626`)
- Secondary text: Secondary Slate (`#4c4c4c`)
- Muted text: Muted Slate (`#5d5d5d`)
- Faint / disabled: Faint Grey (`#a3a3a3`)
- Background: Canvas White (`#ffffff`)
- Surface: Surface Grey (`#f7f7f7`)
- Hairline: `#e1e1e1`; Strong border: `#c6c6c6`
- Success: `#058765` on `#bbecd7`; Danger: `#da3944` on `#ffd8d7`; Info on `#c6e6ff`; Warning on `#ffd9c8`

### Example Component Prompts
- "Create a docs hero on white. Headline 48px Pretendard Variable weight 800, color #262626. Primary button #2a72e5 background, white text, 8px radius, 0×16px padding, 40px tall, 14px/500. Secondary button #e1e1e1 background, #262626 text, same geometry."
- "Design a feature card: white #ffffff background, 1px solid #e1e1e1 border, 12px radius, no shadow. Title 32px Pretendard weight 700, #262626. Body 16px weight 400, #4c4c4c."
- "Build a text input: white background, 1px inset #e1e1e1 border, 8px radius, 48px height, 0×24px padding, 16px/400 #262626, focus ring #2a72e5."
- "Create docs tabs: inactive text #4c4c4c, active text #0957c8 with a 2px #0957c8 bottom border, 14px/500."
- "Build semantic badges, 9999px pill, 12px/500: info #c6e6ff bg / #0043b3 text; success #bbecd7 bg / #058765 text; danger #ffd8d7 bg / #da3944 text; neutral #e1e1e1 bg / #262626 text."

### Iteration Guide
1. Pretendard Variable everywhere; weight 800 for display, 400 for body, 500-600 for UI
2. Vapor blue (`#2a72e5`) is the single action color — don't spread it
3. No drop shadows — separate with `#f7f7f7` tint and `#e1e1e1` / `#c6c6c6` inset borders
4. 8px radius on controls, 12px on cards, 9999px pills only on badges
5. Text is `#262626` ink, never pure black; muted ladder is `#4c4c4c` → `#5d5d5d` → `#a3a3a3`
6. Active/selection blue is `#0957c8`; inline links are `#0043b3`
7. Status uses the Leonardo tint family, never as decoration

---

## 10. Voice & Tone

goorm's voice is **encouraging, plain-spoken, and growth-oriented** — a developer-experience company that lowers the barrier to "becoming a developer" rather than gatekeeping it. The TechBlog states the mission directly: "We are creating an ecosystem centered on developer growth." The marketing register pairs an ambitious English line ("Superpowers, for everyone") with an approachable Korean invitation ("AX, 구름과 함께 시작해보세요" — "Start AX with goorm"). Copy treats the reader as a capable learner who deserves clear tools, not a lead to be pressured.

| Context | Tone |
|---|---|
| Hero headlines | Aspirational but grounded. "Superpowers, for everyone." Confident, not hype. |
| Product / nav labels | Plain and functional. "제품", "솔루션", "리소스", "채용". |
| CTAs | Direct, low-pressure. "도입 문의하기", "더 알아보기", "Docs 보러 가기". |
| Docs / developer copy | Precise, example-first, peer-to-peer. Component docs lead with a live preview. |
| Education / community | Mentoring, inclusive. Frames coding as learnable by anyone. |

**Voice samples:**
- "Superpowers, for everyone" — goorm.co page title / brand line. *(verified live 2026-06-26)*
- "AX, 구름과 함께 시작해보세요." — goorm.co hero H2. *(verified live 2026-06-26)*
- "We are creating an ecosystem centered on developer growth." — tech.goorm.io tagline. *(verified via WebFetch 2026-06-26)*

**Forbidden register**: gatekeeping or elitist developer-speak, fear-based "you'll fall behind" urgency, undefined jargon left unexplained, exclamation-heavy hype.

## 11. Brand Narrative

goorm (구름) was founded in **2013** in South Korea, taking its name from the Korean word for "cloud" — fitting for a company whose first product was a fully cloud-based integrated development environment. The founding premise was radical for its time: a complete development environment that lives in the browser, removing the setup friction that kept many would-be developers from ever writing their first line of code. From that IDE grew an ecosystem — **goormIDE** (cloud development), **goormEDU / goormEXP** (a learning-experience platform), **goormDEVTH** (coding tests for hiring), goormLEVEL, and newer AI-era products like Arkain and EXP.

The through-line is a stated belief that "anyone can become a developer." goorm positions itself as the on-ramp to a developer-centered ecosystem, and by its own account its AI-education platform has surpassed one million subscribers — evidence that the accessibility mission resonates in the Korean market and beyond. The company's current framing has shifted toward **AX (AI Transformation)**, carrying the same democratizing intent into the AI era: superpowers, for everyone.

What goorm refuses, visible in its design: the intimidating, high-friction chrome of legacy developer tooling, and the elitism that treats coding as an exclusive craft. What it embraces — and recently open-sourced as **Vapor UI**, a WCAG-compliant React component library with a Leonardo-driven color system — is a flat, fast, accessible interface: one calm blue for action, near-black ink for content, hairlines instead of heavy shadows, and a single workhorse font (Pretendard) that reads cleanly in both Korean and English. The design is the message: development should feel approachable.

## 12. Principles

1. **Anyone can become a developer.** Accessibility is the founding mission. *UI implication:* keep flows low-friction and labels plain; never gate basic understanding behind jargon.
2. **Accessible by construction.** Vapor UI is WCAG-compliant with a Leonardo-generated, contrast-checked palette. *UI implication:* pair every semantic tint with a contrast-safe foreground; respect focus rings and keyboard paths.
3. **One action, one color.** Vapor blue (`#2a72e5`) means "do this." *UI implication:* reserve the saturated blue for the primary action so the next step is never ambiguous.
4. **Flat and fast.** Calm, uncluttered tooling beats decorative depth. *UI implication:* no drop shadows; separate with `#f7f7f7` tint and `#e1e1e1` / `#c6c6c6` inset borders.
5. **Announce loud, inform quiet.** *UI implication:* Pretendard ExtraBold for headlines that motivate; 400 for content that explains; 500-600 for restrained UI.
6. **Documentation is a product surface.** Component docs lead with a live preview. *UI implication:* show the real component first, the code second.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable goorm user segments (Korean coding learners, bootcamp / university students, engineers adopting Vapor UI, hiring teams running coding tests), not individual people.*

**한지우, 22, 대전.** A computer-science undergrad learning to code through goormEDU. Values that the whole environment runs in the browser — no local setup to fight before the first lesson. Chose goorm because it felt built for beginners, not for people who already know everything.

**박도현, 31, 판교.** A frontend engineer adopting Vapor UI for an internal tool. Cares about accessibility and a stable token system; appreciates that the docs lead with a live preview and that the palette is WCAG-checked. Dislikes component libraries that look good but ship inaccessible defaults.

**이서연, 38, 서울.** A technical hiring manager running candidate assessments on goormDEVTH. Wants a calm, unambiguous interface where the primary action is obvious and status (pass/fail/pending) reads at a glance through clear semantic color. Trusts the brand's plain, non-hype tone.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no items / first run)** | White canvas. Single Ink (`#262626`) line at body size explaining the empty state, with one Vapor blue (`#2a72e5`) primary CTA to begin. No illustration clutter. |
| **Empty (saved list, none yet)** | Muted Slate (`#5d5d5d`) single line: nothing here yet, plus a path back. Honest and calm. |
| **Loading (content fetch)** | Skeleton blocks on `#f7f7f7` at final dimensions, 8-12px radius. Flat pulse — no shadow shimmer, consistent with the shadow-light system. |
| **Loading (action in progress)** | Inline spinner inside the button; label stays, button stays its color. Never block the whole view. |
| **Error (request failed)** | Inline message in danger red (`#da3944`) on the danger tint (`#ffd8d7`), with a plain-language explanation and a retry. No bare "오류가 발생했습니다". |
| **Error (form validation)** | Field-level message below the input in the danger tone; describes what is valid, not just "필수". |
| **Success (saved / submitted)** | Brief inline confirmation in success green (`#058765`) on the success tint (`#bbecd7`); next-step detail linked below. No celebratory emoji. |
| **Skeleton** | `#f7f7f7` blocks at final dimensions, matching radius, flat pulse. |
| **Disabled** | Faint Grey (`#a3a3a3`) text on a reduced-opacity surface; Vapor-blue actions fade rather than turn grey to preserve brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, button press, focus ring |
| `motion-standard` | 200ms | Card / section reveal, dropdown, tab switch |
| `motion-slow` | 320ms | Page-level transitions, hero reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — sheets, dropdowns, cards |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is functional and quiet — consistent with the flat, fast aesthetic. Buttons and tabs respond to press/hover with a subtle color or opacity shift; the active-tab underline (`#0957c8`) slides at `motion-standard / ease-enter`; content fades in from slightly below. No bounce or spring — developer tooling signals steadiness, not playfulness. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and the product remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10-15)

Tier 1 live inspect (2026-06-26) via playwright getComputedStyle:
- https://goorm.co — body Pretendard Variable / rgb(38,38,38) #262626 on #ffffff; nav buttons 14px/600 #262626 radius 8px; dark marketing CTA "도입 문의하기" bg rgb(38,38,38) #262626 white text radius 8px padding 0×24px h48; accent button bg rgb(42,114,229) #2a72e5; H2 hero "AX, 구름과 함께 시작해보세요." 48px/500/-0.4px; page title "goorm - Superpowers, for everyone"
- https://vapor-ui.goorm.io — Vapor UI docs; primary button "Save"/"Public으로 변경"/"45 포인트 획득" bg rgb(42,114,229) #2a72e5 white radius 8px 14px/500; secondary "취소"/"Docs 보러 가기" bg rgb(225,225,225) #e1e1e1 #262626; outline "100개 추가" inset rgb(198,198,198) #c6c6c6; input bg #fff inset rgb(225,225,225) #e1e1e1 radius 8px h48 padding 0×24px; H1 48px/800; H2 32px/700; tab active text rgb(9,87,200) #0957c8; badge tints rgb(198,230,255) #c6e6ff / rgb(187,236,215) #bbecd7 / rgb(255,216,215) #ffd8d7 / rgb(255,217,200) #ffd9c8; success rgb(5,135,101) #058765; link rgb(0,67,179) #0043b3

Brand-owned Tier 1 sources confirmed live this turn:
- https://goorm.co (live-inspected)
- https://vapor-ui.goorm.io (live-inspected, Vapor UI design system docs)
- https://github.com/goorm-dev/vapor-ui (official GitHub org — Vapor UI repo, "open-source UI component library", 34+ accessible components, @vapor-ui/color-generator built on Adobe Leonardo, @vapor-ui/css-generator) — WebFetch 2026-06-26
- https://tech.goorm.io (official TechBlog — tagline "We are creating an ecosystem centered on developer growth"; products goormIDE/goormEDU/goormLEVEL/Devth/Arkain/EXP) — WebFetch 2026-06-26
- https://blog.goorm.io/design/ (official design blog — brand symbol, UX writing, BX design) — WebFetch 2026-06-26

Tier 2 (cross-check, not counted toward KR regional rule):
- getdesign.md/goorm — "No designs found" (404-equivalent), 2026-06-26
- styles.refero.design/?q=goorm — no goorm-specific style entry returned (only generic trending list), 2026-06-26

Brand narrative (§11): goorm founded 2013 (South Korea); name = Korean for "cloud"; mission "anyone can become a developer"; cloud IDE → education (goormEDU/EXP) → coding test (goormDEVTH) ecosystem; AI-education platform 1M+ subscribers; current framing AX (AI Transformation). Sourced from tech.goorm.io (WebFetch), goorm.co (live), GitHub goorm-dev/vapor-ui (WebFetch), and public company profiles (CB Insights / PitchBook / KoreaTechDesk) found via WebSearch 2026-06-26. Founding-year and subscriber figures are widely reported public facts, not quoted from a single verified goorm statement.

Voice samples (§10) are verbatim from the live homepage (page title, hero H2) and the TechBlog tagline (WebFetch).

Personas (§13) are fictional archetypes informed by publicly observable goorm user segments (coding learners, students, engineers adopting Vapor UI, hiring teams). Names are illustrative; they do not refer to real people.

Interpretive claims (e.g., "the design is the message: development should feel approachable", "one action, one color") are editorial readings connecting goorm's observed design and stated mission, not directly sourced goorm statements.
-->
