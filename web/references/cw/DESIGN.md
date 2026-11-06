---
name: CommonWealth Magazine
colors:
  primary: '#d60c18'
  action-blue: '#003a9f'
  outlined-action-hover: '#9d0505'
  action-layer: '#feebec'
  foreground: '#48545d'
  heading: '#171717'
  navigation: '#000000'
  surface: '#ffffff'
  divider: '#eeeeee'
typography:
  button:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 14px
    use: Header subscription link; live-loaded Noto Sans TC.
  navigation:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 16px
    use: Latest navigation link; live-loaded Noto Sans TC.
  promotion:
    fontSize: 18px
    fontWeight: 400
    lineHeight: 27px
    use: Bottom promotion subscription link; live-loaded Noto Sans TC.
  card-label:
    fontSize: 14px
    fontWeight: 400
    use: Measured story category label; headline metrics were not isolated.
rounded:
  none: 0px
components:
  header-subscribe:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#003a9f'
    border: '#003a9f'
    rounded: 0px
    height: 35.6px
    padding: 9.8px 14px
    typography: 14px / 400
    hover: 'Text and 1px border #9d0505; ::before #feebec opacity 0.04.'
    pressed: 'Text and border #9d0505; ::before #feebec opacity 0.16; ::after opacity 1 and matrix(0, 0, 0, 0, -71, -71).'
    focus: '::before #feebec opacity 0.12 under keyboard focus; returns to opacity 0 after blur.'
    use: 'Header 訂閱天下 link, #cookie-subNav_paymen; 102px wide with a 1px border on all sides. The background stays white. Focus has no drawn outline.'
  promo-subscribe:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#003a9f'
    rounded: 0px
    height: 47px
    padding: 10px 20px
    typography: 18px / 400
    hover: 'Text #d60c18 and 1px solid #d60c18 outline, offset 0px.'
    pressed: 'Text #d60c18 and 1px solid #d60c18 outline, offset 0px; same as hover.'
    use: 訂閱天下 link inside the blue bottom promotion; 102.3px wide. Its red outline is a pointer state; keyboard focus had no compared visual change.
  latest-nav:
    type: button
    textColor: '#000000'
    rounded: 0px
    height: 48px
    padding: 16px
    typography: 16px / 400
    hover: 'Text #d60c18.'
    pressed: 'Text #d60c18; same as hover.'
    use: 最新 navigation link; transparent on the white navigation surface, 118.9px wide. Keyboard focus had no compared visual change.
  story-card:
    type: card
    textColor: '#171717'
    border: '#eeeeee'
    rounded: 0px
    height: 193px
    padding: 0px
    hover: 'Descendant .article-card-title text #d60c18.'
    pressed: 'Descendant .article-card-title text #d60c18; paragraph and category colours remain unchanged.'
    use: 300px-wide story link to /article/5143594 on the white page; transparent background, 1px bottom divider only. fg is the visible headline, not the anchor's browser-default colour. Container font is 16px/400; headline font metrics were not isolated. Keyboard focus had no compared visual change.
  bookstore-link:
    type: button
    textColor: '#003a9f'
    rounded: 0px
    height: 14px
    padding: 0px
    typography: 14px / 400
    hover: 'Text #d60c18.'
    pressed: 'Text #d60c18; same as hover.'
    use: 網路書店 link in the header; transparent on white, 48.5px wide. Keyboard focus had no compared visual change.
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    sans: Noto Sans TC
    serif: Noto Serif TC
---

# Design System Inspiration of CommonWealth Magazine (天下雜誌)

## Overview

### Visual Theme & Atmosphere

CommonWealth is a Taiwanese news and economics publication founded in 1981. Its About page puts trust at the centre of its identity: “我們經營的是「信任」.” Paid digital reading launched in 2017, followed by an app combining magazine content and current news in 2018. The same page now publishes guidelines requiring human review of AI-assisted editorial work and disclosure of AI use. [Company](https://web.cw.com.tw/aboutus/index.html)

The measured homepage is the Traditional Chinese root edition (`www.cw.com.tw/`), with no regional redirect. A red masthead, red editorial labels, dark story titles and blue subscription actions frame a dense photographic news page. The first story row gives a large lead image substantially more space than the compact stories beside it. These are live homepage observations, rather than a published brand specification.

An official article on the magazine’s 2015 redesign described simpler design and reorganised columns, with QR codes connecting print to additional multimedia. [2015 redesign](https://www.cw.com.tw/article/5066259)

### Brand Narrative

The homepage combines a large lead story, smaller related stories, category labels and summaries. Red marks editorial emphasis; blue subscription links sit alongside it. This is the measured visual expression of the publication, without attributing a visual strategy to the company that it has not stated.

### Principles

For building from this reference: retain the distinction between headlines and paragraph ink, match each action to its own measured state treatment, and separate the editorial grid from third-party advertising. These are implementation conclusions from the capture, rather than an official design-principles list.

### Personas

No user research or personas were verified.

## Colors

These values come from rendered colours and measured controls. The homepage did not expose a first-party custom-property colour palette.

| Role | Measured value | Evidence and use |
|---|---|---|
| Editorial accent | `#d60c18` | Story category label; navigation, bookstore and story-title hover text |
| Action blue | `#003a9f` | Subscription text and header subscription border; bottom promotion background |
| Outlined action hover | `#9d0505` | Header “訂閱天下” text and border on hover and press |
| Action layer | `#feebec` | Header subscription `::before` and `::after` layer colour |
| Foreground | `#48545d` | Story summary paragraph; 57 of 59 coloured `<p>` elements in the census |
| Heading | `#171717` | Measured story’s `.article-card-title` at rest |
| Navigation | `#000000` | “最新” at rest |
| Surface | `#ffffff` | Header and both subscription links at rest |
| Divider | `#eeeeee` | Story link’s bottom border and header bottom border |

Overall text counts favour black, 153 elements, but the paragraph census favours `#48545d`. Preserve that distinction between navigation ink and reading ink. The pale action layer changes opacity; its alpha is not a second opaque surface colour.

## Typography

**Official product use:** no first-party prose font specification was verified in the opened company or design-writing pages.

**Live-loaded:** the homepage’s `document.fonts` census lists **Noto Sans TC**, normal, variable weight `100 900`, and **Noto Serif TC**, normal, `200 900`. Noto Sans TC is declared on the body and buttons. Noto Serif TC is loaded, but this capture does not isolate its assignment to a particular headline. Both are runtime faces, not substitutes.

The census records same-origin sources `/cf-fonts/v/noto-sans-tc/5.2.9/71/wght/normal.woff2` and `/cf-fonts/v/noto-serif-tc/5.2.10/1/wght/normal.woff2`. It also lists loaded `cw-regular` and `cw_icon_new`, each normal 400, served from `/fonts/cw2023/` and `/assets_new/fonts/cw/` respectively. Their presence does not establish them as paragraph families, so they are not offered as UI text specimens.

**Official distributed assets:** only runtime font URLs were recorded; no separate font distribution package or licence was verified.

**Declared-only:** `cw-light` and `cw-medium` each declare normal weight 400 and TTF/WOFF sources under `/fonts/cw2023/`; neither is in the loaded list. `swiper-icons` also has an unloaded inline font declaration and belongs to the carousel implementation. None receives a specimen.

**Unresolved:** headline-specific family, size and weight; font licensing and per-glyph fallback. **Substitute: none chosen.**

| Measured role | Size / weight | Line height |
|---|---|---|
| Header subscription and bookstore links | 14px / 400 | 14px |
| “最新” navigation | 16px / 400 | 16px |
| Bottom subscription link | 18px / 400 | 27px |
| Story category label | 14px / 400 | Not isolated |
| Story anchor container | 16px / 400 | 18.4px |

The anchor container’s metrics do not establish the headline’s metrics.

## Layout

At 1440 × 1000, the first editorial row spans x=113 to x=1313: a 1200px content span composed of an 860px lead link, a 40px gap and a 300px story column. In a later row, the left column contains a 560px feature and a 260px secondary story, again separated by 40px. These are measured positions at this viewport, not breakpoint rules.

The scoped CSS declaration `--column-gap: 1.125rem` belongs to `.layout`; it is not proof that every visible gutter uses that value. Navigation padding is 16px. The header action uses 9.8px vertical and 14px horizontal padding; the bottom action uses 10px and 20px.

### Responsive Behavior

Only desktop 1440 × 1000 was measured; no mobile layout or breakpoint behaviour was verified.

## Elevation & Depth

All five controls have computed `box-shadow: none`. Borders, text colour and pale pseudo-element layers provide their measured separation. The header is sticky at z-index 110; the promotion is sticky at 111 and the cookie notice fixed at 112. These are captured layer positions, not a complete elevation scale.

## Motion & Easing

The header subscription and bookstore links each report the raw computed transition `transform 0.3s ease 0s`. Their own settled transform remained `none`. The bottom subscription, navigation and story anchor each report `all 0s ease 0s`. These strings do not establish the pseudo-elements’ individual timing. No easing curve or general motion scale is inferred.

---

Sources: [live homepage](https://www.cw.com.tw/), captured 2026-11-06 through `probe_page`; [Company](https://web.cw.com.tw/aboutus/index.html); [2015 magazine redesign](https://www.cw.com.tw/article/5066259); [membership terms](https://event.cw.com.tw/salesforce/policy_member.html?v=221219); [privacy statement](https://member.cwg.tw/privacy-policy). Capture details, raw values, controls and limitations are in `verification.md` and `report.md`.

## Components

All five controls were measured at rest, pointer hover, pointer press and real Tab focus. The cookie notice remained open; the controls’ pointer states matched `:hover`, and their crops confirm the intended elements. No overlay-hiding option was used.

- **Header subscription link, “訂閱天下”.** `#cookie-subNav_paymen`, 102 × 35.6px, 0px radius, 9.8px 14px padding, 14px/400 Noto Sans TC. White fill, blue text and a 1px blue border. Hover switches text and border to `#9d0505`, with the pale `#feebec` layer at opacity 0.04. Press raises that layer to 0.16. Keyboard focus uses opacity 0.12 and restores zero after blur, with no drawn outline.
- **Bottom promotion subscription link, “訂閱天下”.** 102.3 × 47px, 0px radius, 10px 20px padding, 18px/400 Noto Sans TC. White fill and blue text on a blue promotion strip. Hover and press make the text `#d60c18` and draw a 1px solid outline of that colour, at 0px offset. This outline was not present under keyboard focus.
- **“最新” navigation link.** 118.9 × 48px, 16px padding, 0px radius, 16px/400 Noto Sans TC. Transparent on white, black at rest, red on hover and press.
- **Story link, `/article/5143594`.** 300 × 193px, 0px radius and padding, with a 1px bottom divider. The visible headline changes from `#171717` to `#d60c18` on hover and press; the category stays red and summary stays `#48545d`. Its transparent anchor has browser-default blue/red inherited colours, which are not brand tokens.
- **“網路書店” header link.** 48.5 × 14px, 0px padding and radius, 14px/400 Noto Sans TC. Transparent on white; blue text becomes red on hover and press.

No visible search input appeared among the survey’s 190 interactive rows. Input styles and states remain unmeasured.

### States

| Control | Hover | Pressed | Keyboard focus |
|---|---|---|---|
| Header subscription | Dark-red text/border; `::before` opacity 0.04 | Same text/border; `::before` 0.16; `::after` opacity 1, transform `matrix(0, 0, 0, 0, -71, -71)` | `::before` 0.12; restores 0 after blur |
| Bottom subscription | Red text and 1px red outline | Same as hover | No compared visual change, Tab 284 |
| Latest navigation | Red text | Same as hover | No compared visual change, Tab 7 |
| Story card | Headline red; paragraph and label unchanged | Same visible title change; wrapper browser-default colour also changes | No compared visual change, Tab 18 |
| Bookstore | Red text | Same as hover | No compared visual change, Tab 5 |

“No compared visual change” is limited to the probe’s computed-style/DOM scope: the control and its pseudos, descendants and their pseudos, and three ancestor levels and their pseudos. Descendant counts were 1, 1, 0, 13 and 1 respectively; the card included two image elements. The comparison covered colours, backgrounds, borders, drawn outlines, shadows, opacity, transforms, filters, visibility, size, decoration, background/mask positioning and image/SVG attributes. It does not establish absence of pixel-only, sibling, closed-shadow or cross-origin changes. No disabled or error state was measured.

## Do's and Don'ts

- Use the measured red for editorial labels and linked-title emphasis, and blue for resting subscription actions.
- Keep the measured controls square; use whitespace and fine dividers between stories.
- Preserve the grey paragraph foreground alongside darker headlines.
- Keep the header action’s darker red distinct from the editorial red.
- Reproduce the header’s focus layer only for that measured control; do not generalise it to every link.
- Keep unloaded faces, browser-default anchor colours and framework colours out of brand specimens and palettes.

## Voice & Tone

The company’s reporting principles call for a mild, rational attitude and accessible writing without showing off technical terminology. These are stated editorial principles. [Company](https://web.cw.com.tw/aboutus/index.html)

## Agent Prompt Guide

“Build a Traditional Chinese editorial homepage with a white surface, a large lead photograph and a compact story column. At the measured desktop width, use an 860px lead, 40px gutter and 300px sidebar. Use Noto Sans TC for the measured navigation and action labels; keep story summaries `#48545d`, story titles `#171717` and editorial labels `#d60c18`. Create the square 35.6px header subscription link with blue text and border, darker-red hover text and border, and its measured pale focus layer.”

Noto Serif TC is a verified loaded face, but no headline specimen is specified from an unmeasured role assignment. Substitute: none chosen.
