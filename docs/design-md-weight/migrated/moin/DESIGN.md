# Moin Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Moin (모인) is a Korean cross-border money-transfer fintech. This contract covers the first-party product homepage the source inspected for tokens on 2026-07-02: `https://www.themoin.com/ko`. Catalog homepage identity is that same URL. Catalog `primary_color` is `#0082ff`. The YAML token set is `live-extract`. The official engineering blog at `https://themoin.github.io/` is a named brand-owned source; it confirms company identity (MOIN Inc.) and runs a generic Montserrat blog theme, so product tokens below are sourced from `themoin.com`, not the blog. Every value stays attached to the surface that established it. Treating `https://www.themoin.com/ko` as this contract's token surface, keeping values attached to the surface that established them, and treating the engineering blog as a named source that does not supply interface tokens, are derived editorial implementation inferences from the verified surfaces; they are not Moin-authored or a separately published UI specification.

The captured homepage is a pure-white canvas (`#ffffff`) broken up by soft near-white surfaces (`#f7f7f8` and the cooler `#f3f5f8`). Text sits in a deep near-black navy (`#1a1b22`) for headings and a soft charcoal (`#333333`) for body copy — never a harsh pure black for the running text. The system's single signal color is a bright azure (`#0082ff`), recorded on the currency-exchange CTA, the section eyebrow labels, and the active amount. A slightly deeper blue (`#007bff`) is recorded on the top-nav send button. Everything is set in **Spoqa Han Sans** (with `Spoqa Han Sans JP` as the CJK fallback), Bold (weight 700) for hero and section headings and weight 400 for body. The scale is 40px hero H1 (`#1a1b22`), 32px large section titles, 24px feature headings, and 16px body. The currency amount renders at 32px / 700 and flips from `#242424` to `#0082ff` when it becomes the active value. Depth is near-flat: separation comes from tinted surfaces and thin `#efefef` hairlines, and the only recurring drop shadow is a single soft `rgba(0, 0, 0, 0.05) 0px 4px 15px` on cards. Geometry: a **6px** corner radius is the workhorse across buttons and inputs, with 8px on carousel controls and 16px on content cards. The hex values, the family, the sizes, the active-amount flip, the card shadow, and the three radii are the source's record. Calling that layer a trustworthy utility rather than a flashy consumer app, reading azure as "the money moves here", reading the navy as warm and trustworthy rather than stark, reading the scale as compact and pragmatic for a product that shows real numbers, fees, and exchange rates rather than oversized marketing poetry, and reading the result as a fast, mobile-native, engineered-feeling remittance tool, are derived editorial implementation inferences from the verified surfaces; they are not Moin-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. Moin (모인) is a Korean fintech built around a single, concrete frustration: sending money across borders from Korea was slow, opaque, and expensive, buried in bank fees and hidden exchange-rate margins. Moin, operated by **Moin Inc.**, positioned itself as a licensed small-sum overseas-remittance provider under Korea's amended Foreign Exchange Transactions Act — one of the early independent players allowed to move money internationally outside the incumbent banks. Its founding premise, echoed by the homepage line *"Complex international remittances, now made simple"*, was to strip a historically bank-controlled process down to something a person could finish in about five minutes on their phone. The product matured into a direct, lower-fee remittance service that competes on the two things that actually matter to someone wiring money home — how fast it arrives and how much it costs — surfacing both plainly rather than hiding them behind an application funnel. The brand positions itself as the sender's advocate inside a system historically tilted toward banks and their margins. What Moin refuses, visible in its design: the heavy, intimidating chrome of legacy banking (no shadow-stacked cards, no institutional navy-and-gold ornamentation) and the dark-pattern urgency of aggressive financial marketing. What it embraces: a flat, fast, mobile-native interface; a single trustworthy azure; a compact, honest type scale; and a currency widget that puts the real number — the amount and the fee — front and center. Moin Inc., the licensed small-sum overseas-remittance provider status, Korea's amended Foreign Exchange Transactions Act, the early-independent-player sentence, the founding-premise line, the five-minutes-on-their-phone sentence, the speed-and-cost competition, the sender's-advocate sentence, and that closing refuse-and-embrace paragraph are the source's own narrative facts; they do not by themselves supply interface tokens. The Philosophy Layer (sections 10–15) states, verbatim: "These are widely documented public facts about the company; specific corporate details beyond the homepage were not directly quoted from a verified Moin statement in this turn." Homepage lines ("Complex international remittances, now made simple", "Complex international remittances, now made simple with MOIN!") are verbatim from the live homepage. Classifying that founding-and-licensing narrative as context that does not by itself supply interface tokens, keeping that philosophy-layer authority bound on the corporate details, and the refuse-and-embrace reading, are derived editorial implementation inferences from the verified surfaces; they are not Moin-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product's primary tasks, and classifying them as surface-or-control outcomes rather than fictional biographies, is a derived editorial implementation inference from the verified surfaces; it is not Moin-authored or a separately published UI specification. Each names a surface or control the source records. They do not come from the source's persona section.

- Send money from the currency-exchange widget on `https://www.themoin.com/ko` (amount input + azure "Send money" CTA).
- Use the top-nav "Send money" button.
- Browse reviews with "More reviews" and the review carousel arrows.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source labels its three named figures as fictional archetypes informed by publicly observable Moin user segments, not individual people, so their names, ages, cities, biographies, motivations, and affiliation classifications are dropped rather than promoted. What the source independently records, in its own wording, is the audience copy speaks to: migrant workers, students, and anyone sending money home. The source's persona-section header names the same grouping as publicly observable Moin user segments (migrant workers, international students, and Koreans sending money abroad); that header wording is kept, and the three named biographies are not. Reading those source-named groups as this product's audience, dropping the archetype biographies rather than promoting them, and keeping them out of `primary-tasks`, is a derived editorial implementation inference from the verified surfaces; it is not Moin-authored or a separately published UI specification.

### Distinctive traits

The list restates the source's Key Characteristics. The values are recorded; classifying the list as that restatement, and the groupings and the readings inside them, are a derived editorial implementation inference from the verified surfaces — they are not Moin-authored or a separately published UI specification.

- Single azure signal color (`#0082ff`) reserved for the money action — CTA, eyebrows, active amount
- A slightly deeper blue (`#007bff`) on the top-nav send button — a second, near-identical blue
- Spoqa Han Sans throughout — Bold (700) for headings, 400 for body; open-source hangul-first
- Compact, pragmatic type scale: 40px hero, 32px / 24px sections, 16px body
- Near-black navy (`#1a1b22`) headings + charcoal (`#333333`) body instead of pure black
- Near-flat depth: one soft `rgba(0, 0, 0, 0.05)` card shadow; tint + `#efefef` hairlines do the separating
- 6px workhorse radius (buttons/inputs), 8px controls, 16px cards
- Cool neutral ladder (`#6b6c74` → `#818daa` → `#a9abb4`) for text hierarchy

### Principles

These five items are a derived editorial implementation inference from the verified surfaces; they are not Moin-authored or a separately published UI specification. The source states them in its own Principles section together with the UI implication it draws from each. The source's philosophy-layer note records that interpretive claims such as "the number is the product" and "flat and fast as a rejection of legacy banking chrome" are editorial readings connecting Moin's observed design to its positioning, not directly sourced Moin statements.

1. **The number is the product.** A remittance user is deciding based on amount received and fee paid. *UI implication:* give the currency amount the largest, boldest type on the page and light it azure when active — never bury the figure.
2. **Simple beats feature-rich.** Sending money should feel like five minutes, not a bank application. *UI implication:* keep the primary flow to one obvious azure CTA; resist adding competing calls to action.
3. **One action, one color.** Azure (`#0082ff`) means "move the money." *UI implication:* reserve the saturated azure exclusively for the send action and its accents so the next step is never ambiguous.
4. **Flat and fast.** Mobile-native clarity beats decorative depth. *UI implication:* separate with tint and `#efefef` hairlines; keep to the single soft card shadow.
5. **Trust through concreteness.** Fees, speed, and rates are stated plainly, not spun. *UI implication:* show real numbers and quantified savings; avoid vague superlatives in copy and UI labels.

### Application rules

The source states these eight as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not Moin-authored or a separately published UI specification.

- Set every text element in Spoqa Han Sans — Bold (700) for headings, 400 for body
- Reserve azure (`#0082ff`) for the money action — CTA, eyebrows, active amount
- Use near-black navy (`#1a1b22`) for headings and charcoal (`#333333`) for body text
- Keep the type scale compact — 40px hero, 32/24px sections, 16px body
- Separate sections with flat tint (`#f7f7f8` / `#f3f5f8`) and `#efefef` hairlines, not heavy shadow
- Use a 6px radius on buttons and inputs, 16px on cards
- Let the currency amount be the loudest element (32px / 700) and flip it to azure when active
- Keep depth to the single soft `rgba(0, 0, 0, 0.05)` card shadow

### Avoid

The source states these eight as its Don't list. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not Moin-authored or a separately published UI specification.

- Introduce a second saturated accent color — azure is the only signal hue
- Use pure black (`#000000`) for body text — reserve navy `#1a1b22` and charcoal `#333333`
- Stack heavy drop shadows for elevation — Moin is near-flat
- Oversize marketing headlines beyond the 40px hero — the scale is deliberately pragmatic
- Spread azure across decorative elements — it dilutes the "this is the action" signal
- Swap in a display typeface for headings — Spoqa Han Sans owns every role
- Use sharp 0px corners on interactive controls — 6px is the baseline
- Use faint grey (`#a9abb4`) for primary content — it is for disabled/placeholder only

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Role names below are the source's own labels. Pairing each hex to the token-set path named beside it, taking those role names from the source's own labels, calling `#0082ff` the single saturated hue and money-action signal, calling `#007bff` a second near-identical blue rather than a conflict, and keeping catalog identity `primary_color` `#0082ff` on the same azure as `tokens.colors.primary` rather than as a second color, are derived editorial implementation inferences from the verified surfaces; they are not Moin-authored or a separately published UI specification. The hex values and recorded uses are the source's own.

#### Primary

- **Moin Azure** (`#0082ff`): The primary brand and action color. Backs the currency-exchange "Send money" CTA, colors the eyebrow labels (Speed / Easy to start / Lower fees), and becomes the active amount value in the input. The system's single saturated hue. Token-set path `tokens.colors.primary`. Catalog identity `primary_color` is `#0082ff`.
- **Send Blue** (`#007bff`): A slightly deeper companion blue used on the top-navigation "Send money" button and its border — near-identical to the azure but rendered as a distinct token in the header chrome. Token-set path `tokens.colors.primary-alt`.

#### Ink & Text

- **Ink Navy** (`#1a1b22`): Primary heading color for the hero H1 and feature section H2s. Token-set path `tokens.colors.ink`.
- **Body Charcoal** (`#333333`): The document default text color and the fill of the dark "More reviews" button. Token-set path `tokens.colors.body`.
- **Dark** (`#242424`): The resting color of the large currency amount value before it becomes active. Token-set path `tokens.colors.dark`.
- **Muted** (`#6b6c74`): Secondary text, supporting copy. Token-set path `tokens.colors.muted`.
- **Muted Slate** (`#818daa`): A cool blue-grey for tertiary labels and metadata. Token-set path `tokens.colors.muted-slate`.
- **Grey** (`#555555`): Icon color for the review carousel prev/next arrows. Token-set path `tokens.colors.grey`.
- **Faint** (`#a9abb4`): Lowest-emphasis text, placeholders, disabled labels. Token-set path `tokens.colors.faint`.

#### Surface & Neutral

- **Pure White** (`#ffffff`): Page background, card surfaces, text on azure/dark. Token-set path `tokens.colors.canvas`. Also `tokens.colors.on-primary` (`#ffffff`) for text/icon color on azure and dark fills.
- **Surface** (`#f7f7f8`): Warm near-white tinted surface for content and review cards. Token-set path `tokens.colors.surface`.
- **Surface Cool** (`#f3f5f8`): A cooler near-white for alternating feature blocks. Token-set path `tokens.colors.surface-cool`.
- **Hairline** (`#efefef`): The dominant border color — thin dividers and card outlines in the near-shadowless system. Token-set path `tokens.colors.hairline`.
- **Border** (`#e0e0e0`): Slightly stronger border for interactive controls (carousel arrows). Token-set path `tokens.colors.border`.
- **Border Cool** (`#e9ecef`): A cool-toned hairline used on cool surfaces. Token-set path `tokens.colors.border-cool`.

The 32px section title "Why so many users choose MOIN" computes `#333333`, not Ink Navy. Ink Navy `#1a1b22` is the hero H1 and the feature H2s ("Fast, direct remittances you can trust", "Done in five minutes, right in the app"). Those two 32px uses — section title and currency amount — share a size and do not share a color. Keeping the section title on Body Charcoal rather than rewriting it as Ink Navy, and keeping the two 32px uses unmerged, is a derived editorial implementation inference from the verified surfaces; it is not Moin-authored or a separately published UI specification.

### Spacing

Token-set path `tokens.spacing`, unitless steps as the YAML recorded them: `xs: 4` · `sm: 8` · `md: 12` · `base: 16` · `lg: 24` · `xl: 48` · `section: 64`.

The source names a base unit of 8px and the same scale in px: 4px, 8px, 12px, 16px, 24px, 48px, 64px. Notable recorded paddings: buttons pad at 8px 16px (exchange CTA) up to 14px 48px (dark "More reviews" pill). `tokens.spacing.md: 12` is not a radius step. `tokens.spacing.base: 16` is not `tokens.rounded.lg: 16` and not the 16px body size. `tokens.spacing.xl: 48` is not the carousel-control height 48px. `tokens.spacing.lg: 24` is not the 24px feature-heading size. Keeping each number on its own key path, rather than treating a shared numeral as the same token, is a derived editorial implementation inference from the verified surfaces; it is not Moin-authored or a separately published UI specification.

### Shape

Token-set path `tokens.rounded`, unitless steps as the YAML recorded them: `sm: 6` · `md: 8` · `lg: 16` · `xl: 20` · `full: 9999`.

- Small (`6`): buttons, inputs — the workhorse radius
- Medium (`8`): carousel controls, small containers
- Large (`16`): content and feature cards
- Extra (`20`): larger rounded containers
- Full (`9999` / 50%): circular avatars and icon chips

`tokens.rounded.sm: 6` is the YAML step; the exchange CTA, nav send, dark secondary, and amount field record `6px` on those controls. `tokens.rounded.md: 8` is not `tokens.spacing.sm: 8`. `tokens.rounded.lg: 16` is not `tokens.spacing.base: 16`. `tokens.rounded.xl: 20` is a YAML step with the source's "larger rounded containers" use; it is not a harvested control radius in the token set. `tokens.rounded.full: 9999` stays a step; the source writes `9999px / 50%` for circular avatars and icon chips. Keeping those local radii on their components, and keeping each YAML step on its own key path, is a derived editorial implementation inference from the verified surfaces; it is not Moin-authored or a separately published UI specification.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow | Page background, most surfaces, inline text |
| Tint (Level 1) | `#f7f7f8` / `#f3f5f8` background shift | Card/section separation without elevation |
| Hairline (Level 2) | 1px solid `#efefef` (or cool `#e9ecef`) border | Card outlines, dividers |
| Card (Level 3) | `rgba(0, 0, 0, 0.05) 0px 4px 15px 0px` | Soft lift on content/review cards |
| Elevated (Level 4) | `rgba(36, 36, 36, 0.3) 0px 10px 20px 0px` | Rare emphasis on floating/hover elements |

Token-set path `tokens.shadow.card`: `rgba(0, 0, 0, 0.05) 0px 4px 15px 0px` (YAML also writes `rgba(0,0,0,0.05) 0px 4px 15px` on the tinted card). Token-set path `tokens.shadow.elevated`: `rgba(36, 36, 36, 0.3) 0px 10px 20px 0px`.

Live inspection found `box-shadow: none` across the hero, nav, and most sections, with a single soft `rgba(0, 0, 0, 0.05) 0px 4px 15px` recurring on cards and one deeper `rgba(36, 36, 36, 0.3)` reserved for emphasis. Depth is communicated primarily through flat tinted surfaces (`#f7f7f8`, `#f3f5f8`) and thin `#efefef` hairlines. Reading that stack as a near-flat system that keeps the remittance UI feeling fast, clean, and mobile-native rather than heavy, and reading that when the system needs to draw attention it reaches for azure `#0082ff` not elevation, are derived editorial implementation inferences from the verified surfaces; they are not Moin-authored or a separately published UI specification.

### Motion

The source attributes its token-level claims to a live inspection of computed color, type, spacing, radius, and shadow on `https://www.themoin.com/ko`. The motion contract below sits outside that attribution: the source's own evidence note assigns a source to its voice samples, its brand narrative, and its personas, and assigns none to this motion section. The durations, easing roles, and motion rules below are therefore a derived editorial implementation inference from the verified surfaces; they are not Moin-authored or a separately published UI specification.

Durations:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, button press, focus, input value color flip |
| `motion-standard` | 200ms | Card/section reveal, carousel slide, dropdown |
| `motion-slow` | 320ms | Page-level transitions, hero reveal |

Easing roles — three roles with declared uses. The specific curve values the source lists (`cubic-bezier(0.2, 0.6, 0.25, 1)`, `cubic-bezier(0.4, 0.0, 1, 1)`, `cubic-bezier(0.25, 0.1, 0.25, 1)`) are not traceable to Moin-computed samples, so the curves are omitted here and only the roles and their uses are kept. `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` is byte-identical to the example table at `spec/omd-v0.1.md`.

| Token | Use |
|---|---|
| `ease-enter` | Arriving — cards, sheets, carousel items |
| `ease-exit` | Dismissals |
| `ease-standard` | Two-way transitions |

An exact curve may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework or vendor document — does not satisfy that condition.

Motion rules, as the source states them:

- Motion is functional and quiet, consistent with the flat, fast aesthetic.
- The currency amount transitions its color to azure `#0082ff` on becoming active at `motion-fast`.
- Review cards slide within the carousel at `motion-standard / ease-enter`.
- Buttons respond with a subtle opacity/scale shift on press.
- No bounce or spring — a money-transfer product signals steadiness, not playfulness. That spring stance is a derived editorial implementation inference from the verified surfaces; it is not Moin-authored or a separately published UI specification.
- Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and the product remains fully functional.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | The inspected homepage and the engineering blog state the product and the operator relationship. They do not publish a universal current typography token or a separately issued type specimen. That "no published type token" reading is a derived editorial implementation inference from the verified surfaces; it is not Moin-authored or a separately published UI specification. |
| Live computed surface-use | The captured homepage computes visible text as Spoqa Han Sans. Body stack: `"Spoqa Han Sans", "Spoqa Han Sans JP", Helvetica, Arial, sans-serif`. |
| Official distributed asset | No Moin-exclusive distributed type family was verified. |
| Declared-only | Fallback faces `Spoqa Han Sans JP`, then `Helvetica`, `Arial`, `sans-serif`, are declared in the stack. They are not presented as the brand face. |
| License | This record does not establish a Moin font-license notice for Spoqa Han Sans. Spoqa Han Sans is an upstream open-source hangul face, not a Moin-owned brand asset; that classification is a derived editorial implementation inference from the verified surfaces, and it is not Moin-authored or a separately published UI specification. |
| Outside these captures | Typography on `https://themoin.github.io/` is a generic Montserrat blog theme and is not a product-token source. |

### Family

- **Sans:** `Spoqa Han Sans` — used for every text element: hero, headings, body, buttons, nav. Token-set path `tokens.typography.family.sans`.
- **Fallback:** `Spoqa Han Sans JP`, then `Helvetica`, `Arial`, `sans-serif`. Token-set path `tokens.typography.family.fallback`.

A fallback member of a stack is never presented as the brand face. Do not replace Spoqa Han Sans with a system substitute. That fallback prohibition is a derived editorial implementation inference from the verified surfaces; it is not Moin-authored or a separately published UI specification.

### Type roles

YAML sizes stay as the integers the token set recorded; the §3 table's `px` / `rem` spellings sit beside them. YAML line heights stay unitless ratios (A1a). Token-set `use` strings are kept; where the §3 table or a live-inspect line is the longer writing of the same role, that longer writing is kept beside the YAML use. Keeping YAML integers beside the §3 px/rem spellings, keeping unitless line heights as ratios, attaching each size to the surface element that established it, and taking the longer of two writings for the same role, are derived editorial implementation inferences from the verified surfaces; they are not Moin-authored or a separately published UI specification.

| Role | Font | Size | Weight | Line height | Token-set use | Surface |
|---|---|---|---:|---:|---|---|
| Display Hero | Spoqa Han Sans | 40 (`40px` / `2.50rem`) | 700 | 1.2 (~1.2) | Hero H1 headline, Spoqa Han Sans Bold. §3 complete: Hero H1, `#1a1b22`. Live-inspect complete: "Complex international remittances, now made simple with MOIN!" | `themoin.com/ko` hero H1 |
| Section Large | Spoqa Han Sans | 32 (`32px` / `2.00rem`) | 700 | — | Large section titles + currency amount value. §3 complete: "Why so many users choose MOIN" + currency amount value | `themoin.com/ko` section H2 `#333333`; amount on the exchange widget |
| Feature Heading | Spoqa Han Sans | 24 (`24px` / `1.50rem`) | 700 | — | Feature section headings. §3 complete: "Fast, direct remittances you can trust", `#1a1b22`. Live-inspect also: "Done in five minutes, right in the app" | `themoin.com/ko` feature H2 |
| Eyebrow | Spoqa Han Sans | 16 (`16px` / `1.00rem`) | 700 | — | Blue accent eyebrow labels (Speed, Lower fees). §3 / §4 complete: Speed / Easy to start / Lower fees, `#0082ff` | `themoin.com/ko` feature H3 |
| Body | Spoqa Han Sans | 16 (`16px` / `1.00rem`) | 400 | 1.5 | Standard body + UI text. §3 complete: Standard reading and UI text, `#333333` | `themoin.com/ko` body |
| Button | Spoqa Han Sans | 16 (`16px` / `1.00rem`) | 400–700 | — | Primary / dark button label. §3 complete: CTA labels (700 on dark/nav, 400 on exchange CTA) | exchange CTA 400; nav send and dark secondary 700 |

YAML typography keys for those rows: `tokens.typography.display-hero` (40 / 700 / 1.2), `tokens.typography.section-lg` (32 / 700), `tokens.typography.section` (24 / 700), `tokens.typography.eyebrow` (16 / 700), `tokens.typography.body` (16 / 400 / 1.5), `tokens.typography.button` (16 / 700).

The 40px Display Hero is the `themoin.com/ko` hero H1 in `#1a1b22`. The 32px Section Large size is shared by the section title "Why so many users choose MOIN" (color `#333333`) and the currency amount value (resting `#242424`, active `#0082ff` on the amount field). Those two 32px uses are not one color. The 24px Feature Heading is `#1a1b22`. The 16px Body size is not `tokens.spacing.base: 16` and not the Eyebrow role's 16 / 700. The Button role's YAML weight 700 is the dark/nav writing; the exchange CTA's `16px / 400` is that control's font, not this role rewritten as 400. Reading those sizes as the roles and surfaces named beside them, rather than as shared numerals across spacing, is a derived editorial implementation inference from the verified surfaces; it is not Moin-authored or a separately published UI specification.

### Typography rules

The source states these four as its typography principles. Reading the measured metrics as those principles is a derived editorial implementation inference from the verified surfaces; it is not Moin-authored or a separately published UI specification.

- **One family, weight-driven hierarchy**: Spoqa Han Sans does every job; contrast comes from weight (700 vs 400) and size, not from swapping typefaces.
- **Compact, pragmatic scale**: the hero tops out at 40px, sections at 32/24px — restrained sizing for a product that shows real fees, rates, and numbers.
- **Bold headings, plain body**: 700 carries every headline; 400 carries every paragraph.
- **The number is the loudest element**: the currency amount runs at 32px / 700 and switches to azure `#0082ff` when active — the typographic climax of the exchange widget.

### Assets

- Catalog identity pointer: `logo.type: favicon`, `logo.slug: https://www.google.com/s2/favicons?domain=themoin.com&sz=128`. That slug is an identity pointer, not a Moin-hosted brand file. The source's own sibling excludes that service from the KR brand-owned count, so the URL is recorded in the provenance ledger and is not presented here as a Moin brand asset. Reading it as an identity pointer rather than hosted brand artwork is a derived editorial implementation inference from the verified surfaces; it is not Moin-authored or a separately published UI specification.
- App screenshots and illustrations sit on flat tinted surfaces, carrying at most the soft `rgba(0, 0, 0, 0.05)` card shadow. Cards maintain 16px radius across breakpoints.

<!-- design-md:section components-states -->
## 4. Components & States

### How to read this section

The source declares each token-set component with a primitive type (`button`, `input`, `card`, `badge`) and a value set. Those types are preserved per component. Navigation is recorded in source §4 only and is not in the token set, so it has no primitive type. Applicability below is judged by each control's role in this product, not by whether a visual treatment for that state was recorded; where the source supplies no treatment for an applicable state, the value is omitted and the state stays applicable. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow the control's product role, not its primitive kind. `not-applicable` is used only where the control's role makes the state meaningless — a destination control, a carousel arrow, or a display surface that commits no operation in place — and the reason given is always that semantic one. A generic Focus capture is not `focus-visible` treatment evidence; the amount field's observed active value color is recorded as that observed active state, and it is not a color assigned to the `focus-visible` row. Where the source supplies no interaction evidence for a row at all, its kind and applicability map are omitted rather than decided. Every kind verdict, every applicability verdict, and the reason given for either, treating a generic Focus capture as not `focus-visible` treatment evidence, and recording the amount field's observed active value color as that observed active state rather than as a color on the `focus-visible` row, are derived editorial implementation inferences from the verified surfaces; they are not Moin-authored or a separately published UI specification. This is not a claim that state coverage is finished.

### Exchange CTA (Primary)

- Role: The currency-exchange "Send money" CTA — the core product action
- Primitive type: `button` · Kind: interactive
- Background: `#0082ff`
- Text: `#ffffff`
- Radius: 6px
- Padding: 8px 16px
- Height: 50px
- Border: 1px solid `rgba(0,50,100,0.1)` / YAML `1px solid rgba(0,50,100,0.1)`
- Font: 16px Spoqa Han Sans weight 400 / YAML `16px / 400 Spoqa Han Sans`
- Token-set use: `Currency-exchange 'Send money' CTA — the core product action`
- Token-set path: `tokens.components.button-primary`
- The 6px radius is `tokens.components.button-primary.radius` and `tokens.rounded.sm: 6`. The `8px 16px` padding is this control's padding; it is not `tokens.spacing.sm: 8` or `tokens.spacing.base: 16` written as this control. The 50px height is this control's height. The 16px / 400 font is this control's font; it is not `tokens.typography.button` weight 700 written as this control. Reading those figures as this control's geometry rather than a spacing or type-role step is a derived editorial implementation inference from the verified surfaces; it is not Moin-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web send CTA; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable send CTA; visual treatment omitted |
| disabled | applicable | A send CTA can be gated; the system says azure actions fade rather than turn grey, with no opacity value given |
| loading | applicable | Core product action that commits a transfer in place; Loading (transfer submitting) is a separate source-state record |
| error | applicable | Core product action that can fail in place; Error (rate/transfer failed) is a separate source-state record |
| success | applicable | Core product action that can complete in place; Success (transfer submitted) is a separate source-state record |

### Nav Send (Header)

- Role: Top-navigation "Send money" button
- Primitive type: `button` · Kind: interactive
- Background: `#007bff`
- Text: `#ffffff`
- Radius: 6px
- Padding: 8px 16px
- Height: 40px
- Border: 1px solid `#007bff` / YAML `1px solid #007bff`
- Font: 16px Spoqa Han Sans weight 700 / YAML `16px / 700 Spoqa Han Sans`
- Token-set use: `Top-nav 'Send money' button`
- Token-set path: `tokens.components.button-nav`
- The 6px radius is this control's radius; it is not Exchange CTA's 6px written as this control. The 40px height is this control's height; it is not the hero 40px. The 16px / 700 font is this control's font. Reading those figures as this control's geometry rather than Exchange CTA's 6px or the Display Hero 40px is a derived editorial implementation inference from the verified surfaces; it is not Moin-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web destination CTA; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable destination CTA; visual treatment omitted |
| disabled | applicable | A header send control can be gated; visual treatment omitted |
| loading | not-applicable | Top-nav destination "Send money"; it commits no transfer in place |
| error | not-applicable | Destination header control; it commits no operation in place |
| success | not-applicable | Destination header control; it commits no operation in place |

### Dark Secondary

- Role: Lower-emphasis actions such as "More reviews"
- Primitive type: `button` · Kind: interactive
- Background: `#333333`
- Text: `#ffffff`
- Radius: 6px
- Padding: 14px 48px
- Height: 52px
- Font: 16px Spoqa Han Sans weight 700 / YAML `16px / 700 Spoqa Han Sans`
- Token-set use: `Secondary 'More reviews' action`
- Token-set path: `tokens.components.button-dark`
- The 6px radius is this control's radius. The `14px 48px` padding is this control's padding; the 48px in that padding is not `tokens.spacing.xl: 48` and not the carousel height 48px. The 52px height is this control's height. Reading those figures as this control's geometry rather than a spacing step is a derived editorial implementation inference from the verified surfaces; it is not Moin-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web destination control; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable destination control; visual treatment omitted |
| disabled | applicable | A reviews control can be gated; visual treatment omitted |
| loading | not-applicable | "More reviews" is a destination / reveal control; it commits no operation in place |
| error | not-applicable | Destination / reveal control; it commits no operation in place |
| success | not-applicable | Destination / reveal control; it commits no operation in place |

### Carousel Control

- Role: Review carousel previous / next arrows
- Primitive type: `button` · Kind: interactive
- Background: `#ffffff`
- Text: `#555555`
- Border: 1px solid `#e0e0e0` / YAML `1px solid #e0e0e0`
- Radius: 8px
- Height: 48px
- Token-set use: `Review carousel prev / next arrow`
- Token-set path: `tokens.components.button-carousel`
- The 8px radius is `tokens.components.button-carousel.radius` and `tokens.rounded.md: 8`. The 48px height is this control's height; it is not `tokens.spacing.xl: 48`. YAML records no padding, font, or width key on this row. Reading those figures as this control's geometry rather than a spacing step is a derived editorial implementation inference from the verified surfaces; it is not Moin-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web arrow; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable arrow; visual treatment omitted |
| disabled | applicable | A prev/next arrow can be gated at the ends of the carousel; visual treatment omitted |
| loading | not-applicable | Carousel arrow; it commits no operation in place |
| error | not-applicable | Carousel arrow; it commits no operation in place |
| success | not-applicable | Carousel arrow; it commits no operation in place |

### Currency Amount

- Role: The send/receive amount field on the exchange widget
- Primitive type: `input` · Kind: interactive
- Background: `#ffffff`
- Text: `#242424`
- Radius: 6px
- Font: 32px Spoqa Han Sans weight 700 / YAML `32px / 700 Spoqa Han Sans`
- Active: value color shifts to `#0082ff`
- Token-set use: `Currency amount field on the exchange widget`
- Token-set path: `tokens.components.input-amount`
- Token-set states: `active value turns #0082ff`
- Observed: active value turns `#0082ff`. That observed active value color is not a `focus-visible` treatment.
- YAML records no height, padding, or border key on this row. The 6px radius is this field's radius. The 32px / 700 font is this field's font; it is not the Section Large title's 32px written as this field, and the title's `#333333` is not this field's color. Recording the observed active value as that observed active state rather than as `focus-visible` treatment, and reading the 32px as this field's size rather than the section-title 32px, are derived editorial implementation inferences from the verified surfaces; they are not Moin-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable field; visual treatment omitted |
| disabled | applicable | An amount field can be gated; visual treatment omitted |
| loading | applicable | Rate fetch runs inside the exchange widget; Loading (rate fetch) is a separate source-state record |
| error | applicable | Form field; Error (form validation) is a separate source-state record |
| success | not-applicable | Value field; it reports the amount, not transfer outcome |

### Tinted Surface Card

- Role: Content and review cards
- Primitive type: `card`
- Background: `#f7f7f8`
- Text: `#1a1b22`
- Radius: 16px
- Shadow: `rgba(0, 0, 0, 0.05) 0px 4px 15px 0px` / YAML `rgba(0,0,0,0.05) 0px 4px 15px`
- Token-set use: `Tinted content / review card`
- Token-set path: `tokens.components.card-surface`
- The 16px radius is `tokens.components.card-surface.radius` and `tokens.rounded.lg: 16`. It is not `tokens.spacing.base: 16`. Reading that 16px as this card's radius rather than as a spacing step is a derived editorial implementation inference from the verified surfaces; it is not Moin-authored or a separately published UI specification. Kind and applicability map omitted — the source supplies no interaction evidence for the row (C4).

### Cool Feature Block

- Role: Cool-tinted feature section block
- Primitive type: `card`
- Background: `#f3f5f8`
- Text: `#1a1b22`
- Border: 1px solid `#efefef` / YAML `1px solid #efefef`
- Radius: 16px
- Token-set use: `Cool-tinted feature block`
- Token-set path: `tokens.components.card-cool`
- YAML records no shadow key on this row. The 16px radius is this block's radius; it is not Tinted Surface Card's 16px written as this block. Reading that 16px as this block's radius rather than as Tinted Surface Card's 16px written here is a derived editorial implementation inference from the verified surfaces; it is not Moin-authored or a separately published UI specification. Kind and applicability map omitted — the source supplies no interaction evidence for the row (C4).

### Azure Eyebrow

- Role: Accent eyebrow label above feature headings ("Speed", "Easy to start", "Lower fees")
- Primitive type: `badge`
- Kind: non-interactive — an accent label, not a control
- Text: `#0082ff`
- Font: 16px Spoqa Han Sans weight 700 / YAML `16px / 700 Spoqa Han Sans`
- Token-set use: `Blue accent eyebrow above feature headings (Speed, Easy to start, Lower fees)`
- Token-set path: `tokens.components.eyebrow-label`
- YAML records no background, radius, padding, or height key on this row. The 16px / 700 font is this label's font; it is not `tokens.spacing.base: 16` and not the Body type-role 16 / 400 written as this label. Reading that 16px / 700 as this label's font rather than as a spacing step or as the Body type-role is a derived editorial implementation inference from the verified surfaces; it is not Moin-authored or a separately published UI specification.

### Top Navigation

- Role: Top horizontal navigation
- Not in the token set
- Background: `#ffffff`
- Text: `#333333`
- Font: 16px Spoqa Han Sans
- Right-aligned azure/`#007bff` "Send money" CTA at 6px radius
- Use: Top horizontal navigation
- The "Send money" CTA on this bar is the Nav Send button above. Identifying that bar CTA as the Nav Send button rather than as a second control is a derived editorial implementation inference from the verified surfaces; it is not Moin-authored or a separately published UI specification. Kind and applicability map omitted — the source supplies no primitive type and no interaction evidence for the bar as a whole (C4).

### State record

The source's state contract, preserved with its values. The source's own evidence note assigns a source to its voice samples, its brand narrative, and its personas, and assigns none to this state section; the treatments below are therefore a derived editorial implementation inference from the verified surfaces rather than measured per-control observations, and they are not Moin-authored or a separately published UI specification.

| State | Treatment |
|---|---|
| **Empty (no transfer history)** | White canvas. Single Ink Navy (`#1a1b22`) line explaining no transfers yet, with one azure `#0082ff` CTA to start a transfer. No illustration clutter. |
| **Empty (saved recipients, none yet)** | Muted (`#6b6c74`) single line: nothing saved yet, plus a path to add a recipient. Calm and honest. |
| **Loading (rate fetch)** | Inline azure activity within the exchange widget; the previous amount stays visible. Flat pulse consistent with the near-shadowless system. |
| **Loading (transfer submitting)** | Skeleton rows on `#f7f7f8` tinted surface at final dimensions, 16px radius — no heavy shimmer. |
| **Error (rate/transfer failed)** | Inline message in Ink Navy with a plain-language explanation and a retry. Never a bare generic error — states what to do next. |
| **Error (form validation)** | Field-level message below the input describing what is valid, not just "required"; input border tightens rather than shouting. |
| **Success (transfer submitted)** | Brief inline confirmation in calm tone with the received amount and arrival estimate linked immediately below. No celebratory emoji. |
| **Skeleton** | `#f7f7f8` blocks at final dimensions, 16px radius, flat pulse. |
| **Disabled** | Faint (`#a9abb4`) text on reduced-opacity surface; azure actions fade rather than turn grey, preserving the brand read. |

These rows describe transfer, recipient, rate-fetch, and form treatments the source wrote at system level. They are not attached as captured visual treatments to the destination header and carousel controls above. That non-attachment is a derived editorial implementation inference from the verified surfaces; it is not Moin-authored or a separately published UI specification.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

Centered single-column marketing flow anchored by the 40px hero H1. The currency-exchange widget (amount input + azure CTA) sits high on the page as the primary interactive object. Feature sections alternate white (`#ffffff`) and tinted (`#f7f7f8` / `#f3f5f8`) full-width bands. Review content lives in a horizontal carousel with `#e0e0e0`-bordered arrow controls. Whitespace the source names: **Calm, functional breathing room** — generous vertical rhythm between sections keeps a numbers-heavy product feeling unhurried; **Flat segmentation** — bands separate by background tint and `#efefef` hairlines rather than heavy borders or shadow; **Numbers get room** — the exchange widget is given space and scale so the amount is the clear focal point. Spacing restated from `tokens.spacing`: 4 / 8 / 12 / 16 / 24 / 48 / 64. Shape restated from `tokens.rounded`: buttons/inputs 6 · carousel 8 · cards 16 · larger containers 20 · avatars/chips 9999. Reading the 40px hero as the layout anchor, reading the exchange widget as the primary interactive object, and reading those three whitespace names as this capture's layout philosophy, are derived editorial implementation inferences from the verified surfaces; they are not Moin-authored or a separately published UI specification.

Responsive behavior. The source's live inspection was run as a desktop computed-style pass, and its own evidence note attributes token-level claims to that inspection; the breakpoints, collapsing strategy, image behavior, and the source's "comfortably tappable" reading of the recorded target sizes are stated by the source at system level rather than measured across viewports, so they are a derived editorial implementation inference from the verified surfaces and are not Moin-authored or a separately published UI specification.

| Name | Width | Key Changes |
|---|---|---|
| Mobile | <640px | Single column, hero compresses, exchange widget full-width |
| Tablet | 640-1024px | Moderate padding, 2-up feature cards |
| Desktop | 1024-1440px | Full centered layout, multi-column feature bands, carousel |

Touch targets the source records:

- Exchange CTA at 50px height, full-width on mobile — an unmistakable primary target
- Dark secondary buttons at 52px with 14px 48px padding — comfortably tappable
- Carousel arrow controls at 48px square with `#e0e0e0` border

Collapsing strategy, as the source states it:

- Hero: 40px headline scales down on mobile, weight 700 maintained
- Exchange widget: amount input + azure CTA stack vertically on narrow viewports
- Feature bands: multi-column → stacked single column
- Tinted/white alternating sections keep full-width treatment
- Review carousel: reduces visible cards, arrows remain

Image behavior: app screenshots and illustrations sit on flat tinted surfaces, carrying at most the soft `rgba(0, 0, 0, 0.05)` card shadow; cards maintain 16px radius across breakpoints. The Desktop row keeps the source body's `1024-1440px` range.

<!-- design-md:section content-locales -->
## 6. Content & Locales

Moin's voice is **plain, reassuring, and efficient** — a cross-border money service that treats sending money abroad as something that should be fast, cheap, and unintimidating. The English hero line *"Complex international remittances, now made simple with MOIN!"* sets the register: it names a real pain (remittance is complicated and expensive) and answers it directly, without jargon or hype. Copy speaks to migrant workers, students, and anyone sending money home as a competent adult who wants speed, low fees, and certainty — not a target for financial upsell. That characterization, that register reading, and the tone table below are a derived editorial implementation inference from the verified surfaces; they are not Moin-authored or a separately published UI specification. The English lines themselves are live homepage copy.

| Context | Tone |
|---|---|
| Hero headlines | Problem → simple answer. "Complex international remittances, now made simple with MOIN!" Direct, benefit-first. |
| Feature eyebrows | One-word plain claims. "Speed", "Easy to start", "Lower fees". |
| Feature headings | Concrete promise. "Fast, direct remittances you can trust", "Done in five minutes, right in the app". |
| CTAs | Action-first, low-pressure. "Send money", "More reviews". |
| Trust / savings copy | Concrete and quantified. Fee-savings framed as real numbers, not vague "best rates". |

**Voice samples (verbatim from live homepage):**

- "Complex international remittances, now made simple with MOIN!" — hero headline (problem → simple answer). *(verified live 2026-07-02)*
- "Fast, direct remittances you can trust" — feature heading (speed + trust). *(verified live 2026-07-02)*
- "Done in five minutes, right in the app" — feature heading (concrete time promise). *(verified live 2026-07-02)*

**Forbidden register**: fear-based or urgency-driven sales pressure, undefined financial/FX jargon left unexplained, hype superlatives on routine actions, exclamation-stacked marketing beyond the single friendly hero line.

Published names and labels the source records, kept byte-exact: 모인, Moin, Moin Inc., MOIN, "Send money", "More reviews", "Speed", "Easy to start", "Lower fees", "Why so many users choose MOIN", "Complex international remittances, now made simple with MOIN!", "Complex international remittances, now made simple", "Fast, direct remittances you can trust", "Done in five minutes, right in the app".

Reproduce the strings above byte-exact rather than translating or re-casing them. An English gloss may sit beside a Korean line; it never replaces the line.

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

- **Exact easing curves.** Three easing roles and their uses are established; the curve values are omitted because they are not traceable to Moin evidence. Promote a curve for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed.
- **The disabled opacity value.** The system states a reduced-opacity surface and an azure action that fades rather than turning grey, without naming the opacity.
- **The skeleton pulse.** The system declares flat blocks at final dimensions with a 16px radius and a flat pulse, without naming the pulse's duration or opacity range.
- **Engineering-blog tokens.** `https://themoin.github.io/` is a named brand-owned source. It confirms company identity. It does not contribute computed interface tokens.
