---
name: 1111 Job Bank
colors:
  word: '#343a40'
  foreground: '#495057'
  control-heading: '#212529'
  surface: '#ffffff'
  job-title: '#0f47b8'
  divider: '#ced4da'
  control-line: '#e9ecef'
  service-surface: '#f8f9fa'
  active-section: '#1a66ff'
  preference-action: '#cd2742'
  main: '#2066ec'
  active-job-tab: '#cf2323'
  body-background: '#f7f7f7'
  search-hover: '#1e5fdb'
  search-pressed: '#1b57ca'
typography:
  container-small:
    fontSize: 14px
    fontWeight: 400
    use: Search and card anchor containers; visible labels may override this.
  input:
    fontSize: 16px
    fontWeight: 400
    use: Search input, 25.6px line height; employer links in job cards use 24.8px.
  job-title:
    fontSize: 18px
    fontWeight: 500
    use: Job-title links, 27px line height.
  control-label:
    fontSize: 16px
    fontWeight: 500
    use: Occupation label, navigation label and service-card heading.
  popular-search:
    fontSize: 14px
    fontWeight: 500
    use: Popular search links, 23.8px line height; occupation container also uses this pair.
  service-phone:
    fontSize: 14px
    fontWeight: 700
    use: Footer 02-8787-1111 轉 8 link, 20px line height.
  tool-heading:
    fontSize: 20px
    fontWeight: 500
    use: AI 小精靈 card heading.
  search-label:
    fontSize: 15px
    fontWeight: 400
    use: Visible 搜尋 button child label, 20px line height.
rounded:
  square: 0px
  search: 8px
  filter: 10px
  service-card: 16px
  campaign-link: 24px
  hero-and-tabs: 40px
components:
  search:
    type: button
    backgroundColor: '#2066ec'
    textColor: '#ffffff'
    rounded: 8px
    height: 40px
    padding: 0px
    typography: 15px / 400
    hover: '#1e5fdb'
    pressed: 'self bg: rgb(32, 102, 236) -> rgb(27, 87, 202); self shadow: none -> rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(32, 102, 236, 0.12) 0px 0px 0px 3px, rgba(0, 0, 0, 0) 0px 0px 0px 0px'
    focus: 'self bg: rgb(32, 102, 236) -> rgb(30, 95, 219); self shadow: none -> rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(32, 102, 236, 0.12) 0px 0px 0px 3px, rgba(0, 0, 0, 0) 0px 0px 0px 0px'
    use: 搜尋, the primary search button inside the white hero search bar; its visible child label supplies the recorded white ink and 15px font. Keyboard focus retains authored background and shadow changes; the browser auto outline is excluded.
  occupation:
    type: button
    textColor: '#212529'
    rounded: 10px
    height: 40px
    padding: 7px 16px
    typography: 16px / 500
    hover: '#e9ecef'
    pressed: '#e9ecef'
    use: 職務, the occupation-filter button on the white search bar; transparent at rest, with a 16px/500 visible label and a 14px/500 container.
  job-pair:
    type: button
    textColor: '#2066ec'
    rounded: 0px
    height: 64px
    padding: 1px 0px 0px
    typography: 16px / 500
    hover: 'self border: none | none | 2px solid rgba(0, 0, 0, 0) | none -> none | none | 2px solid rgb(32, 102, 236) | none'
    pressed: 'self border: none | none | 2px solid rgba(0, 0, 0, 0) | none -> none | none | 2px solid rgb(32, 102, 236) | none'
    use: 職接配, a navigation link on the white header; hover and press reveal its 2px blue bottom border. The visible label is 16px/500.
  service-card:
    type: card
    backgroundColor: '#f8f9fa'
    textColor: '#212529'
    border: '#e9ecef'
    rounded: 16px
    width: 226.9px
    height: 66px
    padding: 8px 16px
    typography: 16px / 500
    hover: 'self shadow: none -> rgba(33, 37, 41, 0.2) 0px 0px 1px 0px, rgba(33, 37, 41, 0.08) 0px 2px 16px 0px; self extra:  -> backdrop:blur(30px)'
    pressed: 'self shadow: none -> rgba(33, 37, 41, 0.2) 0px 0px 1px 0px, rgba(33, 37, 41, 0.08) 0px 2px 16px 0px; self extra:  -> backdrop:blur(30px)'
    use: 各地人力銀行 / 活動資訊一覽, a service card link to the job-fair site on the white homepage; its visible heading supplies the recorded foreground and font.
  ai-tool-card:
    type: card
    textColor: '#212529'
    rounded: 0px
    width: 225.6px
    height: 224px
    padding: 0px
    typography: 20px / 500
    hover: 'descendant div@0.shadow: none -> rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px; descendant div@0.border: 1px solid rgba(0, 0, 0, 0) -> 1px solid rgb(233, 236, 239); descendant div@0.ex:  -> backdrop:blur(30px)'
    pressed: 'descendant div@0.shadow: none -> rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(33, 37, 41, 0.04) 0px 0px 12px 0px; descendant div@0.ex:  -> backdrop:blur(30px)'
    use: AI 小精靈, a tool card link on the white homepage. The anchor itself is transparent and square; its rounded inner div carries hover and pressed effects. The heading supplies the recorded foreground and font.
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    ui: Noto Sans TC
---

# Design System Inspiration of 1111 Job Bank

## Overview

### Visual Theme & Atmosphere

1111 人力銀行 is a job-matching service for jobseekers and employers. Its company introduction dates 全球華人股份有限公司 to 11 November 1999 and connects employment with helping businesses earn, employees progress and society benefit. The company identifies its head office in Taipei. [Company introduction](https://www.1111.com.tw/13SP/summary/index.asp)

The live homepage combines a red “1111” logo with a blue search-and-navigation interface, white search surfaces, rounded service cards and dense grids of vacancies. A large illustrated campaign banner provides a more expressive layer above the practical job listings. These are observations of this homepage, not a published brand manifesto. Its current product story foregrounds AI recommendations, résumé checking, biography generation and an AI job-search assistant, alongside salary and career tools. The four-feature block explicitly introduces AI-assisted discovery, résumé preparation and answers to job-search questions. [Live homepage](https://www.1111.com.tw/)

The measured homepage is the Traditional Chinese Taiwan surface at `www.1111.com.tw/`, with HTML language `zh-Hant-TW`; there was no regional redirect. This reference describes the desktop web surface.

### Brand Narrative

The company introduction connects its repeated “1定要” promises with business earnings, employee pay, learning/contribution and giving back. Its stated vision includes “為年輕人找前途” and “為台灣添活力”. Today's homepage adds AI recommendations and résumé assistance to this employment-service story. No dated rebrand announcement or public design-system documentation was verified. [Company introduction](https://www.1111.com.tw/13SP/summary/index.asp), [homepage](https://www.1111.com.tw/)

### Principles

Design implications from the measured surface: put search first; separate compact service shortcuts from vacancy details; use blue for the main search/navigation actions and deeper blue for job titles; provide visible interaction feedback through fill, border and shadow. These are reference-building observations, not attributed corporate design principles.

### Personas

The official introduction names students, new graduates, salaried workers, mid/senior-level talent and people returning to work as matching groups; these are product segments, not researched personas. [Service introduction](https://www.1111.com.tw/introduce)

## Colors

### Seen on the measured page

- **word** `#343a40` — Inherited container ink on the search button and both card anchors; the visible search label overrides it with white.
- **foreground** `#495057` — Search input ink and the most frequent paragraph ink (33 paragraphs).
- **control-heading** `#212529` — Visible occupation-filter label and both measured card headings.
- **surface** `#ffffff` — Search input background and search-button label; the transparent navigation link sits on white.
- **job-title** `#0f47b8` — Job-title links, including the surveyed 門市服務人員 link, use this darker homepage blue.
- **divider** `#ced4da` — The homepage inline CSS assigns this border to .identity-type-tab; its rendered border census count is 38.
- **control-line** `#e9ecef` — Service-card rest border, occupation hover/pressed fill, and AI-tool-card hover border.
- **service-surface** `#f8f9fa` — Rest background of the 各地人力銀行 service card.
- **active-section** `#1a66ff` — Rest fill of the surveyed active 傳統製造 and 求職面試 section buttons.
- **preference-action** `#cd2742` — Ink of surveyed 填寫求職偏好 and 登入會員 actions.
- **main** `#2066ec` — Search button rest fill; 職接配 navigation label and its hover/pressed bottom border; CSS --color-main.
- **active-job-tab** `#cf2323` — Homepage inline CSS assigns this fill to active job-section tabs and this ink to .explore-jobs-login-prompt__lead; census records two backgrounds and one text occurrence.
- **body-background** `#f7f7f7` — Homepage inline @layer base body rule sets this background; census records one background occurrence.
- **search-hover** `#1e5fdb` — Search button hover and keyboard-focus background.
- **search-pressed** `#1b57ca` — Search button pressed background.

The main interface accent is `#2066ec`, not a sampled pixel from the red logo. The search button has two distinct darker interaction fills. Colours whose census counts did not identify a usable role are omitted from tokens; the full candidate-by-candidate decisions are in report.md.

### Declared in the site's CSS; not seen painted on this measured page

These colours are listed for reference and are not exported as tokens: nothing in this capture was painted with them.

These are root palette steps and semantic properties added or customized by the application. They are retained as declarations, not as claims that a control currently uses them. Token names preserve the CSS property names without the leading `--`.

- `color-bg-color`: `#f6fafa` — `--color-bg-color`, `--color-detail-background`.
- `color-gray-1000`: `#000000` — `--color-gray-1000`.
- `color-black-thin`: `#939da7` — `--color-black-thin`, `--color-gray-400`.
- `color-blue-1`: `#2ba2ef` — `--color-blue-1`.
- `color-blue-150`: `#bcd1f9` — `--color-blue-150`, `--color-select-border`.
- `color-blue-2`: `#e8f6fc` — `--color-blue-2`.
- `color-blue-200`: `#a9c2f7` — `--color-blue-200`.
- `color-blue-3`: `#d1eaf8` — `--color-blue-3`.
- `color-blue-300`: `#79a3f4` — `--color-blue-300`.
- `color-blue-4`: `#009cd8` — `--color-blue-4`.
- `color-blue-5`: `#04aff0` — `--color-blue-5`.
- `color-blue-600`: `#1a52bd` — `--color-blue-600`.
- `color-blue-700`: `#133d8e` — `--color-blue-700`.
- `color-blue-800`: `#0d295e` — `--color-blue-800`.
- `color-blue-900`: `#0a1f47` — `--color-blue-900`.
- `color-blue-950`: `#030a18` — `--color-blue-950`.
- `color-disabled`: `#aaaaaa` — `--color-disabled`.
- `color-gold`: `#c1a05c` — `--color-gold`.
- `color-gray-1`: `#dedede` — `--color-gray-1`.
- `color-gray-2`: `#505050` — `--color-gray-2`.
- `color-gray-3`: `#f4f6f7` — `--color-gray-3`.
- `color-gray-300`: `#adb5bd` — `--color-gray-300`.
- `color-gray-4`: `#cbcbcb` — `--color-gray-4`.
- `color-gray-5`: `#e6edf2` — `--color-gray-5`.
- `color-gray-900`: `#141618` — `--color-gray-900`.
- `color-green-1`: `#d4eace` — `--color-green-1`.
- `color-green-100`: `#bce3d6` — `--color-green-100`.
- `color-green-2`: `#abd99f` — `--color-green-2`.
- `color-green-200`: `#9bd6c2` — `--color-green-200`.
- `color-green-3`: `#306621` — `--color-green-3`.
- `color-green-300`: `#6ec3a7` — `--color-green-300`.
- `color-green-4`: `#7c6204` — `--color-green-4`.
- `color-green-400`: `#51b895` — `--color-green-400`.
- `color-green-5`: `#24d299` — `--color-green-5`.
- `color-green-50`: `#e9f6f2` — `--color-green-50`.
- `color-green-500`: `#26a67b` — `--color-green-500`.
- `color-green-600`: `#239770` — `--color-green-600`.
- `color-green-700`: `#1b7657` — `--color-green-700`.
- `color-green-800`: `#155b44` — `--color-green-800`.
- `color-green-900`: `#104634` — `--color-green-900`.
- `color-highlight`: `#ea4b65` — `--color-highlight`, `--color-red-4`, `--color-red-500`.
- `color-home-banner`: `#29b0cf` — `--color-home-banner`.
- `color-home-blue-100`: `#b8d2ff` — `--color-home-blue-100`.
- `color-home-blue-1000`: `#061d4d` — `--color-home-blue-1000`.
- `color-home-blue-200`: `#99bbff` — `--color-home-blue-200`.
- `color-home-blue-300`: `#6699ff` — `--color-home-blue-300`.
- `color-home-blue-400`: `#4d88ff` — `--color-home-blue-400`.
- `color-home-blue-50`: `#e3ecfc` — `--color-home-blue-50`.
- `color-home-blue-600`: `#1259e5` — `--color-home-blue-600`.
- `color-home-blue-800`: `#0b378f` — `--color-home-blue-800`.
- `color-home-blue-900`: `#09296b` — `--color-home-blue-900`.
- `color-home-red-100`: `#ffc2c2` — `--color-home-red-100`.
- `color-home-red-1000`: `#420b0b` — `--color-home-red-1000`.
- `color-home-red-200`: `#ff9e9e` — `--color-home-red-200`.
- `color-home-red-300`: `#fa6e6e` — `--color-home-red-300`.
- `color-home-red-400`: `#ff4b4b` — `--color-home-red-400`.
- `color-home-red-50`: `#fce9e9` — `--color-home-red-50`.
- `color-home-red-500`: `#e52727` — `--color-home-red-500`.
- `color-home-red-700`: `#a61c1c` — `--color-home-red-700`.
- `color-home-red-800`: `#801616` — `--color-home-red-800`.
- `color-home-red-900`: `#611010` — `--color-home-red-900`.
- `color-main-background`: `#31b4bc` — `--color-main-background`.
- `color-orange-1`: `#f86800` — `--color-orange-1`.
- `color-orange-2`: `#f55858` — `--color-orange-2`.
- `color-orange-3`: `#ff722b` — `--color-orange-3`.
- `color-orange-4`: `#fff8f5` — `--color-orange-4`.
- `color-orange-5`: `#f25b3d` — `--color-orange-5`.
- `color-orange-6`: `#d93d2b` — `--color-orange-6`.
- `color-purple-1`: `#6c3df1` — `--color-purple-1`.
- `color-red-1`: `#ff0000` — `--color-red-1`.
- `color-red-2`: `#f21414` — `--color-red-2`.
- `color-red-3`: `#f22727` — `--color-red-3`.
- `color-red-5`: `#fcb9e7` — `--color-red-5`.
- `color-red-6`: `#fecced` — `--color-red-6`.
- `color-red-7`: `#dc1e62` — `--color-red-7`.
- `color-red-8`: `#ffe8ee` — `--color-red-8`.
- `color-red-9`: `#fdf6f8` — `--color-red-9`.
- `color-teal-bg`: `#f0faf9` — `--color-teal-bg`.
- `color-teal-bright`: `#2bd9d9` — `--color-teal-bright`.
- `color-teal-dark`: `#03a1a1` — `--color-teal-dark`.
- `color-teal-default`: `#00b2b2` — `--color-teal-default`.
- `color-teal-light`: `#c7f2ef` — `--color-teal-light`.
- `color-yellow-1`: `#ffe99c` — `--color-yellow-1`.
- `color-yellow-2`: `#fadb6d` — `--color-yellow-2`.
- `color-yellow-3`: `#ffb744` — `--color-yellow-3`.

Alpha values stay outside the opaque palette: `--color-main-50: #e9f0fd80`, `--color-mask: #0000004d`, and `--color-transparent: #0000`. These are declarations, not sampled rendered surfaces.

## Typography

- **Official product use:** no first-party typography specification was found in the opened sources.
- **Live-loaded:** the census lists **Noto Sans TC**, normal 400, 500 and 700. It is the only family promoted to the typography family token. The page requests Google Fonts CSS containing Noto Sans TC; the cross-origin stylesheets were unreadable to the CSS-rule walk, so individual loaded-face file URLs were not captured.
- **Official distributed assets:** no font package or license was opened; none is claimed.
- **Declared-only:** heading and button stacks name Roboto, Noto Sans TC, Helvetica Neue, Helvetica, Arial, PingFang TC, Heiti TC and Microsoft JhengHei. Roboto is first in their computed stacks but absent from the loaded-face census. The body separately declares a v-sans/system stack. Font-face declarations include runes at `/_nuxt/0I5pJ268p0923e18.B1uDHa1B.woff2` and swiper-icons as embedded font data; neither is loaded in the census.
- **Unresolved:** exact glyph-by-glyph fallback and the origin of v-sans. No specimen is assigned to a declared-only face. Substitute: none chosen.

### Measured scale

Visible search label 15px/400; occupation and navigation labels and service-card heading 16px/500; search input 16px/400 with 25.6px line height; job-title links 18px/500 with 27px line height; AI-tool heading 20px/500. Popular-search links use 14px/500 at 23.8px line height; the footer telephone link uses 14px/700 at 20px. The search and card anchor containers themselves are 14px/400, which must not replace their child-label metrics.

## Layout

At 1440px viewport width the surveyed hero anchor spans 1320px from x=60. The header navigation controls are 64px tall; the fixed-element list reports a 65px header box including its boundary. It precedes the campaign banner. The search bar groups occupation, location, keyword entry and search action in one white horizontal surface. Identity tabs, compact service cards and a four-column vacancy view follow. Further down, company modules, campaign images, tools and editorial links precede the feature explanation and footer. The full survey screenshot is 1440×5026px.

Keep job title, employer, salary, location and experience as distinct lines when reproducing the observed vacancy-card hierarchy. The carousel contents can change between capture passes; measured geometry belongs to the identified control, not a fixed job listing.

### Responsive Behavior

Mobile and breakpoint transitions were not measured; the CSS declares desktop/mobile header heights of 64px/45px, which does not establish their responsive behavior.

## Elevation & Depth

The service-card hover and press shadow is `rgba(33, 37, 41, 0.2) 0px 0px 1px 0px, rgba(33, 37, 41, 0.08) 0px 2px 16px 0px`, accompanied by `backdrop:blur(30px)`.

The AI-tool card's inner div changes from no shadow to `rgba(0, 0, 0, 0.05) 0px 1px 2px 0px` on hover, with a 1px `#e9ecef` border and 30px backdrop blur. During press, its measured shadow becomes `rgba(33, 37, 41, 0.04) 0px 0px 12px 0px`, with the same blur. The raw strings include additional zero-alpha shadow layers; these remain intact in the compiled component and verification proof. The pressed diff does not establish that the hover border persisted.

Root CSS also declares `--shadow-panel: 0px 1px 4px .1px #a9a9a944` and `--shadow-top: 0px -3px 4px .1px #a9a9a944`; these declarations are separate from the measured card shadows.

## Motion & Easing

The service-card link computes `all 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s`. The other five controls compute `all 0s ease 0s` on the measured element. These exact raw transitions are reproduced in verification.md. The outer AI-tool anchor's zero-duration transition does not characterize every descendant or the homepage's animated campaign decoration. No animation-duration or reduced-motion claim is made.

## Components

The following five components come directly from compiled/components.yaml. Their recorded fonts and foregrounds use the visible child label where one was captured.

- **Search:** 60×40px, 8px radius, zero padding; `#2066ec` with a white `#ffffff` 15px/400 child label. Hover `#1e5fdb`; press `#1b57ca` plus a 3px `rgba(32, 102, 236, 0.12)` shadow. Keyboard focus uses the hover fill and that shadow. The container's inherited `#343a40` is not its visible label colour.
- **Occupation filter:** 171×40px, 10px radius, 7px 16px padding; transparent on the white search bar, `#212529` label at 16px/500. Hover and press fill it with `#e9ecef`.
- **職接配 navigation link:** 76×64px, square, 1px 0px 0px padding; transparent on white, `#2066ec` visible label at 16px/500. Hover and press reveal a 2px bottom border of the same blue.
- **各地人力銀行 service card link:** 226.9×66px, 16px radius, 8px 16px padding, `#f8f9fa` background and 1px `#e9ecef` border. Heading `#212529` at 16px/500; inherited anchor ink `#343a40`. Hover and press add shadow and 30px backdrop blur without changing its fill.
- **AI 小精靈 tool card link:** 225.6×224px, transparent square anchor, zero padding; heading `#212529` at 20px/500. The inner rounded div, rather than the anchor, receives the border, blur and shadows described in §6.

The search input stays prose-only: 284×40px, 8px radius, 8px 40px padding, white `#ffffff` fill, `#495057` ink at 16px/400. Hover produces no measured change. Press and keyboard focus produce an `auto` outline, which is excluded from brand states.

Corner-radius tokens map to measured elements: 0px navigation and outer tool-card anchor; 8px search button/input; 10px occupation filter; 16px service card; 24px campaign-image links; 40px hero-banner anchor and section-tab buttons. A radius on an outer link does not describe every nested visual surface.

### States

Hover and press were measured with actual `:hover`/`:active` matches; keyboard focus came from a real Tab walk. Search has authored background and shadow focus changes that revert after blur. The occupation filter, navigation link and two card anchors show only browser `auto` outlines at keyboard focus; no focus token is created for them. The search input likewise has no qualifying brand state and is omitted from components.

“No change” is limited to the tool's computed-style/DOM comparison: self, pseudo-elements, descendants and three ancestor levels. It does not prove absence of pixel-only or out-of-scope changes. No disabled state was measured.

## Do's and Don'ts

- Use the measured blue search action, its white label and its distinct hover/pressed fills.
- Preserve the service card's subtle border and state-dependent shadow/blur.
- Apply AI-tool effects to the inner visual panel; preserve the outer anchor geometry separately.
- Do not turn the browser's `auto` outline into a proprietary focus token.
- Do not render Roboto as a verified loaded brand font or assign job-listing advertisers' imagery to 1111's brand palette.

## Voice & Tone

Homepage labels are task-oriented: “搜尋”, “填寫求職偏好” and “AI 履歷健檢”. Supporting copy frames the AI assistant as a job-search companion: “你的智慧求職好夥伴，精準推薦合適職缺”. Use direct task names and short explanations of what the tool helps the jobseeker do. This is an inference from the observed copy, not an official voice guide.

## Agent Prompt Guide

“Build the observed 1111 desktop search group with a white surface, a 171×40px transparent occupation filter with 10px corners, a 284×40px input with 8px corners, and a 60×40px blue search button with 8px corners. Use `#2066ec`, hover `#1e5fdb`, press `#1b57ca`, and a white 15px/400 button label. Use the verified loaded Noto Sans TC family; preserve the individual label sizes.”

“Create a service-card link with `#f8f9fa` fill, a 1px `#e9ecef` border, 16px corners and 8px 16px padding. Add the measured shadow and 30px backdrop blur on hover and press.”
