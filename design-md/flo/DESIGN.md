---
id: flo
name: "FLO"
country: KR
category: consumer-tech
homepage: "https://www.music-flo.com"
primary_color: "#3f3fff"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=music-flo.com&sz=256"
verified: "2026-06-03"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#3f3fff"
    primary-hover: "#2f2fae"
    primary-pressed: "#1a1a86"
    blue-mid: "#576aff"
    blue-light: "#7286ff"
    indigo: "#525cfd"
    error: "#ff4d78"
    canvas: "#ffffff"
    heading: "#181818"
    body: "#333333"
    meta: "#989898"
    placeholder: "#c4c4c4"
    divider: "#ebebeb"
    surface-grey: "#f5f5f5"
    track-grey: "#323232"
  typography:
    family: { sans: "Pretendard Variable", mono: "Pretendard Variable" }
    display-lg:    { size: 34, weight: 700, lineHeight: 1.20, use: "Hero callouts, large feature text" }
    display-sm:    { size: 24, weight: 700, lineHeight: 1.20, use: "Promotional copy, chart numbers" }
    section-title: { size: 18, weight: 600, lineHeight: 1.20, use: "Major section headings" }
    subhead:       { size: 16, weight: 600, lineHeight: 1.20, use: "Section headers, modal titles" }
    body-primary:  { size: 15, weight: 400, lineHeight: 1.20, use: "Track titles, main UI copy" }
    body:          { size: 14, weight: 400, lineHeight: 1.20, use: "Metadata, list items" }
    label:         { size: 13, weight: 500, lineHeight: 1.20, use: "Secondary labels, nav items" }
    small:         { size: 12, weight: 400, lineHeight: 1.20, use: "Timestamps, tags, chip labels" }
  spacing: { xs: 5, sm: 9, md: 14, base: 15, lg: 25, xl: 50, section: 60 }
  rounded: { sm: 5, md: 8, lg: 16, full: 9999 }
  shadow:
    floating: "rgba(0,0,0,0.10) 0px 4px 20px 0px"
    modal: "rgba(0,0,0,0.20) 0px 6px 15px 0px"
  components:
    button-primary: { type: button, bg: "#3f3fff", fg: "#ffffff", radius: "5px", padding: "0 15px", font: "14px / 400", use: "Standard blue CTA, 36px height" }
    button-pill: { type: button, bg: "#3f3fff", fg: "#ffffff", radius: "15px", padding: "0 12px", font: "12px / 500", use: "Small round action button, 28px height" }
    button-ghost: { type: button, bg: "#ffffff", fg: "#3f3fff", radius: "16px", padding: "9px 15px", font: "12px / 500", use: "Outline chip with 0.5px blue border" }
    input-text: { type: input, bg: "#ffffff", fg: "#181818", radius: "0px", font: "15px / 400", use: "Bottom-border-only text input, 58px height; focus #181818, error #ff4d78, valid #3f3fff" }
    card-voucher: { type: card, bg: "#f4f5f8", radius: "8px", padding: "50px 60px", use: "Voucher / subscription card surface" }
    card-voucher-active: { type: card, bg: "#525cfd", fg: "#ffffff", radius: "8px", use: "Active voucher card" }
    tab-nav: { type: tab, bg: "#ffffff", fg: "#6d6d6d", active: "Active tab #3f3fff text + 2px bottom border #3f3fff", use: "Main navigation tabs; inactive on #f5f5f5" }
  components_harvested: true
---

# FLO

FLO (플로) is South Korea's music streaming platform operated by Dreamus Company, offering 120 million tracks with deep personalization and AI-driven discovery.

## 1. Visual Theme & Atmosphere

FLO's interface reads as clean, luminous, and quietly energetic. A pure electric blue (`#3f3fff`) punches through an overwhelmingly white canvas, anchoring interactive elements — buttons, progress bars, active tab indicators, and checked inputs — with a single, unwavering brand hue. The surrounding palette is almost entirely achromatic: near-black body text on white surfaces, mid-greys for metadata, and a barely-there light grey for resting chips and dividers. This restraint keeps the music and cover art front and center. A muted rose-pink (`#ff4d78`) appears only in error or warning states, creating a deliberate secondary signal language. Overall the product feels like a clean audio studio: cool-toned, confident, and built for extended listening sessions without visual fatigue.

## 2. Color Palette & Roles

- **Brand Blue:** `#3f3fff` — primary CTA buttons, active tab underline, progress fill, checked-state labels
- **Blue Pressed / Hover:** `#2f2fae` — darkened blue on button press
- **Blue Pressed:** `#1a1a86` — pressed/active primary button state
- **Blue Mid (Player):** `#576aff` — mini-player seek bar fill
- **Blue Light:** `#7286ff` — lighter tint used on selected items, soft accents
- **Indigo Variant:** `#525cfd` — voucher card surfaces and secondary action text
- **Error / Alert Pink:** `#ff4d78` — error border, incorrect input highlight
- **White:** `#ffffff` — primary surface, button text on blue
- **Body Text:** `#181818` — headings, input values, primary labels
- **Secondary Text:** `#333333` — standard body copy, links (default)
- **Tertiary / Meta:** `#989898` — timestamps, secondary metadata
- **Placeholder:** `#c4c4c4` — input placeholder text
- **Divider:** `#ebebeb` — input underlines, hairline rules
- **Surface Grey:** `#f5f5f5` — inactive tab/chip backgrounds
- **Track Grey:** `#323232` — player progress track (unfilled)

## 3. Typography Rules

- **Typeface:** Pretendard Variable → Pretendard → -apple-system → BlinkMacSystemFont → Roboto → Segoe UI → Helvetica → sans-serif
- **Body base:** 14px / 400 — most-used size for metadata and list items
- **Primary body:** 15px / 400–500 — track titles, main UI copy
- **Small:** 12px / 400 — timestamps, tags, chip labels
- **Label:** 13px / 500 — secondary labels, navigation items
- **Subhead:** 16px / 600 — section headers, modal titles
- **Section Title:** 18px / 600 — major section headings
- **Display Small:** 22–28px / 700 — promotional copy, chart numbers
- **Display Large:** 30–38px / 700 — hero callouts, large feature text
- **Input text:** 15px / 400 with `#181818`; search bar 28px / 700
- **Line height:** 1.2 default; labels and button text use explicit line-height matching the component height

## 4. Component Stylings

### Primary Button (Blue CTA)

**Standard (btn_bg_blue_s)**
- Background: `#3f3fff`
- Text: `#ffffff`
- Height: 36px
- Padding: 0 15px
- Radius: 5px
- Font: 14px / 400

**Large CTA (btn_bg_error_b base)**
- Background: `#3f3fff`
- Text: `#ffffff`
- Height: 62px
- Padding: 0 92px
- Font: 18px / 400

**Hover / Pressed**
- Background: `#2f2fae`
- Text: `#ffffff`

**Pressed / Active**
- Background: `#1a1a86`
- Text: `#ffffff`

### Pill / Round Button

**Small Pill (btn-round)**
- Background: `#3f3fff`
- Text: `#ffffff`
- Height: 28px
- Padding: 0 12px
- Radius: 15px
- Font: 12px / 500

**Medium Pill (btn-buy)**
- Background: `#3f3fff`
- Text: `#ffffff`
- Height: 32px
- Padding: 0 17px
- Radius: 22px
- Font: 14px / 400

**Ghost Outline Chip (header-multi-track-search-button)**
- Background: `#ffffff`
- Text: `#3f3fff`
- Border: 0.5px solid `#3f3fff`
- Radius: 16px
- Padding: 9px 15px
- Font: 12px / 500

### Text Input

**Default (comp_inp_txt)**
- Background: `#ffffff`
- Text: `#181818`
- Border: 1px solid `#ebebeb` (bottom only)
- Height: 58px
- Font: 15px / 400

**Password (comp_inp_pw)**
- Background: `#ffffff`
- Text: `#181818`
- Border: 1px solid `#ebebeb` (bottom only)
- Height: 58px
- Font: 15px / 400

**Focus**
- Border: 1px solid `#181818`

**Error**
- Border: 1px solid `#ff4d78`

**Valid / OK**
- Border: 1px solid `#3f3fff`

**Placeholder**
- Text: `#c4c4c4`

### Card / Content Surface

**Album Thumbnail**
- Radius: 6px
- Height: 175px

**Voucher / Subscription Card**
- Background: `#f4f5f8`
- Radius: 8px
- Padding: 50px 60px

**Active Voucher Card**
- Background: `#525cfd`
- Text: `#ffffff`
- Radius: 8px

### Navigation Tab

**Active Tab (main)**
- Text: `#3f3fff`
- Background: `#ffffff`
- Underline: 2px solid `#3f3fff`

**Inactive Tab**
- Text: `#6d6d6d`
- Background: `#f5f5f5`

**Hover Tab**
- Text: `#3f3fff`

---
**Verified:** 2026-06-03
**Tier 1 sources:** https://www.music-flo.com (homepage HTML, 2026-06-03); https://cdn.music-flo.com/poc/p/fe/2026_05/291607/main.css (production CSS bundle, 467 KB, 2026-06-03); https://apps.apple.com/kr/app/flo-%ED%94%8C%EB%A1%9C/id1129048043 (App Store KR listing, 2026-06-03)
**Tier 2 sources:** getdesign.md/flo — NOT LISTED (returned "No designs found"). refero ?q=FLO — no result (KR brand, no refero entry expected).
**Conflicts unresolved:** none

## 5. Layout Principles

- Desktop breakpoint: 1070px minimum container width; content area up to 960px centered
- Header height fixed at 96px with 80px horizontal padding
- Vertical rhythm anchors at 15px (body) and 25–50px (section gutters)
- Album grid uses 175×175px thumbnail cells with 14px top padding and 15px bottom margin
- Player bar fixed to bottom; full-screen player overlays entire viewport
- Mobile: container padding collapses to 30px horizontal at ≤955px; header padding reduces proportionally

## 6. Depth & Elevation

- **Level 0 (flat surface):** No shadow — list items, inactive tabs, default cards
- **Level 1 (floating card):** `box-shadow: 0 4px 20px 0 rgba(0,0,0,0.10)` — album cover hover, dropdown menus, settings panels
- **Level 2 (modal / sheet):** `box-shadow: 0 6px 15px 0 rgba(0,0,0,0.20)` — popup overlays, player download modal
- **Overlay scrim:** `rgba(0,0,0,0.50)` — modal backdrop
- **Dark scrim (player art):** `rgba(0,0,0,0.80)` — full-screen player overlay behind controls

## 7. Do's and Don'ts

### Do
- Use `#3f3fff` exclusively for the single primary action on any given screen
- Apply Pretendard at 14–15px for all body copy to maintain readability across light and dark surfaces
- Keep album artwork as the dominant visual; let cover art supply color temperature to each screen
- Use pill shapes (radius 15–22px) for purchase and streaming action buttons; use square-cornered (radius 5px) for utility actions
- Reserve `#ff4d78` strictly for error, warning, and incorrect-input states
- Maintain bottom-border-only treatment on text inputs to preserve a clean, understated form aesthetic

### Don't
- Don't apply blue to more than one CTA per screen — dilutes the click-priority hierarchy
- Don't mix the indigo variant (`#525cfd`) and the primary blue (`#3f3fff`) on adjacent interactive elements
- Don't use drop shadows on flat list rows — elevation is reserved for floating layers only
- Don't reduce body text below 12px — smallest label size in production is 12px
- Don't apply border-radius above 22px to rectangular content cards — pill radius is reserved for action chips and buttons

## 8. Responsive Behavior

- Desktop (≥1070px): full sidebar nav, 960px content column, 80px horizontal padding, 96px header
- Tablet (956–1069px): sidebar collapses; content padding reduces to 30px
- Mobile (≤955px): container padding 30px; album thumbnail grid reflows to single column; header condenses; player bar remains pinned to bottom
- Font sizes do not scale with viewport — fixed px values used throughout; line heights compensate via explicit pixel or rem values (0.9375rem = 15px used in some components)

## 9. Agent Prompt Guide

When building UI components that match FLO's design language:
- Set the primary action button to `background:#3f3fff`, `color:#fff`, `border-radius:5px` for rectangular or `border-radius:20px` for pill shapes, height 36px (small) or 62px (large CTA)
- Use `font-family: 'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, Roboto, 'Segoe UI', Helvetica, sans-serif` as the single font stack
- Body text: `color:#333; font-size:14px; font-weight:400`
- Heading text: `color:#181818; font-size:16–18px; font-weight:600`
- Inputs: `border:0; border-bottom:1px solid #ebebeb; height:58px; font-size:15px; color:#181818`; on focus, `border-bottom-color:#181818`; on error, `border-bottom-color:#ff4d78`; on valid, `border-bottom-color:#3f3fff`
- Card surfaces: `background:#f4f5f8; border-radius:8px` (neutral) or `background:#3f3fff; border-radius:8px` (highlighted/active)
- Box shadows for floating elements: `0 4px 20px 0 rgba(0,0,0,0.10)`
- Error / warning accent: `#ff4d78` — use only for error states, never as a decorative color

## 10. Voice & Tone

**Adjectives:** Friendly, direct, unforced.

| Dimension | Do | Don't |
|---|---|---|
| Register | Conversational Korean; speak to listeners like a fellow music fan | Corporate, stiff, or overly formal speech |
| Sentence length | Short punchy phrases (4–8 syllables) | Long compound clauses that bury the point |
| Emotional temperature | Warm enthusiasm about discovery, calm confidence about features | Hype superlatives ("best ever", "revolutionary") |
| Personalization | Speak about the listener's taste as genuinely theirs | Generic "music lovers" phrasing |

**Voice samples (illustrative):**
- "가볍게, 나답게 FLO." — the brand tagline; conveys effortlessness and personal identity in six syllables.
- "내가 원하는 음악이 물 흐르듯 끊임없이 흘러나온다." — (Illustrative) The music you want flows ceaselessly, like water — sensory and unhurried.
- "1억 곡 중에서 딱 나의 취향만." — (Illustrative) From 100 million songs, exactly my taste — confident without bragging.
- "오늘 기분에 맞는 음악, FLO가 먼저 알아요." — (Illustrative) FLO knows the music for your mood before you do — AI personalization stated as a quiet fact, not a feature claim.

## 11. Brand Narrative

FLO launched in December 2018 as SK Telecom's answer to a market dominated by chart-first streaming services. Rather than leading with popularity rankings, FLO put personal taste on the home screen from day one — a deliberate counterpoint to the chart-centric paradigm that had defined Korean music streaming. The name itself is a promise: music flows, the way water does, continuously and without effort.

In 2021 the service was spun into Dreamus Company as an independent entity, inheriting SK Telecom's scale and infrastructure while gaining the flexibility to pursue a broader creative vision. The platform expanded from simple streaming into a fan ecosystem — RE;CORD (an automatic musical memoir organized by date and genre), FLO Studio (artist collaboration space), and in 2026, FLO Shop (global music merchandise). Each expansion stays anchored to the same premise: music is personal, and every listener deserves a platform that treats their taste as unique.

Today FLO serves 120 million tracks and positions itself at the intersection of music, fan culture, and algorithmic empathy. Its design language — restrained, blue-anchored, and content-first — expresses the same philosophy in pixels: get out of the way of the music, and let the listener find themselves in it.

## 12. Principles

1. **Taste is personal, not statistical.** FLO's recommendations lead with the individual listener's history, not chart position. *UI implication:* Home feed surfaces personal recommendations above any global trending section; personalized sections appear before editorial ones in the visual hierarchy.*

2. **Flow without friction.** The brand name is a metaphor for effortless continuity — one song leading naturally to the next. *UI implication:* Autoplay and session-continuation are on by default; every disruptive confirmation dialog must earn its place; bottom-sheet modals slide up rather than hard-cut.*

3. **Content leads, chrome follows.** Album artwork and track identity are the primary visual elements on every screen. *UI implication:* Brand blue appears only on interactive affordances; large areas of white and near-white keep the interface from competing with cover art.*

4. **Clarity at every state.** Users should always know what is playing, what will play next, and what action the system expects of them. *UI implication:* The player bar is persistent; active/selected states use high-contrast blue with no ambiguity; error states switch to pink immediately with an explanatory label.*

5. **Small moments of delight, not spectacle.** Animations are quick and purposeful — opacity fades at 0.3s, transforms at 0.25s — reinforcing response rather than demanding attention. *UI implication:* Motion budget is conservative; never block user intent with decorative animation; transitions serve orientation, not entertainment.*

## 13. Personas

*Illustrative Daily Listener — "Minjeong, 28, Seoul"*
A professional who commutes by subway and needs music to shift her mental state within seconds. She rarely browses manually; she trusts FLO's daily mix to surface what she didn't know she needed. She uses the app in dark mode. A missed recommendation feels like a broken promise.

*Illustrative Fan Tracker — "Junho, 22, Busan"*
A K-pop enthusiast who follows specific artists religiously. He uses FLO's artist pages, checks chart positions, and purchases limited merchandise through FLO Shop. He opens the app multiple times a day and reads every notification from followed artists.

*Illustrative Casual Subscriber — "Hyunsook, 45, Incheon"*
An SKT subscriber who joined FLO through a bundled telecom plan. She plays background music while cooking and hasn't changed her playlist in weeks. The app needs to be completely transparent — no setting she didn't ask for, no screen she doesn't recognize.

*Illustrative Discovery Explorer — "Taeyun, 31, Daejeon"*
A crate-digger who uses FLO specifically for its genre-deep catalog, particularly indie and J-POP content. He triggers recommendations by seeding a niche track and is delighted when the algorithm surprises him. He evaluates FLO against its promise of 120 million tracks every time he searches for something obscure.

## 14. States

- **Empty (no music history):** Soft illustration with prompt text; primary blue CTA "지금 음악 찾기" (Find music now); no error language
- **Empty (no search results):** Centered message at 16px/600 with secondary suggestion to try broader terms; zero shadows or borders to avoid visual noise
- **Loading (track list):** Skeleton rows — grey `#ebebeb` bars at content widths, animated shimmer; no spinner overlay
- **Loading (player artwork):** Album art placeholder in `#f5f5f5` with rounded corners matching the 6px radius; audio begins before art resolves
- **Error (network, playback failed):** Pink `#ff4d78` inline label below the affected control; retry button in outline style with `#3f3fff` text; no full-screen block unless unrecoverable
- **Error (input validation):** Bottom border switches to `#ff4d78`; helper text appears in `#ff4d78` at 12px below the field
- **Success (purchase complete):** Confirmation screen with checkmark icon in `#3f3fff`; message at 18px/600; secondary action to "내 구독 보기" (View my subscription)
- **Skeleton (browse feed):** Fixed-dimension grey blocks at album thumbnail proportions (175×175px) with 6px radius; staggered fade-in on resolution
- **Disabled (button):** `opacity: 0.2` on the base `#3f3fff` (no color change); pointer-events removed
- **Disabled (input):** `color: rgba(59,59,59,0.3); background-color: hsla(0,0%,94%,0.3)`; border-bottom remains at `#ebebeb`

## 15. Motion & Easing

**Duration scale:**
- **Instant (0ms):** State changes with no visual transition (checked state icon swap)
- **Fast (150ms):** Micro-interactions: tooltip appear, focus ring appear
- **Standard (200–250ms):** Most UI transitions: `transform 0.25s ease-in`, fade overlays
- **Deliberate (300ms):** Opacity fade on full player overlay: `opacity 0.3s`
- **Entrance (300ms + 150ms delay):** Slide-in panel: `transform 0.15s ease-in` with `0.3s` delay for stagger

**Named easing:**
- `ease-in` — exits and element entrances (elements accelerate into resting position)
- `linear` — scrollbar opacity: `opacity 0.2s linear` — neutral, non-physical

**Motion rules:**
- Player seek bar fill uses continuous transition so that progress feels live, not stepped
- Volume slider uses the same `#3f3fff` fill with identical easing as the playback progress bar — consistent system language
- Modal bottom-sheets translate on Y axis; they do not scale or fade — orientation is preserved through directional motion
- Never autoplay video or looping animation in the browse feed — audio is the product; visual motion competes with listening attention
