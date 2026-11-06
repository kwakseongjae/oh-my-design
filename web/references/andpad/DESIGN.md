---
name: ANDPAD
colors:
  primary: '#ef3340'
  primary-hover: '#b02d36'
  action-dark: '#c8102e'
  action-dark-hover: '#95102a'
  foreground: '#000000'
  canvas: '#ffffff'
  surface: '#f9f9f9'
typography:
  button:
    fontSize: 14px
    fontWeight: 700
    lineHeight: 28px
    use: Main outlined document link; computed metrics only, font family unresolved.
  navigation:
    fontSize: 14px
    fontWeight: 700
    lineHeight: 28px
    use: Header pricing link; computed metrics only.
  card-heading:
    fontSize: 20px
    fontWeight: 700
    use: Construction-management card h3; family not verified as loaded.
rounded:
  none: 0px
components:
  hero-download:
    type: button
    backgroundColor: '#ef3340'
    textColor: '#ffffff'
    rounded: 0px
    height: 85px
    padding: 15px 31px 20px
    typography: 22px / 700
    hover: 'bg #b02d36'
    pressed: 'bg #b02d36'
    use: 'Hero link to /downloads/sekou/, 333px wide. The visible Japanese label is an image (alt: 資料ダウンロード), not a specimen of the computed 22px font. Pointer states measured with covering overlays hidden.'
  header-docs:
    type: button
    backgroundColor: '#c8102e'
    textColor: '#ffffff'
    rounded: 0px
    height: 50px
    padding: 0px
    typography: 12px / 400
    hover: 'bg #95102a'
    pressed: 'bg #95102a'
    use: 資料請求 — a 150px-wide header link to /downloads/sekou/ with a document icon.
  header-contact:
    type: button
    backgroundColor: '#ef3340'
    textColor: '#ffffff'
    rounded: 0px
    height: 50px
    padding: 0px
    typography: 12px / 400
    hover: 'bg #b02d36'
    pressed: 'bg #b02d36'
    use: お問い合わせ — a 150px-wide header link to the inquiry page with an envelope icon.
  outline-docs:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#000000'
    border: '1px solid #ef3340'
    rounded: 0px
    height: 50px
    padding: 10px 20px
    typography: 14px / 700
    hover: 'bg #ef3340; fg #ffffff'
    pressed: 'bg #ef3340; fg #ffffff'
    use: メールで資料を受け取る — the main link to /downloads/inheritance_research, 304.7px wide. Its red border stays unchanged when the white surface fills red.
  pricing-nav:
    type: button
    textColor: '#000000'
    rounded: 0px
    height: 31px
    padding: 0px 0px 3px
    typography: 14px / 700
    hover: 'fg #ef3340; background-size 0% 1px to 100% 1px; background-position 100% 100% to 0px 100%'
    pressed: 'fg #ef3340; background-size 100% 1px; background-position 0px 100%'
    use: 料金 — a transparent 28px-wide navigation link on the white header. A solid-red background gradient supplies the 1px underline.
  construction-card:
    type: card
    textColor: '#000000'
    rounded: 0px
    height: 350.6px
    padding: 0px
    typography: 13px / 400
    hover: 'VIEW MORE descendant fg #ef3340; .c-more__border::after width 21px to 32px, height 1px'
    pressed: 'VIEW MORE descendant fg #ef3340; .c-more__border::after width 32px, height 1px'
    use: Transparent 304.7px-wide link on the white product grid to /products/construction_management. The h3 is 20px/700 and stays black; only VIEW MORE and its line change in the measured pointer states.
omitted:
  - section: spacing
    reason: No verified values in current evidence.
---

# Design System Inspiration of ANDPAD

## Overview

### Visual Theme & Atmosphere

ANDPAD connects construction-site work with business management: photographs, schedules, drawings and chat sit within a cloud construction-project management service. It launched in 2016. In May 2020, the company changed its name from Oct to ANDPAD and renewed its logo around the idea of building together and supporting one another. Its mission is “幸せを築く人を、幸せに。” ([2020 brand announcement](https://andpad.co.jp/news/118/), [tenth-anniversary announcement](https://andpad.jp/news/20260331)).

The homepage gives that identity a direct visual expression: black Japanese headings, white space, square red actions and imagery of buildings, people and the product. Bright red `#ef3340` and deeper red `#c8102e` distinguish the two adjacent header actions. The hero pairs a large statement on the left with moving imagery divided into tall rectangular panels on the right. These are observations of the captured homepage, rather than published brand prescriptions.

The product is expanding beyond its original construction-management application. ANDPAD's 2026 anniversary announcement describes an evolution into AI through Stellarc, alongside BPO, funding and human-resource services. The live homepage title now leads with “建設バーティカルAI”. The company's published design writing also documents Tsukuri, a system primarily for its SaaS products as of December 2023. The measurements below belong specifically to the public Japanese marketing homepage; no equivalence with Tsukuri's application tokens is established. ([Anniversary announcement](https://andpad.jp/news/20260331), [Tsukuri design account](https://tech.andpad.co.jp/entry/2023/12/06/100000)).

Primary homepage tasks are to explore products, industries and customer stories, inspect pricing, request information and contact the company. The measured URL stayed `https://andpad.jp/`, with HTML `lang="ja"`; there was no regional redirect.

### Brand Narrative

The 2020 name and logo change linked ANDPAD's identity to accomplishing work with other people. The 2026 anniversary material traces the service from its 2016 construction-management launch toward wider support for construction businesses. The rectangular imagery and red actions are the live marketing expression measured here. ([Brand announcement](https://andpad.co.jp/news/118/), [anniversary history](https://page.andpad.jp/10th_anniversary/)).

### Principles

ANDPAD's published Tsukuri account identifies consistent experiences across its products as a design-system need and describes replacing individually judged colour rules with more systematic tokens. The brand announcement stresses building with others. For recreating the measured homepage, the practical rules are square geometry, clear action labels and red feedback at the interactive label or surface. The latter rules are derived from observation, rather than quoted company principles. ([Tsukuri account](https://tech.andpad.co.jp/entry/2023/12/06/100000), [brand announcement](https://andpad.co.jp/news/118/)).

### Personas

No behavioral personas were verified; the privacy notice identifies project participants including subcontractors, partner businesses, their employees and clients as users. ([Privacy notice](https://andpad.jp/privacy)).

## Colors

These are computed colours from first-party homepage controls and the rendered census. Their registry names describe observed roles; they are not claims about named ANDPAD CSS variables.

| Role | Value | Observed use |
|---|---|---|
| Primary red | `#ef3340` | Hero download and header inquiry surfaces; outlined-link hover; pricing and card-link accents |
| Primary hover | `#b02d36` | Settled hover and pressed background of hero download and header inquiry |
| Dark action red | `#c8102e` | Header 資料請求 link at rest |
| Dark action hover | `#95102a` | Header 資料請求 link on hover and while pressed |
| Foreground | `#000000` | Paragraph ink: 137 census entries; navigation and product-card text |
| Canvas | `#ffffff` | Page/header ground, outlined-link rest surface and text on filled actions |
| Light surface | `#f9f9f9` | Six census background entries; project-story links also carry this background |

The census also records `#222222` on four borders and `#cccccc` on one. Nine paragraph entries are `#c0c0c0`; this is an observed secondary ink, not the body foreground. No semantic success, warning or error palette was verified.

All 47 recorded root custom properties, also found by the stylesheet walk, are WordPress `--wp--preset--*` defaults. Their colours, gradients, shadows, font sizes, spacing and aspect ratios are excluded from ANDPAD's token set. No first-party custom-property namespace was observed in the readable sheets.

## Typography

The evidence classes remain separate:

- **Official product use:** the opened first-party brand and Tsukuri articles do not specify a product font family.
- **Live-loaded:** the survey's `document.fonts` census reports `loaded: []`. No family or font specimen is published from this capture.
- **Official distributed assets:** no company-distributed font package or font licence was verified.
- **Declared-only:** body, h1 and button CSS begin with `中ゴシックBBB`. The measured pricing link and hero anchor declare `見出ゴMB31`. Readable `@font-face` rules name `太ゴB101`, `見出ゴMB31` and `中ゴシックBBB`, each with `font-weight: bold`, and TypeSquare source URLs under `wf.typesquare.com`. Those declarations do not establish a loaded face.
- **Unresolved:** a Google Fonts stylesheet requests M PLUS 1p and Open Sans; that stylesheet was unreadable to the CSS walk, and neither face appears in the loaded census. Actual glyph selection and the CSS fallback stack's use remain unverified. **Substitute: none chosen.**

Verified metrics survive the missing family: header actions are 12px/400 with 24px line height; pricing is 14px/700 with 28px line height; the outlined document link is 14px/700 with 28px line height. The construction-card anchor computes to 13px/400 and 26px line height, while its visible h3 label is 20px/700. The hero anchor computes to 22px/700 with 44px line height, but its Japanese CTA label is an image, not live text set in that font.

## Layout

The desktop header puts the logo at the left, utilities above the main navigation, and paired red actions at the right. The hero uses an asymmetric text-and-imagery composition. Farther down, product cards form three columns: the survey records x positions 216, 560 and 905, with each card 304.7px wide. News rows span 994px. Use those measured relationships when recreating this desktop surface; a general spacing scale was not established.

### Responsive Behavior

Only the 1440×1000 desktop surface was measured; mobile layouts, breakpoints and reduced-motion behavior are unverified.

## Elevation & Depth

Filled hero and header links use the computed inset shadow `rgba(0, 0, 0, 0.2) 0px -5px 0px -2px inset`. The outlined document link, pricing link and construction-card anchor have `box-shadow: none`. Preserve this shallow lower-edge treatment on the filled links; there is no measured floating-card shadow to reuse.

## Motion & Easing

The raw computed transition on the hero, both header actions and the outlined document link is `background-color 0.5s ease 0s`. The pricing link uses `background-size 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) 0s` for its underline. The product-card anchor itself reports `all 0s ease 0s`; no descendant transition string was captured, so no duration is assigned to its extending line.

---

Measured 2026-11-06 from [andpad.jp](https://andpad.jp/) with the capture tool at 1440×1000, `ja-JP`. Company context comes from the linked first-party brand, history, privacy and design articles. Raw provenance, census, control identities, overlay limitations and host controls are recorded in the accompanying report and verification notes.

## Components

All six measured controls are links. Heights and widths describe this 1440×1000 desktop capture.

| Control | Rest geometry and surface | Measured pointer treatment |
|---|---|---|
| Hero 資料ダウンロード | 333×85px; radius 0; padding 15px 31px 20px; `#ef3340` / `#ffffff` | Background becomes `#b02d36` on hover and while pressed. Visible label is an image. |
| Header 資料請求 | 150×50px; radius 0; padding 0; `#c8102e` / `#ffffff` | Background becomes `#95102a` on hover and while pressed. |
| Header お問い合わせ | 150×50px; radius 0; padding 0; `#ef3340` / `#ffffff` | Background becomes `#b02d36` on hover and while pressed. |
| メールで資料を受け取る | 304.7×50px; radius 0; padding 10px 20px; `#ffffff` / `#000000`; 1px `#ef3340` border | Background becomes `#ef3340`, text `#ffffff`; border remains red on hover and while pressed. |
| Header 料金 | 28×31px; radius 0; padding 0 0 3px; transparent on white, `#000000` text | Text becomes `#ef3340`; the red 1px underline's background-size expands from 0% to 100%. |
| 施工管理 product card | 304.7×350.6px; radius 0; padding 0; transparent on white, `#000000` text | VIEW MORE becomes `#ef3340`; `.c-more__border::after` grows from 21×1px to 32×1px. The heading remains black. |

The first pass could not measure the hero's pointer states because an Optemo chat iframe covered it. The second pass used `hideOverlays: true` for that control. Other reported pointer states matched the intended control's `:hover`, and pressed captures also matched `:active`. Some first-pass crops contain portions of the still-open chat overlay; the raw DOM measurements are retained with that limitation.

### States

Each control has a settled authored hover change and a measured pressed state matching that hover treatment. In the recorded comparison scope, `changedVsHover` is empty for all six pressed captures. The scope includes the control and its pseudo-elements, descendants and their pseudo-elements, and three ancestor levels; it does not prove absence of changes inside external images or cross-origin frames.

Keyboard Tab focus adds `rgb(0, 95, 204) auto 1px off 1px` on all six links. This is Chrome's default ring, so no focus token is declared. On the product card, an ancestor also changes from translateY(30px)/opacity 0 to its visible position/opacity 1; both changes persist after blur and are excluded from focus styling. Disabled, invalid, selected and loading states were not verified.

## Do's and Don'ts

- Keep the measured controls square and distinguish bright-red inquiry/download actions from the darker header document request.
- Preserve the outlined document link's red border when its surface fills red.
- Apply the product-card hover colour to VIEW MORE and its line; its heading stays black.
- Keep family declarations separate from loaded-font evidence, and exclude WordPress presets from the brand palette.
- Preserve a usable keyboard indicator; the measured browser ring is not a brand focus token.

## Voice & Tone

The homepage combines the broad promise “経営から現場まで” with concrete tasks such as “資料請求”, “お問い合わせ” and “メールで資料を受け取る”. For this surface, use short Japanese action labels and specific work outcomes. This is an interpretation of the captured copy, not a verified corporate writing guideline.

## Agent Prompt Guide

“Build a desktop marketing surface using white `#ffffff`, black `#000000`, square controls and bright red `#ef3340`. Pair 150×50px header links: document request in `#c8102e`, inquiry in `#ef3340`. Darken them on hover to `#95102a` and `#b02d36` respectively. Make a 50px outlined document link with 10px 20px padding, a red border and 14px/700 computed type metrics; hover fills it red and makes its text white. Use three product-card columns, with a VIEW MORE line that grows from 21px to 32px. Font family: unresolved; substitute: none chosen.”

## Governance

### Known Gaps

- **Contrast, `hero-download`.** Text `#ffffff` on `#ef3340` measures 4.02:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `header-contact`.** Text `#ffffff` on `#ef3340` measures 4.02:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
