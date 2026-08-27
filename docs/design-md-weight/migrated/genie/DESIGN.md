# Genie Music Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Genie Music (지니뮤직) is a Korean music-streaming service. This contract covers one live-inspected first-party web surface: the streaming homepage at `https://www.genie.co.kr`, recorded by the source as a Tier 1 live inspect on 2026-06-09. The source also names `https://company.genie.co.kr` (Genie Music corporate) as a brand-owned Tier 1 source; it supplies corporate facts, and the source attaches no interface value to it. Every value below stays attached to the surface that established it. The boundary that stops a homepage value from standing in for another Genie surface is a derived editorial implementation inference from the verified surface; it is not Genie Music-authored or a separately published UI specification.

The captured interface is a white (`#ffffff`) canvas carrying a tightly packed grid of charts, rankings, and album rows in a compact `dotum` system at a 12px base. One saturated hot-pink (`#fa4065`) marks the brand, the primary play actions, and selection; a gray staircase (`#969697`, `#8b8b8b`, `#666666`, `#d2d2d2`) carries ranks, labels, dividers, and metadata; headings sit at `#27282d` and body text at `#444444`. A secondary interactive blue (`#0096ff`) appears on the active chart-scope tab. Geometry stays small: 4px radii on buttons and inputs, an occasional 13px pill on search-keyword chips (the dark `#434354` capsule), `#eef1f4` hairline borders, and low shadows. Reading that density as the point rather than a compromise — "a working jukebox interface", efficient and scannable, built for people who came to find a song and not to admire whitespace — reading the gray scaffolding as what keeps thousands of rows legible without fatigue, and reading `#fa4065` as trained to mean "this is the thing you press", is a derived editorial implementation inference from the verified surface; it is not Genie Music-authored or a separately published UI specification.

Genie Music is operated by 지니뮤직 (Genie Music Corporation), a company affiliated with KT (Korea Telecom), and the source places it in the Korean streaming market alongside Melon, FLO, and others under the tagline 지니 : 음악, 그리고 설레임. The source describes the brand identity as centred on the genie/lamp metaphor — music summoned on demand — plus a signature hot-pink that distinguishes it in a category crowded with greens and blues. The source's §11 states what the brand embraces — speed, recognizability (one bold pink), and throughput for users who arrive knowing what they want — and what it avoids: the slow, image-heavy "discovery experience" of Western competitors, on the assumption that you came to play music, so the product gets out of the way. This is narrative context; it does not by itself supply interface tokens. Reading the product's heritage as the Korean web portal — chart-driven, optimized for the daily ritual of checking 실시간 차트, with the catalog as the homepage and density as a feature — and reading that as a deliberate contrast with the slow, image-heavy "discovery experience" of Western competitors, is a derived editorial implementation inference from the verified surface; it is not Genie Music-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=4 lang=en -->
### Primary tasks

These four come from the modules and labels the source records on the captured homepage. They do not come from the source's persona section, which the source itself marks as fictional archetypes. Reading those modules and labels as the primary tasks a person comes to this surface to perform is a derived editorial implementation inference from the verified surface; it is not Genie Music-authored or a separately published UI specification.

- Scan the ranked realtime chart (실시간 차트) on the `https://www.genie.co.kr` homepage.
- Switch chart scope between 종합, 국내, and 국외.
- Search the catalog from the header search field and its 인기검색어 / 최근검색어 keyword pills.
- Start playback from a track row (듣기).
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source's four persona entries are self-declared fictional archetypes informed by publicly observable segments, so they are dropped here rather than restated or moved to a sidecar; their names, ages, cities, and segment descriptions appear in neither output. At group level the source names Korean music listeners who expect to see a whole top-100 with minimal scrolling, and people who arrive knowing what they want. Reading that group as the audience constraint for this surface is a derived editorial implementation inference from the verified surface; it is not Genie Music-authored or a separately published UI specification.

### Distinctive traits

The list restates the source's Key Characteristics. Where a bullet characterizes a value rather than stating it — "built for dense catalog rows", "soft, never pure black", "flat, utilitarian depth" — that reading is a derived editorial implementation inference from the verified surface; it is not Genie Music-authored or a separately published UI specification.

- Hot-pink `#fa4065` as the single brand + action accent against an otherwise gray-on-white field
- Compact `dotum` typography at a 12px base — built for dense catalog rows
- Gray staircase (`#969697`, `#8b8b8b`, `#666666`, `#d2d2d2`) carrying ranks, labels, and dividers
- Heading near-black `#27282d`, body `#444444` — soft, never pure black
- Interactive blue `#0096ff` reserved for active chart-scope tabs
- Conservative 4px button/input radius; 13px pill only on the dark search chip
- Hairline `#eef1f4` borders and barely-there shadows — flat, utilitarian depth

### Principles

These seven items are a derived editorial implementation inference from the verified surface; they are not Genie Music-authored or a separately published UI specification.

1. **The chart is the homepage.** The centre of gravity is the realtime ranked list. Design serves scanning a chart fast, not browsing editorial imagery.
2. **Density is a feature.** Maximize rows-per-screen; whitespace that costs a row costs trust.
3. **One bold accent.** A single saturated pink (`#fa4065`) carries brand and action. Restraint everywhere else makes the accent legible as a signal.
4. **Weight before color.** With type held at 12px, emphasis is expressed through `dotum` weight 700 — the cheapest, most consistent emphasis lever for dense data.
5. **Gray does the structural work.** A disciplined gray staircase ranks importance across thousands of metadata cells without introducing color noise.
6. **Flat by default.** The catalog reads as one plane; elevation is reserved for genuine overlays. No decorative depth.
7. **Warmth lives in the words, not the chrome.** The emotional 설레임 promise is carried by tagline and promo copy; the functional UI stays terse.

### Application rules

Two rule groups, kept separate because the source states them separately: the first is its §7 Do list, the second its §16 brand-philosophy Do list. Grouping them as application rules for the captured surface, and the rationale each one gives, is a derived editorial implementation inference from the verified surface; it is not Genie Music-authored or a separately published UI specification.

Surface application (source Do list):

- Use `#fa4065` only for brand marks and primary play/action moments — keep it rare so it reads as "press here".
- Run catalog text at 12px `dotum` and use weight 700 (not size or color) for emphasis.
- Separate rows with `#eef1f4` hairlines rather than large gaps.
- Reserve `#0096ff` for the active chart-scope tab state.
- Keep buttons and inputs at a 4px radius; use the 13px pill only for the dark search chip.
- Use the gray staircase (`#969697`, `#8b8b8b`, `#666666`) to rank importance of metadata.
- Keep shadows neutral, low, and limited to overlays.

Brand Philosophy (source §16 Do list):

- Treat the realtime chart as the centerpiece — design for fast scanning of ranked lists.
- Keep the hot-pink `#fa4065` rare and tied to action and brand identity.
- Let the gray staircase and `dotum` weight carry hierarchy in dense data.
- Honor the warm Korean tagline register in promo copy while keeping UI labels terse.
- Maintain flat, neutral depth so the catalog reads as one plane.
- Preserve density — measure success by rows-per-screen, not whitespace.

### Avoid

Two prohibition groups, again kept as the source states them: its §7 Don't list and its §16 brand-philosophy Don't list. The reason each one gives — "it is an action signal, not a background", the read that density is the product, the read that the catalog must read as one plane — is a derived editorial implementation inference from the verified surface; it is not Genie Music-authored or a separately published UI specification. The final line restates this contract's scope boundary as a prohibition and carries the same qualification.

Surface prohibitions (source Don't list):

- Don't spread pink across decorative areas — it is an action signal, not a background.
- Don't introduce a display/hero type tier; Genie has no oversized marketing headlines.
- Don't use pure black (`#000000`) for text — headings are `#27282d`, body is `#444444`.
- Don't add large radii or pill shapes to buttons/cards — geometry stays conservative.
- Don't tint shadows or add dramatic elevation — the catalog must read as one plane.
- Don't widen row spacing for "breathing room" — density is the product.
- Don't use blue for anything other than active tab selection.

Brand Philosophy prohibitions (source §16 Don't list):

- Don't dilute the pink into backgrounds or decoration.
- Don't import a Western "discovery-first" image-heavy layout that buries the chart.
- Don't scale type up into a marketing hero tier inside the app.
- Don't use pure black, large radii, or tinted/dramatic shadows.
- Don't let promotional warmth leak into functional button copy.
- Don't trade catalog density for empty space.
- Don't present a homepage value as evidence for a Genie surface this capture did not reach.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Each role below pairs a name with the value and the use the source records. Where a line also characterizes a value — "the one warm note in a gray system", "a near-black with a faint warm cast", "the one cool interactive signal" — that characterization is a derived editorial implementation inference from the verified surface; it is not Genie Music-authored or a separately published UI specification.

Primary

- **Genie Pink** (`#fa4065`): signature brand color and primary action color — play/listen buttons, selected states, brand marks. The source describes it as the one warm note in a gray system.
- **Pink Hover** (`#d62952`): darker rose for pressed/hover states on pink actions.
- **Pure White** (`#ffffff`): page background, panel surfaces, text on pink.

Text neutrals

- **Heading** (`#27282d`): strongest text — nav items, track titles on emphasis, section heads. A near-black with a faint warm cast, not `#000000`.
- **Body** (`#444444`): default reading color for list rows, track titles, and metadata.
- **Secondary** (`#666666`): supporting text and second-line metadata.
- **Muted** (`#969697`): de-emphasized labels, placeholders, rank numerals.
- **Label** (`#8b8b8b`): inactive tab labels, small utility text.

Interactive

- **Accent Blue** (`#0096ff`): active chart-scope tab text (종합 / 국내 / 국외) — the source calls it the one cool interactive signal.

Surface and borders

- **Surface** (`#f7f8f9`): subtle off-white fill for grouped panels and zebra rows.
- **Hairline** (`#eef1f4`): standard light divider/border for cards and table rows.
- **Border** (`#d2d2d2`): stronger 1px border on inputs and ghost buttons.
- **Icon Gray** (`#a6afb6`): outline/icon stroke gray on player controls.

Chips and on-color

- **Chip Dark** (`#434354`): dark slate capsule background for realtime search-keyword pills, with white text.
- **On Primary** (`#ffffff`): text/icon color on pink and dark-chip backgrounds.

### Spacing

Token-set steps, unitless: `xs 1 · sm 6 · md 8 · base 12 · lg 18 · xl 24 · xxl 32`. The visible section writes the same scale in px: 1px, 6px, 8px, 12px, 18px, 24px, 32px. Reading the compression at the low end as rationed rather than lavished whitespace, because catalog rows are packed tightly, is a derived editorial implementation inference from the verified surface; it is not Genie Music-authored or a separately published UI specification.

### Shape

Token-set steps, unitless: `sm 4 · md 8 · lg 13 · full 9999`. Named uses:

- Standard (4px): buttons, inputs, badges
- Comfortable (8px): card/panel containers
- Pill (13px): search-keyword chips only
- Full (9999): circular avatar/icon controls

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow | Page background, inline catalog rows |
| Ambient (Level 1) | `rgba(0,0,0,0.06) 0px 1px 3px` | Card and panel lift |
| Panel (Level 2) | `rgba(0,0,0,0.12) 0px 4px 12px` | Dropdowns, search panel, popovers |
| Ring (Accessibility) | `#0096ff` / `#fa4065` outline | Keyboard focus on tabs and actions |

The Ring row is the source's only keyboard-focus record, and it names tabs and actions rather than any single control. Reading it as a surface-level statement rather than a per-control treatment, and keeping it at that scope below, is a derived editorial implementation inference from the verified surface; it is not Genie Music-authored or a separately published UI specification.

The source's shadow philosophy — depth kept almost entirely flat so dozens of rows read as a single plane, shadows reserved for transient overlays (the search panel, dropdown menus), neutral black at low alpha with no chromatic or brand-tinted depth, hierarchy carried by hairline borders and the gray staircase rather than by elevation — is a derived editorial implementation inference from the verified surface; it is not Genie Music-authored or a separately published UI specification.

### Motion

The source's evidence for this document is one Tier 1 live inspect of one homepage, and it supplies no transition, animation, or easing sample. Everything in this subsection except the omission of the three curve values — the durations, the easing token names and roles, the forbidden-motion rule, the signature motions, and the reduced-motion behavior — is therefore a derived editorial implementation inference from the verified surface; it is not Genie Music-authored or a separately published UI specification.

Durations, with the uses the source gives them:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Selection commits, tab switches, focus |
| `motion-fast` | 120ms | Row hover, button press feedback |
| `motion-standard` | 200ms | Dropdown / search-panel open, overlay fade |
| `motion-slow` | 300ms | Banner / promo carousel transitions |

Easing token names and roles: `ease-enter` for panels and dropdowns arriving, `ease-exit` for dismissals, `ease-standard` for two-way state transitions. Their curve values are omitted here — see Governance. No curve value is promoted. A future motion pass may promote one only after recording, per component, the computed transition properties, the animation name, the duration, the easing, and the reduced-motion behavior on the live surface; confirming a single curve, or citing an official source for one, does not satisfy that condition. That condition is set by this document, not by Genie Music.

Motion rules the source states: no bounce or overshoot on functional controls, since the catalog is a working surface rather than a playful one, with spring delight belonging to promotional banners at most and never to chart rows or playback controls. Under `prefers-reduced-motion: reduce` all transitions collapse to `motion-instant` and carousels stop auto-advancing, and the catalog remains fully functional with no loss of information.

Signature motions the source names: a tab scope switch between 종합 / 국내 / 국외 that commits near-instantly with a quick `#0096ff` color transition on the active label while the chart body cross-fades over `motion-standard`; a search-panel reveal that drops in over `motion-standard / ease-enter` with the panel shadow (`rgba(0,0,0,0.12) 0px 4px 12px`) signalling the overlay layer above the flat catalog; and a row hover that responds at `motion-fast` with a subtle `#f7f8f9` fill and title darkening, fast enough to feel responsive across a long scrolling list.

<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | The source records no published Genie Music typography specification. |
| Live computed surface-use | The captured homepage renders visible text in `dotum` (돋움) at a 12px base. |
| Official distributed asset | The source states that no custom web font is loaded and that the surface relies on platform `dotum`/Gothic rendering. No Genie-distributed type asset is claimed here. |
| Declared-only | The source records no declared-but-unused face. |
| License | The source records no font license. `dotum` is treated here as a platform-supplied Korean Gothic face, not a Genie brand asset. |
| Outside this capture | Type for `https://company.genie.co.kr` is outside this capture. |

### Family

- **Current visible UI family:** `dotum` (돋움), with fallback `sans-serif`.
- Do not substitute a different face for `dotum` and present it as the Genie face. Reading `dotum` as chosen for crisp legibility at very small sizes, and as the foundation of Korean-portal density, is a derived editorial implementation inference from the verified surface; it is not Genie Music-authored or a separately published UI specification.

### Type roles

| Role | Font | Size | Weight | Line height | Tracking | Notes |
|---|---|---:|---:|---:|---|---|
| GNB Nav | dotum | 18px | 700 | 1.30 | normal | Top global-nav menu items, `#27282d`, active turns `#fa4065` |
| Menu Label | dotum | 14px | 400 | 1.71 | normal | Account / utility links (로그인·회원가입) |
| Body | dotum | 12px | 400 | 1.50 | normal | Standard list rows, track titles, metadata |
| Body Bold | dotum | 12px | 700 | 1.50 | normal | Emphasised labels, active chart tab text |
| Search Chip | dotum | 12px | 700 | 2.08 | normal | Keyword pill on dark `#434354` capsule |
| Caption | dotum | 11px | 400 | normal | normal | Rank numerals, fine print, timestamps |

Token-set `use` strings, verbatim: GNB `Global nav primary menu items`; Menu Label `Account / utility menu labels`; Body `Standard list rows, track titles, metadata`; Body Bold `Emphasised labels, active chart tab`; Search Chip `Search keyword chip on dark pill`; Caption `Rank numerals, fine print, timestamps`.

Line heights are unitless ratios in the source and stay ratios here.

### Type rules

Observable in the scale: the catalog runs at a 12px base; 18px appears for the global nav; the informational range is 11-14px; there is no size above 18px in this scale; letter-spacing stays `normal` throughout, with no negative tracking.

Reading those facts as rules — "12px is the workhorse" because Genie optimizes for rows-per-screen and `dotum` stays sharp where many faces would smear; weight as the primary emphasis lever, so with size held at 12px the jump from 400 to 700 is how importance is signalled (active tab, selected keyword) rather than color or size; two functional sizes plus nav, with no display/hero tier because this is an app surface and not a landing page; and density coming from small sizes and tight line-heights rather than negative tracking — is a derived editorial implementation inference from the verified surface; it is not Genie Music-authored or a separately published UI specification.

### Assets

- Logo pointer recorded by the source: `https://www.google.com/s2/favicons?domain=genie.co.kr&sz=128`. This is a favicon-service URL keyed to the domain, not a Genie-hosted brand file; the source supplies no first-party logo asset.
- Album artwork is served as consistent square thumbnails, framed by the same hairline at every size, and lazy-loaded grid cells fill from a neutral `#f7f8f9` placeholder. Reading that artwork as first-party catalog content is a derived editorial implementation inference from the verified surface; it is not Genie Music-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Surface state contract

The ten rows below are the source's state contract. They describe surface- and module-level treatments, not per-control treatments, and they name published copy that this contract carries verbatim. Reading them as the state contract for the captured surface is a derived editorial implementation inference from the verified surface; they are not Genie Music-authored or a separately published UI specification.

| State | Treatment |
|---|---|
| **Empty (search, no results)** | White canvas, single plain Korean line in `#444444` at 12px: "검색 결과가 없습니다." No illustration. Search field stays focused for retry. |
| **Empty (playlist, none saved)** | Muted `#969697` single line prompting the user to add tracks. One pink CTA to browse the chart. |
| **Loading (chart first paint)** | Neutral `#f7f8f9` skeleton rows at exact final row height. No shimmer drama — rows fill top-down as the chart resolves. |
| **Loading (artwork grid)** | `#f7f8f9` square placeholders that swap to album art on load, preserving grid geometry. |
| **Error (playback failed)** | Inline message in `#444444` near the row with a plain-Korean reason; retry affordance in pink. No generic "오류가 발생했습니다" when a specific cause is known. |
| **Active (selected tab)** | Tab text switches to `#0096ff` weight 700; siblings stay `#8b8b8b`. |
| **Hover (track row)** | Title strengthens from `#444444` to `#27282d`; row may take a `#f7f8f9` fill. Play affordance reveals in pink. |
| **Selected (now playing)** | Active row marked with `#fa4065` accent (title color and a left marker). |
| **Disabled** | Control opacity reduced; pink fades toward `#fa406580`-equivalent muting rather than switching to gray, preserving brand read. |
| **Success (added to playlist)** | Brief inline confirmation in plain Korean; no heavy toast. The row reflects the new state directly. |

The source records `Active` and `Selected` outside the seven canonical Core states. They are kept as their own observations on the components below rather than folded into any canonical state.

### How applicability is decided here

Each declared component keeps the primitive type the source verified for it. Applicability is judged by control role, never by how much the single capture happened to reach: `default` and `focus-visible` apply to every interactive control; a state that is meaningful for the role stays `applicable` with its visual treatment omitted where the source supplies none; `not-applicable` is used only where the role has no such outcome to represent. Where the source supplies no interaction evidence for a container at all, its kind and applicability map are omitted rather than decided. These role judgments — including every Reason cell in the tables below — are a derived editorial implementation inference from the verified surface; they are not Genie Music-authored or a separately published UI specification. This is not a complete state-coverage claim.

### Primary Listen / Play Button

- Type: button
- Kind: interactive
- Role: primary play/listen action
- Background: `#fa4065` · Text: `#ffffff` · Radius: 4px · Padding: 8px 18px
- Font: 12px dotum weight 700; token-set font record `12px / 700`
- Hover: `#d62952`
- Token-set use: `Primary listen/play action, hover #d62952`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | The source records the control on the captured homepage |
| hover | applicable | Pointer-web button; the source names `#d62952` as the hover value |
| focus-visible | applicable | Keyboard-reachable control; per-control treatment unresolved |
| disabled | applicable | Playback of a given track can be unavailable; treatment unresolved |
| loading | applicable | Commits playback, which can be pending; treatment unresolved |
| error | applicable | Commits an operation that can fail — the surface contract carries an Error (playback failed) row |
| success | applicable | Commits an operation that can complete; treatment unresolved |

### Ghost / Row Action Button

- Type: button
- Kind: interactive
- Role: secondary per-row actions (add to playlist, more)
- Background: transparent · Text: `#444444` · Border: `1px solid #d2d2d2` · Radius: 4px · Padding: 6px 12px
- Font: 12px dotum weight 400; token-set font record `12px / 400`
- Token-set use: `Secondary row action, 1px #d2d2d2 border`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | The source records the control on the captured homepage |
| hover | applicable | Pointer-web button; treatment unresolved |
| focus-visible | applicable | Keyboard-reachable control; treatment unresolved |
| disabled | applicable | A row action can be unavailable for a given track; treatment unresolved |
| loading | applicable | Commits the add-to-playlist operation, which can be pending; treatment unresolved |
| error | applicable | Commits an operation that can fail; treatment unresolved |
| success | applicable | Commits an operation that can complete — the surface contract carries a Success (added to playlist) row |

### Search Keyword Chip

- Type: badge
- Kind: interactive — the source lists it under touch targets at 25px height with 12px horizontal padding
- Role: realtime search-keyword pill in the header search panel
- Background: `#434354` · Text: `#ffffff` · Radius: 13px · Padding: 0px 12px (height ~25px)
- Font: 12px dotum weight 700; token-set font record `12px / 700`
- Token-set use: `Realtime search keyword pill, 25px tall`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | The source records the chip in the header search panel |
| hover | applicable | Pointer-web control; treatment unresolved |
| focus-visible | applicable | Keyboard-reachable control; treatment unresolved |
| disabled | applicable | A keyword target can be unavailable; treatment unresolved |
| loading | not-applicable | Selecting a keyword hands off to the search surface; any pending outcome belongs there, and this control commits nothing itself |
| error | not-applicable | Same role: nothing is committed here that could fail |
| success | not-applicable | Same role: nothing is committed here that could complete |

### Chart Scope Tab

- Type: tab
- Kind: interactive
- Role: chart scope switch — 종합 / 국내 / 국외
- Inactive text: `#8b8b8b`, weight 400 · Active text: `#0096ff`, weight 700 · Padding: 0px 8px
- Font: 12px dotum; token-set font record `12px / 700`
- Token-set use: `Chart scope tabs — 종합 / 국내 / 국외`; token-set active record: `active text #0096ff bold`
- Active: tab text switches to `#0096ff` weight 700 while siblings stay `#8b8b8b`. The source records this separately from the seven canonical states and it is kept as its own observation.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Inactive tabs captured at `#8b8b8b` weight 400 |
| hover | applicable | Pointer-web control; treatment unresolved |
| focus-visible | applicable | Keyboard-reachable control; the source's Ring row names tabs at surface level but gives no per-control treatment |
| disabled | applicable | A scope can be unavailable; treatment unresolved |
| loading | not-applicable | The tab selects a scope; the chart panel it switches carries any pending load, and the tab commits nothing itself |
| error | not-applicable | Same role: the failure would belong to the chart panel, not to the scope selector |
| success | not-applicable | Same role: nothing is committed here that could complete |

### Global Nav Item (GNB)

- Type: tab
- Kind: interactive
- Role: top global nav bar item on a white bar, left brand mark, horizontal menu
- Text: `#27282d` · Font: 18px dotum weight 700; token-set font record `18px / 700`
- Token-set use: `Top global nav bar items`; token-set active record: `#fa4065 with bottom border`
- Active: `#fa4065` text with a pink bottom border. Kept as its own observation, outside the seven canonical states.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on the homepage global nav at `#27282d`, 18px, weight 700 |
| hover | applicable | Pointer-web control; treatment unresolved |
| focus-visible | applicable | Keyboard-reachable control; per-control treatment unresolved |
| disabled | applicable | A nav destination can be unavailable; treatment unresolved |
| loading | not-applicable | Destination navigation; the item commits no operation of its own |
| error | not-applicable | Same role: nothing is committed here that could fail |
| success | not-applicable | Same role: nothing is committed here that could complete |

### Header Search Input

- Type: input
- Kind: interactive
- Role: header search field
- Border: `1px solid #d2d2d2` · Radius: 4px · Padding: 1px 6px
- Text: `#444444` · Placeholder: `#969697` · Font: 12px dotum weight 400; token-set font record `12px / 400`
- Token-set use: `Header search field, 1px #d2d2d2 border, placeholder #969697`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured in the homepage header |
| hover | applicable | Pointer-web field; treatment unresolved |
| focus-visible | applicable | Keyboard-reachable field; the surface contract keeps the field focused for retry after an empty result |
| disabled | applicable | The field can be made unavailable; treatment unresolved |
| loading | applicable | Submits a query that can be pending; treatment unresolved |
| error | applicable | Form field whose submission can fail; treatment unresolved |
| success | applicable | Form field whose submission can complete; treatment unresolved |

### Track Row

- Type: listItem
- Kind: interactive — the source records hover and selected treatments for the row itself
- Role: catalog track row
- Row text: `#444444`, 12px; title strengthens to `#27282d` on hover/selection; token-set font record `12px / 400`
- Rank numeral: `#969697`, 11px, left-aligned · Row divider: `1px solid #eef1f4`
- Hover fill: `#f7f8f9` · Selected (now playing): `#fa4065` accent on the title with a left marker
- Token-set use: `Track row, rank numeral #969697, title #27282d on hover`
- Selected is recorded by the source outside the seven canonical states and is kept as its own observation.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured as the standard catalog row |
| hover | applicable | The source names `#27282d` title strengthening and a `#f7f8f9` row fill |
| focus-visible | applicable | Keyboard-reachable row; per-control treatment unresolved |
| disabled | applicable | A track can be unavailable for playback; treatment unresolved |
| loading | applicable | The surface contract fills rows top-down from `#f7f8f9` skeleton rows at exact final row height |
| error | applicable | The surface contract places a playback-failure message inline near the row |
| success | applicable | The surface contract says the row reflects the new state directly after an add-to-playlist |

### Card / Panel

- Type: card
- Background: `#ffffff` · Border: `1px solid #eef1f4` · Radius: 8px
- Shadow (ambient): `rgba(0,0,0,0.06) 0px 1px 3px` · Shadow (panel/popover): `rgba(0,0,0,0.12) 0px 4px 12px`
- Role: chart panels, album cards, dropdown menus
- Token-set use: `Chart / album panel, 1px #eef1f4 border, ambient shadow`
- No kind and no applicability map: the source supplies no interaction evidence for this container, so neither is decided here.

### Rank Numeral Badge

- Type: badge
- Kind: non-interactive — it renders the chart position and the source gives it no control affordance, so a state-applicability map does not apply to it
- Text: `#969697` · Font: 11px dotum weight 400 · Left-aligned; token-set font record `11px / 400`
- Token-set use: `Chart rank position numeral`

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

Spacing on this surface uses the compressed scale above: 1px, 6px, 8px, 12px, 18px, 24px, 32px. The layout is a centered fixed-width content column rather than a fluid full-bleed one, with multi-column chart/ranking blocks laid side by side; a header zone carrying brand, search, and utility links; a main zone of charts and album grids; and a footer of corporate/legal links. Album artwork sits in consistent square thumbnails seeded across grid cells. Radius follows the shape scale: 4px on buttons, inputs, and badges; 8px on card/panel containers; 13px on search-keyword chips only; 9999 on circular avatar/icon controls.

Reading the centered fixed-width column as Korean-portal convention, and reading the whitespace policy as "density first" — gaps as functional separators rather than breathing room, `#eef1f4` gray dividers instead of large empty space, and the pink plus the active-blue tab doubling as navigation landmarks in an otherwise even gray field — is a derived editorial implementation inference from the verified surface; it is not Genie Music-authored or a separately published UI specification.

The breakpoint table below is the source's stated contract. The source records one Tier 1 live inspect of the homepage and no measurement at any of these widths, so the table is declared behavior rather than an observation of it.

| Name | Width | Key changes |
|---|---|---|
| Mobile | <640px | Single-column chart, collapsed nav, stacked search |
| Tablet | 640-1024px | Reduced column count, condensed utility bar |
| Desktop | 1024-1280px | Full multi-column chart + album grid |
| Large Desktop | >1280px | Centered fixed content column with side margins |

Touch targets as the source states them: pink primary actions get 8px/18px padding for tap; search chips are 25px high with 12px horizontal padding; row controls (play, add) are sized for finger taps on mobile while staying compact on desktop.

Collapsing strategy as the source states it: the global nav goes from a horizontal 18px menu to a hamburger/drawer on mobile; multi-column charts become a single stacked column; album grids go many-per-row, then 2-3 per row, then list rows; search keyword chips wrap to multiple lines rather than truncating; and the 12px base holds across breakpoints, so only layout columns collapse, not the type scale.

<!-- design-md:section content-locales -->
## 6. Content & Locales

Locale: Korean (ko). The captured surface is a Korean first-party site and its interface strings are Korean.

Published strings the source records, carried verbatim:

- Tagline: 지니 : 음악, 그리고 설레임. The source supplies its own English gloss, "Genie: Music, and the flutter of excitement"; the gloss is a reader aid and never replaces the label.
- Chart scope tabs: 종합 / 국내 / 국외
- Nav and menu labels: 차트, 최신음악, 라디오, 매거진
- Account / utility links: 로그인·회원가입
- Row actions: 듣기, 담기, 다운, 검색
- Search panel: 인기검색어, 최근검색어, 최근검색어 전체삭제
- Empty result: "검색 결과가 없습니다"
- Named as the generic error to avoid when a specific cause is known: "오류가 발생했습니다"
- Product term for the realtime chart: 실시간 차트

Everything from here to the end of this section is a derived editorial implementation inference from the verified surface; it is not Genie Music-authored or a separately published UI specification. Reading the web voice as functional, friendly, and unmistakably Korean-consumer — the plain, warm Korean of a service that wants you to find and play music quickly — reading the tagline as setting a gently emotional register that the dense utilitarian UI then keeps in check, and reading labels as short imperative Korean nouns and verbs rather than marketing slogans inside the catalog, all fall under that qualification, as do the register table and the forbidden-register rule below.

| Context | Tone |
|---|---|
| Nav & menu labels | Short Korean nouns: 차트, 최신음악, 라디오, 매거진 |
| Row actions | Bare imperatives: 듣기, 담기, 다운 |
| Search | Helpful and immediate: 인기검색어, 최근검색어, 최근검색어 전체삭제 |
| Empty / no-result | Plain and honest: "검색 결과가 없습니다" |
| Promotional banners | Warmer, benefit-led Korean — the only place with emotional copy |
| Legal / corporate | Formal Korean, full company disclosure in the footer |

Forbidden register: no English hype loaned in where Korean works, no exclamation-stacked CTAs inside the catalog, and no clever wordplay on functional buttons. The emotional warmth lives in the tagline and promotional surfaces; the working UI stays terse and clear.

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

These are unnamed values, not permissions to invent:

- exact curve values for `ease-enter`, `ease-exit`, and `ease-standard`
- computed transition, animation, duration, and easing samples for any declared motion token
- per-control keyboard-focus treatment; the source's Ring row states `#0096ff` / `#fa4065` outline for tabs and actions at surface level only
- hover treatment for every declared control except the primary play button and the track row, the two the source names
- control-level disabled, loading, error, and success treatment wherever those states are applicable above
- the interaction behaviour, if any, of the card/panel container
- interface values for `https://company.genie.co.kr`, which the source names as a brand-owned Tier 1 source without attaching any design value to it
