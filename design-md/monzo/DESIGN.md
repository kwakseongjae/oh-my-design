---
name: Monzo
colors:
  primary: '#ff4f40'
  midnight: '#091723'
  deep-navy: '#112231'
  teal: '#016b83'
  canvas: '#ffffff'
  mint: '#f2f8f3'
  soft-mint: '#e3ebe4'
  foreground: '#091723'
  on-primary: '#ffffff'
  on-dark: '#ffffff'
  on-midnight: '#ffffff'
  navy-hover: '#2c3a43'
  navy-600: '#3b4c54'
  grey-300: '#c9d0c6'
  grey-400: '#aeb5a7'
  grey-500: '#75817e'
  focus-ring: '#009ace'
  legacy-focus-ring: '#218fb7'
  nav-focus-ring: '#00a4db'
  blue-200: '#bbf6e2'
  blue-300: '#8ce6d1'
  blue-400: '#68cdb5'
  pink-300: '#ffa9df'
  negative: '#d70015'
  red-450: '#ff6961'
  red-500: '#ff453a'
  red-accent: '#ff3b30'
  positive: '#248a3d'
  green-300: '#30db5b'
  green-400: '#30d158'
  green-450: '#34c759'
  green-accent: '#44d12c'
  black-primitive: '#000000'
typography:
  body:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.4
    use: Inherited outer-control text; MonzoSansText live-loaded. Paragraph ink is recorded separately in prose.
  subheading:
    fontSize: 25px
    fontWeight: 700
    use: Personal account card title; title family not separately captured.
  button:
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.4
    use: Visible CTA labels; modular outer element is weight 400.
  button-small:
    fontSize: 12.8px
    fontWeight: 600
    lineHeight: 1.4
    use: Visible Learn more label; outer element is weight 400.
  nav:
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.4
    use: Visible Business label; outer element is weight 400.
rounded:
  none: 0px
  xs: 4px
  xsmall: 8px
  small: 12px
  medium: 16px
  sm: 24px
  md: 32px
  xlarge: 48px
  lg: 64px
  nav: 100px
  modular-button: 128px
  full: 500px
spacing:
  xxs: 2
  xs: 4
  sm: 8
  small: 12
  md: 16
  base: 24
  lg: 32
  xl: 48
  xxl: 64
  section: 80
  wide: 96
  widest: 128
components:
  button-primary:
    type: button
    backgroundColor: '#091723'
    textColor: '#ffffff'
    border: '1px solid #091723'
    rounded: 500px
    height: 51.2px
    padding: 12px 24px
    typography: 16px / 600 MonzoSansText
    hover: 'bg and border #2c3a43'
    pressed: 'bg and border #112231; 1px solid #218fb7 outline, offset 0px'
    focus: '1px solid #218fb7 outline, offset 2px'
    use: Header Sign up link; measured 108.4px wide, with no box shadow.
  button-white:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#091723'
    border: '1px solid #ffffff'
    rounded: 500px
    height: 48.4px
    padding: 12px 24px
    typography: 16px / 600 MonzoSansText
    hover: bg and border rgba(255, 255, 255, 0.8)
    pressed: 'bg and border rgba(255, 255, 255, 0.9); 1px solid #218fb7 outline, offset 0px'
    focus: '1px solid #218fb7 outline, offset 2px'
    use: Hero Open a free Monzo account link over photography; measured 264.3px wide.
  button-modular:
    type: button
    backgroundColor: '#091723'
    textColor: '#ffffff'
    rounded: 128px
    height: 48px
    padding: 0px 24px
    typography: 16px / 400 MonzoSansText
    hover: 'bg #2c3a43'
    pressed: 'bg #112231'
    focus: '2px solid #009ace outline, offset 2px'
    use: First modular Open a free Monzo account link below the hero; 262.3px wide. The visible b label is 16px/600; outer element 16px/400. No border or box shadow.
  nav-business:
    type: button
    textColor: rgba(9, 23, 35, 0.6)
    rounded: 100px
    height: 40px
    padding: 8px 12px
    typography: 16px / 400 MonzoSansText
    hover: 'label and icon fg #091723'
    pressed: 'label and icon fg #091723'
    focus: 'label and icon fg #091723; 2px solid #00a4db outline, offset 2px'
    use: Header Business link; transparent on the pale navigation container, 125px wide. Visible span label is weight 600; no border or box shadow.
  button-secondary:
    type: button
    textColor: '#091723'
    border: '2px solid #091723'
    rounded: 128px
    height: 36px
    padding: 0px 16px
    typography: 12.8px / 400 MonzoSansText
    hover: bg rgba(9, 23, 35, 0.1)
    pressed: bg rgba(9, 23, 35, 0.2)
    focus: '2px solid #009ace outline, offset 2px'
    use: Learn more link in the Current accounts carousel card, targeting /current-account; transparent on white, 106.2px wide. Visible b label is 12.8px/600; no box shadow.
  card-personal:
    type: card
    textColor: '#091723'
    rounded: 0px
    height: 281px
    padding: 0px
    typography: 16px / 400 MonzoSansText
    hover: 'title underline #091723; arrow fill rgba(9, 23, 35, 0.1); graphic transform matrix(0.984808, -0.173648, 0.173648, 0.984808, -2.66421, -3.59193)'
    pressed: same title, arrow and graphic changes as hover
    focus: 'wrapper radius 32px; 2px solid #009ace outline, offset 2px; inner article height 281px to 241px'
    use: 'Personal account card link; measured wrapper 416.3px wide, transparent on white, with no border or box shadow. Its inner article is #f2f8f3; title is 25px/700. Focus changes reversed after blur and reproduced twice; inner height is an observation rather than a general sizing rule.'
fonts:
  roles:
    display: MonzoSansDisplay
    body: MonzoSansText
---

# Design System Inspiration of Monzo

## Overview

### Visual Theme & Atmosphere

Monzo is a smartphone bank founded in early 2015, with its headquarters in London. Its current About page reports more than 16 million personal and business customers, sets a mission to make money work for everyone, and describes a bank built around solving customers’ problems, fairness and transparency. [Company](https://monzo.com/about) · [Press](https://monzo.com/press)

Hot Coral remains the recognisable signature. Monzo’s October 2022 refresh with Ragged Edge put it alongside deep navy, soft white and a broader secondary palette. That announcement connects the identity to warmth, empathy and optimism; it also introduced more expressive illustration and warmer photography. [2022 brand refresh](https://monzo.com/blog/weve-had-a-little-makeover)

The current website adds another layer. Monzo’s May 2026 design article describes a new modular web system, semantic tokens and reusable content blocks. The bank card’s silhouette informs those blocks, with rounded corners, bold typography and app demonstrations. Hot Coral is deliberately used for moments of personality because red can also suggest an error. [2026 website system](https://monzo.com/blog/reimagining-monzo-com-building-a-modular-high-fidelity-web-design-system-that-scales)

The captured homepage combines a white header, a large rounded photographic hero, dark and pale surfaces, a coral wordmark and product-card illustrations. Its headline places everyday life ahead of financial administration. Two button implementations coexist: the header and hero use 500px radii; the modular content buttons use 128px radii. Both remain visually pill-shaped. This is a useful reference for a friendly banking website with clear action hierarchy and tangible product imagery.

#### Primary tasks

- Open a free account or compare personal, joint, children’s and business accounts.
- Explore saving, credit, investments and pensions.
- Learn about organising money with Pots and Salary Sorter, receiving instant spending notifications and protecting an account.

These are public-site tasks and product descriptions, observed on the [homepage](https://monzo.com) and [current-account page](https://monzo.com/current-account).

### Brand Narrative

Monzo’s press page dates its founding to early 2015 and says it became a regulated bank in August 2016. It describes a bank built for smartphones, with a London headquarters. Those are the documented milestones used here. [Press](https://monzo.com/press)

The coral card continues as a recurring identity asset: it anchors the 2022 visual refresh and, in the 2026 website system, becomes a shape for communicating product features. The current page brings that asset into rounded modular content, practical demonstrations and scenes of everyday life. [Brand refresh](https://monzo.com/blog/weve-had-a-little-makeover) · [Website evolution](https://monzo.com/blog/reimagining-monzo-com-building-a-modular-high-fidelity-web-design-system-that-scales)

### Principles

- **Solve customers’ problems fairly and transparently.** The company’s own description of how it wants to improve banking. [About](https://monzo.com/about)
- **Build reusable, coherent web content.** The 2026 system connects design, engineering and content through shared tokens and modular blocks. [Website system](https://monzo.com/blog/reimagining-monzo-com-building-a-modular-high-fidelity-web-design-system-that-scales)
- **Keep product writing short, active and consistent.** These are the three principles in Monzo’s public writing-system announcement. [Writing system](https://monzo.com/blog/weve-made-our-writing-system-available-to-all)

### Personas

No researched personas were verified; the homepage explicitly presents personal, joint, under-16s and business account audiences.

## Colors

The survey found 26 computed root properties and 400 distinct declared custom-property names. The palette below is declared in Monzo’s `.monzo-com-design-system`; the semantic aliases establish roles. A declaration is evidence of a token, not proof that every colour is visible on this page. Midnight and mint are descriptive aliases retained from the reference; the CSS primitive names are listed alongside.

| Role / primitive | Value | Evidence and use |
|---|---|---|
| Hot Coral / primary | `#ff4f40` | `--color-brand`; semantic accent; also rendered in the background and text census and the card illustration |
| Foreground / Midnight | `#091723` | `--color-navy-900`, primary content and primary-action default; measured header and content CTA fills |
| Primary hover | `#2c3a43` | `--color-navy-700`; measured dark CTA hover |
| Deep navy / primary pressed | `#112231` | `--color-navy-800`; measured dark CTA pressed fill and inverse primary background alias |
| Navy 600 | `#3b4c54` | Link-hover and neutral-darker aliases; also rendered as a background |
| Canvas / inverse content | `#ffffff` | `--color-white`; measured light CTA fill and dark CTA lettering |
| Mint | `#f2f8f3` | `--color-grey-100`, secondary background; measured personal-card article fill |
| Soft mint | `#e3ebe4` | `--color-grey-200`; declared inverse-primary hover fill |
| Grey 300 / 400 / 500 | `#c9d0c6` · `#aeb5a7` · `#75817e` | Declared neutral ramp; grey 500 also appears in rendered backgrounds |
| Blue accent | `#009ace` | Semantic action and field focus; measured modular-button, secondary-link and card focus outlines |
| Other measured focus colours | `#218fb7` · `#00a4db` | Header/hero outline and Business-navigation outline respectively; preserve these distinct observations |
| Blue 200 / 300 / 400 / 500 | `#bbf6e2` · `#8ce6d1` · `#68cdb5` · `#218fb7` | Declared blue primitives |
| Teal 550 / pink 300 | `#016b83` · `#ffa9df` | Declared Flex Purchase / Flex Build product-colour aliases; no teal CTA was state-measured |
| Negative / red primitives | `#d70015` · `#ff6961` · `#ff453a` · `#ff3b30` | Negative content and field-error alias uses red 550; inverse negative uses red 450; remaining entries are declared primitives |
| Positive / green primitives | `#248a3d` · `#30db5b` · `#30d158` · `#34c759` · `#44d12c` | Positive content uses green 550 and inverse positive uses green 300; remaining entries are declared primitives |
| Black primitive | `#000000` | Declared primitive; it is not the measured dominant paragraph ink |

Most sampled paragraphs use **`rgba(9, 23, 35, 0.6)`**: 52 paragraphs, compared with 10 white and 6 opaque Midnight paragraphs. Keep that alpha rather than flattening it into a solid grey. Separators and secondary hover fills use navy at 10%; secondary pressed fills use 20%. These alpha roles are separate from the solid palette.

The rendered background census is led by white ×25, mint ×21 and Midnight ×12. These are element counts, not screen-area percentages. The evidence does not establish a fixed accent-to-neutral ratio or a universal prohibition on coral surfaces.

## Typography

### Evidence classes

- **Official use documentation:** the 2022 brand announcement identifies Oldschool Grotesk as its hero face and Monzo Sans as the functional face, a custom cut of Universal Sans chosen for readability, generous dots and curled ends. This documents the brand at that date. It does not identify the current private banking app’s font files. [Official announcement](https://monzo.com/blog/weve-had-a-little-makeover)
- **Live-loaded on monzo.com:** `MonzoSansDisplay` at 600, 700 and 800 normal; `MonzoSansText` at 400, 600 and 700 normal. The regular Text face is reported as `normal normal` by `document.fonts`. The census declares body and buttons as `MonzoSansText`, and H1 as `MonzoSansDisplay`.
- **Official distributed assets:** no distributable font package or licence was opened. The page’s `@font-face` rules point to relative WOFF2 files named `MonzoSansDisplay-ExtraBold.woff2`, `-Bold.woff2`, `-SemiBold.woff2`, and the equivalent Text regular, semibold and bold files. These declarations corroborate the loaded faces; the files were not downloaded and no redistribution licence was established.
- **Declared-only:** CSS also names `Oldschool` 800, served from `OldschoolGroteskCompact-ExtraBold.woff2`, and Maison Neue Web / Maison Neue Mono Web. They are absent from the loaded list. Display regular/medium, Text medium and all the listed italic faces also lack loaded status in this capture. No specimen is supplied for an unloaded face.
- **Unresolved:** an exclusive commission for both live families, universal headline weights, and current in-app font mapping. Substitute: none chosen.

### Measured interface metrics

| Element | Outer element | Visible label / title | Line height |
|---|---|---|---|
| Header Sign up | 16px / 600 MonzoSansText | 16px / 600 | 22.4px |
| Hero account CTA | 16px / 600 MonzoSansText | 16px / 600 | 22.4px |
| Modular account CTA | 16px / 400 MonzoSansText | 16px / 600 | 22.4px |
| Business navigation | 16px / 400 MonzoSansText | 16px / 600 | 22.4px |
| Small Learn more link | 12.8px / 400 MonzoSansText | 12.8px / 600 | 17.92px |
| Personal-account card link | 16px / 400 MonzoSansText | Title 25px / 700; title-family not separately captured | Outer 22.4px |

All six outer elements measured `letter-spacing: normal`. Do not apply the legacy reference’s global negative tracking to them.

The root retains a fluid type scale: `--text-billboard` is `clamp(2.986rem,2.6276rem + 1.7918vw,3.8147rem)`; heading 1 is `clamp(2.4883rem,2.2447rem + 1.2182vw,3.0518rem)`; heading 2 is `clamp(2.0736rem,1.9145rem + 0.7953vw,2.4414rem)`; heading 4 is `clamp(1.44rem,1.387rem + 0.2649vw,1.5625rem)`. These are captured CSS expressions, not a second viewport measurement. The default line-height token is 1.4; the newer system also declares 1.2 for large headings.

## Layout

The desktop viewport is 1440×1000. The survey’s sticky header is 87px high. The hero image starts below it and has large rounded corners, white text and an inverse CTA. The captured page then uses horizontal product carousels, app demonstrations, account cards, travel and savings content, a security feature area and footer navigation. This arrangement matches the reusable-block approach described in the [website-system article](https://monzo.com/blog/reimagining-monzo-com-building-a-modular-high-fidelity-web-design-system-that-scales).

Monzo declares a spacing scale of **2, 4, 8, 12, 16, 24, 32, 48, 64, 80, 96 and 128px**. For concrete controls, keep the measured 12px 24px header/hero padding, 0px 24px modular-action padding, 0px 16px small-action padding and 8px 12px navigation padding. These do not establish one universal card-padding or section-gap value.

The declared corner scale is **4, 8, 12, 16, 24, 32, 48 and 64px**. Measured link/button wrappers additionally use 0, 100, 128 and 500px. Choose the treatment for the specific component rather than assigning 500px to all interactive elements. In the survey, other interactive step/security buttons use 16px and carousel markers use 0px.

### Responsive Behavior

Only the 1440×1000 desktop surface was measured. The captured root type expressions are fluid; Monzo’s 2026 article says its system is responsive and tested across content densities, locales and scripts. Specific mobile breakpoints, stacking rules and touch layouts remain unverified. [Official system description](https://monzo.com/blog/reimagining-monzo-com-building-a-modular-high-fidelity-web-design-system-that-scales)

## Elevation & Depth

The measured link wrappers have `box-shadow: none`. Surface contrast provides much of their separation, but the system also has an explicit elevation scale.

| Declared level | Raw box-shadow token |
|---|---|
| 1 | `0px 2px 8px rgba(0,0,0,.16)` |
| 2 | `0px 4px 16px rgba(0,0,0,.16)` |
| 3 | `0px 8px 32px rgba(0,0,0,.16)` |
| 4 | `0px 16px 48px rgba(0,0,0,.24)` |
| 5 | `0px 32px 64px rgba(0,0,0,.24)` |

CSS also declares subscription gradients in light, dark and Hot Coral variants; their application was not state-probed.

The Personal account card illustration actually computes `filter: drop-shadow(rgba(0, 0, 0, 0.16) 0px 2px 8px)`. This supports selective depth on product imagery. A claim that the search bar is the system’s sole shadow usage is not supported.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.none`: `none`
- `shadow.level1`: `0px 2px 8px rgba(0,0,0,.16)`
- `shadow.level2`: `0px 4px 16px rgba(0,0,0,.16)`
- `shadow.level3`: `0px 8px 32px rgba(0,0,0,.16)`
- `shadow.level4`: `0px 16px 48px rgba(0,0,0,.24)`
- `shadow.level5`: `0px 32px 64px rgba(0,0,0,.24)`

## Motion & Easing

The modular primary and small secondary link both compute **`background-color 0.3s cubic-bezier(0, 0, 1, 1) 0s`**. Their hover transition is 300ms; the pointer-down capture reports a longest transition of 0ms. The hero action computes **`background-color 0.2s ease 0s`**, while the Business and card link wrappers compute **`all 0s ease 0s`**. Descendants can still animate: the card graphic changes from `none` to `matrix(0.984808, -0.173648, 0.173648, 0.984808, -2.66421, -3.59193)` on hover and press.

The stylesheet separately declares instant 0ms, short 100ms, medium 200ms, long 300ms, extra-long 400ms and super-long 600ms durations. It also includes spring parameters, so a brand-wide prohibition on springs is not supported. No app-sheet, transaction-row or reduced-motion behaviour was measured. The website article describes attention-guiding animations; it does not specify these timings. [Official design writing](https://monzo.com/blog/reimagining-monzo-com-building-a-modular-high-fidelity-web-design-system-that-scales)

---

Measured 2026-11-02 on the public UK-English homepage, logged out, at 1440×1000. Computed styles and loaded fonts came from the survey and state captures. Company and brand context came from the linked first-party pages; verification.md records raw samples, scope and prior-reference dispositions.

## Components

The six controls below were measured after rejecting consent, using real hover, mouse-down and Tab focus. All are links. No search input was present in the survey.

| Control | Rest identity | Hover | Pressed | Keyboard focus |
|---|---|---|---|---|
| Header **Sign up** | 108.4×51.2px; 500px radius; 12px 24px padding; `#091723` / `#ffffff`; 1px matching border | Fill and border `#2c3a43` | Fill and border `#112231`; 1px solid `#218fb7` outline, offset 0 | 1px solid `#218fb7`, offset 2px |
| Hero **Open a free Monzo account** | 264.3×48.4px; 500px; 12px 24px; `#ffffff` / `#091723`; 1px white border | Fill and border white at 80% alpha | White at 90% alpha; 1px solid `#218fb7` outline, offset 0 | 1px solid `#218fb7`, offset 2px |
| First modular **Open a free Monzo account** | 262.3×48px; 128px; 0px 24px; `#091723` / `#ffffff`; no border | Fill `#2c3a43` | Fill `#112231` | 2px solid `#009ace`, offset 2px |
| Header **Business** | 125×40px; 100px; 8px 12px; transparent over pale navigation container; label navy at 60% alpha | Label and icon become `#091723` | Same changed label and icon as hover | Same opaque label/icon plus 2px solid `#00a4db`, offset 2px |
| Current-accounts **Learn more** | 106.2×36px; 128px; 0px 16px; transparent on white; `#091723` label and 2px border | Navy 10% fill | Navy 20% fill | 2px solid `#009ace`, offset 2px |
| **Personal account** card link | Wrapper 416.3×281px; radius 0px; padding 0px; transparent on white; `#091723`; inner article mint | Title underline becomes opaque Midnight; arrow gains navy 10% fill; card graphic rotates/translates | Same descendant changes as hover | Wrapper radius 32px and 2px solid `#009ace`, offset 2px; inner article height 281→241px |

The card’s inner height change reproduced in both state passes and reversed after blur. Preserve it as an observation, not a general card-sizing rule. The wrapper itself remains 281px high. Its graphic has a measured drop-shadow filter; the six link wrappers themselves have no box shadow.

### States

For dark actions, preserve the measured rest → hover → pressed sequence: `#091723` → `#2c3a43` → `#112231`. For the inverse hero action, white becomes 80% on hover and 90% on press. The outlined secondary link adds navy 10% and 20% fills. Navigation instead strengthens the label/icon from 60% navy to opaque Midnight.

Keyboard focus is authored, not a browser `auto` ring: header/hero actions use a 1px solid `#218fb7` outline, modular/secondary/card links use 2px solid `#009ace`, and the Business link uses 2px solid `#00a4db`; all have 2px offsets. Every captured focus change disappears after blur. The card additionally changes its wrapper radius and inner layout as recorded in §4.

No empty, loading, validation-error, payment-success or disabled-state component was exercised. The stylesheet declares negative, positive, loading and disabled semantic values, but these alone do not establish complete rendered state designs.

## Do's and Don'ts

- Keep Hot Coral as a recognisable brand signal, and use the measured dark and inverse treatments for these CTAs.
- Use the loaded Monzo Sans families, clear visible semibold labels and the specific control geometry recorded above.
- Preserve opaque Midnight for strong content and alpha navy for quieter paragraphs and navigation.
- Distinguish the header/hero implementation from modular content components, especially their radii and focus outlines.
- Do not impose a fixed neutral-to-accent percentage, a universal 500px radius, global negative tracking or a blanket ban on secondary colours and elevation.
- Do not turn a declared field-error colour into an invented error component or an unloaded font declaration into a specimen.

These implementation recommendations follow the measured controls and declared tokens, rather than adding brand rules.

## Voice & Tone

Monzo’s published writing principles are **Straightforward kindness**, **Everyday magic** and **Warm wit**. They put the reader’s needs first, use inclusive everyday language, explain jargon and generally favour active voice. When Monzo has made a mistake, the guide asks for one sincere apology followed by the remedy. It allows rare deliberate exceptions to active voice, rather than imposing an absolute ban. [Writing principles](https://monzo.com/tone-of-voice)

Operational and service communication prioritises clarity and kindness, with no warm wit. Marketing permits more playfulness; campaigns and social channels give humour more room. The guide rejects jokes at others’ expense and literal magic clichés. Its 2025 public writing-system announcement adds three product-writing rules: keep it short, use active voice and be consistent. [Writing system](https://monzo.com/blog/weve-made-our-writing-system-available-to-all)

Live wording illustrates the range: the homepage headline is “Spend your money on life, not your life on money”; the [current-account page](https://monzo.com/current-account) retains “Current accounts that keep up”. Action labels remain direct: “Sign up” and “Learn more”.

## Agent Prompt Guide

Use these measured examples when building in the website’s style:

- “Create a 48px account-opening link with a 128px radius, 0px 24px padding, Midnight `#091723` fill and a white 16px/600 MonzoSansText label. Its outer element is 16px/400. Hover changes the fill to `#2c3a43`; pressing changes it to `#112231`; keyboard focus adds a 2px solid `#009ace` outline with 2px offset.”
- “Create a small outlined Learn more link on white: 36px high, 128px radius, 0px 16px padding, 2px Midnight border and 12.8px/600 MonzoSansText lettering. Use navy at 10% alpha on hover and 20% on press.”
- “For the photographic hero, use the measured white account-opening link: 48.4px high, 500px radius, 12px 24px padding and Midnight lettering. Its hover and pressed fills are white at 80% and 90% alpha.”

Keep each example attached to its measured surface. A current private banking-app screen was not inspected.
