# FunNow Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

FunNow is Taiwan's on-demand "go out tonight" booking platform. This contract covers the three first-party web surfaces the source inspected live: the English consumer homepage at `myfunnow.com/en`, one category listing surface at `myfunnow.com/en/regions/1/categories/10265` (a Taipei hot-spring scope), and the FunNow Booking merchant surface at `events.myfunnow.com/booking-en`. Values stay attached to the surface that established them. The merchant surface is not treated as a proxy for the consumer product, and neither family is treated as a proxy for the app the site funnels mobile users toward, for the Help / FAQ surface, or for the official blog.

The inspected interface layer is a Material chassis. The page sits on a cool light-grey canvas (`#f4f4f5`) with flat white product cards (`#ffffff`) stacked edge to edge and no drop shadows on tiles, carrying restaurant, hot-spring, and massage listings. Text is a near-black charcoal (`#252729`) over the Material 87%-black default (`rgba(0,0,0,0.87)`), and every interactive element shares one conservative 4px corner radius. The framework is visibly Vuetify — `v-card--flat` tiles and Material ripple buttons. The brand's orange-red (`#ff5537`), the same hue the source attributes to the official favicon SVG fill, appears on the solid search CTA, the "Available now" tag, active filter tabs, price links, and the merchant-facing "Reach Out to Us" buttons. Teal (`#4dcbcb`) carries the outlined "Download App" action, indigo (`#5a69eb`) is reserved for "Flash Sale" countdown tags, and amber (`#ffb107`) appears across rating and promotional elements. Type is Helvetica Neue with PingFang TC / Microsoft JhengHei fallbacks for Traditional Chinese: body at 15px / 1.50, hero H1 at 36px / 500, category-page titles at 24px / 700, and no display face in the recorded hierarchy.

Reading that colour distribution as a "traffic-light accent economy" — orange-red means book it, indigo means the deal is expiring, teal means get the app — reading the flat white cards on the grey canvas as the reason the listings scan like a catalog, reading the Vuetify chassis as giving the product a utilitarian, app-like crispness rather than an editorial mood, and reading the whole surface as speed-first and spontaneity-flavoured, are derived editorial implementation inferences from the verified surfaces; they are not FunNow-authored or a separately published UI specification. The source itself flags "traffic-light accent economy" as one of its editorial readings.

Brand narrative recorded by the source, kept separate from the interface evidence above. FunNow was founded in **Taipei in November 2015** by **TK Chen (陳庭寬)** and co-founders under the company Zoek — the "© Zoek" the source reports still in the site footer. FunNow positions itself as 亞洲首款主打「最後一分鐘」的預訂平台 (Asia's first booking platform built around the last minute) under the tagline **"Last minute unlimited"**, and describes its scope as 即時預訂都會享樂的第一選擇 ("the first choice for instant booking of urban pleasures") — restaurants, bars, massage & spa, hotels and motels, hot springs, and activities, bookable in a few taps for right now, with dynamic off-peak pricing that fills merchants' dead hours ("尖峰有優惠，離峰更划算！"). What the brand states it refuses: the plan-ahead solemnity of traditional OTAs, and phone-call reservations and queues ("免排隊、免打電話"). Its stated mission is 隨心所欲享受生活, given in full on its own brand page as "我們希望讓你透過簡單、可靠的預訂，隨興成行，達到隨心所欲享受生活的願景。"

The evidence classes inside that narrative differ, and the source separates them. The slogans, mission line, and positioning phrases are quoted from FunNow's own Why FunNow brand page and homepage. The founding date, the founder, and the empty-seat yield-management insight that the source paraphrases as the origin idea come from published founder-story coverage, not from a FunNow statement. The **$5M Series A in 2018**, the **$15M Series B in 2021**, the September **2023 merger with Eatigo** forming the FunNow Group, and the expansion to Hong Kong, Malaysia, Japan and Southeast Asia are third-party press records the source cites rather than brand-published copy. This narrative supplies product context; it does not by itself supply interface tokens.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product's primary tasks is a derived editorial implementation inference from the verified surfaces; it is not FunNow-authored or a separately published UI specification. Each names the source passage it rests on.

- Search for something bookable right now on the consumer homepage — the source records the hero as the booking funnel itself: a booking parameter bar (Category / Now / Date / Time / Pax), the "Search for products or locations" field, and the orange submit button beside it.
- Browse and narrow a category's inventory — the source records a category page with a title, a descriptive intro, a horizontally scrollable filter tab bar ("All" / "Beitou Hot Spring Hotel" / "Jiaoxi Hot Spring Hotel" …), and a card grid, plus homepage carousels ("Top Brands", "Trending Themes").
- Reach FunNow Booking as a merchant — the source records the merchant surface with the heading "Help you stay on top" and its CTAs "Reach Out to Us" and "Grow with Us".
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source labels its four named figures as fictional archetypes rather than real people, so their names, ages, cities, and biographies are dropped rather than promoted, and no demographic segment list is carried into this document or its sidecar. What the inspected surfaces independently establish is two stakeholder groups: people booking urban leisure for immediate use on the consumer surfaces, and merchant partners addressed by the FunNow Booking surface. Reading the two live surface families as those two groups is a derived editorial implementation inference from the verified surfaces; it is not FunNow-authored or a separately published UI specification.

### Distinctive traits

These eight traits, and the readings carried inside them — the chassis read as Material conservatism, the orange-red read as rationed, the accents read as a traffic-light economy, the density read as a feature — are a derived editorial implementation inference from the verified surfaces; they are not FunNow-authored or a separately published UI specification. Each names the values it rests on.

- Material/Vuetify chassis — 4px radius everywhere, ripple buttons, flat `v-card` tiles
- Urgency-rationed orange-red (`#ff5537`) as the lone solid-fill action color
- Traffic-light accent economy: indigo (`#5a69eb`) flash sales, teal (`#4dcbcb`) app download, amber (`#ffb107`) ratings/promos
- Flat catalog depth: light-grey canvas (`#f4f4f5`) + white cards, no shadows on tiles
- Helvetica Neue + PingFang TC stack — utilitarian, bilingual-ready, no display font
- Compact 15px body with 1.50 line-height for dense listing scans
- Photography-led cards: imagery carries the appetite appeal, chrome stays neutral
- Time-anchored microcopy ("Available now", "Book For 06:00") baked into the component system

### Principles

These five items are a derived editorial implementation inference from the verified surfaces; they are not FunNow-authored or a separately published UI specification. The source states them in its own Principles section together with the UI implication it draws from each, and its closing note marks readings of this kind — "off-peak as a win, not a discount bin" among them — as editorial.

1. **Now is the product.** The platform's stated reason to exist is the last minute. *UI implication:* surface real-time availability ("Available now") and time-stamped deals ("06:00 Flash Sale") as first-class card elements; default the booking flow to "Now".
2. **One color means go.** Orange-red `#ff5537` is rationed to bookable/act-now moments. *UI implication:* one solid orange element per view; deals get indigo, secondary actions get teal outline — never blur the jobs.
3. **Catalog speed over chrome.** Spontaneous users decide in seconds. *UI implication:* flat cards, 4px radii, dense grids, no shadows or decorative depth that slows scanning.
4. **Photography sells, UI serves.** The experience photo is the persuasion layer. *UI implication:* image-led tiles with thin neutral chrome; text over photos rides a scrim, not a styled panel.
5. **Off-peak is a win, not a discount bin.** Dynamic pricing reframes empty hours as smart deals. *UI implication:* deal tags read energetic and positive (indigo + exclamatory copy), never apologetic clearance styling.

Application rules the source states as its Do list, kept as written. These seven rules, and the reasons attached to them — Material conservatism as part of the utilitarian read, immediacy as the brand promise — are a derived editorial implementation inference from the verified surfaces; they are not FunNow-authored or a separately published UI specification.

- Reserve solid `#ff5537` fills for "book/act now" moments — one solid button per view.
- Use indigo `#5a69eb` only for time-limited deals so urgency types stay distinguishable.
- Keep teal `#4dcbcb` as an outlined secondary (border + label), never as a fill competing with orange.
- Keep every radius at 4px — Material conservatism is part of the utilitarian read.
- Let photography carry appeal; keep card chrome flat and white on the `#f4f4f5` canvas.
- Anchor microcopy in time ("Available now", "Book For 06:00") — immediacy is the brand promise.
- Use the Helvetica Neue + PingFang TC stack so EN/TC render at parity.

### Avoid

The source states these as its Don't list; they are kept as its rules, reasons included. These six prohibitions, and the reasons inside them — the catalog being flat by design, density as a feature of a spontaneity marketplace — are a derived editorial implementation inference from the verified surfaces; they are not FunNow-authored or a separately published UI specification.

- Do not spread orange-red across decorative elements — it must keep meaning "bookable right now".
- Do not add drop shadows to product tiles — the catalog is flat by design.
- Do not introduce display fonts or oversized hero type — 36px / 500 is the ceiling.
- Do not use pill or large-radius buttons — nothing rounder than 5px exists in the system.
- Do not mix the deal color and the availability color — indigo and orange-red have separate jobs.
- Do not dress up empty space — density is a feature of a spontaneity marketplace.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Brand and action:

| Role | Value | Recorded use |
|---|---|---|
| FunNow Orange-Red (primary) | `#ff5537` | The brand mark color the source attributes to the official favicon SVG fill, and the system's single solid action color — search CTA, "Available now" urgency tags, active tab text, price/link accents, merchant CTAs. |
| On-Primary White | `#ffffff` | Text on orange-red and indigo fills; also the card surface color. |

Secondary accents — each is reserved for one meaning:

| Role | Value | Recorded use |
|---|---|---|
| Teal | `#4dcbcb` | Outlined-button color ("Download App" — 1px teal border, teal label) and occasional link/icon highlights. The source calls it the cool counterweight to the hot primary. |
| Flash Indigo | `#5a69eb` | Reserved exclusively for flash-sale / timed-deal tags ("Flash Sales Now", "06:00 Flash Sale"). The source reads the hue break as deliberate, so that deals read differently from availability. |
| Amber | `#ffb107` | Rating and promotional accent observed across listing surfaces — the warm "star" note in the catalog. |

Neutrals and surfaces:

| Role | Value | Recorded use |
|---|---|---|
| Ink Charcoal | `#252729` | Body text, inactive tab labels, section headings — the workhorse text color. |
| Pure Black | `#000000` | Header buttons and high-emphasis labels. Material's 87%-black (`rgba(0,0,0,0.87)`) covers default headings and inputs. |
| Muted Grey | `#a7a7a9` | Disabled/tertiary text, metadata, placeholder-level emphasis. |
| Canvas Grey | `#f4f4f5` | Page background — the cool light grey the whole catalog sits on. |
| Surface White | `#ffffff` | Product cards, toolbar, nav, dialogs. |

Tints:

| Role | Value | Recorded use |
|---|---|---|
| Peach Tint | `#ffd8d1` | Soft orange-red tint for promotional highlight surfaces. |
| Blush Tint | `#ffeeeb` | Lightest orange-red tint, used as a subtle brand-warm background wash. |

Two heading colors coexist by surface and the source keeps both rather than collapsing them: the Material 87%-black default on the consumer homepage H1, and `#252729` on the merchant headings and on body text. Keep that split.

### Spacing

Base unit: a 4px Material grid. The observed scale is 2px, 8px, 12px, and 16px — button paddings 0 8px / 0 12px / 0 16px, badge 2px 8px, input 8px 16px. The token set records the same four values as `xs: 2`, `sm: 8`, `md: 12`, `base: 16`.

The source names component heights as the real rhythm rather than the paddings: 36px header buttons, 40px toolbar controls and inputs, 48px filter tabs.

### Shape

- Standard: 4px — buttons, cards, badges, dialogs; the source calls this the universal Material radius
- Slightly relaxed: 5px — CTAs on the events/merchant surfaces

No pills and no large rounding exist anywhere in the core product; nothing rounder than 5px appears in the system.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow | Product tiles (`v-card--flat`), canvas, tab bars |
| Raised (Level 1) | Material elevation stack `rgba(0,0,0,0.2)` / `rgba(0,0,0,0.14)` layers | Raised search CTA, city-selector button ripple chrome |
| Overlay | `rgba(0,0,0,0.4)` scrim | Image overlays / gradient bottoms on photo cards |

Listing tiles are explicitly `v-card--flat`; separation comes from the grey canvas showing between white cards. The only elevation the source records is the default Material button shadow on a handful of raised controls, and a 40%-black scrim carrying text over photos. Reading that as FunNow inverting the usual Material habit — the framework ships elevation and the product flattens it, so that the orange urgency tags and indigo deal tags become the highest-contrast objects on screen — is a derived editorial implementation inference from the verified surfaces; it is not FunNow-authored or a separately published UI specification.

### Motion

The source attributes its token-level claims to a live inspection of computed color, type, spacing, radius, border, and shadow on three surfaces. The motion contract below sits outside that attribution: it is a system-level statement rather than a set of per-component measured values. The durations, easing roles, and motion rules below are therefore a derived editorial implementation inference from the verified surfaces; they are not FunNow-authored or a separately published UI specification.

Durations:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 100ms | Ripple feedback, tab switches, tag appearance |
| `motion-standard` | 200ms | Card hover, sheet/picker open, carousel snap |
| `motion-slow` | 300ms | Page-level transitions, dialog entry |

Easing roles — three roles with declared uses. The specific curve values the source lists are not traceable to FunNow evidence, so the curves are omitted and only the roles and their uses are kept:

| Token | Use |
|---|---|
| `ease-standard` | Most transitions |
| `ease-decelerate` | Entering elements (sheets, dialogs) |
| `ease-accelerate` | Exits and dismissals |

An exact curve may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework document — does not satisfy that condition.

Motion rules, as the source states them:

- FunNow inherits Material motion and keeps it functional — ripple on every tap, fast tab transitions, carousels that snap.
- Urgency elements may pulse subtly (flash-sale countdowns), but listing tiles never animate on scroll: catalog scanning speed outranks delight.
- No spring or bounce — the energy lives in the copy and color, not in physics.
- Under `prefers-reduced-motion: reduce`, ripples and pulses collapse to instant state changes; the booking flow remains fully functional.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Live computed surface-use | The inspected surfaces compute the primary stack on body text, headings, buttons, inputs, tabs, and badges. |
| Official distributed asset | The source records no FunNow-owned or FunNow-hosted type family. It states outright that there is no custom webfont. |
| Fallback stack | The Traditional Chinese and Linux faces named below are fallbacks in the stack. A fallback stack is never presented as the brand face. |
| Outside these captures | App, Help / FAQ, and blog typography sit outside the three inspected surfaces. |

### Family

- **Primary stack:** `"Helvetica Neue", Helvetica, Tahoma, Arial`
- **Traditional Chinese fallbacks:** `"PingFang TC", "Microsoft JhengHei", PMingLiU`, and WenQuanYi for Linux
- Latin-first, TC-ready, no custom webfont. The source treats this as a system stack, so do not present any single member of it as a proprietary FunNow face.

### Type roles

| Role | Size | Weight | Line height | Notes |
|---|---:|---:|---:|---|
| Display Hero (H1) | 36px | 500 | 1.22 (44px) | Homepage hero headline |
| Page Title (H1) | 24px | 700 | 1.50 | Category/listing page title |
| Section Intro (H2) | 18px | 400 | 1.50 | Category page descriptive intro |
| Subtitle / Section (H2) | 17px | 400 | 1.41 | Hero subtitle, section heads, filter tabs |
| Body | 15px | 400 | 1.50 (22.5px) | Default document text, header buttons |
| Control / CTA | 14px | 400 | 1.00 | Primary button, small controls |
| Badge / Tag | 12px | 400–500 | 1.30 | Urgency and flash-sale tags |

Line heights are kept in the form the source verified them: unitless ratios, with the px equivalents the source itself spelled out for the hero and body roles shown beside them.

### Typography rules

The source states these four as its typography principles. Reading the measured metrics as those principles is a derived editorial implementation inference from the verified surfaces; it is not FunNow-authored or a separately published UI specification.

- **System type, zero ceremony:** no display font and no negative tracking games — hierarchy is carried by weight (400 vs 500 vs 700) and the orange accent.
- **Bilingual parity:** the Helvetica-then-PingFang stack keeps Latin and Traditional Chinese visually consistent at identical sizes; nothing in the scale assumes Latin-only line lengths.
- **Modest display sizes:** even the hero tops out at 36px — the photography and inventory density are the visual event, not the type.
- **Compact body for scanning:** 15px / 1.50 keeps long listing pages dense but legible.

### Assets

- Brand mark: `https://cdn.myfunnow.com/web/images/funnow_favicon.svg` — a first-party FunNow CDN asset, and the source attributes the primary `#ff5537` to this mark's fill.
- The brand logotype sits at the left of the toolbar in orange-red `#ff5537`.
- Product and venue photography is first-party catalog content, and the source calls the experience photo the persuasion layer of the card; do not replace it with invented brand-color decoration. Card photos crop to fixed tile ratios, and text over a photo rides the `rgba(0,0,0,0.4)` scrim rather than a styled panel.

<!-- design-md:section components-states -->
## 4. Components & States

### How to read this section

The source declares each component with a primitive type (`button`, `badge`, `card`, `tab`, `input`) and a value set. Those types are preserved per component. Applicability below is judged by each control's role in this product, not by whether a visual treatment for that state was recorded; where the source supplies no treatment for an applicable state, the value is omitted and the state stays applicable. Every interactive-kind verdict, every applicability verdict, and the reason given for either is a derived editorial implementation inference from the verified surfaces; it is not FunNow-authored or a separately published UI specification. This is not a claim that state coverage is finished.

### Search / Primary CTA Button

- Role: search submit in the booking toolbar — the source calls it the page's single solid-fill action
- Primitive type: `button` · Kind: interactive
- Background: `#ff5537`
- Text: `#ffffff`
- Radius: 4px
- Padding: 0px 16px
- Height: 40px
- Font: 14px / 400
- Shadow: Material elevation stack (`rgba(0,0,0,0.2)` / `rgba(0,0,0,0.14)` layers)

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | The system declares a disabled treatment for orange CTAs — they fade in opacity rather than turning grey, preserving the "go" color's meaning |
| loading | applicable | The system declares an inline spinner replacing the orange CTA label during an availability check, with the card in place and the previous price visible |
| error | applicable | The system declares an inline message above the CTA naming what failed and the next action |
| success | applicable | The system declares a confirmation screen restating time, venue, and party size |

### Download App Outline Button

- Role: header "Download App" CTA — the source calls it the only outlined button in the chrome
- Primitive type: `button` · Kind: interactive
- Background: transparent
- Text: `#4dcbcb`
- Border: `1px solid #4dcbcb`
- Radius: 4px
- Padding: 0px 8px
- Height: 36px
- Font: 15px / 400

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | An entry point whose availability can lapse; the system's muted-grey disabled treatment applies and no control-specific value is promoted |
| loading | applicable | Leaving the page runs the page-level transition the system assigns to `motion-slow` |
| error | not-applicable | This control sends the reader to the app; it does not commit an operation whose outcome it could report. The destination reports failure. |
| success | not-applicable | Same role reason: choosing a destination is not an operation with a success result. |

### Quiet Header Text Button

- Role: quiet header actions — Login / Sign Up, the city selector at 17px, and the Category / Now / Date / Time / Pax toolbar toggles
- Primitive type: `button` · Kind: interactive
- Background: transparent, no border
- Text: `#000000`
- Radius: 4px
- Padding: 0px 8px
- Height: 36px
- Font: 15px / 400

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A quiet action whose availability can lapse; the system's muted-grey disabled treatment applies |
| loading | applicable | The toolbar toggles in this record open the sheet/picker the system assigns to `motion-standard` |
| error | not-applicable | These controls open a destination or a picker; whatever is committed there is reported by the surface they open, not by the button. |
| success | not-applicable | Same role reason: opening an auth surface or a picker is not an operation with a success result. |

### Available Now Badge

- Role: real-time availability tag on product cards ("Available now", "Book For 06:00")
- Primitive type: `badge` · Kind: non-interactive — it displays a real-time availability value, and the source attaches no action, target, or interactive treatment to it. No state-applicability map is declared.
- Background: `#ff5537`
- Text: `#ffffff`
- Radius: 4px
- Padding: 2px 8px
- Font: 12px / 500

When a slot sells out, the source records this tag flipping to a muted sold-out state — a change in the availability value the tag displays, recorded in the State record below rather than as an operation outcome the tag reports.

### Flash Sale Badge

- Role: timed-deal tag ("Flash Sales Now", "06:00 Flash Sale") — the source describes the indigo as making deals read distinctly from availability
- Primitive type: `badge` · Kind: non-interactive — it displays a timed-deal value, and the source attaches no action, target, or interactive treatment to it. No state-applicability map is declared.
- Background: `#5a69eb`
- Text: `#ffffff`
- Radius: 4px
- Padding: 0px 8px
- Font: 12px / 400

### Product Tile

- Role: flat listing tile on the `#f4f4f5` canvas — photo on top, name, rating, price
- Primitive type: `card` · Kind: interactive — the source states card tiles are full-surface tap targets linking to the booking flow
- Background: `#ffffff`
- Radius: 4px
- Shadow: none (flat `v-card--flat`)
- Measured: 360×135 (list) and 233×146 (carousel)

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | The system assigns card hover to `motion-standard`; no hover color, opacity, or transform value is given |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A venue can be unavailable while its tile stays legible; the system's muted-grey disabled treatment applies |
| loading | applicable | The system declares flat skeleton tiles at final card dimensions with a 4px radius on the grey canvas |
| error | not-applicable | The tile opens the booking flow; it does not commit an operation whose outcome it could report. The sold-out treatment the system records belongs to the availability tag the tile carries, and a failed booking is reported by the booking surface. |
| success | not-applicable | Same role reason: opening the booking flow is not an operation with a success result. |

### Category Filter Tab

- Role: listing scope tabs ("All" / "Beitou Hot Spring Hotel" / "Jiaoxi Hot Spring Hotel" …)
- Primitive type: `tab` · Kind: interactive
- Text: `#252729` (inactive)
- Height: 48px
- Padding: 0px 16px
- Font: 17px / 400
- Active variant: text `#ff5537`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web control; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A scope can be unavailable while its tab stays legible; the system's muted-grey disabled treatment applies |
| loading | applicable | Selecting a scope re-queries the listing, which the system declares as its listing-fetch skeleton state |
| error | not-applicable | A tab changes which inventory the listing queries; the listing, not the tab, reports the outcome of that query. |
| success | not-applicable | Same role reason: a scope change is not an operation that commits and reports success. |

The active state is declared for this control as a variant (text `#ff5537`) rather than as one of the seven canonical states.

### Hero Search Field

- Role: "Search for products or locations" field inside the white booking toolbar, paired with the orange submit button
- Primitive type: `input` · Kind: interactive
- Background: transparent
- Text: `#000000` (the Material 87%-black default)
- Radius: 0px
- Padding: 8px 16px
- Height: 40px
- Font: 16px / 400

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Input control; visual treatment omitted |
| loading | applicable | Submitting a query runs the listing-fetch state the system declares |
| error | applicable | Form field; the system's declared failure language is the inline message above the CTA rather than an in-field treatment |
| success | applicable | Form field; visual treatment omitted |

### Header and booking-toolbar record

Chrome the source describes as an arrangement rather than as a declared component:

- White `#ffffff` toolbar on the grey canvas, with the brand logotype at the left in orange-red `#ff5537`
- City selector button at 17px / 400, black text, Material ripple
- Right cluster: the outlined teal Download App button beside the text-style Login / Sign Up button
- Booking parameter bar (Category / Now / Date / Time / Pax) as a row of 40px text buttons over the hero
- The filter tab bar scrolls horizontally on a white `#ffffff` background

### State record

The source's state contract, preserved with its values and copy:

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

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

- Full-width white toolbar over a centered content column on the `#f4f4f5` canvas.
- Hero: headline + booking parameter bar (Category / Now / Date / Time / Pax) + search field. The source reads the booking funnel as being the hero itself.
- Inventory below as horizontal carousels ("Top Brands", "Trending Themes") and vertical card lists.
- Category pages: title + intro, horizontally scrollable filter tab bar, then the card grid.
- The grey `#f4f4f5` gutter between flat white cards replaces borders and shadows.
- Chrome is thin: a single 64px-class toolbar and slim tab bars, with vertical space spent on listings.

Reading the tight card packing as "density over air" — a marketplace choice that puts maximum bookable inventory on a screen — reading the grey gutter as what replaces borders and shadows, and reading the thin chrome as vertical space deliberately spent on listings rather than branding, are derived editorial implementation inferences from the verified surfaces; they are not FunNow-authored or a separately published UI specification.

Responsive behavior:

| Name | Width | Key changes |
|---|---|---|
| Mobile | <600px | Single-column cards, booking bar collapses, app-download banner prominent |
| Tablet | 600–960px | 2-up card grids, condensed toolbar |
| Desktop | 960–1440px | Full toolbar with city selector + booking parameters, multi-column carousels |

- **Touch targets:** 40px toolbar controls and 48px filter tabs are described as comfortably tappable; card tiles are full-surface tap targets linking to the booking flow; header actions sit at 36px height with ripple feedback.
- **Collapsing:** the booking parameter bar folds into stacked sheet pickers on mobile; carousels keep horizontal scroll at every width, so inventory rows never stack into long verticals; the web experience funnels mobile users toward the app, and the teal Download App CTA persists.
- **Imagery:** card photos crop to fixed tile ratios, text sits on a bottom scrim where overlaid, and the "Available now" and flash-sale tags stay pinned to consistent card corners at all sizes.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The product runs in English and Traditional Chinese. The source credits the Helvetica-then-PingFang stack with keeping the two scripts at parity at identical sizes, and it records a register difference between them rather than a translation: the Traditional Chinese copy is upbeat, benefit-led, and comfortable with exclamation marks, while the English copy stays casual and second-person.

The source characterizes the voice as spontaneous, friendly, and deal-smart — a fun-loving local friend who knows where you can get in tonight and what it should cost — with copy that is short, imperative, and time-anchored, speaking in "now". That characterization, the register reading in the paragraph above, the reading that "energy is part of the brand", and the tone table below are a derived editorial implementation inference from the verified surfaces; they are not FunNow-authored or a separately published UI specification.

| Context | Tone |
|---|---|
| Hero headlines | Invitation to act tonight. "Explore & book your fun activities in Taipei｜Taoyuan now". |
| Subtitles / mission lines | Lifestyle permission. "Enjoy your life the way you want." |
| Urgency tags | Telegraphic, time-stamped. "Available now", "06:00 Flash Sale", "Book For 06:00". |
| Deal copy (TC) | Energetic, benefit-first, exclamatory. "尖峰有優惠，離峰更划算！" |
| Merchant surfaces | Confident B2B plain talk. "Help you stay on top", "Grow with Us". |
| Help / FAQ | Practical and procedural — booking, refund, and arrival mechanics. |

Voice samples, verbatim from the live surfaces and the official brand page. The Traditional Chinese text is the string; the English beside it is a reading aid, not the label:

- "Explore & book your fun activities in Taipei｜Taoyuan now" — homepage hero H1.
- "Enjoy your life the way you want." — homepage hero H2.
- "Book motel & hotel, massage & spa, restaurants & bars and more in Taipei within a few clicks!" — homepage section heading.
- "線上一鍵預訂，線下即刻出發！" — official Why FunNow page ("One-click booking online, head out instantly offline!").
- "尖峰有優惠，離峰更划算！" — official Why FunNow page ("Deals at peak, even better off-peak!").

**Forbidden register:** luxury-travel formality; slow "plan your itinerary" OTA language; guilt or FOMO-shaming; and jargon about inventory or yield, which is merchant-side vocabulary only.

Reproduce the Traditional Chinese strings above and the English UI labels recorded in the component roles and the State record byte-exact rather than translating or re-casing them.

<!-- design-md:section governance -->
## 7. Governance

<!-- design-md:claim authority kind=evidence-backed-reconstruction lang=en -->
### Authority

This document is an evidence-backed reconstruction, not authority for an unrelated target project.
<!-- design-md:claim-end -->

<!-- design-md:claim application-priority order=prompt-fact,repository-fact,system-contract,reference-inspiration lang=en -->
### Application priority

1. Direct user instructions for the requested scope.
2. Repository facts.
3. This system contract.
4. Reference inspiration.
<!-- design-md:claim-end -->

<!-- design-md:claim unknowns policy=absent-at-smallest-unresolved-boundary lang=en -->
### Unknowns

Omit only the smallest unresolved value or group. Do not replace it with a plausible default.
<!-- design-md:claim-end -->

<!-- design-md:claim changes policy=review-record-validate-before-adoption lang=en -->
### Changes

Record, review, and validate changes before adoption.
<!-- design-md:claim-end -->

### Recorded unresolved decisions

These are named values, not permissions to invent. The source records no conflict between its own values.

- **Exact easing curves.** Three easing roles and their uses are established; the curve values are omitted because they are not traceable to FunNow evidence. Promote a curve for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed.
- **Hover, ripple, and pulse values.** The system assigns card hover to `motion-standard` and ripple feedback and tag appearance to `motion-fast`, and it allows flash-sale countdowns to pulse subtly, but it gives no color, opacity, scale, or transform value for any of them.
- **The disabled opacity value.** The system states that orange CTAs fade in opacity rather than turning grey, without naming the opacity.
- **The muted sold-out treatment.** The system states that the availability tag flips to a muted sold-out state, without naming its color or type value.
- **The skeleton pulse.** The system declares flat skeleton blocks at final tile dimensions with a 4px radius and a flat pulse, without naming the pulse's duration or opacity range.
