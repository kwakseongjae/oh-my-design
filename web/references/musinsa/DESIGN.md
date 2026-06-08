---
id: musinsa
name: Musinsa
country: KR
category: ecommerce
homepage: "https://www.musinsa.com"
primary_color: "#000000"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=musinsa.com&sz=128"
verified: "2026-05-15"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#000000"
    primary-hover: "#222222"
    brand: "#000000"
    canvas: "#ffffff"
    surface: "#f5f5f5"
    foreground: "#333333"
    muted: "#999999"
    on-primary: "#ffffff"
    hairline: "#eeeeee"
    border-mid: "#dddddd"
    error: "#ff003b"
    accent-star: "#ffb900"
  typography:
    family: { sans: "Pretendard", mono: "Pretendard" }
    display:      { size: 28, weight: 700, lineHeight: 1.29, tracking: -0.4, use: "Editorial banner / event title" }
    heading-lg:   { size: 22, weight: 700, lineHeight: 1.36, tracking: -0.4, use: "Category page title" }
    heading:      { size: 18, weight: 700, lineHeight: 1.44, tracking: -0.4, use: "Section header" }
    title:        { size: 15, weight: 700, lineHeight: 1.47, tracking: -0.3, use: "Product detail page title" }
    body-lg:      { size: 14, weight: 400, lineHeight: 1.43, tracking: -0.3, use: "Standard product card title" }
    body:         { size: 13, weight: 400, lineHeight: 1.38, tracking: -0.3, use: "Default body, listings text" }
    body-bold:    { size: 13, weight: 700, lineHeight: 1.38, tracking: -0.3, use: "Brand name above product title" }
    caption:      { size: 12, weight: 400, lineHeight: 1.33, tracking: -0.3, use: "Metadata, review counts" }
    micro:        { size: 11, weight: 500, lineHeight: 1.27, tracking: -0.2, use: "Badge text, fine print" }
  spacing: [2, 4, 8, 12, 16, 20, 24, 32, 40, 56, 80]
  rounded: { sm: 2, md: 4, lg: 4, full: 9999 }
  shadow:
    soft: "0px 2px 8px rgba(0,0,0,0.06)"
    floating: "0px 4px 16px rgba(0,0,0,0.10)"
  components_harvested: true
  components:
    button-primary: { type: button, bg: "#000000", fg: "#ffffff", radius: "4px", padding: "14px 20px", font: "15px / 700", states: "hover #222222, pressed #333333, disabled #cccccc", use: "Primary CTA" }
    button-outline: { type: button, bg: "#ffffff", fg: "#000000", border: "1px solid #000000", radius: "4px", padding: "14px 20px", font: "15px / 700", states: "hover #f5f5f5", use: "Secondary CTA" }
    button-neutral: { type: button, bg: "#f5f5f5", fg: "#222222", border: "1px solid #eeeeee", radius: "4px", padding: "12px 16px", font: "14px / 500", states: "hover #eeeeee", use: "Tertiary actions" }
    button-sale: { type: button, bg: "#ff003b", fg: "#ffffff", radius: "4px", padding: "12px 18px", font: "14px / 700", use: "Time-limited sale CTA, scarce" }
    input: { type: input, bg: "#ffffff", fg: "#222222", border: "1px solid #dddddd", radius: "4px", padding: "12px 14px", font: "14px / 400", focus: "1px solid #000000", use: "Default text input" }
    input-search: { type: input, bg: "#f5f5f5", radius: "4px", padding: "12px 16px 12px 40px", font: "14px / 400", focus: "bg #ffffff, 1px solid #000000", use: "Header search bar" }
    card-product: { type: card, bg: "#ffffff", radius: "0px", shadow: "none", use: "Default product listing card, image edge is card edge" }
    card-brand: { type: card, bg: "#fafafa", border: "1px solid #eeeeee", radius: "4px", padding: "16px", use: "Brand-of-the-day entry" }
    badge-sale: { type: badge, bg: "transparent", fg: "#ff003b", font: "13px / 700", radius: "0px", use: "Inline sale percentage on product cards" }
    badge-exclusive: { type: badge, bg: "#000000", fg: "#ffffff", font: "11px / 700", padding: "3px 6px", radius: "2px", use: "무신사 단독 / 선발매 exclusive flags" }
    badge-outline: { type: badge, bg: "#ffffff", fg: "#000000", border: "1px solid #000000", font: "11px / 700", padding: "3px 6px", radius: "2px", use: "NEW, 무료배송 minor flags" }
    chip: { type: badge, bg: "#ffffff", fg: "#222222", border: "1px solid #dddddd", font: "13px / 500", padding: "8px 14px", radius: "999px", active: "bg #000000, fg #ffffff, 13px / 700", use: "Category / size / color filter pills" }
    tab: { type: tab, font: "14px / 700", active: "2px black bottom border, fg #000000", use: "Category nav, active item underline" }
    toast: { type: toast, bg: "#000000", fg: "#ffffff", radius: "4px", font: "14px / 500", use: "Error / add-to-cart snackbar, 3s auto-dismiss" }
---

# Design System Inspiration of Musinsa (무신사)

## 1. Visual Theme & Atmosphere

Musinsa's interface is the digital equivalent of a Tokyo street-fashion magazine cut to grid -- editorial, monochrome, and built around the photograph. The page opens on a pure white canvas (`#ffffff`) with absolute black headings (`#000000`) and a deliberately tiny color budget: black, white, three shades of gray, and a single saturated red (`#ff003b`) reserved almost entirely for sale-percentage tags. There is no brand pastel. There is no warm orange. There is no friendly avatar tone. The product photograph -- almost always shot against a clean studio wall by the brand the seller represents -- is the only thing on screen permitted to carry color.

The aesthetic descends directly from Musinsa's 2001 origin as **무진장 신발 사진이 많은 곳** ("a place with a lot of shoe photos"), a Freechal community for sneakerheads run by a high schooler named Cho Man-ho ([about.musinsa.com](https://about.musinsa.com/newsroom/musinsa-ceo)). That community was built around photographs, not commentary; product over chrome. Twenty-five years later, that DNA is still visible in every category page: a 2-column (mobile) / 4-5-column (desktop) thumbnail grid with hairline `#eeeeee` separators, brand name in 12-13px Pretendard 700, product title in 13-14px 400, price in bold black, and a small red sale percentage. Type runs dense, line-heights are tight, and white space exists primarily to *separate photos*, not to decorate. Where Karrot uses one warm orange and Toss uses one trustworthy blue, Musinsa uses one *absence* — the white between the photos — and lets the catalog do the talking.

**Key Characteristics:**
- Monochrome black-and-white discipline: `#000000` text and CTAs on `#ffffff` canvas
- Single accent color (`#ff003b` sale red) used scarcely, almost exclusively on discount percentages
- Pretendard / Noto Sans KR system stack -- no bespoke wordmark face on product surfaces
- Hairline `#eeeeee` borders for grid separation; no shadows on product cards
- 13-14px base body type -- denser than Western e-commerce, optimized for scanning many products
- Tight letter-spacing (`-0.3px` to `-0.4px` on Korean text) for editorial compactness
- Photograph-first composition: product image dominates, chrome recedes
- Black solid as primary CTA -- `#000000` filled buttons with white text, never blue, never branded

## 2. Color Palette & Roles

### Primary
- **Pure Black** (`#000000`): Primary CTA fill, headings, product titles, brand wordmark. The non-negotiable foundation.
- **Pure White** (`#ffffff`): Page canvas, card surfaces, button text on black, navigation background.
- **Sale Red** (`#ff003b`): Discount percentage tags, "오늘만 무료배송" sale flags, time-limited promotion accents. Used scarcely.

### Neutral Scale
- **Gray 900** (`#222222`): Body text on light surfaces, secondary headings.
- **Gray 700** (`#333333`): Default body color (observed `rgb(51,51,51)` on body element).
- **Gray 500** (`#999999`): Metadata (review counts, brand descriptors, "구매 후기 N개").
- **Gray 400** (`#bbbbbb`): Disabled text, inactive icons.
- **Gray 200** (`#eeeeee`): Hairline grid borders, divider lines between product rows.
- **Gray 100** (`#f5f5f5`): Subtle fill for filter chips, search bar background, secondary CTAs.
- **Gray 50** (`#fafafa`): Lightest surface fill for nested sections.

### Semantic
- **Sale / Critical Red** (`#ff003b`): Sale percentages, error states. Same hue serves both roles.
- **Star Yellow** (`#ffb900`): Review star fills (only place yellow appears on the surface).
- **Members Pink** (`#ff58a0`): "Brand Snap" / "스타일" community tag accent (used sparingly on community surfaces).

### Borders
- **Hairline Border** (`#eeeeee`): Grid cell separator, card outline. The system's most-used non-text color.
- **Border Mid** (`#dddddd`): Input outline default.
- **Border Strong** (`#000000`): Selected filter chip, focused input, active tab underline.

## 3. Typography Rules

### Font Family
- **Primary (Korean + Latin)**: `"Pretendard", "Pretendard Variable", -apple-system, BlinkMacSystemFont, "Noto Sans KR", "Malgun Gothic", "맑은 고딕", AppleGothic, dotum, sans-serif`
- **Fallback (legacy surfaces)**: `"Noto Sans KR", "malgun gothic", AppleGothic, dotum, sans-serif` (observed body font-family on category pages, 2026-05)
- **Design Principle**: No custom display typeface. Editorial weight comes from the photograph and from disciplined use of weight 700 on tight 13-15px sizes — not from a branded webfont.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display | Pretendard | 28px | 700 | 36px | -0.4px | Editorial banner / event title |
| Heading Large | Pretendard | 22px | 700 | 30px | -0.4px | Category page title |
| Heading | Pretendard | 18px | 700 | 26px | -0.4px | Section header ("랭킹", "스타일") |
| Title | Pretendard | 15px | 700 | 22px | -0.3px | Product detail page title |
| Body Large | Pretendard | 14px | 400 | 20px | -0.3px | Standard product card title |
| Body | Pretendard | 13px | 400 | 18px | -0.3px | Default body, listings text |
| Body Bold | Pretendard | 13px | 700 | 18px | -0.3px | Brand name above product title |
| Caption | Pretendard | 12px | 400 | 16px | -0.3px | Metadata, review counts, timestamps |
| Caption Bold | Pretendard | 12px | 700 | 16px | -0.3px | Sale percentage labels |
| Micro | Pretendard | 11px | 500 | 14px | -0.2px | Badge text, fine print |

### Principles
- **Tight tracking is the brand**: All Korean type uses negative letter-spacing (`-0.2px` to `-0.4px`). On a 13px line, that's the difference between editorial density and corporate looseness.
- **Two weights do most of the work**: Regular (400) and Bold (700). Medium (500) is reserved for badges and small labels.
- **Compact scale, dense baseline**: Body defaults to 13-14px. The grid is built to show *more products per scroll*, not bigger text.
- **Headline weight via boldness, not size**: A product title at 15px/700 outperforms 20px/400 — the system trusts weight, not scale.
- **No italics**: Korean type doesn't carry italic stress meaningfully; the system avoids it even on Latin substrings.

## 4. Component Stylings

### Buttons

**Primary (Black Solid)**
- Background: `#000000`
- Text: `#ffffff`
- Radius: 4px
- Padding: 14px 20px
- Font: 15px / 700 / Pretendard
- Hover: `#222222`
- Pressed: `#333333`
- Disabled: `#cccccc` background, `#ffffff` text
- Use: Primary CTA — `장바구니`, `구매하기`, `좋아요`, `로그인`

**Outline (Black Border)**
- Background: `#ffffff`
- Text: `#000000`
- Border: 1px solid `#000000`
- Radius: 4px
- Padding: 14px 20px
- Font: 15px / 700 / Pretendard
- Hover: `#f5f5f5` background
- Use: Secondary CTA — `브랜드 홈`, `사이즈 가이드`, `리뷰 작성`

**Neutral (Gray Fill)**
- Background: `#f5f5f5`
- Text: `#222222`
- Border: 1px solid `#eeeeee`
- Radius: 4px
- Padding: 12px 16px
- Font: 14px / 500 / Pretendard
- Hover: `#eeeeee` background
- Use: Tertiary actions — filter open, view-mode toggle, share

**Sale Red (Promotion)**
- Background: `#ff003b`
- Text: `#ffffff`
- Radius: 4px
- Padding: 12px 18px
- Font: 14px / 700 / Pretendard
- Use: Time-limited sale CTA — `타임세일 자세히 보기`, `오늘만 특가`. Used scarcely.

### Inputs

**Default**
- Background: `#ffffff`
- Border: 1px solid `#dddddd`
- Radius: 4px
- Padding: 12px 14px
- Text: 14px / 400 / `#222222`
- Placeholder: `#999999`
- Focus: 1px solid `#000000` (no glow ring; just border darkens)
- Use: Default text input — login, sign-up, address forms

**Search**
- Background: `#f5f5f5`
- Border: none
- Radius: 4px
- Padding: 12px 16px 12px 40px (left-pad for inline magnifier icon)
- Text: 14px / 400 / `#222222`
- Placeholder: `#999999` ("브랜드, 상품, 프로필, 태그 등")
- Focus: `#ffffff` background, 1px solid `#000000` border
- Use: Header search bar across all surfaces

**Error**
- Border: 1px solid `#ff003b`
- Helper text: 12px / 400 / `#ff003b`, 6px below input
- Use: Form validation failure

### Cards

**Product Card**
- Background: `#ffffff`
- Border: none (only `#eeeeee` 1px hairline at grid-cell boundary)
- Radius: 0px (sharp corners — the catalog grid is a print grid)
- Padding: 0px on container; 8-10px between image and metadata block
- Image: 4:5 portrait aspect ratio, no radius
- Shadow: none
- Use: Default product listing card. The grid cell, not a floating card.

**Curation Tile (Editorial Banner)**
- Background: `#ffffff` (or full-bleed image)
- Radius: 0px
- Padding: 0px
- Use: Editorial sections (`스타일`, `에디터픽`, `오늘의 코디`) — full-bleed photographs as the card surface itself.

**Brand Card**
- Background: `#fafafa`
- Border: 1px solid `#eeeeee`
- Radius: 4px
- Padding: 16px
- Use: Brand-of-the-day, brand-snap entry on home feed

### Badges

**Sale Percentage**
- Background: transparent
- Text: `#ff003b`
- Font: 13px / 700 / Pretendard
- Padding: 0px
- Radius: 0px
- Use: Inline sale percentage on product cards (`-30%`, `-50%`). Most common badge in the system.

**MUSINSA Only**
- Background: `#000000`
- Text: `#ffffff`
- Font: 11px / 700 / Pretendard
- Padding: 3px 6px
- Radius: 2px
- Use: "무신사 단독", "선발매" exclusive flags on product images

**New / Free Shipping**
- Background: `#ffffff`
- Text: `#000000`
- Border: 1px solid `#000000`
- Font: 11px / 700 / Pretendard
- Padding: 3px 6px
- Radius: 2px
- Use: "NEW", "무료배송" minor flags. Outline keeps the photograph dominant.

**Rank Badge**
- Background: `#000000`
- Text: `#ffffff`
- Font: 12px / 700 / Pretendard
- Padding: 4px 8px
- Radius: 0px
- Use: Top-of-list rank position (`1`, `2`, `3`) on weekly ranking grid

**Filter Chip (Default)**
- Background: `#ffffff`
- Text: `#222222`
- Border: 1px solid `#dddddd`
- Font: 13px / 500 / Pretendard
- Padding: 8px 14px
- Radius: 999px
- Use: Category / size / color filter pills

**Filter Chip (Selected)**
- Background: `#000000`
- Text: `#ffffff`
- Border: 1px solid `#000000`
- Font: 13px / 700 / Pretendard
- Padding: 8px 14px
- Radius: 999px
- Use: Active filter state

### Navigation
- Top header: `#ffffff` background, 56-60px height, 1px bottom border `#eeeeee`. Wordmark left (`MUSINSA`, 700, ~22px black), search center, account/cart right.
- Category nav: horizontal scroll on mobile (남성/여성/뷰티/스포츠/럭셔리/키즈/플레이어), 14px/700, active item gets a 2px black underline.
- Bottom tab bar (mobile): 5 items — `홈`, `랭킹`, `스타일`, `좋아요`, `마이`. Active label `#000000`, inactive `#999999`. No color differentiation; weight does the work.

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Scale: 2px, 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 56px, 80px
- Global gutter (mobile): 16px on each side
- Global gutter (desktop): 20-24px each side, max content width ~1280px
- Inter-product vertical spacing: 24px between rows on the catalog grid
- Inter-section vertical spacing: 40-56px between editorial blocks on the home feed

### Grid & Container
- Mobile: 2-column product grid, 1px hairline gutter
- Tablet: 3-column product grid
- Desktop: 4-5 column product grid, depending on category
- Editorial / curation banner: full-bleed (edge-to-edge) on mobile, max 1280px on desktop
- The grid is the product. Avoid masonry, avoid staggered cells — every product gets the same rectangle.

### Whitespace Philosophy
- **Photographs separate themselves**: White space between product images is the system's primary breathing room — not padding *inside* cards, not margins around text.
- **Section breaks earn their space**: 40-56px vertical gaps mark real shifts (categories, editorial blocks); within a section, 16-24px is enough.
- **Don't pad the catalog**: Adding 24px of padding inside a product card pushes one fewer product into the viewport and breaks the magazine-grid feel.

### Border Radius Scale
- Sharp (0px): Product images, product cards, editorial banners, top-tier badges
- Tight (2px): Small flags ("NEW", "MUSINSA Only")
- Standard (4px): Buttons, inputs, brand cards
- Pill (999px): Filter chips, avatar frames
- Note: Musinsa is a *low-radius* system. Anything over 8px starts feeling like a different brand.

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow, no border | Page background, product images, default state |
| Hairline (Level 1) | 1px solid `#eeeeee` | Card boundary, grid separator, header bottom border |
| Soft (Level 2) | `0px 2px 8px rgba(0,0,0,0.06)` | Sticky filter bar when scrolled, dropdown menus |
| Floating (Level 3) | `0px 4px 16px rgba(0,0,0,0.10)` | Bottom sheets, modal dialogs, snackbar |

**Shadow Philosophy**: Musinsa is allergic to elevation. The default card has *no* shadow and *no* border — its boundary is the photograph's edge. Shadows appear only when an element must visibly detach from the page (sticky bar, modal). The system never uses brand-tinted shadows. Drop-shadows on product images are forbidden — they read as cheap e-commerce, not editorial.

## 7. Do's and Don'ts

### Do
- Use `#000000` for primary CTAs — black is the brand's saturation
- Keep border-radius between 0px and 4px on product surfaces
- Use weight 700 to create headline emphasis, not larger sizes
- Apply negative letter-spacing (`-0.3px` to `-0.4px`) on Korean type
- Let product photographs be the color in the layout
- Use `#ff003b` for sale percentages and time-limited promotions only
- Default to 2-column grid on mobile, 4-5 on desktop — the catalog is the page
- Use 13-14px as base body size — denser than Western e-com, intentionally

### Don't
- Don't introduce a brand blue, purple, or orange — the palette is monochrome plus one red
- Don't use rounded corners over 8px on product surfaces — pill chips are the only exception
- Don't add drop-shadows to product images
- Don't pad the inside of product cards generously — let the photograph touch its frame
- Don't use red (`#ff003b`) for navigation, decoration, or non-sale CTAs
- Don't switch to a custom display typeface — Pretendard at 700 is the headline voice
- Don't use illustration or mascot imagery in chrome — Musinsa's surfaces show clothing, not characters
- Don't soften the black — `#000000`, not `#1a1c20`. Editorial requires absolute contrast.

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <768px | 2-column grid, full-bleed editorial, bottom tab bar |
| Tablet | 768-1024px | 3-column grid, side-rail filters appear |
| Desktop | >1024px | 4-5 column grid, max content width ~1280px, persistent left-side category nav |

### Touch Targets
- Primary CTA buttons: 48px height
- Filter chips: 36px height
- Bottom tab bar items: 56px height
- Product card tap area: full card (image + metadata)

### Collapsing Strategy
- Desktop side-rail filters → mobile bottom-sheet filter (`필터` button opens full-height sheet)
- Desktop 5-column grid → mobile 2-column grid (no transitional 3-column on most catalogs)
- Editorial banners stay full-bleed at every breakpoint — they never get gutters

### Image Behavior
- Product images: 4:5 portrait, no radius, lazy-loaded with `#fafafa` placeholder
- Brand logos: square 1:1, 4px radius
- Editorial covers: 3:4 or 16:9 depending on placement, full-bleed at the breakpoint

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Pure Black (`#000000`)
- CTA Hover: Soft Black (`#222222`)
- Background: Pure White (`#ffffff`)
- Heading text: Pure Black (`#000000`)
- Body text: Gray 700 (`#333333`)
- Metadata: Gray 500 (`#999999`)
- Placeholder: Gray 500 (`#999999`)
- Hairline border: Gray 200 (`#eeeeee`)
- Input border: Gray 300 (`#dddddd`)
- Disabled: Gray 400 (`#bbbbbb`)
- Sale red: (`#ff003b`)
- Star yellow: (`#ffb900`)

### Example Component Prompts
- "Create a Musinsa product card: white background, no border, no shadow, no radius. Image is 4:5 portrait at top, no radius. Below image: 8px gap, brand name in 13px Pretendard 700 #000000, product title in 13px 400 #333333 (2 lines max, ellipsis), 4px gap, price line: sale percentage in 13px 700 #ff003b inline before final price in 14px 700 #000000, original price strikethrough in 12px 400 #999999. Tight letter-spacing -0.3px throughout."
- "Build a primary CTA: #000000 background, white text, 15px weight 700 Pretendard, padding 14px 20px, 4px radius, full-width on mobile. Hover: #222222. Pressed: #333333. No icon."
- "Design a filter chip bar: horizontal scroll, 8px gap. Default chip: white bg, 1px solid #dddddd border, 13px/500 #222222 text, 999px radius, 8px 14px padding. Selected chip: #000000 bg, white text, 13px/700, same radius."
- "Create a Musinsa header: white bg, 56px height, 1px bottom border #eeeeee. Left: MUSINSA wordmark 22px/700 #000000. Center: search bar — #f5f5f5 bg, 4px radius, 12px 16px padding, 14px placeholder #999999 '브랜드, 상품, 프로필, 태그 등'. Right: heart icon, cart icon, profile icon — all 24px stroke #000000."
- "Design a sale badge: text-only, no background, no border. Just '-30%' in 13px Pretendard 700 #ff003b, inline with the product price."

### Iteration Guide
1. Default surface is `#ffffff` and default text is `#000000` — never `#1a1c20` or `#0e0f10`
2. Sale red `#ff003b` is the only chromatic accent — and only for discount/promotion
3. Border-radius defaults: 0px product surfaces, 4px buttons/inputs, 999px chips
4. Body 13-14px, headings via 700 weight not larger size
5. Korean letter-spacing `-0.3px` to `-0.4px` is non-negotiable for editorial feel
6. No shadows on product cards — hairline `#eeeeee` is the boundary
7. Photograph is always the brightest thing on screen — chrome must yield to it

---

## 10. Voice & Tone

Musinsa speaks like an editor of a street-style magazine, not a marketer. The voice is short, declarative, and trusts that the photograph has already done most of the persuading. Korean copy uses casual editorial endings (`-요`, `-해요`, occasional bare-stem imperatives like `둘러보기`, `장바구니 담기`) over the formal `-ㅂ니다`. Sentences are clipped — a sale banner reads `오늘만 무료배송`, not `오늘에 한해 무료배송 혜택을 제공해 드립니다`. English surfaces (`global.musinsa.com`, the ZOZOTOWN MUSINSA Shop) inherit the same compactness — *"Discover K-fashion"*, *"Shop Korea's #1"*, not *"Premium Korean fashion experiences"*.

| Context | Tone |
|---|---|
| CTAs | Bare-stem Korean (`장바구니`, `구매하기`, `좋아요`, `팔로우`) / clipped English (`Shop`, `Buy`, `Save`, `Follow`) |
| Sale flags | One word + percentage (`최대 -50%`, `오늘만 특가`, `타임세일`). Never `놀라운 할인 혜택!`. |
| Product titles | Brand name on own line in bold, then literal product name. No marketing adjectives ("amazing", "must-have"). |
| Empty states | One short editorial line + one neutral suggestion (`아직 좋아한 상품이 없어요` + `상품 둘러보기`). Never `데이터가 없습니다`. |
| Error messages | Specific, actionable, blameless (`주소를 다시 확인해 주세요`). No `죄송합니다` boilerplate. |
| Reviews / community | First-person, casual (`-요` endings), no editorial polish — Musinsa lets users sound like users. |
| Editorial / lookbook | Magazine-style headline + 1-line dek. Korean-English mixed (`This Week's Pick — 이번 주의 코디`). |
| Sign-up / onboarding | Short. One screen, one input, one CTA. No onboarding tour. |

**Forbidden phrases.** `놀라운 할인`, `최저가 보장!!!`, `대박 세일`, `지금 바로 클릭`, `데이터가 없습니다`, `오류가 발생했습니다`, `불편을 드려 죄송합니다`. English bans: `amazing deals`, `best prices guaranteed`, `must-have`, `limited time only!!!`, `exclusive luxury`. Emoji are allowed in user reviews and community posts, but never in CTAs, error messages, sale flags, or chrome microcopy.

**Voice samples.**

- `대한민국 1등 패션 플랫폼` — corporate brand line, used on about-pages and press. <!-- cited: about.musinsa.com/about-musinsa, 2026-05 -->
- `Discover K-fashion` — global surface positioning. <!-- cited: about.musinsa.com newsroom, 2026-05 -->
- `MUSINSA STANDARD — 어디에나 어울리는 기본` — Musinsa Standard PB tagline pattern. <!-- illustrative: paraphrased from MUSINSA STANDARD positioning per The Korea Herald, 2026 -->
- `장바구니 담기` / `바로 구매하기` — primary CTA pair on product detail page. <!-- illustrative: standard Musinsa CTA pattern -->
- `오늘만 무료배송` — time-limited shipping flag. <!-- illustrative: standard Musinsa promo pattern -->
- `좋아요` / `팔로우` — community / brand-follow CTA labels. <!-- illustrative: standard Musinsa community CTA pattern -->
- `이번 주의 랭킹` — weekly ranking section header. <!-- illustrative: standard Musinsa editorial section pattern -->

## 11. Brand Narrative

Musinsa (무신사) was born in 2001 — not as a company, but as a Freechal community called **무진장 신발 사진이 많은 곳** ("a place with a lot of shoe photos") run by a high-school senior named **Cho Man-ho (조만호)** ([about.musinsa.com — Manho Cho's story](https://about.musinsa.com/newsroom/musinsa-ceo)). It was a sneakerhead's gallery first, a magazine second, and a store last. After founding Musinsa.com and launching Musinsa Magazine for shoe-focused editorial content in the early 2000s, Cho opened **Musinsa Store in 2009**, turning a community of photographers into Korea's first dedicated streetwear marketplace ([CanvasBusinessModel — Musinsa brief history](https://canvasbusinessmodel.com/blogs/brief-history/musinsa-brief-history)).

The investor story tracks the design: in **2019, Sequoia Capital invested ~200B KRW**, valuing Musinsa at ~2.3 trillion won and making it Korea's first fashion-platform unicorn on a single funding round ([KoreaTechDesk](https://koreatechdesk.com/korean-online-fashion-giant-musinsa-secures-157-8-million-in-series-c-funding-led-by-kkr)). **2021** brought a Series B from IMM Investment + Sequoia at ~2.5 trillion won valuation. **2024** brought a **240B KRW round from KKR + Wellington Management at ~3.5 trillion won (~$2.4B+)** ([BoF — Musinsa $6.8B IPO](https://www.businessoffashion.com/news/retail/korean-fashion-retailer-musinsa-seeking-68-billion-valuation-with-ipo/), [Korea Times](http://www.koreatimes.co.kr/www/biz/2023/10/175_361856.html)). The company has since picked **Citigroup and JPMorgan** for a planned IPO targeting north of 3.2 trillion won market cap.

The product layered on top of that funding ramp is just as deliberate. **MUSINSA STANDARD**, the in-house PB launched in **2017**, took the curatorial voice of the platform and pointed it inward — affordable basics with a tight, editorial palette. The first physical store opened in **Hongdae in 2021**, and by 2025 the chain had 33 domestic stores and 28M annual visits, with **first overseas store in Shanghai (Huaihai Plaza) in late 2024** and a **MUSINSA Shop launching on ZOZOTOWN in November 2025** ([Korea Herald — Musinsa Standard 1T won](https://www.koreaherald.com/article/10639378), [about.musinsa.com — MUSINSA × ZOZOTOWN](https://about.musinsa.com/newsroom/musinsa-zozo)).

What Musinsa refuses: the rainbow-palette aesthetics of nationwide marketplaces (Coupang, 11st, Gmarket), the lifestyle-blog mood of Western e-com (Net-a-Porter, Mr Porter), and the algorithmic-feed UX of social commerce. Musinsa keeps the catalog as the home page. Photographs lead. Black wordmark, white canvas, hairline grid. Sale red is the only saturated thing on the page, used only when something is actually on sale. The mission statement on the corporate site is **"대한민국 1등 패션 플랫폼"** — Korea's number-one fashion platform — and the design system reads as the editorial expression of that claim ([about.musinsa.com](https://about.musinsa.com/newsroom/about-musinsa)).

The closing read: Musinsa's monochrome is not minimalism for its own sake. It's the visual descendant of the 2001 sneaker-photo community, where the only thing that mattered was the photograph of the shoe. Twenty-five years and one IPO-track later, the design still gets out of the way of the picture.

## 12. Principles

1. **Black is the brand, not the accent.** `#000000` is the primary CTA fill, not a hover state, not a fallback. Editorial e-commerce earns trust by being unambiguously contrast-positive — not by softening the dark to `#1a1c20`. *UI implication:* never substitute `#222` or `#1a1c20` for primary CTA fill; reserve those grays for body text only.
2. **One accent, scarcely used.** Sale red `#ff003b` exists almost exclusively on discount percentages and time-limited promotion. It is never decoration, never a brand color, never on navigation. *UI implication:* if a designer adds red to anything that is not a discount or an error, reject — the system has no second brand color to fall back on.
3. **Photograph first, chrome second.** Every product card's job is to deliver the image. Borders, shadows, and corner radii are subtractive — anything that competes with the photograph loses. *UI implication:* default product cards have no border, no shadow, no radius. The image's edge *is* the card's edge.
4. **Density is a feature.** Body text at 13-14px and tight `-0.3px` tracking is intentional — Musinsa's user is *scanning* a magazine grid, not reading prose. *UI implication:* never bump body to 16-18px to "feel modern"; the catalog grid breaks at lower density.
5. **Two weights do most of the work.** Pretendard 400 and 700 — Medium (500) is for badges, Light is forbidden. *UI implication:* if a layout asks for a third weight to hierarchy properly, the size hierarchy is wrong; restate with size + weight=700.
6. **Sharp corners on product surfaces.** Product cards, editorial banners, and rank badges use 0px radius. The 4px radius is a chrome detail (buttons, inputs), not a content treatment. *UI implication:* if a product card grows a 12px radius, it has drifted toward "lifestyle blog" and should be flattened.
7. **Letter-spacing is the brand's whisper.** All Korean type carries `-0.2px` to `-0.4px`. This is invisible individually and unmissable in aggregate. *UI implication:* every Korean type token must specify negative tracking; positive or 0 tracking on Korean reads as foreign / corporate.
8. **The grid is the homepage.** The home feed is curated editorial, but the catalog grid is what the brand *is*. Onboarding ends in the grid. Search ends in the grid. Discovery ends in the grid. *UI implication:* a redesign that buries the catalog under feature-card carousels has lost the plot — the catalog must be at most one tap from any home surface.

## 13. Personas

*Personas are fictional archetypes informed by publicly described Musinsa user segments (Korean Gen Z / millennial fashion shoppers, both men and women), not individual people.*

**현우 (Hyunwoo), 25, Seoul.** University student in 마포구. Opens Musinsa 4-5 times a week — not always to buy. Treats the weekly ranking page as a fashion magazine, scrolls for inspiration first and purchase second. Owns 3 pairs of sneakers from MUSINSA STANDARD basics. Will pay full price for a 무신사 단독 (Musinsa Only) drop; will wait for a sale on anything else.

**서연 (Seoyeon), 28, Seoul.** Marketing associate, lives in 강남구. Uses Musinsa for office-friendly basics and weekend streetwear. Reads brand stories in the editorial sections before adding to cart. Cares about review photos more than star ratings — wants to see how it fits a body close to hers. Has Musinsa app push notifications turned on only for "follow" brand restocks.

**지호 (Jiho), 22, Busan.** University student. Discovered Musinsa through 무신사 스탠다드 marketing on Instagram. Buys T-shirts, hoodies, and chinos in 3-color sets when they go on sale. Knows the price-comparison tab exists but rarely uses it — trusts that Musinsa's red sale percentage is the real one.

**Mei, 26, Shanghai.** Visited the MUSINSA STANDARD Huaihai Plaza store in late 2024 after seeing it on Xiaohongshu. Now uses the global Musinsa site (in Chinese/English) to buy K-fashion brands not available on Tmall. Expects the same monochrome editorial layout in any market — the global site that doesn't look like the Korean site reads as a knockoff to her.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no liked items)** | Single editorial line (`아직 좋아한 상품이 없어요`) in 14px/400 `#333333`, 12px gap, secondary CTA `상품 둘러보기` in outline-black-button style. No illustration, no mascot. |
| **Empty (search no results)** | One line `'{검색어}'에 대한 결과가 없어요` in 14px/400 `#333333`, then 8px gap, recommended-brands grid below. Never a full-screen empty illustration. |
| **Empty (filter cleared)** | `조건에 맞는 상품이 없어요` in 14px/400 `#999999`. No CTA — user resets filters themselves. |
| **Loading (catalog grid)** | Skeleton blocks at `#eeeeee` matching product-card layout: 4:5 image rectangle, two short text lines, one shorter line. Shimmer 1.2s, 6% white highlight. No spinner overlay. |
| **Loading (infinite scroll)** | 2-3 skeleton cards appended at the bottom of the grid. Existing cards stay fully rendered. No spinner. |
| **Loading (cart action)** | Inline button text swaps to a small `#ffffff` spinner (24px) on the existing `#000000` button — button geometry stays identical for frame-stability. |
| **Error (inline form)** | Input border becomes `#ff003b` 1px, helper text 12px/400 `#ff003b` 6px below. One actionable sentence (`주소를 다시 확인해 주세요`). |
| **Error (toast)** | `#000000` background, white 14px/500 text, 4px radius, 3s auto-dismiss. Bottom of screen, 16px above bottom tab bar. One sentence. No icon. |
| **Error (network / blocking)** | Full-screen centered: 16px/700 `#000000` headline, 14px/400 `#999999` subline, retry button in primary-black style. No illustration. |
| **Success (added to cart)** | Bottom-edge slide-up snackbar: `#000000` bg, white 14px/500 text `장바구니에 담겼어요`, white-outline `장바구니 보기` text-button on right. 3s auto-dismiss. |
| **Success (purchase complete)** | Dedicated confirmation screen, not a toast. 22px/700 `#000000` `주문이 완료되었어요`, then order summary block (white bg, hairline border `#eeeeee`), and a primary-black `주문 내역 보기` CTA. No celebratory animation. |
| **Skeleton** | `#eeeeee` blocks at exact product-card dimensions. Shimmer 1.2s. Brand name and price slots stay blank until resolved — never inferred placeholders. |
| **Disabled** | Button bg drops to `#cccccc`, text stays `#ffffff`. No outline change, no opacity tricks. |

## 15. Motion & Easing

**Durations** (named, not raw milliseconds):

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle flips, checkbox states |
| `motion-fast` | 150ms | Button press dim, hover transitions, inline focus |
| `motion-standard` | 220ms | Default — card taps, tab switches, dropdown reveals |
| `motion-slow` | 320ms | Sheet presentations, success-screen entries |
| `motion-page` | 280ms | Native push/pop between routes |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Sheets, snackbars, route entries |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals, snackbar auto-close |
| `ease-standard` | `cubic-bezier(0.4, 0.0, 0.2, 1)` | Two-way transitions — expandable cards, tab content |

**Spring stance.** **Spring and overshoot easings are forbidden on Musinsa product surfaces.** The brand is editorial e-commerce; bouncy motion reads as toy-like or as a TikTok shopping app, neither of which Musinsa wants to be. The catalog grid is meant to feel like a magazine page turning — controlled, predictable, never elastic. The single licensed exception is the native pull-to-refresh indicator, which inherits the OS's default spring because overriding it feels worse than accepting it. Every other motion uses `ease-enter`, `ease-exit`, or `ease-standard`.

**Signature motions.**

1. **Product card tap.** Card image dims to 92% opacity on press (`motion-fast / ease-standard`), releases on tap-up before navigation. The card itself does not scale — scale on a magazine grid breaks the print metaphor.
2. **Filter sheet presentation.** Bottom sheet rises from `y+40px` with `motion-slow / ease-enter` and a synchronized backdrop fade `rgba(0,0,0,0)` → `rgba(0,0,0,0.5)`. Dismissal uses `motion-fast / ease-exit` — leaving is lighter than entering.
3. **Add-to-cart snackbar.** Slides up from bottom with `motion-standard / ease-enter`, holds 3s, slides down on `motion-fast / ease-exit`. No bounce. No icon spring.
4. **Tab switch (catalog → editorial → ranking).** Cross-fade only, `motion-standard` — sliding would imply an axial relationship between catalog modes that doesn't exist.
5. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant`. Cross-fades replace any slide. The catalog stays fully usable; just less kinetic.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 — Direct verification (MCP playwright + WebFetch, 2026-05):
- https://www.musinsa.com/category/001/goods?gf=A — confirmed page title
  "상의 | 무신사 추천 상품"; body font-family observed as
  `"Noto Sans KR", "malgun gothic", AppleGothic, dotum, sans-serif`;
  body color rgb(51,51,51); body bg rgb(255,255,255); base size 14px.
  Note: live computed-style extraction was partially blocked by an
  unstable browser sandbox that intermittently re-navigated to other
  Korean sites (yeogi.com, ohou.se, kakaobank, naver, qanda.ai).
  The token claims (Pretendard, #000/#fff/#999/#eeeeee, sale red
  #ff003b, 0px radius product cards) are reconciled from public
  knowledge of Musinsa's surfaces and from the partial inspect that
  did succeed. Re-verify in a stable browser before publishing.
- https://www.musinsa.com/main/musinsa/recommend?gf=A — page title
  confirmed as "무신사".

Tier 2 — Press / secondary (WebSearch + WebFetch, 2026-05):
- https://about.musinsa.com/newsroom/musinsa-ceo — Cho Man-ho (조만호)
  founder profile, 2001 Freechal sneaker community origin
  (무진장 신발 사진이 많은 곳).
- https://about.musinsa.com/newsroom/about-musinsa — corporate brand
  line "대한민국 1등 패션 플랫폼"; community-to-platform narrative.
- https://about.musinsa.com/newsroom/musinsa-zozo — MUSINSA × ZOZOTOWN
  partnership (Nov 2025), Japan global expansion via ZOZOTOWN.
- https://canvasbusinessmodel.com/blogs/brief-history/musinsa-brief-history
  — 2009 Musinsa Store launch confirmation.
- https://koreatechdesk.com/korean-online-fashion-giant-musinsa-secures-157-8-million-in-series-c-funding-led-by-kkr
  — Sequoia 200B KRW 2019 round; KKR Series C; unicorn status.
- https://www.businessoffashion.com/news/retail/korean-fashion-retailer-musinsa-seeking-68-billion-valuation-with-ipo/
  — IPO planning, Citigroup + JPMorgan, 6.8B valuation framing.
- http://www.koreatimes.co.kr/www/biz/2023/10/175_361856.html
  — IPO target threshold (3.2 trillion won market cap).
- https://www.koreaherald.com/article/10639378 — MUSINSA STANDARD
  1 trillion won annual transaction goal; PB scale.
- https://www.koreaherald.com/article/10449494 — MUSINSA vs Uniqlo
  Gen Z positioning context.
- https://getdesign.md/musinsa — confirmed NO record. Tier 2 negative.

Re-verification status:
- Computed-style values for buttons, inputs, badges, and product cards
  were inferred from partial inspect + public Musinsa surface knowledge,
  not fully captured in a stable browser session. Tokens (sale red
  #ff003b, hairline #eeeeee, sharp 0px corners) match standard Musinsa
  surface treatment but should be re-verified before being used as
  authoritative DS specs.
- The valuations (~2.3T 2019, ~2.5T 2021, ~3.5T 2024, 3.2T+ IPO target)
  are from press; cross-check before public quotation.

Personas (§13) are fictional archetypes informed by Musinsa's publicly
described user segments (Korean Gen Z / millennial fashion shoppers,
men and women, plus emerging Chinese / Japanese global shoppers via
MUSINSA STANDARD overseas + ZOZOTOWN). Any resemblance to specific
individuals is unintended.

Interpretive claims (editorial, not documented Musinsa statements):
- "Musinsa's monochrome is not minimalism for its own sake" (§11
  closing) — editorial reading of the design, not a sourced brand
  statement.
- The spring-forbidden stance (§15) — derived from the overall
  editorial brand posture, not a documented Musinsa motion rule.
- The 8 numbered principles (§12) — synthesized from observed surface
  behavior + Musinsa's stated "magazine-first" origin; not a published
  design-principles list.
-->

---

**Verified:** 2026-05-08 (omd:add-reference initial create — Tier 1 partial / Tier 2 confirmed)
**Tier 1 sources:** musinsa.com/category/001/goods (page title `상의 | 무신사 추천 상품`, body font Noto Sans KR stack, body `#333` on `#fff`, base 14px); musinsa.com/main/musinsa/recommend (page title `무신사`).
**Tier 2 sources:** getdesign.md/musinsa — no record (confirmed). styles.refero.design — not checked (Tier 2 single hit).
**Tier 2 (Philosophy/founders):** about.musinsa.com (Cho Man-ho founder story, 2001 sneaker community, corporate "대한민국 1등 패션 플랫폼"), CanvasBusinessModel (2009 store launch), KoreaTechDesk + BoF + Korea Times (Sequoia 2019 / KKR 2024 / IPO 3.2T target), Korea Herald (MUSINSA STANDARD 1T target, ZOZOTOWN expansion).
**Style ref:** `karrot` (KR editorial neighbor format retained for tone scaffolding).
**Conflicts unresolved:** Tier 1 live-inspect was partially blocked by an unstable browser sandbox; non-page-title computed-style values were reconciled from public knowledge and documented in `.verification.md`. Re-run Tier 1 in a stable browser to lock token values.
