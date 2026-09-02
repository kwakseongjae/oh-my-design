# momo購物網 Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

momo購物網 is Taiwan's largest television and digital shopping platform, operated by Fubon Media Technology (富邦媒體科技), combining TV commerce heritage with a modern mobile-first marketplace offering millions of products across beauty, fashion, electronics, and daily essentials. Catalog homepage identity is `https://www.momoshop.com.tw`. This contract covers the first-party public surfaces the source inspected for tokens: `https://www.momoshop.com.tw/brand` (HTML + inline CSS), `https://www.momoshop.com.tw/about` (HTML + inline CSS), `https://image.momoshop.com.tw/ecm/font/theme-main.css` (CSS custom properties), `https://www.momoshop.com.tw/search/_next/static/css/93e50030b97ac6a5.css` (Tailwind utility bundle), and `https://www.momoshop.com.tw/search/_next/static/css/a40c6c07c5abf802.css` (component CSS). The YAML token set is `prose-derived`. Every value stays attached to the surface or evidence class that established it. Treating those five URLs as this contract's inspected token sources, keeping catalog homepage identity on `https://www.momoshop.com.tw`, keeping the YAML token set in the `prose-derived` class the source assigned it, and keeping every value attached to the surface or evidence class that established it, are derived editorial implementation inferences from the verified surfaces; they are not momoshop-authored or a separately published UI specification.

The source records a signature magenta-pink (`#D62872` / `#d62872`) on the header, primary CTAs, active nav, brand logos, price accent, and search-suggest titles. Page canvas is `#F2F2F2` / `#f2f2f2`; card surfaces are `#FAFAFA` / `#fafafa`; white (`#FFFFFF` / `#ffffff`) card surfaces also float above that canvas. Typography follows Microsoft JhengHei UI and PingFang TC for body readability in Traditional Chinese, with Century Gothic / Oxygen reserved exclusively for price numerals. Depth uses `0 1px 3px rgba(0,0,0,.1)` on the catalogue grid. The hex values, the two card-surface writings, the type stacks, and that shadow string are recorded. The characterizations built on them — warm, confident energy; a hue that traces back to television shopping roots and reads instantly as "deal in progress"; a dense but purposeful grid-forward layout packed with product imagery, price badges, and countdown timers that communicates urgency and abundance simultaneously; cool-neutral backgrounds so that the hot pink accent and vivid product photography always pop; price numerals as the true focal stars on every product tile; depth that keeps the eye moving across the catalogue grid rather than stopping at structural chrome — are a derived editorial implementation inference from the verified surfaces; they are not momoshop-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. momo購物網 was established by Fubon Media Technology Co., Ltd. (富邦媒體科技股份有限公司), a joint venture under Fubon Financial Holdings and Taiwan Mobile (台灣大哥大). What began as a television shopping channel evolved into Taiwan's largest integrated shopping platform, extending the immediacy and excitement of live TV commerce into an always-on digital experience. The company's Apple App ID (861796017) and the long-running tagline "讓你找到更多更多" — "helping you find more and more" — encapsulate the brand's core promise: an endlessly expanding catalogue that surfaces exactly what each shopper needs. The platform distinguishes itself through operational excellence: 24-hour rapid delivery, convenience-store pickup, a 10-day no-questions return window, and 16 payment methods that meet users wherever they bank. This operational depth is the bedrock of the brand's trust — not aesthetic polish, but a demonstrated commitment to removing every barrier between desire and delivery. With over 730,000 App Store reviews averaging 4.9 stars, momo's reputation rests on the reliability of that promise. Today momo positions itself beyond pure retail, hosting flagship brand stores (Apple, Dyson, MUJI, Estée Lauder), travel and dining e-tickets, insurance products, and a points-based affiliate program. The brand's visual identity — that unmistakable magenta-pink — functions as a permanent signal of value in motion, readable at a glance across television, mobile, and web surfaces. The operator name, the joint-venture parentage, the television-channel origin, the Apple App ID, the tagline and its English gloss, the four operational facts, the 730,000 / 4.9-star App Store record, the flagship-store and adjacent-offer list, the trust-as-operational-depth sentence, and that closing value-in-motion sentence are the source's own narrative facts; they do not by themselves supply interface tokens. Classifying that founding-and-operations narrative as context that does not by itself supply interface tokens is a derived editorial implementation inference from the verified surfaces; it is not momoshop-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product's primary tasks, each naming a surface or control the source records, and refusing to take them from the source's persona section, is a derived editorial implementation inference from the verified surfaces; it is not momoshop-authored or a separately published UI specification.

- Search the catalog from the Search Input (desktop) and the mobile full-screen overlay (`100vh`).
- Scan product tiles with price numerals, sale badges, countdown timers, and rank numbers overlaying the top-left corner of product thumbnails.
- Act on the Primary CTA Button (Error-page / Home), including the home-return to `Main.jsp`.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source labels four entries as illustrative archetypes, not individual people, so those biographies are dropped rather than promoted, and no name, age, city, motivation, or affiliation classification is carried into this document or its sidecar. What the source independently records, in its own wording, is the audience at a group level: each shopper; an endlessly expanding catalogue that surfaces exactly what each shopper needs. Reading those source-named groups as this product's audience, and dropping the source's archetype biographies rather than promoting them, is a derived editorial implementation inference from the verified surfaces; it is not momoshop-authored or a separately published UI specification.

### Distinctive traits

The list restates recorded values from the source. Classifying the list as that restatement, and the groupings and the readings inside it, is a derived editorial implementation inference from the verified surfaces; it is not momoshop-authored or a separately published UI specification.

- Magenta-pink `#D62872` / `#d62872` on the 44px header, primary CTAs, active nav, brand logos, price accent, and search-suggest titles
- Page canvas `#F2F2F2` / `#f2f2f2`; card surfaces `#FAFAFA` / `#fafafa` and white `#FFFFFF` / `#ffffff` floating above that canvas
- Microsoft JhengHei UI body stack; Oxygen / Century Gothic reserved exclusively for price numerals
- Search chips at height 32px, radius 16px; primary CTA at height 38px, radius 4px; destructive delete-all at height 44px, radius 22px, width 118px
- Rank number badges at 25×25px on the orange gradient `#FFAA3B` → `#FF9203`
- Cart notification badge `#E5047E` / `#e5047e` at 17×17px, radius 8px
- Countdown timers, sale badges, and rank numbers overlay the top-left corner of product thumbnails

### Principles

These five items are a derived editorial implementation inference from the verified surfaces; they are not momoshop-authored or a separately published UI specification. The source states them in its own Principles section together with the UI implication it draws from each.

1. **Value Visibility First.** Price, discount depth, and delivery speed are the headline. No UI element should compete with or obscure these signals. *UI implication:* Price numerals use a dedicated typeface (Oxygen/Century Gothic), appear in `#DD2222` for discounts, and occupy the most prominent position on every product tile.
2. **Friction Removal at Every Step.** From 16 payment methods to convenience-store pickup, the brand obsesses over eliminating barriers. *UI implication:* Search must offer instant suggestions, filter chips must be one-tap, and cart actions must never require a page reload on mobile.
3. **Warm Urgency Without Panic.** Countdown timers and "flash sale" badges create excitement without manufactured anxiety. The brand's magenta is energetic, not alarming. *UI implication:* Use `#D62872` for urgency signals, never pure red; reserve `#DD2222` only for confirmed discounts and destructive confirmations.
4. **Trust Through Transparency.** Anti-fraud notices, return policy emphasis, and clear logistics specs reflect a brand that treats trust as a product feature. *UI implication:* Trust badges and policy links must appear at checkout-adjacent surfaces, styled with equal visual weight to promotional copy.
5. **Consistent Brand Recognition Across Surfaces.** The brand spans TV, web, iOS, and Android. The magenta header and pink accent must be identical across all surfaces. *UI implication:* `#D62872` is non-negotiable — no tints, no gradients on the primary header; gradient use is limited to decorative accents (rank badges, trending cards).

### Application rules

The source states these seven as its Do list, kept as written, plus the §9 prohibition that is unique to that section: never tint or desaturate `#D62872`. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not momoshop-authored or a separately published UI specification.

- Use `#D62872` for all primary interactive elements — buttons, active states, brand signifiers
- Pair hot-pink backgrounds with pure white (`#FFFFFF`) text for maximum legibility
- Reserve `#DD2222` exclusively for price/discount signals and destructive confirmation actions
- Use pill chips (border-radius: 16px) for search tags and filter selections — keeps them distinct from rectangular buttons
- Apply the 44px touch-target minimum for all mobile interactive rows (header elements, list items)
- Use the Oxygen / Century Gothic price font for all numeric price displays to maintain the premium-meets-value visual signal
- Keep card backgrounds white or near-white (`#FAFAFA`) so product photography remains the visual hero
- Never tint or desaturate `#D62872`

### Avoid

The source states these six as its Don't list. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not momoshop-authored or a separately published UI specification.

- Do not use `#D62872` for error states — use `#DD2222` or `#EA3323` to avoid confusion with brand CTA
- Do not mix the price font (Oxygen/Century Gothic) into body copy — it is reserved solely for numerals
- Do not place text smaller than 11px (absolute minimum is the rank/heat metadata size)
- Do not use shadows heavier than `0 10px 15px -3px rgba(0,0,0,.1)` inside product cards — heavy shadows compete with product images
- Do not apply border-radius greater than 22px on action buttons — pill shapes above that threshold break the functional/brand balance
- Do not leave the page canvas as pure white — the `#F2F2F2` canvas is essential for making white card surfaces appear elevated

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Role names below are the source's own labels. Pairing each hex to the token-set path named beside it, keeping YAML lowercase beside source §2 uppercase, keeping `#454545` and `#999999` on the prose roles that name them rather than inventing YAML keys, keeping `#FF9203` as the rank-gradient end rather than as `tokens.colors.accent-rank`, keeping `#DD2726` on the destructive-confirm writing rather than collapsing it into `#DD2222` or `#EA3323`, keeping `tokens.colors.primary` `#d62872` unmerged from `tokens.colors.brand` `#e5047e`, keeping canvas `#f2f2f2` unmerged from footer `#EEEEEE` and from white card `#FFFFFF`, keeping Search Chip Background `#F2F2F2` on the chip as well as on canvas rather than collapsing those roles, keeping on-primary text `#FFFFFF` unmerged from white card fill `#FFFFFF`, and keeping `#FFFFFF` card surfaces unmerged from `tokens.colors.surface` `#fafafa`, are derived editorial implementation inferences from the verified surfaces; they are not momoshop-authored or a separately published UI specification. The hex values and recorded uses are the source's own.

- **Momo Pink (Primary)** (`#d62872` / `#D62872`): header background, primary CTA buttons, active nav indicators, brand logos, price accent, search-suggest titles. Token-set path `tokens.colors.primary`. Catalog `primary_color` is `#D62872`.
- **Momo Pink Dark (Hover/Active)** (`#d9006c` / `#D9006C`): hover state of primary buttons, selected tab underlines. Token-set path `tokens.colors.primary-hover`. Source §9 pairs hover/pressed on this hex.
- **Shopping Cart Badge Pink** (`#e5047e` / `#E5047E`): notification badge background on cart icon. Token-set path `tokens.colors.brand`. This hex is not `tokens.colors.primary`.
- **Momo Blue (Link/Secondary Action)** (`#027bff` / `#027BFF`): hyperlinks, filter chips, restriction-text color, secondary interactive elements. Token-set path `tokens.colors.accent-link`.
- **Sale Red (Price Alert)** (`#dd2222` / `#DD2222`): discount labels, urgent sale badges, delete-confirm actions. Token-set path `tokens.colors.error`.
- **Alert Red (Delete)** (`#ea3323` / `#EA3323`): destructive actions (delete-all browse-history button). Token-set path `tokens.colors.error-delete`.
- **Orange Gradient (Rank Badge)** (`#ffaa3b` / `#FFAA3B`) to `#FF9203`: top-ranked product number badges (linear-gradient). Token-set path `tokens.colors.accent-rank` is `#ffaa3b` only. `#FF9203` has no YAML color key.
- **Page Background** (`#f2f2f2` / `#F2F2F2`): global page canvas and footer zone. Token-set path `tokens.colors.canvas`. Source §2 also writes Search Chip Background as `#F2F2F2` on this same hex; that chip fill stays on the Search Chip Tag component as well.
- **Card Surface** (`#fafafa` / `#FAFAFA`): product card and panel backgrounds. Token-set path `tokens.colors.surface`.
- **Text Primary** (`#404040` / `#454545`): body text, product titles. Token-set path `tokens.colors.foreground` is `#404040`. `#454545` has no YAML color key.
- **Text Secondary** (`#727272` / `#999999`): captions, metadata, placeholder text. Token-set path `tokens.colors.muted` is `#727272`. `#999999` has no YAML color key; source §2 and §9 also write placeholder text as `#999999`, and Secondary Rules Button text as `#999999`.
- **On-primary** (`#ffffff` / `#FFFFFF`): text on primary pink fills. Token-set path `tokens.colors.on-primary`. White card surfaces in source §5 use the same hex as a card fill; that fill is not this on-primary role.
- **Border Default** (`#ededed` / `#EDEDED`): dividers, card borders. Token-set path `tokens.colors.hairline`.
- **Border Medium** (`#b3b3b3` / `#B3B3B3`): input outlines, rules buttons. Token-set path `tokens.colors.border-medium`.

Footer zone, source §5: `#EEEEEE` background with `#484848` text at 13px for legal and service links. Neither hex is a YAML color key.

Destructive-confirm red, source §14: confirm-delete right in `#DD2726`. That hex is not `tokens.colors.error` `#dd2222` and not `tokens.colors.error-delete` `#ea3323`.

### Spacing

Token-set path `tokens.spacing`, unitless array as the YAML recorded it, with no named steps:

`[3, 5, 6, 8, 10, 12, 16, 20, 24]`

`tokens.spacing` `3` is not the Secondary Rules Button padding `3px`. `tokens.spacing` `5` is not that control's `5px`. `tokens.spacing` `6` is not the Search Chip Tag padding `6px` and not the Trend Item padding `6px`. `tokens.spacing` `8` is not `tokens.rounded.md: 8`, not the Search Input padding `8px`, not the Cart Badge radius `8px`, and not the Tooltip radius `8px`. `tokens.spacing` `10` is not the Search Input padding's `10px`. `tokens.spacing` `12` is not the Tooltip padding `12px` and not the badge type-role size `12`. `tokens.spacing` `16` is not `tokens.rounded.lg: 16`, not the Search Chip Tag radius `16px`, and not the Primary CTA font `16px`. `tokens.spacing` `20` is not the 20px line-height on 15px UI text. `tokens.spacing` `24` is not the 24px line-height on 17px headings. Keeping each number on its own key path, rather than treating a shared numeral as the same token, is a derived editorial implementation inference from the verified surfaces; it is not momoshop-authored or a separately published UI specification.

### Shape

Token-set path `tokens.rounded`, unitless steps as the YAML recorded them:

| Step | Value | Token-set path |
|---|---:|---|
| sm | 4 | `tokens.rounded.sm` |
| md | 8 | `tokens.rounded.md` |
| lg | 16 | `tokens.rounded.lg` |
| full | 9999 | `tokens.rounded.full` |

`tokens.rounded.sm: 4` is the YAML step also written on Search Input radius `4px`, Primary CTA radius `4px`, Rank Number radius `4px`, and skeleton `border-radius: 4px`. It is not a spacing step (the spacing array has no `4`). `tokens.rounded.md: 8` is not `tokens.spacing` `8`. `tokens.rounded.lg: 16` is the pill-chip step and is not `tokens.spacing` `16`. `tokens.rounded.full: 9999` is a YAML step. No harvested control writes `9999` as its radius. Local radii that are not YAML rounded steps: Search Trend Card `15px`, Secondary Rules Button `13px`, Destructive Button `22px`, Trend Item `8px` (that `8px` is the item's radius, also written as `tokens.rounded.md: 8`). Source §9 writes CTA `border-radius 4–8px` as a range; the harvested Primary CTA is `4px`. Source §7 writes: do not apply border-radius greater than 22px on action buttons. Keeping those local radii on their components, keeping `full: 9999` on its own key path, and keeping the §9 `4–8px` range beside the harvested `4px`, is a derived editorial implementation inference from the verified surfaces; it is not momoshop-authored or a separately published UI specification.

### Elevation

The source records six depth levels. Reading that stack as canvas / card / panel / modal / tooltip / login-scrim rather than as a universal drop-shadow scale, and keeping YAML `tokens.shadow.card` / `panel` / `modal` on the three levels that name those strings, are derived editorial implementation inferences from the verified surfaces; they are not momoshop-authored or a separately published UI specification.

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Canvas | `#F2F2F2` background, no shadow | Page canvas |
| Level 1 — Cards | `#FFFFFF` / `#FAFAFA` surface, box-shadow `0 1px 2px 0 rgba(0,0,0,.05)` | Token-set path `tokens.shadow.card` |
| Level 2 — Dropdowns/Panels | box-shadow `0 1px 3px rgba(0,0,0,.1)`, z-index ~10 | Token-set path `tokens.shadow.panel`. Source §1 and §9 also write this string on white `#FFFFFF` card surfaces. |
| Level 3 — Modals/Side Drawers | box-shadow `0 4px 6px -1px rgba(0,0,0,.1)`, z-index 1000 | Token-set path `tokens.shadow.modal` |
| Level 4 — Toast/Tooltip overlays | `rgba(0,0,0,.8)` background, z-index 1000+ | Tooltip overlay |
| Level 5 — Login modal overlay | `rgba(0,0,0,.5)` scrim + container z-index 999999 | Login modal overlay |

Source §5 also writes white (`#FFFFFF`) card surfaces floating above canvas with 1px subtle shadow. That "1px subtle shadow" spelling stays beside the Level 1 and Level 2 box-shadow strings; it does not replace them. Keeping the §5 `1px subtle shadow` spelling beside Level 1 and Level 2 rather than replacing those box-shadow strings is a derived editorial implementation inference from the verified surfaces; it is not momoshop-authored or a separately published UI specification.

Source §7: do not use shadows heavier than `0 10px 15px -3px rgba(0,0,0,.1)` inside product cards.

### Motion

Durations, transition properties, and easing keywords the source records, kept as those records. They are not a separately published momo購物網 motion specification. Treating those records as the motion contract for the inspected surfaces, omitting a custom cubic-bezier because the source states none is defined in inspected source, and holding the five-kind per-component promotion gate before any further motion token is promoted, are derived editorial implementation inferences from the verified surfaces; they are not momoshop-authored or a separately published UI specification.

- **Short interactions (badge, tooltip appear):** ~150ms
- **Panel / overlay transitions (login modal, browsing history drawer):** `transition: opacity .3s, background-color .3s` — confirmed from `browsing-history` CSS
- **Search overlay:** `height: 0` → `auto` (no explicit duration; instant DOM swap via `.show` class toggle)
- **Easing:** Default browser easing (no custom cubic-bezier defined in inspected source); overlays use linear or ease for opacity fades
- **Rules:** Motion is functional, not decorative. No parallax, no scroll animations. Transitions serve only to soften state changes (modal appear/disappear, drawer open/close). Product grid items do not animate on scroll.

An exact curve may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework or vendor document — does not satisfy that condition. Source §14 writes desktop link/card hover with transition implicit (no explicit duration in source); that implicit hover is not a duration token. Reading that implicit hover as not a duration token is a derived editorial implementation inference from the verified surfaces; it is not momoshop-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The rows below sort this record's font evidence into classes. The sorting, treating YAML `tokens.typography.family.mono` `"Oxygen"` as the price-numeral family the source assigns rather than as a second UI face, treating fallback members as fallbacks rather than as the brand face, and refusing to substitute a system font while calling it Microsoft JhengHei UI or Oxygen, are derived editorial implementation inferences from the verified surfaces; they are not momoshop-authored or a separately published UI specification. The observation inside each row stands on its own.

| Evidence class | Resolution |
|---|---|
| Official product-use | `https://image.momoshop.com.tw/ecm/font/theme-main.css` defines `--primary-font-family` and `--price-font-family`. The source does not publish a separately issued type specimen. |
| Live computed surface-use | Brand, about, and search CSS the source inspected. Search suggest titles use `font: 700 17px/24px var(--main-font)`. |
| Official distributed asset | theme-main.css on `image.momoshop.com.tw` distributes the CSS custom properties. That is delivery of those variables, not ownership of Microsoft JhengHei UI or Oxygen. |
| Declared-only fallbacks | `"SF Pro TC"`, `"SF Pro Text"`, `"PingFang TC"`, Helvetica, Arial on the body stack; `"Century Gothic"` on the price stack. They are fallbacks, not a second brand face. |
| YAML family keys | `tokens.typography.family.sans` is `"Microsoft JhengHei UI"`. `tokens.typography.family.mono` is `"Oxygen"`. |

### Family

- **Primary typeface:** `"Microsoft JhengHei UI", "SF Pro TC", "SF Pro Text", "PingFang TC", Helvetica, Arial, sans-serif` — used for all body, navigation, product titles, and UI labels (defined in `--primary-font-family`). Token-set path `tokens.typography.family.sans` is `"Microsoft JhengHei UI"`.
- **Price typeface:** `"Oxygen", "Century Gothic", sans-serif` — used exclusively for price numerals (defined in `--price-font-family`). Token-set path `tokens.typography.family.mono` is `"Oxygen"`. Source §9 writes price numerals in bold.

A fallback member of a stack is never presented as the brand face. Do not mix the price font (Oxygen/Century Gothic) into body copy. That fallback-and-reservation reading is a derived editorial implementation inference from the verified surfaces; it is not momoshop-authored or a separately published UI specification.

### Type roles

YAML unitless line heights stay ratios (A1a). The parenthetical px figures are the source §3 spelling, not a replacement of the YAML ratio. Token-set `use` strings are kept verbatim. Keeping YAML line heights as unitless ratios, keeping the YAML singles and the §3 px spellings on separate readings, keeping `:root` line-height `1.5` beside those role ratios, and keeping heading `17` / body `15` / caption `13` / badge `12` / micro `11` off the spacing array, are derived editorial implementation inferences from the verified surfaces; they are not momoshop-authored or a separately published UI specification.

| Role | Font | Size | Weight | Line height | Token-set use | Token-set path |
|---|---|---:|---:|---|---|---|
| Heading | Microsoft JhengHei UI | 17 | 700 | 1.41 (24px for 17px headings) | Search suggest titles, headings | `tokens.typography.heading` |
| Body | Microsoft JhengHei UI | 15 | 400 | 1.33 (20px for 15px UI text) | Product list items, UI labels | `tokens.typography.body` |
| Caption | Microsoft JhengHei UI | 13 | 400 | 1.38 (18px for 13px caption text) | Captions, metadata | `tokens.typography.caption` |
| Badge | Microsoft JhengHei UI | 12 | 400 | — | Badges | `tokens.typography.badge` |
| Micro | Microsoft JhengHei UI | 11 | 400 | — | Heat/rank metadata labels | `tokens.typography.micro` |

Source §3 also records, kept beside those rows:

- **Base size:** 15px — search suggest titles (`font: 700 17px/24px var(--main-font)`), product list items 15px, captions 13px, badges 12px–11px
- **Weight scale:** 400 regular body, 700 bold for section headings, product names, price labels, search-trend titles
- **Line-height:** 1.5 base (defined on `:root`); 20px for 15px UI text; 18px for 13px caption text; 24px for 17px headings
- **Minimum size:** 11px (heat/rank metadata labels); no text below 11px in the search surface

Header bar font is `26px / 700` on that component. Primary CTA font is `16px / 700` on that component. Destructive Button font is `17px / 400` on that component. Search Dialog Tooltip title is `15px / 700`; tooltip body is `13px / 400`. Those component fonts are not the Heading / Body / Caption rows rewritten. Reading those component fonts as those controls' fonts rather than as the Heading / Body / Caption rows rewritten is a derived editorial implementation inference from the verified surfaces; it is not momoshop-authored or a separately published UI specification.

### Assets

- Catalog identity pointer: `logo.type: favicon`, `logo.slug: https://www.google.com/s2/favicons?domain=momoshop.com.tw&sz=256`. That slug is an identity pointer, not a momo購物網-hosted brand file. Reading it as an identity pointer rather than hosted brand artwork is a derived editorial implementation inference from the verified surfaces; it is not momoshop-authored or a separately published UI specification.
- Product photography remains the visual hero on card surfaces. Do not replace it with invented brand-color decoration. Refusing to replace product photography with invented brand-color decoration is a derived editorial implementation inference from the verified surfaces; it is not momoshop-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The source state contract, preserved here while the catalog graph is not adopted:

- **Empty (No results):** Full-page illustration with brand-pink accent, short encouragement copy ("找不到？試試其他關鍵字"), and a secondary suggestion chip row in `#F2F2F2` pills
- **Loading (Skeleton):** `border-radius: 4px` grey `#EDEDED` shimmer blocks replacing product thumbnails and title text; column layout preserved to prevent reflow
- **Error (Network failure):** Centered error message with `#D62872` home-return button (`height 38px`, `border-radius 4px`), redirecting to `Main.jsp`
- **Error (Destructive confirm):** Alert dialog with `#EDEDED` divider, cancel left, confirm-delete right in `#DD2726` (red) — `font: 17px Helvetica`
- **Success (Order placed):** Toast or overlay with `#D62872` accent color, brief confirmation copy, auto-dismisses after ~2s
- **Skeleton (Browse history panel):** Side drawer (`width 137px`) shows `#FAFAFA` card placeholders; spinner absent; position is preserved
- **Disabled (OOS product):** CTA button muted to `#B3B3B3` fill with `#FFFFFF` text; price label remains visible; "補貨通知" (restock alert) secondary link in `#027BFF`
- **Hover (Desktop link/card):** Text and borders shift to `#D62872` via `.hover:text-[#D62872]` and `.group-hover:bg-[#D62872]` utility classes; transition implicit (no explicit duration in source)

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. A generic Focus capture is not `focus-visible` treatment evidence; the source records no `focus-visible` string. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless captured as that same canonical state. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow the control's product role, not its primitive kind. `not-applicable` is used only where the control's role makes the state meaningless — a destination, a suggestion chip, or a secondary rules control that commits no operation in place — and the reason given is always that semantic one. Where the source supplies no interaction evidence for a container at all, its kind and applicability map are omitted rather than decided. YAML `type` is attached only to the ten records that have that key. Trend Item (Top 3 highlight) and Trend Item (Standard) are not in the token set. Preserving the source state contract here rather than delegating it to an unadopted catalog graph, the role-based decision procedure above, every interactive-kind verdict, every applicability verdict, the reason given for either, reading each control's height/padding/radius/font as that control's geometry rather than a spacing or rounded step, and the refusal to treat this as a complete state-coverage claim, are derived editorial implementation inferences from the verified surfaces; they are not momoshop-authored or a separately published UI specification. This is not a complete state-coverage claim.

### Primary Header Bar

- Role: Primary header bar
- Primitive type: `card`
- Token-set path: `tokens.components.header-bar`
- Background: `#d62872` / `#D62872`
- Text: `#ffffff` / `#FFFFFF`
- Height: `44px`
- Font: `26px / 700`
- Token-set use: `Primary header bar`
- Kind and applicability map omitted — the source supplies no interaction evidence for the bar container (C4).

### Cart Badge

- Role: Cart notification badge
- Primitive type: `badge`
- Token-set path: `tokens.components.cart-badge`
- Kind: non-interactive — a notification count on the cart icon, not a control
- Background: `#e5047e` / `#E5047E`
- Text: `#ffffff` / `#FFFFFF`
- Radius: `8px`
- Width: `17px`
- Height: `17px`
- Font: `12px / 400`
- Token-set use: `Cart notification badge`
- YAML records radius, font, bg, fg, and use. Width `17px` and height `17px` are the source §4 complete writing.

### Search Input (Desktop)

- Role: Search input desktop
- Primitive type: `input` · Kind: interactive
- Token-set path: `tokens.components.input`
- Background: `#ffffff` / `#FFFFFF`
- Border: `1px solid #b3b3b3` / `#B3B3B3`
- Height: `36px`
- Padding: `8px 8px 8px 10px`
- Radius: `4px`
- Font: `15px / 400`
- Token-set use: `Search input desktop`
- The `8px 8px 8px 10px` padding is this field's padding. The `36px` height is this field's height. The `4px` radius is this field's radius and the `tokens.rounded.sm: 4` step. The `15px` font is this field's font and the Body type-role size. Reading those figures as this field's geometry rather than as `tokens.spacing` `8` / `10` is a derived editorial implementation inference from the verified surfaces; it is not momoshop-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web field; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable field; visual treatment omitted |
| disabled | applicable | A search field can be gated; visual treatment omitted |
| loading | not-applicable | Search input holds a query; it commits no operation in place |
| error | applicable | Form field; visual treatment omitted |
| success | not-applicable | Search input does not complete an operation on itself |

### Search Chip Tag (Recent/Suggest)

- Role: Recent/suggest search chip
- Primitive type: `badge` · Kind: interactive
- Token-set path: `tokens.components.chip`
- Background: `#f2f2f2` / `#F2F2F2`
- Text: `#404040`
- Height: `32px`
- Radius: `16px`
- Padding: `6px 8px`
- Font: `13px / 400`
- Token-set use: `Recent/suggest search chip`
- The `16px` radius is this chip's radius and the `tokens.rounded.lg: 16` step. The `6px 8px` padding is this chip's padding. They are not `tokens.spacing` `6` / `8` / `16`. Reading those figures as this chip's geometry rather than as `tokens.spacing` `6` / `8` / `16` is a derived editorial implementation inference from the verified surfaces; it is not momoshop-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web chip; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable chip; visual treatment omitted |
| disabled | applicable | A suggestion chip can be gated; visual treatment omitted |
| loading | not-applicable | Recent/suggest chip; it commits no operation in place |
| error | not-applicable | Recent/suggest chip; it commits no operation in place |
| success | not-applicable | Recent/suggest chip; it commits no operation in place |

### Primary CTA Button (Error-page / Home)

- Role: Primary CTA — Error-page / Home, including the home-return to `Main.jsp`
- Primitive type: `button` · Kind: interactive
- Token-set path: `tokens.components.button-primary`
- Background: `#d62872` / `#D62872`
- Text: `#ffffff` / `#FFFFFF`
- Height: `38px`
- Radius: `4px`
- Font: `16px / 700`
- Token-set use: `Primary CTA`
- Token-set states: `hover #d9006c`. Source §9 writes hover/pressed: `#D9006C`, and CTA `height 38–44px`, `border-radius 4–8px`. The harvested geometry is `38px` / `4px`; the §9 range stays beside it.
- Disabled (OOS product), source §14, on the CTA button: muted to `#B3B3B3` fill with `#FFFFFF` text; price label remains visible; "補貨通知" secondary link in `#027BFF`.
- The `38px` height is this control's height. The `4px` radius is this control's radius. The `16px` font is this control's font. They are not `tokens.spacing` `16`. Keeping the §9 `38–44px` / `4–8px` range beside the harvested `38px` / `4px`, and reading those figures as this control's geometry rather than as `tokens.spacing` `16`, are derived editorial implementation inferences from the verified surfaces; they are not momoshop-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web commit-styled control; YAML states `hover #d9006c`; §9 pairs hover/pressed on `#D9006C` |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | OOS CTA treatment captured above |
| loading | not-applicable | Error-page / Home return is a destination to `Main.jsp`; it commits no operation in place |
| error | not-applicable | Destination home-return; it commits no operation in place |
| success | not-applicable | Destination home-return; it commits no operation in place |

### Destructive Button (Delete All)

- Role: Delete all action
- Primitive type: `button` · Kind: interactive
- Token-set path: `tokens.components.button-destructive`
- Background: `#ea3323` / `#EA3323`
- Text: `#ffffff` / `#FFFFFF`
- Height: `44px`
- Radius: `22px`
- Width: `118px`
- Font: `17px / 400`
- Token-set use: `Delete all action`
- YAML records bg, fg, height, radius, font, and use. Width `118px` is the source §4 complete writing.
- Source §14 Error (Destructive confirm): Alert dialog with `#EDEDED` divider, cancel left, confirm-delete right in `#DD2726` (red) — `font: 17px Helvetica`. That confirm-delete hex is this dialog's confirm, not this button's default fill. Reading that confirm-delete hex as this dialog's confirm rather than as this button's default fill is a derived editorial implementation inference from the verified surfaces; it is not momoshop-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web destructive control; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable destructive control; visual treatment omitted |
| disabled | applicable | A delete-all action can be gated; visual treatment omitted |
| loading | applicable | Delete all is an in-place destructive commit; visual treatment omitted |
| error | applicable | A failed delete can be reported on this control; visual treatment omitted |
| success | applicable | A completed delete can be reported on this control; visual treatment omitted |

### Secondary Rules Button

- Role: Secondary rules button
- Primitive type: `button` · Kind: interactive
- Token-set path: `tokens.components.button-secondary`
- Background: `#ffffff` / `#FFFFFF`
- Text: `#999999`
- Border: `1px solid #b3b3b3` / `#B3B3B3`
- Radius: `13px`
- Padding: `3px 5px 3px 8px`
- Font: `13px / 400`
- Token-set use: `Secondary rules button`
- The `13px` radius is this control's local geometry. It is not a YAML rounded step. The `3px 5px 3px 8px` padding is this control's padding. They are not `tokens.spacing` `3` / `5` / `8`. Reading those figures as this control's local geometry rather than as a YAML rounded step or as `tokens.spacing` `3` / `5` / `8` is a derived editorial implementation inference from the verified surfaces; it is not momoshop-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A rules button can be gated; visual treatment omitted |
| loading | not-applicable | Secondary rules button; it commits no operation in place |
| error | not-applicable | Secondary rules button; it commits no operation in place |
| success | not-applicable | Secondary rules button; it commits no operation in place |

### Search Trend Card

- Role: Search trend card
- Primitive type: `card`
- Token-set path: `tokens.components.trend-card`
- Border: `1px solid #fbe9f1` / `#FBE9F1`
- Radius: `15px`
- Background: `linear-gradient(180deg,#fff5f9,#f9f9f9)` / `linear-gradient(180deg, #FFF5F9, #F9F9F9)`
- Token-set use: `Search trend card`
- The `15px` radius is this card's local geometry. It is not a YAML rounded step. Reading that `15px` as this card's local geometry rather than as a YAML rounded step is a derived editorial implementation inference from the verified surfaces; it is not momoshop-authored or a separately published UI specification.
- Kind and applicability map omitted — the source supplies no interaction evidence for the container (C4).

### Trend Item (Top 3 highlight)

- Role: Trend Item (Top 3 highlight)
- Primitive type: not in the token set
- Background: `linear-gradient(90deg, #FFE4F0, #FCF6F9)`
- Radius: `8px`
- Padding: `6px 8px`
- Kind and applicability map omitted — the source supplies no interaction evidence for the row (C4).

### Trend Item (Standard)

- Role: Trend Item (Standard)
- Primitive type: not in the token set
- Background: `linear-gradient(90deg, #F3F3F3, #FEF5F9)`
- Radius: `8px`
- Padding: `6px 8px`
- Kind and applicability map omitted — the source supplies no interaction evidence for the row (C4).

### Rank Number (Top Orange)

- Role: Top rank number badge
- Primitive type: `badge`
- Token-set path: `tokens.components.rank-badge`
- Kind: non-interactive — a rank mark, not a control
- Background: `linear-gradient(0.34deg,#ffaa3b,#ff9203)` / `linear-gradient(0.34deg, #FFAA3B 0.29%, #FF9203 99.69%)`
- Text: `#ffffff` / `#FFFFFF`
- Radius: `4px`
- Width: `25px`
- Height: `25px`
- Font: `15px / 400`
- Token-set use: `Top rank number badge`
- YAML records the gradient without the `0.29%` / `99.69%` stops. Source §4 is the complete writing. Width `25px` and height `25px` are the source §4 complete writing. Source §9 restates top 1-3 rank badges as `25×25px`.

### Search Dialog Tooltip

- Role: Search dialog tooltip
- Primitive type: `card`
- Token-set path: `tokens.components.tooltip`
- Background: `rgba(0,0,0,.8)`
- Text: `#ffffff` / `#FFFFFF`
- Radius: `8px`
- Padding: `12px`
- Font: `15px / 700` (title), `13px / 400` (body)
- Token-set use: `Search dialog tooltip`
- YAML font record is `15px / 700`. Source §4 is the complete writing: title `15px / 700`, body `13px / 400`.
- Kind and applicability map omitted — the source supplies no interaction evidence for the overlay (C4).

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

These layout rules are the source's own list. Reading them as the layout contract for the inspected momo購物網 public surfaces, keeping each measurement on the role that established it, and refusing to treat a desktop search-bar width as a page canvas size, are derived editorial implementation inferences from the verified surfaces; they are not momoshop-authored or a separately published UI specification.

- Fluid grid with horizontal product card lanes; mobile collapses to 2-column, desktop expands to 4–6 columns
- Header fixed at 44px height; body starts immediately beneath with no gutter
- Page canvas background always `#F2F2F2`; white (`#FFFFFF`) card surfaces float above canvas with 1px subtle shadow
- Search and filter controls anchored to a 36px tall persistent bar below the 44px header on mobile
- Categories use icon-label vertical stack in horizontal scrollable row; no wrapping
- Countdown timers, sale badges, and rank numbers overlay the top-left corner of product thumbnails
- Footer zone uses `#EEEEEE` background with `#484848` text at 13px for legal and service links

| Name | Width | Key Changes |
|---|---|---|
| Mobile | ≤768px | Single or 2-column product grid; header collapses to 44px icon-bar; search triggers full-screen overlay (`100vh`); category icons in horizontal scroll lane; bottom navigation bar fixed at ~44px |
| Tablet | 768–1024px | 3-column product grid; inline search bar at 36px height; category row with text labels visible |
| Desktop | ≥1024px | 4–6 column grid; full header with logo + search bar (440px wide) + nav links; browsing-history side drawer (137px) docks to right edge; hover states active (`.hover:text-[#D62872]`, `.group-hover:bg-[#D62872]`) |

Touch targets: minimum 44px height across all mobile interactive elements (header buttons, list rows, bottom bar). Images: all set `h-auto` to maintain aspect ratio across breakpoints; product thumbnails use fixed-ratio containers.

The 44px header, 36px search bar, 440px desktop search bar, 137px browsing-history drawer, ~44px bottom navigation bar, and `100vh` search overlay are the source's own writings on the roles named beside them. The 440px search bar is that control's width on desktop ≥1024px. It is not a page canvas size.

<!-- design-md:section content-locales -->
## 6. Content & Locales

momo's copy is **direct, warm, and deal-forward**. Every word either confirms a saving or removes friction from the purchase decision. The register is colloquial Mandarin Chinese with light excitement — not corporate, never cold. **3 adjectives:** Energetic, trustworthy, deal-focused. Reading that register as this contract's voice, rather than as a separately published momo購物網 microcopy guide, is a derived editorial implementation inference from the verified surfaces; it is not momoshop-authored or a separately published UI specification.

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

Classifying those three lines as illustrative samples rather than verified live copy, and keeping the Do/Don't table strings byte-exact, is a derived editorial implementation inference from the verified surfaces; it is not momoshop-authored or a separately published UI specification.

Published names and labels the source records, kept byte-exact: momo購物網, 富邦媒體科技, 富邦媒體科技股份有限公司, 台灣大哥大, 讓你找到更多更多, 限時下殺, 立刻搶購, 你找到更多更多, 24H快速到貨, 十天猶豫期, 找不到？試試其他關鍵字, 補貨通知.

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

These decisions are unnamed values, not permissions to invent. Calling this list a set of named gaps rather than a domain inventory, and treating the items as unnamed values rather than permissions to invent, is a derived editorial implementation inference from the verified surfaces; it is not momoshop-authored or a separately published UI specification.

- `focus-visible` visual treatment
- pressed visual treatment on controls other than the primary CTA hover/pressed `#D9006C` pairing the source writes
- custom cubic-bezier values (source: none defined in inspected source)
- reduced-motion behavior
- a published momo購物網 UI specification (source footer: getdesign.md/momoshop — NOT LISTED)
