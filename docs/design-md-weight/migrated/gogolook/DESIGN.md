# Gogolook Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Gogolook is the Taiwan TrustTech company behind Whoscall, the caller-ID and anti-scam app. This contract covers two first-party surfaces the record inspected together: the live Whoscall marketing surface at `https://whoscall.com` and the documented brand page at `https://whoscall.com/en/brand`. The corporate page at `https://www.gogolook.com/about` supplies company background and no interface value. The brand-owned engineering blog at `https://medium.com/gogolook-tech` is named in the same source list and carries no color, type, geometry, or component value here.

The published Whoscall Brand Guidelines on the brand page document three colors — Whoscall Green `#0CD25F`, Dark Gray `#2C3E50`, and White `#FFFFFF` — plus logo and usage guidelines. Every other value below is a live observation on `https://whoscall.com`, or a machine-readable restatement the record drew from its own prose after that inspection. The two color domains stay separate: the documented brand green is the identity hue; the live download pill renders the near-twin `#05F067`.

The captured marketing layer sits on a white `#FFFFFF` ground. Headlines use rounded Nunito at a 118px / 500 hero; body copy uses Noto Sans at 16px / 400. Primary text is `#262626`. The primary download control is a 56px pill at radius 100px, padding 16px 32px, filled with `#05F067`. A secondary demo pill keeps the same geometry on `rgba(255,255,255,0.8)`. A premium / upgrade control sits on light-green tint `#E6FAEF` at radius 40px and height 57px. Category accents `#F53F90` and `#019D91` appear on the live surface.

The readings in this section — that the product speaks in friendly, reassuring consumer safety rather than cold enterprise security; that `#0CD25F` signals "you're protected" without feeling alarming; that the pairing of rounded Nunito headlines and Noto Sans body reads as approachable and human; that the overall feeling is of a trusted neighbor who is good at spotting scams; that green does the emotional work of conveying safety against a quiet white ground; that protection is communicated through friendliness, generous rounding, and a single confident accent rather than dark, defensive, "security-vendor" tropes; that the live download fill is a near-twin of the documented brand green; that neither inspected surface stands in for the other or for a Whoscall surface this inspection did not reach; and that the corporate page and the engineering blog must not be treated as token sources — are a derived editorial implementation inference from the verified surfaces; they are not Gogolook-authored or taken from a separately published UI specification, including the published Whoscall Brand Guidelines. The documented brand-page colors and the live-computed values named beside them stand as observations.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

These three outcomes are read out of the controls the record captures on `https://whoscall.com`. The source declares no task list of its own. Reading those controls as the primary tasks a person comes to this surface to perform is a derived editorial implementation inference from the verified surfaces; it is not Gogolook-authored or taken from a separately published UI specification, including the published Whoscall Brand Guidelines.

- Take the primary download call-to-action on `https://whoscall.com`.
- Take the secondary "demo" action that sits beside that download control.
- Take the premium / upgrade action on the light-green tint surface.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. Fictional role titles and segment descriptions are not design authority and none is carried here. At group level the source names a Taiwan-rooted, multilingual consumer product and people who use Whoscall for caller identification and anti-scam. Reading that group as the audience constraint for this surface is a derived editorial implementation inference from the verified surfaces; it is not Gogolook-authored or taken from a separately published UI specification, including the published Whoscall Brand Guidelines.

### Distinctive traits

The list restates values the record captures. Where a bullet characterizes a value rather than stating it — "near-twin", "identity hue", "used as accents, not primaries" — that reading is a derived editorial implementation inference from the verified surfaces; it is not Gogolook-authored or taken from a separately published UI specification, including the published Whoscall Brand Guidelines.

- Documented Whoscall Green `#0CD25F` as the brand-page identity hue; live download fill `#05F067` as its near-twin
- White `#FFFFFF` ground; primary text `#262626`
- Rounded Nunito display hero at 118px / 500; Noto Sans body at 16px / 400
- Fully-rounded 100px pills at 56px height and 16px 32px padding; premium control at 40px radius and 57px height
- Light-green tint `#E6FAEF` on the premium surface
- Category accents pink `#F53F90` and teal `#019D91` used as accents, not primaries

### Principles

These five items are a derived editorial implementation inference from the verified surfaces; they are not Gogolook-authored or taken from a separately published UI specification, including the published Whoscall Brand Guidelines.

1. **Approachable protection, not enterprise security** — safety communicated through warmth, rounding, and a single confident green.
2. **Reassure, don't alarm** — bright white grounds and friendly greens replace dark, defensive security tropes.
3. **One confident action** — a single primary pill CTA carries the page; everything else stays quiet.
4. **Friendly by form** — fully-rounded pills and rounded Nunito display make the interface feel human and tappable.
5. **Color with purpose** — green does the emotional work of "you're protected"; accents are used sparingly.

### Application rules

These application rules are a derived editorial implementation inference from the verified surfaces; they are not Gogolook-authored or taken from a separately published UI specification, including the published Whoscall Brand Guidelines. The values inside them are recorded values and are stated again in their own sections.

- Lead with the documented Whoscall Green (`#0CD25F`) as the brand anchor and reserve the brighter `#05F067` for the live download CTA.
- Keep the ground white (`#FFFFFF`) and let color carry meaning sparingly.
- Use fully-rounded pill geometry (100px radius) for primary and secondary actions.
- Pair rounded Nunito display with clean Noto Sans body, and render text in `#262626`.

### Avoid

These avoidances are a derived editorial implementation inference from the verified surfaces; they are not Gogolook-authored or taken from a separately published UI specification, including the published Whoscall Brand Guidelines.

- Invent dark "security-vendor" backgrounds or aggressive red-alert palettes; the brand reads as friendly protection.
- Square off the buttons or reduce their rounding — the pill language is core to the approachable feel.
- Overload the page with multiple competing accents; the category pink (`#F53F90`) and teal (`#019D91`) are accents, not primaries.
- Substitute pure black for text where `#262626` is specified.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

The three documented brand-page colors are published on `https://whoscall.com/en/brand`. The remaining colors are live observations on `https://whoscall.com`. Role names and the characterizations around them — "core identity hue", "near-twin", "slightly brighter", "soft pale-green", "gentle, low-pressure" — are a derived editorial implementation inference from the verified surfaces; they are not Gogolook-authored or taken from a separately published UI specification, including the published Whoscall Brand Guidelines. The hex values and the surface each one was recorded on stand as observations.

**Documented on the brand page**

- **Whoscall Green** (`#0CD25F`): primary brand color, documented on `https://whoscall.com/en/brand`; the core identity hue.
- **Dark Gray** (`#2C3E50`): documented secondary on the brand page.
- **White** (`#FFFFFF`): documented on the brand page; the dominant ground on the live marketing surface.

**Live on `https://whoscall.com`**

- **Download-CTA Green** (`#05F067`): the live, slightly brighter near-twin used on the primary download pill.
- **Light-Green Tint** (`#E6FAEF`): soft pale-green surface used for the premium button background.
- **Primary Text** (`#262626`): the live body and button text color.
- **Category accent — Pink** (`#F53F90`): a live category accent.
- **Category accent — Teal** (`#019D91`): a second live category accent.

### Spacing

The record states a named spacing set drawn from its own prose: `xs` 8, `sm` 16, `base` 16, `lg` 32, `xl` 48, `section` 64. The live button padding that sits on the captured controls is `16px 32px`. Those two facts are not the same measurement; the named set is not an independently computed scale. That measurement-class reading is a derived editorial implementation inference from the verified surfaces; it is not Gogolook-authored or taken from a separately published UI specification, including the published Whoscall Brand Guidelines.

### Shape

- `sm` 40 — recorded named step; also the premium-button radius
- `md` 40 — recorded named step
- `lg` 100 — primary and secondary pill radius
- `full` 9999 — recorded named step; no captured control uses this value as a computed radius

Primary and secondary actions use radius 100px. The premium / upgrade control uses radius 40px.

### Elevation

The elevation reading in this paragraph is a derived editorial implementation inference from the verified surfaces; it is not Gogolook-authored or taken from a separately published UI specification, including the published Whoscall Brand Guidelines. Elevation is restrained and quiet. The interface leans on the white ground and the soft pale-green tint (`#E6FAEF`) to separate planes rather than heavy shadow stacks. Depth is implied mainly through fully-rounded pill geometry and gentle background-color shifts between the white canvas and the light-green premium surface. No documented hard borders are used on the primary actions, so contrast comes from color fill rather than outlines or strong drop shadows. No shadow token is promoted.

### Motion

No motion duration, easing curve, animation name, transition property, or reduced-motion behavior is documented in the captured data. No motion token is promoted.

The qualitative motion character in this paragraph is a derived editorial implementation inference from the verified surfaces; it is not Gogolook-authored or taken from a separately published UI specification, including the published Whoscall Brand Guidelines. In keeping with the brand's friendly, reassuring character, any later motion should feel soft, calm, and welcoming — gentle transitions that match the rounded pill geometry and the unhurried, neighborly tone, never abrupt or alarming.

Do not promote an easing curve, an animation name, a CSS transition property, a duration, or a reduced-motion behavior until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or duration is not that gate. Any exact animation curve remains a local extension until that per-component computed observation exists.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The rows below sort this record's font evidence into classes. The sorting is a derived editorial implementation inference from the verified surfaces; it is not Gogolook-authored or taken from a separately published UI specification, including the published Whoscall Brand Guidelines. The observation inside each row stands on its own.

| Evidence class | Resolution |
|---|---|
| Official product-use | The published Whoscall Brand Guidelines document brand colors and logo usage. They do not publish a type family. |
| Live computed surface-use | Visible headlines on `https://whoscall.com` compute as Nunito; body copy computes as Noto Sans. |
| Official distributed asset | The record establishes the families in live use and carries no Gogolook-distributed font file. |
| Declared-only | The machine-readable family block names `Noto Sans` for both `sans` and `mono`. Nunito appears as the hero role, not as that family-block name. |
| License | No license or distribution statement accompanies either family in this record. |
| Outside these captures | The corporate page and the engineering blog carry no type value. |

### Family

- **Display:** Nunito — rounded display face for headlines, scaling to a 118px / 500 hero.
- **Body:** Noto Sans — body copy at 16px / 400.
- Do not replace Nunito or Noto Sans with a system font and present the substitute as the brand face. The two families are canonical here only because live visible use on `https://whoscall.com` agrees on them. The substitution ban and the canonicity reading are a derived editorial implementation inference from the verified surfaces; they are not Gogolook-authored or taken from a separately published UI specification, including the published Whoscall Brand Guidelines.

The pairing reading — that rounded, expressive headlines invite the reader in, while clean, sober body text keeps trust-critical information clear, and that Noto Sans's multilingual coverage suits a Taiwan-rooted consumer product — is a derived editorial implementation inference from the verified surfaces; it is not Gogolook-authored or taken from a separately published UI specification, including the published Whoscall Brand Guidelines. The families, sizes, and weights are live observations.

### Type roles

| Role | Font | Size | Weight | Line height | Recorded as |
|---|---|---:|---:|---:|---|
| Display hero | Nunito | 118px | 500 | 1.1 | Live hero on `https://whoscall.com`; use string "Nunito rounded display hero" |
| Body | Noto Sans | 16px | 400 | 1.5 | Live body copy; use string "Noto Sans body copy" |
| Pill button label | (face not named on the control) | 16px | 500 | 1.0 | Primary and secondary pills; use string "Pill button label" |
| Premium button label | (face not named on the control) | 16px | 400 | — | Premium control; font recorded as 16px / 400 |

Line heights stay unitless as recorded. Primary text renders in `#262626`.

### Assets

- A favicon / webclip entry is recorded in the source identity block. It is classified there as `type: favicon` and is not presented here as a separately published Gogolook brand-asset file.
- The published brand page documents logo usage. This contract does not attach a logo file URL to that documentation.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

Documented interactive states beyond the default are not present in the captured data. No specific hover, pressed, focus, or disabled values are documented. Those visual treatments are omitted. The source's instruction to derive later state treatments conservatively from the established palette is a qualitative constraint, not a value: keep any later treatment within the recorded green family and the light-green tint (`#E6FAEF`), preserve `#262626` text and fully-rounded pill geometry, and avoid alarm colors or hard borders. That constraint, and the reading that it belongs to the brand's friendly, low-pressure language, is a derived editorial implementation inference from the verified surfaces; it is not Gogolook-authored or taken from a separately published UI specification, including the published Whoscall Brand Guidelines.

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow the control's product role, not its primitive kind. This is not a complete state-coverage claim.

### Primary Download Pill

- Role: primary download call-to-action on `https://whoscall.com`
- Type: button
- Kind: interactive
- Anatomy: label
- Background: `#05F067`
- Text: `#262626`
- Border: none
- Radius: 100px
- Padding: 16px 32px
- Height: 56px
- Font: 16px / 500
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded as the default observation on the live marketing surface |
| hover | applicable | Pointer-web control; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | The entry can be held unavailable; visual treatment omitted |
| loading | not-applicable | A destination control that sends the reader to obtain the app; the control itself commits no operation that pends |
| error | not-applicable | Obtaining the app is navigation onward; the control reports no request or validation failure of its own |
| success | not-applicable | Reaching the download destination is navigation, not an action-outcome confirmation on this control |

### Secondary Demo Pill

- Role: secondary "demo" action sitting beside the primary download CTA
- Type: button
- Kind: interactive
- Anatomy: label
- Background: `rgba(255,255,255,0.8)`
- Text: `#262626`
- Border: none
- Radius: 100px
- Padding: 16px 32px
- Height: 56px
- Font: 16px / 500
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded as the default observation beside the download CTA |
| hover | applicable | Pointer-web control; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | The entry can be held unavailable; visual treatment omitted |
| loading | not-applicable | A destination control that sends the reader to the demo; the control itself commits no operation that pends |
| error | not-applicable | Reaching the demo is navigation onward; the control reports no request or validation failure of its own |
| success | not-applicable | Arriving at the demo is navigation, not an action-outcome confirmation on this control |

### Premium Button

- Role: premium / upgrade action on a soft light-green surface
- Type: button
- Kind: interactive
- Anatomy: label
- Background: `#E6FAEF`
- Text: `#262626`
- Border: none
- Radius: 40px
- Padding: 16px 32px
- Height: 57px
- Font: 16px / 400
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded as the default observation on the light-green tint surface |
| hover | applicable | Pointer-web control; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | The entry can be held unavailable; visual treatment omitted |
| loading | not-applicable | A destination control that sends the reader to the upgrade; the control itself commits no operation that pends |
| error | not-applicable | Reaching the upgrade is navigation onward; the control reports no request or validation failure of its own |
| success | not-applicable | Arriving at the upgrade is navigation, not an action-outcome confirmation on this control |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The composition reading in this section, including the qualitative scaling remarks and the reading that the named spacing steps are a machine-readable set drawn from the record's prose rather than a measured grid, is a derived editorial implementation inference from the verified surfaces; it is not Gogolook-authored or taken from a separately published UI specification, including the published Whoscall Brand Guidelines. The composition rests on a generous white ground that gives each element room to breathe, with the bright green CTA acting as the single visual destination on the page. Content is kept calm and uncluttered, so the eye moves from a large rounded Nunito hero down to a clear, tappable pill button. Hierarchy is one confident primary action, supported by a quieter secondary pill, rather than a wall of competing buttons.

Recorded geometry that the layout uses: button padding `16px 32px`; primary and secondary height 56px; premium height 57px; hero 118px. The named spacing steps `8 / 16 / 16 / 32 / 48 / 64` are the machine-readable set drawn from the record's prose, not a measured grid.

Specific breakpoint values are not documented in the captured data. The Nunito display face is recorded at 118px on large screens; Noto Sans body stays at 16px. Because the design depends on color fill rather than fine borders or dense shadow, the green CTA remains the clear focal point regardless of width. Those scaling remarks are qualitative; they are not cross-viewport specifications.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The voice reading below is a derived editorial implementation inference from the verified surfaces; it is not Gogolook-authored or taken from a separately published UI specification, including the published Whoscall Brand Guidelines. The voice is warm, reassuring, and plainly human — the tone of a trusted neighbor who is genuinely good at spotting scams. It reassures without alarming, choosing friendly confidence over fear-based urgency. Copy should feel approachable and protective at once: clear about safety, never preachy or technical for its own sake.

Where a security vendor might say "threat detected," Gogolook would rather say "we've got your back."

The captured brand page is the English path `/en/brand`.

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

- specific breakpoint values
- hover, pressed, focus, and disabled visual treatments
- motion duration, easing curve, animation name, transition properties, and reduced-motion behavior
- a type family on the pill and premium button labels
- a logo file URL for the brand-page logo documentation
