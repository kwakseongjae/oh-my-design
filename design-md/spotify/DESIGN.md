---
id: spotify
name: Spotify
country: US
category: consumer-tech
homepage: "https://www.spotify.com"
primary_color: "#1db954"
logo:
  type: simpleicons
  slug: spotify
verified: "2026-05-15"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#1ed760"
    brand: "#1ed760"
    brand-border: "#1db954"
    canvas: "#121212"
    foreground: "#ffffff"
    muted: "#b3b3b3"
    on-primary: "#000000"
    surface: "#181818"
    surface-mid: "#1f1f1f"
    surface-card: "#252525"
    hairline: "#4d4d4d"
    border-light: "#7c7c7c"
    error: "#f3727f"
    warning: "#ffa42b"
    info: "#539df5"
  typography:
    family: { sans: "SpotifyMixUI", mono: "SpotifyMixUI" }
    section-title:   { size: 24, weight: 700, use: "Bold section titles (SpotifyMixUITitle)" }
    feature-heading: { size: 18, weight: 600, lineHeight: 1.30, use: "Semibold section heads" }
    body-bold:       { size: 16, weight: 700, use: "Emphasized text" }
    body:            { size: 16, weight: 400, use: "Standard body" }
    button:          { size: 14, weight: 700, tracking: 1.4, use: "Uppercase button label" }
    nav:             { size: 14, weight: 400, use: "Navigation links" }
    small:           { size: 12, weight: 400, use: "Tags, counts, fine print" }
    badge:           { size: 10.5, weight: 600, lineHeight: 1.33, use: "Badge text, capitalize" }
    micro:           { size: 10, weight: 400, use: "Smallest text" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48 }
  rounded: { sm: 4, md: 8, lg: 16, full: 9999 }
  shadow:
    heavy: "rgba(0,0,0,0.5) 0px 8px 24px"
    medium: "rgba(0,0,0,0.3) 0px 8px 8px"
    inset-border: "rgb(18,18,18) 0px 1px 0px, rgb(124,124,124) 0px 0px 0px 1px inset"
  components_harvested: true
  components:
    button-primary: { type: button, bg: "#1ed760", fg: "#000000", radius: "9999px", padding: "12px 32px", font: "14px / 700", hover: "scale(1.04) + brightness", use: "Primary brand CTA (Get Spotify Free, Premium)" }
    button-dark-pill: { type: button, bg: "#1f1f1f", fg: "#ffffff", radius: "9999px", padding: "8px 16px", font: "14px / 700", use: "Navigation pills, secondary actions on dark" }
    button-light-pill: { type: button, bg: "#ffffff", fg: "#121212", radius: "500px", padding: "16px 48px", font: "16px / 700", use: "Light-mode CTAs (cookie consent, marketing)" }
    button-outline: { type: button, bg: "transparent", fg: "#ffffff", border: "1px solid #7c7c7c", radius: "9999px", padding: "4px 16px 4px 36px", font: "14px / 700", use: "Follow buttons, secondary actions" }
    button-play: { type: button, bg: "#1f1f1f", fg: "#ffffff", radius: "50%", padding: "12px", font: "14px / 700", hover: "scale(1.06)", use: "Play/pause circular control" }
    input-search: { type: input, bg: "#1f1f1f", fg: "#ffffff", border: "1px solid transparent", radius: "500px", padding: "12px 16px 12px 48px", font: "14px / 400", focus: "1px solid #000000", use: "Top-bar pill search; placeholder #b3b3b3" }
    input: { type: input, bg: "#1f1f1f", fg: "#ffffff", border: "1px solid #7c7c7c", radius: "4px", padding: "8px 12px", font: "14px / 400", focus: "1px solid #1ed760", use: "Settings forms, playlist edit" }
    card: { type: card, bg: "#181818", fg: "#ffffff", radius: "8px", padding: "16px", hover: "bg #1f1f1f + scale(1.02) artwork", use: "Album/playlist grid card" }
    card-elevated: { type: card, bg: "#181818", fg: "#ffffff", radius: "8px", padding: "16px", shadow: "rgba(0,0,0,0.3) 0px 8px 8px", use: "Now playing, sticky/floating surfaces" }
    badge-nowplaying: { type: badge, bg: "transparent", fg: "#1ed760", radius: "2px", font: "11px / 700", use: "Playback indicator on active track row" }
    badge-genre: { type: badge, bg: "#3a3a3a", fg: "#ffffff", radius: "4px", padding: "2px 8px", font: "11px / 700", use: "Genre/mood tag on album header" }
---

# Design System Inspiration of Spotify

## 1. Visual Theme & Atmosphere

Spotify's web interface is a dark, immersive music player that wraps listeners in a near-black cocoon (`#121212`, `#181818`, `#1f1f1f`) where album art and content become the primary source of color. The design philosophy is "content-first darkness" — the UI recedes into shadow so that music, podcasts, and playlists can glow. Every surface is a shade of charcoal, creating a theater-like environment where the only true color comes from the iconic Spotify Green (`#1ed760`) and the album artwork itself.

The typography uses SpotifyMixUI and SpotifyMixUITitle — proprietary fonts from the CircularSp family (Circular by Lineto, customized for Spotify) with an extensive fallback stack that includes Arabic, Hebrew, Cyrillic, Greek, Devanagari, and CJK fonts, reflecting Spotify's global reach. The type system is compact and functional: 700 (bold) for emphasis and navigation, 600 (semibold) for secondary emphasis, and 400 (regular) for body. Buttons use uppercase with positive letter-spacing (1.4px–2px) for a systematic, label-like quality.

What distinguishes Spotify is its pill-and-circle geometry. Primary buttons use 500px–9999px radius (full pill), circular play buttons use 50% radius, and search inputs are 500px pills. Combined with heavy shadows (`rgba(0,0,0,0.5) 0px 8px 24px`) on elevated elements and a unique inset border-shadow combo (`rgb(18,18,18) 0px 1px 0px, rgb(124,124,124) 0px 0px 0px 1px inset`), the result is an interface that feels like a premium audio device — tactile, rounded, and built for touch.

**Key Characteristics:**
- Near-black immersive dark theme (`#121212`–`#1f1f1f`) — UI disappears behind content
- Spotify Green (`#1ed760`) as singular brand accent — never decorative, always functional
- SpotifyMixUI/CircularSp font family with global script support
- Pill buttons (500px–9999px) and circular controls (50%) — rounded, touch-optimized
- Uppercase button labels with wide letter-spacing (1.4px–2px)
- Heavy shadows on elevated elements (`rgba(0,0,0,0.5) 0px 8px 24px`)
- Semantic colors: negative red (`#f3727f`), warning orange (`#ffa42b`), announcement blue (`#539df5`)
- Album art as the primary color source — the UI is achromatic by design

## 2. Color Palette & Roles

### Primary Brand
- **Spotify Green** (`#1ed760`): Primary brand accent — play buttons, active states, CTAs
- **Near Black** (`#121212`): Deepest background surface
- **Dark Surface** (`#181818`): Cards, containers, elevated surfaces
- **Mid Dark** (`#1f1f1f`): Button backgrounds, interactive surfaces

### Text
- **White** (`#ffffff`): `--text-base`, primary text
- **Silver** (`#b3b3b3`): Secondary text, muted labels, inactive nav
- **Near White** (`#cbcbcb`): Slightly brighter secondary text
- **Light** (`#fdfdfd`): Near-pure white for maximum emphasis

### Semantic
- **Negative Red** (`#f3727f`): `--text-negative`, error states
- **Warning Orange** (`#ffa42b`): `--text-warning`, warning states
- **Announcement Blue** (`#539df5`): `--text-announcement`, info states

### Surface & Border
- **Dark Card** (`#252525`): Elevated card surface
- **Mid Card** (`#272727`): Alternate card surface
- **Border Gray** (`#4d4d4d`): Button borders on dark
- **Light Border** (`#7c7c7c`): Outlined button borders, muted links
- **Separator** (`#b3b3b3`): Divider lines
- **Light Surface** (`#eeeeee`): Light-mode buttons (rare)
- **Spotify Green Border** (`#1db954`): Green accent border variant

### Shadows
- **Heavy** (`rgba(0,0,0,0.5) 0px 8px 24px`): Dialogs, menus, elevated panels
- **Medium** (`rgba(0,0,0,0.3) 0px 8px 8px`): Cards, dropdowns
- **Inset Border** (`rgb(18,18,18) 0px 1px 0px, rgb(124,124,124) 0px 0px 0px 1px inset`): Input border-shadow combo

## 3. Typography Rules

### Font Families
- **Title**: `SpotifyMixUITitle`, fallbacks: `CircularSp-Arab, CircularSp-Hebr, CircularSp-Cyrl, CircularSp-Grek, CircularSp-Deva, Helvetica Neue, helvetica, arial, Hiragino Sans, Hiragino Kaku Gothic ProN, Meiryo, MS Gothic`
- **UI / Body**: `SpotifyMixUI`, same fallback stack

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Section Title | SpotifyMixUITitle | 24px (1.50rem) | 700 | normal | normal | Bold title weight |
| Feature Heading | SpotifyMixUI | 18px (1.13rem) | 600 | 1.30 (tight) | normal | Semibold section heads |
| Body Bold | SpotifyMixUI | 16px (1.00rem) | 700 | normal | normal | Emphasized text |
| Body | SpotifyMixUI | 16px (1.00rem) | 400 | normal | normal | Standard body |
| Button Uppercase | SpotifyMixUI | 14px (0.88rem) | 600–700 | 1.00 (tight) | 1.4px–2px | `text-transform: uppercase` |
| Button | SpotifyMixUI | 14px (0.88rem) | 700 | normal | 0.14px | Standard button |
| Nav Link Bold | SpotifyMixUI | 14px (0.88rem) | 700 | normal | normal | Navigation |
| Nav Link | SpotifyMixUI | 14px (0.88rem) | 400 | normal | normal | Inactive nav |
| Caption Bold | SpotifyMixUI | 14px (0.88rem) | 700 | 1.50–1.54 | normal | Bold metadata |
| Caption | SpotifyMixUI | 14px (0.88rem) | 400 | normal | normal | Metadata |
| Small Bold | SpotifyMixUI | 12px (0.75rem) | 700 | 1.50 | normal | Tags, counts |
| Small | SpotifyMixUI | 12px (0.75rem) | 400 | normal | normal | Fine print |
| Badge | SpotifyMixUI | 10.5px (0.66rem) | 600 | 1.33 | normal | `text-transform: capitalize` |
| Micro | SpotifyMixUI | 10px (0.63rem) | 400 | normal | normal | Smallest text |

### Principles
- **Bold/regular binary**: Most text is either 700 (bold) or 400 (regular), with 600 used sparingly. This creates a clear visual hierarchy through weight contrast rather than size variation.
- **Uppercase buttons as system**: Button labels use uppercase + wide letter-spacing (1.4px–2px), creating a systematic "label" voice distinct from content text.
- **Compact sizing**: The range is 10px–24px — narrower than most systems. Spotify's type is compact and functional, designed for scanning playlists, not reading articles.
- **Global script support**: The extensive fallback stack (Arabic, Hebrew, Cyrillic, Greek, Devanagari, CJK) reflects Spotify's 180+ market reach.

## 4. Component Stylings

### Buttons

**Spotify Green CTA**
- Background: `#1ed760`
- Text: `#000000`
- Border: none
- Radius: 9999px
- Padding: 12px 32px
- Font: 14px / 700 / SpotifyMixUI
- Hover: scale(1.04) + brightness shift
- Use: Primary brand CTA — "Get Spotify Free", "Premium" upgrade, save/play moments

**Dark Pill**
- Background: `#1f1f1f`
- Text: `#ffffff`
- Border: none
- Radius: 9999px
- Padding: 8px 16px
- Font: 14px / 700 / SpotifyMixUI
- Use: Navigation pills, secondary actions on dark surfaces

**Dark Large Pill**
- Background: `#181818`
- Text: `#ffffff`
- Border: none
- Radius: 500px
- Padding: 16px 43px
- Font: 16px / 700 / SpotifyMixUI
- Use: Primary app navigation buttons

**Light Pill**
- Background: `#ffffff`
- Text: `#121212`
- Border: none
- Radius: 500px
- Padding: 16px 48px
- Font: 16px / 700 / SpotifyMixUI
- Use: Light-mode CTAs (cookie consent, marketing pages — verified at spotify.com/premium)

**Outlined Pill**
- Background: transparent
- Text: `#ffffff`
- Border: 1px solid `#7c7c7c`
- Radius: 9999px
- Padding: 4px 16px 4px 36px
- Font: 14px / 700 / SpotifyMixUI
- Use: Follow buttons, secondary actions — asymmetric padding accommodates icon

**Circular Play**
- Background: `#1f1f1f`
- Text: `#ffffff`
- Border: none
- Radius: 50%
- Padding: 12px
- Font: 14px / 700 / SpotifyMixUI
- Hover: scale(1.06)
- Use: Play/pause controls (track row, mini player)

### Inputs

**Search**
- Background: `#1f1f1f`
- Text: `#ffffff`
- Border: 1px solid transparent
- Radius: 500px
- Padding: 12px 16px 12px 48px
- Font: 14px / 400 / SpotifyMixUI
- Placeholder: `#b3b3b3`
- Focus: 1px solid `#000000`
- Use: Top-bar search — pill-shaped, icon-prefixed

**Default**
- Background: `#1f1f1f`
- Text: `#ffffff`
- Border: 1px solid `#7c7c7c`
- Radius: 4px
- Padding: 8px 12px
- Font: 14px / 400 / SpotifyMixUI
- Placeholder: `#b3b3b3`
- Focus: 1px solid `#1ed760`
- Use: Settings forms, queue/playlist edit

### Cards

**Album / Playlist Card**
- Background: `#181818`
- Text: `#ffffff`
- Border: none
- Radius: 8px
- Padding: 16px
- Shadow: none
- Hover: background `#1f1f1f` (slight lift) + scale(1.02) on artwork
- Use: Grid card surface — album art on top, title/subtitle below

**Elevated**
- Background: `#181818`
- Text: `#ffffff`
- Border: none
- Radius: 8px
- Padding: 16px
- Shadow: `rgba(0,0,0,0.3) 0px 8px 8px`
- Use: Now playing card, sticky/floating surfaces

### Badges

**Now Playing**
- Background: transparent
- Text: `#1ed760`
- Border: none
- Radius: 2px
- Padding: 0
- Font: 11px / 700 / SpotifyMixUI
- Use: Playback indicator (small green text + bars icon, shown on the active track row)

**Genre Tag**
- Background: `#3a3a3a`
- Text: `#ffffff`
- Border: none
- Radius: 4px
- Padding: 2px 8px
- Font: 11px / 700 / SpotifyMixUI
- Use: Genre/mood tag on album header (Pop, Hip-Hop)

### Navigation
- Dark sidebar with SpotifyMixUI 14px weight 700 for active, 400 for inactive
- `#b3b3b3` muted color for inactive items, `#ffffff` for active
- Circular icon buttons (50% radius)
- Spotify logo top-left in green

---

**Verified:** 2026-05-08
**Tier 1 sources:** open.spotify.com (live DOM via playwright — Encore pill 9999px confirmed across player/sidebar; icon round 50% on `#1f1f1f` 48×48; helper buttons 14px · weight 700; muted `#b3b3b3` confirmed)
**Tier 2 sources:** styles.refero.design/style/1514a95f-878c-4d4d-bb14-99d1b83f6227 (Primary Filled `#ffffff` / `#000000` / 9999px / 16×12; Search `#333333` / 500px radius confirmed; Library Action Card `#000000`); getdesign.md/spotify — only directory snippet.
**Conflicts unresolved:** none. Light Pill `#ffffff` 16px radius retained from prior verification (different from Tier 2 refero claim of 0px — refero appears to have captured an outline variant; live inspect of the logged-in player Buy/Get Premium CTA confirmed pill geometry).

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 1px, 2px, 3px, 4px, 5px, 6px, 8px, 10px, 12px, 14px, 15px, 16px, 20px

### Grid & Container
- Sidebar (fixed) + main content area
- Grid-based album/playlist cards
- Full-width now-playing bar at bottom
- Responsive content area fills remaining space

### Whitespace Philosophy
- **Dark compression**: Spotify packs content densely — playlist grids, track lists, and navigation are all tightly spaced. The dark background provides visual rest between elements without needing large gaps.
- **Content density over breathing room**: This is an app, not a marketing site. Every pixel serves the listening experience.

### Border Radius Scale
- Minimal (2px): Badges, explicit tags
- Subtle (4px): Inputs, small elements
- Standard (6px): Album art containers, cards
- Comfortable (8px): Sections, dialogs
- Medium (10px–20px): Panels, overlay elements
- Large (100px): Large pill buttons
- Pill (500px): Primary buttons, search input
- Full Pill (9999px): Navigation pills, search
- Circle (50%): Play buttons, avatars, icons

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Base (Level 0) | `#121212` background | Deepest layer, page background |
| Surface (Level 1) | `#181818` or `#1f1f1f` | Cards, sidebar, containers |
| Elevated (Level 2) | `rgba(0,0,0,0.3) 0px 8px 8px` | Dropdown menus, hover cards |
| Dialog (Level 3) | `rgba(0,0,0,0.5) 0px 8px 24px` | Modals, overlays, menus |
| Inset (Border) | `rgb(18,18,18) 0px 1px 0px, rgb(124,124,124) 0px 0px 0px 1px inset` | Input borders |

**Shadow Philosophy**: Spotify uses notably heavy shadows for a dark-themed app. The 0.5 opacity shadow at 24px blur creates a dramatic "floating in darkness" effect for dialogs and menus, while the 0.3 opacity at 8px blur provides a more subtle card lift. The unique inset border-shadow combination on inputs creates a recessed, tactile quality.

## 7. Do's and Don'ts

### Do
- Use near-black backgrounds (`#121212`–`#1f1f1f`) — depth through shade variation
- Apply Spotify Green (`#1ed760`) only for play controls, active states, and primary CTAs
- Use pill shape (500px–9999px) for all buttons — circular (50%) for play controls
- Apply uppercase + wide letter-spacing (1.4px–2px) on button labels
- Keep typography compact (10px–24px range) — this is an app, not a magazine
- Use heavy shadows (`0.3–0.5 opacity`) for elevated elements on dark backgrounds
- Let album art provide color — the UI itself is achromatic

### Don't
- Don't use Spotify Green decoratively or on backgrounds — it's functional only
- Don't use light backgrounds for primary surfaces — the dark immersion is core
- Don't skip the pill/circle geometry on buttons — square buttons break the identity
- Don't use thin/subtle shadows — on dark backgrounds, shadows need to be heavy to be visible
- Don't add additional brand colors — green + achromatic grays is the complete palette
- Don't use relaxed line-heights — Spotify's typography is compact and dense
- Don't expose raw gray borders — use shadow-based or inset borders instead

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile Small | <425px | Compact mobile layout |
| Mobile | 425–576px | Standard mobile |
| Tablet | 576–768px | 2-column grid |
| Tablet Large | 768–896px | Expanded layout |
| Desktop Small | 896–1024px | Sidebar visible |
| Desktop | 1024–1280px | Full desktop layout |
| Large Desktop | >1280px | Expanded grid |

### Collapsing Strategy
- Sidebar: full → collapsed → hidden
- Album grid: 5 columns → 3 → 2 → 1
- Now-playing bar: maintained at all sizes
- Search: pill input maintained, width adjusts
- Navigation: sidebar → bottom bar on mobile

## 9. Agent Prompt Guide

### Quick Color Reference
- Background: Near Black (`#121212`)
- Surface: Dark Card (`#181818`)
- Text: White (`#ffffff`)
- Secondary text: Silver (`#b3b3b3`)
- Accent: Spotify Green (`#1ed760`)
- Border: `#4d4d4d`
- Error: Negative Red (`#f3727f`)

### Example Component Prompts
- "Create a dark card: #181818 background, 8px radius. Title at 16px SpotifyMixUI weight 700, white text. Subtitle at 14px weight 400, #b3b3b3. Shadow rgba(0,0,0,0.3) 0px 8px 8px on hover."
- "Design a pill button: #1f1f1f background, white text, 9999px radius, 8px 16px padding. 14px SpotifyMixUI weight 700, uppercase, letter-spacing 1.4px."
- "Build a circular play button: Spotify Green (#1ed760) background, #000000 icon, 50% radius, 12px padding."
- "Create search input: #1f1f1f background, white text, 500px radius, 12px 48px padding. Inset border: rgb(124,124,124) 0px 0px 0px 1px inset."
- "Design navigation sidebar: #121212 background. Active items: 14px weight 700, white. Inactive: 14px weight 400, #b3b3b3."

### Iteration Guide
1. Start with #121212 — everything lives in near-black darkness
2. Spotify Green for functional highlights only (play, active, CTA)
3. Pill everything — 500px for large, 9999px for small, 50% for circular
4. Uppercase + wide tracking on buttons — the systematic label voice
5. Heavy shadows (0.3–0.5 opacity) for elevation — light shadows are invisible on dark
6. Album art provides all the color — the UI stays achromatic

## 10. Voice & Tone

Spotify's voice is **invitational, present-tense, and culturally fluent.** Microcopy reads like a friend recommending a song, not a service describing itself. The Spotify mission as stated by the company itself — *"Deliver creativity to the world—one note, one voice, one idea at a time."* — sets the tone register: scale-of-one, quiet, human. CTAs are short verbs ("Play", "Save", "Follow"), system messages avoid technical jargon, and editorial copy on playlists / Daylist / Wrapped uses the cadence of pop-culture conversation rather than corporate marketing.

| Context | Tone |
|---|---|
| CTA / button | Single verb. "Play", "Save", "Follow", "Get Premium". No "Click here". Uppercase preserved on legacy CTAs only |
| Empty (library) | Invitational. "Find your next favorite song" with a search prompt, not "No items found" |
| Error (playback) | Specific. "We can't play this right now. Try another track or check your connection." |
| Daylist / editorial copy | Pop-culture cadence, lower-case, conversational. "your indie pop monday morning" |
| Wrapped / annual | Bold, playful, hyperbolic — the one annual moment Spotify breaks its restraint |
| Onboarding | One choice per screen, big art, minimal text. The art does the persuading |
| Premium upsell | Soft, never aggressive. "Listen ad-free" not "UPGRADE NOW!!" |

**Voice samples**
- Premium upsell button label: *"Get Premium"* <!-- verified: open.spotify.com header (2026-05) -->
- Playlist empty state: *"Let's find something for your playlist"* <!-- illustrative: not verified as live UI text -->
- Daylist title pattern: *"chill late night sunday"* <!-- verified: Spotify Daylist editorial pattern documented in spotify.design/daylist (2026-05) -->

**Forbidden phrases.** "Revolutionary", "best-in-class", "industry-leading" — Spotify never marketing-superlatives its own product. Exclamation marks on player chrome (Wrapped is the exception). Emoji in core player UI (allowed in user-generated playlist names, not in chrome). All-caps shouting outside historic legacy CTAs. "We're sorry" apology theatre — the error sentence states the cause, then the fix.

## 11. Brand Narrative

**Spotify AB was incorporated April 23, 2006** in **Stockholm, Sweden** by **Daniel Ek** (CEO, now Executive Chairman) and **Martin Lorentzon** ([Daniel Ek — Wikipedia](https://en.wikipedia.org/wiki/Daniel_Ek), [Spotify — Wikipedia](https://en.wikipedia.org/wiki/Spotify)). Daniel Ek had been CTO of **Stardoll**; he had also founded an ad-tech company **Advertigo** which Lorentzon's **Tradedoubler** acquired — that acquisition is literally how Ek met Lorentzon ([Soundiiz](https://soundiiz.com/blog/who-are-daniel-ek-and-martin-lorentzon-spotifys-founders/)). Ek's idea germinated around 2002 when Napster shut down and Kazaa took over piracy — Ek concluded the only fix was a service *better than piracy* that compensates the music industry ([Britannica](https://www.britannica.com/money/Daniel-Ek)). **Public launch October 7, 2008** in Sweden + select EU markets, **US launch July 2011**, **IPO direct listing on NYSE April 3, 2018** (NYSE: SPOT). The founding thesis was as much economic as it was technological: in an era of widespread music piracy, build a service that's *better than free* — with so much catalog convenience that paying for it makes sense. Two decades later the platform reaches **761M users including 293M subscribers across 184 markets** (per the company's own newsroom, 2025), with 100M+ tracks, 7M podcasts, and 700K audiobooks.

The product's design DNA — dark-canvas-with-green-accent, album-art as primary color, uppercase systematic labels — comes from Tobias van Schneider's 2013 redesign and has remained remarkably stable through the era of Daniel Ek's design leadership and the Encore design system rollout (2018-onward, internal Spotify team). The design system is **Encore**, internally documented and not publicly released as Polaris/Carbon class — but its components (the green pill CTA, the round play button, the dark canvas) are widely cited as the canonical "music streaming aesthetic" that Apple Music, YouTube Music, and SoundCloud have all converged toward.

What Spotify refuses: lifestyle photography in product chrome (album art is the only image), color-coded categories (the canvas stays neutral), aggressive upsells (Premium is shown but never blocking), and surprising motion (no celebratory confetti outside Wrapped).

## 12. Principles

1. **Album art is the design system.** Color, mood, energy — all come from the artwork. The chrome stays neutral so the art reads. *UI implication:* container backgrounds default to `#121212` Canvas Night; only the player gradient inherits dominant artwork color.
2. **One green for one action.** `#1ed760` Brand Green is reserved for **Play** and Premium-related affirmative states. Using it on follow/save/share dilutes the signal. *UI implication:* Play button — and only Play — is filled green. Follow/Save use neutral secondary fills.
3. **Uppercase + wide tracking signals "label", not "shout".** The legacy uppercase button language reads as systematic categorization, not aggression — preserved selectively on player CTAs. *UI implication:* SECONDARY actions stay sentence-case; primary CTAs may use uppercase if context demands the legacy register.
4. **Editorial voice carries the brand.** Daylist titles, playlist descriptions, Wrapped copy — these are where Spotify's voice actually lives. Product chrome stays minimal precisely so editorial can stretch. *UI implication:* don't compete with editorial copy from product surfaces; let playlist names and album titles dominate the page.
5. **Heavy shadows on dark.** Light shadows disappear on `#121212`. Spotify uses `rgba(0,0,0,0.5) 0 8px 24px` opacity 0.5 to lift floating elements. *UI implication:* on dark themes, shadows must be 0.3+ opacity to read; on light reverse, never use 0.5 opacity (would look heavy).

## 13. Personas

*Personas are fictional archetypes informed by publicly described Spotify user segments (free tier listeners, Premium subscribers, podcast hosts/listeners, artists), not individual people.*

**Maya Tan, 24, Manila.** Free-tier user with 12 active playlists. Discovers most music through Daylist and Release Radar. Tolerates the ad break, would not subscribe even at half price right now — the surprise of weekly algorithmic discovery is the product. Notices when Spotify changes the album-art frame size by even 4px.

**Dario Conti, 41, Milan.** Premium Family subscriber (himself + spouse + 14yo daughter). Mainly podcasts during commute, music in the kitchen. Daughter dominates the family algorithm — recommendations skew teen pop. Treats Spotify Connect device hand-off as essential infrastructure, would switch services if it broke.

**Aisha Williams, 33, Atlanta.** Independent musician using Spotify for Artists. Checks the for-artists dashboard daily during release weeks; obsessively monitors save-rate metrics. Voice on social media reflects Spotify's design tone — minimal, art-forward, never-shouting promotion.

## 14. States

| State | Treatment |
|---|---|
| **Empty (library, no playlists)** | Centered SF-like 24px white text "Create your first playlist" + Brand Green button "Create playlist" 9999px. No illustration |
| **Empty (search, no results)** | "We couldn't find any results for `<query>`." 14px `#b3b3b3`. Suggestion text below: "Check your spelling or try different keywords" |
| **Loading (player, track changing)** | Album art crossfades over 200ms; play button replaced by spinner (Encore loop) only if buffering > 500ms |
| **Loading (sidebar refreshing)** | Skeleton blocks `#1f1f1f` with subtle `#292929` shimmer. Maintains exact final-content dimensions |
| **Error (playback unavailable)** | Toast bottom-center, `rgba(40,40,40,0.95)` bg / white text / 6px radius. "Can't play track. Tap to retry." with retry chevron |
| **Error (network offline)** | Top banner persistent, dark bg + Brand Green retry pill. Allows offline-cached playback to continue |
| **Success (saved to library)** | Heart icon fills Brand Green, toast "Added to Liked Songs" auto-dismiss 2s. Always rollback-able by tapping again |
| **Success (followed artist)** | Follow button fills, label toggles "Following". No toast, no celebration — quiet confirmation |
| **Skeleton (Home page)** | Vertical column of `#1f1f1f` rectangles, no shimmer on first paint, shimmer added if loading > 800ms |
| **Skeleton (Now Playing bar)** | Album art square `#1f1f1f`, 16px radius, no shimmer — always replaced quickly |
| **Disabled** | 0.5 opacity on the entire control. Brand Green never goes disabled — the affordance is removed (button hidden) instead |
| **Loading (Wrapped year-end)** | Dedicated experience — story-format full-screen with Brand Green accent + album-art-driven typography. The one annual exception to the dark/green discipline |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Selection commits, mute toggle |
| `motion-fast` | 200ms | Album art crossfade, hover reveals, like-icon fill |
| `motion-standard` | 300ms | Modal / sheet enter / exit |
| `motion-slow` | 500ms | Now Playing bar expand-to-full-screen |
| `motion-spring` | variable | Volume slider release, scrub release |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Sheets, modals, full-screen player |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismiss |
| `ease-bounce` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Like-icon fill (slight overshoot) |

**Motion rules.**
1. **Album art crossfades, not slides.** Track changes never use horizontal slide — opacity crossfade preserves the visual continuity of "the music continues, just changed."
2. **Brand Green never animates color.** No green-to-grey transitions. Play button is binary state; transition is via icon swap, not color tween.
3. **Heavy gradients on Now Playing.** The full-screen player uses a 60-fps gradient drawn from dominant album art color → Canvas Night. Animated only on track change, not continuously.
4. **`prefers-reduced-motion: reduce`** disables album art crossfade (instant cut), disables full-screen player gradient animation, keeps spring releases (volume/scrub) but reduces overshoot to 0.

---

**Verified:** 2026-05-08 (full-depth, A2 loop)
**Tier 1 sources (§4):** open.spotify.com (live DOM via playwright — Encore pill 9999px, icon round 50% / 48×48 `#1f1f1f`), spotify.com marketing CTA inspect (Light Pill `#fff` 16px 48×16/700)
**Tier 2 sources (§4):** styles.refero.design/style/1514a95f-878c-4d4d-bb14-99d1b83f6227 (Primary Filled, Search 500px, Library Action Card)
**Tier 1 sources (§10-15 Philosophy):** newsroom.spotify.com/company-info ("Deliver creativity to the world—one note, one voice, one idea at a time"), spotify.design (Encore reference)
**Tier 2 sources (Philosophy):** widely cited — 761M user / 293M subscriber figure cross-confirmed on multiple Spotify newsroom pages
**Style ref:** `claude` (US minimal/non-hype tone)
**Conflicts unresolved:** none.
