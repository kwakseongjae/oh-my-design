---
name: XPeng
colors:
  accent: '#a4ce4c'
  ink: '#000000'
  foreground: '#666666'
  inverse: '#ffffff'
  canvas: '#ffffff'
  surface: '#f9f9f9'
  muted: '#999999'
  input-border: '#f0f0f0'
  input-error: '#ec4e39'
typography:
  action:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: 2.56px
    use: L05 product-section action links; their computed family is system, so no UI family is assigned
  navigation:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 35px
    use: Charging navigation link
  input:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
    use: Empty phone-number input
  card-title:
    fontSize: 18px
    fontWeight: 400
    use: Visible h4 title inside the measured news-card link; the outer anchor is 12px/400
rounded:
  none: 0px
  s: 4px
  sm: 6px
  m: 8px
  l: 12px
spacing:
  action-inline: 32
  action-block: 11
  header-action-inline: 16
  header-action-block: 8
  news-column-gap: 32
components:
  order-now:
    type: button
    textColor: '#ffffff'
    rounded: 4px
    height: 44px
    padding: 11px 32px
    typography: 16px / 400
    hover: 'Green #a4ce4c ::before grows from 0px to 161.406px wide; its height becomes 40px with a 1px green border. The arrow image changes; the anchor gains a transparent 1px border and grows from 158.2px to 160.2px wide.'
    pressed: Same sampled green layer and arrow change as hover; anchor opacity changes from 1 to 0.8.
    use: 'Link: 立即订购 in the L05 product section. The anchor itself is transparent; its empty span.sudo child supplies the measured black #000000 fill. No explicit background is assigned to the anchor.'
  model-details:
    type: button
    textColor: '#000000'
    border: '1px solid #000000'
    rounded: 4px
    height: 44px
    padding: 11px 32px
    typography: 16px / 400
    hover: 'Label becomes #ffffff; border becomes transparent; #a4ce4c ::before grows from 0px to 159.82px wide, 40px high, with a 1px green border; arrow image changes.'
    pressed: Same sampled changes as hover, plus anchor opacity 0.8.
    use: 'Link: 了解L05, 158.7px wide at rest, on the light L05 product area. The anchor background is transparent.'
  header-drive:
    type: button
    textColor: '#000000'
    border: '1px solid #000000'
    rounded: 4px
    height: 35.6px
    padding: 8px 16px
    typography: 16px / 400
    hover: 'Label becomes #ffffff; border becomes transparent; #a4ce4c ::after grows from 0px to 96px wide and becomes 31.5938px high with a 1px green border.'
    pressed: Same sampled changes as hover, plus anchor opacity 0.8.
    use: 'Link: 预约试驾, 98px wide. These rest and pointer states describe the white header after scrolling; the page-top photographic header has white text and a white border. The anchor background is transparent.'
  nav-charging:
    type: button
    textColor: '#000000'
    rounded: 0px
    height: 35px
    padding: 0px
    typography: 16px / 400
    hover: 'Label becomes rgba(0, 0, 0, 0.6); green #a4ce4c ::after expands from 0px to 32px wide at 2px height.'
    pressed: Same sampled changes as hover, plus anchor opacity 0.8.
    use: 'Link: 充电, 32px wide, transparent on the white header after scrolling. At page top the label is white over the photographic hero.'
  phone-input:
    type: input
    textColor: '#000000'
    border: '1px solid #f0f0f0, bottom only'
    rounded: 0px
    height: 44px
    padding: 0px
    typography: 16px / 400
    focus: 'Bottom border becomes 1px solid #a4ce4c under real Tab focus; no outline.'
    use: 'Empty input: 请输入手机号码, input[name=tel], 400px wide, transparent in the trial form. Only the initial rest and authored keyboard focus are exported; pointer readings followed validation on blur.'
  news-card:
    type: card
    textColor: '#000000'
    rounded: 0px
    height: 404.4px
    padding: 0px
    typography: 18px / 400
    hover: Visible h4 label opacity changes 1 to 0.6; descendant image transform changes none to matrix(1.2, 0, 0, 1.2, 0, 0).
    pressed: Same sampled title and image changes as hover, plus outer anchor opacity 0.8.
    use: 'Link: the October-deliveries article ending /5611.html, 418px wide on a white #ffffff section. The anchor is transparent and computes to 12px/400; the recorded component font describes its visible h4 title. Lazy image loading persisted after focus blur and is excluded from focus tokens.'
fonts:
  roles:
    display: noto-sans
---

# Design System Inspiration of XPeng

## Overview

### Visual Theme & Atmosphere

XPeng builds intelligent electric vehicles and presents an expanding technology ecosystem around them. Its company timeline records its founding in August 2014. The company's 2021 brand renewal made exploration explicit: the sharpened X comes from the X in “eXplorer”, extends outward and also suggests spread wings. The announcement connects that mark with intelligence, quality, exploration, a contemporary attitude and sustainability. [Company history](https://www.xiaopeng.com/about.html), [brand-renewal announcement](https://www.xiaopeng.com/news/company_news/4091.html).

That story has continued to evolve. In its September 2026 announcement, XPeng describes itself as an explorer of mobility in the physical-AI world and a global embodied-intelligence company, linking cars, Robotaxi and humanoid robots through a shared technology base. The measured homepage places AI cars, AI robots, flying cars, its AI chip and Robotaxi in the navigation. [Current company positioning](https://www.xiaopeng.com/news/company_news/5591.html), [live homepage](https://www.xiaopeng.com/).

The visual expression on this homepage combines expansive vehicle and landscape imagery, white and pale-grey sections, black outlined or filled actions, widely tracked action labels, and a yellow-green interaction accent, **#a4ce4c**. The X mark is white over the opening photograph. These are observations of the captured site, rather than additional corporate brand principles. The measured edition is the Chinese homepage at `www.xiaopeng.com/`; it did not redirect, although its HTML declares `lang="en"`.

Primary tasks are to explore models, order a vehicle, book a test drive, and find charging, stores and after-sales information. [Live homepage](https://www.xiaopeng.com/).

### Brand Narrative

The company's own history connects a 2014 beginning with a 2021 exploration-led brand renewal. Its 2026 writing extends that exploration into physical AI and embodied intelligence. The outward-reaching X and the current mix of vehicles, robots and mobility technology give that continuity concrete expressions. The homepage's monochrome controls and small green signals are the measured web expression of this story. [History](https://www.xiaopeng.com/about.html), [2021 renewal](https://www.xiaopeng.com/news/company_news/4091.html), [2026 positioning](https://www.xiaopeng.com/news/company_news/5591.html).

### Principles

The 2021 brand announcement explicitly identifies five core values: intelligence, quality, exploration, a contemporary/cool attitude, and sustainability. Treat these as the stated values of that renewal. The present reference's layout and interaction recipes come from the live homepage; the announcement does not prescribe their CSS. [Brand announcement](https://www.xiaopeng.com/news/company_news/4091.html).

### Personas

No user-persona research was opened; no persona is inferred from the capture.

## Colors

The live census contains 58 computed root custom properties: 56 `--xpm-*` theme properties and two `--swiper-*` library properties. The XPM theme is deployed in a stylesheet on XPeng's asset host; upstream library authorship is unresolved. Swiper defaults are excluded from the reference palette. The action accent below is measured on controls, independently of the root theme's named primary colour. [Deployed theme](https://xps01.xiaopeng.com/domestic/_next/static/chunks/6cbb6e31566e3f08.css), [action styles](https://xps01.xiaopeng.com/domestic/_next/static/chunks/de4ed038530d8c6f.css).

| Role | Value | Evidence on the measured page |
|---|---|---|
| Interaction accent | **#a4ce4c** | Action pseudo-element fills, Charging underline and phone-input focus rule |
| Ink | **#000000** | L05 detail label and border; order action's empty background span; news title |
| Foreground | **#666666** | All seven paragraph-ink entries in the census |
| Inverse | **#ffffff** | Order label and page-top navigation |
| Canvas | **#ffffff** | Census background, including the news section behind its transparent card links |
| Pale surface | **#f9f9f9** | App-download section's declared background; two census background entries |
| Muted | **#999999** | Footer registration links in the survey |
| Input rule | **#f0f0f0** | Initial empty phone field's bottom border |
| Input validation rule | **#ec4e39** | Empty phone field after focus was blurred; its class becomes `error-input` |

Keep alpha values intact. The theme's `--xpm-color-primary` is `#000000e6`, and `--xpm-color-primary-icon` / `--xpm-color-success` are `#8cb654`; neither is the measured action green. The Charging label becomes `rgba(0, 0, 0, 0.6)` on hover in the white header. Twelve census backgrounds are `rgba(255, 255, 255, 0.3)`. These observations do not establish a universal semantic colour system.

## Typography

| Evidence class | Verified finding |
|---|---|
| Official product-use statement | No opened brand or company article identifies an official product typeface. |
| Live-loaded | `document.fonts` lists **`noto-sans normal normal`**. XPeng's CSS defines that alias with a WOFF2 URL ending `SourceHanSansCN-3500.woff2`, and assigns it to `.title-wrapper-new .font`; the homepage contains matching title elements. The alias is retained only as the display-family token. |
| Official distributed assets | A font source URL is declared on XPeng's asset host. No standalone font distribution, metadata or reuse licence was opened; no download was made. |
| Declared-only | `HEHE85W` has a TrueType source declaration and is absent from the loaded-face list. The body and measured controls declare a system stack; this does not prove which installed face rendered their glyphs. |
| Unresolved | The internal family/version of the WOFF2 file and the actual platform face used by the `system` stack were not verified. |

Font-file declarations are visible in the [global stylesheet](https://xps01.xiaopeng.com/domestic/_next/static/chunks/7e53d0ee997d118a.css); the display selector appears in the [component stylesheet](https://xps01.xiaopeng.com/domestic/_next/static/chunks/de4ed038530d8c6f.css). A filename is retained as a filename, not used to rename the loaded alias. No specimen is supplied for `HEHE85W` or any unverified platform face. **Substitute: none chosen.**

Measured typography is precise even where the rendered family remains unresolved:

- L05 action links: **16px / 400**, **24px** line height, **2.56px** letter spacing; padding **11px 32px**.
- Header test-drive link: **16px / 400**, **17.6px** line height; padding **8px 16px**.
- Charging navigation: **16px / 400**, **35px** line height, normal letter spacing.
- Phone field: **16px / 400**, **24px** line height, normal letter spacing.
- News card: outer anchor **12px / 400**, **16.8px** line height; visible `h4` label **18px / 400**.

The root XPM theme exposes font sizes **9–18px** and line-height values **18, 20, 23, 24 and 26px**. Those are live theme values; they are not evidence that every size is rendered in this viewport.

## Layout

At **1440 × 1000**, a **56px** fixed header sits over the opening model image. The page then presents a model showcase, charging and after-sales information, a company-image section, news, stores, a test-drive form and an app-download section. The captured full-page height is **9094px**. These are desktop homepage observations. [Live homepage](https://www.xiaopeng.com/).

The three news anchors measure **418px** wide at x positions **61, 511 and 961px**, giving **32px** gaps and **61px** outer margins in this capture. Their loaded image area is **418 × 314px**. Action spacing is carried by measured padding: 11px vertically / 32px horizontally, with the smaller header action using 8px / 16px. The exported spacing names describe those specific padding axes and the news-column gap; they do not define a general spacing ramp.

### Responsive Behavior

Mobile rendering and interaction were not measured; the browser evidence is desktop 1440 × 1000 only.

## Elevation & Depth

All six selected controls have computed `box-shadow: none`. The order action's black fill is an empty child layer, while the green hover fill is a pseudo-element; depth here comes from layered photography and fills rather than a measured control-shadow scale. The fixed header reports z-index 99. No broader elevation scale was verified.

## Motion & Easing

The five links report the raw computed self transition **`opacity 0.2s ease-in-out 0s`**. The phone input reports **`all 0s ease 0s`**. The state probe recorded longest transitions of **300ms** for the two L05 links and news card, **200ms** for Charging, and **0ms** for the input; its initial header-focus reading encountered **800ms** while the later header pointer readings encountered **300ms**. These are per-control settle observations, not a proposed motion scale.

The fetched action stylesheet separately declares `transition:width .3s` on the green pseudo-element and `width:102%` on hover. That is stylesheet evidence, not a separately captured raw computed pseudo-element transition. [Action stylesheet](https://xps01.xiaopeng.com/domestic/_next/static/chunks/de4ed038530d8c6f.css).

## Components

The measured action targets are links, including links nested inside button wrappers. The anchor carries the visible label, border and 4px radius; the wrapper's own radius is 0px.

| Control | Rest identity | Measured interaction |
|---|---|---|
| L05 “立即订购” | 158.2 × 44px; 4px radius; transparent anchor, white label; empty child span fills black #000000 | Hover expands a #a4ce4c `::before` layer from 0 to 161.406px wide, changes its height from 44 to 40px and adds a 1px green border. The anchor adds a transparent 1px border and becomes 160.2px wide; the black child becomes 42px high. Its arrow image changes. Press keeps those sampled changes and sets anchor opacity to 0.8. |
| L05 “了解L05” | 158.7 × 44px; 4px radius; transparent; black label and 1px black border | Hover makes the label white and the border transparent, expands the green `::before` layer from 0 × 42px to 159.82 × 40px with a 1px green border, and changes the arrow image. Press adds opacity 0.8. |
| Header “预约试驾” | 98 × 35.6px; 4px radius; transparent | At page top its label/border are white. The pointer pass measured black label/border over the scrolled white header. Hover makes that label white, clears the border and expands the green `::after` from 0 × 33.5938px to 96 × 31.5938px with a 1px green border; press adds opacity 0.8. |
| Charging “充电” | 32 × 35px; 0px radius; transparent | White at page top, black in the scrolled white header. Pointer hover in that latter context changes the label to `rgba(0, 0, 0, 0.6)` and expands the green underline from 0 to 32px at 2px height. Press adds opacity 0.8. |
| Phone input | 400 × 44px; 0px radius; no padding; transparent; black foreground; bottom-only rule #f0f0f0 | Real Tab focus changes the bottom rule to 1px solid #a4ce4c. Blurring the empty field produces the separate #ec4e39 validation rule. |
| News article `/5611.html` | 418 × 404.4px; 0px radius; no padding; transparent on white; 18px/400 black visible title | Hover changes title opacity from 1 to 0.6 and image transform from `none` to `matrix(1.2, 0, 0, 1.2, 0, 0)`. Press adds outer-anchor opacity 0.8. |

The action arrow is a 16 × 16px background image in `::after`. The raw probe records an image-URL change; the SVG's internal artwork was outside the state comparison. This reference does not infer an SVG path change.

XPM radius properties are **4px** (`s`), **6px** (`sm`), **8px** (`m`) and **12px** (`l`). The selected action links use 4px; the phone input and news-card anchor use 0px. No card-radius role is inferred from the other root values.

### States

The five measured links have a keyboard-focus outline of `rgb(0, 95, 204) auto 1px off 1px`. It is browser-owned and generates no brand focus token. The news image also loads when scrolled into view during the Tab walk; its persistent opacity/source/size changes are lazy loading, not a focus treatment.

The phone field has an authored green bottom rule under Tab focus. After blur, its empty value triggers the red validation rule. The later hover/pressed samples change that already-invalid rule from `rgb(236, 78, 57)` to `rgb(204, 204, 204)`; those are retained as raw observations and are omitted from the component's initial-state recipe.

Hover and press snapshots matched the corresponding pseudo-classes at sampling time. Every pointer crop subsequently reported that the state stopped matching during capture, so the raw computed snapshots carry those claims; the crops cannot independently establish the settled pointer appearance. Disabled states were not measured.

## Do's and Don'ts

To reproduce this measured surface:

- Use large vehicle imagery, a restrained white/grey canvas and the measured green interaction accent.
- Preserve the 44px action height, 4px radius, tracked 16px labels and layered fill behaviour.
- Keep a news card's visible title typography separate from its smaller outer-anchor typography.
- Preserve the phone field's bottom-only focus rule.
- Do not use Swiper's blue default as XPeng's interaction accent, turn Chrome's `auto` outline into a brand token, or assign the display font to unresolved UI text.

These are implementation directions derived from the capture, not an official XPeng design manual.

## Voice & Tone

The homepage pairs aspirational company language with short action labels: “未来出行探索者”, “了解L05”, “立即订购” and “预约试驾”. The company page uses exploration as its organising idea and states a mission of becoming an intelligent technology enterprise loved by users worldwide. This describes the opened copy, without claiming a separate tone-of-voice guide. [Company page](https://www.xiaopeng.com/about.html), [homepage](https://www.xiaopeng.com/).

## Agent Prompt Guide

“Build a desktop vehicle homepage with a 56px fixed navigation header, large photographic model presentation, white sections and pale #f9f9f9 app-download surface. Use #000000 ink, #666666 paragraph foreground and #a4ce4c for the measured interaction accent. Place 44px action links with 4px corners, 11px 32px padding and 16px/400 text at 24px line height with 2.56px tracking. Reproduce the green pseudo-element fill on hover and 0.8 link opacity when pressed. Use `noto-sans` only for the verified display role; the measured UI family remains unresolved. Give the empty phone field a 1px green bottom rule on keyboard focus.”
