# Loom Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Loom is a work-communication product for asynchronous video: a one-click recorder for screen, voice, and face, with instant shareable links. This contract covers the first-party marketing site the source inspected for tokens: `https://www.loom.com` (live DOM computed-style inspect — hero, nav, CTA buttons, carousel controls, footer; playwright getComputedStyle). Treating `https://www.loom.com` as this contract's token surface, and refusing to treat Atlassian suite membership after the 2023 acquisition as a token source for this capture, is a derived editorial implementation inference from the verified surfaces; it is not Loom-authored or a separately published UI specification.

The captured interface layer is a white canvas `#ffffff` with near-black ink `#101214` for headlines, softer charcoal `#292a2e` for body copy, and a single saturated blue `#1868db` on every primary action. Headlines use `Charlie Display` at weight 700 (hero around 63px, YAML size `63`); body uses `Charlie Text`. Every recorded button and circular carousel control uses `9999px` radius. Surfaces lift with `rgba(0,0,0,0.03)` and `rgba(0,0,0,0.05)` shadows. Marketing illustrations introduce coral `#ff613d`, bright purple `#bf63f3`, and deep aubergine `#48245d`. The hex values, the two Charlie cuts, the `9999px` radius, the two shadow strings, and the three illustration accents are recorded. Calling that layer friendly confidence, a bright approachable cobalt rather than cold corporate blue, punchy editorial loudness, or a page that wants the visitor to press record immediately, and the source comparison “Where Stripe murmurs, Loom announces,” are derived editorial implementation inferences from the verified surfaces; they are not Loom-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. Loom was founded in **2015** (originally as *Opentest*, then *OpenVid*, before becoming Loom) by **Joe Thomas**, **Shahed Khan**, and **Vinay Hiremath**. The founders were building a usability-testing product and discovered that the most valuable thing they had made was the simple screen-and-camera recorder they used to share feedback. They pivoted to that recorder — the insight being that asynchronous video could replace a huge volume of meetings and long written messages. That founding insight — *async video as a faster, more human way to communicate at work* — shaped everything: a one-click recorder, instant shareable links, and a friendly consumer-grade interface that lowers the barrier to pressing record. Loom grew through bottom-up adoption inside companies and was **acquired by Atlassian in 2023** for roughly $975M, positioning it alongside Atlassian's suite of team-collaboration tools. What Loom embraces, as the source states it: speed-to-record, warmth, and the idea that showing beats telling. What it rejects: the friction of meetings, the cold formality of legacy enterprise screen-share tools, and any UX that makes capturing a quick video feel heavyweight. The bold blue-and-white visual identity is the design expression of that ethos — bright, immediate, and unintimidating. The dates, the earlier product names, the founders, the $975M figure, the Atlassian acquisition, and those embrace/reject sentences are the source's own narrative facts; they do not by themselves supply interface tokens. Classifying that founding-and-acquisition narrative as context that does not by itself supply interface tokens is a derived editorial implementation inference from the verified surfaces; it is not Loom-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product's primary tasks, each naming a surface or control the source records, and not taking them from the source's persona section, is a derived editorial implementation inference from the verified surfaces; it is not Loom-authored or a separately published UI specification.

- Start Loom from the homepage CTA "Get Loom for free".
- Download the recorder ("Download now").
- Record screen, voice, and face (source product line: "Record your screen, voice, and face.").
<!-- design-md:claim-end -->

### Audience

No named or demographic personas are invented. The source labels its §13 figures as fictional archetypes, so those biographies are dropped rather than promoted, and no name, age, city, motivation, or affiliation classification is carried into this document or its sidecar. What the source independently records at a group level is people inside companies adopting async video bottom-up, and Atlassian team-collaboration context after 2023. Reading those source-named groups as this product's audience, and dropping the source's archetype biographies rather than promoting them, is a derived editorial implementation inference from the verified surfaces; it is not Loom-authored or a separately published UI specification.

### Distinctive traits

Classifying the list as a restatement of recorded values, and grouping the eight traits and the readings inside them, is a derived editorial implementation inference from the verified surfaces; it is not Loom-authored or a separately published UI specification.

- Charlie Display / Charlie Text — YAML `tokens.typography.family.display` / `tokens.typography.family.text`
- Weight 700 headlines; hero YAML size `63` / §3 `63px (3.95rem)` / §1 “around 63px”
- Single dominant action color: Loom blue `#1868db` on pure white `#ffffff`
- Full-pill geometry (`9999px`) on every recorded button and circular control
- Near-black ink headings (`#101214`) over softer charcoal body (`#292a2e`)
- Soft, low-opacity multi-layer shadows — YAML `tokens.shadow.soft` / `tokens.shadow.standard`
- Light-blue surface tint (`#e9f2fe`) for secondary buttons and footer
- Playful coral / purple gradient accents (`#ff613d`, `#bf63f3`, `#48245d`) in illustrations

### Principles

These 5 items are a derived editorial implementation inference from the verified surfaces; they are not Loom-authored or a separately published UI specification. The source states them in its own Principles section together with the UI implication it draws from each.

1. **Show, don't tell.** *UI implication:* Lead with video previews and live demos; let the product demonstrate itself rather than describing it in walls of text.
2. **One click to record.** *UI implication:* The primary action (Loom blue pill) is unmistakable and always within reach; never bury the record/start CTA.
3. **Warm over corporate.** *UI implication:* Rounded full-pill geometry, friendly Charlie typeface, and conversational copy keep the tool approachable, not enterprise-cold.
4. **Async beats meetings.** *UI implication:* Flows favor self-serve, low-friction starts ("Get Loom for free") over gated sales funnels.
5. **Clarity through restraint.** *UI implication:* A single dominant action color and soft elevation keep attention on content; decorative color stays in illustrations.

### Application rules

The source states these eight as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not Loom-authored or a separately published UI specification.

- Use Loom blue (`#1868db`) as the single primary action color
- Set headlines in Charlie Display at weight 700 — bold and declarative
- Make every button and control a full pill (`9999px`)
- Use near-black ink (`#101214`) for headings and softer charcoal (`#292a2e`) for body
- Keep elevation soft and low-opacity (0.03–0.05)
- Use the light-blue surface (`#e9f2fe`) for secondary buttons and footer
- Let body text breathe at 1.5 line-height
- Reserve coral/purple accents for illustrations and gradients only

### Avoid

The source states these seven as its Don't list. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not Loom-authored or a separately published UI specification.

- Use sharp or small-radius corners on buttons — Loom is fully pill-shaped
- Set headlines in a light weight — bold 700 is the brand voice
- Introduce a second competing primary color — blue owns all actions
- Use heavy, high-opacity, or tinted dramatic shadows
- Use coral/purple accents for buttons or links — they are decorative only
- Use pure black (`#000000`) for headings — ink `#101214` is warmer
- Crowd body copy with tight line-height — keep 1.5 for readability

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Each role below pairs a name with the value and the use the source records. Token-set keys follow the YAML paths. Pairing each hex to the token-set path named beside it, keeping `tokens.colors.primary` and `tokens.colors.brand` as two keys that share `#1868db` (Primary / Compact fills and footer-link hover are component uses of that hex, not extra color keys), keeping `tokens.colors.canvas` and `tokens.colors.on-primary` as two keys that share `#ffffff`, keeping icon-button / card / circular-control fill `#ffffff` as component fields rather than a third color key, keeping Primary / Compact / Dark text `#ffffff` as on-primary uses rather than extra keys, keeping `tokens.colors.foreground` and `tokens.colors.ink` as two keys that share `#101214` (Dark button fill and Light button text are component uses of that hex, not extra color keys), keeping YAML `tokens.colors.body` `#292a2e` as the recorded body-and-nav-link role while icon-button and Footer text remain component uses of the same hex rather than extra color keys, keeping Light button fill and Footer fill as component uses of `#e9f2fe` rather than extra color keys, keeping illustration accents off UI-control fills, treating the source note that ink is a near-black with a faint blue undertone — warmer and softer than pure `#000000` — as a recorded description rather than a second heading hex, and treating YAML `tokens.components.button-primary.hover` `bg #0052cc` as a hover/press writing rather than a `focus-visible` treatment, are derived editorial implementation inferences from the verified surfaces; they are not Loom-authored or a separately published UI specification. The hex values and the recorded uses are the source's own.

**Primary**

- **Loom Blue** (`#1868db` / YAML `#1868db`): Primary brand color, CTA backgrounds, primary links, interactive highlights. Token-set path `tokens.colors.primary`. Catalog identity `primary_color` is `#1868db`. Token-set path `tokens.colors.brand` is a second key that writes the same hex.
- **Ink** (`#101214` / YAML `#101214`): Primary heading color and dark-button fill. Token-set path `tokens.colors.ink`. Token-set path `tokens.colors.foreground` is a second key that writes the same hex.
- **Pure White** (`#ffffff` / YAML `#ffffff`): Page background, card surfaces, primary-button text, circular control fill. Token-set path `tokens.colors.canvas`. Token-set path `tokens.colors.on-primary` is a second key that writes the same hex (text and icons on Loom blue or dark fills).

**Secondary and surface**

- **Surface Blue** (`#e9f2fe` / YAML `#e9f2fe`): Light-blue tint used for secondary "light" buttons and the footer background. Token-set path `tokens.colors.surface-blue`.
- **Body Charcoal** (`#292a2e` / YAML `#292a2e`): Standard body copy, nav links, secondary labels. Token-set path `tokens.colors.body`.
- **Muted Gray** (`#7d818a` / YAML `#7d818a`): De-emphasized text, captions, metadata, supporting labels. Token-set path `tokens.colors.muted`.

**Interactive**

- **Loom Blue** (`#1868db`): Primary buttons, primary links, active states — same hex as `tokens.colors.primary`, not a third key.
- **Primary Hover** (`#0052cc` / YAML `#0052cc`): Deeper blue for hover/pressed states on primary links and buttons. Token-set path `tokens.colors.primary-hover`. YAML `tokens.components.button-primary.hover` writes `bg #0052cc`. That hover field is not a `focus-visible` treatment.

**Accent (illustration and marketing)**

YAML token note: primary = live Loom blue `#1868db` (pill CTA, white text); brand accents (coral `#ff613d`, purple `#bf63f3`, deep purple `#48245d`) appear in marketing illustration gradients.

- **Coral** (`#ff613d` / YAML `#ff613d`): Warm orange-red used in illustration gradients and decorative highlights. Token-set path `tokens.colors.accent-coral`.
- **Bright Purple** (`#bf63f3` / YAML `#bf63f3`): Vivid violet for gradient decoration and playful accents. Token-set path `tokens.colors.accent-purple`.
- **Deep Aubergine** (`#48245d` / YAML `#48245d`): Dark purple anchoring gradient illustrations and immersive accent zones. Token-set path `tokens.colors.accent-deep`.

### Spacing

Token-set path `tokens.spacing` (unitless steps, kept as the YAML recorded them): `tokens.spacing.xs: 4` · `tokens.spacing.sm: 8` · `tokens.spacing.md: 16` · `tokens.spacing.base: 16` · `tokens.spacing.lg: 24` · `tokens.spacing.xl: 32` · `tokens.spacing.xxl: 48` · `tokens.spacing.section: 64`.

Source §5 also names a base unit of 8px and a scale of 4px, 8px, 16px, 24px, 32px, 48px, 64px, and says button padding follows an 8px rhythm (8px/16px compact, 16px/23px large). `tokens.spacing.md: 16` is not `tokens.spacing.base: 16` (two keys that share 16). `tokens.spacing.sm: 8` is not `tokens.rounded.sm: 8`. `tokens.spacing.md: 16` is not `tokens.rounded.md: 16`. `tokens.spacing.lg: 24` is not `tokens.rounded.lg: 24`. `tokens.spacing.base: 16` is not body size 16 and not compact padding `8px 16px`. `tokens.spacing.xl: 32` is not a type size. `tokens.spacing.xxl: 48` is not Primary Compact height `48px`. `tokens.spacing.section: 64` is not a type size. Padding `16px 23px` is not a spacing-scale step. Keeping those unitless steps on their own keys (`md: 16` ≠ `base: 16`; spacing `8` / `16` / `24` ≠ rounded `8` / `16` / `24`; `base: 16` ≠ body size 16 ≠ compact padding `8px 16px`; `xxl: 48` ≠ Compact height `48px`; padding `16px 23px` not a spacing-scale step), and keeping gutter/padding px spellings off those keys, is a derived editorial implementation inference from the verified surfaces; it is not Loom-authored or a separately published UI specification.

### Shape

Token-set path `tokens.rounded` (unitless steps, kept on their own path): `sm: 8` · `md: 16` · `lg: 24` · `full: 9999`.

- Small (8px): subtle rounding on small surfaces — YAML `tokens.rounded.sm`. Not spacing `8`.
- Medium (16px): standard cards — YAML `tokens.rounded.md`. Not spacing `16`.
- Large (24px): feature cards, media frames — YAML `tokens.rounded.lg`. Not spacing `24`.
- Full (`9999` / `9999px`): every button and circular control — YAML `tokens.rounded.full` `9999`; component records write `9999px`.

Keeping four rounded keys, keeping `8` / `16` / `24` unmerged from the matching spacing keys, and keeping unitless `9999` beside `9999px`, is a derived editorial implementation inference from the verified surfaces; it is not Loom-authored or a separately published UI specification.

### Elevation

YAML `tokens.shadow` keys, kept on their own path: `tokens.shadow.soft: "rgba(0,0,0,0.03) 0px 4px 6.4px 0px"` · `tokens.shadow.standard: "rgba(0,0,0,0.05) 0px 3px 9.6px 0px"`.

Source §6 also writes a level table:

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow | Page background, inline text |
| Soft (Level 1) | `rgba(0,0,0,0.03) 0px 4px 6.4px 0px` | Subtle card lift |
| Standard (Level 2) | `rgba(0,0,0,0.05) 0px 3px 9.6px 0px` | Cards, controls, media previews |
| Control (Level 2) | `rgba(0,0,0,0.03) 0px 4px 6.4px, rgba(0,0,0,0.05) 0px 3px 9.6px` | Circular carousel buttons |

YAML `tokens.components.icon-button.shadow` writes the stacked pair with trailing `0px` on both layers: `rgba(0,0,0,0.03) 0px 4px 6.4px 0px, rgba(0,0,0,0.05) 0px 3px 9.6px 0px`. That stacked writing stays beside the §6 Control row that omits those trailing `0px` tokens.

Source §6 Shadow Philosophy, kept as recorded: Loom's elevation is deliberately gentle. Shadow opacities stay between 0.03 and 0.05 with small blur radii, so cards and controls feel like they hover a few millimeters off the page rather than casting deep dramatic shadows. The neutral (un-tinted) black shadow keeps the focus on the bold typography and bright blue actions — depth is a supporting role, never the star.

Keeping YAML shadow strings on their own keys rather than flattening them over the §6 level table, keeping the Control stacked writing as a third spelling, and reading that philosophy paragraph as the source's own elevation rule rather than as a new shadow token, are derived editorial implementation inferences from the verified surfaces; they are not Loom-authored or a separately published UI specification.

### Motion

The source attributes its token-level claims to a live extract (`tokens.source: live-extract`) of computed color, type, spacing, radius, shadow, and component geometry on `https://www.loom.com`. The motion contract below sits outside that YAML token set: durations, easing *roles*, signature motions, and reduced-motion are source §15 statements rather than per-component measured CSS. The three cubic-bezier values the source lists for `ease-enter`, `ease-exit`, and `ease-standard` are not traceable to that live extract, and the `ease-exit` curve matches the catalog template example, so the curves are omitted and only the roles, durations, signature-motion names, and reduced-motion rule are kept. Holding those durations and names, omitting the three curve values because they are unattributed to the live extract and because the `ease-exit` curve matches the catalog template rather than a live-computed value, holding the five-kind promotion gate (official documentation of a single curve or duration is not that gate), and reading the motion section as outside the live-extract token set, are derived editorial implementation inferences from the verified surfaces; they are not Loom-authored or a separately published UI specification.

**Durations** (source §15):

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | State commits, selection, focus rings |
| `motion-fast` | 120ms | Hover, button press, focus |
| `motion-standard` | 220ms | Dropdowns, carousel slides, card reveals |
| `motion-slow` | 320ms | Page-level transitions, hero reveals |

**Easing roles** — three roles with declared uses. Curve values omitted:

| Token | Use |
|---|---|
| `ease-enter` | Arriving — panels, dropdowns, cards |
| `ease-exit` | Dismissals |
| `ease-standard` | Two-way transitions |

**Signature motions** (source §15), kept as named pairings. The `ease-*` names below are role names, not restored curves:

1. **Carousel slide.** Testimonial carousel advances with `motion-standard / ease-standard`, a smooth horizontal glide paired with the soft-shadowed circular controls.
2. **Hover lift.** Buttons and cards lift subtly on hover via `motion-fast`, deepening the soft shadow slightly — gentle, never bouncy.
3. **CTA feedback.** Primary pills respond to press with a quick `motion-fast` color deepen toward `#0052cc`.
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant`; carousels advance instantly and hover lifts are removed. The interface stays fully functional.

An exact additional motion value may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework or vendor document — does not satisfy that condition.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The following evidence-class application readings — Charlie Display / Charlie Text are the live computed UI families on the captured marketing site, this packet has no foundry license URL, FontFaceSet and hosted source files are unnamed in this packet, no Loom-exclusive distributed family was verified as a downloadable asset in this packet, `sans-serif` remains a fallback, and the recordings-library and recorder-product surfaces named in source §14 remain outside the marketing type capture — are a derived editorial implementation inference from the verified surfaces; it is not Loom-authored or a separately published UI specification.

| Evidence class | Resolution |
|---|---|
| Official product-use | Charlie is named as the UI family on the captured marketing site. This packet has no foundry license URL. |
| Live computed surface-use | Headlines compute as `Charlie Display`; body, leads, nav, and UI compute as `Charlie Text`. |
| FontFaceSet and source corroboration | Unnamed in this packet. No Loom-hosted FontFace URL is recorded. |
| Official distributed asset | No Loom-exclusive distributed type family was verified as a loadable file in this packet. |
| Declared-only | Fallback `sans-serif` after each Charlie cut. It remains a fallback. |
| Outside these captures | The recordings-library and recorder-product surfaces named in source §14 remain outside the `https://www.loom.com` marketing type capture. |

### Family

- **Current visible display family:** `Charlie Display`, with fallback `sans-serif` — YAML `tokens.typography.family.display`
- **Current visible text family:** `Charlie Text`, with fallback `sans-serif` — YAML `tokens.typography.family.text`
- Source §3: Charlie is a warm humanist sans with rounded terminals; Loom pairs the heavier Display cut for headings with the more readable Text cut for running copy.

Keeping those two family keys rather than merging them, refusing to present `sans-serif` as the brand face, and reading the humanist/rounded-terminals sentence as the source's own type description rather than as a foundry proof, is a derived editorial implementation inference from the verified surfaces; it is not Loom-authored or a separately published UI specification.

### Type roles

Token-set `use` strings are kept verbatim. YAML `lineHeight` stays the unitless `1.03` / `1.14` / `1.27` / `1.52` / `1.5` / `1.0` the YAML recorded. Source §3 also writes `1.03 (tight)`, `1.00 (tight)`, and `1.50` beside body. YAML sizes are unitless (`63`, `44`, `33`, `27`, `16`); source §3 spells `63px (3.95rem)`, `44px (2.75rem)`, `33px (2.03rem)`, `27px (1.67rem)`, `16px (1.00rem)`. YAML tracking is `0` on display-hero / display-lg / heading; source §3 says letter-spacing stays `normal` across the system. Keeping the YAML `use` strings verbatim, keeping unitless sizes and px/rem spellings as two writings, keeping unitless line-heights unconverted to a replacement px, keeping YAML tracking `0` beside `normal`, keeping YAML size `16` unmerged from `tokens.spacing.base: 16` and from compact padding, and keeping YAML size `63` unmerged from a spacing step, is a derived editorial implementation inference from the verified surfaces; it is not Loom-authored or a separately published UI specification.

| Role | YAML `use` | Size | Weight | Line height | Tracking | Token-set path |
|---|---|---:|---:|---:|---:|---|
| display-hero | Hero headline, bold confident statement | 63 | 700 | 1.03 | 0 | `tokens.typography.display-hero` |
| display-lg | Section headlines | 44 | 700 | 1.14 | 0 | `tokens.typography.display-lg` |
| heading | Sub-section / card headings | 33 | 700 | 1.27 | 0 | `tokens.typography.heading` |
| lead | Lead paragraph, intro copy | 27 | 400 | 1.52 | | `tokens.typography.lead` |
| body | Standard reading text, nav links | 16 | 400 | 1.5 | | `tokens.typography.body` |
| button | Primary button label | 16 | 700 | 1.0 | | `tokens.typography.button` |
| button-light | Header CTA label | 16 | 400 | 1.0 | | `tokens.typography.button-light` |

Additional source §3 rules, kept as recorded: Hero headline, max size, declarative; Major section headlines; Primary/dark button label; Header CTA, lighter weight; **Bold display weight as signature** — weight 700 on headlines; **Two cuts, two jobs** — `Charlie Display` carries headings (heavy, tight); `Charlie Text` carries everything readable (regular, comfortable 1.5 line-height); **Tight headlines, generous body** — display line-heights compress toward 1.03–1.27; body and lead relax to 1.5–1.52; **Minimal tracking** — letter-spacing stays `normal` across the system — the warmth comes from the typeface, not from tracking manipulation.

### Assets

- Catalog favicon field: Google s2 proxy `https://www.google.com/s2/favicons?domain=loom.com&sz=128`. That is an identity pointer, not a Loom-hosted brand file.
- Marketing illustrations with coral/purple gradients are first-party decorative content; do not replace them with invented blue chrome, and do not use those accents as button or link fills.

Reading the Google s2 slug as an identity pointer rather than as a first-party mark file, and reading illustration accents as decorative content that must not become UI fills, is a derived editorial implementation inference from the verified surfaces; it is not Loom-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The source state contract, preserved here in full:

| State | Treatment |
|---|---|
| **Empty (no recordings yet)** | White canvas, friendly headline in ink (`#101214`), one Loom blue pill CTA inviting the first recording. Encouraging, low-pressure. |
| **Empty (no search results)** | Muted gray (`#7d818a`) single line explaining nothing matched, with filters visible to adjust. No dead-end illustration. |
| **Loading (library first paint)** | Skeleton blocks at final dimensions in surface-blue (`#e9f2fe`) tint with gentle shimmer. |
| **Loading (video processing)** | Inline progress indicator in Loom blue; previous content stays visible where possible. |
| **Error (upload/record failed)** | Inline message in plain language, solution-first, with a clear retry pill. Never a generic "Something went wrong". |
| **Error (form validation)** | Field-level message describing what is invalid and what would be valid. |
| **Success (recording shared)** | Brief confirmation with the shareable link surfaced immediately for one-tap copy. |
| **Success (action saved)** | Short auto-dismiss toast, sentence case, no exclamation hype. |
| **Skeleton** | Surface-blue blocks at final dimensions; soft shimmer consistent with the gentle shadow system. |
| **Disabled** | Reduced opacity on surface and label together; blue actions fade rather than switching to gray, preserving brand read. |

Every interactive-kind verdict, every applicability verdict, and the reason given for either — including omitting Kind and the applicability map on the footer card, on Cards & Containers, and on Navigation, closing loading/error/success on the dark destination CTA and on the carousel icon-button, opening loading/error/success on the primary, compact, and light committing CTAs, keeping each YAML `use` string as a Token-set use row beside Role, keeping YAML `button-primary` / `button-light` / `button-dark` `font` `16px / 700` beside those bodies' `16px Charlie Text weight 700`, keeping Compact body `16px Charlie Text weight 400` beside type-role `button-light` (`Header CTA label`) rather than beside a YAML component font, keeping Primary Compact as a §4 variant that is not a YAML `tokens.components` id, treating Capture-record rows as product-level writings rather than per-control computed tokens, and refusing to write `#0052cc` onto `focus-visible` rows — is a derived editorial implementation inference from the verified surfaces; it is not Loom-authored or a separately published UI specification. Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted where this packet holds no value for that same canonical state. Absence of an observation is not a `not-applicable` reason. Loading, error, and success follow each control's product role rather than its primitive kind. YAML `hover: bg #0052cc` is a hover/press writing; it is not written onto `focus-visible`. This is not a complete state-coverage claim.

### Primary (Loom Blue)

- Role: primary CTA
- Primitive type: `button`
- Kind: interactive
- Anatomy: label
- Background: `#1868db`
- Text: `#ffffff`
- Radius: `9999px`
- Padding: `16px 23px`
- Height: `58px`
- Font: 16px / 700 (YAML `font`: `16px / 700`); Charlie Text weight 700
- Hover: deepens toward `#0052cc` (YAML `hover`: `bg #0052cc`)
- Token-set use: Primary CTA (Get Loom for free, Download now, Learn more)
- Token-set path: `tokens.components.button-primary` (`type`, `bg`, `fg`, `radius`, `padding`, `height`, `font`, `hover`, `use`)
- Observed: default and hover (`#0052cc`)

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured primary CTA |
| hover | applicable | Pointer-web button; treatment captured `#0052cc` |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Button control; source §14 disabled (reduced opacity together; blue fades rather than switching to gray) is the general writing, not a per-control computed value |
| loading | applicable | Primary CTA can start signup or download ("Get Loom for free", "Download now"); visual treatment omitted |
| error | applicable | A committing CTA can fail in place; visual treatment omitted |
| success | applicable | A committing CTA can complete; visual treatment omitted |

### Primary Compact

- Role: header CTA
- Primitive type: `button`
- Kind: interactive
- Anatomy: label
- Background: `#1868db`
- Text: `#ffffff`
- Radius: `9999px`
- Padding: `8px 16px`
- Height: `48px`
- Font: 16px Charlie Text weight 400
- Use: Header CTA ("Get Loom for free" in nav)
- Token-set: not in the token set as its own `tokens.components` id. YAML `tokens.typography.button-light.use` is `Header CTA label` (type role, not this component id).
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured header primary CTA |
| hover | applicable | Pointer-web button; visual treatment omitted on this size |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Button control; visual treatment omitted |
| loading | applicable | Header "Get Loom for free" can start the same class of commit; visual treatment omitted |
| error | applicable | A committing CTA can fail in place; visual treatment omitted |
| success | applicable | A committing CTA can complete; visual treatment omitted |

### Light (Surface Blue)

- Role: secondary actions
- Primitive type: `button`
- Kind: interactive
- Anatomy: label
- Background: `#e9f2fe`
- Text: `#101214`
- Radius: `9999px`
- Padding: `16px 23px`
- Height: `58px`
- Font: 16px / 700 (YAML `font`: `16px / 700`); Charlie Text weight 700
- Token-set use: Secondary actions (Contact Sales, Install Chrome Extension, See all use cases)
- Token-set path: `tokens.components.button-light` (`type`, `bg`, `fg`, `radius`, `padding`, `height`, `font`, `use`)
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured light button |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Button control; visual treatment omitted |
| loading | applicable | Recorded use includes "Install Chrome Extension", a committing install; visual treatment omitted |
| error | applicable | A committing install or sales action can fail in place; visual treatment omitted |
| success | applicable | A committing install can complete; visual treatment omitted |

### Dark (Ink)

- Role: alternate emphasis CTA
- Primitive type: `button`
- Kind: interactive
- Anatomy: label
- Background: `#101214`
- Text: `#ffffff`
- Radius: `9999px`
- Padding: `16px 23px`
- Height: `58px`
- Font: 16px / 700 (YAML `font`: `16px / 700`); Charlie Text weight 700
- Token-set use: Alternate emphasis CTA (Learn more, Explore our blog)
- Token-set path: `tokens.components.button-dark` (`type`, `bg`, `fg`, `radius`, `padding`, `height`, `font`, `use`)
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured dark CTA |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Button control; visual treatment omitted |
| loading | not-applicable | Recorded uses are destination labels ("Learn more", "Explore our blog"); the control does not run an in-place operation |
| error | not-applicable | A destination CTA does not produce an in-place error on the pill |
| success | not-applicable | A destination CTA does not confirm a completed operation on the pill |

### Icon Buttons / Carousel Controls

- Role: testimonial carousel previous/next
- Primitive type: `button`
- Kind: interactive
- Anatomy: control
- Background: `#ffffff`
- Text: `#292a2e`
- Radius: `9999px` (circular)
- Height: `56px`
- Shadow: `rgba(0,0,0,0.03) 0px 4px 6.4px 0px, rgba(0,0,0,0.05) 0px 3px 9.6px 0px` (YAML `tokens.components.icon-button.shadow`)
- Token-set use: Testimonial carousel previous/next controls
- Token-set path: `tokens.components.icon-button` (`type`, `bg`, `fg`, `radius`, `height`, `shadow`, `use`)
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured carousel control |
| hover | applicable | Pointer-web control; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A carousel step control can be unavailable at an end; visual treatment omitted |
| loading | not-applicable | A previous/next arrow steps the carousel; it does not run an in-place operation |
| error | not-applicable | Stepping the carousel does not produce an in-place error on the control |
| success | not-applicable | Stepping the carousel does not confirm a completed operation on the control |

### Cards & Containers

- Role: feature cards, testimonial cards, media previews
- Primitive type: not in the token set
- Background: `#ffffff`
- Radius: 16px (md), 24px (lg) for larger feature cards
- Shadow (soft): `rgba(0,0,0,0.03) 0px 4px 6.4px 0px`
- Shadow (standard): `rgba(0,0,0,0.05) 0px 3px 9.6px 0px`
- Observed: default geometry. The source records a card surface, not a control; Kind and the state-applicability map are omitted (C4).

### Navigation

- Background: white, clean horizontal nav
- Links: Charlie Text 16px weight 400, `#292a2e`
- Primary CTA: Loom blue pill ("Get Loom for free") right-aligned
- Secondary CTA: light-blue pill ("Contact Sales")
- The source records nav as layout chrome plus the two CTA pills already declared above; Kind and a nav-wide applicability map are omitted (C4).

### Footer

- Role: footer background
- Primitive type: `card`
- Background: `#e9f2fe`
- Text: `#292a2e`
- Links: `#292a2e`, hover toward `#1868db`
- Token-set use: Footer background, links hover toward #1868db
- Token-set path: `tokens.components.footer` (`type`, `bg`, `fg`, `use`)
- Observed: default geometry and a recorded link-hover direction. The source records a footer surface, not a control; Kind and the state-applicability map are omitted (C4).

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

Treating the §5 spacing/grid/whitespace notes and the §8 breakpoint/touch/collapse/image notes as this contract's layout record, keeping the 8px-rhythm padding `8px/16px` and `16px/23px` off the unitless spacing keys, keeping 48–58px button heights beside Primary Compact `48px` / Primary `58px` / icon `56px`, reading the 58px primary, 48px compact, 56px carousel control, and ~63px hero as the source's stated layout numbers also recorded as desktop-capture measurements rather than as independently re-measured values, and reading those breakpoints as the source's own layout contract rather than as independently measured media queries, is a derived editorial implementation inference from the verified surfaces; it is not Loom-authored or a separately published UI specification.

### Layout principles (source §5)

- Centered single-column hero with large bold headline and a pair of pill CTAs
- Feature sections alternate text + media in 2-column splits
- Testimonial carousel with circular white controls
- Generous full-width sections with light-blue tinted zones for rhythm
- **Open and breathable**: Loom leans on white space to keep the bold headlines from feeling heavy. The 1.5 body line-height reinforces an unhurried reading pace.
- **Section tinting**: Light-blue (`#e9f2fe`) zones and the footer break the white expanse without introducing hard color, creating a soft light/lighter cadence.
- **Pill rhythm**: Repeated full-radius buttons create a consistent rounded visual motif down the page.

### Breakpoints (source §8)

| Name | Width | Key Changes |
|---|---|---|
| Mobile | <640px | Single column, hero compresses, stacked CTAs |
| Tablet | 640-1024px | 2-column splits collapse, moderate padding |
| Desktop | 1024-1280px | Full alternating text+media layout |
| Large Desktop | >1280px | Centered content with generous margins |

### Touch targets

- Buttons run 48–58px tall — comfortably tappable pills
- Circular carousel controls at 56px diameter
- Nav links with generous spacing

### Collapsing strategy

- Hero: ~63px display compresses to ~36–40px on mobile, weight 700 maintained
- Navigation: horizontal links + CTA pills collapse to a menu toggle
- Feature splits: side-by-side text+media stack vertically
- CTA pairs stack full-width on mobile
- Section spacing compresses on smaller viewports

### Image behavior

- Product/video preview frames keep rounded corners (16–24px) at all sizes
- Marketing illustrations with coral/purple gradients simplify on mobile
- Media maintains soft shadow elevation across breakpoints

The 58px primary, 48px compact, 56px carousel control, and ~63px hero are the source's stated layout numbers, also recorded as desktop-capture measurements.

<!-- design-md:section content-locales -->
## 6. Content & Locales

Calling the register warm, direct, and human — the tone of a helpful colleague who would rather show you than tell you — reading the product-to-copy mirroring (short, plain, action-first), the hero as a familiar idiom repurposed with a knowing wink, and the CTAs as never gated or salesy on the basics as the same derived register reading, and reading the tone table as reconstruction direction rather than as a Loom-authored voice guide, is a derived editorial implementation inference from the verified surfaces; it is not Loom-authored or a separately published UI specification. The quoted lines below are the source's own published strings, kept byte-for-byte.

The product itself is about replacing long written messages with a quick video, and the copy mirrors that: short, plain, action-first. The hero line *"One video is worth a thousand words"* sets the register — a familiar idiom repurposed with a knowing wink, confident without being grandiose. CTAs are friendly imperatives ("Get Loom for free", "Download now"), never gated or salesy on the basics.

| Context | Tone |
|---|---|
| Hero headlines | Bold, idiomatic, confident. Conversational, never corporate. |
| Product descriptions | One concrete benefit per line. "Record your screen, voice, and face." |
| CTAs | Friendly imperatives. "Get Loom for free", "Download now", "Learn more". |
| Onboarding / empty states | Encouraging, low-pressure. Invites the first recording. |
| Enterprise / sales | Slightly more formal but still warm; "Contact Sales" not "Request a demo gate". |
| Support / errors | Plain-language, reassuring, solution-first. |

**Forbidden phrases.** "Revolutionary", "game-changer", "supercharge", "synergy", "cutting-edge". Jargon-heavy enterprise-speak. Exclamation-stacked hype. Anything that makes recording a video feel like a chore.

Published labels also recorded on the captured CTAs: "Install Chrome Extension", "See all use cases", "Explore our blog".

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

These decisions are unnamed values, not permissions to invent. Reading the list as unnamed values, not as coverage of domains the source never named, is a derived editorial implementation inference from the verified surfaces; it is not Loom-authored or a separately published UI specification.

- exact cubic-bezier values for `ease-enter`, `ease-exit`, and `ease-standard`
- hover visual treatments other than primary `#0052cc`
- `focus-visible` visual treatment
- getdesign.md/loom and refero records (named in the source footer as not authoritative / directory only)
