---
name: DJI
colors:
  black: '#000000'
  canvas: '#ffffff'
  foreground: '#ffffff'
  accent: '#0070d5'
  accent-hover: '#2490e3'
  accent-pressed: '#0058b0'
  focus-shadow: '#1890ff'
  focus-outline: '#ff0000'
  image-backing: '#ededed'
  cinema-backing: '#3b63a9'
  footer: '#272727'
  input-border: '#6c7073'
typography:
  card-heading:
    fontSize: 32px
    fontWeight: 500
    use: Filmmaking card's visible headline
  card-base:
    fontSize: 16px
    fontWeight: 400
    use: Filmmaking card anchor base; not a paragraph measurement
  navigation:
    fontSize: 14px
    fontWeight: 400
    use: Header category and store links
  action-label:
    fontSize: 14px
    fontWeight: 400
    use: Visible child labels of both Osmo Pocket 4P hero actions
  caption:
    fontSize: 12px
    fontWeight: 400
    use: Footer navigation and legal links
rounded:
  none: 0px
  field-leading: 4px
  carousel-edge: 8px
  hero-action: 64px
  store-action: 1408px
spacing:
  product-grid-vertical: 16
  action-inline: 16
  field-leading: 12
components:
  button-store:
    type: button
    backgroundColor: '#0070d5'
    textColor: '#ffffff'
    rounded: 1408px
    height: 32px
    padding: 8px 16px 8px 34px
    typography: 14px / 400
    hover: 'bg #2490e3'
    pressed: 'bg #0058b0'
    focus: 'outline 2px dotted #ff0000, offset 1px; box-shadow 0px 0px 0px 3px #1890ff'
    use: 스토어 — header link to the store. A blue pill with a shop icon; keyboard focus adds both the dotted outline and shadow.
  button-navigation:
    type: button
    textColor: '#ffffff'
    rounded: 0px
    height: 64px
    padding: 0px
    typography: 14px / 400
    hover: fg rgba(255, 255, 255, 0.65)
    pressed: fg rgba(255, 255, 255, 0.65)
    use: 카메라 드론 — category link, transparent over the photographic hero. Keyboard focus is the browser auto outline; no brand focus token.
  card-filmmaking:
    type: card
    backgroundColor: '#3b63a9'
    textColor: '#ffffff'
    rounded: 0px
    height: 512px
    padding: 0px
    typography: 32px / 500
    hover: descendant img transform matrix(1.1, 0, 0, 1.1, 0, 0)
    pressed: descendant img remains at matrix(1.1, 0, 0, 1.1, 0, 0); visible label stays white
    use: 동영상 제작 — 389px-wide link to professional filmmaking. The image covers the blue backing; font records the visible headline, while the anchor base is 16px/400. Focus has only a browser auto outline after persistent image loading is excluded.
fonts:
  roles:
    sans: Open Sans
---

# Design System Inspiration of DJI

## Overview

### Visual Theme & Atmosphere

DJI makes flying and camera-stabilization systems for creators and professional users. Its [company page](https://www.dji.com/company) describes an approach built around “form follows function”: making complex technology easier to use. Its [developer history](https://viewpoints.dji.com/blog/dji-developers-share-the-secret-of-our-success) traces that approach from flight controllers to integrated consumer drones. The current homepage extends the product presentation across camera drones, pocket cameras, microphones and a robot-vacuum category.

The measured homepage is the Korean edition (`www.dji.com/kr/`, HTML `lang="ko"`). A large product photograph carries the opening view, with centered product identification, a short slogan and two outlined actions. A white DJI wordmark sits at the header's left, followed by product navigation; search, account, region and store controls occupy the right. White navigation overlays the image; a blue store pill provides a distinct commerce action. Below it, pale photographic product panels lead to three tall application cards and a dark footer. This is a restrained hardware presentation, with photographic detail doing most of the visual work. These are observations of the current homepage, rather than a claim about an official brand manual.

The distinctive combination is compact interface type beside expansive hardware imagery: 14px navigation, 32px card headlines, and an 800px-high opening image region at the captured desktop viewport. Both square image cards and pill actions belong to this surface.

#### Primary tasks

- Follow a product's learn-more or purchase link.
- Open the camera-drone comparison route.
- Browse filmmaking, enterprise or agriculture categories.
- Find support, a dealer or flight-safety information.

### Brand Narrative

DJI's [company account](https://www.dji.com/company) places its headquarters in Shenzhen and its beginnings in a small office in 2006. Its [developer history](https://viewpoints.dji.com/blog/dji-developers-share-the-secret-of-our-success) names then-student Frank Wang and describes the ready-built XP flight controller as a way to make remote-controlled flight more approachable. In that account, DJI presents the progression through multirotor designs and stabilized cameras as helping define the consumer-drone category. This is a useful origin for the reference: emphasize access to a capability through the product itself.

The company's stated users extend beyond consumer photography to filmmaking, agriculture, conservation, search and rescue, and energy infrastructure. The measured homepage makes that breadth visible through product categories and application cards, while retaining an image-led presentation. No opened first-party source established a current rebrand, an X-Factor layout standard or an official color named Titan.

### Principles

The company explicitly connects function and design on its company page. Applied to the measured homepage, the following are implementation guidance derived from the evidence:

1. Make the hardware legible at a large scale; preserve a clear product image and short route onward.
2. Separate the image presentation from the compact interface hierarchy: 14px navigation, white hero labels and a distinct blue store action.
3. Preserve measured differences between states and between control types. The store's authored focus treatment, category link's browser outline and card's image scaling are different behaviors.

### Personas

No verified individual personas were found; the company page identifies creators and professional users across the industries listed in §11.

## Colors

These values come from the rendered census and measured controls, not the legacy palette approximations. The census found no custom properties on `:root` or in readable rules. Three linked DJI stylesheets fetched separately also contained no custom-property declarations; two other cross-origin sheets remain outside that inspection.

| Role | Value | Observed use |
|---|---|---|
| Black | `#000000` | Text census, 8 elements; retained as a neutral reference color |
| Canvas | `#ffffff` | 8 background elements |
| Foreground | `#ffffff` | 9 paragraph elements; visible labels on dark imagery |
| Accent | `#0070d5` | Header store fill and the app-banner link |
| Accent hover | `#2490e3` | Store link on pointer hover |
| Accent pressed | `#0058b0` | Store link during pointer press |
| Focus shadow | `#1890ff` | Store link's 3px keyboard-focus shadow |
| Focus outline | `#ff0000` | Store link's 2px dotted keyboard-focus outline |
| Image backing | `#ededed` | 13 census backgrounds, including the hero's image-backed container |
| Filmmaking-card backing | `#3b63a9` | Three application-card backgrounds; covered by imagery after loading |
| Footer | `#272727` | Background behind the footer subscription field |
| Input border | `#6c7073` | Footer field's top, bottom and left 1px borders |

Alpha colors remain alpha colors: category-link hover and press use `rgba(255, 255, 255, 0.65)`. Other census text includes white at 85% and black at 85%, 65% and 45%. The paragraph census is white ×9, black at 65% ×1, and white at 65% ×1; it does not establish a universal light-page paragraph color. No semantic success, error or warning palette was verified.

## Typography

### Evidence classes

| Class | Evidence |
|---|---|
| Official product use | No opened company statement identifies a specific typeface as the product face. |
| Live-loaded | The census lists Open Sans 300 normal, 400 normal, 400 italic, 500 normal and 600 normal. It is the only text family promoted to `tokens.typography.family`. |
| Official distributed asset declarations | DJI's [base stylesheet](https://www-cdn.djiits.com/assets/styles/build/v3.base.min-573c73fa0700df2dca9bc979c4dbb03e.css) declares `Dji` Light 300, Book 400 and Demi 500, with URLs on DJI's CDN. These were not reported loaded and receive no specimen. |
| Declared-only | Body: `"Open Sans", Dotum, "Apple SD Gothic Neo"`. H1: `"Open Sans", "PingFang SC", "Microsoft YaHei", "Helvetica Neue", "Hiragino Sans GB", "WenQuanYi Micro Hei", Arial, sans-serif`. The first button declares Arial. These stacks do not prove which fallback rendered any particular Korean glyph. |
| Unresolved | The wordmark's font, an official display-face assignment, a monospace role and font licensing were not established. |

Open Sans and FontAwesome declarations name WOFF2 first, followed by EOT, WOFF, TTF and SVG sources on `www-cdn.djiits.com`; the fetched CSS establishes those URLs, not the actual network format selected. FontAwesome 400 normal is also loaded and is excluded from text typography because it supplies icons. Font files were not downloaded. Substitute: none chosen.

### Measured type

| Element | Size / weight | Additional detail |
|---|---|---|
| Header store and category links | 14px / 400 | Open Sans; 14px line-height; −0.28px tracking |
| Hero action anchor | 16px / 400 | Its visible `.text` child is 14px / 400 |
| Filmmaking card anchor | 16px / 400 | Visible headline is 32px / 500 |
| Footer links | 12px / 400 | Open Sans; survey line-height 24px |
| Footer email input | 14px / 400 | Declared generic family; no named font token |

The survey also finds 14px / 300 carousel-navigation labels. Light UI weights therefore belong to the observed surface. The large product lettering in the screenshot is not used to infer a display typeface or font size.

## Layout

At 1440×1000, the page's content width is 1425px after the scrollbar. The opening image link spans 1425×800px. The first product-panel row starts at y=864px: two 688.5px-wide panels, with 16px outer margins and a 16.5px measured horizontal gap. Their next row starts 712px later, leaving 16px between the 696px-high panels.

The application-card row uses three 389×512px links, beginning at x=113, 518 and 924px. This gives a roughly 1200px content span and 16–17px gutters. Keep image-led panels spacious, and use the smaller navigation and action labels to provide a clear route through them. The captured page contains lazy-loaded blank regions, so their apparent empty height is not a spacing prescription.

The survey's 48×96px edge carousel controls have computed radius `0px 8px 8px 0px`. That preserves an observed 8px corner treatment without applying it to the square product panels.

The footer uses a multi-column link grid. Its small 12px / 400 links and subscription field sit on a dark surface, keeping service and company routes separate from the large product panels above.

### Responsive Behavior

Only the 1440×1000 desktop viewport was rendered. The opened homepage CSS includes `max-width:1230px`, `max-width:1300px` and `max-height:900px` queries; the 1230px rule sets product-panel widths to 591px. This is stylesheet evidence, not a rendered tablet or mobile layout. Mobile breakpoints, touch targets and sticky purchase bars were not verified.

## Elevation & Depth

The measured store action, hero actions, category link and filmmaking card have no resting box shadow. The card's hover feedback enlarges the photograph within its frame. The store's focus shadow is an interaction indicator, not card elevation.

The newsletter wrapper is a fixed layer at z-index 10002, with a full-viewport mask; the first states screenshot shows its dialog and a blue mailbox illustration above a blurred page. The fixed-element list also includes support controls at z-index 10000. These are observations of these layers, not a general modal elevation scale.

## Motion & Easing

The raw computed transition is `background-color 0.3s ease 0s` on the store link and `all 0.3s ease 0s` on the category link and both hero-action anchors. The filmmaking card and footer field report `all 0s ease 0s` on the control itself.

The filmmaking image scales to 1.1 on hover and during press. The probe records a longest transition of 600ms for that card's compared subtree; the opened homepage stylesheet declares `.grid-img{transition:all .6s ease}`. The 600ms value belongs to the image behavior, rather than the card anchor. No computed cubic-bezier curve, reveal schedule, spring prohibition or reduced-motion behavior was verified for these controls.

## Components

### Header store action

`a.normal-btn.dui-btn`, labeled “스토어”, is an 85.5×32px link. Its background is `#0070d5`, text `#ffffff`, border none, computed radius 1408px and padding `8px 16px 8px 34px`. The large radius produces a pill. The extra leading padding accommodates the shop icon. Rest shadow and outline are none.

Hover changes only the background to `#2490e3`; press changes it to `#0058b0`. Keyboard focus adds `rgb(255, 0, 0) dotted 2px off 1px` plus `rgb(24, 144, 255) 0px 0px 0px 3px`. Both disappear after blur. This is an authored indication, distinct from the browser's automatic outline on the category link.

### Category navigation

“카메라 드론” is a 62.5×64px link with a transparent background over the hero, white text, zero radius and zero padding. Hover and press change the label to white at 65% alpha. Keyboard focus draws `rgb(0, 95, 204) auto 1px off 1px`; that browser ring is documented without a brand token.

### Hero action pair

The Osmo Pocket 4P purchase and learn-more links share a 32px height, 64px computed radius, `5px 16px` padding, transparent fill and 1px white border. Widths are 132.3px and 120.2px respectively. Their visible labels are white and 14px / 400, even though the anchors' own computed color is browser blue. All three interaction states are UNMEASURED: the carousel made the slide non-interactive before the pointer pass, and the Tab walk did not reach it. Keep their verified rest geometry; do not infer disabled styling or declare interactive tokens for them.

### Filmmaking card

“동영상 제작” is a 389×512px link with square corners, zero anchor padding and no border or shadow. Its backing is `#3b63a9`, covered by a photograph once the image loads. The headline and visible descriptive labels are white; the headline is 32px / 500. Hover scales the image to `matrix(1.1, 0, 0, 1.1, 0, 0)` and press retains that scale. The visible text stays white during press. The anchor's inherited blue-to-red active color is not a visible label treatment. Keyboard focus leaves only a browser auto outline once persistent lazy-loading changes are excluded.

### Footer subscription field

The field labeled by placeholder “이메일 주소” is 189×32px: transparent over `#272727`, white text, radius `4px 0px 0px 4px`, padding `4px 0px 4px 12px`, 14px / 400. Its top, bottom and left borders are 1px `#6c7073`; the right border is absent beside the submit control. Hover, press and keyboard focus showed no style change within the probe's comparison scope. It is retained here as a measured observation and omitted from component tokens. No form was submitted.

### States

| Control | Hover | Pressed | Keyboard focus |
|---|---|---|---|
| Store link | Fill becomes `#2490e3` | Fill becomes `#0058b0` | Red dotted 2px outline, 1px offset; blue 3px shadow |
| Camera-drone category link | White label becomes 65% alpha | Same 65% alpha | Browser auto outline only |
| Filmmaking card | Image scale 1.1 | Same image scale; visible labels remain white | Browser auto outline; image loading persists after blur and is excluded |
| Hero purchase / learn-more links | UNMEASURED | UNMEASURED | UNMEASURED |
| Footer email field | No change in compared scope | No change in compared scope | No change in compared scope |

The no-change scope covers self, its pseudo-elements and three ancestor levels with their pseudo-elements; the field has no descendants. The tool compares computed styling and DOM attributes, rather than pixels. Empty, loading, validation, stock and order-confirmation treatments were not verified.

## Do's and Don'ts

- Keep the large photographic product presentation, compact navigation and short action labels seen on the homepage.
- Use the measured blue fill for the header store action, and preserve its separate hover, press and keyboard-focus treatments.
- Preserve the distinction between square image cards and pill actions.
- Read visible child-label colors when recreating an image link; its anchor can retain browser defaults.
- Keep unloaded DJI font assets as metadata without a specimen. Substitute: none chosen.

## Voice & Tone

The captured homepage pairs product identification with compact slogans: “Just Fly.” appears with DJI Lito Series and “See More. Tell More.” with Osmo Pocket 4P. Korean actions use “더 알아보기” and “지금 구매하기”. Application cards name filmmaking, enterprise solutions and agriculture before a short descriptive line. For this surface, lead with the product or task, keep the slogan brief, and keep the action explicit. These are observed copy patterns, not an official list of prohibited words.

## Agent Prompt Guide

“Build a DJI homepage-style product presentation with a large hardware photograph, centered short copy and a compact pair of white outlined pill links. For the measured desktop hero actions, use 32px height, 64px radius, `5px 16px` padding and 14px / 400 visible labels. Preserve their rest appearance without inventing their unmeasured states.”

“Add the measured header store link: 32px high, `#0070d5` with white text, `8px 16px 8px 34px` padding and a pill radius. Hover uses `#2490e3`, press `#0058b0`, and keyboard focus adds the red dotted outline and blue 3px shadow described in §4.”

“Use a square 389×512px application card with a photograph, a white 32px / 500 headline, and an image that scales to 1.1 on hover. Keep the card's own frame and shadow unchanged.”

These prompts reproduce the measured homepage elements. They do not define unseen store, checkout or specification components.
