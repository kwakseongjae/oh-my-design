# Goodpatch Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Goodpatch (グッドパッチ) is a Tokyo-listed UI/UX design studio. This contract covers the three first-party web surfaces the source inspected: the homepage at `https://goodpatch.com/`, the Company surface at `https://goodpatch.com/company`, and the company-profile facts page at `https://goodpatch.com/company/profile`. Values stay attached to the surface that established them. The homepage and Company surfaces carry the interface tokens; the profile page supplies company facts. This contract does not treat those three surfaces as a proxy for the product interfaces of Prott or ReDesigner, which the source names as Goodpatch products and does not inspect. That proxy refusal is a derived editorial implementation inference from the verified surfaces; it is not Goodpatch-authored or a separately published UI specification.

The inspected interface layer is a warm-grey paper canvas (`#f6f6f6`) carrying an English wordmark headline — "Design to empower" — set at 150px in My Galano Grotesque Bold (weight 700) with line-height 0.85 and `-5.25px` tracking. Running text is a soft warm grey (`#333333`), not pure black. The single saturated brand accent is signature blue (`#096fc8`, rgb(9,111,200)). It appears on the primary pill CTAs ("View services", "View selected works"), on interactive links, and as the small blue eyebrow labels that announce each section ("Services", "Work", "Products"). A lighter companion sky-blue (`#81b0da`) is reserved for decoration and for the hover/secondary read of work-card titles. Two rare accents surface on culture/products surfaces — a warm coral (`#ff776b`) and a muted plum (`#534c97`). Live inspection found `box-shadow: none` across the hero, nav, CTAs, and cards. Interactive geometry is bimodal: action CTAs are full pills (a computed `1584px` radius that is effectively `9999px`), while content panels (Contact, Careers, work tiles) sit at 8px. Latin display runs in My Galano Grotesque; Japanese body and labels run in Yu Gothic Pr6N (the live computed family is `"A+EqpB-游ゴシック体 Pr6N"`), with body line-height opened to `2.0`.

Reading the surface as editorial and gallery-wall calm rather than a hard tech-product edge, reading whitespace and typographic scale rather than color as the primary expressive instrument, reading deep blue as "act" and light blue as "atmosphere", reading coral and plum as editorial punctuation rather than UI chrome, reading the paper-vs-white split as the separator in place of elevation, and reading the whole web presence as a portfolio piece arguing that "design has the power to move business", are derived editorial implementation inferences from the verified surfaces; they are not Goodpatch-authored or a separately published UI specification. The source's own closing note names readings of this kind — "type carries the conviction", "flat as confidence", "the website is the proof" — as editorial readings connecting the observed design to the stated mission "デザインの力を証明する", not as quoted Goodpatch statements.

Brand narrative recorded by the source, kept separate from the interface evidence above. Quoted or stated as company facts from `https://goodpatch.com/company/profile` and the live surfaces: 株式会社グッドパッチ / Goodpatch Inc.; founded September 2011 (設立 2011年9月) by 土屋尚史 (Naofumi Tsuchiya, 代表取締役社長 / Representative Director & President) in Tokyo; the mission **"デザインの力を証明する"** (rendered in English as "Design to empower"); the business span "企業変革支援、UI/UXデザイン、ビジネスモデルデザイン、ブランド体験デザイン、組織デザイン"; its own products **Prott** (prototyping) and **ReDesigner** (designer-careers), plus design-collaboration platforms, alongside design-partnership consulting; and a Tokyo Stock Exchange listing (IPO 2020, Growth market). The source describes the listing as a rare path for a design studio and as a statement that design can be a publicly accountable business; that characterization is a derived editorial implementation inference from the verified surfaces, and it is not Goodpatch-authored or a separately published UI specification. This narrative supplies product context; it does not by itself supply interface tokens.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=4 lang=en -->
### Primary tasks

Selecting these four as the product's primary tasks is a derived editorial implementation inference from the verified surfaces; it is not Goodpatch-authored or a separately published UI specification. Each names the source passage it rests on. They do not come from the source's persona section.

- Open Services or selected works from the homepage primary pill CTAs ("View services", "View selected works").
- Open career information from the outline pill ("View career info") or the Careers entry panel.
- Scan Work / case-study tiles on the paper canvas, including titles such as the work-card role the source records.
- Read Company profile facts — 会社概要, 代表メッセージ, 沿革, アクセス — from the Company surface and the profile page.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source labels its three named figures as fictional archetypes rather than real people, so their names, ages, cities, and biographies are dropped rather than promoted, and no demographic segment list is carried into this document or its sidecar. What the source independently records is the audience grouping those archetypes were said to be informed by: Japanese enterprise design/product leaders, designers seeking studio careers, and founders hiring a design partner. Reading those groups as this product's audience is a derived editorial implementation inference from the verified surfaces; it is not Goodpatch-authored or a separately published UI specification.

### Distinctive traits

These nine traits, and the readings carried inside them — typography as the hero, blue as a single action color, warm ink as editorial calm, the paper/white split as the separator, and the bilingual lane split — are a derived editorial implementation inference from the verified surfaces; they are not Goodpatch-authored or a separately published UI specification. Each names the values it rests on.

- Colossal English display headlines in My Galano Grotesque Bold (150px, weight 700, line-height 0.85, `-5.25px` tracking)
- Single disciplined signature blue (`#096fc8`) for CTAs, links, and section eyebrow labels
- Light sky-blue (`#81b0da`) reserved for decoration and secondary work-title reads
- Warm grey ink (`#333333`) for running text instead of pure black
- Paper canvas (`#f6f6f6`) under white (`#ffffff`) cards
- Flat depth: `box-shadow: none`; no elevation language
- Bimodal radius — full-pill CTAs (`9999px`, computed `1584px`) vs 8px content panels
- Bilingual font split — My Galano Grotesque (Latin) over Yu Gothic Pr6N (CJK body), body line-height 2.0
- Rare editorial accents (coral `#ff776b`, plum `#534c97`) as punctuation, never as UI

### Principles

These five items are a derived editorial implementation inference from the verified surfaces; they are not Goodpatch-authored or a separately published UI specification. The source states them in its own Principles section together with the UI implication it draws from each, and its own closing note names "type carries the conviction", "flat as confidence", and "the website is the proof" among the readings that connect its observed design to the company's stated mission rather than quoting the company.

1. **Prove the power of design.** The mission "デザインの力を証明する" is the literal operating thesis. *UI implication:* every surface must be evidence — craft, scale, and restraint are the argument; nothing decorative is allowed to weaken the proof.
2. **Type carries the conviction.** Goodpatch leads with enormous English display headlines, not color washes. *UI implication:* push display type to extreme scale with crushed leading; let typography, not effects, command attention.
3. **One blue means "act."** The signature blue (`#096fc8`) is reserved for CTAs, links, and section eyebrows. *UI implication:* never spread the action color into decoration — the next step must always be unambiguous.
4. **Flat as confidence.** No shadows; separation comes from the paper-vs-white surface split. *UI implication:* communicate depth with surface tone and spacing, not elevation — a confident studio doesn't decorate its container.
5. **Sign in English, explain in Japanese.** My Galano Grotesque signs the brand; Yu Gothic Pr6N carries the reading. *UI implication:* keep the two fonts in their lanes — Latin display vs CJK body — and give CJK text generous line-height (2.0).

### Application rules

The source states these eight as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not Goodpatch-authored or a separately published UI specification.

- Use My Galano Grotesque for large English display headlines — it is the studio's signing voice
- Use Yu Gothic Pr6N for Japanese body and labels at weight 400, line-height 2.0
- Reserve signature blue (`#096fc8`) for CTAs, links, and section eyebrow labels — the single action color
- Use warm grey (`#333333`) for running text instead of pure black
- Separate sections with the paper (`#f6f6f6`) vs white (`#ffffff`) surface split, not shadows
- Use full-pill geometry for action CTAs and a calm 8px radius for content panels
- Push display type to extreme scale (150px hero) with crushed leading and tight tracking
- Use the light sky-blue (`#81b0da`) only for decoration and secondary work-title reads

### Avoid

The source states these eight as its Don't list; they are kept as its rules, reasons included. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not Goodpatch-authored or a separately published UI specification.

- Use drop shadows for elevation — Goodpatch is a flat, shadow-free system
- Spread the signature blue across many UI elements — it dilutes the single-action signal
- Use pure black (`#000000`) for running body copy — reserve warm grey `#333333`
- Set Japanese body text in My Galano Grotesque — Yu Gothic Pr6N owns CJK reading text
- Put English display copy in the CJK font — My Galano Grotesque owns Latin display
- Use the coral (`#ff776b`) or plum (`#534c97`) accents as UI chrome — they are editorial punctuation only
- Use sharp square corners on action CTAs — actions are full pills
- Crowd the layout — scale and whitespace are the studio's primary expressive instruments

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

The role names below are this contract's naming of the source's recorded uses rather than published Goodpatch role names. Calling `#096fc8` the single action color, calling `#81b0da` atmosphere rather than action, calling coral and plum editorial punctuation, and calling the paper/white pair a surface split rather than an elevation pair, are derived editorial implementation inferences from the verified surfaces; they are not Goodpatch-authored or a separately published UI specification. The hex values and the recorded uses beside them are live-computed.

Brand and action:

| Role | Value | Recorded use |
|---|---|---|
| Goodpatch Blue (primary) | `#096fc8` | Pill CTA backgrounds, all interactive links, blue section eyebrow labels, outline-CTA text/border. The system's single "action" color (live `rgb(9, 111, 200)`). |
| Sky Light (primary-light) | `#81b0da` | Secondary/decorative blue. Hover and secondary read of work-card titles, decorative tints (live `rgb(129, 176, 218)`). |
| Sky Bright (sky) | `#76b7ed` | Brighter accent blue used in decorative blocks and badges (live `rgb(118, 183, 237)`). |
| On-primary | `#ffffff` | Text on blue CTAs and text on blue/dark. |

Ink and neutrals:

| Role | Value | Recorded use |
|---|---|---|
| Warm Ink (ink) | `#333333` | Primary text, headings, nav — a soft warm grey, used instead of pure black for running copy (live `rgb(51, 51, 51)`). |
| Pure Black (ink-pure) | `#000000` | Maximum-contrast moments — occasional heading emphasis. Not running body copy. |
| Body Grey (body) | `#6e6e6e` | Secondary body copy and descriptions (live `rgb(110, 110, 110)`). |
| Muted Grey (muted) | `#9096a2` | Tertiary text, captions, metadata (live `rgb(144, 150, 162)`). |
| Faint Grey (faint) | `#8f95a1` | Lowest-emphasis labels, fine print (live `rgb(143, 149, 161)`). |

Surface:

| Role | Value | Recorded use |
|---|---|---|
| Pure White (canvas) | `#ffffff` | Cards, CTA-on-white, Contact/Careers panels, text on blue/dark. |
| Paper Canvas (paper) | `#f6f6f6` | The page background — a warm-grey paper tone the white cards float on (live `rgb(246, 246, 246)`). |
| Dark Chrome (dark) | `#191b1f` | Near-black dark sections / overlay chrome (live `rgb(25, 27, 31)`). |
| Slate Chrome (dark-chrome) | `#45474a` | A softer dark used in chrome panels (live `rgb(69, 71, 74)`). |

Editorial accents (sparingly used):

| Role | Value | Recorded use |
|---|---|---|
| Coral | `#ff776b` | Warm editorial accent on culture/product surfaces (live `rgb(255, 119, 107)`). |
| Coral Tint | `#ffaba3` | Soft coral surface/highlight block (live `rgb(255, 171, 163)`). |
| Plum | `#534c97` | Muted purple editorial accent block (live `rgb(83, 76, 151)`). |

Sixteen named colors. None is merged with another role.

### Spacing

Base unit: 8px. Scale: 4px, 8px, 16px, 24px, 40px, 66px, 120px. The source names Contact/Careers panels' 66px vertical padding as characteristic.

### Shape

- Small (8px): content panels, work cards, Contact/Careers entry panels
- Full / pill (9999px): every pill CTA (computed `1584px`, effectively full-round)

Reading that pairing as a deliberate bimodal geometry — pills at the action layer, 8px on content — is a derived editorial implementation inference from the verified surfaces; it is not Goodpatch-authored or a separately published UI specification. The two values themselves are live-computed.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow | Page background, headings, most surfaces |
| Surface (Level 1) | `#f6f6f6` paper vs `#ffffff` card split | Section / card separation without elevation |

Live inspection found `box-shadow: none` across the hero, nav, CTAs, work cards, and Contact/Careers panels. Depth is communicated through the warm paper canvas versus white cards, generous spacing, and the blue action layer. Reading that as a deliberate editorial-flat choice, reading restraint as a signal of confidence for a studio whose surface is the portfolio, and reading that the work rather than the chrome carries the weight, are derived editorial implementation inferences from the verified surfaces; they are not Goodpatch-authored or a separately published UI specification. When emphasis is needed, the source says the system reaches for the signature blue (`#096fc8`) or typographic scale, never elevation.

### Motion

The source attributes its token-level claims to a live inspection of computed color, type, spacing, radius, and shadow on the homepage and Company surfaces. The motion contract below sits outside that attribution: the source's own evidence note assigns a source to its voice samples, its brand narrative, and its personas, and assigns none to this motion section. The durations, easing roles, and motion rules below are therefore a derived editorial implementation inference from the verified surfaces; they are not Goodpatch-authored or a separately published UI specification.

Durations:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, link color shift to blue, button press |
| `motion-standard` | 240ms | Card / section reveal, sheet, dropdown |
| `motion-slow` | 400ms | Page-level transitions, hero reveal |

Easing roles — three roles with declared uses. The specific curve values the source lists are not traceable to Goodpatch evidence, so the curves are omitted here and only the roles and their uses are kept:

| Token | Use |
|---|---|
| `ease-enter` | Arriving — sections, cards, panels |
| `ease-exit` | Dismissals |
| `ease-standard` | Two-way transitions |

An exact curve may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework or vendor document — does not satisfy that condition.

Motion rules, as the source states them:

- Motion is composed and editorial — consistent with the gallery-flat aesthetic.
- Section content and work tiles fade-in from below at `motion-standard` / `ease-enter`.
- Nav links and CTA text shift to signature blue (`#096fc8`) on hover at `motion-fast`.
- The colossal hero headline may reveal with a slow, confident fade at `motion-slow`.
- No bounce or spring — a publicly listed design studio signals craft and composure, not playful delight.
- Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the surface remains fully functional.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | The company profile and live pages state the mission and the business, and they do not publish a universal current typography token. |
| Live computed surface-use | Latin display computes `My Galano Grotesque`. Japanese body computes `"A+EqpB-游ゴシック体 Pr6N"` (Yu Gothic Pr6N, Morisawa-delivered), including a Bold "B" cut for news headlines and sub-nav. |
| Official distributed asset | No Goodpatch-exclusive distributed type family was verified. The source records Yu Gothic Pr6N as Morisawa-delivered. Neither face is presented here as a Goodpatch-owned font file. |
| Declared-only | `sans-serif` is recorded as the fallback member of the Latin stack. |
| License | This record does not establish a Goodpatch font-license notice for either face. |
| Outside these captures | Typography on any surface beyond the three inspected pages sits outside this contract. |

### Family

- **Latin display:** `My Galano Grotesque` (with `sans-serif` fallback) — all English headlines, nav, eyebrow labels, CTA labels, work-card titles. The source's own classification of that face is "Geometric humanist sans"; that classification is a derived editorial implementation inference from the verified surfaces, and it is not Goodpatch-authored or a separately published UI specification.
- **CJK body:** `Yu Gothic Pr6N` — the live computed family is `"A+EqpB-游ゴシック体 Pr6N"`, used for Japanese body copy, news headlines, and sub-nav links at weight 400 (with a Bold "B" cut for emphasis).

A fallback member of a stack is never presented as the brand face. Do not replace either family with a system substitute.

### Type roles

| Role | Font | Size | Weight | Line height | Tracking | Notes |
|---|---|---:|---:|---:|---:|---|
| Display Hero | My Galano Grotesque | 150px (9.38rem) | 700 | 0.85 (127.5px) | -5.25px | "Design to empower" wordmark headline |
| Section Banner | My Galano Grotesque | 53px (3.33rem) | 600 | 1.13 (60px) | -1.33px | Large banner (News) |
| Work Title | My Galano Grotesque | 40px (2.50rem) | 600 | 1.10 (44px) | -1px | Case-study card titles |
| Section Label | My Galano Grotesque | 23px (1.43rem) | 400 | 1.23 (28px) | normal | Company profile / Culture sub-heads |
| Eyebrow | My Galano Grotesque | 16px (1.00rem) | 400 | 1.25 (20px) | normal | Blue section labels (Services, Work) |
| News Headline | Yu Gothic Pr6N B | 18px (1.11rem) | 400 | 1.58 (28px) | normal | News item headlines |
| Body | Yu Gothic Pr6N | 16px (1.00rem) | 400 | 2.00 (32px) | normal | Standard reading text |
| Button | My Galano Grotesque | 15px (0.91rem) | 400 | 1.25 | normal | Pill CTA labels |
| Sub-nav (JP) | Yu Gothic Pr6N B | 15px (0.91rem) | 400 | 2.20 (32px) | normal | Japanese sub-nav links |

Line heights are kept in the form the source verified them: unitless ratios, with the px equivalents the source itself spelled out shown beside them.

### Typography rules

The source states these five as its typography principles. Reading the measured metrics as those principles is a derived editorial implementation inference from the verified surfaces; it is not Goodpatch-authored or a separately published UI specification.

- **Display is English, body is Japanese:** My Galano Grotesque owns every large Latin headline; Yu Gothic Pr6N owns running Japanese copy. The two fonts never swap roles — the studio signs in Latin and explains in Japanese.
- **Extreme display scale, crushed leading:** the hero runs at 150px with line-height 0.85 and `-5.25px` tracking — the headline is a graphic object, not a sentence.
- **Open CJK leading:** body line-height is a generous `2.0` (32px on 16px), giving Japanese text air and editorial calm.
- **Light functional weight:** nav, eyebrows, and CTA labels all sit at weight 400 — the system never leans on heavy UI text; scale and color carry hierarchy.
- **Negative tracking scales with size:** -5.25px at 150px, -1.33px at 53px, -1px at 40px; body and labels stay at normal tracking.

### Assets

- Case-study imagery and illustrations are first-party content; the source records them as carrying no shadow at any size. Treating that imagery as the work that carries the argument, and the instruction not to replace it with invented brand-color decoration, are a derived editorial implementation inference from the verified surfaces; they are not Goodpatch-authored or a separately published UI specification.
- The catalog's logo entry for this reference is a Google favicon-service URL rather than a Goodpatch-hosted file. The source's own sibling excludes that service from Tier 1 evidence, so the URL is recorded in the provenance ledger and is not presented here as a Goodpatch brand asset.

<!-- design-md:section components-states -->
## 4. Components & States

### How to read this section

The source declares each component with a primitive type (`button`, `card`, `badge`, `tab`, `listItem`) and a value set. Those types are preserved per component. Applicability below is judged by each control's role in this product, not by whether a visual treatment for that state was recorded; where the source supplies no treatment for an applicable state, the value is omitted and the state stays applicable. The source's live inspection recorded computed default styling, and the state treatments in the State record below are stated at system level rather than measured per control. Every kind verdict, every applicability verdict, and the reason given for either is a derived editorial implementation inference from the verified surfaces; it is not Goodpatch-authored or a separately published UI specification. This is not a claim that state coverage is finished.

### Primary Pill CTA

- Role: primary pill call-to-action — "View services", "View selected works", "Why design"
- Primitive type: `button` · Kind: interactive
- Background: `#096fc8`
- Text: `#ffffff`
- Radius: 9999px (computed `1584px`)
- Padding: 16px 24px
- Height: 56px
- Font: 15px / 400 / My Galano Grotesque

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | The system declares nav links and CTA text shifting to signature blue (`#096fc8`) on hover at `motion-fast`; this control is already filled with that blue, so no separate hover fill is given |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | The system declares a disabled treatment in which blue actions fade rather than turn grey, preserving the brand read; no opacity value is given |
| loading | not-applicable | This control takes the reader to Services, selected works, or Why design; it does not commit an operation whose in-progress state it could report. |
| error | not-applicable | This control takes the reader to a destination; it does not commit an operation whose outcome it could report. |
| success | not-applicable | Same role reason: reaching a destination is not an operation with a success result. |

### Outline Pill CTA

- Role: secondary outline pill — "View career info"
- Primitive type: `button` · Kind: interactive
- Background: `#ffffff`
- Text: `#096fc8`
- Border: `1px solid #096fc8`
- Radius: 9999px (computed `1584px`)
- Padding: 16px 24px
- Height: 56px
- Font: 15px / 400 / My Galano Grotesque

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web control; the system declares a color shift to signature blue on hover. This control's default text is already that blue; no separate hover fill is given |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | An entry point whose availability can lapse; the system's blue-action fade applies and no opacity value is given |
| loading | not-applicable | This control sends the reader to career information; reaching that destination is not a commit whose in-progress state the button reports. |
| error | not-applicable | This control sends the reader to career information; the destination, not the button, reports whether that request failed. |
| success | not-applicable | Same role reason: navigating to career information is not an operation that commits and reports success. |

### Consent Confirm

- Role: cookie-consent confirm button — "同意する"
- Primitive type: `button` · Kind: interactive
- Background: `#096fc8`
- Text: `#ffffff`
- Radius: 9999px
- Padding: 0px 40px
- Height: 48px
- Font: 15px / 400 / Yu Gothic Pr6N

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A commit control whose availability can lapse; the system's blue-action fade applies |
| loading | applicable | This control commits the consent choice; an in-progress state is meaningful for that commit. Visual treatment omitted. |
| error | applicable | A consent submit can fail; the system's load-failed language belongs here as a role, not as a captured treatment. Visual treatment omitted. |
| success | applicable | Recording consent is an operation with a success result. Visual treatment omitted. |

### Contact / Careers Panel

- Role: large blue-on-white entry panel — "Contact お気軽にお問い合わせください", "Careers 一緒にデザインの力を証明しませんか？"
- Primitive type: `card`
- Kind: not declared. The source records this panel's surface values and its place as an entry panel, but attaches no `type` beyond `card` and no interaction treatment to the panel itself. Neither an interactive nor a non-interactive kind is established here, so no kind and no state-applicability map are declared.
- Background: `#ffffff`
- Text: `#096fc8`
- Radius: 8px
- Padding: 66px 16px
- Shadow: none

### Work Card

- Role: Work / case-study tile on the `#f6f6f6` paper canvas
- Primitive type: `card`
- Kind: not declared. The source records this tile's surface values and a secondary title read, but attaches no action, target, or interaction treatment to the card itself. Neither kind is established here, so no kind and no state-applicability map are declared. The title's secondary read (`#81b0da`) is a variant, not a canonical state.
- Background: `#ffffff`
- Text: `#333333`
- Radius: 8px
- Title secondary read: `#81b0da`

### Section Eyebrow

- Role: small blue eyebrow label announcing each section — "Services", "Work", "Products"
- Primitive type: `badge`
- Kind: non-interactive. This record is a section label, not a control that commits or navigates.
- Background: `#ffffff`
- Text: `#096fc8`
- Radius: 8px
- Font: 16px / 400 / My Galano Grotesque

### Nav Link

- Role: top horizontal nav — "Why design", "Services", "Work", "Company"
- Primitive type: `tab` · Kind: interactive
- Background: `#ffffff`
- Text: `#333333`
- Font: 16px / 400 / My Galano Grotesque
- Active variant: signature blue `#096fc8` text on hover/active

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | The system declares hover/active turning signature blue `#096fc8` |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A destination can be unavailable while its item stays legible; the system's faint/muted disabled text treatment applies |
| loading | not-applicable | A nav item changes which page the reader is on; choosing a destination is not a commit whose in-progress state the item reports. |
| error | not-applicable | A nav item changes which page the reader is on; the destination page, not the item, reports whether that request failed. |
| success | not-applicable | Same role reason: choosing a destination is not an operation that commits and reports success. |

The active state is declared for this control as a variant (text `#096fc8`) rather than as one of the seven canonical states. Japanese sub-nav in Yu Gothic Pr6N is recorded on Footer Link.

### Footer Link

- Role: footer / sub-nav Japanese navigation link — "会社概要", "代表メッセージ", "沿革", "アクセス"
- Primitive type: `listItem` · Kind: interactive
- Text: `#333333`
- Font: 15px / 400 / Yu Gothic Pr6N

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web link; the system declares interactive links turning signature blue. Visual treatment omitted at this control |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A destination can be unavailable; the system's faint/muted disabled text treatment applies |
| loading | not-applicable | This control takes the reader to a Company-surface destination; it does not commit an operation whose in-progress state it could report. |
| error | not-applicable | This control takes the reader to a destination; the destination, not the link, reports whether that request failed. |
| success | not-applicable | Same role reason: reaching a destination is not an operation with a success result. |

### State record

The source's state contract, preserved with its values and copy. The source's own evidence note assigns a source to its voice samples, its brand narrative, and its personas, and assigns none to this state section; the treatments below are therefore a derived editorial implementation inference from the verified surfaces rather than measured per-control observations, and they are not Goodpatch-authored or a separately published UI specification.

| State | Treatment |
|---|---|
| **Empty (no work results in a filter)** | Paper canvas (`#f6f6f6`). Single Warm Ink (`#333333`) line at body size in Yu Gothic Pr6N explaining no matching work, with one blue (`#096fc8`) action to reset the filter. No illustration clutter. |
| **Empty (saved / list, none yet)** | Muted Grey (`#9096a2`) single line in calm tone, plus a path back. Honest, gallery-quiet. |
| **Loading (work grid fetch)** | Flat skeleton tiles on white (`#ffffff`) at final card dimensions, 8px radius. No shadow shimmer — flat pulse consistent with the shadowless system. |
| **Loading (in-place)** | Subtle blue (`#096fc8`) progress indicator; previous content stays visible. |
| **Error (load failed)** | Inline message in Warm Ink (`#333333`) with a plain-language explanation and a retry, never a bare "エラーが発生しました". States the next step. |
| **Error (form validation)** | Field-level message below the input in a calm tone; describes what is valid, not just "必須". |
| **Success (contact submitted)** | Brief inline confirmation in calm professional tone; next-step detail linked immediately below. No celebratory emoji. |
| **Skeleton** | White blocks at final dimensions, 8px radius, flat pulse. |
| **Disabled** | Faint Grey (`#8f95a1`) text on reduced-opacity surface; blue actions fade rather than turn grey to preserve the brand read. |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

- Centered single-column hero anchored by the 150px English wordmark headline
- Section eyebrow (blue, Galano Grotesque) sits above each block as a label, then content
- Work/case-study tiles arranged in a grid on the paper canvas, each at 8px radius
- Full-width alternation between paper (`#f6f6f6`) and white (`#ffffff`) bands
- Contact/Careers panels use 66px vertical padding

Reading scale over density as the primary expressive tool, reading the page as an exhibition catalog rather than a SaaS landing, reading the paper/white contrast as surface-split segmentation, and reading full-pill CTAs as a friendly cadence at the action layer, are derived editorial implementation inferences from the verified surfaces; they are not Goodpatch-authored or a separately published UI specification.

Responsive behavior. The source's live inspection was run as a desktop computed-style pass, and its own evidence note attributes token-level claims to that inspection; the breakpoints, collapsing strategy, image behavior, and the source's "comfortably tappable" reading of the recorded target sizes are stated by the source at system level rather than measured across viewports, so they are a derived editorial implementation inference from the verified surfaces and are not Goodpatch-authored or a separately published UI specification.

| Name | Width | Key changes |
|---|---|---|
| Mobile | <640px | Single column, hero headline compresses dramatically, CTAs stack full-width |
| Tablet | 640-1024px | Moderate padding, 2-up work tiles |
| Desktop | 1024-1440px | Full layout, centered hero, multi-column work grid |

- **Touch targets:** primary pill CTAs at 56px height; consent button at 48px height with 40px horizontal padding; nav links spaced for touch with 8px vertical padding within the white header. The source describes the 56px pills as comfortably tappable.
- **Collapsing:** the 150px English wordmark scales down sharply on mobile, weight 700 maintained; work tile grid goes multi-column → 2-up → stacked single column; paper/white alternating bands maintain full-width treatment; Contact/Careers panels keep their generous internal padding, reflowing to full-width.
- **Imagery:** case-study imagery and illustrations carry no shadow at any size; cards maintain 8px radius across breakpoints.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The source characterizes Goodpatch's voice as conviction-driven, articulate, and quietly evangelical about design — a studio that frames its entire existence as a mission to "prove the power of design." The brand signs in confident English ("Design to empower") and explains in measured, professional Japanese. The careers invitation "一緒にデザインの力を証明しませんか？" sets the register: it speaks to peers and believers, not to buyers. Copy is declarative and missionary, never gimmicky or sales-pressured — the work and the craft are presented as the argument. That characterization, that register reading, and the tone table below are a derived editorial implementation inference from the verified surfaces; they are not Goodpatch-authored or a separately published UI specification.

| Context | Tone |
|---|---|
| Hero / English headlines | Declarative, mission-framed. "Design to empower." Confident, anthemic, not hype. |
| Section eyebrows | Plain English labels — "Services", "Work", "Products", "Culture". Calm, structural. |
| Japanese body | Professional, articulate, peer-to-peer. Explains the value of design without jargon-gatekeeping. |
| CTAs | Direct, low-pressure. "View services", "View selected works", "View career info". |
| Careers / culture | Evangelical and inviting. "一緒にデザインの力を証明しませんか？" — recruiting believers, not staff. |

Voice samples, verbatim from the live surfaces. The Japanese text is the string; the English beside it is a reading aid, not the label:

- "Design to empower" — hero wordmark headline (mission anthem).
- "デザインの力を証明する" — page title / brand promise ("prove the power of design").
- "一緒にデザインの力を証明しませんか？" — Careers panel invitation.

**Forbidden register:** hype superlatives, aggressive sales urgency, undefined buzzword-stacking, exclamation-heavy marketing. The source states that the voice persuades through conviction and craft, not pressure — that characterization is a derived editorial implementation inference from the verified surfaces; it is not Goodpatch-authored or a separately published UI specification.

Reproduce the Japanese strings above, the English UI labels recorded in the component roles, the Company sub-nav labels, and the two Japanese strings in the State record byte-exact rather than translating or re-casing them. English display and Japanese body keep their own stacks; a bilingual surface does not merge them.

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

### Recorded unresolved decisions

These are named values, not permissions to invent. The source records no conflict among its own Tier 1 values.

- **Exact easing curves.** Three easing roles and their uses are established; the curve values are omitted because they are not traceable to Goodpatch evidence. Promote a curve for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed.
- **The hover fill on already-blue controls.** The system states that nav links and CTA text shift to `#096fc8` on hover; it does not name a hover fill for a control that is already that blue.
- **The disabled opacity value.** The system states a reduced-opacity surface and a blue action that fades rather than turning grey, without naming the opacity.
- **The skeleton pulse.** The system declares flat blocks at final dimensions with an 8px radius and a flat pulse, without naming the pulse's duration or opacity range.
- **The in-place progress indicator's dimensions.** The system declares a subtle blue progress indicator, without naming its thickness.
- **Prott and ReDesigner product UI.** The source names those products and does not inspect their interfaces. This contract does not invent values for them.
