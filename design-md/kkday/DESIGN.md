---
id: kkday
name: KKday
country: TW
category: ecommerce
homepage: "https://www.kkday.com"
primary_color: "#FF5C00"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=kkday.com&sz=128"
verified: "2026-05-19"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#ff5c00"
    primary-hover: "#e65300"
    brand: "#ff5c00"
    canvas: "#ffffff"
    foreground: "#1a1a1a"
    muted: "#888888"
    on-primary: "#ffffff"
    surface: "#f7f7f8"
    hairline: "#e5e5e6"
    border-mid: "#d9d9d9"
    body: "#4a4a4a"
    brand-tint: "#fff0e8"
    success: "#1fa463"
    warning: "#f5a623"
    error: "#e0353b"
    rating: "#ffb400"
  typography:
    family: { sans: "-apple-system", mono: "SF Mono" }
    hero:            { size: 32, weight: 700, use: "Hero headline" }
    section-heading: { size: 23, weight: 700, use: "Section heading" }
    card-heading:    { size: 19, weight: 700, use: "Card heading" }
    price:           { size: 18, weight: 700, use: "Price, prominent bold" }
    body:            { size: 15, weight: 400, use: "Body, card title" }
    body-small:      { size: 13, weight: 400, use: "Location label, secondary" }
    caption:         { size: 12, weight: 400, use: "Caption, meta" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 40, xxl: 64 }
  rounded: { sm: 4, md: 8, lg: 8, full: 9999 }
  shadow:
    card: "0 2px 8px rgba(0,0,0,0.08)"
    header: "0 1px 4px rgba(0,0,0,0.06)"
    dropdown: "0 4px 16px rgba(0,0,0,0.12)"
    modal: "0 8px 32px rgba(0,0,0,0.2)"
  components_harvested: true
  components:
    button-primary: { type: button, bg: "#ff5c00", fg: "#ffffff", radius: "8px", padding: "10px 20px", font: "16px / 600", hover: "#e65300", use: "Book Now, Add to Cart, primary conversion CTA" }
    button-outline: { type: button, bg: "#ffffff", fg: "#1a1a1a", border: "1px solid #d9d9d9", radius: "8px", padding: "10px 20px", font: "16px / 600", hover: "#f7f7f8", use: "View Details, secondary actions" }
    button-ghost: { type: button, bg: "transparent", fg: "#ff5c00", radius: "8px", padding: "8px 12px", use: "Inline tertiary actions, See more" }
    input: { type: input, bg: "#ffffff", fg: "#1a1a1a", border: "1px solid #d9d9d9", radius: "8px", padding: "10px 14px", font: "16px / 400", focus: "border #ff5c00", states: "error border #e0353b", use: "Search, traveler details, contact forms" }
    card-experience: { type: card, bg: "#ffffff", border: "1px solid #e5e5e6", radius: "8px", padding: "0", use: "Grid product card, image-led with title/rating/price/trust chips" }
    badge-sale: { type: badge, bg: "#ff5c00", fg: "#ffffff", radius: "4px", padding: "2px 6px", font: "12px / 700", use: "Discount/sale ribbon on product image" }
    badge-trust: { type: badge, bg: "#fff0e8", fg: "#1fa463", radius: "4px", padding: "2px 8px", font: "12px / 500", use: "Instant confirmation, Free cancellation" }
    badge-urgency: { type: badge, bg: "transparent", fg: "#f5a623", font: "12px / 600", use: "Only 2 left, Selling fast" }
    tab-nav: { type: tab, fg: "#1a1a1a", font: "15px / 500", active: "orange #ff5c00 active/hover accent", use: "Sticky header nav links" }
---

# Design System Inspiration of KKday

## 1. Visual Theme & Atmosphere

KKday is a Taiwan-born online travel marketplace — the place a traveler books a tea-ceremony in Kyoto, a SIM card for Bangkok, or a high-speed-rail pass before a trip — and its design system is built for one job: turning the overwhelming abundance of "things to do" into a confident, scannable, conversion-ready surface. The atmosphere is **bright, warm, and energetic**, anchored by a saturated travel-orange (`#FF5C00`) that behaves like a sunrise over a white, photography-dense canvas. Where a luxury OTA might whisper in muted neutrals, KKday is unembarrassed about enthusiasm: orange CTAs, big colorful destination imagery, and price/discount signals that pop. The feel is closer to a vibrant night-market stall than a quiet concierge desk — abundance presented cleanly.

Typography runs a **locale-aware system stack** (no custom display typeface), leading with Latin system sans and layering Traditional Chinese (`PingFang TC`, `Microsoft JhengHei`), Simplified Chinese, Japanese, Korean, and Thai fallbacks — because KKday operates across 90+ markets and every traveler must read in their own script. Hierarchy is **weight- and color-driven**: bold product titles, bold prices, lighter metadata, with orange reserved for action and price-urgency. The layout is **card-grid first** — products, experiences, and destinations all resolve to image-led cards in responsive grids, optimized for browse-many-options behavior.

What distinguishes KKday from a generic e-commerce template is the discipline around its single hot color. Orange is the **action and conversion signal** — primary CTAs, "Book Now", sale badges, selected states — and the rest of the palette stays deliberately neutral so that orange always reads as "do this next." It is a high-density commerce surface engineered for a traveler comparing twelve tours at once, where warmth invites and orange directs.

**Key Characteristics:**
- **Travel-orange (`#FF5C00`)** as the singular hot/action color — CTAs, sale badges, selected states
- Locale-aware system font stack (TC / SC / JP / KR / TH fallbacks) — no custom typeface, design-as-localization
- White-dominant, photography-dense canvas — destination/experience imagery carries the page
- Card-grid-first layout for browse-many-options travel-marketplace behavior
- Weight + color drive hierarchy: bold titles, bold prices, neutral metadata
- Conservative radius (`8px` workhorse on cards/buttons, smaller on badges) for a clean commerce feel
- Price and discount signals are first-class — strikethrough originals, orange sale emphasis
- Trust signals everywhere — ratings, review counts, "instant confirmation", "free cancellation" chips
- Warm, enthusiastic, abundance-clean register — the night-market energy, organized
- Neutral gray scale for text hierarchy so orange never has to compete

## 2. Color Palette & Roles

> **Note:** Live computed-style verification was not completed this pass (the inspection browser session redirected unreliably). Values below combine the brief-provided primary, KKday's known orange-led commerce identity, and conventional OTA roles. Treat hexes other than the primary as well-grounded approximations pending live re-inspection.

### Primary (Action / Hot)
- **KKday Orange** (`#FF5C00`): Primary brand + action color. Primary CTAs ("Book Now", "Add to Cart"), selected states, key emphasis, sale signal. The sunrise.
- **Orange Hover** (`#E65300`): Darker press/hover state for orange CTAs.
- **Orange Tint** (`#FFF0E8`): Very light orange wash for selected-card backgrounds, highlight rows, soft emphasis surfaces.

### Surface & Background
- **Pure White** (`#FFFFFF`): Card surfaces, primary content background.
- **Surface Soft** (`#F7F7F8`): Grouped section background, page tint between white cards.
- **Surface Hover** (`#EEEEEF`): Hover/pressed neutral surface.

### Neutral / Text
- **Text Primary** (`#1A1A1A`): Headings, product titles, prices. Near-black for maximum legibility against dense imagery.
- **Text Secondary** (`#4A4A4A`): Secondary copy, descriptions.
- **Text Muted** (`#888888`): Metadata, timestamps, location labels, captions.
- **Text Disabled** (`#BDBDBD`): Disabled labels, strikethrough original prices.

### Borders & Dividers
- **Border Light** (`#E5E5E6`): Row dividers, soft separators.
- **Border Mid** (`#D9D9D9`): Component borders (inputs, outlined cards, secondary button outline).

### Semantic
- **Success / Confirmed** (`#1FA463`): "Instant confirmation", availability, success toasts. Travel-green, trustworthy.
- **Warning** (`#F5A623`): Limited-availability, "only 2 left" urgency. Amber, distinct from the orange action color.
- **Error / Danger** (`#E0353B`): Form validation, failed payment, destructive actions.
- **Rating Gold** (`#FFB400`): Review-star fills — the trust signal color, separate from the orange brand.

### Accent (legacy)
- **Heritage Teal** (`#26BEC9`): An older KKday brand teal documented in brand-asset aggregators; treat as a legacy/secondary accent, not the current primary. Modern surfaces lead with orange.

## 3. Typography Rules

### Font Stack (locale-aware, inferred from OTA/TW conventions)
| Locale | Stack |
|---|---|
| Default | `-apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif` |
| Traditional Chinese | `… "PingFang TC", "Microsoft JhengHei", sans-serif` |
| Simplified Chinese | `… "PingFang SC", "Microsoft YaHei", sans-serif` |
| Japanese | `… "Hiragino Kaku Gothic Pro", "Meiryo", sans-serif` |
| Korean | `… "Apple SD Gothic Neo", "Malgun Gothic", sans-serif` |
| Thai | `… "Thonburi", "Noto Sans Thai", sans-serif` |

No custom web font — system stacks keep LCP fast across slow APAC connections and respect each market's native reading habits.

### Weights
- **700 (Bold)**: Product titles, prices, section headings, CTA emphasis.
- **600 (Semibold)**: Subheads, button labels, selected tabs.
- **400 (Regular)**: Body, descriptions, metadata.

### Size Scale (px, inferred)
| Use | Size |
|---|---|
| Caption / meta | `12px` |
| Body small / location label | `13px` |
| Body / card title | `14–16px` |
| Price | `16–20px` (bold) |
| Card heading | `18–20px` |
| Section heading | `22–24px` |
| Hero headline | `28–36px` |

### Conventions
- **Hierarchy is weight + color**, not extreme size — commerce density favors compact headings (16–20px) over 48px display type.
- **Prices are bold and prominent**; original (pre-discount) prices use `text-decoration: line-through` in muted gray.
- **Star ratings + review counts** sit next to titles as compact trust signals (`4.8 · 1,240`).
- **Numerals flow with prose** — no forced tabular figures except in pricing tables.

## 4. Component Stylings

### Buttons

**Primary (Book / Action)**
- Background: `#FF5C00`
- Text: `#FFFFFF`
- Border: none
- Radius: `8px`
- Padding: `10px 20px`
- Font: `16px` / `600`
- Hover: bg `#E65300`
- Use: "Book Now", "Add to Cart", primary conversion CTA

**Secondary (Outlined)**
- Background: `#FFFFFF`
- Text: `#1A1A1A`
- Border: `1px solid #D9D9D9`
- Radius: `8px`
- Padding: `10px 20px`
- Font: `16px` / `600`
- Hover: bg `#F7F7F8`
- Use: "View Details", neutral/secondary actions

**Ghost / Text**
- Background: transparent
- Text: `#FF5C00`
- Radius: `8px`
- Padding: `8px 12px`
- Use: Inline tertiary actions, "See more"

### Inputs

**Default**
- Background: `#FFFFFF`
- Text: `#1A1A1A`
- Border: `1px solid #D9D9D9`
- Radius: `8px`
- Padding: `10px 14px`
- Font: `16px` / `400`
- Focus: border `#FF5C00`
- Error: border `#E0353B`
- Use: Search, traveler details, contact forms

**Search (hero)**
- Background: `#FFFFFF`
- Border: `1px solid #D9D9D9` (or shadowed pill on hero)
- Radius: `8px`
- Trailing: orange search-submit button (`#FF5C00`)
- Use: Destination/experience search — the primary discovery entry point

### Cards

**Experience Card**
- Background: `#FFFFFF`
- Border: `1px solid #E5E5E6` (or shadow-separated)
- Radius: `8px`
- Padding: `0` (image-led top, padded body)
- Use: Grid product card — image, title (2-line clamp), rating + review count, price (bold), trust chips

**Destination Card**
- Background: image-led with gradient overlay
- Radius: `8px`
- Text: white overlay on darkened image bottom
- Use: Destination discovery tiles

### Badges & Chips

**Sale Badge**
- Background: `#FF5C00`
- Text: `#FFFFFF`
- Radius: `4px`
- Padding: `2px 6px`
- Font: `12px` / `700`
- Use: Discount/sale ribbon on product image

**Trust Chip**
- Background: `#FFF0E8` or `#FFFFFF`
- Text: `#1FA463` (confirmed) / `#1A1A1A`
- Radius: `4px`
- Padding: `2px 8px`
- Font: `12px` / `500`
- Use: "Instant confirmation", "Free cancellation", "Mobile voucher"

**Urgency Chip**
- Background: transparent
- Text: `#F5A623`
- Font: `12px` / `600`
- Use: "Only 2 left", "Selling fast"

### Navigation
- Sticky white header: logo left, search center, locale/currency + account right
- Category mega-menu on hover (Tours, Tickets, Transport, SIM/WiFi, Hotels)
- Nav links `14–16px` / `400–500`, orange active/hover accent

## 5. Layout Principles

### Grid
- Responsive card grid: 4 columns desktop → 3 → 2 → 1 mobile
- Container max-width ~1200px, centered, with consistent gutters
- Horizontal scroll carousels for curated collections (destinations, "popular near you")

### Spacing
- 8px-based spacing scale
- Tight card internals (8–12px), generous section rhythm (40–64px)

### Density
KKday is **medium-high density** — a traveler compares many options at once, so cards pack efficiently while staying scannable. Whitespace is functional (separating cards, framing imagery), not luxurious.

## 6. Depth & Elevation

KKday leans **mostly flat with soft commerce shadows**. Cards separate via a 1px border or a subtle shadow; orange CTAs are flat (color is the weight).

- **Card shadow**: `0 2px 8px rgba(0,0,0,0.08)` — soft lift on hover for grid cards
- **Sticky header**: `0 1px 4px rgba(0,0,0,0.06)` on scroll
- **Dropdown / mega-menu**: `0 4px 16px rgba(0,0,0,0.12)`
- **Modal**: `0 8px 32px rgba(0,0,0,0.2)`
- Buttons carry **no shadow** — flat orange does the work.

### Z-Index
- Sticky header above content; mega-menu above header; modals above all chrome; toasts highest.

## 7. Do's and Don'ts

- **DO** reserve orange (`#FF5C00`) for action and conversion — primary CTAs, sale badges, selected states.
- **DON'T** flood layouts with orange. It signals "do this next" only because the rest is neutral.
- **DO** use the locale-aware font stack with the user's language fallback second.
- **DON'T** load a single custom web font — system stacks respect each market and keep APAC LCP fast.
- **DO** keep cards image-led with bold titles, bold prices, and compact trust chips.
- **DON'T** bury price or rating — they are primary scan targets for a comparing traveler.
- **DO** use `8px` radius on cards/buttons, `4px` on badges.
- **DON'T** use pill-fully-rounded CTAs — they break the clean commerce density.
- **DO** distinguish urgency-amber (`#F5A623`) from action-orange (`#FF5C00`) and success-green (`#1FA463`).
- **DON'T** conflate the brand orange with the error red or rating gold.
- **DO** show trust chips ("Instant confirmation", "Free cancellation") — they reduce booking anxiety.
- **DON'T** use shouty discount adjectives; the sale badge + strikethrough price carry the message.

## 8. Responsive Behavior

### Breakpoints
| Width | Behavior |
|---|---|
| Desktop `>1200px` | 4-column grid, full nav + mega-menu, centered container |
| Laptop `1024–1200px` | 3–4 column grid, condensed nav |
| Tablet `768–1024px` | 2–3 column grid, search collapses |
| Mobile `<768px` | 1–2 column grid, hamburger nav, full-width orange CTAs, sticky bottom "Book" bar on product pages |

### Touch & Mobile
- Full-width primary CTA at viewport bottom on product detail (sticky book bar)
- Filter sidebar becomes a bottom sheet
- Horizontal carousels for curated collections
- Large tap targets (44px+) on cards and CTAs

### Image Behavior
- Destination/experience images dominate cards; `object-fit: cover`, fixed aspect ratio
- Lazy-load + responsive srcset; WebP standard

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary / action: KKday Orange (`#FF5C00`); hover `#E65300`; tint `#FFF0E8`
- Text primary: `#1A1A1A`; muted: `#888888`
- Surface: white `#FFFFFF`; soft `#F7F7F8`
- Border: `#D9D9D9`
- Success: `#1FA463`; Warning/urgency: `#F5A623`; Error: `#E0353B`; Rating gold: `#FFB400`

### Example Component Prompts
- "Create a KKday experience card: white bg, 8px radius, 1px solid #E5E5E6, image fills top with `object-fit: cover`, sale badge top-left (`#FF5C00` bg, white, 4px radius, 12px/700), body padding 12px, title 16px/700 #1A1A1A (2-line clamp), rating row `4.8 · 1,240` in 13px #888888 with #FFB400 stars, price 18px/700 #1A1A1A with strikethrough original in muted gray, trust chip 'Instant confirmation' in #1FA463."
- "Build a KKday primary CTA: `#FF5C00` bg, white text, 8px radius, 16px/600, padding 10px 20px, no shadow. Hover bg `#E65300`. Label 'Book Now'."
- "Design a KKday hero search: white pill/box, 1px solid #D9D9D9, 8px radius, destination input + date + travelers, trailing orange (`#FF5C00`) search button. Soft shadow `0 4px 16px rgba(0,0,0,0.12)`."
- "Create a sticky mobile book-bar: white bar at viewport bottom, price left (18px/700), full-width-ish orange 'Book Now' CTA right (`#FF5C00`, 8px radius)."

### Iteration Guide
1. **Orange is action; keep the rest neutral.** It must always read as "do this next."
2. **Locale-aware font stack, never a single custom font.**
3. **Cards: image-led, bold title, bold price, trust chips.** Price and rating are primary scan targets.
4. **8px radius (cards/buttons), 4px (badges).** No fully-rounded CTAs.
5. **Separate the warm colors:** action-orange ≠ urgency-amber ≠ rating-gold ≠ success-green.
6. **Medium-high density** — travelers compare many options; pack cards, ration whitespace.
7. **Trust chips reduce booking anxiety** — surface confirmation/cancellation policy.

---

## 10. Voice & Tone

KKday speaks like an enthusiastic local friend who has actually done the tour — warm, specific, and encouraging, never pushy. The register is **inviting and benefit-led**: it sells the feeling of the experience ("explore", "dream", "discover") and backs it with concrete trust ("instant confirmation", "free cancellation"). The brand is genuinely multilingual — Traditional Chinese, English, Japanese, Korean, Thai, and more are first-class voices authored per market, not translated from one master. Copy avoids hard-sell discount-shouting; urgency, when present, is factual ("only 2 left") rather than manipulative. The homepage line "EXPLORE. DREAM. DISCOVER" captures the tone — aspirational verbs, clean and unhyped.

| Context | Tone |
|---|---|
| Hero / discovery | Aspirational verbs. `Explore. Dream. Discover.` Invitational, not transactional. |
| CTAs | Imperative + concrete. `Book Now`, `Add to Cart`, `See availability`. No trailing exclamation. |
| Trust chips | Factual reassurance. `Instant confirmation`, `Free cancellation`, `Mobile voucher`. |
| Urgency | Factual scarcity only. `Only 2 left` — never `BUY NOW OR MISS OUT!`. |
| Product copy | Specific and experiential — what you'll see/do/taste, with practical logistics. |
| Empty states | One-line reason + one suggested next destination/category. Never terminal "No results". |
| Errors | Blameless, field-specific, actionable. |
| Success (booking) | Confirm what happened + next step (voucher in app / view booking). |

**Forbidden phrases.** Manipulative urgency (`HURRY!`, `LAST CHANCE!`), `Oops! Something went wrong` without a reason, `No results found.` as a dead end, hype superlatives without substance (`the best tour in the world`), approximate prices (always show exact amount in the user's currency), emoji on checkout/payment screens, Simplified-Chinese characters on TW-Traditional surfaces.

**Voice samples.**
- `EXPLORE. DREAM. DISCOVER` — homepage hero positioning <!-- verified: kkday.com/en-us hero copy via WebSearch result 2026-05-19 -->
- `Book Now` — primary conversion CTA <!-- illustrative/conventional: standard OTA CTA, not independently re-verified on live KKday surface this pass -->
- `Instant confirmation · Free cancellation` — trust chips on experience cards <!-- illustrative: conventional KKday trust signals; not live-verified this pass -->
- `Only 2 spots left for this date` — illustrative factual-urgency string <!-- illustrative: not verified as live KKday copy -->
- `No experiences match these filters yet — try a nearby date or city.` — illustrative empty state <!-- illustrative: not verified as live KKday copy -->

## 11. Brand Narrative

KKday was founded in **2014 in Taipei, Taiwan**, by **Ming Chen** — a travel-industry veteran who had previously built and taken Star Travel and Ezfly to IPO ([en.wikipedia.org/wiki/KKday](https://en.wikipedia.org/wiki/KKday)). The thesis: while flights and hotels had been commoditized online for years, the **"things to do" layer of travel — the tea ceremony, the day tour, the airport transfer, the local SIM card — remained fragmented, offline, and language-locked.** KKday set out to be the marketplace that aggregates curated local experiences and makes them bookable, in your language, before you land.

The design language is the product-surface expression of that thesis. Travel is overwhelming — there are thousands of things to do in any destination — so the system is engineered to make abundance feel **navigable and trustworthy** rather than chaotic: image-led cards for fast visual scanning, bold prices and ratings as decision anchors, and trust chips (instant confirmation, free cancellation) that defuse the anxiety of booking an experience in a place you've never been. The saturated orange is the warmth of anticipation made into an action color — the "yes, do this" of trip-planning.

KKday now operates across **90+ countries with over 300,000 curated experiences**, has raised over **US$250 million** across funding rounds (Series D of $70M in late 2024, with Japanese travel giant **H.I.S.** among its investors), and has expanded from a pure activities marketplace toward an **all-in-one travel super-app** spanning tours, tickets, transport, hotels, SIM/WiFi, and rail passes — while operating B2B and luxury-travel subsidiaries (Rezio, FineDayClub, ActivityJapan). ([en.wikipedia.org/wiki/KKday](https://en.wikipedia.org/wiki/KKday)) <!-- source: Wikipedia via WebFetch 2026-05-19; metrics not independently audited -->

## 12. Principles

1. **Orange is the path, not the paint.** The hot orange exists to point a comparing traveler at the next action. *UI implication:* One dominant orange action per decision moment (the Book CTA, the selected date). Keep surrounding surfaces neutral so orange always means "proceed."

2. **Abundance must feel navigable.** Travelers face thousands of options; the system's job is fast, confident comparison. *UI implication:* Card grids with consistent anchors — image, title, rating, price, trust chip in the same position every time. Predictable layout lowers cognitive load across many cards.

3. **Trust is a component, not a footnote.** Booking an experience abroad is anxious; reassurance must be visible at the moment of decision. *UI implication:* Surface instant-confirmation / free-cancellation / mobile-voucher chips on the card and the CTA area — not buried in fine print.

4. **Locale is infrastructure.** Every traveler reads in their own script; the brand is authored per market. *UI implication:* Always use the full locale-aware font stack; route microcopy through locale bundles; show prices in the user's currency exactly.

5. **Honest urgency only.** Scarcity signals must be factual, never manufactured. *UI implication:* Use amber `#F5A623` for real low-availability states; never use countdown manipulation or fake "selling fast" without data behind it.

6. **The image is the salesperson.** Experiences are bought on the feeling the photo evokes. *UI implication:* Cards are image-led with consistent aspect ratios and quality bars; chrome stays minimal so the destination carries the page.

## 13. Personas

*Personas are fictional archetypes informed by publicly described KKday user segments (TW/HK/JP independent travelers and APAC outbound tourists), not individual people.*

**怡君 (Yi-Jun), 28, Taipei.** Plans her own trips meticulously, opens KKday weeks before departure to pre-book day tours, airport transfers, and a SIM card for Japan. Compares a dozen tour options on rating and price, and will only book ones with "instant confirmation" because she finalizes her itinerary the night before flying.

**Kenji, 35, Osaka.** Books last-minute weekend experiences and theme-park tickets to skip ticket lines. Uses the mobile app almost exclusively, values mobile-voucher delivery, and cares most about whether the voucher works at the gate without a printout.

**Wing, 24, Hong Kong.** Budget-conscious solo traveler who discovers experiences through curated collections and social posts, bookmarks tours to a wishlist, and waits for a sale badge before booking. Reads reviews carefully and abandons anything with opaque cancellation terms.

## 14. States

| State | Treatment |
|---|---|
| **Empty (search no results)** | One `#888888` line explaining the zero-match in the user's terms + 3–5 suggested nearby-date / nearby-city chips. Never a terminal "No results". |
| **Empty (wishlist)** | One-line `#888888` explanation + secondary CTA to browse a popular destination. No illustration required. |
| **Loading (grid first paint)** | Skeleton cards at `#F7F7F8` with 8px radius matching final cards; image area fixed-aspect, title/price as gray bars. Shimmer ~1.2s. No spinner. |
| **Loading (inline action — booking)** | Orange CTA holds width; label swaps to a white 3-dot/spinner; prevents double-tap and layout shift. |
| **Error (form field)** | Border switches to `1px solid #E0353B`; helper text below in `#E0353B` 12px; field-specific and blameless. |
| **Error (payment declined)** | Escalated card at checkout top, `#E0353B` accent, one blameless sentence describing the decline + single retry in `#FF5C00`. No generic "Something went wrong" alone. |
| **Success (added to cart)** | Toast top-right, dark bg, white 14px text, 3s auto-dismiss, "View cart" action. No celebratory animation. |
| **Success (booking confirmed)** | Dedicated confirmation screen — order number, voucher access, per-experience date/time. Not a toast. No orange CTA here (the purchase moment is past). |
| **Skeleton** | `#F7F7F8` blocks at exact card dimensions; price placeholder renders as `—` in the user's currency, never `$0`. |
| **Disabled (button)** | Faded fill, `#BDBDBD` text, geometry preserved so re-enabled controls don't shift. |

## 15. Motion & Easing

KKday motion is **brisk and commerce-functional** — fast feedback, no theatrics.

**Durations:**
| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle flips, reduce-motion fallback |
| `motion-fast` | 120ms | Hover/press on cards, buttons, links |
| `motion-standard` | 200ms | Dropdowns, mega-menu, tooltip fades, cart-count update |
| `motion-slow` | 300ms | Modal open, filter bottom-sheet slide, image lightbox |
| `motion-page` | 250ms | Route transition + top progress bar |

**Easings:**
| Token | Curve | Use |
|---|---|---|
| `ease-standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | Default two-way transitions |
| `ease-enter` | `cubic-bezier(0, 0, 0.2, 1)` | Things appearing — modals, sheets, toasts |
| `ease-exit` | `cubic-bezier(0.4, 0, 1, 1)` | Dismissals |

**Spring stance.** Spring/overshoot is **avoided** — KKday is a high-density commerce surface where bouncy motion fights fast comparison and reads as a flash-sale tic. Add-to-cart and booking confirmations resolve cleanly, not elastically.

**Signature motions.**
1. **Card hover (desktop).** Subtle lift via shadow fade-in (`0 2px 8px rgba(0,0,0,0.08)`) over `motion-fast`; optional alternate-image swap. No scale jump.
2. **Filter bottom-sheet.** On mobile, the filter panel slides up over `motion-slow / ease-enter`; backdrop fades in. Dismiss reverses with `ease-exit`.
3. **Cart-count badge.** On add-to-cart, the cart badge count updates with a quiet `motion-standard` fade — no bounce.
4. **Carousel scroll.** Curated-collection carousels scroll-snap with `ease-standard`; arrows fade in on hover (desktop).

**Reduce motion.** Under `prefers-reduced-motion: reduce`, all `motion-*` collapse to `motion-instant`; sheet slides become instant opacity toggles; progress bar hidden. Hover color/shadow state changes still apply.

<!--
OmD v0.1 Sources — kkday
Created: 2026-05-19

Tier 1 (attempted): live computed-style inspection of kkday.com was NOT completed — WebFetch
returned HTTP 403 (bot challenge) and the Playwright MCP session redirected to injected ad
interstitials, making a clean DOM read impossible this pass. primary_color #FF5C00 is the
creation-brief-provided value and matches KKday's known orange-led commerce identity, but the
exact production hex and the secondary palette in §2 are NOT live-verified — they are well-grounded
approximations. A future omd:add-reference UPDATE pass with a working browser should confirm.

Note: brandcolorcode.com/kkday documents a HERITAGE teal #26BEC9 (Pantone 319C) and explicitly
states "These color values have not been given explicitly in the KKday brand guidelines." The
modern KKday product surface leads with orange; teal is treated as a legacy/secondary accent in §2.

Tier 2 (philosophy/founders):
- en.wikipedia.org/wiki/KKday (WebFetch 2026-05-19) — founded 2014 Taipei by Ming Chen (ex Star
  Travel / Ezfly); OTA experiences marketplace; 90+ countries, 300k+ experiences; >$250M raised,
  Series D $70M late 2024; H.I.S. investor; subsidiaries Rezio / FineDayClub / ActivityJapan.
- kkday.com/en-us hero "EXPLORE. DREAM. DISCOVER" (WebSearch result 2026-05-19).
- lilingh.com/projects/kkday — UX case study noting brand-color-on-white contrast was too low and
  button shades were adjusted for WCAG (informs the orange-hover / accessibility note).

Illustrative (not verified as live copy): CTA/trust-chip/empty/error strings, type scale, semantic
hexes, font stack (inferred from OTA + TW conventions). Marked inline. Personas fictional (§13).
-->

---

**Verified:** 2026-05-19
**Tier 1 sources:** kkday.com — live inspect NOT completed (403 + browser redirect); primary `#FF5C00` is brief-provided and matches KKday's orange-led identity (hexes other than primary are grounded approximations pending live re-inspection). kkday.com/en-us hero "EXPLORE. DREAM. DISCOVER" (WebSearch).
**Tier 2 sources:** brandcolorcode.com/kkday (heritage teal `#26BEC9`, noted as legacy/unofficial); lilingh.com KKday UX case study (WCAG contrast note).
**Tier 2 (Philosophy/founders):** Wikipedia (KKday — Ming Chen / 2014 Taipei / 90+ countries / H.I.S. / $250M+).
**Style ref:** `pinkoi` (TW commerce tone). **Conflicts unresolved:** exact production hexes beyond primary not live-verified this pass (browser session unreliable) — flagged for UPDATE.
