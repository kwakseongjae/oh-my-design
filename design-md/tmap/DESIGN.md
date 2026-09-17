---
id: tmap
name: TMAP Mobility
display_name_kr: 티맵모빌리티
country: KR
category: automotive
homepage: "https://www.tmapmobility.com/"
primary_color: "#0064ff"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=tmapmobility.com&sz=128"
verified: "2026-06-17"
added: "2026-06-17"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-17"
  note: "primary = live brand blue (#0064ff) used for section eyebrows, accent links, the active-nav 4px underline, and filled blue panels; blue-alt (#0061fd) on indicator dots and solid blue blocks. Editorial mono-on-white system: pure black headings, three-step grey ladder, near-shadowless, light-blue tinted product surfaces (#f1f8ff → #d3e8ff gradient)."
  colors:
    primary: "#0064ff"
    primary-alt: "#0061fd"
    ink: "#000000"
    body: "#464646"
    muted: "#585858"
    muted-alt: "#777777"
    canvas: "#ffffff"
    surface: "#f3f5f7"
    surface-blue: "#f1f8ff"
    surface-blue-deep: "#d3e8ff"
    surface-grey: "#efefef"
    hairline: "#e2e2e2"
    hairline-alt: "#e5e5e5"
    on-primary: "#ffffff"
  typography:
    family: { sans: "Pretendard" }
    display-xl:   { size: 61, weight: 700, lineHeight: 1.40, tracking: -2, use: "Big feature/value headline, Pretendard Bold" }
    display-hero: { size: 44, weight: 700, lineHeight: 1.40, tracking: -0.32, use: "Hero / section headline" }
    section:      { size: 35, weight: 700, lineHeight: 1.40, tracking: -0.32, use: "Feature block heading (H4)" }
    eyebrow:      { size: 23, weight: 700, lineHeight: 1.40, tracking: -0.32, use: "Section eyebrow / sub-head (H2/H3)" }
    body:         { size: 16, weight: 400, lineHeight: 1.40, use: "Standard reading text, Pretendard" }
    nav:          { size: 15, weight: 700, lineHeight: 1.40, use: "Top nav item, Pretendard Bold" }
    subnav:       { size: 13, weight: 800, lineHeight: 1.40, use: "Sub-nav item, Pretendard ExtraBold" }
  spacing: { xs: 4, sm: 8, base: 16, md: 20, lg: 23, xl: 29, xxl: 48, section: 64 }
  rounded: { sm: 4, card: 19, pill: 35, full: 9999 }
  shadow:
    none: "none"
  components:
    nav-link: { type: tab, fg: "#000000", font: "15px / 700 Pretendard", active: "blue #0064ff text + 4px bottom border #0064ff", use: "Top navigation item" }
    subnav-link: { type: tab, fg: "#585858", font: "13px / 800 Pretendard", active: "text #000000", use: "Secondary nav row under main nav" }
    cta-pill: { type: button, bg: "#ffffff", fg: "#000000", radius: "35px", padding: "23px 29px", border: "1px solid #e2e2e2", font: "16px / 400 Pretendard", use: "Hero search/launch pill — '어디로 갈까요?'" }
    blue-eyebrow: { type: badge, fg: "#0064ff", font: "23px / 700 Pretendard", use: "Section eyebrow label — 'TMAP MOBILITY VISION'" }
    blue-panel: { type: card, bg: "#0061fd", fg: "#ffffff", radius: "19px", use: "Solid blue service/value panel" }
    article-card: { type: card, bg: "#ffffff", fg: "#000000", radius: "19px", use: "Story/content article card (image-led, no shadow)" }
    surface-card: { type: card, bg: "#f3f5f7", fg: "#000000", radius: "19px", use: "Tinted grey content card" }
    indicator-dot: { type: badge, bg: "#0061fd", radius: "9999px", use: "Active carousel/step indicator dot" }
  components_harvested: true
---

# Design System Inspiration of TMAP Mobility

## 1. Visual Theme & Atmosphere

TMAP Mobility (티맵모빌리티) is Korea's dominant navigation and mobility super-app, and its corporate brand site reads like a confident editorial magazine rather than a busy utility. The canvas is pure white (`#ffffff`) and the system is overwhelmingly monochrome: headlines and most text sit in pure black (`#000000`), softened down a three-step grey ladder (`#464646` → `#585858` → `#777777`) for supporting copy. Against this near-greyscale field, a single saturated brand blue (`#0064ff`) does all the signalling — section eyebrows ("TMAP MOBILITY VISION", "TMAP MOBILITY WAY"), accent links, the 4px underline under the active nav item, and solid blue value-panels. The effect is calm, premium, and engineered: a mobility company that wants to read as trustworthy infrastructure, not a playful consumer toy.

The typographic personality is pure Korean-modern: the entire site runs on **Pretendard**, the de-facto hangul product font, with weight **700 (Bold)** carrying every headline. Display scales are large and declarative — a 61px feature headline with a notably tight `-2%` tracking, 44px hero/section heads, and 34.5px feature-block titles — all at line-height 1.40 with `-0.32px` tracking. Body and UI drop to a quiet 16px / weight 400. There is no second display typeface and no light-weight flourish; hierarchy is built almost entirely from size and the Bold/Regular weight split. This single-font, weight-driven discipline is what gives TMAP its clean, fast, slightly corporate feel.

What distinguishes TMAP from flashier fintech or commerce peers is its restraint with depth and color. Live inspection found `box-shadow: none` across the hero, nav, and content cards — separation comes from large 19px-radius image cards, flat tinted surfaces, and thin `#e2e2e2` hairlines, never elevation. Color is deployed in two registers: the assertive `#0064ff` brand blue for action and emphasis, and a soft light-blue product atmosphere on service pages — a `#f1f8ff` tint and a gentle `linear-gradient(#f1f8ff → #d3e8ff)` hero wash that evokes open sky and roads. The geometry mixes a sharp 4px nav-pill radius with generous 19px content-card rounding and a fully-rounded 35px search pill, signalling "precise where it's functional, friendly where it invites."

**Key Characteristics:**
- Single typeface — Pretendard — with weight 700 (Bold) on every headline; 400 for body
- Monochrome-on-white base: pure black (`#000000`) text on white (`#ffffff`), greyed down a `#464646`/`#585858`/`#777777` ladder
- One saturated brand blue (`#0064ff`) reserved for eyebrows, accent links, the active-nav underline, and value panels
- Large declarative display scale — 61px / 44px / 34.5px — with tight tracking (`-2%` at 61px, `-0.32px` elsewhere)
- Near-shadowless: `box-shadow: none`; depth comes from 19px-radius cards, tinted surfaces, and `#e2e2e2` hairlines
- Soft light-blue product atmosphere — `#f1f8ff` tint + `#f1f8ff → #d3e8ff` gradient — on service pages
- Mixed radius register: 4px nav pills, 19px content cards, 35px search pill, full-round indicator dots
- Cool neutral surfaces (`#f3f5f7`, `#efefef`) for alternating content bands

## 2. Color Palette & Roles

### Primary
- **TMAP Blue** (`#0064ff`): Primary brand color. The single saturated accent — section eyebrows, accent links, the active-nav 4px underline bar, and emphasis. The system's "this matters / this is the action" color.
- **Blue Alt** (`#0061fd`): A near-identical companion blue used as the fill on solid blue value-panels and active indicator dots. Functionally interchangeable with the primary; the tiny shift is a render artifact of the same brand blue.
- **Ink Black** (`#000000`): Primary text and heading color — pure black, used directly on white for maximum editorial contrast.

### Neutral & Surface
- **Pure White** (`#ffffff`): Page background, card surfaces, and text on blue/dark panels.
- **Surface Cool** (`#f3f5f7`): Cool-grey tinted surface for alternating content bands and tinted cards.
- **Surface Grey** (`#efefef`): A flatter neutral grey for secondary blocks and media placeholders.
- **Hairline** (`#e2e2e2`): Thin borders, dividers, and the outline on the white search pill — the primary separation device in this shadow-free system.
- **Hairline Alt** (`#e5e5e5`): Secondary hairline for fine dividers.

### Product Atmosphere (Blue Tints)
- **Surface Blue** (`#f1f8ff`): Very light blue tint for service/product feature sections — the calm "TMAP product" backdrop.
- **Surface Blue Deep** (`#d3e8ff`): The deeper stop of the hero gradient (`#f1f8ff → #d3e8ff`), evoking open sky and roads.

### Text Hierarchy
- **Ink Black** (`#000000`): Headings, primary text, nav labels.
- **Body Grey** (`#464646`): Secondary body copy and descriptions.
- **Muted Grey** (`#585858`): Tertiary text, sub-nav labels, metadata.
- **Faint Grey** (`#777777`): Lowest-emphasis captions and fine print.

## 3. Typography Rules

### Font Family
- **Primary**: `Pretendard` (with `sans-serif` fallback) — the single typeface for the entire site, headlines through body. ExtraBold (800) appears on dense sub-nav, Bold (700) on headlines and main nav, Regular (400) on body.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display XL | Pretendard | 61px (3.84rem) | 700 | 1.40 (86px) | -2% | Big feature/value headline |
| Hero / Section | Pretendard | 44px (2.76rem) | 700 | 1.40 (62px) | -0.32px | Hero & section headlines |
| Feature Block | Pretendard | 35px (2.16rem) | 700 | 1.40 (48px) | -0.32px | H4 feature-block titles |
| Eyebrow / Sub-head | Pretendard | 23px (1.44rem) | 600-700 | 1.40 (32px) | -0.32px | Blue eyebrows, sub-heads |
| Nav | Pretendard | 15px (0.96rem) | 700 | 1.40 (22px) | normal | Top navigation items |
| Body | Pretendard | 16px (1.00rem) | 400 | 1.40 (22px) | normal | Standard reading text |
| Sub-nav | Pretendard | 13px (0.84rem) | 800 | 1.40 | normal | Secondary nav row |

### Principles
- **One font, weight does the work**: Pretendard everywhere; hierarchy is built from size and the Bold (700) / Regular (400) split, not from multiple families.
- **Bold display, quiet body**: Every headline is weight 700; body stays at 400. There is no light-weight headline treatment.
- **Tight tracking on display**: `-2%` at the 61px feature size and `-0.32px` across the rest of the display scale; body sits at normal tracking.
- **Large, declarative heads**: Display sizes (61px / 44px / 34.5px) are big and confident, consistent with the editorial, infrastructure-grade tone.

## 4. Component Stylings

### Buttons

**Hero Search Pill**
- Background: `#ffffff`
- Text: `#000000`
- Border: 1px solid `#e2e2e2`
- Radius: 35px
- Padding: 23px 29px
- Font: 16px Pretendard weight 400
- Height: 69px
- Use: Hero search/launch pill — "어디로 갈까요?" (Where to?)

### Navigation

**Top Nav Item**
- Text: `#000000`
- Font: 15px Pretendard weight 700
- Radius: 4px
- Padding: 8px 23px
- Active: blue `#0064ff` text with a 4px bottom border `#0064ff`
- Use: Primary horizontal nav ("티맵 서비스", "티맵 이야기", "회사소개")

**Sub-nav Item**
- Text: `#585858`
- Font: 13px Pretendard weight 800
- Radius: 4px
- Padding: 8px 23px
- Active: text shifts to `#000000`
- Use: Secondary nav row beneath the main nav

### Cards & Containers

**Article Card**
- Background: `#ffffff`
- Text: `#000000`
- Radius: 19px
- Use: Story/content article card (image-led, no shadow)

**Tinted Surface Card**
- Background: `#f3f5f7`
- Text: `#000000`
- Radius: 19px
- Use: Cool-grey tinted content card

**Solid Blue Panel**
- Background: `#0061fd`
- Text: `#ffffff`
- Radius: 19px
- Use: Service/value panel (운전자 서비스, 대중교통 이용 서비스, 기업고객 서비스)

### Badges

**Blue Eyebrow Label**
- Text: `#0064ff`
- Font: 23px Pretendard weight 700
- Use: Section eyebrow above a headline ("TMAP MOBILITY VISION", "TMAP MOBILITY WAY")

**Indicator Dot**
- Background: `#0061fd`
- Radius: 9999px (full)
- Use: Active carousel/step indicator dot

---

**Verified:** 2026-06-17 (omd:add-reference CREATE — Tier 1 live inspect, 3 brand-owned surfaces)
**Tier 1 sources:** https://www.tmapmobility.com/ ; https://www.tmapmobility.com/service/drive/navigation ; https://www.tmapmobility.com/people/about
**Tier 2 sources:** getdesign.md/tmap — not listed (no entry) ; styles.refero.design/?q=tmap — no TMAP-specific style (Western-biased catalog under-covers KR brands)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: ~4px
- Scale: 4px, 8px, 16px, 20px, 23px, 29px, 48px, 64px
- Notable: Nav items carry ~23px horizontal padding; the hero search pill uses a generous 23px×29px pad for a large, tappable target

### Grid & Container
- Centered single-column hero with a large Pretendard Bold headline and the rounded search pill as the anchor
- Content laid out as wide ~509px-width image-led article cards (19px radius) in multi-column rows
- Feature/service sections alternate white (`#ffffff`), cool grey (`#f3f5f7`), and light-blue (`#f1f8ff`) full-width bands
- Service product pages open on a `#f1f8ff → #d3e8ff` gradient hero wash

### Whitespace Philosophy
- **Editorial breathing room**: large headlines with generous vertical rhythm; the page reads like a magazine spread, not a dense dashboard.
- **Flat segmentation**: sections separate by background tint (`#f3f5f7` / `#f1f8ff` vs `#ffffff`) and hairlines, never by shadow.
- **Color as punctuation**: long monochrome passages are punctuated by `#0064ff` eyebrows and the occasional solid blue panel.

### Border Radius Scale
- Sharp (4px): nav-item pills — precise, functional
- Card (19px): content/article cards and blue panels — the workhorse rounding
- Pill (35px): the hero search/launch pill
- Full (9999px / 100%): indicator dots

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline text, most surfaces |
| Tint (Level 1) | `#f3f5f7` / `#f1f8ff` background shift | Card/section separation without elevation |
| Hairline (Level 2) | `1px solid #e2e2e2` border | Search-pill outline, dividers |

**Shadow Philosophy**: TMAP's corporate site is a near-shadowless system. Live inspection found `box-shadow: none` across the hero, nav, headings, and content cards. Depth and grouping are communicated entirely through flat tinted surfaces (`#f3f5f7`, `#f1f8ff`), large 19px card radii, and thin `#e2e2e2` hairlines. This is a deliberate modern-flat choice consistent with the editorial register — it keeps the brand reading as clean, fast infrastructure rather than a heavy, card-stacked app. When emphasis is needed the system reaches for the brand blue (`#0064ff`) or a solid blue panel (`#0061fd`), never elevation.

## 7. Do's and Don'ts

### Do
- Use Pretendard for everything — headlines at weight 700, body at 400
- Keep the base monochrome: pure black (`#000000`) text on white (`#ffffff`)
- Reserve TMAP Blue (`#0064ff`) for eyebrows, accent links, the active-nav underline, and value panels
- Grey down supporting text along the `#464646` → `#585858` → `#777777` ladder
- Separate sections with flat tints (`#f3f5f7`, `#f1f8ff`) and `#e2e2e2` hairlines, not shadows
- Use the light-blue product atmosphere (`#f1f8ff`, `#f1f8ff → #d3e8ff` gradient) on service/product pages
- Round content cards at 19px and the search pill fully (35px); keep nav pills sharp at 4px
- Apply tight tracking on display headlines (`-2%` at 61px, `-0.32px` elsewhere)

### Don't
- Use drop shadows for elevation — TMAP is a flat, shadow-free system
- Spread the brand blue across many elements — it dilutes the single-accent signal
- Introduce a second display typeface — Pretendard owns the whole system
- Use a light weight for headlines — display is always Bold (700)
- Mix in a second saturated accent color — blue is the only brand hue
- Use pure black backgrounds for whole sections — the base is white, with tints for variety
- Set display headlines with loose/positive tracking — TMAP tracks tight

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero headline compresses, article cards stack |
| Tablet | 640-1024px | 2-up article cards, moderate padding |
| Desktop | 1024-1440px | Full layout, centered hero, multi-column article/service rows |

### Touch Targets
- Hero search pill at 69px height, full 35px radius — an unmistakable, generous target
- Nav items with ~23px horizontal padding for comfortable spacing
- Sub-nav row spaced for touch beneath the main nav

### Collapsing Strategy
- Hero: large Pretendard Bold headline scales down on mobile, weight 700 maintained
- Article-card rows: multi-column → 2-up → single stacked column
- White / cool-grey / light-blue alternating bands maintain full-width treatment
- Service-page gradient hero (`#f1f8ff → #d3e8ff`) persists across breakpoints

### Image Behavior
- Image-led article cards keep their 19px radius and carry no shadow at any size, consistent with the flat system
- Service-page illustrations sit on the light-blue tint without elevation

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary accent: TMAP Blue (`#0064ff`)
- Blue panel fill: Blue Alt (`#0061fd`)
- Background: Pure White (`#ffffff`)
- Tinted surface: Surface Cool (`#f3f5f7`)
- Product atmosphere: Surface Blue (`#f1f8ff`), gradient to (`#d3e8ff`)
- Heading / primary text: Ink Black (`#000000`)
- Body text: Body Grey (`#464646`)
- Muted text: Muted Grey (`#585858`)
- Faint text: Faint Grey (`#777777`)
- Hairline: `#e2e2e2`

### Example Component Prompts
- "Create a hero on white background. Headline at 44px Pretendard weight 700, line-height 1.40, letter-spacing -0.32px, color #000000. Below it a white rounded search pill: #ffffff background, 1px solid #e2e2e2 border, 35px radius, 23px 29px padding, 16px Pretendard — 'Where to?'. No shadow."
- "Design a feature-block heading: 35px Pretendard weight 700, letter-spacing -0.32px, #000000, preceded by a blue eyebrow label in #0064ff at 23px Pretendard weight 700."
- "Build a service section on light blue: #f1f8ff background (or #f1f8ff → #d3e8ff gradient). Solid blue value panel: #0061fd background, white text, 19px radius. Article cards: white #ffffff, 19px radius, no shadow."
- "Create top nav: white header, Pretendard 15px weight 700 items in #000000, 4px radius. Active item gets #0064ff text and a 4px bottom border #0064ff."

### Iteration Guide
1. Pretendard for every element; weight 700 for headlines, 400 for body
2. Brand blue (`#0064ff`) is the single accent — reserve it for eyebrows, links, the active-nav underline, and panels
3. No shadows — separate with `#f3f5f7` / `#f1f8ff` tints and `#e2e2e2` hairlines
4. Mixed radius: 4px nav pills, 19px cards, 35px search pill
5. Text color is `#000000`, greyed to `#464646` / `#585858` / `#777777` for hierarchy
6. Tight tracking on display headlines (-2% at 61px, -0.32px elsewhere)
7. Use the light-blue atmosphere only on service/product pages, not the corporate chrome

---

## 10. Voice & Tone

TMAP Mobility's voice is **clear, confident, and reassuring** — a mobility leader that speaks plainly about getting people where they're going with the least friction. The navigation product page leads with "가장 빠르고 정확한 길안내 / 국내 1위 티맵 내비" ("The fastest, most accurate route guidance — Korea's #1 TMAP Navi"), a register that states a category-leading claim without hype. Corporate copy ("스마트한 이동 생활의 시작" / "The start of a smart mobility life") frames the brand around everyday peace of mind. The tone trusts the reader: it explains capability, not adjectives.

| Context | Tone |
|---|---|
| Hero headlines | Declarative, leadership-framed. "국내 1위 티맵 내비." Confident, not boastful. |
| Section eyebrows | Brand-formal, English-cased. "TMAP MOBILITY VISION", "TMAP MOBILITY WAY". |
| Feature descriptions | Benefit-first, capability-led. Explains what the navigation does and why it's accurate. |
| Value statements | Single concrete virtues. "고객중심", "프로답게", "열린소통" (customer-first, professional, open communication). |
| CTAs | Direct, low-pressure. "어디로 갈까요?" — an invitation, not a sales push. |

**Voice samples (verbatim from live surfaces):**
- "스마트한 이동 생활의 시작" — corporate homepage hero (mission-framed). *(verified live 2026-06-17)*
- "가장 빠르고 정확한 길안내 국내 1위 티맵 내비" — navigation product H1 (leadership claim). *(verified live 2026-06-17)*
- "가장 빠른 길을 넘어, 가장 나다운 길을 찾는 법" — homepage section H2 (beyond-speed framing). *(verified live 2026-06-17)*

**Forbidden register**: aggressive sales urgency, undefined jargon, exclamation-heavy hype, second saturated accent colors that compete with the brand blue.

## 11. Brand Narrative

TMAP Mobility (티맵모빌리티) was established in **December 2020** as a spin-off from **SK Telecom**, carving the long-running TMAP navigation service — Korea's most-used driving-navigation app — into an independent mobility company. The founding premise was to evolve from a single navigation app into a comprehensive **mobility platform**: driving, public transit, parking, EV charging, car rental, and B2B mobility data and APIs all under one roof. The 2021 super-app rebrand introduced the current brand identity — a clean, blue-accented, Pretendard-driven system that signals infrastructure-grade trust over consumer playfulness.

The product positions itself around being the user's most accurate, most-trusted way to move. The navigation page's "국내 1위" (Korea's #1) claim rests on TMAP's scale advantage — its "압도적 운전자 데이터" (overwhelming driver-data) — which feeds route accuracy, arrival-time prediction, and safe-driving scoring (UBI). The brand frames this data not as surveillance but as the engine of better, safer guidance.

What TMAP refuses, visible in its design: the heavy, busy chrome of legacy portal-style Korean services (no shadow-stacked widgets, no rainbow of competing accents), and the gimmicky playfulness of consumer apps chasing engagement. What it embraces: a calm monochrome-on-white editorial base, a single confident brand blue, large declarative Pretendard headlines, and a soft light-blue product atmosphere that evokes open roads and sky — a company that wants to read as dependable mobility infrastructure for everyday life.

## 12. Principles

1. **Accuracy is the product.** TMAP's claim to leadership is precision — fastest, most accurate guidance from the largest driver dataset. *UI implication:* present data and capability plainly; let real numbers and clear feature copy carry weight, not decoration.
2. **One accent, used sparingly.** The brand blue (`#0064ff`) means "this matters." *UI implication:* reserve blue for eyebrows, links, the active-nav underline, and value panels; keep everything else monochrome so the accent always reads.
3. **Calm over busy.** Mobility infrastructure should feel steady, not frantic. *UI implication:* flat surfaces, no shadows, generous editorial whitespace; emphasis via color, never elevation.
4. **One voice, one typeface.** Pretendard carries the whole system. *UI implication:* build hierarchy from size and the Bold/Regular split, not from extra families or weights.
5. **Friendly where it invites, precise where it functions.** *UI implication:* round the search pill and content cards generously (35px / 19px) to feel approachable; keep nav pills sharp (4px) where precision reads as competence.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable TMAP Mobility user segments (Korean drivers, commuters, fleet/business customers), not individual people.*

**김도현, 38, 서울.** A daily commuter who relies on TMAP Navi for the fastest route to work and trusts its arrival-time prediction over rivals. Values that the app feels accurate and uncluttered; would be put off by a navigation UI that buried the route under ads or playful clutter.

**이서연, 29, 경기.** A new driver who uses TMAP's safe-driving score and insurance benefit (UBI) to build better habits. Appreciates that the brand frames driver data as helping her, explained in plain Korean rather than fine print.

**박준호, 45, 부산.** A logistics operations manager evaluating TMAP's B2B mobility data and APIs for fleet routing. Trusts the brand because the corporate site reads as serious infrastructure — calm, data-led, leadership-claimed — not a consumer gimmick.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no saved places / history)** | White canvas. Single Ink Black (`#000000`) line at body size explaining nothing's saved yet, with one blue (`#0064ff`) accent path to start. No illustration clutter. |
| **Empty (search, no results)** | Muted Grey (`#585858`) single line stating no match, with a prompt to adjust the query. Calm and plain. |
| **Loading (route / content fetch)** | Skeleton blocks on `#f3f5f7` tinted surface at final card dimensions, 19px radius. Flat pulse, no shadow shimmer — consistent with the shadowless system. |
| **Loading (in-place refresh)** | Subtle blue (`#0064ff`) progress indicator; previous content stays visible. |
| **Error (request failed)** | Inline message in Ink Black with a plain-language explanation and a retry. No bare "오류가 발생했습니다" — states what to do next. |
| **Error (form validation)** | Field-level message below the input describing what's valid, not just "필수". |
| **Success (action saved / submitted)** | Brief inline confirmation in calm tone; next-step detail linked immediately below. No celebratory emoji. |
| **Skeleton** | `#f3f5f7` blocks at final dimensions, 19px radius, flat pulse. |
| **Disabled** | Faint Grey (`#777777`) text on reduced-opacity surface; blue actions fade rather than turn grey to preserve the brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, nav-underline shift, focus |
| `motion-standard` | 220ms | Card/section reveal, carousel step, dropdown |
| `motion-slow` | 340ms | Page-level transitions, hero reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, panels, carousel slides |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is functional and steady — consistent with the calm, infrastructure-grade aesthetic. The active-nav 4px underline slides smoothly between items; carousel/article rows advance at `motion-standard / ease-enter` with a quiet fade-and-rise; indicator dots cross-fade. No bounce or spring — a mobility-leadership brand signals dependability, not playfulness. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the product remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-17) via playwright getComputedStyle on three brand-owned surfaces:
- https://www.tmapmobility.com/ (corporate homepage) — Pretendard 700 headlines at 44.16px / -0.32px;
  body Pretendard 16px / weight 400 / color rgb(0,0,0); brand blue rgb(0,100,255) #0064ff on NEW labels +
  indicator dots rgb(0,97,253) #0061fd; nav items 15.36px/700 rgb(0,0,0), sub-nav 13.44px/800 rgb(88,88,88);
  hero search pill rgb(255,255,255) bg / radius 34.56px / 1px solid rgb(242,240,240) / 23.04px 28.8px pad;
  content cards radius 19.2px; box-shadow none across hero/nav/cards.
- https://www.tmapmobility.com/service/drive/navigation (navigation product page) — H1 "국내 1위 티맵 내비"
  Pretendard 44.16px/700/-0.32px rgb(0,0,0); big H2 61.44px/700/-2% rgb(0,0,0); feature H4 34.56px/700;
  brand blue rgb(0,100,255) as fg accent + active-nav 4px underline bar; tinted surface rgb(241,248,255)
  #f1f8ff; hero gradient linear-gradient(rgb(241,248,255) → rgb(211,232,255)) = #f1f8ff → #d3e8ff.
- https://www.tmapmobility.com/people/about (company-intro page) — eyebrows "TMAP MOBILITY VISION" /
  "TMAP MOBILITY WAY" in rgb(0,100,255) #0064ff at 23.04px/600-700; WAY value words "고객중심"/"프로답게"/
  "열린소통" at 61.44px/700 rgb(0,0,0); solid blue service panels bg rgb(0,100,255)/rgb(0,97,253) white text;
  grey ladder rgb(70,70,70)/rgb(88,88,88)/rgb(119,119,119); hairlines rgb(226,226,226)/rgb(229,229,229).

Token-level claims (§1-9) are sourced from this live inspection.

Voice samples (§10) are verbatim from the live surfaces (homepage hero, navigation H1, homepage section H2).

Brand narrative (§11): TMAP Mobility (티맵모빌리티) was established December 2020 as a spin-off of SK Telecom,
building the TMAP navigation service into an independent mobility platform; 2021 super-app rebrand. These are
widely documented public facts about the company; specific details beyond the live surfaces are general public
knowledge, not directly quoted from a verified TMAP statement in this turn.

Personas (§13) are fictional archetypes informed by publicly observable TMAP user segments (Korean drivers,
commuters, fleet/business customers). Names are illustrative; they do not refer to real people.

Interpretive claims (e.g., "one accent used sparingly", "calm over busy as a rejection of legacy portal chrome")
are editorial readings connecting TMAP's observed design to its positioning, not directly sourced TMAP statements.

Tier 2: getdesign.md/tmap and getdesign.md/tmapmobility return "No designs found" (not listed);
styles.refero.design/?q=tmap returns no TMAP-specific style (Western-biased catalog under-covers KR brands).
Per spec/regional-sources.yaml, KR refs rely on >= 2 brand-owned Tier-1 surfaces, satisfied by the three
tmapmobility.com surfaces above.
-->
