---
name: Just Eat
colors:
  brand-orange: '#ff8000'
  product-orange: '#f36805'
  interactive-primary: '#2b2a28'
  foreground-solid: '#242e30'
  container-default: '#ffffff'
  container-subtle: '#f6f3ef'
  container-strong: '#f0ece6'
  interactive-form: '#8c867e'
  focus-outer: '#2b3e97'
  link-distinct: '#3147ad'
  support-brand-03: '#c1dade'
typography:
  heading-xxl-wide:
    fontSize: 48px
    fontWeight: 1000
    lineHeight: 52px
    use: Live root --dt-font-heading-xxl-* tokens for wide screens; not a direct h1 size measurement.
  body-l:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
    use: Live --dt-font-body-l-* tokens; address input also measured at 16px/400 with 24px line height.
  search-button:
    fontSize: 20px
    fontWeight: 800
    lineHeight: 24px
    use: Measured Search button and its visible label.
  header-action:
    fontSize: 16px
    fontWeight: 800
    lineHeight: 20px
    use: Measured Log in and Become a courier header actions.
  footer-accordion:
    fontSize: 20px
    fontWeight: 900
    lineHeight: 24px
    use: Measured Top Cuisines trigger.
rounded:
  none: 0px
  a: 4px
  b: 8px
  c: 12px
  d: 16px
  f: 20px
  g: 24px
spacing:
  none: 0
  a-small: 2
  a: 4
  b: 8
  c: 12
  d: 16
  e: 24
  f: 32
  g: 40
  h: 56
  i: 64
  j: 80
components:
  search:
    type: button
    backgroundColor: '#2b2a28'
    textColor: rgba(255, 255, 255, 0.9)
    border: '1px solid #2b2a28'
    rounded: 800px
    height: 48px
    padding: 11px 24px
    typography: 20px / 800
    hover: bg and border color(srgb 0.235137 0.231529 0.224314)
    pressed: bg and border color(srgb 0.334902 0.331765 0.32549)
    focus: 'box-shadow: #ffffff 0px 0px 0px 2px, #2b3e97 0px 0px 0px 4px'
    use: Hero Search button, measured 111.7px wide. Pill radius is the computed 800px. Empty address; no form submitted. Raw states observed while the cookie banner remained open.
  log-in:
    type: button
    textColor: '#242e30'
    rounded: 800px
    height: 40px
    padding: 10px 16px
    typography: 16px / 800
    hover: bg color(srgb 0 0 0 / 0.04)
    pressed: bg color(srgb 0 0 0 / 0.12)
    focus: 'box-shadow: #ffffff 0px 0px 0px 2px, #2b3e97 0px 0px 0px 4px'
    use: 'Log in button, 103.8px wide; transparent at rest on the white #ffffff header. No activation or sign-in. Raw states observed while the cookie banner remained open.'
  courier:
    type: button
    textColor: '#242e30'
    rounded: 800px
    height: 40px
    padding: 10px 16px
    typography: 16px / 800
    hover: bg color(srgb 0 0 0 / 0.04)
    pressed: bg color(srgb 0 0 0 / 0.12)
    focus: 'box-shadow: #ffffff 0px 0px 0px 2px, #2b3e97 0px 0px 0px 4px'
    use: 'Become a courier is a link styled as a header action, aria-label Read about becoming a courier; 184.4px wide and transparent at rest on the white #ffffff header. Raw states observed while the cookie banner remained open.'
  top-cuisines:
    type: button
    textColor: rgba(0, 0, 0, 0.76)
    rounded: 0px
    height: 56px
    padding: 16px
    typography: 20px / 900
    hover: bg color(srgb 0 0 0 / 0.04)
    pressed: bg color(srgb 0 0 0 / 0.12)
    focus: 'box-shadow: #ffffff 0px 0px 0px 2px, #2b3e97 0px 0px 0px 4px'
    use: 'Top Cuisines footer accordion trigger, 869px wide; transparent at rest over the #f0ece6 footer. Collapsed state only; expansion was not activated. Raw states observed while the cookie banner remained open.'
fonts:
  roles:
    sans: JETSansDigital
---

# Design System Inspiration of Just Eat

## Overview

### Visual Theme & Atmosphere

Just Eat lets people order from restaurants, grocery stores and other local businesses. Its UK website terms identify the operator as **Just Eat.co.uk Ltd**, with a London registered office. [UK terms](https://www.just-eat.co.uk/terms-and-conditions) The group's [company history](https://www.justeattakeaway.com/about/our-story/) dates the original Just Eat business to Denmark in 2001 and its merger with Takeaway.com to 2020.

The measured homepage combines an orange food-photography hero, heavy white lettering and a charcoal Search pill. A white header carries compact icon-and-label actions; a pale blue app panel, warm neutral benefit section and cream footer extend the page below. These are observations of the [live UK homepage](https://www.just-eat.co.uk/), captured at 1440×1000 on 2026-11-02.

The current headline, “Stay just where you are”, matches the brand platform announced on **15 October 2026**. That announcement shifts emphasis towards the moments delivery lets people keep enjoying, and introduces an updated visual identity and an evolved Did Somebody Say mnemonic. This is the company's stated direction; the measured controls below describe the actual homepage implementation. [Official announcement](https://newsroom.justeattakeaway.com/en-GB/273370-just-eat-takeaway-com-says-stay-just-where-you-are-with-new-global-brand-platform/)

PIE is Just Eat Takeaway's global design system. Its colour guidance explicitly separates Brand orange from Product orange for interactive use. That distinction matters when recreating this style: an orange brand environment can contain a charcoal primary action. [What is PIE?](https://pie.design/all-about-pie/what-is-pie/), [Colour](https://pie.design/foundations/colour/)

### Brand Narrative

A delivery marketplace presents convenience through time people can keep for themselves. The observed expression joins food photography and orange surroundings with heavy type, simple instructions and compact charcoal/transparent controls. [Homepage](https://www.just-eat.co.uk/)

### Principles

PIE describes colour as a way to communicate hierarchy and interactive states, and cautions against conveying information through colour alone. In the measured interface, text labels, icons and a separate keyboard-focus ring work alongside colour. [Official colour principles](https://pie.design/foundations/colour/)

### Personas

No verified persona research was opened; no personas are asserted.

## Colors

The homepage census found 3,605 computed root properties and 3,742 declared properties across document and open shadow stylesheets. The selected colours below come from that homepage, rather than from the appearance of the documentation site.

| Role | Value | Raw homepage token / observed use |
|---|---|---|
| Brand orange | `#ff8000` | `--dt-color-support-brand-01`, `--dt-color-orange-30` |
| Product orange | `#f36805` | `--dt-color-interactive-brand`, `--dt-color-orange` |
| Primary interactive charcoal | `#2b2a28` | `--dt-color-interactive-primary`; Search fill and border |
| Foreground, solid alternative | `#242e30` | `--dt-color-content-default-solid`; measured header action text |
| Default container | `#ffffff` | `--dt-color-container-default`; white header |
| Subtle container | `#f6f3ef` | `--dt-color-container-subtle` |
| Strong container | `#f0ece6` | `--dt-color-container-strong`; measured behind Top Cuisines |
| Form colour | `#8c867e` | `--dt-color-interactive-form`; also present in the border census |
| Outer focus colour | `#2b3e97` | `--dt-color-focus-outer`; measured focus shadows |
| Distinct link colour | `#3147ad` | `--dt-color-content-link-distinct`; Receive stamps link |
| Support brand 03 | `#c1dade` | `--dt-color-support-brand-03`; pale blue also present in background census |

**Foreground is usually translucent on this page.** Paragraph ink was `rgba(0, 0, 0, 0.76)` in 12 paragraphs and `rgba(255, 255, 255, 0.9)` in five. Search's visible label also uses the latter. The solid foreground alternative above is a separate existing token, not a conversion of the paragraph colour. Alpha values remain in prose because the colour registry accepts opaque six-digit hex only.

PIE recommends Brand orange for such uses as logos and marketing backgrounds, and Product orange for interactive elements. Its guidance also requires content colours to be paired with the appropriate orange role. The hero's visible gradient was not extracted as a CSS gradient; its stops are therefore absent. [Official colour guidance](https://pie.design/foundations/colour/)

`--swiper-*` is excluded as a library namespace. Explicit third-party provider colours, Braze-named values and cookie-banner internals are not promoted into this product palette. Their raw declarations remain in the measurement report.

## Typography

### Evidence classes

- **Official product use:** PIE names **JET Sans Digital** as its primary family. It documents Arial as a fallback and PT Mono for code snippets; these documented purposes do not establish that either loaded on this homepage. [Typography](https://pie.design/foundations/typography/)
- **Live-loaded:** the census contains one loaded face, `JETSansDigital 100 1000 oblique 0deg 20deg`. The body and button CSS stacks begin with `JETSansDigital`; the h1 stack begins with `JetSansDigital`. Case differences are preserved in the raw evidence. The family token in this reference contains only JETSansDigital.
- **Official distributed assets observed in homepage CSS:** Digital is served as `JETSansDigital-VF-optimised-extended.woff2`, declared for weights `100 1000` and oblique `0deg 20deg`. Homepage CSS also declares `JETSansDisplay-ExtraBlackItalic-optimised-extended.woff2` as `JETSansDisplay`, weight 1000, italic. Both URLs use `pie-design-system-cdn.production.jet-external.com/fonts/`. The Display face was **not loaded** and receives no specimen.
- **Declared-only:** `--dt-font-family-alternative` and its `--xds-*` counterpart name `JETSansVF2`; the code-family tokens name `PTMono`. Arial also appears in the fallback stack and a font-family token. None appears in the census's loaded-face list. No specimen is assigned to these faces.
- **Unresolved:** the relationship between JETSansVF2 and the loaded Digital face, Display's actual product use, and font redistribution/licensing were not established. **Substitute: none chosen.**

### Measured metrics and available scale

| Style | Size / weight / line height | Evidence |
|---|---|---|
| XXL heading, wide token | 48px / 1000 / 52px | `--dt-font-heading-xxl-size--wide`, `--dt-font-heading-xxl-weight`, `--dt-font-heading-xxl-line-height--wide`; not a direct h1 size reading |
| Body L token | 16px / 400 / 24px | `--dt-font-body-l-size`, `--dt-font-body-l-weight`, `--dt-font-body-l-line-height` |
| Search label | 20px / 800 / 24px | Computed control and visible child label |
| Log in; Become a courier | 16px / 800 / 20px | Computed controls |
| Full address input | 16px / 400 / 24px | Computed input |
| Receive stamps | 14px / 400 / 20px | Computed link |
| Top Cuisines trigger | 20px / 900 / 24px | Computed trigger and visible child label |

The weight range describes the loaded variable face declaration; the control rows show actual computed weights. PIE's typography guidance reserves italic treatment for suitable brand moments and excludes functional CTAs from that treatment. [Typography guidance](https://pie.design/foundations/typography/)

## Layout

The desktop page places the wordmark at the left of a white header and partner/courier/account actions at the right. The hero has left-aligned copy and location search beside a large food image. Below it are ordering instructions, an app promotion, three benefit panels and an expanded multi-column footer. This sequence is visible in the full-page capture.

Keep the input's inner 24px text line distinct from its 56px surrounding label. The Search pill is 48px high inside the larger search assembly; header actions are 40px high. These separate dimensions are more useful than treating every row as one generic input or button.

The live `--dt-spacing-*` aliases provide: none 0; a-small 2px; a 4px; b 8px; c 12px; d 16px; e 24px; f 32px; g 40px; h 56px; i 64px; j 80px. The measured controls use 16px and 24px horizontal padding in the contexts described above.

### Responsive Behavior

Only the desktop homepage was measured. PIE's responsive illustration shows heading-L at 28px/32px above 768px and 24px/32px below 768px. The captured homepage tokens instead resolve heading-L to 28px/32px wide and **24px/28px narrow** (`--dt-font-heading-l-size--narrow`, `--dt-font-heading-l-line-height--narrow`). Keep this documentation/token difference explicit; no mobile viewport was tested. [Responsive type guidance](https://pie.design/foundations/typography/)

## Elevation & Depth

The four exported controls have no resting shadow. Focus uses the two sharp shadow spreads described in §4. The live root also contains `--dt-elevation-card`:

```css
0px 0px 1px 0px rgba(0,0,0,0.12),0px 1px 5px 0px rgba(0,0,0,0.04),0px 0px 4px 0px rgba(0,0,0,0.1)
```

This establishes an available foundation value, not a measured shadow on a particular card. Rounded foundation aliases a/b/c/d/f/g are 4/8/12/16/20/24px. Alias e is `50rem`; the measured Search and header actions compute to an 800px pill radius.

## Motion & Easing

The Search control's raw computed `transition` is:

```text
border-color, background-color, color 0.15s, 0.15s, 0.15s cubic-bezier(0, 0, 0.3, 1), cubic-bezier(0, 0, 0.3, 1), cubic-bezier(0, 0, 0.3, 1) 0s, 0s, 0s
```

It exposes a 0.15s duration with `cubic-bezier(0, 0, 0.3, 1)`. Log in, the courier link, the address input, Receive stamps and Top Cuisines each report `all 0s ease 0s` on the measured element. This does not describe transitions on descendants, ancestors or untested surfaces. No scroll or campaign animation timing is inferred.

---

First-party context: [company history](https://www.justeattakeaway.com/about/our-story/), [UK website terms](https://www.just-eat.co.uk/terms-and-conditions), [PIE](https://pie.design/), [typography](https://pie.design/foundations/typography/), [colour](https://pie.design/foundations/colour/), [October 2026 brand announcement](https://newsroom.justeattakeaway.com/en-GB/273370-just-eat-takeaway-com-says-stay-just-where-you-are-with-new-global-brand-platform/). Live measurements: homepage survey `20261102-113658` and states `20261102-113914`; full provenance and capture limitations are in verification.md.

## Components

These are raw observations from one states capture. The cookie banner remained visible; its reject action reads **“Necessary only”**. No consent was accepted. The Search, Log in, courier and accordion crops identify the intended controls; their pointer states matched `:hover` and `:active`, and keyboard focus matched `:focus-visible`.

| Control | Rest identity | Hover | Pressed | Keyboard focus |
|---|---|---|---|---|
| Search | 111.7×48px; radius 800px; padding 11px 24px; 20px/800, line 24px; `#2b2a28` fill and 1px border; white at 90% | Fill and border `color(srgb 0.235137 0.231529 0.224314)` | Fill and border `color(srgb 0.334902 0.331765 0.32549)` | White 2px and blue 4px shadow spreads |
| Log in | 103.8×40px; radius 800px; padding 10px 16px; 16px/800, line 20px; transparent on white, fg `#242e30`, no border | Black at 4% background | Black at 12% background | Same two-shadow ring |
| Become a courier, a link | 184.4×40px; otherwise same geometry and colours as Log in | Black at 4% background | Black at 12% background | Same two-shadow ring |
| Top Cuisines | 869×56px; radius 0; padding 16px; 20px/900, line 24px; transparent over `#f0ece6`; black at 76%, no border | Black at 4% background | Black at 12% background | Same two-shadow ring |

The focus treatment is authored **box-shadow**, not a browser `auto` outline:

```css
box-shadow: #ffffff 0px 0px 0px 2px, #2b3e97 0px 0px 0px 4px;
```

Both shadows have zero blur and zero offset. The outer blue shadow extends to 4px; the inner white shadow occupies the first 2px. The four controls returned to their baseline after blur. All four had `box-shadow: none` and `outline: none` at rest.

The **address input** itself is 448.3×24px, radius 0, padding 0, transparent, with black-at-76% ink and no border. Its surrounding survey label is 480.3×56px, radius 12px and padding 16px. Hover, pressed and keyboard focus produced no change across the compared input, its pseudos and three ancestor levels; this is a bounded observation, not a claim about every possible visual effect. It is absent from component tokens because all measured states were unchanged.

**Receive stamps** (`href="#stampCards"`) is a 96.9×20px underlined link, radius 0, padding 0, 14px/400, fg `#3147ad`, transparent on white. Tab focus measured radius 2px and the same dual shadow. Hover and pressed were **UNMEASURED**: the tool reported the `pie-link[Receive stamps]` host covering the target. Its focus crop is obscured, so the link is retained as raw prose evidence rather than a component token. No card link was identified in the survey.

### States

Search lightens both fill and border on hover and pressed. Log in, the courier link and Top Cuisines add 4% then 12% black backgrounds. Their keyboard-focus ring is a white/blue box-shadow that clears after blur. The address reading was unchanged within scope; Receive stamps pointer states remain unmeasured. No disabled, expanded, submitted or validation state was measured. Cookie-banner buttons are excluded.

## Do's and Don'ts

- Keep Brand orange and Product orange as distinct roles; use the measured charcoal treatment when recreating this Search action.
- Preserve the heavy control weights: 800 for Search and header actions, 900 for the measured footer trigger.
- Preserve the white inner separation and blue outer focus shadow on these controls.
- Keep opacity-bearing foreground values as alpha colours over their real surfaces.
- Do not turn the unchanged input reading into an invented focus state, or infer card interaction states from static benefit panels.
- Do not treat Swiper blue, external-provider colours or cookie buttons as the product's primary palette/components.

## Voice & Tone

The homepage pairs an invitation to stay put with direct task labels: Search, Full address and Log in. The official campaign frames delivery around preserving enjoyable moments. For a reference implementation, combine that relaxed invitation with short, concrete interface instructions. This is a reading of the observed copy, not a separately verified tone-of-voice manual. [Official campaign](https://newsroom.justeattakeaway.com/en-GB/273370-just-eat-takeaway-com-says-stay-just-where-you-are-with-new-global-brand-platform/)

## Agent Prompt Guide

“Build a Just Eat-style ordering landing page using the verified JETSansDigital family. Pair an orange brand environment (`#ff8000`) with white surfaces, warm `#f6f3ef` / `#f0ece6` sections, and a `#c1dade` app panel. Use a 48px-high charcoal `#2b2a28` Search pill with 20px/800 text at 90% white, 11px 24px padding, and the measured white/blue keyboard-focus shadows. Keep header action links and buttons at 40px high, 16px/800, with 4% black hover and 12% black pressed backgrounds.”

The exact hero gradient and any unavailable face are outside this prompt's verified values.
