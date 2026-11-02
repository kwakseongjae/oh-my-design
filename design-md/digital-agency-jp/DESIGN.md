---
name: Digital Agency Design System (DADS)
colors:
  primary: '#0017c1'
  primary-hover: '#00118f'
  primary-pressed: '#000060'
  link: '#00118f'
  link-pressed: '#e25100'
  canvas: '#ffffff'
  foreground: '#333333'
  ink-strong: '#1a1a1a'
  ink-pure: '#000000'
  muted: '#666666'
  muted-alt: '#767676'
  hairline: '#949494'
  surface: '#f2f2f2'
  surface-alt: '#e6e6e6'
  tint-blue: '#e8f1fe'
  tint-blue-100: '#d9e6ff'
  outline-hover: '#c5d7fb'
  outline-pressed: '#9db7f9'
  error: '#ec0000'
  success: '#197a4b'
  on-primary: '#ffffff'
  focus-highlight: '#ffd43d'
typography:
  display:
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.5
    use: Section-heading style; first-party stylesheet and official Std-32B-150, not a new computed heading measurement
  heading:
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.5
    use: Measured card-title size/weight; line height and sidebar-logo metrics from first-party CSS
  body-lg:
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.7
    use: Measured card body and declared desktop prose
  body:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1
    use: Measured search-input text
  nav:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.3
    use: Measured sidebar navigation label
  button:
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1
    use: Measured search button and outline page-navigation link
rounded:
  none: 0px
  focus-link: 4px
  sm: 8px
  md: 16px
spacing:
  xs: 4
  sm: 8
  md: 12
  base: 16
  lg: 24
  xl: 32
  xxl: 48
  section: 64
components:
  button-filled:
    type: button
    backgroundColor: '#0017c1'
    textColor: '#ffffff'
    rounded: 8px
    height: 48px
    padding: 8px 0px
    typography: 16px / 700
    hover: 'bg #00118f; white label becomes underlined'
    pressed: 'bg #000060; white label remains underlined'
    focus: 'outline 4px solid #000000, offset 2px; box-shadow 0 0 0 2px #ffd43d'
    use: 'search-submit: 検索, the sidebar''s 56px-wide submit button; not submitted during measurement.'
  button-outline:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#0017c1'
    border: '1px solid #0017c1'
    rounded: 8px
    height: 56px
    padding: 12px 16px
    typography: 16px / 700
    hover: 'bg #c5d7fb; text, border and arrow #00118f; underline'
    pressed: 'bg #9db7f9; text, border and arrow #000060; underline'
    focus: 'outline 4px solid #000000, offset 2px; box-shadow 0 0 0 2px #ffd43d'
    use: 'outline-prev: ヘッダーコンテナ: 概要, a link to the preceding component overview on the button page.'
  button-text:
    type: button
    textColor: '#00118f'
    rounded: 0px
    height: 25px
    padding: 0px
    typography: 17px / 700
    hover: 'text, underline and external-link pseudo-element #0017c1'
    pressed: 'text, underline and external-link pseudo-element #e25100'
    focus: 'bg #ffd43d; radius 4px; outline 4px solid #000000, offset 2px; box-shadow 0 0 0 2px #ffd43d'
    use: 'figma-link: デザインデータ（Figma）, an underlined link on the white documentation canvas; its rest background is transparent and omitted here.'
  input-text:
    type: input
    backgroundColor: '#ffffff'
    textColor: '#1a1a1a'
    border: '1px solid #666666'
    rounded: 8px
    height: 48px
    padding: 0px 16px 0px 48px
    typography: 16px / 400
    hover: 'border 1px solid #000000'
    pressed: 'border #000000 with simultaneous focus-visible: outline 4px solid #000000, offset 2px; box-shadow 0 0 0 2px #ffd43d'
    focus: 'outline 4px solid #000000, offset 2px; box-shadow 0 0 0 2px #ffd43d; border remains #666666 without hover'
    use: 'site-search: #sidebar-search-input, 161px wide, labelled サイト内検索; the pressed capture also matches focus-visible.'
  card-canvas:
    type: card
    backgroundColor: '#ffffff'
    textColor: '#000000'
    border: '1px solid #949494'
    rounded: 16px
    height: 153.8px
    padding: 24px
    typography: 17px / 400
    hover: 'bg #f2f2f2; description gains a black underline'
    pressed: 'bg #f2f2f2; description gains a black underline'
    focus: 'outline 4px solid #000000, offset 2px; box-shadow 0 0 0 2px #ffd43d'
    use: 'intro-card: はじめに, a 504.5px-wide navigation link. Visible description #000000; title #00118f at 20px/700. The link itself inherits #333333.'
  nav-link:
    type: button
    textColor: '#333333'
    rounded: 0px
    height: 44px
    padding: 10px 16px
    typography: 16px / 400
    hover: 'bg #f2f2f2; underline #333333'
    pressed: 'bg #f2f2f2; underline #333333'
    focus: 'bg #ffd43d; inset box-shadow 0 0 0 6px #ffd43d; outline 4px solid #000000, offset -4px'
    use: 'intro-nav: はじめに, a 269px-wide sidebar link on white; its transparent rest background is omitted.'
fonts:
  roles:
    sans: Noto Sans JP
---

# Design System Inspiration of Digital Agency Design System (DADS)

## Overview

### Visual Theme & Atmosphere

The Digital Agency Design System (デジタル庁デザインシステム, DADS) brings together design language, UI components and usability/accessibility guidance for public websites and services. Its publisher, Japan's Digital Agency (デジタル庁), makes the system available to both public and private users. The agency's stated mission is digitalization that leaves nobody behind. [Official overview](https://www.digital.go.jp/policies/servicedesign/designsystem), [DADS introduction](https://design.digital.go.jp/dads/introduction/about/).

The live documentation site gives that work a clear visual expression: a white canvas (`#ffffff`), dark prose (`#333333`), underlined deep-blue resource links (`#00118f`), and rounded cards bounded by grey hairlines (`#949494`). The compact blue search button (`#0017c1`) stands beside a white search field in the fixed left sidebar. At the measured desktop size, the button and input are 48px high; the introduction card has a 16px radius and 24px padding. Black-and-yellow keyboard focus is a prominent part of the visual language. These observations describe the documentation site captured on 2026-11-02.

The current guidance describes DADS as a platform design system: adopters define a local design system around their own organization or service. The supplied colors, sizes, spacing and corner shapes are starting values based on the Digital Agency website, and can be edited while preserving the accessibility structure. This makes the reference useful both for reproducing the documentation site's appearance and for understanding which choices the platform leaves to its adopters. [Platform guidance](https://design.digital.go.jp/dads/guidance/design-system/), [local design-system guidance](https://design.digital.go.jp/dads/guidance/local-design-system/).

The live title carries **v2.18.2**. The homepage records Figma v2.18.2 and documentation updates on **2026-10-21**, and explains “β版” as a living standard. Its visible structure combines an introduction, system resources, content cards and dated release information. [Homepage](https://design.digital.go.jp/dads/), [document updates](https://design.digital.go.jp/dads/updates-dads/).

Primary tasks supported by the opened pages are finding guidance through navigation or search, reading component overview/usage/accessibility pages, and locating Figma data or HTML/React examples. The guidance also describes the system as shared material for communication among designers, developers and other stakeholders. [Resources](https://design.digital.go.jp/dads/resources/), [platform guidance](https://design.digital.go.jp/dads/guidance/design-system/).

### Brand Narrative

The Digital Agency was established on **2021-09-01**, as its site policy states. It describes its work as advancing digital transformation and creating services from the public's perspective. Its contact address is in Tokyo. [Site policy](https://www.digital.go.jp/site-policy), [organization](https://www.digital.go.jp/about).

The design-system history records the first Figma publication in **November 2022**. A dedicated DADS site launched on **2024-05-30** to make the guidelines easier to consult. In October 2026, the documentation expanded its account of platform and local design systems, then added usage guidance to multiple components on **2026-10-21**. The visible beta label expresses continuing improvement and research/practice in the system's own description. [History](https://www.digital.go.jp/policies/servicedesign/designsystem), [launch notice](https://www.digital.go.jp/news/83ba2c71-89b9-4b4f-9b24-dd2d06a66774), [updates](https://design.digital.go.jp/dads/updates-dads/), [platform guidance](https://design.digital.go.jp/dads/guidance/design-system/).

The published materials have distinct licensing arrangements. The notices direct documentation users to attribution/editing instructions and the agency's copyright policy. They identify **CC BY 4.0 for Figma Community design data** and **MIT for GitHub code snippets**, with separate treatment of included assets. The resources page links plain HTML/CSS/JavaScript examples and React/Tailwind CSS examples, plus a token-based Tailwind plugin. [Notices](https://design.digital.go.jp/dads/introduction/notices/), [resources](https://design.digital.go.jp/dads/resources/).

### Principles

The first-party guidance names three aims: **accessibility first**, **broad applicability and usefulness for administrative organizations**, and **continuous, sustainable improvement through research and practice**. It explains that reusable primitive information elements support customization and that beta labeling carries the intention to keep improving. [Platform guidance](https://design.digital.go.jp/dads/guidance/design-system/).

The local-system guidance turns those aims into constraints on adaptation: retain semantic color meanings, preserve focus indicators and accessibility implementation, maintain the specified contrast requirements, and keep reading-text line height at least 1.5. Colors, spacing and shapes can then express the adopting service's own design policy. [Local design systems](https://design.digital.go.jp/dads/guidance/local-design-system/).

### Personas

No first-party individual personas were verified. The opened material addresses public-service organizations and their design/development stakeholders; the resources page also points administrative officers and businesses beginning accessibility work to an introductory guide. [Platform guidance](https://design.digital.go.jp/dads/guidance/design-system/), [resources](https://design.digital.go.jp/dads/resources/).

## Colors

The homepage census contains **178 computed root properties** and **190 declared custom properties**. Its palette is first-party: ten primitive hue ramps, neutral ramps and semantic aliases. The values below distinguish observed uses from palette availability. The full raw list is retained in the research report.

| Role or primitive | Value | Opened or measured evidence |
|---|---|---|
| Primary action / on-primary | `#0017c1` / `#ffffff` | Search button rest; blue also supplies outline-link text and border |
| Primary hover / resource-link rest | `#00118f` | Search-button hover, Figma link and card title at rest |
| Primary pressed | `#000060` | Search-button press and outline-link pressed text/border; Blue-1200 |
| Resource-link pressed | `#e25100` | Figma link text, underline and external-link pseudo-element during press; Orange-700 |
| Canvas | `#ffffff` | Input and card backgrounds; viewport shows a white page |
| Foreground | `#333333` | Gray-800; prose paragraphs, sidebar label and inherited card-link foreground |
| Input ink | `#1a1a1a` | Gray-900; search-input computed text color |
| Black | `#000000` | Card-description text, authored focus outline and input hover border |
| Muted | `#666666` | Gray-600; search-input rest border and secondary paragraph ink |
| Neutral threshold grey | `#767676` | Gray-536 in the root palette; the palette documentation identifies it at the text-contrast threshold against white |
| Hairline | `#949494` | Gray-420; introduction-card border |
| Surface | `#f2f2f2` | Gray-50; card and sidebar-link hover/press backgrounds |
| Surface alternate | `#e6e6e6` | Gray-100; root primitive and button-overview background census |
| Blue tint | `#e8f1fe` | Blue-50 root primitive; available in the button-overview census |
| Blue tint 100 | `#d9e6ff` | Blue-100 root primitive; available in the button-overview census |
| Outline hover | `#c5d7fb` | Blue-200; measured previous-page outline-link hover background |
| Outline pressed | `#9db7f9` | Blue-300; measured outline-link pressed background |
| Error | `#ec0000` | `--color-semantic-error-1` resolves to Red-800 |
| Success | `#197a4b` | `--color-semantic-success-2` resolves to Green-800 |
| Focus highlight | `#ffd43d` | Yellow-300; measured focus fill/shadow, paired with black outlines |

The general palette supports more than the blue used by this documentation site. The color guidance defines key, common and semantic colors; semantic hue/meaning relationships must be preserved when adapting a service. The local-system guidance permits changing key colors and using link hues other than blue while preserving its accessibility requirements. [Color guidance](https://design.digital.go.jp/dads/foundations/color/), [palette](https://design.digital.go.jp/dads/foundations/color/color-palette/), [local design systems](https://design.digital.go.jp/dads/guidance/local-design-system/).

The paragraph census is mixed: `#333333` appears five times, black five times and `#666666` once. The measured introduction card makes the distinction concrete: its link inherits `#333333`, its heading is `#00118f`, and its visible description is **black**. Preserve these roles when reproducing that card.

## Typography

**Official product use.** The typography guidance adopts **Noto Sans JP** for proportional text and **Noto Sans Mono** for monospaced text. It identifies the fonts as open source under SIL Open Font License 1.1 and supplies CSS and Google Fonts examples. It explicitly allows OS/device-native fonts and acknowledges that user agents can change the displayed face. [Typography guidance](https://design.digital.go.jp/dads/foundations/typography/).

**Live-loaded.** Both surveys list `Noto Sans JP 100 900 normal` and `Noto Sans 100 900 normal` in loaded faces. Body, H1 and button declarations use `"Noto Sans", "Noto Sans JP", sans-serif`. The page links a Google Fonts stylesheet requesting Noto Sans JP and Noto Sans Mono. The census could not read that cross-origin stylesheet's rules, so the exact font file selected by the capture browser is unresolved.

**Official distributed assets.** The opened first-party stylesheet embeds a variable **Noto Sans** WOFF2 data URL restricted to `unicode-range: U+3B2` (the beta character). The site's notices identify subsetted Noto Sans data and its SIL license. This is a narrowly scoped distributed font asset. [Live stylesheet](https://design.digital.go.jp/dads/assets/B27ZN1QL.css), [notices](https://design.digital.go.jp/dads/introduction/notices/).

**Declared-only on these surfaces.** Noto Sans Mono is named in `--font-family-mono` and officially documented for `pre`/`code`, but neither survey reports it loaded. Its documented role is retained here without a live specimen. The capture's per-control family field reports the first stack member, Noto Sans; it does not establish a face separately for every glyph.

**Unresolved.** Exact per-glyph font selection and consistent rendering across other government devices were not measured. **Substitute: none chosen.**

| Role | Size / weight / line height | Evidence class |
|---|---|---|
| Section heading | 32px / 700 / 1.5 (48px) | Official `Std-32B-150`; desktop heading declaration in the live stylesheet |
| Sidebar site title | 20px / 700 / 1.5 (30px) | Live stylesheet declaration for `.dads-sidebar__logo` |
| Card title | 20px / 700 / 1.5 (30px) | Measured child font and 30px element height; line height declared in `.card__title` CSS |
| Card body / desktop prose | 17px / 400 / 1.7 (28.9px) | Card measurement and prose stylesheet declaration |
| Sidebar navigation | 16px / 400 / 20.8px (1.3) | Measured “はじめに” link |
| Search input | 16px / 400 / 16px (1) | Measured input |
| Filled / outline label | 16px / 700 / 16px (1) | Measured search button and outline link |
| Figma resource link | 17px / 700 / 28.9px | Measured homepage resource link |

The official scale distinguishes regular 400 and bold 700, normally uses at least 16 CSS px for body/UI, and recommends at least 1.5 line height for reading text. It includes display sizes as well as standard, dense, oneline and mono styles. It also defines letter spacing rather than prohibiting it; measured values include 0.32px on the 16px buttons and 0.34px on the 17px card/link. [Typography guidance](https://design.digital.go.jp/dads/foundations/typography/).

## Layout

At 1440×1000 the documentation homepage has a fixed **left sidebar**, measured at 289px including its boundary, with the site title, search and vertical navigation. Main content begins to its right. The introduction and guidance cards share a row, followed by further content cards. On the button overview, a separate sticky table of contents sits beside the document. Both layouts are visible in the captures; they are not a horizontal desktop header.

The stylesheet defines the card grid as `repeat(auto-fit,minmax(min(22rem,100%),1fr))` with a 2rem gap. Its card padding is 1.5rem at the measured desktop width. Main-content and table-of-contents dimensions have their own `--common-*` properties. [Live stylesheet](https://design.digital.go.jp/dads/assets/B27ZN1QL.css).

The prior spacing values remain useful as **observed or declared values**, rather than a mandatory global scale:

| Value | Concrete evidence |
|---|---|
| 4px | Button's declared `.25rem` column gap |
| 8px | Measured filled-button vertical padding; declared search-box gap |
| 12px | Measured outline-link vertical padding |
| 16px | Measured navigation horizontal padding and search-input right padding |
| 24px | Measured card padding |
| 32px | Declared 2rem card-grid gap |
| 48px | Declared 3rem desktop prose H1 bottom margin |
| 64px | Declared 4rem desktop section-heading top margin |

Rem equivalents use the 16px UI reference corroborated by the captures. The [spacing guidance](https://design.digital.go.jp/dads/foundations/spacing/) presents 8 CSS px as a commonly used base and gives an 8/24/64 example. It says absolute spacing values are not prescribed and tokenization is optional. Consistency and expressing relationships between content are the stated concerns.

Measured corner values are 0px for the sidebar/resource links, 8px for the filled/outline/input controls, 16px for the card, and 4px on the focused resource link. The [corner-shape guidance](https://design.digital.go.jp/dads/foundations/corner-shapes/) provides five broad styles and calls for component-specific adjustment according to size and proportion.

### Responsive Behavior

Browser captures cover **desktop 1440×1000 only**. The following responsive facts are first-party documentation or stylesheet declarations, rather than measurements at additional widths:

| Source | Declared behavior |
|---|---|
| General layout guidance | Example with one breakpoint: mobile/tablet below 768px, desktop at or above 768px; adopters may define additional breakpoints |
| Documentation stylesheet, `width >= 48rem` | Prose changes from 1rem to 1.0625rem; 32-style section headings change from 1.5rem to 2rem; card padding becomes 1.5rem on all sides |
| Documentation stylesheet, `width >= 64rem` | Fixed sidebar is displayed and the page uses an 18rem sidebar column |
| Documentation stylesheet, `width >= 80rem` | Documents with a table of contents place it beside the body |
| Card grid | Auto-fit tracks with the 22rem minimum expression in §5; a fixed tablet two-column breakpoint is not declared by that rule |

The measured 48–56px action heights, 8px control radii and 16px card radius are desktop observations. The card's 1rem radius is declared outside a breakpoint. [Layout guidance](https://design.digital.go.jp/dads/foundations/layout/), [live stylesheet](https://design.digital.go.jp/dads/assets/B27ZN1QL.css).

## Elevation & Depth

The measured controls have `box-shadow: none` at rest. Borders and white/grey surfaces do much of the visible grouping on these documentation pages. Keyboard focus adds a yellow shadow to these controls; it is part of their focus indicator.

The wider system documents **eight elevation shadow variables**. For example, `--elevation-1` is `0 2px 8px 1px #0000001a, 0 1px 5px 0 #0000004d`. These alpha colors belong to the shadow definition. The [elevation guidance](https://design.digital.go.jp/dads/foundations/elevation/) explains both drop shadows and overlay shading, treats level 0 as the default, and assigns higher levels to overlay components. It also requires sufficient boundary contrast independently of the shadow. Use its elevation model when the UI's structure benefits from it; a flat rest-state card does not establish a system-wide prohibition.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.none`: `none`

## Motion & Easing

All six measured controls report the exact computed transition **`all 0s ease 0s`**. Their captured style changes therefore provide no nonzero transition duration or authored timing curve to reuse. Disclosure expansion, page transitions and dialog motion were not measured.

The opened stylesheet includes a `prefers-reduced-motion:reduce` rule that disables animations on progress-indicator spinner/linear elements and their descendants. This is a scoped declaration; a universal transition-collapse rule was not established. [Live stylesheet](https://design.digital.go.jp/dads/assets/B27ZN1QL.css).

## Components

Six specific controls were measured at 1440×1000 with real pointer hover/press and keyboard Tab focus. All have authored changes; none of the recorded focus changes persisted after blur. Navigation and resource controls below are links.

| Control | Rest identity and appearance |
|---|---|
| **Filled search button** — “検索” | 56×48px; radius 8px; padding 8px 0px; 16px/700; blue `#0017c1`, white label; transparent 4px double border; no rest shadow |
| **Outline previous-page link** — “ヘッダーコンテナ: 概要” | 360.5×56px on the button overview; radius 8px; padding 12px 16px; 16px/700; white with `#0017c1` text, arrow and 1px border; no rest shadow |
| **Figma resource link** — “デザインデータ（Figma）” | 229.7×25px in the states capture; radius 0; padding 0; 17px/700; transparent over white; underlined `#00118f`; external-link pseudo-element |
| **Site-search input** — `#sidebar-search-input` | 161×48px; radius 8px; padding 0px 16px 0px 48px; 16px/400; white, `#1a1a1a` text, 1px `#666666` border |
| **Introduction card link** — “はじめに …” | 504.5×153.8px; radius 16px; padding 24px; white with 1px `#949494` border; 17px/400 inherited text, blue 20px/700 title and black description; no rest shadow |
| **Sidebar introduction link** — “はじめに” | 269×44px; radius 0; padding 10px 16px; 16px/400; transparent over white, `#333333` label and diamond icon |

The filled search control darkens and gains an underline on hover. The outline link changes its fill, text, border and arrow together. The Figma resource link keeps an underline and changes color through rest, hover and press. The card changes background and underlines its description. Full state values appear in §14.

**Published roster.** The opened [component index](https://design.digital.go.jp/dads/components/) still has 49 unique component destinations. The names are retained in the Japanese used by the index; this roster does not supply measured specifications for those components:

アコーディオン, イメージスライダー, インプットテキスト, カルーセル, カード, コンボボックス, スイッチ, スクロールトップボタン, ステップナビゲーション, セレクトボックス, タブ, チェックボックス, チップタグ, チップラベル, テキストエリア, テーブルコントロール, テーブル／データテーブル, ディスクロージャー, ディバイダー, ドロワー, ノティフィケーションバナー, ハンバーガーメニューボタン, パンくずナビゲーション, ファイルアップロード／ドロップエリア, プログレスインジケーター, ヘッダーコンテナ, ページナビゲーション, ボタン, ボトムナビゲーション, メガメニュー, メニューリスト, メニューリストボックス, モバイルメニュー, モーダルダイアログ, ユーティリティリンク, ラジオボタン, ランゲージセレクター, リソースリスト, 引用ブロック, 日付ピッカー／カレンダー, 検索ボックス, 水平メニュー, 注釈ブロック, 画像, 目次, 箇条書きリスト, 緊急時バナー, 見出し, 説明リスト

No informational-chip or field-error specimen was measured.

### States

**Standard exterior focus indicator**, measured on the filled button, outline link, input and card: `outline: 4px solid #000000`, offset 2px, plus `box-shadow: 0 0 0 2px #ffd43d`. Each is an authored solid outline, and its focus changes clear after blur.

| Control | Hover | Pressed | Keyboard focus |
|---|---|---|---|
| Search submit | Fill `#00118f`; white underline | Fill `#000060`; white underline | Exterior indicator; rest fill remains |
| Outline previous-page link | Fill `#c5d7fb`; text/border/arrow `#00118f`; underline | Fill `#9db7f9`; text/border/arrow `#000060`; underline | Exterior indicator; white fill and rest text remain |
| Figma resource link | Text, underline and external-link pseudo-element `#0017c1` | Text, underline and external-link pseudo-element `#e25100` | Yellow background; radius 4px; exterior indicator; rest text color remains |
| Site search | Border black | Border black plus the exterior indicator; this capture also matches `:focus-visible` | Exterior indicator; rest `#666666` border when pointer is away |
| Introduction card | Fill `#f2f2f2`; description underlined in black | Same recorded changes as hover | Exterior indicator; white fill remains |
| Sidebar introduction link | Fill `#f2f2f2`; `#333333` underline | Same recorded changes as hover | Yellow fill, 6px inset yellow shadow, 4px black outline at **−4px offset** |

All pointer captures actually matched `:hover`; pressed captures also matched `:active`. The probe compared the controls, pseudo-elements, descendants and three ancestor levels, including the navigation/outline SVGs. This is a DOM/computed-style scope; it does not prove absence of changes in canvas, inaccessible frames, closed shadow roots or sibling elements.

The stylesheet additionally declares a hover underline-thickness change from `.0625rem` to `.1875rem` for prose resource links and card titles. The probe's decoration string does not measure thickness; these are declared values from the [live stylesheet](https://design.digital.go.jp/dads/assets/B27ZN1QL.css).

Empty, loading, request-error, form-validation, success, skeleton and disabled presentations were not measured.

## Do's and Don'ts

- Use the measured blue pair for this site's filled actions and resource links, including the darker pressed fill and orange resource-link press.
- Preserve underlines and the black/yellow keyboard indicators. The local-system guidance explicitly says the supplied focus indicator must not be changed.
- Keep 17px/1.7 reading text separate from the denser one-line control and navigation metrics.
- Reproduce the measured 8px control and 16px card radii when recreating these documentation controls.
- Preserve semantic hue/meaning relationships and the local guidance's text/background and non-text contrast requirements when adapting the palette.
- Define an adopter's local design system before customizing components; the guidance permits changing key color, spacing and corners within its accessibility requirements.

These directions follow the six controls and [local design-system guidance](https://design.digital.go.jp/dads/guidance/local-design-system/). Avoid treating a homepage color, font choice, corner range or flat rest state as a universal rule for every adopting service.

## Voice & Tone

The sampled copy uses descriptive Japanese section names and short action labels. Navigation includes “はじめに”, “ガイダンス”, “基本デザイン”, “コンポーネント” and “リソース”; the measured submit label is “検索”. The homepage's “デジタル庁デザインシステムの構成” and “本ウェブサイトのコンテンツ” introduce explanatory sections. Its title openly includes the beta status, while the sidebar adds v2.18.2. [Homepage](https://design.digital.go.jp/dads/).

The component overview distinguishes overview, usage and accessibility content. Release notes attach dates and revisions to changes. This supports a functional, explanatory reading of the sampled voice. The platform guidance leaves organization-specific brand and communication policy to the adopter; no official forbidden-register list was verified. [Button overview](https://design.digital.go.jp/dads/components/button/), [updates](https://design.digital.go.jp/dads/updates-dads/), [platform guidance](https://design.digital.go.jp/dads/guidance/design-system/).

## Agent Prompt Guide

For a documentation page based on the measured surface:

- “Use a white canvas with `#333333` prose, the officially adopted Noto Sans JP, and 17px/1.7 reading text. Place title, search and 16px/400 navigation in a fixed desktop left sidebar.”
- “Build the 56×48px search button in `#0017c1`, white 16px/700 text and an 8px radius. Hover uses `#00118f` with an underline; press uses `#000060`. Keyboard focus adds a 4px black outline, 2px offset and 2px yellow shadow.”
- “Make a white introduction-card link with a 1px `#949494` border, 16px radius and 24px padding. Use a 20px/700 underlined `#00118f` title and 17px/1.7 black description. Hover and press use `#f2f2f2` and underline the description.”
- “Make the previous-page outline link 56px high with 12px 16px padding. Start with `#0017c1` text/border on white; hover uses `#c5d7fb` and `#00118f`; press uses `#9db7f9` and `#000060`.”

For an adopting service, follow the platform's local-system process and preserve its accessibility structure. Noto Sans Mono retains its official code role without a live specimen in this capture. Substitute: none chosen.
