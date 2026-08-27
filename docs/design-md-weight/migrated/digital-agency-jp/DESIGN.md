# Digital Agency Design System (DADS)

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

The Digital Agency Design System (デジタル庁デザインシステム, DADS) is the official design system of Japan's Digital Agency (デジタル庁), published openly at `design.digital.go.jp/dads/` under CC BY 4.0 with design language, accessibility and usability guidelines, Figma libraries, and ready-to-use HTML and React component snippets. The agency publishes it under a beta label — the live site title is "デジタル庁デザインシステムβ版" and the header carries "v2.14.0". The Digital Agency itself was established on September 1, 2021 to lead the digital transformation of Japan's public sector and to standardise the quality of government digital services. Those are first-party publications and public-record facts as the source records them.

This contract covers two live DADS documentation surfaces observed on 2026-06-17: the DADS homepage at `design.digital.go.jp/` (which redirects to `/dads/`) and the button component page at `design.digital.go.jp/dads/components/button/`. It reconstructs what those two documentation surfaces compute; it is not the official DADS specification, and it does not carry Digital Agency authority. Ministry, agency, and local-government services built with DADS are separate surfaces outside these two captures.

The observed interface layer is restrained: `#ffffff` canvas, near-black `#333333` body text, one blue in two steps (`#0017c1` solid fill, `#00118f` text-on-white), flat grey surfaces `#f2f2f2` and `#e6e6e6`, `#949494` hairlines, `box-shadow: none`, and a Noto Sans JP stack running 17px body at `1.70` line height. Reading that restraint as civic legibility work — design as shared public infrastructure rather than consumer differentiation or persuasion, and reading the openness of CC BY 4.0 and public β versioning as mirroring that civic mission — is a derived editorial implementation inference from the verified surfaces and first-party record; it is not Digital Agency-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

These task formulations are derived editorial implementation inferences from the verified surface purposes and first-party section labels; they are not Digital Agency-authored or a separately published UI specification.

- Search the design-system documentation from the header search box ("検索") on the DADS homepage.
- Move into a published DADS section — はじめに / ガイダンス / 基本デザイン / コンポーネント / リソース / お知らせ — through the header navigation or the homepage navigation-card grid.
- Read a component page and take the published implementation resources — the linked Figma file ("v2.0.0以降のFigmaファイル") and the HTML/React snippets — into a government service build.
<!-- design-md:claim-end -->

### Audience

This audience grouping is a derived editorial implementation inference from the source-backed segments; it is not Digital Agency-authored or a separately published UI specification.

Stakeholder groups only, no individuals: government service teams and ministry developers who build with DADS, and the citizens who use the resulting public services. Those three are the segments the source itself names as publicly observable, and no further group is added. The legacy named biographies are dropped — the source discloses them as fictional archetypes, and no individual persona is promoted here, nor is any archetype's occupation generalized into a stakeholder group.

### Distinctive traits

Selecting and naming the following as the distinctive traits is a derived editorial implementation inference from the verified surfaces; they are not Digital Agency-authored or a separately published UI specification. The values inside them are live-computed observations.

- One blue in two steps: solid fill `#0017c1` for actions, deeper `#00118f` for text-on-white links and headings; no second accent hue appears in the captures.
- Noto Sans JP as the single family across both captured surfaces — no display/body split and no decorative type.
- Near-black `#333333` body text rather than pure black `#000000`.
- Generous CJK leading: 17px body at `1.70` (28.9px computed).
- Flat and shadow-free: `box-shadow: none` across hero, header, navigation cards, and buttons; separation by `#949494` hairlines and `#f2f2f2` / `#e6e6e6` surfaces.
- Restrained radius: 8px on buttons, inputs, and chips; 16px on cards.
- Semantic colour reserved for meaning: error red `#ec0000`, success green `#197a4b`.
- Large targets: 44px header nav item, 48px filled button and search input, 56px outline button.
- Openness as posture: CC BY 4.0 licensing and public β versioning ("v2.14.0") are stated on the surface itself.

### Derived implementation principles

These five items are a derived editorial implementation inference from the verified surfaces; they are not Digital Agency-authored or a separately published UI specification. The source's own ledger classes readings of this kind — for example "one blue, meaning-only colour" and "flat clarity as a rejection of consumer-branding flourish" — as editorial rather than quoted Digital Agency statements.

1. **Accessibility is the baseline, not a feature.** High contrast, large touch targets, and a legible CJK typeface read as non-negotiable. *UI implication:* use Link Blue `#00118f` for text on white, keep targets at 44px and above, and never rely on colour alone to convey meaning.
2. **One blue, meaning-only colour.** A single brand blue carries identity; every other colour must mean something. *UI implication:* use `#0017c1` / `#00118f` for brand and action, and reserve `#ec0000` and `#197a4b` strictly for error and success.
3. **Consistency across every ministry.** The system's value is that a citizen recognises the same patterns everywhere. *UI implication:* reuse the documented components and tokens verbatim; do not invent local variants.
4. **Flat clarity over decoration.** Trust reads as coming from legibility, not visual flourish. *UI implication:* no shadows; separate with hairlines and grey surfaces; keep type and layout calm.
5. **Open and iterated in public.** CC BY 4.0, public versioning, and a β posture make the system improvable by everyone. *UI implication:* design for reuse and forking, and document rationale and accessibility notes alongside every component.

### Avoid

The following avoidances are derived editorial implementation inferences from the verified surfaces; they are not Digital Agency-authored or a separately published UI specification.

- Do not add a second accent hue — blue is the only brand colour in these captures, and colour beyond it must carry meaning.
- Do not use drop shadows for elevation; the captured surfaces are flat and shadow-free.
- Do not use pure black `#000000` for body text — the observed body colour is near-black `#333333`.
- Do not use fill blue `#0017c1` for small text on white where contrast is tight; the observed text-on-white blue is `#00118f`.
- Do not substitute a non-CJK or differently licensed family for the observed Noto Sans JP stack.
- Do not use sharp 0px corners or oversized radii — the observed range is 8px–16px.
- Do not crowd Japanese text with tight line-height; the observed CJK leading is generous.
- Do not use red or green decoratively — in these captures they are semantic only.
- Do not treat these two documentation surfaces as proof of how any ministry, agency, or local-government service built with DADS behaves.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

| Token | Role | Value | Verified use |
|---|---|---|---|
| `primary` | Government Blue | `#0017c1` | Primary action colour: solid fill on the search-submit button (`rgb(0, 23, 193)`), and the 1px border plus text colour of outline buttons |
| `primary-hover` | Government Blue, hover step | `#00118f` | Source-named hover background for the filled button |
| `link` | Link Blue | `#00118f` | Text-on-white links, card headings (H3), and inline link buttons (`rgb(0, 17, 143)`) |
| `canvas` | Pure White | `#ffffff` | Page background, card surfaces, and text on the blue fill |
| `ink` | Ink | `#333333` | Default body and heading text (`rgb(51, 51, 51)`); the dominant foreground on both captured pages |
| `ink-strong` | Ink Strong | `#1a1a1a` | Input field text (`rgb(26, 26, 26)`) |
| `ink-pure` | Pure Black | `#000000` | Occasional maximum-contrast text accent |
| `muted` | Muted | `#666666` | Secondary text and the homepage search-input border (`rgb(102, 102, 102)`) |
| `muted-alt` | Muted Alt | `#767676` | Tertiary / placeholder-level grey (`rgb(118, 118, 118)`) |
| `hairline` | Hairline | `#949494` | Card and container border (`rgb(148, 148, 148)`); the primary separation device in this shadow-free system |
| `surface` | Surface Grey | `#f2f2f2` | Flat tinted surface (`rgb(242, 242, 242)`) for content blocks and code samples |
| `surface-alt` | Surface Alt | `#e6e6e6` | Darker grey surface (`rgb(230, 230, 230)`) for alternating / nested blocks |
| `tint-blue` | Tint Blue | `#e8f1fe` | Soft blue tint (`rgb(232, 241, 254)`) for informational chips and hover backgrounds |
| `tint-blue-selected` | Tint Blue Selected | `#d9e6ff` | Stronger blue tint (`rgb(217, 230, 255)`) for selected / active states |
| `error` | Error Red | `#ec0000` | Error text and destructive indicators (`rgb(236, 0, 0)`) |
| `success` | Success Green | `#197a4b` | Success and confirmation indicators (`rgb(25, 122, 75)`) |
| `on-primary` | On-primary | `#ffffff` | Text on the blue fill |

Three colour characterizations in the source are derived editorial implementation inferences from the verified values rather than Digital Agency-published statements; they are not Digital Agency-authored or a separately published UI specification. First, calling `#767676` the minimum AA-passing grey on white is a contrast reading of the value, not a published threshold. Second, reading the two blues as one contrast strategy — a saturated fill for surfaces and a deeper navy for text-on-white, so link text clears WCAG contrast against white while filled buttons stay vivid — is an explanation of the pair rather than a quoted Digital Agency statement. Third, calling the `#949494` hairline the primary separation device in this shadow-free system is a role reading of the observed border, of the same derived editorial class as the elevation reading below. The verified facts are the values themselves and the elements each was computed on.

### Spacing

Source scale: `xs: 4`, `sm: 8`, `md: 12`, `base: 16`, `lg: 24`, `xl: 32`, `xxl: 48`, `section: 64` — expressed as 4px, 8px, 12px, 16px, 24px, 32px, 48px, and 64px, on an 8px base unit. Card padding measures 24px; header navigation items use 10px / 16px padding.

### Shape

Source scale: `sm: 8`, `md: 16`, `full: 9999`.

- Small (8px): buttons, inputs, chips — the workhorse radius.
- Medium (16px): cards and content containers.
- Full (9999px): pills where used.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow (`none`) | Page background, inline text, most surfaces |
| Tint (Level 1) | `#f2f2f2` / `#e6e6e6` background shift | Block / section separation without elevation |
| Hairline (Level 2) | `1px solid #949494` border | Card and container outlines, dividers |

The source shadow token is `none`, and live inspection recorded `box-shadow: none` across the hero, header, navigation cards, and buttons. Depth and grouping are carried by flat tinted surfaces and thin hairlines; when emphasis is needed the captured system reaches for the blue (`#0017c1` fill, `#00118f` text) or the blue tints (`#e8f1fe`, `#d9e6ff`) instead of elevation.

Both readings in the paragraph above — that depth and grouping are carried by tint and hairline, and that the system reaches for blue instead of elevation when emphasis is needed — and the further reading of the shadowless treatment as a deliberate accessibility-and-performance choice, flat surfaces rendering predictably across the full range of government-citizen devices and avoiding the visual noise of stacked shadows, are derived editorial implementation inferences from the verified observation; they are not Digital Agency-authored or a separately published UI specification. The verified facts are `box-shadow: none` on the inspected elements and the shadow token value `none`.

### Motion

The motion-promotion decision below is a derived editorial implementation inference from the recorded proof boundary; it is not Digital Agency-authored or a separately published UI specification.

The 2026-06-17 live inspection records computed static styles only. The source ledger attributes its token-level claims to that inspection and attributes no source to its motion table, so the legacy duration and easing-curve tables are not promoted as DADS motion tokens; their exact values are retained in provenance for loss accounting.

A motion value may be promoted only after component-specific computed observation establishes all five evidence kinds — transition properties, animation name, duration, easing, and reduced-motion behavior. Until each of those five is observed on the component in question, motion values remain absent here.

### Derived application rules

These rules are a derived editorial implementation inference from the verified surfaces; they are not Digital Agency-authored or a separately published UI specification.

- Use solid `#0017c1` for filled primary actions and for outline-button borders and text.
- Use `#00118f` for text-on-white links and card headings.
- Use the Noto Sans JP stack across every surface reproduced from these captures.
- Use near-black `#333333` for body text instead of pure black.
- Give body text generous line height (`1.70` on 17px) for CJK legibility.
- Separate content with `#949494` hairlines and `#f2f2f2` / `#e6e6e6` grey surfaces rather than shadows.
- Keep radius restrained: 8px on buttons, inputs, and chips; 16px on cards.
- Reserve `#ec0000` and `#197a4b` strictly for error and success meaning.
- Keep touch targets in the observed 44px–56px range.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | DADS is published by the Digital Agency, and the two captured surfaces are its own documentation pages. The source ledger attributes every token-level claim to the 2026-06-17 live inspection; it records no separately published DADS type-token document. |
| Live computed surface-use | `body` computes as `"Noto Sans", "Noto Sans JP", -apple-system, system-ui, sans-serif` with `color: rgb(51, 51, 51)`, `font-size: 17px`, and `line-height: 28.9px` (`1.70`). Headings, navigation, buttons, and inputs compute in the same family. |
| Compact source metadata | The catalog record names the family `Noto Sans JP`. |
| Official distributed asset | The source describes Noto Sans JP as an open-source CJK family; it records no Digital Agency-distributed font asset of its own. |
| License | CC BY 4.0 covers the published DADS material as the source records it. That licence describes the design-system material, not the font file. |
| Outside these captures | Ministry, agency, and local-government service typography sits outside these two documentation captures. |

Characterizing Noto Sans JP as *mandated* across government surfaces so that every one renders identically without font-licensing friction is a derived editorial implementation inference from the verified single-family use; it is not Digital Agency-authored or a separately published UI specification. The verified fact is that one family computes across both captured surfaces.

### Family

- **Current visible UI family:** `"Noto Sans", "Noto Sans JP", -apple-system, system-ui, sans-serif`, as computed on `body`.
- The family is loadable and visibly used on both captured surfaces; it is canonical here only inside those captures.
- Do not substitute a system or fallback stack for a differently claimed family elsewhere.

### Type roles

| Token | Role | Font | Size | Weight | Line height | Notes |
|---|---|---|---:|---:|---:|---|
| `display` | Section Heading (H2) | Noto Sans JP | 32px (2.00rem) | 700 | `1.50` (48px) | Major section titles; live H2 "デジタル庁デザインシステムの構成" |
| `heading` | Page Title (H1) / Card Heading (H3) | Noto Sans JP | 20px (1.25rem) | 700 | `1.50` | Header site/page title; card titles render in Link Blue `#00118f` |
| `body-lg` | Body Large | Noto Sans JP | 17px (1.06rem) | 400 | `1.70` (28.9px) | Default body text, generous CJK line height |
| `body` | Body / UI | Noto Sans JP | 16px (1.00rem) | 400 | `1.50` | UI text, nav links, button labels |
| `nav` | Header nav item | Noto Sans JP | 16px (1.00rem) | 400 | `1.50` | Header navigation items |
| `button` | Button | Noto Sans JP | 16px (1.00rem) | 700 | `1.50` | Button labels, Bold |

### Type direction

These four readings are a derived editorial implementation inference from the verified metrics; they are not Digital Agency-authored or a separately published UI specification.

- **Weight carries hierarchy, not just size.** Headings are Bold (700) while body stays Regular (400), and the step from 16px body to 20px heading is modest.
- **Generous CJK leading.** The 17px body runs at `1.70` (28.9px), giving kanji and kana density room to stay legible.
- **One typeface, every surface.** Noto Sans JP is the sole family in the captures — no display/body split, no decorative type.
- **Civic restraint.** No italics, no condensed weights, no letter-spacing tricks; the type reads as neutral and official.

### Assets

- The reference catalog carries a third-party favicon-service URL as an identity pointer only. Its exact URL stays in provenance and is not promoted as an official distributed logo asset.
- DADS publishes Figma libraries and HTML/React component snippets under CC BY 4.0, and the live homepage links "v2.0.0以降のFigmaファイル". These are first-party published resources as the source records them.
- The legacy record states that Figma and component preview images and diagrams carry no shadow; the recorded `box-shadow: none` observations cover the hero, header, navigation cards, and buttons. Reading the image behavior as consistent with the flat system is a derived editorial implementation inference from those observations; it is not Digital Agency-authored or a separately published UI specification. The legacy claim that this holds at any viewport size is a cross-viewport claim; it stays in the provenance unresolved ledger.

<!-- design-md:section components-states -->
## 4. Components & States

### State evidence boundary

The evidence-boundary and applicability judgments in this section are derived editorial implementation inferences from the verified component roles; they are not Digital Agency-authored or a separately published UI specification. They classify Core §4.4 meaning only and do not promote an unmeasured visual treatment.

The 2026-06-17 inspection records default computed styles, plus four source-named treatments: a hover background for the filled button, a hover tint for the outline button, a focus border for the text input, and an active treatment for the header navigation item. No wider interaction capture is recorded. `default` and `focus-visible` stay applicable for every interactive primitive; applicability follows component meaning, and absence of an observation is never a `not-applicable` reason. State coverage is not claimed complete.

The source records the input's focus treatment as a generic `Focus` observation. A generic focus record is a different evidence class from `focus-visible`, so the `focus-visible` rows below keep applicability and omit a treatment value, while the source's own generic focus observation is preserved separately in that component's record.

The legacy §14 state recipes are preserved at the end of this section as derived editorial guidance rather than measured state evidence; they supply no visual treatment to the applicability tables.

### Filled button (primary)

- Source token / primitive type: `button-filled` / button
- Kind: interactive
- Background: `#0017c1`; text: `#ffffff`
- Radius: 8px; padding: 8px 16px; height: 48px
- Font: 16px / 700 Noto Sans JP
- Source-named hover: `#00118f` background
- Use: primary filled action — search submit ("検索"), key CTAs

The applicability judgments for this component are derived editorial implementation inferences from its verified role; they are not Digital Agency-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured filled-button treatment on both pages |
| hover | applicable | Pointer-web button; the source-named `#00118f` background is preserved |
| focus-visible | applicable | Interactive button; visual treatment omitted |
| disabled | applicable | A submit control can be unavailable; visual treatment omitted |
| loading | not-applicable | The source places fetch progress in the content area as skeleton or in-place progress, not on the submitting control |
| error | not-applicable | Request and validation failure are presented by the inline message and the field-level error text, not by this control |
| success | not-applicable | Completion is presented by a separate confirmation message, not by this control |

### Outline button (secondary)

- Source token / primitive type: `button-outline` / button
- Kind: interactive
- Background: `#ffffff`; text: `#0017c1`; border: `1px solid #0017c1`
- Radius: 8px; padding: 12px 16px; height: 56px
- Font: 16px / 700 Noto Sans JP
- Source-named hover: `#e8f1fe` background tint
- Use: secondary action — section anchor links ("ヘッダーコンテナ: 概要")

The applicability judgments for this component are derived editorial implementation inferences from its verified role; they are not Digital Agency-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured outline-button treatment on the button component page |
| hover | applicable | Pointer-web button; the source-named `#e8f1fe` tint is preserved |
| focus-visible | applicable | Interactive button; visual treatment omitted |
| disabled | applicable | The control can be unavailable; visual treatment omitted |
| loading | not-applicable | A section-anchor action moves the reader rather than presenting its own progress |
| error | not-applicable | A section-anchor action does not itself present validation failure |
| success | not-applicable | A section-anchor action does not itself present completion feedback |

### Text link button

- Source token / primitive type: `button-text` / button
- Kind: interactive
- Text: `#00118f`
- Font: 17px / 400 Noto Sans JP
- Use: inline text link button (e.g. "v2.0.0以降のFigmaファイル")

The applicability judgments for this component are derived editorial implementation inferences from its verified role; they are not Digital Agency-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured inline link treatment on the homepage |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive button; visual treatment omitted |
| disabled | applicable | The control can be unavailable; visual treatment omitted |
| loading | not-applicable | A resource link navigates rather than presenting its own progress |
| error | not-applicable | A resource link does not itself present validation failure |
| success | not-applicable | A resource link does not itself present completion feedback |

### Text input / search box

- Source token / primitive type: `input-text` / input
- Kind: interactive
- Background: `#ffffff`; text: `#1a1a1a`; border: `1px solid #666666`
- Radius: 8px; padding: 0 16px, with 48px left padding when the icon is present; height: 48px
- Font: 16px / 400 Noto Sans JP
- Source-recorded focus treatment: blue `#0017c1` border, recorded as a generic focus observation rather than as a `focus-visible` capture
- Use: search box and standard text fields

The applicability judgments for this component are derived editorial implementation inferences from its verified role; they are not Digital Agency-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured default field treatment on the homepage |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Interactive input; the source's generic focus record is a different evidence class, so no treatment value is promoted in this row |
| disabled | applicable | A form field can be unavailable; visual treatment omitted |
| loading | not-applicable | The source places fetch progress in the content area; the field itself does not present submission progress |
| error | applicable | Field validation can fail; the source carries the message colour on the field-level error indicator |
| success | applicable | Field validation can succeed; visual treatment omitted |

### Navigation card

- Source token / primitive type: `card-canvas` / card
- Kind: interactive — the sibling proof records the captured navigation card as an `A` (anchor) element
- Background: `#ffffff`; text: `#333333`; border: `1px solid #949494`
- Radius: 16px; padding: 24px; shadow: none
- Heading inside the card: Link Blue `#00118f`
- Use: content navigation card (はじめに / ガイダンス / 基本デザイン)

The applicability judgments for this component are derived editorial implementation inferences from its verified role; they are not Digital Agency-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured card treatment on the homepage grid |
| hover | applicable | Pointer-web anchor; visual treatment omitted |
| focus-visible | applicable | Interactive anchor; visual treatment omitted |
| disabled | applicable | A navigation entry point can be unavailable; visual treatment omitted |
| loading | not-applicable | A content navigation card links onward rather than presenting its own progress |
| error | not-applicable | A content navigation card does not itself present validation failure |
| success | not-applicable | A content navigation card does not itself present completion feedback |

### Header navigation item

- Source token / primitive type: `nav-link` / tab
- Kind: interactive
- Text: `#333333`; background: `#ffffff`
- Font: 16px / 400 Noto Sans JP; padding: 10px 16px; height: 44px
- Source-named active treatment: text `#00118f` plus a 2px bottom border `#0017c1`
- Use: top horizontal header navigation (はじめに / ガイダンス / 基本デザイン / コンポーネント / リソース / お知らせ)

The applicability judgments for this component are derived editorial implementation inferences from its verified role; they are not Digital Agency-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured navigation treatment on the homepage header |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Interactive tab; visual treatment omitted |
| disabled | applicable | A navigation item can be unavailable; visual treatment omitted |
| loading | not-applicable | Section selection does not itself carry loading presentation |
| error | not-applicable | Section selection does not itself present validation failure |
| success | not-applicable | Section selection does not itself present completion feedback |

### Informational chip

Classifying this chip as non-interactive is a derived editorial implementation inference from its verified label role; it is not Digital Agency-authored or a separately published UI specification.

- Source token / primitive type: `chip-blue` / badge
- Kind: non-interactive
- Reason: a selected / informational tint label, not an action control
- Background: `#e8f1fe`; text: `#00118f`; radius: 8px
- Font: 16px / 400 Noto Sans JP

### Field-level error indicator

Classifying this indicator as non-interactive is a derived editorial implementation inference from its verified message role; it is not Digital Agency-authored or a separately published UI specification.

- Source token / primitive type: `error-text` / badge
- Kind: non-interactive
- Reason: message text presented by a field's error state, not an action control
- Text: `#ec0000`
- Font: 16px / 400 Noto Sans JP

### Legacy derived state guidance

These state recipes are a derived editorial implementation inference from the verified surfaces; they are not Digital Agency-authored or a separately published UI specification. No measured interaction evidence is assigned to them, and they do not feed the applicability tables above.

| State | Legacy guidance retained without promotion to observed treatment |
|---|---|
| Empty (no results) | White canvas. Single Ink (`#333333`) line at body size explaining no matching results, with one filled blue (`#0017c1`) action to adjust the query. No decorative illustration. |
| Empty (no saved items) | Muted (`#666666`) single line stating nothing is saved yet, plus a plain path back. Calm and factual. |
| Loading (content fetch) | Skeleton blocks on `#f2f2f2` tinted surface at final dimensions, 16px radius. Flat pulse — no shadow shimmer, consistent with the shadowless system. |
| Loading (in-place) | Inline progress; previous content stays visible. No full-screen blocking. |
| Error (request failed) | Inline message in Error Red `#ec0000` with a plain-language explanation of what happened and what to do next. Never a bare generic error. |
| Error (form validation) | Field-level message in `#ec0000` below the input; input border shifts to indicate the error. Describes what is valid, not just "必須" (required). |
| Success (action completed) | Brief confirmation in Success Green `#197a4b` with next-step detail linked below. No celebratory flourish. |
| Skeleton | `#f2f2f2` blocks at final dimensions, 16px radius, flat pulse. |
| Disabled | Muted Alt (`#767676`) text on a reduced-contrast surface; the affordance is clearly non-interactive while remaining readable. |
| Focus | Visible focus ring in government blue `#0017c1` on every interactive element — the source states this as a hard accessibility requirement. |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The layout grouping and portability judgments below are derived editorial implementation inferences from the verified desktop evidence and the recorded proof boundary; they are not Digital Agency-authored or a separately published UI specification. The measurements inside them are live-computed observations.

- Spacing: 8px base unit, scale 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px. Card padding lands at 24px as measured; header navigation items use 10px / 16px padding.
- Container: a centered content column with a fixed header carrying the title, the navigation, and the search box.
- The homepage groups system entry points as a grid of bordered navigation cards (16px radius, `#949494` hairline).
- Sections separate by flat grey surfaces (`#f2f2f2`, `#e6e6e6`) and hairlines rather than by elevation.
- Component documentation pages use a left rail plus content layout.
- Radius in layout terms: 8px for buttons, inputs, and chips; 16px for cards and content containers; 9999px for pills where used.
- Exact captured control targets: 44px header navigation item, 48px filled button and search input, 56px outline button. The search input carries a 48px icon affordance.
- Whitespace direction: clarity over density for scannable government content, flat segmentation by tint and hairline instead of shadow, and touch-first sizing in the 44px–56px range.
- Both captures are desktop-only. Breakpoint widths, collapse behavior, mobile navigation, and cross-breakpoint radius retention are retained in the provenance unresolved ledger as legacy claims rather than promoted to a responsive contract here.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The observed content locale is Japanese (ja-JP): both captures were taken with a ja-JP locale and every observed string is Japanese. These captures establish no other locale's behavior.

The register characterization and the tone directions below are derived editorial implementation inferences from verified first-party language; they are not Digital Agency-authored or a separately published UI specification. The verbatim strings beneath them are agency-published site text.

DADS copy reads as plain, neutral, and accessible — the register of a public institution that must be understood by every citizen regardless of digital fluency. Section labels are direct nouns, instructions favour clarity over personality, and the system documents itself without marketing tone, superlatives, or exclamation.

| Context | Direction |
|---|---|
| Section / nav labels | Direct nouns. "はじめに", "ガイダンス", "コンポーネント", "リソース". |
| Component docs | Explanatory and precise — what the component is, when to use it, accessibility notes. |
| CTAs / actions | Plain imperatives. "検索" (Search). No hype. |
| Accessibility guidance | Concrete and rule-based — states the requirement plainly. |
| Versioning / notices | Factual. "デジタル庁デザインシステムβ版 v2.14.0" — states the version and beta status openly. |

**Verbatim first-party strings, live 2026-06-17:**

- "デジタル庁デザインシステムβ版" — site title (`document.title`), stating beta status openly.
- "デジタル庁デザインシステムの構成" ("Composition of the Digital Agency Design System") — section H2.
- "本ウェブサイトのコンテンツ" ("Contents of this website") — section H2.

**Forbidden register.** The following exclusion list is a derived editorial implementation inference from the observed language; it is not Digital Agency-authored or a separately published UI specification: marketing superlatives, emotional appeals, exclamation-heavy hype, undefined jargon, and anything that reads as promotional rather than informational.

<!-- design-md:section governance -->
## 7. Governance

The governance judgments in this section are derived editorial implementation inferences of this reconstruction; they are not Digital Agency-authored or a separately published UI specification.

<!-- design-md:claim authority kind=evidence-backed-reconstruction lang=en -->
### Authority

This document is an evidence-backed reconstruction, not authority for an unrelated target project.
<!-- design-md:claim-end -->

It reconstructs two live DADS documentation surfaces observed on 2026-06-17 and is not the official DADS specification. DADS itself is an officially published government design system under CC BY 4.0; that publication authority belongs to the Digital Agency and does not transfer to this reconstruction.

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

- measured breakpoint widths, reflow behavior, mobile navigation, and collapse sequence
- component-specific hover, focus-visible, pressed, disabled, loading, error, and success visual treatments beyond the four source-named hover, focus, and active colours
- verified transition properties, animation names, durations, easings, and reduced-motion behavior
- the DADS-published token names and values as distinct from these live computed observations
- official distributed logo or font asset authority beyond the catalog identity pointer
- ministry, agency, and local-government service surfaces built with DADS
