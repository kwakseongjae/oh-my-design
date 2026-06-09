---
id: kurly
name: Kurly
country: KR
category: ecommerce
homepage: "https://www.kurly.com"
primary_color: "#5f0080"
logo:
  type: favicon
  slug: "https://res.kurly.com/icons/favicon-128x128.png"
verified: "2026-05-15"
omd: "0.1"
tokens:
  source: reconciled
  extracted: "2026-06-08"
  components_harvested: true
  note: "deterministic picks (#bd76ff tint, #1a73e8 Google embed) rejected; canonical = Kurly Purple purple-900"
  colors:
    primary: "#5f0080"
    purple-800: "#672091"
    purple-700: "#7e3ab0"
    purple-500: "#9a60ca"
    purple-100: "#e8dbf3"
    purple-50: "#f5effa"
    canvas: "#ffffff"
    foreground: "#1c1c1c"
    body: "#393d41"
    muted: "#464c52"
    on-primary: "#ffffff"
  typography:
    family: { sans: "Noto Sans KR" }
    display-72:  { size: 72, weight: 700, use: "Hero magazine headlines (web)" }
    display-44:  { size: 44, weight: 700, use: "Editorial section headers" }
    headline-36: { size: 36, weight: 700, use: "Page titles, category banners" }
    headline-28: { size: 28, weight: 700, use: "Subsection headers" }
    title-24:    { size: 24, weight: 600, use: "Card-cluster / dialog titles" }
    title-18:    { size: 18, weight: 600, use: "Standard product / modal titles" }
    body-16:     { size: 16, weight: 400, use: "Default reading text, button labels" }
  spacing: { xxs: 2, xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 4, md: 8, lg: 16, full: 9999 }
  shadow:
    subtle: "0px 2px 2px 0px rgba(0,0,0,0.03)"
    card-hover: "0px 0px 4px 0px rgba(0,0,0,0.15)"
    floating: "2px 2px 10px 0px rgba(0,0,0,0.10)"
  components:
    button-primary: { type: button, bg: "#5f0080", fg: "#ffffff", radius: "6px", padding: "16px 24px", font: "16px / 600", active: "#672091", disabled: "#dfe4eb bg, #848f9a text", use: "Primary commerce CTAs (구매하기, 장바구니 담기, 주문하기)" }
    button-secondary: { type: button, bg: "#ffffff", fg: "#5f0080", border: "1px solid #5f0080", radius: "6px", padding: "12px 20px", font: "14px / 600", active: "#f5effa bg", use: "Secondary actions (바로 구매, 옵션 변경)" }
    button-critical: { type: button, bg: "#e22d2e", fg: "#ffffff", radius: "6px", padding: "12px 20px", font: "14px / 600", active: "#d81b1c", use: "Last-chance sale CTAs, destructive confirms (삭제)" }
    card: { type: card, bg: "#ffffff", radius: "4px", padding: "12px 4px", shadow: "none", hover: "0px 0px 4px rgba(0,0,0,0.15)", use: "Category list, search results, recommendation rails" }
---

# Design System Inspiration of Kurly (컬리 / 마켓컬리)

## 1. Visual Theme & Atmosphere

Kurly's interface is the digital equivalent of a curator's grocer -- a quiet white-and-cream gallery wall where the only saturated thing in the room is one deep, editorial purple. The page opens on a near-pure white canvas (`#ffffff`) with a soft cool-gray utility fill (`#f2f5f8`) and ink-black headings (`#222`), and the unmistakable **Kurly Purple `#5f0080`** carries every brand moment that matters: the wordmark, the primary CTA, the `샛별배송` (dawn delivery) badge, the cart icon's active state. This is not a corporate purple of fintech dashboards or telco logos; it is closer to the deep aubergine of a high-end pâtisserie awning -- premium, restrained, slightly aristocratic.

The system, internally referenced in compiled CSS as **KPDS (Kurly Product Design System)**, treats purple the way a fine-dining restaurant treats truffle: a small amount, deployed with intention. Typography is **Pretendard** -- Korea's de-facto product sans -- never a custom display face, because the photography of the food *is* the brand expression and the type's job is to step out of its way. The overall aesthetic is editorial-magazine-meets-grocery: dense product grids on cream/white, generous photographic real estate, restrained chrome, and the same purple repeated just often enough that the eye learns to associate it with "Kurly promised this."

**Key Characteristics:**
- Kurly Purple (`#5f0080`) as the singular brand mark -- premium, editorial, never a tint
- Pretendard product font with system-font fallback chain (no custom display typeface)
- Cool-gray neutral scale anchored at `#f2f5f8` (lightest) → `#222` (deepest), 12 steps total
- KPDS three-tier token system (palette → semantic → component) compiled into CSS variables
- Photography-forward product grids (1:1 thumbnail dominant, type secondary)
- Whitespace-generous "보다 나은 삶" (better life) tone -- never crowded, never carnival
- Dawn-delivery `샛별배송` badge as a recurring brand moment in purple
- Mobile-first commerce density: 2-column product grid below 768px, 4-column on desktop

## 2. Color Palette & Roles

### Primary
- **Kurly Purple** (`#5f0080`): KPDS `purple-900`. Primary CTA, brand wordmark, `샛별배송` (dawn delivery) badge, active states. The single defining color of the brand.
- **Purple 800** (`#672091`): Pressed/hover for purple CTAs, dark contexts.
- **Purple 700** (`#7e3ab0`): Mid-emphasis brand accent for editorial banners.
- **Purple 500** (`#9a60ca`): Tints used in hero gradients, lifestyle banners.
- **Purple 300** (`#c19edf`): Soft brand-tinted backgrounds, premium chips.
- **Purple 100** (`#e8dbf3`): Brand-weak background for ribbons, callouts.
- **Purple 50** (`#f5effa`): Whisper-tint for selected rows and subtle brand surfaces.

### Foreground (Ink)
- **Ink 900** (`#1c1c1c`): KPDS `gray-900`. Reserved for highest-contrast headings.
- **Ink 800** (`#222`): Default heading and price color. Slightly softer than pure black -- the warmth that keeps the white pages from going clinical.
- **Ink 600** (`#393d41`): Body text on white.
- **Ink 500** (`#464c52`): Sub-body, descriptions.
- **Ink 400** (`#565e67`): Caption, metadata.
- **Ink 300** (`#848f9a`): Disabled labels, placeholder.

### Surface & Border
- **Pure White** (`#ffffff`): Page background, card surface.
- **Cream Fill** (`#f2f5f8`): KPDS `gray-100`. Section background, search bar fill, neutral chip fill.
- **Hairline Soft** (`#eceff3`): KPDS `gray-200`. Subtle separators.
- **Hairline Default** (`#dfe4eb`): KPDS `gray-300`. Standard 1px borders.
- **Hairline Strong** (`#cbd1d7`): KPDS `gray-400`. Definitive borders, input outlines.
- **Mute Border** (`#bcc4cc`): KPDS `gray-500`. Pressed border on outline buttons.

### Semantic
- **Sale Red** (`#e22d2e`): KPDS `red-700`. Discount %, error foreground, `세일` badge.
- **Sale Red Deep** (`#d81b1c`): Pressed sale-red.
- **Sale Red Tint** (`#fbe4e4`): Discount ribbon background, error inline tint.
- **Coral** (`#fa622f`): KPDS `orange-700`. Limited-time offers, "오늘만" promotional color (used sparingly to avoid competing with purple).
- **Coral Tint** (`#feebe4`): Promotional background.
- **Success Green** (`#029568`): KPDS `green-600`. Success toasts, fresh/organic indicators.
- **Info Blue** (`#216ba5`): Hyperlinks, informational states.

### Promotional Purple (Bright)
- **Bright Purple** (`#bd76ff`): KPDS `purple-bright-300`. Promotional accent (mobile pill highlights, "Beauty Kurly" sub-brand) -- distinct from `#5f0080` by intent: deep purple = trust, bright purple = play.
- **Bright Purple Soft** (`#f6edff`): Promotional background tint.

## 3. Typography Rules

### Font Family
- **Primary**: `Pretendard, "Pretendard Variable", -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif`
- **Design Principle**: Pretendard is the entire type voice. There is no custom display face; the brand puts its visual personality into product photography and that one purple, not into letterforms.

### Hierarchy

| Role | Size | Weight | Use |
|------|------|--------|-----|
| Display 72 | 72px | 700 | Hero magazine headlines (web only) |
| Display 44 | 44px | 700 | Editorial section headers |
| Headline 36 | 36px | 700 | Page titles, category banners |
| Headline 28 | 28px | 700 | Subsection headers |
| Title 24 | 24px | 600 | Card-cluster titles, dialog titles |
| Title 20 | 20px | 600 | Strong product titles, list section headers |
| Title 18 | 18px | 600 | Standard product titles, modal titles |
| Body 16 | 16px | 400 | Default reading text, button labels (lg) |
| Body 14 | 14px | 400 | Secondary body, button labels (md) |
| Caption 13 | 13px | 400 | Metadata, brand line on product card |
| Caption 12 | 12px | 400 | Timestamps, fine print |
| Micro 10 | 10px | 600 | Badge text (`샛별배송`, `Kurly Only`) |

### Weights
- **400 Regular**: Body, captions, descriptions.
- **600 SemiBold**: Titles, button labels, pricing emphasis.
- **700 Bold**: Headlines, hero copy, the price-with-discount stack.

### Principles
- **Three weights only.** Pretendard offers more; Kurly uses 400/600/700 across the entire system to keep the editorial-grocery rhythm steady.
- **Price typography is its own register.** Discount percentage in `Sale Red #e22d2e` 18-20px / 700, original price in `Ink 300` 13px / 400 with strikethrough, final price in `Ink 800 #222` 18-20px / 700. The triple-stack repeats on every product card.
- **No italics in body.** Italics appear only inside long-form magazine content (recipe stories, supplier features), never in commerce chrome.
- **Korean-first metrics.** Sizes are tuned for Korean glyph density; line-height runs slightly tighter (1.4-1.5x) than equivalent Latin-only systems.

## 4. Component Stylings

### Buttons

**Primary (Kurly Purple)**
- Background: `#5f0080`
- Text: `#ffffff`
- Radius: 6px
- Padding: 16px 24px (lg), 12px 20px (md), 8px 16px (sm)
- Font: 16px / 600 / Pretendard
- Pressed: `#672091`
- Disabled: `#dfe4eb` background, `#848f9a` text
- Use: Primary commerce CTAs (`구매하기`, `장바구니 담기`, `주문하기`)

**Secondary (Outline Purple)**
- Background: `#ffffff`
- Text: `#5f0080`
- Border: 1px solid `#5f0080`
- Radius: 6px
- Padding: 12px 20px
- Font: 14px / 600 / Pretendard
- Pressed: `#f5effa` background
- Use: Secondary actions (`바로 구매`, `옵션 변경`)

**Neutral (Cream Fill)**
- Background: `#f2f5f8`
- Text: `#222`
- Border: 1px solid `#dfe4eb`
- Radius: 6px
- Padding: 12px 20px
- Font: 14px / 600 / Pretendard
- Pressed: `#eceff3` background
- Use: Tertiary actions (`취소`, `더보기`, filter open)

**Ghost / Text Link**
- Background: transparent
- Text: `#5f0080`
- Radius: 0
- Padding: 4px 8px
- Font: 14px / 600 / Pretendard with right-chevron glyph
- Use: Inline navigation (`전체보기 >`, `더 알아보기 >`)

**Critical (Sale / Destructive)**
- Background: `#e22d2e`
- Text: `#ffffff`
- Radius: 6px
- Padding: 12px 20px
- Font: 14px / 600 / Pretendard
- Pressed: `#d81b1c`
- Use: Last-chance sale CTAs, destructive confirms (`삭제`)

### Inputs

**Default**
- Background: `#ffffff`
- Border: 1px solid `#dfe4eb`
- Radius: 6px
- Padding: 12px 16px
- Font: 16px / 400 / Pretendard, text `#222`
- Placeholder: `#848f9a`
- Focus: 1px solid `#5f0080` (no glow ring -- editorial restraint)
- Disabled: `#f2f5f8` background, `#a7b2bc` text
- Use: Standard text fields (login, address, search-modal)

**Search Bar (Header)**
- Background: `#f2f5f8`
- Border: none
- Radius: 6px
- Padding: 10px 16px (left), 10px 44px (right -- search icon slot)
- Font: 14px / 400 / Pretendard
- Placeholder: `검색어를 입력해주세요` in `#848f9a`
- Active: focus underline `#5f0080` 1px on bottom edge
- Use: Persistent top-of-page search

**Quantity Stepper**
- Background: `#ffffff`
- Border: 1px solid `#dfe4eb`
- Radius: 4px
- Height: 36px, width 96px (3 segments: − / count / +)
- Font: 14px / 600 center segment
- Use: Cart and product page quantity selection

### Cards

**Product Card (Grid)**
- Background: `#ffffff`
- Border: none (separated by 16px gap on cream `#f2f5f8` page or 16px gap on white)
- Radius: 4px on image (top), 0 on text block
- Padding: 0 (image bleeds), 12px 4px (text block)
- Shadow: none in default state, `0px 0px 4px rgba(0,0,0,0.15)` on hover (KPDS shadow-2)
- Image: 1:1 aspect ratio, lazy-loaded WebP
- Title: 14px / 400 / `#222`, max 2 lines with ellipsis
- Brand line: 12px / 400 / `#848f9a`, max 1 line
- Price stack: discount % `#e22d2e` 16px / 700 + final price `#222` 16px / 700 + original price `#a7b2bc` 13px / 400 strikethrough
- Badges: `샛별배송` purple chip top-left of image area
- Use: Category list, search results, recommendation rails

**Editorial Banner Card**
- Background: `#ffffff` or photographic full-bleed
- Radius: 8px
- Padding: 24px when copy is overlaid on white panel; 0 when full-bleed photo with caption below
- Shadow: none (banners earn weight from photography, not chrome)
- Use: Magazine-style storytelling tiles (`Kurly's Pick`, `오늘의 레시피`)

**Modal / Dialog**
- Background: `#ffffff`
- Radius: 12px
- Padding: 24px
- Shadow: `0px 0px 30px rgba(0,0,0,0.25)` (KPDS shadow-elevated)
- Max-width: 480px
- Title: 20px / 700 / `#222`, body: 14px / 400 / `#393d41`
- Use: Confirmation dialogs, address-edit, coupon-apply

### Badges

**샛별배송 (Dawn Delivery)**
- Background: `#5f0080`
- Text: `#ffffff`
- Radius: 4px
- Padding: 4px 8px
- Font: 11px / 700 / Pretendard
- Use: Top-left overlay on product card image; signals dawn-delivery eligibility

**Kurly Only**
- Background: `#ffffff`
- Text: `#5f0080`
- Border: 1px solid `#5f0080`
- Radius: 4px
- Padding: 4px 8px
- Font: 11px / 700
- Use: Exclusive-to-Kurly product indicator

**Sale (Discount)**
- Background: `#e22d2e`
- Text: `#ffffff`
- Radius: 4px
- Padding: 4px 6px
- Font: 11px / 700
- Use: Time-bound discount overlays on hero rails

**Soldout**
- Background: rgba(0,0,0,0.5) full-image overlay
- Text: `#ffffff` 14px / 700 centered (`일시품절`)
- Radius: matches parent card image radius
- Use: Out-of-stock product card state

**Neutral Tag**
- Background: `#f2f5f8`
- Text: `#393d41`
- Radius: 4px
- Padding: 4px 8px
- Font: 12px / 400
- Use: Category chips, filter chips (inactive)

**Filter Chip — Selected**
- Background: `#5f0080`
- Text: `#ffffff`
- Radius: 4px
- Padding: 4px 8px
- Font: 12px / 600
- Use: Active filter selection in category browse

### Navigation
- **Top GNB**: White background, 80px height on desktop, 56px on mobile. Wordmark in Kurly Purple `#5f0080`, nav links in `#222` 14px / 600. Underline-on-active in `#5f0080` 2px.
- **Side category drawer**: Cream `#f2f5f8` background, hover state `#eceff3`, active row `#f5effa` with `#5f0080` left bar 3px.
- **Bottom tab (mobile app surface)**: White background with hairline top border `#eceff3`. Active tab icon + label `#5f0080`, inactive `#848f9a`.

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Scale: 2px, 4px, 6px, 8px, 10px, 12px, 16px, 24px, 32px, 40px, 48px, 64px, 80px, 96px, 160px (KPDS spacing tokens)
- Page horizontal gutter: 16px (mobile), 24px (tablet), 40px (desktop)
- Section vertical rhythm: 64px between major content sections, 32px between sub-sections

### Grid & Container
- Mobile: 2-column product grid, 8px gap
- Tablet: 3-column product grid, 12px gap
- Desktop: 4-column product grid, 16px gap, 1050px content max-width centered with editorial whitespace flanking
- Header GNB: full-bleed white, 1050px content cluster centered

### Whitespace Philosophy
- **Photography-forward, chrome-light.** Product images are the heroes; cards have no borders, hairlines stay quiet, shadows appear only on hover.
- **Cream rests, white acts.** Page bands alternate `#f2f5f8` (rest sections, footers) and `#ffffff` (active product grids) so the eye gets pause between commerce density.
- **Generous gutters in marketing, tight grids in commerce.** A `Kurly's Pick` editorial banner breathes at 64-96px vertical; a category grid tightens to 16-24px.

### Border Radius Scale
- Small (4px): Product card image, badges, chips, filter pills, search bar
- Medium (6px): Buttons, inputs, quantity stepper
- Large (8px): Editorial banners, content tiles
- XL (12px): Modals, sheets, large feature cards

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Default product cards, page sections |
| Subtle | `0px 2px 2px 0px rgba(0,0,0,0.03)` | Sticky headers, gentle separation |
| Card-Hover | `0px 0px 4px 0px rgba(0,0,0,0.15)` | Product card on hover |
| Floating | `2px 2px 10px 0px rgba(0,0,0,0.10)` | Dropdown, popover, tooltip |
| Elevated | `0px 0px 30px 0px rgba(0,0,0,0.25)` | Modal dialogs, full-screen sheet entries |
| Overlay-Heavy | `0px 4px 10px 0px rgba(0,0,0,0.40)` | Image lightbox, full-takeover overlays |

**Shadow Philosophy.** Kurly shadows are pure black with low opacity — never purple-tinted. The brand wants the purple to feel like one warm, deliberate object on the page; tinting shadows would dilute that singular role. Default cards stay flat; elevation appears only at meaningful interaction (hover, modal entry). The system has 6 named shadows but 4 of them are reserved for floating/modal contexts — most surfaces are flat.

## 7. Do's and Don'ts

### Do
- Use Kurly Purple (`#5f0080`) as the singular brand mark — wordmark, primary CTA, dawn-delivery badge
- Pair purple with cream `#f2f5f8` and white `#ffffff` only — let photography supply the warmth
- Lead with photography on every product card — image takes the top 60% of the tile
- Stack the price triple consistently: discount % (red), final price (ink), original price (strikethrough gray)
- Use Pretendard at weights 400 / 600 / 700 only
- Rest the page on cream sections between commerce-dense white grids
- Reserve the bright purple `#bd76ff` for promotional sub-brand moments only (Beauty Kurly)

### Don't
- Don't tint shadows purple — Kurly shadows are neutral so the purple stays singular
- Don't use Kurly Purple for backgrounds at scale — it is for marks and CTAs, not hero fills
- Don't introduce a second deep brand color (no "Kurly Green," no "Kurly Navy")
- Don't crowd product cards with badges — at most 2 badges visible per card (`샛별배송` + one)
- Don't use italics in commerce chrome — italics belong only to long-form editorial copy
- Don't borrow Coupang/SSG visual cues (heavy red, dense ribbons) — Kurly is editorial, not arcade
- Don't use pure black `#000` for text — `#222` (ink-800) keeps the page from going clinical

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <768px | 2-col product grid, 56px GNB, bottom tab bar |
| Tablet | 768-1024px | 3-col product grid, GNB compresses category dropdowns |
| Desktop | >1024px | 4-col grid, full GNB, 1050px content centered, editorial flanks |

### Touch Targets
- Buttons: 48px (lg), 44px (md), 36px (sm) — all comfortably above 44px AAA
- Tab bar items: 56px height with stacked icon + label
- Product card tap target: full card area (image + text block)
- Quantity stepper: 36px height, 32px wide segments

### Collapsing Strategy
- Product grid: 4 → 3 → 2 columns as viewport narrows
- GNB top: full menu on desktop → hamburger drawer on mobile
- Bottom CTA on PDP: sticky full-width on mobile, inline column on desktop
- Editorial banners: side-by-side on desktop → stacked single column on mobile

### Image Behavior
- Product thumbnail: 1:1 ratio, 4px top corner radius, WebP / JPEG fallback, lazy-loaded
- Hero banner: 16:9 on desktop, 4:3 on mobile
- Full-bleed editorial: edge-to-edge, no radius

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Kurly Purple (`#5f0080`)
- CTA Pressed: Deep Purple (`#672091`)
- Background: White (`#ffffff`) / Cream (`#f2f5f8`)
- Heading: Ink (`#222`)
- Body: Dark Gray (`#393d41`)
- Caption: Mid Gray (`#565e67`)
- Placeholder/Disabled: Light Gray (`#848f9a`)
- Border: Hairline (`#dfe4eb`)
- Sale Red: (`#e22d2e`)
- Success: (`#029568`)
- Bright Purple (promo): (`#bd76ff`)

### Example Component Prompts
- "Create a Kurly product card: white bg, no border, 1:1 image with 4px top radius. `샛별배송` purple badge top-left of image. Below image: brand line 12px #848f9a, title 14px #222 max 2 lines, price triple-stack (discount % #e22d2e 16px/700, final price #222 16px/700, original price #a7b2bc 13px/400 strikethrough). Card-hover shadow 0px 0px 4px rgba(0,0,0,0.15)."
- "Build a primary CTA: #5f0080 bg, white text, 16px weight 600 Pretendard, 6px radius, 16px 24px padding, full-width on mobile. Pressed: #672091. Disabled: #dfe4eb bg, #848f9a text."
- "Design a search bar: #f2f5f8 bg, no border, 6px radius, 14px Pretendard placeholder #848f9a. Search icon right-padding 44px slot. Focus underline #5f0080 1px on bottom edge."
- "Create a 샛별배송 badge: #5f0080 bg, white text 11px weight 700, 4px radius, 4px 8px padding. Place top-left over product image with 8px inset."
- "Build an editorial banner card: full-bleed photographic top, white panel below with 24px padding, 8px radius corners, no shadow. Title 24px/700 #222, supporting line 14px/400 #393d41, ghost CTA `더 알아보기 >` in #5f0080."

### Iteration Guide
1. Primary purple is `#5f0080` — only this hex for brand mark and primary CTA
2. Pair with white `#ffffff` and cream `#f2f5f8`; never tint hero backgrounds purple
3. Pretendard at 400 / 600 / 700 only — no italics in commerce chrome
4. Border-radius defaults: 4px (cards/badges), 6px (buttons/inputs), 8-12px (banners/modals)
5. Shadows are neutral black, low opacity, used only at hover and elevation
6. Price triple-stack is sacred: red % + ink final + gray original (strikethrough)
7. `샛별배송` purple badge is the brand's most repeated micro-component — recognize it as a brand moment

---

## 10. Voice & Tone

Kurly speaks like the friend who quietly knows the best butcher, the best baker, and the orchard that ships the strawberries before sunrise — confident without performing, warm without being chatty, and allergic to the gameshow shouting of mass e-commerce. The voice assumes a busy dual-income household at 10:47pm staring at an empty fridge: it does not exclaim, it does not gamify, it simply names the thing and confirms it will arrive while you sleep. Korean copy uses `-요` and `-습니다` registers fluidly — `장바구니에 담겼어요` for warmth, `주문이 완료되었습니다` for transactions — but never the playful `-야`/`-지` of younger consumer apps. English microcopy on the brand surfaces stays at the same register: *"Better Life for All"*, not *"Get groceries fast!!!"*

| Context | Tone |
|---|---|
| CTAs | Verb-first Korean (`구매하기`, `장바구니 담기`, `샛별배송으로 받기`) — never exclamatory, never `Click here!` |
| Empty states | One quiet sentence naming why it's empty + one low-key action. Never `데이터가 없습니다`. |
| Error messages | Specific and blameless. `다시 시도해 주세요` over `오류가 발생했습니다`. |
| Success toasts | Past-tense single sentence (`장바구니에 담겼어요`). No exclamation marks. |
| Product descriptions | Editorial — supplier name, region, harvest method first. Marketing claims (`최고의`, `프리미엄`) only when sourced. |
| Promotional banners | Restrained even in sales. `오늘만 이 가격` rather than `MEGA SALE!!!`. |
| Trust & delivery copy | Calm and operational. `내일 아침 7시 전 도착` is more powerful than `초고속 배송`. |
| Onboarding | One screen, one promise (dawn delivery), one CTA. No carousel of features. |

**Forbidden phrases.** `대박`, `미친 가격`, `초특가`, `쇼킹`, English boilerplate like `Mind-blowing deals`, `Lightning fast`, `Don't miss out`. Excessive emoji are banned in price chrome and trust copy; allowed sparingly in editorial recipe content. The voice never uses three exclamation marks; rarely uses one. `혁신적인` is banned — Kurly does not call itself innovative; it just delivers before sunrise.

**Voice samples.**

- `Better Life for All` — corporate brand promise. <!-- verified: kurly.com og:site_name + meta, 2026-05 -->
- `건강한 식재료부터 믿을 수 있는 뷰티, 라이프스타일 상품까지. 나와 내 가족이 사고 싶은 상품을 판매합니다.` — homepage meta description. <!-- verified: kurly.com meta description, 2026-05 -->
- `내일 아침 문 앞에서 만나요!` — dawn-delivery brand line, homepage meta. <!-- verified: kurly.com meta description, 2026-05 -->
- `샛별배송` — brand-defining badge for dawn delivery (delivered by 7am for orders by 11pm). <!-- verified: kurly.com brand surfaces, 2026-05 -->
- `장바구니에 담겼어요` — illustrative success-toast pattern in Kurly register. <!-- illustrative: not verified as live Kurly copy -->
- `오늘만 이 가격` — illustrative restrained promotion line in Kurly register. <!-- illustrative: not verified as live Kurly copy -->
- `내일의 장보기, 오늘 끝.` — illustrative tagline pattern in Kurly register (dawn-delivery promise). <!-- illustrative: not verified as live Kurly copy -->

## 11. Brand Narrative

Kurly (컬리, parent of 마켓컬리/Market Kurly) was founded on December 21, 2014 by **Sophie Kim (김슬아 / Kim Seul-ah)**, a Wellesley College political science graduate (2006, cum laude) who had spent her twenties at Goldman Sachs Hong Kong (2007, fixed income), McKinsey & Company (2010), Temasek Holdings (2012), and Bain & Company Korea (2013) — and who, at every stop, had been quietly frustrated that the produce in Korean grocery aisles never matched what her own family ate. The original company name was **The Farmers**; the consumer-facing service launched in 2015 with **30 SKUs**. The company rebranded to Kurly Inc. in 2018 ([Wikipedia: Sophie Kim](https://en.wikipedia.org/wiki/Sophie_Kim), [KED Global — Sophie Kim road less traveled](https://www.kedglobal.com/chief-executives/newsView/ked202201190017)).

The product is built around a single idea: **샛별배송 (saetbyeol-baesong, "morning star delivery")** — order by 11pm, your fresh groceries arrive by 7am the next morning, full cold chain maintained from farm to apartment door. This was unprecedented in Korea when Kurly launched it; the entire e-grocery industry has since copied the model. Around that operational spine sits a deliberately editorial commerce surface: 1:1 product photography, magazine-style supplier features, restrained chrome, and one deep purple (`#5f0080`) repeated just often enough to brand the promise. The visual decision tracks the founder's positioning bet — Korean grocery shoppers (especially dual-income working couples in Seoul/Pangyo/Gangnam) would pay a premium *if* the product, the photography, and the trust narrative all signaled "curated." So everything signals curated, including the type-on-cream restraint and the absence of promotional carnival ([KED Global — dawn delivery pioneer](https://www.kedglobal.com/e-commerce/newsView/ked202412200010), [Marketline — Kurly pioneering dawn delivery](https://www.marketline.com/blog/kurly-pioneering-dawn-delivery-service-market-in-south-korea/)).

The financial trajectory mirrors the visual one — quiet, then loud. Series A (2015), Series B (2017), then a string of high-conviction global rounds: **DST Global**, **Sequoia Capital China**, **Hillhouse**, **Aspex Management**, **Anchor Equity Partners**, plus strategic investors **CJ Logistics** and **SK Networks**. December 2021 pre-IPO closed at **$210M on a $3.3B valuation**, total funding around **$761M**. Kurly passed Korea Exchange preliminary IPO screening in **August 2022**, then **postponed the listing in January 2023** as global tech valuations cratered; a smaller pre-IPO round in **May 2023** repriced the company at roughly **2.5 trillion KRW**. The company has been re-targeting a KOSPI listing since early 2024 and posted its **first quarterly profit in Q1 2025**, reframing the IPO conversation around sustained profitability rather than growth-at-all-costs ([TechCrunch — IPO scrapped](https://techcrunch.com/2023/01/04/online-grocery-startup-kurly-scraps-ipo-amid-market-uncertainty/), [Korea Herald — Kurly opts for Korean market](https://www.koreaherald.com/article/2650215), [KED Global — first quarterly profit](https://www.kedglobal.com/earnings/newsView/ked202505130004)).

What Kurly refuses: the gameshow ribbons of Coupang, the SuperSale carnival of 11st, the celebrity-endorsement pile-on of legacy home shopping, and the aggressive "타임딜" countdown psychology of generic Korean e-commerce. The brand's entire claim is that **time-pressed working professionals would rather have one curated thing tomorrow at 7am than ten cheap things this afternoon** — and the design system is the visible argument for that bet. Purple is scarce because trust has to be scarce to be legible; photography is generous because the product is the brand; chrome is quiet because the product is loud enough.

## 12. Principles

1. **Purple is scarce, on purpose.** `#5f0080` appears on the wordmark, primary CTA, `샛별배송` badge, and active states — and almost nowhere else. *UI implication:* at most one purple element per viewport in primary commerce flow; multiple purple CTAs competing on one screen must demote one to neutral or outline.
2. **Photography is the brand voice.** The product image carries 60% of every card; type is secondary. *UI implication:* never let chrome (badges, ribbons, gradients) cover more than 15% of the product image area. If a design fights the photography, the design is wrong.
3. **Cream rests, white acts.** Page sections alternate `#f2f5f8` (rest, footer, editorial breathers) and `#ffffff` (active product grids). *UI implication:* don't run three commerce-dense white sections in a row without a cream rest band; the eye fatigues.
4. **The price triple-stack is a brand moment.** Discount % (red) + final (ink) + original (gray strikethrough) is repeated identically on every card, every PDP, every cart row. *UI implication:* never break the order or weights — even when only two of three are present, preserve their slots.
5. **Pretendard, three weights, no italics.** 400 / 600 / 700 across the entire system. *UI implication:* if a comp introduces a fourth weight or italic body copy, it has drifted off-system; reject or re-scope.
6. **`샛별배송` is sacred chrome.** The dawn-delivery badge is the most-repeated brand component on the surface — it carries the operational promise that justifies the premium. *UI implication:* never restyle it for "balance"; it is intentionally the most purple thing on the card.
7. **Restraint over carnival in promotion.** Sale messaging is bounded — `오늘만 이 가격` rather than countdown timers and screen-shake animations. *UI implication:* no flashing, no screen-fill takeovers, no exclamation chains. If a promo design borrows Coupang's energy, it has betrayed the brand.
8. **One operational promise, surfaced everywhere.** Every page, every flow, every empty state can answer: *will it be there by 7am?* — yes, no, or by-when. *UI implication:* delivery context is a default, not a detail-screen reveal. Cards, cart, checkout, confirmation all surface the dawn-delivery slot.

## 13. Personas

*Personas are fictional archetypes informed by publicly described Kurly customer segments (Korean dual-income working professionals, time-pressed parents, premium-grocery early adopters), not individual people.*

**서연 (Seoyeon), 34, 강남구.** Marketing director at a Korean conglomerate, husband works in finance, one toddler in daycare. Opens Kurly between 10:30pm and 11:00pm three nights a week — past the cutoff and the morning is broken. Buys organic eggs, French butter, the Sunday roast, the pediatrician-recommended baby food. Doesn't comparison-shop on price; comparison-shops on supplier and harvest date. Will pay 30% premium for the right strawberries.

**민준 (Minjun), 39, 판교.** Senior software engineer, wife runs a design studio, two elementary-age kids. Treats Kurly as the "weekday dinner solution" — meal kits, pre-marinated proteins, salad bases. Reads the supplier story on every product at least once. Has zero patience for the marketing language of legacy home shopping; the editorial restraint is exactly why he stayed after a one-week trial in 2019.

**지은 (Jieun), 28, 마포구.** Single, works in tech PR, lives alone, cooks for one. Discovered Kurly through Beauty Kurly first — Korean K-beauty editorial commerce — then converted to grocery. Buys small portions, premium snacks, niche imported pantry items (Italian anchovies, Japanese soy sauce, French chocolate). The dawn-delivery promise matters less than the curation: she trusts the merchandiser more than she trusts herself.

**Mr. & Mrs. Choi, 61, 잠실.** Empty-nesters, both retired professionals. Daughter set up the account during COVID; they kept using it because the produce quality is consistent and the customer-service tone is calm. Order weekly, primarily fresh fish, hanwoo beef, premium fruit boxes for grandchildren visits. Don't engage with promotions — engage with reliability.

## 14. States

| State | Treatment |
|---|---|
| **Empty (cart)** | Single quiet line (`장바구니가 비어있어요`) + one secondary outline-purple CTA (`상품 보러 가기`). Never an illustration. Never `데이터가 없습니다`. |
| **Empty (search no results)** | One line in `#565e67` 14px (`검색 결과가 없어요`). Single sub-line suggesting alternative searches. No button — user retypes themselves. |
| **Empty (filter cleared)** | One line of caption text. No button. The user resets the filter. |
| **Loading (product grid first paint)** | Skeleton blocks at `#f2f5f8` matching the final card layout — 1:1 thumbnail, 12px brand line, 14px title (2 lines), price stack. Subtle shimmer at 1.2s with 4% white highlight. |
| **Loading (PDP image)** | Cream `#f2f5f8` placeholder block with center-loading 24px purple `#5f0080` spinner. Maintains 1:1 aspect ratio so layout doesn't reflow. |
| **Loading (CTA in-flight)** | Button text replaced with 16px white spinner; button background stays `#5f0080`. No disabled state. |
| **Error (inline field)** | Input border becomes `#e22d2e` 1px, helper text below in `#e22d2e` 12px / 400. One actionable sentence (`주소를 다시 확인해 주세요`). |
| **Error (toast)** | `#222` background, `#ffffff` 14px / 400 text, 3s auto-dismiss. Bottom-of-screen with 24px inset above bottom tab. One sentence. No icon. |
| **Error (network)** | Full-screen centered message in `#222` 18px / 700, `#393d41` 14px / 400 sub-line, retry button in Kurly Purple. No illustration. |
| **Success (cart add)** | Inline 300ms flash of `#f5effa` (purple-50) behind the updated cart icon, then a bottom toast `장바구니에 담겼어요` for 2.5s. |
| **Success (order complete)** | Dedicated confirmation page — not a toast. Order number, dawn-delivery slot (`내일 새벽 도착 예정`), and a single primary CTA `주문 상세 보기`. Quiet, not celebratory. |
| **Skeleton** | `#f2f5f8` blocks at exact final dimensions matching the product card layout. Shimmer 1.2s. Brand-line and price slots stay blank until resolved — never imply a price that hasn't loaded. |
| **Soldout** | Full-image overlay `rgba(0,0,0,0.5)` with white `일시품절` 14px / 700 centered. Card stays clickable for re-stock notification opt-in. |
| **Disabled** | Button background `#dfe4eb`, text `#848f9a`. No color inversion. Geometry stays identical so re-enable is frame-stable. |

## 15. Motion & Easing

**Durations** (named, not raw milliseconds):

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle flips, checkbox state, filter chip select |
| `motion-fast` | 150ms | Hover lift, button press, inline cart-flash success |
| `motion-standard` | 250ms | The default — card hover-shadow appearance, dropdown reveal, tab swap |
| `motion-slow` | 350ms | Modal entry, full-sheet presentation, image lightbox |
| `motion-page` | 300ms | Route transitions on PDP entry/exit |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Sheets, modals, toasts, cards-on-hover |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals, modal close, toast auto-fade |
| `ease-standard` | `cubic-bezier(0.4, 0.0, 0.2, 1)` | Two-way transitions — expandable accordion, tab content swap |

**Spring stance.** Spring and overshoot easings are forbidden across Kurly commerce surfaces. The brand sells trust and dawn-delivery reliability to time-pressed professionals; bouncy motion reads as toy-like and undermines the editorial restraint that justifies the premium price point. The licensed exceptions are (a) the native-platform pull-to-refresh on the mobile app (inherits OS spring) and (b) image carousel snap on PDP galleries (inherits browser-native scroll-snap). Every other transition uses `ease-enter`, `ease-exit`, or `ease-standard`.

**Signature motions.**

1. **Product card hover-lift.** On desktop hover, card raises with shadow `0px 0px 4px rgba(0,0,0,0.15)` over `motion-fast / ease-enter`. No scale change — the photography stays exactly the same size; only the shadow appears. The restraint is the brand.
2. **Cart-add flash.** When a product is added, the cart icon's background pulses to `#f5effa` (purple-50) over `motion-fast`, then fades back to default. A bottom toast (`장바구니에 담겼어요`) rises with `motion-standard / ease-enter` and dismisses with `motion-fast / ease-exit`.
3. **Modal entry.** Modals fade in (opacity 0 → 1) and rise from `y+16px` to `y+0` over `motion-slow / ease-enter`. Backdrop fades from `rgba(0,0,0,0)` to `rgba(0,0,0,0.5)` synchronized. Dismissal is lighter — `motion-fast / ease-exit`.
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant`. Hover lift becomes immediate shadow toggle; modal cross-fades replace y-rise; cart flash becomes a 1-frame highlight then default. The app stays fully usable; just less kinetic.

<!--
OmD v0.1 Sources — Kurly DESIGN.md

Tier 1 — Direct verification (2026-05-08):
- https://www.kurly.com/main — homepage shell HTML + compiled KPDS CSS
  (https://res.kurly.com/v/2026.05.06.01/_next/static/css/51aa1e65e91a39af.css).
  Confirms: --kpds_ldmw172m: #5f0080 (Kurly Purple primary), full purple ramp
  (#672091, #7e3ab0, #8d4cc4, #9a60ca, #a775d2, #b489d8, #c19edf, #ceb2e6,
  #dcc7ed, #e8dbf3, #f5effa), bright purple promotional ramp (#bd76ff anchor),
  neutral gray scale (#1c1c1c → #222 → #393d41 → #464c52 → #565e67 → #848f9a
  → #a7b2bc → #bcc4cc → #cbd1d7 → #dfe4eb → #eceff3 → #f2f5f8), semantic colors
  (#e22d2e sale red, #fa622f coral, #029568 success, #216ba5 info), shadow tokens
  (0px 2px 2px rgba(0,0,0,0.03), 0px 0px 4px rgba(0,0,0,0.15),
  2px 2px 10px rgba(0,0,0,0.10), 0px 0px 30px rgba(0,0,0,0.25),
  0px 4px 10px rgba(0,0,0,0.40)), font stack
  Pretendard / Pretendard Variable / system fallback.
- https://www.kurly.com/main — meta description + og tags. Confirms:
  "Better Life for All", "건강한 식재료부터 믿을 수 있는 뷰티, 라이프스타일 상품까지.
  나와 내 가족이 사고 싶은 상품을 판매합니다. 내일 아침 문 앞에서 만나요!",
  Organization name "Kurly", customer support phone +82-1644-1107.

Tier 2 — Cross-check:
- https://getdesign.md/kurly — no record (queried 2026-05-08, "No designs found").
- styles.refero.design — not separately queried (no record observed in Tier 1
  links; future migration sweep should verify).

Tier 2 (Philosophy / founders):
- https://en.wikipedia.org/wiki/Sophie_Kim — confirms Sophie Kim (Kim Seul-ah,
  김슬아), b. 1983 Ulsan, Wellesley 2006 cum laude, Goldman Sachs HK 2007,
  McKinsey 2010, Temasek 2012, Bain Korea 2013, founded The Farmers 2014,
  Market Kurly launch 2015 with 30 SKUs, rebrand to Kurly Inc. 2018.
- https://www.kedglobal.com/chief-executives/newsView/ked202201190017 —
  Kurly CEO Sophie Kim profile, founder background, premium positioning.
- https://www.kedglobal.com/e-commerce/newsView/ked202412200010 —
  S.Korea's dawn delivery pioneer Kurly, luxury goods strategy.
- https://www.marketline.com/blog/kurly-pioneering-dawn-delivery-service-market-in-south-korea/
  — dawn delivery pioneer framing, 새벽배송 origin.
- https://techcrunch.com/2023/01/04/online-grocery-startup-kurly-scraps-ipo-amid-market-uncertainty/
  — January 2023 IPO postponement; KOSPI preliminary screening passed Aug 2022.
- https://techcrunch.com/2021/12/19/kurly-lands-210m-pre-ipo-at-a-3-3b-valuation-just-months-after-its-last-funding/
  — Dec 2021 pre-IPO $210M at $3.3B valuation, total $761M.
- https://www.koreaherald.com/article/2650215 — Kurly opts for Korean market
  for IPO (KOSPI rather than NYSE).
- https://www.kedglobal.com/earnings/newsView/ked202505130004 —
  first-ever quarterly profit Q1 2025.
- Investor list (DST Global, Sequoia Capital China, Hillhouse, Aspex,
  Anchor Equity Partners, MiraeAsset, CJ Logistics, SK Networks) —
  Crunchbase + KED Global + TechCrunch, cross-referenced.

Re-verification status:
- Kurly Purple #5f0080 verified directly from compiled KPDS CSS variable
  --kpds_ldmw172m, May 2026. The brand has shipped this hex consistently
  since at least the 2018 Kurly Inc. rebrand.
- Sophie Kim career timeline: widely reported in KR/EN press; Wikipedia
  reflects published profile interviews, not independently audited.
- Investor and valuation figures: TechCrunch/KED Global at retrieval date.
  Pre-IPO repricings have been frequent; verify before publishing as live.
- Q1 2025 first-ever quarterly profit: KED Global May 2025; subsequent
  quarters not re-checked.

Personas (§13) are fictional archetypes informed by publicly described Kurly
customer segments (KR dual-income working professionals, time-pressed parents,
premium-grocery early adopters). Any resemblance to specific individuals is
unintended.

Interpretive claims (editorial, not documented Kurly statements):
- "Photography is the brand voice" / "purple is scarce because trust has to
  be scarce to be legible" (§11, §12) — editorial readings of observed design
  decisions, not sourced brand-team statements.
- The spring-forbidden stance (§15) — derived from the overall brand posture
  (editorial restraint, premium curation, refusal of carnival promotion) as
  expressed in the live KPDS shadow tokens and the absence of overshoot
  easings in compiled CSS; not a documented KPDS rule.
- "내일의 장보기, 오늘 끝." voice sample (§10) — illustrative pattern in
  Kurly register, not a verified live tagline.
-->

---

**Verified:** 2026-05-08 (Tier 1 live + Tier 2 cross-check)
**Tier 1 sources:** kurly.com/main (homepage Next.js shell + KPDS compiled CSS at res.kurly.com — Kurly Purple `#5f0080` 6px / 16px·600 Primary CTA + cream `#f2f5f8` neutral fill + Pretendard product font); kurly.com/shopping/categories/list (category surface — same Next.js shell, 4-col product grid pattern + 샛별배송 purple badge convention).
**Tier 2 sources:** getdesign.md/kurly — no record. styles.refero.design — not separately queried.
**Tier 2 (Philosophy/founders):** Wikipedia (Sophie Kim), KED Global (CEO profile, dawn delivery, Q1 2025 first profit), Marketline (dawn delivery pioneer framing), TechCrunch (2021 pre-IPO $210M @ $3.3B, 2023 IPO postponement), Korea Herald (KOSPI listing path).
**Style ref:** `karrot` (KR retail neighbor format, retained for §10-15 cadence).
**Conflicts unresolved:** none.
