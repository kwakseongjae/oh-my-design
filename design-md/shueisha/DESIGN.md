---
name: Shueisha
colors:
  primary: '#3399bb'
  accent: '#00bbff'
  foreground: '#000000'
  heading: '#202020'
  canvas: '#ffffff'
  surface: '#f7f7f7'
  surface-muted: '#eeeeee'
  muted: '#888888'
  divider: '#cfd8dd'
typography:
  action:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 19.6px
    use: Pickup archive link; live-loaded Noto Sans JP
  navigation:
    fontSize: 18px
    fontWeight: 700
    lineHeight: 25.2px
    use: Header company navigation link; live-loaded Noto Sans JP
  body:
    fontSize: 16px
    fontWeight: 400
    use: News archive link and book-search input; live-loaded Noto Sans JP
  card-title:
    fontSize: 16px
    fontWeight: 700
    use: Pickup card anchor and inherited title weight; live-loaded Noto Sans JP
rounded:
  none: 0px
components:
  pickup-all:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#202020'
    border: '1px solid #202020'
    rounded: 0px
    height: 51.6px
    padding: 15px 50px
    typography: 14px / 400
    hover: 'Label #ffffff; #202020 ::before expands from scaleX(0) to scaleX(1); the 40px ::after rule turns #ffffff. The link''s own background becomes transparent.'
    pressed: 'Same settled appearance as hover: label #ffffff, expanded #202020 ::before and white rule.'
    use: 'Link: 集英社 ピックアップ一覧を見る, to /pickup/. White outlined action on the white content area; its dark hover fill is a pseudo-element.'
  news-all:
    type: button
    backgroundColor: '#eeeeee'
    textColor: '#3399bb'
    rounded: 0px
    height: 47.2px
    padding: 14px
    typography: 16px / 400
    hover: 'Text-decoration becomes underline solid #3399bb.'
    pressed: 'Text-decoration becomes underline solid #3399bb; no additional delta from hover.'
    use: 'Link: ニュース一覧を見る, to /news/. Full-width archive action below the news rows; measured width 820.6px.'
  company-nav:
    type: button
    textColor: '#202020'
    rounded: 0px
    height: 67.2px
    padding: 18px 10px 21px
    typography: 18px / 700
    hover: 'Label becomes #3399bb and the bottom border becomes 3px solid #3399bb.'
    pressed: 'Label #3399bb and bottom border 3px solid #3399bb; no additional delta from hover.'
    use: 'Header navigation link: 企業情報. This variant uses the measured restParked pointer baseline, transparent over the white header. The initial page-top variant has #ffffff text over #202020.'
  pickup-card:
    type: card
    textColor: '#000000'
    rounded: 0px
    height: 282.7px
    padding: 0px
    typography: 16px / 700
    hover: 'Image opacity 1 to 0.7; image transform none to matrix(1.1, 0, 0, 1.1, 0, 0); title underlined in #000000; image-wrapper ::after gains a 1px inset #3399bb frame.'
    pressed: 'Same image opacity 0.7, scale 1.1, title underline and 1px inset #3399bb frame as hover.'
    use: 'Link to /pickup/36103/, the Jump SQ. article dated 2026.10.15. Transparent over #ffffff; measured width 264px. The date is #3399bb at 16px / 400.'
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    sans: Noto Sans JP
---

# Design System Inspiration of Shueisha

## Overview

### Visual Theme & Atmosphere

Shueisha is a Tokyo publisher established in 1926. Its own history describes an origin in entertainment publishing; its current company message spans manga, literature, fashion and journalism, alongside digital publishing, rights, events, merchandise and overseas business. The corporate website works as a route into that catalogue. [Company profile](https://www.shueisha.co.jp/company/information/), [history](https://www.shueisha.co.jp/history/), [company message](https://www.shueisha.co.jp/company/topmessage/).

The distinctive visual is the publication mosaic: manga characters, magazine covers, book jackets and service marks sit together in a wide, irregular tile arrangement. The measured homepage places it below a dark header, then switches to white editorial sections, fine rules, cyan dates and square archive actions. This has a first-party explanation: the 2021 site-launch article describes a colourful tiled visual spanning manga, fashion, journalism and literature, and makes short routes to content a central purpose of the site. [Site-launch article](https://www.shueisha.co.jp/pickup/327/), [live homepage](https://www.shueisha.co.jp/).

The current anniversary layer adds a second expression. Shueisha's 2026 centenary guide uses “01∞”: creating one from zero, then expanding it without limit. The “1” evokes a page turning from the lower right. Its four programme themes are 広げる, 生み出す, 対話する and 継ぐ—expanding, creating, dialogue and passing work onward. Treat this as the documented anniversary identity; the source does not establish a replacement corporate identity. [Centenary guide](https://www.shueisha.co.jp/100th-guide/).

### Brand Narrative

The history distinguishes a first magazine issued under the Shueisha name in 1925 from the company's establishment in 1926. It records reorganisation as 株式会社集英社 in 1949. That publishing lineage continues in the current company message: the business has diversified, while publications remain its source. The centenary guide carries the story into digital, screen, merchandise, games, audio and overseas distribution. [History](https://www.shueisha.co.jp/history/), [company message](https://www.shueisha.co.jp/company/topmessage/), [centenary guide](https://www.shueisha.co.jp/100th-guide/).

### Principles

Shueisha's company message explicitly names its corporate motto, “創意・自信・協調”—originality, confidence and cooperation. The centenary guide describes connecting talent with society and extending the ways works reach people. These are company commitments that supply context for the publication-led website; no opened source presents them as a formal UI rulebook. [Company message](https://www.shueisha.co.jp/company/topmessage/), [centenary guide](https://www.shueisha.co.jp/100th-guide/).

### Personas

The site-launch guide distinguishes general visitors asking about purchases or fan letters from business visitors asking about licensing or interviews; no demographic personas were verified. [Site-launch article](https://www.shueisha.co.jp/pickup/327/).

## Colors

These are roles assigned to observed homepage values, rather than names from a published Shueisha token manual.

| Role | Value | Observed use |
|---|---|---|
| Primary interface accent | `#3399bb` | Company-nav hover text and bottom border; Pickup dates and hover frame; News archive label |
| Bright accent | `#00bbff` | Active news-category bottom border in the survey |
| Foreground | `#000000` | Pickup title and book-search ink; one of the two equally frequent paragraph colours |
| Heading / dark action | `#202020` | Archive-action text and border, its dark fill layer, and the parked white-header nav text |
| Canvas | `#ffffff` | Pickup background and resting archive action; reversed label colour |
| Surface | `#f7f7f7` | Surface behind the book-search input and magazine filter |
| Muted surface | `#eeeeee` | News archive action background |
| Muted label | `#888888` | Inactive magazine filter |
| Divider | `#cfd8dd` | News-row bottom borders in the survey |

The paragraph census is tied: `rgb(51, 153, 187)` and `rgb(0, 0, 0)` each occur 237 times; `rgb(32, 32, 32)` occurs four times. Dates and titles have different ink, so the cyan count does not establish a body-text default. The foreground role above follows the measured black content title and search ink.

Only three first-party custom-property names were found among the declared properties: `--bgcolor`, `--gap` and `--left`. `--bgcolor` was computed as `#000000` while its first stylesheet declaration was `#FFF`; keep that runtime/declaration distinction. The first grid declarations are `--gap: 0px` and `--left: 0`. Their ownership is corroborated by the deployed theme's visual stylesheet. WordPress presets and block-navigation properties are excluded from the palette. [Live homepage](https://www.shueisha.co.jp/), [visual stylesheet](https://www.shueisha.co.jp/wp-content/themes/shueisha/shared/css/script.css?ver=1.0).

## Typography

The font evidence classes are separate:

- **Official product-use statement:** no opened brand or company writing names an official product typeface.
- **Live-loaded:** the homepage font census reports **Noto Sans JP 400 normal** and **Noto Sans JP 700 normal**. Body, h1 and button computed-family declarations are `"Noto Sans JP", sans-serif`. The homepage includes a Google Fonts stylesheet requesting those two weights. This is the evidence for the family token.
- **Official distributed font assets:** none verified. No font binary or redistribution licence was inspected.
- **Declared-only:** **Source Serif Pro** appears in the site's stylesheet for the Q/A markers, and the homepage requests its Google Fonts stylesheet with `text=QA`. It is absent from the loaded-face census. It receives no family token or specimen. [Deployed stylesheet](https://www.shueisha.co.jp/wp-content/themes/shueisha/shared/css/base.css?ver=1.0).
- **Unresolved:** the census could not walk the two cross-origin Google Fonts stylesheets; it records no `@font-face` sources. The exact delivered font files and per-script glyph coverage were not captured.

Substitute: none chosen.

| Element | Measured size / weight | Measured line height |
|---|---|---|
| Pickup archive action | 14px / 400 | 19.6px |
| Company navigation | 18px / 700 | 25.2px |
| News archive action | 16px / 400 | 19.2px |
| Book-search input | 16px / 400 | `normal` |
| Magazine filter | 16px / 400 | 16px |
| Pickup card anchor | 16px / 700 | 16px on the anchor; its child title has separate styling |
| Pickup date child | 16px / 400 | Not captured as a separate child line-height metric |

The deployed CSS declares `.hdg-lv2` at 24px / 700, with a desktop declaration of 28px and a line-height of 1.6. These are stylesheet declarations, outside the measured-control type table. [Common CSS](https://www.shueisha.co.jp/wp-content/themes/shueisha/shared/css/common.css?ver=1.0), [base CSS](https://www.shueisha.co.jp/wp-content/themes/shueisha/shared/css/base.css?ver=1.0), [live homepage](https://www.shueisha.co.jp/).

## Layout

The desktop page moves through a wide publication mosaic, an important-notices strip, the Pickup carousel, a New Releases region with category filters and book search, paired recruitment/company image links, news and press-release rows, an official-sites directory, and a dark footer. Pickup cards combine an image, date and multiline title; archive actions sit below their sections.

The news area pairs a narrower heading/calendar column with a wider list column. The official-sites area groups routes by manga, reporting/fashion magazines, books and online stores or other web services. These arrangements are visible in the captured full-page image and supported by the homepage links. [Live homepage](https://www.shueisha.co.jp/).

### Responsive Behavior

Only the 1440 × 1000 desktop viewport was probed; mobile layouts and responsive transitions were not measured.

## Elevation & Depth

The selected controls have no box shadow on the control itself at rest. The Pickup image wrapper gains `rgb(51, 153, 187) 0px 0px 0px 1px inset` on hover and press. This is an inset frame, without a raised-card shadow. [Live homepage](https://www.shueisha.co.jp/).

## Motion & Easing

The raw computed transitions on the Pickup archive link and Pickup card are `all 0.3s ease 0s`. The company-nav link reports `opacity 0.3s ease 0s`. The News archive link, book-search input and magazine filter report `all 0s ease 0s`. These are element transition declarations; they do not establish a timing system for every animated layer.

The measured action expands a collapsed fill layer; the measured card combines image scaling with reduced opacity. The anniversary intro's video timing, reduced-motion response and animation interruption were not measured. [Live homepage](https://www.shueisha.co.jp/).

## Components

All six selected controls have a measured 0px radius. Dimensions below belong to the captured desktop layout.

| Control | Dimensions | Padding | Rest appearance |
|---|---|---|---|
| Pickup archive link, 集英社 ピックアップ一覧を見る | 335 × 51.6px | 15px 50px | `#ffffff` fill; `#202020` label and 1px border; 14px / 400 |
| News archive link, ニュース一覧を見る | 820.6 × 47.2px | 14px | `#eeeeee` fill; `#3399bb` label; no border; 16px / 400 |
| Header navigation link, 企業情報 | 92 × 67.2px | 18px 10px 21px | Transparent; initially `#ffffff` text over `#202020`; parked pointer baseline `#202020` text over white; 18px / 700 |
| Book-search input, 本をさがす | 190 × 50px | 15px 40px 15px 0px | Transparent over `#f7f7f7`; `#000000` ink; no border; 16px / 400 |
| First Pickup article link, /pickup/36103/ | 264 × 282.7px | 0px | Transparent over `#ffffff`; `#000000` title at 16px / 700; `#3399bb` date at 16px / 400; no anchor border |
| Magazine filter link, 雑誌 | 82 × 52px | 10px 25px 24px | Transparent over `#f7f7f7`; `#888888` label; transparent 2px bottom border; 16px / 400 |

The outlined archive action contains a 40 × 1px horizontal rule at its left edge. Its dark fill is an initially collapsed `::before` layer, rather than a second solid button background. The card's hover frame belongs to its image wrapper. These details matter when recreating the measured states in §14.

The search input and magazine filter remain descriptive observations: neither supplied an authored state change for the component registry. The survey also records a separate PAGE TOP link at 60 × 60px with a 50% radius; the square-control rule does not extend to that circle. [Live homepage](https://www.shueisha.co.jp/).

### States

All listed hover and pressed passes were measured with `:hover` true; pressed also had `:active` true. Focus used a real Tab walk and `:focus-visible` was true for each selected control.

| Control | Hover | Pressed | Keyboard focus |
|---|---|---|---|
| Pickup archive action | Own background becomes transparent; dark `::before` transform changes from `matrix(0, 0, 0, 1, 0, 0)` to `matrix(1, 0, 0, 1, 0, 0)`; label and 40px rule become white | Same settled changes; no extra delta from hover | Browser `auto` ring only |
| News archive action | Adds `underline solid rgb(51, 153, 187)` | Same; no extra delta | Browser `auto` ring only |
| Company nav, white-header pointer baseline | Label changes from dark to cyan; bottom border changes from transparent to 3px cyan | Same; no extra delta | Browser `auto` ring only |
| Book-search input | No computed/DOM change in the compared scope | No change in that scope | No change in that scope |
| First Pickup card | Image opacity 1 → 0.7; image transform `none` → `matrix(1.1, 0, 0, 1.1, 0, 0)`; image-wrapper `::after` gains the 1px inset cyan frame; title gains a black underline | Same four changes; no extra delta | No change in the compared scope |
| Inactive magazine filter | No computed/DOM change in the compared scope | No change in that scope | Browser `auto` ring only |

The browser ring was `rgb(0, 95, 204) auto 1px off 1px` and is omitted from the tokens. No focus change persisted after blur. No disabled state was exercised.

“No change” is limited to the probe's comparison: the control and its pseudo-elements, all captured descendants and their pseudo-elements, and three ancestor levels. It includes computed visual properties and image/SVG attributes. The card comparison covered six descendants and one image; the input had no descendants; the magazine filter had one. Canvas/video pixels, external sprite internals, sibling changes, closed shadow roots and cross-origin frames are outside that scope. [Live homepage](https://www.shueisha.co.jp/).

## Do's and Don'ts

For a reproduction of the measured surface:

- Keep colourful publication artwork in the mosaic and card images; use the measured neutral surfaces and cyan accents for the surrounding interface.
- Keep the selected archive actions and cards square, and preserve the action's thin left-hand rule.
- Recreate the card's image scale, image opacity, inset frame and title underline together.
- Use the loaded Noto Sans JP weights when reproducing the measured text.
- Do not turn the browser's `auto` outline into a Shueisha focus token.
- Do not promote WordPress's stock colours, gradients, spacing or shadows into this reference.
- Do not present Source Serif Pro as a loaded homepage face.

These are directions derived from the captured implementation, rather than quoted corporate design rules.

## Voice & Tone

The site-launch article frames discovery through the short sequence “見たい知りたい買いたい！”—want to see, know and buy. The captured controls use concrete destinations such as ニュース一覧を見る and 本をさがす. Use direct task labels for navigation and an editorial invitation for article introductions. [Site-launch article](https://www.shueisha.co.jp/pickup/327/), [live homepage](https://www.shueisha.co.jp/).

## Agent Prompt Guide

- “Create the measured Pickup archive link: 335 × 51.6px, square, white fill, a 1px dark border, 14px / 400 Noto Sans JP, and 15px 50px padding. Keep the short horizontal rule at the left. On hover, expand the dark fill layer and reverse the label and rule to white.”
- “Create the measured Pickup article card on a white surface: 264px wide, image above a cyan date and black bold title. On hover, scale only the image to 1.1, set its opacity to 0.7, add a 1px inset cyan frame and underline the title. Use the exact palette in §2.”

## Governance

### Known Gaps

- **Contrast, `news-all`.** Text `#3399bb` on `#eeeeee` measures 2.82:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
