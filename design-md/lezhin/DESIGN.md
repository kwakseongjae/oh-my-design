---
name: Lezhin Comics
colors:
  primary: '#eb0014'
  primary-hover: '#ff5254'
  primary-dark: '#c40017'
  foreground: '#111115'
  deep-dark: '#09090b'
  charcoal: '#222225'
  text-soft: '#36363a'
  text-subtle: '#6f6f77'
  text-muted: '#a1a1a9'
  border-muted: '#e9e9ec'
  surface-muted: '#f4f4f5'
  canvas: '#ffffff'
  on-primary: '#ffffff'
  ai-teal: '#4cecbe'
  ai-cyan: '#00bfe2'
  ai-blue: '#007ee0'
  event-purple: '#dd72fa'
typography:
  section-header:
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.3
    use: CSS Head4xl with Bold utility; not the measured homepage section title
  title:
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1.3
    use: CSS Head2xl with Bold utility
  body:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    use: Homepage body declaration; inherited control text
  body-large:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    use: CSS BodyLg with Regular utility
  label:
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1
    use: Measured disabled search button label
  label-medium:
    fontSize: 16px
    fontWeight: 500
    use: Measured navigation label; inherited link font is 14px/400
  caption:
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
    use: CSS BodyXs with Regular utility
  caption-small:
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.5
    use: CSS Body2xs with Regular utility; Compact is a separate override
rounded:
  input: 2px
  sm: 4px
  md: 8px
  lg: 12px
spacing:
  xs: 4
  sm: 8
  md: 12
  base: 16
  lg: 20
  xl: 24
  xxl: 32
components:
  support-link:
    type: button
    textColor: rgb(54, 54, 58)
    rounded: 0px
    height: 14.5px
    padding: 0px
    typography: 12px/400
    hover: underline solid rgb(54, 54, 58)
    pressed: underline solid rgb(54, 54, 58)
    use: 고객지원/공지사항 — transparent footer link over rgb(244, 244, 245). Hover and pressed values are text-decoration; pressed retains the hovered underline with no additional change.
fonts:
  roles:
    sans: Pretendard Variable
---

# Design System Inspiration of Lezhin Comics

## Overview

### Visual Theme & Atmosphere

Lezhin Comics is Lezhin Entertainment's premium webtoon service. The company describes approximately 8,000 works across genres and localised international content, and calls it Korea's first paid webtoon site. Its current CEO message extends the webtoon IP business into merchandise, short drama, games and interactive content. [Company](https://about.lezhin.com/ko)

Cover art carries the homepage: a large illustrated promotion carousel gives way to a dense strip of portrait covers. Red `#eb0014` appears in the square cat mark and cover badges; white `#ffffff` content sections, near-black `#111115` headings and grey metadata provide the surrounding structure. Dark gradients sit behind white cover captions. This is an image-led catalogue with a light page surface. These are observations of the captured homepage; the reader screen was not inspected.

The linked renewal guide explains product changes through a reincarnation comic, a white cat character and three chapter headings. Its story format makes the redesign itself part of the entertainment. [Renewal guide](https://www.lezhin.com/ko/page/lezhin_renewal251118)

The measured homepage is the Korean edition (`www.lezhin.com/ko`, HTML `lang="ko"`), reached by the site's own redirect.

#### Primary tasks

- Browse original comics, the comics catalogue, genres, free titles, rankings and events through the observed navigation links.
- Open a title from its illustrated card; the ranking cards display free-episode counts.
- Enter a sentence in the homepage's AI discovery field; the adjacent search button was disabled while the field was empty.

### Brand Narrative

The official history dates the service launch to June 2013, Japan to July 2015, the US to December 2015, the brand-name change to Lezhin to July 2020, and entry into the KidariStudio group to February 2021. The current CEO message describes an ambition to become a global IP commerce leader. The business section also names Lezhin Studio work across film, drama and games, plus publishing and merchandise; its current shop link is labelled 재이미샵. [Company history and message](https://about.lezhin.com/ko)

The product still uses the Lezhin Comics name in its Korean title and terms. The terms define purchasable coins exchangeable for paid services or content. The renewal guide's illustrated cat-led story is current linked product communication; its graphics are not a source for the catalogue's CSS tokens. [Terms](https://www.lezhin.com/ko/policy/terms), [renewal guide](https://www.lezhin.com/ko/page/lezhin_renewal251118)

### Principles

The corporate culture section names autonomy and responsibility, mutual respect, customer focus and innovation. These are company values; no opened source establishes the prior draft's five product-design principles or its claimed purchasing guarantees. [Corporate culture](https://about.lezhin.com/ko)

### Personas

No first-party user-research personas were verified.

## Colors

The home census contains 656 computed root custom properties, including 51 Tailwind `--tw-*` implementation variables. The remaining 605 root properties include Lezhin's palette, semantic roles and state definitions. The following colours are measured root values; a state-named variable is a CSS definition, not proof that a particular homepage control entered that state.

| Reference role | Value | Live evidence and scope |
|---|---|---|
| Primary | `#eb0014` | `--basic-red-accent`, `--button-primary-default`, `--state-switch-selected`; also a red SVG path in the first ranking card |
| Primary hover definition | `#ff5254` | `--button-primary-hover`, `--state-button-primary-hover` |
| Strong red / selected chip text | `#c40017` | `--red-700`, `--basic-red-strong`, `--bg-badge-red`; not the primary focus value |
| Primary focus definition | `#9e0018` | `--button-primary-focus`, `--state-button-primary-focus`; not observed on a focused primary button |
| Foreground | `#111115` | `--text-default`, `--icon-default`; body rule and AI input ink |
| Deep dark | `#09090b` | `--bg-dark-strong`, `--text-dark` |
| Charcoal | `#222225` | `--border-default`, `--button-secondary-default` |
| Soft ink | `#36363a` | `--text-soft` |
| Subtle ink | `#6f6f77` | `--text-subtle`; actual calendar label |
| Muted ink | `#a1a1a9` | `--text-muted` |
| Muted border | `#e9e9ec` | `--border-muted`; calendar and carousel button borders; disabled search background |
| Muted surface | `#f4f4f5` | `--bg-muted`; thumbnail backing layer |
| Canvas / on-primary | `#ffffff` | `--bg-default`, `--text-white`, `--text-inverted` in this light capture |
| AI gradient stops | `#4cecbe`, `#00bfe2`, `#007ee0` | `--component-ai-teal`, `--component-ai-cyan`, `--component-ai-blue`; gradient also observed on the AI field's ancestor |
| Event badge purple | `#dd72fa` | `--purple-400`; actual first ranking card's EVENT border and label |

Alpha values stay explicit: the card caption gradient runs from `rgba(17, 17, 21, 0)` to `rgba(17, 17, 21, 0.55)`; the EVENT badge sits on `rgba(17, 17, 21, 0.95)`; the carousel Next button uses `rgba(255, 255, 255, 0.95)`. These surfaces must be composed over their actual artwork or page background.

The paragraph-ink census is white ×230, `#111115` ×29 and `#6f6f77` ×10. White dominates because many paragraphs are captions over covers. The body declaration still uses `--text-default: #111115`; the two observations describe different contexts.

## Typography

### Evidence classes

- **Official product-use statement:** no opened company or brand document specifies the product typeface.
- **Live-loaded:** `document.fonts` reports `Pretendard Variable 45 920 normal`. This is the only loaded family promoted to the font-family tokens.
- **Delivery observed:** the home links the Pretendard v1.3.9 dynamic-subset stylesheet on jsDelivr. A separate text fetch of that stylesheet exposes 92 WOFF2 variation subset declarations, normal style, weight range `45 920`, `font-display: swap`. The browser census could not walk that cross-origin sheet; its empty `fontFaces` array does not negate the loaded-face result. The author inspected the stylesheet without separately downloading font binaries.
- **Official distributed Lezhin font assets:** none verified. The font delivery above is a third-party-hosted font package, not evidence of a proprietary Lezhin typeface or a Lezhin font licence.
- **Declared-only:** the body, H1 and button stacks additionally name Pretendard, platform families, Roboto, Helvetica Neue, Segoe UI, Apple SD Gothic Neo, Noto Sans KR, Malgun Gothic and emoji families. None of those additional faces was reported loaded. They receive no specimen or font token.
- **Unresolved:** exact subset files used for each script and a monospace product role were not established. Substitute: none chosen.

### Scale and actual labels

The root size scale remains **10 / 12 / 13 / 14 / 15 / 16 / 17 / 18 / 20 / 24 / 28 / 32 / 36 / 40 / 56 / 80px**, from `--size-3xs` through `--size-10xl`. The 80px variable exists, but the captured stylesheet maps both `.lzTypography-Head10xl` and `-Head9xl` to the 56px variable; do not assume the class name renders 80px.

The body rule is **14px / 400 / 1.5**. CSS body utilities include BodyLg at 16px, BodySm at 14px, BodyXs at 13px and Body2xs at 12px. Head4xl is 24px and Head2xl is 18px, each with 130% line height; weight 700 comes from the separate Bold utility. The weight properties include 400, 500, 600 and 700. Ordinary `.lzTypography` text uses 150%; Compact uses 120%, rounded to whole pixels. Button sizing rules use 100% line height.

Actual measured labels illustrate the distinction between a control and its text:

| Element | Inherited control font | Visible label |
|---|---|---|
| Original navigation link | 14px / 400; 21px line height | 16px / 500, white |
| New-title calendar button | 14px / 400; 21px line height | 12px / 600, `#6f6f77` |
| Disabled search button | 14px / 600; 14px line height | Same |
| AI sentence input | 18px / 400; 22px line height | Input text uses `#111115` |

The ranking card's title classes specify 16px / 600 with Compact leading; its free-count classes specify 12px / 400 with Compact leading. The measured rank numeral is 56px / 400. Negative tracking is verified for the **declared empty-state text**, not as a global heading rule: title −0.36px on desktop, −0.32px on mobile, subtitle −0.28px.

## Layout

At the measured 1440×1000 viewport, the ranking strip shows seven complete cards. The first starts at x=123px and is 165.1px wide; the next starts at x=292px. The rounded survey coordinates imply an approximately 4px inter-card gap. The ranking grid's actual inline properties specify `--lz-cols-desktop:7` and `--lz-gap-desktop:4px`. Separate list utilities retain `calc((100% - (var(--list-col) - 1) * 4px) / var(--list-col))`; they are not the evidence for this ranking grid's column count.

The current `.lzSection` declaration is full width, centred, maximum 1212px, with 16px horizontal padding. The visible ranking strip spans approximately x=123px to x=1303px. Hero links instead measure 600×400px and use 20px padding; adjacent slides extend beyond the viewport. Keep that broad illustrated hero separate from the compact portrait catalogue.

The inherited spacing values 4 / 8 / 12 / 16 / 20 / 24 / 32px are present as pixel-valued gap utilities. The capture also grounds 4px card gaps, 8px calendar side padding, 12px caption side padding, 16px section padding and 20px hero padding. The spacing keys in the frontmatter are reference aliases, not exported CSS variable names.

### Responsive Behavior

The capture verifies desktop at 1440×1000 only. The current base stylesheet defines `desktop:` and desktop navigation utilities at **min-width:1025px**, and `mobile:` / compact navigation utilities at **max-width:1024px**. Older CSS modules also use the **640px**, **961px** and **1281px** boundaries. These coexist; a single universal 960px breakpoint does not describe all current components.

The current shared section max-width is 1212px. A separate `.lzCntnr` still declares 1036px maximum width at 961–1280px and 1212px from 1281px, with 16px side padding reduced to 8px at max-width:320px. Mobile column counts and touch-target minima were not re-measured. The observed 22px input box and 28px calendar button also do not support a blanket 36px minimum for every interactive element.

Across the five first-party home CSS bundles, 56 `prefers-color-scheme:dark` blocks remain present. They demonstrate declared theme support, not that every component or image variant was visually tested in dark mode.

## Elevation & Depth

The measured carousel Next button's full computed shadow is `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(17, 17, 21, 0.06) 0px 2px 8px 0px`. The non-transparent part is `0px 2px 8px 0px rgba(17, 17, 21, 0.06)`. Other measured controls have `box-shadow: none`.

The declared dropdown shadow remains `0 2px 12px 0 rgba(17,17,21,.08)`. Root shadow colour properties retain dark alpha levels .06, .08, .25, .3 and .5, plus `--shadow-thumbnail: rgba(17,17,21,.2)` and `--shadow-text: rgba(17,17,21,.85)`. These are colours, not complete elevation geometries. The opaque-looking cover caption is a gradient, not evidence of a drop shadow.

Dark-mode declarations change `--bg-default` to `#111115`, `--text-default` to `#ffffff` and `--border-muted` to `#222225`. This is source evidence for theme roles; a dark-mode viewport was not captured.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.subtle`: `0px 2px 8px 0px rgba(17, 17, 21, 0.06)`
- `shadow.soft`: `0 2px 12px 0 rgba(17,17,21,.08)`

## Motion & Easing

The initial five active measured controls compute **`all 0s ease 0s`**. The disabled search button computes **`border, background-color 0s, 0.2s ease, ease-in-out 0s, 0s`**. These raw strings are preserved in the verification proof. No observed hover transition or pressed animation is inferred from them.

All six follow-up controls also compute **`all 0s ease 0s`** on the control itself. The support link's measured underline changes without a declared transition on that link; its pressed snapshot retains the same decoration. No separate pressed animation or branded focus timing was measured.

The live source retains several component-specific declarations from the prior reference: `.lzSortArrow` uses `transform .125s linear`; `.lzButton` declares `border,background-color .2s ease-in-out`; tabs declare `background-color .2s ease-in-out` and selected-label `color .2s ease-in-out`; switch track/circle definitions use `.25s linear`; the circle-card progress ring uses `stroke-dashoffset .2s ease`. The skeleton pseudo-element runs `skeleton 1.8s ease-in-out infinite`, from `translateX(-100%)` to `translateX(100%)`. These are declared behaviours, not replayed animation measurements. The CSS-module snackbar container also retains `opacity .2s`, and the AI search divider pseudo-element declares `moveRight__MtEke 3s ease-in-out infinite`, moving from `translateX(-50%)` to `translateX(0)`. Its wrapper defines `transform .25s ease-in-out,opacity .25s ease-in-out`. Source utilities additionally declare `height .25s ease-in-out` and `transform .25s ease-in-out,opacity .25s ease-in-out`; assigning them to a drawer or a skeleton reveal was not verified. These declaration facts do not establish that those animations ran during the captured interactions.

## Components

### Controls observed on the homepage

These are the initial pass's identity measurements. Hover and focus results are in §14. None of these six produced an authored state change, so they remain prose references and are absent from the machine component map. The separate follow-up below verified one footer link's authored underline.

| Key / element | Geometry and rest appearance |
|---|---|
| `new-calendar` — 신작 캘린더 button | 88.7×28px; 4px radius; `0px 8px` padding; transparent over white; 1px `#e9e9ec` border; inherited `#111115`, visible label `#6f6f77`; no shadow |
| `nav-original` — `/ko/scheduled` link | 55.3×48px; 0px radius and padding; transparent; white link and label in the hero navigation context; no border or shadow |
| `ai-search` — sentence input | 953×22px; 2px radius; 0px padding; `#ffffff` / `#111115`; no own border or shadow; the surrounding layer carries the AI gradient |
| `comic-card` — first `/ko/comic/highschoolboy` link | 165.1×293.6px; outer link 0px radius and padding, transparent with inherited `#111115`; white visible title and rank; inner `.lzCard.lzCard9x16` supplies the 4px corner and alpha border |
| `rank-next` — first `button[aria-label='Next']` | 44×44px; 9999px circular radius; 2px padding; `rgba(255, 255, 255, 0.95)` / `#111115`; 1px `#e9e9ec` border; a 2px-y, 8px-blur shadow at dark 6% |
| `search-submit` — 검색 button | 80×42px; 4px radius; `0px 12px` padding; `#e9e9ec` / `#ffffff`; no border or shadow; both native `disabled` and `aria-disabled` were present |

### Follow-up: footer link and five other controls

The **고객지원/공지사항** link (`a[href="/ko/help"]`) uses `#36363a` ink on the `#f4f4f5` footer. Its own background is transparent. It measures 87×14.5px, with 0px radius and padding, Pretendard Variable at 12px/400 and 18px line height, no border and no shadow. Hover changes its computed text decoration from `none` to **`underline solid rgb(54, 54, 58)`**. The same value was measured while both `:hover` and `:active` matched; pressing adds no further change. This is the only registered component; its `hover` and `pressed` fields describe text decoration, and its `use` identifies it as a link.

| New key / element | Geometry and rest appearance |
|---|---|
| `ai-prompt` — 반려동물 나오며 힐링되는 일상물 button, `role="tab"` | 203.9×33px; 0px radius and padding; transparent over `#ffffff`; `#111115`; 14px/400 with 21px line height; no border or shadow |
| `hero-next` — second `button.w-40.h-40` | 40×40px; 999px radius; 0px padding; `rgba(17, 17, 21, 0.25)` background; inherited `#111115` but a white SVG arrow; 14px/400 with 21px line height; no border or shadow |
| `ranking-more` — ranking 더보기 link | 52.3×17px; 0px radius and padding; transparent over `#ffffff`; inherited `#111115`, 14px/400 with 21px line height; visible label `rgba(17, 17, 21, 0.55)`, 14px/500; no border or shadow |
| `new-comic-card` — first `/ko/comic/curse_of_immortality` link | 165.1×293.6px; outer link 0px radius and padding; transparent over `#ffffff`; inherited `#111115`, 14px/400 with 21px line height; white visible title, 16px/600; no own border or shadow |
| `support-link` — 고객지원/공지사항 link | 87×14.5px; 0px radius and padding; transparent over `#f4f4f5`; `#36363a`; 12px/400 with 18px line height; no border or shadow |
| `back-top` — 맨 위로 button | 56×56px; 100% radius; 0px padding; `#ffffff` / `#111115`; 1px `rgba(17, 17, 21, 0.1)` border; no shadow; hidden accessibility label inherits 1px/400 with 1.5px line height; visible arrow is an SVG |

All six use the loaded Pretendard Variable face. Only `support-link` produced an eligible authored state. The other five remain identity references with their measurement limits in §14.

### Button definitions retained from the live stylesheet

These are source declarations, not state-tested specimens. The current `.lzButton` base uses a 4px radius fallback and weight 600. Its sizing variants are Xs: minimum 28px, 12px text, 8px horizontal padding; Sm: minimum 40px, 14px text, 12px padding; Md: minimum 48px, 14px text, 12px padding; Lg: minimum 56px, 16px text, 16px padding.

Primary pairs `#eb0014` with `#ffffff`; Secondary pairs `#222225` with `#ffffff`; Tertiary pairs `#f4f4f5` with `#36363a`. The modern Outline variant is transparent, with `#6f6f77` ink and a 1px `#e9e9ec` border. Its hover border definition uses `#a1a1a9`; focus uses `#222225`.

A separate CSS-module button family still exists. `.lzBtn--small__ARkAC` and `--medium__VwSBj` have 2px corners, 20px horizontal padding and 40px / 48px heights. `.lzBtn--large__v_uNA` has 4px corners, 56px height, 16px text and 24px default padding, overridden to 16px under its mobile rule. Its outlined variant uses `#36363a` ink and `#a1a1a9` border. Keep these two button families distinct when reproducing a particular surface.

The stylesheet also defines radius utilities `.border-round-md: 8px` and `.border-round-lg: 12px`; these are declared utilities, not measured corners of the selected controls.

### Cards, chips, tabs and select papers

The measured ranking card uses **9:16**, confirmed by both its 165.1×293.6px bounds and `.lzCard9x16`. A **2:3** variant also remains declared; it is not the universal thumbnail ratio. The shared card definition has 4px corners and a 1px `rgba(17,17,21,.1)` border. The thumbnail layer uses `#f4f4f5`, while images fill it with `object-fit: cover`. Caption content is bottom-aligned with `40px 12px 12px` padding and a 4px gap.

Declared circle thumbnails use a 9999px radius and 8px image inset. Their track and progress SVG strokes are 3px. Declared `.lzChip` filters use minimum 32px height, `0 12px` padding, a 999px radius fallback and 1px `#e9e9ec` border. The text child is `#6f6f77`; selected chips define `rgba(255,82,84,.15)` background, `#c40017` text and a transparent border.

Declared tabs have minimum 36px height, 4px corners, `0 12px` padding and default `rgba(17,17,21,.04)` background/border. Selection defines `rgba(17,17,21,.95)` background and `#ffffff` label. A declared select paper uses `#ffffff`, 1px `#f4f4f5` border, 4px corners and `12px 0` padding. These definitions were not opened or state-tested as live widgets.

### States

The promotion was closed through its **닫기** button before the states pass. Five active controls matched `:hover`; all five showed no settled style/attribute change within the probe's comparison scope. That scope includes each control, its descendants and their pseudo-elements, SVG/image properties, plus three ancestor levels. It excludes siblings, closed shadow roots, cross-origin frame internals and pixel-only animation.

| Control | Hover | Pressed | Keyboard focus |
|---|---|---|---|
| Calendar button | No change; 3 descendants | UNMEASURED: `:active` did not match | Browser `auto` outline, 1px, offset 0px |
| Original nav link | No change; 1 descendant | UNMEASURED: `:active` did not match | Browser `auto` outline, 1px, offset 1px |
| AI sentence input | No change; no descendants | UNMEASURED: `:active` did not match | Focus and focus-visible matched; no style change |
| First ranking card link | No change; 21 descendants, including one image | UNMEASURED: `:active` did not match | Browser `auto` outline, 1px, offset 1px |
| Ranking Next button | No change; 2 descendants | UNMEASURED: `:active` did not match | Browser `auto` outline, 1px, offset 0px |
| Search action | UNMEASURED: disabled | UNMEASURED: disabled | UNMEASURED: disabled; skipped by Tab |

The automatic outline is `rgb(0, 95, 204) auto 1px`; it is a browser affordance, not a Lezhin focus token. No changes persisted after blur on the five active controls. These initial unchanged/browser-only/unmeasured results do not populate the component map.

#### Follow-up states

The promotion was again closed through **닫기**. A new survey and one additional states call covered six different controls. The support link's underline is an authored `hover:underline` utility applied on the product page; its keyboard ring is still browser-only.

| New control | Hover | Pressed | Keyboard focus |
|---|---|---|---|
| `ai-prompt` | No change at the settled `:hover=true` snapshot; hover stopped matching during its crop | UNMEASURED: `:active` did not match | Browser `auto` outline, 1px, offset 0px |
| `hero-next` | No change at the settled `:hover=true` snapshot; hover stopped matching during its crop | UNMEASURED: `:active` did not match | Browser `auto` outline, 1px, offset 0px |
| `ranking-more` | UNMEASURED: `:hover` did not match | UNMEASURED: pointer hover did not match | Browser `auto` outline, 1px, offset 1px |
| `new-comic-card` | No change; 14 descendants including one image | `:active=true`; no change | Browser `auto` outline, 1px, offset 1px |
| `support-link` | `deco: none` → `underline solid rgb(54, 54, 58)` | `:active=true`; same underline as hover; no additional change | Browser `auto` outline, 1px, offset 1px; decoration remains `none` |
| `back-top` | No change; 3 descendants | `:active=true`; no change | Browser `auto` outline, 1px, offset 0px; ancestor transform change persists after blur and is excluded |

Every new keyboard landing matched both focus and focus-visible. The back-to-top wrapper changed from `matrix(1, 0, 0, 1, 0, 100)` to `matrix(1, 0, 0, 1, 0, 0)` and retained the latter after blur; it is not a focus token. The support link's `restParked` and `focus.restAfterBlur` snapshots both have `deco: none`, and its `persistsAfterBlur` array is empty. Its hover and pressed underline crops were opened. Comparison scope covers self/pseudo-elements, 0–14 descendants and their SVG/image properties, and three ancestor levels except `back-top`, which has one available ancestor. The same pixel/sibling/frame limitations described above apply.

#### Other state definitions still present in source

- **Empty:** the declared CSS-module empty state uses a 96×140px book image, an 18px/500 title in `#36363a` on desktop, a 16px mobile title, and `#6f6f77` subtitle at weight 400. It was not triggered in the capture.
- **Loading:** `.lzSkeleton` defines a `#f4f4f5` base, white 60% shimmer and a 120-degree gradient with 35% / 50% / 65% stops. The CSS-module dark variant declares `#3a3b3d` and white 8% shimmer. Thumbnail backing and `object-fit: cover` are verified separately; no loading lifecycle was observed.
- **Error:** the live `.lzError` definitions use maximum width 640px and 16px side padding. Titles are 34px/500 at min-width:640px and 24px below it. The error-home link is specifically **`#eb0026` / white, 52px high, 8px radius, `0 32px` padding, 16px/500**; it is not the ordinary `#eb0014` primary button. The 180px illustration height applies only at max-width:960px; expired illustrations declare 132px there and 220px above it. These are CSS definitions; the curl control returned error text, not a state-tested error widget.
- **Selection:** radio/checkbox selected fill and selected switch track retain `#eb0014` declarations. No successful purchase or form submission was performed. Two snackbar definitions coexist: shared `.lzSnackbarItem` uses `--bg-inverted-alpha` (`rgba(17,17,21,.85)` here), while CSS-module `.snackbar__content__plkps` retains `#2f353e` background and white message text. Its link uses `--basic-blue-contrast`, currently `#223889`. Neither was observed as a success notification.
- **Disabled:** primary defines `rgba(255,82,84,.2)` / white. Tertiary defines `#fafafa` background, but its `.lzButtonTertiary:disabled` text resolves to `--text-muted` (`#a1a1a9`), not the prior `#dadadd`. The actual disabled secondary search control is the `#e9e9ec` / white pair in §4; its computed pointer-events remain `auto`. The CSS-module `.lzBtn__tyLuS` disabled selector separately declares `pointer-events:none`; that rule is not universal.

## Do's and Don'ts

The following are reproduction guidance derived from the observed UI, not published company design principles.

- Preserve the red cat mark, cover art and compact neutral controls; use the AI gradient and event-purple badge where those feature contexts call for them.
- Use the loaded Pretendard Variable family and keep visible child-label metrics separate from inherited control metrics.
- Match the particular card variant: 9:16 for the measured ranking card, with 4px corners and bottom caption gradient.
- Keep transparent controls on their measured parent surface. Do not turn transparency into a black fill or calculate contrast against an invented backdrop.
- Preserve the two source button families and their different corner and padding rules.
- Do not promote the browser's automatic focus ring or the root's state definitions into a measured brand interaction.

## Voice & Tone

The home title uses the tagline **“솔직한 재미 대폭발”**. Navigation names content categories directly; cards give short free-episode counts. The renewal page uses a comic story to introduce changes. These support a compact, entertainment-led tone. No opened first-party voice guide establishes the earlier draft's broader rules about adult address, informal Korean, euphemisms or pricing language.

## Agent Prompt Guide

Build the Korean homepage catalogue around a light `#ffffff` surface, `#111115` ordinary ink and illustrated cover cards with white captions. Use `#eb0014` for the observed identity/action roles and retain contextual AI and event accents. Use Pretendard Variable, the measured 14px body base, 16px navigation label and 12px calendar label. Give ranking cards 9:16 bounds and 4px corners. For the AI field, match the actual 18px/400 text box inside its gradient wrapper; its disabled search action is 42px high. Use the actual parent background for transparent links and controls. Take interaction behaviour from §14; the stylesheet definitions in §4 do not establish measured hover or pressed states for a new instance.
