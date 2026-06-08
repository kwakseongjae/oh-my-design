---
id: coupang
name: Coupang
country: KR
category: ecommerce
homepage: "https://www.coupang.com"
primary_color: "#000000"
logo:
  type: favicon
  slug: "https://www.coupang.com/favicon.ico"
verified: "2026-05-15"
omd: "0.1"
ds:
  name: Coupang Media Assets
  url: "https://news.coupang.com/coupang-media-assets-brand-guidelines-eng/"
  type: brand
  description: Coupang's official media-asset brand guidelines — logo usage, sizing, and attribution rules.
  og_image: "https://news.coupang.com/wp-content/uploads/2023/01/Coupang_2_1609.jpg"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#E94B22"
    primary-hover: "#C73D17"
    brand: "#E94B22"
    canvas: "#ffffff"
    surface: "#ffffff"
    foreground: "#111111"
    body: "#333D4B"
    muted: "#6B7684"
    on-primary: "#ffffff"
    red-tint: "#FFEEE8"
    wow-magenta: "#A50034"
    yellow: "#FAC000"
    green: "#80BC27"
    blue: "#3DACDC"
    brown: "#894F24"
    critical: "#D60404"
    success: "#03AC0E"
    link: "#0074E9"
    surface-alt: "#F7F8FA"
    surface-muted: "#F2F4F6"
    hairline: "#E5E8EB"
    inert: "#B0B8C1"
  typography:
    family: { sans: "Pretendard Variable" }
    display:    { size: 28, weight: 700, lineHeight: 1.29, use: "Hero promo banners, splash takeovers" }
    headline:   { size: 22, weight: 700, lineHeight: 1.36, use: "Section headers" }
    title:      { size: 16, weight: 600, lineHeight: 1.38, use: "Product name (truncated 2 lines)" }
    body:       { size: 14, weight: 400, lineHeight: 1.43, use: "Standard reading, descriptions" }
    caption:    { size: 12, weight: 400, lineHeight: 1.33, use: "Timestamps, fine print" }
    price:      { size: 18, weight: 700, lineHeight: 1.33, use: "Primary product price — tabular numerals" }
    discount:   { size: 14, weight: 700, lineHeight: 1.29, use: "Discount % red label" }
    badge:      { size: 11, weight: 700, lineHeight: 1.27, use: "로켓배송, BEST badge labels" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 20, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 4, md: 4, lg: 8, full: 9999 }
  shadow:
    soft: "rgba(17,17,17,0.06) 0px 2px 8px"
  components_harvested: true
  components:
    button-primary: { type: button, bg: "#E94B22", fg: "#ffffff", radius: 4, padding: "12px 20px", font: "16/700", use: "Primary checkout CTA — 구매하기, 장바구니 담기; pressed #C73D17" }
    button-secondary: { type: button, bg: "#ffffff", fg: "#E94B22", radius: 4, use: "Outlined, 1px #E94B22 border; pressed #FFEEE8 fill" }
    button-tertiary: { type: button, bg: "#F2F4F6", fg: "#333D4B", radius: 4, use: "Neutral filter toggle, 전체보기, low-emphasis" }
    button-wow: { type: button, bg: "#A50034", fg: "#ffffff", radius: 4, use: "WOW membership upsell — distinct from primary red" }
    button-critical: { type: button, bg: "#ffffff", fg: "#D60404", radius: 4, use: "Destructive — 주문 취소, 삭제; 1px #D60404 border" }
    product-card: { type: card, bg: "#ffffff", radius: 4, padding: "12px", use: "Atomic unit — 1:1 thumbnail, badge, name, rating, price block, delivery promise; hover border #111111" }
    promo-card: { type: card, bg: "#FFEEE8", radius: 8, padding: "16px", use: "Brand-tinted promo container" }
    filter-chip: { type: badge, bg: "#ffffff", radius: 4, font: "13/500", use: "32px height, 1px #E5E8EB border; selected = #111111 fill + white text" }
    rocket-badge: { type: badge, bg: "#ffffff", fg: "#E94B22", font: "11/700", use: "로켓배송 — icon + label, no border/radius" }
    discount-badge: { type: badge, fg: "#E94B22", font: "14/700", use: "Standalone red percentage; or #E94B22 fill pill for 특가/BEST" }
    search-input: { type: input, bg: "#ffffff", fg: "#111111", radius: 4, padding: "0 16px", use: "Hero chrome — 2px #E94B22 branded border, 48px height, red search button" }
    standard-input: { type: input, bg: "#ffffff", fg: "#111111", radius: 4, use: "1px #E5E8EB border, 44px height; focus 1px #E94B22" }
    category-nav: { type: tab, fg: "#333D4B", font: "14/700", use: "Sticky horizontal bar", active: "#E94B22 text + 2px bottom underline" }
---

# Design System Inspiration of Coupang (쿠팡)

## 1. Visual Theme & Atmosphere

Coupang's interface is the digital equivalent of a hyper-efficient Korean discount warehouse — every pixel earns its rent by surfacing a price, a delivery promise, or a deal. The page opens on a clean white canvas (`#ffffff`) with near-black text (`#111111`) and the unmistakable **Coupang Red** (`#E94B22`) — a warm, slightly orange-leaning red that reads less "alarm" and more "rocket exhaust." This isn't the deep crimson of luxury commerce; it's the saturated red of a price tag, a delivery truck, a `로켓배송` (Rocket Delivery) badge.

The aesthetic is unapologetically **information-dense**. Where Apple uses whitespace to elevate a single object, Coupang uses tight grids to fit four products per row above the fold — because the brand's defining promise (`쿠팡 없이 어떻게 살았을까?` — "How did we live without Coupang?") is that every search returns a faster, cheaper, in-stock answer than the user expected. The product card is the atomic unit of the brand: a square thumbnail, a discount percentage in red, a `로켓배송` rocket icon, a price in heavy weight, a delivery date promise — sometimes nine pieces of information in 200 pixels of height. Pretendard carries the Korean text; the system stack carries everything else; a small palette of accent reds, a `WOW` magenta-pink for membership moments, and warm neutrals do the rest.

**Key Characteristics:**
- **Coupang Red** (`#E94B22`) as the singular brand engine — used on CTAs, price emphasis, the rocket badge, and the logo
- Pretendard / Apple SD Gothic Neo system stack — no custom typeface, because density rules over typography
- 4-column product grid as the dominant layout primitive (mobile: 2-col, tablet: 3-col, desktop: 4-5 col)
- Information density: 6-9 data points per product card (image, badge, name, rating, review count, price, original price, discount %, delivery promise)
- Sub-brand color extensions: WOW (magenta-pink), Eats (red-tinted), Play (red-on-dark) all share the Red parent
- Heavy use of badges (`로켓배송`, `로켓프레시`, `WOW only`, `최저가`) as inline signals
- Mobile-first at 360px baseline — most Korean e-commerce traffic is mobile
- Yellow highlight (`#FAC000`) reserved for star ratings and promotional badges only

## 2. Color Palette & Roles

### Primary
- **Coupang Red** (`#E94B22`): Primary brand color. CTAs, price emphasis, rocket badge, logo wordmark, active tab indicator. The defining warm-red that anchors every Coupang surface. RGB(233, 75, 34).
- **Deep Coupang Red** (`#C73D17`): Pressed / hover state for primary buttons and active price indicators.
- **Near Black** (`#111111`): Primary text — heavier than Karrot's `#1a1c20`, because product names need maximum read-density.
- **Pure White** (`#ffffff`): Page and card background.

### Brand Tints & Sub-brands
- **Red Tint** (`#FFEEE8`): Soft red wash behind WOW pricing rows, deal banners.
- **Coupang Brown** (`#894F24`): Secondary brand accent — used sparingly on legacy chrome and Rocket Fresh produce indicators.
- **WOW Magenta** (`#A50034`): Coupang Wow membership badge, `WOW only` price labels — distinct from Red but in the same warm family.
- **Coupang Yellow** (`#FAC000`): Star ratings, promotional `BEST` / `HOT` badges. Never a CTA color.
- **Coupang Green** (`#80BC27`): Stock-in / availability indicators, Rocket Fresh subscribe state.
- **Coupang Blue** (`#3DACDC`): Informational links and `Coupang Play` accent on dark surfaces.

### Semantic
- **Critical Red** (`#D60404`): Out-of-stock, error states. Distinct from brand red — colder, closer to alarm red.
- **Discount Red** (`#E94B22`): Discount percentage labels — same as brand red, used as a price-emphasis tool.
- **Positive Green** (`#03AC0E`): "도착 보장" arrival-guarantee badges, success confirmations.
- **Informative Blue** (`#0074E9`): Standard hyperlinks, "더보기" expansion links.

### Neutral Scale
- **Gray 50** (`#F7F8FA`): Page-section dividers, card hover fill.
- **Gray 100** (`#F2F4F6`): Disabled bg, secondary surface.
- **Gray 200** (`#E5E8EB`): Standard border, divider lines.
- **Gray 400** (`#B0B8C1`): Muted icons, placeholder.
- **Gray 600** (`#6B7684`): Secondary metadata (review count, seller name).
- **Gray 800** (`#333D4B`): Body text, secondary headings.
- **Gray 900** (`#111111`): Headings, product names, prices.

### Surface & Borders
- **Border Subtle** (`#E5E8EB`): Card outlines on category grid.
- **Border Strong** (`#111111`): Selected filter chips, active tab underline.
- **Overlay** (`rgba(17,17,17,0.6)`): Modal backdrop, image-zoom scrim.

## 3. Typography Rules

### Font Family
- **Primary**: `"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Malgun Gothic", Roboto, "Noto Sans KR", sans-serif`
- **Numeric (prices)**: Pretendard tabular variant or `tabular-nums` — prices must align by digit, especially in compare-by-price grids.
- **Design Principle**: No custom typeface. The brand is a price catalog; legibility at 12-14px under fluorescent grocery-store conditions matters more than typographic identity.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Display | Pretendard | 28px | 700 | 36px | Hero promo banners, splash takeovers |
| Headline | Pretendard | 22px | 700 | 30px | Section headers ("로켓배송 신상품") |
| Subheadline | Pretendard | 18px | 700 | 26px | Card cluster headings |
| Title | Pretendard | 16px | 600 | 22px | Product name (truncated 2 lines) |
| Body | Pretendard | 14px | 400 | 20px | Standard reading, descriptions |
| Body Small | Pretendard | 13px | 400 | 18px | Review count, seller info |
| Caption | Pretendard | 12px | 400 | 16px | Timestamps, fine print |
| Price Large | Pretendard | 18px | 700 | 24px tabular | Primary product price |
| Price | Pretendard | 16px | 700 | 22px tabular | Card price |
| Strikethrough | Pretendard | 13px | 400 line-through | 18px | Original price before discount |
| Discount % | Pretendard | 14px | 700 | 18px | `#E94B22` red, e.g. "37%" |
| Badge | Pretendard | 11px | 700 | 14px | `로켓배송`, `BEST`, ALL CAPS Korean |

### Principles
- **Three weights only**: Regular (400), Semibold (600), Bold (700). No light, no extra-bold.
- **Tabular numerals on every price**: Currency figures must left-align by digit so users compare by glance, not by reading.
- **Truncation is mandatory**: Product names truncate at 2 lines with ellipsis — never wrap to 3, never single-line. The 2-line ceiling is a card-grid contract.
- **Korean-first letter-spacing**: Default `letter-spacing: -0.02em` on Korean headings to tighten Pretendard's natural metrics.
- **Discount percentage is visually dominant**: A `37%` discount label is bigger and bolder than the product name beside it — price psychology is the brand.

## 4. Component Stylings

### Buttons

**Primary (Coupang Red)**
- Background: `#E94B22` (Coupang Red)
- Text: `#ffffff`
- Radius: **4px** (sharp, utilitarian — not a pill, not soft)
- Min-height: **48px** (large), **40px** (medium), **32px** (small)
- Padding: 12px 20px (medium)
- Font: 16px weight 700 (large), 14px weight 700 (medium)
- Pressed: `#C73D17`
- Disabled: `#F2F4F6` bg, `#B0B8C1` text
- Use: "구매하기", "장바구니 담기", "로그인", primary checkout flow CTAs

**Secondary (Outlined)**
- Background: `#ffffff`
- Text: `#E94B22` (Coupang Red)
- Border: 1px solid `#E94B22`
- Radius: 4px
- Pressed: `#FFEEE8` background fill
- Use: "위시리스트 추가", "쿠폰 받기", paired with primary button

**Tertiary (Neutral)**
- Background: `#F2F4F6` (Gray 100)
- Text: `#333D4B` (Gray 800)
- Radius: 4px
- Pressed: `#E5E8EB`
- Use: Filter toggles, "전체보기", low-emphasis actions

**WOW Magenta (Membership)**
- Background: `#A50034` (WOW Magenta)
- Text: `#ffffff`
- Radius: 4px
- Use: "Wow 멤버십 가입하기", subscription upsells — distinct from primary red to flag the membership context

**Critical (Destructive)**
- Background: `#ffffff`
- Text: `#D60404`
- Border: 1px solid `#D60404`
- Use: "주문 취소", "삭제"

### Cards & Containers

**Product Card (the atomic unit)**
- Background: `#ffffff`
- Border: 1px solid `#E5E8EB` (Gray 200) OR no border + 8px gap-based separation
- Radius: **0px** for grid cards (sharp edges maximize density), **8px** for featured promo cards
- Padding: 12px (compact), 16px (standard)
- Hover: 1px border shifts to `#111111`, no shadow lift
- Layout: 1:1 thumbnail top, then in order — rocket badge row, product name (2 lines), star+reviews, price block (discount %, original, current), delivery promise

**Promo Card**
- Background: `#ffffff` or brand-tinted `#FFEEE8`
- Radius: 8px
- Padding: 16px-20px
- Optional 1px border or shadow `0px 2px 8px rgba(17,17,17,0.06)`

### Chips & Badges

**Filter Chip**
- Background: `#ffffff`, Selected: `#111111` with white text
- Border: 1px solid `#E5E8EB`, Selected: `#111111`
- Radius: 4px (not pill — Coupang's sharp register)
- Height: 32px, Padding: 0 12px, Font: 13px weight 500

**Rocket Badge** (the iconic element)
- Background: `#ffffff` with rocket icon `#E94B22`
- Text: `로켓배송` in `#E94B22` weight 700, 11px
- Compact horizontal layout, 16-20px tall
- No border, no radius — the icon does the work

**Discount Badge**
- Standalone red percentage: `#E94B22` text, no bg, weight 700, 14-18px
- "특가" / "BEST" pill: `#E94B22` bg, white text, 4px radius, 11px weight 700

**WOW Badge**
- Background: `#A50034`, white text, "WOW only" or "Wow 회원가"
- 4px radius, 11px weight 700

### Inputs & Forms

**Search Input** (the hero of the chrome)
- Background: `#ffffff`
- Border: 2px solid `#E94B22` (the search bar IS branded — red-bordered by default)
- Radius: 4px
- Height: 48px, Padding: 0 16px
- Right-side red search button (square, `#E94B22`, white magnifier icon)

**Standard Input**
- Background: `#ffffff`
- Border: 1px solid `#E5E8EB`
- Radius: 4px
- Focus: 1px solid `#E94B22`
- Height: 44px

### Navigation

**Top Header**
- Background: `#ffffff`
- Logo: `#E94B22` Coupang wordmark, ~28-32px tall
- Search bar dominates center (red-bordered, ~600px wide on desktop)
- Right: "마이쿠팡", "장바구니" with cart count badge
- Height: 80-90px (taller than typical because search must breathe)

**Category Nav**
- Sticky horizontal bar, white bg, 1px bottom border
- Active item: `#E94B22` text + 2px bottom underline
- 14px weight 700

**Mobile Bottom Tab**
- 5 tabs: 홈 / 카테고리 / 검색 / 장바구니 / 마이쿠팡
- Active: `#E94B22` icon + label
- Inactive: `#6B7684`
- Height: 56px + safe area

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64
- Gutter: 16px mobile, 24px tablet, 32px desktop
- Card grid gap: 8px (compact) or 12px (standard) — *tight*, because density is the brand

### Grid & Container
- Mobile: 2-column product grid, 360-414px viewport
- Tablet: 3-column, 768px breakpoint
- Desktop: 4-5 column at >1024px, max content width 1280px
- Header search bar: max 600px wide, centered
- Promo banners: full-bleed edge-to-edge

### Whitespace Philosophy
- **Density before drama**: A typical search result fits 12-20 product cards above the fold on desktop. Whitespace is functional gap, never decorative breathing room.
- **Card gaps over card padding**: Use 8-12px gaps between cards rather than internal padding to maximize image and price visibility.
- **Vertical rhythm in price blocks**: 4px between discount %, original price (strikethrough), current price, delivery promise — tight stack so the eye reads top-to-bottom in one motion.

### Border Radius Scale
- **Sharp (0-4px)**: Product cards, filter chips, buttons, inputs — Coupang's default. The sharp corner reads as catalog/utility/efficient.
- **Soft (8px)**: Promo cards, modals, bottom sheets.
- **Pill (9999px)**: Avatars only — never on chips, never on buttons.

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (0) | No shadow | Page background, product card grid (gap-only separation) |
| Subtle (s1) | `0px 1px 4px rgba(17,17,17,0.06)` | Card hover, dropdown |
| Standard (s2) | `0px 2px 8px rgba(17,17,17,0.10)` | Promo cards, sticky CTAs, modals |
| Prominent (s3) | `0px 4px 16px rgba(17,17,17,0.16)` | Bottom sheets, image zoom, full-screen overlays |

**Shadow Philosophy**: Coupang uses shadows sparingly — the grid's information density already creates depth through sheer visual weight. Shadows appear at hover, on sticky elements, and on overlays — never as decorative card-lifting on the main grid. The dominant separation tool is the 1px gray border (`#E5E8EB`) and the 8-12px gap, not elevation.

## 7. Do's and Don'ts

### Do
- Use Coupang Red (`#E94B22`) for CTAs, price emphasis, rocket badges, and the logo — these four roles only
- Keep border-radius at 0-4px for grid elements — sharp corners read as catalog efficiency
- Use tabular numerals on every price, every count, every quantity
- Pack 6-9 data points per product card — that's the brand's contract with the user
- Truncate product names at 2 lines with ellipsis — never wrap to 3
- Use Pretendard with `letter-spacing: -0.02em` on Korean headings
- Reserve WOW Magenta (`#A50034`) exclusively for membership-context buttons and badges
- Use the 4px grid for all spacing — same as Karrot, but applied to denser layouts

### Don't
- Don't use pill-shaped (9999px) buttons or chips — that's a Toss/Karrot register, not Coupang's
- Don't add ambient shadows to product cards on the main grid — gap + 1px border carries the load
- Don't use yellow (`#FAC000`) for buttons — it's exclusively for stars and `BEST` badges
- Don't introduce dramatic whitespace that drops grid density below the device's max-card-count
- Don't replace the red-bordered search bar with a neutral gray version — the red border is brand chrome
- Don't pair Coupang Red with a secondary brand red — the WOW Magenta is the only sibling, and it's membership-scoped
- Don't use serif typography or display faces — Pretendard does every weight Coupang needs
- Don't single-line product names — the 2-line ceiling is what makes the grid scannable

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <480px | 2-column product grid, 16px gutter, bottom tab bar |
| Tablet | 480-1024px | 3-column grid, 24px gutter, top nav unchanged |
| Desktop | >1024px | 4-5 column grid, 32px gutter, max content 1280px |

### Touch Targets
- Buttons: 48px (large), 40px (medium), 32px (small)
- Filter chips: 32px height
- Bottom tab: 56px height
- Product card thumbnail: minimum 156x156px on mobile

### Collapsing Strategy
- Search bar: full-width on mobile, max 600px on desktop, sticky on scroll
- Category nav: horizontal scroll on mobile, full row on desktop
- Product grid: 2 → 3 → 4 → 5 columns by viewport
- Add-to-cart CTA: sticky bottom bar on mobile product detail, inline on desktop

### Image Behavior
- Product thumbnails: 1:1 aspect ratio, 0px or 4px radius
- Hero banners: 16:9 desktop, 4:3 mobile
- Avatar (review author): circular 9999px, 32-40px

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Coupang Red (`#E94B22`)
- CTA Pressed: Deep Red (`#C73D17`)
- Background: White (`#ffffff`)
- Heading: Near Black (`#111111`)
- Body: Gray 800 (`#333D4B`)
- Caption: Gray 600 (`#6B7684`)
- Border: Gray 200 (`#E5E8EB`)
- Disabled: Gray 100 (`#F2F4F6`)
- Critical: Red (`#D60404`)
- Success: Green (`#03AC0E`)
- Info: Blue (`#0074E9`)
- Star/Best: Yellow (`#FAC000`)
- WOW: Magenta (`#A50034`)

### Example Component Prompts
- "Build a Coupang product card: white bg, 1px solid #E5E8EB border, 0px radius, 12px padding. 1:1 thumbnail top. Below: 로켓배송 badge (#E94B22 rocket icon, 11px weight 700). Product name 14px weight 600 #111111, truncate 2 lines. Star rating row: yellow #FAC000 stars + gray review count. Price block: discount % 14px weight 700 #E94B22 + strikethrough original 13px #6B7684 + current price 16px weight 700 #111111 tabular-nums. Delivery promise '내일 도착' 12px #03AC0E."
- "Design the Coupang search bar: white bg, 2px solid #E94B22 border, 4px radius, 48px height. Right-side square button: #E94B22 bg, white magnifier icon, 48x48px, 0px radius, attached to right edge."
- "Create a primary CTA: #E94B22 bg, white text 16px weight 700, 48px min-height, 4px radius, 12px×20px padding. Pressed: #C73D17. Disabled: #F2F4F6 bg #B0B8C1 text. Use for '구매하기', '장바구니 담기'."
- "Build a WOW membership upsell: #A50034 bg, white text 'Wow 멤버십 가입하기' 14px weight 700, 4px radius, 40px height. Above the button: WOW logo + benefit list with #03AC0E checkmarks."
- "Design a discount badge: standalone '37%' label, #E94B22 text, 18px weight 700, no background. Position top-left of product image, 8px inset."

### Iteration Guide
1. Coupang Red `#E94B22` is the only true brand color — WOW Magenta is the membership-scoped sibling
2. Border-radius defaults: 0-4px buttons/inputs/cards, 8px modals, 9999px avatars only
3. Density is non-negotiable — 4-5 cards per row desktop, 2-3 mobile, never sparse
4. Every price uses tabular numerals — alignment matters more than aesthetics
5. The red-bordered search bar is brand chrome — don't neutralize it
6. Sharp corners read as catalog/utility — soft corners read as lifestyle, which is off-brand
7. Pretendard, three weights (400/600/700), Korean-tightened with `letter-spacing: -0.02em`

---

## 10. Voice & Tone

Coupang speaks like a **highly competent Korean discount-store ajumma** — direct, deal-driven, results-first, allergic to florid marketing. The voice assumes a working parent on a phone at 11pm trying to get diapers delivered before 7am, and treats their time as scarce. Sentences are short, verb-first, and load-bearing. The signature catchphrase — `쿠팡 없이 어떻게 살았을까?` ("How did we live without Coupang?") — is the entire brand thesis distilled to seven words: utility so deep it becomes infrastructure. English surfaces (Coupang Inc. corporate, US headquarters) carry the same posture in plain American English — "We bring Wow to every customer," not "Discover the future of e-commerce."

| Context | Tone |
|---|---|
| CTAs | Verb-first Korean (`구매하기`, `장바구니 담기`, `로그인`, `지금 구독하기`) / plain English (`Buy now`, `Add to cart`, `Apply`) |
| Price labels | Numeric-dominant. `최저가`, `WOW 회원가`, `로켓와우 회원가`, `즉시할인` — short noun phrases that name the price type |
| Delivery promise | Time-specific, never vague. `내일(목) 도착 보장`, `오늘 7시까지 주문 시 새벽 도착`. Not "fast shipping." |
| Rocket badges | Single-word power: `로켓배송`, `로켓프레시`, `로켓직구`, `로켓설치` — each names a specific logistics product, not a feeling |
| Empty states | Practical reframe. Never `데이터가 없습니다`. Prefer `검색 결과가 없어요. 다른 키워드로 검색해보세요.` |
| Error messages | Specific + actionable. `네트워크 연결을 확인하고 다시 시도해 주세요`, not `오류가 발생했습니다`. |
| Success toasts | Past-tense, transactional. `장바구니에 담겼어요`, `주문이 완료되었어요`. No celebration, no exclamation marks. |
| Membership upsells | Benefit-stack, not aspiration. Lists concrete perks (`무료배송`, `무료반품`, `쿠팡플레이 무료`) over lifestyle promises. |
| Coupang Eats / Play | Sub-brands borrow the parent register but slightly warmer — Eats uses food-craving copy (`30분 안에 도착`), Play uses content-hook copy (`SNL 코리아 시즌 6 독점 공개`). |

**Forbidden phrases.** `불편을 드려 죄송합니다`, `데이터가 없습니다`, `오류가 발생했습니다`, `놀라운`, `혁신적인`, `세계 최고의`. English boilerplate bans: `Oops`, `something went wrong`, `amazing deals`, `unbeatable prices`, `revolutionary`. Marketing inflation is anti-Coupang — the brand lets the price tag and the delivery date do the persuading. Emoji are permitted in promotional banners and chat-with-seller flows, but never in error messages, never in payment confirmations, never in delivery-status notifications.

**Voice samples.**

- `쿠팡 없이 어떻게 살았을까?` — corporate brand tagline, the defining catchphrase. <!-- verified: coupang.jobs/kr 2026-05 -->
- `우리의 미션은 고객과 직원, 파트너의 일상을 혁신하는 것입니다` — corporate mission. <!-- verified: coupang.jobs/kr 2026-05 -->
- `쿠팡은 커머스의 미래를 만들어 가고 있습니다` — careers hero copy. <!-- verified: coupang.jobs/kr 2026-05 -->
- `로켓배송` — flagship logistics sub-brand mark. <!-- verified: coupang.com product surfaces, widely documented -->
- `WOW 회원가` — membership-scoped price label. <!-- illustrative: standard pricing convention on Coupang catalog surfaces -->
- `오늘 7시까지 주문 시 새벽 도착` — Dawn Delivery promise pattern. <!-- illustrative: documented Rocket Wow benefit, exact wording varies -->
- `장바구니에 담겼어요` — illustrative success-toast pattern. <!-- illustrative: not verified as live Coupang copy -->

## 11. Brand Narrative

Coupang was founded in **2010 in Seoul** by **Bom Kim (김범석)** — a Korean-American who moved from Seoul to the US at age 7, graduated Harvard College, then **dropped out of Harvard Business School in his second semester** to start the company. The first version was a Groupon-clone daily-deals site. By 2014, Kim had bet the company on a thesis no Korean e-commerce incumbent believed: that the bottleneck wasn't catalog or price, it was **logistics control**. Coupang would not be a marketplace that referred orders to third-party shippers; it would own the warehouses, the trucks, the drivers (the "로켓맨" / Rocketmen), and the delivery promise end-to-end ([CNBC](https://www.cnbc.com/2019/12/04/coupang-harvard-dropout-bom-kim-built-koreas-most-valuable-start-up.html), [Wikipedia — Bom Kim](https://en.wikipedia.org/wiki/Bom_Kim)).

**Rocket Delivery (`로켓배송`) launched March 2014.** Same-day or next-day on millions of items, eventually expanded to **Dawn Delivery** (order by midnight, arrives by 7am). The capital that made it possible: **$100M from Sequoia Capital May 2014**, **$300M from BlackRock months later**, then the bet that changed everything — **SoftBank $1B in June 2015**, followed by **SoftBank Vision Fund $2B in November 2018** at a $9B valuation, making Bom Kim the second-youngest billionaire in South Korea ([Korea Times](https://www.koreatimes.co.kr/business/tech-science/20190129/coupangs-rocket-delivery-gaining-popularity), [Speedwell Research](https://www.speedwellmemos.com/p/coupang-business-history)).

**The IPO.** Coupang listed on the **NYSE on March 11, 2021**, ticker **CPNG**. First-day close: $49.25. Day-one market cap: **~$84.47 billion** — the **largest US IPO by a foreign company since Alibaba in 2014**, and the largest US listing ever by a Korean company. The company raised **$4.6 billion** in the offering ([CNBC IPO coverage](https://www.cnbc.com/2021/03/11/coupang-ipo-cpng-begins-trading-on-the-nyse.html), [Kim & Chang legal note](https://www.kimchang.com/en/insights/detail.kc?sch_section=2&idx=23179)).

The product family extended into a **super-app**: **Coupang Eats (`쿠팡이츠`)** launched May 2019 promising 30-minute "cheetah" delivery; **Coupang Play (`쿠팡플레이`)** launched December 2020 as a Wow-membership-bundled streaming service (now home to SNL Korea, Premier League rights, and Paramount+ Korea); **Rocket Fresh** for groceries; **Rocket Direct** for cross-border imports. The unifying thread: every sub-brand is a perk inside the **WOW (`로켓와우`) membership** — a 7,890 KRW/month subscription embraced by **two-thirds of Korean households** ([Korea Herald](https://www.koreaherald.com/article/10489777), [Wikipedia — Coupang](https://en.wikipedia.org/wiki/Coupang)).

What Coupang refuses: the marketplace-only model of 11번가 / 옥션 (no logistics ownership, slow delivery), the lifestyle aesthetic of 무신사 / 29CM (curated, white-glove, slow), the boutique register of luxury commerce. Coupang's design language follows that refusal — a warm-red price-tag accent, sharp 0-4px corners, dense product grids, tabular price stacks, and a singular promise that hangs over every screen: `쿠팡 없이 어떻게 살았을까?`

## 12. Principles

1. **Density is the brand.** Coupang's product grid is engineered to surface more catalog per viewport than any Korean competitor. *UI implication:* never reduce a 4-column desktop grid to 3 for "breathing room"; never single-column a mobile listing. Density is what users came for.
2. **Red is for price and rocket — nothing else.** Coupang Red (`#E94B22`) carries four jobs: CTA, discount %, rocket badge, logo. It does not decorate, does not tint backgrounds, does not paint borders ambient. *UI implication:* if a design uses red for an info card or a status pill that isn't a discount or a rocket, demote to gray or to a semantic color.
3. **Sharp corners read as catalog; soft corners read as lifestyle.** Coupang lives at 0-4px radii on grid elements. *UI implication:* if a card or chip is rendering at 12px+ radius, it has drifted toward Toss/Karrot register and is off-brand for utility surfaces.
4. **Tabular numerals on every price.** Korean shoppers compare by digit-alignment, not by reading. *UI implication:* every `<price>` element gets `font-variant-numeric: tabular-nums` or a tabular Pretendard variant. Misaligned columns of 19,800원 / 24,500원 / 8,900원 destroy the scan.
5. **The delivery promise is a first-class data point.** "내일(목) 도착 보장" is on the same hierarchy as the price — sometimes higher. *UI implication:* a product card without a visible delivery date or a rocket badge is incomplete; the date must render before the page is "done."
6. **Sub-brands inherit the parent palette.** Coupang Eats, Play, Fresh, Direct, and Wow all use the same red parent — Wow's magenta is the only documented sibling. *UI implication:* don't introduce a "Coupang Eats yellow" or "Play purple" — every sub-brand is a context tag, not a separate visual identity.
7. **Every screen earns its keep.** The brand is utility. A screen with no price, no promise, no action is suspect. *UI implication:* hero banners must surface a CTA + a price/promise within the first viewport; "splash"-style content-only takeovers are a Toss move, not a Coupang move.
8. **Membership is the loyalty engine — surface it, but scope it.** WOW perks (`로켓배송 무료`, `쿠팡플레이 무료`, `새벽배송`) appear in cart, checkout, product detail, and onboarding — but with WOW Magenta, never with Coupang Red, so the user can tell brand from membership at a glance.

## 13. Personas

*Personas are fictional archetypes informed by publicly described Coupang user segments, not individual people.*

**민지 (Minji), 34, 위례신도시.** Working mother of two, engineer at an IT company. WOW member since 2018. Orders diapers, formula, 새벽배송 groceries 4-5x per week. Treats Coupang as critical household infrastructure — power, water, Coupang. Will switch Coupang Eats to a competitor if a single order is late, then switch back the next week because nothing else delivers a forgotten ingredient by 7am.

**준호 (Junho), 41, 분당.** Mid-career manager, two kids in elementary school. The household's primary Coupang account holder. Uses 로켓배송 for everything from printer ink to weekend hiking gear. Watches SNL Korea on Coupang Play after the kids are in bed. The 7,890 won monthly Wow fee feels like the cheapest line item on his budget — *"한 달에 7,990원이 아까운 적이 없다"* (never once felt the monthly fee was wasteful).

**Sarah, 29, Hannam-dong.** American expat working at a multinational in Seoul. Discovered Coupang because Korean colleagues said it was the only e-commerce site that worked the way she expected things to work in NYC. Orders English-language books via 로켓직구, groceries via 로켓프레시, and uses Coupang Eats more than any other delivery app because the in-app English support is the cleanest among Korean platforms.

**박여사 (Mrs. Park), 62, 대구.** Retired, lives alone, learned Coupang from her daughter during COVID. The first online shopping platform she ever trusted, because the Rocketmen leave packages where she asked, never ring the bell, and the return process is a single tap. Uses voice search to type Korean — relies on the mobile UI being big enough at the default font size that she doesn't need glasses for the price.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no search results)** | One-line factual reframe (`'키워드'에 대한 검색 결과가 없어요`) + suggested broader keywords as chips + bottom CTA `카테고리 둘러보기`. Never an illustration. |
| **Empty (empty cart)** | Single line `장바구니가 비어 있어요` + 12px caption suggestion + primary CTA `로켓배송 구경하기`. No illustration. |
| **Loading (first paint)** | Skeleton blocks at `#F2F4F6` matching final product-card geometry — 1:1 thumbnail box, two text lines (name), one line (price). Shimmer 1.4s with 6% white highlight. |
| **Loading (infinite scroll)** | Bottom-of-list spinner in Coupang Red, 24px diameter. No overlay. Existing cards stay visible. |
| **Loading (price recalc / coupon apply)** | Inline 16px spinner in `#E94B22` next to the price line — never a full-screen overlay for a price update. |
| **Error (inline field)** | Input border `#D60404` 1px, helper text below `#D60404` 13px. One actionable sentence. |
| **Error (toast)** | `#111111` background, white 14px weight 400 text, 3s auto-dismiss. Bottom of screen, 16px above tab bar. No icon, no emoji. |
| **Error (network blocking)** | Full-screen centered: `#111111` 18px weight 700 message, `#6B7684` 14px subline, retry button in Coupang Red. No illustration. |
| **Out of stock** | Product card: 50% grayscale image overlay, `품절` badge `#6B7684` bg over image bottom-left, price stays visible but `#B0B8C1` text. Add-to-cart button replaced with `재입고 알림 신청` outlined-red. |
| **Success (added to cart)** | Toast: `장바구니에 담겼어요` + secondary text `장바구니 보기 ›`. 3s auto-dismiss. White text on `#111111`. |
| **Success (order complete)** | Dedicated full-screen page — not a toast. Green checkmark `#03AC0E`, `주문이 완료되었어요`, summary card with delivery date in red, primary CTA `주문 상세보기`. |
| **Skeleton** | `#F2F4F6` blocks matching exact card layout. Never animate the price slot brighter than other slots — equal-weight shimmer across all data points. |
| **Disabled** | Button `#F2F4F6` bg, `#B0B8C1` text. No color shift. Geometry stays identical so re-enable is frame-stable. |
| **WOW-gated** | A non-Wow user sees the Wow price label in `#A50034` magenta with a small lock icon and `WOW 회원가입 시 적용` 12px caption. The regular price stays visible — Coupang never hides info, it labels access. |

## 15. Motion & Easing

**Durations** (named, not raw milliseconds):

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggles, checkbox state, filter chip on/off |
| `motion-fast` | 120ms | Hover, focus, button press, inline price flash |
| `motion-standard` | 200ms | Card taps, tab switches, dropdown reveals — the catalog default |
| `motion-slow` | 300ms | Bottom-sheet presentations, modal opens |
| `motion-page` | 280ms | Route transitions, native push/pop |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Sheets, toasts, screens appearing |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals, toast auto-close |
| `ease-standard` | `cubic-bezier(0.4, 0.0, 0.2, 1)` | Two-way transitions |

**Spring stance.** **Coupang motion is fast, short, and never bouncy.** The brand is a logistics platform — when a button presses, it commits; when a card opens, it opens. Spring physics, overshoot, and elastic bounces are forbidden because they imply *deliberation* — a quality the brand explicitly does not want users to associate with Coupang. A user who clicks "구매하기" should feel the order has already shipped. Durations skew shorter than Karrot's (`motion-standard` 200ms vs Karrot's 250ms) to enforce that mental model.

**Signature motions.**

1. **Add-to-cart fly.** When a user taps "장바구니 담기" on a product card, the thumbnail performs a tiny scaled translate (~8% scale, 200ms `ease-standard`) toward the cart icon in the header, ending with a +1 badge increment. The motion is brief enough that a fast scroller will miss it — that's intentional; it confirms without blocking.
2. **Price-recalc flash.** When a coupon applies or a Wow membership preview activates, the price number cross-fades from old to new in 120ms `ease-standard` — no bouncing digits, no rolling odometer. Tabular numerals make the swap pixel-stable.
3. **Bottom-sheet presentation.** Sheets rise from `y+24px` (shorter than Karrot's 40px) with `motion-slow / ease-enter` and a backdrop fade to `rgba(17,17,17,0.6)`. Dismissal uses `motion-fast / ease-exit`.
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant` except the add-to-cart fly, which becomes a single 80ms opacity flash on the cart icon — the confirmation must remain perceptible because it's transactional, not decorative.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 — Direct verification:
- coupang.com home — UNREACHABLE (Akamai bot protection blocks Playwright + WebFetch with 403; site requires interactive browsing context that the headless harness was unable to maintain due to ad-tab redirects in the live environment).
- news.coupang.com — Tier 1 partial via WebFetch (extracted Korean copy: "쿠팡 뉴스레터 구독 신청", "신청하기", and editorial headlines including "과일 쇼핑의 불안을 지우는 사람들, 쿠팡 로켓프레시 품질관리팀").
- coupang.jobs/kr — Tier 1 verified via WebFetch (extracted: tagline "쿠팡 없이 어떻게 살았을까?", mission "우리의 미션은 고객과 직원, 파트너의 일상을 혁신하는 것입니다", hero "쿠팡은 커머스의 미래를 만들어 가고 있습니다", nav taxonomy, position counts).

Tier 2a — getdesign.md/coupang:
- "No designs found for 'coupang'." — no record.

Tier 2b — brandcolorcode.com:
- Coupang Red (Primary): #E94B22
- Coupang Brown: #894F24
- Coupang Yellow: #FAC000
- Coupang Green: #80BC27
- Coupang Blue: #3DACDC
- Source notes the values are "the closest numbers based on official color codes provided" — Coupang has not published a public brand-guideline color spec, so #E94B22 is treated as the de-facto primary across the design community.

Tier 2 (Philosophy/founders):
- CNBC 2019: Bom Kim profile, Harvard dropout narrative.
- Wikipedia — Bom Kim: 1978-10-07 birth, Korean-American, Harvard College + Harvard Business School (dropped 2nd semester), founded Coupang 2010.
- Wikipedia — Coupang: 2010 founding, Rocket Delivery 2014, sub-brand timeline.
- Speedwell Research / Korea Times: Sequoia $100M May 2014, BlackRock $300M, SoftBank $1B June 2015.
- CNBC IPO 2021-03-11: NYSE listing, ticker CPNG, first-day close $49.25, market cap ~$84.47B, $4.6B raised, "largest US IPO by foreign company since Alibaba 2014".
- Kim & Chang legal note — IPO confirmation.
- Korea Herald: Coupang Play / Paramount+ Korea bundle, FAST service launch.
- Korea Times: Wow membership 7,890 KRW/month, two-thirds of Korean households penetration.
- Namu Wiki — Coupang Eats (May 2019), Coupang Play (December 2020).

Re-verification status:
- Coupang Red #E94B22 is the strongest publicly-cited value but has NOT been verified against a live Coupang.com computed style due to bot-protection. Re-verify in a non-headless browser before quoting publicly.
- WOW Magenta #A50034 is editorial — derived from observed WOW badge usage in screenshots and brand-resource collections; not measured live in this pass.
- Sub-brand color attributions (Eats / Play / Fresh) are interpretive, drawn from public marketing materials.

Personas (§13) are fictional archetypes informed by publicly described Coupang user segments (KR working-parent Wow subscriber, mid-career Wow household, expat user, KR senior late-adopter).

Interpretive claims (editorial, not documented Coupang statements):
- "Density is the brand" (§12 #1) — editorial reading of the catalog grid, not a sourced brand statement.
- "Sharp corners read as catalog" (§7 Don'ts, §12 #3) — design-language framing, not a Coupang publication.
- The spring-forbidden motion stance (§15) — derived from the brand's logistics-utility posture, not a published motion spec.
-->

---

**Verified:** 2026-05-08 (omd:add-reference)
**Tier 1 sources:** coupang.jobs/kr (corporate careers — voice + tagline + mission verified via WebFetch); news.coupang.com (Korean editorial copy verified). **Note:** coupang.com main consumer surface unreachable due to Akamai bot-protection; geometry tokens (radii, paddings, heights) carried from public design-community references and pattern observation, flagged for live re-verification.
**Tier 2 sources:** brandcolorcode.com/coupang (Coupang Red `#E94B22`, brown `#894F24`, yellow `#FAC000`, green `#80BC27`, blue `#3DACDC`); getdesign.md/coupang — no record.
**Tier 2 (Philosophy/founders):** Wikipedia (Bom Kim + Coupang), CNBC (2019 profile + 2021 IPO), Korea Times, Korea Herald, Speedwell Research, Kim & Chang.
**Style ref:** none (fresh entry).
**Conflicts unresolved:** Coupang Red exact hex pending live computed-style verification — `#E94B22` adopted from public design-community consensus.
