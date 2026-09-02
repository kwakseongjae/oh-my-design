# Nike Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Nike is the digital storefront at `https://www.nike.com`. Catalog identity records `homepage: "https://www.nike.com"` and `primary_color: "#111111"`. That catalog `primary_color` is the same hex as token-set `tokens.colors.ink`; they stay two records. Token-set `tokens.source` is `prose-derived`. The source footer and the source HTML comment both record that a live fetch of nike.com returned HTTP 403 (bot-blocked), and that tokens reflect Nike's published identity and observed storefront conventions rather than a single scraped DOM, so exact pixel values are representative, not asserted as pulled from one live computed style. Reading that homepage as this contract's storefront surface, keeping catalog `primary_color` `#111111` off a replacement of `tokens.colors.ink`, keeping the 403 / representative-not-computed-style bound as the source wrote it, and attaching every value to the surface that established it, are derived editorial implementation inferences from the verified surfaces; they are not Nike-authored or a separately published UI specification.

The source records athletic minimalism turned into a sales engine. The page opens on pure white (`#ffffff`) with near-black ink (`#111111`) and a single high-voltage accent — **Volt** (`#d8ff00` / commonly rendered `#cdfb40`) — held in reserve for moments of energy. The default mood is editorial and confident: enormous product photography sits on generous whitespace, headlines shout in condensed bold caps, and almost nothing competes with the product or the swoosh. This is not a "friendly" e-commerce template; it is a brand magazine that happens to take payment. The typographic hero is the condensed, geometric sans lineage Nike has used since the mid-1970s. The marketing wordmark and hero headlines descend from **Futura Bold Condensed** (custom-cut as *Futura ND Nike 365*), while the live web UI runs on Nike's bespoke **Helvetica Now / Nike TG** stack — a Trade-Gothic-adjacent condensed face for display, with clean neutral grotesque for body. Headlines are frequently set in ALL CAPS, tightly tracked, italicized for motion, and stacked left-aligned like a stadium banner. What defines Nike visually is *contrast as a system*: black on white, then white on black. Entire sections invert to a full-bleed `#111111` canvas for drama, then snap back to white. Color is rationed — a product page can be entirely monochrome until a single Volt CTA or a "Just In" pill provides the spark. Corners are nearly square (small 4-8px radii) or fully pill (9999px) — almost nothing in between. The result feels fast, premium, and kinetic: motion implied even in static layout. The hex values, the Futura / Helvetica Now / Nike TG names, the 4-8px / 9999px radii, and the quoted "friendly" e-commerce sentence are the source's own. The characterizations built on them — athletic minimalism as a sales engine; a brand magazine that happens to take payment; contrast as a system; rationed color; motion implied even in static layout; fast, premium, and kinetic — are a derived editorial implementation inference from the verified surfaces; they are not Nike-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. Nike was founded in 1964 as **Blue Ribbon Sports** by University of Oregon runner **Phil Knight** and his coach **Bill Bowerman**, rebranding to **Nike** — for the Greek goddess of victory — in 1971. That same year design student **Carolyn Davidson** drew the Swoosh for $35; it would become one of the most recognized marks on earth. The waffle sole, born from Bowerman pouring rubber into a kitchen waffle iron, set the template: performance innovation as brand story. The aesthetic doctrine is athletic clarity. Nike adopted **Futura Bold Condensed** as its brand typeface in the mid-1970s — a geometric, no-nonsense face that reads as fast and engineered. In 1988 the agency Wieden+Kennedy delivered **"Just Do It,"** set in Futura Condensed Extra Black, and the brand voice was fixed: imperative, universal, unstoppable. The visual identity has stayed deliberately spare ever since — black, white, and the swoosh — so the product and the athlete are always the loudest thing on screen. Online, Nike is one of the largest direct-to-consumer retailers in the world, with the **Nike**, **Jordan**, **SNKRS**, and **Nike Run/Training Club** apps forming a membership ecosystem. The design's job is commerce that feels like culture: a storefront that reads like a sports magazine, where buying a shoe is buying into a story about effort and victory. Volt — the neon yellow-green Nike popularized in elite running and the 2012 Olympics — is the one color permitted to break the monochrome, because it signals pure energy. What Nike refuses: clutter, timidity, decoration for its own sake, and any visual that competes with the athlete. The brand occupies the space where minimalism meets adrenaline — restrained in palette, maximal in conviction. The years 1964 / 1971 / mid-1970s / 1988 / 2012, Blue Ribbon Sports, Phil Knight, Bill Bowerman, Carolyn Davidson and the $35 Swoosh, the waffle sole, Futura Bold Condensed, Wieden+Kennedy **"Just Do It"** in Futura Condensed Extra Black, the Nike / Jordan / SNKRS / Nike Run/Training Club membership ecosystem, Volt at the 2012 Olympics, and that closing refuses / minimalism-meets-adrenaline sentence are the source's own narrative facts; they do not by themselves supply interface tokens. Classifying that founding-and-identity narrative as context that does not by itself supply interface tokens is a derived editorial implementation inference from the verified surfaces; it is not Nike-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product's primary tasks, each naming a surface or control the source records, is a derived editorial implementation inference from the verified surfaces; it is not Nike-authored or a separately published UI specification. They do not come from the source's Personas section.

- Scan Grid PLP product tiles.
- Use the Header search field.
- Add to Bag, Checkout on white.
<!-- design-md:claim-end -->

### Audience

No named or demographic personas are invented. The source labels its named figures as fictional archetypes, so those biographies are dropped rather than promoted, and no name, age, city, motivation, or affiliation classification is carried into this document or its sidecar. What the source independently records at a group level is Members (`"Become a Member"`, `"Members get more. Join us."`, `"MEMBER ACCESS"`) and the athlete (`"the product and the athlete"`). Dropping the fictional archetypes rather than promoting them, carrying no name, age, city, motivation, or affiliation classification, and reading those source-named groups as this product's audience, are derived editorial implementation inferences from the verified surfaces; they are not Nike-authored or a separately published UI specification.

### Distinctive traits

The list restates the source's Key Characteristics. The values are recorded; classifying the list as that restatement, and the groupings and the readings inside them, are a derived editorial implementation inference from the verified surfaces; they are not Nike-authored or a separately published UI specification.

- Black (`#111111`) + White (`#ffffff`) as the load-bearing palette; everything else is accent
- Volt (`#d8ff00`) as the signature energy color — rationed, never decorative wallpaper
- Condensed bold uppercase display type (Futura / Trade Gothic lineage) for headlines
- Full-bleed inverted (black) sections alternating with white for editorial rhythm
- Pill buttons (radius 9999px) as the dominant interactive shape
- Photography-first: huge imagery, minimal chrome, swoosh as punctuation
- Flat surfaces — depth comes from contrast and scale, not shadow

### Principles

These eight items are a derived editorial implementation inference from the verified surfaces; they are not Nike-authored or a separately published UI specification. The source states them in its own Principles section. The source HTML comment records that interpretive claims (e.g., "one spark per view") are editorial readings of the design, not documented Nike statements.

1. **Product is the hero.** Photography dominates; UI chrome shrinks to invisibility. If a UI element competes with the shoe, the UI loses.
2. **Black and white carry the brand.** Color is rationed. A view should work in monochrome; accent is the exception that creates emphasis.
3. **One spark per view.** Volt (or a single status color) appears once, intentionally. Two sparks is no spark.
4. **Command, don't ask.** Copy and CTAs use imperative verbs. The interface has a point of view and states it plainly.
5. **Flat is premium.** Depth comes from contrast, scale, and inversion — not shadows. Resting surfaces stay flat.
6. **Left-aligned authority.** Text hangs on a left rail like editorial print. Centering is reserved for solitary CTAs.
7. **Condensed shouts, grotesque reads.** Display type is condensed bold caps; running text is clean Helvetica Now. Never confuse the two roles.
8. **Speed is a feeling.** Tight leading, italic energy, edge-bleed imagery, and snappy motion make a static page feel kinetic.

### Application rules

The source states these seven as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not Nike-authored or a separately published UI specification.

- Lead with black (`#111111`) and white (`#ffffff`) — they carry the brand
- Use pill (9999px) buttons as the default interactive shape
- Set headlines in condensed bold UPPERCASE, left-aligned, tight leading
- Ration Volt (`#d8ff00`) for true energy moments — one spark per view
- Let product photography go edge-to-edge and dominate the layout
- Invert whole sections to black for editorial drama
- Keep surfaces flat; reserve shadow for genuinely floating elements

### Avoid

The source states these seven as its Don't list. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not Nike-authored or a separately published UI specification.

- Don't scatter accent colors — Volt and orange are spices, not the meal
- Don't add drop shadows to product cards — flat is the aesthetic
- Don't center body copy or headlines — Nike hangs text on a left rail
- Don't mix many border radii — square, 8/12px, or pill; avoid in-betweens
- Don't set running body text in condensed display faces — switch to Helvetica Now
- Don't crowd the product — whitespace signals premium
- Don't use Nike orange (`#fa5400`) as the primary UI accent — it's heritage/packaging

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Role names below follow the source's own labels. Pairing each hex to the token-set path named beside it, keeping `tokens.colors.sale` `#d43f21` off `tokens.colors.error` `#e34f2b`, keeping `tokens.colors.volt` `#d8ff00` off `tokens.colors.volt-ui` `#cdfb40`, keeping `tokens.colors.ink` `#111111` off the §2 Grey 900 alias that the source writes as equal to Nike Black, keeping catalog `primary_color` `#111111` as a second record of that same hex, keeping `tokens.colors.grey-50` `#f7f7f7` off `tokens.colors.grey-100` `#f5f5f5`, attaching every role to the surface the source recorded rather than relabeling a storefront value as a house palette for every Nike surface, and keeping the source's Volt-hex-varies conflict (`#d8ff00` product / `#cdfb40` UI accent; both retained) as a retained pair rather than choosing one, and reading info `#1463ff` "focus rings on some surfaces" as a generic Focus mention rather than `focus-visible` treatment, are derived editorial implementation inferences from the verified surfaces; they are not Nike-authored or a separately published UI specification. The hex values and recorded uses are the source's own.

Primary

- **Nike Black** (`#111111`): `black`. Primary ink, headings, body text, primary button fill, inverted section backgrounds. The dominant brand color — Nike is a black-and-white brand first. Token-set path `tokens.colors.ink`. Catalog `primary_color` is the same hex; it stays a second record.
- **Pure White** (`#ffffff`): `white`. Page background, inverted-section text, primary-button label on black, card surfaces. Token-set path `tokens.colors.canvas`.
- **Volt** (`#d8ff00`): `volt`. Nike's signature high-energy accent (the neon yellow-green of running shoes). Used sparingly for hero CTAs, highlights, sale energy, sport moments. Token-set path `tokens.colors.volt`.
- **Volt UI** (`#cdfb40`): bright variant that appears in UI accents. Token-set path `tokens.colors.volt-ui`. Same family as Volt; it stays a second key.

Brand (Logo / Marketing)

- **Swoosh Black** (`#111111`): The swoosh and wordmark render in black on light, white on dark. The mark is monochrome by doctrine.
- **Orange Heritage** (`#fa5400`): Legacy Nike orange (the original shoebox / "Nike orange"). Used in heritage, Jordan, and packaging contexts — not the core web UI accent. Token-set path `tokens.colors.orange-heritage`.

Semantic

- **Sale** (`#d43f21`): Markdown pricing, sale labels. Token-set path `tokens.colors.sale`. Nike shows discounted prices in a warm red.
- **Error** (`#e34f2b`): Destructive states, error text. Token-set path `tokens.colors.error`. Same §2 grouping as Sale; two keys, two hexes.
- **Success Green** (`#0a8800`): In-stock confirmations, order-success, positive availability. Token-set path `tokens.colors.success`.
- **In-Stock / Info** (`#1463ff`): Informational links, "Member Access" accents, focus rings on some surfaces. Token-set path `tokens.colors.info`. That "focus rings on some surfaces" sentence is a generic Focus mention; it is not `focus-visible` treatment evidence.
- **Warning Amber** (`#cd7b00`): Low-stock ("Almost Sold Out"), pending order states. Token-set path `tokens.colors.warning`.

Neutral scale

- **Grey 50** (`#f7f7f7`): Lightest surface, section fills, hover background for white cards. Token-set path `tokens.colors.grey-50`.
- **Grey 100** (`#f5f5f5`): Secondary background, input fills, skeleton base. Token-set path `tokens.colors.grey-100`.
- **Grey 200** (`#e5e5e5`): Default borders, dividers, disabled outlines. Token-set path `tokens.colors.grey-200`.
- **Grey 300** (`#cccccc`): Stronger borders, inactive thumbnails. Token-set path `tokens.colors.grey-300`.
- **Grey 500** (`#8d8d8d`): Placeholder text, disabled labels, struck-through original price. Token-set path `tokens.colors.grey-500`.
- **Grey 600** (`#757575`): Secondary/caption text — "Men's Shoes", subtitles, metadata. Token-set path `tokens.colors.grey-600`.
- **Grey 700** (`#707072`): Body sub-text on white, breadcrumb text. Token-set path `tokens.colors.grey-700`.
- **Grey 900** (`#111111`): Strongest text — equal to Nike Black. A §2 alias; it is not a YAML `tokens.colors` key.

Surface & borders

- **Border Default**: `#e5e5e5` (grey200). Cards, inputs, dividers, swatch outlines.
- **Border Strong**: `#cccccc` (grey300). Active/hovered input outlines, selected swatch ring becomes `#111111`.
- **Inverted Surface**: `#111111`. Full-bleed dark sections, footer, video overlays.
- **Overlay Scrim**: `rgba(0,0,0,0.5)` to `rgba(0,0,0,0.75)`. Modal/quick-view backdrop, image gradients for legible overlaid text.

### Spacing

Token-set path `tokens.spacing` (unitless steps, kept as the source wrote them): `xs: 4` · `sm: 8` · `md: 12` · `base: 16` · `lg: 24` · `xl: 32`.

Source §5 also writes a base unit of 8px; common values 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px; section vertical rhythm 64-96px between major editorial blocks; product grid gutter 16px; card internal text gap 8-12px. The 48px / 64px / 96px figures are §5 writings. They are not extra `tokens.spacing` keys. `tokens.spacing.md: 12` is not `tokens.rounded.lg: 12`. `tokens.spacing.base: 16` is not body-lg size 16, not price size 16, not button font 16px, and not the product-grid gutter 16px as a replacement. `tokens.spacing.lg: 24` is not Heading 2 size 24, not button padding `0 24px`, not surface-card padding 24px, and not the dialog close 24px as a replacement. `tokens.spacing.xl: 32` is not dialog padding 32px as a replacement. `tokens.spacing.xs: 4` is not `tokens.rounded.sm: 4`. `tokens.spacing.sm: 8` is not `tokens.rounded.md: 8`. Keeping those unitless spacing steps on their own keys rather than rewriting them as a grid, and keeping those writings of `4`, `8`, `12`, `16`, `24`, `32`, `48`, `64`, and `96` on their own records, are derived editorial implementation inferences from the verified surfaces; they are not Nike-authored or a separately published UI specification.

### Shape

Token-set path `tokens.rounded` (unitless steps, kept on their own path): `sm: 4` · `md: 8` · `lg: 12` · `full: 9999`.

The source's named radius uses, kept on their own rows:

- Square (`0px`): Product images, full-bleed heroes, sale flags. A §5 named use. It is not a YAML `tokens.rounded` key.
- Compact (`4` / `4px`): Size swatches, small tags. Token-set key `tokens.rounded.sm`.
- Standard (`8` / `8px`): Inputs, surface tags, toasts. Token-set key `tokens.rounded.md`.
- Comfortable (`12` / `12px`): Surface cards, carousel cards, modals. Token-set key `tokens.rounded.lg`.
- Pill (`9999` / `9999px`): Buttons, chips, search field, promo pills. Token-set key `tokens.rounded.full`.

`tokens.rounded.sm: 4` is not sale-pill radius 4 as a replacement of the YAML step. `tokens.rounded.md: 8` is not input radius 8 as a replacement of the YAML step. `tokens.rounded.lg: 12` is not `tokens.spacing.md: 12`. `tokens.rounded.full: 9999` stays the unitless full step. Keeping `4`, `8`, `12`, and `9999` as four keys, and keeping Square `0px` as a §5 named use rather than inventing a YAML rounded key, are derived editorial implementation inferences from the verified surfaces; they are not Nike-authored or a separately published UI specification.

### Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Product cards, sections, the default — Nike is a flat brand |
| Hairline (Level 1) | 1px `#e5e5e5` border | Inputs, surface cards, filter chips |
| Floating (Level 2) | `0 4px 16px rgba(0,0,0,0.12)` | Toasts, dropdowns, sticky add-to-bag bar |
| Modal (Level 3) | `0 8px 32px rgba(0,0,0,0.18)` | Quick view, size guide, login dialogs |
| Sticky header | `0 1px 0 rgba(0,0,0,0.08)` on scroll | Pinned nav separation |

Token-set path `tokens.shadow.toast` with value `0 4px 16px rgba(0,0,0,0.12)`. The Modal `0 8px 32px rgba(0,0,0,0.18)` and sticky-header `0 1px 0 rgba(0,0,0,0.08)` writings are §6-only; they are not extra YAML `tokens.shadow` keys. **Shadow Philosophy** (source): Nike communicates hierarchy through **contrast and scale**, not depth. Most surfaces are perfectly flat; an item earns a shadow only when it floats above content (toast, modal, sticky bar). There are no colored shadows and no multi-layer elevation stacks — depth would compete with the photography. Inverted black sections create separation without any shadow at all. Blur effects (source): sticky header gains a subtle backdrop blur + white translucency on scroll over imagery; video heroes use gradient scrims (not blur) for text legibility. Reading that contrast-and-scale hierarchy as the elevation rule, keeping the YAML toast shadow off the two §6-only shadows as replacements, and reading the sticky-header blur as a named effect rather than a motion token, are derived editorial implementation inferences from the verified surfaces; they are not Nike-authored or a separately published UI specification.

### Motion

Source-stated duration roles and easing names. Token-set `tokens.source` is `prose-derived`; the source HTML comment records that exact pixel values are representative, not asserted as pulled from one live computed style. Treating §15 as that representative named set rather than a live computed observation, omitting the three unattributed template cubic-bezier values, keeping the unique `ease-power` curve as the source wrote it rather than as a live computed observation, and holding the five-kind per-component promotion gate for any later exact-curve promotion, are derived editorial implementation inferences from the verified surfaces; they are not Nike-authored or a separately published UI specification.

Durations (named), as the source table states them:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Reduced-motion fallback, state flips |
| `motion-fast` | 150ms | Hover, focus, button press, chip select |
| `motion-standard` | 250ms | Default — quick-add reveal, toast in, tab switch |
| `motion-slow` | 400ms | Image gallery transitions, section reveals |
| `motion-hero` | 600ms | Hero/campaign entrance, parallax settle |

`motion-hero` `600ms` is this named duration. It is not a type size and is not Grey 600. Keeping that named duration off a type size and off Grey 600 as replacements is a derived editorial implementation inference from the verified surfaces; it is not Nike-authored or a separately published UI specification.

Easings. Source-stated names and uses. Three cubic-bezier values match the legacy spec-template examples in `spec/omd-v0.1.md` and are omitted rather than promoted. `ease-power` does not match that template; its source curve is kept as a named source writing.

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | omitted (unattributed cubic-bezier; source-stated name only; matches the legacy spec-template `ease-enter` example) | Things appearing — toasts, drawers, quick-add |
| `ease-exit` | omitted (unattributed cubic-bezier; source-stated name only; matches the legacy spec-template `ease-exit` example) | Dismissals, pops out |
| `ease-standard` | omitted (unattributed cubic-bezier; source-stated name only; matches the legacy spec-template `ease-standard` example) | Two-way — tabs, accordions, hover scale |
| `ease-power` | `cubic-bezier(0.2, 0.8, 0.2, 1)` | Athletic accelerate-out — image zoom, hero parallax, the "fast" feeling |

Signature motions, as the source names them:

1. **Hover product zoom.** On product-card hover the image scales `1.0 → 1.04` over `motion-standard` with `ease-power`, conveying athletic momentum. No shadow lift — scale alone.
2. **Quick-add reveal.** A black pill "Add to Bag" slides up from the card's bottom edge (`y+12px → 0`, `motion-standard / ease-enter`) on hover, fading in. Exits faster (`motion-fast / ease-exit`).
3. **Section inversion / scroll reveal.** Editorial blocks fade-and-rise (`y+24px → 0`, `motion-slow / ease-power`) as they enter the viewport — content arrives with momentum, not a passive fade.
4. **Bag toast.** Confirmation slides from the top-right (`x+24px → 0`, `motion-standard / ease-enter`), holds, then exits with `ease-exit`.
5. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all tokens collapse to `motion-instant`; scales and parallax disable, crossfades replace slides. The store stays fully usable.

An exact curve may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework or vendor document — does not satisfy that condition. The `ease-power` curve above is kept as the source's named unique writing, not as that later per-component computed promotion. Naming those five evidence kinds as the promotion gate, refusing a partial confirmation, and keeping `ease-power` as a named source writing rather than a live computed observation, is a derived editorial implementation inference from the verified surfaces; it is not Nike-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | The source names *Futura ND Nike 365* (custom Futura Bold Condensed) as the brand wordmark and tier-1 marketing face, and Futura Bold Condensed as the brand typeface since the mid-1970s. It does not publish a Nike-hosted type specimen URL. |
| Live computed surface-use | The source footer and HTML comment record HTTP 403 (bot-blocked). No live computed family from a successful fetch is promoted from the visible source body. |
| Declared display / headlines | `"Nike Futura", "Futura ND", "Trade Gothic", "Helvetica Now Display", "Helvetica Neue", Helvetica, Arial, sans-serif` — condensed, bold, frequently uppercase. |
| Declared UI / body | `"Helvetica Now Text", "Helvetica Neue", Helvetica, Arial, "Nike TG", sans-serif` — neutral grotesque for runs of text. |
| YAML family | `tokens.typography.family.sans` `Helvetica Now Text`. `tokens.typography.family.mono` `Helvetica Now Text`. Two keys, one family string. |
| Brand wordmark | *Futura ND Nike 365* (custom Futura Bold Condensed) — logo and tier-1 marketing only. |
| Outside this record | Typography beyond the source's nike.com storefront writing stays outside this contract. |

Reading the mid-1970s Futura adoption as official product-use context rather than a live computed family, reading the 403 bound as the source body's live-surface evidence class rather than filling it from another file, reading the source body's lack of a Nike-hosted type-specimen URL as official product-use without a published specimen page rather than inventing a URL, keeping `family.sans` and `family.mono` as two keys that share `Helvetica Now Text`, and reading typography beyond the source's nike.com storefront writing as outside this contract, are derived editorial implementation inferences from the verified surfaces; they are not Nike-authored or a separately published UI specification.

### Family

- **Display / Headlines:** `"Nike Futura", "Futura ND", "Trade Gothic", "Helvetica Now Display", "Helvetica Neue", Helvetica, Arial, sans-serif`
- **UI / Body:** `"Helvetica Now Text", "Helvetica Neue", Helvetica, Arial, "Nike TG", sans-serif`
- **YAML sans:** `tokens.typography.family.sans` `Helvetica Now Text`
- **YAML mono:** `tokens.typography.family.mono` `Helvetica Now Text`
- **Brand Wordmark:** *Futura ND Nike 365* (custom Futura Bold Condensed) — logo and tier-1 marketing only.

Do not present a system or fallback stack as the brand face. Do not replace unavailable or unobserved brand type with a substitute. Keeping the §3 stacks beside the two YAML family keys, and refusing a fallback as the brand face, are derived editorial implementation inferences from the verified surfaces; they are not Nike-authored or a separately published UI specification.

### Type roles

YAML writes unitless line heights (`0.95`, `1.0`, `1.05`, `1.2`, `1.25`, `1.4`, `1.5`, `1.3`). Those ratios stay ratios and are never converted to a replacement px (A1a). YAML `use` strings stay in the Token-set use column. Source §3 writes the longer notes, including Hero `64-88px` beside YAML size `80`, Heading 1 weight `500/700` beside YAML `700`, Subtitle weight `400/500` beside YAML `400`, Label size `12-14px` beside YAML `13`, Caption `"Men's Shoes"`, Price `Tabular feel`, and Label `"MEMBER ACCESS"`. Both writings stay. Pairing each YAML role to the token-set path named beside it, keeping YAML `use` strings verbatim, keeping the longer §3 notes beside them, keeping Hero YAML `80` off the §3 `64-88px` range as a replacement, keeping `tokens.typography.body-lg.size` `16` and `tokens.typography.price.size` `16` off `tokens.spacing.base: 16`, keeping `tokens.typography.h2.size` `24` off `tokens.spacing.lg: 24`, and keeping `tokens.typography.label.size` `13` off Caption size `13` as a merged role, are derived editorial implementation inferences from the verified surfaces; they are not Nike-authored or a separately published UI specification.

| Role | Family | Size | Weight | Line height | Tracking | Token-set use | §3 notes |
|---|---|---|---|---|---|---|---|
| Hero Headline | Display (condensed) | YAML `80` / §3 `64-88px` | 700 | 0.95 (tight) | -0.01em | Hero headline, UPPERCASE condensed | UPPERCASE, left-aligned, often italic |
| Display Large | Display (condensed) | 48px | 700 | 1.0 | -0.01em | Section banners (JUST IN) | Section banners ("JUST IN") |
| Display Medium | Display | 36px | 700 | 1.05 | normal | Editorial sub-headers | Editorial sub-headers |
| Heading 1 | Helvetica Now | 28px | YAML `700` / §3 `500/700` | 1.2 | normal | Product title (PDP) | Product title (PDP) |
| Heading 2 | Helvetica Now | 24px | 500 | 1.25 | normal | Card / section titles | Card / section titles |
| Subtitle | Helvetica Now | 20px | YAML `400` / §3 `400/500` | 1.4 | normal | Product category, list headers | Product category, list headers |
| Body Large | Helvetica Now | 16px | 400 | 1.5 | normal | Descriptions, paragraphs | Descriptions, paragraphs |
| Body | Helvetica Now | 15px | 400 | 1.5 | normal | Standard reading text | Standard reading text |
| Price | Helvetica Now | 16px | 500 | 1.4 | normal | Price; sale price in red | Tabular feel; sale price in red |
| Caption | Helvetica Now | 13px | 400 | 1.4 | normal | Metadata, color count | Metadata, "Men's Shoes", color count |
| Label / Eyebrow | Display | YAML `13` / §3 `12-14px` | 700 | 1.3 | 0.04em | UPPERCASE micro-labels | UPPERCASE micro-labels, "MEMBER ACCESS" |

Token-set paths: `tokens.typography.hero` · `tokens.typography.display-lg` · `tokens.typography.display-md` · `tokens.typography.h1` · `tokens.typography.h2` · `tokens.typography.subtitle` · `tokens.typography.body-lg` · `tokens.typography.body` · `tokens.typography.price` · `tokens.typography.caption` · `tokens.typography.label`.

Type principles, as the source states them. These five items are a derived editorial implementation inference from the verified surfaces; they are not Nike-authored or a separately published UI specification.

- **Uppercase is a brand voice.** Headlines, eyebrows, and labels lean ALL CAPS with positive tracking. Body copy stays sentence case.
- **Condensed for shout, grotesque for read.** Display moments use condensed bold (Futura/Trade Gothic lineage); anything the user actually reads switches to clean Helvetica Now.
- **Tight display leading.** Hero headlines run at 0.95-1.0 line-height so multi-line caps stack like a stadium banner.
- **Italic implies motion.** Italicized condensed caps are reserved for energy/sport moments — "JUST DO IT", drop announcements.
- **Two weights do the work.** UI text lives at 400 (body) and 500 (emphasis/price/buttons); 700 is for display and labels only.

### Assets

- Catalog logo: `type: simpleicons`, `slug: nike`. That pointer is a third-party icon-set entry, not a Nike-distributed mark file.
- Swoosh and wordmark: monochrome by doctrine — black on light, white on dark. Wordmark face *Futura ND Nike 365*.
- Product photography is first-party catalog content; do not replace it with invented brand-color decoration.

Treating the simpleicons slug as identity metadata rather than a portable first-party asset file, and not replacing first-party product photography with invented brand-color decoration, are derived editorial implementation inferences from the verified surfaces; they are not Nike-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The source state contract, preserved here while the catalog graph is not adopted:

| State | Treatment |
|---|---|
| **Empty (bag)** | Centered short line `#111111` 18px ("Your bag is empty."), one black pill CTA "Start Shopping". No illustration clutter. |
| **Empty (search/filter)** | `#757575` caption ("No results. Try another filter."), filters remain editable. |
| **Loading (grid)** | Skeleton tiles at `#f5f5f5` matching square product aspect ratio, 1.2s shimmer with 8% white sweep. Price/title as grey bars. |
| **Loading (button)** | Label replaced by white spinner on `#111111`; button width preserved, no double-submit. |
| **Error (inline field)** | 1.5px `#d43f21` border, helper text below in `#d43f21` 13px, one actionable sentence ("Select a size to continue."). |
| **Error (page)** | Centered black headline + grey body + black pill "Try Again". No stack traces, no apology spam. |
| **Success (added to bag)** | White toast top-right, 1px `#e5e5e5` border, `0 4px 16px rgba(0,0,0,0.12)` shadow, "Added to Bag" + mini product thumb. Auto-dismiss ~4s. |
| **Sold out** | Size swatch text `#cccccc` with diagonal strike; "Sold Out" replaces CTA; "Notify Me" outline button offered. |
| **Low stock** | Amber `#cd7b00` caption ("Almost Sold Out") under price. |
| **Sale** | Original price struck-through `#8d8d8d`, sale price `#d43f21`, optional `#d43f21` "Sale" pill on image. |
| **Disabled (button)** | `#e5e5e5` background, `#8d8d8d` text, no pointer. |
| **Skeleton** | `#f5f5f5` blocks at exact final dimensions, shimmer at component radius (0px image / pill button). |

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless captured as that same canonical state. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow the control's product role, not its primitive kind. `not-applicable` is used only where the control's role makes the state meaningless — a destination link, a tab or chip that only selects a facet, or a value field that does not report an in-progress or completed operation on itself — and the reason given is always that semantic one. A `Primitive type` line is attached only when the source YAML records that type on that component. §4-only controls are labelled `not in the token set`. Generic `Focus` capture (input border `#111111` 1.5px, no glow; search background `#ffffff` with border 1.5px `#e5e5e5`; info `#1463ff` "focus rings on some surfaces") is not treated as a `focus-visible` treatment. Non-interactive surfaces omit kind and a state-applicability map rather than inventing them. Preserving the source state contract here rather than delegating it to an unadopted catalog graph, the role-based decision procedure above, every interactive-kind verdict, every applicability verdict, the reason given for either, every geometry-versus-token-path reading on the controls below, and the refusal to treat this as a complete state-coverage claim, are derived editorial implementation inferences from the verified surfaces; they are not Nike-authored or a separately published UI specification. This is not a complete state-coverage claim.

### Primary (Fill / Black)

- Role: "Add to Bag", "Checkout", primary CTAs on white surfaces
- Primitive type: `button` · Kind: interactive
- Background: `#111111`
- Text: `#ffffff`
- Border: none
- Radius: 9999px (pill)
- Padding: 0 24px
- Height: 48px (default), 60px (hero)
- Font: 16px / 500 / Helvetica Now
- Hover: background `#757575`
- Disabled: background `#e5e5e5`, text `#8d8d8d`
- Loading (source §14): Label replaced by white spinner on `#111111`; button width preserved, no double-submit
- Token-set type: `tokens.components.button-primary.type` `button`
- Token-set bg: `tokens.components.button-primary.bg` `#111111`
- Token-set fg: `tokens.components.button-primary.fg` `#ffffff`
- Token-set radius: `tokens.components.button-primary.radius` `9999`
- Token-set padding: `tokens.components.button-primary.padding` `0 24px`
- Token-set font: `tokens.components.button-primary.font` `16px/500`
- Token-set use: `Add to Bag, Checkout on white`
- The `0 24px` padding is this button's padding. It is not `tokens.spacing.lg: 24`. The `16px / 500` font is this control's font. Height 48px is this control; it is not a §5 common spacing value as a replacement. Height 60px is the hero writing of this control.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Captured background `#757575` |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | Captured `#e5e5e5` / `#8d8d8d` |
| loading | applicable | Add to Bag / Checkout commits a cart or checkout request; captured spinner on `#111111` |
| error | applicable | A checkout commit can fail; visual treatment omitted on this control |
| success | applicable | Same commit role; success visual is the bag toast, omitted on this control |

### Inverted (Fill / White)

- Role: Primary CTA on black / photographic / inverted sections
- Primitive type: `button` · Kind: interactive
- Background: `#ffffff`
- Text: `#111111`
- Border: none
- Radius: 9999px
- Padding: 0 24px
- Height: 48px
- Font: 16px / 500 / Helvetica Now
- Hover: background `#e5e5e5`
- Token-set type: `tokens.components.button-inverted.type` `button`
- Token-set bg: `tokens.components.button-inverted.bg` `#ffffff`
- Token-set fg: `tokens.components.button-inverted.fg` `#111111`
- Token-set radius: `tokens.components.button-inverted.radius` `9999`
- Token-set padding: `tokens.components.button-inverted.padding` `0 24px`
- Token-set font: `tokens.components.button-inverted.font` `16px/500`
- Token-set use: `Primary CTA on dark sections`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Captured background `#e5e5e5` |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | Button control; visual treatment omitted on this inverted record |
| loading | applicable | A primary CTA on an inverted section commits the same class of request; visual treatment omitted on this record |
| error | applicable | Same commit role; visual treatment omitted on this control |
| success | applicable | Same commit role; visual treatment omitted on this control |

### Secondary (Outline)

- Role: Secondary action beside a primary fill
- Primitive type: `button` · Kind: interactive
- Background: transparent
- Text: `#111111`
- Border: 1.5px solid `#111111`
- Radius: 9999px
- Padding: 0 24px
- Height: 48px
- Font: 16px / 500 / Helvetica Now
- Hover: border `#757575`, text `#757575`
- Token-set type: `tokens.components.button-secondary.type` `button`
- Token-set bg: `tokens.components.button-secondary.bg` `transparent`
- Token-set fg: `tokens.components.button-secondary.fg` `#111111`
- Token-set radius: `tokens.components.button-secondary.radius` `9999`
- Token-set padding: `tokens.components.button-secondary.padding` `0 24px`
- Token-set font: `tokens.components.button-secondary.font` `16px/500`
- Token-set use: `Secondary outline action`
- Source §4 use: Secondary action ("Favorite", "Find in Store") beside a primary fill. Both writings stay.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Captured border / text `#757575` |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | Button control; visual treatment omitted |
| loading | applicable | Favorite / Find in Store commits a save or store lookup; visual treatment omitted |
| error | applicable | Same commit role; visual treatment omitted |
| success | applicable | Same commit role; visual treatment omitted |

### Volt Accent

- Role: Energy CTA — limited drops, SNKRS, sport campaigns. Rare and intentional.
- Primitive type: `button` · Kind: interactive
- Background: `#d8ff00`
- Text: `#111111`
- Border: none
- Radius: 9999px
- Padding: 0 24px
- Height: 48px
- Font: 16px / 700 / Helvetica Now
- Token-set type: `tokens.components.button-volt.type` `button`
- Token-set bg: `tokens.components.button-volt.bg` `#d8ff00`
- Token-set fg: `tokens.components.button-volt.fg` `#111111`
- Token-set radius: `tokens.components.button-volt.radius` `9999`
- Token-set padding: `tokens.components.button-volt.padding` `0 24px`
- Token-set font: `tokens.components.button-volt.font` `16px/700`
- Token-set use: `Energy CTA, drops/SNKRS`
- `#d8ff00` is this control's fill and `tokens.colors.volt`. It is not `tokens.colors.volt-ui` `#cdfb40`.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | Button control; visual treatment omitted |
| loading | applicable | An energy CTA commits a drop or campaign action; visual treatment omitted |
| error | applicable | Same commit role; visual treatment omitted |
| success | applicable | Same commit role; visual treatment omitted |

### Text Link (Ghost)

- Role: Tertiary navigation, editorial links
- Primitive type: not in the token set · Kind: interactive
- Background: none
- Text: `#111111`, underline on hover
- Font: 15px / 400 / Helvetica Now
- Trailing arrow `→` for "Shop All", "Learn More"
- YAML `tokens.components` does not record this control.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Captured underline |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A destination link whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control is a destination link; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | A destination link does not report a failed request on itself |
| success | not-applicable | Same role reason: reaching the destination is not an operation this link reports as success |

### Default Input

- Role: Forms, checkout fields
- Primitive type: `input` · Kind: interactive
- Background: `#ffffff`
- Text: `#111111`
- Border: 1.5px solid `#e5e5e5`
- Radius: 8px
- Padding: 14px 16px
- Font: 16px / 400 / Helvetica Now
- Placeholder: `#8d8d8d`
- Observed focus (generic Focus, not `focus-visible` treatment): border `#111111` (1.5px), no glow
- Error (source §4): Background `#ffffff`; Border 1.5px solid `#d43f21`; Radius 8px; Padding 14px 16px; Helper text below in `#d43f21`, 13px. Use: Validation failure on checkout/login. Source §14 Error (inline field) writes the same 1.5px `#d43f21` border, helper text below in `#d43f21` 13px, and one actionable sentence ("Select a size to continue.").
- Token-set type: `tokens.components.input-default.type` `input`
- Token-set bg: `tokens.components.input-default.bg` `#ffffff`
- Token-set fg: `tokens.components.input-default.fg` `#111111`
- Token-set radius: `tokens.components.input-default.radius` `8`
- Token-set padding: `tokens.components.input-default.padding` `14px 16px`
- Token-set font: `tokens.components.input-default.font` `16px/400`
- Token-set use: `Form / checkout field`
- Radius 8px is this control and `tokens.rounded.md`. The `16px` in padding is this control's padding; it is not `tokens.spacing.base: 16` as a replacement.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable field; visual treatment omitted. Observed focus above is generic Focus, not this row |
| disabled | applicable | Input control; visual treatment omitted |
| loading | not-applicable | This control is a value field; it does not commit an operation whose in-progress state it could report |
| error | applicable | Form field; captured 1.5px `#d43f21` border and 13px helper |
| success | not-applicable | A checkout value field does not report a completed operation on itself |

### Search (rounded)

- Role: Header search field
- Primitive type: `input` · Kind: interactive
- Background: `#f5f5f5`
- Text: `#111111`
- Border: none
- Radius: 9999px (pill)
- Padding: 12px 20px (leading search icon `#757575`)
- Font: 16px / 400 / Helvetica Now
- Observed focus (generic Focus, not `focus-visible` treatment): background `#ffffff`, border 1.5px `#e5e5e5`
- Token-set type: `tokens.components.input-search.type` `input`
- Token-set bg: `tokens.components.input-search.bg` `#f5f5f5`
- Token-set fg: `tokens.components.input-search.fg` `#111111`
- Token-set radius: `tokens.components.input-search.radius` `9999`
- Token-set padding: `tokens.components.input-search.padding` `12px 20px`
- Token-set font: `tokens.components.input-search.font` `16px/400`
- Token-set use: `Header search field`
- `#f5f5f5` is this control's fill and `tokens.colors.grey-100`. Padding `12px` is this control; it is not `tokens.spacing.md: 12` as a replacement.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable field; visual treatment omitted. Observed focus above is generic Focus, not this row |
| disabled | applicable | Input control; visual treatment omitted |
| loading | not-applicable | This control is a value field; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | This header search field does not report a failed request on itself; empty results are the page empty-search caption |
| success | not-applicable | A search value field does not report a completed operation on itself |

### Product Card

- Role: Grid PLP product tile — image does all the work, chrome is invisible
- Primitive type: `card` · Kind: interactive
- Background: `#ffffff`
- Border: none
- Radius: 0px (image), text block flush-left below
- Padding: 0 (image full-bleed) + 12px top gap to text
- Shadow: none
- Hover: image subtle scale or quick-add reveal; no shadow lift
- Detail: title 16px/500 `#111111`, category 15px/400 `#757575`, price 16px/500; sale price `#d43f21` with struck-through `#8d8d8d` original
- Token-set type: `tokens.components.product-card.type` `card`
- Token-set bg: `tokens.components.product-card.bg` `#ffffff`
- Token-set fg: `tokens.components.product-card.fg` `#111111`
- Token-set radius: `tokens.components.product-card.radius` `0`
- Token-set use: `Grid PLP product tile`
- The 12px top gap is this card's text gap. It is not `tokens.spacing.md: 12` as a replacement. Title 16px/500 is this card's title; it is not only the Price type-role row.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Captured image scale or quick-add reveal |
| focus-visible | applicable | Keyboard-reachable tile; visual treatment omitted |
| disabled | applicable | A destination tile whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control is a destination tile to PDP; it does not commit an operation whose in-progress state it could report. Nested Add to Bag is a different control |
| error | not-applicable | A destination tile does not report a failed request on itself |
| success | not-applicable | Same role reason: reaching PDP is not an operation this tile reports as success |

### Editorial Card

- Role: Hero tiles, "Featured" story blocks
- Primitive type: not in the token set
- Background: image full-bleed with `rgba(0,0,0,0.0→0.5)` bottom gradient
- Text: `#ffffff` overlaid, condensed caps headline
- Radius: 0px (full-bleed) or 12px (carousel cards)
- Padding: 24-32px content inset
- YAML `tokens.components` does not record this control. No interactive-kind evidence is given for this surface. Kind and a state-applicability map are omitted.

### Surface Card (rounded)

- Role: Member panels, info modules, bag summary
- Primitive type: `card`
- Background: `#f7f7f7`
- Border: none
- Radius: 12px
- Padding: 24px
- Shadow: none
- Token-set type: `tokens.components.surface-card.type` `card`
- Token-set bg: `tokens.components.surface-card.bg` `#f7f7f7`
- Token-set radius: `tokens.components.surface-card.radius` `12`
- Token-set padding: `tokens.components.surface-card.padding` `24px`
- Token-set use: `Member panels, bag summary`
- `#f7f7f7` is this card's fill and `tokens.colors.grey-50`. Radius 12px is this card and `tokens.rounded.lg`. Padding 24px is this card; it is not `tokens.spacing.lg: 24` as a replacement. No interactive-kind evidence is given for this surface. Kind and a state-applicability map are omitted.

### Status Pill (Just In)

- Role: Product card eyebrow label above title
- Primitive type: not in the token set
- Background: transparent / `#ffffff`
- Text: `#d43f21` ("Just In", "Sustainable Materials" `#0a8800`)
- Border: none
- Font: 13px / 500 / Helvetica Now
- YAML `tokens.components` does not record this control. No interactive-kind evidence is given for this badge. Kind and a state-applicability map are omitted.

### Promo Pill (Filled)

- Role: "MEMBER ACCESS", "SNKRS EXCLUSIVE" tags
- Primitive type: `badge`
- Background: `#111111`
- Text: `#ffffff`
- Radius: 9999px
- Padding: 4px 12px
- Font: 12px / 700 / Helvetica Now, often UPPERCASE
- Token-set type: `tokens.components.promo-pill.type` `badge`
- Token-set bg: `tokens.components.promo-pill.bg` `#111111`
- Token-set fg: `tokens.components.promo-pill.fg` `#ffffff`
- Token-set radius: `tokens.components.promo-pill.radius` `9999`
- Token-set padding: `tokens.components.promo-pill.padding` `4px 12px`
- Token-set font: `tokens.components.promo-pill.font` `12px/700`
- Token-set use: `MEMBER ACCESS tags`
- No interactive-kind evidence is given for this badge. Kind and a state-applicability map are omitted.

### Sale Pill

- Role: Discount flag on imagery
- Primitive type: `badge`
- Background: `#d43f21`
- Text: `#ffffff`
- Radius: 4px
- Padding: 2px 8px
- Font: 12px / 700
- Token-set type: `tokens.components.sale-pill.type` `badge`
- Token-set bg: `tokens.components.sale-pill.bg` `#d43f21`
- Token-set fg: `tokens.components.sale-pill.fg` `#ffffff`
- Token-set radius: `tokens.components.sale-pill.radius` `4`
- Token-set padding: `tokens.components.sale-pill.padding` `2px 8px`
- Token-set font: `tokens.components.sale-pill.font` `12px/700`
- Token-set use: `Discount flag on imagery`
- Radius 4px is this pill and `tokens.rounded.sm`. `#d43f21` is this pill's fill and `tokens.colors.sale`; it is not `tokens.colors.error` `#e34f2b`. No interactive-kind evidence is given for this badge. Kind and a state-applicability map are omitted.

### Size Selector (Swatch)

- Role: PDP size grid — square-ish, high tap target
- Primitive type: not in the token set · Kind: interactive
- Default: white bg, 1.5px `#e5e5e5` border, radius 4px, height 44px, label 15px `#111111`, centered
- Hover: border `#111111`
- Selected: border 1.5px `#111111`, bg `#ffffff`
- Disabled (sold out): text `#cccccc`, diagonal strike, border `#e5e5e5`
- YAML `tokens.components` does not record this control. Height 44px is this swatch; source §8 also writes size swatches minimum 44px tap height. Both writings stay.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above; selected is the recorded variant |
| hover | applicable | Captured border `#111111` |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | Captured sold-out `#cccccc` with diagonal strike |
| loading | not-applicable | A size chip selects a variant; the chip itself does not enter a loading state |
| error | not-applicable | Chip meaning is selected versus sold out, not a request or validation failure on the chip. "Select a size to continue." is the form helper on Default Input |
| success | not-applicable | Chip meaning is size selection, not action-outcome confirmation |

### Color Swatch

- Role: Colorway picker on PDP
- Primitive type: not in the token set · Kind: interactive
- Circle/rounded-square 56px thumbnail, radius 8px
- Selected: 1.5px `#111111` ring with 2px offset
- YAML `tokens.components` does not record this control. 56px is this thumbnail. Radius 8px is this swatch and `tokens.rounded.md`.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above; selected is the recorded variant |
| hover | applicable | Pointer-web swatch; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A colorway whose availability can lapse; visual treatment omitted |
| loading | not-applicable | A colorway chip selects a variant; the chip itself does not enter a loading state |
| error | not-applicable | Chip meaning is selected versus available, not a request failure on the chip |
| success | not-applicable | Chip meaning is colorway selection, not action-outcome confirmation |

### Filter Chip

- Role: PLP filter row (size, color, sport)
- Primitive type: `tab` · Kind: interactive
- Background: `#ffffff`
- Text: `#111111`
- Border: 1px solid `#e5e5e5`
- Radius: 9999px
- Padding: 8px 16px
- Selected: bg `#111111`, text `#ffffff`
- Font: 15px / 400 / Helvetica Now
- Token-set type: `tokens.components.filter-chip.type` `tab`
- Token-set bg: `tokens.components.filter-chip.bg` `#ffffff`
- Token-set fg: `tokens.components.filter-chip.fg` `#111111`
- Token-set radius: `tokens.components.filter-chip.radius` `9999`
- Token-set padding: `tokens.components.filter-chip.padding` `8px 16px`
- Token-set font: `tokens.components.filter-chip.font` `15px/400`
- Token-set active: `tokens.components.filter-chip.active` `filled #111111 bg, #ffffff text`
- Token-set use: `PLP filter row`
- Padding `8px 16px` is this chip. It is not `tokens.spacing.sm: 8` or `tokens.spacing.base: 16` as a replacement.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above; selected is the recorded variant |
| hover | applicable | Pointer-web filter; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A filter can be gated; visual treatment omitted |
| loading | not-applicable | A filter control selects a facet; it commits no operation in place |
| error | not-applicable | A filter control does not report a failed request on itself |
| success | not-applicable | Same role reason: selecting a facet is not an operation this chip reports as success |

### Toast

- Role: Cart confirmation, favorite saved
- Primitive type: `toast`
- Background: `#ffffff`
- Text: `#111111`
- Border: 1px solid `#e5e5e5`
- Radius: 8px
- Padding: 16px 20px
- Shadow: `0 4px 16px rgba(0,0,0,0.12)`
- Slides from top-right; auto-dismiss
- Source §14 Success (added to bag): White toast top-right, 1px `#e5e5e5` border, `0 4px 16px rgba(0,0,0,0.12)` shadow, "Added to Bag" + mini product thumb. Auto-dismiss ~4s.
- Token-set type: `tokens.components.toast.type` `toast`
- Token-set bg: `tokens.components.toast.bg` `#ffffff`
- Token-set fg: `tokens.components.toast.fg` `#111111`
- Token-set radius: `tokens.components.toast.radius` `8`
- Token-set padding: `tokens.components.toast.padding` `16px 20px`
- Token-set use: `Cart confirmation, favorite saved`
- Shadow is `tokens.shadow.toast`. Radius 8px is this toast and `tokens.rounded.md`. The source names slide-from-top-right and auto-dismiss; it does not name a pointer or keyboard contract on the notice itself. Kind and a state-applicability map are omitted.

### Dialog

- Role: Size guide, quick add, login wall
- Primitive type: `dialog` · Kind: interactive
- Background: `#ffffff`
- Text: `#111111`
- Radius: 0px (full-screen) or 12px (centered)
- Padding: 32px
- Backdrop: `rgba(0,0,0,0.5)`
- Close: `✕` top-right, 24px, `#111111`
- Token-set type: `tokens.components.dialog.type` `dialog`
- Token-set bg: `tokens.components.dialog.bg` `#ffffff`
- Token-set fg: `tokens.components.dialog.fg` `#111111`
- Token-set radius: `tokens.components.dialog.radius` `12`
- Token-set padding: `tokens.components.dialog.padding` `32px`
- Token-set use: `Size guide, quick add, login wall`
- YAML radius is `12`. Source §4 also writes 0px (full-screen). Both writings stay. Padding 32px is this dialog; it is not `tokens.spacing.xl: 32` as a replacement. Backdrop `rgba(0,0,0,0.5)` is this dialog; Overlay Scrim also writes `rgba(0,0,0,0.5)` to `rgba(0,0,0,0.75)`. Both writings stay.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web dialog; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable dialog; visual treatment omitted |
| disabled | applicable | A dialog whose actions can be unavailable; visual treatment omitted |
| loading | applicable | Quick add and login wall commit a request; visual treatment omitted |
| error | applicable | Login wall can fail; visual treatment omitted |
| success | applicable | Quick add can complete; visual treatment omitted |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

Reading the figures below as recorded measurements of the nike.com storefront the source describes, rather than as a specification invented on top of them, keeping `tokens.spacing.base: 16` off the product-grid gutter 16px as a replacement, and keeping button height 48px off the §5 common value 48px as a replacement, are derived editorial implementation inferences from the verified surfaces; they are not Nike-authored or a separately published UI specification.

### Spacing system

- Base unit: 8px
- Common values: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px
- Section vertical rhythm: 64-96px between major editorial blocks
- Product grid gutter: 16px; card internal text gap: 8-12px

### Grid & container

- Max content width: ~1600px, centered, with edge padding 24-48px
- PLP grid: 2 columns (mobile) → 3 → 4 (desktop)
- Hero blocks: full-bleed, edge-to-edge imagery breaking the container
- Editorial: asymmetric 1:1 or 2:1 splits, left-aligned text columns

### Whitespace philosophy

- **Product breathes.** Generous margin around photography; the shoe is never crowded.
- **Edge-to-edge drama.** Heroes and campaign blocks bleed past the container to feel immersive; text modules respect the grid.
- **Left-aligned authority.** Headlines and copy hang on a left rail like print editorial — rarely centered except single CTAs.

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <600px | 2-col product grid, full-width pill CTAs, hamburger nav, sticky add-to-bag |
| Tablet | 600-960px | 3-col grid, condensed nav, side margins 24px |
| Desktop | 960-1440px | 4-col grid, full mega-nav, hero edge-bleed |
| Wide | >1440px | Max 1600px content, larger heroes, increased whitespace |

### Touch targets

- Buttons: 48px default height, 60px hero — full-width pills on mobile
- Size swatches: minimum 44px tap height
- Nav/menu items: 48px row height

### Collapsing strategy

- Mega-nav collapses to slide-in drawer on mobile
- PDP image gallery → swipeable carousel under 960px
- Sticky bottom "Add to Bag" bar appears on mobile PDP scroll
- Editorial 2-col splits stack vertically on mobile, image first

### Image behavior

- Hero/campaign images: full-bleed, art-directed crops per breakpoint
- Product images: square 1:1, white or neutral background, lazy-loaded
- Maintain aspect ratio; never letterbox the product

<!-- design-md:section content-locales -->
## 6. Content & Locales

The source describes Nike as speaking like a coach who believes in you and refuses small talk. The voice is imperative, motivational, and brief — verbs first, second person, present tense. Headlines command ("Just Do It", "Dream Crazy", "Find Your Greatness"). Product copy is confident and benefit-led, never apologetic. Sentences are short. Periods land like a finish line. Calling that register a coach who believes in you and refuses small talk, and refusing to treat the table below as a complete product-microcopy guide, are derived editorial implementation inferences from the verified surfaces; they are not Nike-authored or a separately published UI specification.

| Context | Tone |
|---|---|
| CTAs | Imperative, sentence case ("Add to Bag", "Shop All", "Become a Member") |
| Campaign headlines | UPPERCASE, aspirational, 2-5 words ("JUST DO IT", "MOVE TO ZERO") |
| Product titles | Plain, factual, model-forward ("Nike Air Max 270") |
| Success states | Affirming, brief ("Added to Bag", "You're in.") |
| Error messages | Direct, blameless, actionable ("Select a size to continue.") |
| Member / loyalty | Insider, exclusive, warm ("Members get more. Join us.") |
| Sustainability | Plainspoken, proud, no greenwash jargon ("Move to Zero — our journey toward zero carbon and zero waste.") |

**Forbidden patterns.** No hedging ("maybe", "kind of"), no corporate apology ("We apologize for the inconvenience"), no exclamation-mark spam, no jargon. Never weaken a CTA ("Click here to maybe add"). Energy without noise.

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

These decisions are unnamed values, not permissions to invent. Treating the list as unnamed values rather than as a domain inventory, and treating the omitted template curves as unnamed exact curves rather than as Nike motion tokens, are derived editorial implementation inferences from the verified surfaces; they are not Nike-authored or a separately published UI specification.

- `ease-enter` / `ease-exit` / `ease-standard` cubic-bezier curves
- `focus-visible` visual treatments (generic Focus on inputs, and info `#1463ff` "focus rings on some surfaces", are not that keyboard-focus treatment)
- live computed-style confirmation of the representative pixel values (source body: HTTP 403)
- motion animation names and transition properties beyond the named duration / easing-role / signature-motion / reduced-motion writings — promote an additional exact curve only after per-component computed capture of all five kinds; a single named duration or the kept `ease-power` writing is not that gate
