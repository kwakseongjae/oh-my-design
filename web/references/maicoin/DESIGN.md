---
id: maicoin
name: MaiCoin / MAX
country: TW
category: fintech
homepage: "https://www.maicoin.com"
primary_color: "#ee5457"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=maicoin.com&sz=128"
verified: "2026-06-17"
added: "2026-06-17"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-17"
  note: "Two-surface brand. Consumer MaiCoin (coral): primary = register-CTA coral #ee5457, deeper red-orange family #ce4234/#dd4c4a, up-green #05bb85. Pro MAX (navy): primary = register-CTA navy #2e4692, deep navy #253158, accent blue #007aff, up-green #49a870, down-red #ec5b5c. Numeric font Iosevka on MAX. Shadowless flat chrome on both."
  colors:
    primary: "#ee5457"
    coral-deep: "#dd4c4a"
    coral-red: "#ce4234"
    navy: "#2e4692"
    navy-alt: "#2e4592"
    navy-deep: "#253158"
    accent-blue: "#007aff"
    up-consumer: "#05bb85"
    up-pro: "#49a870"
    down-pro: "#ec5b5c"
    ink: "#262626"
    ink-pure: "#000000"
    body: "#424242"
    muted: "#4d4d4d"
    muted-alt: "#4a4a4a"
    faint: "#9d9d9d"
    input-ink: "#2f333a"
    dark-card: "#272727"
    pill-grey: "#434343"
    canvas: "#ffffff"
    surface: "#f2f4fb"
    surface-alt: "#f4f5f9"
    hairline: "#eaeaea"
    border-navy: "#d5dbee"
    on-primary: "#ffffff"
  typography:
    family: { sans: "-apple-system, system-ui, Segoe UI, Roboto", mono: "Iosevka", display: "Roboto" }
    nav:        { size: 14, weight: 400, use: "Top nav items, system sans (交易, NFT, 集團)" }
    body:       { size: 16, weight: 400, lineHeight: 1.5, use: "Standard reading text, system sans" }
    cta:        { size: 16, weight: 600, use: "Consumer coral register CTA label" }
    cta-pro:    { size: 16, weight: 700, use: "MAX navy register CTA label, system sans" }
    input:      { size: 14, weight: 400, use: "MAX form input value + placeholder, system sans" }
    numeric:    { size: 14, weight: 700, use: "MAX price / order-book figures, Iosevka mono" }
    watermark:  { size: 123, weight: 700, use: "Decorative MaiCoin watermark, Roboto, 4% opacity" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 20, xl: 24, xxl: 48 }
  rounded: { xs: 2, sm: 8, md: 12, lg: 16, pill: 22, full: 9999 }
  shadow:
    none: "none"
  components:
    button-consumer-primary: { type: button, bg: "#ee5457", fg: "#ffffff", radius: "2px", height: "52px", font: "16px / 600", use: "Consumer register CTA (立即註冊) on MaiCoin" }
    button-pro-primary: { type: button, bg: "#2e4692", fg: "#ffffff", radius: "8px", height: "60px", padding: "10px 16px", font: "16px / 700", use: "MAX register CTA (立即註冊 / 註冊帳號)" }
    button-pro-buy: { type: button, bg: "#ffffff", fg: "#2e4592", radius: "22px", height: "32px", padding: "0px 12px", font: "16px / 400", use: "MAX secondary buy CTA pill (立即購買)" }
    button-accent: { type: button, bg: "#007aff", fg: "#ffffff", radius: "8px", height: "40px", use: "MAX promo accent action chip" }
    promo-card: { type: card, bg: "#272727", fg: "#ffffff", radius: "16px", padding: "20px", use: "MAX dark promo feature card (鏈上鎖倉, 交易機器人)" }
    stat-card: { type: card, bg: "#f2f4fb", radius: "12px", padding: "20px 0px", use: "MAX cool-blue stat strip card" }
    error-404-card: { type: card, bg: "#ffffff", fg: "#4a4a4a", border: "1px solid #eaeaea", radius: "6px", height: "88px", use: "MaiCoin 404 action card (查看幣價, 回首頁, 常見問題)" }
    input-underline: { type: input, fg: "#2f333a", font: "14px / 400", use: "MAX auth field, borderless underline style, placeholder 電子信箱 / 密碼" }
    nav-link: { type: tab, fg: "#262626", font: "14px / 400", use: "Top nav item", active: "coral #ee5457 text on hover/active" }
    badge-up: { type: badge, bg: "#49a870", fg: "#ffffff", radius: "8px", use: "MAX price-up / positive change indicator" }
    badge-down: { type: badge, bg: "#ec5b5c", fg: "#ffffff", radius: "8px", use: "MAX price-down / negative change indicator" }
    pill-control: { type: badge, bg: "#434343", radius: "20px", height: "40px", use: "MAX carousel control pill" }
  components_harvested: true
---

# Design System Inspiration of MaiCoin / MAX

## 1. Visual Theme & Atmosphere

MaiCoin is the largest crypto-exchange group in Taiwan, and its design splits cleanly across two surfaces with two distinct personalities. The consumer-facing buy/sell site (`www.maicoin.com`) is warm and approachable: a clean white (`#ffffff`) canvas, near-black ink text (`#262626`) rather than pure black, and a signature warm coral (`#ee5457`) reserved for the one action that matters — "立即註冊" (Register now). The coral sits in a wider red-orange family (`#ce4234`, `#dd4c4a`) used for learn-more links and banner accents, giving the consumer brand a friendly, retail-fintech temperature far from the cold blue of legacy finance. A positive-change green (`#05bb85`) signals price-up on the consumer side. Typography is set in the platform system stack (`-apple-system, system-ui, Segoe UI, Roboto`), optimized for dense Traditional-Chinese (zh-TW) legibility, with a giant decorative "MaiCoin" Roboto watermark at 123px / 4% opacity behind the hero.

The pro-trading surface, MAX Exchange (`max.maicoin.com`), swaps that warmth for a trustworthy institutional navy (`#2e4692`) — the color of the primary "註冊帳號 / 立即註冊" CTA — backed by a deeper navy (`#253158`) and a vivid accent blue (`#007aff`) for promotional chips. MAX is where the market data lives, so it introduces a true trading-color pair: an up-green (`#49a870`) and a down-red (`#ec5b5c`), each rendered as fill or text against the order book and ticker rows. MAX also brings a dedicated numeric typeface — **Iosevka** (and `Iosevka-Bold`) — for prices and order-book figures, so digits align in monospaced columns the way a professional terminal demands, while UI chrome stays on the `system-ui` sans stack.

Both surfaces are deliberately **shadowless and flat**: live inspection found `box-shadow: none` across navs, hero CTAs, promo cards, and stat strips on both sites. Depth comes from cool-blue tinted surfaces (`#f2f4fb`, `#f4f5f9`), thin `#eaeaea` and `#d5dbee` hairlines, and dark cards (`#272727`) rather than elevation. Geometry is mixed and intentional: the consumer coral CTA is nearly sharp (2px radius), MAX's primary CTA is a gentle 8px, its promo cards 16px, and its secondary buy button a 22px pill — a small radius vocabulary that reads as engineered, not decorative.

**Key Characteristics:**
- Two-surface brand: warm consumer coral (`#ee5457`) on MaiCoin, institutional navy (`#2e4692`) on MAX
- Coral reserved as the single consumer "action" color; navy the single pro "action" color
- True trading-color pair on MAX — up-green (`#49a870`), down-red (`#ec5b5c`)
- Iosevka monospace for MAX prices/order-book figures; system sans for all UI chrome
- Near-black ink (`#262626`) for text instead of pure black — warm, legible for zh-TW
- Shadowless flat depth: cool-blue surfaces (`#f2f4fb`/`#f4f5f9`) + `#eaeaea`/`#d5dbee` hairlines
- Mixed-but-restrained radius scale — 2px coral CTA, 8px navy CTA, 16px cards, 22px pill
- Decorative oversized Roboto "MaiCoin" watermark at 4% opacity behind the consumer hero

## 2. Color Palette & Roles

### Consumer Primary (MaiCoin, coral)
- **MaiCoin Coral** (`#ee5457`): Primary consumer brand and CTA color. The warm coral on the "立即註冊" register button and learn-more links — the system's single consumer "action" color.
- **Coral Deep** (`#dd4c4a`): Slightly deeper red-coral used on banner-accent fills.
- **Coral Red** (`#ce4234`): The deeper red-orange variant in the warm accent family (learn-more text, emphasis links).
- **Up Green (Consumer)** (`#05bb85`): Positive price-change / gain indicator on the consumer surface.

### Pro Primary (MAX, navy)
- **MAX Navy** (`#2e4692`): Primary pro brand and CTA background — the navy "註冊帳號 / 立即註冊" button on MAX. The single pro "action" color.
- **Navy Alt** (`#2e4592`): Near-identical navy used as the secondary buy-button text color.
- **Navy Deep** (`#253158`): Deeper navy for strong labels and dark UI text on MAX.
- **Accent Blue** (`#007aff`): Vivid blue for MAX promotional accent chips and highlights.

### Market Data (MAX)
- **Up Green (Pro)** (`#49a870`): Price-up / positive-change color in the order book and tickers.
- **Down Red (Pro)** (`#ec5b5c`): Price-down / negative-change color in the order book and tickers.

### Text Hierarchy
- **Ink** (`#262626`): Primary text, nav, strong labels (near-black, not pure black).
- **Ink Pure** (`#000000`): Occasional maximum-contrast headings.
- **Body** (`#424242`): Secondary body copy and header text.
- **Muted** (`#4d4d4d`): Tertiary text, captions.
- **Muted Alt** (`#4a4a4a`): Alternate muted grey (e.g. 404 action-card text).
- **Faint** (`#9d9d9d`): Lowest-emphasis labels, placeholders.
- **Input Ink** (`#2f333a`): MAX form-input value and placeholder color.

### Neutral & Surface
- **Pure White** (`#ffffff`): Page background, white cards, text on coral/navy/dark.
- **Surface** (`#f2f4fb`): Cool blue-grey tinted surface for MAX stat strips and segmented blocks.
- **Surface Alt** (`#f4f5f9`): Secondary cool-grey surface used on both sites.
- **Hairline** (`#eaeaea`): Thin borders, dividers, and card outlines — primary separation device.
- **Border Navy** (`#d5dbee`): Cool-blue tinted border on MAX containers.
- **Dark Card** (`#272727`): Near-black background for MAX dark promo feature cards.
- **Pill Grey** (`#434343`): Carousel control-pill background on MAX.

## 3. Typography Rules

### Font Family
- **Sans (UI)**: platform system stack — `-apple-system, "system-ui", "Segoe UI", Roboto, Helvetica`. Carries all nav, body, button, and label text on both surfaces, tuned for dense Traditional-Chinese (zh-TW) rendering.
- **Mono (numeric)**: `Iosevka` (with `Iosevka-Bold`) — used on MAX for prices, order-book figures, and tabular financial data so digits align in monospaced columns.
- **Display (decorative)**: `Roboto` — used only for the oversized "MaiCoin" watermark behind the consumer hero.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Nav Link | system sans | 14px | 400 | normal | Top navigation items (交易, NFT, 集團) |
| Body | system sans | 16px | 400 | 1.50 | Standard reading text |
| CTA (Consumer) | system sans | 16px | 600 | normal | Coral register CTA label (立即註冊) |
| CTA (Pro) | system sans | 16px | 700 | normal | MAX navy register CTA label |
| Input | system sans | 14px | 400 | normal | MAX form value + placeholder (電子信箱 / 密碼) |
| Numeric | Iosevka | 14px | 700 | normal | MAX price / order-book figures |
| Watermark | Roboto | 123px | 700 | normal | Decorative "MaiCoin" mark, 4% opacity |

### Principles
- **System sans for legibility, Iosevka for figures**: UI chrome rides the platform system stack (best zh-TW hinting); only numeric/price data switches to Iosevka so columns of digits align like a trading terminal.
- **Weight separates the two CTAs**: the consumer coral CTA sits at weight 600; MAX's navy CTA pushes to weight 700 — the pro surface reads slightly heavier and more emphatic.
- **Near-black ink, not pure black**: body and nav text are `#262626`, reserving pure `#000000` for rare maximum-contrast headings.
- **Decorative display is the exception**: the only non-system display type is the faint Roboto watermark — it is texture, not content.

## 4. Component Stylings

### Buttons

**Consumer Register CTA (Primary)**
- Background: `#ee5457`
- Text: `#ffffff`
- Radius: 2px
- Height: 52px
- Font: 16px weight 600
- Use: The single consumer primary action — "立即註冊" (Register now) on MaiCoin

**MAX Register CTA (Pro Primary)**
- Background: `#2e4692`
- Text: `#ffffff`
- Radius: 8px
- Padding: 10px 16px
- Height: 60px
- Font: 16px weight 700
- Use: MAX primary register/sign-up action ("立即註冊", "註冊帳號")

**MAX Buy Pill (Secondary)**
- Background: `#ffffff`
- Text: `#2e4592`
- Radius: 22px
- Padding: 0px 12px
- Height: 32px
- Font: 16px weight 400
- Use: MAX secondary buy CTA pill ("立即購買")

**Promo Accent Chip**
- Background: `#007aff`
- Text: `#ffffff`
- Radius: 8px
- Height: 40px
- Use: MAX promotional accent action chip

### Inputs & Forms

**MAX Underline Field**
- Text: `#2f333a`
- Font: 14px weight 400
- Border: borderless underline style (no box border)
- Placeholder: `#2f333a` family (電子信箱, 密碼)
- Use: MAX sign-up / sign-in email and password fields

### Cards & Containers

**Dark Promo Card**
- Background: `#272727`
- Text: `#ffffff`
- Radius: 16px
- Padding: 20px
- Use: MAX dark feature/promo cards ("鏈上鎖倉", "交易機器人", "收益懶人躺賺")

**Cool-Blue Stat Card**
- Background: `#f2f4fb`
- Radius: 12px
- Padding: 20px 0px
- Use: MAX stat-strip card on the landing surface

**404 Action Card**
- Background: `#ffffff`
- Text: `#4a4a4a`
- Border: 1px solid `#eaeaea`
- Radius: 6px
- Height: 88px
- Use: MaiCoin error-page action cards ("查看幣價", "回首頁", "常見問題")

### Badges

**Price-Up Indicator**
- Background: `#49a870`
- Text: `#ffffff`
- Radius: 8px
- Use: MAX price-up / positive-change pill

**Price-Down Indicator**
- Background: `#ec5b5c`
- Text: `#ffffff`
- Radius: 8px
- Use: MAX price-down / negative-change pill

**Carousel Control Pill**
- Background: `#434343`
- Radius: 20px
- Height: 40px
- Use: MAX promo-carousel control

### Navigation
- Background: `#ffffff`
- Text: `#262626`
- Font: 14px weight 400 system sans
- Active: coral `#ee5457` text on hover/active (consumer)
- Use: Top horizontal nav ("交易", "收益", "NFT", "集團", "產品服務")

---

**Verified:** 2026-06-17 (omd:add-reference CREATE — Tier 1 live inspect, two brand-owned surfaces)
**Tier 1 sources:** https://www.maicoin.com (consumer coral surface, live computed style); https://max.maicoin.com (MAX pro navy surface, live computed style — nav CTA, promo cards, signup/signin inputs); https://group.maicoin.com/about (brand-owned group About — founder + founding timeline)
**Tier 2 sources:** getdesign.md/maicoin — NO ENTRY; getdesign.md/max — NO ENTRY; styles.refero.design ?q=maicoin / ?q=max exchange — no genuine entry (returns unrelated featured styles, e.g. "Eclipse Design System")
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: ~4px
- Scale: 4px, 8px, 12px, 16px, 20px, 24px, 48px
- Notable: MAX promo cards use a uniform 20px padding; the cool-blue stat strip uses vertical 20px / horizontal 0 padding so figures span edge-to-edge.

### Grid & Container
- Consumer: centered single-column hero with a banner/carousel, a step-by-step "how to buy" row (註冊 → 裝置綁定 → 身分驗證 → 買 → 賣 → 發送接收), and full-width feature bands.
- MAX: wide ~1200px container; landing alternates white sections with cool-blue (`#f2f4fb`) stat strips and dark promo-card rows.
- Cards group related products; the dark `#272727` promo cards sit in a horizontal row beneath the MAX hero.

### Whitespace Philosophy
- **Flat segmentation**: sections separate by background tint (`#f2f4fb` / `#f4f5f9` vs `#ffffff`) and `#eaeaea` / `#d5dbee` hairlines, never by shadow.
- **One loud action per surface**: the coral (consumer) and navy (pro) CTAs are visually isolated so the next step is unambiguous.
- **Dense data, calm chrome**: where MAX shows market figures it packs them tightly in Iosevka columns, but the surrounding chrome stays airy.

### Border Radius Scale
- Sharp (2px): consumer coral register CTA
- Small (8px): MAX primary navy CTA, accent chip
- Card (12px): cool-blue stat strip
- Comfortable (16px): MAX dark promo cards
- Pill (20–22px): MAX secondary buy button, carousel controls
- Hairline radius (6px): 404 action cards

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, nav, hero, most surfaces |
| Tint (Level 1) | `#f2f4fb` / `#f4f5f9` background shift | Card/section separation without elevation |
| Hairline (Level 2) | `1px solid #eaeaea` or `#d5dbee` border | Card outlines, dividers |
| Dark Block (Level 3) | `#272727` solid card | Emphasis via darkness, not elevation (MAX promo) |

**Shadow Philosophy**: Both MaiCoin and MAX are near-shadowless. Live inspection found `box-shadow: none` across navs, hero CTAs, promo cards, and stat strips on both surfaces. Depth and grouping are communicated through flat cool-blue tinted surfaces (`#f2f4fb`, `#f4f5f9`), thin `#eaeaea` / `#d5dbee` hairlines, and dark cards (`#272727`). When emphasis is needed the system reaches for color — coral (`#ee5457`) on consumer, navy (`#2e4692`) or the dark card on MAX — never elevation. This keeps the trading UI feeling fast and screen-native, the way a market terminal should.

## 7. Do's and Don'ts

### Do
- Reserve coral (`#ee5457`) for the single consumer action (register CTA, learn-more) — keep it the one "action" color on MaiCoin
- Reserve navy (`#2e4692`) for the single pro action on MAX — its register/sign-up CTA
- Use the up-green (`#49a870`) / down-red (`#ec5b5c`) pair only for market direction on MAX
- Use Iosevka for prices and order-book figures so digits align in monospaced columns
- Use near-black ink (`#262626`) for text instead of pure black
- Separate sections with cool-blue tints (`#f2f4fb` / `#f4f5f9`) and `#eaeaea` / `#d5dbee` hairlines, not shadows
- Use the dark card (`#272727`) for emphasis on MAX promos instead of elevation
- Keep the system sans stack for all zh-TW UI text — it hints Traditional Chinese best

### Don't
- Spread coral across many consumer elements — it dilutes the single-action signal
- Mix the consumer coral and the pro navy on the same surface — each brand owns one
- Reuse the up-green / down-red pair for non-market UI — they carry market meaning
- Use drop shadows for elevation — both surfaces are flat and shadow-free
- Use pure black (`#000000`) for body text — reserve near-black `#262626`
- Set UI prices in a proportional font — figures belong in Iosevka so columns align
- Add a third saturated accent beyond coral (consumer) / navy + blue (pro)
- Apply heavy rounding to the consumer CTA — it is nearly sharp (2px) by design

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column; hero carousel and step row stack; MAX promo cards become a vertical stack |
| Tablet | 640–1024px | Moderate padding; 2-up feature/promo cards |
| Desktop | 1024–1366px | Full ~1200px MAX container; multi-column promo + stat strips |

### Touch Targets
- Consumer coral CTA at 52px height — an unmistakable tap target
- MAX primary navy CTA at 60px height; secondary buy pill at 32px
- Nav links spaced for touch within the header

### Collapsing Strategy
- Consumer hero carousel: swipeable on mobile; step row wraps
- MAX promo-card row: horizontal on desktop → vertical stack on mobile
- Cool-blue stat strip: multi-column → stacked
- Market data (MAX): tables/order book scroll horizontally on narrow viewports while Iosevka columns stay aligned

### Image Behavior
- Consumer banners are image-driven and carry no shadow at any size, consistent with the flat system
- Cards maintain their radius (16px promo, 12px stat) across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Consumer primary CTA: MaiCoin Coral (`#ee5457`)
- Consumer accent family: Coral Deep (`#dd4c4a`), Coral Red (`#ce4234`)
- Consumer up-green: (`#05bb85`)
- Pro primary CTA: MAX Navy (`#2e4692`); deep navy (`#253158`); accent blue (`#007aff`)
- Market up / down: (`#49a870`) / (`#ec5b5c`)
- Text: Ink (`#262626`), Body (`#424242`), Muted (`#4d4d4d` / `#4a4a4a`), Faint (`#9d9d9d`)
- Surfaces: White (`#ffffff`), Surface (`#f2f4fb`), Surface Alt (`#f4f5f9`)
- Dark card: (`#272727`); Pill grey (`#434343`); Hairlines: (`#eaeaea`), (`#d5dbee`)

### Example Component Prompts
- "Create a MaiCoin consumer hero on white. Nav links 14px system sans, #262626. Register CTA: #ee5457 background, white text, 2px radius, 52px height, weight 600 — '立即註冊'. Learn-more link in coral #ee5457."
- "Build a MAX pro landing section. Primary CTA: #2e4692 navy background, white text, 8px radius, 60px height, weight 700. Secondary buy pill: white background, #2e4592 navy text, 22px radius, 32px height. Promo feature cards: #272727 background, white text, 16px radius, 20px padding."
- "Design a MAX order-book row: prices in Iosevka 14px; up values #49a870, down values #ec5b5c. Surrounding panel on #f2f4fb with 1px solid #d5dbee hairline, no shadow."
- "Create a MAX sign-up form: borderless underline email/password inputs, #2f333a text, 14px, placeholders 電子信箱 / 密碼. Submit on #2e4692 navy CTA, 8px radius."

### Iteration Guide
1. Pick the surface first: consumer = coral (`#ee5457`); pro = navy (`#2e4692`). Don't mix them.
2. One action color per surface — keep coral/navy isolated for the primary CTA.
3. Market direction is the only place for up-green (`#49a870`) / down-red (`#ec5b5c`).
4. Prices in Iosevka; everything else in the system sans stack.
5. No shadows — separate with `#f2f4fb` / `#f4f5f9` tint and `#eaeaea` / `#d5dbee` hairlines.
6. Text is `#262626` near-black, never pure black for body.
7. Radius vocabulary: 2px coral CTA, 8px navy CTA, 12–16px cards, 20–22px pills.

---

## 10. Voice & Tone

MaiCoin / MAX speaks in **plain, trustworthy, step-guided Traditional Chinese** — a regulated financial platform that walks a first-time buyer through crypto without hype, and gives a pro trader terse, precise market language. The consumer surface is instructional and numbered ("步驟一 註冊 MaiCoin", "步驟四 買虛擬貨幣"), framing crypto as a sequence of safe, completable steps. MAX's voice is denser and more direct — feature names like "鏈上鎖倉" (on-chain locking) and "交易機器人" (trading bot) state the capability and nothing more. Across both, the register CTA is the plainest possible imperative: "立即註冊" (Register now).

| Context | Tone |
|---|---|
| Consumer onboarding | Numbered, reassuring. "步驟一 註冊 MaiCoin" — crypto as completable steps. |
| Consumer CTAs | Direct, low-pressure. "立即註冊", "了解更多". |
| MAX feature labels | Terse, capability-first. "鏈上鎖倉", "交易機器人", "24 小時自動交易". |
| MAX CTAs | Plain imperatives. "立即註冊", "立即購買", "註冊帳號". |
| Trust / compliance | Concrete and operational. Service hours and phone support stated plainly ("電話客服：(02) 2722-1314"). |

**Voice samples (verbatim from live surfaces):**
- "立即註冊" — register CTA, both surfaces (plainest imperative). *(verified live 2026-06-17)*
- "步驟四 買虛擬貨幣" — consumer onboarding step label (guided sequence). *(verified live 2026-06-17)*
- "MaiCoin 台灣數位資產交易平台 - 比特幣，以太幣，萊特幣" — homepage title (positioning: Taiwan's digital-asset platform). *(verified live 2026-06-17)*

**Forbidden register**: get-rich-quick / moonshot hype, fear-of-missing-out urgency, undefined trading jargon left unexplained on the consumer surface, exclamation-heavy marketing. A regulated TW exchange signals steadiness.

## 11. Brand Narrative

MaiCoin was founded in **2014** by **Alex Liu** — a Taipei native and Stanford Electrical Engineering graduate who left Qualcomm to build Taiwan's first digital-asset wallet, exchange, and service platform ([MaiCoin Group — About](https://group.maicoin.com/about)). The founding premise was access: at the time there was no compliant, consumer-friendly way for ordinary Taiwanese to buy and hold cryptocurrency. MaiCoin's numbered, step-by-step consumer flow is the direct expression of that mission — turn an intimidating new asset class into a sequence anyone can complete.

In **2016** the group established **AMIS**, a blockchain-technology company, and in **2017** the team launched **MAX Exchange** — positioned as the first Taiwanese exchange to offer third-party fiat custody through a bank trust, a compliance-first differentiator in a market wary of exchange risk. The two-surface brand maps onto two audiences: MaiCoin's warm coral for the retail first-timer, MAX's institutional navy for the active trader who needs an order book, depth, and monospaced figures.

What the design refuses, visible across both surfaces: the dark-pattern urgency and neon hype of speculative crypto marketing, and the heavy, shadow-stacked chrome of legacy finance. What it embraces: a flat, fast, screen-native interface; one disciplined action color per surface; market colors that mean exactly one thing; and Iosevka figures that respect a trader's need for aligned, scannable numbers.

## 12. Principles

1. **One action color per surface.** Coral (`#ee5457`) is "do this" on MaiCoin; navy (`#2e4692`) is "do this" on MAX. *UI implication:* never spread the action color, and never mix the two brands on one screen.
2. **Guide the first-timer, respect the trader.** The consumer flow is numbered and reassuring; MAX is terse and dense. *UI implication:* consumer copy explains each step; pro copy states the capability and shows the data.
3. **Market colors mean one thing.** Up-green (`#49a870`) and down-red (`#ec5b5c`) signal price direction only. *UI implication:* never reuse them for generic success/error chrome.
4. **Figures are typography with rules.** Prices belong in Iosevka so columns align. *UI implication:* switch to mono for any numeric/market data; keep prose in the system sans.
5. **Flat and fast.** Screen-native clarity beats decorative depth. *UI implication:* no shadows; separate with tint and hairlines; use a dark card for emphasis, not elevation.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable MaiCoin / MAX user segments (Taiwanese first-time crypto buyers, active spot traders, compliance-minded holders), not individual people.*

**林雅婷, 28, 台北.** A first-time buyer who wants to own a little Bitcoin without getting scammed. Followed MaiCoin's numbered steps (register → verify → buy) and trusted the calm, non-hype tone. Would abandon any exchange whose homepage felt like a casino.

**陳冠宇, 34, 新竹.** An engineer who trades spot on MAX daily. Lives in the order book and cares that prices render in aligned Iosevka columns and that up-green / down-red are unambiguous at a glance. Values that MAX uses a bank-trust fiat custody model.

**黃淑芬, 45, 台中.** A cautious longer-term holder who chose MaiCoin / MAX specifically because it is a Taiwan-registered, compliance-first platform. Reads the plainly stated service hours and phone support as signals of a real, regulated operation rather than an anonymous offshore exchange.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no holdings / no orders)** | White canvas, single Ink (`#262626`) line explaining nothing yet, with one action CTA (coral on consumer, navy on MAX) to start. No clutter. |
| **Empty (watchlist none yet)** | Muted (`#4d4d4d`) single line plus a path to add a pair. Calm, honest. |
| **Loading (market data fetch)** | Skeleton rows on `#f2f4fb` tinted surface at final dimensions; flat pulse, no shadow shimmer — consistent with the shadowless system. Iosevka-width skeletons for figures. |
| **Loading (order submit)** | Inline progress on the navy CTA; previous values stay visible; no full-screen block. |
| **Error (page not found)** | White 404 card, `#4a4a4a` text, 1px solid `#eaeaea` border, 6px radius, with action cards ("查看幣價", "回首頁", "常見問題"). Verified live. |
| **Error (order rejected)** | Inline message near the form in plain language stating what to fix; never a bare "錯誤". |
| **Error (form validation)** | Field-level message below the underline input; describes what's valid, not just "必填". |
| **Success (order filled)** | Brief inline confirmation; the filled row reflects state. Up/down value colored with the market pair (`#49a870` / `#ec5b5c`). No celebratory emoji. |
| **Success (registration done)** | Calm confirmation routing to the next onboarding step. |
| **Skeleton** | `#f2f4fb` blocks at final dimensions, flat pulse, Iosevka-matched widths for numeric cells. |
| **Disabled** | Faint (`#9d9d9d`) text on reduced-opacity surface; the action color (coral/navy) fades rather than turns grey, preserving brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, button press, focus |
| `motion-standard` | 200ms | Card/section reveal, carousel slide, dropdown |
| `motion-slow` | 320ms | Page-level transitions, hero carousel auto-advance |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, sheets, promo slides |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is functional and restrained, consistent with the flat, fast aesthetic. The consumer hero carousel auto-advances at a slow cadence; promo cards on MAX fade-in from below at `motion-standard / ease-enter`. Market data updates (ticks, order-book changes) should commit near-instantly with at most a brief color flash in the market pair — a trading surface signals steadiness, not delight, and a slow animation on a price would be misleading. No bounce or spring. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and the carousel stops auto-advancing; both surfaces remain fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-17) via playwright getComputedStyle on two brand-owned
surfaces:
- https://www.maicoin.com (consumer, coral): register CTA #ee5457 / 2px / weight 600 /
  52px; learn-more link coral #ee5457; nav text #262626 14px system sans; up-green
  #05bb85; warm red-orange family #ce4234/#dd4c4a; decorative Roboto "MaiCoin"
  watermark 123px @ 4% opacity; box-shadow none. document.title verbatim:
  "MaiCoin 台灣數位資產交易平台 - 比特幣，以太幣，萊特幣".
- https://max.maicoin.com (pro, navy): register CTA #2e4692 / 8px / weight 700 / 60px;
  secondary buy pill white bg + #2e4592 text / 22px; dark promo cards #272727 / 16px /
  20px; cool-blue stat strip #f2f4fb / 12px; accent #007aff; up-green #49a870;
  down-red #ec5b5c; Iosevka / Iosevka-Bold numeric font; signup/signin underline inputs
  #2f333a with placeholders 電子信箱 / 密碼; box-shadow none.

Voice samples (§10) are verbatim from the live surfaces (register CTA, onboarding step
label, homepage title meta).

Brand narrative (§11): MaiCoin founded 2014 by Alex Liu (Stanford EE, ex-Qualcomm);
AMIS established 2016; MAX Exchange launched 2017 with third-party bank-trust fiat
custody. Sourced from the brand-owned MaiCoin Group About page
(https://group.maicoin.com/about) and corroborating public reporting. Founding-detail
specifics beyond the About page are widely documented public facts, not directly quoted.

Personas (§13) are fictional archetypes informed by publicly observable MaiCoin / MAX
user segments (Taiwanese first-time buyers, active spot traders, compliance-minded
holders). Names are illustrative; they do not refer to real people.

Tier 2 (getdesign.md, styles.refero.design) returned NO ENTRY for this TW brand, so
Tier 1's two brand-owned surfaces carry the proof per spec/regional-sources.yaml.

Interpretive claims (e.g., "one action color per surface", "flat and fast as a rejection
of speculative-crypto hype and legacy-finance chrome") are editorial readings connecting
MaiCoin / MAX's observed design to its positioning, not directly sourced statements.
-->
