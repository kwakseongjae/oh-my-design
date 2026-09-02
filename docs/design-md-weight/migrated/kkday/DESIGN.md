# KKday Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

KKday is a Taiwan-born online travel marketplace — the place a traveler books a tea-ceremony in Kyoto, a SIM card for Bangkok, or a high-speed-rail pass before a trip. This contract names the first-party public marketplace the source records at `https://www.kkday.com`. YAML `tokens.source` is `prose-derived`. The source records that live computed-style verification of kkday.com was not completed this pass: WebFetch returned HTTP 403 and the Playwright session redirected to injected ad interstitials. Catalog `primary_color` `#FF5C00` is the creation-brief-provided value and matches KKday's known orange-led commerce identity; hexes other than the primary are well-grounded approximations pending live re-inspection. Every value stays attached to the surface, section, or evidence class that established it. Reading that homepage URL as this contract's named marketplace surface, keeping the YAML set in the `prose-derived` class the source assigned it, keeping the live-inspect-not-completed sentence as the source's own evidence class rather than as a completed extract, keeping every value attached to the surface or evidence class that established it, and refusing to treat an uninspected production DOM as a computed-style token source, are derived editorial implementation inferences from the verified surfaces; they are not KKday-authored or a separately published UI specification.

The atmosphere the source records is **bright, warm, and energetic**, anchored by a saturated travel-orange (`#FF5C00` / `#ff5c00`) on a white, photography-dense canvas. Typography runs a locale-aware system stack (no custom display typeface). Hierarchy is **weight- and color-driven**: bold product titles, bold prices, lighter metadata, with orange reserved for action and price-urgency. The layout is **card-grid first**. The hex, the system-stack claim, the weight-and-color hierarchy, and the card-grid-first layout are recorded. The source writes that orange always reads as "do this next." Calling orange a sunrise over that canvas, calling the feel closer to a vibrant night-market stall than a quiet concierge desk, calling the register unembarrassed about enthusiasm, and reading that "do this next." sentence as the source's own conversion-signal writing rather than as a separately published doctrine, are derived editorial implementation inferences from the verified surfaces; they are not KKday-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. KKday was founded in **2014 in Taipei, Taiwan**, by **Ming Chen** — a travel-industry veteran who had previously built and taken Star Travel and Ezfly to IPO. The thesis: while flights and hotels had been commoditized online for years, the **"things to do" layer of travel — the tea ceremony, the day tour, the airport transfer, the local SIM card — remained fragmented, offline, and language-locked.** KKday set out to be the marketplace that aggregates curated local experiences and makes them bookable, in your language, before you land. The design language is the product-surface expression of that thesis. Travel is overwhelming — there are thousands of things to do in any destination — so the system is engineered to make abundance feel **navigable and trustworthy** rather than chaotic: image-led cards for fast visual scanning, bold prices and ratings as decision anchors, and trust chips (instant confirmation, free cancellation) that defuse the anxiety of booking an experience in a place you've never been. The saturated orange is the warmth of anticipation made into an action color — the "yes, do this" of trip-planning. KKday now operates across **90+ countries with over 300,000 curated experiences**, has raised over **US$250 million** across funding rounds (Series D of $70M in late 2024, with Japanese travel giant **H.I.S.** among its investors), and has expanded from a pure activities marketplace toward an **all-in-one travel super-app** spanning tours, tickets, transport, hotels, SIM/WiFi, and rail passes — while operating B2B and luxury-travel subsidiaries (Rezio, FineDayClub, ActivityJapan). The year 2014, Taipei, Ming Chen, Star Travel, Ezfly, the "things to do" thesis, the design-language paragraph, the 90+ countries / 300,000 experiences / US$250 million / Series D $70M late 2024 / H.I.S. figures, the super-app span, the three subsidiaries, and that closing warmth-of-anticipation sentence are the source's own narrative facts; they do not by themselves supply interface tokens. Classifying that founding-and-thesis narrative as context that does not by itself supply interface tokens is a derived editorial implementation inference from the verified surfaces; it is not KKday-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product's primary tasks, and refusing to take them from the source's persona section, is a derived editorial implementation inference from the verified surfaces; it is not KKday-authored or a separately published UI specification. Each names a surface or control the source records.

- Compare image-led experience cards on `https://www.kkday.com`.
- Search a destination or experience from the hero search the source names.
- Book with `Book Now` on the primary conversion CTA the source names.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source labels its named figures as fictional archetypes informed by publicly described KKday user segments, not individual people, so those biographies are dropped rather than promoted, and no name, motivation, or affiliation classification is carried into this document or its sidecar. What the source independently records, in its own wording, is the audience at a group level: TW/HK/JP independent travelers and APAC outbound tourists. Refusing to promote individual personas, and reading those source-named groups as this product's audience, are derived editorial implementation inferences from the verified surfaces; they are not KKday-authored or a separately published UI specification.

### Distinctive traits

The list restates the source's Key Characteristics. The values are recorded; classifying the list as that restatement, and the groupings and the readings inside them, are a derived editorial implementation inference from the verified surfaces — they are not KKday-authored or a separately published UI specification.

- Travel-orange (`#FF5C00` / `#ff5c00`) as the singular hot/action color — CTAs, sale badges, selected states
- Locale-aware system font stack (TC / SC / JP / KR / TH fallbacks) — no custom typeface, design-as-localization
- White-dominant, photography-dense canvas — destination/experience imagery carries the page
- Card-grid-first layout for browse-many-options travel-marketplace behavior
- Weight + color drive hierarchy: bold titles, bold prices, neutral metadata
- Conservative radius (`8px` workhorse on cards/buttons, smaller on badges) for a clean commerce feel
- Price and discount signals are first-class — strikethrough originals, orange sale emphasis
- Trust signals everywhere — ratings, review counts, "instant confirmation", "free cancellation" chips
- Warm, enthusiastic, abundance-clean register — the night-market energy, organized
- Neutral gray scale for text hierarchy so orange never has to compete

### Principles

These six items are a derived editorial implementation inference from the verified surfaces; they are not KKday-authored or a separately published UI specification. The source states them in its own Principles section. Every *UI implication* below is that same derived class.

1. **Orange is the path, not the paint.** The hot orange exists to point a comparing traveler at the next action. *UI implication:* One dominant orange action per decision moment (the Book CTA, the selected date). Keep surrounding surfaces neutral so orange always means "proceed."
2. **Abundance must feel navigable.** Travelers face thousands of options; the system's job is fast, confident comparison. *UI implication:* Card grids with consistent anchors — image, title, rating, price, trust chip in the same position every time. Predictable layout lowers cognitive load across many cards.
3. **Trust is a component, not a footnote.** Booking an experience abroad is anxious; reassurance must be visible at the moment of decision. *UI implication:* Surface instant-confirmation / free-cancellation / mobile-voucher chips on the card and the CTA area — not buried in fine print.
4. **Locale is infrastructure.** Every traveler reads in their own script; the brand is authored per market. *UI implication:* Always use the full locale-aware font stack; route microcopy through locale bundles; show prices in the user's currency exactly.
5. **Honest urgency only.** Scarcity signals must be factual, never manufactured. *UI implication:* Use amber `#F5A623` / `#f5a623` for real low-availability states; never use countdown manipulation or fake "selling fast" without data behind it.
6. **The image is the salesperson.** Experiences are bought on the feeling the photo evokes. *UI implication:* Cards are image-led with consistent aspect ratios and quality bars; chrome stays minimal so the destination carries the page.

### Application rules

The source states these as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not KKday-authored or a separately published UI specification.

- Reserve orange (`#FF5C00` / `#ff5c00`) for action and conversion — primary CTAs, sale badges, selected states
- Use the locale-aware font stack with the user's language fallback second
- Keep cards image-led with bold titles, bold prices, and compact trust chips
- Use `8px` radius on cards/buttons, `4px` on badges
- Distinguish urgency-amber (`#F5A623` / `#f5a623`) from action-orange (`#FF5C00` / `#ff5c00`) and success-green (`#1FA463` / `#1fa463`)
- Show trust chips ("Instant confirmation", "Free cancellation") — they reduce booking anxiety

### Avoid

The source states these as its Don't list. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not KKday-authored or a separately published UI specification.

- Don't flood layouts with orange. It signals "do this next" only because the rest is neutral.
- Don't load a single custom web font — system stacks respect each market and keep APAC LCP fast.
- Don't bury price or rating — they are primary scan targets for a comparing traveler.
- Don't use pill-fully-rounded CTAs — they break the clean commerce density.
- Don't conflate the brand orange with the error red or rating gold.
- Don't use shouty discount adjectives; the sale badge + strikethrough price carry the message.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Role names below are the source's own labels. Pairing each hex to the token-set path named beside it, taking those role names from the source's own labels, keeping `#FF5C00` beside token-set `#ff5c00`, keeping `#EEEEEF`, `#BDBDBD`, and `#26BEC9` on the prose roles that name them rather than inventing YAML keys, and keeping hexes other than the brief-provided primary in the approximation class the source assigned them, are derived editorial implementation inferences from the verified surfaces; they are not KKday-authored or a separately published UI specification. The hex values and recorded uses are the source's own.

- **KKday Orange** (`#ff5c00` / `#FF5C00`): Primary brand + action color. Primary CTAs ("Book Now", "Add to Cart"), selected states, key emphasis, sale signal. Token-set path `tokens.colors.primary`. `tokens.colors.brand` is the same hex on a second key.
- **Orange Hover** (`#e65300` / `#E65300`): Darker press/hover state for orange CTAs. Token-set path `tokens.colors.primary-hover`.
- **Orange Tint** (`#fff0e8` / `#FFF0E8`): Very light orange wash for selected-card backgrounds, highlight rows, soft emphasis surfaces. Token-set path `tokens.colors.brand-tint`.
- **Pure White** (`#ffffff` / `#FFFFFF`): Card surfaces, primary content background. Token-set path `tokens.colors.canvas`. `tokens.colors.on-primary` is the same hex on a second key (text on orange).
- **Surface Soft** (`#f7f7f8` / `#F7F7F8`): Grouped section background, page tint between white cards. Token-set path `tokens.colors.surface`.
- **Surface Hover** (`#EEEEEF`): Hover/pressed neutral surface. Source §2 body only; not a YAML `tokens.colors.*` path.
- **Text Primary** (`#1a1a1a` / `#1A1A1A`): Headings, product titles, prices. Near-black for maximum legibility against dense imagery. Token-set path `tokens.colors.foreground`.
- **Text Secondary** (`#4a4a4a` / `#4A4A4A`): Secondary copy, descriptions. Token-set path `tokens.colors.body`.
- **Text Muted** (`#888888`): Metadata, timestamps, location labels, captions. Token-set path `tokens.colors.muted`.
- **Text Disabled** (`#BDBDBD`): Disabled labels, strikethrough original prices. Source §2 body only; not a YAML `tokens.colors.*` path.
- **Border Light** (`#e5e5e6` / `#E5E5E6`): Row dividers, soft separators. Token-set path `tokens.colors.hairline`.
- **Border Mid** (`#d9d9d9` / `#D9D9D9`): Component borders (inputs, outlined cards, secondary button outline). Token-set path `tokens.colors.border-mid`.
- **Success / Confirmed** (`#1fa463` / `#1FA463`): "Instant confirmation", availability, success toasts. Token-set path `tokens.colors.success`.
- **Warning** (`#f5a623` / `#F5A623`): Limited-availability, "only 2 left" urgency. Amber, distinct from the orange action color. Token-set path `tokens.colors.warning`.
- **Error / Danger** (`#e0353b` / `#E0353B`): Form validation, failed payment, destructive actions. Token-set path `tokens.colors.error`.
- **Rating Gold** (`#ffb400` / `#FFB400`): Review-star fills — the trust signal color, separate from the orange brand. Token-set path `tokens.colors.rating`.
- **Heritage Teal** (`#26BEC9`): An older KKday brand teal documented in brand-asset aggregators; treat as a legacy/secondary accent, not the current primary. Modern surfaces lead with orange. Source §2 Accent (legacy) only; not a YAML `tokens.colors.*` path.

`#ffffff` as `tokens.colors.canvas` is not the only white the source records; `tokens.colors.on-primary` is the same hex on a second key (text on orange). `#ff5c00` as `tokens.colors.primary` is not a second reading of `tokens.colors.brand` — they are two keys. Reading those attachments as the roles named beside them, rather than as a shared numeral or a collapsed pair, is a derived editorial implementation inference from the verified surfaces; it is not KKday-authored or a separately published UI specification.

### Spacing

Token-set path `tokens.spacing`, unitless steps as the YAML recorded them.

| Step | Value | Token-set path |
|---|---:|---|
| xs | 4 | `tokens.spacing.xs` |
| sm | 8 | `tokens.spacing.sm` |
| md | 12 | `tokens.spacing.md` |
| base | 16 | `tokens.spacing.base` |
| lg | 24 | `tokens.spacing.lg` |
| xl | 40 | `tokens.spacing.xl` |
| xxl | 64 | `tokens.spacing.xxl` |

The source also writes an 8px-based spacing scale, tight card internals (8–12px), and generous section rhythm (40–64px). `tokens.spacing.xs: 4` is not `tokens.rounded.sm: 4`. `tokens.spacing.sm: 8` is not `tokens.rounded.md: 8` and not `tokens.rounded.lg: 8`. `tokens.spacing.md: 12` is not the Experience Card body padding `12px` from the source construction prompt. `tokens.spacing.base: 16` is not a type-role 16 and not the Primary button font `16px`. `tokens.spacing.lg: 24` is not a type size. `tokens.spacing.xl: 40` is not a type size. `tokens.spacing.xxl: 64` is not a type size. Keeping each number on its own key path, rather than treating a shared numeral as the same token, is a derived editorial implementation inference from the verified surfaces; it is not KKday-authored or a separately published UI specification.

### Shape

Token-set path `tokens.rounded`, unitless steps as the YAML recorded them.

| Step | Value | Token-set path |
|---|---:|---|
| sm | 4 | `tokens.rounded.sm` |
| md | 8 | `tokens.rounded.md` |
| lg | 8 | `tokens.rounded.lg` |
| full | 9999 | `tokens.rounded.full` |

The source's prose radius use is `8px` workhorse on cards/buttons and `4px` on badges. `tokens.rounded.md: 8` and `tokens.rounded.lg: 8` are two keys with the same numeral; they are not one step. `tokens.rounded.sm: 4` is not `tokens.spacing.xs: 4`. `tokens.rounded.md: 8` is not `tokens.spacing.sm: 8`. `tokens.rounded.full: 9999` is a YAML step. The source Don't list says not to use pill-fully-rounded CTAs. Keeping those two `8` keys on their own paths, keeping `full: 9999` on its own key path, and keeping local radii on their components, are derived editorial implementation inferences from the verified surfaces; they are not KKday-authored or a separately published UI specification.

### Elevation

KKday leans **mostly flat with soft commerce shadows**. Cards separate via a 1px border or a subtle shadow; orange CTAs are flat (color is the weight). Those sentences are the source's own.

| Level | Treatment | Use |
|---|---|---|
| Card | `0 2px 8px rgba(0,0,0,0.08)` | Soft lift on hover for grid cards. Token-set path `tokens.shadow.card`. |
| Sticky header | `0 1px 4px rgba(0,0,0,0.06)` | On scroll. Token-set path `tokens.shadow.header`. |
| Dropdown / mega-menu | `0 4px 16px rgba(0,0,0,0.12)` | Token-set path `tokens.shadow.dropdown`. |
| Modal | `0 8px 32px rgba(0,0,0,0.2)` | Token-set path `tokens.shadow.modal`. |

Buttons carry **no shadow** — flat orange does the work. Z-index the source names: sticky header above content; mega-menu above header; modals above all chrome; toasts highest. Reading that stack as commerce-shadow elevation rather than a universal card lift, and keeping each shadow string on the key the YAML named, are derived editorial implementation inferences from the verified surfaces; they are not KKday-authored or a separately published UI specification.

### Motion

KKday motion is **brisk and commerce-functional** — fast feedback, no theatrics. That sentence is the source's own. Durations the source records, kept as duration tokens. They are not easing curves. Keeping those durations as duration tokens rather than easing curves is a derived editorial implementation inference from the verified surfaces; it is not KKday-authored or a separately published UI specification.

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle flips, reduce-motion fallback |
| `motion-fast` | 120ms | Hover/press on cards, buttons, links |
| `motion-standard` | 200ms | Dropdowns, mega-menu, tooltip fades, cart-count update |
| `motion-slow` | 300ms | Modal open, filter bottom-sheet slide, image lightbox |
| `motion-page` | 250ms | Route transition + top progress bar |

Unsourced easing curves from the catalog template (`ease-standard` `cubic-bezier(0.4, 0, 0.2, 1)`, `ease-enter` `cubic-bezier(0, 0, 0.2, 1)`, `ease-exit` `cubic-bezier(0.4, 0, 1, 1)`) are omitted at the curve-value boundary. Easing *roles* and their uses stay:

| Role | Use |
|---|---|
| `ease-standard` | Default two-way transitions |
| `ease-enter` | Things appearing — modals, sheets, toasts |
| `ease-exit` | Dismissals |

**Spring stance.** Spring/overshoot is **avoided** — KKday is a high-density commerce surface where bouncy motion fights fast comparison and reads as a flash-sale tic. Add-to-cart and booking confirmations resolve cleanly, not elastically. That spring stance is a derived editorial implementation inference from the verified surfaces; it is not KKday-authored or a separately published UI specification.

**Signature motions** the source names stay:

1. **Card hover (desktop).** Subtle lift via shadow fade-in (`0 2px 8px rgba(0,0,0,0.08)`) over `motion-fast`; optional alternate-image swap. No scale jump.
2. **Filter bottom-sheet.** On mobile, the filter panel slides up over `motion-slow / ease-enter`; backdrop fades in. Dismiss reverses with `ease-exit`.
3. **Cart-count badge.** On add-to-cart, the cart badge count updates with a quiet `motion-standard` fade — no bounce.
4. **Carousel scroll.** Curated-collection carousels scroll-snap with `ease-standard`; arrows fade in on hover (desktop).

**Reduce motion.** Under `prefers-reduced-motion: reduce`, all `motion-*` collapse to `motion-instant`; sheet slides become instant opacity toggles; progress bar hidden. Hover color/shadow state changes still apply.

Omitting the three unsourced curves, keeping the four signature motions, keeping the reduced-motion contract, and holding the five-kind per-component promotion gate rather than treating a single official curve as sufficient, are derived editorial implementation inferences from the verified surfaces; they are not KKday-authored or a separately published UI specification.

An exact curve may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework or vendor document — does not satisfy that condition.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The following evidence-class application readings are a derived editorial implementation inference from the verified surfaces; they are not KKday-authored or a separately published UI specification.

| Evidence class | Resolution |
|---|---|
| Official product-use | The source records no published KKday type specimen and no custom display typeface. |
| Live computed surface-use | Live computed-style verification of kkday.com was not completed this pass. |
| Declared / inferred stack | Locale-aware system stacks (TC / SC / JP / KR / TH fallbacks), inferred from OTA/TW conventions. Token-set path `tokens.typography.family.sans` records `-apple-system`. |
| Monospace | `SF Mono`. Token-set path `tokens.typography.family.mono`. |
| Official distributed asset | No KKday-exclusive distributed type family was verified. |
| License | System faces remain the host platform's fonts, not a KKday brand asset. |

### Family

- **Default:** `-apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif` — Token-set path `tokens.typography.family.sans` records `-apple-system`.
- **Traditional Chinese:** `… "PingFang TC", "Microsoft JhengHei", sans-serif`
- **Simplified Chinese:** `… "PingFang SC", "Microsoft YaHei", sans-serif`
- **Japanese:** `… "Hiragino Kaku Gothic Pro", "Meiryo", sans-serif`
- **Korean:** `… "Apple SD Gothic Neo", "Malgun Gothic", sans-serif`
- **Thai:** `… "Thonburi", "Noto Sans Thai", sans-serif`
- **Mono:** `SF Mono` — Token-set path `tokens.typography.family.mono`.

No custom web font — system stacks keep LCP fast across slow APAC connections and respect each market's native reading habits. Those stacks are the source's inferred table. Keeping the YAML `-apple-system` / `SF Mono` paths beside the longer locale table, and refusing to present a fallback as a verified KKday face, are derived editorial implementation inferences from the verified surfaces; they are not KKday-authored or a separately published UI specification.

### Type roles

YAML sizes stay the unitless numbers the token set recorded. Token-set `use` strings are kept verbatim; where the source §3 table is the longer record of the same role, that longer use is kept beside the YAML use. YAML has no `lineHeight` keys. Keeping YAML sizes as the token-set numbers, keeping the YAML use and the §3 longer range on the same role rather than dropping the longer wording, and attaching the inferred class the source assigned the scale, are derived editorial implementation inferences from the verified surfaces; they are not KKday-authored or a separately published UI specification.

| Role | Font | Size | Weight | Token-set use | §3 longer record |
|---|---|---:|---:|---|---|
| Hero headline | system sans | 32 | 700 | Hero headline | Hero headline `28–36px` |
| Section heading | system sans | 23 | 700 | Section heading | Section heading `22–24px` |
| Card heading | system sans | 19 | 700 | Card heading | Card heading `18–20px` |
| Price | system sans | 18 | 700 | Price, prominent bold | Price `16–20px` (bold) |
| Body / card title | system sans | 15 | 400 | Body, card title | Body / card title `14–16px` |
| Body small / location | system sans | 13 | 400 | Location label, secondary | Body small / location label `13px` |
| Caption / meta | system sans | 12 | 400 | Caption, meta | Caption / meta `12px` |

**Weights** the source names: **700 (Bold)** — Product titles, prices, section headings, CTA emphasis. **600 (Semibold)** — Subheads, button labels, selected tabs. **400 (Regular)** — Body, descriptions, metadata.

**Conventions** the source states. These four rules, and the readings inside them, are a derived editorial implementation inference from the verified surfaces; they are not KKday-authored or a separately published UI specification.

- **Hierarchy is weight + color**, not extreme size — commerce density favors compact headings (16–20px) over 48px display type.
- **Prices are bold and prominent**; original (pre-discount) prices use `text-decoration: line-through` in muted gray.
- **Star ratings + review counts** sit next to titles as compact trust signals (`4.8 · 1,240`).
- **Numerals flow with prose** — no forced tabular figures except in pricing tables.

The YAML 32 hero size is not `tokens.spacing.xxl` and is not the only hero writing — §3 also records `28–36px`. The YAML 23 section size sits beside §3 `22–24px`. The YAML 19 card-heading size sits beside §3 `18–20px`. The YAML 18 price size sits beside §3 `16–20px` and is not only the Experience Card construction-prompt `18px/700`. The YAML 15 body size sits beside §3 `14–16px` and is not `tokens.spacing` . The YAML 13 and 12 sizes are those roles. Reading those sizes as the roles named beside them, rather than as shared numerals across spacing or another component, is a derived editorial implementation inference from the verified surfaces; it is not KKday-authored or a separately published UI specification.

### Assets

- Catalog identity pointer: `logo.type: favicon`, `logo.slug: https://www.google.com/s2/favicons?domain=kkday.com&sz=128`. That URL is an identity pointer, not a KKday-hosted brand file. Reading it as an identity pointer rather than hosted brand artwork is a derived editorial implementation inference from the verified surfaces; it is not KKday-authored or a separately published UI specification.
- Destination/experience photography is first-party catalog content; do not replace it with invented brand-color decoration. Refusing to replace that recorded destination/experience photography with invented brand-color decoration is a derived editorial implementation inference from the verified surfaces; it is not KKday-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The source records that live computed-style verification was not completed this pass. Geometry below is the source's prose-derived / conventional writing. Treat hexes other than the brief-provided primary as well-grounded approximations pending live re-inspection.

The source state contract, preserved here while the catalog graph is not adopted:

| State | Treatment |
|---|---|
| **Empty (search no results)** | One `#888888` line explaining the zero-match in the user's terms + 3–5 suggested nearby-date / nearby-city chips. Never a terminal "No results". |
| **Empty (wishlist)** | One-line `#888888` explanation + secondary CTA to browse a popular destination. No illustration required. |
| **Loading (grid first paint)** | Skeleton cards at `#F7F7F8` / `#f7f7f8` with 8px radius matching final cards; image area fixed-aspect, title/price as gray bars. Shimmer ~1.2s. No spinner. |
| **Loading (inline action — booking)** | Orange CTA holds width; label swaps to a white 3-dot/spinner; prevents double-tap and layout shift. |
| **Error (form field)** | Border switches to `1px solid #E0353B` / `#e0353b`; helper text below in `#E0353B` / `#e0353b` 12px; field-specific and blameless. |
| **Error (payment declined)** | Escalated card at checkout top, `#E0353B` / `#e0353b` accent, one blameless sentence describing the decline + single retry in `#FF5C00` / `#ff5c00`. No generic "Something went wrong" alone. |
| **Success (added to cart)** | Toast top-right, dark bg, white 14px text, 3s auto-dismiss, "View cart" action. No celebratory animation. |
| **Success (booking confirmed)** | Dedicated confirmation screen — order number, voucher access, per-experience date/time. Not a toast. No orange CTA here (the purchase moment is past). |
| **Skeleton** | `#F7F7F8` / `#f7f7f8` blocks at exact card dimensions; price placeholder renders as `—` in the user's currency, never `$0`. |
| **Disabled (button)** | Faded fill, `#BDBDBD` text, geometry preserved so re-enabled controls don't shift. |

Those ten rows are the source's §14 body. They describe marketplace states the source recorded; they are not selector-backed captures. Keeping that section attachment, rather than transferring those treatments onto a different control as if they had been computed there, is a derived editorial implementation inference from the verified surfaces; it is not KKday-authored or a separately published UI specification.

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. A generic Focus capture is not `focus-visible` treatment evidence; the source records an input Focus as `border #ff5c00` / `#FF5C00`, and that observed Focus is not a color assigned to the `focus-visible` row. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless captured as that same canonical state. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow the control's product role, not its primitive kind. `not-applicable` is used only where the control's role makes the state meaningless — a destination details link, a destination "See more" control, a destination experience tile, or a header nav tab — and the reason given is always that semantic one. Where the source supplies no interaction evidence for a row at all, its kind and applicability map are omitted rather than decided. Preserving the source state contract here rather than delegating it to an unadopted catalog graph, the role-based decision procedure above, every interactive-kind verdict, every applicability verdict, the reason given for either, and the refusal to treat this as a complete state-coverage claim, are derived editorial implementation inferences from the verified surfaces; they are not KKday-authored or a separately published UI specification. This is not a complete state-coverage claim.

### Primary (Book / Action)

- Role: primary conversion CTA
- Primitive type: `button` · Kind: interactive
- Background: `#ff5c00` / `#FF5C00`
- Text: `#ffffff` / `#FFFFFF`
- Border: none
- Radius: `8px`
- Padding: `10px 20px`
- Font: `16px / 600`
- Hover: bg `#e65300` / `#E65300`
- Token-set use: `Book Now, Add to Cart, primary conversion CTA`
- Observed: §14 Loading (inline action — booking) holds width and swaps the label to a white 3-dot/spinner; §14 Disabled records faded fill and `#BDBDBD` text
- The `8px` radius is this button's geometry. It is not only `tokens.rounded.md: 8` or `tokens.rounded.lg: 8` and not `tokens.spacing.sm: 8`. The `10px 20px` padding is this control's padding. The 16px / 600 font is this control's font; it is not `tokens.spacing.base: 16` and not only a type-role row. Reading those figures as this button's geometry rather than as those YAML steps, and keeping the §14 booking-loading and Disabled treatments attached to the §14 rows rather than rewriting them as a computed hover, are derived editorial implementation inferences from the verified surfaces; they are not KKday-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web commit control; hover bg `#E65300` / `#e65300` is the source's shared writing |
| focus-visible | applicable | Keyboard-reachable commit control; visual treatment omitted |
| disabled | applicable | Button control; §14 records faded fill and `#BDBDBD` text |
| loading | applicable | `Book Now` / `Add to Cart` is an in-place commit; §14 records width-hold + white 3-dot/spinner |
| error | applicable | A failed booking or cart add can be reported on this control; visual treatment omitted |
| success | applicable | A completed booking or cart add can be reported on this control; visual treatment omitted |

### Secondary (Outlined)

- Role: neutral/secondary actions
- Primitive type: `button` · Kind: interactive
- Background: `#ffffff` / `#FFFFFF`
- Text: `#1a1a1a` / `#1A1A1A`
- Border: YAML `1px solid #d9d9d9` · §4 `1px solid #D9D9D9`
- Radius: `8px`
- Padding: `10px 20px`
- Font: `16px / 600`
- Hover: bg `#f7f7f8` / `#F7F7F8`
- Token-set use: `View Details, secondary actions`. §4 longer use: "View Details", neutral/secondary actions
- The `8px` radius is this button's geometry. It is not only `tokens.rounded.md: 8` or `tokens.rounded.lg: 8`. The 16px / 600 font is this control's font; it is not `tokens.spacing.base: 16`. Reading those figures as this outlined button's geometry rather than as those YAML steps is a derived editorial implementation inference from the verified surfaces; it is not KKday-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web destination control; hover bg `#F7F7F8` / `#f7f7f8` is the source's shared writing |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A destination control can be gated; visual treatment omitted |
| loading | not-applicable | `View Details` is a destination action; it commits no operation in place |
| error | not-applicable | Destination details link; it commits no operation in place |
| success | not-applicable | Destination details link; it commits no operation in place |

### Ghost / Text

- Role: inline tertiary actions
- Primitive type: `button` · Kind: interactive
- Background: transparent
- Text: `#ff5c00` / `#FF5C00`
- Radius: `8px`
- Padding: `8px 12px`
- Token-set use: `Inline tertiary actions, See more`
- The `8px` radius is this control's geometry. The `8px 12px` padding is this control's padding. It is not `tokens.spacing.sm: 8` and not `tokens.spacing.md: 12`. Reading those figures as this ghost control's geometry rather than as those YAML steps is a derived editorial implementation inference from the verified surfaces; it is not KKday-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web destination control; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A destination control can be gated; visual treatment omitted |
| loading | not-applicable | `See more` is a destination action; it commits no operation in place |
| error | not-applicable | Destination tertiary link; it commits no operation in place |
| success | not-applicable | Destination tertiary link; it commits no operation in place |

### Input

- Role: search, traveler details, contact forms
- Primitive type: `input` · Kind: interactive
- Background: `#ffffff` / `#FFFFFF`
- Text: `#1a1a1a` / `#1A1A1A`
- Border: YAML `1px solid #d9d9d9` · §4 `1px solid #D9D9D9`
- Radius: `8px`
- Padding: `10px 14px`
- Font: `16px / 400`
- Focus: Token-set `border #ff5c00` · §4 `border #FF5C00` — recorded as observed Focus, not as `focus-visible` treatment
- Error: Token-set `error border #e0353b` · §4 `1px solid #E0353B`
- Token-set use: `Search, traveler details, contact forms`
- The `8px` radius is this input's geometry. The `10px 14px` padding is this control's padding. The 16px / 400 font is this control's font; it is not `tokens.spacing.base: 16`. Reading those figures as this input's geometry rather than as those YAML steps, and keeping the observed Focus on the Focus writing rather than assigning it to `focus-visible`, are derived editorial implementation inferences from the verified surfaces; they are not KKday-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable field; visual treatment omitted |
| disabled | applicable | Input control; visual treatment omitted |
| loading | not-applicable | Form field; in-place commit lives on the search-submit or Book CTA |
| error | applicable | Form field; §14 records `1px solid #E0353B` and 12px helper text |
| success | not-applicable | Form field; booking success lives on the confirmation screen |

### Experience Card

- Role: grid product card
- Primitive type: `card` · Kind: interactive
- Background: `#ffffff` / `#FFFFFF`
- Border: YAML `1px solid #e5e5e6` · §4 `1px solid #E5E5E6` (or shadow-separated)
- Radius: `8px`
- Padding: YAML `0` (image-led top, padded body)
- Token-set use: `Grid product card, image-led with title/rating/price/trust chips`. §4 longer use: Grid product card — image, title (2-line clamp), rating + review count, price (bold), trust chips
- §9 construction values that live only on this card, kept here (A3): image fills top with `object-fit: cover`; sale badge top-left (`#FF5C00` / `#ff5c00` bg, white, 4px radius, 12px/700); body padding `12px`; title `16px/700` `#1A1A1A` / `#1a1a1a` (2-line clamp); rating row `4.8 · 1,240` in `13px` `#888888` with `#FFB400` / `#ffb400` stars; price `18px/700` `#1A1A1A` / `#1a1a1a` with strikethrough original in muted gray; trust chip `Instant confirmation` in `#1FA463` / `#1fa463`
- The `8px` radius is this card's geometry. The body padding `12px` is this card's body padding from the construction prompt. It is not `tokens.spacing.md: 12`. The title `16px/700` is this card's title writing. It is not `tokens.spacing.base: 16` and not only the Body type-role row. The price `18px/700` is this card's price writing. It is not only the Price type-role row. Keeping the YAML `padding: 0` beside the construction-prompt body `12px`, and reading those figures as this card's geometry rather than as those YAML steps, are derived editorial implementation inferences from the verified surfaces; they are not KKday-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web destination tile; source names a shadow fade-in lift over `motion-fast` |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A destination tile can be gated; visual treatment omitted |
| loading | not-applicable | Destination experience tile; it commits no operation in place |
| error | not-applicable | Destination experience tile; it commits no operation in place |
| success | not-applicable | Destination experience tile; it commits no operation in place |

### Sale Badge

- Role: discount/sale ribbon on product image
- Primitive type: `badge`
- Background: `#ff5c00` / `#FF5C00`
- Text: `#ffffff` / `#FFFFFF`
- Radius: `4px`
- Padding: `2px 6px`
- Font: `12px / 700`
- Token-set use: `Discount/sale ribbon on product image`
- The source supplies no interaction evidence for this row. Kind and applicability map are omitted (C4). The `4px` radius is this badge's geometry. It is not only `tokens.rounded.sm: 4` and not `tokens.spacing.xs: 4`. Reading that radius as this badge's geometry rather than as that YAML step, and omitting kind and the map because the source supplies no interaction evidence, are derived editorial implementation inferences from the verified surfaces; they are not KKday-authored or a separately published UI specification.

### Trust Chip

- Role: confirmation / cancellation / voucher chips
- Primitive type: `badge`
- Background: YAML `#fff0e8` / `#FFF0E8` · §4 `#FFF0E8` or `#FFFFFF` — both records kept; they are not resolved
- Text: YAML `#1fa463` / `#1FA463` · §4 `#1FA463` (confirmed) / `#1A1A1A` — both records kept
- Radius: `4px`
- Padding: `2px 8px`
- Font: `12px / 500`
- Token-set use: `Instant confirmation, Free cancellation`. §4 longer use: "Instant confirmation", "Free cancellation", "Mobile voucher"
- The source supplies no interaction evidence for this row. Kind and applicability map are omitted (C4). The YAML tint and the §4 white-or-tint pair stay as a keep-both; a migrator does not choose one. Keeping both background and text records, and omitting kind and the map because the source supplies no interaction evidence, are derived editorial implementation inferences from the verified surfaces; they are not KKday-authored or a separately published UI specification.

### Urgency Chip

- Role: factual scarcity chip
- Primitive type: `badge`
- Background: transparent
- Text: `#f5a623` / `#F5A623`
- Font: `12px / 600`
- Token-set use: `Only 2 left, Selling fast`
- The source supplies no interaction evidence for this row. Kind and applicability map are omitted (C4). Omitting kind and the map because the source supplies no interaction evidence is a derived editorial implementation inference from the verified surfaces; it is not KKday-authored or a separately published UI specification.

### Sticky header nav

- Role: sticky header nav links
- Primitive type: `tab` · Kind: interactive
- Text: `#1a1a1a` / `#1A1A1A`
- Font: YAML `15px / 500` · §4 `14–16px` / `400–500` — both records kept
- Active: orange `#ff5c00` / `#FF5C00` active/hover accent
- Token-set use: `Sticky header nav links`
- Source chrome around this row, kept on this block: sticky white header — logo left, search center, locale/currency + account right; category mega-menu on hover (Tours, Tickets, Transport, SIM/WiFi, Hotels)
- The YAML `15px / 500` and the §4 `14–16px` / `400–500` stay as a keep-both. Keeping both font records, and reading the mega-menu categories as this header's chrome rather than as a second nav token, are derived editorial implementation inferences from the verified surfaces; they are not KKday-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web tab; source names orange hover accent and mega-menu on hover |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A tab can be gated; visual treatment omitted |
| loading | not-applicable | Tab control; it commits no operation in place |
| error | not-applicable | Tab control; it commits no operation in place |
| success | not-applicable | Tab control; it commits no operation in place |

### Search (hero)

- Role: destination/experience search — the primary discovery entry point
- Background: `#ffffff` / `#FFFFFF`
- Border: YAML `1px solid #d9d9d9` · §4 `1px solid #D9D9D9` (or shadowed pill on hero)
- Radius: `8px`
- Trailing: orange search-submit button (`#ff5c00` / `#FF5C00`)
- §9 construction values that live only here, kept here (A3): destination input + date + travelers; soft shadow `0 4px 16px rgba(0,0,0,0.12)`
- Not in the token set. No primitive type is attached.
- Kind: interactive
- The `8px` radius is this search field's geometry. The trailing orange button is this field's submit control; it is not a second writing of Primary (Book / Action) as the same component. The `0 4px 16px rgba(0,0,0,0.12)` is this hero search's construction-prompt shadow. It is not only `tokens.shadow.dropdown`. Omitting a primitive type because the row is not in the token set, keeping the bordered-box writing beside the shadowed-pill writing, and reading those figures as this search field's geometry, are derived editorial implementation inferences from the verified surfaces; they are not KKday-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web search field; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable field; visual treatment omitted |
| disabled | applicable | A search field can be gated; visual treatment omitted |
| loading | not-applicable | Search field; in-place commit lives on the trailing orange submit |
| error | applicable | Search field; visual treatment omitted |
| success | not-applicable | Search field; results land in the card grid |

### Destination Card

- Role: destination discovery tiles
- Background: image-led with gradient overlay
- Radius: `8px`
- Text: white overlay on darkened image bottom
- Use: Destination discovery tiles
- Not in the token set. No primitive type is attached.
- Kind: interactive
- The `8px` radius is this tile's geometry. It is not only `tokens.rounded.md: 8` or `tokens.rounded.lg: 8`. Omitting a primitive type because the row is not in the token set, and reading that radius as this tile's geometry, are derived editorial implementation inferences from the verified surfaces; they are not KKday-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web destination tile; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A destination tile can be gated; visual treatment omitted |
| loading | not-applicable | Destination discovery tile; it commits no operation in place |
| error | not-applicable | Destination discovery tile; it commits no operation in place |
| success | not-applicable | Destination discovery tile; it commits no operation in place |

### Sticky mobile book-bar

- Role: full-width primary CTA at viewport bottom on product detail
- Source writings: white bar at viewport bottom; price left (`18px/700`); full-width-ish orange `Book Now` CTA right (`#FF5C00` / `#ff5c00`, `8px` radius)
- Not in the token set. No primitive type is attached.
- The source supplies no interaction evidence for the bar as its own control — the CTA is the Primary (Book / Action) row. Kind and applicability map are omitted (C4). The price `18px/700` is this bar's price writing. It is not only the Price type-role row. The `8px` radius is the CTA on this bar. Omitting a primitive type because the row is not in the token set, omitting kind and the map because the bar is chrome around the Primary CTA, and reading those figures as this bar's geometry, are derived editorial implementation inferences from the verified surfaces; they are not KKday-authored or a separately published UI specification.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

### Grid

- Responsive card grid: 4 columns desktop → 3 → 2 → 1 mobile
- Container max-width ~1200px, centered, with consistent gutters
- Horizontal scroll carousels for curated collections (destinations, "popular near you")

### Spacing

The source records an 8px-based spacing scale, tight card internals (8–12px), and generous section rhythm (40–64px). Those figures are the source's own layout measurements. Reading the card-internal `8–12px` as that measurement rather than as `tokens.spacing.sm: 8` or `tokens.spacing.md: 12`, and reading the section `40–64px` as that measurement rather than as `tokens.spacing.xl: 40` or `tokens.spacing.xxl: 64`, is a derived editorial implementation inference from the verified surfaces; it is not KKday-authored or a separately published UI specification.

### Density

KKday is **medium-high density** — a traveler compares many options at once, so cards pack efficiently while staying scannable. Whitespace is functional (separating cards, framing imagery), not luxurious. That paragraph is the source's own. Reading it as a layout rule for the recorded marketplace rather than as a separately published KKday layout specification is a derived editorial implementation inference from the verified surfaces; it is not KKday-authored or a separately published UI specification.

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

The ~1200px container, the four breakpoint rows, the 44px+ tap target, and the sticky book bar are the source's own figures. Reading them as the layout measurements the source recorded, rather than as a second token-set path, is a derived editorial implementation inference from the verified surfaces; it is not KKday-authored or a separately published UI specification.

<!-- design-md:section content-locales -->
## 6. Content & Locales

KKday speaks like an enthusiastic local friend who has actually done the tour — warm, specific, and encouraging, never pushy. The register is **inviting and benefit-led**: it sells the feeling of the experience ("explore", "dream", "discover") and backs it with concrete trust ("instant confirmation", "free cancellation"). The brand is genuinely multilingual — Traditional Chinese, English, Japanese, Korean, Thai, and more are first-class voices authored per market, not translated from one master. Copy avoids hard-sell discount-shouting; urgency, when present, is factual ("only 2 left") rather than manipulative. The homepage line "EXPLORE. DREAM. DISCOVER" captures the tone — aspirational verbs, clean and unhyped. The quoted lines are the source's own. Reading that register as this contract's voice, rather than as a separately published KKday microcopy guide, is a derived editorial implementation inference from the verified surfaces; it is not KKday-authored or a separately published UI specification.

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

- `EXPLORE. DREAM. DISCOVER` — homepage hero positioning. Verified: kkday.com/en-us hero copy via WebSearch result 2026-05-19.
- `Book Now` — primary conversion CTA. Illustrative/conventional: standard OTA CTA, not independently re-verified on live KKday surface this pass.
- `Instant confirmation · Free cancellation` — trust chips on experience cards. Illustrative: conventional KKday trust signals; not live-verified this pass.
- `Only 2 spots left for this date` — illustrative factual-urgency string. Illustrative: not verified as live KKday copy.
- `No experiences match these filters yet — try a nearby date or city.` — illustrative empty state. Illustrative: not verified as live KKday copy.

Keeping each sample's verified / illustrative class on the sample rather than promoting illustrative strings as live-verified copy is a derived editorial implementation inference from the verified surfaces; it is not KKday-authored or a separately published UI specification.

Published names and lines the source records, kept byte-exact: KKday, Book Now, Add to Cart, See availability, View Details, See more, Instant confirmation, Free cancellation, Mobile voucher, Only 2 left, Selling fast, EXPLORE. DREAM. DISCOVER, Explore. Dream. Discover., Instant confirmation · Free cancellation, Only 2 spots left for this date, No experiences match these filters yet — try a nearby date or city., View cart, Tours, Tickets, Transport, SIM/WiFi, Hotels, HURRY!, LAST CHANCE!, Oops! Something went wrong, No results found., the best tour in the world, BUY NOW OR MISS OUT!, Ming Chen, Star Travel, Ezfly, H.I.S., Rezio, FineDayClub, ActivityJapan. Classifying those strings as published names the source records and keeping them byte-exact is a derived editorial implementation inference from the verified surfaces; it is not KKday-authored or a separately published UI specification.

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

### Named gaps

These decisions are unnamed values, not permissions to invent. Calling this list a set of named gaps rather than a domain inventory, and treating the items as unnamed values rather than permissions to invent, is a derived editorial implementation inference from the verified surfaces; it is not KKday-authored or a separately published UI specification.

- live computed-style verification of kkday.com (source: not completed this pass)
- exact production hexes beyond the brief-provided primary `#FF5C00`
- inferred locale font stacks and inferred type-scale ranges as live-verified families or sizes
- unsourced easing curve values for `ease-standard`, `ease-enter`, and `ease-exit`
- `focus-visible` visual treatments
