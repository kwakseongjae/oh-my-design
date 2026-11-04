---
name: AIA Hong Kong
colors:
  primary: '#d31145'
  primary-hover: '#b40e3a'
  primary-focus: '#940b30'
  secondary-hover: '#fdf4f6'
  secondary-press: '#f8dbe3'
  foreground: '#14181c'
  control-foreground: '#333d47'
  input-foreground: '#666e75'
  background: '#ffffff'
  surface: '#f7f7f8'
  border: '#858b91'
  border-hover: '#5b636b'
  input-focus: '#5699c1'
  input-focus-surface: '#f4f9fb'
  nav-focus: '#efeff0'
typography:
  button:
    fontSize: 14px
    fontWeight: 600
    lineHeight: 20px
    use: Measured header contact and buy-online buttons
  nav:
    fontSize: 14px
    fontWeight: 600
    lineHeight: 20px
    letterSpacing: 0.1px
    use: Measured product-navigation span
  input:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 20px
    use: Measured empty first-name contact field
rounded:
  none: 0px
  input: 6px
  action: 8px
  membership-card: 12px
components:
  contact-cta:
    type: button
    backgroundColor: '#d31145'
    textColor: '#ffffff'
    border: '1px solid #d31145'
    rounded: 8px
    height: 32px
    padding: 6px 12px
    typography: 14px / 600
    hover: 'bg #b40e3a'
    pressed: 'bg #b40e3a'
    focus: 'bg #940b30; border 1px solid #940b30'
    use: 聯絡我們 — header link to the contact page; measured its nested button. Hover and press also make the border transparent, recorded in the body.
  buy-online:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#d31145'
    border: '1px solid #d31145'
    rounded: 8px
    height: 32px
    padding: 6px 12px
    typography: 14px / 600
    hover: 'bg #fdf4f6'
    pressed: 'bg #f8dbe3'
    focus: 'bg #f8dbe3'
    use: 網上投保 — header link to buy-online; measured its nested button. Text and border stay red in the measured states.
  nav-products:
    type: button
    textColor: '#333d47'
    rounded: 0px
    height: 20px
    padding: 0px
    typography: 14px / 600
    focus: 'bg #efeff0'
    use: 產品介紹 — focusable navigation span on the white header. Its rest background is transparent. Hover and press have no change within the recorded comparison scope.
  card-vitality:
    type: card
    backgroundColor: '#ffffff'
    rounded: 12px
    height: 79px
    width: 362px
    padding: 0px
    hover: transform matrix(1, 0, 0, 1, 0, -1); computed text-decoration underline
    pressed: transform matrix(1, 0, 0, 1, 0, -1); computed text-decoration underline
    focus: 'outline 2px solid #d31145; outline-offset 3px'
    use: Image link with accessible name AIA Vitality. Hover and press also strengthen its shadow; exact alpha values are in the body.
  first-name:
    type: input
    backgroundColor: '#ffffff'
    textColor: '#666e75'
    border: '1px solid #858b91'
    rounded: 6px
    height: 52px
    padding: 0px 16px
    typography: 16px / 400
    hover: 'border 1px solid #5b636b'
    pressed: 'bg #f4f9fb; border 1px solid #5699c1'
    focus: 'bg #f4f9fb; border 1px solid #5699c1'
    use: Empty first-name contact field, placeholder 您的名. The pressed observation also matched focus-visible; it does not establish a separate active-only treatment.
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    sans: OpenSans
    display: AIAEverest
    traditional-chinese: NotoSansTC
    simplified-chinese: NotoSansSC
---

# Design System Inspiration of AIA Hong Kong

## Overview

### Visual Theme & Atmosphere

AIA Hong Kong brings insurance, financial protection and healthier living into one customer-facing site. Its company history traces the group's beginnings to an insurance agency in Shanghai in 1919 and the establishment of a Hong Kong branch in 1931. Today, its stated purpose is to help people live “Healthier, Longer, Better Lives.” [Company and history](https://www.aia.com.hk/en/about-aia/about-us).

The measured homepage is the Traditional Chinese Hong Kong edition (`aia.com.hk/zh-hk`), with HTML language `zh-HK` and no regional redirect. It combines photographic campaign banners, a white navigation bar, red actions, pale section backgrounds and a charcoal footer. The small header actions use 8px corners; the white membership links use 12px corners. These are observations of this desktop surface.

The current campaign makes protection personal: AIA's *Let Love Transcend Time* customer-story series connects insurance with quiet acts of care and protection across generations. That framing gives the family photography and direct benefit language a first-party narrative basis. [Official campaign](https://www.aia.com.hk/en/about-aia/campaigns-and-events/latest-campaign/let-love-transcend-time).

At group level, AIA's design writing describes Qi's evolution from a top-down approach towards contributions from local markets, research and closer alignment between design and code. This is context for AIA's digital design direction; the numerical reference below comes from the Hong Kong homepage capture. [Qi evolution, 13 August 2024](https://design.aia.com/blog/the-evolution-of-qi-aias-design-system-reimagined).

### Brand Narrative

The company's history connects a long presence in Hong Kong with its present purpose of healthier living. Its current story series expresses insurance as care that continues across generations. In this homepage's visual treatment, people and campaign photography carry that story while red actions, white surfaces and dark supporting text organise the tasks. [History](https://www.aia.com.hk/en/about-aia/about-us), [current campaign](https://www.aia.com.hk/en/about-aia/campaigns-and-events/latest-campaign/let-love-transcend-time).

### Principles

AIA's published Qi overview identifies consistency, efficiency and scalability as benefits of reusable patterns and guidelines. Those are documented group design-system aims. For this measured page, reproduce the specific color, geometry and interaction records rather than extrapolating an unmeasured component family. [Qi design system](https://design.aia.com/aia-qi-design-system).

### Personas

No user-research personas were verified.

## Colors

The homepage census contains 53 computed root properties and 78 declared properties. Eleven application properties are declared on `.cmp-completionmessage__description, body`, rather than on `:root`. Bootstrap (`--bs-*`) and Swiper (`--swiper-*`) are excluded as token namespaces. Bootstrap includes AIA-specific overrides, so its values are retained only when independently supported by application properties or measured product controls.

| Role in this reference | Value | Evidence |
|---|---|---|
| Primary action | `#d31145` | `--primary-color`; contact button at rest |
| Primary hover and pointer press | `#b40e3a` | Contact button; matches `--primary-hover` |
| Primary keyboard focus | `#940b30` | Contact button fill and border; matches `--primary-focus` |
| Secondary hover | `#fdf4f6` | Buy-online fill; `--secondary-hover` |
| Secondary press and keyboard focus | `#f8dbe3` | Buy-online fill; `--secondary-press` |
| Foreground | `#14181c` | Six paragraph-ink observations in the census |
| Control foreground | `#333d47` | Navigation span and shortcut text |
| Input foreground | `#666e75` | Computed color of the empty first-name field |
| Background | `#ffffff` | White buttons, membership cards and field |
| Light surface | `#f7f7f8` | `--section-bg-light`; five background observations |
| Rest border | `#858b91` | Field and shortcut, 1px solid |
| Input hover border | `#5b636b` | First-name field |
| Input focus border | `#5699c1` | First-name field, 1px solid |
| Input focus surface | `#f4f9fb` | First-name field |
| Navigation focus surface | `#efeff0` | Product-navigation span |

Paragraph ink is mixed: white occurs 15 times, black `#000000` six times, and `#14181c` six times. `foreground` records the observed dark paragraph value; it does not identify a single universal paragraph color. The most frequent text color is white, not the default body declaration.

Additional application declarations are `--tab-hover: #5699c1`, `--tab-active: #1f78ad`, and `--colored-card-bg-option-one/two/three: #a10354 / #db406a / #ce425c`. These declarations establish available values, not measured states for those components.

The group's published colour guidance names digital red, digital charcoal and white as its primary palette, with additional colours used sparingly. This qualitative guidance is separate from the homepage measurements. [Official colour guidance](https://design.aia.com/colour).

## Typography

**Official product-use documentation.** AIA's digital typography page explicitly names AIA Everest and Open Sans for its digital platforms, and recommends Noto Sans for localisation beyond English. This is group guidance, while the following records describe the Hong Kong page. [Official typography](https://design.aia.com/typography).

**Live-loaded.** `document.fonts` reports `AIAEverest 500 normal`, `OpenSans 400/600/700 normal`, `NotoSansTC 400 normal`, and `NotoSansSC 400 normal`. These exact CSS aliases are the four family values in the frontmatter. The census also loads `swiper-icons 400 normal`, which is an icon font and is excluded from typography tokens.

**Official served assets.** The census records same-origin `@font-face` sources under `/etc.clientlibs/aia-hk-wise/clientlibs/clientlib-site/resources/fonts/`: `AIAEverest-Medium.woff2`, the Open Sans regular/semibold/bold WOFF2 files, and `NotoSansTC-Regular.woff2` and `NotoSansSC-Regular.woff2`. These are observed serving declarations; no font file was separately fetched. No downloadable font package or font licence was verified.

**Declared-only.** `AIAEverest` also has a CSS weight-300 declaration pointing to `AIAEverest-Regular.woff2`; `OpenSans` has a weight-300 declaration pointing to `opensans-light-webfont.woff2`. Neither weight appears in the loaded list, so neither receives a specimen. The census declares AIAEverest first on `h1`, and OpenSans first on `body` and `button`, followed by localisation/platform fallbacks.

**Unresolved.** The capture does not identify the face used for each individual Han glyph. Heading size, paragraph size, variable axes and font licences are unverified. Substitute: none chosen.

| Measured role | Size / weight | Line height | Tracking |
|---|---|---|---|
| Header contact and buy-online buttons | 14px / 600 | 20px | normal |
| Product-navigation span | 14px / 600 | 20px | 0.1px |
| Empty first-name input | 16px / 400 | 20px | 0.1px |
| Quick-service shortcut | 16px / 400 | 24px | 0.1px |

These controls compute `font-family: OpenSans`. The image-only membership card inherits 16px / 400 and 24px line height; those values do not describe lettering inside its logo image.

## Layout

The capture is 1440×1000 CSS pixels. Header navigation sits above a photographic hero carousel; shortcut links sit over the hero. A pale membership/search area follows, then product/support tabs, health content, campaign cards, company information, news, app promotion, a contact form and the footer. Some sections are lazy-revealed; the initial full-page screenshot's blank areas are not spacing prescriptions.

The survey places the two membership links at x=335 and x=729, each 362px wide: a 32px gap. Its article-link rows have 270px width and begin at x=137 and x=431: a 24px gap. These are desktop observations, not inferred global grid tokens. Observed inline padding includes 12px on header actions and shortcuts, 16px on the contact field, and 24px on the surveyed 48px hero button; the hero button's states were not measured.

The official Qi spacing guide describes a 4px soft grid. That is documented group guidance, not a breakpoint or grid measurement for this page. [Official spacing](https://design.aia.com/spacing).

The visible search surface is `.membership-section-search-bar`, a `div` with a text span. It is not an input in the survey's interactive census. The contact field supplies the measured input reference; no search-input state is claimed.

### Responsive Behavior

Only desktop at 1440×1000 was measured; mobile layouts, breakpoints and reduced-motion behavior are unverified.

## Elevation & Depth

The AIA Vitality membership link rests on a light section with a white surface and `rgba(118, 118, 118, 0.1) 1px 3px 10px 0px` shadow. Hover and press change the shadow to `rgba(118, 118, 118, 0.18) 1px 4px 14px 0px` and transform to `matrix(1, 0, 0, 1, 0, -1)`, a 1px upward translation. Keyboard focus keeps the resting shadow and adds its red outline.

The measured header buttons, shortcut, navigation span and input have no rest box-shadow. This does not establish a site-wide elevation scale.

## Motion & Easing

The raw transition serializations below are copied from `states.json` identity records. They are local control observations, not a global motion scale.

- Both header buttons: `color, background-color, border-color, box-shadow, -webkit-box-shadow 0.15s, 0.15s, 0.15s, 0.15s, 0.15s ease-in-out, ease-in-out, ease-in-out, ease-in-out, ease-in-out 0s, 0s, 0s, 0s, 0s`.
- AIA Vitality membership link: `box-shadow, transform 0.16s, 0.16s ease, ease 0s, 0s`.
- First-name field: `all 0.2s ease 0s`.
- Product-navigation span and shortcut link: `all 0s ease 0s` on the element itself.

The card's measured transform is a 1px upward translation. Carousel timing and reduced-motion alternatives were not measured.

## Components

Six controls were inspected with real pointer states and a real Tab walk. The cookie banner remained open: its only observed action is 「確認」, which was not clicked. A separate notice was closed using `button.multiple-notice__close` (“Close notice component”). Exact state evidence and limits are in §14 and the verification notes.

| Control and identity | Height / radius | Padding | Rest background / foreground |
|---|---|---|---|
| `contact-cta` — 聯絡我們, button inside the header contact link | 32px / 8px | 6px 12px | `#d31145` / `#ffffff` |
| `buy-online` — 網上投保, button inside the header buy-online link | 32px / 8px | 6px 12px | `#ffffff` / `#d31145` |
| `nav-products` — 產品介紹, focusable navigation span | 20px / 0px | 0px | transparent on white / `#333d47` |
| `quick-service` — 快捷網上服務, shortcut link | 40px / 8px | 8px 12px | `#ffffff` / `#333d47` |
| `card-vitality` — image link, accessible name AIA Vitality | 79px / 12px | 0px | `#ffffff` / inherited `#333d47` |
| `first-name` — empty input, placeholder 您的名 | 52px / 6px | 0px 16px | `#ffffff` / `#666e75` |

The two header buttons are 82px wide; the input is 367px wide; the membership link is 362px wide. The membership foreground is inherited CSS color, not a measurement of the wordmark's image pixels. Its component therefore omits a text-color token.

The shortcut's pointer states are unchanged and its only focus indication is the browser's `auto` outline. It remains a measured prose reference and is omitted from `components`. The other five controls have authored state changes. Disabled, error and success states were not measured.

### States

| Control | Hover | Pointer pressed | Keyboard focus |
|---|---|---|---|
| `contact-cta` | Fill `#b40e3a`; border becomes `1px solid rgba(0, 0, 0, 0)` | Same observed values as hover | Fill and 1px border `#940b30`; no outline |
| `buy-online` | Fill `#fdf4f6` | Fill `#f8dbe3` | Fill `#f8dbe3`; no outline |
| `nav-products` | No change within scope below | No change within scope below | Background `#efeff0`; no outline |
| `quick-service` | No change in second pass | No change in second pass | `rgb(0, 95, 204) auto 1px off 1px`, browser-owned; no brand token |
| `card-vitality` | Shadow and upward translation from §6; computed text-decoration becomes `underline solid rgb(51, 61, 71)` | Same observed values as hover | `rgb(211, 17, 69) solid 2px off 3px`; authored outline |
| `first-name` | 1px border `#5b636b` | Fill `#f4f9fb`, 1px border `#5699c1`; also focus-visible | Same fill and border as the pressed observation; no outline |

The two header buttons keep their label colors. The field keeps its computed foreground. For the image-only membership link, the computed underline is recorded without claiming visible underlined text. Each focus change above reverted after blur; `persistsAfterBlur` is empty for all six controls.

The unchanged navigation reading compares the span, its `::before/::after`, no descendants, and three ancestor levels with their pseudo-elements. The shortcut reading compares itself, two descendants including one image, their pseudo-elements, and three ancestor levels with pseudo-elements. Compared properties include colors, borders, outlines, shadows, transforms, opacity, size, decoration, backgrounds/masks, image source strings and SVG attributes. Menu siblings, video/canvas pixels, external sprite internals and closed shadow roots are outside that proof.

The shortcut's first pointer pass was UNMEASURED because the product menu covered it. The second states call enabled `hideOverlays: true`; it measured matched hover and active states with no changes. No overlay hiding was recorded in that second call. No consent action was taken.

## Do's and Don'ts

- Use the measured red action and pale secondary fills, preserving their separate pointer and keyboard treatments.
- Preserve the membership link's 12px corners, small upward movement and red keyboard outline.
- Keep contact inputs at their measured 6px radius and blue focus treatment when reproducing this form.
- Do not turn the shortcut's browser `auto` ring into a brand token or present unchanged states as custom feedback.
- Do not export the Bootstrap or Swiper namespaces as an AIA palette.
- Use only the font evidence classes above; no replacement face is selected.

These are reference-building instructions based on the inspected surface, not a newly attributed company manifesto.

## Voice & Tone

The Hong Kong homepage describes AIA as “「健康長久好生活」的好拍檔” and says health is the best protection for a happy life. Its link labels are direct actions such as 「了解更多」 and 「聯絡我們」. These observed examples pair a supportive relationship with explicit next steps. [Homepage](https://www.aia.com.hk/zh-hk).

The official customer-story campaign explains protection through care for loved ones. It supports a relational, plain-language reading of the current campaign; a complete editorial style guide was not inspected. [Campaign](https://www.aia.com.hk/en/about-aia/campaigns-and-events/latest-campaign/let-love-transcend-time).

## Agent Prompt Guide

“Build a compact AIA Hong Kong header action: 32px tall, 8px corners, 6px 12px padding, white 14px/600 type on `#d31145`. Use `#b40e3a` on hover and pointer press; keyboard focus changes fill and border to `#940b30`. Use the live-loaded OpenSans face only when its asset is available.”

“Build a white AIA Vitality image link at 362×79px with 12px corners. Use the two measured shadows from §6, lift it 1px on hover/press, and show a 2px solid `#d31145` outline offset by 3px under keyboard focus.”
