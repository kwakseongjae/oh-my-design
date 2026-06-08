---
id: yogiyo
name: Yogiyo
country: KR
category: consumer-tech
homepage: "https://www.yogiyo.co.kr"
primary_color: "#FA0050"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=yogiyo.co.kr&sz=128"
verified: "2026-05-27"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#fa0050"
    primary-deep: "#e00048"
    canvas: "#ffffff"
    surface: "#f5f5f7"
    surface-strong: "#ececef"
    heading: "#1a1a1a"
    text-strong: "#333333"
    body: "#666666"
    text-secondary: "#999999"
    text-tertiary: "#bbbbbb"
    border: "#dddddd"
    divider: "#ececef"
    rating: "#ffb300"
    success: "#21c17a"
    warning: "#ff8a00"
    error: "#f5444c"
    on-primary: "#ffffff"
  typography:
    family: { sans: "Pretendard", mono: "Pretendard" }
    hero:        { size: 28, weight: 700, lineHeight: 1.3, use: "Event/promo banners, onboarding" }
    section:     { size: 20, weight: 700, lineHeight: 1.35, use: "Row headers" }
    restaurant:  { size: 16, weight: 600, lineHeight: 1.4, use: "Restaurant card title" }
    menu:        { size: 15, weight: 500, lineHeight: 1.4, use: "Menu item title" }
    body:        { size: 14, weight: 400, lineHeight: 1.5, use: "Descriptions, address" }
    label:       { size: 16, weight: 600, lineHeight: 1.4, use: "Button labels (주문하기)" }
    caption:     { size: 12, weight: 400, lineHeight: 1.4, use: "Delivery time, review count, fine print" }
    price:       { size: 19, weight: 700, lineHeight: 1.2, use: "Item/cart total — tabular numerals" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 6, md: 12, lg: 16, full: 999 }
  shadow:
    card: "0px 2px 8px rgba(0,0,0,0.06)"
    elevated: "0px 2px 12px rgba(0,0,0,0.08)"
    toast: "0px 4px 12px rgba(0,0,0,0.16)"
  components_harvested: true
  components:
    button-primary: { type: button, bg: "#fa0050", fg: "#ffffff", radius: 12, padding: "14px 20px", font: "16/600", use: "주문하기, 결제하기 — full-width sticky CTA" }
    button-outline: { type: button, bg: "#ffffff", fg: "#fa0050", radius: 12, padding: "14px 20px", font: "16/600", use: "쿠폰 받기, 메뉴 더보기" }
    button-neutral: { type: button, bg: "#f5f5f7", fg: "#333333", radius: 12, padding: "14px 20px", font: "16/600", use: "취소, 닫기" }
    search-field: { type: input, bg: "#f5f5f7", fg: "#333333", radius: 12, padding: "14px 16px", font: "16/400", use: "음식, 가게 검색" }
    restaurant-card: { type: card, bg: "#ffffff", radius: 16, padding: "16px", use: "Browse workhorse — photo, name, rating, ETA" }
    category-tile: { type: card, bg: "#f5f5f7", radius: 12, padding: "12px", use: "치킨/피자/한식 grid tiles" }
    discount-badge: { type: badge, bg: "#fa0050", fg: "#ffffff", radius: 6, padding: "2px 6px", font: "11/700", use: "할인/쿠폰 promotion flag" }
    filter-chip: { type: badge, bg: "#f5f5f7", fg: "#666666", radius: 999, padding: "6px 14px", font: "13/500", use: "빠른배달/무료배달/별점순 filters" }
    top-tab: { type: tab, fg: "#999999", font: "15/600", active: "#fa0050 text + 2px bottom underline #fa0050", use: "배달/포장/요편의점 switcher" }
    bottom-tab: { type: tab, fg: "#bbbbbb", font: "11/500", active: "#fa0050 icon + label", use: "홈/검색/찜/주문내역/MY" }
    snackbar: { type: toast, bg: "#1a1a1a", fg: "#ffffff", radius: 12, padding: "12px 16px", font: "14/500", use: "Transient feedback, 3s auto-dismiss" }
---

# Design System Inspiration of Yogiyo (요기요)

## 1. Visual Theme & Atmosphere

Yogiyo is Korea's iconic red-logo food-delivery app — the red mark you see on every street, in every neighborhood, the one that became shorthand for "let's order in." Its visual identity is built on a single hot, joyful **red-pink `#FA0050`** that floods CTAs, the active state, and the brand mark, set against a bright white canvas with clean black-and-gray text. Where other delivery apps lean playful-cartoonish or coldly utilitarian, Yogiyo aims for *appetite plus joy*: the red reads warm and energetic, almost magenta, the color of craving and fun rather than alarm. The brand explicitly frames itself around delivering "joy to everyday life," and the design's job is to make the gap between "I'm hungry" and "it's on the way" feel quick, easy, and a little delightful.

What defines Yogiyo visually is **food-photo-forward density over a calm chrome**. The browse experience is a scannable stack of restaurant cards and category tiles — chicken, pizza, Korean, Japanese, 1인분 — where bright food photography supplies the color and craving, and the red is reserved for the moments that move you forward: the order CTA, the active filter, the discount/할인 badge, the cart count. Cards are soft and rounded (12–16px radii), shadows are gentle, and the type stays clean and friendly. A recent renewal pushed toward "the AI app that knows you best" — personalized recommendation rows up top, simplified category icons, a more direct path from open to order.

Typography is the modern Korean product stack — **Pretendard**-led with Apple SD Gothic Neo / Malgun Gothic fallbacks (some marketing surfaces use a custom branded face) — rendered black-on-white with red accents. Numbers matter: prices, delivery fees, minimum order, ratings, and estimated delivery time are first-class, tabular-aligned, because ordering food is a constant small-number calculation.

**Key Characteristics:**
- Yogiyo red-pink `#FA0050` as brand + primary interactive accent — CTAs, active state, 할인 badges, cart count
- Bright white canvas with black/gray text — food photography supplies the craving-color
- Soft, rounded cards (12–16px) and gentle shadows — friendly, appetizing, not clinical
- Pretendard-led Korean type stack, black-on-white with red accents
- Personalized "knows you best" recommendation rows + simplified category tiles
- Joyful, appetite-led tone — quick and a little delightful, not cartoonish or cold
- Numbers (price, delivery fee, min order, ETA, rating) as first-class tabular typography

## 2. Color Palette & Roles

Yogiyo red-pink `#FA0050` is the brief-provided/widely-recognized brand color (dark-pink/red). The live site (WebFetch 2026-05-27) confirmed the red-led, category-organized, trust-forward layout but did not expose a token doc; product grays/blacks below follow modern Korean app conventions. Treat product hexes as conventional, the red as the verified anchor.

### Brand / Interactive
- **Yogiyo Red** (`#FA0050`): The signature color (RGB 250, 0, 80). Primary CTA, active filter/tab, brand mark, cart badge, selection. The single energetic accent.
- **Yogiyo Red Deep** (`#E00048`): Pressed / hover variant.
- **Yogiyo Red Light** (`rgba(250,0,80,0.08)`): Subtle red-tinted highlight backgrounds, selected-chip fills.

### Surfaces
- **Pure White** (`#FFFFFF`): Page canvas, cards, sheets.
- **Surface Gray** (`#F5F5F7`): Section backgrounds, inactive chip fills, skeleton blocks.
- **Surface Gray Strong** (`#ECECEF`): Secondary fills, dividers' surface variant.

### Text
- **Text Primary** (`#1A1A1A`): Restaurant names, titles, primary labels.
- **Text Strong** (`#333333`): Strong body labels, menu names.
- **Text Body** (`#666666`): Body text, descriptions, metadata.
- **Text Secondary** (`#999999`): Captions, delivery time, review counts.
- **Text Tertiary** (`#BBBBBB`): Placeholder, disabled labels.

### Borders
- **Divider** (`#ECECEF`): Hairline row/card separators.
- **Border Strong** (`#DDDDDD`): Active input outlines, emphasized edges.

### Semantic
- **Discount / 할인** (`#FA0050`): The red doubles as the promotion/discount semantic — 할인 badges, coupon highlights.
- **Rating / Star** (`#FFB300`): Restaurant rating star accent.
- **Success** (`#21C17A`): Order-confirmed, delivery-complete green.
- **Warning** (`#FF8A00`): Closing-soon, wait-time advisories.
- **Error** (`#F5444C`): Payment failure, sold-out, destructive actions.

## 3. Typography Rules

### Font Family
- **Primary**: `Pretendard, "Apple SD Gothic Neo", "Malgun Gothic", -apple-system, BlinkMacSystemFont, "Noto Sans KR", sans-serif`
- **Brand surfaces**: a custom branded face may appear in marketing/logo lockups
- **Numerals**: tabular-friendly for prices, fees, ETAs, ratings

### Hierarchy

| Role | Size | Weight | Line Height | Use |
|------|------|--------|-------------|-----|
| Display Hero | 26–30px | 700 | 1.3 | Event/promo banners, onboarding |
| Section Heading | 20px | 700 | 1.35 | Row headers (요기요가 추천해요, 단골 맛집) |
| Restaurant Name | 16px | 600 | 1.4 | Restaurant card title |
| Menu Name | 15px | 500 | 1.4 | Menu item title |
| Body | 14px | 400 | 1.5 | Descriptions, address |
| Label / CTA | 16px | 600 | 1.4 | Button labels (주문하기) |
| Caption | 12px | 400 | 1.4 | Delivery time, review count, fine print |
| Price Display | 18–20px | 700 | tight | Item/cart total — tabular numerals |

### Conventions
- **700 for headings + prices, 600 for restaurant names/CTAs, 400 for body** — clean three-weight rhythm.
- **Numbers are first-class** — prices, delivery fees, minimum order, ETA, ratings rendered tabular so they align in scannable rows.
- **Sentence-case, no all-caps** — Korean-first, friendly and appetizing.
- **Glanceable cards** — the most decision-relevant numbers (rating, delivery time, min order, delivery fee) are high-contrast on each restaurant card.

## 4. Component Stylings

Yogiyo publishes no public component spec; geometry below follows the live red-led, category-organized layout (WebFetch 2026-05-27) + modern Korean app conventions. Treat as conventional, red as the verified anchor.

### Buttons

**Primary (Red)**
- Background: `#FA0050`
- Text: `#FFFFFF`
- Border: none
- Radius: 12px
- Padding: 14px 20px
- Font: 16px / 600 / Pretendard
- Pressed: background `#E00048`
- Disabled: background `#F5F5F7`, text `#BBBBBB`
- Use: Primary CTA — 주문하기, 장바구니 담기, 결제하기. ~52px tall, often full-width sticky at the bottom.

**Outline / Secondary**
- Background: `#FFFFFF`
- Text: `#FA0050`
- Border: 1px solid `#FA0050`
- Radius: 12px
- Padding: 14px 20px
- Font: 16px / 600 / Pretendard
- Use: Secondary action (쿠폰 받기, 메뉴 더보기)

**Neutral Secondary**
- Background: `#F5F5F7`
- Text: `#333333`
- Border: none
- Radius: 12px
- Padding: 14px 20px
- Font: 16px / 600 / Pretendard
- Use: Cancel / neutral (취소, 닫기)

### Inputs

**Search Field**
- Background: `#F5F5F7`
- Text: `#333333`
- Border: none (filled)
- Radius: 12px
- Padding: 14px 16px
- Font: 16px / 400 / Pretendard
- Placeholder: `#BBBBBB`
- Focus: 1px border `#FA0050`
- Use: 음식, 가게 검색 — the discovery entry point

**Error**
- Background: `#FFFFFF`
- Text: `#333333`
- Border: 1px solid `#F5444C`
- Radius: 12px
- Padding: 14px 16px
- Font: 16px / 400 / Pretendard
- Use: Invalid input, paired with `#F5444C` caption

### Cards

**Restaurant Card**
- Background: `#FFFFFF`
- Border: none
- Radius: 16px
- Padding: 16px
- Shadow: `0px 2px 8px rgba(0,0,0,0.06)`
- Use: The browse workhorse — food photo, name (16px/600), rating star + number (`#FFB300`), delivery time + min order + fee (tabular), 할인 badge in red

**Category Tile**
- Background: `#F5F5F7`
- Border: none
- Radius: 12px
- Padding: 12px
- Shadow: none
- Use: 치킨 / 피자 / 한식 / 1인분 grid tiles — icon + label

**Cart / Receipt Card**
- Background: `#FFFFFF`
- Border: none
- Radius: 16px
- Padding: 20px
- Shadow: `0px 2px 12px rgba(0,0,0,0.08)`
- Use: Cart summary, order receipt — total 20px/700 tabular

### Badges / Chips

**Discount / 할인 Badge**
- Background: `#FA0050`
- Text: `#FFFFFF`
- Border: none
- Radius: 6px
- Padding: 2px 6px
- Font: 11px / 700 / Pretendard
- Use: The signature promotion flag on restaurant cards (할인, 쿠폰)

**Filter Chip**
- Background: `#F5F5F7`
- Text: `#666666`
- Border: none
- Radius: 999px
- Padding: 6px 14px
- Font: 13px / 500 / Pretendard
- Active: `rgba(250,0,80,0.08)` bg + `#FA0050` text
- Use: 빠른배달 / 무료배달 / 별점순 filters

**Rating Badge**
- Background: transparent
- Text: `#FFB300`
- Font: 13px / 700 / Pretendard
- Use: Restaurant rating beside a star

### Tabs / Nav

**Top Tab (Active)**
- Active text: `#FA0050`
- Inactive text: `#999999`
- Indicator: 2px `#FA0050` underline
- Font: 15px / 600 / Pretendard
- Use: 배달 / 포장 / 요편의점 switcher

**Bottom Tab (Active)**
- Active icon/text: `#FA0050`
- Inactive: `#BBBBBB`
- Border: 1px solid `#ECECEF` (top only)
- Font: 11px / 500 / Pretendard
- Use: 홈 / 검색 / 찜 / 주문내역 / MY

### Toasts

**Snackbar**
- Background: `#1A1A1A`
- Text: `#FFFFFF`
- Border: none
- Radius: 12px
- Padding: 12px 16px
- Shadow: `0px 4px 12px rgba(0,0,0,0.16)`
- Font: 14px / 500 / Pretendard
- Use: "장바구니에 담았어요" transient feedback, 3s auto-dismiss

### Sticky Bottom Bar

**Cart CTA Bar**
- Background: `#FFFFFF`
- Border: 1px solid `#ECECEF` (top only)
- Shadow: `0px -2px 12px rgba(0,0,0,0.06)`
- Contains: full-width red `주문하기` button with cart count + total (tabular)
- Use: Persistent bottom order bar on the restaurant menu screen — the conversion anchor

---

**Verified:** 2026-05-27
**Tier 1 sources:** yogiyo.co.kr (live WebFetch 2026-05-27 — confirmed red-led brand, category-organized browse `치킨/피자/한식/일식/1인분`, trust features `안심센터` `클린리뷰`, 24시간 연중무휴 messaging, Korean-first CTAs). Yogiyo red `#FA0050` is the brief-provided / widely-recognized brand color (dark-pink/red).
**Tier 2 sources:** getdesign.md/yogiyo — not checked. styles.refero.design — not checked. Brand-strategy context (SAM Seoul branding case; 2024 "AI app that knows you best" UI renewal) from brand search.
**Conflicts unresolved:** No live computed-style token inspection (no public token doc surfaced); all §4 component values flagged conventional with the red `#FA0050` as the one verified anchor. A future UPDATE pass with browser inspection should re-confirm component geometry.

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Common values: 4, 8, 12, 16, 20, 24, 32
- Card padding: 16px; card-to-card gap: 12px; section gap: 24px

### Grid & Container
- Browse: vertical stack of full-width restaurant cards + a category-tile grid up top
- Mobile-first single column; web mirrors in a centered ~1024px column
- Sticky bottom cart bar on the menu screen

### Whitespace Philosophy
- **Food photos carry the craving.** Bright imagery supplies color; chrome stays calm and rounded.
- **Decision density.** Restaurant cards pack the decision-relevant numbers (rating, time, min order, fee) high-contrast and scannable.
- **One clear path forward.** Open → category/recommendation → restaurant → cart → order; the red CTA marks the next step at every stage.

### Border Radius Scale
- Compact (6px): 할인 badges
- Comfortable (12px): buttons, inputs, category tiles
- Large (16px): restaurant + cart cards
- Pill (999px): filter chips
- Circle (50%): category icons, avatars

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (0) | No shadow | Category tiles, list rows |
| Subtle (1) | `0px 2px 8px rgba(0,0,0,0.06)` | Restaurant cards |
| Card (2) | `0px 2px 12px rgba(0,0,0,0.08)` | Cart / receipt cards |
| Sticky Bar (2) | `0px -2px 12px rgba(0,0,0,0.06)` | Bottom cart CTA bar |
| Floating (3) | `0px 4px 12px rgba(0,0,0,0.16)` | Toasts, floating filters |

**Shadow philosophy.** Soft, neutral, single-layer shadows give the rounded cards a gentle "tappable" lift on the bright canvas — appetizing, not clinical. No colored shadows. The sticky cart bar casts an upward shadow to read as floating above the menu list.

## 7. Do's and Don'ts

### Do
- Use `#FA0050` for the single primary CTA, active state, and 할인 badge — energetic and sparing
- Let bright food photography supply the craving-color; keep chrome calm
- Render price, delivery fee, min order, ETA, and rating as first-class tabular numbers
- Keep the sticky bottom cart bar present on the menu screen as the conversion anchor
- Use soft rounded cards (16px) and gentle shadows — friendly and appetizing

### Don't
- Don't flood backgrounds with red — it's the forward-motion accent, not a wallpaper
- Don't go cartoonish or cold-utilitarian — the tone is joyful-but-clean
- Don't bury the decision numbers — rating/time/fee must be glanceable on every card
- Don't introduce a second saturated brand hue competing with the red
- Don't make the order path more than the necessary steps — speed is the promise

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile (Primary) | <768px | Single-column cards, category-tile grid, bottom tab + sticky cart bar |
| Tablet | 768–1024px | 2-up card grid, condensed nav |
| Desktop (Web) | >1024px | Centered ~1024px column, restaurant list + detail |

### Touch Targets
- Primary CTA: ~52px tall
- Restaurant card: full-width tap, min 88px height
- Category tiles: 64–80px tap targets
- Filter chips: min 44px height

### Collapsing Strategy
- Sticky cart bar pins to the bottom across sizes
- Category grid reflows columns by width
- Menu detail → bottom sheet for options on mobile

### Image Behavior
- Restaurant/food photos: `object-fit: cover`, 16px radius, lazy-loaded
- Category icons: consistent 40–48px
- Menu thumbnails: square, rounded

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA / active / 할인: Yogiyo Red `#FA0050` (pressed `#E00048`)
- Canvas: white `#FFFFFF`; surface `#F5F5F7`
- Text: primary `#1A1A1A`; body `#666666`; secondary `#999999`
- Divider `#ECECEF`; rating `#FFB300`; success `#21C17A`; error `#F5444C`

### Example Component Prompts
- "Build a Yogiyo order button: bg `#FA0050`, white 16px/600 text, 12px radius, 14px 20px padding, ~52px tall, full-width. Pressed bg `#E00048`. Disabled bg `#F5F5F7` text `#BBBBBB`."
- "Create a Yogiyo restaurant card: white bg, 16px radius, `0px 2px 8px rgba(0,0,0,0.06)` shadow, 16px padding. Food photo top, name 16px/600 `#1A1A1A`, rating `#FFB300` star + number, then a tabular row: 배달 25분 · 최소주문 12,000원 · 배달비 3,000원 in `#999999`, plus a red 할인 badge (`#FA0050`, 6px radius, 11px/700 white)."
- "Design a sticky bottom cart bar: white bg, 1px `#ECECEF` top border, `0px -2px 12px rgba(0,0,0,0.06)` shadow, containing a full-width red `주문하기` button showing cart count + total (tabular)."
- "Create a filter chip row: 빠른배달/무료배달/별점순, inactive bg `#F5F5F7` text `#666666`, active bg `rgba(250,0,80,0.08)` text `#FA0050`, 999px radius, 13px/500."

### Iteration Guide
1. Red `#FA0050` = primary CTA + active + 할인 only; never a wallpaper
2. White canvas; food photos carry the craving
3. Pretendard / Korean stack with fallbacks
4. Decision numbers (price/fee/min/ETA/rating) = tabular, glanceable
5. Radius: 6px badge, 12px buttons/tiles, 16px cards, 999px chips
6. Keep the sticky cart bar as the conversion anchor

---

## 10. Voice & Tone

Yogiyo speaks like a cheerful friend who knows exactly what you're craving — warm, upbeat, and a little fun, but quick to the point because you're hungry. The default register is soft-polite `해요체` (`장바구니에 담았어요`, `곧 도착해요`), friendly and bright. Korean is the unquestioned primary voice — the brand deliberately leads with the Hangul `요기요` wordmark. The copy is appetite-and-joy oriented, matched to the brand's "delivering joy to everyday life" thesis: it's never cold ("주문 처리 중") and never pushy, just quick, warm, and helpful.

| Context | Tone |
|---|---|
| CTAs | Short Korean verb (`주문하기`, `장바구니 담기`, `결제하기`). |
| Recommendation rows | Friendly, personal (`요기요가 추천해요`, `단골 맛집`, `이런 메뉴 어때요?`). |
| Success toasts | Past-tense single sentence, soft ending (`장바구니에 담았어요`). No emoji on system chrome. |
| Status updates | Reassuring present (`사장님이 조리하고 있어요`, `라이더님이 출발했어요`). |
| Error messages | Blameless, specific, one action (`지금은 주문할 수 없어요. 영업시간을 확인해 주세요`). Never `오류가 발생했습니다`. |
| Empty states | Warm + one action (`아직 찜한 가게가 없어요`). |
| Legal / payment | Formal `합니다` register — the single exception. |

**Forbidden phrases.** `오류가 발생했습니다` (generic error), cold operational jargon (`주문 처리 중`), exclamation-as-pressure on CTAs, marketing superlatives stacked on chrome (`최고의 맛집!`), English-first strings on Korean surfaces, emoji on system-generated toasts.

**Voice samples.**
- `안심센터` — trust-feature label. <!-- verified: yogiyo.co.kr via WebFetch 2026-05-27 -->
- `클린리뷰` — review-integrity feature label. <!-- verified: yogiyo.co.kr via WebFetch 2026-05-27 -->
- `장바구니에 담았어요` — illustrative add-to-cart toast. <!-- illustrative: follows Yogiyo's `해요체` register; not verified verbatim -->
- `라이더님이 출발했어요` — illustrative delivery-status copy. <!-- illustrative: not verified as live copy -->

## 11. Brand Narrative

Yogiyo (요기요) launched in **2012** and became one of Korea's two defining food-delivery apps, its red mark a fixture of Korean street and screen life. Long operated under the global **Delivery Hero** group (alongside the later acquisition that consolidated the market), Yogiyo built its identity around the simple, joyful promise of getting good food to your door fast. A brand renewal swapped the English "Yogiyo" wordmark for the Korean `요기요`, leaning into Hangul-first communication, rounded friendly forms, and a positioning as a *lifestyle platform that delivers joy to everyday life* — not merely a transaction utility.

The design follows the joy thesis directly. The hot red-pink `#FA0050` is the color of craving and fun; bright food photography does the selling; the chrome stays soft, rounded, and out of the way so the path from hunger to order is fast and pleasant. A more recent UI renewal pushed personalization hard — "the AI app that knows you best" — surfacing tailored recommendation rows and simplified category icons to shorten the distance between opening the app and tapping `주문하기`.

What Yogiyo refuses: the cold, spreadsheet-like utility of a pure logistics tool, and the over-cute cartoonishness that would undercut appetite. It sits in the warm middle — joyful and appetizing, but clean and quick — where the red means "go" and the food does the talking.

## 12. Principles

1. **Food photos carry the craving.** Imagery supplies color and appetite; chrome whispers. *UI implication:* bright photos on rounded cards over a white canvas; the UI stays calm so the food pops.
2. **Red is forward motion.** `#FA0050` marks the next step and the deal. *UI implication:* one red CTA per screen, plus the 할인 badge and active state — never a background flood.
3. **Numbers decide.** Ordering is a constant small-number calculation. *UI implication:* rating, delivery time, min order, and fee are high-contrast, tabular, glanceable on every card.
4. **Speed is the promise.** The shortest path from hungry to ordered wins. *UI implication:* personalized recommendations up top, a persistent sticky cart bar, no superfluous steps.
5. **Joyful, not cute.** The brand delivers joy but stays clean and trustworthy. *UI implication:* warm `해요체`, soft rounded forms, no cartoon overload; trust features (안심센터/클린리뷰) visible.
6. **Korean-first.** The Hangul `요기요` wordmark is intentional. *UI implication:* lead with Korean copy; English is romanization/brand only.

## 13. Personas

*Personas are fictional archetypes informed by publicly described Korean food-delivery user segments, not individual people.*

**예진 (Ye-jin), 26, Seoul.** Orders 2–3 times a week, often 1인분 dinners after work. Decides by rating, delivery time, and 무료배달 filter in seconds. Loves the recommendation row that "just knows" what she wants. Taps the red 주문하기 and tracks the rider.

**상철 (Sang-cheol), 41, Incheon.** Orders family dinners on weekends. Browses by category (치킨/피자/한식), compares min-order and delivery fees, hunts for 할인/쿠폰 badges. Trusts 클린리뷰 to weed out fake ratings.

**다현 (Da-hyun), 22, Daegu.** Student, budget-conscious. Filters hard for 무료배달 and discounts, reads reviews carefully. The red deal badges are what catch her eye first; speed and price decide the order.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no favorites)** | Single `#999999` warm line (`아직 찜한 가게가 없어요`) + one red CTA (`맛집 둘러보기`). No clutter. |
| **Empty (search no results)** | `#999999` caption (`검색 결과가 없어요`) + a suggestion to change filters. |
| **Empty (no restaurants in area)** | `#999999` line (`주변에 주문 가능한 가게가 없어요`); offer address change. |
| **Loading (browse first paint)** | Restaurant-card skeleton blocks at `#F5F5F7` with shimmer toward `#ECECEF`, layout-matched. |
| **Loading (placing order)** | Sticky CTA shows an inline spinner; button width preserved; no double-submit. |
| **Error (order failed)** | Snackbar `#1A1A1A` white text (`주문에 실패했어요. 다시 시도해 주세요`), 3s. |
| **Error (inline field)** | Input border `#F5444C`, caption below `#F5444C` 12px, one actionable sentence. |
| **Success (added to cart)** | Snackbar (`장바구니에 담았어요`); cart badge increments in `#FA0050`. |
| **Success (order placed)** | Confirmation surface — `#21C17A` checkmark, order summary + ETA, status timeline (조리중 → 배달중), single `확인`. |
| **Skeleton** | `#F5F5F7` blocks at exact card dimensions, 16px radius, ~1.2s shimmer to `#ECECEF`. |
| **Disabled (CTA)** | Red button → bg `#F5F5F7`, text `#BBBBBB`. Geometry unchanged. |

## 15. Motion & Easing

Yogiyo's motion is friendly and snappy — quick, satisfying feedback that matches the "fast and a little delightful" promise, without bouncing into cartoon territory.

**Durations:**

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle/chip flips |
| `motion-fast` | 150ms | Hover, press, cart-badge increment, chip select |
| `motion-standard` | 250ms | Card expand, sheet open, tab switch |
| `motion-slow` | 400ms | Banner crossfade, page-to-detail transition |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | Default — most motion |
| `ease-enter` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Sheets, toasts appearing |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-pop` | `cubic-bezier(0.34, 1.4, 0.64, 1)` | Reserved — add-to-cart confirmation only |

**Signature motions.**
1. **Add-to-cart pop.** When an item is added, the cart badge increments with a brief 1.15 scale-pop (`ease-pop`) in `#FA0050` — the one licensed bounce, a small reward for moving forward.
2. **Sticky cart bar reveal.** The bottom order bar slides up from `y+40px` with `motion-standard / ease-enter` the moment the cart has an item; dismissal (empty cart) slides down with `ease-exit`.
3. **Order-status timeline.** The 조리중 → 배달중 → 완료 progress advances with a calm fill animation over `motion-standard / ease-standard` — reassuring, never jumpy.
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, pops and slides collapse to instant opacity/position changes; shimmer skeletons become static `#F5F5F7`. No exceptions.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 (UI tokens, §1–9): yogiyo.co.kr live WebFetch 2026-05-27 — red-led
brand, category-organized browse (치킨/피자/한식/일식/1인분), trust features
(안심센터/클린리뷰), 24시간 연중무휴 messaging, Korean-first CTAs. Yogiyo red
`#FA0050` is the brief-provided / widely-recognized brand color. No public
token doc surfaced; all §4 component values + product grays are CONVENTIONAL
(modern Korean app norms), flagged in the §4 footer; red is the one verified
anchor.

Tier 2 (founding/narrative): Yogiyo launched 2012, operated under the global
Delivery Hero group; brand renewal swapped the English wordmark for Hangul
`요기요` and positioned as a joy-delivering lifestyle platform (SAM Seoul
branding case). A 2024 UI renewal pushed "the AI app that knows you best"
personalization (designcompass.org / Money Today coverage). General industry
knowledge for the rest.

Voice samples: `안심센터`, `클린리뷰` verified live. `장바구니에 담았어요`,
`라이더님이 출발했어요`, `요기요가 추천해요`, `주문에 실패했어요...` are
ILLUSTRATIVE patterns following Yogiyo's `해요체` register and joy/speed
positioning; not confirmed verbatim.

Personas (§13) are fictional archetypes. Any resemblance to specific users is
unintended.
-->
