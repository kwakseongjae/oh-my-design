---
id: genie
name: Genie Music
country: KR
category: consumer-tech
homepage: "https://www.genie.co.kr"
primary_color: "#fa4065"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=genie.co.kr&sz=128"
verified: "2026-06-09"
added: "2026-06-09"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-09"
  components_harvested: true
  colors:
    primary: "#fa4065"
    primary-hover: "#d62952"
    accent-blue: "#0096ff"
    heading: "#27282d"
    body: "#444444"
    muted: "#969697"
    label: "#8b8b8b"
    secondary: "#666666"
    canvas: "#ffffff"
    surface: "#f7f8f9"
    hairline: "#eef1f4"
    border: "#d2d2d2"
    icon-gray: "#a6afb6"
    on-primary: "#ffffff"
    chip-dark: "#434354"
  typography:
    family: { sans: "dotum", fallback: "sans-serif" }
    gnb:      { size: 18, weight: 700, lineHeight: 1.30, use: "Global nav primary menu items" }
    heading:  { size: 14, weight: 400, lineHeight: 1.71, use: "Account / utility menu labels" }
    body:     { size: 12, weight: 400, lineHeight: 1.50, use: "Standard list rows, track titles, metadata" }
    body-bold: { size: 12, weight: 700, lineHeight: 1.50, use: "Emphasised labels, active chart tab" }
    chip:     { size: 12, weight: 700, lineHeight: 2.08, use: "Search keyword chip on dark pill" }
    caption:  { size: 11, weight: 400, use: "Rank numerals, fine print, timestamps" }
  spacing: { xs: 1, sm: 6, md: 8, base: 12, lg: 18, xl: 24, xxl: 32 }
  rounded: { sm: 4, md: 8, lg: 13, full: 9999 }
  shadow:
    ambient: "rgba(0,0,0,0.06) 0px 1px 3px"
    panel: "rgba(0,0,0,0.12) 0px 4px 12px"
  components:
    button-primary: { type: button, bg: "#fa4065", fg: "#ffffff", radius: "4px", padding: "8px 18px", font: "12px / 700", use: "Primary listen/play action, hover #d62952" }
    button-ghost: { type: button, fg: "#444444", radius: "4px", padding: "6px 12px", font: "12px / 400", use: "Secondary row action, 1px #d2d2d2 border" }
    chip-search: { type: badge, bg: "#434354", fg: "#ffffff", radius: "13px", padding: "0px 12px", font: "12px / 700", use: "Realtime search keyword pill, 25px tall" }
    tab-chart: { type: tab, fg: "#8b8b8b", padding: "0px 8px", font: "12px / 700", active: "active text #0096ff bold", use: "Chart scope tabs — 종합 / 국내 / 국외" }
    nav-gnb: { type: tab, fg: "#27282d", font: "18px / 700", active: "#fa4065 with bottom border", use: "Top global nav bar items" }
    card: { type: card, bg: "#ffffff", radius: "8px", use: "Chart / album panel, 1px #eef1f4 border, ambient shadow" }
    input-search: { type: input, fg: "#444444", radius: "4px", padding: "1px 6px", font: "12px / 400", use: "Header search field, 1px #d2d2d2 border, placeholder #969697" }
    list-item: { type: listItem, fg: "#444444", font: "12px / 400", use: "Track row, rank numeral #969697, title #27282d on hover" }
    badge-rank: { type: badge, fg: "#969697", font: "11px / 400", use: "Chart rank position numeral" }
---

# Design System Inspiration of Genie Music

## 1. Visual Theme & Atmosphere

Genie Music (지니뮤직) is a Korean music-streaming service whose web surface reads as a dense, utilitarian catalog rather than a glossy marketing site — and that density is the point. The page opens on a pure white canvas (`#ffffff`) carrying a tightly packed information grid of charts, rankings, and album rows, all rendered in a compact `dotum` system at a base of 12px. Against this restrained gray-on-white field, a single saturated hot-pink (`#fa4065`) does all the emotional work: it marks the brand, the primary play actions, and the moments of selection. The atmosphere is that of a working jukebox interface — efficient, scannable, and built for people who came to find a song, not to admire whitespace.

The defining tension is information-density versus a vivid accent. Body text sits in a soft near-black (`#444444`) while headings deepen to `#27282d`, and a whole staircase of grays — `#969697`, `#8b8b8b`, `#666666`, `#d2d2d2` — handles ranks, labels, dividers, and metadata. This gray scaffolding keeps thousands of rows legible without visual fatigue. Then the pink arrives only where action lives, so the eye is trained to read `#fa4065` as "this is the thing you press." A secondary interactive blue (`#0096ff`) appears on active chart-scope tabs, the one place where selection is signalled in cool rather than warm.

Geometry is conservative and quietly Korean-portal in heritage: small 4px radii on buttons and inputs, an occasional 13px pill on search-keyword chips (the dark `#434354` capsule), hairline borders in `#eef1f4`, and shadows kept to a whisper. Nothing floats dramatically. The result is a surface that prioritizes throughput and recognizability over spectacle — the music, the chart position, and the play button are the heroes.

**Key Characteristics:**
- Hot-pink `#fa4065` as the single brand + action accent against an otherwise gray-on-white field
- Compact `dotum` typography at a 12px base — built for dense catalog rows
- Gray staircase (`#969697`, `#8b8b8b`, `#666666`, `#d2d2d2`) carrying ranks, labels, and dividers
- Heading near-black `#27282d`, body `#444444` — soft, never pure black
- Interactive blue `#0096ff` reserved for active chart-scope tabs
- Conservative 4px button/input radius; 13px pill only on the dark search chip
- Hairline `#eef1f4` borders and barely-there shadows — flat, utilitarian depth

## 2. Color Palette & Roles

### Primary
- **Genie Pink** (`#fa4065`): The signature brand color and primary action color — play/listen buttons, selected states, brand marks. A saturated hot-pink that is the one warm note in a gray system.
- **Pink Hover** (`#d62952`): Darker rose for pressed/hover states on pink actions.
- **Pure White** (`#ffffff`): Page background, panel surfaces, text on pink.

### Text Neutrals
- **Heading** (`#27282d`): Strongest text — nav items, track titles on emphasis, section heads. A near-black with a faint warm cast, not `#000000`.
- **Body** (`#444444`): Default reading color for list rows, track titles, and metadata.
- **Secondary** (`#666666`): Supporting text and second-line metadata.
- **Muted** (`#969697`): De-emphasized labels, placeholders, rank numerals.
- **Label** (`#8b8b8b`): Inactive tab labels, small utility text.

### Interactive
- **Accent Blue** (`#0096ff`): Active chart-scope tab text (종합 / 국내 / 국외) — the one cool interactive signal.

### Surface & Borders
- **Surface** (`#f7f8f9`): Subtle off-white fill for grouped panels and zebra rows.
- **Hairline** (`#eef1f4`): Standard light divider/border for cards and table rows.
- **Border** (`#d2d2d2`): Stronger 1px border on inputs and ghost buttons.
- **Icon Gray** (`#a6afb6`): Outline/icon stroke gray on player controls.

### Chips
- **Chip Dark** (`#434354`): Dark slate capsule background for realtime search-keyword pills, with white text.

### On-color
- **On Primary** (`#ffffff`): Text/icon color on pink and dark-chip backgrounds.

## 3. Typography Rules

### Font Family
- **Primary**: `dotum` (돋움), with fallback `sans-serif`. A classic Korean Gothic system face chosen for crisp legibility at very small sizes — the foundation of Korean-portal density.
- No custom web font is loaded; the system relies on platform `dotum`/Gothic rendering, which keeps the catalog fast and consistent across Korean Windows clients.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| GNB Nav | dotum | 18px | 700 | 1.30 | Top global-nav menu items, `#27282d`, active turns `#fa4065` |
| Menu Label | dotum | 14px | 400 | 1.71 | Account / utility links (로그인·회원가입) |
| Body | dotum | 12px | 400 | 1.50 | Standard list rows, track titles, metadata |
| Body Bold | dotum | 12px | 700 | 1.50 | Emphasised labels, active chart tab text |
| Search Chip | dotum | 12px | 700 | 2.08 | Keyword pill on dark `#434354` capsule |
| Caption | dotum | 11px | 400 | normal | Rank numerals, fine print, timestamps |

### Principles
- **12px is the workhorse.** Almost the entire catalog runs at 12px — Genie optimizes for rows-per-screen, and `dotum` stays sharp at this size where many faces would smear.
- **Weight as the primary emphasis lever.** With size held constant at 12px, the jump from 400 to 700 is how Genie signals importance (active tab, selected keyword) rather than color or size.
- **Two functional sizes plus nav.** 18px exists almost exclusively for the global nav; everything informational lives at 11-14px. There is no display/hero tier — this is an app surface, not a landing page.
- **Normal tracking throughout.** Letter-spacing stays at `normal`; the density comes from small sizes and tight line-heights, not negative tracking.

## 4. Component Stylings

### Buttons

**Primary (Listen / Play)**
- Background: `#fa4065`
- Text: `#ffffff`
- Padding: 8px 18px
- Radius: 4px
- Font: 12px dotum weight 700
- Hover: `#d62952`
- Use: Primary play/listen action

**Ghost / Row Action**
- Background: transparent
- Text: `#444444`
- Border: `1px solid #d2d2d2`
- Padding: 6px 12px
- Radius: 4px
- Font: 12px dotum weight 400
- Use: Secondary per-row actions (add to playlist, more)

### Search Keyword Chip
- Background: `#434354`
- Text: `#ffffff`
- Padding: 0px 12px (height ~25px)
- Radius: 13px
- Font: 12px dotum weight 700
- Use: Realtime search-keyword pills in the header search panel

### Chart Scope Tabs
- Inactive text: `#8b8b8b`, weight 400
- Active text: `#0096ff`, weight 700
- Padding: 0px 8px
- Use: Chart scope switch — 종합 / 국내 / 국외. Active state signalled by blue bold text.

### Global Nav (GNB)
- Text: `#27282d`, 18px dotum weight 700
- Active item: `#fa4065` text with a pink bottom border
- Sits on a white bar, left brand mark, horizontal menu

### Cards & Panels
- Background: `#ffffff`
- Border: `1px solid #eef1f4`
- Radius: 8px
- Shadow (ambient): `rgba(0,0,0,0.06) 0px 1px 3px`
- Shadow (panel/popover): `rgba(0,0,0,0.12) 0px 4px 12px`
- Use: Chart panels, album cards, dropdown menus

### Inputs
- Border: `1px solid #d2d2d2`
- Radius: 4px
- Padding: 1px 6px
- Text: `#444444`
- Placeholder: `#969697`
- Use: Header search field

### List Rows & Rank Badges
- Row text: `#444444`, 12px; title strengthens to `#27282d` on hover/selection
- Rank numeral: `#969697`, 11px, left-aligned
- Row divider: `1px solid #eef1f4`

---

**Verified:** 2026-06-09 (omd-add-reference — Tier 1 live inspect)
**Tier 1 sources:** https://www.genie.co.kr, https://company.genie.co.kr (Genie Music corporate)

## 5. Layout Principles

### Spacing System
- Base unit: small and dense — 1px, 6px, 8px, 12px, 18px, 24px, 32px
- The scale is compressed at the low end because catalog rows are packed tightly; whitespace is rationed, not lavished.

### Grid & Container
- Centered fixed-width content column (Korean-portal convention) rather than fluid full-bleed
- Multi-column chart/ranking blocks laid side by side
- Header zone: brand + search + utility links; main zone: charts and album grids; footer: corporate/legal links
- Album artwork in consistent square thumbnails seeded across grid cells

### Whitespace Philosophy
- **Density first.** Genie maximizes rows-per-screen so a user scanning a chart sees as many positions as possible without scrolling. Gaps are functional separators, not breathing room.
- **Gray dividers, not gaps.** Separation between rows is achieved with `#eef1f4` hairlines rather than large empty space.
- **Accent as wayfinding.** The pink and the active-blue tab are the only visual interruptions in an otherwise even gray field, so they double as navigation landmarks.

### Border Radius Scale
- Standard (4px): buttons, inputs, badges — the workhorse
- Comfortable (8px): card/panel containers
- Pill (13px): search-keyword chips only
- Full (9999): circular avatar/icon controls

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline catalog rows |
| Ambient (Level 1) | `rgba(0,0,0,0.06) 0px 1px 3px` | Card and panel lift |
| Panel (Level 2) | `rgba(0,0,0,0.12) 0px 4px 12px` | Dropdowns, search panel, popovers |
| Ring (Accessibility) | `#0096ff` / `#fa4065` outline | Keyboard focus on tabs and actions |

**Shadow Philosophy:** Genie keeps depth almost entirely flat. The surface is a working catalog where dozens of rows must read as a single plane; heavy elevation would fracture that plane. Shadows are reserved for transient overlays (the search panel, dropdown menus) where the user genuinely needs to perceive a layer floating above the catalog. Even then the shadow is neutral black at low alpha — there is no chromatic or brand-tinted depth. Hierarchy is carried by hairline borders and the gray staircase, not by elevation.

## 7. Do's and Don'ts

### Do
- Use `#fa4065` only for brand marks and primary play/action moments — keep it rare so it reads as "press here"
- Run catalog text at 12px `dotum` and use weight 700 (not size or color) for emphasis
- Separate rows with `#eef1f4` hairlines rather than large gaps
- Reserve `#0096ff` for the active chart-scope tab state
- Keep buttons and inputs at a 4px radius; use the 13px pill only for the dark search chip
- Use the gray staircase (`#969697`, `#8b8b8b`, `#666666`) to rank importance of metadata
- Keep shadows neutral, low, and limited to overlays

### Don't
- Don't spread pink across decorative areas — it is an action signal, not a background
- Don't introduce a display/hero type tier; Genie has no oversized marketing headlines
- Don't use pure black (`#000000`) for text — headings are `#27282d`, body is `#444444`
- Don't add large radii or pill shapes to buttons/cards — geometry stays conservative
- Don't tint shadows or add dramatic elevation — the catalog must read as one plane
- Don't widen row spacing for "breathing room" — density is the product
- Don't use blue for anything other than active tab selection

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single-column chart, collapsed nav, stacked search |
| Tablet | 640-1024px | Reduced column count, condensed utility bar |
| Desktop | 1024-1280px | Full multi-column chart + album grid |
| Large Desktop | >1280px | Centered fixed content column with side margins |

### Touch Targets
- Pink primary actions get comfortable 8px/18px padding for tap
- Search chips at 25px height with 12px horizontal padding
- Row controls (play, add) sized for finger taps on mobile while staying compact on desktop

### Collapsing Strategy
- Global nav: horizontal 18px menu → hamburger/drawer on mobile
- Multi-column charts → single stacked column
- Album grids: many-per-row → 2-3 per row → list rows
- Search keyword chips wrap to multiple lines rather than truncating
- 12px base holds across breakpoints; only layout columns collapse, not type scale

### Image Behavior
- Album artwork stays square at all sizes, served as consistent thumbnails
- Artwork maintains the same hairline framing across breakpoints
- Lazy-loaded grid cells fill from a neutral `#f7f8f9` placeholder

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary action / brand: Genie Pink (`#fa4065`)
- Action hover: Pink Hover (`#d62952`)
- Active tab: Accent Blue (`#0096ff`)
- Heading text: `#27282d`
- Body text: `#444444`
- Muted / placeholder: `#969697`
- Inactive label: `#8b8b8b`
- Background: White (`#ffffff`)
- Subtle surface: `#f7f8f9`
- Hairline border: `#eef1f4`
- Input border: `#d2d2d2`
- Dark chip: `#434354`

### Example Component Prompts
- "Create a chart row list: white background, rows separated by 1px #eef1f4 hairlines. Rank numeral at 11px dotum #969697, track title at 12px dotum #444444 (strengthens to #27282d on hover). A pink play button (#fa4065, 4px radius, 8px 18px padding, white 12px/700 text, hover #d62952) at the right."
- "Design chart scope tabs: 종합 / 국내 / 국외 at 12px dotum. Inactive #8b8b8b weight 400, active #0096ff weight 700. Padding 0px 8px."
- "Build a realtime-search panel: white card, 8px radius, 1px #eef1f4 border, shadow rgba(0,0,0,0.12) 0px 4px 12px. Keyword chips on #434354 pills, 13px radius, white 12px/700 text, 0px 12px padding."
- "Create the global nav: white bar, brand mark left, horizontal menu at 18px dotum weight 700 #27282d. Active item turns #fa4065 with a pink bottom border. Search field right: 1px #d2d2d2 border, 4px radius, placeholder #969697."

### Iteration Guide
1. Keep everything at 12px `dotum` unless it is the global nav (18px) — resist scaling up
2. Use weight 700 for emphasis before reaching for color or size
3. `#fa4065` is rare and reserved for action/brand; never use it as a fill
4. Separate content with `#eef1f4` hairlines, not whitespace
5. Active selection in tabs is `#0096ff` bold; everything else stays gray
6. Radius is 4px (controls), 8px (cards), 13px (search chip) — no large rounding
7. Shadows are neutral, low-alpha, and only for overlays

---

## 10. Voice & Tone

Genie Music's web voice is functional, friendly, and unmistakably Korean-consumer — it speaks the plain, warm Korean of a service that wants you to find and play music quickly. The service tagline *"지니 : 음악, 그리고 설레임"* ("Genie: Music, and the flutter of excitement") sets a gently emotional register that the dense utilitarian UI then keeps in check. Labels are short imperative Korean nouns and verbs (듣기, 담기, 다운, 검색), never marketing slogans inside the catalog itself.

| Context | Tone |
|---|---|
| Nav & menu labels | Short Korean nouns: 차트, 최신음악, 라디오, 매거진 |
| Row actions | Bare imperatives: 듣기, 담기, 다운 |
| Search | Helpful and immediate: 인기검색어, 최근검색어, 최근검색어 전체삭제 |
| Empty / no-result | Plain and honest: "검색 결과가 없습니다" |
| Promotional banners | Warmer, benefit-led Korean — the only place with emotional copy |
| Legal / corporate | Formal Korean, full company disclosure in the footer |

**Forbidden register.** No English hype loaned in where Korean works, no exclamation-stacked CTAs inside the catalog, no clever wordplay on functional buttons. The emotional warmth lives in the tagline and promotional surfaces; the working UI stays terse and clear.

## 11. Brand Narrative

Genie Music (지니뮤직) is one of Korea's major music-streaming services, operated by **지니뮤직 (Genie Music Corporation)**, a company affiliated with **KT** (Korea Telecom). It competes in the Korean streaming market alongside Melon, FLO, and others, with the tagline *"지니 : 음악, 그리고 설레임"*. The brand identity centers on the genie/lamp metaphor — music summoned on demand — and a signature hot-pink that distinguishes it instantly in a category crowded with greens and blues.

The product's design heritage is the Korean web portal: information-dense, chart-driven, and optimized for the daily ritual of checking what is trending (실시간 차트). Where Western streaming services lead with editorial imagery and generous whitespace, Genie leads with the chart — a live ranked list of what Korea is listening to right now. That cultural difference is encoded directly in the design: the catalog is the homepage, density is a feature, and the realtime chart is the centerpiece.

What Genie embraces: speed, recognizability (one bold pink), and throughput for users who arrive knowing what they want. What it avoids: the slow, image-heavy "discovery experience" of Western competitors — Genie assumes you came to play music, and gets out of the way.

## 12. Principles

1. **The chart is the homepage.** Genie's center of gravity is the realtime ranked list. Design serves scanning a chart fast, not browsing editorial imagery.
2. **Density is a feature.** Maximize rows-per-screen. Korean music listeners expect to see the whole top-100 with minimal scrolling; whitespace that costs a row costs trust.
3. **One bold accent.** A single saturated pink (`#fa4065`) carries brand and action. Restraint everywhere else makes the accent legible as a signal.
4. **Weight before color.** With type held at 12px, emphasis is expressed through `dotum` weight 700 — the cheapest, most consistent emphasis lever for dense data.
5. **Gray does the structural work.** A disciplined gray staircase ranks importance across thousands of metadata cells without introducing color noise.
6. **Flat by default.** The catalog reads as one plane; elevation is reserved for genuine overlays. No decorative depth.
7. **Warmth lives in the words, not the chrome.** The emotional "설레임" promise is carried by tagline and promo copy; the functional UI stays terse.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Korean music-streaming user segments, not individual people.*

**Seo-yeon, 24, Seoul.** University student who opens Genie every morning to check the 실시간 차트 before class. Measures the app by how fast she can see the current top 10 and tap play. Values the dense list — she can scan twenty positions without scrolling. Would be annoyed by a "redesign" that turned the chart into big editorial cards.

**Min-jae, 31, Busan.** KT bundle subscriber who got Genie with his phone plan. Listens on the morning commute, mostly via the chart and a few saved playlists. Doesn't care about discovery features; cares that 듣기 works instantly and the download for offline play is one tap.

**Hyun-woo, 38, Daegu.** Long-time K-pop fan who follows specific artists and watches their chart positions during comeback week. Refreshes the realtime chart obsessively. The pink play button and the bold active-tab state are his entire interaction vocabulary — everything else is gray context.

**Ji-woo, 19, Incheon.** New listener comparing Genie against Melon and FLO. Recognizes Genie immediately by the hot-pink. Finds the interface "fast and to the point" compared to image-heavy competitors, which is exactly why she keeps it.

## 14. States

| State | Treatment |
|---|---|
| **Empty (search, no results)** | White canvas, single plain Korean line in `#444444` at 12px: "검색 결과가 없습니다." No illustration. Search field stays focused for retry. |
| **Empty (playlist, none saved)** | Muted `#969697` single line prompting the user to add tracks. One pink CTA to browse the chart. |
| **Loading (chart first paint)** | Neutral `#f7f8f9` skeleton rows at exact final row height. No shimmer drama — rows fill top-down as the chart resolves. |
| **Loading (artwork grid)** | `#f7f8f9` square placeholders that swap to album art on load, preserving grid geometry. |
| **Error (playback failed)** | Inline message in `#444444` near the row with a plain-Korean reason; retry affordance in pink. No generic "오류가 발생했습니다" when a specific cause is known. |
| **Active (selected tab)** | Tab text switches to `#0096ff` weight 700; siblings stay `#8b8b8b`. |
| **Hover (track row)** | Title strengthens from `#444444` to `#27282d`; row may take a `#f7f8f9` fill. Play affordance reveals in pink. |
| **Selected (now playing)** | Active row marked with `#fa4065` accent (title color and a left marker). |
| **Disabled** | Control opacity reduced; pink fades toward `#fa406580`-equivalent muting rather than switching to gray, preserving brand read. |
| **Success (added to playlist)** | Brief inline confirmation in plain Korean; no heavy toast. The row reflects the new state directly. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Selection commits, tab switches, focus |
| `motion-fast` | 120ms | Row hover, button press feedback |
| `motion-standard` | 200ms | Dropdown / search-panel open, overlay fade |
| `motion-slow` | 300ms | Banner / promo carousel transitions |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Panels and dropdowns arriving |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way state transitions |

**Forbidden.** No bounce or overshoot on functional controls — the catalog is a working surface, not a playful one. Spring delight belongs to promotional banners at most, never to chart rows or playback controls.

**Signature motions.**

1. **Tab scope switch.** Switching 종합 / 국내 / 국외 commits near-instantly with a quick `#0096ff` color transition on the active label; the chart body cross-fades over `motion-standard`.
2. **Search panel reveal.** The realtime-search panel drops in over `motion-standard / ease-enter` with the panel shadow (`rgba(0,0,0,0.12) 0px 4px 12px`) signalling the overlay layer above the flat catalog.
3. **Row hover.** Track rows respond at `motion-fast` with a subtle `#f7f8f9` fill and title darkening — fast enough to feel responsive across a long scrolling list.
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all transitions collapse to `motion-instant`; carousels stop auto-advancing. The catalog remains fully functional with no loss of information.

## 16. Do's and Don'ts (Brand Philosophy)

### Do
- Treat the realtime chart as the centerpiece — design for fast scanning of ranked lists
- Keep the hot-pink `#fa4065` rare and tied to action and brand identity
- Let the gray staircase and `dotum` weight carry hierarchy in dense data
- Honor the warm Korean tagline register in promo copy while keeping UI labels terse
- Maintain flat, neutral depth so the catalog reads as one plane
- Preserve density — measure success by rows-per-screen, not whitespace

### Don't
- Don't dilute the pink into backgrounds or decoration
- Don't import a Western "discovery-first" image-heavy layout that buries the chart
- Don't scale type up into a marketing hero tier inside the app
- Don't use pure black, large radii, or tinted/dramatic shadows
- Don't let promotional warmth leak into functional button copy
- Don't trade catalog density for empty space
