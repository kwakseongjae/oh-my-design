---
id: kakaobank
name: KakaoBank
country: KR
category: fintech
homepage: "https://www.kakaobank.com"
primary_color: "#ffe300"
logo:
  type: simpleicons
  slug: kakaotalk
verified: "2026-05-15"
omd: "0.1"
ds:
  name: KakaoBank Brand Resource
  url: "https://www.kakaobank.com/view/about/brand/resource"
  type: brand
  description: "KakaoBank Brand Identity Guidelines V2.0 — logo system, KakaoBank Yellow #FFE300, downloadable CI assets."
  og_image: "https://www.kakaobank.com/view/images/kkb_og_img.png"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  components_harvested: true
  colors:
    primary: "#ffe300"
    base: "#1e1e1e"
    canvas: "#ffffff"
    gray: "#a3a3a3"
    light-gray: "#cccccc"
    surface-fill: "#f7f7f7"
    surface-subtle: "#f9f9f9"
    error: "#e02000"
    link: "#007aff"
    success: "#0fbe6c"
    warning: "#ff9800"
    inactive-tab: "#888888"
    border-subtle: "#e6e6e6"
    on-primary: "#1e1e1e"
  typography:
    family: { sans: "Pretendard Variable", mono: "SF Mono" }
    hero-mega:     { size: 90, weight: 800, lineHeight: 1.10, use: "Corporate hero" }
    display:       { size: 42, weight: 700, lineHeight: 1.25, use: "Service page h1" }
    section-title: { size: 32, weight: 700, lineHeight: 1.30, use: "Mid-page h2" }
    heading:       { size: 20, weight: 600, lineHeight: 1.40, use: "Footer column h3" }
    title:         { size: 18, weight: 600, lineHeight: 1.44, use: "List section titles, modal headers" }
    body-large:    { size: 16, weight: 400, lineHeight: 1.50, use: "Default body, card descriptions" }
    body:          { size: 14, weight: 400, lineHeight: 1.55, use: "Sub-nav, dense list rows, button labels" }
    caption:       { size: 13, weight: 400, lineHeight: 1.55, use: "Timestamps, helper text" }
    micro:         { size: 12, weight: 400, lineHeight: 1.50, use: "Disclaimers, footer fine print" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 20, xl: 24, xxl: 32, section: 80 }
  rounded: { sm: 8, md: 12, lg: 16, full: 9999 }
  shadow:
    whisper: "0 1px 2px rgba(0,0,0,0.04)"
    subtle: "0 2px 8px rgba(0,0,0,0.06)"
    sheet: "0 -2px 16px rgba(0,0,0,0.08)"
  components:
    button-yellow-solid: { type: button, bg: "#ffe300", fg: "#1e1e1e", radius: 12, padding: "14px 20px", font: "16px/600", use: "Primary CTA in product flows" }
    button-black-solid: { type: button, bg: "#1e1e1e", fg: "#ffffff", radius: 12, padding: "14px 20px", font: "16px/600", use: "Secondary high-emphasis CTA" }
    button-outline: { type: button, bg: "transparent", fg: "#1e1e1e", radius: 12, padding: "14px 20px", font: "16px/600", use: "Tertiary actions" }
    button-nav-link: { type: button, bg: "transparent", fg: "#1e1e1e", padding: "0 20px", font: "14px/600", use: "Top navigation items" }
    button-critical: { type: button, bg: "#e02000", fg: "#ffffff", radius: 12, padding: "14px 20px", font: "16px/600", use: "Destructive actions" }
    tab-subnav: { type: tab, bg: "transparent", fg: "#888888", padding: "20px 0", font: "14px/400", active: "#1e1e1e text", use: "Sub-section nav" }
    tab-service: { type: tab, bg: "transparent", fg: "#1e1e1e", padding: "16px 0", font: "16px/400", use: "Product-category tabs" }
    tab-segmented: { type: tab, bg: "transparent", fg: "#a3a3a3", radius: 12, font: "14px/600", active: "#ffffff bg + #1e1e1e text", use: "Segmented control" }
    card-product: { type: card, bg: "#ffffff", radius: 12, padding: "24px", use: "Corporate product card" }
    card-section-fill: { type: card, bg: "#f7f7f7", radius: 16, padding: "32px", use: "Mid-page promotional sections" }
    card-debit: { type: card, bg: "#ffe300", radius: 16, use: "Debit/savings card visualization, CR-80 aspect" }
    input-default: { type: input, bg: "#ffffff", fg: "#1e1e1e", radius: 12, padding: "14px 16px", font: "16px/400", use: "Form fields, amount entry" }
    input-amount: { type: input, bg: "transparent", fg: "#1e1e1e", font: "32px/700", use: "Transfer amount hero numeral" }
    badge-notification: { type: badge, bg: "#e02000", fg: "#ffffff", radius: 9999, padding: "2px 6px", font: "11px/700", use: "Unread notification dot" }
    badge-status-positive: { type: badge, fg: "#0fbe6c", radius: 9999, padding: "4px 10px", font: "12px/600", use: "이체 완료, 적금 진행중" }
    badge-status-critical: { type: badge, fg: "#e02000", radius: 9999, padding: "4px 10px", font: "12px/600", use: "이체 실패, 기한 만료" }
    listItem-account: { type: listItem, bg: "#ffffff", padding: "16px 20px", use: "Account row, 64px min-height, 40px rounded-square avatar" }
---

# Design System Inspiration of KakaoBank (카카오뱅크)

## 1. Visual Theme & Atmosphere

KakaoBank is what happens when a messenger company decides retail banking should feel like a chat thread, not a teller window. Korea's first internet-only bank (launched 2017-07-27) carries the warmth of the Kakao family, but when you actually look at the surfaces side-by-side, the resemblance is more cousins than siblings: KakaoBank's canvas is an even cleaner, more banking-formal white than the parent. The corporate site (`kakaobank.com`) is almost monochrome — black on white with one neutral-gray fill (`#f7f7f7`) — and the signature **KakaoBank Yellow `#FFE300`** is reserved, by official brand guideline, for the symbol, the app icon, and the moments where the bank wants to *announce itself*.

That restraint is the design system's whole thesis. Yellow is loud — banking has to feel safe — so yellow shows up where trust has already been established (the app you've installed, the card in your hand, the success screen after a transfer) and stays out of the way during compliance-heavy flows (terms, identity verification, tax forms). The corporate-facing surfaces use **a 90px hero in weight 800**, **Pretendard Variable** as the type stack, and a quiet `#1E1E1E` near-black — the exact same near-black Kakao parent uses, harmonizing with the family without copy-pasting it. In the actual mobile app, the cards (the debit card, the **26주적금** weekly-savings challenge, the **mini** youth account, **세이프박스** safe-box) take over as the main visual language — illustrated cards with Kakao Friends characters peeking through, yellow for the sender's actions, white for the bank's.

**Key Characteristics:**
- KakaoBank Yellow (`#FFE300`) as the singular brand accent — distinct from Kakao parent (`#FEE500`) and Kakao marketing (`#FAE100`); brand guideline V2.0 explicitly forbids substituting near-yellows
- Pretendard Variable as the primary type stack — system-aligned Korean-first sans, no custom typeface on web
- Banking-formal restraint — corporate surfaces are near-monochrome; yellow is reserved for brand and product moments, not chrome
- Card-as-product — debit cards, 26주적금, 모임통장, 세이프박스, mini all surface as illustrated cards in the mobile app
- Kakao Friends mascots (Ryan, Apeach, Tube, Muzi) appear contextually — on physical card faces, in 26주적금 challenge characters, in moim 메시지카드 — never in compliance chrome
- Near-black `#1E1E1E` for primary text, three-tier gray scale (`#1E1E1E` / `#A3A3A3` / `#CCCCCC`) — no warm grays, no off-blacks
- Single-yellow discipline — the brand guide specifies one yellow value and one only; no tinted sub-shades
- Mobile-app-first — the corporate site is the marketing layer, not the product; the actual DS lives in the iOS/Android client

## 2. Color Palette & Roles

### Primary
- **KakaoBank Yellow** (`#FFE300`): Primary brand color, app icon, symbol fill, primary CTA in product surfaces, debit card face, success confirmation accents. RGB 255/227/0, PANTONE Yellow 012 C/U, CMYK 0/10/100/0. **Per V2.0 brand guideline, do not substitute `#FAE100`, `#FEE500`, `#FFCC00`, or any near-yellow.**
- **Near Black** (`#1E1E1E`): Primary text, headings, wordmark on light backgrounds, secondary brand color. Same near-black as Kakao parent — intentional family resemblance.
- **Pure White** (`#FFFFFF`): Page background, card surfaces, on-yellow text alternative when contrast permits (chrome only — never body copy).

### Neutral Scale (per brand guideline V2.0)
- **Gray** (`#A3A3A3`): Secondary text, captions, disabled labels. PANTONE Cool Gray 6 C/U.
- **Light Gray** (`#CCCCCC`): Borders, dividers, disabled fills. PANTONE Cool Gray 3 C/U.
- **Surface Fill** (`#F7F7F7`): Section backgrounds, card-on-card layering on the corporate site.
- **Surface Subtle** (`#F9F9F9`): Footer surface on the corporate site.

### Semantic (banking-functional)
- **Critical Red** (`#E02000`): Error messages, destructive actions, failed-transaction badges. Inherited from Kakao parent for cross-product consistency.
- **Link Blue** (`#007AFF`): Inline action buttons in chat-like flows (iOS-aligned blue), secondary tappable affordances.
- **Positive Green** (`#0FBE6C`): Successful transfers, completed savings goals, verified status — banking apps must read "money moved" instantly.
- **Warning Amber** (`#FF9800`): Caution states (e.g., "limit approaching"), reserved for genuine warnings, not ambient nudges.

### Typography Color Roles
- **Heading / Strong** (`#1E1E1E`): h1–h3, balance amounts, account names.
- **Body** (`#1E1E1E`): Default body color on the corporate site (full strength — no muted body).
- **Secondary / Caption** (`#A3A3A3`): Sub-labels, timestamps, FAQ helper text, footer policy links.
- **Inactive Tab** (`#888888`): Sub-nav inactive items on the corporate site.

### Surface & Borders
- **Border Default** (`#CCCCCC`): Card borders, input outlines, divider lines.
- **Border Subtle** (`#E6E6E6`): Faint separators inside dense list views (carries from list patterns).
- **Overlay** (`rgba(0, 0, 0, 0.4)`): Modal scrims — lighter than most banks, keeping in-context visibility.

## 3. Typography Rules

### Font Family
- **Primary**: `"Pretendard Variable", system-ui, -apple-system, "Segoe UI", Roboto, "Apple SD Gothic Neo", "Noto Sans KR", sans-serif` — verified live at `kakaobank.com` (computed `font-family` on `body`).
- **Brand Display (logo only)**: Custom wordmark (per guideline — wordmark follows Kakao 공동체 CI rules, not a substitutable webfont).
- **Design Principle**: No custom brand typeface on web. Pretendard Variable carries Korean and Latin equally well; the brand expresses itself through color and the app icon, not through a display face.

### Hierarchy (verified at kakaobank.com / kakaobank.com/view/service)

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Hero Mega | Pretendard | 90px | 800 | ~1.1 | Corporate hero ("나의 첫 번째 AI 은행 카카오뱅크") — verified |
| Display | Pretendard | 42px | 700 | ~1.25 | Service page h1 ("카카오뱅크의 서비스를 소개합니다") — verified |
| Section Title | Pretendard | 32px | 700 | ~1.3 | Mid-page h2 ("새로운 금융 경험, AI 서비스") — verified |
| Heading | Pretendard | 20px | 600 | ~1.4 | Footer column h3 (소개 / 서비스 / ESG / 투자정보) — verified |
| Title | Pretendard | 18px | 600 | ~1.44 | List section titles, modal headers |
| Body Large | Pretendard | 16px | 400 | ~1.5 | Default body, card descriptions, header links — verified |
| Body | Pretendard | 14px | 400/600 | ~1.55 | Sub-nav, dense list rows, button labels (600 when navigational) |
| Caption | Pretendard | 13px | 400 | ~1.55 | Timestamps, helper text |
| Micro | Pretendard | 12px | 400 | ~1.5 | Disclaimers, footer fine print |

### Principles
- **One typeface, three weights**: 400 (Regular), 600 (SemiBold), 700/800 (Bold/ExtraBold for hero only). The corporate hero pushes to 800 — that is the brand's confidence moment.
- **Korean-first metric**: Pretendard Variable ships line-heights tuned for Hangul; do not override with a Latin-tuned `line-height` value.
- **No italics**. Banking copy reads upright; emphasis happens through weight, not slant.
- **No custom brand display font on web**. Yellow + the symbol carry brand identity; type stays neutral so account numbers and amounts read as data, not marketing.

## 4. Component Stylings

### Buttons

KakaoBank's corporate site is intentionally chrome-light — buttons on the public web are mostly text affordances with a few iconographic ones. The product-facing button system lives in the mobile app, where the **Yellow Solid** primary CTA is the signature pattern (verified visually on app icon, debit card face, brand resource page swatch — `#FFE300` is the canonical fill).

**Yellow Solid (Primary CTA — product surfaces / app)**
- Background: `#FFE300` (KakaoBank Yellow)
- Text: `#1E1E1E` (Near Black) — never white on yellow (contrast fail)
- Border: none
- Radius: 12px
- Padding: 14px 20px (default), 16px 24px (large)
- Font: 16px / 600 / Pretendard
- Pressed: opacity 0.85 (no darker yellow exists in the brand palette)
- Disabled: bg `#F7F7F7`, text `#CCCCCC`
- Use: Primary action in product flows ("이체하기", "확인", "다음")

**Black Solid (Secondary Strong)**
- Background: `#1E1E1E`
- Text: `#FFFFFF`
- Border: none
- Radius: 12px
- Padding: 14px 20px
- Font: 16px / 600 / Pretendard
- Use: Secondary high-emphasis CTA when paired with Yellow Solid; identity verification flows

**Outline Neutral**
- Background: transparent
- Text: `#1E1E1E`
- Border: 1px solid `#CCCCCC`
- Radius: 12px
- Padding: 14px 20px
- Font: 16px / 600 / Pretendard
- Pressed: bg `#F7F7F7`
- Use: Tertiary actions, "취소", "나중에"

**Top Nav Link (corporate site — verified)**
- Background: transparent
- Text: `#1E1E1E` → hover/active stays `#1E1E1E` (no color change)
- Border: none
- Padding: 0 20px
- Font: 14px / 600 / Pretendard
- Height: 62px (vertically centered in 62px header band)
- Use: Top navigation items (`소개`, `서비스`, `ESG`, `투자정보`, `고객센터`, `인재영입`)

**Sub-Nav Tab (corporate site — verified)**
- Background: transparent
- Text inactive: `#888888`
- Text active: `#1E1E1E`
- Border: 0px (active state expressed through color, not underline)
- Padding: 20px 0
- Font: 14px / 400 / Pretendard
- Use: Sub-section nav (`비즈니스`, `기술`, `새소식`)

**Service Tab (verified — kakaobank.com/view/service)**
- Background: transparent
- Text: `#1E1E1E`
- Border: 0
- Padding: 16px 0
- Font: 16px / 400 / Pretendard
- Height: 61px
- Use: Product-category tabs on the service page (통장, 저축, 대출, 투자, 외환, 카드, 사업자)

**Critical Solid**
- Background: `#E02000`
- Text: `#FFFFFF`
- Border: none
- Radius: 12px
- Padding: 14px 20px
- Font: 16px / 600
- Use: Destructive actions (계좌 해지, 자동이체 삭제)

### Cards

**Product Card (corporate)**
- Background: `#FFFFFF`
- Border: none (or 1px solid `#E6E6E6` when laid on white)
- Radius: 12px (verified — corporate card-link `border-radius: 12px`)
- Padding: 24px
- Shadow: none — corporate site is shadow-free; depth via background fill `#F7F7F7`
- Use: AI 서비스 / mini / 사업자 / 글로벌 sections on `/view/service`

**Section Fill Card**
- Background: `#F7F7F7`
- Border: none
- Radius: 16px
- Padding: 32px
- Use: Mid-page promotional sections, FAQ groupings

**Debit / Savings Card (product visualization)**
- Background: `#FFE300` (KakaoBank Yellow) — face color
- Border: none
- Radius: 16px (mobile-app card visual)
- Aspect: ~1.586:1 (CR-80 card proportion)
- Use: Card preview tiles, 26주적금 progress card, 모임통장 summary card. Kakao Friends mascot illustration (Ryan / Apeach / Muzi) often sits left, account label right, amount bottom-right.

### Inputs

**Default**
- Background: `#FFFFFF`
- Text: `#1E1E1E`
- Border: 1px solid `#CCCCCC`
- Radius: 12px
- Padding: 14px 16px
- Font: 16px / 400
- Placeholder: `#A3A3A3`
- Focus: border `#1E1E1E` 1.5px (no yellow focus — yellow is brand, not state)
- Error: border `#E02000` 1.5px
- Use: Form fields, amount entry, recipient lookup

**Amount Input (large)**
- Background: transparent
- Text: `#1E1E1E`, 32–48px / 700
- Border: none (underline only on focus, 2px solid `#1E1E1E`)
- Use: Transfer amount entry — banking apps expect amount as a hero numeral

### Badges

**Notification Dot**
- Background: `#E02000`
- Text: `#FFFFFF`
- Border: 1.5px solid `#FFFFFF` (separation from yellow surfaces)
- Radius: 9999px
- Padding: 2px 6px
- Font: 11px / 700
- Use: Unread notification on tab/card

**Status Pill (Positive)**
- Background: rgba(15, 190, 108, 0.12)
- Text: `#0FBE6C`
- Border: none
- Radius: 9999px
- Padding: 4px 10px
- Font: 12px / 600
- Use: "이체 완료", "적금 진행중"

**Status Pill (Critical)**
- Background: rgba(224, 32, 0, 0.12)
- Text: `#E02000`
- Use: "이체 실패", "기한 만료"

### Tabs (segmented)

**Segmented Control**
- Container: `#F7F7F7` bg, 12px radius, 4px inner padding
- Inactive tab: transparent, `#A3A3A3` text, 14px / 600
- Active tab: `#FFFFFF` bg, `#1E1E1E` text, 14px / 600, shadow `0 1px 2px rgba(0,0,0,0.08)`
- Use: Switching between account types, period filters

### List Items

**Account Row**
- Background: `#FFFFFF`
- Padding: 16px 20px
- Min-height: 64px
- Avatar: 40px rounded square (12px radius — Kakao family rule)
- Account name: 16px / 600 / `#1E1E1E`
- Account number / sub-label: 13px / 400 / `#A3A3A3`
- Right-aligned amount: 16px / 700 / `#1E1E1E` (color flips to `#E02000` for negative)
- Divider: 1px solid `#E6E6E6` between rows

---

**Verified:** 2026-05-08
**Tier 1 sources:** kakaocorp.com/view/about/brand/resource (official brand guideline V2.0, 2024-08 — Yellow `#FFE300` / Black `#1E1E1E` / Gray `#A3A3A3` / Light Gray `#CCCCCC`); kakaobank.com/ (live DOM — Pretendard Variable type stack ✓, hero 90px/800 ✓, surface fills `#f7f7f7` / `#f9f9f9` ✓, header 62px / 14px·600 nav links ✓, sub-nav inactive `#888888` ✓); kakaobank.com/view/service (live DOM — display 42px/700 ✓, section h2 32px/700 ✓, service tab 61px/16px·400 ✓, 12px card radius ✓).
**Tier 2 sources:** getdesign.md/kakaobank — no record (explicit "No designs found"). styles.refero.design — not searched (no Kakao-family record per kakao reference).
**Tier 2b status:** unavailable; Tier 1 (live DOM + official brand guideline V2.0) treated as authoritative.
**Conflicts unresolved:** none. Brand guideline `#FFE300` is the single canonical yellow — explicitly disambiguated from Kakao parent (`#FEE500`) and Kakao marketing (`#FAE100`). Body weights on the corporate site are intentionally chrome-light; product-facing button specs (Yellow Solid Primary, etc.) are inferred from the canonical yellow + Kakao-family 12px radius pattern, not directly inspected on web (they live in the mobile app).

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Scale: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 56px, 64px, 80px
- Horizontal screen padding (mobile): 20px
- Horizontal screen padding (web max): centered max-width 1360px (verified — h2 width on `/view/service`)
- List item vertical padding: 16px
- Section vertical rhythm: 80px between major sections, 32px between sub-sections

### Grid & Container
- Web: 1360px content max-width, centered
- Mobile (app): full-width with 20px horizontal gutter
- Card grid: 4-column on desktop, 2-column on tablet, single column on mobile
- Account list: single column, full-width items, 64px row height

### Whitespace Philosophy
- **Banking-formal, not bank-formal.** Generous whitespace says "we have nothing to hide" — but it's structured, not luxurious. Every section breathes; no section sprawls.
- **Yellow earns its space.** When yellow appears (card face, hero illustration, primary CTA), it gets ≥40% of its container; partial-yellow accents are forbidden by guideline.
- **Lists density, hero generosity.** Account/transaction lists target 6+ rows per viewport; hero and onboarding screens target 1 idea per viewport.

### Border Radius Scale
- Tight (8px): inline tags, small chips
- Standard (12px): buttons, inputs, product cards, avatars (rounded squares — Kakao-family rule, not circles)
- Comfortable (16px): section fill cards, debit card visualization
- Sheet (20px): bottom sheet top corners
- Pill (9999px): status badges, notification dots, segmented control inactive tabs

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Default — corporate site is entirely flat. Most product cards |
| Whisper (Level 1) | `0 1px 2px rgba(0,0,0,0.04)` | Active segmented-tab pip, inline raised chip |
| Subtle (Level 2) | `0 2px 8px rgba(0,0,0,0.06)` | Floating action button, tooltip |
| Sheet (Level 3) | `0 -2px 16px rgba(0,0,0,0.08)` | Bottom sheets, modal dialogs |

**Shadow Philosophy.** KakaoBank inherits Kakao parent's flat-design discipline and amplifies it for banking-formal trust. The corporate site has zero shadows; depth is communicated through `#FFFFFF` → `#F7F7F7` → `#F9F9F9` background steps and 1px `#E6E6E6` dividers. Mobile-app surfaces use shadows sparingly — the debit card face does not float; it sits flat on white. Yellow never casts a yellow-tinted shadow.

## 7. Do's and Don'ts

### Do
- Use `#FFE300` exactly — match Pantone Yellow 012 C/U, never substitute `#FAE100` / `#FEE500` / `#FFCC00`
- Pair yellow surfaces with `#1E1E1E` text — never white-on-yellow for body copy (contrast fail)
- Use Pretendard Variable on web; respect Korean-tuned line-heights
- Keep the brand symbol on solid Yellow, Black, or White only (per guideline)
- Use 12px radius as the family default (buttons, cards, avatars-as-rounded-squares)
- Reserve Kakao Friends mascots for product moments (cards, 26주적금 challenges, 모임 메시지카드) — never in compliance chrome
- Use full-strength colors — `#1E1E1E` body, `#A3A3A3` caption, `#CCCCCC` border. Avoid in-between grays
- Let the corporate site stay near-monochrome — yellow is for the app, not the marketing chrome

### Don't
- Don't use circular avatars — Kakao family uses 12px rounded squares
- Don't tint shadows with yellow — shadows stay neutral so yellow remains the only warmth
- Don't use yellow for error or warning states — yellow is brand, never status
- Don't introduce a secondary brand hue (no "KakaoBank Blue", no "KakaoBank Green") — semantic blues/greens are utility, not brand
- Don't render the symbol on a non-Yellow/Black/White background — guideline forbidden
- Don't apply the wordmark independently — it follows Kakao 공동체 CI rules, not standalone use
- Don't use pure black `#000000` for text — use `#1E1E1E` to match the family
- Don't use a custom display webfont — Pretendard Variable is the only typeface on web

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile (Primary) | <480px | Full-width app layout, 20px gutter, single-column |
| Tablet | 480–1024px | 2-column card grids, expanded service tabs |
| Desktop | 1024–1360px | 4-column grids, fixed top nav, 1360px content max |
| Wide | >1360px | Content stays at 1360px; canvas extends with `#FFFFFF` margins |

### Touch Targets
- Buttons: 48px min-height (default), 56px (large), 40px (compact)
- Tab bar: 56px height, evenly distributed
- List rows: 64px (account list), 56px (settings list)
- Notification dot: 16px diameter minimum

### Collapsing Strategy
- Desktop top nav (`소개 / 서비스 / ESG / 투자정보 / 고객센터 / 인재영입`) collapses to hamburger drawer below 768px
- Service product-category tab strip (`통장 / 저축 / 대출 / 투자 / 외환 / 카드 / 사업자`) becomes horizontal scroll below 768px
- Card grids: 4 → 2 → 1 column at desktop / tablet / mobile breakpoints
- Bottom CTA in product flows: sticky full-width with safe area inset

### Image Behavior
- Hero illustration (Kakao Friends, 26주적금 character): edge-bleed on mobile, contained on desktop
- Card faces (debit / savings / 모임): 1.586:1 aspect (CR-80 proportion), 16px radius
- Mascot avatars in chat-style flows: 40px rounded square, 12px radius

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: KakaoBank Yellow (`#FFE300`)
- CTA Text on Yellow: Near Black (`#1E1E1E`) — NEVER white on yellow
- Background: Pure White (`#FFFFFF`)
- Surface Fill: Light Fill (`#F7F7F7`)
- Heading text: Near Black (`#1E1E1E`)
- Body text: Near Black (`#1E1E1E`)
- Secondary text: Gray (`#A3A3A3`)
- Inactive nav text: Cool Gray (`#888888`)
- Border: Light Gray (`#CCCCCC`)
- Divider: Border Subtle (`#E6E6E6`)
- Error: Red (`#E02000`)
- Success: Green (`#0FBE6C`)
- Link / iOS-blue action: Blue (`#007AFF`)

### Example Component Prompts
- "Create a Yellow Solid primary button: `#FFE300` background, `#1E1E1E` text 16px weight 600, 12px radius, 14×20 padding, 48px min-height, full-width on mobile. Pressed: opacity 0.85. Disabled: `#F7F7F7` bg, `#CCCCCC` text."
- "Build a debit card visualization: `#FFE300` background, 16px radius, 1.586:1 aspect, 24px padding. Top-left: account name 14px weight 600 `#1E1E1E`. Top-right: KakaoBank symbol 24px. Bottom-left: card number masked (•••• •••• •••• 1234) 14px weight 500 `#1E1E1E`. Bottom-right: Kakao Friends mascot illustration 80px."
- "Design an account list row: white bg, 64px row height, 20px h-padding. Left: 40px rounded-square avatar (12px radius) + 12px gap + account name (16px weight 600 `#1E1E1E`) over account number (13px weight 400 `#A3A3A3`). Right: amount (16px weight 700 `#1E1E1E`, `#E02000` if negative). 1px `#E6E6E6` bottom border."
- "Create a 26주적금 progress card: white bg, 1px `#E6E6E6` border, 12px radius, 24px padding. Top: title '26주적금' 18px weight 700 `#1E1E1E`. Middle: 26-dot progress strip — completed dots `#FFE300`, remaining dots `#CCCCCC`, 8px diameter, 8px gap. Bottom: '13주차 진행중' 13px `#A3A3A3` left, 'KRW 130,000' 16px weight 700 `#1E1E1E` right."
- "Design a transfer success screen: full-screen white bg. Center: 64px green check `#0FBE6C` in a circle. Below: '이체가 완료되었어요' 24px weight 700 `#1E1E1E`. Below that: '50,000원을 김카뱅에게 보냈어요' 16px weight 400 `#A3A3A3`. Bottom: Yellow Solid '확인' button (full-width, 56px tall, sticky with 20px safe-area inset)."

### Iteration Guide
1. Yellow is `#FFE300` exactly — not `#FAE100`, not `#FEE500`. Brand guideline is canonical.
2. Pretendard Variable on web; never embed a custom display font on KakaoBank-styled surfaces.
3. 12px is THE radius — buttons, cards, avatars (as rounded squares), inputs.
4. Avatars are rounded squares (12px radius), not circles — Kakao family rule.
5. Text on yellow is always `#1E1E1E`, never white. Text on black/dark is always `#FFFFFF`.
6. Banking-formal restraint: don't use yellow as ambient chrome — only as brand and primary action.
7. Mascots (Ryan, Apeach, Tube, Muzi) are product moments, never compliance moments.
8. Mobile-first at 375px; 1360px max content width on web.

---

## 10. Voice & Tone

KakaoBank speaks like a **friendly fintech that knows it's still a bank** — warm and colloquial enough that you'd forward a notification to your group chat, formal enough that the regulatory copy underneath is bulletproof. The closest sibling is Toss in posture (helpful, plain-spoken, allergic to bank jargon), but the flavor is more **Kakao-character** — small turns of phrase that wink at the messenger origin (`이체할게요`, `보냈어요`, `김카뱅에게`), and product names that pun rather than describe (`세이프박스` instead of "secondary holding account", `26주적금` instead of "26-week recurring deposit", `모임통장` instead of "shared group account"). The default sentence ending is the polite-conversational `해요체` (`-어요` / `-예요`) — never `합니다체` for body copy, except in legal/약관 surfaces where regulatory clarity demands it.

The brand explicitly markets itself with the line *"나의 첫 번째 AI 은행"* (verified live, kakaobank.com hero, 90px/800) and *"나의 일상 속 유용한 금융 서비스를 만듭니다"* (verified live, kakaobank.com sub-hero) — `나의` (my) is the recurring possessive. Banking is framed as personal infrastructure, not institutional service.

| Context | Tone |
|---|---|
| CTAs | 동사 단독 또는 동사+명사, 짧게. `이체하기`, `확인`, `다음`, `보내기` |
| 시스템 메시지 | 관찰형 단문. `이체가 완료되었어요`, `잔액이 부족해요`. 감정 부재 |
| 에러 메시지 | 구체적 원인 + 즉시 행동 한 줄. `잔액이 부족해요. 다른 계좌에서 보내볼래요?` 절대 `오류가 발생했습니다` 단독 사용 금지 |
| 성공 토스트 | 과거형 단문. `이체 완료`. 축하 이모지·과한 메시지 금지 |
| 약관 / 공시 | 격식체 (`-합니다`) — 법적 명확성이 우선 |
| 마케팅 / 새소식 | `해요체` 유지, 캐릭터 개입 가능. `26주 동안 함께 모아봐요!` |
| 빈 상태 | 다음 행동 1개. `친구를 추가하면 이체가 빨라져요`. 절대 `데이터가 없습니다` |
| 신뢰·안전 | 차분, 사실 위주. 공포 마케팅 금지 (`사기 주의!` ❌). 보안 정보는 본문 무게 텍스트로 |

**Forbidden phrases.** `불편을 드려 죄송합니다`, `데이터가 없습니다`, `오류가 발생했습니다` (단독), `혁신적인`, `최고의`, `업계 최초` (마케팅 superlative). 영어 원문 노출 (`Get Started` → `시작하기`로 번역). 명령형 (`-해라`). Emoji는 product chrome에서 금지 (이모티콘은 콘텐츠라 OK, UI 텍스트엔 금지).

**Voice samples.**

- *"나의 첫 번째 AI 은행"* — corporate hero. <!-- verified: kakaobank.com, 2026-05-08 -->
- *"나의 일상 속 유용한 금융 서비스를 만듭니다"* — corporate sub-hero. <!-- verified: kakaobank.com, 2026-05-08 -->
- *"카카오뱅크의 서비스를 소개합니다"* — service page h1. <!-- verified: kakaobank.com/view/service, 2026-05-08 -->
- *"어렵고 복잡한 금융생활, 카카오뱅크 AI가 도와드릴게요."* — AI 서비스 section copy. <!-- verified: kakaobank.com/view/service, 2026-05-08 -->
- *"내 사업장에 맞는 보증서대출을 확인할 수 있어요."* — 사업자 보증서대출 product copy. <!-- verified: kakaobank.com/view/service, 2026-05-08 -->
- *"이체가 완료되었어요"* — illustrative success toast pattern. <!-- illustrative: pattern derived from Kakao family system messages, not verified verbatim in mobile app -->
- *"50,000원을 김카뱅에게 보냈어요"* — illustrative transfer confirmation. <!-- illustrative -->

## 11. Brand Narrative

KakaoBank is **Korea's first internet-only bank**, founded 2016-01 as 'Kakaobank Preparatory Corporation' in Pangyo and **launched commercially on 2017-07-27** as a consortium between **Kakao Corp** and **Korea Investment Holdings** (the lead financial partner — KB Kookmin Bank held a smaller stake in the original consortium but was not the controlling financial partner; this is a common misattribution) ([Wikipedia — KakaoBank](https://en.wikipedia.org/wiki/KakaoBank)). The launch was the cleanest product-market fit Korean banking had ever seen: **1 million users in 5 days**, hitting **23M+ users by January 2024** — close to half of South Korea's adult population. The thesis was simple and brutal: branchless banking, no transaction fees, higher deposit interest, and an onboarding flow that opened a real account in under 7 minutes from a smartphone. By **FY2024 the loan book had expanded to ₩44.5T** (from ₩20.7T in FY2020); deposits are in the same magnitude ([KoalaGains — KakaoBank stock analysis](https://koalagains.com/stocks/KOSPI/323410)).

The **2021-08-06 KOSPI IPO** at ₩39,000 priced KakaoBank at **56× book value** — a multiple that drew immediate "bubble or jackpot" headlines because traditional Korean bank price-to-book averages around 0.44× ([Korea Herald — Jackpot or bubble?](https://www.koreaherald.com/article/2666383), [KED Global — KakaoBank becomes Korea's most valuable lender](https://www.kedglobal.com/ipos/newsView/ked202108060001)). The IPO drew an all-time-high ₩2,585T in institutional bids, oversubscribed 1,733×. The stock subsequently fell — market cap dropped 58.7% in 2022 — but the operating story compounded (4-year revenue CAGR 29.2%, net income CAGR 40.3%), and the bank now occupies an unusual niche: a tech-multiple banking license, listed on KOSPI as ticker **323410**, generating banking-margin profits with consumer-tech engagement metrics.

What KakaoBank refuses: **branch infrastructure** (none — by design), **paper paperwork** (entire account opening is in-app), **Kakao parent's full yellow signature on every surface** (the corporate site is monochrome; yellow is reserved for product and brand moments per V2.0 guideline), and the imitative "fintech blue" that swept Western neobanks in the 2010s. What it embraces: **Kakao Friends mascots** as product flavoring (Ryan / Apeach / Tube / Muzi appear on debit card faces and 26주적금 challenge characters, never in compliance chrome), **cute-formal product naming** (`세이프박스`, `26주적금`, `모임통장`, `mini`), and a single-yellow brand discipline that is documented to **5-decimal precision in PANTONE Yellow 012 C/U** in the V2.0 brand guide ([KakaoBank Brand Identity Guidelines V2.0, 2024-08](https://www.kakaobank.com/static/etc/logo/KakaoBank_BrandIdentityGuidelines_V2.0.pdf)).

The CEO is **윤호영 (Yun Ho-young)**; 사업자번호 375-88-00197; 고객센터 1599-3333 (verified live in footer). The name *카카오뱅크* literally reads "Kakao Bank" — but the symbol is a stylized **'B' with an 'I' (나, "me") at its center**, and the brand resource page makes the meaning explicit: *"내가 중심이 되는 은행"* — "the bank with me at the center." That is the 1-sentence brand positioning, and every other decision in this document descends from it.

## 12. Principles

1. **Yellow is product, not chrome.** `#FFE300` shows up on the symbol, the app icon, the debit card face, the primary CTA — never as ambient marketing background, never tinted, never substituted. *UI implication:* if a designed surface uses `#FFE300` as a >40% fill, it must be either (a) the brand symbol, (b) a card face, or (c) a primary CTA. Otherwise demote to `#F7F7F7` or `#FFFFFF`.
2. **One yellow, exactly.** The brand guide V2.0 explicitly forbids near-yellows (`#FAE100`, `#FFCC00`, `#FEE500`). *UI implication:* color tokens must reference `#FFE300` by name; tinted shades (yellow-50, yellow-100…) are not in the system. If a designer reaches for "lighter yellow," that is a signal to switch to `#F7F7F7` or white instead.
3. **Banking-formal, character-flavored.** Compliance copy uses `합니다체`; product copy uses `해요체`; mascots appear in product moments, never in legal/identity-verification flows. *UI implication:* a Kakao Friends illustration on an OTP entry screen is a bug.
4. **Mobile-app is the product; web is the marketing.** The corporate site is intentionally chrome-light because the actual DS lives in iOS/Android. *UI implication:* don't design web flows that try to replicate the mobile-app experience. Web is for persuasion (hero, services, IR), app is for transactions.
5. **Kakao family resemblance, not imitation.** `#1E1E1E` near-black, 12px radius, rounded-square avatars, flat-design — these are inherited from the Kakao parent system intentionally. *UI implication:* if you find yourself reaching for circular avatars or pure-black text, you've drifted out of the family.
6. **Cards over forms.** When the bank wants to show you something — a savings goal, a recent transfer, a 모임 settlement — it shows a card, not a row in a table. *UI implication:* default to card-based summary surfaces; reserve dense rows for searchable history (transactions, statements).
7. **One accent, real semantics.** Yellow is brand. Red `#E02000` is error. Green `#0FBE6C` is success. Blue `#007AFF` is iOS-aligned action affordance. There is no "KakaoBank green" or "KakaoBank red" — semantics stay semantic. *UI implication:* never use yellow to indicate warning or attention; use the warning amber `#FF9800` exclusively for that, and only sparingly.

## 13. Personas

*Personas are fictional archetypes informed by publicly described KakaoBank user segments (Korean digital-native banking users 20s–40s, especially mobile-only segments, plus the SMB/사업자 segment introduced post-2021 and the youth/mini segment), not individual people.*

**민지, 28, 서울.** 마케팅 회사 사원. 월급 통장은 KB지만 생활비·이체는 전부 카카오뱅크. 친구 모임 회비는 모임통장으로 받고, 26주적금으로 연말 여행비 모은다. 카카오뱅크를 "은행"이라기보다는 "돈 쓰는 카톡"이라고 생각함 — UI가 채팅처럼 가벼운 게 그녀가 매일 여는 이유. 종이 통장을 본 적이 거의 없다.

**준호, 35, 부산.** 1인 카페 운영. **개인사업자통장** + **부가세박스** 조합으로 매출-경비-부가세를 자동 분류. 매년 부가세 신고 직전 서류 떼러 은행 가는 게 사라진 게 그에게 가장 큰 사건. 신용대출도 비대면으로 받았다 — `사장님 정책자금 대출도 비대면으로 간편하게!`라는 카피가 정확히 그를 지칭한다고 느낌.

**서연, 14, 대전.** 중2. **카카오뱅크 mini** 사용자. 부모님이 만들어준 mini 계정에 용돈이 들어오고, 본인이 mini 카드로 편의점·스타벅스 결제. **mini 내맘대로 저금**으로 굿즈 구입 자금을 모은다. 부모-자녀 공동 가시성이 그녀의 부모님이 mini를 신뢰하는 이유.

**Mr. 김, 52, 인천.** 중소기업 부장. 디지털 친화는 아니지만 코로나 이후 모든 송금을 카카오뱅크로 옮겼다. 큰 금액 이체할 때 인증 단계가 무서워서 일부러 천천히 진행한다. 빨간 경고색 + 명료한 한 줄 카피 (`잔액 5,000만 원 이상 이체는 추가 인증이 필요해요`)가 그가 신뢰의 신호로 받는 정확한 패턴.

## 14. States

| State | Treatment |
|---|---|
| **Empty (계좌 없음, 신규 사용자)** | 16px / 600 / `#1E1E1E` `"아직 계좌가 없어요"` + 14px / 400 / `#A3A3A3` `"카카오뱅크 입출금통장을 만들어보세요"` + Yellow Solid CTA `"통장 만들기"`. 일러스트 1개 (Kakao Friends 캐릭터, 80px) 위에 배치 |
| **Empty (거래 내역 없음)** | 14px / 400 / `#A3A3A3` `"이번 달 거래 내역이 없어요"` 단독. 일러스트 없음. 추천 행동 없음 — 자연히 채워질 테니까 |
| **Empty (필터 결과 없음)** | 14px / 400 / `#A3A3A3` `"조건에 맞는 거래가 없어요"` + 14px / 600 `#1E1E1E` 텍스트 링크 `"필터 초기화"` |
| **Loading (계좌 잔액)** | 잔액 자리에 `#F7F7F7` 스켈레톤 박스 (실제 잔액 폭과 동일), 1.2s 시머. 절대 "0원"으로 채우지 않음 — 0원 표시는 잘못된 정보를 암시 |
| **Loading (이체 진행 중)** | 풀스크린 모달, KakaoBank Yellow 원형 로더 (24px), 아래 16px / 400 / `#A3A3A3` `"이체 중이에요"`. 사용자 입력 차단, 취소 버튼 없음 (이체 트랜잭션은 중단 불가) |
| **Loading (앱 첫 진입)** | KakaoBank 심볼 (`#FFE300` 배경 위 흰 'B+I'), 화면 중앙. 심볼 단독 등장, 텍스트 없음 |
| **Error (인라인 입력)** | 입력창 border `#E02000` 1.5px, 헬퍼 텍스트 13px / 400 / `#E02000`. 실행 가능한 한 줄 (`"계좌번호를 다시 확인해주세요"`) |
| **Error (네트워크)** | 토스트 상단, `#1E1E1E` 배경 흰 텍스트 14px / 400, 4초 자동 dismiss. `"연결이 불안정해요. 잠시 후 다시 시도해주세요."` |
| **Error (이체 실패 — 잔액 부족)** | 풀스크린, 64px `#E02000` ! 아이콘 → 24px / 700 / `#1E1E1E` `"잔액이 부족해요"` → 16px / 400 / `#A3A3A3` `"필요 금액: 50,000원 / 현재 잔액: 32,000원"` → Yellow Solid CTA `"다른 계좌에서 보내기"` + Outline `"확인"` |
| **Success (이체 완료)** | 풀스크린 confirmation. 64px `#0FBE6C` 체크 → 24px / 700 / `#1E1E1E` `"이체가 완료되었어요"` → 16px / 400 / `#A3A3A3` 메타 정보 (보낸 금액, 받는 사람, 시각) → Yellow Solid `"확인"` (sticky, 56px). 토스트 아님 — 이체는 expensive 액션이라 dedicated 화면 |
| **Success (인라인 — 즐겨찾기 추가 등)** | 200ms `#FFE300` 플래시 후 원래 색으로 페이드. 토스트 없음 |
| **Skeleton (거래 내역)** | 64px row 그대로, 텍스트 영역만 `#F7F7F7` 박스. 아바타 자리도 동일한 12px rounded square skeleton |
| **Disabled** | 버튼 bg `#F7F7F7`, 텍스트 `#CCCCCC`. 색상 반전 없음. 지오메트리 동일 — re-enable 시 frame-stable |
| **Loading (긴 작업: 신용 조회)** | 진행률 % + `"약 N분 남음"` 라벨. KakaoBank Yellow progress bar (`#FFE300` 채움, `#F7F7F7` 트랙) |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | 토글 / 체크박스 즉시 |
| `motion-fast` | 150ms | 버튼 active, hover, 인라인 success flash |
| `motion-standard` | 250ms | 모달 / 시트 enter, 카드 탭, 탭 전환 |
| `motion-success` | 350ms | 이체 성공 / 적금 완료 confirmation 화면 등장 |
| `motion-page` | 300ms | 네이티브 push/pop |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | 시트, 토스트, 화면 push 등장 |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | 모달 dismiss, 토스트 자동 닫기 |
| `ease-standard` | `cubic-bezier(0.4, 0.0, 0.2, 1)` | 양방향 전환 |
| `ease-spring-success` | spring (mass 1, stiffness 380, damping 28) | 이체 성공 체크 아이콘 등장 (한정 사용) |

**Spring stance.** **Spring overshoot은 success confirmation에만 한정 허용** — 이체 성공 / 적금 목표 달성 같은 사용자가 "해냈다"고 느껴야 하는 순간에 한정. 일반 UI 모션은 spring 금지 (은행은 진중함이 우선). Pull-to-refresh는 OS 네이티브 spring 그대로 사용 (override가 더 어색).

**Signature motions.**

1. **이체 성공 체크 등장.** 64px 녹색 체크 아이콘이 `motion-success / ease-spring-success`로 0.6 → 1.0 scale + opacity 0 → 1. 이 한 모션이 KakaoBank의 "끝났어요" 시그니처. 흔들림 없는 완결감.
2. **카드 탭.** 카드가 98% scale로 압축 (`motion-fast / ease-standard`), tap-up에서 release, 이후 `motion-page / ease-enter`로 라우트 전환.
3. **잔액 업데이트.** 잔액 숫자가 변할 때, 새 숫자가 위에서 아래로 8px 슬라이드 + 0.5 → 1 opacity (300ms). 카운트업 애니메이션은 사용 안 함 — 정확한 금액이 즉시 보여야 함.
4. **노란 색 transition 금지.** `#FFE300`은 binary on/off — 중간 yellow tint를 거치는 transition은 brand 색상 인지도를 훼손하므로 허용되지 않음. 노란 surface가 등장할 때는 fade-in 또는 slide-in만, 색상 transition 없음.
5. **Reduce motion.** `prefers-reduced-motion: reduce` 시 모든 spring → instant fade, 모든 `motion-*` → `motion-instant`. 성공 체크는 spring 없이 0.5초 fade-in으로 대체. 앱은 fully usable 유지.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 — Direct verification (playwright live DOM, 2026-05-08):
- https://www.kakaobank.com/ — hero "나의 첫 번째 AI 은행" 90px/800, sub-hero "나의 일상 속 유용한 금융 서비스를 만듭니다" 32px/700, body Pretendard Variable, monochrome canvas (`#FFFFFF` / `#F7F7F7` / `#F9F9F9`), top nav 14px/600 #1E1E1E.
- https://www.kakaobank.com/view/service — display 42px/700, section h2 32px/700, product copy ("어렵고 복잡한 금융생활, 카카오뱅크 AI가 도와드릴게요.", "내 사업장에 맞는 보증서대출을 확인할 수 있어요."), service tab strip (통장/저축/대출/투자/외환/카드/사업자), product names confirmed (AI 서비스, mini, 개인사업자통장, 부가세박스, 슈퍼뱅크, SCBX 프로젝트).
- https://www.kakaobank.com/view/about/brand/resource — official brand guideline V2.0 page. KakaoBank Yellow `#FFE300` (RGB 255/227/0, PANTONE Yellow 012 C/U), Black `#1E1E1E`, Gray `#A3A3A3`, Light Gray `#CCCCCC`. Symbol meaning ('B' + 'I' = "내가 중심이 되는 은행"). Wordmark follows Kakao 공동체 CI rules. Explicit prohibition: "유사한 다른 값의 노란색을 지정하지 않도록 유의".

Tier 1 — Brand Identity PDF:
- https://www.kakaobank.com/static/etc/logo/KakaoBank_BrandIdentityGuidelines_V2.0.pdf (referenced; not directly fetched but cross-confirmed via the web brand resource page rendering)

Tier 2 — Press / secondary (WebSearch, 2026-05):
- https://en.wikipedia.org/wiki/KakaoBank — 2017-07-27 launch, 1M users in 5 days, founding consortium (Kakao Corp + Korea Investment Holdings as lead financial partner — note: the user's task brief mentioned KB Bank as the consortium partner, but Wikipedia and primary press identify Korea Investment Holdings as the lead; this reference uses the verified attribution).
- https://www.kedglobal.com/ipos/newsView/ked202108060001 — KOSPI IPO 2021-08-06, ₩39,000 IPO price, becoming Korea's most valuable lender by market cap at listing.
- https://www.koreaherald.com/article/2666383 — IPO bubble/jackpot framing, 56× book value vs. peer 0.44× average.
- https://koalagains.com/stocks/KOSPI/323410 — FY2020→FY2024 loan book ₩20.7T → ₩44.5T, 4Y revenue CAGR 29.2%, net income CAGR 40.3%, market cap drop 58.7% in 2022.
- https://matrixbcg.com/blogs/brief-history/kakaobank — 2016-01 "Kakaobank Preparatory Corporation" formation, branchless cost-structure thesis, 23M+ users by Jan 2024.

Tier 2 — Product naming verification (WebSearch, 2026-05):
- 26주적금: https://www.kakaobank.com/products/26weeks (referenced)
- 세이프박스: https://www.kakaobank.com/products/safeboxes (referenced)
- 모임통장 + 모임 체크카드: https://www.kakaobank.com/products/moimcheckcard (referenced)
- mini: https://m.kakaobank.com/FaqTag;tag=mini (referenced)

Re-verification status:
- 23M+ users (Jan 2024) is carried from secondary press; numbers may drift; re-verify for public quotes.
- IPO price ₩39,000 (the upper-band finalization) — initial range was ₩33,000–₩39,000 per KED Global.
- The "KB Bank consortium" framing in the user task brief is amended to "Kakao Corp + Korea Investment Holdings" per Wikipedia; if KB Bank held a smaller IPO/consortium stake, that detail is not the controlling structure.

Not independently verified:
- Mobile-app component specs (Yellow Solid Primary CTA, debit card face, success confirmation screen) — these are inferred from the canonical `#FFE300` + Kakao-family 12px-radius pattern + brand guideline V2.0, not directly DOM-inspected. They live in the iOS/Android app, which playwright cannot reach.
- Voice samples marked `illustrative` are derived patterns from Kakao-family system messaging, not verbatim KakaoBank app strings.

Personas (§13) are fictional archetypes informed by publicly described KakaoBank user segments — Korean digital-native banking users 20s–40s, SMB/사업자 segment, youth/mini segment, late-adopting middle-aged users. Any resemblance to specific individuals is unintended.

Interpretive claims (editorial, not documented KakaoBank statements):
- "Banking-formal, character-flavored" framing (§12 Principle 3) — editorial reading.
- The "yellow is product, not chrome" principle (§12 Principle 1) — derived from V2.0 guideline restraint patterns + observation that the corporate site is monochrome, not a documented Kakao rule.
- "Cards over forms" (§12 Principle 6) — observational from product naming patterns + Kakao parent's flat design heritage.
-->

---

**Verified:** 2026-05-08
**Tier 1 sources (Philosophy):** kakaobank.com/view/about/brand/resource (official KakaoBank Brand Identity Guidelines V2.0, Aug 2024 — Yellow `#FFE300`, "내가 중심이 되는 은행" symbol meaning, single-yellow discipline); kakaobank.com/ (corporate hero "나의 첫 번째 AI 은행" / 90px·800, sub-hero, monochrome canvas); kakaobank.com/view/service (product copy verified, service taxonomy verified).
**Tier 2 sources:** Wikipedia (KakaoBank — founding 2016-01 / launch 2017-07-27 / Kakao Corp + Korea Investment Holdings consortium), KED Global (KOSPI IPO 2021-08-06 ₩39,000), Korea Herald (IPO 56× book value framing), KoalaGains (FY2020→FY2024 ₩20.7T→₩44.5T loan book), MatrixBCG (1M users in 5 days, 23M+ by Jan 2024), Brandfetch.
**Tier 2 (component DS):** getdesign.md/kakaobank — no record. styles.refero.design — not searched (no Kakao-family record per kakao reference precedent).
**Style ref for tone:** `kakao` (Kakao 공동체 family resemblance — `해요체` body, `합니다체` legal), `toss` (Korean fintech voice posture).
**Conflicts unresolved:** none. The user task brief's "KB Bank consortium" framing is amended to "Korea Investment Holdings" per primary sources; KakaoBank Yellow is precisely `#FFE300` (not `#FAE100` as the brief speculated) per the V2.0 brand guideline.
