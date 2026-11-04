---
name: Daiwa Securities
colors:
  primary: '#680717'
  foreground: '#333333'
  background: '#ffffff'
  surface-muted: '#f4f4f4'
  secondary-foreground: '#777777'
  card-title-interactive: '#d9340a'
  nav-border: '#d3cecf'
  nav-border-interactive: '#c4919a'
  detail-interactive: '#560802'
  account-gradient-start: '#c6911f'
  account-gradient-end: '#d1a74c'
  login-gradient-start: '#c22112'
  login-gradient-end: '#cb4235'
  wealth-surface: '#d6dce1'
  input-border: '#c1c1c1'
  input-foreground: '#000000'
typography:
  cta:
    fontSize: 18px
    fontWeight: 700
    use: Header account-opening and login link labels; computed metrics only.
  navigation:
    fontSize: 15px
    fontWeight: 500
    use: Header NISA subnavigation link; computed metrics only.
  ui:
    fontSize: 16px
    fontWeight: 400
    use: Main search input and wealth-management details link; computed metrics only.
  card-title:
    fontSize: 24px
    fontWeight: 400
    use: Visible p.features-list-name inside the NISA card; computed metrics only.
rounded:
  anchor-square: 0px
  small: 3px
  medium: 4px
components:
  button-account-open:
    type: button
    textColor: '#ffffff'
    rounded: 3px
    height: 57px
    padding: 16px 8px 14px
    typography: 18px / 700
    hover: 'opacity: 0.7'
    pressed: 'opacity: 0.7; no additional change from hover'
    use: 'Header link labelled 口座開設, 186px wide. Transparent background-color on white, with background-image linear-gradient(360deg, #c6911f 0%, #d1a74c 100%). Native auto outline excluded.'
  button-login:
    type: button
    textColor: '#ffffff'
    rounded: 3px
    height: 57px
    padding: 16px 8px 14px
    typography: 18px / 700
    hover: 'opacity: 0.7'
    pressed: 'opacity: 0.7; no additional change from hover'
    use: 'Header link labelled ログイン, 186px wide. Transparent background-color on white, with background-image linear-gradient(360deg, #c22112 0%, #cb4235 100%). Native auto outline excluded.'
  button-nav-nisa:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#680717'
    border: '1px solid #d3cecf'
    rounded: 4px
    height: 26px
    padding: 0px 14px
    typography: 15px / 500
    hover: 'border-color: #c4919a; box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 3px -1px'
    pressed: 'border-color: #c4919a; box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 3px -1px; no additional change from hover'
    focus: 'border-color: #c4919a; box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 3px -1px'
    use: NISA link in header product subnavigation, 66.6px wide. Focus records the authored border and shadow changes only; the accompanying browser auto outline is excluded.
  card-nisa:
    type: card
    textColor: '#333333'
    height: 349.2px
    padding: 0px
    typography: 24px / 400
    hover: 'title color: #d9340a; thumbnail opacity: 0.7; thumbnail transform: matrix(1.1, 0, 0, 1.1, 0, 0); parent li box-shadow: rgba(0, 0, 0, 0.25) 0px 2px 20px 5px'
    pressed: same measured title, thumbnail and parent shadow changes as hover
    use: 'Main NISAで資産形成 card link, 285px wide. fg and font describe the visible title child; the anchor itself is 16px/400 with a 0px radius and transparent background-color on white. The outer shell radius is unresolved and omitted. Parent rest shadow: rgba(0, 0, 0, 0.07) 0px 2px 20px 5px. Scroll-reveal persistence and the native focus ring are excluded.'
  button-wealth-detail:
    type: button
    textColor: '#333333'
    border: '1px solid #333333'
    rounded: 4px
    height: 44.8px
    padding: 11px 38px
    typography: 16px / 400
    hover: 'color: #560802; border-color: #560802'
    pressed: 'color: #560802; border-color: #560802; no additional change from hover'
    use: 'Main wealth-management link labelled 詳細はこちら, 174px wide. Transparent background-color over the section''s #d6dce1 background and background image. Native auto outline excluded.'
omitted:
  - section: spacing
    reason: No verified values in current evidence.
---

# Design System Inspiration of Daiwa Securities

## Overview

### Visual Theme & Atmosphere

Daiwa Securities is a Tokyo-based securities company whose stated business includes securities trading, brokerage and underwriting. Its company profile gives the present company's opening date as 26 April 1999. The group's history reaches back to Fujimoto Bill Broker in 1902 and records the creation of Daiwa Securities through a merger in 1943; these are group-history dates, distinct from the present company's opening. [Company information](https://www.daiwa.jp/company/information/), [group history](https://www.daiwa-grp.jp/about/history.html).

The captured homepage combines a white canvas, dark burgundy navigation, gold account-opening links and red login links. Compact product links sit beneath a larger navigation row; a wide promotional carousel is followed by help, search and cards for NISA, discretionary asset management and inheritance. This is the measured site's visual expression: several financial tasks remain visible together, with different treatments for account actions, product navigation and advisory content. [Live homepage](https://www.daiwa.jp/).

A notice dated 21 October 2025 scheduled a homepage redesign for 25 October 2025. It describes reorganising content for a more usable, universal top page, including easier access to procedures, questions and information beyond trading, such as NISA and inheritance. The current wealth-management page frames the relationship around accompanying the customer's future, using “伴走思考”. These first-party statements give the reference its practical direction: expose routes to help and advice alongside routes to trade. [Homepage redesign notice](https://www.daiwa.jp/doc/251021.html), [wealth management](https://www.daiwa.jp/wealth-management/).

#### Primary tasks

- Open an account or reach online-trading login.
- Find products, market information and investment education.
- Search the site, stock prices or investment trusts; find help and procedures.
- Explore NISA, managed investment and inheritance support.

These tasks come from the captured homepage's labels and links; no signed-in workflow was inspected.

### Brand Narrative

The group philosophy names trust-building as a principle and says customer trust is its foundation. The wealth-management page presents a continuing relationship with the customer; the homepage redesign notice explicitly includes people seeking information beyond trading. Together, these sources support a reference that gives help, procedures and advisory content visible routes alongside financial products. This is an interpretation of those statements and the captured hierarchy, not a claimed redesign rationale for any particular colour or component. [Group philosophy](https://www.daiwa.jp/company/philosophy/), [wealth management](https://www.daiwa.jp/wealth-management/), [redesign notice](https://www.daiwa.jp/doc/251021.html).

### Principles

The company's group-philosophy page lists four principles: “信頼の構築” (building trust), “人材の重視” (valuing people), “社会への貢献” (contributing to society), and “健全な利益の確保” (securing sound profits). These are corporate principles; the opened page does not prescribe UI tokens. [Group philosophy](https://www.daiwa.jp/company/philosophy/).

### Personas

No user research or validated personas were available in the opened sources.

## Colors

The following names are descriptive reference roles for measured values. They are not a published Daiwa token namespace. The census contains only two custom properties, both concerned with header dimensions.

| Role | Measured value | Evidence on the homepage |
|---|---|---|
| Primary burgundy | `#680717` | NISA subnavigation text; census also records three backgrounds with this colour |
| Foreground | `#333333` | Most frequent paragraph ink: 99 `<p>` elements; NISA title and details-link rest text |
| Background | `#ffffff` | Most frequent background: 61 elements; NISA subnavigation fill |
| Muted surface | `#f4f4f4` | Seven backgrounds in the census |
| Secondary foreground | `#777777` | NISA card description child; three `<p>` elements in the paragraph-ink census |
| Interactive card title | `#d9340a` | NISA title on hover and pressed |
| Navigation border | `#d3cecf` | NISA subnavigation's 1px rest border |
| Interactive navigation border | `#c4919a` | Same link on hover, pressed and keyboard focus |
| Interactive details link | `#560802` | Wealth-management details text and border on hover and pressed |
| Account gradient start / end | `#c6911f` / `#d1a74c` | Header account-opening link's computed background image |
| Login gradient start / end | `#c22112` / `#cb4235` | Header login link's computed background image |
| Wealth section surface | `#d6dce1` | Background of `section.brand`, behind the details link; that section also has a background image |
| Search border | `#c1c1c1` | Main search input's 1px border |
| Search foreground | `#000000` | Main search input's computed text colour; placeholder colour was not sampled |

The two header gradients are `linear-gradient(360deg, #c6911f 0%, #d1a74c 100%)` and `linear-gradient(360deg, #c22112 0%, #cb4235 100%)`. Their `background-color` is transparent. Preserve the background image when recreating them.

## Typography

- **Official product use:** no font family was confirmed by a company-authored font statement in the opened sources.
- **Live-loaded:** the census's `fonts.loaded` is `[]`; no webfont face can be promoted from this capture.
- **Official distributed assets:** no distributed font package or licence was verified in the opened sources.
- **Declared-only:** body, h1 and button share the computed CSS stack `"ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, sans-serif`. These are declarations, not proof of the face that rendered each glyph. No specimen is supplied for them.
- **Unresolved:** the actual installed face selected for Latin, Kana and Han, and its licensing. `@font-face` entries in the census are also empty. Substitute: none chosen.

Preserve the verified metrics independently of the unresolved family:

| Use | Size / weight | Computed line height |
|---|---|---|
| Header account opening and login | 18px / 700 | 27px |
| Header NISA subnavigation | 15px / 500 | 27px |
| Main search input | 16px / 400 | 48px |
| Wealth-management details link | 16px / 400 | 20.8px |
| NISA card anchor | 16px / 400 | 24px |
| NISA card visible title | 24px / 400 | Not separately sampled |

The control identities report `letter-spacing: normal`. The typography group retains size and weight roles and omits a font-family role.

## Layout

At the measured viewport, the logo link begins at x=40px; the two 186px header actions begin at x=1003px and x=1199px, leaving a measured 10px gap. The product subnavigation's NISA link begins at y=203px. Main carousel link boxes measure 1200×430px in the survey; their lateral position changes with the carousel.

The three advisory cards are each 285px wide, at x=265px, 570px and 875px, producing 20px gaps. The main search field and its neighbouring search button are separated by 16px. These are local desktop relationships, not a verified universal spacing scale.

### Responsive Behavior

Mobile layouts, breakpoints and touch states were not measured; the reference covers the 1440×1000 desktop capture.

## Elevation & Depth

The two header action links and wealth details link have `box-shadow: none` in their rest snapshots. The NISA product link adds `rgba(0, 0, 0, 0.2) 0px 2px 3px -1px` on hover, pressed and focus.

The NISA card's parent `<li>` has a resting shadow of `rgba(0, 0, 0, 0.07) 0px 2px 20px 5px`; hover and pressed strengthen only its alpha to 0.25. The anchor itself has no shadow. Keep that ownership distinction when implementing the card.

## Motion & Easing

The wealth details link's raw computed transition is `all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0s`, accompanying its text and border colour changes. The NISA card anchor has that same transition string; the descendant thumbnail's individual transition declaration was not recorded, so no duration is assigned to its zoom.

The two header actions declare `background 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0s`. Their measured state difference is opacity, so that declaration does not establish the duration of the opacity change. The NISA subnavigation and search input report `all 0s ease 0s`. Reduced-motion behaviour was not measured.

## Components

All measurements below refer to the logged-out homepage at 1440×1000. These action controls are links; none of their destinations was activated during the state probe.

| Control | Identity and rest treatment | Measured interaction |
|---|---|---|
| Header “口座開設” | 186×57px; radius 3px; padding `16px 8px 14px`; 18px/700; white label over the gold gradient in §2; no border or shadow | Hover and pressed lower the whole link's opacity from 1 to 0.7; gradient values remain the same |
| Header “ログイン” | 186×57px; radius 3px; same padding and type; white label over the red gradient in §2; no border or shadow | Same opacity change to 0.7 on hover and pressed |
| Header “NISA” | 66.6×26px; radius 4px; padding `0px 14px`; 15px/500; white fill, burgundy label, 1px navigation border | Hover, pressed and keyboard focus use the interactive navigation border and `rgba(0, 0, 0, 0.2) 0px 2px 3px -1px` shadow |
| “NISAで資産形成” card | Link 285×349.2px; anchor radius 0px and padding 0px; title 24px/400 in foreground; description in secondary foreground | Hover and pressed colour the title, set thumbnail opacity to 0.7 and scale its layer to 1.1; parent shell shadow strengthens as described in §6 |
| Wealth “詳細はこちら” | 174×44.8px; radius 4px; padding `11px 38px`; 16px/400; foreground text and 1px foreground border; transparent over the wealth section | Hover and pressed change text and border to the interactive details colour |

The NISA card's anchor has inherited `color: #152666`, but its visible title is `#333333` at rest and `#d9340a` on hover/pressed. Use the title's colour and 24px size for the label. The outer card shell's radius was not sampled, so the component omits that field.

The main search input (`#top_search_input`, “キーワードを入力”) is 397×48px, radius 3px, padding `13.5px 16px`, 16px/400, white with black computed text and a 1px search border. Hover was measured with `:hover` true and showed no compared style change. Pressed and Tab focus showed only the browser's `auto` outline. It remains a measured prose reference and is omitted from the interactive component group.

### States

Five components have measured authored interaction changes. Pressed was sampled with both `:active` and `:hover` true; the five retained links added no compared change beyond their hover snapshots. The search input added a native outline on press. These observations do not establish a separate active-only treatment.

All six controls received real Tab focus. The NISA navigation link changed border and shadow, reverting after blur; these authored changes are retained. Its additional `outline-style: auto` ring is the browser's. The other controls' focus-only change was also the browser ring. The NISA card's parent opacity changed from 0 to 1 and remained 1 after blur: that persistent reveal is excluded from focus styling.

For the search input, “no change on hover” means no change across the element, its `::before`/`::after` and three ancestor levels with their pseudo-elements, across the probe's compared style/attribute set. It does not describe pixels inside images, video or inaccessible documents. No disabled or error state was measured.

## Do's and Don'ts

- Keep the measured gold account-opening and red login gradients distinct.
- Use the observed 3px and 4px action-link corners where their identities specify them.
- Give NISA navigation feedback through its border and small shadow; keep its fill and label colour at their measured values.
- Apply the card's zoom and opacity change to the thumbnail layer, and its stronger shadow to the parent shell.
- Preserve a visible keyboard indication. The captured native `auto` outline supplies no brand ring token.
- Leave font-family and outer card-shell radius unresolved until supported by further evidence.

These are implementation directions derived from the measured controls, not an official company design-principles document.

## Voice & Tone

The captured interface uses direct Japanese task labels: “口座開設”, “ログイン” and “キーワードを入力”. The wealth-management page's “あなたの未来を支える” frames advice around the customer's future. Use the task labels for actions and the advisory wording as context; no general editorial style guide was verified. [Homepage](https://www.daiwa.jp/), [wealth management](https://www.daiwa.jp/wealth-management/).

## Agent Prompt Guide

“Build the measured Daiwa header action pair: two 186×57px links, 3px corners, padding `16px 8px 14px`, white 18px/700 labels. Use the exact gold and red 360-degree gradients in §2. On hover and pressed, set the whole link's opacity to 0.7. Keep the font family unspecified.”

“Build the measured NISA subnavigation link: 66.6×26px, 4px corners, white background, burgundy 15px/500 label and 1px navigation border. Hover, pressed and keyboard focus change the border and add the small shadow in §4. Retain the browser keyboard outline without treating it as a brand colour.”
