# MaiCoin / MAX Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

MaiCoin is the largest crypto-exchange group in Taiwan, as the source states it, with two first-party public surfaces. This contract covers the two brand-owned surfaces the source inspected for tokens: the consumer buy/sell site at `https://www.maicoin.com` and the MAX pro exchange at `https://max.maicoin.com`. The catalog homepage field is `https://www.maicoin.com`. Official MaiCoin Group About `https://group.maicoin.com/about` is a named source for founder and founding-timeline context; it does not supply the computed interface tokens below. Treating those two inspected URLs as this contract's token surfaces, keeping the About URL as a named narrative source that does not supply computed interface tokens, treating values as attached to the surface that established them, and keeping catalog `primary_color` `#ee5457` on the same hex as `tokens.colors.primary` without turning that key into MAX's action color, are derived editorial implementation inferences from the verified surfaces; they are not MaiCoin / MAX-authored or a separately published UI specification.

The source records a two-surface split. Consumer MaiCoin uses a clean white (`#ffffff`) canvas, near-black ink (`#262626`) rather than pure black, and a signature warm coral (`#ee5457`) reserved for the one action that matters — "立即註冊". The coral sits in a wider red-orange family (`#ce4234`, `#dd4c4a`). A positive-change green (`#05bb85`) signals price-up on the consumer side. Typography is set in the platform system stack (`-apple-system, system-ui, Segoe UI, Roboto`), optimized for dense Traditional-Chinese (zh-TW) legibility, with a giant decorative "MaiCoin" Roboto watermark at 123px / 4% opacity behind the hero. MAX Exchange swaps that warmth for a trustworthy institutional navy (`#2e4692`) — the color of the primary "註冊帳號 / 立即註冊" CTA — backed by a deeper navy (`#253158`) and a vivid accent blue (`#007aff`). MAX introduces a trading-color pair: up-green (`#49a870`) and down-red (`#ec5b5c`). MAX also brings **Iosevka** (and `Iosevka-Bold`) for prices and order-book figures. Both surfaces are deliberately **shadowless and flat**: live inspection found `box-shadow: none` across navs, hero CTAs, promo cards, and stat strips. The hex values, the two stacks, Iosevka, the 123px / 4% watermark, the 2px / 8px / 16px / 22px radius writings, and the `box-shadow: none` reports are the source's own. Readings of the consumer layer as warm, approachable, or a friendly retail-fintech temperature far from the cold blue of legacy finance; of MAX as trustworthy and institutional; of mixed radius as engineered rather than decorative; of the two-surface split as two distinct personalities; of the `#ffffff` in this paragraph as the consumer page canvas rather than as on-primary text, the buy-pill control fill, or the 404 card; of the platform stack written here as the source §1 / YAML sans writing rather than as a replacement of the §3 Helvetica writing; and of the captured consumer homepage layer as this contract's inspected surface rather than as a published token specification covering MAX, are derived editorial implementation inferences from the verified surfaces; they are not MaiCoin / MAX-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. MaiCoin was founded in **2014** by **Alex Liu** — a Taipei native and Stanford Electrical Engineering graduate who left Qualcomm to build Taiwan's first digital-asset wallet, exchange, and service platform ([MaiCoin Group — About](https://group.maicoin.com/about)). The founding premise was access: at the time there was no compliant, consumer-friendly way for ordinary Taiwanese to buy and hold cryptocurrency. MaiCoin's numbered, step-by-step consumer flow is the direct expression of that mission — turn an intimidating new asset class into a sequence anyone can complete. In **2016** the group established **AMIS**, a blockchain-technology company, and in **2017** the team launched **MAX Exchange** — positioned as the first Taiwanese exchange to offer third-party fiat custody through a bank trust, a compliance-first differentiator in a market wary of exchange risk. The two-surface brand maps onto two audiences: MaiCoin's warm coral for the retail first-timer, MAX's institutional navy for the active trader who needs an order book, depth, and monospaced figures. What the design refuses, visible across both surfaces: the dark-pattern urgency and neon hype of speculative crypto marketing, and the heavy, shadow-stacked chrome of legacy finance. What it embraces: a flat, fast, screen-native interface; one disciplined action color per surface; market colors that mean exactly one thing; and Iosevka figures that respect a trader's need for aligned, scannable numbers. The 2014 / Alex Liu / Stanford / Qualcomm / 2016 AMIS / 2017 MAX / bank-trust facts, the access premise, the numbered consumer-flow mission sentence, the MAX bank-trust differentiator, the two-audience mapping, and the source's closing refuse/embrace sentences are the source's own. Classifying that origin-to-current-service narrative as context that does not by itself supply interface tokens, and classifying the source's closing refuse-hype / embrace-flat reading as an editorial connection of observed chrome to positioning rather than as a published brand manifesto, are derived editorial implementation inferences from the verified surfaces; they are not MaiCoin / MAX-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product's primary tasks, each naming a captured consumer or MAX control or the numbered buy/sell sequence the source records, and not taking them from the source's Personas section, is a derived editorial implementation inference from the verified surfaces; it is not MaiCoin / MAX-authored or a separately published UI specification.

- Register and complete the numbered consumer buy/sell steps on `https://www.maicoin.com` ("立即註冊"; 註冊 → 裝置綁定 → 身分驗證 → 買 → 賣 → 發送接收).
- Register or buy on MAX at `https://max.maicoin.com` ("立即註冊", "註冊帳號", "立即購買").
- Use the MAX underline auth fields (placeholder 電子信箱 / 密碼).
<!-- design-md:claim-end -->

### Audience

No named individuals appear. The source labels its §13 figures as fictional archetypes informed by publicly observable user segments, not individual people, so those three archetypes are dropped rather than promoted, and no name, age, city, motivation, or affiliation classification is carried into this document or its sidecar. What the source independently records at a group level, outside that Personas section, is the two-audience mapping in its Brand Narrative: the retail first-timer on MaiCoin and the active trader on MAX. Dropping those archetypes rather than promoting them, carrying no name, age, city, motivation, or affiliation classification, and reading those two source-named groups as this product's audience, are derived editorial implementation inferences from the verified surfaces; they are not MaiCoin / MAX-authored or a separately published UI specification.

### Distinctive traits

The list restates the source's Key Characteristics. The values are recorded; classifying the list as that restatement, and the groupings and the readings inside them, are derived editorial implementation inferences from the verified surfaces; they are not MaiCoin / MAX-authored or a separately published UI specification.

- Two-surface brand: warm consumer coral (`#ee5457`) on MaiCoin, institutional navy (`#2e4692`) on MAX
- Coral reserved as the single consumer "action" color; navy the single pro "action" color
- True trading-color pair on MAX — up-green (`#49a870`), down-red (`#ec5b5c`)
- Iosevka monospace for MAX prices/order-book figures; system sans for all UI chrome
- Near-black ink (`#262626`) for text instead of pure black — warm, legible for zh-TW
- Shadowless flat depth: cool-blue surfaces (`#f2f4fb`/`#f4f5f9`) + `#eaeaea`/`#d5dbee` hairlines
- Mixed-but-restrained radius scale — 2px coral CTA, 8px navy CTA, 16px cards, 22px pill
- Decorative oversized Roboto "MaiCoin" watermark at 4% opacity behind the consumer hero

### Principles

These 5 items — numbered stems the source states in its Principles section, plus every *UI implication* below as the source's own editorial reading — are a derived editorial implementation inference from the verified surfaces; they are not MaiCoin / MAX-authored or a separately published UI specification.

1. **One action color per surface.** Coral (`#ee5457`) is "do this" on MaiCoin; navy (`#2e4692`) is "do this" on MAX. *UI implication:* never spread the action color, and never mix the two brands on one screen.
2. **Guide the first-timer, respect the trader.** The consumer flow is numbered and reassuring; MAX is terse and dense. *UI implication:* consumer copy explains each step; pro copy states the capability and shows the data.
3. **Market colors mean one thing.** Up-green (`#49a870`) and down-red (`#ec5b5c`) signal price direction only. *UI implication:* never reuse them for generic success/error chrome.
4. **Figures are typography with rules.** Prices belong in Iosevka so columns align. *UI implication:* switch to mono for any numeric/market data; keep prose in the system sans.
5. **Flat and fast.** Screen-native clarity beats decorative depth. *UI implication:* no shadows; separate with tint and hairlines; use a dark card for emphasis, not elevation.

### Application rules

The source states these eight as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not MaiCoin / MAX-authored or a separately published UI specification.

- Reserve coral (`#ee5457`) for the single consumer action (register CTA, learn-more) — keep it the one "action" color on MaiCoin
- Reserve navy (`#2e4692`) for the single pro action on MAX — its register/sign-up CTA
- Use the up-green (`#49a870`) / down-red (`#ec5b5c`) pair only for market direction on MAX
- Use Iosevka for prices and order-book figures so digits align in monospaced columns
- Use near-black ink (`#262626`) for text instead of pure black
- Separate sections with cool-blue tints (`#f2f4fb` / `#f4f5f9`) and `#eaeaea` / `#d5dbee` hairlines, not shadows
- Use the dark card (`#272727`) for emphasis on MAX promos instead of elevation
- Keep the system sans stack for all zh-TW UI text — it hints Traditional Chinese best

### Avoid

The source states these eight as its Don't list. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not MaiCoin / MAX-authored or a separately published UI specification.

- Spread coral across many consumer elements — it dilutes the single-action signal
- Mix the consumer coral and the pro navy on the same surface — each brand owns one
- Reuse the up-green / down-red pair for non-market UI — they carry market meaning
- Use drop shadows for elevation — both surfaces are flat and shadow-free
- Use pure black (`#000000`) for body text — reserve near-black `#262626`
- Set UI prices in a proportional font — figures belong in Iosevka so columns align
- Add a third saturated accent beyond coral (consumer) / navy + blue (pro)
- Apply heavy rounding to the consumer CTA — it is nearly sharp (2px) by design

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Each role below pairs a name with the value and the use the source records. Role names follow the source's own labels and token-set keys. Taking those role names from the source's own token-set keys, pairing each hex to the token-set path named beside it, keeping catalog `primary_color` `#ee5457` on the same hex as `tokens.colors.primary` without turning that key into MAX's action color, keeping `tokens.colors.navy` `#2e4692` and `tokens.colors.navy-alt` `#2e4592` as two keys, keeping `tokens.colors.canvas` and `tokens.colors.on-primary` as two keys that happen to share `#ffffff` — canvas as page / white cards, on-primary as text on coral / navy / dark fills — keeping buy-pill YAML background, 404 YAML background, CTA / badge / promo on-fill text, and nav §4 Background as component writes of that same hex rather than as extra semantic keys, keeping `#000000` as ink-pure occasional headings rather than as body text, keeping `tokens.colors.up-consumer` `#05bb85` off `tokens.colors.up-pro` `#49a870`, attaching every role to the surface the source recorded rather than relabeling a consumer value as a house palette for MAX or the reverse, and keeping sibling-only frequency-scan hexes off this token set, are derived editorial implementation inferences from the verified surfaces; they are not MaiCoin / MAX-authored or a separately published UI specification. The hex values and recorded uses are the source's own.

Consumer Primary (MaiCoin, coral)

- **MaiCoin Coral** (`#ee5457`): Primary consumer brand and CTA color. The warm coral on the "立即註冊" register button and learn-more links — the system's single consumer "action" color. Token-set path `tokens.colors.primary`. Same hex as catalog `primary_color`; it is not MAX's action color.
- **Coral Deep** (`#dd4c4a`): Slightly deeper red-coral used on banner-accent fills. Token-set path `tokens.colors.coral-deep`.
- **Coral Red** (`#ce4234`): The deeper red-orange variant in the warm accent family (learn-more text, emphasis links). Token-set path `tokens.colors.coral-red`.
- **Up Green (Consumer)** (`#05bb85`): Positive price-change / gain indicator on the consumer surface. Token-set path `tokens.colors.up-consumer`. This is not `tokens.colors.up-pro`.

Pro Primary (MAX, navy)

- **MAX Navy** (`#2e4692`): Primary pro brand and CTA background — the navy "註冊帳號 / 立即註冊" button on MAX. The single pro "action" color. Token-set path `tokens.colors.navy`.
- **Navy Alt** (`#2e4592`): Near-identical navy used as the secondary buy-button text color. Token-set path `tokens.colors.navy-alt`. This is not `tokens.colors.navy`.
- **Navy Deep** (`#253158`): Deeper navy for strong labels and dark UI text on MAX. Token-set path `tokens.colors.navy-deep`.
- **Accent Blue** (`#007aff`): Vivid blue for MAX promotional accent chips and highlights. Token-set path `tokens.colors.accent-blue`.

Market Data (MAX)

- **Up Green (Pro)** (`#49a870`): Price-up / positive-change color in the order book and tickers. Token-set path `tokens.colors.up-pro`.
- **Down Red (Pro)** (`#ec5b5c`): Price-down / negative-change color in the order book and tickers. Token-set path `tokens.colors.down-pro`.

Text Hierarchy

- **Ink** (`#262626`): Primary text, nav, strong labels (near-black, not pure black). Token-set path `tokens.colors.ink`.
- **Ink Pure** (`#000000`): Occasional maximum-contrast headings. Token-set path `tokens.colors.ink-pure`.
- **Body** (`#424242`): Secondary body copy and header text. Token-set path `tokens.colors.body`.
- **Muted** (`#4d4d4d`): Tertiary text, captions. Token-set path `tokens.colors.muted`.
- **Muted Alt** (`#4a4a4a`): Alternate muted grey (e.g. 404 action-card text). Token-set path `tokens.colors.muted-alt`.
- **Faint** (`#9d9d9d`): Lowest-emphasis labels, placeholders. Token-set path `tokens.colors.faint`.
- **Input Ink** (`#2f333a`): MAX form-input value and placeholder color. Token-set path `tokens.colors.input-ink`.

Neutral & Surface

- **Pure White** (`#ffffff`): Page background, white cards, text on coral/navy/dark. Token-set path `tokens.colors.canvas`.
- **On-Primary** (`#ffffff`): Text on coral/navy/dark fills. Token-set path `tokens.colors.on-primary`. Same hex as `tokens.colors.canvas`; it stays a second key.
- **Surface** (`#f2f4fb`): Cool blue-grey tinted surface for MAX stat strips and segmented blocks. Token-set path `tokens.colors.surface`.
- **Surface Alt** (`#f4f5f9`): Secondary cool-grey surface used on both sites. Token-set path `tokens.colors.surface-alt`.
- **Hairline** (`#eaeaea`): Thin borders, dividers, and card outlines — primary separation device. Token-set path `tokens.colors.hairline`.
- **Border Navy** (`#d5dbee`): Cool-blue tinted border on MAX containers. Token-set path `tokens.colors.border-navy`.
- **Dark Card** (`#272727`): Near-black background for MAX dark promo feature cards. Token-set path `tokens.colors.dark-card`.
- **Pill Grey** (`#434343`): Carousel control-pill background on MAX. Token-set path `tokens.colors.pill-grey`.

### Spacing

Token-set path `tokens.spacing` (unitless steps, kept as the source wrote them): `xs: 4` · `sm: 8` · `md: 12` · `base: 16` · `lg: 20` · `xl: 24` · `xxl: 48`.

The source also writes those samples as 4px, 8px, 12px, 16px, 20px, 24px, 48px, with a ~4px base unit. `tokens.spacing.xs: 4` is not the watermark 4% opacity and is not weight 400. `tokens.spacing.sm: 8` is not `tokens.rounded.sm: 8` and is not the MAX primary CTA 8px radius. `tokens.spacing.md: 12` is not `tokens.rounded.md: 12` and is not the `12px` in buy-pill padding `0px 12px`. `tokens.spacing.base: 16` is not body 16px, is not CTA 16px, is not `tokens.rounded.lg: 16`, and is not the `16px` in MAX primary padding `10px 16px`. `tokens.spacing.lg: 20` is not the 20px padding on promo or stat cards. `tokens.spacing.xl: 24` is not a type size. `tokens.spacing.xxl: 48` stays that unitless step. Keeping those unitless spacing steps on their own keys rather than rewriting them as a grid or as a complete mathematical scale, treating the px samples as observed values rather than as that scale, and keeping those writings of `4`, `8`, `12`, `16`, `20`, `24`, and `48` on their own records, are derived editorial implementation inferences from the verified surfaces; they are not MaiCoin / MAX-authored or a separately published UI specification.

### Shape

Token-set path `tokens.rounded` (unitless steps, kept on their own path): `xs: 2` · `sm: 8` · `md: 12` · `lg: 16` · `pill: 22` · `full: 9999`.

The source's named radius uses, kept on their own rows:

- Sharp (`2` / `2px`): consumer coral register CTA. Token-set key `tokens.rounded.xs`.
- Small (`8` / `8px`): MAX primary navy CTA, accent chip, price-up/down badges. Token-set key `tokens.rounded.sm`. This `8` is not `tokens.spacing.sm: 8`.
- Card (`12` / `12px`): cool-blue stat strip. Token-set key `tokens.rounded.md`. This `12` is not `tokens.spacing.md: 12`.
- Comfortable (`16` / `16px`): MAX dark promo cards. Token-set key `tokens.rounded.lg`. This `16` is not `tokens.spacing.base: 16`.
- Pill (`22` / `22px`): MAX secondary buy button. Token-set key `tokens.rounded.pill`.
- Full (`9999`): token-set key `tokens.rounded.full`.
- Hairline radius (`6px`): 404 action cards. This writing is the source's §5 / §4 geometry; it is not a YAML `tokens.rounded` key.
- Carousel pill (`20px`): MAX carousel control. This writing is YAML `tokens.components.pill-control.radius`; it is not `tokens.rounded.pill: 22`.

Keeping `2`, `8`, `12`, `16`, `22`, and `9999` as six keys, keeping `6px` and `20px` off the rounded map, keeping those component heights off the rounded map, and keeping the source §5 Pill 20–22px writing as two records (`22` buy pill / `20px` carousel) rather than collapsing that range, are derived editorial implementation inferences from the verified surfaces; they are not MaiCoin / MAX-authored or a separately published UI specification.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow | Page background, nav, hero, most surfaces |
| Tint (Level 1) | `#f2f4fb` / `#f4f5f9` background shift | Card/section separation without elevation |
| Hairline (Level 2) | `1px solid #eaeaea` or `#d5dbee` border | Card outlines, dividers |
| Dark Block (Level 3) | `#272727` solid card | Emphasis via darkness, not elevation (MAX promo) |

The canonical shadow token is `none`. Token-set path `tokens.shadow.none` (`none`). Live inspection found `box-shadow: none` across navs, hero CTAs, promo cards, and stat strips on both surfaces. When emphasis is needed the source says the system reaches for color — coral (`#ee5457`) on consumer, navy (`#2e4692`) or the dark card on MAX — never elevation. This keeps the trading UI feeling fast and screen-native, the way a market terminal should. The `none` writing, the four-level table, that color-not-elevation bound, and the market-terminal sentence are the source's own. Reading those representative `box-shadow: none` reports as the only elevation record for the observed elements, rather than as a depth scale for every MaiCoin / MAX surface, is a derived editorial implementation inference from the verified surfaces; it is not MaiCoin / MAX-authored or a separately published UI specification.

### Motion

Durations, as the source states them:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, button press, focus |
| `motion-standard` | 200ms | Card/section reveal, carousel slide, dropdown |
| `motion-slow` | 320ms | Page-level transitions, hero carousel auto-advance |

The source also names three easing tokens (`ease-enter`, `ease-exit`, `ease-standard`) and assigns cubic-bezier values with no computed-sample attribution. Those unattributed curve values are omitted here. Duration names and millisecond values stay. Signature motion, as the source states it: Motion is functional and restrained, consistent with the flat, fast aesthetic. The consumer hero carousel auto-advances at a slow cadence; promo cards on MAX fade-in from below at `motion-standard`; market data updates (ticks, order-book changes) should commit near-instantly with at most a brief color flash in the market pair — a trading surface signals steadiness, not delight, and a slow animation on a price would be misleading. No bounce or spring. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and the carousel stops auto-advancing; both surfaces remain fully functional. An exact curve may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. Naming those five evidence kinds as the promotion gate, refusing a partial confirmation — one curve read off one element, or a match against an official framework or vendor document — as satisfying that gate, keeping the three duration tokens, keeping the source's signature-motion and reduced-motion sentences, keeping the no-bounce / no-spring stance, omitting the three unattributed curves, and keeping the source promo fade-in on the `motion-standard` duration without promoting the omitted `ease-enter` from the source pair, are derived editorial implementation inferences from the verified surfaces; they are not MaiCoin / MAX-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | The official Group About page explains founder and founding timeline; it does not publish a universal current typography token. |
| Live computed surface-use | Both captured surfaces compute UI chrome on a platform system sans stack. MAX prices and order-book figures use Iosevka / Iosevka-Bold. The consumer hero watermark uses Roboto at 123px / 700 / 4% opacity. |
| Official distributed brand asset | This pass did not confirm a MaiCoin-exclusive distributed type family. |
| Declared / system stack | Sans (UI) is the platform system stack itself. It is the observed UI face, not a substitute for a missing proprietary family. YAML writes `-apple-system, system-ui, Segoe UI, Roboto`. Source §3 writes `-apple-system, "system-ui", "Segoe UI", Roboto, Helvetica`. Both writings stay. |
| Outside these captures | Typography beyond the two inspected public surfaces stays outside this contract. |

Reading those five evidence-class rows as the source's own resolution table rather than as a published MaiCoin / MAX type specimen, keeping the official-product-use row from independently establishing a UI family, keeping the official-distributed row as a negative confirmation rather than as a named exclusive family, keeping YAML and §3 stack writings as two records rather than choosing one as a replacement, keeping the declared system stack — including the §3 Helvetica writing — as observed live/stack writing rather than as a MaiCoin-authored face, and projecting typography beyond the two inspected public surfaces as Outside these captures, are derived editorial implementation inferences from the verified surfaces; they are not MaiCoin / MAX-authored or a separately published UI specification.

### Family

- **Sans (UI):** YAML `tokens.typography.family.sans` `-apple-system, system-ui, Segoe UI, Roboto`. Source §3 also writes `-apple-system, "system-ui", "Segoe UI", Roboto, Helvetica`. Both writings stay. Carries all nav, body, button, and label text on both surfaces, tuned for dense Traditional-Chinese (zh-TW) rendering.
- **Mono (numeric):** `Iosevka` (with `Iosevka-Bold`). Token-set path `tokens.typography.family.mono`. Used on MAX for prices, order-book figures, and tabular financial data.
- **Display (decorative):** `Roboto`. Token-set path `tokens.typography.family.display`. Used only for the oversized "MaiCoin" watermark behind the consumer hero.

Do not replace the observed system sans, Iosevka, or the watermark Roboto with a different claimed family, and do not present a system or fallback stack as Iosevka. Keeping YAML sans (stopping at Roboto) and §3 sans (adding Helvetica) as two writings rather than choosing one as a replacement, keeping Iosevka on numeric/market data rather than on UI chrome, and keeping Roboto as the watermark exception rather than as a UI face, are derived editorial implementation inferences from the verified surfaces; they are not MaiCoin / MAX-authored or a separately published UI specification.

### Type roles

YAML writes unitless line height `1.5` on body. Source §3 writes `1.50` for the same role and `normal` for the other six. Both writings stay. Unitless ratios stay ratios and are never converted to a replacement px (A1a). Pairing each YAML role to the token-set path named beside it, keeping YAML `use` strings verbatim in the Token-set use column, keeping the longer §3 role name beside them, keeping YAML size `14` beside §3 `14px` and YAML size `16` beside §3 `16px` and YAML size `123` beside §3 `123px`, keeping body `16` off `tokens.spacing.base: 16`, keeping watermark 4% opacity off `tokens.spacing.xs: 4`, and keeping the source §3 principles (system sans for legibility / Iosevka for figures; weight separating the two CTAs; near-black ink; decorative display as the exception) as written rather than as a published type doctrine, are derived editorial implementation inferences from the verified surfaces; they are not MaiCoin / MAX-authored or a separately published UI specification.

| Role | Font | Size | Weight | Line height | Token-set use | §3 notes |
|---|---|---:|---:|---|---|---|
| Nav Link | system sans | 14 / 14px | 400 | normal | Top nav items, system sans (交易, NFT, 集團) | Top navigation items (交易, NFT, 集團) |
| Body | system sans | 16 / 16px | 400 | 1.5 / 1.50 | Standard reading text, system sans | Standard reading text |
| CTA (Consumer) | system sans | 16 / 16px | 600 | normal | Consumer coral register CTA label | Coral register CTA label (立即註冊) |
| CTA (Pro) | system sans | 16 / 16px | 700 | normal | MAX navy register CTA label, system sans | MAX navy register CTA label |
| Input | system sans | 14 / 14px | 400 | normal | MAX form input value + placeholder, system sans | MAX form value + placeholder (電子信箱 / 密碼) |
| Numeric | Iosevka | 14 / 14px | 700 | normal | MAX price / order-book figures, Iosevka mono | MAX price / order-book figures |
| Watermark | Roboto | 123 / 123px | 700 | normal | Decorative MaiCoin watermark, Roboto, 4% opacity | Decorative "MaiCoin" mark, 4% opacity |

Token-set paths: `tokens.typography.nav` · `tokens.typography.body` · `tokens.typography.cta` · `tokens.typography.cta-pro` · `tokens.typography.input` · `tokens.typography.numeric` · `tokens.typography.watermark`.

Source §3 principles, kept as written: system sans for legibility, Iosevka for figures; weight separates the two CTAs (consumer 600, MAX 700); near-black ink, not pure black; decorative display is the exception.

### Assets

- Catalog favicon: `https://www.google.com/s2/favicons?domain=maicoin.com&sz=128`. Frontmatter records `logo.type: favicon`.
- Decorative "MaiCoin" Roboto watermark at 123px / 700 / 4% opacity behind the consumer hero.

Reading the Google s2 favicon URL as a catalog identity pointer rather than a MaiCoin-hosted brand file, and reading the watermark as a decorative exception rather than as a UI type role replacement, are derived editorial implementation inferences from the verified surfaces; they are not MaiCoin / MAX-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### How to read this section

The source state contract, preserved here while the catalog graph is not adopted:

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

The following applicability note, every interactive-kind verdict, every applicability verdict, the reason given for either, treating the consumer register CTA, MAX register CTA, and MAX buy pill as commit controls so loading / error / success stay applicable, treating the promo accent chip as a promotional destination-style chip, the nav item as a destination tab, the carousel pill as a carousel control, and the 404 action card as a destination card so loading / error / success close on those roles, treating the MAX underline field as an auth field that keeps error applicable and closes loading / success, declaring price-up and price-down badges `Kind: non-interactive`, withholding kind and a map on the dark promo card and the cool-blue stat card because the source supplies no interaction evidence for those cards (C4), keeping each YAML `use` string as a Token-set use row beside Role, keeping YAML font / padding / radius / border / height / type byte forms beside the §4 writings, keeping consumer CTA 2px off a spacing step, keeping MAX CTA 8px off `tokens.spacing.sm: 8` and off `tokens.rounded.sm: 8` as a replacement, keeping promo 16px / 20px off `tokens.spacing.base` / `lg`, keeping buy-pill 22px off carousel 20px, keeping 404 `6px` off the rounded map, keeping consumer 52px / MAX 60px / buy-pill 32px / accent 40px / carousel 40px / 404 88px heights as those controls' geometry rather than as spacing steps, keeping accent-chip 40px and carousel-pill 40px as two records, keeping badge `8px` off `tokens.spacing.sm: 8`, treating the source nav `hover/active` coral text as that nav's captured hover/active treatment rather than as `focus-visible` evidence, attaching a `Primitive type` line only when the source YAML records that type on that component, marking only the 404 row Verified live, declaring Core §4.4 applicability by control meaning rather than by capture completeness, keeping buy-pill padding `12px` off `tokens.spacing.md: 12` and MAX padding `16px` off `tokens.spacing.base: 16`, treating absence of an observation as not a `not-applicable` reason, and the refusal to treat this as a complete state-coverage claim are a derived editorial implementation inference from the verified surfaces; they are not MaiCoin / MAX-authored or a separately published UI specification. Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted where this packet holds no value for that same canonical state. Absence of an observation is not a `not-applicable` reason. Loading, error, and success follow each control's product role rather than its primitive kind. A `Primitive type` line is attached only when the source YAML records that type on that component. Only the 404 row in the table above is marked Verified live; the other rows are the source's stated treatments. This is not a complete state-coverage claim.

### Consumer Register CTA

- Role: The single consumer primary action — "立即註冊" (Register now) on MaiCoin
- Token-set use: Consumer register CTA (立即註冊) on MaiCoin
- Primitive type: `button` · Kind: interactive
- Anatomy: labelled primary button
- Background: `#ee5457`. YAML bg: `#ee5457`
- Text: `#ffffff`. YAML fg: `#ffffff`
- Radius: 2px. YAML radius: `2px`
- Height: 52px. YAML height: `52px`
- Font: 16px weight 600. YAML font: `16px / 600`
- Observed: default on `https://www.maicoin.com`
- The radius `2px` is this control's geometry and `tokens.rounded.xs`. The height `52px` is this control's geometry, not a spacing step. The font `16px` is this control's size, not `tokens.spacing.base: 16`.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured consumer register CTA |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable button; visual treatment omitted |
| disabled | applicable | A register CTA can be gated; visual treatment omitted. Source Disabled row: action color fades rather than turns grey |
| loading | applicable | "立即註冊" commits an account action; the source records loading on submit-style CTAs |
| error | applicable | Same commit role; the source records form-level error copy |
| success | applicable | Same commit role; the source records Success (registration done) |

### MAX Register CTA

- Role: MAX primary register/sign-up action ("立即註冊", "註冊帳號")
- Token-set use: MAX register CTA (立即註冊 / 註冊帳號)
- Primitive type: `button` · Kind: interactive
- Anatomy: labelled primary button
- Background: `#2e4692`. YAML bg: `#2e4692`
- Text: `#ffffff`. YAML fg: `#ffffff`
- Radius: 8px. YAML radius: `8px`
- Padding: 10px 16px. YAML padding: `10px 16px`
- Height: 60px. YAML height: `60px`
- Font: 16px weight 700. YAML font: `16px / 700`
- Observed: default on `https://max.maicoin.com`
- The radius `8px` is this control's geometry and `tokens.rounded.sm`; it is not `tokens.spacing.sm: 8`. The `16px` in the padding stays this control's padding, not `tokens.spacing.base: 16`. The height `60px` is this control's geometry, not a spacing step.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured MAX register CTA |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable button; visual treatment omitted |
| disabled | applicable | A register CTA can be gated; visual treatment omitted |
| loading | applicable | "立即註冊" / "註冊帳號" commits an account action; the source records Loading (order submit) as inline progress on the navy CTA |
| error | applicable | Same commit role; the source records Error (order rejected) in plain language |
| success | applicable | Same commit role; the source records Success (registration done) |

### MAX Buy Pill

- Role: MAX secondary buy CTA pill ("立即購買")
- Token-set use: MAX secondary buy CTA pill (立即購買)
- Primitive type: `button` · Kind: interactive
- Anatomy: labelled pill button
- Background: `#ffffff`. YAML bg: `#ffffff`
- Text: `#2e4592`. YAML fg: `#2e4592`
- Radius: 22px. YAML radius: `22px`
- Padding: 0px 12px. YAML padding: `0px 12px`
- Height: 32px. YAML height: `32px`
- Font: 16px weight 400. YAML font: `16px / 400`
- Observed: default on MAX
- The radius `22px` is this control's geometry and `tokens.rounded.pill`; it is not the carousel control `20px`. The `12px` in the padding stays this control's padding, not `tokens.spacing.md: 12`. The height `32px` is this control's geometry, not a spacing step.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured MAX buy pill |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable button; visual treatment omitted |
| disabled | applicable | A buy CTA can be gated; visual treatment omitted |
| loading | applicable | "立即購買" commits a purchase action |
| error | applicable | Same commit role; a rejected buy is an error this control can report |
| success | applicable | Same commit role; the source records Success (order filled) |

### Promo Accent Chip

- Role: MAX promotional accent action chip
- Token-set use: MAX promo accent action chip
- Primitive type: `button` · Kind: interactive
- Anatomy: labelled accent chip
- Background: `#007aff`. YAML bg: `#007aff`
- Text: `#ffffff`. YAML fg: `#ffffff`
- Radius: 8px. YAML radius: `8px`
- Height: 40px. YAML height: `40px`
- Observed: default on MAX
- The radius `8px` is this control's geometry; it is not `tokens.spacing.sm: 8`. The height `40px` is this chip's geometry; it is also the carousel-pill height, kept as two records.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured MAX promo accent chip |
| hover | applicable | Pointer-web chip; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable chip; visual treatment omitted |
| disabled | applicable | A promo chip can be gated; visual treatment omitted |
| loading | not-applicable | A promotional accent chip does not commit an operation whose in-progress state it could report on itself |
| error | not-applicable | A promotional accent chip does not report a failed request on itself |
| success | not-applicable | Reaching the promo destination is not an operation this chip reports as success |

### Dark Promo Card

- Role: MAX dark feature/promo cards ("鏈上鎖倉", "交易機器人", "收益懶人躺賺")
- Token-set use: MAX dark promo feature card (鏈上鎖倉, 交易機器人)
- Primitive type: `card`
- Background: `#272727`. YAML bg: `#272727`
- Text: `#ffffff`. YAML fg: `#ffffff`
- Radius: 16px. YAML radius: `16px`
- Padding: 20px. YAML padding: `20px`
- Observed: default on MAX
- YAML `use` names 鏈上鎖倉 and 交易機器人; source §4 also names "收益懶人躺賺". Both writings stay. The radius `16px` is this card's geometry and `tokens.rounded.lg`; it is not `tokens.spacing.base: 16`. The padding `20px` is this card's padding; it is not `tokens.spacing.lg: 20`. MAX promo cards use a uniform 20px padding. Kind and applicability map omitted — the source supplies no interaction evidence for the card (C4).

### Cool-Blue Stat Card

- Role: MAX stat-strip card on the landing surface
- Token-set use: MAX cool-blue stat strip card
- Primitive type: `card`
- Background: `#f2f4fb`. YAML bg: `#f2f4fb`
- Radius: 12px. YAML radius: `12px`
- Padding: 20px 0px. YAML padding: `20px 0px`
- Observed: default on MAX
- The radius `12px` is this card's geometry and `tokens.rounded.md`; it is not `tokens.spacing.md: 12`. The `20px` in the padding stays this card's padding, not `tokens.spacing.lg: 20`. The cool-blue stat strip uses vertical 20px / horizontal 0 padding so figures span edge-to-edge. Kind and applicability map omitted — the source supplies no interaction evidence for the card (C4).

### 404 Action Card

- Role: MaiCoin error-page action cards ("查看幣價", "回首頁", "常見問題")
- Token-set use: MaiCoin 404 action card (查看幣價, 回首頁, 常見問題)
- Primitive type: `card` · Kind: interactive
- Anatomy: labelled destination card
- Background: `#ffffff`. YAML bg: `#ffffff`
- Text: `#4a4a4a`. YAML fg: `#4a4a4a`
- Border: 1px solid `#eaeaea`. YAML border: `1px solid #eaeaea`
- Radius: 6px. YAML radius: `6px`
- Height: 88px. YAML height: `88px`
- Observed: default; source marks Error (page not found) Verified live
- The radius `6px` is this card's geometry. It is not a YAML `tokens.rounded` key. The height `88px` is this card's geometry, not a spacing step.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured 404 action card; Verified live |
| hover | applicable | Pointer-web destination card; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable destination; visual treatment omitted |
| disabled | applicable | A destination card can be gated; visual treatment omitted |
| loading | not-applicable | A 404 action card is a destination (查看幣價 / 回首頁 / 常見問題); it commits no operation in place |
| error | not-applicable | The destination, not this card, reports a later failure |
| success | not-applicable | Reaching 回首頁 or 查看幣價 is not an operation this card reports as success |

### MAX Underline Field

- Role: MAX sign-up / sign-in email and password fields
- Token-set use: MAX auth field, borderless underline style, placeholder 電子信箱 / 密碼
- Primitive type: `input` · Kind: interactive
- Anatomy: value field
- Text: `#2f333a`. YAML fg: `#2f333a`
- Font: 14px weight 400. YAML font: `14px / 400`
- Border: borderless underline style (no box border)
- Placeholder: `#2f333a` family (電子信箱, 密碼)
- Observed: default on MAX auth fields

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured MAX underline field |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable field; visual treatment omitted |
| disabled | applicable | An auth field can be gated; visual treatment omitted |
| loading | not-applicable | The field accepts 電子信箱 / 密碼; it does not commit an operation whose in-progress state it could report on itself |
| error | applicable | A form field can fail validation; the source records Error (form validation) below the underline input; visual treatment omitted |
| success | not-applicable | Completing the field is not a success result this input would report |

### Nav Link

- Role: Top horizontal nav ("交易", "收益", "NFT", "集團", "產品服務")
- Token-set use: Top nav item
- Primitive type: `tab` · Kind: interactive
- Anatomy: labelled nav item
- Background: `#ffffff`
- Text: `#262626`. YAML fg: `#262626`
- Font: 14px weight 400 system sans. YAML font: `14px / 400`
- YAML active: `coral #ee5457 text on hover/active`
- Observed: default plus captured hover/active coral text on the consumer surface
- YAML `use` is `Top nav item`; source §4 also names "交易", "收益", "NFT", "集團", "產品服務", and YAML nav type-role use names 交易, NFT, 集團. Those writings stay beside each other.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured top nav item |
| hover | applicable | Pointer-web nav item; captured treatment is coral `#ee5457` text on hover/active (consumer) |
| focus-visible | applicable | Keyboard-reachable nav item; visual treatment omitted. The captured hover/active coral text is not this row |
| disabled | applicable | A nav item can be gated; visual treatment omitted |
| loading | not-applicable | A top nav item selects a destination; it commits no operation in place |
| error | not-applicable | A nav item does not report a failed request on itself |
| success | not-applicable | Reaching the destination is not an operation this nav item reports as success |

### Price-Up Indicator

- Role: MAX price-up / positive-change pill
- Token-set use: MAX price-up / positive change indicator
- Primitive type: `badge`
- Kind: non-interactive — a market-direction label, not a commit control
- Background: `#49a870`. YAML bg: `#49a870`
- Text: `#ffffff`. YAML fg: `#ffffff`
- Radius: 8px. YAML radius: `8px`
- Observed: default on MAX
- The radius `8px` is this badge's geometry; it is not `tokens.spacing.sm: 8`. No state-applicability map: the badge itself is not an interactive control.

### Price-Down Indicator

- Role: MAX price-down / negative-change pill
- Token-set use: MAX price-down / negative change indicator
- Primitive type: `badge`
- Kind: non-interactive — a market-direction label, not a commit control
- Background: `#ec5b5c`. YAML bg: `#ec5b5c`
- Text: `#ffffff`. YAML fg: `#ffffff`
- Radius: 8px. YAML radius: `8px`
- Observed: default on MAX
- No state-applicability map: the badge itself is not an interactive control.

### Carousel Control Pill

- Role: MAX promo-carousel control
- Token-set use: MAX carousel control pill
- Primitive type: `badge` · Kind: interactive
- Anatomy: carousel control
- Background: `#434343`. YAML bg: `#434343`
- Radius: 20px. YAML radius: `20px`
- Height: 40px. YAML height: `40px`
- Observed: default on MAX
- The radius `20px` is this control's geometry. It is not `tokens.rounded.pill: 22`. The height `40px` is this control's geometry; it is also the accent-chip height, kept as two records.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured MAX carousel control pill |
| hover | applicable | Pointer-web carousel control; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A carousel control can be gated; visual treatment omitted |
| loading | not-applicable | A carousel control advances a promo row; it commits no operation in place |
| error | not-applicable | A carousel control does not report a failed request on itself |
| success | not-applicable | Advancing the carousel is not an operation this control reports as success |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

Consumer: centered single-column hero with a banner/carousel, a step-by-step "how to buy" row (註冊 → 裝置綁定 → 身分驗證 → 買 → 賣 → 發送接收), and full-width feature bands. MAX: wide ~1200px container; landing alternates white sections with cool-blue (`#f2f4fb`) stat strips and dark promo-card rows. Cards group related products; the dark `#272727` promo cards sit in a horizontal row beneath the MAX hero.

Notable, as the source states it: MAX promo cards use a uniform 20px padding; the cool-blue stat strip uses vertical 20px / horizontal 0 padding so figures span edge-to-edge.

Whitespace, as the source states it: **Flat segmentation** — sections separate by background tint (`#f2f4fb` / `#f4f5f9` vs `#ffffff`) and `#eaeaea` / `#d5dbee` hairlines, never by shadow. **One loud action per surface** — the coral (consumer) and navy (pro) CTAs are visually isolated so the next step is unambiguous. **Dense data, calm chrome** — where MAX shows market figures it packs them tightly in Iosevka columns, but the surrounding chrome stays airy.

The source's Responsive Behavior table, kept as written:

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column; hero carousel and step row stack; MAX promo cards become a vertical stack |
| Tablet | 640–1024px | Moderate padding; 2-up feature/promo cards |
| Desktop | 1024–1366px | Full ~1200px MAX container; multi-column promo + stat strips |

Touch targets, as the source states them: consumer coral CTA at 52px height; MAX primary navy CTA at 60px height; secondary buy pill at 32px; nav links spaced for touch within the header.

Collapsing strategy, as the source states it: consumer hero carousel swipeable on mobile, step row wraps; MAX promo-card row horizontal on desktop → vertical stack on mobile; cool-blue stat strip multi-column → stacked; MAX market data tables/order book scroll horizontally on narrow viewports while Iosevka columns stay aligned.

Image behavior, as the source states it: consumer banners are image-driven and carry no shadow at any size; cards maintain their radius (16px promo, 12px stat) across breakpoints.

Reading the 640px / 1024px / 1366px / ~1200px figures under the source's own Responsive Behavior table rather than as a newly measured cross-viewport specification, reading `640–1024px` / `1024–1366px` as that table's own spellings rather than as a `1024px` token, reading those width samples as that table rather than as a complete layout scale, reading the desktop figures as not a mobile-only contract, reading the whitespace-philosophy labels and the collapsing / touch / image records as that same source table rather than as a newly measured spec, reading home-versus-MAX density as a recorded two-surface distinction rather than as a universal card treatment, keeping 52px / 60px / 32px on the controls that established them, and keeping the 16px promo / 12px stat radii across breakpoints as those cards' radii rather than as a breakpoint scale, are derived editorial implementation inferences from the verified surfaces; they are not MaiCoin / MAX-authored or a separately published UI specification.

<!-- design-md:section content-locales -->
## 6. Content & Locales

MaiCoin / MAX speaks in **plain, trustworthy, step-guided Traditional Chinese** — a regulated financial platform that walks a first-time buyer through crypto without hype, and gives a pro trader terse, precise market language. The consumer surface is instructional and numbered ("步驟一 註冊 MaiCoin", "步驟四 買虛擬貨幣"), framing crypto as a sequence of safe, completable steps. MAX's voice is denser and more direct — feature names like "鏈上鎖倉" (on-chain locking) and "交易機器人" (trading bot) state the capability and nothing more. Across both, the register CTA is the plainest possible imperative: "立即註冊" (Register now). Characterizing that reading as a plain, trustworthy, step-guided implementation context rather than as a separately published copy manual, requiring the quoted strings below byte-exact, treating English beside a Traditional Chinese line as a reading aid rather than a replacement, and treating Traditional Chinese (zh-TW) as this capture's locale rather than as a published locale matrix, is a derived editorial implementation inference from the verified surfaces; it is not MaiCoin / MAX-authored or a separately published UI specification.

| Context | Tone |
|---|---|
| Consumer onboarding | Numbered, reassuring. "步驟一 註冊 MaiCoin" — crypto as completable steps. |
| Consumer CTAs | Direct, low-pressure. "立即註冊", "了解更多". |
| MAX feature labels | Terse, capability-first. "鏈上鎖倉", "交易機器人", "24 小時自動交易". |
| MAX CTAs | Plain imperatives. "立即註冊", "立即購買", "註冊帳號". |
| Trust / compliance | Concrete and operational. Service hours and phone support stated plainly ("電話客服：(02) 2722-1314"). |

Voice samples (verbatim from live surfaces):

- "立即註冊" — register CTA, both surfaces (plainest imperative).
- "步驟四 買虛擬貨幣" — consumer onboarding step label (guided sequence).
- "MaiCoin 台灣數位資產交易平台 - 比特幣，以太幣，萊特幣" — homepage title (positioning: Taiwan's digital-asset platform).

Forbidden register, as the source states it: get-rich-quick / moonshot hype, fear-of-missing-out urgency, undefined trading jargon left unexplained on the consumer surface, exclamation-heavy marketing. A regulated TW exchange signals steadiness.

Reproduce those quoted strings byte-exact rather than translating or re-casing them. Supported locale in this capture: Traditional Chinese (zh-TW). English beside a quoted line is a reading aid, not a replacement.

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

These decisions are unnamed values, not permissions to invent. The list names only fields the source itself left unnamed or that this migration omitted at the smallest value boundary. Reading the list as a catalog of those unnamed values rather than as coverage of domains the source never named is a derived editorial implementation inference from the verified surfaces; it is not MaiCoin / MAX-authored or a separately published UI specification.

- unattributed easing-curve values on `ease-enter`, `ease-exit`, and `ease-standard` — promote a motion value for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed
- hover visual treatments other than the captured consumer nav coral `#ee5457` text on hover/active
- button-press visual treatment
- getdesign.md / styles.refero.design records (the source names both lookups as NO ENTRY / no genuine MaiCoin or MAX entry; refero returned unrelated featured styles)
