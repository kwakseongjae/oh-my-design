---
id: naverwebtoon
name: Naver Webtoon
country: KR
category: consumer-tech
homepage: "https://comic.naver.com"
primary_color: "#00DC64"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=comic.naver.com&sz=128"
verified: "2026-05-27"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#00dc64"
    primary-hover: "#00c758"
    brand: "#00dc64"
    canvas: "#ffffff"
    surface: "#f7f7f7"
    foreground: "#1a1a1a"
    body: "#666666"
    muted: "#999999"
    on-primary: "#ffffff"
    hairline: "#eeeeee"
    border-strong: "#dddddd"
    accent-like: "#ff4d6d"
    accent-star: "#ffb300"
    error: "#f5444c"
    viewer-black: "#000000"
  typography:
    family: { sans: "Pretendard", mono: "Pretendard" }
    display:    { size: 28, weight: 700, lineHeight: 1.3, use: "Featured banner, event headers" }
    section:    { size: 20, weight: 700, lineHeight: 1.35, use: "Row headers" }
    title-card: { size: 16, weight: 600, lineHeight: 1.4, use: "Webtoon title under thumbnail" }
    author:     { size: 13, weight: 400, lineHeight: 1.4, use: "Author name, genre line" }
    body:       { size: 14, weight: 400, lineHeight: 1.6, use: "Synopsis, descriptions" }
    label:      { size: 14, weight: 600, lineHeight: 1.4, use: "Buttons, day tabs" }
    caption:    { size: 12, weight: 400, lineHeight: 1.4, use: "View/like counts, timestamps" }
    rank:       { size: 22, weight: 700, use: "Chart rank, tabular" }
  spacing: [4, 8, 12, 16, 20, 24, 32]
  rounded: { sm: 4, md: 8, lg: 12, full: 9999 }
  shadow:
    subtle: "0px 2px 8px rgba(0,0,0,0.06)"
    floating: "0px 4px 12px rgba(0,0,0,0.12)"
    toast: "0px 4px 12px rgba(0,0,0,0.16)"
  components_harvested: true
  components:
    button-primary: { type: button, bg: "#00dc64", fg: "#ffffff", radius: "8px", padding: "10px 18px", font: "14px / 600", states: "hover #00c758, disabled bg #eeeeee fg #bbbbbb", use: "Primary read CTA" }
    button-outline: { type: button, bg: "#ffffff", fg: "#333333", border: "1px solid #dddddd", radius: "8px", padding: "10px 18px", font: "14px / 600", use: "Secondary action" }
    button-subscribe: { type: button, bg: "rgba(0,220,100,0.10)", fg: "#00c758", radius: "8px", padding: "10px 18px", font: "14px / 600", use: "관심웹툰 subscribe toggle, green-tinted when active" }
    input-search: { type: input, bg: "#f7f7f7", fg: "#333333", radius: "8px", padding: "12px 14px", font: "14px / 400", focus: "1px border #00dc64", use: "Title/author search" }
    card-thumbnail: { type: card, bg: "transparent", radius: "8px", states: "hover scale 1.03 + title emphasis", use: "Webtoon thumbnail card, art is the card" }
    card-info: { type: card, bg: "#ffffff", radius: "12px", padding: "20px", shadow: "0px 2px 8px rgba(0,0,0,0.06)", use: "Title-detail header" }
    badge-up: { type: badge, bg: "#00dc64", fg: "#ffffff", radius: "4px", padding: "1px 5px", font: "11px / 700", use: "UP / new-episode flag, the green ritual" }
    chip: { type: badge, bg: "#f7f7f7", fg: "#666666", radius: "999px", padding: "6px 14px", font: "13px / 500", active: "bg #00dc64, fg #ffffff", use: "요일별 day tabs, genre filters" }
    badge-rating: { type: badge, bg: "transparent", fg: "#ffb300", font: "12px / 700", use: "별점 average beside a star" }
    tab: { type: tab, fg: "#999999", font: "15px / 600", active: "fg #00dc64, 2px #00dc64 underline", use: "Day-of-week tab" }
    toast: { type: toast, bg: "#1a1a1a", fg: "#ffffff", radius: "8px", padding: "12px 16px", shadow: "0px 4px 12px rgba(0,0,0,0.16)", font: "14px / 500", use: "Transient feedback, 3s auto-dismiss" }
---

# Design System Inspiration of Naver Webtoon (네이버웹툰)

## 1. Visual Theme & Atmosphere

Naver Webtoon is the platform that invented the format — the vertical-scroll, mobile-native comic ("webtoon") that turned Korean digital comics into a global medium. Its interface exists to do one thing supremely well: get out of the way so a thumbnail grid of cover art can pull you into the next binge. The browse experience is bright and clean — predominantly white surfaces with crisp black-and-gray text — punctuated by the unmistakable **Webtoon green `#00DC64`** ("WT GREEN"), a fresh, almost electric grass-green that marks brand moments, the logo, primary CTAs, and "UP"/new-episode signals. This green is the brand's whole personality: young, energetic, optimistic — the color of "something new just dropped."

What defines Webtoon visually is **the grid is the design**. Cover thumbnails — vivid, illustrated, every genre and art style imaginable — are the source of color and energy; the chrome around them is deliberately calm so the art screams and the UI whispers. Ranking numbers, genre chips, day-of-week tabs (요일별), and "UP" badges form a tight, scannable information layer over a white canvas. When you actually read, the viewer flips to a focused, distraction-free vertical scroll where the strip itself fills the screen. Two modes, one identity: a buzzy discovery grid and a quiet reading canvas.

Typography is Korean-system-led — Naver's own typefaces and the standard Korean web/app stack (**Pretendard**, Apple SD Gothic Neo, Malgun Gothic, with Nanum lineage), rendered black-on-white with green accents. Type is friendly and rounded in feel, sentence-case, optimized for fast scanning of dozens of titles and for long-form reading comfort in the viewer.

**Key Characteristics:**
- Webtoon green `#00DC64` ("WT GREEN") as the brand + primary interactive accent — logo, CTAs, "UP" / new badges
- Bright white canvas with black/gray text — chrome whispers so cover art screams
- Thumbnail-grid-first discovery; focused vertical-scroll reading viewer
- Naver / Pretendard-led Korean type stack, black-on-white with green accents
- Day-of-week (요일별) tabs and ranking numbers as a core scannable info layer
- Young, energetic, optimistic tone — "something new just dropped"
- "UP" badge culture: the green new-episode signal is a brand ritual

## 2. Color Palette & Roles

Webtoon green `#00DC64` is the documented "WT GREEN" brand color (RGB 0,220,100). comic.naver.com is bot-protected (WebFetch blocked), so product grays/blacks below follow Naver web conventions and the documented brand palette; treat product hexes as conventional, not from a live-inspected token doc.

### Brand / Interactive
- **WT Green** (`#00DC64`): The signature color (RGB 0, 220, 100). Logo, primary CTA, "UP"/new-episode badge, active selection, brand moments. The single energetic accent.
- **WT Green Deep** (`#00C758`): Pressed / hover variant of the green.
- **WT Green Light** (`rgba(0,220,100,0.10)`): Subtle green-tinted highlight backgrounds.

### Surfaces
- **Pure White** (`#FFFFFF`): Browse canvas, cards, headers — the bright base behind the grid.
- **Surface Gray** (`#F7F7F7`): Section backgrounds, inactive chip fills, skeleton blocks.
- **Surface Gray Strong** (`#EEEEEE`): Secondary fills, dividers' surface variant.
- **Viewer Black** (`#000000`): The reading-viewer background option (dark reading mode) so the strip art is the only light.

### Text
- **Text Primary** (`#1A1A1A`): Titles, author names, primary labels.
- **Text Strong** (`#333333`): Strong body labels, episode titles.
- **Text Body** (`#666666`): Body text, synopsis, metadata.
- **Text Secondary** (`#999999`): Captions, view/like counts, timestamps.
- **Text Tertiary** (`#BBBBBB`): Placeholder, disabled labels.

### Borders
- **Divider** (`#EEEEEE`): Hairline row/grid separators.
- **Border Strong** (`#DDDDDD`): Active input outlines, emphasized edges.

### Semantic
- **New / UP** (`#00DC64`): The green doubles as the "new episode / UP" semantic.
- **Like / Heart** (`#FF4D6D`): Favorite/like heart — a warm pink-red, distinct from brand green.
- **Rating / Star** (`#FFB300`): Star ratings (별점) accent.
- **Error** (`#F5444C`): Form errors, failures.

## 3. Typography Rules

### Font Family
- **Primary**: `Pretendard, "Apple SD Gothic Neo", "Malgun Gothic", -apple-system, BlinkMacSystemFont, "Noto Sans KR", "Nanum Gothic", sans-serif`
- **Brand surfaces**: Naver's house typefaces appear in marketing/logo lockups
- **Numerals**: tabular-friendly for ranking numbers and view/like counts

### Hierarchy

| Role | Size | Weight | Line Height | Use |
|------|------|--------|-------------|-----|
| Display Hero | 28–32px | 700 | 1.3 | Featured banner, event headers |
| Section Heading | 20–22px | 700 | 1.35 | Row headers (오늘의 신작, 인기 급상승) |
| Title Card | 15–16px | 600 | 1.4 | Webtoon title under thumbnail |
| Author / Sub | 13px | 400 | 1.4 | Author name, genre line |
| Body | 14px | 400 | 1.6 | Synopsis, descriptions (looser LH for reading) |
| Label / CTA | 14px | 600 | 1.4 | Buttons, day tabs |
| Caption | 12px | 400 | 1.4 | View/like counts, timestamps |
| Ranking Number | 18–22px | 700 | tight | Chart rank — tabular |

### Conventions
- **700 for headings + ranks, 600 for titles/CTAs, 400 for body** — a clean three-weight rhythm.
- **Numbers are content** — ranking positions, episode numbers, view counts, ratings are first-class typography, tabular-aligned.
- **Looser line-height for reading** — synopsis and viewer captions use ~1.6 LH for long-form comfort.
- **Sentence-case, no all-caps** — Korean and Latin both; the grid stays friendly, not shouty.

## 4. Component Stylings

comic.naver.com blocks automated fetch; geometry below follows Naver web conventions + the documented WT GREEN brand. Treat as conventional, not live-inspected tokens.

### Buttons

**Primary (WT Green)**
- Background: `#00DC64`
- Text: `#FFFFFF`
- Border: none
- Radius: 8px
- Padding: 10px 18px
- Font: 14px / 600 / Pretendard
- Hover: background `#00C758`
- Disabled: background `#EEEEEE`, text `#BBBBBB`
- Use: Primary CTA — 첫화 보기, 구독하기, 정주행. The green call-to-read.

**Outline / Secondary**
- Background: `#FFFFFF`
- Text: `#333333`
- Border: 1px solid `#DDDDDD`
- Radius: 8px
- Padding: 10px 18px
- Font: 14px / 600 / Pretendard
- Use: Secondary action (관심 등록, 미리보기)

**Subscribe / Toggle CTA**
- Background (subscribed): `rgba(0,220,100,0.10)`
- Text (subscribed): `#00C758`
- Border: none
- Radius: 8px
- Padding: 10px 18px
- Font: 14px / 600 / Pretendard
- Use: 관심웹툰 subscribe toggle — fills green-tinted once active

### Inputs

**Search Field**
- Background: `#F7F7F7`
- Text: `#333333`
- Border: none (filled)
- Radius: 8px
- Padding: 12px 14px
- Font: 14px / 400 / Pretendard
- Placeholder: `#BBBBBB`
- Focus: 1px border `#00DC64`
- Use: Title/author search — green focus ring

### Cards

**Webtoon Thumbnail Card**
- Background: transparent (cover art fills)
- Border: none
- Radius: 8px (cover), `50%` for character/round thumbs
- Aspect: vertical poster (commonly ~3:4) or square in some rows
- Hover: subtle scale ~1.03 + title emphasis
- Use: The atomic unit of every browse row/grid — the art is the card, chrome stays off it

**Info Card (title detail header)**
- Background: `#FFFFFF`
- Border: none
- Radius: 12px
- Padding: 20px
- Shadow: `0px 2px 8px rgba(0,0,0,0.06)`
- Use: Title-detail header — cover, title, author, genre, rating, 구독 CTA

### Badges / Chips

**UP / New Badge**
- Background: `#00DC64`
- Text: `#FFFFFF`
- Border: none
- Radius: 4px
- Padding: 1px 5px
- Font: 11px / 700 / Pretendard
- Use: The signature "UP" / new-episode flag on thumbnails — the green ritual

**Genre / Day Chip**
- Background: `#F7F7F7`
- Text: `#666666`
- Border: none
- Radius: 999px
- Padding: 6px 14px
- Font: 13px / 500 / Pretendard
- Active: `#00DC64` bg + `#FFFFFF` text
- Use: 요일별 day tabs, genre filters

**Rating Badge**
- Background: transparent
- Text: `#FFB300`
- Font: 12px / 700 / Pretendard
- Use: 별점 average beside a star

### Tabs / Nav

**Day-of-Week Tab (요일별)**
- Active text: `#00DC64`
- Inactive text: `#999999`
- Indicator: 2px `#00DC64` underline (active)
- Font: 15px / 600 / Pretendard
- Use: 월/화/수/목/금/토/일 + 완결 switcher — the core browse organizer

**Bottom Tab (Active)**
- Active icon/text: `#1A1A1A` (with green accent on the primary tab)
- Inactive: `#BBBBBB`
- Border: 1px solid `#EEEEEE` (top only)
- Font: 11px / 500 / Pretendard
- Use: 웹툰 / 베스트도전 / MY / etc.

### Toasts

**Snackbar**
- Background: `#1A1A1A`
- Text: `#FFFFFF`
- Border: none
- Radius: 8px
- Padding: 12px 16px
- Shadow: `0px 4px 12px rgba(0,0,0,0.16)`
- Font: 14px / 500 / Pretendard
- Use: "관심웹툰에 추가했어요" transient feedback, 3s auto-dismiss

---

**Verified:** 2026-05-27
**Tier 1 sources:** comic.naver.com (WebFetch blocked — bot-protected; visual atmosphere from prior knowledge + brand search). WT GREEN `#00DC64` (RGB 0,220,100) confirmed via brand search (logos-world / 1000logos brand-palette records + WEBTOON Canvas logo guidelines lineage). Product grays/blacks/component geometry follow Naver web conventions — not live-inspected tokens.
**Tier 2 sources:** getdesign.md/naverwebtoon — not checked. styles.refero.design — not checked.
**Conflicts unresolved:** Live computed-style inspection unavailable (comic.naver.com blocks automated fetch). All §4 component values flagged conventional; WT GREEN `#00DC64` is the one verified token. A future UPDATE pass with browser inspection should re-confirm component geometry.

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Common values: 4, 8, 12, 16, 20, 24, 32
- Grid gutter: ~12px between thumbnails; ~24px between content rows

### Grid & Container
- Browse: responsive thumbnail grid — 3–4 cols mobile, 6+ desktop, within a max content width (~1200px)
- Day-tabs row sticky near the top organizing the whole browse
- Viewer: single-column full-width vertical scroll, the strip fills the reading width

### Whitespace Philosophy
- **The grid is the design.** Chrome (tabs, ranks, chips) is calm and compact so cover art carries the color and energy.
- **Two densities.** Discovery is tight and scannable (many titles per screen); the reading viewer is spacious and focused (one strip, nothing else).
- **Scannable info layer.** Ranking numbers, UP badges, and day tabs form a consistent, low-chrome overlay on the art.

### Border Radius Scale
- Compact (4px): UP/new badges, inline flags
- Standard (8px): buttons, inputs, thumbnail cards
- Comfortable (12px): info cards, detail headers
- Pill (999px): genre/day chips
- Circle (50%): character/round thumbnails, avatars

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (0) | No shadow | Browse grid, thumbnails (the gutter separates them) |
| Subtle (1) | `0px 2px 8px rgba(0,0,0,0.06)` | Info cards, detail headers |
| Floating (2) | `0px 4px 12px rgba(0,0,0,0.12)` | Dropdowns, sticky tab bar on scroll |
| Toast (3) | `0px 4px 12px rgba(0,0,0,0.16)` | Snackbars |

**Shadow philosophy.** On the bright white grid, shadows are minimal — thumbnails are separated by the gutter, not by drop shadows, so the art reads edge-to-edge. Elevation appears only where chrome floats (sticky tabs, dropdowns, toasts). Soft, neutral, single-layer. In the dark reading viewer, depth (if any) comes from surface lightness, not shadow.

## 7. Do's and Don'ts

### Do
- Use WT Green `#00DC64` for the logo, primary CTA, UP badge, and active selection
- Keep the browse canvas white and let cover art supply the color
- Render ranking numbers, episode numbers, and counts as first-class tabular typography
- Use the UP badge (green, 4px radius) consistently as the new-episode signal
- Give the reading viewer maximum focus — strip fills the screen, chrome hides

### Don't
- Don't put drop shadows or borders on thumbnail cards — the gutter separates them
- Don't introduce a second saturated accent competing with the green
- Don't crowd the reading viewer with chrome — reading is a focused mode
- Don't use all-caps or marketing-shouty type on the grid
- Don't tint the browse canvas — white keeps the cover art vivid

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile (Primary) | <768px | 3–4 thumbnails per row, bottom tab nav, swipeable day tabs |
| Tablet | 768–1024px | 4–5 per row, condensed top nav |
| Desktop (Web) | >1024px | 6+ per row, full top nav, max ~1200px content |

### Touch & Media
- Thumbnail is the primary touch target; min ~44px controls
- Day-of-week tabs swipeable on mobile
- Reading viewer: vertical scroll, tap-zones for UI toggle, full-bleed strip

### Image Behavior
- Cover thumbnails: `object-fit: cover`, lazy-loaded, 8px radius
- Reading strip: full reading-width, native aspect, sequential vertical
- Character/round thumbs: 50% circle

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA / brand / UP: WT Green `#00DC64` (hover `#00C758`)
- Canvas: white `#FFFFFF`; surface `#F7F7F7`; viewer black `#000000`
- Text: primary `#1A1A1A`; body `#666666`; secondary `#999999`
- Divider `#EEEEEE`; like/heart `#FF4D6D`; rating `#FFB300`

### Example Component Prompts
- "Build a Webtoon primary CTA: bg `#00DC64`, white 14px/600 text, 8px radius, 10px 18px padding. Hover bg `#00C758`. Disabled bg `#EEEEEE` text `#BBBBBB`."
- "Create a Webtoon browse grid: white `#FFFFFF` bg, responsive grid of vertical cover cards (8px radius, no border, ~12px gutter). Each card: cover image + a green UP badge (`#00DC64`, 4px radius, 11px/700 white, '\''UP'\'') top-left when new + title (15px/600 `#1A1A1A`) + author (13px/400 `#999999`) below."
- "Design a day-of-week tab row: 월~일 + 완결, active text `#00DC64` with a 2px `#00DC64` underline, inactive `#999999`, 15px/600, swipeable."
- "Create a title-detail header card: white bg, 12px radius, `0px 2px 8px rgba(0,0,0,0.06)` shadow, 20px padding. Cover thumb left, title 20px/700, author 13px/400 `#999999`, rating `#FFB300` star + number, green 구독 CTA."

### Iteration Guide
1. WT Green `#00DC64` = logo + primary CTA + UP badge + active state
2. White canvas; cover art carries the color and energy
3. Pretendard / Korean system stack, black-on-white with green accents
4. Numbers (rank/episode/count) are tabular first-class typography
5. Radius: 4px UP badge, 8px buttons/cards, 12px info cards, 999px chips, 50% round thumbs
6. Two densities: tight discovery grid, focused reading viewer

---

## 10. Voice & Tone

Naver Webtoon speaks like an excited friend who can't wait to show you the next great series — warm, upbeat, second-person, and a little playful, but never spammy. The default register is soft-polite `해요체` (`새 회차가 올라왔어요`, `관심웹툰에 추가했어요`), friendly and young. Korean is the unquestioned primary voice; English appears in title romanizations and the "WEBTOON" wordmark. The energy maps to the green: copy is about *what's new*, *what's hot*, *what you'll love next* — the buzz of discovery.

| Context | Tone |
|---|---|
| CTAs | Short Korean verb (`첫화 보기`, `정주행`, `구독하기`, `미리보기`). |
| New-content nudges | Upbeat, second person (`기다리던 새 회차가 올라왔어요`). |
| Success toasts | Past-tense single sentence, soft ending (`관심웹툰에 추가했어요`). No emoji on system chrome. |
| Error messages | Blameless, specific, one action (`잠시 후 다시 시도해 주세요`). Never `오류가 발생했습니다`. |
| Empty states | Warm + one action (`아직 관심웹툰이 없어요. 마음에 드는 작품을 추가해 보세요`). |
| Recommendation rows | Energetic, taste-led (`이런 작품 어때요?`, `요즘 뜨는 작품`). |
| Legal / payment (쿠키/대여) | Formal `합니다` register — the single exception. |

**Forbidden phrases.** `오류가 발생했습니다` (generic error), exclamation-as-pressure stacking, marketing superlatives piled on chrome, English-first strings on Korean surfaces, emoji on system-generated toasts (emoji belongs to user comments, not UI chrome).

**Voice samples.**
- `첫화 보기` — common read-CTA pattern. <!-- illustrative: follows Naver Webtoon's standard read CTA; comic.naver.com blocks automated verification -->
- `새 회차가 올라왔어요` — illustrative new-episode nudge. <!-- illustrative: follows the UP/new-episode ritual; not verified verbatim -->
- `관심웹툰에 추가했어요` — illustrative subscribe-success toast. <!-- illustrative: not verified as live copy -->
- `요즘 뜨는 작품` — illustrative trending-row header. <!-- illustrative: not verified verbatim -->

## 11. Brand Narrative

Naver Webtoon (네이버웹툰) launched in **2004** inside the Naver portal and effectively *created the modern webtoon* — the vertical-scroll, mobile-native digital comic read top-to-bottom rather than page-by-page. By building a free, ad/IP-supported platform open to amateur creators (베스트도전 → 도전만화 → 정식 연재), it turned reading comics into a daily habit organized around the 요일별 (day-of-week) release schedule, and turned drawing them into a viable career. The format became a global export; the company (now WEBTOON / Webtoon Entertainment) took the model worldwide and to a US listing.

The design follows the mission directly: a bright, friendly, low-friction grid that makes *discovering and following* series effortless, and a focused viewer that makes *reading* them comfortable. The WT GREEN `#00DC64` is the emotional core — fresh, young, optimistic — the color of the "UP" badge that says a new episode of the series you love just dropped. That little green flag is a genuine brand ritual: a daily dopamine signal that keeps a generation coming back.

What Naver Webtoon refuses: the dense, text-heavy seriousness of legacy comic portals, and the dark, cinematic moodiness of video-OTT browse (Webtoon's discovery canvas is bright and buzzy, not a dim lobby). It's a friendly newsstand where the covers do the selling and the green means "new."

## 12. Principles

1. **The grid is the design.** Cover art carries the color and energy; chrome whispers. *UI implication:* no borders/shadows on thumbnails; calm, compact tabs/ranks/chips over a white canvas.
2. **Green means new.** `#00DC64` is the brand and the UP/new-episode signal. *UI implication:* reserve green for the logo, primary CTA, UP badge, and active state — never decoration.
3. **Two modes, one identity.** Buzzy discovery and quiet reading are distinct densities. *UI implication:* the browse grid is tight and scannable; the reading viewer hides chrome and gives the strip the screen.
4. **Numbers are content.** Ranks, episode numbers, and counts are first-class. *UI implication:* render them as tabular, high-emphasis typography, not afterthoughts.
5. **Friendly, never shouty.** The brand is young and warm, not aggressive marketing. *UI implication:* sentence-case, soft `해요체`, no all-caps or exclamation pressure on the grid.
6. **Daily ritual.** The 요일별 schedule and the UP badge make Webtoon a habit. *UI implication:* surface "what's new for you today" prominently; the green flag is the reward loop.

## 13. Personas

*Personas are fictional archetypes informed by publicly described Korean webtoon-reader segments, not individual people.*

**다은 (Da-eun), 19, Seoul.** University freshman, reads 8 series across the week, each on its release day. Lives for the green UP badge — checks the app the moment a new episode is due. Reads on the subway in the focused vertical viewer; comments and shares with friends.

**준호 (Jun-ho), 27, Daejeon.** Office worker and casual reader. Binges completed (완결) series on weekends, spends 쿠키 to unlock ahead. Discovers via the trending and recommendation rows, judges by cover art and rating number first.

**소민 (So-min), 23, Busan.** Aspiring creator. Posts to 베스트도전 hoping to go pro, reads obsessively to study what works. Treats the platform as both library and career ladder — the open creator pipeline is why she's here.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no subscriptions)** | Single `#999999` warm line (`아직 관심웹툰이 없어요`) + one green CTA (`작품 둘러보기`). No clutter on white. |
| **Empty (search no results)** | Single `#999999` caption (`검색 결과가 없어요`). No spammy suggestions. |
| **Loading (grid first paint)** | Thumbnail-shaped skeleton blocks at `#F7F7F7` with a subtle shimmer toward `#EEEEEE`, layout-matched. |
| **Loading (viewer)** | Centered spinner in `#00DC64` over the dim viewer; each panel lazy-loads as you scroll. |
| **Error (load failed)** | Centered `#1A1A1A` line (`불러올 수 없어요. 잠시 후 다시 시도해 주세요`) + green retry. |
| **Error (inline field)** | Input border `#F5444C`, caption below `#F5444C` 12px, one actionable sentence. |
| **Success (subscribed)** | Snackbar `#1A1A1A` white text (`관심웹툰에 추가했어요`), 3s; subscribe CTA fills green-tinted. |
| **Success (cookie purchased)** | Confirmation surface — green checkmark, balance, single `확인`. |
| **Skeleton** | `#F7F7F7` blocks at exact thumbnail dimensions, 8px radius, ~1.2s shimmer to `#EEEEEE`. |
| **Disabled (CTA)** | Green button → bg `#EEEEEE`, text `#BBBBBB`. Geometry unchanged. |

## 15. Motion & Easing

Naver Webtoon's motion is light and energetic in discovery, calm and uninterrupted in reading — never bouncy enough to feel like a toy, never so still it feels dull.

**Durations:**

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle flips, UP badge appear |
| `motion-fast` | 150ms | Hover lift, chip select, button press |
| `motion-standard` | 250ms | Thumbnail hover scale, tab switch, sheet open |
| `motion-slow` | 400ms | Banner crossfade, page-to-detail transition |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | Default — most motion |
| `ease-enter` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Modals, sheets, toasts appearing |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-pop` | `cubic-bezier(0.34, 1.4, 0.64, 1)` | Reserved — UP/new-badge appearance only |

**Signature motions.**
1. **Thumbnail hover.** Cover scales `1.0 → 1.03` over `motion-standard / ease-standard` with a subtle title emphasis. No shadow pulse — the scale is the lift.
2. **UP badge pop.** When a new episode lands, the green UP badge appears with a brief 1.1 scale-pop (`ease-pop`) — the one licensed bit of bounce, because "new episode" deserves a tiny celebration.
3. **Reading scroll.** The viewer is pure native vertical scroll — no parallax, no transition gimmicks; chrome fades out on scroll-down, back in on tap. Reading must never be interrupted by motion.
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, hover scales and the UP pop collapse to instant opacity changes; shimmer skeletons become static `#F7F7F7`. No exceptions.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 (UI tokens, §1–9): comic.naver.com WebFetch BLOCKED (bot-protected) on
2026-05-27 — no live computed-style inspection was possible. WT GREEN `#00DC64`
(RGB 0,220,100) confirmed via brand search (logos-world.net / 1000logos.net
Webtoon brand-color records + WEBTOON Canvas logo guidelines lineage). All §4
component values and product grays/blacks are CONVENTIONAL (Naver web norms +
documented brand green), not live-inspected tokens — flagged in the §4 footer.

Tier 2 (founding/narrative): Naver Webtoon launched 2004 inside the Naver
portal; pioneered vertical-scroll mobile webtoons and the 요일별 release model
and amateur-creator pipeline (베스트도전/도전만화); the company became WEBTOON /
Webtoon Entertainment with global + US-listing reach. General industry
knowledge for the format history.

Voice samples: all four (`첫화 보기`, `새 회차가 올라왔어요`, `관심웹툰에
추가했어요`, `요즘 뜨는 작품`) are ILLUSTRATIVE patterns following Naver
Webtoon's `해요체` register and UP/new-episode discovery ritual — NOT verified
verbatim, since the site blocked automated inspection.

Personas (§13) are fictional archetypes. Any resemblance to specific users is
unintended.
-->
