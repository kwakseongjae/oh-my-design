# Headspace Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Headspace is a mental-health platform. This contract covers the two first-party web surfaces the source inspected for tokens on 2026-06-17: the homepage at `https://www.headspace.com` and the subscriptions surface at `https://www.headspace.com/subscriptions`. The 2024 rebrand case study at `https://italic-studio.com/projects/headspace-rebrand/` is a named brand-partner source for typeface and illustration system context; it does not supply the computed interface tokens below. Every value stays attached to the surface that established it. Keeping values attached to the surface that established them, and treating the Italic Studio case study as a named source that does not supply computed interface tokens, are derived editorial implementation inferences from the verified surfaces; they are not Headspace-authored or a separately published UI specification.

The captured interface layer opens on warm cream (`#f9f4f2`) — the source records it as the single most frequent background — with headlines in warm charcoal (`#2d2c2b`) and body in `#4b4c4d`. The one saturated action color is Headspace Blue (`#0061ef`), reserved for the primary "Try for free" CTA. The signature warm-orange family (`#ff7300` / `#ffa500` / gold `#ffce00`) carries content-mode chips and color-block cards. Supporting accents are candy pink (`#ffa1cc`), meditation purple (`#3b197f`), and teal-navy (`#27455c`). Type is the custom Headspace Apercu (Colophon) at weight 700 for every headline. Geometry is pill-forward: 32px-radius buttons, 24px-radius feature cards, circular play controls. Live inspection found `box-shadow: none` across the hero, nav, headings, cards, and buttons. Reading that cream as a calm, paper-like base instead of clinical white, reading the reserved blue as the system's "do this" signal, reading the orange family as the emotion-driven smiley system, and reading the page as shadowless depth from warm tints and color blocks rather than elevation, are derived editorial implementation inferences from the verified surfaces; they are not Headspace-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. Headspace was founded in 2010 by Andy Puddicombe — a former Buddhist monk — and Rich Pierson, who met when Pierson sought out Puddicombe's meditation classes in London. Their shared premise was that meditation should be demystified and made accessible to ordinary people, stripped of esoteric framing: a few minutes a day, guided in plain language. The company has run an orange smiley since its conception — a mascot reportedly inspired by the saffron robes worn in the Buddhist meditation tradition. By the 2020s Headspace had grown from a meditation app into a comprehensive mental-health platform spanning sleep, mindfulness, mental-health coaching, an AI companion (Ebb), and clinician-led online therapy — serving members "from better sleep, to everyday stress, to supporting members with care for more complex issues like anxiety and depression," and partnering with over 4,000 organizations. The 2024 rebrand, led by Italic Studio (ITAL/C) with a custom typeface from Colophon Foundry, was built to carry that expansion: "We built on the foundation of the brand to evolve it, not re-invent it." Official history and the rebrand coverage provide that narrative context; they do not by themselves supply interface tokens. Classifying that founding-and-rebrand narrative as context that does not by itself supply interface tokens is a derived editorial implementation inference from the verified surfaces; it is not Headspace-authored or a separately published UI specification.

What the source says Headspace refuses, visible in its design: the clinical aesthetic of legacy healthcare — the "dreary sea of blues and greys" the design team explicitly named as the thing to avoid — and the stigma that surrounds talking about mental health. What it embraces: a warm cream canvas, an emotion-driven illustration system that flexes "from stress, sadness, contentment, and every mood in between," a single trustworthy blue for action, and a typeface whose curves echo a smile and "flex from playful to clinical" so one brand can hold both a bedtime story and a depression-care pathway. That refusal/embrace pairing is stated by the source as narrative; reading it as a current-surface design instruction is a derived editorial implementation inference from the verified surfaces; it is not Headspace-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=5 lang=en -->
### Primary tasks

- Start a free trial from "Try for free" or "Start your free trial".
- Browse content modes labeled "Sleep", "Meditate", "Move", "Focus", and "Wake Up".
- Review subscription plans on `https://www.headspace.com/subscriptions`.
- Play or pause audio from the circular play control.
- Check coverage or try the product from "Check your coverage" and "Try for $0".

Selecting these five as the product's primary tasks is a derived editorial implementation inference from the verified surfaces; it is not Headspace-authored or a separately published UI specification. Each names a label or surface the source records. They do not come from the source's persona section.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source labels its four named figures as fictional archetypes informed by publicly observable Headspace user segments, not individual people, so those biographies are dropped rather than promoted, and no name, age, city, or occupation is carried into this document or its sidecar. What the source independently records is the audience the platform serves at a group level: members from better sleep and everyday stress through care for anxiety and depression, and the organizations it partners with (over 4,000). Reading those groups as this product's audience is a derived editorial implementation inference from the verified surfaces; it is not Headspace-authored or a separately published UI specification.

### Distinctive traits

- Warm cream canvas (`#f9f4f2`) instead of clinical white
- Headspace Blue (`#0061ef`) reserved for the single primary "do this" action
- Signature warm-orange family (`#ff7300` / `#ffa500` / gold `#ffce00`) carrying the smiley emotion system
- Custom Headspace Apercu (Colophon) at weight 700 for every headline
- Near-black warm charcoal (`#2d2c2b`) for headings, soft grey (`#4b4c4d`) for body
- Tight negative tracking on headlines (`-1.92px` at 64px, scaling with size)
- Pill-forward geometry — 32px pill buttons, 24px cards, circular play controls
- Shadowless depth — warm tints and saturated color blocks instead of elevation

These eight traits, and the readings carried inside them — reserved blue, orange as emotional core, rounded-bold display voice, pill rhythm — are a derived editorial implementation inference from the verified surfaces; they are not Headspace-authored or a separately published UI specification. Each names the values it rests on.

### Principles

These five items are a derived editorial implementation inference from the verified surfaces; they are not Headspace-authored or a separately published UI specification. The source states them in its own Principles section together with the UI implication it draws from each.

1. **Approachable, not clinical.** The brand exists to destigmatise seeking care. *UI implication:* open on warm cream not clinical white; name hard topics plainly; keep every CTA low-pressure.
2. **Emotion is the system.** The smiley illustration set spans the full range of human feeling. *UI implication:* use the warm-orange family and emotion accents to carry mood; treat illustration/animation as core, not garnish.
3. **One action, one color.** Headspace Blue (`#0061ef`) means "do this." *UI implication:* reserve the saturated blue exclusively for the primary CTA so the next step is never ambiguous.
4. **Playful and clinical in one voice.** The typeface flexes both ways. *UI implication:* the same Headspace Apercu weight 700 serves a bedtime headline and a therapy-care page — let tone shift through copy and color, not type swaps.
5. **Calm through softness.** Pills, rounded cards, warm tints, no shadows. *UI implication:* keep geometry soft and depth flat; let color blocks (not elevation) do the separating.

### Application rules

The source states these eight as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not Headspace-authored or a separately published UI specification.

- Use the custom Headspace Apercu at weight 700 for every headline — the rounded-bold voice is the brand
- Open on warm cream (`#f9f4f2`), not clinical white — it sets the calm tone
- Reserve Headspace Blue (`#0061ef`) for the single primary "do this" action
- Use the warm-orange family (`#ff7300` / `#ffa500` / gold `#ffce00`) for the emotion-driven content and illustration system
- Use warm charcoal (`#2d2c2b`) for headings and soft grey (`#4b4c4d`) for body — not pure black
- Apply tight negative tracking on headlines (`-1.92px` at 64px)
- Use pill geometry — 32px buttons, 24px cards, circular play controls
- Separate sections with color blocks and warm tints, not shadows

### Avoid

The source states these eight as its Don't list; they are kept as its rules, reasons included. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not Headspace-authored or a separately published UI specification.

- Use clinical white or a "dreary sea of blues and greys" — the rebrand exists to reject that
- Set headlines in a light weight — display is always weight 700
- Spread Headspace Blue across many elements — keep it the single action color
- Use drop shadows for depth — Headspace is shadowless; reach for color and tint
- Use pure black (`#000000`) for body text — reserve warm charcoal `#2d2c2b` / grey `#4b4c4d`
- Use a substitute geometric sans — Headspace Apercu's smile-echoing curves are essential
- Use sharp / square corners on buttons — everything interactive is a pill
- Treat the orange as decorative only — it is the emotional core of the system

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Each role below pairs a name with the value and the use the source records. Where a line also characterizes a value — paper-like cream, "do this" blue, robe-orange, grounding teal — that characterization is a derived editorial implementation inference from the verified surfaces; it is not Headspace-authored or a separately published UI specification.

Primary

- **Headspace Blue** (`#0061ef`): The single saturated action color. Hero and header "Try for free" CTA backgrounds, "Start your free trial", and saturated color-block feature cards. Token-set key `tokens.colors.primary`.
- **Charcoal Ink** (`#2d2c2b`): Primary heading color and the solid dark-button fill ("Try for $0", "Check your coverage"). Token-set key `tokens.colors.ink`.
- **On-primary** (`#ffffff`): Text on saturated Headspace Blue. Token-set key `tokens.colors.on-primary`. Same hex as White surface; the keys stay separate.

Neutral and surface

- **Warm Cream** (`#f9f4f2`): The dominant page background and the soft-pill secondary button fill. Token-set key `tokens.colors.canvas`.
- **White** (`#ffffff`): Card surfaces, input backgrounds, and text on saturated colors. Token-set key `tokens.colors.surface`.
- **Body Grey** (`#4b4c4d`): The default body / reading text color set on `<body>`. Token-set key `tokens.colors.body`.
- **Slate** (`#44423f`): Secondary nav and link text; soft-button labels. Token-set key `tokens.colors.slate`.
- **Pure Black** (`#000000`): Maximum-contrast text on gold/yellow surfaces (plan cards, some hero H3s). Token-set key `tokens.colors.ink-pure`.

Brand emotion accents

- **Smiley Orange** (`#ff7300`): The hot signature orange — content-mode chips ("Sleep"), circular play buttons. Token-set key `tokens.colors.orange`.
- **Amber** (`#ffa500`): Softer orange for "Meditate" / "Move" / "Focus" content chips. Token-set key `tokens.colors.amber`.
- **Gold** (`#ffce00`): Bright yellow for the selected subscription plan card and color-block feature cards. Token-set key `tokens.colors.gold`.
- **Candy Pink** (`#ffa1cc`): Emotional accent for illustration blocks and decorative bands. Token-set key `tokens.colors.pink`.
- **Meditation Purple** (`#3b197f`): Deep purple accent for sleep/calm-themed surfaces. Token-set key `tokens.colors.purple`.
- **Teal-Navy** (`#27455c`): Grounding deep teal-navy for darker illustration backgrounds. Token-set key `tokens.colors.teal-navy`.

Borders

- **Tan Hairline** (`#e2ded9`): The warm card / chip outline (`2px solid`) used on the hero theme selectors. Token-set key `tokens.colors.border-tan`.
- **Input Border** (`#d2d5de`): Cool grey `1px` border on email / form inputs. Token-set key `tokens.colors.border-input`.

### Spacing

Token-set steps, unitless: `xs 4 · sm 8 · md 12 · base 16 · lg 24 · xl 40 · xxl 64`. Visible sections also write 4px, 8px, 12px, 16px, 24px, 40px, and 64px where those strings already appear. Token-set key `tokens.spacing.lg: 24` is a spacing step. It is not `tokens.rounded.lg: 24`. Token-set key `tokens.spacing.md: 12` is not `tokens.rounded.md: 12`. Token-set key `tokens.spacing.sm: 8` is not `tokens.rounded.sm: 8`. Token-set key `tokens.spacing.base: 16` is not the 16px body or button size. Token-set key `tokens.spacing.xl: 40` is not the 40px feature size. Token-set key `tokens.spacing.xxl: 64` is not the 64px display-hero size. The source also records a consistent 48px button height with 24px horizontal padding, and hero CTAs that grow to 62px height with 40px padding for emphasis. Those heights and paddings are component measurements, not spacing-scale keys. Keeping those keys on separate paths is a derived editorial implementation inference from the verified surfaces; it is not Headspace-authored or a separately published UI specification.

### Shape

Token-set steps, unitless: `sm 8 · md 12 · lg 24 · pill 32 · full 9999`. Named uses the source records:

- Small (8px): theme-selector tiles, content chips, plan-card inner elements
- Medium (12px): subscription plan cards
- Large (24px): feature cards, pill tabs
- Pill (32px): all primary / secondary buttons
- Circle (`50%`): audio play/pause controls — the play-button radius record, not the token-set `full` step
- Full (`9999`): the token-set pill/full step. The source YAML records `tokens.rounded.full: 9999`. No captured control uses that step as a computed radius; the play control uses `50%`.

`tokens.rounded.lg: 24` is a radius step. It is not `tokens.spacing.lg: 24`. `tokens.rounded.md: 12` is not `tokens.spacing.md: 12`. `tokens.rounded.sm: 8` is not `tokens.spacing.sm: 8`. `tokens.rounded.pill: 32` is not the 32px subsection size. `tokens.rounded.full: 9999` has no spacing counterpart.

Calling the cluster pill-forward, and keeping `tokens.rounded` steps off the spacing and type keys that share a number, is a derived editorial implementation inference from the verified surfaces; it is not Headspace-authored or a separately published UI specification.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow | Page background, inline text, most surfaces |
| Tint (Level 1) | `#f9f4f2` cream shift | Card / band separation without elevation |
| Color block (Level 2) | Saturated fill (`#0061ef`, `#ffce00`) | Feature emphasis through color, not shadow |
| Hairline (Level 3) | `2px solid #e2ded9` / `1px solid #d2d5de` | Selector tiles, input outlines |

Token-set path `tokens.shadow.none`: `none`. Live inspection found `box-shadow: none` across the hero, nav, headings, cards, and buttons. Depth and grouping are communicated through warm tinted surfaces (`#f9f4f2`), saturated color blocks (`#0061ef`, gold `#ffce00`), and thin warm hairlines (`#e2ded9`) — never elevation. Reading that stack as a near-shadowless system that keeps the experience feeling soft, calm, and illustration-led rather than the heavy card-stack chrome of clinical health software is a derived editorial implementation inference from the verified surfaces; it is not Headspace-authored or a separately published UI specification. The measurements themselves are recorded values.

### Motion

The source attributes its token-level claims to a live inspection of computed color, type, radius, and shadow on the homepage and `/subscriptions`. The motion contract below sits outside that attribution: the source's own evidence note assigns a source to its voice samples, its brand narrative, and its personas, and assigns none to the easing curves. The durations, easing roles, and motion rules below are therefore a derived editorial implementation inference from the verified surfaces; they are not Headspace-authored or a separately published UI specification.

Durations:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 140ms | Hover, button press, focus |
| `motion-standard` | 240ms | Card / band reveal, sheet, dropdown |
| `motion-slow` | 360ms | Page-level transitions, hero illustration reveal |

Easing roles — three roles with declared uses. The specific curve values the source lists (`cubic-bezier(0.2, 0.6, 0.25, 1)`, `cubic-bezier(0.4, 0.0, 1, 1)`, `cubic-bezier(0.4, 0.0, 0.2, 1)`) are not traceable to Headspace-computed samples, so the curves are omitted here and only the roles and their uses are kept:

| Token | Use |
|---|---|
| `ease-enter` | Arriving — cards, sheets, illustrations |
| `ease-exit` | Dismissals |
| `ease-gentle` | Soft two-way transitions, breathing animations |

An exact curve may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework or vendor document — does not satisfy that condition.

Motion rules, as the source states them:

- Motion is the brand's living layer — the smiley illustration and animation system is retained specifically to "simplify complex concepts" and convey emotion.
- Animations are warm and gentle, never snappy or jarring: a breathing-guide bubble expands and contracts on a slow, calm cycle; content cards fade-in from below at `motion-standard / ease-enter`.
- The orange smiley's expression transitions are soft eases, never bounces with overshoot — the feeling is reassurance, not delight-for-its-own-sake.
- Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and ambient animation freezes; the product stays fully functional and calm.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | The homepage, subscriptions surface, and the Italic Studio rebrand case study describe Headspace Apercu as a custom Colophon cut commissioned for the 2024 rebrand. They do not publish a separately issued type specimen or a first-party typography token sheet. That "no published type token sheet" reading is a derived editorial implementation inference from the verified surfaces; it is not Headspace-authored or a separately published UI specification. |
| Live computed surface-use | Homepage and `/subscriptions` compute visible text as `Headspace Apercu`. Body computes `font-family: "Headspace Apercu", sans-serif` at 16px / `#4b4c4d` / line-height 18.4px. |
| Official distributed asset | No Headspace-exclusive downloadable font package was verified in the source. |
| Declared-only | The source records `sans-serif` as the fallback after Headspace Apercu. It is a fallback, not a second brand face. |
| License | Colophon Foundry's Aperçu is the upstream family the custom cut is taken from. That describes the foundry relationship, not a Headspace-distributed license grant. That foundry-versus-grant reading is a derived editorial implementation inference from the verified surfaces; it is not Headspace-authored or a separately published UI specification. |
| Outside these captures | Surfaces the source did not inspect stay outside these two captures. |

### Family

- **Current visible UI family:** `Headspace Apercu`, a "Headspace-ified" cut of Colophon Foundry's Aperçu, with `sans-serif` fallback — used for every element the source records: headlines, nav, body, and buttons. There is no separate body font.
- Do not replace Headspace Apercu with a substitute geometric sans. The source records the custom cut's smile-echoing curves as essential. Treating `sans-serif` as a fallback rather than as a stand-in brand face — the same reading as the Declared-only row — is a derived editorial implementation inference from the verified surfaces; it is not Headspace-authored or a separately published UI specification.

### Type roles

| Role | Font | Size | Weight | Line height | Tracking | Token-set use |
|---|---|---:|---:|---:|---:|---|
| Display Hero | Headspace Apercu | 64px (4.00rem) | 700 | 1.00 (64px) | -1.92px | Hero / section headlines, Headspace Apercu Bold |
| Display Large | Headspace Apercu | 52px (3.25rem) | 700 | 1.10 (57.2px) | -1.56px | Large feature headlines |
| Display Medium | Headspace Apercu | 48px (3.00rem) | 700 | 1.00 (48px) | -1.44px | Secondary section heads |
| Feature | Headspace Apercu | 40px (2.50rem) | 700 | 1.15 (46px) | -1.2px | Feature-card / band titles |
| Sub-section | Headspace Apercu | 32px (2.00rem) | 700 | 1.20 (38.4px) | -0.96px | Sub-section heads |
| Card Title | Headspace Apercu | 24px (1.50rem) | 700 | 1.33 (32px) | -0.6px | Footer / card headings |
| Body Large | Headspace Apercu | 18px (1.13rem) | 500 | 1.44 (26px) | normal | Intro / lead paragraphs |
| Body | Headspace Apercu | 16px (1.00rem) | 400 | 1.15 (18.4px) | normal | Standard reading text |
| Button | Headspace Apercu | 16px (1.00rem) | 700 | 1.00 | normal | Primary button label |
| Button Small | Headspace Apercu | 14px (0.88rem) | 700 | 1.00 | normal | Compact nav CTA label |

Unitless line heights stay ratios: `1.00` on Display Hero, Display Medium, Button, and Button Small; `1.10` on Display Large; `1.15` on Feature and Body; `1.20` on Sub-section; `1.33` on Card Title; `1.44` on Body Large. The parenthetical px figures are the source table's conversions, not a replacement of the ratio. YAML tracking `-1.20` / `-0.60` stays unitless beside the visible-section forms `-1.2px` / `-0.6px`. Keeping the ratios and the parenthetical conversions on separate readings, rather than replacing one with the other, is a derived editorial implementation inference from the verified surfaces; it is not Headspace-authored or a separately published UI specification.

Type rules the source states:

- **Bold everywhere it matters**: Every headline is weight 700. Headspace does not whisper — its rounded-bold display voice is the brand's confidence.
- **Tracking tightens with size**: `-1.92px` at 64px, `-1.44px` at 48px, `-1.2px` at 40px, `-0.96px` at 32px. Headlines compress into dense, friendly blocks; body text stays at normal tracking.
- **One typeface, every job**: Headspace Apercu runs from 64px hero to 14px nav CTA. The curves that echo the smile are the brand's typographic DNA at every size.
- **Buttons are bold**: Even at 14-16px, CTA labels are weight 700 — the action always reads as confident.

The four rule titles and the confidence / DNA / whisper readings are a derived editorial implementation inference from the verified surfaces; they are not Headspace-authored or a separately published UI specification. The sizes, weights, ratios, and tracking values are recorded.

### Assets

- Logo treatment the source records: orange Headspace smiley, left-aligned in the top nav. The source frontmatter records `logo.type: simpleicons` and `logo.slug: headspace`. That slug is an identity pointer, not a hosted brand file URL.
- Illustration and animation assets (the smiley emotion system) carry no shadow at any size.
- Do not replace verified product and illustration imagery with invented brand-color decoration.

Reading the smiley as the emotional carrier of the illustration system, and reading the simpleicons slug as an identity pointer rather than a hosted brand file, is a derived editorial implementation inference from the verified surfaces; it is not Headspace-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### How applicability is decided here

The source declares each token-set component with a primitive type (`button`, `tab`, `badge`, `card`, `input`) and a value set; those types are preserved per component. Applicability below is judged by each control's role, never by whether a visual treatment for that state happens to be recorded: where the source supplies no treatment for an applicable state, the value is omitted and the state stays applicable. `not-applicable` is used only where the control's role makes the state meaningless — a destination CTA that commits no operation in place, a tab that only selects, or a display element with no action at all — and the reason given is always that semantic one. Where the source supplies no interaction evidence for a container at all, its kind and applicability map are omitted rather than decided.

The source records no `focus-visible` treatment. Generic focus is not invented. `focus-visible` stays applicable on interactive controls; the visual treatment is omitted.

The role-based decision procedure above, every interactive-kind verdict, every applicability verdict, and the reason given for either is a derived editorial implementation inference from the verified surfaces; they are not Headspace-authored or a separately published UI specification. This is not a complete state-coverage claim.

### Primary (Headspace Blue)

- Role: destination control that opens the free-trial path
- Primitive type: `button` · Kind: interactive
- Domain: Homepage / subscriptions
- Background: `#0061ef`
- Text: `#ffffff`
- Radius: 32px
- Padding: `14px 24px`
- Height: 48px
- Font: 14px Headspace Apercu weight 700
- Token-set font record: `14px / 700 Headspace Apercu`
- Token-set use: `Header / hero primary CTA — Headspace Blue pill`
- Published labels: "Try for free", "Start your free trial"
- The source's layout notes also record hero CTAs at 62px height with 40px padding for emphasis. That 62px / 40px record is a layout measurement on the subscriptions "Start your free trial" control, not a second token-set height for this 48px pill.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web control; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A trial CTA can be gated; treatment omitted |
| loading | not-applicable | The CTA sends the reader to the trial path; it commits no operation in place, so there is no in-progress state on the control itself |
| error | not-applicable | The CTA commits no operation in place, so a failure of that operation cannot be reported on it |
| success | not-applicable | The CTA commits no operation in place, so completion cannot be confirmed on it |

### Charcoal Solid

- Role: destination control for high-emphasis dark invitations
- Primitive type: `button` · Kind: interactive
- Domain: Homepage
- Background: `#2d2c2b`
- Text: `#ffffff`
- Radius: 32px
- Padding: `14px 20px`
- Height: 48px
- Font: 16px Headspace Apercu weight 700
- Token-set font record: `16px / 700 Headspace Apercu`
- Token-set use: `Charcoal solid CTA — 'Try for $0', 'Check your coverage'`
- Published labels: "Try for $0", "Check your coverage"

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web control; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A coverage or trial invitation can be gated; treatment omitted |
| loading | not-applicable | The CTA sends the reader onward; it commits no operation in place |
| error | not-applicable | The CTA commits no operation in place |
| success | not-applicable | The CTA commits no operation in place |

### Soft Cream Pill

- Role: destination control for secondary invitations
- Primitive type: `button` · Kind: interactive
- Domain: Homepage
- Background: `#f9f4f2`
- Text: `#44423f`
- Radius: 32px
- Padding: `12px 24px`
- Height: 48px
- Font: 18px Headspace Apercu weight 700
- Token-set font record: `18px / 700 Headspace Apercu`
- Token-set use: `Cream pill secondary action — 'Get started', 'Learn more'`
- Published labels: "Get started", "Learn more", "Chat with Ebb"

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web control; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A secondary invitation can be gated; treatment omitted |
| loading | not-applicable | The CTA sends the reader onward; it commits no operation in place |
| error | not-applicable | The CTA commits no operation in place |
| success | not-applicable | The CTA commits no operation in place |

### Circular Play / Pause

- Role: in-place audio play/pause
- Primitive type: `button` · Kind: interactive
- Domain: Homepage / subscriptions
- Background: `#2d2c2b`
- Text: `#ffffff`
- Radius: `50%`
- Padding: 10px
- Height: 48px
- Token-set use: `Circular audio play/pause — also appears in orange #ff7300`
- Also appears in smiley orange (`#ff7300`)
- The `50%` radius is this control's circle record. It is not `tokens.rounded.full: 9999`.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable action control; visual treatment omitted |
| disabled | applicable | A play control can be gated; treatment omitted |
| loading | applicable | The source's audio-buffer row puts an inline spinner inside this control |
| error | applicable | The source's playback / network-failed row reports failure on playback |
| success | not-applicable | Play/pause is a toggle, not an operation that completes on the control |

### Pill Tabs (Segmented Selector)

- Role: segmented mode selector — "What kind of headspace"
- Primitive type: `tab` · Kind: interactive
- Domain: Homepage
- Active background: `#2d2c2b`
- Active text: `#ffffff`
- Inactive background: `#f9f4f2`
- Inactive text: `#2d2c2b`
- Radius: 24px
- Padding: `0 24px`
- Height: 48px
- Font: 18px Headspace Apercu weight 700
- Token-set font record: `18px / 700 Headspace Apercu`
- Token-set active record: `charcoal #2d2c2b fill, white label`
- Token-set use: `Segmented pill selector — inactive is cream #f9f4f2 with #2d2c2b label`
- Published labels: "Guided meditations", "Sleep resources"

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable tab; visual treatment omitted |
| disabled | applicable | A segmented option can be gated; treatment omitted |
| loading | not-applicable | The tab only selects a mode; it commits no operation in place |
| error | not-applicable | The tab commits no operation in place |
| success | not-applicable | The tab commits no operation in place |

### Theme Selector Card

- Role: hero outlined selector tile
- Primitive type: not in the token set · Kind: interactive
- Domain: Homepage
- Background: `#ffffff`
- Text: `#4b4c4d`
- Border: `2px solid #e2ded9`
- Radius: 8px
- Padding: `8px 16px 8px 24px`
- Published labels: "Stress less", "Sleep soundly", "Manage anxiety"

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web selector; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable selector; visual treatment omitted |
| disabled | applicable | A selector tile can be gated; treatment omitted |
| loading | not-applicable | The tile selects a theme; it commits no operation in place |
| error | not-applicable | The tile commits no operation in place |
| success | not-applicable | The tile commits no operation in place |

### Navigation

- Role: top horizontal destination links
- Kind: interactive
- Domain: Homepage
- Background: `#ffffff`
- Links: `#44423f`, 16px Headspace Apercu weight 400
- Logo: orange Headspace smiley left-aligned
- CTA: Headspace Blue "Try for free" pill right-aligned (32px radius)
- Published labels: "Meditation", "Sleep", "Mindfulness", "Online therapy"

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web link; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable link; visual treatment omitted |
| disabled | applicable | A nav destination can be gated; treatment omitted |
| loading | not-applicable | The link sends the reader to a destination; it commits no operation in place |
| error | not-applicable | The link commits no operation in place |
| success | not-applicable | The link commits no operation in place |

### Email / Float-Label Field

- Role: email capture field
- Primitive type: `input` · Kind: interactive
- Domain: Homepage
- Background: `#ffffff`
- Text: `#000000`
- Border: `1px solid #d2d5de`
- Radius: 8px
- Padding: `24px 16px 8px`
- Height: 58px
- Font: 16px Headspace Apercu
- Token-set font record: `16px Headspace Apercu`
- Token-set use: `Email capture / float-label field`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web field; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable field; visual treatment omitted |
| disabled | applicable | A capture field can be gated; treatment omitted |
| loading | not-applicable | The field holds a value; it does not commit the capture |
| error | applicable | The source's form-validation row reports a field-level message below this input |
| success | not-applicable | The field does not commit an operation that completes on the control |

### Smiley Orange Chip

- Role: content-mode chip
- Primitive type: `badge` · Kind: non-interactive
- Domain: Subscriptions
- Background: `#ff7300`
- Text: `#ffffff`
- Radius: 8px
- Padding: `8px 12px`
- Font: 14px Headspace Apercu weight 500
- Token-set font record: `14px / 500 Headspace Apercu`
- Token-set use: `Content-mode chips (Sleep/Meditate/Move) in the smiley orange family`
- Published label: "Sleep"
- Kind is non-interactive because the source types it `badge` and records it as a content-mode label, not as a control that commits. No applicability map.

### Amber Chip

- Role: content-mode chip
- Primitive type: `badge` · Kind: non-interactive
- Domain: Subscriptions
- Background: `#ffa500`
- Text: `#000000`
- Radius: 8px
- Padding: `8px 12px`
- Font: 14px Headspace Apercu weight 500
- Published labels: "Meditate", "Move", "Focus"
- Kind is non-interactive for the same badge reason. The `#000000` label on amber is the §4 row; the token-set `category-chip` row records `#ffffff` on `#ff7300`. Those two fills stay separate.

### Feature Card (Cream)

- Role: warm-cream feature card
- Primitive type: `card`
- Domain: Homepage
- Background: `#f9f4f2`
- Radius: 24px
- Token-set use: `Warm-cream feature card, shadowless`
- No kind and no applicability map: the source supplies no interaction evidence for this container, so neither is decided here.

### Color-Block Card

- Role: saturated color-block feature card top
- Primitive type: `card`
- Domain: Homepage
- Background: `#0061ef`
- Text: `#ffffff`
- Radius: `24px 24px 0 0`
- Token-set use: `Saturated color-block feature card (blue / gold #ffce00 variants)`
- Gold variant fill: `#ffce00`
- No kind and no applicability map: the source supplies no interaction evidence for this container, so neither is decided here.

### Subscription Plan Card (Selected)

- Role: selected plan on the subscriptions page
- Primitive type: `card`
- Domain: Subscriptions
- Background: `#ffce00`
- Text: `#000000`
- Border: `1px solid #ffce00`
- Radius: 12px
- Padding: 24px
- Token-set use: `Selected subscription plan card — gold fill; unselected is #ffffff with 1px #44423f border`
- Unselected record: `#ffffff` with `1px solid #44423f`
- No kind and no applicability map: the source supplies no interaction evidence for this container, so neither is decided here.

### Surface state contract

The nine rows below are the source's state contract. They describe surface- and module-level treatments, not per-control treatments. The source's own evidence note assigns a source to its voice samples, its brand narrative, and its personas, and assigns none to this state section; the treatments below are therefore a derived editorial implementation inference from the verified surfaces rather than measured per-control observations, and they are not Headspace-authored or a separately published UI specification.

| State | Treatment |
|---|---|
| **Empty (no saved content)** | Warm cream (`#f9f4f2`) canvas. Single charcoal (`#2d2c2b`) line in friendly tone, with one Headspace Blue CTA to explore the library. Illustration, not clutter. |
| **Empty (no results)** | Soft grey (`#4b4c4d`) single line explaining nothing matched, plus a path back. Calm, never an error-sounding "No data". |
| **Loading (content fetch)** | Skeleton cards on cream surface at final 24px-radius dimensions. Flat pulse — no shadow shimmer, consistent with the shadowless system. |
| **Loading (audio buffer)** | Inline spinner inside the circular play control; the charcoal/orange play button stays in place. |
| **Error (playback / network failed)** | Inline message in charcoal with a plain-language explanation and a gentle retry. Names what to do next, never a bare "Something went wrong". |
| **Error (form validation)** | Field-level message below the input in a warm tone; describes what's valid, not just "Required". |
| **Success (subscription started)** | Brief calm confirmation; next-step content surfaced immediately below. No celebratory emoji barrage — warmth, not hype. |
| **Skeleton** | Cream (`#f9f4f2`) blocks at final dimensions, 24px radius, flat pulse. |
| **Disabled** | Reduced opacity on surface and label together; Headspace Blue actions fade rather than turn grey to preserve brand read. |

These rows describe library, audio, form, and subscription treatments the source wrote at system level. They are not attached as visual treatments to the destination controls above.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

- Centered single-column hero anchored by a 64px Headspace Apercu headline
- Feature bands alternate warm cream (`#f9f4f2`) with saturated color-block cards (blue / gold) at 24px radius
- Theme selectors arranged as a row of outlined 8px-radius tiles beneath the hero
- Content chips ("Sleep", "Meditate") in a horizontal scrolling row in the smiley orange family
- Base unit: 8px. Scale restated from `tokens.spacing`: 4 / 8 / 12 / 16 / 24 / 40 / 64
- Shape restated from `tokens.rounded`: small 8 · medium 12 · large 24 · pill 32 · full 9999; play controls use `50%`

Whitespace the source names:

- **Calm over density**: generous vertical rhythm between bands; the cream base keeps the page breathing.
- **Color as structure**: sections separate by saturated color blocks and warm tints, not by borders or shadows.
- **Pill rhythm**: the repeated 32px-radius pill and 24px-radius card create a soft, consistent cadence.

Reading scale as calm over density, reading bands as color-as-structure, and reading the 32px / 24px repeat as pill rhythm, are derived editorial implementation inferences from the verified surfaces; they are not Headspace-authored or a separately published UI specification.

Responsive behavior. The source's live inspection was run as a desktop computed-style pass, and its own evidence note attributes token-level claims to that inspection; the breakpoints, collapsing strategy, image behavior, and the source's "comfortable" / "unmistakable targets" reading of the recorded sizes are stated by the source at system level rather than measured across viewports, so they are a derived editorial implementation inference from the verified surfaces and are not Headspace-authored or a separately published UI specification.

| Name | Width | Key Changes |
|---|---|---|
| Mobile | <640px | Single column, hero headline compresses, chips scroll horizontally |
| Tablet | 640-1024px | Moderate padding, 2-up feature cards |
| Desktop | 1024-1440px | Full layout, centered hero, multi-column color-block bands |

Touch targets the source records: buttons at 48px height (hero CTAs 62px) with full pill geometry; content chips at 34px height with 12px horizontal padding; circular play controls at 48px diameter.

Collapsing strategy, as the source states it:

- Hero: 64px Headspace Apercu headline scales down on mobile, weight 700 maintained
- Content chip row: horizontal scroll on narrow viewports
- Color-block feature bands: multi-column → stacked single column
- Cream / color-block sections maintain full-width treatment

Image behavior: illustration and animation assets (the smiley emotion system) carry no shadow at any size; cards maintain 24px radius across breakpoints; color-block card tops keep the asymmetric `24px 24px 0 0` radius. The Desktop row keeps the source body's `1024-1440px` range.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The source characterizes Headspace's voice as warm, plain-spoken, and quietly encouraging — a friend who happens to be a clinician, never a wellness brand shouting affirmations. The signature line "Be kind to your mind" sets the register: gentle, human, second-person, zero hype. The 2024 rebrand explicitly aimed to "destigmatise seeking care by making talking about mental health feel approachable and normalised," and the copy reflects that — it names hard things (stress, anxiety, sleep, depression) plainly and offers a low-pressure next step. That characterization, that register reading, and the tone table below are a derived editorial implementation inference from the verified surfaces; they are not Headspace-authored or a separately published UI specification. The quoted lines themselves are live surface copy or attributed rebrand coverage.

| Context | Tone |
|---|---|
| Hero headlines | Warm, declarative, human. "Be kind to your mind." Never clinical, never hype. |
| Feature descriptions | Benefit-first, calm. "Live a healthier, happier, more well-rested life in just a few minutes a day." |
| CTAs | Low-pressure invitations. "Try for free", "Get started", "Learn more". |
| Content labels | Plain and friendly. "Sleep", "Meditate", "Move", "Focus", "Wake Up". |
| Care / clinical copy | Approachable but credible. Names anxiety and depression directly to normalise them. |

**Voice samples (verbatim from live surfaces):**

- "Be kind to your mind" — subscriptions hero headline (the brand's core line).
- "Live a healthier, happier, more well-rested life in just a few minutes a day. Get the science-backed mental health app for every moment." — homepage meta description.
- "The mental health app for every moment" — homepage section headline (category-expansion framing).

Further published strings the source records on the inspected surfaces, kept byte-exact:

- "Try for free"
- "Start your free trial"
- "Try for $0"
- "Check your coverage"
- "Get started"
- "Learn more"
- "Chat with Ebb"
- "What kind of headspace"
- "Guided meditations"
- "Sleep resources"
- "Stress less" / "Sleep soundly" / "Manage anxiety"
- "Sleep", "Meditate", "Move", "Focus", "Wake Up"
- "Meditation", "Sleep", "Mindfulness", "Online therapy"
- "We built on the foundation of the brand to evolve it, not re-invent it."
- "from better sleep, to everyday stress, to supporting members with care for more complex issues like anxiety and depression"
- "from stress, sadness, contentment, and every mood in between."
- "flex from playful to clinical."
- "dreary sea of blues and greys."
- "destigmatise seeking care by making talking about mental health feel approachable and normalised"
- "simplify complex concepts"

**Forbidden register**: clinical coldness, fear-based health urgency, toxic-positivity affirmations, undefined jargon, exclamation-heavy hype. The voice stays calm even when the topic is heavy. The source states that forbidden list; reading it as a current-surface register contract is a derived editorial implementation inference from the verified surfaces; it is not Headspace-authored or a separately published UI specification.

Reproduce the strings above byte-exact rather than translating or re-casing them.

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

- **Exact easing curves.** Three easing roles and their uses are established; the curve values are omitted because they are not traceable to Headspace-computed samples. Promote a curve for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed.
- **The disabled opacity value.** The system states reduced opacity on surface and label together, and Headspace Blue actions that fade rather than turning grey, without naming the opacity.
- **The skeleton pulse.** The system declares cream blocks at final dimensions with a 24px radius and a flat pulse, without naming the pulse's duration or opacity range.
- **Italic Studio as a token source.** `https://italic-studio.com/projects/headspace-rebrand/` is a named brand-partner source for the 2024 typeface and illustration system. It does not contribute computed interface tokens.
