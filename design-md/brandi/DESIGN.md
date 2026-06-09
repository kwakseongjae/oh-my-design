---
id: brandi
name: Brandi
country: KR
category: e-commerce
homepage: "https://www.brandi.co.kr"
primary_color: "#ff204b"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=brandi.co.kr&sz=128"
verified: "2026-06-09"
added: "2026-06-09"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-09"
  components_harvested: true
  colors:
    primary: "#ff204b"
    primary-hover: "#ff365d"
    ink: "#202429"
    slate: "#5f6773"
    muted: "#868d96"
    muted-alt: "#808893"
    placeholder: "#989ca1"
    canvas: "#ffffff"
    surface: "#f5f5f5"
    hairline: "#ebeef2"
    border: "#d3d7df"
    dark: "#313842"
    on-primary: "#ffffff"
  typography:
    family: { sans: "Spoqa Han Sans", korean: "Noto Sans KR" }
    h2-section:  { size: 32, weight: 700, lineHeight: 1.20, use: "Section / promo headlines" }
    h1-page:     { size: 26, weight: 400, lineHeight: 1.30, use: "Page title, BRANDI logotype" }
    nav-active:  { size: 17, weight: 700, lineHeight: 1.41, use: "Active GNB tab (홈)" }
    label-bold:  { size: 15, weight: 700, lineHeight: 1.40, use: "Category / section labels" }
    body:        { size: 13, weight: 400, lineHeight: 1.50, use: "Standard reading text, body" }
    caption:     { size: 12, weight: 400, lineHeight: 1.50, use: "Sub-links, footer, metadata" }
  spacing: { xs: 3, sm: 7, md: 8, base: 12, lg: 16, xl: 24, xxl: 40 }
  rounded: { sm: 4, md: 8, lg: 20, full: 9999 }
  shadow:
    ambient: "rgba(0,0,0,0.06) 0px 1px 4px"
    standard: "rgba(0,0,0,0.08) 0px 2px 8px"
    overlay: "rgba(32,36,41,0.8) 0px 0px 0px"
  components:
    button-primary: { type: button, bg: "#ff204b", fg: "#ffffff", radius: "4px", padding: "12px 24px", font: "15px / 700", use: "Primary CTA — 구매하기, 좋아요 등록, hover #ff365d" }
    button-pill: { type: button, bg: "#ffffff", fg: "#202429", radius: "20px", padding: "7px 12px 7px 8px", font: "13px / 400", use: "Filter / search pill, 1px #d3d7df border" }
    nav-tab: { type: tab, fg: "#5f6773", font: "17px / 700", padding: "12px 8px", use: "GNB tab", active: "#202429 ink + 2px bottom border #ff204b" }
    input-search: { type: input, bg: "#f5f5f5", fg: "#202429", radius: "4px", padding: "8px 12px", font: "13px / 400", use: "Search field, placeholder #989ca1" }
    product-card: { type: card, bg: "#ffffff", fg: "#202429", radius: "8px", use: "Product thumbnail card, 1px #ebeef2 hairline, standard shadow" }
    badge-sale: { type: badge, bg: "#ff204b", fg: "#ffffff", radius: "4px", padding: "3px 7px", font: "12px / 700", use: "Sale / discount badge, percent rate" }
    badge-new: { type: badge, bg: "#202429", fg: "#ffffff", radius: "4px", padding: "3px 7px", font: "12px / 700", use: "NEW / 신상 label on thumbnails" }
    wish-toggle: { type: toggle, bg: "#ffffff", fg: "#ff204b", radius: "9999px", padding: "8px", use: "찜 heart toggle, off #868d96, on #ff204b filled" }
    avatar-circle: { type: avatar, bg: "#f5f5f5", radius: "9999px", use: "Seller / profile thumbnail, circular" }
    toast: { type: toast, bg: "#313842", fg: "#ffffff", radius: "8px", padding: "12px 16px", font: "13px / 400", use: "Action confirmation, 장바구니 담김 등" }
---

# Design System Inspiration of Brandi

## 1. Visual Theme & Atmosphere

Brandi (브랜디) is a Korean fashion commerce platform whose web and app surfaces read as fast, image-forward, and unapologetically commercial. The page lives on a pure white canvas (`#ffffff`) where near-black ink (`#202429`) carries almost all the type, and a single hot pink-red (`#ff204b`) does all the persuading — sale prices, discount badges, active heart toggles, and the primary "구매하기" call to action. This is the visual grammar of Korean mobile fashion retail: the photography is the hero, the chrome gets out of the way, and one saturated accent color tells the eye exactly where to spend money. Nothing about the system is decorative for its own sake; every colored pixel is doing conversion work.

The typographic backbone is `Spoqa Han Sans` with `Noto Sans KR` as the Korean companion — two of the most common, screen-optimized Korean web families, chosen for legibility at small sizes rather than for character. Body text runs as small as 13px (and footer links at 12px), which is dense by Western standards but standard for a Korean commerce GNB where dozens of categories, prices, and labels compete for a phone-width column. Headings jump to 26px (page titles) and 32px/700 (promo sections), creating a sharp two-tier hierarchy: tiny dense utility text, then bold large merchandising headlines, with little in between.

The atmosphere is bright, tight, and high-velocity. Corners are conservative — 4px on most controls, 8px on cards, with one expressive exception: the 20px rounded search/filter pills that signal interactivity. Shadows are minimal and neutral-gray, used only to lift floating cards and overlays off the white. There is no gradient drama and no chromatic shadow play here; the brand's entire emotional charge is concentrated in that one pink-red, against a clean monochrome grid of product imagery.

**Key Characteristics:**
- A single hot pink-red (`#ff204b`) as the entire interactive/commerce accent — sale, CTA, active heart
- Pure white canvas (`#ffffff`) with near-black ink (`#202429`) — high-contrast, image-forward
- `Spoqa Han Sans` / `Noto Sans KR` screen-optimized Korean stack, dense 13px body
- Sharp two-tier type hierarchy: 32px/700 promo headlines vs 13px utility text
- Conservative 4px / 8px radius, with expressive 20px pills for search & filters
- Minimal neutral-gray shadows — depth is functional, never decorative
- Layered gray neutrals (`#5f6773`, `#868d96`, `#808893`) for secondary metadata
- Dark slate (`#313842`) reserved for toasts and overlay surfaces

## 2. Color Palette & Roles

### Primary
- **Brandi Pink** (`#ff204b`): The signature. Primary CTA backgrounds, sale prices, discount badges, active heart/wish toggle, active-tab underline. The single color that carries all commercial intent.
- **Pink Hover** (`#ff365d`): Lighter pink-red for hover/pressed states on primary buttons and links.
- **Ink** (`#202429`): Primary text, headings, logotype, active nav label. A near-black with a faint warm-gray cast — softer than pure `#000000`.

### Neutrals
- **Slate** (`#5f6773`): Secondary headings, inactive nav tabs, mid-emphasis labels.
- **Muted** (`#868d96`): Captions, helper text, inactive icons, footer metadata.
- **Muted Alt** (`#808893`): Alternate gray for timestamps and tertiary labels.
- **Placeholder** (`#989ca1`): Input placeholder text, disabled hints.

### Surface & Borders
- **Canvas** (`#ffffff`): Page background, card surfaces, button text on pink.
- **Surface** (`#f5f5f5`): Filled search fields, subtle section backgrounds, avatar placeholders.
- **Hairline** (`#ebeef2`): Lightest divider — card borders, list separators.
- **Border** (`#d3d7df`): Standard control border — pills, inputs, outlined buttons.

### Dark
- **Dark Slate** (`#313842`): Toast backgrounds, overlay surfaces, dark UI chips.
- **Overlay Ink** (`rgba(32,36,41,0.8)`): Scrim over imagery — image dim layers and circular controls on photos.

## 3. Typography Rules

### Font Family
- **Primary**: `Spoqa Han Sans`, with fallback `sans-serif`
- **Korean / Heading companion**: `Noto Sans KR`, applied to page titles, nav, and logotype
- No monospace family is used in the consumer commerce surface.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Section / Promo | Spoqa Han Sans | 32px | 700 | 1.20 | Merchandising headlines, event banners |
| Page Title / Logo | Noto Sans KR | 26px | 400 | 1.30 | Page heads, BRANDI logotype |
| Nav Active | Noto Sans KR | 17px | 700 | 1.41 | Active GNB tab (홈) |
| Label Bold | Noto Sans KR | 15px | 700 | 1.40 | Category labels, section heads |
| Body | Spoqa Han Sans | 13px | 400 | 1.50 | Standard reading text, list items |
| Caption | Noto Sans KR | 12px | 400 | 1.50 | Sub-links, footer, metadata |

### Principles
- **Two-tier contrast**: A wide gap between bold merchandising headlines (32px/700, 26px) and dense utility text (13px/12px) — almost nothing lives in the middle. This is intentional commerce density.
- **Korean-first legibility**: Both families are chosen for clean rendering of Hangul at small sizes; `Noto Sans KR` carries the heavier display and navigation roles, `Spoqa Han Sans` carries body.
- **Weight as the hierarchy lever**: With a narrow size range in utility text, weight (400 vs 700) does most of the emphasis work — bold labels punch out of regular-weight surroundings.
- **No letter-spacing tricks**: Tracking stays at `normal` everywhere; Hangul does not benefit from the negative tracking used on Latin display type.

## 4. Component Stylings

### Buttons
**Primary CTA**
- Background: `#ff204b`
- Text: `#ffffff`
- Padding: 12px 24px
- Radius: 4px
- Font: 15px / weight 700
- Hover: `#ff365d`
- Use: "구매하기", "좋아요 등록", primary conversion actions

**Pill (search / filter)**
- Background: `#ffffff`
- Text: `#202429`
- Padding: 7px 12px 7px 8px
- Radius: 20px
- Border: `1px solid #d3d7df`
- Use: Search trigger, filter chips, sort toggles

### Navigation (GNB)
- Horizontal tab bar on white, sticky at top
- Inactive tabs: `#5f6773`, 17px
- Active tab: `#202429` ink + 2px bottom border in `#ff204b`
- BRANDI logotype left-aligned at 26px
- Utility links (장바구니, 찜, 마이페이지) right-aligned at 13px

### Inputs & Forms
- Background: `#f5f5f5` (filled) or `#ffffff` with `1px solid #d3d7df`
- Radius: 4px
- Text: `#202429`
- Placeholder: `#989ca1`
- Padding: 8px 12px

### Product Cards
- Background: `#ffffff`
- Border: `1px solid #ebeef2` hairline
- Radius: 8px
- Shadow (standard): `rgba(0,0,0,0.08) 0px 2px 8px`
- Image-forward: thumbnail dominates, price + badges below
- Sale price rendered in `#ff204b`; original price struck through in `#868d96`

### Badges
**Sale / Discount**
- Background: `#ff204b`
- Text: `#ffffff`
- Padding: 3px 7px
- Radius: 4px
- Font: 12px / weight 700

**NEW / 신상**
- Background: `#202429`
- Text: `#ffffff`
- Padding: 3px 7px
- Radius: 4px

### Wish / Heart Toggle
- Off: `#868d96` outline heart on `#ffffff`
- On: `#ff204b` filled heart
- Radius: 9999px (circular hit area)
- Often placed over imagery with `rgba(32,36,41,0.8)` circular scrim

### Toast
- Background: `#313842`
- Text: `#ffffff`
- Radius: 8px
- Padding: 12px 16px
- Font: 13px / 400
- Use: "장바구니에 담겼습니다" and similar confirmations

---

**Verified:** 2026-06-09 (omd-add-reference — Tier 1 live inspect)
**Tier 1 sources:** https://www.brandi.co.kr, https://brandi.career.greetinghr.com

## 5. Layout Principles

### Spacing System
- Base unit: ~4px, with a dense practical scale: 3px, 7px, 8px, 12px, 16px, 24px, 40px
- The small-end density (3-8px) reflects a mobile-first commerce grid where padding is tight to maximize product imagery per viewport.

### Grid & Container
- Mobile-first single-column product feed scaling to a centered desktop column
- Product grids: 2-column on mobile, 3-4 column on wider viewports
- Sticky top GNB with category tabs; sticky bottom action bar on product detail (price + 구매하기)
- Imagery occupies the dominant visual area; text chrome is compressed around it

### Whitespace Philosophy
- **Density over air**: Korean commerce convention favors information density — more products visible, tighter gaps, smaller type. Whitespace is rationed, not lavished.
- **Image breathing room**: The one place whitespace is generous is around hero product photography and promo banners, which get full-bleed treatment.
- **Card rhythm**: Consistent hairline (`#ebeef2`) separation keeps a dense feed scannable without heavy borders.

### Border Radius Scale
- Sharp (4px): Buttons, inputs, badges — the workhorse
- Standard (8px): Cards, toasts, containers
- Expressive (20px): Search/filter pills — the one playful radius
- Full (9999px): Heart toggles, avatars, circular controls

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline text, feed |
| Ambient (Level 1) | `rgba(0,0,0,0.06) 0px 1px 4px` | Subtle card lift, hover hint |
| Standard (Level 2) | `rgba(0,0,0,0.08) 0px 2px 8px` | Product cards, floating chips |
| Overlay (Level 3) | `rgba(32,36,41,0.8)` scrim | Image dim layers, sticky action bars, toasts |

**Shadow Philosophy**: Brandi's elevation is deliberately quiet. Shadows are neutral gray, low-opacity, and short-throw — they exist to separate a floating card or sticky bar from the dense feed beneath, never to add atmosphere. The strongest "depth" device is not a shadow at all but the `rgba(32,36,41,0.8)` overlay scrim used to dim imagery so white text and the pink heart read cleanly on top of busy product photos. In a system where photography is the hero, depth is about legibility, not decoration.

## 7. Do's and Don'ts

### Do
- Use `#ff204b` for every commercial signal — CTA, sale price, discount badge, active heart
- Keep the canvas pure white (`#ffffff`) and let product photography dominate
- Use `#202429` ink for primary text, not pure black — it's the brand's near-black
- Render sale prices in pink and strike original prices in `#868d96` gray
- Use 4px radius on buttons/badges, 8px on cards, reserve 20px pills for search/filter
- Keep utility text dense (12-13px) — Korean commerce expects information density
- Use weight 700 to create emphasis when sizes are close together
- Use `Spoqa Han Sans` / `Noto Sans KR` for clean Hangul rendering at small sizes

### Don't
- Don't introduce a second accent color — `#ff204b` carries all interactive intent alone
- Don't use heavy or colored shadows — elevation is neutral, low, and functional
- Don't use pill (20px+) radius on primary CTAs — sale buttons stay sharp at 4px
- Don't pad generously at the expense of products-per-screen — density is the convention
- Don't use pure black (`#000000`) for body text — `#202429` ink is the brand tone
- Don't decorate; every colored element should be doing conversion or wayfinding work
- Don't apply Latin-style negative letter-spacing to Hangul headlines
- Don't bury the price or the 구매하기 CTA — they anchor every product surface

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single-column feed, 2-col product grid, sticky bottom CTA |
| Tablet | 640-1024px | 3-column product grid, expanded GNB |
| Desktop | >1024px | Centered column, 4-column grid, full category nav |

### Touch Targets
- Primary CTA at 12px 24px padding gives a comfortable tap height
- Heart toggle uses a circular 9999px hit area sized for thumb taps
- Nav tabs at 12px 8px padding with 17px text
- Pill controls at 7px vertical padding stay tappable

### Collapsing Strategy
- GNB: full category tab row → scrollable tab strip / hamburger on mobile
- Product grid: 4-col → 3-col → 2-col
- Product detail: inline CTA → sticky bottom action bar (price + 구매하기)
- Promo headlines: 32px → reduced on mobile, weight 700 maintained
- Footer links compress from multi-column to stacked accordion

### Image Behavior
- Product thumbnails maintain 8px radius and `#ebeef2` hairline at all sizes
- Hero/promo imagery goes full-bleed on mobile
- Overlay scrim (`rgba(32,36,41,0.8)`) preserved on imagery with overlaid text/controls

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA / Sale: Brandi Pink (`#ff204b`)
- CTA Hover: Pink Light (`#ff365d`)
- Background: Pure White (`#ffffff`)
- Heading / Body ink: Near-black (`#202429`)
- Secondary text: Slate (`#5f6773`)
- Caption / muted: Gray (`#868d96`)
- Filled field / surface: Light Gray (`#f5f5f5`)
- Hairline divider: (`#ebeef2`)
- Control border: (`#d3d7df`)
- Toast / dark UI: Dark Slate (`#313842`)

### Example Component Prompts
- "Create a product card: white background, 1px solid #ebeef2 border, 8px radius, shadow rgba(0,0,0,0.08) 0px 2px 8px. Image on top. Below: product name in #202429 at 13px Spoqa Han Sans, sale price in #ff204b 700, original price struck-through in #868d96. A #ff204b sale badge (12px/700, white text, 4px radius, 3px 7px padding) top-left over the image."
- "Build a primary CTA button: #ff204b background, white text, 4px radius, 12px 24px padding, 15px weight 700, hover #ff365d. Label '구매하기'."
- "Design a GNB tab bar: white sticky header, BRANDI logotype left at 26px Noto Sans KR. Tabs at 17px — inactive #5f6773, active #202429 with a 2px #ff204b bottom border."
- "Create a search pill: white background, 1px solid #d3d7df border, 20px radius, 7px 12px 7px 8px padding, placeholder #989ca1 at 13px."
- "Build a toast: #313842 background, white text 13px, 8px radius, 12px 16px padding. Message '장바구니에 담겼습니다'."

### Iteration Guide
1. `#ff204b` is the only accent — never add a second persuasion color
2. Ink is `#202429`, not black; captions are `#868d96`
3. Sale prices are pink, original prices are struck `#868d96` gray
4. Radius: 4px controls, 8px cards, 20px search pills, 9999px hearts/avatars
5. Keep utility text dense (12-13px) and lean on weight 700 for emphasis
6. Shadows stay neutral gray and low — use the `rgba(32,36,41,0.8)` scrim over imagery
7. Use `Spoqa Han Sans` / `Noto Sans KR`; no monospace on commerce surfaces
8. Let product photography dominate; chrome compresses around it

---

## 10. Voice & Tone

Brandi's voice is the brisk, friendly register of Korean mobile fashion commerce — direct, trend-aware, and conversion-focused, speaking to a predominantly young female shopper. Labels are short Korean imperatives and nouns: "구매하기", "좋아요", "장바구니", "찜". The tone is warm but efficient; it does not over-explain. Marketing copy leans into urgency and value ("오늘의 특가", discount rates, limited drops) without tipping into hard-sell desperation. The register is closer to a stylish friend recommending a find than a department store announcing a sale.

| Context | Tone |
|---|---|
| Product CTAs | Short Korean imperatives. "구매하기", "좋아요 등록". |
| Promo headlines | Value + urgency. Discount rate forward, time-bound framing. |
| Empty states | Gently encouraging, suggests next action (browse, search). |
| Error / validation | Plain, brief, non-blaming Korean. |
| Confirmations | Friendly past-tense toasts: "장바구니에 담겼습니다". |
| Footer / legal | Formal Korean commerce disclosure register. |

**Forbidden patterns.** Over-long sentences in the dense feed. Cold, corporate phrasing that breaks the friendly register. Aggressive all-caps shouting beyond a short badge. Hard-sell desperation language. English where Korean is expected by the shopper.

## 11. Brand Narrative

Brandi (브랜디) is a Korean fashion commerce platform operated by **Brandi, Inc.**, positioned as a women's fashion shopping app/web ("여성 패션 쇼핑앱 브랜디", per the site's own page title). It aggregates a large catalog of women's apparel and accessories from many small sellers and brands, packaging discovery, curation, and fast checkout into a mobile-first experience. Its model sits in the same Korean fashion-commerce arena as Zigzag, W Concept, and Musinsa — a market where the contest is won on speed, breadth of catalog, sharp pricing, and a frictionless mobile funnel.

The design system encodes that competitive logic directly. There is no luxury restraint and no editorial whitespace because those are not where this market is won. Instead the system optimizes for the one metric that matters: getting a shopper from a product image to a completed purchase as fast as possible. The single hot pink-red, the dense scannable feed, the sticky 구매하기 bar, and the conversion-coded color usage are all expressions of a fashion-commerce platform that treats the funnel as the product.

What Brandi embraces: image-forward merchandising, dense high-velocity browsing, a single decisive accent color, and a friendly trend-aware voice. What it avoids: visual decoration that doesn't sell, generous whitespace that costs products-per-screen, and any chrome that competes with the photography.

## 12. Principles

1. **One color sells.** `#ff204b` is the entire persuasion palette. Restricting commercial signaling to a single saturated accent makes price, sale, and CTA instantly legible in a busy feed.
2. **Photography is the hero.** Chrome compresses around product imagery; the UI's job is to frame and never to compete.
3. **Density is a feature.** More products per screen, tighter type, rationed whitespace — Korean commerce shoppers expect to scan a lot fast.
4. **Weight over size.** With a narrow type scale, 700 weight does the emphasis work that bigger sizes would in a more spacious system.
5. **Functional depth only.** Shadows separate floating surfaces; the overlay scrim keeps text legible on imagery. Neither is decorative.
6. **The funnel is the product.** Sticky CTAs, pink prices, and frictionless paths to 구매하기 are design decisions, not afterthoughts.
7. **Korean-first legibility.** Type choices serve clean Hangul rendering at small sizes above all else.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Korean fashion-commerce shopper segments, not individual people.*

**Yujin, 24, Seoul.** University student who shops almost entirely on her phone during commutes. Scans dozens of products per minute and trusts the pink price tag to tell her instantly what's on sale. Abandons any shopping flow that takes more than a couple of taps to reach checkout. Saves looks with the heart toggle to compare later.

**Subin, 29, Busan.** Office worker who buys seasonal wardrobe refreshes in batches. Compares Brandi against Zigzag and Musinsa on price and shipping speed. Cares that the product imagery is accurate and that discounts are real, not inflated-then-marked-down. The sticky 구매하기 bar means she never loses the buy button while reading reviews.

**Haeun, 21, Daegu.** Trend-driven shopper who follows fashion drops. Comes for the curation and the daily specials, browses the feed like a social timeline, and responds to urgency framing on promo banners. Lives in the app's notification-driven discovery loop.

## 14. States

| State | Treatment |
|---|---|
| **Empty (wishlist / 찜 list)** | White canvas, gray `#868d96` line encouraging browsing, one `#ff204b` CTA to explore the feed. No heavy illustration. |
| **Empty (search no results)** | Plain Korean message in `#5f6773` with the query echoed, suggested categories below. |
| **Loading (feed)** | Gray `#f5f5f5` skeleton blocks at final card dimensions, subtle shimmer. Product image placeholders dominate. |
| **Error (network)** | Brief non-blaming Korean message, a retry action in `#ff204b`. |
| **Error (form validation)** | Field-level, short Korean text below the field, control border shifts to a warning tone. |
| **Success (added to cart)** | `#313842` toast, white text 13px, auto-dismiss: "장바구니에 담겼습니다". |
| **Active (wish toggled on)** | Heart fills `#ff204b` with a brief scale pop. |
| **Disabled** | Reduced opacity on surface and text together; pink actions fade rather than turn gray to keep brand read. |
| **Sold out** | `#202429` overlay label on the thumbnail, CTA disabled, price muted to `#868d96`. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Selection ticks, focus states |
| `motion-fast` | 150ms | Hover, button press, heart toggle |
| `motion-standard` | 250ms | Toast in/out, sheet, dropdown |
| `motion-slow` | 350ms | Page / sticky-bar transitions |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Toasts, sheets, sticky bars arriving |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Signature motions.**

1. **Heart toggle pop.** Tapping 찜 fills the heart `#ff204b` with a quick `motion-fast` scale bounce — the one moment of delight in an otherwise efficient interface.
2. **Toast slide-up.** Cart/wish confirmations slide up from the bottom on `motion-standard / ease-enter` as a `#313842` pill, auto-dismissing.
3. **Sticky CTA reveal.** On product detail scroll, the bottom 구매하기 bar fades/slides in on `motion-standard` so the buy action is always reachable.
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, the heart pop and toast slide collapse to instant; the feed stays fully functional.

## 16. Do's and Don'ts (Summary)

### Do
- Concentrate all commercial signaling in `#ff204b` — CTA, sale, active heart
- Let product photography lead; keep chrome compressed and white
- Use `#202429` ink and `#868d96` muted gray for the text hierarchy
- Keep 4px controls / 8px cards / 20px search pills / 9999px hearts
- Maintain dense, scannable utility text and a sticky path to 구매하기

### Don't
- Don't add a second accent color or colored/heavy shadows
- Don't round primary CTAs into pills or use pure black for text
- Don't trade products-per-screen for generous whitespace
- Don't decorate — every colored element earns its place by selling or guiding
- Don't break the friendly, brisk Korean voice with cold corporate phrasing
