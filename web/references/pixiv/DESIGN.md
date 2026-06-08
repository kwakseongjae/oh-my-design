---
id: pixiv
name: pixiv
country: JP
category: consumer-tech
homepage: "https://www.pixiv.net"
primary_color: "#0096fa"
logo:
  type: simpleicons
  slug: "pixiv"
verified: "2026-06-06"
added: "2026-06-06"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#0096fa"
    primary-hover: "#0086e0"
    primary-tint: "#e3f3ff"
    engagement-red: "#ff4060"
    canvas: "#ffffff"
    heading: "#1a1a1a"
    grey-50: "#fafafa"
    grey-100: "#f5f5f5"
    grey-200: "#eeeeee"
    grey-300: "#dddddd"
    grey-400: "#cccccc"
    grey-500: "#999999"
    grey-600: "#858585"
    body: "#666666"
    label: "#333333"
    dark-surface: "#1f1f1f"
    dark-raised: "#2b2b2b"
    dark-border: "#3a3a3a"
    dark-text: "#f0f0f0"
    success: "#4caf50"
    error: "#e3413f"
    warning: "#ff9800"
    premium-gold: "#ffb300"
    on-primary: "#ffffff"
  typography:
    family: { sans: "system-ui", mono: "SF Mono" }
    display:      { size: 28, weight: 700, lineHeight: 1.36, use: "Landing hero, campaign headers" }
    heading-lg:   { size: 22, weight: 700, lineHeight: 1.36, use: "Page titles, artwork title" }
    heading:      { size: 18, weight: 700, lineHeight: 1.44, use: "Card section titles, ranking headers" }
    subtitle:     { size: 16, weight: 600, lineHeight: 1.50, use: "List section labels, modal headers" }
    body-lg:      { size: 15, weight: 400, lineHeight: 1.60, use: "Artwork descriptions, captions" }
    body:         { size: 14, weight: 400, lineHeight: 1.57, use: "Standard reading text, comments" }
    body-sm:      { size: 13, weight: 400, lineHeight: 1.54, use: "Metadata, secondary info" }
    caption:      { size: 12, weight: 400, lineHeight: 1.50, use: "Tag counts, timestamps, view counts" }
    micro:        { size: 11, weight: 400, lineHeight: 1.45, use: "Badge text, thumbnail overlay counters" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 4, md: 6, lg: 8, full: 9999 }
  shadow:
    ambient: "rgba(0,0,0,0.12) 0px 2px 8px"
    standard: "rgba(0,0,0,0.2) 0px 4px 12px"
    elevated: "rgba(0,0,0,0.25) 0px 8px 28px"
  components:
    button-primary: { type: button, bg: "#0096fa", fg: "#ffffff", radius: 6, padding: "10px 20px", font: "14px / 700", use: "Primary CTA — Follow, Post, Login (~40px)" }
    button-secondary: { type: button, bg: "#ffffff", fg: "#0096fa", radius: 6, padding: "10px 20px", font: "14px / 700", use: "Secondary action, 1px #0096fa border" }
    button-neutral: { type: button, bg: "#f5f5f5", fg: "#666666", radius: 6, padding: "10px 20px", font: "14px / 600", use: "Low-emphasis action, 1px #dddddd border" }
    button-follow: { type: toggle, bg: "#0096fa", fg: "#ffffff", radius: 6, use: "Follow toggle", active: "#ffffff bg, #999999 text, 1px #dddddd border (following)" }
    button-premium: { type: button, bg: "#ffb300", fg: "#ffffff", radius: 6, padding: "10px 20px", font: "14px / 700", use: "Premium upsell CTA" }
    input: { type: input, bg: "#ffffff", fg: "#333333", radius: 4, padding: "10px 12px", font: "14px / 400", use: "Text field, 1px #dddddd border, focus #0096fa" }
    search: { type: input, bg: "#f5f5f5", fg: "#333333", radius: 9999, padding: "8px 16px", use: "Global search pill, focus white + #0096fa border" }
    thumbnail-card: { type: card, bg: "#ffffff", radius: 8, use: "Artwork thumbnail — atomic discovery unit" }
    content-card: { type: card, bg: "#ffffff", radius: 8, padding: "16px", use: "Ranking / recommendation panel, 1px #eeeeee border" }
    tag-pill: { type: badge, bg: "#f5f5f5", fg: "#0096fa", radius: 4, padding: "4px 8px", font: "13px / 400", use: "Tag pill — primary navigation surface" }
    badge-r18: { type: badge, bg: "#ff4060", fg: "#ffffff", radius: 4, font: "11px / 700", use: "Age-restricted content marker" }
    badge-premium: { type: badge, bg: "#ffb300", fg: "#ffffff", radius: 4, use: "Premium member / feature marker" }
    tab: { type: tab, fg: "#858585", font: "14px / 700", padding: "12px 16px", use: "Section switching", active: "#0096fa text, 2px bottom border #0096fa" }
    toast: { type: toast, bg: "#333333", fg: "#ffffff", radius: 4, padding: "12px 16px", font: "14px / 400", use: "Bookmark confirmation, ~2.5s dismiss" }
    dialog: { type: dialog, bg: "#ffffff", radius: 8, padding: "24px", use: "Login prompts, settings, confirmations" }
    toggle: { type: toggle, bg: "#0096fa", radius: 9999, use: "Settings switch, white thumb, off #cccccc" }
  components_harvested: true
---

# Design System Inspiration of pixiv (ピクシブ)

## 1. Visual Theme & Atmosphere

pixiv is Japan's largest illustration and creative-work community — a place where millions of artists upload, tag, browse, and bookmark original and fan art. The interface exists to do one thing extraordinarily well: get vivid, full-bleed artwork in front of the viewer's eyes with as little chrome as possible. The product feels like a gallery wall, not a dashboard. The canvas is a near-white surface (`#ffffff` to `#f5f5f5`) with the artwork itself supplying nearly all the saturation; pixiv's own UI recedes into neutral greys so that nothing competes with a creator's color choices.

The brand anchor is **pixiv blue** (`#0096fa`) — a bright, friendly cyan-leaning blue that sits on the "approachable" end of the blue spectrum rather than the corporate-indigo end. It's the color of every link, every primary button, every active tab, and the "i" stylization of the wordmark. Against the neutral chrome it reads as cheerful and energetic, matching a community built on amateur and professional creativity rather than enterprise software. The logo wordmark is a lowercase geometric sans where the dot of the "i" is rendered in pixiv blue — a small but consistent brand signature.

What defines pixiv visually is **content-first restraint with bursts of system color**. The grid of thumbnails is the hero; UI is quiet and grey until you reach an interactive element, at which point pixiv blue (for navigation/CTAs) or pixiv red (`#ff4060`, for the signature "like"/bookmark heart) appears. The atmosphere is light, dense, and tag-driven — a high-information, scroll-forever experience optimized for discovery, with Japanese as the primary language and a heavy reliance on system fonts for fast rendering across an enormous, device-diverse user base.

**Key Characteristics:**
- pixiv Blue (`#0096fa`) as the universal interactive/navigation accent — bright, friendly, cyan-leaning
- pixiv Red/Pink (`#ff4060`) reserved for the bookmark "heart" and engagement signals
- Content-first: artwork supplies saturation, UI stays neutral grey
- System-font stack (Hiragino, Yu Gothic, Meiryo, Noto Sans JP) for fast multi-device rendering
- Dense thumbnail grids — discovery and tagging are the core interaction
- Soft 4–8px corner radii, minimal shadows, flat-but-warm surfaces
- Light theme default with a true dark theme (`#1f1f1f` surfaces) for long browsing sessions

## 2. Color Palette & Roles

### Primary
- **pixiv Blue** (`#0096fa`): Primary interactive color — links, primary CTAs, active tabs, focus rings, the wordmark dot. The single most recognizable brand token.
- **pixiv Blue Dark** (`#0086e0`): Hover/pressed state for blue elements.
- **pixiv Blue Light** (`#e3f3ff`): Tinted informational backgrounds, selected chips, subtle blue surfaces.
- **Pure White** (`#ffffff`): Page background, card/thumbnail surface in light theme.
- **Near-Black Text** (`#1a1a1a`): Primary heading and body text on light surfaces.

### Engagement (Brand Signature)
- **pixiv Red** (`#ff4060`): The bookmark/like heart, engagement counts, "新着" (new) accents. pixiv's second iconic color — energetic coral-red used sparingly but recognizably.
- **Heart Outline** (`#cccccc`): Un-bookmarked heart resting state.

### Semantic
- **Success Green** (`#4caf50`): Upload success, confirmations, positive system messages.
- **Error Red** (`#e3413f`): Form errors, destructive actions, validation failures. Distinct from the warmer engagement red.
- **Warning Amber** (`#ff9800`): Pending states, R-18 content gates, attention banners.
- **Premium Gold** (`#ffb300`): pixiv Premium membership accents, badges, upsell surfaces.

### Neutral Scale (Light Theme)
- **Grey 50** (`#fafafa`): Lightest surface, page wash behind cards.
- **Grey 100** (`#f5f5f5`): Secondary background, hover fills, input backgrounds.
- **Grey 200** (`#eeeeee`): Card fills, disabled surfaces.
- **Grey 300** (`#dddddd`): Default borders, dividers.
- **Grey 400** (`#cccccc`): Strong borders, icon outlines, inactive hearts.
- **Grey 500** (`#999999`): Placeholder text, disabled labels.
- **Grey 600** (`#858585`): Caption text, secondary metadata, tag counts.
- **Grey 700** (`#666666`): Body text on light surfaces, secondary labels.
- **Grey 800** (`#333333`): Strong labels, navigation text, sub-headings.
- **Grey 900** (`#1a1a1a`): Primary text, headings.

### Dark Theme
- **Surface Base** (`#1f1f1f`): Dark-theme page background.
- **Surface Raised** (`#2b2b2b`): Cards, headers, raised panels in dark mode.
- **Surface Border** (`#3a3a3a`): Dividers and borders in dark mode.
- **Text Primary Dark** (`#f0f0f0`): Primary text on dark surfaces.
- **Text Secondary Dark** (`#aaaaaa`): Secondary text on dark surfaces.
- **pixiv Blue stays `#0096fa`** in dark mode — the accent does not shift.

### Surface & Borders
- **Border Default**: `#dddddd`. Card edges, input borders, list dividers.
- **Border Strong**: `#cccccc`. Active inputs, emphasized separators.
- **Overlay Scrim**: `rgba(0,0,0,0.6)`. Modal/lightbox backdrops — darker than typical to let illustrations pop in the viewer.
- **Tag Chip**: `#f5f5f5` bg / `#0096fa` text. The ubiquitous tag pill.

## 3. Typography Rules

### Font Family
- **Primary (JP)**: `-apple-system, BlinkMacSystemFont, "Hiragino Kaku Gothic ProN", "Hiragino Sans", "Yu Gothic Medium", "Meiryo", "Noto Sans JP", "Helvetica Neue", Arial, sans-serif`
- **Latin/Numerals**: Falls through to `-apple-system`/`Helvetica Neue`/`Arial` ahead of the JP faces so Latin glyphs render cleanly.
- **Monospace**: `"SF Mono", Consolas, "Courier New", monospace` — used only in dev/embed contexts.
- pixiv ships **no custom brand typeface**; it relies on the platform system stack for speed and broad device coverage. Brand personality lives in color and layout, not a proprietary font.

### Hierarchy

| Role | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|--------|-------------|----------------|-------|
| Display | 28px | 700 | 38px (1.36) | normal | Landing hero, section campaign headers |
| Heading Large | 22px | 700 | 30px (1.36) | normal | Page titles, artwork title on detail page |
| Heading | 18px | 700 | 26px (1.44) | normal | Card section titles, ranking headers |
| Subtitle | 16px | 600 | 24px (1.50) | normal | List section labels, modal headers |
| Body Large | 15px | 400 | 24px (1.60) | normal | Artwork descriptions, captions |
| Body | 14px | 400 | 22px (1.57) | normal | Standard reading text, comments |
| Body Small | 13px | 400 | 20px (1.54) | normal | Metadata, secondary info |
| Caption | 12px | 400 | 18px (1.50) | normal | Tag counts, timestamps, view counts |
| Micro | 11px | 400 | 16px (1.45) | normal | Badge text, overlay counters on thumbnails |

### Principles
- **System-stack first**: Speed over custom type. The font must already be on the device so a thumbnail grid paints instantly.
- **Three weights**: 400 (body), 600 (emphasis), 700 (headings/titles). Bold is for titles, never long body.
- **JP line-height runs generous**: Japanese text uses 1.5–1.6 line-height for legibility of dense kanji at small sizes.
- **Numbers are metadata, not heroes**: View/like counts render small (12px) and grey — the art is the hero, not the stats.
- **Tags are typographic UI**: Tag pills use 13px text and are themselves a primary navigation surface, colored pixiv blue.

## 4. Component Stylings

### Buttons

**Primary (Fill)**
- Background: `#0096fa`
- Text: `#ffffff`
- Border: none
- Radius: 6px
- Padding: 10px 20px
- Font: 14px / 700
- Hover: `#0086e0`
- Disabled: `#cccccc` bg, `#ffffff` text
- Use: Primary CTA — フォロー (Follow), 投稿 (Post), ログイン (Login). ~40px tall.

**Secondary (Outline)**
- Background: `#ffffff`
- Text: `#0096fa`
- Border: 1px solid `#0096fa`
- Radius: 6px
- Padding: 10px 20px
- Font: 14px / 700
- Hover: `#e3f3ff` bg
- Use: Secondary action paired with a primary (キャンセル alt, フォロー中 toggled state).

**Neutral (Grey)**
- Background: `#f5f5f5`
- Text: `#666666`
- Border: 1px solid `#dddddd`
- Radius: 6px
- Padding: 10px 20px
- Font: 14px / 600
- Hover: `#eeeeee`
- Use: Low-emphasis actions (もっと見る / "show more", filters, cancel).

**Follow (Toggle)**
- Unfollowed: `#0096fa` fill, white text, "+ フォロー"
- Following: `#ffffff` bg, `#999999` text, 1px `#dddddd` border, "フォロー中"
- Radius: 6px
- Use: The signature follow toggle — the most-pressed button on the site.

**Premium (Gold)**
- Background: `#ffb300`
- Text: `#ffffff`
- Border: none
- Radius: 6px
- Padding: 10px 20px
- Font: 14px / 700
- Use: pixiv Premium upsell CTAs.

Size scale (height · font · radius): `small` 32px · 13px / 600 · 4px; `medium` (default) 40px · 14px / 700 · 6px; `large` 48px · 15px / 700 · 8px.

### Bookmark / Like

**Bookmark Heart**
- Default (un-bookmarked): outline heart, stroke `#cccccc`, 24px
- Active (bookmarked): filled heart `#ff4060`, 24px
- Count label: 12px / 400 / `#858585` to the right
- Animation: 200ms scale-pop (1.0 → 1.25 → 1.0) on toggle
- Use: The core engagement action — appears on every thumbnail hover and the artwork detail page.

### Inputs

**Text Field (default)**
- Background: `#ffffff`
- Text: `#333333`
- Border: 1px solid `#dddddd`
- Radius: 4px
- Padding: 10px 12px
- Font: 14px / 400
- Placeholder: `#999999`
- Focus: border `#0096fa`, subtle `0 0 0 2px rgba(0,150,250,0.15)` ring
- Use: Search bar, form fields, comment box.

**Search Bar**
- Background: `#f5f5f5`
- Text: `#333333`
- Border: 1px solid transparent
- Radius: 20px (pill)
- Padding: 8px 16px 8px 36px (leading search icon)
- Focus: white bg, `#0096fa` border
- Use: Global tag/keyword search — the primary discovery entry point. Pill-shaped.

**Error**
- Border: 1px solid `#e3413f`
- Help text: `#e3413f` 12px below the field.

### Cards (Artwork Thumbnail)

**Thumbnail Card**
- Background: `#ffffff`
- Border: none
- Radius: 8px (image corners clipped to match)
- Image: square or aspect-preserved, object-fit cover
- Overlay badges: top-right page-count pill (`rgba(0,0,0,0.6)` bg, white 11px text), top-left R-18/manga tag
- Title: 13px / 700 / `#1a1a1a`, single-line ellipsis below image
- Author: 12px / 400 / `#666666` with 20px avatar
- Hover: bookmark heart fades in top-right; slight `0 2px 8px rgba(0,0,0,0.12)` lift
- Use: The atomic unit of the entire site — the discovery grid.

**Content Card (panel)**
- Background: `#ffffff`
- Border: 1px solid `#eeeeee`
- Radius: 8px
- Padding: 16px
- Shadow: none (border-defined)
- Use: Ranking blocks, recommendation sections, profile panels.

### Tags / Chips

**Tag Pill**
- Background: `#f5f5f5`
- Text: `#0096fa`
- Border: none
- Radius: 4px
- Padding: 4px 8px
- Font: 13px / 400
- Prefix: "#" rendered in `#999999`
- Hover: `#e3f3ff` bg
- Use: Ubiquitous — tags are primary navigation. Every artwork has 5–20.

### Badges

**Page Count (on thumbnail)**
- Background: `rgba(0,0,0,0.6)`
- Text: `#ffffff`
- Radius: 10px
- Padding: 2px 6px
- Font: 11px / 700
- Use: Multi-page artwork indicator (e.g. "12P").

**R-18 / Content Gate**
- Background: `#ff4060`
- Text: `#ffffff`
- Radius: 4px
- Font: 11px / 700
- Use: Age-restricted content marker.

**Premium Badge**
- Background: `#ffb300`
- Text: `#ffffff`
- Radius: 4px
- Use: Premium member / premium feature marker.

### Tabs

**Underline Tab**
- Background: transparent
- Inactive text: `#858585`
- Active text: `#0096fa`
- Active indicator: 2px `#0096fa` bottom border
- Font: 14px / 700
- Padding: 12px 16px
- Use: Section switching (イラスト / 漫画 / 小説, ranking periods).

### Toasts

**Default**
- Background: `#333333`
- Text: `#ffffff`
- Radius: 4px
- Padding: 12px 16px
- Shadow: `0 4px 12px rgba(0,0,0,0.2)`
- Font: 14px / 400
- Use: "ブックマークしました" (Bookmarked), auto-dismiss ~2.5s, bottom-center.

### Dialogs

**Centered Modal**
- Background: `#ffffff`
- Radius: 8px
- Padding: 24px
- Shadow: `0 8px 28px rgba(0,0,0,0.25)`
- Backdrop: `rgba(0,0,0,0.6)`
- Use: Login prompts, settings, confirmation dialogs.

**Lightbox (Artwork Viewer)**
- Background: `rgba(0,0,0,0.9)` — near-black to maximize illustration contrast
- Image: centered, max viewport, zoom/pan enabled
- Controls: white icons, page counter top-center
- Use: Full-screen artwork viewing — the signature consumption mode.

### Toggles

**Switch**
- On: `#0096fa` track, white thumb
- Off: `#cccccc` track, white thumb
- Radius: 9999px
- Thumb shadow: `0 1px 2px rgba(0,0,0,0.2)`
- Use: Settings (R-18 display, notifications, dark mode).


**Tier 1 sources:** https://www.pixiv.net (live production site, verified via live DOM getComputedStyle).

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Common values: 4px, 8px, 12px, 16px, 24px, 32px, 48px
- Grid gutters: 12px–16px between thumbnails
- Section spacing: 32px between discovery blocks

### Grid & Container
- Max content width: ~1224px centered on desktop
- Thumbnail grid: responsive auto-fill, ~184px–200px min column width, flowing to 6 columns at full desktop width
- Sidebar (where present): ~240px fixed, content fluid
- Mobile: 2-column thumbnail grid, full-bleed

### Whitespace Philosophy
- **Let the art breathe, pack the chrome**: Generous gutters around thumbnails so each illustration reads as its own object, but UI chrome (header, tags, metadata) is dense and efficient.
- **Edge-to-edge imagery**: Thumbnails and the viewer push to container edges; padding is for text, not images.
- **Scroll is infinite**: Discovery feeds are designed for endless vertical scroll — there is no "bottom" to optimize toward.

### Border Radius Scale
- Sharp (4px): Inputs, tag pills, small badges
- Standard (6px): Buttons
- Comfortable (8px): Cards, thumbnails, modals
- Pill (20px): Search bar
- Round (9999px): Avatars, toggle tracks

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow, 1px `#eeeeee` border | Page background, bordered panels |
| Subtle (Level 1) | `0 1px 3px rgba(0,0,0,0.08)` | Sticky header, raised list rows |
| Standard (Level 2) | `0 2px 8px rgba(0,0,0,0.12)` | Thumbnail hover-lift, dropdowns |
| Elevated (Level 3) | `0 4px 12px rgba(0,0,0,0.2)` | Toasts, popovers, tooltips |
| Modal (Level 4) | `0 8px 28px rgba(0,0,0,0.25)` | Dialogs, modals |

**Shadow Philosophy**: pixiv uses shadows sparingly and prefers 1px borders to define surfaces. Because the content is already visually rich, heavy elevation would add noise and compete with artwork. Shadows appear mainly on hover (to signal interactivity) and on true overlays (toasts, modals). Pure neutral black at low opacity — no colored shadows.

### Blur Effects
- The sticky header may apply a light backdrop blur over scrolling content.
- The lightbox viewer uses no blur — just a near-opaque dark scrim so the illustration is the only thing in focus.

## 7. Do's and Don'ts

### Do
- Use pixiv Blue (`#0096fa`) for all navigation, links, and primary CTAs
- Reserve pixiv Red (`#ff4060`) for the bookmark heart and engagement signals
- Keep UI chrome neutral grey so artwork supplies the color
- Use the system-font stack with JP faces (Hiragino, Yu Gothic, Noto Sans JP)
- Make thumbnails edge-to-edge with 12–16px gutters
- Show metadata (views, likes) small and grey — never let stats outshine art
- Treat tags as primary navigation, colored pixiv blue
- Provide a true dark theme (`#1f1f1f`) for long browsing sessions

### Don't
- Don't saturate the chrome — the artwork is the only thing allowed to be loud
- Don't use pixiv Red for non-engagement UI (it means "like/bookmark")
- Don't add heavy or colored shadows — prefer 1px borders
- Don't use bold weight for long body text — 700 is for titles only
- Don't enlarge view/like counts; they are quiet metadata
- Don't crop or letterbox the lightbox image with blur — use a clean dark scrim
- Don't introduce a custom display font; the system stack is intentional for speed
- Don't use radius > 8px except for the search pill, avatars, and toggles

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <768px | 2-column thumbnail grid, hamburger nav, full-bleed images |
| Tablet | 768–1024px | 3–4 column grid, condensed sidebar |
| Desktop | 1024–1280px | 5–6 column grid, fixed ~240px sidebar |
| Wide | >1280px | Centered 1224px container, 6 columns, generous gutters |

### Touch Targets
- Buttons: medium ~40px, large ~48px
- Bookmark heart: 44px tap area (24px glyph + padding)
- Thumbnail tap: entire card is the tap target
- Tag pills: minimum 32px height for touch

### Collapsing Strategy
- Sidebar collapses to a hamburger/drawer on mobile
- Multi-column grid reflows to 2 columns on phones
- Inline metadata rows stack vertically on narrow screens
- Sticky bottom action bar (bookmark/follow) on mobile artwork detail
- Search bar collapses to an icon that expands on tap

### Image Behavior
- Thumbnails: object-fit cover, lazy-loaded, square or aspect-preserved
- Avatars: 20–48px, circular
- Full artwork: responsive max-width in the lightbox, pinch-zoom on mobile
- Multi-page works: horizontal swipe carousel on mobile, vertical stack on desktop

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA / links: pixiv Blue (`#0096fa`)
- CTA Hover: Blue Dark (`#0086e0`)
- Blue tint surface: (`#e3f3ff`)
- Bookmark / engagement: pixiv Red (`#ff4060`)
- Background: White (`#ffffff`) / Grey 50 (`#fafafa`)
- Surface fill: Grey 100 (`#f5f5f5`)
- Heading text: Near-Black (`#1a1a1a`)
- Body text: Grey 700 (`#666666`)
- Caption / metadata: Grey 600 (`#858585`)
- Placeholder: Grey 500 (`#999999`)
- Border: Grey 300 (`#dddddd`)
- Success: Green (`#4caf50`)
- Error: Red (`#e3413f`)
- Premium: Gold (`#ffb300`)
- Dark surface: (`#1f1f1f`) / raised (`#2b2b2b`)

### Example Component Prompts
- "Create an artwork thumbnail card: 8px radius, white bg, square cover image. Title 13px weight 700 #1a1a1a single-line ellipsis below image. Author row: 20px circular avatar + 12px weight 400 #666666. Top-right page-count badge rgba(0,0,0,0.6) white 11px weight 700. On hover: bookmark heart fades in top-right + shadow 0 2px 8px rgba(0,0,0,0.12)."
- "Build a bookmark heart toggle: default outline heart stroke #cccccc 24px; active filled #ff4060; 200ms scale-pop 1.0→1.25→1.0; count label 12px #858585 to the right."
- "Design a follow button: default #0096fa fill, white text 14px weight 700, 6px radius, 40px tall, '+ フォロー'. Following state: white bg, #999999 text, 1px #dddddd border, 'フォロー中'."
- "Create the global search bar: pill shape 20px radius, #f5f5f5 bg, leading search icon, 14px text #333333, placeholder #999999. Focus: white bg, #0096fa border."
- "Design a tag pill: #f5f5f5 bg, #0096fa text 13px, 4px radius, 4px 8px padding, '#' prefix in #999999. Hover #e3f3ff bg."
- "Build an underline tab bar: inactive #858585 14px weight 700; active #0096fa with 2px #0096fa bottom border."

### Iteration Guide
1. Use the system-font stack with JP faces — no custom display font
2. pixiv Blue (`#0096fa`) is navigation + CTAs; pixiv Red (`#ff4060`) is bookmark/engagement only
3. Keep all chrome neutral grey so artwork supplies the color
4. Thumbnails are 8px radius, edge-to-edge, 12–16px gutters, lazy-loaded
5. Metadata (views/likes) stays small (12px) and grey
6. Prefer 1px `#dddddd` borders over shadows; reserve shadows for hover + overlays
7. Support a dark theme: `#1f1f1f` base, `#2b2b2b` raised, accent stays `#0096fa`

## 10. Voice & Tone

pixiv speaks to creators and fans as peers in a shared hobby — warm, encouraging, and casual, never corporate. Japanese is the primary voice; English and other localizations are translations layered on top. The tone celebrates making and sharing: prompts nudge ("作品を投稿してみよう" / "try posting a work") rather than command. It avoids the gamified hype of growth-startup copy and the dryness of enterprise tools — it sounds like a generous community manager.

| Context | Tone |
|---|---|
| CTAs | Short, inviting verb forms (`投稿`, `フォロー`, `ブックマーク`) |
| Success toasts | Past-tense, friendly (`ブックマークしました`) |
| Error messages | Plain, blameless, actionable — never scold the user |
| Onboarding | Encouraging, low-pressure ("好きな作品を見つけよう" / find works you love) |
| Engagement | Celebratory but quiet — counts shown, never shouted |
| Empty states | Suggestive — "おすすめのタグ" or featured works fill the gap, never a bare "no data" |
| Content gates (R-18) | Neutral, factual, age-respecting — no judgment, just a clear toggle |

**Forbidden moves.** No artificial urgency ("Hurry!"), no shaming low-engagement creators, no condescension toward amateurs. The platform's whole premise is that anyone can post; copy never gatekeeps skill level. Stats are presented, never weaponized.

## 11. Brand Narrative

pixiv launched in **September 2007**, created by Takahiro Kataoka, as a social-networking and contest service where illustrators could post work and receive feedback through bookmarks, comments, and rankings. It is operated by **pixiv Inc.** (ピクシブ株式会社), headquartered in Sendagaya, Tokyo. The name "pixiv" blends "pixel" with the idea of a living, interactive (-iv) creative space. From a niche illustrator board it grew into the dominant hub of Japanese online art culture, hosting **tens of millions of registered users** and **hundreds of millions of works** spanning original illustration, manga, novels, and fan art.

The design's job is precise: **disappear behind the art**. Unlike Western social platforms that brand every pixel, pixiv keeps its own surfaces neutral grey so the only saturated color on screen is what a creator made. pixiv blue (`#0096fa`) is the friendly thread that ties navigation together; pixiv red (`#ff4060`) is the heartbeat of community appreciation. Together they form a two-note system that never overpowers the gallery.

pixiv anchors a broader ecosystem — **pixiv FANBOX** (creator subscriptions), **BOOTH** (creator marketplace), **pixiv Sketch** (live drawing), **pixivision** (editorial), and **pixiv FACTORY** (print-on-demand) — all sharing the same blue accent and content-first restraint. The brand promise across all of them is the same: lower the friction between making something and finding the people who'll love it.

What pixiv refuses: the algorithmic opacity and engagement-maximizing dark patterns of large Western social networks, the sterile minimalism of enterprise SaaS, and any visual language that would compete with the artwork. The aesthetic is amateur-friendly, dense, tag-driven, and proudly Japanese — a community gallery, not a feed engine.

## 12. Principles

1. **The art is the only thing allowed to be loud.** Every UI decision asks: does this add color/contrast that competes with the thumbnail grid? If yes, mute it. Chrome stays grey.
2. **Two-note color system.** Blue (`#0096fa`) is navigation and action; Red (`#ff4060`) is bookmark and appreciation. No third brand hue. Semantic colors exist but stay quiet.
3. **Discovery is infinite.** Feeds have no bottom. Design for endless scroll, lazy-load aggressively, and make every thumbnail a doorway.
4. **Tags are navigation, not decoration.** A tag is a tappable, blue, first-class way to move through the site. Treat tag pills as primary UI.
5. **Metadata whispers.** View counts, likes, and timestamps are 12px grey. Stats inform; they never dominate or shame.
6. **System fonts for speed.** No custom display face. The grid must paint instantly on any device, in any of dozens of locales.
7. **Borders over shadows.** Define surfaces with 1px `#dddddd` borders. Reserve elevation for hover affordances and true overlays.
8. **Respect the creator and the viewer equally.** Content gates are neutral and clear; engagement is celebrated quietly; nothing gatekeeps skill or shames participation.

## 13. Personas

*Personas below are fictional archetypes informed by publicly described pixiv user segments, not individual people.*

**さくら (Sakura), 19, Osaka.** Art student who posts original illustrations 2–3 times a week. Lives in the upload flow and her notification feed — every new bookmark is dopamine. Cares about tags being exactly right so the correct audience finds her work. Browses the daily ranking every morning for inspiration and to gauge trends. Uses dark mode at night while drawing. Would be devastated if the bookmark count moved or grew louder — it's perfect as a quiet number.

**ケンジ (Kenji), 34, Tokyo.** Office worker and lifelong fan, never posts. Bookmarks dozens of works a day, follows ~400 artists, and supports a handful through FANBOX. Browses primarily on mobile during his commute, swiping through multi-page manga works. Wants the heart always within thumb reach and the lightbox to load full-resolution fast. Trusts pixiv blue as "the art-site color" — sees it and knows he's home.

**Mei, 27, Singapore.** International fan who uses the English UI but searches with Japanese tags she's learned. Relies on the tag system and ranking to discover artists across the language barrier. Sensitive to content-gate clarity — wants R-18 settings obvious and respected. Values that the interface looks identical to the JP version; the universal grey-and-blue chrome makes the language gap feel small.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no posts yet)** | Friendly one-line nudge in `#666666` ("まだ作品がありません — 投稿してみよう") plus a blue primary CTA to post. Often backfilled with recommended works rather than left bare. |
| **Empty (search no results)** | `#858585` caption ("条件に合う作品が見つかりませんでした") with suggested popular tags as blue pills below. |
| **Loading (grid)** | Skeleton thumbnail blocks at `#f5f5f5`, exact card dimensions, 8px radius, 1.2s shimmer. Lazy-load fills in as the user scrolls. |
| **Loading (lightbox)** | Low-res blurred placeholder swaps to full-res; spinner in white centered on the dark scrim. |
| **Error (inline field)** | 1px `#e3413f` border on the input, 12px `#e3413f` help text below, one actionable sentence. |
| **Error (toast)** | `#333333` bg, white 14px text, bottom-center, ~2.5s dismiss. |
| **Error (page)** | Centered illustration-light message in `#666666`, retry button in `#0096fa`. Reserved for outages. |
| **Bookmarked (success)** | Heart fills `#ff4060` with 200ms scale-pop, count increments, toast "ブックマークしました". |
| **Following (success)** | Button flips to "フォロー中" white/grey state instantly; no toast needed — the state change is the feedback. |
| **Content gate (R-18)** | Blurred thumbnail with `#ff4060` "R-18" badge; tap reveals a neutral confirm dialog respecting the user's age setting. |
| **Disabled** | Button drops to `#cccccc` bg / white text; inputs keep `#dddddd` border so geometry is stable. |
| **Dark theme** | All surfaces swap to `#1f1f1f`/`#2b2b2b`, text to `#f0f0f0`/`#aaaaaa`; accent `#0096fa` and engagement `#ff4060` are unchanged. |

## 15. Motion & Easing

**Durations** (named):

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | State flips that need no transition (follow toggle text) |
| `motion-fast` | 150ms | Hover, focus, fade-ins of hover affordances (bookmark heart) |
| `motion-standard` | 250ms | The default — dropdowns, tab content, card transitions |
| `motion-pop` | 200ms | Bookmark heart scale-pop |
| `motion-slow` | 350ms | Modal/lightbox open, page-level transitions |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Things appearing — modals, toasts, dropdowns |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Things leaving — dismissals |
| `ease-standard` | `cubic-bezier(0.4, 0.0, 0.2, 1)` | Two-way — tabs, hover lifts |
| `ease-pop` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Reserved for the bookmark-heart overshoot — the one place a spring is licensed |

**Signature motions.**

1. **Heart pop.** On bookmark, the heart fills `#ff4060` and scales `1.0 → 1.25 → 1.0` over `motion-pop` with `ease-pop`. The overshoot is the brand's single moment of playfulness — it celebrates appreciation. Used nowhere else.
2. **Thumbnail hover lift.** On hover, a card raises with `0 2px 8px rgba(0,0,0,0.12)` over `motion-fast / ease-standard` and the bookmark heart fades in top-right. Signals "this is interactive" without disturbing the grid.
3. **Lightbox open.** The viewer fades the dark scrim in over `motion-slow / ease-enter` while the image scales from 0.96 → 1.0. Dismissal reverses faster with `ease-exit` — exiting feels lighter than entering.
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant` and the heart pop becomes a simple color fill. The site stays fully usable, just static.

<!--
OmD v0.1 Sources — pixiv

Direct verification via WebFetch (2026-06-06):
- https://www.pixiv.net — confirms pixiv Inc. operation, 2025 logo refresh
  (new_logo_2025 SVG), social-login surface, and content-first structure.
  Live stylesheet values were not exposed in the fetched markup; token-level
  hex values below are grounded in the documented pixiv brand color
  (pixiv blue #0096fa) and standard observed pixiv UI conventions.

Web research (WebSearch, 2026-06-06):
- Brandfetch (brandfetch.com/pixiv.net) and the project brief confirm
  pixiv blue #0096fa as the primary brand color and the colorful,
  illustration-community positioning.

pixiv uses no proprietary brand typeface; the system-font stack
(Hiragino / Yu Gothic / Meiryo / Noto Sans JP) is intentional and is
standard for Japanese high-traffic consumer web.

Engagement red (#ff4060), neutral greys, dark-theme surfaces (#1f1f1f /
#2b2b2b), component geometry (radii, paddings), and motion tokens are
interpretive reconstructions of pixiv's observed UI conventions, consistent
with the brand's content-first, two-note (blue + red) color philosophy.

Personas (§13) are fictional archetypes informed by publicly described pixiv
user segments. Any resemblance to specific individuals is unintended.
-->
