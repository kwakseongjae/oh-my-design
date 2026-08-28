# Intercom Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Intercom is the customer messaging platform the source's brand narrative records, and this contract covers the two first-party surfaces the source names for tokens: the helpdesk chrome at `https://www.intercom.com` and the discrete AI Agent surface at `fin.ai`. Token extraction is `tokens.source: prose-derived` (`tokens.extracted` 2026-06-09). The source footer also records a dual-product live DOM pass via playwright on intercom.com home and `fin.ai/` (verified 2026-05-08). Every value stays attached to the surface that established it. Reading Intercom as that customer messaging platform, reading those two named pages as this contract's token surfaces, keeping the prose-derived token-set bound beside the footer live-DOM pass rather than collapsing them, and keeping values attached to the surface that established them, are derived editorial implementation inferences from the verified surfaces; they are not Intercom-authored or a separately published UI specification.

The captured interface the source records is a warm, confident customer service platform that communicates "AI-first helpdesk" through a clean, editorial design language. The page operates on a warm off-white canvas (`#faf9f6`) with off-black (`#111111`) text. The signature Fin Orange (`#ff5600`) — named after Intercom's AI agent — serves as the singular vibrant accent against the warm neutral palette. The typography uses Saans — a custom geometric sans-serif with aggressive negative letter-spacing (-2.4px at 80px, -0.48px at 24px) and a consistent 1.00 line-height across all heading sizes. Serrif provides the serif companion for editorial moments, and SaansMono handles code and uppercase technical labels. MediumLL and LLMedium appear for specific UI contexts. Geometry is sharp: 4px border-radius on buttons. Button hover states use `scale(1.1)` expansion. The border system uses warm oat tones (`#dedbd6`) and oklab-based opacity values. The hex values, family names, tracking figures, 1.00 heading line-height, 4px radius, `scale(1.1)`, and oat border are recorded. Reading the canvas-and-ink pairing as an intimate, magazine-like reading experience; reading the compressed headlines as billboard-like, engineered, and precise; reading the 4px radius as industrial and precise against the warm surfaces; reading hover scale as a physical "growing" interaction; reading MediumLL / LLMedium plus the three named families as a rich five-font ecosystem; and reading oklab opacity as sophisticated color management, are derived editorial implementation inferences from the verified surfaces; they are not Intercom-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. Intercom was founded **2011** in **California** by **four Irish designers and engineers** — **Eoghan McCabe (Chairman, ex-CEO)**, **Des Traynor**, **Ciaran Lee**, and **David Barrett**. The four had previously run a Dublin design consultancy named **Contrast** and built the bug-tracking tool **Exceptional**, which they **sold to Rackspace 2011** — those proceeds funded Intercom. Initially employed 30 people in **Dublin** before the founders relocated HQ to **San Francisco**. Funding/lineage: **2012 angel from Twitter co-founder Biz Stone**, then seed from **David Sacks, Andy McLoughlin (Huddle), Dan Martell, 500 Global, Digital Garage** → **Series A $6M March 2013** led by **Social Capital** → **$250M debt financing 2025** alongside **€87M / $94M extra AI investment 2024**. Originally positioned as "the customer messaging platform" (challenging Zendesk's ticketing model with conversation-first UX). **2023 launch of Fin** — AI chatbot powered by GPT-4 — became the central product story; in 2025 the AI Agent now ships on **fin.ai** as a discrete product surface alongside intercom.com helpdesk chrome. The years, founders, Contrast, Exceptional, Rackspace sale, Dublin headcount, San Francisco HQ, Biz Stone, the named seed investors, Series A, 2025 debt, 2024 AI investment, the customer-messaging positioning, Zendesk contrast, conversation-first UX, 2023 Fin / GPT-4, and the 2025 fin.ai discrete-surface sentence are the source's own narrative facts; they do not by themselves supply interface tokens. Classifying that founding-and-Fin narrative as context that does not by itself supply interface tokens is a derived editorial implementation inference from the verified surfaces; it is not Intercom-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product's primary tasks is a derived editorial implementation inference from the verified surfaces; it is not Intercom-authored or a separately published UI specification. Each names a label or surface the source records. They do not come from the source's persona section.

- Read the homepage tagline "The only helpdesk designed for the AI Agent era".
- Open a recorded marketing CTA: "Get started", "Try Fin", or "Book a demo".
- Use Fin on `fin.ai` as the discrete AI Agent surface the source names beside intercom.com helpdesk chrome.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source labels its named figures as fictional archetypes informed by Intercom user segments (support team leads, RevOps, AI/Fin admins), not individual people, so those biographies are dropped rather than promoted, and no name, age, city, or occupation is carried into this document or its sidecar. What the source independently records is the audience grouping those archetypes were said to be informed by: support team leads, RevOps, AI/Fin admins. Reading those groups as this product's audience is a derived editorial implementation inference from the verified surfaces; it is not Intercom-authored or a separately published UI specification.

### Distinctive traits

The list restates the source's Key Characteristics. The values are measured; the groupings and the readings inside them are a derived editorial implementation inference from the verified surfaces — they are not Intercom-authored or a separately published UI specification.

- Warm off-white canvas (`#faf9f6`) with oat-toned borders (`#dedbd6`)
- Saans font with extreme negative tracking (-2.4px at 80px) and 1.00 line-height
- Fin Orange (`#ff5600`) as singular brand accent
- Sharp 4px border-radius — near-rectangular buttons and elements
- Scale(1.1) hover with scale(0.85) active — physical button interaction
- SaansMono uppercase labels with wide tracking (0.6px–1.2px)
- Rich multi-color report palette (blue, green, red, pink, lime, orange)
- oklab color values for sophisticated opacity management

### Principles

These five items are a derived editorial implementation inference from the verified surfaces; they are not Intercom-authored or a separately published UI specification. The source states them in its own Principles section together with the UI implication it draws from each.

1. **Conversations over tickets.** *UI implication:* main inbox is conversation-shaped, not row-shaped.
2. **Fin is the agent layer.** *UI implication:* Fin Resolutions metric has main-nav placement; AI agent isn't a sub-feature.
3. **Saans is the type voice.** *UI implication:* warm cream + Saans 80px hero is the brand register.
4. **Hover scale signals interactive.** Buttons grow on hover (scale 1.1). *UI implication:* preserve hover scale; don't replace with color-only transition.
5. **Cream over white.** Default canvas `#faf9f6`. *UI implication:* don't use pure white — the cream is intentional warmth.

### Application rules

The source states these five as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not Intercom-authored or a separately published UI specification.

- Use Saans with 1.00 line-height and negative tracking on all headings
- Apply 4px radius on buttons — sharp geometry is the identity
- Use Fin Orange (#ff5600) for AI/brand accent only
- Apply scale(1.1) hover on buttons
- Use warm neutrals (#faf9f6, #dedbd6)

### Avoid

The source states these four as its Don't list; they are kept as its rules, reasons included. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not Intercom-authored or a separately published UI specification.

- Don't round buttons beyond 4px
- Don't use Fin Orange decoratively
- Don't use cool gray borders — always warm oat tones
- Don't skip the negative tracking on headings

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Each role below pairs a name with the value and the use the source records. Where a line also characterizes a value — off-black as primary text and button backgrounds, cream as warmth rather than pure white, Fin Orange as the singular brand accent, oat as the warm border — that characterization is a derived editorial implementation inference from the verified surfaces; it is not Intercom-authored or a separately published UI specification.

Primary

- **Off Black** (`#111111`): `--color-off-black`, primary text, button backgrounds. Token-set key `tokens.colors.off-black`. The source note also records that primary text/buttons are off-black `#111111`.
- **Pure White** (`#ffffff`): `--wsc-color-content-primary`, primary surface. Token-set key `tokens.colors.white`.
- **Warm Cream** (`#faf9f6`): Button backgrounds, card surfaces, and the recorded canvas. Token-set key `tokens.colors.canvas`.
- **Fin Orange** (`#ff5600`): `--color-fin`, primary brand accent. Token-set key `tokens.colors.fin-orange`. The source note records Fin Orange `#ff5600` as the singular brand accent.
- **Report Orange** (`#fe4c02`): `--color-report-orange`, data visualization. Token-set key `tokens.colors.report-orange`.

Report palette

- **Report Blue** (`#65b5ff`): `--color-report-blue`. Token-set key `tokens.colors.report-blue`.
- **Report Green** (`#0bdf50`): `--color-report-green`. Token-set key `tokens.colors.report-green`.
- **Report Red** (`#c41c1c`): `--color-report-red`. Token-set key `tokens.colors.report-red`.
- **Report Pink** (`#ff2067`): `--color-report-pink`. Token-set key `tokens.colors.report-pink`.
- **Report Lime** (`#b3e01c`): `--color-report-lime-300`. This hex is a §2 body record; it is not a `tokens.colors.*` key.
- **Green** (`#00da00`): `--color-green`. This hex is a §2 body record; it is not a `tokens.colors.*` key.
- **Deep Blue** (`#0007cb`): Deep blue accent. This hex is a §2 body record; it is not a `tokens.colors.*` key.

Neutral scale (warm)

- **Black 80** (`#313130`): `--wsc-color-black-80`, dark neutral. Token-set key `tokens.colors.black-80`.
- **Black 60** (`#626260`): `--wsc-color-black-60`, mid neutral. Token-set key `tokens.colors.black-60`.
- **Black 50** (`#7b7b78`): `--wsc-color-black-50`, muted text. Token-set key `tokens.colors.muted`.
- **Content Tertiary** (`#9c9fa5`): `--wsc-color-content-tertiary`. Token-set key `tokens.colors.tertiary`.
- **Oat Border** (`#dedbd6`): Warm border color. Token-set key `tokens.colors.border`.
- **Warm Sand** (`#d3cec6`): Light warm neutral. Token-set key `tokens.colors.warm-sand`.

Keeping the fifteen YAML color keys on their own paths, and keeping Report Lime / Green / Deep Blue as §2-only rows rather than inventing token-set keys for them, is a derived editorial implementation inference from the verified surfaces; it is not Intercom-authored or a separately published UI specification.

### Spacing

Unitless token-set steps from `tokens.spacing`: `xs 4` · `sm 8` · `md 12` · `base 16` · `lg 24` · `xl 32` · `xxl 48` · `section 64`. The source §5 restates a wider px list: 8px, 10px, 12px, 14px, 16px, 20px, 24px, 32px, 40px, 48px, 60px, 64px, 80px, 96px. Those extra steps (10, 14, 20, 40, 60, 80, 96) stay a §5 restatement; they are not YAML keys. `tokens.spacing.xs: 4` is not `tokens.rounded.sm: 4`. `tokens.spacing.sm: 8` is not `tokens.rounded.lg: 8`. `tokens.spacing.md: 12` is not a radius step. `tokens.spacing.base: 16` is not a type size and is not the `16px` padding on the warm card button. `tokens.spacing.lg: 24` is not a type size. `tokens.spacing.xl: 32` is not the Card Title 32px. `tokens.spacing.xxl: 48` is not a control height. `tokens.spacing.section: 64` is not a type size. Keeping those key paths unmerged is a derived editorial implementation inference from the verified surfaces; it is not Intercom-authored or a separately published UI specification.

### Shape

Unitless token-set steps from `tokens.rounded`: `sm 4` · `md 6` · `lg 8` · `full 9999`.

The source's named radius uses, kept on their own rows:

- Buttons: 4px — `tokens.rounded.sm`
- Nav items: 6px — `tokens.rounded.md`
- Cards, containers: 8px — `tokens.rounded.lg`
- Full: `tokens.rounded.full: 9999`

`tokens.rounded.full: 9999` stays the unitless full step. It is not `999` and is not a type size. `tokens.rounded.sm: 4` is not `tokens.spacing.xs: 4`. `tokens.rounded.md: 6` is not a spacing step. `tokens.rounded.lg: 8` is not `tokens.spacing.sm: 8`. The source footer also records a 6px hero-Primary radius on intercom.com and `fin.ai`; that 6px is the hero-tier measurement, not a second `tokens.rounded.md` key. Keeping those paths unmerged, keeping the source's named radius uses on their own rows, and keeping footer 6px on the Hero Primary record rather than rewriting `tokens.rounded.md`, is a derived editorial implementation inference from the verified surfaces; it is not Intercom-authored or a separately published UI specification.

### Elevation

Token-set path `tokens.shadow.flat`: `none`. The source §6 records minimal shadows, and depth through warm border colors and surface tints. Cards use no visible shadows. Reading that as a flat treatment for the observed cream cards only, rather than a house elevation scale, is a derived editorial implementation inference from the verified surfaces; it is not Intercom-authored or a separately published UI specification.

### Motion

The source token-set is `prose-derived`. The source footer assigns a live DOM pass to color, radius, padding, and type on the dual-product chrome, and assigns none of that pass to a computed motion harvest. The durations, easing role, signature hover scale, and reduced-motion rule below, and the omission of the untraceable "Standard cubic-bezier" curve, are therefore a derived editorial implementation inference from the verified surfaces; they are not Intercom-authored or a separately published UI specification.

Durations:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Selection |
| `motion-fast` | 150ms | Hover scale (1.0 → 1.1) |
| `motion-standard` | 250ms | Modal, panel |
| `motion-typing` | continuous | Fin "typing" indicator |

Easing role — one role with a declared use. The specific curve the source lists as "Standard cubic-bezier" is not traceable to an Intercom-computed sample, so the curve is omitted here and only the role is kept.

An exact curve may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework or vendor document — does not satisfy that condition.

Motion rules, as the source states them:

- **Hover scale 1.1 is signature.**
- `prefers-reduced-motion: reduce` disables hover scale (color shift only).

The signature-hover and reduced-motion pairings are the source's own motion rules; treating them as a current-surface instruction is already covered by the motion-section qualifier above.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | The two named surfaces use Saans, Serrif, and SaansMono. They do not publish a universal current typography token or a separately issued type specimen. That "no published type token" reading is a derived editorial implementation inference from the verified surfaces; it is not Intercom-authored or a separately published UI specification. |
| Live computed surface-use | The source footer records a playwright live DOM pass on intercom.com and `fin.ai/`. That pass measured 16px·400 on Hero Primary intercom.com (Cream `#faf9f6` canvas). Token extraction remains `tokens.source: prose-derived`. |
| Official distributed asset | No Intercom-exclusive downloadable font package was verified in the source. That absence-of-exclusive-package reading is a derived editorial implementation inference from the verified surfaces; it is not Intercom-authored or a separately published UI specification. |
| Declared-only | The source records fallback stacks `Saans Fallback, ui-sans-serif, system-ui`; `Serrif Fallback, ui-serif, Georgia`; `SaansMono Fallback, ui-monospace`; and UI faces `MediumLL` / `LLMedium` with fallbacks `system-ui, -apple-system`. They are fallbacks or context faces, not a substitute brand face. Classing those fallback members and the MediumLL / LLMedium pair as not a replacement for Saans is a derived editorial implementation inference from the verified surfaces; it is not Intercom-authored or a separately published UI specification. |
| License | The source records Saans, Serrif, and SaansMono as custom families. This record does not establish an Intercom-issued font-license notice. That custom-versus-grant reading is a derived editorial implementation inference from the verified surfaces; it is not Intercom-authored or a separately published UI specification. |
| Outside these captures | Typography on surfaces the source did not name stays outside these two captures. Reading that typography as outside this contract is a derived editorial implementation inference from the verified surfaces; it is not Intercom-authored or a separately published UI specification. |

### Family

- **Current visible UI family:** `Saans`, falling back to `Saans Fallback, ui-sans-serif, system-ui`. Token-set path `tokens.typography.family.sans`.
- **Serif companion:** `Serrif`, falling back to `Serrif Fallback, ui-serif, Georgia`. Token-set path `tokens.typography.family.serif`.
- **Monospace:** `SaansMono`, falling back to `SaansMono Fallback, ui-monospace`. Token-set path `tokens.typography.family.mono`.
- **UI context faces:** `MediumLL` / `LLMedium`, falling back to `system-ui, -apple-system`. These are not `tokens.typography.family.*` keys.
- Do not replace Saans with a system substitute. A fallback member of the stack is never presented as the brand face. That fallback prohibition, and keeping MediumLL / LLMedium off `tokens.typography.family.*` keys, is a derived editorial implementation inference from the verified surfaces; it is not Intercom-authored or a separately published UI specification.

### Type roles

| Role | Font | Size | Weight | Line height | Tracking | Token-set path | Token-set use |
|---|---|---:|---:|---:|---|---|---|
| Display Hero | Saans | 80px | 400 | 1.00 | -2.4 | `tokens.typography.display-hero` | Display hero, ultra-compressed |
| Section Heading | Saans | 54px | 400 | 1.00 | -1.6 | `tokens.typography.section` | Section heading |
| Feature Title | Saans | 24px | 400 | 1.00 | -0.48 | `tokens.typography.feature` | Feature title |
| Body | Saans | 16px | 400 | 1.5 | | `tokens.typography.body` | Standard reading text |
| Nav / UI | Saans | 18px | 400 | 1.00 | normal | `tokens.typography.nav` | Nav / UI |

YAML line heights stay unitless ratios: `1.00` on Display Hero, Section Heading, Feature Title, and Nav / UI; `1.5` on Body. They are never converted to a replacement px (A1a). YAML tracking stays the unitless figures `-2.4`, `-1.6`, `-0.48`; the source hierarchy table also writes those as `-2.4px`, `-1.6px`, `-0.48px`. Both spellings are kept. Body's token-set line-height is `1.5`; the hierarchy table writes `1.50` for the same role. Both spellings are kept.

The source hierarchy table also writes roles that are not `tokens.typography.*` keys. Those rows stay here as hierarchy records, not as invented token-set paths:

| Role | Font | Size | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|---|
| Sub-heading | Saans | 40px | 400 | 1.00 | -1.2px |
| Card Title | Saans | 32px | 400 | 1.00 | -0.96px |
| Body Emphasis | Saans | 20px | 400 | 0.95 | -0.2px |
| Body Light | Saans | 14px | 300 | 1.40 | normal |
| Button | Saans | 16px / 14px | 400 | 1.50 / 1.43 | normal |
| Button Bold | LLMedium | 16px | 700 | 1.20 | 0.16px |
| Serif Body | Serrif | 16px | 300 | 1.40 | -0.16px |
| Mono Label | SaansMono | 12px | 400–500 | 1.00–1.30 | 0.6px–1.2px uppercase |

Keeping the five token-set roles on their paths, the eight hierarchy-only rows off invented typography keys, YAML line heights as unitless ratios rather than a replacement px, and both tracking / Body line-height spellings, is a derived editorial implementation inference from the verified surfaces; it is not Intercom-authored or a separately published UI specification.

### Assets

- Logo treatment the source frontmatter records: `logo.type: simpleicons` and `logo.slug` `intercom`. That slug is an identity pointer through Simple Icons, not an Intercom-hosted brand file URL.
- Fin Orange and the Fin name are brand-narrative and accent facts; they are not a hosted mark URL in this packet.

Reading the Simple Icons slug as an identity pointer rather than a hosted brand file, and reading Fin Orange and the Fin name as brand-narrative and accent facts rather than a hosted mark URL, is a derived editorial implementation inference from the verified surfaces; it is not Intercom-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### How applicability is decided here

The source declares each token-set component with a primitive type (`button`, `card`, `tab`) and a value set; those types are preserved per component. Applicability below is judged by each control's role, never by whether a visual treatment for that state happens to be recorded: where the source supplies no treatment for an applicable state, the value is omitted and the state stays applicable. `not-applicable` is used only where the control's role makes the state meaningless — a destination CTA that commits no operation in place, a tab that only selects a destination, or a display element with no action at all — and the reason given is always that semantic one. Where the source supplies no interaction evidence for a container at all, its kind and applicability map are omitted rather than decided. A `Primitive type` line is attached only when the source YAML records that type on that component. A §4-only or footer-only component that is not in the token set is labeled `not in the token set`.

The source records no `focus-visible` treatment. Generic focus is not invented. `focus-visible` stays applicable on interactive controls; the visual treatment is omitted.

The role-based decision procedure above, every interactive-kind verdict, every applicability verdict, and the reason given for either is a derived editorial implementation inference from the verified surfaces; they are not Intercom-authored or a separately published UI specification. This is not a complete state-coverage claim.

### Compact Primary

- Role: destination control that opens a recorded marketing CTA on the helpdesk chrome
- Primitive type: `button` · Kind: interactive
- Domain: compact in-page CTA on `https://www.intercom.com`
- Background: `#111111`
- Text: `#ffffff`
- Radius: 4px
- Padding: `0px 14px`
- Height: 40px (source footer)
- Hover: white background, dark text, scale(1.1)
- Active: green background (`#2c6415`), scale(0.85)
- Token-set use: `Primary dark button, scale(1.1) hover`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; source records white background, dark text, scale(1.1) |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A destination control whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control opens a destination; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | This control sends the reader to a destination; the destination, not the button, reports whether that request failed |
| success | not-applicable | Same role reason: reaching the destination is not an operation with a success result on this button |

### Outlined

- Role: destination control that opens a secondary marketing action
- Primitive type: `button` · Kind: interactive
- Domain: helpdesk chrome
- Background: YAML `tokens.components.button-outlined.bg` is `#faf9f6`; the §4 body writes `transparent`. Both records are kept.
- Text: `#111111`
- Border: `1px solid #111111`
- Radius: 4px
- Same scale hover/active behavior as Compact Primary
- Token-set use: `Outlined button, 1px off-black border`

Keeping the YAML cream background and the §4 transparent background as two records of the same outlined control, rather than merging them into one fill, is a derived editorial implementation inference from the verified surfaces; it is not Intercom-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; source records the same scale hover as Compact Primary |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A destination control whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control opens a destination; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Destination action; the destination, not this button, reports failure |
| success | not-applicable | Same role reason: reaching the destination is not an operation this button reports as success |

### Warm Card Button

- Role: destination control on a warm cream card
- Primitive type: `button` · Kind: interactive
- Background: `#faf9f6`
- Text: `#111111`
- Padding: `16px`
- Border: `1px solid oklab(... / 0.1)`
- Token-set use: `Warm card button`

The source writes the oklab border with an ellipsis; that incomplete function is kept as written and is not filled with a plausible oklab triple. Keeping the ellipsis as an unresolved channel rather than inventing an oklab triple is a derived editorial implementation inference from the verified surfaces; it is not Intercom-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A destination control whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control opens a destination; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Destination action; the destination, not this button, reports failure |
| success | not-applicable | Same role reason: reaching the destination is not an operation this button reports as success |

### Cream Card

- Role: warm cream card, oat border
- Primitive type: `card`
- Background: `#faf9f6`
- Border: `1px solid #dedbd6` (warm oat)
- Radius: 8px
- Token-set use: `Warm cream card, oat border, no shadow`

The source supplies no interaction evidence for this card, so kind and a state-applicability map are both withheld.

### Nav Link

- Role: top-level destination link on the helpdesk chrome
- Primitive type: `tab` · Kind: interactive
- Domain: navigation on `https://www.intercom.com`
- Text: `#111111`
- Font: `16px Saans`
- Surface: off-black on white
- Token-set use: `Nav link, off-black on white`

The source §4 also records small 4px–6px radius buttons in the navigation and an orange Fin accent for AI features. Those sit on this nav record as §4 body facts; they are not a second YAML `type`. Keeping those §4 navigation facts on this nav record rather than inventing a second YAML type is a derived editorial implementation inference from the verified surfaces; it is not Intercom-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web link; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A destination link whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control selects a destination; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | A nav link does not report a failed request on itself |
| success | not-applicable | Reaching a nav destination is not an operation this link reports as success |

### Hero Primary

- Role: destination control that opens the hero CTA on the dual-product chrome
- not in the token set
- Domain: hero on `https://www.intercom.com` and inverse hero on `fin.ai`
- intercom.com: Background `#000`; Text `#ffffff`; Radius 6px; Padding 12×16; Height 42px; Font 16px·400
- `fin.ai`: Background `#fff`; Radius 6px
- Use: hero Primary — canvas-inverted on the fin.ai dark canvas

The source supplies this two-tier hero as a footer record, not a YAML `type` key, so no `Primitive type` line is attached. Placing that footer measurement on this record rather than inventing a YAML type for it, and reading the fin.ai hero as canvas-inverted on that dark canvas, is a derived editorial implementation inference from the verified surfaces; it is not Intercom-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A destination control whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control opens a destination; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Destination action; the destination, not this button, reports failure |
| success | not-applicable | Same role reason: reaching the destination is not an operation this button reports as success |

### Surface state contract

The source's state contract, preserved with its values and copy. The source token-set is `prose-derived`, and the source footer assigns no live-computed harvest to this inbox table; the treatments below are therefore a derived editorial implementation inference from the verified surfaces rather than measured per-control observations, and they are not Intercom-authored or a separately published UI specification. The rows stay a system-level contract. They are not attached as visual treatments to the destination marketing controls above.

| State | Treatment |
|---|---|
| **Empty (no conversations)** | "Welcome to your Inbox" + onboarding tour |
| **Empty (Fin disabled)** | "Enable Fin to deflect tickets" with single CTA |
| **Loading (conversation history)** | Skeleton message bubbles in cream tones |
| **Loading (Fin response)** | Typing indicator with Fin avatar |
| **Error (sync)** | Banner top-of-inbox with retry |
| **Error (Fin failed)** | Inline below message + escalate-to-human option |
| **Success (assigned)** | Subtle bg shift on conversation row |
| **Success (Fin resolved)** | Resolution badge appears on conversation |
| **Skeleton (inbox)** | Cream rows with subtle shimmer |
| **Disabled (no permission)** | 0.5 opacity + tooltip permission level |
| **Loading (long Fin run)** | Per-step "Searching knowledge base..." trace |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

Spacing restated from `tokens.spacing`: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64. The source §5 also writes 8px, 10px, 12px, 14px, 16px, 20px, 24px, 32px, 40px, 48px, 60px, 64px, 80px, 96px. Border radius restated: 4px (buttons), 6px (nav items), 8px (cards, containers). Shape restated from `tokens.rounded`: `sm 4` · `md 6` · `lg 8` · `full: 9999`.

Reading the 4px button / 6px nav / 8px card pairing as the recorded geometry for those roles, rather than a universal radius scale for every Intercom surface, is a derived editorial implementation inference from the verified surfaces; it is not Intercom-authored or a separately published UI specification.

Responsive behavior. The source token-set is `prose-derived`; the breakpoints are stated by the source at system level rather than measured across viewports, so they are a derived editorial implementation inference from the verified surfaces and are not Intercom-authored or a separately published UI specification.

Breakpoints the source records: 425px, 530px, 600px, 640px, 768px, 896px.

Touch-target heights the source footer records on the dual-product chrome: Hero Primary 42px (intercom.com); Compact Primary 40px.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The source characterizes Intercom's voice as **support-team-first and product-agentic** — speaks as a customer messaging platform that's positioned itself for the AI agent era ("the only helpdesk designed for the AI Agent era"). Marketing copy emphasizes the support team workflow + AI agent integration. That characterization, that register reading, and the tone table below are a derived editorial implementation inference from the verified surfaces; they are not Intercom-authored or a separately published UI specification. The published lines themselves are live surface copy.

| Context | Tone |
|---|---|
| CTA | Verb. "Get started", "Try Fin", "Book a demo" |
| Marketing | AI-agent-positioned. Fin (their AI agent) is first-class brand element |
| Documentation | Practical, integration-heavy |
| Error | Specific. "Conversation not synced. Refresh to retry." |

**Voice samples**

- Marketing tagline: *"The only helpdesk designed for the AI Agent era"* <!-- verified: intercom.com homepage 2026-05 -->

Further published strings the source records, kept byte-exact:

- The only helpdesk designed for the AI Agent era
- Get started
- Try Fin
- Book a demo
- Conversation not synced. Refresh to retry.
- Welcome to your Inbox
- Enable Fin to deflect tickets
- Searching knowledge base...
- Fin
- fin.ai
- the customer messaging platform
- Saans
- Serrif
- SaansMono
- MediumLL
- LLMedium
- Contrast
- Exceptional
- Fin Resolutions
- Eoghan McCabe
- Des Traynor
- Ciaran Lee
- David Barrett

**Forbidden phrases.** "Revolutionary support", "AI-powered" without specifics. That premise-to-register causal is a derived editorial implementation inference from the verified surfaces; it is not Intercom-authored or a separately published UI specification.

Reproduce the published strings above byte-exact rather than translating or re-casing them. A gloss may sit beside a line; it never replaces the line. That byte-exact / gloss-beside rule is a derived editorial implementation inference from the verified surfaces; it is not Intercom-authored or a separately published UI specification.

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

These are named values, not permissions to invent. The source records no conflict among its own Tier 1 values. Treating the list as named unresolved values rather than a license to invent is a derived editorial implementation inference from the verified surfaces; it is not Intercom-authored or a separately published UI specification.

- **Exact easing curve.** One easing role is established; the "Standard cubic-bezier" value is omitted because it is not traceable to an Intercom-computed sample. Promote a curve for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed.
- **Full radius step.** `tokens.rounded.full: 9999` is the unitless full step.
- **oklab border triple.** The source writes `oklab(... / 0.1)` with an ellipsis; the missing channels stay omitted.
- **Hover and focus-visible treatments** beyond the recorded scale(1.1) / scale(0.85) pair. Those further visual treatments are omitted. They are not `not-applicable`; applicability follows control meaning.
