---
id: millie
name: Millie
display_name_kr: 밀리의서재
country: KR
category: education
homepage: "https://www.millie.co.kr"
primary_color: "#1b6dda"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=millie.co.kr&sz=128"
verified: "2026-05-27"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#1b6dda"
    primary-hover: "#1860c2"
    primary-pressed: "#1554ad"
    primary-tint: "#f2f6fd"
    canvas: "#ffffff"
    ink: "#242424"
    purple: "#a451f7"
    coral: "#ff5b4f"
    yellow: "#ffc004"
    system-blue: "#007aff"
    gray-800: "#333333"
    gray-700: "#555555"
    gray-600: "#6f6f6f"
    gray-500: "#8b8b8b"
    gray-400: "#c1c1c1"
    border: "#ececec"
    surface: "#f2f2f2"
    surface-tint: "#f7f7f7"
  typography:
    family: { sans: "Pretendard", mono: "Pretendard" }
    display:      { size: 28, weight: 700, lineHeight: 1.36, tracking: -0.4, use: "Editorial banner / original-content title" }
    heading-lg:   { size: 22, weight: 700, lineHeight: 1.36, tracking: -0.4, use: "Feed section title" }
    heading:      { size: 18, weight: 700, lineHeight: 1.44, tracking: -0.3, use: "Sub-section header, shelf label" }
    title:        { size: 16, weight: 600, lineHeight: 1.50, tracking: -0.3, use: "Book detail title, modal header" }
    body-lg:      { size: 16, weight: 400, lineHeight: 1.50, tracking: -0.2, use: "Book description, reading text" }
    body:         { size: 14, weight: 400, lineHeight: 1.57, tracking: -0.2, use: "Default body, listing metadata" }
    tab:          { size: 14, weight: 600, lineHeight: 1.43, tracking: -0.2, use: "Category tab label" }
    caption:      { size: 13, weight: 400, lineHeight: 1.38, tracking: -0.2, use: "Author/publisher, review counts" }
    micro:        { size: 12, weight: 500, lineHeight: 1.33, tracking: -0.2, use: "Fine print, control labels" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 20, xl: 24, xxl: 32, section: 48 }
  rounded: { sm: 4, md: 8, lg: 12, full: 9999 }
  shadow:
    card: "0px 2px 8px rgba(0,0,0,0.08)"
  components:
    button-primary: { type: button, bg: "#1b6dda", fg: "#ffffff", radius: 8, padding: "14px 20px", font: "16px/700", use: "Primary subscription CTA" }
    button-dark: { type: button, bg: "#333333", fg: "#ffffff", radius: 4, padding: "0px 12px", font: "12px/400", use: "Compact chrome action, login" }
    button-outline: { type: button, bg: "#ffffff", fg: "#1b6dda", radius: 8, padding: "14px 20px", font: "16px/600", use: "Secondary CTA" }
    button-neutral: { type: button, bg: "#f2f2f2", fg: "#333333", radius: 8, padding: "12px 16px", font: "14px/500", use: "Tertiary action" }
    input: { type: input, bg: "#ffffff", fg: "#242424", radius: 8, padding: "12px 14px", font: "14px/400", use: "Default text input" }
    search: { type: input, bg: "#f2f2f2", fg: "#242424", radius: 8, padding: "12px 16px", font: "14px/400", use: "Header/discovery search bar" }
    book-tile: { type: card, bg: "#f2f2f2", radius: 6, use: "Default book unit in feed grid" }
    feed-card: { type: card, bg: "#ffffff", radius: 12, use: "Curated feed promotion, banner" }
    tab-active: { type: tab, bg: "#333333", fg: "#ffffff", radius: 10, padding: "0px 10px", font: "14px/600", active: "#333333 fill", use: "Active genre/category filter" }
    tag-original: { type: badge, bg: "#a451f7", fg: "#ffffff", radius: 4, padding: "3px 6px", font: "11px/700", use: "밀리 오리지널 flag" }
    tag-promo: { type: badge, bg: "#ff5b4f", fg: "#ffffff", radius: 4, padding: "3px 6px", font: "11px/700", use: "Time-limited promotion flag" }
    pill-scrim: { type: toggle, fg: "#ffffff", radius: 9999, padding: "4px 10px", font: "16px/400", use: "Floating carousel control over imagery" }
  components_harvested: true
---

# Design System Inspiration of Millie (밀리의서재)

## 1. Visual Theme & Atmosphere

Millie's Library is Korea's largest reading-subscription service, and its interface behaves like a calm digital bookshelf -- a content storefront where book covers are the color and everything else stays quiet. The page opens on a clean white canvas (`#ffffff`) with a warm near-black body text (`#242424`) and a confident reading blue (`#1b6dda`) that functions as the universal interactive accent. This isn't a flat library catalog; it's a streaming-service-for-books feel, where the home tab ("투데이" — Today) is a curated, editorial feed of book covers, audiobook tiles, and original-content promotions, much like a video platform's home screen reimagined for reading.

The book cover is the hero. Millie's design system treats every cover thumbnail as the primary unit of color and meaning -- a dense, scrollable grid of portrait rectangles, each carrying the publisher's art. The chrome around them is deliberately muted: white surfaces, `#f2f2f2` section fills, and a restrained type system built on Pretendard Variable so that nothing competes with the covers. Where a single saturated brand color appears, it is the reading blue -- on the primary subscription CTA, on active tabs, on links. A small constellation of secondary accents (a soft purple `#a451f7`, a warm coral `#ff5b4f`, a highlight yellow `#ffc004`) appears on promotional cards and category tags, but always in service of organizing content, never as decoration for its own sake.

What defines Millie visually is the streaming-app posture applied to books: a personalized, cover-forward feed; soft rounded chips and pill toggles (10px radius on category tabs); and a generous, comfortable type scale optimized for browsing on a phone in the evening. The mood is warm and inviting rather than institutional -- reading should feel like a daily habit, not homework.

**Key Characteristics:**
- Reading Blue (`#1b6dda`) as the primary interactive accent -- subscription CTA, active tabs, links
- Warm near-black body text (`#242424`) on a clean white canvas -- not pure `#000`
- Pretendard Variable as the system face -- Korean-Latin co-equal rendering
- Cover-forward, streaming-style feed: book covers carry the color, chrome recedes
- Soft secondary accents (purple `#a451f7`, coral `#ff5b4f`, yellow `#ffc004`) for content organization
- Rounded chrome: 10px radius category tabs, 4px buttons, 100px pill controls
- Comfortable browsing type scale -- evening-on-a-phone reading posture
- `#f2f2f2` surface fills for nested sections and feed separation

## 2. Color Palette & Roles

### Primary
- **Reading Blue** (`#1b6dda`): Primary interactive color -- subscription CTA, active tab, links, selection. The workhorse of every tappable accent (observed `rgb(27,109,218)`).
- **Pure White** (`#ffffff`): Page canvas, card surfaces, button text on blue, navigation background.
- **Warm Near-Black** (`#242424`): Primary heading + body text color. Warm dark gray, softer than pure black (observed `rgb(36,36,36)` — the most-used color on the surface).

### Secondary / Content Accents
- **Soft Purple** (`#a451f7`): Original-content tags, premium-feature highlights, audiobook accents (observed `rgb(164,81,247)`).
- **Warm Coral** (`#ff5b4f`): Time-limited promotion, "오늘의 추천", urgency tags (observed `rgb(255,91,79)`).
- **Highlight Yellow** (`#ffc004`): Star ratings, "베스트" / highlight badges (observed `rgb(255,192,4)`).
- **System Blue** (`#007aff`): iOS-native control blue, used on platform-supplied controls only (observed `rgb(0,122,255)`).

### Neutral Scale
- **Gray 800** (`#333333`): Strong labels, dark button fill (login chip `#333`).
- **Gray 700** (`#555555`): Secondary headings, emphasized labels.
- **Gray 600** (`#6f6f6f`): Body secondary text, descriptions, metadata (observed `rgb(111,111,111)`).
- **Gray 500** (`#8b8b8b`): Caption text, secondary labels (observed `rgb(139,139,139)`).
- **Gray 400** (`#c1c1c1`): Placeholder text, disabled icons (observed `rgb(193,193,193)`).
- **Gray 200** (`#ececec`): Default border, dividers (observed `rgb(236,236,236)`).
- **Gray 100** (`#f2f2f2`): Secondary background, section fill, card fill.
- **Gray 50** (`#f7f7f7`): Lightest surface fill for nested sections.

### Surface & Overlays
- **Surface Fill**: `#f2f2f2`. Section backgrounds, feed separators, image placeholders.
- **Scrim Dark**: `rgba(0,0,0,0.3)`. Image overlays, cover-gradient veils, modal scrim.
- **Scrim Light**: `rgba(0,0,0,0.15)`. Subtle dividers over imagery.

## 3. Typography Rules

### Font Family
- **Primary**: `"Pretendard Variable", "Pretendard Fallback", "Pretendard Fallback Android", sans-serif` (observed live on `www.millie.co.kr`, 2026-05)
- **Design Principle**: No bespoke wordmark webfont on product surfaces. Pretendard Variable carries the entire system; weight contrast (400 / 600 / 700) builds hierarchy. Korean and Latin render co-equally in the same line.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display | Pretendard | 28px | 700 | 38px | -0.4px | Editorial banner / original-content title |
| Heading Large | Pretendard | 22px | 700 | 30px | -0.4px | Feed section title ("지금 인기 있는 책") |
| Heading | Pretendard | 18px | 700 | 26px | -0.3px | Sub-section header, shelf label |
| Title | Pretendard | 16px | 600 | 24px | -0.3px | Book detail title, modal header |
| Body Large | Pretendard | 16px | 400 | 24px | -0.2px | Book description, reading text |
| Body | Pretendard | 14px | 400 | 22px | -0.2px | Default body, listing metadata |
| Tab Label | Pretendard | 14px | 600 | 20px | -0.2px | Active/inactive category tab |
| Caption | Pretendard | 13px | 400 | 18px | -0.2px | Author / publisher, review counts |
| Caption Bold | Pretendard | 13px | 700 | 18px | -0.2px | Badge / tag labels |
| Micro | Pretendard | 12px | 500 | 16px | -0.2px | Fine print, control labels |

### Principles
- **Comfortable browsing scale**: Body sits at 14-16px with generous leading — the system assumes evening phone browsing, not dense data scanning.
- **Three weights**: 400 (body), 600 (tabs / titles), 700 (headings / emphasis). Light is avoided on Korean glyphs.
- **Warm dark, not pure black**: Headings and body use `#242424`, a warm near-black, to feel inviting rather than clinical. Pure `#000` is reserved for high-contrast moments.
- **Tight Korean tracking**: `-0.2px` to `-0.4px` letter-spacing for editorial compactness on titles.
- **Covers carry color, type stays neutral**: Type tokens avoid the brand blue except on links and tab labels — the book cover is the chromatic event.

## 4. Component Stylings

### Buttons

**Primary (Reading Blue)**
- Background: `#1b6dda`
- Text: `#ffffff`
- Border: none
- Radius: 8px
- Padding: 14px 20px
- Font: 16px / 700 / Pretendard
- Hover: `#1860c2`
- Pressed: `#1554ad`
- Disabled: `#c1c1c1` background, `#ffffff` text
- Use: Primary subscription CTA -- `무료체험 시작하기`, `구독하기`, `읽기`

**Dark (Neutral Solid)**
- Background: `#333333`
- Text: `#ffffff`
- Border: none
- Radius: 4px
- Padding: 0px 12px
- Font: 12px / 400 / Pretendard
- Height: 32px
- Use: Compact chrome actions -- `로그인`, header utility buttons

**Outline (Blue Border)**
- Background: `#ffffff`
- Text: `#1b6dda`
- Border: 1px solid `#1b6dda`
- Radius: 8px
- Padding: 14px 20px
- Font: 16px / 600 / Pretendard
- Hover: `#f2f6fd` background
- Use: Secondary CTA -- `책장에 담기`, `샘플 읽기`

**Neutral (Gray Fill)**
- Background: `#f2f2f2`
- Text: `#333333`
- Border: none
- Radius: 8px
- Padding: 12px 16px
- Font: 14px / 500 / Pretendard
- Hover: `#ececec` background
- Use: Tertiary actions -- share, filter open, more options

### Inputs

**Default**
- Background: `#ffffff`
- Text: `#242424`
- Border: 1px solid `#ececec`
- Radius: 8px
- Padding: 12px 14px
- Font: 14px / 400 / Pretendard
- Placeholder: `#c1c1c1`
- Focus: 1px solid `#1b6dda`
- Use: Default text input -- login, search-detail forms

**Search**
- Background: `#f2f2f2`
- Text: `#242424`
- Border: none
- Radius: 8px
- Padding: 12px 16px 12px 40px (left-pad for inline magnifier)
- Font: 14px / 400 / Pretendard
- Placeholder: `#8b8b8b` ("제목, 저자, 출판사 검색")
- Focus: `#ffffff` background, 1px solid `#1b6dda` border
- Use: Header / discovery search bar

**Error**
- Background: `#ffffff`
- Text: `#242424`
- Border: 1px solid `#ff5b4f`
- Radius: 8px
- Padding: 12px 14px
- Font: 14px / 400 / Pretendard
- Use: Form validation failure -- helper text 13px/400 `#ff5b4f` below

### Cards

**Book Cover Tile**
- Background: `#f2f2f2` (placeholder behind cover art)
- Border: none
- Radius: 6px
- Padding: 0px on cover; 8px gap to title/author metadata
- Image: portrait cover (~2:3), 6px radius, soft `0px 2px 8px rgba(0,0,0,0.08)` shadow
- Use: Default book unit in the feed grid -- the primary content surface

**Feed Card (Editorial)**
- Background: `#ffffff` (or full-bleed cover-derived gradient)
- Border: none
- Radius: 12px
- Padding: 0px (image) / 16px (text block)
- Shadow: none
- Use: Curated "투데이" feed promotions, original-content banners

**Audiobook Card**
- Background: `#ffffff`
- Border: 1px solid `#ececec`
- Radius: 12px
- Padding: 16px
- Use: Audiobook entry with play affordance -- purple `#a451f7` play-button accent

### Badges & Tags

**Category Tab (Active)**
- Background: `#333333`
- Text: `#ffffff`
- Border: none
- Radius: 10px
- Padding: 0px 10px
- Font: 14px / 600 / Pretendard
- Height: 32px
- Use: Active genre/category filter ("종합", "소설", "경제경영")

**Category Tab (Inactive)**
- Background: `#f2f2f2`
- Text: `#6f6f6f`
- Border: none
- Radius: 10px
- Padding: 0px 10px
- Font: 14px / 400 / Pretendard
- Height: 32px
- Use: Inactive genre/category filter

**Original Tag (Purple)**
- Background: `#a451f7`
- Text: `#ffffff`
- Border: none
- Radius: 4px
- Padding: 3px 6px
- Font: 11px / 700 / Pretendard
- Use: "밀리 오리지널" original-content flag

**Promotion Tag (Coral)**
- Background: `#ff5b4f`
- Text: `#ffffff`
- Border: none
- Radius: 4px
- Padding: 3px 6px
- Font: 11px / 700 / Pretendard
- Use: "오늘만", time-limited promotion flag. Used scarcely.

**Rating (Yellow)**
- Background: transparent
- Text: `#ffc004` (star fill) + `#6f6f6f` (count)
- Border: none
- Radius: 0px
- Padding: 0px
- Font: 13px / 400 / Pretendard
- Use: Star rating + review count on book detail

### Pill Control

**Floating Pill (Scrim)**
- Background: `rgba(0,0,0,0.3)`
- Text: `#ffffff`
- Border: none
- Radius: 100px
- Padding: 4px 10px
- Font: 16px / 400 / Pretendard
- Use: "자동 재생 중지", carousel position indicator over imagery

### Navigation
- Top header: `#ffffff` background, ~56px height, no heavy border. Wordmark left (밀리의서재), search + utility right.
- Category nav: horizontal-scroll genre tabs, 14px, active = `#333` fill / 10px radius, inactive = `#f2f2f2` fill.
- Bottom tab bar (mobile): 4-5 items -- `투데이`, `검색`, `내 서재`, `더보기`. Active label `#1b6dda` / icon filled, inactive `#8b8b8b`. Reading blue marks the active tab.

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Scale: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 56px
- Global gutter (mobile): 16px each side
- Global gutter (desktop): 20-24px each side, max content width ~1080px
- Inter-cover horizontal spacing: 12px between covers in a shelf carousel
- Inter-section vertical spacing: 32-40px between feed sections on "투데이"

### Grid & Container
- Mobile: horizontal cover carousels (3-3.5 covers visible) stacked vertically into feed sections
- Tablet: 4-5 covers per shelf
- Desktop: 6-7 covers per shelf, centered ~1080px column
- The feed is the homepage -- a vertical stack of horizontally-scrolling shelves, streaming-service style
- Detail pages: single-column, cover + metadata + description + reviews

### Whitespace Philosophy
- **Covers breathe in shelves**: Horizontal gaps between covers (12px) and vertical gaps between shelves (32-40px) are the system's primary rhythm.
- **Comfortable, not dense**: Evening phone browsing earns generous leading and section gaps — Millie is a leisure habit, not a productivity tool.
- **Let the cover lead**: Chrome padding stays minimal so the cover art dominates each tile.

### Border Radius Scale
- Subtle (4px): Buttons (dark/compact), small tags
- Standard (6px): Book cover tiles
- Comfortable (8px): Primary buttons, inputs, neutral chips
- Soft (10px): Category tabs
- Large (12px): Feed cards, audiobook cards
- Pill (100px): Floating scrim controls, carousel indicators

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, feed sections, default chrome |
| Cover (Level 1) | `0px 2px 8px rgba(0,0,0,0.08)` | Book cover tiles — the signature lift that makes covers feel physical |
| Soft (Level 2) | `0px 2px 12px rgba(0,0,0,0.10)` | Sticky header on scroll, dropdown menus |
| Floating (Level 3) | `0px 4px 16px rgba(0,0,0,0.12)` | Bottom sheets, modal dialogs, snackbar |

**Shadow Philosophy**: Millie's signature elevation is the soft drop-shadow under each book cover — it makes a flat thumbnail feel like a physical book on a shelf, the one place the system spends shadow generously. Elsewhere, shadows are restrained and neutral (pure-black low-opacity), reserved for elements that must detach from the feed. No brand-tinted shadows.

## 7. Do's and Don'ts

### Do
- Use Reading Blue (`#1b6dda`) for the subscription CTA, active tabs, and links
- Use warm near-black `#242424` for headings and body — not pure `#000`
- Give book covers the signature `0px 2px 8px rgba(0,0,0,0.08)` lift
- Apply secondary accents (purple/coral/yellow) for content organization, scarcely
- Use 10px radius on category tabs, 8px on buttons, 100px on scrim pills
- Build a cover-forward feed of horizontal shelves — streaming-service posture
- Keep type comfortable (14-16px) with generous leading for evening browsing

### Don't
- Don't use the brand blue as decoration — reserve it for interactive elements
- Don't use pure `#000` for body text — warm `#242424` is the brand's softness
- Don't let chrome compete with cover art for color attention
- Don't apply purple/coral/yellow as primary CTA fills — those organize content
- Don't make the layout dense — Millie is leisure reading, not a data dashboard
- Don't drop the cover shadow — flat covers lose the physical-book warmth
- Don't mix sharp 0px corners into chrome — the system is consistently rounded

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <768px | Vertical feed of horizontal cover shelves, bottom tab bar |
| Tablet | 768-1024px | More covers per shelf, optional side margins |
| Desktop | >1024px | Centered ~1080px column, 6-7 covers per shelf, top nav |

### Touch Targets
- Primary CTA buttons: 48px height
- Category tabs: 32px height
- Bottom tab bar items: 56px height
- Book cover tile: full cover + metadata tap area

### Collapsing Strategy
- Desktop multi-shelf grid → mobile single-column vertical feed of carousels
- Filter side-rail → mobile bottom-sheet filter
- Reader (book content) view collapses to full-screen single-column with adjustable type

### Image Behavior
- Book covers: ~2:3 portrait, 6px radius, soft shadow, lazy-loaded with `#f2f2f2` placeholder
- Editorial banners: 16:9 or full-bleed, gradient scrim for text legibility
- Author / publisher logos: square 1:1, small

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Reading Blue (`#1b6dda`)
- CTA Hover: Blue Dark (`#1860c2`)
- Background: Pure White (`#ffffff`)
- Surface fill: Gray 100 (`#f2f2f2`)
- Heading text: Warm Near-Black (`#242424`)
- Body secondary: Gray 600 (`#6f6f6f`)
- Caption: Gray 500 (`#8b8b8b`)
- Placeholder: Gray 400 (`#c1c1c1`)
- Border: Gray 200 (`#ececec`)
- Original tag: Purple (`#a451f7`)
- Promotion tag: Coral (`#ff5b4f`)
- Rating: Yellow (`#ffc004`)

### Example Component Prompts
- "Create a Millie book cover tile: ~2:3 portrait cover with 6px radius and 0px 2px 8px rgba(0,0,0,0.08) shadow on #f2f2f2 placeholder. Below: 8px gap, title 14px Pretendard 600 #242424 (2 lines, ellipsis), 2px gap, author 13px 400 #6f6f6f. Optional purple 밀리 오리지널 tag, 11px/700 #fff on #a451f7, 4px radius."
- "Build a primary subscription CTA: #1b6dda background, white text, 16px weight 700 Pretendard, padding 14px 20px, 8px radius, full-width. Hover #1860c2. Label '무료체험 시작하기'."
- "Design a category tab bar: horizontal scroll, 8px gap, 32px height. Active: #333 bg, white 14px/600, 10px radius, 0 10px padding. Inactive: #f2f2f2 bg, #6f6f6f 14px/400."
- "Create a Millie '투데이' feed section: 22px/700 #242424 section title, 12px gap, horizontal carousel of book cover tiles, 12px inter-cover gap, 32-40px gap to next section."
- "Design a floating carousel control: rgba(0,0,0,0.3) bg, white 16px text, 100px radius, 4px 10px padding, '자동 재생 중지' label."

### Iteration Guide
1. Reading blue `#1b6dda` is the interactive accent — CTA, active tab, links
2. Body and headings are warm `#242424`, never pure `#000`
3. Book covers carry the color; chrome stays neutral white / `#f2f2f2`
4. Secondary accents (purple/coral/yellow) organize content, used scarcely
5. Radius scale: 4px tags, 6px covers, 8px buttons, 10px tabs, 12px feed cards, 100px pills
6. Cover tiles get the signature soft shadow — flat covers lose the physical warmth
7. Comfortable 14-16px type, generous leading — evening phone browsing posture

---

## 10. Voice & Tone

Millie speaks like a friendly librarian-curator who wants reading to feel effortless and a little bit delightful. The voice is warm, encouraging, and lightly playful — reading is positioned as a daily habit and a small luxury, not a chore. Korean copy favors soft, inviting endings (`-요`, `-해요`) and gentle imperatives (`읽어보세요`, `담아두기`) over institutional `-ㅂ니다`. The brand's positioning line leans into habit and small daily growth — *"독서와 무제한 친해지리"* (befriend reading, without limit) — and the slogan *"당신의 일상을 1밀리+"* plays on the brand name as a unit of incremental daily improvement.

| Context | Tone |
|---|---|
| CTAs | Inviting Korean (`무료체험 시작하기`, `지금 읽기`, `내 서재에 담기`) |
| Subscription / paywall | Benefit-forward, low-pressure (`30일 무료로 둘러보세요`). Never `지금 결제하지 않으면 손해!`. |
| Feed section headers | Warm editorial (`지금 인기 있는 책`, `오늘의 추천`, `밀리 오리지널`). |
| Empty states | Gentle + suggestion (`아직 담은 책이 없어요` + `책 둘러보기`). Never `데이터가 없습니다`. |
| Error messages | Blameless + actionable (`잠시 후 다시 시도해 주세요`). No `오류가 발생했습니다` boilerplate. |
| Reading completion | Celebratory but quiet (`완독을 축하해요!`). |
| Notifications | Habit nudges (`오늘 5분만 읽어볼까요?`), low-frequency, friendly. |

**Forbidden phrases.** `지금 결제 안 하면 손해`, `마지막 기회!!!`, `데이터가 없습니다`, `오류가 발생했습니다`, `불편을 드려 죄송합니다`. The brand avoids high-pressure urgency — it sells a calm habit, not a flash deal. Emoji are allowed sparingly in habit nudges and completion celebrations, never in error states or paywall copy.

**Voice samples.**

- `독서와 무제한 친해지리` — Google Play subtitle / brand positioning. <!-- cited: play.google.com Millie listing, 2026-05 -->
- `당신의 일상을 1밀리+` — brand campaign slogan playing on the brand name. <!-- cited: millie.insight.wanted.co.kr, 2026-05 -->
- `밀리 오리지널` — original-content section label. <!-- illustrative: standard Millie content-category pattern -->
- `완독을 축하해요!` — reading-completion celebration. <!-- illustrative: standard Millie habit-loop pattern -->
- `무료체험 시작하기` — primary subscription CTA. <!-- illustrative: standard Millie CTA pattern -->

## 11. Brand Narrative

Millie's Library (밀리의서재) launched in 2017 as Korea's first e-book subscription service — an "unlimited reading" model that let members read across a deep catalog of books, magazines, and (increasingly) audiobooks for a flat monthly fee. The premise rejected the per-title purchase model that had kept Korean digital reading niche, reframing reading as a streaming-style subscription habit. The home experience is built around discovery and personalization rather than a static catalog, which is why "투데이" (Today) — a curated, cover-forward feed — is the default tab rather than a search box ([play.google.com — 밀리의 서재](https://play.google.com/store/apps/details?id=kr.co.millie.millieshelf), [namu.wiki — 밀리의 서재](https://namu.wiki/w/%EB%B0%80%EB%A6%AC%EC%9D%98%20%EC%84%9C%EC%9E%AC)).

The company grew into the dominant Korean reading-subscription platform and was acquired by **KT** (operated as ㈜kt 밀리의서재), anchoring it inside a major Korean telecom while it expanded into original content, audiobooks, and "밀리 오리지널" exclusives ([millie.town — corporate](https://www.millie.town/)). The brand voice and campaign work consistently lean into the idea of reading as a small, compounding daily habit — captured in the slogan *"당신의 일상을 1밀리+"*, which turns the brand name into a unit of incremental daily growth ([millie.insight.wanted.co.kr](https://millie.insight.wanted.co.kr/)).

What Millie refuses: the cold catalog UX of legacy e-book stores, the high-pressure urgency of flash-sale commerce, and the institutional seriousness that makes reading feel like homework. Instead it borrows the warm, personalized, cover-forward posture of a video-streaming home screen and points it at books — soft rounded chrome, a calm reading blue, warm near-black type, and a feed that makes the next book always one scroll away.

## 12. Principles

1. **The feed is the front door.** The default surface is a personalized, cover-forward "투데이" feed, not a search box or a static catalog. *UI implication:* discovery surfaces lead with curated shelves; search is a tool, not the home.
2. **Covers carry the color.** Book cover art is the chromatic event; chrome stays neutral white and `#f2f2f2`. *UI implication:* never tint chrome to compete with covers; the brand blue appears only on interactive elements.
3. **Warm, not clinical.** Body and headings use warm near-black `#242424`, chrome is softly rounded, and shadows make covers feel physical. *UI implication:* never substitute pure `#000` for body text; never flatten the cover shadow.
4. **Calm over urgency.** The subscription is sold as a relaxed habit, not a flash deal. *UI implication:* paywall and promo copy stay low-pressure; coral urgency tags are scarce and never aggressive.
5. **Reading blue is interaction, not decoration.** `#1b6dda` marks tappable elements — CTA, active tab, links. *UI implication:* if blue appears on a non-interactive surface, it has drifted; restate as neutral or a secondary content accent.
6. **A streaming posture for books.** Horizontal cover shelves, autoplay banners, personalized rows — the video-platform pattern reimagined for reading. *UI implication:* default to shelf carousels stacked vertically, not a flat paginated grid.

## 13. Personas

*Personas are fictional archetypes informed by Millie's publicly described user base (Korean adults building a digital reading habit across e-books and audiobooks), not individual people.*

**지은 (Jieun), 32, Seoul.** Marketing manager, commutes 40 minutes each way. Listens to audiobooks on the subway, reads e-books before bed. Opens the "투데이" feed nightly to see what's recommended. Subscribed after the 30-day free trial and never cancelled — the flat fee removed the friction of choosing what to buy.

**현수 (Hyunsoo), 45, Daejeon.** Office worker and father of two. Reads business and self-development titles; tracks his completion count like a fitness streak. Responds to gentle "오늘 5분만 읽어볼까요?" nudges. Values the warm, uncluttered interface — he finds dense catalog apps stressful.

**유리 (Yuri), 24, Seoul.** University student. Came for the magazines and 밀리 오리지널 exclusives, stayed for the audiobooks she plays while studying. Browses entirely on her phone, treats the cover feed like a Netflix home screen for books.

**민재 (Minjae), 28, Busan.** Software engineer. Skeptical of subscription creep but kept Millie because the unlimited model means he never hesitates to start a book he might abandon. Reads fiction in the reader view with a custom type size and a warm sepia background.

## 14. States

| State | Treatment |
|---|---|
| **Empty (empty 내 서재)** | Single gentle line (`아직 담은 책이 없어요`) in 14px/400 `#6f6f6f`, 12px gap, primary-blue CTA `책 둘러보기`. No harsh empty illustration — optionally a soft small graphic. |
| **Empty (search no results)** | One line `'{검색어}'에 대한 결과가 없어요` in 14px/400 `#6f6f6f`, then recommended shelves below. Never a full-screen dead-end. |
| **Empty (filter cleared)** | `조건에 맞는 책이 없어요` in 14px/400 `#8b8b8b`. No CTA — user adjusts filters. |
| **Loading (feed)** | Skeleton shelves at `#f2f2f2`: cover-rectangle placeholders in a row, two short text lines below each. Shimmer 1.2s, 6% white highlight. No spinner overlay. |
| **Loading (cover art)** | `#f2f2f2` placeholder rectangle at the cover's 2:3 ratio with 6px radius until the image resolves. |
| **Loading (subscribe action)** | Primary button text swaps to a 24px `#ffffff` spinner on the `#1b6dda` button — geometry unchanged for frame-stability. |
| **Error (inline form)** | Input border becomes `#ff5b4f` 1px, helper text 13px/400 `#ff5b4f` below. One actionable sentence (`이메일을 다시 확인해 주세요`). |
| **Error (toast)** | `#242424` background, white 14px/500 text, 8px radius, 3s auto-dismiss. Bottom of screen, 16px above bottom tab bar. One sentence. No icon. |
| **Error (network / blocking)** | Centered: 16px/700 `#242424` headline (`연결이 불안정해요`), 14px/400 `#6f6f6f` subline, retry button in primary-blue style. |
| **Success (added to library)** | Bottom snackbar: `#242424` bg, white 14px/500 `내 서재에 담았어요`, blue-text `보러가기` button on right. 3s auto-dismiss. |
| **Success (book completed)** | Quiet celebration screen / sheet: `완독을 축하해요!` 22px/700 `#242424`, completion stat, optional share. Low-key, not confetti-heavy. |
| **Skeleton** | `#f2f2f2` blocks at exact cover and text dimensions. Shimmer 1.2s. Title and author slots blank until resolved. |
| **Disabled** | Button bg drops to `#c1c1c1`, text stays `#ffffff`. No outline tricks. |

## 15. Motion & Easing

**Durations** (named, not raw milliseconds):

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle flips, checkbox states |
| `motion-fast` | 150ms | Hover, focus, button press dim, small reveals |
| `motion-standard` | 240ms | Default — shelf scroll snaps, tab switches, card expand |
| `motion-slow` | 360ms | Sheet presentations, completion-screen entry |
| `motion-page` | 300ms | Route push/pop |
| `motion-autoplay` | 5000ms | "투데이" hero-banner autoplay dwell |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Sheets, snackbars, route entries |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals, snackbar auto-close |
| `ease-standard` | `cubic-bezier(0.4, 0.0, 0.2, 1)` | Two-way transitions — expandable cards, tab content |
| `ease-gentle-spring` | `cubic-bezier(0.34, 1.2, 0.64, 1)` | Reserved — completion celebration, "담기" confirm bounce. Gentle, never bouncy. |

**Signature motions.**

1. **Hero autoplay.** The "투데이" hero banner cross-fades between promotions on `motion-autoplay` dwell; a floating `rgba(0,0,0,0.3)` pill (`자동 재생 중지`) lets users pause. Transition is a soft cross-fade with `ease-standard`, never a hard cut.
2. **Cover-to-detail.** Tapping a cover lifts it (`scale 1.0 → 1.02`, `motion-fast`) then transitions into the detail view (`motion-page / ease-enter`); the cover shadow deepens slightly to imply pick-up.
3. **Add-to-library confirm.** A small gentle-spring bounce on the bookmark icon (`ease-gentle-spring`) plus the snackbar — the one place spring is licensed, and only gently.
4. **Shelf scroll.** Horizontal cover carousels use momentum scroll with soft snap to cover edges (`motion-standard`). No elastic overscroll bounce beyond the OS default.
5. **Reduce motion.** Under `prefers-reduced-motion: reduce`, autoplay pauses by default, all `motion-*` collapse to `motion-instant`, and cross-fades replace slides. The feed stays fully usable.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 — Direct verification (MCP playwright, 2026-05-27):
- https://www.millie.co.kr/ (live "투데이" home surface). Confirmed:
  body font-family "Pretendard Variable", "Pretendard Fallback", ...;
  body color rgb(36,36,36) = #242424 (dominant, ~3,416 occurrences);
  body bg #ffffff; interactive blue rgb(27,109,218) = #1b6dda
  (~66 occurrences); secondary accents purple rgb(164,81,247) = #a451f7,
  coral rgb(255,91,79) = #ff5b4f, yellow rgb(255,192,4) = #ffc004;
  surface fill #f2f2f2; border #ececec; login chip #333 bg / 4px radius;
  category tab #333 bg / 10px radius / 14px·600; floating scrim pill
  rgba(0,0,0,0.3) / 100px radius.

Tier 2 — Press / secondary (WebSearch, 2026-05):
- https://play.google.com/store/apps/details?id=kr.co.millie.millieshelf
  — "독서와 무제한 친해지리" positioning; reading-subscription model.
- https://www.millie.town/ — corporate (㈜kt 밀리의서재), KT ownership.
- https://millie.insight.wanted.co.kr/ — "당신의 일상을 1밀리+" slogan.
- https://namu.wiki/w/밀리의 서재 — Korea's largest reading platform,
  e-books / audiobooks / magazines, 밀리 오리지널 originals.

ASSUMED-VS-VERIFIED NOTE: The task brief assumed primary blue #3D5AFE.
Live inspect found the dominant interactive blue is #1b6dda
(rgb(27,109,218)), NOT #3D5AFE. The DESIGN.md uses the live-verified
#1b6dda as primary_color. The assumed #3D5AFE does not appear as a
dominant token on the current live surface.

Personas (§13) are fictional archetypes informed by Millie's publicly
described user base (Korean adults building a digital reading habit).
Any resemblance to specific individuals is unintended.

Interpretive claims (editorial, not documented Millie statements):
- "A streaming posture for books" framing (§11, §12) — editorial reading
  of the cover-forward "투데이" feed pattern.
- The 6 numbered principles (§12) — synthesized from observed surface
  behavior + brand positioning; not a published design-principles list.
- Component-internal geometry beyond the observed tokens (button padding,
  card radii, shadow values) is reconciled from the live rounded-chrome
  surface treatment; re-verify in a stable session before treating as
  authoritative DS specs.
- The spring stance (§15) — derived from the calm brand posture, not a
  documented Millie motion rule.
-->

---

**Verified:** 2026-05-27 (omd:add-reference initial create — Tier 1 live inspect / Tier 2 press confirmed)
**Tier 1 sources:** www.millie.co.kr ("투데이" live playwright inspect — Pretendard Variable, body `#242424` on `#fff`, interactive blue `#1b6dda`, secondary purple `#a451f7` / coral `#ff5b4f` / yellow `#ffc004`, surface `#f2f2f2`, border `#ececec`, category tab `#333`/10px, scrim pill 100px).
**Tier 2 sources:** getdesign.md/millie — not checked. styles.refero.design — not checked. Google Play + millie.town + Wanted Insight + Namu Wiki (2017 reading-subscription launch, KT ownership, "독서와 무제한 친해지리" / "당신의 일상을 1밀리+" positioning, 밀리 오리지널).
**Style ref:** `toss` (KR product tone scaffolding).
**Conflicts unresolved:** Assumed primary `#3D5AFE` (from task brief) NOT confirmed — live inspect found dominant interactive blue `#1b6dda`. Resolved in favor of Tier 1 live value `#1b6dda`. Component-internal geometry reconciled from surface treatment; re-run Tier 2 (getdesign/refero) to lock token values.
