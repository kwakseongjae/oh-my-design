---
name: Nomura Securities
colors:
  primary: '#ca2420'
  login-hover: '#981614'
  foreground: '#42425a'
  card-copy: '#222222'
  canvas: '#ffffff'
  surface: '#f8f8f8'
  border: '#e3e3e3'
typography:
  ui:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 25.6px
    use: Measured FAQ action and company navigation link; live-loaded Noto Sans JP.
  action:
    fontSize: 18px
    fontWeight: 400
    lineHeight: 28.8px
    use: Measured footer account-opening and login links; live-loaded Noto Sans JP.
  display-action:
    fontSize: 17px
    fontWeight: 400
    lineHeight: 27.2px
    use: Measured wealth-management View more link; live-loaded Marcellus.
  serif-action:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 25.6px
    use: 'Survey row 27: wealth-management consultation link; live-loaded Noto Serif JP.'
rounded:
  none: 0px
components:
  account-open:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#ca2420'
    border: '1px solid #ca2420'
    rounded: 0px
    height: 60px
    padding: 10px
    typography: 18px / 400
    shadow: rgba(0, 0, 0, 0.1) 0px 2px 8px 0px
    hover: 'bg #ca2420; fg, icon and arrow #ffffff'
    pressed: 'bg #ca2420; fg #ffffff; box-shadow rgba(0, 0, 0, 0.1) 0px 0px 2px 1px'
    focus: box-shadow rgba(0, 0, 0, 0.1) 0px 0px 2px 1px
    use: 口座開設のご案内 — footer link to /apply/?sc_pid=cojp_top_footer_07; measured width 396.7px.
  faq:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#42425a'
    border: '1px solid #42425a'
    rounded: 0px
    height: 47.6px
    padding: 10px
    typography: 16px / 400
    shadow: rgba(0, 0, 0, 0.1) 0px 2px 8px 0px
    hover: 'bg #42425a; fg and external-window icon #ffffff'
    pressed: 'bg #42425a; fg #ffffff; box-shadow rgba(0, 0, 0, 0.1) 0px 0px 2px 1px'
    focus: box-shadow rgba(0, 0, 0, 0.1) 0px 0px 2px 1px
    use: よくあるご質問 — 270px-wide hero link to https://faq.nomura.co.jp/.
  company-nav:
    type: button
    textColor: '#ffffff'
    rounded: 0px
    height: 49.5px
    padding: 0px 10px
    typography: 16px / 400
    hover: '::after 99px by 5px #ca2420; transform matrix(0, 0, 0, 1, 0, 0) to matrix(1, 0, 0, 1, 0, 0)'
    pressed: '::after 99px by 5px #ca2420; transform matrix(1, 0, 0, 1, 0, 0)'
    use: '会社情報 — 99px-wide link to /introduc/, transparent over the dark original header. Pointer states measured with hideOverlays: true after a sticky header covered it. Browser auto focus ring omitted from tokens.'
  view-more:
    type: button
    textColor: '#ffffff'
    border: '1px solid #ffffff'
    rounded: 0px
    height: 66px
    padding: 10px
    typography: 17px / 400
    shadow: rgba(0, 0, 0, 0.1) 0px 2px 8px 0px
    hover: 'bg #ffffff; fg and ::before icon #42425a; opacity 0.8'
    pressed: 'bg #ffffff; fg #42425a; opacity 0.8; box-shadow rgba(0, 0, 0, 0.1) 0px 0px 2px 1px'
    focus: box-shadow rgba(0, 0, 0, 0.1) 0px 0px 2px 1px
    use: View more — 270px-wide link to /wealth-management/, transparent over the dark wealth-management section; Marcellus.
  sweep-card:
    type: card
    textColor: '#222222'
    rounded: 0px
    height: 550.9px
    padding: 0px
    typography: 16px / 400
    hover: '::before opacity 0 to 1 with 1px #42425a border; summary ::after bg #42425a and fg #ffffff'
    pressed: '::before opacity 1 with 1px #42425a border; summary ::after bg #42425a and fg #ffffff'
    use: 'あんしんスイープ — 485px-wide nonduplicate carousel card link, transparent over the white card surface. Anchor/description #222222; visible title #42425a at 26px/400. Keyboard focus UNMEASURED: tabIndex -1, not reached in the 116-Tab walk.'
  login-action:
    type: button
    backgroundColor: '#ca2420'
    textColor: '#ffffff'
    rounded: 0px
    height: 60px
    padding: 10px
    typography: 18px / 400
    shadow: rgba(0, 0, 0, 0.1) 0px 2px 8px 0px
    hover: 'bg #981614; border 1px solid #981614'
    pressed: 'bg #981614; border 1px solid #981614; box-shadow rgba(0, 0, 0, 0.1) 0px 0px 2px 1px'
    focus: box-shadow rgba(0, 0, 0, 0.1) 0px 0px 2px 1px
    use: ログイン — 396.7px-wide footer link to the online service; rest border is 1px solid rgba(0, 0, 0, 0), with white label and icons.
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    ui: Noto Sans JP
    serif: Noto Serif JP
    display: Marcellus
---

# Design System Inspiration of Nomura Securities

## Overview

### Visual Theme & Atmosphere

Nomura Securities is a Japanese securities company whose current public offer puts wealth management at the centre: investment, inheritance, real estate and business succession are presented as connected parts of a customer's future. Its wealth-management strengths page traces the brand's history to 1925; the company profile separately dates the present legal entity to 7 May 2001. Today the service describes solutions that cross specialist disciplines and extend beyond financial assets. [Company profile](https://www.nomura.co.jp/introduc/company/), [wealth management](https://www.nomura.co.jp/wealth-management/), [strengths](https://www.nomura.co.jp/wealth-management/point/).

The homepage gives that proposition an expansive setting: a star-filled mountain landscape, large white Japanese lettering, an outlined wealth-management panel and a companion “Solutions” panel. Below, the page shifts to white and pale grey surfaces for service cards, products and dated news. Small red icons and square actions connect these two settings. This is an observation of the live homepage, rather than an attributed corporate design principle.

The measured surface is the Japanese homepage at `www.nomura.co.jp/`, with HTML `lang="ja"`; the capture did not redirect to another regional edition. Its main routes are consultation, account opening, existing-customer login, product information and support.

### Brand Narrative

The brand connects its 1925 heritage with a present service spanning investments, succession and real estate. Its strengths page describes a professional that responds to change and a partner that stays beside the customer. The homepage's current promise, “変化を読み、あなたの未来を共に創る。”, places a future-facing message over the landscape. The wealth-management page gives this direction concrete substance through cross-discipline asset-management solutions. [Strengths](https://www.nomura.co.jp/wealth-management/point/), [wealth management](https://www.nomura.co.jp/wealth-management/).

### Principles

The opened strengths page states three service commitments: interpret social change, use Nomura's capabilities to realise individual hopes, and accompany the customer's life. For implementation, the observed homepage pairs these ideas with spacious explanatory panels, detailed service routes and persistent access to support. The layout connection is an interpretation of the captured page. [Strengths](https://www.nomura.co.jp/wealth-management/point/).

### Personas

No research-backed personas were verified.

## Colors

These names label measured website values; the site did not expose a first-party custom-property palette in this capture.

| Role | Value | Observed use |
|---|---|---|
| Primary | `#ca2420` | Account-opening text/border, filled footer login and small action icons |
| Login hover | `#981614` | Footer login background and border on hover and pressed |
| Foreground | `#42425a` | Most frequent paragraph ink; FAQ label/border; card title |
| Card copy | `#222222` | Sweep-card anchor and visible description |
| Canvas | `#ffffff` | White actions and content surfaces; reversed labels |
| Surface | `#f8f8f8` | A rendered background colour, counted on seven elements |
| Border | `#e3e3e3` | Most frequent rendered border colour, counted on 23 elements |

The paragraph census is `#42425a` ×7, `#ffffff` ×4 and `#ca2420` ×1. It supports the foreground role more directly than the general text census, which also includes navigation and nested elements. The blue `--swiper-theme-color` is excluded from this palette because it belongs to the carousel library.

## Typography

**Official product-use documentation:** no opened narrative or typography guide explicitly names a corporate/product typeface. The following evidence describes this live website.

**Live-loaded:** the census lists **Noto Sans JP** with weight descriptor `400 600`, **Noto Serif JP** with `400 500`, and **Marcellus** at `400`, all normal. The first-party stylesheet requests these three families together through a Google Fonts CSS import. The survey identifies Noto Sans JP on interface links, Noto Serif JP on the consultation action, and Marcellus on the Latin “View more” link. [Live stylesheet](https://www.nomura.co.jp/assets/wm/css/style.css?20261028).

| Measured role | Size / weight | Line height | Family evidence |
|---|---|---|---|
| Hero FAQ and company navigation | 16px / 400 | 25.6px | Noto Sans JP, states identity |
| Footer account opening and login | 18px / 400 | 28.8px | Noto Sans JP, states identity |
| Wealth-management “View more” | 17px / 400 | 27.2px | Marcellus, states identity |
| Wealth-management consultation | 16px / 400 | 25.6px | Noto Serif JP, survey row 27 |
| Sweep-card title | 26px / 400 | Not captured for the title | Label metrics; anchor is 16px / 400 |

**Official distributed assets:** the stylesheet declares the first-party `ns-icon-font` through WOFF2, WOFF and TTF URLs. It was loaded as an icon face. The other loaded icon face, `swiper-icons`, is a library asset. Neither is a text family or a text specimen.

**Declared-only:** `CompatilLetterLTCERegular`, Arial, メイリオ, Meiryo, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, Osaka, ＭＳ Ｐゴシック, Helvetica, Verdana and `sans-serif` occur in the computed fallback stack but are absent from the loaded-face list. They receive no specimen and no typography-family token.

**Unresolved:** exact text-font WOFF URLs, font licensing and any typography standard for the signed-in service were not verified. Substitute: none chosen.

## Layout

The desktop capture is **1440 × 1000px**. The hero's four quick actions are each **270px** wide, with observed x positions **143, 433, 723 and 1013px**: a **20px** gap between adjacent controls. The footer action row starts at x **103px**, with two sampled actions each **396.7px** wide; their x positions are **103 and 514px**.

Use the homepage's observed progression: landscape hero, two outlined explanatory panels, related reading, image-led service cards, product/news lists and utility/footer actions. The sweep card measures **485px** wide; its title and description are inset **24px**, as derived from the 437px text width inside the 485px card and confirmed by the stylesheet's summary padding. These are local measurements, not a verified global spacing scale.

### Responsive Behavior

Mobile layouts and breakpoint behaviour were not measured; this reference records the desktop capture only.

## Elevation & Depth

Four sampled actions — account opening, FAQ, wealth-management View more and footer login — have rest shadow `rgba(0, 0, 0, 0.1) 0px 2px 8px 0px`. Keyboard focus changes it to `rgba(0, 0, 0, 0.1) 0px 0px 2px 1px`; the original shadow returns after blur. The pressed observations carry that same compact shadow.

The sweep-card anchor and company-nav anchor have no rest shadow. The card's hover emphasis comes from its pseudo-element border and reversed inner affordance.

## Motion & Easing

For `account-open`, `faq`, `view-more` and `login-action`, the probe's raw computed identity string is `all, width, height 0.34s, 0s, 0s ease-out, ease, ease 0s, 0s, 0s`. This records a duration of **0.34s** with **ease-out** for the first transition entry and zero-duration width/height entries. The company-nav and sweep-card anchors report `all 0s ease 0s`; their observed changes are on pseudo-elements.

These are captured transition strings, not a global motion scale. Pseudo-element transition strings and a reduced-motion response were not collected. The probe's settling budget is not published as a brand duration.

## Components

All six sampled controls are links. Measurements below describe the anchor; the sweep-card title is a separate child. All have **0px radius**.

| Control | Width × height | Padding | Rest surface / label | Rest border |
|---|---|---|---|---|
| `account-open` — 口座開設のご案内 | 396.7 × 60px | 10px | `#ffffff` / `#ca2420` | 1px solid `#ca2420` |
| `faq` — よくあるご質問 | 270 × 47.6px | 10px | `#ffffff` / `#42425a` | 1px solid `#42425a` |
| `company-nav` — 会社情報 | 99 × 49.5px | 0px 10px | Transparent over the dark header / `#ffffff` | None on the anchor |
| `view-more` — wealth-management View more | 270 × 66px | 10px | Transparent over the dark section / `#ffffff` | 1px solid `#ffffff` |
| `sweep-card` — あんしんスイープ | 485 × 550.9px | 0px | Transparent over a white card; description `#222222`, title `#42425a` | Anchor none; hidden pseudo-element border |
| `login-action` — footer ログイン | 396.7 × 60px | 10px | `#ca2420` / `#ffffff` | 1px solid `rgba(0, 0, 0, 0)` |

The white account-opening action fills red on hover; the filled red login darkens. The FAQ action reverses to the foreground colour. The wealth-management action uses Marcellus, a white outline and a dot icon; its hover becomes white with dark text at opacity `0.8`.

The carousel card has an image and summary rather than a separately clickable inner button. Its “View more” affordance is a summary pseudo-element measuring **144 × 52px**. Hover reveals a **1px `#42425a`** border around the card and reverses that affordance to dark fill/white type.

### States

| Control | Hover | Pressed observation | Keyboard focus |
|---|---|---|---|
| `account-open` | Background `#ca2420`; text, icon and arrow white | Same colours; compact focus shadow | Compact shadow; colours remain at rest |
| `faq` | Background `#42425a`; label and external-window icon white | Same colours; compact shadow | Compact shadow; colours remain at rest |
| `company-nav` | Red 99 × 5px `::after` changes from `matrix(0, 0, 0, 1, 0, 0)` to `matrix(1, 0, 0, 1, 0, 0)` | Same pseudo-element transform | Browser `auto` outline only; no focus token |
| `view-more` | White fill, `#42425a` label/icon, opacity 0.8 | Same, plus compact shadow | Compact shadow; transparent background and white label retained |
| `sweep-card` | `::before` opacity 0 → 1; inner `::after` fill `#42425a`, text/gradient marker white | Same changes; no additional change versus hover in the compared scope | UNMEASURED; not reached by Tab |
| `login-action` | Background and border `#981614`; white label retained | Same colours; compact shadow | Compact shadow; red background retained |

The company-nav pointer observations required `hideOverlays: true` in the second capture because a fixed header covered the original control. Its focus outline was `rgb(0, 95, 204) auto 1px off 1px`, a browser indication. The carousel link had `tabIndex=-1` and was not reached in the 116-Tab walk. No disabled-state claim is made.

“No additional change” here covers the tool's computed styles and attributes for the control, its pseudo-elements, descendants and three ancestor levels. It does not establish the absence of pixel-only or out-of-scope changes. Pressed button observations also had focus, so the compact shadow is recorded without claiming an independent active-only rule.

## Do's and Don'ts

- Pair white or dark surfaces with red action details and the measured `#42425a` foreground.
- Keep the sampled controls square; preserve the distinction between white/red account opening and filled red login.
- Use the loaded text families in their observed roles: Japanese interface links, serif consultation and Latin display actions.
- Reproduce the card's pseudo-element states as well as the anchor styles.
- Do not promote Swiper defaults into the brand palette or treat the browser's auto outline as a Nomura focus colour.

## Voice & Tone

The first-party wealth-management copy addresses the customer's desired future and presents specialist help as an ongoing relationship. The strengths page organises that promise around reading social change, finding individual solutions and accompanying the customer's life. Functional labels such as “口座開設” remain concise. This describes the opened copy, not a separate official writing guide. [Strengths](https://www.nomura.co.jp/wealth-management/point/).

## Agent Prompt Guide

“Build a Nomura-style account-opening link: 396.7px wide and 60px tall, square corners, 10px padding, 18px/400 Noto Sans JP with 28.8px line height. Use a white surface, `#ca2420` text and a 1px red border. Hover fills `#ca2420` and reverses the text, icon and arrow to white.”

“For the dark wealth-management section, use a 270 × 66px transparent link with a 1px white border and 17px/400 Marcellus. Hover sets a white background and `#42425a` text at opacity 0.8.”
