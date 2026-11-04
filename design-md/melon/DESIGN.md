---
name: Melon
colors:
  signature-green: '#00cd3c'
  green-login: '#00d344'
  green-login-hover: '#01b925'
  text-primary: '#1a1a1a'
  foreground: '#909090'
  text-muted: '#666666'
  text-secondary: '#777777'
  text-caption: '#888888'
  text-quiet: '#999999'
  nav: '#3c3c3c'
  utility-hover: '#1b1b1b'
  button-label: '#333333'
  canvas: '#ffffff'
  panel: '#fbfbfb'
  line: '#e0e0e0'
  chart-line: '#dfe6e8'
typography:
  heading:
    fontSize: 15px
    fontWeight: 700
    use: Latest-album and chart section-heading links; 18px line height
  nav:
    fontSize: 17px
    fontWeight: 700
    use: Main navigation; 58px line height
  control:
    fontSize: 13px
    fontWeight: 400
    use: Header search input; 38px line height
  login:
    fontSize: 14px
    fontWeight: 400
    use: Homepage login button and its visible label
  body:
    fontSize: 12px
    fontWeight: 400
    use: Chart-song links; the CSS body base also declares 12px/18px
  metadata:
    fontSize: 11px
    fontWeight: 400
    use: Footer contact/copyright links and the visible shuffle-button label
rounded:
  none: 0px
components:
  login-button:
    type: button
    backgroundColor: '#00d344'
    textColor: '#ffffff'
    rounded: 0px
    height: 42px
    padding: 0px
    typography: 14px/400
    hover: '#01b925'
    pressed: '#01b925'
    use: 로그인; 244px-wide native button. Hover and pointer press change the background. Keyboard focus adds only a browser auto outline, excluded from tokens.
  shuffle-button:
    type: button
    textColor: '#333333'
    rounded: 0px
    height: 26px
    padding: 0px
    typography: 11px/400
    hover: Descendant .odd_span background-position 0% -1687px; .even_span 100% -37px
    pressed: Descendant .odd_span background-position 0% -1724px; .even_span 100% -74px
    focus: Descendant .odd_span background-position 0% -1687px; .even_span 100% -37px
    use: 셔플듣기; 67px-wide native button on white. Transparent outer element; descendant sprites paint the control. This font and fg describe the visible label; the button itself computes 13.3333px/400 and black. Focus token records authored sprite changes; the additional browser auto outline is excluded.
  chart-nav:
    type: button
    textColor: '#3c3c3c'
    rounded: 0px
    height: 58px
    padding: 0px 6px
    typography: 17px/700
    hover: 'fg #00cd3c; ::after paints a 4px-high #00cd3c underline'
    pressed: 'fg #00cd3c; ::after paints a 4px-high #00cd3c underline'
    use: 멜론차트 main-navigation link, 70.8px wide; transparent on the white header. Keyboard focus adds only a browser auto outline.
  pass-link:
    type: button
    textColor: '#777777'
    rounded: 0px
    height: 36px
    padding: 9px 6px 11px 29px
    typography: 13px/700
    hover: 'fg #1b1b1b; ::after swaps the pass icon image'
    pressed: 'fg #1b1b1b; ::after swaps the pass icon image'
    use: 이용권구매 utility action link, 91.2px wide; transparent on white. Keyboard focus adds only a browser auto outline.
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    sans: Pretendard
---

# Design System Inspiration of Melon

## Overview

### Visual Theme & Atmosphere

Melon is a Korean music-streaming and discovery service operated by Kakao Entertainment. It began service in November 2004. Its official product introduction presents daily mixes, DJ playlists, charts, artist broadcasts, search and a personal music archive as ways to discover and organize music. [Product introduction](https://www.kakaocorp.com/page/service/service/Melon), [launch history](https://kakaoent.com/pr/detail/168), [operator terms](https://info.melon.com/terms/web/terms1_1.html).

The measured desktop homepage has a dense, white, content-first layout: album covers, editorial thumbnails and a ten-entry chart share a compact frame. Its green-on-white identity is particularly concrete in the controls: the login button is **#00d344**, while the main chart-navigation link turns **#00cd3c** and gains a green underline on hover. Small Pretendard labels, aligned columns and fine rules carry the interface around the artwork. The sampled buttons and input have 0px CSS corner radii; the header search has a visibly rounded surround supplied by an image. These observations support a compact music portal with distinct treatments for navigation, account entry and search. [Live homepage](https://www.melon.com/).

The official Melon 6.0 campaign describes five tabs and a home organized around personal taste. More recently, the operator's May 2026 announcement introduced **THE SOUND**, an invitation-based listening and conversation project built around artists' music and stories. This extends the product's discovery theme into an in-person brand experience; it supplies brand context for this reference, while the measurements below come from the desktop homepage. [Melon 6.0](https://www.melon.com/m6/campaign.htm), [THE SOUND announcement](https://www.kakaoent.com/pr/detail/507).

#### Primary tasks

- Scan the chart and new-album selections.
- Search for music from the header input.
- Enter the account flow through “로그인”.
- Start chart playback through “셔플듣기”.

### Brand Narrative

The service's history and current product direction provide more context than the chart alone. Kakao Entertainment dates its launch to **November 2004**. The Melon 6.0 campaign presents **five tabs** covering a taste-led home, trends, artist broadcasts, exploration and a personal music archive; the opened campaign does not supply a publication date. [History](https://kakaoent.com/pr/detail/168), [Melon 6.0](https://www.melon.com/m6/campaign.htm).

In **December 2025**, the operator announced annual listening records presented as story cards in **MY RECORD**, within the app's Music DNA area. In **May 2026**, it announced **THE SOUND**, combining listening sessions and artist conversation. Together these first-party accounts describe music discovery, personal listening history and artist experiences. They establish product evolution without asserting a visual rebrand or transferring app tokens into this desktop reference. [MY RECORD](https://kakaoent.com/pr/detail/399), [THE SOUND](https://www.kakaoent.com/pr/detail/507).

The measured homepage expresses that service through green controls on white, dense music information and prominent cover/editorial images. Its footer names **(주)카카오엔터테인먼트**, with its business address in Seongnam, South Korea. [Service footer](https://www.melon.com/).

### Principles

These are reconstruction principles derived from the captured desktop, rather than a claimed official manifesto:

- **Content first:** align album art, editorial links and ranked music in compact columns.
- **Specific green roles:** #00d344 for the measured login rest state, #01b925 for its hover/press, #00cd3c for main-nav feedback.
- **Measured geometry:** square sampled controls, a separately image-drawn rounded search surround, 223 × 148px thumbnails.
- **Multiple hierarchy cues:** combine size, weight and the observed gray tiers.
- **White canvas and fine rules:** preserve the sampled account and chart framing.

### Personas

Personas were not established by the opened sources; no listener behavior or usability outcome is inferred from the capture.

## Colors

The census found no computed root custom properties and no declarations in readable stylesheets. Two cross-origin stylesheets were unreadable to the browser's stylesheet walk; direct fetches of both, and of the layout stylesheet, found no custom-property declarations either. The role names below are reference labels for observed values, rather than names of Melon CSS variables.

| Role | Value | Evidence and use |
|---|---|---|
| Signature green | **#00cd3c** | Chart-nav hover/pressed text and its 4px underline; also present in the rendered text census. |
| Login green | **#00d344** | Login background at rest. |
| Login hover/pressed | **#01b925** | Login background with real hover and pointer-down. |
| Primary content | **#1a1a1a** | Chart-song links and other content links in the survey. |
| Paragraph foreground | **#909090** | Most frequent paragraph ink: 11 `<p>` elements, including the footer's legal/contact region. This is a region-dependent paragraph result. |
| Muted/base | **#666666** | The layout CSS's body base and 23 rendered text-census entries; the chart “더보기” link uses this value. |
| Secondary text | **#777777** | Utility pass link at rest and chart artist links. |
| Caption text | **#888888** | Editorial caption links; 28 rendered text-census entries. |
| Quiet/input text | **#999999** | Search input's computed color. Its placeholder attribute was empty during the capture. |
| Navigation/section heading | **#3c3c3c** | Main navigation at rest; 15px section-heading links in the survey. |
| Utility hover | **#1b1b1b** | Pass-link text on hover and pressed. |
| Small button label | **#333333** | The visible “셔플듣기” child label. |
| Canvas / login label | **#ffffff** | White page ground and login text. |
| Account panel | **#fbfbfb** | Login's immediate parent background. |
| Account-panel line | **#e0e0e0** | Login parent: 1px solid border. |
| Chart line | **#dfe6e8** | Chart wrapper side borders and the button area's bottom border. |

Additional measured greens are **#7cb710** on the magazine category links and **#8ac121** on the selected TOP100 tab’s 2px top border. The text census also records **#ff4e78** twice; the layout CSS assigns it to the rising-number indicator in trending searches (`.realtime_soar_keyword .wrap_rank.up .num`). These are separate observations from the chart-nav’s #00cd3c feedback.

The paragraph census also contains **#1a1a1a** on 10 paragraphs and **#939393** on one. The most frequent text color overall is #888888, so that overall count is not used as the paragraph foreground.

Two prior palette values remain verifiable as **CSS declarations**: **#00b523** occurs in the autocomplete match emphasis and a mobile-link hover rule; **#df2607** occurs in `.fc_point02` and `.text_dc`. Their visible use was not captured on this homepage, so they remain documented declaration facts without live-color tokens. The current layout CSS contains 11 case-insensitive occurrences of #00cd3c; that source count includes rules and comments and does not establish eleven rendered uses. [Layout CSS](https://www.melon.com/resource/style/web/common/melonweb_layout.css?tm=20260813).

## Typography

**Official product-use statement:** no prose brand or typography guideline opened in this investigation names an official product face. The live-product evidence below establishes the family used on the measured interface.

**Live-loaded:** the census records **Pretendard 400, 600 and 700, normal**, and **Noto Music, normal/normal**. All five controls found in the states pass compute to Pretendard. Noto Music's precise glyph use was not isolated, so it is documented as loaded without assigning it the general UI role.

**Official distributed asset declarations:** the product's layout CSS declares Pretendard weights **100–900**, with local names first and same-origin WOFF2/WOFF paths under `/resource/fonts/pretendard/`. For example, weight 400 declares `Pretendard-Regular.woff2` and `.woff`. It declares Noto Music through Google-hosted WOFF2 sources and a same-origin `/resource/fonts/NotoMusic-Regular.ttf` source. Font binaries and licenses were not separately opened or saved; the capture does not identify which local or URL source supplied a loaded face. [Layout CSS](https://www.melon.com/resource/style/web/common/melonweb_layout.css?tm=20260813).

**Declared-only:** Pretendard 100/200/300/500/800/900 were declared but absent from the loaded-face list. The body element's computed family list starts with `SpecialFont`, then names 맑은 고딕 / Malgun Gothic and further fallbacks; `SpecialFont` is declared as a local `Segoe UI` alias and was not listed as loaded. The complete raw stack is in the verification notes. These declarations receive no specimens or UI-family tokens.

**Unresolved:** a monospace role for Pretendard, a font license, and a company-authored type-history statement were not established. **Substitute: none chosen.**

The observed scale is small but differentiated:

| Surface | Size / weight | Line height |
|---|---|---|
| Main navigation | 17px / 700 | 58px |
| Latest-albums and chart section-heading links | 15px / 700 | 18px |
| Login button and label | 14px / 400 | normal |
| Header search input | 13px / 400 | 38px |
| Utility pass link | 13px / 700 | 16px |
| Ordinary chart-song link | 12px / 400 | 15px |
| Editorial caption link | 12px / 400 | 16px |
| Footer contact/copyright links and visible shuffle label | 11px / 400 | Contact/copyright links: 20px; the inner shuffle label line height was not captured. |

The shuffle button's own computed font is 13.3333px/400, while its visible inner label is 11px/400. The hidden status span inside the main nav computes to 0px; the visible nav label and link use 17px. Color, weight and size all contribute to the hierarchy.

## Layout

At **1440 × 1000px**, the homepage places a compact header above aligned content columns. The survey places the content from x=209 to x=1217, a **1008px** span. The layout CSS also declares a 1008px footer content width. The main navigation occupies a **58px** line.

The first visible story grid has three **223px-wide** thumbnails beginning at x=209, 448 and 687: adjacent starts differ by 239px, giving a **16px horizontal gap** after each 223px image. Thumbnails are **148px** high. A chart column begins at x=937; its chart wrapper uses fine #dfe6e8 lines. Ten ranked tracks are visible across the page capture. These are local geometry observations, with no global spacing scale inferred.

Build density through repeated image widths, aligned text and fine rules. Keep the white ground and the compact 11–17px hierarchy around the artwork. The measured green login and nav feedback provide clear landmarks within that frame.

### Responsive Behavior

Desktop **1440 × 1000px** only; mobile breakpoints, touch behavior and narrower layouts were not measured.

## Elevation & Depth

All five measured controls have **box-shadow: none** and **0px** CSS radii. Their framing comes from imagery, fine borders and color: the pale #fbfbfb account panel has a #e0e0e0 line, and the chart has #dfe6e8 lines. This supports a flat treatment for these controls. Other rules in the fetched CSS do contain shadows, so a brand-wide prohibition on elevation is not established.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.none`: `none`

## Motion & Easing

The five found controls each report the computed transition **`all 0s ease 0s`**. Their measured feedback uses color, pseudo-elements or sprite positions with zero computed transition duration. Carousel content differs across captures; its timing, easing and reduced-motion behavior were not measured. No general motion duration is inferred.

---

**Verified:** 2026-11-03. **Proof:** see [verification.md](verification.md), including the full source and capture paths. The accompanying report accounts for confirmed, corrected and unconfirmed prior content.

## Components

### Login Button

“로그인” is a **244 × 42px** native button with **#00d344** background, **#ffffff** text, no border, **0px** radius, **0px** padding and **14px/400 Pretendard**. It has no box shadow. Hover changes the background to **#01b925**; pointer-down keeps that same value. Keyboard focus adds a browser `auto` outline. The surrounding account panel is #fbfbfb with a 1px #e0e0e0 border.

### Secondary Shuffle Button

“셔플듣기” is **67 × 26px**, radius **0px**, outer padding **0px**, with no outer border or shadow. The outer element is transparent over white and computes to black (#000000); the visible child label is **#333333**, **11px/400**. Two child spans paint a sprite-backed button. At rest their positions are `0% -1650px` and `100% 0%`; hover moves them to `0% -1687px` and `100% -37px`, and pressed moves them to `0% -1724px` and `100% -74px`. Keyboard focus uses the hover sprite positions plus a browser auto outline.

### Main Navigation Link

The **“멜론차트” link** is **70.8 × 58px**, with **0px** radius, **0px 6px** padding and **17px/700 Pretendard**, on a transparent background over white. Rest text is **#3c3c3c**. Hover and pressed change the visible label to **#00cd3c** and paint a **4px-high** `::after` bar across the link. Keyboard focus shows only a browser auto outline.

### Utility Action Link

The **“이용권구매” link** is **91.2 × 36px**, radius **0px**, padding **9px 6px 11px 29px**, font **13px/700 Pretendard**, transparent on white. Its text changes from **#777777** to **#1b1b1b** on hover and pressed. Its `::after` also swaps the pass icon image; the layout CSS identifies the rest and hover assets as `ic_gnb_pass@2x.png` and `ic_gnb_pass_on@2x.png`. Keyboard focus adds only a browser auto outline.

### Search Input

`#top_search`, titled “검색 입력 편집창”, measures **300 × 40px**, with **0px** radius, **0px 20px** padding, **13px/400 Pretendard**, **38px** line height, **#999999** text and a transparent background. Its own border and shadow are absent. The parent fieldset declares **340 × 40px** and draws `search_bar@3x.png` as a **340px-wide** background image, producing the visible rounded surround. No radius for that image is inferred.

Hover, pointer-down and real Tab focus produced no settled style change within the measured scope: the input and its pseudo-elements, no descendants, and three ancestor levels with their pseudo-elements. The input's placeholder attribute was empty; CSS declares placeholder color #999999. These static observations remain in prose; the input has no interactive component token.

### Content Links and Chart Text

The survey's first visible magazine thumbnail link points to `/musicstory/inform.htm?mstorySeq=17334` and measures **223 × 148px**, radius **0px**, padding **0px**, font **12px/400**, transparent background and computed #1a1a1a color. Its image supplies the visible content. The caption link measures **223 × 34px**, with #888888 computed color and 16px line height. Card states were unmeasured after both states calls returned no matching visible control; no card component is declared.

Chart-song links in the survey use **12px/400 #1a1a1a**, with a **12px/700** first-song example, while artist links use **#777777**. These preserve the dense list treatment with measured text roles; a complete interactive row was not measured.

### States

| Control | Rest | Hover | Pressed | Keyboard focus |
|---|---|---|---|---|
| Login | #00d344 / #ffffff | Background #01b925 | Same as hover | Browser auto outline only; excluded from tokens. |
| Shuffle | Transparent over white; visible label #333333; rest child positions `0% -1650px`, `100% 0%` | Positions `0% -1687px`, `100% -37px` | Positions `0% -1724px`, `100% -74px` | Hover sprite positions plus browser auto outline; only sprite feedback is tokenized. |
| Chart-nav link | Transparent over white; #3c3c3c | #00cd3c text and 4px #00cd3c `::after` bar | Same as hover | Browser auto outline only; excluded from tokens. |
| Pass link | Transparent over white; #777777 | #1b1b1b text and icon-image swap | Same as hover | Browser auto outline only; excluded from tokens. |
| Search input | Transparent over white; #999999 | No change within the documented comparison scope | Same scoped result | Same scoped result; no authored focus indication was observed. |
| Magazine thumbnail | Survey geometry only | Unmeasured | Unmeasured | Unmeasured |

Hover readings were taken with `:hover` true; pointer-down readings have `:active` true. Keyboard focus was reached through real Tab presses. Focus-only changes on the five found controls did not persist after blur. Disabled, validation and selected-tab/player states were not measured.

## Do's and Don'ts

### Do

- Use the white canvas, compact content grid and measured text hierarchy.
- Keep login at 42px with 14px text; reproduce its #00d344 → #01b925 background change.
- Give the 58px main-nav link green text and a 4px green bar on hover and pressed.
- Preserve the search input's separate rounded image surround and square inner input.
- Read visible child labels when reconstructing sprite buttons; shuffle's label is 11px #333333.

### Don't

- Replace the observed 17px/700 navigation with a universal 12–14px scale.
- Treat #00cd3c and #00d344 as interchangeable paint for the same control.
- Turn the browser auto outline into an authored Melon focus token.
- Infer a universal corner, spacing, red-accent or elevation rule from these samples.

## Voice & Tone

The observed product controls use short functional labels: “로그인”, “검색”, “셔플듣기” and “더보기”. The official product introduction and Melon 6.0 campaign add a personal-discovery vocabulary around taste and music chosen for the listener. A reconstruction can pair concise action labels with that discovery language. This is an interpretation of opened copy; no formal company voice guideline was established. [Product introduction](https://www.kakaocorp.com/page/service/service/Melon), [Melon 6.0](https://www.melon.com/m6/campaign.htm).

## Agent Prompt Guide

“Build a white #ffffff desktop music portal with aligned album, editorial and chart columns. Use live-loaded Pretendard: 17px/700 main nav, 15px/700 section links, 12px chart text and compact 11px metadata. Use #1a1a1a for song links, #777777 for artist/utility text, #888888 for editorial captions and #999999 for the search input. Make the login button 244 × 42px, square, #00d344 with white 14px/400 text; hover and pressed use #01b925. Give the 58px chart-nav link #3c3c3c rest text, then #00cd3c text and a 4px underline on hover and pressed. Put the 300 × 40px transparent search input inside the observed 340 × 40px image surround. Arrange 223 × 148px editorial thumbnails with 16px horizontal gaps. Use the measured sprite positions for the small shuffle button. Keep the account panel #fbfbfb with a #e0e0e0 border and the chart lines #dfe6e8.”

Substitute: none chosen. Font and state evidence classes are specified in §§3–4.

## Governance

### Known Gaps

- **Contrast, `login-button`.** Text `#ffffff` on `#00d344` measures 2.02:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
