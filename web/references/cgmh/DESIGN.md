---
name: Chang Gung Memorial Hospital
colors:
  primary: '#f68825'
  foreground: '#212529'
  canvas: '#ffffff'
  news-surface: '#f6f6f6'
  footer: '#443424'
  footer-base: '#261c12'
  footer-hover: '#55412d'
  location-badge: '#838383'
  pagination-idle: '#aaaaaa'
typography:
  navigation:
    fontSize: 20px
    fontWeight: 400
    use: Medical-services header link at rest; measured hover and press use weight 700.
  action:
    fontSize: 17px
    fontWeight: 700
    use: First featured article's learn-more link; line height 27.2px.
  body:
    fontSize: 17px
    fontWeight: 400
    use: News-card anchor at rest; the date child is 17px/700.
  footer:
    fontSize: 16px
    fontWeight: 400
    use: Footer sitemap link; line height 25.6px.
  quick-action:
    fontSize: 16px
    fontWeight: 700
    use: Appointment link's visible child label; the enclosing anchor computes to font-size 0px.
rounded:
  none: 0px
  action: 30px
  select: 5px
spacing:
  action-x: 20
  action-y: 8
components:
  appointment:
    type: button
    textColor: '#ffffff'
    rounded: 0px
    height: 100.6px
    padding: 10px 20px
    typography: 16px / 700
    hover: 'div.svg transform matrix(0.9, 0, 0, 0.9, 0, 0); label remains #ffffff'
    pressed: 'div.svg transform matrix(0.9, 0, 0, 0.9, 0, 0); label remains #ffffff'
    use: 'Link labelled 即時掛號 in the main quick-action strip, 104px wide. Its own background is transparent on a #f68825 parent. The visible label is 16px/700; the anchor is 0px/700. Hover and press shrink the 50px square icon wrapper without changing the label.'
  learn-more:
    type: button
    textColor: '#f68825'
    border: '1px solid #f68825'
    rounded: 30px
    height: 45.2px
    padding: 8px 20px
    typography: 17px / 700
    hover: 'bg #f68825; fg #ffffff'
    pressed: 'bg #f68825; fg #ffffff'
    use: 'Link labelled 了解更多 for the first medical feature, 130px wide; transparent at rest on the #ffffff canvas. Hover and press fill the orange outline and turn the label white.'
  nav-service:
    type: button
    textColor: '#212529'
    rounded: 0px
    height: 28px
    padding: 0px
    typography: 20px / 400
    hover: 'fg #f68825; font 20px/700'
    pressed: 'fg #f68825; font 20px/700'
    use: 'Header navigation link labelled 醫療服務, 80px wide; transparent on the #ffffff header. Hover and press change both colour and weight.'
  news-card:
    type: card
    textColor: '#212529'
    rounded: 0px
    height: 89.4px
    padding: 0px
    typography: 17px / 400
    hover: 'fg #f68825; location badge bg #f68825'
    pressed: 'fg #f68825; location badge bg #f68825'
    use: 'Link to the 2026-11-02 Taoyuan nurse-to-patient-ratio announcement, 338px wide; transparent on the #f6f6f6 news section. Its date is 17px/700. The location badge is #838383 with #ffffff text at rest; hover and press turn the announcement text and badge background orange.'
  footer-sitemap:
    type: button
    backgroundColor: '#443424'
    textColor: '#ffffff'
    rounded: 30px
    height: 41.6px
    padding: 8px 20px
    typography: 16px / 400
    hover: 'bg #55412d; fg #f68825'
    pressed: 'bg #55412d; fg #f68825'
    use: 'Footer link labelled 網站地圖, 104px wide, in the #261c12 lower footer. Hover and press lighten its brown fill and turn its white label orange.'
---

# Design System Inspiration of Chang Gung Memorial Hospital

## Overview

### Visual Theme & Atmosphere

Chang Gung Memorial Hospital is a Taiwanese hospital system founded in 1976. Its official introduction describes a nonprofit medical mission spanning service, teaching and research, with patients placed first. The public website brings that service role into its navigation: appointment registration, finding a doctor, choosing a specialty, symptom reference and a care guide appear together as immediate actions. [Official introduction](https://www.cgmh.org.tw/tw/Systems/About), [live homepage](https://www.cgmh.org.tw/).

The observed expression is warm orange on white: an orange bilingual medical-foundation mark, white medical line icons in an orange action strip, generous feature panels and outlined rounded links. A two-part brown footer gives the long service directory a darker base. These are observations of the live Traditional Chinese homepage at `cgmh.org.tw/`, not a published brand manual.

The institution's current evolution is documented in its October 2026 medical-week announcement, which marks its 50th anniversary and names artificial intelligence, smart medicine, precision medicine and whole-person care among its themes. That institutional direction is verified; a website rebrand or redesign date is not established. [Official anniversary announcement](https://www.cgmh.org.tw/tw/News/PressNews/261007001).

### Brand Narrative

The official history records the completion of the Taipei outpatient and emergency centre on 1 December 1976. The official introduction frames the institution around nonprofit care and service, teaching and research. Its 2026 medical-week programme carries that history into discussion of smart medicine, precision medicine and whole-person care. [History](https://www.cgmh.org.tw/tw/Systems/Historys), [introduction](https://www.cgmh.org.tw/tw/Systems/About), [2026 announcement](https://www.cgmh.org.tw/tw/News/PressNews/261007001).

### Principles

The official introduction states `人本濟世，病患優先` (a human-centred approach with patients first), names service, teaching and research as its tasks, and describes a nonprofit purpose. These are institutional principles; the colour and component treatments above are observations of its website, rather than declared corporate design principles. [Official introduction](https://www.cgmh.org.tw/tw/Systems/About).

### Personas

No researched personas were verified.

## Colors

These reference role names describe measured surface values. The survey found no colour custom-property namespace: its sole computed custom property was the viewport helper `--vh: 10px`.

| Reference role | Value | Evidence on the homepage |
|---|---|---|
| Primary | `#f68825` | Appointment action's parent background; learn-more border and text; navigation and news hover colour. |
| Foreground | `#212529` | News announcement copy and header navigation at rest. |
| Canvas | `#ffffff` | Background behind the first learn-more link and header navigation; inverse labels. |
| News surface | `#f6f6f6` | Background behind the measured news-card link. |
| Footer | `#443424` | Sitemap link at rest; upper footer in the site's stylesheet. |
| Footer base | `#261c12` | Lower-footer rule in the stylesheet, also present in the colour census. |
| Footer hover | `#55412d` | Sitemap link's measured hover and pressed fill. |
| Location badge | `#838383` | Taoyuan location badge at rest. |
| Pagination idle | `#aaaaaa` | Inactive feature-carousel dots in the survey and homepage stylesheet. |

The foreground is also the bundled Bootstrap Reboot body colour. Its use on actual announcement text was measured; it is not presented as an authored CGMH custom property. The paragraph-ink census was empty, so this foreground role is grounded in the news link's `div.text`, not a fabricated `<p>` measurement. [Homepage stylesheet](https://www.cgmh.org.tw/Styles/style.css).

## Typography

| Evidence class | Finding |
|---|---|
| Official product use | No text typeface is confirmed by typography guidance in the opened official pages. |
| Live-loaded | `document.fonts` reports only `fontello normal normal`, used for icons. This does not establish a text face. |
| Official distributed assets | The first-party Fontello stylesheet exposes icon-font assets. The census lists WOFF2, WOFF and TrueType source candidates; the selected network file was not recorded. No distributed text-font asset was identified in the census. |
| Declared-only | `Microsoft JhengHei` is named on body, h1 and button. The raw computed declaration is `"Microsoft JhengHei", sans-serif, fontello`; the named text face is absent from the loaded-face list. No specimen is supplied. |
| Unresolved | The actual text face used for Han and Latin glyphs is unresolved. No text-family token or specimen is published. |

Substitute: none chosen. The icon font is not a substitute for a text face. [Fontello stylesheet](https://www.cgmh.org.tw/Styles/plugin/fontello.css).

Retain the verified metrics independently of the unresolved text family:

| Element | Size / weight | Line height |
|---|---|---|
| Header medical-services link | 20px / 400; hover and press 700 | 32px |
| Featured learn-more link | 17px / 700 | 27.2px |
| News-card anchor | 17px / 400; date child 17px / 700 | Anchor: 27.2px |
| Footer sitemap link | 16px / 400 | 25.6px |
| Appointment link's visible child label | 16px / 700 | Not separately recorded |

The appointment anchor itself computes to `0px/700` and zero line height; the visible child label supplies its readable type. All measured control identities report normal letter spacing.

## Layout

At the measured 1440 × 1000 desktop viewport, the fixed header is 92px high. The first feature panel occupies a 1296px-wide surveyed wrapper starting at x=72, with alternating text and image columns visible in the capture. The news section presents three announcement columns, followed by a publication/media grid and a multi-column footer.

The two measured rounded text actions share 8px vertical and 20px horizontal padding. The appointment action uses 10px vertical and 20px horizontal padding. These are local component spacings, not evidence of a global spacing scale.

Several hero and article images failed to render and page loading timed out. The captured whitespace and compressed hero must not be treated as the intended image layout or as evidence for a photography style.

### Responsive Behavior

Not measured: only the 1440 × 1000 desktop surface was probed.

## Elevation & Depth

The five harvested control roots report `box-shadow: none`. No sitewide elevation scale was verified.

## Motion & Easing

The computed root transitions are `background 0.3s ease 0s` on the learn-more and footer-sitemap links, `color 0.3s ease 0s` on the news-card link, and `all 0s ease 0s` on the appointment, navigation and search controls. These raw strings are retained in the verification Proof block.

The appointment's icon wrapper has a measured hover/pressed transform of `matrix(0.9, 0, 0, 0.9, 0, 0)`. Its individual transition string was not recorded, so no duration is assigned to that child. No custom easing curve is asserted.

## Components

The following five components have measured authored hover and pressed changes. They are links, represented as action buttons or a news card in the reference.

| Control | Rest geometry and paint | Hover and pressed |
|---|---|---|
| Appointment — `即時掛號` | 104 × 100.6px; radius 0; padding 10px 20px; transparent on orange, white 16px/700 child label; 50px square icon wrapper. | Icon wrapper transform becomes `matrix(0.9, 0, 0, 0.9, 0, 0)`. Paint and label remain unchanged. |
| Learn more — `了解更多` | 130 × 45.2px; radius 30px; padding 8px 20px; transparent on white; 1px orange border; orange 17px/700 label. | Background becomes orange and label white; border remains orange. |
| Header — `醫療服務` | 80 × 28px; radius 0; padding 0; transparent on white; foreground 20px/400. | Text becomes orange and weight becomes 700. |
| News-card link | 338 × 89.4px; radius 0; padding 0; transparent on the news surface; foreground 17px/400; bold date and a 90 × 32px location badge. | Text becomes orange; badge background changes from grey to orange while badge text remains white. |
| Footer — `網站地圖` | 104 × 41.6px; radius 30px; padding 8px 20px; brown fill, white 16px/400 label. | Fill becomes the lighter footer-hover brown and label becomes orange. |

The measured header search icon is 28 × 27.2px, radius 0, padding 0, with a transparent background and orange foreground. Its pointer states are UNMEASURED and keyboard focus produced no compared style change, so it stays outside the component tokens. The search input exists in HTML but is initially hidden by a zero-width, zero-opacity stylesheet rule and was absent from the visible-control survey; no input component is published.

The two footer selects have a surveyed radius of 5px; no interactive select states were measured. None of the six measured control roots had a box shadow.

### States

| Control | Hover | Pressed while hovered | Keyboard focus |
|---|---|---|---|
| Appointment | Icon wrapper scales to the measured 0.9 matrix. | Same change; no additional delta from hover. | Browser `auto` outline only. |
| Learn more | Fill `#f68825`; text `#ffffff`. | Same change; no additional delta from hover. | Browser `auto` outline only. |
| Medical-services nav | Text `#f68825`; weight 400 → 700. | Same change; no additional delta from hover. | Browser `auto` outline only. |
| News-card link | Text `#f68825`; badge fill `#838383` → `#f68825`. | Same change; no additional delta from hover. | Browser `auto` outline only. |
| Footer sitemap | Fill `#443424` → `#55412d`; text `#ffffff` → `#f68825`. | Same change; no additional delta from hover. | Browser `auto` outline only. |
| Search icon | UNMEASURED: `:hover` did not match. | UNMEASURED for the same reason. | No change within self, one empty icon descendant, their pseudo-elements and three ancestor levels. |

For the five links the raw focus outline was `rgb(0, 95, 204) auto 1px off 1px`; it cleared on blur. This is the browser's ring and creates no focus token. No disabled states were measured.

## Do's and Don'ts

For a reconstruction based on this measured surface:

- Use the orange for action outlines, highlighted navigation, news text and location-badge interaction.
- Keep the different treatments: the appointment icon shrinks, the outlined action fills, the nav changes weight, and the footer lightens its brown fill.
- Retain the measured numeric type metrics while the text family remains unresolved.
- Preserve the observed browser keyboard ring in the implementation; do not publish it as a brand focus colour.
- Keep search pointer behavior unresolved until it is measured successfully.

## Voice & Tone

The homepage uses short task labels such as `找醫師` (find a doctor) and `就醫指南` (care guide), alongside descriptive medical-feature titles and dated, location-labelled announcements. These are observed copy patterns, not an inferred brand-voice policy. [Live homepage](https://www.cgmh.org.tw/).

## Agent Prompt Guide

Build a Traditional Chinese hospital information portal using a white canvas, orange `#f68825` actions and a `#443424` / `#261c12` footer. Use a 130 × 45.2px outlined learn-more link with 30px corners, 8px 20px padding and 17px/700 text; on hover, fill it orange and turn its label white. Use a 20px/400 header link that becomes orange and 700 weight on hover. Leave the text-family choice unresolved; no substitute has been chosen.
