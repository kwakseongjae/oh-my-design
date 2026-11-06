---
name: Toyo Keizai Online
colors:
  primary: '#0f9cc4'
  membership: '#f56f15'
  heading: '#222222'
  muted: '#707070'
  slate: '#6c7883'
  surface: '#ffffff'
  canvas: '#f5f5f5'
  line: '#c1c1c1'
typography:
  heading:
    fontSize: 20px
    fontWeight: 600
    use: Measured lead article title link; 26px line height, three lines in this capture.
  header-action:
    fontSize: 12px
    fontWeight: 600
    use: Header membership link and login button; 12px line height.
  navigation:
    fontSize: 13px
    fontWeight: 400
    use: Business navigation link; 19.5px line height and 2.08px letter spacing.
  list-action:
    fontSize: 15px
    fontWeight: 300
    use: Latest-articles link; 22.5px line height.
rounded:
  none: 0px
  control: 6px
components:
  paid-register:
    type: button
    backgroundColor: '#f56f15'
    textColor: '#ffffff'
    border: '1px solid #f56f15'
    rounded: 6px
    height: 34px
    padding: 7px 0px
    typography: 12px / 600
    hover: 'bg #ffffff; fg #f56f15; border remains 1px solid #f56f15'
    pressed: 'bg #ffffff; fg #f56f15; border remains 1px solid #f56f15; no further change from hover'
    use: 有料会員登録 — a header link to paid membership, 109px wide. Hover and held press invert fill and label.
  login:
    type: button
    textColor: '#6c7883'
    border: '1px solid #6c7883'
    rounded: 6px
    height: 34px
    padding: 7px 0px
    typography: 12px / 600
    hover: 'fg #0f9cc4; border 1px solid #0f9cc4'
    pressed: 'fg #0f9cc4; border 1px solid #0f9cc4; no further change from hover'
    use: 'ログイン — the 109px-wide product header button. Its own background is transparent over the white #ffffff header. The authentication dialog was not opened.'
  nav-business:
    type: button
    textColor: '#ffffff'
    rounded: 0px
    height: 43px
    padding: 0px 10px
    typography: 13px / 400
    hover: 'text-decoration underline solid #ffffff'
    pressed: 'text-decoration underline solid #ffffff; no further change from hover'
    use: 'ビジネス — a navigation link, 80.3px wide. Its own background is transparent over the #6c7883 navigation bar.'
  search-toggle:
    type: button
    rounded: 0px
    height: 18px
    padding: 0px
    hover: '::before opacity 0 to 1; 38px by 38px circular #f5f5f5 background'
    pressed: '::before opacity 0 to 1; same as hover'
    use: 'Search trigger, an 18px-wide button containing an external SVG image with alt 検索. Its own background is transparent over the white #ffffff header. External SVG ink is unresolved; the button''s computed text color is not an icon-color token.'
  lead-story:
    type: card
    textColor: '#222222'
    rounded: 0px
    height: 78px
    padding: 0px
    typography: 20px / 600
    hover: 'text-decoration underline solid #222222'
    pressed: 'text-decoration underline solid #222222; no further change from hover'
    use: 'Link forming the title of the lead editorial card, /articles/-/963815?display=b. Transparent over #f5f5f5. The measured title is 467px wide and three lines high; 78px is this content''s height, not a fixed card-height rule.'
  latest-more:
    type: button
    backgroundColor: '#6c7883'
    textColor: '#ffffff'
    border: '1px solid #6c7883'
    rounded: 50px
    height: 50px
    padding: 0px
    typography: 15px / 300
    hover: 'bg #ffffff; fg #222222; border 1px solid #c1c1c1; ::after background-image changes'
    pressed: 'bg #ffffff; fg #222222; border 1px solid #c1c1c1; ::after background-image changes; no further change from hover'
    use: 最新記事一覧を見る — a link to the latest-articles list, 270px wide. Computed 50px radius makes this 50px-high control a pill. Hover also switches the arrow's external background-image reference.
omitted:
  - section: spacing
    reason: No verified values in current evidence.
---

# Design System Inspiration of Toyo Keizai Online

## Overview

### Visual Theme & Atmosphere

Toyo Keizai Online is the Japanese business-news service of Toyo Keizai Inc. The publisher dates its founding to November 15, 1895, and its history records the online service's launch in June 2003. The product describes its purpose as helping people make better choices through economics, business and a diversity of perspectives. [Company](https://corp.toyokeizai.net/aboutus/outline/), [history](https://corp.toyokeizai.net/aboutus/history/), [product introduction](https://toyokeizai.net/sp/about-service/).

The April 15, 2026 renewal introduced the tagline **「ふれるたび、視点がふえる」** and refreshed the logo and symbol. The announcement connects the symbol to the initial **T** and a **T-junction**, expressing a partner in making choices. It also describes customizable navigation and expanded topic-following, making discovery part of the product's current evolution. [Official renewal announcement](https://toyokeizai.net/articles/-/941409).

The measured homepage expresses this through a dense editorial layout: charcoal headlines, cyan topic links, a slate navigation band, pale grey canvas and white utility panels. Orange distinguishes paid membership from the restrained surrounding controls. The upper header is compact; a larger lead story and a ranked sidebar provide separate entry points into the news. These are observations of the [live homepage](https://toyokeizai.net/), not a published set of brand principles.

#### Primary tasks

- Browse recommended and latest articles, topics and rankings.
- Reach paid membership or login from the header.
- Use the search trigger; the search form itself was not opened or measured.

### Brand Narrative

The publisher's history connects the online service to a publishing company founded in 1895. Its June 2003 launch extended business news onto the web. The current product introduction emphasizes both information readers seek and encounters with things they did not yet know. Together these sources support a reference built around editorial discovery and informed choice. [History](https://corp.toyokeizai.net/aboutus/history/), [product introduction](https://toyokeizai.net/sp/about-service/).

### Principles

The following are implementation readings of the evidence, not a company-issued design-principles list:

- **Make discovery legible:** distinguish editorial recommendations, topics and rankings, as seen on the homepage.
- **Give paid membership a specific signal:** preserve its orange action treatment.
- **Use restrained interaction changes:** underlines, label/border changes, fill inversion and a small opacity reveal are measured behaviours.

### Personas

The official product introduction describes a service for people making choices around economics and business, and offers member and team plans; no researched persona profiles or audience demographics were verified.

## Colors

These descriptive names map measured values to the captured homepage. They are not official CSS variable names: the survey found no root custom properties, and its declared-property walk could not read the four CDN stylesheets.

| Role | Value | Evidence and use |
|---|---|---|
| Primary interaction accent | `#0f9cc4` | Login label and border on hover/held press; topic-link ink in the survey. |
| Membership | `#f56f15` | Paid-membership link fill and border at rest; its label on hover/held press. |
| Heading | `#222222` | Lead article title at rest and in its underline state. |
| Muted rendered text | `#707070` | Most frequent rendered text colour in the census, 152 elements; not established as paragraph ink. |
| Slate | `#6c7883` | Login border/label, lower navigation backdrop and latest-articles action fill. |
| Surface | `#ffffff` | Header surface and primary-action label; membership and latest-articles hover fill. |
| Canvas | `#f5f5f5` | Computed backdrop behind the lead story; also the search halo's fill. |
| Line | `#c1c1c1` | Latest-articles action border on hover/held press; 28 rendered borders in the survey. |

The census recorded 1,711 elements. Its `paragraphInk` array is empty, so a body-paragraph `foreground` role is not assigned. Transparent controls retain their measured backdrop context instead of receiving a fabricated fill.

## Typography

### Evidence classes

- **Official product use:** no opened first-party page identifies a named product typeface. The renewal announcement discusses the logo's expression without naming its font.
- **Live-loaded:** the survey's loaded-face list is empty. No family is promoted into a machine typography token or a specimen.
- **Official distributed assets:** no font asset or font licence was verified. Both retrieved desktop stylesheets contain no `@font-face` rule.
- **Declared-only:** body and buttons declare `"Hiragino Sans", Meiryo, sans-serif`; individual control records report `Hiragino Sans`. This is CSS declaration/computed-family evidence, not proof of which installed face rendered each script. The survey has no `h1` family value.
- **Unresolved:** actual font selection for Latin, Kana and Han; platform variation; official font licensing. **Substitute: none chosen.**

### Measured type metrics

| Element | Size / weight | Line height | Letter spacing |
|---|---|---|---|
| Lead article title link | 20px / 600 | 26px | 0.1px |
| Membership link | 12px / 600 | 12px | 0.1px |
| Login button | 12px / 600 | 12px | `normal` |
| Business navigation link | 13px / 400 | 19.5px | 2.08px |
| Latest-articles action link | 15px / 300 | 22.5px | 0.1px |

The survey also records regular article-title links at 16px / 600. Preserve the observed hierarchy between the lead, ordinary article titles and utility controls. No paragraph-size rule was established.

## Layout

At the measured 1440 × 1000 desktop viewport, the header's content extends from x=120 to x=1320. The linked desktop stylesheet declares a 1200px-wide `.g-header-upper`, centered with `margin:0 auto`. The upper and lower header rows are visually distinct: white above and slate below. The lower navigation link starts at y=72 and is 43px high.

The lead title occupies 467px of width; the adjacent article title sampled in the survey occupies 236px. A separate right column carries the ranking panel. The desktop stylesheet declares `.top-pickup` as two equal grid columns with a 20px gap; ordinary `.m-article` uses `1fr 200px` columns with an 8px by 16px gap. These grid declarations describe those selectors, not a universal spacing scale. [Desktop shared CSS](https://tk.ismcdn.jp/resources/tko/css/pc/shared.css?rd=202611060901), [homepage CSS](https://tk.ismcdn.jp/resources/tko/css/pc/top.css?rd=202611060901).

### Responsive Behavior

Only a 1440 × 1000 desktop viewport was measured; mobile layout and breakpoint behaviour remain unmeasured.

## Elevation & Depth

The sampled controls and their three compared ancestor levels have no box shadow. White panels separate utilities from the pale-grey page; thin borders, underlines and colour inversions do most of the interactive work. The search halo changes opacity without moving or scaling the icon's layout box. No modal-elevation system was measured.

## Motion & Easing

The membership and login controls report background-colour and colour transitions of **0.5s**, using **ease**. The latest-articles action reports background-colour, border-colour and colour transitions of **0.3s**, also using **ease**. Business and lead-title links report `all 0s ease 0s` on the control itself.

The search button itself also reports `all 0s ease 0s`; its halo is a separate pseudo-element. The linked shared stylesheet declares `transition:opacity .3s` on `.g-header-icon:before`, and the state probe records that pseudo-element's opacity change after settling. Raw computed transition strings and settling times are retained in the verification notes. Reduced-motion behaviour was not measured.

## Components

All six controls below had genuine hover and held-pointer measurements. The state viewport and selected state crops were opened to check identity. Membership, login, navigation and article links also have real keyboard-focus measurements; the same is true of the search and latest-articles controls.

| Control | Measured identity | Hover and held press |
|---|---|---|
| **有料会員登録** | Header link; 109 × 34px; 6px radius; 7px 0px padding; orange fill and border, white 12px / 600 label. | Fill becomes white; label becomes orange; border retains orange. |
| **ログイン** | Header button; 109 × 34px; 6px radius; 7px 0px padding; transparent over white; slate 1px border and 12px / 600 label. | Label and border become cyan. |
| **ビジネス** | Navigation link; 80.3 × 43px; square; 0px 10px padding; white 13px / 400 label over slate. | White underline appears. |
| **Search trigger** | 18 × 18px button; square; zero padding; external SVG image with alt `検索`, transparent over white. | A 38 × 38px pale-grey `::before` circle changes opacity from 0 to 1. The button's own fill does not change. |
| **Lead editorial card title** | Link to `/articles/-/963815?display=b`; 467 × 78px; square; zero padding; charcoal 20px / 600 type over the pale-grey canvas. | Charcoal underline appears. The height describes the captured three-line title. |
| **最新記事一覧を見る** | Action link; 270 × 50px; computed 50px radius; zero padding; slate fill/border and white 15px / 300 label. | White fill, charcoal label, grey line border; `::after` background-image reference switches. |

All sampled controls had `box-shadow: none`. Rounded corners are role-specific: 6px for the header action pair, square text links and a pill for the large list action. The search halo is larger than the button's measured layout box. The external icon's internal paint was not inspected; the button's computed text colour is not used as an icon-colour token.

### States

Every sampled control matched `:hover` during hover and `:active` during the held-pointer pass. All pressed snapshots matched their corresponding hover snapshot: no extra pressed change was observed. Keyboard Tab reached search at stop 11, membership at 14, login at 15, business at 16, the lead story at 31 and latest articles at 52.

All six focus snapshots report no computed change with `:focus-visible` true and `outline-style: none`. The comparison covers the control, its pseudo-elements, descendants and three ancestor levels with pseudo-elements; search includes one image descendant, while the other five have no descendants. No focus token is authored from these observations. Canvas/video pixels, sibling nodes, external SVG internals and cross-origin iframe contents are outside that comparison. Disabled states were not measured.

## Do's and Don'ts

- Keep the compact orange membership action distinct from the slate outlined login control.
- Use underlines for the measured navigation and editorial title interactions.
- Keep 6px header corners separate from the large pill-shaped article-list action.
- Preserve the difference between a transparent control and the surface behind it.
- Do not turn declared font names into verified font specimens, or infer paragraph typography from article headlines.
- Do not interpret the larger search halo as a measured 38px button target.

## Voice & Tone

The product introduction frames the service around helping people make better choices, with economics and business as its axis. The tagline promises additional perspectives with each encounter. The measured interface labels are direct task names: paid membership, login, business and view the latest articles. [Product introduction](https://toyokeizai.net/sp/about-service/).

## Agent Prompt Guide

“Build an editorial news homepage with a pale-grey canvas, white header and utility panels, charcoal headlines, cyan topic links and a slate secondary navigation band. Use a 109 × 34px orange membership link and a matching outlined login button, both with 6px corners and 12px / 600 labels. On hover, invert the membership fill/label and turn the login label/border cyan. Underline article-title and category links. Make the larger latest-articles action 270 × 50px with a pill shape and a fill inversion. Keep font-family selection unresolved until the product face is verified.”

This guide combines captured interface observations; it is not a quotation from the company.

## Governance

### Known Gaps

- **Contrast, `paid-register`.** Text `#ffffff` on `#f56f15` measures 2.93:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
