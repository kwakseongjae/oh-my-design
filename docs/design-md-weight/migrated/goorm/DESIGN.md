# goorm Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

goorm (구름, "cloud" in Korean) is Korea's developer-experience company — a cloud IDE, an AI-education platform, and a coding-test suite. This contract covers two first-party web surfaces that the source records as Tier 1 live inspect on 2026-06-26: the marketing site at `https://goorm.co`, and the open Vapor UI design-system docs at `https://vapor-ui.goorm.io`. Every value below stays attached to the surface that established it. The source also names `https://github.com/goorm-dev/vapor-ui` (official GitHub org), `https://tech.goorm.io` (TechBlog), and `https://blog.goorm.io/design/` (design blog) as brand-owned Tier 1 sources. The boundary that keeps a goorm.co value from standing in for a Vapor UI token — and that treats those three named sources as narrative or repository facts rather than computed interface values — is a derived editorial implementation inference from the verified surfaces; it is not goorm-authored or taken from a separately published UI specification, including the published Vapor UI documentation.

The two surfaces share one typeface and one action color. The canvas is pure white (`#ffffff`) broken up by a barely-there cool-grey surface (`#f7f7f7`). Text sits in a confident near-black (`#262626`) — never pure black — with a muted slate ladder beneath it (`#4c4c4c` → `#5d5d5d` → `#393939` → faint `#a3a3a3`). The single saturated brand action color is an interactive blue (`#2a72e5`), the primary of goorm's open-source design system **Vapor UI**, with deeper blues (`#0957c8` active, `#0043b3` link) for selected tabs and inline links. Geometry is locked to an 8px corner radius across buttons, inputs, and controls (12px on cards and search fields, full `9999px` pills on badges, `50%` on avatars). Elevation is almost entirely flat: live inspection found `box-shadow: none` across nav, headings, cards, and most buttons; where a border is needed it is drawn as a 1px inset shadow (`#e1e1e1` for inputs, `#c6c6c6` for outline buttons). Semantic state lives in an Adobe-Leonardo-generated tint family — success green `#058765` on `#bbecd7`, danger red `#da3944` on `#ffd8d7`, info blue on `#c6e6ff`, warning on `#ffd9c8`. Reading those measurements as "calm, engineered software documentation rather than a hard-sell SaaS pitch", and reading the system as "engineered to disappear behind the work", is a derived editorial implementation inference from the verified surfaces; it is not goorm-authored or taken from a separately published UI specification, including the published Vapor UI documentation.

goorm was founded in **2013** in South Korea, taking its name from the Korean word for "cloud". From a browser-based IDE grew an ecosystem — **goormIDE** (cloud development), **goormEDU / goormEXP** (a learning-experience platform), **goormDEVTH** (coding tests for hiring), goormLEVEL, and newer AI-era products like Arkain and EXP. The source's closing note classes the founding year and the "one million subscribers" figure for the AI-education platform as widely reported public facts, not quoted from a single verified goorm statement. The current framing has shifted toward **AX (AI Transformation)**. The TechBlog states the mission as "We are creating an ecosystem centered on developer growth." The source also records a stated belief that "anyone can become a developer." Those sentences are narrative context; they do not by themselves supply interface tokens. This contract does not treat the two captured surfaces as a proxy for goormIDE, goormEDU, goormEXP, goormDEVTH, goormLEVEL, Arkain, or EXP product chrome. The source records that goorm recently open-sourced as **Vapor UI**, a WCAG-compliant React component library with a Leonardo-driven color system. That narrative-not-token classification, that refusal, and the source's own readings of what the design refuses (intimidating high-friction chrome; elitism that treats coding as an exclusive craft) and embraces (a flat, fast, accessible Vapor UI interface), plus the closing line "the design is the message: development should feel approachable", are derived editorial implementation inferences from the verified surfaces; they are not goorm-authored or taken from a separately published UI specification, including the published Vapor UI documentation.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

These three name what the two captured surfaces are for. That naming is a derived editorial implementation inference from the verified surfaces; it is not goorm-authored or taken from a separately published UI specification, including the published Vapor UI documentation. They do not come from the source's persona section, which the source itself marks as fictional archetypes.

- Read the goorm.co marketing surface and its invitation to start AX ("AX, 구름과 함께 시작해보세요").
- Inquire about adoption from the marketing primary CTA (도입 문의하기).
- Read the open Vapor UI docs — live preview first — and apply the documented button, input, tab, and badge tokens.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source's persona section states in its own header, and again in its closing note, that its entries are fictional archetypes and that the names are illustrative; those biographies are not carried here and are not re-hosted in the sidecar. Use only what the two captured surfaces establish at a group level: visitors reading goorm.co, and developers reading Vapor UI docs. The source's voice table also addresses education and community copy. That grouping is a derived editorial implementation inference from the verified surfaces; it is not goorm-authored or taken from a separately published UI specification, including the published Vapor UI documentation.

### Distinctive traits

The list restates the source's Key Characteristics. The values are measured; the groupings and the readings inside them ("hangul-optimized", "never pure black", "workhorse") are a derived editorial implementation inference from the verified surfaces — they are not goorm-authored or taken from a separately published UI specification, including the published Vapor UI documentation.

- Pretendard Variable for everything — ExtraBold (800) display, 400 body, hangul-optimized
- Single interactive blue (`#2a72e5`) as the Vapor UI primary action color
- Deeper blues for state — `#0957c8` active tab/selection, `#0043b3` inline link
- Near-black ink (`#262626`) for text and the dark marketing CTA, never pure black
- Flat, hairline-driven elevation — `#e1e1e1` borders and `#c6c6c6` inset strokes, not shadows
- 8px corner radius as the workhorse; full `9999px` pills only on badges
- Leonardo-generated semantic tints (`#c6e6ff` / `#bbecd7` / `#ffd8d7` / `#ffd9c8`) for status
- Cool-grey neutral ladder (`#4c4c4c` → `#5d5d5d` → `#393939` → `#a3a3a3`) on a `#f7f7f7` surface

### Principles

These six items are a derived editorial implementation inference from the verified surfaces; they are not goorm-authored or taken from a separately published UI specification, including the published Vapor UI documentation.

1. **Anyone can become a developer.** Accessibility is the founding mission. *UI implication:* keep flows low-friction and labels plain; never gate basic understanding behind jargon.
2. **Accessible by construction.** Vapor UI is WCAG-compliant with a Leonardo-generated, contrast-checked palette. *UI implication:* pair every semantic tint with a contrast-safe foreground; respect focus rings and keyboard paths.
3. **One action, one color.** Vapor blue (`#2a72e5`) means "do this." *UI implication:* reserve the saturated blue for the primary action so the next step is never ambiguous.
4. **Flat and fast.** Calm, uncluttered tooling beats decorative depth. *UI implication:* no drop shadows; separate with `#f7f7f7` tint and `#e1e1e1` / `#c6c6c6` inset borders.
5. **Announce loud, inform quiet.** *UI implication:* Pretendard ExtraBold for headlines that motivate; 400 for content that explains; 500-600 for restrained UI.
6. **Documentation is a product surface.** Component docs lead with a live preview. *UI implication:* show the real component first, the code second.

### Application rules

The source's eight Do rules, kept as brand rules rather than as universal governance. The justifications inside them — why a color belongs to one role, why a radius is reserved — are a derived editorial implementation inference from the verified surfaces; they are not goorm-authored or taken from a separately published UI specification, including the published Vapor UI documentation.

- Use Pretendard Variable for everything — ExtraBold (800) for display, 400 for body
- Reserve Vapor blue (`#2a72e5`) for the primary action — keep it the single "do this" color
- Use the deeper blues for state — `#0957c8` for active tabs/selection, `#0043b3` for inline links
- Use near-black ink (`#262626`) for text and the dark marketing CTA instead of pure black
- Separate sections with `#f7f7f7` tint and `#e1e1e1` hairlines, not drop shadows
- Keep corners at 8px for controls; reserve full `9999px` pills for badges
- Use the Leonardo semantic tints (`#c6e6ff` / `#bbecd7` / `#ffd8d7` / `#ffd9c8`) for status, not for decoration
- Draw borders as 1px inset strokes (`#e1e1e1` / `#c6c6c6`) to stay flat

### Avoid

The first eight avoidances are the source's own Don't list. The ninth restates this contract's scope boundary as a prohibition. The reasons attached to them — why a color or a radius must stay in one role — are a derived editorial implementation inference from the verified surfaces; they are not goorm-authored or taken from a separately published UI specification, including the published Vapor UI documentation.

- Use drop shadows for elevation — goorm is a flat, hairline-driven system
- Spread the Vapor blue across many elements — it dilutes the single-action signal
- Use pure black (`#000000`) for body text — reserve near-black ink `#262626`
- Set big pill radii on buttons or cards — controls are 8px, cards 12px
- Mix in a second saturated accent hue — blue is the only brand action color
- Set headlines in a light weight in product/docs — display is ExtraBold (800) there
- Use the semantic tints as background decoration — they carry status meaning only
- Use heavy slate text on light surfaces below `#a3a3a3` contrast — keep the muted ladder readable
- Present a goorm.co or Vapor UI value as evidence for goormIDE, goormEDU, goormEXP, goormDEVTH, goormLEVEL, Arkain, or EXP chrome this capture did not reach

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Each role below pairs a name with the value and the use the source records. Where a line also characterizes a value — "the system's 'do this' color", "a warm near-black used instead of pure black", "the primary separation device" — that characterization is a derived editorial implementation inference from the verified surfaces; it is not goorm-authored or taken from a separately published UI specification, including the published Vapor UI documentation.

Primary and interactive

- **Vapor Blue** (`#2a72e5`): Primary brand and action color. The saturated blue on Vapor UI primary buttons (Save, "Public으로 변경", "45 포인트 획득") and the goorm.co accent — the system's "do this" color, also the focus-ring color on inputs.
- **Active Blue** (`#0957c8`): Selected-state blue — active docs tab text and its 2px underline indicator, selection highlights.
- **Link Blue** (`#0043b3`): Inline text-link color and info-badge foreground; a deep, high-contrast blue for reading-flow links.

Ink and text hierarchy

- **Ink** (`#262626`): Primary text, headings, nav labels, and the dark marketing CTA background. A warm near-black used instead of pure black.
- **Secondary Slate** (`#4c4c4c`): Docs side-nav links, secondary labels, inactive tabs.
- **Muted Slate** (`#5d5d5d`): Tertiary text, captions, version tags.
- **Tertiary Slate** (`#393939`): Icon-button glyphs and dense control text.
- **Faint Grey** (`#a3a3a3`): Disabled text, placeholders, lowest-emphasis labels.

Neutral and surface

- **Canvas White** (`#ffffff`): Page background, card and input surfaces, text on blue/dark, and the `on-primary` foreground.
- **Surface Grey** (`#f7f7f7`): Cool-grey tinted surface for segmented sections and secondary panels.
- **Hairline** (`#e1e1e1`): Thin borders, dividers, input outlines, and the neutral/secondary button fill — the primary separation device in this shadow-light system.
- **Border Strong** (`#c6c6c6`): Slightly heavier inset border for outlined buttons and emphasized field edges.

Semantic and tints

- **Success Green** (`#058765`): Positive status text/icon, paired with the success tint.
- **Danger Red** (`#da3944`): Error and destructive status, paired with the danger tint.
- **Info Tint** (`#c6e6ff`): Light-blue badge/callout background for info and default tags.
- **Success Tint** (`#bbecd7`): Light-green background for success badges.
- **Danger Tint** (`#ffd8d7`): Light-red background for error badges.
- **Warning Tint** (`#ffd9c8`): Light-orange background for warning callouts.

### Spacing

Token-set steps, unitless: `xs 4 · sm 8 · md 12 · base 16 · lg 24 · xl 32 · xxl 48`. The visible section writes the same scale in px: 4px, 8px, 12px, 16px, 24px, 32px, 48px. Base unit: 4px. The source notes that control padding clusters at 0×12/16/24px horizontal with fixed heights (32/40/48px); nav items use 8px×12px. Reading that clustering as a quiet engineered cadence is a derived editorial implementation inference from the verified surfaces; it is not goorm-authored or taken from a separately published UI specification, including the published Vapor UI documentation.

### Shape

Token-set steps, unitless: `sm 6 · md 8 · lg 12 · xl 16 · full 9999`. Named uses:

- Small (6px): compact icon buttons, inner chips
- Medium (8px): buttons, inputs, controls — the workhorse
- Large (12px): cards, search fields, popovers
- XL (16px): large containers / media blocks
- Full (9999px): badges, pills; `50%` for avatars

Calling 8px the workhorse, and reserving `9999px` pills for badges only, is a derived editorial implementation inference from the verified surfaces; it is not goorm-authored or taken from a separately published UI specification, including the published Vapor UI documentation.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow | Page background, inline text, most surfaces |
| Tint (Level 1) | `#f7f7f7` background shift | Section / panel separation without elevation |
| Hairline (Level 2) | `1px solid #e1e1e1` border (or inset) | Card outlines, input edges, dividers |
| Inset Strong (Level 3) | `rgb(198, 198, 198) 0px 0px 0px 1px inset` | Outlined buttons, emphasized field edges |

Token-set shadow records: `none`; `inset-hairline` `rgb(225, 225, 225) 0px 0px 0px 1px inset`; `inset-strong` `rgb(198, 198, 198) 0px 0px 0px 1px inset`.

The source's shadow philosophy — a near-shadowless system; depth and grouping from flat tinted surfaces (`#f7f7f7`) and thin hairlines; when emphasis is needed the system reaches for color (Vapor blue `#2a72e5`) or the dark ink fill (`#262626`), never elevation — is a derived editorial implementation inference from the verified surfaces; it is not goorm-authored or taken from a separately published UI specification, including the published Vapor UI documentation. The measurements themselves (`box-shadow: none` on nav, headings, cards, and most buttons; 1px inset `#e1e1e1` / `#c6c6c6`) are recorded values.

### Motion

The source attributes its token-level claims to a live inspection of computed color, type, geometry, border, and shadow on the two surfaces. The motion contract below sits outside that attribution: the source records no transition, animation, duration, or easing observation on either surface. The durations, easing token names and roles, motion rules, signature motions, and reduced-motion behavior below are therefore a derived editorial implementation inference from the verified surfaces; they are not goorm-authored or taken from a separately published UI specification, including the published Vapor UI documentation.

Durations, with the uses the source gives them:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, button press, focus ring |
| `motion-standard` | 200ms | Card / section reveal, dropdown, tab switch |
| `motion-slow` | 320ms | Page-level transitions, hero reveal |

Easing token names and roles: `ease-enter` for arriving sheets, dropdowns, and cards; `ease-exit` for dismissals; `ease-standard` for two-way transitions. Their curve values are omitted here — see Governance. No curve value is promoted. A future motion pass may promote one only after recording, per component, the computed transition properties, the animation name, the duration, the easing, and the reduced-motion behavior on the live surface; confirming a single curve, or citing an official source for one, does not satisfy that condition. That condition is set by this document, not by goorm.

Motion rules the source states: motion is functional and quiet; buttons and tabs respond to press/hover with a subtle color or opacity shift; the active-tab underline (`#0957c8`) slides at `motion-standard / ease-enter`; content fades in from slightly below. No bounce or spring. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and the product remains fully functional.

<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | Vapor UI is goorm's open-source design system and uses Pretendard Variable for display, UI, and body. The source does not publish a typography specification separate from that live docs surface. Classing the live docs surface as not a separately issued typography specification is a derived editorial implementation inference from the verified surfaces; it is not goorm-authored or taken from a separately published UI specification, including the published Vapor UI documentation. |
| Live computed surface-use | Both captured surfaces compute visible text as `Pretendard Variable`. goorm.co body is 16px / `#262626` on `#ffffff`. Vapor docs H1 is 48px / weight 800; H2 is 32px / weight 700. |
| FontFaceSet and source corroboration | The source records Pretendard Variable with a system Pretendard / Apple SD Gothic Neo / Noto Sans KR fallback stack. |
| Official distributed asset | The source records no goorm-distributed type file. Pretendard Variable is the observed face. |
| Declared-only | The source records no declared-but-unused face. |
| License | The source records no font license. Treating Pretendard Variable as an upstream face used by goorm, not a goorm-owned brand asset, is a derived editorial implementation inference from the verified surfaces; it is not goorm-authored or taken from a separately published UI specification, including the published Vapor UI documentation. |
| Outside these captures | Type for goormIDE, goormEDU, goormEXP, goormDEVTH, goormLEVEL, Arkain, EXP, `https://tech.goorm.io`, and `https://blog.goorm.io/design/` remains outside these two captures. |

### Family

- **Current visible UI family:** `Pretendard Variable`, with the declared fallback stack Pretendard / Apple SD Gothic Neo / Noto Sans KR.
- ExtraBold (800) at display sizes, 400 for body.
- Do not substitute a system face for Pretendard Variable and present it as the goorm face. The fallback stack is a fallback. Reading Pretendard as chosen for dense hangul-plus-latin legibility is a derived editorial implementation inference from the verified surfaces; it is not goorm-authored or taken from a separately published UI specification, including the published Vapor UI documentation.

### Type roles

| Role | Font | Size | Weight | Line height | Letter spacing | Notes |
|---|---|---:|---:|---:|---:|---|
| Display Hero | Pretendard Variable | 48px (3.00rem) | 800 | 1.2 | normal | Vapor docs H1, landing headline |
| Display Soft | Pretendard Variable | 48px (3.00rem) | 500 | 1.2 | -0.4px | goorm.co marketing hero (lighter register) |
| Section Heading | Pretendard Variable | 32px (2.00rem) | 700 | 1.3 | normal | Section titles (H2) |
| Nav Item | Pretendard Variable | 14px (0.88rem) | 600 | 1.4 | normal | Top-nav buttons on goorm.co |
| Body | Pretendard Variable | 16px (1.00rem) | 400 | 1.5 | normal | Standard reading text |
| Button | Pretendard Variable | 14px (0.88rem) | 500 | 1.0 | normal | Default button / docs UI label |
| Button Large | Pretendard Variable | 16px (1.00rem) | 500 | 1.0 | normal | Large marketing CTA label |
| Caption / Side-nav | Pretendard Variable | 14px (0.88rem) | 400 | 1.4 | normal | Docs side-nav link, muted meta |

Token-set `use` strings, verbatim: Display Hero `Vapor docs H1 / landing headline, Pretendard ExtraBold`; Display Soft `goorm.co marketing hero, lighter weight`; Section `Section titles (H2)`; Nav `Top-nav items on goorm.co`; Body `Standard reading text, Pretendard`; Button `Default button / docs UI label`; Button Large `Large marketing CTA label`; Caption `Docs side-nav link, muted meta`.

Line heights are unitless ratios in the source token set (`1.2`, `1.3`, `1.4`, `1.5`, `1.0`) and stay ratios here. The source's visible hierarchy table writes Display Hero and Display Soft line height as `~1.2` and Section as `~1.3`; the token-set values without the tilde are the ones carried as tokens.

Badge labels, recorded on the badge components rather than as a ninth type role: 12px / 500 / Pretendard Variable.

### Type rules

Observable in the scale: one family covers display, UI, and body; 48px appears at two weights (800 and 500); 32px is the section size; body is 16px / 400; UI labels are 14px at 500–600; letter-spacing is `normal` except Display Soft at `-0.4px`.

Reading those facts as rules — one family, two registers, with the weight jump as the primary hierarchy signal; two display moods at the same 48px; hangul-first sizing at 16px body and 14px UI; quiet UI weight that never goes bold, so loudness is reserved for headlines — is a derived editorial implementation inference from the verified surfaces; it is not goorm-authored or taken from a separately published UI specification, including the published Vapor UI documentation.

### Assets

- Logo pointer recorded by the source: `https://www.google.com/s2/favicons?domain=goorm.co&sz=128`. This is a favicon-service URL keyed to the domain, not a goorm-hosted brand file; the source supplies no first-party logo asset. Classing that entry as a third-party favicon service is a derived editorial implementation inference from the verified surfaces; it is not goorm-authored or taken from a separately published UI specification, including the published Vapor UI documentation.
- Product screenshots and theme previews stay flat (no shadow) at all sizes. Cards keep the 12px radius and `#e1e1e1` hairline across breakpoints.

<!-- design-md:section components-states -->
## 4. Components & States

### Surface state contract

The nine rows below are the source's state contract. They describe surface- and module-level treatments, not per-control treatments, and they name published copy that this contract carries verbatim. Reading them as the state contract for the captured surfaces is a derived editorial implementation inference from the verified surfaces; they are not goorm-authored or taken from a separately published UI specification, including the published Vapor UI documentation.

| State | Treatment |
|---|---|
| **Empty (no items / first run)** | White canvas. Single Ink (`#262626`) line at body size explaining the empty state, with one Vapor blue (`#2a72e5`) primary CTA to begin. No illustration clutter. |
| **Empty (saved list, none yet)** | Muted Slate (`#5d5d5d`) single line: nothing here yet, plus a path back. Honest and calm. |
| **Loading (content fetch)** | Skeleton blocks on `#f7f7f7` at final dimensions, 8-12px radius. Flat pulse — no shadow shimmer, consistent with the shadow-light system. |
| **Loading (action in progress)** | Inline spinner inside the button; label stays, button stays its color. Never block the whole view. |
| **Error (request failed)** | Inline message in danger red (`#da3944`) on the danger tint (`#ffd8d7`), with a plain-language explanation and a retry. No bare "오류가 발생했습니다". |
| **Error (form validation)** | Field-level message below the input in the danger tone; describes what is valid, not just "필수". |
| **Success (saved / submitted)** | Brief inline confirmation in success green (`#058765`) on the success tint (`#bbecd7`); next-step detail linked below. No celebratory emoji. |
| **Skeleton** | `#f7f7f7` blocks at final dimensions, matching radius, flat pulse. |
| **Disabled** | Faint Grey (`#a3a3a3`) text on a reduced-opacity surface; Vapor-blue actions fade rather than turn grey to preserve brand read. |

### How applicability is decided here

The source declares each component with a primitive type (`button`, `input`, `card`, `tab`, `badge`) and a value set; those types are preserved per component. Applicability below is judged by each control's role, never by whether a visual treatment for that state happens to be recorded: where the source supplies no treatment for an applicable state, the value is omitted and the state stays applicable. `not-applicable` is used only where the control's role makes the state meaningless — a destination CTA that commits no operation in place, or a display element with no action at all — and the reason given is always that semantic one. Where the source supplies no interaction evidence for a container at all, its kind and applicability map are omitted rather than decided.

One evidence boundary matters here. The source records a focus ring in `#2a72e5` on the text field. That is a generic focus observation, which is a different evidence type from a `focus-visible` treatment; the observation is kept on the input's own record and no `focus-visible` row in this section carries a treatment value.

The role-based decision procedure above, every interactive-kind verdict, every applicability verdict, and the reason given for either is a derived editorial implementation inference from the verified surfaces; they are not goorm-authored or taken from a separately published UI specification, including the published Vapor UI documentation. This is not a complete state-coverage claim.

### Primary (Vapor UI) Button

- Role: primary action — Vapor UI primary
- Primitive type: `button` · Kind: interactive
- Domain: Vapor UI product
- Background: `#2a72e5`
- Text: `#ffffff`
- Radius: 8px
- Padding: 0px 16px
- Height: 40px
- Font: 14px / 500 / Pretendard Variable
- Token-set font record: `14px / 500`
- Token-set padding record: `0 16px`
- Token-set use: `Primary action — Vapor UI primary (Save, Public으로 변경, 45 포인트 획득)`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable action control; no treatment carried, see the evidence boundary above |
| disabled | applicable | The surface contract fades Vapor-blue actions rather than turning them grey |
| loading | applicable | The control commits an action (Save, visibility change, point grant), and the state contract puts an inline spinner on the button |
| error | applicable | The control commits an action, and the state contract declares an inline danger message with a retry after a failed request |
| success | applicable | The control commits an action, and the state contract declares an inline success confirmation |

### Secondary (Neutral) Button

- Role: secondary / cancel action
- Primitive type: `button` · Kind: interactive
- Domain: Vapor UI product
- Background: `#e1e1e1`
- Text: `#262626`
- Radius: 8px
- Padding: 0px 16px
- Height: 40px
- Font: 14px / 500 / Pretendard Variable
- Token-set font record: `14px / 500`
- Token-set padding record: `0 16px`
- Token-set use: `Neutral / secondary action (취소, Docs 보러 가기)`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable action control; no treatment carried |
| disabled | applicable | A secondary action can be gated; treatment omitted |
| loading | applicable | Cancel is a commit that can be pending; the state contract puts an inline spinner on the button |
| error | applicable | A committed secondary action can fail; the state contract declares an inline danger message with a retry |
| success | applicable | A committed secondary action can complete; the state contract declares an inline success confirmation |

### Outline Button

- Role: outlined action — rendered via a 1px inset `#c6c6c6` border
- Primitive type: `button` · Kind: interactive
- Domain: Vapor UI product
- Background: `#ffffff`
- Text: `#262626`
- Border: 1px solid `#c6c6c6`
- Token-set border record: `1px solid #c6c6c6`
- Radius: 8px
- Padding: 0px 16px
- Height: 40px
- Font: 14px / 500 / Pretendard Variable
- Token-set font record: `14px / 500`
- Token-set padding record: `0 16px`
- Token-set use: `Outlined action — 1px inset #c6c6c6 border`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable action control; no treatment carried |
| disabled | applicable | An outlined action can be gated; treatment omitted |
| loading | applicable | The control commits an action, and the state contract puts an inline spinner on the button |
| error | applicable | The control commits an action, and the state contract declares an inline danger message with a retry |
| success | applicable | The control commits an action, and the state contract declares an inline success confirmation |

### Marketing CTA (Dark)

- Role: goorm.co marketing primary call-to-action — 도입 문의하기
- Primitive type: `button` · Kind: interactive
- Domain: Marketing
- Background: `#262626`
- Text: `#ffffff`
- Radius: 8px
- Padding: 0px 24px
- Height: 48px
- Font: 16px / 500 / Pretendard Variable
- Token-set font record: `16px / 500`
- Token-set padding record: `0 24px`
- Token-set use: `Marketing primary CTA on goorm.co (도입 문의하기)`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web control; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; no treatment carried |
| disabled | not-applicable | A marketing CTA that leads to a public inquiry destination has no precondition to gate — the meaning of a disabled state is absent from the role, not merely unrecorded |
| loading | not-applicable | The CTA sends the reader to an inquiry destination; it commits no operation in place, so there is no in-progress state on the control itself |
| error | not-applicable | The CTA commits no operation in place, so a failure of that operation cannot be reported on it; failures belong to the destination's own form |
| success | not-applicable | The CTA commits no operation in place, so completion cannot be confirmed on it |

### Text Field

- Role: default text input
- Primitive type: `input` · Kind: interactive
- Domain: Vapor UI product
- Background: `#ffffff`
- Text: `#262626`
- Border: 1px solid `#e1e1e1`
- Token-set border record: `1px solid #e1e1e1`
- Radius: 8px
- Padding: 0px 24px
- Height: 48px
- Font: 16px / 400 / Pretendard Variable
- Token-set font record: `16px / 400`
- Token-set padding record: `0 24px`
- Focus: ring in `#2a72e5` — a generic focus observation, kept here and not promoted onto any `focus-visible` row
- Token-set use: `Text field — 1px inset #e1e1e1, focus ring #2a72e5`
- Recorded example label: "크레딧 개수". Border applied as a 1px inset shadow.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web field; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable field; the recorded generic focus observation is a different evidence class, so no value is carried on this row |
| disabled | applicable | The field can be made unavailable; the surface contract uses Faint Grey (`#a3a3a3`) text on a reduced-opacity surface |
| loading | applicable | The field participates in a submit that can be pending; treatment unresolved |
| error | applicable | Form field; the state contract places a field-level message below the input in the danger tone and forbids a bare "필수" |
| success | applicable | Form field whose submission can complete; the state contract declares an inline success confirmation |

### Content Card

- Role: content card / panel sitting on the `#f7f7f7` surface, no shadow
- Primitive type: `card`
- Domain: Vapor UI product / marketing bands
- Background: `#ffffff`
- Border: 1px solid `#e1e1e1`
- Token-set border record: `1px solid #e1e1e1`
- Radius: 12px
- Token-set use: `Content card / panel sitting on #f7f7f7 surface`
- No kind and no applicability map: the source supplies no interaction evidence for this container, so neither is decided here.

### Docs Tab

- Role: docs "Preview / Code" toggle and section navigation
- Primitive type: `tab` · Kind: interactive
- Domain: Vapor UI docs
- Text (inactive): `#4c4c4c`
- Active: text `#0957c8` + 2px bottom border `#0957c8`
- Radius: 8px 8px 0px 0px
- Font: 14px / 500 / Pretendard Variable
- Token-set font record: `14px / 500`
- Token-set use: `Docs Preview/Code tab + section nav`
- Token-set active record: `text #0957c8 + 2px bottom border #0957c8`
- Active is recorded by the source outside the seven canonical states and is kept as its own observation.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Inactive tabs captured at `#4c4c4c` |
| hover | applicable | Pointer-web control; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; no treatment carried |
| disabled | applicable | A tab target can be unavailable; treatment omitted |
| loading | not-applicable | The tab selects Preview or Code; the panel it switches carries any pending load, and the tab commits nothing itself |
| error | not-applicable | Same role: the failure would belong to the panel, not to the scope selector |
| success | not-applicable | Same role: nothing is committed here that could complete |

### Semantic Badge

- Role: status / default tag
- Primitive type: `badge` · Kind: non-interactive — it renders a status label and the source gives it no control affordance, so a state-applicability map does not apply to it
- Radius: 9999px
- Font: 12px / 500 / Pretendard Variable
- Token-set font record: `12px / 500`
- The token block declares four of these as separate components — `badge-info`, `badge-success`, `badge-danger`, `badge-neutral`, each `type: badge`. They are grouped into one component with four variants here because they differ only in the tint + text pair. That grouping is a derived editorial implementation inference from the verified surfaces; it is not goorm-authored or taken from a separately published UI specification, including the published Vapor UI documentation. Every declared variant keeps its own values below.

| Variant | Background | Text | Token-set use |
|---|---|---|---|
| Info (Default) | `#c6e6ff` | `#0043b3` | `Info / default tag` |
| Success | `#bbecd7` | `#058765` | `Success / positive status` |
| Danger | `#ffd8d7` | `#da3944` | `Error / destructive status` |
| Neutral | `#e1e1e1` | `#262626` | `Neutral count / label` |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

Spacing on these surfaces uses the scale above: 4px, 8px, 12px, 16px, 24px, 32px, 48px. The layout is a centered, generous-margin content column with a sticky top nav (40px-tall nav buttons). Docs use a left side-nav (14px / 400 links) + main content + on-page table of contents. Feature/marketing sections alternate white (`#ffffff`) and tinted grey (`#f7f7f7`) full-width bands. Cards group related controls at 12px radius with a `#e1e1e1` hairline. Radius follows the shape scale: 6px on compact icon buttons; 8px on buttons, inputs, and controls; 12px on cards, search fields, and popovers; 16px on large containers; `9999px` pills on badges; `50%` on avatars.

Reading the whitespace policy as "calm density" — generous vertical rhythm between sections, tight only inside controls — and reading segmentation as flat (background tint and hairlines, not elevation) is a derived editorial implementation inference from the verified surfaces; it is not goorm-authored or taken from a separately published UI specification, including the published Vapor UI documentation.

The breakpoint table below is the source's stated contract. The source records a Tier 1 live inspect of the two surfaces and no measurement at any of these widths, so the table is declared behavior rather than an observation of it. Reading that table as declared behavior rather than a live-width observation is a derived editorial implementation inference from the verified surfaces; it is not goorm-authored or taken from a separately published UI specification, including the published Vapor UI documentation.

| Name | Width | Key Changes |
|---|---|---|
| Mobile | <640px | Single column, nav collapses to a toggle, controls stack full-width |
| Tablet | 640-1024px | Moderate padding, 2-up feature cards, side-nav may collapse |
| Desktop | 1024-1440px | Full layout — sticky top nav, docs side-nav + content + TOC |

Touch targets as the source states them: buttons at 40px (default) and 48px (large CTA); inputs at 48px height with 24px horizontal padding; nav items at 40px with 8px×12px padding.

Collapsing strategy as the source states it: top nav goes from horizontal items + CTA to a hamburger toggle on mobile; docs side-nav collapses to a drawer and TOC drops below content; feature bands go from multi-column to a stacked single column; tinted/white alternating sections keep full-width treatment.

Image behavior as the source states it: product screenshots and theme previews stay flat (no shadow) at all sizes; cards keep the 12px radius and `#e1e1e1` hairline across breakpoints.

<!-- design-md:section content-locales -->
## 6. Content & Locales

Locale: Korean (ko), with English brand lines on the marketing surface. The captured marketing surface pairs Korean and English; Vapor UI docs mix Korean component labels with English docs chrome.

Published strings the source records, carried verbatim:

- Brand line / page title: "Superpowers, for everyone"
- Hero H2: "AX, 구름과 함께 시작해보세요." The source supplies its own English gloss, "Start AX with goorm". Reading that gloss as a reader aid that never replaces the Korean line is a derived editorial implementation inference from the verified surfaces; it is not goorm-authored or taken from a separately published UI specification, including the published Vapor UI documentation.
- TechBlog tagline: "We are creating an ecosystem centered on developer growth."
- Product / nav labels: 제품, 솔루션, 리소스, 채용
- CTAs: 도입 문의하기, 더 알아보기, Docs 보러 가기
- Vapor primary labels: Save, Public으로 변경, 45 포인트 획득
- Vapor secondary labels: 취소, Docs 보러 가기
- Docs tabs: Preview / Code
- Input example: 크레딧 개수
- Named as the generic error to avoid: "오류가 발생했습니다"
- Form-validation word named as insufficient on its own: 필수
- Company name in Korean: 구름

Everything from here to the end of this section is a derived editorial implementation inference from the verified surfaces; it is not goorm-authored or taken from a separately published UI specification, including the published Vapor UI documentation. Reading the voice as encouraging, plain-spoken, and growth-oriented — a developer-experience company that lowers the barrier to "becoming a developer" rather than gatekeeping it — and reading copy as treating the reader as a capable learner who deserves clear tools, not a lead to be pressured, all fall under that qualification, as do the register table and the forbidden-register rule below.

| Context | Tone |
|---|---|
| Hero headlines | Aspirational but grounded. "Superpowers, for everyone." Confident, not hype. |
| Product / nav labels | Plain and functional. "제품", "솔루션", "리소스", "채용". |
| CTAs | Direct, low-pressure. "도입 문의하기", "더 알아보기", "Docs 보러 가기". |
| Docs / developer copy | Precise, example-first, peer-to-peer. Component docs lead with a live preview. |
| Education / community | Mentoring, inclusive. Frames coding as learnable by anyone. |

**Voice samples:**

- "Superpowers, for everyone" — goorm.co page title / brand line.
- "AX, 구름과 함께 시작해보세요." — goorm.co hero H2.
- "We are creating an ecosystem centered on developer growth." — tech.goorm.io tagline.

Forbidden register: gatekeeping or elitist developer-speak, fear-based "you'll fall behind" urgency, undefined jargon left unexplained, exclamation-heavy hype.

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
- per-control keyboard-focus treatment; the source's input record states a `#2a72e5` ring as a generic focus observation only
- hover treatment for every declared control
- control-level disabled, loading, error, and success treatment wherever those states are applicable above
- the interaction behaviour, if any, of the content-card container
- interface values for goormIDE, goormEDU, goormEXP, goormDEVTH, goormLEVEL, Arkain, EXP, `https://tech.goorm.io`, and `https://blog.goorm.io/design/`, which the source names as products or brand-owned sources without attaching computed design values to them
