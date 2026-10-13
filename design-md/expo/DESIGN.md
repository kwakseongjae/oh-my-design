---
name: Expo
colors:
  primary: '#000000'
  canvas: '#f0f0f3'
  surface: '#ffffff'
  foreground: '#1c2024'
  muted: '#60646c'
  subtle: '#80838d'
  on-primary: '#ffffff'
  hairline: '#e0e1e6'
  control-border: '#d9d9e0'
  link: '#0d74ce'
typography:
  hero:
    fontSize: 64px
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: '-3px'
    use: Current marketing hero heading
  section:
    fontSize: 48px
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: '-2px'
    use: Repeated marketing section heading
  subheading:
    fontSize: 32px
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: '-0.5px'
    use: Marketing subheading
  body:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.4
    use: Repeated marketing body and list text
  action:
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.4
    use: Compact action label
  code:
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.6
    use: Observed code-oriented marketing text
rounded:
  dialog: 8px
  action: 36px
  hero-action: 48px
  full: 9999px
spacing:
  xs: 4
  sm: 8
  md: 12
  lg: 16
  xl: 24
  xxl: 32
components:
  header-primary:
    type: button
    backgroundColor: '#000000'
    textColor: '#ffffff'
    rounded: 36px
    padding: 0 16px
    height: 36px
    typography: 14px / 500 / Inter
    states: 'hover and pressed observed; pressed background #010101'
    use: Repeated header conversion action across the three marketing surfaces
    pressed: '#010101'
  pricing-action:
    type: button
    backgroundColor: '#000000'
    textColor: '#ffffff'
    rounded: 32px
    padding: 0 12px
    height: 32px
    typography: 12px / 500 / Inter
    states: 'hover background #010101 and pressed background #030304 observed'
    use: Pricing-surface compact action that opens a dialog
    hover: '#010101'
    pressed: '#030304'
  pricing-dialog:
    type: dialog
    rounded: 8px
    shadow: rgba(0,0,0,0.1) 0px 10px 20px, rgba(0,0,0,0.05) 0px 3px 6px
    typography: 16px / 400 / Inter
    states: dialog-open observed
    use: Observed pricing dialog panel; fill was not promoted because the captured panel is transparent
fonts:
  roles:
    ui: Inter
    mono: JetBrains Mono
---

# Design System Inspiration of Expo

## Overview

### Visual Theme & Atmosphere

Expo is a React Native framework and cloud-services platform for shipping apps across native and web targets. Its current public marketing pages make that infrastructure feel calm and usable: black conversion actions, off-white planes, blue-gray text, and generous rounded geometry put capability ahead of decorative brand theatre. The three captured pages—home, services, and pricing—share the same light marketing system, while the official brand guidelines describe the intended character as simple, spacious, consistent, universally approachable, and technically excellent. Expo’s 2026 company story also extends from a framework foundation toward AI-native universal-app development and Expo Agent; that product evolution is context, not a substitute for a UI token. Documentation chrome, authenticated product UI, native clients, and brand-asset rules are separate domains and are not inferred from this marketing capture.

**Key characteristics:**
- Light canvas with near-black, muted blue-gray, and white structural contrast
- Solid black 32–48px actions, with 36px compact header actions
- Inter for general UI and JetBrains Mono for sparse code-oriented text
- Rounded action geometry and an 8px observed pricing-dialog panel
- A neutral, technical presentation that leaves product screenshots and code to carry detail

### Primary tasks

- Ship an app to native and web targets from one framework.
- Build, submit, and update an app through cloud services.
- Start building for free and develop against a real device.
- Compare pricing plans and find the enterprise path.

### Brand Narrative

Expo describes itself as crafting a universal way to write and distribute apps. Its official About page dates the company’s founding to 2015 and positions its work around helping creators and enterprises build and publish apps; it also identifies Expo as a React Foundation founding member with ambitions for AI-native universal apps. The public home page gives that story a product shape: a React Native framework plus cloud services for building, deploying, updating, and observing applications.

The current evolution is explicit in Expo’s April 2026 first-party funding post: the company raised a $45 million Series B and introduced Expo Agent while explaining a broader effort to make app creation easier and faster. This narrative is company and product context, not evidence that the marketing UI’s measured tokens apply to authenticated EAS dashboards or native Expo clients.

### Principles

1. **Universal application delivery.** Expo’s public product message spans Android, iOS, and web. *UI implication:* explain cross-platform capability with product evidence, not platform-specific visual invention.
2. **Neutral, reliable foundations.** The official brand manifesto explicitly contrasts Expo’s foundation with more expressive platform design languages. *UI implication:* prefer the observed quiet light hierarchy over decorative color.
3. **Simple, spacious, consistent presentation.** These are first-party brand-guideline goals. *UI implication:* retain measured spacing and rounded-action roles; do not manufacture a full grid.
4. **Concrete developer operations.** EAS documentation describes build, submit, update, workflow, hosting, and observability services. *UI implication:* use concise, task-oriented labels rather than generic benefit copy.

### Personas

The first-party public material identifies two supported audience groups without inventing named personas:

- **Creators and individual developers:** the About page says Expo helps creators build and publish apps; the home page offers a free starting path and device-oriented development tools.
- **Enterprise teams:** the About page includes enterprises, while the home page and pricing surface provide an enterprise path and EAS services for application lifecycle work.
- **Existing React Native teams:** EAS documentation describes deeply integrated cloud services for Expo and React Native apps, including build, submission, update, workflow, hosting, and observability needs.

## Colors

- **Primary action** (`#000000`): observed as the filled header, hero, and compact pricing action.
- **Canvas** (`#f0f0f3`) and **surface** (`#ffffff`): current light marketing planes.
- **Foreground** (`#1c2024`): repeated body and control text.
- **Muted** (`#60646c`) and **subtle** (`#80838d`): repeated secondary and lower-emphasis text/border values.
- **On-primary** (`#ffffff`): text on the black actions.
- **Hairline** (`#e0e1e6`) and **control border** (`#d9d9e0`): observed light containment values.
- **Link** (`#0d74ce`): repeated link-colored text and borders across all three captured marketing surfaces.

The collector also saw local blue and green values. They are not promoted to brand or semantic roles because this packet does not link a representative element to a stable Expo-wide meaning.

## Typography

### Evidence classes

- **Live marketing surface-use:** Inter was both computed and loaded for 990 visible uses from first-party `static.expo.dev` WOFF2 sources. It is the UI family for this reference.
- **Live code-oriented surface-use:** JetBrains Mono was both computed and loaded for six visible uses from first-party WOFF2 sources. It is retained as the mono family, not as general UI type.
- **Official font/license context:** Inter’s author distributes it under SIL OFL 1.1; JetBrains Mono is likewise OFL 1.1 and available for commercial and non-commercial use. These licenses describe the fonts, not an Expo-exclusive asset.
- **Declared-only:** none in the supplied bundle.
- **Unresolved:** `ui-monospace` appeared twice without a matching loaded FontFace; it is not a token or substitute.

| Role | Font | Size | Weight | Line Height | Tracking | Evidence use |
|------|------|------|--------|-------------|----------|--------------|
| Hero | Inter | 64px | 600 | 1.10 | -3px | Current marketing hero heading |
| Section | Inter | 48px | 600 | 1.10 | -2px | Repeated marketing section heading |
| Subheading | Inter | 32px | 600 | 1.10 | -0.5px | Marketing subheading |
| Body | Inter | 14px | 400 | 1.40 | normal | Repeated body and list text |
| Action | Inter | 14px | 500 | 1.40 | normal | Compact action label |
| Code-oriented | JetBrains Mono | 12px | 500 | 1.60 | normal | Observed code-oriented marketing text |

## Layout

The bundle’s repeated spacing values form a small working scale: 4, 8, 12, 16, 24, and 32px. The official brand guidance supports the observed spacious, consistent presentation, but the collector did not establish a formal grid, maximum width, or responsive breakpoint. Treat those unmeasured layout rules as absent rather than extrapolating a system.

Observed rounded values are role-specific: 36px compact actions, 48px hero actions, 32px compact pricing actions, and an 8px dialog panel. `9999px` also appears in a small number of marketing controls, but no single generic pill component is promoted from it.

### Responsive Behavior

No viewport comparison is included in the supplied collector evidence. Responsive breakpoints, collapsed navigation, touch-target policy, and mobile component variants are therefore unresolved and omitted.

## Elevation & Depth

Most captured actions are flat. The only promoted elevation is the open pricing dialog panel: `rgba(0,0,0,0.1) 0px 10px 20px, rgba(0,0,0,0.05) 0px 3px 6px`. No generic card, hover, or modal-overlay shadow token is established by this packet.

## Motion & Easing

The supplied evidence records interaction states but no transition duration, easing curve, or reduced-motion rule. Motion tokens are unresolved and omitted.

---

**Verified:** 2026-07-13
**Tier 1 sources:** https://expo.dev/ · https://expo.dev/services · https://expo.dev/pricing · https://expo.dev/brand · https://expo.dev/about · https://docs.expo.dev/eas/
**Tier 2 sources:** https://getdesign.md/expo/design-md (independent analysis; examined) · https://styles.refero.design/?q=Expo (query attempted; endpoint returned an internal error)
The getdesign dark-theme summary was resolved in favor of the current inspectable first-party light surfaces and was not used as token authority.

**Conflicts unresolved:** none

## Components

### Header primary action

**Default**
- Background: `#000000`
- Text: `#ffffff`
- Radius: `36px`
- Padding: `0px 16px`
- Height: `36px`
- Font: `14px / 500 / Inter`
- Use: Repeated header conversion action across home, services, and pricing

Hover and pressed states were captured; the pressed selector resolves to `#010101` background. Evidence: `home::[data-omd-capture="9"]` and `home::[data-omd-capture="9"]::state-pressed` on the `home` marketing surface.

### Hero actions

**Primary**
- Background: `#000000`
- Text: `#ffffff`
- Radius: `48px`
- Padding: `0px 24px`
- Height: `48px`
- Font: `16px / 500 / Inter`
- Use: Home marketing hero primary action

**Secondary**
- Background: `#f0f0f3`
- Text: `#1c2024`
- Radius: `48px`
- Padding: `0px 24px`
- Height: `48px`
- Font: `16px / 500 / Inter`
- Use: Home marketing hero secondary action

Evidence: `home::[data-omd-capture="11"]` (primary) and `home::[data-omd-capture="12"]` (secondary), both on `home`. No unobserved state variant is added.

### Pricing compact action

**Default**
- Background: `#000000`
- Text: `#ffffff`
- Radius: `32px`
- Padding: `0px 12px`
- Height: `32px`
- Font: `12px / 500 / Inter`
- Use: Compact pricing action that opens a dialog

Hover resolves to `#010101`; pressed resolves to `#030304`. Evidence: `surface-3::[data-omd-capture="23"]`, `::state-hover`, and `::state-pressed` on `https://expo.dev/pricing`.

### Pricing dialog panel

**Open**
- Radius: `8px`
- Shadow: `rgba(0,0,0,0.1) 0px 10px 20px, rgba(0,0,0,0.05) 0px 3px 6px`
- Font: `16px / 400 / Inter`
- Use: Pricing dialog panel after the compact action opens it

Evidence: `surface-3::[data-omd-interaction-capture="dialog-0-1"]` with `dialog-open`. The captured panel is transparent, so no fill token is invented.

### States

The public pricing surface exposes a dialog-open interaction, documented in §4. No authenticated project, build, form-validation, loading, error, empty, success, skeleton, or disabled state was captured; those product states are not specified here.

## Do's and Don'ts

### Do

- Use the observed light canvas, white surface, near-black text, and black conversion-action hierarchy together.
- Keep header, hero, and compact pricing actions in their separately measured 36px, 48px, and 32px geometries.
- Use Inter for general marketing UI and reserve JetBrains Mono for evidence-backed code-oriented text.
- Preserve the close black hover and pressed values only for the compact pricing action where they were captured.

### Don't

- Do not turn a locally observed green or blue value into a global Expo semantic token without element-level evidence.
- Do not substitute `ui-monospace` for JetBrains Mono; its two computed uses lacked a loaded FontFace match.
- Do not infer inputs, cards, authenticated dashboard controls, native app components, or responsive breakpoints from this marketing-only bundle.
- Do not treat the official brand asset page or documentation chrome as a source for these marketing component measurements.

## Voice & Tone

The official home page frames Expo around building, deploying, and iterating on apps, while EAS documentation names concrete services such as Build, Submit, Update, Workflows, and Hosting. The current voice is direct, technical, and action-led: short service labels and practical imperative calls such as “Get started for free,” “Read the docs,” and “Talk to our team.” The brand guidelines add a useful boundary: simple, approachable, and technically excellent rather than ornamental.

## Agent Prompt Guide

Use only the observed system: a `#f0f0f3` canvas, `#1c2024` text, `#60646c` supporting text, black actions with white labels, and Inter. Pick the action geometry by its observed context: 36px header, 48px hero, or 32px compact pricing. Use the 8px dialog panel and its measured shadow only for a pricing-dialog-like overlay. Do not add error, success, input, card, or mobile rules from this reference.
