---
name: PayPal
colors:
  primary: '#002991'
  primary-light: '#60cdff'
  accent-sky: '#60cdff'
  canvas: '#ffffff'
  on-primary: '#ffffff'
  foreground: '#000000'
  link: '#0066f5'
  focus-ring: '#0066f5'
  focus-inverse: '#3db5ff'
  surface-warm: '#f1efea'
  surface-grey: '#edf0f2'
  primary-hover: '#333333'
  primary-pressed: '#4d4d4d'
  header-primary-hover: '#3d3d3d'
  header-primary-pressed: '#4f4f4f'
typography:
  button:
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: '-0.24px'
    use: Measured main CTA links; loaded PayPal Pro Text VF
  nav:
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: '-0.24px'
    use: Measured Developer header link; loaded PayPal Pro Text VF
  legal-link:
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.5
    use: Terms links in the homepage survey; loaded PayPal Pro Text VF
rounded:
  full: 1000px
components:
  button-primary:
    type: button
    backgroundColor: '#000000'
    textColor: '#ffffff'
    rounded: 1000px
    height: 48px
    padding: 12px 20px
    typography: 16px / 700 PayPal Pro Text VF
    hover: 'bg #333333; padding 14px 22px; height 52px'
    pressed: 'bg #4d4d4d; padding 12px 20px; height 48px; 2px solid #0066f5 outline, offset 2px'
    focus: '2px solid #0066f5 outline, offset 2px'
    use: Learn More — a link to the seasonal campaign, on the white hero. Hover expands layout without a transform.
  button-secondary:
    type: button
    textColor: '#000000'
    rounded: 1000px
    height: 48px
    padding: 12px 20px
    typography: 16px / 700 PayPal Pro Text VF
    hover: Translucent blue fill increases; padding 14px 22px; height 52px. Exact alpha in body.
    pressed: 'Translucent blue fill increases further; height 48px; 2px solid #0066f5 outline, offset 2px. Exact alpha in body.'
    focus: '2px solid #0066f5 outline, offset 2px'
    use: Browse Offers — a link on white. A translucent blue fill replaces the prior outline; its exact rgba values are in the body.
  button-secondary-dark:
    type: button
    textColor: '#ffffff'
    rounded: 1000px
    height: 48px
    padding: 12px 20px
    typography: 16px / 700 PayPal Pro Text VF
    hover: Translucent grey fill changes; padding 14px 22px. Exact rgba and raw geometry in body.
    pressed: 'Translucent grey fill changes; 2px solid #3db5ff outline, offset 2px. Exact rgba and raw geometry in body.'
    focus: '2px solid #3db5ff outline, offset 2px'
    use: Learn About Pay in 4 — a link inside a layered card. Only the reversible self outline is a focus token; the persistent ancestor reveal is excluded.
  nav-developer:
    type: button
    textColor: '#000000'
    rounded: 33554400px
    height: 40px
    padding: 8px 12px
    typography: 16px / 700 PayPal Pro Text VF
    hover: A translucent blue ::before surface appears at 110.625px by 44px; exact alpha in body.
    pressed: The ::before surface darkens and returns to 106.625px by 40px; exact alpha in body.
    focus: '::before outline 2px solid #0066f5, offset 2px'
    use: Developer — a header link on white; the anchor has a transparent background. Radius is the literal computed 3.35544e+07px pill value.
  header-login:
    type: button
    textColor: '#000000'
    height: 48px
    padding: 12px 20px
    typography: 16px / 700 PayPal Pro Text VF
    hover: '::before translucent blue fill changes and grows from 87.9219px by 48px to 91.9219px by 52px; exact alpha in body.'
    pressed: '::before fill changes and returns to 87.9219px by 48px; exact alpha in body.'
    focus: '::before outline 2px solid #0066f5, offset 2px'
    use: Log In — a header link on white; its own background is transparent and its painted surface is ::before. No navigation was activated.
  header-signup:
    type: button
    textColor: '#ffffff'
    height: 48px
    padding: 12px 20px
    typography: 16px / 700 PayPal Pro Text VF
    hover: '::before bg #3d3d3d; painted size 105.172px by 52px'
    pressed: '::before bg #4f4f4f; painted size 101.172px by 48px'
    focus: '::before outline 2px solid #0066f5, offset 2px'
    use: Sign Up — a header link on white; its own background is transparent, while ::before supplies the black resting fill. The anchor's own 0px radius does not describe that painted pill.
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    display: PayPal Pro
    ui: PayPal Pro Text VF
---

# Design System Inspiration of PayPal

## Overview

### Visual Theme & Atmosphere

PayPal connects shopping, sending money, receiving payments and saving within a payments platform. Its September 2024 PayPal Everywhere announcement expanded the consumer proposition into in-store spending and rewards alongside online checkout. The current US homepage makes that breadth tangible through shopping imagery, payment-plan cards, money-transfer features and savings content. [PayPal Everywhere](https://newsroom.paypal-corp.com/2024-09-05-Introducing-PayPal-Everywhere)

The identity refresh introduced in **2024** pairs a black wordmark with blue accents. Pentagram, the project's design author, describes a system built around simplicity, optimism and trust, with the monogram and wordmark able to work independently. **PayPal Pro** provides the geometric display voice; its documented lineage is Lineto's LL Supreme/Futura. [Pentagram](https://www.pentagram.com/work/paypal/story), [Lineto](https://lineto.com/bespoke/paypal)

The live page opens with a **white seasonal hero**, a large black headline, a compact black pill action and a blue gift-and-product image mosaic. Farther down, the sky-blue `#60cdff` hero section and midnight-blue `#002991` surfaces remain part of the page. White, black and these two blues provide the measured visual contrast. The current functional face is **PayPal Pro Text VF**. The main action links combine a 1000px radius with 16px/700 labels and a 48px resting height.

#### Primary tasks

- Pay for purchases online or in stores, including available pay-over-time options.
- Send or request money; the live page also presents a pooling action.
- Explore rewards, the debit card and savings.
- Receive commercial payments and explore checkout integrations through the business offering. The opened business page retains the PayPal Open positioning. [Business](https://www.paypal.com/us/business)

### Brand Narrative

PayPal's published history reaches back to **1998**. Its own prospectus identifies **Peter Thiel** and **Max Levchin** as Confinity co-founders in December 1998, records the merger with **Elon Musk's X.com in March 2000**, and describes the email-based payment product. PayPal's 2015 separation announcement confirms **eBay's 2002 acquisition for $1.5 billion** and its return to independent public trading under **PYPL in July 2015**. [Prospectus, pp. 69, 72 and F-45](https://www.paypalobjects.com/html/PayPal_Prospectus.pdf), [Separation announcement](https://newsroom.ie.paypal-corp.com/2015-07-20-PayPal-Celebrates-Listing-on-Nasdaq-and-Completes-Separation-from-eBay-Inc)

The corporate facts page identifies its headquarters in **San Jose, California** and reports **439 million active consumer and merchant accounts as of year-end 2025**. The US agreement names PayPal, Inc. and identifies PayPal Holdings, Inc. as its parent. [Company facts](https://about.pypl.com/who-we-are/history-and-facts/), [US agreement](https://www.paypal.com/us/legalhub/paypal/useragreement-full)

The 2024 identity work and PayPal Everywhere proposition connect the established online-payments service to everyday spending. The live seasonal shopping lead, debit-card and rewards content carry that broader proposition into the current homepage. [Lineto](https://lineto.com/bespoke/paypal), [PayPal Everywhere](https://newsroom.paypal-corp.com/2024-09-05-Introducing-PayPal-Everywhere)

### Principles

PayPal's corporate values page names **Inclusion, Innovation, Collaboration and Wellness** and describes **Work Customer Back** as starting from customers' needs. The identity author separately names **simplicity, optimism and trust** as its visual-strategy principles. [Company values](https://about.pypl.com/who-we-are/mission-vision-values/default.aspx), [Pentagram](https://www.pentagram.com/work/paypal/story)

For this reference, the resulting authoring guidance is an interpretation: make the action clear, give keyboard focus a visible reversible indication, and let the measured type and surface contrast establish hierarchy. The opened sources do not establish a shared token system for every PayPal application or a ban on particular neutral combinations.

### Personas

No sourced persona research was opened; no fictional person or behavioural preference is presented as company evidence.

## Colors

These values come from the homepage's rendered census and control states. The separately fetched theme stylesheet corroborates the palette declarations; declaration evidence is kept distinct from computed measurements.

| Role | Value | Evidence and use |
|---|---|---|
| Primary / midnight surface | `#002991` | Five background observations; theme `--style-fill-1` on white plates. |
| Primary light / sky accent | `#60cdff` | Two background observations; the later sticky hero carries `blue-400-plate`. |
| Canvas | `#ffffff` | Eleven background observations; the seasonal opener is white. |
| On dark surfaces | `#ffffff` | Pay in 4 link label; fourteen paragraph-ink observations. |
| Foreground | `#000000` | Twenty-six paragraph-ink observations; primary action fill and light-surface labels. |
| Link / light-surface focus | `#0066f5` | Three text observations and the measured authored focus outlines. |
| Inverse focus | `#3db5ff` | Pay in 4 link's reversible self outline. |
| Warm surface | `#f1efea` | One background observation; `.document-body-root` declares this background. |
| Cool surface | `#edf0f2` | One background observation; the theme declares it for `neutral-200-plate`. |
| Main action hover / press | `#333333` / `#4d4d4d` | Seasonal Learn More link. |
| Header Sign Up hover / press | `#3d3d3d` / `#4f4f4f` | Painted `::before` surface; differs from the main action's pair. |

### Translucent surfaces

Keep the measured alpha; do not replace these fills with an opaque guessed swatch.

- Browse Offers: `rgba(5, 55, 130, 0.08)` at rest, `rgba(5, 55, 130, 0.153)` on hover, `rgba(5, 55, 130, 0.227)` while pressed.
- Learn About Pay in 4: `rgba(204, 204, 204, 0.28)` at rest, `rgba(189, 189, 189, 0.424)` on hover, `rgba(204, 204, 204, 0.494)` while pressed. The corresponding dark-plate theme declarations use those same RGB channels and alpha bytes.
- Developer navigation: its `::before` surface appears as `rgba(5, 55, 130, 0.04)` on hover and `rgba(5, 55, 130, 0.08)` while pressed.
- Header Log In: its `::before` surface changes from `rgba(5, 55, 130, 0.08)` to `rgba(5, 55, 130, 0.118)` on hover and `rgba(5, 55, 130, 0.153)` while pressed.
- Muted ink appears in the census as `rgba(0, 0, 0, 0.63)`; the white-plate theme declares `--style-general-text-muted: #000000a1`.

Semantic success, error and form-border colours were not verified for a rendered product state.

## Typography

### Evidence classes

**Official product use.** PayPal's own page CSS declares PayPal Pro for headline styling and PayPal Pro Text VF for base, strong and button typography on this marketing surface. The opened company narrative pages do not document an application-wide font specification. The design author's official project account identifies PayPal Pro as a custom LL Supreme/Futura adaptation and describes Pro Text as a small-size companion. [Theme CSS](https://www.paypalobjects.com/marketing/pp-com-components-pds60/themes/paypal60-DJqhL8L_.css), [Pentagram](https://www.pentagram.com/work/paypal/story)

**Live-loaded.** The census lists exactly `PayPal Pro 900 normal` and `PayPal Pro Text VF 400 900 normal`. The latter is one variable face with a declared 400–900 weight range. Computed family on the h1 starts with PayPal Pro; body and button declarations start with PayPal Pro Text VF. The measured actions and header link use that variable face at 700.

**Official distributed assets.** The page's own `@font-face` rules point to PayPal-hosted WOFF2 resources: `PayPalProSWeb-Black.woff2` for display 900 and `PayPalProTextVFWeb.woff2` for the variable text face. Asset URLs were recorded from the census; no font binary was downloaded and no reuse licence was verified.

**Declared-only.** `PayPal Pro` 400 references `PayPalProSWeb-Book.woff2`, but that face is absent from the loaded list and receives no specimen. Century Gothic is named in the h1 fallback stack; Helvetica, Arial and sans-serif also occur in stacks. None is reported as a loaded face by this census. A fallback-stack name does not establish the design lineage.

**Unresolved.** Plain's ownership, licence and historical product role were not established by the opened sources. It is absent from the current loaded list. Substitute: none chosen.

### Measured control hierarchy

| Role | Face | Size / weight | Line height | Letter spacing |
|---|---|---|---|---|
| Main action links | PayPal Pro Text VF | 16px / 700 | 24px | -0.24px |
| Developer header link | PayPal Pro Text VF | 16px / 700 | 24px | -0.24px |
| Header Log In / Sign Up | PayPal Pro Text VF | 16px / 700 | 24px | -0.24px |
| Terms links in survey | PayPal Pro Text VF | 14px / 700 | 21px | Not captured |
| Personal / Business hero segment links | PayPal Pro Text VF | 16px / 400 on the anchor | 22.4px | Not captured |

The hero-segment anchor measurement does not establish the styling of every visible descendant label.

### Source-declared display scale

The seasonal h1 and later rewards h2 use `heading-text-size-headline-3` in the page HTML. Its PayPal theme rule declares `font-size: clamp(2.65625rem,5.91518vw - 1.12946rem,5.96875rem)` and `line-height: 1.1`. Theme headline-4 declares `clamp(2.3125rem,4.40848vw - .508929rem,4.78125rem)` with line height 1.1. The theme declares headline weight 900. These are CSS declarations, not newly measured heading pixel sizes. [Theme CSS](https://www.paypalobjects.com/marketing/pp-com-components-pds60/themes/paypal60-DJqhL8L_.css)

## Layout

At the captured **1440 × 1000** viewport, the seasonal headline and primary action are centred. The image mosaic spans the content width below them. A location banner sits above the header. A QR app link is visible at the lower right.

The survey records the later sticky hero at **1425 × 1000px** and five sticky card wrappers at **1080 × 438px**. These describe specific captured elements, not a universal container width or card aspect ratio. The page combines white, sky-blue and midnight-blue surfaces; use those surface changes to organise comparable marketing sections.

Use the measured micro spacing: main actions rest at **12px vertical / 20px horizontal** padding and expand to **14px / 22px** on hover. Developer navigation uses **8px / 12px**. The survey's hero-segment links use **10px / 16px**. No global spacing scale is established from these local values.

For content cards, the theme declares `--card-content-border-radius: clamp(1.5rem, 1.5rem + 0vw, 1.5rem)`. The layered-card rule consumes that property. Keep that source declaration separate from the measured 1000px main-action radius. [Card CSS](https://www.paypalobjects.com/marketing/pp-com-components-pds60/component-chunks/LayeredCardWrapper-C8iim8ic.css)

### Responsive Behavior

Only the desktop viewport was rendered for this verification. The source CSS confirms fluid headline formulas; it does not establish a measured mobile composition.

The layered-card stylesheet declares a five-column internal grid from **`min-width:41.0625rem`** and a twelve-column internal grid from **`min-width:64rem`**. These are columns within the card, not a count of adjacent cards. It changes sticky-card wrapper row gap from `.75rem` to `1rem` at 41.0625rem. [Card CSS](https://www.paypalobjects.com/marketing/pp-com-components-pds60/component-chunks/LayeredCardWrapper-C8iim8ic.css)

Measured desktop target heights are **48px** for the main actions and header account links, **40px** for Developer, and **36px** for the hero-segment anchors. Mobile stacking, menu collapse and touch behaviour were not verified.

## Elevation & Depth

The primary action and the three measured header links have no own box shadow. Browse Offers and Pay in 4 have the raw resting declaration `rgba(0, 0, 0, 0) 0px 0px 0px 1px inset`; it becomes `none` on hover and press. The fully transparent declaration does not establish visible elevation.

The current layered-card stylesheet retains a diffuse shadow: **`box-shadow: 0 1.5rem 3rem #00000014`**. A `.layered-article-card.black-plate` variant declares `0 1.5rem 3rem #0000001a`. These are first-party source declarations; the card surface itself was not newly sampled for computed shadow geometry. [Card CSS](https://www.paypalobjects.com/marketing/pp-com-components-pds60/component-chunks/LayeredCardWrapper-C8iim8ic.css)

The census records three backgrounds of `rgba(0, 0, 0, 0.3)`, without identifying them as modal scrims. A global elevation ladder is not established.

## Motion & Easing

For the three main action links the raw computed transition is:

`padding, margin, width, height 0.3s cubic-bezier(0.4, 1.2, 0.2, 1) 0s`

The primary and Browse Offers links grow by 4px in both width and height on hover through a 2px increase on each padding edge. Their own transforms remain `none`. The raw transition on Developer, Log In and Sign Up anchors is **`all 0s ease 0s`**; their painted pseudo-element states change. An anchor's transition string does not establish the timing of every pseudo-element.

Pay in 4's ancestor changes from `matrix(1, 0, 0, 1, 12, 12)` and opacity 0 to `none` and opacity 1 when revealed. Both persist after blur, so they are retained as reveal observations without a focus or timing token. The identity author's gesture-based motion direction draws on payment actions. Reduced-motion behaviour and checkout loading animation were not verified. [Pentagram](https://www.pentagram.com/work/paypal/story)

## Components

All six measured controls are **links**. Their type in the component registry is `button`, including the navigation link. Every listed component has authored state changes.

### Main primary action

The seasonal **Learn More** link measures **129.5 × 48px**, with a **1000px radius**, **12px 20px padding**, **16px/700** text, 24px line height and -0.24px tracking. Its fill is `#000000`, label `#ffffff`, border `none` and shadow `none`. Hover grows its layout to 133.5 × 52px. Its own transform stays `none`.

### Secondary action on white

**Browse Offers** measures **152 × 48px**, radius **1000px**, padding **12px 20px**, with the same text metrics. It has black text, the translucent blue fill listed in §2, border `none`, and a fully transparent inset shadow declaration. The hover layout is 156 × 52px. It has an authored blue focus outline.

### Secondary action inside a dark card

**Learn About Pay in 4** measures **201.3 × 48px** at the initial read, radius **1000px**, padding **12px 20px**, with white text and a translucent grey fill. Its border is `none`. The keyboard outline is the lighter inverse-focus blue. The initial ancestor is hidden by a scroll reveal; that reveal persists after blur and is excluded from the focus treatment. The reversible outline is independently confirmed.

### Header links and their painted layers

**Developer** measures **106.6 × 40px**, padding **8px 12px**, with black 16px/700 text. Its own background is transparent on white. The literal computed radius is **`3.35544e+07px`** (33554400px), a pill result. Hover, press and keyboard focus paint `::before`; the label span remains black.

**Log In** measures **87.9 × 48px** and **Sign Up** **101.2 × 48px**. Both anchors have **12px 20px padding**, 16px/700 text, 24px line height, -0.24px tracking, transparent own backgrounds, no border and no shadow. Their own radius is **0px**; their visible pills are painted by `::before`. Log In's label is black. Sign Up's label is white over a black pseudo-element. The probe does not record that pseudo-element's radius, so a numeric visible-pill radius is not assigned to these two component records.

### Other component evidence

The survey contains no search input or whole-card anchor. It does contain action links inside layered cards. Inputs, status badges, white media buttons and consent-button styling have no newly measured product component record.

### States

All hover, pressed and focus readings below have `measured: true`; hover matches `:hover`, press matches `:active`, and keyboard focus matches `:focus-visible`. The focus outlines below are solid authored outlines and disappear after blur.

| Control | Hover | Pressed | Keyboard focus |
|---|---|---|---|
| Seasonal Learn More | Fill `#333333`; 133.5 × 52px; padding 14px 22px. | Fill `#4d4d4d`; 129.5 × 48px; padding 12px 20px; blue outline also present. | Self outline: 2px solid `#0066f5`, offset 2px. |
| Browse Offers | Fill `rgba(5, 55, 130, 0.153)`; 156 × 52px; padding 14px 22px; transparent inset shadow becomes none. | Fill `rgba(5, 55, 130, 0.227)`; 152 × 48px; shadow none; blue outline present. | Self outline: 2px solid `#0066f5`, offset 2px. |
| Developer | `::before` appears: `rgba(5, 55, 130, 0.04)`, 110.625 × 44px. | `::before`: `rgba(5, 55, 130, 0.08)`, 106.625 × 40px. | `::before` outline: 2px solid `#0066f5`, offset 2px. |
| Learn About Pay in 4 | Fill `rgba(189, 189, 189, 0.424)`; raw bounding box 204 × 51.7px; padding 14px 22px; shadow none. | Fill `rgba(204, 204, 204, 0.494)`; raw bounding box 200 × 47.7px; shadow none; inverse outline present. | Self outline: 2px solid `#3db5ff`, offset 2px. Persistent ancestor changes excluded. |
| Header Log In | `::before`: `rgba(5, 55, 130, 0.118)`, 91.9219 × 52px. | `::before`: `rgba(5, 55, 130, 0.153)`, 87.9219 × 48px. | `::before` outline: 2px solid `#0066f5`, offset 2px. |
| Header Sign Up | `::before`: `#3d3d3d`, 105.172 × 52px. | `::before`: `#4f4f4f`, 101.172 × 48px. | `::before` outline: 2px solid `#0066f5`, offset 2px. |

The comparison includes each control, its pseudo-elements, descendants and three ancestor levels. Developer has one label descendant; the other five have none. It covers computed styling and selected DOM attributes, not canvas/video pixels, cross-origin frames or unrelated siblings. These observations establish no disabled, empty, loading, validation, checkout-success or transaction-history treatment.

## Do's and Don'ts

### Do

- Pair the loaded PayPal Pro display face with the loaded PayPal Pro Text VF functional face.
- Use the measured black primary action, translucent secondary fills and white labels on dark actions.
- Keep the 1000px radius on the measured main action links.
- Reproduce the hover padding increase and reversible authored focus outlines.
- Use short action labels and benefit-led feature headings, following the opened page samples.

### Don't

- Treat a fallback font name as an installed or loaded brand font.
- Give every CTA the prior 900-weight label; the measured controls use 700.
- Replace a translucent fill with a guessed opaque colour.
- Assign an anchor's 0px radius or transparent background to its separately painted pseudo-element.
- Use a persistent scroll reveal as a keyboard-focus token.

## Voice & Tone

The opened homepage uses concise, benefit-led headings and direct action labels. Its seasonal lead is **“Shine all season with PayPal”**; the later product hero retains **“Pay, send, and save smarter.”** Browse Offers, Send Money and Get Paid name the next action directly. The security action is phrased **“See How You're Safe.”** These are observed examples, not a published list of forbidden grammatical forms.

The opened business page uses **“Take your business further, faster”**, **“PayPal Open”** and **“Real stories. Real wins.”** For a similar merchant surface, state the outcome and keep the action concrete. The consumer and business copy samples do not prove identical UI tokens across those surfaces. [Business](https://www.paypal.com/us/business)

## Agent Prompt Guide

### Quick colour reference

Midnight `#002991`; sky `#60cdff`; canvas `#ffffff`; foreground and primary fill `#000000`; link and light-surface focus `#0066f5`; inverse focus `#3db5ff`. Secondary fills retain the rgba values in §2.

### Example component prompts

- “Build the captured seasonal primary action: a black link on white, 48px high, 1000px radius, 12px 20px padding, white 16px/700 PayPal Pro Text VF. On hover use `#333333` and 14px 22px padding; on press use `#4d4d4d` and the resting size. Add the measured blue focus outline.”
- “Build the captured secondary link on white with the three blue-alpha fills in §2, black text, 1000px radius, the same text metrics and padding expansion.”
- “Use a Developer header link with a 40px anchor and a separately painted hover layer growing to 44px; keep the black label and put the focus outline on that layer.”

### Iteration guide

Check the painted layer as well as the anchor. Preserve the distinct hover colours of the main action and header Sign Up. Keep card source declarations in rem and avoid presenting them as a new computed card measurement. Display font files and the variable text face remain separate assets; no substitute is chosen.
