---
id: line
name: LINE
country: JP
category: consumer-tech
homepage: "https://line.me"
primary_color: "#06c755"
logo:
  type: simpleicons
  slug: line
verified: "2026-07-11"
omd: "0.1"
ds:
  name: LINE Design System
  url: "https://designsystem.line.me"
  type: system
  description: "LINE Messenger and Global Family Service design guidance, including foundations, components, UX guidelines, principles, and LINE Voice."
  og_image: "https://designsystem.line.me/static/36a4ead41b7b972b1130287e849a14b1/73f08/SEO_IMG_1741574443.png"
verification_v2:
  schema: 2
  checked: "2026-07-11"
  surfaces:
    - { id: home, kind: marketing, url: "https://www.line.me/ko/", inspected: "2026-07-11" }
    - { id: ds-home, kind: design-system, url: "https://designsystem.line.me/", inspected: "2026-07-11" }
    - { id: colors, kind: design-system, url: "https://designsystem.line.me/LDSM/foundation/color/line-color-guide-ex-en/", inspected: "2026-07-11" }
    - { id: typography, kind: design-system, url: "https://designsystem.line.me/LDSM/foundation/typography-ex-en/", inspected: "2026-07-11" }
    - { id: layout, kind: design-system, url: "https://designsystem.line.me/LDSM/foundation/layout-ex-en/", inspected: "2026-07-11" }
    - { id: box-button, kind: design-system, url: "https://designsystem.line.me/LDSM/components/box-button-ex-en/", inspected: "2026-07-11" }
    - { id: capsule-button, kind: design-system, url: "https://designsystem.line.me/LDSM/components/capsule-button-ex-en/", inspected: "2026-07-11" }
    - { id: input, kind: design-system, url: "https://designsystem.line.me/LDSM/components/input-ex-en/", inspected: "2026-07-11" }
    - { id: popup, kind: design-system, url: "https://designsystem.line.me/LDSM/components/popup-ex-en/", inspected: "2026-07-11" }
    - { id: tabs, kind: design-system, url: "https://designsystem.line.me/LDSM/components/tabs-ex-en/", inspected: "2026-07-11" }
    - { id: badge, kind: design-system, url: "https://designsystem.line.me/LDSM/components/badge-ex-en/", inspected: "2026-07-11" }
    - { id: principles, kind: design-system, url: "https://designsystem.line.me/about/design-principle-en", inspected: "2026-07-11" }
    - { id: voice, kind: design-system, url: "https://designsystem.line.me/about/line-voice-en", inspected: "2026-07-11" }
    - { id: corporate-style, kind: corporate, url: "https://www.lycorp.co.jp/en/technology-design/design/", inspected: "2026-07-11" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.line.me/ko/", captured: "2026-07-11" }
    - { id: ds-home-doc, kind: official-doc, url: "https://designsystem.line.me/", captured: "2026-07-11" }
    - { id: colors-doc, kind: official-doc, url: "https://designsystem.line.me/LDSM/foundation/color/line-color-guide-ex-en/", captured: "2026-07-11" }
    - { id: typography-doc, kind: official-doc, url: "https://designsystem.line.me/LDSM/foundation/typography-ex-en/", captured: "2026-07-11" }
    - { id: layout-doc, kind: official-doc, url: "https://designsystem.line.me/LDSM/foundation/layout-ex-en/", captured: "2026-07-11" }
    - { id: box-button-doc, kind: official-doc, url: "https://designsystem.line.me/LDSM/components/box-button-ex-en/", captured: "2026-07-11" }
    - { id: capsule-button-doc, kind: official-doc, url: "https://designsystem.line.me/LDSM/components/capsule-button-ex-en/", captured: "2026-07-11" }
    - { id: input-doc, kind: official-doc, url: "https://designsystem.line.me/LDSM/components/input-ex-en/", captured: "2026-07-11" }
    - { id: popup-doc, kind: official-doc, url: "https://designsystem.line.me/LDSM/components/popup-ex-en/", captured: "2026-07-11" }
    - { id: tabs-doc, kind: official-doc, url: "https://designsystem.line.me/LDSM/components/tabs-ex-en/", captured: "2026-07-11" }
    - { id: badge-doc, kind: official-doc, url: "https://designsystem.line.me/LDSM/components/badge-ex-en/", captured: "2026-07-11" }
    - { id: principles-doc, kind: official-doc, url: "https://designsystem.line.me/about/design-principle-en", captured: "2026-07-11" }
    - { id: voice-doc, kind: official-doc, url: "https://designsystem.line.me/about/line-voice-en", captured: "2026-07-11" }
    - { id: corporate-style-doc, kind: official-doc, url: "https://www.lycorp.co.jp/en/technology-design/design/", captured: "2026-07-11" }
  claims:
    "tokens.colors.action-blue": &color_evidence { surface_id: colors, source_id: colors-doc, method: official-doc, captured: "2026-07-11" }
    "tokens.colors.android-primary": *color_evidence
    "tokens.colors.border": *color_evidence
    "tokens.colors.canvas": *color_evidence
    "tokens.colors.danger": *color_evidence
    "tokens.colors.foreground": *color_evidence
    "tokens.colors.on-primary": *color_evidence
    "tokens.colors.outline": *color_evidence
    "tokens.colors.primary": *color_evidence
    "tokens.colors.text-muted": *color_evidence
    "tokens.colors.text-secondary": *color_evidence
    "tokens.components.box-button-destructive.bg": &button_evidence { surface_id: box-button, source_id: box-button-doc, method: official-doc, captured: "2026-07-11" }
    "tokens.components.box-button-destructive.fg": *button_evidence
    "tokens.components.box-button-destructive.height": *button_evidence
    "tokens.components.box-button-destructive.radius": *button_evidence
    "tokens.components.box-button-destructive.states": *button_evidence
    "tokens.components.box-button-destructive.type": *button_evidence
    "tokens.components.box-button-destructive.use": *button_evidence
    "tokens.components.box-button-outline.bg": *button_evidence
    "tokens.components.box-button-outline.border": *button_evidence
    "tokens.components.box-button-outline.fg": *button_evidence
    "tokens.components.box-button-outline.height": *button_evidence
    "tokens.components.box-button-outline.radius": *button_evidence
    "tokens.components.box-button-outline.states": *button_evidence
    "tokens.components.box-button-outline.type": *button_evidence
    "tokens.components.box-button-outline.use": *button_evidence
    "tokens.components.box-button-primary.bg": *button_evidence
    "tokens.components.box-button-primary.fg": *button_evidence
    "tokens.components.box-button-primary.height": *button_evidence
    "tokens.components.box-button-primary.radius": *button_evidence
    "tokens.components.box-button-primary.states": *button_evidence
    "tokens.components.box-button-primary.type": *button_evidence
    "tokens.components.box-button-primary.use": *button_evidence
    "tokens.components.capsule-button.bg": &capsule_evidence { surface_id: capsule-button, source_id: capsule-button-doc, method: official-doc, captured: "2026-07-11" }
    "tokens.components.capsule-button.fg": *capsule_evidence
    "tokens.components.capsule-button.radius": *capsule_evidence
    "tokens.components.capsule-button.states": *capsule_evidence
    "tokens.components.capsule-button.type": *capsule_evidence
    "tokens.components.capsule-button.use": *capsule_evidence
    "tokens.components.notification-badge.bg": &badge_evidence { surface_id: badge, source_id: badge-doc, method: official-doc, captured: "2026-07-11" }
    "tokens.components.notification-badge.fg": *badge_evidence
    "tokens.components.notification-badge.radius": *badge_evidence
    "tokens.components.notification-badge.type": *badge_evidence
    "tokens.components.notification-badge.use": *badge_evidence
    "tokens.components.popup.bg": &popup_evidence { surface_id: popup, source_id: popup-doc, method: official-doc, captured: "2026-07-11" }
    "tokens.components.popup.fg": *popup_evidence
    "tokens.components.popup.states": *popup_evidence
    "tokens.components.popup.type": *popup_evidence
    "tokens.components.popup.use": *popup_evidence
    "tokens.components.tabs.bg": &tabs_evidence { surface_id: tabs, source_id: tabs-doc, method: official-doc, captured: "2026-07-11" }
    "tokens.components.tabs.border": *tabs_evidence
    "tokens.components.tabs.fg": *tabs_evidence
    "tokens.components.tabs.states": *tabs_evidence
    "tokens.components.tabs.type": *tabs_evidence
    "tokens.components.tabs.use": *tabs_evidence
    "tokens.components.text-input.bg": &input_evidence { surface_id: input, source_id: input-doc, method: official-doc, captured: "2026-07-11" }
    "tokens.components.text-input.border": *input_evidence
    "tokens.components.text-input.fg": *input_evidence
    "tokens.components.text-input.states": *input_evidence
    "tokens.components.text-input.type": *input_evidence
    "tokens.components.text-input.use": *input_evidence
    "tokens.rounded.button": *button_evidence
    "tokens.rounded.button-large": *button_evidence
    "tokens.rounded.full": *capsule_evidence
    "tokens.shadow.flat": &ds_home_evidence { surface_id: ds-home, source_id: ds-home-doc, method: official-doc, captured: "2026-07-11" }
    "tokens.spacing.card-margin": &layout_evidence { surface_id: layout, source_id: layout-doc, method: official-doc, captured: "2026-07-11" }
    "tokens.spacing.gutter-2-column": *layout_evidence
    "tokens.spacing.gutter-3-column": *layout_evidence
    "tokens.spacing.gutter-4-column": *layout_evidence
    "tokens.spacing.screen-margin": *layout_evidence
    "tokens.typography.body-1.size": &typography_evidence { surface_id: typography, source_id: typography-doc, method: official-doc, captured: "2026-07-11" }
    "tokens.typography.body-1.use": *typography_evidence
    "tokens.typography.body-1.weight": *typography_evidence
    "tokens.typography.body-2.size": *typography_evidence
    "tokens.typography.body-2.use": *typography_evidence
    "tokens.typography.body-2.weight": *typography_evidence
    "tokens.typography.body-4.size": *typography_evidence
    "tokens.typography.body-4.use": *typography_evidence
    "tokens.typography.body-4.weight": *typography_evidence
    "tokens.typography.family.display": &home_evidence { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-07-11" }
    "tokens.typography.family.sans": *typography_evidence
    "tokens.typography.heading-1.size": *typography_evidence
    "tokens.typography.heading-1.use": *typography_evidence
    "tokens.typography.heading-1.weight": *typography_evidence
    "tokens.typography.heading-2.size": *typography_evidence
    "tokens.typography.heading-2.use": *typography_evidence
    "tokens.typography.heading-2.weight": *typography_evidence
    "tokens.typography.marketing-hero.size": *home_evidence
    "tokens.typography.marketing-hero.use": *home_evidence
    "tokens.typography.marketing-hero.weight": *home_evidence
    "tokens.typography.marketing-service.lineHeight": *home_evidence
    "tokens.typography.marketing-service.size": *home_evidence
    "tokens.typography.marketing-service.use": *home_evidence
    "tokens.typography.marketing-service.weight": *home_evidence
    "tokens.typography.title-1.size": *typography_evidence
    "tokens.typography.title-1.use": *typography_evidence
    "tokens.typography.title-1.weight": *typography_evidence
    "tokens.typography.title-3.size": *typography_evidence
    "tokens.typography.title-3.use": *typography_evidence
    "tokens.typography.title-3.weight": *typography_evidence

tokens:
  source: reconciled
  extracted: "2026-07-11"
  note: "LINE Messenger product UI uses OS system fonts; public marketing and design-system headings use loaded LINESeed. The official v3.5 palette defines #06c755, replacing the legacy #07b53b value. LY corporate chrome is a separate domain and is not mixed into Messenger tokens."
  colors:
    primary: "#06c755"
    android-primary: "#4cc764"
    canvas: "#ffffff"
    foreground: "#000000"
    text-secondary: "#616161"
    text-muted: "#949494"
    border: "#e8e8e8"
    outline: "#efefef"
    action-blue: "#638dff"
    danger: "#ff334b"
    on-primary: "#ffffff"
  typography:
    family: { sans: "System", display: "LINESeed" }
    marketing-hero: { size: 70, weight: 700, use: "Public line.me Life on LINE heading" }
    marketing-service: { size: 60, weight: 700, lineHeight: 1.334, use: "Public line.me Messenger and Services headings" }
    heading-1: { size: 24, weight: 900, use: "Messenger product heading 1; official Heavy role" }
    heading-2: { size: 17, weight: 700, use: "Messenger product heading 2" }
    title-1: { size: 23, weight: 700, use: "Messenger product title 1" }
    title-3: { size: 16, weight: 500, use: "Messenger product title 3; Medium or Semibold" }
    body-1: { size: 16, weight: 400, use: "Messenger primary body" }
    body-2: { size: 14, weight: 400, use: "Messenger secondary body" }
    body-4: { size: 12, weight: 400, use: "Minimum recommended Messenger body role" }
  spacing:
    gutter-4-column: 5
    gutter-3-column: 8
    gutter-2-column: 9
    screen-margin: 16
    card-margin: 16
  rounded: { button: 5, button-large: 6, full: 9999 }
  shadow:
    flat: "none"
  components_harvested: true
  components:
    box-button-primary: { type: button, bg: "#06c755", fg: "#ffffff", radius: "5px", height: "36px", states: "active, inactive, pressed, loading, on, off", use: "Primary general action; official medium box-button geometry" }
    box-button-destructive: { type: button, bg: "#ff334b", fg: "#ffffff", radius: "5px", height: "36px", states: "active, inactive, pressed, loading", use: "Delete, replace, remove, and other destructive actions" }
    box-button-outline: { type: button, bg: "#ffffff", fg: "#000000", border: "1px solid #efefef", radius: "5px", height: "36px", states: "active, inactive, pressed, loading, off", use: "Secondary or turned-off box-button action" }
    capsule-button: { type: button, bg: "#06c755", fg: "#ffffff", radius: "9999px", states: "active, pressed; disappears after completing its scroll action", use: "Move to new content above or below the current scroll position" }
    text-input: { type: input, bg: "#ffffff", fg: "#000000", border: "0 0 1px solid #949494", states: "inactive, focused #06c755, typing, completed, error #ff334b, disabled", use: "Text, password, and code input with required underline and reset action" }
    popup: { type: dialog, bg: "#ffffff", fg: "#000000", states: "light, dark, one-button, two-button, three-button, affirmative-disabled", use: "Important information or user decision with content, action area, and scrim" }
    tabs: { type: tab, bg: "transparent", fg: "#000000", border: "selected indicator uses #06c755", states: "selected, unselected, pressed", use: "Text, box, or icon grouping at the top of dependent content" }
    notification-badge: { type: badge, bg: "#06c755", fg: "#ffffff", radius: "9999px", use: "N, dot, or number update badge; red is reserved for GNB placement" }
---

# Design System Inspiration of LINE

## 1. Visual Theme & Atmosphere

LINE is a communication product whose identity begins with helping people stay close, then extends into services that support everyday life. Its current evidence has two related but distinct public design surfaces. The consumer marketing site uses large `LINESeed` display typography and lifestyle imagery, while the official LINE Design System for Messenger specifies OS-native system fonts, compact product type roles, a structured color palette, and reusable interaction patterns. They share LINE Green and a direct, approachable tone, but their typography and density must not be collapsed into one generic marketing system.

The July 11 capture covered the Korean consumer site plus seven official design-system routes: home, color, typography, layout, box buttons, inputs, and popups. It found 8 surfaces, 41 color candidates, 10 font families, 45 component variants, five tab interactions, and coverage 87/100. `system-ui` was visibly used on 682 elements across the design-system pages; loaded `LINESeed` appeared on 107 elements. The previous `SFPro` canonical claim is no longer sufficient: `SFPro` remained unresolved on the marketing page, while declared `SF Pro Text` and `SF Pro Display` had zero observed usage.

Current product identity is anchored by official LINE Green `#06c755`, white `#ffffff`, black `#000000`, and a deep gray scale. The official component system is broader than pills: box buttons, capsule buttons, inputs, popups, tabs, badges, sheets, navigation, lists, cards, and feedback components each have defined anatomy, usage, and state behavior.

## 2. Color Palette & Roles

### Official Messenger palette
- **LINE Green** — `#06c755`: brand color and primary action.
- **Android Green** — `#4cc764`: Android display-environment variant.
- **White** — `#ffffff`: canvas and on-dark/on-brand content.
- **Black** — `#000000`: primary foreground.
- **Gray 650** — `#616161`: recurring secondary text in all eight captured surfaces.
- **Gray 500** — `#949494`: muted navigation, inactive labels, and input underline reference.
- **Gray 250** — `#e8e8e8`: repeated structural border.
- **Gray 200** — `#efefef`: official outline-button asset border.
- **Blue 500** — `#638dff`: documented button-background and large-tooltip blue.
- **Red 400** — `#ff334b`: destructive action and error state.

The official color guide does not permit arbitrary opacity changes except for LINE Black and LINE White. Text should generally use palette values numbered 500 or higher to maintain at least 3:1 contrast; Gray 400 is restricted to the least important text. Highlighted colors are generated by documented HSV rules, and disabled labels use 40% treatment according to foreground context.

The previous `#07b53b` green was removed. It appeared in an older live tab capture, but the current v3.5 official palette and current product metadata identify `#06c755` as LINE Green.

## 3. Typography Rules

### Font evidence boundary

| Evidence class | Resolution |
|---|---|
| Official product-use | Messenger guidance specifies OS-native system fonts by platform. |
| Live surface-use | Design-system pages use `system-ui`; marketing and documentation display roles use loaded `LINESeed`. |
| Official distributed asset | LINESeed is official, but distribution does not make it the Messenger UI default. |
| Declared-only | `SF Pro Text` and `SF Pro Display` declarations had zero observed usage. |
| Unresolved | `SFPro` on the marketing surface had no resolved loaded face. |

Specimen availability is separate for system UI and LINESeed; neither is a substitute for the other.

### Product UI

The official Messenger typography guideline explicitly uses each operating system's system font. It lists SF Pro Text/Display and localized iOS fonts such as Hiragino Sans, PingFang, Apple SD Gothic Neo, and Thonburi. These are platform mappings, not a license to hard-code SF Pro as the universal LINE font.

| Role | Size | Weight |
|---|---:|---|
| Heading 1 | 24pt | Heavy |
| Heading 2 | 17pt | Bold |
| Heading 3 | 14pt | Bold |
| Heading 4 | 13pt | Regular |
| Title 1 | 23pt | Bold |
| Title 2 | 19pt | Semibold or Bold |
| Title 3 | 16pt | Medium or Semibold |
| Title 4 | 15pt | Medium or Semibold |
| Title 5 | 14pt | Medium or Semibold |
| Body 1 | 16pt | Regular |
| Body 2 | 14pt | Regular |
| Body 3 | 13pt | Regular |
| Body 4 | 12pt | Regular |

Sizes smaller than 12pt are not recommended. The scale is recommended rather than mandatory so designers can combine roles when content hierarchy requires it.

### Marketing and documentation

The public consumer surface uses loaded `LINESeed` for major display roles: “Life on LINE” is 70px/700, while “Messenger APP” and “Services” are 60px/700. The design-system documentation also uses LINESeed for 48px/900 page titles and 32px/700 section titles, while its explanatory body uses system-ui.

## 4. Component Stylings

### Box Button

**Primary Medium**
- Type: button
- Background: `#06c755`
- Text: `#ffffff`
- Radius: 5px
- Height: 36px
- States: active, inactive, pressed, loading, on, off
- Use: the most important general action in content or the bottom action area

**Destructive Medium**
- Type: button
- Background: `#ff334b`
- Text: `#ffffff`
- Radius: 5px
- Height: 36px
- States: active, inactive, pressed, loading
- Use: delete, replace, remove, and other destructive actions

**Outline Medium**
- Type: button
- Background: `#ffffff`
- Text: `#000000`
- Border: `1px solid #efefef`
- Radius: 5px
- Height: 36px
- States: active, inactive, pressed, loading, off
- Use: secondary action or turned-off state

Official SVG assets expose a progression from approximately 29–30px small controls through 36px medium, 43px large, and 48px extra-large controls, using 5px radius at medium and 6px at large/extra-large.

### Capsule Button

**Green**
- Type: button
- Background: `#06c755`
- Text: `#ffffff`
- Radius: 9999px
- States: active, pressed
- Use: scroll to newly available content above or below the current position, then disappear

### Text Input

**Underline Input**
- Type: input
- Background: `#ffffff`
- Text: `#000000`
- Border: bottom underline using Gray 500
- Focus: underline changes to `#06c755`
- Error: underline, cursor, and helper text change to `#ff334b`
- States: inactive, focused, typing, completed, error, disabled
- Use: text, password, or code entry with reset action and optional label/helper/counter

### Popup

**Messenger Modal**
- Type: dialog
- Background: `#ffffff`
- Text: `#000000`
- States: light, dark, one-button, two-button, three-button, affirmative-disabled
- Use: important information or a user decision with content area, action area, and scrim

The action area must include a dismissal path. Affirmative actions sit right or above dismissive actions. Only one popup may be exposed at a time.

### Tabs

**Content Grouping**
- Type: tab
- Background: transparent
- Text: `#000000`
- Active: selected indicator uses `#06c755`
- States: selected, unselected, pressed
- Use: text, box, or icon grouping at the top of dependent content

Only one tab can be active. Tabs may scroll horizontally when all items do not fit; fixed tabs divide the width into two to four columns.

### Notification Badge

**Update Badge**
- Type: badge
- Background: `#06c755`
- Text: `#ffffff`
- Radius: 9999px
- Use: N, dot, or number notification; red is reserved for GNB placement

---

**Verified:** 2026-07-11 (eight-surface collector plus in-app visual verification)
**Tier 1 sources:** https://www.line.me/ko/ , https://designsystem.line.me/ , https://designsystem.line.me/LDSM/foundation/color/line-color-guide-ex-en/ , https://designsystem.line.me/LDSM/foundation/typography-ex-en/ , https://designsystem.line.me/LDSM/foundation/layout-ex-en/ , https://designsystem.line.me/LDSM/components/box-button-ex-en/ , https://designsystem.line.me/LDSM/components/capsule-button-ex-en/ , https://designsystem.line.me/LDSM/components/input-ex-en/ , https://designsystem.line.me/LDSM/components/popup-ex-en/ , https://designsystem.line.me/LDSM/components/tabs-ex-en/ , https://designsystem.line.me/LDSM/components/badge-ex-en/ , https://designsystem.line.me/about/design-principle-en , https://designsystem.line.me/about/line-voice-en , https://www.lycorp.co.jp/en/technology-design/design/
**Tier 2 sources:** https://getdesign.md/line returned “No designs found for line”; https://styles.refero.design/?q=LINE exposed no LINE-specific style result after top and bottom rendered-path inspection.
**Conflicts unresolved:** none

LY Corporation's corporate Design Style is retained as organizational context only. Its corporate chrome and values are not used as LINE Messenger component tokens.

## 5. Layout Principles

The official Messenger layout uses a common 16pt left and right screen margin and repeats 16pt inside cards. Its reference grid defines:

| Grid | Column width | Gutter | Margin |
|---|---:|---:|---:|
| 2 columns | 167pt | 9pt | 16pt |
| 3 columns | 109pt | 8pt | 16pt |
| 4 columns | 82pt | 5pt | 16pt |

When resolution increases, the guideline keeps the gutter and increases column count while maintaining proportional column widths. This is a product grid rule, not a claim about the wide marketing site's layout.

## 6. Depth & Elevation

The captured public and documentation surfaces are predominantly flat and reported `box-shadow: none`. Component hierarchy is expressed through color, borders, scrims, fixed placement, and content order.

A popup is elevated semantically in front of app content using a scrim. Sticky buttons sit above scrolling content but below dialogs and sheets. No reusable shadow value was published or reliably extracted, so the canonical shadow token remains `none` rather than an invented modal shadow.

## 7. Do's and Don'ts

### Do
- Use official `#06c755` LINE Green for primary Messenger actions.
- Use each OS's system font for product UI and LINESeed for verified marketing/display roles.
- Keep the primary task intuitive and visually dominant.
- Use one primary green or red box button per screen.
- Place affirmative popup actions on the right or above dismissive actions.
- Support multilingual labels and change horizontal controls to vertical when translation length requires it.
- Use green badges in content areas and red badges only in GNB placement.
- Preserve 16pt screen and card margins.

### Don't
- Hard-code SF Pro as the universal cross-platform LINE font.
- Use the legacy `#07b53b` as current LINE Green.
- Place more than one popup on screen.
- Disable the dismissive popup action while waiting for an affirmative selection.
- Expose nested tabs or connect tabs directly to bottom navigation.
- Repeat label text as placeholder text without adding guidance.
- Use capsule buttons in the center of content; place them at the top or bottom scroll boundary.
- Merge LY corporate charcoal chrome into Messenger tokens.

## 8. Responsive Behavior

LINE's official guidance is resolution-adaptive rather than breakpoint-specific. Gutters remain stable while the number of grid columns increases, and screen/card margins remain 16pt in the documented mobile grid.

Multilingual behavior is part of responsiveness. English, Japanese, Korean, Chinese, and Thai labels can vary substantially in length. Buttons and popups should switch from horizontal to vertical arrangements when translations would truncate action labels. Tabs can become horizontally scrollable, but labels remain single-line and the selected tab must be fully revealed.

No canonical CSS breakpoints were published in the inspected Messenger documents.

## 9. Agent Prompt Guide

### Product UI tokens
- Primary: `#06c755`
- Android primary: `#4cc764`
- Foreground: `#000000`
- Secondary text: `#616161`
- Muted: `#949494`
- Danger: `#ff334b`
- Product font: platform `System`
- Screen and card margin: 16pt
- Standard body: 16pt/Regular
- Minimum recommended body: 12pt/Regular

### Construction prompts
- “Build a LINE Messenger medium primary box button with `#06c755` fill, white text, 36px height, and 5px radius. Include active, inactive, pressed, and loading states.”
- “Build a LINE underline input with a Gray 500 default underline, green focused underline, red error underline/helper text, reset action, optional label, and password visibility toggle.”
- “Build a LINE popup with content, optional area, mandatory dismissal path, action area, and scrim. Keep affirmative action right or above dismissive action and allow only one popup.”
- “Build a LINE tab row with selected, unselected, and pressed states. Use a green selected indicator and enable horizontal scroll when localized labels do not fit.”

Treat the public 70px LINESeed headline as marketing typography. Do not transfer it into Messenger product screens.

## 10. Voice & Tone

The official LINE Voice defines three qualities:

1. **Clear** — remove unimportant information, prefer unambiguous language, and choose clarity over rigid consistency.
2. **Conversational** — translate complex concepts into the user's language, use active sentences, and treat buttons as the user's voice.
3. **Considerate** — avoid assumptions, focus on user goals, anticipate problems, and emphasize what users can do.

Official examples include “Keep it short,” “Buttons are the user's voice,” and “Use descriptive links instead of URLs paired with instructions.” These are current first-party writing rules, not inferred marketing tone.

## 11. Brand Narrative

LINE's current first-party design documentation frames its mission as closing the distance between information, services, and people. The core product priority is conversation: the official principle “Chat comes first” states that sharing messages with people closest to the user is central to LINE's values.

The public marketing site describes LINE as more than a messenger and as infrastructure for everyday life. This supports the product's broad service surface without requiring unverified name-origin, founding, or ownership mythology. LY Corporation is the current publisher of these documents, but its separate corporate visual system is not treated as Messenger UI.

That boundary is part of LINE's current design identity. The consumer brand can use LINESeed, lifestyle imagery, and expansive display copy, while Messenger relies on native type, compact roles, and predictable interaction patterns. Green and conversational clarity connect the surfaces; identical typography does not. Keeping those layers separate makes the reference useful for recreating a product flow without flattening the wider brand.

## 12. Principles

The official LINE Design Principles are:

1. **WE ≠ USERS.** Investigate what users actually need rather than assuming designer perspectives are universal.
   *UI implication:* validate tasks and localization with real usage evidence.

2. **Clear primary tasks.** Make primary tasks intuitive.
   *UI implication:* one primary action should dominate the screen and remain easy to identify.

3. **Chat comes first.** New features should reinforce conversation between people.
   *UI implication:* avoid features or flows that obscure the messaging core.

4. **Reliable design.** Pursue trustworthy, intuitive design for all ages and varied use cases.
   *UI implication:* prioritize clear states, accessibility, and predictable actions.

5. **A cohesive experience.** Design seamless flows across related screens.
   *UI implication:* components and terminology must remain consistent across journeys.

6. **Respect for legacy.** Phase beneficial changes carefully because users develop familiarity and unexpected workflows.
   *UI implication:* migration and redesign need compatibility and staged rollout plans.

## 13. Personas

No current first-party LINE persona definitions were found in the inspected public design-system documents. Supported task contexts include starting and maintaining a chat, reading notifications, sharing content, recovering from a communication error, and using localized interfaces across operating systems. Do not convert the broad global audience into fictional demographic profiles inside the canonical reference. Persona research should be stored separately with market, language, task, device, and observed behavior.

## 14. States

| Component | Official states |
|---|---|
| Box button | Active, inactive, pressed, loading, on, off |
| Text input | Inactive, focused, typing, completed, error, disabled |
| Password input | Inactive, focused, typing visible, typing hidden |
| Code input | Initial focused, typing, submitted, error |
| Capsule button | Active, pressed, disappears after scroll completion |
| Tabs | Selected, unselected, pressed |
| Popup | Light, dark, one/two/three actions, affirmative disabled |
| Badge | N, dot, number; appears on update and dismisses by defined action |
| Destructive action | Solid red; may be affirmative depending on context |
| Disabled label | 40% treatment according to white or Gray 900 foreground rules |

The collector safely exercised five official documentation tab controls and recorded selected/tab-selected variants. It did not execute form submission, destructive actions, or popup actions.

## 15. Motion & Easing

The inspected documents define interaction outcomes but do not publish canonical duration or easing tokens.

- Capsule buttons scroll to new content and disappear after the destination is reached.
- Tabs navigate through press or content swipe, subject to documented gesture-priority rules.
- Box buttons may show loading progress for save/download-like actions.
- Code inputs submit automatically after the final digit.
- Popup content can scroll while its button area remains fixed.

`[FILL IN: capture computed transition-duration, transition-timing-function, animation-duration, and reduced-motion behavior before adding motion tokens.]`
