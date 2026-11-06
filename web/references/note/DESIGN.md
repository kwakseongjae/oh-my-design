---
name: note
colors:
  primary: '#08131a'
  foreground: '#08131a'
  primary-reaction: '#202a30'
  canvas: '#ffffff'
  surface: '#ffffff'
  on-primary: '#ffffff'
  background-secondary: '#f5f8fa'
  general-black: '#000000'
  success: '#1e7b65'
  success-reaction: '#196755'
  success-subdued: '#e6f6f2'
  danger: '#b22323'
  danger-subdued: '#fdf3f3'
  like: '#d13e5c'
  caution: '#916626'
  caution-subdued: '#fefbea'
  green-400: '#2cb696'
typography:
  body:
    fontWeight: 400
    use: Normal-weight root token; long-form article metrics were not measured
  heading:
    fontSize: 20px
    fontWeight: 700
    use: Homepage section-heading link, 30px line height
  button:
    fontSize: 12px
    fontWeight: 700
    use: Header account links, 18px line height
  input:
    fontSize: 14px
    fontWeight: 400
    use: Header search input, 21px line height
rounded:
  control: 8px
  overlay-link: 0px
spacing:
  sm: 8
  base: 16
components:
  button-primary:
    type: button
    backgroundColor: '#08131a'
    textColor: '#ffffff'
    border: '1px solid #08131a'
    rounded: 8px
    height: 32px
    padding: 0px 12px
    typography: 12px / 700
    hover: Internal span scales 0.99 to 1; its ::before rgba(255, 255, 255, 0.03) layer changes opacity 0 to 1
    pressed: Same scale and ::before layer as hover; its ::after rgba(255, 255, 255, 0.03) layer also changes opacity 0 to 1
    use: 会員登録 — a header link to /signup. Base background and white label stay unchanged during hover and press; both effects are internal overlay layers. Keyboard outline-style auto is documented only in prose.
  button-secondary:
    type: button
    textColor: rgba(8, 19, 26, 0.66)
    rounded: 8px
    height: 32px
    padding: 0px 12px
    typography: 12px / 700
    hover: 'Label and pencil fill become #08131a; internal span scales 0.99 to 1 and its ::before rgba(8, 19, 26, 0.03) layer changes opacity 0 to 1'
    pressed: 'Label and pencil remain #08131a; internal span stays at scale 1; its ::before and ::after rgba(8, 19, 26, 0.03) layers both have opacity 1'
    use: 投稿 — a secondary header link to /signup on the white homepage. The link's own background is transparent and omitted; its internal overlays provide the pointer feedback.
  nav-contests:
    type: button
    textColor: rgba(8, 19, 26, 0.66)
    rounded: 8px
    height: 32px
    padding: 4px 8px
    typography: 16px / 700
    hover: 'bg #f5f8fa; fg #08131a'
    pressed: 'bg #f5f8fa; fg #08131a'
    use: 投稿企画 — a sidebar navigation link to https://note.com/contests on white. Its own resting background is transparent and omitted.
  text-field:
    type: input
    backgroundColor: '#ffffff'
    textColor: '#08131a'
    border: 1px solid rgba(8, 19, 26, 0.14)
    rounded: 8px
    height: 39px
    padding: 8px 8px 8px 40px
    typography: 14px / 400
    pressed: border 1px solid rgba(8, 19, 26, 0.22) while the input is also focused
    use: キーワードやクリエイターで検索 — 520px-wide header search input. Hover produced no change in the compared scope. Keyboard focus changes the border to the same 0.22 alpha and draws an auto outline; no focus token is exported.
---

# Design System Inspiration of note

## Overview

### Visual Theme & Atmosphere

note is a Japanese media platform for publishing text, images, audio and video, connecting with readers, and offering paid content. The company was established on December 8, 2011; the service began in April 2014. Its mission is to help everyone start creating and keep creating. The homepage title retains **つくる、つながる、とどける。** — “create, connect, deliver.” [Company](https://note.jp/n/ncdf97fd53291), [service and 2022 identity announcement](https://note.jp/n/n909c0f3ab4b6).

The current identity is monochrome. Kenya Hara of Nippon Design Center designed the 2022 visual identity; the company later described its brand colours as black and white. That change broadened the identity beyond the old notebook symbol. Rounded illustration and attention to wording helped the plainer platform retain warmth. [Official rebrand reflection](https://note.jp/n/n3c5fb0566ab4).

The product's colour evolution continued after the logo launch: note's designers describe a staged move from light green to dark green and then black action buttons, with green assigned to success. Their 2025 token article also documents an 8px corner update and shared names between Figma and implementation. These are concrete reasons to reproduce a neutral interface with modest rounding. [Primary-colour account](https://note.com/note_dsn/n/n553f49b46af4), [design-token account](https://note.com/note_dsn/n/na7eb7e0eeeef).

Discovery continues to evolve too. In February 2026, note announced AI-based article classification and personalized recommendations, alongside topic categories and a rising-topics section. Its stated aim is to help work reach interested readers without making creators chase numbers. [Official recommendation update](https://note.com/info/n/n42bd663f422a).

On the measured homepage, white surrounds colourful creator thumbnails, dark section headings, subdued metadata and a small dark registration action. The action's actual fill is **#08131a**, a blue-black; the page ground is **#ffffff**. The measured edition is the Japanese homepage (`note.com/`, HTML `lang="ja-JP"`), with no regional redirect. This is a desktop discovery surface with a left topic rail and horizontal content rows.

#### Primary tasks

- Publish creative work and offer paid content.
- Discover articles through featured selections, keywords and topics.
- Search by keyword or creator.
- Follow a creator and leave a `スキ` reaction; the official introduction describes reader reactions as encouragement for further creation. [Product introduction](https://note.com/info/n/nea1b96233fbf).
- Support creators through memberships; organizations can publish using note pro. [Company](https://note.jp/n/ncdf97fd53291).

### Brand Narrative

note's identity expanded from the image of a paper notebook toward a broader home for creative activity. The 2022 announcement names Hara's aim for an unobtrusive, trustworthy logotype; his description connects it to water. Its custom note font belongs to this identity work. [Official announcement](https://note.jp/n/n909c0f3ab4b6).

By 2023 the company explicitly described black and white as its brand colours. The later product-colour account distinguishes brand colour from primary UI colour and documents the gradual replacement of green action buttons. The live homepage completes that story at the control level: **#08131a** account actions, white ground, quiet metadata and colour concentrated in creator media. [Rebrand reflection](https://note.jp/n/n3c5fb0566ab4), [primary-colour account](https://note.com/note_dsn/n/n553f49b46af4).

Its official product introduction uses the image of a town where different communities coexist. Editorial selection is one route to discovery; the 2026 update also describes personalized recommendations. [Product introduction](https://note.com/info/n/nea1b96233fbf), [recommendation update](https://note.com/info/n/n42bd663f422a).

### Principles

These implementation directions follow the opened sources and the measured screen:

1. **Support continued creation.** The company's stated mission anchors the product's publishing and membership tasks. [Company](https://note.jp/n/ncdf97fd53291).
2. **Keep the frame neutral.** Use the measured monochrome structure and let creator media provide the page's colour.
3. **Keep semantic roles explicit.** The designers distinguish palette primitives from aliases and limit text-colour choices to their sufficiently contrasting palette steps. Apply named success, danger and like roles deliberately. [Token article](https://note.com/note_dsn/n/na7eb7e0eeeef).
4. **Retain warmth through detail.** The rebrand account identifies illustration and wording as ways to keep a plainer identity approachable. [Rebrand reflection](https://note.jp/n/n3c5fb0566ab4).
5. **Share names across design and code.** The documented token process links Figma Variables to component implementation. [Token article](https://note.com/note_dsn/n/na7eb7e0eeeef).

### Personas

No researched persona profiles were verified; the official company description identifies creators, their supporters, and organizations using note pro.

## Colors

The live root exposes **494 custom properties**. Excluding 51 Tailwind `--tw-*` properties leaves 443 application properties, including 361 `--color-*` entries. These include palette primitives, semantic aliases, social-service colours and 64 `--color-tales-theme-*` entries. A declaration's presence does not establish use on every screen. The complete raw list is in `report.md`.

A direct text fetch of the homepage's first-party CSS confirms 439 of those application definitions, with exact value matches to the census. Four page/header properties remain computed-only. The browser's own stylesheet walk reported the cross-origin sheets as unreadable; the source-text check is recorded separately in `verification.md`.

| Role | Value | Live evidence |
|---|---|---|
| Primary surface / primary ink | **#08131a** | `--color-surface-primary`, `--color-text-primary`; registration fill and search text |
| Primary reaction alias | **#202a30** | `--color-surface-primary-reaction`; a root alias, not the registration button's measured hover fill |
| Canvas / normal surface / inverse text | **#ffffff** | `--color-background-primary`, `--color-surface-normal`, `--color-text-invert` |
| Secondary background | **#f5f8fa** | `--color-background-secondary`; navigation hover and press |
| General black | **#000000** | `--color-general-black`; distinct from the primary surface alias |
| Success / success reaction | **#1e7b65** / **#196755** | `--color-surface-success`, `--color-surface-success-reaction` |
| Success subdued | **#e6f6f2** | `--color-surface-successSubdued` |
| Danger / danger subdued | **#b22323** / **#fdf3f3** | `--color-surface-danger`, `--color-surface-dangerSubdued` |
| Like / offer | **#d13e5c** | `--color-surface-like`, `--color-text-like`, `--color-surface-offer` |
| Caution / caution subdued | **#916626** / **#fefbea** | `--color-surface-caution`, `--color-surface-cautionSubdued` |
| Green palette step 400 | **#2cb696** | `--color-green-400`; retained as a primitive, without the former default-theme role |

Secondary text computes to `rgba(8, 19, 26, 0.66)`, matching `--color-text-secondary: #08131AA8` after computed serialization. Resting search borders compute to `rgba(8, 19, 26, 0.14)`; focus and pointer-down show `rgba(8, 19, 26, 0.22)`. Keep those alpha relationships instead of assigning a new opaque grey.

For note pro, the company documents configurable button and link colours, entered as a brand colour code. This is a publication-customization feature; this capture measures the default note.com homepage. [Official note pro announcement](https://biz.note.com/n/nf524c1f86425).

The colour census contains white backgrounds ×142, `rgb(234, 239, 242)` ×9 and primary blue-black ×6. Text is most often the 0.66-alpha ink ×456, followed by solid primary ink ×168. Paragraph ink is mixed: 0.66-alpha ×24 and solid primary ×22. These are homepage counts, not a measurement of a long-form article's body colour.

## Typography

### Evidence classes

- **Official product use:** note's September 2025 design-token article names **ヒラギノ角ゴシック** for its Web mode and **SF Pro Text** for iOS. The Web statement does not identify the precise Hiragino edition. The iOS statement remains iOS context. [Official token article](https://note.com/note_dsn/n/na7eb7e0eeeef).
- **Live-loaded:** the census's `document.fonts` loaded-face list is empty; its `fontFaces` list is also empty. No live font specimen is established by this capture.
- **Official brand type:** the 2022 announcement documents an original **note font**, with bold and ultralight designs for service names and headings. Hara explicitly says it is not for body text. Its use as the homepage UI face was not established. [Official announcement](https://note.jp/n/n909c0f3ab4b6).
- **Official distributed assets:** the opened brand-help page advertises SVG/PNG logos and an accompanying guideline. No font binary or font licence was opened; distribution of a product font remains unresolved. [Brand resources](https://www.help-note.com/hc/ja/articles/360000235582).
- **Declared-only:** body, h1 and button CSS all declare the stack below. The controls' identity record abbreviates its family to the first name, Helvetica Neue; this does not change the empty loaded-face evidence.

```css
"Helvetica Neue", "Hiragino Sans", "Hiragino Kaku Gothic ProN", Arial, "Noto Sans JP", Meiryo, sans-serif
```

Other root declarations include `--family-monospace: SFMono-Regular,Consolas,Menlo,Courier,monospace` and `--family-number: "Open Sans",sans-serif`. Neither is a loaded-font claim. Exact Web font variant, glyph-level rendering and font licensing are unresolved. Family tokens and specimens are withheld; the documented face metadata remains here. **Substitute: none chosen.**

### Verified scale and hierarchy

| Measured element | Size / weight | Line height |
|---|---|---|
| Account action links | 12px / 700 | 18px |
| Search input | 14px / 400 | 21px |
| Sidebar `投稿企画` | 16px / 700 | 24px |
| Homepage `今日の注目記事` heading link | 20px / 700 | 30px |

Root tokens retain normal weight 400 and bold 700, `--font-size-base: 1rem`, `--font-size-lg: 1.125rem`, `--font-size-xl: 1.25rem`, `--font-size-2xl: 1.75rem`, `--font-size-3xl: 2.25rem` and `--font-size-4xl: 3.5rem`. `--font-size-article-title-desktop: 2rem` is present as a root declaration; article rendering was not measured. Reproduce the observed hierarchy with size, weight and spacing, keeping the font evidence classes explicit.

## Layout

At 1440×1000, the header places the logo at x=24, the 520px search field at x=430, and account actions at the right. The main content starts at x=218; the sticky topic rail is 182px wide. The first content row uses 192px-wide article links at 200px intervals, giving an **8px horizontal gap**. The header gap between `投稿` and `ログイン` is **16px**. These are the sources for the retained spacing values 8 and 16.

Discovery uses horizontal rows beneath section headings, with keyword summaries and a visible `急上昇` (rising) area. The screenshot shows a white ground, colourful media and restrained neutral chrome. An editorial selection and a trends area coexist.

The root also declares `--size-content: 940px`, `--size-content_edit: 580px`, `--size-content_timeline: 580px`, `--size-content_small: 620px`, and two-column sizes 610px / 280px. These declarations are useful dimensional evidence; they do not establish the layout of an unvisited editor or article view. The official identity announcement describes a white-based design with ample whitespace. [Official announcement](https://note.jp/n/n909c0f3ab4b6).

### Responsive Behavior

Only desktop 1440×1000 was rendered. Root declarations include breakpoint values 361, 481, 769, 941, 1280 and 2048px under `--size-breakpoint-xs` through `-2xl`. A second set contains 360, 480, 768, 1280 and 1920px under underscore-named aliases. These are recorded declarations, without verified mobile/tablet reflow rules.

`--navbar-primary-height` is 64px and `--navbar-primary-mobile-height` is 48px. No mobile editor, touch-target or responsive-image claim is made from this desktop capture.

Separately, the February 2026 product announcement documents the category list at the left of the desktop homepage and at the top on smartphones. That is documented behaviour rather than a second rendered viewport in this capture. [Official category update](https://note.com/info/n/n42bd663f422a).

## Elevation & Depth

All five controls found in the first states capture have `box-shadow: none`; the keyword overlay in the second capture does too. Their own surfaces are flat. Root elevation tokens also exist:

```css
--elevation-1: 0px 1px 3px 1px #00000024,0px 1px 2px 0px #00000038;
--elevation-4: 0px 4px 8px 3px #00000024,0px 1px 3px 0px #00000038;
--elevation-6: 0px 6px 10px 4px #00000024,0px 2px 3px 0px #00000038;
```

Their presence supports an available elevation scale. No dropdown or modal application was verified. The survey additionally records a 48px circular carousel button with CSS radius 9999px; this is a local circular treatment, alongside the 8px rectangular controls.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.none`: `none`

## Motion & Easing

The account links and sidebar `投稿企画` compute this transition:

```css
color, background-color, border-color, text-decoration-color, fill, stroke 0.2s cubic-bezier(0.2, 0.4, 0.1, 1) 0s
```

That is a **200ms** transition with **cubic-bezier(0.2, 0.4, 0.1, 1)**. The search input and both overlay links compute `all 0s ease 0s`. These are per-control observations. The account-link state captures additionally establish the internal overlay scale and opacity changes described in §4; they do not establish a site-wide spring or reaction animation.

No reduced-motion behaviour, modal animation, content-loading fade or activated-like sequence was measured.

## Components

### Primary action link — 会員登録

The header link to `/signup` measures **74×32px**, with **8px radius**, **0px 12px padding**, 12px/700 text and 18px line height. Fill and 1px border are **#08131a**, with **#ffffff** text and no shadow.

Hover leaves the link's own fill and text unchanged. An internal empty span changes from `matrix(0.99, 0, 0, 0.99, 0, 0)` to `matrix(1, 0, 0, 1, 0, 0)`, and its `::before` layer, filled with `rgba(255, 255, 255, 0.03)`, changes opacity 0→1. Press retains that effect and also sets the identical `::after` layer to opacity 1. Scale belongs to the internal layer, not the whole control.

### Secondary action link — 投稿

The adjacent link also points to `/signup`. It measures **68×32px**, with **8px radius**, **0px 12px padding**, 12px/700 text and 18px line height. Its resting background is transparent over white; text and the 16px pencil icon use `rgba(8, 19, 26, 0.66)`. Border and shadow are none.

Hover makes the label and pencil **#08131a** and activates an internal `rgba(8, 19, 26, 0.03)` `::before` overlay, with the same internal 0.99→1 scale. Press also activates its `::after` overlay. This measured secondary treatment is an unfilled action link.

### Sidebar navigation link — 投稿企画

The link to `https://note.com/contests` measures **151×32px**, with **8px radius**, **4px 8px padding**, 16px/700 text and 24px line height. At rest it is transparent over white with 0.66-alpha primary ink. Hover and press both set the fill to **#f5f8fa** and the text to **#08131a**. Border and shadow remain none.

### Search input — キーワードやクリエイターで検索

The header input measures **520×39px**, with **8px radius**, **8px 8px 8px 40px padding**, 14px/400 text and 21px line height. Its background is **#ffffff**, text **#08131a**, and border `1px solid rgba(8, 19, 26, 0.14)`; shadow is none. Hover produces no change within the recorded comparison scope. Pointer-down, which also focuses the field, and keyboard focus strengthen the border to 0.22 alpha. The keyboard outline is `auto` and remains outside the component tokens.

### Discovery cards

The article card combines a thumbnail, bold title, author/date metadata and reaction controls. Its measured absolute overlay link — `決算書より先に、私が見る数字があります。銀行の支店長から、町工場の社長になって` — is **192×244.5px**, radius **0px**, padding **0px**, transparent over a white parent, with **#08131a** computed ink and 16px/400 inherited type. That geometry describes the link overlay, not its rounded thumbnail or sibling title.

The first keyword card in the second state capture was `ファミ通`: its overlay link measured **244×242.1px**, radius **0px**, padding **0px**, transparent over white and 16px/400 inherited type. Both card links had unchanged hover/press styles in scope and an `auto` keyboard ring. They remain prose references rather than exported interactive components; visible sibling images and titles are outside the overlay link's descendant comparison.

Editor, follow-button and general form variants were not measured.

### States

| Control | Hover | Pressed | Keyboard focus |
|---|---|---|---|
| 会員登録 | Internal 3% white `::before` appears; overlay scale 0.99→1 | Same, plus 3% white `::after` | `auto` ring only |
| 投稿 | Label/pencil become solid primary ink; 3% ink `::before`; overlay scale 0.99→1 | Same, plus 3% ink `::after` | `auto` ring only |
| 投稿企画 | #f5f8fa fill; #08131a text | Same as hover | `auto` ring only |
| Search input | No change in compared scope | Border alpha 0.14→0.22, with input focused | Same border change and `auto` ring |
| Article overlay link | No change in compared scope | No change in compared scope | `auto` ring only |
| Keyword overlay link | No change in compared scope | No change in compared scope | `auto` ring only |

Every measured hover had `:hover` true, and every pressed snapshot had `:active` true. Scope includes the control, its pseudo-elements, its descendants and their pseudo-elements, plus three ancestor levels and their pseudo-elements. Both card overlay links have zero descendants; their visible sibling content remains outside this comparison. All recorded focus changes cleared on blur. Auto outlines are browser rings, even where the computed colour matches a root focus-colour alias, and produce no focus token here.

Empty, loading, error, published-success, disabled and activated-like states were not measured. The nonsense-path HTTP 404 establishes a missing-page response, without an inferred error-component style.

Root-only disabled declarations are `--color-surface-disabled: #00000024` and `--color-text-disabled: #08131A80`. They document available colour roles; no disabled control was observed rendering them.

## Do's and Don'ts

- Use the measured white ground, blue-black primary ink and 8px control corners.
- Preserve the two internal overlay layers on account actions; a flat hover-fill replacement loses their measured behaviour.
- Keep secondary text as alpha ink, and reproduce the search border's 0.14→0.22 alpha change.
- Use the semantic green success and pink like aliases in their named roles; keep the broader palette distinct from homepage usage.
- Preserve the distinction between an overlay link's square geometry and the rounded imagery behind it.
- Keep officially documented brand type separate from declared-only UI families and unavailable specimens.

## Voice & Tone

The live interface uses short labels: `投稿`, `ログイン`, `会員登録`, `投稿企画`, `今日の注目記事` and `急上昇`. Search names both the content and its creator: `キーワードやクリエイターで検索`. Preserve this concrete task wording when reproducing the measured screen.

The official rebrand reflection describes continuing work on UX writing so intent is easier to understand while retaining note's character. It pairs that work with rounded illustration to keep monochrome expression approachable. This supports clear, considerate wording; no comprehensive forbidden-word or error-message policy was verified. [Rebrand reflection](https://note.jp/n/n3c5fb0566ab4).

The official introduction values enjoying creation and continuing to publish above pageviews, earnings or follower counts. It explicitly welcomes short or imperfect contributions. Use encouragement grounded in that position when writing creative prompts. [Product introduction](https://note.com/info/n/nea1b96233fbf).

## Agent Prompt Guide

Use these measured constructions when building a note-inspired surface:

- “Build a white discovery page with a left topic rail and horizontal media rows. Use #08131a headings, 0.66-alpha metadata and 8px gaps between 192px article cards.”
- “Create the 会員登録 action as a 32px-high link with #08131a fill, white 12px/700 text, 8px radius and 12px horizontal padding. Hover activates a 3% white internal layer; press adds a second one.”
- “Create a 39px-high search input with white fill, primary ink, 8px radius, 40px left padding and a 1px primary-ink border at 0.14 alpha. Focus strengthens that border to 0.22 alpha.”
- “Keep font availability explicit: use the documented Web-font metadata, with no replacement face or unverified specimen.”
