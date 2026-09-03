# Pinkoi Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Pinkoi is Asia's cross-border design marketplace. This contract names the first-party public marketplace the source records at `https://www.pinkoi.com` (English surface `https://en.pinkoi.com` in the footer capture). YAML `tokens.source` is `prose-derived`. Catalog identity `primary_color` is `#ff595a`. Token-set path `tokens.colors.primary` is Mid Teal `#10567b` (`--primary` / `--login` base). The YAML token note records that split: primary = §2 Mid Teal `#10567b`; purchase-exclusive CTA = coral `#f16c5d`. Those two hexes are not the catalog identity `#ff595a`. Every value stays attached to the surface, section, or evidence class that established it. Reading that homepage URL as this contract's named marketplace surface, keeping the YAML set in the `prose-derived` class the source assigned it, keeping catalog `#ff595a` beside `tokens.colors.primary` `#10567b` rather than as a second teal, keeping coral `#f16c5d` on `--purchase` rather than as that catalog identity, and refusing to treat an unattached hex as a second primary, are derived editorial implementation inferences from the verified surfaces; they are not Pinkoi-authored or a separately published UI specification.

The page opens on a near-white canvas (`#f7f7f8` for grouped sections, `#ffffff` for primary surfaces) with dark slate text (`#39393e`) and a confident **teal-navy primary** (`#10567b`) that anchors actions like Login and primary CTAs. This isn't a "designer-chic" pastel palette as the brand name might suggest — the actual product surface is engineered for high-density browsing across Taiwan, Japan, Hong Kong, mainland China, and Thailand. Typography is **bold-heavy**, with weight 700 dominating across headlines, badges, and key CTAs (37 occurrences in core CSS vs. 16 of weight 400). There is no custom brand typeface; instead, Pinkoi runs a sophisticated locale-aware system stack. What gives Pinkoi its quietly distinctive feel is its **flat semantic button system** with seven named variants. Every button — `--primary`, `--secondary`, `--purchase`, `--danger`, `--green`, `--login`, plus `*-plain` ghost variants — uses the same recipe: `background: <color>; border: 1px solid <same-color>; color: #fff;`. Coral (`#f16c5d`) is reserved for the `--purchase` variant alone — the highest-conversion moment on every product page. The hexes, the locale-stack claim, the 37× / 16× weight counts, the seven variant names, the matched-border recipe, and the coral reservation are recorded. Calling the canvas busy and multi-cultural, calling the system a prioritization of density, legibility, and conversion over minimalist whitespace, calling the palette a rejection of designer-chic pastel, calling the stack design-as-localization rather than design-as-decoration, and calling the matched border a crisp "solid block" appearance, are derived editorial implementation inferences from the verified surfaces; they are not Pinkoi-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. Pinkoi was founded in **Taipei in 2011** by **Peter Yen (顏君庭)**, **Mike Lee (李讓)**, and **Maibelle Lin (林怡君)** — three Taiwanese engineers and designers who had watched Asian design culture thrive in craft fairs and boutique storefronts while remaining absent from global e-commerce. Peter had spent four years at Yahoo in Sunnyvale leading the Yahoo Answers engineering team; weekends in San Francisco craft fairs seeded the question that became Pinkoi: *why can a potter in Taichung or a leather-worker in Kyoto only sell within a fifty-kilometre radius when the internet exists?* The thesis: build the infrastructure that lets an Asian independent designer sell to a buyer in Tokyo, Hong Kong, Bangkok, or São Paulo without building their own logistics stack, payment layer, or translation pipeline. The site's mission framing is explicit: *"Pinkoi believes that design has a transformative power that can permeate every aspect of our lives. Embracing great design can bring us closer to our ideal lifestyles"*. This translates into a refusal — Pinkoi is **not** a generic marketplace competing on SKU count or price. Peter has stated the position plainly: *"E-commerce companies that sell standard products are playing a game of capital, but that's not our game. Pinkoi sells non-standard products"*. And: *"While the saying 'money talks' may be true in some places, at Pinkoi our decisions are primarily based on providing users with a good experience"*. And: *"If we abandoned the review system, Pinkoi would lose its advantage."* Every designer is vetted; every listing is the work of a small maker; the review system is treated as non-negotiable infrastructure, not a line-item to optimize away. **Founder backgrounds**: Peter Yen — 7 years Silicon Valley, **4 years as Senior Engineer Lead Yahoo Global HQ Social Search Group**; **Maibelle Lin** — senior designer at multiple Silicon Valley startups (interaction + UI/UX); **Mike Lee** — National Chiao Tung University civil engineering grad, founded multiple websites/online services prior to Pinkoi. Initial bootstrap: **NT$500,000 raised** between the three; Yen worked from a **7-square-meter study in his home** with Lee on backend and Lin on visual design. **2015 funding round: $9M from Sequoia Capital India + GMO Venture Partners** alongside **English-site launch**. What Pinkoi has become is a design-commerce platform serving **5 primary markets (Taiwan, Hong Kong, Japan, mainland China, Thailand)** with ~6.25M members, 50,000+ active shops across 77 countries, and 95% cross-border sales share (Pinkoi-published as of 2026-04, not independently audited). The philosophy-layer comment also records the market list as Shanghai, Hong Kong, Tokyo, Bangkok, and the metrics line as 6.25M members, 50k+ shops, 95% cross-border, 150 countries — both writings stay. The logo is *"designed using circular arcs and acute angles, conveying the brand's core values of diversity, inclusion and respect for the unique"*. The design language reflected in the captured chrome — high-density 6-column grids, bold-heavy Helvetica Neue + locale stacks, coral reserved for a single `--purchase` moment per page, flat matched-border buttons, conservative 4px radii — is the product-surface expression of that thesis: clarity and density serve the designer's work, and the chrome stays out of the way so the object can do the talking. The year 2011, Taipei, the three founder names, the Yahoo Sunnyvale / San Francisco craft-fair origin, the thesis, the three Peter Yen quotes, the founder backgrounds, NT$500,000, the 7-square-meter study, the 2015 $9M Sequoia Capital India + GMO Venture Partners round and English-site launch, the five-market list, the 6.25M / 50,000+ / 77 countries / 95% figures beside the comment's 150 countries writing, the circular-arcs logo rationale, and that closing design-language sentence are the source's own narrative facts; they do not by themselves supply interface tokens. Classifying that founding-and-thesis narrative as context that does not by itself supply interface tokens is a derived editorial implementation inference from the verified surfaces; it is not Pinkoi-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product's primary tasks, and refusing to take them from the source's persona section, is a derived editorial implementation inference from the verified surfaces; it is not Pinkoi-authored or a separately published UI specification. Each names a surface or control the source records.

- Browse the 6-column product grid (`calc(16.66667% - 12px)` per card) on `https://www.pinkoi.com`.
- `Add to Cart` / `Buy Now` on the coral `--purchase` button the source names.
- Search from the header search input the source names.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source labels its named figures as fictional archetypes informed by publicly described Pinkoi user segments (Taiwan / Hong Kong / Japan cross-border design buyers), not individual people, so those biographies are dropped rather than promoted, and no name, motivation, or affiliation classification is carried into this document or its sidecar. What the source independently records, in its own wording, is the audience at a group level: Taiwan / Hong Kong / Japan cross-border design buyers; browsing across Taiwan, Japan, Hong Kong, mainland China, and Thailand; and shop owners, plus the Asian independent designer the about narrative names, with `Sell on Pinkoi` and `Be a Pinkoist`. Refusing to promote individual personas, and reading those source-named groups as this product's audience, are derived editorial implementation inferences from the verified surfaces; they are not Pinkoi-authored or a separately published UI specification.

### Distinctive traits

The list restates the source's Key Characteristics. The values are recorded; classifying the list as that restatement, and the groupings and the readings inside them, are a derived editorial implementation inference from the verified surfaces — they are not Pinkoi-authored or a separately published UI specification.

- Locale-aware system font stacks — no custom typeface, but explicit per-language fallbacks (TC/SC/JP/TH)
- Weight 700 dominant for headlines, CTAs, and emphasis (verified in CSS: 37x vs. 16x weight 400)
- Conservative `border-radius` — `4px` is the workhorse on buttons and cards, `2px` on badges, `50%` on avatars
- **Flat button system** — every variant uses `border: 1px solid <bg-color>`, giving a crisp solid-block look without shadow
- 7-tier semantic button variants (`primary`, `secondary`, `danger`, `purchase`, `green`, `login`, `*-plain`) with full hover/active state matrices
- Cool teal-navy (`#10567b`) as primary action color — overrides the warm "Pinkoi" naming
- Coral (`#f16c5d`) reserved exclusively for the `--purchase` variant — the highest-conversion CTA
- Skeuomorphic colored shadows reserved for **legacy specialty controls** only (`.m-button-{pink,gray,green,unfav}` — favorite hearts, follow-shop buttons), never on the primary `.m-br-button` system
- High-density grid: 6-column product layout (`16.66%` each) with `12px` total horizontal margin per card
- 12-step neutral gray scale from `#f7f7f8` → `#202026` for surfaces, borders, and text hierarchy

### Principles

These 8 items are a derived editorial implementation inference from the verified surfaces; they are not Pinkoi-authored or a separately published UI specification. The source states them in its own Principles section. Every *UI implication* below is that same derived class. The source's philosophy-layer comment records that the **"Coral is finite"** framing is inferred from the exclusive `--purchase` variant naming + CSS-exclusive hex usage, not a documented Pinkoi statement.

1. **The designer is the voice.** Pinkoi's chrome is the frame; the product and shop copy is the picture. Shop owners author their own listings in their own register; Pinkoi does not homogenize tone across shops. *UI implication:* Shop-owned surfaces (listing description, shop bio, designer story) use body text with minimal chrome. Pinkoi-owned chrome (nav, cart, checkout) uses the tight bold-heavy system. Do not style shop content with site chrome type scale — it will flatten the variance that is the product.
2. **Coral is finite.** `#f16c5d` (`--purchase`) appears on one button per page — the conversion moment. Spending it elsewhere dilutes the one signal users have learned to trust. *UI implication:* A product page has exactly one coral button (Add to Cart or Buy Now). A category page has zero. A checkout page has exactly one (Place Order). Never two coral buttons on the same viewport.
3. **Density is the browse feature.** Pinkoi users cross 6+ categories per session looking for a specific aesthetic, not a specific product. Whitespace hostile to scanning is anti-feature. *UI implication:* Product grid desktop default is 6 columns (`calc(16.66667% - 12px)`). Do not space product cards like a SaaS dashboard. Vertical rhythm between sections is generous (`64px 0`); within sections, micro-padding (`5px 10px` → `9px 14px`).
4. **Locale is infrastructure, not a language toggle.** Every surface ships through 5 font stacks (TC / SC / JP / TH / default). Copy is authored per locale, not translated from English. *UI implication:* Do not use `font-family: 'Helvetica Neue'` alone. Always use the full 5-stack fallback chain from Typography. Microcopy strings should route through the locale bundle; do not inline English.
5. **Errors are field-local, blameless, and actionable.** Pinkoi's error convention leans heavily on the required-asterisk (`.s-required:after { color: #e63349 }`) plus an inline field-level message. Global error banners are a last resort. *UI implication:* Form error state sets `1px solid #e63349` border + `box-shadow: inset 0 0 0 1px #e63349` (doubled red) on the invalid input. Error text lives directly beneath the field in 12px `#e63349`. Do not show a dialog. Do not block the page.
6. **Bold is for structure, not buttons.** Weight 700 carries the visual hierarchy (headlines, prices, badges) — but button labels are weight 400. A button's weight comes from the matched bg+border combo, not its text. *UI implication:* `.m-br-button .text { font-weight: 400 }` is load-bearing. Never render a button label in weight 700 — it breaks the color-does-the-work principle and flattens the hierarchy that weight 700 establishes elsewhere.
7. **Shadows are evidence of history, not a depth system.** The primary `.m-br-button` system is flat. The skeuomorphic colored-glow shadow (pink / lime / gray recipes) is **legacy specialty control territory** — favorite hearts, follow-shop — not a system-wide pattern. *UI implication:* When introducing a new component, default to flat + matched `1px solid` border. Do not use the legacy `0 .2em .2em -.1em <color>, 0 .3em <color>, 0 .5em .5em -.1em rgba(32,32,38,.12)` recipe on anything but the existing `.m-button-{pink,gray,green,unfav}` classes.
8. **Metrics are the designer's, not Pinkoi's.** The product lists the shop owner's rating, the shop owner's sales count, the shop owner's reviews — Pinkoi's own platform metrics (MAU, GMV) are absent from customer surfaces. *UI implication:* Card badges, product pages, and shop pages expose shop-level trust signals (rating stars, review count, "ships from <city>"). Do not add platform-level badges like "Trending on Pinkoi" unless they reinforce a shop-level claim.

### Application rules

The source states these as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not Pinkoi-authored or a separately published UI specification.

- **DO** use weight 700 for headlines, CTAs, prices, and badges. Bold is the brand's voice.
- **DO** reserve coral (`#f16c5d` / `#e56051` on hover) for the single most important purchase moment per page.
- **DO** use the locale-aware font stack with the user's language fallback as the second priority.
- **DO** keep the modern button system flat — `border: 1px solid <same-as-bg>` and no shadow. Visual weight comes from color, not elevation.
- **DO** keep border-radius in the `2px–8px` range (badges 2px, buttons/cards 4px, occasional 6–8px on featured surfaces).
- **DO** pack product cards tightly with `12px` total gutters and 6-column grids on desktop.
- **DO** treat `#e63349` (and its hover/active siblings) as the **error/destructive red** — use it for form validation, danger buttons, required-field asterisks, and warnings.

### Avoid

The source states these as its Don't list. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not Pinkoi-authored or a separately published UI specification.

- **DON'T** apply weight 300 — Pinkoi never goes "airy thin." Headlines are confident and dense.
- **DON'T** use coral for navigation, generic CTAs, or info accents — it dilutes the conversion signal.
- **DON'T** load custom web fonts — system fonts respect each market's reading habits and reduce LCP across slow APAC connections.
- **DON'T** apply skeuomorphic shadows to primary CTAs — that recipe is reserved for legacy specialty controls (favorite, follow-shop buttons).
- **DON'T** use pill-shaped or fully rounded buttons — they break the high-density commerce aesthetic.
- **DON'T** overspace on landing pages — Pinkoi users browse a lot of inventory at once.
- **DON'T** confuse the error red with a sale-price color — discount badges use the asymmetric-corner ribbon style, not red text.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Token-set paths stay on their own keys. YAML `use` and the §2 longer role writing are both kept. Prose-only hexes that the token set does not name stay off those keys. Catalog `#ff595a` is identity, not `tokens.colors.primary`. `tokens.colors.surface` and `tokens.colors.on-primary` both `#ffffff` stay two keys. Keeping each hex on the key or prose role that recorded it, rather than merging shared numerals, is a derived editorial implementation inference from the verified surfaces; it is not Pinkoi-authored or a separately published UI specification.

**Primary**

- **Mid Teal** (`#10567b`): `--primary` and `--login` button **base** background. The default brand action color. Token-set path `tokens.colors.primary`.
- **Deep Teal** (`#064162`): `--primary` and `--login` **hover** state. Darker for visual press feedback. Token-set path `tokens.colors.primary-hover`.
- **Darkest Navy** (`#003354`): `--primary` and `--login` **active/pressed** state. The deepest brand blue. Token-set path `tokens.colors.primary-active`.
- **Bright Teal** (`#2e90b7`): Link color, `--*-plain` visited state, secondary brand accent (used 22x in core CSS). Token-set path `tokens.colors.link`.
- **Pure White** (`#ffffff`): Card surfaces, modal backgrounds, button text on filled buttons, `--secondary` button background. Token-set paths `tokens.colors.surface` and `tokens.colors.on-primary` — two keys, one hex.

**Surface & Background**

- **Surface Soft** (`#f7f7f8`): Default page background tint, `--secondary` button hover, grouped section background (20x in core). Token-set path `tokens.colors.canvas`.
- **Surface Hover** (`#eeeeef`): `--secondary` button active state, slightly heavier muted surface. Token-set path `tokens.colors.surface-hover`.
- **Border Light** (`#e5e5e6`): Default thin dividers between rows. Token-set path `tokens.colors.border-light`.
- **Border Mid** (`#d3d3d5`): Standard component border (cards, inputs, button outlines for non-filled variants — used 32x in core). Token-set path `tokens.colors.border-mid`.

**Neutral Scale (Text & Iconography)**

- **Text Primary** (`#39393e`): Default body and heading color (41 uses in CSS — the dominant text color). Footer capture: Charcoal text `#39393e` warm-cast. Token-set path `tokens.colors.heading`.
- **Text Secondary** (`#515156`): Slightly lighter for secondary headings and labels (10x). Token-set path `tokens.colors.text-secondary`.
- **Text Muted** (`#66666a`): Captions, timestamps, descriptive text (26x). Token-set path `tokens.colors.muted`.
- **Text Subtle** (`#7c7c80`): Disabled-looking tertiary text. Token-set path `tokens.colors.subtle`.
- **Text Faint** (`#929295`): Hints, placeholder, very low-emphasis labels. Token-set path `tokens.colors.faint`.
- **Text Disabled** (`#a8a8ab`): Disabled states, line-through original prices (`.oprice`), `--secondary` button border. Token-set path `tokens.colors.disabled`.
- **Text Ghost** (`#bfbfc1`): Decorative or low-priority dividers, alternative line-through price color. Not a YAML `tokens.colors` key.
- **Text Black** (`#202026`): Reserved for maximum-emphasis moments (overlays, modal titles). Token-set path `tokens.colors.ink`.

**Purchase (CTA-exclusive)**

- **Coral Base** (`#f16c5d`): `--purchase` button **base** background. Used **only** on the most important conversion moment per page (Add to Cart, Buy Now). Token-set path `tokens.colors.purchase`.
- **Coral Hover** (`#e56051`): `--purchase` hover state. Confirmed CSS-exclusive: appears in only 2 places — the `--purchase` button and one decorative bold text rule. Token-set path `tokens.colors.purchase-hover`.
- **Coral Active** (`#da5648`): `--purchase` pressed state. Token-set path `tokens.colors.purchase-active`.

**Error / Danger**

- **Error Red** (`#e63349`): The system's error/danger color (25 uses in core CSS). Used as: `--danger` button base, form validation error label/border/icon, required-field asterisk (`.s-required:after`), warning info text (`.g-info.g-warn b`), `--danger-plain` text hover. **Not** a promotional sale color — it's the validation/destructive red. Token-set path `tokens.colors.error`.
- **Error Red Hover** (`#d72136`): `--danger` button hover. Token-set path `tokens.colors.error-hover`.
- **Error Red Active** (`#c41428`): `--danger` button pressed. Not a YAML `tokens.colors` key.
- **Pink Visited** (`#f86173`): `--danger-plain` visited link state. Not a YAML `tokens.colors` key.

**Success**

- **Success Green Base** (`#2cac97`): `--green` button base background. Teal-leaning green, not pure forest. Token-set path `tokens.colors.success`.
- **Success Green Hover** (`#289c8a`): `--green` hover and active state. Not a YAML `tokens.colors` key.

**Decorative / Legacy** (not YAML `tokens.colors` keys)

- **Brand Pink** (`#c83166`): Used inside the legacy skeuomorphic shadow recipe for pink-themed buttons (`.m-button-pink`). Also appears as accent in promotional decoration.
- **Hot Pink** (`#ff6299`): `.m-button-pink:hover` background — legacy favorite/heart button.
- **Lime Green** (`#7ec527` / `#65a40e` / `#4d9200`): `.m-button-green` legacy palette — applies to specialty controls only.

**Footer-captured tint** (not a YAML `tokens.colors` key)

- **Coral Tint** (`#fff8f7`): Country-pill **active** fill on the footer capture. Inactive country pills use `#eeeeef` Cool Gray. That active fill is this pill's color. It is not `tokens.colors.purchase` `#f16c5d` and not catalog `#ff595a`.

**Shadow tints**

- **Shadow Soft** (`rgba(32,32,38,.12)` / YAML `rgba(32,32,38,0.12)`): The default soft drop shadow base. Token-set path `tokens.shadow.soft` records `rgba(32,32,38,0.12) 0px 2px 4px`.
- **Shadow Edge** (`rgba(32,32,38,.2)` / YAML `rgba(32,32,38,0.2)`): Used in `0 1px 1px 0 rgba(32,32,38,.2)` for subtle row dividers and `.card-discount-badge`. Token-set path `tokens.shadow.edge` records `rgba(32,32,38,0.2) 0px 1px 1px`.
- **Shadow Modal** (`rgba(32,32,38,.4)` / YAML `rgba(32,32,38,0.4)`): Stronger overlay shadow for modals and popovers. Token-set path `tokens.shadow.modal` records `rgba(32,32,38,0.4) 0px 8px 24px`.
- **Shadow Tooltip** (`hsla(240,2%,41%,.8)`): Tooltip outer glow. Not a YAML `tokens.shadow` key.

### Spacing

YAML unitless steps stay on their own paths. They are not the component paddings, type sizes, or grid gutters that share a numeral.

| Path | Value |
|---|---:|
| `tokens.spacing.xs` | 4 |
| `tokens.spacing.sm` | 8 |
| `tokens.spacing.md` | 12 |
| `tokens.spacing.base` | 16 |
| `tokens.spacing.lg` | 24 |
| `tokens.spacing.xl` | 32 |
| `tokens.spacing.xxl` | 48 |
| `tokens.spacing.section` | 64 |

§5 also records a **5–10px micro-scale** for component padding and a coarser **24px+ rhythm** for section spacing, plus the padding table `0` (15 uses), `2px`, `3px`, `5px 10px`, `4px 10px`, `6px 10px`, `8px 12px`, `9px 14px`, `14px 0`, `64px 0`. Those paddings are layout measurements. `tokens.spacing.md: 12` is not the `12px` card gutter. `tokens.spacing.base: 16` is not body `14px` and not the Standard card `16px` padding. `tokens.spacing.section: 64` is not only the `64px 0` section rhythm. Reading the YAML steps as token-set paths and the §5 paddings as that padding table, rather than as shared numerals, is a derived editorial implementation inference from the verified surfaces; it is not Pinkoi-authored or a separately published UI specification.

### Shape

| Path | Value |
|---|---:|
| `tokens.rounded.sm` | 2 |
| `tokens.rounded.md` | 4 |
| `tokens.rounded.lg` | 8 |
| `tokens.rounded.full` | 9999 |

`4px` is the workhorse on buttons and cards, `2px` on badges, `50%` on avatars. Occasional 6–8px on featured surfaces. Iteration guide: `border-radius: 4px` is the workhorse; `2px` for badges; discount badges use asymmetric `2px 0 2px 0`; Never go above `10px` except on rare hero overlays. The footer Search button records split-radius `0px 8px 8px 0px` (search-box trailing geometry). `tokens.rounded.full: 9999` is that YAML key. It is not the avatar `50%`, not the Search split-radius, and not a permission to draw pill-shaped buttons (the Don't list forbids those). `tokens.rounded.md: 4` is not `tokens.spacing.xs: 4`. `tokens.rounded.lg: 8` is not `tokens.spacing.sm: 8`. Keeping those four keys, the avatar `50%`, the asymmetric ribbon, the Search split-radius, and the `10px` hero-overlay cap as separate writings is a derived editorial implementation inference from the verified surfaces; it is not Pinkoi-authored or a separately published UI specification.

### Elevation

Pinkoi has a **two-track shadow philosophy**: the modern button/card system stays mostly flat, while a small set of legacy specialty controls retain a skeuomorphic colored-underglow recipe. That sentence is the source's own. YAML strings and the §6 specific uses both stay. Classifying that sentence as the source's own, and keeping the YAML shadow strings beside the §6 specific uses rather than merging them, is a derived editorial implementation inference from the verified surfaces; it is not Pinkoi-authored or a separately published UI specification.

**Modern surface shadows (the default)**

- **Card discount badge** — `1px 1px 2px 0 rgba(32,32,38,.2)` (subtle lift over product image)
- **Outline focus** — `box-shadow: 0 0 0 1px #d3d3d5` (border-as-shadow, often on focused inputs)
- **Inline error** — `box-shadow: inset 0 0 0 1px #e63349` (red inset for invalid form fields)
- **Single-pixel solid bottom** — `0 1px #515156` ("button depth"), `0 1px #d3d3d5` (subtle bottom edge)
- **Tooltip glow** — `0 0 2px hsla(240,2%,41%,.8)`
- **Modal/dialog** — `0 0 4px rgba(32,32,38,.4)` · YAML `tokens.shadow.modal` is `rgba(32,32,38,0.4) 0px 8px 24px` — both records kept
- **Row divider** — `0 1px 1px 0 rgba(32,32,38,.2)`

YAML `tokens.shadow.soft` is `rgba(32,32,38,0.12) 0px 2px 4px`. YAML `tokens.shadow.edge` is `rgba(32,32,38,0.2) 0px 1px 1px`. The primary `.m-br-button` system has **no shadow at all** — its visual weight comes from the matched bg+border combo, not elevation.

**Legacy skeuomorphic shadows (specialty controls only)**

A small set of older button classes — `.m-button-pink`, `.m-button-gray`, `.m-button-green`, `.m-button-unfav` — apply a layered colored shadow on `:hover`. These are typically used for favorite/follow-shop heart buttons, not primary CTAs.

Pattern: `0 .2em .2em -.1em <BRAND_MID>, 0 .3em <BRAND_DARK>, 0 .5em .5em -.1em rgba(32,32,38,.12)`

| Class | Hover bg | Mid shadow | Dark shadow |
|---|---|---|---|
| `.m-button-pink` | `#ff6299` | `#c83166` | `#a32252` |
| `.m-button-green` | `#7ec527` | `#65a40e` | `#4d9200` |
| `.m-button-gray` | `#8e9a9f` | `#66666a` | `#535c5f` |
| `.m-button-unfav` | (transparent) | `#d3d3d5` | `#d3d3d5` |

Treat this as a **legacy accent**, not a system-wide pattern. Don't generalize it to the main button system.

**Z-Index Hierarchy**

- Sticky header sits above content
- Dropdown menus above sticky header
- Modal overlay above all chrome
- Toast notifications above modals

Keeping YAML shadow strings beside the §6 specific uses, keeping the modal YAML `0px 8px 24px` beside the §6 `0 0 4px` writing, and reading the two-track philosophy as that recorded split rather than as a universal lift scale, are derived editorial implementation inferences from the verified surfaces; they are not Pinkoi-authored or a separately published UI specification.

### Motion

Durations the source records, kept as duration tokens extending the production `transition: border .1s, color .1s, background .1s` convention already present in `.m-br-button`. They are not easing curves. Keeping those durations as duration tokens rather than easing curves is a derived editorial implementation inference from the verified surfaces; it is not Pinkoi-authored or a separately published UI specification.

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle flips, radio state changes, reduce-motion fallback |
| `motion-fast` | 100ms | Hover / focus transitions on buttons, links, cards (matches the production `.1s` already in `.m-br-button`) |
| `motion-standard` | 200ms | Dropdown reveals, tooltip fades, cart-count updates |
| `motion-slow` | 300ms | Modal open, filter sidebar slide, image lightbox |
| `motion-page` | 250ms | Route transitions + top progress bar fade |

Unsourced easing curves from the catalog template (`ease-enter` `cubic-bezier(0.0, 0.0, 0.2, 1)`, `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)`, `ease-standard` `cubic-bezier(0.4, 0.0, 0.2, 1)`) are omitted at the curve-value boundary. Easing *roles* and their uses stay:

| Role | Use |
|---|---|
| `ease-enter` | Things appearing — modals, dropdowns, toasts |
| `ease-exit` | Things dismissing |
| `ease-standard` | Two-way transitions — accordion, filter expand |

**Spring / overshoot stance.** **Forbidden.** Pinkoi is a commerce surface populated by handmade designer goods whose value proposition is craftsmanship and restraint; bouncy UI motion reads as a consumer-app tic that fights the product. The closest peer brands (Asian design marketplaces, curated commerce) universally avoid spring; applying it would code Pinkoi closer to a flash-sale app than a curated marketplace. No `cubic-bezier` with y > 1, no overshoot on add-to-cart confirmations, no bouncy modal entries. Where a brand like Toss licenses spring for money-moved checkmarks, Pinkoi does not — the commerce confirmation in States is a dedicated screen, and a static checkmark at 300ms `ease-enter` is the whole effect. The source's philosophy-layer comment records that this spring-forbidden stance is an editorial reading; Pinkoi does not publicly declare a motion policy. That spring stance is a derived editorial implementation inference from the verified surfaces; it is not Pinkoi-authored or a separately published UI specification.

**Signature motions** the source names stay:

1. **Button state transitions.** `transition: border .1s, color .1s, background .1s` (production CSS, literal). Hover/active state changes on all `.m-br-button` variants are simultaneous color + border interpolations at 100ms with `ease-standard`.
2. **Card hover (desktop only).** Product card scales imperceptibly (1.0 → 1.02) over 200ms `ease-standard`, or swaps to an alternate product image. No shadow change — the flat chrome is the brand. Mobile: no hover, no tap-highlight on the card (taps route directly to product page).
3. **Discount-ribbon entry.** When a discount badge renders on a product card, the `0 1px 1px 0 rgba(32,32,38,.2)` shadow fades in over 200ms. The badge itself does not rotate, bounce, or shimmer — it is a static anchor, not an attention grab.
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant`. No exceptions. Hover color transitions still apply (they are not motion per the spec — they are state changes). Modal slide-ins become instant opacity toggles; route-transition progress bar is hidden entirely.

Omitting the three unsourced curves, keeping the four signature motions, keeping the reduced-motion contract, and holding the five-kind per-component promotion gate rather than treating a single official curve as sufficient, are derived editorial implementation inferences from the verified surfaces; they are not Pinkoi-authored or a separately published UI specification.

An exact curve may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework or vendor document — does not satisfy that condition.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The following evidence-class application readings are a derived editorial implementation inference from the verified surfaces; they are not Pinkoi-authored or a separately published UI specification.

| Evidence class | Resolution |
|---|---|
| Official product-use | The source records no custom brand typeface and no Pinkoi-exclusive distributed family. |
| Live computed surface-use | Locale-aware system stacks on the captured marketplace; weight 700 vs 400 counts (37× / 16×) from core CSS; heading hierarchy verified via Playwright on `/browse`. |
| Declared stack | Always lead with `Helvetica Neue, Helvetica, Arial`, then append the user's locale stack. Token-set path `tokens.typography.family.sans` records `Helvetica Neue`. Token-set path `tokens.typography.family.cjk` records `PingFang TC`. |
| Official distributed asset | No Pinkoi-exclusive distributed type family was verified. |
| License | System faces remain the host platform's fonts, not a Pinkoi brand asset. |

### Family

Pinkoi runs **per-language font stacks**. Always lead with `Helvetica Neue, Helvetica, Arial`, then append the user's locale stack:

| Locale | Font Stack |
|---|---|
| Default (en) | `Helvetica Neue, Helvetica, Arial, Verdana, sans-serif` |
| Traditional Chinese | `Helvetica Neue, Helvetica, Arial, PingFang TC, Heiti TC, Microsoft JhengHei, sans-serif` |
| Simplified Chinese | `Helvetica Neue, Helvetica, Arial, PingFang SC, Heiti SC, Microsoft YaHei, sans-serif` |
| Japanese | `Helvetica Neue, Helvetica, Arial, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, メイリオ, Meiryo, PingFang TC, sans-serif` |
| Thai | `Helvetica Neue, Helvetica, Arial, Thonburi, Noto Sans Thai, Droid Sans Thai, sans-serif` |

Keeping the YAML `Helvetica Neue` / `PingFang TC` paths beside the longer five-stack table, and refusing to present a fallback as a verified Pinkoi face, are derived editorial implementation inferences from the verified surfaces; they are not Pinkoi-authored or a separately published UI specification.

### Type roles

YAML sizes stay the unitless numbers the token set recorded. Token-set `use` strings are kept verbatim; where the source §3 table is the longer record of the same role, that longer use is kept beside the YAML use. YAML has no `lineHeight` keys. Keeping YAML sizes as the token-set numbers, keeping the YAML use and the §3 longer range on the same role rather than dropping the longer wording, is a derived editorial implementation inference from the verified surfaces; it is not Pinkoi-authored or a separately published UI specification.

| Role | Font | Size | Weight | Token-set use | §3 longer record |
|---|---|---:|---:|---|---|
| Section heading | system sans | 22 | 700 | Section headings — weight-driven hierarchy | Section headings `21–22px` |
| Card title | system sans | 18 | 700 | Card titles, mid headings | Card titles, mid headings `18–20px` |
| Subhead | system sans | 16 | 500 | Subheadings, stronger labels | Subheadings, stronger labels `15–16px` |
| Body | system sans | 14 | 400 | Body, button text default, breadcrumbs | **Body, button text default, breadcrumbs `g-breadcrumb`** `14px` |
| Meta | system sans | 13 | 400 | Inline metadata, secondary text | Inline metadata, secondary text `13px` |
| Badge | system sans | 12 | 400 | Badge text, small labels, breadcrumbs | Badge text, small labels, breadcrumbs `12px` |
| Caption | system sans | 11 | 400 | Captions, timestamps | Captions, timestamps `9–11px` |

The scale stays compact — there is no extreme-large display type. Hero headlines on landing surfaces use 22px or scale up via percentage (`100%`, `2.2em`) rather than fixed large pixels.

**Weights**

- **700**: Headings (H1–H4 verified weight 700 on `/browse`), prices, discount badge children, emphasis spans. Bold-heavy is the brand's typographic posture **for hierarchy and emphasis**.
- **500**: Secondary emphasis — subheads, semi-bold UI labels.
- **400**: Body text, long-form descriptions, **button text** (verified: `.m-br-button .text` renders at weight 400 on product pages — buttons rely on color and border for prominence, not weight), card badges (`s-card-badge`).
- **600**: Reserved for narrow contexts; rarely used (only 2 occurrences in core CSS).

> **Note on buttons**: Despite the bold-heavy headline posture, button labels themselves are weight 400. Visual prominence comes from the colored bg + matched border (e.g., coral `#f16c5d` for purchase) — not from text weight.

**Hierarchy is Weight-Driven, Not Size-Driven** (verified via Playwright on `/browse`). Pinkoi's heading hierarchy is unusual: most `<h1>`, `<h2>`, `<h3>` render at **14–16px** — close to body size. The visual hierarchy comes from **weight 700** combined with **color shifts** (e.g., `#39393e` for primary headings, `#66666a` for secondary, `#2cac97` for special emphasis like "Flagship Shops"). This is the opposite of the SaaS convention of using 32–48px headlines. It reflects Pinkoi's commerce-density priority: every pixel of vertical space saved means more browsable inventory above the fold. That hierarchy paragraph is the source's own. Reading it as a type-role rule for the recorded marketplace rather than as a separately published Pinkoi type specimen is a derived editorial implementation inference from the verified surfaces; it is not Pinkoi-authored or a separately published UI specification.

**Special conventions** the source states:

- **No letter-spacing customization** in the modern core CSS — system defaults are trusted (legacy `.g-breadcrumb` uses `letter-spacing: 1px`; `.g-breadcrumb-v2` removes it).
- **`font-style: italic`** is reserved for testimonials and quoted content.
- **`text-decoration: none`** on `:hover` for `.m-br-button` — buttons never look like links.
- **`text-decoration: line-through`** for `.oprice` (original price before discount), in muted gray (`#a8a8ab` or `#bfbfc1`).
- **Numerals are not tabularized** by default — Pinkoi's product prices flow with prose.
- **Use `#39393e` for body text**, never pure black. The slightly warm dark-gray reads better against the soft `#f7f7f8` surface tint.

The YAML 22 section size sits beside §3 `21–22px` and is not only hero `22px`. The YAML 18 card-title size sits beside §3 `18–20px`. The YAML 16 subhead size sits beside §3 `15–16px` and is not `tokens.spacing.base: 16`. The YAML 14 body size is not a spacing step. The YAML 11 caption size sits beside §3 `9–11px`. Reading those sizes as the roles named beside them, rather than as shared numerals across spacing or another component, is a derived editorial implementation inference from the verified surfaces; it is not Pinkoi-authored or a separately published UI specification.

### Assets

- Catalog identity pointer: `logo.type: github`, `logo.slug: pinkoi`.
- Logo file the source names: `pinkoi_logo_2019.svg` — circular arcs + acute angles per brand identity refresh. That filename is a source-named asset, not a hosted fetch in this package.
- Product photography and shop imagery are first-party catalog content; do not replace them with invented brand-color decoration.
- Image CDN the source names: `cdn02.pinkoi.com`. WebP/lazy-load standard practice.

Reading the github slug as an identity pointer rather than hosted brand artwork, keeping `pinkoi_logo_2019.svg` as the named logo file, and refusing to replace recorded product photography with invented brand-color decoration, are derived editorial implementation inferences from the verified surfaces; they are not Pinkoi-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The source records a Playwright-backed marketplace capture (footer: 2026-05-08; philosophy layer: production CSS from `cdn02.pinkoi.com/media/dist/` re-verified via Playwright on 2026-04-17). YAML `tokens.source` remains `prose-derived`. Geometry below keeps YAML anatomies beside the longer §4 / §9 / footer writings. Keeping YAML anatomies beside the longer §4 / §9 / footer writings, rather than collapsing them, is a derived editorial implementation inference from the verified surfaces; it is not Pinkoi-authored or a separately published UI specification. The footer also records **3-fill discipline** as a phrase the prior pass missed.

The source state contract, preserved here while the catalog graph is not adopted:

| State | Treatment |
|---|---|
| **Empty (wishlist, first visit)** | One-line `#66666a` body explanation of *why* the list is empty, plus one secondary button (`--secondary` variant — white bg, `1px solid #a8a8ab`, `#39393e` text) suggesting browsing a category. Never `No items`. Never an illustration. |
| **Empty (search no-results)** | Single `#66666a` caption explaining the zero-match in the user's own query terms, plus 3–5 suggested alternate category chips. Never terminal `No results found.` |
| **Empty (cart)** | `#39393e` heading at 16px weight 700, one-line body describing next step, single `--primary` button linking to the last-browsed category. No promotional banner injection — an empty cart is not an upsell moment. |
| **Loading (first paint, product grid)** | Skeleton blocks at `#f7f7f8` (surface-soft) with 4px radius matching final card radius. Image areas are fixed-aspect skeletons; price and title areas are 14px-tall gray bars. Shimmer = 1.2s `linear-gradient` with 8% white highlight. No spinner. |
| **Loading (inline action — add to cart)** | Coral button stays in place at `#f16c5d` bg, text swaps to a 3-dot animation in white. Button width does not change — prevents layout shift and double-tap. |
| **Loading (route transition)** | Top-of-page 2px progress bar in `#2e90b7` (brand mid-teal), no overlay, previous page content stays visible. |
| **Error (form field)** | Input border switches to `1px solid #e63349` plus `box-shadow: inset 0 0 0 1px #e63349` for the doubled-red effect. Helper text below in `#e63349` 12px weight 400. Required-field label gets `*` in `#e63349` via `.s-required:after`. |
| **Error (inline banner — shop or shipping issue)** | Thin horizontal banner, `#e63349` left border (3px), `#f7f7f8` background, `#39393e` body text. One action link on the right. Not a modal. |
| **Error (checkout — payment declined)** | Reserved escalated state: full-width `#e63349` border-left card at checkout top, one sentence describing the decline in blameless language, single retry button in `--primary`. Do not show a generic `Something went wrong`. |
| **Success (add-to-cart)** | Toast at top-right, `#39393e` bg, white 14px weight 400 text, 3s auto-dismiss. Single sentence: confirms the item added, offers View Cart action in `#2e90b7` link color. No checkmark animation; no sound. |
| **Success (order placed)** | Dedicated confirmation screen — not a toast. Order number in 20px weight 700, shop(s) notified list, estimated ship date per shop. `--secondary` button `Continue Browsing`, `--primary` button `View Order`. Never a coral button here — the purchase moment is past. |
| **Skeleton** | `#f0f0f0` blocks at exact product-card dimensions (1:1 image, 2-line title, designer-name line, price). Shimmer 1.2s with 8% white highlight. Price placeholder renders as `—` per currency locale (`NT$ —` / `JP¥ —` / `USD $ —`) — never `$0`. Designer-name placeholder stays blank, never "Loading…" — a made-up designer name would be misleading on a craftsmanship-first marketplace. |
| **Disabled** | Button opacity per default browser disabled treatment; border stays visible so geometry is stable. Disabled form inputs keep their `#d3d3d5` border — no grey-out wash — so re-enabled fields do not shift. |

Those thirteen rows are the source's §14 body. They describe marketplace states the source recorded. Keeping that section attachment, rather than transferring those treatments onto a different control as if they had been computed there, is a derived editorial implementation inference from the verified surfaces; it is not Pinkoi-authored or a separately published UI specification.

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. A generic Focus capture is not `focus-visible` treatment evidence; the source records an input Focus as border `#bfbfc1`, and that observed Focus is not a color assigned to the `focus-visible` row. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless captured as that same canonical state. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow the control's product role, not its primitive kind. `not-applicable` is used only where the control's role makes the state meaningless — a destination product tile, a cancel/dismiss control, a ghost destination control, a header nav link, or a locale pill — and the reason given is always that semantic one. Where the source supplies no interaction evidence for a row at all, its kind and applicability map are omitted rather than decided. YAML `type:` is attached only where the token set records it. Preserving the source state contract here rather than delegating it to an unadopted catalog graph, the role-based decision procedure above, every interactive-kind verdict, every applicability verdict, the reason given for either, and the refusal to treat this as a complete state-coverage claim, are derived editorial implementation inferences from the verified surfaces; they are not Pinkoi-authored or a separately published UI specification. This is not a complete state-coverage claim.

### Primary

- Role: Primary CTAs
- Primitive type: `button` · Kind: interactive
- Background: `#10567b`
- Text: `#ffffff`
- Border: 1px solid `#10567b`
- Radius: 4px
- Padding: YAML `8px 12px`
- Font: `14px / 400`
- Hover: bg/border `#064162`
- Active: bg/border `#003354`
- Token-set use: `Primary CTA, 1px #10567b border`
- §4 longer use: Primary CTAs
- Observed: default / hover / active as above; `.m-br-button` has no shadow; labels weight 400
- The `4px` radius is this button's geometry. It is not only `tokens.rounded.md: 4` and not `tokens.spacing.xs: 4`. The `8px 12px` padding is this control's padding. It is not `tokens.spacing.sm: 8` and not `tokens.spacing.md: 12`. The 14px / 400 font is this control's font; it is not only the Body type-role row. Reading those figures as this button's geometry rather than as those YAML steps is a derived editorial implementation inference from the verified surfaces; it is not Pinkoi-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web commit control; hover bg/border `#064162` is the source's shared writing |
| focus-visible | applicable | Keyboard-reachable commit control; visual treatment omitted |
| disabled | applicable | Button control; §14 records default-browser disabled opacity with border kept visible |
| loading | applicable | A primary CTA can commit in place; visual treatment omitted on this row (add-to-cart loading lives on Purchase) |
| error | applicable | A failed primary commit can be reported on this control; visual treatment omitted |
| success | applicable | A completed primary commit can be reported on this control; visual treatment omitted |

### Login

- Role: Auth flows
- Kind: interactive
- Background: `#10567b`
- Text: `#ffffff`
- Border: 1px solid `#10567b`
- Radius: 4px
- Padding: 8px 12px
- Font: 14px / 400
- Hover: bg/border `#064162`
- Active: matches primary
- Use: Auth flows
- Not in the token set. No primitive type is attached.
- Omitting a primitive type because the row is not in the token set, and keeping Login as its own `--login` variant rather than rewriting it as Primary, are derived editorial implementation inferences from the verified surfaces; they are not Pinkoi-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web commit control; hover bg/border `#064162` |
| focus-visible | applicable | Keyboard-reachable commit control; visual treatment omitted |
| disabled | applicable | Button control; §14 disabled treatment |
| loading | applicable | `Sign In / Register` is an in-place auth commit; visual treatment omitted |
| error | applicable | A failed sign-in can be reported on this control; visual treatment omitted |
| success | applicable | A completed sign-in can be reported on this control; visual treatment omitted |

### Secondary

- Role: Cancel, dismiss, neutral CTAs
- Primitive type: `button` · Kind: interactive
- Background: `#ffffff`
- Text: `#39393e`
- Border: 1px solid `#a8a8ab`
- Radius: 4px
- Padding: YAML `8px 12px`
- Font: `14px / 400`
- Hover: bg `#f7f7f8`
- Active: bg `#eeeeef`
- Token-set use: `Cancel / neutral CTA, 1px #a8a8ab border`
- §4 longer use: Cancel, dismiss, neutral CTAs
- The `4px` radius is this button's geometry. The `8px 12px` padding is this control's padding. Reading those figures as this outlined button's geometry rather than as YAML spacing steps is a derived editorial implementation inference from the verified surfaces; it is not Pinkoi-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web cancel/dismiss control; hover bg `#f7f7f8` |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A cancel/dismiss control can be gated; visual treatment omitted |
| loading | not-applicable | Cancel / dismiss / neutral CTA commits no operation in place |
| error | not-applicable | Cancel / dismiss control; it commits no operation in place |
| success | not-applicable | Cancel / dismiss control; it commits no operation in place |

### Purchase

- Role: Add to Cart, Buy Now (coral, conversion-exclusive)
- Primitive type: `button` · Kind: interactive
- Background: `#f16c5d`
- Text: `#ffffff`
- Border: 1px solid `#f16c5d`
- Radius: 4px
- Padding: YAML `8px 12px` · §9 construction `9px 14px` — both records kept
- Font: `14px / 400`
- Hover: bg/border `#e56051`
- Active: bg/border `#da5648`
- Token-set use: `Add to Cart / Buy Now (conversion-exclusive coral)`
- §4 longer use: Add to Cart, Buy Now (coral, conversion-exclusive)
- Verified live: `.m-br-button--purchase` on product detail page
- The YAML `8px 12px` and the §9 `9px 14px` stay as a keep-both. The `4px` radius is this button's geometry. Reading those paddings as this purchase control's two writings rather than choosing one, and refusing to spend coral on another control, are derived editorial implementation inferences from the verified surfaces; they are not Pinkoi-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web commit control; hover bg/border `#e56051` |
| focus-visible | applicable | Keyboard-reachable commit control; visual treatment omitted |
| disabled | applicable | Button control; §14 disabled treatment |
| loading | applicable | `Add to Cart` / `Buy Now` is an in-place commit; §14 records width-hold + white 3-dot on `#f16c5d` |
| error | applicable | A failed cart-add or buy can be reported on this control; visual treatment omitted |
| success | applicable | A completed cart-add can be reported; §14 records the toast, not a coral success fill |

### Danger

- Role: Destructive actions
- Primitive type: `button` · Kind: interactive
- Background: `#e63349`
- Text: `#ffffff`
- Border: 1px solid `#e63349`
- Radius: 4px
- Padding: `8px 12px`
- Font: `14px / 400`
- Hover: bg/border `#d72136`
- Active: bg/border `#c41428`
- Token-set use: `Destructive actions`
- The `4px` radius is this button's geometry. The active `#c41428` is this control's pressed fill. It is not a YAML `tokens.colors` key. Reading that active hex as this danger button's pressed state rather than as a new token-set path is a derived editorial implementation inference from the verified surfaces; it is not Pinkoi-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web commit control; hover bg/border `#d72136` |
| focus-visible | applicable | Keyboard-reachable commit control; visual treatment omitted |
| disabled | applicable | Button control; §14 disabled treatment |
| loading | applicable | A destructive action can commit in place; visual treatment omitted |
| error | applicable | A failed destructive commit can be reported on this control; visual treatment omitted |
| success | applicable | A completed destructive commit can be reported on this control; visual treatment omitted |

### Green (Success)

- Role: Confirmations, follow
- Primitive type: `button` · Kind: interactive
- Background: `#2cac97`
- Text: `#ffffff`
- Border: 1px solid `#2cac97`
- Radius: 4px
- Padding: `8px 12px`
- Font: `14px / 400`
- Hover: bg/border `#289c8a`
- Active: bg/border `#289c8a`
- Token-set use: `Confirmations, follow`
- The hover/active `#289c8a` is this control's pressed fill. It is not a YAML `tokens.colors` key. Reading that hex as this green button's hover/active rather than as a new token-set path is a derived editorial implementation inference from the verified surfaces; it is not Pinkoi-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web commit control; hover bg/border `#289c8a` |
| focus-visible | applicable | Keyboard-reachable commit control; visual treatment omitted |
| disabled | applicable | Button control; §14 disabled treatment |
| loading | applicable | Confirm / follow is an in-place commit; visual treatment omitted |
| error | applicable | A failed confirm or follow can be reported on this control; visual treatment omitted |
| success | applicable | A completed confirm or follow can be reported on this control; visual treatment omitted |

### Plain (Ghost)

- Role: Ghost variants of any button color
- Kind: interactive
- Background: transparent
- Text: variant-color (e.g., `#10567b` for `--primary-plain`)
- Radius: 4px
- Padding: 8px 12px
- Hover: text color hover only
- Active: bg `#f7f7f8`
- Use: Ghost variants of any button color
- Not in the token set. No primitive type is attached.
- Omitting a primitive type because the row is not in the token set is a derived editorial implementation inference from the verified surfaces; it is not Pinkoi-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web ghost control; text-color hover only |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A ghost control can be gated; visual treatment omitted |
| loading | not-applicable | Ghost / `*-plain` is a destination or tertiary control; it commits no operation in place |
| error | not-applicable | Ghost destination control; it commits no operation in place |
| success | not-applicable | Ghost destination control; it commits no operation in place |

### Input

- Role: Standard text input — bordered rectangle, no floating-label
- Primitive type: `input` · Kind: interactive
- Background: `#ffffff`
- Text: `#39393e`
- Border: 1px solid `#d3d3d5`
- Radius: 4px
- Padding: YAML `8px 12px`
- Font: `14px / 400`
- Focus: border `#bfbfc1` — recorded as observed Focus, not as `focus-visible` treatment
- Error: `box-shadow: inset 0 0 0 1px #e63349`, border `#e63349`
- Token-set use: `Standard text input, 1px #d3d3d5 border`
- §9 helper text: below in `#e63349` weight 400 12px. Required-field labels get an asterisk via `.s-required:after { color: #e63349; content: '*'; margin-left: 4px }`
- The `4px` radius is this input's geometry. The `8px 12px` padding is this control's padding. The 14px / 400 font is this control's font. Keeping the observed Focus on the Focus writing rather than assigning it to `focus-visible` is a derived editorial implementation inference from the verified surfaces; it is not Pinkoi-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable field; visual treatment omitted |
| disabled | applicable | Input control; §14 records `#d3d3d5` border kept, no grey-out wash |
| loading | not-applicable | Form field; in-place commit lives on the search-submit or Purchase / Primary CTA |
| error | applicable | Form field; §14 records `1px solid #e63349` + inset `1px #e63349` and 12px helper text |
| success | not-applicable | Form field; add-to-cart success lives on the toast; order success lives on the confirmation screen |

### Compact input

- Role: Dense inputs in tight layouts
- Background: `#ffffff`
- Border: 1px solid `#d3d3d5`
- Radius: 4px
- Padding: 5px 10px
- Use: Dense inputs in tight layouts
- Not in the token set. No primitive type is attached.
- Kind: interactive
- The `5px 10px` padding is this compact field's padding. It is not `tokens.spacing` and not the standard Input `8px 12px`. Omitting a primitive type because the row is not in the token set, and reading that padding as this compact field's geometry, are derived editorial implementation inferences from the verified surfaces; they are not Pinkoi-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable field; visual treatment omitted |
| disabled | applicable | Input control; §14 disabled treatment |
| loading | not-applicable | Form field; in-place commit lives on a submit control |
| error | applicable | Form field; error treatment is the Input row's doubled red |
| success | not-applicable | Form field; success lives off this control |

### Product Card (`.m-card-product`)

- Role: 6-column commerce product grid — image is the primary visual, chrome minimal
- Primitive type: `card` · Kind: interactive
- Background: `#ffffff`
- Radius: 4px
- Padding: YAML none recorded · §4 `0` (image-led)
- Max-width: 190px (6-column grid: `calc(16.66667% - 12px)`)
- Margin: 0 6px (12px total gap)
- Token-set use: `6-column commerce product grid, image-led`
- §9 construction values that live only on this card, kept here (A3): white background, 1px solid `#d3d3d5` border, 4px radius, max-width 190px; image fills the top 75% of the card; below: title in 14px weight 700 `#39393e` (2-line clamp), price in 16px weight 700 `#39393e`, optional discount badge with `border-radius: 2px 0 2px 0` (asymmetric ribbon corners), `1px 1px 2px 0 rgba(32,32,38,.2)` shadow, absolute top-left
- The `4px` radius is this card's geometry. The body title `14px/700` is this card's title writing. It is not only the Body type-role row. The price `16px/700` is this card's price writing. It is not `tokens.spacing.base: 16` and not only the Subhead type-role row. The construction-prompt `1px solid #d3d3d5` border is this card's §9 writing; YAML `product-card` does not record a border. Keeping YAML padding-absent beside §4 `padding: 0`, and reading those figures as this card's geometry rather than as those YAML steps, are derived editorial implementation inferences from the verified surfaces; they are not Pinkoi-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web destination tile; source names 1.0 → 1.02 scale over 200ms or alternate-image swap, desktop only |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A destination tile can be gated; visual treatment omitted |
| loading | not-applicable | Destination product tile; it commits no operation in place |
| error | not-applicable | Destination product tile; it commits no operation in place |
| success | not-applicable | Destination product tile; it commits no operation in place |

### Standard card

- Role: Generic content card
- Primitive type: `card`
- Background: `#ffffff`
- Border: 1px solid `#d3d3d5`
- Radius: 4px
- Padding: YAML `16px`
- Token-set use: `Generic content card, 1px #d3d3d5 border`
- §4 longer record: Inferred from §1-§2 baseline (no explicit DS variant in source) — generic content card
- The source supplies no interaction evidence for this row. Kind and applicability map are omitted (C4). The `16px` padding is this card's padding. It is not `tokens.spacing.base: 16`. Keeping the inferred class the source assigned, and omitting kind and the map because the source supplies no interaction evidence, are derived editorial implementation inferences from the verified surfaces; they are not Pinkoi-authored or a separately published UI specification.

### Card Badge (`.s-card-badge`)

- Role: Inline product card badges — tight padding, smaller radius than buttons
- Primitive type: `badge`
- Background: `#10567b` (or variant)
- Text: `#ffffff`
- Radius: 2px
- Padding: 1px 4px
- Font: 12px / 400
- Token-set use: `Inline product card badge`
- The source supplies no interaction evidence for this row. Kind and applicability map are omitted (C4). The `2px` radius is this badge's geometry. It is not only `tokens.rounded.sm: 2`. Omitting kind and the map because the source supplies no interaction evidence is a derived editorial implementation inference from the verified surfaces; it is not Pinkoi-authored or a separately published UI specification.

### Discount Badge (`.card-discount-badge`)

- Role: Discount ribbon anchored to product image corner
- Primitive type: `badge`
- Background: `#e63349`
- Text: `#ffffff`
- Radius: YAML `2` · §4 `2px 0 2px 0` (asymmetric folded-ribbon effect) — both records kept
- Padding: 2px 6px
- Font: 12px / 700
- Shadow: `1px 1px 2px 0 rgba(32,32,38,.2)`
- Token-set use: `Discount ribbon on product image`
- The source supplies no interaction evidence for this row. Kind and applicability map are omitted (C4). YAML radius `2` and the §4 asymmetric `2px 0 2px 0` stay as a keep-both. This badge uses error red as a ribbon fill; the Don't list still forbids treating error red as sale *text*. Keeping both radius writings, and omitting kind and the map because the source supplies no interaction evidence, are derived editorial implementation inferences from the verified surfaces; they are not Pinkoi-authored or a separately published UI specification.

### Search (header)

- Role: header search — input center, trailing Search button
- Input: border `#d3d3d5`, 4px radius
- Trailing Search button (footer capture): `#10567b` Pinkoi Teal, split-radius `0px 8px 8px 0px` (search-box trailing geometry) / `8×20` / 40px
- Not in the token set. No primitive type is attached.
- Kind: interactive
- The split-radius and 40px height are this trailing Search button's geometry. They are not Primary's 4px radius and not `tokens.rounded.lg: 8`. The teal fill is this search-submit's fill; it is not a second writing of Primary as the same component. Omitting a primitive type because the row is not in the token set, and keeping the trailing geometry on this search chrome rather than on Primary, are derived editorial implementation inferences from the verified surfaces; they are not Pinkoi-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web search field / submit; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable field; visual treatment omitted |
| disabled | applicable | A search field can be gated; visual treatment omitted |
| loading | not-applicable | Search field; in-place commit lives on the trailing Search button |
| error | applicable | Search field; visual treatment omitted |
| success | not-applicable | Search field; results land in the product grid |

### Country pills

- Role: country / locale pills
- Active: `#fff8f7` Coral Tint
- Inactive: `#eeeeef` Cool Gray
- Size: 100px
- Font: 14px·500
- Not in the token set. No primitive type is attached.
- Kind: interactive
- The 100px size is this pill's geometry. It is not a button padding and not `tokens.spacing`. The active `#fff8f7` is this pill's fill. It is not `tokens.colors.purchase`. Omitting a primitive type because the row is not in the token set, and reading those figures as this pill's geometry, are derived editorial implementation inferences from the verified surfaces; they are not Pinkoi-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Inactive `#eeeeef` Cool Gray |
| hover | applicable | Pointer-web pill; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A locale pill can be gated; visual treatment omitted |
| loading | not-applicable | Locale / country pill; it commits no operation in place |
| error | not-applicable | Locale / country pill; it commits no operation in place |
| success | not-applicable | Locale / country pill; it commits no operation in place |

### Outline Secondary (footer capture)

- Role: outline secondary control on the footer capture
- Background: `#fff`
- Radius: 4px
- Height: 40-52px
- Font: 14-16px·400-500
- Not in the token set. No primitive type is attached.
- Kind: interactive
- The 40-52px height and 14-16px / 400-500 font are this capture's geometry. They are not YAML Secondary `8px 12px` / `14px / 400`. Omitting a primitive type because the row is not in the token set, and keeping this footer capture beside YAML Secondary rather than merging them, are derived editorial implementation inferences from the verified surfaces; they are not Pinkoi-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web outline control; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | An outline control can be gated; visual treatment omitted |
| loading | not-applicable | Outline secondary as captured is a destination / neutral control; it commits no operation in place |
| error | not-applicable | Outline secondary; it commits no operation in place |
| success | not-applicable | Outline secondary; it commits no operation in place |

### Navigation header

- Role: sticky horizontal header on desktop with category dropdowns
- Default text color `#39393e`, link/active state `#2e90b7`
- Logo references `pinkoi_logo_2019.svg` — circular arcs + acute angles per brand identity refresh
- Navigation links remain weight 400 (lighter than headlines) for scannability
- §9 construction: white sticky bar, 14px weight 400 `#39393e` nav links with `#2e90b7` hover, dropdown menus with 4px radius and `0 0 4px rgba(32,32,38,.4)` shadow. Logo on the left, search input center, Login button (`--login` variant) on the right
- Not in the token set. No primitive type is attached.
- Kind: interactive
- Omitting a primitive type because the row is not in the token set, and keeping the dropdown shadow on this header rather than rewriting it as only `tokens.shadow.modal`, are derived editorial implementation inferences from the verified surfaces; they are not Pinkoi-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web nav link; source names `#2e90b7` hover and category dropdowns |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A nav link can be gated; visual treatment omitted |
| loading | not-applicable | Header nav link; it commits no operation in place |
| error | not-applicable | Header nav link; it commits no operation in place |
| success | not-applicable | Header nav link; it commits no operation in place |

### Tables

Used sparingly; commerce content is card-grid first. When used, row dividers via `0 1px 1px 0 rgba(32,32,38,.2)` shadow or `1px solid #e5e5e6` border. Not in the token set. No primitive type is attached. The source supplies no interaction evidence for a table as its own control. Kind and applicability map are omitted (C4). Omitting a primitive type because the row is not in the token set, and omitting kind and the map because the source supplies no interaction evidence, are derived editorial implementation inferences from the verified surfaces; they are not Pinkoi-authored or a separately published UI specification.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

### Spacing scale

Pinkoi works in a **5–10px micro-scale** for component padding and a coarser **24px+ rhythm** for section spacing:

| Common Padding Values | Use |
|---|---|
| `0` (15 uses) | Reset, tight columns |
| `2px`, `3px` | Badge insets, icon padding |
| `5px 10px` | Default tight button/cell |
| `4px 10px`, `6px 10px`, `8px 12px`, `9px 14px` | Button size variants S → M → L |
| `14px 0`, `64px 0` | Vertical section rhythm |

Those paddings are layout measurements. They are not `tokens.spacing` keys. Reading the card-internal micro-padding as that measurement rather than as `tokens.spacing`, and reading `64px 0` as section rhythm rather than only as `tokens.spacing.section: 64`, is a derived editorial implementation inference from the verified surfaces; it is not Pinkoi-authored or a separately published UI specification.

### Grid

- 6-column product grid is the dominant pattern (`16.66667%` per card)
- Container max-widths via media queries — content centers on wider viewports
- Negative margins on container (`margin: 0 -6px`) to pull edge cards flush

### Density

Pinkoi is a **high-density** system. Whitespace is rationed; products, prices, badges, and CTAs are stacked tightly to maximize browsable inventory. Don't space components like a SaaS dashboard. That paragraph is the source's own. Reading it as a layout rule for the recorded marketplace rather than as a separately published Pinkoi layout specification is a derived editorial implementation inference from the verified surfaces; it is not Pinkoi-authored or a separately published UI specification.

### Breakpoints

| Name | Range | Key Changes |
|---|---|---|
| Mobile | `<767px` | 2-column product grid, stacked nav, full-width CTAs |
| Mobile (alt) | `<768px` | Some surfaces use 768px as the cutoff |
| Tablet | `768px–1037px` | 3–4 column product grid, condensed nav |
| Desktop | `1037px–1200px` | 5–6 column product grid, full nav |
| Wide | `>1200px` | 6-column grid with side margins |
| Extra Wide | `>1248px` | Centered max-width container |

`<767px` and `<768px` stay two writings. They are not collapsed. Keeping those two cutoff writings uncollapsed is a derived editorial implementation inference from the verified surfaces; it is not Pinkoi-authored or a separately published UI specification.

### Touch targets

- Buttons use `5px 10px` to `9px 14px` padding scale — adequate but compact
- Card tap targets cover the entire `.m-card-product` area
- Mobile nav typically expands to a full-screen drawer

### Collapsing strategy

- 6-column product grid → 4 → 3 → 2 columns on shrinking width
- Horizontal sticky nav → hamburger drawer below 768px
- Multi-column footer → stacked sections below 768px
- Filter sidebar → bottom sheet on mobile
- Inline price + action → stacked below thumbnail on mobile

### Image behavior

- Product images dominate cards — minimum 190px square
- Hover states may swap to alternate angle on desktop only (no hover on mobile)
- WebP/lazy-load standard practice (CDN: `cdn02.pinkoi.com`)
- Card aspect ratio preserved across breakpoints

The 767 / 768 / 1037 / 1200 / 1248 breakpoint rows, the 190px square minimum, and the 6→4→3→2 collapse are the source's own figures. Reading them as the layout measurements the source recorded, rather than as a second token-set path, is a derived editorial implementation inference from the verified surfaces; it is not Pinkoi-authored or a separately published UI specification.

<!-- design-md:section content-locales -->
## 6. Content & Locales

Pinkoi speaks like a well-travelled friend recommending a designer they met at a craft fair: warm, specific, and quietly proud of the maker behind every product. The voice is **curatorial, bilingual, and commerce-forward** — English, Traditional Chinese, Japanese, Simplified Chinese, and Thai all render as first-class (never translated "to English" but authored for each locale, served via the per-language font stack). Sentences avoid hype; they frame objects through the designer's intent. The house tagline "Design the way you are" is declarative, not aspirational — it says *your* taste is already valid, Pinkoi's job is to surface it. No em-dash-heavy marketing voice, no "game-changer" vocabulary, no purple-prose product poetry. Shop copy, on the other hand, is **the designer's voice** — Pinkoi deliberately lets shop owners write listings in their own register, because a ceramicist from Kyoto should not sound like a leather-worker from Taipei. The quoted lines are the source's own. Reading that register as this contract's voice, rather than as a separately published Pinkoi microcopy guide, is a derived editorial implementation inference from the verified surfaces; it is not Pinkoi-authored or a separately published UI specification.

| Context | Tone |
|---|---|
| Primary CTAs | Short, verb-led, bilingual-parallel (`Sign In / Register`, `Sell on Pinkoi`, `Add to Cart`). Title-case in English, no trailing punctuation. |
| Purchase CTAs (coral `--purchase` button only) | Imperative + concrete object: `Add to Cart`, `Buy Now`. Never generic `Continue` or `Submit`. |
| Product listings (shop-authored) | Designer's own voice preserved. Pinkoi does not normalize tone across shops — variance is the feature. |
| Empty states (browsing / wishlist) | One-line explanation of *why* it is empty, plus one suggested next action. Never `No results`. |
| Error messages (form validation) | Field-specific + blameless. Asterisk-marked required field labels (`.s-required:after { content: "*" }`) carry most of the work; error lines stay short. |
| Success (add-to-cart, wishlist) | Confirmation of what happened, plus immediate next step (View Cart / Continue Browsing). Never celebratory. |
| Editorial / Pinkoi Zine | Longer-form, essayistic. Designer interviews use direct quotation. Contrast with terse storefront chrome is intentional. |
| Founder / corporate ("About") | First-person-plural, plain, slightly formal. `Pinkoi believes…`, `Pinkoi strives…`. |
| Onboarding / seller recruitment | Invitational (`Be a Pinkoist`, `Let's work together`). No countdown urgency, no "limited time" manipulation. |

**Forbidden phrases.** `World-class`, `amazing finds`, `curated for you` (overused across competitors), `Oops!`, `Something went wrong` without a reason, `No items found.` (too terminal — always give a path forward). In Traditional Chinese surfaces avoid `獨家優惠`, `超值` and other aggressive-discount vocabulary; Pinkoi's discount layer is the asymmetric ribbon badge, not shouty copy. No emoji on money or checkout screens. No exclamation marks in error messages. No approximate prices on any surface — listings show exact amounts in the shop currency.

**Voice samples.**

- `"Design the way you are."` — brand line, homepage hero. Verified: https://en.pinkoi.com/about, 2026-04.
- `"Asia's cross-border design marketplace"` — site header positioning. Verified: https://en.pinkoi.com, 2026-04.
- `"Sell on Pinkoi"` — designer-recruitment CTA, header + footer. Verified: https://en.pinkoi.com, 2026-04.
- `"Be a Pinkoist"` — brand-community invitation, about page. Cited: https://en.pinkoi.com/about/team.
- `"Let's work together."` / `"Pinkoi loves collaborating with people. We can't wait to turn your good ideas into great realities."` — partnership CTA. Verified: https://en.pinkoi.com/about, 2026-04.
- `"Stay up to date on the latest designs"` — newsletter footer. Verified: https://en.pinkoi.com, 2026-04.
- `"Pinkoi believes that design has a transformative power that can permeate every aspect of our lives."` — about-page lead paragraph. Verified: https://en.pinkoi.com/about, 2026-04.
- Empty wishlist (illustrative): `"No favorites yet — tap the heart on anything you love and it will live here."` — illustrative: not verified as live Pinkoi copy.
- Form error (illustrative): `"Please enter a valid email so the shop can reach you about your order."` — illustrative: not verified as live Pinkoi copy.

Keeping each sample's verified / cited / illustrative class on the sample rather than promoting illustrative strings as live-verified copy is a derived editorial implementation inference from the verified surfaces; it is not Pinkoi-authored or a separately published UI specification.

Published names and lines the source records, kept byte-exact: Pinkoi, Design the way you are., Asia's cross-border design marketplace, Sell on Pinkoi, Be a Pinkoist, Let's work together., Pinkoi loves collaborating with people. We can't wait to turn your good ideas into great realities., Stay up to date on the latest designs, Pinkoi believes that design has a transformative power that can permeate every aspect of our lives., Embracing great design can bring us closer to our ideal lifestyles, Sign In / Register, Add to Cart, Buy Now, Continue Browsing, View Order, View Cart, Place Order, Flagship Shops, Peter Yen (顏君庭), Mike Lee (李讓), Maibelle Lin (林怡君), Sequoia Capital India, GMO Venture Partners, 獨家優惠, 超值, World-class, amazing finds, curated for you, Oops!, Something went wrong, No items found., No items, No results found., Continue, Submit, Trending on Pinkoi, ships from <city>, pinkoi_logo_2019.svg. Classifying those strings as published names the source records and keeping them byte-exact is a derived editorial implementation inference from the verified surfaces; it is not Pinkoi-authored or a separately published UI specification.

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

These decisions are unnamed values, not permissions to invent. Calling this list a set of named gaps rather than a domain inventory, and treating the items as unnamed values rather than permissions to invent, is a derived editorial implementation inference from the verified surfaces; it is not Pinkoi-authored or a separately published UI specification.

- unsourced easing curve values for `ease-enter`, `ease-exit`, and `ease-standard`
- `focus-visible` visual treatments
- Standard card as an explicit DS variant (source: inferred from §1–§2 baseline)
- illustrative empty-wishlist and form-error strings as live Pinkoi copy
