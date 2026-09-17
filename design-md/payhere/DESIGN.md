---
id: payhere
name: Payhere
display_name_kr: 페이히어
country: KR
category: fintech
homepage: "https://payhere.in/"
primary_color: "#008cff"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=payhere.in&sz=128"
verified: "2026-07-02"
added: "2026-07-02"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-07-02"
  note: "primary = live interactive azure (#008cff — filled primary CTA + active tab ring); promo/active-filter blue (#0077fe); logo mark spans bright blue #1d99ff, indigo #163bd8, purple #a164f9. Near-black body text (#000000); navy card labels (#1c2638) and deep-navy headings (#101a2e)."
  colors:
    primary: "#008cff"
    primary-strong: "#0077fe"
    brand-blue: "#1d99ff"
    brand-indigo: "#163bd8"
    brand-purple: "#a164f9"
    ink: "#101a2e"
    ink-card: "#1c2638"
    ink-pure: "#000000"
    body: "#5f6976"
    muted: "#919ba5"
    faint: "#c1cad2"
    canvas: "#ffffff"
    surface: "#f5f8fa"
    surface-alt: "#f4f8f9"
    on-primary: "#ffffff"
    accent-coral: "#ff5b46"
    accent-green: "#08d07e"
  typography:
    family: { primary: "Noto Sans KR", blog: "Pretendard" }
    display-hero: { size: 44, weight: 700, lineHeight: 1.40, use: "Hero headline, Noto Sans KR Bold" }
    section:      { size: 32, weight: 700, lineHeight: 1.50, use: "Section / feature headings (POS 일체형)" }
    card-title:   { size: 26, weight: 700, lineHeight: 1.30, use: "Product-category card labels (카드 단말기)" }
    button:       { size: 16, weight: 700, lineHeight: 1.00, use: "Filled primary CTA / active tab label" }
    body:         { size: 16, weight: 400, lineHeight: 1.50, use: "Body / UI / nav text, Noto Sans KR" }
    blog-hero:    { size: 48, weight: 700, lineHeight: 1.30, use: "Tech-blog article H1, Pretendard" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 20, xl: 24, xxl: 48 }
  rounded: { sm: 5, md: 12, lg: 16, xl: 24, pill: 30, full: 9999 }
  shadow:
    none: "none"
    ring: "#008cff 0px 0px 0px 1px inset"
  components:
    tab-filled:   { type: button, bg: "#008cff", fg: "#ffffff", radius: "5px", height: "40px", padding: "0 16px", font: "16px / 700", use: "Filled primary product tab (카드 단말기)" }
    tab-outline:  { type: button, bg: "#ffffff", fg: "#008cff", radius: "5px", height: "40px", padding: "0 16px", font: "16px / 700", states: "1px #008cff inset ring", use: "Selected/active outline tab (테이블 오더)" }
    filter-pill:  { type: badge, bg: "#0077fe", fg: "#000000", radius: "30px", height: "56px", padding: "12px 24px", font: "16px / 400", use: "Active feature filter pill (NFC, 리뷰 마케팅)" }
    product-card: { type: card, bg: "#f5f8fa", fg: "#1c2638", radius: "12px", padding: "20px 0", font: "26px / 700", use: "Product-category selector card (카드 단말기 / 테이블 오더 / 키오스크)" }
    device-card:  { type: card, bg: "#ffffff", fg: "#000000", border: "1px solid #919ba5", radius: "8px", height: "72px", use: "Device-option card (갤럭시 / 아이폰·아이패드 / 윈도우)" }
    section-tab:  { type: tab, fg: "#000000", font: "16px / 700", active: "text #008cff", use: "Product-nav tab active state" }
  components_harvested: true
---

# Design System Inspiration of Payhere

## 1. Visual Theme & Atmosphere

Payhere (페이히어) is Korea's No.1 mobile-POS company, and its homepage reads like a bright, energetic tech-retail product rather than a staid financial service. The canvas is pure white (`#ffffff`) broken by soft cool-grey cards (`#f5f8fa`) and a saturated azure blue (`#008cff`) that functions as the system's single "action" color — the fill on primary product tabs and the ring on the active selector. Body text sits in flat black (`#000000`) at a compact 16px in Noto Sans KR, while headings step up to a deep, warm navy (`#101a2e`) and card labels to a slightly softer navy (`#1c2638`). The overall impression is of merchant software that feels approachable and consumer-friendly — POS tooling that a café or restaurant owner can trust at a glance.

The typographic personality is bold and declarative. Hero headlines run in **Noto Sans KR Bold (weight 700)** at 44px ("모바일 포스 1위 / 매장의 새로운 미래, 페이히어" — "No.1 mobile POS / the store's new future"), section headings at 32px/700, and product-category card labels at a punchy 26px/700 in navy (`#1c2638`). Inactive headings dim all the way to a faint blue-grey (`#c1cad2`), so the eye is guided by weight and contrast rather than color. Below the display tier, everything drops to a quiet 16px/400 body — dense, hangul-optimized, and uniform across nav, buttons, and copy.

What distinguishes Payhere from its fintech peers is its flat, pill-heavy, near-shadowless geometry. Separation comes from tinted grey surfaces (`#f5f8fa`, and a warmer `#f4f8f9`) and thin `#919ba5` hairlines rather than elevation; the only "shadow" in the interactive chrome is a 1px inset azure ring on the active tab. Feature filters are full pills at a 30px radius, product cards round at 12–16px, and a promo-banner blue (`#0077fe`) plus decorative coral (`#ff5b46`) and green (`#08d07e`) accents punctuate the scroll. The rebranded logo mark itself is a blue-to-purple spectrum — bright blue (`#1d99ff`), indigo (`#163bd8`), and purple (`#a164f9`) — signalling a modern, optimistic identity.

**Key Characteristics:**
- Noto Sans KR Bold (weight 700) for all display headlines — bold, declarative merchant-tech voice
- Noto Sans KR weight 400 at 16px for body/UI/nav — quiet, dense, hangul-optimized
- Single saturated azure (`#008cff`) reserved for the primary action (filled tab, active ring)
- Promo/active-filter blue (`#0077fe`) as the highlight companion to the primary azure
- Near-black (`#000000`) body text with deep-navy (`#101a2e`) and card-navy (`#1c2638`) headings
- Flat depth: essentially no drop shadows; tinted `#f5f8fa` / `#f4f8f9` surfaces + `#919ba5` hairlines separate
- Pill-and-card geometry — 30px filter pills, 12–16px cards, 5px compact tabs
- Faint blue-grey (`#c1cad2`) for inactive/de-emphasized headings; slate `#5f6976` for secondary body
- Rebranded logo spectrum: bright blue `#1d99ff` → indigo `#163bd8` → purple `#a164f9`

## 2. Color Palette & Roles

### Primary & Brand
- **Payhere Azure** (`#008cff`): Primary interactive color. The fill on the filled primary product tab (white text) and the 1px inset ring on the active outline tab — the system's single "action" color.
- **Promo Blue** (`#0077fe`): The highlight companion — the top promo-banner background and the active-state fill on feature filter pills (e.g. "NFC", "리뷰 마케팅").
- **Brand Blue** (`#1d99ff`): The brightest blue in the rebranded logo mark.
- **Brand Indigo** (`#163bd8`): The deep-blue element of the logo mark.
- **Brand Purple** (`#a164f9`): The purple accent in the logo mark, giving the identity its blue-to-purple spectrum.

### Ink & Text
- **Deep Navy** (`#101a2e`): Deep-navy heading color — warm, trustworthy, used instead of pure black on many headings.
- **Card Navy** (`#1c2638`): Slightly softer navy for product-category card labels.
- **Pure Black** (`#000000`): The document default body text color in Noto Sans KR.
- **Body Slate** (`#5f6976`): Secondary body copy, descriptions, supporting text.
- **Muted Grey** (`#919ba5`): Hairlines, card borders, and muted/tertiary text.
- **Faint Blue-Grey** (`#c1cad2`): Inactive/de-emphasized headings and lowest-emphasis labels.

### Neutral & Surface
- **Pure White** (`#ffffff`): Page background, white cards, and text on azure/dark (`on-primary`).
- **Surface Grey** (`#f5f8fa`): Cool-grey tinted surface for product-selector cards and segmented sections.
- **Surface Alt** (`#f4f8f9`): A near-identical warmer grey for alternating blocks.

### Decorative Accents
- **Accent Coral** (`#ff5b46`): A warm coral-red used sparingly for decorative highlights and section punctuation.
- **Accent Green** (`#08d07e`): A vivid mint-green used for positive/decorative accents.

## 3. Typography Rules

### Font Family
- **Primary**: `Noto Sans KR` (with `Noto Sans KR Fallback`) — the document default across the marketing homepage; carries headlines, nav, buttons, and body.
- **Blog / Companion**: `Pretendard` — used on the official Payhere Tech Blog (`tech.payhere.in`) for long-form article typography.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Display Hero | Noto Sans KR | 44px (2.75rem) | 700 | ~1.40 | Hero headline ("매장의 새로운 미래, 페이히어") |
| Section Heading | Noto Sans KR | 32px (2.00rem) | 700 | ~1.50 | Feature/section titles ("POS 일체형") |
| Card Title | Noto Sans KR | 26px (1.63rem) | 700 | ~1.30 | Product-category card labels |
| Button / Active Tab | Noto Sans KR | 16px (1.00rem) | 700 | 1.00 | Filled primary CTA, active tab label |
| Body / Nav | Noto Sans KR | 16px (1.00rem) | 400 | 1.50 | Standard reading, nav links, filter pills |
| Blog Hero | Pretendard | 48px (3.00rem) | 700 | ~1.30 | Tech-blog article H1 |

### Principles
- **Bold display, quiet body**: weight 700 carries every headline; weight 400 carries every paragraph and UI label. The weight jump is the primary hierarchy signal.
- **Contrast, not color, for state**: inactive headings dim to faint blue-grey (`#c1cad2`) rather than shifting hue — active items stay full-strength navy or azure.
- **Hangul-first uniformity**: body, nav, and buttons all sit at a single 16px in Noto Sans KR, keeping information-dense merchant screens legible and consistent.
- **One display family**: Noto Sans KR owns the homepage; Pretendard is confined to the long-form tech blog and never mixes into the marketing chrome.

## 4. Component Stylings

### Buttons

**Filled Primary Tab**
- Background: `#008cff`
- Text: `#ffffff`
- Radius: 5px
- Padding: 0px 16px
- Height: 40px
- Font: 16px Noto Sans KR weight 700
- Use: Filled primary product tab in the header ("카드 단말기") — the system's single filled action

**Outline / Active Tab**
- Background: `#ffffff`
- Text: `#008cff`
- Radius: 5px
- Padding: 0px 16px
- Height: 40px
- Font: 16px Noto Sans KR weight 700
- Active: 1px `#008cff` inset ring (box-shadow inset)
- Use: Selected/active outline tab ("테이블 오더")

**Login Link Button**
- Background: `#ffffff`
- Radius: 5px
- Padding: 0px 12px
- Height: 40px
- Font: 16px Noto Sans KR weight 400
- Use: Header login link ("로그인")

### Inputs & Filter Pills

**Active Filter Pill**
- Background: `#0077fe`
- Text: `#000000`
- Radius: 30px
- Padding: 12px 24px
- Height: 56px
- Font: 16px Noto Sans KR weight 400
- Use: Selected feature filter pill ("NFC", "리뷰 마케팅")

**Default Filter Pill**
- Background: `#ffffff`
- Text: `#000000`
- Radius: 30px
- Padding: 12px 24px
- Height: 56px
- Font: 16px Noto Sans KR weight 400
- Use: Unselected feature filter pill ("비대면 결제", "선불권", "단독 결제")

### Cards & Containers

**Product-Category Card**
- Background: `#f5f8fa`
- Text: `#1c2638`
- Radius: 12px
- Padding: 20px 0px
- Height: 84px
- Font: 26px Noto Sans KR weight 700
- Use: Product-category selector card ("카드 단말기", "테이블 오더", "키오스크", "인터넷 패키지")

**Device-Option Card**
- Background: `#ffffff`
- Text: `#000000`
- Border: 1px solid `#919ba5`
- Radius: 8px
- Height: 72px
- Use: Device-option card ("갤럭시", "아이폰·아이패드", "윈도우")

### Navigation
- Background: `#ffffff`
- Text: `#000000`
- Font: 16px Noto Sans KR
- Active: azure `#008cff` text / ring on the selected product tab
- Use: Top product-nav tabs ("카드 단말기" / "테이블 오더")

---

**Verified:** 2026-07-02 (omd:add-reference CREATE — Tier 1 live inspect)
**Tier 1 sources:** https://payhere.in/ , https://tech.payhere.in/ , https://tech.payhere.in/post/design-payhere-welcome-kit/
**Tier 2 sources:** getdesign.md/payhere (0 DESIGN.md files — not listed) ; styles.refero.design/?q=payhere (no Payhere entry — search returned unrelated results)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Scale: 4px, 8px, 12px, 16px, 20px, 24px, 48px
- Notable: Filter pills use a generous 12px 24px padding at 56px height for a comfortable tap target; product cards use 20px vertical padding

### Grid & Container
- Centered marketing layout with a 44px hero headline as the anchor
- Product-category cards arranged in a horizontal row of tinted `#f5f8fa` tiles (12px radius)
- Feature filter pills wrap in a horizontal pill row beneath section headings
- Device-option cards form a 3-up grid of white tiles with `#919ba5` hairline borders (8px radius)
- Alternating white (`#ffffff`) and tinted-grey (`#f5f8fa` / `#f4f8f9`) full-width bands

### Whitespace Philosophy
- **Breathing room over density**: despite being merchant tooling, the marketing surface is airy with generous vertical rhythm between sections.
- **Flat segmentation**: sections separate by background tint (`#f5f8fa` vs `#ffffff`) and hairlines, not by shadow.
- **Pill rhythm**: the repeated 30px-radius filter pill creates a consistent horizontal cadence across feature lists.

### Border Radius Scale
- Compact (5px): header tabs, small buttons
- Standard (8px): device-option cards, inner elements
- Comfortable (12px): product-category cards — the workhorse
- Large (16px): larger content cards
- Extra (24px): feature panels, rounded section corners
- Pill (30px): feature filter pills
- Full (9999px): circular badges and avatars

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline text, most surfaces |
| Tint (Level 1) | `#f5f8fa` / `#f4f8f9` background shift | Card/section separation without elevation |
| Hairline (Level 2) | `1px solid #919ba5` border | White device-card outlines, dividers |
| Ring (Focus/Active) | `#008cff 0px 0px 0px 1px inset` | Active outline tab / selected state |

**Shadow Philosophy**: Payhere is a near-shadowless, flat system. Live inspection found `box-shadow: none` across the hero, section headings, and product cards; the only elevation cue in the interactive chrome is a 1px inset azure (`#008cff`) ring on the active tab. Depth and grouping come from flat tinted surfaces (`#f5f8fa`, `#f4f8f9`) and thin `#919ba5` hairlines. When emphasis is needed, the system reaches for color — the azure `#008cff` fill or the promo blue `#0077fe` — never a drop shadow. This keeps the merchant UI feeling clean, fast, and mobile-native.

## 7. Do's and Don'ts

### Do
- Use Noto Sans KR Bold (weight 700) for all display headlines — it's the brand's declarative voice
- Use Noto Sans KR weight 400 at 16px for body, nav, and filter-pill labels
- Reserve azure (`#008cff`) for the primary action — the filled tab and the active ring
- Use the promo blue (`#0077fe`) for active filter pills and promo banners
- Use deep navy (`#101a2e`) and card navy (`#1c2638`) for headings; black (`#000000`) for body
- Separate sections with flat tinted surfaces (`#f5f8fa` / `#f4f8f9`) and `#919ba5` hairlines, not shadows
- Dim inactive headings to faint blue-grey (`#c1cad2`) instead of changing hue
- Use pill geometry (30px) for filter chips and 8–16px radii for cards

### Don't
- Add drop shadows for elevation — Payhere is a flat, near-shadowless system
- Spread azure (`#008cff`) across many elements — it dilutes the single-action signal
- Set headlines in a light weight — display is always Bold (700)
- Use sharp square corners on interactive chrome — tabs are 5px, pills 30px, cards 8–16px
- Introduce a competing saturated hue for actions — blue owns interaction; coral/green are decorative only
- Use faint grey (`#c1cad2`) for active content — it reads as disabled/inactive
- Mix Pretendard into the marketing homepage — that face belongs to the tech blog

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero headline compresses, product cards stack, pills wrap |
| Tablet | 640-1024px | Moderate padding, 2-up product/device cards |
| Desktop | 1024-1440px | Full layout, centered hero, multi-column card rows |

### Touch Targets
- Filter pills at 56px height with 12px 24px padding — comfortably tappable
- Header tabs at 40px height, device cards at 72px — generous merchant-friendly targets
- Product-category cards at 84px height for confident tapping

### Collapsing Strategy
- Hero: 44px Noto Sans KR headline scales down on mobile, weight 700 maintained
- Product-category card row: multi-column → stacked single column
- Filter-pill row: horizontal wrap/scroll on narrow viewports
- Tinted/white alternating bands maintain full-width treatment

### Image Behavior
- Product/device shots carry no shadow at any size, consistent with the flat system
- Cards maintain 12–16px radius across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary action: Payhere Azure (`#008cff`)
- Promo / active filter: Promo Blue (`#0077fe`)
- Logo spectrum: Brand Blue (`#1d99ff`), Indigo (`#163bd8`), Purple (`#a164f9`)
- Background: Pure White (`#ffffff`)
- Tinted surface: Surface Grey (`#f5f8fa`), Surface Alt (`#f4f8f9`)
- Heading: Deep Navy (`#101a2e`), Card Navy (`#1c2638`)
- Body: Black (`#000000`), Slate (`#5f6976`)
- Muted / hairline: Muted Grey (`#919ba5`)
- Inactive: Faint Blue-Grey (`#c1cad2`)
- Decorative: Coral (`#ff5b46`), Green (`#08d07e`)

### Example Component Prompts
- "Create a header with product tabs. Filled primary tab: `#008cff` background, white text, 5px radius, 0 16px padding, 40px height, 16px Noto Sans KR weight 700. Active outline tab: white background, `#008cff` text, 5px radius, 1px `#008cff` inset ring."
- "Design a product-category card: `#f5f8fa` background, `#1c2638` label text, 12px radius, 20px vertical padding, 26px Noto Sans KR weight 700, no shadow. Title examples: 카드 단말기, 테이블 오더, 키오스크."
- "Build a feature filter pill row. Active pill: `#0077fe` background, black text, 30px radius, 12px 24px padding, 56px height. Default pill: white background, black text, same geometry."
- "Create a device-option grid: white cards, 1px solid `#919ba5` border, 8px radius, 72px height. Labels: 갤럭시, 아이폰·아이패드, 윈도우."

### Iteration Guide
1. Noto Sans KR Bold (700) for every headline; weight 400 for every paragraph and label
2. Azure (`#008cff`) is the single action color — don't spread it; promo blue (`#0077fe`) for filters/banners
3. No shadows — separate with `#f5f8fa` / `#f4f8f9` tint and `#919ba5` hairlines; active state = 1px azure inset ring
4. Pill (30px) for filters, 8–16px for cards, 5px for header tabs
5. Heading color is navy (`#101a2e` / `#1c2638`); body is black (`#000000`) with slate (`#5f6976`) secondary
6. Inactive headings dim to `#c1cad2` — never use it for live content
7. Coral (`#ff5b46`) and green (`#08d07e`) are decorative accents only, never actions

---

## 10. Voice & Tone

Payhere's voice is **confident, plainspoken, and merchant-first** — a partner that helps small-business owners run their store, framed as "매장의 새로운 미래" ("the store's new future"). The register is benefit-led and concrete: it leads with price, rank, and capability ("모바일 포스 1위" — "No.1 mobile POS"), then names features in plain Korean nouns. It talks to a café or restaurant owner, not a payments engineer.

| Context | Tone |
|---|---|
| Hero headlines | Declarative, mission-framed. "매장의 새로운 미래, 페이히어." Confident, rank-forward. |
| Product / feature labels | Plain functional nouns. "카드 단말기", "테이블 오더", "키오스크", "인터넷 패키지". |
| CTAs | Direct and value-led. "인터넷+CCTV+단말기 다 해도 3만 원대", "업계 최저가 도전". |
| Feature descriptions | Capability-first, jargon decoded into store operations (인쇄·스캔·키오스크). |
| Internal / brand copy | Warm and welcoming — "빛나는 여정을 함께해요" (welcome-kit), a journey framing. |

**Voice samples (verbatim from live surfaces):**
- "모바일 포스 1위 매장의 새로운 미래, 페이히어" — hero headline (rank + mission). *(verified live 2026-07-02, payhere.in)*
- "인쇄·스캔·키오스크 다 되는 올인원 단말기, 페이히어 터미널" — section headline (all-in-one capability). *(verified live 2026-07-02, payhere.in)*
- "페이히어는 매장의 새로운 미래를 만듭니다. (We Make The Future)" — brand statement. *(verified 2026-07-02, tech.payhere.in welcome-kit post)*

**Forbidden register**: intimidating financial jargon left unexplained, cold institutional banking tone, fear-based urgency. Payhere keeps it merchant-friendly and concrete.

## 11. Brand Narrative

Payhere (페이히어) is a Korean fintech that set out to modernize the point of sale for small merchants — replacing bulky, expensive legacy POS hardware with an affordable mobile-first system spanning card terminals, table-order, kiosk, and an all-in-one terminal ("페이히어 터미널"). Its positioning is explicit on the homepage: **"모바일 포스 1위"** (No.1 mobile POS) and **"매장의 새로운 미래"** (the store's new future).

The company frames its mission as a journey to the future. In its own words on the official tech blog, *"페이히어는 매장의 새로운 미래를 만듭니다. (We Make The Future)"* and the internal brand line *"Journey to the Future"* ([tech.payhere.in — welcome-kit](https://tech.payhere.in/post/design-payhere-welcome-kit/)). A 2022 rebranding gave the company a clearer identity and a new logo — the blue-to-purple mark (bright blue `#1d99ff`, indigo `#163bd8`, purple `#a164f9`) observed live in the site header — and its welcome-kit design was built on three words: *"Simple (이해하기 쉬운), Familiar (친숙한), Long Awaited (기대되는)"* (whose initials W, M, F became character motifs).

What Payhere refuses, visible in its design: the heavy, intimidating chrome of legacy retail-banking hardware and the density of enterprise POS dashboards. What it embraces: a flat, fast, mobile-native interface; a single trustworthy azure action color; bold Noto Sans KR headlines that speak plainly about price and capability; and copy that names store operations in everyday Korean rather than payments jargon.

## 12. Principles

1. **The store comes first.** Every product decision is framed around a merchant running a shop, not a financial abstraction. *UI implication:* label features as store operations (테이블 오더, 카드 단말기) and lead with concrete price/rank, not fintech terminology.
2. **Simple, familiar, long-awaited.** Payhere's own design concept — *"Simple, Familiar, Long Awaited"* — guides its brand work. *UI implication:* keep layouts uncluttered, use conventional patterns owners already recognize, and make each surface feel like a welcome upgrade.
3. **One action, one color.** Azure (`#008cff`) means "do this." *UI implication:* reserve the saturated azure for the primary tab/CTA and the active ring so the next step is never ambiguous; promo blue (`#0077fe`) handles secondary highlights.
4. **Flat and fast.** Mobile-native clarity beats decorative depth. *UI implication:* no drop shadows; separate with tint (`#f5f8fa`) and `#919ba5` hairlines; the only elevation cue is a 1px azure inset ring.
5. **Bold where it persuades, quiet where it informs.** *UI implication:* Noto Sans KR Bold (700) for headlines that sell the "new future"; weight 400 for the dense operational text that runs the store.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Payhere user segments (Korean small-business owners, café/restaurant operators, retail merchants), not individual people.*

**김도윤, 34, 서울.** Runs a small café and just switched from a legacy POS rental to Payhere for the lower monthly cost. Values that the card terminal, table-order, and internet package come as one affordable bundle. Chose Payhere because the pitch led with a concrete price, not a sales meeting.

**이서연, 41, 경기.** Owns a mid-size restaurant and adopted 테이블 오더 to cut down on order-taking labor. Appreciates that the interface names things the way she thinks about her store, and that setup felt "familiar" rather than technical.

**박준호, 29, 부산.** A first-time retail-shop owner who needed a kiosk and card reader without enterprise complexity. Trusts Payhere's plain, rank-forward tone ("모바일 포스 1위") and the clean, un-intimidating look of the app.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no sales/transactions yet)** | White canvas. Single deep-navy (`#101a2e`) line at 16px explaining nothing has been recorded yet, with one azure (`#008cff`) CTA to get started. No illustration clutter. |
| **Empty (no saved items)** | Muted slate (`#5f6976`) single line: nothing here yet, plus a path back. Honest, calm. |
| **Loading (data fetch)** | Skeleton cards on `#f5f8fa` tinted surface at final 12px-radius dimensions. Flat pulse, no shadow shimmer — consistent with the shadowless system. |
| **Loading (in-place refresh)** | Subtle azure (`#008cff`) progress cue; previous values stay visible during refresh. |
| **Error (request failed)** | Inline message in deep navy with a plain-language explanation and a retry. No bare "오류가 발생했습니다" — states what to do next. |
| **Error (form validation)** | Field-level message below the input describing what's valid, not just "필수". |
| **Success (action complete)** | Brief inline confirmation in a calm tone; next-step detail linked immediately below. No celebratory emoji. |
| **Skeleton** | `#f5f8fa` blocks at final dimensions, 12px radius, flat pulse. |
| **Disabled** | Faint blue-grey (`#c1cad2`) text on reduced-opacity surface; azure actions fade rather than turn grey to preserve brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, tab/pill press, focus ring |
| `motion-standard` | 200ms | Card/section reveal, sheet, dropdown |
| `motion-slow` | 320ms | Page-level transitions, hero reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, pills, sheets |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is functional and quiet — consistent with the flat, fast aesthetic. Tabs and filter pills respond to press with a subtle scale/opacity shift and the active azure inset ring settling in; product cards fade-in from below at `motion-standard / ease-enter`. No bounce or spring — merchant tooling signals reliability, not playfulness. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the product remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-07-02) via playwright getComputedStyle on https://payhere.in/:
- Hero H2 "모바일 포스 1위 / 매장의 새로운 미래, 페이히어" — Noto Sans KR 44px / weight 700 / color rgb(0,0,0)
- Section H3 "POS 일체형" — 32px / 700; inactive H3 "영수증 인쇄" — 32px / 700 / rgb(193,202,210) #c1cad2
- Filled primary tab "카드 단말기" — bg rgb(0,140,255) #008cff / white text / 5px radius / 0 16px / 40px
- Active outline tab "테이블 오더" — bg white / text rgb(0,140,255) / 1px #008cff inset ring
- Product card "카드 단말기" — bg rgb(245,248,250) #f5f8fa / text rgb(28,38,56) #1c2638 / 12px radius / 84px
- Active filter pill "NFC" — bg rgb(0,119,254) #0077fe / 30px radius / 12px 24px / 56px
- Device card "갤럭시" — bg white / 1px solid rgb(145,155,165) #919ba5 / 8px radius / 72px
- Header logo SVG fills — #1d99ff (bright blue), #163bd8 (indigo), #a164f9 (purple)
- box-shadow: none across hero/headings/cards (near-shadowless system)
- document.title: "페이히어｜매장의 새로운 미래"

Voice samples (§10) are verbatim from the live homepage (hero H2, section H2) and the
official tech blog (welcome-kit post "We Make The Future / Journey to the Future").

Brand narrative (§11): Payhere positioning "모바일 포스 1위" / "매장의 새로운 미래" is verbatim
from the live homepage; mission line "페이히어는 매장의 새로운 미래를 만듭니다. (We Make The Future)",
"Journey to the Future", the 2022 rebranding, and the "Simple, Familiar, Long Awaited" design
concept are quoted from the official tech blog welcome-kit post (tech.payhere.in).

Personas (§13) are fictional archetypes informed by publicly observable Payhere user segments
(Korean small-business owners, café/restaurant operators, retail merchants). Names are
illustrative; they do not refer to real people.

Interpretive claims (e.g., "one action, one color", "flat and fast as a rejection of legacy
POS chrome") are editorial readings connecting Payhere's observed design to its positioning,
not directly sourced Payhere statements.
-->
