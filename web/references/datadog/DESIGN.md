---
name: Datadog
colors:
  primary: '#632ca6'
  brand-violet: '#8000ff'
  brand-violet-live: '#7700ff'
  foreground: '#212529'
  ink-pure: '#000000'
  muted: '#555555'
  canvas: '#ffffff'
  surface: '#f6f6f6'
  surface-alt: '#eeeeee'
  footer-bg: '#110617'
  on-primary: '#ffffff'
typography:
  display-hero:
    fontSize: 68px
    fontWeight: 600
    lineHeight: 1
    use: CSS-declared homepage H1; live-loaded NationalWeb Semibold
  section:
    fontSize: 36px
    fontWeight: 600
    lineHeight: 1.111111
    use: CSS-declared global h2 default, 40px line-height
  section-home:
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1
    use: CSS-declared Products heading override on the desktop homepage
  intro:
    fontSize: 32px
    fontWeight: 300
    lineHeight: 1.1875
    use: CSS-declared desktop hero subtitle, 38px line-height; NationalWeb Book
  nav:
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.428572
    use: Measured Pricing navigation link, 25.7143px line-height
  button:
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1
    use: Measured hero CTA pair, 18px line-height
  body:
    fontSize: 22px
    fontWeight: 300
    use: CSS-declared body base; individual text styles may override it
rounded:
  sm: 4px
spacing:
  md: 12
  base: 16
  lg: 24
  xl: 28
components:
  button-primary:
    type: button
    backgroundColor: '#632ca6'
    textColor: '#ffffff'
    rounded: 4px
    padding: 16px 24px
    height: 54px
    typography: 18px / 700 NationalWeb
    hover: 'background-color: #7700ff; color: #ffffff'
    pressed: 'background-color: rgba(0, 0, 0, 0); color: #212529; border: 1px solid #212529'
    focus: 'background-color: rgba(0, 0, 0, 0); color: #212529; border-color: rgba(0, 0, 0, 0); outline: none; box-shadow: none'
    use: Hero Free trial link, role=button, on the white homepage; measured width 235px. Focus changes clear after blur.
  button-outline:
    type: button
    textColor: '#632ca6'
    border: '1px solid #632ca6'
    rounded: 4px
    padding: 14px 24px 16px
    height: 54px
    typography: 18px / 700 NationalWeb
    hover: 'background-color: #7700ff; color: #ffffff; border: 1px solid #7700ff'
    pressed: 'background-color: rgba(0, 0, 0, 0); color: #212529; border: 1px solid #212529'
    focus: 'background-color: rgba(0, 0, 0, 0); color: #212529; border-color: rgba(0, 0, 0, 0); outline: none; box-shadow: none'
    use: SEE THE PLATFORM link, role=button, transparent on white; measured width 235px. The play glyph follows the label colour.
  nav-link:
    type: button
    textColor: '#555555'
    rounded: 0px
    padding: 8.5px 12px 9.5px
    height: 43.7px
    typography: 18px / 600 NationalWeb
    hover: 'color: #7700ff'
    pressed: 'color: #7700ff'
    use: Pricing link in the white top navigation, transparent background; measured width 87.3px.
  card-postgres-link:
    type: card
    textColor: '#632ca6'
    rounded: 0px
    padding: 0px
    height: 18px
    typography: 18px / 700 NationalWeb
    hover: 'color: #7700ff; icon colour: #7700ff'
    pressed: 'color: #7700ff; icon colour: #7700ff'
    use: LEARN MORE link inside the State of Postgres resource tile, transparent over its cyan-to-green gradient. Width 501px and height describe the inline action.
  button-banner-outline:
    type: button
    textColor: '#ffffff'
    border: '1px solid #ffffff'
    rounded: 4px
    padding: 11px 24px 12px
    height: 50.7px
    typography: 18px / 600 NationalWeb
    hover: 'background-color: #ffffff; color: #7700ff'
    pressed: 'background-color: #ffffff; color: #7700ff'
    focus: 'background-color: #ffffff; color: #7700ff'
    use: Learn More link in the rotating Gartner DEM campaign banner, aria-label Gartner Magic Quadrant™ DEM; transparent on the campaign artwork at rest; measured width 148.8px.
fonts:
  roles:
    display: NationalWeb
    body: NationalWeb
---

# Design System Inspiration of Datadog

## Overview

### Visual Theme & Atmosphere

Datadog brings infrastructure, applications, logs and security into a shared observability platform. Its founding goal in 2010 was unified visibility for development, operations and business teams; its current company page extends that story to applications, infrastructure, data, models and security in the AI era. The homepage expresses that evolution with the headline “AI-Powered Observability and Security,” a large angled dashboard visual and a product section that includes Bits AI alongside Infrastructure, Log Management, APM and Security. [Company](https://www.datadoghq.com/about/leadership/), [history](https://www.datadoghq.com/blog/datadog-acquires-logmatic-io/).

Purple gives the measured marketing surface its most repeatable visual signature. The hero's filled action uses `#632ca6`, its outlined partner uses the same purple, and both turn `#7700ff` on hover. The official press kit distinguishes logo purple `#632ca6` from background-and-accent purple `#8000ff`. These are separate documented values; the measured interaction colour is a third value. The dog in the logo is named Bits. [Press kit](https://www.datadoghq.com/about/resources/).

The homepage starts with a white canvas and near-black ink, moves through illustrated campaign bands and a black Products section, then closes with a deep purple-black footer. NationalWeb carries both the headline and the functional labels. The filled/outlined CTA pair, centered hero, high-contrast section bands and product imagery are useful building blocks for this style. The resource tiles also use cyan, green and blue imagery or gradients, so purple does not describe the entire page palette.

Datadog's product design system is DRUIDS: Datadog Reusable User Interface Design System. The official engineering article dates its beginning to 2018 and describes repeatable UX patterns across an expanding platform. That supplies product-design context; the values below describe the public marketing homepage measured on 2026-11-02. The measured homepage is the English edition (`datadoghq.com/`, HTML `lang="en"`). [DRUIDS article](https://www.datadoghq.com/blog/engineering/druids-the-design-system-that-powers-datadog/).

#### Primary tasks

- Explore infrastructure monitoring, APM, logs, AI and security from the Products section.
- Compare the platform's capabilities and pricing through the top navigation.
- Start a free-trial flow or open the platform tour from the hero.
- Follow research and campaign links, including the State of Postgres resource tile.

These tasks describe links and labels on the public page. Trial and tour destinations were not activated during capture.

### Brand Narrative

Datadog's 2017 Logmatic announcement dates the company to 2010 and describes a progression from infrastructure metrics to APM and log analytics. Its leadership page identifies Olivier Pomel as CEO/co-founder and Alexis Lê-Quôc as CTO/co-founder, and records their earlier technology and operations roles at Wireless Generation. These sources establish the founders and the platform's unifying goal without requiring an invented origin anecdote.

The present company page broadens the platform story to include data and models alongside infrastructure, applications and security. On the homepage, Bits AI appears in the Products section, while the dog symbol remains the named Bits identity in the press kit. This joins an established visual identity to current AI-era positioning; no dated visual rebrand announcement was verified.

DRUIDS adds a documented design history. Datadog says it began the system in 2018 to make interactions familiar across products and efficient to produce. The article treats the underlying React, TypeScript and CSS implementation as the source of truth for component behavior, and describes contextual links between documentation, design files and source code. [History](https://www.datadoghq.com/blog/datadog-acquires-logmatic-io/), [leadership](https://www.datadoghq.com/about/leadership/), [DRUIDS](https://www.datadoghq.com/blog/engineering/druids-the-design-system-that-powers-datadog/).

### Principles

The first three principles below come from the DRUIDS engineering article; the last two come from the press kit and the measured homepage. They have different scopes.

1. **Repeat familiar interactions.** The DRUIDS article describes users expecting filters, time ranges and graph inspection to work consistently across the platform.
2. **Keep context nearby.** The article describes minimizing dead ends through contextual links to additional information.
3. **Use implementation as a behavioral reference.** The article identifies code as the source of truth for component appearance and function.
4. **Preserve identity.** Follow the press kit's naming, configuration and logo-treatment rules.
5. **Reproduce the observed action hierarchy.** The marketing hero pairs a purple filled link with a purple outlined link, and the CTA labels are heavier than the navigation labels.

### Personas

No first-party persona profiles were verified. The homepage itself names developers, IT operations teams and business users in its careers copy, and engineers, developers and security experts in its event copy; these are audience descriptions, without invented names, ages, locations or preferences.

## Colors

| Colour | Value | Verified role and evidence |
|---|---|---|
| Datadog Purple | `#632ca6` | Official logo purple; measured Free trial background and platform-outline text/border at rest. |
| Backgrounds & Accents Purple | `#8000ff` | Printed in the official press kit for backgrounds and accents; also present in the homepage text census. |
| Live interaction violet | `#7700ff` | Measured hover on both hero CTAs, Pricing and the Postgres link; text colour on the filled banner CTA states. Root `--bs-neue` resolves from `#70f`. |
| Foreground | `#212529` | Paragraph ink: three census entries; also the hero CTAs' measured pressed/focus text. Root `--bs-body-color` agrees. |
| Pure black | `#000000` | Products section background in the homepage HTML and screenshot; one opaque background in the census. |
| Muted | `#555555` | Resting Pricing label and the other visible top-level navigation labels. |
| Canvas / on-primary | `#ffffff` | White page background and the filled hero CTA's resting label. |
| Light surface | `#f6f6f6` | Careers band uses `bg-gray-lightest`; the census has one matching background and the theme property agrees. |
| Alternate surface | `#eeeeee` | One opaque homepage background in the census; no broader component role assigned. |
| Footer | `#110617` | One opaque background in the census, matching the footer's dark-purple treatment in the first-party HTML/CSS. |

The census's most frequent text colour is `rgb(226, 226, 226)` (107 entries); it is not the paragraph-ink role. White text has 66 entries, while paragraph ink is led by `rgb(33, 37, 41)`. Alpha colours stay as alpha values: the footer also includes `rgba(255, 255, 255, 0.5)` text.

The stylesheet theme still declares `--bs-gray-darker: #333333` and `--bs-gray-light: #c7c7c7`. Their earlier assignments to standard body copy and disabled text were not established by this capture. There is no verified semantic error palette in this reference.

## Typography

### Evidence classes

- **Official product use:** no product typeface was identified in the opened first-party narrative documents. The DRUIDS article confirms the design system's purpose without naming a font.
- **Live-loaded on the marketing homepage:** `nationalweb` 300 normal, 300 italic, 400 italic, 600 normal and 700 normal; `robotomono-regular` 400 normal; and `iconfont`. The declared family on body, H1 and buttons begins with `NationalWeb`. The measured CTA and navigation identities also name NationalWeb.
- **Official distributed assets:** the homepage's own CSS declares NationalWeb Book, Semibold and Bold as relative WOFF2/WOFF URLs under `../fonts/web-fonts/`. The loaded 300 normal face maps to `NationalWeb-Book`, 600 to `NationalWeb-Semibold`, and 700 to `NationalWeb-Bold`. `robotomono-regular` has WOFF/TTF sources; `iconfont` has WOFF2/WOFF sources. These are CSS source declarations; no font file was downloaded and no redistribution licence was established.
- **Declared-only faces:** NationalWeb 100 normal, 200 normal/italic, 400 normal and 500 normal; Calibre 400/600; Simplon Mono 400; the `robotomono` aliases and medium/bold variants; Noto Sans JP, Noto Sans TC and Noto Sans Variable. They did not appear in this survey's loaded-face list, so they receive no specimen here. Helvetica and Arial occur in the fallback declaration and were not established as rendered faces.
- **Unresolved:** a signed-in product font, regional-script rendering and font licensing. Substitute: none chosen.

The Book/Light distinction matters: the CSS assigns `NationalWeb-Book` to weight 300, while the asset named `NationalWeb-Light` is assigned weight 200. A weight-300 label therefore should not be called “NationalWeb Light.” Source declarations are in the [homepage stylesheet](https://www.datadoghq.com/styles/datadog-home.min.bfa64ab1d98490361a636745a2ab4a2a6902824ea1bfe443dc3ec2d179fdb87e.css) and [shared stylesheet](https://www.datadoghq.com/css/styles.min.7a0d23e2814b7fe6a6faca76f4cc77312cd823874d70d0b22e9e44044d3e0a6f.css).

### Hierarchy

| Role | Size / weight | Line height | Evidence |
|---|---|---|---|
| Hero H1 | 68px / 600 | 68px | Homepage H1 classes and linked CSS at desktop widths; CSS-declared, not a separate computed H1 probe. |
| Products heading | 48px / 700 | 48px | Homepage's explicit heading classes and their tablet-up CSS rules. |
| Global H2 default | 36px / 600 | 40px | First-party CSS default; individual headings can override it. |
| Hero subtitle | 32px / 300 | 38px | Desktop utility classes on “See inside any stack…”; CSS-declared. |
| Hero CTA pair | 18px / 700 | 18px | Computed control identities; letter-spacing 0.08px. |
| Pricing navigation | 18px / 600 | 25.7143px | Computed control identity. |
| Campaign outline CTA | 18px / 600 | 25.7143px | Computed Learn More control identity. |
| Postgres tile action | 18px / 700 | 18px | Computed LEARN MORE link identity. |
| Body base | 22px / 300 | Not assigned here | Explicit body size and weight in the page's CSS; local text styles may override them. |

Use the observed weight contrast between the hero and its subtitle, and between navigation and the hero actions. The homepage's 600 headline and 700 CTAs coexist with lighter 300 text; the product UI's typography requires its own evidence.

## Layout

The desktop hero centers the headline and subtitle above a pair of equal-width actions. At 1440 × 1000, Free trial begins at x=472 and the platform link at x=719; both are 235px wide, leaving a 12px gap. The headline, actions and angled product visual form the opening composition. Customer logos follow beneath it.

The page then uses full-width bands: a split campaign image/text row, a rotating campaign, the black Products section, alternating resource/image rows, an events promotion and the dark footer. These are observations from the full-page capture. The Products section uses accordion summaries beside linked product imagery on desktop.

The verified spacing values have local uses, rather than proving a universal scale:

| Value | Use |
|---|---|
| 12px | Measured horizontal gap between the hero CTA pair. |
| 16px | Primary hero CTA's vertical padding. |
| 24px | Hero and campaign CTA horizontal padding. |
| 28px | Header Get Started Free link's horizontal padding in the survey. |

Measured CTA radii are 4px. The Pricing navigation link, Postgres action and search input have 0px radii. The footer visibly includes a pill-shaped action, so a blanket “never pill-shaped” rule would misdescribe this homepage.

### Responsive Behavior

Browser measurements cover the 1440 × 1000 desktop viewport. The following responsive rules were read from the linked CSS and homepage classes; mobile rendering was not probed.

| Element | CSS-declared behavior |
|---|---|
| Hero H1 | 38px/42px at the base size; 68px/68px from 1200px. The homepage's `tw-font-semibold` keeps weight 600. |
| Hero subtitle | Base class 20px/24px; tablet utility 24px/28px; desktop utility 32px/38px. |
| CTA wrapper | Base `tw-flex-col`; `tablet:tw-flex-row` plus a 12-column tablet grid. |
| Products heading | Base 38px/42px; tablet utility 48px/48px. |
| Resource rows | Base stacked flex columns; desktop 12-column grid classes. |

The linked utility stylesheet places tablet rules at 768px and desktop rules at 1200px. The page also includes Bootstrap breakpoint properties at other widths; those do not replace the utilities actually attached to these elements.

The primary action's measured height is 54px, while the navigation link is 43.7px high. Pricing-card collapse behavior and mobile touch behavior were not verified.

## Elevation & Depth

The sampled hero actions, Pricing link, Postgres action and campaign action all have `box-shadow: none`. The sampled action ancestors also use flat backgrounds without shadows. Section colour, imagery and borders provide much of the visible grouping.

The header is an exception: the homepage stylesheet declares `.main-nav` with `box-shadow: 0 0 8px 8px rgba(0,0,0,7%)`, and the viewport shows a soft shadow beneath it. The angled dashboard visual also contains visible shadowing. The reference therefore supports flat control surfaces together with a shadowed header and dimensional product imagery.

| Treatment | Verified application |
|---|---|
| Flat | Measured controls have no box shadow. |
| Outline | Purple hero-secondary border and white campaign-secondary border. |
| Light surface | Careers band uses `#f6f6f6`; census also records `#eeeeee`. |
| Dark contrast | Black Products band and `#110617` footer. |
| Header separation | CSS-declared soft shadow on `.main-nav`. |

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.none`: `none`

## Motion & Easing

The measured hero CTA pair and campaign outline CTA have a longest computed transition duration of **150ms**, with `ease-in-out`. Their raw transition lists include colour, background colour, border colour and box shadow. The pointer/focus samples were read after 900ms to allow them to settle. Pricing and the Postgres link report `all 0s ease 0s`.

The homepage HTML includes an autoplaying, muted, looping inline hero video. The screenshot's angled dashboard image is part of that presentation; this capture does not supply a page-reveal timing scale.

The first-party homepage stylesheet contains a scoped reduced-motion rule, `@media(prefers-reduced-motion:reduce){.btn{-webkit-transition:none;transition:none}}`. It was read as CSS; reduced-motion rendering was not separately measured. No broader motion scale or authored cubic-bezier curve is assigned.

## Components

### Primary CTA — Free trial

This is a link with `role="button"` in the hero, 235 × 54px at the measured desktop viewport. It has a 4px radius, 16px 24px padding, NationalWeb 18px/700 and an 18px line height. Its resting background is `#632ca6`, foreground `#ffffff`, and border `1px solid rgba(0, 0, 0, 0)`. Its box shadow is `none`.

- Hover: background becomes `#7700ff`; the white label stays white.
- Pressed: background becomes `rgba(0, 0, 0, 0)`, revealing the white page; text and the 1px border become `#212529`.
- Keyboard focus: transparent background, `#212529` text, transparent 1px border, no drawn outline or shadow. The original fill and label return after blur.

### Secondary CTA — SEE THE PLATFORM

This hero link also has `role="button"`, measures 235 × 54px and uses a 4px radius. Padding is 14px 24px 16px, with the same 18px/700 label. It rests transparent on white, with `#632ca6` text and a `1px solid #632ca6` border. The play glyph uses the icon font.

- Hover: `#7700ff` fill and border, with white label and play glyph.
- Pressed: transparent fill, `#212529` label/glyph and `1px solid #212529` border.
- Keyboard focus: transparent fill and border, `#212529` label/glyph, no drawn outline or shadow; all changes clear after blur.

### Navigation link — Pricing

The Pricing link is 87.3 × 43.7px, with a 0px radius, 8.5px 12px 9.5px padding, NationalWeb 18px/600 and a 25.7143px line height. Its own background is transparent over the white header. It rests at `#555555`, has no border or shadow, and changes its label and child span to `#7700ff` on hover and press. Keyboard focus produced no change within the compared scope described in §14; no focus token is assigned.

### Resource-tile link — State of Postgres

The measured element is the tile's LEARN MORE link, labelled `Link to post`, targeting `/state-of-postgres/`. Its 501 × 18px geometry describes the action row. It has a 0px radius, 0px padding, NationalWeb 18px/700 and no border or shadow. The transparent link sits over the tile's cyan-to-green gradient. Resting `#632ca6` text and its arrow glyph become `#7700ff` on hover and press. Keyboard focus produced no change within the compared scope.

### Campaign outline link — Learn More

The rotating campaign selected on the second states load was labelled `Gartner Magic Quadrant™ DEM`, with visible text “Learn More.” The link measures 148.8 × 50.7px, uses a 4px radius, 11px 24px 12px padding and NationalWeb 18px/600 with 25.7143px line height. It rests transparent on the campaign artwork, with white text and a `1px solid #ffffff` border. Hover, press and keyboard focus all produce a white fill with `#7700ff` text; the border remains white. The focus change clears after blur.

### Search field — observed geometry only

The header's `input.ais-SearchBox-input`, placeholder “Search,” reports 1322 × 49px, 0px radius, 0px 10px padding and NationalWeb 32px/300 with 49px line height. Its own background is transparent, foreground `#212529`, border `none` and shadow `none`. It belongs to the collapsed search layer. Tab reached it and produced no style change; hover and press remained UNMEASURED because another element covered the pointer target, including after hiding the fixed overlay. It is documented here without an interactive component token.

### States

| Control | Hover | Pressed | Keyboard focus |
|---|---|---|---|
| Hero Free trial | Background `#632ca6` → `#7700ff`. | Transparent fill; `#212529` text and border. | Transparent fill and border; `#212529` text; no drawn outline/shadow; resets on blur. |
| Hero SEE THE PLATFORM | Violet fill/border and white label/glyph. | Transparent fill; `#212529` text/glyph and border. | Transparent fill/border; `#212529` text/glyph; resets on blur. |
| Pricing navigation | Label/child span `#555555` → `#7700ff`. | Same violet label as hover. | No measured style change. |
| Postgres tile action | Label and arrow `#632ca6` → `#7700ff`. | Same violet label/arrow as hover. | No measured style change. |
| Gartner DEM Learn More | White fill; violet text. | Same fill/text as hover. | Same fill/text as hover; resets on blur. |
| Collapsed search input | UNMEASURED: pointer covered. | UNMEASURED: pointer covered. | Tab reached it; no measured style change. |

For “no measured style change,” the probe compared the element, its `::before`/`::after`, every inspected descendant and descendant pseudo-element, and three ancestor levels with pseudo-elements. Pricing had one descendant, Postgres one empty icon descendant, and search none. The comparison included colours, borders, drawn outlines, shadows, opacity, transform, filter, visibility, size, decoration, background/mask properties and supported image/SVG attributes. This is a DOM/style comparison; it does not establish the absence of canvas, video, sibling or inaccessible-frame changes.

All found controls were enabled at measurement. No disabled state or application empty, loading, skeleton, validation, error or success state was verified. The homepage controls' observed focus changes are colour changes, not a brand focus-ring token.

## Do's and Don'ts

### Do

- Pair the observed filled and outlined purple hero actions; carry their measured states through implementation.
- Use NationalWeb with the verified weight and size hierarchy for this marketing style.
- Use near-black foreground on the white hero, and white content on the black Products band.
- Keep the measured hero and campaign button radii at 4px.
- Preserve the name “Datadog” as one word, with only its first letter capitalized.
- Prefer the vertical logo configuration; the press kit allows the horizontal configuration when necessary.

### Don't

- Merge documented `#8000ff` background/accent purple with measured `#7700ff` interaction violet.
- Call the whole site shadow-free or assign the sampled controls' radius to every surface.
- Treat unloaded CSS font names as live specimens.
- Invert, recolour, distort, outline, box or apply a gradient to the logo. These restrictions come from the press kit and concern the logo artwork.

## Voice & Tone

The homepage leads with a capability label: “AI-Powered Observability and Security.” Its subtitle promises visibility across stacks and applications. Action labels are short: “Free trial,” “SEE THE PLATFORM,” and “Learn More.” The product navigation names concrete areas such as Infrastructure, APM and Log Management.

The brand page is more prescriptive: it specifies capitalization and logo configurations, then lists prohibited logo alterations. Treat the homepage examples as evidence for concise capability-led copy, and the press kit as explicit identity guidance. No general prohibition on superlatives or enthusiastic copy was established.

| Context | Source-backed guidance |
|---|---|
| Hero | Lead with the platform capability, as the current H1 does. |
| Product navigation | Use the product's actual technical names. |
| Actions | Use a short verb or action phrase. |
| Brand name | One word, first letter capitalized. |
| Technical design writing | The DRUIDS article explains repeatable interaction patterns and contextual links. |

## Agent Prompt Guide

Use the measured marketing composition as a starting point: a white centered hero, near-black copy, NationalWeb, two equal-width purple actions, an angled dashboard visual, then strong campaign and product bands.

### Quick colour reference

- Resting primary action: `#632ca6` with `#ffffff` label.
- Interaction violet: `#7700ff`.
- Documented background/accent violet: `#8000ff`.
- Foreground: `#212529`; resting navigation: `#555555`.
- Canvas: `#ffffff`; light surfaces: `#f6f6f6` and observed `#eeeeee`.
- Products band: `#000000`; footer: `#110617`.

### Example component prompts

- “Build the desktop Datadog homepage hero with the CSS-declared NationalWeb 68px/600 headline and 32px/300 subtitle. Place 235 × 54px filled and outlined actions 12px apart. Use the measured colour, border and focus changes from §4.”
- “Create the white desktop navigation with NationalWeb 18px/600 Pricing text at `#555555`, padding 8.5px 12px 9.5px, changing to `#7700ff` on hover and press. Give the header the soft shadow declared in §6.”
- “Create a campaign action with white text and border over dark artwork, 4px radius and 11px 24px 12px padding. Its hover, pressed and keyboard-focus fill is white with `#7700ff` text.”
- “Build a research tile with an illustrated image, explanatory copy and a compact LEARN MORE link. Match the observed Postgres action's 18px/700 type and purple-to-violet label and arrow change.”

### Iteration guide

1. Match the exact action variant before copying its values: hero actions are 700 weight; navigation and the measured campaign action are 600.
2. Preserve the distinct purple rest and hover values.
3. Use section contrast and imagery, with flat controls and the observed header shadow.
4. Keep the marketing homepage's values separate from unmeasured signed-in product surfaces.
