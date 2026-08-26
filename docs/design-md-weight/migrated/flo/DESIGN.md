# FLO Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

FLO (플로) is a South Korean music streaming platform. The reviewed material records it as operated by Dreamus Company and describes it as offering 120 million tracks with deep personalization and AI-driven discovery; those are the company-facing claims the material carries, recorded here as claims it makes rather than as findings of this record.

This contract covers the 2026-06-03 reading of FLO's own published web source — the homepage at `https://www.music-flo.com` and the production CSS bundle served from `cdn.music-flo.com`. The color, type, geometry, elevation, and component values below stay attached to that web source. They are not a specification for the FLO mobile app, whose Korean App Store listing the reviewed material also names among its sources without attaching a measured value to it, and they are not a specification for RE;CORD, FLO Studio, or FLO Shop, all of which the same material names as separate products with no measured value attached to any of them.

Those source files were read as published text rather than as a rendered page, so the record holds declared CSS rules and markup and no rendered, interaction, or viewport observation. The token block in the reviewed material is marked as derived from that material's own prose and dated 2026-06-09, six days after the reading; both dates are kept as recorded.

The following characterization of the interface is a derived editorial implementation inference from the verified surfaces; it is not FLO-authored or a separately published UI specification. The captured layer reads as clean, luminous, and quietly energetic: a pure electric blue (`#3f3fff`) punches through an overwhelmingly white canvas, anchoring interactive elements — buttons, progress bars, active tab indicators, and checked inputs — with a single, unwavering brand hue; the surrounding palette is almost entirely achromatic, with near-black body text on white surfaces, mid-greys for metadata, and a barely-there light grey for resting chips and dividers; that restraint keeps the music and cover art front and center; a muted rose-pink (`#ff4d78`) appears only in error or warning states, creating a deliberate secondary signal language; and the product feels like a clean audio studio — cool-toned, confident, and built for extended listening sessions without visual fatigue.

The brand account below is likewise a derived editorial interpretation carried in the reviewed material; it is not FLO-authored or a separately published brand statement, and the material attaches no source marker to it. In that account FLO launched in December 2018 as SK Telecom's answer to a market dominated by chart-first streaming services, put personal taste on the home screen from day one as a deliberate counterpoint to the chart-centric paradigm of Korean music streaming, and took its name as a promise that music flows the way water does. The service was spun into Dreamus Company as an independent entity in 2021, inheriting SK Telecom's scale and infrastructure. The platform then expanded from streaming into a fan ecosystem — RE;CORD, described there as an automatic musical memoir organized by date and genre; FLO Studio, described as an artist collaboration space; and in 2026 FLO Shop, described as global music merchandise — with each expansion anchored to the premise that music is personal. The same qualification covers the closing readings of that account: that FLO sits at the intersection of music, fan culture, and algorithmic empathy, and that its restrained, blue-anchored, content-first design language expresses the same philosophy in pixels — get out of the way of the music, and let the listener find themselves in it.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=5 lang=en -->
### Primary tasks

- Play and steer audio from the player bar pinned to the bottom of the viewport and from the full-screen player that overlays it, including the seek bar and the volume slider.
- Browse albums in the 175×175px thumbnail grid.
- Search the catalog — the reviewed material records a search-bar type role, a header search control, and a no-search-results empty state.
- Move between sections with the main navigation tabs.
- Buy or review a subscription through the voucher cards and the purchase confirmation that follows.
<!-- design-md:claim-end -->

### Audience

The reviewed material presents four archetypes and marks every one of them illustrative. No name, age, city, commute, listening habit, or expectation from them is carried forward, and no demographic or behavioral finding is asserted here.

What remains is surface-level: the product is Korean-language and consumer-facing, its voice guidance addresses listeners in conversational Korean, and its interface is organized around a persistent player, an album grid, main navigation tabs, and a subscription path.

### Distinctive traits

- `#3f3fff` is recorded against every interactive element named — CTA buttons, the progress fill, the active tab underline, and checked-state labels — with `#2f2fae` on hover or press and `#1a1a86` on the pressed or active step.
- `#ff4d78` is recorded only against error, warning, and incorrect-input states.
- The surround is achromatic in the values themselves: `#ffffff` canvas, `#181818` and `#333333` text, `#989898` metadata, `#ebebeb` hairlines, `#f5f5f5` resting chips, `#323232` unfilled track.
- One family fills both the sans and the mono role: Pretendard Variable.
- One line height covers all eight type roles: 1.20.
- Text inputs carry a bottom border only — 58px tall, `1px solid #ebebeb`, radius `0px`.
- Depth is two shadow steps and two scrims: `rgba(0,0,0,0.10) 0px 4px 20px 0px`, `rgba(0,0,0,0.20) 0px 6px 15px 0px`, `rgba(0,0,0,0.50)`, `rgba(0,0,0,0.80)`.

### Principles

These 5 items are a derived editorial implementation inference from the verified surfaces; they are not FLO-authored or a separately published UI specification. They read a product stance off the interface and assert nothing about how FLO actually recommends, ranks, licenses, or sequences music.

1. **Taste is personal, not statistical.** FLO's recommendations lead with the individual listener's history, not chart position. *UI implication:* Home feed surfaces personal recommendations above any global trending section; personalized sections appear before editorial ones in the visual hierarchy.
2. **Flow without friction.** The brand name is a metaphor for effortless continuity — one song leading naturally to the next. *UI implication:* Autoplay and session-continuation are on by default; every disruptive confirmation dialog must earn its place; bottom-sheet modals slide up rather than hard-cut.
3. **Content leads, chrome follows.** Album artwork and track identity are the primary visual elements on every screen. *UI implication:* Brand blue appears only on interactive affordances; large areas of white and near-white keep the interface from competing with cover art.
4. **Clarity at every state.** Users should always know what is playing, what will play next, and what action the system expects of them. *UI implication:* The player bar is persistent; active/selected states use high-contrast blue with no ambiguity; error states switch to pink immediately with an explanatory label.
5. **Small moments of delight, not spectacle.** Animations are quick and purposeful — opacity fades at 0.3s, transforms at 0.25s — reinforcing response rather than demanding attention. *UI implication:* Motion budget is conservative; never block user intent with decorative animation; transitions serve orientation, not entertainment.

### Capture-bound application

These 6 items are a derived editorial implementation inference from the verified surfaces; they are not FLO-authored or a separately published UI specification.

- Use `#3f3fff` exclusively for the single primary action on any given screen.
- Apply Pretendard at 14–15px for all body copy to maintain readability across light and dark surfaces.
- Keep album artwork as the dominant visual; let cover art supply color temperature to each screen.
- Use pill shapes (radius 15–22px) for purchase and streaming action buttons; use square-cornered (radius 5px) for utility actions.
- Reserve `#ff4d78` strictly for error, warning, and incorrect-input states.
- Maintain bottom-border-only treatment on text inputs to preserve a clean, understated form aesthetic.

### Avoid

These 5 boundary rules are read off the captured surfaces and are a derived editorial implementation inference from them; they are not FLO-authored or a separately published UI specification.

- Don't apply blue to more than one CTA per screen — dilutes the click-priority hierarchy.
- Don't mix the indigo variant (`#525cfd`) and the primary blue (`#3f3fff`) on adjacent interactive elements.
- Don't use drop shadows on flat list rows — elevation is reserved for floating layers only.
- Don't reduce body text below 12px — smallest label size in production is 12px.
- Don't apply border-radius above 22px to rectangular content cards — pill radius is reserved for action chips and buttons.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

- **Brand Blue** (`#3f3fff`): primary CTA buttons, active tab underline, progress fill, checked-state labels.
- **Blue Pressed / Hover** (`#2f2fae`): darkened blue on button press.
- **Blue Pressed** (`#1a1a86`): pressed/active primary button state. Recorded as its own role beside `#2f2fae`; the two are kept apart rather than merged into one press value.
- **Blue Mid (Player)** (`#576aff`): mini-player seek bar fill.
- **Blue Light** (`#7286ff`): lighter tint used on selected items, soft accents.
- **Indigo Variant** (`#525cfd`): voucher card surfaces and secondary action text.
- **Error / Alert Pink** (`#ff4d78`): error border, incorrect input highlight.
- **White** (`#ffffff`): primary surface, button text on blue.
- **Body Text** (`#181818`): headings, input values, primary labels. The role name and its use disagree inside the reviewed material — the token record files this value under a heading role while the palette list names it Body Text; both the name and the use are preserved as written.
- **Secondary Text** (`#333333`): standard body copy, links (default).
- **Tertiary / Meta** (`#989898`): timestamps, secondary metadata.
- **Placeholder** (`#c4c4c4`): input placeholder text.
- **Divider** (`#ebebeb`): input underlines, hairline rules.
- **Surface Grey** (`#f5f5f5`): inactive tab/chip backgrounds.
- **Track Grey** (`#323232`): player progress track (unfilled).

Two further values are recorded only against a specific component and are kept there rather than promoted to a general role: the voucher card surface `#f4f5f8` and the inactive tab text `#6d6d6d`.

### Evidence-domain boundary

Three evidence domains meet in this contract and are kept apart.

The published web source — the homepage markup and FLO's production CSS bundle — is where every color, type, geometry, elevation, and component value here comes from. Those values stay attached to that web source.

FLO's Korean App Store listing is a separate domain. The reviewed material names it among its sources and attaches no color, type, geometry, or component value to it. Nothing measured on the web source describes the app that listing distributes, and nothing on that listing may be read as evidence for a web-source value.

The brand narrative, the principles, the voice guidance, the responsive account, and the state contract are the reviewed material's own prose. Where they carry no source marker, that is stated at the point of use rather than repaired.

FLO-published product language — the tagline, the empty-state and confirmation labels, and the product names RE;CORD, FLO Studio, and FLO Shop — is published copy, recorded as copy. No value in this contract describes a catalog size, a recommendation behavior, a licensing arrangement, or a subscription term, and none may be read as evidence about one.

### Spacing

The scale is recorded without units: `xs` 5, `sm` 9, `md` 14, `base` 15, `lg` 25, `xl` 50, `section` 60.

The layout account states the vertical rhythm anchors as 15px for body and 25–50px for section gutters.

### Shape

Recorded radius scale, also without units: `sm` 5, `md` 8, `lg` 16, `full` 9999.

Component radii recorded with units: 5px on the standard blue CTA, 15px on the small pill, 22px on the medium pill, 16px on the ghost outline chip, `0px` on the text input, 8px on the voucher cards, 6px on the album thumbnail, and a 2px bottom border on the active tab.

A restatement elsewhere in the reviewed material gives 20px as the pill radius. It disagrees with the 15px, 22px, and 16px the component records carry. Both are preserved and neither is selected.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Level 0 (flat surface) | No shadow | List items, inactive tabs, default cards |
| Level 1 (floating card) | `box-shadow: 0 4px 20px 0 rgba(0,0,0,0.10)` | Album cover hover, dropdown menus, settings panels |
| Level 2 (modal / sheet) | `box-shadow: 0 6px 15px 0 rgba(0,0,0,0.20)` | Popup overlays, player download modal |
| Overlay scrim | `rgba(0,0,0,0.50)` | Modal backdrop |
| Dark scrim (player art) | `rgba(0,0,0,0.80)` | Full-screen player overlay behind controls |

The token record states the same two shadows in longhand: floating `rgba(0,0,0,0.10) 0px 4px 20px 0px` and modal `rgba(0,0,0,0.20) 0px 6px 15px 0px`.

### Motion

Duration scale as recorded:

| Step | Value | Use |
|---|---|---|
| Instant | 0ms | State changes with no visual transition (checked state icon swap) |
| Fast | 150ms | Micro-interactions: tooltip appear, focus ring appear |
| Standard | 200–250ms | Most UI transitions: `transform 0.25s ease-in`, fade overlays |
| Deliberate | 300ms | Opacity fade on full player overlay: `opacity 0.3s` |
| Entrance | 300ms + 150ms delay | Slide-in panel: `transform 0.15s ease-in` with `0.3s` delay for stagger |

Named easing as recorded, both of them CSS keywords rather than curve values:

- `ease-in` — exits and element entrances (elements accelerate into resting position).
- `linear` — scrollbar opacity: `opacity 0.2s linear` — neutral, non-physical.

Motion rules as recorded:

- Player seek bar fill uses continuous transition so that progress feels live, not stepped.
- Volume slider uses the same `#3f3fff` fill with identical easing as the playback progress bar — consistent system language.
- Modal bottom-sheets translate on Y axis; they do not scale or fade — orientation is preserved through directional motion.
- Never autoplay video or looping animation in the browse feed — audio is the product; visual motion competes with listening attention.

The step names, the assignment of each duration to a use, and the four motion rules are a derived editorial implementation inference from the verified surfaces; they are not FLO-authored or a separately published motion specification. The individual declarations quoted inside them — `transform 0.25s ease-in`, `opacity 0.3s`, `transform 0.15s ease-in`, `opacity 0.2s linear` — are recorded in CSS declaration form and are kept in that form.

Reduced-motion behavior is unresolved: the reviewed material records no reduced-motion rule anywhere. Promoting a reduced-motion behavior, an exact easing curve, a transition-property list, or an animation name to a FLO motion token requires a per-component computed observation of the transition properties, the animation name, the duration, the easing, and the reduced-motion behavior; a single named curve or duration is not that gate.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | The reviewed material records no FLO-published typography document. The family and the stack below come from the product's own declared CSS. |
| Declared surface-use | The recorded declaration is `font-family: 'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, Roboto, 'Segoe UI', Helvetica, sans-serif`. |
| Official distributed asset | No FLO-exclusive or FLO-distributed type family is established in this pass. |
| Ownership and license | The reviewed material records no statement that FLO owns, licenses, or distributes Pretendard, and it records no license text for the family. None is supplied here. |
| Outside this reading | Type on the FLO mobile app, on RE;CORD, FLO Studio, and FLO Shop, and on the App Store listing is outside this web-source reading. |

### Family

- **Sans:** `Pretendard Variable`
- **Mono:** `Pretendard Variable` — the token record assigns the same family to both roles, and that is preserved rather than resolved into a separate monospace face.
- **Full declared stack:** Pretendard Variable → Pretendard → -apple-system → BlinkMacSystemFont → Roboto → Segoe UI → Helvetica → sans-serif.
- The stack after Pretendard is a fallback chain, not the brand face. Do not present `-apple-system`, Roboto, Segoe UI, or Helvetica as FLO type, and do not substitute Pretendard for an unobserved family on another surface.

### Type roles

Sizes are given here in the unitless form the token record uses.

| Role | Size | Weight | Line height | Use |
|---|---:|---:|---:|---|
| Display Large | 34 | 700 | 1.20 | Hero callouts, large feature text |
| Display Small | 24 | 700 | 1.20 | Promotional copy, chart numbers |
| Section Title | 18 | 600 | 1.20 | Major section headings |
| Subhead | 16 | 600 | 1.20 | Section headers, modal titles |
| Body Primary | 15 | 400 | 1.20 | Track titles, main UI copy |
| Body | 14 | 400 | 1.20 | Metadata, list items |
| Label | 13 | 500 | 1.20 | Secondary labels, nav items |
| Small | 12 | 400 | 1.20 | Timestamps, tags, chip labels |

The type rules restate six of those sizes with units — 18px, 16px, 15px, 14px, 13px, 12px — and give the two display roles as ranges instead: Display Large as 30–38px and Display Small as 22–28px. Both statements of each display size are preserved rather than reconciled. Body Primary is likewise stated twice, as 400 in the token record and as 400–500 in the type rules, and both are kept.

Two further roles are recorded outside the eight-row scale: input text at 15px / 400 in `#181818`, and the search bar at 28px / 700.

Line height is recorded as 1.2 by default, with labels and button text using an explicit line height matching the component height. The ratio is kept as a ratio — 1.20 in the table above — rather than converted to a fixed pixel value, because the ratio is what the scale states.

### Assets

- Album artwork and cover art are first-party catalog content. Do not replace them with invented brand-color decoration.
- The catalog logo entry is a third-party favicon proxy — `https://www.google.com/s2/favicons?domain=music-flo.com&sz=256` — rather than a captured first-party FLO mark, and it is recorded on those terms.
- The reviewed material establishes no other first-party FLO image, icon, or illustration asset, and none is substituted here.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The 2026-06-03 reading covered FLO's published homepage markup and its production CSS bundle, read as source text rather than as a rendered page. The token block records seven components; the component section describes nine, adding the medium pill and the album thumbnail, and all nine are declared below. Several carry the rule identifier the product itself uses. Alongside the resting appearances, the material records hover, pressed, focus, error, valid, and placeholder appearances against specific components. It holds no rendered-DOM measurement, no interaction event, and no viewport observation.

A declared interactive component still closes Core §4.4 applicability by control meaning, not by evidence completeness. `default` and `focus-visible` apply. A missing appearance omits the visual treatment only; it is never a `not-applicable` reason. Where a canonical state carries no meaning for a control's role, it is marked `not-applicable` with that semantic reason. State coverage is not complete here.

The reviewed material records a `Focus` appearance for the text field and a focus-ring timing in the motion scale. Neither names `focus-visible`, so the `Focus` appearance is kept as its own named appearance on the component that carries it, and no `focus-visible` row in this section carries a treatment.

The seven canonical states are the only ones any component declares here. The reviewed material records no additional playback-condition state for any control, and none is introduced.

### Source state contract

The state contract as recorded, preserved in full. Some of its values restate what the component records also carry — the `#ff4d78` error border and, in the disabled rows, the `#ebebeb` bottom border — and the two disabled rows are written in CSS declaration form. Beyond those restatements the rows carry no marker tying them to a declared rule, and reading them as the system's state behavior is a derived editorial implementation inference from the verified surfaces; it is not FLO-authored or a separately published state specification. The listening and purchase situations they name — a listener with no history, a search returning nothing, a playback failure, a completed purchase — are editorial scenarios written into this contract, not statements about FLO's actual catalog, playback, or billing behavior.

| State | Treatment |
|---|---|
| **Empty (no music history)** | Soft illustration with prompt text; primary blue CTA "지금 음악 찾기" (Find music now); no error language |
| **Empty (no search results)** | Centered message at 16px/600 with secondary suggestion to try broader terms; zero shadows or borders to avoid visual noise |
| **Loading (track list)** | Skeleton rows — grey `#ebebeb` bars at content widths, animated shimmer; no spinner overlay |
| **Loading (player artwork)** | Album art placeholder in `#f5f5f5` with rounded corners matching the 6px radius; audio begins before art resolves |
| **Error (network, playback failed)** | Pink `#ff4d78` inline label below the affected control; retry button in outline style with `#3f3fff` text; no full-screen block unless unrecoverable |
| **Error (input validation)** | Bottom border switches to `#ff4d78`; helper text appears in `#ff4d78` at 12px below the field |
| **Success (purchase complete)** | Confirmation screen with checkmark icon in `#3f3fff`; message at 18px/600; secondary action to "내 구독 보기" (View my subscription) |
| **Skeleton (browse feed)** | Fixed-dimension grey blocks at album thumbnail proportions (175×175px) with 6px radius; staggered fade-in on resolution |
| **Disabled (button)** | `opacity: 0.2` on the base `#3f3fff` (no color change); pointer-events removed |
| **Disabled (input)** | `color: rgba(59,59,59,0.3); background-color: hsla(0,0%,94%,0.3)`; border-bottom remains at `#ebebeb` |

### Primary Blue CTA — `btn_bg_blue_s`

- Role: the standard blue call to action
- Kind: interactive
- Type: button
- Background: `#3f3fff`
- Text: `#ffffff`
- Height: 36px
- Padding: 0 15px
- Radius: 5px
- Font: 14px / 400
- Large variant, recorded under the rule name `btn_bg_error_b base`: background `#3f3fff`, text `#ffffff`, height 62px, padding 0 92px, font 18px / 400
- Named appearances: Hover / Pressed — background `#2f2fae`, text `#ffffff`; Pressed / Active — background `#1a1a86`, text `#ffffff`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded with its background, text, height, padding, radius, and font |
| hover | applicable | Recorded: the darkened blue named above |
| focus-visible | applicable | Keyboard-focusable control; the recorded focus evidence is a different kind, so no treatment is promoted into this row |
| disabled | applicable | The state contract records a disabled treatment for this control's blue base: `opacity: 0.2`, pointer-events removed |
| loading | applicable | The reviewed material records it as the standard blue call to action and reserves the brand blue for the single primary action on a screen; an action committed here runs and can be pending on the control that starts it. Visual treatment omitted |
| error | applicable | The same committed operation can fail; the state contract records an inline failure label and a retry control for that path. Visual treatment omitted |
| success | applicable | A control that commits an action can confirm its outcome. The reviewed material puts the purchase confirmation on a separate screen rather than on the control, so no treatment is promoted here |

### Small Pill Button — `btn-round`

- Role: recorded as a small round action button
- Kind: interactive
- Type: button
- Background: `#3f3fff`
- Text: `#ffffff`
- Height: 28px
- Padding: 0 12px
- Radius: 15px
- Font: 12px / 500

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded with its background, text, height, padding, radius, and font |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-focusable control; the recorded focus evidence is a different kind, so no treatment is promoted into this row |
| disabled | applicable | The state contract's disabled treatment is written for a button on the blue base, which is this control's base |
| loading | applicable | The reviewed material names it an action button; an action started here runs and can be pending on it. Visual treatment omitted |
| error | applicable | The same action can fail where it was started. Visual treatment omitted |
| success | applicable | An action control can carry the confirmation of its own outcome. Visual treatment omitted |

### Medium Pill Button — `btn-buy`

- Role: medium pill action button
- Kind: interactive
- Type: button
- Background: `#3f3fff`
- Text: `#ffffff`
- Height: 32px
- Padding: 0 17px
- Radius: 22px
- Font: 14px / 400

Reading the recorded rule name `btn-buy` as a purchase control is a derived editorial implementation inference from the verified surfaces; it is not FLO-authored or a separately published component specification. The rule name and the six values above are the recorded parts.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded with its background, text, height, padding, radius, and font |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-focusable control; the recorded focus evidence is a different kind, so no treatment is promoted into this row |
| disabled | applicable | The state contract's disabled treatment is written for a button on the blue base, which is this control's base |
| loading | applicable | A buy action is an operation that runs to completion; it can be pending on the control that starts it. Visual treatment omitted |
| error | applicable | The same operation can fail. Visual treatment omitted |
| success | applicable | The state contract records a purchase-complete confirmation as the outcome of this action; it places that confirmation on a separate screen, so no treatment is promoted onto the control |

### Ghost Outline Chip — `header-multi-track-search-button`

- Role: outline chip in the header, recorded under a rule name that describes a multi-track search control
- Kind: interactive
- Type: button
- Background: `#ffffff`
- Text: `#3f3fff`
- Border: 0.5px solid `#3f3fff`
- Radius: 16px
- Padding: 9px 15px
- Font: 12px / 500

The state contract describes a "retry button in outline style with `#3f3fff` text". Reading that description as this component is a derived editorial implementation inference from the verified surfaces; it is not FLO-authored or a separately published component specification. The two records are kept separate below.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded with its background, text, border, radius, padding, and font |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-focusable control; the recorded focus evidence is a different kind, so no treatment is promoted into this row |
| disabled | applicable | A control can be unavailable. The recorded disabled treatment is written for a button on the blue base and is not extended to this white-base control, so no treatment is promoted here |
| loading | applicable | The control starts a search; a search runs and can be pending on the control that starts it. Visual treatment omitted |
| error | applicable | A search can fail; the state contract records a retry path for a failed request. Visual treatment omitted |
| success | not-applicable | A search resolves into results elsewhere on the screen; the control itself carries no action-outcome confirmation |

### Text Input — `comp_inp_txt`, and Password — `comp_inp_pw`

- Role: single-line text entry, with a password variant recorded under its own rule name and identical recorded values
- Kind: interactive
- Type: input
- Background: `#ffffff`
- Text: `#181818`
- Border: 1px solid `#ebebeb`, bottom only
- Height: 58px
- Radius: `0px`
- Font: 15px / 400
- Named appearances: Focus — border 1px solid `#181818`; Error — border 1px solid `#ff4d78`; Valid / OK — border 1px solid `#3f3fff`; Placeholder — text `#c4c4c4`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded with its background, text, bottom border, height, radius, and font |
| hover | applicable | Pointer-web field; visual treatment omitted |
| focus-visible | applicable | Keyboard-focusable field. The reviewed material records a general focus appearance for it, named above; that is a different evidence kind, so no treatment is promoted into this row |
| disabled | applicable | The state contract records a disabled input treatment: `color: rgba(59,59,59,0.3)`, `background-color: hsla(0,0%,94%,0.3)`, bottom border staying `#ebebeb` |
| loading | applicable | Validation resolves on this field — it renders both a failure border and a Valid / OK border — so the resolution it displays can also be pending on it. Visual treatment omitted |
| error | applicable | Recorded: the pink bottom border above, with the state contract adding helper text at 12px below the field |
| success | applicable | Recorded under the reviewed material's own label as the Valid / OK border named above |

### Voucher / Subscription Card

- Role: voucher and subscription card surface
- Type: card
- Kind: omitted. The reviewed material records this as a surface and gives it no control role or interactive-kind evidence, so it declares no Core §4.4 state-applicability map and it is not recast as a control.
- Background: `#f4f5f8`
- Radius: 8px
- Padding: 50px 60px

### Active Voucher Card

- Role: the voucher card in its active condition
- Type: card
- Kind: omitted, on the same grounds as the voucher card.
- Background: `#525cfd`
- Text: `#ffffff`
- Radius: 8px

A restatement elsewhere in the reviewed material gives the highlighted card background as `#3f3fff` at the same 8px radius. It disagrees with the `#525cfd` the component record and the token record both carry. Both are preserved and neither is selected.

### Album Thumbnail

- Role: album cover cell in the browse grid
- Type: not recorded. The reviewed material groups it with the card and content surfaces and assigns it no type field, so none is supplied here.
- Kind: omitted. The record gives it a radius and a height and no control role.
- Radius: 6px
- Height: 175px

The elevation record names an album cover hover as the trigger for the floating shadow level. That is kept where the record puts it, in the elevation levels, rather than turned into a state map on this component.

### Main Navigation Tab — `tab-nav`

- Role: main navigation tab
- Kind: interactive
- Type: tab
- Background: `#ffffff`
- Text: `#6d6d6d` when inactive, sitting on `#f5f5f5`
- Named appearances: Active — text `#3f3fff` on `#ffffff` with a 2px bottom border `#3f3fff`; Hover — text `#3f3fff`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded: the inactive text color on the grey chip surface |
| hover | applicable | Recorded: the brand blue text named above |
| focus-visible | applicable | Keyboard-focusable control; the recorded focus evidence is a different kind, so no treatment is promoted into this row |
| disabled | applicable | A navigation destination can be unavailable; visual treatment omitted |
| loading | not-applicable | A tab selects a section; it runs no operation in place that could be pending |
| error | not-applicable | Tab meaning is selected versus resting, not the failure of a request or a validation |
| success | not-applicable | Tab meaning is selection, not an action-outcome confirmation |

The active appearance is a named appearance rather than a focus observation, and it is not `focus-visible` evidence.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

### Recorded layout

- Desktop breakpoint: 1070px minimum container width; content area up to 960px centered.
- Header height fixed at 96px with 80px horizontal padding.
- Vertical rhythm anchors at 15px (body) and 25–50px (section gutters).
- Album grid uses 175×175px thumbnail cells with 14px top padding and 15px bottom margin.
- Player bar fixed to bottom; full-screen player overlays entire viewport.
- Mobile: container padding collapses to 30px horizontal at ≤955px; header padding reduces proportionally.

### Recorded breakpoint bands

| Band | Width | Recorded behavior |
|---|---|---|
| Desktop | ≥1070px | Full sidebar nav, 960px content column, 80px horizontal padding, 96px header |
| Tablet | 956–1069px | Sidebar collapses; content padding reduces to 30px |
| Mobile | ≤955px | Container padding 30px; album thumbnail grid reflows to single column; header condenses; player bar remains pinned to bottom |

Font sizes do not scale with viewport — fixed px values are used throughout, and line heights compensate via explicit pixel or rem values (`0.9375rem` = 15px is recorded on some components).

The source files were read as published text rather than as a rendered page at any width, so the record holds no viewport measurement. The band names, the sidebar and header collapsing behavior, and the single-column grid reflow are a derived editorial implementation inference from the verified surfaces; they are not FLO-authored or a separately published responsive specification. The recorded parts are the 1070px, 960px, 96px, 80px, 955px, 1069px, 30px, 175px, 14px, 15px, and `0.9375rem` values themselves.

The recorded heights — 36px, 62px, 28px, 32px, 58px, 96px — are the component and header measurements the declared rules carry, and they are not a sizing rule for any other purpose.

<!-- design-md:section content-locales -->
## 6. Content & Locales

### Voice

The recorded adjectives are: Friendly, direct, unforced.

| Dimension | Do | Don't |
|---|---|---|
| Register | Conversational Korean; speak to listeners like a fellow music fan | Corporate, stiff, or overly formal speech |
| Sentence length | Short punchy phrases (4–8 syllables) | Long compound clauses that bury the point |
| Emotional temperature | Warm enthusiasm about discovery, calm confidence about features | Hype superlatives ("best ever", "revolutionary") |
| Personalization | Speak about the listener's taste as genuinely theirs | Generic "music lovers" phrasing |

The three adjectives and all four rows are the reviewed material's own voice guidance and are a derived editorial implementation inference from the verified surfaces; they are not FLO-authored or a separately published voice specification.

### Brand-published lines

One line is recorded as FLO's own:

- 가볍게, 나답게 FLO. — the brand tagline. The reading beside it in the reviewed material, that it conveys effortlessness and personal identity in six syllables, is a derived editorial implementation inference from the verified surfaces and is not FLO-authored or a separately published voice specification.

Two labels are recorded inside the state contract rather than on the read source:

- 지금 음악 찾기 (Find music now) — the empty-state CTA when there is no listening history.
- 내 구독 보기 (View my subscription) — the secondary action after a completed purchase.

### Illustrative samples

Three further lines carry the reviewed material's own illustrative marker, which marks them as samples written for that document rather than as lines FLO published. They are kept byte-exact under that marker rather than dropped. The English rendering beside each is the reviewed material's own gloss and never replaces the Korean.

- 내가 원하는 음악이 물 흐르듯 끊임없이 흘러나온다. *(illustrative; no claim of current FLO copy)* — glossed there as: the music you want flows ceaselessly, like water — sensory and unhurried.
- 1억 곡 중에서 딱 나의 취향만. *(illustrative; no claim of current FLO copy)* — glossed there as: from 100 million songs, exactly my taste — confident without bragging.
- 오늘 기분에 맞는 음악, FLO가 먼저 알아요. *(illustrative; no claim of current FLO copy)* — glossed there as: FLO knows the music for your mood before you do — AI personalization stated as a quiet fact, not a feature claim.

The second line carries a 100-million figure while the same material's own prose states 120 million tracks. Both are carried as written. The material marks that line illustrative, so the figure inside it is not presented there as a published count.

### Terminology

The product and company names the reviewed material records are FLO, 플로, RE;CORD, FLO Studio, and FLO Shop, with Dreamus Company as the operating company. Keep each byte-exact, including the semicolon inside RE;CORD.

### Locale

The product is Korean-language and every published line above is Korean; keep them in Korean rather than substituting a translation. One family, Pretendard Variable, carries the whole type system, at fixed px sizes that do not scale with viewport. The reviewed material establishes no locale behavior beyond that, and none is supplied here.

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

These decisions are unnamed values, not permissions to invent:

- the reduced-motion behavior for the recorded durations and easings, and the transition-property and animation-name evidence behind them
- the display type sizes, where the token record gives a single unitless 34 and 24 and the type rules give the ranges 30–38px and 22–28px for the same two roles
- the Body Primary weight, where the token record gives 400 and the type rules give 400–500
- the pill radius, where the component records give 15px, 22px, and 16px and a restatement elsewhere gives 20px
- the highlighted card background, where the component record and the token record give `#525cfd` and a restatement elsewhere gives `#3f3fff`
- a `focus-visible` appearance for any control — the reviewed material records a general focus border for the text field and a focus-ring timing in the motion scale, and attaches no `focus-visible` appearance to any control
- the hover appearance of every control other than the primary blue CTA and the navigation tab, which are the two the reviewed material records
- the placement behind `#7286ff`, recorded with a role — selected items and soft accents — and no component or element carrying it
- the component record behind the 28px / 700 search-bar type role, which the reviewed material states as a role with no component attached
- the component record behind the checked control, whose checked-state label color the reviewed material gives as `#3f3fff`
- color, type, geometry, and component values for the FLO mobile app, RE;CORD, FLO Studio, and FLO Shop, all named as products with no measured value attached
