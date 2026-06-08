---
id: zigzag
name: ZIGZAG
country: KR
category: ecommerce
homepage: "https://zigzag.kr"
primary_color: "#fa6ee3"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=zigzag.kr&sz=256"
verified: "2026-05-15"
omd: "0.1"
ds:
  name: ZIGZAG Tech / Brunch
  url: "https://brunch.co.kr/@zigzag/73"
  type: brand
  description: Kakaostyle / ZIGZAG's brand & design articles — the ZDS (ZIGZAG Design System) rearchitecture and the 2021 cool-pink rebrand.
  og_image: "https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/4Zzt/image/-3UDP-Htu127zH73hWgxU-DsWNg.jpg"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    brand: "#fa6ee3"
    primary: "#f55dd6"
    primary-hover: "#e356c6"
    primary-pressed: "#d14fb7"
    pink-tint: "#feeefa"
    pink-border: "#fccef2"
    canvas: "#f5f6f6"
    surface: "#ffffff"
    on-surface: "#f9fafa"
    heading: "#121212"
    body: "#292b2b"
    text-secondary: "#a1a9ad"
    text-tertiary: "#878f91"
    text-disabled: "#b3babd"
    border: "#ecedee"
    border-strong: "#d0d4d6"
    border-active: "#c6cbcd"
    on-primary: "#ffffff"
    sale: "#fb4333"
    ai: "#7463f2"
    kakao: "#fee500"
    success: "#51aa5b"
    error: "#e84747"
  typography:
    family: { sans: "Pretendard", mono: "Menlo" }
    head-28:  { size: 28, weight: 700, lineHeight: 1.21, tracking: 0, use: "Display hero promo headlines, brand-event titles" }
    head-24:  { size: 24, weight: 700, lineHeight: 1.21, tracking: 0, use: "Page H1, category landing" }
    head-22:  { size: 22, weight: 600, lineHeight: 1.18, tracking: 0, use: "Section heading" }
    body-16:  { size: 16, weight: 400, lineHeight: 1.19, tracking: 0, use: "Standard body, default reading text" }
    body-15:  { size: 15, weight: 500, lineHeight: 1.20, tracking: 0, use: "Product card title (grid)" }
    body-13:  { size: 13, weight: 400, lineHeight: 1.23, tracking: 0, use: "Tertiary meta, review count, ratings" }
    caption-12: { size: 12, weight: 400, lineHeight: 1.17, tracking: 0, use: "Tag chip text, timestamps" }
    caption-11: { size: 11, weight: 600, lineHeight: 1.18, tracking: 0, use: "Micro labels, badges, tab labels" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 40 }
  rounded: { sm: 4, md: 8, lg: 12, full: 9999 }
  shadow:
    subtle: "0px 1px 2px rgba(0,0,0,0.05)"
    standard: "0px 2px 8px rgba(0,0,0,0.08)"
    elevated: "0px 4px 16px rgba(0,0,0,0.12)"
    modal: "0px 8px 32px rgba(0,0,0,0.16)"
  components:
    button-primary: { type: button, bg: "#f55dd6", fg: "#ffffff", radius: "12px", padding: "14px 20px", font: "16px / 600", use: "Primary commerce CTA — 구매하기, 장바구니 담기" }
    button-black: { type: button, bg: "#121212", fg: "#ffffff", radius: "12px", padding: "14px 20px", font: "16px / 600", use: "Default primary CTA on non-brand surfaces — 다음, 확인, 주문하기" }
    button-pink-ghost: { type: button, bg: "#ffffff", fg: "#f55dd6", radius: "12px", padding: "13px 19px", font: "16px / 600", use: "Secondary brand action — 찜한 상품 보기, 쿠폰함" }
    button-outlined: { type: button, bg: "#ffffff", fg: "#292b2b", radius: "12px", padding: "13px 19px", font: "16px / 500", use: "Tertiary action — 취소, 더보기" }
    button-kakao: { type: button, bg: "#fee500", fg: "#000000", radius: "12px", padding: "14px 20px", font: "16px / 600", use: "Kakao OAuth entry point only" }
    switch-pink: { type: toggle, bg: "#f55dd6", radius: "9999px", use: "Notification preferences, filter inclusions; track-off gray-80, white thumb" }
    product-card: { type: card, bg: "#ffffff", radius: "8px", use: "Workhorse grid cell; 1:1 thumbnail, title BODY_15 MEDIUM, price BOLD" }
    chip-selected: { type: badge, bg: "#feeefa", fg: "#f55dd6", radius: "9999px", padding: "6px 12px", font: "13px / 500", use: "Filter pill active state" }
    chip-default: { type: badge, bg: "#ffffff", fg: "#393b3d", radius: "9999px", padding: "6px 12px", font: "13px / 500", use: "Filter pill default" }
    chip-ai: { type: badge, bg: "#ffffff", fg: "#7463f2", radius: "9999px", padding: "6px 12px", font: "13px / 600", use: "AI recommendation surfaces only" }
    search-input: { type: input, bg: "#f5f6f6", fg: "#292b2b", radius: "12px", padding: "12px 14px", font: "15px / 400", use: "Header search bar; focus border gray-800, no pink ring" }
    badge-discount: { type: badge, bg: "#fb4333", fg: "#ffffff", radius: "4px", padding: "2px 6px", font: "11px / 700", use: "Discount % on product thumbnails" }
    badge-time: { type: badge, bg: "#121212", fg: "#ffffff", radius: "4px", padding: "4px 8px", font: "11px / 700", use: "Time-limited — 24시간 한정, 오늘만" }
    badge-mdpick: { type: badge, bg: "#ffffff", fg: "#121212", radius: "4px", padding: "2px 6px", font: "10px / 700", use: "Editorial pick markers; 1px black border" }
    bottom-sheet: { type: dialog, bg: "#ffffff", radius: "16px", padding: "8px", use: "Filter sheet, option selector; top corners only, gray-80 drag handle, dimmed backdrop" }
    tab-bottom: { type: tab, bg: "#ffffff", fg: "#878f91", font: "11px / 600", active: "Npx #121212 icon + label", use: "Mobile primary nav — 홈/카테고리/찜/마이페이지/알림" }
  components_harvested: true
---

# Design System Inspiration of ZIGZAG (지그재그)

## 1. Visual Theme & Atmosphere

ZIGZAG is the gold standard of Korean fashion-commerce design — a mobile-first shop-aggregator UI that treats a 600px-wide phone canvas as a curated magazine spread rather than a transactional grid. The page opens on a near-white surface (`#f5f6f6` / `#f9fafa` — gray-20/10, never pure `#ffffff`) with charcoal headings (`#121212` / `#181818` — gray-970/950) and a saturated brand pink (`--zds-color-semantic-brand-zigzag: #fa6ee3`) reserved for the moments that matter — the ZIGZAG wordmark itself, the primary "구매하기" CTA, the heart-filled "찜" affordance, and brand-event banners. This is the ZIGZAG pink that emerged from the 2021 rebrand: deliberately cooler than the previous "hot pink" so it harmonises with the editorial photography of 7,000+ fashion partner shops without competing with their own product imagery.

The custom design system is internally called **ZDS (ZIGZAG Design System)**, shipped as a token-driven Vanilla Extract (zero-runtime CSS-in-JS) package set since mid-2023 — replacing the team's earlier Emotion-based implementation specifically so every color, type, and corner-radius reference resolves to a CSS variable at build time. Tokens are namespaced in three tiers: `--zds-color-palette-*` (raw scale), `--zds-color-semantic-*` (role-bound), `--zds-color-component-*` (component-bound). The brand pink lives at `--zds-color-semantic-brand-zigzag` and a secondary lighter shade `--zds-color-palette-pink-400: #f55dd6` powers the interactive pink button system.

Typography is **Pretendard** — the OFL-licensed Korean-Latin hybrid sans that has become the de facto KR product typeface. The stack `Pretendard JP, Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", sans-serif` is loaded from a self-hosted CDN (`cf.res.s.zigzag.kr/fonts/Pretendard/*`) in four weights (400/500/600/700). Classnames follow a literal `HEAD_28 / BODY_16 / CAPTION_12` convention combined with weight modifiers `.BOLD / .SEMIBOLD / .MEDIUM / .REGULAR` — opinionated, predictable, and visible in DevTools without translation.

What truly distinguishes ZIGZAG is its commitment to **mobile-as-canvas at the desktop breakpoint**. The entire experience is locked to a `max-width: 600px` centred column even at 1920px — there is no responsive desktop reflow. The desktop "version" is the mobile version, centred. This is unusual restraint in Korean commerce (Coupang, Musinsa both render dramatically different desktop layouts) and signals a clear brand thesis: the trend-discovery loop happens on phones, so the design should not be optimised for any other surface.

**Key Characteristics:**
- ZDS brand pink (`#fa6ee3`) — the 2021-rebrand cool-toned pink, reserved for brand wordmark + primary CTAs + favorites
- Secondary interactive pink (`#f55dd6` — pink-400) for active states and `pink-450 #e356c6` for hover, `pink-550 #d14fb7` for pressed
- Pretendard (4 weights, self-hosted) with literal `HEAD_/BODY_/CAPTION_` size classnames
- Token system in three explicit tiers: palette / semantic / component
- 600px max-width mobile-web column — desktop = centred mobile (intentional brand statement)
- Surface palette is off-white (`#f5f6f6`, `#f9fafa`), never pure `#ffffff` — softens the grid against editorial product photography
- Corner-radius scale 0/2/4/6/8/12/16/20/full — pill (`9999px`) is licensed for chips and bottom-sheet handles only
- Coral-red (`#fb4333`) as an alert/accent partner color, distinct from the brand pink
- Brand colors of partners surfaced explicitly: `--zds-color-semantic-brand-kakao: #fee500` (Kakao chrome) and `--zds-color-semantic-brand-selected: #ff4c34` (cross-promo accent)

## 2. Color Palette & Roles

### Brand Anchor
- **ZIGZAG Pink** (`#fa6ee3`): `--zds-color-semantic-brand-zigzag`. The canonical brand pink — wordmark, brand-event banners, header chrome on brand surfaces.
- **Pink 400** (`#f55dd6`): `--zds-color-palette-pink-400`. Interactive primary on pink buttons, switches in "on" state, primary CTA where pink is the brand statement.
- **Pink 450 Hover** (`#e356c6`): `--zds-color-component-button-pink-hovered`. Hover state on pink primary buttons.
- **Pink 550 Pressed** (`#d14fb7`): `--zds-color-component-button-pink-pressed`. Pressed state on pink primary buttons.
- **Pink 50** (`#feeefa`): Lightest tint — pink-themed cards, badges, hovered ghost surfaces (`pink-400-opacity-8`).

### Pink Scale (full ramp)
- 50 (`#feeefa`), 100 (`#fddef6`), 150 (`#fccef2`), 200 (`#faaeea`), 300 (`#f88de2`), 400 (`#f55dd6`), 450 (`#e356c6`), 500 (`#dc53c0`), 550 (`#d14fb7`), 600 (`#b5449e`), 700 (`#8f357c`), 800 (`#69275b`), 900 (`#4f1d45`), 950 (`#30122a`)

### Neutral / Gray Scale (charcoal-leaning, slight cool undertone)
- **Gray 10** (`#f9fafa`): `--zds-color-semantic-background-on-surface` (light). Card surfaces.
- **Gray 20** (`#f5f6f6`): `--zds-color-semantic-background-base` (light). Page background — the canonical off-white.
- **Gray 30** (`#ecedee`): `--zds-color-semantic-border-primary` (light). Default borders, dividers.
- **Gray 50** (`#e2e5e6`): `--zds-color-semantic-fill-primary` (light). Filled surfaces, button ghost backgrounds.
- **Gray 80** (`#d0d4d6`): Divider strong, secondary borders.
- **Gray 100** (`#c6cbcd`): `--zds-color-semantic-border-active`.
- **Gray 200** (`#b3babd`): `--zds-color-semantic-text-disabled` (light).
- **Gray 250** (`#aab1b5`): Subtle text.
- **Gray 300** (`#a1a9ad`): `--zds-color-semantic-text-secondary` (light).
- **Gray 400** (`#878f91`): `--zds-color-semantic-text-tertiary`.
- **Gray 500** (`#707679`): Mid neutral.
- **Gray 550** (`#606567`): Secondary text on dark.
- **Gray 600** (`#505456`): Stronger secondary.
- **Gray 700** (`#393b3d`): Strong body on light surfaces.
- **Gray 800** (`#292b2b`): `--zds-color-semantic-text-primary` (light) — the body-text default.
- **Gray 900** (`#1f2020`): Strong heading.
- **Gray 950** (`#181818`): Background-surface in dark theme.
- **Gray 970** (`#121212`): `--zds-color-semantic-text-strong` (light) — display headings.
- **Gray 990** (`#050505`): Darkest base — dark-theme page background.

### Common
- **Common Black** (`#000`): Pure black, used sparingly for fixed dark chrome.
- **Common White** (`#fff`): Elevated surfaces, modals, button inverse text.

### Accent / Semantic Roles
- **Coral Red 400** (`#fb4333`): `--zds-color-semantic-accent-primary`. Sale tags, urgency badges, "🔥" promo markers. Distinct from the pink — pink is brand, coral is alert/sale.
- **Coral Red 50** (`#feecea`), **100** (`#fed9d6`), **300** (`#ff5d4f`), **500** (`#e13c2d`), **600** (`#c83528`), **700** (`#96281e`), **800** (`#701d16`).
- **Purple 400** (`#7463f2` / `--zds-color-palette-purple-400`): `--zds-color-semantic-accent-purple-primary`. AI-curation chips, "AI 추천" surfaces.
- **Purple 500** (`#8f82ff`): `--zds-color-semantic-brand-ai-primary` — secondary AI-feature anchor.
- **Brand Kakao** (`#fee500`): `--zds-color-semantic-brand-kakao`. Kakao-login chrome only — never decorative, never for ZIGZAG-owned CTAs.
- **Brand Selected** (`#ff4c34`): `--zds-color-semantic-brand-selected`. Cross-promo / co-brand campaign accent.
- **Brown 400** (`#b26b36`): Editorial accent (lookbook category chrome).
- **Blue 400** (`#216bff`): Link / info accent. Rare on commerce surfaces — pink is the primary interactive color.
- **Blue Gray 500** (`#3d4f6f`): Editorial chrome on premium-brand pages.

### State Roles
- **Success Green 500** (`#51aa5b` / `#5ac366`): Order-confirmed, review-submitted toasts.
- **Error Red** (`#e84747` / `#ff4d4d` / `#c31e18` / `#b21e18`): Payment-failed, validation errors.

### Surface & Borders (semantic tokens, light theme resolved)
- **Background base**: `#f5f6f6` (gray-20)
- **Background surface (cards)**: `#ffffff` (common-white)
- **Background on-surface (nested)**: `#f9fafa` (gray-10)
- **Border primary**: `#ecedee` (gray-30)
- **Border secondary**: `#d0d4d6` (gray-80)
- **Border active**: `#c6cbcd` (gray-100)
- **Text strong**: `#121212` (gray-970)
- **Text primary (body)**: `#292b2b` (gray-800)
- **Text secondary**: `#a1a9ad` (gray-300)
- **Text tertiary**: `#878f91` (gray-400)
- **Text disabled**: `#b3babd` (gray-200)

### Dark Theme Pairings
ZDS ships full dark-theme token mappings. Light/dark split is value-symmetric: `text-primary` resolves to `gray-800` in light, `gray-50` in dark; `background-base` resolves to `gray-20` in light, `gray-990` in dark. The brand pink does not shift across themes — `#fa6ee3` is constant.

## 3. Typography Rules

### Font Family
- **Primary**: `Pretendard JP, Pretendard` self-hosted from `cf.res.s.zigzag.kr/fonts/Pretendard/*` (woff2 + woff, subset + full).
- **Fallback stack**: `-apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", sans-serif`
- **Monospace**: `Menlo, Monaco, "Lucida Console", "Liberation Mono", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Courier New", monospace` (rare — code/receipt detail only)
- **Weights loaded**: 400 Regular / 500 Medium / 600 SemiBold / 700 Bold

### Hierarchy (ZDS literal class names)

| Class | Font size | Line-height (single) | Line-height (multi) | Use |
|---|---|---|---|---|
| `HEAD_28` | 28px | 34px | 38px | Display — hero promo headlines, brand-event titles |
| `HEAD_24` | 24px | 29px | 32px | Page H1 — category landing |
| `HEAD_22` | 22px | 26px | 30px | Section heading — "오늘의 추천" |
| `HEAD_20` | 20px | 24px | 28px | Card group title |
| `BODY_18` | 18px | 22px | 26px | Featured product name |
| `BODY_17` | 17px | 20px | 24px | Subheading body |
| `BODY_16` | 16px | 19px | 24px | Standard body, default reading text |
| `BODY_15` | 15px | 18px | 22px | Product card title (grid) |
| `BODY_14` | 14px | 17px | 20px | Dense body — list rows, secondary product meta |
| `BODY_13` | 13px | 16px | 18px | Tertiary meta — review count, ratings |
| `CAPTION_12` | 12px | 14px | 16px | Tag chip text, timestamps |
| `CAPTION_11` | 11px | 13px | 14px | Micro labels — "MD's PICK" badges |
| `CAPTION_10` | 10px | 12px | 14px | Tiny labels |
| `CAPTION_9` | 9px | 11px | 12px | Smallest — legal disclaimers |
| Mono | 12–14px | — | — | Order numbers, receipts |

### Weight Modifiers (combined as second class: e.g. `HEAD_22 BOLD`)
- `.BOLD` — 700 (price emphasis, hero CTAs)
- `.SEMIBOLD` — 600 (section titles, important labels)
- `.MEDIUM` — 500 (product names, default emphasized)
- `.REGULAR` — 400 (body, descriptions)

### Principles
- **Pretendard with Korean fallbacks is non-negotiable.** Hangul rendering parity with Apple SD Gothic Neo / Noto Sans KR is the explicit reason Pretendard is loaded — it's a *systemic* substitute for Apple's proprietary Korean face on non-Apple platforms.
- **Literal class names over abstract scales.** `BODY_15` beats `--font-size-body-md`. Designers and engineers read DevTools without a translation table.
- **Multi-line line-height is generous (140%+).** Korean letterforms need vertical air; single-line line-height tracks 1.15–1.21x font-size, multi-line tracks 1.33–1.50x.
- **No display tracking.** Letter-spacing is `normal` at every size — Korean does not benefit from negative tracking the way Latin display type does.
- **Price = `BOLD`, name = `MEDIUM`.** Product cards encode the visual hierarchy of commerce: the number is the strongest element, the name supports it.

## 4. Component Stylings

### Buttons

**Primary Pink (filled)**
- Background: `#f55dd6`
- Text: `#ffffff`
- Padding: 14px 20px
- Radius: 12px (`--zds-corner-radius-12`)
- Font: 16px Pretendard / weight 600 (SemiBold)
- Hover: `#e356c6` background (`--zds-color-component-button-pink-hovered`)
- Pressed: `#d14fb7` background (`--zds-color-component-button-pink-pressed`)
- Disabled: `rgba(245,93,214,0.3)` background, white text
- Use: Primary commerce CTA — "구매하기", "장바구니 담기", "쿠폰 받기"

**Primary Black (filled, default surface CTA)**
- Background: `#121212` (gray-970)
- Text: `#ffffff`
- Padding: 14px 20px
- Radius: 12px
- Font: 16px Pretendard / weight 600
- Hover: `#292b2b` background (gray-800)
- Pressed: `#393b3d` background (gray-700)
- Use: Default primary CTA on non-brand surfaces — "다음", "확인", "주문하기"

**Pink Ghost (white surface)**
- Background: `#ffffff`
- Text: `#f55dd6` (pink-400)
- Border: `1px solid #fccef2` (pink-150)
- Padding: 13px 19px
- Radius: 12px
- Font: 16px Pretendard / weight 600
- Hover: `rgba(245,93,214,0.08)` background (`--zds-color-component-button-pink-white-hovered`)
- Pressed: `rgba(245,93,214,0.12)` background (`--zds-color-component-button-pink-white-pressed`)
- Use: Secondary brand action — "찜한 상품 보기", "쿠폰함"

**Outlined Neutral**
- Background: `#ffffff`
- Text: `#292b2b` (gray-800)
- Border: `1px solid #ecedee` (gray-30)
- Padding: 13px 19px
- Radius: 12px
- Font: 16px Pretendard / weight 500
- Hover: `rgba(0,0,0,0.03)` background
- Pressed: `rgba(0,0,0,0.05)` background
- Use: Tertiary action — "취소", "더보기"

**Kakao Login (partner-mandated chrome)**
- Background: `#fee500` (brand-kakao)
- Text: `#000000` (black) at 85% opacity per Kakao guideline
- Padding: 14px 20px
- Radius: 12px
- Font: 16px Pretendard / weight 600
- Use: Kakao OAuth entry point only — never reused as a decorative yellow surface

### Pink Switch / Toggle

**Default**
- Track on: `#f55dd6` (pink-400)
- Track off: `#d0d4d6` (gray-80)
- Thumb: `#ffffff` 24px circle, `0px 2px 4px rgba(0,0,0,0.12)` shadow
- Radius: `9999px` (full pill)
- Disabled on: `rgba(245,93,214,0.3)` (`--zds-color-component-switch-on-disabled`)
- Use: Notification preferences, "찜한 알림 받기", filter inclusions

### Product Card (the workhorse component)

**Grid Cell (mobile, 2-up)**
- Background: `#ffffff`
- Border: none (separation is via spacing)
- Radius: 8px (thumbnail), 0 (card itself)
- Thumbnail aspect: 1:1 with rounded 8px corners
- Like button: 28–32px hit area, top-right `4–6px` inset
- Emblem/nudge max-width: `calc(100% - 36px)` (mobile) / `calc(100% - 42px)` (tablet) — preserves a no-overlap zone with the like button
- Pressed state: `rgba(0,0,0,0.03)` overlay (`--zds-color-component-product-card-pressed`)
- Title: 15px `BODY_15 MEDIUM` `#292b2b`, max 2 lines
- Brand: 13px `BODY_13 REGULAR` `#878f91`
- Price (sale): 16px `BODY_16 BOLD` `#fb4333` (coral-red-400)
- Price (regular): 16px `BODY_16 BOLD` `#121212`
- Original price (strike): 13px `BODY_13 REGULAR` `#a1a9ad` with line-through
- Discount rate: 14px `BODY_14 BOLD` `#fb4333` — always before the sale price
- Rating: 12px `CAPTION_12 SEMIBOLD` `#292b2b` + star glyph + review count in parens

### Chip / Filter Pill

**Selected (Pink)**
- Background: `rgba(245,93,214,0.08)` (`--zds-color-palette-pink-400-opacity-8`)
- Text: `#f55dd6` (pink-400)
- Border: `1px solid #fccef2` (pink-150)
- Padding: 6px 12px
- Radius: 9999px (full pill)
- Font: 13px `BODY_13 MEDIUM`
- Use: Filter pill active state — "지금 핫한 상품", "신상품만"

**Default**
- Background: `#ffffff`
- Text: `#393b3d` (gray-700)
- Border: `1px solid #ecedee` (gray-30)
- Padding: 6px 12px
- Radius: 9999px
- Font: 13px `BODY_13 MEDIUM`

**AI Recommendation**
- Background: `rgba(116,99,242,0.08)` (`--zds-color-palette-purple-400-opacity-8`)
- Text: `#7463f2` (purple-400)
- Border: `1px solid` purple-tint
- Padding: 6px 12px
- Radius: 9999px
- Font: 13px `BODY_13 SEMIBOLD`
- Use: AI-driven recommendation surfaces only — never decorative

### Search Input

**Header Search Bar**
- Background: `#f5f6f6` (gray-20)
- Border: none
- Radius: 12px
- Padding: 12px 14px
- Font: 15px `BODY_15 REGULAR` `#292b2b`
- Placeholder: `#878f91` (gray-400)
- Icon: leading 16px magnifier in `#707679` (gray-500)
- Focus: border `1px solid #292b2b` (gray-800) — no pink focus ring (would compete with brand)

### Sale / Urgency Badge

**Discount %**
- Background: `#fb4333` (coral-red-400)
- Text: `#ffffff`
- Padding: 2px 6px
- Radius: 4px
- Font: 11px `CAPTION_11 BOLD`
- Use: "-43%" on product thumbnails

**Time-limited**
- Background: `#121212`
- Text: `#ffffff`
- Padding: 4px 8px
- Radius: 4px
- Font: 11px `CAPTION_11 BOLD` with optional emoji glyph
- Use: "⏰ 24시간 한정", "오늘만"

**MD's PICK / Brand Curation**
- Background: `#ffffff`
- Text: `#121212`
- Border: `1px solid #121212`
- Padding: 2px 6px
- Radius: 4px
- Font: 10px `CAPTION_10 BOLD` uppercase
- Use: Editorial pick markers

### Bottom Sheet

**Default**
- Background: `#ffffff`
- Radius: `16px 16px 0 0` (top corners only)
- Drag handle: 36px wide, 4px tall, `#d0d4d6` (gray-80), 9999px radius, top-centered with 8px top padding
- Backdrop: `rgba(0,0,0,0.5)` (`--zds-color-semantic-background-dimmed`)
- Use: Filter sheet, size/option selector, login prompt, share sheet

### Navigation

**Header (sticky)**
- Background: `#ffffff`
- Border-bottom: `1px solid #ecedee` (gray-30) — appears on scroll
- Height: ~52px
- Logo: ZIGZAG wordmark in `#fa6ee3` (brand pink) left-aligned
- Right cluster: search icon → cart icon → my-page icon, each in `#121212` with hit area 44px
- Sticky with `position: -webkit-sticky` and safe-area top inset

**Bottom Tab Bar (mobile primary nav)**
- Background: `#ffffff`
- Border-top: `1px solid #ecedee`
- Items: 4–5 evenly spaced (홈 / 카테고리 / 찜 / 마이페이지 / 알림)
- Active: `#121212` icon + label, 11px `CAPTION_11 SEMIBOLD`
- Inactive: `#878f91` (gray-400) icon + label
- Height: 56px + safe-area-inset-bottom

### Container

**Mobile-web Outer Frame (the signature 600px lock)**
- max-width: `600px`
- margin: `0 auto`
- min-height: `100vh`
- background: `#ffffff`
- The page beyond 600px on desktop is a neutral `#f5f6f6` margin band. This is the layout's strongest opinion.

---

**Verified:** 2026-05-13 (omd:add-reference CREATE — full ZDS production CSS bundle inspected)
**Tier 1 sources:** `zigzag.kr/` (live HTML; Pretendard self-hosted woff2 stack + literal `HEAD_/BODY_/CAPTION_` typography classes); `zigzag.kr/.../_next/static/css/c41594a1ffd08aa6.css` (production CSS bundle, 184599 bytes — full ZDS palette tokens, semantic tokens, component tokens, corner-radius scale, typography scale, both light + dark theme pairings); `devblog.kakaostyle.com/ko/2024-12-13-1-rebuilding-frontend-design-system/` (ZDS architecture, Vanilla Extract zero-runtime, mid-2023 rebuild)
**Tier 2 sources:** getdesign.md/zigzag — no record. styles.refero.design — no record (`?q=zigzag` returns generic curated results, none ZIGZAG-specific).
**Tier 2 status:** unavailable on both surfaces. Tier 1 (canonical production CSS bundle) treated as authoritative per pipeline.
**Conflicts unresolved:** none. The only ambiguity is which pink is "the" ZIGZAG pink — `#fa6ee3` (`--zds-color-semantic-brand-zigzag`) is the brand-anchor pink (wordmark, brand events); `#f55dd6` (`--zds-color-palette-pink-400`) is the interactive primary on the button system. Both are documented as distinct roles; no conflict, just a two-pink architecture.
**Playwright session note:** Live `browser_evaluate` capture on `zigzag.kr` was contended by a shared playwright session running parallel agents (tabs kept switching to kakaopay / banksalad / remember / zigbang mid-evaluate). Substituted with direct curl + production CSS bundle inspection, which yielded canonical tokens directly — a stronger source than runtime computed style would have been.

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Common values: 4px, 6px, 8px, 10px, 12px, 14px, 16px, 20px, 24px, 32px, 40px
- Horizontal page padding: 16px (mobile primary)
- Card-grid gutter: 8px (2-up product grid)
- Section vertical rhythm: 24px between content blocks, 40px between major sections

### Grid & Container
- **Design baseline: 375px mobile width**
- **Hard ceiling: 600px** — every page is centred to `max-width: 600px` regardless of viewport
- Beyond 600px: gray-20 (`#f5f6f6`) margin band, no responsive reflow
- Product grid: 2 columns on mobile (8px gutter), occasionally 3 columns on category landings
- Editorial / lookbook: full-bleed 600px hero images, 16:20 portrait aspect on featured spreads

### Whitespace Philosophy
- **Breathing room for products, not for chrome.** Product cards get generous internal padding (12–14px). UI chrome (header height 52px, tab bar 56px) is tight by phone-app standards.
- **Photo-first, text-second.** Editorial sections lead with a full-bleed image, copy follows below — never overlaid. The product photography from 7,000+ partner shops is the visual asset; the system stays out of its way.
- **Progressive density.** Discovery surfaces (홈 / 카테고리 landing) are spacious; detail / option-select / cart screens become denser. Commitment narrows the canvas.

### Border Radius Scale (`--zds-corner-radius-*`)
- 0 (`#0`): Edge-to-edge images, full-width banners
- 2 (`2px`): Tiny micro-elements
- 4 (`4px`): Badges, sale tags, inline pills
- 6 (`6px`): Form switches in compact mode
- 8 (`8px`): Product thumbnails, small cards
- 12 (`12px`): Buttons, inputs, standard cards — the workhorse
- 16 (`16px`): Featured cards, bottom-sheet top corners (`16px 16px 0 0`)
- 20 (`20px`): Large dialog corners
- full (`9999px`): Chips, switch tracks, drag handles, circular icon buttons

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline elements |
| Subtle (Level 1) | `0px 1px 2px rgba(0,0,0,0.05)` | List rows on hover, ambient lift |
| Standard (Level 2) | `0px 2px 8px rgba(0,0,0,0.08)` | Floating filter chip, sticky CTA |
| Elevated (Level 3) | `0px 4px 16px rgba(0,0,0,0.12)` | Bottom sheets, popovers, dropdown menus |
| Modal (Level 4) | `0px 8px 32px rgba(0,0,0,0.16)` | Centred dialogs, full takeover modals |
| Backdrop dim | `rgba(0,0,0,0.5)` (`--zds-color-semantic-background-dimmed`) | Behind every modal / bottom-sheet |

**Shadow Philosophy.** Shadows are pure black with low opacity, single-layer. Unlike Stripe's blue-tinted multi-layer shadow system, ZIGZAG's shadows are deliberately undecorated — the visual interest comes from the product photography, not from elevation chrome. The brand pink never appears in shadows.

### Blur Effects
- Sticky headers gain a `backdrop-filter: blur(12px)` on scroll, with the header background shifting to `rgba(255,255,255,0.9)` to let scrolled content tint through subtly.

## 7. Do's and Don'ts

### Do
- Use `#fa6ee3` (brand-zigzag) only for the wordmark + brand-event chrome; reserve `#f55dd6` (pink-400) for interactive primary buttons
- Use Pretendard with the full Korean fallback stack — Hangul rendering parity is the point
- Use literal `HEAD_22 SEMIBOLD` style classes — they map 1:1 to ZDS tokens
- Use `#fb4333` (coral-red-400) for sale prices, discount rates, urgency markers — never the pink
- Use the 600px max-width container even on desktop — it's the brand's mobile-as-canvas commitment
- Use `#f5f6f6` (gray-20) as page background instead of pure white — softer against product photography
- Use 12px radius for buttons, 8px for product thumbnails, 16px for bottom-sheet top corners
- Display price in BOLD and product name in MEDIUM — the number is the visual anchor
- Surface `#fee500` (kakao yellow) only for the Kakao login button — never decoratively

### Don't
- Don't confuse `#fa6ee3` (brand pink, wordmark) with `#f55dd6` (interactive pink, buttons) — they have different roles
- Don't use pink and coral-red together as accents on the same surface — they read as similar saturation and create visual noise
- Don't use pure `#ffffff` as the page background — gray-20 (`#f5f6f6`) is the canonical surface
- Don't use blue (`#216bff`) as a primary CTA — pink is the interactive anchor
- Don't responsively reflow desktop layouts — center the mobile layout at 600px max-width
- Don't overlay text on product photography — ZIGZAG's editorial respects photo as photo
- Don't use the kakao yellow (`#fee500`) for decoration or non-Kakao surfaces
- Don't use radius > 16px on commerce surfaces (except pill chips) — large rounding reads as consumer-app, not curated commerce
- Don't apply negative letter-spacing on Korean type — Hangul does not benefit from display tracking
- Don't use brand pink in shadows or as decorative ornament — pink earns its presence by being interactive or brand-anchoring

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile (Primary) | <600px | Full design fidelity, 375px baseline, 16px h-padding |
| Mobile Large | 600–768px | Same as mobile, content remains within 600px column |
| Desktop | >768px | Mobile layout centred at `max-width: 600px`, gray-20 margin band on either side |

**This is the layout's most opinionated decision.** ZIGZAG does not redesign for desktop. The experience is mobile-as-canvas at every breakpoint — desktop users see the mobile layout in a centred column.

### Touch Targets
- Primary buttons: 48–56px tall (14px vertical padding + 16px font line-box)
- Like / favorite buttons: 28–32px visible icon with 16px hit-area expansion
- Tab bar items: 56px tall (full bar height)
- Header icon clusters: 44px hit area minimum

### Collapsing Strategy
- No collapsing — desktop is mobile, full stop
- Bottom sheet → bottom sheet at all sizes (no transition to side-panel modal)
- Cart, login, filter — all bottom-sheet-first

### Image Behavior
- Product thumbnails maintain 1:1 aspect at all sizes, 8px radius
- Hero / brand-event images use 16:20 portrait or 2:1 letterbox depending on campaign
- Lazy-loaded with `cf.res.s.zigzag.kr` CDN; placeholder is gray-20 block
- Editorial photography is never cropped under text overlays — copy lives below the image

## 9. Agent Prompt Guide

### Quick Color Reference
- Brand pink (wordmark): ZIGZAG Pink (`#fa6ee3`)
- Interactive pink (buttons): Pink 400 (`#f55dd6`)
- Pink hover: Pink 450 (`#e356c6`)
- Pink pressed: Pink 550 (`#d14fb7`)
- Background: Gray 20 (`#f5f6f6`) — not pure white
- Surface (cards): White (`#ffffff`)
- Heading: Gray 970 (`#121212`)
- Body: Gray 800 (`#292b2b`)
- Secondary text: Gray 300 (`#a1a9ad`)
- Tertiary text: Gray 400 (`#878f91`)
- Border: Gray 30 (`#ecedee`)
- Sale / urgency: Coral Red 400 (`#fb4333`)
- AI / curation: Purple 400 (`#7463f2`)
- Kakao login only: Kakao Yellow (`#fee500`)

### Example Component Prompts
- "Create a product card: white bg, 8px-radius square thumbnail, 12px vertical padding. Brand 13px Pretendard `BODY_13 REGULAR` `#878f91`. Title 15px `BODY_15 MEDIUM` `#292b2b` max 2 lines. Discount rate 14px `BODY_14 BOLD` `#fb4333` immediately before sale price 16px `BODY_16 BOLD` `#fb4333`. Original price 13px `#a1a9ad` strikethrough."
- "Build a primary pink CTA: `#f55dd6` bg, white text, 16px Pretendard SemiBold, 14px 20px padding, 12px radius. Hover `#e356c6`. Pressed `#d14fb7`. Min-height 48px, full-width on mobile."
- "Design a filter chip (selected): `rgba(245,93,214,0.08)` bg, `#f55dd6` text, `1px solid #fccef2` border, 6px 12px padding, full-pill radius, 13px Pretendard Medium."
- "Create a bottom sheet: white bg, `16px 16px 0 0` top radius. 36px×4px gray-80 drag handle, top-centred with 8px inset. Backdrop `rgba(0,0,0,0.5)`. Title 22px `HEAD_22 SEMIBOLD` `#121212`, body 16px `BODY_16 REGULAR` `#292b2b`."
- "Design the page container: `max-width: 600px`, `margin: 0 auto`, `min-height: 100vh`, white bg. Beyond 600px on desktop show gray-20 (`#f5f6f6`) margin. Do not reflow to multi-column."

### Iteration Guide
1. Always use Pretendard with the Korean fallback chain (Apple SD Gothic Neo → Noto Sans KR → Malgun Gothic) — Hangul rendering is the point
2. Brand pink `#fa6ee3` ≠ interactive pink `#f55dd6` — keep them in their lanes
3. Sale prices and urgency are coral-red (`#fb4333`), never pink — pink is brand/interaction, coral is alert
4. Background is `#f5f6f6` (gray-20), not pure white — preserves separation from product photography
5. Corner radius: 8px thumbnails, 12px buttons/cards, 16px top corners of bottom sheets, full-pill for chips
6. Shadows are pure black low-opacity, single-layer — no colored shadows, no multi-layer stacks
7. 600px max-width is non-negotiable — desktop is centred mobile, not a re-layout
8. Price BOLD, name MEDIUM — the number is the visual anchor on every product card
9. Pretendard weight scale: 400 / 500 / 600 / 700 — no 300 or 800 (not loaded)

---

## 10. Voice & Tone

ZIGZAG speaks like a stylish friend who already knows what's trending — energetic, fashion-fluent, decisively Korean female-vernacular, never apologetic about taste. The 2021 rebrand articulated the voice as **Memorable, Effortless, Inspiring, Contextual**. Tone is younger and more playful than musinsa's editorial cool or coupang's logistics-flat utility — ZIGZAG is the playground where trying things is the point. Korean is the primary voice; English appears only as a secondary translation for the global app surface, never as parity.

| Context | Tone |
|---|---|
| Hero campaign | Discovery-framed verb forms (`발견하세요`, `시작해보세요`). Confident, never hedged. |
| Product card brand line | Plain brand-name, no marketing copy — let the photography work |
| Promo banners | Short urgent imperatives + emoji glyph (`🔥 24시간만`, `⏰ 마감 임박`) — emoji is licensed on commerce surfaces, unlike Toss |
| Filter / category labels | Specific noun phrases (`오피스룩`, `데일리룩`, `홈웨어`) — never euphemisms |
| Search empty state | One-line explain + suggest action — never `결과가 없습니다` |
| Error (payment) | Specific code + plain-Korean guidance + one retry CTA |
| Success (order placed) | Celebrate without overpromising — `주문이 완료되었어요`, not `축하합니다 🎉🎉🎉` |
| Onboarding | Second-person, single idea per screen, casual `해요` register |
| Legal / disclosure | Formal `합니다` endings — the only register shift |

**Forbidden phrases.** `불편을 드려 죄송합니다`, generic `Oops`, ad-copy clichés (`혁신적인`, `세상에 없던`), aggressive marketing exclamations on functional surfaces (`!!!`), price approximations (`약 ~원` on commerce). Loyalty programs and badge copy never use English-only phrases — Korean-first or bilingual.

**Voice samples (verified live on `brunch.co.kr/@zigzag/73`, brand-owned 2022 publication):**
- *"나만의 스타일을 발견할 수 있는 플레이그라운드"* — the post-2022 mission statement
- *"쇼핑을 넘어, 나의 라이프 스타일을 찾는 곳"* — the lifestyle expansion framing
- *"다양함을 존중하는"* — diversity-respecting (used as a rebrand pillar)
- *"나답게"* — be true to yourself (the verb-form imperative)
- Rebrand pillars: *Memorable, Effortless, Inspiring, Contextual*

<!-- illustrative: empty-cart, payment-failed, order-placed below are reasoned defaults, not verified live app strings. A logged-in audit pass should replace. -->
- Empty cart: *"아직 담은 상품이 없어요. 마음에 드는 스타일을 찾아볼까요?"* + single pink CTA *"홈으로 가기"*
- Payment failed: *"결제가 완료되지 않았어요. 카드 정보를 확인하고 다시 시도해주세요."* (no `죄송합니다`)
- Order placed: *"주문이 완료되었어요. 곧 출고 알림을 보내드릴게요."*

## 11. Brand Narrative

ZIGZAG is the consumer brand of **Croquis.com (크로키닷컴)**, founded in **February 2012 by Seo Jung-hoon (서정훈)** — a 1977-born former dev-team lead at Digital Aria. Croquis launched the ZIGZAG app in **June 2015** as a shopping-mall *bookmark* app: not a marketplace, not a storefront, but an aggregator that crawled 300 Dongdaemun-based women's fashion online malls in three days of Excel work and bundled them into one phone screen. Within two months top malls were requesting more exposure ([apparelnews](https://m.apparelnews.co.kr/news/news_view/?idx=186346), [Financial News](https://www.fnnews.com/news/201902241808512757)).

The founding rejection was of the assumption that fashion ecommerce should *be* a mall. Korean indie women's fashion in the mid-2010s was a long-tail of thousands of small shops, each with passionate audiences and zero discoverability beyond Naver bookmarks. ZIGZAG's bet was that the *bookmark* — the act of saving and returning — was the real product. The catchphrase *"니 맘대로 사세요"* (Live as you like / Buy as you like, popularised in TV campaigns starring 윤여정) made the framing explicit: the platform doesn't curate for you; it surfaces options so you can choose with confidence.

By 2020 ZIGZAG was a top-grossing women's fashion app in Korea ([byline.network](https://byline.network/2020/05/04-26/)). On **April 15, 2021**, Kakao Corporation acquired Croquis at an enterprise value estimated near 1 trillion KRW, and on **July 1, 2021** completed the merger that formed **KakaoStyle (카카오스타일)** — with Seo Jung-hoon retained as CEO and the ZIGZAG service name preserved ([asiae.co.kr](https://cm.asiae.co.kr/en/article/2021070110025515550)). KakaoStyle now operates as a 50.9%-Kakao-owned affiliate and crossed **1 trillion KRW combined transaction volume** across ZIGZAG and Fashion-by-Kakao by 2022.

The **2021 rebrand** ([brunch.co.kr/@zigzag/73](https://brunch.co.kr/@zigzag/73), [designcompass.org](https://designcompass.org/en/2022/08/25/zigzag-rebranding/), [heypop.kr](https://heypop.kr/n/38932/)) cooled the brand pink — the previous "hot pink" caused eye fatigue and refused to pair with anything but white or black. The new ZIGZAG pink (`#fa6ee3`) tones the saturation down so it harmonises with the editorial photography of 7,000+ partner shops, and the wordmark moved to a taller typeface. The brand mission was reframed from *"35 million women chose ZIGZAG"* (transactional / demographic) to *"나만의 스타일을 발견할 수 있는 플레이그라운드"* — a *playground for discovering your own style*. The rebrand pillars (**Memorable, Effortless, Inspiring, Contextual**) made the editorial intent explicit.

**ZDS (ZIGZAG Design System)** is the engineering substrate that carries this brand promise into pixels. Per the December 2024 [KakaoStyle frontend devblog](https://devblog.kakaostyle.com/ko/2024-12-13-1-rebuilding-frontend-design-system/), ZDS was rebuilt starting mid-2023: Emotion (runtime CSS-in-JS) was replaced with **Vanilla Extract** (zero-runtime, build-time CSS variables). Tokens are split into Core / Components / Icons / Themes / Tokens packages. Compound-component patterns expose components as `<ProductCard.Thumbnail>`, `<ProductCard.Metadata>`, `<ProductCard.MetadataItem>` — the markup *is* the design system, not a layer above it.

What ZIGZAG refuses: the institutional grey-blue palette of legacy ecommerce (Auction / Gmarket / 11번가), the masculine-coded photographic minimalism of musinsa, the logistics-grid utility of coupang. ZIGZAG occupies a specific cultural location — **young Korean women's fashion-as-discovery** — and refuses to abstract it into "fashion-tech for everyone".

The parent KakaoStyle articulates its operating principles in six verbs ([kakaostyle.com](https://kakaostyle.com)): *내가 사용자가 됩니다 / '왜'에서 시작합니다 / 빠르게 시도합니다 / 팀을 위해 먼저 합니다 / 스스로 일합니다 / 투명하고 솔직하게 소통합니다*. The design surface reflects them: small, fast, opinionated, repeatedly tested against the user-self.

## 12. Principles

1. **Discovery > Search.** The product is a *playground*, not a query interface. Filter pills, AI-curated chips, editorial sections, hot-now nudges all push the user toward stumbling upon something rather than searching for something. *UI implication:* default screens lead with curation modules; search bar is present but secondary in the visual hierarchy.
2. **Photography is the page.** With 7,000+ partner shops, ZIGZAG's most valuable visual asset is the product photography it doesn't shoot. The system stays out of its way — no text overlays, no decorative shadow under thumbnails, no brand chrome competing with editorial. *UI implication:* product cards have zero shadow at rest; brand pink never appears on product imagery surfaces.
3. **Mobile is the canvas, always.** The 600px max-width lock on desktop is a brand statement, not a budget constraint. *UI implication:* desktop layouts are mobile layouts centred. Never reflow to multi-column on `>1024px`.
4. **Two pinks, one role each.** `#fa6ee3` is the brand anchor (wordmark, brand-event banners); `#f55dd6` is the interactive primary (button fill, switch on-state). They never substitute for each other. *UI implication:* a CTA never uses `#fa6ee3`; the wordmark never uses `#f55dd6`.
5. **Price BOLD, name MEDIUM.** The number is the visual anchor on every commerce card. *UI implication:* `BODY_16 BOLD` for price, `BODY_15 MEDIUM` for product name — flipping the weights would feel like a magazine, not a marketplace.
6. **Coral is alert, pink is brand.** Sale prices, discount rates, urgency badges live in `#fb4333` (coral-red-400), not in pink. *UI implication:* a pink "-43%" badge would dilute brand pink into a sale color; coral keeps the lanes separate.
7. **Off-white over pure white.** Page background is `#f5f6f6` (gray-20). Pure white is reserved for elevated surfaces (cards, sheets, modals). *UI implication:* a card on a card creates a subtle elevation cue without needing a shadow.
8. **Korean type rules Korean type.** Pretendard with the full KR fallback stack, no negative letter-spacing on display sizes, generous multi-line line-height (140%+), four weights only (400/500/600/700). *UI implication:* never apply Latin display tracking to Hangul.
9. **The token names tell the truth.** ZDS exposes `--zds-color-semantic-brand-zigzag`, not `--zds-color-pink-primary`. The semantic layer carries intent. *UI implication:* component implementations reference semantic tokens, not palette tokens — if the brand pink ever moves, only the resolution changes.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable ZIGZAG user segments (Korean women 18–34, fashion-discovery shoppers, trend-fluent mobile-natives), not individual people.*

**소연 (Soyeon), 24, Seoul.** University senior, marketing major. Opens ZIGZAG 4–6 times a day — commute, between classes, lying in bed at 11pm. Doesn't search; scrolls categories and saves to 찜 obsessively. Has 200+ saved items she'll never buy and 8 she absolutely will. Treats the pink heart icon like a feed-curation tool, not a wishlist. Notices instantly when a brand's product photography is iPhone-shot vs studio — and trusts the studio-shot more.

**예린 (Yerin), 29, Daegu.** Office worker, marketing agency. Buys ZIGZAG 2–3 times a month, average basket ₩80k. Lives in the discount-rate column — `-43%` reads to her before the product photo. Filter-pill heavy user: 신상품만 + 무료배송 + 4.5★ 이상. Has a love-hate relationship with the recommendation chips — they're either eerily on-target or wildly off, never in between.

**민아 (Mina), 32, Bundang.** Mother of one, returned to work part-time. ZIGZAG is her one-handed phone shopping app while a 3-year-old naps. Speed of the cart → checkout path matters more than browsing. Distrusts brands she's never heard of unless the review count is >2,000. Reads Korean only — English in product copy is a friction signal.

**지유 (Jiyu), 19, Busan.** High-school senior, allowance budget. Doesn't buy on ZIGZAG; uses it as a *trend reference* — sees what's selling, then sources cheaper versions on Ali / Temu / 동대문 directly. Knows ZIGZAG pink as a cultural color, not just a UI color. If a friend's outfit looks like a ZIGZAG screenshot, that's a compliment.

## 14. States

| State | Treatment |
|---|---|
| **Empty (cart, no items)** | White surface, illustrated pink shopping bag glyph 80×80, single line in `BODY_16 MEDIUM` `#292b2b`: *"아직 담은 상품이 없어요"*. Single CTA: pink-ghost button "둘러보기". Never `데이터가 없습니다`. |
| **Empty (찜 list)** | White surface, pink heart-outline glyph 80×80, *"마음에 드는 상품에 ♥ 를 눌러 모아보세요"* in `BODY_15 REGULAR` `#878f91`. CTA "추천 상품 보기" pink-ghost. |
| **Empty (search results)** | Single-line `BODY_15 REGULAR` `#878f91`: *"검색 결과가 없어요"*, with sub-line *"다른 키워드로 다시 찾아볼까요?"*. Filter summary visible above so user can broaden scope. |
| **Loading (product grid first paint)** | Skeleton blocks at product-card dimensions in gray-30 (`#ecedee`) with 1.2s shimmer. Each skeleton matches the final 1:1 thumbnail + 2-line title block + price block — same shape, no value. |
| **Loading (refresh, in-place)** | Pull-down spinner in brand pink (`#fa6ee3`) at top of scroll container. Previous content stays visible. Never block the scroll. |
| **Loading (in pressed button)** | Button text is replaced by a 3-dot white animation. Button width does not change. Visually committed; user cannot double-tap submit. |
| **Error (inline field validation)** | `#fb4333` (coral-red-400) 1px border on the input, error text below in coral 13px `BODY_13 REGULAR`. One actionable sentence — *"전화번호 형식이 올바르지 않아요"*, never *"올바른 입력이 아닙니다"*. |
| **Error (payment declined)** | Dedicated screen, not a toast. Surfaces the PG decline reason verbatim plus plain-Korean guidance for the customer. Two CTAs: "다른 카드로 시도" (pink-primary) + "취소" (outlined-neutral). |
| **Error (network)** | Toast at bottom, `#121212` background, white text, 3s auto-dismiss: *"네트워크 연결을 확인해주세요"*. No icon. No `Oops`. |
| **Success (added to cart)** | Inline toast 3s with `#51aa5b` (success green) glyph + text: *"장바구니에 담았어요"*. Tappable to navigate to cart. |
| **Success (order placed)** | Dedicated confirmation screen — not a toast. Pink confetti or simple checkmark animation, then order summary card. Single CTA "주문 상세 보기". The commitment is too important to be a 3s overlay. |
| **Skeleton (any list)** | Gray-30 blocks at exact final dimensions, 1.2s linear shimmer. Card thumbnails always at 1:1 aspect to avoid layout shift on resolution. |
| **Disabled** | Opacity reduced on the surface (`opacity: 0.3` per `--zds-color-component-switch-on-disabled`). Pink-on-disabled becomes `rgba(245,93,214,0.3)` — faded pink, not switched to gray, to preserve brand read. |

## 15. Motion & Easing

**Durations:**

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle flips, checkbox commits, focus rings |
| `motion-fast` | 150ms | Hover, press overlays, small reveals |
| `motion-standard` | 250ms | Default — bottom-sheet open, card expand, tab switch |
| `motion-slow` | 400ms | Emphasized — order-success animation, onboarding step advance |
| `motion-page` | 320ms | Full-screen route transitions |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Arriving — sheets, toasts, screen pushes |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals — sheet close, toast leave |
| `ease-standard` | `cubic-bezier(0.4, 0.0, 0.2, 1)` | Two-way — tab content, accordions |
| `ease-bounce` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Reserved. Only for the 찜 (favorite) heart-fill animation and order-placed checkmark. The brand voice is playful enough to license bounce in two narrow places. |

**Signature motions.**

1. **찜 heart tap.** The favorite button uses `motion-fast / ease-bounce`: heart outline → filled pink (`#fa6ee3`) with a 1.15× overshoot scale, settling back to 1.0× over 250ms. This is one of the two places spring is licensed. Removing the favorite uses `ease-standard`, not bounce — *adding* something to your collection earns the delight; *removing* doesn't.
2. **Bottom-sheet presentation.** Sheets rise from `y+40px` with `motion-standard / ease-enter`, synchronized with a backdrop fade from `rgba(0,0,0,0)` to `rgba(0,0,0,0.5)`. Dismissal uses `motion-fast / ease-exit` — leaving feels lighter than entering.
3. **Product card press feedback.** On tap-down, the card overlays `rgba(0,0,0,0.03)` (`--zds-color-component-product-card-pressed`) over `motion-fast / ease-standard` and reverses on tap-release. No scale transform — the photography is the visual subject, scaling it would feel cheap.
4. **Order-placed checkmark.** Drawn over `motion-slow / ease-bounce`, the second licensed bounce. Commit moments deserve the delight; routine commerce does not.
5. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant`. `ease-bounce` is suppressed entirely — the heart-fill becomes a crossfade, the order-placed checkmark draws linearly. The app stays fully functional; motion is never load-bearing for comprehension.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Direct verification (2026-05-13):
- https://zigzag.kr/ (Tier 1 live HTML + static asset) — confirms Pretendard self-hosted stack, literal HEAD_/BODY_/CAPTION_ typography classes, 600px max-width centred container.
- https://www.zigzag.kr/.../_next/static/css/c41594a1ffd08aa6.css — confirms full ZDS palette, semantic tokens including --zds-color-semantic-brand-zigzag: #fa6ee3, --zds-color-semantic-brand-kakao: #fee500, --zds-color-semantic-brand-selected: #ff4c34, pink-{50..950} scale, gray scale, corner-radius scale, light+dark theme pairings.
- https://devblog.kakaostyle.com/ko/2024-12-13-1-rebuilding-frontend-design-system/ — confirms ZDS Vanilla Extract zero-runtime rearchitecture, mid-2023 project start, compound-component pattern (<ProductCard.Thumbnail> et al.), package split (Core/Components/Icons/Themes/Tokens).
- https://brunch.co.kr/@zigzag/73 (ZIGZAG-owned brunch series) — confirms the post-2022 mission "나만의 스타일을 발견할 수 있는 플레이그라운드", the lifestyle-expansion framing "쇼핑을 넘어, 나의 라이프 스타일을 찾는 곳", the rebrand pillars Memorable / Effortless / Inspiring / Contextual, the diversity-respecting "다양함을 존중하는" and "나답게" voice.
- https://kakaostyle.com/ — confirms KakaoStyle parent operating principles in six verbs and the corporate tagline "당신만의 라이프스타일을 카카오스타일에서 발견하세요".
- https://designcompass.org/en/2022/08/25/zigzag-rebranding/ + https://heypop.kr/n/38932/ — confirm 2021 rebrand rationale (cool-toned pink replacing eye-fatiguing hot pink, taller wordmark typeface, tagline shift from "35 million women" to brand-fashion-life).
- https://m.apparelnews.co.kr/news/news_view/?idx=186346 — confirms Seo Jung-hoon's "connector not commerce" framing.
- https://www.fnnews.com/news/201902241808512757 — confirms Croquis 2012-02 founding, Seo Jung-hoon profile, 2015-06 ZIGZAG launch, 3-day Excel crawl + 300-mall seed.
- https://cm.asiae.co.kr/en/article/2021070110025515550 — confirms 2021-04-15 Kakao acquisition, 2021-07-01 KakaoStyle merger completion, Seo retained as CEO, ZIGZAG name preserved.

Not independently re-verified (used as widely documented context):
- 1 trillion KRW transaction volume by 2022 across ZIGZAG + Fashion-by-Kakao (from grokipedia / multiple press; cited but not primary).
- The "니 맘대로 사세요" / 윤여정 ad campaign provenance (KR pop-culture general knowledge; mentioned in designcompass + heypop articles as historical context).

Personas (§13) are fictional archetypes informed by publicly observable ZIGZAG user segments (Korean women 18–34, mobile-native fashion-discovery shoppers). Names are illustrative; any resemblance to real individuals is unintended.

Interpretive claims:
- "Two pinks, one role each" (§12.4) is the author's editorial reading of why ZDS exposes both --zds-color-semantic-brand-zigzag (#fa6ee3) and --zds-color-palette-pink-400 (#f55dd6) as separate tokens with distinct component-token wiring. The naming is documented; the role-assignment is editorial.
- The "mobile-as-canvas at desktop breakpoint" claim (§12.3) is the author's reading of the 600px max-width container observed in the production HTML; ZIGZAG has not, to this author's knowledge, published an explicit statement about it. The behavior is verified; the brand-thesis framing is editorial.
- Illustrative state copy in §14 is reasoned default behavior, not verified logged-in app strings. Marked as illustrative.

Distinction from coupang / musinsa (per task prompt):
- Coupang is logistics-density commerce — gray-blue palette, dense lists, no curation pinks. Optimised for "I know what I want, ship it tomorrow".
- Musinsa is editorial menswear-leaning fashion — black-and-white minimalism, magazine-style spreads, restrained color. Optimised for "show me the look".
- ZIGZAG is fashion-as-playground for KR women — branded pink, photography-first, discovery-led, mobile-locked. Optimised for "let me stumble onto something I love".
-->
