# Heydealer Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Heydealer (헤이딜러) is Korea's app-first used-car platform — a reverse-auction sell-my-car service and certified buy-a-car marketplace operated by PRND — and this contract covers the three first-party web surfaces the source inspected for tokens on 2026-07-02: the homepage at `https://www.heydealer.com/`, the car-detail page at `https://www.heydealer.com/market/cars/gQ60AKy0`, and the sell flow at `https://www.heydealer.com/sell`. The PRND company blog at `https://medium.com/prnd` is a named brand-owned source for company context; it does not supply the computed interface tokens below. Every value stays attached to the surface that established it. Reading those three inspected pages as this contract's token surfaces, keeping values attached to the surface that established them, and treating the PRND blog as a named source that does not supply computed interface tokens, are derived editorial implementation inferences from the verified surfaces; they are not Heydealer-authored or a separately published UI specification.

The captured interface layer is a pure-white canvas (`#ffffff`) with near-black ink (`#0d0d0e`) that the source records as deliberately not a soft grey, and razor-sharp `4px` corners. A single saturated electric blue (`#396eff`) is reserved almost exclusively for the primary "do this" action — the `바로 구매예약` (book purchase) button. Type is **Spoqa Han Sans Neo** (`spoqaHanSansNeo`) throughout: Bold (weight 700) for heads and labels with tight negative tracking, Regular (weight 400) at 16px for body and listing copy. Live inspection found `box-shadow: none` across the nav, listing cards, chips, and CTAs. Separation comes from thin `#e9eaec` hairlines and a low-alpha neutral tint built on `#70727c` (used around 5–8% opacity). Secondary actions go pure black (`#000000`). A near-black `#0f1014` and a dark navy `#272e40` appear on immersive dark blocks, with off-white `#f8f8f9` as the text-on-dark color. The hex values, family name, weights, and surface names in this paragraph are recorded. The characterizations built on them — a fast, engineered product tool rather than a glossy automotive brochure; closer to a financial dashboard than a car dealership; dense, confident, and information-forward; engineered flatness; a used-car service that looks like a precise instrument, not a showroom; and the reserved blue as the one "action" color — are a derived editorial implementation inference from the verified surfaces; they are not Heydealer-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. Heydealer (헤이딜러) is a Korean used-car platform operated by **PRND** (피알앤디컴퍼니), launched around **2015**. Its founding premise reframed 내차팔기 (selling your car) from an opaque, dealer-favoring process into a transparent **reverse auction**: an owner registers a vehicle once, verified dealers compete with bids, and the owner picks the best offer — the market working for the seller rather than against them. Heydealer became a defining Korean startup story in **2016**, when a proposed amendment to the automobile-management law (popularly nicknamed the "헤이딜러 방지법" / "anti-Heydealer law") would have effectively banned online-only used-car dealers by requiring large physical premises. Public backlash over a regulation that seemed to punish a consumer-friendly innovation led to the rule being reconsidered — a widely-cited case study in Korean tech about regulation lagging digital business models. The service survived, then expanded from sell-my-car into a certified **buy-a-car marketplace** (내차사기) with 1-year free warranty, return-on-change-of-mind, and inspection reports, plus adjacent tools like scrap-car quotes (폐차) and hidden-history checks. The years, operating company, reverse-auction premise, 2016 regulatory episode, and later marketplace expansion are the source's own narrative facts; they do not by themselves supply interface tokens. Classifying that founding-and-expansion narrative as context that does not by itself supply interface tokens is a derived editorial implementation inference from the verified surfaces; it is not Heydealer-authored or a separately published UI specification.

What the source says Heydealer refuses, visible in its design: the heavy chrome, stock photography, and hard-sell urgency of legacy classified and dealership sites. What it embraces: a flat, fast, app-native interface; a single trustworthy blue; crisp near-black data; and copy that states guarantees plainly instead of selling with adjectives. That refusal/embrace pairing is stated by the source as narrative; reading it as a current-surface design instruction is a derived editorial implementation inference from the verified surfaces; it is not Heydealer-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=5 lang=en -->
### Primary tasks

Selecting these five as the product's primary tasks is a derived editorial implementation inference from the verified surfaces; it is not Heydealer-authored or a separately published UI specification. Each names a label or surface the source records. They do not come from the source's persona section.

- Reserve a purchase from `바로 구매예약` on a car-detail page.
- Open `인증 리포트` on a car-detail page.
- Start `내차팔기` on `https://www.heydealer.com/sell`.
- Browse certified cars (`내차사기`) on `https://www.heydealer.com/`.
- Use the top-nav destinations `폐차 견적받기` and `중고차 숨은 이력`.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source labels its named figures as fictional archetypes informed by publicly observable Heydealer user segments, not individual people, so those biographies are dropped rather than promoted, and no name, age, city, or occupation is carried into this document or its sidecar. What the source independently records is the audience the platform serves at a group level: owners registering a vehicle once for a reverse auction (내차팔기), and buyers in the certified marketplace (내차사기) with warranty, return-on-change-of-mind, and inspection reports, plus scrap-car quotes (폐차) and hidden-history checks. Reading those groups as this product's audience is a derived editorial implementation inference from the verified surfaces; it is not Heydealer-authored or a separately published UI specification.

### Distinctive traits

The list restates the source's Key Characteristics. The values are measured; the groupings and the readings inside them are a derived editorial implementation inference from the verified surfaces — they are not Heydealer-authored or a separately published UI specification.

- Spoqa Han Sans Neo throughout — Bold (700) for heads/labels, Regular (400) for body
- Single saturated blue (`#396eff`) reserved for the primary purchase CTA — the one "action" color
- Near-black ink (`#0d0d0e`) for text instead of a soft grey — crisp, high-contrast, product-grade
- Pure black (`#000000`) for the secondary action button, distinct from the blue primary
- Shadowless system — `#e9eaec` hairlines and low-alpha `#70727c` tint do all the separating
- Sharp `4px` radius as the universal workhorse; `2px` on fine elements, `16px` on the search field, full `100px` pills on a few chips
- Tight negative tracking that scales with size (`-0.32px` → `-0.195px`)
- Muted neutral ladder (`#37383d` → `#2d2e32` → `#858892`) for de-emphasized text
- Dark blocks use near-black `#0f1014` / navy `#272e40` with off-white `#f8f8f9` text

### Principles

These five items are a derived editorial implementation inference from the verified surfaces; they are not Heydealer-authored or a separately published UI specification. The source states them in its own Principles section together with the UI implication it draws from each.

1. **The market should work for the owner.** The reverse-auction model exists to make dealers compete for the seller. *UI implication:* surface competing offers clearly and neutrally; never visually privilege one bid without disclosure.
2. **Protection stated as fact, not adjective.** Trust is built with concrete guarantees. *UI implication:* render warranty/refund promises as plain reassurance strips (1년 무료 보증, 무료 환불), not decorative badges.
3. **One action, one color.** Blue (`#396eff`) means "commit." *UI implication:* reserve the saturated blue for the primary purchase/sell CTA so the next step is never ambiguous.
4. **Flat and fast.** App-native clarity beats decorative depth. *UI implication:* no shadows; separate with `#70727c` tint and `#e9eaec` hairlines; keep the grid quick to scan.
5. **Weight carries the structure.** *UI implication:* use Spoqa Han Sans Neo Bold (700) for what matters and Regular (400) for everything else; don't lean on size or color alone.

### Application rules

The source states these eight as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not Heydealer-authored or a separately published UI specification.

- Use Spoqa Han Sans Neo throughout — Bold (700) for heads/labels/CTAs, Regular (400) for body
- Reserve blue (`#396eff`) for the primary purchase CTA — keep it the single "action" color
- Use pure black (`#000000`) for the secondary action button, distinct from the blue primary
- Use near-black ink (`#0d0d0e`) for text instead of a soft grey
- Separate sections with low-alpha `#70727c` tint and `#e9eaec` hairlines, not shadows
- Keep the sharp 4px radius as the default on buttons, cards, chips, and tiles
- Apply tight negative tracking on headings (-0.32px at 20px)
- Use off-white `#f8f8f9` text on black/dark blocks (`#0f1014`, `#272e40`)

### Avoid

The source states these eight as its Don't list; they are kept as its rules, reasons included. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not Heydealer-authored or a separately published UI specification.

- Use drop shadows for elevation — heydealer is a flat, shadow-free system
- Spread blue across many elements — it dilutes the single-action signal
- Use a soft grey for body text — reserve the crisp near-black `#0d0d0e`
- Use large pill radii on primary buttons — the CTA is a sharp 4px, not a pill
- Set body copy in Bold — Bold (700) is reserved for heads, labels, and CTAs
- Introduce a second saturated accent hue — blue is the only vivid color
- Use positive letter-spacing on headings — heydealer tracks tight
- Rely on color alone for hierarchy — weight (700 vs 400) does the structural work

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Each role below pairs a name with the value and the use the source records. Where a line also characterizes a value — reserved "commit" blue, near-black instead of a soft grey, a deliberate second dark, engineered flatness — that characterization is a derived editorial implementation inference from the verified surfaces; it is not Heydealer-authored or a separately published UI specification.

Primary

- **Heydealer Blue** (`#396eff`): Primary brand and action color. The saturated electric blue on the `바로 구매예약` purchase CTA and a heavily-used interactive/link accent — the system's single "commit" color. Token-set key `tokens.colors.primary`.
- **Ink** (`#0d0d0e`): Primary text and heading color. A near-black that carries maximum legibility for dense listing data — used instead of a soft grey. Token-set key `tokens.colors.ink`.
- **Pure Black** (`#000000`): The secondary action button background (e.g. `인증 리포트`) and selected-chip border; a deliberate second dark distinct from the blue primary. Token-set key `tokens.colors.ink-pure`.

Neutral and surface

- **Canvas White** (`#ffffff`): Page background and white card surfaces. Token-set key `tokens.colors.canvas`.
- **Neutral Surface** (`#70727c`): The base of the low-alpha tint (~5–8%) used for surface blocks, photo thumbnail tiles, and filter chips — the primary flat-separation device. Token-set key `tokens.colors.surface`.
- **Hairline** (`#e9eaec`): Thin borders, dividers, and white-card outlines — the separation device given the shadow-free system. Token-set key `tokens.colors.hairline`.
- **On-Dark** (`#f8f8f9`): Off-white text/foreground used on black and dark blocks. Token-set key `tokens.colors.on-dark`.

Dark blocks

- **Chip Dark** (`#0f1014`): Near-black background for immersive dark tiles and dark chips. Token-set key `tokens.colors.chip-dark`.
- **Ink Navy** (`#272e40`): Dark navy surface used on select immersive blocks and the sell-flow hero. Token-set key `tokens.colors.ink-navy`.

Text hierarchy

- **Ink** (`#0d0d0e`): Primary text, headings, labels, active nav. Same hex as the Primary Ink role; the uses stay attached to the rows the source wrote.
- **Muted** (`#37383d`): Secondary / inactive text (rendered around 60% alpha for inactive nav items). Token-set key `tokens.colors.muted`.
- **Muted Alt** (`#2d2e32`): Dark de-emphasized text (rendered around 88% alpha). Token-set key `tokens.colors.muted-alt`.
- **Muted Grey** (`#858892`): Tertiary text, captions, metadata, fine print. Token-set key `tokens.colors.muted-grey`.

### Spacing

Unitless token-set steps from `tokens.spacing`: `xs 4` · `sm 8` · `md 12` · `base 16` · `lg 24` · `section 48`. The source restates the same scale in px as 4px, 8px, 12px, 16px, 24px, 48px, with a 4px base unit. Button horizontal padding lands at 24px; chip padding at 8px 12px. `tokens.spacing.base: 16` is not `tokens.rounded.lg: 16`. `tokens.spacing.xs: 4` is not `tokens.rounded.md: 4`. `tokens.spacing.lg: 24` is not button padding `0 24px` as a spacing-step synonym. Keeping those key paths unmerged is a derived editorial implementation inference from the verified surfaces; it is not Heydealer-authored or a separately published UI specification.

### Shape

Unitless token-set steps from `tokens.rounded`: `sm 2` · `md 4` · `lg 16` · `full 9999`.

The source's named radius uses, kept on their own rows:

- Fine (2px): fine-grained inner elements — `tokens.rounded.sm`
- Standard (4px): buttons, cards, chips, tiles — the universal workhorse — `tokens.rounded.md`
- Soft (16px): the overlay search field — `tokens.rounded.lg`
- Pill (100px): a few rounded chips/badges — a body-named use, not `tokens.rounded.full: 9999`
- Circle (50%): avatars and circular controls — a body-named use, not `tokens.rounded.full: 9999`

`tokens.rounded.full: 9999` stays the unitless full step. It is not the 100px pill and it is not the 50% circle. `tokens.rounded.md: 4` is not `tokens.spacing.xs: 4`. `tokens.rounded.lg: 16` is not `tokens.spacing.base: 16`. Keeping those paths unmerged is a derived editorial implementation inference from the verified surfaces; it is not Heydealer-authored or a separately published UI specification.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow | Page background, inline text, most surfaces |
| Tint (Level 1) | Low-alpha `#70727c` background shift | Card/section/thumbnail separation without elevation |
| Hairline (Level 2) | `1px solid #e9eaec` border | White card outlines, dividers |

Token-set path `tokens.shadow.none`: `none`. Live inspection found `box-shadow: none` across the nav, listing cards, filter chips, and CTAs. Depth and grouping are communicated entirely through flat low-alpha `#70727c` tints and thin `#e9eaec` hairlines. When emphasis is needed, the system reaches for color (blue `#396eff`) or a dark block (`#0f1014` / `#272e40`), never elevation. Reading that as a near-shadowless, deliberate modern-flat choice that keeps a data-dense used-car marketplace feeling fast and app-native, and as a refusal of the heavy card-stack look of legacy classified sites, is a derived editorial implementation inference from the verified surfaces; it is not Heydealer-authored or a separately published UI specification.

### Motion

The source attributes its token-level claims to a live inspection of computed color, type, radius, and shadow on the three heydealer.com surfaces. The motion contract below sits outside that attribution: the source's own evidence note assigns a source to its voice samples, its brand narrative, and its personas, and assigns none to the easing curves. The durations, easing roles, and motion rules below are therefore a derived editorial implementation inference from the verified surfaces; they are not Heydealer-authored or a separately published UI specification.

Durations:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, chip/press, focus |
| `motion-standard` | 200ms | Card/section reveal, sheet, dropdown |
| `motion-slow` | 320ms | Page-level transitions, gallery open |

Easing roles — three roles with declared uses. The specific curve values the source lists (`cubic-bezier(0.2, 0.6, 0.25, 1)`, `cubic-bezier(0.4, 0.0, 1, 1)`, `cubic-bezier(0.25, 0.1, 0.25, 1)`) are not traceable to Heydealer-computed samples, so the curves are omitted here and only the roles and their uses are kept:

| Token | Use |
|---|---|
| `ease-enter` | Arriving — sheets, cards, chips |
| `ease-exit` | Dismissals |
| `ease-standard` | Two-way transitions |

An exact curve may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework or vendor document — does not satisfy that condition.

Motion rules, as the source states them:

- Motion is functional and quiet — consistent with the flat, fast, data-dense aesthetic.
- Listing cards and spec sheets fade-in from below at `motion-standard / ease-enter`; chips respond to press with a subtle scale/opacity shift.
- No bounce or spring — a used-car transaction platform signals steadiness and trust, not playfulness.
- Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the marketplace remains fully functional.

The "steadiness and trust, not playfulness" reading is the source's own motion rule; treating it as a current-surface instruction is already covered by the motion-section qualifier above.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | The three inspected heydealer.com surfaces and the PRND company blog describe the product and the operating company. They do not publish a universal current typography token or a separately issued type specimen. That "no published type token" reading is a derived editorial implementation inference from the verified surfaces; it is not Heydealer-authored or a separately published UI specification. |
| Live computed surface-use | The three inspected surfaces compute visible text as `spoqaHanSansNeo` (Spoqa Han Sans Neo). Body computes `font-family: spoqaHanSansNeo, -apple-system, system-ui, sans-serif` at 16px / `#0d0d0e`. |
| Official distributed asset | No Heydealer-exclusive downloadable font package was verified in the source. That absence-of-exclusive-package reading is a derived editorial implementation inference from the verified surfaces; it is not Heydealer-authored or a separately published UI specification. |
| Declared-only | The source records `-apple-system`, `system-ui`, and `sans-serif` as fallbacks after Spoqa Han Sans Neo. They are fallbacks, not a second brand face. Classing those fallback members as not the brand face is a derived editorial implementation inference from the verified surfaces; it is not Heydealer-authored or a separately published UI specification. |
| License | The source records Spoqa Han Sans Neo as a widely-used open-source hangul family. This record does not establish a Heydealer-issued font-license notice. That upstream-versus-grant reading is a derived editorial implementation inference from the verified surfaces; it is not Heydealer-authored or a separately published UI specification. |
| Outside these captures | Typography on surfaces the source did not inspect stays outside these three captures. Reading that typography as outside this contract is a derived editorial implementation inference from the verified surfaces; it is not Heydealer-authored or a separately published UI specification. |

### Family

- **Current visible UI family:** `spoqaHanSansNeo` (Spoqa Han Sans Neo), with system fallbacks (`-apple-system`, `system-ui`, `sans-serif`). Token-set path `tokens.typography.family.sans`. This single family carries display, UI, and body — there is no separate display face.
- Do not replace Spoqa Han Sans Neo with a system substitute. A fallback member of the stack is never presented as the brand face. That fallback prohibition is a derived editorial implementation inference from the verified surfaces; it is not Heydealer-authored or a separately published UI specification.

### Type roles

| Role | Font | Size | Weight | Line height | Tracking | Token-set use |
|---|---|---:|---:|---:|---:|---|
| Display | Spoqa Han Sans Neo | 32px (2.00rem) | 700 | 1.38 (44px) | -0.32px | Largest section display, Spoqa Han Sans Neo Bold |
| Section Heading | Spoqa Han Sans Neo | 20px (1.25rem) | 700 | 1.40 (28px) | -0.32px | Section titles (색상, 옵션) |
| Card / Feature Head | Spoqa Han Sans Neo | 18px (1.13rem) | 700 | 1.44 (26px) | -0.252px | Card / feature heads (비슷한 차) |
| Emphasis / Button | Spoqa Han Sans Neo | 15px (0.94rem) | 700 | 1.47 (22px) | -0.195px | Bold labels, button text, spec emphasis |
| Body | Spoqa Han Sans Neo | 16px (1.00rem) | 400 | 1.50 | normal | Standard reading text, listing copy |
| Meta | Spoqa Han Sans Neo | 15px (0.94rem) | 400 | 1.47 (22px) | -0.195px | Secondary / meta text (muted) |

Unitless line heights stay ratios: `1.38` on Display; `1.40` on Section Heading; `1.44` on Card / Feature Head; `1.47` on Emphasis / Button and Meta; `1.50` on Body. The parenthetical px figures are the source table's conversions, not a replacement of the ratio. YAML tracking `tokens.typography.card-head.tracking: -0.25` stays unitless beside the visible-section form `-0.252px`. YAML tracking `-0.32` / `-0.195` stays unitless beside visible `-0.32px` / `-0.195px`. Keeping the ratios and the parenthetical conversions on separate readings, rather than replacing one with the other, is a derived editorial implementation inference from the verified surfaces; it is not Heydealer-authored or a separately published UI specification.

Type rules the source states:

- **Weight is the hierarchy**: Bold (700) marks every heading, label, and CTA; Regular (400) carries every paragraph. The weight contrast — not size or color — is the primary signal.
- **One family, every job**: Spoqa Han Sans Neo runs display through fine print. There is no separate display font; consistency is the point.
- **Tight tracking scales with size**: -0.32px at 20px, -0.252px at 18px, -0.195px at 15px. Headings compress; body stays at normal tracking.
- **Restrained display sizes**: The web marketplace tops out around 32px — heydealer favors dense, scannable data over big hero type.

The four rule titles and the hierarchy-signal / consistency / dense-data readings are a derived editorial implementation inference from the verified surfaces; they are not Heydealer-authored or a separately published UI specification. The sizes, weights, ratios, and tracking values are recorded.

### Assets

- Logo treatment the source frontmatter records: `logo.type: favicon` and `logo.slug` `https://www.google.com/s2/favicons?domain=heydealer.com&sz=128`. That slug is an identity pointer through a third-party favicon service, not a Heydealer-hosted brand file URL.
- Vehicle photography and listing imagery are first-party catalog content; do not replace them with invented brand-color decoration.
- Vehicle photos sit in 4px-radius tiles on the neutral `#70727c` tint with no shadow at any size. Thumbnail galleries (외부/실내) maintain the sharp 4px radius.

Reading the favicon-service URL as an identity pointer rather than a hosted brand file, and reading vehicle photography as first-party catalog content that must not be replaced with invented decoration, is a derived editorial implementation inference from the verified surfaces; it is not Heydealer-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### How applicability is decided here

The source declares each token-set component with a primitive type (`button`, `tab`, `badge`, `card`, `input`) and a value set; those types are preserved per component. Applicability below is judged by each control's role, never by whether a visual treatment for that state happens to be recorded: where the source supplies no treatment for an applicable state, the value is omitted and the state stays applicable. `not-applicable` is used only where the control's role makes the state meaningless — a destination CTA that commits no operation in place, a tab that only selects, or a display element with no action at all — and the reason given is always that semantic one. Where the source supplies no interaction evidence for a container at all, its kind and applicability map are omitted rather than decided.

The source records no `focus-visible` treatment. Generic focus is not invented. `focus-visible` stays applicable on interactive controls; the visual treatment is omitted.

The role-based decision procedure above, every interactive-kind verdict, every applicability verdict, and the reason given for either is a derived editorial implementation inference from the verified surfaces; they are not Heydealer-authored or a separately published UI specification. This is not a complete state-coverage claim.

### Primary Purchase CTA

- Role: in-place purchase-reservation commit on a car-detail page
- Primitive type: `button` · Kind: interactive
- Domain: `https://www.heydealer.com/market/cars/gQ60AKy0`
- Background: `#396eff`
- Text: `#f8f8f9`
- Radius: 4px
- Padding: 0px 24px
- Height: 52px
- Font: 15px Spoqa Han Sans Neo weight 700
- Token-set font record: `15px / 700 spoqaHanSansNeo`
- Token-set use: `Primary blue CTA — 바로 구매예약 (book purchase)`
- Published label: `바로 구매예약`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | The surface contract fades the blue CTA rather than turning it grey, so the brand read is preserved |
| loading | applicable | The source names this the purchase-reservation commit; the surface state contract records bid/quote compute as inline progress within the action area |
| error | applicable | The control can commit a reservation; the surface state contract records fetch-failed and form-validation treatments at system level. Visual treatment at this control is omitted |
| success | applicable | The control can commit a reservation; the surface state contract records purchase-reserved confirmation at system level. Visual treatment at this control is omitted |

### Black Secondary

- Role: destination control that opens the certified report
- Primitive type: `button` · Kind: interactive
- Domain: `https://www.heydealer.com/market/cars/gQ60AKy0`
- Background: `#000000`
- Text: `#f8f8f9`
- Radius: 4px
- Padding: 0px 24px
- Height: 52px
- Font: 15px Spoqa Han Sans Neo weight 700
- Token-set font record: `15px / 700 spoqaHanSansNeo`
- Token-set use: `Black secondary action — 인증 리포트 (certified report)`
- Published label: `인증 리포트`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | An entry point whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control opens `인증 리포트`; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | This control sends the reader to a destination; the destination, not the button, reports whether that request failed |
| success | not-applicable | Same role reason: reaching a report is not an operation with a success result on this button |

### Nav Text Button

- Role: header nav actions that send the reader to a first-party destination
- Primitive type: `button` · Kind: interactive
- Domain: homepage header
- Background: transparent
- Text: `#0d0d0e`
- Radius: 4px
- Padding: 8px
- Font: 15px Spoqa Han Sans Neo weight 700
- Use: Header nav actions (내차사기, 내차팔기); inactive items drop to `#37383d` at 60% alpha
- This §4 record is not the YAML `nav-link` row. YAML `nav-link` is 16px / 400 and is declared below as Top Nav.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A destination action whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control launches 내차사기 or 내차팔기; it does not commit an in-page operation whose in-progress state it could report |
| error | not-applicable | Destination action; the destination, not this button, reports failure |
| success | not-applicable | Same role reason: reaching 내차사기 or 내차팔기 is not an operation this button reports as success |

### Overlay Search

- Role: rounded overlay search field
- Primitive type: `input` · Kind: interactive
- Background: `#000000`
- Text: `#f8f8f9`
- Radius: 16px
- Font: 16px Spoqa Han Sans Neo weight 400
- Token-set font record: `16px / 400 spoqaHanSansNeo`
- Token-set use: `Rounded overlay search field`
- The 16px corner is `tokens.rounded.lg`. It is not the 4px workhorse.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web field; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable field; visual treatment omitted |
| disabled | applicable | A search field whose availability can lapse; visual treatment omitted |
| loading | not-applicable | The field accepts a query; it does not commit a fetch whose in-progress state it reports on itself |
| error | applicable | The surface contract records field-level validation below the input |
| success | not-applicable | The field does not complete a reservation or registration on itself |

### Selected Filter Chip

- Role: selected spec filter chip on a low-alpha tint
- Primitive type: `badge`
- Kind: non-interactive — a selected-spec label, not a commit control
- Background: `#70727c`
- Text: `#0d0d0e`
- Border: 1px solid `#000000`
- Radius: 4px
- Padding: 8px 12px
- Font: 16px Spoqa Han Sans Neo weight 400
- Token-set font record: `16px / 400 spoqaHanSansNeo`
- Token-set use: `Selected spec filter chip on low-alpha #70727c tint`
- Published label: `2.0 가솔린`
- Source layout note: filter chips at ~36px height with 8px 12px padding

### White Listing Card

- Role: white listing / content card, hairline separated, no shadow
- Primitive type: `card`
- Background: `#ffffff`
- Text: `#0d0d0e`
- Border: 1px solid `#e9eaec`
- Radius: 4px
- Token-set use: `White listing / content card, hairline separated, no shadow`

The source supplies no interaction evidence for this card, so kind and a state-applicability map are both withheld.

### Photo Thumbnail Tile

- Role: vehicle photo thumbnail tile
- Primitive type: `card`
- Background: `#70727c`
- Radius: 4px
- Token-set use: `Photo thumbnail tile, neutral #70727c surface at ~5% alpha`
- Use: Vehicle photo thumbnail tile — neutral `#70727c` surface at ~5% alpha (외부 / 실내 galleries)

The source supplies no interaction evidence for this tile, so kind and a state-applicability map are both withheld.

### Blue Info Strip

- Role: reassurance strip on a `#396eff` tint at ~4% alpha
- Kind: non-interactive — published guarantee copy, not a control
- Text: `#0d0d0e`
- Radius: 4px
- Padding: 12px
- Published labels: `모든 차량 1년 무료 보증`, `단순 변심도 무료 환불 가능`
- This §4 record has no YAML token-set row.

### Top Nav

- Role: top horizontal nav item
- Primitive type: `tab` · Kind: interactive
- Domain: homepage
- Background: `#ffffff`
- Text: `#0d0d0e`
- Font: 16px Spoqa Han Sans Neo weight 400
- Token-set font record: `16px / 400 spoqaHanSansNeo`
- Token-set active: `text #0d0d0e`
- Inactive: `#37383d` at 60% alpha
- Token-set use: `Top nav item; inactive links drop to #37383d at 60% alpha`
- Published labels: `헤이딜러 홈`, `내차사기`, `내차팔기`, `폐차 견적받기`, `중고차 숨은 이력`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable item; visual treatment omitted |
| disabled | applicable | A destination item whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This item is a destination tab; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Destination tab; the destination, not the item, reports failure |
| success | not-applicable | Same role reason: reaching 헤이딜러 홈, 내차사기, 내차팔기, 폐차 견적받기, or 중고차 숨은 이력 is not an operation with a success result |

### State record

The source's state contract, preserved with its values and copy. The source's own evidence note assigns a source to its voice samples, its brand narrative, and its personas, and assigns none to this state section; the treatments below are therefore a derived editorial implementation inference from the verified surfaces rather than measured per-control observations, and they are not Heydealer-authored or a separately published UI specification.

| State | Treatment |
|---|---|
| **Empty (no listings match filters)** | White canvas. Single Ink (`#0d0d0e`) line explaining no matching cars, with a path to relax filters. No illustration clutter. |
| **Empty (no saved cars yet)** | Muted Grey (`#858892`) single line: nothing saved yet, plus a link back to the marketplace. Calm and honest. |
| **Loading (listing fetch)** | Skeleton tiles on the low-alpha `#70727c` tint at final card dimensions, 4px radius. Flat pulse — no shadow shimmer, consistent with the shadowless system. |
| **Loading (bid/quote compute)** | Inline progress within the action area; previously loaded listings stay visible. |
| **Error (fetch failed)** | Inline message in Ink (`#0d0d0e`) with a plain-language explanation and a retry. Never a bare "오류가 발생했습니다" — states what to do next. |
| **Error (form validation)** | Field-level message below the input; describes what's valid, not just "필수". |
| **Success (purchase reserved / car registered)** | Brief inline confirmation in calm tone; next-step detail (delivery, dealer contact) linked immediately below. No celebratory emoji. |
| **Skeleton** | `#70727c`-tint blocks at final dimensions, 4px radius, flat pulse. |
| **Disabled** | Muted Grey (`#858892`) text on a reduced-opacity surface; the blue CTA fades rather than turning grey to preserve brand read. |

These rows describe marketplace listing, reservation, and form treatments the source wrote at system level. They are not attached as visual treatments to the destination controls above. That non-attachment reading is a derived editorial implementation inference from the verified surfaces; it is not Heydealer-authored or a separately published UI specification.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

- Dense listing/marketplace grid is the dominant pattern — vehicle cards tiled with hairline separation
- Car detail pages stack a photo gallery (thumbnail tiles) over spec sections and a sticky purchase CTA
- Sections separate by white (`#ffffff`) vs low-alpha `#70727c` tint bands rather than by borders or elevation
- Cards use the sharp 4px radius and group related specs/listings
- Spacing restated from `tokens.spacing`: 4 / 8 / 12 / 16 / 24 / 48
- Shape restated from `tokens.rounded`: fine 2 · workhorse 4 · search 16 · `full: 9999`; body-named pill 100px and circle 50% stay on those uses

Reading the marketplace as dense but breathable through a consistent 4px-grid rhythm and hairline separation rather than padding bloat, reading blocks as flat segmentation by background tint and `#e9eaec` hairlines, and reading the blue CTA as spatially isolated (often sticky) so the next step is unambiguous amid dense listings, are derived editorial implementation inferences from the verified surfaces; they are not Heydealer-authored or a separately published UI specification.

Responsive behavior. The source's live inspection was run as a computed-style pass, and its own evidence note attributes token-level claims to that inspection; the breakpoints, collapsing strategy, and the source's reading of the recorded target sizes are stated by the source at system level rather than measured across viewports, so they are a derived editorial implementation inference from the verified surfaces and are not Heydealer-authored or a separately published UI specification.

| Name | Width | Key Changes |
|---|---|---|
| Mobile | <640px | Single-column listing feed, sticky bottom CTA, chips wrap/scroll |
| Tablet | 640-1024px | 2-up card grid, moderate padding |
| Desktop | 1024-1440px | Multi-column marketplace grid, side spec panels on detail pages |

Touch targets the source records: Primary CTA at 52px height, full-width sticky on mobile; secondary black button at 52px height with 24px horizontal padding; filter chips at ~36px height with 8px 12px padding.

Collapsing strategy, as the source states it:

- Marketplace grid: multi-column → single-column feed on mobile
- Car detail: side-by-side gallery + spec panel → stacked, with the purchase CTA pinned to the bottom
- Filter chip rows wrap/scroll horizontally on narrow viewports
- Tint/white alternating bands maintain full-width treatment

Image behavior, as the source states it: vehicle photos sit in 4px-radius tiles on the neutral `#70727c` tint with no shadow at any size; thumbnail galleries (외부/실내) maintain the sharp 4px radius across breakpoints.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The source characterizes Heydealer's voice as **plain, reassuring, and pro-consumer** — a service that takes an anxiety-heavy transaction (selling or buying a used car) and makes it feel controlled and fair. Copy is direct and functional Korean, action-first, and stripped of dealership sales-speak. The register treats the user as someone who deserves transparency and protection, not a mark to be worked. Reassurance is stated as concrete guarantees ("모든 차량 1년 무료 보증", "단순 변심도 무료 환불 가능") rather than adjectives. That characterization, that register reading, and the tone table below are a derived editorial implementation inference from the verified surfaces; they are not Heydealer-authored or a separately published UI specification. The Korean lines themselves are live surface copy.

| Context | Tone |
|---|---|
| Primary CTAs | Direct, low-pressure imperatives. "바로 구매예약", "내차팔기". |
| Nav / section labels | Plain and functional. "내차사기", "폐차 견적받기", "중고차 숨은 이력". |
| Trust / warranty copy | Concrete guarantees, stated plainly. "모든 차량 1년 무료 보증", "인증 리포트". |
| Spec / listing data | Neutral, dense, factual. Year, trim, fuel — no embellishment. |
| Reassurance strips | Benefit-first, protection-framed. "단순 변심도 무료 환불 가능". |

**Voice samples (verbatim from live surfaces):**

- "바로 구매예약" — primary purchase CTA on a car detail page (direct, low-pressure).
- "모든 차량 1년 무료 보증" — warranty reassurance strip (concrete guarantee).
- "헤이딜러 – 인증중고차, 내차팔기, [번호판]시세" — homepage title meta (scope: certified cars, sell-my-car, plate valuation).

Further published strings the source records on the inspected surfaces, kept byte-exact:

- 헤이딜러
- 바로 구매예약
- 인증 리포트
- 색상, 옵션
- 비슷한 차
- 내차사기, 내차팔기
- 2.0 가솔린
- 모든 차량 1년 무료 보증
- 단순 변심도 무료 환불 가능
- 헤이딜러 홈
- 폐차 견적받기
- 중고차 숨은 이력
- 헤이딜러 – 인증중고차, 내차팔기, [번호판]시세
- 외부 / 실내
- 피알앤디컴퍼니
- 헤이딜러 방지법
- 오류가 발생했습니다
- 필수
- 최고의
- 혁신적인

**Forbidden register**: high-pressure dealership urgency, vague hype adjectives ("최고의", "혁신적인") in place of concrete terms, undefined jargon, exclamation-heavy marketing, anything that hides fees or conditions.

Reproduce the Korean strings above byte-exact rather than translating or re-casing them. An English gloss may sit beside a Korean line; it never replaces the line. That byte-exact / gloss-beside rule is a derived editorial implementation inference from the verified surfaces; it is not Heydealer-authored or a separately published UI specification.

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

- **Exact easing curves.** Three easing roles and their uses are established; the curve values are omitted because they are not traceable to Heydealer-computed samples. Promote a curve for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed.
- **Card-head tracking.** The token set records `-0.25`; the visible hierarchy table records `-0.252px`. Both figures are kept. Neither was chosen as a replacement.
- **Full radius step.** `tokens.rounded.full: 9999` is the unitless full step. The body-named 100px pill and 50% circle stay on those uses.
- **Hover and focus-visible treatments.** Those visual treatments are omitted. They are not `not-applicable`; applicability follows control meaning.
