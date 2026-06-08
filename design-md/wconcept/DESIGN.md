---
id: wconcept
name: W Concept
country: KR
category: ecommerce
homepage: "https://www.wconcept.co.kr"
primary_color: "#000000"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=wconcept.co.kr&sz=128"
verified: "2026-05-27"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#000000"
    canvas: "#ffffff"
    sale: "#ff4600"
    gray-900: "#222222"
    gray-700: "#555555"
    gray-500: "#777777"
    gray-400: "#999999"
    gray-300: "#bababa"
    gray-200: "#e2e2e2"
    gray-100: "#eeeeee"
    gray-50: "#f6f6f6"
  typography:
    family: { sans: "Pretendard Variable", mono: "Pretendard Variable" }
    display:       { size: 32, weight: 700, lineHeight: 1.31, tracking: -0.4, use: "Editorial campaign title" }
    heading-lg:    { size: 24, weight: 700, lineHeight: 1.33, tracking: -0.4, use: "Category page title" }
    heading:       { size: 20, weight: 700, lineHeight: 1.4, tracking: -0.3, use: "Section header" }
    title:         { size: 16, weight: 600, lineHeight: 1.5, tracking: -0.3, use: "Product detail title, brand name" }
    body-lg:       { size: 16, weight: 400, lineHeight: 1.5, tracking: -0.2, use: "Body, product card title" }
    body:          { size: 14, weight: 400, lineHeight: 1.57, tracking: -0.2, use: "Listings text" }
    body-bold:     { size: 14, weight: 700, lineHeight: 1.57, tracking: -0.2, use: "Price emphasis, brand name" }
    caption:       { size: 13, weight: 400, lineHeight: 1.38, tracking: -0.2, use: "Metadata, review counts" }
    caption-bold:  { size: 13, weight: 700, lineHeight: 1.38, tracking: -0.2, use: "Sale percentage labels" }
    micro:         { size: 12, weight: 500, lineHeight: 1.33, tracking: -0.2, use: "Badge text, fine print" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 56, section: 80 }
  rounded: { sm: 0, md: 0, lg: 0, full: 9999 }
  shadow:
    soft: "0px 2px 8px rgba(0,0,0,0.06)"
    floating: "0px 4px 16px rgba(0,0,0,0.10)"
  components:
    button-primary: { type: button, bg: "#000000", fg: "#ffffff", radius: 0, padding: "16px 24px", font: "16px/700 Pretendard Variable", use: "Primary CTA, hover #222222" }
    button-outline: { type: button, bg: "#ffffff", fg: "#000000", radius: 0, padding: "16px 24px", font: "16px/600 Pretendard Variable", use: "Secondary CTA, 1px #000000 border" }
    button-neutral: { type: button, bg: "#f6f6f6", fg: "#222222", radius: 0, padding: "12px 16px", font: "14px/500 Pretendard Variable", use: "Tertiary, 1px #eeeeee border" }
    button-sale: { type: button, bg: "#ff4600", fg: "#ffffff", radius: 0, padding: "12px 18px", font: "14px/700 Pretendard Variable", use: "Time-limited sale CTA" }
    input-default: { type: input, bg: "#ffffff", fg: "#000000", radius: 0, padding: "12px 14px", font: "14px/400 Pretendard Variable", use: "Form input, 1px #e2e2e2, focus #000000, placeholder #999999" }
    product-card: { type: card, bg: "#ffffff", radius: 0, use: "Product listing, no border/shadow, #f6f6f6 image placeholder" }
    brand-card: { type: card, bg: "#ffffff", radius: 0, padding: "16px", use: "Designer-spotlight, 1px #eeeeee border" }
    badge-sale: { type: badge, fg: "#ff4600", radius: 0, font: "14px/700 Pretendard Variable", use: "Inline sale percentage" }
    badge-exclusive: { type: badge, bg: "#000000", fg: "#ffffff", radius: 0, padding: "3px 6px", font: "11px/700 Pretendard Variable", use: "단독/선론칭 flag" }
    filter-chip: { type: badge, bg: "#ffffff", fg: "#222222", radius: 0, padding: "8px 14px", font: "13px/500 Pretendard Variable", use: "Filter pill, 1px #e2e2e2; selected bg #000000 fg #ffffff" }
    toast: { type: toast, bg: "#000000", fg: "#ffffff", radius: 0, use: "Error/success snackbar, 3s" }
  components_harvested: true
---

# Design System Inspiration of W Concept (W컨셉)

## 1. Visual Theme & Atmosphere

W Concept's interface is a curated fashion gallery rendered in absolute monochrome -- the digital equivalent of a Seoul concept-store window where the clothing is lit and everything else recedes into shadow or white. The page opens on a pure white canvas (`#ffffff`) with absolute black type and chrome (`#000000`), and a deliberately starved color budget: black, white, three grays, and a single hot orange-red (`#ff4600`) that flashes only on sale percentages and time-limited drops. There is no brand pastel, no friendly accent, no warm illustration tone. The lookbook photograph -- a studio-shot designer piece, usually on a clean wall or a model against neutral seamless -- is the only thing on screen permitted to carry color.

This is premium positioning expressed through subtraction. Where mass-market Korean commerce (Coupang, Gmarket, 11st) screams with rainbow banners and red urgency, W Concept whispers. The platform built its identity around discovering emerging Korean designers, and the design system reflects that editorial-curator posture: the chrome is a frame, never the picture. Type runs in Pretendard Variable at a comfortable 16px base with disciplined weight contrast -- product titles in regular, brand names and prices carrying the emphasis through 600/700 weight rather than size. Corners are sharp (0px on cards and tiles), borders are hairline, and the grid is a clean magazine layout that lets each garment breathe in its own rectangle. The aesthetic says: *this is not a marketplace, it is a selection.*

What defines W Concept visually is the tension between the severe black-and-white frame and the single permission of `#ff4600` -- a saturated orange-red that, used scarcely on discount labels, reads as decisive rather than desperate. The absence of a second brand hue is itself the brand statement: confidence enough to let the photography and the typography do all the work.

**Key Characteristics:**
- Monochrome discipline: `#000000` type and chrome on `#ffffff` canvas, no brand pastel
- Single hot accent (`#ff4600` orange-red) reserved for sale percentages and time-limited drops
- Pretendard Variable as the system face -- no bespoke wordmark webfont on product surfaces
- Sharp 0px corners on product cards and editorial tiles; hairline `#eeeeee` separation
- 16px comfortable base type (more generous than a fast-fashion grid) -- premium spacing
- Light gray `#f6f6f6` surface fills for nested sections and image placeholders
- Photograph-first composition: the designer piece dominates, chrome yields
- Black solid as primary CTA -- never blue, never branded color

## 2. Color Palette & Roles

### Primary
- **Pure Black** (`#000000`): Primary CTA fill, headings, product titles, wordmark, nav. The non-negotiable foundation -- observed ~7,000 times on the live women's display surface.
- **Pure White** (`#ffffff`): Page canvas, card surfaces, button text on black, navigation background.
- **Sale Orange-Red** (`#ff4600`): Discount percentages, "단독", time-limited promotion accents, sale-price highlight. The system's only saturated hue. Used scarcely.

### Neutral Scale
- **Gray 900** (`#222222`): Strong secondary text, sub-headings on light surfaces.
- **Gray 700** (`#555555`): Default body / secondary copy color (observed `rgb(85,85,85)`).
- **Gray 500** (`#777777`): Metadata, brand descriptors, review counts (observed `rgb(119,119,119)`).
- **Gray 400** (`#999999`): Disabled text, inactive captions.
- **Gray 300** (`#bababa`): Placeholder text, inactive icons.
- **Gray 200** (`#e2e2e2`): Input borders, divider lines.
- **Gray 100** (`#eeeeee`): Hairline grid separators, card outlines.
- **Gray 50** (`#f6f6f6`): Surface fill for nested sections, image placeholder background.

### Semantic
- **Sale / Critical** (`#ff4600`): Sale percentage and error states share this hot orange-red.
- **Soft Scrim** (`rgba(0,0,0,0.3)`): Image overlays, gradient veils on hero photography.
- **Hairline Veil** (`rgba(0,0,0,0.1)`): Subtle dividers over imagery.

### Borders
- **Hairline Border** (`#eeeeee`): Grid separator, card outline -- the system's most-used non-text non-canvas value.
- **Border Mid** (`#e2e2e2`): Input outline default.
- **Border Strong** (`#000000`): Selected filter chip, focused input, active tab underline.

## 3. Typography Rules

### Font Family
- **Primary (Korean + Latin)**: `"Pretendard Variable", Pretendard, -apple-system, "system-ui", "Apple SD Gothic Neo", Roboto, "Noto Sans KR", "Segoe UI", "Malgun Gothic", sans-serif` (observed on live `display.wconcept.co.kr`, 2026-05)
- **Design Principle**: No custom display typeface. The editorial weight comes from the lookbook photograph and from disciplined weight contrast in Pretendard -- not from a branded webfont. Latin and Korean render co-equally in the same line.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display | Pretendard | 32px | 700 | 42px | -0.4px | Editorial campaign / event title |
| Heading Large | Pretendard | 24px | 700 | 32px | -0.4px | Category page title, section banner |
| Heading | Pretendard | 20px | 700 | 28px | -0.3px | Section header ("주목해야 할 브랜드들") |
| Title | Pretendard | 16px | 600 | 24px | -0.3px | Product detail title, brand name |
| Body Large | Pretendard | 16px | 400 | 24px | -0.2px | Standard body, product card title |
| Body | Pretendard | 14px | 400 | 22px | -0.2px | Listings text, descriptions |
| Body Bold | Pretendard | 14px | 700 | 22px | -0.2px | Price emphasis, brand name on card |
| Caption | Pretendard | 13px | 400 | 18px | -0.2px | Metadata, review counts, timestamps |
| Caption Bold | Pretendard | 13px | 700 | 18px | -0.2px | Sale percentage labels |
| Micro | Pretendard | 12px | 500 | 16px | -0.2px | Badge text, fine print |

### Principles
- **Emphasis via weight, not color**: A brand name in 14px/700 outranks the product title in 14px/400 on the same card -- the hierarchy is built in black, never in a second hue.
- **Comfortable, not dense**: Base body sits at 14-16px -- more generous than a fast-fashion catalog. Premium positioning earns the extra leading.
- **Two-and-a-half weights**: Regular (400) and Bold (700) do the heavy lifting; SemiBold (600) handles titles and brand names. Light is avoided -- it reads as cheap on Korean glyphs.
- **Tight Korean tracking**: Korean type carries `-0.2px` to `-0.4px` letter-spacing for editorial compactness without crowding.
- **No italics**: Korean type doesn't carry italic stress; the system avoids it even on Latin substrings.

## 4. Component Stylings

### Buttons

**Primary (Black Solid)**
- Background: `#000000`
- Text: `#ffffff`
- Border: none
- Radius: 0px
- Padding: 16px 24px
- Font: 16px / 700 / Pretendard
- Hover: `#222222`
- Pressed: `#000000` with `0.85` opacity overlay
- Disabled: `#bababa` background, `#ffffff` text
- Use: Primary CTA -- `구매하기`, `장바구니`, `로그인`, `브랜드 팔로우`

**Outline (Black Border)**
- Background: `#ffffff`
- Text: `#000000`
- Border: 1px solid `#000000`
- Radius: 0px
- Padding: 16px 24px
- Font: 16px / 600 / Pretendard
- Hover: `#f6f6f6` background
- Use: Secondary CTA -- `사이즈 가이드`, `브랜드 홈`, `위시리스트 추가`

**Neutral (Gray Fill)**
- Background: `#f6f6f6`
- Text: `#222222`
- Border: 1px solid `#eeeeee`
- Radius: 0px
- Padding: 12px 16px
- Font: 14px / 500 / Pretendard
- Hover: `#eeeeee` background
- Use: Tertiary actions -- filter open, sort toggle, share

**Sale (Promotion)**
- Background: `#ff4600`
- Text: `#ffffff`
- Border: none
- Radius: 0px
- Padding: 12px 18px
- Font: 14px / 700 / Pretendard
- Use: Time-limited sale CTA -- `단독 특가 보기`, `오늘의 딜`. Used scarcely.

### Inputs

**Default**
- Background: `#ffffff`
- Text: `#000000`
- Border: 1px solid `#e2e2e2`
- Radius: 0px
- Padding: 12px 14px
- Font: 14px / 400 / Pretendard
- Placeholder: `#999999`
- Focus: 1px solid `#000000` (border darkens, no glow ring)
- Use: Default text input -- login, sign-up, address forms

**Search**
- Background: `#f6f6f6`
- Text: `#000000`
- Border: none
- Radius: 0px
- Padding: 12px 16px 12px 40px (left-pad for inline magnifier)
- Font: 14px / 400 / Pretendard
- Placeholder: `#999999` ("브랜드, 상품 검색")
- Focus: `#ffffff` background, 1px solid `#000000` border
- Use: Header search bar across surfaces

**Error**
- Background: `#ffffff`
- Text: `#000000`
- Border: 1px solid `#ff4600`
- Radius: 0px
- Padding: 12px 14px
- Font: 14px / 400 / Pretendard
- Use: Form validation failure -- helper text 13px/400 `#ff4600` below

### Cards

**Product Card**
- Background: `#ffffff`
- Border: none (only `#eeeeee` hairline at grid-cell boundary)
- Radius: 0px (sharp -- the catalog is a print grid)
- Padding: 0px on container; 8-10px between image and metadata
- Image: 3:4 portrait, no radius, `#f6f6f6` placeholder
- Shadow: none
- Use: Default product listing card -- the grid cell, not a floating object

**Editorial Tile**
- Background: `#f6f6f6` (or full-bleed image)
- Border: none
- Radius: 0px
- Padding: 0px
- Use: Curated sections ("주목해야 할 브랜드들", lookbook banners) -- full-bleed photographs as the card surface itself

**Brand Card**
- Background: `#ffffff`
- Border: 1px solid `#eeeeee`
- Radius: 0px
- Padding: 16px
- Use: Brand-of-the-day, designer-spotlight entry on the home feed

### Badges

**Sale Percentage**
- Background: transparent
- Text: `#ff4600`
- Border: none
- Radius: 0px
- Padding: 0px
- Font: 14px / 700 / Pretendard
- Use: Inline sale percentage on product cards (`-30%`, `-50%`). Most common badge in the system.

**Exclusive Flag**
- Background: `#000000`
- Text: `#ffffff`
- Border: none
- Radius: 0px
- Padding: 3px 6px
- Font: 11px / 700 / Pretendard
- Use: "단독", "선론칭" exclusive flags on product imagery

**New / Coupon**
- Background: `#ffffff`
- Text: `#000000`
- Border: 1px solid `#000000`
- Radius: 0px
- Padding: 3px 6px
- Font: 11px / 700 / Pretendard
- Use: "NEW", "쿠폰" minor flags. Outline keeps the photograph dominant.

**Filter Chip (Default)**
- Background: `#ffffff`
- Text: `#222222`
- Border: 1px solid `#e2e2e2`
- Radius: 0px
- Padding: 8px 14px
- Font: 13px / 500 / Pretendard
- Use: Category / size / color filter pills

**Filter Chip (Selected)**
- Background: `#000000`
- Text: `#ffffff`
- Border: 1px solid `#000000`
- Radius: 0px
- Padding: 8px 14px
- Font: 13px / 700 / Pretendard
- Use: Active filter state

### Navigation
- Top header: `#ffffff` background, ~60px height, 1px bottom border `#eeeeee`. Wordmark left (`W CONCEPT`, 700, black), search center, account/wishlist/cart right.
- Category nav: horizontal items (여성/남성/뷰티/라이프/럭셔리), 16px/600, active item gets a 2px black underline.
- Bottom tab bar (mobile): 5 items -- `홈`, `카테고리`, `좋아요`, `마이`, `장바구니`. Active label `#000000`, inactive `#999999`. Weight does the work; no color differentiation.

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Scale: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 56px, 80px
- Global gutter (mobile): 16px each side
- Global gutter (desktop): 20-24px each side, max content width ~1280px
- Inter-product vertical spacing: 24-32px between rows on the catalog grid
- Inter-section vertical spacing: 56-80px between editorial blocks on the home feed (premium breathing room)

### Grid & Container
- Mobile: 2-column product grid
- Tablet: 3-column product grid
- Desktop: 4-column product grid (premium catalogs rarely go to 5 -- larger images carry the editorial mood)
- Editorial / lookbook banner: full-bleed (edge-to-edge) on mobile, max 1280px on desktop
- The grid is the selection. Avoid masonry -- each designer piece gets the same rectangle.

### Whitespace Philosophy
- **The frame breathes**: White space around imagery is the system's primary breathing room. Premium positioning earns wider section gaps than a fast-fashion grid.
- **Section breaks earn their space**: 56-80px vertical gaps mark editorial shifts; within a section 16-24px is enough.
- **Don't crowd the garment**: Image padding stays minimal so the photograph touches its frame, but the surrounding catalog never feels cramped.

### Border Radius Scale
- Sharp (0px): Product cards, editorial tiles, buttons, inputs, badges -- the system default
- Note: W Concept is a *zero-radius* system. Rounded corners read as casual / mass-market -- anything over 4px breaks the concept-store mood.

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow, no border | Page background, product images, default state |
| Hairline (Level 1) | 1px solid `#eeeeee` | Card boundary, grid separator, header bottom border |
| Soft (Level 2) | `0px 2px 8px rgba(0,0,0,0.06)` | Sticky header on scroll, dropdown menus |
| Floating (Level 3) | `0px 4px 16px rgba(0,0,0,0.10)` | Bottom sheets, modal dialogs, snackbar |

**Shadow Philosophy**: W Concept is allergic to elevation. The default product card has no shadow and no border -- its boundary is the photograph's edge. Shadows appear only when an element must visibly detach (sticky bar, modal). The system never uses tinted shadows, and drop-shadows on product imagery are forbidden -- they read as cheap e-commerce, not concept-store editorial.

## 7. Do's and Don'ts

### Do
- Use `#000000` for primary CTAs -- black is the brand's saturation
- Keep border-radius at 0px on product surfaces and chrome
- Use weight 700 to create emphasis, not larger sizes or a second color
- Apply negative letter-spacing (`-0.2px` to `-0.4px`) on Korean type
- Let the designer photograph be the only color in the layout
- Use `#ff4600` for sale percentages and time-limited drops only
- Default to 2-column mobile / 4-column desktop grid -- the selection is the page
- Give the home feed generous 56-80px section gaps -- premium breathing room

### Don't
- Don't introduce a brand blue, green, or pastel -- the palette is mono plus one orange-red
- Don't round corners -- 0px is the brand; rounded reads as mass-market
- Don't add drop-shadows to product imagery
- Don't crowd the catalog with red urgency banners -- W Concept is curatorial, not a flash-sale site
- Don't use `#ff4600` for navigation, decoration, or non-sale CTAs
- Don't switch to a custom display typeface -- Pretendard at 700 is the headline voice
- Don't soften the black -- `#000000`, not `#1a1c20`. Concept-store contrast requires it.

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <768px | 2-column grid, full-bleed editorial, bottom tab bar |
| Tablet | 768-1024px | 3-column grid, side-rail filters appear |
| Desktop | >1024px | 4-column grid, max content width ~1280px, persistent category nav |

### Touch Targets
- Primary CTA buttons: 48-52px height
- Filter chips: 36px height
- Bottom tab bar items: 56px height
- Product card tap area: full card (image + metadata)

### Collapsing Strategy
- Desktop side-rail filters → mobile bottom-sheet filter (`필터` opens full-height sheet)
- Desktop 4-column grid → mobile 2-column grid
- Editorial banners stay full-bleed at every breakpoint -- they never get gutters

### Image Behavior
- Product images: 3:4 portrait, 0px radius, lazy-loaded with `#f6f6f6` placeholder
- Brand logos: square 1:1, 0px radius
- Editorial covers: 3:4 or 16:9 depending on placement, full-bleed at the breakpoint

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Pure Black (`#000000`)
- CTA Hover: Soft Black (`#222222`)
- Background: Pure White (`#ffffff`)
- Heading text: Pure Black (`#000000`)
- Body text: Gray 700 (`#555555`)
- Metadata: Gray 500 (`#777777`)
- Placeholder: Gray 400 (`#999999`)
- Hairline border: Gray 100 (`#eeeeee`)
- Input border: Gray 200 (`#e2e2e2`)
- Disabled: Gray 300 (`#bababa`)
- Sale / accent: Orange-Red (`#ff4600`)
- Surface fill: Gray 50 (`#f6f6f6`)

### Example Component Prompts
- "Create a W Concept product card: white background, no border, no shadow, 0px radius. Image is 3:4 portrait at top, no radius, #f6f6f6 placeholder. Below: 8px gap, brand name 14px Pretendard 700 #000000, product title 14px 400 #555555 (2 lines, ellipsis), 4px gap, price line: sale percentage 14px 700 #ff4600 inline before final price 14px 700 #000000, original price strikethrough 13px 400 #999999. Letter-spacing -0.2px."
- "Build a primary CTA: #000000 background, white text, 16px weight 700 Pretendard, padding 16px 24px, 0px radius, full-width on mobile. Hover #222222. No icon."
- "Design a filter chip bar: horizontal scroll, 8px gap. Default: white bg, 1px solid #e2e2e2, 13px/500 #222222, 0px radius, 8px 14px padding. Selected: #000000 bg, white text, 13px/700."
- "Create a W Concept header: white bg, 60px height, 1px bottom border #eeeeee. Left: W CONCEPT wordmark 700 #000000. Center: search bar #f6f6f6 bg, 0px radius, 14px placeholder #999999. Right: heart, cart, profile icons 24px stroke #000000."
- "Design a sale badge: text-only, no background, no border. '-40%' in 14px Pretendard 700 #ff4600, inline with the product price."

### Iteration Guide
1. Default surface is `#ffffff`, default text is `#000000` -- never `#1a1c20`
2. Orange-red `#ff4600` is the only chromatic accent -- only for sale / promotion
3. Border-radius is 0px everywhere on product surfaces and chrome
4. Body 14-16px, emphasis via 700 weight not larger size
5. Korean letter-spacing `-0.2px` to `-0.4px` for editorial compactness
6. No shadows on product cards -- hairline `#eeeeee` is the boundary
7. The photograph is always the brightest thing on screen -- chrome yields

---

## 10. Voice & Tone

W Concept speaks like a fashion editor curating a selection, not a marketer pushing inventory. The voice is restrained, declarative, and trusts the photograph to do the persuading. Korean copy favors clean editorial endings (`-요`, bare-stem imperatives like `구매하기`, `더 보기`) over both the overly formal `-ㅂ니다` and the breathless hype of mass-market commerce. Sentences are short. A drop reads `단독 발매`, not `놓치면 후회할 단독 특가 대박 찬스!`. English surfaces (the W Concept global site / app) inherit the same compactness -- *"Seoul-fully created"*, *"Designer fashion"* -- never *"Premium luxury experiences"*.

| Context | Tone |
|---|---|
| CTAs | Bare-stem Korean (`구매하기`, `장바구니`, `팔로우`, `더 보기`) / clipped English (`Shop`, `Buy`, `Follow`) |
| Sale flags | One phrase + percentage (`단독 ~40%`, `오늘의 딜`). Never `초특가 폭탄 세일!!!`. |
| Product titles | Brand name on its own line in bold, then the literal product name. No marketing adjectives. |
| Empty states | One editorial line + one neutral suggestion (`아직 좋아한 상품이 없어요` + `상품 둘러보기`). Never `데이터가 없습니다`. |
| Error messages | Specific, actionable, blameless (`주소를 다시 확인해 주세요`). No `죄송합니다` boilerplate. |
| Editorial / lookbook | Magazine-style headline + 1-line dek (`주목해야 할 브랜드들`). Korean-English mix allowed. |
| Sign-up / onboarding | Short -- one screen, one input, one CTA. No onboarding tour. |

**Forbidden phrases.** `초특가`, `대박 세일`, `놓치면 후회`, `지금 바로 클릭!!!`, `데이터가 없습니다`, `오류가 발생했습니다`, `불편을 드려 죄송합니다`. English bans: `amazing deals`, `must-have`, `luxury lifestyle`, `limited time only!!!`. Emoji are allowed in community / styling posts, never in CTAs, sale flags, error messages, or chrome.

**Voice samples.**

- `Seoul-fully created` — global positioning line. <!-- cited: us.wconcept.com/brands.html, 2026-05 -->
- `Designer fashion` — global surface tagline pattern. <!-- cited: us.wconcept.com/brands.html, 2026-05 -->
- `주목해야 할 브랜드들` — home-feed editorial section header. <!-- cited: live display.wconcept.co.kr, 2026-05 -->
- `구매하기` / `장바구니` — primary CTA pair on product detail page. <!-- illustrative: standard W Concept CTA pattern -->
- `단독 발매` — exclusive-drop flag. <!-- illustrative: standard W Concept promo pattern -->

## 11. Brand Narrative

W Concept (W컨셉) launched in 2008 as an online platform built around a single editorial idea: surface emerging Korean designers to a fashion-literate audience that legacy department stores ignored. Where the big Korean malls (Lotte, Shinsegae) gatekept shelf space for established labels, W Concept's premise was curatorial -- a *concept* store online, hence the name. It grew into one of Korea's leading designer-fashion e-commerce platforms, described as a home for thousands of Korean designers and brands, predominantly aimed at fashion-conscious shoppers in their 20s and 30s ([Krendly — W Concept overview](https://krendly.com/w-concept/), [us.wconcept.com/brands.html](https://us.wconcept.com/brands.html)).

The platform was acquired by **SSG.COM (Shinsegae)** in 2021, anchoring it inside one of Korea's largest retail groups while keeping its independent-designer identity intact, and has since pushed a global expansion (a US site and a "W Concept Global — K-Fashion" app) to export Korean designer fashion abroad ([Korean Buddies — W Concept platform](https://www.koreanbuddies.com/shopping-guides/w-concept), [App Store — W Concept Global](https://apps.apple.com/us/app/w-concept-global-k-fashion/id6458788225)). The app relaunch refreshed the brand identity, updating the wordmark and splash-page treatment while holding to the monochrome editorial system.

What W Concept refuses: the rainbow-banner urgency of nationwide marketplaces (Coupang, Gmarket, 11st), the lifestyle-blog warmth of Western boutique e-com, and the algorithmic-feed social-commerce UX. The catalog stays the homepage; the designer photograph leads; black wordmark on white canvas; sharp corners; one hot orange-red used only when something is actually on sale. The monochrome is not minimalism for its own sake -- it is the visual expression of a curator's confidence: a selection worth showing doesn't need decoration to sell it.

## 12. Principles

1. **Black is the brand, not the accent.** `#000000` is the primary CTA fill, the wordmark, the chrome -- not a hover state. Concept-store premium earns trust through absolute contrast, not softened grays. *UI implication:* never substitute `#222` for a primary CTA fill; reserve grays for body text only.
2. **One accent, scarcely used.** Orange-red `#ff4600` exists almost exclusively on discount percentages and time-limited drops. It is never decoration, never a brand color, never on navigation. *UI implication:* if a designer adds the accent to anything that is not a sale or an error, reject — there is no second brand color.
3. **Photograph first, chrome second.** Every product card's job is to deliver the designer's image. Borders, shadows, and radii are subtractive — anything that competes with the photograph loses. *UI implication:* default product cards have no border, no shadow, no radius.
4. **Zero radius is the concept.** Sharp corners read as gallery / editorial; rounded reads as casual mass-market. *UI implication:* if a card or button grows an 8px radius, it has drifted toward fast-fashion and should be flattened to 0px.
5. **Emphasis through weight, never a second hue.** Pretendard 400 / 600 / 700 build the entire hierarchy. *UI implication:* if a layout reaches for a colored label to create rank, restate with weight=700 instead.
6. **Premium breathes wider.** Section gaps run 56-80px on the home feed — more generous than a fast-fashion grid. *UI implication:* never compress editorial sections to fit more above the fold; the spacing is the premium signal.
7. **Letter-spacing is the editorial whisper.** All Korean type carries `-0.2px` to `-0.4px`. Invisible individually, unmistakable in aggregate. *UI implication:* every Korean type token specifies negative tracking; positive tracking reads as foreign / corporate.

## 13. Personas

*Personas are fictional archetypes informed by W Concept's publicly described user base (Korean Gen Z / millennial fashion-conscious shoppers in their 20s–30s), not individual people.*

**유진 (Yujin), 27, Seoul.** Works in advertising in 성수동. Opens W Concept to discover small Korean designer labels before they blow up — treats the home feed like a fashion magazine, scrolls for the "주목해야 할 브랜드들" section first. Will pay full price for a 단독 drop; waits for a sale on basics. Cares about the lookbook photography as much as the garment.

**도현 (Dohyun), 31, Seoul.** Product designer, lives in 한남동. Buys minimal-wardrobe pieces — neutral knitwear, well-cut trousers. Finds the monochrome interface calming next to the rainbow chaos of mass marketplaces. Reads the brand story before adding to cart; values that W Concept curates rather than dumps inventory.

**소연 (Soyeon), 24, Busan.** University student. Discovered W Concept through Instagram designer features. Browses on mobile, mostly for inspiration, buys 2-3 times a season when a sale percentage in orange-red catches her eye. Trusts that the discount is real because the rest of the site never shouts.

**Hana, 29, Los Angeles.** Korean-American, shops the W Concept Global app for K-fashion brands unavailable in the US. Expects the same severe monochrome editorial layout in English — a global site that looked like a generic Western boutique would read as a knockoff to her.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no liked items)** | Single editorial line (`아직 좋아한 상품이 없어요`) in 14px/400 `#555555`, 12px gap, secondary CTA `상품 둘러보기` in outline-black-button style. No illustration, no mascot. |
| **Empty (search no results)** | One line `'{검색어}'에 대한 결과가 없어요` in 14px/400 `#555555`, then 8px gap, recommended-brands grid below. Never a full-screen empty illustration. |
| **Empty (filter cleared)** | `조건에 맞는 상품이 없어요` in 14px/400 `#999999`. No CTA — user resets filters. |
| **Loading (catalog grid)** | Skeleton blocks at `#f6f6f6` matching the card layout: 3:4 image rectangle, two short text lines, one price line. Shimmer 1.2s, 6% white highlight. No spinner overlay. |
| **Loading (infinite scroll)** | 2-4 skeleton cards appended at the grid bottom. Existing cards stay fully rendered. No spinner. |
| **Loading (cart action)** | Inline button text swaps to a 24px `#ffffff` spinner on the existing `#000000` button — geometry stays identical for frame-stability. |
| **Error (inline form)** | Input border becomes `#ff4600` 1px, helper text 13px/400 `#ff4600` 6px below. One actionable sentence (`주소를 다시 확인해 주세요`). |
| **Error (toast)** | `#000000` background, white 14px/500 text, 0px radius, 3s auto-dismiss. Bottom of screen, 16px above bottom tab bar. One sentence. No icon. |
| **Error (network / blocking)** | Full-screen centered: 16px/700 `#000000` headline, 14px/400 `#777777` subline, retry button in primary-black style. No illustration. |
| **Success (added to cart)** | Bottom-edge slide-up snackbar: `#000000` bg, white 14px/500 text `장바구니에 담겼어요`, white-outline `장바구니 보기` text-button on the right. 3s auto-dismiss. |
| **Success (purchase complete)** | Dedicated confirmation screen, not a toast. 24px/700 `#000000` `주문이 완료되었어요`, order summary block (white bg, hairline `#eeeeee` border), primary-black `주문 내역 보기` CTA. No celebratory animation. |
| **Skeleton** | `#f6f6f6` blocks at exact card dimensions. Shimmer 1.2s. Brand name and price slots stay blank until resolved — never inferred placeholders. |
| **Disabled** | Button bg drops to `#bababa`, text stays `#ffffff`. No outline change, no opacity tricks. |

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

**Spring stance.** Spring and overshoot easings are forbidden on W Concept product surfaces. The brand is concept-store editorial; bouncy motion reads as toy-like or as a social-shopping app, neither of which W Concept wants to be. The catalog grid should feel like a magazine page turning — controlled, predictable, never elastic. The single licensed exception is the native pull-to-refresh, which inherits the OS default spring because overriding it feels worse than accepting it.

**Signature motions.**

1. **Product card tap.** Image dims to 92% opacity on press (`motion-fast / ease-standard`), releases on tap-up before navigation. The card does not scale — scale on a gallery grid breaks the editorial metaphor.
2. **Filter sheet presentation.** Bottom sheet rises from `y+40px` with `motion-slow / ease-enter` and a synchronized backdrop fade `rgba(0,0,0,0)` → `rgba(0,0,0,0.5)`. Dismissal uses `motion-fast / ease-exit` — leaving is lighter than entering.
3. **Add-to-cart snackbar.** Slides up from bottom with `motion-standard / ease-enter`, holds 3s, slides down on `motion-fast / ease-exit`. No bounce.
4. **Tab switch (home → category → wishlist).** Cross-fade only, `motion-standard` — sliding would imply an axial relationship between modes that doesn't exist.
5. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant`. Cross-fades replace slides. The catalog stays fully usable; just less kinetic.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 — Direct verification (MCP playwright, 2026-05-27):
- https://display.wconcept.co.kr/rn/women (live women's display surface;
  redirected from www.wconcept.co.kr). Confirmed: body font-family
  "Pretendard Variable", Pretendard, ... sans-serif; body color
  rgb(0,0,0); base size 16px; dominant chrome color #000000 (~7,058
  occurrences); single saturated accent rgb(255,70,0) = #ff4600
  (~886 occurrences) on sale/promo; surface fill #f6f6f6; hairline
  #eeeeee; editorial tiles 0px radius. Note: www.wconcept.co.kr returns
  403 to WebFetch but loads via browser, redirecting to the RN display
  host.

Tier 2 — Press / secondary (WebSearch, 2026-05):
- https://krendly.com/w-concept/ — 2008 founding, Korean-designer
  curation platform, 20s–30s target, premium positioning.
- https://us.wconcept.com/brands.html — global "Seoul-fully created /
  Designer fashion" positioning lines.
- https://www.koreanbuddies.com/shopping-guides/w-concept — multinational
  platform, SSG.COM (Shinsegae) acquisition (2021) context.
- https://apps.apple.com/us/app/w-concept-global-k-fashion/id6458788225
  — W Concept Global app, refreshed brand identity / new wordmark.

Personas (§13) are fictional archetypes informed by W Concept's publicly
described user base (Korean Gen Z / millennial designer-fashion shoppers).
Any resemblance to specific individuals is unintended.

Interpretive claims (editorial, not documented W Concept statements):
- "The monochrome is not minimalism for its own sake … a curator's
  confidence" (§11 closing) — editorial reading of the design.
- The spring-forbidden stance (§15) — derived from the overall editorial
  brand posture, not a documented W Concept motion rule.
- The 7 numbered principles (§12) — synthesized from observed surface
  behavior + the platform's curatorial positioning; not a published list.
- Token-level component geometry (button padding, badge radius) is
  reconciled from the live monochrome surface treatment + Pretendard
  base; re-verify component internals in a stable session before
  treating as authoritative DS specs.
-->

---

**Verified:** 2026-05-27 (omd:add-reference initial create — Tier 1 live inspect / Tier 2 press confirmed)
**Tier 1 sources:** display.wconcept.co.kr/rn/women (live playwright inspect — Pretendard Variable, body `#000` on `#fff`, base 16px, dominant `#000000`, single accent `#ff4600`, surface `#f6f6f6`, hairline `#eeeeee`, 0px radius).
**Tier 2 sources:** getdesign.md/wconcept — not checked. styles.refero.design — not checked. Krendly + us.wconcept.com + Korean Buddies + App Store (2008 founding, designer-curation positioning, SSG.COM acquisition, global app).
**Style ref:** `musinsa` (KR monochrome commerce neighbor format retained for tone scaffolding).
**Conflicts unresolved:** none. Assumed primary `#000000` confirmed by live inspect. Live accent verified as `#ff4600` (orange-red), documented as the single sale hue. Component-internal geometry reconciled from surface treatment; re-run Tier 2 (getdesign/refero) to lock token values.
