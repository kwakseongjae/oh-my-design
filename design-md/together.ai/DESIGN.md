---
name: Together AI
colors:
  primary: '#000000'
  canvas: '#ffffff'
  tab-cyan: '#c8f6f9'
  tab-lavender: '#e2e1fe'
typography:
  display:
    fontSize: 64px
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: '-1.92px'
    use: Observed marketing h1
  body:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.25
    use: Observed public marketing, about, and brand body/list text
  action:
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0.08px
    use: Observed compact public action
  label:
    fontSize: 11px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.055px
    use: Observed public mono label
rounded:
  none: 0px
  control: 4px
  container: 8px
spacing:
  xs: 4
  sm: 6
  md: 8
  lg: 16
  xl: 20
  xxl: 40
components:
  primary-action:
    type: button
    backgroundColor: '#000000'
    textColor: '#ffffff'
    rounded: 4px
    padding: 8px 16px
    height: 40px
    typography: 16px / 500 PP Neue Montreal Mono
    states: hover, focus, and pressed captured for selector; no common state value promoted
    use: Public compact action at home::[data-omd-capture=20]
    hover: rgba(0, 0, 0, 0.984)
    pressed: rgba(0, 0, 0, 0.97)
    focus: rgba(0, 0, 0, 0.992)
  secondary-action:
    type: button
    backgroundColor: rgba(0, 0, 0, 0.08)
    textColor: '#000000'
    rounded: 4px
    padding: 16px
    typography: 16px / 500 PP Neue Montreal Mono
    states: hover, focus, and pressed captured for selector
    use: Public light-surface action at home::[data-omd-capture=22]
    hover: rgba(0, 0, 0, 0.082)
    pressed: rgba(0, 0, 0, 0.082)
    focus: rgba(0, 0, 0, 0.082)
  selected-tab-cyan:
    type: tab
    backgroundColor: '#c8f6f9'
    textColor: '#000000'
    rounded: 4px
    padding: 4px 0px
    height: 72px
    typography: 16px / 400 The Future
    states: selected and tab-selected observed
    use: Home tab at home::[data-omd-capture=29]
  tab-panel:
    type: card
    backgroundColor: '#ffffff'
    textColor: '#000000'
    rounded: 8px
    padding: 16px 16px 16px 40px
    use: Home tab panel at home::#tabs-0-panel-0 (role tabpanel)
  research-card:
    type: card
    backgroundColor: rgba(255, 255, 255, 0.08)
    textColor: '#ffffff'
    rounded: 4px
    padding: 20px 40px
    use: Home research card at home::div.research-card
  disabled-slider-arrow:
    type: button
    backgroundColor: rgba(255, 255, 255, 0.12)
    textColor: '#ffffff'
    rounded: 4px
    size: 40px
    states: disabled observed
    use: Disabled home carousel arrow at home::[data-omd-capture=38]
fonts:
  roles:
    ui: The Future
    label: PP Neue Montreal Mono
---

# Design System Inspiration of Together AI

## Overview

### Visual Theme & Atmosphere

Together AI describes itself as the AI Native Cloud: a full-stack platform for production AI built on systems research. Its official material ties that work to open and responsible development, helping teams ship faster, scale reliably, and improve unit economics. The public web language recorded on 13 July 2026 turns that infrastructure message into a stark, editorial surface: black actions and type on white, a large geometric display face, and small monospace control language. The official brand guide says The Future is the headline-and-body typeface and identifies the logo plus three colour families as its visual foundation. [About](https://www.together.ai/about-us) · [Brand](https://www.together.ai/brand)

The supplied runtime evidence covers only the public home, About, and Brand pages. It shows the recurring black/white structure, The Future in visible reading and display roles, and PP Neue Montreal Mono in compact public actions and labels. Cyan and lavender were observed only on particular selected home tabs; they are retained with their selectors rather than generalized into a complete semantic palette. An authenticated console, API UI, and the separately hosted documentation chrome were not captured, so this reference does not claim their tokens or component rules.

**Key Characteristics:**
- Officially positioned as a full-stack, research-led production AI platform
- Black `#000000` public action treatment and white `#ffffff` canvas in the supplied capture
- The Future for visible display/body use; PP Neue Montreal Mono for observed action/label use
- Compact 4px controls, 8px tab panels, and no observed box shadows on the retained components
- Selector-specific cyan and lavender selected-tab surfaces, not an inferred universal palette

### Primary tasks

- Run, train, and serve open-source AI models on the platform
- Learn what the platform does and who it is built for
- Read why the founders wanted an open AI ecosystem

### Brand Narrative

Together AI’s first-party material frames the company around open and decentralized alternatives for AI infrastructure. In its 2023 seed announcement, co-founder and CEO Vipul Ved Prakash wrote that the founders saw the costs of GPU clusters concentrating foundation models within a small number of companies and wanted an open ecosystem to remain viable. [Seed announcement](https://www.together.ai/blog/seed-funding)

The current About page expresses that direction as the AI Native Cloud: a full-stack production-AI platform powered by systems research. It identifies Vipul Ved Prakash, Ce Zhang, Chris Ré, Tri Dao, and Percy Liang among its founders and lists open development, efficiency, curiosity, and model stewardship among its values. [About](https://www.together.ai/about-us)

### Principles

1. **Open and responsible development.** *UI implication:* describe model and platform choices plainly; do not imply a closed-only ecosystem. [About](https://www.together.ai/about-us)
2. **Empower innovation.** *UI implication:* make the next developer/researcher action direct and legible rather than decorative. [About](https://www.together.ai/about-us)
3. **Do more with less.** *UI implication:* retain the captured flat, compact public chrome instead of adding unsupported ornament. [About](https://www.together.ai/about-us)
4. **Model stewardship.** *UI implication:* do not make unsupported safety, performance, or product-state claims. [About](https://www.together.ai/about-us)

### Personas

Together AI’s official pages name developers, researchers, and teams as audiences for its platform. No first-party persona research, named user archetypes, or role-specific workflow evidence was supplied, so fictional personas are intentionally not created here. [Careers](https://www.together.ai/careers) · [Docs overview](https://docs.together.ai/intro)

## Colors

### Observed public web colours

- **Primary action / ink** (`#000000`): computed on the retained compact black action and repeated public text/border observations.
- **Canvas / on-dark text** (`#ffffff`): observed page and tab-panel canvas plus inverse action/card text.
- **Selected tab cyan** (`#c8f6f9`): observed only on `home::[data-omd-capture="29"]` while selected.
- **Selected tab lavender** (`#e2e1fe`): observed only after a recorded home-tab interaction at `home::[data-omd-interaction-capture="tab-1-0"]`.
- **Light secondary fill** (`rgba(0, 0, 0, 0.08)`): observed on the selector-specific public secondary action.
- **Dark secondary fill** (`rgba(255, 255, 255, 0.12)`): observed on the public research-card action and disabled carousel arrow.

### Brand and domain boundary

Together AI’s official Brand page calls its three foundational colour families general-purpose brand colours, but the public text extraction did not expose stable numeric values for that artwork. They are therefore not added as machine tokens. The separate documentation overview establishes product capability context—running, training, and serving open-source models—but its Mintlify chrome is not a source for the marketing tokens above. [Brand](https://www.together.ai/brand) · [Docs overview](https://docs.together.ai/intro)

## Typography

### Evidence classes

- **Official brand / product-use — The Future:** Together AI explicitly calls The Future its primary headline and body typeface and describes it as a homage to Futura. [Brand](https://www.together.ai/brand)
- **Live computed surface-use + FontFaceSet/source corroboration — The Future:** 957 visible uses across the three supplied public surfaces, with four Together-hosted `.woff2` source URLs for light, regular, medium, and bold files.
- **Live computed surface-use + FontFaceSet/source corroboration — PP Neue Montreal Mono:** 134 visible uses, including public buttons and headings, with six Together-hosted `.woff2` source URLs. Pangram Pangram’s official Neue Montreal site identifies the family; that does not create a redistribution grant for Together’s served files. [Neue Montreal](https://neuemontreal.com/)
- **Declared-only — The Future Mono:** four Together-hosted `@font-face` source files were declared, but no visible computed use was recorded. It is not a UI token.
- **Declared-only — swiper-icons and webflow-icons:** asset faces with no visible computed use; not UI tokens.
- **License boundary:** Together’s brand page and Terms do not publish a font licence or redistribution permission for these webfont files. Treat them as site-delivery assets; do not extract or redistribute them.

### Observed hierarchy

| Role | Family | Size | Weight | Line Height | Tracking | Evidence boundary |
|------|--------|------|--------|-------------|----------|-------------------|
| Marketing display | The Future | 64px | 500 | 70.4px | -1.92px | Captured public `h1` |
| Public body/list | The Future | 16px | 400 | 20px | normal | Repeated public text/list roles |
| Compact action | PP Neue Montreal Mono | 16px | 500 | 16px | 0.08px | Selector-specific public actions |
| Mono label | PP Neue Montreal Mono | 11px | 500 | 15.4px | 0.055px | Public label role |

## Layout

The recorded home evidence establishes a compact public control rhythm rather than a complete application grid: 4px control corners, 8px tab-panel corners, 4px/6px/8px/16px/20px/40px spacing values, and a 40px compact action height. The selected tab panel uses asymmetric `16px 16px 16px 40px` padding; research cards use `20px 40px`. These are component observations, not a mandate for separate product or documentation layouts.

### Responsive Behavior

No responsive breakpoint or mobile layout claim is retained: the supplied evidence records desktop-style computed components and two tab interactions, not a responsive audit. Preserve the observed 40px compact action and 72px tab measurements only in their captured public contexts.

## Elevation & Depth

The retained components report `box-shadow: none`. Separation is provided by black/white contrast, translucent white or black fills, and the 4px/8px geometry. No general elevation scale is claimed.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.none`: `none`

## Motion & Easing

The supplied evidence records interaction kinds and selected/disabled outcomes, but no duration, easing, transition, or reduced-motion values. No motion tokens are claimed.

---

**Verified:** 2026-07-13
**Tier 1 sources:** https://www.together.ai/ (marketing computed styles + FontFaceSet), https://www.together.ai/about-us (corporate-marketing computed styles + official context), https://www.together.ai/brand (official brand guidance + computed styles), https://docs.together.ai/intro (documentation context only), https://www.together.ai/careers, https://www.together.ai/blog/seed-funding
**Tier 2 sources:** https://getdesign.md/together.ai/design-md (independent, explicitly not affiliated); https://styles.refero.design/style/461da0f0-fde6-46bc-8137-7eca006260a8 (independent style reference)
**Conflicts unresolved:** none

Tier 2 agrees on the black/white, pastel-tab, sharp-corner direction but does not override the supplied selector-level Tier 1 measurements.

## Components

### Public actions

**Compact black action**
- Background: `#000000`
- Text: `#ffffff`
- Radius: 4px
- Padding: 8px 16px
- Height: 40px
- Font: 16px / 500 / PP Neue Montreal Mono
- Use: `home::[data-omd-capture="20"]`; hover, focus, and pressed were captured for this selector, but no shared state value is promoted.

**Light secondary action**
- Background: `rgba(0, 0, 0, 0.08)`
- Text: `#000000`
- Radius: 4px
- Padding: 16px
- Font: 16px / 500 / PP Neue Montreal Mono
- Use: `home::[data-omd-capture="22"]`; hover, focus, and pressed were captured for this selector.

**Research-card action**
- Background: `rgba(255, 255, 255, 0.12)`
- Text: `#ffffff`
- Radius: 4px
- Padding: 16px
- Font: 16px / 500 / PP Neue Montreal Mono
- Use: `home::[data-omd-capture="40"]`, class `btn … is-secondary-dark`.

### Home tab treatment

**Selected cyan tab**
- Background: `#c8f6f9`
- Text: `#000000`
- Radius: 4px
- Padding: 4px 0px
- Height: 72px
- Font: 16px / 400 / The Future
- Use: selected home tab `home::[data-omd-capture="29"]`; selected/tab-selected state recorded.

**Selected lavender tab**
- Background: `#e2e1fe`
- Text: `#000000`
- Radius: 4px
- Padding: 4px 0px
- Height: 72px
- Font: 16px / 400 / The Future
- Use: interaction-captured selected home tab `home::[data-omd-interaction-capture="tab-1-0"]`; selector-specific, not a general tab variant.

**Tab panel**
- Background: `#ffffff`
- Text: `#000000`
- Radius: 8px
- Padding: 16px 16px 16px 40px
- Use: selected home panel `home::#tabs-0-panel-0`.

### Research and disabled control

**Research card**
- Background: `rgba(255, 255, 255, 0.08)`
- Text: `#ffffff`
- Radius: 4px
- Padding: 20px 40px
- Font: 16px / 400 / The Future
- Use: home `div.research-card`; no shadow was computed.

**Disabled carousel arrow**
- Background: `rgba(255, 255, 255, 0.12)`
- Text: `#ffffff`
- Radius: 4px
- Size: 40px
- Font: 16px / 400 / The Future
- Use: disabled home slider arrow `home::[data-omd-capture="38"]`, class containing `swiper-button-disabled`.

### States

Only one state is retained from the supplied computed evidence: a disabled public carousel arrow with `rgba(255, 255, 255, 0.12)` background, white text, 4px radius, and 40px size at `home::[data-omd-capture="38"]`. The home capture also records selected/tab-selected tab transitions. Empty, loading, error, success, quota, and authenticated product states were not observed and are not invented.

## Do's and Don'ts

### Do

- Use The Future only when it is available through a valid licence; keep its observed public display/body roles distinct from the mono label face.
- Keep the recorded public action treatment compact: 4px corners, black/white contrast, and mono action text.
- Treat cyan and lavender as the documented home-tab observations, with their selector/surface boundaries intact.
- Use flat containment where the retained components show `box-shadow: none`.

### Don't

- Do not substitute a system font and label it The Future or PP Neue Montreal Mono.
- Do not infer console, authenticated API, or Mintlify documentation components from the public marketing capture.
- Do not turn the selector-specific cyan/lavender tab fills into a general semantic colour system.
- Do not reintroduce the uncorroborated legacy blue primary, universal navy token, or subpixel pricing-tab values.

## Voice & Tone

Together AI’s official language is direct, research-led, and open-community oriented: “Building the AI Native Cloud” and a full-stack platform for production AI. Its About page pairs delivery language—helping teams ship faster and scale reliably—with values including open and responsible development, empowerment of innovation, and model stewardship. [About](https://www.together.ai/about-us)

**Voice samples**
- *“Build what’s next on the AI Native Cloud”* — public home proposition. <!-- verified: together.ai home, 2026-07-13 -->
- *“Run, train, and serve open-source AI models on Together AI.”* — official documentation overview. <!-- verified: docs.together.ai/intro, 2026-07-13 -->
- *“We design a full-stack AI platform powered by cutting edge system research.”* — official mission statement. <!-- verified: together.ai/about-us, 2026-07-13 -->

## Agent Prompt Guide

Design a public Together AI-inspired marketing section with a white canvas, black compact mono actions, The Future only when licensed, 4px control geometry, and flat surfaces. Use the documented cyan or lavender only for selector-specific selected tabs, not as a generic product palette. Do not invent authenticated-console, documentation, form-error, or motion patterns from this reference.

## Governance

### Known Gaps

- **Contrast, `secondary-action`.** Text `#000000` on `#00000014` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `research-card`.** Text `#ffffff` on `#ffffff14` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `disabled-slider-arrow`.** Text `#ffffff` on `#ffffff1f` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
