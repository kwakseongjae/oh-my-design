---
name: Taipei Metro
colors:
  primary: '#0069a2'
  section-green: '#49a123'
  query-amber: '#f3b544'
  secondary-sky: '#9be1fb'
  surface: '#ffffff'
  surface-muted: '#f5f5f5'
  tab-inactive: '#ededed'
  foreground: '#505050'
  label: '#1a1a1a'
  input-line: '#cccccc'
  interaction-ink: '#004d79'
  utility-hover: '#99c047'
  focus-coral: '#e76454'
  query-label: '#000000'
typography:
  navigation:
    fontSize: 20px
    fontWeight: 400
    lineHeight: 30px
    use: Main rider-guide link at rest; measured weight becomes 700 on hover and focus.
  control:
    fontSize: 18px
    fontWeight: 400
    use: Origin-station select and visible route-map card caption; their line heights differ.
  query:
    fontSize: 18px
    fontWeight: 700
    lineHeight: 18px
    use: Route-query link at rest; family unresolved.
  secondary:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 16px
    use: More-news link at rest; family unresolved.
rounded:
  square: 0px
  navigation: 10px
  utility: 18px
  secondary: 20px
  query: 30px
components:
  rider-nav:
    type: button
    textColor: '#1a1a1a'
    rounded: 10px
    height: 46px
    padding: 8px 30px 8px 5px
    typography: 20px / 400
    hover: 'Foreground #004d79 and weight 700; arrow ::before transform becomes matrix(0, -1, 1, 0, 0, 0).'
    pressed: 'Foreground #004d79 and weight 700; arrow remains in its hover transform; 3px dashed #e76454 outline with 0px offset.'
    focus: 'Foreground #004d79 and weight 700; 3px dashed #e76454 outline with 1px offset; no arrow transform change in the keyboard capture.'
    use: Link labelled 乘車指南, with role=button; 180px wide, transparent on the white header.
  origin-select:
    type: input
    backgroundColor: '#ffffff'
    textColor: '#1a1a1a'
    rounded: 0px
    height: 41.6px
    padding: 5px 8px
    typography: 18px / 400
    focus: '3px dashed #e76454 outline with 0px offset.'
    use: 'Native select #departureStation, 350px wide; only the bottom border is 1px solid #cccccc. Hover and pressed are unmeasured; this is not a keyword search field.'
  route-card:
    type: card
    textColor: '#1a1a1a'
    rounded: 0px
    height: 148px
    padding: 0px 16px 16px
    typography: 18px / 400
    hover: 'Caption foreground #004d79; anchor foreground stays #1a1a1a.'
    pressed: 'Caption foreground #004d79; 3px dashed #e76454 outline with 0px offset.'
    focus: 'Caption foreground #004d79; 3px dashed #e76454 outline with 1px offset.'
    use: Link labelled 路網圖; 175px wide, transparent on a white list item. Typography describes its visible caption; the anchor itself computes to 16px/400.
  header-search:
    type: button
    backgroundColor: '#f5f5f5'
    rounded: 18px
    height: 36px
    padding: 0px
    hover: 'Background #99c047.'
    pressed: 'Background #99c047; 3px dashed #e76454 outline with 0px offset.'
    focus: 'Background #99c047; 3px dashed #e76454 outline with 1px offset.'
    use: Link labelled 搜尋, with role=button; 36px square. The hidden text is 0px/400 and transparent. Its visible icon is a background image; no icon foreground token is inferred.
omitted:
  - section: spacing
    reason: No verified values in current evidence.
---

# Design System Inspiration of Taipei Metro

## Overview

### Visual Theme & Atmosphere

Taipei Metro is the urban rail service operated by 臺北大眾捷運股份有限公司. Its [company history](https://www.metro.taipei/cp.aspx?n=B27E7BC8CBBCDA61) records the company's establishment on 27 July 1994 and the Muzha line's opening on 28 March 1996. The same history records QR single-journey tickets and an accompanying Taipei Metro Go app purchase function in March 2026: the service continues to develop its digital journey tools.

The identity pairs blue and green with open, flowing shapes. The [official identity account](https://www.metro.taipei/cp.aspx?n=9E1943CD7EEE868B) describes simplified corners, balanced space between the symbol's two halves, and colours adjusted for use against different backgrounds. The company [dates that identity refinement to late 2020](https://www.metro.taipei/News_Content.aspx?n=30CCEFD2A45592BF&s=1F2D27B9C9F0579E&sms=72544237BBE4C5F6). On the measured website, this becomes a light service portal: white panels, coloured section accents, illustrated service links, and compact rounded actions.

The requested entry URL (`web.metro.taipei/pages/index.asp`) rendered the Traditional Chinese homepage at `www.metro.taipei/`, with HTML `lang="zh-Hant-TW"`; all live measurements below describe that destination.

Primary tasks visible on this homepage are route and fare lookup, station information, service shortcuts, and news.

### Brand Narrative

The company's [mission](https://www.metro.taipei/cp.aspx?n=AE0EC5DA7D0804D4) connects safe, reliable, friendly transport with sustainable development and services grounded in its transport business. Its [station-redesign announcement](https://www.metro.taipei/News_Content.aspx?n=30CCEFD2A45592BF&s=1F2D27B9C9F0579E&sms=72544237BBE4C5F6) carries that approach into Zhongshan station, describing subtraction, systematic organisation and consistency from the traveller's perspective. These are company statements about service and physical space; the website measurements describe their own evidence domain.

### Principles

The [current vision page](https://www.metro.taipei/cp.aspx?n=AE0EC5DA7D0804D4) names smart technology, resilience and sustainability, alongside integrity, teamwork, innovation and openness. For this web reference, the observed implementation suggests clear task labels, differentiated service accents and conspicuous keyboard focus. Those implementation lessons are an interpretation of the measured page.

### Personas

Personas were not researched.

## Colors

These are observed website values, named here by their measured roles; they are not a published corporate token dictionary.

| Role | Value | Evidence |
|---|---|---|
| Primary blue | `#0069a2` | Census border colour; route-map item's decorative underline in its measured ancestor |
| Section green | `#49a123` | Census border colour; blue/green section detailing also appears in the live site stylesheet |
| Query amber | `#f3b544` | Route-query link's rest background |
| Secondary sky | `#9be1fb` | More-news link's rest background |
| Surface | `#ffffff` | Most frequent nontransparent background, 44 elements |
| Muted surface | `#f5f5f5` | Census background, 5 elements; header search icon's rest fill |
| Inactive tab | `#ededed` | Inactive station-information tab in the survey; census background, 5 elements |
| Foreground | `#505050` | One of the two paragraph-ink samples; the other is link blue `#0070a8` |
| Label | `#1a1a1a` | Navigation, station select and service-card caption at rest |
| Input line | `#cccccc` | Origin select's 1px bottom border |
| Interaction ink | `#004d79` | Navigation foreground and service-card caption on hover |
| Utility hover | `#99c047` | Header search icon's hover background |
| Focus coral | `#e76454` | Authored dashed focus outline |
| Query label | `#000000` | Route-query link's visible label |

The census contains just one custom property, `--font-color: white`. Its declaration is in the delivered `hamalightGallery.css`, where it colours gallery tools and descriptions. It is excluded from the Metro palette. No brand custom-property namespace was verified; the values above come from rendered styles.

## Typography

The evidence classes remain separate:

- **Official product use:** the identity page documents redesigned standard lettering, with smoother strokes and attention to readability and image/text balance. It does not name an interface font family. A wordmark is not evidence of a reusable UI face.
- **Live-loaded:** the census reports `document.fonts` loaded faces as `[]`. No family is admitted to the typography tokens and no font specimen is supplied.
- **Official distributed assets:** no text-font binary or text-font licence was opened. The delivered CSS declares local font aliases and an `icomoon` icon face; those declarations do not establish a distributed brand text face.
- **Declared-only:** body computes to `sans-serif`; h1 declares `Arial, 微軟正黑體修正, 微軟正黑體, "Helvetica Neue", Helvetica, sans-serif, 新細明體`. Text controls declare `Arial`. The `微軟正黑體修正` face points to local fonts; the icon face names relative TTF/WOFF resources. None appears in the census's loaded list. Roboto and Material Icons are linked in the original Angular shell, outside the rendered homepage's font evidence.
- **Unresolved:** actual system-rendered Han and Latin faces, downloadable text-face availability and licensing. **Substitute: none chosen.**

Keep the measured metrics: main navigation 20px/400 with 30px line height; its hover/focus weight is 700. The origin select is 18px/400 with 30.6px line height. The route-map caption is 18px/400; its anchor reports 16px/400 with 24px line height. The query link is 18px/700 with 18px line height. The more-news link is 16px/400 with 16px line height. These metrics do not identify the rendered font.

## Layout

The observed desktop page stacks a utility row, a logo/navigation row, a broad promotional carousel, a centred two-tab journey panel, and eight illustrated service shortcuts. News, business links, app promotion and a multi-column footer follow. This hierarchy keeps travel tasks near the top while allowing substantial civic and commercial information below. That is a layout observation from the survey screenshots, not a documented grid specification.

Use the measured control padding where applicable; no general spacing scale or container-width token was verified.

### Responsive Behavior

Only 1440×1000 desktop was measured; mobile behaviour and breakpoints are unverified.

## Elevation & Depth

All six sampled controls have computed `box-shadow: none`; surrounding panel shadows were not measured as reusable values.

## Motion & Easing

All six sampled controls report the exact computed transition **`all 0.15s ease 0s`**: 150ms with `ease` and no delay. No custom cubic-bezier curve was computed. The navigation arrow's measured hover transform is recorded in §14.

Separately, the [corporate identity page](https://www.metro.taipei/cp.aspx?n=9E1943CD7EEE868B) says its motion identity draws on train movement and arrival. It supplies no interface timing specification here.

## Components

Measurements use a 1440×1000 desktop viewport. Four controls have clean reusable state evidence:

| Control | Measured identity | Rest appearance |
|---|---|---|
| `rider-nav` — 乘車指南 | Link with button role; 180×46px; radius 10px; padding 8px 30px 8px 5px; 20px/400 | Transparent on white; label `#1a1a1a`; border and shadow none |
| `origin-select` — 出發 | Native `select#departureStation`; 350×41.6px; radius 0px; padding 5px 8px; 18px/400 | White `#ffffff`, label `#1a1a1a`; bottom border 1px solid `#cccccc`; shadow none |
| `route-card` — 路網圖 | Link; 175×148px; radius 0px; padding 0px 16px 16px; visible caption 18px/400 | Transparent on white; anchor and caption `#1a1a1a`; border and shadow none |
| `header-search` — 搜尋 | Link with button role; 36×36px; radius 18px; padding 0px | Background `#f5f5f5`; hidden text transparent at 0px/400; visible icon comes from a background image; border and shadow none |

The search icon's visible image ink was not measured, so its component has no foreground token.

Two additional actions retain their measured geometry as reference observations: **查詢** is a 100×38px link, radius 30px, padding 10px 0px, 18px/700, amber `#f3b544` with black `#000000`; **更多 新聞稿** is a 140.5×40px link, radius 20px, padding 12px 28px, 16px/400, sky `#9be1fb` with `#1a1a1a`. Both have no border or shadow. Their pointer states remain unmeasured, and their after-blur snapshots collapse to 0×0. They are therefore kept out of the component tokens.

The header keyword field was hidden in the survey; no keyword-input component was harvested. The origin select is a separate route-planning control.

### States

| Control | Hover | Pressed | Keyboard focus |
|---|---|---|---|
| `rider-nav` | Foreground `#004d79`, weight 700; arrow transform changes from `matrix(0, 1, -1, 0, 0, 0)` to `matrix(0, -1, 1, 0, 0, 0)` | Hover appearance plus 3px dashed `#e76454` outline, offset 0px | Foreground/weight change plus that outline, offset 1px; arrow transform did not change in this capture |
| `origin-select` | UNMEASURED | UNMEASURED | 3px dashed `#e76454` outline, offset 0px; clean after-blur comparison |
| `route-card` | Caption `#1a1a1a` → `#004d79`; anchor colour unchanged | Caption change plus 3px dashed `#e76454` outline, offset 0px | Caption change plus that outline, offset 1px |
| `header-search` | Background `#f5f5f5` → `#99c047` | Hover fill plus 3px dashed `#e76454` outline, offset 0px | Hover fill plus that outline, offset 1px |
| `route-query` — raw observation only | UNMEASURED | UNMEASURED | Background `#f3b544` → `#f1a61e`, black underline, coral dashed outline at 1px offset; after-blur geometry caveat |
| `news-more` — raw observation only | UNMEASURED | UNMEASURED | Background `#9be1fb` → `#82dafa`, coral dashed outline at 1px offset; after-blur geometry caveat |

The first pointer pass reported coverage by the header layer for query, more-news and origin select. The second call requested `hideOverlays: true`; the probe still reported them covered. No third call was made. A covered pointer state is UNMEASURED, not unchanged.

All accepted hover snapshots matched `:hover`; pressed snapshots matched `:active`; keyboard snapshots matched `:focus` and `:focus-visible`. Comparisons include each control, its pseudo-elements, up to three ancestor levels and descendants. The route card includes four descendants and one image; the select includes 144 descendants. External image internals, iframe contents and pixel-only changes are outside that scope. Disabled variants were not measured.

## Do's and Don'ts

- Keep the blue/green section accents, white service surfaces and distinct amber query action.
- Preserve the measured caption size on service cards and the navigation's weight change.
- Retain the coral dashed keyboard outline, including its measured offset.
- Do not turn the CSS family declarations into verified font specimens.
- Do not assign a transparent icon label's colour to its visible background-image glyph.
- Do not fill in the unmeasured query, news-link or select pointer states.

## Voice & Tone

Visible labels are direct service names and actions: 乘車指南, 路線及票價查詢, 路網圖 and 查詢. No authored editorial voice guide was verified.

## Agent Prompt Guide

“Create a 175×148px service-card link with square corners and 0px 16px 16px padding on a white list item. Its caption is 18px/400 and `#1a1a1a`; hover changes the caption to `#004d79`. Keyboard focus adds a 3px dashed `#e76454` outline at 1px offset. Keep the font family unspecified.”

“Create a 36px square search-icon link with an 18px radius and `#f5f5f5` fill. Hover uses `#99c047`; keyboard focus keeps that fill and adds the same coral outline at 1px offset. Use only a verified icon asset.”
