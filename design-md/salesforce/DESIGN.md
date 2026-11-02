---
name: Salesforce
colors:
  primary: '#066afe'
  primary-hover: '#022ac0'
  primary-dark: '#0b5cab'
  legacy-primary: '#0176d3'
  navy: '#032d60'
  deep-navy: '#002c6e'
  brand-bright: '#1b96ff'
  foreground: '#181818'
  legacy-ink: '#080707'
  canvas: '#ffffff'
  cloud-tint: '#eaf5fe'
  hairline: '#e5e5e5'
  error: '#ea001e'
  success: '#2e844a'
  warning: '#dd7a01'
  on-primary: '#ffffff'
  link-hover: '#002775'
  slack-tile-hover: '#7526e3'
typography:
  display-xl:
    fontSize: 80px
    lineHeight: 1.1
    use: 'Declared PBC display-1: 80px / 88px; tracking -0.018em; not an H1 measurement'
  display-md:
    fontSize: 56px
    lineHeight: 1.142857
    use: 'Declared PBC display-2: 56px / 64px; tracking -0.012em; pricing page not re-measured'
  section:
    fontSize: 40px
    lineHeight: 1.2
    letterSpacing: '-0.32px'
    use: 'Declared PBC display-4: 40px / 48px, -0.008em = -0.32px at this size'
  subsection:
    fontSize: 24px
    lineHeight: 1.333333
    letterSpacing: '-0.096px'
    use: 'Declared PBC display-6: 24px / 32px, -0.004em; separate from measured Slack label'
  card-title:
    fontSize: 20px
    lineHeight: 1.4
    letterSpacing: '-0.08px'
    use: 'Declared PBC display-7: 20px / 28px, -0.004em'
  body-lg:
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.555556
    use: 'Surveyed inline pricing link: Salesforce Sans 18px / 400 / 28px; not a paragraph measurement'
  body:
    fontSize: 16px
    use: Declared PBC body-2 size; not a paragraph line-height measurement
  button:
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.5
    use: 'Measured hero and pill labels: Salesforce Sans 16px / 700 / 24px; hero tracking normal, pill -0.032px'
  link-sm:
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.428571
    letterSpacing: '-0.028px'
    use: 'Measured finance industry link: 14px / 700 / 20px'
rounded:
  none: 0px
  sm: 4px
  secondary: 6px
  lg: 16px
  media: 22px
  xl: 32px
  full: 9999px
spacing:
  sm: 8
  md: 12
  base: 16
  lg: 24
  xl: 32
  xxl: 48
  section: 64
  max: 80
components:
  button-primary:
    type: button
    backgroundColor: '#0176d3'
    textColor: '#ffffff'
    rounded: 4px
    padding: 8px 32px
    height: 52px
    typography: 16px / 700
    border: 1px solid rgba(0, 0, 0, 0)
    hover: 'bg #0b5cab'
    pressed: 'bg #0b5cab; 2px solid #ffffff border; 4px solid #1b96ff outline, offset 0px; width 193.2px to 195.2px'
    use: Hero link 무료로 시작하기; /kr/small-business/free-trial/starter-suite-v2/?d=pb. Mouse-down includes pointer focus; keyboard focus unmeasured.
  button-secondary:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#0176d3'
    rounded: 6px
    padding: 8px 32px
    height: 52px
    typography: 16px / 700
    border: '1px solid #0176d3'
    hover: 'bg #eaf5fe'
    pressed: 'bg #eaf5fe; 2px solid #001642 border; 4px solid #1b96ff outline, offset 0px; width 151.7px to 153.7px'
    use: Hero link 데모 보기; /kr/small-business/demos/smb-overview/?d=pb. Mouse-down includes pointer focus; keyboard focus unmeasured.
  button-pill:
    type: button
    backgroundColor: '#066afe'
    textColor: '#ffffff'
    rounded: 9999px
    padding: 14px 32px
    height: 52px
    typography: 16px / 700
    hover: 'bg #022ac0'
    pressed: 'bg #022ac0; 3px solid #066afe outline, offset 2px'
    use: 'Starter Suite link 무료로 시작하기 in a pbc-button host; aria-label 무료로 시작하기: 비즈니스의 모든 영역에적용 가능한 내장형 AI. Rest border none; decorative ::after present. Keyboard focus unmeasured.'
  button-tertiary:
    type: button
    textColor: '#022ac0'
    rounded: 4px
    padding: 0px
    height: 24px
    typography: 14px / 700
    border: 2px solid rgba(0, 0, 0, 0)
    hover: 'fg #002775; underline removed'
    pressed: 'fg #080707; 2px solid #080707 border; radius 9999px; 3px solid #066afe outline, offset 2px; underline removed'
    use: 'Finance industry link 자세히 알아보기, aria-label 자세히 알아보기: 금융 서비스. Transparent on measured white backing; rest underline; keyboard focus unmeasured.'
  card-glass:
    type: card
    textColor: '#ffffff'
    rounded: 32px
    border: 2px solid rgba(255, 255, 255, 0.1)
    padding: 19.2px
    height: 176.4px
    typography: 24px / 100
    hover: 'bg #7526e3'
    pressed: 'bg #7526e3; 2px solid #ffffff border; 5px solid #ffffff outline, offset 0px'
    use: 'Slack product tile link /kr/slack/ on the dark hero; rest fill rgba(255, 255, 255, 0.05), with no opaque bg token. fg and font refer to visible heading; anchor inherited fg is #080707 and font 16px / 400. Width 240px. Keyboard focus unmeasured.'
  nav-link:
    type: button
    textColor: '#032d60'
    rounded: 0px
    padding: 0px
    height: 18px
    typography: 14px / 400
    hover: 'fg and underline color #0176d3'
    pressed: 'fg and underline color #0176d3'
    use: Global-header contact link 문의하기, a.contact-heading, aria-label 문의 예약하기. Transparent on measured white backing; underlined. Contact link, not a main menu tab. Keyboard focus unmeasured.
fonts:
  roles:
    display: ITC Avant Garde
    body: Salesforce Sans
    localized-display: Seol Sans Heavy
    pbc-display: Avant Garde for Salesforce
---

# Design System Inspiration of Salesforce

## Overview

### Visual Theme & Atmosphere

Salesforce delivers cloud CRM and presents its platform as a place where people, AI agents, applications, and data work together. Its company story traces that proposition to cloud-delivered CRM in 1999 and now frames it around the Agentic Enterprise. The public design team describes its work as designing human and agent interactions. These are the company's current product and design narratives. [Company story](https://www.salesforce.com/company/our-story/) · [Salesforce Design](https://www.salesforce.com/design/).

The measured homepage is the Korean edition (`salesforce.com/kr/`), where salesforce.com sent the capture browser; it combines a pale blue opening, a dark blue Agentic Enterprise presentation, translucent product tiles, customer videos, and white product and industry sections. Rounded display lettering sits above functional Salesforce Sans labels. The five product tiles name Slack, Tableau, Agentforce, Customer 360, and Data 360. Their 32px corners and translucent white fills give the presentation a softer geometry than the rectangular hero actions. This description comes from the captured Korean homepage, reached from the root URL even with an en-US browser locale.

Two action systems coexist on that page. The hero's 52px-high primary link remains `#0176d3` with a 4px radius; the later Starter Suite action is also 52px high but uses `#066afe` and a 9999px pill radius. Both use white 16px/700 Salesforce Sans labels. The shared label treatment ties together visibly different controls. A purple Slack-tile hover adds another interactive color. Build from the relevant measured component rather than treating one blue and one radius as universal.

The product design system has its own evolution. Salesforce's December 2025 design article describes SLDS 2 as generally available with Winter ’26 and discusses conversational, personalized experiences. Its developer documentation says the new CSS framework separates structure from visual design using styling hooks. That product architecture is useful context; the marketing measurements below describe the public website. [Design article](https://www.salesforce.com/blog/experience-design-with-slds-2/) · [Developer comparison](https://developer.salesforce.com/docs/platform/lwc/guide/create-components-css-slds1-slds2.html).

#### Primary tasks

The captured page offers trial and demo links, pricing information, product destinations, named customer videos, industry solutions, learning links, and FAQ controls. The official developer documentation additionally explains how to customize Salesforce components through styling hooks; no signed-in CRM workflow was inspected.

### Brand Narrative

Salesforce's history page identifies Marc Benioff, Parker Harris, Frank Dominguez, and Dave Moellenhoff as the people building its first CRM in March 1999. It records the February 2000 launch around an anti-packaged-software message. The company story describes the subsequent cloud CRM platform, the 2006 community, Slack's 2021 acquisition, Data 360's 2022 launch under earlier names, Agentforce's 2024 launch, and the Agentic Enterprise framing in 2025. The detailed history names AppExchange for 2005; the current story retroactively calls that milestone AgentExchange. [History](https://www.salesforce.com/news/stories/the-history-of-salesforce/) · [Company story](https://www.salesforce.com/company/our-story/).

The company story credits IDC with first ranking Salesforce number one in CRM market share in 2012. It publishes five values: Trust, Customer Success, Innovation, Equality, and Sustainability, with Trust explicitly first. Its mission connects helping one another do their best with customer success and industry influence, and its business philosophy presents companies as a platform for social change. It includes employees, customers, and partners in its Trailblazer community and describes its 1-1-1 commitment as 1% each of equity, technology, and employee time. That section reports more than 18,000 companies joining Pledge 1%; its FAQ gives a higher lower bound, more than 20,000. Both are published participation thresholds rather than an exact count.

The marketing capture places that broad platform story into a concrete sequence of agentic presentation, product destinations, customer proof, industry choices, and learning. The design team's separate SLDS 2 writing concerns a customizable Lightning-platform system. Neither source establishes that a particular CTA radius, font, or blue shade was chosen to express a corporate value.

### Principles

The following implementation guidance is derived from the evidence, rather than presented as Salesforce's internal design principles:

1. **Pair the platform story with destinations.** The captured presentation leads into five named product tiles and separate trial/demo actions.
2. **Preserve typography roles.** The measured action labels use bold Salesforce Sans; display families and localized declarations are documented separately.
3. **Keep component variants intact.** The hero rectangle, pill, underlined contact link, and product tile have distinct measured states.
4. **Use styling hooks within their documented scope.** Salesforce's developer guide describes customization through CSS custom properties; it does not make the marketing and product surfaces interchangeable.
5. **Make values and definitions explicit in copy.** Trust and community are published company themes; a causal connection to specific visual metrics has not been established.

### Personas

No persona research was verified; the prior named fictional biographies are excluded and individually logged in the report.

## Colors

### Measured actions and reading colors

| Role | Value | Evidence and application |
|---|---|---|
| Current PBC primary | `#066afe` | Starter Suite pill link at rest; root `--sds-c-button-primary-color-background` and `--pbc-g-electric-blue-50` |
| Current primary hover/press | `#022ac0` | Same pill's measured background; finance industry link's rest ink |
| Hero primary | `#0176d3` | Rectangular hero trial link; also `--hgf-g-brand-default-color` |
| Hero hover / inline links | `#0b5cab` | Hero primary hover and press; surveyed inline pricing link |
| Navy | `#032d60` | Header contact link at rest; declared PBC display color |
| Deep navy | `#002c6e` | Two rendered text-color occurrences in the census; their heading roles were not captured |
| Foreground | `#181818` | Dominant paragraph ink: 23 paragraph occurrences; `--pbc-g-text-body-color` |
| Other inherited ink | `#080707` | Slack anchor's own inherited color and finance link on mouse press; not the dominant paragraph color |
| Canvas / on-primary | `#ffffff` | White backgrounds, visible Slack text, and primary-action labels |
| Cloud tint | `#eaf5fe` | Ten rendered backgrounds; hero secondary hover and press |
| Hairline | `#e5e5e5` | Rendered background and border census; neutral palette custom property |
| Industry-link hover | `#002775` | Measured finance link hover ink |
| Slack tile hover/press | `#7526e3` | Measured tile fill; `--hgf-g-purple-vibrant-40` also resolves to it |

The hero secondary's pressed border is `#001642`. Hero presses also expose a `#1b96ff` outline. Those are mouse-down observations, not keyboard-focus measurements.

### Available brand and semantic palettes

The live `--sds-g-color-palette-blue-*` properties expose twelve entries at levels 10, 15, 20, 30, 40, 50, 60, 65, 70, 80, 90, and 95: `#001639`, `#03234d`, `#032d60`, `#014486`, `#0b5cab`, `#0176d3`, `#1b96ff`, `#57a3fd`, `#78b0fd`, `#aacbff`, `#d8e6fe`, and `#eef4ff`. The previously cited Salesforce UX package distributes these values under `color-brand-base-*` and adds level 100, `#ffffff`, completing its 13-step ramp. This confirms palette availability, not exclusive use by every marketing action.

The live stylesheet also exposes error `#ea001e` through `--sds-g-color-error-base-contrast-1`, success `#2e844a` through `--sds-g-color-success-base-contrast-1`, and orange `#dd7a01` through `--sds-g-color-palette-orange-60`. The versioned package names the corresponding anchors `color-error-base-50`, `color-success-base-50`, and `color-warning-base-60`. These values are available palette evidence; no validation, confirmation, or warning UI was exercised. The header also has a green action, so blue is not the only action color on this page.

The package's neutral ramp includes `#181818`, `#2e2e2e`, `#444444`, `#747474`, `#c9c9c9`, `#e5e5e5`, `#f3f3f3`, and `#ffffff`. The current census separately confirms several of those neutrals. [Versioned Salesforce UX hooks](https://unpkg.com/@salesforce-ux/sds-styling-hooks@1.1.0-alpha.4/dist/hooks.raw.json).

## Typography

### Evidence classes

- **Official product use:** the opened Salesforce developer page establishes SLDS 2 and its styling-hook architecture, but does not identify the product's default typeface. The Help release-note page returned a CSS-error shell. No product-font assertion or product specimen is made from that page.
- **Live-loaded on this marketing surface:** `document.fonts` reports Salesforce Sans 400 normal, 400 italic, and 700 normal; ITC Avant Garde 500 and 100 normal; Seol Sans Heavy 750 normal; Avant Garde for Salesforce 600 normal; and Salesforce Icons 700 normal. The icon face is not a reading font. The heading declaration names ITC Avant Garde; the body and button declarations name Salesforce Sans.
- **Official distributed assets:** the census's readable `@font-face` rules point to WOFF2 and WOFF files under `https://a.sfdcstatic.com/shared/fonts/`. Salesforce Sans uses the `salesforce-sans/` directory; the display and regional faces use `avant-garde/`. The displayed family aliases ITC Avant Garde and Avant Garde for Salesforce both have readable rules referencing `AvantGardeForSalesforceW05-Dm`. This records the distribution and aliases, not a font license.
- **Declared-only faces:** readable rules also name M XiangHe Hei SC Bold 700, M XiangHe Hei TC Bold 700, Tazugane Info Heavy 750, and Handset Sans Thai Bold 700. They are absent from the loaded-face list and receive no specimen. The live `--sds-g-font-family` declaration and the Salesforce UX package name a system-ui stack; the package also names a Consolas/Menlo/Monaco/Courier monospace stack. These are declarations and package metadata, without proof that these stacks supplied rendered glyphs on this homepage or a signed-in product surface.
- **Unresolved:** the source rule for the loaded ITC Avant Garde 100 entry is not among the readable font-face rules. Exact glyph selection across the Korean and Latin text was not measured. The date when the brand adopted these fonts, font licensing, and the prior claim that Avant Garde never appears in CRM are unconfirmed. Substitute: none chosen.

Two stylesheets were unreadable to the CSSOM census; the report lists them. Family tokens contain only faces that the loaded-face census actually names. No substitute or declared-only regional face is included in them.

### Declared marketing scale

These are `--pbc-g-text-display-N-*` root values, not measured H1–H3 instances. Their font weights are not inferred.

| PBC display level | Size / line height | Tracking |
|---|---|---|
| 1 | 80px / 88px | -0.018em |
| 2 | 56px / 64px | -0.012em |
| 3 | 48px / 56px | -0.01em |
| 4 | 40px / 48px | -0.008em, equivalent to -0.32px at 40px |
| 5 | 32px / 40px | -0.004em |
| 6 | 24px / 32px | -0.004em, equivalent to -0.096px at 24px |
| 7 | 20px / 28px | -0.004em, equivalent to -0.08px at 20px |
| 8 | 16px / 24px | -0.004em |

Declared PBC body sizes are 20px, 18px, 16px, 14px, and 12px. Body and H1 family declarations are distinct, but this census did not capture a paragraph's size and line height. It does not re-establish the prior 16px/24px paragraph specification.

### Measured labels

Hero and pill actions use Salesforce Sans at 16px/700 with 24px line height. Hero tracking is normal; pill tracking is -0.032px. The finance industry link uses 14px/700, 20px line height, and -0.028px tracking. The header contact link uses 14px/400 and 20px line height, in an 18px-high inline box. The surveyed inline pricing link uses Salesforce Sans 18px/400 with a 28px line height. The Slack tile's visible heading is 24px/100 in the computed snapshot; its anchor has 16px/400 with a 24px line height. These roles must not be collapsed into a universal display weight of 400.

### Versioned product-foundation metadata

The previously cited `@salesforce-ux/sds-styling-hooks@1.1.0-alpha.4` still distributes a 1rem font-size base and a scale from 1.125rem to 3.247rem, with intermediate values 1.266, 1.424, 1.602, 1.802, 2.027, 2.281, 2.566, and 2.887rem. Its line-height choices include 1, 1.25, 1.375, 1.5, 1.75, and 2. This is a named, older package version; it is not asserted to be the current SLDS 2 release. [Versioned hooks](https://unpkg.com/@salesforce-ux/sds-styling-hooks@1.1.0-alpha.4/dist/hooks.raw.json) · [Package metadata](https://unpkg.com/@salesforce-ux/sds-styling-hooks@1.1.0-alpha.4/package.json).

## Layout

The desktop capture is 1440×1000. The hero trial/demo pair sits at x=836px and x=1045px, y=266px, leaving a 15.8px measured gap between their boxes. The product-tile row starts at x=73px and y=848px; its five 240px-wide tiles begin at x=73, 333, 593, 853, and 1113px, giving 20px horizontal gaps. Those are page-instance measurements, not a general grid contract.

The full-page capture shows the blue presentation and customer-video carousel before two alternating text/media sections, a platform illustration, a four-column industry-card layout, report cards, learning cards, events, a trial invitation, FAQs, and the footer. White reading sections and pale blue bands separate these areas. This preserves the prior distinction between large presentation areas and denser product browsing, without assigning an unmeasured container maximum.

The live root spacing scale `--sds-g-spacing-1…12` is 0.25rem, 0.5rem, 0.75rem, 1rem, 1.5rem, 2rem, 2.5rem, 3rem, 3.5rem, 4rem, 4.5rem, and 5rem. The complete rem scale is retained without assuming a measured root-font conversion. Numeric spacing entries use measured CTA padding and explicitly pixel-valued declarations: 8px, 12px, 16px, 24px, 32px, 48px, 64px, and 80px. The 12px value is declared button padding rather than the measured hero padding; 80px is a component-scoped `--space80` declaration. The same component-scoped family also declares 40px, 56px, and 72px. PBC declares a 1280px container maximum; this is not a measured page-wide maximum.

Observed radii are 0px for the contact link, 4px for the hero primary and finance text link, 6px for the hero secondary, 22px for video controls, 32px for product tiles, and 9999px for pills and carousel buttons. `--pbc--border-radius-16` declares 16px. The global hooks additionally expose 0.125rem, 0.25rem, 0.5rem, 1rem, and 100% radius options. Percent circles remain prose rather than numeric radius tokens.

### Responsive Behavior

Only desktop was captured. Breakpoints, mobile stacking, hamburger behavior, touch-specific padding, image crops, and reduced-motion layouts were not measured. The declared PBC container-padding values are 64px and a separately named mobile value of 48px; their minimum-spacing counterparts are 24px and 16px. These names do not establish the viewport widths at which they apply.

## Elevation & Depth

All six measured anchors have `box-shadow: none` at rest, hover, and mouse press. The Slack tile uses translucent fill and border rather than a box shadow. This is a statement about these controls; it is not a prohibition on shadows across the marketing site.

The live root exposes these current values:

| Hook | Raw computed value |
|---|---|
| `--sds-g-shadow-1` | `0 0 2px 0 #18181808, 0 2px 4px 1px #18181816` |
| `--sds-g-shadow-2` | `0 2px 8px -2px #18181808, 0 8px 12px -2px #18181816` |
| `--sds-g-shadow-3` | `0 12px 24px -4px #18181808, 0 16px 32px -4px #18181816` |
| `--sds-g-shadow-4` | `0 24px 48px -2px #18181820` |

The versioned Salesforce UX package retains a different four-level scale. Levels 1–3 respectively use `0 0 2px 0 #18181814, 0 2px 4px 1px #18181828`; `0 2px 8px -2px #18181814, 0 8px 12px -2px #18181828`; and `0 12px 24px -4px #18181814, 0 16px 32px -4px #18181828`. Its level 4 is `0 24px 48px -4px #18181833`. These older distributed values remain useful versioned context; the machine tokens use the current homepage hooks. No modal, popover, or composer usage is inferred from either scale.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.level-1`: `0 0 2px 0 #18181808, 0 2px 4px 1px #18181816`
- `shadow.level-2`: `0 2px 8px -2px #18181808, 0 8px 12px -2px #18181816`
- `shadow.level-3`: `0 12px 24px -4px #18181808, 0 16px 32px -4px #18181816`
- `shadow.level-4`: `0 24px 48px -2px #18181820`

## Motion & Easing

The hero pair's raw computed transition ends in `0.3s cubic-bezier(0.2, 1, 0.25, 1) 0s`; its property list includes color, background color, border color, text-decoration color, fill, stroke, opacity, box shadow, transform, filter, and backdrop filter. The Slack tile reports `border-color, transform, background-color 0.15s cubic-bezier(0.4, 0, 0.2, 1) 0s`. The pill and finance link report `color 0.1s linear 0s`. The contact link reports `all 0s ease 0s`. Full strings are copied verbatim into the verification Proof block.

These declarations accompany the settled pointer samples; the pill's reported color-only transition does not establish an animated background-color transition. Menu, modal, toast, page-reveal, carousel timing, and reduced-motion behavior were not measured. No duration or easing tokens are invented for them.

## Components

All six measured controls are links. Product controls were sampled by actual hover and mouse-down, with the consent overlay temporarily hidden for those pointer passes. Pressed here means mouse-down with pointer focus; keyboard focus is unmeasured. The card's visible white text is reported separately from its anchor's inherited near-black color.

| Control | Rest identity | Hover | Mouse press |
|---|---|---|---|
| Hero trial, “무료로 시작하기” | 193.2×52px; 4px radius; 8px 32px padding; 16px/700; `#0176d3` / `#ffffff`; 1px transparent border | Fill `#0b5cab` | Same fill; 2px white border; 4px solid `#1b96ff` outline, offset 0px; width 195.2px |
| Hero demo, “데모 보기” | 151.7×52px; 6px radius; 8px 32px padding; 16px/700; `#ffffff` / `#0176d3`; 1px blue border | Fill `#eaf5fe` | Same fill; 2px `#001642` border; same hero outline; width 153.7px |
| Header contact, “문의하기” | 48.5×18px; radius 0; padding 0; 14px/400; transparent on white; `#032d60`; underlined | Ink and underline color become `#0176d3` | Same as hover |
| Slack product tile | 240×176.4px; 32px radius; 19.2px padding; fill `rgba(255, 255, 255, 0.05)`; 2px `rgba(255, 255, 255, 0.1)` border; visible white heading 24px/100 | Fill `#7526e3` | Same fill; border white; 5px solid white outline, offset 0px |
| Starter Suite trial pill, “무료로 시작하기” | 188.9×52px; 9999px radius; 14px 32px padding; 16px/700; `#066afe` / `#ffffff`; border none | Fill `#022ac0` | Same fill; 3px solid `#066afe` outline, offset 2px |
| Finance industry, “자세히 알아보기” | 92.3×24px; 4px radius; padding 0; 14px/700; transparent on white; `#022ac0`; 2px transparent border and underline | Ink `#002775`; underline removed | Ink and border `#080707`; radius 9999px; 3px solid `#066afe` outline, offset 2px; underline absent |

The pill includes a decorative `::after` gradient/mask layer. Its measured hover delta is the background color; the probe reported no changed pseudo-element property. No transparency is normalized to a black component background.

### Surveyed geometry without component-state tokens

The video-testimonial controls have a 22px radius, 442px width, 286.6px height, inherited `#080707` ink, and Salesforce Sans 16px/400 in this survey. Their accessible labels identify POSCO, MUSINSA, Toss, and Pandora. The carousel's previous, pause, and next buttons are 48×48px, have a 9999px radius, white text, a 2px white border, and transparent fills; their font declaration is Salesforce Sans 16px/400. Their states were not sampled, so they remain geometry references rather than interactive component tokens. The survey exposes “Pause carousel”; it does not establish reduced-motion behavior.

The top-level navigation buttons declare Salesforce Sans 16px/700 and navy `#032d60`, with 36px-high boxes. The right-hand header action is a 44px-high green `#2e844a` pill with white ink. These controls were surveyed without a state pass; the measured header contact link in the table is a separate control. No search input appears in the survey.

### States

Hover and mouse-press results are the six control observations in §4. Every hover snapshot has `hover: true`; every press has `active: true` and pointer focus. Color changes, border changes, outline geometry, text decoration, and the finance link's radius change are recorded there. Keyboard focus is UNMEASURED: the actual Tab walk cycles through the consent banner's privacy link, settings link, and accept button. No focus component field is declared.

CSS declares disabled button background/border `#c9c9c9` and text `#ffffff`, but no disabled control was measured. Empty lists, empty dashboards, skeletons, validation errors, API errors, toasts, completed flows, warnings, and long-operation feedback were not observed. No such component-state patterns are supplied from those declarations.

## Do's and Don'ts

- Keep the hero's rectangular CTA pair distinct from the later PBC pill actions; use their measured colors, borders, padding, and radii together.
- Use Salesforce Sans 700 for the measured action labels. Preserve the separate loaded display families and the Korean display declaration rather than substituting a different font.
- Use `#181818` for the dominant paragraph-ink reference. Keep `#080707` where that value was actually measured.
- Preserve the dark product tile's translucent rest treatment, white visible text, and measured purple hover.
- Use the named palette and spacing declarations as available values, while distinguishing declarations from rendered component geometry.
- Do not apply the former “one blue for every interactive affordance” or “4px for every CTA” rules: both contradict this page.
- Do not turn a pointer-press outline into a keyboard-focus specification, or infer empty, error, loading, and success patterns from palette availability.
- Keep product styling-hook guidance separate from website component measurements. Salesforce's developer documentation recommends global styling hooks and explicitly distinguishes their support from component hooks.

## Voice & Tone

The opened company page uses the identity line “Salesforce. The #1 AI CRM.” and calls its community “Trailblazers.” Its explanatory copy defines the Agentic Enterprise before presenting the platform. Values copy explicitly ranks trust first. A source credit accompanies the company page's CRM market-share claim; that does not prove every superlative across the site has an analyst footnote. [Company story](https://www.salesforce.com/company/our-story/).

For a reference implementation, use the observed combination of short action labels, definitions for platform terminology, named customer examples, and explicit values copy. These are readings of the opened page's writing patterns, not a verified internal voice manual. No official list of forbidden tones was found.

## Agent Prompt Guide

### Quick color reference

Current pill: `#066afe` → `#022ac0`. Hero action: `#0176d3` → `#0b5cab`. Contact: `#032d60` → `#0176d3`. Industry link: `#022ac0` → `#002775`. Reading ink: `#181818`. White: `#ffffff`. Cloud tint: `#eaf5fe`. Slack hover: `#7526e3`.

### Component prompts grounded in the capture

- “Build a 52px-high Salesforce hero link with a 4px radius, 8px 32px padding, Salesforce Sans 16px/700, a `#0176d3` fill, white label, and a 1px transparent border. Hover changes the fill to `#0b5cab`. Pair it with the measured white demo link, whose radius is 6px and border is 1px blue.”
- “Build the captured Starter Suite trial link as a 52px-high pill, 14px 32px padding, Salesforce Sans 16px/700, `#066afe` fill and white text. Hover darkens it to `#022ac0`. Do not supply an unmeasured keyboard-focus state.”
- “Build the Slack product-tile link at 240×176.4px, 32px radius, 19.2px padding, a 5% white fill and a 10% white 2px border on the dark presentation. Keep the visible title and description white. Hover changes its fill to `#7526e3`.”

Match the intended region and control before reusing a value: the same trial wording identifies two differently styled links on this page.
