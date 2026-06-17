---
id: shiftup
name: Shift Up
display_name_kr: 시프트업
country: KR
category: consumer-tech
homepage: "https://shiftup.co.kr"
primary_color: "#569a43"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=shiftup.co.kr&sz=128"
verified: "2026-06-17"
added: "2026-06-17"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-17"
  note: "Dark cinematic game-studio corporate site. Single saturated accent = studio green (#569a43, active filter + relational highlight). Display = Roboto Condensed uppercase 700 (NEWS/RECRUIT/IR); Korean body = Pretendard. Hero/games surfaces are near-black (#000000 / #222222) with white text; recruit/list surfaces flip to light (#ffffff / #f4f4f4). Geometry is sharp (0px) with distinctive asymmetric decorative corners (0px 80px / 50px 0px)."
  colors:
    primary: "#569a43"
    ink: "#000000"
    panel: "#222222"
    canvas: "#ffffff"
    body: "#777777"
    chip-grey: "#6e6e6e"
    dark-text: "#212529"
    surface: "#f4f4f4"
    surface-alt: "#efefef"
    hairline: "#dddddd"
    on-dark: "#ffffff"
  typography:
    family: { display: "Roboto Condensed", body: "Pretendard" }
    display-xl:   { size: 80, weight: 700, lineHeight: 1.15, tracking: 0, use: "Section banner heads (RECRUIT), uppercase Roboto Condensed" }
    display-lg:   { size: 60, weight: 700, lineHeight: 1.10, tracking: 1.8, use: "Home section heads (NEWS), uppercase Roboto Condensed" }
    display-md:   { size: 50, weight: 700, lineHeight: 1.20, tracking: 0, use: "Section heads (IR), uppercase Roboto Condensed" }
    list-head:    { size: 30, weight: 700, lineHeight: 1.40, tracking: -1.2, use: "Group/category head (전체), Pretendard Bold" }
    card-title:   { size: 24, weight: 600, lineHeight: 1.50, tracking: -0.96, use: "Recruit posting / game title cards, Pretendard SemiBold" }
    game-title:   { size: 24, weight: 500, lineHeight: 1.50, tracking: -0.96, use: "Game name on hero card, Pretendard Medium" }
    news-title:   { size: 20, weight: 400, lineHeight: 1.60, tracking: -0.8, use: "News headline rows, Pretendard" }
    nav:          { size: 18, weight: 500, lineHeight: 1.45, use: "Top nav items, Roboto Condensed uppercase" }
    body:         { size: 16, weight: 400, lineHeight: 1.60, use: "Standard reading text, Pretendard" }
  spacing: { xs: 4, sm: 8, md: 16, base: 20, lg: 34, xl: 60, xxl: 92 }
  rounded: { sm: 0, md: 5, lg: 20, art: 80 }
  shadow:
    none: "none"
  components:
    button-store: { type: button, fg: "#000000", border: "2px solid #000000", radius: "0px", height: "40px", font: "16px / 700 Roboto Condensed", use: "STORE entry button, sharp ghost outline on light surface" }
    button-ghost-dark: { type: button, fg: "#777777", border: "2px solid #ffffff", radius: "0px", height: "60px", font: "16px / 400 Pretendard", use: "프로젝트 소개 / 채용 지원 outline buttons on dark game panels" }
    filter-tab: { type: tab, fg: "#777777", border: "1px solid #dddddd", font: "18px / 400 Pretendard", active: "text #569a43 + 600 weight", use: "Recruit category filter (전체 / 사업 / 경영지원)" }
    dept-chip: { type: badge, bg: "#6e6e6e", fg: "#ffffff", radius: "0px", font: "16px / 600 Pretendard", use: "Department tag on recruit list rows" }
    search-input: { type: input, bg: "#f4f4f4", fg: "#000000", radius: "0px", height: "60px", padding: "0px 60px 0px 20px", font: "16px Pretendard", use: "Recruit search field, square light-grey field" }
    recruit-row: { type: listItem, fg: "#212529", border: "1px solid #dddddd", height: "121px", use: "Recruit posting row, hairline-divided list, 24px/600 title" }
    game-card: { type: card, bg: "#000000", fg: "#ffffff", radius: "0px", use: "Full-bleed game hero card, 24px Pretendard title over cinematic art" }
    news-row: { type: listItem, fg: "#ffffff", border: "1px solid rgba(255,255,255,0.6)", height: "32px", use: "News headline row on dark NEWS band, 20px Pretendard" }
  components_harvested: true
---

# Design System Inspiration of Shift Up

## 1. Visual Theme & Atmosphere

Shift Up (시프트업) is the Seoul game studio behind *Stellar Blade*, *NIKKE: Goddess of Victory*, and *Destiny Child*, and its corporate site is built like a AAA game key-art portfolio rather than a SaaS landing page. The dominant register is dark and cinematic: full-bleed game panels render on pure black (`#000000`) and near-black (`#222222`) with white type laid over scroll-driven hero video and character art, so the studio's own visuals — not UI chrome — carry the page. The interface recedes almost entirely; chrome is reduced to thin uppercase nav, hairline rules, and a single saturated accent, letting the art breathe edge to edge.

The typographic system is bilingual by construction. Latin display runs in **Roboto Condensed Bold (700), uppercase, with positive tracking** — `NEWS` at 60px, `RECRUIT` at 80px, `IR` at 50px — a tall, narrow, broadcast-credit voice that reads like a game title card. Korean copy switches to **Pretendard**: game and posting titles at 24px (weight 500–600) with tight `-0.96px` tracking, news headlines at 20px, and dense body at 16px in a calm mid-grey (`#777777`). The contrast is deliberate — condensed Latin caps for the cinematic billboard, Pretendard for the readable Korean substance underneath.

Color is held to almost nothing. There is exactly one brand hue: a confident studio green (`#569a43`) that surfaces only as the active recruit filter and as relational highlight — the same restraint-with-one-accent discipline you see in disciplined game UIs. Everything else is a black-to-white neutral ladder (`#000000` → `#222222` → `#6e6e6e` → `#777777` → `#dddddd` → `#f4f4f4` → `#ffffff`). Surfaces flip context: the home and games experience is dark-on-black cinematic, while functional surfaces (recruit list, search) invert to a clean light layout of white cards on `#f4f4f4` divided by `#dddddd` hairlines. Geometry is overwhelmingly sharp — buttons, inputs, and chips sit at a hard `0px` radius with 2px solid outlines — punctuated by signature **asymmetric decorative corners** (`0px 80px`, `50px 0px`, `0px 0px 50px`) that slice game panels at an angle, a distinctive cut that signals "game studio, not corporate template."

**Key Characteristics:**
- Dark cinematic stage: full-bleed game art on `#000000` / `#222222`, UI chrome minimized so key-art leads
- Roboto Condensed Bold uppercase for Latin display (NEWS 60px, RECRUIT 80px, IR 50px) — broadcast title-card voice
- Pretendard for all Korean: 24px/600 titles with `-0.96px` tracking, 20px news, 16px body in `#777777`
- A single saturated accent — studio green `#569a43` — reserved for the active filter / relational highlight
- Black-to-white neutral ladder; no second hue, no gradients-as-decoration in chrome
- Surface inversion: cinematic dark for home/games, clean light (`#ffffff` on `#f4f4f4`) for recruit/list
- Sharp `0px` geometry with 2px solid outlines, plus signature asymmetric `0px 80px` / `50px 0px` decorative corners
- Shadowless flat composition — separation comes from black/white contrast and `#dddddd` hairlines

## 2. Color Palette & Roles

### Brand Accent
- **Studio Green** (`#569a43`): The single saturated brand hue. Live inspection found it as the active recruit category filter text (`전체`, weight 600) and as a relational highlight across the games/recruit surfaces — the system's one "selected / active" color. Reserved, never spread.

### Dark Stage
- **Pure Black** (`#000000`): Primary cinematic background for the home hero and full-bleed game panels; also the STORE outline color.
- **Panel Near-Black** (`#222222`): Secondary dark band — section dividers and the darker content strata beneath the hero.
- **On-Dark White** (`#ffffff`): All type, nav, and headings over the dark stage.
- **Muted Dark** (`rgba(255,255,255,0.6)`): Secondary/de-emphasized text and hairlines on dark panels (e.g. news-row dividers).

### Light Functional Surface
- **Canvas White** (`#ffffff`): Recruit/list page background and card fills.
- **Surface Grey** (`#f4f4f4`): Search field fill and light section banding.
- **Surface Alt** (`#efefef`): A warmer secondary grey for alternating light blocks.
- **Hairline** (`#dddddd`): Thin row dividers, card outlines, and filter borders — the primary separation device on light surfaces.
- **Muted Light** (`rgba(0,0,0,0.6)`): Secondary text on light/over-image surfaces (sub-nav labels).

### Neutral Text Ladder
- **Ink Black** (`#000000`): Maximum-contrast headings on light surfaces (검색, list group heads, posting titles).
- **Dark Text** (`#212529`): Standard dark body / posting-title text on the light recruit list.
- **Chip Grey** (`#6e6e6e`): Department tag chip background (white text) on recruit rows.
- **Body Grey** (`#777777`): The document-default text color — descriptions, inactive nav, metadata.

## 3. Typography Rules

### Font Family
- **Display (Latin)**: `Roboto Condensed` — uppercase, weight 700, for English section banners (NEWS, RECRUIT, IR, ABOUT, GAMES). Tall, narrow, broadcast-credit character.
- **Body & Korean**: `Pretendard` (with `Noto Sans KR` fallback) — the document default for all Korean headings, titles, and body copy.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display XL | Roboto Condensed | 80px | 700 | 1.15 (92px) | normal | RECRUIT banner, uppercase |
| Display LG | Roboto Condensed | 60px | 700 | 1.10 (66px) | +1.8px | NEWS section head, uppercase |
| Display MD | Roboto Condensed | 50px | 700 | 1.20 (60px) | normal | IR / RECRUIT home heads, uppercase |
| List Head | Pretendard | 30px | 700 | 1.40 (42px) | -1.2px | Category group head (전체) |
| Card Title | Pretendard | 24px | 600 | 1.50 (36px) | -0.96px | Recruit posting titles |
| Game Title | Pretendard | 24px | 500 | 1.50 (36px) | -0.96px | Game name on hero card |
| News Title | Pretendard | 20px | 400 | 1.60 (32px) | -0.8px | News headline rows |
| Nav | Roboto Condensed | 18px | 500 | 1.45 | normal | Top nav items, uppercase |
| Body | Pretendard | 16px | 400 | 1.60 (25.6px) | normal | Standard reading text, `#777777` |

### Principles
- **Two scripts, two voices**: Roboto Condensed uppercase owns the Latin billboard; Pretendard owns every Korean word. They never trade jobs.
- **Condensed caps as the cinematic signature**: positive tracking (+1.8px on the 60px NEWS head) stretches the uppercase Latin into a wide title-card band — the opposite of the tight tracking used on Korean.
- **Tight Korean tracking**: every Pretendard title compresses to `-0.96px` (titles) or `-1.2px` (group heads); body stays normal.
- **Mid-grey body**: the default text color is `#777777`, not black — it keeps dense Korean copy calm and lets the green accent and white titles dominate.

## 4. Component Stylings

### Buttons

**STORE Button**
- Text: `#000000`
- Border: 2px solid `#000000`
- Radius: 0px
- Height: 40px
- Font: 16px Roboto Condensed weight 700
- Use: STORE entry button on light game/recruit headers — sharp ghost outline, uppercase

**Ghost Outline (Dark)**
- Text: `#777777`
- Border: 2px solid `#ffffff`
- Radius: 0px
- Height: 60px
- Font: 16px Pretendard weight 400
- Use: "프로젝트 소개" / "채용 지원" outline buttons on dark game panels

### Inputs

**Search Field**
- Background: `#f4f4f4`
- Text: `#000000`
- Radius: 0px
- Height: 60px
- Padding: 0px 60px 0px 20px
- Font: 16px Pretendard
- Placeholder: 검색어를 입력해주세요.
- Use: Recruit search field — square light-grey field with right-side icon inset

### Cards & Containers

**Game Hero Card**
- Background: `#000000`
- Text: `#ffffff`
- Radius: 0px
- Use: Full-bleed cinematic game panel; 24px Pretendard weight 500 game title (`-0.96px`) over key-art

**Recruit Posting Row**
- Text: `#212529`
- Border: 1px solid `#dddddd` (bottom hairline)
- Height: 121px
- Use: Recruit list row — hairline-divided, 24px Pretendard weight 600 posting title

### Badges

**Department Chip**
- Background: `#6e6e6e`
- Text: `#ffffff`
- Radius: 0px
- Font: 16px Pretendard weight 600
- Use: Department tag on recruit rows (사업, 경영지원, 개발 …)

### Tabs

**Category Filter**
- Text: `#777777` (inactive)
- Border: 1px solid `#dddddd`
- Font: 18px Pretendard
- Active: text `#569a43` + weight 600
- Use: Recruit category filter (전체 / 사업 / 경영지원 …) — the one place the studio green appears

### List Items

**News Headline Row**
- Text: `#ffffff`
- Border: 1px solid `rgba(255,255,255,0.6)`
- Height: 32px
- Font: 20px Pretendard weight 400 (`-0.8px`)
- Use: News headline list on the dark NEWS band

---

**Verified:** 2026-06-17 (omd:add-reference CREATE — Tier 1 live inspect, 2 brand-owned surfaces)
**Tier 1 sources:** https://shiftup.co.kr (home, live computed style — nav, hero game cards, NEWS/RECRUIT/IR bands); https://shiftup.co.kr/recruit/recruit.php (recruit list — search input, filter tabs, dept chips, posting rows); https://shiftup.co.kr/games/games.php (games surface — dark panels, ghost outline buttons, green accent)
**Tier 2 sources:** getdesign.md/shiftup — "0 DESIGN.md files / No designs found"; styles.refero.design/?q=shiftup — no Shift Up entry (Korean game studio, not catalogued; Western Tier-2 coverage gap)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: ~4px, scaling generously for cinematic breathing room
- Scale: 4px, 8px, 16px, 20px, 34px, 60px, 92px
- Notable: nav items carry tall `35px 16px 34px` padding (91px tall hit area); recruit rows are a roomy 121px tall

### Grid & Container
- Home: stacked full-bleed bands — game hero cards, then a dark NEWS band, then RECRUIT and IR sections, each edge-to-edge
- Games: vertical sequence of full-width game panels, each with its own key-art and a pair of outline CTAs
- Recruit: light single-column list of 121px rows divided by `#dddddd` hairlines, with a filter tab row and 60px search field above
- Decorative asymmetric corners (`0px 80px`, `50px 0px`) slice panel edges for the game-studio cut

### Whitespace Philosophy
- **Let the art lead**: dark cinematic bands give game key-art maximal real estate; UI chrome is intentionally thin so visuals dominate
- **Flat separation**: sections separate by black/white contrast and hairlines, never by elevation
- **Surface inversion as rhythm**: dark cinematic home/games alternates with light functional recruit/list, a deliberate tonal switch between "show" and "tell"

### Border Radius Scale
- Sharp (0px): buttons, inputs, chips, list rows — the default geometry
- Small (5px): occasional minor containers
- Large (20px): a few rounded panel corners (`20px 20px 0px 0px`)
- Art (50–80px): signature asymmetric decorative corners on game panels (`0px 80px`, `50px 0px`, `0px 0px 50px`)

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | All surfaces — page, panels, cards, chips |
| Contrast (Level 1) | Black ↔ white surface flip | Separate dark cinematic bands from light functional sections |
| Hairline (Level 2) | `1px solid #dddddd` / `rgba(255,255,255,0.6)` | Row dividers, card outlines, filter borders |
| Outline (Level 3) | `2px solid` border | Ghost buttons (STORE black, dark-panel white) |

**Shadow Philosophy**: Shift Up runs a near-shadowless system. Live inspection returned `box-shadow: none` across nav, hero game cards, news rows, recruit rows, and buttons. Depth is communicated entirely through tonal contrast (pure black stage vs. white functional surface) and thin hairlines (`#dddddd` on light, `rgba(255,255,255,0.6)` on dark). When emphasis is needed the system reaches for the studio green (`#569a43`) or a 2px solid outline, never elevation — keeping the page flat so the cinematic game art reads as the only thing with "depth."

## 7. Do's and Don'ts

### Do
- Let full-bleed game key-art lead on dark `#000000` / `#222222` stages — keep UI chrome thin
- Use Roboto Condensed Bold uppercase for Latin display (NEWS, RECRUIT, IR), with positive tracking
- Use Pretendard for all Korean — 24px/600 titles at `-0.96px`, 20px news, 16px body in `#777777`
- Reserve studio green (`#569a43`) for the active filter / selected state — the single accent
- Separate with black/white contrast and `#dddddd` hairlines, not shadows
- Keep buttons, inputs, and chips at a sharp `0px` radius with 2px solid outlines
- Use the signature asymmetric decorative corners (`0px 80px`, `50px 0px`) to cut game panels
- Invert to a clean light layout (`#ffffff` on `#f4f4f4`) for functional list/recruit surfaces

### Don't
- Spread the green accent across many elements — it must stay the single "active" signal
- Add drop shadows for elevation — the system is flat and shadowless
- Set Korean titles in Roboto Condensed — Pretendard owns Korean, Roboto Condensed owns Latin caps
- Use rounded pill geometry on buttons or chips — the default is sharp `0px`
- Introduce a second saturated hue — the palette is a black-to-white neutral ladder plus one green
- Use pure black (`#000000`) for body copy on light surfaces — body is mid-grey `#777777`
- Let chrome compete with the game art — interface recedes so key-art leads
- Apply tight tracking to the uppercase Latin display — it tracks open (+1.8px), unlike Korean

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <768px | Single column, nav collapses to toggle, display sizes compress, game panels stack |
| Tablet | 768-1024px | Moderate padding, game cards full-width, recruit list single column |
| Desktop | 1024-1440px | Full cinematic layout, 80px/60px display heads, wide game panels |

### Touch Targets
- Nav items at 91px tall (`35px 16px 34px` padding) — generous broadcast-style tap area
- Recruit rows at 121px tall — comfortably tappable list entries
- Search field at 60px height; ghost buttons at 40–60px

### Collapsing Strategy
- Home cinematic bands: full-bleed game panels stack vertically, key-art reframes for portrait
- Display heads: 80px → smaller uppercase Roboto Condensed on mobile, weight 700 maintained
- Recruit: filter tab row wraps; list rows stay single-column with hairline dividers
- Dark/light surface inversion preserved across breakpoints

### Image Behavior
- Game key-art remains full-bleed at every size; scroll-driven hero video falls back to a poster frame on mobile
- Asymmetric decorative corners simplify on narrow viewports
- No shadows on imagery at any size — consistent with the flat system

## 9. Agent Prompt Guide

### Quick Color Reference
- Brand accent / active state: Studio Green (`#569a43`)
- Cinematic stage: Pure Black (`#000000`), Panel Near-Black (`#222222`)
- On-dark text: White (`#ffffff`)
- Functional surface: Canvas White (`#ffffff`), Surface Grey (`#f4f4f4`)
- Hairline: `#dddddd`
- Body text: Body Grey (`#777777`)
- Dark body text (light surface): `#212529`
- Department chip: Chip Grey (`#6e6e6e`)

### Example Component Prompts
- "Create a dark cinematic game hero band: full-bleed black `#000000` background with key-art, white 24px Pretendard weight 500 game title (`-0.96px` tracking) lower-left, and two ghost outline buttons (transparent, 2px solid `#ffffff`, `#777777` text, 0px radius, 60px tall): '프로젝트 소개' and '채용 지원'."
- "Build a section banner: uppercase 'RECRUIT' in Roboto Condensed 80px weight 700, white on black, line-height 92px."
- "Design a recruit list row: white background, 1px solid `#dddddd` bottom hairline, 121px tall. Posting title 24px Pretendard weight 600, `#212529`, `-0.96px`. A department chip on the right: `#6e6e6e` background, white text, 0px radius, 16px Pretendard weight 600."
- "Create a category filter row: tabs at 18px Pretendard, inactive `#777777` with 1px `#dddddd` border. Active tab: text `#569a43`, weight 600 — the only place the studio green appears."
- "Build a search field: `#f4f4f4` background, 60px tall, 0px radius, `0px 60px 0px 20px` padding, 16px Pretendard, placeholder '검색어를 입력해주세요.'"

### Iteration Guide
1. Roboto Condensed uppercase 700 for Latin display; Pretendard for every Korean string
2. Studio green (`#569a43`) is the single accent — only for active/selected
3. No shadows — separate with black/white contrast and `#dddddd` hairlines
4. Sharp `0px` geometry with 2px solid outlines; asymmetric `0px 80px` corners on game panels
5. Body text is `#777777` mid-grey, not black; dark posting text is `#212529`
6. Dark cinematic for home/games; invert to light `#ffffff` on `#f4f4f4` for recruit/list
7. Tracking: open (+1.8px) on uppercase Latin, tight (`-0.96px`) on Korean titles

---

## 10. Voice & Tone

Shift Up's voice is **confident, craft-proud, and understated** — a premium game studio that lets its titles do the talking. The corporate copy is sparse and factual: section labels are bare uppercase nouns (`GAMES`, `RECRUIT`, `IR`, `NEWS`), game entries are named plainly (스텔라 블레이드, 승리의 여신: 니케), and the news feed reads like an objective press wire ("시프트업 '스텔라 블레이드', 닌텐도 스위치 2 출시") rather than marketing hype. The studio speaks the language of a serious development house addressing players, talent, and investors at once — no exclamation points, no superlatives, just the work.

| Context | Tone |
|---|---|
| Section labels | Bare uppercase nouns. "GAMES", "RECRUIT", "IR", "NEWS". |
| Game entries | Named plainly, by title. "스텔라 블레이드", "승리의 여신: 니케". |
| News feed | Objective press-wire register. Factual headlines, dates, outlets. |
| Recruit postings | Functional and specific. "퀘스트 기획자", "UI 디자이너", "전투 밸런스 기획". |
| CTAs | Direct, low-pressure. "프로젝트 소개", "채용 지원", "STORE". |
| IR / governance | Formal, disclosure-grade restraint befitting a listed company. |

**Voice samples (verbatim from live site):**
- "시프트업 '스텔라 블레이드', 닌텐도 스위치 2 출시" — news headline (objective press-wire). *(verified live 2026-06-17, shiftup.co.kr)*
- "'승리의 여신: 니케', 앱스토어 한·일 매출 1위" — news headline (achievement stated as fact, no adjectives). *(verified live 2026-06-17)*
- "검색어를 입력해주세요." — recruit search placeholder (plain, polite functional Korean). *(verified live 2026-06-17, recruit.php)*

**Forbidden register**: hype superlatives on the studio's own titles, exclamation-stacked marketing, undefined gaming jargon in corporate/IR copy, anything that competes with the key-art for attention.

## 11. Brand Narrative

Shift Up (시프트업) was founded in **2013** by **김형태 (Kim Hyung-tae)**, the celebrated illustrator and art director known for his work on *Magna Carta* and *Blade & Soul*. The studio was built around a single conviction visible in everything it ships: that character art and visual craft are the product. That art-first DNA is why the corporate site behaves like a portfolio of key-art rather than a conventional company page — the design's job is to get out of the way of the visuals.

The studio's trajectory runs from mobile (*Destiny Child*, 2016) through the global gacha hit *NIKKE: Goddess of Victory* (2022) to the console blockbuster *Stellar Blade* (2024, PlayStation 5), with *Project Spirit* in development. Shift Up listed on the **Korea Exchange (KOSPI) in 2024**, which is why the site carries a full IR section (governance, financials, stock, announcements) sitting in the same restrained visual language as the game pages — a game studio that now also speaks to investors without changing its voice.

What the design refuses, visible in its choices: the busy, over-decorated chrome of typical game-company sites (no gradient buttons, no glow, no clutter), and the corporate blandness of a generic listed-company template. What it embraces: a dark cinematic stage that frames character art, condensed broadcast-style Latin titles, a single disciplined accent, and sharp geometry cut by signature asymmetric corners — restraint as a frame for spectacle.

## 12. Principles

1. **The art is the product.** Founded by an art director, the studio treats character art and key-art as the core deliverable. *UI implication:* keep chrome thin and let full-bleed game visuals lead every dark band.
2. **Restraint frames spectacle.** A near-monochrome palette and one accent make the colorful game art pop. *UI implication:* hold the interface to a black-to-white ladder plus a single green; never introduce a competing hue.
3. **One accent, one meaning.** Studio green (`#569a43`) signals "active / selected" and nothing else. *UI implication:* reserve the green for the active filter / selected state so its meaning stays unambiguous.
4. **Sharp, not soft.** Hard `0px` corners and 2px outlines read as precise and engineered, not consumer-cute. *UI implication:* default to sharp geometry; reserve curves for the signature asymmetric decorative cuts.
5. **Same voice for players and investors.** The IR section wears the same restrained design as the game pages. *UI implication:* don't switch to a generic corporate template for IR — keep the dark/sharp system consistent.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Shift Up audiences (players, prospective game-industry talent, equity investors), not individual people.*

**박지훈, 27, 서울.** A *NIKKE* and *Stellar Blade* player who visits the site for news and store links. Comes for the key-art and patch news; values that headlines are factual and the games are front and center, not buried under marketing.

**이서연, 31, 판교.** A senior game UI designer considering applying. Scans the recruit list, filters by 디자인, and reads postings in the clean light layout. Reads the studio's restraint and craft focus as a signal that art quality is taken seriously here.

**최민호, 45, 여의도.** An equity analyst tracking the KOSPI-listed studio. Goes straight to the IR section for governance, financials, and announcements. Appreciates that the disclosure pages are calm and legible rather than gamified.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no recruit results)** | Light canvas, single `#212529` line stating no matching postings, with a path to clear the filter. No illustration clutter. |
| **Empty (news feed, none)** | White-on-dark single line on the NEWS band stating no recent news; calm, factual. |
| **Loading (list fetch)** | Skeleton rows at the final 121px row height on `#f4f4f4`, divided by `#dddddd` hairlines. Flat pulse, no shadow shimmer — consistent with the shadowless system. |
| **Loading (hero media)** | Cinematic game video falls back to a static poster key-art frame until playable; the band never collapses. |
| **Error (search/list failed)** | Inline `#212529` message with a plain-language explanation and retry. No bare "오류" — states the next step. |
| **Error (form validation)** | Field-level message below the input in a calm tone; describes what is valid, not just "필수". |
| **Success (application submitted)** | Brief inline confirmation in restrained tone; next-step detail linked below. No celebratory emoji. |
| **Skeleton** | `#f4f4f4` blocks at final dimensions, `0px` radius, hairline-divided, flat pulse. |
| **Disabled** | Body grey (`#777777`) text on reduced-opacity control; the green accent fades rather than switching color, preserving its single meaning. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 150ms | Hover, filter select, button press |
| `motion-standard` | 300ms | Section reveal, card/list fade-in |
| `motion-cinematic` | 600ms | Scroll-driven hero key-art / video crossfade |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, list rows, panels |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is cinematic but controlled — the home page is scroll-driven, with game key-art and video crossfading into view at `motion-cinematic / ease-enter` as the user descends through the dark bands. Functional surfaces (recruit, search) keep motion quiet and fast: filter selection and list reveals run at `motion-fast`/`motion-standard` with no bounce or spring — a serious studio signals craft, not gimmickry. Under `prefers-reduced-motion: reduce`, hero video freezes to its poster frame and all transitions collapse to instant; the site stays fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-17) via global playwright getComputedStyle on:
- https://shiftup.co.kr (home) — nav (Roboto Condensed 18px/500 uppercase, white on dark),
  game hero cards (Pretendard 24px/500 white, -0.96px), NEWS band (Roboto Condensed 60px/700
  uppercase +1.8px), RECRUIT/IR heads (50px/700), news rows (Pretendard 20px/400 -0.8px),
  body color rgb(119,119,119)=#777777, bg #000000/#222222/#ffffff, accent rgb(86,154,67)=#569a43,
  box-shadow none, distinctive radii 0px 80px / 50px 0px / 0px 0px 50px.
- https://shiftup.co.kr/recruit/recruit.php — RECRUIT banner 80px/700, search input #f4f4f4 60px
  0px radius, filter tabs 18px Pretendard active #569a43/600, dept chips #6e6e6e/white 16px/600,
  recruit rows 121px #dddddd hairline, posting titles 24px/600 #212529, STORE button 2px solid #000000.
- https://shiftup.co.kr/games/games.php — dark game panels #000000, ghost outline buttons
  2px solid #ffffff / #777777 text 60px / 0px radius, green accent #569a43.

Token-level claims (§1-9) are sourced from this live inspection.

Voice samples (§10) are verbatim from the live homepage news feed and recruit search placeholder.

Brand narrative (§11): Shift Up (시프트업) founded 2013 by 김형태 (Kim Hyung-tae, art director of
Blade & Soul / Magna Carta); titles Destiny Child (2016), NIKKE: Goddess of Victory (2022),
Stellar Blade (2024, PS5), Project Spirit (in dev); KOSPI listing 2024. These are widely
documented public facts about the company, not directly quoted from a verified Shift Up statement
in this turn (the corporate site IR section confirms the listed-company status and product lineup
observed live).

Personas (§13) are fictional archetypes informed by publicly observable Shift Up audiences
(players, game-industry applicants, equity analysts). Names are illustrative; they do not refer
to real people.

Interpretive claims (e.g., "the art is the product", "restraint frames spectacle", "same voice
for players and investors") are editorial readings connecting Shift Up's observed art-first design
to its founder/positioning, not directly sourced Shift Up statements.
-->
