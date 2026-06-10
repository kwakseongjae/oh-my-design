---
id: abema
name: ABEMA
country: JP
category: consumer-tech
homepage: "https://abema.tv"
primary_color: "#ddaa00"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=abema.tv&sz=128"
verified: "2026-06-10"
added: "2026-06-10"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-10"
  note: "Token names are verbatim from ABEMA's shipped web-app CSS :root block (--abema-yellow = --color-primary #ddaa00; --color-accent #f0163a LIVE crimson). Canvas is pure black; surfaces ladder #0b0b0b → #171717 → #212121 → #373737. Main app was in a large-scale outage on inspect day; token CSS recovered from the brand's own asset bundle (Wayback 2025-12-31)."
  colors:
    primary: "#ddaa00"
    primary-hover: "#dfb015"
    accent: "#f0163a"
    accent-hover: "#f34461"
    green: "#16deb5"
    green-hover: "#44e5c5"
    purple: "#a873ff"
    purple-hover: "#af7eff"
    ppv-blue: "#02d1d6"
    coin: "#ffc400"
    canvas: "#000000"
    surface: "#171717"
    surface-sub: "#212121"
    surface-hover: "#373737"
    surface-deep: "#0b0b0b"
    skeleton: "#1c1c1c"
    foreground: "#e6e6e6"
    smoke: "#999999"
    smoke-strong: "#767676"
    link-hover: "#c5c5c5"
    hairline: "#333333"
    pale: "#f5f5f5"
    on-primary: "#212121"
    white: "#ffffff"
  typography:
    family: { sans: "CopyRight (custom webfont) + Hiragino Sans + BIZ UDPGothic", alphanumeric: "Helvetica / Arial", condensed: "Roboto Condensed" }
    title-l:  { size: 32, weight: 700, use: "Page titles (--font-size-title-l)" }
    title-m:  { size: 27, weight: 700, use: "Section titles (--font-size-title-m)" }
    title-s:  { size: 22, weight: 700, use: "Sub-section titles (--font-size-title-s)" }
    heading:  { size: 24, weight: 700, lineHeight: 1.5, use: "Status/feature headings (SorryPage h1, --font-size-xxxl)" }
    body-lg:  { size: 16, weight: 700, lineHeight: 1.5, use: "Emphasis body, notification text (--font-size-l)" }
    body:     { size: 14, weight: 400, lineHeight: 1.5, use: "Standard reading text, button labels (--font-size-m)" }
    caption:  { size: 12, weight: 700, lineHeight: 1.5, use: "Tags, badges, meta (--font-size-xs)" }
    micro:    { size: 10, weight: 700, use: "Thumbnail labels (--font-size-xxs)" }
  spacing: { unit: 4, sm: 8, md: 12, base: 16, lg: 32, content-min: 724, content-max: 1024, content-max-vod: 1280 }
  rounded: { sm: 2, md: 4, lg: 8, xl: 12, full: 9999 }
  shadow:
    floating: "0 2px 16px rgba(0,0,0,.2)"
    strong: "0 2px 4px rgba(0,0,0,.5)"
  components:
    button-primary: { type: button, bg: "#ddaa00", fg: "#212121", radius: "4px", height: "44px", font: "14px / 700", states: "hover #dfb015 · active opacity .7 · disabled opacity .4", use: "Primary CTA (com-a-Button--primary)" }
    button-secondary: { type: button, bg: "#e6e6e6", fg: "#212121", radius: "4px", height: "44px", font: "14px / 700", hover: "#ffffff", use: "Secondary action" }
    button-dark: { type: button, bg: "#212121", fg: "#e6e6e6", radius: "4px", height: "44px", font: "14px / 700", hover: "#373737", use: "Tertiary action on dark canvas" }
    button-danger: { type: button, bg: "#f0163a", fg: "#ffffff", radius: "4px", height: "44px", font: "14px / 700", hover: "#f34461", use: "Destructive / cancel-subscription action" }
    badge-live: { type: badge, bg: "#f0163a", fg: "#ffffff", radius: "4px", height: "20px", padding: "0 4px", font: "12px / 700", use: "LIVE broadcasting tag on thumbnails (com-BroadcastingTag)" }
    input-text: { type: input, bg: "#212121", fg: "#e6e6e6", radius: "4px", height: "44px", font: "14px / 400", use: "Dark text field; search variant 46px; placeholder #999999" }
    card-floating: { type: card, bg: "#212121", radius: "4px", shadow: "0 2px 16px rgba(0,0,0,.2)", use: "Search-suggest panel / floating dropdown card" }
    tab-panel: { type: tab, active: "bg #212121 + text #e6e6e6", radius: "4px 4px 0 0", height: "44px", use: "Content panel tabs (com-m-TabList)" }
    toggle-checkbox: { type: toggle, bg: "#ddaa00", border: "1px solid #999999", radius: "2px", height: "20px", use: "Checkbox; checked fills ABEMA yellow" }
    toast-notification: { type: toast, bg: "#212121", fg: "#e6e6e6", radius: "4px", padding: "12px 16px", font: "16px / 700", use: "Notification block; leading label in #ddaa00" }
  components_harvested: true
---

# Design System Inspiration of ABEMA

## 1. Visual Theme & Atmosphere

ABEMA is Japan's "new future of television" — a free, ad-supported linear-streaming hybrid from CyberAgent — and its interface is one of the most committed dark-surface systems in consumer streaming. The canvas is pure black (`#000000`), and content sits on a disciplined ladder of dark grays the brand names in its own CSS tokens: `--dark-stronger` (`#0b0b0b`), `--dark-strong` (`#171717`), `--dark-basic` (`#212121`), and a hover step at `#373737`. On top of this cinema-dark stage, near-white text (`#e6e6e6` — deliberately not pure white) does the reading work, and a single warm signal cuts through: ABEMA yellow (`#ddaa00`), the system's named `--color-primary`, used for links, primary buttons, and selection marks like a broadcast station's "on air" lamp.

The second voice in the palette is the crimson accent (`#f0163a`) — the color of the LIVE badge that stamps every currently-broadcasting thumbnail. Where most streaming services reserve red for errors, ABEMA's red means "happening right now", a direct inheritance from television's live-broadcast culture; it doubles as the danger color. Supporting hues are strictly role-bound: mint green (`#16deb5`) for student plans and positive marks, purple (`#a873ff`) for premium-adjacent surfaces, cyan (`#02d1d6`) for pay-per-view, and coin gold (`#ffc400`) for the in-app currency.

Typography is unapologetically broadcast-bold: weight 700 dominates the entire stylesheet (361 declarations versus 24 at weight 400), set in a custom-named corporate webfont stack ("CopyRight" + Hiragino Sans + BIZ UDPGothic) with Roboto Condensed reserved for condensed alphanumerics like timetable digits. Geometry is tight and televisual — 4px is the universal radius (`--radius: 4px`, 278 occurrences), circles are reserved for avatars and player controls, and shadows are shallow black glows (`0 2px 16px rgba(0,0,0,.2)`) that read as backlight rather than paper elevation. The result feels like an electronic program guide redesigned by a modern product team: dense, dark, loud where liveness demands it, and quiet everywhere else.

**Key Characteristics:**
- Pure black canvas (`#000000`) with a named dark-surface ladder: `#0b0b0b` → `#171717` → `#212121` → hover `#373737`
- ABEMA yellow (`#ddaa00`) as `--color-primary` — links, CTAs, checked states; hover deepens to `#dfb015`
- LIVE crimson (`#f0163a`) for broadcasting-now badges and destructive actions — red means "live", not just "error"
- Near-white foreground `#e6e6e6` instead of `#ffffff` — softened contrast for long viewing sessions
- Weight 700 as the default typographic voice; body text at 14px / 1.5
- Universal 4px radius; 50% circles only for avatars/player controls; 2px on checkboxes
- Role-locked support colors: mint `#16deb5` (student/free), purple `#a873ff` (premium), cyan `#02d1d6` (PPV), gold `#ffc400` (coins)
- Custom corporate font stack ("CopyRight" webfont) with Roboto Condensed for numeric/timetable display

## 2. Color Palette & Roles

### Primary
- **ABEMA Yellow** (`#ddaa00`): `--abema-yellow`, aliased to `--color-primary`. Primary buttons, links (`--font-color-link`), checked radio/checkbox fills, selection highlights. The single warm "action" signal on the dark canvas.
- **Yellow Hover** (`#dfb015`): `--color-primary-hover`. Hover state for primary buttons and links.
- **On Primary** (`#212121`): Label color on yellow buttons — dark-on-yellow, never white-on-yellow.

### Accent (Live & Danger)
- **LIVE Crimson** (`#f0163a`): `--color-accent`. The broadcasting-now tag, NEW labels, danger buttons, warning text (`--font-color-danger`). Red = live first, destructive second.
- **Crimson Hover** (`#f34461`): `--color-accent-hover`. Hover state for accent/danger elements (legacy hover `#bb122e` survives in older surfaces).

### Role-Bound Support
- **Mint Green** (`#16deb5`): `--abema-green`. Student-plan markers, positive accents; hover `#44e5c5`.
- **Purple** (`#a873ff`): `--abema-purple`. Premium-adjacent UI; hover `#af7eff`.
- **PPV Cyan** (`#02d1d6`): `--payperview-blue`. Pay-per-view labeling.
- **Coin Gold** (`#ffc400`): `--color-coin`. In-app coin/currency iconography.

### Dark Surface Ladder
- **Canvas Black** (`#000000`): Page background, player letterboxing, edge gradients.
- **Surface Deep** (`#0b0b0b`): `--dark-stronger`. Deepest panels, onload placeholder background.
- **Surface** (`#171717`): `--dark-strong` / `--bg-regular`. Regular app background; floating variant at 80% opacity (`rgba(23,23,23,.8)`) for overlay chrome like the player's mute button.
- **Surface Sub** (`#212121`): `--dark-basic` / `--bg-sub`. Cards, title cards, dropdowns, inputs, modals — the workhorse component surface.
- **Surface Hover** (`#373737`): `--dark-basic-hover`. Hover state for sub-surfaces and dropdown items.
- **Skeleton** (`#1c1c1c`): `--bg-card-placeholder`. Card skeleton/placeholder fill.

### Text & Lines
- **Foreground** (`#e6e6e6`): `--light-basic` / `--font-color-regular`. Primary text — near-white, never pure.
- **Smoke** (`#999999`): `--smoke-basic`. Secondary text, placeholder text, info color.
- **Smoke Strong** (`#767676`): `--smoke-strong`. Tertiary text, progress-bar track.
- **Link Hover** (`#c5c5c5`): `--font-color-link-hover`. Yellow links cool to gray on hover.
- **Hairline** (`#333333`): `--border-color`. Default border on dark (sub-border `#555555`).
- **Pure White** (`#ffffff`): Badge text, icons, maximum-contrast moments only.

### Light-Theme Exception (Timetable)
- **Pale** (`#f5f5f5`): `--pale-weak` / light text-box background. The EPG timetable runs a parallel `lt-*` light token set (white background, `#eeeeee` program cells, warm `#fcf6e5` for now-playing) — the one deliberately light surface in the product.

## 3. Typography Rules

### Font Family
- **Primary**: "CopyRight" (custom-named corporate webfont), falling through Emoji, Hiragino Sans, BIZ UDPGothic Alphabet, BIZ UDGothic, Meiryo, sans-serif (`--font-family-sans-serif`)
- **Alphanumeric**: Helvetica, Arial (`--font-family-for-alphanumeric`)
- **Condensed numerals**: Roboto Condensed — timetable digits, player timecodes

### Hierarchy

| Role | Size | Weight | Line Height | Notes |
|------|------|--------|-------------|-------|
| Title L | 32px | 700 | 1.3 | `--font-size-title-l`, page titles (mobile 27px) |
| Title M | 27px | 700 | 1.3 | `--font-size-title-m`, section titles (mobile 20px) |
| Heading XXXL | 28px | 700 | 1.5 | `--font-size-xxxxl` |
| Heading | 24px | 700 | 1.5 | `--font-size-xxxl`; SorryPage h1 measured 24px/700 `#e6e6e6` |
| Title S | 22px | 700 | 1.3 | `--font-size-title-s` |
| Emphasis Body | 16px | 700 | 1.5 | `--font-size-l`, notification text, button L labels |
| Body | 14px | 400 | 1.5 (21px) | `--font-size-m`, document default (measured live) |
| Caption | 12px | 700 | 1.5 | `--font-size-xs`, tags and badges |
| Micro | 10px | 700 | 1.5 | `--font-size-xxs`, thumbnail labels (mobile badges) |

### Principles
- **Bold is the default voice.** Weight 700 outnumbers weight 400 by 15:1 in the shipped stylesheet. Headings, buttons, badges, tab labels, notification text — all bold. Weight 400 is reserved for plain reading copy.
- **A dedicated mobile scale.** Every size token has a `mb-` twin one step smaller (title-l 32→27, xxl 22→18), so density survives on phones without reflowing the hierarchy.
- **Condensed digits for broadcast data.** Roboto Condensed handles timetable hours and timecodes, keeping dense numeric grids narrow — a television-schedule inheritance.
- **1.5 / 1.3 / 1 line-height triad.** Reading text at 1.5, headings at 1.3, controls at 1 — the three values cover 90% of declarations.

## 4. Component Stylings

### Buttons

**Primary**
- Background: `#ddaa00`
- Text: `#212121`
- Radius: 4px
- Height: 44px
- Font: 14px / 700
- Hover: `#dfb015` background
- Active: opacity 0.7
- Disabled: opacity 0.4
- Use: Primary CTA (`com-a-Button--primary`) — plan signup, confirm actions

Size scale: small 12px label / 32px height · default 14px / 44px · large 16px / 52px · extra-large 20px / 56px (`--button-label-size-*`).

**Secondary**
- Background: `#e6e6e6`
- Text: `#212121`
- Radius: 4px
- Height: 44px
- Font: 14px / 700
- Hover: `#ffffff` background
- Use: Secondary action paired with a primary

**Dark (Tertiary)**
- Background: `#212121`
- Text: `#e6e6e6`
- Radius: 4px
- Height: 44px
- Font: 14px / 700
- Hover: `#373737` background
- Use: Low-emphasis action sitting directly on the black canvas

**Primary Dark (Inverse)**
- Background: `#212121`
- Text: `#ddaa00`
- Radius: 4px
- Height: 44px
- Font: 14px / 700
- Use: Brand-colored label on dark surface (`com-a-Button--primary-dark`)

**Danger**
- Background: `#f0163a`
- Text: `#ffffff`
- Radius: 4px
- Height: 44px
- Font: 14px / 700
- Hover: `#f34461` background
- Use: Destructive confirmation (unsubscribe, delete)

### Inputs

**Text Field**
- Background: `#212121`
- Text: `#e6e6e6`
- Radius: 4px
- Height: 44px
- Font: 14px / 400
- Placeholder: `#999999`
- Use: Dark-theme text input (`com-InputText`); small variant 36px with 12px font and 8px padding; search variant 46px

### Cards & Containers

**Floating Panel**
- Background: `#212121`
- Radius: 4px
- Shadow: `0 2px 16px rgba(0,0,0,.2)`
- Use: Search-suggest list, dropdown menus, floating cards (`com-search-SearchSuggestList`)

**Title Card**
- Background: `#212121`
- Radius: 4px
- Use: Program/episode cards on black canvas (`--bg-title-card`); skeleton state fills `#1c1c1c`

### Badges

**LIVE Broadcasting Tag**
- Background: `#f0163a`
- Text: `#ffffff`
- Radius: 4px
- Height: 20px
- Padding: 0 4px
- Font: 12px / 700
- Use: Broadcasting-now stamp at top-right of thumbnails (`com-BroadcastingTag`; mobile 16px height, 10px font)

**Pre-Broadcast Tag**
- Background: `rgba(23,23,23,0.8)`
- Text: `#ffffff`
- Radius: 4px
- Height: 20px
- Padding: 0 4px
- Font: 12px / 700
- Use: Countdown-to-broadcast tag with clock icon

**NEW Label**
- Background: `#f0163a`
- Text: `#ffffff`
- Height: 16px
- Padding: 0 4px
- Font: 10px / 700
- Use: Newest-episode corner label, bottom-left radius 4px only

### Tabs

**Panel Tab**
- Radius: 4px 4px 0px 0px
- Height: 44px
- Active: background `#212121`
- Use: Content panel tabs (`com-m-TabList`); inactive tabs sit transparent on black, 16px horizontal label padding

**Round Tab**
- Radius: 16px
- Height: 44px
- Focus: background `#e6e6e6`, text `#212121`
- Use: Genre chip tabs (`com-RoundTabItem`; mobile 48px row, 12px font)

### Toggles & Selection

**Checkbox**
- Border: 1px solid `#999999`
- Radius: 2px
- Height: 20px
- Checked: background `#ddaa00`
- Use: Settings/consent checkboxes; small variant 14px; radio twin uses 50% radius and the same yellow fill

### Toasts

**Notification Block**
- Background: `#212121`
- Text: `#e6e6e6`
- Radius: 4px
- Padding: 12px 16px
- Font: 16px / 700
- Use: In-app notification row; leading label rendered in `#ddaa00` (`com-m-NotificationBlock`); mobile variant adds 1px solid `#333333` border

### Dialogs

**Modal**
- Overlay: `rgba(0,0,0,0.7)`
- Padding: 32px 16px 16px
- Use: Centered modal (`com-a-Modal`); width scale 300px (S) / 360px (M) / 640px (L)

---
**Verified:** 2026-06-10
**Tier 1 sources:** https://abema.tv (live inspect 2026-06-10 — large-scale outage day, dark maintenance/sorry shell measured); https://abema.tv/assets/registry.1bbd6d267a32e228541e6.css (ABEMA's own shipped web-app CSS bundle: full `:root` token system + component classes, retrieved via web.archive.org snapshot 2025-12-31 because origin assets rotated during the outage); https://times.abema.tv (ABEMA TIMES, brand-owned media surface, live inspect 2026-06-10)
**Tier 2 sources:** none available (getdesign.md/abema and getdesign.md/abematv both NOT_FOUND; styles.refero.design ?q=abema returns no ABEMA listing)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 4px (`--space: 4px`); paddings compose as multiples (4, 8, 12, 16, 32)
- Tooltip/badge paddings derive from `calc(var(--space)*n)` — the unit is enforced in code, not convention

### Grid & Container
- Content min-width 724px, max-width 1024px (`--content-min-width` / `--content-max-width`); VOD watch pages extend to 1280px
- Mobile content width 640px
- Home is a vertical stack of horizontal carousels (broadcast rails) over the black canvas, edge-faded with black gradients (`linear-gradient(90deg, #000, transparent)`)
- The EPG timetable is the structural exception: a dense light-theme grid with 8px lane spacing

### Whitespace Philosophy
- **Density over air.** ABEMA is a television guide, not an editorial site — rails, tags, and metadata pack tightly at 4px increments; generous whitespace is spent only around the player.
- **Black is the separator.** Sections separate by the canvas showing through between `#212121` cards rather than by borders or shadows.
- **Edge gradients instead of hard clips.** Carousel rails fade into `#000000` (or `#212121` inside cards) at their edges, keeping the dark surface continuous.

### Border Radius Scale
- Micro (2px): checkboxes
- Standard (4px): buttons, inputs, cards, tags, modals — the universal value (`--radius: 4px`, 278 declarations)
- Relaxed (8px): featured containers
- Large (12-16px): round tabs, promotional cards
- Circle (50%): avatars, radio buttons, player control buttons

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow, canvas `#000000` | Page background, rails |
| Surface (Level 1) | Background shift to `#212121`, no shadow | Cards, inputs, tabs |
| Floating (Level 2) | `0 2px 16px rgba(0,0,0,.2)` | Dropdowns, suggest panels, floating cards |
| Strong (Level 3) | `0 2px 4px rgba(0,0,0,.5)` | Player chrome, compact overlays |
| Overlay (Level 4) | `rgba(0,0,0,0.7)` full-screen scrim | Modals |

**Shadow Philosophy**: On a black canvas, shadows barely read — so ABEMA's depth system leans on background-color steps (`#0b0b0b` → `#171717` → `#212121` → `#373737`) rather than elevation. The few shadows that exist are soft black glows used as separation hints for elements that float over imagery (dropdowns over thumbnails). Translucent surface tokens (`rgba(33,33,33,.8)`, `rgba(23,23,23,.8)`) handle chrome that must sit over video without fully hiding it — depth through transparency, a player-first pattern.

## 7. Do's and Don'ts

### Do
- Keep the canvas pure black (`#000000`) and step surfaces up the named ladder (`#0b0b0b`, `#171717`, `#212121`, `#373737`)
- Reserve ABEMA yellow (`#ddaa00`) for actions: primary buttons, links, checked states — hover to `#dfb015`
- Use crimson (`#f0163a`) for "live right now" badges first, destructive actions second
- Set near-white text in `#e6e6e6`, with `#999999` for secondary and `#767676` for tertiary
- Default to weight 700 for headings, buttons, badges, and tab labels
- Use 4px radius everywhere; 50% only for avatars and circular player controls
- Use translucent dark surfaces (`rgba(23,23,23,.8)`) for chrome floating over video
- Use Roboto Condensed for timetable digits and timecodes

### Don't
- Use pure white `#ffffff` for body text — `#e6e6e6` is the reading color; white is for badge text and icons
- Spread yellow beyond actionable elements — it is the single attention signal on a dark field
- Use red for generic emphasis — `#f0163a` carries the specific meaning "broadcasting live" (and danger)
- Add paper-style drop shadows to cards — separation comes from surface-color steps, not elevation
- Use pill-shaped buttons — the system is 4px-rectangular; only genre chips reach 16px
- Set headings in light weights — ABEMA's voice is broadcast-bold 700
- Put white-on-yellow labels on primary buttons — the label is always dark `#212121`
- Break the 4px spacing unit with arbitrary gaps

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | `mb-` type scale (titles 32→27, 27→20), badges shrink to 16px height / 10px font, tab rows 48px |
| Tablet/Min | 724px | `--content-min-width` floor for the desktop app layout |
| Desktop | 724-1024px | Standard rail layout at `--content-max-width: 1024px` |
| VOD Watch | up to 1280px | Player pages extend to `--content-max-width-for-vod` |

### Touch Targets
- Buttons at 44px default height (52/56px for large CTAs) — thumb-safe by default
- Mobile tab rows at 48px with 8px vertical padding
- Timetable arrow controls at 60px circles (`rgba(0,0,0,.6)` over content)

### Collapsing Strategy
- Every font-size token swaps to its `mb-` twin — hierarchy compresses one step rather than reflowing
- Carousel rails persist on mobile with edge gradients; arrows hide in favor of swipe
- Badges and tags keep their geometry, shrinking 20px→16px height
- The player remains the fixed anchor; metadata stacks beneath it

### Image Behavior
- Program thumbnails are 16:9, corner-tagged (LIVE top-right at 4px inset, NEW top-right corner-fitted)
- Thumbnails carry no shadow; on hover a `hsla(0,0%,100%,.08)` white veil lifts them
- Skeleton thumbnails fill `#1c1c1c` on `#212121` cards

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA / links: ABEMA Yellow (`#ddaa00`), hover (`#dfb015`), label on yellow: `#212121`
- LIVE badge / danger: Crimson (`#f0163a`), hover (`#f34461`)
- Canvas: Black (`#000000`)
- Card/input/modal surface: `#212121`, hover `#373737`
- App background: `#171717`
- Primary text: `#e6e6e6`; secondary `#999999`; tertiary `#767676`
- Border on dark: `#333333`
- Student/positive: Mint (`#16deb5`); premium: Purple (`#a873ff`); PPV: Cyan (`#02d1d6`); coins: Gold (`#ffc400`)

### Example Component Prompts
- "Create a dark streaming home: pure #000000 canvas, horizontal carousel rails of 16:9 thumbnail cards on #212121 with 4px radius. Each live card gets a top-right LIVE badge: #f0163a background, white 12px/700 text, 4px radius, 20px height. Primary text #e6e6e6, metadata #999999."
- "Design a primary button: #ddaa00 background, #212121 text, 4px radius, 44px height, 14px weight-700 label. Hover #dfb015. Secondary twin: #e6e6e6 background, #212121 text, hover #ffffff. Danger twin: #f0163a with white text, hover #f34461."
- "Build a search field on dark: #212121 background, 4px radius, 46px height, #e6e6e6 text, #999999 placeholder. Suggest dropdown below: #212121 panel, 4px radius, shadow 0 2px 16px rgba(0,0,0,.2), rows hover #373737."
- "Create panel tabs on black: 44px height, 4px 4px 0 0 radius, active tab background #212121 with #e6e6e6 weight-700 label, inactive transparent with #999999 label."
- "Design a notification toast: #212121 background, 4px radius, 12px 16px padding, leading label in #ddaa00 16px/700, message #e6e6e6 16px/700."

### Iteration Guide
1. Canvas is `#000000`; components live on `#212121`; never use light surfaces except the EPG timetable
2. Yellow `#ddaa00` = action, crimson `#f0163a` = live/danger — never swap or dilute these meanings
3. Text: `#e6e6e6` primary / `#999999` secondary / `#767676` tertiary; white only inside badges
4. Radius is 4px everywhere; 2px checkboxes; 50% circles for avatars and player controls
5. Weight 700 for every label and heading; 400 only for reading copy at 14px/1.5
6. Hover = one surface step up (`#212121` → `#373737`) or one tone shift (`#ddaa00` → `#dfb015`); pressed = opacity 0.7; disabled = opacity 0.4
7. Depth = surface steps and `rgba(0,0,0,.2)` glows, not paper shadows
8. Keep 4px spacing increments; content max 1024px (1280px for watch pages)

---

## 10. Voice & Tone

ABEMA's voice is **immediate, broadcast-warm, and unpretentious** — the register of a television announcer translated into product copy. The service introduces itself as "新しい未来のテレビ" (the new future of television), and the copy keeps television's directness: short declaratives, time-anchored language (今・LIVE・最新), and zero subscription-guilt pressure on the free tier. Japanese politeness forms are used straightforwardly (です/ます) without corporate stiffness.

| Context | Tone |
|---|---|
| Service tagline | Mission-framed, plain. "無料動画・話題の作品が楽しめる新しい未来のテレビ" — benefit first, vision second. |
| Player / controls | Imperative and instant: "クリックでミュートを解除", "音声をオンにする". No fluff between user and playback. |
| Live signals | Single loud words: LIVE, NEW. The badge is the sentence. |
| Error / outage | Apologetic but composed: "申し訳ありません" + factual status + a link to official channels. |
| Category navigation | Bare nouns: ニュース、スポーツ、アニメ、将棋、麻雀 — a channel dial, not a menu essay. |
| Premium upsell | Direct benefit statements; the free tier is never shamed. |

**Voice samples (verbatim):**
- "無料動画・話題の作品が楽しめる新しい未来のテレビ" — service title tagline. *(verified: document title, abema.tv, archived 2026-01-01 snapshot of live page)*
- "クリックでミュートを解除" — player mute-unlock button. *(verified live 2026-06-10, abema.tv shell)*
- "ABEMAの表示に失敗しました" / "申し訳ありません" — outage SorryPage headings. *(verified 2026-06-10 / archived snapshot)*

**Forbidden register**: hype superlatives ("革命的"), aggressive FOMO countdowns outside genuinely live content, dense legalistic blocks in player UI, and casual slang that breaks the broadcaster's composure.

## 11. Brand Narrative

ABEMA launched in **April 2016** as "AbemaTV", a joint venture led by **CyberAgent** (with TV Asahi as media partner) under CyberAgent founder **藤田晋 (Susumu Fujita)**, who framed the service as a bet on reinventing television for the internet generation: dozens of free, 24-hour linear channels — news, anime, sports, shogi, mahjong — streamed like broadcast TV but born on the web. The 2020 rebrand to **ABEMA** and the August 2021 product renewal formalized the idea in internal brand guidelines built around the concept of **"テレビの再発明" (the reinvention of television)**, presented publicly by Chief Creative Director 佐藤洋介 at CyberAgent Developer Conference 2022 — the goal being to infuse the service itself with "意思" (intent) so every touchpoint carries the brand.

The design system reads as that thesis executed literally. The black canvas is the switched-on television in a dark living room; the yellow `#ddaa00` primary is the tuning lamp; the crimson LIVE tag inherits the red light of a broadcast studio. Free linear channels remain the front door — the World Cup 2022, which ABEMA streamed free in its entirety, became the brand's defining proof that "the new future of television" could out-broadcast broadcast — while ABEMA Prime news and the shogi/mahjong channels built daily-habit audiences television had stopped serving.

What ABEMA refuses: the paywalled-catalog coldness of subscription-first streamers, light-mode editorial chrome, and interface decoration that competes with content. What it embraces: television's liveness culture (red means on-air), announcer-direct microcopy, broadcast-bold type, and a dark surface system disciplined enough to let thumbnails be the only color that matters.

## 12. Principles

1. **Liveness is the product.** ABEMA's identity is simultaneous experience — everyone watching the same moment. *UI implication:* the LIVE crimson badge (`#f0163a`) is sacred vocabulary; surface "now broadcasting" aggressively and never use its red for mere decoration.
2. **The canvas is a switched-off screen.** Content supplies the light. *UI implication:* pure `#000000` background, `#212121` component surfaces, no paper shadows — separation through darkness, color through thumbnails.
3. **One yellow, one meaning.** `#ddaa00` is the brand's entire action vocabulary. *UI implication:* links, primary CTAs, and checked states share the yellow; nothing else may borrow it, so the next action is never ambiguous.
4. **Broadcast-bold, announcer-brief.** Television speaks in headlines. *UI implication:* weight 700 by default, microcopy in short imperatives, badges as one-word sentences.
5. **Reinvent television, don't imitate apps.** From the brand concept "テレビの再発明". *UI implication:* keep televisual structures — channel rails, the EPG timetable (the one light surface), condensed timecode digits — instead of defaulting to generic streaming-app patterns.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable ABEMA audience segments (free linear-TV viewers, anime fans, shogi/mahjong communities, live-sports audiences), not individual people.*

**佐々木蓮, 24, 東京.** A commuter who treats ABEMA as his pocket television — ABEMA Prime news in the morning, anime rails at night. Has never paid for a subscription and doesn't feel like a second-class user; the free linear front door is why he's loyal.

**田中美咲, 31, 大阪.** A premium subscriber who came for a World Cup match her friends were all watching live and stayed for on-demand dramas. Values that "live" in ABEMA means genuinely simultaneous — the crimson badge is her cue to join the shared moment.

**山本健一, 58, 名古屋.** A shogi devotee who keeps the shogi channel running for hours. Appreciates the dark, calm interface and the timetable's clarity; he navigates by the EPG like a newspaper TV section, exactly the metaphor ABEMA intends.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no results)** | Dark canvas stays; single `#e6e6e6` line stating no matches, with a `#ddaa00` link back to genres. No illustration noise on the black field. |
| **Empty (my-list, none yet)** | `#999999` one-liner explaining the list is empty plus a yellow path to discover — calm, no guilt. |
| **Loading (page/onload)** | Placeholder canvas at `#0b0b0b` (`--onload-bg-placeholder`); rails appear as they resolve. |
| **Loading (cards)** | Skeleton cards: `#1c1c1c` thumbnail fill on `#212121` card body (`--bg-card-placeholder`), title bars in `#212121` — flat pulse, no shimmer gloss. |
| **Error (display failed)** | Dedicated SorryPage on black: bold 24px/700 `#e6e6e6` heading "ABEMAの表示に失敗しました", apology line, and `#ddaa00` links to official status channels (measured live 2026-06-10). |
| **Error (form/field)** | Danger color `#f0163a` for the message text (`--font-color-danger`), field keeps its `#212121` surface — error is typographic, not a glowing red box. |
| **Maintenance / outage** | Full-bleed dark maintenance shell retaining brand tokens: black canvas, `rgba(23,23,23,.8)` chrome, `#ddaa00` links to x.com/ABEMA and help center. |
| **Success (action saved)** | Notification block: `#212121` toast, 4px radius, leading `#ddaa00` label, `#e6e6e6` 16px/700 message. Brief, no celebration. |
| **Skeleton** | `#1c1c1c` blocks at final dimensions inside `#212121` cards; text rows as `#212121` bars (`--bg-card-texts-placeholder`). |
| **Disabled** | Opacity 0.4 on the whole control (`--button-opacity-disabled`) — yellow stays yellow, just dimmed, preserving the action vocabulary. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `--fading-duration` | 0.1s | Hover veils, button color/border transitions, suggest-list reveal |
| transition (buttons) | 0.1s ease-out | Border and label color shifts on `com-a-Button` |
| `--duration` | 0.5s | Page-level / carousel slide movements |
| `--tooltip-controller-hover-delay` | 0.3s | Tooltip appearance delay |

**Easings**:

| Curve | Use |
|---|---|
| `linear` | Default (`--easing: linear`) — opacity fades, veil hovers |
| `ease-out` | Button color/border transitions |
| `cubic-bezier(.33, 1, .68, 1)` | Search-suggest panel reveal (easeOutCubic — fast in, soft settle) |

**Motion rules**: Motion is utilitarian and nearly invisible — 0.1s fades dominate because a television interface must never feel like it's animating between channels. Hover states are opacity/veil changes (`hsla(0,0%,100%,.08)` white veil at 0.1s linear) rather than transforms; pressed states drop to opacity 0.7 instantly. The 0.5s budget is reserved for spatial moves like carousel paging. No spring, no bounce, no scale pops — liveness comes from the content, not the chrome. Under `prefers-reduced-motion: reduce`, fades collapse to instant; nothing in the interface depends on animation to communicate state.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 evidence (2026-06-10):
- https://abema.tv live inspect (playwright getComputedStyle) — outage-day shell: black canvas,
  rgba(23,23,23,.8) player chrome, #ddaa00 links, 4px radius, custom "CopyRight" font stack.
- ABEMA web-app CSS bundle abema.tv/assets/registry.1bbd6d267a32e228541e6.css via
  web.archive.org snapshot 2025-12-31 (origin assets rotated during the 2026-06-10 outage).
  All :root token names/values (§1-6, §14-15) quoted verbatim from this brand-shipped artifact:
  --abema-yellow #da0, --color-primary, --color-accent #f0163a, --dark-basic #212121,
  --radius 4px, --duration 0.5s, --button-opacity-disabled 0.4, com-a-Button--* classes,
  com-BroadcastingTag, com-m-NotificationBlock, com-a-Modal, etc.
- https://times.abema.tv live inspect 2026-06-10 (brand-owned media surface, dark canvas).

Brand philosophy:
- CADC 2022 session "ABEMAにおけるサービスブランディング" (cadc.cyberagent.co.jp) — confirms
  brand concept "テレビの再発明", internal ABEMA BRAND GUIDELINES, the "意思" (intent) framing,
  and speakers 佐藤洋介 (Chief Creative Director) / 遠藤直人 (Art Director). Fetched 2026-06-10.
- highlights.jp/project/abematv-branding/ — VI design + brand experience design project page,
  "テレビをもう一度発明する" concept. Fetched 2026-06-10.
- Widely documented public facts (not independently re-verified this turn): AbemaTV launch
  April 2016 as CyberAgent-led JV with TV Asahi; Susumu Fujita's leadership; 2020 rebrand to
  ABEMA; free full streaming of FIFA World Cup 2022; tagline 新しい未来のテレビ.

Voice samples (§10) are verbatim: document title (archived snapshot 2026-01-01), player
mute button + SorryPage strings (live/archived inspects this turn).

Personas (§13) are fictional archetypes informed by publicly observable ABEMA audience
segments. Names are illustrative; they do not refer to real people.

Interpretive claims (e.g., "the black canvas is a switched-on television in a dark living
room", "red means on-air first") are editorial readings connecting ABEMA's observed tokens
to its stated brand concept, not directly sourced ABEMA statements.
-->
