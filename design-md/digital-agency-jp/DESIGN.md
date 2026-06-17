---
id: digital-agency-jp
name: Digital Agency Design System (DADS)
country: JP
category: government
homepage: "https://design.digital.go.jp/"
primary_color: "#0017c1"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=digital.go.jp&sz=128"
verified: "2026-06-17"
added: "2026-06-17"
omd: "0.1"
ds:
  name: Digital Agency Design System (DADS)
  url: "https://design.digital.go.jp/dads/"
  type: system
  description: "Japan Digital Agency (デジタル庁) official government design system — design language, accessibility/usability guidelines, Figma data, HTML + React component snippets, CC BY 4.0."
tokens:
  source: live-extract
  extracted: "2026-06-17"
  note: "primary = live solid-fill blue (#0017c1, rgb(0,23,193)) on the search button and outline-button borders; link/heading blue (#00118f, rgb(0,17,143)) is the darker text-on-white accent. Body text near-black #333333; surfaces grey #f2f2f2/#e6e6e6; semantic red #ec0000 / green #197a4b confirmed in the button-page color scan."
  colors:
    primary: "#0017c1"
    primary-hover: "#00118f"
    link: "#00118f"
    canvas: "#ffffff"
    ink: "#333333"
    ink-strong: "#1a1a1a"
    ink-pure: "#000000"
    muted: "#666666"
    muted-alt: "#767676"
    hairline: "#949494"
    surface: "#f2f2f2"
    surface-alt: "#e6e6e6"
    tint-blue: "#e8f1fe"
    tint-blue-selected: "#d9e6ff"
    error: "#ec0000"
    success: "#197a4b"
    on-primary: "#ffffff"
  typography:
    family: { sans: "Noto Sans JP" }
    display:    { size: 32, weight: 700, lineHeight: 1.50, use: "Section headline (H2), Noto Sans JP Bold" }
    heading:    { size: 20, weight: 700, lineHeight: 1.50, use: "Page title (H1) / card heading (H3)" }
    body-lg:    { size: 17, weight: 400, lineHeight: 1.70, use: "Default body text, generous CJK line-height" }
    body:       { size: 16, weight: 400, lineHeight: 1.50, use: "UI text, nav links, button labels" }
    nav:        { size: 16, weight: 400, lineHeight: 1.50, use: "Header nav items" }
    button:     { size: 16, weight: 700, lineHeight: 1.50, use: "Button label, Bold" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 8, md: 16, full: 9999 }
  shadow:
    none: "none"
  components:
    button-filled: { type: button, bg: "#0017c1", fg: "#ffffff", radius: "8px", height: "48px", padding: "8px 16px", font: "16px / 700 Noto Sans JP", use: "Primary filled action — search submit, key CTA", states: "hover #00118f" }
    button-outline: { type: button, bg: "#ffffff", fg: "#0017c1", border: "1px solid #0017c1", radius: "8px", height: "56px", padding: "12px 16px", font: "16px / 700 Noto Sans JP", use: "Secondary outline action — section anchors", states: "hover bg #e8f1fe" }
    button-text: { type: button, fg: "#00118f", font: "17px / 400 Noto Sans JP", use: "Inline text link button (e.g. Figma file link)" }
    input-text: { type: input, bg: "#ffffff", fg: "#1a1a1a", border: "1px solid #666666", radius: "8px", height: "48px", padding: "0 16px", font: "16px / 400 Noto Sans JP", use: "Search box / text input, focus blue #0017c1" }
    card-canvas: { type: card, bg: "#ffffff", fg: "#333333", border: "1px solid #949494", radius: "16px", padding: "24px", use: "Content navigation card, no shadow, #00118f heading" }
    nav-link: { type: tab, fg: "#333333", font: "16px / 400 Noto Sans JP", padding: "10px 16px", active: "text #00118f + 2px bottom border #0017c1", use: "Header navigation item" }
    chip-blue: { type: badge, bg: "#e8f1fe", fg: "#00118f", radius: "8px", font: "16px / 400 Noto Sans JP", use: "Selected / informational chip tint" }
    error-text: { type: badge, fg: "#ec0000", font: "16px / 400 Noto Sans JP", use: "Field-level error message colour" }
  components_harvested: true
---

# Design System Inspiration of Digital Agency Design System (DADS)

## 1. Visual Theme & Atmosphere

The Digital Agency Design System (デジタル庁デザインシステム, DADS) is the official design system of Japan's Digital Agency (デジタル庁), published openly at `design.digital.go.jp/dads/` under CC BY 4.0. Its job is the opposite of a consumer brand's: not to delight or differentiate, but to make government services legible, accessible, and trustworthy for every citizen — including those on low-end devices, with low vision, or with low digital fluency. The result is a system of deliberate, almost austere clarity. The canvas is pure white (`#ffffff`); body text sits in a calm near-black (`#333333`) — softened off pure black for long-form readability — and the entire identity hangs on a single confident government blue (`#0017c1`).

That blue does two jobs. As a solid fill (`#0017c1`, the search-submit button) it is "the action," and as a darker text-weight variant (`#00118f`) it carries every link, every card heading, and every interactive label on white. This two-step blue — a saturated fill for surfaces, a deeper navy-blue for text-on-white — is the system's core contrast strategy, chosen so that link text clears WCAG contrast against white while filled buttons stay vivid. There is no second accent hue competing for attention; semantic colour is reserved strictly for meaning (error red `#ec0000`, success green `#197a4b`).

The typographic voice is unmistakably Japanese-civic: the stack leads with **Noto Sans JP** (`"Noto Sans", "Noto Sans JP", system-ui, sans-serif`), the open-source CJK workhorse chosen precisely because it renders consistently across every government device and platform without licensing friction. Body runs at a generous 17px with a roomy 1.7 line-height — wide leading is a CJK-legibility decision, giving dense kanji and kana room to breathe. Headlines step up to Bold (weight 700) at 20px (page title) and 32px (section) but never shout; weight, not size, carries hierarchy. Depth is essentially absent — `box-shadow: none` across the hero, nav, cards, and buttons. Separation comes from thin `#949494` hairlines, flat grey surfaces (`#f2f2f2`, `#e6e6e6`), and an 8px/16px radius scale that reads as friendly-but-serious. This is design as public infrastructure: quiet, accessible, and built to be copied by every ministry.

**Key Characteristics:**
- Single government blue: solid fill `#0017c1` for actions, deeper `#00118f` for text-on-white links/headings
- Noto Sans JP as the mandated open-source CJK typeface — consistent cross-device government rendering
- Near-black `#333333` body text instead of pure black — softer for long-form civic reading
- Generous CJK line-height (1.7 on 17px body) for kanji/kana legibility
- Flat, shadow-free system — `box-shadow: none`; separation via `#949494` hairlines and grey surfaces
- Restrained radius scale (8px inputs/buttons, 16px cards) — approachable but institutional
- Semantic colour reserved for meaning only — error red `#ec0000`, success green `#197a4b`
- Accessibility-first: high contrast, large 48–56px touch targets, CC BY 4.0 openness

## 2. Color Palette & Roles

### Primary
- **Government Blue** (`#0017c1`): Primary action colour. Solid fill on the search-submit button (`rgb(0, 23, 193)`), and the 1px border + text colour of outline buttons. The system's single "action" hue.
- **Link Blue** (`#00118f`): Deeper navy-blue (`rgb(0, 17, 143)`) used for all text-on-white links, card headings (H3), and inline link buttons. The text-weight companion to the fill blue, tuned for contrast against white.
- **Pure White** (`#ffffff`): Page background, card surfaces, text on the blue fill.

### Text Hierarchy
- **Ink** (`#333333`): Default body and heading text (`rgb(51, 51, 51)`) — near-black, the dominant foreground colour across the page.
- **Ink Strong** (`#1a1a1a`): Input field text (`rgb(26, 26, 26)`) — a slightly deeper near-black for entered values.
- **Pure Black** (`#000000`): Occasional maximum-contrast text accent.
- **Muted** (`#666666`): Secondary text and the homepage search-input border (`rgb(102, 102, 102)`).
- **Muted Alt** (`#767676`): Tertiary / placeholder-level grey (`rgb(118, 118, 118)`), the minimum AA-passing grey on white.

### Surface & Borders
- **Hairline** (`#949494`): Card and container border (`rgb(148, 148, 148)`) — the primary separation device in this shadow-free system.
- **Surface Grey** (`#f2f2f2`): Flat tinted surface (`rgb(242, 242, 242)`) for content blocks and code samples.
- **Surface Alt** (`#e6e6e6`): A darker grey surface (`rgb(230, 230, 230)`) for alternating / nested blocks.
- **Tint Blue** (`#e8f1fe`): Soft blue tint (`rgb(232, 241, 254)`) for informational chips and hover backgrounds.
- **Tint Blue Selected** (`#d9e6ff`): Stronger blue tint (`rgb(217, 230, 255)`) for selected/active states.

### Semantic
- **Error Red** (`#ec0000`): Error text and destructive indicators (`rgb(236, 0, 0)`).
- **Success Green** (`#197a4b`): Success and confirmation indicators (`rgb(25, 122, 75)`).

## 3. Typography Rules

### Font Family
- **Primary**: `Noto Sans JP`, declared as the stack `"Noto Sans", "Noto Sans JP", -apple-system, system-ui, sans-serif`. The open-source CJK typeface is mandated so every government surface renders identically without font-licensing barriers.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Section Heading (H2) | Noto Sans JP | 32px (2.00rem) | 700 | 1.50 (48px) | Major section titles |
| Page Title (H1) | Noto Sans JP | 20px (1.25rem) | 700 | 1.50 | Site/page title in header |
| Card Heading (H3) | Noto Sans JP | 20px (1.25rem) | 700 | 1.50 | Card titles, in Link Blue `#00118f` |
| Body Large | Noto Sans JP | 17px (1.06rem) | 400 | 1.70 (28.9px) | Default body — generous CJK leading |
| Body / UI | Noto Sans JP | 16px (1.00rem) | 400 | 1.50 | Nav links, body UI text |
| Button | Noto Sans JP | 16px (1.00rem) | 700 | 1.50 | Button labels — Bold |

### Principles
- **Weight carries hierarchy, not just size**: Headings are Bold (700) while body stays Regular (400); the jump from 16px body to 20px heading is modest, so weight does the heavy lifting.
- **Generous CJK leading**: The 17px body runs at 1.70 line-height (28.9px) — wide leading gives kanji and kana density room to remain legible.
- **One typeface, every surface**: Noto Sans JP is the sole family. No display/body split, no decorative type — consistency across ministries and devices is the goal.
- **Civic restraint**: No italics, no condensed weights, no letter-spacing tricks. The type reads as neutral, official, and accessible.

## 4. Component Stylings

### Buttons

**Filled (Primary)**
- Background: `#0017c1`
- Text: `#ffffff`
- Radius: 8px
- Padding: 8px 16px
- Height: 48px
- Font: 16px Noto Sans JP weight 700
- Hover: `#00118f` background
- Use: Primary action — search submit ("検索"), key CTAs

**Outline (Secondary)**
- Background: `#ffffff`
- Text: `#0017c1`
- Border: 1px solid `#0017c1`
- Radius: 8px
- Padding: 12px 16px
- Height: 56px
- Font: 16px Noto Sans JP weight 700
- Hover: `#e8f1fe` background tint
- Use: Secondary actions — section anchor links ("ヘッダーコンテナ: 概要")

**Text Link**
- Text: `#00118f`
- Font: 17px Noto Sans JP weight 400
- Use: Inline link button (e.g. "v2.0.0以降のFigmaファイル")

### Inputs & Forms

**Text Input / Search Box**
- Background: `#ffffff`
- Text: `#1a1a1a`
- Border: 1px solid `#666666`
- Radius: 8px
- Padding: 0 16px (48px left pad when icon present)
- Height: 48px
- Font: 16px Noto Sans JP weight 400
- Focus: blue `#0017c1` border
- Use: Search box and standard text fields

### Cards & Containers

**Navigation Card**
- Background: `#ffffff`
- Text: `#333333`
- Border: 1px solid `#949494`
- Radius: 16px
- Padding: 24px
- Use: Content navigation cards (はじめに / ガイダンス / 基本デザイン) — heading in Link Blue `#00118f`, no shadow

### Badges & Chips

**Informational Chip**
- Background: `#e8f1fe`
- Text: `#00118f`
- Radius: 8px
- Font: 16px Noto Sans JP weight 400
- Use: Selected / informational chip tint

**Error Indicator**
- Text: `#ec0000`
- Font: 16px Noto Sans JP weight 400
- Use: Field-level error message colour

### Navigation
- Background: `#ffffff`
- Text: `#333333`
- Font: 16px Noto Sans JP weight 400
- Padding: 10px 16px
- Active: Link Blue `#00118f` text + 2px bottom border `#0017c1`
- Use: Top horizontal header nav (はじめに / ガイダンス / 基本デザイン / コンポーネント / リソース / お知らせ)

---

**Verified:** 2026-06-17 (omd:add-reference CREATE — Tier 1 live inspect)
**Tier 1 sources:** https://design.digital.go.jp/ (DADS homepage, live computed style); https://design.digital.go.jp/dads/components/button/ (button component page, live computed style — filled/outline buttons + semantic colour scan)
**Tier 2 sources:** getdesign.md/digital-agency-jp — not listed (government DS, outside coverage); styles.refero.design — not listed
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px
- Notable: Card padding lands at 24px (measured); nav items use 10px/16px padding for comfortable 44px+ touch targets

### Grid & Container
- Centered content column with a fixed header containing the title, nav, and search box
- The homepage groups system entry points as a grid of bordered navigation cards (16px radius, `#949494` hairline)
- Sections separate by flat grey surfaces (`#f2f2f2`, `#e6e6e6`) and hairlines rather than elevation
- Component docs use a left rail + content layout typical of documentation systems

### Whitespace Philosophy
- **Clarity over density**: Government content prioritises scannability — generous vertical rhythm and 1.7 body leading keep dense Japanese text readable.
- **Flat segmentation**: blocks separate by background tint and `#949494` hairlines, never by shadow.
- **Touch-first sizing**: interactive targets sit at 44–56px tall for accessibility on touch devices.

### Border Radius Scale
- Small (8px): buttons, inputs, chips — the workhorse
- Medium (16px): cards and content containers
- Full (9999px): pills where used

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline text, most surfaces |
| Tint (Level 1) | `#f2f2f2` / `#e6e6e6` background shift | Block / section separation without elevation |
| Hairline (Level 2) | `1px solid #949494` border | Card and container outlines, dividers |

**Shadow Philosophy**: DADS is a near-shadowless system. Live inspection found `box-shadow: none` across the hero, header, navigation cards, and buttons. Depth and grouping are communicated entirely through flat tinted surfaces (`#f2f2f2`, `#e6e6e6`) and thin `#949494` hairlines. This is a deliberate accessibility-and-performance choice: flat surfaces render predictably across the full range of government-citizen devices, avoid the visual noise of stacked shadows, and keep focus on content and high-contrast colour. When emphasis is needed, the system reaches for the blue (`#0017c1` fill / `#00118f` text) or the blue tints (`#e8f1fe`, `#d9e6ff`), never elevation.

## 7. Do's and Don'ts

### Do
- Use solid government blue (`#0017c1`) for filled primary actions and outline-button borders/text
- Use the deeper Link Blue (`#00118f`) for all text-on-white links and card headings
- Use Noto Sans JP across every surface — it's the mandated open-source CJK typeface
- Use near-black `#333333` for body text instead of pure black
- Give body text generous line-height (1.7 on 17px) for CJK legibility
- Separate content with `#949494` hairlines and `#f2f2f2`/`#e6e6e6` grey surfaces, not shadows
- Keep radius restrained — 8px on buttons/inputs/chips, 16px on cards
- Reserve red (`#ec0000`) and green (`#197a4b`) strictly for error/success meaning
- Keep touch targets large (44–56px) for accessibility

### Don't
- Add a second accent hue — blue is the only brand colour; colour beyond it must carry meaning
- Use drop shadows for elevation — DADS is a flat, shadow-free system
- Use pure black (`#000000`) for body text — reserve near-black `#333333`
- Use the fill blue (`#0017c1`) for small text on white where contrast is tight — use Link Blue `#00118f`
- Substitute a non-CJK or licensed font — Noto Sans JP is mandated for cross-device consistency
- Use sharp 0px corners or oversized radii — stay in the 8–16px range
- Crowd Japanese text with tight line-height — keep CJK leading generous
- Use red or green decoratively — they are semantic-only

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <768px | Single column, header collapses to hamburger, cards stack |
| Tablet | 768-1024px | Moderate padding, 2-up card grid |
| Desktop | >1024px | Full layout, multi-column card grid, persistent header nav |

### Touch Targets
- Buttons at 48–56px height with 8–16px padding — comfortably tappable
- Search input at 48px height with a clear 48px icon affordance
- Nav items with 10px/16px padding land at 44px tall — meeting accessibility minimums

### Collapsing Strategy
- Header nav: horizontal links → hamburger menu button on mobile
- Navigation card grid: multi-column → 2-up → stacked single column
- Section headings (32px) reduce on mobile while weight 700 is maintained
- Grey/white alternating sections maintain full-width treatment

### Image Behavior
- Figma/component preview images and diagrams carry no shadow at any size, consistent with the flat system
- Cards maintain 16px radius across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary action (filled): Government Blue (`#0017c1`)
- Link / heading text: Link Blue (`#00118f`)
- Background: Pure White (`#ffffff`)
- Body text: Ink (`#333333`)
- Input text: Ink Strong (`#1a1a1a`)
- Muted text / border: Muted (`#666666`), Muted Alt (`#767676`)
- Hairline: `#949494`
- Surfaces: Surface Grey (`#f2f2f2`), Surface Alt (`#e6e6e6`)
- Blue tints: `#e8f1fe`, `#d9e6ff`
- Error: Red (`#ec0000`), Success: Green (`#197a4b`)

### Example Component Prompts
- "Create a government service header on white. Title at 20px Noto Sans JP weight 700, color #333333. Horizontal nav links at 16px weight 400, #333333, active item gets #00118f text + 2px bottom border #0017c1. Search box: white bg, 1px solid #666666 border, 8px radius, 48px tall, with a filled blue submit button (#0017c1 bg, white text, 8px radius, 16px weight 700)."
- "Design a navigation card: white background, 1px solid #949494 border, 16px radius, 24px padding, no shadow. Heading at 20px Noto Sans JP weight 700 in #00118f. Body at 17px weight 400, line-height 1.7, #333333."
- "Build an outline button: white bg, 1px solid #0017c1 border, #0017c1 text, 8px radius, 16px Noto Sans JP weight 700, 56px tall. Hover fills #e8f1fe."
- "Create a form field with error: input at white bg, 1px solid #666666, 8px radius, 48px tall; on error show #ec0000 message text below at 16px Noto Sans JP."

### Iteration Guide
1. Blue is the only brand colour — `#0017c1` for fills/borders, `#00118f` for text links and headings
2. Noto Sans JP everywhere; weight 700 for headings/buttons, 400 for body
3. No shadows — separate with `#949494` hairlines and `#f2f2f2`/`#e6e6e6` surfaces
4. Body text is `#333333` (never pure black); give it 1.7 line-height for CJK
5. Radius stays 8px (buttons/inputs/chips) to 16px (cards)
6. Red `#ec0000` and green `#197a4b` are semantic-only — never decorative
7. Keep touch targets 44–56px for accessibility

---

## 10. Voice & Tone

DADS's voice is **plain, neutral, and accessible** — the register of a public institution that must be understood by every citizen regardless of digital fluency. Copy is functional Japanese: section labels are direct nouns ("はじめに" / Introduction, "ガイダンス" / Guidance, "基本デザイン" / Basic Design, "コンポーネント" / Components), and instructions favour clarity over personality. There is no marketing tone, no superlatives, no exclamation — the system documents itself with the calm precision of a public manual.

| Context | Tone |
|---|---|
| Section / nav labels | Direct nouns. "はじめに", "ガイダンス", "コンポーネント", "リソース". |
| Component docs | Explanatory and precise — what the component is, when to use it, accessibility notes. |
| CTAs / actions | Plain imperatives. "検索" (Search). No hype. |
| Accessibility guidance | Concrete and rule-based — states the requirement plainly. |
| Versioning / notices | Factual. "デジタル庁デザインシステムβ版 v2.14.0" — states the version and beta status openly. |

**Voice samples (verbatim from live site):**
- "デジタル庁デザインシステムβ版" — site title, states beta status openly. *(verified live 2026-06-17, document.title)*
- "デジタル庁デザインシステムの構成" ("Composition of the Digital Agency Design System") — section H2, neutral explanatory framing. *(verified live 2026-06-17)*
- "本ウェブサイトのコンテンツ" ("Contents of this website") — section H2, plain descriptive label. *(verified live 2026-06-17)*

**Forbidden register**: marketing superlatives, emotional appeals, exclamation-heavy hype, undefined jargon, anything that reads as promotional rather than informational. Government content is for everyone — clarity beats cleverness.

## 11. Brand Narrative

The Digital Agency Design System (デジタル庁デザインシステム, DADS) is published by **Japan's Digital Agency (デジタル庁)**, the government body established on **September 1, 2021** to lead the digital transformation of Japan's public sector and to standardise the quality of government digital services. DADS exists to solve a structural problem: across hundreds of ministries, agencies, and local governments, public websites and services had been built inconsistently — varying in accessibility, usability, and trust. A shared, open design system lets every government team build services that are consistent, accessible, and recognisably part of the same trustworthy whole.

DADS is published openly at `design.digital.go.jp/dads/` under a **CC BY 4.0** licence, with design language, accessibility and usability guidelines, Figma libraries, and ready-to-use HTML and React component snippets. The "β版" (beta) labelling — visible in the live header as "v2.14.0" — is itself a statement of posture: the system is iterated in public, versioned transparently, and treated as evolving infrastructure rather than a finished brand artifact.

What DADS refuses, visible in its design: the visual flourish and persuasion of consumer branding (no second accent colour, no shadows, no decorative type) and the inconsistency of ad-hoc government sites. What it embraces: a single high-contrast government blue, the mandated open-source Noto Sans JP for universal CJK rendering, generous accessible spacing, and an openness (CC BY 4.0, public versioning) that mirrors its civic mission — design as shared public infrastructure.

## 12. Principles

1. **Accessibility is the baseline, not a feature.** High contrast, large touch targets, and a mandated legible CJK typeface are non-negotiable. *UI implication:* meet WCAG contrast (Link Blue `#00118f` for text on white), keep targets 44px+, never rely on colour alone to convey meaning.
2. **One blue, meaning-only colour.** A single brand blue carries identity; every other colour must mean something. *UI implication:* use `#0017c1`/`#00118f` for brand and action; reserve red `#ec0000` and green `#197a4b` strictly for error/success.
3. **Consistency across every ministry.** The system's value is that a citizen recognises the same patterns everywhere. *UI implication:* reuse the documented components and tokens verbatim; do not invent local variants.
4. **Flat clarity over decoration.** Trust comes from legibility, not visual flourish. *UI implication:* no shadows; separate with hairlines and grey surfaces; keep type and layout calm.
5. **Open and iterated in public.** CC BY 4.0, public versioning, and a β posture make the system improvable by everyone. *UI implication:* design for reuse and forking; document rationale and accessibility notes alongside every component.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable DADS user segments (government service teams, ministry developers, and the citizens they serve), not individual people.*

**佐藤 健, 38, 東京.** A front-end developer on a ministry digital-services team. Pulls DADS HTML/React snippets and Figma libraries to build a public-benefit application form. Values that the components ship with accessibility built in, so he doesn't have to re-derive contrast ratios and focus states for every project.

**田中 美咲, 45, 大阪.** A service designer at a local government office modernising a citizen-facing portal. Uses the DADS guidelines to justify design decisions to non-design stakeholders — the documented rationale and the CC BY 4.0 openness make it easy to adopt without procurement friction.

**鈴木 一郎, 67, 地方都市.** A citizen using a government service on an older Android phone with larger text settings. Never sees DADS by name, but benefits directly: high-contrast blue links he can read, large tappable buttons, and a calm uncluttered layout that doesn't overwhelm him.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no results)** | White canvas. Single Ink (`#333333`) line at body size explaining no matching results, with one filled blue (`#0017c1`) action to adjust the query. No decorative illustration. |
| **Empty (no saved items)** | Muted (`#666666`) single line stating nothing is saved yet, plus a plain path back. Calm and factual. |
| **Loading (content fetch)** | Skeleton blocks on `#f2f2f2` tinted surface at final dimensions, 16px radius. Flat pulse — no shadow shimmer, consistent with the shadowless system. |
| **Loading (in-place)** | Inline progress; previous content stays visible. No full-screen blocking. |
| **Error (request failed)** | Inline message in Error Red `#ec0000` with a plain-language explanation of what happened and what to do next. Never a bare generic error. |
| **Error (form validation)** | Field-level message in `#ec0000` below the input; input border shifts to indicate the error. Describes what is valid, not just "必須" (required). |
| **Success (action completed)** | Brief confirmation in Success Green `#197a4b` with next-step detail linked below. No celebratory flourish. |
| **Skeleton** | `#f2f2f2` blocks at final dimensions, 16px radius, flat pulse. |
| **Disabled** | Muted Alt (`#767676`) text on a reduced-contrast surface; the affordance is clearly non-interactive while remaining readable. |
| **Focus** | Visible focus ring in government blue `#0017c1` on every interactive element — a hard accessibility requirement. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, focus, press |
| `motion-standard` | 200ms | Disclosure/accordion expand, dropdown, sheet |
| `motion-slow` | 320ms | Page-level transitions |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — disclosures, dropdowns, sheets |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is minimal, functional, and quiet — consistent with an accessibility-first government system. Disclosures and accordions expand at `motion-standard / ease-enter`; hover and focus respond at `motion-fast`. No bounce, no spring, no decorative animation — public infrastructure signals steadiness and predictability. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and the interface remains fully functional. Motion must never be the sole carrier of meaning.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-17) via playwright getComputedStyle:
- https://design.digital.go.jp/ (DADS homepage) — title "デジタル庁デザインシステムβ版",
  body Noto Sans JP / 17px / line-height 28.9px (1.70) / color rgb(51,51,51) #333333;
  search submit button bg rgb(0,23,193) #0017c1 / white text / 8px radius / weight 700;
  search input bg #ffffff / 1px solid rgb(102,102,102) #666666 / 8px radius / 48px / text rgb(26,26,26) #1a1a1a;
  nav links color rgb(51,51,51) / 16px / 10px 16px padding; section H2 32px/700;
  card H3 color rgb(0,17,143) #00118f / 20px / 700; navigation card bg #ffffff /
  1px solid rgb(148,148,148) #949494 / 16px radius / 24px padding / box-shadow none.
- https://design.digital.go.jp/dads/components/button/ (button component page) —
  filled button rgb(0,23,193) #0017c1 white text 8px; outline button bg #ffffff /
  1px solid rgb(0,23,193) / text rgb(0,23,193) / 8px radius / 56px / 12px 16px padding;
  colour scan surfaced rgb(232,241,254) #e8f1fe, rgb(217,230,255) #d9e6ff tints,
  rgb(236,0,0) #ec0000 error, rgb(25,122,75) #197a4b success, rgb(242,242,242) #f2f2f2,
  rgb(230,230,230) #e6e6e6 surfaces, rgb(118,118,118) #767676 muted.

Token-level claims (§1-9) are sourced from this live inspection.

Voice samples (§10) are verbatim from the live site (document.title and section H2 headings).

Brand narrative (§11): Japan's Digital Agency (デジタル庁) was established September 1, 2021;
DADS is published at design.digital.go.jp/dads under CC BY 4.0 with Figma + HTML/React
snippets and accessibility/usability guidelines (per the homepage and the brief's Tier 1
hints). The β/version posture ("β版 v2.14.0") is verbatim from the live header.

Personas (§13) are fictional archetypes informed by publicly observable DADS user segments
(government service teams, ministry developers, citizens). Names are illustrative; they do
not refer to real people.

Interpretive claims (e.g., "one blue, meaning-only colour", "flat clarity as a rejection of
consumer-branding flourish") are editorial readings connecting DADS's observed design to its
civic mission, not directly quoted Digital Agency statements.
-->
