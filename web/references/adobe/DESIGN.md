---
name: Adobe
colors:
  primary: '#eb1000'
  accent: '#3b63fb'
  accent-link: '#274dea'
  foreground: '#000000'
  heading: '#000000'
  ink: '#131313'
  gray-800: '#292929'
  gray-600: '#717171'
  canvas: '#ffffff'
  surface: '#f8f8f8'
  surface-tile: '#f3f3f3'
  hairline: '#dadada'
  yellow-400: '#f5c700'
  green-900: '#05834e'
  error: '#d73220'
  on-primary: '#ffffff'
  signin-focus-background: '#e9e9e9'
  signin-focus-ring: '#507bff'
typography:
  body:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.25
    use: Category-card container; 16px with 20px line height. Its visible eyebrow is separately 14px/700.
  button:
    fontSize: 14px
    fontWeight: 700
    use: Measured CTA links, Sign in, Plans and visible quick-card label; 18px line height except the Sign in button's computed 7px line height.
rounded:
  sm: 4px
  md: 8px
  lg: 16px
  full: 999px
spacing:
  xs: 4
  sm: 8
  md: 12
  base: 16
  lg: 24
  xl: 32
  section: 64
components:
  see-offers:
    type: button
    backgroundColor: '#3b63fb'
    textColor: '#ffffff'
    border: '2px solid #3b63fb'
    rounded: 999px
    height: 40px
    padding: 9px 24px
    typography: 14px / 700
    hover: 'bg #274dea; border remains #3b63fb; fg remains #ffffff'
    pressed: 'bg #274dea; border remains #3b63fb; fg remains #ffffff'
    use: See offers — a link in the white promotional bar. Width 117.8px; Adobe Clean, line height 18px. Focus produced only a browser auto outline, so no focus token is declared.
  sign-in:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#000000'
    border: '1px solid #ffffff'
    rounded: 999px
    height: 40px
    padding: 6px 16px 8px
    typography: 14px / 700
    focus: 'bg #e9e9e9; outline 2px solid #507bff; outline-offset 0px'
    use: Sign in — the logged-out header button. Width 77.3px; Adobe Clean; computed line height 7px. Hover and press had no change in the compared scope. Focus styling cleared after blur.
  category-card:
    type: card
    backgroundColor: '#f3f3f3'
    textColor: '#000000'
    rounded: 16px
    height: 583px
    padding: 0px
    typography: 16px / 400
    hover: 'bg #000000; visible eyebrow, heading and body become #ffffff; width 294px to 441px in the pointer pass; footer arrow appears'
    pressed: 'bg #000000; visible eyebrow, heading and body become #ffffff; width 294px to 441px in the pointer pass; footer arrow appears'
    use: Creativity and design — a link in the elastic category carousel. Initial width 249.2px; pointer baseline 294px after scrolling. Eyebrow 14px/700. Focus colour changes are described in prose; browser auto outline and scroll-related geometry are not focus tokens.
  see-products:
    type: button
    textColor: '#ffffff'
    border: '2px solid #ffffff'
    rounded: 999px
    height: 40px
    padding: 0px 24px
    typography: 14px / 700
    hover: 'bg rgba(255, 255, 255, 0.64); fg #000000'
    pressed: 'bg #ffffff; fg #000000'
    focus: 'outline 2px solid #ffffff with 2px offset; box-shadow #000000 0px 0px 0px 2px'
    use: See all products — a transparent link over the dark media section headed Tools that work for you. Width 156.6px; Adobe Clean, line height 18px. No opaque rest background is declared. Ancestor parallax and opacity changes are excluded.
fonts:
  roles:
    sans: adobe-clean
    display: adobe-clean-display
---

# Design System Inspiration of Adobe

## Overview

### Visual Theme & Atmosphere

Adobe makes tools for creative work, documents and customer experiences. Its current company overview presents Creative Cloud, Acrobat, CX Enterprise and Firefly; the last brings image, video and audio creation and editing into an AI creative studio. Its public promise is “Empowering everyone to create.” [Company overview](https://www.adobe.com/about-adobe.html)

The captured homepage gives that promise a cinematic frame: bright, patterned artwork fills a dark hero, while a white Adobe wordmark, white navigation, bold typography and compact pill actions remain easy to read. A white promotional strip adds a blue action above the dark header. The hero has six quick-link cards along its lower edge, with translucent inactive cards and a white active card; the following category carousel uses pale rounded tiles. Black and white carry the interface, while the creative content supplies much of the colour. This is a reading of the captured composition, rather than a restriction on all Adobe products.

Adobe's identity and product system continue to evolve. Its 2020 brand account explains the move to an all-red corporate logo and a warmer red. The current Spectrum introduction identifies Spectrum 2 as the latest expression of one shared system, with new foundations spanning colour, type, layout, icons, states and components. A reference in this style should combine strong creative imagery with clear controls and accommodate each product's context. [Brand history](https://blog.adobe.com/en/publish/2020/05/28/evolving-our-brand-identity), [Spectrum introduction](https://spectrum.adobe.com/getting-started/introduction)

#### Primary tasks

- Explore creative, document and business product categories.
- Compare plans through the “Plans” link or promotional “See offers” action.
- Follow a product or category card, or browse “See all products.”

### Brand Narrative

John Warnock and Charles Geschke founded Adobe in December 1982. Adobe's anniversary account connects its beginnings to PostScript and digital publishing; its company timeline records Illustrator in 1987, Photoshop in 1990 and PDF/Acrobat in 1993. The same company overview now describes Firefly alongside its creative, document and enterprise offerings, and states that its training data is selected to support commercial safety. It also reports more than 50 million Behance community members. [Founding account](https://blog.adobe.com/en/publish/2017/12/04/from-digital-publishing-to-the-next-35-years-of-creating-experiences), [Company timeline](https://www.adobe.com/about-adobe.html)

That history gives the reference a useful direction: a strong creative stage supported by practical tools. Adobe Design explains that Spectrum 2 adjusted neutrals for contrast, connected its colour system more closely to Adobe's brand colours, and paired refreshed icons with Adobe Clean. The intended result accommodates distinct products and audiences rather than one rigid expression. [Adobe Design's Spectrum 2 account](https://adobe.design/ideas/introducing-spectrum-2)

### Principles

Spectrum's current principles are **Rational, Human, Focused and Collaborative**. In the official descriptions, these mean responding to real contexts; balancing utility, joy and people's needs; making decoration and communication purposeful; and refining the system collectively. [Official principles](https://spectrum.adobe.com/page/principles/)

For this reference, those principles suggest clear action hierarchy, purposeful state changes and room for creative content. This is a design interpretation; it does not establish a universal ban on colour, shadows or expressive motion.

### Personas

Adobe names creators, students, small businesses, global enterprises and nonprofits as audiences; no research-backed individual personas were established. [Company overview](https://www.adobe.com/about-adobe.html)

## Colors

The homepage census found 491 root-computed custom properties and 607 declared property names. The main foundation namespace is --s2a-*; --feds-* styles the site's navigation and promotional chrome. The table distinguishes actual rendered uses from palette declarations. These are homepage observations, not a measurement of an Adobe editor or the pricing page.

| Role | Value | Evidence and application |
|---|---|---|
| Adobe red | #eb1000 | --s2a-color-brand-adobe-red; also the quick-card progress bar's computed background. Red is not confined to the logo. |
| Action accent | #3b63fb | “See offers” rest background and 2px border; --s2a-color-blue-900. |
| Accent hover / link declaration | #274dea | “See offers” hover and pressed background; --feds-color-blue-link. Its border remains the lighter rest blue. |
| Foreground / heading | #000000 | --s2a-color-content-default and heading declarations; category-card text at rest. |
| Canvas / inverse ink / on-primary | #ffffff | White backgrounds, hero/navigation text, and text on the blue CTA. |
| Strong body ink | #131313 | --s2a-color-content-body-strong; a declared role, not the dominant paragraph colour in this capture. |
| Gray 800 | #292929 | Declared --s2a-color-gray-800 and default border colour. |
| Gray 600 | #717171 | Declared --s2a-color-gray-600; no inactive-tab use was measured. |
| Subtle surface | #f8f8f8 | Declared subtle and disabled background; one background occurrence in the census. |
| Category tile | #f3f3f3 | Five census backgrounds and the measured category-card rest fill. |
| Subtle border | #dadada | --s2a-color-border-subtle. |
| Yellow 400 | #f5c700 | Palette declaration only; no promotional flag was measured. |
| Green 900 | #05834e | Palette declaration only; no success UI was measured. |
| Utility error | #d73220 | Declared background, border and content error roles; no error control was exercised. |
| Sign-in focus surface | #e9e9e9 | Measured keyboard-focus background; also gray-100 in the homepage foundation. |
| Sign-in focus ring | #507bff | Measured 2px solid outline, offset 0px, on this header button. |

Paragraph ink was white in 62 paragraph elements, black in 26, and rgba(0, 0, 0, 0.64) in five. White's frequency reflects the dark content and footer; the foundation's default foreground remains black. Other measured treatments include the quick-card's rgba(0, 0, 0, 0.44) fill and the outlined CTA's 64% white hover fill. Alpha colours are kept as alpha colours.

## Typography

### Evidence classes

- **Official product use:** Spectrum documents **Adobe Clean Spectrum VF** as its default variable typeface across supported platforms, based on Adobe Clean, the corporate typeface. It describes updated baseline metrics and variable weights and widths. This confirms product metadata; it does not establish that VF rendered on the homepage. [Typography overview](https://spectrum.adobe.com/page/typography/)
- **Live-loaded:** document.fonts lists **adobe-clean** at 400 normal/italic, 700 normal/italic and 900 normal, plus **adobe-clean-display** at 900 normal. These two CSS family names populate this reference's typography tokens.
- **Official distributed assets:** the homepage's [Adobe-hosted Typekit stylesheet](https://use.typekit.net/hah7vzn.css) defines those faces with WOFF2, WOFF and OpenType URLs. It also defines adobe-clean 800 normal, which was not in the loaded list. That unrendered weight receives no specimen.
- **Declared-only names on this surface:** the heading stack starts with "Adobe Clean Display Black" and "Adobe Clean Display"; the root heading-family token names the latter. The loaded family is adobe-clean-display. The spaced names are retained as declarations, not additional proven loaded faces.
- **Other documented product faces:** Spectrum's typography system names **Source Code Pro** for code and **Adobe Clean Han** for web CJK text. Neither was loaded in this homepage census, so neither receives a specimen or a homepage family token. [Typography system](https://spectrum.adobe.com/page/code/)
- **Unresolved:** no font licence or redistribution entitlement was established. A locally loaded compatibility face is recorded in the proof notes and excluded from brand-family tokens. **Substitute: none chosen.**

The census’s generic button sample declares Arial, and the surveyed Pause control is 13.3333px/400 Arial. These are actual surface observations, not a selected brand substitute; the family tokens remain limited to the loaded Adobe faces.

### Measured interface metrics

| Element | Size / weight | Line height | Family / distinction |
|---|---|---|---|
| See offers, Plans, See all products | 14px / 700 | 18px | Computed Adobe Clean stack; adobe-clean loaded. |
| Sign in | 14px / 700 | 7px computed | 40px overall button height; retain this unusual computed value rather than substituting a conventional one. |
| Category-card container | 16px / 400 | 20px | Its visible eyebrow is separately 14px / 700. |
| Quick-card container | 16px / 400 | 20px | Its visible label is separately 14px / 700 with 18px line height. |
| Hero “See terms” link | 20px / 400 | 24px | Survey measurement of the link, not a measurement of every paragraph. |

The homepage also declares a 900-weight heading system: heading-1 is 5rem with 76px line height and -3.2px tracking; heading-3 is 3rem with 48px line height and -1.44px tracking; heading-5 is 1.5rem with 24px line height and -.96px tracking. These are raw foundation values. The capture did not bind the prior reference's individual hero and section headline sizes to their current DOM elements.

## Layout

At the captured desktop size, a 72px promotional strip sits above an 80px header. The dark hero positions a short offer, supporting copy and a white action on the left, with oversized artwork on the right. Six quick-link cards span its lower edge. Product categories continue in a horizontal elastic carousel, followed by feature and product storytelling. The footer returns to a dark field with white links.

The desktop root declares 12 grid columns, an 8px gutter, 8.333% margin width and a 1920px maximum-width value. These are extracted layout settings, not a claim that every content block uses the maximum width.

The preserved spacing subset is directly declared: 4, 8, 12, 16, 24, 32 and 64px. The loaded scale also includes values between and beyond these. The geometry distinguishes 8px quick cards, 16px category tiles and 999px action pills; 4px also exists in the foundation's radius declarations. The measured outlines use 2px borders, while Sign in uses 1px.

### Responsive Behavior

Mobile and tablet layouts, touch behaviour and breakpoint transitions were not measured; the live capture is desktop 1440×1000 only.

## Elevation & Depth

Use background contrast and controlled translucency to separate the sampled controls. The blue CTA, Sign in, Plans, category card and outlined CTA all measured box-shadow: none at rest. The hero quick card uses an inset white hairline rather than an external shadow.

Focus can add depth deliberately: “See all products” gains a black 2px spread shadow and a white 2px solid outline with 2px offset. This is a measured focus indicator, not a general elevation level. The foundation also declares shadow levels, documented separately in the raw namespace appendix.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.inset-hairline`: `rgba(255, 255, 255, 0.11) 0px 0px 0px 1px inset`

## Motion & Easing

“See all products” computes this transition string:

~~~text
background-color, border-color, color 0.3s, 0.3s, 0.3s cubic-bezier(0.42, 0, 0, 1), cubic-bezier(0.42, 0, 0, 1), cubic-bezier(0.42, 0, 0, 1) 0s, 0s, 0s
~~~

The category card computes:

~~~text
max-width, width, background-color 0.3s, 0.3s, 0.2s cubic-bezier(0.42, 0, 0, 1), cubic-bezier(0.42, 0, 0, 1), ease 0s, 0s, 0s
~~~

See offers, Sign in, Plans and the quick card each compute all 0s ease 0s on the control itself. These strings are measurements of those nodes, not a global motion-token scale. The hero exposes a Pause button; video playback itself was outside the state comparison.

Spectrum's motion guidance is still developing. It describes purposeful motion and requires large-area motion to support browser and system reduced-motion settings. The homepage's reduced-motion implementation was not tested. [Official motion guidance](https://spectrum.adobe.com/foundations/behavior/motion)

## Components

Measurements below come from real hover, pointer-down and keyboard Tab captures. A link styled as an action stays a link. No destination was activated and no account flow was entered.

| Control | Rest identity | Use |
|---|---|---|
| See offers | 117.8×40px; 999px radius; 9px 24px padding; 14px/700; blue fill and 2px blue border; white label; no shadow | Link in the white promotional strip. |
| Sign in | 77.3×40px; 999px radius; 6px 16px 8px; 14px/700; white fill and 1px white border; black label; no shadow | Logged-out header button. |
| Plans | 34.1×18px; 0px radius/padding; 14px/700; transparent; white text; no border/shadow | Header navigation link. No authored state token is harvested. |
| Category card | Initial 249.2×583px; 16px radius; 0px outer padding; 16px/400; pale tile fill; black text; no border/shadow | “Creativity and design” link in the elastic carousel. |
| Quick card | 191.3×94px; 8px radius; 12px 12px 16px; 16px/400 container; dark 44% fill; white text | “Creativity and design” hero link with tab semantics; inset white hairline. Pointer states remain unmeasured. |
| See all products | 156.6×40px; 999px radius; 0px 24px; 14px/700; transparent; white text and 2px white border; no rest shadow | Link over the dark “Tools that work for you” media section. |

The category card is an expanding content control. In the pointer pass its baseline was 294×583px after scrolling, then 441×583px on hover and press. The surface turned black; the eyebrow, heading and paragraph turned white; a footer arrow appeared. Its initial width is not a fixed layout token. Keyboard focus also produced the dark treatment, but the browser outline and scroll-related geometry are kept out of its focus tokens.

The quick card retains the prior glass treatment, including rgba(255, 255, 255, 0.11) 0px 0px 0px 1px inset. Its 14px/700 label is smaller and heavier than its inherited container font. Both pointer attempts were covered, including the second capture with overlay handling enabled. Its only measured focus change was a browser auto outline, so it remains prose rather than a harvested interactive component.

The surveyed App switcher is a separate 32×32px control with 5.008px radius and 6px padding. Its states were not probed, so it is not a harvested component.

The current [official sitemap](https://spectrum.adobe.com/sitemap.xml) contains 221 URLs and no /page/ paths. It includes foundations, support and implementation documentation; that total is not a component count. This replaces the prior reference’s obsolete /page/ index.

### States

| Control | Hover | Pressed | Keyboard focus |
|---|---|---|---|
| See offers | Fill becomes #274dea; border and label unchanged. | Same measured change. | Browser auto outline only; no brand focus token. |
| Sign in | No computed change in the compared scope. | No computed change in the compared scope. | Fill #e9e9e9; 2px solid #507bff outline, offset 0px. Both clear after blur. |
| Plans | No computed change in the compared scope. | No computed change in the compared scope. | Browser auto outline only. |
| Category card | Black surface, white visible text, expanded width and revealed footer arrow. | Same measured treatment. | Dark treatment and browser auto outline; scroll-related geometry also changes and persists separately. |
| Quick card | UNMEASURED: covered in both attempts. | UNMEASURED: covered in both attempts. | Browser auto outline only. |
| See all products | rgba(255, 255, 255, 0.64) fill, black text. | White fill, black text. | White 2px solid outline at 2px offset plus black 2px spread shadow; these clear after blur. |

“No change” here covers the element, its pseudo-elements, descendants where present and three ancestor levels across the probe's computed-style and DOM-attribute properties. It does not describe decoded video pixels, closed shadow roots or cross-origin frame internals. Pointer :hover matched for the measured pointer states. Persistent ancestor opacity/parallax differences are recorded in the proof and are not authored focus tokens.

Empty, loading, validation error, success and disabled interactions were not exercised.

## Do's and Don'ts

### Do

- Frame saturated creative imagery with clear black and white interface elements.
- Use the measured 14px/700 treatment for these compact actions and navigation labels.
- Preserve the blue CTA's lighter border when its fill darkens on hover.
- Distinguish translucent 8px quick cards from 16px category cards and pill actions.
- Keep the authored keyboard-focus treatments on Sign in and See all products.

### Don't

- Treat Adobe red as confined to one logo: the captured quick-card progress bar also uses it.
- Transfer Spectrum product-font documentation into a claim that the homepage loaded that face.
- Replace the outlined CTA's transparent rest background with an opaque colour.
- Generalize these observed states into unmeasured error, disabled, loading or purchase states.

## Voice & Tone

The captured homepage combines a direct offer with a broad creative promise. “Students, save 76%.” is specific and benefit-led; “Everything you need to make anything.” widens the invitation. Product cards pair a name with a capability; the Firefly card mentions images, video and audio. Action labels are short and concrete. For a similar surface, state the immediate benefit, name the destination clearly, and keep detailed terms available beside the offer.

These are observations of current copy. No company-wide prohibition on punctuation, jargon, headline length or technical language was verified.

## Agent Prompt Guide

Use the measured surface and control context in a prompt:

- “Build a promotional link like Adobe's See offers: 40px high, 999px radius, 9px 24px padding, 14px/700 adobe-clean; #3b63fb fill and 2px border, white text; hover and press darken the fill to #274dea while the border stays unchanged.”
- “Make a category link with a #f3f3f3 rest surface, 16px corners and black text. On hover, expand its available width, turn the surface black and the visible text white, and reveal the footer arrow. The captured pointer pass grew from 294px to 441px at 583px height.”
- “Place a 40px outlined pill link over dark creative media. Keep its rest fill transparent, with white text and a 2px white border; hover adds 64% white and black text, press fills white, and keyboard focus adds the measured white outline and black spread ring.”

Use the actual Adobe fonts only where available under appropriate terms. This reference chooses no substitute and provides no specimen for a face absent from the loaded census.
