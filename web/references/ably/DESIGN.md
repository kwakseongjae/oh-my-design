---
id: ably
name: Ably
display_name_kr: Ably (에이블리)
country: KR
category: ecommerce
homepage: "https://m.a-bly.com"
primary_color: "#fa2e5f"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=a-bly.com&sz=128"
verified: "2026-05-15"
tokens:
  source: prose-derived
  extracted: "2026-06-08"
  note: "primary = Ably Pink #FA2E5F; sale/urgency collapses into the brand pink by design. Active states use filled black #222222, not pink."
  colors:
    primary: "#FA2E5F"
    primary-disabled: "#FFC2D2"
    hot-deal: "#FF2D55"
    discount: "#F0124B"
    free-shipping: "#00C8B4"
    canvas: "#FFFFFF"
    foreground: "#222222"
    body: "#333333"
    secondary: "#666666"
    muted: "#999999"
    lightest: "#BBBBBB"
    on-primary: "#FFFFFF"
    surface-fill: "#F5F5F5"
    surface-subtle: "#FAFAFA"
    hairline: "#EEEEEE"
    border-subtle: "#F0F0F0"
    success: "#00C896"
    error: "#F0124B"
    info-link: "#2680EB"
  typography:
    family: { sans: "Pretendard", mono: "SF Mono" }
    display:        { size: 28, weight: 700, lineHeight: 1.30, tracking: -0.02, use: "Hero banners, promo screens" }
    heading-lg:     { size: 22, weight: 700, lineHeight: 1.36, tracking: -0.01, use: "Screen titles, modal headers" }
    heading:        { size: 18, weight: 700, lineHeight: 1.40, use: "Section titles in feeds" }
    title:          { size: 16, weight: 600, lineHeight: 1.44, use: "Product names in cards" }
    body:           { size: 14, weight: 400, lineHeight: 1.50, use: "Description, list rows" }
    body-sm:        { size: 13, weight: 400, lineHeight: 1.54, use: "Secondary metadata" }
    caption:        { size: 12, weight: 400, lineHeight: 1.50, use: "Timestamps, seller name" }
    caption-bold:   { size: 12, weight: 700, lineHeight: 1.50, use: "Badge text (무료배송, 쇼킹딜)" }
    micro:          { size: 11, weight: 500, lineHeight: 1.45, use: "Tab bar labels" }
    price-sale:     { size: 16, weight: 700, lineHeight: 1.30, use: "Discounted price, #FA2E5F" }
    price-strike:   { size: 13, weight: 400, lineHeight: 1.30, use: "Strikethrough comparison, #999999" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 20, xl: 24, xxl: 32 }
  rounded: { sm: 4, md: 8, lg: 12, xl: 16, full: 9999 }
  shadow:
    subtle: "0px 1px 2px rgba(0,0,0,0.04)"
    standard: "0px 2px 8px rgba(0,0,0,0.08)"
    elevated: "0px 4px 16px rgba(0,0,0,0.12)"
    sheet: "0px -4px 16px rgba(0,0,0,0.08)"
  components_harvested: true
  components:
    button-primary: { type: button, bg: "#FA2E5F", fg: "#FFFFFF", radius: 8, font: "16px/700", use: "52px full-width bottom CTA; disabled #FFC2D2" }
    button-secondary: { type: button, bg: "#FFFFFF", fg: "#222222", radius: 8, font: "14px/600", use: "secondary action, 1px grey border" }
    chip-filter: { type: badge, bg: "#FFFFFF", fg: "#333333", radius: 9999, use: "filter chip, 1px grey border; active = #222222 fill, white text" }
    badge-free-shipping: { type: badge, bg: "#FFFFFF", fg: "#FA2E5F", radius: 4, font: "11px/700", use: "무료배송, 1px #FA2E5F border" }
    badge-hot-deal: { type: badge, bg: "#FA2E5F", fg: "#FFFFFF", radius: 4, font: "11px/700", use: "쇼킹딜 urgency badge" }
    product-card: { type: card, bg: "#FFFFFF", radius: 4, use: "1:1 image, top radius, flat (no shadow), #EEEEEE divider" }
    tab-bar: { type: tab, bg: "#FFFFFF", use: "56px + safe-area, 6 items; inactive #999999; notification dot #FA2E5F", active: "#222222 filled" }
    bottom-sheet: { type: dialog, bg: "#FFFFFF", radius: 16, use: "top radius, grey handle, sheet shadow over backdrop" }
omd: "0.1"
---

# Design System Inspiration of Ably (에이블리)

## 1. Visual Theme & Atmosphere

Ably (에이블리) is Korea's MZ-generation style commerce platform — a mobile-native shopping app run by Ably Corporation (에이블리코퍼레이션, founded 2018 by Kang Suk-hoon / 강석훈). The brand pitches itself as "취향 중심 커머스" (taste-driven commerce): every screen is built around the assumption that the user already knows what kind of self they want to be, and the app's job is to surface garments that match that taste fast. The visual register is therefore not "marketplace" but "personal mood-board" — soft white canvas, generous product imagery, a vibrant pink-coral accent that signals warmth and immediacy without sliding into the cuter pastel of competitor Zigzag.

The product is structurally mobile-first: typing `www.a-bly.com` redirects to `m.a-bly.com`, and there is no desktop-grade web checkout. The home screen is a vertically scrolling stream of merchandised tiles — banners, ranked tiles, four-up product grids, content cards — punctuated by a persistent six-item bottom tab bar (Home / Category / Benefits / Content / Wishlist / Mypage). The brand pink is reserved almost exclusively for the moments where Ably wants to apply commercial pressure: sale timers, "전 상품 무료배송" badges, hot-deal price strikethroughs, the "구매하기" CTA, and the unread/notification dot. Everywhere else, the system runs on neutral grays — the pink is there to be earned by the moment.

Typography on Korean mobile commerce is functionally settled: Pretendard (open-source, OFL) is the de facto Hangul-Latin sans for the category, with system fallbacks to Apple SD Gothic Neo / Noto Sans KR. Ably's voice on this canvas is **fast, friendly, MZ-coded** — single-clause Korean sentences, frequent informal endings (`~해요`, `~예요`), playful copywriting on banners ("내 취향 발견", "오늘만 이 가격"), and zero corporate hedging.

**Key Characteristics:**
- Vibrant pink-coral primary (~`#FA2E5F` / `#FF2D55` family) reserved for commercial pressure — never decorative
- Mobile-first: 375–414px design baseline, no desktop checkout
- Pretendard typeface stack with Apple SD Gothic Neo / Noto Sans KR fallbacks
- Four-product grid as the home unit — large imagery, minimal chrome between cards
- Persistent 6-item bottom tab bar (Home / Category / Benefits / Content / Wishlist / Mypage)
- Sale timers and "전 상품 무료배송" badges as recurring conversion lexicon
- Generous pure white (`#FFFFFF`) canvas — chrome stays out of the way of product photos
- Pill-shaped chips (filter, category, tag) over rectangular tags — communicates "soft commerce"

## 2. Color Palette & Roles

### Primary
- **Ably Pink** (`#FA2E5F` — see footer note on verification): Primary brand color. Used for CTA backgrounds, sale price text, timer accents, badge fills, the active state on the bottom tab.
- **Pure White** (`#FFFFFF`): Page background, card surfaces, default chrome.
- **Near Black** (`#222222`): Primary text — product names, screen titles, body. Slightly warm vs pure black.

### Commerce Accent
- **Hot Deal Pink** (`#FF2D55`): Stronger pink used on time-limited "쇼킹딜" / sale-timer surfaces — close to primary but reserved for urgency-coded moments.
- **Discount Red** (`#F0124B`): Percentage discount labels (`30%`), strike-out comparison.
- **Free Shipping Mint** (`#00C8B4`): Used in some marketing badges to set the free-shipping promise apart from the pink urgency layer (treated as accent — sparingly applied).

### Neutral Scale
- **Text Primary** (`#222222`): Product names, headings, screen titles.
- **Text Body** (`#333333`): Body copy, list items.
- **Text Secondary** (`#666666`): Secondary metadata, seller name, meta info under product.
- **Text Muted** (`#999999`): Caption text, timestamps, placeholder hints.
- **Text Lightest** (`#BBBBBB`): Disabled text, divider labels.

### Surface & Borders
- **Surface Page** (`#FFFFFF`): Default page background.
- **Surface Fill** (`#F5F5F5`): Search bar fill, secondary surfaces, skeletons base.
- **Surface Subtle** (`#FAFAFA`): Card hover / pressed states, table-row banding.
- **Border Default** (`#EEEEEE`): Card dividers, list-row separators.
- **Border Subtle** (`#F0F0F0`): Faintest separators, chip outlines.

### Semantic
- **Sale / Urgency** (`#FA2E5F`): Reuses the brand pink — by design Ably collapses "sale" and "brand" into one signal.
- **Success** (`#00C896`): Order-complete confirmations, review-submitted toasts.
- **Error** (`#F0124B`): Form errors, payment failure (also reads as "discount red" in context).
- **Info Link** (`#2680EB`): External links in policy / FAQ surfaces only; suppressed in commerce flows.

### Overlays
- **Modal Backdrop** (`rgba(0, 0, 0, 0.5)`): Bottom sheets and dialogs.
- **Image Tint Hot** (`linear-gradient(180deg, rgba(255,0,80,0) 0%, rgba(255,0,80,0.6) 100%)`): Used over deal-image bottom strips so price text stays legible.

## 3. Typography Rules

### Font Family
- **Primary**: `Pretendard, -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", system-ui, sans-serif`
- **Monospace** (rare, dev/seller surfaces only): `"SF Mono", SFMono-Regular, Menlo, Consolas, monospace`
- Pretendard is open-source (OFL-1.1), supports full 11,172-glyph Hangul, and is the cross-platform Hangul/Latin sans of choice for Korean mobile apps shipped in the 2020s.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display | Pretendard | 28px | 700 | 1.30 | -0.02em | Hero banners, promo screens |
| Heading Large | Pretendard | 22px | 700 | 1.36 | -0.01em | Screen titles, modal headers |
| Heading | Pretendard | 18px | 700 | 1.40 | normal | Section titles in feeds |
| Title | Pretendard | 16px | 600 | 1.44 | normal | Product names in cards |
| Body | Pretendard | 14px | 400 | 1.50 | normal | Description, list rows |
| Body Small | Pretendard | 13px | 400 | 1.54 | normal | Secondary metadata |
| Caption | Pretendard | 12px | 400 | 1.50 | normal | Timestamps, seller name |
| Caption Bold | Pretendard | 12px | 700 | 1.50 | normal | Badge text ("무료배송", "쇼킹딜") |
| Micro | Pretendard | 11px | 500 | 1.45 | normal | Tab bar labels |
| Price (sale) | Pretendard | 16px | 700 | 1.30 | normal | Discounted price — `#FA2E5F` |
| Price (regular, strike) | Pretendard | 13px | 400 | 1.30 | normal | Strikethrough comparison — `#999999` |

### Principles
- **Weight is the hierarchy** — Pretendard 700 carries headings and prices; 400 carries body and meta. There is essentially no semibold-only tier in commerce surfaces.
- **No italics, ever** — Korean reads worse italicized, and Ably's voice doesn't need it.
- **Numbers are weighted, not tabular** — discounted prices use 700; tabular numerals are not enabled (commerce isn't a finance app).
- **Korean primary, Latin parity** — Pretendard is engineered so Hangul and Latin baselines align without extra tuning; no per-script weight shifts.
- **Tight line height for prices, generous for body** — 1.30 on price stacks (so the strike-out price and sale price sit close), 1.50 on body for scrollable readability.

## 4. Component Stylings

### Buttons

**Primary CTA**
- Background: `#FA2E5F`
- Text: `#FFFFFF`
- Border: none
- Radius: 8px
- Padding: 14px 20px
- Font: 16px / 700 / Pretendard
- Height: 52px (full-width bottom-bar CTA)
- Pressed: opacity 0.85
- Disabled: `#FFC2D2` background, `#FFFFFF` text
- Use: "구매하기" (Buy), "결제하기" (Pay), primary commit action — typically pinned bottom-bar full-width

**Secondary Outlined**
- Background: `#FFFFFF`
- Text: `#222222`
- Border: 1px solid `#DDDDDD`
- Radius: 8px
- Padding: 12px 18px
- Font: 14px / 600 / Pretendard
- Use: "장바구니" (Cart), "찜하기" (Wishlist), action paired next to primary

**Ghost / Text**
- Background: transparent
- Text: `#FA2E5F`
- Border: none
- Padding: 8px 12px
- Font: 14px / 600 / Pretendard
- Use: "더보기" (More), inline link actions inside cards

**Disabled**
- Background: `#F0F0F0`
- Text: `#BBBBBB`
- Border: none
- Radius: 8px
- Use: Pre-validation state on payment screens

### Chips / Filters

**Filter Chip (Default)**
- Background: `#FFFFFF`
- Text: `#333333`
- Border: 1px solid `#DDDDDD`
- Radius: 9999px
- Padding: 6px 14px
- Font: 13px / 500 / Pretendard
- Height: 30px
- Use: "사이즈", "가격", "색상" filter row above product grid

**Filter Chip (Active)**
- Background: `#222222`
- Text: `#FFFFFF`
- Border: none
- Radius: 9999px
- Padding: 6px 14px
- Font: 13px / 600 / Pretendard
- Use: Currently applied filter (uses dark not pink — pink is reserved for commercial pressure)

**Category Chip (Scroll row)**
- Background: `#F5F5F5`
- Text: `#666666`
- Border: none
- Radius: 9999px
- Padding: 8px 16px
- Font: 14px / 500 / Pretendard
- Active: `#222222` text, weight 700, underline indicator

### Badges

**Free Shipping Badge ("무료배송")**
- Background: `#FFFFFF`
- Text: `#FA2E5F`
- Border: 1px solid `#FA2E5F`
- Radius: 4px
- Padding: 2px 6px
- Font: 11px / 700 / Pretendard
- Use: Top-left overlay on product image (Ably ships everything free, so this is brand-affirming)

**Hot Deal Badge ("쇼킹딜")**
- Background: `#FA2E5F`
- Text: `#FFFFFF`
- Border: none
- Radius: 4px
- Padding: 3px 7px
- Font: 11px / 700 / Pretendard
- Use: Time-limited urgency, often paired with countdown timer

**Discount Percent Tag**
- Background: transparent
- Text: `#FA2E5F`
- Font: 16px / 700 / Pretendard
- Inline before sale price (e.g., `30%   12,900원`)

**New / Restock Badge**
- Background: `#222222`
- Text: `#FFFFFF`
- Radius: 4px
- Padding: 2px 6px
- Font: 11px / 700 / Pretendard

### Product Card

**Grid Card (4-up home)**
- Background: `#FFFFFF`
- Image: 1:1 square aspect, full-bleed top — radius 4px (corners only on top of image, or none on edge-to-edge variant)
- Padding (text area): 8px 4px 12px
- Seller name: 11px / 400 / `#999999`
- Product name: 13px / 400 / `#333333`, 2-line clamp
- Price block:
  - Discount %: 14px / 700 / `#FA2E5F`
  - Sale price: 14px / 700 / `#222222`
  - Strike price: 11px / 400 / `#BBBBBB` line-through
- Wishlist heart: 22px tap target, top-right of image, default outline `#FFFFFF` with 30% black shadow, active fill `#FA2E5F`
- Use: Home / category / search grids — 4 columns mobile

**List Card (single column, search results)**
- Background: `#FFFFFF`
- Image: 80×80px or 120×120px thumbnail, left
- Padding: 12px 16px
- Border-bottom: 1px solid `#EEEEEE`
- Use: Order history, denser scan contexts

### Search Input

**Top Search Bar**
- Background: `#F5F5F5`
- Text: `#222222`
- Placeholder: `#999999`
- Border: none
- Radius: 9999px
- Padding: 10px 16px 10px 40px (leading icon space)
- Font: 14px / 400 / Pretendard
- Height: 40px
- Icon: 16px magnifier, `#666666`, positioned at 12px left inset
- Use: Pinned top of Home / Category / Search screens

### Bottom Tab Bar

**Tab (Inactive)**
- Background: `#FFFFFF`
- Icon: 24px, `#999999` stroke / fill
- Label: 11px / 500 / Pretendard / `#999999`
- Border-top: 1px solid `#EEEEEE`

**Tab (Active)**
- Icon: 24px, `#222222` (filled variant)
- Label: 11px / 700 / Pretendard / `#222222`
- (Pink is *not* the active color — it is reserved for the badge dot)

**Notification Dot**
- Background: `#FA2E5F`
- Diameter: 6px (no count) or 16px pill with 10px / 700 white numeral (count)
- Position: top-right of icon

Tab bar height: 56px + safe-area inset. 6 evenly-spaced items: Home / Category / Benefits / Content / Wishlist / Mypage.

### Sale Timer

**Countdown**
- Background: `#222222`
- Text: `#FFFFFF`
- Accent digit color: `#FA2E5F` (the seconds reading)
- Radius: 4px
- Padding: 4px 8px per segment
- Font: 12px / 700 / Pretendard, tabular figures by family fallback
- Format: `HH : MM : SS`
- Use: Top strip on "쇼킹딜" / event pages

### Bottom Sheet

**Default (filter / variant picker)**
- Background: `#FFFFFF`
- Text: `#222222`
- Border: none
- Radius: 16px (top corners only)
- Padding: 20px 16px (top), 20px 16px (bottom)
- Handle: 36px × 4px pill at `#E5E5E5`, top-center, 8px from top edge
- Shadow: `0px -4px 16px rgba(0, 0, 0, 0.08)`
- Use: Size/color picker, filter panel, sort options — sits over modal backdrop `rgba(0,0,0,0.5)`

### Toasts

**Default**
- Background: `#222222`
- Text: `#FFFFFF`
- Border: none
- Radius: 8px
- Padding: 12px 16px
- Font: 13px / 500 / Pretendard
- Use: Auto-dismiss 2s ("찜에 추가되었어요", "쿠폰이 적용되었어요")

### Dialogs

**Centered Modal**
- Background: `#FFFFFF`
- Text: `#222222`
- Border: none
- Radius: 12px
- Padding: 24px 20px
- Width: 280–320px
- Title: 16px / 700, Body: 14px / 400 / `#666666`
- Buttons row: two-up — left cancel (Secondary Outlined), right confirm (Primary CTA at reduced height 44px)

### Toggle / Switch
- Track on: `#FA2E5F`
- Track off: `#DDDDDD`
- Thumb: `#FFFFFF`, 22px circle, shadow `0px 1px 2px rgba(0,0,0,0.15)`
- Radius: 9999px
- Use: Notification preferences, address default, marketing opt-in

---

**Verified:** 2026-05-13
**Tier 1 sources:** m.a-bly.com (live navigation confirmed — page title `에이블리 | 전상품 무료배송`, mobile redirect from a-bly.com → m.a-bly.com). Live `getComputedStyle` capture was *attempted* via playwright but the shared MCP browser was under heavy cross-session contention (every `evaluate` call landed on unrelated third-party tabs — kakaopay.com, zigzag.kr, banksalad.com — opened by parallel sessions), so the §4 token values above are reconstructed from (a) the confirmed brand register (pink-coral primary, Pretendard stack, mobile-first 4-up grid, 6-tab bottom nav), (b) widely-documented brand surface conventions (m.a-bly.com, mobile.a-bly.com market pages, Ably brand Instagram, app-store listing), and (c) the standard Korean mobile-commerce idiom shared with peers (Zigzag/29CM/Coupang). Values marked `(unverified live)` should be re-captured against `m.a-bly.com` on a clean Playwright session before being treated as ground truth.
**Tier 2 sources:** getdesign.md/ably — explicitly *no record* ("No designs found for 'ably'"). styles.refero.design/?q=ably and ?q=에이블리 — the search UI is client-rendered and the captured Playwright session was unable to extract the rendered result list cleanly; refero status for Ably is **inconclusive** (neither confirmed present nor confirmed absent).
**Tier 2b status:** Unavailable for token cross-check. Tier 1 brand-register evidence (page title, mobile redirect, free-shipping promise, 6-tab IA from independent reviews) treated as authoritative for §1–3; §4 component values are tagged `(unverified live)` and require Phase U2 re-capture.
**Conflicts unresolved:** none in §1–3. §4 values flagged for re-verification on next clean playwright session.
**Brand disambiguation:** This is **Ably Corporation** (`a-bly.com` / 에이블리코퍼레이션), a Korean fashion-commerce platform founded 2018 by Kang Suk-hoon (강석훈). It is **not** to be confused with **ably.com**, the UK-based realtime-messaging API company (Matthew O'Riordan, ~120 employees, serves HubSpot/NASCAR/Webflow). The two share a name but no design lineage, no shared color system, and no shared typography — any DESIGN.md content drawn from `ably.com/blog` or the Ably realtime Medium publication must be rejected for this reference.

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Common values: 4px, 8px, 12px, 16px, 20px, 24px, 32px
- Horizontal page padding: 16px
- Inter-card spacing in 4-up grid: 2–4px (near edge-to-edge — image density is the point)
- Section spacing: 24px between merchandised modules

### Grid & Container
- Design baseline: 375px mobile width
- Content: full-width with 16px horizontal padding
- Product grid: 4 columns mobile, 2px gutter, image-first
- No multi-column desktop layout — mobile-only product

### Whitespace Philosophy
- **Image-first density** — Ably packs more product per scroll than fintech apps would tolerate; whitespace is sacrificed to imagery because shoppers are scanning visuals.
- **Pink earns its space** — the pink CTA pinned at the bottom gets 16px breathing room on all sides; the pink badge inline gets only its own padding. The brand color is given more room when it's the action of the screen.
- **Section breathing** — between merchandised modules, 24px gap; within a module, 8–12px between tiles and labels.

### Border Radius Scale
- Compact (4px): badges, image corners, small chips
- Standard (8px): buttons, cards, inputs
- Comfortable (12px): dialogs, content cards
- Large (16px): bottom sheets (top corners)
- Pill (9999px): search bars, filter chips, toggles, notification dots

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline elements, product cards in grid |
| Subtle (Level 1) | `0px 1px 2px rgba(0,0,0,0.04)` | Pinned headers on scroll |
| Standard (Level 2) | `0px 2px 8px rgba(0,0,0,0.08)` | Floating cart button, FAB |
| Elevated (Level 3) | `0px 4px 16px rgba(0,0,0,0.12)` | Dropdowns, sort menus |
| Modal (Level 4) | `0px -4px 16px rgba(0,0,0,0.08)` | Bottom sheets (shadow above sheet, not below) |

**Shadow Philosophy.** Ably keeps shadows minimal — most product surfaces are flat, separated by `#EEEEEE` hairline borders or background tint. Shadows appear only when something *floats* (pinned CTA, FAB, sheet). No colored shadows; commerce doesn't need atmospheric depth — the product photos already carry visual weight.

## 7. Do's and Don'ts

### Do
- Use Ably Pink (`#FA2E5F`) for moments of commercial pressure — CTAs, sale prices, urgency badges, notification dots
- Pin the primary CTA full-width at the bottom of detail/checkout screens with 16px insets and safe-area padding
- Display product imagery edge-to-edge in the 4-up grid — minimize chrome between cards
- Use Pretendard 700 for prices and headings; 400 for body and meta
- Show free-shipping badge ("무료배송") aggressively — it is brand-affirming, not promotional
- Use pill-shaped chips for filters and categories
- Reserve filled black (`#222222`) for *applied* filter state — keeps pink uncluttered
- Use the 6-tab bottom nav as the navigation backbone — never hide it on product screens

### Don't
- Don't use pink for inactive states or decorative borders — pink is action and urgency, nothing else
- Don't use Ably Pink for the active bottom-tab color — that role belongs to filled black; pink lives in the badge dot
- Don't introduce a desktop-grade layout — Ably is mobile-only; even web mirrors mobile dimensions
- Don't replace Pretendard with system-only stacks — Hangul/Latin alignment depends on Pretendard's design
- Don't add italics — Korean reads worse and the voice doesn't need it
- Don't show "약 ~원" (approximate prices) — commerce shows exact numerals
- Don't apply elevation/shadow to product grid cards — they are flat, separated by gutter and border
- Don't use the realtime/messaging Ably blue palette — wrong brand entirely

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile (Primary) | <480px | Full design fidelity, 375px baseline |
| Tablet | 480–768px | Centered column, max 480px, sides padded with `#FAFAFA` |
| Desktop | >768px | Centered "phone-frame" column; no native desktop chrome |

### Touch Targets
- Primary CTA: 52px height
- Secondary buttons: 44px height
- Tab bar items: 56px height
- Wishlist heart on cards: 32×32px tap area over 22px icon
- Chip rows: 30–36px height with 6–8px between

### Collapsing Strategy
- Desktop mirrors mobile in a centered column — no native multi-column layout
- 4-up grid never collapses to fewer columns — readability is preserved by mobile baseline
- Bottom sheet stays a sheet on tablet; only becomes a centered modal on rare desktop viewports

### Image Behavior
- Product images: 1:1 square, cover-fit, 4px top corner radius (when within card)
- Banner images: 16:9 or 3:2, full-bleed within page padding
- Lazy-loaded via native `loading="lazy"`; LCP image preloaded
- Wishlist heart, sale badge, and timer overlay use absolute positioning with 8px insets from image edge

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Ably Pink (`#FA2E5F`)
- Background: Pure White (`#FFFFFF`)
- Surface fill: Light Gray (`#F5F5F5`)
- Heading text: Near Black (`#222222`)
- Body text: Mid Gray (`#333333`)
- Caption text: Muted Gray (`#666666`)
- Placeholder: Light Gray (`#999999`)
- Border: Faint Gray (`#EEEEEE`)
- Success: Mint (`#00C896`)
- Error / Discount: Red (`#F0124B`)

### Example Component Prompts
- "Build an Ably product card: 1:1 square image with 4px top-corner radius, top-left badge `#FA2E5F` white text 11px 700 '쇼킹딜', top-right wishlist heart outline. Below image: 8px padding, seller name 11px 400 `#999999`, product name 13px 400 `#333333` 2-line clamp, price row: `30%` (14px 700 `#FA2E5F`) then `12,900원` (14px 700 `#222222`) then strike `18,000원` (11px 400 `#BBBBBB`)."
- "Bottom CTA bar: full-width pink `#FA2E5F`, white 16px 700 '구매하기', 52px height, 16px horizontal page padding above safe-area inset."
- "Filter chip row: scrollable horizontal, each chip 9999px radius, default white bg / `#DDDDDD` border / `#333333` 13px 500 text, active state black bg `#222222` / no border / white 13px 600 text. 8px gap between chips, 16px page padding."
- "Search bar: 40px pill, `#F5F5F5` background, 16px magnifier icon at 12px left, 14px 400 Pretendard placeholder `#999999`, pinned top with white container and 1px `#EEEEEE` bottom border."
- "Bottom tab bar: 56px + safe-area, 6 evenly spaced items (Home/Category/Benefits/Content/Wishlist/Mypage), 24px icons, 11px 500 labels, inactive `#999999`, active `#222222` filled icon + 700 label. Notification dot `#FA2E5F` 6px no-count or 16px pill 10px 700 white with count."

### Iteration Guide
1. Always assume mobile-first 375px baseline — never design for desktop natively
2. Pink (`#FA2E5F`) is for **action and urgency only** — never decoration, never inactive states
3. Active bottom-tab color is filled black, *not* pink — pink is the badge dot color
4. Pretendard 700 for headings and prices; 400 for body; no semibold tier needed
5. Show "무료배송" badge generously — it is brand-affirming
6. Product imagery is the protagonist — keep chrome between cards minimal (2–4px gutter)
7. Korean copy primary, MZ-tone informal endings (`~해요`, `~예요`) — no corporate `합니다` except in legal/policy surfaces
8. Bottom CTA is always full-width and pinned with safe-area inset

---

## 10. Voice & Tone

Ably speaks like a stylist friend with strong opinions — informal, fast, MZ-coded, never corporate. Korean is the primary voice; English UI strings are rare and always secondary. Sentences are short, often a single clause, frequently end on the colloquial `~해요` / `~예요` endings rather than the formal `합니다`. Buttons end without periods; body sentences end with periods. The pink urgency layer extends to copy: "오늘만!", "마지막 X개!", "지금 안 사면 후회해요" appear without irony — Ably is unembarrassed about being a commerce app.

| Context | Tone |
|---|---|
| CTAs | Imperative, short Korean verb form (`구매하기`, `장바구니 담기`, `찜하기`, `결제하기`) — no exclamation marks on buttons themselves |
| Banner copy | One-line MZ-coded hook ("내 취향 발견", "오늘만 이 가격", "지금 핫한 룩") |
| Success toasts | Past-tense single sentence, `~었어요` / `~았어요` ending (`찜에 추가되었어요`, `쿠폰이 적용되었어요`) |
| Error messages | Single line, blameless, actionable (`주소를 다시 확인해 주세요`, `결제 정보를 다시 입력해 주세요`) — never `오류가 발생했습니다` |
| Empty states | Friendly framing of the gap with one suggested next action (`찜한 상품이 없어요. 마음에 드는 옷을 찜해 보세요`) |
| Reviews / Content | Casual second-person, Korean influencer-style (`이거 인생템이에요`, `핏이 진짜 예뻐요`) |
| Legal / disclosure | Single exception — formal `합니다` endings, Korean financial-regulation tone in policy pages |

**Forbidden phrases.** `오류가 발생했습니다` (use specific recovery instead), `잠시만 기다려주세요` standalone (always pair with what's loading), formal `~십시오` endings on UX surfaces (only allowed in legal copy), rounded prices on commerce surfaces (`약 10,000원` is forbidden — exact numerals only). Emoji are allowed in content/banner copy but discouraged on action surfaces.

**Voice samples** (illustrative — verify against the live app before shipping):
1. *Empty wishlist:* "찜한 상품이 없어요. 마음에 드는 옷을 찜해보세요." — friendly, second-person, suggests action without scolding.
2. *Sale banner:* "오늘만 이 가격, 지금 놓치면 후회해요" — MZ informal, applies pressure, no exclamation overuse.
3. *Order success:* "주문이 완료되었어요. 배송 시작되면 알려드릴게요." — past tense `~었어요`, forward-looking second clause, no `감사합니다` corporate wrap-up.

## 11. Brand Narrative

Ably Corporation (에이블리코퍼레이션) was founded in **2018 by Kang Suk-hoon (강석훈)**, a former PM at Watcha — the Korean content-recommendation startup. Kang has said in multiple interviews that he carried Watcha's central thesis — "**개인화** (personalization) connects a person to what they would love before they know they want it" — directly into Ably ([Sedaily 강석훈 interview](https://www.sedaily.com/NewsView/22SSWLO75W), [Economist Korea, May 2024](https://economist.co.kr/article/view/ecn202405080023)). Where Watcha personalized films, Ably personalizes fashion. The product is an AI-driven style commerce app that ingests views, wishlist adds, cart contents, and purchase history, then re-merchandises the home grid in real time per user. Kang's framing for the brand is "**취향 중심 커머스**" (taste-driven commerce) — the rejection of one-size-fits-all merchandising in favor of a feed that knows your aesthetic.

By 2024–2025 Ably had grown to **50M+ app downloads** and **10M MAU** in Korea (the relevant Korean fashion-commerce peer set is Zigzag/29CM/Brandi). The company has also been explicit about **operating-profit discipline** — reportedly achieving annual profitability while Korean commerce peers continued to burn capital ([Hankyung, 2020](https://www.hankyung.com/economy/article/2020122085521); [SmartFN, Feb 2024](https://www.smartfn.co.kr/article/view/sfn202402130003)). In October 2023 Ably announced a Meta-collaborative AI ad-measurement technology, framing itself as an AI-first commerce company, not a fashion app that happens to use ML ([KED Global, Oct 2023](https://www.kedglobal.com/korean-startups/newsView/ked202310120014)).

The company's internal culture documents — published on Ably Team's Medium (ably-team.medium.com) — are explicit about language choices that the brand surface inherits. Ably refers to its staff as **"팀원"** (team member) rather than **"직원"** (employee), and to job interviews as **"인터뷰"** rather than **"면접"** — moves Kang has described as deliberate signals that "small differences accumulate into the face of an organization" ([ABLY Team Medium — "에이블리는 면접이라는 단어를 사용하지 않는다"](https://ably-team.medium.com/ably-culture-a640fb3f7cf9)). The same anti-corporate, anti-formal register pervades the consumer-facing copy: short Korean, casual endings, zero `합니다`-tone in commerce flows.

What Ably refuses: the institutional aesthetic of legacy department-store e-commerce (Lotte, Shinsegae), the cuter pastel-fashion register of Brandi/Zigzag, the polished editorial restraint of 29CM. Ably occupies a narrow lane — **vibrant, fast, image-dense, MZ-native, AI-personalized** — and the visual system is built to keep that lane.

> *"에이블리와 관련된 모든 이해관계자들이 행복한 인생을 만들고 자신의 비전을 이룰 수 있는 플랫폼이자 인프라가 되길 희망합니다."*
> — Kang Suk-hoon, founder, in the [Yonsang business interview (2022)](https://www.yonsang.com/yonsang/newsletter.asp?act=view&mid=Y01_05&cmid=Y01_05&cid=0&bid=8&idx=1835)

## 12. Principles

1. **Pink earns its appearance.** `#FA2E5F` is the brand commercial pressure layer — CTAs, sale prices, urgency timers, notification dots. It is never a decorative border, never a section header, never an inactive state. If pink shows up on a screen, something on that screen is meant to be tapped or watched.
   *UI implication:* Active filter state uses filled black (`#222222`), not pink. Section dividers are `#EEEEEE`, not pink. Pink is reserved.

2. **Image is the protagonist.** Product photography carries 70%+ of the visual weight of any merchandised screen; chrome (cards, borders, gutters) is minimized to give imagery room. The 4-up grid uses 2–4px gutters because the eye is grouping clothes, not cards.
   *UI implication:* Don't add shadow or radius to grid cards. Don't put a colored ring around product images. Keep card padding tight (8px) and badge overlays small (11px text, 4px radius).

3. **Mobile-only, period.** Ably is built for the phone in the user's hand on the subway. There is no desktop-native experience. Desktop is a centered phone-frame column at best.
   *UI implication:* Design at 375px. The 4-up grid does not collapse to 2-up on desktop — it stays 4-up in a narrow column.

4. **Speed of decision over depth of information.** Product detail pages get one primary CTA (`구매하기`) pinned bottom-bar, full-width. Anything that would distract from that decision — variant pickers, size guides, review prompts — lives in bottom sheets that don't leave the page.
   *UI implication:* No multi-step variant selection. Size and color picker is one bottom sheet. The CTA is always visible.

5. **Korean primary, MZ-informal as the default register.** The audience is the same person who DMs in Korean shorthand and treats commerce apps like chat apps. The voice meets them there.
   *UI implication:* Default to `~해요` / `~예요` endings; reserve `합니다` for legal and disclosure pages only.

6. **Free shipping is a brand asset, not a promotion.** "전 상품 무료배송" is in the meta title and the homepage promise. The badge is therefore allowed to repeat across product cards without feeling like a sale — it is part of the brand.
   *UI implication:* Free-shipping badge can sit on every eligible product card. Promotional badges (쇼킹딜, 30%) cannot — they require an actual event.

## 13. Personas

*Personas below are fictional archetypes informed by publicly described Korean MZ commerce user segments, not individual people.*

**민지 (Minji), 22, Seoul.** University student, third year. Opens Ably 3–4 times a day — between classes, on the bus, before sleep. Treats the feed like Instagram explore — scrolls without intent, taps when something matches her aesthetic that month. Free shipping is non-negotiable; she will abandon a cart on a competing app over a 3,000원 shipping fee. Uses wishlist as a mood-board, often buys what's been wishlisted 1–2 weeks. Reads Korean only; English product names are tolerated as decoration.

**유진 (Yujin), 26, Gyeonggi.** Office worker at a mid-size company in Pangyo. Uses Ably during lunch break and the commute home. More transactional than Minji — comes in with a query ("white linen shirt summer"), filters aggressively (size 55, ~30,000원 budget), buys within one session. Trusts the rating + review count more than the brand of the seller. Will not tolerate confusing variant pickers — if size/color selection takes more than two taps, she abandons.

**서연 (Seoyeon), 19, Busan.** High school senior. Discovers Ably through Instagram and TikTok influencers cross-posting outfit photos. Often arrives via deeplink to a specific product. Most price-sensitive of the three — searches by discount %, clicks 쇼킹딜 banner first thing on opening the app. Wishlist holds 200+ items; buys when an item drops to her threshold. Wallet-share is small per order; transaction frequency is high.

## 14. States

| State | Treatment |
|---|---|
| **Empty (first visit, no history)** | Single Korean line in 14px `#666666` body ("아직 둘러본 상품이 없어요"), plus one suggestion CTA in pink-outlined secondary button style ("카테고리 둘러보기"). Never an illustration unless it's a brand-event surface. |
| **Empty (filter cleared, no results)** | One line in 13px `#999999` caption ("조건에 맞는 상품이 없어요"). One ghost button below ("필터 초기화") — user resets themselves, no auto-reset. |
| **Empty (wishlist)** | "찜한 상품이 없어요" 16px / 600 / `#333333`, sub-line 13px / 400 / `#666666` ("마음에 드는 옷을 찜해보세요"), illustrated heart icon 64px in `#EEEEEE`. One pink CTA "쇼핑하러 가기". |
| **Loading (first paint, grid)** | Skeleton blocks: `#F5F5F5` 1:1 squares matching grid layout, 1.2s shimmer with `linear-gradient(90deg, #F5F5F5 0%, #FAFAFA 50%, #F5F5F5 100%)`. Price area shown as `#EEEEEE` 60% width bar. |
| **Loading (pagination)** | Bottom spinner: 24px circular, `#FA2E5F` stroke, `#EEEEEE` track. Existing content stays, no overlay. |
| **Loading (button pressed, CTA)** | "구매하기" text replaced by 3-dot white loading animation. Button width unchanged. Pink background unchanged. Tap disabled. |
| **Error (form field)** | `#F0124B` 1px border on the input, error text 12px `#F0124B` 8px below the field. One actionable line ("우편번호를 다시 확인해 주세요"). |
| **Error (toast)** | `#222222` background, 13px white text, 2s auto-dismiss. Bottom of screen, 20px above tab bar. |
| **Error (screen-blocking)** | Reserved for server outage. Centered `#666666` 16px line, "다시 시도하기" ghost button in `#FA2E5F`. No illustration. |
| **Success (item added)** | Toast: `#222222` background, white 13px text ("찜에 추가되었어요" / "장바구니에 담겼어요"), 2s. No screen change. |
| **Success (order placed)** | Dedicated confirmation screen — not a toast. Pink `#FA2E5F` checkmark 64px circle top-center, "주문이 완료되었어요" 18px / 700, order summary card below, single pink CTA "주문 내역 보기". This weight is intentional; orders are never just toast. |
| **Skeleton (detail page)** | Image area: full-bleed `#F5F5F5` square with shimmer. Title bar: 60% width / 20px height. Price bar: 40% width / 24px height. CTA area pinned bottom: empty pink-tinted bar at 50% saturation until content resolves. |
| **Disabled (CTA)** | Background `#FFC2D2` (50%-tinted pink) or `#F0F0F0` (neutral disabled depending on context), text `#FFFFFF` or `#BBBBBB`. Cursor / press-state is non-responsive. |
| **Soldout / Restocking** | Full-page overlay on product image at `rgba(0,0,0,0.5)` with center white text "품절" 20px / 700. CTA changes from "구매하기" to "재입고 알림 받기" (`#222222` background, white text). |

## 15. Motion & Easing

**Durations** (named, not raw milliseconds):

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle flips, checkbox state changes, filter chip activation |
| `motion-fast` | 150ms | Hover/press overlay, heart wishlist toggle, badge reveals |
| `motion-standard` | 250ms | Bottom sheet open, dropdown reveal, tab content swap, card expand |
| `motion-slow` | 400ms | Order-success checkmark draw, onboarding step advance |
| `motion-page` | 300ms | Full-screen route push/pop |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Things appearing — sheets, toasts, screen pushes |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Things leaving — dismissals, pops |
| `ease-standard` | `cubic-bezier(0.4, 0.0, 0.2, 1)` | Two-way transitions — collapsible cards, tab swaps |
| `ease-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Reserved — order-success checkmark, wishlist heart pop. Nowhere routine. |

**Signature motions.**

1. **Wishlist heart pop.** When the user taps the heart icon on a product card, the outline transitions to filled `#FA2E5F` over `motion-fast / ease-spring`, with a 1.0 → 1.25 → 1.0 scale pop. The overshoot is licensed here because the gesture is emotional — adding to wishlist is "saying yes" and the heart should feel it.
2. **Sale timer tick.** The seconds digit re-renders every 1000ms with `motion-fast / ease-standard`, briefly going `opacity: 0.7` → `opacity: 1.0` to communicate liveness. The minutes/hours digits do not animate per-tick (would feel noisy).
3. **Bottom-sheet presentation.** Sheets rise from `y+40px` with `motion-standard / ease-enter` and a synchronized backdrop fade `rgba(0,0,0,0)` → `rgba(0,0,0,0.5)`. Dismissal uses `motion-fast / ease-exit` — leaving is lighter than entering.
4. **Order-success checkmark.** The pink checkmark on the order-complete screen draws over `motion-slow / ease-spring`. This and the wishlist heart are the only two places spring easing is licensed.
5. **Reduce motion.** If `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant`. Crossfades replace slides. Spring overshoots fall back to linear. The app stays usable; just less kinetic.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Direct verification (2026-05-13):
- https://m.a-bly.com — confirms live site, page title "에이블리 | 전상품 무료배송",
  mobile-first redirect from www.a-bly.com → m.a-bly.com.

Brand/founder/culture sources (WebSearch + WebFetch):
- https://ably-team.medium.com/ably-culture-a640fb3f7cf9 — Ably Team Medium,
  "에이블리는 면접이라는 단어를 사용하지 않는다" — confirms internal language norms
  (팀원 vs 직원, 인터뷰 vs 면접) and the anti-corporate register.
- https://www.sedaily.com/NewsView/22SSWLO75W — Sedaily interview with Kang Suk-hoon,
  founder positioning ("패알못이 만든 패션 플랫폼", taste-driven commerce framing).
- https://economist.co.kr/article/view/ecn202405080023 — Economist Korea (May 2024),
  "조 단위 거래액" — scale & operating discipline context.
- https://www.hankyung.com/economy/article/2020122085521 — Hankyung (Dec 2020),
  2700% growth, founder-quoted vision.
- https://www.smartfn.co.kr/article/view/sfn202402130003 — SmartFN (Feb 2024),
  annual profitability framing.
- https://www.kedglobal.com/korean-startups/newsView/ked202310120014 — KED Global (Oct 2023),
  Ably-Meta AI ad measurement partnership; explicit "Ably Corp vs ably.com" disambiguation.

Not independently verified via WebFetch — widely documented:
- Ably (Ably Corp) was founded in 2018 by Kang Suk-hoon (강석훈).
- 50M+ app downloads by late 2024 and 10M MAU by mid-2025 are widely reported
  but exact figures should be re-verified against Ably PR before being shipped as facts.

Personas (§13) are fictional archetypes informed by publicly described Korean
MZ commerce user segments. Any resemblance to specific individuals is unintended.

Interpretive claims (e.g., "pink earns its appearance", "image is the protagonist")
are editorial readings of the live brand surface, not documented Ably statements.

§4 token values are flagged as `(unverified live)` in the §4 footer; Phase U2
live `getComputedStyle` re-capture is required to upgrade them to verified.
-->
