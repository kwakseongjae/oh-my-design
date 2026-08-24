# 91APP Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

91APP is Taiwan's leading omnichannel OMO (online-merge-offline) commerce SaaS. Catalog homepage identity is `https://www.91app.com`. This contract covers that first-party homepage. The source footer names it as the live DOM source for body text, the primary/coral/neutral buttons, the hero heading, and the recorded hex/px values.

Source token note: navy `#061C3D` is the structural primary (text + headings + primary button); coral `#E85040` is the lone action accent, kept rare. The source footer attributes those hex/px values to live DOM on `https://www.91app.com`. Recording the token note and the footer live-DOM attribution without merging them into one evidence class is a derived editorial implementation inference from the verified surfaces; it is not 91APP-authored or a separately published UI specification.

Treating `https://91app.tech` and `https://github.com/91APP` as named Tier-1 sources whose color, type, and component values stay unattached in this reconstruction is a derived editorial implementation inference from the verified surfaces; it is not 91APP-authored or a separately published UI specification.

The following atmosphere reading is a derived editorial implementation inference from the verified surfaces; it is not 91APP-authored or a separately published UI specification. The source describes composure of retail infrastructure built to be trusted at scale. Structural navy `#061C3D` is said to anchor text, headings, and the primary call-to-action, giving screens the gravity of a B2B platform that merchants stake their storefronts on. Against white ground `#FFFFFF`, that navy is read as steady and engineered rather than playful. Coral-red `#E85040` is the single point of energy — the action color reserved for moments that should feel decisive. Traditional-Chinese Noto Sans TC is described as neutral, legible clarity suited to a Taiwanese merchant audience. The overall atmosphere is described as confident retail infrastructure: orderly, generously rounded at the touch points, and quietly serious.

The following brand-narrative reading is a derived editorial implementation inference from the verified surfaces; it is not 91APP-authored or a separately published UI specification. The source says the visual identity tells the OMO story: a deep-navy structural brand conveys the reliability of infrastructure merchants depend on, while a coral-red action accent on a clean white ground signals the decisive moments of commerce. Traditional-Chinese Noto Sans typography and generously rounded primary buttons round out a brand that reads as confident, approachable retail infrastructure — serious where it counts, welcoming at the point of action.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

- Read the top-of-page hero heading on `https://www.91app.com`.
- Act on the primary navy call-to-action (dominant action) on `https://www.91app.com`.
- Act on the coral CTA (lone decisive accent, kept rare) on `https://www.91app.com`.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. Source §13 names fictional archetypes, not individual people. Restricting Audience so those fictional archetypes are not Audience and are not primary tasks, using the source's group-level Taiwanese merchant audience only, and tying observable work only to the three primary tasks, is a derived editorial implementation inference from the verified surfaces; it is not 91APP-authored or a separately published UI specification.

### Distinctive traits

- Structural navy `#061C3D` as body text, headings, and primary-button fill; catalog `primary_color` is this hex
- Coral `#E85040` as the lone action accent, kept rare
- Red emphasis `#CB200E` for emphasis text and highlight callouts; YAML color key is `error`
- Neutral fill `#F7F6FB` for secondary / neutral button fill
- White canvas `#FFFFFF`; on-primary button label is the same hex
- Noto Sans TC with Helvetica fallback; hero 44px / 700; body 16px / 400
- Primary and coral buttons at 16px radius; neutral button at 3px radius
- Primary and neutral buttons 48px tall; coral CTA 40px tall

Omitting hover, pressed, focus, and disabled visual treatments because the source says those values are not provided, rather than darkening or lightening the base colors, is a derived editorial implementation inference from the verified surfaces; it is not 91APP-authored or a separately published UI specification.

### Principles

These five items are a derived editorial implementation inference from the verified surfaces; they are not 91APP-authored or a separately published UI specification.

1. **Structure first:** navy carries text, headings, and the primary action — the brand's backbone.
2. **One point of energy:** coral is the lone action accent, kept rare to stay decisive.
3. **Clarity over ornament:** white ground, legible 16px Noto Sans TC, no unnecessary decoration.
4. **Approachable touch points:** generous 16px rounding on primary actions invites interaction.
5. **Trust through restraint:** soft neutral fills and flat depth keep the platform calm and credible.

Treating the following as a capture-bound application of source §7 Do's is a derived editorial implementation inference from the verified surfaces; it is not 91APP-authored or a separately published UI specification.

- Use navy `#061C3D` as the structural backbone — text, headings, and the primary button.
- Keep coral `#E85040` rare, reserved for the single most important action.
- Set type in Noto Sans TC with Helvetica fallback; body at 16px.
- Give primary actions the generous 16px radius for an approachable, tappable feel.
- Lift secondary surfaces with the soft `#F7F6FB` neutral fill instead of hard borders.

### Avoid

The following items copy source §7 Don'ts. They are a derived editorial implementation inference from the verified surfaces; they are not 91APP-authored or a separately published UI specification.

- Do not spread coral `#E85040` across many elements — it loses its decisive force.
- Do not put navy text on navy fill or otherwise compromise the navy/white contrast.
- Do not mix the red emphasis `#CB200E` into general body copy; keep it for emphasis.
- Do not invent ornament or heavy shadows — the brand reads engineered and calm.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

The following unmerged-role readings are a derived editorial implementation inference from the verified surfaces; they are not 91APP-authored or a separately published UI specification. Structural navy is catalog `primary_color` and the YAML `primary` / `brand` / `foreground` / `body` / `heading` hex; those five YAML keys share `#061C3D` and are not split into five paints. YAML `error` `#CB200E` is the source's red-emphasis / highlight-callout role, not a form-error paint for the harvested buttons. Canvas `#FFFFFF` and on-primary `#FFFFFF` share a hex; on-primary is the filled-button label field, not a second canvas token. Neutral fill `#F7F6FB` is the secondary-button fill, not Canvas.

- **Structural navy / Primary** (`#061C3D`, rgb 6,28,61): body text, headings, and primary-button background. Catalog `primary_color`. YAML `primary`, `brand`, `foreground`, `body`, `heading`.
- **Action coral** (`#E85040`, rgb 232,80,64): coral CTA background — the action accent, kept rare. YAML `accent`.
- **Red emphasis** (`#CB200E`): emphasis text, highlight callouts. YAML `error`. Not a form-error paint for the harvested buttons.
- **Neutral fill** (`#F7F6FB`): neutral / secondary button fill. YAML `muted`.
- **Ground / Canvas** (`#FFFFFF`): page background. YAML `canvas`.
- **On-primary** (`#FFFFFF`): text on filled buttons. YAML `on-primary`. This is the on-fill label field, not Canvas.

### Spacing

YAML scale: sm 8, base 16, lg 24, xl 32. Harvested control heights in the body are 48px (primary and neutral buttons) and 40px (coral CTA). Treating those heights as component fields rather than replacements for the YAML spacing scale is a derived editorial implementation inference from the verified surfaces; it is not 91APP-authored or a separately published UI specification.

### Shape

- Neutral button: 3px (YAML `rounded.sm`)
- Primary and coral buttons: 16px (YAML `rounded.lg`)

The following local-geometry reading is a derived editorial implementation inference from the verified surfaces; it is not 91APP-authored or a separately published UI specification. 16px primary/coral corners and 3px neutral-button corners are local harvested geometry, not a universal radius scale.

### Elevation

YAML `tokens.shadow.flat`: `none — separation via color/fill contrast, no literal shadow stacking`.

The following elevation reading is a derived editorial implementation inference from the verified surfaces; it is not 91APP-authored or a separately published UI specification. The source handles depth with restraint. Rather than heavy shadows, separation comes from color and fill: the neutral `#F7F6FB` surfaces lift gently off the pure-white ground, and the saturated navy and coral buttons stand forward through contrast alone. The generous 16px corner radius on primary actions is read as softening the interface and signaling approachability, while the tighter 3px radius on the neutral button is read as a more utilitarian, grounded surface. The overall sense of elevation is described as flat and modern, leaning on contrast and rounding instead of literal shadow stacking.

### Motion

Specific motion and easing values are not provided in the source. No motion duration, easing curve, animation name, transition property, or reduced-motion behavior is promoted.

The following motion-character reading is a derived editorial implementation inference from the verified surfaces; it is not 91APP-authored or a separately published UI specification. The source says that, in keeping with the brand's engineered, trustworthy character, any motion should be restrained and purposeful — calm transitions that reinforce stability rather than draw attention to themselves, with the coral action accent reserved for the moments worth animating. That qualitative stance is not a duration, curve, animation name, or reduced-motion token.

Treating the source parenthetical that hover, pressed, focus, and disabled values may be derived by darkening or lightening base colors as not a motion token, and not following it here, is a derived editorial implementation inference from the verified surfaces; it is not 91APP-authored or a separately published UI specification.

Do not promote an easing curve, animation name, transition property, or a duration until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or duration is not that gate. Any exact animation value remains a local extension until that per-component computed observation exists.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The following evidence-class application readings are a derived editorial implementation inference from the verified surfaces; they are not 91APP-authored or a separately published UI specification.

| Evidence class | Resolution |
|---|---|
| Live computed surface-use | The source footer attributes Noto Sans TC (Traditional Chinese) with Helvetica fallback, 16px body, and 44px / 700 hero in `#061C3D` to live DOM on `https://www.91app.com`. |
| Declared-only | Helvetica is the YAML fallback. It is the fallback name, not the brand face. |

### Family

- **Current UI family:** `Noto Sans TC`
- **Fallback:** `Helvetica`

The following font-use boundary is a derived editorial implementation inference from the verified surfaces; it is not 91APP-authored or a separately published UI specification. Do not present Helvetica as the 91APP brand face. Do not replace Noto Sans TC with another sans and name it 91APP.

### Type roles

YAML records no `lineHeight`. YAML typography `use` strings are kept. Promoting no line-height value from that absence is a derived editorial implementation inference from the verified surfaces; it is not 91APP-authored or a separately published UI specification.

| Role | Font | Size | Weight | YAML use |
|---|---|---:|---:|---|
| Hero heading | Noto Sans TC | 44px | 700 | Top-of-page hero heading in structural navy, carries brand authority |
| Body | Noto Sans TC | 16px | 400 | Standard reading text, calm and scannable |
| Button | Noto Sans TC | 16px | 600 | Primary / neutral button label |
| Button-accent | Noto Sans TC | 16px | 500 | Coral CTA label |

Hero heading color in the body is `#061C3D`. Button labels on navy and coral fills are `#FFFFFF`. Neutral-button label is `#061C3D`.

### Assets

Treating catalog logo metadata as a Google favicon lookup (`https://www.google.com/s2/favicons?domain=91app.com&sz=128`), not a captured first-party mark, and not promoting it as a portable mark file, is a derived editorial implementation inference from the verified surfaces; it is not 91APP-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

Preserving the source state contract here while the catalog graph is not adopted is a derived editorial implementation inference from the verified surfaces; it is not 91APP-authored or a separately published UI specification.

YAML `padding` fields `48px height` and `40px height` are the harvested heights, not padding. Treating those strings as height rather than padding is a derived editorial implementation inference from the verified surfaces; it is not 91APP-authored or a separately published UI specification.

The following variant-as-state sentences copy source §14. Their role characterizations are a derived editorial implementation inference from the verified surfaces; they are not 91APP-authored or a separately published UI specification.

State styling is expressed through the documented button variants. The primary navy button (`#061C3D` background, white text, 16px radius, 48px height, 16px/600) is the default decisive action. The coral CTA (`#E85040` background, white text, 16px radius, 40px height, 16px/500) marks the single high-energy action state. The neutral button (`#F7F6FB` fill, navy text, 3px radius, 48px height, 16px/600) covers the calm secondary state. Red emphasis (`#CB200E`) signals an emphasized or highlighted text state.

Hover, pressed, focus, and disabled values are not provided in the source. The source parenthetical that those values may be derived by darkening or lightening these base colors while preserving the navy/coral roles is a reconstruction invitation, not a published visual token. Treating that parenthetical as not a token, and omitting those visual treatments rather than synthesizing darkened or lightened paints, is a derived editorial implementation inference from the verified surfaces; it is not 91APP-authored or a separately published UI specification.

Characterizations such as “default decisive action”, “single high-energy action state”, “calm secondary state”, and “emphasized or highlighted text state” are part of the same derived editorial implementation inference; they are not 91APP-authored or a separately published UI specification.

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. The source records no `Focus` capture and no `focus-visible` treatment; `focus-visible` visual treatment remains omitted. A later generic Focus observation would not be `focus-visible` evidence. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless captured as that same canonical state. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow the control's product role, not its primitive kind. Where exact label/destination/request/outcome is unresolved, those three applicability fields are omitted at this boundary rather than closed from the §14 variant-as-state sentences. This is not a complete state-coverage claim.

Hero Heading is harvested as `type: card` with default heading metrics and no state or interactive-kind evidence, so kind and a state-applicability map are omitted.

### Primary Button

- Role: primary call-to-action — the dominant navy action on white ground
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#061C3D`
- Text: `#FFFFFF`
- Border: none
- Radius: 16px
- Height: 48px
- Font: 16px / 600
- Use: dominant action
- Observed: default only
- YAML `padding` field is the string `48px height`; that string is height, not padding.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Documented as the primary navy call-to-action |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A call-to-action can be unavailable; visual treatment omitted |

Loading, error, and success applicability are omitted. Source names this control as the dominant / primary call-to-action; exact label/destination/request/outcome is unresolved, so those three fields stay omitted at this boundary rather than closed from the §14 variant-as-state sentences.

### Coral CTA Button

- Role: the single energetic action accent — reserve for decisive, attention-drawing moments
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#E85040`
- Text: `#FFFFFF`
- Border: none
- Radius: 16px
- Height: 40px
- Font: 16px / 500
- Use: lone decisive accent, kept rare
- Observed: default only
- YAML `padding` field is the string `40px height`; that string is height, not padding.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Documented as the coral action accent |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A call-to-action can be unavailable; visual treatment omitted |

Loading, error, and success applicability are omitted. Source names this control as the lone decisive accent; exact label/destination/request/outcome is unresolved, so those three fields stay omitted at this boundary rather than closed.

### Neutral Button

- Role: secondary / neutral action on a soft near-white fill
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#F7F6FB`
- Text: `#061C3D`
- Border: none
- Radius: 3px
- Height: 48px
- Font: 16px / 600
- Use: secondary action
- Observed: default only
- YAML `padding` field is the string `48px height`; that string is height, not padding.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Documented as the secondary / neutral action |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A secondary action can be unavailable; visual treatment omitted |

Loading, error, and success applicability are omitted. Source names this control as a secondary / neutral action; exact label/destination/request/outcome is unresolved, so those three fields stay omitted at this boundary rather than closed.

### Hero Heading

- Role: top-of-page heading in Noto Sans TC carrying brand authority
- Type: card
- Anatomy: heading
- Background: transparent
- Text: `#061C3D`
- Border: none
- Font: 44px / 700
- Use: top-of-page authority heading
- Observed: default only

No interactive-kind evidence is given for this heading. Kind and a state-applicability map are omitted.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The following layout reading is a derived editorial implementation inference from the verified surfaces; it is not 91APP-authored or a separately published UI specification. The source reads the layout as clean retail infrastructure: a white ground (`#FFFFFF`) gives content room to breathe, navy structure organizes the hierarchy, and the coral accent is placed sparingly so the eye knows exactly where the action is. Generously rounded primary buttons (16px radius) sit as confident, tappable anchors. Secondary surfaces use the neutral fill (`#F7F6FB`) to separate without hard borders, keeping the page calm and uncluttered. The composition favors order and legibility over decoration — the look of a platform whose job is to make merchants feel secure.

YAML spacing sm 8, base 16, lg 24, xl 32. Harvested heights: 48px primary and neutral buttons, 40px coral CTA. Hero headings 44px. Body 16px.

The following measurement-boundary and breakpoint readings (button system sized for touch and scale; hierarchy holding from desktop to mobile merchant views; recorded 48px / 40px / 44px / 16px as source-stated sizes rather than a cross-viewport specification) are a derived editorial implementation inference from the verified surfaces; they are not 91APP-authored or a separately published UI specification. The source says the button system is sized for touch and scale, and that with a 16px body size and large 44px hero headings the hierarchy holds up from desktop down to mobile merchant views. The white ground and soft neutral fills keep content legible across viewport sizes without relying on layout-specific decoration. Specific breakpoint values are not provided in the source; size and contrast carry the responsive behavior. The 48px, 40px, 44px, and 16px figures are source-stated sizes, not a cross-viewport specification.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The following voice reading is a derived editorial implementation inference from the verified surfaces; it is not 91APP-authored or a separately published UI specification. The source describes the voice as trustworthy retail infrastructure — confident, clear, and B2B-grade. It speaks to merchants who are betting their storefronts on the platform, so it favors steadiness and competence over hype. Like the navy-dominant palette, the tone is structural and dependable, with energy reserved for the moments that matter. It is professional Traditional-Chinese-first, addressing a Taiwanese commerce audience directly and practically.

Not promoting synthetic voice samples, and treating the §14 variant-as-state sentences as the state contract rather than extra voice samples, is a derived editorial implementation inference from the verified surfaces; it is not 91APP-authored or a separately published UI specification.

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

- hover, pressed, focus, and disabled visual treatments (source: not provided; the darkening/lightening parenthetical is not a token)
- loading, error, and success visual treatments, and Primary / Coral / Neutral loading·error·success applicability (exact label/destination/request/outcome unresolved)
- interactive kind and state-applicability map for Hero Heading
- `focus-visible` visual treatments; a generic Focus observation is a different evidence type
- specific breakpoint values (source: not provided)
- YAML `lineHeight` (none recorded)
- motion duration, easing, animation name, transition properties, and reduced-motion behavior — promote only after per-component computed capture of all five; official documentation of a single curve or duration is not that gate
