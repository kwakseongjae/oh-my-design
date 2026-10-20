---
name: Toss
description: Toss product (TDS Mobile) and toss.im marketing surfaces, kept separate. Values are limited to current computed styles and current official TDS documentation; unresolved values are omitted.
colors:
  primary: '#3182f6'
  primary-hover: '#2272eb'
  canvas: '#ffffff'
  foreground: '#191f28'
  body: '#4e5968'
  muted: '#8b95a1'
  surface: '#f2f4f6'
  border: '#e5e8eb'
  on-primary: '#ffffff'
  weak-background: '#e8f3ff'
  weak-foreground: '#1b64da'
  danger: '#e42939'
  grey50: '#f9fafb'
  grey100: '#f2f4f6'
  grey200: '#e5e8eb'
  grey300: '#d1d6db'
  grey400: '#b0b8c1'
  grey500: '#8b95a1'
  grey600: '#6b7684'
  grey700: '#4e5968'
  grey800: '#333d4b'
  grey900: '#191f28'
  blue50: '#e8f3ff'
  blue100: '#c9e2ff'
  blue200: '#90c2ff'
  blue300: '#64a8ff'
  blue400: '#4593fc'
  blue500: '#3182f6'
  blue600: '#2272eb'
  blue700: '#1b64da'
  blue800: '#1957c2'
  blue900: '#194aa6'
  red50: '#ffeeee'
  red100: '#ffd4d6'
  red200: '#feafb4'
  red300: '#fb8890'
  red400: '#f66570'
  red500: '#f04452'
  red600: '#e42939'
  red700: '#d22030'
  red800: '#bc1b2a'
  red900: '#a51926'
  orange50: '#fff3e0'
  orange100: '#ffe0b0'
  orange200: '#ffcd80'
  orange300: '#ffbd51'
  orange400: '#ffa927'
  orange500: '#fe9800'
  orange600: '#fb8800'
  orange700: '#f57800'
  orange800: '#ed6700'
  orange900: '#e45600'
  yellow50: '#fff9e7'
  yellow100: '#ffefbf'
  yellow200: '#ffe69b'
  yellow300: '#ffdd78'
  yellow400: '#ffd158'
  yellow500: '#ffc342'
  yellow600: '#ffb331'
  yellow700: '#faa131'
  yellow800: '#ee8f11'
  yellow900: '#dd7d02'
  green50: '#f0faf6'
  green100: '#aeefd5'
  green200: '#76e4b8'
  green300: '#3fd599'
  green400: '#15c47e'
  green500: '#03b26c'
  green600: '#02a262'
  green700: '#029359'
  green800: '#028450'
  green900: '#027648'
  teal50: '#edf8f8'
  teal100: '#bce9e9'
  teal200: '#89d8d8'
  teal300: '#58c7c7'
  teal400: '#30b6b6'
  teal500: '#18a5a5'
  teal600: '#109595'
  teal700: '#0c8585'
  teal800: '#097575'
  teal900: '#076565'
  purple50: '#f9f0fc'
  purple100: '#edccf8'
  purple200: '#da9bef'
  purple300: '#c770e4'
  purple400: '#b44bd7'
  purple500: '#a234c7'
  purple600: '#9128b4'
  purple700: '#8222a2'
  purple800: '#73228e'
  purple900: '#65237b'
typography:
  h1:
    fontSize: 36px
    fontWeight: 700
    lineHeight: 54px
    fontFamily: Toss Product Sans, IBM Plex Sans, Pretendard Variable, sans-serif
  h2:
    fontSize: 30px
    fontWeight: 600
    lineHeight: 45px
    fontFamily: Toss Product Sans, IBM Plex Sans, Pretendard Variable, sans-serif
  h3:
    fontSize: 24px
    fontWeight: 600
    lineHeight: 36px
    fontFamily: Toss Product Sans, IBM Plex Sans, Pretendard Variable, sans-serif
  h4:
    fontSize: 22px
    fontWeight: 600
    lineHeight: 33px
    fontFamily: Toss Product Sans, IBM Plex Sans, Pretendard Variable, sans-serif
  body:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
    fontFamily: Toss Product Sans, IBM Plex Sans, Pretendard Variable, sans-serif
  body-small:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 21px
    fontFamily: Toss Product Sans, IBM Plex Sans, Pretendard Variable, sans-serif
  t1:
    fontSize: 30px
    lineHeight: 40px
  st1:
    fontSize: 29px
    lineHeight: 38px
  st2:
    fontSize: 28px
    lineHeight: 37px
  st3:
    fontSize: 27px
    lineHeight: 36px
  t2:
    fontSize: 26px
    lineHeight: 35px
  st4:
    fontSize: 25px
    lineHeight: 34px
  st5:
    fontSize: 24px
    lineHeight: 33px
  st6:
    fontSize: 23px
    lineHeight: 32px
  t3:
    fontSize: 22px
    lineHeight: 31px
  st7:
    fontSize: 21px
    lineHeight: 30px
  t4:
    fontSize: 20px
    lineHeight: 29px
  st8:
    fontSize: 19px
    lineHeight: 28px
  st9:
    fontSize: 18px
    lineHeight: 27px
  t5:
    fontSize: 17px
    lineHeight: 25.5px
  st10:
    fontSize: 16px
    lineHeight: 24px
  t6:
    fontSize: 15px
    lineHeight: 22.5px
  st11:
    fontSize: 14px
    lineHeight: 21px
  t7:
    fontSize: 13px
    lineHeight: 19.5px
  st12:
    fontSize: 12px
    lineHeight: 18px
  st13:
    fontSize: 11px
    lineHeight: 16.5px
rounded:
  sm: 4px
  md: 6px
  button-small: 8px
  button-medium: 10px
  button-large: 14px
  button-xlarge: 16px
spacing:
  xs: 4
  sm: 6
  md: 8
  lg: 16
  xl: 24
  xxl: 32
components:
  tds-button:
    type: button
    backgroundColor: '#3182f6'
    textColor: '#ffffff'
    rounded: 16px
    height: 56px
    padding: 0 20px
    typography: 17px / 600
    pressed: scale(0.96); 56px renders 54px, fill unchanged
    focus: '0 0 0 1px #8ac0ff, 0 0 0 3px #b8d9ff ring on :focus-visible'
    states: fill or weak; primary, danger, light, or dark; loading, disabled, pressed, and keyboard focus. Hover produces no observable change on the official component page — the press feedback is geometric, not tonal
    use: TDS Mobile xlarge primary action
  text-field:
    type: input
    states: box, line, big, hero; focus, error, disabled, read-only
    use: TDS Mobile text entry with help or error text
  badge:
    type: badge
    states: fill or weak; xsmall, small, medium, large; semantic color variants
    use: TDS Mobile status or category label; not an action
  agreement:
    type: toggle
    states: checked, unchecked, disabled, and nested agreement hierarchy
    use: TDS Mobile terms selection in v3 and v4 surfaces
  marketing-primary:
    type: button
    backgroundColor: '#e8f3ff'
    textColor: '#1b64da'
    rounded: 7px
    height: 40px
    padding: 11px 16px
    typography: 15px / 600
    states: default observed; hover not captured in the retained evidence bundle
    use: toss.im light-blue marketing CTA
  marketing-dark:
    type: button
    backgroundColor: rgba(0, 12, 30, 0.8)
    textColor: '#ffffff'
    rounded: 7px
    height: 46px
    padding: 11px 16px
    typography: 17px / 600
    states: default observed; hover not captured in the retained evidence bundle
    use: toss.im app-store style CTA
fonts:
  roles:
    sans: Toss Product Sans
  faces:
    Toss Product Sans:
      scripts:
        - hangul
        - latin
      evidence:
        - official-product-use
        - live-surface-use
      distribution: none-asserted
      substitutes:
        latin:
          family: IBM Plex Sans
          provider: google
          label: substitute — not the brand face
        hangul:
          family: Pretendard Variable
          provider: other
          label: substitute — not the brand face
    Tossface:
      evidence:
        - declared-only
  safeDefaults:
    hangul:
      - Noto Sans KR
    latin:
      - Noto Sans
---

# Design System Inspiration of Toss (토스)

## Overview

### Visual Theme & Atmosphere

Toss is a unified financial platform that tries to make consequential money decisions feel answerable, immediate, and visually calm. Its public design spans two related but distinct systems: TDS Mobile documents product UI with large, touch-oriented controls and explicit state contracts, while `toss.im` uses a tighter marketing-web button system. Across both, a strong blue action color, plain language, generous hierarchy, and purpose-built typography reduce the institutional distance people often feel around finance. This reference keeps product and marketing surfaces separate instead of forcing their geometry into one false universal component.

The verified common language is Toss Product Sans, a bright blue interaction accent, warm blue-grey neutrals, and direct hierarchy. Exact values below are limited to current computed styles or current official TDS documentation.

**Key Characteristics:**
- Product primary `#3182f6`; marketing weak CTA `#e8f3ff` / `#1b64da`
- Toss Product Sans loaded and used across all 810 visible TDS observations
- Four documented TDS button sizes with explicit loading and disabled behavior
- Surface-specific component geometry rather than one blended “Toss style”

### Primary tasks

- Check on financial products that normally live in separate institutions
- Compare options as concrete, comparable choices before deciding
- See what a product is worth before consenting, uploading, or paying
- Agree to terms, including nested sub-agreements, before a product starts
- Pay, and read back the outcome and the next action in plain language
- Pick up an interrupted insurance, payment, or account flow where it broke

### Brand Narrative

Toss presents finance as a connected product experience rather than a collection of institutional silos. Its design system supports that ambition by making repeated actions—checking, comparing, agreeing, paying, and recovering—feel consistent even when the underlying financial products differ.

The company’s first-party design writing shows how this consistency became a brand system inside the product. Product branding is treated as the experience people receive while using a feature, not merely a campaign wrapped around it. Toss Product Sans extends the same logic into typography: numbers, symbols, Korean text, and multiple digital and offline contexts were considered as one product problem.

The practical design position is therefore clarity with momentum. **Easy to answer** reduces the cognitive cost of a decision; **Value first, cost later** makes benefit legible before asking for commitment. Blue, typography, motion, and microcopy are useful only when they help a person move through money with more confidence.

### Principles

The following are implementation principles derived from the verified surfaces, not quoted corporate doctrine:

1. Separate product-system evidence from marketing-surface evidence.
2. Make interaction blue functional rather than decorative.
3. Preserve component states, especially disabled, loading, pressed, and keyboard focus.
4. Prefer exact, readable typography over ornamental depth.
5. Treat financial outcomes as explicit states with clear next actions.

### Personas

These are first-party product contexts, not invented demographic personas.

- **A person answering a financial question:** needs options translated into concrete, comparable choices rather than a dense form or open-ended prompt.
- **A person evaluating value before effort:** needs the likely benefit made visible before consent, document upload, consultation, or payment is requested.
- **A person recovering from an interrupted flow:** needs the current state, consequence, and next safe action stated explicitly, especially in insurance, payment, or account contexts.

## Colors

### Product and shared roles
- **Primary** (`#3182f6`): TDS interaction blue and primary action reference.
- **Primary Hover / Strong Blue** (`#2272eb`): stronger blue visible in current TDS documentation.
- **Canvas** (`#ffffff`): principal light background.
- **Foreground** (`#191f28`): strongest product text.
- **Body** (`#4e5968`): emphasized body and neutral action text.
- **Muted** (`#8b95a1`): secondary product text.
- **Surface** (`#f2f4f6`): quiet neutral layer.
- **Border** (`#e5e8eb`): light divider or outline reference.
- **On Primary** (`#ffffff`): text on filled primary actions.
- **Danger** (`#e42939`): destructive/error text observed in the current TDS page.

### Marketing-web roles
- **Weak Background** (`#e8f3ff`) and **Weak Foreground** (`#1b64da`): current light-blue `toss.im` CTA pair.
- The official logo/brand blue in frontmatter is catalog identity metadata; do not substitute it for the verified UI primary `#3182f6`.

### Colour palette

The official TDS Colors page (https://tossmini-docs.toss.im/tds-mobile/foundation/colors/, read 2026-10-13) publishes ten-step scales, 50–900, for grey, blue, red, orange, yellow, green, teal and purple; they are in the frontmatter as `grey50` … `purple900`. The role colours above sit on those scales: primary `#3182f6` is blue500, primary hover `#2272eb` blue600, weak foreground `#1b64da` blue700, weak background `#e8f3ff` blue50, foreground `#191f28` grey900, body `#4e5968` grey700, muted `#8b95a1` grey500, surface `#f2f4f6` grey100, border `#e5e8eb` grey200, and danger `#e42939` red600. The page does not say which red is the danger colour; red600 is the one observed on the button documentation. The greyOpacity scale is not added, because its values are a base colour plus an alpha that this reading could not confirm verbatim.

| Scale | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 |
|---|---|---|---|---|---|---|---|---|---|---|
| grey | `#f9fafb` | `#f2f4f6` | `#e5e8eb` | `#d1d6db` | `#b0b8c1` | `#8b95a1` | `#6b7684` | `#4e5968` | `#333d4b` | `#191f28` |
| blue | `#e8f3ff` | `#c9e2ff` | `#90c2ff` | `#64a8ff` | `#4593fc` | `#3182f6` | `#2272eb` | `#1b64da` | `#1957c2` | `#194aa6` |
| red | `#ffeeee` | `#ffd4d6` | `#feafb4` | `#fb8890` | `#f66570` | `#f04452` | `#e42939` | `#d22030` | `#bc1b2a` | `#a51926` |
| orange | `#fff3e0` | `#ffe0b0` | `#ffcd80` | `#ffbd51` | `#ffa927` | `#fe9800` | `#fb8800` | `#f57800` | `#ed6700` | `#e45600` |
| yellow | `#fff9e7` | `#ffefbf` | `#ffe69b` | `#ffdd78` | `#ffd158` | `#ffc342` | `#ffb331` | `#faa131` | `#ee8f11` | `#dd7d02` |
| green | `#f0faf6` | `#aeefd5` | `#76e4b8` | `#3fd599` | `#15c47e` | `#03b26c` | `#02a262` | `#029359` | `#028450` | `#027648` |
| teal | `#edf8f8` | `#bce9e9` | `#89d8d8` | `#58c7c7` | `#30b6b6` | `#18a5a5` | `#109595` | `#0c8585` | `#097575` | `#076565` |
| purple | `#f9f0fc` | `#edccf8` | `#da9bef` | `#c770e4` | `#b44bd7` | `#a234c7` | `#9128b4` | `#8222a2` | `#73228e` | `#65237b` |

## Typography

### Font Family
- **Canonical visible UI family**: `Toss Product Sans`. The collector found 810 visible first-family uses backed by loaded FontFace resources.
- **Tossface status**: declared in FontFace resources but not observed as the first family on a visible element. It is therefore context, not a canonical UI token.
- **Monospace**: no current canonical monospace claim.

### Current TDS documentation hierarchy

| Role | Size | Weight | Line Height | Evidence |
|---|---:|---:|---:|---|
| H1 | 36px | 700 | 54px | computed TDS documentation style |
| H2 | 30px | 600 | 45px | computed TDS documentation style |
| H3 | 24px | 600 | 36px | computed TDS documentation style |
| H4 | 22px | 600 | 33px | computed TDS documentation style |
| Body | 16px | 400 | 24px | dominant visible role |
| Body Small | 14px | 400 | 21px | secondary visible role |

These are evidence-backed public-document roles, not a claim that every native Toss product screen uses this exact hierarchy.

| Evidence class | Toss status |
|---|---|
| **Official product-use** | Toss Product Sans was designed for financial symbols and mobile, desktop, and offline product contexts |
| **Live surface-use** | Toss Product Sans is loaded and visibly used throughout the inspected TDS documentation surfaces |
| **Official distributed asset** | No general redistribution right is asserted by the current official sources |
| **Declared-only** | Tossface is declared in captured FontFace resources but was not observed as the visible first family |
| **Unresolved** | Public redistribution/license terms and exact native-screen type metrics beyond documented TDS roles |

### TDS foundation type scale

The official TDS Typography page (https://tossmini-docs.toss.im/tds-mobile/foundation/typography/, read 2026-10-13) publishes seven main tokens, `t1`–`t7`, and thirteen sub tokens, `st1`–`st13`, as size / line height pairs: t1 30/40, t2 26/35, t3 22/31, t4 20/29, t5 17/25.5, t6 15/22.5, t7 13/19.5. They are in the frontmatter under those code names. The page names weights only as Light, Regular, Medium, Semibold and Bold, with no numeric values, so no `fontWeight` is set on them. It also asks product code not to hard-code these sizes, because text follows the phone's larger-text setting (iOS Large 100% to xxxLarge 135%).

The H1–H4, Body and Body Small roles above are a different surface: computed styles of the TDS documentation pages themselves. Body (16/24) and Body Small (14/21) coincide with `st10` and `st11`; the documentation headings do not correspond to a TDS token.

### Brand face, substitute, safe default

- **Brand face:** Toss Product Sans. No general redistribution right is asserted by the current official sources, so most adopters cannot install it.
- **Substitute:** IBM Plex Sans for Latin and Pretendard Variable for Hangul, each a substitute — not the brand face. Both were chosen by measurement on 2026-10-20, in Toss's own TDS documentation page with the Toss Product Sans files it loads, against open-licence candidates at weights 400, 600 and 700. Latin: x-height ratio 0.739 against 0.731, average advance 0.461 em against 0.459 em. Hangul: body height 0.846 em against 0.852 em, syllable width 0.864 em against 0.865 em. Pretendard Variable is not a Google Fonts face; the closest Google Fonts face for Hangul, IBM Plex Sans KR, measured about three and a half times further off. The six documented type roles list both after the brand face in their font stacks, Latin first, because a Hangul face also carries Latin glyphs.
- **Safe default (not the brand face):** Noto Sans KR for Hangul and Noto Sans for Latin, when a project must install a face. Label it as a fallback; never present it as Toss Product Sans.

## Layout

### Spacing System
- Captured TDS documentation clusters: 4px, 6px, 8px, 16px, 24px, and 32px.
- Treat those values as a compact working scale, not proof of every native product layout token.

### Grid & Container
- TDS component documentation is mobile-oriented; its xlarge button is designed as a strong touch action.
- The public marketing site uses a distinct responsive web composition and should not inherit mobile component geometry wholesale.

### Border Radius Scale
- Documentation chrome and components cluster around 4px and 6px for small surfaces.
- Button sizes use 8px, 10px, 14px, and 16px radii from small through xlarge.

### Responsive Behavior

- TDS Mobile component sizes should remain touch-oriented; xlarge is the documented default button size.
- On web, preserve the observed 40px or 46px marketing button height rather than substituting the 56px mobile control.
- The public sources in this verification do not establish universal breakpoints, desktop maximum widths, or native safe-area values.

## Elevation & Depth

No canonical shadow token is promoted in this revision. The inspected evidence contains documentation-site chrome as well as TDS examples, so treating every computed shadow as a Toss product token would overstate the source. Use flat color layering until a component-specific official source verifies elevation.

## Motion & Easing

No canonical motion duration or easing token is promoted, and the absence is now sourced rather than assumed. TDS publishes no numeric `duration`, `easing`, or `cubic-bezier` value in its documentation; Toss states that component motion is carried inside the Figma UI Kit library, so timing must be read off the kit rather than cited from a page. The two motion rules TDS does publish are qualitative: 3D graphics and animation may use only resources from the Toss-provided module, and a loading animation must not appear where there is nothing to wait for.

Preserve state clarity and reduced-motion compatibility. Label any exact animation curve or duration as a local extension — for Toss there is no official numeric value to promote it to.

**Verified:** 2026-09-17 · `https://developers-apps-in-toss.toss.im/design/components.md` (first-party documentation query), `https://developers-apps-in-toss.toss.im/design/consumer-ux-guide.md`

## Components

### TDS Mobile Button
- Background: `#3182f6` for the canonical primary reference
- Text: `#ffffff`
- Radius: 16px at xlarge
- Height: 56px at xlarge
- Padding: 0 20px
- Font: 17px / 600 / Toss Product Sans
- Size scale: small 32px / 8px radius; medium 38px / 10px; large 48px / 14px; xlarge 56px / 16px
- States: fill or weak; primary, danger, light, or dark; loading, disabled, pressed, and keyboard focus
- Use: primary and secondary mobile actions; preserve width while loading

### TDS Mobile Text Field
- Variants: box, line, big, hero
- States: focus, error, disabled, read-only
- Use: text entry with label, help text, and error text. Do not transfer undocumented page-chrome colors into the product field token.

### TDS Mobile Badge
- Variants: fill or weak; xsmall, small, medium, large; semantic colors
- States: semantic and size variants; badge is descriptive rather than interactive
- Use: compact status or category label

### TDS Mobile Agreement
- States: checked, unchecked, disabled, and nested agreement hierarchy
- Use: terms selection; v3 and v4 are retained as separate official surfaces because both are publicly documented

### toss.im Marketing Primary
- Background: `#e8f3ff`
- Text: `#1b64da`
- Radius: 7px
- Height: 40px
- Padding: 11px 16px
- Font: 15px / 600 / Toss Product Sans
- States: default observed; hover not captured in the retained evidence bundle
- Use: light-blue marketing CTA

### toss.im Marketing Dark
- Background: `rgba(0, 12, 30, 0.8)`
- Text: `#ffffff`
- Radius: 7px
- Height: 46px
- Padding: 11px 16px
- Font: 17px / 600 / Toss Product Sans
- States: default observed; hover not captured in the retained evidence bundle
- Use: app-store style marketing CTA

### Published component roster (43 published, 4 measured)

TDS Mobile publishes **43 components**, read from the rendered navigation at
`https://tossmini-docs.toss.im/tds-mobile/` on 2026-09-19. This reference measures four of them —
Button, Badge, TextField and Agreement — and asserts no value, state or geometry for the other 39.

Agreement, Alphabet Keypad, Asset, Badge, Bar Chart, Board Row, Border, Bottom Info, Bottom Sheet, BottomCTA, Bubble, Button, Checkbox, Dialog, Grid List, Highlight, Icon Button, List Footer, List Header, ListRow, Loader, Menu, Modal, Numeric Spinner, Paragraph, Post, Progress Bar, Progress Stepper, Rating, Result, Search Field, Segmented Control, Skeleton, Slider, Stepper, Switch, Tab, Table Row, Text Button, TextField, Toast, Tooltip, Top

**This replaces a smaller, curated list and answers the question the old text left open.** The
previous roster recorded the 11 components Toss names as "most frequently used in Apps in Toss",
a partner-facing selection, and said plainly that "TDS's full component surface is larger than 11
and is not enumerated by any index found so far". It is enumerated now: 43.

**Why no index found it.** `tossmini-docs.toss.im` serves a shell, and the roster exists only in
the rendered navigation. Four pages are titled in Korean as "X 이해하기" — understanding X — so
their labels read as guides while their routes are the components `Asset`, `BottomCTA`, `Dialog`
and `ListRow`. A fifth, routed at `Agreement`, renders with its version tab `V3` as the visible
label. Reading labels alone would have produced five wrong names and missed five components; the
names above follow the routes.

The Figma/TDS Mobile UI Kit is distributed under a named licence from Viva Republica, which
terminates automatically on breach and requires deleting all copies — relevant to any adopter
redistributing kit-derived assets.

---

**Verified:** 2026-07-11 (verification v2, live computed-style capture + current official TDS docs); roster and licence added 2026-09-17
**Tier 1 sources:** https://toss.im/ https://toss.im/docs/10290 https://tossmini-docs.toss.im/tds-mobile/components/button/ https://tossmini-docs.toss.im/tds-mobile/components/TextField/text-field/ https://tossmini-docs.toss.im/tds-mobile/components/badge/ https://developers-apps-in-toss.toss.im/design/components.md https://developers-apps-in-toss.toss.im/design/consumer-ux-guide.md https://developers-apps-in-toss.toss.im/design/prepare/figma-ui-license.md
**Tier 2 sources:** https://getdesign.md/toss produced no importable Toss record; https://styles.refero.design/?q=Toss produced no importable result through the available fetch path.
**Surface split:** TDS Mobile xlarge uses 56px height and 16px radius; `toss.im` marketing actions observed here use 40–46px height and 7px radius.
**Conflicts unresolved:** none

### States

| Component | Verified state contract |
|---|---|
| TDS Button | fill/weak, semantic color, loading, disabled, pressed, keyboard focus |
| TDS Text Field | box/line/big/hero, focus, error, disabled, read-only |
| TDS Agreement | checked, unchecked, disabled, nested hierarchy |
| Marketing CTAs | default geometry captured; hover remains unclaimed |

## Do's and Don'ts

### Do
- Keep TDS Mobile and `toss.im` marketing variants explicitly named by surface.
- Use `Toss Product Sans` where the font is available, with a system fallback for resilience.
- Preserve documented loading, disabled, pressed, and keyboard-focus states on buttons.
- Treat badge content as status metadata, not as an action affordance.
- Use exact component geometry only where the evidence names a size and surface.

### Don't
- Don't use logo brand blue as a silent replacement for UI primary `#3182f6`.
- Don't claim Tossface is the visible primary UI font; it was declared but unused in this capture.
- Don't copy documentation-site colors into native product tokens without component-level evidence.
- Don't merge the 16px TDS radius with the 7px marketing radius into an average value.
- Don't invent cards, shadows, tabs, toasts, or dialogs from generic fintech conventions.

## Voice & Tone

Toss speaks as a capable guide that removes work rather than displaying financial expertise. Copy is short and direct, but the governing idea is not minimal word count by itself: a person should understand the value, answer the question, and recover from uncertainty without decoding industry language. Official product-design writing describes principles such as **Easy to answer** and **Value first, cost later**—make choices concrete, and show why an action is worthwhile before asking for effort, data, or commitment.

In product flows, name the outcome and next action precisely. In education or product-branding surfaces, explain one unfamiliar idea in everyday language and let the interface carry the rest. Avoid vague reassurance, unexplained abbreviations, institutional phrasing, or playful copy that makes a financial consequence ambiguous.

## CJK Typesetting

Toss Product Sans was designed with Korean text, numbers, and symbols as one problem, which is why it is the family for Hangul and Latin alike. The current evidence does not verify a word-break, line-break, punctuation-compression, or tracking rule for TDS, so none is declared here.

## Agent Prompt Guide

- “Create a TDS Mobile xlarge primary button using `#3182f6`, white text, 56px height, 16px radius, 17px/600 Toss Product Sans, and explicit loading/disabled/focus behavior.”
- “Create a `toss.im` weak marketing CTA using `#e8f3ff` background, `#1b64da` text, 40px height, and 7px radius.”
- “Use Toss Product Sans for the verified UI family; do not promote Tossface without visible usage evidence.”
- “If building a component not listed here, mark it as an extension rather than presenting it as verified TDS.”

## Governance

### Known Gaps

- **Contrast, `tds-button`.** Text `#ffffff` on `#3182f6` measures 3.71:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Elevation and motion.** No shadow, duration, or easing value is verified as a product token.
- **Font licence.** Public redistribution and licence terms for Toss Product Sans are unresolved; no substitute has been measured.
- **Spacing and radius scale.** The official TDS documentation publishes no spacing scale and no radius tokens (foundation pages checked 2026-10-13). The `spacing` xs–xxl and `rounded` sm/md values are clusters measured on the TDS documentation pages, kept because they are sourced to that capture; they are not TDS tokens. The button radii are the rendered official Button component, whose page states no radius or height.
- **Button pressed and focus.** The TDS Button page names `--button-pressed-opacity` and `--button-pressed-background-color` without values and states no focus ring. The `pressed` and `focus` values come from the 2026-09-17 computed-style capture of that page, not from the documentation text.
- **Coverage.** Four of 43 published TDS components are measured; marketing CTA hover states were not captured.
