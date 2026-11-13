---
name: Hankyung
colors:
  ink: '#121212'
  foreground: '#585858'
  canvas: '#ffffff'
  hk-down: '#2853b2'
  on-primary: '#f2dfcf'
  hk-up: '#b50000'
  search-toggle-fg: '#000000'
  col-line-color: '#dddddd'
  module-light-bg: '#f7f7f7'
  keycolor-premium9-dark: '#f0626f'
  primary: '#ca002c'
  lead-card-bg: '#071d39'
typography:
  heading-sm:
    fontSize: 16px
    fontWeight: 400
    use: 'H2 news text: 245 heading characters; also newsletter/search control computed text.'
  heading:
    fontSize: 20px
    fontWeight: 400
    use: 'Main H2 news-title size: 1034 heading characters, line-height 26px.'
  body:
    fontSize: 12px
    fontWeight: 400
    use: 'Largest paragraph count: 947 characters; also both CTA labels and market ticker. Paragraph census line-height 15.6px; interactive mode 16px.'
  heading-label:
    fontSize: 18px
    fontWeight: 700
    use: Section links such as 오피니언; 34 heading characters, line-height 19.8px.
  nav-sm:
    fontSize: 14px
    fontWeight: 400
    use: Header promotion and footer/notice links.
  nav:
    fontSize: 15px
    fontWeight: 500
    use: Subject navigation including 경제; line-height 15px.
  heading-xs:
    fontSize: 14px
    fontWeight: 500
    use: 'Compact news headings: 152 heading characters; header subscription utilities also use this size/weight.'
  card-title:
    fontSize: 18px
    fontWeight: 400
    use: 'Secondary story headings: 120 heading characters, line-height 28.8px.'
  label-sm:
    fontSize: 16px
    fontWeight: 700
    use: 인사 · 부고 and 사고 links.
  label:
    fontSize: 20px
    fontWeight: 700
    use: 연재보기 series labels; two interactive elements.
  card-title-lg:
    fontSize: 24px
    fontWeight: 700
    use: 'Lead-card headline: 22 heading characters, line-height 31.2px.'
  display:
    fontSize: 32px
    fontWeight: 700
    use: 'Premium lead headline: 23 heading characters, line-height 41.6px.'
  body-lg:
    fontSize: 14px
    fontWeight: 700
    use: 'Supporting paragraph text: 57 characters.'
  caption:
    fontSize: 13px
    fontWeight: 400
    use: 'Supporting paragraph text: 53 characters, line-height 18.2px.'
rounded:
  none: 0px
  pill: 400px
components:
  subscribe:
    type: button
    backgroundColor: '#ca002c'
    textColor: '#f2dfcf'
    rounded: 400px
    height: 26px
    padding: 0px 16px
    typography: 12px / 400
    hover: 'self deco: none -> underline solid rgb(242, 223, 207)'
    pressed: 'self deco: none -> underline solid rgb(242, 223, 207)'
    use: '구독 — a link in the dark Premium9 module; #ca002c fill and #f2dfcf label; hover and held press underline the link.'
  epic-start:
    type: button
    backgroundColor: '#121212'
    textColor: '#ffffff'
    border: '#121212'
    rounded: 400px
    height: 29px
    padding: 0px 16px 1px
    typography: 12px / 400
    hover: 'deco: none -> underline solid rgb(255, 255, 255) (self, label)'
    pressed: 'deco: none -> underline solid rgb(255, 255, 255) (self, label)'
    use: '무료로 시작하기 — a link to epic.ai.kr, #121212 with #ffffff ink; hover and held press underline its text.'
  nav-economy:
    type: button
    textColor: '#121212'
    rounded: 0px
    height: 21px
    padding: 3px 0px
    typography: 15px / 500
    hover: 'deco: none -> underline solid rgb(18, 18, 18) (self, label)'
    pressed: 'deco: none -> underline solid rgb(18, 18, 18) (self, label)'
    focus: 'deco: none -> underline solid rgb(18, 18, 18) (self, label)'
    use: 경제 — a transparent subject-navigation link on the white page; hover, held press and keyboard focus underline it.
  lead-card:
    type: card
    textColor: '#ffffff'
    rounded: 0px
    width: 433.5px
    height: 28px
    padding: 0px
    typography: 24px / 700
    hover: 'deco: none -> underline solid rgb(255, 255, 255) (self, label)'
    pressed: 'deco: none -> underline solid rgb(255, 255, 255) (self, label)'
    use: 'Lead-story headline link over the #071d39 text backdrop and photograph; this measures the headline hit area, not the whole card.'
  newsletter:
    type: button
    rounded: 0px
    height: 57.9px
    padding: 0px
    typography: 16px / 400
    hover: 'self deco: none -> underline solid rgb(18, 18, 18)'
    pressed: 'self deco: none -> underline solid rgb(18, 18, 18)'
    use: 뉴스레터 구독하러가기 — a transparent full-area link on the white page; accessible label is a 1px blind span with transparent ink. Computed hover and held press add underline on the link; crop does not establish a visible underline on the sibling title.
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    sans: Noto Sans KR
---

# Design System Inspiration of Hankyung

## Overview

### Visual Theme & Atmosphere

한국경제 is an economic-news destination operated by 한경닷컴. The company overview dates 한경닷컴's establishment to 1999.11.1, when it separated from 한국경제신문's new-media department. The homepage's own phrase, “성공을 부르는 습관”, frames news as part of a reader's daily progress. Its corporate CI writing names “Wisdom” and explains indigo blue as a way to convey a modern image and trust. That documented colour meaning is qualitative; it supplies no hex value used here.

The live desktop surface expresses this through a large centred Korean masthead, dense subject navigation, a broad lead photograph, flanking news lists and fine dividers. The editorial surface stays largely neutral while market movements and premium content receive distinct accents. These are observations of the homepage, not published corporate design principles.

The product is also developing paid investment information: the company's November 2026 announcement describes an upgraded 한경 프리미엄9 and real-time analysis of securities firms' target-price consensus. The homepage places subscription and epic AI entry points alongside news. This reference measures the Korean homepage at `www.hankyung.com/` (HTML `lang="ko"`); it did not redirect to a regional path.

### Brand Narrative

The company's own overview identifies an economic-news portal, and the CI describes a light illuminating the online economy. Its current premium-investment offering extends that information role into paid data and analysis. These statements describe the company's own positioning rather than an independent assessment of investment outcomes.

### Principles

The official CI names “Wisdom” and explains its use of indigo blue in terms of modernity and trust. The homepage's measured layout suggests an implementation rule: preserve editorial hierarchy and compact navigation. That implementation rule is an observation, not an official principle.

### Personas

No personas were verified.

## Colors

Primary is the measured premium-subscription accent; no official indigo hex was established. All exported colours below were seen painted or carried by a measured control.

| Token | Value | Measured role |
|---|---|---|
| ink | `#121212` | Economy navigation ink; epic-start fill and border; strong editorial text. |
| foreground | `#585858` | Most frequent paragraph ink: 14 paragraphs; --hk-text-secondary and --hk-hold. |
| canvas | `#ffffff` | White page ground visible in the viewport; four painted white backgrounds; also epic-start and lead-card ink. |
| hk-down | `#2853b2` | Market decline percentage ink, --hk-down; painted on 16 text elements. |
| on-primary | `#f2dfcf` | Subscription link label and underline. |
| hk-up | `#b50000` | Market rise percentage ink, --hk-up; painted on eight text elements. |
| search-toggle-fg | `#000000` | Search button computed foreground; its visible magnifier is an image/background asset, so this does not establish icon pixel colour. |
| col-line-color | `#dddddd` | Column/list/module dividers: --col-line-color, --list-line-color and --module-line-color; five border elements. |
| module-light-bg | `#f7f7f7` | Light module backgrounds, --module-light-bg; five background elements. |
| keycolor-premium9-dark | `#f0626f` | Premium news secondary-category ink, --keycolor-premium9-dark; two text elements. |
| primary | `#ca002c` | Premium subscription action fill, --keycolor-premium9. Primary here means the measured subscription CTA accent, not the corporate indigo CI. |
| lead-card-bg | `#071d39` | Background behind the lead-story text; its ancestor fade ends in this navy. |

### Declared in the site's CSS, not seen painted

These first-party custom properties were computed on the root but had no painted match in this capture. This list is not exported as tokens.

| CSS property | Value |
|---|---|
| `--keycolor-arte` | `#86704f` |
| `--keycolor-globalmarket` | `#54b5b1` |
| `--keycolor-globalmarket-text` | `#00847f` |
| `--keycolor-jipconomy` | `#328cc8` |
| `--keycolor-jipconomy-text` | `#0d79c7` |
| `--keycolor-koreamarket` | `#ea666e` |
| `--keycolor-koreamarket-text` | `#d54049` |
| `--keycolor-travel` | `#2caded` |

## Typography

### Evidence classes

- **Official product use:** no editorial or brand document opened here specifies a product typeface.
- **Live-loaded:** `document.fonts` reports **Noto Sans KR**, normal, weights **400, 500 and 700**. This is the sole exported family. The computed body, H1 and button stacks begin with `-apple-system` and `system-ui` before Noto Sans KR; loaded-face evidence does not establish the actual resolved face for every glyph.
- **Official distributed assets:** the site's linked `NotoSans.css` declares Noto Sans KR with local sources and first-party `hkstatic.hankyung.com` WOFF2/WOFF files. Loaded weights map to `NotoSansKR-Regular`, `NotoSansKR-Medium` and `NotoSansKR-Bold`. No binary font assets were downloaded.
- **Declared-only:** the same CSS declares weights 100, 300 and 900; they were absent from the loaded list. Apple SD Gothic Neo, Apple SD 산돌고딕 Neo, Malgun Gothic, 맑은 고딕, Segoe UI, Roboto and Helvetica Neue also appear in the computed fallback stack without loaded-face confirmation. They are not exported as product families and receive no specimens.
- **Unresolved:** per-glyph font resolution, an official font-use policy and font licensing were not established. Substitute: none chosen.

### Measured scale

The paragraph-heavy size is 12px, not the computed 16px inherited by many controls. Headline sizes come from the text census.

| Role | Size / weight | Evidence and use |
|---|---|---|
| heading-sm | 16px / 400 | H2 news text: 245 heading characters; also newsletter/search control computed text. |
| heading | 20px / 400 | Main H2 news-title size: 1034 heading characters, line-height 26px. |
| body | 12px / 400 | Largest paragraph count: 947 characters; also both CTA labels and market ticker. Paragraph census line-height 15.6px; interactive mode 16px. |
| heading-label | 18px / 700 | Section links such as 오피니언; 34 heading characters, line-height 19.8px. |
| nav-sm | 14px / 400 | Header promotion and footer/notice links. |
| nav | 15px / 500 | Subject navigation including 경제; line-height 15px. |
| heading-xs | 14px / 500 | Compact news headings: 152 heading characters; header subscription utilities also use this size/weight. |
| card-title | 18px / 400 | Secondary story headings: 120 heading characters, line-height 28.8px. |
| label-sm | 16px / 700 | 인사 · 부고 and 사고 links. |
| label | 20px / 700 | 연재보기 series labels; two interactive elements. |
| card-title-lg | 24px / 700 | Lead-card headline: 22 heading characters, line-height 31.2px. |
| display | 32px / 700 | Premium lead headline: 23 heading characters, line-height 41.6px. |
| body-lg | 14px / 700 | Supporting paragraph text: 57 characters. |
| caption | 13px / 400 | Supporting paragraph text: 53 characters, line-height 18.2px. |

## Layout

The 1440×1000 viewport shows a centred masthead above a subject-navigation row, with account and subscription utilities above it. A horizontal market ticker separates the header from the news area. The lead story occupies a wide centre column; smaller stories flank it. Continue this editorial hierarchy with image, headline and supporting text rather than treating every story as an identical tile.

### Responsive Behavior

Only desktop at 1440×1000 was measured; breakpoints and mobile behavior are absent.

## Elevation & Depth

The captured viewport uses dividers and aligned columns to separate stories. No reusable shadow or elevation scale was verified.

## Motion & Easing

All six measured controls report `all 0s ease 0s` as their computed transition. No nonzero transition duration or reusable easing scale was established.

## Components

The compiler emitted five components from six measured controls. Each exported component has a measured underline change. Rest shadows are `none` for all six.

| Key | Height / radius | Padding | Font | Rest background / foreground |
|---|---|---|---|---|
| subscribe | 26px / 400px | 0px 16px | 12px/400 | `rgb(202, 0, 44)` / `rgb(242, 223, 207)` |
| epic-start | 29px / 400px | 0px 16px 1px | 12px/400 | `rgb(18, 18, 18)` / `rgb(255, 255, 255)` |
| nav-economy | 21px / 0px | 3px 0px | 15px/500 | `rgba(0, 0, 0, 0)` / `rgb(18, 18, 18)` |
| search-toggle | 24px / 0px | 0px 6px | 16px/400 | `rgba(0, 0, 0, 0)` / `rgb(0, 0, 0)` |
| lead-card | 28px / 0px | 0px | 24px/700 | `rgba(0, 0, 0, 0)` / `rgb(255, 255, 255)` |
| newsletter | 57.9px / 0px | 0px | 16px/400 | `rgba(0, 0, 0, 0)` / `rgb(18, 18, 18)` |

The subscription and epic AI actions compute a 400px radius, producing fully rounded ends. Subject navigation and the measured headline have 0px corners. The surveyed Premium9 nav link separately computes 800px radius; the top-return control uses 100%. The latter percentage is prose only.

The newsletter link covers its panel but its accessible text is hidden in a transparent 1px span. Its compiler component records computed underline behavior; do not infer that the sibling heading itself underlines. The search button is prose only: hover and held press produce no computed change in the captured scope, and focus produces an `auto` outline. The search input was not visible in the survey and was not opened.

### States

Hover and held press add an underline to subscribe, epic-start, nav-economy, lead-card and the newsletter link. Ink and fills stay at their recorded rest values. Keyboard focus also underlines nav-economy. All other focus differences are `outline-style: auto`, including the lead-card headline ancestor; they are excluded from brand focus tokens.

For search-toggle, the no-change result covers self, its pseudo-elements, one descendant and its pseudo-elements, and three ancestor levels. It does not prove absence inside external images, cross-origin frames or outside that scope. No disabled variant was measured.

## Do's and Don'ts

- Keep a strong hierarchy between the masthead, lead story and compact supporting stories.
- Preserve separate market-rise and market-fall colours when reproducing the measured ticker.
- Treat the corporate CI's indigo description as narrative evidence; do not assign it a guessed hex.
- Do not turn CSS fallback names into confirmed product fonts.

## Voice & Tone

The site's slogan is “성공을 부르는 습관”. Its CI page's “지혜롭고 현명한 안목” positions the brand around informed judgment. No wider authored tone guide was verified.

## Agent Prompt Guide

Build an editorial news homepage with a centred masthead, compact subject navigation, a horizontal market ticker and a large photographic lead story flanked by smaller news lists. Use the measured palette and text scale as roles for this surface. Keep the loaded-font evidence distinct from the operating-system-first computed stack.
