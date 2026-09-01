# Meituan Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Meituan (美团 — literally "beautiful group", from its group-buying origin) is China's everything-local super-app — food delivery, restaurant reviews, hotel and travel booking, group-buying deals, grocery, bike-share, and dozens of other on-demand services. Catalog homepage identity is `https://www.meituan.com`. Treating that catalog homepage as identity rather than as a computed consumer-app token sheet is a derived editorial implementation inference from the verified surfaces; it is not Meituan-authored or a separately published UI specification.

The source records that `meituan.com` is largely a corporate site; the substantive product surface is the consumer app; no public CSS token layer is exposed. A 2026-05-19 live fetch of `meituan.com` confirmed the yellow brand color (delivery robots referenced as 小黄蜂 "little yellow bee"; rider gear/icon yellow), the kangaroo mascot energy, a clean tech-forward local-services aesthetic, mobile-first orientation (multiple app-download options), and the slogan **吃得更好，生活更好** ("eat better, live better"). Only the brand yellow (`#FFC300` / `#FFD100` variant) is verified in that packet. Price red-orange, coupon red, rating gold, and all neutral hexes in the color and component records are the source's own BEST-FIT APPROXIMATIONS of observed live-app usage and common delivery-app palettes, flagged "approximate" inline; they are not presented as verbatim Meituan tokens. Treating `meituan.com` as the named corporate evidence domain of this reconstruction, treating the consumer super-app as the substantive product surface the source reconstructs, keeping verified yellow unmerged from approximate non-yellow hexes, and keeping values attached to the surface or source note that established them, is a derived editorial implementation inference from the verified surfaces; it is not Meituan-authored or a separately published UI specification.

Source §1 describes the working surface as carrying the warmth and energy of a brand whose whole job is to *get you something good, now*. The signature is an unmistakable, optimistic **Meituan yellow** (`#FFC300`) — the color of its delivery riders' helmets and jackets, its app icon, its kangaroo mascot, and its primary call-to-action. This is a happy, appetite-stimulating yellow (close to a warm gold, RGB `255, 195, 0`), chosen because Meituan's core is food, and yellow is the color of hunger satisfied. It sits on clean white surfaces with near-black text, and it is *loud on purpose*: where a fintech whispers trust, Meituan shouts convenience and value — bright deal badges, prominent prices, big tappable CTAs. The brand's emotional register is **friendly utility at scale**: the kangaroo mascot (the袋鼠, "Daiwang" energy — a pouch-carrying courier) embodies the promise of fast, caring delivery, and the slogan **吃得更好，生活更好** ("Eat better, live better") frames the whole product as quality-of-life improvement, not just transactions. The interface is dense — a super-app must surface dozens of service entry points (icon grids), countless merchant cards, deals, ratings, and prices — but the bright yellow accents, rounded friendly shapes, and clear pricing keep it feeling helpful rather than overwhelming. This is a mobile-first, thumb-driven, value-conscious design language built for hundreds of millions of daily local-life transactions. Typography is system-font-first with full Simplified-Chinese coverage (`PingFang SC`, `Source Han Sans` / `思源黑体`, `Microsoft YaHei`), no custom brand typeface. Prices and deal numbers are set prominent and often in a warm red/orange for urgency, ratings in gold stars, and CTAs in the brand yellow with dark text. The visual loudness comes from color and price emphasis, not from heavy type. Those atmosphere sentences, the RGB companion, the fintech contrast, the袋鼠 / Daiwang writing, the dense-but-helpful bound, and the loudness-from-color-not-type bound are the source's own. Classifying them as atmosphere rather than as a published token specification, and classifying the yellow-because-food causal as the source's own editorial connection rather than as a Meituan-authored color rationale document, are derived editorial implementation inferences from the verified surfaces; they are not Meituan-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. Meituan was founded in **2010** in Beijing by **Wang Xing (王兴)** as a group-buying (团购) site — a Groupon-style deals platform amid China's "百团大战" ("war of a thousand group-buy sites"). Meituan survived and won that brutal shakeout, then expanded relentlessly outward from deals into the full breadth of local life: it acquired and integrated **Dianping (大众点评)**, China's leading restaurant-review platform, in 2015, and built out **food delivery (美团外卖)** — the business that came to define it — alongside hotel/travel booking, movie tickets, bike-share, grocery, and more. The throughline from group-buying to today is **value plus convenience for everyday local life**: Meituan's whole identity is making the good things nearby cheaper and faster to get. The design follows from that mission. The optimistic appetite-yellow, the kangaroo courier mascot, the prominent prices and deal badges, the concrete delivery promises, the dense service-entry grids — all of it serves a value-conscious user who wants the best nearby option, found fast, delivered soon. Meituan's slogan **吃得更好，生活更好** ("Eat better, live better") reframes the super-app from a utility into a quality-of-life partner, and the warm, friendly, slightly loud design language matches that promise: this is convenience with a smile, not a cold logistics machine. What Meituan refuses: the cold corporate sterility of a pure logistics utility, premium-minimal restraint that would hide prices and deals, vague delivery promises, and any design that makes the breadth of services hard to scan. What it embraces: an optimistic appetite-yellow, the caring-courier kangaroo, concrete value and delivery promises, dense-but-navigable service breadth, and real ratings as the trust currency of local discovery. The 2010 / Wang Xing (王兴) / 团购 / 百团大战 / Dianping (大众点评) 2015 / 美团外卖 facts, the throughline sentence, the design-follows-from-mission paragraph, and the refuse/embrace list are the source's own. The source marks that founding history as widely documented public history, not re-verified against a primary Meituan source this pass. Classifying that origin-to-current-service narrative as context that does not by itself supply interface tokens, and classifying the refuse/embrace list as the source's own editorial connection of observed chrome to positioning rather than as a published brand manifesto, are derived editorial implementation inferences from the verified surfaces; they are not Meituan-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product's primary tasks, each naming a YAML `use` string or the merchant-feed unit the source records, and not taking them from the source's Personas section, is a derived editorial implementation inference from the verified surfaces; it is not Meituan-authored or a separately published UI specification.

- Search from the top pill search bar (YAML `search-input` use: `Top pill search bar`).
- Scan merchant feed cards — cover, name, gold-star rating, category/distance/delivery-time, price-from, deal tags (YAML `merchant-card` use: `Merchant feed card unit`).
- Order or pay from the primary yellow CTA (`立即下单` / `去支付`; YAML `button-primary` use: `Primary CTA Order/Pay, dark text on yellow`).
<!-- design-md:claim-end -->

### Audience

No named individuals appear. The source labels its Personas section as fictional archetypes informed by publicly described Meituan user segments (everyday urban consumers, value-seekers, merchants), not individual people, so those archetypes are dropped rather than promoted, and no name, age, city, motivation, or affiliation classification is carried into this document. What the source independently records at a group level, outside that Personas section, is the value-conscious everyday local-life user in its Brand Narrative. Dropping those archetypes rather than promoting them, carrying no name, age, city, motivation, or affiliation classification, and reading those source-named groups as this product's audience, are derived editorial implementation inferences from the verified surfaces; they are not Meituan-authored or a separately published UI specification.

### Distinctive traits

The list restates the source's Key Characteristics. The values are recorded; classifying the list as that restatement, and the groupings and the readings inside them, are derived editorial implementation inferences from the verified surfaces; they are not Meituan-authored or a separately published UI specification.

- **Meituan yellow `#FFC300`** — optimistic, appetite-stimulating warm gold; rider gear, app icon, mascot, primary CTA; RGB `255, 195, 0`; `#FFD100` is a close-variant, not a second primary
- The **kangaroo (袋鼠) mascot** — embodies fast, caring, pouch-carrying delivery; 小黄蜂 "little yellow bee" on delivery robots
- Loud-on-purpose value/convenience design: bright deal badges, prominent prices, big tappable CTAs
- Super-app service-entry icon grids — dozens of local-life services surfaced at once (外卖/美食/酒店/电影/休闲玩乐…)
- Merchant cards with cover, name, rating (gold stars), price, distance, delivery time, deal tags
- Clean white surfaces + near-black text; the yellow + price-red carry the energy
- Slogan **吃得更好，生活更好** ("Eat better, live better") — quality-of-life framing
- Mobile-first, thumb-driven, dense-but-helpful; rounded friendly shapes, generous radii
- System-font-first + Simplified-Chinese fallbacks (`PingFang SC`, `思源黑体`); loudness from color, not type
- Price/urgency red-orange as the secondary energy color beside the brand yellow

### Principles

These 6 items — numbered stems the source states in its Principles section, plus every *UI implication* below as the source's own editorial reading — are a derived editorial implementation inference from the verified surfaces; they are not Meituan-authored or a separately published UI specification.

1. **Value and convenience, made loud.** Meituan's user wants the best nearby thing, cheap and fast. *UI implication:* Make price prominent and heavy (weight 600–700, red-orange), surface deals and delivery estimates clearly. Don't bury the value the user came for.
2. **Yellow is the brand; red-orange is the deal.** Two warm colors, two jobs. *UI implication:* Yellow `#FFC300` (with dark text) = brand + primary action. Red-orange = price + urgency + discount. Never blur them; never put white text on the yellow.
3. **Density is breadth, breadth is the product.** A super-app's value is having everything nearby in one place. *UI implication:* Embrace icon grids, packed merchant feeds, deal sections. Keep it navigable with bright accents, clear price hierarchy, and rounded cards — but don't "minimize" away the breadth.
4. **Concrete promises build trust.** "Est. 30 min" beats "soon"; a real rating beats a marketing claim. *UI implication:* Always give specific delivery estimates, real-time order status, and prominent gold-star ratings with review counts. Vagueness is off-brand.
5. **Warmth, not logistics-cold.** The kangaroo, the appetite-yellow, the friendly copy make a fast-moving transactional product feel caring. *UI implication:* Rounded friendly shapes, warm color, casual `你` copy, an order-tracking flow that reassures. Never a sterile logistics dashboard.
6. **Mobile-first, thumb-driven, one-handed.** Local life happens on the phone, on the go. *UI implication:* Bottom tab + sticky order/checkout bar, big CTAs, fly-to-cart, location-aware everything. Design for a hungry user with one free hand.

Treating those UI-implication tails as a derived editorial implementation inference rather than a separately published Meituan UI specification, including Don't-bury-the-value, Never-blur-the-two-warm-colors, never-put-white-text-on-the-yellow, don't-minimize-away-the-breadth, Vagueness-is-off-brand, Never-a-sterile-logistics-dashboard, and hungry-user-with-one-free-hand, is a derived editorial implementation inference from the verified surfaces; it is not Meituan-authored or a separately published UI specification.

Treating the following as a capture-bound application of source Do’s, including yellow-`#FFC300`-with-dark-text, red-orange-for-price-urgency-deal, price-prominent-and-heavy-weight-600–700, embrace-density, trust-signals-on-every-merchant-card, and rounded-friendly-shapes-PingFang-SC-思源黑体, is a derived editorial implementation inference from the verified surfaces; it is not Meituan-authored or a separately published UI specification.

- Use Meituan yellow `#FFC300` for the brand and primary action, always with dark text (never white on yellow).
- Use price red-orange (≈`#FF4B10`) for prices, urgency, and deal emphasis — the secondary energy color.
- Make price prominent and heavy (weight 600–700) — it's the headline of a merchant card.
- Embrace density — icon grids, packed merchant feeds, ratings and deals on every card. It's a super-app feature.
- Surface trust signals (gold star rating + review count + distance + delivery time) on every merchant card.
- Keep shapes rounded and friendly (8px cards, pill search), lead the font stack with `PingFang SC` / `思源黑体`.

### Avoid

The following items copy source Don’ts, unique voice-forbidden constraints, and the source HTML-comment prohibition on presenting approximate non-yellow hexes as verbatim tokens. They are a derived editorial implementation inference from the verified surfaces; they are not Meituan-authored or a separately published UI specification.

- Do not put white text on yellow — it fails contrast and looks off-brand. Dark `#222` text on yellow is correct.
- Do not confuse the two warm colors: yellow = brand/action, red-orange = price/value. Each has its job.
- Do not bury the price in body weight; a value-conscious user scans for it first.
- Do not strip the feed to "minimal" — that removes the breadth and value-comparison that's the whole point.
- Do not drop ratings/metadata for cleanliness — they're how users choose.
- Do not go sharp-corporate or premium-dark — the warmth and approachability are the brand.
- Do not present approximate non-yellow hexes to a brand owner as verbatim Meituan tokens.
- Do not use hard-sell carnival hype that erodes trust — empty `史上最低！` (lowest ever!) without substance, fake-scarcity FOMO.
- Do not use the formal `您` in casual ordering contexts (reserve for legal/payment).
- Do not use cold humorless system copy on a warm consumer service.
- Do not use vague delivery promises ("尽快送达" / "soon") — Meituan's trust is built on *concrete* time estimates, so vagueness is off-brand.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

The source does not expose a public CSS token layer; the values below combine the brand yellow with observable live-site usage. Non-yellow neutral hexes are best-fit approximations and flagged accordingly. Catalog `primary_color` `#FFC300` is YAML `tokens.colors.brand` `#ffc300` and body **Meituan Yellow**. An alternate `#FFD100` (YAML `brand-alt` `#ffd100`) is also widely cited for Meituan's yellow; treat `#FFC300` as primary and `#FFD100` as a close-variant. Role note from the source: Yellow is the brand and the primary action; red-orange is price/urgency/value. The two warm colors do different jobs and shouldn't be confused — yellow says "tap here / it's Meituan", red-orange says "great price / act now". Because the surfaces are otherwise white-and-gray, both warm colors carry strong signal. The following unmerged-role readings — catalog-`#FFC300`-as-primary-not-`#FFD100`-as-a-second-primary, on-brand-`#222222`-not-white-on-yellow, yellow-pressed-and-tint-as-approximate-and-unmerged-from-primary, price-`#FF4B10`-unmerged-from-price-alt-`#FF5722`-unmerged-from-coupon-`#FF2D55`-unmerged-from-rating-gold-`#FFB000`, card-`#FFFFFF`-unmerged-from-page-ground-`#F5F5F5`, the-same-`#FFFFFF`-as-card-fill-unmerged-from-button-secondary-fill-unmerged-from-search-input-fill-unmerged-from-service-entry-fill-unmerged-from-deal-tag-on-red-text, primary-text-unmerged-from-secondary-unmerged-from-hint, the-same-`#222222`-as-on-brand-unmerged-from-primary-text-unmerged-from-secondary-button-fg-unmerged-from-search-fg-unmerged-from-deal-tag-on-yellow, hairline-unmerged-from-divider, success-unmerged-from-error-unmerged-from-warning, warning-sits-close-to-the-brand-yellow-used-carefully, and YAML-component-fields-staying-on-those-controls — are a derived editorial implementation inference from the verified surfaces; they are not Meituan-authored or a separately published UI specification.

**Brand** (yellow verified; pressed/tint/on-brand flagged approximate in the source):

- **Meituan Yellow / catalog primary** (`#FFC300`): YAML `brand`. The brand. App icon, rider gear, mascot, primary CTA fill, active states. A warm appetite-yellow/gold. RGB `rgb(255, 195, 0)`.
- **Yellow close-variant** (`#FFD100`): YAML `brand-alt`. Widely cited; close-variant, not a second primary.
- **Yellow Pressed** (≈`#F5B800`, approximate): YAML `brand-pressed` `#f5b800`. Darker yellow for primary-button hover/press.
- **Yellow Tint** (≈`#FFF8E0`, approximate): YAML `brand-tint` `#fff8e0`. Light yellow wash for selected backgrounds, deal-section bands; YAML `coupon-chip` fill.
- **CTA Text on Yellow / on-brand** (≈`#222222`, near-black, approximate): YAML `on-brand`. Yellow CTAs use dark text, not white — yellow + white fails contrast.

**Energy / Price** (approximate):

- **Price Red-Orange** (≈`#FF4B10` / `#FF5722`, approximate): YAML `price` `#ff4b10`, `price-alt` `#ff5722`. Prices, urgency, "限时" (limited-time) badges, discount emphasis. The secondary energy color. YAML `coupon-chip` fg and YAML `deal-tag` bg use `#ff4b10`.
- **Coupon Red** (≈`#FF2D55`, approximate): YAML `coupon` `#ff2d55`. Coupon/voucher chips, hard-discount flags.
- **Rating Gold** (≈`#FFB000`, approximate): YAML `rating-gold` `#ffb000`. Star ratings (a gold close to the brand yellow).

**Surface:**

- **Page Ground** (≈`#F5F5F5`, approximate): YAML `page-ground` `#f5f5f5`. App page background behind cards/sections.
- **Card White** (`#FFFFFF`): YAML `card` `#ffffff`. Merchant cards, panels, modals. Same hex as YAML `button-secondary` / `search-input` fills; named jobs stay unmerged.

**Text (near-black + opacity)** (approximate):

- **Primary Text** (≈`#222222` / `#000000E0`, approximate): Merchant names, primary body. Same hex writing as on-brand; named jobs stay unmerged.
- **Secondary Text** (≈`#888888` / `#00000066`, approximate): YAML `text-secondary` `#888888`. Categories, distance, metadata, descriptions.
- **Tertiary / Hint** (≈`#BBBBBB`, approximate): YAML `text-hint` `#bbbbbb`. Placeholders, disabled labels.

**Border & Divider** (approximate):

- **Hairline Border** (≈`#EEEEEE`, approximate): YAML `border` `#eeeeee`. Card edges, input borders; YAML `button-secondary` border.
- **Divider** (≈`#F2F2F2`, approximate): YAML `divider` `#f2f2f2`. Section/list separators.

**State** (approximate):

- **Success** (≈`#52C41A`, approximate): YAML `success` `#52c41a`. Order confirmations, "已送达" (delivered).
- **Error** (≈`#FF4D4F`, approximate): YAML `error` `#ff4d4f`. Form errors, failed payment.
- **Warning** (≈`#FAAD14`, approximate): YAML `warning` `#faad14`. Cautions (sits close to the brand yellow, used carefully).

### Spacing

YAML `spacing`: xs 2, sm 6, md 8, base 10, lg 16, xl 20, xxl 32, section 48. Those YAML numbers are recorded without a px suffix; none is added here. Treating those YAML numbers as recorded without a required px suffix, and adding no px suffix here, is a derived editorial implementation inference from the verified surfaces; it is not Meituan-authored or a separately published UI specification.

Source §5 recorded px (unmerged from the YAML numbers):

| Use | Value |
|---|---|
| Card gap | `8–10px` |
| Card padding | `10–12px` |
| Icon-grid item | `~25% width` (4-per-row) |
| Chip padding | `2px 8px` |
| Page horizontal margin | `12px` |
| Section vertical | `12–16px` |

Treating YAML numbers as recorded without a required px suffix, treating those px writings as body-recorded observations rather than a converted YAML scale, treating card-gap-`8–10px`-unmerged-from-YAML-md-8-and-base-10, treating card-padding-`10–12px`-unmerged-from-YAML-base-10-and-YAML-merchant-card-padding-10, and treating no-site-wide-spacing-token-as-merged-from-those-two-lists, is a derived editorial implementation inference from the verified surfaces; it is not Meituan-authored or a separately published UI specification.

### Shape

YAML `rounded`: sm 4, md 8, lg 20, full 9999.

The following local-geometry reading, including YAML-4-unmerged-from-YAML-8-unmerged-from-YAML-20-unmerged-from-YAML-full-9999, 4px-on-chips-and-deal-tags, 8px-on-cards-and-buttons-and-form-fields, 20px-pill-search, and not-a-universal-radius-scale, is a derived editorial implementation inference from the verified surfaces; it is not Meituan-authored or a separately published UI specification. YAML 4 / 8 / 20 / 9999 stay unmerged. Source Don’ts say not to go sharp-corporate; 8px cards and pill search are the friendly signature. YAML `search-input` radius 20 is the pill search; form fields in the same Inputs section use 8px.

### Elevation

YAML `shadow.none`: `none`. Source §6: Meituan is **mostly flat** with card-on-ground separation; depth appears on floating UI and sticky bars.

| Level | Value (approx) | Use |
|---|---|---|
| Flat | none | Default — merchant cards, tiles, inputs |
| Card | `0 1px 4px rgba(0,0,0,0.04)` | Subtle card lift (web) |
| Sticky bar | `0 -2px 8px rgba(0,0,0,0.06)` | Bottom order/checkout bar, sticky cart |
| Floating | `0 4px 16px rgba(0,0,0,0.1)` | Dropdowns, address picker, modals |

**Z-Index** (source-stated layering, not a numeric token): Sticky top bar + bottom action bar above content; floating pickers/dropdowns above page; Modal + mask above pickers; Toast at highest level.

Treating YAML `none` as unmerged from the three approximate numeric rows, treating those numeric rows as source-stated approximate rather than as promoted shadow tokens, treating z-index as source-stated layering rather than as a token, and treating mostly-flat-with-card-on-ground-separation as source-stated register rather than as a depth scale for every Meituan surface, is a derived editorial implementation inference from the verified surfaces; it is not Meituan-authored or a separately published UI specification. No numeric shadow token is promoted.

### Motion

Source §15 durations, easing names, spring stance, signature motions, and reduced-motion, preserved. Treating the duration table and easing names as source-stated rather than computed CSS, treating exact cubic-bezier curves as cited from source §15 then omitted at the curve-value boundary rather than promoted as motion tokens, and treating the three catalog-template curves as unattributed while citing the source-reserved `ease-fly` curve as that reserved fly-only record rather than as a catalog-template curve, is a derived editorial implementation inference from the verified surfaces; it is not Meituan-authored or a separately published UI specification.

Meituan's motion is **brisk, friendly, and reassuring** — energetic enough to feel lively (it's a fast service), calm enough at the money/tracking moments to build trust. The signature flourish is the add-to-cart fly arc. Source §6 Animation also names add-to-cart fly-to-cart arc (the signature delivery-app micro-interaction), banner carousel auto-advance, bottom cart/checkout bar slide, and friendly, brisk easing — energetic but not bouncy. Those §6 names stay unmerged from the §15 token table. Treating those §6 Animation names as unmerged from the §15 duration and easing table is a derived editorial implementation inference from the verified surfaces; it is not Meituan-authored or a separately published UI specification.

**Durations:**

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Tab/toggle commits, quantity steppers |
| `motion-fast` | 200ms | Hover, chip select, button feedback |
| `motion-standard` | 300ms | Add-to-cart fly, dropdowns, bottom-bar slide |
| `motion-slow` | 450ms | Banner carousel transition, order-confirm reveal |

Unsourced easing curves from the catalog template (`ease-standard` `cubic-bezier(0.4, 0, 0.2, 1)`, `ease-enter` `cubic-bezier(0.0, 0.0, 0.2, 1)`, `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)`) are omitted at the curve-value boundary. The source-reserved fly curve (`ease-fly` `cubic-bezier(0.45, 0, 0.2, 1.2)`) is cited from the same §15 table and omitted at that same boundary; it is not a catalog-template curve. Easing names and uses stay:

| Token | Curve | Use |
|---|---|---|
| `ease-standard` | omitted (unattributed cubic-bezier; source-stated name and use only) | Default two-way transitions |
| `ease-enter` | omitted (unattributed cubic-bezier; source-stated name and use only) | Sheets, pickers, bottom bar arriving |
| `ease-exit` | omitted (unattributed cubic-bezier; source-stated name and use only) | Dismissals |
| `ease-fly` | omitted at the curve-value boundary (source-reserved; **Reserved.**) | The add-to-cart fly arc — a small kinetic flourish only there |

**Spring stance.** Overshoot is **reserved for the add-to-cart fly** — the small arc of an item flying into the cart with the count badge bumping is Meituan's one playful kinetic moment, and it's emotionally apt (you just grabbed something good). Order-tracking and payment moments are calm and steady — confidence, not bounce. Chrome transitions are brisk and standard. Treating that spring-stance paragraph as a derived editorial implementation inference from the verified surfaces, not a separately published Meituan motion specification, is a derived editorial implementation inference from the verified surfaces; it is not Meituan-authored or a separately published UI specification.

**Signature motions** (source-stated):

1. **Add-to-cart fly.** Tapping "add" sends a small image/dot arcing from the item to the cart over `motion-standard / ease-fly`; the cart count badge bumps. The signature delivery-app micro-interaction.
2. **Order-status progression.** The tracker steps advance with a calm fill/checkmark over `motion-standard / ease-standard`; the map ETA updates smoothly. Reassurance, no bounce.
3. **Bottom action bar.** The sticky cart/checkout bar slides up over `motion-standard / ease-enter` when items are added; total updates inline.
4. **Banner carousel.** Auto-advances with a slow `ease-standard` slide; manual swipe respects momentum.
5. **Reduce motion.** Under `prefers-reduced-motion: reduce`, the fly-to-cart becomes an instant count bump, tracker steps update without animation, and carousels can be paused. Fully functional, no forced kinetics.

Treating those signature-motion characterizations — signature-delivery-app-micro-interaction, Reassurance-no-bounce, total-updates-inline, manual-swipe-respects-momentum, and Fully-functional-no-forced-kinetics — as a derived editorial implementation inference from the verified surfaces; they are not Meituan-authored or a separately published UI specification.

Exact cubic-bezier curves are cited from source §15 then omitted at the curve-value boundary rather than promoted as motion tokens. Do not promote an easing curve, animation name, transition property, or a duration beyond the tables above until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or duration is not that gate. A partial confirmation — one curve read off one element, or a match against an official framework or vendor document — does not satisfy that condition. Any exact animation curve remains a local extension until that per-component computed observation exists.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

Treating the following evidence-class application, including PingFang-SC-as-YAML-family-sans-and-mono, the-recorded-CJK-first-stack, no-custom-brand-typeface-as-source-stated, and system-fallback-not-the-brand-face, is a derived editorial implementation inference from the verified surfaces; it is not Meituan-authored or a separately published UI specification.

| Evidence class | Resolution |
|---|---|
| Official product-use | The `meituan.com` corporate fetch confirms slogan and yellow brand color; it does not publish a universal current typography token. |
| Live / source-stated stack | System UI fonts lead with comprehensive Simplified-Chinese fallbacks (`PingFang SC` on Apple, `Source Han Sans SC` / `思源黑体` and `Microsoft YaHei` cross-platform). YAML `family.sans` `PingFang SC`; YAML `family.mono` `PingFang SC`. |
| Source-stated webfont boundary | Source §3: No custom brand typeface — the energy comes from the yellow + price emphasis, so the type stays native and dense-friendly. |
| Official distributed brand asset | This pass did not confirm a Meituan-exclusive distributed type family. |
| Outside this reconstruction | Exact computed type metrics from a public consumer-app token layer stay unnamed; no such layer is exposed. |

### Family

- **YAML named UI family:** `PingFang SC` — YAML `family.sans` and YAML `family.mono`
- **Recorded stack:** `-apple-system, BlinkMacSystemFont, "PingFang SC", "Source Han Sans SC", "思源黑体", "Microsoft YaHei", "微软雅黑", "Helvetica Neue", Arial, sans-serif`

The following font-use boundary, including do-not-present-Helvetica-Neue-or-Arial-as-PingFang-SC, always-carry-the-CJK-first-fallback-chain, and never-hardcode-a-Latin-only-font, is a derived editorial implementation inference from the verified surfaces; it is not Meituan-authored or a separately published UI specification. Do not present `-apple-system`, `BlinkMacSystemFont`, `Helvetica Neue`, or `Arial` as PingFang SC. Always carry the CJK-first fallback chain; never hardcode a Latin-only font. Do not substitute a system font for a different claimed family.

### Type roles

YAML sizes are recorded without a required px suffix; body §3 writes ranges with px. Treating YAML-header-18-unmerged-from-body-17–20px, YAML-merchant-16-unmerged-from-body-15–16px, YAML-price-18/700-unmerged-from-body-16–20px/600–700, YAML-body-14-unmerged-from-body-13–14px, YAML-meta-13-unmerged-from-body-12–13px, YAML-badge-11/500-unmerged-from-body-10–12px/400–500, and YAML-button-primary-font-15px/500-as-a-component-field-not-a-type-role-row, is a derived editorial implementation inference from the verified surfaces; it is not Meituan-authored or a separately published UI specification.

| Role | Font | Size | Weight | Line height | Tracking | Provenance |
|---|---|---:|---:|---:|---|---|
| Page/section header | PingFang SC | YAML 18 / body `17–20px` | 600 | | | YAML `header` use: `Section/page titles, merchant detail name` |
| Merchant name (card) | PingFang SC | YAML 16 / body `15–16px` | 500 | | | YAML `merchant` use: `Merchant name on card, one-line ellipsized` |
| Price | PingFang SC | YAML 18 / body `16–20px` | YAML 700 / body 600–700 | | | YAML `price` use: `Price, the loud number` |
| Body / category | PingFang SC | YAML 14 / body `13–14px` | 400 | | | YAML `body` use: `Body, category, deal description` |
| Metadata | PingFang SC | YAML 13 / body `12–13px` | 400 | | | YAML `meta` use: `Distance, delivery time, rating count` |
| Badge / tag | PingFang SC | YAML 11 / body `10–12px` | YAML 500 / body 400–500 | | | YAML `badge` use: `Deal tags, coupon chips` |

**Weights** (source §3): Medium (500): Merchant names, CTA labels, active tabs, section heads. Regular (400): Body, categories, metadata, descriptions. Semibold (600) / Bold (700): Prices, deal numbers, key emphasis — Meituan *does* go heavy on numbers, because price is the message.

**Conventions** (source §3): Treating Price-is-heavy-and-prominent, currency-symbol-smaller-than-the-figure, Price-is-the-headline-of-a-merchant-card, Numbers-everywhere, Merchant-names-clamp-to-one-line, and CJK-first as source-stated conventions rather than as a published type specification, is a derived editorial implementation inference from the verified surfaces; it is not Meituan-authored or a separately published UI specification.

- **Price is heavy and prominent** — often weight 600–700 in red-orange, frequently with the currency symbol smaller than the figure. Price is the headline of a merchant card.
- **Numbers everywhere** — ratings, distance, delivery time, deal counts, prices — all first-class metadata.
- **Merchant names clamp to one line**; categories and metadata stack below in gray.
- **CJK-first** — fallback stack chosen so Simplified Chinese renders crisply in dense card layouts.

### Assets

Catalog logo: type `favicon`. Treating that Google favicon lookup as a catalog identity-boundary record rather than a captured first-party Meituan mark, and not promoting it as a portable mark file, is a derived editorial implementation inference from the verified surfaces; it is not Meituan-authored or a separately published UI specification.

Merchant covers / food photography: square or 4:3, `object-fit: cover`, lazy-loaded. Service icons: colorful, distinct per service. Banners: auto-advancing promotional carousel. Treating those media rules as source-stated rather than as a complete image specification is a derived editorial implementation inference from the verified surfaces; it is not Meituan-authored or a separately published UI specification. The kangaroo (袋鼠) is Meituan's mascot.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

Preserving the source state contract here is a derived editorial implementation inference from the verified surfaces; it is not Meituan-authored or a separately published UI specification.

Source §14, preserved:

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

Characterizations such as Location-aware-and-helpful, never-hides-money-failures-are-explicit, Reassuring-concrete, The-defining-post-purchase-experience, never-on-price-placeholder-dash, and Reduced-opacity-plus-gray-fill-together are a derived editorial implementation inference from the verified surfaces; they are not Meituan-authored or a separately published UI specification.

The source HTML comment records: only the brand yellow (`#FFC300` / `#FFD100` variant) is verified; price red-orange, coupon red, rating gold, and all neutral hexes in §2/§4 are BEST-FIT APPROXIMATIONS, flagged "approximate" inline. Voice samples marked illustrative are not quoted live strings (except the slogan, cited from meituan.com). Treating that verified-versus-approximate split as the source’s own evidence class rather than as a second token sheet is a derived editorial implementation inference from the verified surfaces; it is not Meituan-authored or a separately published UI specification.

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless recorded as that same canonical state. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow the control’s product role, not its primitive kind. Where exact selector/request/outcome mapping is unresolved, those three applicability fields are omitted at this boundary rather than closed from the §14 rows. This is not a complete state-coverage claim.

YAML `button-primary` hover/press ≈`#F5B800` is a named source-stated hover/press treatment on that button, not `focus-visible` evidence, and is not copied onto a `focus-visible` row as a colour. Treating named hover/press as not `focus-visible` evidence, treating unresolved request/outcome mapping as omitted-L-E-S-fields-rather-than-closed-from-§14-rows, and treating this as not a complete state-coverage claim, is a derived editorial implementation inference from the verified surfaces; it is not Meituan-authored or a separately published UI specification.

Treating merchant-card YAML `type: card` with no interactive-kind confirmation so kind and a state-applicability map are omitted, and treating coupon-chip / deal-tag YAML `type: badge` as Kind non-interactive so a state-applicability map is omitted, is a derived editorial implementation inference from the verified surfaces; it is not Meituan-authored or a separately published UI specification.

### Primary CTA (Order / 立即下单, 去支付)

- Role: Primary action — Order now, Pay, Buy deal. Yellow with dark text.
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#FFC300` (YAML `#ffc300`)
- Text: ≈`#222222` (dark text on yellow — never white)
- Border: none
- Radius: 8px (or pill 20px for compact action chips)
- Padding: `10px 20px`
- Font: `15px / 500` (YAML `font: "15px/500"`)
- Hover/press: background ≈`#F5B800`
- Use: YAML `Primary CTA Order/Pay, dark text on yellow`
- YAML `tokens.components.button-primary`
- Field note: The following unmerged-field reading, including this-fill-as-catalog-`primary_color`-not-`#FFD100`, on-fill-dark-not-white, radius-8-unmerged-from-pill-20, and hover-press-`#F5B800`-not-focus-visible, is a derived editorial implementation inference from the verified surfaces; it is not Meituan-authored or a separately published UI specification. `#FFC300` is this control’s fill and catalog `primary_color`. ≈`#222222` is this control’s on-fill label. Radius 8px is this default; pill 20px is for compact action chips. Named hover/press ≈`#F5B800` is not copied onto the `focus-visible` row.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | YAML/body primary CTA |
| hover | applicable | Pointer-web button; source-stated hover/press ≈`#F5B800` (approximate) |
| focus-visible | applicable | Interactive control; visual treatment omitted. Named hover/press is not this row. |
| disabled | applicable | §14 Loading (order placing) records a disabled yellow CTA; Disabled: reduced opacity + gray fill together, keeps rounded shape |
| loading | applicable | §14 Loading (order placing): inline spinner + "下单中…" on a disabled yellow CTA |
| error | applicable | Order/Pay can fail; §14 Error (payment failed) is a money-failure treatment; visual treatment omitted beyond that row |

Treating success applicability as omitted on this Order/Pay button because §14 Success (order placed) is a page-level confirmation + tracker, not a paint on this button, is a derived editorial implementation inference from the verified surfaces; it is not Meituan-authored or a separately published UI specification. Success applicability is omitted. Source names this control as Primary CTA Order/Pay; confirmation + order number + 骑手已接单 sit on the post-purchase surface, not on the button.

### Secondary (ghost / outline)

- Role: Secondary action beside the primary CTA
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#FFFFFF`
- Text: ≈`#222222`
- Border: 1px solid ≈`#EEEEEE` (or 1px yellow for emphasis)
- Radius: 8px
- Padding: `10px 20px`
- Font: `15px / 500`
- Use: YAML `Ghost/outline secondary action`
- YAML `tokens.components.button-secondary`
- Field note: The following unmerged-field reading, including this-fill-`#FFFFFF`-not-page-ground-`#F5F5F5`, this-fg-as-this-control-not-a-second-on-brand-job, and 1px-hairline-unmerged-from-1px-yellow-for-emphasis, is a derived editorial implementation inference from the verified surfaces; it is not Meituan-authored or a separately published UI specification. `#FFFFFF` is this control’s fill. Hairline ≈`#EEEEEE` and 1px yellow are two recorded border writings, not merged.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | YAML ghost/outline beside primary |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | An outline action can be unavailable; visual treatment omitted |

Treating loading, error, and success applicability as omitted on this lower-emphasis outline action because exact request/outcome mapping is unresolved, rather than closing those fields from the §14 rows, is a derived editorial implementation inference from the verified surfaces; it is not Meituan-authored or a separately published UI specification. Loading, error, and success applicability are omitted. Source names this control as a secondary action beside the primary CTA; exact request/outcome mapping is unresolved, so those three fields stay omitted at this boundary rather than closed from the §14 rows.

### Discount / Coupon Chip

- Role: Discount/coupon flag — "满30减10", "限时5折"
- Kind: non-interactive
- Type: badge
- Anatomy: flag
- Background: ≈`#FFF8E0` (yellow tint) or red-tint
- Text: ≈`#FF4B10` (price red-orange)
- Border: 1px dashed/solid red-orange
- Radius: 4px
- Padding: `2px 8px`
- Font: `12px / 500` (YAML `font: "12px/500"`; body badge role also `10–12px` / 400–500)
- Use: YAML `Discount/coupon flag`
- YAML `tokens.components.coupon-chip`
- Field note: The following unmerged-field reading, including yellow-tint-unmerged-from-red-tint, YAML-12px/500-unmerged-from-body-badge-10–12px/400–500, dashed-unmerged-from-solid, and Kind-non-interactive-so-no-state-map, is a derived editorial implementation inference from the verified surfaces; it is not Meituan-authored or a separately published UI specification. Kind is non-interactive because the YAML use is a discount/coupon flag, not a control. A state-applicability map is omitted.

### Search / Default

- Role: Top search bar (pill), address/form fields
- Kind: interactive
- Type: input
- Anatomy: value field
- Background: `#FFFFFF` (or filled ≈`#F5F5F5`)
- Text: ≈`#222222`
- Border: 1px solid ≈`#EEEEEE` (or borderless filled)
- Radius: 20px (pill search) / 8px (form field)
- Padding: `8px 16px`
- Font: `14px / 400`
- Use: YAML `Top pill search bar`
- YAML `tokens.components.search-input`
- Field note: The following unmerged-field reading, including pill-20-unmerged-from-form-8, white-fill-unmerged-from-filled-`#F5F5F5`, 1px-hairline-unmerged-from-borderless-filled, and this-fill-not-card-surface-as-a-merged-token, is a derived editorial implementation inference from the verified surfaces; it is not Meituan-authored or a separately published UI specification. YAML radius 20 is the pill search; form fields in the same section use 8px.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | YAML top pill search bar |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A search field can be unavailable; visual treatment omitted |
| error | applicable | Form field; source State row records form errors at ≈`#FF4D4F`; visual treatment omitted beyond that row |

Treating loading and success applicability as omitted on this search/address field because feed loading and order-placed confirmation in §14 are not paints on this field, and exact request/outcome mapping to the input is unresolved, is a derived editorial implementation inference from the verified surfaces; it is not Meituan-authored or a separately published UI specification. Loading and success applicability are omitted. Source names this control as top pill search / address/form fields; card-grid skeleton and order confirmation sit on the feed and post-purchase surfaces.

### Merchant Card (feed)

- Role: The atomic unit of a service feed (restaurants, hotels, deals)
- Type: card
- Anatomy: thumbnail (square cover, left or top) + merchant name (15px/500) + gold star rating + category/distance/delivery-time (12px gray) + price-from (red-orange) + deal tags
- Background: `#FFFFFF`
- Border: none (separation by gray ground + gap)
- Radius: 8px
- Padding: YAML `10px` / body `10–12px`
- Shadow: none default; subtle lift on hover (web)
- Font: YAML no font key; body merchant name `15–16px` / 500, one-line ellipsized
- Use: YAML `Merchant feed card unit`
- YAML `tokens.components.merchant-card`
- Field note: The following unmerged-field reading, including YAML-padding-10-unmerged-from-body-10–12px, YAML-merchant-16-unmerged-from-body-15px/500-on-the-card, this-fill-`#FFFFFF`-not-page-ground, the-source-prompt-15px-weight-500-`#222`-1-line-clamp as a second writing of the name row, the-source-prompt-price-from-weight-600 as unmerged from YAML price 700, sits-on-`#F5F5F5`-ground-with-8px-gap, omit-kind-and-map, and subtle-lift-on-hover-web-not-a-Core-applicability-row-and-not-focus-visible, is a derived editorial implementation inference from the verified surfaces; it is not Meituan-authored or a separately published UI specification. `#FFFFFF` is this card’s fill. Kind and a state-applicability map are omitted (YAML `type: card`; no interactive-kind confirmation). Subtle lift on hover (web) stays a source-stated named treatment on this card, not a Core applicability row and not `focus-visible` evidence. The source prompt also writes merchant name 15px weight 500 `#222` (1-line clamp), price-from in red-orange `#FF4B10` weight 600, deal tag chips ('免配送费' / '满30减10'), and sits on `#F5F5F5` ground with 8px gap.

### Service-Entry Tile (icon grid)

- Role: The super-app home grid — 外卖/美食/酒店/电影/休闲玩乐… dozens of service entry points
- Kind: interactive
- Anatomy: colorful service icon (40–48px; source prompt writing 44px) + label (12px/400) below
- Background: `#FFFFFF`
- Radius: 8px
- Layout: 4-per-row tiles (`~25% width`); white ground, generous tap targets
- Field note: The following unmerged-field reading, including body-40–48px-unmerged-from-source-prompt-44px, 4-per-row-unmerged-from-~25%-width, and destination-link-L-E-S-not-applicable, is a derived editorial implementation inference from the verified surfaces; it is not Meituan-authored or a separately published UI specification. No YAML component key exists for this tile; the body §4 record and the source prompt 44px writing both stay.

Treating loading, error, and success as not-applicable on this service-entry tile because the tile is a destination into a local-life service and does not place an order, pay, or validate a form on itself, is a derived editorial implementation inference from the verified surfaces; it is not Meituan-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Source §4 super-app home grid |
| hover | applicable | Pointer-web destination tile; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A service entry can be unavailable; visual treatment omitted |
| loading | not-applicable | A service-entry destination does not commit an order or payment on the tile |
| error | not-applicable | The tile is not a form field; out-of-range / closed-merchant errors sit on the feed |
| success | not-applicable | Order-placed confirmation is not a paint on a service-entry tile |

### Deal / Activity Tag

- Role: merchant/deal flags — "新店", "限时", "团购", "免配送费"
- Kind: non-interactive
- Type: badge
- Anatomy: flag
- Background: red-orange (≈`#FF4B10`) or yellow (`#FFC300`)
- Text: `#FFFFFF` (on red) / `#222222` (on yellow)
- Radius: 4px
- Padding: `2px 6px`
- Font: `10–12px / 500` (YAML `font: "11px/500"`)
- Use: YAML `Deal/activity flag`
- YAML `tokens.components.deal-tag`
- Field note: The following unmerged-field reading, including red-orange-unmerged-from-yellow-fill, white-on-red-unmerged-from-dark-on-yellow, YAML-11px/500-unmerged-from-body-10–12px/500, padding-2px-6px-unmerged-from-coupon-2px-8px, and Kind-non-interactive-so-no-state-map, is a derived editorial implementation inference from the verified surfaces; it is not Meituan-authored or a separately published UI specification. Kind is non-interactive because the YAML use is a deal/activity flag, not a control. A state-applicability map is omitted.

### Rating

- Role: Merchant trust signal — first-class on every card
- Kind: non-interactive
- Anatomy: Gold stars (≈`#FFB000`) + numeric score (red-orange or dark) + review count (gray)
- Field note: Treating gold-stars-unmerged-from-numeric-score-unmerged-from-review-count, and Kind-non-interactive-so-no-state-map, is a derived editorial implementation inference from the verified surfaces; it is not Meituan-authored or a separately published UI specification. No YAML component key. Kind is non-interactive because the use is a trust signal, not a control. A state-applicability map is omitted.

### Navigation

Source §4 Navigation, preserved as composition rather than as a YAML component key. Treating top-bar / service-nav / bottom-tab as source-stated chrome rather than as a harvested component token, is a derived editorial implementation inference from the verified surfaces; it is not Meituan-authored or a separately published UI specification.

- Top bar: yellow/dark logo + kangaroo, city/location selector, pill search, login/cart right
- Service nav: icon-grid home + horizontal category tabs
- Active tab: yellow text/underline or yellow pill background
- Mobile: bottom tab bar (首页/订单/我的…), brand-yellow active state

### Bottom tab bar

- Role: mobile bottom tab (首页/订单/我的…)
- Kind: interactive
- Anatomy: tab items; brand-yellow active state
- Field note: Treating this tab as a destination/selector that commits no order on itself, so loading/error/success are not-applicable, is a derived editorial implementation inference from the verified surfaces; it is not Meituan-authored or a separately published UI specification. No YAML component key.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Source §4 mobile bottom tab |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A tab can be gated; visual treatment omitted |
| loading | not-applicable | A bottom tab selects 首页/订单/我的; it commits no operation in place |
| error | not-applicable | A bottom tab does not report a failed request on itself |
| success | not-applicable | Reaching the selected tab is not an operation this tab reports as success |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The following layout readings — high-density-utility, Density-is-the-feature, more-options-found-faster, yellow-accents-clear-price-hierarchy-rounded-cards-keep-density-navigable-rather-than-chaotic, Home-icon-grid-plus-banner-plus-feed, YAML-spacing-without-a-px-suffix, and body-spacing-table-unmerged-from-YAML-numbers — are a derived editorial implementation inference from the verified surfaces; they are not Meituan-authored or a separately published UI specification.

Meituan is **high-density utility**. A local-life super-app must surface a huge breadth of services and merchants — icon grids, banners, merchant cards, deals, ratings, prices — all on one scroll. Density is the feature: more options found faster. The bright yellow accents, clear price hierarchy, and rounded cards keep the density navigable rather than chaotic.

**Grid** (source §5):

- Home: service-entry icon grid (4–5 per row) + banner carousel + merchant/deal feed
- Service feed: single-column merchant cards (mobile) or 2–3 column (web)
- Merchant detail: cover + info + menu/deals list + reviews

YAML spacing is xs 2, sm 6, md 8, base 10, lg 16, xl 20, xxl 32, section 48, recorded without a px suffix. Body spacing table (card gap `8–10px`, card padding `10–12px`, icon-grid `~25% width` 4-per-row, chip `2px 8px`, page horizontal `12px`, section vertical `12–16px`) stays unmerged from those YAML numbers.

| Width | Behavior |
|---|---|
| Desktop `>1280px` | Multi-column merchant grid, wide service nav, banner carousel |
| Laptop `1024–1280px` | 2–3 column merchant grid |
| Tablet `768–1024px` | 2-column merchant grid, condensed nav |
| Mobile `<768px` | Single-column merchant feed, icon-grid home, bottom tab + sticky cart/order bar |

Treating that Desktop/Laptop/Tablet/Mobile table as source-stated responsive behavior rather than a measured breakpoint token sheet, including Mobile-first-thumb-driven, City-location-selector-prominent, Min-44px-tap-targets, big-primary-CTAs, and Address-pickers-quantity-steppers-fly-to-cart-designed-for-one-handed-use, is a derived editorial implementation inference from the verified surfaces; it is not Meituan-authored or a separately published UI specification.

**Touch & Mobile** (source §8):

- Mobile-first: thumb-driven, bottom tab bar, sticky bottom order/checkout bar
- City/location selector prominent (local services are geo-scoped)
- Min 44px tap targets; big primary CTAs
- Address pickers, quantity steppers, fly-to-cart designed for one-handed use

**Media** (source §8):

- Merchant covers / food photography: square or 4:3, `object-fit: cover`, lazy-loaded
- Service icons: colorful, distinct per service
- Banners: auto-advancing promotional carousel

<!-- design-md:section content-locales -->
## 6. Content & Locales

Treating Meituan's voice as warm-practical-and-value-forward, including helpful-neighbor-who-knows-the-best-cheap-eats, casual-`你`, oriented-around-what-you-get-and-how-soon, slogan-吃得更好-生活更好, not-selling-transactions-selling-small-daily-upgrades, action-oriented-and-benefit-led, and enthusiastic-about-value-without-being-a-hard-sell-carnival-barker, is a derived editorial implementation inference from the verified surfaces; it is not Meituan-authored or a separately published UI specification. Source §10: Meituan's voice is **warm, practical, and value-forward** — the voice of a helpful neighbor who knows the best cheap eats and the fastest delivery. The register in Simplified Chinese is casual `你`, friendly and direct, oriented entirely around *what you get and how soon*: the food, the deal, the delivery time. The brand's framing slogan, **吃得更好，生活更好** ("Eat better, live better"), sets the tone — Meituan isn't selling transactions, it's selling small daily upgrades to quality of life. Copy is action-oriented and benefit-led: deals are stated plainly (满减, 折扣, 免配送费), delivery promises are concrete (预计30分钟送达), and the kangaroo mascot's caring-courier energy runs through it all. The voice is enthusiastic about value without being a hard-sell carnival barker — it's a friend pointing you to the good stuff.

The following voice-table directions are a derived editorial implementation inference from the verified surfaces; they are not Meituan-authored or a separately published UI specification.

| Context | Tone |
|---|---|
| CTAs | Direct, benefit-led verb. `立即下单` (Order now), `去支付` (Pay), `抢购` (Grab the deal). Casual `你`. |
| Deals / pricing | Concrete and plain. `满30减10`, `限时5折`, `免配送费`. The number is the message. |
| Delivery promise | Specific and reassuring. `预计30分钟送达` (Est. delivery in 30 min). Concrete builds trust. |
| Empty states | Helpful redirect. `附近还没有商家，换个地址试试` (No merchants nearby — try another address). |
| Order status | Clear, real-time, caring. `骑手已接单` (Rider accepted) → `配送中` (On the way) → `已送达` (Delivered). |
| Error messages | Friendly, blameless, actionable. State the issue + the fix. |
| Reviews / ratings | Trust-forward — surface real ratings prominently; the community's voice is the credibility. |

**Forbidden phrases.** Hard-sell carnival hype that erodes trust — empty `史上最低！` (lowest ever!) without substance, fake-scarcity FOMO. The formal `您` in casual ordering contexts (reserve for legal/payment). Cold humorless system copy on a warm consumer service. Vague delivery promises ("尽快送达" / "soon") — Meituan's trust is built on *concrete* time estimates, so vagueness is off-brand. White text on the brand yellow (a contrast/brand error, not just a copy one). Treating that forbidden-pattern list as source-stated rather than as a separately published microcopy specification is a derived editorial implementation inference from the verified surfaces; it is not Meituan-authored or a separately published UI specification.

**Voice samples.**

- `吃得更好，生活更好` — the framing slogan ("Eat better, live better"), the clearest brand-voice statement. Source marker: cited: appears in meituan.com content via WebFetch 2026-05-19.
- `立即下单` / `去支付` — order / pay CTAs, direct benefit-led verbs. Source marker: illustrative: standard Meituan ordering CTA register; not quoted as a specific live string.
- `预计30分钟送达` — concrete delivery-promise pattern. Source marker: illustrative: reflects Meituan's concrete-estimate convention; not verified verbatim.
- `骑手已接单` / `配送中` / `已送达` — real-time order-status pattern. Source marker: illustrative: standard delivery status register.

Simplified-Chinese casual `你` register and the recorded samples stay as source §10 evidence. Treating illustrative samples as not-verbatim-live-strings-except-the-cited-slogan, treating English beside a Chinese line as a reading aid rather than a replacement, and treating quoted Chinese as byte-exact rather than translated or re-cased, is a derived editorial implementation inference from the verified surfaces; it is not Meituan-authored or a separately published UI specification. Illustrative samples are not promoted as verbatim live strings except the cited slogan. Reproduce quoted Chinese strings byte-exact rather than translating or re-casing them.

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

These decisions are unnamed values, not permissions to invent. The list names only fields the source itself left unnamed or flagged as approximate. Reading the list as a catalog of those unnamed values rather than as coverage of domains the source never named is a derived editorial implementation inference from the verified surfaces; it is not Meituan-authored or a separately published UI specification.

- verbatim (non-approximate) status for price red-orange, coupon red, rating gold, yellow pressed/tint, on-brand/near-black, page-ground, secondary/hint text, hairline/divider, and success/error/warning hexes
- `#FFD100` as a second primary (conflict; close-variant; `#FFC300` used as primary)
- a public CSS token layer
- promoted cubic-bezier token values for `ease-standard` / `ease-enter` / `ease-exit` / `ease-fly` (cited from source §15 then omitted at the curve-value boundary; names and uses kept)
- `focus-visible` visual treatments (named primary hover/press ≈`#F5B800` is not that evidence)
- Primary success applicability (order-placed confirmation is not a paint on the CTA)
- Secondary loading·error·success applicability (exact request/outcome unresolved)
- Search loading·success applicability (exact request/outcome unresolved)
- interactive kind and state-applicability map for Merchant Card
- numeric shadow values as promoted tokens (approximate records stay; YAML `none` stays)
- site-wide spacing scale as a converted px sheet from YAML numbers without a px suffix
- first-party mark file (catalog logo is a Google favicon lookup)
- a complete product-microcopy guide beyond the recorded samples
- motion promotion beyond the duration table, easing names, signature motions, spring stance, and reduced-motion line — promote a motion value for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed; official documentation of a single curve or duration is not that gate
