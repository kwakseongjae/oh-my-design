# FuriosaAI Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

FuriosaAI — written `퓨리오사AI` in Korean — is a South Korean fabless semiconductor company headquartered in Seoul, founded in 2017 by June Paik (백준호, CEO) and co-founders. Its first-generation chip, Warboy, targeted vision workloads; its second-generation flagship, RNGD ("Renegade"), is a Tensor Contraction Processor built for LLM and multimodal inference, and it is the product the current site is organized around. This record states that these company facts are widely documented public knowledge rather than a FuriosaAI statement quoted here, and no color, type, geometry, or component value in this contract rests on them.

This contract covers the first-party web surfaces this record inspected together: the homepage, the RNGD product page, the about page, the blog listing, and the Access Program surface. The developer-documentation surface is brand-owned but runs a stock Sphinx theme, and this record attributes no token to it.

The captured interface layer runs a light/dark cadence. Full-bleed black `#000000` hero and product sections carry 72px–84px headlines in `#ffffff`; white `#ffffff` editorial bands carry body copy in a near-black ink `#151515`, with a softer `#111111` for occasional minor text. One saturated accent, Renegade Red `#e21500`, sits on the call to action, the skip-to-content link, and modal close buttons. Everything is set in ABC Favorit, with ABC Favorit Mono on every button label. Display headlines run at weight 400, scaling to an oversized 84px with `-2.1px` tracking on uppercase statement lines such as `INFERENCE WITHOUT CONSTRAINTS`, while body copy stays at 16px / weight 400 with a 1.60 line height. Flat category chips carry the taxonomy — mint `#70e697` for `News`, yellow `#fffa82` for `Technical Updates` — dark sections lift headings into lavender `#cdbbff`, and a deep maroon `#440a07` anchors one blog band. Depth is mostly flat, with a single elevated card shadow reserved for the featured story.

The readings in this section — that the captured layer above runs a light/dark cadence and is mostly flat, that the system is "industrial, high-contrast, and confident", that its restraint reads "like silicon", that the monospace button label is an "engineering tell", that the eye is trained to read that one red as "the action.", that the visual system mirrors an engineering thesis through industrial monochrome (black and white bands), a single warning-light red, monospace command-style buttons, and benchmark numbers rather than stock imagery, that what the brand refuses is GPU-era gradient spectacle, enterprise navy-and-grey blandness, and hype-driven AGI marketing, and that the 2026 "Renegade" summit branding makes the posture of a renegade alternative to the GPU establishment explicit — are a derived editorial implementation inference from the verified surfaces; they are not FuriosaAI-authored or a separately published UI specification. This record states the same limitation for itself: interpretive claims such as "one red means action" connect the observed design to the positioning rather than quoting FuriosaAI. The values named alongside them are live-computed.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=5 lang=en -->
### Primary tasks

These five outcomes are a derived editorial implementation inference from the verified surfaces; they are not FuriosaAI-authored or a separately published UI specification. They are read out of the controls, labels, and surfaces this record captures, since the source declares no task list of its own.

- Read the RNGD architecture and product case on the black statement bands, where the record captures headlines such as `Tensor Contraction Processor` and `INFERENCE WITHOUT CONSTRAINTS`.
- Take the primary call to action: `Watch the sessions`, `Get started`, `Get started with Furiosa Access`.
- Fill in the Furiosa Access Program form fields (name, email, company) on the Access Program surface.
- Move between the top-level areas named in the top navigation: `Architecture`, `Products`, `Software`, `Blog`, `Newsroom`, `About`, `Careers`, `Contact`.
- Scan blog and newsroom cards by their category chip — `News`, `Technical Updates` — and follow the tertiary link `See all posts`.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. Fictional individual biographies are not design authority and none is carried here. Use the group-level audiences this record itself names as publicly observable: ML infrastructure engineers, data-center architects, and Korean deep-tech investors and recruits.

### Distinctive traits

- ABC Favorit (sans) for all display + body; ABC Favorit Mono for every button label — an engineering signature
- Weight 400 across huge display sizes (72px–84px) — loud message, calm type
- Single saturated Renegade Red (`#e21500`) reserved for the primary CTA
- High-contrast light/dark cadence — black (`#000000`) hero bands vs white (`#ffffff`) editorial bands
- Near-black ink (`#151515`) for body text instead of pure black; `#111111` for minor text
- Flat depth — mostly shadowless; one elevated card shadow (`rgba(0,0,0,0.18) 0px 18px 50px`) for the featured story
- Candy-flat category chips — mint (`#70e697`), yellow (`#fffa82`) — and lavender (`#cdbbff`) accents on dark
- Tight negative tracking on oversized statement headlines (`-2.1px` at 84px)

The characterizations above ("engineering signature", "loud message, calm type", "candy-flat") are a derived editorial implementation inference from the verified surfaces; they are not FuriosaAI-authored or a separately published UI specification. The values inside them are live-computed.

### Principles

These five principles are a derived editorial implementation inference from the verified surfaces; they are not FuriosaAI-authored or a separately published UI specification. This record labels the same kind of claim — for example "one red means action" — as an editorial reading connecting observed design to positioning.

1. **Efficiency is the headline.** The thesis is performance-per-watt, not raw size. *UI implication:* lead with benchmark numbers and efficiency claims; let data persuade.
2. **One red means action.** Renegade Red (`#e21500`) is the single saturated hue. *UI implication:* reserve it for CTAs and critical controls so the next step is unambiguous.
3. **Engineer to engineer.** The reader is treated as a peer who reads spec sheets. *UI implication:* monospace button labels, dense technical copy, examples over narrative.
4. **Industrial, not decorative.** The look is silicon, not consumer app. *UI implication:* high-contrast black/white bands, flat depth, no gradient spectacle.
5. **Loud message, calm type.** Bold claims in restrained near-regular ABC Favorit. *UI implication:* emphasis comes from size and contrast, never from heavy weights or color noise.

### Application rules

These application rules are a derived editorial implementation inference from the verified surfaces; they are not FuriosaAI-authored or a separately published UI specification.

- Set every headline in ABC Favorit at weight 400 — let size and contrast carry emphasis
- Use ABC Favorit Mono for every button label — the monospace is the engineering signature
- Reserve Renegade Red (`#e21500`) for the primary CTA and critical controls — keep it the single action color
- Alternate full-bleed black (`#000000`) and white (`#ffffff`) bands for section rhythm
- Use near-black ink (`#151515`) for body text on white, not pure black
- Keep depth flat — separate with color bands, reserve the one card shadow for the featured story
- Use flat category chips (mint `#70e697`, yellow `#fffa82`) for taxonomy labels
- Apply tight negative tracking (`-2.1px`) only on oversized uppercase statement headlines

### Avoid

These avoidances are a derived editorial implementation inference from the verified surfaces; they are not FuriosaAI-authored or a separately published UI specification.

- Spread Renegade Red across many elements — it dilutes the single-action signal
- Use heavy display weights (`700+`) — the brand speaks loudly in near-regular type
- Add drop shadows to ordinary cards — only the featured card is elevated
- Introduce a second saturated brand hue — red is the one action color; mint/yellow are taxonomy chips only
- Use a serif or a humanist sans for headlines — ABC Favorit owns the voice
- Mix the mono into body copy — ABC Favorit Mono is for button labels only
- Use enterprise navy or GPU-era gradients — the brand is monochrome with one red

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

The hex values below are live-computed from the captured surfaces, and the uses that name a captured element — the CTA fill, the category-chip backgrounds, the form-input ink and border, the maroon blog band — are observations. The role names and the wider characterizations around them are a derived editorial implementation inference from those surfaces; they are not FuriosaAI-authored or a separately published UI specification.

**Primary**

- **Renegade Red** (`#e21500`): the single brand accent and primary action color. Used on every CTA button, the skip-to-content link, and modal close buttons — the system's one saturated hue.
- **Pure White** (`#ffffff`): light section background, card surface, and the color of headline text on black hero bands.
- **Pure Black** (`#000000`): the dark-section background for hero and product bands. Half the page lives on black.

**Text & ink**

- **Ink** (`#151515`): primary body text and headings on light surfaces. A near-black that carries warmth without the harshness of pure black.
- **Ink Soft** (`#111111`): occasional minor text — a marginally lighter near-black used in dense supporting copy.
- **Grey** (`#7f7f7f`): muted secondary text, captions, and thin dividers.
- **Grey Light** (`#d4d4d4`): low-emphasis text on dark backgrounds and hairline borders.

**Accent**

- **Mint** (`#70e697`): flat category-label chip background for `News` — a bright, confident green.
- **Yellow** (`#fffa82`): flat category-label chip background for `Technical Updates` — electric highlight.
- **Lavender** (`#cdbbff`): soft accent for headings and tertiary links lifted onto dark sections (e.g. the "Blog" heading, "See all posts").
- **Maroon** (`#440a07`): a deep oxblood that anchors one immersive blog section band.

**Form**

- **Form Ink** (`#30343b`): text color inside form inputs on the Access Program surface.
- **Form Border** (`#c0d0de`): cool-grey 1px border around text inputs.

### Spacing

Base unit ~4px / 8px rhythm. Named steps: `xs` 4px, `sm` 8px, `base` 12px, `md` 15px, `lg` 24px, `xl` 48px, `section` 96px. Full-bleed sections use a generous 96px vertical padding; button padding lands at 14px 24px, form fields at 0px 15px horizontal within a tall 56px field.

### Shape

- `sm` 5px — inputs, category chips
- `base` 6px — primary CTA buttons
- `md` 8px — blog cards, skip link
- `lg` 10px — close buttons, subtle tiles
- `xl` 12px — featured card

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow | Page background, hero, nav, most cards |
| Band (Level 1) | Background color switch (`#000000` / `#ffffff` / `#440a07`) | Section separation without elevation |
| Elevated (Level 2) | `rgba(0,0,0,0.18) 0px 18px 50px` | The single featured-story card |

Shadow tokens: `card` is `rgba(0,0,0,0.18) 0px 18px 50px`; the other recorded token is `none`. Live inspection found `box-shadow: none` across the hero, nav, CTAs, and the majority of cards.

The following elevation reading is a derived editorial implementation inference from the verified surfaces; it is not FuriosaAI-authored or a separately published UI specification. FuriosaAI is a near-flat system: depth is communicated by the black/white band cadence rather than by elevation, and the featured-story card is the one exception, so that elevation reads as a deliberate signal of "this one matters." and keeps the UI closer to a hardware spec sheet than a consumer app.

### Motion

Duration roles as this record states them, with no computed transition observation behind them:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, button press, focus |
| `motion-standard` | 220ms | Card/section reveal, dropdown, overlay |
| `motion-slow` | 360ms | Page-level band transitions, hero reveal |

Easing token names and uses as this record states them, with the curves omitted:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | Omitted — the token name and use are recorded and no curve evidence is attributed | Arriving — sections, cards, overlays |
| `ease-exit` | Omitted — the token name and use are recorded and no curve evidence is attributed | Dismissals |
| `ease-standard` | Omitted — the token name and use are recorded and no curve evidence is attributed | Two-way transitions |

The motion behavior in this paragraph — the reduced-motion rule and the motion character alike — is a derived editorial implementation inference from the verified surfaces; it is not FuriosaAI-authored or a separately published UI specification. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and the site remains fully functional. Motion is otherwise functional and precise: sections fade and reveal on scroll at `motion-standard / ease-enter`, CTAs answer a press with a subtle scale or opacity shift, and nothing bounces or springs.

The three exact cubic-bezier curves carry no attribution in this record and stay omitted rather than promoted. Do not promote an easing curve, an animation name, a CSS transition property, or a duration beyond the table above until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or duration is not that gate. Any exact animation curve remains a local extension until that per-component computed observation exists.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The rows below sort this record's font evidence into classes. The sorting is a derived editorial implementation inference from the verified surfaces; it is not FuriosaAI-authored or a separately published UI specification. The observation inside each row stands on its own.

| Evidence class | Resolution |
|---|---|
| Official product-use | This record's evidence is live inspection of brand-owned web surfaces; it carries no FuriosaAI-published type specification. |
| Live computed surface-use | Visible text on the captured surfaces computes as ABC Favorit, with ABC Favorit Mono on button labels and inline command-style CTAs. |
| Official distributed asset | The record establishes the families in use and carries no FuriosaAI-distributed font file. |
| Declared-only | Both families are declared with an `Arial, sans-serif` fallback; the record lists no declared-but-unused family. |
| License | No license or distribution statement accompanies either family in this record. |
| Outside these captures | The developer-documentation surface runs a stock Sphinx theme, and the record attributes no type value to it. |

### Family

- **Display & body:** `ABC Favorit` (with `Arial, sans-serif` fallback) — headlines, body, and nav. A precise grotesque with a slightly mechanical character.
- **Mono / buttons:** `ABC Favorit Mono` (with `Arial, sans-serif` fallback) — every button label and inline command-style CTA.
- Do not substitute a system font or another grotesque for ABC Favorit and present it as the brand face. The two families are canonical here because computed visible use on the captured surfaces agrees on them.

The character readings above — that the sans is "a precise grotesque with a slightly mechanical character" and that the mono frames actions as code — are a derived editorial implementation inference from the verified surfaces; they are not FuriosaAI-authored or a separately published UI specification. The families and their fallbacks are live-computed.

### Type roles

| Role | Font | Size | Weight | Line height | Letter spacing | Notes |
|---|---|---:|---:|---:|---:|---|
| Display XL | ABC Favorit | 84px (5.25rem) | 400 | 1.00 (84px) | -2.1px | Oversized uppercase statement lines |
| Display / Hero | ABC Favorit | 72px (4.50rem) | 400 | 1.10 (79.2px) | normal | Hero + section headlines |
| Heading | ABC Favorit | 48px (3.00rem) | 500 | 1.20 (57.6px) | normal | Mid-section emphasis heads |
| Section | ABC Favorit | 36px (2.25rem) | 400 | 1.30 (46.8px) | normal | Section titles, newsroom heads |
| Card Title | ABC Favorit | 24px (1.50rem) | 400 | 1.17 (28px) | normal | Blog / news card titles |
| Body | ABC Favorit | 16px (1.00rem) | 400 | 1.60 (25.6px) | normal | Standard reading text |
| Nav Link | ABC Favorit | 16px (1.00rem) | 500 | 1.50 | normal | Top navigation items |
| Button | ABC Favorit Mono | 16px (1.00rem) | 400 | 1.00 | normal | Button labels |
| Caption | ABC Favorit | 12px (0.75rem) | 500 | 1.00 | normal | Skip link, small labels |

The following type-hierarchy readings are a derived editorial implementation inference from the verified surfaces; they are not FuriosaAI-authored or a separately published UI specification. One typeface carries display, body, and nav, and the only role-swap is the monospace on buttons; weight 400 runs from 16px body up to the 84px statement headline, with 500 appearing only on nav and a few mid headings, so emphasis comes from size and contrast rather than from heavy weights; tracking tightens only at scale, pulling to `-2.1px` at 84px while everything 72px and below sits at normal tracking.

### Assets

- Product renders and chip photography sit on the black bands at full contrast.
- Blog and newsroom cards carry flat category chips rather than decorative imagery — that contrast is a derived editorial implementation inference from the verified surfaces; it is not FuriosaAI-authored or a separately published UI specification. The chips and their values are live-computed.
- This record's only asset entry is a favicon logo, recorded as a ledger field in the source and kept in the source ledger rather than presented here as a separately published FuriosaAI brand-asset file.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The live inspection behind this record produced default computed styles across the captured surfaces. Two component records carry an additional recorded behavior: the top navigation item switches its text to `#151515` on the light scrolled header, and the skip link is revealed on keyboard focus. The motion rules name hover, button press, and focus as motion targets without an accompanying value, so those visual treatments are omitted here.

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted. Absence of an observation is not a `not-applicable` reason. Loading, error, and success follow the control's product role, not its primitive kind. This is not a complete state-coverage claim.

The Blog Card, Featured Card, Subtle Tile, News badge, and Technical Updates badge have recorded geometry and no interactive-kind evidence, so kind and a state-applicability map are omitted for them rather than assumed.

### State treatments

The seven state treatments below are a derived editorial implementation inference from the verified surfaces; they are not FuriosaAI-authored or a separately published UI specification. They compose values established elsewhere in this contract, and no computed per-component observation accompanies them.

| State | Treatment |
|---|---|
| **Empty (no results / no posts)** | White canvas. Single Ink (`#151515`) line at body size explaining nothing is here yet, with one Renegade Red CTA to navigate onward. No clutter. |
| **Loading (page / data fetch)** | Flat skeleton blocks at final dimensions on the active band (white or black); no shadow shimmer, consistent with the flat system. |
| **Form (Access Program, default)** | `#ffffff` field, 1px `#c0d0de` border, 5px radius, `#30343b` text. Calm and legible. |
| **Form (focus)** | Border intensifies toward Renegade Red (`#e21500`) accent; field stays white. |
| **Form (error)** | Field-level message below the input in Renegade Red tone; describes what is valid, not just "required". |
| **Success (form submitted)** | Brief inline confirmation in calm tone; next step linked immediately below. No celebratory emoji. |
| **Disabled** | Muted Grey (`#7f7f7f`) text on reduced-opacity surface; red actions fade rather than turn grey to preserve brand read. |

### Primary CTA

- Role: primary call to action
- Type: button
- Kind: interactive
- Anatomy: label
- Labels: `Watch the sessions`, `Get started`, `Get started with Furiosa Access`
- Background: `#e21500`
- Text: `#ffffff`
- Radius: 6px
- Padding: 14px 24px
- Height: 50px
- Font: 16px / 400 ABC Favorit Mono
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded as a default observation in this record |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | The entry point can be made unavailable; visual treatment omitted |
| loading | applicable | The control commits the get-started step, which pends; visual treatment omitted |
| error | applicable | The committed step can fail and report on this control; visual treatment omitted |
| success | applicable | The committed step can confirm on this control; visual treatment omitted |

### Modal Close

- Role: close control on popups / overlays
- Type: button
- Kind: interactive
- Anatomy: control
- Background: `#e21500`
- Text: `#ffffff`
- Radius: 10px
- Padding: 10px 12px
- Height: 39px
- Font: 12px / 600 ABC Favorit
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded as a default observation in this record |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A close control can be held unavailable while an overlay is busy; visual treatment omitted |
| loading | not-applicable | Dismissing an overlay resolves in place; the control commits no operation that pends |
| error | not-applicable | Dismissal has no request or validation outcome to report on this control |
| success | not-applicable | Closing an overlay is a dismissal, not an action-outcome confirmation |

### Skip-to-Content

- Role: accessibility skip link
- Type: button
- Kind: interactive
- Anatomy: label
- Background: `#e21500`
- Text: `#ffffff`
- Radius: 8px
- Padding: 9.6px 18px
- Height: 36px
- Font: 12px / 500 ABC Favorit
- Observed: default only

Additional recorded behavior: the control is revealed on keyboard focus. This record names generic focus; no separate `focus-visible` treatment value is attributed to it.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded as a default observation in this record |
| hover | applicable | Pointer-web control; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | The control can be held unavailable; visual treatment omitted |
| loading | not-applicable | The link moves reading position within the same page; it commits no operation that pends |
| error | not-applicable | Moving to the main content has no request or validation failure of its own |
| success | not-applicable | Arriving at the content is navigation, not an action-outcome confirmation on the link |

### Tertiary Link (on dark)

- Role: low-emphasis inline CTA on dark sections
- Kind: interactive
- Anatomy: label
- Label: `See all posts`
- Background: transparent
- Text: `#cdbbff`
- Padding: 14px 24px
- Font: 16px / 400 ABC Favorit Mono
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded on the dark sections |
| hover | applicable | Pointer-web link; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | The entry point can be made unavailable; visual treatment omitted |
| loading | not-applicable | A destination link sends the reader to the post index; the link itself commits no operation that pends |
| error | not-applicable | A destination link reports no request or validation failure of its own |
| success | not-applicable | Reaching the post index is navigation, not an action-outcome confirmation on the link |

### Access Program Text Field

- Role: Furiosa Access Program form field (name, email, company)
- Type: input
- Kind: interactive
- Anatomy: value field
- Background: `#ffffff`
- Text: `#30343b`
- Border: 1px solid `#c0d0de`
- Radius: 5px
- Padding: 0px 15px
- Height: 56px
- Font: 16px ABC Favorit
- Observed: default only

Additional recorded state: focus — the border intensifies toward Renegade Red (`#e21500`) while the field stays white. This record names generic focus; no separate `focus-visible` treatment value is attributed to it.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded on the Access Program surface |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A form field can be held unavailable; visual treatment omitted |
| loading | applicable | The field belongs to a form that submits and pends; visual treatment omitted |
| error | applicable | Form field with a field-level validation message; visual treatment described in the state table |
| success | applicable | The submitted form confirms; visual treatment described in the state table |

### Top Navigation Item

- Role: item in the top horizontal navigation on the dark hero
- Type: tab
- Kind: interactive
- Anatomy: label
- Background: transparent over black hero (`#000000`)
- Text: `#ffffff`
- Padding: 14px 12px
- Font: 16px / 500 ABC Favorit
- Items: `Architecture`, `Products`, `Software`, `Blog`, `Newsroom`, `About`, `Careers`, `Contact`
- Observed: default; active switches to `#151515` on the light scrolled header

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded on the top navigation over the dark hero |
| hover | applicable | Pointer-web navigation item; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A navigation entry can be unavailable; visual treatment omitted |
| loading | not-applicable | The item moves the reader to another area; the item itself commits no operation that pends |
| error | not-applicable | Active versus inactive is the item's whole meaning; it reports no request or validation failure |
| success | not-applicable | Reaching a destination area is navigation, not an action-outcome confirmation on the item |

### Blog Card

- Role: standard blog / news card on white bands
- Type: card
- Kind: omitted. The record establishes geometry and no interactive-kind evidence, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Background: `#ffffff`
- Radius: 8px
- Shadow: none — no border, no shadow

### Featured Card

- Role: the single elevated featured-story card
- Type: card
- Kind: omitted. The record establishes geometry and no interactive-kind evidence, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Background: `#ffffff`
- Radius: 12px
- Shadow: `rgba(0,0,0,0.18) 0px 18px 50px` — the only place the system uses a drop shadow

### Subtle Tile

- Role: quiet supporting tile on light surfaces
- Kind: omitted. The record establishes geometry and no interactive-kind evidence, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Background: `rgba(0,0,0,0.02)`
- Border: 1px solid `rgba(0,0,0,0.08)`
- Radius: 10px

### News Badge (Mint)

- Role: `News` category label on cards
- Type: badge
- Kind: omitted. The record establishes geometry and no interactive-kind evidence, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Background: `#70e697`
- Text: `#151515`
- Radius: 5px
- Padding: 4px 12px
- Font: 14px ABC Favorit

### Technical Updates Badge (Yellow)

- Role: `Technical Updates` category label on cards
- Type: badge
- Kind: omitted. The record establishes geometry and no interactive-kind evidence, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Background: `#fffa82`
- Text: `#151515`
- Radius: 5px
- Padding: 4px 12px
- Font: 14px ABC Favorit

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

### Spacing and container

The recorded spacing scale runs 4px, 8px, 12px, 15px, 24px, 48px, 96px on a ~4px / 8px base rhythm. The page is built from full-width alternating bands — black (`#000000`) hero and product sections against white (`#ffffff`) editorial sections. The hero is a centered single column anchored by a 72px–84px ABC Favorit headline. Blog and newsroom use a multi-column card grid at ≈384px–420px card widths. Product pages stack large statement headlines with spec and feature blocks beneath.

The following whitespace reading is a derived editorial implementation inference from the verified surfaces; it is not FuriosaAI-authored or a separately published UI specification. Contrast carries the layout rather than clutter, so the dominant device is the light/dark band switch rather than borders or shadows; oversized headlines are given room while supporting copy stays compact at 16px; and separation is flat by default, coming from background color (`#000000` vs `#ffffff`) and the maroon (`#440a07`) accent band rather than from elevation.

### Responsive behavior

The breakpoint table and the collapsing rules below are a derived editorial implementation inference from the verified surfaces; they are not FuriosaAI-authored or a separately published UI specification. This record attributes no computed measurement to a breakpoint, and the heights and paddings elsewhere in this contract are single-inspection values.

| Name | Width | Key changes |
|---|---|---|
| Mobile | <640px | Single column, hero headline compresses, nav collapses to toggle |
| Tablet | 640-1024px | 2-up card grids, moderate padding |
| Desktop | 1024-1440px | Full layout, multi-column blog/newsroom grid, oversized hero type |

- Hero: 84px / 72px statement type scales down on mobile, weight 400 maintained
- Black/white alternating bands maintain full-width treatment
- Blog/newsroom card grid: multi-column → 2-up → single column
- Category chips wrap above card titles
- Product renders and chip photography sit on black bands at full contrast across sizes
- The featured card retains its `rgba(0,0,0,0.18)` shadow across sizes
- Cards maintain their radius scale (8px / 12px) across breakpoints

### Touch targets

The primary CTA is 50px high with 14px 24px padding. Form fields are a tall 56px. Navigation items carry 14px 12px padding inside the header.

<!-- design-md:section content-locales -->
## 6. Content & Locales

### Voice samples

These three strings are verbatim from live surfaces — the live homepage and the RNGD product page.

- `Tensor Contraction Processor` — homepage section headline (architecture, stated as fact)
- `Inference without constraints` — oversized statement headline
- `Powerfully efficient AI inference` — RNGD product page H1

### Voice and tone

The voice reading below, including the tone table, is a derived editorial implementation inference from the verified surfaces; it is not FuriosaAI-authored or a separately published UI specification. The register reads as technical, declarative, and quietly defiant — the register of engineers who would rather show a benchmark than make a promise. The product is named RNGD ("Renegade"), and the copy matches: headlines state capabilities as facts rather than marketing superlatives, and the reader is treated as a peer engineer who can read a spec sheet, with performance and efficiency numbers doing the persuading instead of adjectives.

| Context | Tone |
|---|---|
| Hero headlines | Declarative, technical. "Tensor Contraction Processor", "Inference without constraints." |
| Product / spec copy | Benchmark-first. States throughput, efficiency, and comparisons plainly. |
| CTAs | Terse imperatives in monospace. "Get started", "Watch the sessions", "See the specs". |
| Blog / newsroom | Engineer-to-engineer. Release notes, partnership news, benchmark write-ups. |
| Developer docs | Dense, precise, example-led — quick-start over narrative. |

### Forbidden register

The exclusions below are a derived editorial implementation inference from the verified surfaces; they are not FuriosaAI-authored or a separately published UI specification. GPU-era hype superlatives ("revolutionary", "game-changing"); vague AGI grandiosity untethered from a benchmark; exclamation-driven marketing; and stacked adjectives where a number would do.

### Locale

FuriosaAI is a South Korean company and its name is written `퓨리오사AI` in Korean; its CEO is named in this record as June Paik (`백준호`). All copy recorded from the captured surfaces is English.

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

- the exact `ease-enter`, `ease-exit`, and `ease-standard` curves; the token names and uses are recorded, the curves carry no attribution
- hover, button-press, and focus visual treatments, which the motion rules name without any accompanying value
- the interactive kind of the Blog Card, Featured Card, Subtle Tile, News badge, and Technical Updates badge
- computed per-component values behind the empty, loading, form-focus, form-error, success, and disabled treatments described above
- type and component values on the developer-documentation surface, which this record marks brand-owned on a stock Sphinx theme
