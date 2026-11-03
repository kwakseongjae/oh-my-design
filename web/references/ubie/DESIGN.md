---
name: Ubie
colors:
  primary: '#3959cc'
  accent: '#e34b83'
  canvas: '#ffffff'
  foreground: '#3d4454'
  hero-foreground: '#20242c'
  muted-foreground: '#6d727e'
  secondary-button-foreground: '#333333'
  surface: '#f5f5f5'
  surface-subtle: '#fafafa'
  vitals-foreground: '#32353a'
  vitals-muted-foreground: '#686a6d'
  placeholder: '#96989a'
  disabled-foreground: '#dcdddd'
  border: '#c5c6c7'
  secondary-button-border: '#cccccc'
  blue-inverse-darken: '#283f91'
  green-inverse: '#27cc91'
  red-inverse: '#e32e55'
  red-foreground: '#a1213c'
  red-background: '#fceff2'
  green-foreground: '#1c9167'
  green-background: '#e9faf4'
  blue-background: '#f0f2fc'
  blue-border: '#8296df'
  on-primary: '#ffffff'
typography:
  button:
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.4
    use: Measured 44px action links, computed Open Sans family
  navigation:
    fontSize: 14px
    fontWeight: 900
    lineHeight: 1.2
    use: Header Ubieについて link
  header-label:
    fontSize: 12px
    fontWeight: 700
    use: Visible child labels in the 80px header action links
rounded:
  none: 0px
  xs: 2px
  sm: 4px
  md: 8px
  lg: 12px
  xl: 16px
  xxl: 24px
  full: 9999px
spacing:
  xxs: 4
  xs: 8
  sm: 12
  md: 16
  lg: 24
  xl: 40
  xxl: 64
components:
  primary-news:
    type: button
    backgroundColor: '#3959cc'
    textColor: '#ffffff'
    rounded: 12px
    height: 44px
    padding: 0px 24px
    typography: 14px / 700
    hover: opacity 0.9
    pressed: opacity 0.9
    focus: 'outline 2px solid #3959cc; outline-offset 2px'
    use: もっと見る — a link to /news on the white News section; computed family Open Sans, line-height 19.6px; border and shadow none. Hover and press keep the computed fill and ink, fading the whole link.
  secondary-care:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#333333'
    border: '1px solid #cccccc'
    rounded: 12px
    height: 44px
    padding: 0px 20px
    typography: 14px / 700
    hover: 'fg #3959cc; border 1px solid #3959cc'
    pressed: 'fg #3959cc; border 1px solid #3959cc'
    focus: 'outline 2px solid #3959cc; outline-offset 2px'
    use: 医療機関の方はこちら — a hero link to https://intro.dr-ubie.com/; computed family Open Sans, line-height 19.6px, shadow none. The label and arrow turn blue; the white background remains.
  header-contact:
    type: button
    backgroundColor: '#3959cc'
    textColor: '#ffffff'
    rounded: 0px
    height: 80px
    padding: 0px
    typography: 12px / 700
    hover: opacity 0.9
    pressed: opacity 0.9
    focus: 'outline 2px solid #3959cc; outline-offset 2px'
    use: お問合せ — an 88px-wide header link to /inquiry with a 20px icon and a white child label at 12px/700. The anchor itself is 16px/400 with 24px line-height; border and shadow none.
  header-recruit:
    type: button
    backgroundColor: '#e34b83'
    textColor: '#ffffff'
    rounded: 0px
    height: 80px
    padding: 0px
    typography: 12px / 700
    hover: opacity 0.9
    pressed: opacity 0.9
    focus: 'outline 2px solid #3959cc; outline-offset 2px'
    use: 採用情報 — a 90px-wide header link to https://recruit.ubie.life/ with a 20px icon and white child label at 12px/700. The anchor itself is 16px/400 with 24px line-height; border and shadow none.
  nav-about:
    type: button
    textColor: '#3d4454'
    rounded: 0px
    height: 20px
    padding: 0px
    typography: 14px / 900
    hover: 'fg #3959cc'
    pressed: 'fg #3959cc'
    focus: 'outline 2px solid #3959cc; outline-offset 2px'
    use: Ubieについて — a transparent header navigation link on white, 93.9px wide, Noto Sans JP, line-height 16.8px and tracking 0.7px; border and shadow none.
  news-card:
    type: card
    textColor: '#3d4454'
    rounded: 0px
    height: 375px
    padding: 0px
    typography: 16px / 400
    hover: 'title paragraph fg #3959cc'
    pressed: 'title paragraph fg #3959cc'
    focus: 'outline 2px solid #3959cc; outline-offset 2px'
    use: 'First News card, /news/notice-20261019 — a transparent link on the white section, 437.3px wide. fg describes the visible title paragraph; the anchor own color is #1a1a1a and its date is #6d727e. Wrapper border and shadow none; thumbnail surface #f5f5f5.'
fonts:
  roles:
    sans: Noto Sans JP
    display: Open Sans
    supporting: Lato
---

# Design System Inspiration of Ubie (ユビー)

## Overview

### Visual Theme & Atmosphere

Ubie is a Japanese healthcare company founded in May 2017 by physician **阿部 吉倫** and engineer **久保 恒太**. Its symptom search service helps consumers find related conditions, ways of responding and nearby medical institutions; its hospital and pharmaceutical services connect the other sides of that care journey. The current corporate homepage extends this story to generative AI for hospital work and DPC coding support. Its headline is **「テクノロジーで、医療の願いを解き放つ」**, while the company describes a future in which health is as natural as air. [Company](https://ubie.life/about_ubie), [services](https://ubie.life/service).

The brand's documented concept is **「あたたかさと賢さで寄り添う」**: accompanying people with warmth and wisdom. The heart's front expresses human warmth; its back represents the supporting technology. The company says its logotype is based on an easily read UD font. On the current homepage, a pale blue-to-pink hero gradient, a dark wordmark and headline, white sections, blue contact action and pink recruitment action give this concept a concrete expression. The gradient is `linear-gradient(90deg, #ebeefa, #fde3ed)`; the two action fills are `#3959cc` and `#e34b83`. [Brand guideline, version 1.1 / August 2024](https://speakerdeck.com/ubie/ubie-brand-guideline-2dc9ba71-bd2f-489f-b08f-02487e35c3e7), [logo explanation](https://ubie.life/about_ubie).

The measured surface is the Japanese corporate homepage (`ubie.life/`, HTML `lang="ja"`). **Ubie Vitals** is the company's public product design system. It publishes tokens, components, icons, accessibility guidance and UX writing; its principles explicitly exclude corporate and recruitment design from their scope. The shared token names visible on this homepage therefore sit alongside a distinct corporate implementation. Its measured paragraph ink is `#3d4454`, and its loaded fonts include Noto Sans JP, Open Sans and Lato. [Vitals introduction](https://vitals.ubie.life/getting-started/), [scope](https://vitals.ubie.life/principles/).

#### Primary tasks

- Corporate homepage: find services for consumers, medical institutions or pharmaceutical companies; read news; contact Ubie; find recruitment information.
- Consumer product: explore symptoms, diseases and specialties, or find nearby medical institutions. The Japanese product explains how answers can be sent to participating institutions before a visit. [Japanese service](https://ubie.app/).
- English product: complete a questionnaire advertised as taking three minutes and receive possible causes and information about when to see a doctor. Its welcome image is explicitly labelled “Shiba (Welcome)”. [English service](https://ubiehealth.com/).

### Brand Narrative

The company joins a physician's clinical experience with an engineer's symptom–disease modelling work. Its current company page dates the founding to May 2017 and names **阿部 吉倫** and **久保 恒太**. It describes patients wanting treatment, clinicians wanting more time with individuals, researchers wanting new treatments and others wanting care to reach those who need it. Technology is presented as a way to remove constraints on these wishes. [Company](https://ubie.life/about_ubie).

This ambition now includes consumers, hospitals and pharmaceutical companies. The services page describes a physician-supervised interview engine built from 50,000 medical papers; the current homepage also describes generative AI for work efficiency and DPC coding optimisation. The 2024 brand guideline's heart concept supplies continuity across those activities, while the homepage's blue and pink presentation is the currently measured expression. [Services](https://ubie.life/service), [brand guideline](https://speakerdeck.com/ubie/ubie-brand-guideline-2dc9ba71-bd2f-489f-b08f-02487e35c3e7).

Vitals makes the product design resources available as open source. Its design-token repository explicitly describes JSON tokens converted with Style Dictionary and identifies an Apache-2.0 licence. Vitals also documents a VS Code extension for inserting token CSS custom properties. [Developer tooling](https://vitals.ubie.life/tokens/for-developers/). This confirms the publishing mechanism without treating every corporate component as a Vitals component. [Getting started](https://vitals.ubie.life/getting-started/), [token repository](https://github.com/ubie-oss/design-tokens).

### Principles

Vitals publishes four product principles: **気軽** (approachable), **かんたん** (simple), **誠実** (sincere) and **スッキリ** (clear and satisfying). It asks for familiarity without excessive optimism, comprehensibility across generations, accurate expectations and an experience that leaves users with useful understanding. The document presents these as a common product foundation, with corporate and recruitment design outside its scope. [Product principles](https://vitals.ubie.life/principles/).

Accessibility is an ongoing development commitment: Vitals describes work toward JIS X 8341-3:2016 AA and selected WCAG 2.2 criteria. This is a stated target, not a compliance finding made by this capture. [Accessibility](https://vitals.ubie.life/accessibility/).

### Personas

Verified audiences are consumers, medical institutions and pharmaceutical companies. No research-backed individual personas were established. [Services](https://ubie.life/service).

## Colors

### Current corporate surface

These values come from the homepage census and control measurements.

| Role | Value | Evidence and use |
|---|---|---|
| Primary | `#3959cc` | `--color-ubie-blue`; contact and News action fills, navigation hover, measured focus outlines |
| Accent | `#e34b83` | `--color-ubie-pink`; recruitment action fill |
| Canvas | `#ffffff` | `--color-ubie-white`; white sections and secondary hero links |
| Foreground | `#3d4454` | `--color-ubie-dark`; 11 of 12 paragraph ink samples |
| Hero paragraph | `#20242c` | `--color-ubie-gray-950`; the remaining paragraph ink sample |
| Muted foreground | `#6d727e` | `--color-ubie-gray-600`; date on the measured News card |
| Secondary action ink | `#333333` | `--color-ubie-gray-900`; medical-institution hero link |
| Secondary action border | `#cccccc` | `--color-ubie-gray-300`; 1px at rest |
| Surface | `#f5f5f5` | `--color-ubie-gray-100`; card thumbnail container and category badge |

The hero gradient token is `--gradient-ubie: linear-gradient(90deg, #ebeefa, #fde3ed)`. Filled action hover changes the element's opacity, so retain its computed fill rather than manufacturing a darker colour.

### Vitals semantic palette, also present as homepage variables

The following are defined tokens; their presence does not establish that every role is rendered on this page. Vitals calls the groups Blue, Green, Red, Orange, Purple and Pink, rather than declaring each hue to be a particular application state. [Semantic colours](https://vitals.ubie.life/tokens/color/semantic/).

| Group | Text | Background | Inverse background | Border |
|---|---|---|---|---|
| Blue | `#283f91` | `#f0f2fc` | `#3959cc` | `#8296df` |
| Green | `#1c9167` | `#e9faf4` | `#27cc91` | `#77dfba` |
| Red | `#a1213c` | `#fceff2` | `#e32e55` | `#ed7b94` |
| Orange | `#b57212` | `#fff9f0` | `#ffa11a` | `#ffc46f` |
| Purple | `#7322a2` | `#f8effc` | `#a230e4` | `#c47dee` |
| Pink | `#9b2350` | `#fcf0f5` | `#da3170` | `#e87da5` |

Vitals' **Text Main** is `#32353a`, **Text Sub** `#686a6d`, **Text Placeholder** `#96989a`, **Text Disabled** `#dcdddd`, and **Text Link** `#3959cc`. The homepage retains those semantic variables, while its sampled paragraphs use the corporate foreground above. **Border Black** is `#c5c6c7`. **Background Modal** is black at 50%, expressed on the homepage as `#00000080` and equivalently `rgba(0, 0, 0, 0.5)`; no dialog was measured.

### Primitive neutral ramp

The documented Ubie Black ramp remains: 100 `#fafafa`, 200 `#f6f6f6`, 300 `#dcdddd`, 400 `#c5c6c7`, 500 `#96989a`, 600 `#686a6d`, 700 `#55575b`, 800 `#393c41`, 900 `#32353a`, 1000 `#16191f`. Blue, Green, Pink, Orange, Purple and Red also have ten documented steps from 100 to 1000. These primitive facts remain useful independently of where a live component uses them. [Primitive colours](https://vitals.ubie.life/tokens/color/primitive/).

## Typography

### Font evidence classes

| Class | Verified finding |
|---|---|
| Official product use | Vitals names **A P-OTF UD Shin Go Pr6N / M** for normal text and **/ DB** for bold. This is documented product typography; neither face was loaded in the corporate capture. No live specimen is supplied for it. |
| Live-loaded | `document.fonts` lists **Noto Sans JP 100–900**, **Open Sans 300–800**, and **Lato 400, 700, 900**, all normal style. Their `@font-face` sources are same-origin WOFF2 files. |
| Live CSS use | Body and h1 stacks begin with **Noto Sans JP**. The 44px action links declare **Open Sans**; header navigation declares Noto Sans JP. A declared family and loaded face do not identify the face used for every Japanese glyph. |
| Official distributed assets | No font binary or font licence was opened. The press kit links brand assets, but no assets were downloaded. |
| Declared-only | **Lato 300** has an `@font-face` declaration but was not loaded. Noto Sans, Hiragino Kaku Gothic ProN, Hiragino Sans and Meiryo are named in the body fallback stack without loaded-face evidence here. They receive no specimens. |
| Automatic fallback aliases | Noto Sans JP Fallback and Open Sans Fallback appear loaded; their declarations use `local("Arial")`. Lato Fallback is declared but not loaded. These are site-generated aliases, not additional brand faces. |
| Unresolved | The specific primary Latin face was not established from the brand-deck transcript. The former full UD Shin Go/Open Sans stack was not found on this homepage. |

**Substitute: none chosen.** The brand guideline itself documents Noto Sans CJK for Japanese fallback and Open Sans for English fallback; that instruction does not turn either into a substitute chosen by this reference. [Product typography](https://vitals.ubie.life/tokens/typography/), [brand guideline, slides 10–11](https://speakerdeck.com/ubie/ubie-brand-guideline-2dc9ba71-bd2f-489f-b08f-02487e35c3e7).

### Measured control typography

| Element | Size / weight | Line height | Other detail |
|---|---|---|---|
| Main action links | 14px / 700 | 19.6px | computed family Open Sans |
| Header navigation | 14px / 900 | 16.8px | Noto Sans JP; 0.7px letter spacing |
| Header action anchor | 16px / 400 | 24px | Noto Sans JP; its visible child label is 12px / 700 |
| News card anchor | 16px / 400 | 24px | Noto Sans JP; date child is 15px / 400 |

The hero h1 contains a supplied headline image with descriptive alt text. Its visual lettering does not establish an available font family.

### Semantic type definitions

Vitals documents Body, Heading, Note, Button and Tag roles, with 170% as the basic line height and 150% or 140% alternatives. The homepage's actual semantic variables give the following scale:

| Homepage token group | Sizes | Line-height values |
|---|---|---|
| Heading xl / lg / md / sm / xs / xxs | 1.75 / 1.5 / 1.25 / 1.125 / 1 / .875rem | 1.5; `-wide` 1.7 |
| Body lg / md / sm / xs | 1.125 / 1 / .875 / .75rem | 1.7; `-wide` 2; `-narrow` 1.4 for lg/md/sm, 1.5 for xs |
| Button lg / md / sm | 1 / .875 / .75rem | 1.5 |
| Tag lg / md / xs | .875 / .75 / .625rem | 1.5 |

These are available definitions, not a claim that the corporate page applies each one. Preserve the distinction between Vitals' documented M/DB product weights and the homepage's measured 400/700/900 weights.

## Layout

The desktop capture is 1440×1000px. Its sticky white header is 80px high. The hero's three secondary links begin at x=40, 292 and 544px, each 236px wide, leaving 16px gaps. News uses three columns: card starts x=40, 501 and 963px, widths approximately 437.3px. Keep these as measurements of this viewport rather than universal container tokens.

Vitals' spacing scale is confirmed both by its documentation and homepage `--size-spacing-*` variables: **xxs 4px, xs 8px, sm 12px, md 16px, lg 24px, xl 40px, xxl 64px**. The documentation treats spacing as a way to express relationships between elements, with 16px as its naming reference. [Spacing](https://vitals.ubie.life/tokens/spacing/).

The documented product radius rule follows short-side length: **xs 2px** up to 24px, **sm 4px** above 24px through 40px, **md 8px** above 40px; **lg 12px** is for decorative landing-page use, and **full 9999px** produces a semicircular end. The homepage additionally defines **xl 16px** and **xxl 24px**. Its measured 44px action links actually use **12px**, so use their identity when recreating the corporate surface. [Radius](https://vitals.ubie.life/tokens/radius/).

### Responsive Behavior

Only the 1440×1000 desktop layout was measured. Mobile breakpoints, safe-area behavior, collapsed navigation and touch hit areas were not verified.

## Elevation & Depth

All six measured link wrappers have `box-shadow: none` at rest; the state comparisons found no shadow change. The hero's secondary links use a 1px border, and the News card separates image, date, badge and title through layout. No elevation scale for cards, popovers or dialogs was verified.

## Motion & Easing

The three filled action links compute **`opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1) 0s`**: a **150ms** opacity transition. The medical-institution hero link and header navigation compute **`color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to 0.15s cubic-bezier(0.4, 0, 0.2, 1) 0s`**. The News card wrapper computes **`all 0s ease 0s`**; that wrapper value does not describe the separate title paragraph's transition.

No question-advance animation, result reveal, mascot animation or reduced-motion transformation was verified.

---

Measured on 2026-11-03 using the capture service's survey and two states calls. Official documentation and the linked first-party brand guideline support the product and brand context. The accompanying verification notes preserve raw transitions, control identities, colour census, font loading evidence and the prior-content dispositions.

## Components

### Measured corporate links

All six controls are native links. Values below describe the actual anchors unless a child label is identified; keyboard focus was reached by a real Tab walk.

| Control | Rest identity | Hover and pressed | Keyboard focus |
|---|---|---|---|
| **もっと見る** (`primary-news`) | 138×44px; radius 12px; padding 0px 24px; 14px/700; `#3959cc` / `#ffffff`; no border or shadow | whole-link opacity 1→0.9; computed fill and ink remain | 2px solid `#3959cc` outline; offset 2px |
| **医療機関の方はこちら** (`secondary-care`) | 236×44px; radius 12px; padding 0px 20px; 14px/700; `#ffffff` / `#333333`; 1px `#cccccc` border; no shadow | label and arrow colour/fill become `#3959cc`; border becomes `#3959cc`; background remains white | same authored outline |
| **お問合せ** (`header-contact`) | 88×80px; radius 0px; padding 0px; anchor 16px/400, label 12px/700; `#3959cc` / `#ffffff`; no border or shadow | whole-link opacity 1→0.9 | same authored outline |
| **採用情報** (`header-recruit`) | 90×80px; radius 0px; padding 0px; anchor 16px/400, label 12px/700; `#e34b83` / `#ffffff`; no border or shadow | whole-link opacity 1→0.9 | same authored outline |
| **Ubieについて** (`nav-about`) | 93.9×20px; radius 0px; padding 0px; 14px/900; transparent on white; `#3d4454` ink; no border or shadow | ink becomes `#3959cc` | same authored outline |
| **First News card** (`news-card`, `/news/notice-20261019`) | 437.3×375px; wrapper radius/padding 0px; anchor 16px/400; transparent on white; own ink `#1a1a1a`, visible title `#3d4454`, date `#6d727e`; no border or shadow | title paragraph alone turns `#3959cc` | same authored outline on wrapper |

The News thumbnail container is 437×246px in the snapshot and has a `#f5f5f5` background; the visible category badge also uses that background. Its rounded image area is distinct from the square link wrapper. Main-action arrows measure 16×16px; header-action icons measure 20×20px.

### Documented Vitals product components

Vitals describes Button variants `primary`, `secondary`, `accent`, `alert`, `text`, `textAlert` and social authentication variants; sizes are large, medium and small, with large the default. `block` occupies the available width. Primary expresses the most important action; secondary is subordinate; accent sits between them; alert is for risky or irreversible actions. Text and textAlert reduce emphasis. Vitals describes secondary and textAlert backgrounds as transparent and recommends one primary per screen where possible. These are documented API and use rules, not measured appearances of those product variants. [Button documentation](https://vitals.ubie.life/components/button/), [installation example](https://vitals.ubie.life/getting-started/).

Vitals' Input is based on a native input and supports an invalid state. It recommends an associated label and discourages placeholders as the only explanation. LinkCard presents a destination preview, with the whole card acting as a link; it supports Tab and Enter, while Space does not activate it. No input or search field appeared in the homepage survey. [Input](https://vitals.ubie.life/components/input/), [LinkCard](https://vitals.ubie.life/components/link-card/).

The published component roster is still **28**: Accordion, ActionHalfModal, ActionModal, Bold, Box, Button, ButtonCard, Center, Checkbox, CheckboxCard, Color, Divider, Flex, Heading, Icon, Input, LinkButton, LinkCard, MessageHalfModal, MessageModal, Pre, RadioButton, RadioCard, Select, Stack, Text, TextArea and Toggle. This confirms availability, without supplying unmeasured variant geometry. [Component index](https://vitals.ubie.life/components/).

### States

For **primary-news**, **header-contact** and **header-recruit**, hover and pressed both lower opacity from 1 to 0.9. For **secondary-care**, both states turn the label, arrow and border blue while keeping the white fill. For **nav-about**, both turn the text blue. For **news-card**, both turn the title paragraph blue. Pressed added no further compared style changes beyond hover in these six controls.

All six Tab-focus observations show **`outline: 2px solid #3959cc; outline-offset: 2px`**. The outline style is `solid`, and each disappears after blur; these are authored focus indicators rather than browser `auto` rings. Empty, loading, error, success, disabled and checked appearances were not measured.

## Do's and Don'ts

- Reproduce the corporate palette and component identities in §§2–4. Keep the blue-to-pink gradient and distinguish the square header actions from the rounded main actions.
- Preserve whole-link opacity feedback on filled actions and colour feedback on navigation and card titles.
- Keep the measured blue keyboard outline visible, including its 2px offset.
- For Vitals product work, use action-describing labels; its Button guidance suggests about 15 Japanese characters and discourages bare “OK”. Prefer the documented loading mechanism for preventing repeated submission; explain disabled actions when they are necessary. [Button guidance](https://vitals.ubie.life/components/button/).
- Preserve native link and button semantics. Use associated labels for fields and explain destinations in link cards. [Input](https://vitals.ubie.life/components/input/), [LinkCard](https://vitals.ubie.life/components/link-card/).

## Voice & Tone

Vitals' consumer writing guidance names three goals: understandable, reassuring and trustworthy. It recommends everyday words, reasons that explain recommendations, short sentences and consideration for someone who feels unwell. It discourages excessive familiarity, hype and exclamation marks; button labels generally avoid honorific phrasing. This guidance explicitly targets the consumer product, particularly the symptom search engine. [UX writing](https://vitals.ubie.life/ux-writing/).

The English homepage says **“Just 3 minutes. Developed by doctors.”** Its surrounding copy talks about possible causes and when to see a doctor. The Japanese product explains that the information service does not replace physicians or provide a diagnosis. These are source-backed examples of credentialed, bounded language. [English service](https://ubiehealth.com/), [Japanese service](https://ubie.app/).

## Agent Prompt Guide

### Quick colour reference

Corporate blue `#3959cc`; pink `#e34b83`; foreground `#3d4454`; white `#ffffff`; secondary action ink `#333333`; its border `#cccccc`; muted date ink `#6d727e`; thumbnail/badge surface `#f5f5f5`.

### Example component prompts

- “Build a native News link labelled もっと見る, 44px high with 12px radius and 0px 24px padding. Use `#3959cc` with white 14px/700 text; its declared family is Open Sans. Hover and press lower whole-link opacity to 0.9. Keyboard focus draws a 2px solid blue outline with 2px offset.”
- “Build the medical-institution hero link: 236×44px, 12px radius, 0px 20px padding, white fill, `#333333` label, 1px `#cccccc` border. On hover and press, label, arrow and border become `#3959cc`.”
- “Build a transparent News card link on white. Use the 437.3×375px desktop identity, a thumbnail above date and badge, then a `#3d4454` title. Only the title changes to blue on hover and press; focus outlines the link.”

Use the documented Vitals palette, type roles and component API when building a Vitals product. Use the corporate measurements above when reproducing this homepage.

## Governance

### Known Gaps

- **Contrast, `header-recruit`.** Text `#ffffff` on `#e34b83` measures 3.75:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
