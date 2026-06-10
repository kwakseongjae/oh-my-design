---
id: funnow
name: FunNow
country: TW
category: consumer-tech
homepage: "https://www.myfunnow.com"
primary_color: "#ff5537"
logo:
  type: favicon
  slug: "https://cdn.myfunnow.com/web/images/funnow_favicon.svg"
verified: "2026-06-10"
added: "2026-06-10"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-10"
  note: "primary = live CTA / urgency orange-red (#ff5537, matches the official favicon SVG fill); teal #4dcbcb is the secondary outline accent; flash-sale tags run indigo #5a69eb. Vuetify/Material chrome — flat v-cards, 4px radius everywhere."
  colors:
    primary: "#ff5537"
    teal: "#4dcbcb"
    flash-indigo: "#5a69eb"
    amber: "#ffb107"
    ink: "#252729"
    ink-pure: "#000000"
    muted: "#a7a7a9"
    canvas: "#f4f4f5"
    surface: "#ffffff"
    tint-peach: "#ffd8d1"
    tint-blush: "#ffeeeb"
    on-primary: "#ffffff"
  typography:
    family: { sans: "Helvetica Neue", tc: "PingFang TC, Microsoft JhengHei" }
    display-hero: { size: 36, weight: 500, lineHeight: 1.22, use: "Hero H1 headline on homepage" }
    page-title:   { size: 24, weight: 700, lineHeight: 1.50, use: "Category / listing page H1" }
    section:      { size: 18, weight: 400, lineHeight: 1.50, use: "Category page H2 intro" }
    subtitle:     { size: 17, weight: 400, lineHeight: 1.41, use: "Hero H2 subtitle, section heads, filter tabs" }
    body:         { size: 15, weight: 400, lineHeight: 1.50, use: "Standard reading text, header buttons" }
    button:       { size: 14, weight: 400, lineHeight: 1.00, use: "Primary CTA / control labels" }
    badge:        { size: 12, weight: 500, lineHeight: 1.30, use: "Urgency and flash-sale tags" }
  spacing: { xs: 2, sm: 8, md: 12, base: 16 }
  rounded: { sm: 4, md: 5 }
  shadow:
    flat: "none"
    raised: "Material elevation stack rgba(0,0,0,0.2) / rgba(0,0,0,0.14) on raised search CTA only"
  components:
    button-primary: { type: button, bg: "#ff5537", fg: "#ffffff", radius: "4px", padding: "0px 16px", height: "40px", font: "14px / 400", use: "Search submit / primary CTA — the single solid-fill button on the page" }
    button-outline-teal: { type: button, fg: "#4dcbcb", border: "1px solid #4dcbcb", radius: "4px", padding: "0px 8px", height: "36px", font: "15px / 400", use: "Download App header CTA, outlined teal" }
    button-text: { type: button, fg: "#000000", radius: "4px", padding: "0px 8px", height: "36px", font: "15px / 400", use: "Login / Sign Up quiet header action" }
    badge-available-now: { type: badge, bg: "#ff5537", fg: "#ffffff", radius: "4px", padding: "2px 8px", font: "12px / 500", use: "'Available now' urgency tag on product cards" }
    badge-flash-sale: { type: badge, bg: "#5a69eb", fg: "#ffffff", radius: "4px", padding: "0px 8px", font: "12px / 400", use: "'Flash Sales Now' / timed-deal countdown tag" }
    card-product: { type: card, bg: "#ffffff", radius: "4px", use: "Flat v-card product tile sitting on the #f4f4f5 canvas, image-led, no shadow" }
    tab-filter: { type: tab, fg: "#252729", active: "text #ff5537", height: "48px", font: "17px / 400", use: "Category scope tabs (All / Beitou Hot Spring Hotel / ...)" }
    input-search: { type: input, fg: "#000000", radius: "0px", padding: "8px 16px", height: "40px", font: "16px / 400", use: "Hero search field inside the white booking toolbar" }
  components_harvested: true
---

# Design System Inspiration of FunNow

## 1. Visual Theme & Atmosphere

FunNow is Taiwan's on-demand "go out tonight" booking platform, and its web surface looks exactly like what it is: a fast, inventory-dense marketplace built on Material Design plumbing. The page sits on a cool light-grey canvas (`#f4f4f5`) with flat white product cards (`#ffffff`) stacked edge to edge — no drop shadows, no decorative depth — so hundreds of restaurant, hot-spring, and massage listings scan like a clean catalog. Text is a near-black charcoal (`#252729`) over the Material 87%-black default, and every interactive element shares one conservative 4px corner radius. The framework is visibly Vuetify (`v-card--flat` tiles, Material ripple buttons), which gives the product a utilitarian, app-like crispness rather than an editorial mood.

What makes it unmistakably FunNow is the urgency accenting. The brand's orange-red (`#ff5537`) — the same hue as the official favicon mark — is rationed to the moments that mean "act now": the solid search CTA, the "Available now" tag, active filter tabs, price links, and the merchant-facing "Reach Out to Us" buttons. Around it orbit two cooler signals: a teal (`#4dcbcb`) used for the outlined "Download App" action, and an indigo (`#5a69eb`) reserved for "Flash Sale" countdown tags. An amber (`#ffb107`) appears across rating and promotional elements. The result is a traffic-light economy of color on an otherwise neutral page: orange-red = book it, indigo = deal expiring, teal = get the app.

Typography is deliberately unprecious. The stack is Helvetica Neue with PingFang TC / Microsoft JhengHei fallbacks for Traditional Chinese, body at a compact 15px/1.5, the hero H1 at a modest 36px/500, and category-page titles at 24px/700. Nothing is set in a display face; hierarchy comes from weight, the orange accent, and photography. FunNow's pages feel like a tool you operate at 9pm while deciding where to go at 9:30 — speed-first, spontaneity-flavored, zero friction.

**Key Characteristics:**
- Material/Vuetify chassis — 4px radius everywhere, ripple buttons, flat `v-card` tiles
- Urgency-rationed orange-red (`#ff5537`) as the lone solid-fill action color
- Traffic-light accent economy: indigo (`#5a69eb`) flash sales, teal (`#4dcbcb`) app download, amber (`#ffb107`) ratings/promos
- Flat catalog depth: light-grey canvas (`#f4f4f5`) + white cards, no shadows on tiles
- Helvetica Neue + PingFang TC stack — utilitarian, bilingual-ready, no display font
- Compact 15px body with 1.5 line-height for dense listing scans
- Photography-led cards: imagery carries the appetite appeal, chrome stays neutral
- Time-anchored microcopy ("Available now", "Book For 06:00") baked into the component system

## 2. Color Palette & Roles

### Primary
- **FunNow Orange-Red** (`#ff5537`): The brand mark color (official favicon SVG fill) and the system's single solid action color — search CTA, "Available now" urgency tags, active tab text, price/link accents, merchant CTAs.
- **On-Primary White** (`#ffffff`): Text on orange-red and indigo fills; also the card surface color.

### Secondary Accents
- **Teal** (`#4dcbcb`): The secondary accent, used as outlined-button color ("Download App" — 1px teal border, teal label) and occasional link/icon highlights. Cool counterweight to the hot primary.
- **Flash Indigo** (`#5a69eb`): Reserved exclusively for flash-sale / timed-deal tags ("Flash Sales Now", "06:00 Flash Sale"). A deliberate hue break so deals read differently from availability.
- **Amber** (`#ffb107`): Rating and promotional accent observed across listing surfaces — the warm "star" note in the catalog.

### Neutrals & Surfaces
- **Ink Charcoal** (`#252729`): Body text, inactive tab labels, section headings — the workhorse text color.
- **Pure Black** (`#000000`): Header buttons and high-emphasis labels; Material's 87%-black (`rgba(0,0,0,0.87)`) covers default headings and inputs.
- **Muted Grey** (`#a7a7a9`): Disabled/tertiary text, metadata, placeholder-level emphasis.
- **Canvas Grey** (`#f4f4f5`): Page background — the cool light grey the whole catalog sits on.
- **Surface White** (`#ffffff`): Product cards, toolbar, nav, dialogs.

### Tints
- **Peach Tint** (`#ffd8d1`): Soft orange-red tint for promotional highlight surfaces.
- **Blush Tint** (`#ffeeeb`): Lightest orange-red tint, used as a subtle brand-warm background wash.

## 3. Typography Rules

### Font Family
- **Primary stack**: `"Helvetica Neue", Helvetica, Tahoma, Arial` with Traditional Chinese fallbacks `"PingFang TC", "Microsoft JhengHei", PMingLiU` (and WenQuanYi for Linux). Latin-first, TC-ready — no custom webfont.

### Hierarchy

| Role | Size | Weight | Line Height | Notes |
|------|------|--------|-------------|-------|
| Display Hero (H1) | 36px | 500 | 1.22 (44px) | Homepage hero headline |
| Page Title (H1) | 24px | 700 | 1.50 | Category/listing page title |
| Section Intro (H2) | 18px | 400 | 1.50 | Category page descriptive intro |
| Subtitle / Section (H2) | 17px | 400 | 1.41 | Hero subtitle, section heads, filter tabs |
| Body | 15px | 400 | 1.50 (22.5px) | Default document text, header buttons |
| Control / CTA | 14px | 400 | 1.00 | Primary button, small controls |
| Badge / Tag | 12px | 400–500 | 1.30 | Urgency and flash-sale tags |

### Principles
- **System type, zero ceremony**: no display font, no negative tracking games — hierarchy is carried by weight (400 vs 500 vs 700) and the orange accent.
- **Bilingual parity**: the Helvetica-then-PingFang stack keeps Latin and Traditional Chinese visually consistent at identical sizes; nothing in the scale assumes Latin-only line lengths.
- **Modest display sizes**: even the hero tops out at 36px — the photography and inventory density are the visual event, not the type.
- **Compact body for scanning**: 15px/1.5 keeps long listing pages dense but legible.

## 4. Component Stylings

### Buttons

**Primary (Search / CTA)**
- Background: `#ff5537`
- Text: `#ffffff`
- Radius: 4px
- Padding: 0px 16px
- Height: 40px
- Font: 14px / 400
- Shadow: Material elevation stack (rgba(0,0,0,0.2) / rgba(0,0,0,0.14) layers)
- Use: Search submit in the booking toolbar — the page's single solid-fill action

**Outline Teal (Download App)**
- Background: transparent
- Text: `#4dcbcb`
- Border: 1px solid `#4dcbcb`
- Radius: 4px
- Padding: 0px 8px
- Height: 36px
- Font: 15px / 400
- Use: Header "Download App" CTA — the only outlined button in the chrome

**Text (Login / Sign Up)**
- Background: transparent
- Text: `#000000`
- Radius: 4px
- Padding: 0px 8px
- Height: 36px
- Font: 15px / 400
- Use: Quiet header actions (Login / Sign Up, city selector at 17px, Category/Now/Date/Time/Pax toolbar toggles)

### Badges

**Available Now (Urgency)**
- Background: `#ff5537`
- Text: `#ffffff`
- Radius: 4px
- Padding: 2px 8px
- Font: 12px / 500
- Use: Real-time availability tag on product cards ("Available now", "Book For 06:00")

**Flash Sale**
- Background: `#5a69eb`
- Text: `#ffffff`
- Radius: 4px
- Padding: 0px 8px
- Font: 12px / 400
- Use: Timed-deal tags ("Flash Sales Now", "06:00 Flash Sale") — indigo so deals read distinctly from availability

### Cards & Containers

**Product Tile**
- Background: `#ffffff`
- Radius: 4px
- Shadow: none (flat `v-card--flat`)
- Use: Listing tile on the `#f4f4f5` canvas — photo on top, name, rating, price; measured at 360×135 (list) and 233×146 (carousel)

### Tabs

**Category Filter Tab**
- Text: `#252729` (inactive)
- Active: `#ff5537` text
- Height: 48px
- Padding: 0px 16px
- Font: 17px / 400
- Use: Listing scope tabs ("All" / "Beitou Hot Spring Hotel" / "Jiaoxi Hot Spring Hotel" ...)

### Inputs

**Hero Search Field**
- Background: transparent (sits inside the white booking toolbar)
- Text: `#000000` (87% black)
- Radius: 0px
- Padding: 8px 16px
- Height: 40px
- Font: 16px / 400
- Use: "Search for products or locations" field, paired with the orange submit button

### Navigation
- White toolbar on the grey canvas; brand logotype left in orange-red `#ff5537`
- City selector button at 17px / 400, black text, Material ripple
- Right cluster: outlined teal Download App, text-style Login / Sign Up
- Booking parameter bar (Category / Now / Date / Time / Pax) as a row of 40px text buttons over the hero

---
**Verified:** 2026-06-10
**Tier 1 sources:** https://www.myfunnow.com/en (homepage, live computed-style inspect); https://www.myfunnow.com/en/regions/1/categories/10265 (category listing surface, live inspect); https://www.events.myfunnow.com/booking-en (FunNow Booking merchant surface, live inspect); https://blog.myfunnow.com (official FunNow blog); https://www.events.myfunnow.com/whyfunnow-zh (official Why FunNow brand page)
**Tier 2 sources:** none available (getdesign.md/funnow → 404 "No designs found"; styles.refero.design/?q=funnow → not listed, search returned unrelated brands only)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 4px Material grid
- Observed scale: 2px, 8px, 12px, 16px (button paddings 0 8px / 0 12px / 0 16px, badge 2px 8px, input 8px 16px)
- Component heights are the real rhythm: 36px header buttons, 40px toolbar controls and inputs, 48px filter tabs

### Grid & Container
- Full-width white toolbar over a centered content column on the `#f4f4f5` canvas
- Hero: headline + booking parameter bar (Category/Now/Date/Time/Pax) + search field — the booking funnel IS the hero
- Inventory below as horizontal carousels ("Top Brands", "Trending Themes") and vertical card lists
- Category pages: title + intro, horizontally scrollable filter tab bar, then the card grid

### Whitespace Philosophy
- **Density over air**: this is a marketplace — cards pack tightly so a screen shows maximum bookable inventory.
- **Canvas does the separating**: the grey `#f4f4f5` gutter between flat white cards replaces borders and shadows.
- **Chrome stays thin**: a single 64px-class toolbar and slim tab bars; vertical space is spent on listings, not branding.

### Border Radius Scale
- Standard (4px): buttons, cards, badges, dialogs — the universal Material radius
- Slightly relaxed (5px): CTAs on the events/merchant surfaces
- No pills, no large rounding anywhere in the core product

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Product tiles (`v-card--flat`), canvas, tab bars |
| Raised (Level 1) | Material elevation stack `rgba(0,0,0,0.2)` / `rgba(0,0,0,0.14)` layers | Raised search CTA, city-selector button ripple chrome |
| Overlay | `rgba(0,0,0,0.4)` scrim | Image overlays / gradient bottoms on photo cards |

**Shadow Philosophy**: FunNow inverts the usual Material habit — the framework ships elevation, but the product flattens it. Listing tiles are explicitly `v-card--flat`; separation comes from the grey canvas showing between white cards. The only elevation that survives is the default Material button shadow on a handful of raised controls. Photography supplies all perceived depth: cards are image-led, and a 40%-black scrim carries text over photos. Keeping chrome flat makes the orange urgency tags and indigo deal tags the highest-contrast objects on screen, which is exactly the booking-funnel priority.

## 7. Do's and Don'ts

### Do
- Reserve solid `#ff5537` fills for "book/act now" moments — one solid button per view
- Use indigo `#5a69eb` only for time-limited deals so urgency types stay distinguishable
- Keep teal `#4dcbcb` as an outlined secondary (border + label), never as a fill competing with orange
- Keep every radius at 4px — Material conservatism is part of the utilitarian read
- Let photography carry appeal; keep card chrome flat and white on the `#f4f4f5` canvas
- Anchor microcopy in time ("Available now", "Book For 06:00") — immediacy is the brand promise
- Use the Helvetica Neue + PingFang TC stack so EN/TC render at parity

### Don't
- Spread orange-red across decorative elements — it must keep meaning "bookable right now"
- Add drop shadows to product tiles — the catalog is flat by design
- Introduce display fonts or oversized hero type — 36px/500 is the ceiling
- Use pill or large-radius buttons — nothing rounder than 5px exists in the system
- Mix the deal color and the availability color — indigo and orange-red have separate jobs
- Dress up empty space — density is a feature of a spontaneity marketplace

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <600px | Single-column cards, booking bar collapses, app-download banner prominent |
| Tablet | 600–960px | 2-up card grids, condensed toolbar |
| Desktop | 960–1440px | Full toolbar with city selector + booking parameters, multi-column carousels |

### Touch Targets
- 40px toolbar controls and 48px filter tabs — comfortably tappable
- Card tiles are full-surface tap targets linking to the booking flow
- Header actions at 36px height with ripple feedback

### Collapsing Strategy
- The booking parameter bar (Category/Now/Date/Time/Pax) folds into stacked sheet pickers on mobile
- Carousels keep horizontal scroll at every width — inventory rows never stack into long verticals
- The web experience funnels mobile users toward the app (teal Download App CTA persists)

### Image Behavior
- Card photos crop to fixed tile ratios; text sits on a bottom scrim where overlaid
- Tags ("Available now", flash sale) stay pinned to consistent card corners at all sizes

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA / urgency: FunNow Orange-Red (`#ff5537`)
- Flash-sale tag: Indigo (`#5a69eb`)
- Secondary outline CTA: Teal (`#4dcbcb`)
- Rating/promo accent: Amber (`#ffb107`)
- Page background: Canvas Grey (`#f4f4f5`)
- Card surface: White (`#ffffff`)
- Body text: Ink Charcoal (`#252729`)
- Muted text: Grey (`#a7a7a9`)
- Brand tints: Peach (`#ffd8d1`), Blush (`#ffeeeb`)

### Example Component Prompts
- "Create a booking toolbar: white bar on #f4f4f5 page. Text buttons (transparent, black text, 4px radius, 40px height, 17px Helvetica Neue) for Category / Now / Date / Time / Pax, a 16px search input, and an orange submit button: #ff5537 background, white text, 4px radius, 0 16px padding, 40px height, subtle Material elevation."
- "Design a product tile: white #ffffff card, 4px radius, NO shadow, on #f4f4f5 canvas. Photo top with a 12px/500 'Available now' tag (#ff5537 bg, white text, 4px radius, 2px 8px padding) pinned to the corner. Name at 15px/400 #252729, amber #ffb107 rating row, price accent in #ff5537."
- "Build a flash-sale tag: #5a69eb background, white text, 4px radius, 0 8px padding, 12px/400 — label '06:00 Flash Sale'."
- "Create a filter tab bar: horizontal scroll, 48px tall tabs, 17px/400 labels, inactive #252729, active #ff5537, 0 16px padding, white background."
- "Header actions: outlined Download App button (transparent bg, 1px solid #4dcbcb border, #4dcbcb text, 4px radius, 36px height, 15px) next to a quiet text button 'Login / Sign Up' (black text, no border)."

### Iteration Guide
1. One solid orange button per view — everything else is text or outline style
2. 4px radius universally; 36/40/48px control heights are the vertical rhythm
3. Flat cards on grey canvas; never add tile shadows
4. Indigo = timed deal, orange-red = available/book, teal = app/secondary — don't swap jobs
5. Helvetica Neue + PingFang TC, 15px body, hero capped at 36px/500
6. Write time into the UI copy ("now", "tonight", "06:00") — urgency is verbal as well as visual

---

## 10. Voice & Tone

FunNow's voice is **spontaneous, friendly, and deal-smart** — a fun-loving local friend who knows where you can get in *tonight* and what it should cost. Copy is short, imperative, and time-anchored: the product speaks in "now" ("Available now", "Book For 06:00"). In Traditional Chinese the register is upbeat and benefit-led, comfortable with exclamation marks ("線上一鍵預訂，線下即刻出發！") in a way the system's Western peers are not — energy is part of the brand. English copy stays casual and second-person: "Enjoy your life the way you want."

| Context | Tone |
|---|---|
| Hero headlines | Invitation to act tonight. "Explore & book your fun activities in Taipei｜Taoyuan now". |
| Subtitles / mission lines | Lifestyle permission. "Enjoy your life the way you want." |
| Urgency tags | Telegraphic, time-stamped. "Available now", "06:00 Flash Sale", "Book For 06:00". |
| Deal copy (TC) | Energetic, benefit-first, exclamatory. "尖峰有優惠，離峰更划算！" |
| Merchant surfaces | Confident B2B plain talk. "Help you stay on top", "Grow with Us". |
| Help / FAQ | Practical and procedural — booking, refund, and arrival mechanics. |

**Voice samples (verbatim):**
- "Explore & book your fun activities in Taipei｜Taoyuan now" — homepage hero H1 *(verified live 2026-06-10)*
- "Enjoy your life the way you want." — homepage hero H2 *(verified live 2026-06-10)*
- "Book motel & hotel, massage & spa, restaurants & bars and more in Taipei within a few clicks!" — homepage section heading *(verified live 2026-06-10)*
- "線上一鍵預訂，線下即刻出發！" ("One-click booking online, head out instantly offline!") — official Why FunNow page *(fetched 2026-06-10)*
- "尖峰有優惠，離峰更划算！" ("Deals at peak, even better off-peak!") — official Why FunNow page *(fetched 2026-06-10)*

**Forbidden register**: luxury-travel formality, slow "plan your itinerary" OTA language, guilt or FOMO-shaming, jargon about inventory/yield (that's merchant-side vocabulary only).

## 11. Brand Narrative

FunNow was founded in **Taipei in November 2015** by **TK Chen (陳庭寬)** and co-founders under the company Zoek (the "© Zoek" still in the site footer). Chen, a former ING investment analyst who had lived in the Netherlands, took a yield-management insight personal: the moment a plane takes off, an empty seat is worth nothing — and across Asia's cities the same was true of the 8pm massage slot, the un-booked hot-spring room, the empty bar table. FunNow positioned itself as 亞洲首款主打「最後一分鐘」的預訂平台 — Asia's first booking platform built around the last minute — with the tagline **"Last minute unlimited"**.

The model is urban spontaneity as infrastructure: 即時預訂都會享樂的第一選擇 ("the first choice for instant booking of urban pleasures"), spanning restaurants, bars, massage & spa, hotels and motels, hot springs, and activities — bookable in a few taps for *right now*, with dynamic off-peak pricing that fills merchants' dead hours ("尖峰有優惠，離峰更划算！"). The company raised a **$5M Series A in 2018** and a **$15M Series B in 2021** (both covered by TechCrunch), expanded to Hong Kong, Malaysia, Japan and Southeast Asia, and in **September 2023 merged with Eatigo**, one of SEA's largest O2O booking platforms, forming the FunNow Group.

What FunNow refuses: the plan-ahead solemnity of traditional OTAs, phone-call reservations and queues ("免排隊、免打電話"), and any UI ornamentation that slows the catalog down. What it embraces: a flat, fast Material marketplace where photography sells the experience, an orange-red mark that always means "you can have this now", and a stated mission of 隨心所欲享受生活 — letting people enjoy life on their own terms through simple, reliable booking.

## 12. Principles

1. **Now is the product.** The platform's entire reason to exist is the last minute. *UI implication:* surface real-time availability ("Available now") and time-stamped deals ("06:00 Flash Sale") as first-class card elements; default the booking flow to "Now".
2. **One color means go.** Orange-red `#ff5537` is rationed to bookable/act-now moments. *UI implication:* one solid orange element per view; deals get indigo, secondary actions get teal outline — never blur the jobs.
3. **Catalog speed over chrome.** Spontaneous users decide in seconds. *UI implication:* flat cards, 4px radii, dense grids, no shadows or decorative depth that slows scanning.
4. **Photography sells, UI serves.** The experience photo is the persuasion layer. *UI implication:* image-led tiles with thin neutral chrome; text over photos rides a scrim, not a styled panel.
5. **Off-peak is a win, not a discount bin.** Dynamic pricing reframes empty hours as smart deals. *UI implication:* deal tags read energetic and positive (indigo + exclamatory copy), never apologetic clearance styling.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable FunNow user segments (urban last-minute bookers in Taiwan and SEA, deal-driven diners, merchant partners), not individual people.*

**林佳穎, 27, 台北.** A marketing exec whose plans start at 7pm when the group chat decides tonight is the night. Opens FunNow for a bar or late-night hot spring, filters by "Now", and books in under a minute. Trusts the "Available now" tag literally — if it lies once, she's gone.

**Marcus Tan, 33, Kuala Lumpur.** A deal-savvy foodie who plans dinner around flash sales. Watches the indigo timed-deal tags, compares off-peak prices, and treats FunNow as a game he wins. Came via the Eatigo merger and expects the same discount clarity.

**張媽媽 & family, 45, 宜蘭.** Weekend spontaneity with kids: a same-day Jiaoxi hot-spring room without phone calls. Values real reviews and refund clarity over aesthetics; books the family slot from the sofa at 10am for 1pm.

**Kenji, 38, Okinawa restaurant owner.** A merchant using FunNow Booking to fill weekday-afternoon dead hours. Cares about the dashboard ("Help you stay on top"), upfront deposits cutting no-shows, and Reserve with Google traffic — the B2B face of the same urgency engine.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no results in filter)** | White card area on `#f4f4f5` canvas, one Ink (`#252729`) line stating no venues match this time/category, plus a text-button suggestion to switch to "Now" or clear filters. No illustration clutter. |
| **Empty (no flash sales running)** | Muted (`#a7a7a9`) single line; next scheduled sale time shown if known — time-anchored even when empty. |
| **Loading (listing fetch)** | Flat skeleton tiles at final card dimensions (4px radius) on the grey canvas — no shimmer theatrics, consistent with the shadowless catalog. |
| **Loading (availability check)** | Inline spinner replacing the orange CTA label; card stays in place, previous price visible. |
| **Error (booking failed)** | Inline message above the CTA in plain language: what failed (slot taken / payment) and the next action (pick another time). Never a bare "Error occurred". |
| **Error (slot just sold out)** | The honest marketplace case: tag flips from "Available now" to a muted sold-out state, with nearest alternative times offered immediately. |
| **Success (booking confirmed)** | Confirmation screen with time, venue, and party size restated — the reservation is the receipt. Calm, factual; the excitement already happened. |
| **Skeleton** | `#ffffff` blocks at final tile dimensions on `#f4f4f5`, 4px radius, flat pulse. |
| **Disabled** | Muted grey (`#a7a7a9`) labels on flat surfaces; orange CTAs fade in opacity rather than turning grey, preserving the "go" color's meaning. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 100ms | Ripple feedback, tab switches, tag appearance |
| `motion-standard` | 200ms | Card hover, sheet/picker open, carousel snap |
| `motion-slow` | 300ms | Page-level transitions, dialog entry |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-standard` | `cubic-bezier(0.4, 0.0, 0.2, 1)` | Material standard — most transitions |
| `ease-decelerate` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Entering elements (sheets, dialogs) |
| `ease-accelerate` | `cubic-bezier(0.4, 0.0, 1, 1)` | Exits and dismissals |

**Motion rules**: FunNow inherits Material motion and keeps it functional — ripple on every tap, fast tab transitions, carousels that snap. Urgency elements may pulse subtly (flash-sale countdowns), but listing tiles never animate on scroll: catalog scanning speed outranks delight. No spring or bounce — the energy lives in the copy and color, not in physics. Under `prefers-reduced-motion: reduce`, ripples and pulses collapse to instant state changes; the booking flow remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-10) via playwright getComputedStyle on
https://www.myfunnow.com/en, https://www.myfunnow.com/en/regions/1/categories/10265,
and https://www.events.myfunnow.com/booking-en — source for all token-level claims
(§1–9: #ff5537 CTA/tags, #4dcbcb outline, #5a69eb flash tags, #f4f4f5 canvas,
flat v-card tiles, 4px radii, Helvetica Neue + PingFang TC stack).

Voice samples (§10) are verbatim from the live homepage (hero H1/H2, section heading,
2026-06-10) and from https://www.events.myfunnow.com/whyfunnow-zh (official brand page,
fetched 2026-06-10: "線上一鍵預訂，線下即刻出發！", "尖峰有優惠，離峰更划算！",
"Last minute unlimited", "亞洲首款主打「最後一分鐘」的預訂平台",
mission "我們希望讓你透過簡單、可靠的預訂，隨興成行，達到隨心所欲享受生活的願景。").

Brand narrative (§11) facts: founded November 2015 in Taipei; co-founder/CEO TK Chen
(陳庭寬), ex-ING investment analyst, company Zoek; $5M Series A (TechCrunch, 2018-08-12);
$15M Series B (TechCrunch, 2021-11-08); merger with Eatigo (TechCrunch, 2023-09-11);
expansion to HK/Malaysia/Japan/SEA (Meet Global / bnext coverage). The empty-seat
yield insight is from published founder-story coverage (Meet Global), paraphrased.

Personas (§13) are fictional archetypes informed by publicly observable FunNow user
segments. Names are illustrative; they do not refer to real people.

Interpretive claims (e.g., "traffic-light accent economy", "the framework ships
elevation but the product flattens it", "off-peak as a win not a discount bin") are
editorial readings connecting FunNow's observed design and stated positioning,
not directly sourced FunNow statements.
-->
