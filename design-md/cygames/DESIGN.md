---
name: Cygames
colors:
  primary: '#000000'
  foreground: '#000000'
  canvas: '#ffffff'
  surface-muted: '#f5f5f5'
  border: '#dddddd'
  magazine-accent: '#fff100'
typography:
  navigation:
    fontSize: 16.5px
    fontWeight: 700
    use: Header NEWS link; Cygames Sans loaded; line height 16.5px and letter spacing 1.65px.
  action:
    fontSize: 18.5143px
    fontWeight: 700
    use: Company information action link; line height 21.2914px at the measured desktop viewport.
  more:
    fontSize: 14.4px
    fontWeight: 700
    use: News MORE link; Cygames Sans loaded; line height 16.56px.
  card-date:
    fontSize: 14.4px
    fontWeight: 700
    use: Visible date label inside the first magazine card; anchor wrapper inherits 10px/700.
rounded:
  none: 0px
  action: 5.14286px
  magazine-card: 10.2857px
components:
  company-cta:
    type: button
    backgroundColor: '#000000'
    textColor: '#ffffff'
    rounded: 5.14286px
    height: 82.3px
    padding: 0px 30.8571px
    typography: 18.5143px / 700
    hover: 'bg #ffffff; fg #000000; box-shadow rgba(0, 0, 0, 0.3) 0px 9.25714px 32.9143px 0px'
    pressed: 'bg #ffffff; fg #000000; box-shadow rgba(0, 0, 0, 0.3) 0px 9.25714px 32.9143px 0px'
    use: 会社情報 — a link to /corporate, 308.6px wide. On hover and press its empty white background-circle layer changes from 0x0 to 927x927px; keyboard focus showed no change within the probe scope. Desktop measurement.
  nav-news:
    type: button
    textColor: '#ffffff'
    rounded: 0px
    height: 16.5px
    padding: 0px
    typography: 16.5px / 700
    hover: 'white #ffffff 1px ::before underline; transform matrix(1, 0, 0, 1, 0, 0) from matrix(0, 0, 0, 1, 0, 0)'
    pressed: 'white #ffffff 1px ::before underline; transform matrix(1, 0, 0, 1, 0, 0) from matrix(0, 0, 0, 1, 0, 0)'
    use: NEWS — a header link to /news/, 55.3px wide, transparent over the game hero at page top. Cygames Sans; letter spacing 1.65px. Pointer states come from the second capture; keyboard focus showed no change within scope.
  news-more:
    type: button
    textColor: '#000000'
    rounded: 0px
    height: 16.6px
    padding: 0px 16.4571px 0px 0px
    typography: 14.4px / 700
    hover: opacity 0.5
    pressed: opacity 0.5
    use: MORE — a link to /news, 59px wide, transparent on the white news section. Cygames Sans; opacity starts at 1. Keyboard focus showed no change within scope.
  magazine-card:
    type: card
    backgroundColor: '#ffffff'
    textColor: '#000000'
    rounded: 10.2857px
    height: 342.2px
    padding: 0px
    typography: 14.4px / 700 (visible date label)
    hover: box-shadow rgba(0, 0, 0, 0.3) 0px 9.25714px 32.9143px 0px
    pressed: box-shadow rgba(0, 0, 0, 0.3) 0px 9.25714px 32.9143px 0px
    use: 'A link to the first magazine article, 246.8px wide. Rest shadow rgba(0, 0, 0, 0.1) 0px 3.08571px 14.4px 0px; yellow #fff100 info-panel stripe. The 10px/700 anchor wrapper is not the date-label size. Hover and press also expand the empty circle to 741x741px while its opacity drops 0.2 to 0. Keyboard focus showed no change within scope.'
  tech-card:
    type: card
    backgroundColor: '#ffffff'
    textColor: '#000000'
    rounded: 5.14286px
    height: 102.8px
    padding: 0px
    hover: box-shadow rgba(0, 0, 0, 0.3) 0px 9.25714px 32.9143px 0px
    pressed: box-shadow rgba(0, 0, 0, 0.3) 0px 9.25714px 32.9143px 0px
    use: A logo-image link to https://tech.cygames.co.jp/, 195.4px wide; the logo is an image, not a text specimen. Rest shadow rgba(0, 0, 0, 0.1) 0px 3.08571px 14.4px 0px. Hover and press also expand the empty circle to 585x585px while its opacity drops 0.2 to 0. Keyboard focus showed no change within scope.
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    ui: YakuHanJPs, Noto Sans JP
    navigation: Cygames Sans
---

# Design System Inspiration of Cygames

## Overview

### Visual Theme & Atmosphere

Cygames is a Tokyo-based entertainment company founded in May 2011. Its business spans mobile and console games, comics, animation, licensing and esports. Its stated vision, **「最高のコンテンツを作る会社」**, connects those activities through the ambition to make the best content. [Company profile](https://www.cygames.co.jp/corporate/profile/), [vision](https://www.cygames.co.jp/corporate/).

The corporate site gives colourful game footage a large opening stage, with a white logo and uppercase navigation over the image. Below it, black actions, white editorial cards, pale grey sections and large English background lettering organise company information and recruitment. This is an observed visual composition, rather than a published set of brand principles. [Measured homepage](https://www.cygames.co.jp/), desktop viewport and full-page captures, 2026-11-06.

The official 2021 logo update made the Cygames lettering larger, thickened the mark and logotype, and removed empty space above and below to improve visibility while retaining the brand image. The release explicitly connects this change to global expansion. The current global-business page describes localisation, cultural adaptation and overseas offices; the homepage also gives CygamesEdge and Cygames ID their own promotional banners. [Logo announcement](https://www.cygames.co.jp/news/id-20932/), [global business](https://www.cygames.co.jp/business/global/), [homepage](https://www.cygames.co.jp/).

The measured surface is the Japanese corporate homepage at `www.cygames.co.jp/`, with HTML `lang="ja"`; it stayed on that path. Primary visible routes are news, company information, services, works and recruitment.

### Brand Narrative

The official history records the company’s establishment in May 2011 and the release of 「神撃のバハムート」 that September. The 2021 anniversary announcement describes expansion beyond games into animation and web comics. The present global-business page describes work on localisation and cultural adaptation, with overseas entities established in Korea, Taiwan, the UK, the US and Singapore. The observed homepage expresses that breadth through game imagery, company information, services and recruitment. [History](https://www.cygames.co.jp/corporate/history/), [anniversary announcement](https://www.cygames.co.jp/news/id-20932/), [global business](https://www.cygames.co.jp/business/global/), [homepage](https://www.cygames.co.jp/).

### Principles

The company’s published mission statements emphasise playing games together, maintaining a Team Cygames mindset and aiming for the strongest brand. Its brand statement explicitly connects everyday work and conduct to the company’s brand image. These are organisational statements; no separate public UI-design principles were verified. [Mission statements](https://www.cygames.co.jp/corporate/).

### Personas

No user-persona research was verified.

## Colors

These are normalised values from rendered CSS, not names from an official colour-token dictionary. The survey found no first-party colour custom properties in the readable stylesheets.

| Role in this reference | Value | Measured evidence |
|---|---|---|
| Primary action and foreground | `#000000` | Company CTA background; paragraph ink, 4 samples |
| Canvas and reversed labels | `#ffffff` | 22 background samples; white company-CTA label and magazine-card surface |
| Muted surface | `#f5f5f5` | 4 background samples |
| Border | `#dddddd` | 3 border samples |
| Magazine-card accent | `#fff100` | `div.info::before` inside the measured magazine card; `rgb(255, 241, 0)` |

The magazine stripe is local to that homepage card treatment. The Swiper property `--swiper-theme-color: #007aff` is excluded from the palette because it is a carousel-library setting. Game imagery and the Cygames ID banner also contain colour; a neutral interface does not imply an all-monochrome page.

## Typography

| Evidence class | Finding |
|---|---|
| Official product use | No opened first-party writing explicitly documents a product typeface. |
| Live-loaded | `document.fonts` records **Cygames Sans** normal and bold, **Noto Sans JP** 400/700/900, and **YakuHanJPs** 100/400/700. |
| Official distributed assets | No independent font-distribution package was verified. The site's readable `@font-face` rules serve Cygames Sans Regular and Bold from `/assets/font/CygamesSans-Regular.woff2` and `/assets/font/CygamesSans-Bold.woff2`. The Regular rule also names a WOFF file. This verifies serving metadata; no redistribution licence was verified. |
| Declared-only | Cygames Sans Light is declared at CSS weight **100**, with `/assets/font/CygamesSans-Light.woff2`, but is absent from the loaded list. The declared Japanese stack also names local fallback faces not present in that list. These receive no specimen. |
| Unresolved | Typeface authorship, licensing, per-glyph coverage and use inside the games were not established. **Substitute: none chosen.** |

Body, H1 and button declarations share a stack beginning `YakuHanJPs, "Noto Sans JP"`. Their local fallback names are retained in the verification notes, outside the published family tokens. The Noto Sans JP stylesheet is served through Google Fonts; YakuHanJPs through jsDelivr. Both cross-origin stylesheets were unreadable to the CSS-rule walker, so their individual font-file URLs were not collected. Loaded status establishes availability on this page, not a font choice for every glyph.

| Measured role | Size / weight | Line height | Additional evidence |
|---|---|---|---|
| Header NEWS | 16.5px / 700 | 16.5px | Cygames Sans; 1.65px letter spacing |
| News MORE | 14.4px / 700 | 16.56px | Cygames Sans |
| Company CTA | 18.5143px / 700 | 21.2914px | Japanese stack |
| Hero official-site link | 18px / 700 | 18px | Japanese stack |
| Magazine date label | 14.4px / 700 | Not separately collected | Black date label; its anchor wrapper is 10px / 700 |

These metrics are desktop observations. A paragraph size or full heading scale was not collected.

## Layout

The desktop capture places navigation over a full-height game hero, followed by a two-column news/magazine area. Alternating image-and-copy sections introduce the company and its facilities. A statistics panel leads into service links, then CygamesEdge and Cygames ID banners, recruitment links, a row of resource logos and a black footer. Large pale English words sit behind some section headings. [Homepage full-page capture](https://www.cygames.co.jp/).

Survey coordinates put the main content edges at approximately x = 95 and x = 1330. The resource row uses six cards roughly 195.4px wide. Reuse the measured control padding where relevant; no global spacing scale or breakpoint set was verified.

### Responsive Behavior

Only desktop 1440 × 1000 was measured; mobile layouts, breakpoints and reduced-motion behaviour are unverified.

## Elevation & Depth

The magazine and tech cards start with `rgba(0, 0, 0, 0.1) 0px 3.08571px 14.4px 0px`. Hover and pressed change that to `rgba(0, 0, 0, 0.3) 0px 9.25714px 32.9143px 0px`. The company CTA starts with a zero-offset, zero-blur shadow at 0.1 alpha and reaches the same stronger shadow.

The company CTA’s empty circle also translates from the identity matrix to `matrix(1, 0, 0, 1, -463.5, -463.5)` as it reaches 927 × 927px. This is the observed layer treatment behind its colour inversion; the settled capture does not establish the intermediate animation path.

## Motion & Easing

The company CTA and tech card reported this rest computed-transition string:

```text
color, opacity, box-shadow, background-color, -webkit-box-shadow 0.4s, 0.3s, 0.5s, 0.25s, 0.5s ease-in-out, ease, ease, ease-in-out, ease 0s, 0s, 0s, 0.15s, 0s
```

The magazine card reported `all 0.5s ease 0s`. NEWS and MORE reported `all 0s ease 0s` on the link itself; their observed changes involve a pseudo-element or an interaction-time style, so that self value does not establish that every visible transition is instantaneous. These are per-control records, not a verified global motion scale. Carousel and game-video timing were not measured.

## Components

All six inspected controls are links. Five have measured hover and pressed changes and are included in the component tokens. Dimensions below come from the states captures at 1440 × 1000.

| Control | Rest identity | Hover and pressed |
|---|---|---|
| Company information, 「会社情報」 | 308.6 × 82.3px; radius 5.14286px; padding `0px 30.8571px`; `#000000` background / `#ffffff` label | Background becomes `#ffffff`, label becomes `#000000`; shadow strengthens. Empty white background-circle layer grows from 0 × 0 to 927 × 927px. |
| Header NEWS | 55.3 × 16.5px; radius 0; padding 0; transparent over the hero; `#ffffff` label | White 1px `::before` underline changes from `matrix(0, 0, 0, 1, 0, 0)` to `matrix(1, 0, 0, 1, 0, 0)`. |
| News MORE | 59 × 16.6px; radius 0; padding `0px 16.4571px 0px 0px`; transparent on white; `#000000` label | Whole-link opacity changes from 1 to 0.5. |
| First magazine card | 246.8 × 342.2px; radius 10.2857px; padding 0; `#ffffff` / `#000000` | Shadow strengthens; empty circle grows to 741 × 741px, translates to `matrix(1, 0, 0, 1, -370.5, -370.5)` and changes opacity 0.2 → 0. |
| Tech resource card | 195.4 × 102.8px; radius 5.14286px; padding 0; `#ffffff` / `#000000`; image logo | Same shadow change; empty circle grows to 585 × 585px, translates to `matrix(1, 0, 0, 1, -292.5, -292.5)` and changes opacity 0.2 → 0. |

The hero’s 「公式サイト」 link was 164 × 45px with radius 5.14286px, padding `0px 50px 4px 20px`, white 18px/700 text and a 2px white border over transparent fill. Hover and pressed are **UNMEASURED**: it had `pointer-events:none` when each pointer pass reached it. Its measured keyboard focus had no change within scope, so it has no component-token entry.

No search input was present among the survey’s 79 interactive rows. No consent control is included as a component.

### States

Hover and pressed settled to the same observed result for all five exported controls. Pressed snapshots had both `:hover` and `:active` matched; this does not establish a distinct active-only treatment.

Real Tab focus reached all six controls with `:focus-visible` matched. The probe found no settled focus change, no drawn outline and no change persisting after blur within its compared scope. This is not a claim about every focusable element on the site, and it produces no focus token. The hero’s pointer states remain UNMEASURED; the first NEWS pointer failure was replaced by a successful second capture.

The compared scope is the control and its `::before`/`::after`, descendants including empty layers and their pseudos, and three ancestor levels and their pseudos. Per-control descendant counts were hero/company/tech 3, NEWS 1, MORE 0 and magazine 6. It compares computed styles and recorded DOM/SVG attributes. It cannot establish the absence of changes inside game video, canvas, external SVG sprite contents, siblings or inaccessible frames/shadow roots.

## Do's and Don'ts

- Use black/white actions and editorial surfaces around large game visuals.
- Preserve the measured distinction between small action corners and the larger magazine-card radius.
- Give the company CTA its measured colour inversion and deeper shadow; give MORE its opacity fade.
- Pair the observed English navigation labels with Japanese content where reproducing this Japanese surface.
- Keep the magazine accent attached to that card context; do not turn Swiper’s default blue into a corporate colour.
- Keep Cygames Sans Light out of live specimens, and do not turn an inherited card-wrapper size into the size of its visible date label.

These are reproduction guidelines derived from the captured surface, not company-authored design rules.

## Voice & Tone

The vision page speaks about enjoyment, excitement and emotionally engaging daily experiences through entertainment. The homepage pairs that ambition with short route labels such as 「会社情報」 and 「設備紹介」, plus uppercase English navigation. Use concise functional labels alongside the company’s content-focused message. [Vision](https://www.cygames.co.jp/corporate/), [homepage](https://www.cygames.co.jp/).

## Agent Prompt Guide

“Build a Japanese entertainment-company page with a large game hero, white Cygames Sans navigation, and black/white editorial sections. Use the verified loaded Japanese stack for Japanese controls. A company-information link is 308.6 × 82.3px with 5.14286px corners, 18.5143px/700 text and `0px 30.8571px` padding; hover and press invert black/white and deepen its shadow. Use 10.2857px corners for the measured magazine card and opacity 0.5 for the small MORE link’s hover and pressed states.”

This prompt describes the captured corporate page. It supplies no unverified game UI, mobile behaviour or substitute font.
