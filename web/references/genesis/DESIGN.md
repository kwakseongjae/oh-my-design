---
name: Genesis
colors:
  primary: '#111111'
  on-primary: '#ffffff'
  foreground: '#535356'
  on-primary-ultimate: '#f5f5f5'
  on-surface-mid: '#69696e'
  model-card-bg: '#000000'
  muted: '#929296'
  secondary: '#af6249'
  fixed-grey50: '#7f7f85'
  primary-pressed: '#252527'
  primary-mid: '#ceced0'
  primary-hover: '#3a3a3c'
typography:
  button:
    fontSize: 16px
    fontWeight: 400
    use: Text action link; 24px line height.
  nav:
    fontSize: 14px
    fontWeight: 400
    use: Boutique header link; its measured line height is 24px.
  tab:
    fontSize: 19px
    fontWeight: 400
    use: Unselected model tabs; 26px line height.
  body:
    fontSize: 15px
    fontWeight: 400
    use: 'Largest paragraph character count: 1510; 24px line height. Also the filled CTA label.'
  caption:
    fontSize: 12px
    fontWeight: 400
    use: Small paragraph and country/language control; text census line height 20px.
  tab-selected:
    fontSize: 19px
    fontWeight: 500
    use: Selected ALL model tab; 26px line height.
  tab-sm:
    fontSize: 16px
    fontWeight: 500
    use: Header All tab; GenesisSansHeadKr, 24px line height; no header-panel interaction was tested.
  label:
    fontSize: 14px
    fontWeight: 500
    use: Footer privacy-policy link; 22px line height.
  card-title:
    fontSize: 22px
    fontWeight: 400
    use: Model-card title; label is GenesisSansHeadKr, 34px line height in text census.
  label-lg:
    fontSize: 18px
    fontWeight: 400
    use: Quote-link title; 26px line height in text census.
  heading:
    fontSize: 40px
    fontWeight: 300
    use: 'h2 text: 64 characters, 54px line height.'
  heading-sm:
    fontSize: 32px
    fontWeight: 300
    use: 'h3 text: 27 characters, 44px line height.'
  display:
    fontSize: 48px
    fontWeight: 300
    use: 'h2 hero text: 14 characters, 62px line height.'
rounded:
  none: 0px
  card: 4px
  button: 2px
components:
  news-cta:
    type: button
    backgroundColor: '#111111'
    textColor: '#ffffff'
    rounded: 2px
    height: 48px
    padding: 0px 24px
    typography: 15px / 400
    hover: '#3a3a3c'
    pressed: '#252527'
    focus: '::before appears: border 1px solid rgb(255, 255, 255), 228px x 36px'
    use: A link labelled 뉴스룸 바로가기; filled dark action on the white news section. Keyboard focus adds an internal white border; browser auto outline is not exported.
  nav-boutique:
    type: button
    textColor: '#ffffff'
    rounded: 0px
    height: 24px
    padding: 0px
    typography: 14px / 400
    hover: 'fg #ceced0'
    pressed: 'fg #ceced0'
    use: A header link labelled 부티크, transparent over hero imagery; hover and pressed grey its text. Browser auto focus outline is not exported.
  suv-tab:
    type: tab
    textColor: '#929296'
    rounded: 0px
    height: 54px
    padding: 0px 60px
    typography: 19px / 400
    hover: 'fg #111111'
    pressed: 'fg #111111'
    use: SUV category tab on the white model section; hover and pressed darken the label. Browser auto focus outline is not exported.
  quote-link:
    type: button
    textColor: '#f5f5f5'
    rounded: 0px
    height: 80px
    padding: 0px 40px
    typography: 18px / 400
    hover: 'ancestor up1.bg: rgb(17, 17, 17) -> rgb(37, 37, 39); ancestor up1.tf: none -> matrix(1, 0, 0, 1, 0, -2)'
    pressed: 'ancestor up1.bg: rgb(17, 17, 17) -> rgb(37, 37, 39); ancestor up1.tf: none -> matrix(1, 0, 0, 1, 0, -2)'
    use: A link labelled 견적 내기 on a dark parent panel; the visible title is 18px. Hover and pressed recolour and lift that parent panel; transparent link background is omitted.
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    sans: GenesisSansTextKr
    display: GenesisSansHeadKr
---

# Design System Inspiration of Genesis

## Overview

### Visual Theme & Atmosphere

Genesis (제네시스) presents luxury cars through a design philosophy combining athleticism and elegance. Its official brand page defines that design as bold, progressive and distinctly Korean. The same page describes a lifestyle ambition that extends beyond time on the road into everyday life. That is an expansion of the brand experience, rather than evidence of a website rebrand.

The measured homepage is the Korean edition (`genesis.com/kr/ko`, HTML language `ko`). The viewport places a car film behind white navigation and a light headline; the model section below uses a white field and large photographic cards. For a recreation, let vehicle imagery carry the atmosphere and keep interface typography and controls restrained. These are observations of this homepage, not official web design principles.

Primary tasks visible in the capture are exploring models, requesting a quote, reserving a test drive, reading news and discovering brand spaces.

### Brand Narrative

The official brand page says the brand seeks opportunities to accompany people in everyday life as well as on the road. The measured homepage places model discovery alongside brand spaces, events and boutique content. That combination gives the reference a lifestyle dimension as well as a vehicle catalogue; it does not establish a separately published digital design system.

### Principles

Design interpretation from the capture: use imagery as the main expressive surface, light headings for hierarchy and a darker filled action for a section-level destination. No official web interface principles were verified.

### Personas

No research-backed personas were verified.

## Colors

Measured opaque colours exported as tokens:

| Token | Value | Observed role |
|---|---|---|
| primary | `#111111` | Filled newsroom CTA background; quote-panel background; also the SUV tab hover and pressed ink. |
| on-primary | `#ffffff` | Newsroom CTA label, boutique navigation and model-card title; the screenshot also shows the white page field. |
| foreground | `#535356` | Most frequent paragraph ink: 33 paragraphs, distinct from the darker control text. |
| on-primary-ultimate | `#f5f5f5` | Quote-link label and SVG ink; CSS --on-primary-ultimate. Also the most frequent census background (64 elements). |
| on-surface-mid | `#69696e` | Rendered text tone (59 elements), named by the site’s --on-surface-mid property; no specific section role is inferred. |
| model-card-bg | `#000000` | Black endpoint in the model-card ::before gradient scrim, not a solid card fill. |
| muted | `#929296` | Unselected SUV tab text. |
| secondary | `#af6249` | Rendered text (10 elements), named by the site’s --secondary property; no hover role was established. |
| fixed-grey50 | `#7f7f85` | Footer Home breadcrumb ink (survey row); the same value is declared as --fixed-grey50. |
| primary-pressed | `#252527` | Pressed newsroom CTA and hovered/pressed quote-panel background. |
| primary-mid | `#ceced0` | Boutique navigation hover and pressed ink; the site also declares --primary-mid. |
| primary-hover | `#3a3a3c` | Newsroom CTA hover background. |

The primary colour here is the measured filled action, not a claim that black is the only corporate brand colour. Browser link blue is not exported. The census also found `#fafafb` on three text elements, but their role was not resolved, so it is omitted from tokens. Carousel arrows have `rgba(245, 245, 245, 0.8)` backgrounds; alpha values stay in prose.

### Declared in the site's CSS, not seen painted

These first-party colour declarations are not exported as tokens. This lists root colour candidates from the compiler; RGB channel mirrors and non-colour properties are in the report.

| CSS property | Value |
|---|---|
| `--badge-container` | `#f0e6e3` |
| `--badge-container-grey` | `#e8eaeb` |
| `--badge-container-red` | `#ffedee` |
| `--badge-container-ultimate` | `#eee4e1` |
| `--badge-container-yellow` | `#fbecda` |
| `--badge-on-container-grey` | `#4a565e` |
| `--badge-on-container-red` | `#d4000e` |
| `--badge-on-container-ultimate`, `--secondary-high`, `--secondary-spectrum-60` | `#7d4837` |
| `--badge-on-container-yellow` | `#ab5800` |
| `--grey-spectrum-10`, `--on-primary-highest`, `--on-surface-container-low`, `--outline-low`, `--primary-low`, `--primary-spectrum-10`, `--surface-container-low`, `--surface-mid` | `#eaeaeb` |
| `--grey-spectrum-30`, `--primary-spectrum-30`, `--surface-container-high`, `--surface-highest` | `#b7b7ba` |
| `--grey-spectrum-5`, `--primary-spectrum-5` | `#efeff0` |
| `--secondary-highest`, `--secondary-spectrum-90` | `#3b2119` |
| `--secondary-low`, `--secondary-spectrum-20` | `#e5cdc5` |
| `--secondary-lowest`, `--secondary-spectrum-10` | `#f2e9e6` |
| `--secondary-mid`, `--secondary-spectrum-40` | `#ba8575` |
| `--secondary-spectrum-100`, `--secondary-ultimate` | `#24140f` |
| `--secondary-spectrum-30` | `#cfa99d` |
| `--secondary-spectrum-5` | `#f7f2f0` |
| `--secondary-spectrum-70` | `#5c3528` |
| `--secondary-spectrum-80` | `#4d2b20` |
| `--state-red` | `#ef303d` |

## Typography

### Evidence classes

- **Official product use:** no explicit font specification was verified in the opened company pages.
- **Live-loaded:** `GenesisSansHeadKr` at 300, 400 and 500; `GenesisSansTextKr` at 400, 500 and 700. The 500 Head face points at the same Regular file as the 400 face; do not infer a separate medium font asset.
- **Official distributed assets:** the live CSS references WOFF2, WOFF and TTF files under `https://common-static.auto-hmg.com/fonts/genesis/`. This establishes delivery for the live page; no redistribution license or separate public font package was verified.
- **Declared-only:** `swiper-icons` has an embedded font-face declaration but is absent from the loaded-face list. The CSS fallback stack is not promoted to a brand family.
- **Unresolved:** font licensing and any separate design manual. Substitute: none chosen.

### Measured scale

| Role | Size / weight | Use |
|---|---|---|
| button | 16px / 400 | Text action link; 24px line height. |
| nav | 14px / 400 | Boutique header link; its measured line height is 24px. |
| tab | 19px / 400 | Unselected model tabs; 26px line height. |
| body | 15px / 400 | Largest paragraph character count: 1510; 24px line height. Also the filled CTA label. |
| caption | 12px / 400 | Small paragraph and country/language control; text census line height 20px. |
| tab-selected | 19px / 500 | Selected ALL model tab; 26px line height. |
| tab-sm | 16px / 500 | Header All tab; GenesisSansHeadKr, 24px line height; no header-panel interaction was tested. |
| label | 14px / 500 | Footer privacy-policy link; 22px line height. |
| card-title | 22px / 400 | Model-card title; label is GenesisSansHeadKr, 34px line height in text census. |
| label-lg | 18px / 400 | Quote-link title; 26px line height in text census. |
| heading | 40px / 300 | h2 text: 64 characters, 54px line height. |
| heading-sm | 32px / 300 | h3 text: 27 characters, 44px line height. |
| display | 48px / 300 | h2 hero text: 14 characters, 62px line height. |

The compiler’s most-common family for some sizes describes the inherited element style, not its visible label. The model-card title is Head 22px/400; the link itself inherits Text 16px/400. Icon-only buttons inherit 13.3333px/400 and the footer logo link inherits 24px/700; neither is a visible text-size recommendation.

## Layout

The desktop viewport is 1440×1000. The header logo starts at x=50px, and the first hero action and model section align to the same 50px left inset. CSS declares a 1680px content maximum and a twelve-column desktop grid. These are declared layout rules, not a measurement at the maximum width. The full-page screenshot has unrevealed scroll-entry content; its blank areas are not spacing specifications.

### Responsive Behavior

Only desktop was rendered; CSS declares a four-column mobile grid and twelve-column tablet grid, but their visual behavior was not measured.

## Elevation & Depth

The first viewport layers white labels over moving vehicle imagery. No reusable shadow scale was verified.

## Motion & Easing

The SUV tab’s own computed transition is `color 0.25s ease 0s`. The measured link elements report `all 0s ease 0s`; their descendants and ancestors can animate, so that string does not establish an absence of motion for the whole control. No general duration or easing scale was established.

## Components

- **Newsroom CTA:** link, 240×48px, 2px radius, `0px 24px` padding, 15px/400. Background #111111, label #ffffff, no rest border or shadow. Hover #3a3a3c; pressed #252527. Focus draws a 228×36px pseudo-element with a 1px white border inside the button.
- **Boutique navigation:** transparent link, 38.6×24px, square, no padding, Head 14px/400. White label becomes #ceced0 on hover and pressed. It sits over the hero image.
- **SUV category tab:** 155.3×54px, square, `0px 60px` padding, Text 19px/400. Transparent on the white section. Its label changes from #929296 to #111111 on hover and pressed.
- **Quote utility:** transparent link, 317×80px, square, `0px 40px` padding. The link inherits Text 16px/400, while the visible title is 18px/400 in #f5f5f5. Its parent panel changes from #111111 to #252527 and moves up 2px on hover and pressed. The exported component retains the compiler’s visible-title font.

### Prose-only controls

The model-card link is 370×497px with a 4px radius, no padding and a white 22px/400 title above photographic imagery. The inherited anchor colour is browser blue; the visible title is white. Hover and pressed are UNMEASURED. The compiled focus movement of the carousel track is ambiguous: it comes from comparison against after-blur carousel motion, while the original rest comparison reports only an auto outline. No card component is exported from that evidence.

The event “자세히 보기” link is 98.1×24px, square, no padding, Text 16px/400, transparent with #111111 ink. Hover and pressed are UNMEASURED. Keyboard focus only records the browser’s auto ring, so it is prose only.

Numeric corner tokens are 0 (square controls), 2px (filled CTA) and 4px (model card). The survey’s 50% radii belong to circular carousel direction controls and are not numeric radius tokens.

### States

The exported changes are the newsroom CTA’s separate hover and pressed backgrounds and inner focus border, boutique navigation ink, SUV tab ink, and the quote panel’s background plus upward movement. Other focus observations are browser `outline-style: auto`; they do not create a brand focus colour. Entrance opacity and transform changes that remain after blur are excluded. No disabled states were measured. UNMEASURED pointer states do not establish an absence of effects.

## Do's and Don'ts

- Use the loaded Head and Text families for their measured roles.
- Keep text actions visually lighter than the filled newsroom CTA.
- Preserve the difference between declared colours and colours observed on controls.
- Do not infer a complete mobile system or semantic status palette from this desktop homepage.

## Voice & Tone

Observed task labels are direct: “견적 내기”, “시승 예약하기” and “뉴스룸 바로가기”. The hero copy “시대를 앞선 선택을 위해” adds an aspirational line above the practical model links. This describes the captured copy, not a formal voice guide.

## Agent Prompt Guide

Build a vehicle-led Korean automotive landing page with white text over a full-width hero film, light GenesisSansHeadKr headings, GenesisSansTextKr body copy and a white model-browsing section. Use the measured controls and type scale in this reference; do not invent a replacement font or add unverified semantic colours.
