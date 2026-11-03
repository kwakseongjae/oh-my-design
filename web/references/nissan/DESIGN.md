---
name: Nissan
colors:
  primary: '#c3002f'
  primary-hover: '#920023'
  background: '#ffffff'
  surface: '#eeeeee'
  surface-muted: '#f6f6f6'
  foreground: '#666666'
  ink-strong: '#343434'
  ink-black: '#000000'
  muted: '#c1c1c1'
  border: '#cccccc'
  focus-outline: '#5485f0'
typography:
  action:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 22px
    use: Sakura hero catalogue link; loaded ShinGoPro-Regular
  card-link:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 18.2px
    use: Walk-in shop card detail link; loaded ShinGoPro-Regular
  nav:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: 0.9px
    use: Header car-navigation link; loaded ShinGoPro-Regular
  compact-action:
    fontSize: 12px
    fontWeight: 700
    lineHeight: 18px
    letterSpacing: 0.9px
    use: MyNISSAN header link; loaded ShinGoPro-Bold
rounded:
  none: 0px
  header-focus: 4px
components:
  hero-catalog:
    type: button
    backgroundColor: '#c3002f'
    textColor: '#ffffff'
    border: '1px solid #c3002f'
    rounded: 0px
    height: 48px
    padding: 12px 25px
    typography: 14px / 400
    hover: 'bg #920023; border 1px solid #920023'
    pressed: 'bg #920023; border 1px solid #920023'
    use: 日産サクラ WEBカタログ — a link over the Sakura hero image, measured width 239.6px. Keyboard focus was not reached.
  info-all:
    type: button
    backgroundColor: '#c3002f'
    textColor: '#ffffff'
    border: '1px solid #c3002f'
    rounded: 0px
    height: 44.2px
    padding: 12px 45px 12px 20px
    typography: 14px / 400
    hover: 'bg #920023; border 1px solid #920023'
    pressed: 'bg #920023; border 1px solid #920023'
    use: インフォメーション一覧へ — a link below the information cards, measured width 235px. Its browser auto focus outline is excluded.
  my-nissan:
    type: button
    rounded: 0px
    height: 30px
    padding: 6px 20px
    typography: 12px / 700
    focus: 'outline 4px solid #5485f0; outline-offset 1px; border-radius 4px'
    use: MyNISSAN — a header link, measured width 145.7px. Theme-dependent fill and ink are recorded in prose; this component preserves geometry and the reversible authored keyboard-focus treatment.
  nav-cars:
    type: button
    rounded: 0px
    height: 24px
    padding: 0px
    typography: 14px / 400
    focus: 'outline 4px solid #5485f0; outline-offset -4px; border-radius 4px'
    use: クルマを探す — a transparent header navigation link over the hero, measured width 89.4px. Header-context ink and pointer-state geometry are documented in prose.
  pickup-detail:
    type: card
    textColor: '#343434'
    rounded: 0px
    height: 18.2px
    padding: 0px
    typography: 14px / 400
    hover: 'fg #c3002f; underline solid #c3002f'
    pressed: 'fg #c3002f; underline solid #c3002f'
    use: '詳しくはこちら — the transparent detail link inside the walk-in shop pickup card, on #eeeeee; measured width 114px. Dimensions describe the link, not the whole card. Browser auto focus outline excluded.'
  visit-shortcut:
    type: button
    textColor: '#343434'
    rounded: 0px
    height: 148.1px
    padding: 7px 0px 17px
    typography: 14px / 400
    hover: 'parent li::after with 3px solid #c3002f bottom border: matrix(0, 0, 0, 1, 0, 0) to matrix(1, 0, 0, 1, 0, 0)'
    pressed: 'parent li::after with 3px solid #c3002f bottom border: matrix(0, 0, 0, 1, 0, 0) to matrix(1, 0, 0, 1, 0, 0)'
    use: '来店予約 — a transparent purchase-shortcut link on the white page, measured width 245.7px. fg records the visible child label; the root and icon are #c3002f. Browser auto focus outline excluded.'
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    sans: ShinGoPro-Regular
    bold: ShinGoPro-Bold
    light: ShinGoPro-Light
---

# Design System Inspiration of Nissan

## Overview

### Visual Theme & Atmosphere

Nissan makes and sells automobiles and related products. Its company profile dates its establishment to 26 December 1933 and lists its headquarters in Yokohama. The company's history page connects that history to a willingness to attempt what others have not. [Company profile](https://www.nissan-global.com/JP/COMPANY/PROFILE/), [history](https://www.nissan-global.com/JP/COMPANY/PROFILE/HERITAGE/).

The identity's documented turning point is the 2020 logo redesign. Nissan describes an illuminated vehicle badge developed into a two-dimensional mark, with the company name retained at its centre. The design team's keywords were “thin, light and flexible.” This reference uses that documented evolution as context for the live site's light logo strokes, open photography and sharply rectangular actions. The visual connection is an interpretation of the capture, rather than an additional brand rule. [Nissan's logo-design story](https://www.nissan-global.com/EN/STORIES/RELEASES/redesigned-nissan-logo.html).

The current Japanese brand page organises its message around driver assistance, electrification and connected cars. The live homepage combines a large vehicle photograph with compact red actions, practical purchase shortcuts and information rails. Its interface uses `#c3002f` for catalogue actions and icons, white page areas, pale grey panels and Japanese ShinGoPro faces. [Japanese brand page](https://www2.nissan.co.jp/BRAND/), [measured homepage](https://www.nissan.co.jp/).

The measured homepage is the Japanese edition (`www.nissan.co.jp/`), with HTML `lang="ja-JP"`; the capture did not redirect to another regional edition.

Primary tasks visible in the capture are finding a vehicle, opening its web catalogue, making a self estimate, finding a dealer, booking a test drive and reaching owner information. These are interface tasks, not researched audience personas.

### Brand Narrative

The [current Japanese brand page](https://www2.nissan.co.jp/BRAND/) presents technology through everyday driving: driver assistance, electrification and connection. The homepage gives those themes practical entry points through vehicle browsing, estimates and test-drive booking. Its large photographs carry the campaign story while compact actions carry the next task.

### Principles

Nissan's [current design message](https://www.nissan-global.com/JP/INNOVATION/DESIGN/) links curiosity and the courage to challenge assumptions with combining technology and a human-centred viewpoint. Applied to this measured page, a useful design interpretation is to let vehicle imagery lead, make purchase tasks explicit and preserve visible keyboard focus. These application recommendations are not a published UI-principle list.

### Personas

No audience-persona research was verified.

## Colors

The following roles map measured colours on this homepage. No first-party colour-variable palette was exposed by the census; the site's own custom properties here mostly encode icons and navigation layout.

| Role | Value | Live evidence |
|---|---|---|
| Primary action / icon | `#c3002f` | Both measured red action fills and borders; purchase-shortcut icon |
| Primary hover / pressed | `#920023` | Both red links change their fill and border to this value |
| Background | `#ffffff` | White page regions in the capture; background census ×8 |
| Surface | `#eeeeee` | Background census ×15; measured backdrop behind the pickup detail link |
| Muted surface | `#f6f6f6` | Background census ×16; inactive vehicle-category links in the survey |
| Foreground | `#666666` | Paragraph ink ×42, the dominant `<p>` colour |
| Strong ink | `#343434` | Pickup detail text and the visible purchase-shortcut label |
| Black ink | `#000000` | Surveyed estimate-link label and one header theme's navigation ink |
| Muted ink | `#c1c1c1` | Surveyed footer links; text census ×23 |
| Border | `#cccccc` | Border census ×10 |
| Header focus outline | `#5485f0` | Authored 4px solid outline on two keyboard-focused header links |

The most frequent text colour overall is `#343434` (×115), while the paragraph foreground is `#666666`. Keep those two observations separate when choosing long-copy ink.

Header colour is contextual. MyNISSAN's states-run rest was `#000000` with `#ffffff` text; its after-blur read became `#eeeeee` with `#000000` text. The survey viewport shows the pale variant over a photograph. These readings do not establish a universal secondary-button fill or a focus-induced colour change.

## Typography

### Evidence classes

| Class | Verified evidence |
|---|---|
| Official product use, company statement | The opened narrative pages do not specify an interface font family. |
| Live-loaded | `document.fonts` reports **ShinGoPro-Regular**, **ShinGoPro-Bold** and **ShinGoPro-Light**, each with face weight/style reported as `normal normal`. These are the three text faces retained in the font-family tokens. |
| Official distributed assets | The homepage's [brandfont.css](https://www.nissan.co.jp/COMMON/GN2020/CSS/brandfont.css) imports Nissan-hosted Regular, Bold and Light CSS. Each opened sheet declares 118 Unicode-range WOFF subsets. The same product CSS applies Regular broadly and maps `.nbf-light`, `.nbf-regular` and `.nbf-bold` to the corresponding face. |
| Declared-only | The census lists `Nissan Light`, `Nissan Bold`, `Nissan Regular`, `OpenSansRegular` and `OpenSansBold` in `@font-face` declarations, but none appears in its loaded list. No specimens or interface-family tokens are supplied for these faces. Both OpenSans declarations point to the same `OpenSans-Regular.ttf` URL; the names alone do not prove distinct font files. |
| Unresolved | Font licensing and permission to redistribute the font files were not established. Substitute: none chosen. |

The loaded `icon-Nissan-Global`, `icon` and `omninav-nissan-modernized-icons-font` faces serve interface symbols; they are excluded from text-family roles. Font binaries were not fetched separately.

### Measured typesetting

| Use | Family | Size / CSS weight | Line height | Tracking |
|---|---|---|---|---|
| Sakura catalogue link | ShinGoPro-Regular | 14px / 400 | 22px | normal |
| Information-list action and pickup detail | ShinGoPro-Regular | 14px / 400 | 18.2px | normal |
| Car navigation link | ShinGoPro-Regular | 14px / 400 | 24px | 0.9px |
| MyNISSAN | ShinGoPro-Bold | 12px / 700 | 18px | 0.9px |

The loaded Bold face's `normal` face descriptor and MyNISSAN's computed CSS weight `700` are different observations. The census has no `h1` family reading; a heading scale is absent from this reference.

## Layout

The desktop capture opens with navigation over the vehicle photograph. The surveyed full-image hero link is 1425 × 759.5px; the Sakura action links begin 50px from the left. Below the hero are a service notice, four purchase shortcuts, a vehicle-category strip, an information carousel, a news list, a pickup carousel and a dark footer.

Three visible information-image links have x positions 202, 552 and 902px and widths of 320px. Those anchor rectangles imply 30px gaps. Use the observed three-column rhythm for this desktop surface; a general grid or global spacing scale was not extracted.

Padding is control-specific: 12px 25px for the hero action, 12px 45px 12px 20px for the information action, 6px 20px for MyNISSAN, and 7px 0px 17px for the large purchase shortcut.

### Responsive Behavior

Only the 1440 × 1000 desktop viewport was rendered; mobile layout and breakpoint behaviour were not measured.

## Elevation & Depth

The six control roots have no box shadow. The floating purchase bar visibly casts a shadow in the full-page capture; its numeric shadow value was not measured.

## Motion & Easing

The computed transition on MyNISSAN is `background-color 0.3s ease 0s`. Its measured hover and pressed snapshots show no settled difference within the probe's scope. The other five selected control roots report `all 0s ease 0s`.

The purchase shortcut's parent underline changes horizontally from `matrix(0, 0, 0, 1, 0, 0)` to `matrix(1, 0, 0, 1, 0, 0)` on hover and press. Its ancestor timing curve was not recorded as a raw computed transition string, so this reference supplies the observed transform endpoints only.

---

**Tier 1 sources:** [Homepage](https://www.nissan.co.jp/) (live survey, fonts, census, controls and screenshots, 2026-11-03); [homepage nonsense-path control](https://www.nissan.co.jp/zz-this-does-not-exist) (404); [company profile](https://www.nissan-global.com/JP/COMPANY/PROFILE/); [privacy notice](https://www.nissan-global.com/JP/PRIVACY/); [history](https://www.nissan-global.com/JP/COMPANY/PROFILE/HERITAGE/); [logo-design story](https://www.nissan-global.com/EN/STORIES/RELEASES/redesigned-nissan-logo.html); [design message](https://www.nissan-global.com/JP/INNOVATION/DESIGN/); [Japanese brand page](https://www2.nissan.co.jp/BRAND/); [brand-font product CSS](https://www.nissan.co.jp/COMMON/GN2020/CSS/brandfont.css). Full opened-source URLs, controls and raw evidence are in the accompanying verification notes. All were read on 2026-11-03.

## Components

All six measured elements are links. The capture used real pointer states and a Tab walk. Dimensions below describe the selected anchor, including the small anchor inside a larger card.

| Control | Rest geometry and appearance | Measured change |
|---|---|---|
| `hero-catalog` — 日産サクラ WEBカタログ | 239.6 × 48px; radius 0px; padding 12px 25px; 1px `#c3002f` border; `#c3002f` fill / `#ffffff` ink | Hover and pressed: fill and border `#920023`. Focus UNMEASURED. |
| `info-all` — インフォメーション一覧へ | 235 × 44.2px; radius 0px; padding 12px 45px 12px 20px; same red fill, white ink and 1px red border | Hover and pressed: fill and border `#920023`. Tab focus also changes fill/border and draws a browser `auto` outline. |
| `my-nissan` — MyNISSAN | 145.7 × 30px; radius 0px; padding 6px 20px; 12px/700; initial rest black / white | No pointer-state difference within the probe's comparison scope. Keyboard focus: 4px solid `#5485f0`, offset 1px, radius 4px. Header-theme colours vary. |
| `nav-cars` — クルマを探す | 89.4 × 24px; radius 0px; padding 0px; transparent; initial rest black ink | Pointer pass: 2px white bottom border, padding-bottom 4px and height 30px. Keyboard focus: 4px solid `#5485f0`, offset −4px, radius 4px; captured label becomes white. |
| `pickup-detail` — 詳しくはこちら, walk-in shop card | 114 × 18.2px; radius 0px; padding 0px; transparent over `#eeeeee`; `#343434` text; no border | Hover and pressed: `#c3002f` text and solid underline. Tab focus repeats those text changes and adds the browser `auto` outline. |
| `visit-shortcut` — 来店予約 | 245.7 × 148.1px; radius 0px; padding 7px 0px 17px; transparent on the white page; root/icon red, visible label `#343434`; no border on the anchor | Hover and pressed expand the parent `li::after` underline, which has a 3px `#c3002f` bottom border. Tab focus adds only the browser `auto` outline. |

MyNISSAN and car-navigation components retain geometry and their authored focus treatment in the machine-readable reference. Their contextual colours stay in this prose. Native `auto` rings have no focus tokens. Every measured control root has `box-shadow: none` at rest.

The survey also shows a 48px pale-grey hero estimate link beside the red catalogue link. Its states were not selected for measurement, so no additional component is declared for it. No visible search input was returned by the survey.

### States

Pointer measurements succeeded for all six controls. Pressed snapshots equal the hover result for the selected red actions, navigation link, pickup detail and purchase shortcut; no extra press-only effect was observed within the compared scope. MyNISSAN shows no hover or pressed delta within that scope.

The probe compares the selected element, its `::before`/`::after`, descendants and their pseudo-elements, and three ancestor levels and their pseudo-elements. Descendant counts are one for the hero, one empty child for MyNISSAN, one for navigation, zero for the information and pickup-detail actions, and two for the purchase shortcut, including one empty icon span. No selected comparison subtree contains an SVG or image element. Pixel-only animation, siblings and the inside of an external resource remain outside that scope.

Keyboard focus reached five controls. The hero catalogue anchor had `tabIndex=-1` in the states-run identity and was not reached in 92 Tab presses before a detected cycle. Its focus stays UNMEASURED. The header links' blue outlines and radius changes reverse after blur. MyNISSAN's after-blur colour changes are recorded as header-context variation, not a focus token. Disabled states were not exercised.

## Do's and Don'ts

Recommendations below are drawn from the measured surface.

- Use square red catalogue actions with white labels and the measured darker red pointer states.
- Keep the 4px blue header focus outline and its 4px focus-only radius.
- Pair red purchase icons with the measured dark-grey label colour.
- Underline the card-detail label as it turns red on hover and press.
- Keep header-theme colours contextual when reproducing the photo-overlaid navigation.
- Preserve the measured font names and their evidence classes; choose no replacement face from this reference.
- Exclude the Swiper default blue from the Nissan palette.

## Voice & Tone

The homepage's functional labels are short Japanese task phrases: “クルマを探す”, “セルフ見積り” and “試乗予約”. The [brand page](https://www2.nissan.co.jp/BRAND/) shifts to aspirational phrasing such as “自分だけの、らしい道。” and “暮らしに新しい感動を”. Use concise task labels in controls and more expressive language in campaign copy; this is an editorial reading of the opened text.

## Agent Prompt Guide

“Build a Nissan-style desktop vehicle-catalogue action using the measured 48px-high square anchor: `#c3002f` fill and 1px border, `#ffffff` 14px/400 ShinGoPro-Regular label, 22px line height, 12px 25px padding. On hover and press, use `#920023` for the fill and border. Keep keyboard focus unresolved for this particular hero control.”

“Build the measured card-detail link on `#eeeeee`: 14px/400 ShinGoPro-Regular, 18.2px line height, dark-grey text, a red arrow, and red underlined text on hover and press. Use the 114 × 18.2px link geometry without treating it as the entire card.”

These prompts use live-loaded faces. Font redistribution rights remain unresolved. Substitute: none chosen.
