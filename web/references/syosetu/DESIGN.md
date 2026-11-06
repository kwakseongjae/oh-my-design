---
name: Shosetsuka ni Narou (小説家になろう)
colors:
  accent: '#18b7cd'
  background: '#f1f3f5'
  surface: '#ffffff'
  foreground: '#333333'
  heading: '#0d6572'
  link: '#1b8ef3'
  link-hover: '#64b2f7'
  muted: '#999999'
  placeholder: '#b3b3b3'
  border: '#dee2e6'
  registration: '#ff922b'
  dark-surface: '#1f4247'
  dark-foreground: '#f1f3f3'
  rank-first: '#ccbf00'
typography:
  navigation:
    fontSize: 14px
    fontWeight: 400
    use: Header registration and ranking links; measured line-height 21px.
  compact-action:
    fontSize: 11px
    fontWeight: 400
    use: First contest action link; measured line-height 18.7px.
  ranking:
    fontSize: 14px
    fontWeight: 400
    use: Weekly ranking card link; measured line-height 23.8px.
  rank-number:
    fontSize: 16px
    fontWeight: 700
    use: The first serial ranking card's rank numeral.
rounded:
  none: 0px
  small: 3px
components:
  register:
    type: button
    textColor: '#ffffff'
    rounded: 0px
    height: 41px
    padding: 10px
    typography: 14px / 400
    hover: background rgba(255, 255, 255, 0.2)
    pressed: background rgba(255, 255, 255, 0.2)
    use: 'ユーザ登録 — a registration link with a transparent rest background over its #ff922b parent. Focus also adds the white overlay; its auto outline is browser-provided and is not a focus token.'
  contest-works:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#1b8ef3'
    border: '1px solid #dee2e6'
    rounded: 3px
    height: 29.5px
    padding: 4.4px 11px
    typography: 11px / 400
    hover: box-shadow rgba(0, 0, 0, 0.05) 0px 0px 1px 2px
    pressed: box-shadow rgba(0, 0, 0, 0.05) 0px 0px 1px 2px
    focus: box-shadow rgba(0, 0, 0, 0.05) 0px 0px 1px 2px
    use: 応募作品を見る — the first contest's outline action link, a.p-tieup-item__button.c-button, nth 0. Background, ink and border stay unchanged in the measured states.
  nav-ranking:
    type: button
    textColor: '#ffffff'
    rounded: 0px
    height: 41px
    padding: 10px
    typography: 14px / 400
    hover: background rgba(255, 255, 255, 0.2)
    pressed: background rgba(255, 255, 255, 0.2)
    use: 'ランキング — a navigation link with a transparent rest background on the #18b7cd bar. Pointer states come from the second states call. Its auto focus outline is browser-provided and is not a focus token.'
  search-input:
    type: input
    backgroundColor: '#ffffff'
    textColor: '#b3b3b3'
    rounded: 0px
    height: 35px
    padding: 5px 10px
    typography: 14px / 400
    pressed: box-shadow rgba(100, 178, 247, 0.25) 0px 0px 0px 2px; pointer press also focuses the input
    focus: box-shadow rgba(100, 178, 247, 0.25) 0px 0px 0px 2px
    use: Empty header input with placeholder 作品を検索. The measured fg belongs to the placeholder-shown state. Top and bottom borders are 2px solid rgba(133, 213, 225, 0.5); left and right borders are none within the joined search group. Hover showed no change in the probe's compared scope. Filled-input states were not measured.
  rank-card:
    type: card
    textColor: '#1b8ef3'
    rounded: 0px
    height: 87.8px
    padding: 10px
    typography: 14px / 400
    hover: 'background rgba(241, 243, 245, 0.5); title foreground #64b2f7'
    pressed: 'background rgba(241, 243, 245, 0.5); title foreground #64b2f7'
    use: Link to n3225mv in the overall weekly serial ranking. The transparent rest background sits on a white panel. The visible title changes blue; the dark-teal numeral, author ink, grey metadata and gold crown retain their colours. Focus repeats the colour changes and adds a browser auto outline, which is not a focus token.
omitted:
  - section: spacing
    reason: No verified values in current evidence.
---

# Design System Inspiration of Shosetsuka ni Narou (小説家になろう)

## Overview

### Visual Theme & Atmosphere

Shosetsuka ni Narou is a Japanese fiction submission and reading service operated by HinaProject. Its site guide describes free registration, reading published fiction, bookmarks and writing tools. The operator dates the service to 2004 and describes its founding idea as “誰でも小説を投稿した瞬間から小説家”: anyone becomes a novelist upon posting a novel. [Site guide](https://syosetu.com/site/about/), [company history](https://hinaproject.co.jp/company/outline/).

The measured homepage presents a busy reading directory: cyan navigation and a cyan wordmark, blue story links, white list panels on a pale grey page, dark teal headings, and an orange registration area. Small crown icons distinguish the leading ranks. The dominant content is titles, authors and genres; illustration appears in promotional banners and published-book covers. These are observations of the live desktop homepage, not stated corporate design principles. [Live homepage](https://syosetu.com/).

The service evolves through specific reading and writing improvements. In January 2024, its official ranking announcement replaced the homepage's monthly ranking with separate weekly rankings for ongoing serials and short works—the two columns still visible in this capture. A March 2024 announcement documents a separate redesign of user pages and revisions to writing and submission features. These announcements establish product changes; the measurements below describe the public homepage. [Ranking announcement](https://blog.syosetu.com/article/view/article_id/4641/), [user-page announcement](https://blog.syosetu.com/article/view/article_id/4664/).

### Brand Narrative

The operator's history starts with a desire to read fiction more conveniently, dates the service to 2004 and the move from personal to corporate operation to 2010. It describes a 2024 vision centred on creators' ambitions and names apps and author revenue sharing among its subsequent initiatives. That history connects a broad invitation to write with ongoing support for creation. It does not provide a rationale for the homepage's individual colour or typography choices. [Company history](https://hinaproject.co.jp/company/outline/).

### Principles

The verified product idea is open participation in fiction: the help centre says users can publish fiction freely and read posted fiction free of charge. For implementation, the measured homepage supplies three concrete cues: expose reading routes in navigation, place titles above compact metadata, and use restrained background changes to signal interactive rows. The latter cues are observations, not an official principles document. [About the service](https://syosetu.com/helpcenter/helppage/helppageid/1), [homepage](https://syosetu.com/).

### Personas

The official help centre names readers, amateur writers, online writers, professional writers, fiction-site operators, publishers and people in the fiction industry as audiences. No demographic or behavioural persona was researched. [About the service](https://syosetu.com/helpcenter/helppage/helppageid/1).

## Colors

The homepage census contains **299 computed custom properties**, all named `--color-*`. Each matches the first `:root` block in the first-party base stylesheet. The stylesheet walk itself could not read the cross-origin sheets, so its empty declared-property map is not evidence of missing declarations. These are live implementation variables, not a separately published design-system specification. [Base stylesheet](https://static.syosetu.com/view/css/base_narou-pc.css?tkman1).

| Role | Measured value | Evidence and use |
|---|---|---|
| Accent | `#18b7cd` | `--color-site`; background behind the ranking navigation link |
| Page background | `#f1f3f5` | `--color-site-base`, `--color-bg`; also in the background census |
| Surface | `#ffffff` | `--color-ui-bg`; ranking panel, search input and contest action |
| Foreground | `#333333` | `--color-text`; the ranking card's author-name child |
| Heading / rank numeral | `#0d6572` | `--color-text-headline`; measured rank numeral |
| Link | `#1b8ef3` | `--color-link`; resting story title and contest link |
| Link interaction | `#64b2f7` | `--color-link--hover`; ranking title on hover and press |
| Muted metadata | `#999999` | `--color-text--sub`; ranking genre and supporting metadata |
| Empty-input foreground | `#b3b3b3` | `--color-text--placeholder`; search input while its placeholder is shown |
| Button border | `#dee2e6` | `--color-ui-button-border`; contest action's 1px border |
| Registration parent | `#ff922b` | `--color-ui-button-bg--useradd`; parent behind the registration link |
| Footer surface | `#1f4247` | `--color-site-dark-base`; dark footer visible in the full-page capture |
| Footer foreground | `#f1f3f3` | `--color-site-dark-text`; footer links in the survey |
| First-place crown | `#ccbf00` | `--color-ui-theme-rank-1st`; measured crown pseudo-element |

Three translucent values carry interaction: `rgba(255, 255, 255, 0.2)` over navigation or registration; `rgba(241, 243, 245, 0.5)` over the ranking card; and `rgba(100, 178, 247, 0.25)` in the input's focus shadow. The input's top and bottom borders are `rgba(133, 213, 225, 0.5)`. Preserve the underlying surface when using these alpha values.

The most frequent text colour in the census is muted metadata, not body ink. The paragraph-ink census is empty, and the fetched homepage contains no `<p>` elements. The `foreground` role above is supported by its root variable and the author-name measurement; it is not presented as a paragraph measurement.

## Typography

| Evidence class | Verified finding |
|---|---|
| Official product use | The opened company, site-guide and trademark pages do not identify a text typeface. |
| Live-loaded | `document.fonts` reports **`hinaicon 400 normal`**. It is an icon face: the stylesheet applies it to icon pseudo-elements. It is not exported as the UI text family. |
| Official distributed assets | The first-party base stylesheet references `hinaicon` EOT, WOFF, TTF and SVG sources under `static.syosetu.com/view/lib/hinaicon/`. No font binary or font licence was opened. No distributed text-font asset was verified. |
| Declared-only text stack | Body, h1 and button report `-apple-system, "system-ui", "Helvetica Neue", "Segoe UI", Meiryo, "Hiragino Sans", "Hiragino Kaku Gothic ProN", sans-serif`. None is listed as a loaded text face by this census; no specimen is supplied. |
| Declared-only library face | The homepage stylesheet declares `slick`, a carousel icon font. It is not in the loaded-face census and is excluded from product typography. |
| Unresolved | The physical text face selected for Latin, Kana and Han glyphs is not established by these records. |

**Substitute: none chosen.** The reference keeps measured type metrics and omits a machine-readable text-family value. [Base stylesheet](https://static.syosetu.com/view/css/base_narou-pc.css?tkman1), [homepage stylesheet](https://static.syosetu.com/view/css/p_index-pc.css?tm7p5s).

Measured navigation and registration labels are **14px / 400**, with **21px** line height. The ranking link is **14px / 400**, with **23.8px** line height; its rank numeral is **16px / 700**. The compact contest action is **11px / 400**, with **18.7px** line height. These metrics do not establish a font family.

## Layout

At the measured desktop width, a white header contains the wordmark, utility links and a joined search group; a cyan navigation band follows it. A wide promotional carousel precedes the main directory. The ranking panel occupies two equal 364px columns, with announcements and contests in a right sidebar. Further down, the page groups completed serials, updated serials, new short works and published books. The footer returns to dark teal. [Homepage](https://syosetu.com/).

The loaded homepage stylesheet declares a **1048px** content container and navigation list, a **728px** main region, a **330px** joined search group and **15px** gaps between successive main-region blocks. These are source declarations; the survey independently places the two ranking columns at x=189 and x=553, each 364px wide. Repeated list-row padding is the measured **10px**. [Homepage stylesheet](https://static.syosetu.com/view/css/p_index-pc.css?tm7p5s).

Dense titles are intentional: the official help page says it abbreviates some titles and author names to fit more information. It documents weekly-ranking title limits of 40 characters on desktop and 35 on smartphones. [Homepage help](https://syosetu.com/helpcenter/helppage/helppageid/96/).

### Responsive Behavior

Mobile layout was not measured. The official site guide confirms PC and smartphone support; its help page separately documents shorter ranking-title limits on smartphones. Those statements do not establish breakpoints or a mobile component geometry. [Site guide](https://syosetu.com/site/about/), [homepage help](https://syosetu.com/helpcenter/helppage/helppageid/96/).

## Elevation & Depth

The ranking panel's measured ancestor has 2px top and bottom borders in `rgba(24, 183, 205, 0.5)` and a paired shadow: `rgba(0, 0, 0, 0.05) 0px 3px 1px -1px, rgba(0, 0, 0, 0.05) 0px -3px 1px -1px`. The row itself has no shadow. The compact contest action gains a shallow shadow during interaction; the search field uses a zero-blur, 2px focus shadow. Keep these roles distinct.

## Motion & Easing

The contest action's raw computed transition is **`all 0.2s ease 0s`**. Registration, ranking navigation, the search input and the ranking card each report **`all 0s ease 0s`**. These strings are copied from control identity records. Carousel timing, reduced-motion behaviour and other motion were not measured.

## Components

All five controls are homepage product controls. Registration, navigation, contest actions and ranking cards are links; the search field is an input. The following are computed measurements at 1440×1000, not recommended minimum sizes.

| Control | Identity at rest | Measured interaction |
|---|---|---|
| `register` — ユーザ登録 | 110.6×41px; radius 0; padding 10px; 14px/400; transparent link over orange parent; white label; no border or shadow | Hover and press add the 20% white background layer. Keyboard focus adds the same layer plus a browser `auto` outline. |
| `contest-works` — 応募作品を見る | First `a.p-tieup-item__button.c-button`; 125×29.5px; radius 3px; padding 4.4px 11px; 11px/400; white background, blue label, 1px grey border; no resting shadow | Hover, press and keyboard focus add `rgba(0, 0, 0, 0.05) 0px 0px 1px 2px`. Background, foreground and border retain their rest values. |
| `nav-ranking` — ランキング | 110.6×41px; radius 0; padding 10px; 14px/400; transparent link over cyan bar; white label; no border or shadow | The second states call measures the same 20% white layer on hover and press. Focus also adds a browser `auto` outline. |
| `search-input` — 作品を検索 | Empty input, 216.1×35px at initial rest; radius 0; padding 5px 10px; 14px/400; white background, placeholder-grey foreground; top/bottom 2px translucent borders, no side borders; no resting shadow | Hover has no detected change in the compared scope. Pointer press also focuses the input and adds the same shadow as keyboard focus: `rgba(100, 178, 247, 0.25) 0px 0px 0px 2px`. |
| `rank-card` — weekly serial rank 1, `n3225mv` | 364×87.8px; radius 0; padding 10px; 14px/400; transparent link on white panel; blue title; right separator and bottom pseudo-element separator use 1px `rgba(0, 0, 0, 0.1)` | Hover and press add the half-opacity pale background and lighten the title to the interaction blue. Focus repeats those changes and adds a browser `auto` outline. |

The card's visible title child changes colour. Its numeral, author name, metadata and crown keep their separate colours. The probe's generic label picker selected the rank numeral; that numeral's colour is not the card-title colour.

Hover and pressed snapshots have matching pseudo-state flags, but the capture tool lost those states during PNG cropping. Focus crops were inspected to confirm the selected controls. The reference uses the computed snapshots, with the crop limitation recorded in the verification notes.

### States

The measured states are resting, real pointer hover, held pointer press and keyboard Tab focus. The input's hover comparison covers itself, its pseudo-elements and three ancestor levels, with no descendants; it found no change across the probe's compared properties. This does not establish absence of pixel-only or out-of-scope changes.

Registration and navigation use the white overlay. The contest action gains its shallow shadow. The search input gains its blue-tinted focus shadow, which returns to none after blur. The ranking title lightens while its row background changes; its author, metadata, numeral and crown remain unchanged. The pressed samples include focus caused by pointer-down, so they do not isolate an independent active-only rule.

The registration, navigation and ranking links have `outline-style: auto` under keyboard focus. That ring is browser-provided; no branded focus-ring colour or corresponding component focus token is declared. Their authored background/colour focus observations remain documented above. Disabled states and filled-input states were not measured and have no tokens.

## Do's and Don'ts

- Use cyan for the navigation surface, blue for reading links and orange for the registration parent.
- Preserve square ranking rows and the search input's square middle segment; the compact contest action has a measured 3px radius.
- Keep title, author, genre and rank colours separate when a row changes state.
- Preserve the background beneath translucent interaction layers.
- Preserve the official mark's proportions and colours. Its trademark guideline prohibits alterations and requires surrounding isolation space, without giving a numeric spacing value. [Trademark guideline](https://hinaproject.co.jp/company/trademark/).
- Leave the text family unresolved; do not turn the declared stack or the loaded icon face into a verified text-font specimen.

## Voice & Tone

The homepage calls itself “みんなのための小説投稿サイト” and labels tasks directly: 作品検索, ユーザ登録 and 応募作品を見る. The site guide invites visitors to register for free and explains practical benefits. A suitable reference cue is inclusive introductory copy followed by short task labels; this is an interpretation of those examples, not a published voice manual. [Homepage](https://syosetu.com/), [site guide](https://syosetu.com/site/about/).

## Agent Prompt Guide

“Build a desktop fiction directory with pale grey page ground, white list panels, cyan navigation, blue story links and an orange registration area. Use square 364×87.8px ranking links with 10px padding and 14px/400 type at 23.8px line height. Hover adds the measured translucent pale background and lightens only the linked title and its inheriting containers. Retain separate author, genre, rank and crown colours. Keep the text family unspecified.”

“Make the middle field of a joined search control 35px high, square, with 5px 10px padding. In its empty state use the measured placeholder foreground; keyboard focus adds `rgba(100, 178, 247, 0.25) 0px 0px 0px 2px`.”

## Governance

### Known Gaps

- **Contrast, `contest-works`.** Text `#1b8ef3` on `#ffffff` measures 3.38:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `search-input`.** Text `#b3b3b3` on `#ffffff` measures 2.10:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
