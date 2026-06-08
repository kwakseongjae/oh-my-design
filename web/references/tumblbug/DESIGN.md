---
id: tumblbug
name: Tumblbug
display_name_kr: 텀블벅
country: KR
category: consumer-tech
homepage: "https://tumblbug.com"
primary_color: "#fd5744"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=tumblbug.com&sz=128"
verified: "2026-05-27"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#fd5744"
    primary-hover: "#f86453"
    primary-pressed: "#e53c41"
    canvas: "#ffffff"
    foreground: "#000000"
    gray-900: "#1c1c1c"
    gray-800: "#3d3d3d"
    gray-600: "#545454"
    gray-500: "#6d6d6d"
    gray-400: "#9e9e9e"
    border: "#e4e4e4"
    surface: "#f0f0f0"
    gray-50: "#f6f6f6"
    error: "#e53c41"
  typography:
    family: { sans: "Pretendard", mono: "Pretendard" }
    display:       { size: 28, weight: 700, lineHeight: 38, tracking: -0.4, use: "Editorial banner / featured project title" }
    heading-lg:    { size: 22, weight: 700, lineHeight: 30, tracking: -0.4, use: "Section header" }
    heading:       { size: 18, weight: 700, lineHeight: 26, tracking: -0.3, use: "Project detail title, sub-section" }
    title:         { size: 16, weight: 700, lineHeight: 24, tracking: -0.3, use: "Card project title" }
    body-lg:       { size: 16, weight: 400, lineHeight: 24, tracking: -0.2, use: "Project story body" }
    body:          { size: 14, weight: 400, lineHeight: 22, tracking: -0.2, use: "Default body, card metadata" }
    body-bold:     { size: 14, weight: 700, lineHeight: 22, tracking: -0.2, use: "Creator name, emphasis, nav" }
    caption:       { size: 13, weight: 400, lineHeight: 18, tracking: -0.2, use: "Days-left, backer count, timestamps" }
    micro:         { size: 12, weight: 500, lineHeight: 16, tracking: -0.2, use: "Fine print, category labels" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48 }
  rounded: { sm: 4, md: 8, lg: 12, full: 9999 }
  shadow:
    none: "none"
  components_harvested: true
  components:
    button-primary: { type: button, bg: "#fd5744", fg: "#ffffff", radius: 9999, padding: "14px 24px", font: "16/700", use: "Primary CTA 후원하기" }
    button-secondary: { type: button, bg: "#000000", fg: "#ffffff", radius: 9999, padding: "14px 24px", font: "16/700", use: "Strong neutral action" }
    button-outline: { type: button, bg: "#ffffff", fg: "#545454", radius: 9999, padding: "11.5px 16px", font: "14/700", use: "Secondary actions, 1px border #e4e4e4" }
    button-ghost: { type: button, fg: "#000000", radius: 9999, padding: "8px 12px", font: "14/700", use: "Inline nav / utility action" }
    input-default: { type: input, bg: "#ffffff", fg: "#000000", radius: 8, padding: "12px 14px", font: "14/400", use: "Default text input, 1px border #e4e4e4" }
    input-search: { type: input, bg: "#f0f0f0", fg: "#000000", radius: 9999, padding: "12px 16px 12px 40px", font: "14/400", use: "Header pill search bar" }
    input-error: { type: input, bg: "#ffffff", fg: "#000000", radius: 8, padding: "12px 14px", font: "14/400", use: "Validation failure, 1px border #e53c41" }
    card-project: { type: card, bg: "#ffffff", radius: 8, use: "Project listing card, thumbnail + funding bar" }
    card-reward: { type: card, bg: "#ffffff", radius: 12, padding: "20px", use: "Pledge-tier reward, selected 1.5px #fd5744" }
    badge-category: { type: badge, bg: "#f0f0f0", fg: "#545454", radius: 9999, padding: "6px 12px", font: "13/700", use: "Category filter chip", active: "bg #000000, text #ffffff" }
    badge-status: { type: badge, bg: "#fd5744", fg: "#ffffff", radius: 4, padding: "3px 6px", font: "11/700", use: "Time-sensitive project flag" }
    badge-new: { type: badge, bg: "#ffffff", fg: "#000000", radius: 4, padding: "3px 6px", font: "11/700", use: "NEW / editor flag, 1px border #000000" }
    tab-bottom: { type: tab, fg: "#9e9e9e", use: "Bottom tab bar", active: "label #000000" }
---

# Design System Inspiration of Tumblbug (텀블벅)

## 1. Visual Theme & Atmosphere

Tumblbug is Korea's flagship creator-crowdfunding platform, and its interface is built to make a creative project feel worth backing -- warm, editorial, and almost entirely black-and-white so that the project's own imagery becomes the color. The page opens on a clean white canvas with pure black type (`#000000`) and a single signature coral (`#fd5744`) that flashes only on the moments that matter: the "후원하기" (back this project) CTA, funding-progress bars, and the percentage a project has raised. Everything else -- the dense card grid, the project thumbnails, the storytelling -- runs in disciplined monochrome, because on a crowdfunding page the creator's work has to be the brightest thing on screen.

The aesthetic is editorial and content-forward, like a curated magazine of independent creative projects. Project cards sit in a clean grid with full-radius pill controls and rounded thumbnails, set in Pretendard at a tight 14px base. The single coral accent does the emotional work: it marks the act of supporting a creator, and it fills the funding-progress bar that turns a project's momentum into a visible, almost suspenseful number (`152% 달성`). The mood is supportive and a little romantic about creativity -- the platform's positioning is that your taste can change the world (`당신의 취향이 세상을 바꿉니다`), and the design treats every project as a small cultural bet worth making.

What defines Tumblbug visually is the warm coral against rigorous black-and-white. The monochrome keeps the platform from competing with the creators' wildly varied project art (films, albums, books, games, illustration), while the coral provides a single consistent emotional cue -- *this is where you back the thing you love.* Pill-shaped buttons and rounded cards keep it friendly and human rather than corporate.

**Key Characteristics:**
- Tumblbug Coral (`#fd5744`) as the signature accent — "후원하기" CTA, funding bars, percentage raised
- Pure black type (`#000000`) on white — monochrome so project art carries the color
- Pretendard at a tight 14px base — editorial, content-forward density
- Pill-shaped buttons (full radius) and rounded cards — warm, human, not corporate
- Funding-progress bar as the signature component — momentum made visible in coral
- Project thumbnails carry all the chromatic variety; chrome stays monochrome
- Supportive, creativity-romantic voice — "당신의 취향이 세상을 바꿉니다"
- Light gray `#f0f0f0` surface fills and hairline `#e4e4e4` borders for grid separation

## 2. Color Palette & Roles

### Primary
- **Tumblbug Coral** (`#fd5744`): The signature accent — "후원하기" CTA, funding-progress bar fill, percentage-raised emphasis, active states (observed `rgb(253,87,68)`, ~65 occurrences).
- **Coral Light** (`#f86453`): Hover / lighter coral variant (observed `rgb(248,100,83)`).
- **Coral Deep** (`#e53c41`): Pressed / deep accent variant (observed `rgb(229,60,65)`).
- **Pure White** (`#ffffff`): Page canvas, card surfaces, button text on coral.
- **Pure Black** (`#000000`): Primary heading + body text, secondary CTA fill (observed dominant — ~5,000+ occurrences).

### Neutral Scale
- **Gray 900** (`#1c1c1c`): Strong secondary text, near-black labels (observed `rgb(28,28,28)`).
- **Gray 800** (`#3d3d3d`): Default body text on light surfaces (observed `rgb(61,61,61)`).
- **Gray 600** (`#545454`): Secondary body, descriptions (observed `rgb(84,84,84)`).
- **Gray 500** (`#6d6d6d`): Metadata, creator name, timestamps (observed `rgb(109,109,109)`).
- **Gray 400** (`#9e9e9e`): Placeholder text, disabled labels (observed `rgb(158,158,158)`).
- **Gray 200** (`#e4e4e4`): Default border, dividers (observed `rgb(228,228,228)`).
- **Gray 100** (`#f0f0f0`): Secondary background, card fill, image placeholder (observed `rgb(240,240,240)`).
- **Gray 50** (`#f6f6f6`): Lightest surface fill (observed `rgb(246,246,246)`).

### Semantic
- **Funding / Success Coral** (`#fd5744`): Funding-progress fill, "달성" success — the brand color doubles as the momentum/success cue.
- **Error Red** (`#e53c41`): Error states, destructive actions (shares the deep-coral family).
- **Soft Veil** (`rgba(0,0,0,0.04)`): Subtle hover / pressed surface tint (observed `oklab(0 0 0 / 0.1)` and `rgba(0,0,0,0.04)`).
- **Scrim Dark** (`rgba(0,0,0,0.5)`): Modal scrim, image overlay (observed `oklab(0 0 0 / 0.5)`).

### Borders
- **Border Default** (`#e4e4e4`): Card outline, divider, input border.
- **Hairline** (`#f0f0f0`): Subtle grid separation.
- **Border Strong** (`#000000`): Selected filter chip, focused input, active tab underline.

## 3. Typography Rules

### Font Family
- **Primary**: `Pretendard, -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", Roboto, sans-serif` (observed body font-family `Pretendard` on live `tumblbug.com`, 2026-05)
- **Design Principle**: No bespoke wordmark webfont on product surfaces. Pretendard at a tight 14px base carries the editorial density; weight contrast (400 / 700) builds hierarchy. Korean and Latin render co-equally. The monochrome type ensures project art is the only color.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display | Pretendard | 28px | 700 | 38px | -0.4px | Editorial banner / featured project title |
| Heading Large | Pretendard | 22px | 700 | 30px | -0.4px | Section header ("이번 주 인기 프로젝트") |
| Heading | Pretendard | 18px | 700 | 26px | -0.3px | Project detail title, sub-section |
| Title | Pretendard | 16px | 700 | 24px | -0.3px | Card project title |
| Body Large | Pretendard | 16px | 400 | 24px | -0.2px | Project story body |
| Body | Pretendard | 14px | 400 | 22px | -0.2px | Default body, card metadata |
| Body Bold | Pretendard | 14px | 700 | 22px | -0.2px | Creator name, emphasis, nav |
| Funding % | Pretendard | 16px | 700 | tight | -0.2px | "152% 달성" — coral, tabular |
| Caption | Pretendard | 13px | 400 | 18px | -0.2px | Days-left, backer count, timestamps |
| Caption Bold | Pretendard | 13px | 700 | 18px | -0.2px | Tag / badge labels |
| Micro | Pretendard | 12px | 500 | 16px | -0.2px | Fine print, category labels |

### Principles
- **Tight editorial base**: Body defaults to 14px with `-0.2px` tracking — denser than a consumer app, optimized for scanning a magazine grid of projects.
- **Two weights do the work**: Pretendard 400 (body) and 700 (titles / creator names / emphasis). The system trusts weight, not size, for hierarchy.
- **Funding numbers are typography**: The percentage raised renders in 700 coral with tabular figures — it's the most-glanced, most-emotional data on a card.
- **Monochrome type**: All text is black/gray except the funding percentage and links — color is reserved so project art and the coral CTA own the chromatic attention.
- **Tight Korean tracking**: `-0.2px` to `-0.4px` keeps titles editorial-compact.

## 4. Component Stylings

### Buttons

**Primary (Coral, Pill)**
- Background: `#fd5744`
- Text: `#ffffff`
- Border: none
- Radius: 9999px (full pill)
- Padding: 14px 24px
- Font: 16px / 700 / Pretendard
- Hover: `#f86453`
- Pressed: `#e53c41`
- Disabled: `#e4e4e4` background, `#9e9e9e` text
- Use: Primary CTA — `후원하기`, `프로젝트 후원하기`, `이 리워드 선택`

**Secondary (Black, Pill)**
- Background: `#000000`
- Text: `#ffffff`
- Border: none
- Radius: 9999px (full pill)
- Padding: 14px 24px
- Font: 16px / 700 / Pretendard
- Hover: `#1c1c1c`
- Use: Strong neutral action — `프로젝트 올리기`, `로그인`

**Outline (Gray, Pill)**
- Background: `#ffffff`
- Text: `#545454`
- Border: 1px solid `#e4e4e4`
- Radius: 9999px (full pill)
- Padding: 11.5px 16px
- Font: 14px / 700 / Pretendard
- Hover: `#f6f6f6` background
- Use: Secondary actions — `창작자센터`, `공유하기`, `팔로우`

**Ghost (Text)**
- Background: transparent
- Text: `#000000`
- Border: none
- Radius: 9999px
- Padding: 8px 12px
- Font: 14px / 700 / Pretendard
- Hover: `rgba(0,0,0,0.04)` background
- Use: Inline nav / utility action

### Inputs

**Default**
- Background: `#ffffff`
- Text: `#000000`
- Border: 1px solid `#e4e4e4`
- Radius: 8px
- Padding: 12px 14px
- Font: 14px / 400 / Pretendard
- Placeholder: `#9e9e9e`
- Focus: 1px solid `#000000`
- Use: Default text input — login, project-create forms

**Search**
- Background: `#f0f0f0`
- Text: `#000000`
- Border: none
- Radius: 9999px (pill search bar)
- Padding: 12px 16px 12px 40px (left-pad for inline magnifier)
- Font: 14px / 400 / Pretendard
- Placeholder: `#6d6d6d` ("프로젝트, 창작자 검색")
- Focus: `#ffffff` background, 1px solid `#000000` border
- Use: Header search bar — pill-shaped to match the friendly chrome

**Error**
- Background: `#ffffff`
- Text: `#000000`
- Border: 1px solid `#e53c41`
- Radius: 8px
- Padding: 12px 14px
- Font: 14px / 400 / Pretendard
- Use: Form validation failure — helper text 13px/400 `#e53c41` below

### Cards

**Project Card**
- Background: `#ffffff`
- Border: none (hairline `#f0f0f0` at grid boundary)
- Radius: 8px (rounded thumbnail + card)
- Padding: 0px on image; 8-10px gap to metadata
- Image: 4:3 or 1:1 thumbnail, 8px radius, `#f0f0f0` placeholder
- Shadow: none
- Use: Default project listing card — thumbnail, title, creator, funding % + bar

**Featured Card (Editorial)**
- Background: `#ffffff` (or full-bleed project image)
- Border: none
- Radius: 12px
- Padding: 0px (image) / 16px (text block)
- Use: Curated home-feed spotlight, "에디터의 선택"

**Reward Card**
- Background: `#ffffff`
- Border: 1px solid `#e4e4e4`
- Radius: 12px
- Padding: 20px
- Selected: 1.5px solid `#fd5744`
- Use: Pledge-tier / reward selection on the project page

### Funding Progress Bar

**Progress Bar (signature component)**
- Track: `#f0f0f0`
- Fill: `#fd5744`
- Border: none
- Radius: 9999px (pill track + fill)
- Height: 6-8px
- Accompanying label: percentage in 16px/700 `#fd5744` tabular ("152% 달성"), backer count + days-left in 13px/400 `#6d6d6d`
- Use: The emotional heart of every project card and detail page — momentum made visible

### Badges & Tags

**Category Tag (Default)**
- Background: `#f0f0f0`
- Text: `#545454`
- Border: none
- Radius: 9999px (pill)
- Padding: 6px 12px
- Font: 13px / 700 / Pretendard
- Use: Category filter chips (출판, 게임, 음악, 디자인)

**Category Tag (Selected)**
- Background: `#000000`
- Text: `#ffffff`
- Border: none
- Radius: 9999px (pill)
- Padding: 6px 12px
- Font: 13px / 700 / Pretendard
- Use: Active category filter

**Status Flag (Coral)**
- Background: `#fd5744`
- Text: `#ffffff`
- Border: none
- Radius: 4px
- Padding: 3px 6px
- Font: 11px / 700 / Pretendard
- Use: "오픈예정", "마감임박" time-sensitive project flags

**New / Editor Flag**
- Background: `#ffffff`
- Text: `#000000`
- Border: 1px solid `#000000`
- Radius: 4px
- Padding: 3px 6px
- Font: 11px / 700 / Pretendard
- Use: "NEW", "에디터의 선택" — outline keeps the thumbnail dominant

### Navigation
- Top header: `#ffffff` background, ~64px height, hairline bottom border. Wordmark left (텀블벅), pill search center, `창작자센터` outline-pill + profile right.
- Category nav: horizontal pill chips (홈 / 인기 / 신규 / 마감임박 / 카테고리), 14px/700, active = black-fill pill.
- Bottom tab bar (mobile): `홈`, `검색`, `찜`, `마이`. Active label `#000000`, inactive `#9e9e9e`. Weight + black do the work; coral is reserved for the funding CTA.

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Scale: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 56px
- Global gutter (mobile): 16px each side
- Global gutter (desktop): 20-24px each side, max content width ~1200px
- Inter-card spacing: 16-24px between project cards in the grid
- Inter-section vertical spacing: 40-56px between editorial feed blocks

### Grid & Container
- Mobile: 1-2 column project grid
- Tablet: 2-3 column project grid
- Desktop: 3-4 column project grid, centered ~1200px column
- Editorial spotlight: full-bleed on mobile, max 1200px on desktop
- The project grid is the homepage — a curated magazine of creative projects

### Whitespace Philosophy
- **Thumbnails breathe**: White space between project cards is the primary rhythm — the monochrome chrome lets each thumbnail stand out.
- **Editorial sections earn space**: 40-56px gaps mark curated shifts; within a section 16-24px suffices.
- **The funding bar gets focus**: The progress bar + percentage sit with clear space so the momentum reads at a glance.

### Border Radius Scale
- Subtle (4px): Status flags, small badges
- Standard (8px): Project cards, thumbnails, inputs
- Soft (12px): Featured cards, reward cards
- Pill (9999px): Buttons, category chips, search bar, funding-progress bar
- Note: Tumblbug is a *friendly-rounded* system — full-pill buttons and chips keep it human and warm, distinct from corporate sharp-corner platforms.

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, project thumbnails, default state |
| Hairline (Level 1) | 1px solid `#f0f0f0` / `#e4e4e4` | Card / grid separation, header border |
| Soft (Level 2) | `0px 2px 8px rgba(0,0,0,0.06)` | Sticky header on scroll, dropdown menus |
| Floating (Level 3) | `0px 4px 16px rgba(0,0,0,0.10)` | Bottom sheets, modal dialogs, snackbar |

**Shadow Philosophy**: Tumblbug keeps elevation minimal. Project thumbnails have no shadow — their boundary is the rounded image edge against white. Shadows appear only when an element must detach (sticky bar, modal). No brand-tinted shadows; the coral lives in fills and the funding bar, not in depth. Editorial restraint keeps the creators' project art dominant.

## 7. Do's and Don'ts

### Do
- Use Tumblbug Coral (`#fd5744`) for the "후원하기" CTA, funding bars, and percentage raised
- Keep type monochrome (black/gray) — let project thumbnails be the color
- Use full-pill radius on buttons, chips, and the search bar — friendly and human
- Render the funding percentage in 700 coral with tabular figures
- Default project cards to 8px rounded thumbnails on white, no shadow
- Use black-fill pills for selected category chips and strong neutral CTAs
- Give the funding-progress bar clear space — momentum at a glance

### Don't
- Don't introduce a second brand hue — coral is the only accent
- Don't put coral on body text, navigation, or decoration — funding actions only
- Don't sharpen buttons to 0-4px corners — full-pill is the friendly brand signal
- Don't add shadows to project thumbnails — they compete with the art
- Don't let chrome color compete with the project imagery
- Don't bump body above 14-16px — the editorial grid wants density
- Don't use coral for errors as decoration — reserve it for funding momentum

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <768px | 1-2 column grid, pill search, bottom tab bar |
| Tablet | 768-1024px | 2-3 column grid, side filters appear |
| Desktop | >1024px | 3-4 column grid, max ~1200px, persistent category nav |

### Touch Targets
- Primary CTA pill: 48-52px height
- Category chips: 36-40px height
- Bottom tab items: 56px height
- Project card: full card (thumbnail + metadata) tap area

### Collapsing Strategy
- Desktop side filters → mobile bottom-sheet filter
- Desktop 4-column grid → mobile 1-2 column grid
- Project detail: desktop two-column (story + sticky reward sidebar) → mobile single-column with sticky bottom coral CTA

### Image Behavior
- Project thumbnails: 4:3 or 1:1, 8px radius, lazy-loaded with `#f0f0f0` placeholder
- Creator avatars: circular, 32-40px
- Editorial covers: 16:9 or full-bleed, scrim for overlaid text

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Tumblbug Coral (`#fd5744`)
- CTA Hover: Coral Light (`#f86453`)
- CTA Pressed: Coral Deep (`#e53c41`)
- Background: Pure White (`#ffffff`)
- Heading text: Pure Black (`#000000`)
- Body text: Gray 800 (`#3d3d3d`)
- Metadata: Gray 500 (`#6d6d6d`)
- Placeholder: Gray 400 (`#9e9e9e`)
- Border: Gray 200 (`#e4e4e4`)
- Surface fill: Gray 100 (`#f0f0f0`)
- Funding bar fill: Coral (`#fd5744`)
- Funding bar track: Gray 100 (`#f0f0f0`)

### Example Component Prompts
- "Create a Tumblbug project card: white bg, no shadow, 8px radius. 4:3 thumbnail with 8px radius, #f0f0f0 placeholder. Below: 8px gap, creator name 13px/700 #3d3d3d, title 16px/700 #000000 (2 lines, ellipsis), 8px gap, funding bar (track #f0f0f0, fill #fd5744, 6px, pill radius) + '152% 달성' 16px/700 #fd5744 tabular + '32일 남음' 13px/400 #6d6d6d."
- "Build a primary CTA: #fd5744 bg, white text, 16px weight 700 Pretendard, padding 14px 24px, full-pill radius (9999px). Hover #f86453, pressed #e53c41. Label '후원하기'."
- "Design a category chip bar: horizontal scroll, 8px gap. Default: #f0f0f0 bg, #545454 13px/700, full-pill, 6px 12px padding. Selected: #000000 bg, white text."
- "Create a Tumblbug header: white bg, 64px height, hairline bottom border #f0f0f0. Left: 텀블벅 wordmark 700 #000000. Center: pill search #f0f0f0 bg, 9999px radius, placeholder #6d6d6d. Right: 창작자센터 outline-pill (1px #e4e4e4, #545454 14px/700) + profile."
- "Design a funding progress bar: pill track #f0f0f0 6px tall, coral #fd5744 fill, percentage label '78% 달성' in 16px/700 #fd5744 tabular, backer count + days-left in 13px/400 #6d6d6d below."

### Iteration Guide
1. Coral `#fd5744` is the sole accent — 후원하기 CTA, funding bar, percentage raised
2. Type is monochrome black/gray; project thumbnails carry the color
3. Full-pill radius on buttons, chips, search bar — friendly and human
4. Funding percentage: 700 weight, coral, tabular figures
5. Project cards: 8px rounded thumbnails on white, no shadow
6. Body 14px tight `-0.2px` tracking — editorial grid density
7. Black-fill pills for selected chips and strong neutral CTAs

---

## 10. Voice & Tone

Tumblbug speaks like an encouraging curator who believes in independent creators and wants you to believe too — warm, supportive, and a little romantic about the power of taste and culture. The voice celebrates the creator and invites the backer into a shared bet on something new. Korean copy uses friendly, inviting endings (`-요`, `-해요`) and warm imperatives (`후원하기`, `프로젝트 올리기`). The platform's positioning — *당신의 취향이 세상을 바꿉니다* (your taste changes the world) — frames backing a project as a small act of cultural participation, not a transaction.

| Context | Tone |
|---|---|
| CTAs | Warm Korean (`후원하기`, `프로젝트 올리기`, `이 리워드 선택`, `팔로우`) |
| Funding status | Encouraging momentum (`152% 달성`, `32일 남음`, `1,204명이 후원했어요`). |
| Creator invitation | Inspiring, low-barrier (`좋은 아이디어를 가지고 있으신가요?`). |
| Empty states | Gentle + suggestion (`아직 찜한 프로젝트가 없어요` + `프로젝트 둘러보기`). Never `데이터가 없습니다`. |
| Error messages | Blameless + actionable (`다시 시도해 주세요`). No `오류가 발생했습니다` boilerplate. |
| Project story | Creator's own voice — the platform stays out of the way, lets makers sound like makers. |
| Pledge confirmation | Celebratory + grateful (`후원해 주셔서 감사해요!`). |

**Forbidden phrases.** `대박 펀딩!!!`, `지금 안 하면 후회`, `초대박 프로젝트`, `데이터가 없습니다`, `오류가 발생했습니다`, `불편을 드려 죄송합니다`. The brand sells creative participation, not hype or scarcity-pressure. Emoji are welcome in creator stories and community, but not in error states or chrome microcopy.

**Voice samples.**

- `크리에이터를 위한 크라우드펀딩` — homepage / product positioning. <!-- cited: live tumblbug.com, 2026-05 -->
- `당신의 취향이 세상을 바꿉니다` — Google Play subtitle / brand slogan. <!-- cited: play.google.com Tumblbug listing, 2026-05 -->
- `좋은 아이디어를 가지고 있으신가요?` — creator-invitation prompt. <!-- cited: tumblbug.com homepage, 2026-05 -->
- `후원하기` — primary back-this-project CTA. <!-- illustrative: standard Tumblbug CTA pattern -->
- `152% 달성` — funding-progress label. <!-- illustrative: standard Tumblbug funding-status pattern -->

## 11. Brand Narrative

Tumblbug (텀블벅) is Korea's leading creator-focused crowdfunding platform, where cultural creators across film, music, art, publishing, illustration, design, games, and more present projects and supporters pledge to fund them ([en.namu.wiki — Tumblbug](https://en.namu.wiki/w/%ED%85%80%EB%B8%94%EB%B2%85), [e27.co — Tumblbug profile](https://e27.co/startups/tumblbug/)). Where Western crowdfunding skews toward gadgets and hardware, Tumblbug built its identity around independent *creative* and cultural work — a magazine of art-and-culture projects you can help bring into the world. The platform's tagline frames the act of backing as cultural agency: *당신의 취향이 세상을 바꿉니다* — your taste changes the world ([play.google.com — 텀블벅](https://play.google.com/store/apps/details?id=com.tumblbug.app)).

The design follows from that creative-first positioning. Because the projects span every visual genre imaginable — a graphic novel, an indie album, a board game, a documentary — the platform itself stays monochrome so it never clashes with the creators' art. The single warm coral `#fd5744` provides one consistent emotional cue: the funding-progress bar and the "후원하기" button, the two moments where a backer's support turns into a project's momentum. Full-pill buttons and rounded thumbnails keep the chrome friendly and human, matching a community built on enthusiasm rather than commerce.

What Tumblbug refuses: the gadget-catalog feel of hardware crowdfunding, the cold conversion-optimized urgency of e-commerce, and any chrome that competes with the creator's work. Its bet is emotional — that people will fund culture they believe in — and the design's job is to make that belief visible: the project art front and center, the momentum rising in coral, and one warm button that says *back this.*

## 12. Principles

1. **The creator's work is the color.** The platform is monochrome so project art across every genre stands out. *UI implication:* keep chrome black/white; never tint it to compete with thumbnails.
2. **One coral, for momentum.** `#fd5744` marks the funding bar, the percentage, and the back-this CTA — the moments of support. *UI implication:* if coral appears on navigation or decoration, it has drifted; reserve it for funding actions.
3. **Momentum made visible.** The funding-progress bar and percentage are the emotional heart of every card. *UI implication:* the bar gets clear space and the percentage renders in 700 coral tabular — never bury the momentum.
4. **Friendly, human chrome.** Full-pill buttons and rounded cards signal a creative community, not a corporate store. *UI implication:* default buttons and chips to pill radius; sharp corners read as transactional.
5. **The platform stays out of the way.** In project stories, the creator's voice and imagery lead. *UI implication:* storytelling surfaces minimize chrome and let makers sound like makers.
6. **Belief over urgency.** Backing is framed as cultural participation, not a scarcity-driven purchase. *UI implication:* copy avoids hype and pressure; momentum is shown, never shouted.

## 13. Personas

*Personas are fictional archetypes informed by Tumblbug's publicly described user base (Korean creators and culture-loving backers across art, publishing, music, games, and more), not individual people.*

**소영 (Soyoung), 26, Seoul.** Illustrator funding her first art book on Tumblbug. Spent weeks crafting the project story and reward tiers; refreshes the coral funding bar obsessively as it climbs past 100%. Chose Tumblbug because it's where Korean indie creators and their audiences actually are.

**준영 (Junyoung), 33, Seoul.** Board-game enthusiast and frequent backer. Browses the 마감임박 (ending-soon) section for projects to support before they close. Backs 2-3 projects a month — treats it as collecting culture he believes in, not shopping.

**하늘 (Haneul), 29, Busan.** Indie musician crowdfunding a first album. Shares the project link on Instagram; the monochrome card with the rising coral percentage looks clean in her feed. Values that the platform showcases her cover art rather than burying it in chrome.

**도윤 (Doyoon), 22, Seoul.** University student who discovered Tumblbug through a friend's webcomic project. Backed it for the reward, stayed to browse other creative projects. Reads project stories like a magazine, finds the supportive tone genuinely motivating.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no liked projects)** | Single line (`아직 찜한 프로젝트가 없어요`) in 14px/400 `#545454`, 12px gap, outline-pill CTA `프로젝트 둘러보기`. No harsh empty illustration. |
| **Empty (search no results)** | One line `'{검색어}'에 대한 결과가 없어요` 14px/400 `#545454`, then recommended projects below. Never a dead-end. |
| **Empty (filter cleared)** | `조건에 맞는 프로젝트가 없어요` 14px/400 `#6d6d6d`. No CTA — user adjusts filters. |
| **Loading (project grid)** | Skeleton cards at `#f0f0f0`: thumbnail rectangle (8px radius), title line, a funding-bar placeholder line. Shimmer 1.2s, 6% white highlight. No spinner overlay. |
| **Loading (infinite scroll)** | 2-4 skeleton cards appended at grid bottom. Existing cards stay rendered. No spinner. |
| **Loading (pledge action)** | Coral button text swaps to a 24px `#ffffff` spinner on the existing `#fd5744` pill — geometry unchanged for frame-stability. Prevents double-pledge. |
| **Error (inline form)** | Input border `#e53c41` 1px, helper text 13px/400 `#e53c41` below. One actionable sentence. |
| **Error (toast)** | `#000000` background, white 14px/500 text, 8px radius, 3s auto-dismiss. Bottom of screen. One sentence, no icon. |
| **Error (network / blocking)** | Centered: 16px/700 `#000000` headline, 14px/400 `#6d6d6d` subline, coral retry pill. No illustration. |
| **Success (project liked)** | Bottom snackbar: `#000000` bg, white 14px/500 `찜한 프로젝트에 담았어요`, white-text `보러가기` on right. 3s auto-dismiss. |
| **Success (pledge complete)** | Dedicated confirmation screen: `후원해 주셔서 감사해요!` 22px/700 `#000000`, pledge summary card, the project's updated coral funding bar, `프로젝트 보기` CTA. Warm, grateful — a modest celebration. |
| **Funding goal reached** | The coral funding bar fills past 100%; the percentage label stays coral and may gain a small "달성" status flag. The moment is celebrated quietly on the card, not with confetti spam. |
| **Skeleton** | `#f0f0f0` blocks at exact card dimensions, shimmer 1.2s. Title and funding slots blank until resolved. |
| **Disabled** | Pill bg drops to `#e4e4e4`, text `#9e9e9e`. No outline tricks. |

## 15. Motion & Easing

**Durations** (named, not raw milliseconds):

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle flips, checkbox states |
| `motion-fast` | 150ms | Hover, focus, button press dim, small reveals |
| `motion-standard` | 220ms | Default — card taps, tab switches, dropdown reveals |
| `motion-slow` | 320ms | Sheet presentations, success-screen entry |
| `motion-page` | 280ms | Route push/pop |
| `motion-fund` | 600ms | Funding-bar fill animation on load |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Sheets, snackbars, route entries |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals, snackbar auto-close |
| `ease-standard` | `cubic-bezier(0.4, 0.0, 0.2, 1)` | Two-way transitions — cards, tab content |
| `ease-fund` | `cubic-bezier(0.22, 1, 0.36, 1)` | Funding-bar fill — confident ease-out so momentum reads as it settles |

**Signature motions.**

1. **Funding-bar fill.** On a card / detail load, the coral fill animates from 0 to its current percentage over `motion-fund` with `ease-fund` — momentum that *arrives* with confidence. The number counts up in sync. The one place the system invests motion on emotion.
2. **Pledge confirm.** On a successful pledge, the project's funding bar nudges forward with a brief `ease-fund` step and the grateful confirmation screen enters (`motion-slow / ease-enter`). Modest, warm — no confetti spam.
3. **Card tap.** Thumbnail dims to 94% opacity on press (`motion-fast / ease-standard`), releases on tap-up. The card does not scale — scale on a magazine grid breaks the editorial metaphor.
4. **Filter sheet.** Bottom sheet rises from `y+40px` (`motion-standard / ease-enter`) with a backdrop fade to `rgba(0,0,0,0.5)`. Dismissal `motion-fast / ease-exit`.
5. **Reduce motion.** Under `prefers-reduced-motion: reduce`, the funding bar renders at its final fill with no count-up animation, all `motion-*` collapse to `motion-instant`, cross-fades replace slides. The platform stays fully usable.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 — Direct verification (MCP playwright, 2026-05-27):
- https://tumblbug.com/ (live home surface). Confirmed: body
  font-family "Pretendard"; body color rgb(0,0,0) (dominant black,
  ~5,173 occurrences); base size 14px; signature accent rgb(253,87,68)
  = #fd5744 (~65 occurrences) with lighter rgb(248,100,83) = #f86453
  and deep rgb(229,60,65) = #e53c41; grays rgb(61,61,61)/rgb(84,84,84)/
  rgb(109,109,109)/rgb(158,158,158); borders rgb(228,228,228) /
  rgb(240,240,240); surface fill rgb(246,246,246); pill controls
  (border-radius ~9999px observed as 3.35544e+07px clamp); outline-pill
  "창작자센터" #fff bg / #545454 / 30px radius / 14px·700; modal scrim
  oklab(0 0 0 / 0.5).

Tier 2 — Press / secondary (WebSearch, 2026-05):
- https://en.namu.wiki/w/텀블벅 — Korean crowdfunding for art/culture
  creators across film, music, art, publishing, design, games, etc.
- https://e27.co/startups/tumblbug/ — startup profile, creative/cultural
  crowdfunding positioning.
- https://play.google.com/store/apps/details?id=com.tumblbug.app
  — "당신의 취향이 세상을 바꿉니다" slogan; creator crowdfunding.
- https://tumblbug.com/start — "프로젝트 시작하기" creator entry;
  "좋은 아이디어를 가지고 있으신가요?" invitation copy.

ASSUMED-VS-VERIFIED NOTE: The task brief assumed coral #FF5A5F. Live
inspect found the signature coral is #fd5744 (rgb(253,87,68)) — very
close to but distinct from the assumed value. This DESIGN.md uses the
live-verified #fd5744 as primary_color.

Personas (§13) are fictional archetypes informed by Tumblbug's publicly
described user base (Korean creators + culture-loving backers). Any
resemblance to specific individuals is unintended.

Interpretive claims (editorial, not documented Tumblbug statements):
- "Momentum made visible" / "belief over urgency" framing (§1, §11,
  §12) — editorial reading of the funding-bar + creative-first
  positioning.
- The 6 numbered principles (§12) — synthesized from observed surface
  behavior + the creative-crowdfunding positioning; not a published
  design-principles list.
- Component-internal geometry beyond observed tokens (card radii, badge
  values, progress-bar height, shadow specs) is reconciled from the
  live pill-and-rounded monochrome surface; re-verify in a stable
  session before treating as authoritative DS specs.
- The funding-bar motion (§15) — derived from the momentum-centric
  product posture, not a documented Tumblbug motion rule.
-->

---

**Verified:** 2026-05-27 (omd:add-reference initial create — Tier 1 live inspect / Tier 2 press confirmed)
**Tier 1 sources:** tumblbug.com (live playwright inspect — Pretendard, body `#000` base 14px, signature coral `#fd5744` + `#f86453` + `#e53c41`, gray scale `#3d3d3d`/`#6d6d6d`/`#9e9e9e`, borders `#e4e4e4`/`#f0f0f0`, surface `#f6f6f6`, full-pill controls, outline-pill 창작자센터 30px/14px·700, scrim oklab 0.5).
**Tier 2 sources:** getdesign.md/tumblbug — not checked. styles.refero.design — not checked. Namu Wiki + e27 + Google Play + tumblbug.com/start (Korean creative-crowdfunding positioning, "당신의 취향이 세상을 바꿉니다", creator-invitation copy).
**Style ref:** `musinsa` (KR monochrome editorial neighbor format retained for tone scaffolding).
**Conflicts unresolved:** Assumed coral `#FF5A5F` (from task brief) refined to live-verified `#fd5744` (rgb(253,87,68)). Component-internal geometry reconciled from surface treatment; re-run Tier 2 (getdesign/refero) to lock token values.
