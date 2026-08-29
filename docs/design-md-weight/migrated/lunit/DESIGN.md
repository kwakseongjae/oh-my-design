# Lunit Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Lunit (루닛) is a Korean medical AI company. This contract covers the first-party English marketing homepage the source inspected live on 2026-05-14: `https://www.lunit.io/`. Clinical products the source names as INSIGHT CXR / DBT / MMG are recorded as the place marketing-surface semantic colors do not live; they do not contribute computed tokens here. Corporate pages `www.lunit.io/en/about/` and `www.lunit.io/en/careers/` are named as narrative pages with no design-system content. Investor-relations pages exist (`investors.lunit.io` referenced indirectly) and contain no design content. Reading that English homepage as this contract's token surface, keeping the INSIGHT product names as the source's own bound on where marketing semantic colors do not live, and keeping about/careers and the investor-relations pointer as pages that do not supply tokens, are derived editorial implementation inferences from the verified surfaces; they are not Lunit-authored or a separately published UI specification.

The captured interface layer, in the source's own values: canvas `#ffffff`; body ink `#232f32`; hero ink `#151515`; signature blue `#1032cf` with bright sibling `#2a4eef`; dark band and primary CTA fill `#000000`; footer `#eff0f4`; inverse `#ffffff`. Headings are named ClashGrotesk at weight 400; body is named Lexend at weight 300. The primary marketing CTA is the black pill labelled `Contact Us`. Default radius is written `0px`; the pill is written `100px`. `box-shadow` is `none`. Sections are full-bleed and alternate white / black / off-white. Motion is recorded as AOS scroll-reveal fades (`aos-init aos-animate`). The machine-readable value set is dated 2026-06-09 and was drawn from the record's own prose after that inspection. Keeping YAML keys beside the longer prose writings rather than choosing one, reading the listed values as the captured English-homepage layer rather than as a declared global or INSIGHT product palette, keeping canvas and inverse as two roles of the same hex in that list, and reading the 2026-06-09 machine-readable set as drawn from the record's own prose after the inspection rather than as a published token specification, are derived editorial implementation inferences from the verified surfaces; they are not Lunit-authored or a separately published UI specification.

The source's characterizations of that layer — a medical AI company that wants to be read like a journal article, not sold like a SaaS; a refusal of both soft-pastel reassurance and bold-pharma authority; signature blue deliberately withheld from the primary CTA; binary radius as a geometric thesis; ClashGrotesk and Lexend as intentional anti-tropes; light weight as scientific composure; depth as editorial band switching rather than a stack of cards; motion restraint as a positioning signal; the audience as *we know who is looking* — are a derived editorial implementation inference from the verified surfaces; they are not Lunit-authored or a separately published UI specification. The hex values, families, radii, and labels named beside them are the source's own.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product's primary tasks, each naming a control or band the source records on the captured homepage, is a derived editorial implementation inference from the verified surfaces; it is not Lunit-authored or a separately published UI specification. They do not come from a persona section.

- Act on the primary marketing CTA `Contact Us`.
- Read the stats band `10,000+ Customer Sites · 65+ Countries · 700+ Publications`.
- Scan the news / solutions cards.
<!-- design-md:claim-end -->

### Audience

No named or demographic personas are invented. The source collected no persona biographies. What it records at a group level, kept in its wording, is: radiologists, oncology researchers, regulators, and institutional investors. Dropping any later agent-selection grouping rather than promoting it, carrying no name, age, city, motivation, or affiliation classification, and reading those source-named groups as this product's audience, are derived editorial implementation inferences from the verified surfaces; they are not Lunit-authored or a separately published UI specification.

### Distinctive traits

The list restates the source's Key Characteristics. The values are recorded; classifying the list as that restatement, and the groupings and the readings inside them, is a derived editorial implementation inference from the verified surfaces; it is not Lunit-authored or a separately published UI specification.

- ClashGrotesk + Lexend pairing, both LIGHT weights as the rule
- Hero H1 at 78px / 400 weight; body at 18-20px / 300 weight
- Single accent `#1032cf` (bright sibling `#2a4eef`) used for system, cookie, and dark-band moments
- Primary marketing CTA is the black pill, not blue — blue is withheld
- Binary radius: `0px` everywhere except the pill CTA at `100px`
- Body ink `#232f32`, hero ink `#151515` — never pure `#000` in standing copy
- Off-white footer `#eff0f4` — the only branded surface tint
- Full-bleed band-switching layout; `box-shadow: none`

### Principles

These 5 items, each stem as a thesis or voice rule the source states, and each UI implication attached to it, are a derived editorial implementation inference from the verified surfaces; they are not Lunit-authored or a separately published UI specification.

1. **Square surfaces, pill action.** Default radius is `0px`; the only rounded element the source names is the primary marketing CTA at `100px`. *UI implication:* do not introduce a mid-range radius on sections, cards, images, or inputs.
2. **Authority through size and air, not heft.** Headings sit at ClashGrotesk 400; body at Lexend 300. *UI implication:* do not reach for bold or semibold to add confidence.
3. **Blue is system, black is brand-action.** Signature blue `#1032cf` is reserved for system, cookie, hover, and dark-band moments; the primary CTA fill is `#000000`. *UI implication:* withhold `#1032cf` from the primary action.
4. **Depth by band switching.** Sections alternate white canvas, black band, and off-white footer `#eff0f4`, with `box-shadow: none`. *UI implication:* do not float cards.
5. **State the science, then the consequence.** Lead with what the AI does; follow with what changes for the patient or clinician. *UI implication:* use the precise verbs `detect`, `stratify`, `screen`, `support`; refuse `battle`, `fight`, `transform lives`, and exclamation marks.

### Application rules

The source states these six as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not Lunit-authored or a separately published UI specification.

- Set every section, card, image, input, and footer to `border-radius: 0` and round only the single primary CTA pill to `100px`, honoring the binary radius thesis
- Pair ClashGrotesk for headings and Lexend for body, keeping both at LIGHT weights — H1 at 78px/84px weight 400, body at 18.4px weight 300 — so authority reads through size and air, not heft
- Fill the primary marketing CTA as a black pill (`#000000` background, `#ffffff` label) and withhold the signature blue `#1032cf` from primary actions
- Set body ink in warm-cool gunmetal `#232f32` and hero H1 in near-black `#151515`, never pure `#000`, for standing copy
- Build depth through full-bleed band switching (white canvas → black band → off-white footer `#eff0f4`) with `box-shadow: none` everywhere
- Reserve the signature blue `#1032cf` (bright sibling `#2a4eef`) for system, cookie, hover, and dark-band moments, and use AOS scroll-reveal fades as the only motion

### Avoid

The source states these as its Don't list and its refusal list. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not Lunit-authored or a separately published UI specification.

- Apply mid-range radii like 4px, 6px, 8px, 12px, 16px, or 20px anywhere, or round cards, images, or surfaces that are not the primary action
- Use the saturated signature blue `#1032cf` on the primary CTA — the brand-action color is black, and blue is deliberately withheld
- Reach for bold or semibold typographic weights to add confidence; LIGHT weight is the rule across all heading levels
- Add drop shadows or floating card elevation — depth comes from band switching, not floating objects
- Add hero video autoplay, parallax, or animated stat counters on the `10,000+` band; keep motion to low-amplitude AOS fades
- Introduce stock photography of "diverse smiling teams", hex-mesh/circuit-board/neural-net cliché, multi-accent green-blue-orange palettes, exclamation marks, or emotive verbs like 'transform lives'

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Each role below pairs a name with the value and the use the source records. Role names follow the source's own labels and token-set keys. Taking those role names from the source's own token-set keys, pairing each hex to the token-set path named beside it, keeping `tokens.colors.canvas` `#ffffff` (page canvas and Surface Background) off `tokens.colors.on-dark` `#ffffff` (label on dark CTAs/bands and Primary CTA Text) off Blue band Text `#ffffff` (label on signature-blue, not a third color key), keeping `tokens.colors.dark` `#000000` as dark-band / CTA fill off standing-copy ink off Secondary nav Color `#000000` when that nav is on light, keeping hero ink `#151515` off body ink `#232f32`, keeping signature blue `#1032cf` off bright blue `#2a4eef`, and keeping marketing-surface observation off INSIGHT product UI, are derived editorial implementation inferences from the verified surfaces; they are not Lunit-authored or a separately published UI specification. The hex values and recorded uses are the source's own.

- **Hero ink** (`#151515`): used for H1 only. Token-set path `tokens.colors.hero-ink`.
- **Body ink** (`#232f32`): warm-cool gunmetal. Default text color across body, nav, footer. Token-set path `tokens.colors.body-ink`.
- **Signature blue** (`#1032cf`): cookie `Allow all`, blue band moments, system-affordance contexts. Token-set path `tokens.colors.signature-blue`.
- **Bright blue** (`#2a4eef`): hover / link / focus sibling of `#1032cf`. Token-set path `tokens.colors.bright-blue`. A generic Focus mention is not `focus-visible` treatment evidence; this hex is not assigned to a `focus-visible` row. Keeping that hex off a `focus-visible` treatment is a derived editorial implementation inference from the verified surfaces; it is not Lunit-authored or a separately published UI specification.
- **Canvas** (`#ffffff`): page canvas default. Token-set path `tokens.colors.canvas`. Same hex as `tokens.colors.on-dark`; it stays a second key.
- **Dark** (`#000000`): dark band / primary CTA fill / occasional inverted hero block. Token-set path `tokens.colors.dark`. Not standing copy.
- **Footer** (`#eff0f4`): footer surface. The only branded off-white in the system. Token-set path `tokens.colors.footer`.
- **On-dark** (`#ffffff`): label on dark CTAs / dark bands. Token-set path `tokens.colors.on-dark`. Same hex as `tokens.colors.canvas`; it stays a second key.

No green for "success" and no red for "danger" were observed on the marketing surfaces. The source states that semantic colors live inside the clinical products (INSIGHT CXR / DBT / MMG), not on the brand site. Blue is system, not brand-action; the brand-action color is black. Calling that split unusual relative to other B2B health-AI sites is a derived editorial implementation inference from the verified surfaces; it is not Lunit-authored or a separately published UI specification.

### Spacing

Token-set path `tokens.spacing` (unitless steps, kept as the source wrote them): `xs: 4` · `sm: 8` · `md: 12` · `base: 16` · `lg: 24` · `xl: 32` · `xxl: 48` · `section: 64`.

Those unitless steps are not rewritten as `px`. CTA pill padding is the separate prose writing `≈ 14px 28px`. Nav item padding is the separate prose writing `≈ 8–20px` depending on top-row vs main-row. `tokens.spacing.sm: 8` is not the `8` in that nav range. `tokens.spacing.lg: 24` stays a unitless spacing step, not a pixel length. Keeping the unitless map on its own path, keeping those two paddings as component/layout writings rather than as replacements for spacing keys, and reading the eight-step unitless map as recorded steps rather than as a complete mathematical scale, are derived editorial implementation inferences from the verified surfaces; they are not Lunit-authored or a separately published UI specification.

Sections are full viewport width, edge-to-edge — no max-width "page frame" wrapping the whole document. Vertical rhythm is generous; copy blocks are narrow-column. The source's own confidence note on spacing is that it is medium because only viewport-relative values were measured.

### Shape

Token-set path `tokens.rounded` (unitless steps, kept on their own path): `sm: 4` · `md: 4` · `lg: 4` · `full: 9999`.

The three keys `sm`, `md`, and `lg` share the value `4`; they stay three keys. `tokens.rounded.full: 9999` is not the prose pill writing `100px`. `tokens.components.cta-pill.radius: 9999` is the same unitless `9999` as `tokens.rounded.full` and stays a component field.

The source's named radius uses, kept on their own rows rather than chosen over the YAML map:

- Default radius: `0px`. Every section, image, card, logo tile, input, footer column, and surface that is not a primary action is square-cornered.
- Pill radius: `100px`. Exactly one element rounds: the primary marketing CTA (`Contact Us`).
- Secondary chip / checkbox: `3.75px` (third-party cookie banner).
- No mid-range radii. No 4px, 6px, 8px, 12px, 16px curves anywhere.

YAML `tokens.rounded.sm/md/lg: 4` and the prose sentence that there are no 4px curves anywhere are both in the source; neither is selected as a replacement. Keeping those two writings unmerged, keeping `0px` off `100px` off `9999` off `3.75px`, and reading the binary 0-or-pill rule as the source's geometric thesis rather than as a published Lunit radius specification, are derived editorial implementation inferences from the verified surfaces; they are not Lunit-authored or a separately published UI specification.

### Elevation

Token-set path `tokens.shadow.none`: `none`. Across all surveyed sections, `box-shadow` is `none`. Cards do not float. Logos do not float.

Depth is written as full-bleed band switching:

- Section A: white canvas, dark ink
- Section B: black canvas, white ink
- Section C: off-white `#eff0f4`, dark ink

The following elevation reading is a derived editorial implementation inference from the verified surfaces; it is not Lunit-authored or a separately published UI specification. The page is read as a sequence of editorial spreads rather than a stack of UI cards; depth comes from sections claiming full-bleed width and alternating their backgrounds, not from drop shadows.

### Motion

Library observed: **AOS** (Animate-On-Scroll) — `aos-init aos-animate` classes throughout. Effect set: scroll-triggered fade / fade-up, low amplitude, short duration. **No parallax.** **No autoplay hero video.** **No counter animations on the stats band.**

The source names no duration token, no easing curve, and no reduced-motion behavior. Calling that restraint a positioning signal — motion as a luxury the audience does not need — is a derived editorial implementation inference from the verified surfaces; it is not Lunit-authored or a separately published UI specification. The library name, class names, effect set, and the three negations are the source's own.

An exact curve may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework or vendor document — does not satisfy that condition. Naming those five evidence kinds as the promotion gate, refusing a partial confirmation, and refusing a match against an official framework or vendor document as that gate, are derived editorial implementation inferences from the verified surfaces; they are not Lunit-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The rows below sort this record's font evidence into classes. The sorting, the official-product-use row as a negative lookup rather than a Lunit type specification, the live ClashGrotesk/Lexend surface-use row, the `system-ui` / `Arial` fallbacks as not brand faces, and the License row as font-author terms rather than Lunit brand assets, are derived editorial implementation inferences from the verified surfaces; they are not Lunit-authored or a separately published UI specification. The observation inside each row stands on its own.

| Evidence class | Resolution |
|---|---|
| Official product-use | The source's official design-system lookup was a negative result: `design.lunit.io` DNS fails; the public GitHub org `github.com/lunit-io` held research code and no design-system / tokens / component-library / Storybook repo; a keyword scan of `www.lunit.io` HTML for `design-system / design-tokens / brand-guidelines / lunit-ui / storybook` returned no hits (the only match was a generic `Figma` string in cookie-vendor copy). No Lunit-published type specification is carried. |
| Live computed surface-use | The source names ClashGrotesk for headings and Lexend for body on the captured English homepage. |
| Official distributed asset | No Lunit-exclusive distributed type family was verified. |
| Declared-only | The CSS stacks include `system-ui, sans-serif` and a fallback line `Arial, sans-serif`. They are not the brand faces. |
| License | Lexend is OFL-licensed. ClashGrotesk is free via Fontshare for commercial use under their license — verify license terms before shipping derivative work. Those are font-author licences, not Lunit brand assets. |
| Outside this capture | Semantic colors and product UI inside INSIGHT CXR / DBT / MMG are outside the marketing homepage. |

### Family

- **Display stack (prose §3):** `"ClashGrotesk", system-ui, sans-serif`
- **Text stack (prose §3):** `"Lexend", system-ui, sans-serif`
- **Fallback line (prose §3):** `Arial, sans-serif`
- **Token-set path `tokens.typography.family.sans`:** `Lexend`
- **Token-set path `tokens.typography.family.mono`:** `Lexend`

YAML writes both family keys as `Lexend`. Prose writes ClashGrotesk as the display face and Lexend as the text face, and the YAML hero/section `use` strings name ClashGrotesk. Neither writing is selected as a replacement.

Do not present `system-ui` or `Arial` as the brand face. The source tells a blocked runtime to substitute Inter 300 at the same metrics; this contract does not present Inter as the brand face. If Lexend cannot be licensed, omit the live specimen rather than substitute. Keeping both family writings, refusing the stacks as brand faces, and refusing that Inter substitution as a brand-face promotion, are derived editorial implementation inferences from the verified surfaces; they are not Lunit-authored or a separately published UI specification.

The source's rationale that Lexend is engineered to reduce reading fatigue, and that choosing it for clinical and oncology copy is a statement about audience care, is typeface-author background plus a derived editorial implementation inference from the verified surfaces; it is not Lunit-authored or a separately published UI specification.

### Type roles

YAML writes unitless sizes, weights, and line heights. Source §3 writes the same roles with px sizes and, for the hero, a px line height. Both writings stay. Unitless ratios stay ratios and are never converted to a replacement px. Pairing each YAML role to the token-set path named beside it, keeping YAML `use` strings verbatim in the Token-set use column, keeping the longer §3 metrics beside them, keeping YAML `hero` `78` / `1.08` off prose `78px` / `84px`, keeping YAML `section` `52` off prose `~48–56px`, keeping YAML `body` `18` off prose `18.4px`, keeping YAML `nav` `13` off prose `13.2px`, and keeping YAML `body-lg` `20` / `1.40` beside prose `20px / 28px`, are derived editorial implementation inferences from the verified surfaces; they are not Lunit-authored or a separately published UI specification.

| Role | Family as named | Size | Weight | Line height | Token-set use | §3 writing |
|---|---|---|---:|---|---|---|
| Hero H1 | ClashGrotesk (YAML use); YAML family keys are Lexend | YAML `78` / §3 `78px` | 400 | YAML `1.08` / §3 `84px` | Hero H1, ClashGrotesk | ClashGrotesk · 78px / 84px · weight 400 |
| Section H2 | ClashGrotesk (YAML use); YAML family keys are Lexend | YAML `52` / §3 `~48–56px` | 400 | YAML `1.10` | Section H2, ClashGrotesk | ClashGrotesk · ~48–56px · weight 400 |
| Body lg | Lexend | YAML `20` / §3 `20px` | 300 | YAML `1.40` / §3 `28px` | Lead body, Lexend | Lexend · 20px / 28px · weight 300 |
| Body | Lexend | YAML `18` / §3 `18.4px` | 300 | YAML `1.40` | Standard body, Lexend | Lexend · 18.4px · weight 300 |
| Body sm | Lexend | YAML `15` / §3 `15px` | 400 | (YAML states none) | Small body, Lexend | Lexend · 15px · weight 400 |
| Nav | Lexend | YAML `13` / §3 `13.2px` | 400 | (YAML states none) | Uppercase nav, tracked, Lexend | Lexend · 13.2px · weight 400 · uppercase |

Token-set paths: `tokens.typography.hero` · `tokens.typography.section` · `tokens.typography.body-lg` · `tokens.typography.body` · `tokens.typography.body-sm` · `tokens.typography.nav`. LIGHT-weight defaults across all heading levels; bold weights are not part of the brand voice. Nav is uppercase 13.2px with letter tracking. Display copy never wraps mid-noun-phrase in the hero; the H1 break is editorial. Calling that wrap rule editorial, and calling LIGHT weight the brand voice, are derived editorial implementation inferences from the verified surfaces; they are not Lunit-authored or a separately published UI specification.

The primary CTA additionally records `Lexend 16.4px / weight ~400` in §9; that writing is not a YAML typography key.

### Assets

- Catalog favicon: `https://www.google.com/s2/favicons?domain=lunit.io&sz=256`. Frontmatter records `logo.type: favicon`. That URL is a third-party favicon-proxy pointer, not a Lunit-hosted brand file.
- Hero treatment: dimensional product / scan imagery (chest X-ray fragments, mammography overlays) in a desaturated, blue-graded register. The source states that signature blue is allowed to pool inside imagery in a way it is denied to the CTA.
- Logo wall: monochrome grayscale, no background tile, tight kerning.
- Icons: outline-style, single-stroke, no fill.
- No stock people imagery, no AI-generated abstract gradients, no hex-mesh "tech" decoration.
- Brand assets in the source directory are for reference inspection only. No verbatim taglines from `www.lunit.io` are reproduced in the source DESIGN.md; this contract does not add them.

Reading the Google s2 favicon URL as a catalog identity pointer rather than a Lunit-hosted brand file, reading the imagery register and the blue-in-imagery / blue-withheld-from-CTA split as the source's own asset rules rather than as a published Lunit illustration specification, and keeping source headings out of this file because the source itself declined to copy them, are derived editorial implementation inferences from the verified surfaces; they are not Lunit-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The source has no States section. Observed interaction on the marketing homepage, in the source's wording: card hover is a subtle ink shift with no lift and no scale; `#2a4eef` is named as the hover / link / focus sibling of `#1032cf`. No empty, loading, error, success, skeleton, disabled, or pressed visual treatment is recorded. A generic Focus mention is not `focus-visible` treatment evidence.

The following applicability note, every interactive-kind verdict, every applicability verdict, the reason given for either, the refusal to attach a YAML primitive type that the token set does not record, labelling every non-YAML component `not in the token set`, the C4 omission of kind and a state-applicability map for Surface and Blue band, the static default-only geometry plus the one recorded card-hover ink-shift rather than a complete interaction set, the refusal to assign `#2a4eef` to a `focus-visible` row, and the refusal to treat this as a complete state-coverage claim are a derived editorial implementation inference from the verified surfaces; they are not Lunit-authored or a separately published UI specification. Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted where this packet holds no value for that same canonical state. Absence of an observation is not a `not-applicable` reason. Loading, error, and success follow each control's product role rather than its primitive kind. This is not a complete state-coverage claim.

A `Primitive type` line is attached only when the source YAML records that type on that component.

### Primary CTA — Pill

- Role: primary marketing CTA
- Primitive type: `button` · Kind: interactive
- Anatomy: label
- Label: `Contact Us`
- Background: `#000000`
- Text: `#ffffff`
- Radius: YAML `tokens.components.cta-pill.radius: 9999` · §9 `border-radius: 100px`
- Padding: `~14px 28px`
- Font: Lexend `16.4px` / weight `~400`
- Border: none
- Text-transform: none
- Token-set use: `Primary marketing CTA Contact Us, the single pill`
- Observed: default only. Hover treatment for this pill is not recorded.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded as the single primary marketing CTA |
| hover | applicable | Pointer-web control; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A CTA can be gated; visual treatment omitted |
| loading | not-applicable | A marketing `Contact Us` control navigates; it commits no operation in place |
| error | not-applicable | The control does not report a failed request on itself |
| success | not-applicable | Arrival at contact is not an operation this control reports as success |

### Secondary nav (top-row)

- Role: plain text link in the top row
- Primitive type: not in the token set · Kind: interactive
- Anatomy: label
- Background: none
- Border: none
- Color: `#000000` or `#232f32` depending on context
- Font: Lexend `13.2px` / 400 / uppercase (YAML nav size `13`, use `Uppercase nav, tracked, Lexend`)
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded as top-row nav |
| hover | applicable | Pointer-web link; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable link; visual treatment omitted |
| disabled | applicable | A nav link can be gated; visual treatment omitted |
| loading | not-applicable | A destination nav link commits no operation in place |
| error | not-applicable | Navigation is not an action outcome this link reports |
| success | not-applicable | Navigation is not an action outcome this link reports |

### Section heading block

- Role: section heading block
- Primitive type: not in the token set
- Kind: non-interactive — a heading block is not a control
- ClashGrotesk · 48–78px · weight 400
- Color: `#151515` (hero) or `#232f32` (interior sections)
- Optional eyebrow above: Lexend 13–15px uppercase

### Stat block

- Role: stats band numeral and label (e.g. `10,000+`)
- Primitive type: not in the token set
- Kind: non-interactive — a statistic is not a control
- ClashGrotesk · large display size
- Color: `#232f32`
- Label below in Lexend 15–18px weight 300
- The source records the band as `10,000+ Customer Sites · 65+ Countries · 700+ Publications`

### Card (news / solutions)

- Role: editorial card in the news / solutions grid
- Primitive type: not in the token set · Kind: interactive
- Anatomy: thumbnail + title + kicker
- Radius: `0px`
- Shadow: none
- Thumbnail at 16:9 or 4:3 above, ClashGrotesk title below, Lexend kicker
- Observed hover: subtle ink shift; no lift, no scale
- This is not `tokens.components.surface` (that record is the generic square-cornered surface below)

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded as news / solutions card |
| hover | applicable | Pointer-web card; source records a subtle ink shift, no lift, no scale |
| focus-visible | applicable | Keyboard-reachable card; visual treatment omitted |
| disabled | applicable | A card link can be gated; visual treatment omitted |
| loading | not-applicable | A destination card commits no operation in place |
| error | not-applicable | The card does not report a failed request on itself |
| success | not-applicable | Opening a story is not an operation this card reports as success |

### Surface

- Role: square-cornered section/card/image surface
- Primitive type: `card`
- Background: `#ffffff`
- Text: `#232f32`
- Radius: `0`
- Token-set use: `Square-cornered section/card/image surface`
- Kind and a state-applicability map are omitted: the YAML record names a surface, not an interactive control, and it does not record hover or another interactive kind.

### Blue band

- Role: signature blue system-affordance band
- Primitive type: `badge`
- Background: `#1032cf`
- Text: `#ffffff`
- Radius: `0`
- Token-set use: `Signature blue system-affordance band`
- Kind and a state-applicability map are omitted: the YAML record names a badge/band, not an interactive control.

### Footer

- Role: footer surface
- Primitive type: not in the token set
- Kind: non-interactive — a footer surface; nested links are not this component
- Background: `#eff0f4`
- Color: `#232f32`
- Column-grid of product / company / legal nav
- No social-icon row dominance

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The layout patterns below are the source's own recordings of the captured English homepage. Calling the page a sequence of editorial spreads, calling copy-block measure comfortable, and treating these patterns as homepage recordings rather than as a cross-surface layout specification, are derived editorial implementation inferences from the verified surfaces; they are not Lunit-authored or a separately published UI specification.

- **Hero band:** full-bleed white. H1 left-aligned (typically), sub-deck below, single pill CTA. No imagery on top of the heading — imagery, if present, sits below the H1 or in a parallel column.
- **Stats band:** 3 columns, large display numerals, single-line labels. Generous air.
- **Solutions overview:** editorial card grid, 2-up or 3-up, each card a square-cornered thumbnail + title + 1–2 lines of kicker.
- **Partnering / testimonial band:** full-bleed logo wall in monochrome, or a quote in ClashGrotesk display size with attribution in Lexend small.
- **Footer:** off-white `#eff0f4`, multi-column column-nav, no social-feed widgets, no newsletter signup dominance.

Sections are full viewport width, edge-to-edge. YAML spacing steps stay unitless in Foundations; the only paddings stated with units here are CTA `≈ 14px 28px` and nav `≈ 8–20px`.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The captured surface is the English root. The Korean name `루닛` sits beside `Lunit` and does not replace it.

The voice rules below are the source's own instructions for generated work. Treating them as a complete product-microcopy guide, treating the verb lists as Lunit-authored doctrine rather than as this record's structural voice rules, and replacing `Lunit` with `루닛` rather than keeping the Korean name beside the Latin one, would over-read them. The rules, that bound, and keeping `루닛` beside `Lunit` rather than as a replacement, are a derived editorial implementation inference from the verified surfaces; they are not Lunit-authored or a separately published UI specification.

- State the science, then state the consequence. Lead with what the AI does, follow with what changes for the patient or clinician.
- Use light typographic weight to carry authority — do not reach for bold to add confidence.
- Avoid emotive verbs (`battle`, `fight`, `transform lives`) in standing copy. Use precise verbs (`detect`, `stratify`, `screen`, `support`).
- Refuse exclamation marks. Refuse all-caps shouting (except the institutional nav register).
- Numbers are stated dryly. `10,000+ Customer Sites` — no exclaim, no `amazing`, no decoration.

Do not copy Lunit's specific marketing taglines, product names, or proprietary clinical claims into derivative work. Use the structural voice rules above; write fresh copy. Brand assets in this directory are for reference inspection only.

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

These pairs are both in the source. Neither side is selected:

- `tokens.rounded.sm/md/lg: 4` and the prose rule that there are no 4px, 6px, 8px, 12px, or 16px curves anywhere, beside default radius `0px`
- `tokens.rounded.full: 9999` and `tokens.components.cta-pill.radius: 9999` beside prose pill `100px`
- `tokens.typography.family.sans` / `family.mono` both `Lexend` beside the ClashGrotesk display stack
- YAML hero `78` / `1.08` beside §3 `78px` / `84px`
- YAML section `52` beside §3 `~48–56px`
- YAML body `18` beside §3 `18.4px`
- YAML nav `13` beside §3 `13.2px`

### Named gaps

These decisions are unnamed values, not permissions to invent:

- reduced-motion behavior for the recorded AOS motion
- per-component computed transition properties, animation name, duration, and easing
- semantic colors inside INSIGHT CXR / DBT / MMG
- visual treatments for hover, focus-visible, disabled, loading, error, and success where this packet holds no value
