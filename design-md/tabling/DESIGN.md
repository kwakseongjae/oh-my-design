---
id: tabling
name: Tabling
display_name_kr: 테이블링
country: KR
category: consumer-tech
homepage: "https://www.tabling.co.kr/"
primary_color: "#ff5100"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=tabling.co.kr&sz=128"
verified: "2026-07-02"
added: "2026-07-02"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-07-02"
  note: "primary = Tabling brand orange (#ff5100) reserved for logo + one emphasis headline; the signature functional accent is a bright mint (#1cfbce) used only for the live waiting-team count. Web marketing surface is white, shadowless, Pretendard throughout; primary filled interactive element is a blue-tint region pill (#f0f4ff), not an orange button."
  colors:
    primary: "#ff5100"
    primary-tint: "#fff7eb"
    primary-wash: "#ffece8"
    waiting: "#1cfbce"
    ink: "#2e3137"
    ink-strong: "#131517"
    heading-black: "#000000"
    slate: "#505c81"
    muted: "#6d7583"
    faint: "#969fac"
    canvas: "#ffffff"
    surface: "#f0f0f0"
    surface-alt: "#f8f9fa"
    chip: "#f0f4ff"
    hairline: "#dfe3e6"
    border: "#d7dbdf"
  typography:
    family: { display: "Pretendard", body: "Pretendard" }
    hero:       { size: 24, weight: 700, lineHeight: 1.3, use: "Hero heading, Pretendard Bold" }
    emphasis:   { size: 22, weight: 700, use: "Orange emphasis headline (#ff5100)" }
    section:    { size: 20, weight: 700, use: "Section titles" }
    card-title: { size: 18, weight: 700, use: "Store / list-item name" }
    search:     { size: 16, weight: 600, use: "Search input text" }
    body:       { size: 14, weight: 400, lineHeight: 1.5, use: "Body / UI default" }
    rating:     { size: 13, weight: 700, use: "Rating value (#131517)" }
    meta:       { size: 13, weight: 400, use: "Category·location metadata (#6d7583)" }
    badge:      { size: 12, weight: 700, use: "Live waiting-team count (mint #1cfbce)" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 40 }
  rounded: { xs: 4, sm: 8, md: 12, chip: 24, pill: 100, full: 9999 }
  shadow:
    none: "none"
  components:
    region-chip: { type: badge, bg: "#f0f4ff", fg: "#2e3137", radius: "24px", padding: "8px 16px", border: "1px solid rgba(0,0,0,0.04)", font: "14px / 400 Pretendard", use: "Region filter pill on hero (전국/서울/부산…) — the primary filled interactive element" }
    waiting-badge: { type: badge, fg: "#1cfbce", font: "12px / 700 Pretendard", use: "Live waiting-team count (17팀) — signature mint real-time signal" }
    search-input: { type: input, bg: "#ffffff", fg: "#2e3137", radius: "8px", font: "16px / 600 Pretendard", use: "Store search field, placeholder 매장을 검색해 보세요" }
    store-card: { type: card, bg: "#ffffff", border: "1px solid #d7dbdf", radius: "8px", use: "Bordered content card / thumbnail container" }
    warm-card: { type: card, bg: "#fff7eb", radius: "12px", use: "Warm-tint promo / feature media card" }
    grey-card: { type: card, bg: "#f0f0f0", radius: "12px", use: "Neutral media / thumbnail card" }
    store-row: { type: listItem, fg: "#2e3137", height: "146px", use: "TOP100 store list row — name 18px/700, meta #6d7583, rating #131517" }
  components_harvested: true
---

# Design System Inspiration of Tabling

## 1. Visual Theme & Atmosphere

Tabling (테이블링) is Korea's leading restaurant remote-waiting and discovery app — its tagline "맛집 도착 전 앱으로 미리 줄서기" (line up in advance via the app before you arrive) — and its web surface reads like a bright, appetite-forward consumer product rather than a utility. The canvas is pure white (`#ffffff`) with content organized into airy, shadowless blocks separated by soft grey surfaces (`#f0f0f0`, `#f8f9fa`) and thin hairlines (`#dfe3e6`, `#d7dbdf`). Body text sits in a warm near-black slate (`#2e3137`) rather than pure black, while hero and section headings step up to pure black (`#000000`) for maximum appetite-grabbing contrast. Everything is set in **Pretendard**, the de-facto Korean product font, tuned for dense hangul legibility.

The brand's identity color is a hot, saturated **Tabling orange (`#ff5100`)** — the color of the logo and of a single emphasis headline ("더 많은 맛집 정보, 테이블링 앱에서 확인하세요!") set at 22px weight 700. Rather than painting the interface orange, Tabling holds it back so the eye reads it as "the brand" and "look here." The genuinely distinctive functional accent is a bright electric **mint (`#1cfbce`)**, used in exactly one place: the real-time waiting-team count ("17팀", "45팀") on ranking rows. That mint is the product's soul — it signals live, moving queue data at a glance, and nothing else on the page competes for that hue.

Depth is deliberately flat. Live inspection found `box-shadow: none` across the hero, nav, chips, cards, and list rows; separation comes entirely from background tints and hairlines, never elevation. Interactive chrome favors soft rounding — 24px region pills on a cool blue-tint (`#f0f4ff`), 12px media cards (some on a warm `#fff7eb` or `#ffece8` wash), and 8px bordered containers. The result is a fast, mobile-native, food-friendly aesthetic: clean whitespace, warm ink, one orange for brand, one mint for "it's happening now."

**Key Characteristics:**
- Pretendard everywhere — weight 700 for headings, weight 400 for body/UI (Korean-optimized)
- Tabling orange (`#ff5100`) reserved for the logo and a single emphasis headline — brand, not chrome
- Signature mint (`#1cfbce`) used exclusively for the live waiting-team count — the real-time signal
- Warm near-black slate (`#2e3137`) for body; pure black (`#000000`) for hero/section headings
- Flat, shadow-free system — separation via `#f0f0f0` / `#f8f9fa` surfaces and `#dfe3e6` / `#d7dbdf` hairlines
- Blue-tint region pills (`#f0f4ff`, 24px radius) as the primary filled interactive element
- Warm tint surfaces (`#fff7eb`, `#ffece8`) for promotional / appetite moments
- Cool-grey text ladder (`#505c81` → `#6d7583` → `#969fac`) plus a strong-ink `#131517` for ratings

## 2. Color Palette & Roles

### Brand
- **Tabling Orange** (`#ff5100`): The brand color — logo and the single emphasis headline. Hot, saturated, appetite-forward. Held back from general UI so it always reads as "brand / look here."
- **Warm Tint** (`#fff7eb`): Soft orange-cream surface for warm promo and feature media cards.
- **Warm Wash** (`#ffece8`): A pinker orange wash used behind the app-download promotion band.

### Functional Accent
- **Waiting Mint** (`#1cfbce`): Bright electric mint reserved exclusively for the live waiting-team count ("17팀"). The product's real-time signal — used nowhere else.

### Text & Ink
- **Ink Slate** (`#2e3137`): Primary body and UI text — a warm near-black, never pure black for reading.
- **Strong Ink** (`#131517`): Near-black used for high-emphasis values like the rating figure ("4.6").
- **Heading Black** (`#000000`): Pure black for hero and section headings, for maximum contrast.
- **Slate Blue** (`#505c81`): Secondary label / structural text.
- **Muted Slate** (`#6d7583`): Tertiary text — category·location metadata ("한식·청진동").
- **Faint Grey** (`#969fac`): Lowest-emphasis text — review counts, dividers, placeholders.

### Surface & Border
- **Canvas White** (`#ffffff`): Page background and card surfaces.
- **Surface Grey** (`#f0f0f0`): Neutral media / thumbnail card background.
- **Surface Soft** (`#f8f9fa`): Lightest cool-grey section separation.
- **Chip Tint** (`#f0f4ff`): Cool blue-tint background for region filter pills.
- **Hairline** (`#dfe3e6`): Thin dividers and borders in the shadow-free system.
- **Border** (`#d7dbdf`): Slightly stronger 1px card outline.

## 3. Typography Rules

### Font Family
- **Display & Body**: `Pretendard` (with `Pretendard Fallback`) — used across the entire surface. Bold (700) for headings and store names; Regular (400) for body and metadata; a 600 mid-weight for the search field.

### Hierarchy

| Role | Font | Size | Weight | Notes |
|------|------|------|--------|-------|
| Hero Heading | Pretendard | 24px | 700 | "오늘 뭐 먹지? 맛집 검색은 테이블링", pure black `#000000` |
| Emphasis Headline | Pretendard | 22px | 700 | Orange `#ff5100` app-promo headline |
| Section Heading | Pretendard | 20px | 700 | "지역별 인기 웨이팅 맛집", pure black |
| Store / List Title | Pretendard | 18px | 700 | Store names on TOP100, ink slate `#2e3137` |
| Search Input | Pretendard | 16px | 600 | Store search field text |
| Body / UI | Pretendard | 14px | 400 | Standard reading + nav + chip labels, `#2e3137` |
| Rating Value | Pretendard | 13px | 700 | "4.6" strong ink `#131517` |
| Metadata | Pretendard | 13px | 400 | "한식·청진동" muted `#6d7583` |
| Waiting Badge | Pretendard | 12px | 700 | "17팀" mint `#1cfbce` |

### Principles
- **One family, weight-driven hierarchy**: Pretendard carries everything; the 700/400 split is the primary hierarchy signal, not size jumps or a second typeface.
- **Bold black for appetite, warm slate for reading**: Headings go pure black (`#000000`) to grab; body drops to warm `#2e3137` to read comfortably.
- **Numbers earn their own weight**: Ratings render at 700 in strong ink (`#131517`); the live team count renders at 700 in mint — data is treated as first-class typography.
- **Hangul-first sizing**: Body sits at 14px, generous for hangul legibility inside an information-dense discovery layout.

## 4. Component Stylings

### Buttons

**Region Filter Pill**
- Background: `#f0f4ff`
- Text: `#2e3137`
- Radius: 24px
- Padding: 8px 16px
- Border: 1px solid `rgba(0,0,0,0.04)`
- Font: 14px Pretendard weight 400
- Use: Region filter pills on the hero ("전국", "서울 남부", "부산") — the primary filled interactive element on web

### Inputs

**Store Search**
- Background: `#ffffff`
- Text: `#2e3137`
- Radius: 8px
- Font: 16px Pretendard weight 600
- Use: Store search field, placeholder "매장을 검색해 보세요"

### Cards & Containers

**Bordered Card**
- Background: `#ffffff`
- Border: 1px solid `#d7dbdf`
- Radius: 8px
- Use: Bordered content / thumbnail container (no shadow)

**Warm Media Card**
- Background: `#fff7eb`
- Radius: 12px
- Use: Warm-tint promo / feature media card

**Neutral Media Card**
- Background: `#f0f0f0`
- Radius: 12px
- Use: Neutral thumbnail / media card

### Badges

**Waiting Count**
- Text: `#1cfbce`
- Font: 12px Pretendard weight 700
- Use: Live waiting-team count ("17팀") — the signature real-time mint signal

### List Items

**TOP100 Store Row**
- Text: `#2e3137`
- Height: 146px
- Use: Ranking list row — store name 18px/700 `#2e3137`, category·location meta `#6d7583` at 13px, rating value `#131517` at 13px/700, review count `#969fac`, live waiting count in mint `#1cfbce`

---

**Verified:** 2026-07-02
**Tier 1 sources:** https://www.tabling.co.kr/ , https://www.tabling.co.kr/top100 , https://techblog.tabling.co.kr/
**Tier 2 sources:** getdesign.md/tabling (HTTP 200 generic template — no Tabling entry) ; styles.refero.design/?q=tabling (no Tabling match — KR under-coverage)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 4px, scaling 4 / 8 / 12 / 16 / 24 / 40
- Hero container padding measured at 40px 16px 12px; region pills at 8px 16px
- Generous vertical rhythm between full-width bands

### Grid & Container
- Centered single-column mobile-first layout
- Hero: black heading anchor over a search field and a horizontally wrapping row of category buttons
- Region filter pills arranged in a wrapping pill row beneath a section heading
- TOP100 ranking as a vertical list of ~146px rows (thumbnail + name + meta + live count)
- Feature bands alternate white (`#ffffff`) with tinted surfaces (`#f0f0f0`, `#f8f9fa`, warm `#fff7eb` / `#ffece8`)

### Whitespace Philosophy
- **Airy over dense**: despite being a data-rich discovery product, the marketing surface breathes with generous section spacing.
- **Flat segmentation**: sections separate by background tint and hairlines (`#dfe3e6`, `#d7dbdf`), never shadow.
- **Pill rhythm**: repeated 24px region pills create a consistent horizontal cadence.

### Border Radius Scale
- Extra-small (4px): fine inner elements
- Small (8px): bordered cards, search field, inputs
- Medium (12px): media / feature cards — the card workhorse
- Chip (24px): region filter pills
- Pill (100px) / Full (9999px): fully-rounded chips and avatars

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, most surfaces |
| Tint (Level 1) | `#f0f0f0` / `#f8f9fa` background shift | Card / section separation |
| Warm Tint (Level 1) | `#fff7eb` / `#ffece8` background | Promo / appetite moments |
| Hairline (Level 2) | 1px solid `#dfe3e6` or `#d7dbdf` | Card outlines, dividers |

**Shadow Philosophy**: Tabling is a near-shadowless system. Live inspection found `box-shadow: none` across the hero, nav, region pills, cards, and ranking rows. Depth and grouping are communicated through flat tinted surfaces and thin hairlines, keeping the discovery UI feeling fast and mobile-native. When emphasis is needed the system reaches for color — the mint (`#1cfbce`) waiting count, the orange (`#ff5100`) brand mark, or a warm surface (`#fff7eb`) — never elevation.

## 7. Do's and Don'ts

### Do
- Use Pretendard throughout — weight 700 for headings/store names, weight 400 for body and metadata
- Reserve orange (`#ff5100`) for the brand mark and a single emphasis headline — keep it rare
- Use mint (`#1cfbce`) only for the live waiting-team count — it is the real-time signal
- Set hero and section headings in pure black (`#000000`) for appetite-grabbing contrast
- Use warm near-black slate (`#2e3137`) for body text, not pure black
- Separate sections with flat tints (`#f0f0f0`, `#f8f9fa`) and hairlines (`#dfe3e6`, `#d7dbdf`), never shadow
- Use 24px blue-tint pills (`#f0f4ff`) for region/filter chips and 12px radius for media cards
- Render ratings at 700 weight in strong ink (`#131517`) so numbers read as data

### Don't
- Paint large UI areas orange — `#ff5100` is brand accent, not a background
- Reuse the mint (`#1cfbce`) for anything but the live waiting count — it dilutes the signal
- Add drop shadows for elevation — Tabling is a flat, shadow-free system
- Use pure black (`#000000`) for body copy — reserve warm slate `#2e3137`
- Introduce a second typeface — Pretendard owns display and body alike
- Use sharp square corners on chips or cards — geometry is softly rounded (8–24px)
- Mix in extra saturated hues — orange and mint are the only two accents

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, category buttons wrap, ranking rows stack |
| Tablet | 640-1024px | Moderate padding, 2-up feature cards |
| Desktop | 1024-1440px | Centered layout, wider media bands |

### Touch Targets
- Region pills at generous 8px 16px padding for comfortable tapping
- Category buttons sit in a large ~72px hit block on the hero
- Search field spans the hero width for an unmistakable target

### Collapsing Strategy
- Hero: heading + search + category row compress; category buttons wrap
- Region pill row: wraps / scrolls horizontally on narrow viewports
- TOP100 list: fixed vertical rows maintained across sizes
- Tinted / warm bands maintain full-width treatment

### Image Behavior
- Restaurant thumbnails sit in 12px-radius cards, no shadow at any size
- Warm-tint promo cards (`#fff7eb`) keep their radius and flat treatment across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Brand / logo: Tabling Orange (`#ff5100`)
- Live waiting signal: Waiting Mint (`#1cfbce`)
- Body text: Ink Slate (`#2e3137`)
- Rating / strong value: Strong Ink (`#131517`)
- Heading: Pure Black (`#000000`)
- Metadata: Muted Slate (`#6d7583`)
- Faint / review counts: Faint Grey (`#969fac`)
- Background: Canvas White (`#ffffff`)
- Surfaces: Grey (`#f0f0f0`), Soft (`#f8f9fa`), Warm (`#fff7eb`), Wash (`#ffece8`)
- Chip tint: Chip (`#f0f4ff`); Hairline (`#dfe3e6`); Border (`#d7dbdf`)

### Example Component Prompts
- "Create a discovery hero on white background. Heading 24px Pretendard weight 700, pure black #000000: '오늘 뭐 먹지? 맛집 검색은 테이블링'. Below it a search field (white, 8px radius, 16px Pretendard weight 600) and a wrapping row of region pills: #f0f4ff background, #2e3137 text, 24px radius, 8px 16px padding, 14px Pretendard, 1px solid rgba(0,0,0,0.04) border. No shadow."
- "Build a restaurant ranking row (146px): store name 18px Pretendard weight 700 #2e3137; below it a live waiting badge '17팀' in 12px weight 700 mint #1cfbce; rating '4.6' 13px weight 700 #131517 with review count '(2,172)' in #969fac; category·location '한식·청진동' 13px weight 400 #6d7583."
- "Design a warm promo band: #ffece8 wash background, emphasis headline 22px Pretendard weight 700 in orange #ff5100. Media cards inside use #fff7eb or #f0f0f0 background with 12px radius, no shadow."

### Iteration Guide
1. Pretendard for everything; 700 for headings/names, 400 for body/meta, 600 for search
2. Orange (`#ff5100`) is brand-only; mint (`#1cfbce`) is the live-waiting signal only
3. No shadows — separate with `#f0f0f0`/`#f8f9fa` tints and `#dfe3e6`/`#d7dbdf` hairlines
4. Rounded geometry — 24px pills, 12px cards, 8px bordered containers
5. Body text is warm `#2e3137`; headings are pure `#000000`; ratings are strong `#131517`
6. Keep the palette to two accents; let white and warm tints carry the appetite

---

## 10. Voice & Tone

Tabling's voice is **friendly, appetite-first, and practical** — a knowledgeable local friend who helps you decide where to eat and skips the line for you. The hero "오늘 뭐 먹지? 맛집 검색은 테이블링" ("What should we eat today? Restaurant search is Tabling") opens with the everyday question every diner asks, then answers it. Copy is casual-polite Korean, benefit-led, and concrete: it names the action (미리 줄서기 / line up in advance), the payoff (no waiting on-site), and the scope (전국 맛집 / restaurants nationwide).

| Context | Tone |
|---|---|
| Hero headline | Casual, question-led. "오늘 뭐 먹지? 맛집 검색은 테이블링." Warm, inviting. |
| Section headings | Plain and descriptive. "지역별 인기 웨이팅 맛집". |
| Feature / promo copy | Benefit-first, mild enthusiasm. "더 많은 맛집 정보, 테이블링 앱에서 확인하세요!" |
| Metadata | Terse, functional. "한식·청진동", "17팀", "4.6". |
| CTAs | Direct, low-pressure. "앱 다운로드", "미리 줄서기". |

**Voice samples (verbatim from live surfaces):**
- "오늘 뭐 먹지? 맛집 검색은 테이블링" — hero heading, 24px/700 pure black. *(verified live 2026-07-02)*
- "지역별 인기 웨이팅 맛집" — section heading, 20px/700. *(verified live 2026-07-02)*
- "더 많은 맛집 정보, 테이블링 앱에서 확인하세요!" — emphasis headline, 22px/700 orange `#ff5100`. *(verified live 2026-07-02)*
- Page title: "테이블링 | 맛집 도착 전 앱으로 미리 줄서기". *(verified live 2026-07-02)*

**Forbidden register**: fear-based urgency, hard-sell discounting language, undefined jargon, exclamation-stacked hype. One friendly exclamation on a promo headline is the ceiling.

## 11. Brand Narrative

Tabling (테이블링) is a Korean restaurant remote-waiting and discovery service operated by Wad Inc. (와드). Its founding premise addresses a distinctly everyday Korean pain point: standing in a physical line outside a popular 맛집 (well-reviewed restaurant). Tabling lets diners join a restaurant's waiting queue remotely from the app — "맛집 도착 전 앱으로 미리 줄서기" (line up in advance before you arrive) — so time spent queuing on the pavement becomes time free to do anything else until a table is ready.

The product grew from a single remote-waiting feature into a broader restaurant-discovery platform: nationwide search by cuisine and region, popularity rankings ("전국 테이블링 순위 TOP 100"), ratings, and real-time waiting-team counts. The homepage frames the brand as the answer to the daily "오늘 뭐 먹지?" question — first help me choose, then get me seated without the wait.

What Tabling refuses, visible in its design: the heavy, coupon-cluttered chrome of legacy deal apps and the anxiety of on-site queuing. What it embraces: a bright, appetite-forward white surface; a single warm orange for the brand; and — most distinctively — a live mint (`#1cfbce`) waiting count that turns an invisible, stressful wait into a visible, moving number you can trust.

## 12. Principles

1. **Answer "what should we eat?" first.** Discovery precedes the queue. *UI implication:* lead with search, cuisine categories, and regional rankings before any waiting mechanics.
2. **Make the wait visible.** The stress of queuing comes from not knowing how long. *UI implication:* the live team count renders in the one unmistakable mint (`#1cfbce`), never buried in body text.
3. **One brand color, held back.** *UI implication:* reserve orange (`#ff5100`) for the logo and rare emphasis so it always reads as brand, never as decoration.
4. **Flat and fast.** Mobile-native clarity beats decorative depth. *UI implication:* no shadows; separate with tint and hairlines; keep the page quick to scan while hungry.
5. **Appetite through warmth, not clutter.** *UI implication:* warm tints (`#fff7eb`, `#ffece8`) and pure-black headings create appetite; avoid stacked badges, banners, and discount noise.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Tabling user segments (Korean diners avoiding on-site queues, groups deciding where to eat), not individual people.*

**김민준, 28, 서울.** Meets friends on weekends and hates arriving to a 40-minute line. Uses Tabling to join the queue on the subway ride over, watching the live team count drop. Chose the app because the wait finally felt knowable, not random.

**이서연, 33, 경기.** Plans family dinners and searches by region and cuisine before deciding. Values the TOP100 ranking and star ratings to avoid a bad pick. Trusts the calm, non-spammy interface over coupon-heavy rivals.

**박도윤, 41, 부산.** A frequent traveler who lands in a new city and needs a reliable local 맛집 fast. Relies on regional rankings and the real-time waiting signal to pick somewhere good that he can actually get into tonight.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no search results)** | White canvas. Single Ink Slate (`#2e3137`) line explaining no matching restaurants, with a path to broaden region/cuisine. No clutter. |
| **Empty (no saved places)** | Muted Slate (`#6d7583`) single line: nothing saved yet, plus a link back to discovery. Calm, honest. |
| **Loading (list fetch)** | Skeleton rows on `#f8f9fa` at final row dimensions (146px), 12px radius on thumbnails. Flat pulse — no shadow shimmer, consistent with the shadowless system. |
| **Loading (waiting count refresh)** | The mint (`#1cfbce`) count updates in place; previous value stays visible until the new one arrives. |
| **Error (search failed)** | Inline message in Ink Slate with a plain-language explanation and a retry. Never a bare "오류가 발생했습니다" — states the next step. |
| **Error (form validation)** | Field-level message below the input describing what is valid, not just "필수". |
| **Success (queue joined)** | Brief inline confirmation with the assigned waiting position and live team count; next-step detail linked below. No celebratory emoji. |
| **Skeleton** | `#f0f0f0` blocks at final dimensions, 12px radius, flat pulse. |
| **Disabled** | Faint Grey (`#969fac`) text on reduced-opacity surface; the mint and orange fade rather than turn grey to preserve brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, chip press, focus |
| `motion-standard` | 220ms | Card / list reveal, sheet, dropdown |
| `motion-slow` | 320ms | Page-level transitions |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, sheets, list rows |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is functional and quiet, matching the flat, fast aesthetic. Region pills respond to press with a subtle scale/opacity shift; list rows fade-in from below at `motion-standard / ease-enter`. The one place motion carries meaning is the live waiting-team count — it updates with a brief mint highlight so a changing number reads as fresh, live data rather than a silent swap. No bounce or spring — a queue product signals steadiness. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and the waiting count updates without the highlight; the product remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-07-02) via playwright getComputedStyle:
- https://www.tabling.co.kr/ — hero H2 "오늘 뭐 먹지? 맛집 검색은 테이블링" Pretendard 24px/700 rgb(0,0,0);
  section H2 "지역별 인기 웨이팅 맛집" 20px/700; emphasis "더 많은 맛집 정보…" 22px/700 rgb(255,81,0) #ff5100;
  region pills bg rgb(240,244,255) #f0f4ff radius 24px padding 8px 16px; body Pretendard 14px rgb(46,49,55) #2e3137;
  box-shadow none across the surface; page title "테이블링 | 맛집 도착 전 앱으로 미리 줄서기".
- https://www.tabling.co.kr/top100 — "전국 테이블링 순위 TOP 100"; store name H2 18px/700 #2e3137;
  live waiting count "17팀"/"45팀" 12px/700 rgb(28,251,206) #1cfbce; rating "4.6" 13px/700 rgb(19,21,23) #131517;
  review count rgb(150,159,172) #969fac; meta "한식·청진동" 13px/400 rgb(109,117,131) #6d7583.
- https://techblog.tabling.co.kr/ — "테이블링 기술블로그" (Tabling official engineering blog; Medium-hosted, so
  its computed styles are Medium's chrome, NOT Tabling's — cited as a brand-owned regional source only, no tokens
  extracted from it).

Token-level claims (§1-9) are sourced from the two Tabling-designed surfaces (homepage + /top100) live inspect.

Voice samples (§10) are verbatim from the live homepage (hero H2, section H2, emphasis headline, page title).

Brand narrative (§11): Tabling (테이블링) is a Korean restaurant remote-waiting / discovery service operated by
Wad Inc. (와드). The remote-waiting positioning and nationwide discovery framing are taken from the live homepage
and /top100 surfaces; corporate-entity and founding details beyond the homepage are general public knowledge, not
directly quoted from a verified Tabling statement in this turn.

Personas (§13) are fictional archetypes informed by publicly observable Tabling user segments (Korean diners
avoiding on-site queues). Names are illustrative; they do not refer to real people.

Interpretive claims (e.g., "make the wait visible", "one brand color held back", "flat and fast as a rejection of
coupon-cluttered deal-app chrome") are editorial readings connecting Tabling's observed design to its positioning,
not directly sourced Tabling statements.
-->
