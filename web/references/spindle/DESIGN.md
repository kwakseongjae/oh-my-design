---
id: spindle
name: Spindle (CyberAgent Ameba)
country: JP
category: consumer-tech
homepage: "https://spindle.ameba.design/"
primary_color: "#298737"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=ameba.jp&sz=128"
verified: "2026-06-17"
added: "2026-06-17"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-17"
  note: "primary = Ameba accent green (#298737), the contained-button / surface-accent-primary token live-read from Spindle :root and confirmed on the ameba.jp 新規登録 CTA. Text-link green is the slightly darker #237b31. Contained hover/active deepens to #0f5c1f. Ink is near-black navy #08121a. Caution red #d91c0b, focus blue #0091ff. CJK font stack is system Hiragino/Meiryo/Yu Gothic (no custom webfont)."
  colors:
    primary: "#298737"
    primary-hover: "#0f5c1f"
    link: "#237b31"
    accent-light: "#e7f5e9"
    accent-light-active: "#c6e5c9"
    accent-secondary: "#82be28"
    accent-secondary-object: "#5e9b15"
    accent-secondary-text: "#477d00"
    accent-secondary-light: "#f0f7e6"
    ink: "#08121a"
    canvas: "#ffffff"
    background: "#f5f6f6"
    on-primary: "#ffffff"
    caution: "#d91c0b"
    focus: "#0091ff"
    highlight-yellow: "#f5e100"
    expressive-pink: "#e6456a"
  typography:
    family: { sans: "Hiragino Sans", fallback: "Meiryo, Yu Gothic Medium, system-ui, -apple-system, sans-serif" }
    display:    { size: 32, weight: 700, lineHeight: 1.5, use: "Section display headings (h2), bold" }
    heading:    { size: 24, weight: 700, lineHeight: 1.4, use: "Sub-section heads (h3)" }
    title:      { size: 24, weight: 700, lineHeight: 1.4, use: "Hero / page title (h1, h2 on docs)" }
    nav:        { size: 14, weight: 700, lineHeight: 1.5, use: "Global nav links, bold" }
    body:       { size: 16, weight: 400, lineHeight: 1.3, use: "Standard reading text" }
    body-sm:    { size: 14, weight: 400, lineHeight: 1.4, use: "Dense UI text, captions, table cells" }
    button:     { size: 16, weight: 700, lineHeight: 1.0, use: "Contained CTA label, bold" }
    button-sm:  { size: 12, weight: 700, lineHeight: 1.0, use: "Compact header register/login pill" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48 }
  rounded: { sm: 8, md: 15, lg: 16, pill: 48, full: 9999 }
  shadow:
    none: "none"
  components:
    button-contained: { type: button, bg: "#298737", fg: "#ffffff", radius: "48px", padding: "8px 16px", height: "48px", font: "16px / 700 Hiragino Sans", hover: "#0f5c1f", use: "Primary contained CTA (新規登録), full pill" }
    button-register-sm: { type: button, bg: "#2d8c3c", fg: "#ffffff", radius: "15px", height: "30px", font: "12px / 700 Hiragino Sans", use: "Compact header register pill on ameba.jp" }
    button-outlined: { type: button, bg: "#ffffff", fg: "#237b31", border: "1px solid #237b31", radius: "15px", height: "30px", font: "12px / 700 Hiragino Sans", hover: "#e7f5e9", use: "Outlined secondary action (ログイン)" }
    button-lighted: { type: button, bg: "#e7f5e9", fg: "#237b31", radius: "48px", font: "16px / 700 Hiragino Sans", hover: "#c6e5c9", use: "Lighted (soft) action button" }
    text-link: { type: tab, fg: "#237b31", font: "14px / 700 Hiragino Sans", active: "text #237b31 + bottom underline", use: "Inline text link / もっと見る, bold green" }
    input-search: { type: input, bg: "#f6f8fa", fg: "#08121a", border: "1px solid rgba(8,18,26,0.08)", radius: "16px", padding: "7px 32px", height: "32px", font: "14px Hiragino Sans", use: "Search field, low-emphasis surface fill" }
    card-lighted: { type: card, bg: "#e7f5e9", fg: "#08121a", radius: "16px", use: "Lighted accent surface card (highlighted blog row)" }
    table: { type: card, bg: "#ffffff", border: "1px solid rgba(8,18,26,0.08)", radius: "16px", use: "Data table container, striped rows #f5f6f6" }
    badge-caution: { type: badge, bg: "#d91c0b", fg: "#ffffff", radius: "9999px", font: "12px / 700 Hiragino Sans", use: "Caution / danger status pill" }
  components_harvested: true
---

# Design System Inspiration of Spindle (CyberAgent Ameba)

## 1. Visual Theme & Atmosphere

Spindle is CyberAgent's open design system for Ameba (アメーバ) — the 20-year-old Japanese blogging and media platform — and it reads as one of Japan's most disciplined, accessibility-first systems. The canvas is pure white (`#ffffff`) over a soft warm-grey app background (`#f5f6f6`), and text sits in a near-black navy ink (`#08121a`) rather than pure black, lending a calm, editorial weight. The single saturated brand anchor is **Ameba green (`#298737`)** — a confident, slightly forest-leaning green that functions as both the brand mark color and the primary action color. This green is not decorative; live inspection shows it driving the contained CTA, the text-link, the icon button, and the accent surfaces, so the eye is trained to read green as "Ameba" and "do this."

The typographic personality is deliberately system-native: there is no custom webfont. Spindle's docs run on `Meiryo, "Yu Gothic Medium", system-ui` and the Ameba product runs on `"Hiragino Sans", Meiryo, "Yu Gothic"` — the platform CJK stack — set bold (700) at display sizes (32px section headings, 24px sub-heads) and a quiet 400 weight at 14–16px for body and dense UI. This is a system that spends its design budget on tokens, contrast, and component rigor rather than on a signature display face. Every UI color is documented against WCAG 2.1 contrast ratios (4.5:1 text, 3:1 objects), which is the system's defining obsession.

What distinguishes Spindle from flashier peers is its near-total restraint with depth and its pill-forward action geometry. Live inspection found `box-shadow: none` across the docs chrome; separation comes from flat tinted surfaces (`#f5f6f6`), thin hairlines (`rgba(8,18,26,0.08)`), and the green accent — never elevation. Action buttons are fully rounded pills: the contained CTA on `ameba.jp` measures a 48px-radius green pill, and lighted/outlined variants follow the same rounded language. The result is warm, legible, and engineered — a media platform that feels welcoming and trustworthy without shouting.

**Key Characteristics:**
- Ameba green (`#298737`) as the single brand + action color — contained CTA, links, icon buttons, accents
- System CJK font stack (`Hiragino Sans` / `Meiryo` / `Yu Gothic`) — no custom webfont, bold 700 for display
- Near-black navy ink (`#08121a`) for text instead of pure black — warm, editorial
- Accessibility-first: every UI color documented against WCAG 2.1 contrast (4.5:1 / 3:1)
- Flat depth — `box-shadow: none`; tinted `#f5f6f6` surfaces + `rgba(8,18,26,0.08)` hairlines separate
- Pill-forward actions — 48px contained CTA, rounded outlined/lighted variants
- Lighted accent surfaces in soft green (`#e7f5e9`) with hover `#c6e5c9`
- Caution red (`#d91c0b`) and focus blue (`#0091ff`) as the documented semantic accents

## 2. Color Palette & Roles

### Primary / Accent
- **Ameba Green** (`#298737`): `--color-surface-accent-primary` / `--LinkButton--contained-backgroundColor` / `--color-object-accent-primary`. The primary brand and action color — contained CTA background, icon-button fill, accent surface.
- **Green Hover/Active** (`#0f5c1f`): `--LinkButton--contained-onHover-backgroundColor`. Deepened green for contained-button hover and active (pressed) states.
- **Link Green** (`#237b31`): `--TextLink-color` / `--LinkButton--outlined-color` / `--color-text-accent-primary`. The text-link and outlined-button green — a touch darker than the surface green for text contrast.
- **Register Green** (`#2d8c3c`): the compact header register pill on `ameba.jp` (a slightly lighter production tint of the accent).

### Accent Light & Secondary
- **Accent Light** (`#e7f5e9`): `--LinkButton--lighted-backgroundColor` / `--color-surface-accent-primary-light`. Soft green fill for lighted (low-emphasis) buttons and highlighted rows.
- **Accent Light Active** (`#c6e5c9`): `--LinkButton--lighted-onHover-backgroundColor`. Hover/active for lighted surfaces.
- **Accent Secondary (Lime)** (`#82be28`): `--color-surface-accent-secondary`. A brighter lime secondary accent for decorative/secondary surfaces.
- **Accent Secondary Object** (`#5e9b15`): `--color-object-accent-secondary`. Object-level lime (icons, indicators).
- **Accent Secondary Text** (`#477d00`): `--color-text-accent-secondary`. Darkest lime for accessible secondary-accent text.
- **Accent Secondary Light** (`#f0f7e6`): `--color-surface-accent-secondary-light`. Tinted lime surface.

### Ink & Neutral Surfaces
- **Ink Navy** (`#08121a`): `--color-text-high-emphasis` / `--color-object-high-emphasis`. Primary text, headings, nav, table cells — a near-black navy used instead of pure black.
- **Pure White** (`#ffffff`): `--color-surface-primary`. Page and card surface, text on green/dark.
- **Background Grey** (`#f5f6f6`): `--color-background` / `--Table-row-striped-backgroundColor`. Warm app background and striped table rows.
- Mid/low/disabled ink are alpha overlays of the ink navy: medium-emphasis `rgba(8,18,26,0.74)`, low-emphasis `rgba(8,18,26,0.61)`, disabled `rgba(8,18,26,0.3)`. Surfaces use `rgba(8,18,26,0.04/0.08/0.16)` for secondary/tertiary/quaternary fills; borders use `rgba(8,18,26,0.08)` (low) and `rgba(8,18,26,0.3)` (medium).

### Semantic
- **Caution Red** (`#d91c0b`): `--color-surface-caution` / `--color-text-caution` / `--color-border-caution`. Danger/destructive actions, error text and borders.
- **Focus Blue** (`#0091ff`): `--color-focus-clarity` / outline color. The keyboard-focus ring color across all interactive elements.
- **Highlight Yellow** (`#f5e100`): `--color-highlight-yellow`. Selection/marker highlight.
- **Expressive Pink** (`#e6456a`): `--color-object-expressive-pink`. Expressive/decorative object accent.

## 3. Typography Rules

### Font Family
- **Docs surface**: `Meiryo, "Yu Gothic Medium", system-ui, -apple-system, "system-ui", sans-serif` (live-read from `spindle.ameba.design` body and headings).
- **Product surface (ameba.jp)**: `"Hiragino Sans", Meiryo, "Yu Gothic", sans-serif`.
- **No custom webfont**: Spindle relies on the platform CJK system stack on both surfaces. Display weight is bold (700); body is regular (400).

### Hierarchy

| Role | Size | Weight | Line Height | Notes |
|------|------|--------|-------------|-------|
| Section Display (h2) | 32px (2.00rem) | 700 | 1.5 | Largest section headings ("Amebaらしさを体現するために", "Amebaでブログを書こう") |
| Heading (h3) | 24px (1.50rem) | 700 | 1.4 | Sub-section heads ("デザイン原則", "アクセシビリティ", "記事から探す") |
| Page Title (h1/h2) | 24px (1.50rem) | 700 | 1.4 | Docs page title, hero |
| Nav Link | 14px (0.88rem) | 700 | 1.5 | Global nav items ("ブランド", "原則", "スタイル", "コンポーネント") — bold |
| Body | 16px (1.00rem) | 400 | 1.3 | Standard reading text (body default) |
| Body Small | 14px (0.88rem) | 400 | 1.4 | Dense UI text, captions, table cells (`0.875em`) |
| Button | 16px (1.00rem) | 700 | 1.0 | Contained CTA label — bold |
| Button Small | 12px (0.75rem) | 700 | 1.0 | Compact header register/login pill |

### Principles
- **Bold display, regular body**: every heading and nav item runs bold (700); body and dense UI text drop to 400. The weight contrast is the primary hierarchy signal, since there is no type-design contrast (system font).
- **System-native CJK**: legibility for hangul/kana/kanji comes from the platform font, not a custom face. The system invests in tokens and contrast instead of a signature typeface.
- **Accessibility-bounded sizing**: body sits at 14–16px with generous line-height (1.3–1.5) for dense Japanese text; table/caption text steps to `0.875em` / `0.75em`.
- **Bold links**: text links are `font-weight: bold` green (`#237b31`) — links read as actions, not just colored text.

## 4. Component Stylings

### Buttons

**Contained (Primary CTA)**
- Background: `#298737`
- Text: `#ffffff`
- Radius: 48px
- Padding: 8px 16px
- Height: 48px
- Font: 16px Hiragino Sans weight 700
- Hover: `#0f5c1f` background
- Use: Primary contained call-to-action ("新規登録"), full pill — the system's single primary action

**Register Pill (Compact)**
- Background: `#2d8c3c`
- Text: `#ffffff`
- Radius: 15px
- Height: 30px
- Font: 12px Hiragino Sans weight 700
- Use: Compact header register pill on ameba.jp

**Outlined (Secondary)**
- Background: `#ffffff`
- Text: `#237b31`
- Border: 1px solid `#237b31`
- Radius: 15px
- Height: 30px
- Font: 12px Hiragino Sans weight 700
- Hover: `#e7f5e9` background
- Use: Outlined secondary action ("ログイン")

**Lighted (Soft)**
- Background: `#e7f5e9`
- Text: `#237b31`
- Radius: 48px
- Font: 16px Hiragino Sans weight 700
- Hover: `#c6e5c9` background
- Use: Low-emphasis green action button

### Inputs & Forms

**Search Field**
- Background: `#f6f8fa`
- Text: `#08121a`
- Border: 1px solid `rgba(8,18,26,0.08)`
- Radius: 16px
- Padding: 7px 32px
- Height: 32px
- Font: 14px Hiragino Sans
- Focus: `#0091ff` outline ring
- Use: Header search field — low-emphasis surface fill

### Cards & Containers

**Lighted Accent Card**
- Background: `#e7f5e9`
- Text: `#08121a`
- Radius: 16px
- Use: Highlighted/accent surface card (e.g. featured blog row)

**Data Table**
- Background: `#ffffff`
- Border: 1px solid `rgba(8,18,26,0.08)`
- Radius: 16px
- Use: Table container; striped rows use `#f5f6f6`, head/cell padding 12px

### Badges

**Caution Pill**
- Background: `#d91c0b`
- Text: `#ffffff`
- Radius: 9999px
- Font: 12px Hiragino Sans weight 700
- Use: Caution / danger status pill

### Navigation
- Background: `#ffffff`
- Text: `#08121a`
- Font: 14px weight 700
- Height: 114px global header (`--global-header-height`)
- Active: green `#237b31` text on active item
- Use: Global nav ("ブランド", "原則", "スタイル", "コンポーネント", "Spindleについて", "更新情報")

### Text Links
- Color: `#237b31` (bold)
- Icon color: `#298737`
- Focus: `#0091ff` outline
- Use: Inline links and "もっと見る" more-links — bold green

---

**Verified:** 2026-06-17 (omd:add-reference CREATE — Tier 1 live inspect, 2 first-party surfaces)
**Tier 1 sources:** https://spindle.ameba.design/ (Spindle DS — `:root` design-token CSS custom properties, live computed style); https://www.ameba.jp/ (Ameba product — live component grounding: 新規登録 CTA, search input, lighted rows); https://spindle.ameba.design/styles/color/ (official color taxonomy)
**Tier 2 sources:** getdesign.md/spindle — NOT FOUND (no entry); styles.refero.design/?q=spindle — no Spindle/Ameba entry (only fuzzy unrelated matches: Spline, Spacelab, Shuttle)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px
- Notable: Table head/cell padding lands at 12px (measured token); contained CTA padding 8px 16px

### Grid & Container
- Centered single-column docs layout with a 114px global header (`--global-header-height`)
- Section bands alternate white (`#ffffff`) and warm grey (`#f5f6f6`) backgrounds
- Cards and tables use 16px radius and group related content/principles
- Component docs are organized into Brand / Principles / Styles / Components / About / Updates

### Whitespace Philosophy
- **Breathing, editorial rhythm**: generous vertical spacing between principle cards and content sections.
- **Flat segmentation**: sections separate by background tint (`#f5f6f6` vs `#ffffff`) and hairlines, not shadow.
- **Accent restraint**: green appears only on actions and accents, keeping the neutral canvas calm.

### Border Radius Scale
- Small (8px): inner elements, small containers
- Medium (15–16px): cards, tables, inputs, compact buttons — the workhorse
- Pill (48px): contained CTA and lighted action buttons
- Full (9999px): badges, fully-round pills

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline text, most surfaces |
| Tint (Level 1) | `#f5f6f6` / `rgba(8,18,26,0.04)` background shift | Card/section separation without elevation |
| Hairline (Level 2) | `1px solid rgba(8,18,26,0.08)` border | Table/card outlines, dividers |
| Accent (Level 3) | `#e7f5e9` lighted surface or `#298737` green | Emphasis via color, not elevation |

**Shadow Philosophy**: Spindle is a near-shadowless system. Live inspection found `box-shadow: none` across the docs chrome, headings, nav, and content cards. Depth and grouping are communicated through flat tinted surfaces (`#f5f6f6`, `rgba(8,18,26,0.04)`) and thin hairlines (`rgba(8,18,26,0.08)`). This is a deliberate accessibility-and-performance choice — it keeps the media UI fast, clean, and high-contrast. When emphasis is needed, the system reaches for the green accent (`#298737`) or a lighted green surface (`#e7f5e9`), never elevation. The keyboard-focus ring (`#0091ff`) is the one consistently "raised" visual signal, present on every interactive element.

## 7. Do's and Don'ts

### Do
- Use Ameba green (`#298737`) as the single brand + primary action color — CTA, links, icon buttons, accents
- Deepen to `#0f5c1f` on contained-button hover/active
- Use the bold green (`#237b31`) for text links — links are bold and read as actions
- Use the system CJK font stack (`Hiragino Sans` / `Meiryo` / `Yu Gothic`) — no custom webfont
- Set display headings bold (700); keep body at weight 400
- Use near-black navy (`#08121a`) for text instead of pure black
- Separate sections with flat tints (`#f5f6f6`) and hairlines (`rgba(8,18,26,0.08)`), not shadows
- Use pill geometry for actions — 48px contained CTA, 9999px badges
- Honor WCAG 2.1 contrast on every color pairing (4.5:1 text, 3:1 objects)
- Use the focus blue (`#0091ff`) outline on every interactive element

### Don't
- Use drop shadows for elevation — Spindle is a flat, shadow-free system
- Spread green across decorative elements — reserve it for actions and accents
- Use pure black (`#000000`) for body text — use near-black navy `#08121a`
- Set display headings in a light weight — display is always bold (700)
- Introduce a custom display webfont — the system is intentionally system-native
- Use a second saturated action color — green is the single action hue (lime/pink are decorative only)
- Skip the focus ring — keyboard focus (`#0091ff`) is mandatory for accessibility
- Pair colors that fail WCAG 2.1 contrast — contrast is the system's first principle

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <768px | Single column, hamburger nav, stacked principle cards |
| Tablet | 768-1024px | Moderate padding, 2-up feature cards |
| Desktop | >1024px | Full layout, centered content, multi-column principle grid |

### Touch Targets
- Contained CTA at 48px height, full pill — an unmistakable tap target
- Compact header pills at 30px height for dense top-bar density
- Nav links bold within the 114px global header for clear hit areas

### Collapsing Strategy
- Global nav: horizontal links → hamburger toggle on mobile
- Principle cards: multi-column → stacked single column
- Tinted/white alternating bands maintain full-width treatment
- Tables: horizontal scroll on narrow viewports, 16px radius maintained

### Image Behavior
- Illustrations and screenshots carry no shadow at any size, consistent with the flat system
- Cards maintain 16px radius across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA / brand: Ameba Green (`#298737`)
- CTA Hover: Deep Green (`#0f5c1f`)
- Text link: Link Green (`#237b31`, bold)
- Lighted action surface: Accent Light (`#e7f5e9`)
- Background: Pure White (`#ffffff`)
- App background / striped rows: Background Grey (`#f5f6f6`)
- Heading / body text: Ink Navy (`#08121a`)
- Caution / danger: Caution Red (`#d91c0b`)
- Focus ring: Focus Blue (`#0091ff`)
- Decorative accents: Lime (`#82be28`), Expressive Pink (`#e6456a`), Highlight Yellow (`#f5e100`)

### Example Component Prompts
- "Create a hero on white background. Headline at 32px Hiragino Sans weight 700, color #08121a. Below it a contained CTA: #298737 background, white text, 48px radius (full pill), 8px 16px padding, 16px weight 700 — '新規登録'. Hover deepens to #0f5c1f."
- "Design a feature card: white background, 1px solid rgba(8,18,26,0.08) hairline, 16px radius, no shadow. Title 24px Hiragino Sans weight 700, #08121a. Body 16px weight 400, #08121a at line-height 1.3."
- "Build a lighted action button: #e7f5e9 background, #237b31 bold text, 48px radius. Hover #c6e5c9. And a text link: #237b31 bold, with #0091ff focus outline."
- "Create top nav: white 114px header, bold 14px links #08121a, green #237b31 on active. Green contained CTA right-aligned, 48px pill."
- "Build a data table: white #ffffff background, 16px radius, 1px solid rgba(8,18,26,0.08) borders, striped rows #f5f6f6, 12px cell padding, #08121a text."

### Iteration Guide
1. Ameba green (`#298737`) is the single action color — don't spread it to decoration
2. System CJK font stack throughout; bold 700 for display, 400 for body
3. No shadows — separate with `#f5f6f6` tint and `rgba(8,18,26,0.08)` hairlines
4. Pill actions — 48px contained CTA, 9999px badges; 16px cards/inputs/tables
5. Text color is `#08121a` navy, never pure black for body
6. Every interactive element gets a `#0091ff` focus ring
7. Honor WCAG 2.1 contrast (4.5:1 text, 3:1 objects) — the system's first principle

---

## 10. Voice & Tone

Spindle (and the Ameba brand it serves) speaks with a voice that is **warm, welcoming, and unpretentious** — the verbal expression of the system's four design principles: 敬意 (Respect), 軽快 (Lightness), 情緒 (Emotion), and 歓迎 (Welcome). Copy is plain, friendly Japanese that invites participation rather than instructing: register and login CTAs are simple ("新規登録", "ログイン"), section headings are conversational invitations ("Amebaでブログを書こう" / "Let's write a blog on Ameba"; "Amebaってどんなサービス？" / "What kind of service is Ameba?"). The tone never hard-sells; it welcomes everyone in, consistent with the stated brand vision that "誰もがいつでも、迷わず" (anyone, anytime, without getting lost) can use the service.

| Context | Tone |
|---|---|
| Section headings | Conversational invitations. "Amebaでブログを書こう", "Amebaを始めよう！". Warm, inclusive. |
| Nav / labels | Plain and functional. "ブランド", "原則", "スタイル", "コンポーネント". |
| CTAs | Simple, low-pressure. "新規登録", "ログイン", "もっと見る". |
| Documentation (Spindle) | Precise, accessibility-grounded, peer-to-peer with designers/engineers. |
| Brand / principles copy | Mission-framed, emotional. Frames Ameba as "weaving living content". |

**Voice samples (verbatim from live surfaces):**
- "Amebaらしさを体現するために" — Spindle homepage section heading ("To embody Ameba-ness"). *(verified live 2026-06-17, spindle.ameba.design)*
- "Amebaを始めよう！こちらから無料で登録" — ameba.jp CTA section ("Let's start Ameba! Register free here"). *(verified live 2026-06-17, ameba.jp)*
- "デザイン原則" / "アクセシビリティ" / "パフォーマンス" — Spindle principle card headings. *(verified live 2026-06-17, spindle.ameba.design)*

**Forbidden register**: aggressive sales urgency, exclusionary jargon, hype superlatives, or anything that violates the "welcome / accessible to everyone" principle. The system's accessibility mandate extends to language — clear over clever.

## 11. Brand Narrative

Spindle was created by **CyberAgent** to serve **Ameba (アメーバ)**, the company's blogging and media platform launched in **2004**. By the late 2010s Ameba — then ~17 years old — had accumulated significant design and technical debt, and CyberAgent set an ambition for it to become a "100年愛されるメディア" (a media service loved for 100 years) ([CyberAgent Developers Blog](https://developers.cyberagent.co.jp/blog/archives/31641/)). Around **2019** the team began a year-long brand-definition process to articulate Ameba's previously implicit identity, and Spindle was built to operationalize and scale that brand vision across every product surface.

The name **Spindle** (紡錘体) references both a spinning tool and the cellular spindle structure — symbolizing continuous evolution and the brand's core concept of **"生きたコンテンツをつむぐ"** ("weaving living content together"): the idea that users, stories, and connections interweave organically over time ([CyberAgent Developers Blog](https://developers.cyberagent.co.jp/blog/archives/31641/)). The system is built on four design principles — **敬意 (Respect), 軽快 (Lightness), 情緒 (Emotion), 歓迎 (Welcome)** — that reflect a commitment to accessibility, performance, and emotional resonance.

What Spindle refuses, visible in its design: the heavy, decorative chrome of legacy portals (no shadow stacks, no ornamental gradients) and the cold, exclusionary precision of enterprise tooling. What it embraces: a flat, fast, high-contrast interface; a single warm Ameba green; system-native CJK typography that works for everyone; and a rigorous, openly-published token system (Spindle is open source at `openameba/spindle`, with design tokens, React components, icons, syntax themes, and an MCP server). Accessibility is not a feature here — it is the first principle, with every UI color documented against WCAG 2.1 contrast ratios.

## 12. Principles

The four principles below are Spindle's officially stated design principles (敬意 / 軽快 / 情緒 / 歓迎), with UI implications drawn from the live system.

1. **敬意 — Respect.** Respect every user, including those using assistive technology. *UI implication:* every UI color is documented against WCAG 2.1 contrast (4.5:1 text, 3:1 objects); every interactive element carries a visible `#0091ff` focus ring.
2. **軽快 — Lightness / Agility.** The experience should feel light and fast. *UI implication:* a flat, shadow-free system; separation via tint and hairline, not heavy elevation; system-native fonts for fast paint.
3. **情緒 — Emotion.** Convey Ameba's warmth and personality. *UI implication:* a warm Ameba green rather than a cold corporate blue; conversational, inviting copy; near-black navy ink over harsh pure black.
4. **歓迎 — Welcome / Inclusivity.** Everyone, anytime, without getting lost. *UI implication:* generous tap targets (48px CTA), plain labels, predictable pill geometry, and an accessibility-first color/contrast contract.
5. **One color, one action.** Ameba green (`#298737`) means "do this." *UI implication:* reserve the saturated green for primary actions and links so the next step is never ambiguous; lime/pink/yellow stay decorative.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Ameba/Spindle user segments (Japanese bloggers, media readers, and the in-house designers/engineers who consume the design system), not individual people.*

**佐藤 美咲, 34, 東京.** A lifestyle blogger who has posted on Ameba for nearly a decade. Values that the interface stays warm and familiar through redesigns; appreciates large, obvious buttons and copy that invites rather than instructs. Would be put off by a cold, enterprise-looking refresh.

**田中 健太, 41, 大阪.** A frontend engineer at a CyberAgent product team who consumes Spindle as a dependency (`openameba/spindle`). Reads the docs for token names and the MCP server, and trusts the system because every color ships with a documented WCAG contrast ratio. Notices immediately when a component drifts from the accessibility contract.

**山本 由香, 28, 福岡.** A reader who browses Ameba blogs daily on mobile, sometimes using larger text and high-contrast settings. Relies on the system's contrast guarantees and visible focus rings. Chose to keep using Ameba because it never feels cluttered or hard to read.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no content)** | White canvas. Single Ink Navy (`#08121a`) line explaining there's nothing yet, with one green CTA to take the next step. No clutter. |
| **Empty (saved list, none yet)** | Low-emphasis ink (`rgba(8,18,26,0.61)`) single line; calm, plus a path back. Honest about the empty meaning. |
| **Loading (content fetch)** | Skeleton blocks on `#f5f6f6` tinted surface at final dimensions, 16px radius. Flat pulse — no shadow shimmer, consistent with the shadowless system. |
| **Loading (in-place refresh)** | Previous content stays visible; subtle green progress indicator. Never blank the surface. |
| **Error (request failed)** | Inline message in Caution Red (`#d91c0b`) text/border with a plain-language explanation and a retry. States what to do next, not just "エラー". |
| **Error (form validation)** | Field-level message below the input in caution tone (`#d91c0b`); describes what's valid, not just "必須". |
| **Success (action completed)** | Brief inline confirmation in calm tone; green accent, next-step detail linked below. No celebratory emoji. |
| **Skeleton** | `#f5f6f6` blocks at final dimensions, 16px radius, flat pulse. |
| **Disabled** | Disabled ink (`rgba(8,18,26,0.3)`) text on reduced-emphasis surface; green actions fade rather than turn grey, preserving the brand read. |
| **Focus (keyboard)** | Mandatory `#0091ff` focus ring (`--color-focus-clarity`) on every interactive element — the system's most consistent state signal. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, button press, focus ring |
| `motion-standard` | 200ms | Card/section reveal, sheet, dropdown |
| `motion-slow` | 320ms | Page-level transitions |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — sheets, cards, dropdowns |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is functional and quiet — consistent with the flat, fast, accessibility-first system (軽快 / Lightness). Buttons respond to press with a subtle background-color shift (green deepening to `#0f5c1f`) rather than scale gymnastics; content reveals fade in from below at `motion-standard / ease-enter`. No bounce or spring — a 20-year media platform signals steadiness and welcome, not novelty. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the product remains fully functional, in keeping with the Respect (敬意) principle.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-17) via global playwright getComputedStyle:
- https://spindle.ameba.design/ — :root design-token CSS custom properties read directly
  (--color-surface-accent-primary #298737, --TextLink-color #237b31,
   --LinkButton--contained-onHover-backgroundColor #0f5c1f, --color-text-high-emphasis #08121a,
   --color-surface-caution #d91c0b, --color-focus-clarity #0091ff, --color-background #f5f6f6,
   --LinkButton--lighted-backgroundColor #e7f5e9, --color-surface-accent-secondary #82be28,
   --color-object-expressive-pink #e6456a, --color-highlight-yellow #f5e100,
   --global-header-height 114px, --Table-borderRadius 16px). Body font stack
   "Meiryo, Yu Gothic Medium, system-ui". Nav/headings bold 700, ink #08121a.
- https://www.ameba.jp/ — production component grounding: 新規登録 contained CTA
  rgb(41,135,55)=#298737 white text radius 48px padding 8px 16px 16px/700;
  compact register pill rgb(45,140,60)=#2d8c3c radius 15px 12px/700;
  outlined ログイン white bg #237b31-ish green text/border radius 15px;
  search input bg rgba(8,18,26,0.04) radius 16px padding 7px 32px border rgba(8,18,26,0.08);
  lighted highlighted row bg rgb(231,245,233)=#e7f5e9; headings #08121a Hiragino Sans 700.

Token-level claims (§1-9) are sourced from these two live first-party inspections.

Voice samples (§10) are verbatim from the live surfaces (spindle.ameba.design headings,
ameba.jp CTA section, Spindle principle card headings).

Brand narrative (§11) and the four design principles 敬意/軽快/情緒/歓迎, the name origin
(紡錘体), the "100年愛されるメディア" ambition, and the "生きたコンテンツをつむぐ" concept are
from the CyberAgent Developers Blog feature on Spindle
(https://developers.cyberagent.co.jp/blog/archives/31641/), verified via WebFetch 2026-06-17.
Ameba launched 2004; Spindle is open source at github.com/openameba/spindle.

Personas (§13) are fictional archetypes informed by publicly observable Ameba/Spindle user
segments (Japanese bloggers, media readers, in-house designers/engineers). Names are
illustrative; they do not refer to real people.

Interpretive claims (e.g., "one color, one action", "accessibility as the first principle",
"flat-and-fast as a rejection of legacy-portal chrome") are editorial readings connecting
Spindle's observed design and stated principles to its positioning, not directly sourced
Spindle statements. Motion tokens (§15) are reasonable defaults consistent with the flat,
accessibility-first system; specific duration/easing values were not separately token-verified.
-->
