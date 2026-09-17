---
id: kcd
name: Korea Credit Data
display_name_kr: 한국신용데이터 (캐시노트)
country: KR
category: fintech
homepage: "https://kcd.co.kr"
primary_color: "#2d91ff"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=kcd.co.kr&sz=128"
verified: "2026-06-26"
added: "2026-06-26"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-26"
  note: "primary = live action blue (#2d91ff), confirmed across both kcd.co.kr corporate and cashnote.kr product surfaces; pressed/strong blue (#0257d7). Deep navy (#192d82) carries product headings; corporate ink (#1e2137). Near-shadowless flat system; separation via tinted surfaces (#f4f7f9 / #f9fbfc) + blue tints (#e2f3ff / #cae7ff)."
  colors:
    primary: "#2d91ff"
    primary-deep: "#0257d7"
    navy: "#192d82"
    ink: "#1e2137"
    ink-deep: "#0c1120"
    body: "#44546f"
    muted: "#728094"
    faint: "#a4aeba"
    canvas: "#ffffff"
    surface: "#f4f7f9"
    surface-alt: "#f9fbfc"
    tint-blue: "#e2f3ff"
    tint-blue-strong: "#cae7ff"
    pale-blue: "#f3faff"
    hairline: "#eeeeee"
    on-primary: "#ffffff"
  typography:
    family: { sans: "Pretendard" }
    display-hero: { size: 72, weight: 700, lineHeight: 1.10, use: "Product hero headline, Pretendard Bold" }
    display:      { size: 56, weight: 700, lineHeight: 1.21, use: "Section hero headlines" }
    heading:      { size: 46, weight: 700, lineHeight: 1.35, use: "Corporate section heads" }
    subheading:   { size: 44, weight: 700, lineHeight: 1.27, use: "Product feature heads" }
    title:        { size: 24, weight: 600, lineHeight: 1.21, use: "Stat / sub-section titles" }
    nav:          { size: 18, weight: 700, lineHeight: 1.20, use: "Corporate top nav links" }
    body:         { size: 16, weight: 400, lineHeight: 1.50, use: "Standard reading text" }
    button-lg:    { size: 19, weight: 700, lineHeight: 1.00, use: "Large CTA label" }
    button:       { size: 16, weight: 600, lineHeight: 1.00, use: "Compact CTA label" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 6, md: 12, lg: 16, xl: 20, full: 9999 }
  shadow:
    none: "none"
  components:
    button-soft: { type: button, bg: "#f4f7f9", fg: "#2d91ff", radius: "16px", height: "48px", padding: "0 16px", font: "19px / 700", use: "Primary soft CTA — 앱 다운로드, 캐시노트 시작하기 (blue label on grey fill)" }
    button-outline: { type: button, bg: "#ffffff", fg: "#2d91ff", border: "1px solid #2d91ff", radius: "16px", height: "56px", padding: "0 24px", font: "19px / 600", use: "Outline CTA — 캐시노트 컨설턴트" }
    button-corporate: { type: button, fg: "#1e2137", border: "1px solid #1e2137", radius: "6px", height: "51px", padding: "15px 32px", font: "16px / 700", use: "Corporate ghost CTA — 서비스 보기, 자세히 보기" }
    input-field: { type: input, bg: "#f4f7f9", fg: "#1e2137", border: "1px solid #eeeeee", radius: "12px", padding: "0 16px", use: "Form/search field — surface fill + hairline, focus #2d91ff" }
    card-surface: { type: card, bg: "#f9fbfc", border: "1px solid #f9fbfc", radius: "20px", padding: "0 24px", use: "Feature card on light surface (shadowless)" }
    card-tint: { type: card, bg: "#e2f3ff", fg: "#192d82", radius: "20px", use: "Blue-tinted highlight card" }
    badge-stat: { type: badge, bg: "#e2f3ff", fg: "#192d82", radius: "20px", font: "16px / 600", use: "Stat / metric chip — 2026년 5월 기준" }
    nav-link: { type: tab, fg: "#1e2137", font: "18px / 700", active: "text #2d91ff", use: "Corporate top nav item" }
  components_harvested: true
---

# Design System Inspiration of Korea Credit Data

## 1. Visual Theme & Atmosphere

Korea Credit Data (한국신용데이터) is the SME-fintech company behind 캐시노트 (CashNote), Korea's most widely used business-management platform for small-business owners (사장님), and its surfaces read like calm, data-grade financial software rather than a loud consumer app. Across both the corporate site (`kcd.co.kr`) and the flagship product page (`cashnote.kr`) the canvas is pure white (`#ffffff`), segmented by cool near-white surfaces — a grey surface (`#f4f7f9`) and an even paler card surface (`#f9fbfc`) — so content breaks into airy, legible zones. The single saturated brand accent is a confident action blue (`#2d91ff`), reserved for CTAs and key interactive text; a deeper pressed blue (`#0257d7`) backs it for strong states. The effect is trustworthy and engineered: a fintech that handles real money for hundreds of thousands of merchants and looks like it.

The typographic personality is Korean-product-standard: everything is set in **Pretendard**, the de-facto hangul UI face, with display weight at Bold (700) and body at Regular (400). The product hero runs large — 72px Bold on `cashnote.kr` ("내 사업이 채워지는 모든 순간") — while the corporate site anchors on 52–56px Bold headlines and 46px section heads. Headings carry a deep navy (`#192d82`) on the product surface and a warmer corporate ink (`#1e2137`) on the company site, with the darkest text reaching a near-black (`#0c1120`). Below the headline, the text ladder cools and lightens through a body slate (`#44546f`), a muted slate (`#728094`), and a faint blue-grey (`#a4aeba`) for the lowest-emphasis labels.

What distinguishes KCD from flashier fintech peers is its restraint with depth and its disciplined blue. Live inspection found `box-shadow: none` across heroes, nav, headings, buttons, and cards — separation is done entirely with flat tinted surfaces and a single `#eeeeee` hairline, never elevation. When the system wants to highlight a metric or a card it does not add a shadow; it reaches for the blue family — a light blue tint (`#e2f3ff`), a stronger blue tint (`#cae7ff`), or the palest blue (`#f3faff`) used for text reversed on a blue field. Geometry is softly rounded: 6px on corporate ghost buttons, 12–16px on product CTAs, and a generous 20px on cards. The result is a flat, fast, mobile-native aesthetic — financial tooling that feels approachable to a shop owner and rigorous to an engineer at once.

**Key Characteristics:**
- Pretendard throughout — Bold (700) for display, Regular (400) for body, hangul-optimized
- Single saturated action blue (`#2d91ff`) reserved for CTAs and key interactive text
- Deeper pressed blue (`#0257d7`) for strong/active states
- Deep navy (`#192d82`) product headings; warmer corporate ink (`#1e2137`); near-black (`#0c1120`) for max contrast
- Flat depth: `box-shadow: none` everywhere; tinted surfaces (`#f4f7f9`, `#f9fbfc`) + `#eeeeee` hairline do the separating
- Blue tints (`#e2f3ff`, `#cae7ff`, `#f3faff`) for highlight cards, metric chips, and reversed text
- Soft rounding ladder — 6px corporate ghost, 12–16px product CTAs, 20px cards
- Cool neutral text ladder (`#44546f` → `#728094` → `#a4aeba`)

## 2. Color Palette & Roles

### Primary
- **Action Blue** (`#2d91ff`): Primary brand and action color. The saturated blue on CTA labels, interactive text, and emphasis — the system's single "do this" color, confirmed live on both `kcd.co.kr` and `cashnote.kr`.
- **Pressed Blue** (`#0257d7`): Deeper blue for pressed/active and strong-emphasis states on the action blue.
- **Deep Navy** (`#192d82`): Primary heading color on the product surface — a dark, trustworthy blue that carries the CashNote headlines and stat labels.

### Ink & Neutrals
- **Corporate Ink** (`#1e2137`): Primary text/heading color on the company site; nav links and body. A dark blue-charcoal used instead of pure black.
- **Ink Deep** (`#0c1120`): Near-black for maximum-contrast text moments.
- **Body Slate** (`#44546f`): Secondary body copy and descriptions.
- **Muted Slate** (`#728094`): Tertiary text, captions, metadata.
- **Faint Blue-Grey** (`#a4aeba`): Disabled text, placeholders, lowest-emphasis labels.

### Surface & Tint
- **Pure White** (`#ffffff`): Page background, white cards, text reversed on blue/navy.
- **Surface Grey** (`#f4f7f9`): Cool grey surface for soft buttons and segmented sections.
- **Surface Alt** (`#f9fbfc`): Palest near-white card surface.
- **Tint Blue** (`#e2f3ff`): Light blue tint for highlight cards and metric chips.
- **Tint Blue Strong** (`#cae7ff`): Stronger blue tint for emphasized blue surfaces.
- **Pale Blue** (`#f3faff`): The palest blue, used for text reversed on a saturated blue field.
- **Hairline** (`#eeeeee`): Thin borders and dividers — the primary separation device in the shadowless system.
- **On Primary** (`#ffffff`): White text/iconography on blue and navy fills.

## 3. Typography Rules

### Font Family
- **Sans**: `Pretendard` (with system sans fallback) — the single family across corporate and product surfaces. Bold (700) for display and nav, SemiBold (600) for compact UI, Regular (400) for body.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Product Hero | Pretendard | 72px (4.50rem) | 700 | 1.10 | CashNote hero ("내 사업이 채워지는 모든 순간") |
| Section Hero | Pretendard | 56px (3.50rem) | 700 | 1.21 | Product/corporate section heroes |
| Corporate Head | Pretendard | 46px (2.88rem) | 700 | 1.35 | Corporate section headings |
| Feature Head | Pretendard | 44px (2.75rem) | 700 | 1.27 | Product feature headings |
| Title | Pretendard | 24px (1.50rem) | 600 | 1.21 | Stat labels, sub-section titles |
| Nav Link | Pretendard | 18px (1.13rem) | 700 | 1.20 | Corporate top nav items |
| Body | Pretendard | 16px (1.00rem) | 400 | 1.50 | Standard reading text |
| Button Large | Pretendard | 19px (1.19rem) | 700 | 1.00 | Large CTA labels |
| Button | Pretendard | 16px (1.00rem) | 600 | 1.00 | Compact CTA labels |

### Principles
- **One family, weight-driven hierarchy**: Pretendard carries everything; the jump from Bold (700) display to Regular (400) body is the primary hierarchy signal.
- **Large product display**: the CashNote hero runs to 72px Bold — generous, declarative, mobile-first.
- **SemiBold for UI density**: 600 is the working weight for stat titles and compact buttons; 700 for the large CTAs and corporate nav.
- **Hangul-first sizing**: body sits at 16px / line-height 1.5 for comfortable hangul legibility in information-dense layouts.

## 4. Component Stylings

### Buttons

**Soft CTA (Primary)**
- Background: `#f4f7f9`
- Text: `#2d91ff`
- Radius: 16px
- Padding: 0px 16px
- Height: 48px
- Font: 19px Pretendard weight 700
- Use: Primary soft call-to-action — "앱 다운로드", "캐시노트 시작하기" (blue label on grey fill)

**Outline CTA**
- Background: `#ffffff`
- Text: `#2d91ff`
- Border: 1px solid `#2d91ff`
- Radius: 16px
- Padding: 0px 24px
- Height: 56px
- Font: 19px Pretendard weight 600
- Use: Secondary outline action — "캐시노트 컨설턴트"

**Corporate Ghost**
- Text: `#1e2137`
- Border: 1px solid `#1e2137`
- Radius: 6px
- Padding: 15px 32px
- Height: 51px
- Font: 16px Pretendard weight 700
- Use: Corporate-site ghost CTA — "서비스 보기", "자세히 보기"

### Inputs

**Form / Search Field**
- Background: `#f4f7f9`
- Text: `#1e2137`
- Border: 1px solid `#eeeeee`
- Radius: 12px
- Padding: 0px 16px
- Focus: `#2d91ff`
- Use: Form/search field following the surface-fill + hairline convention; faint blue-grey (`#a4aeba`) placeholder

### Cards & Containers

**Surface Card**
- Background: `#f9fbfc`
- Border: 1px solid `#f9fbfc`
- Radius: 20px
- Padding: 0px 24px
- Use: Feature card on the light surface — flat, shadowless

**Blue-Tinted Card**
- Background: `#e2f3ff`
- Text: `#192d82`
- Radius: 20px
- Use: Highlight card that uses blue tint instead of elevation

### Badges

**Stat Chip**
- Background: `#e2f3ff`
- Text: `#192d82`
- Radius: 20px
- Font: 16px Pretendard weight 600
- Use: Metric / stat chip — "2026년 5월 기준", deep-navy label on a light blue tint

### Navigation
- Background: `#ffffff`
- Text: `#1e2137`
- Font: 18px Pretendard weight 700
- Active: action blue `#2d91ff` text on active item
- Use: Corporate top nav ("회사소개", "서비스", "팀 문화", "인재영입", "새 소식")

---

**Verified:** 2026-06-26 (omd:add-reference CREATE — Tier 1 live inspect, 2 surfaces)
**Tier 1 sources:** https://kcd.co.kr (corporate, live computed style); https://cashnote.kr (CashNote product, live computed style); https://blog.kcd.co.kr (official company blog); https://github.com/koreacreditdata (official GitHub org)
**Tier 2 sources:** getdesign.md/kcd — SPA shell only, no KCD-specific data; styles.refero.design ?q=cashnote / ?q=korea credit — returns only the generic browse list (same UUIDs across unrelated queries), no genuine KCD entry
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px
- Notable: large CTAs use generous horizontal padding (24–32px) and tall 48–56px hit areas for comfortable touch

### Grid & Container
- Centered single-column heroes with the large Bold Pretendard headline as the anchor
- Stat/metric blocks arranged in a horizontal row of navy-titled figures
- Feature sections alternate white (`#ffffff`) and pale surface (`#f9fbfc`) full-width bands
- Cards use a 20px radius and group related features/metrics

### Whitespace Philosophy
- **Breathing room over density**: despite being a data-heavy fintech, the marketing surfaces are airy with generous vertical rhythm.
- **Flat segmentation**: sections separate by background tint (`#f4f7f9` / `#f9fbfc`) and `#eeeeee` hairlines, not by shadow.
- **Blue for emphasis, not depth**: highlights reach for `#e2f3ff` / `#cae7ff` tint rather than elevation.

### Border Radius Scale
- Small (6px): corporate ghost buttons
- Medium (12px): compact buttons, inputs
- Large (16px): product CTAs
- XLarge (20px): cards — the workhorse
- Full (9999px): pills, avatars

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline text, most surfaces |
| Tint (Level 1) | `#f4f7f9` / `#f9fbfc` background shift | Card/section separation without elevation |
| Hairline (Level 2) | `1px solid #eeeeee` border | Dividers, field outlines |
| Accent (Level 3) | `#e2f3ff` / `#cae7ff` blue tint | Highlight cards, metric chips — emphasis via color |

**Shadow Philosophy**: KCD is a near-shadowless system. Live inspection found `box-shadow: none` across the hero, nav, headings, buttons, and cards on both surfaces. Depth and grouping come entirely from flat tinted surfaces (`#f4f7f9`, `#f9fbfc`) and thin `#eeeeee` hairlines. When emphasis is needed the system reaches for color — the action blue (`#2d91ff`), the deep navy (`#192d82`), or a blue tint (`#e2f3ff` / `#cae7ff`) — never elevation. This keeps a money-handling product feeling clean, fast, and mobile-native rather than heavy.

## 7. Do's and Don'ts

### Do
- Set everything in Pretendard — Bold (700) for display, Regular (400) for body
- Reserve action blue (`#2d91ff`) for CTAs and key interactive text — keep it the single action color
- Use the deeper blue (`#0257d7`) for pressed/active states
- Use deep navy (`#192d82`) for product headings and corporate ink (`#1e2137`) for the company site
- Separate sections with flat tints (`#f4f7f9` / `#f9fbfc`) and `#eeeeee` hairlines, not shadows
- Highlight with blue tints (`#e2f3ff` / `#cae7ff`) instead of elevation
- Use the soft-CTA pattern — blue label on a grey (`#f4f7f9`) fill at 16px radius
- Round cards generously at 20px

### Don't
- Use drop shadows for elevation — KCD is a flat, shadow-free system
- Spread the action blue across many elements — it dilutes the single-action signal
- Use pure black for text — reach for ink (`#1e2137`), deep navy (`#192d82`), or near-black (`#0c1120`)
- Mix in a second saturated accent color — blue is the only hue
- Set body text in Bold — Bold is for display and CTAs
- Use a different font for headlines — Pretendard owns both display and body
- Use sharp/square corners on cards — cards round at 20px

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero headline compresses, stat rows stack |
| Tablet | 640-1024px | Moderate padding, 2-up feature cards |
| Desktop | 1024-1440px | Full layout, centered hero, multi-column feature bands |

### Touch Targets
- Soft CTA at 48px height, outline CTA at 56px — comfortably tappable
- Corporate ghost button at 51px with 15px 32px padding
- Nav links at 18px Bold with generous spacing

### Collapsing Strategy
- Hero: 72px Bold product headline scales down on mobile, weight 700 maintained
- Stat row: horizontal figures wrap/stack on narrow viewports
- Feature bands: multi-column → stacked single column
- White / pale (`#f9fbfc`) alternating sections keep full-width treatment

### Image Behavior
- App screenshots and illustrations carry no shadow at any size, consistent with the flat system
- Cards maintain the 20px radius across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA / interactive: Action Blue (`#2d91ff`)
- Pressed/active: Pressed Blue (`#0257d7`)
- Product heading: Deep Navy (`#192d82`)
- Corporate text/heading: Corporate Ink (`#1e2137`)
- Max-contrast text: Ink Deep (`#0c1120`)
- Body / muted / faint: `#44546f` → `#728094` → `#a4aeba`
- Background: Pure White (`#ffffff`)
- Surfaces: Grey (`#f4f7f9`), Alt (`#f9fbfc`)
- Blue tints: `#e2f3ff`, `#cae7ff`, palest `#f3faff`
- Hairline: `#eeeeee`

### Example Component Prompts
- "Create a hero on white background. Headline at 72px Pretendard weight 700, color #192d82, '내 사업이 채워지는 모든 순간'. Soft CTA: #f4f7f9 background, #2d91ff text, 16px radius, 0 16px padding, 48px height, 19px Pretendard 700 — '앱 다운로드'. No shadow."
- "Design a feature card: #f9fbfc background, 20px radius, no shadow, 0 24px padding. Title 44px Pretendard weight 700, #192d82. Body 16px Pretendard 400, #44546f."
- "Build a stat chip: #e2f3ff background, #192d82 text, 20px radius, 16px Pretendard weight 600 — '2026년 5월 기준'."
- "Create corporate nav: white header. 18px Pretendard 700 links, #1e2137 text, action blue #2d91ff on active. Ghost CTA: transparent, 1px solid #1e2137, 6px radius, 15px 32px padding — '서비스 보기'."

### Iteration Guide
1. Pretendard for everything; weight 700 display, 400 body
2. Action blue (`#2d91ff`) is the single action color — don't spread it
3. No shadows — separate with `#f4f7f9` / `#f9fbfc` tint and `#eeeeee` hairlines
4. Blue tints (`#e2f3ff` / `#cae7ff`) for highlight, never elevation
5. Headings are navy (`#192d82`) or ink (`#1e2137`), never pure black
6. Cards round at 20px; product CTAs at 16px; corporate ghost at 6px
7. Soft-CTA pattern is signature: blue label on grey fill

---

## 10. Voice & Tone

KCD's voice is **plain, empathetic, and reassuring** — a partner that speaks to small-business owners (사장님) in everyday Korean, not finance jargon. The corporate mission line "모든 과정이 쉬워지도록 돕습니다" ("We help make every step easier") and the product hero "내 사업이 채워지는 모든 순간" ("Every moment my business fills up") set the register: warm, ownership-centered, never hype. Copy frames the company as solving the small-business owner's real problems "데이터와 연결로" (with data and connection), and consistently starts from "공감" (empathy) toward the 사장님.

| Context | Tone |
|---|---|
| Corporate mission | Calm, purpose-framed. "모든 과정이 쉬워지도록 돕습니다." |
| Product hero | Ownership-centered, warm. "내 사업이 채워지는 모든 순간." |
| Feature copy | Benefit-first, plain Korean. "매출을 확인하고 관리하는 모든 순간." |
| CTAs | Direct, low-pressure. "캐시노트 시작하기", "앱 다운로드", "자세히 보기". |
| Trust / scale copy | Concrete, dated. "2026년 5월 기준" beside real metrics, not vague claims. |

**Voice samples (verbatim from live surfaces):**
- "모든 과정이 쉬워지도록 돕습니다" — corporate hero (mission). *(verified live 2026-06-26, kcd.co.kr)*
- "사업의 모든 순간 마주하는 문제를 데이터와 연결로 풀어내고자 합니다." — corporate statement. *(verified live 2026-06-26, kcd.co.kr)*
- "모든 고민은 사장님에 대한 공감에서 시작합니다." — corporate statement (empathy-first). *(verified live 2026-06-26, kcd.co.kr)*
- "내 사업이 채워지는 모든 순간" — CashNote product hero. *(verified live 2026-06-26, cashnote.kr)*

**Forbidden register**: aggressive sales urgency, undefined financial jargon left unexplained, fear-based pitching, exclamation-heavy hype, anything that talks down to a 사장님.

## 11. Brand Narrative

Korea Credit Data (한국신용데이터) was founded in **2016** by **김동호 (Kim Dong-ho, CEO)** to solve a structural gap in Korea's small-business economy: the country's millions of independent shop owners generated rich commercial data — card sales, settlements, cash flow — but had no simple way to see or use it. Kim, who had previously founded the survey company 아이디인큐 (now 오픈서베이), built KCD around a single conviction stated on its site: that "누구나 기술 혜택을 누릴 수 있는 세상" (a world where anyone can enjoy the benefits of technology) should include the corner-store owner, not just large enterprises.

The company's flagship product, **캐시노트 (CashNote)**, launched in 2017 as a business-management service delivered first through KakaoTalk: a sole proprietor could see consolidated card-sales and settlement data without installing complex accounting software. CashNote grew into one of Korea's most widely used SME platforms — the homepage frames it as serving "사업자 경영관리" across "관리 거래액" and a large base of "캐시노트 이용 사업장" — expanding from sales tracking into payments, supplies purchasing, lending/credit, and consultant services, all under the "사업의 모든 순간" (every moment of business) framing.

What KCD refuses, visible in its design: the heavy, intimidating chrome of legacy financial software (no shadow-stacked enterprise dashboards), and the dark-pattern urgency of consumer fintech marketing. What it embraces: a flat, fast, mobile-native interface; a single trustworthy action blue; large plain-Korean headlines; and an empathy-first stance toward the 사장님 it explicitly names as the starting point for every product decision.

## 12. Principles

1. **Empathy for the 사장님 first.** KCD states that every concern "begins from empathy for the business owner." *UI implication:* lead with the owner's real moment and plain language; never with the product's feature list or jargon.
2. **Data and connection, made simple.** The mission is to resolve business problems "데이터와 연결로." *UI implication:* surface consolidated numbers clearly (dated metrics, navy stat labels) and hide the underlying complexity.
3. **One action, one color.** Action blue (`#2d91ff`) means "do this." *UI implication:* reserve the saturated blue for CTAs and key interactive text so the next step is never ambiguous.
4. **Flat and fast.** Mobile-native clarity beats decorative depth. *UI implication:* no shadows; separate with tint and hairlines; reach for blue tint, not elevation, to emphasize.
5. **Tech benefits for everyone.** "누구나 기술 혜택을 누릴 수 있는 세상." *UI implication:* keep targets large, copy plain, and the interface approachable to a non-technical owner.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable KCD / CashNote user segments (Korean small-business owners, sole proprietors,店 operators), not individual people.*

**박은정, 47, 대구.** Runs a neighborhood bakery. Uses CashNote to see consolidated card sales each morning without opening a spreadsheet. Trusts the product because it speaks plain Korean and never pressures her to buy more.

**김상호, 39, 인천.** A first-time restaurant owner preparing to open. Uses the 창업 준비 flow and consultant entry to understand settlements before launch. Values that the interface feels calm, not like enterprise accounting software.

**이지연, 52, 부산.** Operates two retail shops. Relies on CashNote for payments and supplies purchasing in one place, and reads the dated metrics ("2026년 5월 기준") as a sign the numbers are real and current.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no sales data yet)** | White canvas. Single deep-navy (`#192d82`) line explaining no data has synced yet, with one action-blue CTA to connect a source. No illustration clutter. |
| **Empty (saved/bookmarked, none yet)** | Muted slate (`#728094`) single line: nothing saved yet, plus a path back. Honest, calm. |
| **Loading (metrics fetch)** | Skeleton blocks on `#f4f7f9` surface at final card dimensions, 20px radius. Flat pulse — no shadow shimmer, consistent with the shadowless system. |
| **Loading (in-place refresh)** | Subtle action-blue (`#2d91ff`) progress indicator; previous values stay visible. |
| **Error (sync failed)** | Inline message in corporate ink (`#1e2137`) with a plain-language explanation and a retry. No bare "오류가 발생했습니다" — states what to do next. |
| **Error (form validation)** | Field-level message below the input; describes what is valid, not just "필수". |
| **Success (action complete)** | Brief inline confirmation in calm tone; next-step detail linked below. No celebratory emoji. |
| **Skeleton** | `#f4f7f9` / `#f9fbfc` blocks at final dimensions, 20px radius, flat pulse. |
| **Disabled** | Faint blue-grey (`#a4aeba`) text on reduced-opacity surface; blue actions fade rather than turn grey to preserve brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, button press, focus |
| `motion-standard` | 200ms | Card/section reveal, sheet, dropdown |
| `motion-slow` | 320ms | Page-level transitions, hero reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — sheets, cards, chips |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is functional and quiet — consistent with the flat, fast aesthetic. Buttons respond to press with a subtle scale/opacity shift; cards and metrics fade-in from below at `motion-standard / ease-enter`. No bounce or spring — a money-handling product for shop owners signals steadiness, not playfulness. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the product remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-26) via playwright getComputedStyle on https://kcd.co.kr and https://cashnote.kr:
- Corporate hero H2 "모든 과정이 쉬워지도록 돕습니다" — Pretendard 52px / 700 / white
- Corporate H3 "사업의 모든 순간 마주하는 문제를 데이터와 연결로 풀어내고자 합니다." — Pretendard 46px / 700 / rgb(30,33,55) #1e2137
- Corporate H3 "모든 고민은 사장님에 대한 공감에서 시작합니다." — 46px / 700
- CashNote hero H2 "내 사업이 채워지는 모든 순간" — Pretendard 72px / 700 / rgb(25,45,130) #192d82
- CashNote section "창업을 준비하는 사장님들을 위한 첫걸음" — 56px / 700 / #192d82
- Action blue #2d91ff (rgb 45,145,255) confirmed across both surfaces (CTA text + fills)
- box-shadow: none across hero/nav/headings/buttons/cards (shadowless system)

Voice samples (§10) are verbatim from the live corporate (kcd.co.kr) and product (cashnote.kr) surfaces.

Brand narrative (§11): KCD (한국신용데이터) founded 2016 by 김동호 (Kim Dong-ho); CashNote (캐시노트)
launched 2017 as a KakaoTalk-delivered SME business-management service. These are widely
documented public facts about the company; specific founding details beyond the live homepage
mission text are general public knowledge, not directly quoted from a verified KCD statement
in this turn. Mission phrases ("누구나 기술 혜택을 누릴 수 있는 세상", "사업의 모든 순간",
"공감") are verbatim from the live homepage.

Personas (§13) are fictional archetypes informed by publicly observable KCD/CashNote user
segments (Korean small-business owners). Names are illustrative; they do not refer to real people.

Interpretive claims (e.g., "one action, one color", "flat and fast as a rejection of legacy
financial software chrome") are editorial readings connecting KCD's observed design to its
stated positioning, not directly sourced KCD statements.
-->
