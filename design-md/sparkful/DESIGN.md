---
id: sparkful
name: Fourdesire
country: TW
category: design-tools
homepage: "https://sparkful.app/"
primary_color: "#2dd4bf"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=sparkful.app&sz=128"
verified: "2026-06-17"
added: "2026-06-17"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-17"
  note: "Primary 'action' is a tri-color gradient pill (amber #fbbf24 -> lime #a3e635 -> teal #2dd4bf); primary_color set to the gradient terminus teal #2dd4bf. Neutral system is Tailwind gray ladder on white; per-app pages add a Walkr teal accent family (#215468 / #00455b / #a5f3fc). Type is Montserrat with system-CJK fallback for Traditional Chinese."
  colors:
    primary: "#2dd4bf"
    gradient-start: "#fbbf24"
    gradient-mid: "#a3e635"
    gradient-end: "#2dd4bf"
    ink: "#000000"
    heading: "#374151"
    strong: "#111827"
    body: "#4b5563"
    muted: "#6b7280"
    faint: "#9ca3af"
    canvas: "#ffffff"
    surface: "#f3f4f6"
    hairline: "#e5e7eb"
    panel-dark: "#1f2937"
    amber-glow: "#fffbeb"
    walkr-green: "#55b67c"
    walkr-teal: "#215468"
    walkr-teal-deep: "#00455b"
    walkr-cyan: "#a5f3fc"
    walkr-surface: "#e3efee"
    on-primary: "#ffffff"
  typography:
    family: { sans: "Montserrat", cjk-fallback: "system Traditional-Chinese (PingFang TC / Noto Sans TC)" }
    display-hero: { size: 48, weight: 700, lineHeight: 1.0, tracking: 0, use: "Top hero headline, Montserrat Bold" }
    section:      { size: 36, weight: 700, lineHeight: 1.11, tracking: -0.9, use: "Section headline, Montserrat Bold" }
    feature:      { size: 30, weight: 800, lineHeight: 1.2, tracking: -0.75, use: "Feature block titles, Montserrat ExtraBold" }
    card-title:   { size: 24, weight: 700, lineHeight: 1.33, use: "App/feature card heads" }
    eyebrow:      { size: 16, weight: 800, lineHeight: 1.5, tracking: -0.4, use: "Small all-emphasis eyebrow labels" }
    body:         { size: 16, weight: 400, lineHeight: 1.5, use: "Standard reading + nav text" }
    button:       { size: 18, weight: 600, lineHeight: 1.5, use: "Primary CTA pill label" }
    button-sm:    { size: 12, weight: 600, lineHeight: 1.5, use: "Compact Download pill label" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 20, xl: 24, xxl: 28, section: 48 }
  rounded: { sm: 8, md: 12, lg: 20, xl: 24, full: 9999 }
  shadow:
    none: "none"
  components:
    button-primary: { type: button, fg: "#ffffff", radius: "9999px", padding: "14px 28px", height: "56px", font: "18px / 600 Montserrat", use: "Hero CTA 'Explore SPARKFUL Apps' — tri-color gradient #fbbf24 -> #a3e635 -> #2dd4bf, white text, full pill" }
    button-download: { type: button, fg: "#ffffff", radius: "9999px", padding: "12px 24px", font: "16px / 600 Montserrat", use: "App-page 'Download' pill — same tri-color gradient fill, white text" }
    button-white-pill: { type: button, bg: "#ffffff", fg: "#000000", radius: "9999px", padding: "12px 24px", font: "16px / 600 Montserrat", use: "Secondary pill on colored app sections ('Explore the planets')" }
    nav-link: { type: tab, fg: "#111827", font: "16px / 400 Montserrat", use: "Top nav app/menu item; 76px-tall transparent header on white", active: "darkens to #000000 ink" }
    card-app: { type: card, bg: "#ffffff", fg: "#374151", radius: "12px", use: "App preview card on white; separated by tint not shadow (shadowless)" }
    card-surface: { type: card, bg: "#f3f4f6", fg: "#374151", radius: "20px", use: "Tinted feature panel on the gray-100 'bg-light' band" }
    panel-dark: { type: card, bg: "#1f2937", fg: "#ffffff", radius: "24px", use: "Dark slate phone-frame / media panel" }
    media-thumb: { type: card, bg: "#e5e7eb", radius: "20px 20px 0px 0px", use: "Article/video thumbnail, top-rounded only" }
    footer-link: { type: listItem, fg: "#111827", font: "16px / 400 Montserrat", use: "Footer + app-list navigation link" }
  components_harvested: true
---

# Design System Inspiration of Fourdesire

## 1. Visual Theme & Atmosphere

Fourdesire — the Taipei studio that publishes its apps under the **SPARKFUL** brand (Walkr, Plant Nanny 植物保姆, Fortune City 記帳城市, To-Do Adventure 記事探險, Book Morning!) — designs around one stated idea: *"Spark the fun in the ordinary."* The marketing system at `sparkful.app` is deliberately bright, weightless, and hand-illustrated-adjacent. The canvas is pure white (`#ffffff`) with a soft cool-gray band (`#f3f4f6`, the site's `bg-light` section) doing the work of segmenting content. Text is an unfussy near-black-to-slate Tailwind ladder — pure black `#000000` for the biggest hero words, slate `#374151` for section heads, gray `#4b5563`/`#6b7280` for body and captions — never a heavy institutional navy. The mood is a children's-book cheerfulness rendered with restraint: lots of air, no clutter, no hard sell.

The signature move is the **primary action**. Every "do this" control — the hero's *Explore SPARKFUL Apps* button, every *Download* pill — is a fully rounded `9999px` capsule filled with the same left-to-right **tri-color gradient: amber `#fbbf24` → lime `#a3e635` → teal `#2dd4bf`**, with white text at weight 600. That single warm-to-cool sweep is the brand's entire color personality compressed into one shape; it reads as playful, energetic, and unmistakably "press me." The primary color token is set to the gradient's teal terminus `#2dd4bf` so a single solid swatch can stand in for the sweep.

What distinguishes Fourdesire from louder consumer apps is its **flatness and restraint with depth**. Live inspection found `box-shadow: none` across the hero, nav, app cards, and panels — separation comes from background tint (`#f3f4f6`), thin `#e5e7eb` hairlines, generous `12px`–`24px` rounding, and the occasional dark slate panel (`#1f2937`, 24px radius) used as a phone-frame or media block. Ambient warmth is supplied by a large amber-50 glow blob (`#fffbeb`) behind the hero rather than by shadows. Per-app pages then layer in a world-specific accent — Walkr's space theme brings a teal/cyan family (`#215468`, `#00455b`, `#a5f3fc`) over a soft teal surface (`#e3efee`) — so each app keeps the SPARKFUL chassis while wearing its own color world. Typography is **Montserrat** throughout (Bold/ExtraBold for headlines, regular for body); Traditional-Chinese copy ("創造樂趣，啟動向上", "歡迎來到「樂趣電力公司」") renders through the system CJK fallback after Montserrat, so the Latin geometry leads and the Han characters follow in the platform's PingFang/Noto TC face.

**Key Characteristics:**
- Tri-color gradient pill (`#fbbf24` → `#a3e635` → `#2dd4bf`) as the one-and-only primary action — full `9999px` capsule, white text, weight 600
- Montserrat everywhere: Bold/ExtraBold (700/800) for display, regular (400) for body and nav; system CJK fallback for Traditional Chinese
- Flat, shadowless system — `box-shadow: none`; separation via `#f3f4f6` tint + `#e5e7eb` hairlines + soft rounding
- Tailwind gray text ladder — `#000000` → `#111827` → `#374151` → `#4b5563` → `#6b7280` → `#9ca3af`
- Generous rounding scale — `12px` cards, `20px`/`24px` panels, `9999px` pills
- Dark slate `#1f2937` panels (24px radius) as phone-frames / media blocks, not for chrome
- Amber-50 (`#fffbeb`) ambient glow as warmth instead of drop shadows
- Per-app accent worlds layered on the white chassis (Walkr teal `#215468` / deep `#00455b` / cyan `#a5f3fc` over surface `#e3efee`)

## 2. Color Palette & Roles

### Primary Action (Gradient)
- **Gradient Start — Amber** (`#fbbf24`): Left edge of the primary-CTA gradient. Warm, sunny entry.
- **Gradient Mid — Lime** (`#a3e635`): Center of the gradient sweep. The "spark" of energy.
- **Gradient End — Teal** (`#2dd4bf`): Right edge of the gradient and the system's solid primary token. Cool, fresh resolution.
- The three appear only together, as `linear-gradient(to right, #fbbf24, #a3e635, #2dd4bf)`, on full-pill buttons with white (`#ffffff`) text.

### Ink & Text Ladder
- **Ink Black** (`#000000`): Largest hero words ("Spark the fun in the ordinary"), logotype.
- **Strong Gray** (`#111827`): Nav items, footer links, app names — Tailwind gray-900.
- **Heading Slate** (`#374151`): Section and feature headlines — Tailwind gray-700.
- **Body Gray** (`#4b5563`): Secondary copy — Tailwind gray-600.
- **Muted Gray** (`#6b7280`): Captions, supporting subheads, metadata — Tailwind gray-500.
- **Faint Gray** (`#9ca3af`): Lowest-emphasis labels, placeholder-level text — Tailwind gray-400.

### Neutral & Surface
- **Canvas White** (`#ffffff`): Page background, app cards, secondary white pills, text on gradient/dark.
- **Surface Gray** (`#f3f4f6`): The `bg-light` tinted band and tinted feature panels — Tailwind gray-100.
- **Hairline** (`#e5e7eb`): Borders, dividers, media-thumbnail fills — Tailwind gray-200. The primary separation device in a shadowless system.
- **Panel Dark** (`#1f2937`): Dark slate phone-frame / media panels at 24px radius — Tailwind gray-800.
- **Amber Glow** (`#fffbeb`): Large soft circular glow behind the hero — ambient warmth, not a shadow.

### Per-App Accent (Walkr world)
- **Walkr Green** (`#55b67c`): Walkr brand green, seen as a rotated tinted band (≈0.2 alpha).
- **Walkr Teal** (`#215468`): Deep space-teal panel background on the Walkr page.
- **Walkr Teal Deep** (`#00455b`): Heading color on Walkr's planet sections.
- **Walkr Cyan** (`#a5f3fc`): Bright cyan heading on the dark "Explore the Boundless Universe" block.
- **Walkr Surface** (`#e3efee`): Soft pale-teal surface tint for Walkr content cards.

## 3. Typography Rules

### Font Family
- **Latin / primary**: `Montserrat, sans-serif` — used for every text element, display through body.
- **Traditional Chinese**: no explicit CJK family is declared; Han characters fall through to the **system CJK stack** after Montserrat (PingFang TC on Apple platforms, Noto Sans TC / Microsoft JhengHei on others). Latin geometry leads, Han follows in the platform face.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Montserrat | 48px (3.00rem) | 700 | 1.00 (48px) | normal | Top hero "Spark the fun in the ordinary" |
| Section Heading | Montserrat | 36px (2.25rem) | 700 | 1.11 (40px) | -0.9px | "Change Begins with fun!" |
| Feature Title | Montserrat | 30px (1.88rem) | 800 | 1.20 (36px) | -0.75px | "Spark Joy in Routines", "Play for a Better YOU" |
| Card Title | Montserrat | 24px (1.50rem) | 700 | 1.33 (32px) | normal | App / feature card heads |
| Eyebrow | Montserrat | 16px (1.00rem) | 800 | 1.50 (24px) | -0.4px | Small all-emphasis label ("Live in a World of...") |
| Body / Nav | Montserrat | 16px (1.00rem) | 400 | 1.50 (24px) | normal | Reading text, nav items, app menu |
| Button | Montserrat | 18px (1.13rem) | 600 | 1.50 | normal | Primary CTA pill label |
| Button Small | Montserrat | 12px (0.75rem) | 600 | 1.50 | normal | Compact Download pill |

### Principles
- **One typeface, weight as hierarchy**: Montserrat does every job; the jump from 700/800 (display) to 400 (body) carries the entire hierarchy. No second display face.
- **Tight tracking on big text**: headlines pull in (-0.9px at 36px, -0.75px at 30px); body and nav stay at normal tracking.
- **ExtraBold for the feature voice**: the 800 weight at 30px is the most distinctive typographic choice — punchy, friendly, almost poster-like.
- **CJK rides the system**: Traditional-Chinese copy inherits the platform's Han font, so the brand never ships a heavy CJK webfont — keeping the playful, fast feel intact in both languages.

## 4. Component Stylings

### Buttons

**Primary CTA (Gradient Pill)**
- Background: `linear-gradient(to right, #fbbf24, #a3e635, #2dd4bf)`
- Text: `#ffffff`
- Radius: 9999px
- Padding: 14px 28px
- Height: 56px
- Font: 18px / 600 / Montserrat
- Use: Hero primary action ("Explore SPARKFUL Apps") — the single "action" control

**Download Pill (Compact)**
- Background: `linear-gradient(to right, #fbbf24, #a3e635, #2dd4bf)`
- Text: `#ffffff`
- Radius: 9999px
- Padding: 12px 24px
- Font: 16px / 600 / Montserrat
- Use: App-page and card "Download" pills — same gradient, smaller scale

**Secondary White Pill**
- Background: `#ffffff`
- Text: `#000000`
- Radius: 9999px
- Padding: 12px 24px
- Font: 16px / 600 / Montserrat
- Use: Secondary action on colored app sections ("Explore the planets" on Walkr)

### Inputs & Forms
- The marketing surface is conversion-only (app-store hand-off); no live form inputs were present to measure on the inspected surfaces. Inputs are therefore not specced here rather than guessed.

### Cards & Containers

**App Card (White)**
- Background: `#ffffff`
- Text: `#374151`
- Radius: 12px
- Use: App preview card on white; no shadow — separated by surrounding tint

**Tinted Feature Panel**
- Background: `#f3f4f6`
- Text: `#374151`
- Radius: 20px
- Use: Feature panel sitting on the gray-100 `bg-light` band

**Dark Slate Panel**
- Background: `#1f2937`
- Text: `#ffffff`
- Radius: 24px
- Use: Phone-frame / media block

**Media Thumbnail**
- Background: `#e5e7eb`
- Radius: 20px 20px 0px 0px
- Use: Article/video thumbnail, top-rounded only (sits above a white caption block)

### Badges
- **Avatar chip**: circular `9999px` container at 40×40, gray-400 tint fill (`rgba(156,163,175,0.3)`) — used for small round article-author / icon avatars. No text badges/pills carry semantic colors on the inspected surfaces.

### Navigation
- Background: transparent over white
- Text: `#111827`
- Font: 16px / 400 / Montserrat
- Height: 76px header row
- Active: darkens toward ink `#000000`
- Use: Top horizontal nav — app menu (Plant Nanny, Fortune City, Walkr, To-Do Adventure, Book Morning!), Articles, Support; transparent header on white, no border, no shadow

### Footer
- Links: `#111827`, 16px / 400 / Montserrat
- Background: `#ffffff`
- Use: Footer + app-list navigation links (shadowless, hairline-separated)

---

**Verified:** 2026-06-17 (omd:add-reference CREATE — Tier 1 live inspect, 3 brand-owned surfaces)
**Tier 1 sources:** https://sparkful.app/ (homepage — hero CTA, nav, footer, color frequency); https://sparkful.app/zh-TW/about (brand About / Traditional-Chinese surface — "歡迎來到「樂趣電力公司」"); https://sparkful.app/walkr (per-app page — Walkr accent world, secondary pill, card colors)
**Tier 2 sources:** getdesign.md/sparkful + getdesign.md/fourdesire — NOT FOUND (no entry); styles.refero.design ?q=sparkful / ?q=fourdesire — NOT LISTED (search returned only generic browse grid, no SPARKFUL/Fourdesire style)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Scale: 4px, 8px, 12px, 16px, 20px, 24px, 28px, 48px
- Notable: app-menu nav buttons use a 20px / 12px asymmetric padding; CTA pills use 14px / 28px (hero) and 12px / 24px (compact)

### Grid & Container
- Centered single-column hero anchored by the 48px Montserrat headline and the gradient CTA pill
- App entries presented as a horizontal menu row (Plant Nanny / Fortune City / Walkr / To-Do Adventure / Book Morning!) each at 76px tall
- Feature sections alternate white (`#ffffff`) and tinted gray (`#f3f4f6` `bg-light`) full-width bands
- Cards and panels round generously (12px / 20px / 24px); phone-frame previews use the dark slate panel

### Whitespace Philosophy
- **Air over density**: generous vertical rhythm; the page breathes like a picture book, never crowded
- **Flat segmentation**: sections separate by background tint (`#f3f4f6` vs `#ffffff`) and `#e5e7eb` hairlines, not elevation
- **One bright moment per view**: the gradient pill is the single saturated element in most viewports; everything else is neutral

### Border Radius Scale
- Small (8px): inner elements, small containers
- Medium (12px): app cards — the workhorse
- Large (20px): tinted feature panels, media thumbnails (top-only)
- XL (24px): dark slate phone-frame panels
- Full (9999px): all pills, avatar chips

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline text, most surfaces |
| Glow (Level 0.5) | `#fffbeb` amber-50 soft circular glow | Ambient warmth behind the hero (decorative, not elevation) |
| Tint (Level 1) | `#f3f4f6` background shift | Card/section separation without elevation |
| Hairline (Level 2) | `1px solid #e5e7eb` | Card outlines, dividers |
| Panel (Level 3) | `#1f2937` dark slate fill, 24px radius | Phone-frame / media block contrast |

**Shadow Philosophy**: SPARKFUL is a shadowless system. Live inspection found `box-shadow: none` across the hero, nav, app cards, footer, and panels. Depth is communicated by background tint (`#f3f4f6`), thin `#e5e7eb` hairlines, generous rounding, and color contrast — the dark slate panel (`#1f2937`) or the gradient pill — never by drop shadows. Warmth that a shadow might otherwise add comes from the ambient amber-50 (`#fffbeb`) glow behind the hero. This keeps the playful brand feeling light, fast, and illustration-friendly.

## 7. Do's and Don'ts

### Do
- Use the tri-color gradient pill (`#fbbf24` → `#a3e635` → `#2dd4bf`) for the single primary action — full `9999px`, white text, weight 600
- Set Montserrat everywhere; Bold/ExtraBold (700/800) for headlines, regular (400) for body and nav
- Keep depth flat — separate with `#f3f4f6` tint and `#e5e7eb` hairlines, never drop shadows
- Use the Tailwind gray ladder for text (`#000000` → `#374151` → `#6b7280`) instead of a heavy navy
- Round generously — 12px cards, 20px/24px panels, full pills
- Use the dark slate panel (`#1f2937`, 24px) for phone-frame / media contrast
- Add warmth with the amber-50 (`#fffbeb`) ambient glow, not a shadow
- Give each app its own accent world layered on the white chassis (Walkr teal `#215468` / cyan `#a5f3fc`)

### Don't
- Use the gradient as a flat single color — its identity is the amber→lime→teal sweep; keep all three stops
- Apply drop shadows for elevation — the system is flat and shadowless
- Use a second display typeface — Montserrat does every job
- Ship a heavy CJK webfont — let Traditional Chinese ride the system Han fallback after Montserrat
- Use sharp/square corners on pills or panels — everything is softly rounded
- Spread the gradient across many elements — it is the single "action" signal; keep it scarce
- Use pure black `#000000` for body text — reserve it for the biggest hero words; body is gray `#4b5563`
- Let a per-app accent color overwrite the neutral SPARKFUL chassis — accents layer on, they don't replace

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero headline compresses, app menu stacks/scrolls |
| Tablet | 640-1024px | Moderate padding, 2-up feature cards |
| Desktop | 1024-1440px | Full layout, centered hero, multi-column feature bands |

### Touch Targets
- Hero CTA pill at 56px height, full pill — an unmistakable tap target
- App-menu nav rows at 76px height with comfortable 20px/12px padding
- Download pills at 12px/24px padding, full-round for clear hit area

### Collapsing Strategy
- Hero: 48px Montserrat headline scales down on mobile, weight 700 maintained
- App menu: horizontal row wraps/stacks on narrow viewports
- Feature bands: multi-column → stacked single column
- Tinted/white alternating sections keep full-width treatment

### Image Behavior
- App screenshots and illustrations carry no shadow at any size (flat system)
- Media thumbnails keep top-only `20px 20px 0 0` rounding above white caption blocks
- Cards maintain 12px radius across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary action: tri-color gradient `linear-gradient(to right, #fbbf24, #a3e635, #2dd4bf)`, white text
- Solid primary token: Teal (`#2dd4bf`)
- Hero headline: Ink Black (`#000000`)
- Section/feature headline: Slate (`#374151`)
- Body text: Gray (`#4b5563`); muted: (`#6b7280`); faint: (`#9ca3af`)
- Background: White (`#ffffff`); tinted band: (`#f3f4f6`)
- Hairline: (`#e5e7eb`); dark panel: (`#1f2937`); amber glow: (`#fffbeb`)
- Walkr accent: teal (`#215468`), deep (`#00455b`), cyan (`#a5f3fc`), surface (`#e3efee`)

### Example Component Prompts
- "Create a hero on white background with a soft `#fffbeb` glow behind it. Headline at 48px Montserrat weight 700, color #000000. Below it a full-pill CTA: background `linear-gradient(to right, #fbbf24, #a3e635, #2dd4bf)`, white text, 9999px radius, 14px 28px padding, 18px Montserrat weight 600 — 'Explore Apps'. No shadow."
- "Design a feature panel on the tinted band: #f3f4f6 background, 20px radius, no shadow. Title 30px Montserrat weight 800, letter-spacing -0.75px, #374151. Body 16px Montserrat weight 400, #4b5563."
- "Build an app card: white #ffffff background, 12px radius, 1px solid #e5e7eb hairline, no shadow. App name 24px Montserrat weight 700, #374151. A compact gradient Download pill (12px 24px, 16px/600, white text)."
- "Create top nav: transparent over white, 76px tall, no border, no shadow. Montserrat 16px weight 400 links, #111827 text. A gradient CTA pill right-aligned."

### Iteration Guide
1. Montserrat for everything; 700/800 for headlines, 400 for body/nav
2. The gradient pill (`#fbbf24` → `#a3e635` → `#2dd4bf`) is the single action color — keep all three stops, keep it scarce
3. No shadows — separate with `#f3f4f6` tint and `#e5e7eb` hairlines
4. Generous rounding — 12px cards, 20px/24px panels, full pills
5. Text is the gray ladder (`#000000` → `#374151` → `#6b7280`), not navy
6. Tight negative tracking on big headlines, normal on body
7. Dark slate `#1f2937` (24px) for phone-frame / media contrast; amber-50 `#fffbeb` glow for warmth
8. Per-app pages add an accent world (Walkr teal/cyan) on the white chassis — never replace it

---

## 10. Voice & Tone

SPARKFUL's voice is **warm, encouraging, and playful** — what the brand itself calls being "a wise and cheerful friend." Its own meta description reads: *"SPARKFUL lights up your life like a wise and cheerful friend. SPARKFUL's apps help you take care of your health and wellness without forgetting the fun!"* The register is upbeat without being hyper, and self-improvement is framed as play rather than discipline. The Traditional-Chinese voice is the same friend in another language — Fourdesire literally calls itself "樂趣電力公司" ("the Fun Power Company").

| Context | Tone |
|---|---|
| Hero headlines | Playful imperative. "Spark the fun in the ordinary." Light, inviting. |
| Section headlines | Warm benefit framing. "Change Begins with fun!", "Play for a Better YOU". |
| CTAs | Friendly and simple. "Explore SPARKFUL Apps", "Download". |
| Feature copy | Self-care reframed as play; gentle, never preachy. "The Most Playful Form of Self-Care". |
| Brand / About (zh-TW) | Earnest and cheerful. "創造樂趣，啟動向上" ("Create fun, spark progress"). |

**Voice samples (verbatim from live brand surfaces):**
- "Spark the fun in the ordinary" — hero headline, sparkful.app/ *(verified live 2026-06-17)*
- "Change Begins with fun!" — section headline, sparkful.app/ *(verified live 2026-06-17)*
- "The Most Playful Form of Self-Care" — feature headline, sparkful.app/ *(verified live 2026-06-17)*
- "創造樂趣，啟動向上" — About page headline, sparkful.app/zh-TW/about *(verified live 2026-06-17)*
- "歡迎來到「樂趣電力公司」" ("Welcome to the Fun Power Company") — About page, sparkful.app/zh-TW/about *(verified live 2026-06-17)*

**Forbidden register**: guilt-driven productivity pressure, clinical wellness jargon, aggressive sales urgency, exclamation-stacked hype that loses the gentle warmth. The fun must never tip into mania.

## 11. Brand Narrative

Fourdesire (四合願) is a **Taipei, Taiwan**-based studio founded in 2012 that makes "gamified self-improvement" apps under the **SPARKFUL** brand — most famously **Walkr** (a walking game set in a galaxy of planets), **Plant Nanny 植物保姆** (drink-water habit that grows a virtual plant), **Fortune City 記帳城市** (expense tracking that builds a city), **To-Do Adventure 記事探險**, and **Book Morning!** (a story-driven alarm). The studio's premise — visible in its self-description as "樂趣電力公司," the Fun Power Company — is that lasting behavior change comes from delight, not discipline: turn the boring, healthy habit into a small game and people will keep doing it.

That thesis shapes the whole design language. Where most habit and wellness apps lean on streaks, guilt, and clinical charts, Fourdesire wraps each behavior in a hand-crafted illustrated world with its own characters and progression — drink water and a creature grows, walk and you discover a planet, log spending and a city rises. The SPARKFUL marketing site is the neutral, bright lobby for those colorful worlds: a flat white chassis, a single joyful gradient as the "press me" signal, and Montserrat's friendly geometry, so that each app's distinct color world (Walkr's space teal, Plant Nanny's greens) can shine on its own page without the brand frame competing.

What Fourdesire refuses, visible in its design: the heavy, anxious chrome of productivity software (no dense dashboards on the marketing surface, no shadow-stacked "enterprise" cards), and the dark-pattern urgency of engagement-farming apps. What it embraces: warmth, hand-made character, generous whitespace, and a single bright action — fun as the mechanism, care as the goal.

## 12. Principles

1. **Fun is the mechanism, not the decoration.** Self-improvement is reframed as play. *UI implication:* lead with delight (the joyful gradient, the illustrated worlds); never present a habit as a chore or a chart to be obeyed.
2. **One bright action.** The tri-color gradient pill is the single saturated element in most views. *UI implication:* reserve the gradient for the primary CTA so the next step is unmistakable; keep everything else neutral.
3. **Flat, light, and fast.** A picture-book feel beats decorative depth. *UI implication:* no shadows; separate with tint and hairlines; round generously; keep the page airy.
4. **A neutral chassis, colorful worlds.** The SPARKFUL frame is quiet so each app's world can be loud. *UI implication:* keep the brand shell white/gray/Montserrat; let per-app accent palettes (Walkr teal/cyan) live inside it without overwriting it.
5. **The wise, cheerful friend.** Encourage, don't lecture. *UI implication:* copy is warm and simple; motion and color reward progress gently — never guilt the user for a missed day.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable SPARKFUL / Fourdesire user segments (people building healthy habits through gamified apps), not individual people.*

**陳怡君, 28, Taipei.** A designer who installed Plant Nanny to actually drink water through long studio days. Stays because the plant growing is a tiny daily delight, not a nag. Loves that the app feels made by people who care about craft.

**Marcus Lee, 34, Singapore.** A remote engineer who walks with Walkr to hit a step goal without it feeling like exercise. Treats discovering planets as the reward. Trusts the studio because the apps never guilt-trip or dark-pattern him into engagement.

**林雅婷, 41, Kaohsiung.** A parent using Fortune City 記帳城市 to make budgeting bearable — watching a city grow as she logs spending. Appreciates the gentle, cheerful tone and the absence of finance-app anxiety.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no apps explored yet)** | White canvas, warm single line in Slate (`#374151`) inviting exploration, one gradient CTA pill ("Explore SPARKFUL Apps"). No clutter, friendly tone. |
| **Empty (app list / saved, none yet)** | Muted Gray (`#6b7280`) single line in a cheerful, non-judgmental voice, with a path back to browse. |
| **Loading (content fetch)** | Skeleton blocks on the `#f3f4f6` tinted surface at final card dimensions, 12px radius. Flat pulse — no shadow shimmer (consistent with the shadowless system). |
| **Loading (in-place)** | Inline progress; previous content stays visible. No blocking spinner over the page. |
| **Error (load failed)** | Inline message in Slate (`#374151`) with a plain, warm explanation and a retry. No cold "Something went wrong" alone — keep the friendly voice. |
| **Error (form / input)** | Field-level message below the field describing what's valid, in a gentle tone — never a bare "Required". |
| **Success (action done)** | Brief inline confirmation in a cheerful tone; on app surfaces this is the delight moment (plant grows, planet found). No guilt, no pressure. |
| **Skeleton** | `#f3f4f6` blocks at final dimensions, 12px radius, flat pulse. |
| **Disabled** | Faint Gray (`#9ca3af`) text on reduced-opacity surface; the gradient pill fades rather than turning gray, to preserve the playful brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, pill press, focus |
| `motion-standard` | 240ms | Card/section reveal, sheet, dropdown |
| `motion-playful` | 360ms | Hero / illustrated-world reveals, app-page transitions |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, panels, pills |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-bounce-soft` | `cubic-bezier(0.34, 1.4, 0.64, 1)` | Gentle reward overshoot on success delights (sparingly) |

**Motion rules**: Motion is warm and lively but never frantic — it should feel like the "wise and cheerful friend," not a slot machine. The gradient pill responds to press with a subtle scale; sections and app worlds fade-and-rise on reveal at `motion-standard / ease-enter`. A small soft overshoot (`ease-bounce-soft`) is reserved for genuine reward moments (a habit completed, a planet discovered) and used sparingly so delight stays special. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and the overshoot is removed; the product stays fully functional and cheerful in tone.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-17) via global playwright getComputedStyle on three brand-owned surfaces:
- https://sparkful.app/ — hero CTA gradient linear-gradient(to right, rgb(251,191,36) #fbbf24, rgb(163,230,53) #a3e635, rgb(45,212,191) #2dd4bf) / 9999px / white text / 18px 600; Montserrat body; gray text ladder; box-shadow none; dark panel rgb(31,41,55) #1f2937 24px; amber glow rgb(255,251,235) #fffbeb
- https://sparkful.app/zh-TW/about — Traditional-Chinese brand surface; "創造樂趣，啟動向上", "歡迎來到「樂趣電力公司」", "打造伴隨人們多年、一同成長的有趣產品"; Montserrat with system CJK fallback (font-family resolved to montserrat, sans-serif on CJK nodes)
- https://sparkful.app/walkr — per-app accent world: rgb(33,84,104) #215468, rgb(0,69,91) #00455b, rgb(165,243,252) #a5f3fc, surface rgb(227,239,238) #e3efee, Walkr green rgb(85,182,124) #55b67c (~0.2 alpha)

Meta description (verified via page head, 2026-06-17): "SPARKFUL lights up your life like a wise and cheerful friend. SPARKFUL's apps help you take care of your health and wellness without forgetting the fun!"

Voice samples (§10) are verbatim from the live homepage and About page (EN hero/section/feature headlines; zh-TW About headlines).

Brand narrative (§11): Fourdesire (四合願) is a Taipei, Taiwan studio publishing gamified self-improvement apps under the SPARKFUL brand (Walkr, Plant Nanny 植物保姆, Fortune City 記帳城市, To-Do Adventure 記事探險, Book Morning!). The app roster and the "樂趣電力公司" self-description are confirmed from the live site (nav + About page, 2026-06-17). Founding year (~2012) and headquarters (Taipei) are widely documented public facts, not directly quoted from a verified Fourdesire statement this turn.

Personas (§13) are fictional archetypes informed by publicly observable SPARKFUL user segments (people building healthy habits through gamified apps). Names are illustrative; they do not refer to real people.

Interpretive claims (e.g., "fun is the mechanism, not the decoration", "a neutral chassis so colorful worlds can shine") are editorial readings connecting Fourdesire's observed design and stated mission to its design system, not directly sourced statements.
-->
