---
id: ncsoft
name: NCSOFT
display_name_kr: 엔씨소프트
country: KR
category: consumer-tech
homepage: "https://about.ncsoft.com/"
primary_color: "#7234e0"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=about.ncsoft.com&sz=128"
verified: "2026-06-17"
added: "2026-06-17"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-17"
  note: "Two live brand surfaces. nc.com (the renamed corporate/game portal) ships a structured DTCG token system: primary = NC Purple #7234e0 (--core_primary_normal, light theme) / #8243f2 (dark theme), on Pretendard. about.ncsoft.com (NC PLAY brand media) is a monochrome editorial surface on Helvetica Now / NotoSans-kr (ink #1e1e1e, dark hero bg #333333). NC BLUE (point cobalt #1d4b99 / #0e356a) is the Pentagram CI heritage mark; the live digital interactive primary is purple."
  colors:
    primary: "#7234e0"
    primary-strong: "#482486"
    primary-subtle: "#e8d6ff"
    primary-faint: "#f6eeff"
    primary-dark: "#8243f2"
    nc-blue: "#1d4b99"
    nc-blue-strong: "#0e356a"
    nc-blue-subtle: "#d3e2fc"
    light-blue: "#38aefa"
    ink: "#0f1011"
    ink-soft: "#1e1e1e"
    gray-015: "#252628"
    gray-025: "#3d3d43"
    gray-040: "#62626a"
    gray-055: "#888890"
    gray-065: "#a3a3a9"
    gray-075: "#bdbdc1"
    hero-dark: "#333333"
    canvas: "#ffffff"
    surface: "#f2f2f3"
    surface-alt: "#f7f7f8"
    editorial-ink: "#a9a9a9"
    editorial-line: "#ebebeb"
    editorial-faint: "#efefef"
    on-primary: "#ffffff"
    point-red: "#f1415e"
    point-green: "#21ab79"
    point-magenta: "#fa38ec"
    point-lavender: "#6768f6"
  typography:
    family: { portal: "Pretendard", media: "Helvetica Now", display: "Helvetica-Now-Display-Black", kr: "NotoSans-kr" }
    display-hero:  { size: 48, weight: 700, lineHeight: 1.2, use: "nc.com hero card headline, Pretendard Bold" }
    display-black: { size: 40, weight: 400, lineHeight: 1.45, use: "NC PLAY editorial display, Helvetica Now Display Black" }
    section:       { size: 34, weight: 700, lineHeight: 1.53, use: "Section titles, Helvetica Now / Pretendard" }
    subsection:    { size: 28, weight: 700, lineHeight: 1.36, use: "Card / feature heads" }
    feature-head:  { size: 26, weight: 700, lineHeight: 1.5, use: "FEATURED / LATEST list heads, NC PLAY" }
    nav:           { size: 20, weight: 700, lineHeight: 1.7, use: "NC PLAY primary nav (PLAY / NEWS)" }
    body:          { size: 16, weight: 400, lineHeight: 1.5, use: "Standard reading text, body default" }
    link:          { size: 16, weight: 500, lineHeight: 1.5, use: "Portal links (바로가기), Pretendard Medium" }
    label:         { size: 16, weight: 400, lineHeight: 1.5, use: "Editorial nav items, Helvetica Now" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 6, md: 10, lg: 12, xl: 16, full: 9999 }
  shadow:
    none: "none"
  components:
    button-primary: { type: button, bg: "#7234e0", fg: "#ffffff", radius: "6px", padding: "0 16px", height: "44px", font: "16px / 500 Pretendard", states: "strong #482486 · subtle bg #e8d6ff", use: "Portal primary action / CTA — NC Purple token" }
    button-icon: { type: button, bg: "#ffffff", fg: "#000000", radius: "9999px", height: "40px", border: "1px solid rgba(0,0,0,0.12)", font: "16px / 400 Pretendard", use: "White circular carousel control on nc.com hero" }
    nav-tab: { type: tab, fg: "#ffffff", font: "20px / 700 Helvetica Now", active: "text #ffffff", use: "NC PLAY top nav (PLAY active white / NEWS muted #a9a9a9)" }
    card-game: { type: card, bg: "#ffffff", fg: "#0f1011", radius: "16px", use: "Game / media card on nc.com portal grid" }
    card-play: { type: card, bg: "#333333", fg: "#ffffff", radius: "12px", use: "NC PLAY dark media tile" }
    card-editorial: { type: card, bg: "#efefef", fg: "#1e1e1e", radius: "4px", use: "NC PLAY light editorial article block" }
    badge-point: { type: badge, bg: "#f1415e", fg: "#ffffff", radius: "6px", font: "16px / 500 Pretendard", use: "Discount / status point badge (red token)" }
    avatar: { type: avatar, bg: "#ffffff", radius: "9999px", use: "Circular brand / social avatar on portal" }
  components_harvested: true
---

# Design System Inspiration of NCSOFT

## 1. Visual Theme & Atmosphere

NCSOFT — the Korean game maker behind Lineage, AION, Blade & Soul, and Throne and Liberty, and in 2026 rebranded simply to **NC** — runs two distinct but coordinated brand surfaces, and the contrast between them is the system. The corporate/game portal at `nc.com` (where `ncsoft.com` now redirects) is a bright, premium media catalog: a pure white (`#ffffff`) and cool-grey (`#f2f2f3`) canvas, near-black ink (`#0f1011`), 16px-radius game cards in a dense grid, and Pretendard as the workhorse type. Its hero is a cinematic full-bleed carousel with 48px/700 Pretendard headlines reversed white over game key-art, and small white circular control buttons (`rgba(0,0,0,0.12)` hairline border) that keep the chrome out of the way of the art. The single saturated interactive color is **NC Purple** (`#7234e0`) — surfaced as `--core_primary_normal` in the live token system, and reinforced by a CDN literally namespaced `purple` (`assets.playnccdn.com/purple/...`).

The brand-media surface at `about.ncsoft.com` (NC PLAY, "엔씨 공식 브랜드 미디어") is the opposite mood: a confident, monochrome editorial magazine. Its hero runs dark — a `#333333` stage with `#000000` panels and crisp white type — while article bodies flip to light, near-black ink (`#1e1e1e`) on white with thin `#ebebeb` / `#efefef` rules. Here the type is **Helvetica Now** for Latin and **NotoSans-kr** for Hangul, with **Helvetica Now Display Black** driving the oversized 40px editorial display lines (ALL / EDGE / INTERACTIVE). It is shadowless and grid-disciplined, reading like a design annual rather than a game site.

The unifying identity is the 2020 **Pentagram** corporate-identity renewal that produced the present logo and palette. Pentagram cut the edges of the letters at **45-degree angles** ("NC's sincerity in creating masterpieces based on cutting-edge technology"), set the letters bold with **no space between them** ("a new world that is connected"), and defined **NC BLUE** plus an **NC BLUE Tint** — a cyan-rich blue built by "filling in cyan at various percentages for sharper, clearer visibility." That heritage blue lives in the digital system as the point-cobalt family (`#1d4b99` normal, `#0e356a` strong). The net atmosphere: an engineering-grade games company that presents its products like a luxury catalog and its brand story like an editorial.

**Key Characteristics:**
- Two surfaces, one system: bright Pretendard portal (`nc.com`) + monochrome Helvetica Now editorial (`about.ncsoft.com`)
- NC Purple (`#7234e0`) as the single saturated digital primary — `--core_primary_normal`, on a `purple`-named CDN
- Structured DTCG token system on nc.com: core/neutral/point/background families as CSS variables, dual light+dark themes
- NC BLUE (point cobalt `#1d4b99` / `#0e356a`) as the Pentagram CI heritage mark — print-origin, used as a digital accent
- Helvetica Now Display Black for oversized editorial display (40px) on NC PLAY
- Near-black ink (`#0f1011` portal / `#1e1e1e` editorial) instead of pure black for text
- Shadowless: separation by tint (`#f2f2f3`), hairlines (`rgba(0,0,0,0.12)`, `#ebebeb`), and dark/light banding
- Card-radius scale 12px (NC PLAY tiles) → 16px (portal game cards); 6px buttons; full-round avatars/controls
- Point accent palette (red `#f1415e`, green `#21ab79`, magenta `#fa38ec`, light-blue `#38aefa`) for status/category

## 2. Color Palette & Roles

### Primary (NC Purple)
- **NC Purple** (`#7234e0`): Primary interactive color and CTA background. `--core_primary_normal` on the live `nc.com` portal (light theme). The system's single "action" hue.
- **Purple Strong** (`#482486`): `--core_primary_strong`. Pressed / strong-emphasis purple for active CTA states and deep accents.
- **Purple Subtle** (`#e8d6ff`): `--core_primary_subtle`. Tinted purple surface for selected chips, soft buttons, and highlight backgrounds.
- **Purple Faint** (`#f6eeff`): `--core_primary_faint`. Lightest purple wash for hover surfaces and tonal blocks.
- **Purple Dark-theme** (`#8243f2`): `--core_primary_normal` resolved in the dark theme — a slightly brighter purple for the same role on dark backgrounds.

### NC BLUE (CI heritage)
- **NC Blue** (`#1d4b99`): The Pentagram CI heritage blue, surfaced digitally as `--point_cobalt_normal`. Cyan-rich corporate blue used for trust/identity accents.
- **NC Blue Strong** (`#0e356a`): `--point_cobalt_strong`. Deep cobalt for dark-surface accents and pressed states.
- **NC Blue Subtle** (`#d3e2fc`): `--point_cobalt_subtle`. NC BLUE Tint — the light, clear cyan-blue wash described in the CI renewal.
- **Light Blue** (`#38aefa`): `--point_light_blue_normal`. Bright sky-blue point accent for links and informational highlights.

### Neutral Scale (portal gray ramp)
- **Ink** (`#0f1011`): `--background_base_1` (dark) / primary near-black ink. Headlines, strong body, nav text on light.
- **Ink Soft** (`#1e1e1e`): `--neutral_gray_010`-adjacent; the editorial ink on NC PLAY article bodies.
- **Gray 015** (`#252628`): `--neutral_gray_015`. Dark container surface, strong secondary text on light.
- **Gray 025** (`#3d3d43`): `--neutral_gray_025`. Secondary body copy.
- **Gray 040** (`#62626a`): `--neutral_gray_040`. Tertiary text, captions.
- **Gray 055** (`#888890`): `--neutral_gray_055`. Muted labels, metadata.
- **Gray 065** (`#a3a3a9`): `--neutral_gray_065`. Disabled / lowest-emphasis text.
- **Gray 075** (`#bdbdc1`): `--neutral_gray_075`. Borders, faint dividers on light.

### Surface & Editorial Neutrals
- **Pure White** (`#ffffff`): `--neutral_white`. Page background, card surfaces, reversed text on dark/purple.
- **Surface** (`#f2f2f3`): `--background_base_2` (light) / `--core_neutral_normal`. Cool-grey segmenting surface.
- **Surface Alt** (`#f7f7f8`): `--neutral_gray_097`. Warmer secondary grey for alternating blocks.
- **Hero Dark** (`#333333`): NC PLAY dark hero/stage background.
- **Editorial Ink** (`#a9a9a9`): NC PLAY muted nav / inactive labels on dark.
- **Editorial Line** (`#ebebeb`): Thin editorial divider rule.
- **Editorial Faint** (`#efefef`): NC PLAY light editorial article block surface.
- **Pure Black** (`#000000`): NC PLAY dark hero panels and maximum-contrast moments.

### Point Accents (status / category)
- **Point Red** (`#f1415e`): `--point_red_normal`. Discount / urgent / error point color.
- **Point Green** (`#21ab79`): `--point_green_normal`. Success / positive status.
- **Point Magenta** (`#fa38ec`): `--point_magenta_normal`. Vivid category / highlight accent.
- **Point Lavender** (`#6768f6`): `--point_lavender_normal`. Secondary indigo-lavender accent companion to NC Purple.

## 3. Typography Rules

### Font Family
- **Portal (nc.com)**: `Pretendard` (with `Pretendard JP` and a full Noto Sans CJK fallback stack) — the document default for all portal headlines, body, links, and UI.
- **Media (about.ncsoft.com)**: `Helvetica Now` for Latin text with `NotoSans-kr` (and `NotoSans-jp` / `NotoSans-tc`) for CJK — the editorial NC PLAY voice.
- **Display (about.ncsoft.com)**: `Helvetica-Now-Display-Black` — a heavy display cut reserved for oversized editorial lines.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Hero Headline | Pretendard | 48px (3.00rem) | 700 | 1.2 | nc.com carousel headline, reversed white over key-art |
| Editorial Display | Helvetica Now Display Black | 40px (2.50rem) | 400 (black face) | 1.45 | NC PLAY oversized display (ALL / EDGE / INTERACTIVE) |
| Section Heading | Helvetica Now / Pretendard | 34px (2.13rem) | 700 | 1.53 | Section / featured-story titles |
| Sub-section | Pretendard / Helvetica Now | 28px (1.75rem) | 700 | 1.36 | Card / feature heads (MMORPG, GAME AI) |
| Feature Head | Helvetica Now | 26px (1.63rem) | 700 | 1.5 | FEATURED / LATEST / CATEGORIES list heads |
| Nav (NC PLAY) | Helvetica Now | 20px (1.25rem) | 700 | 1.7 | Primary editorial nav (PLAY active / NEWS) |
| Body | Pretendard / Helvetica Now | 16px (1.00rem) | 400 | 1.5 | Standard reading text |
| Link | Pretendard | 16px (1.00rem) | 500 | 1.5 | Portal action links (바로가기, 사전예약) |
| Editorial Nav Item | Helvetica Now | 16px (1.00rem) | 400 | 1.5 | Secondary editorial nav items |

### Principles
- **Two type voices, by surface**: Pretendard runs the bright product portal; Helvetica Now + NotoSans-kr runs the editorial brand media. They never mix within a surface.
- **Display Black is a special occasion**: `Helvetica-Now-Display-Black` is reserved for oversized NC PLAY display moments (40px), never for body or UI.
- **Bold (700) carries headlines**: Both portal hero (48px Pretendard 700) and editorial headings (34px / 700) lean on weight 700 for hierarchy; body drops to 400.
- **Medium (500) for actions**: Portal links and CTAs sit at Pretendard 500 — a half-step up from body to mark interactivity without shouting.
- **Hangul-first fallback**: The portal stack threads Pretendard JP and the full Noto Sans CJK family so Korean, Japanese, and Traditional Chinese render consistently across NC's global storefronts.

## 4. Component Stylings

### Buttons

**Primary (NC Purple CTA)**
- Background: `#7234e0`
- Text: `#ffffff`
- Radius: 6px
- Padding: 0 16px
- Height: 44px
- Font: 16px / 500 / Pretendard
- Active: `#482486` (strong)
- Use: Portal primary action — the `--core_primary_normal` token applied to CTAs

**Soft Purple**
- Background: `#e8d6ff`
- Text: `#482486`
- Radius: 6px
- Font: 16px / 500 / Pretendard
- Use: Secondary / tinted action on light surfaces (`--core_primary_subtle`)

**Circular Carousel Control**
- Background: `#ffffff`
- Text: `#000000`
- Radius: 9999px
- Height: 40px
- Border: 1px solid `rgba(0,0,0,0.12)`
- Font: 16px / 400 / Pretendard
- Use: White circular prev/next control on the nc.com hero carousel

### Inputs & Forms

**Default (search)**
- Background: `#ffffff`
- Text: `#0f1011`
- Border: 1px solid `#bdbdc1`
- Radius: 6px
- Font: 16px / 400 / Pretendard
- Focus: 1px solid `#7234e0`
- Use: Portal search / form field

### Cards & Containers

**Portal Game Card**
- Background: `#ffffff`
- Text: `#0f1011`
- Radius: 16px
- Use: Game / media card in the nc.com portal grid (no shadow)

**NC PLAY Dark Tile**
- Background: `#333333`
- Text: `#ffffff`
- Radius: 12px
- Use: Dark media tile on the NC PLAY hero stage

**Editorial Article Block**
- Background: `#efefef`
- Text: `#1e1e1e`
- Radius: 4px
- Use: Light editorial article container on NC PLAY

### Badges

**Point Badge**
- Background: `#f1415e`
- Text: `#ffffff`
- Radius: 6px
- Font: 16px / 500 / Pretendard
- Use: Discount / urgent point badge (red token; green `#21ab79` for positive status)

### Tabs / Navigation (NC PLAY)
- Text (active): `#ffffff`
- Text (inactive): `#a9a9a9`
- Font: 20px / 700 / Helvetica Now
- Use: NC PLAY top nav — PLAY active white, NEWS muted grey

### Avatars
- Background: `#ffffff`
- Radius: 9999px (full circle)
- Use: Circular brand / social avatar on the portal

---

**Verified:** 2026-06-17 (omd:add-reference CREATE — Tier 1 live inspect, 2 brand-owned surfaces)
**Tier 1 sources:** https://about.ncsoft.com/ (NC PLAY brand media, live computed style), https://www.nc.com/ (renamed corporate/game portal — DTCG token system extracted from live CSS), https://about.ncsoft.com/en/news/article/nc-ci-renewal-project-en (official Pentagram CI renewal article)
**Tier 2 sources:** getdesign.md/ncsoft — not listed (KR coverage gap); styles.refero.design — no NCSOFT/NC style page
**Conflicts unresolved:** none. NC BLUE (Pentagram print CI, point-cobalt `#1d4b99`) vs live digital primary NC Purple (`#7234e0`) documented as an intentional print-vs-digital split, not a conflict; `primary_color` follows the live interactive token.

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px
- Notable: Portal action links sit at a generous 44px tap height; the editorial NC PLAY surface uses large 32–60px vertical padding under section heads (FEATURED 32px, CATEGORIES 60px) for magazine-style breathing room.

### Grid & Container
- nc.com: full-bleed cinematic hero carousel anchored by a 48px Pretendard headline, followed by a dense game-card grid (16px radius cards) grouped by genre (MMORPG, etc.).
- about.ncsoft.com: editorial column grid — a dark hero stage banding into light article blocks; FEATURED / LATEST / CATEGORIES sections stack vertically with oversized Display Black display lines.
- Both surfaces center content with generous margins and never crowd the key art.

### Whitespace Philosophy
- **Catalog density, editorial calm**: the product portal packs game cards tightly while the brand-media surface is airy and column-led — density follows intent.
- **Banded contrast**: NC PLAY alternates a dark `#333333` / `#000000` hero with light `#ffffff` / `#efefef` article bands; the portal alternates white and `#f2f2f3` tinted sections.
- **Key-art first**: hero chrome (controls, headlines) is minimal so cover art carries the page.

### Border Radius Scale
- Small (4px): editorial article blocks on NC PLAY
- Button (6px): portal CTAs, inputs, point badges
- Medium (10px): scroll/utility elements
- Large (12px): NC PLAY dark media tiles
- XL (16px): portal game/media cards — the workhorse
- Full (9999px / 50%): circular controls and avatars

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline text, most surfaces |
| Banding (Level 1) | dark `#333333` / light `#ffffff` background shift | NC PLAY hero-vs-article separation |
| Tint (Level 2) | `#f2f2f3` / `#f7f7f8` background shift | Portal section separation |
| Hairline (Level 3) | `1px solid rgba(0,0,0,0.12)` / `#ebebeb` | Circular control outline, editorial divider rules |

**Shadow Philosophy**: Both NC surfaces are essentially shadowless. Live inspection found `box-shadow: none` across the NC PLAY hero, nav, headings, and tiles, and the portal relies on flat cards with hairline borders rather than elevation. Depth is communicated through dark/light banding (NC PLAY), cool-grey tint (`#f2f2f3`, portal), and thin hairlines. When emphasis is needed the system reaches for color — NC Purple (`#7234e0`) or a point accent (`#f1415e`) — never a drop shadow. This keeps both the catalog and the editorial feeling clean, fast, and modern.

## 7. Do's and Don'ts

### Do
- Use NC Purple (`#7234e0`) as the single saturated interactive/CTA color
- Use Pretendard for the product portal (headlines 700, body 400, links 500)
- Use Helvetica Now + NotoSans-kr for the editorial NC PLAY surface
- Reserve Helvetica Now Display Black for oversized (40px) editorial display lines only
- Use near-black ink (`#0f1011` portal / `#1e1e1e` editorial) for text instead of pure black
- Separate with dark/light banding and `#f2f2f3` tint + hairlines, not shadows
- Keep button radius at 6px and game-card radius at 16px
- Use point accents (`#f1415e`, `#21ab79`, `#38aefa`) only for status/category, not chrome
- Treat NC BLUE (`#1d4b99`) as the CI heritage / trust accent, distinct from the purple primary

### Don't
- Spread NC Purple across many elements — it dilutes the single-action signal
- Use drop shadows for elevation — NC is a flat, shadow-free system
- Mix Pretendard and Helvetica Now within the same surface
- Use Display Black for body or UI text — it is display-only
- Use pure black (`#000000`) for body text — reserve near-black ink
- Use NC BLUE and NC Purple interchangeably — blue is heritage/print, purple is the live digital action color
- Crowd hero chrome over the game key-art — controls stay minimal
- Use pill-shaped buttons — portal CTAs are a calm 6px, only controls/avatars are full-round

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column; hero headline compresses; game grid → 1–2 up; nav collapses |
| Tablet | 640-1024px | 2–3-up game cards; moderate padding; editorial columns narrow |
| Desktop | 1024-1440px | Full carousel hero, multi-column game grid, full editorial layout |

### Touch Targets
- Portal action links / CTAs at ~44px height — comfortably tappable
- Circular carousel controls at 40px diameter
- Editorial nav items at 32–36px row height within the NC PLAY header

### Collapsing Strategy
- Hero: 48px Pretendard headline scales down on mobile, weight 700 maintained
- Game-card grid: multi-column → 2-up → single column stacked
- NC PLAY: dark hero stage and light article bands maintain full-width banding; Display Black scales down
- Genre groupings (MMORPG, etc.) reflow vertically on narrow viewports

### Image Behavior
- Game key-art and brand imagery carry no shadow at any size, consistent with the flat system
- Portal cards maintain 16px radius across breakpoints; NC PLAY tiles maintain 12px
- Hero key-art remains full-bleed; headline reverses white and stays legible over art

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: NC Purple (`#7234e0`), pressed `#482486`, soft `#e8d6ff`
- NC BLUE (heritage accent): `#1d4b99`, strong `#0e356a`, tint `#d3e2fc`
- Background: Pure White (`#ffffff`), tinted surface `#f2f2f3` / `#f7f7f8`
- NC PLAY hero: dark `#333333` / `#000000`
- Ink: `#0f1011` (portal) / `#1e1e1e` (editorial)
- Secondary text: `#3d3d43` → muted `#888890` → faint `#a3a3a9`
- Point accents: red `#f1415e`, green `#21ab79`, magenta `#fa38ec`, light-blue `#38aefa`, lavender `#6768f6`
- Hairline: `rgba(0,0,0,0.12)` / `#ebebeb`

### Example Component Prompts
- "Create an nc.com portal hero: full-bleed game key-art, 48px Pretendard weight 700 white headline reversed over the art, a 16px-radius white game-card grid below grouped by genre, and a white circular carousel control (40px, 1px rgba(0,0,0,0.12) border). One NC Purple CTA: #7234e0 background, white text, 6px radius, 0 16px padding, 16px Pretendard 500."
- "Design an NC PLAY editorial section: dark #333333 hero stage with white Helvetica Now Display Black 40px display line, banding into a light #ffffff article block. Section head 34px Helvetica Now weight 700 #1e1e1e, body 16px NotoSans-kr #1e1e1e. Divider 1px #ebebeb. No shadow."
- "Build a portal game card: white #ffffff background, 16px radius, no shadow, near-black #0f1011 title at 28px Pretendard 700. Add a red point badge: #f1415e background, white text, 6px radius, '60% 할인'."
- "Create NC PLAY top nav: dark surface, 20px Helvetica Now weight 700 items, active item white #ffffff, inactive #a9a9a9 (PLAY active / NEWS muted)."

### Iteration Guide
1. NC Purple (`#7234e0`) is the single action color — don't spread it
2. Pretendard runs the portal, Helvetica Now + NotoSans-kr runs the editorial — never mix per surface
3. Display Black (40px) is editorial-display-only
4. No shadows — separate with dark/light banding, `#f2f2f3` tint, and hairlines
5. Button radius 6px, game-card radius 16px, NC PLAY tile 12px, controls/avatars full-round
6. Text is near-black (`#0f1011` / `#1e1e1e`), never pure black for body
7. NC BLUE (`#1d4b99`) is heritage/trust accent — distinct from the purple primary
8. Point accents (`#f1415e`, `#21ab79`, `#38aefa`) only for status/category

---

## 10. Voice & Tone

NC's voice is **confident, craft-proud, and connection-minded** — a games company that takes both its technology and its brand storytelling seriously. The corporate tagline "Welcome to a New world Connected Through Joy" and the portal description "NC connects the world through play" set the register: ambitious in scope, warm in framing, never gimmicky. The brand-media surface (NC PLAY, "엔씨 공식 브랜드 미디어" / "NC's official brand media") treats readers as people interested in craft — game art, sound, R&D, AI — not just players to be monetized. Product copy on the portal is direct and functional ("바로가기", "사전예약", "자세히 보기").

| Context | Tone |
|---|---|
| Corporate / mission | Ambitious, warm. "Welcome to a New world Connected Through Joy." Connection-framed, not hype. |
| Portal product copy | Direct, functional. "바로가기", "사전예약", "여름 정기 세일". |
| NC PLAY editorial | Craft-proud, curatorial. Sections named The Game Art, Sound, Behind The Story, Our Way, AI. |
| Brand / CI storytelling | Reflective, design-literate. "Renewal is not creating something new, but realigning existing values." |
| News / press | Plain, informative. Korean press-release register. |

**Voice samples (verbatim from live brand-owned surfaces):**
- "Welcome to a New world Connected Through Joy" — nc.com page title (mission-framed). *(verified live 2026-06-17)*
- "From MMORPGs like Lineage, AION, Blade & Soul, and THRONE AND LIBERTY ... NC connects the world through play." — nc.com meta description. *(verified live 2026-06-17)*
- "Renewal is not creating something new, but realigning existing values and sharing a common brand mission in order to take the brand to the next level." — CI renewal article. *(verified live 2026-06-17)*

**Forbidden register**: pay-to-win urgency, fear-of-missing-out manipulation in brand copy, hollow superlatives ("revolutionary", "world's best"), and any tone that treats players as marks rather than an audience for craft.

## 11. Brand Narrative

NCSOFT was founded in **1997** by **김택진 (Kim Taek-jin, CEO)** and became one of Korea's defining game companies on the strength of **Lineage** (1998), the genre-shaping MMORPG, later joined by **AION**, **Blade & Soul**, and **Throne and Liberty**. Over two decades NCSOFT grew from a single landmark title into a global games and technology company with serious in-house R&D and AI investment — a posture the NC PLAY brand media foregrounds with sections devoted to game art, sound, and "GAME AI."

In **2020**, NCSOFT undertook a corporate-identity renewal with **Pentagram**, the world-renowned design agency. As the company's own account puts it, "the reason that game IPs with different roots, such as Lineage, AION, and Blade & Soul were able to be grouped together under the NCSOFT brand was because they share the same core values—namely a commitment to quality and a passion for creating joy." Pentagram cut the letterforms' edges at 45-degree angles, set them bold and tightly spaced ("a new world that is connected"), and defined **NC BLUE** with an **NC BLUE Tint** for "sharper and clearer visibility." In **2026** the company formalized the shorthand it had been growing into, **rebranding from NCSOFT to simply NC** — `ncsoft.com` now redirects to `nc.com`, and the corporate voice ("Connected Through Joy") leans fully into the connection theme the CI renewal established.

What NC's design refuses, visible across both surfaces: the heavy, gimmicky chrome of typical game-portal marketing (no shadow-stacked cards, no flashing urgency) and the cold anonymity of pure-corporate sites. What it embraces: a structured digital token system (NC Purple primary, full neutral and point-accent ramps), an editorial brand-media voice that treats game-making as craft worth documenting, and a Pentagram-grade discipline that makes a games company read like a design house.

## 12. Principles

1. **Connected through joy.** NC's stated mission is connection via play. *UI implication:* favor warm, inviting framing and surfaces that showcase shared experiences (game art, communities) over transactional pressure.
2. **Craft is worth documenting.** The NC PLAY brand media exists to show the art, sound, and R&D behind the games. *UI implication:* give editorial content real typographic weight (Display Black, generous columns); don't bury craft beneath store chrome.
3. **One action, one color.** NC Purple (`#7234e0`) means "do this." *UI implication:* reserve the saturated purple for the primary CTA so the next step is unambiguous.
4. **Heritage and product, distinct.** NC BLUE is the Pentagram CI heritage mark; NC Purple is the live digital action color. *UI implication:* use blue for identity/trust accents and purple for interaction — never swap them.
5. **Flat, fast, modern.** Mobile-native clarity over decorative depth. *UI implication:* no shadows; separate with banding, tint, and hairlines; keep key-art and content first.
6. **Connected letterforms, connected system.** The CI's no-space, 45°-cut logo encodes "a connected world." *UI implication:* keep the system coherent across surfaces — shared tokens, consistent radius and ink, two type voices that each own a surface.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable NC audiences (MMORPG players, global console gamers, design/brand-curious readers of NC PLAY), not individual people.*

**박준호, 33, 서울.** A long-time Lineage and AION player who pre-orders new chapters and tracks seasonal sales on the portal. Values fast, clear "바로가기 / 사전예약" paths and reversed-white headlines that read instantly over key-art. Trusts NC because the catalog feels premium, not spammy.

**Mina Cho, 28, Vancouver.** A console player who discovered Throne and Liberty and browses NC's global storefront in English. Appreciates that the portal renders cleanly across languages (the Pretendard + Noto CJK stack) and that discounts are flagged with a single clear point-red badge rather than flashing banners.

**이서연, 35, 판교.** A product designer who reads NC PLAY for the craft — The Game Art, Sound, the Pentagram CI story. Notices the Helvetica Now Display Black editorial type and the shadowless, banded layout, and respects that a games company invests in design-house-grade brand media.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no results / library)** | White canvas. Single near-black ink (`#0f1011`) line at body size explaining nothing matches, with one NC Purple CTA to adjust or browse. No clutter illustration. |
| **Empty (wishlist / saved, none yet)** | Muted Gray (`#888890`) single line: nothing saved yet, plus a path back to the catalog. Calm, honest. |
| **Loading (catalog fetch)** | Skeleton cards on `#f2f2f3` tinted surface at final 16px-radius card dimensions. Flat pulse — no shadow shimmer, consistent with the shadowless system. |
| **Loading (in-place section refresh)** | Subtle NC Purple progress affordance; previous game cards stay visible during refresh. |
| **Error (load failed)** | Inline message in near-black ink with a plain-language explanation and a retry. Point-red (`#f1415e`) accent on the icon/border. No bare "오류가 발생했습니다". |
| **Error (form validation)** | Field-level message below the input describing what is valid; point-red border, never just "필수". |
| **Success (pre-order / purchase placed)** | Brief inline confirmation in calm tone with point-green (`#21ab79`) accent; next-step detail linked immediately below. No celebratory spam. |
| **Skeleton** | `#f2f2f3` blocks at final dimensions, 16px radius (portal) / 12px (NC PLAY tiles), flat pulse. |
| **Disabled** | Faint Gray (`#a3a3a9`) text on reduced-opacity surface; NC Purple actions fade rather than turn grey to preserve brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, card lift-hint, focus |
| `motion-standard` | 240ms | Carousel slide, card/section reveal, dropdown |
| `motion-slow` | 360ms | Hero crossfade, dark/light band transitions |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, sheets, carousel slides in |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is cinematic-but-restrained — the hero carousel crossfades game key-art at `motion-slow / ease-standard`, and portal cards reveal from below at `motion-standard / ease-enter`. The NC PLAY editorial surface transitions between dark and light bands as a slow ambient crossfade rather than a slide. No bounce or spring on UI chrome — a premium games brand signals craft and steadiness, not toy-like playfulness. Under `prefers-reduced-motion: reduce`, carousels stop auto-advancing and all transitions collapse to instant; both surfaces remain fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-17) via global playwright getComputedStyle:
- https://about.ncsoft.com/ (NC PLAY brand media) — dark hero #333333/#000000, white text
  #ffffff/#dddddd/#ebebeb, Helvetica Now + NotoSans-kr, Helvetica-Now-Display-Black 40px
  display, radius 12px/10px, box-shadow none. Title "NC PLAY (엔씨 플레이)", desc
  "엔씨 공식 브랜드 미디어".
- https://www.nc.com/ (renamed corporate/game portal; ncsoft.com redirects here) — Pretendard
  stack, ink #0f1011, surfaces #ffffff/#f2f2f3/#f7f7f8, radius 16px/6px/50%. Structured DTCG
  CSS token system extracted from live stylesheets: --core_primary_normal #7234e0 (light) /
  #8243f2 (dark), --core_primary_strong #482486, --core_primary_subtle #e8d6ff, full neutral
  gray ramp (--neutral_gray_005..097), point family (--point_cobalt_normal #1d4b99,
  --point_light_blue_normal #38aefa, --point_red_normal #f1415e, --point_green_normal #21ab79,
  --point_magenta_normal #fa38ec, --point_lavender_normal #6768f6). CDN namespaced "purple"
  (assets.playnccdn.com/purple/...). Title "NC - Welcome to a New world Connected Through Joy".
- https://about.ncsoft.com/en/news/article/nc-ci-renewal-project-en — official CI renewal
  article (Pentagram). Quotes used in §10/§11 are verbatim from this page: 45° edge cut,
  no-space connected letters, NC BLUE + NC BLUE Tint (cyan-rich), "Renewal is not creating
  something new...".

Token-level claims (§1-9) are sourced from this live inspection and the live CSS token system.

Voice samples (§10) are verbatim from live brand-owned surfaces (nc.com title + meta
description, CI renewal article).

Brand narrative (§11): NCSOFT founded 1997 by 김택진 (Kim Taek-jin); Lineage (1998), AION,
Blade & Soul, Throne and Liberty; 2020 Pentagram CI renewal (verbatim quotes verified live);
2026 rename NCSOFT → NC (verified live: ncsoft.com redirects to nc.com, corporate voice
"Connected Through Joy"). Founding year, founder, and IP history are widely documented public
facts; the CI-renewal and rename specifics are verified against the live brand-owned sources
above this turn.

Personas (§13) are fictional archetypes informed by publicly observable NC audiences. Names
are illustrative; they do not refer to real people.

Interpretive claims (e.g., "heritage and product, distinct", "craft worth documenting",
"flat, fast, modern as a rejection of gimmicky game-portal chrome") are editorial readings
connecting NC's observed design and stated values to its system, not directly sourced NC
statements.
-->
