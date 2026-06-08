---
id: ohouse
name: Ohouse
country: KR
category: consumer-tech
homepage: "https://ohou.se"
primary_color: "#000000"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=ohou.se&sz=128"
verified: "2026-05-15"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#35c5f0"
    primary-pressed: "#1fb1db"
    ink: "#222222"
    canvas: "#ffffff"
    blue-tint: "#e8f7fd"
    blue-light: "#7fd9f5"
    blue-deep: "#0e8fb8"
    sale: "#fa3e3e"
    error: "#e53935"
    success: "#1caf5c"
    warning: "#f5a623"
    info: "#3b82f6"
    star: "#ffb800"
    gray-50: "#fafafa"
    gray-100: "#f5f5f5"
    gray-200: "#eeeeee"
    gray-300: "#dddddd"
    gray-500: "#aaaaaa"
    gray-600: "#888888"
    gray-700: "#555555"
  typography:
    family: { sans: "Pretendard Variable", mono: "Pretendard Variable" }
    display: { size: 32, weight: 700, lineHeight: 44, tracking: "-0.02em", use: "Hero headlines, campaign banners" }
    h1: { size: 24, weight: 700, lineHeight: 33, tracking: "-0.02em", use: "Page titles, section headers" }
    h2: { size: 20, weight: 700, lineHeight: 28, tracking: "-0.01em", use: "Card group headings" }
    h3: { size: 18, weight: 600, lineHeight: 26, tracking: "-0.01em", use: "Sub-sections, modal titles" }
    title: { size: 16, weight: 600, lineHeight: 24, use: "Card titles, nav labels" }
    body: { size: 14, weight: 400, lineHeight: 22, use: "Standard reading text" }
    caption: { size: 13, weight: 400, lineHeight: 19, use: "Metadata, review counts" }
    small: { size: 12, weight: 400, lineHeight: 17, use: "Timestamps, fine print" }
    price-lg: { size: 18, weight: 700, lineHeight: 26, tracking: "-0.01em", use: "Featured product price, tnum" }
  spacing: { sm: 8, md: 12, base: 16 }
  rounded: { sm: 4, md: 8, lg: 12, xl: 16, full: 9999 }
  shadow:
    none: "none"
  components:
    button-primary: { type: button, bg: "#35c5f0", fg: "#ffffff", radius: 8, font: "16px/700", use: "Primary CTA (구매하기, 장바구니 담기)" }
    button-outline: { type: button, bg: "#ffffff", fg: "#222222", radius: 8, use: "Secondary action (관심상품, 공유하기)" }
    button-weak: { type: button, bg: "#f5f5f5", fg: "#222222", radius: 8, use: "Tertiary, in-card buttons" }
    button-discount: { type: button, bg: "#fa3e3e", fg: "#ffffff", radius: 8, use: "Sale-emphasis CTA only" }
    button-critical: { type: button, bg: "#ffffff", fg: "#e53935", radius: 8, use: "Destructive action (삭제, 취소)" }
    search-field: { type: input, bg: "#f5f5f5", fg: "#222222", radius: 9999, padding: "0 16px", use: "Top-bar search" }
    text-field: { type: input, bg: "#ffffff", fg: "#222222", radius: 8, padding: "0 14px", font: "14px/400", use: "Form field" }
    product-card: { type: card, bg: "#ffffff", radius: 12, padding: "12px", use: "Product grid tile" }
    ugc-card: { type: card, bg: "#ffffff", fg: "#ffffff", radius: 12, use: "UGC photo card, full-bleed image" }
    story-card: { type: card, bg: "#ffffff", fg: "#222222", radius: 16, padding: "16px", use: "Story/project card" }
    discount-badge: { type: badge, bg: "#fa3e3e", fg: "#ffffff", radius: 4, padding: "2px 6px", font: "12px/700", use: "Sale-percentage overlay" }
    new-badge: { type: badge, bg: "#35c5f0", fg: "#ffffff", radius: 4, font: "11px/700", use: "NEW on fresh products" }
    shipping-pill: { type: badge, bg: "#e8f7fd", fg: "#0e8fb8", radius: 9999, padding: "2px 8px", font: "11px/600", use: "무료배송 inline" }
    rank-badge: { type: badge, bg: "#222222", fg: "#ffffff", radius: 4, font: "12px/700", use: "BEST / 1위 rank chip" }
    chip: { type: tab, bg: "#ffffff", fg: "#222222", radius: 9999, padding: "0 14px", font: "13px/500", use: "Filter/category chip", active: "#35c5f0 bg, #ffffff text, no border" }
  components_harvested: true
---

# Design System Inspiration of Ohouse (오늘의집)

## 1. Visual Theme & Atmosphere

Ohouse's interface is the digital equivalent of flipping through a friend's home photo album with a shopping cart in hand -- warm, photography-first, aspirational without being precious. The page opens on a soft white canvas (`#ffffff`) leaning toward a faintly cream off-white (`#fafafa`) for section bands, with near-black headings (`#222222`) and the unmistakable Ohouse Blue (`#35C5F0`) -- a clear, clean cyan that carries the brand from the rounded-corner app icon onto every primary CTA. This isn't the trust-blue of fintech or the corporate-blue of enterprise SaaS; it's the open-window blue of a sunlit room, deliberately positioned next to warm neutrals so the photography stays the hero.

The design language is **content-led commerce**. Two card archetypes anchor every surface: the **UGC photo card** (a real Korean home, shot by the resident, surfaced as a square or 4:5 image with a tiny bookmark glyph) and the **product card** (white background, soft 12-16px radius, price in bold black, optional discount badge in red). Typography is Pretendard across web and Apple SD Gothic Neo on iOS / Roboto-derived on Android -- the same system-aware stack that Korean product teams have standardized around. The overall aesthetic is warm-neutral with a single cool accent: soft beiges and off-whites in section backgrounds, generous whitespace around imagery, and Ohouse Blue reserved for action moments. Where Karrot uses warm orange as its singular accent, Ohouse uses cool cyan -- but plays it against a warmer canvas, which is the brand's whole personality: a warm room with a clear blue sky outside the window.

**Key Characteristics:**
- Ohouse Blue (`#35C5F0`) as the singular brand accent -- clean cyan, app-icon legacy, used for primary CTAs and brand moments
- Photography-first layout -- UGC home photos and product shots dominate every surface, chrome recedes
- Pretendard-based system font stack on web; Apple SD Gothic Neo on iOS, Roboto on Android
- Warm-neutral canvas (`#ffffff` / `#fafafa` / `#f5f5f5`) -- never pure cool gray, never harsh black
- Two co-equal card archetypes: UGC photo card (lifestyle, square/4:5) and product card (commerce, white surface)
- Soft 8-16px radius on most surfaces; pill-shape (9999px) on chips and small badges
- Discount-red (`#FA3E3E`) reserved strictly for sale price emphasis -- never for errors, never for warnings
- Mobile-first at 375px baseline; bottom tab bar on app, sticky top nav on web

## 2. Color Palette & Roles

### Primary
- **Ohouse Blue** (`#35C5F0`): Primary CTA, active tab, brand solid backgrounds, app-icon hue. The clean cyan that defines every Ohouse touchpoint.
- **Ohouse Blue Pressed** (`#1FB1DB`): Pressed/hover state for primary buttons and links.
- **Near Black** (`#222222`): Primary heading and price text. Warm near-black, not pure `#000000`.
- **Pure White** (`#ffffff`): Card surface, page background, product card canvas.

### Brand Tints
- **Blue Tint** (`#E8F7FD`): Brand weak background, selected-row highlight, "saved" inline flash.
- **Blue Light** (`#7FD9F5`): Medium brand tint, progress indicators, decorative accents.
- **Blue Deep** (`#0E8FB8`): Deep cyan for emphasis on light backgrounds, link visited state.

### Semantic
- **Sale Red** (`#FA3E3E`): Discount price label, sale-percentage badge. **Brand-specific use only** -- not for errors.
- **Error Red** (`#E53935`): Form-error border, error toast text.
- **Success Green** (`#1CAF5C`): Order-confirmed states, "배송 완료" indicators.
- **Warning Amber** (`#F5A623`): Stock-low chips ("품절임박"), caution callouts.
- **Informative Blue** (`#3B82F6`): Inline info banners, link styling on body copy.

### Neutral Scale
- **Gray 50** (`#fafafa`): Section band background, alternating row fill.
- **Gray 100** (`#f5f5f5`): Input background, disabled fill, secondary surface.
- **Gray 200** (`#eeeeee`): Subtle borders, divider lines.
- **Gray 300** (`#dddddd`): Standard borders on cards and inputs.
- **Gray 500** (`#aaaaaa`): Placeholder text, muted icons.
- **Gray 600** (`#888888`): Caption text, metadata, secondary labels.
- **Gray 700** (`#555555`): Body copy, secondary headings.
- **Gray 900** (`#222222`): Primary heading and high-contrast text.

### Surface & Borders
- **Border Subtle** (`rgba(0,0,0,0.06)`): Soft card borders, barely-there separation.
- **Border Standard** (`#eeeeee`): Standard card and input borders.
- **Overlay** (`rgba(0,0,0,0.6)`): Modal and bottom-sheet backdrop.
- **Image Tint** (`rgba(0,0,0,0.04)`): Photo placeholder fill before image load.

## 3. Typography Rules

### Font Family
- **Primary**: `"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Noto Sans KR", Roboto, sans-serif`
- **Numeric / Price**: same stack with `font-feature-settings: "tnum"` for tabular price alignment in product grids
- **Design Principle**: System-font-first to keep user photography and product imagery as the visual hero. No custom display face -- the homes *are* the typography.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display | Pretendard | 32px | 700 | 44px | -0.02em | Hero headlines, campaign banners |
| H1 | Pretendard | 24px | 700 | 33px | -0.02em | Page titles, section headers |
| H2 | Pretendard | 20px | 700 | 28px | -0.01em | Card group headings |
| H3 | Pretendard | 18px | 600 | 26px | -0.01em | Sub-sections, modal titles |
| Title | Pretendard | 16px | 600 | 24px | 0em | Card titles, nav labels |
| Body | Pretendard | 14px | 400 | 22px | 0em | Standard reading text |
| Body Bold | Pretendard | 14px | 700 | 22px | 0em | Price (regular), emphasis |
| Caption | Pretendard | 13px | 400 | 19px | 0em | Metadata, review counts |
| Small | Pretendard | 12px | 400 | 17px | 0em | Timestamps, fine print |
| Price Large | Pretendard (tnum) | 18px | 700 | 26px | -0.01em | Featured product price |

### Principles
- **Three weights only**: Regular (400), Semibold (600), Bold (700). No light, no extra-bold -- the system stays restrained so imagery dominates.
- **Negative tracking on display**: Korean and Latin both render tighter at -0.01 to -0.02em on sizes 18px and above for visual density.
- **Tabular numerals on prices**: every price across product grids must use `tnum` so columns align without column-shift on scroll.
- **No all-caps treatments**: Korean doesn't have casing, and the brand never forces English copy into uppercase shouting.

## 4. Component Stylings

### Buttons

**Brand Solid (Primary CTA)**
- Background: `#35C5F0` (Ohouse Blue)
- Text: `#ffffff`
- Radius: 8px (standard), 12px (large/sticky-bottom), 9999px (pill in promotional contexts)
- Min-height: 52px (large), 44px (medium), 36px (small)
- Font: 16px weight 700 (large), 14px weight 600 (medium/small)
- Pressed: `#1FB1DB`
- Disabled: `#f5f5f5` background, `#aaaaaa` text
- Use: Primary actions ("구매하기", "장바구니 담기", "팔로우")

**Neutral Outline**
- Background: `#ffffff`
- Text: `#222222`
- Border: 1px solid `#dddddd`
- Radius: 8px
- Pressed: `#fafafa` background, `#aaaaaa` border
- Use: Secondary actions ("관심상품", "공유하기")

**Neutral Weak**
- Background: `#f5f5f5`
- Text: `#222222`
- Radius: 8px
- Pressed: `#eeeeee`
- Use: Tertiary actions, in-card buttons

**Critical / Discount Solid**
- Background: `#FA3E3E`
- Text: `#ffffff`
- Radius: 8px
- Use: Sale-emphasis CTAs only (never destructive). Destructive uses Critical Outline.

**Critical Outline**
- Background: `#ffffff`
- Text: `#E53935`
- Border: 1px solid `#E53935`
- Use: Destructive actions ("삭제", "취소")

### Inputs

**Search Field**
- Background: `#f5f5f5`
- Text: `#222222`, Placeholder: `#aaaaaa`
- Border: none (filled style)
- Radius: 9999px (pill) on top-bar search, 8px on form fields
- Height: 44px
- Padding: 0 16px with 20px leading search-icon `#888888`
- Focus: 2px solid `#35C5F0` ring

**Text Field (Form)**
- Background: `#ffffff`
- Border: 1px solid `#dddddd`
- Radius: 8px
- Height: 48px
- Padding: 0 14px
- Font: 14px weight 400, `#222222`
- Placeholder: `#aaaaaa`
- Focus: border `#35C5F0`, 2px focus ring `rgba(53,197,240,0.2)`
- Error: border `#E53935`, helper text 13px `#E53935` below

**Quantity Stepper**
- Background: `#ffffff`
- Border: 1px solid `#dddddd`
- Radius: 8px
- Buttons: 36x36px, `#222222` icons, pressed `#f5f5f5`

### Cards

**Product Card**
- Background: `#ffffff`
- Border: none (or 1px solid `rgba(0,0,0,0.06)` on dense grids)
- Radius: 12px
- Image: 1:1 aspect, 12px top radius matching card, subtle `rgba(0,0,0,0.04)` placeholder
- Padding: 12px (image bleeds to edges, text padded inside)
- Title: 14px weight 400, `#222222`, max 2 lines with ellipsis
- Brand: 12px weight 400, `#888888`
- Price: 16px weight 700, `#222222` (tnum)
- Discount: 13px weight 700, `#FA3E3E` for percent + 13px weight 400 strikethrough `#aaaaaa` for original
- Rating row: 12px weight 400, `#888888` with star glyph in `#FFB800`

**UGC Photo Card**
- Background: image fills entire surface
- Border: none
- Radius: 12px
- Aspect: 1:1 (grid) or 4:5 (feed)
- Overlay: bottom gradient `linear-gradient(180deg, transparent, rgba(0,0,0,0.5))` for caption legibility
- Caption: 14px weight 600, `#ffffff`, 2-line max
- Avatar: 24px circle, white 1px ring, in lower-left
- Bookmark glyph: top-right, 24px, `#ffffff` outline / `#35C5F0` filled when saved

**Story / Project Card**
- Background: `#ffffff`
- Border: 1px solid `rgba(0,0,0,0.06)`
- Radius: 16px
- Hero image 16:9 top, 16px radius matching card top
- Padding: 16px below image
- Title: 16px weight 700, `#222222`
- Snippet: 14px weight 400, `#555555`, 2-line max
- Meta row: 13px `#888888`

### Badges

**Discount Badge**
- Background: `#FA3E3E`
- Text: `#ffffff`
- Radius: 4px
- Padding: 2px 6px
- Font: 12px weight 700
- Use: Sale-percentage on product card image overlay (top-left)

**New Badge**
- Background: `#35C5F0`
- Text: `#ffffff`
- Radius: 4px
- Font: 11px weight 700, letter-spacing 0.02em
- Use: "NEW" on freshly listed products

**Free-Shipping Pill**
- Background: `#E8F7FD`
- Text: `#0E8FB8`
- Radius: 9999px
- Padding: 2px 8px
- Font: 11px weight 600
- Use: "무료배송" inline below price

**Best / Rank Badge**
- Background: `#222222`
- Text: `#ffffff`
- Radius: 4px
- Font: 12px weight 700
- Use: "BEST", "1위" rank chips on category bestseller grids

### Chips & Tags
- Background: `#ffffff` (unselected) with 1px solid `#dddddd`, Selected: `#35C5F0` background with `#ffffff` text and no border
- Radius: 9999px (pill)
- Height: 32px (small filter), 36px (category)
- Padding: 0 14px
- Font: 13px weight 500

### Navigation
- **Top nav (web)**: white background, 1px bottom border `#eeeeee`, sticky. Logo left, search center (pill input), category mega-menu, cart + profile icons right.
- **Bottom tab bar (app)**: 5 tabs (홈 / 콘텐츠 / 사진 / 쇼핑 / 마이). White background, top border `rgba(0,0,0,0.06)`. Active tab icon + label `#35C5F0`, inactive `#888888`. Tab height 56px + safe-area inset.
- **App bar**: white, centered title 16px weight 700, optional back arrow left, optional cart/share icons right.

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Scale: 4px (x1), 8px (x2), 12px (x3), 16px (x4), 20px (x5), 24px (x6), 32px (x8), 40px (x10), 48px (x12), 64px (x16), 80px (x20)
- Global gutter: 16px on mobile, 24px on tablet, 32px on desktop
- Card-to-card vertical: 12px in dense feeds, 16px in standard grids, 32px between sections

### Grid & Container
- Mobile (<768px): full-width, 16px gutter, 2-column product grid
- Tablet (768-1024px): 24px gutter, 3-column product grid, 2-column UGC photo grid
- Desktop (>1024px): max-width 1200px content, 32px gutter, 4-column product grid, 3-column UGC photo grid
- Featured editorial blocks: full-bleed hero with content max-width 960px

### Whitespace Philosophy
- **Imagery breathes, chrome recedes**: photography is the brand, so cards have minimal borders and generous internal padding (12-16px) around each image.
- **Section bands**: alternating `#ffffff` / `#fafafa` section backgrounds give scannable rhythm without hard dividers.
- **Grouped by proximity**: meta-info sits 4-8px from its parent, distinct sections separate by 32-40px.

### Border Radius Scale
- Micro (4px): Badges, small chips
- Standard (8px): Buttons, inputs, secondary cards
- Comfortable (12px): Product cards, UGC photo cards, primary surfaces
- Large (16px): Story cards, modal dialogs, featured editorial blocks
- XLarge (24px): Bottom-sheet top corners, prominent promotional cards
- Pill (9999px): Filter chips, search bar, avatars, free-shipping pills

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline elements, section bands |
| Subtle (s1) | `0px 1px 2px rgba(0,0,0,0.04)` | Hovered product card, subtle lift |
| Standard (s2) | `0px 4px 12px rgba(0,0,0,0.08)` | Floating cards, dropdowns, popovers |
| Prominent (s3) | `0px 8px 24px rgba(0,0,0,0.12)` | Bottom sheets, modals, sticky bottom CTAs |
| Floating (s4) | `0px 12px 32px rgba(0,0,0,0.16)` | Floating action button, image zoom overlay |

**Shadow Philosophy**: Shadows are minimal and warm-neutral -- pure black with low opacity, never tinted, never brand-blue. Photography itself provides most of the visual depth, so chrome elevation must stay quiet enough that an actual living-room photo on a card reads as the deepest layer on the screen.

## 7. Do's and Don'ts

### Do
- Use Ohouse Blue (`#35C5F0`) as the singular brand accent -- one primary CTA per viewport, it should feel airy
- Stick to the 4px spacing grid -- every measurement should be a multiple of 4px
- Keep product cards quiet so the product photo carries weight; let the image be the hero, not a decorative border
- Use `tnum` for prices -- tabular numerals keep KRW columns visually aligned across product grids
- Reserve `#FA3E3E` Sale Red strictly for discount price emphasis; use `#E53935` Error Red for errors
- Use Pretendard with -0.01 to -0.02em tracking on headings 18px and up
- Maintain the alternating `#ffffff` / `#fafafa` section rhythm on long scrolls
- Show free-shipping (무료배송), rating count, and brand name on every product card -- they are baseline trust metadata

### Don't
- Don't tint shadows with brand blue -- shadows stay neutral so the cyan accent stays special
- Don't use pure black (`#000000`) -- always `#222222` for text, `#888888` for captions
- Don't put two primary CTAs on the same screen -- if there are two, one demotes to outline
- Don't use Sale Red on error states or Error Red on discount labels -- the two reds carry different meanings
- Don't add custom display fonts -- the system stack is intentional, photography is the brand voice
- Don't crop user photos with hard radius greater than 12px on grids; UGC integrity matters
- Don't use heavy borders on product cards -- 1px `rgba(0,0,0,0.06)` is the maximum, often none
- Don't use cool gray for section backgrounds -- always warm-neutral (`#fafafa`, never `#f4f6f8`)

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <480px | 2-column product grid, single-column UGC feed, 16px gutter, bottom tab bar |
| Phablet | 480-768px | 2-column product grid, 2-column UGC grid, 16px gutter |
| Tablet | 768-1024px | 3-column product grid, 2-column UGC grid, 24px gutter |
| Desktop | 1024-1440px | 4-column product grid, 3-column UGC grid, 32px gutter, sticky top nav |
| Wide | >1440px | Max-width 1200px content centered, no further column expansion |

### Touch Targets
- Buttons: 52px (large), 44px (medium), 36px (small)
- Tab bar items: 56px height, centered icon + label
- Product card tap surface: entire card (image + meta), minimum 280px tall on mobile
- Bookmark / heart icons: 44x44px touch area even when icon is 24px

### Collapsing Strategy
- Top nav: full mega-menu on desktop → hamburger + search on mobile
- Sticky bottom CTA on product detail: full-width primary button + secondary cart icon, safe-area inset
- Image carousels: horizontal scroll with page-dot indicators, swipe-to-advance on touch
- Filter bar on category page: horizontal-scroll chips on mobile, sidebar on desktop

### Image Behavior
- Product image: 1:1 aspect, 12px radius, lazy-load with `rgba(0,0,0,0.04)` placeholder fill
- UGC home photo: 1:1 (grid) or 4:5 (feed), 12px radius, no crop on portrait orientation
- Hero banner: 16:9 on desktop, 4:3 on tablet, 1:1 on mobile -- art-directed crops
- Avatar: 24-40px circle, 1px white ring on photo overlay contexts

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Ohouse Blue (`#35C5F0`)
- CTA Pressed: Deep Cyan (`#1FB1DB`)
- Background: Pure White (`#ffffff`)
- Section band: Off-white (`#fafafa`)
- Heading text: Near Black (`#222222`)
- Body text: Dark Gray (`#555555`)
- Caption text: Medium Gray (`#888888`)
- Placeholder: Light Gray (`#aaaaaa`)
- Border: Soft Gray (`#dddddd`) / Subtle (`#eeeeee`)
- Disabled bg: Light Fill (`#f5f5f5`)
- Sale emphasis: Sale Red (`#FA3E3E`)
- Error: Error Red (`#E53935`)
- Success: Green (`#1CAF5C`)
- Warning: Amber (`#F5A623`)

### Example Component Prompts
- "Create a product card: white background, 12px radius, no border. 1:1 image at top with 12px top radius. Below: 14px weight 400 title `#222222` (2-line truncate), 12px weight 400 brand `#888888`, then price row -- 13px weight 700 `#FA3E3E` discount percent, 16px weight 700 `#222222` price (tnum), strikethrough 13px `#aaaaaa` original. Star + rating count 12px `#888888`."
- "Build a primary CTA: `#35C5F0` background, white 16px weight 700 text, 52px height, 12px radius, full-width sticky bottom with safe-area padding. Pressed: `#1FB1DB`. Disabled: `#f5f5f5` bg, `#aaaaaa` text."
- "Design a UGC photo card: square image fill, 12px radius. Bottom gradient `linear-gradient(180deg, transparent, rgba(0,0,0,0.5))`. Caption white 14px weight 600 (2-line max). Avatar 24px circle with 1px white ring lower-left. Bookmark glyph top-right 24px white outline."
- "Create a search bar: `#f5f5f5` filled pill, 9999px radius, 44px height, 16px h-padding, 20px leading magnifier glyph `#888888`. Placeholder 14px weight 400 `#aaaaaa`. Focus: 2px `#35C5F0` ring."
- "Design a filter chip row: horizontal-scroll, 8px gap, 16px h-padding. Each chip 32px height, 9999px radius, 14px h-padding. Default: white bg, 1px `#dddddd` border, 13px weight 500 `#222222` text. Selected: `#35C5F0` bg, white text, no border."

### Iteration Guide
1. Primary color is `#35C5F0` only -- one CTA per viewport, it must feel airy
2. All spacing snaps to 4px grid: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80
3. Border-radius defaults: 8px buttons/inputs, 12px product/UGC cards, 16px story cards, 9999px chips/search
4. Two reds, two meanings: `#FA3E3E` for sale, `#E53935` for errors -- never swap
5. Pretendard with -0.01 to -0.02em tracking on display sizes; tnum on every price
6. Photography is the hero -- card chrome stays minimal, shadows stay neutral
7. Mobile-first at 375px → 4-column desktop; bottom tab bar on app, sticky top nav on web
8. Warm-neutral canvas: `#fafafa` section bands, never cool gray

---

## 10. Voice & Tone

Ohouse speaks like a friend with great taste who just opened her front door and waved you in -- warm, observational, never preachy, allergic to anything that sounds like a furniture catalog. The voice assumes the reader is already in the middle of imagining a room, not buying a SKU. It stays in everyday Korean sentence endings (`-요`, `-어요`) and reaches for sensory verbs (`담다`, `채우다`, `머무르다`) instead of marketing verbs (`혁신하다`, `완성하다`). English surfaces (Ohouse US, en/JP) mirror this in plain, present-tense English -- *"the journey of turning your envisioned life into a reality within a space"* on the corporate page, not *"premium home solutions for the modern lifestyle"*.

| Context | Tone |
|---|---|
| CTAs | Short verb-first Korean (`구매하기`, `담기`, `팔로우`, `공유하기`) / plain English (`Shop`, `Save`, `Follow`) |
| Empty states | One warm line acknowledging the absence + one low-pressure suggestion. Never `데이터가 없습니다`. |
| Error messages | Specific, blameless, actionable. Prefer `잠시 후 다시 시도해 주세요` over `오류가 발생했습니다`. |
| Success toasts | Past-tense single sentence (`스크랩에 저장했어요`). Quiet, not celebratory. |
| Product copy | Sensory and spatial -- describe how the piece sits in a room, not its specs in isolation. |
| UGC captions (system-generated) | First-person from the resident's perspective, never branded marketing voice. |
| Trust & safety | Calm, factual, never fearmongering. Returns and shipping copy is brief and concrete. |
| Onboarding | One screen, one idea, one action. No carousel of features. |

**Forbidden phrases.** `불편을 드려 죄송합니다`, `데이터가 없습니다`, `오류가 발생했습니다`, `혁신적인`, `프리미엄`, `완벽한`. English boilerplate bans: `Oops, something went wrong`, `We apologize for the inconvenience`, `revolutionary`, `world-class`, `premium lifestyle solution`. Emoji are permitted sparingly in editorial copy and community comments, never in error messages, never in price displays, never in payment confirmations.

**Voice samples.**

- `라이프스타일 슈퍼앱, 오늘의집` -- homepage page-title (browser tab). <!-- verified: ohou.se page title 2026-05 -->
- `발견부터 쇼핑, 시공까지. 집의 변화가 필요한 모든 순간` -- homepage hero headline. <!-- verified via search-cited copy of ohou.se main hero, 2026-05 -->
- `쇼핑은 쉽게, 스타일링은 즐겁게!` -- store landing tagline. <!-- verified: store.ohou.se page title, 2026-05 -->
- `the journey of turning your envisioned life into a reality within a space` -- corporate brand definition (English). <!-- verified: bucketplace.com/en/, 2026-05 -->
- `Empowering people to live the life they love` -- corporate primary tagline. <!-- verified: bucketplace.com/en/, 2026-05 -->
- `집의 변화를 쉽게` -- 2025 rebrand brand-core value. <!-- verified: ZDNet Korea / Newsis / Byline Network, 2025-10 -->
- `모두, 오늘의집에 산다` -- 2025 rebrand campaign tagline ("Everyone Lives in Today's House"). <!-- verified: Edaily / Byline Network, 2025-10 -->
- `집의 형태 안에는 따뜻함과 진심이 담겼으며 부드러운 곡선은 일상 속 영감과 다정함을 표현합니다` -- 2025 logo design statement. <!-- verified: Design Compass, 2025-10 -->
- `<카테고리>에서 가장 사랑받은 집` -- illustrative editorial pattern (variable placeholder). <!-- illustrative: not verified as live Ohouse copy -->

## 11. Brand Narrative

Bucketplace -- the company behind Ohouse (오늘의집) -- was founded in **January 2014** by **이승재 (Lee Seungjae)**, a Seoul National University Chemical and Biological Engineering graduate (entered 2006, exchange program at Chulalongkorn University in 2009) who had previously co-founded smart-waste-management startup **Ecube Labs** in 2011 before pivoting into a totally different problem in 2014: not how cities throw things away, but how Koreans decide what to bring into their apartments. The founding insight was that Korean interior content -- before-and-after home tours, room layouts, the specific lamp someone had bought from a small online retailer -- was scattered across personal blogs, café posts, and Instagram, and the path from *"I want my room to look like this"* to *"I have bought the things in this photo"* was effectively broken. Ohouse rebuilt that path as a single product.

The model is famously called the **3C: Content → Community → Commerce**. The Ohouse Store opened in 2016, two years after the content product. By the time the company raised its **$182M Series D in May 2022 at a ~₩2조 (USD ~$1.4-1.6B) post-money valuation**, the company had become Korea's largest lifestyle super-app, with 20M+ downloads and an architecture in which every product page links back to the real homes that own that product, and every home tour links forward to the products in the photo. The Series D was led by **SoftBank Ventures Asia**, with **BRV Capital, Vertex Growth (Temasek-anchored), BOND, Korea Development Bank, IMM Investment, and Mirae Asset Capital** participating ([TechCrunch](https://techcrunch.com/2022/05/08/south-koreas-ohouse-lands-128m-to-add-ar-to-home-improvement-app/), [BusinessWire](https://www.businesswire.com/news/home/20220509005343/en/oHouse-Raises-$182M-Series-D-to-Power-the-Global-Adoption-of-its-Lifestyle-Super-App)). The 2022 raise made Ohouse a unicorn. By 2024 the company reported revenue of **₩287.9B (~$216M)** and **its first operating profit**.

The product geography expanded outward from Korea: a Japan beta launched July 2022, a Singapore acquisition (HipVan) opened Southeast Asia, and a US storefront (`ohouse.com` / `shop.ohouse.com`) targets Korean-American homeowners and Korean-design enthusiasts. Domestically the company added vertical services around the home itself -- moving, cleaning, installation, renovation, the offline showroom **Ohouse Bukchon (2025)**, and a kitchen brand (**Ohouse Kitchen, 2025**) -- pushing past pure marketplace into what the corporate page calls *"the journey of turning your envisioned life into a reality within a space"* ([bucketplace.com/en](https://www.bucketplace.com/en/)).

The 2025 rebrand simplified the longstanding app-icon-derived mark into a softer house silhouette with rounded curves; the official statement was that *"the house form contains warmth and sincerity, and its gentle curves express the inspiration and warmth of everyday life"*, and the new brand-core value is **"집의 변화를 쉽게"** -- *making changes to your home easy* ([ZDNet Korea](https://zdnet.co.kr/view/?no=20251014090830), [Design Compass](https://designcompass.org/en/2025/10/14/simplified-rebranding-of-ohouse/)). What remained constant across the rebrand was the visual logic the brand has always operated on: the photography of real Korean homes is the hero, and the chrome -- the cyan accent, the system font, the soft-radius cards -- is built to recede so those homes can do the talking.

## 12. Principles

1. **Photography is the brand. Everything else recedes.** The most important pixel on most Ohouse surfaces is a real Korean home, shot by the resident. UI chrome -- borders, shadows, accent fills -- exists to frame, not to compete. *UI implication:* if a card's chrome (border weight, badge size, button volume) reads louder than the photo it surrounds, the chrome is wrong; demote it.
2. **Content and commerce are one product, not two.** Every photo links forward to the products inside it; every product links back to the homes that contain it. The 3C loop (Content → Community → Commerce) is the whole architecture. *UI implication:* a product detail page must surface UGC photos that include the product; a UGC photo card must surface "shop the look" affordances. The two surfaces never live in separate silos.
3. **Ohouse Blue is rare and airy, never decorative.** `#35C5F0` appears on the primary CTA, the active tab, save/bookmark filled state, and a small set of brand moments. It does not tint backgrounds, does not edge cards, does not warm a hover. *UI implication:* one Ohouse Blue element per viewport in the primary flow; if a design has two primary CTAs competing on one screen, one must demote to outline.
4. **Two reds, two meanings.** `#FA3E3E` Sale Red is for discount percentage and sale-price emphasis. `#E53935` Error Red is for form errors and destructive confirmations. They never substitute for each other. *UI implication:* a discount badge and an error toast must never share a hue; if they do, the system has been violated.
5. **Warm-neutral canvas, cool-blue accent.** The canvas (white, off-white `#fafafa`, soft `#f5f5f5`) is always warm-neutral; the accent (Ohouse Blue) is the cool counterpoint. The contrast is the personality. *UI implication:* never introduce a cool-gray section background (`#f4f6f8`, `#f0f3f7`); the warmth of the canvas is what makes the blue feel like an open window.
6. **Tabular numerals on every price.** Korean product grids scroll fast; price columns must align without column-shift. `font-feature-settings: "tnum"` is a non-negotiable on every price token. *UI implication:* if a price is rendered without tnum, the column will visibly shift on scroll and break the grid; reject.
7. **System font, because homes are the typography.** Pretendard on web, Apple SD Gothic Neo on iOS, Roboto-derived on Android. No custom display face exists. *UI implication:* never embed a brand webfont on Ohouse-styled surfaces. Weight (700) and tracking (-0.02em) carry hierarchy; a display typeface would compete with the photography.
8. **Trust comes from quiet metadata, not loud badges.** Free shipping, rating count, brand name, review count -- these are baseline metadata on every product card. They are present, small, and never red, never starred-up, never animated. *UI implication:* trust metadata lives in 12-13px caption-gray (`#888888`); reserve red and animation for sale moments only.

## 13. Personas

*Personas are fictional archetypes informed by publicly described Ohouse user segments, not individual people.*

**서연 (Seoyeon), 29, 서울 마포구.** Recently moved into a 24평 전세 with her partner. Opens Ohouse 5-6 evenings a week, mostly to scroll the 집들이 feed before bed. Saves photos to a "거실 ref" scrap collection, cross-references the products in saved photos against her budget, and has bought maybe four things from the store -- but considers Ohouse her primary "before I buy anything for the house" search engine. Will not click on a product card without UGC photos attached.

**준호 (Junho), 34, 경기 성남시.** Self-taught DIY enthusiast in a single-family rental. Uses Ohouse for the 노하우 articles -- shelf installation, paint selection, curtain rod hardware -- more than for the store itself. Treats the platform as a Korean-specific Pinterest with a working buy button. Buys hand tools and brackets through the store; refuses to buy large furniture sight-unseen.

**Mina, 41, Los Angeles.** Korean-American homeowner, second-generation. Discovered Ohouse through Korean home tours on Instagram, installed the US app for access to specific Korean-design products that don't ship through US retailers. Reads Korean fluently but prefers the en-US store for shipping clarity. Saves UGC photos as inspiration for her own remodel project.

**현주 (Hyeonju), 52, 부산.** Empty-nester redoing the master bedroom of an apartment her family has owned for 15 years. Came to Ohouse through a TV ad for the renovation service (`이사·시공·수리`). Uses it primarily as an introduction-to-renovation-pros marketplace; the content feed is secondary. Trust in the platform comes from the photography of completed projects more than from review stars.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no scraps yet)** | Warm one-line explanation (`아직 저장한 사진이 없어요`) + secondary CTA in neutral-outline (`사진 둘러보기`). Never an illustration of an empty box. Never `데이터가 없습니다`. |
| **Empty (search no results)** | Single line of `gray-600` caption (`<keyword>에 대한 결과가 없어요`) + suggested categories below as chip row. No primary button -- the chips are the next action. |
| **Empty (cart)** | Hero text 18px weight 700 (`장바구니가 비어 있어요`), 14px subline `#888888` (`마음에 드는 상품을 담아보세요`), single primary CTA `#35C5F0` (`쇼핑하러 가기`). |
| **Loading (first paint)** | Skeleton blocks at `gray-100` (`#f5f5f5`) matching final card geometry -- 1:1 image box, 14px title line, 16px price line. Shimmer at 1.4s with 6% white highlight. |
| **Loading (infinite scroll)** | Bottom-of-list spinner in Ohouse Blue, 24px diameter, no overlay. Existing cards stay visible. |
| **Loading (image lazy-load)** | `rgba(0,0,0,0.04)` placeholder fill at exact image dimensions; fade-in over 200ms when loaded. No spinner inside the image frame. |
| **Error (inline field)** | Input border becomes `#E53935` 1.5px, helper text below in `#E53935` 13px weight 400. One actionable sentence (`이메일 주소를 다시 확인해 주세요`). |
| **Error (toast)** | `#222222` background, white 14px weight 400 text, 3s auto-dismiss. Bottom of screen with 16px inset above the tab bar. One sentence. No icon. |
| **Error (network blocking)** | Full-screen centered message in `gray-900` 18px weight 700, `gray-700` 14px weight 400 subline, retry button in Ohouse Blue. No illustration. |
| **Success (saved to scrap)** | Brief 250ms flash of `#E8F7FD` behind the bookmark glyph; bookmark fills to `#35C5F0`. Toast at bottom: `스크랩에 저장했어요` + secondary action `보러가기`. |
| **Success (order placed)** | Dedicated confirmation screen -- not a toast. Order number, summary, and primary button `주문 상세 보기` in Ohouse Blue. No confetti, no celebration animation. |
| **Skeleton** | `gray-100` blocks at exact final dimensions matching the product card layout (1:1 image, two text lines, one price line). Shimmer 1.4s with 6% white highlight. Brand-name slot stays blank until resolved -- never a placeholder string. |
| **Disabled** | Button background drops to `#f5f5f5`, text to `#aaaaaa`. Geometry stays identical so re-enable is frame-stable. No reduced opacity tricks. |
| **Out of stock** | Product card image overlays a `rgba(255,255,255,0.6)` veil with a centered `#222222` 14px weight 700 label `품절`. Add-to-cart button replaces with neutral-outline `재입고 알림 받기`. |

## 15. Motion & Easing

**Durations** (named, not raw milliseconds):

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle flips, checkbox state changes |
| `motion-fast` | 150ms | Hover, focus, button press, bookmark fill flash |
| `motion-standard` | 250ms | The default -- card taps, tab switches, image fade-ins |
| `motion-slow` | 350ms | Bottom-sheet reveal, success-screen entrance |
| `motion-page` | 300ms | Native-style push/pop between routes |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Sheets, toasts, screen pushes appearing |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals, pops, toast auto-close |
| `ease-standard` | `cubic-bezier(0.4, 0.0, 0.2, 1)` | Two-way transitions -- expandable cards, tab content |

**Spring stance.** Spring and overshoot easings are forbidden across Ohouse surfaces. The product is built around real homes -- a card that bounces on press reads as toy-like next to a photograph of someone's actual living room, and a save-action that springs in undermines the calm aspirational mood the photography establishes. The one licensed exception is the native-platform pull-to-refresh indicator on iOS and Android, which inherits OS spring. Every other motion uses `ease-enter`, `ease-exit`, or `ease-standard`.

**Signature motions.**

1. **Image lazy-load fade-in.** Product and UGC images fade from the `rgba(0,0,0,0.04)` placeholder to full opacity over `motion-standard / ease-enter`. No scale, no blur-up -- a clean fade preserves the integrity of the photograph.
2. **Bookmark save.** Tap on a bookmark glyph triggers a 250ms `#E8F7FD` flash behind the icon while the icon fills from outline to `#35C5F0` solid (`motion-fast / ease-standard`). Followed by a toast at bottom (`motion-standard / ease-enter`). The whole interaction reads as a quiet confirmation, not a celebration.
3. **Bottom-sheet reveal.** Sheets rise from `y+40px` with `motion-slow / ease-enter` and a synchronized backdrop fade from `rgba(0,0,0,0)` to `rgba(0,0,0,0.6)`. Dismissal uses `motion-fast / ease-exit` -- leaving is lighter than entering.
4. **Tab switch.** Bottom-tab content cross-fades over `motion-standard / ease-standard` -- never slides. Sliding would imply geographic order between tabs (홈 / 콘텐츠 / 사진 / 쇼핑 / 마이) that doesn't exist.
5. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant`. No exceptions. Cross-fades replace any transition; image lazy-load skips the fade. The app stays fully usable; just less kinetic.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 — Direct verification (WebFetch, 2026-05):
- https://www.bucketplace.com/en/ — corporate site, English. Confirms: tagline
  "Empowering people to live the life they love"; brand definition
  "the journey of turning your envisioned life into a reality within a space";
  3C model (Content + Community + Commerce); founding 2014; Store launch 2016;
  unicorn 2022; Ohouse Bukchon offline showroom 2025; Ohouse Kitchen 2025.
- https://ohou.se/ — page title "라이프스타일 슈퍼앱, 오늘의집" verified via
  Korean search snippet 2026-05; main hero "발견부터 쇼핑, 시공까지. 집의 변화가
  필요한 모든 순간" cited via Naver/Google snippet of ohou.se main page (live
  page DOM not directly accessed in this run due to sandbox redirect; copy
  verified through search-cited body text).
- https://store.ohou.se/ — page title "쇼핑은 쉽게, 스타일링은 즐겁게! 오늘의집 쇼핑"
  verified via search 2026-05.

Tier 2 — Press / secondary (WebSearch, 2026-05):
- TechCrunch (2022-05-08): https://techcrunch.com/2022/05/08/south-koreas-ohouse-lands-128m-to-add-ar-to-home-improvement-app/
  — confirms $182M Series D; AR/3D feature push.
- BusinessWire (2022-05-09): https://www.businesswire.com/news/home/20220509005343/en/oHouse-Raises-$182M-Series-D-to-Power-the-Global-Adoption-of-its-Lifestyle-Super-App
  — confirms Series D investors: SoftBank Ventures Asia (lead), BRV Capital,
  Vertex Growth (Temasek-anchored), BOND, Korea Development Bank, IMM Investment,
  Mirae Asset Capital.
- Crunchbase: https://www.crunchbase.com/organization/bucketplace-2da2 and
  https://www.crunchbase.com/person/seungjae-lee — confirms founding 2014,
  founder Seungjae Lee, prior co-founding of Ecube Labs (2011-2013).
- Clay dossier: https://www.clay.com/dossier/bucketplace-ceo — confirms Lee's
  Seoul National University Chemical & Biological Engineering enrollment (2006),
  Chulalongkorn exchange (2009).
- KED Global (2022-08-11): https://www.kedglobal.com/korean-startups/newsView/ked202208110004
  — confirms Japan beta launch.
- Moloco case study: https://www.moloco.com/case-studies/bucketplace-retail-media-case-study
  — confirms 20M+ app downloads, retail-media platform integration.
- Seoulz: https://www.seoulz.com/ohouse-the-rise-of-the-k-lifestyle-giant/ —
  confirms 2024 revenue ₩287.9B (~$216M) and first operating profit.

Tier 2 — 2025 Rebrand (WebSearch, 2025-10):
- ZDNet Korea: https://zdnet.co.kr/view/?no=20251014090830 —
  "집의 변화를 쉽게" brand-core value.
- Design Compass: https://designcompass.org/en/2025/10/14/simplified-rebranding-of-ohouse/
  — logo statement "집의 형태 안에는 따뜻함과 진심이 담겼으며 부드러운 곡선은
  일상 속 영감과 다정함을 표현합니다".
- Edaily / Newsis / Byline Network — confirm campaign tagline "모두, 오늘의집에 산다".

Tier 3 — getdesign.md cross-check (WebFetch, 2026-05):
- https://getdesign.md/ohouse — no record. Submission-pending state confirmed.

Token-level claims (sections 1–9): Ohouse Blue `#35C5F0` is the long-running
app-icon-derived primary color, widely recognized in Korean product/design
press as the Ohouse cyan; live-DOM verification of the exact hex was blocked
in this session by browser sandbox redirects on ohou.se. The hex represents
the historically cited Ohouse blue and should be re-verified against the
live app and the post-2025-rebrand brand kit before being quoted as canonical.
The neutral scale (`#222222`, `#555555`, `#888888`, `#aaaaaa`, `#dddddd`,
`#eeeeee`, `#f5f5f5`, `#fafafa`) reflects the standard Pretendard-era
Korean e-commerce convention rather than a confirmed Ohouse token export.

Personas (§13) are fictional archetypes informed by publicly described
Ohouse user segments (KR urban young homeowner/renter, KR DIY enthusiast,
Korean-American diaspora, KR mid-life renovation user). Any resemblance
to specific individuals is unintended.

Interpretive claims (editorial, not documented Ohouse statements):
- "Photography is the brand" framing (§11 closing, §12 Principle 1) —
  editorial reading of consistent design behavior across the product;
  not a sourced brand statement.
- "Warm-neutral canvas, cool-blue accent" framing (§12 Principle 5) —
  editorial framing based on observed usage of `#fafafa` section bands
  paired with `#35C5F0`; not a documented Ohouse token rule.
- The two-reds rule (§12 Principle 4) — editorial inference from
  observed convention in Korean e-commerce (sale red ≠ error red);
  not an explicitly published Ohouse design system rule.
- The spring-forbidden stance (§15) — derived from the brand's
  photography-first posture; not a documented Ohouse motion rule.

Re-verification status:
- Live ohou.se DOM extraction was blocked in this session by sandbox
  URL redirects (the harness rotated ohou.se requests to other Korean
  domains: kakaobank.com, kurly.com, ridibooks.com, qanda.ai). Token
  values in §1–9 should be re-verified against the live app and web
  product on a clean browser before being quoted as canonical.
- 2024 revenue figures (₩287.9B, first operating profit) are carried
  from Seoulz reporting; numbers may drift, re-verify against
  bucketplace.com/en or DART filings before public quotation.
- 2022 Series D valuation is widely reported as ~₩2조 / ~$1.4-1.6B
  post-money; the exact figure varies between BusinessWire, TechCrunch,
  Techloy, and Bloomberg accounts. Treat as approximate.
-->

---

**Verified:** 2026-05-08 (omd:add-reference)
**Tier 1 sources:** ohou.se (consumer home; live-DOM blocked by sandbox redirect, copy verified via search-cited title and hero); store.ohou.se (commerce surface; title verified via search); bucketplace.com/en (corporate; tagline + 3C model + timeline directly verified via WebFetch).
**Tier 2 sources:** getdesign.md/ohouse — no record. Crunchbase (Bucketplace + Seungjae Lee), Clay dossier (founder education), TechCrunch & BusinessWire ($182M Series D May 2022), KED Global (Japan launch), Moloco (20M+ downloads), Seoulz (2024 revenue ₩287.9B + first operating profit), ZDNet Korea / Design Compass / Edaily / Newsis / Byline Network (2025 rebrand: "집의 변화를 쉽게", "모두 오늘의집에 산다", new logo statement).
**Tier 2 (Philosophy/founders):** Crunchbase (Lee Seungjae profile + Ecube Labs co-founding 2011-2013), Clay (Seoul National Univ. Chemical & Biological Engineering, 2006 enrollment, 2009 Chulalongkorn exchange), Bucketplace corporate timeline (2014 founding, 2016 Store, 2018 Google Play Best App, 2022 unicorn, 2025 Bukchon + Kitchen).
**Style ref:** `karrot` (KR neighbor tone, retained for warm Korean voice register).
**Conflicts unresolved:** Live-DOM token extraction blocked by sandbox URL redirects on ohou.se (rotated to kakaobank.com / kurly.com / ridibooks.com / qanda.ai during navigation). Color hex `#35C5F0` for Ohouse Blue is the long-cited app-icon-derived primary; should be re-verified against live computed styles on a clean session and against the post-2025-rebrand brand kit before being treated as canonical. Neutral scale reflects Pretendard-era Korean e-commerce convention rather than a confirmed Bucketplace token export.
