---
id: meituan
name: Meituan
country: CN
category: local-services
homepage: "https://www.meituan.com"
primary_color: "#FFC300"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=meituan.com&sz=128"
verified: "2026-05-19"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    brand: "#ffc300"
    brand-alt: "#ffd100"
    brand-pressed: "#f5b800"
    brand-tint: "#fff8e0"
    on-brand: "#222222"
    price: "#ff4b10"
    price-alt: "#ff5722"
    coupon: "#ff2d55"
    rating-gold: "#ffb000"
    page-ground: "#f5f5f5"
    card: "#ffffff"
    text-secondary: "#888888"
    text-hint: "#bbbbbb"
    border: "#eeeeee"
    divider: "#f2f2f2"
    success: "#52c41a"
    error: "#ff4d4f"
    warning: "#faad14"
  typography:
    family: { sans: "PingFang SC", mono: "PingFang SC" }
    header:   { size: 18, weight: 600, use: "Section/page titles, merchant detail name" }
    merchant: { size: 16, weight: 500, use: "Merchant name on card, one-line ellipsized" }
    price:    { size: 18, weight: 700, use: "Price, the loud number" }
    body:     { size: 14, weight: 400, use: "Body, category, deal description" }
    meta:     { size: 13, weight: 400, use: "Distance, delivery time, rating count" }
    badge:    { size: 11, weight: 500, use: "Deal tags, coupon chips" }
  spacing: { xs: 2, sm: 6, md: 8, base: 10, lg: 16, xl: 20, xxl: 32, section: 48 }
  rounded: { sm: 4, md: 8, lg: 20, full: 9999 }
  shadow:
    none: "none"
  components:
    button-primary: { type: button, bg: "#ffc300", fg: "#222222", radius: 8, padding: "10px 20px", font: "15px/500", use: "Primary CTA Order/Pay, dark text on yellow" }
    button-secondary: { type: button, bg: "#ffffff", fg: "#222222", radius: 8, padding: "10px 20px", font: "15px/500", use: "Ghost/outline secondary action" }
    coupon-chip: { type: badge, bg: "#fff8e0", fg: "#ff4b10", radius: 4, padding: "2px 8px", font: "12px/500", use: "Discount/coupon flag" }
    search-input: { type: input, bg: "#ffffff", fg: "#222222", radius: 20, padding: "8px 16px", font: "14px/400", use: "Top pill search bar" }
    merchant-card: { type: card, bg: "#ffffff", radius: 8, padding: "10px", use: "Merchant feed card unit" }
    deal-tag: { type: badge, bg: "#ff4b10", fg: "#ffffff", radius: 4, padding: "2px 6px", font: "11px/500", use: "Deal/activity flag" }
  components_harvested: true
---

# Design System Inspiration of Meituan

## 1. Visual Theme & Atmosphere

Meituan (美团) is China's everything-local super-app — food delivery, restaurant reviews, hotel and travel booking, group-buying deals, grocery, bike-share, and dozens of other on-demand services — and its design carries the warmth and energy of a brand whose whole job is to *get you something good, now*. The signature is an unmistakable, optimistic **Meituan yellow** (`#FFC300`) — the color of its delivery riders' helmets and jackets, its app icon, its kangaroo mascot, and its primary call-to-action. This is a happy, appetite-stimulating yellow (close to a warm gold, RGB `255, 195, 0`), chosen because Meituan's core is food, and yellow is the color of hunger satisfied. It sits on clean white surfaces with near-black text, and it is *loud on purpose*: where a fintech whispers trust, Meituan shouts convenience and value — bright deal badges, prominent prices, big tappable CTAs.

The brand's emotional register is **friendly utility at scale**: the kangaroo mascot (the袋鼠, "Daiwang" energy — a pouch-carrying courier) embodies the promise of fast, caring delivery, and the slogan **吃得更好，生活更好** ("Eat better, live better") frames the whole product as quality-of-life improvement, not just transactions. The interface is dense — a super-app must surface dozens of service entry points (icon grids), countless merchant cards, deals, ratings, and prices — but the bright yellow accents, rounded friendly shapes, and clear pricing keep it feeling helpful rather than overwhelming. This is a mobile-first, thumb-driven, value-conscious design language built for hundreds of millions of daily local-life transactions.

Typography is system-font-first with full Simplified-Chinese coverage (`PingFang SC`, `Source Han Sans` / `思源黑体`, `Microsoft YaHei`), no custom brand typeface. Prices and deal numbers are set prominent and often in a warm red/orange for urgency, ratings in gold stars, and CTAs in the brand yellow with dark text. The visual loudness comes from color and price emphasis, not from heavy type.

**Key Characteristics:**
- **Meituan yellow `#FFC300`** — optimistic, appetite-stimulating warm gold; rider gear, app icon, mascot, primary CTA
- The **kangaroo (袋鼠) mascot** — embodies fast, caring, pouch-carrying delivery
- Loud-on-purpose value/convenience design: bright deal badges, prominent prices, big tappable CTAs
- Super-app service-entry icon grids — dozens of local-life services surfaced at once
- Merchant cards with cover, name, rating (gold stars), price, distance, delivery time, deal tags
- Clean white surfaces + near-black text; the yellow + price-red carry the energy
- Slogan **吃得更好，生活更好** ("Eat better, live better") — quality-of-life framing
- Mobile-first, thumb-driven, dense-but-helpful; rounded friendly shapes, generous radii
- System-font-first + Simplified-Chinese fallbacks (`PingFang SC`, `思源黑体`); loudness from color, not type
- Price/urgency red-orange as the secondary energy color beside the brand yellow

## 2. Color Palette & Roles

Meituan does not expose a public CSS token layer; the values below combine the brand yellow with observable live-site usage. Non-yellow neutral hexes are best-fit approximations and flagged accordingly.

### Brand
- **Meituan Yellow** (`#FFC300`): The brand. App icon, rider gear, mascot, primary CTA fill, active states. A warm appetite-yellow/gold. RGB `rgb(255, 195, 0)`. (An alternate `#FFD100` is also widely cited for Meituan's yellow; treat `#FFC300` as primary and `#FFD100` as a close-variant.)
- **Yellow Pressed** (≈`#F5B800`, approximate): Darker yellow for primary-button hover/press.
- **Yellow Tint** (≈`#FFF8E0`, approximate): Light yellow wash for selected backgrounds, deal-section bands.
- **CTA Text on Yellow** (≈`#222222`, near-black): Yellow CTAs use dark text, not white — yellow + white fails contrast.

### Energy / Price
- **Price Red-Orange** (≈`#FF4B10` / `#FF5722`, approximate): Prices, urgency, "限时" (limited-time) badges, discount emphasis. The secondary energy color.
- **Coupon Red** (≈`#FF2D55`, approximate): Coupon/voucher chips, hard-discount flags.
- **Rating Gold** (≈`#FFB000`, approximate): Star ratings (a gold close to the brand yellow).

### Surface
- **Page Ground** (≈`#F5F5F5`, approximate): App page background behind cards/sections.
- **Card White** (`#FFFFFF`): Merchant cards, panels, modals.

### Text (near-black + opacity)
- **Primary Text** (≈`#222222` / `#000000E0`, approximate): Merchant names, primary body.
- **Secondary Text** (≈`#888888` / `#00000066`, approximate): Categories, distance, metadata, descriptions.
- **Tertiary / Hint** (≈`#BBBBBB`, approximate): Placeholders, disabled labels.

### Border & Divider
- **Hairline Border** (≈`#EEEEEE`, approximate): Card edges, input borders.
- **Divider** (≈`#F2F2F2`, approximate): Section/list separators.

### State
- **Success** (≈`#52C41A`, approximate): Order confirmations, "已送达" (delivered).
- **Error** (≈`#FF4D4F`, approximate): Form errors, failed payment.
- **Warning** (≈`#FAAD14`, approximate): Cautions (sits close to the brand yellow, used carefully).

> Role note: Yellow is the brand and the primary action; red-orange is price/urgency/value. The two warm colors do different jobs and shouldn't be confused — yellow says "tap here / it's Meituan", red-orange says "great price / act now". Because the surfaces are otherwise white-and-gray, both warm colors carry strong signal.

## 3. Typography Rules

### Font Stack
```
-apple-system, BlinkMacSystemFont, "PingFang SC", "Source Han Sans SC", "思源黑体", "Microsoft YaHei", "微软雅黑", "Helvetica Neue", Arial, sans-serif
```

System UI fonts lead with comprehensive Simplified-Chinese fallbacks (`PingFang SC` on Apple, `Source Han Sans SC` / `思源黑体` and `Microsoft YaHei` cross-platform). No custom brand typeface — the energy comes from the yellow + price emphasis, so the type stays native and dense-friendly.

### Weights
- **Medium (500)**: Merchant names, CTA labels, active tabs, section heads.
- **Regular (400)**: Body, categories, metadata, descriptions.
- **Semibold (600) / Bold (700)**: Prices, deal numbers, key emphasis — Meituan *does* go heavy on numbers, because price is the message.

### Size Scale (observed)
| Role | Size | Weight | Notes |
|---|---|---|---|
| Page/section header | `17–20px` | 600 | Section titles, merchant detail name |
| Merchant name (card) | `15–16px` | 500 | One-line, ellipsized |
| Price | `16–20px` | 600–700 | Often red-orange; the loud number |
| Body / category | `13–14px` | 400 | Cuisine type, deal description |
| Metadata | `12–13px` | 400 | Distance, delivery time, rating count |
| Badge / tag | `10–12px` | 400–500 | Deal tags, "限时", coupon chips |

### Conventions
- **Price is heavy and prominent** — often weight 600–700 in red-orange, frequently with the currency symbol smaller than the figure. Price is the headline of a merchant card.
- **Numbers everywhere** — ratings, distance, delivery time, deal counts, prices — all first-class metadata.
- **Merchant names clamp to one line**; categories and metadata stack below in gray.
- **CJK-first** — fallback stack chosen so Simplified Chinese renders crisply in dense card layouts.

## 4. Component Stylings

### Buttons

**Primary CTA (Order / 立即下单, 去支付)**
- Background: `#FFC300`
- Text: ≈`#222222` (dark text on yellow — never white)
- Border: none
- Radius: 8px (or pill 20px for compact action chips)
- Padding: 10px 20px
- Font: 15px / 500
- Hover/press: background ≈`#F5B800`
- Use: Primary action — Order now, Pay, Buy deal. Yellow with dark text.

**Secondary (ghost / outline)**
- Background: `#FFFFFF`
- Text: ≈`#222222`
- Border: 1px solid ≈`#EEEEEE` (or 1px yellow for emphasis)
- Radius: 8px
- Padding: 10px 20px
- Font: 15px / 500
- Use: Secondary action beside the primary CTA.

**Discount / Coupon Chip**
- Background: ≈`#FFF8E0` (yellow tint) or red-tint
- Text: ≈`#FF4B10` (price red-orange)
- Border: 1px dashed/solid red-orange
- Radius: 4px
- Padding: 2px 8px
- Font: 12px / 500
- Use: "满30减10", "限时5折" coupon/deal flags.

### Inputs

**Search / Default**
- Background: `#FFFFFF` (or filled ≈`#F5F5F5`)
- Text: ≈`#222222`
- Border: 1px solid ≈`#EEEEEE` (or borderless filled)
- Radius: 20px (pill search) / 8px (form field)
- Padding: 8px 16px
- Font: 14px / 400
- Use: Top search bar (pill), address/form fields.

### Cards

**Merchant Card (feed)**
- Background: `#FFFFFF`
- Border: none (separation by gray ground + gap)
- Radius: 8px
- Padding: 10–12px
- Shadow: none default; subtle lift on hover (web)
- Layout: thumbnail (square cover, left or top) + merchant name (15px/500) + gold star rating + category/distance/delivery-time (12px gray) + price-from (red-orange) + deal tags
- Use: The atomic unit of a service feed (restaurants, hotels, deals).

**Service-Entry Tile (icon grid)**
- Background: `#FFFFFF`
- Radius: 8px
- Layout: colorful service icon (40–48px) + label (12px/400) below
- Use: The super-app home grid — 外卖/美食/酒店/电影/休闲玩乐… dozens of service entry points.

### Tags / Badges

**Deal / Activity Tag**
- Background: red-orange (≈`#FF4B10`) or yellow (`#FFC300`)
- Text: `#FFFFFF` (on red) / `#222222` (on yellow)
- Radius: 4px
- Padding: 2px 6px
- Font: 10–12px / 500
- Use: "新店", "限时", "团购", "免配送费" merchant/deal flags.

**Rating**
- Gold stars (≈`#FFB000`) + numeric score (red-orange or dark) + review count (gray)
- Use: Merchant trust signal — first-class on every card.

### Navigation

- Top bar: yellow/dark logo + kangaroo, city/location selector, pill search, login/cart right
- Service nav: icon-grid home + horizontal category tabs
- Active tab: yellow text/underline or yellow pill background
- Mobile: bottom tab bar (首页/订单/我的…), brand-yellow active state

## 5. Layout Principles

### Spacing
| Use | Value |
|---|---|
| Card gap | `8–10px` |
| Card padding | `10–12px` |
| Icon-grid item | `~25% width` (4-per-row) |
| Chip padding | `2px 8px` |
| Page horizontal margin | `12px` |
| Section vertical | `12–16px` |

### Grid
- Home: service-entry icon grid (4–5 per row) + banner carousel + merchant/deal feed
- Service feed: single-column merchant cards (mobile) or 2–3 column (web)
- Merchant detail: cover + info + menu/deals list + reviews

### Density
Meituan is **high-density utility**. A local-life super-app must surface a huge breadth of services and merchants — icon grids, banners, merchant cards, deals, ratings, prices — all on one scroll. Density is the feature: more options found faster. The bright yellow accents, clear price hierarchy, and rounded cards keep the density navigable rather than chaotic.

## 6. Depth & Elevation

Meituan is **mostly flat** with card-on-ground separation; depth appears on floating UI and sticky bars.

| Level | Value (approx) | Use |
|---|---|---|
| Flat | none | Default — merchant cards, tiles, inputs |
| Card | `0 1px 4px rgba(0,0,0,0.04)` | Subtle card lift (web) |
| Sticky bar | `0 -2px 8px rgba(0,0,0,0.06)` | Bottom order/checkout bar, sticky cart |
| Floating | `0 4px 16px rgba(0,0,0,0.1)` | Dropdowns, address picker, modals |

### Z-Index
- Sticky top bar + bottom action bar above content
- Floating pickers/dropdowns above page
- Modal + mask above pickers
- Toast at highest level

### Animation
- Add-to-cart fly-to-cart arc (the signature delivery-app micro-interaction)
- Banner carousel auto-advance
- Bottom cart/checkout bar slide
- Friendly, brisk easing — energetic but not bouncy

## 7. Do's and Don'ts

- **DO** use Meituan yellow `#FFC300` for the brand and primary action, always with dark text (never white on yellow).
- **DON'T** put white text on yellow — it fails contrast and looks off-brand. Dark `#222` text on yellow is correct.
- **DO** use price red-orange (≈`#FF4B10`) for prices, urgency, and deal emphasis — the secondary energy color.
- **DON'T** confuse the two warm colors: yellow = brand/action, red-orange = price/value. Each has its job.
- **DO** make price prominent and heavy (weight 600–700) — it's the headline of a merchant card.
- **DON'T** bury the price in body weight; a value-conscious user scans for it first.
- **DO** embrace density — icon grids, packed merchant feeds, ratings and deals on every card. It's a super-app feature.
- **DON'T** strip the feed to "minimal" — that removes the breadth and value-comparison that's the whole point.
- **DO** surface trust signals (gold star rating + review count + distance + delivery time) on every merchant card.
- **DON'T** drop ratings/metadata for cleanliness — they're how users choose.
- **DO** keep shapes rounded and friendly (8px cards, pill search), lead the font stack with `PingFang SC` / `思源黑体`.
- **DON'T** go sharp-corporate or premium-dark — the warmth and approachability are the brand.

## 8. Responsive Behavior

| Width | Behavior |
|---|---|
| Desktop `>1280px` | Multi-column merchant grid, wide service nav, banner carousel |
| Laptop `1024–1280px` | 2–3 column merchant grid |
| Tablet `768–1024px` | 2-column merchant grid, condensed nav |
| Mobile `<768px` | Single-column merchant feed, icon-grid home, bottom tab + sticky cart/order bar |

### Touch & Mobile
- Mobile-first: thumb-driven, bottom tab bar, sticky bottom order/checkout bar
- City/location selector prominent (local services are geo-scoped)
- Min 44px tap targets; big primary CTAs
- Address pickers, quantity steppers, fly-to-cart designed for one-handed use

### Media
- Merchant covers / food photography: square or 4:3, `object-fit: cover`, lazy-loaded
- Service icons: colorful, distinct per service
- Banners: auto-advancing promotional carousel

## 9. Agent Prompt Guide

### Quick Color Reference
- Brand / primary CTA: `#FFC300` with dark `#222` text (pressed ≈`#F5B800`, tint ≈`#FFF8E0`)
- Price / urgency / deals: red-orange ≈`#FF4B10`; coupon red ≈`#FF2D55`; rating gold ≈`#FFB000`
- Page ground: ≈`#F5F5F5`; card: `#FFFFFF`
- Primary text: ≈`#222222`; secondary: ≈`#888888`; hint: ≈`#BBBBBB`; border: ≈`#EEEEEE`

### Example Component Prompts
- "Create a Meituan merchant card: white bg, 8px radius, no border, 10px padding. Square cover left, then merchant name 15px weight 500 `#222` (1-line clamp), gold star rating + score + review count, then category/distance/delivery-time 12px `#888`, then price-from in red-orange `#FF4B10` weight 600, and a deal tag chip ('免配送费' / '满30减10'). Sits on `#F5F5F5` ground with 8px gap."
- "Build a Meituan primary CTA: bg `#FFC300`, DARK `#222` text (never white), 8px radius, padding `10px 20px`, 15px weight 500. Hover ≈`#F5B800`. Label like '立即下单' / '去支付'."
- "Design a Meituan service-entry icon grid: 4-per-row tiles, each a colorful 44px service icon + 12px label below (外卖/美食/酒店/电影). White ground, generous tap targets."
- "Create a Meituan coupon chip: yellow-tint `#FFF8E0` bg, red-orange `#FF4B10` text, dashed red-orange border, 4px radius, 12px weight 500, text like '限时5折'."

### Iteration Guide
1. **Yellow `#FFC300` with dark text** for brand + primary action. Never white on yellow.
2. **Red-orange is price/urgency**; keep it distinct from the brand yellow. Two warm colors, two jobs.
3. **Price is the headline** — prominent, heavy (600–700), often red-orange. Value-conscious users scan for it.
4. **Embrace density** — icon grids, packed feeds, ratings/deals everywhere. It's a super-app feature, not clutter.
5. **Trust signals on every card** — gold stars + score + reviews + distance + delivery time.
6. **Rounded friendly shapes** (8px cards, pill search), `PingFang SC` / `思源黑体` fallbacks.
7. **Mobile-first, thumb-driven** — bottom tab, sticky order bar, fly-to-cart, one-handed steppers.
8. **Mostly flat**; subtle card lift, reserve shadow for sticky bars and floating pickers.

---

## 10. Voice & Tone

Meituan's voice is **warm, practical, and value-forward** — the voice of a helpful neighbor who knows the best cheap eats and the fastest delivery. The register in Simplified Chinese is casual `你`, friendly and direct, oriented entirely around *what you get and how soon*: the food, the deal, the delivery time. The brand's framing slogan, **吃得更好，生活更好** ("Eat better, live better"), sets the tone — Meituan isn't selling transactions, it's selling small daily upgrades to quality of life. Copy is action-oriented and benefit-led: deals are stated plainly (满减, 折扣, 免配送费), delivery promises are concrete (预计30分钟送达), and the kangaroo mascot's caring-courier energy runs through it all. The voice is enthusiastic about value without being a hard-sell carnival barker — it's a friend pointing you to the good stuff.

| Context | Tone |
|---|---|
| CTAs | Direct, benefit-led verb. `立即下单` (Order now), `去支付` (Pay), `抢购` (Grab the deal). Casual `你`. |
| Deals / pricing | Concrete and plain. `满30减10`, `限时5折`, `免配送费`. The number is the message. |
| Delivery promise | Specific and reassuring. `预计30分钟送达` (Est. delivery in 30 min). Concrete builds trust. |
| Empty states | Helpful redirect. `附近还没有商家，换个地址试试` (No merchants nearby — try another address). |
| Order status | Clear, real-time, caring. `骑手已接单` (Rider accepted) → `配送中` (On the way) → `已送达` (Delivered). |
| Error messages | Friendly, blameless, actionable. State the issue + the fix. |
| Reviews / ratings | Trust-forward — surface real ratings prominently; the community's voice is the credibility. |

**Forbidden phrases.** Hard-sell carnival hype that erodes trust — empty `史上最低！` (lowest ever!) without substance, fake-scarcity FOMO. The formal `您` in casual ordering contexts (reserve for legal/payment). Cold humorless system copy on a warm consumer service. Vague delivery promises ("尽快送达" / "soon") — Meituan's trust is built on *concrete* time estimates, so vagueness is off-brand. White text on the brand yellow (a contrast/brand error, not just a copy one).

**Voice samples.**
- `吃得更好，生活更好` — the framing slogan ("Eat better, live better"), the clearest brand-voice statement. <!-- cited: appears in meituan.com content via WebFetch 2026-05-19 -->
- `立即下单` / `去支付` — order / pay CTAs, direct benefit-led verbs. <!-- illustrative: standard Meituan ordering CTA register; not quoted as a specific live string -->
- `预计30分钟送达` — concrete delivery-promise pattern. <!-- illustrative: reflects Meituan's concrete-estimate convention; not verified verbatim -->
- `骑手已接单` / `配送中` / `已送达` — real-time order-status pattern. <!-- illustrative: standard delivery status register -->

## 11. Brand Narrative

Meituan (美团 — literally "beautiful group", from its group-buying origin) was founded in **2010** in Beijing by **Wang Xing (王兴)** as a group-buying (团购) site — a Groupon-style deals platform amid China's "百团大战" ("war of a thousand group-buy sites"). Meituan survived and won that brutal shakeout, then expanded relentlessly outward from deals into the full breadth of local life: it acquired and integrated **Dianping (大众点评)**, China's leading restaurant-review platform, in 2015, and built out **food delivery (美团外卖)** — the business that came to define it — alongside hotel/travel booking, movie tickets, bike-share, grocery, and more. The throughline from group-buying to today is **value plus convenience for everyday local life**: Meituan's whole identity is making the good things nearby cheaper and faster to get. <!-- source: widely documented public history (Wang Xing / Meituan 2010 / 团购 origin / Dianping 2015 merger / 美团外卖); not re-verified against a primary Meituan source this pass -->

The design follows from that mission. The optimistic appetite-yellow, the kangaroo courier mascot, the prominent prices and deal badges, the concrete delivery promises, the dense service-entry grids — all of it serves a value-conscious user who wants the best nearby option, found fast, delivered soon. Meituan's slogan **吃得更好，生活更好** ("Eat better, live better") reframes the super-app from a utility into a quality-of-life partner, and the warm, friendly, slightly loud design language matches that promise: this is convenience with a smile, not a cold logistics machine.

What Meituan refuses: the cold corporate sterility of a pure logistics utility, premium-minimal restraint that would hide prices and deals, vague delivery promises, and any design that makes the breadth of services hard to scan. What it embraces: an optimistic appetite-yellow, the caring-courier kangaroo, concrete value and delivery promises, dense-but-navigable service breadth, and real ratings as the trust currency of local discovery.

## 12. Principles

1. **Value and convenience, made loud.** Meituan's user wants the best nearby thing, cheap and fast. *UI implication:* Make price prominent and heavy (weight 600–700, red-orange), surface deals and delivery estimates clearly. Don't bury the value the user came for.

2. **Yellow is the brand; red-orange is the deal.** Two warm colors, two jobs. *UI implication:* Yellow `#FFC300` (with dark text) = brand + primary action. Red-orange = price + urgency + discount. Never blur them; never put white text on the yellow.

3. **Density is breadth, breadth is the product.** A super-app's value is having everything nearby in one place. *UI implication:* Embrace icon grids, packed merchant feeds, deal sections. Keep it navigable with bright accents, clear price hierarchy, and rounded cards — but don't "minimize" away the breadth.

4. **Concrete promises build trust.** "Est. 30 min" beats "soon"; a real rating beats a marketing claim. *UI implication:* Always give specific delivery estimates, real-time order status, and prominent gold-star ratings with review counts. Vagueness is off-brand.

5. **Warmth, not logistics-cold.** The kangaroo, the appetite-yellow, the friendly copy make a fast-moving transactional product feel caring. *UI implication:* Rounded friendly shapes, warm color, casual `你` copy, an order-tracking flow that reassures. Never a sterile logistics dashboard.

6. **Mobile-first, thumb-driven, one-handed.** Local life happens on the phone, on the go. *UI implication:* Bottom tab + sticky order/checkout bar, big CTAs, fly-to-cart, location-aware everything. Design for a hungry user with one free hand.

## 13. Personas

*Personas are fictional archetypes informed by publicly described Meituan user segments (everyday urban consumers, value-seekers, merchants), not individual people.*

**张敏 (Zhang Min), 28, Beijing.** Office worker. Orders Meituan 外卖 lunch most workdays — scans merchant cards for rating + price + delivery time, hunts the 满减 deals and 免配送费 flags, and watches the order-status tracker (骑手已接单 → 配送中) like a clock. Trusts the gold-star ratings far more than any banner. Chose Meituan for the breadth: food, then movie tickets, then a hotel for the weekend, all in one app.

**李强 (Li Qiang), 35, Chengdu.** Restaurant owner. Lives on the Meituan/Dianping merchant side — manages his listing, deals, and delivery orders, obsesses over his rating and review count because they drive every new customer. Knows the bright yellow CTA and concrete delivery promise are what convert a browser into an order, and prices his 团购 deals to land in the deal feed.

**王芳 (Wang Fang), 42, Wuhan.** Value-conscious family shopper. Uses Meituan for grocery (美团买菜), group-buy deals, and the occasional hotel. Compares prices across merchants reflexively, never orders without checking the deal badges, and appreciates that the dense feed lets her find the best value fast. The warm friendly design makes a money-saving app feel pleasant rather than stressful.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no merchants nearby)** | White canvas, friendly line (`附近还没有商家，换个地址试试`), prominent address-change CTA. Location-aware and helpful. |
| **Empty (search no results)** | One gray line + suggested categories/nearby alternatives. |
| **Empty (cart)** | Light line + a "go browse" CTA in yellow. |
| **Loading (feed)** | Card-grid skeleton — gray cover + line blocks matching merchant cards, gentle shimmer. |
| **Loading (order placing)** | Inline spinner + "下单中…" on a disabled yellow CTA. |
| **Error (payment failed)** | Clear blameless message + retry; never hides — money failures are explicit. ≈`#FF4D4F`. |
| **Error (out of range / merchant closed)** | Friendly factual line + alternatives (other merchants, change address). |
| **Success (order placed)** | Confirmation + order number + the real-time tracker kicks in (骑手已接单). Reassuring, concrete. |
| **Order tracking (signature state)** | Live status timeline: 待接单 → 骑手已接单 → 取餐中 → 配送中 → 已送达, with map + ETA. The defining post-purchase experience. |
| **Skeleton** | Gray cover + line blocks at exact dimensions, gentle shimmer; never on price (placeholder dash). |
| **Disabled** | Reduced opacity + gray fill together; disabled control keeps its rounded shape. |

## 15. Motion & Easing

Meituan's motion is **brisk, friendly, and reassuring** — energetic enough to feel lively (it's a fast service), calm enough at the money/tracking moments to build trust. The signature flourish is the add-to-cart fly arc.

**Durations:**

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Tab/toggle commits, quantity steppers |
| `motion-fast` | 200ms | Hover, chip select, button feedback |
| `motion-standard` | 300ms | Add-to-cart fly, dropdowns, bottom-bar slide |
| `motion-slow` | 450ms | Banner carousel transition, order-confirm reveal |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | Default two-way transitions |
| `ease-enter` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Sheets, pickers, bottom bar arriving |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-fly` | `cubic-bezier(0.45, 0, 0.2, 1.2)` | **Reserved.** The add-to-cart fly arc — a small kinetic flourish only there. |

**Spring stance.** Overshoot is **reserved for the add-to-cart fly** — the small arc of an item flying into the cart with the count badge bumping is Meituan's one playful kinetic moment, and it's emotionally apt (you just grabbed something good). Order-tracking and payment moments are calm and steady — confidence, not bounce. Chrome transitions are brisk and standard.

**Signature motions.**
1. **Add-to-cart fly.** Tapping "add" sends a small image/dot arcing from the item to the cart over `motion-standard / ease-fly`; the cart count badge bumps. The signature delivery-app micro-interaction.
2. **Order-status progression.** The tracker steps advance with a calm fill/checkmark over `motion-standard / ease-standard`; the map ETA updates smoothly. Reassurance, no bounce.
3. **Bottom action bar.** The sticky cart/checkout bar slides up over `motion-standard / ease-enter` when items are added; total updates inline.
4. **Banner carousel.** Auto-advances with a slow `ease-standard` slide; manual swipe respects momentum.
5. **Reduce motion.** Under `prefers-reduced-motion: reduce`, the fly-to-cart becomes an instant count bump, tracker steps update without animation, and carousels can be paused. Fully functional, no forced kinetics.

<!--
OmD v0.1 Sources — Meituan / 美团

Tier 1 (live): meituan.com via WebFetch 2026-05-19 — confirmed the yellow brand
color (delivery robots referenced as 小黄蜂 "little yellow bee"; rider gear/icon
yellow), the kangaroo mascot energy, a clean tech-forward local-services
aesthetic, mobile-first orientation (multiple app-download options), and the
slogan 吃得更好，生活更好 ("eat better, live better"). meituan.com is largely a
corporate site; the substantive product surface is the consumer app. No public
CSS token layer is exposed.

Tier 2 (brand color / facts): WebSearch 2026-05-19 — Meituan's brand yellow is
referenced as #FFC300 (RGB 255,195,0) as the primary shade; #FFD100 is also
widely cited as Meituan's yellow (close variant) — seekcolors.com/brand/meituan
hosts a Meituan palette page. This file treats #FFC300 as primary and #FFD100
as a close-variant per the batch brief. Founding history (Wang Xing 王兴 /
Meituan 2010 / 团购 group-buy origin / 百团大战 / Dianping 大众点评 merger 2015 /
美团外卖 food delivery) is widely documented public history.

⚠️ SOURCING CAVEAT: Only the brand yellow (#FFC300 / #FFD100 variant) is
verified. Price red-orange, coupon red, rating gold, and all neutral hexes in
§2/§4 are BEST-FIT APPROXIMATIONS of observed live-app usage and common
delivery-app palettes, flagged "approximate" inline. Do not present them to the
brand owner as verbatim Meituan tokens.

Voice samples marked illustrative are not quoted live strings (except the slogan,
cited from meituan.com). Personas (§13) are fictional archetypes. The kangaroo
is Meituan's mascot.
-->

---

**Verified:** 2026-05-19 (omd:add-reference — CN batch)
**Tier 1 sources:** meituan.com (live — yellow brand color + 小黄蜂 delivery-robot reference, kangaroo mascot, mobile-first local-services aesthetic, slogan 吃得更好，生活更好; corporate surface, no public token layer).
**Tier 2 sources:** WebSearch + seekcolors.com/brand/meituan (Meituan yellow `#FFC300` RGB 255,195,0 primary, `#FFD100` close-variant); widely documented history (Wang Xing 王兴, Meituan 2010 团购 origin, 百团大战, Dianping 大众点评 merger 2015, 美团外卖).
**Style ref:** `baemin`/`coupang` (delivery-app value+convenience tone) adapted to CN local-services register.
**Conflicts unresolved:** Brand yellow has two widely-cited values (`#FFC300` primary vs `#FFD100` variant) — `#FFC300` used as primary per brief. All other §2/§4 hexes flagged approximate (observed usage, no public token layer).
