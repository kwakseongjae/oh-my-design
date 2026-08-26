# Fugle Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Fugle (富果, glossed in the reviewed material as "rich harvest") is a Taiwan stock research and trading platform. The reviewed material records that it was founded in Taiwan by Fortuna Intelligence, a team that describes itself as being simultaneously developers and practicing investors who watch the markets daily, and that it launched as a web trading app paired with a market data API.

This contract covers the first-party artifacts the record inspected on 2026-06-03: the `www.fugle.tw` site with its inline styles, meta tags and PWA manifest; the desktop web trading platform's stylesheet bundles; the `developer.fugle.tw` documentation portal stylesheet; and the Taiwan App Store listing for the Fugle app, id `1542310263`.

Those four are separate evidence domains. The record lists them together as its sources without attaching each individual value to one of them, so every value below carries the role name and CSS custom-property name the record gives it and none is re-attributed to a domain the record does not name for it. The App Store listing is where the record takes its published Traditional Chinese copy. No value here describes a logged-in account surface. The record's machine-readable value set is dated 2026-06-09 and was drawn from the record's own prose rather than from a separate capture, so the prose wording each value came from is preserved beside it below.

The characterization of the interface that follows is a derived editorial implementation inference from the reviewed material; it is not Fugle-authored or a separately published UI specification. The light canvas — `#f5f5f5` for secondary surfaces and `#ffffff` for foreground containers — is read there as keeping dense Taiwan equity data scannable, with the signature amber `#f4af1c` appearing sparingly on loading indicators, live-chat buttons, version badges and chart reference lines. The dark theme is read as inverting that arrangement onto a near-black `#131313` base with `#323232` surface layers so that red and green trading signals carry strong luminance contrast, and both themes are read as sharing one structural rhythm — compact rows, 4 px and 8 px radii, and tight 12–14 px body type — appropriate to active trading.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=5 lang=en -->
### Primary tasks

- Scan Taiwan equity data in the watchlist panel's stock rows on the desktop web trading platform.
- Add a stock to the watchlist, which the empty watchlist prompts with its single amber `新增自選股` action.
- Enter a query or a trade value in the search / trade input.
- Submit an order and read the in-panel confirmation the record documents for a submitted order.
- Reach real-time Taiwan stock data through the developer portal's REST and WebSocket APIs.
<!-- design-md:claim-end -->

### Audience

No individual persona is promoted. The reviewed material carries four archetypes and marks every one of them illustrative and not based on published Fugle user research; no name, age band, occupation, habit or expectation from them is carried forward, and no demographic or behavioral finding is asserted here.

The stakeholder groups that remain are the ones Fugle's own published material names: serious investors, whom the mission line `認真的投資人值得更好的工具` names, and developers, for whom the record says the developer portal made real-time Taiwan stock data reachable through REST and WebSocket APIs. The record adds that Fugle partners with Fubon, Taishin and E.Sun securities to offer actual order execution.

### Distinctive traits

These 5 items are a derived editorial implementation inference from the reviewed material; they are not Fugle-authored or a separately published UI specification. The measured parts inside them are the color values, the radii and the type sizes and weights, each recorded in its own section below.

- **One amber, used as signal.** `#f4af1c` is the single brand accent, and the record reserves it for loading, primary actions and notification moments rather than for fills or washes.
- **Taiwan market convention as a color rule.** Red `#f3746d` marks a rising price and green `#6c9c46` marks a falling one, the reverse of the Western default.
- **Two production themes.** A light `#ffffff` / `#f5f5f5` surface pair and a near-black `#131313` base are both treated as first-class rather than one being an afterthought.
- **Density as a value.** 14 px / 400 data rows, 12 px labels, a 55px watchlist row and a 32px input hold the dense multi-panel grid together.
- **A shallow, layered depth scale.** Resting cards sit on a two-layer `rgba(0,0,0,.08)` / `rgba(0,0,0,.1)` shadow rather than a dramatic drop shadow, and the dark theme swaps to white-alpha variants.

### Principles

These 5 items are a derived editorial implementation inference from the reviewed material; they are not Fugle-authored or a separately published UI specification. Each carries the UI implication the reviewed material states beside it.

1. **Data clarity over data density.** Every number on screen should earn its place. When a display becomes crowded, the answer is smarter information architecture — heatmaps, visual cards — not smaller type. *UI implication:* use whitespace and visual hierarchy in card layouts rather than cramming more data into fewer pixels.
2. **Investor perspective, not brokerage perspective.** The interface is organized around how an investor thinks (by thesis, sector, comparison) not how a brokerage processes orders. *UI implication:* watchlists, custom research cards, and side-by-side comparisons are first-class features; order ticket is secondary until the user is ready to transact.
3. **Amber signals action.** The brand's single accent color is reserved for interactive moments — loading, primary buttons, live notifications. Overuse dilutes the signal. *UI implication:* no decorative amber, no amber text, no amber borders; only amber fills on actionable elements.
4. **Both modes are production-quality.** Light mode for daytime research, dark mode for active trading sessions — neither is an afterthought. *UI implication:* every component must be spec'd for both themes with equal care; dark mode uses near-black surfaces, not grey.
5. **Serious tools should still feel fast.** Transitions are tight (0.2 s) and purposeful. Animation is reserved for loading states and layout expansions, not decoration. *UI implication:* use `cubic-bezier(.4,.6,.2,1)` easing on state changes; avoid entrance animations on data rows.

### Recorded application rules

These 6 rules are a derived editorial implementation inference from the reviewed material; they are not Fugle-authored or a separately published UI specification. The values inside them are recorded values and are stated again in their own sections.

- Use `#f4af1c` amber as the single primary CTA color across light and dark modes.
- Show red (`#f3746d`) for rising prices and green (`#6c9c46`) for falling prices — follow Taiwan Stock Exchange convention, opposite of Western norms.
- Keep card surfaces white (`#ffffff`) in light mode and dark (`#131313`) in dark mode; always separate with subtle border `#eaeaea` rather than heavy shadows.
- Use Lato for Latin numerals in data-dense contexts; pair with Noto Sans TC for Chinese labels.
- Apply `border-radius: 4px` uniformly to buttons, inputs, and cards; reserve `8px` for highlighted info boxes.
- Limit the primary amber to interactive hotspots — loading states, primary buttons, notification badges — so it retains signal value.

### Avoid

These 6 boundary rules are read off the reviewed material and are a derived editorial implementation inference from it; they are not Fugle-authored or a separately published UI specification. The evidence-class facts they rest on — the recorded colors, the recorded shadow layers, the recorded type scale — are stated as facts in their own sections.

- Don't use amber as a neutral fill or background wash — it should always signal action or system state.
- Don't swap the red/green convention to Western defaults; Fugle's users rely on red = up, green = down.
- Don't use heavy drop shadows on resting states; the light `rgba(0,0,0,.08)` layered shadow is intentional.
- Don't exceed 16 px body font in data rows — density is a core UX value.
- Don't add decorative illustration or gradient washes to the trading canvas; the chart data is the visual.
- Don't use the dark theme in onboarding or marketing contexts; it's designed for active-trading sessions.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

The role names, values, uses and custom-property attributions below are the record's own, carried in its wording.

- **Brand Amber:** `#f4af1c` — primary brand color; loading spinners, live-chat button, version badges, chart line accent, primary CTA background
- **Amber Dark:** `#e49b00` — hover state for primary buttons (`--p60`), icon fills on emphasis
- **Amber Tint:** `#fef4cf` — soft background for amber-highlighted content areas (`--p20`)
- **Secondary Blue:** `#4c85a0` — secondary interactive elements, link text default (`--s`, `--color-neutral-link-50`)
- **Secondary Blue Dark:** `#36708c` — secondary blue hover (`--s60`)
- **Surface White:** `#ffffff` — card backgrounds, modal surfaces, `--color-neutral-00-white`
- **Background Secondary:** `#f5f5f5` — page backgrounds, hover fills (`--color-neutral-04`)
- **Border Default:** `#eaeaea` — dividers, default strokes (`--color-neutral-08`)
- **Border Heavy:** `#dfdfdf` — emphasized borders (`--color-neutral-13`)
- **Secondary Text:** `#8b8a8a` — muted labels, helper text (`--color-neutral-46`)
- **Body Text:** `#323232` — primary foreground text (`--color-neutral-80`)
- **Dark Surface:** `#131313` — dark-mode primary background (`--color-neutral-93`)
- **Rise (Light):** `#f3746d` — stock price rise in light theme (TW convention: red = up)
- **Fall (Light):** `#6c9c46` — stock price fall in light theme (TW convention: green = down)
- **Error:** `#d12a2a` — system errors, form validation (`--color-red-600`)

The primary is additionally declared by the custom property `--p` and by the developer portal's `--ifm-color-primary`, both of which the record states define `#f4af1c`.

The rise and fall roles are named for the light theme only. The record describes red and green trading signals in the dark theme as well but states no dark-theme value for either, so none appears here.

### Evidence-domain boundary

The values above and below were recorded on 2026-06-03 from the site HTML and inline styles, the desktop platform stylesheet bundles, the PWA manifest, the developer portal stylesheet and the Taiwan App Store listing. The record's machine-readable value set is dated 2026-06-09 and was drawn from the record's own prose rather than from an independent capture, so the prose wording each value came from is preserved beside it.

Two pairs of color values in the record disagree with each other rather than resolving, and all four values are carried as they stand. They are set out in Governance under *Recorded conflicts*.

### Spacing

The record states its spacing scale as unitless numbers, and it is kept that way here rather than being given a unit the record does not state.

| Token | Value |
|---|---:|
| `xs` | 5 |
| `sm` | 8 |
| `base` | 16 |
| `lg` | 20 |
| `xl` | 32 |
| `section` | 50 |

Padding and height measurements that the record does state with units sit on their components in Components & States and on the page frame in Layout & Platforms.

### Shape

| Token | Value |
|---|---:|
| `sm` | 4px |
| `md` | 4px |
| `lg` | 8px |
| `full` | 9999 |

`4px` is the corner recorded on the primary button, the search / trade input, the trade box card and the modal dialog container; `8px` is recorded on the info card. The watchlist stock row is recorded at `0px`. The `full` entry is stated as a bare `9999` and the record attaches no component to it.

### Elevation

Two readings the record attaches to its shadow scale — that the layering signals interactive hierarchy without dramatic depth, and that the dark-mode white-alpha variants create an inverse glow effect — are a derived editorial implementation inference from the reviewed material; they are not Fugle-authored or a separately published elevation specification. The five values themselves, and the fact that the dark variants are white-alpha, are recorded.

- **Resting card:** `box-shadow: 0 2px 2px 0 rgba(0,0,0,.08), 0 2px 7px 0 rgba(0,0,0,.1)`
- **Dropdown / popover:** `box-shadow: 0 0 24px 0 rgba(0,0,0,.08)`
- **Modal / elevated panel:** `box-shadow: 0 0 17px 0 rgba(0,0,0,.14), 0 8px 9px 0 rgba(0,0,0,.12)`
- **Focus / active ring:** `box-shadow: 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 3px rgba(0,0,0,.12), 0 4px 15px 0 rgba(0,0,0,.2)`
- **Side panel frame:** `box-shadow: 0 4px 8px -4px var(--color-component-web-frame-shadow-default), 0 8px 16px -4px var(--color-component-web-frame-shadow-default)` — `rgba(0,0,0,0.08)` in light, `rgba(255,255,255,0.08)` in dark

Dark mode shadows use white-alpha variants. There is no `z-index`-heavy stacking unless modals are active.

The **Focus / active ring** entry is recorded as an elevation value under that name. The record does not attach it to a named control and does not use the term `focus-visible` anywhere, so it is not carried into any component's `focus-visible` row below.

### Motion

**Duration scale:**

- Micro (icon state): 0.1 s
- Fast (hover, focus): 0.2 s
- Standard (panel expand, input transitions): 0.3 s
- Moderate (fade, scroll animation): 0.425 s
- Slow (panel slide, complex layout): 0.6–0.65 s
- Extra-slow (chart loading dot): 0.6 s loop, 9 s total for secondary spinners

**Primary easing:** `cubic-bezier(.4,.6,.2,1)` — used on layout transitions, header animations, and most interactive state changes.

**Secondary easing:** `cubic-bezier(0,1,.5,1)` — used for panel reveal and collapse.

**Loading animation:** `cubic-bezier(0,1,1,0)` — the bouncing-dot easing, carried by the `lds-ellipsis` animation on the loading dots.

The readings the reviewed material attaches to those three curves — that the first of them is Fugle's signature curve; a sharp initial acceleration at the `.6` control point with a gentle deceleration giving a confident, purposeful feel; a slow start and fast exit creating a "snap open" character; an exaggerated overshoot as the brand's only playful motion moment — are a derived editorial implementation inference from the reviewed material and are not Fugle-authored or a separately published motion specification. The curve values themselves are recorded values.

**Rules:**

- All data-row hover transitions use `0.2s` or less; never animate data values themselves.
- Layout changes (watchlist open/close, trading panel) use the `--layoutDuration` CSS variable with the primary cubic-bezier curve.
- No entrance animations on stock rows or chart data; they appear instantly.
- Opacity fades use 0.425 s for modals and overlays.

Any motion value beyond the ones recorded above — including reduced-motion behavior, which is not among them — is promoted to a Fugle motion token only after a per-component computed observation of the transition properties, the animation name, the duration, the easing, and the reduced-motion behavior. A single named curve or duration is not that gate.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Recorded family, main platform | **Lato** is recorded as the Latin character family across the main web trading platform, delivered via Google Fonts. |
| Recorded family, documentation portal | **Noto Sans TC** and **Microsoft JhengHei** are recorded on the developer documentation portal for Traditional Chinese text. |
| Icon face | The **Material Icons** font handles iconography throughout. |
| Variable faces | No custom variable fonts detected. |
| License | The record names Google Fonts as Lato's delivery channel and states no license for any of the four faces. None is stated here. |

### Family

- **Current UI family:** `Lato`, recorded as the Latin character family across the main web trading platform.
- The record's family block names `Lato` in both the sans and the mono slot; both entries are carried as recorded and neither is replaced by a substitute monospace face.
- `Noto Sans TC` and `Microsoft JhengHei` are recorded on the documentation portal and stay attached to it. Do not render a system fallback as though it were any of these four faces.

### Type roles

| Role | Font | Size | Weight | Line height | Use |
|---|---|---:|---:|---:|---|
| Data highlight | Lato | 24 | 700 | 1.4 | Data highlight values |
| Heading | Lato | 20 | 700 | 1.4 | Dialog / section headings |
| Modal | Lato | 16 | 400 | 1.5 | Modal body, form inputs |
| Body | Lato | 14 | 400 | 1.4 | Dense data rows |
| Label | Lato | 12 | 400 | 1.4 | Secondary labels, timestamps |

Line heights are unitless ratios in the record and are kept as ratios. The record's prose states the same scale in px and adds one range the table does not: body text at **14 px / normal** weight for dense data rows, **12 px** for secondary labels and timestamps, **16 px** for modal body copy and form inputs, section headings at **20 px / 700** in dialogs, and data highlight values reaching **18–24 px**. Line heights are described there as approximately 1.4–1.5× for multi-line text, and the weight vocabulary as 400 for body and 700 for emphasis and headings. Where the highlight role's single 24 and the prose range 18–24 px differ, both are carried.

### Icons

The record names the Material Icons font as handling iconography throughout. No icon token beyond the face name is promoted.

### Imagery and assets

- Logo entry: type `favicon`, slug `https://www.fugle.tw/images/favicon.ico`.
- The record establishes no illustration or gradient treatment to apply, and its own boundary rule keeps decorative illustration and gradient washes off the trading canvas. The chart data is the visual.

<!-- design-md:section components-states -->
## 4. Components & States

### Record boundary

The record's component evidence is six declared components plus the named variants below, each carrying the default values the record states for it, and a separate state record covering the surfaces those components sit in. It carries a hover value for two of them, a disabled treatment stated for buttons, and a form-validation error treatment stated for input fields.

A declared interactive component closes Core §4.4 applicability by control meaning, not by evidence completeness. `default` and `focus-visible` apply. Where a treatment is unresolved the treatment is omitted and the applicability still stands; absence of a treatment is never a `not-applicable` reason here. Where a canonical state carries no meaning for a control's role, it is marked `not-applicable` with that semantic reason. State coverage is not complete here.

The record uses the term `focus-visible` nowhere. The **Focus / active ring** shadow it records is an elevation value under that name with no named control attached, so no `focus-visible` row below carries a treatment.

Three of the six components are recorded as surfaces — a trade box card, an info card and a modal dialog container — with fill, corner and padding values only. The record establishes no control role for any of them, so no kind and no state-applicability map is declared for those three.

### Surface states

The record states seven states, most of them at the panel, card or field level rather than on one named component; the last is stated for buttons. They are carried here as recorded.

- **Empty — Watchlist:** Watchlist panel shows a placeholder prompt to add a stock ticker; no skeleton rows; single amber CTA button `新增自選股`
- **Loading — Data fetch:** Three amber `#f4af1c` bouncing dots (border-radius 50%, 11 px, `lds-ellipsis` animation at 0.6 s cubic-bezier(0,1,1,0)); used both on initial page load and in-panel data refresh
- **Error — No data / API timeout:** Inline message inside the affected card or panel; muted text `#8b8a8a`; no modal interruption; retry link styled as secondary text link
- **Error — Form validation:** Input border switches to `#d12a2a` (`--color-red-600`); error message appears below field at 12 px muted red
- **Success — Order submitted:** In-panel confirmation message with a green `#6c9c46` checkmark icon; auto-dismisses after 3 s without blocking interaction
- **Skeleton — Chart/card loading:** Placeholder shimmer animation (`placeHolderShimmer` keyframe, 500 ms interval defined in `loadingDelay`); uses `#eaeaea` animated gradient across content areas
- **Disabled — Button:** `background-color rgba(0,0,0,.12)`, `color rgba(0,0,0,.26)`, `box-shadow none`, `cursor not-allowed`; no amber used on disabled state

### Primary Button

- Role: the record's primary call to action, exemplified by the amber CTA labelled `開始交易`
- Kind: interactive
- Type: button
- Background: `#f4af1c`
- Text: `#ffffff`
- Border: none
- Radius: `4px`
- Font: `14px / 700`
- Use: `Amber CTA; hover #e49b00`
- Hover variant — **Amber CTA Hover**: Background `#e49b00`, Text `#ffffff`, Radius `4px`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded fill, text, corner and type |
| hover | applicable | Recorded: background moves to `#e49b00` |
| focus-visible | applicable | Keyboard-focusable control; treatment unresolved |
| disabled | applicable | Recorded for buttons in the state record above |
| loading | applicable | The record's primary action control, and the record documents a submitted-order outcome for this platform; an action committed here can be pending. Treatment on the control unresolved — the record places the pending indicator in the panel |
| error | applicable | An action it commits can fail. The treatment on the control is unresolved — the record places the failure message inline in the affected card, panel or field |
| success | applicable | An action it commits can confirm. The treatment on the control is unresolved — the record places the confirmation in the panel |

### Search / Trade Input

- Role: search and trade entry field
- Kind: interactive
- Type: input
- Background: `#eaeaea`
- Border: none
- Radius: `4px`
- Height: `32px`
- Padding: `0 5px 0 5px`
- Font: `16px / 400`
- Use: `Search / trade input, 32px height`
- Labelled variant — **Input Group (with label)**: Border `1px solid #eaeaea`, Radius `4px`, Height `32px`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded fill, corner, height, padding and type |
| hover | applicable | Pointer-web field; treatment unresolved |
| focus-visible | applicable | Keyboard-focusable field; treatment unresolved |
| disabled | applicable | A form field can be made unavailable; treatment unresolved — the disabled treatment in the state record is stated for buttons |
| loading | applicable | The field submits a search the record documents as a data fetch, so a pending state is meaningful for it; treatment on the field unresolved |
| error | applicable | Recorded: border switches to `#d12a2a`, with a 12 px muted red message below the field |
| success | applicable | A validated field can confirm; treatment unresolved |

### Watchlist Stock Row

- Role: stock row in the watchlist panel
- Kind: interactive
- Type: listItem
- Background: `#ffffff`
- Border: `1px solid #eaeaea`
- Radius: `0px`
- Height: `55px`
- Font: `14px / 400`
- Use: `Watchlist row, 55px height, 1px #eaeaea border; hover rgba(0,0,0,0.04)`
- Hover variant — **Hovered Stock Row**: Background `rgba(0,0,0,0.04)`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded fill, border, corner, height and type |
| hover | applicable | Recorded: background moves to `rgba(0,0,0,0.04)` |
| focus-visible | applicable | Keyboard-focusable row; treatment unresolved |
| disabled | applicable | A selectable row can be made unavailable; treatment unresolved |
| loading | applicable | The record names skeleton rows as the watchlist's pending representation, so a pending state is meaningful for this row; the row-level treatment is unresolved — the recorded shimmer is stated for chart and card loading |
| error | not-applicable | The row is a selection target for one quoted stock and commits no operation in place; the record's data-failure outcome resolves in the card or panel that owns the fetch |
| success | not-applicable | Selecting a row is not an action-outcome confirmation; nothing commits on the row that could confirm |

### Trade Box Card

- Role: surface trade box card, the record's example being `fugle-trade-box`
- Type: card
- Background: `#ffffff`
- Border: none
- Radius: `4px`
- Padding: `20px 0`
- Use: `Surface trade box card`

The record carries this component's surface values only and establishes no control role for it, so no kind and no state-applicability map is declared.

### Info Card

- Role: highlighted info box, the record's example being `watchlist-stock__box`
- Type: card
- Background: `#eaeaea`
- Radius: `8px`
- Use: `Highlighted info box`

The record carries this component's surface values only and establishes no control role for it, so no kind and no state-applicability map is declared.

### Modal Dialog Container

- Role: modal dialog container
- Type: dialog
- Background: `#ffffff`
- Radius: `4px`
- Padding: `16px`
- Font: `16px / 400`
- Use: `Modal dialog container`

The record carries this component's surface values only and establishes no control role for it, so no kind and no state-applicability map is declared.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The web trading platform is a dense multi-panel grid.

- **Header:** fixed at **50 px** height.
- **Watchlist panel:** a left sidebar whose width is configurable through `--watchListWidth`, sitting beside a scrollable main canvas. It collapses on narrow viewports.
- **Trading panel:** width configurable through `--tradingWidth`, expanding from the right edge. It is hidden by default and slides in over the canvas on demand.
- **Main content container:** caps at **1508 px** max-width for standard market views; trading views use `max-width: initial` for full-bleed chart display.
- **Breakpoints:** Bootstrap-compatible — 576 px (sm), 768 px (md), 1280 px (lg), 1440 px / 1680 px (xl variants for watchlist density).
- **Card grids:** CSS grid with responsive `repeat(N, 1fr)` columns that scale from 2 up to 5 columns depending on viewport. Stated again by breakpoint: 1 column below 576 px, 2 columns at md, and 3–5 at xl depending on the feature area.

The record states that the platform targets desktop-first at a minimum **1024 px** canvas and degrades gracefully to tablet.

The record states that mobile is covered by the native iOS and Android Fugle app, id `1542310263`, that the app shares the brand's color and typography tokens, and that it uses a card-based vertical scroll layout optimized for thumb navigation. The only first-party iOS artifact in the record is the Taiwan App Store listing, so the token-sharing statement is a derived editorial implementation inference from the reviewed material; it is not Fugle-authored or a separately published platform specification, and no measured app value appears here.

<!-- design-md:section content-locales -->
## 6. Content & Locales

### Voice reading

The three voice adjectives and the four Do/Don't rows below are a derived editorial implementation inference from the reviewed material; they are not Fugle-authored or a separately published voice specification. The reviewed material presents them as its own voice guidance.

**Voice adjectives:** precise, empowering, and peer-to-peer — a fellow investor who happens to have built better tools, speaking directly to another serious investor.

| Dimension | Do | Don't |
|---|---|---|
| Register | Conversational but expert; uses financial terminology naturally | Dumbed-down language or over-explaining basics |
| Stance | Equal peer — "we research too" | Corporate authority — "our platform provides" |
| Framing | Research space, decision clarity, serious purpose | FOMO urgency, get-rich language, hype |
| Sentence length | Short to medium; punchy declaratives | Long compound clauses |

### Brand-published lines

Recorded as Fugle's own:

- `認真的投資人值得更好的工具` — the belief the record says Fugle frames its mission around, glossed there as: serious investors deserve better tools.
- `開始交易` — the label on the amber primary call to action.
- `新增自選股` — the single amber action in the empty watchlist.
- `富果` — the brand's Chinese name, glossed in the record as "rich harvest".

Keep each byte-exact and in Traditional Chinese; the English beside them is a gloss and never a replacement.

### Illustrative samples

Three further lines carry the reviewed material's own illustrative marker, which marks them as samples modelled on App Store copy tone rather than as lines Fugle published. They are kept byte-exact under that marker rather than dropped. The English beside each is the reviewed material's own gloss.

- 告別密密麻麻數字的傳統看盤軟體。 *(illustrative; no claim of current Fugle copy)* — glossed there as a crisp one-liner that rejects the status quo without drama.
- 認真的投資人，值得更好的工具。 *(illustrative; no claim of current Fugle copy)* — glossed there as the core brand promise stated as self-evident truth, not a sales claim.
- 把時間花在決策，而非整理資料。 *(illustrative; no claim of current Fugle copy)* — glossed there as framing value through the user's time, not the product's features.

The second line is the mission line above with a comma and a full stop added. The material marks it illustrative, so the punctuated form is not presented as published copy.

### Recorded narrative

The reviewed material records that Fugle was founded in Taiwan by Fortuna Intelligence; that the team describes itself as simultaneously developers and practicing investors who watch the markets daily; that the platform launched as a web trading app paired with a market data API, positioning itself at the intersection of fintech and developer tooling; that the developer portal at `developer.fugle.tw` made real-time Taiwan stock data reachable through REST and WebSocket APIs; and that Fugle partners with Fubon, Taishin and E.Sun securities to offer actual order execution. It records the current mission as `認真的投資人值得更好的工具`.

The readings the material attaches to that history — that the animating frustration was the poor quality of existing retail trading interfaces, dense and noisy and built around brokerage workflow rather than investor research workflow; that the dual web-plus-API strategy reflects a philosophy that serious financial tools should meet users where they are, whether at a trading terminal or a code editor; and that the product occupies a deliberate middle ground between a professional terminal and a gamified app, rigorous, visual, and genuinely pleasant to use for hours of research — are a derived editorial implementation inference from the reviewed material and are not Fugle-authored or a separately published brand statement.

### Locale

The product is Taiwan-facing and its published lines are Traditional Chinese; keep them in Traditional Chinese rather than substituting a translation. Two locale behaviors are recorded:

- **Market color convention.** Red marks a rising price and green a falling one, following Taiwan Stock Exchange convention and the opposite of the Western default. `#f3746d` and `#6c9c46` are the light-theme values.
- **Script pairing.** Lato carries Latin numerals in data-dense contexts and Noto Sans TC carries Chinese labels; the documentation portal adds Microsoft JhengHei for Traditional Chinese text.

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

### Recorded conflicts

Two value pairs disagree inside the record and neither side is chosen here.

- **Brand primary.** The site's `theme-color` meta tag is `#f4af1c` while the PWA manifest's `theme_color` is `#fbcc67`, a lighter amber. The record resolves the primary as `#f4af1c` on the grounds that the CSS custom property `--p` and the developer portal's `--ifm-color-primary` both canonically define it, and reads the manifest value as likely a PWA splash-screen approximation. That reading is the record's own; both values are carried.
- **Dark-mode surface layer.** One passage puts `#323232` surface layers over the `#131313` dark base; another puts the dark-mode surfaces at `#131313` / `#222222`. `#323232` is also the light-theme body-text role. Both surface values are carried and neither is promoted over the other.

### Named gaps

These decisions are unnamed values, not permissions to invent:

- dark-theme rise and fall colors, which the record describes as red and green trading signals without stating either value
- the widths behind `--watchListWidth` and `--tradingWidth`, and the duration behind `--layoutDuration`, which the record names as configurable custom properties without values
- the control the recorded `Focus / active ring` shadow attaches to, which the record names without binding to a component
- the component that uses the `full` corner, recorded as a bare `9999`
- the per-feature-area column count inside the 3–5 range at the xl breakpoints
- measured interface values for the native iOS and Android app, which the record names while stating only that it shares color and typography tokens
