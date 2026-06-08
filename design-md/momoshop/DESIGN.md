---
id: momoshop
name: "momo購物網"
country: TW
category: ecommerce
homepage: "https://www.momoshop.com.tw"
primary_color: "#D62872"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=momoshop.com.tw&sz=256"
verified: "2026-06-03"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#d62872"
    primary-hover: "#d9006c"
    brand: "#e5047e"
    canvas: "#f2f2f2"
    surface: "#fafafa"
    foreground: "#404040"
    muted: "#727272"
    on-primary: "#ffffff"
    accent-link: "#027bff"
    error: "#dd2222"
    error-delete: "#ea3323"
    accent-rank: "#ffaa3b"
    hairline: "#ededed"
    border-medium: "#b3b3b3"
  typography:
    family: { sans: "Microsoft JhengHei UI", mono: "Oxygen" }
    heading:  { size: 17, weight: 700, lineHeight: 1.41, use: "Search suggest titles, headings" }
    body:     { size: 15, weight: 400, lineHeight: 1.33, use: "Product list items, UI labels" }
    caption:  { size: 13, weight: 400, lineHeight: 1.38, use: "Captions, metadata" }
    badge:    { size: 12, weight: 400, use: "Badges" }
    micro:    { size: 11, weight: 400, use: "Heat/rank metadata labels" }
  spacing: [3, 5, 6, 8, 10, 12, 16, 20, 24]
  rounded: { sm: 4, md: 8, lg: 16, full: 9999 }
  shadow:
    card: "0 1px 2px 0 rgba(0,0,0,.05)"
    panel: "0 1px 3px rgba(0,0,0,.1)"
    modal: "0 4px 6px -1px rgba(0,0,0,.1)"
  components_harvested: true
  components:
    header-bar: { type: card, bg: "#d62872", fg: "#ffffff", height: "44px", font: "26px / 700", use: "Primary header bar" }
    cart-badge: { type: badge, bg: "#e5047e", fg: "#ffffff", radius: "8px", font: "12px / 400", use: "Cart notification badge" }
    input: { type: input, bg: "#ffffff", border: "1px solid #b3b3b3", height: "36px", padding: "8px 8px 8px 10px", radius: "4px", font: "15px / 400", use: "Search input desktop" }
    chip: { type: badge, bg: "#f2f2f2", fg: "#404040", height: "32px", radius: "16px", padding: "6px 8px", font: "13px / 400", use: "Recent/suggest search chip" }
    button-primary: { type: button, bg: "#d62872", fg: "#ffffff", height: "38px", radius: "4px", font: "16px / 700", states: "hover #d9006c", use: "Primary CTA" }
    button-destructive: { type: button, bg: "#ea3323", fg: "#ffffff", height: "44px", radius: "22px", font: "17px / 400", use: "Delete all action" }
    button-secondary: { type: button, bg: "#ffffff", fg: "#999999", border: "1px solid #b3b3b3", radius: "13px", padding: "3px 5px 3px 8px", font: "13px / 400", use: "Secondary rules button" }
    trend-card: { type: card, bg: "linear-gradient(180deg,#fff5f9,#f9f9f9)", border: "1px solid #fbe9f1", radius: "15px", use: "Search trend card" }
    rank-badge: { type: badge, bg: "linear-gradient(0.34deg,#ffaa3b,#ff9203)", fg: "#ffffff", radius: "4px", font: "15px / 400", use: "Top rank number badge" }
    tooltip: { type: card, bg: "rgba(0,0,0,.8)", fg: "#ffffff", radius: "8px", padding: "12px", font: "15px / 700", use: "Search dialog tooltip" }
---

# momo購物網

Taiwan's largest television and digital shopping platform, operated by Fubon Media Technology (富邦媒體科技), combining TV commerce heritage with a modern mobile-first marketplace offering millions of products across beauty, fashion, electronics, and daily essentials.

## 1. Visual Theme & Atmosphere

momo's digital product design radiates warm, confident energy rooted in its signature magenta-pink — a hue that traces back to its television shopping roots and reads instantly as "deal in progress." The overall atmosphere is dense but purposeful: a grid-forward layout packed with product imagery, price badges, and countdown timers communicates urgency and abundance simultaneously. Backgrounds stay cool-neutral (#F2F2F2 page canvas, #FAFAFA card surfaces) so that the hot pink accent and vivid product photography always pop. The typography follows a practical hierarchy — Microsoft JhengHei UI and PingFang TC for body readability in Traditional Chinese, with Century Gothic / Oxygen reserved exclusively for price numerals, which are the true focal stars on every product tile. Depth is achieved through subtle card shadows (0 1px 3px rgba(0,0,0,.1)) rather than heavy borders, keeping the eye moving across the catalogue grid rather than stopping at structural chrome.

## 2. Color Palette & Roles

- **Momo Pink (Primary):** `#D62872` — header background, primary CTA buttons, active nav indicators, brand logos, price accent, search-suggest titles
- **Momo Pink Dark (Hover/Active):** `#D9006C` — hover state of primary buttons, selected tab underlines
- **Shopping Cart Badge Pink:** `#E5047E` — notification badge background on cart icon
- **Momo Blue (Link/Secondary Action):** `#027BFF` — hyperlinks, filter chips, restriction-text color, secondary interactive elements
- **Sale Red (Price Alert):** `#DD2222` — discount labels, urgent sale badges, delete-confirm actions
- **Alert Red (Delete):** `#EA3323` — destructive actions (delete-all browse-history button)
- **Orange Gradient (Rank Badge):** `#FFAA3B` to `#FF9203` — top-ranked product number badges (linear-gradient)
- **Page Background:** `#F2F2F2` — global page canvas and footer zone
- **Card Surface:** `#FAFAFA` — product card and panel backgrounds
- **Search Chip Background:** `#F2F2F2` — recent-search pill chips
- **Text Primary:** `#404040` / `#454545` — body text, product titles
- **Text Secondary:** `#727272` / `#999999` — captions, metadata, placeholder text
- **Border Default:** `#EDEDED` — dividers, card borders
- **Border Medium:** `#B3B3B3` — input outlines, rules buttons

## 3. Typography Rules

- **Primary typeface:** `"Microsoft JhengHei UI", "SF Pro TC", "SF Pro Text", "PingFang TC", Helvetica, Arial, sans-serif` — used for all body, navigation, product titles, and UI labels (defined in `--primary-font-family` CSS variable)
- **Price typeface:** `"Oxygen", "Century Gothic", sans-serif` — used exclusively for price numerals (defined in `--price-font-family` CSS variable)
- **Base size:** 15px — search suggest titles (`font: 700 17px/24px var(--main-font)`), product list items 15px, captions 13px, badges 12px–11px
- **Weight scale:** 400 regular body, 700 bold for section headings, product names, price labels, search-trend titles
- **Line-height:** 1.5 base (defined on `:root`); 20px for 15px UI text; 18px for 13px caption text; 24px for 17px headings
- **Minimum size:** 11px (heat/rank metadata labels); no text below 11px in the search surface

## 4. Component Stylings

### Header Navigation

**Primary Header Bar**
- Background: `#D62872`
- Text: `#FFFFFF`
- Height: 44px
- Font: 26px / 700

**Cart Badge**
- Background: `#E5047E`
- Text: `#FFFFFF`
- Radius: 8px
- Width: 17px
- Height: 17px
- Font: 12px / 400

### Search Bar

**Search Input (Desktop)**
- Background: `#FFFFFF`
- Border: 1px solid `#B3B3B3`
- Height: 36px
- Padding: 8px 8px 8px 10px
- Radius: 4px
- Font: 15px / 400

**Search Chip Tag (Recent/Suggest)**
- Background: `#F2F2F2`
- Text: `#404040`
- Height: 32px
- Radius: 16px
- Padding: 6px 8px
- Font: 13px / 400

### Buttons

**Primary CTA Button (Error-page / Home)**
- Background: `#D62872`
- Text: `#FFFFFF`
- Height: 38px
- Radius: 4px
- Font: 16px / 700

**Destructive Button (Delete All)**
- Background: `#EA3323`
- Text: `#FFFFFF`
- Height: 44px
- Radius: 22px
- Width: 118px
- Font: 17px / 400

**Secondary Rules Button**
- Background: `#FFFFFF`
- Text: `#999999`
- Border: 1px solid `#B3B3B3`
- Radius: 13px
- Padding: 3px 5px 3px 8px
- Font: 13px / 400

### Trend / Product Cards

**Search Trend Card**
- Border: 1px solid `#FBE9F1`
- Radius: 15px
- Background: linear-gradient(180deg, `#FFF5F9`, `#F9F9F9`)

**Trend Item (Top 3 highlight)**
- Background: linear-gradient(90deg, `#FFE4F0`, `#FCF6F9`)
- Radius: 8px
- Padding: 6px 8px

**Trend Item (Standard)**
- Background: linear-gradient(90deg, `#F3F3F3`, `#FEF5F9`)
- Radius: 8px
- Padding: 6px 8px

### Rank Badge

**Rank Number (Top Orange)**
- Background: linear-gradient(0.34deg, `#FFAA3B` 0.29%, `#FF9203` 99.69%)
- Text: `#FFFFFF`
- Radius: 4px
- Width: 25px
- Height: 25px
- Font: 15px / 400

### Tooltip / Dialog

**Search Dialog Tooltip**
- Background: `rgba(0,0,0,.8)`
- Text: `#FFFFFF`
- Radius: 8px
- Padding: 12px
- Font: 15px / 700 (title), 13px / 400 (body)

---
**Verified:** 2026-06-03
**Tier 1 sources:** https://www.momoshop.com.tw/brand (HTML + inline CSS), https://www.momoshop.com.tw/about (HTML + inline CSS), https://image.momoshop.com.tw/ecm/font/theme-main.css (CSS custom properties), https://www.momoshop.com.tw/search/_next/static/css/93e50030b97ac6a5.css (Tailwind utility bundle), https://www.momoshop.com.tw/search/_next/static/css/a40c6c07c5abf802.css (component CSS)
**Tier 2 sources:** getdesign.md/momoshop — NOT LISTED ("No designs found for 'momoshop'"). refero ?q=momo — no result (TW brand, not indexed).
**Conflicts unresolved:** none

## 5. Layout Principles

- Fluid grid with horizontal product card lanes; mobile collapses to 2-column, desktop expands to 4–6 columns
- Header fixed at 44px height; body starts immediately beneath with no gutter
- Page canvas background always `#F2F2F2`; white (#FFFFFF) card surfaces float above canvas with 1px subtle shadow
- Search and filter controls anchored to a 36px tall persistent bar below the 44px header on mobile
- Categories use icon-label vertical stack in horizontal scrollable row; no wrapping
- Countdown timers, sale badges, and rank numbers overlay the top-left corner of product thumbnails
- Footer zone uses `#EEEEEE` background with `#484848` text at 13px for legal and service links

## 6. Depth & Elevation

- **Level 0 — Canvas:** `#F2F2F2` background, no shadow
- **Level 1 — Cards:** `#FFFFFF` / `#FAFAFA` surface, box-shadow `0 1px 2px 0 rgba(0,0,0,.05)`
- **Level 2 — Dropdowns/Panels:** box-shadow `0 1px 3px rgba(0,0,0,.1)`, z-index ~10
- **Level 3 — Modals/Side Drawers:** box-shadow `0 4px 6px -1px rgba(0,0,0,.1)`, z-index 1000
- **Level 4 — Toast/Tooltip overlays:** `rgba(0,0,0,.8)` background, z-index 1000+
- **Level 5 — Login modal overlay:** `rgba(0,0,0,.5)` scrim + container z-index 999999

## 7. Do's and Don'ts

### Do
- Use `#D62872` for all primary interactive elements — buttons, active states, brand signifiers
- Pair hot-pink backgrounds with pure white (`#FFFFFF`) text for maximum legibility
- Reserve `#DD2222` exclusively for price/discount signals and destructive confirmation actions
- Use pill chips (border-radius: 16px) for search tags and filter selections — keeps them distinct from rectangular buttons
- Apply the 44px touch-target minimum for all mobile interactive rows (header elements, list items)
- Use the Oxygen / Century Gothic price font for all numeric price displays to maintain the premium-meets-value visual signal
- Keep card backgrounds white or near-white (#FAFAFA) so product photography remains the visual hero

### Don't
- Do not use `#D62872` for error states — use `#DD2222` or `#EA3323` to avoid confusion with brand CTA
- Do not mix the price font (Oxygen/Century Gothic) into body copy — it is reserved solely for numerals
- Do not place text smaller than 11px (absolute minimum is the rank/heat metadata size)
- Do not use shadows heavier than `0 10px 15px -3px rgba(0,0,0,.1)` inside product cards — heavy shadows compete with product images
- Do not apply border-radius greater than 22px on action buttons — pill shapes above that threshold break the functional/brand balance
- Do not leave the page canvas as pure white — the `#F2F2F2` canvas is essential for making white card surfaces appear elevated

## 8. Responsive Behavior

- **Mobile (≤768px):** Single or 2-column product grid; header collapses to 44px icon-bar; search triggers full-screen overlay (100vh); category icons in horizontal scroll lane; bottom navigation bar fixed at ~44px
- **Tablet (768–1024px):** 3-column product grid; inline search bar at 36px height; category row with text labels visible
- **Desktop (≥1024px):** 4–6 column grid; full header with logo + search bar (440px wide) + nav links; browsing-history side drawer (137px) docks to right edge; hover states active (`hover:text-[#D62872]`, `group-hover:bg-[#D62872]`)
- Touch targets: minimum 44px height across all mobile interactive elements (header buttons, list rows, bottom bar)
- Images: all set `h-auto` to maintain aspect ratio across breakpoints; product thumbnails use fixed-ratio containers

## 9. Agent Prompt Guide

To replicate momo's visual language in a UI component or prototype:

- Set global background to `#F2F2F2`; use `#FFFFFF` card surfaces with `box-shadow: 0 1px 3px rgba(0,0,0,.1)`
- Primary brand color: `#D62872`; hover/pressed: `#D9006C`; never tint or desaturate it
- Font stack: `"Microsoft JhengHei UI", "PingFang TC", Helvetica, Arial, sans-serif`; price numerals: `"Oxygen", "Century Gothic", sans-serif` in bold
- Header: 44px tall, `#D62872` fill, white text/icons
- CTA buttons: `height 38–44px`, `border-radius 4–8px`, `background #D62872`, `color #FFFFFF`, `font-weight 700`
- Search chips: `height 32px`, `border-radius 16px`, `background #F2F2F2`, `color #404040`
- Rank badges top 1-3: orange gradient `#FFAA3B → #FF9203`, white text, `border-radius 4px`, `25×25px`
- Price/discount labels: `#DD2222`, bold, Oxygen/Century Gothic numerals
- Error/delete actions: `#EA3323`
- Dividers: 1px solid `#EDEDED`; placeholder text: `#999999`

## 10. Voice & Tone

momo's copy is **direct, warm, and deal-forward**. Every word either confirms a saving or removes friction from the purchase decision. The register is colloquial Mandarin Chinese with light excitement — not corporate, never cold.

**3 adjectives:** Energetic, trustworthy, deal-focused.

| Do | Don't |
|----|-------|
| Lead with the saving: "限時下殺" (time-limited flash sale) | Use vague superlatives without anchoring to a number |
| Use short active sentences: "立刻搶購" (grab it now) | Write multi-clause sentences that bury the price |
| Address the user directly: "你找到更多更多" | Use passive or impersonal framing |
| Emphasize concrete logistics: "24H快速到貨" | Promise without specifying the timeframe |
| Blend trust signals naturally: "十天猶豫期" | Relegate return policies to fine-print footnotes |

**Voice samples (illustrative):**
- *Illustrative:* "讓你找到更多更多 — 數十萬件商品，24小時快速到貨，讓購物更輕鬆。"
- *Illustrative:* "今日限時下殺！錯過等一年，快搶！"
- *Illustrative:* "新會員首購禮金，馬上領，立刻用，不花冤枉錢。"

## 11. Brand Narrative

momo購物網 was established by Fubon Media Technology Co., Ltd. (富邦媒體科技股份有限公司), a joint venture under Fubon Financial Holdings and Taiwan Mobile (台灣大哥大). What began as a television shopping channel evolved into Taiwan's largest integrated shopping platform, extending the immediacy and excitement of live TV commerce into an always-on digital experience. The company's Apple App ID (861796017) and the long-running tagline "讓你找到更多更多" — "helping you find more and more" — encapsulate the brand's core promise: an endlessly expanding catalogue that surfaces exactly what each shopper needs.

The platform distinguishes itself through operational excellence: 24-hour rapid delivery, convenience-store pickup, a 10-day no-questions return window, and 16 payment methods that meet users wherever they bank. This operational depth is the bedrock of the brand's trust — not aesthetic polish, but a demonstrated commitment to removing every barrier between desire and delivery. With over 730,000 App Store reviews averaging 4.9 stars, momo's reputation rests on the reliability of that promise.

Today momo positions itself beyond pure retail, hosting flagship brand stores (Apple, Dyson, MUJI, Estée Lauder), travel and dining e-tickets, insurance products, and a points-based affiliate program. The brand's visual identity — that unmistakable magenta-pink — functions as a permanent signal of value in motion, readable at a glance across television, mobile, and web surfaces.

## 12. Principles

1. **Value Visibility First.** Price, discount depth, and delivery speed are the headline. No UI element should compete with or obscure these signals. *UI implication:* Price numerals use a dedicated typeface (Oxygen/Century Gothic), appear in `#DD2222` for discounts, and occupy the most prominent position on every product tile.

2. **Friction Removal at Every Step.** From 16 payment methods to convenience-store pickup, the brand obsesses over eliminating barriers. *UI implication:* Search must offer instant suggestions, filter chips must be one-tap, and cart actions must never require a page reload on mobile.

3. **Warm Urgency Without Panic.** Countdown timers and "flash sale" badges create excitement without manufactured anxiety. The brand's magenta is energetic, not alarming. *UI implication:* Use `#D62872` for urgency signals, never pure red; reserve `#DD2222` only for confirmed discounts and destructive confirmations.

4. **Trust Through Transparency.** Anti-fraud notices, return policy emphasis, and clear logistics specs reflect a brand that treats trust as a product feature. *UI implication:* Trust badges and policy links must appear at checkout-adjacent surfaces, styled with equal visual weight to promotional copy.

5. **Consistent Brand Recognition Across Surfaces.** The brand spans TV, web, iOS, and Android. The magenta header and pink accent must be identical across all surfaces. *UI implication:* `#D62872` is non-negotiable — no tints, no gradients on the primary header; gradient use is limited to decorative accents (rank badges, trending cards).

## 13. Personas

*Illustrative Busy Mom (Lin, 38, Taichung):* She shops on her phone between school pickups. She filters by fastest delivery and uses the convenience-store pickup for anything she needs to control the schedule of. She trusts momo because the 10-day return window means she can buy without overthinking. Her price sensitivity is moderate — she watches flash-sales but always checks reviews.

*Illustrative College Student (Jerry, 21, Taipei):* He discovered momo through an app-exclusive discount alert. He primarily buys electronics, headphones, and K-beauty skincare. He uses the image-search feature and relies on the official brand flagship stores (Apple, Dyson) as trust signals. He pays via Apple Pay.

*Illustrative Home Manager (Mrs. Chen, 55, Kaohsiung):* She came from the TV shopping channel and feels comfortable with momo's familiar visual rhythm — lots of products, clear prices, reassuring customer service. She calls the hotline when uncertain, values the anti-fraud messaging, and prefers credit card installment payments.

*Illustrative Deal Seeker (Tom, 29, Hsinchu):* He opens the momo app daily to check the 5-fold group-buy and daily flash sale sections. He is motivated entirely by price and delivery speed. He has accumulated significant loyalty points and routes almost all household purchases through momo.

## 14. States

- **Empty (No results):** Full-page illustration with brand-pink accent, short encouragement copy ("找不到？試試其他關鍵字"), and a secondary suggestion chip row in `#F2F2F2` pills
- **Loading (Skeleton):** `border-radius: 4px` grey `#EDEDED` shimmer blocks replacing product thumbnails and title text; column layout preserved to prevent reflow
- **Error (Network failure):** Centered error message with `#D62872` home-return button (`height 38px`, `border-radius 4px`), redirecting to `Main.jsp`
- **Error (Destructive confirm):** Alert dialog with `#EDEDED` divider, cancel left, confirm-delete right in `#DD2726` (red) — `font: 17px Helvetica`
- **Success (Order placed):** Toast or overlay with `#D62872` accent color, brief confirmation copy, auto-dismisses after ~2s
- **Skeleton (Browse history panel):** Side drawer (`width 137px`) shows `#FAFAFA` card placeholders; spinner absent; position is preserved
- **Disabled (OOS product):** CTA button muted to `#B3B3B3` fill with `#FFFFFF` text; price label remains visible; "補貨通知" (restock alert) secondary link in `#027BFF`
- **Hover (Desktop link/card):** Text and borders shift to `#D62872` via `.hover:text-[#D62872]` and `.group-hover:bg-[#D62872]` utility classes; transition implicit (no explicit duration in source)

## 15. Motion & Easing

- **Short interactions (badge, tooltip appear):** ~150ms
- **Panel / overlay transitions (login modal, browsing history drawer):** `transition: opacity .3s, background-color .3s` — confirmed from `browsing-history` CSS
- **Search overlay:** `height: 0` → `auto` (no explicit duration; instant DOM swap via `.show` class toggle)
- **Easing:** Default browser easing (no custom cubic-bezier defined in inspected source); overlays use linear or ease for opacity fades
- **Rules:** Motion is functional, not decorative. No parallax, no scroll animations. Transitions serve only to soften state changes (modal appear/disappear, drawer open/close). Product grid items do not animate on scroll.
