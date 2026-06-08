---
id: pchome
name: PChome
country: TW
category: e-commerce
homepage: "https://www.pchome.com.tw"
primary_color: "#ea1717"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=pchome.com.tw&sz=128"
verified: "2026-06-08"
added: "2026-06-08"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-08"
  note: "primary = live 24h price/accent red rgb(234,23,23) → #ea1717; portal hero CTA red #fe3b52 is a softer variant. Body text is #2b2b2b on a #f2f2f2 commerce canvas."
  colors:
    primary: "#ea1717"
    primary-soft: "#fe3b52"
    primary-coral: "#fd7777"
    canvas: "#f2f2f2"
    surface: "#ffffff"
    heading: "#000000"
    body: "#2b2b2b"
    body-muted: "#666666"
    label-muted: "#969696"
    link: "#0090eb"
    link-deep: "#008ae0"
    navy: "#0e4f77"
    navy-deep: "#084567"
    success: "#0bb677"
    amber: "#fed796"
    hairline: "#e5e5e5"
    on-primary: "#ffffff"
  typography:
    family: { sans: "Noto Sans TC", display: "Montserrat", fallback: "Microsoft JhengHei" }
    feature-title:  { size: 28, weight: 700, lineHeight: 1.23, tracking: 0, use: "Editorial / feature card titles on hero carousels" }
    section-title:  { size: 22, weight: 700, lineHeight: 1.23, tracking: 0, use: "Secondary headlines, section heads" }
    price-lg:       { size: 24, weight: 700, lineHeight: 1.2, tracking: 0, use: "Hero / featured product price" }
    price:          { size: 18, weight: 600, lineHeight: 1.3, tracking: 0, use: "Product card price in red #ea1717" }
    body:           { size: 16, weight: 400, lineHeight: 1.5, tracking: 0, use: "Standard reading text, product titles" }
    label:          { size: 14, weight: 400, lineHeight: 1.4, tracking: 0, use: "Tab labels, metadata, secondary nav" }
    caption:        { size: 13, weight: 400, lineHeight: 1.4, tracking: 0, use: "Fine print, spec rows, timestamps" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 4, md: 8, lg: 16, full: 9999 }
  shadow:
    ambient: "rgba(0,0,0,0.06) 0px 1px 4px"
    card: "rgba(0,0,0,0.1) 0px 2px 8px"
    elevated: "rgba(1,47,73,0.1) 0px 8px 24px"
  components:
    button-primary: { type: button, bg: "#ea1717", fg: "#ffffff", radius: 4, font: "weight 700", use: "Add to cart / Buy now" }
    button-soft: { type: button, bg: "#fe3b52", fg: "#ffffff", radius: 9999, use: "Portal hero CTA / banner actions" }
    card: { type: card, bg: "#ffffff", radius: 8, use: "Dense product grid card, soft card shadow" }
    price-tag: { type: badge, fg: "#ea1717", font: "18px weight 600", use: "Product price, strike-through #969696 for list price" }
    badge-promo: { type: badge, bg: "#ea1717", fg: "#ffffff", radius: 4, use: "P幣 / 折扣 promo flags" }
    tab-bar: { type: tab, bg: "#f2f2f2", fg: "#000000", font: "16px weight 400", use: "Category switcher", active: "black active text" }
  components_harvested: true
---

# Design System Inspiration of PChome

## 1. Visual Theme & Atmosphere

PChome 24h is Taiwan's archetypal high-density marketplace, and its design reflects a single, unwavering priority: get as much shoppable inventory in front of the eye as possible, as fast as possible. Where Western boutique commerce leans on whitespace and one-product-per-screen storytelling, PChome opens on a light gray canvas (`#f2f2f2`) tiled edge-to-edge with white product cards (`#ffffff`), promo banners, credit-card offers, and flash-deal countdowns. The atmosphere is busy, urgent, and transactional in the best Taiwanese-e-commerce tradition — a digital department store where the brand red (`#ea1717`) is the heartbeat, pulsing on every price, every discount flag, and every "buy now" button.

The system runs on two distinct surfaces with a shared DNA. The **portal** (`www.pchome.com.tw`) is a news-and-services front door: dark editorial headlines (`Noto Sans TC` at 28px / weight 700, white on imagery) over a blue-link information architecture, with a hotter coral-red CTA (`#fe3b52`) for promotional banners. The **24h shopping app** (`24h.pchome.com.tw`) is the commerce engine: a `#f2f2f2` workbench, dense product grids on white cards with 8px corners, prices rendered in the canonical brand red `#ea1717`, and a blue (`#0090eb`) reserved for navigational links. Body copy everywhere sits in a near-black `#2b2b2b` rather than pure black, softening the wall of text just enough to keep a thousand SKUs scannable.

Typography is utilitarian and Traditional-Chinese-first. The primary face is `Noto Sans TC` with `Microsoft JhengHei` (微軟正黑體) as the platform fallback, paired with `Montserrat` and `Roboto` for Latin numerals and prices. Weights swing hard between 400 (body, product titles) and 700 (headlines, prices, promo) — there is no whisper-weight subtlety here. Weight, color, and red are the three levers PChome pulls to create hierarchy in an intentionally crowded field. The result is unmistakably a Taiwanese marketplace: confident, dense, value-signaling, and built for the thumb of a deal-hunting shopper.

**Key Characteristics:**
- Brand red `#ea1717` as the universal price + CTA + promo color — the single loudest signal in the system
- Light gray commerce canvas `#f2f2f2` with white product cards `#ffffff` at 8px radius — a tiled department-store grid
- `Noto Sans TC` Traditional-Chinese-first stack with `Montserrat` / `Roboto` for Latin numerals and prices
- Near-black body text `#2b2b2b` instead of pure black, for readability across dense layouts
- Hard two-weight rhythm: 400 for body, 700 for headlines/prices/promos — no light display weights
- Blue (`#0090eb`) strictly for navigational links, never for buy actions
- Conservative 4px–8px radius; promo badges and prices, not rounding, carry the visual energy
- Countdown timers, P幣 (P-coin) rebate flags, and strike-through list prices as native commerce ornament

## 2. Color Palette & Roles

### Primary
- **PChome Red** (`#ea1717`): The brand anchor. Live-extracted as the dominant accent on 24h (202 element occurrences) and the literal color of every product price. Drives CTAs, promo badges, and price emphasis.
- **Soft Red / Coral CTA** (`#fe3b52`): Portal hero banner CTA red — a lighter, pinker variant used on `www.pchome.com.tw` promotional surfaces.
- **Coral Accent** (`#fd7777`): Lighter red-pink for secondary tags, sub-prices, and softer promo accents.

### Surface & Canvas
- **Commerce Canvas** (`#f2f2f2`): The 24h shopping background — a light neutral gray that lets white cards float and red prices pop.
- **Card Surface** (`#ffffff`): Product cards, banner tiles, and content panels.
- **Hairline** (`#e5e5e5`): Standard border and divider between dense rows and cards.

### Text Neutrals
- **Heading Black** (`#000000`): Strongest headings, tab labels, maximum-contrast titles.
- **Body** (`#2b2b2b`): Default reading text and product titles — near-black, the most-used color on the page.
- **Body Muted** (`#666666`): Secondary descriptions, spec rows, helper text.
- **Label Muted** (`#969696`): Captions, strike-through list prices, low-priority metadata.

### Links & Navy
- **Link Blue** (`#0090eb`): Navigational links and interactive text on the portal and 24h.
- **Link Deep** (`#008ae0`): Hover / visited link variant.
- **Navy** (`#0e4f77`): Header and dark-chrome accents, info section backgrounds.
- **Navy Deep** (`#084567`): Deepest chrome tone for footers and immersive bars.

### Status & Accent
- **Success Green** (`#0bb677`): In-stock, order-confirmed, positive status.
- **Amber** (`#fed796`): Warm highlight for warning chips, P幣 rebate, and attention flags.

### On-Color
- **On-Primary White** (`#ffffff`): Text on red CTAs, promo badges, and dark navy bars.

## 3. Typography Rules

### Font Family
- **Primary**: `Noto Sans TC`, fallback `微軟正黑體` / `Microsoft JhengHei`, then `文泉驛正黑` / `WenQuanYi Zen Hei`
- **Latin / Numerals**: `Montserrat`, `Roboto`, `Helvetica`, `Arial`
- **Rationale**: Traditional-Chinese-first rendering with a Latin companion specifically for prices and numerals — critical for a commerce site where the price is the loudest element.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Feature Title | Noto Sans TC | 28px (1.75rem) | 700 | 1.23 | Editorial hero / carousel headlines (white on imagery) |
| Section Title | Noto Sans TC | 22px (1.38rem) | 700 | 1.23 | Secondary headlines, section heads |
| Price Large | Montserrat / Noto Sans TC | 24px (1.50rem) | 700 | 1.2 | Hero / featured product price |
| Price | Montserrat | 18px (1.13rem) | 600 | 1.3 | Product card price, in red `#ea1717` |
| Body | Noto Sans TC | 16px (1.00rem) | 400 | 1.5 | Product titles, standard reading text |
| Label | Noto Sans TC | 14px (0.88rem) | 400 | 1.4 | Tab labels, metadata, secondary nav |
| Caption | Noto Sans TC | 13px (0.81rem) | 400 | 1.4 | Fine print, spec rows, timestamps |
| Strike Price | Montserrat | 14px (0.88rem) | 400 | 1.4 | List price, `#969696`, line-through |

### Principles
- **Two-weight rhythm**: 400 for body and product titles, 700 for headlines / prices / promos. Weight is the primary hierarchy lever, not size.
- **Red is a type style**: Price text is not just colored — `#ea1717` red at weight 600+ is functionally a typographic role of its own.
- **Traditional Chinese first**: All sizing assumes CJK glyphs; line-heights (1.23–1.5) leave room for dense Hanzi without crowding.
- **Numerals get a Latin face**: `Montserrat` / `Roboto` render prices and countdown digits, giving numbers tabular crispness against the CJK body.
- **No light display weights**: Unlike boutique brands, PChome never goes below 400. Density demands legibility at weight, not elegance at lightness.

## 4. Component Stylings

### Buttons

**Primary (Buy / Add to Cart)**
- Background: `#ea1717`
- Text: `#ffffff`
- Padding: 8px 16px
- Radius: 4px
- Font: 16px `Noto Sans TC` weight 700
- Use: Add to cart, buy now, primary commerce action

**Soft / Portal CTA**
- Background: `#fe3b52`
- Text: `#ffffff`
- Padding: 8px 20px
- Radius: 8px
- Font: 16px weight 700
- Use: Portal hero banner CTAs on `www.pchome.com.tw`

**Promo Tile (live-extracted)**
- Background: `#ffffff`
- Text: `#2b2b2b`
- Padding: 0px 8px
- Radius: 8px
- Height: 93px
- Font: 16px weight 400
- Use: Credit-card / P幣 offer tiles in the promo strip

### Cards & Containers
- Background: `#ffffff`
- Radius: 8px
- Border: `1px solid #e5e5e5` (when bordered)
- Shadow (card): `rgba(0,0,0,0.1) 0px 2px 8px`
- Shadow (elevated): `rgba(1,47,73,0.1) 0px 8px 24px`
- Layout: dense product grid; each card = image + 16px title + `#ea1717` price + optional promo flag

### Price Tag
- Sale price: `#ea1717`, 18px Montserrat weight 600 (hero: 24px weight 700)
- List price: `#969696`, 14px, `line-through`
- Currency: `$` prefix, no space, set in the same Latin face

### Badges / Tags / Flags
**Promo Badge**
- Background: `#ea1717`
- Text: `#ffffff`
- Padding: 1px 6px
- Radius: 4px
- Font: 13px weight 700
- Use: 折扣 (discount), 限時 (limited), P幣 rebate flags

**P幣 / Rebate Chip**
- Background: `#fed796` (amber)
- Text: `#2b2b2b`
- Radius: 4px
- Use: P-coin reward callouts

**In-Stock Chip**
- Background / text: `#0bb677` green
- Use: availability, order-confirmed status

### Tabs & Category Switcher
- Background: `#f2f2f2`
- Active text: `#000000`, inactive: `#666666`
- Height: 52px
- Font: 16px weight 400
- Radius: 0px (flat bar — relies on color, not shape)

### Navigation
- Sticky top header on white / navy chrome
- Search bar dominant and centered — the primary navigation tool of a marketplace
- Links: `Noto Sans TC` 14px weight 400, `#0090eb`
- Category mega-menu and left-rail tree for taxonomy depth

### Countdown Timer
- Digits: white `#ffffff` on red, 18px weight 700, Latin face
- Used on flash-deal / 限時 sections — native urgency ornament

---

**Verified:** 2026-06-08 (omd-add-reference — Tier 1 live inspect, 2 surfaces)
**Tier 1 sources:** https://www.pchome.com.tw (portal home, live DOM getComputedStyle); https://24h.pchome.com.tw (24h shopping surface — price/CTA red `#ea1717`, `#f2f2f2` canvas, 8px cards confirmed live)
**Method:** playwright getComputedStyle on live DOM — body, headings, buttons, price nodes, and full color-frequency sweep across ~5000 elements.
**`.verification.md`:** `web/references/pchome/.verification.md`

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px
- Dense at the card level (8px internal gutters), generous between major sections

### Grid & Container
- Full-bleed marketplace grid — content extends edge to edge, not centered in a narrow column
- Product grids: 4–6 columns on desktop, collapsing to 2 on mobile
- Left rail for category taxonomy; main column for grids; right rail for promos
- Promo strips run horizontally as fixed-height (93px) tiles above the fold

### Whitespace Philosophy
- **Density as a feature**: PChome deliberately maximizes shoppable surface area. Whitespace is rationed — it exists to separate cards, not to create drama.
- **Cards as the unit**: Every piece of content is a card on the `#f2f2f2` canvas. The gray background is the negative space; white cards are the figure.
- **Above-the-fold maximalism**: Flash deals, credit-card offers, editorial headlines, and category entry points all compete above the fold. This is intentional — it signals a full department store, not a curated boutique.

### Border Radius Scale
- Small (4px): buttons, badges, promo flags
- Standard (8px): product cards, banner tiles, promo tiles
- Large (16px): occasional rounded feature containers
- The system stays conservative; energy comes from red and density, not rounding

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (0) | No shadow | Canvas, inline text, flat tab bars |
| Ambient (1) | `rgba(0,0,0,0.06) 0px 1px 4px` | Subtle card lift, hover hint |
| Card (2) | `rgba(0,0,0,0.1) 0px 2px 8px` | Standard product cards, promo tiles |
| Elevated (3) | `rgba(1,47,73,0.1) 0px 8px 24px` | Dropdowns, mega-menu, modals |

**Shadow Philosophy**: Elevation at PChome is functional and restrained — soft neutral shadows that lift white cards off the `#f2f2f2` canvas just enough to read as discrete, tappable units. The elevated tier picks up a faint navy tint (`rgba(1,47,73,0.1)`) echoing the header chrome, but depth is never decorative. In a layout this dense, heavy shadows would create visual noise; the system relies on the canvas/card figure-ground contrast and the red accent to do the hierarchy work instead.

## 7. Do's and Don'ts

### Do
- Use brand red `#ea1717` for every price, primary CTA, and promo badge
- Set body text in near-black `#2b2b2b` on a `#f2f2f2` canvas with white `#ffffff` cards
- Render prices and numerals in a Latin face (`Montserrat` / `Roboto`) for tabular crispness
- Keep the two-weight rhythm: 400 body, 700 headlines/prices/promos
- Reserve blue (`#0090eb`) strictly for navigational links
- Embrace density — fill the grid, use the full width, stack cards efficiently
- Use 4px radius on buttons/badges and 8px on cards
- Show strike-through list prices in `#969696` next to the red sale price

### Don't
- Don't use red for navigation links or use blue for buy actions — the roles are fixed
- Don't add light display weights (300/200) — PChome never whispers
- Don't introduce large pill radii on product cards — stay at 4–8px
- Don't over-apply whitespace at the expense of shoppable density
- Don't use pure black `#000000` for long body copy — `#2b2b2b` is the body tone
- Don't render prices in a CJK-only weight without the Latin numeral face
- Don't make shadows heavy or colored beyond the faint navy elevated tint
- Don't let any single element out-shout the price — red price is the visual climax of every card

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | 2-column product grid, collapsed left rail, sticky search |
| Tablet | 640–1024px | 3–4 column grid, drawer category nav |
| Desktop | 1024–1440px | 4–6 column grid, left taxonomy rail + right promo rail |
| Wide | >1440px | Full-width grid, more columns, persistent rails |

### Touch Targets
- Promo tiles at 93px height — comfortably tappable
- Category tabs at 52px height
- Buttons with 8px vertical padding minimum
- Product cards are entirely tappable surfaces

### Collapsing Strategy
- Left category rail → hamburger drawer on mobile
- Multi-rail desktop layout → single scrolling column
- Product grid: 6 → 4 → 3 → 2 columns
- Search bar stays sticky and dominant at all sizes — it is the primary mobile nav
- Promo strips become horizontally swipeable carousels on mobile

### Image Behavior
- Product thumbnails maintain square aspect ratio across breakpoints
- Hero / editorial banners crop to maintain headline legibility (white 28px/700 over imagery)
- Cards keep 8px radius at all sizes

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA / price: PChome Red (`#ea1717`)
- Portal hero CTA: Soft Red (`#fe3b52`)
- Canvas: Light Gray (`#f2f2f2`)
- Card surface: White (`#ffffff`)
- Body text: Near-black (`#2b2b2b`)
- Muted text: Gray (`#666666`), captions (`#969696`)
- Link: Blue (`#0090eb`)
- Success: Green (`#0bb677`)
- Reward/warn: Amber (`#fed796`)

### Example Component Prompts
- "Create a product card: white `#ffffff` background, 8px radius, soft shadow `rgba(0,0,0,0.1) 0px 2px 8px`. Square product image on top. Title at 16px `Noto Sans TC` weight 400 in `#2b2b2b`. Price at 18px Montserrat weight 600 in red `#ea1717`, with a `#969696` line-through list price beside it. Small red `#ea1717` promo badge, white text, 4px radius."
- "Build a primary CTA button: `#ea1717` background, white text, 16px weight 700, 4px radius, 8px 16px padding — labeled 加入購物車 (Add to cart)."
- "Design a dense marketplace grid on a `#f2f2f2` canvas: 5-column product card grid, 16px gutters, full bleed. Sticky white header with a dominant centered search bar and `#0090eb` category links."
- "Create a flash-deal section: red `#ea1717` band, white countdown digits at 18px Montserrat weight 700, product cards below with `#ea1717` prices and 限時 promo flags."

### Iteration Guide
1. Red `#ea1717` is the price color, the CTA color, and the promo color — apply it everywhere value or action lives.
2. Body text is `#2b2b2b` on `#f2f2f2`; cards are `#ffffff`. Maintain this figure-ground contrast.
3. Use `Montserrat`/`Roboto` for all numerals and prices; `Noto Sans TC` for CJK text.
4. Weights are 400 or 700 — nothing lighter.
5. Radius: 4px for buttons/badges, 8px for cards.
6. Blue `#0090eb` = links only; never a buy button.
7. Favor density — fill the grid, use full width.
8. Show the savings: red sale price + `#969696` strike-through list price.

---

## 10. Voice & Tone

PChome's voice is the brisk, value-forward register of a Taiwanese hypermarket flyer — direct, deal-driven, and benefit-first. Copy leads with the offer: 折扣 (discount), 限時 (limited time), 24h到貨 (24-hour delivery), P幣回饋 (P-coin rebate). The site tagline 每天一起變更好 ("getting better together, every day") sets a warm, communal tone over the transactional core. Button labels are imperative and concrete (加入購物車 / 立即購買 / 結帳), never coy. Numbers do the talking — price, percentage off, delivery hours, rebate amount.

| Context | Tone |
|---|---|
| Product titles | Spec-dense, keyword-front-loaded for search and scanning |
| Prices / promos | Pure number + benefit. "$3,999", "8% P幣回饋", "限時下殺" |
| CTAs | Direct imperatives: 加入購物車, 立即購買, 結帳 |
| Delivery promise | Concrete and repeated: 24h到貨, 隔日配 |
| Editorial / portal | Newsier, headline-driven, Traditional-Chinese broadsheet register |
| Membership / rebate | Warm, loyalty-flavored — P幣, 會員, 點數 framed as belonging |

**Forbidden register.** Vague boutique poetry ("elevate your lifestyle"), unquantified hype with no number attached, and anything that buries the price or the delivery promise. PChome's reader wants the deal stated plainly.

## 11. Brand Narrative

PChome Online (網路家庭) was founded in **1998** by **Jan Hung-tze (詹宏志)**, a prominent Taiwanese publisher, writer, and internet pioneer. The name traces to PChome magazine, and the company grew from a portal into one of Taiwan's defining internet groups. Its flagship **PChome 24h購物** popularized the promise that gives it its name: delivery within 24 hours across Taiwan — a logistics commitment that became a core brand identity in a market where speed and reliability win loyalty.

The company sits at the center of Taiwan's e-commerce landscape alongside rivals like Shopee, Momo, and Yahoo奇摩購物. Its design reflects that competitive, value-driven market: a department-store density of inventory, aggressive promotional layering (credit-card tie-ins, P幣 rebate points, flash deals), and a brand red that signals price and savings at a glance. The portal heritage (news, email, services at `www.pchome.com.tw`) still frames the commerce engine, giving PChome the feel of a full digital ecosystem rather than a single-purpose store.

What PChome embraces: speed (24h delivery as identity), density (maximal shoppable surface), and value-signaling through red prices and stacked rebates. What it avoids: the sparse, one-product-per-screen aesthetic of Western DTC — in the Taiwanese market, abundance and visible savings build trust, not minimalism.

## 12. Principles

1. **The price is the hero.** Every card resolves to a red `#ea1717` price. Nothing should out-shout it.
2. **Density is service.** Showing more inventory faster respects a deal-hunting shopper's time. Whitespace is rationed, not lavished.
3. **Speed is the promise.** 24h delivery is the brand. Surface it relentlessly.
4. **Red means value.** Reserve `#ea1717` for price, action, and savings — never dilute it onto navigation.
5. **Numbers over adjectives.** Quantify the benefit: percentage off, rebate amount, delivery hours.
6. **Two-weight clarity.** In a crowded field, hierarchy comes from 400 vs 700 and color, not from typographic subtlety.
7. **The card is the unit.** White cards on a gray canvas — a tileable, scannable, infinitely-stackable building block.
8. **Traditional Chinese first.** Render for the Taiwanese reader; give numerals a Latin face for crisp prices.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable PChome user segments (Taiwanese deal-hunting shoppers, 3C enthusiasts, household buyers, loyalty members), not individual people.*

**Lin Yi-chen (林宜蓁), 34, Taipei.** Office worker who shops PChome 24h on her commute. Trusts the 24h到貨 promise — orders household goods knowing they arrive next day. Scans for the red price and the P幣 rebate before anything else. Would abandon a redesign that added whitespace at the cost of seeing fewer deals per screen.

**Chen Wei (陳威), 27, Taichung.** 3C enthusiast who lives in the electronics category. Reads spec-dense product titles fast, compares strike-through list prices against red sale prices, and stacks credit-card promos. Values the density — he can compare ten laptops at a glance.

**Auntie Wu (吳阿姨), 58, Kaohsiung.** Household buyer who shops by category rail and big tappable promo tiles. The large 28px headlines and clear red prices make the site legible without reading glasses. Loyal to PChome for the reliable delivery and the P幣 points she accumulates.

**Kevin Hsu (許凱文), 41, Hsinchu.** Operations manager who orders office supplies in bulk. Uses the search bar as his primary tool, trusts the 24h logistics, and appreciates that prices, stock status (green `#0bb677`), and delivery windows are all stated as plain facts.

## 14. States

| State | Treatment |
|---|---|
| **Empty (cart)** | White canvas, gray `#969696` line "購物車是空的" (your cart is empty), one red `#ea1717` CTA back to shopping. No illustration drama. |
| **Empty (search)** | Muted `#666666` "找不到符合的商品" with the query echoed and category suggestions below. |
| **Loading (grid)** | Skeleton cards at final dimensions in `#e5e5e5`, gentle shimmer. Price bars sized to typical price width. |
| **Error (out of stock)** | Card dims; red `#ea1717` "已售完" (sold out) flag replaces the buy button. |
| **Success (added to cart)** | Brief toast / inline confirm with green `#0bb677` check and item count; cart badge increments. |
| **Promo active** | Red `#ea1717` badge + amber `#fed796` P幣 chip; countdown timer in white-on-red for limited deals. |
| **Disabled** | Reduced opacity on the red button; never recolored to gray — the brand red stays readable as faded red. |
| **Price drop** | List price in `#969696` line-through beside the new red `#ea1717` price; savings stated as a number. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Selection, focus, cart-badge increment |
| `motion-fast` | 150ms | Hover lift on cards, button press |
| `motion-standard` | 250ms | Dropdowns, drawers, modal open |
| `motion-slow` | 400ms | Carousel slide, banner transition |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Most transitions |
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Drawers, dropdowns arriving |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |

**Signature motions.**

1. **Card hover lift.** Product cards lift on hover with `motion-fast` and the card shadow deepens from ambient to `rgba(0,0,0,0.1) 0px 2px 8px` — a subtle invitation to click.
2. **Countdown tick.** Flash-deal timers tick per second with no animation flourish — `motion-instant`, purely functional urgency.
3. **Promo carousel.** Above-the-fold banner and promo strips auto-advance on a slow timer using `motion-slow / ease-standard` horizontal slide.
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, carousels freeze, hover lifts collapse to instant, and the countdown updates without transition. The marketplace remains fully shoppable.

## 16. Do's and Don'ts

### Do
- Treat the red `#ea1717` price as the climax of every card and let savings be visible
- Keep the dense, full-width, card-on-gray-canvas marketplace grid
- Use the two-weight (400/700) rhythm and let red carry hierarchy
- Surface the 24h delivery promise and P幣 rebate prominently
- Render numerals in `Montserrat`/`Roboto` and CJK in `Noto Sans TC`

### Don't
- Don't dilute the brand red onto navigation or non-action elements
- Don't trade shoppable density for decorative whitespace
- Don't use light display weights or large pill radii
- Don't bury the price, the discount percentage, or the delivery window
- Don't use blue for buy actions — blue is links only
