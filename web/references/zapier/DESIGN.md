---
name: Zapier
colors:
  primary: '#ff4f00'
  canvas: '#fffefb'
  ink: '#201515'
  body: '#605d52'
  ink-muted: '#36342e'
  surface-soft: '#f8f4f0'
  divider: '#eceae3'
  sand: '#c5c0b1'
  on-primary: '#fffefb'
typography:
  display:
    fontSize: 56px
    fontWeight: 500
    lineHeight: 1
    use: Observed public-marketing h1
  heading:
    fontSize: 48px
    fontWeight: 500
    lineHeight: 1
    use: Observed public-marketing h2
  body:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    use: Repeated public-marketing body and list content
  action:
    fontSize: 18px
    fontWeight: 600
    use: 48px public marketing actions
  code-control:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    use: Observed code-copy control only
rounded:
  icon: 2px
  control: 4px
  card: 8px
  header-pill: 18px
spacing:
  xs: 4
  sm: 6
  md: 8
  control: 10
  lg: 12
  xl: 16
  xxl: 24
  section: 32
components:
  marketing-primary-action:
    type: button
    backgroundColor: '#ff4f00'
    textColor: '#fffefb'
    border: '1px solid #ff4f00'
    rounded: 4px
    padding: 12px 24px
    height: 48px
    typography: 18px / 600 / Inter
    states: focus, hover, and pressed observed
    use: Public home and customer-support marketing action; representative home::[data-omd-capture="25"]
  marketing-dark-action:
    type: button
    backgroundColor: '#201515'
    textColor: '#fffefb'
    border: '1px solid #201515'
    rounded: 4px
    padding: 12px 24px
    height: 48px
    typography: 18px / 600 / Inter
    states: focus, hover, pressed, selected, and tab-selected observed
    use: Public marketing action across all supplied surfaces; representative home::[data-omd-capture="22"]
  header-sign-up:
    type: button
    backgroundColor: '#ff4f00'
    textColor: '#fffefb'
    border: '1px solid #ff4f00'
    rounded: 18px
    padding: 6px 12px
    height: 36px
    typography: 14px / 600 / Inter
    states: focus, hover, and pressed observed
    use: Compact public header sign-up action across supplied surfaces; representative home::[data-omd-capture="10"]
    hover: '#fe4f00'
    pressed: '#fd4e00'
    focus: '#fd4f00'
  product-gallery-tab:
    type: tab
    backgroundColor: transparent
    textColor: '#201515'
    border: 0px
    rounded: 0px
    padding: 10px 16px
    typography: 14px / 600 / Inter
    states: selected and tab-selected observed
    use: Selected public home gallery tab; representative home::[data-omd-capture="26"]
  pricing-menu-option:
    type: tab
    backgroundColor: transparent
    textColor: '#36342e'
    rounded: 4px
    padding: 8px 12px
    typography: 16px / 400 / Inter
    states: expanded and menu-open observed
    use: Pricing menu option after the captured menu interaction; representative surface-2::[data-omd-interaction-capture="menu-0-1"]
fonts:
  roles:
    ui: Inter
    display: Degular Display
    mono: JetBrains Mono
---

# Design System Inspiration of Zapier

## Overview

### Visual Theme & Atmosphere

Zapier is an automation platform that connects apps, data, and processes so teams can build and run workflows where they already work. Its public marketing surfaces give that broad infrastructure role a human, energetic expression: a warm-cream field, coffee-dark text, one emphatic orange, and display typography that turns large claims into approachable signposts. That visual language stems from the 2022 rebrand, when Zapier described the orange platform mark and Degular typeface as ways to represent the possibilities its customers set in motion. The current capture covers only the public home, pricing, and customer-support solution pages; it does not establish an authenticated editor, product dashboard, or Help-center design system.

- **Warm contrast:** `#fffefb` canvas with `#201515` ink is the repeated public-marketing base.
- **Single decisive accent:** `#ff4f00` appears on high-priority public actions and header sign-up.
- **Role-led type:** Inter carries repeated UI content; loaded Degular Display carries public headings.
- **Compact geometry:** current repeated controls are 4px-rounded, with a distinct 18px header sign-up pill.
- **Domain boundary:** marketing, pricing, solution pages, Help/docs chrome, and authenticated product UI are separate evidence domains.

### Primary tasks

- Find out what the platform automates before signing up
- See each product on offer from the home page
- Compare the pricing plans before choosing one
- Sign up for an account from the site header

### Brand Narrative

Zapier describes itself as automation infrastructure that connects apps, data, and processes, and says its mission is to make automation work for everyone. The 2022 rebrand translated that product role into an orange platform mark, a new Degular brand typeface, and a system intended to tell customers’ stories of possibility. The current public pages retain the warm-cream, coffee-ink, orange, and display-led expression documented above, while the authenticated product remains outside this evidence set.

### Principles

1. **Make automation legible.** Present the outcome and the connected work plainly.
   *UI implication:* prefer a single, specific action label over an abstract slogan.
2. **Keep the human in the loop.** Zapier’s public values emphasize empathy and feedback.
   *UI implication:* make review, edit, and support paths clear when a workflow needs judgment.
3. **Use brand energy selectively.** Orange and display type are strong public signals, not a substitute for hierarchy.
   *UI implication:* give the primary action the orange role; let warm neutrals carry structure.

### Personas

The following are stakeholder groups, not synthetic scored personas. Zapier’s own public materials address businesses and teams working across existing apps and processes.

- **Workflow builder:** connects tools and data into repeatable work.
- **Team operator:** needs an understandable automation outcome without leaving the systems already in use.
- **Business owner or lead:** evaluates automation by time saved, reliability, and fit with the team’s stack.

## Colors

### Selector-backed public-marketing roles

- **Zapier Orange** (`#ff4f00`): filled primary action background and header sign-up border across the supplied marketing surfaces.
- **Warm Canvas** (`#fffefb`): repeated public page and card surface; also the label color on dark and orange actions.
- **Coffee Ink** (`#201515`): dominant public text, border, and dark-action background.
- **Body Brown** (`#605d52`): repeated supporting text and tab-label color.
- **Muted Ink** (`#36342e`): pricing menu-option text.
- **Soft Cream** (`#f8f4f0`): observed local public surface, not an authenticated-product canvas claim.
- **Divider** (`#eceae3`) and **Sand** (`#c5c0b1`): observed borders and menu/control containment.

The capture includes anti-aliased neighboring orange and ink values; they are not promoted into a semantic scale. Help-center chrome, product integrations, social-brand icons, and third-party app colors are likewise outside this token set.

## Typography

### Evidence classes

- **Official brand/product-use:** Zapier’s rebrand announcement names Degular as its new brand typeface. That establishes brand context, not a blanket rule for every product surface.
- **Live computed public-web use:** Inter is loaded with high confidence and 1,161 visible uses across the three supplied marketing pages. DegularDisplay is likewise loaded with high confidence and 24 visible heading uses; rendered computed samples resolve to `Degular Display`. JetBrains Mono is loaded with high confidence for six code-control uses.
- **Official font and licence context:** Adobe Fonts lists Degular and directs additional licensing/services to OH no Type Co. That is a typeface licensing boundary, not permission to redistribute Zapier’s loaded files.
- **System and declared-only:** Arial is an observed system family on a small set of form elements. `DegularDisplay Fallback`, `Inter Fallback`, `JetBrains Mono Fallback`, and `Serrif Fallback` are declarations without visible use. `Serrif` itself is loaded for a few headings, but this evidence does not identify it as GT Alpina; it remains unnamed and is not a token.
- **Unobserved domains:** no authenticated product page or documentation chrome was captured, so no product-UI or Help-UI family is inferred.

### Measured public-marketing hierarchy

| Role | Family | Size | Weight | Line height | Evidence boundary |
|---|---|---:|---:|---:|---|
| Display | Degular Display | 56px | 500 | 56px | public h1 samples |
| Heading | Degular Display | 48px | 500 | 48px | public h2 samples |
| Body | Inter | 16px | 400 | 24px | repeated body/list content |
| Primary action | Inter | 18px | 600 | normal | 48px public action selectors |
| Code copy control | JetBrains Mono | 14px | 400 | 21px | home code-copy selector only |

## Layout

The supplied public pages repeatedly use a compact 4px ladder in control spacing: 4, 6, 8, 10, 12, 16, 24, and 32px all appear in the capture. Larger layout grids, maximum widths, and responsive breakpoints were not measured here and are omitted. The 18px header pill is a local utility shape; 4px is the more repeated action geometry in this public-marketing sample.

### Responsive Behavior

Responsive behavior was not captured as a separate viewport comparison. The only safe statement is that the supplied public pages contain compact 36px header sign-up and 48px marketing-action variants; mobile collapse, touch targets, and breakpoint thresholds remain unverified.

## Elevation & Depth

Public containment comes primarily from warm surface contrast and 1px borders. The capture records no reusable drop-shadow token. Do not convert the observed local backgrounds or anti-aliased borders into a generalized elevation scale.

## Motion & Easing

No motion timing, easing curve, or reduced-motion rule was measured in the supplied evidence. Do not infer a motion system from static or pseudo-state snapshots.

---

**Verified:** 2026-07-13
**Tier 1 sources:** https://zapier.com/, https://zapier.com/pricing, https://zapier.com/solutions/customer-support, https://zapier.com/blog/zapiers-new-look/, https://zapier.com/about, https://help.zapier.com/hc/en-us/articles/37518970271245-What-is-Zapier
**Tier 2 sources:** https://getdesign.md/zapier/design-md, https://styles.refero.design/?q=Zapier
**Conflicts unresolved:** none

## Components

All variants below are selector-backed public-marketing observations from the supplied capture. They are not a reconstructed Zapier product component library. State labels record the collector’s captured pseudo/interacted states only; no transition duration, disabled behavior, or unobserved variant is inferred.

### Marketing actions

**Primary orange action**
- Background: `#ff4f00`
- Text: `#fffefb`
- Border: `1px solid #ff4f00`
- Radius: `4px`
- Padding: `12px 24px`
- Height: `48px`
- Font: `18px / 600 / Inter`
- Hover: observed at `home::[data-omd-capture="25"]::state-hover`
- Pressed: observed at `home::[data-omd-capture="25"]::state-pressed`
- Focus: observed at `surface-3::[data-omd-capture="11"]::state-focus`
- Use: public home and customer-support action; default evidence `home::[data-omd-capture="25"]`

**Dark marketing action**
- Background: `#201515`
- Text: `#fffefb`
- Border: `1px solid #201515`
- Radius: `4px`
- Padding: `12px 24px`
- Height: `48px`
- Font: `18px / 600 / Inter`
- Hover: observed at `surface-3::[data-omd-capture="15"]::state-hover`
- Pressed: observed at `surface-3::[data-omd-capture="15"]::state-pressed`
- Focus: observed at `surface-3::[data-omd-capture="15"]::state-focus`
- Use: public marketing action across home, pricing, and customer-support; default evidence `home::[data-omd-capture="22"]`

**Header sign-up**
- Background: `#ff4f00`
- Text: `#fffefb`
- Border: `1px solid #ff4f00`
- Radius: `18px`
- Padding: `6px 12px`
- Height: `36px`
- Font: `14px / 600 / Inter`
- Hover: `rgb(254, 79, 0)` at `home::[data-omd-capture="10"]::state-hover`
- Focus: observed at `surface-3::[data-omd-capture="10"]::state-focus`
- Pressed: captured for this selector family
- Use: compact public header action across the supplied marketing surfaces; default evidence `home::[data-omd-capture="10"]`

### Public selection controls

**Selected product-gallery tab**
- Background: transparent
- Text: `#201515`
- Border: `0px`
- Radius: `0px`
- Padding: `10px 16px`
- Font: `14px / 600 / Inter`
- Selected: `aria-selected="true"` at `home::[data-omd-capture="26"]`
- Use: selected home product-gallery tab; its unselected sibling is separately observed at `home::[data-omd-capture="27"]`

**Pricing menu option**
- Background: transparent
- Text: `#36342e`
- Radius: `4px`
- Padding: `8px 12px`
- Font: `16px / 400 / Inter`
- Expanded: observed after the pricing menu interaction
- Menu-open: `surface-2::[data-omd-interaction-capture="menu-0-1"]`
- Use: option within the captured pricing menu, not a general tab token

### States

Only selected, expanded/menu-open, hover, pressed, and focus states were observed in the supplied capture. Empty, loading, error, success, skeleton, and disabled-system behavior were not established as a reusable public pattern and should be designed from the target product’s own requirements.

## Do's and Don'ts

### Do

- Use the warm public pair of `#fffefb` canvas and `#201515` ink when following these marketing observations.
- Reserve `#ff4f00` for selector-backed high-priority public actions.
- Pair Inter UI copy with loaded Degular Display only for observed public display roles.
- Keep an observed component’s surface and state provenance alongside its values.

### Don't

- Treat these marketing, pricing, and solution-page values as authenticated-editor or Help-center tokens.
- Substitute a system font for a named loaded family, or rename `Serrif` to GT Alpina without source corroboration.
- Invent a universal pill, shadow, hover color, error state, or responsive breakpoint from this capture.
- Promote third-party app/logo colors into the Zapier palette.

## Voice & Tone

Zapier’s official About page frames its mission as making automation work for everyone and publishes values including default to action, transparency, feedback, empathy, and building the robot. Its public product definition speaks directly about connecting apps, data, and processes so teams can build where they work. Use direct, enabling language that describes an outcome and the work it removes; avoid claiming capabilities or product mechanics not present in the task.

### Do

- Lead with a concrete workflow outcome.
- Prefer plain, active verbs such as connect, automate, build, and run.
- Make space for users of varying technical backgrounds.

### Don't

- Overstate automation as magical without explaining the work it enables.
- Turn brand language into a claim about an unverified product feature.

## Agent Prompt Guide

Use this reference as a public-marketing starting point only: warm cream `#fffefb`, coffee ink `#201515`, orange `#ff4f00`, Inter UI text, and Degular Display for measured public headings. Keep a 4px action radius for the recorded 48px action, or 18px only for the compact header sign-up. Do not claim the result matches Zapier’s logged-in automation editor or Help-center chrome.

## Governance

### Known Gaps

- **Contrast, `marketing-primary-action`.** Text `#fffefb` on `#ff4f00` measures 3.27:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `header-sign-up`.** Text `#fffefb` on `#ff4f00` measures 3.27:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `product-gallery-tab`.** Text `#201515` on `#00000000` measures 1.18:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `pricing-menu-option`.** Text `#36342e` on `#00000000` measures 1.69:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
