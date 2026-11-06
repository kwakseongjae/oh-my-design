---
name: KKBOX
colors:
  primary: '#09cef6'
  brand: '#09cef6'
  canvas: '#111111'
  foreground: '#ffffff'
  cta-foreground: '#00b6e1'
  surface: '#f2f2f2'
  feature-surface: '#232323'
  card-surface: '#1e1e1e'
  secondary-foreground: '#cdcdcd'
  muted-foreground: '#a0a0a0'
  footer-foreground: '#7d7d7d'
typography:
  display-hero:
    fontSize: 120px
    fontWeight: 600
    use: Desktop hero h1 CSS at min-width 1024px; Work Sans is declared-only, with no loaded face established
  body:
    fontSize: 16px
    fontWeight: 400
    use: Subscription paragraph CSS; feature-link labels also measured at 16px/400; the CSS root baseline is 14px
  navigation:
    fontSize: 14px
    fontWeight: 400
    use: Measured desktop header links, line-height 26.04px
  button:
    fontSize: 18px
    fontWeight: 500
    use: Measured first hero experience link, line-height 25px
rounded:
  none: 0px
  card: 12px
  feature: 17px
  action: 30px
spacing:
  sm: 16
  base: 48
components:
  button-primary:
    type: button
    backgroundColor: '#f2f2f2'
    textColor: '#00b6e1'
    rounded: 30px
    padding: 16px 48px
    height: 57px
    typography: 18px / 500
    hover: '#ffffff'
    pressed: '#ffffff'
    use: 'Link: first 立即免費體驗 in .key-vision, href /get-app, on the #111111 homepage. Hover and press brighten the pill; focus is the browser auto ring.'
  nav-feature:
    type: button
    textColor: '#ffffff'
    rounded: 0px
    padding: 0px
    height: 16px
    typography: 14px / 400
    hover: 'fg #09cef6; ::after border-bottom 1px solid #09cef6'
    use: 'Link: header 特色功能, href /tw/tc/feature. Transparent over the header''s rgba(18, 18, 18, 0.8) surface. Press was unmeasured; focus is browser auto.'
  nav-download:
    type: button
    textColor: '#09cef6'
    rounded: 0px
    padding: 0px
    height: 16px
    typography: 14px / 400
    hover: '::after border-bottom 1px solid #09cef6'
    pressed: '::after border-bottom 1px solid #09cef6'
    use: 'Link: header 下載, href /tw/tc/download. Transparent over the header''s rgba(18, 18, 18, 0.8) surface; its cyan label stays cyan.'
  lossless-more:
    type: button
    textColor: '#cdcdcd'
    rounded: 0px
    padding: 0px
    height: 22px
    typography: 16px / 400
    hover: 'label span text-decoration: underline solid #cdcdcd'
    pressed: 'label span text-decoration: underline solid #cdcdcd'
    use: 'Link: 了解更多, href /service/lossless/tw, transparent on the #232323 lossless panel. The anchor is 511px wide; the visible label span is 64px wide.'
---

# Design System Inspiration of KKBOX

## Overview

### Visual Theme & Atmosphere

KKBOX is a Taiwan-origin music streaming service within KKCompany Technologies. The group's annual report dates its Taiwan launch to 2005. Its identity connects listening with being heard: the official logo explanation describes changing the musical lowercase “b” into an uppercase “B” as the service expanded into music and podcasts. The open-box icon represents sound moving between creators and listeners. [Company history](https://ir.kkcompany.com/files/uploads/%E5%85%AC%E9%96%8B%E8%AA%AA%E6%98%8E%E6%9B%B8/2023%20Annual%20Report%2020240607_Final.pdf), [official brand guide](https://www.kkbox.com/about/tw/zh-tw/logo).

The homepage gives that identity a dark stage: a near-black `#111111` canvas, large white lettering, layered coloured background shapes, and pale pill actions. The cyan navigation and the quieter cyan CTA label are distinct colours. Feature panels introduce album imagery and product illustrations below the typographic hero; the page continues into subscriptions and FAQs. These are observations of the captured homepage, rather than a rule for every KKBOX surface.

KKBOX's current evolution also extends beyond listening. The company announced KKBOX ONE in May 2026, connecting subscriptions across video, entertainment, daily living, dining and travel through one account. That is product context; this reference's interface measurements come from the public homepage. [KKBOX ONE announcement](https://www.kkcompany.com/en-us/newsroom/kkbox-launches-kkbox-one/).

The measured homepage is the Taiwan Traditional Chinese edition (`www.kkbox.com/tw/tc/`), reached from the global URL with HTML language `zh-hant`.

#### Primary tasks

- Explore music-service features, including lossless listening and social listening.
- Follow “立即免費體驗” to `/get-app` or review subscription options.
- Browse feature imagery and the service FAQs.

### Brand Narrative

The company's history records KKBOX's Taiwan launch in **2005**, its podcast-service launch in **2020**, and a Hi-Res format in **2021**. The current brand guide connects the uppercase B to broader sound experiences and describes an opened box where creators can be heard and listeners can explore. Its branding therefore has documented roots in both listening and participation. [Company history](https://ir.kkcompany.com/files/uploads/%E5%85%AC%E9%96%8B%E8%AA%AA%E6%98%8E%E6%9B%B8/2023%20Annual%20Report%2020240607_Final.pdf), [brand explanation](https://www.kkbox.com/about/tw/zh-tw/logo).

The **2026** KKBOX ONE announcement extends the service into subscriptions across everyday activities. It supports describing an expanding product ecosystem, without assigning those other products the homepage's measured design tokens. [Official announcement](https://www.kkcompany.com/en-us/newsroom/kkbox-launches-kkbox-one/).

### Principles

The official About page's values are **Daring, Curiosity and Diversity**. Its stated mission links diverse voices, creators being seen and heard, and listeners finding resonance. For the measured homepage, retain the large white hierarchy, dark surfaces, rounded actions and specific hover feedback as implementation observations. [Official values](https://www.kkbox.com/about/tw/zh-tw).

### Personas

No first-party personas were verified.

## Colors

The official brand guide specifies **`#09cef6`**, RGB 9 / 206 / 246, Pantone 305C. The live header uses that colour for its highlighted download link and for the feature link's hover label and underline. The hero CTA retains the darker **`#00b6e1`** label. Preserve this distinction. [Official colour specification](https://www.kkbox.com/about/tw/zh-tw/logo).

| Role | Value | Evidence and use |
|---|---|---|
| Primary / brand | `#09cef6` | Official standard colour; computed header link colour and hover underline |
| Canvas | `#111111` | Homepage CSS body background; measured background census and secondary-link backdrop |
| Foreground | `#ffffff` | White hero CSS and the most frequent paragraph ink: 10 paragraphs |
| CTA foreground | `#00b6e1` | First “立即免費體驗” link label at rest, hover and press |
| Pale action surface | `#f2f2f2` | Hero CTA rest background; becomes `#ffffff` on hover and press |
| Feature surface | `#232323` | Measured lossless-panel ancestor background |
| Card surface | `#1e1e1e` | Background census and desktop feature-card CSS |
| Secondary foreground | `#cdcdcd` | Lossless link label; also paragraph ink on 5 paragraphs |
| Muted foreground | `#a0a0a0` | Subscription-options link and one paragraph |
| Footer foreground | `#7d7d7d` | Footer links in the survey |

The header behind the navigation is `rgba(18, 18, 18, 0.8)`. These values are measured or directly declared; the census did not expose a first-party custom-property palette.

## Typography

Keep the evidence classes separate:

- **Official product use:** no opened first-party document establishes a named typeface as the product UI face.
- **Live-loaded:** the homepage census reports `fonts.loaded: []` and `fontFaces: []`. No face qualifies for a live specimen or a typography-family token from this capture. This does not prove that the page rendered without locally installed fonts.
- **Official distributed font assets:** none opened. The About page offers a brand asset pack; its download was not followed. The opened 2020 brand book is a document, not a verified font binary; its typeface text extraction is encoded and its PDF screenshots were unavailable.
- **Declared-only:** body CSS lists `"Helvetica Neue", Arial, "PingFang TC", "Heiti TC", 微軟正黑體, sans-serif`. The hero prepends `"Work Sans", "Franklin Gothic"`. The census's sampled native button declares `Arial`. These are declarations, with no loaded-face identification. Work Sans and Helvetica Neue retain this metadata, without specimens.
- **Unresolved:** the actual rendered face identity was not established; no named family is promoted to the family tokens.

**Substitute: none chosen.**

The hierarchy remains useful without asserting a rendered family. The homepage stylesheet declares the desktop hero at **120px / 600**, white, with line-height **1.1719** at widths from **1024px**. Its root baseline is **14px**. Subscription paragraphs are **16px / 400** in CSS; the measured lossless and subscription links are also **16px / 400**. Header links measure **14px / 400**, line-height **26.04px**. The hero CTA measures **18px / 500**, line-height **25px**. [Homepage stylesheet](https://a-www.kfs.io/static/css/page-home-86d44e85ce.css), [reset stylesheet](https://a-www.kfs.io/static/css/reset-fce0431c69.css).

## Layout

Preserve the homepage's vertical sequence: large typographic hero, lossless feature panel, horizontal feature cards, subscription area, FAQs and footer. The full-page capture shows substantial dark space between sections. The hero's main action has `16px` vertical and `48px` horizontal padding; those are component dimensions, not evidence of a universal spacing scale.

The stylesheet caps the hero slogan at **1144px**, the main feature panel at **1096px**, and the lower homepage container at **1030px**. At desktop widths the main feature panel uses two columns and the smaller feature cards use a horizontally scrolling row. These are CSS declarations, corroborated by the desktop composition. [Homepage stylesheet](https://a-www.kfs.io/static/css/page-home-86d44e85ce.css).

### Responsive Behavior

The browser capture is **1440 × 1000** only. The homepage CSS declares hero sizes of **45px** by default, **90px** from **768px**, and **120px** from **1024px**. The CTA's `16px 48px` padding is declared outside those media queries. The header stylesheet switches from its mobile header to its desktop header at **1024px**. These are stylesheet facts; mobile rendering and touch behaviour were not tested. [Homepage CSS](https://a-www.kfs.io/static/css/page-home-86d44e85ce.css), [header CSS](https://a-www.kfs.io/static/external/portal-menu/header-5e41cb8c98.css).

## Elevation & Depth

The pale `#f2f2f2` CTA contrasts with the `#111111` ground and has `box-shadow: none`. The measured lossless-panel ancestor also has no shadow; its `#232323` surface separates it from the page. Homepage CSS declares **17px** corners for that desktop panel and **12px** corners for the smaller feature cards. Keep the **30px** action radius separate from those panel radii.

The header supplies a translucent surface; its stylesheet declares backdrop blur. This is not evidence of a global elevation scale. [Header stylesheet](https://a-www.kfs.io/static/external/portal-menu/header-5e41cb8c98.css).

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.none`: `none`

## Motion & Easing

The hero CTA's raw computed transition is **`background-color 0.2s ease 0s`**. The other four links report **`all 0s ease 0s`** on the link itself. That does not specify the duration of their pseudo-elements or ancestors. No shared motion system or reduced-motion behaviour was verified.

---

**Verified:** 2026-11-06. **Proof:** see `verification.md` for source quotations, census, control identities, state limitations and changes since the prior reference. Homepage tokens describe the captured Taiwan marketing homepage.

## Components

All measurements below are from the desktop homepage. Each action is an anchor link. The measured links have no border or box-shadow at rest.

| Control | Rest identity | Measured interaction |
|---|---|---|
| Hero “立即免費體驗” | 204 × 57px; 30px radius; `16px 48px` padding; 18px / 500; `#f2f2f2` background and `#00b6e1` label | Hover and press change only its background to `#ffffff` within the compared scope |
| Header “特色功能” | 56 × 16px anchor; 0px radius and padding; 14px / 400; transparent with white label | Hover changes the label to `#09cef6` and paints a 1px cyan bottom border on `::after`; press unmeasured |
| Header “下載” | 28 × 16px anchor; 0px radius and padding; 14px / 400; transparent with `#09cef6` label | Hover and press paint a 1px `#09cef6` bottom border on `::after` |
| Lossless-panel “了解更多” | 511 × 22px anchor; 0px radius and padding; 16px / 400; transparent with `#cdcdcd` label on `#232323` | Hover and press underline the child label span in `#cdcdcd` |

The survey records two pale “立即免費體驗” links with the same 204 × 57px geometry, plus an inline FAQ experience link. The lossless control is a text link inside a panel; its 511px anchor width is not the width of a full-card link. Its visible label span measures 64 × 22px.

The secondary “了解 KKBOX 所有訂閱方案” link measures 204.1 × 26px, 0px radius and padding, 16px / 400, with `#a0a0a0` text over `#111111`. Its pointer states were unmeasured and its only focus change was the browser ring, so it is documented here without an interactive component token.

No visible search input or full-card anchor appeared in the homepage survey. The header screenshot shows a search opener; its closed-panel input was not measured.

### States

**Hover:** the hero CTA turns white; “特色功能” turns cyan and gains a cyan pseudo-element underline; “下載” gains that underline; the lossless link's label gains text underlining. **Pressed:** the CTA, download-nav and lossless-link readings match their hover appearance while `:active` matches. The feature-nav press is **UNMEASURED** because `:active` did not match. The subscription-options link's hover and press are **UNMEASURED** because `:hover` did not match.

**Keyboard focus:** all five controls were reached by real Tab navigation. Their only measured focus difference was `rgb(0, 95, 204) auto 1px off 1px`, Chromium's own outline; it is not a KKBOX focus token. The focus differences did not persist after blur. **Disabled:** no disabled variant was measured.

The probe compared the control and its pseudo-elements, descendants and their pseudo-elements, and three ancestor levels, across computed visual properties and relevant image/SVG attributes. There were no descendants for the CTA or nav links and one label span for each content link. This scope excludes pixel-only effects and unrelated siblings.

## Do's and Don'ts

- Keep the measured homepage's near-black canvas, white hierarchy and pale rounded CTA.
- Distinguish official cyan `#09cef6` from CTA-label cyan `#00b6e1`.
- Reproduce the measured hover feedback: white CTA fill, cyan navigation underline, and underlined feature-link label.
- Write **KKBOX** in uppercase. The official guide explains the uppercase B and forbids changing logo colour, angle or letter spacing, adding an outline, or adding shadow effects. Use the official logo artwork and its clear space. [Logo rules](https://www.kkbox.com/about/tw/zh-tw/logo).
- Preserve the distinction between declared font names and loaded faces; no substitute has been selected.

## Voice & Tone

The About page names **Daring, Curiosity and Diversity** and presents sound as a source of inspiration. The homepage's “LISTEN, AND BE HEARD” pairs listening with expression; “立即免費體驗” gives the next action directly. Use those observed messages and stated values as the voice reference. A formal tone-of-voice rule set was not verified. [About KKBOX](https://www.kkbox.com/about/tw/zh-tw).

## Agent Prompt Guide

“Build a KKBOX homepage-style composition with a `#111111` canvas, large white display lettering, layered background shapes and feature imagery. Use a 57px-high pale `#f2f2f2` action link with `#00b6e1` text, a 30px radius, `16px 48px` padding and 18px / 500 labels. Its background becomes `#ffffff` on hover and press. Use `#09cef6` for highlighted navigation and hover underlines. Separate the `#232323` feature panel from `#1e1e1e` desktop cards. Preserve typography sizes; a loaded font family has not been established. Substitute: none chosen.”

## Governance

### Known Gaps

- **Contrast, `button-primary`.** Text `#00b6e1` on `#f2f2f2` measures 2.14:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
