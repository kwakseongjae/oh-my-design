---
id: wavve
name: Wavve
country: KR
category: consumer-tech
homepage: "https://www.wavve.com"
primary_color: "#1351F9"
logo:
  type: favicon
  slug: "https://www.wavve.com/favicon.ico"
verified: "2026-05-27"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#1351f9"
    primary-bright: "#3a6cff"
    primary-deep: "#0e3fcc"
    canvas: "#0a0e1a"
    surface-raised-1: "#141a2b"
    surface-raised-2: "#1f2742"
    text-primary: "#ffffff"
    text-secondary: "#a7aec0"
    text-tertiary: "#6b7286"
    live: "#f5444c"
    success: "#2bc56f"
    error: "#ff7a45"
  typography:
    family: { sans: "Pretendard", mono: "Pretendard" }
    billboard: { size: 32, weight: 700, lineHeight: 1.25, use: "Hero/billboard title" }
    section:   { size: 20, weight: 700, lineHeight: 1.35, use: "Row headers" }
    card:      { size: 16, weight: 600, lineHeight: 1.4, use: "Poster captions, list titles" }
    body:      { size: 14, weight: 400, lineHeight: 1.5, use: "Synopsis, descriptions" }
    label:     { size: 15, weight: 600, lineHeight: 1.4, use: "Play/subscribe, tabs" }
    caption:   { size: 12, weight: 400, lineHeight: 1.4, use: "Metadata, runtime" }
    live:      { size: 12, weight: 700, lineHeight: 1.4, use: "LIVE / 실시간 indicators" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32 }
  rounded: { sm: 4, md: 6, lg: 12, full: 9999 }
  shadow:
    snackbar: "0px 4px 16px rgba(0,0,0,0.4)"
  components:
    button-primary: { type: button, bg: "#1351f9", fg: "#ffffff", radius: 6, padding: "10px 20px", font: "15px/600 Pretendard", use: "Play/subscribe, hover #3a6cff, pressed #0e3fcc" }
    button-ghost: { type: button, fg: "#ffffff", radius: 6, padding: "10px 20px", font: "15px/600 Pretendard", use: "Secondary on dark, 1px rgba border" }
    icon-button: { type: button, fg: "#ffffff", radius: 9999, use: "Carousel/player controls ~40px" }
    input-text: { type: input, fg: "#ffffff", radius: 6, padding: "12px 14px", font: "15px/400 Pretendard", use: "Login/search, focus border #1351f9, error #ff7a45" }
    poster-card: { type: card, radius: 6, use: "Poster image card, no border, hover scale 1.05" }
    surface-card: { type: card, bg: "#141a2b", radius: 10, padding: "20px", use: "Settings/account panel" }
    chip: { type: badge, fg: "#ffffff", radius: 9999, padding: "4px 12px", font: "12px/500 Pretendard", use: "Genre/tag, active #1351f9 bg" }
    live-badge: { type: badge, bg: "#f5444c", fg: "#ffffff", radius: 4, padding: "1px 6px", font: "11px/700 Pretendard", use: "실시간 TV indicator" }
    snackbar: { type: toast, bg: "#1f2742", fg: "#ffffff", radius: 8, padding: "12px 16px", font: "14px/500 Pretendard", use: "Transient feedback, 3s" }
    modal: { type: dialog, bg: "#141a2b", fg: "#ffffff", radius: 12, padding: "24px", use: "Login, plan selection" }
    nav-item: { type: tab, fg: "#a7aec0", font: "15px/500 Pretendard", use: "Top nav switcher", active: "#ffffff with 2px #1351f9 underline" }
  components_harvested: true
---

# Design System Inspiration of Wavve (웨이브)

## 1. Visual Theme & Atmosphere

Wavve is Korea's homegrown OTT — the merger of SK Telecom's oksusu and the terrestrial broadcasters' POOQ into one streaming home for Korean drama, variety, news, and live TV. Its interface is the classic streaming dark room, but with a distinctly Wavve signature: instead of the near-pure black of most OTTs, Wavve sits on a **deep midnight blue** canvas, and its interactive accent is a vivid, electric brand **blue `#1351F9`**. The whole identity is built from blue — "from daytime to midnight," as the brand's own rebrand language put it: the deep blue background minimizes eye fatigue during long viewing, while the bright brand blue is reserved as a point color to draw attention and carry legibility. The atmosphere is "a wave you ride into the evening" — calm, immersive, and unmistakably blue, where rows of poster art glow against a dark blue tide.

What defines Wavve visually is **blue all the way down with poster art as the light source**. The browse experience is the familiar OTT grid — billboard hero up top, horizontal rows of 16:9 and 2:3 thumbnails below — but the surrounding chrome is suppressed to thin white-and-gray text on the dark blue field, so the catalog itself supplies the energy. The brand blue `#1351F9` does the interactive work: the primary play/subscribe CTA, the active tab, selection, the progress bar. A set of genre-tuned secondary colors and 3D content icons (from the rebrand system) add variety without breaking the blue spine. This is content-firehose OTT, but with a calmer, bluer temperament than the louder red incumbents.

Typography is the modern Korean product stack — **Pretendard**-led with Apple SD Gothic Neo / Malgun Gothic fallbacks (brand surfaces may use a custom face) — rendered white-and-gray on the dark blue canvas. Numbers matter for runtime, episode counts, and ratings, but the type's main job is to recede so the posters and the blue accent carry the screen.

**Key Characteristics:**
- Brand blue `#1351F9` as the interactive accent — play/subscribe CTA, active tab, progress, selection
- Deep midnight-blue canvas (not pure black) — "daytime to midnight" blue identity, low eye fatigue
- Poster/billboard art as the light source; chrome recedes to white-gray text
- Pretendard-led Korean type stack, white-on-dark-blue
- Genre-tuned secondary colors + 3D content icons (from the brand rebrand) for variety on the blue spine
- Calmer, bluer temperament than the louder red OTT incumbents
- Standard OTT layout: billboard hero + horizontal poster carousels

## 2. Color Palette & Roles

Wavve's primary blue `#1351F9` is the brief-provided brand blue, consistent with the documented rebrand ("deep blue background + brand blue point color"). Wavve publishes no public UI token layer; the dark-blue surface scale and grays below follow the documented blue-led dark-theme direction + standard OTT conventions. Treat surface hexes as conventional, the brand blue as the verified anchor.

### Brand / Interactive
- **Wavve Blue** (`#1351F9`): The signature brand color (RGB 19, 81, 249). Primary play/subscribe CTA, active tab, selection highlight, progress bar, focus ring. The single workhorse accent.
- **Wavve Blue Bright** (`#3A6CFF`): Hover / focused-on-TV variant of the brand blue.
- **Wavve Blue Deep** (`#0E3FCC`): Pressed state.

### Surfaces (Dark Blue Theme)
- **Canvas Midnight** (`#0A0E1A`): Page background — the deep blue-black base behind every row (a blue-tinted near-black, not pure `#000000`).
- **Surface Raised 1** (`#141A2B`): Cards, panels, settings surfaces. One step above the canvas.
- **Surface Raised 2** (`#1F2742`): Dropdowns, hovered rows, modal sheets, icon-button surfaces.

### Text (on Dark Blue)
- **Text Primary** (`#FFFFFF`): Titles, primary labels, active nav.
- **Text Secondary** (`#A7AEC0`): Metadata, inactive labels, episode/runtime info (blue-tinted gray).
- **Text Tertiary** (`#6B7286`): Disabled labels, fine print, low-emphasis captions.

### Borders & Dividers
- **Divider** (`rgba(255,255,255,0.08)`): Hairline separators on dark blue.
- **Input Border** (`rgba(255,255,255,0.16)`): Default input outline; brightens toward white / brand blue on focus.

### Genre / Secondary Accents
- **Genre tints** (from the rebrand): a set of secondary colors "from daytime to midnight" applied to genre rows and 3D content icons for variety — applied as tints/icon fills, never overriding the blue interactive role.

### Semantic
- **Live / On-air** (`#F5444C`): Live-TV red dot — the one warm exception, reserved for live broadcast indicators.
- **Success** (`#2BC56F`): Download-complete, subscription-confirmed (used sparingly).
- **Warning / Error** (`#FF7A45`): Playback errors, payment failures — kept distinct from the brand blue.

## 3. Typography Rules

### Font Family
- **Primary**: `Pretendard, "Apple SD Gothic Neo", "Malgun Gothic", -apple-system, BlinkMacSystemFont, "Noto Sans KR", sans-serif`
- **Brand surfaces**: a custom branded face may appear in marketing/logo lockups
- **Numerals**: tabular-friendly for runtime, episode counts, ratings

### Hierarchy

| Role | Size | Weight | Line Height | Use |
|------|------|--------|-------------|-----|
| Billboard Title | 32–40px | 700 | 1.25 | Hero/billboard title (image-overlaid) |
| Section Heading | 20–22px | 700 | 1.35 | Row headers (오늘의 인기, 실시간 TV) |
| Card Title | 15–16px | 600 | 1.4 | Poster captions, list titles |
| Body | 14px | 400 | 1.5 | Synopsis, descriptions |
| Label / CTA | 15px | 600 | 1.4 | Play/subscribe button, tabs |
| Caption | 12px | 400 | 1.4 | Metadata (연도 · 장르 · 등급), runtime |
| Live Label | 12px | 700 | 1.4 | LIVE / 실시간 indicators |

### Conventions
- **700 for titles, 600 for CTAs, 400 for body** — restrained three-weight rhythm on a dark canvas.
- **White is primary, blue-gray is hierarchy** — emphasis steps `#FFFFFF` → `#A7AEC0` → `#6B7286`.
- **Numbers as metadata** — runtime, episode counts, and ratings rendered tabular-friendly at caption size.
- **Sentence-case, no all-caps** — Korean and Latin both, except the `LIVE` indicator.

## 4. Component Stylings

Wavve publishes no public component spec; geometry below follows the documented blue-led dark-theme direction + standard OTT conventions. Treat as conventional, brand blue as the verified anchor.

### Buttons

**Primary CTA (Play / Subscribe)**
- Background: `#1351F9`
- Text: `#FFFFFF`
- Border: none
- Radius: 6px
- Padding: 10px 20px
- Font: 15px / 600 / Pretendard
- Hover: background `#3A6CFF`
- Pressed: background `#0E3FCC`
- Disabled: background `rgba(19,81,249,0.4)`, text `rgba(255,255,255,0.6)`
- Use: 재생, 구독하기, 지금 시청 — the primary blue action. ~40px tall.

**Secondary / Ghost (on dark)**
- Background: `rgba(255,255,255,0.10)`
- Text: `#FFFFFF`
- Border: 1px solid `rgba(255,255,255,0.24)`
- Radius: 6px
- Padding: 10px 20px
- Font: 15px / 600 / Pretendard
- Use: 찜하기, 더보기, secondary actions on detail overlays

**Icon Button (on dark)**
- Background: `rgba(255,255,255,0.10)`
- Text: `#FFFFFF`
- Border: none
- Radius: 50%
- Size: ~40px circle
- Use: Carousel chevrons, modal close, player controls

### Inputs

**Text Field (dark)**
- Background: `rgba(255,255,255,0.06)`
- Text: `#FFFFFF`
- Border: 1px solid `rgba(255,255,255,0.16)`
- Radius: 6px
- Padding: 12px 14px
- Font: 15px / 400 / Pretendard
- Placeholder: `#A7AEC0`
- Focus: border `#1351F9`
- Error: border `#FF7A45`
- Use: Login email/password, search field

### Cards

**Poster Card**
- Background: transparent (image fills)
- Border: none
- Radius: 6px
- Aspect: 2:3 poster (or 16:9 for VOD/clip rows)
- Hover: scale ~1.05 + title/metadata overlay fade-in + brand-blue progress bar if partially watched
- Use: The atomic browse unit — the art is the card, chrome stays off it

**Surface Card (settings / account)**
- Background: `#141A2B`
- Border: none
- Radius: 10px
- Padding: 20px
- Use: Account, billing, settings panels on the dark blue canvas

### Badges / Chips

**Genre / Tag Chip**
- Background: `rgba(255,255,255,0.10)`
- Text: `#FFFFFF`
- Border: none
- Radius: 999px
- Padding: 4px 12px
- Font: 12px / 500 / Pretendard
- Active: `#1351F9` bg + white text
- Use: Genre filters, mood tags

**LIVE Badge**
- Background: `#F5444C`
- Text: `#FFFFFF`
- Border: none
- Radius: 4px
- Padding: 1px 6px
- Font: 11px / 700 / Pretendard
- Use: 실시간 TV / live-broadcast indicator — the one warm-red exception

### Tabs / Nav

**Top Nav Item**
- Active text: `#FFFFFF`
- Inactive text: `#A7AEC0`
- Indicator: 2px `#1351F9` underline (active) or weight shift
- Font: 15px / 500 / Pretendard
- Use: 홈 / 드라마 / 예능 / 영화 / 실시간 switcher

### Progress

**Continue-Watching Bar**
- Track: `rgba(255,255,255,0.24)`
- Fill: `#1351F9`
- Height: 3px
- Radius: 999px
- Use: Watched-progress bar at the bottom of poster cards — the blue is the "you're N% in" signal

### Toasts

**Snackbar**
- Background: `#1F2742`
- Text: `#FFFFFF`
- Border: none
- Radius: 8px
- Padding: 12px 16px
- Shadow: `0px 4px 16px rgba(0,0,0,0.4)`
- Font: 14px / 500 / Pretendard
- Use: "찜 목록에 추가했어요" transient feedback, 3s auto-dismiss

### Dialogs

**Modal**
- Background: `#141A2B`
- Text: `#FFFFFF`
- Border: none
- Radius: 12px
- Padding: 24px
- Backdrop: `rgba(0,0,0,0.7)`
- Use: Login, plan selection, "이 작품 정보"

---

**Verified:** 2026-05-27
**Tier 1 sources:** wavve.com (WebFetch 2026-05-27 returned minimal markup — confirmed Wavve OTT dark-theme positioning; no token doc exposed). Documented rebrand direction (BAT / Brds.life case studies): "deep blue background to minimize optic fatigue, brand blue as point color, secondary colors from daytime to midnight, 3D genre icons." Brand blue `#1351F9` is brief-provided, consistent with the documented blue-led system. Operated by Wavve (SK Telecom + terrestrial broadcasters; oksusu + POOQ merger).
**Tier 2 sources:** getdesign.md/wavve — not checked. styles.refero.design — not checked.
**Conflicts unresolved:** No live computed-style token inspection (wavve.com returned minimal markup, likely client-rendered behind auth). All §4 component values + the dark-blue surface scale are flagged conventional; brand blue `#1351F9` is the one verified anchor. A future UPDATE pass with browser inspection (logged-in browse surface) should re-confirm component geometry and the exact midnight-blue canvas hex.

## 5. Layout Principles

### Page Structure
- Full-bleed dark blue canvas; billboard hero up top, then horizontal poster carousels stacked vertically
- Max content width (~1280px) for rows; rows scroll horizontally beyond the fold
- Top nav (~64px) translucent-to-solid on scroll

### Spacing
- Base unit 8px; common values 4 / 8 / 12 / 16 / 24 / 32
- Row gutter ~12px between posters; ~32px vertical between content rows
- Page h-padding ~40px desktop, 16px mobile

### Density
Wavve is **media-dense, chrome-sparse** — posters pack tightly (6–8 per desktop row) while text chrome stays minimal on the blue field. Title-detail and player surfaces open up with more breathing room around synopsis, cast, and controls.

### Border Radius Scale
- Tight (4px): LIVE badge
- Standard (6px): buttons, inputs, poster cards
- Soft (8px): snackbars
- Comfortable (10–12px): surface cards, modals
- Pill (999px): chips, progress bar
- Circle (50%): icon buttons, avatars

## 6. Depth & Elevation

On a dark blue canvas, Wavve communicates depth through **surface lightness, not shadow**.

| Level | Treatment | Use |
|-------|-----------|-----|
| Base | `#0A0E1A` | Page canvas |
| Raised 1 | `#141A2B` | Cards, panels, modals |
| Raised 2 | `#1F2742` | Dropdowns, hovered rows, icon-button surfaces, snackbars |
| Modal | `#141A2B` + `rgba(0,0,0,0.7)` backdrop | Dialogs, plan sheets |

Drop shadows are mostly absent — on a dark blue field they'd barely register. The poster-hover scale (~1.05) plus a bottom title-overlay gradient (`linear-gradient(transparent, rgba(10,14,26,0.9))`) is the only lift the catalog needs. Brand blue glows (focus rings, progress) read as the interactive "light" on the dark blue surface.

## 7. Do's and Don'ts

### Do
- Use `#1351F9` for the one primary interactive element per surface — play, subscribe, active tab, progress
- Keep the canvas deep midnight blue (`#0A0E1A`) and let poster art supply the color
- Step hierarchy through the blue-gray scale (`#FFFFFF` → `#A7AEC0` → `#6B7286`)
- Use the brand-blue progress bar to signal continue-watching state
- Reserve the warm red strictly for the LIVE / 실시간 indicator

### Don't
- Don't use pure black (`#000000`) — the canvas is a deep blue, that's the brand
- Don't introduce a second saturated interactive hue competing with the blue
- Don't put drop shadows or borders on poster cards — the gutter separates them
- Don't let the warm red bleed beyond live indicators into general UI
- Don't crowd the title-detail / player — those surfaces need breathing room

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <768px | ~2.5 posters per row (peeking the next), bottom tab nav |
| Tablet | 768–1024px | ~4 posters per row, condensed top nav |
| Desktop / TV | >1024px | 6–8 per row, full top nav, max ~1280px; TV adds large focus rings in brand blue |

### Touch & Media
- Poster cards are the primary target; min ~44px controls
- Horizontal carousels swipeable on touch, chevron-driven on desktop hover, D-pad focus on TV
- Billboard uses full-bleed autoplay trailer (muted/poster fallback on mobile)

### Image Behavior
- Posters: 2:3, `object-fit: cover`, lazy-loaded
- Billboards / VOD: 16:9 with bottom blue-tinted gradient for title legibility

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA / active / progress: Wavve Blue `#1351F9` (hover `#3A6CFF`, pressed `#0E3FCC`)
- Canvas: Midnight `#0A0E1A`; raised `#141A2B` / `#1F2742`
- Text: primary `#FFFFFF`; secondary `#A7AEC0`; tertiary `#6B7286`
- Input border `rgba(255,255,255,0.16)`, focus `#1351F9`
- LIVE: `#F5444C`; success `#2BC56F`; error `#FF7A45`

### Example Component Prompts
- "Build a Wavve play button: bg `#1351F9`, white 15px/600 text, 6px radius, 10px 20px padding, ~40px tall. Hover bg `#3A6CFF`, pressed `#0E3FCC`. No shadow."
- "Create a Wavve poster row: deep midnight-blue `#0A0E1A` bg, horizontal carousel of 2:3 poster cards (6px radius, no border, ~12px gutter). On hover scale 1.05 + bottom gradient `linear-gradient(transparent, rgba(10,14,26,0.9))` with title (16px/600 white). Partially-watched cards show a 3px `#1351F9` progress fill on a `rgba(255,255,255,0.24)` track at the bottom."
- "Design a Wavve dark text field: bg `rgba(255,255,255,0.06)`, 1px border `rgba(255,255,255,0.16)`, 6px radius, white 15px text, placeholder `#A7AEC0`. Focus border `#1351F9`. Error border `#FF7A45`."
- "Create a LIVE badge: bg `#F5444C`, white 11px/700 `LIVE`, 4px radius, 1px 6px padding — for 실시간 TV only."

### Iteration Guide
1. Blue `#1351F9` = play/subscribe/active/progress only
2. Canvas is deep midnight blue `#0A0E1A`, never pure black
3. Pretendard / Korean stack, white-on-dark-blue
4. Hierarchy through the blue-gray scale before weight
5. Radius: 4px LIVE, 6px buttons/posters, 10–12px surfaces/modals, pill chips/progress
6. No shadows on dark — layer surface lightness; red is LIVE-only

---

## 10. Voice & Tone

Wavve speaks like a relaxed friend recommending what to watch tonight — warm, easygoing, second-person, never pushy. The default register is soft-polite `해요체` (`찜 목록에 추가했어요`, `이어서 볼까요?`), the friendly-but-respectful Korean ending, never stiff `~습니다` except in billing/legal copy. Korean is the unquestioned primary voice; English appears in title names and the wordmark. The copy is about *tonight*, *what you were watching*, *what's on live now* — the easy ritual of settling into the evening.

| Context | Tone |
|---|---|
| CTAs | Short Korean verb (`재생`, `구독하기`, `지금 시청`, `이어보기`). |
| Continue-watching | Inviting, second person (`이어서 볼까요?`, `보던 작품 이어보기`). |
| Success toasts | Past-tense single sentence, soft ending (`찜 목록에 추가했어요`). No emoji on system chrome. |
| Live nudges | Calm immediacy (`지금 실시간으로 방송 중이에요`). |
| Error messages | Blameless, specific, one action (`재생할 수 없어요. 잠시 후 다시 시도해 주세요`). Never `오류가 발생했습니다`. |
| Empty states | Warm + one action (`아직 찜한 작품이 없어요. 마음에 드는 작품을 담아보세요`). |
| Billing / legal | Formal `합니다` register — the single exception. |

**Forbidden phrases.** `오류가 발생했습니다` (generic error), exclamation-as-pressure on CTAs (`지금 구독하세요!` → `구독하기`), marketing superlatives on chrome, English-first strings on Korean surfaces, emoji on system toasts.

**Voice samples.**
- `재생` / `지금 시청` — common OTT play CTA pattern. <!-- illustrative: follows standard OTT play CTA; wavve.com returned minimal markup, not verified verbatim -->
- `이어서 볼까요?` — illustrative continue-watching prompt. <!-- illustrative: follows the continue-watching ritual; not verified verbatim -->
- `찜 목록에 추가했어요` — illustrative watchlist-saved toast. <!-- illustrative: not verified as live copy -->
- `지금 실시간으로 방송 중이에요` — illustrative live-nudge copy. <!-- illustrative: not verified verbatim -->

## 11. Brand Narrative

Wavve (웨이브) launched in **September 2019** from the merger of **SK Telecom's oksusu** and **POOQ** — the joint streaming platform of Korea's terrestrial broadcasters (KBS, MBC, SBS). That lineage is the brand's whole position: where global OTTs compete on original spend and catalog size, Wavve is the *Korean* streaming home — the place for Korean drama, variety/예능, news, and, crucially, **live terrestrial and cable TV** alongside on-demand. The "실시간 TV" tab and the LIVE indicator aren't afterthoughts; they're the heritage.

The design follows from the name. A "wave" carried into "midnight" became a literal blue identity: a deep blue canvas to ride into the evening's viewing, with a bright brand blue `#1351F9` as the point color that catches your eye and carries legibility. The rebrand explicitly built a blue system that "responds to multiple screens including dark mode," added secondary colors "inspired by colors from daytime to midnight," and a set of 3D genre icons to keep the blue spine varied across drama, variety, film, and live. The result is an OTT that feels calmer and bluer than the louder red incumbents — Korean evening television, reimagined as an immersive blue stream.

What Wavve refuses: the near-pure-black, originals-first maximalism of the global giants (Wavve keeps a warmer, bluer, live-TV-inclusive identity), and the cold gray of legacy IPTV menus. It's a blue tide you settle into at night, with the live channel always one tab away.

## 12. Principles

1. **Blue all the way down.** The deep blue canvas and the bright brand blue are one identity, not a theme toggle. *UI implication:* canvas is `#0A0E1A` (never pure black); `#1351F9` is the sole interactive accent.
2. **The catalog is the light.** Poster and billboard art supply the color; chrome recedes. *UI implication:* no borders/shadows on poster cards; white-gray text on the blue field.
3. **Live is heritage.** Real-time terrestrial/cable TV is core, not a bolt-on. *UI implication:* keep 실시간 TV prominent; reserve the warm red strictly for the LIVE indicator.
4. **Continue, don't restart.** Evening viewing is a resumed ritual. *UI implication:* surface continue-watching with the brand-blue progress bar; lead with "이어보기."
5. **Calm over loud.** Wavve is the bluer, quieter alternative to red-billboard OTTs. *UI implication:* restrained motion (crossfades over slides), no exclamation pressure, confidence through calm.
6. **One accent, one job.** The blue means interactive/for-you/in-progress. *UI implication:* never use brand blue as decoration; a second saturated hue is forbidden on browse.

## 13. Personas

*Personas are fictional archetypes informed by publicly described Korean OTT user segments, not individual people.*

**현지 (Hyun-ji), 31, Seoul.** Watches Korean dramas and 예능 every evening. Uses Wavve specifically for fast access to terrestrial broadcaster content and the occasional live broadcast. Resumes from continue-watching nightly, judging the blue progress bar at a glance.

**태영 (Tae-young), 45, Daejeon.** Sports and news viewer. Wavve's 실시간 TV tab is why he subscribes — live channels in one app, no separate IPTV remote. Picks by what's on now, not by browsing the VOD grid.

**유나 (Yu-na), 24, Gwangju.** Casual binge-watcher on mobile. Came for a buzzy Korean original/exclusive, stayed for the easy continue-watching flow. Browses posters in bed, peeking the next card in each row, taps the blue 재생.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no watchlist)** | Single `#A7AEC0` warm line (`아직 찜한 작품이 없어요`) + one brand-blue CTA (`작품 둘러보기`). No clutter on the blue canvas. |
| **Empty (search no results)** | Single `#A7AEC0` caption (`검색 결과가 없어요`). No spammy suggestions. |
| **Loading (browse first paint)** | Poster-shaped skeleton blocks at `#141A2B` with a subtle shimmer toward `#1F2742`, layout-matched to rows. |
| **Loading (playback buffer)** | Centered ring spinner in `#1351F9` over the dimmed player; existing chrome stays. |
| **Error (playback)** | Centered `#FFFFFF` line (`재생할 수 없어요. 잠시 후 다시 시도해 주세요`) + ghost retry. Warm `#FF7A45` reserved for the icon. |
| **Error (inline field)** | Input border switches to `#FF7A45`, caption below in `#FF7A45` 12px, one actionable sentence. |
| **Success (watchlist saved)** | Snackbar `#1F2742` white text (`찜 목록에 추가했어요`), 3s auto-dismiss. |
| **Success (subscribed)** | Dedicated confirmation surface — blue checkmark, plan name + next-billing date, single `확인`. |
| **Skeleton** | `#141A2B` blocks at exact poster dimensions, 6px radius, ~1.2s shimmer to `#1F2742`. |
| **Disabled (button)** | Brand-blue CTA → bg `rgba(19,81,249,0.4)`, text `rgba(255,255,255,0.6)`. Geometry unchanged. |

## 15. Motion & Easing

Wavve's motion is calm and cinematic — slow fades and gentle scales that suit settling into an evening, never bounce.

**Durations:**

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle/checkbox flips |
| `motion-fast` | 150ms | Hover lift, button press, chip select |
| `motion-standard` | 250ms | Poster hover scale, row reveal, modal open |
| `motion-slow` | 400ms | Billboard crossfade, page-to-detail / player transition |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | Default — most motion |
| `ease-enter` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Modals, sheets, toasts appearing |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |

**Spring stance.** Spring/overshoot is avoided — Wavve is a calm blue evening stream; kinetic bounce would undercut the immersive mood.

**Signature motions.**
1. **Poster hover.** Card scales `1.0 → 1.05` over `motion-standard / ease-standard` while a bottom blue-tinted gradient + title overlay fades in, and any continue-watching progress bar glows brand blue. No shadow pulse.
2. **Billboard crossfade.** Hero trailers/posters crossfade over `motion-slow / ease-standard`, never slide — a crossfade reads as a cinema dissolve into the evening.
3. **Live pulse.** The LIVE `#F5444C` dot pulses gently (opacity 1.0 ↔ 0.6) on a slow loop — the one warm, kinetic signal, marking what's broadcasting now.
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, scales and crossfades collapse to instant opacity changes; the live pulse becomes static; shimmer skeletons become static `#141A2B`. No exceptions.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 (UI tokens, §1–9): wavve.com WebFetch 2026-05-27 returned minimal markup
(client-rendered / behind auth) — no live computed-style inspection possible.
Brand blue `#1351F9` is brief-provided, consistent with the documented rebrand.
Dark-blue direction confirmed via rebrand case studies (BAT / Brds.life):
"deep blue background to minimize optic fatigue, brand blue as point color,
secondary colors from daytime to midnight, 3D genre icons." All §4 component
values + the midnight-blue surface scale are CONVENTIONAL (documented blue-led
dark-theme direction + standard OTT norms), flagged in the §4 footer; brand
blue is the one verified anchor.

Tier 2 (founding/narrative): Wavve launched Sept 2019 from the SK Telecom
oksusu + POOQ (KBS/MBC/SBS terrestrial) merger; live terrestrial/cable TV
(실시간 TV) is core heritage alongside VOD. Wikipedia / general industry
knowledge for the merger history.

Voice samples: all four (`재생`/`지금 시청`, `이어서 볼까요?`, `찜 목록에
추가했어요`, `지금 실시간으로 방송 중이에요`) are ILLUSTRATIVE patterns
following Wavve's `해요체` register and continue-watching / live-TV positioning
— NOT verified verbatim (site returned minimal markup).

Personas (§13) are fictional archetypes. Any resemblance to specific users is
unintended.
-->
