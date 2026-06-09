---
id: 11st
name: 11st
country: KR
category: e-commerce
homepage: "https://www.11st.co.kr"
primary_color: "#ff0038"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=11st.co.kr&sz=128"
verified: "2026-06-09"
added: "2026-06-09"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-09"
  components_harvested: true
  colors:
    primary: "#ff0038"
    accent-discount: "#f43142"
    canvas: "#ffffff"
    heading: "#111111"
    body: "#666666"
    muted: "#a9a9a9"
    on-primary: "#ffffff"
    hairline: "#eeeeee"
    ink: "#000000"
  typography:
    family: { sans: "Noto Sans KR", fallback: "Apple SD Gothic Neo, Malgun Gothic, sans-serif" }
    price-hero:  { size: 24, weight: 700, lineHeight: 1.2, tracking: 0, use: "Discount price, the largest emphasis unit on a product card" }
    search-input: { size: 16, weight: 400, lineHeight: 1.3, tracking: 0, use: "Global search field text and active search tab label" }
    price-base:  { size: 16, weight: 400, lineHeight: 1.3, tracking: 0, use: "Standard price figure, sub-amounts" }
    body:        { size: 14, weight: 400, lineHeight: 1.5, tracking: 0, use: "Default reading text, links, nav, labels" }
    heading:     { size: 14, weight: 700, lineHeight: 1.5, tracking: 0, use: "Section heads, h1/h2, strong labels" }
    caption:     { size: 13, weight: 400, lineHeight: 1.4, tracking: 0, use: "Strikethrough original price, metadata, fine print" }
    micro:       { size: 11, weight: 400, lineHeight: 1.4, tracking: 0, use: "Unit suffix, badge digits, tiny labels" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 20, xl: 24, xxl: 40 }
  rounded: { sm: 4, md: 8, lg: 25, full: 9999 }
  shadow:
    none: "none"
    ambient: "rgba(0,0,0,0.06) 0px 2px 8px"
    elevated: "rgba(0,0,0,0.12) 0px 6px 16px"
  components:
    button-primary: { type: button, bg: "#ff0038", fg: "#ffffff", radius: "4px", padding: "12px 24px", font: "16px / 700", use: "Primary commerce CTA (구매하기/장바구니), brand red on white" }
    button-ghost: { type: button, bg: "#ffffff", fg: "#111111", radius: "4px", padding: "10px 20px", font: "14px / 400", use: "Secondary action, 1px #eeeeee border" }
    search-tab: { type: tab, fg: "#111111", radius: "25px", padding: "0px 20px 2px", font: "16px / 400", active: "active label #ff0038, rounded 25px pill seat", use: "Integrated search-scope selector (통합검색/아마존)" }
    input-search: { type: input, bg: "#ffffff", fg: "#666666", radius: "4px", padding: "0px 12px", font: "16px / 400", use: "Global search field, hairline #eeeeee underline/border" }
    card-product: { type: card, bg: "#ffffff", fg: "#111111", radius: "8px", use: "Product tile, 1px #eeeeee border, ambient shadow on hover" }
    badge-discount: { type: badge, bg: "#ffffff", fg: "#f43142", radius: "4px", padding: "1px 6px", font: "11px / 700", use: "Discount-rate flag (13%할인), red figure on white" }
    price-discount: { type: badge, bg: "#ffffff", fg: "#111111", radius: "4px", padding: "0px", font: "24px / 700", use: "Final discount price, the loudest type on a card" }
    price-original: { type: badge, bg: "#ffffff", fg: "#a9a9a9", radius: "4px", padding: "0px", font: "13px / 400", use: "Strikethrough original price (판매가)" }
    listItem-nav: { type: listItem, bg: "#ffffff", fg: "#666666", radius: "0px", padding: "0px 12px", font: "14px / 400", use: "GNB / category nav row, #111111 on hover" }
---

# Design System Inspiration of 11st

## 1. Visual Theme & Atmosphere

11st (11번가) is one of Korea's largest open-market e-commerce platforms, and its homepage is built for one job: get a shopper from a vast, dense catalog to a purchase decision as fast as possible. The atmosphere is high-density and utilitarian — a white canvas (`#ffffff`) packed edge-to-edge with product tiles, prices, badges, and navigation. This is not the airy, whitespace-luxury aesthetic of a Western SaaS landing page; it is the deliberate, information-rich layout of a Korean mega-mall portal where every pixel of above-the-fold real estate earns its place. The reading temperature is set by a neutral gray body color (`#666666`) on near-black headings (`#111111`), keeping the chrome quiet so that color can do exactly one thing: signal commerce urgency.

That single signal is the 11st brand red. The live DOM reveals a sharp, saturated red (`#ff0038`) on active and focused states, paired with a slightly warmer discount-accent red (`#f43142`) for promotional emphasis like discount-rate flags. Against the otherwise grayscale field, red is never decorative — it marks the thing you should act on or the saving you should notice. This restraint is the system's core discipline: a dense gray-and-white grid in which red is the only loud color, so the eye is trained to follow it straight to a CTA or a markdown.

Typography is Korean-first. The stack leads with `Noto Sans KR`, falling back through `Apple SD Gothic Neo` and `Malgun Gothic` — the standard high-legibility Hangul stack tuned for small sizes at high density. Most text runs at 14px, the workhorse size of Korean portal UIs, with prices escalating to a bold 24px (`#111111`, weight 700) as the loudest unit on any product card. There is almost no shadow and almost no rounding in the base chrome; depth and softness are reserved, appearing only as gentle ambient elevation on hover and a distinctive 25px-radius pill on the integrated search-scope selector.

**Key Characteristics:**
- White canvas (`#ffffff`) with a high-density grid — information-rich, portal-style, anti-whitespace
- Brand red `#ff0038` as the single action/urgency color on active and focused states
- Warmer discount red `#f43142` reserved for promotional markdown emphasis
- `Noto Sans KR` Hangul-first stack tuned for small-size legibility at high density
- 14px body workhorse; bold 24px price (`#111111` weight 700) as the dominant card emphasis
- Strikethrough original price in muted gray (`#a9a9a9`) beside the red-adjacent discount figure
- Near-flat chrome — minimal shadow, minimal rounding — with a signature 25px search-tab pill
- Grayscale field (`#111111`/`#666666`/`#a9a9a9`) so red reads as pure intent

## 2. Color Palette & Roles

### Primary
- **11st Red** (`#ff0038`): The brand's signature commerce red. Active/focused search-tab state, primary CTA backgrounds, urgency markers. A sharp, fully saturated red that anchors the entire system.
- **Near-Black Ink** (`#111111`): Primary heading and price color. Not pure black — a dense near-black that reads as authoritative without harshness on white.
- **Pure White** (`#ffffff`): Page background, card surfaces, search field fill, CTA text on red.

### Accent
- **Discount Red** (`#f43142`): Slightly warmer red used on promotional emphasis — discount-rate flags, "관련 상품" accent emphasis. Distinct from the action-red `#ff0038`; this is the markdown/savings register.

### Neutral Scale
- **Body Gray** (`#666666`): Secondary text, navigation links, labels, the default reading color across chrome.
- **Muted Gray** (`#a9a9a9`): Strikethrough original price (판매가), de-emphasized metadata, the "before discount" register.
- **Hairline** (`#eeeeee`): Card borders, dividers, search-field underlines, the quiet structural lines of the dense grid.

### Surface & Ink
- **Ink** (`#000000`): True black reserved for fine iconography and maximal-contrast micro-elements.
- **On-Primary** (`#ffffff`): Text and icon color on the red CTA surface.

## 3. Typography Rules

### Font Family
- **Primary**: `Noto Sans KR`
- **Fallback**: `Apple SD Gothic Neo`, `Malgun Gothic`, `맑은 고딕`, `돋움`, `sans-serif`
- The Hangul-first stack is chosen for crisp legibility at the small sizes (11px–14px) that dominate a dense commerce grid.

### Hierarchy

| Role | Size | Weight | Line Height | Use |
|------|------|--------|-------------|-----|
| Price Hero | 24px | 700 | 1.2 | Final discount price — the largest, loudest unit on a product card |
| Search Input | 16px | 400 | 1.3 | Global search field text and active search-tab label |
| Price Base | 16px | 400 | 1.3 | Standard price figure, sub-amounts |
| Heading | 14px | 700 | 1.5 | Section heads, h1/h2, strong labels |
| Body | 14px | 400 | 1.5 | Default reading text, links, nav rows |
| Caption | 13px | 400 | 1.4 | Strikethrough original price, metadata, fine print |
| Micro | 11px | 400 | 1.4 | Unit suffix (원), badge digits, tiny labels |

### Principles
- **14px is the workhorse.** The vast majority of chrome, navigation, and labels sit at 14px — the standard Korean portal reading size that balances density against legibility.
- **Price is the headline.** There is no 48px hero type here. The biggest, boldest text on the page is a price (24px / 700). In a commerce-first system, the number IS the headline.
- **Weight binary.** The system runs on 400 (everything) and 700 (headings, prices, emphasis). There is no light-weight display register; this is functional type, not luxury type.
- **Hangul-first legibility.** `Noto Sans KR` is engineered for the small sizes the dense grid demands; the fallback chain keeps Hangul rendering consistent across OSes.

## 4. Component Stylings

### Buttons
**Primary CTA**
- Background: `#ff0038`
- Text: `#ffffff`
- Padding: 12px 24px
- Radius: 4px
- Font: 16px Noto Sans KR weight 700
- Use: Primary commerce action (구매하기 / 장바구니 / 주문하기)

**Ghost / Secondary**
- Background: `#ffffff`
- Text: `#111111`
- Padding: 10px 20px
- Radius: 4px
- Border: `1px solid #eeeeee`
- Use: Secondary actions, filters, quiet controls

### Search Tab (integrated scope selector)
- Active label color: `#ff0038`
- Radius: 25px (the system's signature pill seat)
- Padding: 0px 20px 2px
- Font: 16px weight 400
- Use: Switching search scope (통합검색 / 아마존). The 25px-radius pill is the one place softness appears in the chrome.

### Search Input
- Background: `#ffffff`
- Text: `#666666`
- Radius: 4px
- Padding: 0px 12px
- Border: hairline `#eeeeee` underline/border
- Font: 16px weight 400

### Cards & Containers (product tile)
- Background: `#ffffff`
- Border: `1px solid #eeeeee`
- Radius: 8px
- Shadow: none at rest; ambient `rgba(0,0,0,0.06) 0px 2px 8px` on hover
- Contents: thumbnail, title at 14px, discount-rate badge, 24px/700 discount price, strikethrough original price at 13px `#a9a9a9`

### Badges
**Discount-Rate Flag**
- Background: `#ffffff`
- Text: `#f43142`
- Padding: 1px 6px
- Radius: 4px
- Font: 11px weight 700
- Use: Discount percentage (13%할인) — red figure on white

### Navigation (GNB / category)
- Row text: `#666666` at 14px weight 400
- Hover: text shifts to `#111111`
- Radius: 0px (square, dense rows)
- White background, hairline `#eeeeee` dividers

**Tier 1 sources:** https://www.11st.co.kr, https://about.11st.co.kr

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Scale: 4px, 8px, 12px, 16px, 20px, 24px, 40px
- The dense small-end steps (4–12px) reflect a layout that packs many tiles and labels into limited vertical space.

### Grid & Container
- Wide centered content column (~1240px) holding multi-column product grids
- Above-the-fold is information-maximal: GNB, integrated search, category rail, promo banners, and product rails all compete for the first screen
- Product tiles arranged in dense responsive grids (typically 4–6 across on desktop)

### Whitespace Philosophy
- **Density as a feature.** Unlike whitespace-forward Western design, 11st treats density as a service to the shopper — more products visible means fewer scrolls to a decision. Gaps are tight and functional.
- **Hairlines over gaps.** Structure is communicated by `#eeeeee` hairlines and borders rather than large empty margins, keeping the grid legible while maximizing content.

### Border Radius Scale
- Square (0px): Nav rows, dividers, many structural blocks
- Small (4px): Buttons, badges, inputs — the workhorse rounding
- Medium (8px): Product cards, thumbnails
- Pill (25px): The integrated search-scope tab — the signature soft accent
- Full (9999px): Circular icon buttons (scroll-to-top, category toggle)

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, nav rows, resting tiles |
| Ambient (Level 1) | `rgba(0,0,0,0.06) 0px 2px 8px` | Product-card hover lift, quiet panels |
| Elevated (Level 2) | `rgba(0,0,0,0.12) 0px 6px 16px` | Dropdowns, popovers, floating layers |

**Shadow Philosophy**: 11st is a near-flat system. At rest, the chrome carries no shadow at all — structure comes from hairlines and color blocks, not elevation. Shadow appears only as a soft ambient lift on hover and as a slightly deeper layer for floating menus. This restraint keeps the dense grid visually calm; if every tile cast a shadow, the page would become noise. Depth is an interaction affordance here, not a decorative style.

## 7. Do's and Don'ts

### Do
- Use `#ff0038` as the single action/urgency color — CTAs, active states, focus
- Reserve `#f43142` for discount/markdown emphasis (rate flags, savings)
- Make the price the loudest element: 24px weight 700 in `#111111`
- Pair the discount price with a muted `#a9a9a9` strikethrough original
- Use `Noto Sans KR` and keep body text at 14px for portal-grade density
- Communicate structure with `#eeeeee` hairlines, not large gaps
- Keep chrome flat; reserve ambient shadow for hover/floating layers only
- Use the 25px pill only on the integrated search-scope tab — it is a signature, not a default

### Don't
- Don't introduce a second loud color — red is the only urgency signal
- Don't use pure black (`#000000`) for headings; use near-black `#111111`
- Don't add airy whitespace at the expense of product density — density is the value
- Don't pill-round buttons or cards; rounding stays at 4–8px outside the search tab
- Don't shadow resting tiles — flat-at-rest keeps the dense grid calm
- Don't shrink the price below its 24px/700 dominance on a card
- Don't mix `#ff0038` and `#f43142` arbitrarily — action-red vs markdown-red are distinct roles
- Don't substitute a Latin-first font stack; Hangul legibility leads

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <768px | Single/2-column tile grid, collapsed GNB, sticky search |
| Tablet | 768–1024px | 3–4 column grid, condensed category rail |
| Desktop | 1024–1280px | Full 4–6 column product grids, full GNB |
| Large | >1280px | Centered ~1240px content with side margins |

### Touch Targets
- Primary CTA at 12px/24px padding gives a comfortable tap surface
- Nav rows and category items spaced for thumb reach on mobile
- Circular icon buttons (scroll-to-top, category toggle) sized for tap

### Collapsing Strategy
- Product grid: 6-column → 4 → 3 → 2 → 1 across breakpoints
- GNB: full horizontal nav → hamburger/category drawer on mobile
- Integrated search: persistent and often sticky at the top on mobile
- Price block maintains its 24px/700 dominance; surrounding metadata wraps or truncates first

### Image Behavior
- Square product thumbnails with 8px radius, consistent across breakpoints
- Promo banners scale full-width and swap to mobile-cropped variants
- Lazy-loaded tiles below the fold to keep the dense grid performant

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA / urgency: 11st Red (`#ff0038`)
- Discount / markdown accent: Discount Red (`#f43142`)
- Background: Pure White (`#ffffff`)
- Heading / price: Near-Black (`#111111`)
- Body text / nav: Body Gray (`#666666`)
- Strikethrough / muted: Muted Gray (`#a9a9a9`)
- Border / hairline: (`#eeeeee`)
- CTA text: White (`#ffffff`)

### Example Component Prompts
- "Create a product card: white background, 1px solid #eeeeee border, 8px radius, no shadow at rest. Discount-rate badge in #f43142 (11px / 700) top-left. Title at 14px Noto Sans KR #666666. Discount price at 24px weight 700 #111111. Strikethrough original price at 13px #a9a9a9 beside it. On hover, ambient shadow rgba(0,0,0,0.06) 0px 2px 8px."
- "Build a primary CTA: #ff0038 background, white text, 16px Noto Sans KR weight 700, 12px 24px padding, 4px radius. Label '구매하기'."
- "Design an integrated search bar: white field, 16px #666666 text, hairline #eeeeee border, 4px radius, with a 25px-radius scope tab whose active label is #ff0038."
- "Create a dense GNB row: white background, #666666 14px links, hover to #111111, #eeeeee divider hairlines, 0px radius square rows."

### Iteration Guide
1. Keep `#ff0038` as the only loud color — if a second bright hue appears, remove it.
2. The price is the headline: 24px / 700 / `#111111`, never smaller than its surroundings.
3. Body stays at 14px `Noto Sans KR`; weight is binary (400 / 700).
4. Structure with `#eeeeee` hairlines, not whitespace — density is intentional.
5. Chrome is flat at rest; shadow only on hover (`rgba(0,0,0,0.06) 0px 2px 8px`) or floating layers.
6. Rounding stays at 4–8px; the 25px pill is exclusive to the search-scope tab.
7. Distinguish `#ff0038` (action) from `#f43142` (markdown) by role, never interchangeably.

---

## 10. Voice & Tone

11st's voice is brisk, transactional, and benefit-forward — the register of a Korean open-market that competes on price, speed, and selection. Microcopy is short and action-oriented: 구매하기 (buy), 장바구니 (cart), 할인 (discount), 무료배송 (free shipping). Numbers do the persuading — discount rates, final prices, point rewards — so prose stays out of the way. There is warmth in promotional energy (events, coupons, time-limited deals) but the underlying tone is efficient and shopper-respecting: tell me the price, the saving, and the action, in that order.

| Context | Tone |
|---|---|
| Product titles | Dense, keyword-rich, scannable. Brand + spec + benefit packed for search legibility. |
| CTAs | Direct imperatives. "구매하기", "장바구니 담기", "바로구매". |
| Promotions | Energetic, urgency-flavored. Discount rate and deadline lead. |
| Price/discount | Numbers first. The saving is the message. |
| Notices / policy | Plain, procedural Korean. Clear about shipping, returns, points. |
| Search / empty | Helpful, suggestion-forward. Offers related keywords and categories. |

**Forbidden register.** Avoid airy lifestyle-brand prose that buries the price. Avoid burying the discount under adjectives. Avoid a second loud color competing with red for attention. The shopper came to compare and buy — respect that with numbers and clear actions, not mood copy.

## 11. Brand Narrative

11st (11번가) launched in **2008** as the open-market e-commerce platform of **SK** in South Korea, entering a market already contested by Gmarket and Auction. It grew into one of Korea's largest online marketplaces, and in **2018** the e-commerce business was spun off into a standalone company, **Eleven Street Co., Ltd.**, under the SK Square / SK Telecom orbit. The name "11번가" — literally "11th Street" — frames the service as a bustling commercial street where countless sellers and shoppers meet, an open marketplace rather than a single first-party retailer.

The platform's defining strategic move in recent years has been its **Amazon Global Store** partnership, surfacing Amazon's catalog to Korean shoppers directly inside 11st — which is why the integrated search even offers an "아마존" scope alongside 통합검색. This positions 11st not just as a domestic open-market but as a gateway to cross-border selection, competing on breadth of catalog and price.

The design system follows directly from this identity. An open-market with millions of SKUs and thousands of sellers cannot afford editorial whitespace; it must surface as many comparable options as possible, as fast as possible. Hence the dense grid, the price-as-headline hierarchy, and the single disciplined use of red to mark action and savings. 11st's brand promise is selection and value, and the UI is engineered to deliver both at a glance.

## 12. Principles

1. **Density serves the shopper.** More products visible means fewer steps to a decision. Tight grids and hairline structure are a service, not a compromise.
2. **The price is the headline.** In open-market commerce, the most important information is the number. It gets the largest, boldest type on the card.
3. **Red means act or save.** A single saturated red (`#ff0038`) marks the action; a markdown red (`#f43142`) marks the saving. Red is never decorative.
4. **Hangul-first legibility.** `Noto Sans KR` at small sizes keeps a dense Korean grid crisp and scannable.
5. **Flat at rest, lift on intent.** No resting shadows; elevation is an interaction affordance, keeping the busy grid calm.
6. **Structure with lines, not gaps.** `#eeeeee` hairlines organize density where whitespace would waste it.
7. **One signature softness.** The 25px search-scope pill is the single intentional curve in an otherwise square, functional chrome.
8. **Selection is the brand.** From domestic sellers to the Amazon Global Store, breadth of catalog is the promise the layout must honor.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable 11st user segments (deal-seeking shoppers, mobile-first buyers, cross-border bargain hunters, third-party sellers), not individual people.*

**Ji-woo Park, 29, Seoul.** Mobile-first deal hunter. Opens 11st during her commute to compare prices on a specific gadget across sellers. Scans discount-rate badges and final prices in seconds; the strikethrough original tells her how good the deal is. Abandons any page where she has to hunt for the price. Trusts the platform because the savings are always legible at a glance.

**Min-jun Kim, 42, Daegu.** Household-supplies bulk buyer. Uses 11st on desktop, filling a cart with everyday goods and chasing free-shipping thresholds and point rewards. Values the dense grid — he can see dozens of options without scrolling endlessly. Reads product titles like a spec sheet and ignores anything that looks like marketing fluff.

**Seo-yeon Lee, 35, Bundang.** Cross-border bargain shopper. Came to 11st specifically for the Amazon Global Store — she toggles the search scope to 아마존 to compare imported goods against domestic listings. Cares about total landed price and delivery estimate. The integrated search that spans both catalogs is exactly why she stays on 11st instead of using two sites.

**Tae-hyun Jung, 38, Incheon.** Third-party seller running a small electronics shop on the open-market. Thinks about how his listings render in the grid — thumbnail, title keywords, discount badge, price. Knows that a clear discount-rate flag and a competitive final price are what win the click in a sea of comparable tiles.

## 14. States

| State | Treatment |
|---|---|
| **Empty (search, no results)** | White canvas. Plain line in `#666666` at 14px: "검색 결과가 없습니다." Suggested related keywords and popular categories offered below. No illustration-heavy dead end — redirect to selection. |
| **Empty (cart)** | `#666666` single line: "장바구니에 담긴 상품이 없습니다." One `#ff0038` CTA back to shopping. |
| **Loading (grid first paint)** | Skeleton tiles at final dimensions in `#eeeeee`. Thumbnail, title bar, and price bar placeholders sized to the real tile. Lazy-load below the fold. |
| **Loading (price/stock refresh)** | Inline spinner or subtle shimmer on the affected tile; previous price stays visible until updated. |
| **Error (action failed)** | Inline message near the action in plain Korean: what failed + what to do. No generic "오류가 발생했습니다" without a next step. |
| **Error (sold out)** | Tile marks 품절; CTA switches to disabled/muted; suggests similar in-stock items. |
| **Success (added to cart)** | Brief confirmation layer or toast: "장바구니에 담았습니다." Quick links to view cart or keep shopping. No emoji. |
| **Success (order placed)** | Dedicated confirmation page with order number, total, and shipping estimate in `#111111`; next-step links prominent. |
| **Disabled** | Muted to `#a9a9a9` on text with reduced surface contrast; red CTAs fade rather than recolor, preserving brand read. |
| **Discount / deal active** | Discount-rate flag in `#f43142`, final price at 24px/700 `#111111`, strikethrough original at 13px `#a9a9a9`. The savings is the state. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Selection ticks, focus marks |
| `motion-fast` | 150ms | Hover lift, button press, tab switch |
| `motion-standard` | 250ms | Dropdowns, cart layer, drawer open |
| `motion-slow` | 400ms | Banner/carousel transitions, drawer slide |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Most hover and panel transitions |
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Drawers, dropdowns arriving |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |

**Restraint.** Motion is functional, not playful. A dense commerce grid stays calm — hover lifts are quick (150ms) and small, panels slide with standard easing, and there is no bounce or spring that would make a busy page feel chaotic.

**Signature motions.**

1. **Card hover lift.** Product tiles raise with a fast (150ms) ambient shadow (`rgba(0,0,0,0.06) 0px 2px 8px`) — a small, quick affordance confirming the tile is interactive without disturbing the grid's calm.
2. **Search-scope tab switch.** Switching between 통합검색 and 아마존 transitions the active label to `#ff0038` within the 25px pill seat using `ease-standard` — instant feedback on scope change.
3. **Category drawer / cart layer.** Slide-in panels use `motion-standard` with `ease-enter`; dismissals use `ease-exit`. The grid behind stays still.
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, hover lifts and panel slides collapse to instant. The dense grid remains fully functional; nothing essential depends on animation.

<!--
OmD v0.1 Sources — 11st

Token-level claims (sections 1–9, structured block) are sourced from live DOM
inspection of https://www.11st.co.kr via Playwright getComputedStyle (2026-06-09):
- Brand red #ff0038 (active/focused search tab LI), discount red #f43142 (em accent)
- Heading/price #111111, body #666666, muted/strikethrough #a9a9a9, canvas #ffffff,
  hairline #eeeeee
- Noto Sans KR / Apple SD Gothic Neo / Malgun Gothic stack
- 14px body workhorse, 24px/700 discount price, 16px search input, 25px search-tab radius
See web/references/11st/.verification.md for raw samples.

Brand narrative (§11): 11st (11번가) launched 2008 as SK's open-market; the
e-commerce business was spun off as Eleven Street Co., Ltd. in 2018; the Amazon
Global Store partnership surfaces Amazon's catalog inside 11st (reflected in the
아마존 search scope). Widely documented public facts.

Personas (§13) are fictional archetypes informed by publicly observable 11st
user segments (deal-seekers, mobile buyers, cross-border shoppers, sellers).
Names are illustrative; they do not refer to real people.

Interpretive claims (e.g., "density serves the shopper", "the price is the
headline") are editorial readings connecting 11st's open-market identity to its
observed design system, not direct 11st statements.
-->
