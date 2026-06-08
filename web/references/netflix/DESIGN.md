---
id: netflix
name: Netflix
country: US
category: consumer-tech
homepage: "https://www.netflix.com"
primary_color: "#E50914"
logo:
  type: simpleicons
  slug: "netflix"
verified: "2026-06-06"
added: "2026-06-06"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#E50914"
    primary-hover: "#B20710"
    brand: "#E50914"
    canvas: "#141414"
    foreground: "#FFFFFF"
    muted: "#B3B3B3"
    on-primary: "#FFFFFF"
    surface: "#181818"
    hairline: "#404040"
    body: "#B3B3B3"
    error: "#E87C03"
    success: "#2A9D3C"
    accent-match: "#46D369"
  typography:
    family: { sans: "Netflix Sans", mono: "Courier New" }
    billboard-title: { size: 56, weight: 700, lineHeight: 1.1, tracking: -0.01, use: "Hero artwork title" }
    display:         { size: 40, weight: 700, lineHeight: 1.15, tracking: -0.01, use: "Marketing hero, sign-up headline" }
    heading-lg:      { size: 32, weight: 700, lineHeight: 1.2, use: "Modal title, detail-page show name" }
    heading:         { size: 24, weight: 700, lineHeight: 1.25, use: "Section / category headers" }
    row-title:       { size: 20, weight: 700, lineHeight: 1.3, use: "Row headers like Trending Now" }
    subtitle:        { size: 18, weight: 500, lineHeight: 1.4, use: "Card title in expanded preview" }
    body-lg:         { size: 16, weight: 400, lineHeight: 1.5, use: "Synopsis, descriptions" }
    body:            { size: 14, weight: 400, lineHeight: 1.5, use: "Standard metadata, list rows" }
    caption:         { size: 13, weight: 400, lineHeight: 1.4, use: "Match %, maturity rating, runtime" }
    micro:           { size: 12, weight: 400, lineHeight: 1.4, tracking: 0.02, use: "Legal, fine print, footer links" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 60 }
  rounded: { sm: 2, md: 4, lg: 6, full: 9999 }
  shadow:
    hover: "0 12px 24px rgba(0,0,0,0.8)"
    floating: "0 6px 16px rgba(0,0,0,0.7)"
    modal: "0 8px 32px rgba(0,0,0,0.9)"
  components_harvested: true
  components:
    button-primary: { type: button, bg: "#FFFFFF", fg: "#000000", radius: "4px", padding: "8px 24px", font: "16px / 700", states: "hover rgba(255,255,255,0.75)", use: "Play action on billboard / detail / continue-watching" }
    button-cta: { type: button, bg: "#E50914", fg: "#FFFFFF", radius: "4px", padding: "16px 28px", font: "18px / 700", states: "hover #B20710", use: "Marketing acquisition CTA (Get Started, Finish Sign-Up)" }
    button-secondary: { type: button, bg: "rgba(109,109,110,0.7)", fg: "#FFFFFF", radius: "4px", padding: "8px 24px", font: "16px / 700", states: "hover rgba(109,109,110,0.4)", use: "More Info beside Play" }
    button-circle: { type: button, bg: "rgba(42,42,42,0.6)", fg: "#FFFFFF", border: "2px solid rgba(255,255,255,0.5)", radius: "9999px", height: "40px", states: "hover border #FFFFFF", use: "Add-to-list, Like, expand on hover cards" }
    input-auth: { type: input, bg: "#161616", fg: "#FFFFFF", border: "1px solid #808080", radius: "4px", padding: "16px", font: "16px / 400", focus: "border #FFFFFF", states: "error border-bottom 2px #E87C03", use: "Email/password on sign-in" }
    input-search: { type: input, bg: "rgba(0,0,0,0.75)", fg: "#FFFFFF", border: "1px solid #FFFFFF", radius: "4px", padding: "7px 12px", font: "14px / 400", use: "Top-nav search, expands from icon" }
    card-tile: { type: card, bg: "#181818", radius: "4px", shadow: "none", use: "Resting poster tile in a scrolling row" }
    card-hover: { type: card, bg: "#181818", radius: "6px", shadow: "0 12px 24px rgba(0,0,0,0.8)", states: "transform scale(1.5)", use: "Expanded preview card lifting above row" }
    badge-new: { type: badge, bg: "transparent", fg: "#E50914", font: "12px / 700", use: "NEW EPISODE / RECENTLY ADDED overlay, uppercase" }
    badge-top10: { type: badge, bg: "#E50914", fg: "#FFFFFF", font: "9px / 700", use: "Top 10 trending-rank ribbon" }
    badge-maturity: { type: badge, bg: "rgba(51,51,51,0.6)", fg: "#FFFFFF", border: "1px solid #666666", radius: "2px", padding: "2px 6px", font: "13px / 400", use: "Maturity rating on detail pages / previews" }
    tab-nav: { type: tab, fg: "#E5E5E5", font: "14px / 400", active: "color #FFFFFF weight 700", states: "hover #B3B3B3", use: "Top nav links" }
    toast-banner: { type: toast, bg: "#E87C03", fg: "#FFFFFF", padding: "12px 16px", font: "14px / 500", use: "Account / payment full-width top banner" }
    dialog-modal: { type: dialog, bg: "#181818", fg: "#FFFFFF", radius: "6px", padding: "0 / 24px body", shadow: "0 8px 32px rgba(0,0,0,0.9)", use: "Title-detail modal, account-action confirm" }
    toggle-default: { type: toggle, bg: "#737373", radius: "9999px", states: "on track #E50914, thumb #FFFFFF", use: "Autoplay previews, subtitle, profile-lock switches" }
---

# Design System Inspiration of Netflix

## 1. Visual Theme & Atmosphere

Netflix is the streaming interface that taught the world what "lean-back" entertainment software should feel like — a dark, cinematic theater where the content is the only thing that glows. The product opens on near-black (`#141414`) and stays there. There is no white-canvas mode, no light theme in the consumer app; the darkness is not a setting, it is the brand. Against that black, full-bleed artwork — show posters, hero billboards, character key-art — supplies all the color the screen needs. The UI itself recedes to white text, grey metadata, and one searing red accent: **Netflix Red `#E50914`**, reserved almost exclusively for the logo, the primary CTA, and progress fills.

The custom **Netflix Sans** typeface (designed with foundry Dalton Maag, shipped 2018, replacing Gotham) is the quiet workhorse. It is a geometric, confident, faintly condensed grotesque tuned for screen rendering at TV viewing distance and mobile arm's-length alike. It carries the same optical voice from the wordmark down to the 12px caption, which is the point: one family, top to bottom, so the chrome feels like a single continuous surface and never competes with the artwork.

What defines Netflix visually is the **theater principle**: dim the room, light the screen. Chrome is intentionally low-contrast (grey-on-black) so that when artwork appears it reads as luminous. Rows of posters scroll horizontally; the page is a grid of doors into content, each door a 16:9 or 2:3 image with a hover-expand that pops a preview. The interface is less a set of widgets and more a dark frame around moving pictures.

**Key Characteristics:**
- Netflix Red (`#E50914`) used sparingly — logo, primary CTA, progress bars, never as a background wash
- Near-black canvas (`#141414`) as the permanent, theme-less ground
- Netflix Sans (Dalton Maag, 2018) — one geometric family across the entire UI
- Full-bleed artwork supplies color; chrome stays grey-on-black to let posters glow
- Horizontal poster rows ("sliders") as the primary navigation metaphor
- Hover-to-expand cards that scale up and reveal preview controls
- Top nav fades from transparent over the hero billboard to solid black on scroll

## 2. Color Palette & Roles

### Primary
- **Netflix Red** (`#E50914`): The brand red (Pantone 1795 C, RGB 229·9·20). Primary CTA fill, logo, progress-bar fill, active selection underline. Energetic, digital, legible on black and white. Used as accent, never as a large fill area.
- **Dark Red** (`#B20710`): Hover/pressed state for the red CTA; secondary brand red in marketing gradients.
- **Pure Black** (`#000000`): Player background, modal scrims, the deepest layer. Body of the video surface.
- **Near Black** (`#141414`): The app canvas — the default page and row background. Slightly lifted from pure black so layered surfaces are distinguishable.
- **Pure White** (`#FFFFFF`): Primary text, active icons, logo on dark contexts.

### Brand (Logo / Marketing)
- **Netflix Red** (`#E50914`): The wordmark and "N" ribbon mark. The single non-negotiable brand asset color.
- **Black** (`#000000`) / **White** (`#FFFFFF`): The only approved logo backgrounds. The mark is never placed on a colored fill.

### Semantic
- **Error Red** (`#E87C03`→`#E50914` family): Form errors use a warm red `#E50914`; auth/payment errors render in `#E87C03` amber-red to distinguish from the brand red CTA on the same screen.
- **Success Green** (`#2A9D3C`): "Downloaded", "Added to list" confirmations. Rare — Netflix avoids semantic green in the browse UI.
- **Warning Amber** (`#E87C03`): Billing reminders, payment-failed banners, "Your plan changes soon".
- **New Badge Red** (`#E50914`): "New Episode", "Recently Added" ribbons reuse the brand red.

### Neutral Scale (dark-first)
- **Grey 900** (`#141414`): App canvas, row background.
- **Grey 850** (`#181818`): Card resting fill, expanded preview-card body.
- **Grey 800** (`#2F2F2F`): Hover row background, secondary button fill.
- **Grey 700** (`#404040`): Borders on dark surfaces, divider lines, circle-icon button outline.
- **Grey 600** (`#6D6D6E`): Disabled text, muted controls, secondary button border.
- **Grey 500** (`#808080`): Caption/metadata text, "secondary" CTA label, inactive nav links.
- **Grey 400** (`#B3B3B3`): Body metadata, sub-headings, the canonical "Netflix grey" for descriptions.
- **Grey 300** (`#E5E5E5`): Emphasized secondary text, list-item labels.
- **White** (`#FFFFFF`): Primary headings, active nav, key labels.

### Surface & Borders
- **Border Default**: `#404040` (grey700). Inputs, dividers, icon-button rings on dark.
- **Border Subtle**: `#333333`. Hairline separators inside dark cards.
- **Overlay Scrim**: `rgba(0,0,0,0.7)` to `rgba(0,0,0,0.9)`. Modal and player-control scrims.
- **Hero Gradient**: `linear-gradient(180deg, rgba(20,20,20,0) 0%, rgba(20,20,20,1) 100%)` — the bottom-of-billboard fade that blends artwork into the canvas. Also a left-to-right variant `rgba(0,0,0,0.6)→transparent` for text legibility over key-art.

## 3. Typography Rules

### Font Family
- **Primary**: `"Netflix Sans", "Helvetica Neue", Helvetica, Arial, sans-serif`
- **Legacy fallback**: Pre-2018 surfaces used Gotham / `"Roboto"`; the modern stack standardizes on Netflix Sans.
- **Monospace**: `"Courier New", monospace` (used only in dev/diagnostic overlays, not consumer UI).

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Billboard Title | Netflix Sans | 56px | 700 | 1.1 | -0.01em | Hero artwork title (often replaced by logo art) |
| Display | Netflix Sans | 40px | 700 | 1.15 | -0.01em | Marketing hero, sign-up headline |
| Heading Large | Netflix Sans | 32px | 700 | 1.2 | normal | Modal title, detail-page show name |
| Heading | Netflix Sans | 24px | 700 | 1.25 | normal | Section / category headers |
| Row Title | Netflix Sans | 20px | 700 | 1.3 | normal | "Trending Now", "Continue Watching" |
| Subtitle | Netflix Sans | 18px | 500 | 1.4 | normal | Card title in expanded preview |
| Body Large | Netflix Sans | 16px | 400 | 1.5 | normal | Synopsis, descriptions |
| Body | Netflix Sans | 14px | 400 | 1.5 | normal | Standard metadata, list rows |
| Caption | Netflix Sans | 13px | 400 | 1.4 | normal | Match %, maturity rating, runtime |
| Micro | Netflix Sans | 12px | 400 | 1.4 | 0.02em | Legal, fine print, footer links |

### Principles
- **One family, full range**: Netflix Sans ships Light through Black; the UI primarily uses 400 (body/metadata), 500 (card labels), and 700 (titles/CTAs). Bold titles, regular everything else.
- **Grey is the default body color**: descriptive text is `#B3B3B3`, not white. White is reserved for the single most important label per surface, preserving contrast hierarchy on black.
- **Tight display, loose body**: large titles tighten letter-spacing (`-0.01em`) for cinematic density; body text stays at normal tracking with generous 1.5 line-height for arm's-length readability.
- **No italics in chrome**: emphasis comes from weight and color, not slant. Italics appear only inside subtitle/caption rendering of the video itself.

## 4. Component Stylings

### Buttons

Netflix buttons are flat, rounded-rectangle, high-contrast. The primary action on the player and browse surfaces is white (a "play" button), while red is reserved for marketing CTAs and the sign-up flow. There is no shadow on dark surfaces — separation comes from fill contrast.

**Primary / White (Play)**
- Background: `#FFFFFF`
- Text: `#000000`
- Border: none
- Radius: 4px
- Padding: 8px 24px
- Font: 16px / 700 / Netflix Sans
- Icon: leading play glyph, 24px, `#000000`
- Hover: background `rgba(255,255,255,0.75)`
- Use: "재생 / Play" on billboard, detail page, continue-watching card — the dominant action

**Primary / Red (Marketing CTA)**
- Background: `#E50914`
- Text: `#FFFFFF`
- Border: none
- Radius: 4px
- Padding: 16px 28px
- Font: 18px / 700 / Netflix Sans (24px on marketing hero)
- Hover: background `#B20710`
- Use: "Get Started", "Finish Sign-Up", "Restart Membership" — acquisition surfaces only

**Secondary / Grey (More Info)**
- Background: `rgba(109,109,110,0.7)` (grey600 @70%)
- Text: `#FFFFFF`
- Border: none
- Radius: 4px
- Padding: 8px 24px
- Font: 16px / 700 / Netflix Sans
- Icon: leading "ⓘ" info glyph
- Hover: background `rgba(109,109,110,0.4)`
- Use: "상세 정보 / More Info" paired beside the white Play button

**Circle Icon Button**
- Background: `rgba(42,42,42,0.6)`
- Border: 2px solid `rgba(255,255,255,0.5)`
- Radius: 9999px
- Size: 40px diameter (44px on detail page)
- Icon: 20px, `#FFFFFF`
- Hover: border `#FFFFFF`, icon `#FFFFFF`
- Use: Add-to-list (+), Like (👍), expand (⌄) on hover cards

### Inputs

Sign-in and search inputs sit on dark fills with subtle borders; the email field on the marketing page is a notable high-contrast exception.

**Auth Field (dark)**
- Background: `#161616` (with `rgba(22,22,22,0.7)` over artwork)
- Text: `#FFFFFF`
- Border: 1px solid `#808080`
- Radius: 4px
- Padding: 16px
- Font: 16px / 400 / Netflix Sans
- Placeholder / floating label: `#8C8C8C`
- Focus: border `#FFFFFF`, label floats up to 11px
- Error: border-bottom 2px `#E87C03`, message `#E87C03` 13px below
- Use: Email/password on the sign-in screen

**Search Field**
- Background: `rgba(0,0,0,0.75)`
- Text: `#FFFFFF`
- Border: 1px solid `#FFFFFF`
- Radius: 4px
- Padding: 7px 12px
- Font: 14px / 400 / Netflix Sans
- Icon: leading magnifier 18px `#FFFFFF`
- Use: Top-nav search, expands from an icon

### Cards (Title Cards)

The title card is THE Netflix component — a poster tile in a horizontal row that expands on hover.

**Resting (Row Tile)**
- Background: artwork image, fallback `#181818`
- Border: none
- Radius: 4px
- Aspect: 16:9 (boxshot rows) or 2:3 (portrait rows)
- Shadow: none at rest
- Use: Default state in a scrolling row

**Hover (Expanded Preview)**
- Background: `#181818` body below 16:9 artwork
- Border: none
- Radius: 6px (top corners follow artwork, bottom info-panel squared-rounded)
- Transform: `scale(1.5)` with `transform-origin` toward row center
- Shadow: `0 12px 24px rgba(0,0,0,0.8)`
- Contains: muted autoplay preview, action button row (play, +, like, expand), match % in green `#46D369`, maturity badge, duration, genre tags
- Use: Hover/focus on a row tile — lifts above neighbors with z-index and shadow

**Match Score**
- Text: `#46D369` (Netflix green)
- Font: 14px / 700 / Netflix Sans
- Use: "98% Match" inside expanded cards

### Badges

**New / Recently Added**
- Background: transparent
- Text: `#E50914`
- Border: none
- Font: 12px / 700 / Netflix Sans, uppercase, letter-spacing 0.05em
- Use: "NEW EPISODE", "RECENTLY ADDED" overlaid bottom-left on artwork

**Top 10 Ribbon**
- Background: `#E50914` (red triangle ribbon, top-right of tile)
- Text: `#FFFFFF`
- Font: 9px / 700 uppercase "TOP 10"
- Use: Trending-rank indicator on qualifying tiles

**Maturity Rating**
- Background: `rgba(51,51,51,0.6)`
- Text: `#FFFFFF`
- Border: 1px solid `#666666` (left accent line for some regions)
- Radius: 2px
- Padding: 2px 6px
- Font: 13px / 400 / Netflix Sans
- Use: "18", "15+", "TV-MA" on detail pages and previews

### Tabs / Nav

**Top Nav Link**
- Text: `#E5E5E5` (active `#FFFFFF` 700)
- Font: 14px / 400 / Netflix Sans
- Hover: `#B3B3B3`
- Background: transparent → `#141414` solid on scroll
- Use: Home / TV Shows / Movies / New & Popular / My List

**Profile Gate Tile**
- Background: artwork avatar, `#333333` fallback
- Radius: 4px
- Size: 84px–200px square depending on viewport
- Hover: 2px solid `#FFFFFF` outline, label brightens white
- Use: "Who's watching?" profile selection grid

### Progress Bar

**Continue Watching**
- Track: `#404040`
- Fill: `#E50914`
- Height: 3px
- Radius: 0
- Use: Resume position under continue-watching tiles and on the player scrubber

### Toasts / Banners

**Account Banner**
- Background: `#E87C03` (warning) or `#E50914` (urgent)
- Text: `#FFFFFF`
- Padding: 12px 16px
- Font: 14px / 500 / Netflix Sans
- Use: "Update your payment method", full-width top banner

### Dialogs

**Modal (Detail / Confirm)**
- Background: `#181818`
- Text: `#FFFFFF`
- Border: none
- Radius: 6px
- Padding: 0 (artwork-bleed top) then 24px body
- Shadow: `0 8px 32px rgba(0,0,0,0.9)`
- Scrim: `rgba(0,0,0,0.7)`
- Use: Title-detail modal opened from a tile, account-action confirmations

### Toggles

**Default**
- Track: `#E50914` (on) / `#737373` (off)
- Radius: 9999px
- Thumb: `#FFFFFF` circle
- Use: Autoplay previews, subtitle settings, profile-lock switches

---


**Tier 1 sources:** https://www.netflix.com (live production site, verified via live DOM getComputedStyle).

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Common values: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 60px
- Row gutter (between rows): ~3vw vertical, scaling with viewport
- Tile gap (within a row): 4px–8px, kept tight so more tiles peek at row edges

### Grid & Container
- Page padding: 4% of viewport width left/right (`padding: 0 4vw`)
- Rows are horizontally scrollable carousels, not a fixed grid — tile count per row is responsive (2 on mobile → 6+ on wide desktop)
- Hero billboard: full-bleed, ~56vh tall, artwork right-aligned with left-side text gradient
- Detail modal: max-width ~850px, centered, artwork bleeds to modal edges

### Whitespace Philosophy
- **Let artwork breathe, keep chrome tight**: generous vertical gaps between rows so each category reads as its own shelf; tight gaps within a row so the carousel feels abundant.
- **Edge-peek**: tiles are deliberately clipped at row edges to signal "scroll for more" — the row never ends cleanly at the viewport.
- **Dark negative space is the frame**: black around artwork is not empty, it is the cinema. Never fill it with decoration.

### Border Radius Scale
- Sharp (2px): maturity badges, inline chips
- Standard (4px): buttons, inputs, resting tiles, profile gates
- Comfortable (6px): expanded hover cards, modals
- Pill (9999px): toggles, circle icon buttons

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Resting row tiles, page background |
| Hover (Level 1) | `0 12px 24px rgba(0,0,0,0.8)` + scale(1.5) | Expanded preview card lifting above row |
| Floating (Level 2) | `0 6px 16px rgba(0,0,0,0.7)` | Dropdown menus, profile menu, search panel |
| Modal (Level 3) | `0 8px 32px rgba(0,0,0,0.9)` | Detail modal, confirmation dialog |
| Scrim | `rgba(0,0,0,0.7)` full overlay | Behind any modal or the player chrome |

**Shadow Philosophy**: On a black canvas, drop-shadows are nearly invisible — so Netflix communicates elevation primarily through **scale and z-index**, not shadow. The hover card grows to 1.5× and slides above its neighbors; the shadow underneath is heavy and pure-black only to anchor that lift against the dark. Elsewhere, separation comes from fill-lightness steps (`#141414` → `#181818` → `#2F2F2F`), not from luminous edges. There are no colored shadows and no soft ambient glows — the artwork is the only light source.

### Blur Effects
- Player controls and the top nav use a subtle backdrop scrim (gradient, not gaussian blur) to keep text legible over moving artwork.
- Profile and account dropdowns drop a hard `rgba(0,0,0,0.9)` panel rather than a frosted blur.

## 7. Do's and Don'ts

### Do
- Keep the canvas dark — `#141414` page, `#000000` player. Never a light theme in the consumer app.
- Reserve Netflix Red (`#E50914`) for the logo, the primary marketing CTA, progress fills, and "New" markers.
- Use white (`#FFFFFF`) as the primary in-app action color (the Play button); red is for acquisition.
- Default body/metadata text to grey `#B3B3B3`; reserve white for the single most important label.
- Let full-bleed artwork supply the color — keep surrounding chrome neutral.
- Use 700 weight for titles and CTAs, 400 for everything else.
- Communicate elevation with scale + z-index on the dark canvas, not soft shadows.
- Clip tiles at row edges to invite horizontal scroll.

### Don't
- Don't use red as a large background fill — it is an accent, not a surface.
- Don't introduce a light/white background in browse, player, or detail surfaces.
- Don't put the logo or red CTA on a colored background — only black or white.
- Don't make all text white; grey hierarchy is what makes white legible.
- Don't add decorative borders or glows around artwork — the black frame is the design.
- Don't use heavy radii (>6px) on cards — Netflix tiles are nearly square-cornered.
- Don't crowd rows vertically — each category needs breathing room above and below.

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <500px | 2–3 tiles/row, hero ~40vh, nav collapses to hamburger + N logo |
| Tablet | 500–950px | 3–4 tiles/row, hover previews disabled (tap to open detail) |
| Desktop | 950–1400px | 5–6 tiles/row, full hover-expand previews enabled |
| Wide / TV | >1400px | 6+ tiles/row, larger billboard, 4% edge padding holds |

### Touch Targets
- Buttons: 44px min height on touch; circle icon buttons 44px diameter
- Tiles: full-tile tappable, opens detail modal directly (no hover-expand on touch)
- Nav: 48px tap rows in the mobile slide-out menu

### Collapsing Strategy
- Hover-expand previews are desktop-only; touch devices open the detail modal on tap.
- Top nav links collapse into a dropdown (mobile) anchored by the red "N" mark.
- Billboard text block stays left-aligned and shrinks; on mobile the synopsis is hidden, leaving title art + Play/Info buttons.
- Rows remain horizontally scrollable at every breakpoint — the core metaphor never breaks down.

### Image Behavior
- Artwork serves responsive crops: 16:9 boxshots for desktop rows, 2:3 portraits for mobile and "Top 10" rows.
- Hero billboard art is right-anchored with a left + bottom gradient so title text stays legible across crops.
- All artwork lazy-loads with a `#181818` placeholder block at exact tile dimensions.

## 9. Agent Prompt Guide

### Quick Color Reference
- Brand / Accent: Netflix Red (`#E50914`)
- Accent Hover: Dark Red (`#B20710`)
- App canvas: Near Black (`#141414`)
- Player / deepest: Pure Black (`#000000`)
- Card fill: Grey 850 (`#181818`)
- Hover row fill: Grey 800 (`#2F2F2F`)
- Primary text: White (`#FFFFFF`)
- Body / metadata text: Grey 400 (`#B3B3B3`)
- Caption text: Grey 500 (`#808080`)
- Border: Grey 700 (`#404040`)
- Match score: Green (`#46D369`)
- Warning: Amber (`#E87C03`)

### Example Component Prompts
- "Create a Netflix title card: 16:9 artwork, 4px radius, `#181818` fallback. On hover, scale to 1.5×, lift z-index, drop `0 12px 24px rgba(0,0,0,0.8)`, reveal an `#181818` info panel with a white circular play button, + and like circle buttons (40px, 2px `rgba(255,255,255,0.5)` border), '98% Match' in `#46D369` 14px/700, and a maturity badge."
- "Build a billboard hero: full-bleed artwork, ~56vh, bottom gradient `rgba(20,20,20,0)→rgba(20,20,20,1)`. Left-aligned title art, then a white Play button (`#FFFFFF` bg, `#000` text, 16px/700, 4px radius, 8px 24px padding) and a grey More Info button (`rgba(109,109,110,0.7)` bg, white text)."
- "Design the top nav: transparent over the hero, fading to solid `#141414` on scroll. Red 'N' mark left, links in `#E5E5E5` 14px/400 (active white 700), search icon + profile avatar right."
- "Create a Get-Started CTA: `#E50914` bg, white 18px/700 text, 16px 28px padding, 4px radius; hover `#B20710`."
- "Build a continue-watching tile: 16:9 artwork with a 3px progress bar at the bottom — track `#404040`, fill `#E50914`."

### Iteration Guide
1. Canvas is always dark (`#141414`); never introduce a light theme.
2. Red (`#E50914`) is an accent — logo, marketing CTA, progress, "New". White is the in-app action color.
3. Body text is grey `#B3B3B3`; reserve white for the single key label per surface.
4. Titles/CTAs are Netflix Sans 700; everything else is 400.
5. Radii stay tight: 4px buttons/tiles, 6px cards/modals, pill for toggles.
6. Elevation = scale + z-index + heavy black shadow, not soft glows.
7. Let artwork carry the color; keep chrome neutral grey-on-black.

---

## 10. Voice & Tone

Netflix speaks like a confident, friendly host who already knows what you want to watch — warm, direct, lightly playful, never corporate. Copy is concise and action-forward. English is the source voice, but Netflix localizes into 30+ languages with culturally-tuned (not literal) translation. Sentences in body copy end in periods; buttons are short imperative verbs with no terminal punctuation. Emoji appear in marketing and social but never in the core browse/player chrome.

| Context | Tone |
|---|---|
| CTAs | Imperative, short ("Play", "Get Started", "Finish Sign-Up", "More Info") |
| Onboarding | Reassuring, low-commitment ("Cancel anytime.", "We'll send a reminder 3 days before your trial ends.") |
| Empty states | Encouraging, redirective ("Add titles to your list to watch them later.") |
| Error messages | Plain, blameless, actionable ("That password is incorrect. Try again or reset it.") |
| Billing | Calm and transparent ("Your plan changes on June 12. No action needed.") |
| Maturity / parental | Neutral, factual — no judgment in rating language |
| Marketing hero | Bold, benefit-led ("Unlimited movies, TV shows and more.") |

**Forbidden moves.** No jargon ("leverage", "utilize"), no fake urgency countdown timers in core flows, no guilt copy on cancel ("Are you sure you want to leave us?"), no exclamation-stuffed hype in the player UI. The cancel flow is deliberately frictionless — regulatory and brand-trust driven.

## 11. Brand Narrative

Netflix began in 1997 as a **DVD-by-mail** rental service founded by **Reed Hastings** and **Marc Randolph** in Scotts Valley, California — famously conceived (per the often-repeated origin story) after a late video-store fee. The red-envelope mail business undercut Blockbuster's late-fee model, then the company made its defining bet: in 2007 it launched **streaming**, cannibalizing its own profitable mail business before anyone else could. In 2013 it became a studio with **House of Cards**, and "Netflix Original" reframed the company from distributor to producer.

The dark, cinematic interface is a direct expression of that identity. Netflix is not a software company that happens to show video; it is a **theater you carry**, and a theater is dark so the screen can be bright. Every interface decision serves the artwork: the black canvas, the grey-not-white chrome, the single red accent that never competes for attention. The red itself (`#E50914`) descends from the original DVD envelope and the wordmark — a piece of physical-era brand equity carried into pixels.

By the mid-2020s Netflix operates in 190+ countries with hundreds of millions of paid memberships, having expanded into ad-supported tiers, gaming, and live events. Through every expansion the visual system holds: **content is the hero, chrome is the frame, red is the signature.** The personalization engine — the rows are reordered per profile, the artwork itself is A/B-selected per viewer — means the "design" is partly generative, but the frame around it is rigid and constant. That tension — a fixed dark frame around infinitely variable content — is the whole brand.

What Netflix refuses: the bright, busy, multi-color dashboards of productivity software; the light-mode neutrality of utilities; ornamental UI that draws the eye away from a poster. The interface aspires to disappear.

## 12. Principles

1. **Dim the room, light the screen.** The canvas is dark so artwork reads as luminous. Chrome stays grey-on-black; the only light source is the content.
2. **Red is a signature, not a surface.** `#E50914` marks the logo, the acquisition CTA, progress, and "New". It never becomes a background. Overusing red cheapens it.
3. **White is the in-app action; red is acquisition.** Inside the product the dominant button is white (Play). Red lives on sign-up and marketing surfaces. Keep the two jobs separate.
4. **Grey makes white mean something.** Default text to `#B3B3B3`. White is spent on the single most important label per surface, which is how hierarchy survives on black.
5. **Elevation is scale, not glow.** On black, shadows vanish. Lift comes from growing the element (hover scale 1.5×) and raising z-index, anchored by a heavy pure-black shadow.
6. **Rows are doors, edges peek.** Content lives in horizontal carousels; tiles clip at the edge to promise more. The grid is never closed.
7. **The frame is fixed, the content is infinite.** The chrome is rigid and constant precisely because the artwork inside it is personalized and ever-changing.
8. **Chrome aspires to disappear.** Every pixel of UI competes with a poster. When in doubt, make the interface quieter.

## 13. Personas

*Personas below are fictional archetypes informed by publicly described streaming-viewer segments, not individual people.*

**Maya, 26, Los Angeles.** UX designer, watches on a 65" TV most evenings and her phone on the bus. Lives in "Continue Watching" and "Trending Now". Expects the app to remember her exact resume position to the second and to autoplay a preview the moment she lands on a tile. Annoyed by anything that delays the artwork — splash screens, slow row loads. Treats the red Play button as muscle memory.

**Daniel, 41, Chicago.** Father of two, manages four profiles including a Kids profile with a different (brighter, lighter) UI. Cares deeply that maturity ratings and parental locks are unambiguous. Browses lean-back on the living-room TV; never types if he can avoid it, navigating entirely by D-pad through the rows. Values the frictionless billing page — checks his plan once a quarter and wants zero surprises.

**Sofia, 33, Madrid.** Bilingual viewer who switches audio and subtitle languages constantly and watches a mix of Spanish originals and dubbed global content. Relies on the localized interface feeling native, not translated. Uses "My List" as a real watchlist and expects "New Episode" badges to be accurate. Watches mostly on a laptop in a dark room — the dark UI is why she never feels eye strain at midnight.

## 14. States

| State | Treatment |
|---|---|
| **Empty (My List)** | Centered grey `#B3B3B3` line ("Titles you add to My List appear here.") over `#141414`, with a suggestion row below. No illustration. |
| **Empty (Search no results)** | Grey caption ("Your search for 'xyz' did not have any matches.") plus a "Suggestions:" list and a fallback popular row. |
| **Loading (row)** | `#181818` placeholder tiles at exact final dimensions, faint 1.2s shimmer. Artwork fades in on load. |
| **Loading (page)** | Centered red `#E50914` spinner / the "N" ribbon animation over `#141414`. |
| **Hover (tile)** | Scale 1.5×, z-index lift, `0 12px 24px rgba(0,0,0,0.8)` shadow, muted autoplay preview, action button row reveals. |
| **Error (form field)** | Border-bottom 2px `#E87C03`, amber message 13px below the field. |
| **Error (playback)** | Full black player with centered white message + error code in grey, "Try Again" white button. |
| **Success (added to list)** | The + circle button fills to a ✓, brief scale pulse, no toast. |
| **Disabled** | Control drops to `#6D6D6E` text / `rgba(255,255,255,0.3)`; geometry unchanged. |
| **Buffering** | Red `#E50914` circular spinner centered over the dimmed (`rgba(0,0,0,0.5)`) video frame. |
| **Progress (resume)** | 3px bar, `#404040` track / `#E50914` fill, under continue-watching tiles and on the scrubber. |

## 15. Motion & Easing

**Durations:**

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Checkbox/toggle commit |
| `motion-fast` | 150ms | Button hover, nav-link color shift, icon-button border |
| `motion-card` | 300ms | Tile hover-expand (scale 1.5×) and collapse |
| `motion-standard` | 400ms | Modal open, row reorder, nav transparent→solid fade |
| `motion-billboard` | 600ms | Hero artwork cross-fade, billboard text reveal |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-out` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Things appearing — card expand, modal in |
| `ease-in` | `cubic-bezier(0.4, 0.0, 1, 1)` | Things leaving — card collapse, modal out |
| `ease-standard` | `cubic-bezier(0.4, 0.0, 0.2, 1)` | Two-way — nav fade, row scroll |
| `ease-scroll` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Horizontal row carousel paging |

**Signature motions.**

1. **Tile hover-expand.** On hover, the tile scales to 1.5× over `motion-card` with `ease-out`, raises z-index above neighbors, drops a heavy black shadow, and reveals the info panel + autoplay preview. Collapse reverses with `ease-in`. This is the defining Netflix gesture.
2. **Row paging.** Clicking a row's edge arrow slides the carousel one page with `ease-scroll`; tiles at the new edge peek to promise more.
3. **Nav fade.** As the user scrolls off the billboard, the top nav transitions from transparent to solid `#141414` over `motion-standard / ease-standard`, keeping links legible against incoming artwork.
4. **Billboard cross-fade.** Hero artwork and its preview video cross-fade over `motion-billboard`; title art and buttons fade up from below with a slight delay so the artwork lands first.
5. **Reduce motion.** Under `prefers-reduced-motion: reduce`, hover-expand scaling and autoplay previews are suppressed — tiles get a simple border/brightness change instead, and cross-fades become instant cuts. The product stays fully usable.

<!--
OmD v0.1 Sources

Token grounding (WebSearch, 2026-06-06): Netflix Red #E50914 (RGB 229·9·20,
Pantone 1795 C), Black #000000, White #FFFFFF, Dark Red #B20710 — confirmed
across multiple brand-color references. Netflix Sans (custom typeface by
Dalton Maag, introduced 2018, replacing Gotham) confirmed as the brand face.

Dark-UI tokens (#141414 canvas, #181818 card, #B3B3B3 metadata grey, #2F2F2F
hover, #46D369 match-green, hover scale 1.5×) are well-documented conventions
of the Netflix web/TV consumer UI, used here as representative values.

Brand narrative facts (founded 1997 by Reed Hastings & Marc Randolph; DVD-by-mail;
streaming launched 2007; House of Cards 2013; 190+ countries) are widely
documented public history.

Personas (§13) are fictional archetypes informed by publicly described
streaming-viewer segments, not individual people. Interpretive claims
("dim the room, light the screen", "chrome aspires to disappear") are editorial
readings of the design, not official Netflix statements.

Sources:
- https://www.brandcolorcode.com/netflix
- https://brand.netflix.com/en/assets/logos/
- https://www.designyourway.net/blog/netflix-logo/ (Netflix Sans / Dalton Maag history)
-->
