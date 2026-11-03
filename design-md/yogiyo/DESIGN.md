---
name: Yogiyo
colors:
  primary: '#fa0050'
  canvas: '#ffffff'
  surface: '#fafafa'
  footer-surface: '#fbfbfb'
  heading: '#333333'
  input-foreground: '#555555'
  footer-foreground: '#818181'
  border: '#d9d9d9'
  search-action: '#ff8a00'
  login-border: '#ea7266'
  on-primary: '#ffffff'
typography:
  control:
    fontSize: 14px
    fontWeight: 400
    use: Address field and search action on the measured Korean web homepage; declared family only, no loaded face established
  header-action:
    fontSize: 18px
    fontWeight: 400
    use: 로그인 button
  category:
    fontSize: 15.4px
    fontWeight: 700
    use: Visible div.category-title inside the 치킨 category link; the anchor itself is 14px/400
  footer:
    fontSize: 12px
    fontWeight: 400
    use: 회사소개 footer navigation link
rounded:
  none: 0px
  header-action: 2px
  address-control: 4px
spacing:
  control-x: 12
  control-y: 6
  header-action-y: 7
  footer-link-x: 20
components:
  category-tile:
    type: card
    backgroundColor: '#ffffff'
    textColor: '#333333'
    border: '1px solid #d9d9d9'
    rounded: 0px
    height: 220px
    padding: 0px
    typography: 15.4px / 700
    hover: 'Anchor computed color #337ab7 → #23527c; visible category title stays #333333'
    pressed: 'Anchor computed color #23527c; visible category title stays #333333'
    use: 치킨 category link, 242.5px wide at a 1440px viewport; font and fg describe its visible child label. The 14px/400 anchor and image inherit framework link colors; those are not the visible title color. Browser auto outline is not a focus token.
---

# Design System Inspiration of Yogiyo (요기요)

## Overview

### Visual Theme & Atmosphere

Yogiyo is a Korean food delivery platform connecting hungry customers with nearby restaurants. Its own history dates the launch to August 2012. The company's service page also presents Yomart for immediate grocery and household shopping, extending the product beyond prepared meals. [Company history](https://www.wesang.com/newsroom?nid=173), [services](https://www.wesang.com/service).

The identity combines **K-POP Red, white and black**. Yogiyo's account of its logo explains the distinctive Hangul curves as a smiling mouth expressing enjoyment of food; it connects the red to the energy of music. The earlier move from an English wordmark to rounded Hangul followed customer research. These are documented brand choices, and give the food imagery a recognisable Korean signature. [Official BI](https://www.wesang.com/service#ci_bi), [logo history](https://www.wesang.com/mobile/newsroom/?nid=165).

The current evolution extends the 2024 app work on clearer categories and AI recommendations. A June 2026 announcement describes a further app redesign around continuous discovery, larger promotional banners, personalised benefits, and restaurant lists that expose representative menu photos and prices through horizontal browsing. These are documented app developments; the web measurements below describe the publicly rendered homepage. [2024 design writing](https://www.wesang.com/newsroom/insight?nid=479), [2026 redesign](https://www.wesang.com/newsroom/press?nid=639).

The measured homepage is the Korean web surface (`yogiyo.co.kr/mobile/#/`), with HTML `lang="ko"`, at 1440×1000. It places a full-width red-pink header (`#fa0050`) over a food-photo hero, an address search with an orange action, and a four-column grid of square white category links. Food photography remains prominent, while the measured cards use thin borders and no shadow. [Live homepage](https://www.yogiyo.co.kr).

#### Primary tasks

- Search for a delivery address using a building name, road name or lot address.
- Enter a food category, including 치킨, 피자/양식, 한식, 일식/돈까스 and 1인분 주문.
- Reach the trust and review information labelled 안심센터 and 클린리뷰 in the footer.
- Put menu items into a cart, compare choices and place orders; the company documents its integrated cart in a July 2026 announcement. [Cart feature](https://www.wesang.com/newsroom/press?nid=644).
- Follow order and delivery progress, described in the company's 2024 home redesign article. [2024 design writing](https://www.wesang.com/newsroom/insight?nid=479).

The first three entry points were visible on the captured homepage. Cart and order-progress capabilities are documented app context; no order was placed.

### Brand Narrative

The company's history places Yogiyo's first appearance in August 2012. Its logo account traces a move from a red-and-yellow food symbol to a Hangul wordmark, then to the smiling identity and music-inspired K-POP Red. The Hangul change followed a 2018 survey in which the sampled customers preferred Korean lettering and rounded forms. This supports the familiar, welcoming reading of the logo without prescribing rounded geometry for every interface component. [History](https://www.wesang.com/newsroom?nid=173), [logo account](https://www.wesang.com/mobile/newsroom/?nid=165).

The product story then moves toward easier discovery: the 2024 design article describes a clearer home, more direct access to familiar stores and AI recommendations based on ordering patterns. The June 2026 announcement continues that direction with more immediate visibility of benefits and menu information. [2024 article](https://www.wesang.com/newsroom/insight?nid=479), [2026 announcement](https://www.wesang.com/newsroom/press?nid=639).

In July 2026 the company announced an integrated cart for retaining and comparing menus from different stores, with order amounts, benefits and ordering methods available for comparison. This develops the documented discovery story without supplying unmeasured cart geometry. [Integrated cart](https://www.wesang.com/newsroom/press?nid=644).

### Principles

For builders, the supported patterns are a recognisable Korean identity, food imagery as the main category cue, and direct discovery entry points. The company explicitly describes reducing exploration friction in its 2026 app redesign. These observations support making categories and useful information easy to find; they do not establish a formal company design-principles document. [Logo history](https://www.wesang.com/mobile/newsroom/?nid=165), [redesign goals](https://www.wesang.com/newsroom/press?nid=639).

### Personas

No user-research-backed personas were verified.

## Colors

The homepage exposes **zero computed root custom properties and zero declared custom properties** in the survey. The following values are computed observations, rather than an official token vocabulary.

| Role in this capture | Value | Evidence |
|---|---|---|
| Primary brand surface | `#fa0050` | Login background; rendered background census ×3; also the page's theme-color |
| Canvas / category card / address field | `#ffffff` | Rendered backgrounds ×18; individual control reads |
| Category-grid surface | `#fafafa` | Category card's third ancestor, `.category-list` |
| Footer navigation surface | `#fbfbfb` | Company link's `.footer-menu` ancestor |
| Paragraph-census maximum | `#d9d9d9` | Most frequent color among text-bearing nodes in or below paragraphs, ×6; not a universal body-text role |
| Category heading | `#333333` | Visible `.category-title` child in all measured states |
| Address input foreground | `#555555` | Input computed color; placeholder color was not separately measured |
| Footer navigation foreground | `#818181` | Company link; also paragraph ink ×4 |
| Category / footer border | `#d9d9d9` | Category border and footer ancestor border |
| Search action | `#ff8a00` | 검색 button background; no warning meaning was established |
| Login border | `#ea7266` | 1px solid border on 로그인 |
| On primary | `#ffffff` | Login and search button text |

The paragraph census also contains `#4d4d4d` once. Its distribution is therefore mixed. The recorder counts text-bearing descendants as well as paragraphs, so a separator or inline label can contribute to it; no universal body foreground token is established. The anchor underlying the category label has framework-style link colors `#337ab7` at rest and `#23527c` in the measured interactive states; the visible category title stays `#333333`. Neither blue is presented as a Yogiyo brand color.

## Typography

### Font evidence classes

- **Official product use:** no opened first-party page identifies a named interface font for this web product. The logo history describes rounded lettering, without identifying a reusable font family.
- **Live-loaded faces:** the survey's `document.fonts` loaded list is empty. No downloadable text face is established by this capture.
- **Official distributed font assets:** none was established from the opened pages. The BI page links a logo archive, which was not downloaded; it is not evidence of a distributed font.
- **Declared-only:** body, h1 and button declare `맑은고딕, "malgun gothic", 돋움, Dotum, "Apple SD Gothic Neo", Helvetica, sans-serif`. These names are CSS declarations, not confirmed rendered faces. A `Glyphicons Halflings` font-face rule points to relative WOFF2, WOFF and TTF files; no face is loaded, and it is not promoted to a text family.
- **Unresolved:** the prior reference's Pretendard product-use claim has no confirmation in the opened sources or this census. No specimen is supplied for it or any declared-only face. **Substitute: none chosen.**

### Measured hierarchy

| Element | Size | Weight | Line height |
|---|---|---|---|
| Header 로그인 | 18px | 400 | 25.7143px |
| Address input and 검색 | 14px | 400 | 20px |
| Visible 치킨 category title | 15.4px | 700 | Not separately recorded |
| Category anchor beneath the title | 14px | 400 | 20px |
| 회사소개 footer link | 12px | 400 | 17.1429px |

Keep these metrics separate from font-family availability. Tabular numeral settings, price typography and restaurant-list typography were not verified.

## Layout

At the measured desktop width, food categories occupy four columns. Survey boxes run from x=213 to about x=1212.5, a span of about 1000px; successive rows begin at y=323, 553 and 783. With 220px-high cards, that gives a 10px vertical gap. The visible hierarchy is red header, photographic address hero, category grid, then legal and support information.

Use the measured control spacing directly: 6px vertical and 12px horizontal padding on the address controls; 7px vertical padding on login; 20px horizontal padding on the footer link. The observed corner values are 0, 2 and 4px, including the complementary left-only and right-only rounding of the joined search field and action. No general spacing base or pill scale was established.

### Responsive Behavior

Only the 1440×1000 desktop viewport was measured; no responsive breakpoint, mobile reflow or touch-target policy was verified.

## Elevation & Depth

The measured category card, search action, login, location button and footer link have `box-shadow: none`. The address input reports `rgba(0, 0, 0, 0) 0px 0px 0px 0px inset`, which supplies no visible elevation. Preserve the card's thin border and flat image treatment; no multi-level shadow system was verified.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.category-card`: `none`

## Motion & Easing

The raw computed transition strings are `all 0s ease 0s` on search, login, location and the company link; `border 0.2s ease-in-out 0s` on the category link; and `border-color, box-shadow 0.15s, 0.15s ease-in-out, ease-in-out 0s, 0s` on the address input. The category border did not change during the sampled states, and neither did the input's compared border or shadow. These declarations do not establish cart animations, page transitions, skeleton motion or a reduced-motion policy.

## Components

All six controls were identified on the Korean web homepage. Geometry is the control's computed box, and the title-child distinction matters for the card.

| Control | Box and corners | Padding | Rest paint | Type |
|---|---|---|---|---|
| 검색 | 60×40px; radius `0px 4px 4px 0px` | 6px 12px | `#ff8a00` / `#ffffff`; no border, no shadow | 14px / 400 |
| 로그인 | 150×40px; radius 2px | 7px 0px | `#fa0050` / `#ffffff`; 1px `#ea7266` border; no shadow | 18px / 400 |
| Location icon button | 40×40px; radius 4px | 6px 12px | `#ffffff` / computed `#333333`; no border, no shadow | 14px / 400; no text label |
| Address search input | 280×40px; radius `4px 0px 0px 4px` | 6px 12px | `#ffffff` / `#555555`; no border | 14px / 400 |
| 치킨 category link | 242.5×220px; radius 0px | 0px on anchor | `#ffffff`; 1px `#d9d9d9` border; no shadow | Anchor 14px / 400; visible title 15.4px / 700, `#333333` |
| 회사소개 footer link | 81.5×17.1px; radius 0px | 0px 20px | Transparent over `#fbfbfb`; `#818181` label; no border or shadow | 12px / 400 |

The category card is an anchor with a 218×218px food image and a separate dark title. Its inherited blue changes are recorded in §14, without recoloring the title. The other controls remain prose observations: the buttons and footer link show only the browser's focus ring, and the input shows no compared style change. No disabled state was exercised.

### States

“No change” below is bounded by the probe's computed-style and DOM-attribute comparison: self and pseudo-elements, descendants and their pseudo-elements, and three ancestor levels. Hover matched `:hover` for every resolved control. No difference listed below persisted after blur in the keyboard-focus comparisons.

| Control | Hover | Pressed | Keyboard focus |
|---|---|---|---|
| 검색 | No compared change | Browser `auto` outline only | Same browser outline |
| 로그인 | No compared change | Browser `auto` outline only; fill remains `#fa0050` | Same browser outline |
| Location icon button | No compared change | Browser `auto` outline only | Same browser outline |
| Address input | No compared change | No compared change | No compared change |
| 치킨 category link | Anchor and image inherited color `#337ab7` → `#23527c`; title stays `#333333` | Same color changes plus browser `auto` outline | Same color changes, anchor `underline solid rgb(35, 82, 124)`, plus browser `auto` outline; title stays `#333333` |
| 회사소개 | No compared change | Browser `auto` outline only | Same browser outline |

The outline is computed as `rgb(0, 95, 204) auto 5px off -2px`; it is the browser's ring, not a brand focus token. The repeated card capture shows the dark title unchanged, including its own `text-decoration: none`. Backgrounds, borders, radii, shadows and image source strings do not change in these recorded passes. Canvas, video, inaccessible frame contents and pixels outside the compared DOM scope are not tested by this statement.

## Do's and Don'ts

These are implementation directions derived from the measured web surface.

### Do

- Use the strong red-pink header, white category cards and large food photography together.
- Keep category boxes square, thin-bordered and flat at this desktop layout.
- Preserve the joined search field's small outer corners and the orange search action.
- Use the actual category title color and weight when recreating the card.

### Don't

- Turn the underlying anchor's blue computed color into the visible category-title color.
- Treat the search orange as a verified warning semantic.
- Generalise the desktop card geometry into undocumented mobile-app components.

## Voice & Tone

The official service copy connects food with everyday enjoyment, while the logo story links its smile to that idea. The captured product entry points use short Korean labels: `검색`, `로그인`, `치킨`, and `1인분 주문`. The address hint is explicit: `건물명, 도로명, 지번으로 검색하세요.` Footer labels include `안심센터` and `클린리뷰`, alongside `24시간, 연중무휴` support information. [Services](https://www.wesang.com/service), [logo story](https://www.wesang.com/mobile/newsroom/?nid=165), [homepage](https://www.yogiyo.co.kr).

## Agent Prompt Guide

- “Recreate the measured Yogiyo 치킨 category link as a 242.5×220px white card with square corners, a 1px `#d9d9d9` border and no shadow. Keep its visible title `#333333`, 15.4px/700, separate from the anchor's inherited link color. Use the food-image composition shown in the capture; no font substitute is chosen.”
- “Build the captured address-search group: a white 280×40px input with `#555555` computed text, 14px/400 metrics and 6px 12px padding, joined to a 60×40px `#ff8a00` 검색 action with white text. Round only the outer corners by 4px. Put the separate white 40×40px location button to its left.”
