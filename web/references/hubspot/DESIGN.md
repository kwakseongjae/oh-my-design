---
name: HubSpot
colors:
  primary: '#ff4800'
  primary-hover: '#c93700'
  primary-pressed: '#9f2800'
  secondary-hover: '#fcece6'
  secondary-pressed: '#fcc6b1'
  primary-tint: '#fcded2'
  canvas: '#fcfcfa'
  warm-parchment: '#f8f5ee'
  foreground: '#1f1f1f'
  deep-teal: '#042729'
  video-card-teal: '#061c1d'
  on-primary: '#ffffff'
  focus-ring: '#459195'
typography:
  display-hero:
    fontSize: 65px
    fontWeight: 300
    lineHeight: 1.2
    use: 'Homepage H1: loaded HubSpot Serif; page CSS .-custom-font-size-65 at width >= 1080px sets 65px/78px; not a separate computed heading sample'
  display-01:
    fontSize: 112px
    fontWeight: 300
    lineHeight: 1.07142857
    use: Computed root --cl-font-size-display-01 = 7rem; generic display token, not the current hero
  display-02:
    fontSize: 72px
    fontWeight: 300
    lineHeight: 1.22222222
    use: Computed root --cl-font-size-display-02 = 4.5rem; generic display token
  heading-xl:
    fontSize: 48px
    fontWeight: 300
    lineHeight: 1.15384615
    use: Computed root H1 tokens; HubSpot Serif
  heading-lg:
    fontSize: 40px
    fontWeight: 300
    lineHeight: 1.1
    use: Computed root H2 tokens; HubSpot Serif
  heading:
    fontSize: 24px
    fontWeight: 500
    lineHeight: 1.41666667
    use: Computed root H3 tokens
  heading-sm:
    fontSize: 22px
    fontWeight: 500
    lineHeight: 1.45454545
    use: Computed root H4 tokens
  subheading:
    fontSize: 18px
    fontWeight: 300
    lineHeight: 1.77777778
    use: Computed root large paragraph tokens
  body:
    fontSize: 16px
    fontWeight: 300
    lineHeight: 1.75
    use: Computed root medium paragraph tokens
  body-sm:
    fontSize: 14px
    fontWeight: 300
    lineHeight: 1.57142857
    use: Computed root small paragraph tokens
  caption:
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.66666667
    use: Computed root microcopy tokens
  button:
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.75
    use: 'Survey: 56px medium CTA, 28px line height'
  button-sm:
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.57142857
    use: Measured 42px header CTA, 22px line height
rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 16px
  full: 9999px
spacing:
  xs: 4
  sm: 8
  md: 12
  base: 16
  lg: 24
  xl: 32
  xxl: 48
  inline-medium: 40
  inline-large: 64
  section-small: 40
  section: 64
  section-large: 96
components:
  button-primary:
    type: button
    backgroundColor: '#ff4800'
    textColor: '#ffffff'
    border: 2px solid rgba(0, 0, 0, 0)
    rounded: 8px
    height: 68px
    padding: 16px 40px
    typography: 18px / 500 HubSpot Sans; line-height 32px
    hover: 'bg #c93700'
    pressed: 'bg #9f2800'
    focus: 'bg #c93700; outline 2px solid #459195; outline-offset 2px'
    use: Hero Get a demo link; accessible label includes of HubSpot's premium software; white text remains unchanged in the measured states.
  button-outlined:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#ff4800'
    border: '2px solid #ff4800'
    rounded: 8px
    height: 68px
    padding: 16px 40px
    typography: 18px / 500 HubSpot Sans; line-height 32px
    hover: 'bg #fcece6; fg #c93700; border 2px solid #c93700'
    pressed: 'bg #fcc6b1; fg #9f2800; border 2px solid #c93700'
    focus: 'bg #fcece6; fg #c93700; border 2px solid #c93700; outline 2px solid #459195; outline-offset 2px'
    use: Hero Get started free link; accessible label includes with HubSpot's free tools.
  button-sm:
    type: button
    backgroundColor: '#ff4800'
    textColor: '#ffffff'
    border: 2px solid rgba(0, 0, 0, 0)
    rounded: 8px
    height: 42px
    padding: 8px 16px
    typography: 14px / 500 HubSpot Sans; line-height 22px
    hover: 'bg #c93700'
    pressed: 'bg #9f2800'
    focus: 'bg #c93700; outline 2px solid #459195; outline-offset 2px'
    use: Header Get a demo link; compact counterpart of the measured hero CTA.
  nav-pricing:
    type: button
    textColor: '#1f1f1f'
    rounded: 0px
    height: 28px
    padding: 0px
    typography: 16px / 500 HubSpot Sans; line-height 28px
    hover: 'text-decoration underline solid #1f1f1f'
    pressed: 'text-decoration underline solid #1f1f1f'
    focus: 'underline; ::after outline 2px solid #459195; outline-offset -2px; pseudo-element 80px by 76px'
    use: Pricing navigation link; transparent control on the white header. Background omitted; measured link box is 52px by 28px.
  card-video:
    type: card
    backgroundColor: '#061c1d'
    textColor: '#f8f5ee'
    rounded: 0px
    height: 560px
    padding: 0px
    hover: width 459px to 800px; preview and play-button opacity 0 to 1
    pressed: width 459px to 800px; preview and play-button opacity 0 to 1
    use: 'All your customer data, right at your fingertips. video trigger, a div with role=button. Image covers the teal base; visible H2 inherits #f8f5ee. Keyboard focus was UNMEASURED; no focus token.'
fonts:
  roles:
    sans: HubSpot Sans
    serif: HubSpot Serif
---

# Design System Inspiration of HubSpot

## Overview

### Visual Theme & Atmosphere

HubSpot was founded in 2006 by Brian Halligan and Dharmesh Shah. Its company history describes them as MIT graduate students in 2004, noticing that buyers wanted helpful information instead of ads. That history follows the expansion from inbound marketing into a customer platform, now described as agentic and built on an AI-powered Smart CRM. Its mission links business growth to customers' success. [Company story](https://www.hubspot.com/our-story)

The live marketing surface combines editorial serif headlines, restrained sans-serif navigation, orange actions, warm neutral tokens and photographic video cards. The current hero is centered on white, with two actions below the copy and three photographic cards beneath it. Orange also appears as the period after the headline: the page's `.-brand::after` rule supplies the punctuation. This is an observed brand accent as well as an action color. The official trademark page identifies the orange sprocket as a recognizable brand mark. [Homepage](https://www.hubspot.com/), [trademark guidelines](https://legal.hubspot.com/tm-usage-guidelines)

HubSpot's September 2025 product design writing describes a phased refresh intended to reduce cognitive load and create a more coherent platform, with accessibility and AI as drivers. It describes WCAG 2.2 AA as a goal under active work and dark mode as a future possibility. These are stated directions, not measured completion claims. [Designing for Your Next Decade of Growth](https://product.hubspot.com/blog/designing-for-your-next-decade-growth)

Primary tasks on this public surface are to explore the product hubs, compare pricing, request a demo and start with free tools. The captured controls describe this marketing website; authenticated CRM workflows are a separate surface.

### Brand Narrative

The company history starts with a change in buyer behavior: helpful information mattered more than interruptions. HubSpot's subsequent expansion beyond marketing explains the breadth of its customer-platform story. Its mission connects a company's success with its customers' success. [Company story](https://www.hubspot.com/our-story)

Its official inbound guide still describes three stages: attract people through useful content, engage them with relevant insights and solutions, then delight customers with support. The guide now presents Loop Marketing as a further development for AI-assisted personalization, wider distribution and iteration. This supplies a current link between the founding method and the platform's newer AI story. [Inbound methodology](https://www.hubspot.com/inbound-marketing)

Canvas is supported as part of that design history. HubSpot's 2018 article introduces HubSpot Canvas as its design language and explains how inconsistent interfaces motivated a shared system. The 2021 article identifies Canvas as the home of components, patterns and voice guidance, with an internal inclusive-content page. The former public Canvas host now redirects even a nonsense path to a general blog article; its endpoint does not prove a current documentation site. [Canvas history](https://product.hubspot.com/blog/how-building-a-design-system-empowers-your-team-to-focus-on-people-not-pixels), [inclusive-content article](https://product.hubspot.com/blog/inclusivity-is-a-design-principle)

### Principles

- **Connect growth with customer success.** This is the company's stated mission context. Use it to keep the task and benefit clear in marketing copy. [Company story](https://www.hubspot.com/our-story)
- **Reduce cognitive load through consistency.** The 2025 design article links simplification and visual hierarchy with a cohesive platform. Preserve clear grouping and predictable control states. [Design evolution](https://product.hubspot.com/blog/designing-for-your-next-decade-growth)
- **Write inclusively and plainly.** The published product-writing guidance supports understandable language and neutral pronouns. [Inclusive content](https://product.hubspot.com/blog/inclusivity-is-a-design-principle)

These combine sourced principles with practical implementation guidance; they are not presented as a newly verified list of Canvas's five original principle names.

### Personas

No first-party persona profiles were verified.

## Colors

The survey enumerated 776 computed root custom properties and 937 distinct declared property names. The first-party palette uses `--hubspot-2025-*` primitives, `--light-theme-*` and `--dark-theme-*` semantic roles, and `--cl-color-*` aliases. Ownership follows the homepage's `data-cl-brand=hubspot-2025` selectors. The following values come from those properties and the measured controls. [Homepage](https://www.hubspot.com/)

| Role | Value | Evidence and use |
|---|---|---|
| Primary | `#ff4800` | `--cl-color-button-primary-fill-idle`; both demo links at rest |
| Primary hover | `#c93700` | Primary fill on hover and keyboard focus; secondary hover text and border |
| Primary pressed | `#9f2800` | Primary pressed fill; secondary pressed text |
| Secondary hover surface | `#fcece6` | Hero free-tools CTA on hover and focus |
| Secondary pressed surface | `#fcc6b1` | Hero free-tools CTA while pressed |
| Peach accent | `#fcded2` | Declared `--wf-animated-carousel-breeze-orange-4`; one rendered background in the census; not a verified badge recipe |
| Canvas token | `#fcfcfa` | `--cl-color-background-01`; seven rendered backgrounds; the hero overrides this with white |
| Warm parchment | `#f8f5ee` | `--cl-color-background-02`; also the visible video-card heading ink |
| Foreground | `#1f1f1f` | `--cl-color-text-01`; paragraph ink on 22 paragraphs |
| Deep teal | `#042729` | `--dark-theme-background-01`; one rendered background |
| Video-card base | `#061c1d` | Measured first video card; covered by its image and gradient |
| White / on primary | `#ffffff` | Demo label, secondary rest fill, header and hero surface; 37 rendered backgrounds |
| Focus ring | `#459195` | `--cl-color-focus-01`; authored solid outlines in keyboard measurements |

Secondary text is an alpha role: `--cl-color-text-02 = rgba(0, 0, 0, 0.6196078431)`. The census serializes two text uses as `rgba(0, 0, 0, 0.62)` and 99 as `rgba(255, 255, 255, 0.62)`. Border census values include `rgba(0, 0, 0, 0.11)` on 35 elements. These are alpha values, not opaque palette entries.

The footer semantic background is `#1f1f1f` (`--cl-color-background-footer-01`), separate from the dark section's deep teal.

## Typography

| Evidence class | What was verified |
|---|---|
| Official product use | No opened typography document names the authenticated application's product face. Homepage use does not establish that face. |
| Live-loaded | `document.fonts` reports HubSpot Sans `300 400 normal` and `500 600 normal`; HubSpot Serif `400 600 normal` and `300 normal`. The declared body and button family is HubSpot Sans; H1 is HubSpot Serif. |
| Official distributed assets | Homepage `@font-face` rules serve `HubSpotSans-Book.woff2`, `HubSpotSans-Medium.woff2`, `HubSpotSerif-Medium.woff2` and `HubSpotSerif-Book.woff2` from `www.hubspot.com/hubfs/assets/hs-components/v4/fonts/hubspot-2025/`. The rules establish asset names and serving paths; no license or redistribution permission was verified. |
| Declared-only | Zen Kaku Gothic New has Regular, Medium and Bold WOFF2 declarations under the first-party `/fonts/ja/` path but no loaded face in this English capture. Runtime root variables also name Lexend Deca and LexendDeca; neither loaded. A Google Fonts Lato stylesheet was unreadable to the census and no Lato face loaded. None receives a specimen or a family token. |
| Unresolved | Font authorship, licensing, product-wide adoption and script coverage were not established. Substitute: none chosen. |

The metric table separates computed root tokens from specific control geometry. Rem values remain visible below; their pixel equivalents use 16px/rem, cross-checked against the expanded search input, whose matching CSS declares .875rem and whose measured type is 14px. The current H1 has class `.-custom-font-size-65`; page CSS sets it to 65px with 78px line height at widths of at least 1080px. Its base heading weight resolves through the 300 root heading token. This authored rule is separate from the generic display and H1 tokens. [Homepage CSS and live font census](https://www.hubspot.com/)

| Role | Size | Weight | Line-height | Evidence |
|---|---:|---:|---:|---|
| Current hero | 65px | 300 | 78px / 1.2 | Page-specific CSS at width ≥1080px; not an additional computed H1 sample |
| Display 01 | 112px / 7rem | 300 | 1.07142857 | Computed root `--cl-*-display-01` |
| Display 02 | 72px / 4.5rem | 300 | 1.22222222 | Computed root `--cl-*-display-02` |
| H1 / heading XL | 48px / 3rem | 300 | 1.15384615 | Computed root H1 tokens |
| H2 / heading LG | 40px / 2.5rem | 300 | 1.1 | Computed root H2 tokens |
| H3 / heading | 24px / 1.5rem | 500 | 1.41666667 | Computed root H3 tokens |
| H4 / heading SM | 22px / 1.375rem | 500 | 1.45454545 | Computed root H4 tokens |
| Large paragraph | 18px / 1.125rem | 300 | 1.77777778 | Computed root paragraph tokens |
| Medium paragraph | 16px / 1rem | 300 | 1.75 | Computed root paragraph tokens |
| Small paragraph | 14px / .875rem | 300 | 1.57142857 | Computed root paragraph tokens |
| Microcopy | 12px / .75rem | 500 | 1.66666667 | Computed root microcopy tokens |
| Hero action | 18px | 500 | 32px | Both measured hero links |
| Medium action | 16px | 500 | 28px | Survey's 56px CTA pair |
| Compact action | 14px | 500 | 22px | Measured 42px header demo link |
| Pricing nav link | 16px | 500 | 28px | Measured header link |

Use the measured serif/sans distinction when reproducing this surface. Keep the light paragraph and large-heading weights distinct from medium action labels; a universal 500 heading rule would lose the current hierarchy.

## Layout

The current desktop composition has a two-level header, a centered headline and supporting paragraph, a centered CTA pair, then a three-card photographic row. The first two card x positions are 16px and 483px with a 459px card width, giving an 8px gap. This replaces the prior reference's two-column hero description. The product platform block below combines a sticky sidebar with a card region. [Homepage markup, survey and viewport](https://www.hubspot.com/)

Computed root container tokens are 1080px default, 1220px large/current section maximum and 1460px enhanced. `--global-nav-content-max-width` is 1220px. These are named container options, not a claim that every section is constrained to one width.

Spacing properties retain a small set of repeatable steps: block gaps .5/1/1.5/2rem; tile gaps .75/1/1.5/2rem; container padding 1/1.5/2rem; current inline gaps 1.5/2.5/4rem. At 16px/rem these are 8, 12, 16, 24, 32, 40 and 64px. The navigation's `.global-nav-card-text-wrapper` also declares a .25rem/4px gap. Section-padding tokens are 0, 24, 40, 64 and 96px. These values establish spacing options, not a universal base-unit policy.

The declared module property `--breeze-agents-multi-column-content-gap-mobile: 3rem` also retains a 48px spacing option; this is CSS evidence, not a rendered mobile measurement.

The radius properties are 4px small/input, 8px medium/small-container, 16px container and 9999px round. The measured video card and Pricing link use 0px. The circular carousel controls in the survey use `50%`; that percentage is kept in prose rather than converted into a numeric radius token. An avatar use for 9999px was not verified.

### Responsive Behavior

Only the 1440×1000 viewport was rendered. Homepage CSS changes generic type tokens at 900px and applies the current hero's 65px/78px override at 1080px; these are inspected CSS conditions, not tested mobile layouts. Navigation collapse, touch behavior and other viewport geometries remain unmeasured.

## Elevation & Depth

All six sampled controls have `box-shadow: none` at rest. The census includes low-alpha black borders; this supports flat control treatments without establishing a universal ban on shadows. The video card creates legibility over photography with the measured descendant gradient `linear-gradient(188deg, rgba(58, 61, 59, 0) 28.2%, rgb(31, 31, 31) 94.49%)`. Its preview layer has a 1px `rgba(255, 255, 255, 0.4)` border and a `rgba(255, 255, 255, 0.17)` fill. Those are specific layers, not general elevation tokens. [Homepage control capture](https://www.hubspot.com/)

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.none`: `none`

## Motion & Easing

Measured raw computed transitions are:

- Both hero CTAs and the compact header demo link: `background-color, color 0.15s, 0.15s linear, linear 0s, 0s`. The probe reports a longest transition of 150ms.
- Pricing link: `all 0s ease 0s`; longest transition 0ms.
- Search input: `all 0.3s ease-in 0s`; longest transition 300ms. Its expansion outlasts blur, so this is an observation of the expanding search control rather than an isolated focus animation.
- First video card: `flex 0.35s ease 0s`; longest transition 350ms. The card width changes between the measured states.

No reduced-motion behavior, spring behavior, page-entry timing, toast duration or authenticated workflow animation was measured. [Homepage control capture](https://www.hubspot.com/)

## Components

All controls below are logged-out homepage observations at 1440×1000. Links were sampled with pointer states and a real Tab walk; their destinations were not activated. Consent was rejected using “Decline all.” [Homepage](https://www.hubspot.com/)

**Primary hero action — Get a demo.** A link measuring 183.5×68px, with 8px corners, 16px 40px padding, 18px/500 HubSpot Sans and 32px line height. Rest is `#ff4800` with `#ffffff` text and a transparent 2px border. Hover changes only the fill to `#c93700`; pressed fill is `#9f2800`. Keyboard focus uses the hover fill and a solid 2px `#459195` outline offset 2px. Those focus changes disappear after blur.

**Secondary hero action — Get started free.** A 220×68px link with the same radius, padding and typography. Rest is `#ffffff` with `#ff4800` text and a 2px orange border. Hover gives `#fcece6` fill, `#c93700` text and border. Press gives `#fcc6b1` fill and `#9f2800` text; the border remains `#c93700`. Keyboard focus combines the hover treatment with the same 2px `#459195` outline and 2px offset.

**Compact primary action.** The header demo link is 113.4×42px, radius 8px, padding 8px 16px, type 14px/500 with 22px line height. Its rest, hover, pressed and focus colors match the primary hero action. The survey also records a medium primary/secondary pair at 56px high, padding 12px 24px, type 16px/500 and line height 28px; that pair's states were not separately measured.

**Dark-section secondary, rest only.** The survey's final free-tools link is 56px high with an 8px radius, 12px 24px padding and 16px/500 HubSpot Sans at 28px line height. Its rest fill is `rgba(0, 0, 0, 0.11)`, with `#f8f5ee` text and a 2px border in the same color. This confirms the prior dark outlined variant's rest treatment; without a state pass it stays out of component tokens.

**Pricing navigation link.** A 52×28px transparent link on the white header, radius 0, no padding or border, 16px/500 HubSpot Sans. Rest ink is `#1f1f1f`. Hover and press add a solid underline in that ink. Keyboard focus retains the underline and paints an 80×76px `::after` layer with a 2px solid `#459195` outline, offset −2px. The ring belongs to the pseudo-element, not the 52×28px link box.

**Video card — All your customer data, right at your fingertips.** The first image card is a `div` with `role=button`, 459×560px at rest, square corners, no padding, no border and no shadow. Its base is `#061c1d`; its visible H2 ink is `#f8f5ee`. Container inheritance is 16px/300 HubSpot Sans with 28px line height; this is not a measurement of the H2's own font. Hover and press widen the card to 800×560px. Its image and gradient widen with it; preview and play-button opacity change from 0 to 1. Content height changes from 126px to 95px and the heading box from 395×62px to 736×31px. Keyboard focus was UNMEASURED because the Tab walk wrapped through the chat iframe before reaching this card.

**Search, retained as a raw observation.** The header search input rests at 16×34.4px, radius 4px, padding 3.2px 8px, 16px/300 with 28px line height, transparent over white, ink `#1f1f1f`, border and shadow none. Hover produced no compared-style change while `:hover` matched. Pressed and Tab-focus snapshots show 1035×42.5px with white fill, a 1px `rgba(0, 0, 0, 0.47)` border, a white 46% gradient, padding 8px 16px 8px 40px and 14px/300 type. All those focus differences remained after blur. They do not establish an isolated focus treatment, so no search component or search focus token is published.

### States

| Control | Hover | Pressed | Keyboard focus |
|---|---|---|---|
| Hero and header demo links | Fill `#c93700` | Fill `#9f2800` | Hover fill plus solid 2px `#459195` outline, offset 2px |
| Hero free-tools link | Fill `#fcece6`; text/border `#c93700` | Fill `#fcc6b1`; text `#9f2800`; border `#c93700` | Hover colors plus the same authored outline |
| Pricing link | Ink underline | Ink underline | Underline plus outlined `::after`, 80×76px, offset −2px |
| First video card | Width 459→800px; preview/play opacity 0→1 | Same observed differences from rest | UNMEASURED; Tab cycle ended before landing |
| Search input | No change within the probe's compared style/DOM scope | Expansion and style changes described in §4 | Expansion persisted after blur; no isolated focus token |

The probe includes self, pseudo-elements, descendants and three ancestor levels. For search there are zero descendants; for the card there are ten, including an SVG, a `use` and one image. It does not compare video pixels, cross-origin iframe contents or every sibling. Empty, loading, validation, success and disabled CRM states were not inspected.

## Do's and Don'ts

The following are implementation guidance drawn from this capture:

- Pair the measured orange demo link with the outlined free-tools link when reproducing the current hero.
- Preserve the distinct hover and pressed orange values and the teal authored focus outline.
- Use loaded HubSpot Serif for this surface's large editorial headings and HubSpot Sans for the measured controls and reading text.
- Keep 8px CTA corners, 4px search corners and square video-card geometry distinct.
- Treat cream, parchment, white and dark teal as separate surface roles; the current hero has an explicit white background.
- Retain the orange headline punctuation when reproducing the hero's brand treatment.
- Do not infer the authenticated product's states, font stack or theme from the marketing page.

## Voice & Tone

HubSpot's 2021 design writing explicitly describes its product voice as “clear, helpful, human, and kind.” It calls for plain language, second-person address, active voice, simple verbs and inclusive wording, including neutral pronouns. These are documented product-writing principles, distinct from an inference about every current marketing sentence. [Inclusivity Is a Design Principle](https://product.hubspot.com/blog/inclusivity-is-a-design-principle)

The visible homepage actions are “Get a demo” and “Get started free.” Their accessible names add context about premium software and free tools. These are verified current copy examples; no error-message or onboarding register was inspected. [Homepage](https://www.hubspot.com/)

## Agent Prompt Guide

“Build a centered marketing hero with a white surface and `#1f1f1f` text. Use the live-loaded HubSpot Serif heading face and HubSpot Sans supporting text. Add the orange period after the heading. Pair a 68px-high `#ff4800` demo link with a white, orange-outlined free-tools link; both have 8px corners, 16px 40px padding and 18px/500 labels at 32px line height. Primary hover is `#c93700`, pressed is `#9f2800`; keyboard focus adds a 2px `#459195` solid outline offset 2px.”

“Below the hero, create the measured square photographic video card at 459×560px on `#061c1d`, with `#f8f5ee` heading ink and the observed dark image gradient. At this desktop width, hover expands it to 800px and reveals the preview and play button. Do not invent an unmeasured focus style.”

These prompts describe the captured surface. Font files were observed, not downloaded; no substitute was chosen.

## Governance

### Known Gaps

- **Contrast, `button-primary`.** Text `#ffffff` on `#ff4800` measures 3.40:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `button-outlined`.** Text `#ff4800` on `#ffffff` measures 3.40:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `button-sm`.** Text `#ffffff` on `#ff4800` measures 3.40:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
