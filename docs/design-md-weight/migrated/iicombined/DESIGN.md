# IICOMBINED Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

IICOMBINED (아이아이컴바인드) is the Korean creative house behind Gentle Monster (eyewear), Tamburins (fragrance), and Nudake (dessert art), and this contract covers the two first-party brand-owned surfaces the source inspected for tokens on 2026-06-17: `https://www.gentlemonster.com` and `https://www.tamburins.com`. The YAML homepage is `https://www.gentlemonster.com`. Every value stays attached to the surface that established it. Reading IICOMBINED as the house behind those three brands, reading those two inspected pages as this contract's token surfaces, and keeping values attached to the surface that established them, are derived editorial implementation inferences from the verified surfaces; they are not IICOMBINED-authored or a separately published UI specification.

The captured interface layer is rigorously achromatic: a stark canvas of pure white (`#ffffff`) and near-black ink (`#111111` on Gentle Monster, `#1d1d1d` on Tamburins) with no chromatic brand hue. Color, when it appears, belongs to the campaign photography and full-bleed video. Typography splits one expressive display voice from one near-silent sans: custom **Gentle Monster Serif** for editorial campaign headlines (24px, weight 400) set in white over dark imagery; bespoke **GentleSans** at Light (350) and Regular (400) for navigation, menus, and product labels in 12–16px; **Pretendard** on Tamburins for functional sans and uppercase section heads. Live inspection found `box-shadow: none` across nav, hero, and product tiles on both brands. Interactive chrome reduces to the hairline pill: a transparent `25px`-radius outlined button on Gentle Monster (`구매하기`, `캠페인 보기`) and a fully-rounded `9999px` outlined pill on Tamburins, both a single `1px` stroke. The only solid button is the near-black consent action (`#111111`, 8px radius). Tinted grey bands (`#f3f4f6`) separate sections. Cool neutral text runs `#343434` → `#555555` → `#858585`. The hex values, family names, weights, radii, and surface names in this paragraph are recorded. The characterizations built on them — installation-grade gallery that happens to sell products; UI that recedes so imagery can perform; high-fashion magazine-cover register; whispered chrome; gallery-grade editorial commerce; one expressive display voice against one near-silent sans; chrome reduced to the hairline pill — are a derived editorial implementation inference from the verified surfaces; they are not IICOMBINED-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. IICOMBINED (아이아이컴바인드) is the Korean creative house founded by **Hankook Kim (김한국)** that operates a portfolio of experiential brands — **Gentle Monster** (eyewear, launched 2011), **Tamburins** (fragrance and body care), and **Nudake** ("make a new dream", a conceptual dessert/art brand). The house's founding premise rejects the convention that a retail brand is a catalog of products: instead, each brand is run as an art-and-space practice, where flagship stores are rotating installations and the product is the artifact left behind by an exhibition. That installation-first thinking shapes everything in the digital experience. The Gentle Monster site is built like a gallery — full-bleed campaign video, a custom serif used the way a museum uses titling, and a UI so quiet it nearly disappears. Tamburins extends the same monochrome, sculptural sensibility to fragrance, with stark white space and editorial photography. The house treats commerce and art direction as the same discipline; the storefront is a continuation of the physical installation, not a separate marketing channel. What IICOMBINED refuses, visible in its design: the saturated, badge-heavy urgency of conventional e-commerce; chromatic brand palettes that fight the product photography; and decorative depth (shadows, card stacks) that would make the surface feel like a shop rather than a space. What it embraces: an achromatic black-and-white system, custom typography as identity, full-bleed imagery as the primary medium, and a restraint that signals art over merchandising. The year 2011, the founder Hankook Kim (김한국), the three brand names, Nudake's "make a new dream", fragrance and body care, and the closing refuse/embrace pairing are the source's own narrative facts; they do not by themselves supply interface tokens. Classifying that founding-and-installation narrative as context that does not by itself supply interface tokens is a derived editorial implementation inference from the verified surfaces; it is not IICOMBINED-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=4 lang=en -->
### Primary tasks

Selecting these four as the product's primary tasks is a derived editorial implementation inference from the verified surfaces; it is not IICOMBINED-authored or a separately published UI specification. Each names a label or surface the source records. They do not come from the source's persona section.

- Open `캠페인 보기` on `https://www.gentlemonster.com`.
- Use `구매하기` on the campaign overlay.
- Browse top nav `선글라스`, `안경`, `베스트셀러`, `2026 컬렉션`, and `선물`.
- Read Tamburins collection copy `새로운 헤어 퍼퓸 컬렉션` on `https://www.tamburins.com`.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source labels its named figures as fictional archetypes informed by publicly observable IICOMBINED audience segments (design-aware fashion buyers, fragrance enthusiasts, art-and-retail followers), not individual people, so those biographies are dropped rather than promoted, and no name, age, city, or occupation is carried into this document or its sidecar. What the source independently records is the audience at a group level: design-aware fashion buyers, fragrance enthusiasts, art-and-retail followers. Reading those groups as this product's audience is a derived editorial implementation inference from the verified surfaces; it is not IICOMBINED-authored or a separately published UI specification.

### Distinctive traits

The list restates the source's Key Characteristics. The values are measured; the groupings and the readings inside them are a derived editorial implementation inference from the verified surfaces — they are not IICOMBINED-authored or a separately published UI specification.

- Achromatic system — pure white (`#ffffff`) + near-black ink (`#111111` / `#1d1d1d`), no chromatic brand color
- Custom "Gentle Monster Serif" for editorial campaign H1 — white over imagery, high-fashion register
- Bespoke GentleSans at Light (350) and Regular (400); Pretendard on Tamburins — quiet 12–16px UI
- Hairline outlined pills — 25px-radius transparent CTA (GM), 9999px full pill (Tamburins), 1px stroke
- Single solid button only — near-black (`#111111`) consent/commit action at 8px radius
- Flat depth — `box-shadow: none` everywhere; tinted grey bands (`#f3f4f6`) separate, not elevation
- Full-bleed image and video tiles with zero border — the imagery is the interface
- Cool neutral text ladder (`#343434` → `#555555` → `#858585`) for secondary hierarchy

### Principles

These five items are a derived editorial implementation inference from the verified surfaces; they are not IICOMBINED-authored or a separately published UI specification. The source states them in its own Principles section together with the UI implication it draws from each.

1. **The imagery is the interface.** Campaign photography and video carry the experience; the UI is a thin overlay. *UI implication:* keep chrome minimal and achromatic so it never competes with full-bleed imagery.
2. **Monochrome by conviction.** No chromatic brand hue exists in the chrome. *UI implication:* white and near-black ink (`#111111`) only for buttons, text, and structure — color belongs to the campaign.
3. **Custom type is the identity.** The Gentle Monster Serif and GentleSans are bespoke and non-substitutable. *UI implication:* one expressive serif for campaign headlines, one whisper-weight sans for everything functional.
4. **Flat as a gallery wall.** Elevation reads as retail; flatness reads as exhibition. *UI implication:* no shadows; separate with tinted bands and image edges.
5. **Restraint signals premium.** Fewer elements, quieter weights, sharper geometry. *UI implication:* small light labels, one solid button, hairline outlined pills — nothing shouts.

### Application rules

The source states these eight as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not IICOMBINED-authored or a separately published UI specification.

- Keep the palette achromatic — pure white (`#ffffff`) and near-black ink (`#111111` / `#1d1d1d`) only for chrome
- Reserve color for the campaign imagery and video, never for buttons or labels
- Use the custom Gentle Monster Serif for editorial campaign headlines set over imagery
- Run UI labels at whisper weight (GentleSans Light 350) in small 12–16px sizes
- Use hairline outlined pills for CTAs — 25px-radius transparent (GM), 9999px full pill (Tamburins)
- Reserve the single solid button (`#111111`, 8px radius) for consent / commit actions only
- Separate sections with tinted grey bands (`#f3f4f6`) and full-bleed image edges, not shadows
- Let product tiles run borderless and full-bleed — the imagery is the interface

### Avoid

The source states these seven as its Don't list; they are kept as its rules, reasons included. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not IICOMBINED-authored or a separately published UI specification.

- Introduce a chromatic brand hue into the chrome — the system is monochrome by design
- Use drop shadows or card elevation — IICOMBINED is a flat, shadowless house
- Set body or UI text at heavy weights — UI is whisper-weight (350) GentleSans Light
- Wrap product tiles in borders or rounded corners — they are sharp, borderless image surfaces
- Spread solid fills across buttons — only the consent action is solid; CTAs are hairline outlines
- Use pure black (`#000000`) for large text where near-black ink (`#111111`) is the house tone
- Let UI compete with the imagery — chrome recedes so the campaign performs

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Each role below pairs a name with the value and the use the source records. Where a line also characterizes a value — softer premium near-black, campaign-scoped navy, the one warm note — that characterization is a derived editorial implementation inference from the verified surfaces; it is not IICOMBINED-authored or a separately published UI specification.

Primary (achromatic)

- **Ink Black** (`#111111`): The house primary. Gentle Monster's text color (the dominant foreground), the solid-button fill, and the system's single "ink". Token-set key `tokens.colors.primary`.
- **Ink Alt** (`#1d1d1d`): Tamburins' parallel primary ink — the near-black used for body text and outlined-pill labels on the fragrance surface. Token-set key `tokens.colors.ink-alt`.
- **Pure White** (`#ffffff`): Page background, product-tile surface, and the label/CTA color when set over dark campaign imagery. Token-set key `tokens.colors.canvas`.

Neutral and surface

- **Pure Black** (`#000000`): Maximum-contrast accent — Tamburins' pill borders and occasional hero text. Token-set key `tokens.colors.ink-pure`.
- **Surface Grey** (`#f3f4f6`): Cool light-grey content band that segments sections on the canvas without a border. Token-set key `tokens.colors.surface`.
- **Surface Alt** (`#f2f4f5`): A near-identical secondary grey for alternating blocks and menu overlays. Token-set key `tokens.colors.surface-alt`.

Text hierarchy

- **Ink Black** (`#111111`): Primary text, headings, nav, strong labels. Same hex as `tokens.colors.primary`; the keys stay unmerged.
- **Muted Deep** (`#343434`): Secondary copy and sub-labels. Token-set key `tokens.colors.muted-deep`.
- **Muted Mid** (`#555555`): Tertiary text and metadata. Token-set key `tokens.colors.muted-mid`.
- **Muted Grey** (`#858585`): Lowest-emphasis labels, disabled/placeholder text. Token-set key `tokens.colors.muted`.
- **On-Dark White** (`#ffffff`): All text and labels set over campaign imagery or dark sections. Token-set key `tokens.colors.on-dark`. Same hex as Pure White / `tokens.colors.canvas`; the keys stay unmerged. Keeping `tokens.colors.canvas` and `tokens.colors.on-dark` as separate keys that share a hex is a derived editorial implementation inference from the verified surfaces; it is not IICOMBINED-authored or a separately published UI specification.

Rare accents (campaign-scoped, not chrome)

- **Navy Accent** (`#27455c`): A muted slate-navy that appears only inside campaign artwork/section blocks — never on interactive chrome. Token-set key `tokens.colors.navy-accent`.
- **Alert Red** (`#d12b2b`): A sharp editorial red seen sparingly on Tamburins (e.g. notice/error or a single accent mark) — the one warm note in an otherwise monochrome system. Token-set key `tokens.colors.alert`.

### Spacing

Unitless token-set steps from `tokens.spacing`: `xs 4` · `sm 8` · `md 12` · `base 16` · `lg 23` · `xl 32` · `xxl 48` · `section 64`. Written as paths: `tokens.spacing.xs: 4` · `tokens.spacing.sm: 8` · `tokens.spacing.md: 12` · `tokens.spacing.base: 16` · `tokens.spacing.lg: 23` · `tokens.spacing.xl: 32` · `tokens.spacing.xxl: 48` · `tokens.spacing.section: 64`. The source restates the same scale in px as 4px, 8px, 12px, 16px, 23px, 32px, 48px, 64px, with a ~8px base unit. CTA horizontal padding lands at a measured 23px — that is `tokens.spacing.lg: 23`, not `tokens.rounded.md: 25`. `tokens.spacing.sm: 8` is not `tokens.rounded.sm: 8`. `tokens.spacing.base: 16` is not a type size. Keeping those key paths unmerged is a derived editorial implementation inference from the verified surfaces; it is not IICOMBINED-authored or a separately published UI specification.

### Shape

Unitless token-set steps from `tokens.rounded`: `sm 8` · `md 25` · `lg 45` · `full 9999`. Written as paths: `tokens.rounded.sm: 8` · `tokens.rounded.md: 25` · `tokens.rounded.lg: 45` · `tokens.rounded.full: 9999`. The YAML set has no `none` step; the 0px tile/band radius is a component writing, not a rounded key.

The source's named radius uses, kept on their own rows:

- Sharp (0px): product tiles, surface bands, imagery — the default. Component writing on `product-card` and `surface-card`, not a `tokens.rounded` key.
- Small (8px): the solid consent button — `tokens.rounded.sm`
- Pill (25px): the outlined CTA on Gentle Monster — `tokens.rounded.md`
- Full (45px / 9999px): Tamburins' fully-rounded outlined pill. `tokens.rounded.lg: 45` stays the unitless lg step. `tokens.rounded.full: 9999` stays the unitless full step. The pill component record uses height `45px` and radius `9999px`. None of those writings replaces another.

`tokens.rounded.sm: 8` is not `tokens.spacing.sm: 8`. `tokens.rounded.md: 25` is not `tokens.spacing.lg: 23`. `tokens.rounded.lg: 45` is not `tokens.components.button-pill-dark` height `45px`. Keeping those paths and writings unmerged, and reading the missing `none` step as a component writing on tiles and bands rather than a `tokens.rounded` key, is a derived editorial implementation inference from the verified surfaces; it is not IICOMBINED-authored or a separately published UI specification.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow | Page background, product tiles, nav — nearly everything |
| Tint (Level 1) | `#f3f4f6` background shift | Section / band separation without elevation |
| Image (Level 2) | Full-bleed photography/video | The primary depth device — the imagery itself |

Token-set path: `tokens.shadow.none` `none`. Live inspection found `box-shadow: none` across nav, hero, headings, and product tiles on both Gentle Monster and Tamburins. Depth and focus are created entirely by full-bleed imagery, tinted grey bands (`#f3f4f6`), and the contrast of near-black ink (`#111111`) on white. Reading that as a deliberate gallery-grade choice — elevation and card-stacking would read as conventional retail — is a derived editorial implementation inference from the verified surfaces; it is not IICOMBINED-authored or a separately published UI specification.

### Motion

The source attributes its token-level claims to a live inspection of computed color, type, radius, and shadow on the two brand-owned surfaces. The motion contract below sits outside that attribution: the source's own evidence note assigns a source to its voice samples, its brand narrative, and its personas, and assigns none to the easing curves. The durations, easing roles, the omission of the listed curves as not traceable to IICOMBINED-computed samples, and the motion rules below are therefore a derived editorial implementation inference from the verified surfaces; they are not IICOMBINED-authored or a separately published UI specification.

Durations:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 150ms | Hover, pill press, focus |
| `motion-standard` | 280ms | Image cross-fade, tile reveal, overlay open |
| `motion-slow` | 500ms | Full-bleed campaign transitions, hero reveals |

Easing roles — three roles with declared uses. The specific curve values the source lists (`cubic-bezier(0.2, 0.6, 0.25, 1)`, `cubic-bezier(0.4, 0.0, 1, 1)`, `cubic-bezier(0.25, 0.1, 0.25, 1)`) are not traceable to IICOMBINED-computed samples, so the curves are omitted here and only the roles and their uses are kept:

| Token | Use |
|---|---|
| `ease-enter` | Arriving — overlays, tiles, campaign reveals |
| `ease-exit` | Dismissals |
| `ease-standard` | Two-way transitions, cross-fades |

An exact curve may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework or vendor document — does not satisfy that condition.

Motion rules, as the source states them:

- Motion is cinematic but disciplined — consistent with the gallery aesthetic.
- Campaign imagery and video cross-fade slowly (`motion-slow / ease-enter`) so transitions feel like scene changes in an exhibition; product tiles fade in flat from neutral placeholders; hairline pills respond to press with a subtle opacity shift, never a bounce.
- No spring, no overshoot — the house signals art-direction and steadiness, not consumer-app playfulness.
- Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and ambient campaign motion freezes; the storefront remains fully functional.

The "cinematic but disciplined" / "scene changes in an exhibition" / "art-direction and steadiness" readings are the source's own motion rules; treating them as a current-surface instruction is already covered by the motion-section qualifier above.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | The two inspected surfaces describe the product. They do not publish a universal current typography token or a separately issued type specimen. That "no published type token" reading is a derived editorial implementation inference from the verified surfaces; it is not IICOMBINED-authored or a separately published UI specification. |
| Live computed surface-use | Gentle Monster computes campaign headlines as `Gentle Monster Serif` and UI as `GentleSans` Light 350 / Regular 400. Tamburins computes UI as `Pretendard`. |
| Official distributed asset | No IICOMBINED-exclusive downloadable font package was verified in the source. That absence-of-exclusive-package reading is a derived editorial implementation inference from the verified surfaces; it is not IICOMBINED-authored or a separately published UI specification. |
| Declared-only | The source records a `Times`-class serif fallback covering Latin glyphs around Gentle Monster Serif. It is a fallback, not the brand face. Classing that stack member as not the brand face is a derived editorial implementation inference from the verified surfaces; it is not IICOMBINED-authored or a separately published UI specification. |
| License | The source records custom Gentle Monster Serif / GentleSans and Pretendard on Tamburins. This record does not establish an IICOMBINED-issued font-license notice. That upstream-versus-grant reading is a derived editorial implementation inference from the verified surfaces; it is not IICOMBINED-authored or a separately published UI specification. |
| Outside these captures | Typography on surfaces the source did not inspect stays outside these two captures. Reading that typography as outside this contract is a derived editorial implementation inference from the verified surfaces; it is not IICOMBINED-authored or a separately published UI specification. |

### Family

- **Display:** `Gentle Monster Serif` — used exclusively for Gentle Monster's editorial campaign headlines. Token-set path `tokens.typography.family.display`.
- **Sans (Gentle Monster):** `GentleSans` — Light (350) for nav/menus/captions and Regular (400) for body and product titles. Token-set path `tokens.typography.family.sans`.
- **Sans (Tamburins):** `Pretendard` — used for all Tamburins UI and uppercase section heads. Token-set path `tokens.typography.family.sans-alt`.
- Do not replace Gentle Monster Serif or GentleSans with a system or hosted substitute, and do not present the `Times`-class fallback as the brand face. A fallback member is never presented as the house face. Keeping the three family keys unmerged, and that fallback prohibition, are a derived editorial implementation inference from the verified surfaces; they are not IICOMBINED-authored or a separately published UI specification.

### Type roles

| Role | Font | Size | Weight | Line height | Tracking | Token-set use |
|---|---|---:|---:|---:|---:|---|
| Campaign Headline | Gentle Monster Serif | 24px (1.50rem) | 400 | 1.17 (28px) | 0 | Editorial campaign H1 over imagery, Gentle Monster Serif · `tokens.typography.campaign-serif` |
| Section Heading | Pretendard | 24px (1.50rem) | 500 | 1.00 | — | Section / campaign H2, uppercase, Pretendard (Tamburins) · `tokens.typography.section-heading` |
| Collection Subhead | Pretendard | 18px (1.13rem) | 500 | 1.57 (28.2px) | — | Collection subhead, Pretendard (Tamburins) · `tokens.typography.subhead` |
| Product Title | GentleSans / Pretendard | 18px (1.13rem) | 400 | 1.50 (27px) | — | Product / item heading, GentleSans / Pretendard · `tokens.typography.product-title` |
| Body | GentleSans | 16px (1.00rem) | 400 | 1.50 (24px) | — | Standard reading text, GentleSans Regular · `tokens.typography.body` |
| Nav Label | GentleSans | 16px (1.00rem) | 350 | 1.00 | — | Top nav label, GentleSans Light · `tokens.typography.nav` |
| Menu / Overlay | GentleSans | 13px (0.81rem) | 350 | 1.38 (18px) | — | Menu / overlay label, GentleSans Light · `tokens.typography.meta` |
| Caption / Product Name | GentleSans | 12px (0.75rem) | 350 | 1.42 (17px) | — | Product name / fine label, GentleSans Light · `tokens.typography.caption` |

Unitless line heights stay ratios: `1.17` on Campaign Headline; `1.00` on Section Heading and Nav Label; `1.57` on Collection Subhead; `1.50` on Product Title and Body; `1.38` on Menu / Overlay; `1.42` on Caption. They are never converted to a replacement px. Campaign Headline tracking stays `0`. Keeping the ratios and the tracking on their token-set paths, rather than replacing them with a computed px, is a derived editorial implementation inference from the verified surfaces; it is not IICOMBINED-authored or a separately published UI specification.

Type rules the source states:

- **One serif for art, one sans for machinery**: the custom Gentle Monster Serif carries every campaign headline; GentleSans / Pretendard carry every functional label. They never swap roles.
- **Whisper-weight UI**: navigation and labels run at weight 350 (GentleSans Light) — an unusually light UI weight that keeps the chrome quiet and the imagery loud.
- **Small, dense labels**: product names and menu items sit at 12–13px, treating the storefront like a printed catalog index rather than a clickable button grid.
- **Uppercase for campaign register**: section heads and overlay labels lean on uppercase + letter-spacing to read as editorial titling, not UI copy.

The four rule titles and the quiet-chrome / catalog-index / editorial-titling readings are a derived editorial implementation inference from the verified surfaces; they are not IICOMBINED-authored or a separately published UI specification. The sizes, weights, and ratios are recorded.

### Assets

- Logo treatment the source frontmatter records: `logo.type: favicon` and `logo.slug` `https://www.google.com/s2/favicons?domain=gentlemonster.com&sz=128`. That slug is an identity pointer through a third-party favicon service, not an IICOMBINED-hosted brand file URL.
- Campaign photography and video on the two inspected surfaces are first-party catalog content; do not replace them with invented brand-color decoration.

Reading the favicon-service URL as an identity pointer rather than a hosted brand file, and reading campaign photography as first-party catalog content that must not be replaced with invented decoration, is a derived editorial implementation inference from the verified surfaces; it is not IICOMBINED-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### How applicability is decided here

The source declares each token-set component with a primitive type (`button`, `tab`, `card`, `badge`, `listItem`) and a value set; those types are preserved per component. Applicability below is judged by each control's role, never by whether a visual treatment for that state happens to be recorded: where the source supplies no treatment for an applicable state, the value is omitted and the state stays applicable. `not-applicable` is used only where the control's role makes the state meaningless — a destination CTA that commits no operation in place, a tab that only selects, or a display element with no action at all — and the reason given is always that semantic one. Where the source supplies no interaction evidence for a container at all, its kind and applicability map are omitted rather than decided. A `Primitive type` line is attached only when the source YAML records that type on that component.

The source records no `focus-visible` treatment. Generic focus is not invented. `focus-visible` stays applicable on interactive controls; the visual treatment is omitted.

The role-based decision procedure above, every interactive-kind verdict, every applicability verdict, and the reason given for either is a derived editorial implementation inference from the verified surfaces; they are not IICOMBINED-authored or a separately published UI specification. This is not a complete state-coverage claim.

### Outlined CTA

- Role: destination control that carries the hairline pill over campaign imagery
- Primitive type: `button` · Kind: interactive
- Domain: `https://www.gentlemonster.com`
- Text: `#111111`
- Border: 1px solid `#ffffff`
- Token-set border record: `1px solid #ffffff`
- Radius: 25px
- Padding: 0px 23px
- Font: 16px GentleSans weight 400
- Token-set font record: `16px / 400 GentleSans`
- Height: 36px
- Token-set use: `Primary CTA over imagery — 구매하기 / 캠페인 보기, transparent fill, hairline pill`
- Published labels: `구매하기`, `캠페인 보기`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | The surface contract fades outlined pills' stroke rather than filling them grey |
| loading | not-applicable | This control opens a campaign or purchase destination; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | This control sends the reader to a destination; the destination, not the button, reports whether that request failed |
| success | not-applicable | Same role reason: reaching `구매하기` or `캠페인 보기` is not an operation with a success result on this button |

### Solid Consent

- Role: the system's only solid button — uppercase consent / commit action
- Primitive type: `button` · Kind: interactive
- Background: `#111111`
- Text: `#ffffff`
- Radius: 8px
- Font: 13px GentleSans weight 400
- Token-set font record: `13px / 400 GentleSans`
- Height: 48px
- Token-set use: `Solid consent / commit action — uppercase, near-black fill`
- Published labels: `ACCEPT ALL COOKIES`, `모두 수락 - ACCEPT ALL COOKIES`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A consent control whose availability can lapse; visual treatment omitted |
| loading | applicable | This control commits a consent action; in-progress treatment omitted |
| error | applicable | A consent commit can fail; visual treatment omitted |
| success | applicable | A consent commit can complete; visual treatment omitted |

### Tamburins Outlined Pill

- Role: destination control that carries the full-round hairline pill on Tamburins
- Primitive type: `button` · Kind: interactive
- Domain: `https://www.tamburins.com`
- Text: `#1d1d1d`
- Border: 1px solid `#000000`
- Token-set border record: `1px solid #000000`
- Radius: 9999px
- Font: 10px Pretendard weight 400
- Token-set font record: `10px / 400 Pretendard`
- Height: 45px
- Token-set use: `Tamburins outlined pill — full-round, hairline black on white`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | The surface contract fades outlined pills' stroke rather than filling them grey |
| loading | not-applicable | This control is an outlined pill destination; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Destination action; the destination, not this pill, reports failure |
| success | not-applicable | Same role reason: reaching the pill destination is not an operation this button reports as success |

### Top Nav Item

- Role: top horizontal nav item
- Primitive type: `tab` · Kind: interactive
- Text: `#111111` on light, `#ffffff` over dark hero
- Font: 16px GentleSans weight 350
- Token-set font record: `16px / 350 GentleSans`
- Active: white `#ffffff` label when over dark hero imagery
- Token-set active: `white #ffffff label when over dark hero imagery`
- Token-set use: `Top nav item`
- Published labels: `선글라스`, `안경`, `베스트셀러`, `2026 컬렉션`, `선물`
- The header the nav sits in is recorded at 90px in Layout; that height is not a YAML field on this component. Treating the 90px header as a Layout writing and not a YAML field on this component is a derived editorial implementation inference from the verified surfaces; it is not IICOMBINED-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable item; visual treatment omitted |
| disabled | applicable | A destination item whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This item is a destination tab; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Destination tab; the destination, not the item, reports failure |
| success | not-applicable | Same role reason: reaching `선글라스` or `2026 컬렉션` is not an operation with a success result |

### Product / Campaign Tile

- Role: full-bleed product / campaign tile
- Primitive type: `card`
- Background: `#ffffff`
- Text: `#111111`
- Radius: 0px
- Token-set use: `Full-bleed product / campaign tile — no border, no shadow, image-led`

The source supplies no interaction evidence for this card, so kind and a state-applicability map are both withheld.

### Tinted Surface Band

- Role: cool-grey content band segmenting sections on the white canvas
- Primitive type: `card`
- Background: `#f3f4f6`
- Text: `#111111`
- Radius: 0px
- Token-set use: `Tinted grey content band on canvas`

The source supplies no interaction evidence for this card, so kind and a state-applicability map are both withheld.

### Overlay Label

- Role: white uppercase label set over campaign imagery
- Primitive type: `badge`
- Kind: non-interactive — a collection name or tag, not a commit control
- Text: `#ffffff`
- Font: 13px GentleSans weight 350
- Token-set font record: `13px / 350 GentleSans`
- Token-set use: `White uppercase label set over campaign imagery`

### Footer / Menu Link

- Role: footer / menu navigation link
- Primitive type: `listItem` · Kind: interactive
- Text: `#111111`
- Font: 16px GentleSans weight 400
- Token-set font record: `16px / 400 GentleSans`
- Token-set use: `Footer / menu navigation link`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web link; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable link; visual treatment omitted |
| disabled | applicable | A destination link whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control opens a menu destination; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Destination action; the destination, not this link, reports failure |
| success | not-applicable | Same role reason: reaching the menu destination is not an operation this link reports as success |

### State record

The source's state contract, preserved with its values. The source's own evidence note assigns a source to its voice samples, its brand narrative, and its personas, and assigns none to this state section; the treatments below are therefore a derived editorial implementation inference from the verified surfaces rather than measured per-control observations, and they are not IICOMBINED-authored or a separately published UI specification.

| State | Treatment |
|---|---|
| **Empty (no products / sold out)** | White canvas. A single near-black ink (`#111111`) line in GentleSans stating the collection is unavailable, with a quiet link back to the campaign. No illustration, no clutter. |
| **Empty (cart / wishlist, none yet)** | Muted Grey (`#858585`) single line, calm and editorial — nothing saved yet, with a path back to browsing. |
| **Loading (campaign / imagery)** | Full-bleed neutral placeholder block (`#f3f4f6`) at final dimensions, flat fade-in. No shadow shimmer — consistent with the shadowless system. |
| **Loading (product grid)** | Sharp 0px-radius `#f3f4f6` tile placeholders at final dimensions, flat pulse. |
| **Error (load failed)** | Inline near-black (`#111111`) message in GentleSans with a plain retry; if a warm signal is needed, the rare Alert Red (`#d12b2b`) marks it. No generic dialog. |
| **Error (form validation)** | Field-level message below the input, quiet and specific; describes what is valid, not just "required". |
| **Success (added / submitted)** | Brief inline confirmation in calm ink tone; next-step detail linked immediately below. No celebratory emoji or color burst. |
| **Skeleton** | `#f3f4f6` blocks at final dimensions, 0px radius, flat pulse — matches the borderless tile geometry. |
| **Disabled** | Muted Grey (`#858585`) text on reduced-opacity surface; outlined pills fade their stroke rather than fill grey. |

These rows describe collection-unavailable, cart/wishlist, campaign-load, product-grid, form-validation, and submit treatments the source wrote at system level. They are not attached as visual treatments to the destination controls above. That non-attachment reading is a derived editorial implementation inference from the verified surfaces; it is not IICOMBINED-authored or a separately published UI specification.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

- Full-bleed campaign hero — edge-to-edge imagery/video with the serif headline and outlined CTA overlaid
- Product grids run as borderless image tiles with the product name caption beneath (12px GentleSans)
- Sections alternate between white (`#ffffff`) canvas and tinted grey (`#f3f4f6`) bands, full-width
- Tall 90px header floating transparent over the hero, switching label color from ink to white over dark imagery
- Spacing restated from `tokens.spacing`: 4 / 8 / 12 / 16 / 23 / 32 / 48 / 64
- Shape restated from `tokens.rounded`: small 8 · pill 25 · lg 45 · `full: 9999` / `9999px`; sharp 0px stays on the tile and band writings

Reading the page as imagery over chrome — the page is mostly photography and video; UI is a thin layer that never competes with the campaign — reading sections as flat segmentation via background tint (`#f3f4f6` vs `#ffffff`) and full-bleed image edges, and reading vertical room between campaign blocks as gallery rhythm, are derived editorial implementation inferences from the verified surfaces; they are not IICOMBINED-authored or a separately published UI specification.

Responsive behavior. The source's live inspection was run as a computed-style pass, and its own evidence note attributes token-level claims to that inspection; the breakpoints, collapsing strategy, and the source's reading of the recorded target sizes are stated by the source at system level rather than measured across viewports, so they are a derived editorial implementation inference from the verified surfaces and are not IICOMBINED-authored or a separately published UI specification.

| Name | Width | Key Changes |
|---|---|---|
| Mobile | <640px | Single column, full-bleed hero, nav collapses to menu |
| Tablet | 640-1024px | 2-up product tiles, moderate padding |
| Desktop | 1024-1440px | Full layout, floating transparent header, multi-column tile grid |

Touch targets the source records: outlined CTA at 36px height with 23px horizontal padding; Tamburins pill at 45px height; nav labels spaced within the tall 90px header.

Collapsing strategy, as the source states it:

- Hero: full-bleed campaign imagery maintained at all sizes; serif headline scales down
- Product grid: multi-column image tiles → 2-up → single column, captions preserved
- Tinted/white alternating bands maintain full-width treatment
- Floating header collapses nav items into a menu overlay on mobile

Image behavior, as the source states it:

- Campaign imagery and video run full-bleed and borderless at every breakpoint
- Product tiles maintain sharp 0px corners across breakpoints
- No shadow on any image at any size, consistent with the flat house language

<!-- design-md:section content-locales -->
## 6. Content & Locales

The source characterizes IICOMBINED's voice as **editorial, restrained, and art-directed** — it speaks like an exhibition wall text, not a retail banner. Copy is sparse and confident: campaign titles (`2026 Veggie Collection`, `BOLD COLLECTION`, `SUMMER TAILS`) read as gallery show names, and CTAs are minimal imperatives (`구매하기` / Buy, `캠페인 보기` / View campaign). The house treats the visitor as someone visiting an exhibition who will be moved by the imagery first and informed second — there is no hard sell, no urgency, no discount-driven shouting. That characterization, that register reading, and the tone table below are a derived editorial implementation inference from the verified surfaces; they are not IICOMBINED-authored or a separately published UI specification. The Korean and English lines themselves are live surface copy.

| Context | Tone |
|---|---|
| Campaign titles | Editorial, exhibition-named. `2026 Veggie Collection`, `BOLD COLLECTION`. Title-cased or uppercase, never salesy. |
| CTAs | Minimal imperatives. `구매하기` (Buy), `캠페인 보기` (View campaign). Two words, no urgency. |
| Product names | Short, coined, catalog-style. `토피 02`, `베르 02`, `아덴 02` — product as named object. |
| Collection copy | Concept-first. `새로운 헤어 퍼퓸 컬렉션` (a new hair-perfume collection) — states the idea plainly. |
| Consent / system | Functional and quiet. `모두 수락 - ACCEPT ALL COOKIES` — uppercase, no flourish. |

**Voice samples (verbatim from live homepages):**

- `2026 Veggie Collection` — Gentle Monster campaign H1 (exhibition-named collection).
- `캠페인 보기` — Gentle Monster CTA (view-the-campaign, art-first framing).
- `새로운 헤어 퍼퓸 컬렉션` — Tamburins section heading (concept-first collection copy).

The parenthetical readings on these three samples — exhibition-named collection; view-the-campaign, art-first framing; concept-first collection copy — are a derived editorial implementation inference from the verified surfaces; they are not IICOMBINED-authored or a separately published UI specification.

Further published strings the source records on the inspected surfaces, kept byte-exact:

- 아이아이컴바인드
- 구매하기
- 캠페인 보기
- ACCEPT ALL COOKIES
- 모두 수락 - ACCEPT ALL COOKIES
- 2026 Veggie Collection
- BOLD COLLECTION
- SUMMER TAILS
- 토피 02
- 베르 02
- 아덴 02
- 새로운 헤어 퍼퓸 컬렉션
- 선글라스
- 안경
- 베스트셀러
- 2026 컬렉션
- 선물
- Home | 젠틀몬스터 공식 온라인 스토어
- TAMBURINS 탬버린즈 공식 온라인 스토어
- make a new dream
- 김한국
- Hankook Kim

**Forbidden register**: discount urgency (`SALE!`, countdown timers), exclamation-heavy hype, hard-sell upselling, anything that competes with the campaign imagery for attention. That forbidden-register list is the source's own; treating it as a current-surface instruction is a derived editorial implementation inference from the verified surfaces; it is not IICOMBINED-authored or a separately published UI specification.

Reproduce the Korean strings above byte-exact rather than translating or re-casing them. An English gloss may sit beside a Korean line; it never replaces the line. That byte-exact / gloss-beside rule is a derived editorial implementation inference from the verified surfaces; it is not IICOMBINED-authored or a separately published UI specification.

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

These are named values, not permissions to invent. The source records no conflict among its own Tier 1 values. Treating the list as named unresolved values rather than a license to invent is a derived editorial implementation inference from the verified surfaces; it is not IICOMBINED-authored or a separately published UI specification.

- **Exact easing curves.** Three easing roles and their uses are established; the curve values are omitted because they are not traceable to IICOMBINED-computed samples. Promote a curve for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed.
- **Hover and focus-visible treatments.** Those visual treatments are omitted. They are not `not-applicable`; applicability follows control meaning.
- **YAML rounded set has no `none` step.** Sharp 0px is a component writing on `product-card` and `surface-card`.
- **Full radius writings.** `tokens.rounded.lg: 45` is the unitless lg step. `tokens.rounded.full: 9999` is the unitless full step. The Tamburins pill uses height `45px` and radius `9999px`.
