---
name: Taiwan Railway
colors:
  primary: '#256fa0'
  action-hover: '#009bad'
  foreground: '#333333'
  canvas: '#ffffff'
  focus-ring: '#ff0004'
  quick-label: '#4d4d4d'
  quick-icon: '#27327b'
  quick-hover: '#007bff'
  control-border: '#b1b1b1'
  secondary-pressed: '#eeeeee'
  gradient-top: '#fbfbfb'
  gradient-bottom: '#efefef'
  train-query-tab: '#007a91'
  transfer-query-tab: '#9e4000'
  priority-background: '#ffd6d6'
  priority-ink: '#c70000'
typography:
  button:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 21.3333px
    use: 查詢 and 隱藏輪播 controls; font family unresolved
  navigation:
    fontSize: 18px
    fontWeight: 400
    lineHeight: 42px
    use: 鐵道旅遊 main navigation link
  station-input:
    fontSize: 14.4px
    fontWeight: 400
    lineHeight: 23.04px
    use: '出發站 input #startStation'
  quick-link:
    fontSize: 16px
    fontWeight: 700
    lineHeight: 19.2px
    letterSpacing: 0.05px
    use: 個人訂票 fixed service link in the states capture
rounded:
  none: 0px
  button: 6px
components:
  query:
    type: button
    backgroundColor: '#256fa0'
    textColor: '#ffffff'
    rounded: 6px
    height: 43.3px
    padding: 10px 16px
    typography: 16px / 400
    hover: 'background #009bad'
    pressed: 'background #009bad; inset shadow rgba(0, 0, 0, 0.125) 0px 3px 5px 0px inset'
    use: '查詢 submit control in #searchbox1; measured width 260px. Keyboard focus changes its label to #333333 and draws a browser auto outline; no focus token is published.'
  carousel-toggle:
    type: button
    textColor: '#333333'
    border: '#b1b1b1'
    rounded: 6px
    height: 43.3px
    padding: 10px 16px
    typography: 16px / 400
    pressed: 'background #eeeeee; background-image none; inset shadow rgba(0, 0, 0, 0.125) 0px 3px 5px 0px inset; outline 4px dotted #ff0004 at -2px offset'
    focus: 'outline 4px dotted #ff0004; outline-offset -2px'
    use: '隱藏輪播 secondary control, width 1170px, on the white page. Its transparent background-color sits beneath a vertical #fbfbfb 0%, #ffffff 20%, #ffffff 65%, #efefef 100% gradient. Hover had no computed change within the probe scope.'
  travel-nav:
    type: button
    textColor: '#ffffff'
    rounded: 0px
    height: 42px
    padding: 0px
    typography: 18px / 400
    hover: 'background #ffffff; foreground #256fa0; bottom border 4px solid #256fa0; height 46px'
    pressed: 'hover appearance plus outline 4px dotted #ff0004 at -2px offset'
    focus: 'outline 4px dotted #ff0004; outline-offset -2px'
    use: '鐵道旅遊 link on the #256fa0 main-navigation bar; own background is transparent at rest. Only the outline is retained as a focus-specific change: the other focus-pass changes persisted after blur.'
  departure:
    type: input
    backgroundColor: '#ffffff'
    textColor: '#333333'
    rounded: 0px
    height: 22px
    padding: 1px 2px
    typography: 14.4px / 400
    pressed: 'outline 4px dotted #ff0004; outline-offset 0px'
    focus: 'outline 4px dotted #ff0004; outline-offset 0px'
    use: '出發站 search input #startStation; width 110px, no own border, inside a larger white station-picker wrapper. Hover had no computed change within the probe scope.'
  more-news:
    type: button
    textColor: '#256fa0'
    rounded: 0px
    height: 24px
    padding: 0px
    typography: 18px / 400
    pressed: 'outline 4px dotted #ff0004; outline-offset -2px'
    focus: 'outline 4px dotted #ff0004; outline-offset -2px'
    use: 更多消息 archive link on white; own background is transparent. Width 117px includes a 24px square plus pseudo-element. Hover had no computed change within the probe scope.
  quick-booking:
    type: button
    textColor: '#4d4d4d'
    rounded: 0px
    height: 51.2px
    padding: 0px
    typography: 16px / 700
    hover: 'foreground #007bff; ::before background #27327b to #007bff'
    pressed: 'hover appearance plus outline 4px dotted #ff0004 at -2px offset'
    focus: 'outline 4px dotted #ff0004; outline-offset -2px'
    use: 個人訂票 link in the fixed service rail; width 74px, own background transparent over a measured rgba(255, 255, 255, 0.9) backing. The 32px square icon is a CSS mask.
omitted:
  - section: spacing
    reason: No verified values in current evidence.
---

# Design System Inspiration of Taiwan Railway

## Overview

### Visual Theme & Atmosphere

Taiwan Railway's passenger portal brings timetable searches, individual ticket booking and rail travel into one service homepage. The operator is **國營臺灣鐵路股份有限公司**. Its [official timeline](https://www.railway.gov.tw/tra-tip-web/adr/about-timeline?selectIndex=2) records the company's formal launch on 1 January 2024; its [vision page](https://www.railway.gov.tw/tra-tip-web/adr/AdrI190/AdrI190/view?grandParentTitle=1&parentTitle=3) puts safety, service performance and punctuality among its stated goals.

The measured [homepage](https://www.railway.gov.tw/tra-tip-web/tip) combines a white header and blue navigation with large train photographs, a dense timetable form and a fixed service rail. The footer adds small illustrated trains. The visual character comes from this close pairing of railway imagery and practical controls: a blue query button, square white station inputs and strongly differentiated query tabs. Main navigation and the query button share **`#256fa0`**; the button changes to **`#009bad`** on hover.

The company is also changing its web address. Its [20 May 2026 announcement](https://www.railway.gov.tw/tra-tip-web/tip/tip009/tip911/newsDtl?newsNo=8ae4cac29e3c84cf019e43038d830c4e) says `www.trc.com.tw` starts operating alongside `www.railway.gov.tw` on 1 July 2026, with the old address expected to stop operating on 1 January 2027. This reference measures the Traditional Chinese page at `www.railway.gov.tw/tra-tip-web/tip` (`lang="zh-Hant"`); the capture did not redirect to another edition.

### Brand Narrative

The company's [2024 timeline](https://www.railway.gov.tw/tra-tip-web/adr/about-timeline?selectIndex=2) connects its formal company launch with the publication of a book documenting 136 years of railway history. Its [current company introduction](https://www.railway.gov.tw/tra-tip-web/adr/AdrI190/AdrI190/view?grandParentTitle=15&parentTitle=18) presents low-carbon transport and digital transformation as areas of development. The homepage's train photographs and illustrated footer are observed expressions on this passenger surface; no source was found attributing the measured palette or typography to a rebrand.

### Principles

The [official vision page](https://www.railway.gov.tw/tra-tip-web/adr/AdrI190/AdrI190/view?grandParentTitle=1&parentTitle=3) lists six core values: safety, accuracy, service, innovation, unity and honour. Its four operating goals are safety, better service, sustainable operations and a happy enterprise. These are company statements; no separately published web-interface principles were verified.

### Personas

No formal personas were verified.

## Colors

These are measured interface colours, with descriptive roles assigned for this reference. They are not published company token names. The root custom-property census was empty; direct reads of the 15 distinct linked stylesheets also found no custom-property declarations.

| Role | Value | Observed use |
|---|---|---|
| Primary | `#256fa0` | Query button; backing of the main navigation; news archive link |
| Action hover | `#009bad` | Query button hover and held pointer press |
| Foreground | `#333333` | Station-input text and carousel-toggle label; also the declared `body` colour in `tip_normal.css` |
| Canvas / inverse label | `#ffffff` | White page and field surfaces; query-button label at rest |
| Authored focus ring | `#ff0004` | Dotted outline on five sampled controls, including the departure field |
| Quick-service label | `#4d4d4d` | Individual-booking link at rest |
| Quick-service icon | `#27327b` | Booking link's masked `::before` icon at rest |
| Quick-service hover | `#007bff` | Booking label and masked icon on hover / press |
| Secondary border | `#b1b1b1` | Carousel-toggle border |
| Secondary press | `#eeeeee` | Carousel-toggle pressed fill |
| Gradient ends | `#fbfbfb`, `#efefef` | Carousel-toggle gradient, with `#ffffff` at 20% and 65% |
| Train-number query | `#007a91` | Inactive train-dynamics query tab |
| Transfer query | `#9e4000` | Inactive Taiwan Railway / high-speed-rail transfer tab |
| Priority news | `#ffd6d6`, `#c70000` | Highlighted news rows and their links |

The active timetable panel is **`rgba(0, 0, 0, 0.9)`**, rather than an opaque-black token. The booking rail's measured backing is **`rgba(255, 255, 255, 0.9)`**. Keep these alpha values as observed.

The survey's paragraph-ink samples were white and cyan, both from the open cookie notice and its link. They do not establish the colour of ordinary article paragraphs. The foreground role above is grounded separately in the rendered input and the site's declared `body` rule.

## Typography

Font evidence is separated by class:

- **Official product use:** the opened company and legal pages did not document a product typeface.
- **Live-loaded:** `document.fonts` reported **Glyphicons Halflings** and **FontAwesome**, both normal weight/style. These are framework icon faces, excluded from UI font-family tokens. Their linked Bootstrap and Font Awesome stylesheets declare font sources under the site's CDN `static/fonts/` directory; the selected network format was not recorded.
- **Official distributed assets:** no company text-font asset or font licence was verified. No font files were fetched.
- **Declared-only:** the computed body, `h1` and first-button stack was `黑體-繁, 頻方-繁, "Heiti TC", 微軟正黑體, "Microsoft JhengHei", Arial, serif`. The quick-booking control in the states capture declared `Noto Sans TC`, also present in `nav-quick.css`. None of these text faces appeared in the survey's loaded-face list. They receive no specimen and no typography family token.
- **Unresolved:** the actual text face used for each script and the availability of the declared local faces. **Substitute: none chosen.**

Retain the measured metrics independently of the missing family:

| Control | Size / weight | Line height | Letter spacing |
|---|---|---|---|
| Query and carousel toggle | 16px / 400 | 21.3333px | normal |
| Main navigation link | 18px / 400 | 42px | normal |
| Departure input | 14.4px / 400 | 23.04px | normal |
| More-news link | 18px / 400 | 14.4px | normal |
| Quick-booking link, states capture | 16px / 700 | 19.2px | 0.05px |

The survey recorded the booking link at weight 400 with the main declared stack; the states capture recorded weight 700 and `Noto Sans TC`. The table and component metadata use the states identity, without treating that declaration as proof of a loaded font.

## Layout

At the measured 1440 × 1000 viewport, the carousel and its toggle are 1170px wide. A seven-item navigation row sits above the carousel, followed by three equal query tabs. The timetable form places departure, arrival, date, time range and query action in one horizontal group. News appears as compact rows with a category, a truncated headline and a date. Service shortcuts sit in a fixed right-hand rail.

These are desktop observations. No grid or spacing scale is inferred from them. Measured control padding is 10px 16px on the two large buttons, 1px 2px on the input and 0px on the sampled links.

### Responsive Behavior

Mobile layouts and breakpoint behaviour were not measured.

## Elevation & Depth

All six sampled controls have `box-shadow: none` at rest. The query button and carousel toggle acquire the same pressed inset shadow: `rgba(0, 0, 0, 0.125) 0px 3px 5px 0px inset`. The light gradient on the carousel toggle supplies its unpressed surface detail. No site-wide elevation scale was verified.

## Motion & Easing

The quick-booking link computes `transition: color 0.3s ease-out 0s`. The other five sampled controls compute `transition: all 0s ease 0s`. No broader motion scale was verified.

---

Measured 2026-11-09 using the capture service's fresh worker browser, `zh-TW`, 1440 × 1000. Full raw survey and state evidence, consent limitations, CSS provenance and short narrative quotations are recorded in `verification.md` and `report.md`.

## Components

All six controls were identified and measured on the desktop homepage. The cookie notice remained open: its only action was “接受並關閉”, which was not activated. `hideOverlays: true` was enabled for pointer testing, but the result recorded no hidden overlays; every pointer target was reached after scrolling.

| Key / control | Measured size | Radius | Padding | Rest appearance |
|---|---|---|---|---|
| `query` — 查詢 | 260 × 43.3px | 6px | 10px 16px | `#256fa0` fill, `#ffffff` label; 1px transparent border |
| `carousel-toggle` — 隱藏輪播 | 1170 × 43.3px | 6px | 10px 16px | Vertical light gradient, `#333333` label, 1px solid `#b1b1b1` border |
| `travel-nav` — 鐵道旅遊 link | 166 × 42px | 0px | 0px | Transparent over the blue navigation bar; white label; no own border |
| `departure` — 出發站 input | 110 × 22px | 0px | 1px 2px | White fill, dark label; no own border |
| `more-news` — 更多消息 link | 117 × 24px | 0px | 0px | Transparent on white, blue text and a 24px square plus pseudo-element |
| `quick-booking` — 個人訂票 link | 74 × 51.2px | 0px | 0px | Transparent on the translucent-white service rail; grey label and a 32px square masked icon |

The carousel toggle's raw background image is `linear-gradient(rgb(251, 251, 251) 0%, rgb(255, 255, 255) 20%, rgb(255, 255, 255) 65%, rgb(239, 239, 239) 100%)`. Its background colour itself is transparent. The departure field is only the text input inside a larger station-picker wrapper; do not apply its 22px height to that entire wrapper.

No standalone content-card control was identified in the rendered homepage survey.

### States

| Control | Hover | Held pointer press | Keyboard focus |
|---|---|---|---|
| Query | Fill becomes `#009bad` | Same fill plus inset shadow; browser `auto` outline observed | Label becomes `#333333`; browser `auto` outline, excluded from focus tokens |
| Carousel toggle | No computed change within scope | Gradient disappears; fill becomes `#eeeeee`; inset shadow and 4px dotted red outline, offset −2px | 4px dotted red outline, offset −2px |
| Travel navigation | White fill, blue label, 4px blue bottom border; height 42 → 46px | Hover appearance plus 4px dotted red outline, offset −2px | Only the red outline is isolated as focus-specific; the other changes persisted after blur |
| Departure input | No computed change within scope | 4px dotted red outline, offset 0px | Same outline; it clears after blur |
| More-news link | No computed change within scope | 4px dotted red outline, offset −2px | Same outline; it clears after blur |
| Quick-booking link | Label and masked icon become `#007bff` | Hover appearance plus 4px dotted red outline, offset −2px | Red outline only; label and icon retain their rest colours |

Every hover matched `:hover`; every press matched `:active`; every focus state came from Tab. “No computed change” covers the control, its pseudo-elements, zero descendants and three ancestor levels with their pseudo-elements; the carousel toggle comparison has two ancestor levels. It does not cover unrelated siblings or the pixels inside an external mask asset. Disabled, validation, submission-result and selected-tab transitions were not measured.

## Do's and Don'ts

- Preserve the blue query action and its teal hover / pressed fill.
- Keep the measured 6px button corners distinct from square station inputs and navigation links.
- Retain the authored dotted-red focus outline on the controls where it was measured.
- Keep the navigation hover's extra 4px bottom border and resulting 46px height if reproducing this exact control.
- Do not turn a declared text stack into a verified loaded font or insert a substitute font specimen.
- Do not treat the cookie-notice action as a product component.

## Voice & Tone

The interface uses short task labels: “查詢”, “個人訂票” and “更多消息”. The domain-change announcement addresses passengers politely with “敬請旅客多加利用新網址”. These are observed examples of task wording and service communication, rather than a published voice guide.

## Agent Prompt Guide

Build a white railway-service page with a blue navigation bar, train photography, three query tabs and a compact timetable form. Use the measured component geometry and state changes below. Leave the unresolved text-font family unset.

Example: “Create the departure input at 110 × 22px with white fill, dark text, square corners, 1px 2px padding and 14.4px / 400 type metrics. On keyboard focus draw a 4px dotted `#ff0004` outline at 0px offset; place it within the larger station-picker wrapper.”

Example: “Create a 260 × 43.3px query button with 6px radius, 10px 16px padding, 16px / 400 type metrics and a `#256fa0` fill. Hover changes the fill to `#009bad`; press adds the measured inset shadow.”
