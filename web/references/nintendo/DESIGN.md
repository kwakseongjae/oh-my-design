---
name: Nintendo
colors:
  primary: '#e60012'
  primary-hover: '#ac000d'
  foreground: '#484848'
  muted: '#727272'
  neutral-light: '#c8c8c8'
  on-primary: '#ffffff'
  canvas: '#ffffff'
  surface: '#f8f8f8'
  surface-alt: '#efefef'
  hairline: '#dadada'
  focus-ring: '#3946a0'
  accent-blue: '#4b5cce'
typography:
  display:
    fontSize: 28px
    fontWeight: 600
    use: Small desktop H1 size token and bold theme weight; not a maximum headline size
  subheading:
    fontSize: 21px
    fontWeight: 600
    use: Desktop H2 size token and bold theme weight
  label:
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.4
    use: Visible title of the measured featured card
  body:
    fontSize: 16px
    fontWeight: 300
    lineHeight: 1.4
    use: Homepage body CSS default, also observed on the featured-card anchor
  button:
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.4
    use: Start shopping link label; 25.2px line-height
  nav:
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1
    use: Explore, Shop and Support trigger geometry in the survey
  caption:
    fontSize: 14px
    use: Desktop caption size token; search-input weight was not re-measured
rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 12px
  round: 16px
  utility: 20px
  pill: 48px
spacing:
  xs: 4
  sm: 8
  md: 12
  base: 16
  lg: 24
  xl: 32
  xxl: 48
components:
  button-primary:
    type: button
    backgroundColor: '#e60012'
    textColor: '#ffffff'
    rounded: 8px
    height: 48px
    padding: 0px 24px
    typography: 18px / 600 Geologica Variable
    hover: 'background span #ac000d, 1px matching border, matrix(1.05, 0, 0, 1.05, 0, 0)'
    pressed: 'background span #ac000d, matrix(0.990029, 0, 0, 0.990029, 0, 0)'
    focus: '4px solid #3946a0 outline, offset 4px; background span border 4px solid color(srgb 1 1 1 / 0.5)'
    use: Start shopping is a link to /us/store/. The background span changes; the anchor and white label keep their rest colours.
  button-utility:
    type: button
    backgroundColor: '#f8f8f8'
    textColor: '#484848'
    rounded: 20px
    height: 32px
    padding: 8px 12px
    typography: 14px / 600 Geologica Variable
    hover: 'label and icon #e60012'
    pressed: 'label and icon #e60012'
    focus: '4px solid #3946a0 outline, offset 4px'
    use: Search launcher in the header. This is a button; no search input was exposed in the survey.
  account-outline:
    type: button
    textColor: '#e60012'
    border: '#e60012'
    rounded: 20px
    height: 30px
    padding: 6px 12px
    typography: 14px / 600 Geologica Variable
    focus: '4px solid #3946a0 outline, offset 4px'
    use: Log in / Sign up header button, transparent on white with a 1px red border. Visible label 14px/600; element font 16px/400. Hover and pressed had no detected style changes in the recorded scope.
  nav-about:
    type: button
    textColor: '#484848'
    rounded: 4px
    height: 29.4px
    padding: 0px
    typography: 18px / 600 Geologica Variable
    hover: 'label bottom border 2px solid #ac000d; anchor colour #ac000d'
    pressed: 'label bottom border 2px solid #ac000d; anchor colour #ac000d'
    focus: '4px solid #3946a0 outline, offset 8px; same underline as hover'
    use: 'About Nintendo is a footer navigation link, transparent on white. The visible label remains #484848; the anchor itself is #e60012 at rest and 21px/600.'
  card-media:
    type: card
    textColor: '#484848'
    rounded: 0px
    height: 311.3px
    padding: 0px
    typography: 16px / 600 Geologica Variable
    hover: 'title #e60012; image wrapper matrix(1.05, 0, 0, 1.05, 0, 0)'
    pressed: 'title #e60012; image wrapper matrix(1.05, 0, 0, 1.05, 0, 0)'
    focus: 'anchor radius 8px; 4px solid #3946a0 outline, offset 4px'
    use: 'Shop the Pikmin Collection is a card link on the white page, with white child panels and #dadada borders. Anchor 262px wide, transparent and shadow none; inherited anchor font 16px/300, visible title 16px/600.'
  pause-pill:
    type: button
    backgroundColor: '#e60012'
    textColor: '#ffffff'
    rounded: 48px
    height: 32px
    padding: 0px 16px
    typography: 16px / 600 Geologica Variable
    hover: 'background span #ac000d; sampled matrix(1.0395, 0, 0, 1.0395, 0, 0)'
    pressed: 'background span #ac000d; sampled matrix(0.980129, 0, 0, 0.980129, 0, 0)'
    focus: '4px solid #3946a0 outline, offset 4px; background span border 4px solid color(srgb 1 1 1 / 0.5)'
    use: Pause icon button for the homepage carousel, 32px wide. Transform numbers are captured samples, not general motion targets.
fonts:
  roles:
    sans: Geologica Variable
---

# Design System Inspiration of Nintendo

## Overview

### Visual Theme & Atmosphere

Nintendo makes home entertainment products, with a history beginning in Kyoto in 1889 with hanafuda playing cards. Its own account connects its characters, ideas and worlds with a mission of bringing enjoyment to people together. The corporate history now includes Nintendo Switch 2's launch in 2025, following Nintendo Switch in 2017. The Switch 2 announcement extends that shared-play theme through GameChat and GameShare. These are documented product developments; no visual rebrand was established by the sources opened. [Company profile](https://www.nintendo.co.jp/corporate/en/outline/index.html), [About Nintendo](https://www.nintendo.com/us/about/), [history](https://www.nintendo.co.jp/corporate/en/history/index.html), [Switch 2 announcement](https://www.nintendo.co.jp/corporate/release/en/2025/250402.html).

The measured US homepage (`nintendo.com/us/`, HTML `en-US`) pairs a white canvas with dark-grey text and Nintendo red. Broad promotional images carry changing product stories; the surrounding controls use compact semibold labels, grey dividers and rounded corners. A separately measured Japanese homepage (`nintendo.com/jp/index.html`, HTML `ja`) shares the red while using its own font stack, darker text and a taller header. The US request stayed on the US edition despite the collector's Japanese locale and South Korean network location.

For a design in this style, use **`#e60012`** for the main action, **`#484848`** for US foreground text, and **`#ffffff`** for the canvas and text on red. The primary action is 48px high with an 8px radius; the header Search control is a smaller 32px pill. Colour also has roles beyond red: the live theme assigns **`#3946a0`** to focus and secondary actions. Keyboard focus is a visible part of the expression, with a solid blue outline and, on the red CTA, a translucent inner border. These are observations of this homepage, not historical claims about the identity.

Primary tasks visible on the surface are browsing featured games and merchandise, opening Search, following news, entering the store, and accessing the wish list, cart and account entry points. Buying, authentication and form submission were not exercised.

### Brand Narrative

Nintendo's corporate history traces its beginnings to Fusajiro Yamauchi's hanafuda business in Kyoto in 1889. The company adopted its present corporate name in 1963, established its American subsidiary in 1980, launched Nintendo Switch in 2017 and opened the Nintendo Museum in 2024. The history records Nintendo Switch 2's launch in 2025. [Company history](https://www.nintendo.co.jp/corporate/en/history/index.html).

The Switch 2 announcement describes new forms of play through magnetic controllers, mouse operation, GameChat and GameShare. Shared activity provides a documented link between the company's stated purpose and the new hardware generation. For this reference, the visual takeaway is the separation seen on the live homepage: bright product artwork sits within a largely white, grey and red interface. [Switch 2 announcement](https://www.nintendo.co.jp/corporate/release/en/2025/250402.html).

Nintendo Co., Ltd.'s company profile places its headquarters in Kyoto, Japan. The measured US website is legally provided by Nintendo of America Inc.; Nintendo's About page identifies that Redmond operation as a wholly owned subsidiary. The reference retains the global Nintendo identity and records that regional operator distinction in its verification notes. [Company profile](https://www.nintendo.co.jp/corporate/en/outline/index.html), [Terms of Use](https://www.nintendo.com/us/terms-of-use/), [About Nintendo](https://www.nintendo.com/us/about/).

### Principles

These are implementation principles drawn from the measured page, with the company-purpose connection identified separately.

1. **Stable labels, responsive layers.** The primary CTA changes its background span while preserving the label. The card animates an image wrapper separately from its title.
2. **Visible keyboard feedback.** Use the authored 4px blue outline, the correct component offset and the red-button inner border.
3. **Orderly framing for varied artwork.** White panels, dark-grey type and thin dividers repeat around promotional imagery.
4. **Respect the measured region.** US Geologica evidence and Japanese YakuHanJPs/Roboto evidence are separate. Keep regional metrics and unconfirmed fallback faces explicit.
5. **Shared enjoyment as a content direction.** Nintendo's stated mission and the Switch 2 announcement support experiences people can enjoy together; they do not establish invented personas or usability findings. [About Nintendo](https://www.nintendo.com/us/about/), [Switch 2 announcement](https://www.nintendo.co.jp/corporate/release/en/2025/250402.html).

### Personas

No first-party persona research was verified.

## Colors

The US root describes itself as `Nintendo Light Theme`. Its **169 `--theme-*` properties** are separate from embedded chat and consent namespaces. The colour roles below come from that namespace and the rendered census.

| Role | Value | Evidence and use |
|---|---|---|
| Primary | `#e60012` | `--theme-color-primary`, primary-button background and link tokens; Start shopping at rest |
| Primary hover | `#ac000d` | `--theme-color-primaryHover`; measured background span of Start shopping on hover and press |
| Foreground | `#484848` | `--theme-colors-text-standard`; all 15 paragraphs counted in the US census |
| Muted | `#727272` | `--theme-color-darkGray3`; 72 text instances in the census |
| Light neutral | `#c8c8c8` | `--theme-color-lightGray1`; a neutral, not the theme's disabled-button background |
| Canvas / on-primary | `#ffffff` | `--theme-colors-ui-bgMain`, primary-button content and rendered white panels |
| Accent surface | `#f8f8f8` | `--theme-colors-ui-bgAccent`; measured Search background |
| Alternate surface | `#efefef` | `--theme-color-lightGray3`; also assigned to maintenance and quaternary-hover backgrounds in the theme |
| Hairline | `#dadada` | `--theme-colors-ui-line`; measured header/footer and card-panel borders |
| Focus / secondary | `#3946a0` | `--theme-color-focus`, `--theme-color-secondary`; measured authored focus outline |
| Blue description tag | `#4b5cce` | `--theme-colors-descriptionTag-blue`; the token does not establish an online-service role |

The theme explicitly assigns **`#dadada`** to `--theme-colors-button-background-disabled`. No disabled control was tested, so this is a token declaration rather than a measured disabled appearance.

Keep regional evidence distinct. The Japanese survey found paragraph text **`#3c3c3c`** (8 paragraphs) and **`#8c8c8c`** (5 paragraphs), plus **`#f2f2f2`** backgrounds. Its rendered background census also contains **`#e60012`**. Those regional values are retained here without populating the US token map.

## Typography

**Official product-use documentation:** no Nintendo typography specification was identified in the first-party pages opened. The font conclusions below are live-site evidence.

**Live-loaded, US:** `document.fonts` reports **Geologica Variable, weight range 100–900, normal**. Body, H1 and button declarations all name it first. The census records a same-origin WOFF2-variations face at `/us/_next/static/media/geologica-cyrillic-ext-crsv-normal.d322343e.woff2`. That is the census's deduplicated source sample; it does not establish which language-subset resource rendered each glyph. The theme also declares the variation setting `"CRSV" 1`.

**Live-loaded, Japan:** **YakuHanJPs normal and bold**, and **Roboto 400, 700 and 900**, appear in the loaded-face list. YakuHanJPs has regular and bold WOFF2/WOFF declarations under `/jp/common/font/`. The unreadable-sheet list identifies Google Fonts stylesheets for Roboto; the binary font URLs are not exposed. The loaded list confirms availability of these faces, not the identity of the font rasterizing every Japanese glyph.

**Official distributed assets:** no standalone Nintendo font package or font licence was opened. Site CSS declares assets for `nc3Jp` at `/jp/common/font/NotoSansJP-Regular.woff2` and the corresponding bold file, plus WOFF alternatives. These declarations are kept as metadata; neither face is in the loaded list.

**Declared-only:** the Japanese CSS stack is `YakuHanJPs, Roboto, "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", Arial, nc3Jp, sans-serif`. Hiragino, Arial and `nc3Jp` are not in this capture's loaded-face list and receive no specimen. The US also declares Roboto Condensed Variable and the VideoJS/NOAVideo icon faces without listing them as loaded; they are not promoted to the UI family. Platform fallback names remain CSS facts, not additional brand faces.

**Unresolved:** Nintendo's official rationale for the font choice, the exact Japanese system-fallback glyph face, Roboto's binary font path, and any font distribution licence. **Substitute: none chosen.**

| Role / evidence | Size | Weight | Line-height |
|---|---:|---:|---:|
| US body CSS default; same inherited metrics on the measured card anchor | 16px | 300 | 22.4px / 1.4 |
| Start shopping visible label | 18px | 600 | 25.2px / 1.4 on the link |
| Featured-card visible title | 16px | 600 | Theme line-height 1.4; label box approximately 22px |
| Explore / Shop / Support trigger in survey | 14px | 600 | 14px |
| Search visible label | 14px | 600 | 14px |
| Account visible label | 14px | 600 | Element line-height 16px; element font 16px/400 |
| About Nintendo footer link | Element 21px; label 18px | 600 | Element 29.4px |
| Small desktop H1 size token | 28px (`1.75rem`) | Bold theme token 600 | No separate H1 line-height measurement |
| Desktop H2 size token | 21px (`1.3125rem`) | Bold theme token 600 | No panel-heading line-height measurement |
| Desktop caption size token | 14px (`0.875rem`) | Not established for an input | Not measured |
| Japanese inherited reading metrics, sampled on links | 16px | 400 | 32px |
| Japanese main navigation triggers | 14px | 700 | 72px, within a 72px control |

The US theme also defines a larger desktop H1 size, **38px** (`2.375rem`). Consequently, 28px is a named size in this system, not a verified maximum. Preserve the distinction between an element's inherited font and a separately styled visible label.

## Layout

Use a wide image-led opening followed by distinct content bands and horizontal card rails. At the measured 1440 × 1000 viewport, the US header's logo link is 132 × 59px; the theme's desktop header-height token is 59px. The 48px navigation triggers sit inside that header rather than defining its full height.

The US theme defines a **90rem** maximum page width and a **71.5rem** slim width. The survey's central promotional image links are **1144px** wide at x≈141px, matching the slim token at the observed 16px scale. The first featured cards are 262px wide, with initial x positions 32, 332, 632 and 932px: a 300px pitch. The carousel can move that row horizontally, so those initial positions are not fixed page coordinates for all states.

The complete declared theme spacing sequence is **0, 2, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 64, 80, 96, 112 and 128px** at this scale. The prior 4/8/12/16/24/32/48 subset is retained in the machine tokens. An official universal 8px base-unit rule was not established.

The radius vocabulary combines theme values **8px**, **12px** and **16px** with component-specific values: **0px** on the resting card anchor, **4px** on the footer link, **20px** on header utility/account controls and **48px** on the 32px media control. Use the measured component geometry rather than treating these as interchangeable sizes.

### Responsive Behavior

Rendered behavior was measured only at **1440 × 1000**. The theme declares mobile/desktop font pairs: body 14/16px, caption 12/14px, small H1 21/28px, large H1 28/38px and H2 18/21px. These are named CSS values, not observations of a resized page. Column collapse, hamburger navigation, touch scrolling and cross-breakpoint image/shadow behavior were not verified.

## Elevation & Depth

The measured controls use no shadow on their actionable roots. The featured card obtains separation from white panels and a thin grey border; the header and footer also use `#dadada` rules. This supports a light, restrained treatment for these parts of the page.

The cached US homepage's inline CSS contains a desktop shadow declaration: `box-shadow:0px 4px 16px 0px #48484826` on `.ftCEaF`, inside `@media (min-width: 1025px)`. That class also declares `opacity:0`. It is retained as a declared shadow fact, without assigning it to a visible featured-card role. No shadow scale is published in the machine tokens.

The root scrim declarations are `rgba(0,0,0,.6)` for dark and `hsla(0,0%,100%,.6)` for light. The carousel-arrow sample uses its own lighter black alpha of 0.3; keep these contexts distinct.

## Motion & Easing

The theme declares `--theme-movement-duration: 200ms`, `--theme-movement-easing: ease-in-out` and `--theme-movement-delay: 25ms`. These are root values; they are not a measured duration for every interaction. The account button's raw computed transition is **`all 0.2s ease-in-out 0s`**. The other five actionable roots report **`all 0s ease 0s`**, although their descendants can still animate.

The primary CTA's background span reaches `matrix(1.05, 0, 0, 1.05, 0, 0)` on hover. The theme separately declares X/Y hover targets of 1.05 and X/Y tap targets of 0.99, with spring hover transitions and stiffness 600. The measured pressed matrix was `matrix(0.990029, 0, 0, 0.990029, 0, 0)`. The card's image wrapper also reaches scale 1.05 on hover and press. Pause produced the distinct sampled matrices recorded in §14; they are observations rather than reusable target values.

No carousel travel duration, entrance/exit cubic-bezier curve, page-transition duration or reduced-motion behavior was verified.

---

Measured 2026-11-02. Live surfaces: [US homepage](https://www.nintendo.com/us/) and [Japanese homepage](https://www.nintendo.com/jp/). Company and narrative sources are linked at the claims they support. Raw measurements, source excerpts, the nonsense-path control and the complete prior-content disposition are in the accompanying verification and report files.

## Components

The six controls below were measured on the US homepage with real pointer states and keyboard Tab focus. Geometry is the resting actionable element, unless a child is explicitly named. All six have `box-shadow: none` on that element.

| Control | Resting identity | Construction |
|---|---|---|
| Start shopping | 183.3 × 48px; 8px radius; padding 0px 24px; 18px/600 | Link to `/us/store/`; `#e60012` background and `#ffffff` text; a separate background span owns the interactive colour and scale |
| Search | 96.6 × 32px; 20px radius; padding 8px 12px; 14px/600 | Header launcher button; `#f8f8f8` background, `#484848` label and search icon |
| Log in / Sign up | 155.3 × 30px; 20px radius; padding 6px 12px | Header button, transparent on white; 1px `#e60012` border and red label; visible label 14px/600, element 16px/400 |
| About Nintendo | 142.8 × 29.4px; 4px radius; padding 0px | Footer link on white; anchor 21px/600 with `#e60012` colour, but visible child label 18px/600 and `#484848` |
| Shop the Pikmin Collection | 262 × 311.3px; anchor radius 0px; padding 0px | Card link; transparent anchor, white child panels with 1px `#dadada` edges; anchor 16px/300, visible title 16px/600 in `#484848` |
| Pause | 32 × 32px; CSS radius 48px; padding 0px 16px; 16px/600 | Red carousel icon button with a white icon; the oversized radius produces a circular visible control at this size |

The card's rounded visual panels and the actionable anchor are separate layers. Keyboard focus changes the anchor radius from 0px to 8px. Do not assign the theme's 12px container radius to every card link's root box.

Additional resting geometry from the survey: Wish List and Cart links are 40 × 32px with 20px radii and padding 8px 12px; their inherited element font is 16px/300, and they are icon controls. Explore, Shop and Support are white 48px-high menu triggers, 14px/600, with padding 16px 14px. The first Next page carousel arrow is 68 × 359.3px with an 8px radius, padding 16px, `rgba(0, 0, 0, 0.3)` background and `#dadada` foreground. These controls were not state-probed and are not emitted as interactive component tokens.

No visible search input was listed by the US survey. Its geometry and states remain unmeasured. No standalone badge component was state-probed; the featured card contains a compact red Shop now label with white text.

Japanese resting geometry remains regional: main menu triggers are 72px high and use 14px/700; the トピックス記事一覧 link has a 2px radius and padding 11px 24px. Japanese interaction states were not measured.

### States

| Control | Hover | Pressed | Keyboard focus |
|---|---|---|---|
| Start shopping | Background span `#e60012` → `#ac000d`; border follows; span scale 1.05 | Same dark red; sampled span matrix `(0.990029, 0, 0, 0.990029, 0, 0)` | 4px solid `#3946a0`, offset 4px; span border becomes `4px solid color(srgb 1 1 1 / 0.5)` |
| Search | Label and SVG path `#484848` → `#e60012`; background unchanged | Same as hover, no additional recorded change | 4px solid blue outline, offset 4px; label retains rest grey |
| Log in / Sign up | No detected style change within recorded scope; `:hover` true | No detected style change; `:active` true | 4px solid blue outline, offset 4px |
| About Nintendo | Anchor colour darkens to `#ac000d`; visible grey label gains a 2px dark-red bottom border | Same as hover | Same dark-red underline plus 4px solid blue outline, offset 8px |
| Shop the Pikmin Collection | Title turns red; image wrapper scale 1.05 | Same as hover | Anchor radius 0px → 8px; 4px solid blue outline, offset 4px; title remains rest grey |
| Pause | Background span darkens and its border follows; sampled scale 1.0395 | Same dark red; sampled scale 0.980129 | 4px blue outline, offset 4px; translucent-white 4px span border |

The account control's unchanged readings cover its self, pseudo-elements, four descendants including its SVG/path, and three ancestor levels. No claim is made about effects outside that scope. All six focus indications were authored solid outlines, and none persisted after blur in the collector's check. Disabled, empty, loading, validation-error and purchase-success states were not exercised.

## Do's and Don'ts

- Use white surfaces, `#484848` reading text, red actions and thin `#dadada` separators for the measured US pattern.
- Build the primary action with a stable white label and an independently animated background span.
- Preserve the authored blue keyboard outline and its offset; retain the inner translucent border on the red controls.
- Let promotional artwork provide the broader colour range. Keep control and text colours tied to their documented roles.
- Keep the visible card title semibold while distinguishing it from the root's lighter inherited font.
- Do not turn the Japanese fallback stack into a list of confirmed loaded faces.
- Do not treat a transparent card anchor as a white-filled root, or its focus radius as its resting radius.
- Do not infer global font maxima, responsive breakpoints, loading states or disabled styling from unrelated controls.

## Voice & Tone

The homepage uses short task labels such as Start shopping, Learn more and Shop now, alongside product and collection names. The featured-card title Shop the Pikmin Collection describes its destination directly. Use concrete verbs and the actual product name when extending this pattern.

Nintendo's About page describes a mission centered on enjoyment and experiences people can share; its accessibility paragraph explicitly includes people of different ages and abilities. A welcoming reading of the site follows that evidence, but no formal copywriting guide, forbidden-word list or conversion-tone policy was verified. [About Nintendo](https://www.nintendo.com/us/about/).

## Agent Prompt Guide

“Create a Nintendo US-style store band on white. Set the main Start shopping link to 48px high, 8px radius and padding 0px 24px, with an 18px/600 Geologica Variable label. Use `#e60012` and `#ffffff`. On hover, darken its background span to `#ac000d` and scale that span to 1.05 while the label stays fixed. Add a 4px solid `#3946a0` keyboard outline with 4px offset and the measured translucent inner border.”

“Build a 262px-wide featured card link with white child panels and `#dadada` borders on the white page. Give the visible title 16px/600 Geologica Variable in `#484848`. On hover and press, turn that title `#e60012` and scale the image wrapper to 1.05. Keep the actionable anchor's resting radius 0px; make it 8px with the blue outline during keyboard focus.”

“Use the 32px-high Search launcher as a grey utility pill: 20px radius, padding 8px 12px, `#f8f8f8` background and 14px/600 label. Hover and press turn its label and icon red. Follow the measured focus treatment.”

These prompts describe the measured controls. They do not supply unverified input, modal, commerce-completion or mobile patterns.
